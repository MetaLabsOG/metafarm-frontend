'reach 0.1';
'use strict';

// ====
// TODO
// ====
// 1. Check if we can use beginBlock and endBlock, maybe we will have to use relativeTime instead.
// 2. Ideally we want to have total reward token emission and split it to various pools via multiplier mechanism.
//    However, currently pools are completely independent and we have to set total reward amount per pool and fund it.
// 3. Currently it is not possible to change reward rate or close pool early. Also there are no emergency mechanisms.
// 4. It is not possible to have rewardToken == stakeToken due to reach limitations. Possible ways to solve are:
//    a) have maybeRewardToken which may be null. Cumbersome :(
//    b) have two different contracts. Probably will cause problems later :(
// 5. Native tokens (ALGO) are handled differently in Reach. So for now it does not support ALGO staking/rewards.
// 6. It needs timeout at endBlock.
// 7. Maps are not trusted on Algorand, they can be set to 0. Therefore we can't trust rewardPerTokenPaid.

// This is initial state of one particular farm.
// Values are provided initially by the Creator participant and later accessible in vState view. 
const InitialStateObj = {
  // Token to farm in this farm. Usually LP token but normal stacking is also allowed.
  stakeToken: Token,
  // Token which farm users will get as reward. Usually META token. If it is None, then stakeToken is used.
  rewardToken: Token,
  // First block when pool will start to provide rewards.
  beginBlock: UInt,
  // Last possible block when pool will cease to provide rewards.
  endBlock: UInt,
  // *rewardToken* distributed per block.
  rewardPerBlock: UInt,
};

// THIS IS REQUIRED TO BE THE SAME AS IinitialStateObj
const InitialState = Struct([
  ["stakeToken", Token],
  ["rewardToken", Token],
  ["beginBlock", UInt],
  ["endBlock", UInt],
  ["totalRewardAmount", UInt],
]);

const GlobalState = Struct([
  // initially set to 0
  ["totalStaked", UInt],
  ["lastUpdateBlock", UInt], // TODO is it UINT?
  ["rewardPerTokenStored", UInt],
]);

const LocalState = Struct([
  ["staked", UInt],
  ["reward", UInt],
]);

export const main = Reach.App(() => {
  // TODO DANGER CHECK CAREFULLY
  setOptions({
    //untrustworthyMaps: true
  });

  // TODO I am not sure if we need this at all.
  const Common = {
    ...hasConsoleLogger,
    deployed: Fun([], Null),
  };

  const Creator = Participant('Creator', {
    ...Common,
    getParams: Fun([], Object({
      ...InitialStateObj
    })),
  });

  // It is dummy Participant. It should not define any methods except ones in Common. Because we follow this model:
  // Input:
  // * Api call arguments
  // Output
  // * Local: Api callback arguments (in some sense, it is what Api returns)
  // * Global: Emitted events
  const User = Participant('User', {
    ...Common,
  })

  // Does nothing, allows "Dummy" participants to compile in strict mode.
  void (User);

  // This is fixed structure, it should not be changed unless absolutely necessary.
  const State = View({
    initial: InitialState,
    global: GlobalState,
    // TODO can we reference this here to avoid passing address? Probably not but worth trying
    local: Fun([Address], LocalState)
  });

  const Api = API({
    // Stage 1
    stake: Fun([UInt], LocalState),
    unstake: Fun([UInt], LocalState),
    claim: Fun([], LocalState),

    // This is mostly for testing
    update: Fun([], LocalState),
    setTime: Fun([UInt], LocalState)
  });

  const Event = Events({
    staked: [Address, UInt],
    unstaked: [Address, UInt],
    claimed: [Address],
    updated: [Address],

    noRewardsLeft: [],
  })

  init();

  // Initialize pool
  Creator.only(() => {
    const {
      stakeToken,
      rewardToken,
      beginBlock,
      endBlock,
      rewardPerBlock
    } = declassify(interact.getParams());
    // TODO sometimes we may want to have stakeToken == rewardToken. Need to handle it. Probably with Maybe(...)
    assume(stakeToken != rewardToken);

    assume(beginBlock < endBlock);

    const totalRewardAmount = (endBlock - beginBlock) * rewardPerBlock;
  });


  // TODO
  // We need some assertions here such as
  // total reward amount is divisible by total time, so we give integral amount at each tick
  // also we need to somehow make reward claiming suchs as [in one tick] sum(all participants rewards) = total reward 
  // using integers only.

  Creator.publish(stakeToken, rewardToken, beginBlock, endBlock, totalRewardAmount, rewardPerBlock);
  commit();
  // Can't pay non-native token in the first transaction(RE0102).
  Creator.pay([[totalRewardAmount, rewardToken]]);

  // ============
  // LINEAR STATE
  // ============
  // Amount of staked *stakeToken* for each Creator participant.
  const stakedM = new Map(UInt); const staked = (p) => fromSome(stakedM[p], 0);
  // Amount of *rewardToken* farmed but not claimed for each Creator participant.
  const rewardM = new Map(UInt); const reward = (p) => fromSome(rewardM[p], 0);
  // TODO DANGER SECURITY ISSUE!!! You cannot trust maps in Algorand, so this can be set to 0 by user.
  // Already claimed rewards per token. Similar to synthetix rewards: https://solidity-by-example.org/defi/staking-rewards/
  const rewardPerTokenPaidM = new Map(UInt); const rewardPerTokenPaid = (p) => fromSome(rewardPerTokenPaidM[p], 0);

  // ===================
  // REWARDS CALCULATION
  // ===================
  const lastBlockWithRewards = (currentBlock) => currentBlock < endBlock ? currentBlock : endBlock;

  const rewardPerToken = (totalStaked, lastUpdateBlock, rewardPerTokenStored, currentBlock) => {
    const rewardBlocksPassed = lastBlockWithRewards(currentBlock) - lastUpdateBlock;
    return totalStaked == 0
      ? 0
      : rewardPerTokenStored + (rewardBlocksPassed * rewardPerBlock) / totalStaked;
  }

  // TODO in synthetix they call rewardPerToken() again instead of passing rewardPerTokenStored, hopefully they had a bug?
  const earned = (p, rewardPerTokenStored) => (staked(p) * (rewardPerTokenStored - rewardPerTokenPaid(p))) + reward(p);

  // This should be called every time when participant does any action. E.g. stake and unstake.
  // The reason is this we calculate amount to claim from the last known state (staked amount, time when staked, reward amount),
  // update state, give rewards, and pending rewards becomes zero until the next state update.

  // Returns new lastUpdateBlock and rewardPerTokenStored.
  // Modifies linear state.
  const updateReward = (p, totalStaked, lastUpdateBlock, rewardPerTokenStored, currentBlock) => {
    const rewardPerTokenStoredNew = rewardPerToken(totalStaked, lastUpdateBlock, rewardPerTokenStored, currentBlock);

    rewardM[p] = earned(p, rewardPerTokenStoredNew);
    rewardPerTokenPaidM[p] = rewardPerTokenStoredNew;

    return [lastBlockWithRewards(currentBlock), rewardPerTokenStoredNew];
  }

  // ====
  // TEST
  // ====

  // This should include all participants. TODO: I think there is a shorthand in Reach to do it but I don't remember.
  each([Creator, User], () => {
    interact.deployed();
  });

  // ====
  // MAIN
  // ====
  const getLocalState = (addr) => {
    return LocalState.fromObject({
      staked: staked(addr),
      reward: reward(addr),
    });
  }

  const keepGoing = (time) => time < endBlock;

  const [
    totalStaked,
    lastUpdateBlock,
    rewardPerTokenStored,
    rewardsPaid, // TODO add to view
    currentTime
  ] = parallelReduce([
    0,
    0, // TODO lastConsensusTime(),
    0,
    0,
    0 // TODO for test
  ])
    .define(() => {
      State.initial.set(InitialState.fromObject({
        stakeToken,
        rewardToken,
        beginBlock,
        endBlock,
        totalRewardAmount,
      }));
      State.global.set(GlobalState.fromObject({
        totalStaked,
        lastUpdateBlock,
        rewardPerTokenStored
      }));
      State.local.set(getLocalState);
    })
    .invariant(
      totalStaked == balance(stakeToken) && totalStaked == stakedM.sum() &&
      currentTime >= lastUpdateBlock
    )
    .while(keepGoing(currentTime))
    .paySpec([stakeToken, rewardToken])
    .api(
      Api.stake,
      (_) => {
        assume(true)
      }, // TODO
      (toStake) => [0, [toStake, stakeToken], [0, rewardToken]],
      (toStake, callback) => {
        callback(getLocalState(this));
        const [newlastUpdateBlock, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateBlock, rewardPerTokenStored, currentTime);
        stakedM[this] = fromSome(stakedM[this], 0) + toStake;

        Event.staked(this, toStake);
        return [
          totalStaked + toStake,
          newlastUpdateBlock,
          newRewardPerTokenStored,
          rewardsPaid,
          currentTime
        ];
      }
    )
    .api(
      Api.unstake,
      (toUnstake) => {
        assume(toUnstake <= staked(this));
        assume(toUnstake <= balance(stakeToken));
      },
      (_) => [0, [0, stakeToken], [0, rewardToken]],
      (toUnstake, callback) => {
        callback(getLocalState(this));
        const oldStaked = staked(this);
        check(toUnstake <= oldStaked);
        check(toUnstake <= balance(stakeToken));

        const [newlastUpdateBlock, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateBlock, rewardPerTokenStored, currentTime);

        // TODO temporarily disable unstake
        stakedM[this] = oldStaked - toUnstake;

        transfer([[toUnstake, stakeToken]]).to(this);

        Event.unstaked(this, toUnstake);
        return [
          totalStaked - toUnstake,
          newlastUpdateBlock,
          newRewardPerTokenStored,
          rewardsPaid,
          currentTime
        ];
      }
    )
    .api(
      Api.claim,
      () => {
        check(reward(this) < balance(rewardToken))
      },
      () => [0, [0, stakeToken], [0, rewardToken]],
      (callback) => { // TODO what is k
        check(reward(this) < balance(rewardToken))
        callback(getLocalState(this));
        const [newlastUpdateBlock, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateBlock, rewardPerTokenStored, currentTime);

        const claimedReward = reward(this);

        if (reward(this) < balance(rewardToken)) {
          transfer([[reward(this), rewardToken]]).to(this);
        }
        rewardM[this] = 0;

        Event.claimed(this);
        return [
          totalStaked,
          newlastUpdateBlock,
          newRewardPerTokenStored,
          rewardsPaid + claimedReward,
          currentTime
        ];
      }
    )
    .api(
      Api.update,
      (callback) => { // TODO what is k
        callback(getLocalState(this));
        const [newlastUpdateBlock, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateBlock, rewardPerTokenStored, currentTime);

        Event.updated(this);
        return [
          totalStaked,
          newlastUpdateBlock,
          newRewardPerTokenStored,
          rewardsPaid,
          currentTime
        ];
      }
    )
    .api(
      Api.setTime,
      (time) => {
        check(time > currentTime);
      },
      (_) => [0, [0, stakeToken], [0, rewardToken]],
      (time, callback) => {
        check(time > currentTime);
        callback(getLocalState(this));
        return [
          totalStaked,
          lastUpdateBlock,
          rewardPerTokenStored,
          rewardsPaid,
          time
        ];
      }
    )

// TODO another loop with withdraw or add withdraw to the same thing?

  Event.noRewardsLeft();

  // Stage 2: withdraw only

  commit();

  Anybody.publish();
  transfer([balance(), [balance(rewardToken), rewardToken], [balance(stakeToken), stakeToken]]).to(Creator);
  commit();

  /*
  TODO need a way for provider to manage this stuff
  .case(Provider,
    (() => ({
       when: PUBLISH_WHEN_EXPR,
       msg: PUBLISH_MSG_EXPR
    })),
    ((msg) => PAY_EXPR),
    ((msg) => {
      CONSENSUS_EXPR
    }))
   .timeout(DEADLINE, () => {
     TIMEOUT_BLOCK
   });*/
});
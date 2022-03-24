'reach 0.1';

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
const InitialState = {
    // Token to farm in this farm. Usually LP token but normal stacking is also allowed.
    stakeToken: Token, 
    // Token which farm users will get as reward. Usually META token. If it is None, then stakeToken is used.
    rewardToken: Token,
    // First block when pool will start to provide rewards.
    beginBlock: UInt,
    // Last possible block when pool will cease to provide rewards.
    endBlock: UInt,
     // Total reward of *rewardToken* distributed to users of the pool between *beginBlock* and *endBlock*
    totalRewardAmount: UInt,
}

const Info = Struct([
  // Following based on InitialState
  ["stakeToken", Token],
  ["rewardToken", Token],
  ["beginBlock", UInt],
  ["endBlock", UInt],
  ["totalRewardAmount", UInt],

  // initially set to 0
  ["totalStaked", UInt],
]);

const UserInfo = Struct([
  ["staked", UInt],
  ["reward", UInt],
]);

export const main = Reach.App(() => {
  // ============
  // PARTICIPANTS
  // ============
  const Common = {
    // For test purposes.
    deployed: Fun([], Null),
  }

  const Creator = Participant('Creator', {
    ...Common,
    getParams: Fun([], Object({
      ...InitialState
    })),
  });

  const Farmer = Participant('Farmer', {
    ...Common,
  })

  // =====
  // VIEWS
  // =====
  const State = View('State', {
    info: Info,
  });

  // ===
  // API
  // ===
  const Farm = API('Farm', {
    stake: Fun([UInt], Null),
    unstake: Fun([UInt], Null),
    claim: Fun([], Null),
    getInfo: Fun([], UserInfo),
  });

  /*=====
    INIT
    =====*/
  init();

  
  // Initialize pool
  Creator.only(() => {
    const {
      stakeToken,
      rewardToken,
      beginBlock,
      endBlock,
      totalRewardAmount
    } = declassify(interact.getParams());
    // TODO sometimes we may want to have stakeToken == rewardToken. Need to handle it. Probably with Maybe(...)
      assume(stakeToken != rewardToken);

    // TODO concept of block is not really defined yet. It can be second, actual block, or some other "network time"
    // depending on chain implementation.
    const rewardPerBlock = totalRewardAmount / (endBlock - beginBlock);
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
  const stakedM = new Map(UInt);
  const staked = (p) => fromSome(stakedM[p], 0);
  // Amount of *rewardToken* farmed but not claimed for each Creator participant.
  const rewardM  = new Map(UInt);
  const reward = (p) => fromSome(rewardM[p], 0);
  // TODO DANGER SECURITY ISSUE!!! You cannot trust maps in Algorand, so this can be set to 0 by user.
  // Already claimed rewards per token. Similar to synthetix rewards: https://solidity-by-example.org/defi/staking-rewards/
  const rewardPerTokenPaidM = new Map(UInt);
  const rewardPerTokenPaid = (p) => fromSome(rewardPerTokenPaidM[p], 0);

  
  // ===================
  // REWARDS CALCULATION
  // ===================
  // TODO we use 1 instead of 1e18 in synthetix contracts
  const rewardPerToken = (totalStaked, lastUpdateTime, rewardPerTokenStored) => {
    if (totalStaked == 0) {
      return 0;
    } else {
      return rewardPerTokenStored + (((lastConsensusTime() - lastUpdateTime) * rewardPerBlock) / totalStaked);
    }
  }

  // TODO we use 1 instead of 1e18 in synthetix contracts
  // TODO in synthetix they call rewardPerToken() again instead of passing rewardPerTokenStored, hopefully they had a bug?
  const earned = (p, rewardPerTokenStored) => {
    return (staked(p) * (rewardPerTokenStored - rewardPerTokenPaid(p)) / 1) + reward(p);
  }

  // This should be called every time when participant does any action. E.g. stake and unstake.
  // The reason is this we calculate amount to claim from the last known state (staked amount, time when staked, reward amount),
  // update state, give rewards, and pending rewards becomes zero until the next state update.

  // Returns new lastUpdateTime and rewardPerTokenStored.
  // Modifies linear state.
  const updateReward = (p, totalStaked, lastUpdateTime, rewardPerTokenStored) => {
      const rewardPerTokenStoredNew = rewardPerToken(totalStaked, lastUpdateTime, rewardPerTokenStored);

      rewardM[p] = earned(p, rewardPerTokenStoredNew);
      rewardPerTokenPaidM[p] = rewardPerTokenStoredNew;

      return [lastConsensusTime(), rewardPerTokenStoredNew];
    }

  // ====
  // TEST
  // ====

  // This should include all participants. TODO: I think there is a shorthand in Reach to do it but I don't remember.
  each([Creator, Farmer], () => {
    interact.deployed();
  });

  // ====
  // MAIN
  // ====
  const [
    keepGoing,
    totalStaked,
    lastUpdateTime,
    rewardPerTokenStored
  ] = parallelReduce([ 
    true,
    0,
    lastConsensusTime(),
    0
   ])
    .define(() => {
      State.info.set(Info.fromObject({
        stakeToken,
        rewardToken,
        beginBlock,
        endBlock,
        totalRewardAmount,
        totalStaked
      }))
    })
    .invariant(true) // TODO
    .while(true) // infinite loop
    .paySpec([stakeToken, rewardToken])
    .api(
      Farm.stake,
      (toStake) => assume(true), // TODO
      (toStake) => [0, [toStake, stakeToken], [0, rewardToken]],
      (toStake, k) => { // TODO what is k
        const [newLastUpdateTime, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateTime, rewardPerTokenStored);
        stakedM[this] = fromSome(stakedM[this], 0) + toStake;
        k(null);
        return [ true, totalStaked + toStake, newLastUpdateTime, newRewardPerTokenStored ];
      }
    )
    .api(
      Farm.unstake,
      (toUnstake) => {
        assume(toUnstake <= staked(this));
        assume(toUnstake <= balance(stakeToken));
      },
      (toUnstake) => [0, [0, stakeToken], [0, rewardToken]],
      (toUnstake, k) => { // TODO what is k
        const oldStaked =  staked(this);
        check(toUnstake <= oldStaked);
        check(toUnstake <= balance(stakeToken));

        const [newLastUpdateTime, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateTime, rewardPerTokenStored);
        stakedM[this] = oldStaked - toUnstake;
        k(null);

        transfer([[toUnstake, stakeToken]]).to(this);
        return [ true, totalStaked - toUnstake, newLastUpdateTime, newRewardPerTokenStored ];
      }
    )
    .api(
      Farm.claim,
      (k) => { // TODO what is k
        const [newLastUpdateTime, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateTime, rewardPerTokenStored);
        rewardM[this] = 0;
        k(null);
        transfer([[reward(this), rewardToken]]).to(this);
        return [true, totalStaked, newLastUpdateTime, newRewardPerTokenStored ];
      }
    )
    .api(
      Farm.getInfo,
      (callback) => {
        const [newLastUpdateTime, newRewardPerTokenStored] = updateReward(this, totalStaked, lastUpdateTime, rewardPerTokenStored);
        callback(UserInfo.fromObject({
          staked: staked(this),
          reward: reward(this)
        }));
        // TODO: maybe we should update something here?
        return [true, totalStaked, newLastUpdateTime, newRewardPerTokenStored ];
      } 
    )

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
'reach 0.1';
//'use strict';

// This is initial state of one particular yield optimizer.
// Values are provided initially by the Creator participant and later accessible in vState view. 
const InitialStateObj = {
  // Token to farm in this farm. Usually LP token but normal stacking is also allowed.
  stakeToken: Token,
  // Token which farm users will get as reward. Usually META token. If it is None, then stakeToken is used.
  rewardToken: Token,
  // Underlying's farm contract id. This autocompouder utilizes this farm.
  underlyingFarmId: Contract,
  // TODO
  creatorFee: UInt,
};

// THIS IS REQUIRED TO BE THE SAME AS InitialStateObj
const InitialState = Struct([
  ["stakeToken", Token],
  ["rewardToken", Token],
  ["underlyingFarmId", Contract],
  ["creatorFee", UInt], // TODO how to set it in UInts? Just * 1000 etc?
]);

const GlobalState = Struct([
  // initially set to 0
  ["lastUpdateBlock", UInt],
]);

const LocalState = Struct([
  ["staked", UInt],
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

    // This is mostly for testing
    //update: Fun([], LocalState),
    //setTime: Fun([UInt], LocalState),
  });

  const Event = Events({
    staked: [Address, UInt],
    unstaked: [Address, UInt],
  })

  init();

  // Initialize pool
  Creator.only(() => {
    const {
      stakeToken,
      rewardToken,
      underlyingFarmId,
      creatorFee
    } = declassify(interact.getParams());
    // TODO sometimes we may want to have stakeToken == rewardToken. Need to handle it. Probably with Maybe(...)
    assume(stakeToken != rewardToken);
  });


  Creator.publish(stakeToken, rewardToken, underlyingFarmId, creatorFee);
  // Can't pay non-native token in the first transaction(RE0102).

  // ============
  // LINEAR STATE
  // ============
  // Amount of staked *stakeToken* for each Creator participant.
  const stakedM = new Map(UInt); const staked = (p) => fromSome(stakedM[p], 0);

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
    });
  }

  const FarmLocalState = Struct([
    ["staked", UInt],
    ["reward", UInt],
  ]);

  const underlyingFarmCtc = remote(underlyingFarmId, {
    stake: Fun([UInt], FarmLocalState),
    unstake: Fun([UInt], FarmLocalState),
    claim: Fun([], FarmLocalState),
  });

  State.initial.set(InitialState.fromObject({
    stakeToken,
    rewardToken,
    underlyingFarmId,
    creatorFee
  }));
  State.local.set(getLocalState);

  const [
    totalStaked,
    lastUpdateBlock
  ] = parallelReduce([
    0,
    0,
  ])
    .define(() => {
      State.global.set(GlobalState.fromObject({
        lastUpdateBlock,
      }));

      //const claim = () => {

      //}
    })
    .invariant(
      totalStaked == stakedM.sum()
    )
    .while(true) // we run forever despite unerlying farm may be bounded
    .paySpec([stakeToken, rewardToken])
    .api(
      Api.stake,
      (_) => {
        assume(true)
      }, // TODO
      (toStake) => [0, [toStake, stakeToken], [0, rewardToken]],
      (toStake, callback) => {
        callback(getLocalState(this));


        //const stateOfUnderlyingFarm = underlyingFarmCtc.claim.withBill([rewardToken])();
        // const state = underlyingFarmCtc.stake.pay([0, [toStake, stakeToken], [0, rewardToken]])(toStake);

        //User.interact.log(stateOfUnderlyingFarm);

        stakedM[this] = fromSome(stakedM[this], 0) + toStake;

        Event.staked(this, toStake);
        return [
          totalStaked + toStake,
          lastUpdateBlock + 1,
        ];
      }
    )
    .api(
      Api.unstake,
      (toUnstake) => {
        assume(toUnstake <= staked(this));
      },
      (_) => [0, [0, stakeToken], [0, rewardToken]],
      (toUnstake, callback) => {
        callback(getLocalState(this));
        const oldStaked = staked(this);
        check(toUnstake <= oldStaked);

        const stateOfUnderlyingFarm = underlyingFarmCtc.unstake(oldStaked);

        User.interact.log(stateOfUnderlyingFarm);

        stakedM[this] = oldStaked - toUnstake;

        //transfer([[toUnstake, stakeToken]]).to(this);

        Event.unstaked(this, toUnstake);
        return [
          totalStaked - toUnstake,
          lastUpdateBlock + 1
        ];
      }
    )

  commit();

  Anybody.publish();
  transfer([balance(), [balance(rewardToken), rewardToken], [balance(stakeToken), stakeToken]]).to(Creator);
  commit();

});
// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc1], ['lastUpdateBlock', ctc1], ['rewardPerTokenStored', ctc6]]);
  const ctc8 = stdlib.T_Struct([['beneficiary', ctc0], ['creationFee', ctc1], ['flatAlgoCreationFee', ctc1], ['stakeToken', ctc2], ['rewardToken', ctc2], ['beginBlock', ctc1], ['endBlock', ctc1], ['totalRewardAmount', ctc1], ['totalAlgoRewardAmount', ctc1], ['lockLengthBlocks', ctc1]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc6]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc11;
  
  const map3_ctc = ctc12;
  
  
  return {
    infos: {
      global: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2472, v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2499, v2528, v2530, v2532] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = svs;
            return (await ((async () => {
              
              const v2632 = {
                lastUpdateBlock: v2572,
                rewardPerTokenStored: v2575,
                totalStaked: v2577
                };
              
              return v2632;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2472, v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2499, v2528, v2530, v2532] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = svs;
            return (await ((async () => {
              
              const v2558 = {
                beginBlock: v2478,
                beneficiary: v2473,
                creationFee: v2474,
                endBlock: v2479,
                flatAlgoCreationFee: v2475,
                lockLengthBlocks: v2482,
                rewardToken: v2477,
                stakeToken: v2476,
                totalAlgoRewardAmount: v2481,
                totalRewardAmount: v2480
                };
              
              return v2558;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2472, v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2499, v2528, v2530, v2532] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = svs;
            return (await ((async (_v2559 ) => {
                const v2559 = stdlib.protect(ctc0, _v2559, null);
              
              const v2560 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2559), null);
              const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
              const v2562 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2559), null);
              const v2563 = stdlib.fromSome(v2562, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
              const v2564 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2559), null);
              const v2565 = stdlib.fromSome(v2564, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
              const v2566 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2559), null);
              const v2567 = stdlib.fromSome(v2566, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2568 = {
                lockTimestamp: v2565,
                reward: v2563,
                rewardPerTokenPaid: v2567,
                staked: v2561
                };
              
              return v2568;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc6, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    beginBlock: ctc1,
    beneficiary: ctc5,
    creationFee: ctc1,
    endBlock: ctc1,
    flatAlgoCreationFee: ctc1,
    lockLengthBlocks: ctc1,
    rewardToken: ctc6,
    stakeToken: ctc6,
    totalAlgoRewardAmount: ctc1,
    totalRewardAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_477: ctc8,
    claimFees0_477: ctc8,
    stake0_477: ctc9,
    unstake0_477: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc11]]);
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2421 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2422 = [v2421, v2421];
  const v2428 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './index.rsh:185:38:application',
    fs: ['at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2429 = v2428.beginBlock;
  const v2430 = v2428.beneficiary;
  const v2431 = v2428.creationFee;
  const v2432 = v2428.endBlock;
  const v2433 = v2428.flatAlgoCreationFee;
  const v2434 = v2428.lockLengthBlocks;
  const v2435 = v2428.rewardToken;
  const v2436 = v2428.stakeToken;
  const v2437 = v2428.totalAlgoRewardAmount;
  const v2438 = v2428.totalRewardAmount;
  const v2450 = stdlib.tokenEq(v2436, v2435);
  const v2451 = v2450 ? false : true;
  stdlib.assert(v2451, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: 'Reach requires all tokens to be different. Consider using distribution contract instead.',
    who: 'Creator'
    });
  const v2453 = stdlib.mul(v2431, stdlib.checkedBigNumberify('./index.rsh:138:25:decimal', stdlib.UInt_max, '5'));
  const v2454 = stdlib.le(v2453, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2454, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2456 = stdlib.le(v2433, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2456, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2458 = stdlib.lt(v2429, v2432);
  stdlib.assert(v2458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2460 = stdlib.sub(v2432, v2429);
  const v2461 = stdlib.lt(v2460, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:147:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2463 = stdlib.lt(v2434, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2463, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2466 = stdlib.le(v2434, v2460);
  stdlib.assert(v2466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2468 = stdlib.gt(v2438, stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2468, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:155:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:18:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)', 'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2430, v2431, v2433, v2436, v2435, v2429, v2432, v2438, v2437, v2434],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:199:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482], secs: v2484, time: v2483, didSend: v213, from: v2472 } = txn1;
      
      const v2487 = v2422[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0')];
      const v2489 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
      const v2490 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
      const v2491 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2489, v2490];
      const v2492 = stdlib.Array_set(v2422, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0'), v2491);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2476
        });
      const v2494 = v2492[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
      const v2496 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
      const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
      const v2498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2496, v2497];
      const v2499 = stdlib.Array_set(v2492, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1'), v2498);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2477
        });
      ;
      const v2512 = stdlib.sub(v2479, v2478);
      const v2524 = stdlib.cast("UInt", "UInt256", v2480, false);
      const v2525 = stdlib.mul256(v2524, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2527 = stdlib.cast("UInt", "UInt256", v2512, false);
      const v2528 = stdlib.div256(v2525, v2527);
      const v2529 = stdlib.mul(v2480, v2474);
      const v2530 = stdlib.div(v2529, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      const v2531 = stdlib.mul(v2481, v2474);
      const v2532 = stdlib.div(v2531, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482], secs: v2484, time: v2483, didSend: v213, from: v2472 } = txn1;
  const v2485 = stdlib.tokenEq(v2476, v2477);
  const v2486 = v2485 ? false : true;
  stdlib.assert(v2486, {
    at: './index.rsh:199:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v2487 = v2422[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0')];
  const v2489 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2490 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
  const v2491 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2489, v2490];
  const v2492 = stdlib.Array_set(v2422, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0'), v2491);
  ;
  const v2494 = v2492[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2496 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
  const v2498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2496, v2497];
  const v2499 = stdlib.Array_set(v2492, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1'), v2498);
  ;
  ;
  const v2505 = stdlib.mul(v2474, stdlib.checkedBigNumberify('./index.rsh:138:25:decimal', stdlib.UInt_max, '5'));
  const v2506 = stdlib.le(v2505, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2506, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2508 = stdlib.le(v2475, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2508, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2510 = stdlib.lt(v2478, v2479);
  stdlib.assert(v2510, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2512 = stdlib.sub(v2479, v2478);
  const v2513 = stdlib.lt(v2512, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:147:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2515 = stdlib.lt(v2482, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2515, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2518 = stdlib.le(v2482, v2512);
  stdlib.assert(v2518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2520 = stdlib.gt(v2480, stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2520, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:155:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2524 = stdlib.cast("UInt", "UInt256", v2480, false);
  const v2525 = stdlib.mul256(v2524, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2527 = stdlib.cast("UInt", "UInt256", v2512, false);
  const v2528 = stdlib.div256(v2525, v2527);
  const v2529 = stdlib.mul(v2480, v2474);
  const v2530 = stdlib.div(v2529, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2531 = stdlib.mul(v2481, v2474);
  const v2532 = stdlib.div(v2531, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2533 = stdlib.add(v2481, v2532);
  const v2534 = stdlib.add(v2533, v2475);
  const v2535 = stdlib.add(v2480, v2530);
  
  const txn2 = await (ctc.sendrecv({
    args: [v2472, v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2499, v2528, v2530, v2532],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2483,
    onlyIf: true,
    out_tys: [],
    pay: [v2534, [[v2535, v2477]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2538, time: v2537, didSend: v387, from: v2536 } = txn2;
      
      const v2539 = stdlib.add(v2481, v2532);
      const v2540 = stdlib.add(v2539, v2475);
      const v2541 = stdlib.add(v2480, v2530);
      sim_r.txns.push({
        amt: v2540,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2544 = v2499[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
      const v2545 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '0')];
      const v2546 = stdlib.add(v2545, v2541);
      const v2549 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
      const v2550 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '2')];
      const v2551 = [v2546, v2549, v2550];
      const v2552 = stdlib.Array_set(v2499, stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1'), v2551);
      sim_r.txns.push({
        amt: v2541,
        kind: 'to',
        tok: v2477
        });
      
      const v2570 = stdlib.add(v2532, v2475);
      const v2571 = v2570;
      const v2572 = v2478;
      const v2573 = v2478;
      const v2574 = stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2575 = stdlib.checkedBigNumberify('./index.rsh:307:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2576 = v2530;
      const v2577 = stdlib.checkedBigNumberify('./index.rsh:305:5:decimal', stdlib.UInt_max, '0');
      const v2578 = v2537;
      const v2584 = v2552;
      const v2585 = v2540;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2477
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2476
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc16, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2538, time: v2537, didSend: v387, from: v2536 } = txn2;
  const v2539 = stdlib.add(v2481, v2532);
  const v2540 = stdlib.add(v2539, v2475);
  const v2541 = stdlib.add(v2480, v2530);
  ;
  const v2544 = v2499[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
  const v2545 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '0')];
  const v2546 = stdlib.add(v2545, v2541);
  const v2549 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
  const v2550 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '2')];
  const v2551 = [v2546, v2549, v2550];
  const v2552 = stdlib.Array_set(v2499, stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1'), v2551);
  ;
  const v2553 = stdlib.addressEq(v2472, v2536);
  stdlib.assert(v2553, {
    at: './index.rsh:232:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:252:22:application',
    fs: ['at ./index.rsh:251:7:application call to [unknown function] (defined at: ./index.rsh:251:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v2570 = stdlib.add(v2532, v2475);
  let v2571 = v2570;
  let v2572 = v2478;
  let v2573 = v2478;
  let v2574 = stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2575 = stdlib.checkedBigNumberify('./index.rsh:307:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2576 = v2530;
  let v2577 = stdlib.checkedBigNumberify('./index.rsh:305:5:decimal', stdlib.UInt_max, '0');
  let v2578 = v2537;
  let v2584 = v2552;
  let v2585 = v2540;
  
  while (await (async () => {
    const v2622 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
    const v2623 = v2622[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
    const v2624 = stdlib.le(v2576, v2623);
    stdlib.assert(v2624, {
      at: './index.rsh:314:14:application',
      fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
      msg: null,
      who: 'Creator'
      });
    const v2626 = stdlib.le(v2571, v2585);
    stdlib.assert(v2626, {
      at: './index.rsh:315:14:application',
      fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
      msg: null,
      who: 'Creator'
      });
    
    return true;})()) {
    const v2627 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
    const v2628 = v2627[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
    const v2629 = stdlib.le(v2576, v2628);
    stdlib.assert(v2629, {
      at: './index.rsh:314:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v2631 = stdlib.le(v2571, v2585);
    stdlib.assert(v2631, {
      at: './index.rsh:315:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn3;
    switch (v2806[0]) {
      case 'claim0_477': {
        const v2809 = v2806[1];
        undefined /* setApiDetails */;
        ;
        const v2895 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2896 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2900 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2901 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v2902 = [v2896, v2900, v2901];
        const v2903 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v2902);
        ;
        const v2904 = v2903[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2905 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2909 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2910 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v2911 = [v2905, v2909, v2910];
        const v2912 = stdlib.Array_set(v2903, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v2911);
        ;
        let v2914;
        const v2915 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v2915) {
          const v2917 = stdlib.gt(v2807, v2572);
          const v2918 = v2917 ? v2807 : v2572;
          const v2919 = stdlib.lt(v2918, v2479);
          const v2920 = v2919 ? v2918 : v2479;
          const v2921 = stdlib.sub(v2920, v2572);
          const v2922 = stdlib.cast("UInt", "UInt256", v2921, false);
          const v2923 = stdlib.mul256(v2528, v2922);
          const v2924 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v2925 = stdlib.div256(v2923, v2924);
          const v2926 = stdlib.add256(v2575, v2925);
          v2914 = v2926;
          }
        else {
          v2914 = v2575;
          }
        const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v2928 = stdlib.fromSome(v2927, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v2929 = stdlib.cast("UInt", "UInt256", v2928, false);
        const v2930 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v2931 = stdlib.fromSome(v2930, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2932 = stdlib.sub256(v2914, v2931);
        const v2933 = stdlib.mul256(v2929, v2932);
        const v2934 = stdlib.div256(v2933, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2935 = stdlib.cast("UInt256", "UInt", v2934, false);
        const v2936 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v2937 = stdlib.fromSome(v2936, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v2938 = stdlib.add(v2935, v2937);
        await stdlib.mapSet(map1, v2805, v2938);
        await stdlib.mapSet(map3, v2805, v2914);
        const v2940 = stdlib.gt(v2807, v2572);
        const v2941 = v2940 ? v2807 : v2572;
        const v2942 = stdlib.gt(v2941, v2479);
        const v2943 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
        const v2944 = stdlib.fromSome(v2943, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
        const v2945 = stdlib.add(v2944, v2482);
        const v2946 = stdlib.le(v2945, v2941);
        const v2947 = v2942 ? true : v2946;
        if (v2947) {
          const v2950 = stdlib.muldiv(v2938, v2481, v2480);
          await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:287:18:decimal', stdlib.UInt_max, '0'));
          const v2951 = v2912[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '1')];
          const v2952 = v2951[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '0')];
          const v2953 = stdlib.le(v2938, v2952);
          const v2955 = stdlib.le(v2950, v2585);
          const v2956 = v2953 ? v2955 : false;
          stdlib.assert(v2956, {
            at: './index.rsh:290:12:application',
            fs: ['at ./index.rsh:475:66:application call to "claimRewards" (defined at: ./index.rsh:283:28:function exp)', 'at ./index.rsh:470:20:application call to [unknown function] (defined at: ./index.rsh:470:20:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2960 = stdlib.sub(v2585, v2950);
          ;
          const v2966 = stdlib.sub(v2952, v2938);
          const v2969 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1')];
          const v2970 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '2')];
          const v2971 = [v2966, v2969, v2970];
          const v2972 = stdlib.Array_set(v2912, stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1'), v2971);
          ;
          const v2973 = [v2938, v2950];
          const v2977 = stdlib.lt(v2941, v2479);
          const v2978 = v2977 ? v2941 : v2479;
          await stdlib.mapSet(map2, v2805, v2978);
          const v2984 = {
            now: v2941,
            result: v2973
            };
          await txn3.getOutput('claim', 'v2984', ctc12, v2984);
          const cv2571 = v2571;
          const cv2572 = v2978;
          const cv2573 = v2573;
          const cv2574 = v2574;
          const cv2575 = v2914;
          const cv2576 = v2576;
          const cv2577 = v2577;
          const cv2578 = v2807;
          const cv2584 = v2972;
          const cv2585 = v2960;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        else {
          const v3005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3006 = {
            now: v2941,
            result: v3005
            };
          await txn3.getOutput('claim', 'v3006', ctc12, v3006);
          const v3021 = stdlib.lt(v2941, v2479);
          const v3022 = v3021 ? v2941 : v2479;
          const cv2571 = v2571;
          const cv2572 = v3022;
          const cv2573 = v2573;
          const cv2574 = v2574;
          const cv2575 = v2914;
          const cv2576 = v2576;
          const cv2577 = v2577;
          const cv2578 = v2807;
          const cv2584 = v2912;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        break;
        }
      case 'claimFees0_477': {
        const v3323 = v2806[1];
        undefined /* setApiDetails */;
        const v3338 = stdlib.addressEq(v2805, v2473);
        stdlib.assert(v3338, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:497:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:29:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'Creator'
          });
        ;
        const v3409 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3414 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3415 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3416 = [v3410, v3414, v3415];
        const v3417 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3416);
        ;
        const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3419 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3423 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3424 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3425 = [v3419, v3423, v3424];
        const v3426 = stdlib.Array_set(v3417, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3425);
        ;
        let v3541;
        const v3543 = stdlib.gt(v2807, v2572);
        const v3544 = v3543 ? v2807 : v2572;
        const v3545 = stdlib.lt(v3544, v2479);
        const v3546 = v3545 ? v3544 : v2479;
        const v3547 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
        const v3548 = stdlib.lt(v2573, v3546);
        const v3549 = v3547 ? v3548 : false;
        if (v3549) {
          const v3550 = stdlib.sub(v3546, v2573);
          const v3551 = stdlib.cast("UInt", "UInt256", v3550, false);
          const v3552 = stdlib.mul256(v2528, v3551);
          v3541 = v3552;
          }
        else {
          v3541 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3553 = stdlib.add256(v2574, v3541);
        const v3554 = stdlib.div256(v3553, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3555 = stdlib.cast("UInt256", "UInt", v3554, false);
        const v3556 = stdlib.muldiv(v3555, v2481, v2480);
        const v3557 = stdlib.add(v2576, v3555);
        const v3558 = v3426[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '1')];
        const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '0')];
        const v3560 = stdlib.lt(v3557, v3559);
        const v3561 = v3560 ? v3557 : v3559;
        const v3562 = stdlib.add(v3556, v2571);
        const v3564 = stdlib.lt(v3562, v2585);
        const v3565 = v3564 ? v3562 : v2585;
        const v3569 = stdlib.sub(v2585, v3565);
        ;
        const v3575 = stdlib.sub(v3559, v3561);
        const v3578 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1')];
        const v3579 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '2')];
        const v3580 = [v3575, v3578, v3579];
        const v3581 = stdlib.Array_set(v3426, stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1'), v3580);
        ;
        const v3585 = [v3561, v3565];
        const v3586 = {
          now: v3544,
          result: v3585
          };
        await txn3.getOutput('claimFees', 'v3586', ctc12, v3586);
        const v3601 = stdlib.cast("UInt", "UInt256", v3555, false);
        const v3602 = stdlib.mul256(v3601, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3603 = stdlib.sub256(v3553, v3602);
        const cv2571 = stdlib.checkedBigNumberify('./index.rsh:519:13:decimal', stdlib.UInt_max, '0');
        const cv2572 = v2572;
        const cv2573 = v3544;
        const cv2574 = v3603;
        const cv2575 = v2575;
        const cv2576 = stdlib.checkedBigNumberify('./index.rsh:518:13:decimal', stdlib.UInt_max, '0');
        const cv2577 = v2577;
        const cv2578 = v2807;
        const cv2584 = v3581;
        const cv2585 = v3569;
        
        v2571 = cv2571;
        v2572 = cv2572;
        v2573 = cv2573;
        v2574 = cv2574;
        v2575 = cv2575;
        v2576 = cv2576;
        v2577 = cv2577;
        v2578 = cv2578;
        v2584 = cv2584;
        v2585 = cv2585;
        
        continue;
        break;
        }
      case 'stake0_477': {
        const v3837 = v2806[1];
        undefined /* setApiDetails */;
        const v3864 = v3837[stdlib.checkedBigNumberify('./index.rsh:407:10:spread', stdlib.UInt_max, '0')];
        const v3865 = stdlib.add(v2577, v3864);
        const v3866 = stdlib.lt(v3865, stdlib.UInt_max);
        stdlib.assert(v3866, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:408:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:407:32:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'Creator'
          });
        ;
        const v3923 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3924 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3925 = stdlib.add(v3924, v3864);
        const v3928 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3929 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3930 = [v3925, v3928, v3929];
        const v3931 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3930);
        ;
        const v3932 = v3931[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3937 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3938 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3939 = [v3933, v3937, v3938];
        const v3940 = stdlib.Array_set(v3931, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3939);
        ;
        let v4125;
        const v4126 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v4126) {
          const v4128 = stdlib.gt(v2807, v2572);
          const v4129 = v4128 ? v2807 : v2572;
          const v4130 = stdlib.lt(v4129, v2479);
          const v4131 = v4130 ? v4129 : v2479;
          const v4132 = stdlib.sub(v4131, v2572);
          const v4133 = stdlib.cast("UInt", "UInt256", v4132, false);
          const v4134 = stdlib.mul256(v2528, v4133);
          const v4135 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v4136 = stdlib.div256(v4134, v4135);
          const v4137 = stdlib.add256(v2575, v4136);
          v4125 = v4137;
          }
        else {
          v4125 = v2575;
          }
        const v4138 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v4139 = stdlib.fromSome(v4138, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v4140 = stdlib.cast("UInt", "UInt256", v4139, false);
        const v4141 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v4142 = stdlib.fromSome(v4141, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4143 = stdlib.sub256(v4125, v4142);
        const v4144 = stdlib.mul256(v4140, v4143);
        const v4145 = stdlib.div256(v4144, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4146 = stdlib.cast("UInt256", "UInt", v4145, false);
        const v4147 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v4148 = stdlib.fromSome(v4147, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v4149 = stdlib.add(v4146, v4148);
        await stdlib.mapSet(map1, v2805, v4149);
        await stdlib.mapSet(map3, v2805, v4125);
        const v4152 = stdlib.add(v4139, v3864);
        await stdlib.mapSet(map0, v2805, v4152);
        const v4154 = stdlib.gt(v2807, v2572);
        const v4155 = v4154 ? v2807 : v2572;
        const v4156 = stdlib.lt(v4155, v2479);
        const v4157 = v4156 ? v4155 : v2479;
        await stdlib.mapSet(map2, v2805, v4157);
        const v4162 = {
          now: v4155,
          result: v3864
          };
        await txn3.getOutput('stake', 'v4162', ctc13, v4162);
        let v4178;
        const v4184 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
        const v4185 = stdlib.lt(v2573, v4157);
        const v4186 = v4184 ? v4185 : false;
        if (v4186) {
          const v4187 = stdlib.sub(v4157, v2573);
          const v4188 = stdlib.cast("UInt", "UInt256", v4187, false);
          const v4189 = stdlib.mul256(v2528, v4188);
          v4178 = v4189;
          }
        else {
          v4178 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v4190 = stdlib.add256(v2574, v4178);
        const cv2571 = v2571;
        const cv2572 = v4157;
        const cv2573 = v2573;
        const cv2574 = v4190;
        const cv2575 = v4125;
        const cv2576 = v2576;
        const cv2577 = v3865;
        const cv2578 = v2807;
        const cv2584 = v3940;
        const cv2585 = v2585;
        
        v2571 = cv2571;
        v2572 = cv2572;
        v2573 = cv2573;
        v2574 = cv2574;
        v2575 = cv2575;
        v2576 = cv2576;
        v2577 = cv2577;
        v2578 = cv2578;
        v2584 = cv2584;
        v2585 = cv2585;
        
        continue;
        break;
        }
      case 'unstake0_477': {
        const v4351 = v2806[1];
        undefined /* setApiDetails */;
        const v4392 = v4351[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
        const v4393 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v4394 = stdlib.fromSome(v4393, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v4395 = v2584[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4396 = v4395[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4397 = stdlib.le(v4394, v4396);
        stdlib.assert(v4397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v4399 = stdlib.lt(v4392, stdlib.UInt_max);
        stdlib.assert(v4399, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'Creator'
          });
        const v4403 = stdlib.le(v4392, v4394);
        stdlib.assert(v4403, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        ;
        const v4442 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4443 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v4444 = [v4396, v4442, v4443];
        const v4445 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v4444);
        ;
        const v4446 = v4445[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v4451 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4452 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v4453 = [v4447, v4451, v4452];
        const v4454 = stdlib.Array_set(v4445, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v4453);
        ;
        const v4710 = v4454[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4712 = stdlib.le(v4394, v4711);
        stdlib.assert(v4712, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:438:20:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v4721;
        const v4722 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v4722) {
          const v4724 = stdlib.gt(v2807, v2572);
          const v4725 = v4724 ? v2807 : v2572;
          const v4726 = stdlib.lt(v4725, v2479);
          const v4727 = v4726 ? v4725 : v2479;
          const v4728 = stdlib.sub(v4727, v2572);
          const v4729 = stdlib.cast("UInt", "UInt256", v4728, false);
          const v4730 = stdlib.mul256(v2528, v4729);
          const v4731 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v4732 = stdlib.div256(v4730, v4731);
          const v4733 = stdlib.add256(v2575, v4732);
          v4721 = v4733;
          }
        else {
          v4721 = v2575;
          }
        const v4736 = stdlib.cast("UInt", "UInt256", v4394, false);
        const v4737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v4738 = stdlib.fromSome(v4737, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4739 = stdlib.sub256(v4721, v4738);
        const v4740 = stdlib.mul256(v4736, v4739);
        const v4741 = stdlib.div256(v4740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4742 = stdlib.cast("UInt256", "UInt", v4741, false);
        const v4743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v4744 = stdlib.fromSome(v4743, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v4745 = stdlib.add(v4742, v4744);
        await stdlib.mapSet(map1, v2805, v4745);
        await stdlib.mapSet(map3, v2805, v4721);
        const v4747 = stdlib.gt(v2807, v2572);
        const v4748 = v4747 ? v2807 : v2572;
        const v4749 = stdlib.gt(v4748, v2479);
        const v4750 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
        const v4751 = stdlib.fromSome(v4750, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
        const v4752 = stdlib.add(v4751, v2482);
        const v4753 = stdlib.le(v4752, v4748);
        const v4754 = v4749 ? true : v4753;
        const v4757 = v4754 ? stdlib.checkedBigNumberify('./index.rsh:440:49:decimal', stdlib.UInt_max, '0') : v4745;
        const v4758 = stdlib.muldiv(v4757, v2481, v2480);
        if (v4754) {
          const v4819 = stdlib.sub(v4394, v4392);
          await stdlib.mapSet(map0, v2805, v4819);
          const v4825 = stdlib.sub(v4711, v4392);
          const v4828 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
          const v4829 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
          const v4830 = [v4825, v4828, v4829];
          const v4831 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4830);
          ;
          const v4832 = stdlib.sub(v2577, v4392);
          const v4836 = stdlib.lt(v4748, v2479);
          const v4837 = v4836 ? v4748 : v2479;
          await stdlib.mapSet(map2, v2805, v4837);
          const v4842 = {
            now: v4748,
            result: v4392
            };
          await txn3.getOutput('unstake', 'v4842', ctc13, v4842);
          const v4857 = stdlib.gt(v4832, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
          const v4861 = v4857 ? v2573 : v4748;
          const v4862 = stdlib.add(v2576, v4757);
          const v4863 = stdlib.add(v2571, v4758);
          const cv2571 = v4863;
          const cv2572 = v4837;
          const cv2573 = v4861;
          const cv2574 = v2574;
          const cv2575 = v4721;
          const cv2576 = v4862;
          const cv2577 = v4832;
          const cv2578 = v2807;
          const cv2584 = v4831;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:445:29:decimal', stdlib.UInt_max, '0'));
          const v4771 = stdlib.sub(v4394, v4392);
          await stdlib.mapSet(map0, v2805, v4771);
          const v4777 = stdlib.sub(v4711, v4392);
          const v4780 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
          const v4781 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
          const v4782 = [v4777, v4780, v4781];
          const v4783 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4782);
          ;
          const v4784 = stdlib.sub(v2577, v4392);
          const v4788 = stdlib.lt(v4748, v2479);
          const v4789 = v4788 ? v4748 : v2479;
          await stdlib.mapSet(map2, v2805, v4789);
          const v4794 = {
            now: v4748,
            result: v4392
            };
          await txn3.getOutput('unstake', 'v4794', ctc13, v4794);
          const v4809 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
          const v4813 = v4809 ? v2573 : v4748;
          const v4814 = stdlib.add(v2576, v4757);
          const v4815 = stdlib.add(v2571, v4758);
          const cv2571 = v4815;
          const cv2572 = v4789;
          const cv2573 = v4813;
          const cv2574 = v2574;
          const cv2575 = v4721;
          const cv2576 = v4814;
          const cv2577 = v4784;
          const cv2578 = v2807;
          const cv2584 = v4783;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        break;
        }
      }
    
    }
  const v4865 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
  const v4866 = v4865[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
  const v4867 = stdlib.le(v2576, v4866);
  stdlib.assert(v4867, {
    at: './index.rsh:314:14:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v4869 = stdlib.le(v2571, v2585);
  stdlib.assert(v4869, {
    at: './index.rsh:315:14:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  return;
  
  
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    claim0_477: ctc7,
    claimFees0_477: ctc7,
    stake0_477: ctc8,
    unstake0_477: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Struct([['now', ctc1], ['result', ctc10]]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2421 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2422 = [v2421, v2421];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 10,
    funcNum: 0,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482], secs: v2484, time: v2483, didSend: v213, from: v2472 } = txn1;
  const v2485 = stdlib.tokenEq(v2476, v2477);
  const v2486 = v2485 ? false : true;
  stdlib.assert(v2486, {
    at: './index.rsh:199:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v2487 = v2422[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0')];
  const v2489 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2490 = v2487[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
  const v2491 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2489, v2490];
  const v2492 = stdlib.Array_set(v2422, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '0'), v2491);
  ;
  const v2494 = v2492[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2496 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1')];
  const v2497 = v2494[stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '2')];
  const v2498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2496, v2497];
  const v2499 = stdlib.Array_set(v2492, stdlib.checkedBigNumberify('./index.rsh:199:11:dot', stdlib.UInt_max, '1'), v2498);
  ;
  ;
  const v2505 = stdlib.mul(v2474, stdlib.checkedBigNumberify('./index.rsh:138:25:decimal', stdlib.UInt_max, '5'));
  const v2506 = stdlib.le(v2505, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2506, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'User'
    });
  const v2508 = stdlib.le(v2475, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2508, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'User'
    });
  const v2510 = stdlib.lt(v2478, v2479);
  stdlib.assert(v2510, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2512 = stdlib.sub(v2479, v2478);
  const v2513 = stdlib.lt(v2512, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:147:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2515 = stdlib.lt(v2482, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2515, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2518 = stdlib.le(v2482, v2512);
  stdlib.assert(v2518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2520 = stdlib.gt(v2480, stdlib.checkedBigNumberify('./index.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2520, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:155:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:16:application call to "initialChecks" (defined at: ./index.rsh:132:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2524 = stdlib.cast("UInt", "UInt256", v2480, false);
  const v2525 = stdlib.mul256(v2524, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2527 = stdlib.cast("UInt", "UInt256", v2512, false);
  const v2528 = stdlib.div256(v2525, v2527);
  const v2529 = stdlib.mul(v2480, v2474);
  const v2530 = stdlib.div(v2529, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2531 = stdlib.mul(v2481, v2474);
  const v2532 = stdlib.div(v2531, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2538, time: v2537, didSend: v387, from: v2536 } = txn2;
  const v2539 = stdlib.add(v2481, v2532);
  const v2540 = stdlib.add(v2539, v2475);
  const v2541 = stdlib.add(v2480, v2530);
  ;
  const v2544 = v2499[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
  const v2545 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '0')];
  const v2546 = stdlib.add(v2545, v2541);
  const v2549 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1')];
  const v2550 = v2544[stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '2')];
  const v2551 = [v2546, v2549, v2550];
  const v2552 = stdlib.Array_set(v2499, stdlib.checkedBigNumberify('./index.rsh:232:11:dot', stdlib.UInt_max, '1'), v2551);
  ;
  const v2553 = stdlib.addressEq(v2472, v2536);
  stdlib.assert(v2553, {
    at: './index.rsh:232:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:252:22:application',
    fs: ['at ./index.rsh:251:7:application call to [unknown function] (defined at: ./index.rsh:251:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v2570 = stdlib.add(v2532, v2475);
  let v2571 = v2570;
  let v2572 = v2478;
  let v2573 = v2478;
  let v2574 = stdlib.checkedBigNumberify('./index.rsh:309:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2575 = stdlib.checkedBigNumberify('./index.rsh:307:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2576 = v2530;
  let v2577 = stdlib.checkedBigNumberify('./index.rsh:305:5:decimal', stdlib.UInt_max, '0');
  let v2578 = v2537;
  let v2584 = v2552;
  let v2585 = v2540;
  
  while (await (async () => {
    const v2622 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
    const v2623 = v2622[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
    const v2624 = stdlib.le(v2576, v2623);
    stdlib.assert(v2624, {
      at: './index.rsh:314:14:application',
      fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
      msg: null,
      who: 'User'
      });
    const v2626 = stdlib.le(v2571, v2585);
    stdlib.assert(v2626, {
      at: './index.rsh:315:14:application',
      fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
      msg: null,
      who: 'User'
      });
    
    return true;})()) {
    const v2627 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
    const v2628 = v2627[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
    const v2629 = stdlib.le(v2576, v2628);
    stdlib.assert(v2629, {
      at: './index.rsh:314:14:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const v2631 = stdlib.le(v2571, v2585);
    stdlib.assert(v2631, {
      at: './index.rsh:315:14:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn3;
    switch (v2806[0]) {
      case 'claim0_477': {
        const v2809 = v2806[1];
        undefined /* setApiDetails */;
        ;
        const v2895 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2896 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2900 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2901 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v2902 = [v2896, v2900, v2901];
        const v2903 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v2902);
        ;
        const v2904 = v2903[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2905 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v2909 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v2910 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v2911 = [v2905, v2909, v2910];
        const v2912 = stdlib.Array_set(v2903, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v2911);
        ;
        let v2914;
        const v2915 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v2915) {
          const v2917 = stdlib.gt(v2807, v2572);
          const v2918 = v2917 ? v2807 : v2572;
          const v2919 = stdlib.lt(v2918, v2479);
          const v2920 = v2919 ? v2918 : v2479;
          const v2921 = stdlib.sub(v2920, v2572);
          const v2922 = stdlib.cast("UInt", "UInt256", v2921, false);
          const v2923 = stdlib.mul256(v2528, v2922);
          const v2924 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v2925 = stdlib.div256(v2923, v2924);
          const v2926 = stdlib.add256(v2575, v2925);
          v2914 = v2926;
          }
        else {
          v2914 = v2575;
          }
        const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v2928 = stdlib.fromSome(v2927, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v2929 = stdlib.cast("UInt", "UInt256", v2928, false);
        const v2930 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v2931 = stdlib.fromSome(v2930, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2932 = stdlib.sub256(v2914, v2931);
        const v2933 = stdlib.mul256(v2929, v2932);
        const v2934 = stdlib.div256(v2933, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2935 = stdlib.cast("UInt256", "UInt", v2934, false);
        const v2936 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v2937 = stdlib.fromSome(v2936, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v2938 = stdlib.add(v2935, v2937);
        await stdlib.mapSet(map1, v2805, v2938);
        await stdlib.mapSet(map3, v2805, v2914);
        const v2940 = stdlib.gt(v2807, v2572);
        const v2941 = v2940 ? v2807 : v2572;
        const v2942 = stdlib.gt(v2941, v2479);
        const v2943 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
        const v2944 = stdlib.fromSome(v2943, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
        const v2945 = stdlib.add(v2944, v2482);
        const v2946 = stdlib.le(v2945, v2941);
        const v2947 = v2942 ? true : v2946;
        if (v2947) {
          const v2950 = stdlib.muldiv(v2938, v2481, v2480);
          await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:287:18:decimal', stdlib.UInt_max, '0'));
          const v2951 = v2912[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '1')];
          const v2952 = v2951[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '0')];
          const v2953 = stdlib.le(v2938, v2952);
          const v2955 = stdlib.le(v2950, v2585);
          const v2956 = v2953 ? v2955 : false;
          stdlib.assert(v2956, {
            at: './index.rsh:290:12:application',
            fs: ['at ./index.rsh:475:66:application call to "claimRewards" (defined at: ./index.rsh:283:28:function exp)', 'at ./index.rsh:470:20:application call to [unknown function] (defined at: ./index.rsh:470:20:function exp)'],
            msg: null,
            who: 'User'
            });
          const v2960 = stdlib.sub(v2585, v2950);
          ;
          const v2966 = stdlib.sub(v2952, v2938);
          const v2969 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1')];
          const v2970 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '2')];
          const v2971 = [v2966, v2969, v2970];
          const v2972 = stdlib.Array_set(v2912, stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1'), v2971);
          ;
          const v2973 = [v2938, v2950];
          const v2977 = stdlib.lt(v2941, v2479);
          const v2978 = v2977 ? v2941 : v2479;
          await stdlib.mapSet(map2, v2805, v2978);
          const v2984 = {
            now: v2941,
            result: v2973
            };
          await txn3.getOutput('claim', 'v2984', ctc11, v2984);
          const cv2571 = v2571;
          const cv2572 = v2978;
          const cv2573 = v2573;
          const cv2574 = v2574;
          const cv2575 = v2914;
          const cv2576 = v2576;
          const cv2577 = v2577;
          const cv2578 = v2807;
          const cv2584 = v2972;
          const cv2585 = v2960;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        else {
          const v3005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3006 = {
            now: v2941,
            result: v3005
            };
          await txn3.getOutput('claim', 'v3006', ctc11, v3006);
          const v3021 = stdlib.lt(v2941, v2479);
          const v3022 = v3021 ? v2941 : v2479;
          const cv2571 = v2571;
          const cv2572 = v3022;
          const cv2573 = v2573;
          const cv2574 = v2574;
          const cv2575 = v2914;
          const cv2576 = v2576;
          const cv2577 = v2577;
          const cv2578 = v2807;
          const cv2584 = v2912;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        break;
        }
      case 'claimFees0_477': {
        const v3323 = v2806[1];
        undefined /* setApiDetails */;
        const v3338 = stdlib.addressEq(v2805, v2473);
        stdlib.assert(v3338, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:497:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:29:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'User'
          });
        ;
        const v3409 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3414 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3415 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3416 = [v3410, v3414, v3415];
        const v3417 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3416);
        ;
        const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3419 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3423 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3424 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3425 = [v3419, v3423, v3424];
        const v3426 = stdlib.Array_set(v3417, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3425);
        ;
        let v3541;
        const v3543 = stdlib.gt(v2807, v2572);
        const v3544 = v3543 ? v2807 : v2572;
        const v3545 = stdlib.lt(v3544, v2479);
        const v3546 = v3545 ? v3544 : v2479;
        const v3547 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
        const v3548 = stdlib.lt(v2573, v3546);
        const v3549 = v3547 ? v3548 : false;
        if (v3549) {
          const v3550 = stdlib.sub(v3546, v2573);
          const v3551 = stdlib.cast("UInt", "UInt256", v3550, false);
          const v3552 = stdlib.mul256(v2528, v3551);
          v3541 = v3552;
          }
        else {
          v3541 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3553 = stdlib.add256(v2574, v3541);
        const v3554 = stdlib.div256(v3553, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3555 = stdlib.cast("UInt256", "UInt", v3554, false);
        const v3556 = stdlib.muldiv(v3555, v2481, v2480);
        const v3557 = stdlib.add(v2576, v3555);
        const v3558 = v3426[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '1')];
        const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '0')];
        const v3560 = stdlib.lt(v3557, v3559);
        const v3561 = v3560 ? v3557 : v3559;
        const v3562 = stdlib.add(v3556, v2571);
        const v3564 = stdlib.lt(v3562, v2585);
        const v3565 = v3564 ? v3562 : v2585;
        const v3569 = stdlib.sub(v2585, v3565);
        ;
        const v3575 = stdlib.sub(v3559, v3561);
        const v3578 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1')];
        const v3579 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '2')];
        const v3580 = [v3575, v3578, v3579];
        const v3581 = stdlib.Array_set(v3426, stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1'), v3580);
        ;
        const v3585 = [v3561, v3565];
        const v3586 = {
          now: v3544,
          result: v3585
          };
        await txn3.getOutput('claimFees', 'v3586', ctc11, v3586);
        const v3601 = stdlib.cast("UInt", "UInt256", v3555, false);
        const v3602 = stdlib.mul256(v3601, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3603 = stdlib.sub256(v3553, v3602);
        const cv2571 = stdlib.checkedBigNumberify('./index.rsh:519:13:decimal', stdlib.UInt_max, '0');
        const cv2572 = v2572;
        const cv2573 = v3544;
        const cv2574 = v3603;
        const cv2575 = v2575;
        const cv2576 = stdlib.checkedBigNumberify('./index.rsh:518:13:decimal', stdlib.UInt_max, '0');
        const cv2577 = v2577;
        const cv2578 = v2807;
        const cv2584 = v3581;
        const cv2585 = v3569;
        
        v2571 = cv2571;
        v2572 = cv2572;
        v2573 = cv2573;
        v2574 = cv2574;
        v2575 = cv2575;
        v2576 = cv2576;
        v2577 = cv2577;
        v2578 = cv2578;
        v2584 = cv2584;
        v2585 = cv2585;
        
        continue;
        break;
        }
      case 'stake0_477': {
        const v3837 = v2806[1];
        undefined /* setApiDetails */;
        const v3864 = v3837[stdlib.checkedBigNumberify('./index.rsh:407:10:spread', stdlib.UInt_max, '0')];
        const v3865 = stdlib.add(v2577, v3864);
        const v3866 = stdlib.lt(v3865, stdlib.UInt_max);
        stdlib.assert(v3866, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:408:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:407:32:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'User'
          });
        ;
        const v3923 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3924 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3925 = stdlib.add(v3924, v3864);
        const v3928 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3929 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3930 = [v3925, v3928, v3929];
        const v3931 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3930);
        ;
        const v3932 = v3931[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v3937 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v3938 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v3939 = [v3933, v3937, v3938];
        const v3940 = stdlib.Array_set(v3931, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3939);
        ;
        let v4125;
        const v4126 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v4126) {
          const v4128 = stdlib.gt(v2807, v2572);
          const v4129 = v4128 ? v2807 : v2572;
          const v4130 = stdlib.lt(v4129, v2479);
          const v4131 = v4130 ? v4129 : v2479;
          const v4132 = stdlib.sub(v4131, v2572);
          const v4133 = stdlib.cast("UInt", "UInt256", v4132, false);
          const v4134 = stdlib.mul256(v2528, v4133);
          const v4135 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v4136 = stdlib.div256(v4134, v4135);
          const v4137 = stdlib.add256(v2575, v4136);
          v4125 = v4137;
          }
        else {
          v4125 = v2575;
          }
        const v4138 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v4139 = stdlib.fromSome(v4138, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v4140 = stdlib.cast("UInt", "UInt256", v4139, false);
        const v4141 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v4142 = stdlib.fromSome(v4141, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4143 = stdlib.sub256(v4125, v4142);
        const v4144 = stdlib.mul256(v4140, v4143);
        const v4145 = stdlib.div256(v4144, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4146 = stdlib.cast("UInt256", "UInt", v4145, false);
        const v4147 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v4148 = stdlib.fromSome(v4147, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v4149 = stdlib.add(v4146, v4148);
        await stdlib.mapSet(map1, v2805, v4149);
        await stdlib.mapSet(map3, v2805, v4125);
        const v4152 = stdlib.add(v4139, v3864);
        await stdlib.mapSet(map0, v2805, v4152);
        const v4154 = stdlib.gt(v2807, v2572);
        const v4155 = v4154 ? v2807 : v2572;
        const v4156 = stdlib.lt(v4155, v2479);
        const v4157 = v4156 ? v4155 : v2479;
        await stdlib.mapSet(map2, v2805, v4157);
        const v4162 = {
          now: v4155,
          result: v3864
          };
        await txn3.getOutput('stake', 'v4162', ctc12, v4162);
        let v4178;
        const v4184 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
        const v4185 = stdlib.lt(v2573, v4157);
        const v4186 = v4184 ? v4185 : false;
        if (v4186) {
          const v4187 = stdlib.sub(v4157, v2573);
          const v4188 = stdlib.cast("UInt", "UInt256", v4187, false);
          const v4189 = stdlib.mul256(v2528, v4188);
          v4178 = v4189;
          }
        else {
          v4178 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v4190 = stdlib.add256(v2574, v4178);
        const cv2571 = v2571;
        const cv2572 = v4157;
        const cv2573 = v2573;
        const cv2574 = v4190;
        const cv2575 = v4125;
        const cv2576 = v2576;
        const cv2577 = v3865;
        const cv2578 = v2807;
        const cv2584 = v3940;
        const cv2585 = v2585;
        
        v2571 = cv2571;
        v2572 = cv2572;
        v2573 = cv2573;
        v2574 = cv2574;
        v2575 = cv2575;
        v2576 = cv2576;
        v2577 = cv2577;
        v2578 = cv2578;
        v2584 = cv2584;
        v2585 = cv2585;
        
        continue;
        break;
        }
      case 'unstake0_477': {
        const v4351 = v2806[1];
        undefined /* setApiDetails */;
        const v4392 = v4351[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
        const v4393 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
        const v4394 = stdlib.fromSome(v4393, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
        const v4395 = v2584[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4396 = v4395[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4397 = stdlib.le(v4394, v4396);
        stdlib.assert(v4397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: null,
          who: 'User'
          });
        const v4399 = stdlib.lt(v4392, stdlib.UInt_max);
        stdlib.assert(v4399, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'User'
          });
        const v4403 = stdlib.le(v4392, v4394);
        stdlib.assert(v4403, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        ;
        const v4442 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4443 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v4444 = [v4396, v4442, v4443];
        const v4445 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v4444);
        ;
        const v4446 = v4445[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
        const v4451 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
        const v4452 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
        const v4453 = [v4447, v4451, v4452];
        const v4454 = stdlib.Array_set(v4445, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v4453);
        ;
        const v4710 = v4454[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
        const v4712 = stdlib.le(v4394, v4711);
        stdlib.assert(v4712, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:438:20:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)'],
          msg: null,
          who: 'User'
          });
        let v4721;
        const v4722 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
        if (v4722) {
          const v4724 = stdlib.gt(v2807, v2572);
          const v4725 = v4724 ? v2807 : v2572;
          const v4726 = stdlib.lt(v4725, v2479);
          const v4727 = v4726 ? v4725 : v2479;
          const v4728 = stdlib.sub(v4727, v2572);
          const v4729 = stdlib.cast("UInt", "UInt256", v4728, false);
          const v4730 = stdlib.mul256(v2528, v4729);
          const v4731 = stdlib.cast("UInt", "UInt256", v2577, false);
          const v4732 = stdlib.div256(v4730, v4731);
          const v4733 = stdlib.add256(v2575, v4732);
          v4721 = v4733;
          }
        else {
          v4721 = v2575;
          }
        const v4736 = stdlib.cast("UInt", "UInt256", v4394, false);
        const v4737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
        const v4738 = stdlib.fromSome(v4737, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4739 = stdlib.sub256(v4721, v4738);
        const v4740 = stdlib.mul256(v4736, v4739);
        const v4741 = stdlib.div256(v4740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4742 = stdlib.cast("UInt256", "UInt", v4741, false);
        const v4743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
        const v4744 = stdlib.fromSome(v4743, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
        const v4745 = stdlib.add(v4742, v4744);
        await stdlib.mapSet(map1, v2805, v4745);
        await stdlib.mapSet(map3, v2805, v4721);
        const v4747 = stdlib.gt(v2807, v2572);
        const v4748 = v4747 ? v2807 : v2572;
        const v4749 = stdlib.gt(v4748, v2479);
        const v4750 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
        const v4751 = stdlib.fromSome(v4750, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
        const v4752 = stdlib.add(v4751, v2482);
        const v4753 = stdlib.le(v4752, v4748);
        const v4754 = v4749 ? true : v4753;
        const v4757 = v4754 ? stdlib.checkedBigNumberify('./index.rsh:440:49:decimal', stdlib.UInt_max, '0') : v4745;
        const v4758 = stdlib.muldiv(v4757, v2481, v2480);
        if (v4754) {
          const v4819 = stdlib.sub(v4394, v4392);
          await stdlib.mapSet(map0, v2805, v4819);
          const v4825 = stdlib.sub(v4711, v4392);
          const v4828 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
          const v4829 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
          const v4830 = [v4825, v4828, v4829];
          const v4831 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4830);
          ;
          const v4832 = stdlib.sub(v2577, v4392);
          const v4836 = stdlib.lt(v4748, v2479);
          const v4837 = v4836 ? v4748 : v2479;
          await stdlib.mapSet(map2, v2805, v4837);
          const v4842 = {
            now: v4748,
            result: v4392
            };
          await txn3.getOutput('unstake', 'v4842', ctc12, v4842);
          const v4857 = stdlib.gt(v4832, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
          const v4861 = v4857 ? v2573 : v4748;
          const v4862 = stdlib.add(v2576, v4757);
          const v4863 = stdlib.add(v2571, v4758);
          const cv2571 = v4863;
          const cv2572 = v4837;
          const cv2573 = v4861;
          const cv2574 = v2574;
          const cv2575 = v4721;
          const cv2576 = v4862;
          const cv2577 = v4832;
          const cv2578 = v2807;
          const cv2584 = v4831;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:445:29:decimal', stdlib.UInt_max, '0'));
          const v4771 = stdlib.sub(v4394, v4392);
          await stdlib.mapSet(map0, v2805, v4771);
          const v4777 = stdlib.sub(v4711, v4392);
          const v4780 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
          const v4781 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
          const v4782 = [v4777, v4780, v4781];
          const v4783 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4782);
          ;
          const v4784 = stdlib.sub(v2577, v4392);
          const v4788 = stdlib.lt(v4748, v2479);
          const v4789 = v4788 ? v4748 : v2479;
          await stdlib.mapSet(map2, v2805, v4789);
          const v4794 = {
            now: v4748,
            result: v4392
            };
          await txn3.getOutput('unstake', 'v4794', ctc12, v4794);
          const v4809 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
          const v4813 = v4809 ? v2573 : v4748;
          const v4814 = stdlib.add(v2576, v4757);
          const v4815 = stdlib.add(v2571, v4758);
          const cv2571 = v4815;
          const cv2572 = v4789;
          const cv2573 = v4813;
          const cv2574 = v2574;
          const cv2575 = v4721;
          const cv2576 = v4814;
          const cv2577 = v4784;
          const cv2578 = v2807;
          const cv2584 = v4783;
          const cv2585 = v2585;
          
          v2571 = cv2571;
          v2572 = cv2572;
          v2573 = cv2573;
          v2574 = cv2574;
          v2575 = cv2575;
          v2576 = cv2576;
          v2577 = cv2577;
          v2578 = cv2578;
          v2584 = cv2584;
          v2585 = cv2585;
          
          continue;}
        break;
        }
      }
    
    }
  const v4865 = v2584[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
  const v4866 = v4865[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
  const v4867 = stdlib.le(v2576, v4866);
  stdlib.assert(v4867, {
    at: './index.rsh:314:14:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const v4869 = stdlib.le(v2571, v2585);
  stdlib.assert(v4869, {
    at: './index.rsh:315:14:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  return;
  
  
  
  
  };
export async function _claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc10,
    claimFees0_477: ctc10,
    stake0_477: ctc11,
    unstake0_477: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2674 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:467:25:application call to [unknown function] (defined at: ./index.rsh:467:25:function exp)', 'at ./index.rsh:304:21:application call to "runclaim0_477" (defined at: ./index.rsh:467:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v2678 = ['claim0_477', v2674];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585, v2678],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:469:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:469:14:decimal', stdlib.UInt_max, '0'), v2476], [stdlib.checkedBigNumberify('./index.rsh:469:31:decimal', stdlib.UInt_max, '0'), v2477]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
      
      switch (v2806[0]) {
        case 'claim0_477': {
          const v2809 = v2806[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v2895 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v2896 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v2900 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v2901 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v2902 = [v2896, v2900, v2901];
          const v2903 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v2902);
          ;
          const v2904 = v2903[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v2905 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v2909 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v2910 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v2911 = [v2905, v2909, v2910];
          const v2912 = stdlib.Array_set(v2903, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v2911);
          ;
          let v2914;
          const v2915 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
          if (v2915) {
            const v2917 = stdlib.gt(v2807, v2572);
            const v2918 = v2917 ? v2807 : v2572;
            const v2919 = stdlib.lt(v2918, v2479);
            const v2920 = v2919 ? v2918 : v2479;
            const v2921 = stdlib.sub(v2920, v2572);
            const v2922 = stdlib.cast("UInt", "UInt256", v2921, false);
            const v2923 = stdlib.mul256(v2528, v2922);
            const v2924 = stdlib.cast("UInt", "UInt256", v2577, false);
            const v2925 = stdlib.div256(v2923, v2924);
            const v2926 = stdlib.add256(v2575, v2925);
            v2914 = v2926;
            }
          else {
            v2914 = v2575;
            }
          const v2927 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2805), null);
          const v2928 = stdlib.fromSome(v2927, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
          const v2929 = stdlib.cast("UInt", "UInt256", v2928, false);
          const v2930 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2805), null);
          const v2931 = stdlib.fromSome(v2930, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2932 = stdlib.sub256(v2914, v2931);
          const v2933 = stdlib.mul256(v2929, v2932);
          const v2934 = stdlib.div256(v2933, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2935 = stdlib.cast("UInt256", "UInt", v2934, false);
          const v2936 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2805), null);
          const v2937 = stdlib.fromSome(v2936, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
          const v2938 = stdlib.add(v2935, v2937);
          await stdlib.simMapSet(sim_r, 1, v2805, v2938);
          await stdlib.simMapSet(sim_r, 3, v2805, v2914);
          const v2940 = stdlib.gt(v2807, v2572);
          const v2941 = v2940 ? v2807 : v2572;
          const v2942 = stdlib.gt(v2941, v2479);
          const v2943 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2805), null);
          const v2944 = stdlib.fromSome(v2943, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
          const v2945 = stdlib.add(v2944, v2482);
          const v2946 = stdlib.le(v2945, v2941);
          const v2947 = v2942 ? true : v2946;
          if (v2947) {
            const v2950 = stdlib.muldiv(v2938, v2481, v2480);
            await stdlib.simMapSet(sim_r, 1, v2805, stdlib.checkedBigNumberify('./index.rsh:287:18:decimal', stdlib.UInt_max, '0'));
            const v2951 = v2912[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '1')];
            const v2952 = v2951[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '0')];
            const v2960 = stdlib.sub(v2585, v2950);
            sim_r.txns.push({
              kind: 'from',
              to: v2805,
              tok: undefined /* Nothing */
              });
            const v2966 = stdlib.sub(v2952, v2938);
            const v2969 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1')];
            const v2970 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '2')];
            const v2971 = [v2966, v2969, v2970];
            const v2972 = stdlib.Array_set(v2912, stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1'), v2971);
            sim_r.txns.push({
              kind: 'from',
              to: v2805,
              tok: v2477
              });
            const v2973 = [v2938, v2950];
            const v2977 = stdlib.lt(v2941, v2479);
            const v2978 = v2977 ? v2941 : v2479;
            await stdlib.simMapSet(sim_r, 2, v2805, v2978);
            const v2984 = {
              now: v2941,
              result: v2973
              };
            const v2987 = await txn1.getOutput('claim', 'v2984', ctc14, v2984);
            
            const v8675 = v2571;
            const v8676 = v2978;
            const v8677 = v2573;
            const v8678 = v2574;
            const v8679 = v2914;
            const v8680 = v2576;
            const v8681 = v2577;
            const v8683 = v2972;
            const v8684 = v2960;
            sim_r.isHalt = false;
            }
          else {
            const v3005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v3006 = {
              now: v2941,
              result: v3005
              };
            const v3009 = await txn1.getOutput('claim', 'v3006', ctc14, v3006);
            
            const v3021 = stdlib.lt(v2941, v2479);
            const v3022 = v3021 ? v2941 : v2479;
            const v8697 = v2571;
            const v8698 = v3022;
            const v8699 = v2573;
            const v8700 = v2574;
            const v8701 = v2914;
            const v8702 = v2576;
            const v8703 = v2577;
            const v8705 = v2912;
            const v8706 = v2585;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'claimFees0_477': {
          const v3323 = v2806[1];
          
          break;
          }
        case 'stake0_477': {
          const v3837 = v2806[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4351 = v2806[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
  switch (v2806[0]) {
    case 'claim0_477': {
      const v2809 = v2806[1];
      undefined /* setApiDetails */;
      ;
      const v2895 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v2896 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v2900 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v2901 = v2895[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v2902 = [v2896, v2900, v2901];
      const v2903 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v2902);
      ;
      const v2904 = v2903[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v2905 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v2909 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v2910 = v2904[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v2911 = [v2905, v2909, v2910];
      const v2912 = stdlib.Array_set(v2903, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v2911);
      ;
      let v2914;
      const v2915 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
      if (v2915) {
        const v2917 = stdlib.gt(v2807, v2572);
        const v2918 = v2917 ? v2807 : v2572;
        const v2919 = stdlib.lt(v2918, v2479);
        const v2920 = v2919 ? v2918 : v2479;
        const v2921 = stdlib.sub(v2920, v2572);
        const v2922 = stdlib.cast("UInt", "UInt256", v2921, false);
        const v2923 = stdlib.mul256(v2528, v2922);
        const v2924 = stdlib.cast("UInt", "UInt256", v2577, false);
        const v2925 = stdlib.div256(v2923, v2924);
        const v2926 = stdlib.add256(v2575, v2925);
        v2914 = v2926;
        }
      else {
        v2914 = v2575;
        }
      const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
      const v2928 = stdlib.fromSome(v2927, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
      const v2929 = stdlib.cast("UInt", "UInt256", v2928, false);
      const v2930 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
      const v2931 = stdlib.fromSome(v2930, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2932 = stdlib.sub256(v2914, v2931);
      const v2933 = stdlib.mul256(v2929, v2932);
      const v2934 = stdlib.div256(v2933, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2935 = stdlib.cast("UInt256", "UInt", v2934, false);
      const v2936 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
      const v2937 = stdlib.fromSome(v2936, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
      const v2938 = stdlib.add(v2935, v2937);
      await stdlib.mapSet(map1, v2805, v2938);
      await stdlib.mapSet(map3, v2805, v2914);
      const v2940 = stdlib.gt(v2807, v2572);
      const v2941 = v2940 ? v2807 : v2572;
      const v2942 = stdlib.gt(v2941, v2479);
      const v2943 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
      const v2944 = stdlib.fromSome(v2943, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
      const v2945 = stdlib.add(v2944, v2482);
      const v2946 = stdlib.le(v2945, v2941);
      const v2947 = v2942 ? true : v2946;
      if (v2947) {
        const v2950 = stdlib.muldiv(v2938, v2481, v2480);
        await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:287:18:decimal', stdlib.UInt_max, '0'));
        const v2951 = v2912[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '1')];
        const v2952 = v2951[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '0')];
        const v2953 = stdlib.le(v2938, v2952);
        const v2955 = stdlib.le(v2950, v2585);
        const v2956 = v2953 ? v2955 : false;
        stdlib.assert(v2956, {
          at: './index.rsh:290:12:application',
          fs: ['at ./index.rsh:475:66:application call to "claimRewards" (defined at: ./index.rsh:283:28:function exp)', 'at ./index.rsh:470:20:application call to [unknown function] (defined at: ./index.rsh:470:20:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v2960 = stdlib.sub(v2585, v2950);
        ;
        const v2966 = stdlib.sub(v2952, v2938);
        const v2969 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1')];
        const v2970 = v2951[stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '2')];
        const v2971 = [v2966, v2969, v2970];
        const v2972 = stdlib.Array_set(v2912, stdlib.checkedBigNumberify('./index.rsh:291:65:application', stdlib.UInt_max, '1'), v2971);
        ;
        const v2973 = [v2938, v2950];
        const v2977 = stdlib.lt(v2941, v2479);
        const v2978 = v2977 ? v2941 : v2479;
        await stdlib.mapSet(map2, v2805, v2978);
        const v2984 = {
          now: v2941,
          result: v2973
          };
        const v2987 = await txn1.getOutput('claim', 'v2984', ctc14, v2984);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v2809, v2987), {
            at: './index.rsh:467:11:application',
            fs: ['at ./index.rsh:467:11:application call to [unknown function] (defined at: ./index.rsh:467:11:function exp)', 'at ./index.rsh:477:21:application call to "callback" (defined at: ./index.rsh:470:20:function exp)', 'at ./index.rsh:470:20:application call to [unknown function] (defined at: ./index.rsh:470:20:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v8675 = v2571;
        const v8676 = v2978;
        const v8677 = v2573;
        const v8678 = v2574;
        const v8679 = v2914;
        const v8680 = v2576;
        const v8681 = v2577;
        const v8683 = v2972;
        const v8684 = v2960;
        const v8685 = v2972[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
        const v8686 = v8685[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
        const v8687 = stdlib.le(v2576, v8686);
        stdlib.assert(v8687, {
          at: './index.rsh:314:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v8688 = stdlib.le(v2571, v2960);
        stdlib.assert(v8688, {
          at: './index.rsh:315:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      else {
        const v3005 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v3006 = {
          now: v2941,
          result: v3005
          };
        const v3009 = await txn1.getOutput('claim', 'v3006', ctc14, v3006);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v2809, v3009), {
            at: './index.rsh:467:11:application',
            fs: ['at ./index.rsh:467:11:application call to [unknown function] (defined at: ./index.rsh:467:11:function exp)', 'at ./index.rsh:481:21:application call to "callback" (defined at: ./index.rsh:470:20:function exp)', 'at ./index.rsh:470:20:application call to [unknown function] (defined at: ./index.rsh:470:20:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v3021 = stdlib.lt(v2941, v2479);
        const v3022 = v3021 ? v2941 : v2479;
        const v8697 = v2571;
        const v8698 = v3022;
        const v8699 = v2573;
        const v8700 = v2574;
        const v8701 = v2914;
        const v8702 = v2576;
        const v8703 = v2577;
        const v8705 = v2912;
        const v8706 = v2585;
        const v8707 = v2912[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
        const v8708 = v8707[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
        const v8709 = stdlib.le(v2576, v8708);
        stdlib.assert(v8709, {
          at: './index.rsh:314:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v8710 = stdlib.le(v2571, v2585);
        stdlib.assert(v8710, {
          at: './index.rsh:315:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      break;
      }
    case 'claimFees0_477': {
      const v3323 = v2806[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3837 = v2806[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4351 = v2806[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimFees4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc10,
    claimFees0_477: ctc10,
    stake0_477: ctc11,
    unstake0_477: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2680 = ctc.selfAddress();
  const v2682 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:496:29:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to "runclaimFees0_477" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'in',
    who: 'claimFees'
    });
  const v2683 = stdlib.addressEq(v2680, v2473);
  stdlib.assert(v2683, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:497:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:29:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to "runclaimFees0_477" (defined at: ./index.rsh:496:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'only beneficiary can claim creation fees',
    who: 'claimFees'
    });
  const v2688 = ['claimFees0_477', v2682];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585, v2688],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:500:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:500:14:decimal', stdlib.UInt_max, '0'), v2476], [stdlib.checkedBigNumberify('./index.rsh:500:31:decimal', stdlib.UInt_max, '0'), v2477]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
      
      switch (v2806[0]) {
        case 'claim0_477': {
          const v2809 = v2806[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3323 = v2806[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimFees"
            });
          ;
          const v3409 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3414 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3415 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v3416 = [v3410, v3414, v3415];
          const v3417 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3416);
          ;
          const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3419 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3423 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3424 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v3425 = [v3419, v3423, v3424];
          const v3426 = stdlib.Array_set(v3417, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3425);
          ;
          let v3541;
          const v3543 = stdlib.gt(v2807, v2572);
          const v3544 = v3543 ? v2807 : v2572;
          const v3545 = stdlib.lt(v3544, v2479);
          const v3546 = v3545 ? v3544 : v2479;
          const v3547 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
          const v3548 = stdlib.lt(v2573, v3546);
          const v3549 = v3547 ? v3548 : false;
          if (v3549) {
            const v3550 = stdlib.sub(v3546, v2573);
            const v3551 = stdlib.cast("UInt", "UInt256", v3550, false);
            const v3552 = stdlib.mul256(v2528, v3551);
            v3541 = v3552;
            }
          else {
            v3541 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v3553 = stdlib.add256(v2574, v3541);
          const v3554 = stdlib.div256(v3553, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3555 = stdlib.cast("UInt256", "UInt", v3554, false);
          const v3556 = stdlib.muldiv(v3555, v2481, v2480);
          const v3557 = stdlib.add(v2576, v3555);
          const v3558 = v3426[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '1')];
          const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '0')];
          const v3560 = stdlib.lt(v3557, v3559);
          const v3561 = v3560 ? v3557 : v3559;
          const v3562 = stdlib.add(v3556, v2571);
          const v3564 = stdlib.lt(v3562, v2585);
          const v3565 = v3564 ? v3562 : v2585;
          const v3569 = stdlib.sub(v2585, v3565);
          sim_r.txns.push({
            kind: 'from',
            to: v2473,
            tok: undefined /* Nothing */
            });
          const v3575 = stdlib.sub(v3559, v3561);
          const v3578 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1')];
          const v3579 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '2')];
          const v3580 = [v3575, v3578, v3579];
          const v3581 = stdlib.Array_set(v3426, stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1'), v3580);
          sim_r.txns.push({
            kind: 'from',
            to: v2473,
            tok: v2477
            });
          const v3585 = [v3561, v3565];
          const v3586 = {
            now: v3544,
            result: v3585
            };
          const v3589 = await txn1.getOutput('claimFees', 'v3586', ctc14, v3586);
          
          const v3601 = stdlib.cast("UInt", "UInt256", v3555, false);
          const v3602 = stdlib.mul256(v3601, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3603 = stdlib.sub256(v3553, v3602);
          const v8851 = stdlib.checkedBigNumberify('./index.rsh:519:13:decimal', stdlib.UInt_max, '0');
          const v8852 = v2572;
          const v8853 = v3544;
          const v8854 = v3603;
          const v8855 = v2575;
          const v8856 = stdlib.checkedBigNumberify('./index.rsh:518:13:decimal', stdlib.UInt_max, '0');
          const v8857 = v2577;
          const v8859 = v3581;
          const v8860 = v3569;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_477': {
          const v3837 = v2806[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4351 = v2806[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
  switch (v2806[0]) {
    case 'claim0_477': {
      const v2809 = v2806[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3323 = v2806[1];
      undefined /* setApiDetails */;
      const v3338 = stdlib.addressEq(v2805, v2473);
      stdlib.assert(v3338, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:497:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:496:29:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:496:29:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
        msg: 'only beneficiary can claim creation fees',
        who: 'claimFees'
        });
      ;
      const v3409 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3410 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3414 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3415 = v3409[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v3416 = [v3410, v3414, v3415];
      const v3417 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3416);
      ;
      const v3418 = v3417[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3419 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3423 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3424 = v3418[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v3425 = [v3419, v3423, v3424];
      const v3426 = stdlib.Array_set(v3417, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3425);
      ;
      let v3541;
      const v3543 = stdlib.gt(v2807, v2572);
      const v3544 = v3543 ? v2807 : v2572;
      const v3545 = stdlib.lt(v3544, v2479);
      const v3546 = v3545 ? v3544 : v2479;
      const v3547 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
      const v3548 = stdlib.lt(v2573, v3546);
      const v3549 = v3547 ? v3548 : false;
      if (v3549) {
        const v3550 = stdlib.sub(v3546, v2573);
        const v3551 = stdlib.cast("UInt", "UInt256", v3550, false);
        const v3552 = stdlib.mul256(v2528, v3551);
        v3541 = v3552;
        }
      else {
        v3541 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v3553 = stdlib.add256(v2574, v3541);
      const v3554 = stdlib.div256(v3553, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3555 = stdlib.cast("UInt256", "UInt", v3554, false);
      const v3556 = stdlib.muldiv(v3555, v2481, v2480);
      const v3557 = stdlib.add(v2576, v3555);
      const v3558 = v3426[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '1')];
      const v3559 = v3558[stdlib.checkedBigNumberify('./index.rsh:507:69:application', stdlib.UInt_max, '0')];
      const v3560 = stdlib.lt(v3557, v3559);
      const v3561 = v3560 ? v3557 : v3559;
      const v3562 = stdlib.add(v3556, v2571);
      const v3564 = stdlib.lt(v3562, v2585);
      const v3565 = v3564 ? v3562 : v2585;
      const v3569 = stdlib.sub(v2585, v3565);
      ;
      const v3575 = stdlib.sub(v3559, v3561);
      const v3578 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1')];
      const v3579 = v3558[stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '2')];
      const v3580 = [v3575, v3578, v3579];
      const v3581 = stdlib.Array_set(v3426, stdlib.checkedBigNumberify('./index.rsh:510:66:application', stdlib.UInt_max, '1'), v3580);
      ;
      const v3585 = [v3561, v3565];
      const v3586 = {
        now: v3544,
        result: v3585
        };
      const v3589 = await txn1.getOutput('claimFees', 'v3586', ctc14, v3586);
      if (v1687) {
        stdlib.protect(ctc0, await interact.out(v3323, v3589), {
          at: './index.rsh:496:11:application',
          fs: ['at ./index.rsh:496:11:application call to [unknown function] (defined at: ./index.rsh:496:11:function exp)', 'at ./index.rsh:511:19:application call to "callback" (defined at: ./index.rsh:501:20:function exp)', 'at ./index.rsh:501:20:application call to [unknown function] (defined at: ./index.rsh:501:20:function exp)'],
          msg: 'out',
          who: 'claimFees'
          });
        }
      else {
        }
      
      const v3601 = stdlib.cast("UInt", "UInt256", v3555, false);
      const v3602 = stdlib.mul256(v3601, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3603 = stdlib.sub256(v3553, v3602);
      const v8851 = stdlib.checkedBigNumberify('./index.rsh:519:13:decimal', stdlib.UInt_max, '0');
      const v8852 = v2572;
      const v8853 = v3544;
      const v8854 = v3603;
      const v8855 = v2575;
      const v8856 = stdlib.checkedBigNumberify('./index.rsh:518:13:decimal', stdlib.UInt_max, '0');
      const v8857 = v2577;
      const v8859 = v3581;
      const v8860 = v3569;
      const v8861 = v3581[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
      const v8862 = v8861[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
      const v8863 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:518:13:decimal', stdlib.UInt_max, '0'), v8862);
      stdlib.assert(v8863, {
        at: './index.rsh:314:14:application',
        fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      const v8864 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:519:13:decimal', stdlib.UInt_max, '0'), v3569);
      stdlib.assert(v8864, {
        at: './index.rsh:315:14:application',
        fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      return;
      
      break;
      }
    case 'stake0_477': {
      const v3837 = v2806[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4351 = v2806[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc11,
    claimFees0_477: ctc11,
    stake0_477: ctc10,
    unstake0_477: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2635 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:407:32:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to "runstake0_477" (defined at: ./index.rsh:407:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v2636 = v2635[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2638 = stdlib.add(v2577, v2636);
  const v2639 = stdlib.lt(v2638, stdlib.UInt_max);
  stdlib.assert(v2639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:408:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:407:32:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to "runstake0_477" (defined at: ./index.rsh:407:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'maximum stakes has been reached',
    who: 'stake'
    });
  const v2646 = ['stake0_477', v2635];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585, v2646],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:411:10:decimal', stdlib.UInt_max, '0'), [[v2636, v2476], [stdlib.checkedBigNumberify('./index.rsh:411:37:decimal', stdlib.UInt_max, '0'), v2477]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
      
      switch (v2806[0]) {
        case 'claim0_477': {
          const v2809 = v2806[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3323 = v2806[1];
          
          break;
          }
        case 'stake0_477': {
          const v3837 = v2806[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v3864 = v3837[stdlib.checkedBigNumberify('./index.rsh:407:10:spread', stdlib.UInt_max, '0')];
          const v3865 = stdlib.add(v2577, v3864);
          ;
          const v3923 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3924 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3925 = stdlib.add(v3924, v3864);
          const v3928 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3929 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v3930 = [v3925, v3928, v3929];
          const v3931 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3930);
          sim_r.txns.push({
            amt: v3864,
            kind: 'to',
            tok: v2476
            });
          const v3932 = v3931[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v3937 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v3938 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v3939 = [v3933, v3937, v3938];
          const v3940 = stdlib.Array_set(v3931, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3939);
          ;
          let v4125;
          const v4126 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
          if (v4126) {
            const v4128 = stdlib.gt(v2807, v2572);
            const v4129 = v4128 ? v2807 : v2572;
            const v4130 = stdlib.lt(v4129, v2479);
            const v4131 = v4130 ? v4129 : v2479;
            const v4132 = stdlib.sub(v4131, v2572);
            const v4133 = stdlib.cast("UInt", "UInt256", v4132, false);
            const v4134 = stdlib.mul256(v2528, v4133);
            const v4135 = stdlib.cast("UInt", "UInt256", v2577, false);
            const v4136 = stdlib.div256(v4134, v4135);
            const v4137 = stdlib.add256(v2575, v4136);
            v4125 = v4137;
            }
          else {
            v4125 = v2575;
            }
          const v4138 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2805), null);
          const v4139 = stdlib.fromSome(v4138, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
          const v4140 = stdlib.cast("UInt", "UInt256", v4139, false);
          const v4141 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2805), null);
          const v4142 = stdlib.fromSome(v4141, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4143 = stdlib.sub256(v4125, v4142);
          const v4144 = stdlib.mul256(v4140, v4143);
          const v4145 = stdlib.div256(v4144, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4146 = stdlib.cast("UInt256", "UInt", v4145, false);
          const v4147 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2805), null);
          const v4148 = stdlib.fromSome(v4147, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
          const v4149 = stdlib.add(v4146, v4148);
          await stdlib.simMapSet(sim_r, 1, v2805, v4149);
          await stdlib.simMapSet(sim_r, 3, v2805, v4125);
          const v4152 = stdlib.add(v4139, v3864);
          await stdlib.simMapSet(sim_r, 0, v2805, v4152);
          const v4154 = stdlib.gt(v2807, v2572);
          const v4155 = v4154 ? v2807 : v2572;
          const v4156 = stdlib.lt(v4155, v2479);
          const v4157 = v4156 ? v4155 : v2479;
          await stdlib.simMapSet(sim_r, 2, v2805, v4157);
          const v4162 = {
            now: v4155,
            result: v3864
            };
          const v4164 = await txn1.getOutput('stake', 'v4162', ctc13, v4162);
          
          let v4178;
          const v4184 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
          const v4185 = stdlib.lt(v2573, v4157);
          const v4186 = v4184 ? v4185 : false;
          if (v4186) {
            const v4187 = stdlib.sub(v4157, v2573);
            const v4188 = stdlib.cast("UInt", "UInt256", v4187, false);
            const v4189 = stdlib.mul256(v2528, v4188);
            v4178 = v4189;
            }
          else {
            v4178 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v4190 = stdlib.add256(v2574, v4178);
          const v9005 = v2571;
          const v9006 = v4157;
          const v9007 = v2573;
          const v9008 = v4190;
          const v9009 = v4125;
          const v9010 = v2576;
          const v9011 = v3865;
          const v9013 = v3940;
          const v9014 = v2585;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_477': {
          const v4351 = v2806[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
  switch (v2806[0]) {
    case 'claim0_477': {
      const v2809 = v2806[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3323 = v2806[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3837 = v2806[1];
      undefined /* setApiDetails */;
      const v3864 = v3837[stdlib.checkedBigNumberify('./index.rsh:407:10:spread', stdlib.UInt_max, '0')];
      const v3865 = stdlib.add(v2577, v3864);
      const v3866 = stdlib.lt(v3865, stdlib.UInt_max);
      stdlib.assert(v3866, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:408:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:407:32:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:407:32:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
        msg: 'maximum stakes has been reached',
        who: 'stake'
        });
      ;
      const v3923 = v2584[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3924 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3925 = stdlib.add(v3924, v3864);
      const v3928 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3929 = v3923[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v3930 = [v3925, v3928, v3929];
      const v3931 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v3930);
      ;
      const v3932 = v3931[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v3937 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v3938 = v3932[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v3939 = [v3933, v3937, v3938];
      const v3940 = stdlib.Array_set(v3931, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v3939);
      ;
      let v4125;
      const v4126 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
      if (v4126) {
        const v4128 = stdlib.gt(v2807, v2572);
        const v4129 = v4128 ? v2807 : v2572;
        const v4130 = stdlib.lt(v4129, v2479);
        const v4131 = v4130 ? v4129 : v2479;
        const v4132 = stdlib.sub(v4131, v2572);
        const v4133 = stdlib.cast("UInt", "UInt256", v4132, false);
        const v4134 = stdlib.mul256(v2528, v4133);
        const v4135 = stdlib.cast("UInt", "UInt256", v2577, false);
        const v4136 = stdlib.div256(v4134, v4135);
        const v4137 = stdlib.add256(v2575, v4136);
        v4125 = v4137;
        }
      else {
        v4125 = v2575;
        }
      const v4138 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
      const v4139 = stdlib.fromSome(v4138, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
      const v4140 = stdlib.cast("UInt", "UInt256", v4139, false);
      const v4141 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
      const v4142 = stdlib.fromSome(v4141, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4143 = stdlib.sub256(v4125, v4142);
      const v4144 = stdlib.mul256(v4140, v4143);
      const v4145 = stdlib.div256(v4144, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4146 = stdlib.cast("UInt256", "UInt", v4145, false);
      const v4147 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
      const v4148 = stdlib.fromSome(v4147, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
      const v4149 = stdlib.add(v4146, v4148);
      await stdlib.mapSet(map1, v2805, v4149);
      await stdlib.mapSet(map3, v2805, v4125);
      const v4152 = stdlib.add(v4139, v3864);
      await stdlib.mapSet(map0, v2805, v4152);
      const v4154 = stdlib.gt(v2807, v2572);
      const v4155 = v4154 ? v2807 : v2572;
      const v4156 = stdlib.lt(v4155, v2479);
      const v4157 = v4156 ? v4155 : v2479;
      await stdlib.mapSet(map2, v2805, v4157);
      const v4162 = {
        now: v4155,
        result: v3864
        };
      const v4164 = await txn1.getOutput('stake', 'v4162', ctc13, v4162);
      if (v1687) {
        stdlib.protect(ctc0, await interact.out(v3837, v4164), {
          at: './index.rsh:407:11:application',
          fs: ['at ./index.rsh:407:11:application call to [unknown function] (defined at: ./index.rsh:407:11:function exp)', 'at ./index.rsh:418:19:application call to "callback" (defined at: ./index.rsh:412:20:function exp)', 'at ./index.rsh:412:20:application call to [unknown function] (defined at: ./index.rsh:412:20:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      let v4178;
      const v4184 = stdlib.eq(v2577, stdlib.checkedBigNumberify('./index.rsh:340:29:decimal', stdlib.UInt_max, '0'));
      const v4185 = stdlib.lt(v2573, v4157);
      const v4186 = v4184 ? v4185 : false;
      if (v4186) {
        const v4187 = stdlib.sub(v4157, v2573);
        const v4188 = stdlib.cast("UInt", "UInt256", v4187, false);
        const v4189 = stdlib.mul256(v2528, v4188);
        v4178 = v4189;
        }
      else {
        v4178 = stdlib.checkedBigNumberify('./index.rsh:344:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v4190 = stdlib.add256(v2574, v4178);
      const v9005 = v2571;
      const v9006 = v4157;
      const v9007 = v2573;
      const v9008 = v4190;
      const v9009 = v4125;
      const v9010 = v2576;
      const v9011 = v3865;
      const v9013 = v3940;
      const v9014 = v2585;
      const v9015 = v3940[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
      const v9016 = v9015[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
      const v9017 = stdlib.le(v2576, v9016);
      stdlib.assert(v9017, {
        at: './index.rsh:314:14:application',
        fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
        msg: null,
        who: 'stake'
        });
      const v9018 = stdlib.le(v2571, v2585);
      stdlib.assert(v9018, {
        at: './index.rsh:315:14:application',
        fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
        msg: null,
        who: 'stake'
        });
      return;
      
      break;
      }
    case 'unstake0_477': {
      const v4351 = v2806[1];
      return;
      break;
      }
    }
  
  
  };
export async function _unstake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_477: ctc11,
    claimFees0_477: ctc11,
    stake0_477: ctc10,
    unstake0_477: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2648 = ctc.selfAddress();
  const v2650 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to "rununstake0_477" (defined at: ./index.rsh:431:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v2651 = v2650[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2653 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2648), null);
  const v2654 = stdlib.fromSome(v2653, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
  const v2655 = v2584[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
  const v2656 = v2655[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
  const v2657 = stdlib.le(v2654, v2656);
  stdlib.assert(v2657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to "rununstake0_477" (defined at: ./index.rsh:431:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v2659 = stdlib.lt(v2651, stdlib.UInt_max);
  stdlib.assert(v2659, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to "rununstake0_477" (defined at: ./index.rsh:431:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'tried to unstake too much really',
    who: 'unstake'
    });
  const v2663 = stdlib.le(v2651, v2654);
  stdlib.assert(v2663, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to "rununstake0_477" (defined at: ./index.rsh:431:10:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v2670 = ['unstake0_477', v2650];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2473, v2474, v2475, v2476, v2477, v2478, v2479, v2480, v2481, v2482, v2528, v2571, v2572, v2573, v2574, v2575, v2576, v2577, v2584, v2585, v2670],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:437:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:437:14:decimal', stdlib.UInt_max, '0'), v2476], [stdlib.checkedBigNumberify('./index.rsh:437:31:decimal', stdlib.UInt_max, '0'), v2477]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
      
      switch (v2806[0]) {
        case 'claim0_477': {
          const v2809 = v2806[1];
          
          break;
          }
        case 'claimFees0_477': {
          const v3323 = v2806[1];
          
          break;
          }
        case 'stake0_477': {
          const v3837 = v2806[1];
          
          break;
          }
        case 'unstake0_477': {
          const v4351 = v2806[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          const v4392 = v4351[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
          const v4393 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2805), null);
          const v4394 = stdlib.fromSome(v4393, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
          const v4395 = v2584[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
          const v4396 = v4395[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
          ;
          const v4442 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v4443 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v4444 = [v4396, v4442, v4443];
          const v4445 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v4444);
          ;
          const v4446 = v4445[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
          const v4451 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
          const v4452 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
          const v4453 = [v4447, v4451, v4452];
          const v4454 = stdlib.Array_set(v4445, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v4453);
          ;
          const v4710 = v4454[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
          const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
          let v4721;
          const v4722 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
          if (v4722) {
            const v4724 = stdlib.gt(v2807, v2572);
            const v4725 = v4724 ? v2807 : v2572;
            const v4726 = stdlib.lt(v4725, v2479);
            const v4727 = v4726 ? v4725 : v2479;
            const v4728 = stdlib.sub(v4727, v2572);
            const v4729 = stdlib.cast("UInt", "UInt256", v4728, false);
            const v4730 = stdlib.mul256(v2528, v4729);
            const v4731 = stdlib.cast("UInt", "UInt256", v2577, false);
            const v4732 = stdlib.div256(v4730, v4731);
            const v4733 = stdlib.add256(v2575, v4732);
            v4721 = v4733;
            }
          else {
            v4721 = v2575;
            }
          const v4736 = stdlib.cast("UInt", "UInt256", v4394, false);
          const v4737 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2805), null);
          const v4738 = stdlib.fromSome(v4737, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4739 = stdlib.sub256(v4721, v4738);
          const v4740 = stdlib.mul256(v4736, v4739);
          const v4741 = stdlib.div256(v4740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4742 = stdlib.cast("UInt256", "UInt", v4741, false);
          const v4743 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2805), null);
          const v4744 = stdlib.fromSome(v4743, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
          const v4745 = stdlib.add(v4742, v4744);
          await stdlib.simMapSet(sim_r, 1, v2805, v4745);
          await stdlib.simMapSet(sim_r, 3, v2805, v4721);
          const v4747 = stdlib.gt(v2807, v2572);
          const v4748 = v4747 ? v2807 : v2572;
          const v4749 = stdlib.gt(v4748, v2479);
          const v4750 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2805), null);
          const v4751 = stdlib.fromSome(v4750, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
          const v4752 = stdlib.add(v4751, v2482);
          const v4753 = stdlib.le(v4752, v4748);
          const v4754 = v4749 ? true : v4753;
          const v4757 = v4754 ? stdlib.checkedBigNumberify('./index.rsh:440:49:decimal', stdlib.UInt_max, '0') : v4745;
          const v4758 = stdlib.muldiv(v4757, v2481, v2480);
          if (v4754) {
            const v4819 = stdlib.sub(v4394, v4392);
            await stdlib.simMapSet(sim_r, 0, v2805, v4819);
            const v4825 = stdlib.sub(v4711, v4392);
            const v4828 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
            const v4829 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
            const v4830 = [v4825, v4828, v4829];
            const v4831 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4830);
            sim_r.txns.push({
              kind: 'from',
              to: v2805,
              tok: v2476
              });
            const v4832 = stdlib.sub(v2577, v4392);
            const v4836 = stdlib.lt(v4748, v2479);
            const v4837 = v4836 ? v4748 : v2479;
            await stdlib.simMapSet(sim_r, 2, v2805, v4837);
            const v4842 = {
              now: v4748,
              result: v4392
              };
            const v4844 = await txn1.getOutput('unstake', 'v4842', ctc13, v4842);
            
            const v4857 = stdlib.gt(v4832, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
            const v4861 = v4857 ? v2573 : v4748;
            const v4862 = stdlib.add(v2576, v4757);
            const v4863 = stdlib.add(v2571, v4758);
            const v9159 = v4863;
            const v9160 = v4837;
            const v9161 = v4861;
            const v9162 = v2574;
            const v9163 = v4721;
            const v9164 = v4862;
            const v9165 = v4832;
            const v9167 = v4831;
            const v9168 = v2585;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v2805, stdlib.checkedBigNumberify('./index.rsh:445:29:decimal', stdlib.UInt_max, '0'));
            const v4771 = stdlib.sub(v4394, v4392);
            await stdlib.simMapSet(sim_r, 0, v2805, v4771);
            const v4777 = stdlib.sub(v4711, v4392);
            const v4780 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
            const v4781 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
            const v4782 = [v4777, v4780, v4781];
            const v4783 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4782);
            sim_r.txns.push({
              kind: 'from',
              to: v2805,
              tok: v2476
              });
            const v4784 = stdlib.sub(v2577, v4392);
            const v4788 = stdlib.lt(v4748, v2479);
            const v4789 = v4788 ? v4748 : v2479;
            await stdlib.simMapSet(sim_r, 2, v2805, v4789);
            const v4794 = {
              now: v4748,
              result: v4392
              };
            const v4796 = await txn1.getOutput('unstake', 'v4794', ctc13, v4794);
            
            const v4809 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
            const v4813 = v4809 ? v2573 : v4748;
            const v4814 = stdlib.add(v2576, v4757);
            const v4815 = stdlib.add(v2571, v4758);
            const v9181 = v4815;
            const v9182 = v4789;
            const v9183 = v4813;
            const v9184 = v2574;
            const v9185 = v4721;
            const v9186 = v4814;
            const v9187 = v4784;
            const v9189 = v4783;
            const v9190 = v2585;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2806], secs: v2808, time: v2807, didSend: v1687, from: v2805 } = txn1;
  switch (v2806[0]) {
    case 'claim0_477': {
      const v2809 = v2806[1];
      return;
      break;
      }
    case 'claimFees0_477': {
      const v3323 = v2806[1];
      return;
      break;
      }
    case 'stake0_477': {
      const v3837 = v2806[1];
      return;
      break;
      }
    case 'unstake0_477': {
      const v4351 = v2806[1];
      undefined /* setApiDetails */;
      const v4392 = v4351[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
      const v4393 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2805), null);
      const v4394 = stdlib.fromSome(v4393, stdlib.checkedBigNumberify('./index.rsh:239:46:decimal', stdlib.UInt_max, '0'));
      const v4395 = v2584[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
      const v4396 = v4395[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
      const v4397 = stdlib.le(v4394, v4396);
      stdlib.assert(v4397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v4399 = stdlib.lt(v4392, stdlib.UInt_max);
      stdlib.assert(v4399, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:433:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
        msg: 'tried to unstake too much really',
        who: 'unstake'
        });
      const v4403 = stdlib.le(v4392, v4394);
      stdlib.assert(v4403, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:434:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:431:36:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:431:36:function exp)', 'at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)', 'at ./index.rsh:406:14:application call to [unknown function] (defined at: ./index.rsh:406:14:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      ;
      const v4442 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v4443 = v4395[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v4444 = [v4396, v4442, v4443];
      const v4445 = stdlib.Array_set(v2584, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0'), v4444);
      ;
      const v4446 = v4445[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v4447 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '0')];
      const v4451 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1')];
      const v4452 = v4446[stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '2')];
      const v4453 = [v4447, v4451, v4452];
      const v4454 = stdlib.Array_set(v4445, stdlib.checkedBigNumberify('./index.rsh:304:21:dot', stdlib.UInt_max, '1'), v4453);
      ;
      const v4710 = v4454[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
      const v4711 = v4710[stdlib.checkedBigNumberify('./index.rsh:432:36:application', stdlib.UInt_max, '0')];
      const v4712 = stdlib.le(v4394, v4711);
      stdlib.assert(v4712, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:432:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:438:20:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v4721;
      const v4722 = stdlib.gt(v2577, stdlib.checkedBigNumberify('./index.rsh:349:27:decimal', stdlib.UInt_max, '0'));
      if (v4722) {
        const v4724 = stdlib.gt(v2807, v2572);
        const v4725 = v4724 ? v2807 : v2572;
        const v4726 = stdlib.lt(v4725, v2479);
        const v4727 = v4726 ? v4725 : v2479;
        const v4728 = stdlib.sub(v4727, v2572);
        const v4729 = stdlib.cast("UInt", "UInt256", v4728, false);
        const v4730 = stdlib.mul256(v2528, v4729);
        const v4731 = stdlib.cast("UInt", "UInt256", v2577, false);
        const v4732 = stdlib.div256(v4730, v4731);
        const v4733 = stdlib.add256(v2575, v4732);
        v4721 = v4733;
        }
      else {
        v4721 = v2575;
        }
      const v4736 = stdlib.cast("UInt", "UInt256", v4394, false);
      const v4737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2805), null);
      const v4738 = stdlib.fromSome(v4737, stdlib.checkedBigNumberify('./index.rsh:249:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4739 = stdlib.sub256(v4721, v4738);
      const v4740 = stdlib.mul256(v4736, v4739);
      const v4741 = stdlib.div256(v4740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4742 = stdlib.cast("UInt256", "UInt", v4741, false);
      const v4743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2805), null);
      const v4744 = stdlib.fromSome(v4743, stdlib.checkedBigNumberify('./index.rsh:243:46:decimal', stdlib.UInt_max, '0'));
      const v4745 = stdlib.add(v4742, v4744);
      await stdlib.mapSet(map1, v2805, v4745);
      await stdlib.mapSet(map3, v2805, v4721);
      const v4747 = stdlib.gt(v2807, v2572);
      const v4748 = v4747 ? v2807 : v2572;
      const v4749 = stdlib.gt(v4748, v2479);
      const v4750 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2805), null);
      const v4751 = stdlib.fromSome(v4750, stdlib.checkedBigNumberify('./index.rsh:246:60:decimal', stdlib.UInt_max, '0'));
      const v4752 = stdlib.add(v4751, v2482);
      const v4753 = stdlib.le(v4752, v4748);
      const v4754 = v4749 ? true : v4753;
      const v4757 = v4754 ? stdlib.checkedBigNumberify('./index.rsh:440:49:decimal', stdlib.UInt_max, '0') : v4745;
      const v4758 = stdlib.muldiv(v4757, v2481, v2480);
      if (v4754) {
        const v4819 = stdlib.sub(v4394, v4392);
        await stdlib.mapSet(map0, v2805, v4819);
        const v4825 = stdlib.sub(v4711, v4392);
        const v4828 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
        const v4829 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
        const v4830 = [v4825, v4828, v4829];
        const v4831 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4830);
        ;
        const v4832 = stdlib.sub(v2577, v4392);
        const v4836 = stdlib.lt(v4748, v2479);
        const v4837 = v4836 ? v4748 : v2479;
        await stdlib.mapSet(map2, v2805, v4837);
        const v4842 = {
          now: v4748,
          result: v4392
          };
        const v4844 = await txn1.getOutput('unstake', 'v4842', ctc13, v4842);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v4351, v4844), {
            at: './index.rsh:431:11:application',
            fs: ['at ./index.rsh:431:11:application call to [unknown function] (defined at: ./index.rsh:431:11:function exp)', 'at ./index.rsh:454:19:application call to "callback" (defined at: ./index.rsh:438:20:function exp)', 'at ./index.rsh:438:20:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4857 = stdlib.gt(v4832, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
        const v4861 = v4857 ? v2573 : v4748;
        const v4862 = stdlib.add(v2576, v4757);
        const v4863 = stdlib.add(v2571, v4758);
        const v9159 = v4863;
        const v9160 = v4837;
        const v9161 = v4861;
        const v9162 = v2574;
        const v9163 = v4721;
        const v9164 = v4862;
        const v9165 = v4832;
        const v9167 = v4831;
        const v9168 = v2585;
        const v9169 = v4831[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
        const v9170 = v9169[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
        const v9171 = stdlib.le(v4862, v9170);
        stdlib.assert(v9171, {
          at: './index.rsh:314:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v9172 = stdlib.le(v4863, v2585);
        stdlib.assert(v9172, {
          at: './index.rsh:315:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      else {
        await stdlib.mapSet(map1, v2805, stdlib.checkedBigNumberify('./index.rsh:445:29:decimal', stdlib.UInt_max, '0'));
        const v4771 = stdlib.sub(v4394, v4392);
        await stdlib.mapSet(map0, v2805, v4771);
        const v4777 = stdlib.sub(v4711, v4392);
        const v4780 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '1')];
        const v4781 = v4710[stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '2')];
        const v4782 = [v4777, v4780, v4781];
        const v4783 = stdlib.Array_set(v4454, stdlib.checkedBigNumberify('./index.rsh:450:49:application', stdlib.UInt_max, '0'), v4782);
        ;
        const v4784 = stdlib.sub(v2577, v4392);
        const v4788 = stdlib.lt(v4748, v2479);
        const v4789 = v4788 ? v4748 : v2479;
        await stdlib.mapSet(map2, v2805, v4789);
        const v4794 = {
          now: v4748,
          result: v4392
          };
        const v4796 = await txn1.getOutput('unstake', 'v4794', ctc13, v4794);
        if (v1687) {
          stdlib.protect(ctc0, await interact.out(v4351, v4796), {
            at: './index.rsh:431:11:application',
            fs: ['at ./index.rsh:431:11:application call to [unknown function] (defined at: ./index.rsh:431:11:function exp)', 'at ./index.rsh:454:19:application call to "callback" (defined at: ./index.rsh:438:20:function exp)', 'at ./index.rsh:438:20:application call to [unknown function] (defined at: ./index.rsh:438:20:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4809 = stdlib.gt(v4784, stdlib.checkedBigNumberify('./index.rsh:459:30:decimal', stdlib.UInt_max, '0'));
        const v4813 = v4809 ? v2573 : v4748;
        const v4814 = stdlib.add(v2576, v4757);
        const v4815 = stdlib.add(v2571, v4758);
        const v9181 = v4815;
        const v9182 = v4789;
        const v9183 = v4813;
        const v9184 = v2574;
        const v9185 = v4721;
        const v9186 = v4814;
        const v9187 = v4784;
        const v9189 = v4783;
        const v9190 = v2585;
        const v9191 = v4783[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '1')];
        const v9192 = v9191[stdlib.checkedBigNumberify('./index.rsh:314:41:application', stdlib.UInt_max, '0')];
        const v9193 = stdlib.le(v4814, v9192);
        stdlib.assert(v9193, {
          at: './index.rsh:314:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v9194 = stdlib.le(v4815, v2585);
        stdlib.assert(v9194, {
          at: './index.rsh:315:14:application',
          fs: ['at ./index.rsh:304:21:application call to [unknown function] (defined at: ./index.rsh:304:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      break;
      }
    }
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimFees(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimFees expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimFees expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimFees4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _stake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _unstake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAdAAEYBAgQBgMgQEhQWGAFkE48vfqL1AStiOWGC/HdkPwModHkuwf6sqy1A9el6uADKDA4////////////AaCNBoCt4gQmBgEAAQEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeC2s6dkAAABAgAJAQAAAAAAAAAAIjUAMRhBD2YnBGRJIls1AUkhBFs1AiEFWzUIMRkjEkEACjEAKCEQr2ZCDys2GgAXSUEBXCI1BCM1BkkhEQxAAJ9JIRIMQABsSSETDEAAUiETEkQ0ASUSRChkKWRQK2RQSTUDVwAgNANXIAhQNANXKAhQNANXMAhQNANXOAhQNANXQAhQNANXSAhQNANXUAhQNANXWAhQNANXYAhQNQdCDsUhEhJEJwQ1/yk0/1AhBK9QQgD6SSEUDEAAEyEUEkQnBDX/KDT/UCEEr1BCAOAhERJENhoBNf+AAQM0/1BCAM5JIRUMQACWSSEWDEAAZyEWEkQ0ASUSRDYaATX/IjT/iA6MVwAJSTX+I1s0/iJVTRYiNP+IDnhXCQlJNf4jWzT+IlVNFlAiNP+IDmNXEglJNf4jWzT+IlVNFlAyAzT/iA5NVxshSTX+VwEgNP4iVU1QNQdCDhEhFRJENAElEkQoZClkUCtkUEk1A1foCDQDV5AIUDQDV8AgUDUHQg3pgc3I+h4SRDYaATX/KzT/UEIAHjYaAhc1BDYaAzYaARdJIwxACvRJIQcMQAoXIQcSRCU0ARJENARJIhJMNAISEUQoZClkUCtkUEk1A0lKSkpKSkpKSkpXACA1/yEIWzX+IRdbNf0hGFs1/CEZWzX7IQlbNfohCls1+SELWzX4IQxbNfchDVs19ldoIDX1gYgBWzX0gZABWzXzgZgBWzXyV6AgNfFXwCA18IHgAVs174HoAVs17lfwIjXtgZICWzXsSTUFNeuABJHxp5o061CwNOsiVUmBAgxABVhJIQcMQANMIQcSRDTrVwEINeqxIrIBIQayEDQIshizNOoXNekiMQCIDQ1XAAlJNecjWzTnIlVNNeg07VcAEUk15yJbNeY06DTmDkQ06SEaDEQ06TToDkQ05hY051cICFA051cQAVA07VcREVA15TTlVxERNeQ05VcAETTkVwAINORXCAhQNORXEAFQUDXjNONXABFJNeIiWzXhNOg04Q5ENO4iDUEANzTzMgYyBjTzDU013zTwNPUkrzT5NN9JNPkMTTTzCRZQo4gMsiSvNO4WUKKIDKigiAykNeBCAAQ08DXgJK806BZQNOAyAzEAiAxGVxshSTXeVwEgNN4iVU2hiAx6o4gMdiqiiAxxSUohBVsiEkQhBFsiEkQiWyISRCRbIjEAiAwQVwkJSTXeI1s03iJVTQg13zEAKDEAiAv4KTTfFlA13klXAAk03lBMVxIqUGYxACgxAIgL3Ck04FA13lcAGzTeUGY08zIGMgY08w1NSTXeNPkNIjEAiAu5VxIJSTXcI1s03CJVTTT2CDTeDhE13TTfIjTdTUk13DT3HTT4lzXbNN1BAMgxACgxAIgLhSk06DTpCRZQNdpXCTM02kxQZrEisgE06bISJbIQMQCyFDT8shGzNO406Qk12jT5NN5JNPkMTTXZMQAoMQCIC0UpNNkWUDXYSVcAEjTYUExXGyFQZoAIAAAAAAAAEuo03hY06RZQULA03hY06RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ02wg02TTeNPI02iINTTTxNOA07zTcCDTaMgY04TTpCRY04lcICFA04lcQAVA041cREVA07EIJmjEAKDEAiAq9JwU12klXAAk02lBMVxIqUGYxACgxAIgKpCk06DTpCRZQNdpXCTM02kxQZrEisgE06bISJbIQMQCyFDT8shGzNO406Qk12jT5NN5JNPkMTTXZMQAoMQCICmQpNNkWUDXYSVcAEjTYUExXGyFQZoAIAAAAAAAAEro03hY06RZQULA03hY06RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ02wg02TTeNPI02iINTTTxNOA07zTcCDTaMgY04TTpCRY04lcICFA04lcQAVA041cREVA07EIIuUg061cBCDXqsSKyASEGshA0CLIYszTqFzXpNO406QhJNeghGgxENO1XABFJNeciWzTpCBY051cICFA051cQAVA07VcREVA15jTpNPyICbw05lcRETXlNO4iDUEANzTzMgYyBjTzDU014zTwNPUkrzT5NONJNPkMTTTzCRZQo4gJqSSvNO4WUKKICZ+giAmbNeRCAAQ08DXkIjEAiAlGVwAJSTXiI1s04iJVTTXjMQAoMQCICS8pJK804xZQNOQyAzEAiAkfVxshSTXiVwEgNOIiVU2hiAlTo4gJTyqiiAlKSUohBVsiEkQhBFsiEkQiWyISRCRbIjEAiAjpVwkJSTXiI1s04iJVTQgWUDXiSVcACTTiUExXEipQZjEAKDEAiAjCKTTkUDXiVwAbNOJQZjEAKDEAiAitKTTjNOkIFlA14lcJMzTiTFBmNPMyBjIGNPMNTTXiNPk04kk0+QxNNeExACgxAIgIfCk04RZQNeBJVwASNOBQTFcbIVBmgAgAAAAAAAAQQjTiFjTpFlBQsDTiFjTpFlA1BzTuIhI08jThDBBBABQ09SSvNOE08gkWUKOICHY14EIABDIDNeA0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ04TTyNPE04KCICEk05DTvNOgyBjTmVwARNOVXAAg05VcICFA05VcQAVBQNOxCBrRJIwxAAXlIMQA0/xJENO1XABFJNepXAAg06lcICFA06lcQAVA07VcREVA16TTpVxERNeg06VcAETToVwAINOhXCAhQNOhXEAFQUDXnNPMyBjIGNPMNTTXlNPk05Uk0+QxNNeQ07iISNPI05AwQQQAUNPUkrzTkNPIJFlCjiAemNeZCAAQyAzXmNPE05qCIB5VJNeMqoogHjUlKIQVbIhJEIQRbIhJEIlsiEkQkWzXiNO804gg14TTnVxERSTXgIltJNd804Uk03wxNNd404jT3HTT4lzT0CDXdNOw03Uk07AxNNdyxIrIBNNyyCCOyEDT/sgezsSKyATTeshIlshA0/7IUNPuyEbOACAAAAAAAAA4CNOUWNN4WNNwWUFBQsDTlFjTeFjTcFlBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjTzNOU04ySvNOIWUCqjiAbRoYgGzTTwIjTuMgY051cAETTfNN4JFjTgVwgIUDTgVxABUFA07DTcCUIFNUixIrIBIQayEDQIshizNO1XABFJNepXAAg06lcICFA06lcQAVA07VcREVA16TTpVxERNeg06VcAETToVwAINOhXCAhQNOhXEAFQUDXnNO4iDUEANzTzMgYyBjTzDU015TTwNPUkrzT5NOVJNPkMTTTzCRZQo4gGLiSvNO4WUKKIBiSgiAYgNeZCAAQ08DXmJK8iMQCIBclXAAlJNeQjWzTkIlVNFlA05jIDMQCIBbFXGyFJNeRXASA05CJVTaGIBeWjiAXhKqKIBdxJSiEFWyISRCEEWyISRCJbIhJEJFsiMQCIBXtXCQlJNeQjWzTkIlVNCDXlMQAoMQCIBWMpNOUWUDXkSVcACTTkUExXEipQZjEAKDEAiAVHKTTmUDXkVwAbNORQZjTzMgYyBjTzDU1JNeQ0+Q0iMQCIBSRXEglJNeMjWzTjIlVNNPYINOQOEUEA8DTlNPcdNPiXNeMxACgxAIgE+ycFNeJJVwAJNOJQTFcSKlBmNOdXERFJNeIiWzXhNOU04Q404zTsDhBEsSKyATTjsggjshAxALIHs7EisgE05bISJbIQMQCyFDT7shGzNPk05Ek0+QxNNeAxACgxAIgEmyk04BZQNd9JVwASNN9QTFcbIVBmgAgAAAAAAAALqDTkFjTlFjTjFlBQULA05BY05RY04xZQUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NOA08jTxNOY07zTuMgY051cAETThNOUJFjTiVwgIUDTiVxABUFA07DTjCUIC8oAIAAAAAAAAC7405BYhBa9QULA05BYhBa9QNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ0+TTkSTT5DE008jTxNOY07zTuMgY05zTsQgKiIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSiEKWzX/IQxbNf4hDVs1/YFwWzX8gXhbNftXiCI1+oHKAVs1+YHSAVs1+IAEmouRdLA0+zT4CDT/CDX3NPw0+Qg19jT3iAN2NPpXERE19TT2NP6IA4A0A1cAIDEAEkQ0A1cgIDQDIQlbNP80AyELWzT+NP00A4FoWzT8NPs0A4GAAVs0A1eqIDT4NP8INP1JMgMyAzT5IjIGNPpXABE09SJbNPYIFjT1VwgIUDT1VxABUFA090IBzEiBwJoMiAL+sSKyASEGshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSkpKSlcAIDX/IQhbNf4hF1s1/SEYWzX8IRlbNfshCVs1+iEKWzX5IQtbNfghDFs19yENWzX2gAQqNoDDNP9QNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQsIERr0k19UlQNfQ0/DT7E0Q09FcAETXzIQSvNPNXCAhQNPNXEAFQNPRXERFQNfIhG4gCNLEisgEishIlshAyCrIUNPyyEbM08lcRETXxNPJXABEhBK808VcICFA08VcQAVBQNfAhG4gB/rEisgEishIlshAyCrIUNPuyEbM0/iEOCyEPDkQ0/YGAlOvcAw5ENPo0+QxENPk0+glJNe8hHAxENPYhHAxENPY07w5ENPgiDUQkrzT4FlAqo4gB4SSvNO8WUKKIAdc17jT4NP4LIQ8KNe009zT+CyEPCjXsMQA0/1A0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlA08FA07lA07RZQNOwWUChLAVcAf2cpSwFXf1tnSCM1ATIGNQJCANI1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TXsNes0+zT+VxERIlsORDT2NP8ORDTrNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPVQNPYWUDT3FlA0+BZQNPlQNPpQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/f2crSwFX/hxnSCU1ATIGNQJCAC0xGSEOEkSxIrIBIQayEDQIshghDrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AiI1CEL/p0kxGGFAAAVIIRCviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFSEITAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: {
    api_claim: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 3,
  stateSize: 282,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:230:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:525:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:304:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "User": User,
  "claim": claim,
  "claimFees": claimFees,
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  claimFees: claimFees,
  stake: stake,
  unstake: unstake
  };

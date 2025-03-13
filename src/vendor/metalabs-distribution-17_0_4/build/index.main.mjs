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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc1], ['lastUpdateBlock', ctc1], ['rewardPerTokenStored', ctc6]]);
  const ctc8 = stdlib.T_Struct([['beneficiary', ctc0], ['creationFee', ctc1], ['flatAlgoCreationFee', ctc1], ['token', ctc2], ['beginBlock', ctc1], ['endBlock', ctc1], ['rewardPerBlock', ctc1], ['extraAlgoRewardPerBlock', ctc1], ['lockLengthBlocks', ctc1]]);
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
            const [v2371, v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2388, v2428, v2430, v2432, v2434] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = svs;
            return (await ((async () => {
              
              const v2532 = {
                lastUpdateBlock: v2474,
                rewardPerTokenStored: v2475,
                totalStaked: v2477
                };
              
              return v2532;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2371, v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2388, v2428, v2430, v2432, v2434] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = svs;
            return (await ((async () => {
              
              const v2460 = {
                beginBlock: v2376,
                beneficiary: v2372,
                creationFee: v2373,
                endBlock: v2377,
                extraAlgoRewardPerBlock: v2379,
                flatAlgoCreationFee: v2374,
                lockLengthBlocks: v2380,
                rewardPerBlock: v2378,
                token: v2375
                };
              
              return v2460;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2371, v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2388, v2428, v2430, v2432, v2434] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = svs;
            return (await ((async (_v2461 ) => {
                const v2461 = stdlib.protect(ctc0, _v2461, null);
              
              const v2462 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2461), null);
              const v2463 = stdlib.fromSome(v2462, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
              const v2464 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2461), null);
              const v2465 = stdlib.fromSome(v2464, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
              const v2466 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2461), null);
              const v2467 = stdlib.fromSome(v2466, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
              const v2468 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2461), null);
              const v2469 = stdlib.fromSome(v2468, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2470 = {
                lockTimestamp: v2467,
                reward: v2465,
                rewardPerTokenPaid: v2469,
                staked: v2463
                };
              
              return v2470;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1]
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
    extraAlgoRewardPerBlock: ctc1,
    flatAlgoCreationFee: ctc1,
    lockLengthBlocks: ctc1,
    rewardPerBlock: ctc1,
    token: ctc6
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_581: ctc8,
    claimFees0_581: ctc8,
    stake0_581: ctc9,
    unstake0_581: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc11]]);
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v2308 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2309 = [v2308];
  const v2315 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './index.rsh:179:38:application',
    fs: ['at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2316 = v2315.beginBlock;
  const v2317 = v2315.beneficiary;
  const v2318 = v2315.creationFee;
  const v2319 = v2315.endBlock;
  const v2320 = v2315.extraAlgoRewardPerBlock;
  const v2321 = v2315.flatAlgoCreationFee;
  const v2322 = v2315.lockLengthBlocks;
  const v2323 = v2315.rewardPerBlock;
  const v2324 = v2315.token;
  const v2335 = stdlib.mul(v2318, stdlib.checkedBigNumberify('./index.rsh:134:25:decimal', stdlib.UInt_max, '5'));
  const v2336 = stdlib.le(v2335, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2336, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2338 = stdlib.le(v2321, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2340 = stdlib.lt(v2316, v2319);
  stdlib.assert(v2340, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:141:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2342 = stdlib.sub(v2319, v2316);
  const v2343 = stdlib.lt(v2342, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2343, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:143:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2345 = stdlib.lt(v2322, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2345, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2348 = stdlib.le(v2322, v2342);
  stdlib.assert(v2348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2350 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:150:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2350, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2352 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2353 = stdlib.lt(v2323, v2352);
  stdlib.assert(v2353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2356 = stdlib.lt(v2320, v2352);
  stdlib.assert(v2356, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:152:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2361 = stdlib.mul(v2342, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2362 = stdlib.div(stdlib.UInt_max, v2361);
  const v2363 = stdlib.lt(v2323, v2362);
  stdlib.assert(v2363, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2365 = stdlib.add(v2320, v2321);
  const v2369 = stdlib.lt(v2365, v2362);
  stdlib.assert(v2369, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:18:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2317, v2318, v2321, v2324, v2316, v2319, v2323, v2320, v2322],
    evt_cnt: 9,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380], secs: v2382, time: v2381, didSend: v263, from: v2371 } = txn1;
      
      const v2383 = v2309[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0')];
      const v2385 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '1')];
      const v2386 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '2')];
      const v2387 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2385, v2386];
      const v2388 = stdlib.Array_set(v2309, stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0'), v2387);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2375
        });
      ;
      const v2398 = stdlib.sub(v2377, v2376);
      const v2428 = stdlib.mul(v2398, v2378);
      const v2430 = stdlib.mul(v2398, v2379);
      const v2431 = stdlib.mul(v2428, v2373);
      const v2432 = stdlib.div(v2431, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      const v2433 = stdlib.mul(v2430, v2373);
      const v2434 = stdlib.div(v2433, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380], secs: v2382, time: v2381, didSend: v263, from: v2371 } = txn1;
  const v2383 = v2309[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0')];
  const v2385 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '1')];
  const v2386 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '2')];
  const v2387 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2385, v2386];
  const v2388 = stdlib.Array_set(v2309, stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0'), v2387);
  ;
  ;
  const v2391 = stdlib.mul(v2373, stdlib.checkedBigNumberify('./index.rsh:134:25:decimal', stdlib.UInt_max, '5'));
  const v2392 = stdlib.le(v2391, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2392, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2394 = stdlib.le(v2374, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2394, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2396 = stdlib.lt(v2376, v2377);
  stdlib.assert(v2396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:141:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2398 = stdlib.sub(v2377, v2376);
  const v2399 = stdlib.lt(v2398, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2399, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:143:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2401 = stdlib.lt(v2380, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2404 = stdlib.le(v2380, v2398);
  stdlib.assert(v2404, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2406 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./index.rsh:150:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2406, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2408 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2409 = stdlib.lt(v2378, v2408);
  stdlib.assert(v2409, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2412 = stdlib.lt(v2379, v2408);
  stdlib.assert(v2412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:152:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2417 = stdlib.mul(v2398, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2418 = stdlib.div(stdlib.UInt_max, v2417);
  const v2419 = stdlib.lt(v2378, v2418);
  stdlib.assert(v2419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2421 = stdlib.add(v2379, v2374);
  const v2425 = stdlib.lt(v2421, v2418);
  stdlib.assert(v2425, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2428 = stdlib.mul(v2398, v2378);
  const v2430 = stdlib.mul(v2398, v2379);
  const v2431 = stdlib.mul(v2428, v2373);
  const v2432 = stdlib.div(v2431, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2433 = stdlib.mul(v2430, v2373);
  const v2434 = stdlib.div(v2433, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2435 = stdlib.add(v2430, v2434);
  const v2436 = stdlib.add(v2435, v2374);
  const v2437 = stdlib.add(v2428, v2432);
  
  const txn2 = await (ctc.sendrecv({
    args: [v2371, v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2388, v2428, v2430, v2432, v2434],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2381,
    onlyIf: true,
    out_tys: [],
    pay: [v2436, [[v2437, v2375]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2440, time: v2439, didSend: v491, from: v2438 } = txn2;
      
      const v2441 = stdlib.add(v2430, v2434);
      const v2442 = stdlib.add(v2441, v2374);
      const v2443 = stdlib.add(v2428, v2432);
      sim_r.txns.push({
        amt: v2442,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2446 = v2388[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
      const v2447 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
      const v2448 = stdlib.add(v2447, v2443);
      const v2451 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '1')];
      const v2452 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '2')];
      const v2453 = [v2448, v2451, v2452];
      const v2454 = stdlib.Array_set(v2388, stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0'), v2453);
      sim_r.txns.push({
        amt: v2443,
        kind: 'to',
        tok: v2375
        });
      await stdlib.simMapSet(sim_r, 0, v2371, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
      
      const v2472 = stdlib.add(v2434, v2374);
      const v2473 = v2472;
      const v2474 = v2376;
      const v2475 = stdlib.checkedBigNumberify('./index.rsh:287:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2476 = v2432;
      const v2477 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
      const v2478 = v2439;
      const v2484 = v2454;
      const v2485 = v2442;
      
      if (await (async () => {
        
        return true;})()) {
        const v2527 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v2528 = v2527[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2375
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
    tys: [ctc5, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2440, time: v2439, didSend: v491, from: v2438 } = txn2;
  const v2441 = stdlib.add(v2430, v2434);
  const v2442 = stdlib.add(v2441, v2374);
  const v2443 = stdlib.add(v2428, v2432);
  ;
  const v2446 = v2388[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
  const v2447 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
  const v2448 = stdlib.add(v2447, v2443);
  const v2451 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '1')];
  const v2452 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '2')];
  const v2453 = [v2448, v2451, v2452];
  const v2454 = stdlib.Array_set(v2388, stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0'), v2453);
  ;
  const v2455 = stdlib.addressEq(v2371, v2438);
  stdlib.assert(v2455, {
    at: './index.rsh:222:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  await stdlib.mapSet(map0, v2371, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:242:22:application',
    fs: ['at ./index.rsh:241:7:application call to [unknown function] (defined at: ./index.rsh:241:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v2472 = stdlib.add(v2434, v2374);
  let v2473 = v2472;
  let v2474 = v2376;
  let v2475 = stdlib.checkedBigNumberify('./index.rsh:287:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2476 = v2432;
  let v2477 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
  let v2478 = v2439;
  let v2484 = v2454;
  let v2485 = v2442;
  
  while (await (async () => {
    const v2522 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2523 = v2522[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2524 = stdlib.le(v2476, v2523);
    stdlib.assert(v2524, {
      at: './index.rsh:292:16:application',
      fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
      msg: null,
      who: 'Creator'
      });
    const v2526 = stdlib.le(v2473, v2485);
    stdlib.assert(v2526, {
      at: './index.rsh:293:16:application',
      fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
      msg: null,
      who: 'Creator'
      });
    
    return true;})()) {
    const v2527 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2528 = v2527[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2529 = stdlib.le(v2476, v2528);
    stdlib.assert(v2529, {
      at: './index.rsh:292:16:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v2531 = stdlib.le(v2473, v2485);
    stdlib.assert(v2531, {
      at: './index.rsh:293:16:application',
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
    const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn3;
    switch (v2656[0]) {
      case 'claim0_581': {
        const v2659 = v2656[1];
        undefined /* setApiDetails */;
        ;
        const v2727 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v2728 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v2729 = [v2528, v2727, v2728];
        const v2730 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v2729);
        ;
        const v2733 = stdlib.gt(v2657, v2474);
        const v2734 = v2733 ? v2657 : v2474;
        const v2735 = stdlib.lt(v2734, v2377);
        const v2736 = v2735 ? v2734 : v2377;
        const v2737 = stdlib.sub(v2736, v2474);
        const v2738 = stdlib.cast("UInt", "UInt256", v2737, false);
        const v2739 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v2740 = stdlib.mul256(v2739, v2738);
        const v2741 = stdlib.mul256(v2740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2742 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v2743 = stdlib.div256(v2741, v2742);
        const v2744 = stdlib.add256(v2475, v2743);
        const v2745 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v2747 = stdlib.cast("UInt", "UInt256", v2746, false);
        const v2748 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v2749 = stdlib.fromSome(v2748, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2750 = stdlib.sub256(v2744, v2749);
        const v2751 = stdlib.mul256(v2747, v2750);
        const v2752 = stdlib.div256(v2751, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2753 = stdlib.cast("UInt256", "UInt", v2752, false);
        const v2754 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v2755 = stdlib.fromSome(v2754, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v2756 = stdlib.add(v2753, v2755);
        await stdlib.mapSet(map1, v2655, v2756);
        await stdlib.mapSet(map3, v2655, v2744);
        const v2760 = stdlib.gt(v2734, v2377);
        const v2761 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
        const v2762 = stdlib.fromSome(v2761, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
        const v2763 = stdlib.add(v2762, v2380);
        const v2764 = stdlib.le(v2763, v2734);
        const v2765 = v2760 ? true : v2764;
        if (v2765) {
          const v2768 = stdlib.muldiv(v2756, v2430, v2428);
          await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:274:18:decimal', stdlib.UInt_max, '0'));
          const v2769 = v2730[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
          const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
          const v2771 = stdlib.le(v2756, v2770);
          const v2773 = stdlib.le(v2768, v2485);
          const v2774 = v2771 ? v2773 : false;
          stdlib.assert(v2774, {
            at: './index.rsh:277:12:application',
            fs: ['at ./index.rsh:427:68:application call to "claimRewards" (defined at: ./index.rsh:270:28:function exp)', 'at ./index.rsh:422:22:application call to [unknown function] (defined at: ./index.rsh:422:22:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2778 = stdlib.sub(v2485, v2768);
          ;
          const v2784 = stdlib.sub(v2770, v2756);
          const v2787 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '1')];
          const v2788 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '2')];
          const v2789 = [v2784, v2787, v2788];
          const v2790 = stdlib.Array_set(v2730, stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '0'), v2789);
          ;
          const v2791 = [v2756, v2768];
          await stdlib.mapSet(map2, v2655, v2736);
          const v2802 = {
            now: v2734,
            result: v2791
            };
          await txn3.getOutput('claim', 'v2802', ctc12, v2802);
          const cv2473 = v2473;
          const cv2474 = v2736;
          const cv2475 = v2744;
          const cv2476 = v2476;
          const cv2477 = v2477;
          const cv2478 = v2657;
          const cv2484 = v2790;
          const cv2485 = v2778;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        else {
          const v2823 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2824 = {
            now: v2734,
            result: v2823
            };
          await txn3.getOutput('claim', 'v2824', ctc12, v2824);
          const cv2473 = v2473;
          const cv2474 = v2736;
          const cv2475 = v2744;
          const cv2476 = v2476;
          const cv2477 = v2477;
          const cv2478 = v2657;
          const cv2484 = v2730;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        break;
        }
      case 'claimFees0_581': {
        const v3090 = v2656[1];
        undefined /* setApiDetails */;
        const v3102 = stdlib.addressEq(v2655, v2372);
        stdlib.assert(v3102, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:447:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:31:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'Creator'
          });
        ;
        const v3158 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v3159 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v3160 = [v2528, v3158, v3159];
        const v3161 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3160);
        ;
        const v3279 = stdlib.sub(v2485, v2473);
        ;
        const v3280 = v3161[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
        const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
        const v3285 = stdlib.sub(v3281, v2476);
        const v3288 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '1')];
        const v3289 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '2')];
        const v3290 = [v3285, v3288, v3289];
        const v3291 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0'), v3290);
        ;
        const v3293 = stdlib.gt(v2657, v2474);
        const v3294 = v3293 ? v2657 : v2474;
        const v3295 = [v2476, v2473];
        const v3296 = {
          now: v3294,
          result: v3295
          };
        await txn3.getOutput('claimFees', 'v3296', ctc12, v3296);
        const cv2473 = stdlib.checkedBigNumberify('./index.rsh:454:76:decimal', stdlib.UInt_max, '0');
        const cv2474 = v2474;
        const cv2475 = v2475;
        const cv2476 = stdlib.checkedBigNumberify('./index.rsh:454:73:decimal', stdlib.UInt_max, '0');
        const cv2477 = v2477;
        const cv2478 = v2657;
        const cv2484 = v3291;
        const cv2485 = v3279;
        
        v2473 = cv2473;
        v2474 = cv2474;
        v2475 = cv2475;
        v2476 = cv2476;
        v2477 = cv2477;
        v2478 = cv2478;
        v2484 = cv2484;
        v2485 = cv2485;
        
        continue;
        break;
        }
      case 'stake0_581': {
        const v3521 = v2656[1];
        undefined /* setApiDetails */;
        const v3542 = v3521[stdlib.checkedBigNumberify('./index.rsh:361:12:spread', stdlib.UInt_max, '0')];
        const v3543 = stdlib.add(v2477, v3542);
        const v3544 = stdlib.lt(v3543, stdlib.UInt_max);
        stdlib.assert(v3544, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:362:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:361:34:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'Creator'
          });
        ;
        const v3586 = stdlib.add(v2528, v3542);
        const v3589 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v3590 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v3591 = [v3586, v3589, v3590];
        const v3592 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3591);
        ;
        const v3747 = stdlib.gt(v2657, v2474);
        const v3748 = v3747 ? v2657 : v2474;
        const v3749 = stdlib.lt(v3748, v2377);
        const v3750 = v3749 ? v3748 : v2377;
        const v3751 = stdlib.sub(v3750, v2474);
        const v3752 = stdlib.cast("UInt", "UInt256", v3751, false);
        const v3753 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v3754 = stdlib.mul256(v3753, v3752);
        const v3755 = stdlib.mul256(v3754, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3756 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v3757 = stdlib.div256(v3755, v3756);
        const v3758 = stdlib.add256(v2475, v3757);
        const v3759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v3760 = stdlib.fromSome(v3759, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v3761 = stdlib.cast("UInt", "UInt256", v3760, false);
        const v3762 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v3763 = stdlib.fromSome(v3762, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3764 = stdlib.sub256(v3758, v3763);
        const v3765 = stdlib.mul256(v3761, v3764);
        const v3766 = stdlib.div256(v3765, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3767 = stdlib.cast("UInt256", "UInt", v3766, false);
        const v3768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v3769 = stdlib.fromSome(v3768, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v3770 = stdlib.add(v3767, v3769);
        await stdlib.mapSet(map1, v2655, v3770);
        await stdlib.mapSet(map3, v2655, v3758);
        const v3773 = stdlib.add(v3760, v3542);
        await stdlib.mapSet(map0, v2655, v3773);
        await stdlib.mapSet(map2, v2655, v3750);
        const v3783 = {
          now: v3748,
          result: v3542
          };
        await txn3.getOutput('stake', 'v3783', ctc13, v3783);
        const cv2473 = v2473;
        const cv2474 = v3750;
        const cv2475 = v3758;
        const cv2476 = v2476;
        const cv2477 = v3543;
        const cv2478 = v2657;
        const cv2484 = v3592;
        const cv2485 = v2485;
        
        v2473 = cv2473;
        v2474 = cv2474;
        v2475 = cv2475;
        v2476 = cv2476;
        v2477 = cv2477;
        v2478 = cv2478;
        v2484 = cv2484;
        v2485 = cv2485;
        
        continue;
        break;
        }
      case 'unstake0_581': {
        const v3952 = v2656[1];
        undefined /* setApiDetails */;
        const v3984 = v3952[stdlib.checkedBigNumberify('./index.rsh:383:12:spread', stdlib.UInt_max, '0')];
        const v3985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v3986 = stdlib.fromSome(v3985, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v3989 = stdlib.le(v3986, v2528);
        stdlib.assert(v3989, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v3991 = stdlib.lt(v3984, stdlib.UInt_max);
        stdlib.assert(v3991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:385:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'Creator'
          });
        const v3993 = stdlib.addressEq(v2655, v2372);
        const v3994 = v3993 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:387:63:decimal', stdlib.UInt_max, '0');
        const v3995 = stdlib.add(v3984, v3994);
        const v3998 = stdlib.le(v3995, v3986);
        stdlib.assert(v3998, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:386:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        ;
        const v4020 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v4021 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v4022 = [v2528, v4020, v4021];
        const v4023 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v4022);
        ;
        const v4235 = v4023[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
        const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
        const v4237 = stdlib.le(v3986, v4236);
        stdlib.assert(v4237, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:22:application call to [unknown function] (defined at: ./index.rsh:393:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v4250 = stdlib.gt(v2657, v2474);
        const v4251 = v4250 ? v2657 : v2474;
        const v4252 = stdlib.lt(v4251, v2377);
        const v4253 = v4252 ? v4251 : v2377;
        const v4254 = stdlib.sub(v4253, v2474);
        const v4255 = stdlib.cast("UInt", "UInt256", v4254, false);
        const v4256 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v4257 = stdlib.mul256(v4256, v4255);
        const v4258 = stdlib.mul256(v4257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4259 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v4260 = stdlib.div256(v4258, v4259);
        const v4261 = stdlib.add256(v2475, v4260);
        const v4264 = stdlib.cast("UInt", "UInt256", v3986, false);
        const v4265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v4266 = stdlib.fromSome(v4265, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4267 = stdlib.sub256(v4261, v4266);
        const v4268 = stdlib.mul256(v4264, v4267);
        const v4269 = stdlib.div256(v4268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4270 = stdlib.cast("UInt256", "UInt", v4269, false);
        const v4271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v4272 = stdlib.fromSome(v4271, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v4273 = stdlib.add(v4270, v4272);
        await stdlib.mapSet(map1, v2655, v4273);
        await stdlib.mapSet(map3, v2655, v4261);
        const v4277 = stdlib.gt(v4251, v2377);
        const v4278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
        const v4279 = stdlib.fromSome(v4278, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
        const v4280 = stdlib.add(v4279, v2380);
        const v4281 = stdlib.le(v4280, v4251);
        const v4282 = v4277 ? true : v4281;
        const v4285 = v4282 ? stdlib.checkedBigNumberify('./index.rsh:395:51:decimal', stdlib.UInt_max, '0') : v4273;
        const v4286 = stdlib.muldiv(v4285, v2430, v2428);
        if (v4282) {
          const v4342 = stdlib.sub(v3986, v3984);
          await stdlib.mapSet(map0, v2655, v4342);
          const v4348 = stdlib.sub(v4236, v3984);
          const v4351 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
          const v4352 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
          const v4353 = [v4348, v4351, v4352];
          const v4354 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4353);
          ;
          await stdlib.mapSet(map2, v2655, v4253);
          const v4364 = {
            now: v4251,
            result: v3984
            };
          await txn3.getOutput('unstake', 'v4364', ctc13, v4364);
          const v4374 = stdlib.sub(v2477, v3984);
          const v4380 = stdlib.add(v2476, v4285);
          const v4381 = stdlib.add(v2473, v4286);
          const cv2473 = v4381;
          const cv2474 = v4253;
          const cv2475 = v4261;
          const cv2476 = v4380;
          const cv2477 = v4374;
          const cv2478 = v2657;
          const cv2484 = v4354;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:400:31:decimal', stdlib.UInt_max, '0'));
          const v4299 = stdlib.sub(v3986, v3984);
          await stdlib.mapSet(map0, v2655, v4299);
          const v4305 = stdlib.sub(v4236, v3984);
          const v4308 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
          const v4309 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
          const v4310 = [v4305, v4308, v4309];
          const v4311 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4310);
          ;
          await stdlib.mapSet(map2, v2655, v4253);
          const v4321 = {
            now: v4251,
            result: v3984
            };
          await txn3.getOutput('unstake', 'v4321', ctc13, v4321);
          const v4331 = stdlib.sub(v2477, v3984);
          const v4337 = stdlib.add(v2476, v4285);
          const v4338 = stdlib.add(v2473, v4286);
          const cv2473 = v4338;
          const cv2474 = v4253;
          const cv2475 = v4261;
          const cv2476 = v4337;
          const cv2477 = v4331;
          const cv2478 = v2657;
          const cv2484 = v4311;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        break;
        }
      }
    
    }
  const v4383 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
  const v4384 = v4383[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
  const v4385 = stdlib.le(v2476, v4384);
  stdlib.assert(v4385, {
    at: './index.rsh:292:16:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v4387 = stdlib.le(v2473, v2485);
  stdlib.assert(v4387, {
    at: './index.rsh:293:16:application',
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
    claim0_581: ctc7,
    claimFees0_581: ctc7,
    stake0_581: ctc8,
    unstake0_581: ctc8
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
  
  
  const v2308 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2309 = [v2308];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 9,
    funcNum: 0,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380], secs: v2382, time: v2381, didSend: v263, from: v2371 } = txn1;
  const v2383 = v2309[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0')];
  const v2385 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '1')];
  const v2386 = v2383[stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '2')];
  const v2387 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2385, v2386];
  const v2388 = stdlib.Array_set(v2309, stdlib.checkedBigNumberify('./index.rsh:192:11:dot', stdlib.UInt_max, '0'), v2387);
  ;
  ;
  const v2391 = stdlib.mul(v2373, stdlib.checkedBigNumberify('./index.rsh:134:25:decimal', stdlib.UInt_max, '5'));
  const v2392 = stdlib.le(v2391, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2392, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'User'
    });
  const v2394 = stdlib.le(v2374, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2394, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'User'
    });
  const v2396 = stdlib.lt(v2376, v2377);
  stdlib.assert(v2396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:141:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2398 = stdlib.sub(v2377, v2376);
  const v2399 = stdlib.lt(v2398, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2399, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:143:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2401 = stdlib.lt(v2380, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2404 = stdlib.le(v2380, v2398);
  stdlib.assert(v2404, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2406 = stdlib.gt(v2378, stdlib.checkedBigNumberify('./index.rsh:150:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2406, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2408 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2409 = stdlib.lt(v2378, v2408);
  stdlib.assert(v2409, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2412 = stdlib.lt(v2379, v2408);
  stdlib.assert(v2412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:152:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2417 = stdlib.mul(v2398, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2418 = stdlib.div(stdlib.UInt_max, v2417);
  const v2419 = stdlib.lt(v2378, v2418);
  stdlib.assert(v2419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2421 = stdlib.add(v2379, v2374);
  const v2425 = stdlib.lt(v2421, v2418);
  stdlib.assert(v2425, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:16:application call to "initialChecks" (defined at: ./index.rsh:133:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2428 = stdlib.mul(v2398, v2378);
  const v2430 = stdlib.mul(v2398, v2379);
  const v2431 = stdlib.mul(v2428, v2373);
  const v2432 = stdlib.div(v2431, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2433 = stdlib.mul(v2430, v2373);
  const v2434 = stdlib.div(v2433, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2440, time: v2439, didSend: v491, from: v2438 } = txn2;
  const v2441 = stdlib.add(v2430, v2434);
  const v2442 = stdlib.add(v2441, v2374);
  const v2443 = stdlib.add(v2428, v2432);
  ;
  const v2446 = v2388[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
  const v2447 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0')];
  const v2448 = stdlib.add(v2447, v2443);
  const v2451 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '1')];
  const v2452 = v2446[stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '2')];
  const v2453 = [v2448, v2451, v2452];
  const v2454 = stdlib.Array_set(v2388, stdlib.checkedBigNumberify('./index.rsh:222:11:dot', stdlib.UInt_max, '0'), v2453);
  ;
  const v2455 = stdlib.addressEq(v2371, v2438);
  stdlib.assert(v2455, {
    at: './index.rsh:222:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  await stdlib.mapSet(map0, v2371, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:242:22:application',
    fs: ['at ./index.rsh:241:7:application call to [unknown function] (defined at: ./index.rsh:241:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v2472 = stdlib.add(v2434, v2374);
  let v2473 = v2472;
  let v2474 = v2376;
  let v2475 = stdlib.checkedBigNumberify('./index.rsh:287:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2476 = v2432;
  let v2477 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
  let v2478 = v2439;
  let v2484 = v2454;
  let v2485 = v2442;
  
  while (await (async () => {
    const v2522 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2523 = v2522[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2524 = stdlib.le(v2476, v2523);
    stdlib.assert(v2524, {
      at: './index.rsh:292:16:application',
      fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
      msg: null,
      who: 'User'
      });
    const v2526 = stdlib.le(v2473, v2485);
    stdlib.assert(v2526, {
      at: './index.rsh:293:16:application',
      fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
      msg: null,
      who: 'User'
      });
    
    return true;})()) {
    const v2527 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2528 = v2527[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
    const v2529 = stdlib.le(v2476, v2528);
    stdlib.assert(v2529, {
      at: './index.rsh:292:16:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const v2531 = stdlib.le(v2473, v2485);
    stdlib.assert(v2531, {
      at: './index.rsh:293:16:application',
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
    const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn3;
    switch (v2656[0]) {
      case 'claim0_581': {
        const v2659 = v2656[1];
        undefined /* setApiDetails */;
        ;
        const v2727 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v2728 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v2729 = [v2528, v2727, v2728];
        const v2730 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v2729);
        ;
        const v2733 = stdlib.gt(v2657, v2474);
        const v2734 = v2733 ? v2657 : v2474;
        const v2735 = stdlib.lt(v2734, v2377);
        const v2736 = v2735 ? v2734 : v2377;
        const v2737 = stdlib.sub(v2736, v2474);
        const v2738 = stdlib.cast("UInt", "UInt256", v2737, false);
        const v2739 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v2740 = stdlib.mul256(v2739, v2738);
        const v2741 = stdlib.mul256(v2740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2742 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v2743 = stdlib.div256(v2741, v2742);
        const v2744 = stdlib.add256(v2475, v2743);
        const v2745 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v2747 = stdlib.cast("UInt", "UInt256", v2746, false);
        const v2748 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v2749 = stdlib.fromSome(v2748, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2750 = stdlib.sub256(v2744, v2749);
        const v2751 = stdlib.mul256(v2747, v2750);
        const v2752 = stdlib.div256(v2751, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2753 = stdlib.cast("UInt256", "UInt", v2752, false);
        const v2754 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v2755 = stdlib.fromSome(v2754, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v2756 = stdlib.add(v2753, v2755);
        await stdlib.mapSet(map1, v2655, v2756);
        await stdlib.mapSet(map3, v2655, v2744);
        const v2760 = stdlib.gt(v2734, v2377);
        const v2761 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
        const v2762 = stdlib.fromSome(v2761, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
        const v2763 = stdlib.add(v2762, v2380);
        const v2764 = stdlib.le(v2763, v2734);
        const v2765 = v2760 ? true : v2764;
        if (v2765) {
          const v2768 = stdlib.muldiv(v2756, v2430, v2428);
          await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:274:18:decimal', stdlib.UInt_max, '0'));
          const v2769 = v2730[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
          const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
          const v2771 = stdlib.le(v2756, v2770);
          const v2773 = stdlib.le(v2768, v2485);
          const v2774 = v2771 ? v2773 : false;
          stdlib.assert(v2774, {
            at: './index.rsh:277:12:application',
            fs: ['at ./index.rsh:427:68:application call to "claimRewards" (defined at: ./index.rsh:270:28:function exp)', 'at ./index.rsh:422:22:application call to [unknown function] (defined at: ./index.rsh:422:22:function exp)'],
            msg: null,
            who: 'User'
            });
          const v2778 = stdlib.sub(v2485, v2768);
          ;
          const v2784 = stdlib.sub(v2770, v2756);
          const v2787 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '1')];
          const v2788 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '2')];
          const v2789 = [v2784, v2787, v2788];
          const v2790 = stdlib.Array_set(v2730, stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '0'), v2789);
          ;
          const v2791 = [v2756, v2768];
          await stdlib.mapSet(map2, v2655, v2736);
          const v2802 = {
            now: v2734,
            result: v2791
            };
          await txn3.getOutput('claim', 'v2802', ctc11, v2802);
          const cv2473 = v2473;
          const cv2474 = v2736;
          const cv2475 = v2744;
          const cv2476 = v2476;
          const cv2477 = v2477;
          const cv2478 = v2657;
          const cv2484 = v2790;
          const cv2485 = v2778;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        else {
          const v2823 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2824 = {
            now: v2734,
            result: v2823
            };
          await txn3.getOutput('claim', 'v2824', ctc11, v2824);
          const cv2473 = v2473;
          const cv2474 = v2736;
          const cv2475 = v2744;
          const cv2476 = v2476;
          const cv2477 = v2477;
          const cv2478 = v2657;
          const cv2484 = v2730;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        break;
        }
      case 'claimFees0_581': {
        const v3090 = v2656[1];
        undefined /* setApiDetails */;
        const v3102 = stdlib.addressEq(v2655, v2372);
        stdlib.assert(v3102, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:447:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:31:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'User'
          });
        ;
        const v3158 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v3159 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v3160 = [v2528, v3158, v3159];
        const v3161 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3160);
        ;
        const v3279 = stdlib.sub(v2485, v2473);
        ;
        const v3280 = v3161[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
        const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
        const v3285 = stdlib.sub(v3281, v2476);
        const v3288 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '1')];
        const v3289 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '2')];
        const v3290 = [v3285, v3288, v3289];
        const v3291 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0'), v3290);
        ;
        const v3293 = stdlib.gt(v2657, v2474);
        const v3294 = v3293 ? v2657 : v2474;
        const v3295 = [v2476, v2473];
        const v3296 = {
          now: v3294,
          result: v3295
          };
        await txn3.getOutput('claimFees', 'v3296', ctc11, v3296);
        const cv2473 = stdlib.checkedBigNumberify('./index.rsh:454:76:decimal', stdlib.UInt_max, '0');
        const cv2474 = v2474;
        const cv2475 = v2475;
        const cv2476 = stdlib.checkedBigNumberify('./index.rsh:454:73:decimal', stdlib.UInt_max, '0');
        const cv2477 = v2477;
        const cv2478 = v2657;
        const cv2484 = v3291;
        const cv2485 = v3279;
        
        v2473 = cv2473;
        v2474 = cv2474;
        v2475 = cv2475;
        v2476 = cv2476;
        v2477 = cv2477;
        v2478 = cv2478;
        v2484 = cv2484;
        v2485 = cv2485;
        
        continue;
        break;
        }
      case 'stake0_581': {
        const v3521 = v2656[1];
        undefined /* setApiDetails */;
        const v3542 = v3521[stdlib.checkedBigNumberify('./index.rsh:361:12:spread', stdlib.UInt_max, '0')];
        const v3543 = stdlib.add(v2477, v3542);
        const v3544 = stdlib.lt(v3543, stdlib.UInt_max);
        stdlib.assert(v3544, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:362:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:361:34:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'User'
          });
        ;
        const v3586 = stdlib.add(v2528, v3542);
        const v3589 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v3590 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v3591 = [v3586, v3589, v3590];
        const v3592 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3591);
        ;
        const v3747 = stdlib.gt(v2657, v2474);
        const v3748 = v3747 ? v2657 : v2474;
        const v3749 = stdlib.lt(v3748, v2377);
        const v3750 = v3749 ? v3748 : v2377;
        const v3751 = stdlib.sub(v3750, v2474);
        const v3752 = stdlib.cast("UInt", "UInt256", v3751, false);
        const v3753 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v3754 = stdlib.mul256(v3753, v3752);
        const v3755 = stdlib.mul256(v3754, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3756 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v3757 = stdlib.div256(v3755, v3756);
        const v3758 = stdlib.add256(v2475, v3757);
        const v3759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v3760 = stdlib.fromSome(v3759, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v3761 = stdlib.cast("UInt", "UInt256", v3760, false);
        const v3762 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v3763 = stdlib.fromSome(v3762, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3764 = stdlib.sub256(v3758, v3763);
        const v3765 = stdlib.mul256(v3761, v3764);
        const v3766 = stdlib.div256(v3765, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3767 = stdlib.cast("UInt256", "UInt", v3766, false);
        const v3768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v3769 = stdlib.fromSome(v3768, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v3770 = stdlib.add(v3767, v3769);
        await stdlib.mapSet(map1, v2655, v3770);
        await stdlib.mapSet(map3, v2655, v3758);
        const v3773 = stdlib.add(v3760, v3542);
        await stdlib.mapSet(map0, v2655, v3773);
        await stdlib.mapSet(map2, v2655, v3750);
        const v3783 = {
          now: v3748,
          result: v3542
          };
        await txn3.getOutput('stake', 'v3783', ctc12, v3783);
        const cv2473 = v2473;
        const cv2474 = v3750;
        const cv2475 = v3758;
        const cv2476 = v2476;
        const cv2477 = v3543;
        const cv2478 = v2657;
        const cv2484 = v3592;
        const cv2485 = v2485;
        
        v2473 = cv2473;
        v2474 = cv2474;
        v2475 = cv2475;
        v2476 = cv2476;
        v2477 = cv2477;
        v2478 = cv2478;
        v2484 = cv2484;
        v2485 = cv2485;
        
        continue;
        break;
        }
      case 'unstake0_581': {
        const v3952 = v2656[1];
        undefined /* setApiDetails */;
        const v3984 = v3952[stdlib.checkedBigNumberify('./index.rsh:383:12:spread', stdlib.UInt_max, '0')];
        const v3985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
        const v3986 = stdlib.fromSome(v3985, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
        const v3989 = stdlib.le(v3986, v2528);
        stdlib.assert(v3989, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: null,
          who: 'User'
          });
        const v3991 = stdlib.lt(v3984, stdlib.UInt_max);
        stdlib.assert(v3991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:385:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'User'
          });
        const v3993 = stdlib.addressEq(v2655, v2372);
        const v3994 = v3993 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:387:63:decimal', stdlib.UInt_max, '0');
        const v3995 = stdlib.add(v3984, v3994);
        const v3998 = stdlib.le(v3995, v3986);
        stdlib.assert(v3998, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:386:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        ;
        const v4020 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
        const v4021 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
        const v4022 = [v2528, v4020, v4021];
        const v4023 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v4022);
        ;
        const v4235 = v4023[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
        const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
        const v4237 = stdlib.le(v3986, v4236);
        stdlib.assert(v4237, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:22:application call to [unknown function] (defined at: ./index.rsh:393:22:function exp)'],
          msg: null,
          who: 'User'
          });
        const v4250 = stdlib.gt(v2657, v2474);
        const v4251 = v4250 ? v2657 : v2474;
        const v4252 = stdlib.lt(v4251, v2377);
        const v4253 = v4252 ? v4251 : v2377;
        const v4254 = stdlib.sub(v4253, v2474);
        const v4255 = stdlib.cast("UInt", "UInt256", v4254, false);
        const v4256 = stdlib.cast("UInt", "UInt256", v2378, false);
        const v4257 = stdlib.mul256(v4256, v4255);
        const v4258 = stdlib.mul256(v4257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4259 = stdlib.cast("UInt", "UInt256", v2477, false);
        const v4260 = stdlib.div256(v4258, v4259);
        const v4261 = stdlib.add256(v2475, v4260);
        const v4264 = stdlib.cast("UInt", "UInt256", v3986, false);
        const v4265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
        const v4266 = stdlib.fromSome(v4265, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4267 = stdlib.sub256(v4261, v4266);
        const v4268 = stdlib.mul256(v4264, v4267);
        const v4269 = stdlib.div256(v4268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4270 = stdlib.cast("UInt256", "UInt", v4269, false);
        const v4271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
        const v4272 = stdlib.fromSome(v4271, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
        const v4273 = stdlib.add(v4270, v4272);
        await stdlib.mapSet(map1, v2655, v4273);
        await stdlib.mapSet(map3, v2655, v4261);
        const v4277 = stdlib.gt(v4251, v2377);
        const v4278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
        const v4279 = stdlib.fromSome(v4278, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
        const v4280 = stdlib.add(v4279, v2380);
        const v4281 = stdlib.le(v4280, v4251);
        const v4282 = v4277 ? true : v4281;
        const v4285 = v4282 ? stdlib.checkedBigNumberify('./index.rsh:395:51:decimal', stdlib.UInt_max, '0') : v4273;
        const v4286 = stdlib.muldiv(v4285, v2430, v2428);
        if (v4282) {
          const v4342 = stdlib.sub(v3986, v3984);
          await stdlib.mapSet(map0, v2655, v4342);
          const v4348 = stdlib.sub(v4236, v3984);
          const v4351 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
          const v4352 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
          const v4353 = [v4348, v4351, v4352];
          const v4354 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4353);
          ;
          await stdlib.mapSet(map2, v2655, v4253);
          const v4364 = {
            now: v4251,
            result: v3984
            };
          await txn3.getOutput('unstake', 'v4364', ctc12, v4364);
          const v4374 = stdlib.sub(v2477, v3984);
          const v4380 = stdlib.add(v2476, v4285);
          const v4381 = stdlib.add(v2473, v4286);
          const cv2473 = v4381;
          const cv2474 = v4253;
          const cv2475 = v4261;
          const cv2476 = v4380;
          const cv2477 = v4374;
          const cv2478 = v2657;
          const cv2484 = v4354;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:400:31:decimal', stdlib.UInt_max, '0'));
          const v4299 = stdlib.sub(v3986, v3984);
          await stdlib.mapSet(map0, v2655, v4299);
          const v4305 = stdlib.sub(v4236, v3984);
          const v4308 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
          const v4309 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
          const v4310 = [v4305, v4308, v4309];
          const v4311 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4310);
          ;
          await stdlib.mapSet(map2, v2655, v4253);
          const v4321 = {
            now: v4251,
            result: v3984
            };
          await txn3.getOutput('unstake', 'v4321', ctc12, v4321);
          const v4331 = stdlib.sub(v2477, v3984);
          const v4337 = stdlib.add(v2476, v4285);
          const v4338 = stdlib.add(v2473, v4286);
          const cv2473 = v4338;
          const cv2474 = v4253;
          const cv2475 = v4261;
          const cv2476 = v4337;
          const cv2477 = v4331;
          const cv2478 = v2657;
          const cv2484 = v4311;
          const cv2485 = v2485;
          
          v2473 = cv2473;
          v2474 = cv2474;
          v2475 = cv2475;
          v2476 = cv2476;
          v2477 = cv2477;
          v2478 = cv2478;
          v2484 = cv2484;
          v2485 = cv2485;
          
          continue;}
        break;
        }
      }
    
    }
  const v4383 = v2484[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
  const v4384 = v4383[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
  const v4385 = stdlib.le(v2476, v4384);
  stdlib.assert(v4385, {
    at: './index.rsh:292:16:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const v4387 = stdlib.le(v2473, v2485);
  stdlib.assert(v4387, {
    at: './index.rsh:293:16:application',
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_581: ctc10,
    claimFees0_581: ctc10,
    stake0_581: ctc11,
    unstake0_581: ctc11
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
  
  
  const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2577 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:419:27:application call to [unknown function] (defined at: ./index.rsh:419:27:function exp)', 'at ./index.rsh:284:19:application call to "runclaim0_581" (defined at: ./index.rsh:419:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v2581 = ['claim0_581', v2577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528, v2581],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:421:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:421:16:decimal', stdlib.UInt_max, '0'), v2375]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
      
      switch (v2656[0]) {
        case 'claim0_581': {
          const v2659 = v2656[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v2727 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
          const v2728 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
          const v2729 = [v2528, v2727, v2728];
          const v2730 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v2729);
          ;
          const v2733 = stdlib.gt(v2657, v2474);
          const v2734 = v2733 ? v2657 : v2474;
          const v2735 = stdlib.lt(v2734, v2377);
          const v2736 = v2735 ? v2734 : v2377;
          const v2737 = stdlib.sub(v2736, v2474);
          const v2738 = stdlib.cast("UInt", "UInt256", v2737, false);
          const v2739 = stdlib.cast("UInt", "UInt256", v2378, false);
          const v2740 = stdlib.mul256(v2739, v2738);
          const v2741 = stdlib.mul256(v2740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2742 = stdlib.cast("UInt", "UInt256", v2477, false);
          const v2743 = stdlib.div256(v2741, v2742);
          const v2744 = stdlib.add256(v2475, v2743);
          const v2745 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2655), null);
          const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
          const v2747 = stdlib.cast("UInt", "UInt256", v2746, false);
          const v2748 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2655), null);
          const v2749 = stdlib.fromSome(v2748, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2750 = stdlib.sub256(v2744, v2749);
          const v2751 = stdlib.mul256(v2747, v2750);
          const v2752 = stdlib.div256(v2751, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2753 = stdlib.cast("UInt256", "UInt", v2752, false);
          const v2754 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2655), null);
          const v2755 = stdlib.fromSome(v2754, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
          const v2756 = stdlib.add(v2753, v2755);
          await stdlib.simMapSet(sim_r, 1, v2655, v2756);
          await stdlib.simMapSet(sim_r, 3, v2655, v2744);
          const v2760 = stdlib.gt(v2734, v2377);
          const v2761 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2655), null);
          const v2762 = stdlib.fromSome(v2761, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
          const v2763 = stdlib.add(v2762, v2380);
          const v2764 = stdlib.le(v2763, v2734);
          const v2765 = v2760 ? true : v2764;
          if (v2765) {
            const v2768 = stdlib.muldiv(v2756, v2430, v2428);
            await stdlib.simMapSet(sim_r, 1, v2655, stdlib.checkedBigNumberify('./index.rsh:274:18:decimal', stdlib.UInt_max, '0'));
            const v2769 = v2730[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
            const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
            const v2778 = stdlib.sub(v2485, v2768);
            sim_r.txns.push({
              kind: 'from',
              to: v2655,
              tok: undefined /* Nothing */
              });
            const v2784 = stdlib.sub(v2770, v2756);
            const v2787 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '1')];
            const v2788 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '2')];
            const v2789 = [v2784, v2787, v2788];
            const v2790 = stdlib.Array_set(v2730, stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '0'), v2789);
            sim_r.txns.push({
              kind: 'from',
              to: v2655,
              tok: v2375
              });
            const v2791 = [v2756, v2768];
            await stdlib.simMapSet(sim_r, 2, v2655, v2736);
            const v2802 = {
              now: v2734,
              result: v2791
              };
            const v2805 = await txn1.getOutput('claim', 'v2802', ctc14, v2802);
            
            const v7704 = v2473;
            const v7705 = v2736;
            const v7706 = v2744;
            const v7707 = v2476;
            const v7708 = v2477;
            const v7710 = v2790;
            const v7711 = v2778;
            sim_r.isHalt = false;
            }
          else {
            const v2823 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v2824 = {
              now: v2734,
              result: v2823
              };
            const v2827 = await txn1.getOutput('claim', 'v2824', ctc14, v2824);
            
            const v7724 = v2473;
            const v7725 = v2736;
            const v7726 = v2744;
            const v7727 = v2476;
            const v7728 = v2477;
            const v7730 = v2730;
            const v7731 = v2485;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'claimFees0_581': {
          const v3090 = v2656[1];
          
          break;
          }
        case 'stake0_581': {
          const v3521 = v2656[1];
          
          break;
          }
        case 'unstake0_581': {
          const v3952 = v2656[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
  switch (v2656[0]) {
    case 'claim0_581': {
      const v2659 = v2656[1];
      undefined /* setApiDetails */;
      ;
      const v2727 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
      const v2728 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
      const v2729 = [v2528, v2727, v2728];
      const v2730 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v2729);
      ;
      const v2733 = stdlib.gt(v2657, v2474);
      const v2734 = v2733 ? v2657 : v2474;
      const v2735 = stdlib.lt(v2734, v2377);
      const v2736 = v2735 ? v2734 : v2377;
      const v2737 = stdlib.sub(v2736, v2474);
      const v2738 = stdlib.cast("UInt", "UInt256", v2737, false);
      const v2739 = stdlib.cast("UInt", "UInt256", v2378, false);
      const v2740 = stdlib.mul256(v2739, v2738);
      const v2741 = stdlib.mul256(v2740, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2742 = stdlib.cast("UInt", "UInt256", v2477, false);
      const v2743 = stdlib.div256(v2741, v2742);
      const v2744 = stdlib.add256(v2475, v2743);
      const v2745 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
      const v2746 = stdlib.fromSome(v2745, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
      const v2747 = stdlib.cast("UInt", "UInt256", v2746, false);
      const v2748 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
      const v2749 = stdlib.fromSome(v2748, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2750 = stdlib.sub256(v2744, v2749);
      const v2751 = stdlib.mul256(v2747, v2750);
      const v2752 = stdlib.div256(v2751, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2753 = stdlib.cast("UInt256", "UInt", v2752, false);
      const v2754 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
      const v2755 = stdlib.fromSome(v2754, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
      const v2756 = stdlib.add(v2753, v2755);
      await stdlib.mapSet(map1, v2655, v2756);
      await stdlib.mapSet(map3, v2655, v2744);
      const v2760 = stdlib.gt(v2734, v2377);
      const v2761 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
      const v2762 = stdlib.fromSome(v2761, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
      const v2763 = stdlib.add(v2762, v2380);
      const v2764 = stdlib.le(v2763, v2734);
      const v2765 = v2760 ? true : v2764;
      if (v2765) {
        const v2768 = stdlib.muldiv(v2756, v2430, v2428);
        await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:274:18:decimal', stdlib.UInt_max, '0'));
        const v2769 = v2730[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
        const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:277:37:application', stdlib.UInt_max, '0')];
        const v2771 = stdlib.le(v2756, v2770);
        const v2773 = stdlib.le(v2768, v2485);
        const v2774 = v2771 ? v2773 : false;
        stdlib.assert(v2774, {
          at: './index.rsh:277:12:application',
          fs: ['at ./index.rsh:427:68:application call to "claimRewards" (defined at: ./index.rsh:270:28:function exp)', 'at ./index.rsh:422:22:application call to [unknown function] (defined at: ./index.rsh:422:22:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v2778 = stdlib.sub(v2485, v2768);
        ;
        const v2784 = stdlib.sub(v2770, v2756);
        const v2787 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '1')];
        const v2788 = v2769[stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '2')];
        const v2789 = [v2784, v2787, v2788];
        const v2790 = stdlib.Array_set(v2730, stdlib.checkedBigNumberify('./index.rsh:278:59:application', stdlib.UInt_max, '0'), v2789);
        ;
        const v2791 = [v2756, v2768];
        await stdlib.mapSet(map2, v2655, v2736);
        const v2802 = {
          now: v2734,
          result: v2791
          };
        const v2805 = await txn1.getOutput('claim', 'v2802', ctc14, v2802);
        if (v1668) {
          stdlib.protect(ctc0, await interact.out(v2659, v2805), {
            at: './index.rsh:419:13:application',
            fs: ['at ./index.rsh:419:13:application call to [unknown function] (defined at: ./index.rsh:419:13:function exp)', 'at ./index.rsh:429:23:application call to "callback" (defined at: ./index.rsh:422:22:function exp)', 'at ./index.rsh:422:22:application call to [unknown function] (defined at: ./index.rsh:422:22:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v7704 = v2473;
        const v7705 = v2736;
        const v7706 = v2744;
        const v7707 = v2476;
        const v7708 = v2477;
        const v7710 = v2790;
        const v7711 = v2778;
        const v7712 = v2790[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v7713 = v7712[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v7714 = stdlib.le(v2476, v7713);
        stdlib.assert(v7714, {
          at: './index.rsh:292:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v7715 = stdlib.le(v2473, v2778);
        stdlib.assert(v7715, {
          at: './index.rsh:293:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      else {
        const v2823 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2824 = {
          now: v2734,
          result: v2823
          };
        const v2827 = await txn1.getOutput('claim', 'v2824', ctc14, v2824);
        if (v1668) {
          stdlib.protect(ctc0, await interact.out(v2659, v2827), {
            at: './index.rsh:419:13:application',
            fs: ['at ./index.rsh:419:13:application call to [unknown function] (defined at: ./index.rsh:419:13:function exp)', 'at ./index.rsh:433:23:application call to "callback" (defined at: ./index.rsh:422:22:function exp)', 'at ./index.rsh:422:22:application call to [unknown function] (defined at: ./index.rsh:422:22:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v7724 = v2473;
        const v7725 = v2736;
        const v7726 = v2744;
        const v7727 = v2476;
        const v7728 = v2477;
        const v7730 = v2730;
        const v7731 = v2485;
        const v7732 = v2730[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v7733 = v7732[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v7734 = stdlib.le(v2476, v7733);
        stdlib.assert(v7734, {
          at: './index.rsh:292:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v7735 = stdlib.le(v2473, v2485);
        stdlib.assert(v7735, {
          at: './index.rsh:293:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      break;
      }
    case 'claimFees0_581': {
      const v3090 = v2656[1];
      return;
      break;
      }
    case 'stake0_581': {
      const v3521 = v2656[1];
      return;
      break;
      }
    case 'unstake0_581': {
      const v3952 = v2656[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_581: ctc10,
    claimFees0_581: ctc10,
    stake0_581: ctc11,
    unstake0_581: ctc11
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
  
  
  const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2583 = ctc.selfAddress();
  const v2585 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:446:31:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to "runclaimFees0_581" (defined at: ./index.rsh:446:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'in',
    who: 'claimFees'
    });
  const v2586 = stdlib.addressEq(v2583, v2372);
  stdlib.assert(v2586, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:447:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:31:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to "runclaimFees0_581" (defined at: ./index.rsh:446:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'only beneficiary can claim creation fees',
    who: 'claimFees'
    });
  const v2591 = ['claimFees0_581', v2585];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528, v2591],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:450:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:450:16:decimal', stdlib.UInt_max, '0'), v2375]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
      
      switch (v2656[0]) {
        case 'claim0_581': {
          const v2659 = v2656[1];
          
          break;
          }
        case 'claimFees0_581': {
          const v3090 = v2656[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimFees"
            });
          ;
          const v3158 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
          const v3159 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
          const v3160 = [v2528, v3158, v3159];
          const v3161 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3160);
          ;
          const v3279 = stdlib.sub(v2485, v2473);
          sim_r.txns.push({
            kind: 'from',
            to: v2372,
            tok: undefined /* Nothing */
            });
          const v3280 = v3161[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
          const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
          const v3285 = stdlib.sub(v3281, v2476);
          const v3288 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '1')];
          const v3289 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '2')];
          const v3290 = [v3285, v3288, v3289];
          const v3291 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0'), v3290);
          sim_r.txns.push({
            kind: 'from',
            to: v2372,
            tok: v2375
            });
          const v3293 = stdlib.gt(v2657, v2474);
          const v3294 = v3293 ? v2657 : v2474;
          const v3295 = [v2476, v2473];
          const v3296 = {
            now: v3294,
            result: v3295
            };
          const v3299 = await txn1.getOutput('claimFees', 'v3296', ctc14, v3296);
          
          const v7864 = stdlib.checkedBigNumberify('./index.rsh:454:76:decimal', stdlib.UInt_max, '0');
          const v7865 = v2474;
          const v7866 = v2475;
          const v7867 = stdlib.checkedBigNumberify('./index.rsh:454:73:decimal', stdlib.UInt_max, '0');
          const v7868 = v2477;
          const v7870 = v3291;
          const v7871 = v3279;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_581': {
          const v3521 = v2656[1];
          
          break;
          }
        case 'unstake0_581': {
          const v3952 = v2656[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
  switch (v2656[0]) {
    case 'claim0_581': {
      const v2659 = v2656[1];
      return;
      break;
      }
    case 'claimFees0_581': {
      const v3090 = v2656[1];
      undefined /* setApiDetails */;
      const v3102 = stdlib.addressEq(v2655, v2372);
      stdlib.assert(v3102, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:447:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:31:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:446:31:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
        msg: 'only beneficiary can claim creation fees',
        who: 'claimFees'
        });
      ;
      const v3158 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
      const v3159 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
      const v3160 = [v2528, v3158, v3159];
      const v3161 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3160);
      ;
      const v3279 = stdlib.sub(v2485, v2473);
      ;
      const v3280 = v3161[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
      const v3281 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0')];
      const v3285 = stdlib.sub(v3281, v2476);
      const v3288 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '1')];
      const v3289 = v3280[stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '2')];
      const v3290 = [v3285, v3288, v3289];
      const v3291 = stdlib.Array_set(v3161, stdlib.checkedBigNumberify('./index.rsh:452:62:application', stdlib.UInt_max, '0'), v3290);
      ;
      const v3293 = stdlib.gt(v2657, v2474);
      const v3294 = v3293 ? v2657 : v2474;
      const v3295 = [v2476, v2473];
      const v3296 = {
        now: v3294,
        result: v3295
        };
      const v3299 = await txn1.getOutput('claimFees', 'v3296', ctc14, v3296);
      if (v1668) {
        stdlib.protect(ctc0, await interact.out(v3090, v3299), {
          at: './index.rsh:446:13:application',
          fs: ['at ./index.rsh:446:13:application call to [unknown function] (defined at: ./index.rsh:446:13:function exp)', 'at ./index.rsh:453:21:application call to "callback" (defined at: ./index.rsh:451:22:function exp)', 'at ./index.rsh:451:22:application call to [unknown function] (defined at: ./index.rsh:451:22:function exp)'],
          msg: 'out',
          who: 'claimFees'
          });
        }
      else {
        }
      
      const v7864 = stdlib.checkedBigNumberify('./index.rsh:454:76:decimal', stdlib.UInt_max, '0');
      const v7865 = v2474;
      const v7866 = v2475;
      const v7867 = stdlib.checkedBigNumberify('./index.rsh:454:73:decimal', stdlib.UInt_max, '0');
      const v7868 = v2477;
      const v7870 = v3291;
      const v7871 = v3279;
      const v7872 = v3291[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
      const v7873 = v7872[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
      const v7874 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:454:73:decimal', stdlib.UInt_max, '0'), v7873);
      stdlib.assert(v7874, {
        at: './index.rsh:292:16:application',
        fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      const v7875 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:454:76:decimal', stdlib.UInt_max, '0'), v3279);
      stdlib.assert(v7875, {
        at: './index.rsh:293:16:application',
        fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      return;
      
      break;
      }
    case 'stake0_581': {
      const v3521 = v2656[1];
      return;
      break;
      }
    case 'unstake0_581': {
      const v3952 = v2656[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_581: ctc11,
    claimFees0_581: ctc11,
    stake0_581: ctc10,
    unstake0_581: ctc10
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
  
  
  const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2535 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:361:34:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to "runstake0_581" (defined at: ./index.rsh:361:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v2536 = v2535[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2538 = stdlib.add(v2477, v2536);
  const v2539 = stdlib.lt(v2538, stdlib.UInt_max);
  stdlib.assert(v2539, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:362:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:361:34:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to "runstake0_581" (defined at: ./index.rsh:361:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'maximum stakes has been reached',
    who: 'stake'
    });
  const v2546 = ['stake0_581', v2535];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528, v2546],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:365:12:decimal', stdlib.UInt_max, '0'), [[v2536, v2375]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
      
      switch (v2656[0]) {
        case 'claim0_581': {
          const v2659 = v2656[1];
          
          break;
          }
        case 'claimFees0_581': {
          const v3090 = v2656[1];
          
          break;
          }
        case 'stake0_581': {
          const v3521 = v2656[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v3542 = v3521[stdlib.checkedBigNumberify('./index.rsh:361:12:spread', stdlib.UInt_max, '0')];
          const v3543 = stdlib.add(v2477, v3542);
          ;
          const v3586 = stdlib.add(v2528, v3542);
          const v3589 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
          const v3590 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
          const v3591 = [v3586, v3589, v3590];
          const v3592 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3591);
          sim_r.txns.push({
            amt: v3542,
            kind: 'to',
            tok: v2375
            });
          const v3747 = stdlib.gt(v2657, v2474);
          const v3748 = v3747 ? v2657 : v2474;
          const v3749 = stdlib.lt(v3748, v2377);
          const v3750 = v3749 ? v3748 : v2377;
          const v3751 = stdlib.sub(v3750, v2474);
          const v3752 = stdlib.cast("UInt", "UInt256", v3751, false);
          const v3753 = stdlib.cast("UInt", "UInt256", v2378, false);
          const v3754 = stdlib.mul256(v3753, v3752);
          const v3755 = stdlib.mul256(v3754, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3756 = stdlib.cast("UInt", "UInt256", v2477, false);
          const v3757 = stdlib.div256(v3755, v3756);
          const v3758 = stdlib.add256(v2475, v3757);
          const v3759 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2655), null);
          const v3760 = stdlib.fromSome(v3759, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
          const v3761 = stdlib.cast("UInt", "UInt256", v3760, false);
          const v3762 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2655), null);
          const v3763 = stdlib.fromSome(v3762, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3764 = stdlib.sub256(v3758, v3763);
          const v3765 = stdlib.mul256(v3761, v3764);
          const v3766 = stdlib.div256(v3765, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3767 = stdlib.cast("UInt256", "UInt", v3766, false);
          const v3768 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2655), null);
          const v3769 = stdlib.fromSome(v3768, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
          const v3770 = stdlib.add(v3767, v3769);
          await stdlib.simMapSet(sim_r, 1, v2655, v3770);
          await stdlib.simMapSet(sim_r, 3, v2655, v3758);
          const v3773 = stdlib.add(v3760, v3542);
          await stdlib.simMapSet(sim_r, 0, v2655, v3773);
          await stdlib.simMapSet(sim_r, 2, v2655, v3750);
          const v3783 = {
            now: v3748,
            result: v3542
            };
          const v3785 = await txn1.getOutput('stake', 'v3783', ctc13, v3783);
          
          const v8004 = v2473;
          const v8005 = v3750;
          const v8006 = v3758;
          const v8007 = v2476;
          const v8008 = v3543;
          const v8010 = v3592;
          const v8011 = v2485;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_581': {
          const v3952 = v2656[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
  switch (v2656[0]) {
    case 'claim0_581': {
      const v2659 = v2656[1];
      return;
      break;
      }
    case 'claimFees0_581': {
      const v3090 = v2656[1];
      return;
      break;
      }
    case 'stake0_581': {
      const v3521 = v2656[1];
      undefined /* setApiDetails */;
      const v3542 = v3521[stdlib.checkedBigNumberify('./index.rsh:361:12:spread', stdlib.UInt_max, '0')];
      const v3543 = stdlib.add(v2477, v3542);
      const v3544 = stdlib.lt(v3543, stdlib.UInt_max);
      stdlib.assert(v3544, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:362:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:361:34:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:361:34:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
        msg: 'maximum stakes has been reached',
        who: 'stake'
        });
      ;
      const v3586 = stdlib.add(v2528, v3542);
      const v3589 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
      const v3590 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
      const v3591 = [v3586, v3589, v3590];
      const v3592 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v3591);
      ;
      const v3747 = stdlib.gt(v2657, v2474);
      const v3748 = v3747 ? v2657 : v2474;
      const v3749 = stdlib.lt(v3748, v2377);
      const v3750 = v3749 ? v3748 : v2377;
      const v3751 = stdlib.sub(v3750, v2474);
      const v3752 = stdlib.cast("UInt", "UInt256", v3751, false);
      const v3753 = stdlib.cast("UInt", "UInt256", v2378, false);
      const v3754 = stdlib.mul256(v3753, v3752);
      const v3755 = stdlib.mul256(v3754, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3756 = stdlib.cast("UInt", "UInt256", v2477, false);
      const v3757 = stdlib.div256(v3755, v3756);
      const v3758 = stdlib.add256(v2475, v3757);
      const v3759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
      const v3760 = stdlib.fromSome(v3759, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
      const v3761 = stdlib.cast("UInt", "UInt256", v3760, false);
      const v3762 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
      const v3763 = stdlib.fromSome(v3762, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3764 = stdlib.sub256(v3758, v3763);
      const v3765 = stdlib.mul256(v3761, v3764);
      const v3766 = stdlib.div256(v3765, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3767 = stdlib.cast("UInt256", "UInt", v3766, false);
      const v3768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
      const v3769 = stdlib.fromSome(v3768, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
      const v3770 = stdlib.add(v3767, v3769);
      await stdlib.mapSet(map1, v2655, v3770);
      await stdlib.mapSet(map3, v2655, v3758);
      const v3773 = stdlib.add(v3760, v3542);
      await stdlib.mapSet(map0, v2655, v3773);
      await stdlib.mapSet(map2, v2655, v3750);
      const v3783 = {
        now: v3748,
        result: v3542
        };
      const v3785 = await txn1.getOutput('stake', 'v3783', ctc13, v3783);
      if (v1668) {
        stdlib.protect(ctc0, await interact.out(v3521, v3785), {
          at: './index.rsh:361:13:application',
          fs: ['at ./index.rsh:361:13:application call to [unknown function] (defined at: ./index.rsh:361:13:function exp)', 'at ./index.rsh:372:21:application call to "callback" (defined at: ./index.rsh:366:22:function exp)', 'at ./index.rsh:366:22:application call to [unknown function] (defined at: ./index.rsh:366:22:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v8004 = v2473;
      const v8005 = v3750;
      const v8006 = v3758;
      const v8007 = v2476;
      const v8008 = v3543;
      const v8010 = v3592;
      const v8011 = v2485;
      const v8012 = v3592[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
      const v8013 = v8012[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
      const v8014 = stdlib.le(v2476, v8013);
      stdlib.assert(v8014, {
        at: './index.rsh:292:16:application',
        fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
        msg: null,
        who: 'stake'
        });
      const v8015 = stdlib.le(v2473, v2485);
      stdlib.assert(v8015, {
        at: './index.rsh:293:16:application',
        fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
        msg: null,
        who: 'stake'
        });
      return;
      
      break;
      }
    case 'unstake0_581': {
      const v3952 = v2656[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_581: ctc11,
    claimFees0_581: ctc11,
    stake0_581: ctc10,
    unstake0_581: ctc10
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
  
  
  const [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2548 = ctc.selfAddress();
  const v2550 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to "rununstake0_581" (defined at: ./index.rsh:383:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v2551 = v2550[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2553 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2548), null);
  const v2554 = stdlib.fromSome(v2553, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
  const v2557 = stdlib.le(v2554, v2528);
  stdlib.assert(v2557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to "rununstake0_581" (defined at: ./index.rsh:383:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v2559 = stdlib.lt(v2551, stdlib.UInt_max);
  stdlib.assert(v2559, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:385:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to "rununstake0_581" (defined at: ./index.rsh:383:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'tried to unstake too much really',
    who: 'unstake'
    });
  const v2561 = stdlib.addressEq(v2548, v2372);
  const v2562 = v2561 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:387:63:decimal', stdlib.UInt_max, '0');
  const v2563 = stdlib.add(v2551, v2562);
  const v2566 = stdlib.le(v2563, v2554);
  stdlib.assert(v2566, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:386:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to "rununstake0_581" (defined at: ./index.rsh:383:12:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v2573 = ['unstake0_581', v2550];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2372, v2373, v2374, v2375, v2376, v2377, v2378, v2379, v2380, v2428, v2430, v2473, v2474, v2475, v2476, v2477, v2484, v2485, v2527, v2528, v2573],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:392:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:392:16:decimal', stdlib.UInt_max, '0'), v2375]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
      
      switch (v2656[0]) {
        case 'claim0_581': {
          const v2659 = v2656[1];
          
          break;
          }
        case 'claimFees0_581': {
          const v3090 = v2656[1];
          
          break;
          }
        case 'stake0_581': {
          const v3521 = v2656[1];
          
          break;
          }
        case 'unstake0_581': {
          const v3952 = v2656[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          const v3984 = v3952[stdlib.checkedBigNumberify('./index.rsh:383:12:spread', stdlib.UInt_max, '0')];
          const v3985 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2655), null);
          const v3986 = stdlib.fromSome(v3985, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
          ;
          const v4020 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
          const v4021 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
          const v4022 = [v2528, v4020, v4021];
          const v4023 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v4022);
          ;
          const v4235 = v4023[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
          const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
          const v4250 = stdlib.gt(v2657, v2474);
          const v4251 = v4250 ? v2657 : v2474;
          const v4252 = stdlib.lt(v4251, v2377);
          const v4253 = v4252 ? v4251 : v2377;
          const v4254 = stdlib.sub(v4253, v2474);
          const v4255 = stdlib.cast("UInt", "UInt256", v4254, false);
          const v4256 = stdlib.cast("UInt", "UInt256", v2378, false);
          const v4257 = stdlib.mul256(v4256, v4255);
          const v4258 = stdlib.mul256(v4257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4259 = stdlib.cast("UInt", "UInt256", v2477, false);
          const v4260 = stdlib.div256(v4258, v4259);
          const v4261 = stdlib.add256(v2475, v4260);
          const v4264 = stdlib.cast("UInt", "UInt256", v3986, false);
          const v4265 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2655), null);
          const v4266 = stdlib.fromSome(v4265, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4267 = stdlib.sub256(v4261, v4266);
          const v4268 = stdlib.mul256(v4264, v4267);
          const v4269 = stdlib.div256(v4268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4270 = stdlib.cast("UInt256", "UInt", v4269, false);
          const v4271 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2655), null);
          const v4272 = stdlib.fromSome(v4271, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
          const v4273 = stdlib.add(v4270, v4272);
          await stdlib.simMapSet(sim_r, 1, v2655, v4273);
          await stdlib.simMapSet(sim_r, 3, v2655, v4261);
          const v4277 = stdlib.gt(v4251, v2377);
          const v4278 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2655), null);
          const v4279 = stdlib.fromSome(v4278, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
          const v4280 = stdlib.add(v4279, v2380);
          const v4281 = stdlib.le(v4280, v4251);
          const v4282 = v4277 ? true : v4281;
          const v4285 = v4282 ? stdlib.checkedBigNumberify('./index.rsh:395:51:decimal', stdlib.UInt_max, '0') : v4273;
          const v4286 = stdlib.muldiv(v4285, v2430, v2428);
          if (v4282) {
            const v4342 = stdlib.sub(v3986, v3984);
            await stdlib.simMapSet(sim_r, 0, v2655, v4342);
            const v4348 = stdlib.sub(v4236, v3984);
            const v4351 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
            const v4352 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
            const v4353 = [v4348, v4351, v4352];
            const v4354 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4353);
            sim_r.txns.push({
              kind: 'from',
              to: v2655,
              tok: v2375
              });
            await stdlib.simMapSet(sim_r, 2, v2655, v4253);
            const v4364 = {
              now: v4251,
              result: v3984
              };
            const v4366 = await txn1.getOutput('unstake', 'v4364', ctc13, v4364);
            
            const v4374 = stdlib.sub(v2477, v3984);
            const v4380 = stdlib.add(v2476, v4285);
            const v4381 = stdlib.add(v2473, v4286);
            const v8144 = v4381;
            const v8145 = v4253;
            const v8146 = v4261;
            const v8147 = v4380;
            const v8148 = v4374;
            const v8150 = v4354;
            const v8151 = v2485;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v2655, stdlib.checkedBigNumberify('./index.rsh:400:31:decimal', stdlib.UInt_max, '0'));
            const v4299 = stdlib.sub(v3986, v3984);
            await stdlib.simMapSet(sim_r, 0, v2655, v4299);
            const v4305 = stdlib.sub(v4236, v3984);
            const v4308 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
            const v4309 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
            const v4310 = [v4305, v4308, v4309];
            const v4311 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4310);
            sim_r.txns.push({
              kind: 'from',
              to: v2655,
              tok: v2375
              });
            await stdlib.simMapSet(sim_r, 2, v2655, v4253);
            const v4321 = {
              now: v4251,
              result: v3984
              };
            const v4323 = await txn1.getOutput('unstake', 'v4321', ctc13, v4321);
            
            const v4331 = stdlib.sub(v2477, v3984);
            const v4337 = stdlib.add(v2476, v4285);
            const v4338 = stdlib.add(v2473, v4286);
            const v8164 = v4338;
            const v8165 = v4253;
            const v8166 = v4261;
            const v8167 = v4337;
            const v8168 = v4331;
            const v8170 = v4311;
            const v8171 = v2485;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2656], secs: v2658, time: v2657, didSend: v1668, from: v2655 } = txn1;
  switch (v2656[0]) {
    case 'claim0_581': {
      const v2659 = v2656[1];
      return;
      break;
      }
    case 'claimFees0_581': {
      const v3090 = v2656[1];
      return;
      break;
      }
    case 'stake0_581': {
      const v3521 = v2656[1];
      return;
      break;
      }
    case 'unstake0_581': {
      const v3952 = v2656[1];
      undefined /* setApiDetails */;
      const v3984 = v3952[stdlib.checkedBigNumberify('./index.rsh:383:12:spread', stdlib.UInt_max, '0')];
      const v3985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2655), null);
      const v3986 = stdlib.fromSome(v3985, stdlib.checkedBigNumberify('./index.rsh:229:46:decimal', stdlib.UInt_max, '0'));
      const v3989 = stdlib.le(v3986, v2528);
      stdlib.assert(v3989, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v3991 = stdlib.lt(v3984, stdlib.UInt_max);
      stdlib.assert(v3991, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:385:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
        msg: 'tried to unstake too much really',
        who: 'unstake'
        });
      const v3993 = stdlib.addressEq(v2655, v2372);
      const v3994 = v3993 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:387:63:decimal', stdlib.UInt_max, '0');
      const v3995 = stdlib.add(v3984, v3994);
      const v3998 = stdlib.le(v3995, v3986);
      stdlib.assert(v3998, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:386:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:38:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:383:38:function exp)', 'at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)', 'at ./index.rsh:360:16:application call to [unknown function] (defined at: ./index.rsh:360:16:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      ;
      const v4020 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '1')];
      const v4021 = v2527[stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '2')];
      const v4022 = [v2528, v4020, v4021];
      const v4023 = stdlib.Array_set(v2484, stdlib.checkedBigNumberify('./index.rsh:284:19:dot', stdlib.UInt_max, '0'), v4022);
      ;
      const v4235 = v4023[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
      const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:384:38:application', stdlib.UInt_max, '0')];
      const v4237 = stdlib.le(v3986, v4236);
      stdlib.assert(v4237, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:384:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:22:application call to [unknown function] (defined at: ./index.rsh:393:22:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v4250 = stdlib.gt(v2657, v2474);
      const v4251 = v4250 ? v2657 : v2474;
      const v4252 = stdlib.lt(v4251, v2377);
      const v4253 = v4252 ? v4251 : v2377;
      const v4254 = stdlib.sub(v4253, v2474);
      const v4255 = stdlib.cast("UInt", "UInt256", v4254, false);
      const v4256 = stdlib.cast("UInt", "UInt256", v2378, false);
      const v4257 = stdlib.mul256(v4256, v4255);
      const v4258 = stdlib.mul256(v4257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4259 = stdlib.cast("UInt", "UInt256", v2477, false);
      const v4260 = stdlib.div256(v4258, v4259);
      const v4261 = stdlib.add256(v2475, v4260);
      const v4264 = stdlib.cast("UInt", "UInt256", v3986, false);
      const v4265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2655), null);
      const v4266 = stdlib.fromSome(v4265, stdlib.checkedBigNumberify('./index.rsh:239:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4267 = stdlib.sub256(v4261, v4266);
      const v4268 = stdlib.mul256(v4264, v4267);
      const v4269 = stdlib.div256(v4268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4270 = stdlib.cast("UInt256", "UInt", v4269, false);
      const v4271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2655), null);
      const v4272 = stdlib.fromSome(v4271, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', stdlib.UInt_max, '0'));
      const v4273 = stdlib.add(v4270, v4272);
      await stdlib.mapSet(map1, v2655, v4273);
      await stdlib.mapSet(map3, v2655, v4261);
      const v4277 = stdlib.gt(v4251, v2377);
      const v4278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2655), null);
      const v4279 = stdlib.fromSome(v4278, stdlib.checkedBigNumberify('./index.rsh:236:60:decimal', stdlib.UInt_max, '0'));
      const v4280 = stdlib.add(v4279, v2380);
      const v4281 = stdlib.le(v4280, v4251);
      const v4282 = v4277 ? true : v4281;
      const v4285 = v4282 ? stdlib.checkedBigNumberify('./index.rsh:395:51:decimal', stdlib.UInt_max, '0') : v4273;
      const v4286 = stdlib.muldiv(v4285, v2430, v2428);
      if (v4282) {
        const v4342 = stdlib.sub(v3986, v3984);
        await stdlib.mapSet(map0, v2655, v4342);
        const v4348 = stdlib.sub(v4236, v3984);
        const v4351 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
        const v4352 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
        const v4353 = [v4348, v4351, v4352];
        const v4354 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4353);
        ;
        await stdlib.mapSet(map2, v2655, v4253);
        const v4364 = {
          now: v4251,
          result: v3984
          };
        const v4366 = await txn1.getOutput('unstake', 'v4364', ctc13, v4364);
        if (v1668) {
          stdlib.protect(ctc0, await interact.out(v3952, v4366), {
            at: './index.rsh:383:13:application',
            fs: ['at ./index.rsh:383:13:application call to [unknown function] (defined at: ./index.rsh:383:13:function exp)', 'at ./index.rsh:408:21:application call to "callback" (defined at: ./index.rsh:393:22:function exp)', 'at ./index.rsh:393:22:application call to [unknown function] (defined at: ./index.rsh:393:22:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4374 = stdlib.sub(v2477, v3984);
        const v4380 = stdlib.add(v2476, v4285);
        const v4381 = stdlib.add(v2473, v4286);
        const v8144 = v4381;
        const v8145 = v4253;
        const v8146 = v4261;
        const v8147 = v4380;
        const v8148 = v4374;
        const v8150 = v4354;
        const v8151 = v2485;
        const v8152 = v4354[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v8153 = v8152[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v8154 = stdlib.le(v4380, v8153);
        stdlib.assert(v8154, {
          at: './index.rsh:292:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v8155 = stdlib.le(v4381, v2485);
        stdlib.assert(v8155, {
          at: './index.rsh:293:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      else {
        await stdlib.mapSet(map1, v2655, stdlib.checkedBigNumberify('./index.rsh:400:31:decimal', stdlib.UInt_max, '0'));
        const v4299 = stdlib.sub(v3986, v3984);
        await stdlib.mapSet(map0, v2655, v4299);
        const v4305 = stdlib.sub(v4236, v3984);
        const v4308 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '1')];
        const v4309 = v4235[stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '2')];
        const v4310 = [v4305, v4308, v4309];
        const v4311 = stdlib.Array_set(v4023, stdlib.checkedBigNumberify('./index.rsh:405:46:application', stdlib.UInt_max, '0'), v4310);
        ;
        await stdlib.mapSet(map2, v2655, v4253);
        const v4321 = {
          now: v4251,
          result: v3984
          };
        const v4323 = await txn1.getOutput('unstake', 'v4321', ctc13, v4321);
        if (v1668) {
          stdlib.protect(ctc0, await interact.out(v3952, v4323), {
            at: './index.rsh:383:13:application',
            fs: ['at ./index.rsh:383:13:application call to [unknown function] (defined at: ./index.rsh:383:13:function exp)', 'at ./index.rsh:408:21:application call to "callback" (defined at: ./index.rsh:393:22:function exp)', 'at ./index.rsh:393:22:application call to [unknown function] (defined at: ./index.rsh:393:22:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4331 = stdlib.sub(v2477, v3984);
        const v4337 = stdlib.add(v2476, v4285);
        const v4338 = stdlib.add(v2473, v4286);
        const v8164 = v4338;
        const v8165 = v4253;
        const v8166 = v4261;
        const v8167 = v4337;
        const v8168 = v4331;
        const v8170 = v4311;
        const v8171 = v2485;
        const v8172 = v4311[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v8173 = v8172[stdlib.checkedBigNumberify('./index.rsh:292:43:application', stdlib.UInt_max, '0')];
        const v8174 = stdlib.le(v4337, v8173);
        stdlib.assert(v8174, {
          at: './index.rsh:292:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v8175 = stdlib.le(v4338, v2485);
        stdlib.assert(v8175, {
          at: './index.rsh:293:16:application',
          fs: ['at ./index.rsh:284:19:application call to [unknown function] (defined at: ./index.rsh:284:19:function exp)'],
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
    pure: [`global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAgAAEYBAgQAwb///////////8BkE4gQEhQWAU8vfqL1AStiOWGC7zzuIcLodHkuwf6sqy1A9el6uADKDA4YGhweICU69wDgK3iBCYFAQABASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4Lazp2QAAAAJAQAAAAAAAAAAIjUAMRhBDS4rZEkiWzUBSSEEWzUCIQVbNQgxGSMSQQAKMQAoIRCvZkIM9DYaABdJQQFQIjUEIzUGSSERDEAAlEkhEgxAAGJJIRMMQABJIRMSRDQBJRJEKGQpZFBJNQNXACA0A1cgCFA0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA0A1dICFA0A1dQCFA0A1dYCFA1B0IMlyESEkQrNf8pNP9QIQSvUEIA+EkhFAxAABIhFBJEKzX/KDT/UCEEr1BCAN8hERJENhoBNf+AAQM0/1BCAM1JIRUMQACTSSEWDEAAZyEWEkQ0ASUSRDYaATX/IjT/iAxhVwAJSTX+I1s0/iJVTRYiNP+IDE1XCQlJNf4jWzT+IlVNFlAiNP+IDDhXEglJNf4jWzT+IlVNFlAyAzT/iAwiVxshSTX+VwEgNP4iVU1QNQdCC+UhFRJENAElEkQoZClkUEk1A1eoCDQDV3gIUDQDV4AgUDUHQgvAgc3I+h4SRDYaATX/gAECNP9QQgAeNhoCFzUENhoDNhoBF0kjDEAI/EkhBgxACAchBhJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpKSkpKSlcAIDX/IQpbNf4hF1s1/SEYWzX8IRlbNfshC1s1+iEMWzX5IQ1bNfghDls19yEaWzX2IRtbNfUhHFs19CEdWzXzV4AgNfKBoAFbNfGBqAFbNfBXsBE174HBAVs17lfJETXtgdoBWzXsSTUFNeuABJHxp5o061CwNOsiVUmBAgxABG1JIQYMQALWIQYSRDTrVwEINeqxIrIBIQeyEDQIshizNOoXNekiMQCICuhXAAlJNecjWzTnIlVNSTXoNOwORDTpIQgMRDTpIiMxADT/Ek0INOgORDTsFjTtVwgIUDTtVxABUDXnNOdXABFJNeYiWzXlNOg05Q5ENPMyBjIGNPMNTTXkNPo05Ek0+gxNNeM08iSvNPkWUCSvNOM08wkWUKOICrYqo4gKsSSvNPAWUKKICqegiAqjNeIkrzToFlA04jIDMQCICkxXGyFJNeBXASA04CJVTaGICoCjiAp8KqKICndJSiEFWyISRCEEWyISRCJbIhJEJFsiMQCIChZXCQlJNeAjWzTgIlVNCDXhMQAoMQCICf4pNOEWUDXgSVcACTTgUExXEipQZjEAKDEAiAniKTTiUDXgVwAbNOBQZjTkNPoNIjEAiAnKVxIJSTXfI1s03yJVTTT3CDTkDhE14DThIjTgTUk13zT1HTT2lzXeNOBBAKgxACgxAIgJlik06DTpCRZQNd1XCTM03UxQZrEisgE06bISJbIQMQCyFDT8shGzMQAoMQCICWgpNOMWUDXdSVcAEjTdUExXGyFQZoAIAAAAAAAAEQw05BY06RZQULA05BY06RZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ03gg04zTiNPE03wg08DTpCTIGNOU06QkWNOZXCAhQNOZXEAFQNO5CB84xACgxAIgI7icENd1JVwAJNN1QTFcSKlBmMQAoMQCICNUpNOg06QkWUDXdVwkzNN1MUGaxIrIBNOmyEiWyEDEAshQ0/LIRszEAKDEAiAinKTTjFlA13UlXABI03VBMVxshUGaACAAAAAAAABDhNOQWNOkWUFCwNOQWNOkWUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NN4INOM04jTxNN8INPA06QkyBjTlNOkJFjTmVwgIUDTmVxABUDTuQgcNSDTrVwEINeqxIrIBIQeyEDQIshizNOoXNek08DTpCEk16CEIDEQ06TT8iAgvNPMyBjIGNPMNTTXnNPo050k0+gxNNeY08iSvNPkWUCSvNOY08wkWUKOICCIqo4gIHSSvNPAWUKKICBOgiAgPNeUiMQCIB8FXAAlJNeMjWzTjIlVNNeQxACgxAIgHqikkrzTkFlA05TIDMQCIB5pXGyFJNeNXASA04yJVTaGIB86jiAfKKqKIB8VJSiEFWyISRCEEWyISRCJbIhJEJFsiMQCIB2RXCQlJNeMjWzTjIlVNCBZQNeNJVwAJNONQTFcSKlBmMQAoMQCIBz0pNOVQNeNXABs041BmMQAoMQCIBygpNOQ06QgWUDXjVwkzNONMUGYxACgxAIgHDik05hZQNeNJVwASNONQTFcbIVBmgAgAAAAAAAAOxzTnFjTpFlBQsDTnFjTpFlA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTmNOU08TToMgY07DTpCBY07VcICFA07VcQAVA07kIFfUkjDEAAs0gxADT/EkQ07BY07VcICFA07VcQAVA16rEisgE09LIII7IQNP+yB7M06lcAETXpsSKyATTxshIlshA0/7IUNPyyEbOACAAAAAAAAAzgNPMyBjIGNPMNTRY08RY09BZQUFCwNPMyBjIGNPMNTRY08RY09BZQUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI08zTyIjTwMgY06SJbNPEJFjTpVwgIUDTpVxABUDTuNPQJQgTESLEisgEhB7IQNAiyGLM07BY07VcICFA07VcQAVA16jTzMgYyBjTzDU016TT6NOlJNPoMTTXoNPIkrzT5FlAkrzToNPMJFlCjiAXnKqOIBeIkrzTwFlCiiAXYoIgF1DXnJK8iMQCIBYRXAAlJNeUjWzTlIlVNFlA05zIDMQCIBWxXGyFJNeVXASA05SJVTaGIBaCjiAWcKqKIBZdJSiEFWyISRCEEWyISRCJbIhJEJFsiMQCIBTZXCQlJNeUjWzTlIlVNCDXmMQAoMQCIBR4pNOYWUDXlSVcACTTlUExXEipQZjEAKDEAiAUCKTTnUDXlVwAbNOVQZjTpNPoNIjEAiATqVxIJSTXlI1s05SJVTTT3CDTpDhFBANs05jT1HTT2lzXlMQAoMQCIBMEnBDXkSVcACTTkUExXEipQZjTqVwARSTXkIls14zTmNOMONOU07g4QRLEisgE05bIII7IQMQCyB7OxIrIBNOayEiWyEDEAshQ0/LIRszEAKDEAiARsKTToFlA14klXABI04lBMVxshUGaACAAAAAAAAAryNOkWNOYWNOUWUFBQsDTpFjTmFjTlFlBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ06DTnNPE08DIGNOM05gkWNORXCAhQNORXEAFQNO405QlCAtCACAAAAAAAAAsINOkWIQWvUFCwNOkWIQWvUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NOg05zTxNPAyBjTqNO5CAosjEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQxbNf4hDVs1/SEOWzX8V4ARNfuBkQFbNfqBmQFbNfmBoQFbNfiBqQFbNfeABJqLkXSwNPk09wg0/gg19jT6NPgINfU09ogDVDT7VwARNfQ09TT9iANeNP8xABJENP8oNP+IAymACQEAAAAAAAAAATXzVwkzNPNMUGY0A1cgIDQDIQtbNP40/TT8NAMhGls0AyEbWzQDIRxbNAMhHVs0+jT5NPc0/gg0/DIDNPgjMgY09CJbNPUIFjT0VwgIUDT0VxABUDT2QgGdSIHAmgyIAsyxIrIBIQeyECKyGIAGBjEAMgkSsh6AAQayH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkpJVwAgNf8hCls1/iEXWzX9IRhbNfwhGVs1+yELWzX6IQxbNfkhDVs1+CEOWzX3gASoLTPJNP9QNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlCwgRGvSTX2VwARNfUhBK809VcICFA09VcQAVA19IGgjQaIAhuxIrIBIrISJbIQMgqyFDT8shGzNP4hDwshCQ5ENP0hHg5ENPs0+gxENPo0+wlJNfMhHwxENPchHwxENPc08w5ENPkiDUQhCCEeCTXyNPk08gxENPg08gxEIQg08yEJCwo18TT5NPEMRDT4NP0INPEMRDTzNPkLNfA08zT4CzXvNPA0/gshCQo17jTvNP4LIQkKNe0xADT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPRQNPAWUDTvFlA07hZQNO0WUChLAVcAf2cpSwFXfzJnSCM1ATIGNQJCAM81/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TT+VwARSTXsIls16zT7NOsORDT4NP8ORDTtNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPpQNPsWUDT8FlA0/lA0/xZQNOxQNOsWUChLAVcAf2cpSwFXf2NnSCU1ATIGNQJCAC0xGSEPEkSxIrIBIQeyEDQIshghD7IZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQjMTcSRCI1ASI1AiI1CEL/p0kxGGFAAAVIIRCviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFSEKTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: {
    api_claim: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 2,
  stateSize: 226,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:220:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:459:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:284:19:after expr stmt semicolon',
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

// Automatically generated with Reach 0.1.10 (31c3a32d)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (31c3a32d)';
export const _backendVersion = 12;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  return {
    claimed: [ctc0],
    noRewardsLeft: [],
    staked: [ctc0, ctc1],
    unstaked: [ctc0, ctc1],
    updated: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Struct([['totalStaked', ctc2], ['lastUpdateBlock', ctc2], ['rewardPerTokenStored', ctc2]]);
  const ctc7 = stdlib.T_Struct([['stakeToken', ctc1], ['rewardToken', ctc1], ['beginBlock', ctc2], ['endBlock', ctc2], ['totalRewardAmount', ctc2]]);
  const ctc8 = stdlib.T_Struct([['staked', ctc2], ['reward', ctc2]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc2
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc10;
  
  const map2_ctc = ctc10;
  
  
  return {
    infos: {
      global: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1338] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1358, v1359, v1361, v1368, v1369] = svs;
            return (await ((async () => {
              
              const v2979 = {
                lastUpdateBlock: v1358,
                rewardPerTokenStored: v1359,
                totalStaked: v1361
                };
              
              return v2979;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = svs;
            return (await ((async () => {
              
              const v1392 = {
                lastUpdateBlock: v1358,
                rewardPerTokenStored: v1359,
                totalStaked: v1361
                };
              
              return v1392;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1338] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1358, v1359, v1361, v1368, v1369] = svs;
            return (await ((async () => {
              
              const v2978 = {
                beginBlock: v1318,
                endBlock: v1319,
                rewardToken: v1317,
                stakeToken: v1316,
                totalRewardAmount: v1320
                };
              
              return v2978;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = svs;
            return (await ((async () => {
              
              const v1391 = {
                beginBlock: v1318,
                endBlock: v1319,
                rewardToken: v1317,
                stakeToken: v1316,
                totalRewardAmount: v1320
                };
              
              return v1391;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1338] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1358, v1359, v1361, v1368, v1369] = svs;
            return (await ((async (_v2980 ) => {
                const v2980 = stdlib.protect(ctc0, _v2980, null);
              
              const v2981 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2980), null);
              const v2982 = stdlib.fromSome(v2981, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
              const v2983 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2980), null);
              const v2984 = stdlib.fromSome(v2983, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
              const v2985 = {
                reward: v2984,
                staked: v2982
                };
              
              return v2985;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = svs;
            return (await ((async (_v1393 ) => {
                const v1393 = stdlib.protect(ctc0, _v1393, null);
              
              const v1394 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1393), null);
              const v1395 = stdlib.fromSome(v1394, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
              const v1396 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1393), null);
              const v1397 = stdlib.fromSome(v1396, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
              const v1398 = {
                reward: v1397,
                staked: v1395
                };
              
              return v1398;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2]
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
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  return {
    mapDataTy: ctc3
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    beginBlock: ctc1,
    endBlock: ctc1,
    rewardPerBlock: ctc1,
    rewardToken: ctc3,
    stakeToken: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    claim0_138: ctc5,
    setTime0_138: ctc6,
    stake0_138: ctc6,
    unstake0_138: ctc6,
    update0_138: ctc5
    });
  const ctc8 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1297 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1298 = [v1297, v1297];
  const v1304 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:124:38:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1305 = v1304.stakeToken;
  const v1306 = v1304.rewardToken;
  const v1307 = v1304.beginBlock;
  const v1308 = v1304.endBlock;
  const v1309 = v1304.rewardPerBlock;
  const v1310 = stdlib.tokenEq(v1305, v1306);
  const v1311 = v1310 ? false : true;
  stdlib.assert(v1311, {
    at: './index.rsh:126:11:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1312 = stdlib.lt(v1307, v1308);
  stdlib.assert(v1312, {
    at: './index.rsh:128:11:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1313 = stdlib.sub(v1308, v1307);
  const v1314 = stdlib.mul(v1313, v1309);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1305, v1306, v1307, v1308, v1314, v1309],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1316, v1317, v1318, v1319, v1320, v1321], secs: v1323, time: v1322, didSend: v46, from: v1315 } = txn1;
      
      const v1324 = stdlib.tokenEq(v1316, v1317);
      const v1325 = v1324 ? false : true;
      ;
      const v1326 = v1298[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
      const v1328 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
      const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
      const v1330 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1328, v1329];
      const v1331 = stdlib.Array_set(v1298, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0'), v1330);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1316
        });
      const v1333 = v1331[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
      const v1335 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
      const v1336 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
      const v1337 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1335, v1336];
      const v1338 = stdlib.Array_set(v1331, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1337);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1317
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1316, v1317, v1318, v1319, v1320, v1321], secs: v1323, time: v1322, didSend: v46, from: v1315 } = txn1;
  const v1324 = stdlib.tokenEq(v1316, v1317);
  const v1325 = v1324 ? false : true;
  stdlib.assert(v1325, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1326 = v1298[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
  const v1328 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1330 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1328, v1329];
  const v1331 = stdlib.Array_set(v1298, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0'), v1330);
  ;
  const v1333 = v1331[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1335 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1336 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1337 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1335, v1336];
  const v1338 = stdlib.Array_set(v1331, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1337);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1338],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1322,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '0'), [[v1320, v1317]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1342, time: v1341, didSend: v53, from: v1340 } = txn2;
      
      ;
      const v1343 = v1338[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
      const v1344 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '0')];
      const v1345 = stdlib.add(v1344, v1320);
      const v1348 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
      const v1349 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '2')];
      const v1350 = [v1345, v1348, v1349];
      const v1351 = stdlib.Array_set(v1338, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1'), v1350);
      sim_r.txns.push({
        amt: v1320,
        kind: 'to',
        tok: v1317
        });
      const v1352 = stdlib.addressEq(v1315, v1340);
      ;
      
      const v1357 = stdlib.checkedBigNumberify('./index.rsh:184:5:decimal', stdlib.UInt_max, '0');
      const v1358 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
      const v1359 = stdlib.checkedBigNumberify('./index.rsh:182:5:decimal', stdlib.UInt_max, '0');
      const v1361 = stdlib.checkedBigNumberify('./index.rsh:180:5:decimal', stdlib.UInt_max, '0');
      const v1362 = v1341;
      const v1368 = v1351;
      const v1369 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1386 = stdlib.lt(v1357, v1319);
        
        return v1386;})()) {
        const v1389 = stdlib.lt(v1357, v1319);
        const v1390 = v1389 ? v1357 : v1319;
        sim_r.isHalt = false;
        }
      else {
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1342, time: v1341, didSend: v53, from: v1340 } = txn2;
  ;
  const v1343 = v1338[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
  const v1344 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '0')];
  const v1345 = stdlib.add(v1344, v1320);
  const v1348 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
  const v1349 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '2')];
  const v1350 = [v1345, v1348, v1349];
  const v1351 = stdlib.Array_set(v1338, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1'), v1350);
  ;
  const v1352 = stdlib.addressEq(v1315, v1340);
  stdlib.assert(v1352, {
    at: './index.rsh:143:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:158:22:application',
    fs: ['at ./index.rsh:157:7:application call to [unknown function] (defined at: ./index.rsh:157:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v1357 = stdlib.checkedBigNumberify('./index.rsh:184:5:decimal', stdlib.UInt_max, '0');
  let v1358 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
  let v1359 = stdlib.checkedBigNumberify('./index.rsh:182:5:decimal', stdlib.UInt_max, '0');
  let v1361 = stdlib.checkedBigNumberify('./index.rsh:180:5:decimal', stdlib.UInt_max, '0');
  let v1362 = v1341;
  let v1368 = v1351;
  let v1369 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1386 = stdlib.lt(v1357, v1319);
    
    return v1386;})()) {
    const v1389 = stdlib.lt(v1357, v1319);
    const v1390 = v1389 ? v1357 : v1319;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn3;
    switch (v1578[0]) {
      case 'claim0_138': {
        const v1581 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v1658 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1665 = [v1659, v1663, v1664];
        const v1666 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1665);
        ;
        const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1674 = [v1668, v1672, v1673];
        const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1674);
        ;
        const v1677 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v1678 = stdlib.fromSome(v1677, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v1679 = v1675[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v1680 = v1679[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v1681 = stdlib.lt(v1678, v1680);
        stdlib.assert(v1681, {
          at: './index.rsh:294:14:application',
          fs: ['at ./index.rsh:293:18:application call to [unknown function] (defined at: ./index.rsh:293:18:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v1682;
        const v1683 = stdlib.sub(v1390, v1358);
        const v1684 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v1684) {
          v1682 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1685 = stdlib.mul(v1683, v1321);
          const v1686 = stdlib.div(v1685, v1361);
          const v1687 = stdlib.add(v1359, v1686);
          v1682 = v1687;
          }
        const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v1689 = stdlib.fromSome(v1688, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v1690 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v1691 = stdlib.fromSome(v1690, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v1692 = stdlib.sub(v1682, v1691);
        const v1693 = stdlib.mul(v1689, v1692);
        const v1696 = stdlib.add(v1693, v1678);
        await stdlib.mapSet(map1, v1577, v1696);
        await stdlib.mapSet(map2, v1577, v1682);
        await stdlib.mapSet(map1, v1577, stdlib.checkedBigNumberify('./index.rsh:298:25:decimal', stdlib.UInt_max, '0'));
        const v1704 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v1689
          };
        await txn3.getOutput('claim', 'v1704', ctc8, v1704);
        const v1713 = stdlib.lt(v1696, v1680);
        if (v1713) {
          const v1719 = stdlib.sub(v1680, v1696);
          const v1722 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1')];
          const v1723 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '2')];
          const v1724 = [v1719, v1722, v1723];
          const v1725 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1'), v1724);
          ;
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1682;
          const cv1361 = v1361;
          const cv1362 = v1579;
          const cv1368 = v1725;
          const cv1369 = v1369;
          
          v1357 = cv1357;
          v1358 = cv1358;
          v1359 = cv1359;
          v1361 = cv1361;
          v1362 = cv1362;
          v1368 = cv1368;
          v1369 = cv1369;
          
          continue;}
        else {
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1682;
          const cv1361 = v1361;
          const cv1362 = v1579;
          const cv1368 = v1675;
          const cv1369 = v1369;
          
          v1357 = cv1357;
          v1358 = cv1358;
          v1359 = cv1359;
          v1361 = cv1361;
          v1362 = cv1362;
          v1368 = cv1368;
          v1369 = cv1369;
          
          continue;}
        break;
        }
      case 'setTime0_138': {
        const v1860 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v1937 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1938 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1942 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1943 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1944 = [v1938, v1942, v1943];
        const v1945 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1944);
        ;
        const v1946 = v1945[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1951 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1952 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1953 = [v1947, v1951, v1952];
        const v1954 = stdlib.Array_set(v1945, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1953);
        ;
        const v2010 = v1860[stdlib.checkedBigNumberify('./index.rsh:332:9:spread', stdlib.UInt_max, '0')];
        const v2011 = stdlib.gt(v2010, v1357);
        const v2012 = stdlib.le(v2010, v1319);
        const v2013 = v2011 ? v2012 : false;
        stdlib.assert(v2013, {
          at: './index.rsh:339:14:application',
          fs: ['at ./index.rsh:338:25:application call to [unknown function] (defined at: ./index.rsh:338:25:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2014 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2016 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2018 = {
          reward: v2017,
          staked: v2015
          };
        await txn3.getOutput('setTime', 'v2018', ctc8, v2018);
        const cv1357 = v2010;
        const cv1358 = v1358;
        const cv1359 = v1359;
        const cv1361 = v1361;
        const cv1362 = v1579;
        const cv1368 = v1954;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'stake0_138': {
        const v2139 = v1578[1];
        undefined /* setApiDetails */;
        const v2165 = v2139[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2216 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2217 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2218 = stdlib.add(v2217, v2165);
        const v2221 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2222 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2223 = [v2218, v2221, v2222];
        const v2224 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2223);
        ;
        const v2225 = v2224[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2226 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2230 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2231 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2232 = [v2226, v2230, v2231];
        const v2233 = stdlib.Array_set(v2224, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2232);
        ;
        let v2307;
        const v2308 = stdlib.sub(v1390, v1358);
        const v2309 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2309) {
          v2307 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2310 = stdlib.mul(v2308, v1321);
          const v2311 = stdlib.div(v2310, v1361);
          const v2312 = stdlib.add(v1359, v2311);
          v2307 = v2312;
          }
        const v2313 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2315 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2316 = stdlib.fromSome(v2315, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2317 = stdlib.sub(v2307, v2316);
        const v2318 = stdlib.mul(v2314, v2317);
        const v2319 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2320 = stdlib.fromSome(v2319, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2321 = stdlib.add(v2318, v2320);
        await stdlib.mapSet(map1, v1577, v2321);
        await stdlib.mapSet(map2, v1577, v2307);
        const v2325 = stdlib.add(v2314, v2165);
        await stdlib.mapSet(map0, v1577, v2325);
        null;
        const v2330 = {
          reward: v2321,
          staked: v2325
          };
        await txn3.getOutput('stake', 'v2330', ctc8, v2330);
        const v2337 = stdlib.add(v1361, v2165);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2307;
        const cv1361 = v2337;
        const cv1362 = v1579;
        const cv1368 = v2233;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'unstake0_138': {
        const v2418 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v2495 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2496 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2500 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2501 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2502 = [v2496, v2500, v2501];
        const v2503 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2502);
        ;
        const v2504 = v2503[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2505 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2509 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2510 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2511 = [v2505, v2509, v2510];
        const v2512 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2511);
        ;
        const v2619 = v2418[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
        const v2620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2622 = stdlib.le(v2619, v2621);
        stdlib.assert(v2622, {
          at: './index.rsh:265:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2623 = v2512[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
        const v2624 = v2623[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
        const v2625 = stdlib.le(v2619, v2624);
        stdlib.assert(v2625, {
          at: './index.rsh:266:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v2626;
        const v2627 = stdlib.sub(v1390, v1358);
        const v2628 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2628) {
          v2626 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2629 = stdlib.mul(v2627, v1321);
          const v2630 = stdlib.div(v2629, v1361);
          const v2631 = stdlib.add(v1359, v2630);
          v2626 = v2631;
          }
        const v2634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2635 = stdlib.fromSome(v2634, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2636 = stdlib.sub(v2626, v2635);
        const v2637 = stdlib.mul(v2621, v2636);
        const v2638 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2639 = stdlib.fromSome(v2638, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2640 = stdlib.add(v2637, v2639);
        await stdlib.mapSet(map1, v1577, v2640);
        await stdlib.mapSet(map2, v1577, v2626);
        const v2642 = stdlib.sub(v2621, v2619);
        await stdlib.mapSet(map0, v1577, v2642);
        const v2648 = stdlib.sub(v2624, v2619);
        const v2651 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
        const v2652 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
        const v2653 = [v2648, v2651, v2652];
        const v2654 = stdlib.Array_set(v2512, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2653);
        ;
        null;
        const v2659 = {
          reward: v2640,
          staked: v2642
          };
        await txn3.getOutput('unstake', 'v2659', ctc8, v2659);
        const v2666 = stdlib.sub(v1361, v2619);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2626;
        const cv1361 = v2666;
        const cv1362 = v1579;
        const cv1368 = v2654;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'update0_138': {
        const v2697 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v2774 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2775 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2779 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2780 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2781 = [v2775, v2779, v2780];
        const v2782 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2781);
        ;
        const v2783 = v2782[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2784 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2788 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2789 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2790 = [v2784, v2788, v2789];
        const v2791 = stdlib.Array_set(v2782, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2790);
        ;
        let v2948;
        const v2949 = stdlib.sub(v1390, v1358);
        const v2950 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2950) {
          v2948 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2951 = stdlib.mul(v2949, v1321);
          const v2952 = stdlib.div(v2951, v1361);
          const v2953 = stdlib.add(v1359, v2952);
          v2948 = v2953;
          }
        const v2954 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2955 = stdlib.fromSome(v2954, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2956 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2958 = stdlib.sub(v2948, v2957);
        const v2959 = stdlib.mul(v2955, v2958);
        const v2960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2961 = stdlib.fromSome(v2960, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2962 = stdlib.add(v2959, v2961);
        await stdlib.mapSet(map1, v1577, v2962);
        await stdlib.mapSet(map2, v1577, v2948);
        null;
        const v2968 = {
          reward: v2962,
          staked: v2955
          };
        await txn3.getOutput('update', 'v2968', ctc8, v2968);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2948;
        const cv1361 = v1361;
        const cv1362 = v1579;
        const cv1368 = v2791;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1358, v1359, v1361, v1368, v1369],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1362,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:359:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2989, time: v2988, didSend: v1042, from: v2987 } = txn3;
      
      ;
      const v2991 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '1')];
      const v2992 = v2991[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '0')];
      const v2993 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
      const v2994 = v2993[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1369,
        kind: 'from',
        to: v1315,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v2992,
        kind: 'from',
        to: v1315,
        tok: v1317
        });
      sim_r.txns.push({
        amt: v2994,
        kind: 'from',
        to: v1315,
        tok: v1316
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1317
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1316
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2989, time: v2988, didSend: v1042, from: v2987 } = txn3;
  ;
  const v2991 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '1')];
  const v2992 = v2991[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '0')];
  const v2993 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
  const v2994 = v2993[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Data({
    claim0_138: ctc4,
    setTime0_138: ctc5,
    stake0_138: ctc5,
    unstake0_138: ctc5,
    update0_138: ctc4
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1297 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1298 = [v1297, v1297];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1316, v1317, v1318, v1319, v1320, v1321], secs: v1323, time: v1322, didSend: v46, from: v1315 } = txn1;
  const v1324 = stdlib.tokenEq(v1316, v1317);
  const v1325 = v1324 ? false : true;
  stdlib.assert(v1325, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1326 = v1298[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
  const v1328 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1330 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1328, v1329];
  const v1331 = stdlib.Array_set(v1298, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0'), v1330);
  ;
  const v1333 = v1331[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1335 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1336 = v1333[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1337 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1335, v1336];
  const v1338 = stdlib.Array_set(v1331, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1337);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1342, time: v1341, didSend: v53, from: v1340 } = txn2;
  ;
  const v1343 = v1338[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
  const v1344 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '0')];
  const v1345 = stdlib.add(v1344, v1320);
  const v1348 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1')];
  const v1349 = v1343[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '2')];
  const v1350 = [v1345, v1348, v1349];
  const v1351 = stdlib.Array_set(v1338, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, '1'), v1350);
  ;
  const v1352 = stdlib.addressEq(v1315, v1340);
  stdlib.assert(v1352, {
    at: './index.rsh:143:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:158:22:application',
    fs: ['at ./index.rsh:157:7:application call to [unknown function] (defined at: ./index.rsh:157:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v1357 = stdlib.checkedBigNumberify('./index.rsh:184:5:decimal', stdlib.UInt_max, '0');
  let v1358 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
  let v1359 = stdlib.checkedBigNumberify('./index.rsh:182:5:decimal', stdlib.UInt_max, '0');
  let v1361 = stdlib.checkedBigNumberify('./index.rsh:180:5:decimal', stdlib.UInt_max, '0');
  let v1362 = v1341;
  let v1368 = v1351;
  let v1369 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1386 = stdlib.lt(v1357, v1319);
    
    return v1386;})()) {
    const v1389 = stdlib.lt(v1357, v1319);
    const v1390 = v1389 ? v1357 : v1319;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn3;
    switch (v1578[0]) {
      case 'claim0_138': {
        const v1581 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v1658 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1665 = [v1659, v1663, v1664];
        const v1666 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1665);
        ;
        const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1674 = [v1668, v1672, v1673];
        const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1674);
        ;
        const v1677 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v1678 = stdlib.fromSome(v1677, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v1679 = v1675[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v1680 = v1679[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v1681 = stdlib.lt(v1678, v1680);
        stdlib.assert(v1681, {
          at: './index.rsh:294:14:application',
          fs: ['at ./index.rsh:293:18:application call to [unknown function] (defined at: ./index.rsh:293:18:function exp)'],
          msg: null,
          who: 'User'
          });
        let v1682;
        const v1683 = stdlib.sub(v1390, v1358);
        const v1684 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v1684) {
          v1682 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1685 = stdlib.mul(v1683, v1321);
          const v1686 = stdlib.div(v1685, v1361);
          const v1687 = stdlib.add(v1359, v1686);
          v1682 = v1687;
          }
        const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v1689 = stdlib.fromSome(v1688, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v1690 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v1691 = stdlib.fromSome(v1690, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v1692 = stdlib.sub(v1682, v1691);
        const v1693 = stdlib.mul(v1689, v1692);
        const v1696 = stdlib.add(v1693, v1678);
        await stdlib.mapSet(map1, v1577, v1696);
        await stdlib.mapSet(map2, v1577, v1682);
        await stdlib.mapSet(map1, v1577, stdlib.checkedBigNumberify('./index.rsh:298:25:decimal', stdlib.UInt_max, '0'));
        const v1704 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v1689
          };
        await txn3.getOutput('claim', 'v1704', ctc7, v1704);
        const v1713 = stdlib.lt(v1696, v1680);
        if (v1713) {
          const v1719 = stdlib.sub(v1680, v1696);
          const v1722 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1')];
          const v1723 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '2')];
          const v1724 = [v1719, v1722, v1723];
          const v1725 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1'), v1724);
          ;
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1682;
          const cv1361 = v1361;
          const cv1362 = v1579;
          const cv1368 = v1725;
          const cv1369 = v1369;
          
          v1357 = cv1357;
          v1358 = cv1358;
          v1359 = cv1359;
          v1361 = cv1361;
          v1362 = cv1362;
          v1368 = cv1368;
          v1369 = cv1369;
          
          continue;}
        else {
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1682;
          const cv1361 = v1361;
          const cv1362 = v1579;
          const cv1368 = v1675;
          const cv1369 = v1369;
          
          v1357 = cv1357;
          v1358 = cv1358;
          v1359 = cv1359;
          v1361 = cv1361;
          v1362 = cv1362;
          v1368 = cv1368;
          v1369 = cv1369;
          
          continue;}
        break;
        }
      case 'setTime0_138': {
        const v1860 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v1937 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1938 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1942 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1943 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1944 = [v1938, v1942, v1943];
        const v1945 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1944);
        ;
        const v1946 = v1945[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1951 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1952 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1953 = [v1947, v1951, v1952];
        const v1954 = stdlib.Array_set(v1945, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1953);
        ;
        const v2010 = v1860[stdlib.checkedBigNumberify('./index.rsh:332:9:spread', stdlib.UInt_max, '0')];
        const v2011 = stdlib.gt(v2010, v1357);
        const v2012 = stdlib.le(v2010, v1319);
        const v2013 = v2011 ? v2012 : false;
        stdlib.assert(v2013, {
          at: './index.rsh:339:14:application',
          fs: ['at ./index.rsh:338:25:application call to [unknown function] (defined at: ./index.rsh:338:25:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2014 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2016 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2018 = {
          reward: v2017,
          staked: v2015
          };
        await txn3.getOutput('setTime', 'v2018', ctc7, v2018);
        const cv1357 = v2010;
        const cv1358 = v1358;
        const cv1359 = v1359;
        const cv1361 = v1361;
        const cv1362 = v1579;
        const cv1368 = v1954;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'stake0_138': {
        const v2139 = v1578[1];
        undefined /* setApiDetails */;
        const v2165 = v2139[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2216 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2217 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2218 = stdlib.add(v2217, v2165);
        const v2221 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2222 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2223 = [v2218, v2221, v2222];
        const v2224 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2223);
        ;
        const v2225 = v2224[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2226 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2230 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2231 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2232 = [v2226, v2230, v2231];
        const v2233 = stdlib.Array_set(v2224, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2232);
        ;
        let v2307;
        const v2308 = stdlib.sub(v1390, v1358);
        const v2309 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2309) {
          v2307 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2310 = stdlib.mul(v2308, v1321);
          const v2311 = stdlib.div(v2310, v1361);
          const v2312 = stdlib.add(v1359, v2311);
          v2307 = v2312;
          }
        const v2313 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2315 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2316 = stdlib.fromSome(v2315, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2317 = stdlib.sub(v2307, v2316);
        const v2318 = stdlib.mul(v2314, v2317);
        const v2319 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2320 = stdlib.fromSome(v2319, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2321 = stdlib.add(v2318, v2320);
        await stdlib.mapSet(map1, v1577, v2321);
        await stdlib.mapSet(map2, v1577, v2307);
        const v2325 = stdlib.add(v2314, v2165);
        await stdlib.mapSet(map0, v1577, v2325);
        null;
        const v2330 = {
          reward: v2321,
          staked: v2325
          };
        await txn3.getOutput('stake', 'v2330', ctc7, v2330);
        const v2337 = stdlib.add(v1361, v2165);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2307;
        const cv1361 = v2337;
        const cv1362 = v1579;
        const cv1368 = v2233;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'unstake0_138': {
        const v2418 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v2495 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2496 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2500 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2501 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2502 = [v2496, v2500, v2501];
        const v2503 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2502);
        ;
        const v2504 = v2503[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2505 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2509 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2510 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2511 = [v2505, v2509, v2510];
        const v2512 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2511);
        ;
        const v2619 = v2418[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
        const v2620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2622 = stdlib.le(v2619, v2621);
        stdlib.assert(v2622, {
          at: './index.rsh:265:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2623 = v2512[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
        const v2624 = v2623[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
        const v2625 = stdlib.le(v2619, v2624);
        stdlib.assert(v2625, {
          at: './index.rsh:266:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'User'
          });
        let v2626;
        const v2627 = stdlib.sub(v1390, v1358);
        const v2628 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2628) {
          v2626 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2629 = stdlib.mul(v2627, v1321);
          const v2630 = stdlib.div(v2629, v1361);
          const v2631 = stdlib.add(v1359, v2630);
          v2626 = v2631;
          }
        const v2634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2635 = stdlib.fromSome(v2634, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2636 = stdlib.sub(v2626, v2635);
        const v2637 = stdlib.mul(v2621, v2636);
        const v2638 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2639 = stdlib.fromSome(v2638, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2640 = stdlib.add(v2637, v2639);
        await stdlib.mapSet(map1, v1577, v2640);
        await stdlib.mapSet(map2, v1577, v2626);
        const v2642 = stdlib.sub(v2621, v2619);
        await stdlib.mapSet(map0, v1577, v2642);
        const v2648 = stdlib.sub(v2624, v2619);
        const v2651 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
        const v2652 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
        const v2653 = [v2648, v2651, v2652];
        const v2654 = stdlib.Array_set(v2512, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2653);
        ;
        null;
        const v2659 = {
          reward: v2640,
          staked: v2642
          };
        await txn3.getOutput('unstake', 'v2659', ctc7, v2659);
        const v2666 = stdlib.sub(v1361, v2619);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2626;
        const cv1361 = v2666;
        const cv1362 = v1579;
        const cv1368 = v2654;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      case 'update0_138': {
        const v2697 = v1578[1];
        undefined /* setApiDetails */;
        ;
        const v2774 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2775 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2779 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2780 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2781 = [v2775, v2779, v2780];
        const v2782 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2781);
        ;
        const v2783 = v2782[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2784 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2788 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2789 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2790 = [v2784, v2788, v2789];
        const v2791 = stdlib.Array_set(v2782, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2790);
        ;
        let v2948;
        const v2949 = stdlib.sub(v1390, v1358);
        const v2950 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2950) {
          v2948 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2951 = stdlib.mul(v2949, v1321);
          const v2952 = stdlib.div(v2951, v1361);
          const v2953 = stdlib.add(v1359, v2952);
          v2948 = v2953;
          }
        const v2954 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
        const v2955 = stdlib.fromSome(v2954, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2956 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
        const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2958 = stdlib.sub(v2948, v2957);
        const v2959 = stdlib.mul(v2955, v2958);
        const v2960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
        const v2961 = stdlib.fromSome(v2960, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2962 = stdlib.add(v2959, v2961);
        await stdlib.mapSet(map1, v1577, v2962);
        await stdlib.mapSet(map2, v1577, v2948);
        null;
        const v2968 = {
          reward: v2962,
          staked: v2955
          };
        await txn3.getOutput('update', 'v2968', ctc7, v2968);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2948;
        const cv1361 = v1361;
        const cv1362 = v1579;
        const cv1368 = v2791;
        const cv1369 = v1369;
        
        v1357 = cv1357;
        v1358 = cv1358;
        v1359 = cv1359;
        v1361 = cv1361;
        v1362 = cv1362;
        v1368 = cv1368;
        v1369 = cv1369;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1358, v1359, v1361, v1368, v1369],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1362,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:359:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2989, time: v2988, didSend: v1042, from: v2987 } = txn3;
      
      ;
      const v2991 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '1')];
      const v2992 = v2991[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '0')];
      const v2993 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
      const v2994 = v2993[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1369,
        kind: 'from',
        to: v1315,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v2992,
        kind: 'from',
        to: v1315,
        tok: v1317
        });
      sim_r.txns.push({
        amt: v2994,
        kind: 'from',
        to: v1315,
        tok: v1316
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1317
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1316
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2989, time: v2988, didSend: v1042, from: v2987 } = txn3;
  ;
  const v2991 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '1')];
  const v2992 = v2991[stdlib.checkedBigNumberify('./index.rsh:360:32:application', stdlib.UInt_max, '0')];
  const v2993 = v1368[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
  const v2994 = v2993[stdlib.checkedBigNumberify('./index.rsh:360:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_138: ctc8,
    setTime0_138: ctc9,
    stake0_138: ctc9,
    unstake0_138: ctc9,
    update0_138: ctc8
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1424 = ctc.selfAddress();
  const v1426 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:289:10:application call to [unknown function] (defined at: ./index.rsh:289:10:function exp)', 'at ./index.rsh:179:21:application call to "runclaim0_138" (defined at: ./index.rsh:287:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1428 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1424), null);
  const v1429 = stdlib.fromSome(v1428, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
  const v1430 = v1368[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '1')];
  const v1431 = v1430[stdlib.checkedBigNumberify('./index.rsh:290:37:application', stdlib.UInt_max, '0')];
  const v1432 = stdlib.lt(v1429, v1431);
  stdlib.assert(v1432, {
    at: './index.rsh:290:14:application',
    fs: ['at ./index.rsh:289:10:application call to [unknown function] (defined at: ./index.rsh:289:10:function exp)', 'at ./index.rsh:289:10:application call to [unknown function] (defined at: ./index.rsh:289:10:function exp)', 'at ./index.rsh:179:21:application call to "runclaim0_138" (defined at: ./index.rsh:287:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: null,
    who: 'claim'
    });
  const v1435 = ['claim0_138', v1426];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1435],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:292:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:292:18:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:292:35:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
      
      switch (v1578[0]) {
        case 'claim0_138': {
          const v1581 = v1578[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1658 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1665 = [v1659, v1663, v1664];
          const v1666 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1665);
          ;
          const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1674 = [v1668, v1672, v1673];
          const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1674);
          ;
          const v1677 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v1678 = stdlib.fromSome(v1677, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v1679 = v1675[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v1680 = v1679[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v1681 = stdlib.lt(v1678, v1680);
          ;
          let v1682;
          const v1683 = stdlib.sub(v1390, v1358);
          const v1684 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v1684) {
            v1682 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1685 = stdlib.mul(v1683, v1321);
            const v1686 = stdlib.div(v1685, v1361);
            const v1687 = stdlib.add(v1359, v1686);
            v1682 = v1687;
            }
          const v1688 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1577), null);
          const v1689 = stdlib.fromSome(v1688, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v1690 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1577), null);
          const v1691 = stdlib.fromSome(v1690, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v1692 = stdlib.sub(v1682, v1691);
          const v1693 = stdlib.mul(v1689, v1692);
          const v1696 = stdlib.add(v1693, v1678);
          await stdlib.simMapSet(sim_r, 1, v1577, v1696);
          await stdlib.simMapSet(sim_r, 2, v1577, v1682);
          await stdlib.simMapSet(sim_r, 1, v1577, stdlib.checkedBigNumberify('./index.rsh:298:25:decimal', stdlib.UInt_max, '0'));
          const v1704 = {
            reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            staked: v1689
            };
          const v1706 = await txn1.getOutput('claim', 'v1704', ctc11, v1704);
          
          const v1713 = stdlib.lt(v1696, v1680);
          if (v1713) {
            const v1719 = stdlib.sub(v1680, v1696);
            const v1722 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1')];
            const v1723 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '2')];
            const v1724 = [v1719, v1722, v1723];
            const v1725 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1'), v1724);
            sim_r.txns.push({
              amt: v1696,
              kind: 'from',
              to: v1577,
              tok: v1317
              });
            null;
            const v5710 = v1357;
            const v5711 = v1390;
            const v5712 = v1682;
            const v5713 = v1361;
            const v5715 = v1725;
            const v5716 = v1369;
            const v5717 = stdlib.lt(v1357, v1319);
            if (v5717) {
              const v5719 = v1357;
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          else {
            null;
            const v5728 = v1357;
            const v5729 = v1390;
            const v5730 = v1682;
            const v5731 = v1361;
            const v5733 = v1675;
            const v5734 = v1369;
            const v5735 = stdlib.lt(v1357, v1319);
            if (v5735) {
              const v5737 = v1357;
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1578[1];
          
          break;
          }
        case 'stake0_138': {
          const v2139 = v1578[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2418 = v1578[1];
          
          break;
          }
        case 'update0_138': {
          const v2697 = v1578[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
  switch (v1578[0]) {
    case 'claim0_138': {
      const v1581 = v1578[1];
      undefined /* setApiDetails */;
      ;
      const v1658 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1665 = [v1659, v1663, v1664];
      const v1666 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1665);
      ;
      const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1674 = [v1668, v1672, v1673];
      const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1674);
      ;
      const v1677 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v1678 = stdlib.fromSome(v1677, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v1679 = v1675[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
      const v1680 = v1679[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
      const v1681 = stdlib.lt(v1678, v1680);
      stdlib.assert(v1681, {
        at: './index.rsh:294:14:application',
        fs: ['at ./index.rsh:293:18:application call to [unknown function] (defined at: ./index.rsh:293:18:function exp)'],
        msg: null,
        who: 'claim'
        });
      let v1682;
      const v1683 = stdlib.sub(v1390, v1358);
      const v1684 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v1684) {
        v1682 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1685 = stdlib.mul(v1683, v1321);
        const v1686 = stdlib.div(v1685, v1361);
        const v1687 = stdlib.add(v1359, v1686);
        v1682 = v1687;
        }
      const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
      const v1689 = stdlib.fromSome(v1688, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v1690 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
      const v1691 = stdlib.fromSome(v1690, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v1692 = stdlib.sub(v1682, v1691);
      const v1693 = stdlib.mul(v1689, v1692);
      const v1696 = stdlib.add(v1693, v1678);
      await stdlib.mapSet(map1, v1577, v1696);
      await stdlib.mapSet(map2, v1577, v1682);
      await stdlib.mapSet(map1, v1577, stdlib.checkedBigNumberify('./index.rsh:298:25:decimal', stdlib.UInt_max, '0'));
      const v1704 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        staked: v1689
        };
      const v1706 = await txn1.getOutput('claim', 'v1704', ctc11, v1704);
      if (v817) {
        stdlib.protect(ctc0, await interact.out(v1581, v1706), {
          at: './index.rsh:288:7:application',
          fs: ['at ./index.rsh:288:7:application call to [unknown function] (defined at: ./index.rsh:288:7:function exp)', 'at ./index.rsh:301:17:application call to "callback" (defined at: ./index.rsh:293:18:function exp)', 'at ./index.rsh:293:18:application call to [unknown function] (defined at: ./index.rsh:293:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v1713 = stdlib.lt(v1696, v1680);
      if (v1713) {
        const v1719 = stdlib.sub(v1680, v1696);
        const v1722 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1')];
        const v1723 = v1679[stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '2')];
        const v1724 = [v1719, v1722, v1723];
        const v1725 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:303:54:application', stdlib.UInt_max, '1'), v1724);
        ;
        null;
        const v5710 = v1357;
        const v5711 = v1390;
        const v5712 = v1682;
        const v5713 = v1361;
        const v5715 = v1725;
        const v5716 = v1369;
        const v5717 = stdlib.lt(v1357, v1319);
        if (v5717) {
          const v5719 = v1357;
          return;
          }
        else {
          null;
          return;
          }}
      else {
        null;
        const v5728 = v1357;
        const v5729 = v1390;
        const v5730 = v1682;
        const v5731 = v1361;
        const v5733 = v1675;
        const v5734 = v1369;
        const v5735 = stdlib.lt(v1357, v1319);
        if (v5735) {
          const v5737 = v1357;
          return;
          }
        else {
          null;
          return;
          }}
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1578[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2139 = v1578[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2418 = v1578[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2697 = v1578[1];
      return;
      break;
      }
    }
  
  
  };
export async function setTime(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for setTime expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for setTime expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_138: ctc9,
    setTime0_138: ctc8,
    stake0_138: ctc8,
    unstake0_138: ctc8,
    update0_138: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1447 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:334:15:application call to [unknown function] (defined at: ./index.rsh:334:15:function exp)', 'at ./index.rsh:179:21:application call to "runsetTime0_138" (defined at: ./index.rsh:332:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:332:9:spread', stdlib.UInt_max, '0')];
  const v1450 = stdlib.gt(v1448, v1357);
  const v1451 = stdlib.le(v1448, v1319);
  const v1452 = v1450 ? v1451 : false;
  stdlib.assert(v1452, {
    at: './index.rsh:335:14:application',
    fs: ['at ./index.rsh:334:15:application call to [unknown function] (defined at: ./index.rsh:334:15:function exp)', 'at ./index.rsh:334:15:application call to [unknown function] (defined at: ./index.rsh:334:15:function exp)', 'at ./index.rsh:179:21:application call to "runsetTime0_138" (defined at: ./index.rsh:332:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1455 = ['setTime0_138', v1447];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1455],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:337:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:337:19:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:337:36:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
      
      switch (v1578[0]) {
        case 'claim0_138': {
          const v1581 = v1578[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1578[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v1937 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1938 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1942 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1943 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1944 = [v1938, v1942, v1943];
          const v1945 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1944);
          ;
          const v1946 = v1945[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1951 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1952 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1953 = [v1947, v1951, v1952];
          const v1954 = stdlib.Array_set(v1945, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1953);
          ;
          const v2010 = v1860[stdlib.checkedBigNumberify('./index.rsh:332:9:spread', stdlib.UInt_max, '0')];
          const v2011 = stdlib.gt(v2010, v1357);
          const v2012 = stdlib.le(v2010, v1319);
          const v2013 = v2011 ? v2012 : false;
          ;
          const v2014 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1577), null);
          const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2016 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2018 = {
            reward: v2017,
            staked: v2015
            };
          const v2020 = await txn1.getOutput('setTime', 'v2018', ctc11, v2018);
          
          const v5854 = v2010;
          const v5855 = v1358;
          const v5856 = v1359;
          const v5857 = v1361;
          const v5859 = v1954;
          const v5860 = v1369;
          const v5861 = stdlib.lt(v2010, v1319);
          if (v5861) {
            const v5863 = v2010;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_138': {
          const v2139 = v1578[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2418 = v1578[1];
          
          break;
          }
        case 'update0_138': {
          const v2697 = v1578[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
  switch (v1578[0]) {
    case 'claim0_138': {
      const v1581 = v1578[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1578[1];
      undefined /* setApiDetails */;
      ;
      const v1937 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1938 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1942 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1943 = v1937[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1944 = [v1938, v1942, v1943];
      const v1945 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1944);
      ;
      const v1946 = v1945[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1947 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1951 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1952 = v1946[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1953 = [v1947, v1951, v1952];
      const v1954 = stdlib.Array_set(v1945, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1953);
      ;
      const v2010 = v1860[stdlib.checkedBigNumberify('./index.rsh:332:9:spread', stdlib.UInt_max, '0')];
      const v2011 = stdlib.gt(v2010, v1357);
      const v2012 = stdlib.le(v2010, v1319);
      const v2013 = v2011 ? v2012 : false;
      stdlib.assert(v2013, {
        at: './index.rsh:339:14:application',
        fs: ['at ./index.rsh:338:25:application call to [unknown function] (defined at: ./index.rsh:338:25:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v2014 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
      const v2015 = stdlib.fromSome(v2014, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2016 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2018 = {
        reward: v2017,
        staked: v2015
        };
      const v2020 = await txn1.getOutput('setTime', 'v2018', ctc11, v2018);
      if (v817) {
        stdlib.protect(ctc0, await interact.out(v1860, v2020), {
          at: './index.rsh:333:7:application',
          fs: ['at ./index.rsh:333:7:application call to [unknown function] (defined at: ./index.rsh:333:7:function exp)', 'at ./index.rsh:340:17:application call to "callback" (defined at: ./index.rsh:338:25:function exp)', 'at ./index.rsh:338:25:application call to [unknown function] (defined at: ./index.rsh:338:25:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v5854 = v2010;
      const v5855 = v1358;
      const v5856 = v1359;
      const v5857 = v1361;
      const v5859 = v1954;
      const v5860 = v1369;
      const v5861 = stdlib.lt(v2010, v1319);
      if (v5861) {
        const v5863 = v2010;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'stake0_138': {
      const v2139 = v1578[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2418 = v1578[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2697 = v1578[1];
      return;
      break;
      }
    }
  
  
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_138: ctc9,
    setTime0_138: ctc8,
    stake0_138: ctc8,
    unstake0_138: ctc8,
    update0_138: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1402 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:237:11:application call to [unknown function] (defined at: ./index.rsh:237:11:function exp)', 'at ./index.rsh:179:21:application call to "runstake0_138" (defined at: ./index.rsh:235:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1403 = v1402[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
  const v1407 = ['stake0_138', v1402];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1407],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:240:21:decimal', stdlib.UInt_max, '0'), [[v1403, v1316], [stdlib.checkedBigNumberify('./index.rsh:240:48:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
      
      switch (v1578[0]) {
        case 'claim0_138': {
          const v1581 = v1578[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1578[1];
          
          break;
          }
        case 'stake0_138': {
          const v2139 = v1578[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v2165 = v2139[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
          ;
          const v2216 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2217 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2218 = stdlib.add(v2217, v2165);
          const v2221 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2222 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2223 = [v2218, v2221, v2222];
          const v2224 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2223);
          sim_r.txns.push({
            amt: v2165,
            kind: 'to',
            tok: v1316
            });
          const v2225 = v2224[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2226 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2230 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2231 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2232 = [v2226, v2230, v2231];
          const v2233 = stdlib.Array_set(v2224, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2232);
          ;
          let v2307;
          const v2308 = stdlib.sub(v1390, v1358);
          const v2309 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2309) {
            v2307 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2310 = stdlib.mul(v2308, v1321);
            const v2311 = stdlib.div(v2310, v1361);
            const v2312 = stdlib.add(v1359, v2311);
            v2307 = v2312;
            }
          const v2313 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1577), null);
          const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2315 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1577), null);
          const v2316 = stdlib.fromSome(v2315, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2317 = stdlib.sub(v2307, v2316);
          const v2318 = stdlib.mul(v2314, v2317);
          const v2319 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v2320 = stdlib.fromSome(v2319, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2321 = stdlib.add(v2318, v2320);
          await stdlib.simMapSet(sim_r, 1, v1577, v2321);
          await stdlib.simMapSet(sim_r, 2, v1577, v2307);
          const v2325 = stdlib.add(v2314, v2165);
          await stdlib.simMapSet(sim_r, 0, v1577, v2325);
          null;
          const v2330 = {
            reward: v2321,
            staked: v2325
            };
          const v2332 = await txn1.getOutput('stake', 'v2330', ctc11, v2330);
          
          const v2337 = stdlib.add(v1361, v2165);
          const v5980 = v1357;
          const v5981 = v1390;
          const v5982 = v2307;
          const v5983 = v2337;
          const v5985 = v2233;
          const v5986 = v1369;
          const v5987 = stdlib.lt(v1357, v1319);
          if (v5987) {
            const v5989 = v1357;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_138': {
          const v2418 = v1578[1];
          
          break;
          }
        case 'update0_138': {
          const v2697 = v1578[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
  switch (v1578[0]) {
    case 'claim0_138': {
      const v1581 = v1578[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1578[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2139 = v1578[1];
      undefined /* setApiDetails */;
      const v2165 = v2139[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
      ;
      const v2216 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2217 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2218 = stdlib.add(v2217, v2165);
      const v2221 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2222 = v2216[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2223 = [v2218, v2221, v2222];
      const v2224 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2223);
      ;
      const v2225 = v2224[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2226 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2230 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2231 = v2225[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2232 = [v2226, v2230, v2231];
      const v2233 = stdlib.Array_set(v2224, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2232);
      ;
      let v2307;
      const v2308 = stdlib.sub(v1390, v1358);
      const v2309 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2309) {
        v2307 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2310 = stdlib.mul(v2308, v1321);
        const v2311 = stdlib.div(v2310, v1361);
        const v2312 = stdlib.add(v1359, v2311);
        v2307 = v2312;
        }
      const v2313 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
      const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2315 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
      const v2316 = stdlib.fromSome(v2315, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2317 = stdlib.sub(v2307, v2316);
      const v2318 = stdlib.mul(v2314, v2317);
      const v2319 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v2320 = stdlib.fromSome(v2319, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2321 = stdlib.add(v2318, v2320);
      await stdlib.mapSet(map1, v1577, v2321);
      await stdlib.mapSet(map2, v1577, v2307);
      const v2325 = stdlib.add(v2314, v2165);
      await stdlib.mapSet(map0, v1577, v2325);
      null;
      const v2330 = {
        reward: v2321,
        staked: v2325
        };
      const v2332 = await txn1.getOutput('stake', 'v2330', ctc11, v2330);
      if (v817) {
        stdlib.protect(ctc0, await interact.out(v2139, v2332), {
          at: './index.rsh:236:7:application',
          fs: ['at ./index.rsh:236:7:application call to [unknown function] (defined at: ./index.rsh:236:7:function exp)', 'at ./index.rsh:246:17:application call to "callback" (defined at: ./index.rsh:241:27:function exp)', 'at ./index.rsh:241:27:application call to [unknown function] (defined at: ./index.rsh:241:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v2337 = stdlib.add(v1361, v2165);
      const v5980 = v1357;
      const v5981 = v1390;
      const v5982 = v2307;
      const v5983 = v2337;
      const v5985 = v2233;
      const v5986 = v1369;
      const v5987 = stdlib.lt(v1357, v1319);
      if (v5987) {
        const v5989 = v1357;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'unstake0_138': {
      const v2418 = v1578[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2697 = v1578[1];
      return;
      break;
      }
    }
  
  
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_138: ctc9,
    setTime0_138: ctc8,
    stake0_138: ctc8,
    unstake0_138: ctc8,
    update0_138: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1409 = ctc.selfAddress();
  const v1411 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:258:19:application call to [unknown function] (defined at: ./index.rsh:258:19:function exp)', 'at ./index.rsh:179:21:application call to "rununstake0_138" (defined at: ./index.rsh:256:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1412 = v1411[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
  const v1414 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1409), null);
  const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
  const v1416 = stdlib.le(v1412, v1415);
  stdlib.assert(v1416, {
    at: './index.rsh:259:15:application',
    fs: ['at ./index.rsh:258:19:application call to [unknown function] (defined at: ./index.rsh:258:19:function exp)', 'at ./index.rsh:258:19:application call to [unknown function] (defined at: ./index.rsh:258:19:function exp)', 'at ./index.rsh:179:21:application call to "rununstake0_138" (defined at: ./index.rsh:256:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1417 = v1368[stdlib.checkedBigNumberify('./index.rsh:260:36:application', stdlib.UInt_max, '0')];
  const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:260:36:application', stdlib.UInt_max, '0')];
  const v1419 = stdlib.le(v1412, v1418);
  stdlib.assert(v1419, {
    at: './index.rsh:260:15:application',
    fs: ['at ./index.rsh:258:19:application call to [unknown function] (defined at: ./index.rsh:258:19:function exp)', 'at ./index.rsh:258:19:application call to [unknown function] (defined at: ./index.rsh:258:19:function exp)', 'at ./index.rsh:179:21:application call to "rununstake0_138" (defined at: ./index.rsh:256:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1422 = ['unstake0_138', v1411];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1422],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:262:19:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:262:36:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
      
      switch (v1578[0]) {
        case 'claim0_138': {
          const v1581 = v1578[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1578[1];
          
          break;
          }
        case 'stake0_138': {
          const v2139 = v1578[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2418 = v1578[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2495 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2496 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2500 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2501 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2502 = [v2496, v2500, v2501];
          const v2503 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2502);
          ;
          const v2504 = v2503[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2505 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2509 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2510 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2511 = [v2505, v2509, v2510];
          const v2512 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2511);
          ;
          const v2619 = v2418[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
          const v2620 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1577), null);
          const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2622 = stdlib.le(v2619, v2621);
          ;
          const v2623 = v2512[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
          const v2624 = v2623[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
          const v2625 = stdlib.le(v2619, v2624);
          ;
          let v2626;
          const v2627 = stdlib.sub(v1390, v1358);
          const v2628 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2628) {
            v2626 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2629 = stdlib.mul(v2627, v1321);
            const v2630 = stdlib.div(v2629, v1361);
            const v2631 = stdlib.add(v1359, v2630);
            v2626 = v2631;
            }
          const v2634 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1577), null);
          const v2635 = stdlib.fromSome(v2634, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2636 = stdlib.sub(v2626, v2635);
          const v2637 = stdlib.mul(v2621, v2636);
          const v2638 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v2639 = stdlib.fromSome(v2638, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2640 = stdlib.add(v2637, v2639);
          await stdlib.simMapSet(sim_r, 1, v1577, v2640);
          await stdlib.simMapSet(sim_r, 2, v1577, v2626);
          const v2642 = stdlib.sub(v2621, v2619);
          await stdlib.simMapSet(sim_r, 0, v1577, v2642);
          const v2648 = stdlib.sub(v2624, v2619);
          const v2651 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
          const v2652 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
          const v2653 = [v2648, v2651, v2652];
          const v2654 = stdlib.Array_set(v2512, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2653);
          sim_r.txns.push({
            amt: v2619,
            kind: 'from',
            to: v1577,
            tok: v1316
            });
          null;
          const v2659 = {
            reward: v2640,
            staked: v2642
            };
          const v2661 = await txn1.getOutput('unstake', 'v2659', ctc11, v2659);
          
          const v2666 = stdlib.sub(v1361, v2619);
          const v6106 = v1357;
          const v6107 = v1390;
          const v6108 = v2626;
          const v6109 = v2666;
          const v6111 = v2654;
          const v6112 = v1369;
          const v6113 = stdlib.lt(v1357, v1319);
          if (v6113) {
            const v6115 = v1357;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_138': {
          const v2697 = v1578[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
  switch (v1578[0]) {
    case 'claim0_138': {
      const v1581 = v1578[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1578[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2139 = v1578[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2418 = v1578[1];
      undefined /* setApiDetails */;
      ;
      const v2495 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2496 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2500 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2501 = v2495[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2502 = [v2496, v2500, v2501];
      const v2503 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2502);
      ;
      const v2504 = v2503[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2505 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2509 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2510 = v2504[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2511 = [v2505, v2509, v2510];
      const v2512 = stdlib.Array_set(v2503, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2511);
      ;
      const v2619 = v2418[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
      const v2620 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
      const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2622 = stdlib.le(v2619, v2621);
      stdlib.assert(v2622, {
        at: './index.rsh:265:14:application',
        fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2623 = v2512[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
      const v2624 = v2623[stdlib.checkedBigNumberify('./index.rsh:266:35:application', stdlib.UInt_max, '0')];
      const v2625 = stdlib.le(v2619, v2624);
      stdlib.assert(v2625, {
        at: './index.rsh:266:14:application',
        fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v2626;
      const v2627 = stdlib.sub(v1390, v1358);
      const v2628 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2628) {
        v2626 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2629 = stdlib.mul(v2627, v1321);
        const v2630 = stdlib.div(v2629, v1361);
        const v2631 = stdlib.add(v1359, v2630);
        v2626 = v2631;
        }
      const v2634 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
      const v2635 = stdlib.fromSome(v2634, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2636 = stdlib.sub(v2626, v2635);
      const v2637 = stdlib.mul(v2621, v2636);
      const v2638 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v2639 = stdlib.fromSome(v2638, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2640 = stdlib.add(v2637, v2639);
      await stdlib.mapSet(map1, v1577, v2640);
      await stdlib.mapSet(map2, v1577, v2626);
      const v2642 = stdlib.sub(v2621, v2619);
      await stdlib.mapSet(map0, v1577, v2642);
      const v2648 = stdlib.sub(v2624, v2619);
      const v2651 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
      const v2652 = v2623[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
      const v2653 = [v2648, v2651, v2652];
      const v2654 = stdlib.Array_set(v2512, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2653);
      ;
      null;
      const v2659 = {
        reward: v2640,
        staked: v2642
        };
      const v2661 = await txn1.getOutput('unstake', 'v2659', ctc11, v2659);
      if (v817) {
        stdlib.protect(ctc0, await interact.out(v2418, v2661), {
          at: './index.rsh:257:7:application',
          fs: ['at ./index.rsh:257:7:application call to [unknown function] (defined at: ./index.rsh:257:7:function exp)', 'at ./index.rsh:277:17:application call to "callback" (defined at: ./index.rsh:263:29:function exp)', 'at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      const v2666 = stdlib.sub(v1361, v2619);
      const v6106 = v1357;
      const v6107 = v1390;
      const v6108 = v2626;
      const v6109 = v2666;
      const v6111 = v2654;
      const v6112 = v1369;
      const v6113 = stdlib.lt(v1357, v1319);
      if (v6113) {
        const v6115 = v1357;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'update0_138': {
      const v2697 = v1578[1];
      return;
      break;
      }
    }
  
  
  };
export async function update(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for update expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for update expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_138: ctc8,
    setTime0_138: ctc9,
    stake0_138: ctc9,
    unstake0_138: ctc9,
    update0_138: ctc8
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1439 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:316:9:application call to [unknown function] (defined at: ./index.rsh:316:9:function exp)', 'at ./index.rsh:179:21:application call to "runupdate0_138" (defined at: ./index.rsh:316:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v1443 = ['update0_138', v1439];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1443],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:316:9:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:234:14:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:234:14:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
      
      switch (v1578[0]) {
        case 'claim0_138': {
          const v1581 = v1578[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1578[1];
          
          break;
          }
        case 'stake0_138': {
          const v2139 = v1578[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2418 = v1578[1];
          
          break;
          }
        case 'update0_138': {
          const v2697 = v1578[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v2774 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2775 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2779 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2780 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2781 = [v2775, v2779, v2780];
          const v2782 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2781);
          ;
          const v2783 = v2782[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2784 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2788 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2789 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2790 = [v2784, v2788, v2789];
          const v2791 = stdlib.Array_set(v2782, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2790);
          ;
          let v2948;
          const v2949 = stdlib.sub(v1390, v1358);
          const v2950 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2950) {
            v2948 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2951 = stdlib.mul(v2949, v1321);
            const v2952 = stdlib.div(v2951, v1361);
            const v2953 = stdlib.add(v1359, v2952);
            v2948 = v2953;
            }
          const v2954 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1577), null);
          const v2955 = stdlib.fromSome(v2954, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2956 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1577), null);
          const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2958 = stdlib.sub(v2948, v2957);
          const v2959 = stdlib.mul(v2955, v2958);
          const v2960 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1577), null);
          const v2961 = stdlib.fromSome(v2960, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2962 = stdlib.add(v2959, v2961);
          await stdlib.simMapSet(sim_r, 1, v1577, v2962);
          await stdlib.simMapSet(sim_r, 2, v1577, v2948);
          null;
          const v2968 = {
            reward: v2962,
            staked: v2955
            };
          const v2970 = await txn1.getOutput('update', 'v2968', ctc11, v2968);
          
          const v6232 = v1357;
          const v6233 = v1390;
          const v6234 = v2948;
          const v6235 = v1361;
          const v6237 = v2791;
          const v6238 = v1369;
          const v6239 = stdlib.lt(v1357, v1319);
          if (v6239) {
            const v6241 = v1357;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1578], secs: v1580, time: v1579, didSend: v817, from: v1577 } = txn1;
  switch (v1578[0]) {
    case 'claim0_138': {
      const v1581 = v1578[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1578[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2139 = v1578[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2418 = v1578[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2697 = v1578[1];
      undefined /* setApiDetails */;
      ;
      const v2774 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2775 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2779 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2780 = v2774[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2781 = [v2775, v2779, v2780];
      const v2782 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2781);
      ;
      const v2783 = v2782[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2784 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2788 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2789 = v2783[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2790 = [v2784, v2788, v2789];
      const v2791 = stdlib.Array_set(v2782, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2790);
      ;
      let v2948;
      const v2949 = stdlib.sub(v1390, v1358);
      const v2950 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2950) {
        v2948 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2951 = stdlib.mul(v2949, v1321);
        const v2952 = stdlib.div(v2951, v1361);
        const v2953 = stdlib.add(v1359, v2952);
        v2948 = v2953;
        }
      const v2954 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1577), null);
      const v2955 = stdlib.fromSome(v2954, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2956 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1577), null);
      const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2958 = stdlib.sub(v2948, v2957);
      const v2959 = stdlib.mul(v2955, v2958);
      const v2960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1577), null);
      const v2961 = stdlib.fromSome(v2960, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2962 = stdlib.add(v2959, v2961);
      await stdlib.mapSet(map1, v1577, v2962);
      await stdlib.mapSet(map2, v1577, v2948);
      null;
      const v2968 = {
        reward: v2962,
        staked: v2955
        };
      const v2970 = await txn1.getOutput('update', 'v2968', ctc11, v2968);
      if (v817) {
        stdlib.protect(ctc0, await interact.out(v2697, v2970), {
          at: './index.rsh:317:7:application',
          fs: ['at ./index.rsh:317:7:application call to [unknown function] (defined at: ./index.rsh:317:7:function exp)', 'at ./index.rsh:322:17:application call to "callback" (defined at: ./index.rsh:318:18:function exp)', 'at ./index.rsh:318:18:application call to [unknown function] (defined at: ./index.rsh:318:18:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      const v6232 = v1357;
      const v6233 = v1390;
      const v6234 = v2948;
      const v6235 = v1361;
      const v6237 = v2791;
      const v6238 = v1369;
      const v6239 = stdlib.lt(v1357, v1319);
      if (v6239) {
        const v6241 = v1357;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`, `update()(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`],
    sigs: [`claim()(uint64,uint64)`, `global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`, `update()(uint64,uint64)`]
    },
  appApproval: `BiAVAAEEBQgDICigjQYbvfqL1ASrpp6jCrz138MLq5ryxgi6pcyCApWqrdoD+srupQEwOEBIJgQBAAEBAATlIvHXIjUAMRhBDDoqZEkiWzUBIQRbNQIxGSMSQQAKMQAoIQmvZkIMBjYaABdJQQG7IjUEIzUGSSEKDEAArkkhCwxAAH5JIQwMQABjIQwSRDQBSSUMQAArJRJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0ILuyEFEkQoZClkUEk1A1cgCDQDVygIUDQDVzAIUDQDVzgIUDQDV0AIUDUHQguPIQsSRCo1/4ABBDT/UCEEr1BCAUZJIQ0MQAAQIQ0SRDYaATX/KTT/UEIBLyEKEkQ2GgE1/4ABAzT/UEIBHUkhDgxAAGRJIQ8MQAASIQ8SRCo1/yg0/1AhBK9QQgD9IQ4SRDQBSSUMQAAfJRJEKGQpZFBJNQNXaAg0A1dYCFA0A1dgCFA1B0ILByEFEkQoZClkUEk1A1dYCDQDV0gIUDQDV1AIUDUHQgrnSSEQDEAAeSEQEkQ0AUklDEAANiUSRDYaATX/IjT/iArXVwAJSTX+I1s0/iJVTRYiNP+ICsNXCQlJNf4jWzT+IlVNFlA1B0IKniEFEkQ2GgE1/yI0/4gKoFcACUk1/iNbNP4iVU0WIjT/iAqMVwkJSTX+I1s0/iJVTRZQNQdCCmeBzcj6HhJENhoBNf+AAQI0/1BCAB02GgIXNQQ2GgM2GgEXSSEFDEAHq0kkDEAG9yQSRCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSkpXACA1/yEGWzX+IQdbNf0hEVs1/CESWzX7IRNbNfohFFs1+YFQWzX4gVhbNfeBYFs19oFoWzX1V3AiNfSBkgFbNfOBmgFbNfJJNQU18YAE1Y4dqzTxULA08SJVSYECDEAD+0khBQxAAqZJJAxAARUkEkQ09FcAEUk18FcACDTwVwgIUDTwVxABUDT0VxERUDXvNO9XERE17jT1IhJBAAYiNe1CABA09jTyNPcJNPkLNPUKCDXtIjEAiAlsVwAJSTXrI1s06yJVTUk17DTtIjEAiAlUVxIJSTXqI1s06iJVTQkLIjEAiAk/VwkJSTXqI1s06iJVTQg16zEAKDEAiAknKTTrFlA16klXAAk06lBMVxIJUGYxACgxAIgJCyk07RZQNepXABI06lBmgASVg55OMQBQsIAIAAAAAAAAC5g07BY06xZQULA07BY06xZQNQc0/zT+NP00/DT7NPo0+TT4NPI07TT1MgY071cAETTuVwAINO5XCAhQNO5XEAFQUDTzQgePSDTxVwEINfA09FcAEUk171cACDTvVwgIUDTvVxABUDT0VxERUDXuNO5XERE17TTuVwARNO1XAAg07VcICFA07VcQAVBQNew08Bc16yIxAIgIUVcACUk16SNbNOkiVU016jTrNOoORDTsVwARSTXpIls16DTrNOgORDT1IhJBAAYiNedCABA09jTyNPcJNPkLNPUKCDXnNOo05yIxAIgIA1cSCUk15SNbNOUiVU0JCyIxAIgH7lcJCUk15SNbNOUiVU0INeYxACgxAIgH1ik05hZQNeVJVwAJNOVQTFcSCVBmMQAoMQCIB7opNOcWUDXlVwASNOVQZjTqNOsJNeUxACgxAIgHnSk05RZQNeRXCRI05ExQZrEisgE067ISJLIQMQCyFDT+shGzgATRaXMpMQBQNOsWULCACAAAAAAAAApjNOUWNOYWUFCwNOUWNOYWUDUHNP80/jT9NPw0+zT6NPk0+DTyNOc09TTrCTIGNOg06wkWNOlXCAhQNOlXEAFQNOxXERFQNPNCBgRINPFXAQg18DTwFzXvNPRXABFJNe4iWzTvCBY07lcICFA07lcQAVA09FcREVA17TTvNP6IBwk07VcRETXsNPUiEkEABiI160IAEDT2NPI09wk0+Qs09QoINesiMQCIBrhXAAlJNekjWzTpIlVNSTXqNOsiMQCIBqBXEglJNegjWzToIlVNCQsiMQCIBotXCQlJNegjWzToIlVNCDXpMQAoMQCIBnMpNOkWUDXoSVcACTToUExXEglQZjEAKDEAiAZXKTTrFlA16FcAEjToUGY06jTvCDXoMQAoMQCIBjopNOgWUDXnVwkSNOdMUGaABDGPpQ4xAFA07xZQsIAIAAAAAAAACRo06BY06RZQULA06BY06RZQNQc0/zT+NP00/DT7NPo0+TT4NPI06zT1NO8IMgY07VcAETTsVwAINOxXCAhQNOxXEAFQUDTzQgS2SSMMQADSSDTxVwEINfA09FcAEUk171cACDTvVwgIUDTvVxABUDT0VxERUDXuNO5XERE17TTwF0k17DT4DTTsNPsOEESACAAAAAAAAAfiIjEAiAV2VwAJSTXrI1s06yJVTRYiMQCIBWJXCQlJNesjWzTrIlVNFlBQsCIxAIgFS1cACUk16yNbNOsiVU0WIjEAiAU3VwkJSTXrI1s06yJVTRZQNQc0/zT+NP00/DT7NPo0+TTsNPc09jT1MgY07lcAETTtVwAINO1XCAhQNO1XEAFQUDTzQgPeSDT0VwARSTXwVwAINPBXCAhQNPBXEAFQNPRXERFQNe8071cRETXuNO9XABE07lcACDTuVwgIUDTuVxABUFA17SIxAIgErFcJCUk16yNbNOsiVU017DTtVxERSTXrIls16jTsNOoMRDT1IhJBAAYiNelCABA09jTyNPcJNPkLNPUKCDXpIjEAiARoVwAJSTXnI1s05yJVTUk16DTpIjEAiARQVxIJSTXmI1s05iJVTQkLNOwINecxACgxAIgENCk05xZQNeZJVwAJNOZQTFcSCVBmMQAoMQCIBBgpNOkWUDXmVwASNOZQZjEAKDEAiAQCgAkBAAAAAAAAAAA15klXAAk05lBMVxIJUGaACAAAAAAAAAaoNOgWIQSvUFCwNOgWIQSvUDUHNOc06gxBAE6xIrIBNOeyEiSyEDEAshQ0/bIRsysxAFCwNP80/jT9NPw0+zT6NPk0+DTyNOk09TIGNO1XABE06jTnCRY061cICFA061cQAVBQNPNCAmIrMQBQsDT/NP40/TT8NPs0+jT5NPg08jTpNPUyBjTtNPNCAj5IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBls1/iEHWzX9V2AiNfyABKdlxLSwsSKyATQDgYIBW7III7IQNP+yB7OxIrIBNPxXEREiW7ISJLIQNP+yFDT9shGzsSKyATT8VwARIluyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAkxJIwxAAIcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQdbNf4hE1s1/VdQIjX8gASai5F0sDT8VxERNfs0/TT+iAKCNP8xABJENP80AyEGWzT+NAMhEVs0AyESWzT9NAMhFFsiIiIiMgY0/FcAETT7Ils0/QgWNPtXCAhQNPtXEAFQUCJCAQNIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSiJbNf8hBFs1/oEQWzX9gRhbNfwhBls1+yEHWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsCEIiAHOgRGvSTX5SVA1+DT/NP4TRDT4VwARNfchBK8091cICFA091cQAVA0+FcREVA19iEIiAGbsSKyASKyEiSyEDIKshQ0/7IRszT2VxERNfU09lcAESEErzT1VwgIUDT1VxABUFA19CEIiAFlsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPRQKEsBVwByZ0gjNQEyBjUCQgDXNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT5NPYMQQBONPI08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUDT5FlAoSwFXAH9nKUsBV38jZ0glNQEyBjUCQgBlgARcBkX5sDTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/C2dIIQU1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 27,
  stateKeys: 2,
  stateSize: 162,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1316",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1317",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1318",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1320",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1321",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1316",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1317",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1318",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1320",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1321",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_138",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_setTime0_138",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_stake0_138",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_unstake0_138",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_138",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1578",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1704",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2018",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2330",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2659",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2968",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "claimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "noRewardsLeft",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "staked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "unstaked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "updated",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_138",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_setTime0_138",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_stake0_138",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_unstake0_138",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_138",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1578",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claim",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "global",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "totalStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastUpdateBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenStored",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initial",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "stakeToken",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "rewardToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "beginBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalRewardAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct T7",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6254",
        "type": "address"
      }
    ],
    "name": "local",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "setTime",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "stake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "unstake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "update",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200485b3803806200485b83398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b61410280620007596000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063a2e6204511610061578063a2e620451461025e578063a694fc3a14610266578063ab53f2c614610279578063bb806dc91461029c578063cadc2e7a146102fc57005b806373b4522c146101df578063817d57f3146101f25780638323075714610212578063a05f99061461022757005b80633bc5b7bf116100c85780633bc5b7bf146101845780633beb26c4146101b15780634e71d92d146101c457806373394993146101cc57005b80630ff1680e146100ff5780631e93b0f11461013f5780632c10a1591461015e5780632e17de781461017157005b366100fd57005b005b34801561010b57600080fd5b5061011f61011a366004613779565b61031c565b604080518251815260209283015192810192909252015b60405180910390f35b34801561014b57600080fd5b506003545b604051908152602001610136565b6100fd61016c366004613796565b6105f3565b61011f61017f3660046137ae565b610617565b34801561019057600080fd5b506101a461019f366004613779565b610681565b60405161013691906137dd565b61011f6101bf3660046137ae565b6106ad565b61011f610716565b6100fd6101da366004613814565b610772565b6100fd6101ed366004613796565b610792565b3480156101fe57600080fd5b506101a461020d366004613779565b6107b2565b34801561021e57600080fd5b50600154610150565b34801561023357600080fd5b5061023c6107d8565b6040805182518152602080840151908201529181015190820152606001610136565b61011f610abc565b61011f6102743660046137ae565b610b1b565b34801561028557600080fd5b5061028e610b85565b604051610136929190613852565b3480156102a857600080fd5b506102b1610c22565b604051610136919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b34801561030857600080fd5b506101a4610317366004613779565b610ea8565b6040805180820190915260008082526020820152600160005414156103eb5760006002805461034a9061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546103769061388c565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db9190613a53565b90506103e960006009610ece565b505b60036000541415610537576000600280546104059061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546104319061388c565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050508060200190518101906104969190613afd565b90506104b8604080516060810182526000602082018181529282015290815290565b60016104c385610ef4565b5160018111156104d5576104d56137c7565b146104e15760006104ef565b6104ea84610ef4565b604001515b81515260016104fd85610fc6565b51600181111561050f5761050f6137c7565b1461051b576000610529565b61052484610fc6565b604001515b815160200152519392505050565b600560005414156105e2576000600280546105519061388c565b80601f016020809104026020016040519081016040528092919081815260200182805461057d9061388c565b80156105ca5780601f1061059f576101008083540402835291602001916105ca565b820191906000526020600020905b8154815290600101906020018083116105ad57829003601f168201915b50505050508060200190518101906104969190613baa565b6105ee60006009610ece565b919050565b6105fb612fed565b61061361060d36849003840184613c7a565b82611053565b5050565b6040805180820190915260008082526020820152610633612fed565b61063b613093565b6106436130ad565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261067582846112da565b50506060015192915050565b60408051606081018252600080825260208201819052918101919091526106a782610ef4565b92915050565b60408051808201909152600080825260208201526106c9612fed565b6106d1613093565b6106d96130ad565b60408051602080820183528782528383019190915260018352815180820190925282825283015261070a82846112da565b50506020015192915050565b6040805180820190915260008082526020820152610732612fed565b61073a613093565b6107426130ad565b60006020828101829052908252604080518083019091528281529083015261076a82846112da565b505051919050565b61077a612fed565b61061361078c36849003840184613cf4565b826112da565b61079a612fed565b6106136107ac36849003840184613c7a565b8261294f565b60408051606081018252600080825260208201819052918101919091526106a782612b00565b6107fc60405180606001604052806000815260200160008152602001600081525090565b600160005414156108b7576000600280546108169061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546108429061388c565b801561088f5780601f106108645761010080835404028352916020019161088f565b820191906000526020600020905b81548152906001019060200180831161087257829003601f168201915b50505050508060200190518101906108a79190613a53565b90506108b560006007610ece565b505b600360005414156109b1576000600280546108d19061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546108fd9061388c565b801561094a5780601f1061091f5761010080835404028352916020019161094a565b820191906000526020600020905b81548152906001019060200180831161092d57829003601f168201915b50505050508060200190518101906109629190613afd565b905061098b60408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60056000541415610aad576000600280546109cb9061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546109f79061388c565b8015610a445780601f10610a1957610100808354040283529160200191610a44565b820191906000526020600020905b815481529060010190602001808311610a2757829003601f168201915b5050505050806020019051810190610a5c9190613baa565b9050610a8560408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610ab960006007610ece565b90565b6040805180820190915260008082526020820152610ad8612fed565b610ae0613093565b610ae86130ad565b600060a08201526004815260408051602080820190925282815290830152610b1082846112da565b505060800151919050565b6040805180820190915260008082526020820152610b37612fed565b610b3f613093565b610b476130ad565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610b7982846112da565b50506040015192915050565b600060606000546002808054610b9a9061388c565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc69061388c565b8015610c135780601f10610be857610100808354040283529160200191610c13565b820191906000526020600020905b815481529060010190602001808311610bf657829003601f168201915b50505050509050915091509091565b610c2a6130fe565b60016000541415610ce557600060028054610c449061388c565b80601f0160208091040260200160405190810160405280929190818152602001828054610c709061388c565b8015610cbd5780601f10610c9257610100808354040283529160200191610cbd565b820191906000526020600020905b815481529060010190602001808311610ca057829003601f168201915b5050505050806020019051810190610cd59190613a53565b9050610ce360006008610ece565b505b60036000541415610df157600060028054610cff9061388c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b9061388c565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050806020019051810190610d909190613afd565b9050610d9a61313f565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60056000541415610e9c57600060028054610e0b9061388c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e379061388c565b8015610e845780601f10610e5957610100808354040283529160200191610e84565b820191906000526020600020905b815481529060010190602001808311610e6757829003601f168201915b5050505050806020019051810190610d909190613baa565b610ab960006008610ece565b60408051606081018252600080825260208201819052918101919091526106a782610fc6565b816106135760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610f4057610f406137c7565b1415610fb7576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610f8157610f816137c7565b6001811115610f9257610f926137c7565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611012576110126137c7565b1415610fb7576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f8157610f816137c7565b611063600160005414600f610ece565b815161107e90158061107757508251600154145b6010610ece565b6000808055600280546110909061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546110bc9061388c565b80156111095780601f106110de57610100808354040283529160200191611109565b820191906000526020600020905b8154815290600101906020018083116110ec57829003601f168201915b50505050508060200190518101906111219190613a53565b905061114a60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111953415600c610ece565b60a082015160e083015160200151516111ae9190613de4565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516111f7916111f091339190612b8d565b600d610ece565b815161120f906001600160a01b03163314600e610ece565b611217613152565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015282850180516000908190528151909401849052805190940183905283519091019190915290514391015260e083015182516112b49190600190612ba5565b60208201805160a0019190915251600060c0909101526112d381612c19565b5050505050565b6112ea6005600054146027610ece565b81516113059015806112fe57508251600154145b6028610ece565b6000808055600280546113179061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546113439061388c565b80156113905780601f1061136557610100808354040283529160200191611390565b820191906000526020600020905b81548152906001019060200180831161137357829003601f168201915b50505050508060200190518101906113a89190613baa565b90506113b26131a0565b7fa9e586c84135dd0eb80dcde96cd5b610fdecd3cab68ce1fd88af69e25afae205846040516113e19190613dfc565b60405180910390a16000602085015151516004811115611403576114036137c7565b14156119675761141534156014610ece565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516114519190600090612ba5565b816020018190525061147361146c3384602001516000612b8d565b6015610ece565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516114ba9190600190612ba5565b81606001819052506114dc6114d53384604001516000612b8d565b6016610ece565b60016114e733610fc6565b5160018111156114f9576114f96137c7565b14611505576000611513565b61150e33610fc6565b604001515b608082018190526060820151602001515161153091106017610ece565b61014082015161154657600060a0820152611591565b8161014001518260c00151836101000151846101a001516115679190613e65565b6115719190613e7c565b61157b9190613e9b565b82610120015161158b9190613de4565b60a08201525b600161159c33610ef4565b5160018111156115ae576115ae6137c7565b146115ba5760006115c8565b6115c333610ef4565b604001515b60c0820152608081015160016115dd33612b00565b5160018111156115ef576115ef6137c7565b146115fb576000611609565b61160433612b00565b604001515b8260a001516116189190613e65565b8260c001516116279190613e7c565b6116319190613de4565b60e08201908152336000908152600560208181526040808420805460ff1990811660019081178355965187830190815560068552838720805483168917815560a08a0151908901559484528154169095179094559082905560c084015161010085018051919091528051820192909252905182518151815290820151918101919091527fb349de7cf1cf3860b151a53fdb911c6b70f46b4b5add5f669d302ece1a416672910160405180910390a161010081015183526060810151602001515160e082015110156118725760e0810151606082015160200151516117159190613e65565b610120820180519190915260608201805160209081015181015183518201529051015160409081015191519115159181019190915282015160e082015161175e91903390612dee565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a1611799613152565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c08089015187519091015260e08801518487018051919091526101a0890151815190950194909452860151835190940193909352610140860151825182015290514392019190915282015161012083015161184a9190600190612ba5565b60208201805160a00191909152610180840151905160c0015261186c81612c19565b50612949565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a16118ad613152565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e08901518588018051919091526101a08a01518151909601959095528782015185519096019590955261014088015184518401528351439201919091529085015182519091015261018085015190519091015261186c81612c19565b6001602085015151516004811115611981576119816137c7565b1415611c2157602084015151604001516101408201526119a334156018610ece565b6101608281018051515191830180519290925280515160209081015183519091015280515160409081015183519015159101525190516119e69190600090612ba5565b816101800181905250611a09611a023384602001516000612b8d565b6019610ece565b61018081018051602090810151516101a084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611a6090611a599033906000612b8d565b601a610ece565b611a948260e001518261014001516000015111611a7e576000611a8d565b60808301516101408301515111155b601b610ece565b6001611a9f33610ef4565b516001811115611ab157611ab16137c7565b14611abd576000611acb565b611ac633610ef4565b604001515b6101c0820151526001611add33610fc6565b516001811115611aef57611aef6137c7565b14611afb576000611b09565b611b0433610fc6565b604001515b6101c08201805160209081019290925251604080518251815291830151928201929092527f175ef8e1dc2e1ae477fc225364677d595d8ab4ec145677c7d9530e87343e5544910160405180910390a16101c08101516020840152611b6b613152565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015261014080870151518487018051919091526101008901518151909501949094526101208801518451909501949094529286015182519091015251439101526101808201516101a083015161184a9190600190612ba5565b6002602085015151516004811115611c3b57611c3b6137c7565b141561208657602084015151606001516101e0820152611c5d3415601c610ece565b6101e0810151516101608301515151611c769190613de4565b610200820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611cb69190600090612ba5565b61022082015260208201516101e082015151611cdf91611cd891339190612b8d565b601d610ece565b610220810180516020908101515161024084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611d3690611d2f9033906000612b8d565b601e610ece565b610140820151611d4d576000610260820152611d99565b8161014001518260c00151836101000151846101a00151611d6e9190613e65565b611d789190613e7c565b611d829190613e9b565b826101200151611d929190613de4565b6102608201525b6001611da433610ef4565b516001811115611db657611db66137c7565b14611dc2576000611dd0565b611dcb33610ef4565b604001515b6102808201526001611de133610fc6565b516001811115611df357611df36137c7565b14611dff576000611e0d565b611e0833610fc6565b604001515b6001611e1833612b00565b516001811115611e2a57611e2a6137c7565b14611e36576000611e44565b611e3f33612b00565b604001515b826102600151611e549190613e65565b826102800151611e649190613e7c565b611e6e9190613de4565b6102a082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556102608301519101556101e081015151610280820151611ed09190613de4565b6102c0820190815233600081815260046020908152604091829020805460ff19166001908117825594519401939093556101e0840151518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a16102c08101516102e082018051919091526102a0820151815160200152516040517f70196a38bb29c2d02b54361b0c10483e0ab8362725127b9a905e53db8833156d91611f9c91815181526020918201519181019190915260400190565b60405180910390a16102e08101516040840152611fb7613152565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526102608401519051909101526101e0820151516101408401516120589190613de4565b60208201805160600191909152514360809091015261022082015161024083015161184a9190600190612ba5565b60036020850151515160048111156120a0576120a06137c7565b141561257757602084015151608001516103008201526120c23415601f610ece565b61016082018051515161032083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516121079190600090612ba5565b81610340018190525061212a6121233384602001516000612b8d565b6020610ece565b61034081018051602090810151516103608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516121759190600190612ba5565b8161038001819052506121986121913384604001516000612b8d565b6021610ece565b60016121a333610ef4565b5160018111156121b5576121b56137c7565b146121c15760006121cf565b6121ca33610ef4565b604001515b6103a08201819052610300820151516121eb9110156022610ece565b6103808101515151610300820151516122079110156023610ece565b61014082015161221e5760006103c082015261226a565b8161014001518260c00151836101000151846101a0015161223f9190613e65565b6122499190613e7c565b6122539190613e9b565b8261012001516122639190613de4565b6103c08201525b600161227533610fc6565b516001811115612287576122876137c7565b146122935760006122a1565b61229c33610fc6565b604001515b60016122ac33612b00565b5160018111156122be576122be6137c7565b146122ca5760006122d8565b6122d333612b00565b604001515b826103c001516122e89190613e65565b826103a001516122f89190613e7c565b6123029190613de4565b6103e082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556103c0830151910155610300810151516103a08201516123649190613e65565b6104008201908152336000908152600460205260409020805460ff19166001908117825591519101556103008101515161038082015151516123a69190613e65565b6104208201805191909152610380820180515160209081015183518201529051516040908101519251921515920191909152820151610300820151516123ee91903390612dee565b610300810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a161040081015161044082018051919091526103e0820151815160200152516040517fd8598cb6cd0da034154a0d6ecd16a656cb4e0b2015cdb9479168a671438450559161248d91815181526020918201519181019190915260400190565b60405180910390a161044081015160608401526124a8613152565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526103c0840151905190910152610300820151516101408401516125499190613e65565b60208201805160600191909152514360809091015261038082015161042083015161184a9190600090612ba5565b6004602085015151516004811115612591576125916137c7565b1415612949576125a334156024610ece565b61016082018051515161046083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516125e89190600090612ba5565b81610480018190525061260b6126043384602001516000612b8d565b6025610ece565b61048081018051602090810151516104a0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516126629061265b9033906000612b8d565b6026610ece565b6101408201516126795760006104c08201526126c5565b8161014001518260c00151836101000151846101a0015161269a9190613e65565b6126a49190613e7c565b6126ae9190613e9b565b8261012001516126be9190613de4565b6104c08201525b60016126d033610ef4565b5160018111156126e2576126e26137c7565b146126ee5760006126fc565b6126f733610ef4565b604001515b6104e0820152600161270d33610fc6565b51600181111561271f5761271f6137c7565b1461272b576000612739565b61273433610fc6565b604001515b600161274433612b00565b516001811115612756576127566137c7565b14612762576000612770565b61276b33612b00565b604001515b826104c001516127809190613e65565b826104e001516127909190613e7c565b61279a9190613de4565b6105008201908152336000818152600560209081526040808320805460ff199081166001908117835596519187019190915560068352928190208054909316851783556104c0860151929094019190915591519081527f1d2f67e3c99742b6b589e3af77fe96ec360dc58b8dca7d3d9a6ee9b64385a2e8910160405180910390a16104e08101516105208201805191909152610500820151815160200152516040517f75cea7733050a2c903f9a18653c546be2f938d4e2e1283fa7c7957829b69d0f99161287991815181526020918201519181019190915260400190565b60405180910390a16105208101516080840152612894613152565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e08701518386018051919091526101a08801518151909401939093526104c086015183519094019390935261014086015182519091015251439101526104808201516104a083015161184a9190600190612ba5565b50505050565b61295f6003600054146012610ece565b815161297a90158061297357508251600154145b6013610ece565b60008080556002805461298c9061388c565b80601f01602080910402602001604051908101604052809291908181526020018280546129b89061388c565b8015612a055780601f106129da57610100808354040283529160200191612a05565b820191906000526020600020905b8154815290600101906020018083116129e857829003601f168201915b5050505050806020019051810190612a1d9190613afd565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1612a6b34156011610ece565b80516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612aa9573d6000803e3d6000fd5b5060408101518151610120830151612acb92919060015b602002015151612dee565b60208101518151610120830151612ae59291906000612ac0565b60008080556001819055612afb906002906134f2565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612b4c57612b4c6137c7565b1415610fb7576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610f8157610f816137c7565b6000612b9b83853085612e02565b90505b9392505050565b612bad61352c565b60005b6002811015612bf957848160028110612bcb57612bcb613db8565b6020020151828260028110612be257612be2613db8565b602002015280612bf181613ebd565b915050612bb0565b5081818460028110612c0d57612c0d613db8565b60200201529392505050565b8051608001516020820151511015612d1657612c33613577565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152855160c0908101518187015283870180515160e0880152805185015161010088015280518601516101208801528051909301516101408701528251909101516101608601528151015161018085015251516101a08401526005600055436001559051612cf291839101613f16565b60405160208183030381529060405260029080519060200190612afb929190613607565b6040517fde386e12d6c97acd73514c71490d6d5114424ddc93ef1080bd05ffe08c20868d90600090a1612d4761368b565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152828601805184015160c080880191909152815186015160e08801528151909301516101008701528051909101516101208601525101516101408401526003600055436001559051612cf291839101613fe6565b50565b612df9838383612edc565b612afb57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612e6991614093565b60006040518083038185875af1925050503d8060008114612ea6576040519150601f19603f3d011682016040523d82523d6000602084013e612eab565b606091505b5091509150612ebc82826001612fad565b5080806020019051810190612ed191906140af565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612f3b91614093565b60006040518083038185875af1925050503d8060008114612f78576040519150601f19603f3d011682016040523d82523d6000602084013e612f7d565b606091505b5091509150612f8e82826002612fad565b5080806020019051810190612fa391906140af565b9695505050505050565b60608315612fbc575081612b9e565b825115612fcc5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610eeb565b905290565b6040805160e08101909152600060a0820181815260c08301919091528190815260200161302d604051806040016040528060008152602001600081525090565b815260200161304f604051806040016040528060008152602001600081525090565b8152602001613071604051806040016040528060008152602001600081525090565b8152602001612fe8604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001612fe8613706565b6040805160c081018252600080825260208083018290528351808201855282815283850152835180820185528281526060840152835190810190935282529060808201908152600060209091015290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280612fe86130fe565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925290815260208101612fe8613719565b604080516105a081019091526000610540820181815261056083018290526105808301919091528152602081016131d561352c565b8152604080516060810182526000808252602082810182905292820152910190815260200161320261352c565b815260200160008152602001600081526020016000815260200160008152602001613240604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161327b6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016132a861352c565b815260408051606081018252600080825260208281018290529282015291019081526020016132ea604051806040016040528060008152602001600081525090565b81526020016133056040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161333261352c565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200160008152602001613390604051806040016040528060008152602001600081525090565b81526020016133ab6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016133d861352c565b8152604080516060810182526000808252602082810182905292820152910190815260200161340561352c565b81526020016000815260200160008152602001600081526020016000815260200161344c604051806060016040528060008152602001600081526020016000151581525090565b815260200161346e604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161349b61352c565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001612fe8604051806040016040528060008152602001600081525090565b5080546134fe9061388c565b6000825580601f1061350e575050565b601f016020900490600052602060002090810190612deb919061374f565b60405180604001604052806002905b613561604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161353b5790505090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016135f361352c565b815260200160008152602001600081525090565b8280546136139061388c565b90600052602060002090601f016020900481019282613635576000855561367b565b82601f1061364e57805160ff191683800117855561367b565b8280016001018555821561367b579182015b8281111561367b578251825591602001919060010190613660565b5061368792915061374f565b5090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016136f961352c565b8152602001600081525090565b6040518060200160405280612fe86130ad565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016136f961352c565b5b808211156136875760008155600101613750565b6001600160a01b0381168114612deb57600080fd5b60006020828403121561378b57600080fd5b8135612b9e81613764565b6000604082840312156137a857600080fd5b50919050565b6000602082840312156137c057600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106137f4576137f46137c7565b808352506020830151151560208301526040830151604083015292915050565b600060e082840312156137a857600080fd5b60005b83811015613841578181015183820152602001613829565b838111156129495750506000910152565b8281526040602082015260008251806040840152613877816060850160208701613826565b601f01601f1916919091016060019392505050565b600181811c908216806138a057607f821691505b602082108114156137a857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156138fa576138fa6138c1565b60405290565b6040516060810167ffffffffffffffff811182821017156138fa576138fa6138c1565b604051610160810167ffffffffffffffff811182821017156138fa576138fa6138c1565b6040516101c0810167ffffffffffffffff811182821017156138fa576138fa6138c1565b6040516020810167ffffffffffffffff811182821017156138fa576138fa6138c1565b60405160c0810167ffffffffffffffff811182821017156138fa576138fa6138c1565b80516105ee81613764565b8015158114612deb57600080fd5b600082601f8301126139db57600080fd5b6139e36138d7565b8060c08401858111156139f557600080fd5b845b81811015613a485760608188031215613a105760008081fd5b613a18613900565b8151815260208083015181830152604080840151613a35816139bc565b90830152908552909301926060016139f7565b509095945050505050565b60006101a08284031215613a6657600080fd5b604051610100810181811067ffffffffffffffff82111715613a8a57613a8a6138c1565b6040528251613a9881613764565b8152613aa6602084016139b1565b6020820152613ab7604084016139b1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613af18460e085016139ca565b60e08201529392505050565b60006102008284031215613b1057600080fd5b613b18613923565b613b21836139b1565b8152613b2f602084016139b1565b6020820152613b40604084016139b1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613b92858286016139ca565b908201526101e0929092015161014083015250919050565b60006102608284031215613bbd57600080fd5b613bc5613947565b613bce836139b1565b8152613bdc602084016139b1565b6020820152613bed604084016139b1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160613c57858286016139ca565b90820152610220830151610180820152610240909201516101a083015250919050565b600060408284031215613c8c57600080fd5b613c946138d7565b823581526020830135613ca6816139bc565b60208201529392505050565b600060208284031215613cc457600080fd5b6040516020810181811067ffffffffffffffff82111715613ce757613ce76138c1565b6040529135825250919050565b600081830360e0811215613d0757600080fd5b613d0f6138d7565b8335815260c0601f1983011215613d2557600080fd5b613d2d61396b565b9150613d3761398e565b602085013560058110613d4957600080fd5b81526040850135613d59816139bc565b6020820152613d6b8660608701613cb2565b6040820152613d7d8660808701613cb2565b6060820152613d8f8660a08701613cb2565b608082015260c0850135613da2816139bc565b60a0820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115613df757613df7613dce565b500190565b81518152602082015151805160e08301919060058110613e1e57613e1e6137c7565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a084015260a0810151151560c08401525092915050565b600082821015613e7757613e77613dce565b500390565b6000816000190483118215151615613e9657613e96613dce565b500290565b600082613eb857634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415613ed157613ed1613dce565b5060010190565b8060005b6002811015612949578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613edc565b81516001600160a01b0316815261026081016020830151613f4260208401826001600160a01b03169052565b506040830151613f5d60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613fc782850182613ed8565b50506101808301516102208301526101a0909201516102409091015290565b81516001600160a01b031681526102008101602083015161401260208401826001600160a01b03169052565b50604083015161402d60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015161407f82850182613ed8565b50506101408301516101e083015292915050565b600082516140a5818460208701613826565b9190910192915050565b6000602082840312156140c157600080fd5b8151612b9e816139bc56fea26469706673582212206c4d80872cb9cf978cf650f4b9b8a385b798af71cc829abd8a97913db4c248d664736f6c634300080c0033`,
  BytecodeLen: 18523,
  Which: `oD`,
  version: 6,
  views: {
    global: `global`,
    initial: `initial`,
    local: `local`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:141:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:357:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:361:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:179:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "User": User,
  "claim": claim,
  "setTime": setTime,
  "stake": stake,
  "unstake": unstake,
  "update": update
  };
export const _APIs = {
  claim: claim,
  setTime: setTime,
  stake: stake,
  unstake: unstake,
  update: update
  };

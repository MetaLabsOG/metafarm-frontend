// Automatically generated with Reach 0.1.9 (1f9218bd)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (1f9218bd)';
export const _backendVersion = 11;

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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
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
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1362] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async () => {
              
              const v3083 = {
                lastUpdateBlock: v1382,
                rewardPerTokenStored: v1383,
                totalStaked: v1385
                };
              
              return v3083;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async () => {
              
              const v1410 = {
                lastUpdateBlock: v1382,
                rewardPerTokenStored: v1383,
                totalStaked: v1385
                };
              
              return v1410;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1362] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async () => {
              
              const v3082 = {
                beginBlock: v1342,
                endBlock: v1343,
                rewardToken: v1341,
                stakeToken: v1340,
                totalRewardAmount: v1344
                };
              
              return v3082;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async () => {
              
              const v1409 = {
                beginBlock: v1342,
                endBlock: v1343,
                rewardToken: v1341,
                stakeToken: v1340,
                totalRewardAmount: v1344
                };
              
              return v1409;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1362] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async (_v3084 ) => {
                const v3084 = stdlib.protect(ctc0, _v3084, null);
              
              const v3085 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3084), null);
              const v3086 = stdlib.fromSome(v3085, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
              const v3087 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3084), null);
              const v3088 = stdlib.fromSome(v3087, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
              const v3089 = {
                reward: v3088,
                staked: v3086
                };
              
              return v3089;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = svs;
            return (await ((async (_v1411 ) => {
                const v1411 = stdlib.protect(ctc0, _v1411, null);
              
              const v1412 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1411), null);
              const v1413 = stdlib.fromSome(v1412, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
              const v1414 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1411), null);
              const v1415 = stdlib.fromSome(v1414, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
              const v1416 = {
                reward: v1415,
                staked: v1413
                };
              
              return v1416;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2]
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
    claim0_132: ctc5,
    setTime0_132: ctc6,
    stake0_132: ctc6,
    unstake0_132: ctc6,
    update0_132: ctc5
    });
  const ctc8 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
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
  
  
  const v1321 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1322 = [v1321, v1321];
  const v1328 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:124:38:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1329 = v1328.stakeToken;
  const v1330 = v1328.rewardToken;
  const v1331 = v1328.beginBlock;
  const v1332 = v1328.endBlock;
  const v1333 = v1328.rewardPerBlock;
  const v1334 = stdlib.tokenEq(v1329, v1330);
  const v1335 = v1334 ? false : true;
  stdlib.assert(v1335, {
    at: './index.rsh:126:11:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1336 = stdlib.lt(v1331, v1332);
  stdlib.assert(v1336, {
    at: './index.rsh:128:11:application',
    fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1337 = stdlib.sub(v1332, v1331);
  const v1338 = stdlib.mul(v1337, v1333);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1329, v1330, v1331, v1332, v1338, v1333],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1340, v1341, v1342, v1343, v1344, v1345], secs: v1347, time: v1346, didSend: v46, from: v1339 } = txn1;
      
      const v1348 = stdlib.tokenEq(v1340, v1341);
      const v1349 = v1348 ? false : true;
      ;
      const v1350 = v1322[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
      const v1352 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
      const v1353 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
      const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1352, v1353];
      const v1355 = stdlib.Array_set(v1322, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0), v1354);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1340
        });
      const v1357 = v1355[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
      const v1359 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
      const v1360 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
      const v1361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1359, v1360];
      const v1362 = stdlib.Array_set(v1355, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1361);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1341
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
  const {data: [v1340, v1341, v1342, v1343, v1344, v1345], secs: v1347, time: v1346, didSend: v46, from: v1339 } = txn1;
  const v1348 = stdlib.tokenEq(v1340, v1341);
  const v1349 = v1348 ? false : true;
  stdlib.assert(v1349, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1350 = v1322[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
  const v1352 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1353 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1352, v1353];
  const v1355 = stdlib.Array_set(v1322, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0), v1354);
  ;
  const v1357 = v1355[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1359 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1360 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1359, v1360];
  const v1362 = stdlib.Array_set(v1355, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1361);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1362],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1346,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 0), [[v1344, v1341]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1366, time: v1365, didSend: v53, from: v1364 } = txn2;
      
      ;
      const v1367 = v1362[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
      const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 0)];
      const v1369 = stdlib.add(v1368, v1344);
      const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
      const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 2)];
      const v1374 = [v1369, v1372, v1373];
      const v1375 = stdlib.Array_set(v1362, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1), v1374);
      sim_r.txns.push({
        amt: v1344,
        kind: 'to',
        tok: v1341
        });
      const v1376 = stdlib.addressEq(v1339, v1364);
      ;
      
      const v1381 = stdlib.checkedBigNumberify('./index.rsh:218:5:decimal', stdlib.UInt_max, 0);
      const v1382 = stdlib.checkedBigNumberify('./index.rsh:215:5:decimal', stdlib.UInt_max, 0);
      const v1383 = stdlib.checkedBigNumberify('./index.rsh:216:5:decimal', stdlib.UInt_max, 0);
      const v1385 = stdlib.checkedBigNumberify('./index.rsh:214:5:decimal', stdlib.UInt_max, 0);
      const v1386 = v1365;
      const v1392 = v1375;
      const v1393 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v1408 = stdlib.lt(v1381, v1343);
        
        return v1408;})()) {
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
  const {data: [], secs: v1366, time: v1365, didSend: v53, from: v1364 } = txn2;
  ;
  const v1367 = v1362[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
  const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 0)];
  const v1369 = stdlib.add(v1368, v1344);
  const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
  const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 2)];
  const v1374 = [v1369, v1372, v1373];
  const v1375 = stdlib.Array_set(v1362, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1), v1374);
  ;
  const v1376 = stdlib.addressEq(v1339, v1364);
  stdlib.assert(v1376, {
    at: './index.rsh:143:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:192:22:application',
    fs: ['at ./index.rsh:191:7:application call to [unknown function] (defined at: ./index.rsh:191:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v1381 = stdlib.checkedBigNumberify('./index.rsh:218:5:decimal', stdlib.UInt_max, 0);
  let v1382 = stdlib.checkedBigNumberify('./index.rsh:215:5:decimal', stdlib.UInt_max, 0);
  let v1383 = stdlib.checkedBigNumberify('./index.rsh:216:5:decimal', stdlib.UInt_max, 0);
  let v1385 = stdlib.checkedBigNumberify('./index.rsh:214:5:decimal', stdlib.UInt_max, 0);
  let v1386 = v1365;
  let v1392 = v1375;
  let v1393 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v1408 = stdlib.lt(v1381, v1343);
    
    return v1408;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn3;
    switch (v1594[0]) {
      case 'claim0_132': {
        const v1597 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v1674 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1679 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1680 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1681 = [v1675, v1679, v1680];
        const v1682 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1681);
        ;
        const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1684 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1688 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1689 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1690 = [v1684, v1688, v1689];
        const v1691 = stdlib.Array_set(v1682, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1690);
        ;
        const v1693 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v1694 = stdlib.fromSome(v1693, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v1695 = v1691[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 1)];
        const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 0)];
        const v1697 = stdlib.lt(v1694, v1696);
        stdlib.assert(v1697, {
          at: './index.rsh:299:14:application',
          fs: ['at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v1702 = {
          reward: v1694,
          staked: v1699
          };
        await txn3.getOutput('claim', 'v1702', ctc8, v1702);
        const v1709 = stdlib.lt(v1381, v1343);
        const v1710 = v1709 ? v1381 : v1343;
        const v1711 = stdlib.sub(v1710, v1382);
        const v1712 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v1713 = stdlib.mul(v1711, v1345);
        const v1714 = stdlib.div(v1713, v1385);
        const v1715 = stdlib.add(v1383, v1714);
        const v1716 = v1712 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v1715;
        const v1719 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v1720 = stdlib.fromSome(v1719, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v1721 = stdlib.sub(v1716, v1720);
        const v1722 = stdlib.mul(v1699, v1721);
        const v1725 = stdlib.add(v1722, v1694);
        await stdlib.mapSet(map1, v1593, v1725);
        await stdlib.mapSet(map2, v1593, v1716);
        const v1735 = stdlib.lt(v1725, v1696);
        if (v1735) {
          const v1743 = stdlib.sub(v1696, v1725);
          const v1746 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1)];
          const v1747 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 2)];
          const v1748 = [v1743, v1746, v1747];
          const v1749 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1), v1748);
          ;
          await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
          null;
          const cv1381 = v1381;
          const cv1382 = v1710;
          const cv1383 = v1716;
          const cv1385 = v1385;
          const cv1386 = v1595;
          const cv1392 = v1749;
          const cv1393 = v1393;
          
          v1381 = cv1381;
          v1382 = cv1382;
          v1383 = cv1383;
          v1385 = cv1385;
          v1386 = cv1386;
          v1392 = cv1392;
          v1393 = cv1393;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
          null;
          const cv1381 = v1381;
          const cv1382 = v1710;
          const cv1383 = v1716;
          const cv1385 = v1385;
          const cv1386 = v1595;
          const cv1392 = v1691;
          const cv1393 = v1393;
          
          v1381 = cv1381;
          v1382 = cv1382;
          v1383 = cv1383;
          v1385 = cv1385;
          v1386 = cv1386;
          v1392 = cv1392;
          v1393 = cv1393;
          
          continue;}
        break;
        }
      case 'setTime0_132': {
        const v1894 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v1971 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1978 = [v1972, v1976, v1977];
        const v1979 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1978);
        ;
        const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1987 = [v1981, v1985, v1986];
        const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1987);
        ;
        const v2052 = v1894[stdlib.checkedBigNumberify('./index.rsh:336:9:spread', stdlib.UInt_max, 0)];
        const v2053 = stdlib.gt(v2052, v1381);
        stdlib.assert(v2053, {
          at: './index.rsh:343:14:application',
          fs: ['at ./index.rsh:342:24:application call to [unknown function] (defined at: ./index.rsh:342:24:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2055 = stdlib.fromSome(v2054, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2056 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2057 = stdlib.fromSome(v2056, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2058 = {
          reward: v2057,
          staked: v2055
          };
        await txn3.getOutput('setTime', 'v2058', ctc8, v2058);
        const cv1381 = v2052;
        const cv1382 = v1382;
        const cv1383 = v1383;
        const cv1385 = v1385;
        const cv1386 = v1595;
        const cv1392 = v1988;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'stake0_132': {
        const v2191 = v1594[1];
        undefined /* setApiDetails */;
        const v2217 = v2191[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2268 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2270 = stdlib.add(v2269, v2217);
        const v2273 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2274 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2275 = [v2270, v2273, v2274];
        const v2276 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2275);
        ;
        const v2277 = v2276[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2282 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2283 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2284 = [v2278, v2282, v2283];
        const v2285 = stdlib.Array_set(v2276, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2284);
        ;
        const v2365 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2366 = stdlib.fromSome(v2365, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2368 = stdlib.fromSome(v2367, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2369 = {
          reward: v2368,
          staked: v2366
          };
        await txn3.getOutput('stake', 'v2369', ctc8, v2369);
        const v2376 = stdlib.lt(v1381, v1343);
        const v2377 = v2376 ? v1381 : v1343;
        const v2378 = stdlib.sub(v2377, v1382);
        const v2379 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v2380 = stdlib.mul(v2378, v1345);
        const v2381 = stdlib.div(v2380, v1385);
        const v2382 = stdlib.add(v1383, v2381);
        const v2383 = v2379 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2382;
        const v2386 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v2387 = stdlib.fromSome(v2386, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v2388 = stdlib.sub(v2383, v2387);
        const v2389 = stdlib.mul(v2366, v2388);
        const v2392 = stdlib.add(v2389, v2368);
        await stdlib.mapSet(map1, v1593, v2392);
        await stdlib.mapSet(map2, v1593, v2383);
        const v2398 = stdlib.add(v2366, v2217);
        await stdlib.mapSet(map0, v1593, v2398);
        null;
        const v2399 = stdlib.add(v1385, v2217);
        const cv1381 = v1381;
        const cv1382 = v2377;
        const cv1383 = v2383;
        const cv1385 = v2399;
        const cv1386 = v1595;
        const cv1392 = v2285;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'unstake0_132': {
        const v2488 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v2565 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2566 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2570 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2571 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2572 = [v2566, v2570, v2571];
        const v2573 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2572);
        ;
        const v2574 = v2573[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2575 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2579 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2580 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2581 = [v2575, v2579, v2580];
        const v2582 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2581);
        ;
        const v2699 = v2488[stdlib.checkedBigNumberify('./index.rsh:262:9:spread', stdlib.UInt_max, 0)];
        const v2700 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2701 = stdlib.fromSome(v2700, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2702 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2704 = {
          reward: v2703,
          staked: v2701
          };
        await txn3.getOutput('unstake', 'v2704', ctc8, v2704);
        const v2713 = stdlib.le(v2699, v2701);
        stdlib.assert(v2713, {
          at: './index.rsh:272:14:application',
          fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2714 = v2582[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
        const v2715 = v2714[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
        const v2716 = stdlib.le(v2699, v2715);
        stdlib.assert(v2716, {
          at: './index.rsh:273:14:application',
          fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2717 = stdlib.lt(v1381, v1343);
        const v2718 = v2717 ? v1381 : v1343;
        const v2719 = stdlib.sub(v2718, v1382);
        const v2720 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v2721 = stdlib.mul(v2719, v1345);
        const v2722 = stdlib.div(v2721, v1385);
        const v2723 = stdlib.add(v1383, v2722);
        const v2724 = v2720 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2723;
        const v2727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v2728 = stdlib.fromSome(v2727, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v2729 = stdlib.sub(v2724, v2728);
        const v2730 = stdlib.mul(v2701, v2729);
        const v2733 = stdlib.add(v2730, v2703);
        await stdlib.mapSet(map1, v1593, v2733);
        await stdlib.mapSet(map2, v1593, v2724);
        const v2737 = stdlib.sub(v2701, v2699);
        await stdlib.mapSet(map0, v1593, v2737);
        const v2743 = stdlib.sub(v2715, v2699);
        const v2746 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 1)];
        const v2747 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 2)];
        const v2748 = [v2743, v2746, v2747];
        const v2749 = stdlib.Array_set(v2582, stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 0), v2748);
        ;
        null;
        const v2750 = stdlib.sub(v1385, v2699);
        const cv1381 = v1381;
        const cv1382 = v2718;
        const cv1383 = v2724;
        const cv1385 = v2750;
        const cv1386 = v1595;
        const cv1392 = v2749;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'update0_132': {
        const v2785 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v2862 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2863 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2867 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2868 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2869 = [v2863, v2867, v2868];
        const v2870 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2869);
        ;
        const v2871 = v2870[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2876 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2877 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2878 = [v2872, v2876, v2877];
        const v2879 = stdlib.Array_set(v2870, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2878);
        ;
        const v3050 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v3051 = stdlib.fromSome(v3050, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v3052 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v3054 = {
          reward: v3053,
          staked: v3051
          };
        await txn3.getOutput('update', 'v3054', ctc8, v3054);
        const v3061 = stdlib.lt(v1381, v1343);
        const v3062 = v3061 ? v1381 : v1343;
        const v3063 = stdlib.sub(v3062, v1382);
        const v3064 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v3065 = stdlib.mul(v3063, v1345);
        const v3066 = stdlib.div(v3065, v1385);
        const v3067 = stdlib.add(v1383, v3066);
        const v3068 = v3064 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v3067;
        const v3071 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v3072 = stdlib.fromSome(v3071, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v3073 = stdlib.sub(v3068, v3072);
        const v3074 = stdlib.mul(v3051, v3073);
        const v3077 = stdlib.add(v3074, v3053);
        await stdlib.mapSet(map1, v1593, v3077);
        await stdlib.mapSet(map2, v1593, v3068);
        null;
        const cv1381 = v1381;
        const cv1382 = v3062;
        const cv1383 = v3068;
        const cv1385 = v1385;
        const cv1386 = v1595;
        const cv1392 = v2879;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1382, v1383, v1385, v1392, v1393],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1386,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:363:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3093, time: v3092, didSend: v1066, from: v3091 } = txn3;
      
      ;
      const v3095 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 1)];
      const v3096 = v3095[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 0)];
      const v3097 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
      const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v1393,
        kind: 'from',
        to: v1339,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v3096,
        kind: 'from',
        to: v1339,
        tok: v1341
        });
      sim_r.txns.push({
        amt: v3098,
        kind: 'from',
        to: v1339,
        tok: v1340
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1341
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1340
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
  const {data: [], secs: v3093, time: v3092, didSend: v1066, from: v3091 } = txn3;
  ;
  const v3095 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 1)];
  const v3096 = v3095[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 0)];
  const v3097 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
  const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
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
    claim0_132: ctc4,
    setTime0_132: ctc5,
    stake0_132: ctc5,
    unstake0_132: ctc5,
    update0_132: ctc4
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
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
  
  
  const v1321 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1322 = [v1321, v1321];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1340, v1341, v1342, v1343, v1344, v1345], secs: v1347, time: v1346, didSend: v46, from: v1339 } = txn1;
  const v1348 = stdlib.tokenEq(v1340, v1341);
  const v1349 = v1348 ? false : true;
  stdlib.assert(v1349, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1350 = v1322[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
  const v1352 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1353 = v1350[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1352, v1353];
  const v1355 = stdlib.Array_set(v1322, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0), v1354);
  ;
  const v1357 = v1355[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1359 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1360 = v1357[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1361 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1359, v1360];
  const v1362 = stdlib.Array_set(v1355, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1361);
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
  const {data: [], secs: v1366, time: v1365, didSend: v53, from: v1364 } = txn2;
  ;
  const v1367 = v1362[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
  const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 0)];
  const v1369 = stdlib.add(v1368, v1344);
  const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1)];
  const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 2)];
  const v1374 = [v1369, v1372, v1373];
  const v1375 = stdlib.Array_set(v1362, stdlib.checkedBigNumberify('./index.rsh:143:11:dot', stdlib.UInt_max, 1), v1374);
  ;
  const v1376 = stdlib.addressEq(v1339, v1364);
  stdlib.assert(v1376, {
    at: './index.rsh:143:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:192:22:application',
    fs: ['at ./index.rsh:191:7:application call to [unknown function] (defined at: ./index.rsh:191:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v1381 = stdlib.checkedBigNumberify('./index.rsh:218:5:decimal', stdlib.UInt_max, 0);
  let v1382 = stdlib.checkedBigNumberify('./index.rsh:215:5:decimal', stdlib.UInt_max, 0);
  let v1383 = stdlib.checkedBigNumberify('./index.rsh:216:5:decimal', stdlib.UInt_max, 0);
  let v1385 = stdlib.checkedBigNumberify('./index.rsh:214:5:decimal', stdlib.UInt_max, 0);
  let v1386 = v1365;
  let v1392 = v1375;
  let v1393 = stdlib.checkedBigNumberify('./index.rsh:114:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v1408 = stdlib.lt(v1381, v1343);
    
    return v1408;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn3;
    switch (v1594[0]) {
      case 'claim0_132': {
        const v1597 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v1674 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1679 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1680 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1681 = [v1675, v1679, v1680];
        const v1682 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1681);
        ;
        const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1684 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1688 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1689 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1690 = [v1684, v1688, v1689];
        const v1691 = stdlib.Array_set(v1682, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1690);
        ;
        const v1693 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v1694 = stdlib.fromSome(v1693, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v1695 = v1691[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 1)];
        const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 0)];
        const v1697 = stdlib.lt(v1694, v1696);
        stdlib.assert(v1697, {
          at: './index.rsh:299:14:application',
          fs: ['at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: null,
          who: 'User'
          });
        const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v1702 = {
          reward: v1694,
          staked: v1699
          };
        await txn3.getOutput('claim', 'v1702', ctc7, v1702);
        const v1709 = stdlib.lt(v1381, v1343);
        const v1710 = v1709 ? v1381 : v1343;
        const v1711 = stdlib.sub(v1710, v1382);
        const v1712 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v1713 = stdlib.mul(v1711, v1345);
        const v1714 = stdlib.div(v1713, v1385);
        const v1715 = stdlib.add(v1383, v1714);
        const v1716 = v1712 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v1715;
        const v1719 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v1720 = stdlib.fromSome(v1719, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v1721 = stdlib.sub(v1716, v1720);
        const v1722 = stdlib.mul(v1699, v1721);
        const v1725 = stdlib.add(v1722, v1694);
        await stdlib.mapSet(map1, v1593, v1725);
        await stdlib.mapSet(map2, v1593, v1716);
        const v1735 = stdlib.lt(v1725, v1696);
        if (v1735) {
          const v1743 = stdlib.sub(v1696, v1725);
          const v1746 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1)];
          const v1747 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 2)];
          const v1748 = [v1743, v1746, v1747];
          const v1749 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1), v1748);
          ;
          await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
          null;
          const cv1381 = v1381;
          const cv1382 = v1710;
          const cv1383 = v1716;
          const cv1385 = v1385;
          const cv1386 = v1595;
          const cv1392 = v1749;
          const cv1393 = v1393;
          
          v1381 = cv1381;
          v1382 = cv1382;
          v1383 = cv1383;
          v1385 = cv1385;
          v1386 = cv1386;
          v1392 = cv1392;
          v1393 = cv1393;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
          null;
          const cv1381 = v1381;
          const cv1382 = v1710;
          const cv1383 = v1716;
          const cv1385 = v1385;
          const cv1386 = v1595;
          const cv1392 = v1691;
          const cv1393 = v1393;
          
          v1381 = cv1381;
          v1382 = cv1382;
          v1383 = cv1383;
          v1385 = cv1385;
          v1386 = cv1386;
          v1392 = cv1392;
          v1393 = cv1393;
          
          continue;}
        break;
        }
      case 'setTime0_132': {
        const v1894 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v1971 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1978 = [v1972, v1976, v1977];
        const v1979 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1978);
        ;
        const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v1987 = [v1981, v1985, v1986];
        const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1987);
        ;
        const v2052 = v1894[stdlib.checkedBigNumberify('./index.rsh:336:9:spread', stdlib.UInt_max, 0)];
        const v2053 = stdlib.gt(v2052, v1381);
        stdlib.assert(v2053, {
          at: './index.rsh:343:14:application',
          fs: ['at ./index.rsh:342:24:application call to [unknown function] (defined at: ./index.rsh:342:24:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2055 = stdlib.fromSome(v2054, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2056 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2057 = stdlib.fromSome(v2056, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2058 = {
          reward: v2057,
          staked: v2055
          };
        await txn3.getOutput('setTime', 'v2058', ctc7, v2058);
        const cv1381 = v2052;
        const cv1382 = v1382;
        const cv1383 = v1383;
        const cv1385 = v1385;
        const cv1386 = v1595;
        const cv1392 = v1988;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'stake0_132': {
        const v2191 = v1594[1];
        undefined /* setApiDetails */;
        const v2217 = v2191[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2268 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2270 = stdlib.add(v2269, v2217);
        const v2273 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2274 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2275 = [v2270, v2273, v2274];
        const v2276 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2275);
        ;
        const v2277 = v2276[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2282 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2283 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2284 = [v2278, v2282, v2283];
        const v2285 = stdlib.Array_set(v2276, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2284);
        ;
        const v2365 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2366 = stdlib.fromSome(v2365, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2368 = stdlib.fromSome(v2367, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2369 = {
          reward: v2368,
          staked: v2366
          };
        await txn3.getOutput('stake', 'v2369', ctc7, v2369);
        const v2376 = stdlib.lt(v1381, v1343);
        const v2377 = v2376 ? v1381 : v1343;
        const v2378 = stdlib.sub(v2377, v1382);
        const v2379 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v2380 = stdlib.mul(v2378, v1345);
        const v2381 = stdlib.div(v2380, v1385);
        const v2382 = stdlib.add(v1383, v2381);
        const v2383 = v2379 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2382;
        const v2386 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v2387 = stdlib.fromSome(v2386, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v2388 = stdlib.sub(v2383, v2387);
        const v2389 = stdlib.mul(v2366, v2388);
        const v2392 = stdlib.add(v2389, v2368);
        await stdlib.mapSet(map1, v1593, v2392);
        await stdlib.mapSet(map2, v1593, v2383);
        const v2398 = stdlib.add(v2366, v2217);
        await stdlib.mapSet(map0, v1593, v2398);
        null;
        const v2399 = stdlib.add(v1385, v2217);
        const cv1381 = v1381;
        const cv1382 = v2377;
        const cv1383 = v2383;
        const cv1385 = v2399;
        const cv1386 = v1595;
        const cv1392 = v2285;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'unstake0_132': {
        const v2488 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v2565 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2566 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2570 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2571 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2572 = [v2566, v2570, v2571];
        const v2573 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2572);
        ;
        const v2574 = v2573[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2575 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2579 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2580 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2581 = [v2575, v2579, v2580];
        const v2582 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2581);
        ;
        const v2699 = v2488[stdlib.checkedBigNumberify('./index.rsh:262:9:spread', stdlib.UInt_max, 0)];
        const v2700 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v2701 = stdlib.fromSome(v2700, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v2702 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v2704 = {
          reward: v2703,
          staked: v2701
          };
        await txn3.getOutput('unstake', 'v2704', ctc7, v2704);
        const v2713 = stdlib.le(v2699, v2701);
        stdlib.assert(v2713, {
          at: './index.rsh:272:14:application',
          fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2714 = v2582[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
        const v2715 = v2714[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
        const v2716 = stdlib.le(v2699, v2715);
        stdlib.assert(v2716, {
          at: './index.rsh:273:14:application',
          fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2717 = stdlib.lt(v1381, v1343);
        const v2718 = v2717 ? v1381 : v1343;
        const v2719 = stdlib.sub(v2718, v1382);
        const v2720 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v2721 = stdlib.mul(v2719, v1345);
        const v2722 = stdlib.div(v2721, v1385);
        const v2723 = stdlib.add(v1383, v2722);
        const v2724 = v2720 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2723;
        const v2727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v2728 = stdlib.fromSome(v2727, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v2729 = stdlib.sub(v2724, v2728);
        const v2730 = stdlib.mul(v2701, v2729);
        const v2733 = stdlib.add(v2730, v2703);
        await stdlib.mapSet(map1, v1593, v2733);
        await stdlib.mapSet(map2, v1593, v2724);
        const v2737 = stdlib.sub(v2701, v2699);
        await stdlib.mapSet(map0, v1593, v2737);
        const v2743 = stdlib.sub(v2715, v2699);
        const v2746 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 1)];
        const v2747 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 2)];
        const v2748 = [v2743, v2746, v2747];
        const v2749 = stdlib.Array_set(v2582, stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 0), v2748);
        ;
        null;
        const v2750 = stdlib.sub(v1385, v2699);
        const cv1381 = v1381;
        const cv1382 = v2718;
        const cv1383 = v2724;
        const cv1385 = v2750;
        const cv1386 = v1595;
        const cv1392 = v2749;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      case 'update0_132': {
        const v2785 = v1594[1];
        undefined /* setApiDetails */;
        ;
        const v2862 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2863 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2867 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2868 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2869 = [v2863, v2867, v2868];
        const v2870 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2869);
        ;
        const v2871 = v2870[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
        const v2876 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
        const v2877 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
        const v2878 = [v2872, v2876, v2877];
        const v2879 = stdlib.Array_set(v2870, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2878);
        ;
        const v3050 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
        const v3051 = stdlib.fromSome(v3050, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
        const v3052 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
        const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
        const v3054 = {
          reward: v3053,
          staked: v3051
          };
        await txn3.getOutput('update', 'v3054', ctc7, v3054);
        const v3061 = stdlib.lt(v1381, v1343);
        const v3062 = v3061 ? v1381 : v1343;
        const v3063 = stdlib.sub(v3062, v1382);
        const v3064 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
        const v3065 = stdlib.mul(v3063, v1345);
        const v3066 = stdlib.div(v3065, v1385);
        const v3067 = stdlib.add(v1383, v3066);
        const v3068 = v3064 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v3067;
        const v3071 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
        const v3072 = stdlib.fromSome(v3071, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
        const v3073 = stdlib.sub(v3068, v3072);
        const v3074 = stdlib.mul(v3051, v3073);
        const v3077 = stdlib.add(v3074, v3053);
        await stdlib.mapSet(map1, v1593, v3077);
        await stdlib.mapSet(map2, v1593, v3068);
        null;
        const cv1381 = v1381;
        const cv1382 = v3062;
        const cv1383 = v3068;
        const cv1385 = v1385;
        const cv1386 = v1595;
        const cv1392 = v2879;
        const cv1393 = v1393;
        
        v1381 = cv1381;
        v1382 = cv1382;
        v1383 = cv1383;
        v1385 = cv1385;
        v1386 = cv1386;
        v1392 = cv1392;
        v1393 = cv1393;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1382, v1383, v1385, v1392, v1393],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1386,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:363:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3093, time: v3092, didSend: v1066, from: v3091 } = txn3;
      
      ;
      const v3095 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 1)];
      const v3096 = v3095[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 0)];
      const v3097 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
      const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v1393,
        kind: 'from',
        to: v1339,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v3096,
        kind: 'from',
        to: v1339,
        tok: v1341
        });
      sim_r.txns.push({
        amt: v3098,
        kind: 'from',
        to: v1339,
        tok: v1340
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1341
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1340
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
  const {data: [], secs: v3093, time: v3092, didSend: v1066, from: v3091 } = txn3;
  ;
  const v3095 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 1)];
  const v3096 = v3095[stdlib.checkedBigNumberify('./index.rsh:364:32:application', stdlib.UInt_max, 0)];
  const v3097 = v1392[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
  const v3098 = v3097[stdlib.checkedBigNumberify('./index.rsh:364:69:application', stdlib.UInt_max, 0)];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_132: ctc8,
    setTime0_132: ctc9,
    stake0_132: ctc9,
    unstake0_132: ctc9,
    update0_132: ctc8
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
  
  
  const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v1442 = ctc.selfAddress();
  const v1444 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:294:10:application call to [unknown function] (defined at: ./index.rsh:294:10:function exp)', 'at ./index.rsh:213:21:application call to "runclaim0_132" (defined at: ./index.rsh:292:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1446 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1442), null);
  const v1447 = stdlib.fromSome(v1446, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
  const v1448 = v1392[stdlib.checkedBigNumberify('./index.rsh:295:37:application', stdlib.UInt_max, 1)];
  const v1449 = v1448[stdlib.checkedBigNumberify('./index.rsh:295:37:application', stdlib.UInt_max, 0)];
  const v1450 = stdlib.lt(v1447, v1449);
  stdlib.assert(v1450, {
    at: './index.rsh:295:14:application',
    fs: ['at ./index.rsh:294:10:application call to [unknown function] (defined at: ./index.rsh:294:10:function exp)', 'at ./index.rsh:294:10:application call to [unknown function] (defined at: ./index.rsh:294:10:function exp)', 'at ./index.rsh:213:21:application call to "runclaim0_132" (defined at: ./index.rsh:292:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: null,
    who: 'claim'
    });
  const v1453 = ['claim0_132', v1444];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393, v1453],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:297:14:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:297:18:decimal', stdlib.UInt_max, 0), v1340], [stdlib.checkedBigNumberify('./index.rsh:297:35:decimal', stdlib.UInt_max, 0), v1341]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
      
      switch (v1594[0]) {
        case 'claim0_132': {
          const v1597 = v1594[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1674 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1679 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1680 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v1681 = [v1675, v1679, v1680];
          const v1682 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1681);
          ;
          const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1684 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1688 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1689 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v1690 = [v1684, v1688, v1689];
          const v1691 = stdlib.Array_set(v1682, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1690);
          ;
          const v1693 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1593), null);
          const v1694 = stdlib.fromSome(v1693, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
          const v1695 = v1691[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 1)];
          const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 0)];
          const v1697 = stdlib.lt(v1694, v1696);
          ;
          const v1698 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1593), null);
          const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
          const v1702 = {
            reward: v1694,
            staked: v1699
            };
          const v1704 = await txn1.getOutput('claim', 'v1702', ctc11, v1702);
          
          const v1709 = stdlib.lt(v1381, v1343);
          const v1710 = v1709 ? v1381 : v1343;
          const v1711 = stdlib.sub(v1710, v1382);
          const v1712 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
          const v1713 = stdlib.mul(v1711, v1345);
          const v1714 = stdlib.div(v1713, v1385);
          const v1715 = stdlib.add(v1383, v1714);
          const v1716 = v1712 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v1715;
          const v1719 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1593), null);
          const v1720 = stdlib.fromSome(v1719, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
          const v1721 = stdlib.sub(v1716, v1720);
          const v1722 = stdlib.mul(v1699, v1721);
          const v1725 = stdlib.add(v1722, v1694);
          await stdlib.simMapSet(sim_r, 1, v1593, v1725);
          await stdlib.simMapSet(sim_r, 2, v1593, v1716);
          const v1735 = stdlib.lt(v1725, v1696);
          if (v1735) {
            const v1743 = stdlib.sub(v1696, v1725);
            const v1746 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1)];
            const v1747 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 2)];
            const v1748 = [v1743, v1746, v1747];
            const v1749 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1), v1748);
            sim_r.txns.push({
              amt: v1725,
              kind: 'from',
              to: v1593,
              tok: v1341
              });
            await stdlib.simMapSet(sim_r, 1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
            null;
            const v5824 = v1381;
            const v5825 = v1710;
            const v5826 = v1716;
            const v5827 = v1385;
            const v5829 = v1749;
            const v5830 = v1393;
            if (v1709) {
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
            null;
            const v5840 = v1381;
            const v5841 = v1710;
            const v5842 = v1716;
            const v5843 = v1385;
            const v5845 = v1691;
            const v5846 = v1393;
            if (v1709) {
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'setTime0_132': {
          const v1894 = v1594[1];
          
          break;
          }
        case 'stake0_132': {
          const v2191 = v1594[1];
          
          break;
          }
        case 'unstake0_132': {
          const v2488 = v1594[1];
          
          break;
          }
        case 'update0_132': {
          const v2785 = v1594[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
  switch (v1594[0]) {
    case 'claim0_132': {
      const v1597 = v1594[1];
      undefined /* setApiDetails */;
      ;
      const v1674 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1679 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1680 = v1674[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v1681 = [v1675, v1679, v1680];
      const v1682 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1681);
      ;
      const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1684 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1688 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1689 = v1683[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v1690 = [v1684, v1688, v1689];
      const v1691 = stdlib.Array_set(v1682, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1690);
      ;
      const v1693 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
      const v1694 = stdlib.fromSome(v1693, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
      const v1695 = v1691[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 1)];
      const v1696 = v1695[stdlib.checkedBigNumberify('./index.rsh:299:37:application', stdlib.UInt_max, 0)];
      const v1697 = stdlib.lt(v1694, v1696);
      stdlib.assert(v1697, {
        at: './index.rsh:299:14:application',
        fs: ['at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
        msg: null,
        who: 'claim'
        });
      const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
      const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
      const v1702 = {
        reward: v1694,
        staked: v1699
        };
      const v1704 = await txn1.getOutput('claim', 'v1702', ctc11, v1702);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1597, v1704), {
          at: './index.rsh:293:7:application',
          fs: ['at ./index.rsh:293:7:application call to [unknown function] (defined at: ./index.rsh:293:7:function exp)', 'at ./index.rsh:300:17:application call to "callback" (defined at: ./index.rsh:298:18:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v1709 = stdlib.lt(v1381, v1343);
      const v1710 = v1709 ? v1381 : v1343;
      const v1711 = stdlib.sub(v1710, v1382);
      const v1712 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
      const v1713 = stdlib.mul(v1711, v1345);
      const v1714 = stdlib.div(v1713, v1385);
      const v1715 = stdlib.add(v1383, v1714);
      const v1716 = v1712 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v1715;
      const v1719 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
      const v1720 = stdlib.fromSome(v1719, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
      const v1721 = stdlib.sub(v1716, v1720);
      const v1722 = stdlib.mul(v1699, v1721);
      const v1725 = stdlib.add(v1722, v1694);
      await stdlib.mapSet(map1, v1593, v1725);
      await stdlib.mapSet(map2, v1593, v1716);
      const v1735 = stdlib.lt(v1725, v1696);
      if (v1735) {
        const v1743 = stdlib.sub(v1696, v1725);
        const v1746 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1)];
        const v1747 = v1695[stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 2)];
        const v1748 = [v1743, v1746, v1747];
        const v1749 = stdlib.Array_set(v1691, stdlib.checkedBigNumberify('./index.rsh:306:53:application', stdlib.UInt_max, 1), v1748);
        ;
        await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
        null;
        const v5824 = v1381;
        const v5825 = v1710;
        const v5826 = v1716;
        const v5827 = v1385;
        const v5829 = v1749;
        const v5830 = v1393;
        if (v1709) {
          return;
          }
        else {
          null;
          return;
          }}
      else {
        await stdlib.mapSet(map1, v1593, stdlib.checkedBigNumberify('./index.rsh:308:25:decimal', stdlib.UInt_max, 0));
        null;
        const v5840 = v1381;
        const v5841 = v1710;
        const v5842 = v1716;
        const v5843 = v1385;
        const v5845 = v1691;
        const v5846 = v1393;
        if (v1709) {
          return;
          }
        else {
          null;
          return;
          }}
      break;
      }
    case 'setTime0_132': {
      const v1894 = v1594[1];
      return;
      break;
      }
    case 'stake0_132': {
      const v2191 = v1594[1];
      return;
      break;
      }
    case 'unstake0_132': {
      const v2488 = v1594[1];
      return;
      break;
      }
    case 'update0_132': {
      const v2785 = v1594[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_132: ctc9,
    setTime0_132: ctc8,
    stake0_132: ctc8,
    unstake0_132: ctc8,
    update0_132: ctc9
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
  
  
  const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v1465 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:338:14:application call to [unknown function] (defined at: ./index.rsh:338:14:function exp)', 'at ./index.rsh:213:21:application call to "runsetTime0_132" (defined at: ./index.rsh:336:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1466 = v1465[stdlib.checkedBigNumberify('./index.rsh:336:9:spread', stdlib.UInt_max, 0)];
  const v1468 = stdlib.gt(v1466, v1381);
  stdlib.assert(v1468, {
    at: './index.rsh:339:14:application',
    fs: ['at ./index.rsh:338:14:application call to [unknown function] (defined at: ./index.rsh:338:14:function exp)', 'at ./index.rsh:338:14:application call to [unknown function] (defined at: ./index.rsh:338:14:function exp)', 'at ./index.rsh:213:21:application call to "runsetTime0_132" (defined at: ./index.rsh:336:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1471 = ['setTime0_132', v1465];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393, v1471],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:341:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:341:19:decimal', stdlib.UInt_max, 0), v1340], [stdlib.checkedBigNumberify('./index.rsh:341:36:decimal', stdlib.UInt_max, 0), v1341]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
      
      switch (v1594[0]) {
        case 'claim0_132': {
          const v1597 = v1594[1];
          
          break;
          }
        case 'setTime0_132': {
          const v1894 = v1594[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v1971 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v1978 = [v1972, v1976, v1977];
          const v1979 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1978);
          ;
          const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v1987 = [v1981, v1985, v1986];
          const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1987);
          ;
          const v2052 = v1894[stdlib.checkedBigNumberify('./index.rsh:336:9:spread', stdlib.UInt_max, 0)];
          const v2053 = stdlib.gt(v2052, v1381);
          ;
          const v2054 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1593), null);
          const v2055 = stdlib.fromSome(v2054, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
          const v2056 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1593), null);
          const v2057 = stdlib.fromSome(v2056, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
          const v2058 = {
            reward: v2057,
            staked: v2055
            };
          const v2060 = await txn1.getOutput('setTime', 'v2058', ctc11, v2058);
          
          const v5952 = v2052;
          const v5953 = v1382;
          const v5954 = v1383;
          const v5955 = v1385;
          const v5957 = v1988;
          const v5958 = v1393;
          const v5959 = stdlib.lt(v2052, v1343);
          if (v5959) {
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_132': {
          const v2191 = v1594[1];
          
          break;
          }
        case 'unstake0_132': {
          const v2488 = v1594[1];
          
          break;
          }
        case 'update0_132': {
          const v2785 = v1594[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
  switch (v1594[0]) {
    case 'claim0_132': {
      const v1597 = v1594[1];
      return;
      break;
      }
    case 'setTime0_132': {
      const v1894 = v1594[1];
      undefined /* setApiDetails */;
      ;
      const v1971 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1972 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1976 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1977 = v1971[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v1978 = [v1972, v1976, v1977];
      const v1979 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v1978);
      ;
      const v1980 = v1979[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1981 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v1985 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v1986 = v1980[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v1987 = [v1981, v1985, v1986];
      const v1988 = stdlib.Array_set(v1979, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v1987);
      ;
      const v2052 = v1894[stdlib.checkedBigNumberify('./index.rsh:336:9:spread', stdlib.UInt_max, 0)];
      const v2053 = stdlib.gt(v2052, v1381);
      stdlib.assert(v2053, {
        at: './index.rsh:343:14:application',
        fs: ['at ./index.rsh:342:24:application call to [unknown function] (defined at: ./index.rsh:342:24:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v2054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
      const v2055 = stdlib.fromSome(v2054, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
      const v2056 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
      const v2057 = stdlib.fromSome(v2056, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
      const v2058 = {
        reward: v2057,
        staked: v2055
        };
      const v2060 = await txn1.getOutput('setTime', 'v2058', ctc11, v2058);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1894, v2060), {
          at: './index.rsh:337:7:application',
          fs: ['at ./index.rsh:337:7:application call to [unknown function] (defined at: ./index.rsh:337:7:function exp)', 'at ./index.rsh:344:17:application call to "callback" (defined at: ./index.rsh:342:24:function exp)', 'at ./index.rsh:342:24:application call to [unknown function] (defined at: ./index.rsh:342:24:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v5952 = v2052;
      const v5953 = v1382;
      const v5954 = v1383;
      const v5955 = v1385;
      const v5957 = v1988;
      const v5958 = v1393;
      const v5959 = stdlib.lt(v2052, v1343);
      if (v5959) {
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'stake0_132': {
      const v2191 = v1594[1];
      return;
      break;
      }
    case 'unstake0_132': {
      const v2488 = v1594[1];
      return;
      break;
      }
    case 'update0_132': {
      const v2785 = v1594[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_132: ctc9,
    setTime0_132: ctc8,
    stake0_132: ctc8,
    unstake0_132: ctc8,
    update0_132: ctc9
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
  
  
  const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v1420 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:11:application call to [unknown function] (defined at: ./index.rsh:243:11:function exp)', 'at ./index.rsh:213:21:application call to "runstake0_132" (defined at: ./index.rsh:241:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1421 = v1420[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, 0)];
  const v1425 = ['stake0_132', v1420];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393, v1425],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:21:decimal', stdlib.UInt_max, 0), [[v1421, v1340], [stdlib.checkedBigNumberify('./index.rsh:246:48:decimal', stdlib.UInt_max, 0), v1341]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
      
      switch (v1594[0]) {
        case 'claim0_132': {
          const v1597 = v1594[1];
          
          break;
          }
        case 'setTime0_132': {
          const v1894 = v1594[1];
          
          break;
          }
        case 'stake0_132': {
          const v2191 = v1594[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v2217 = v2191[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, 0)];
          ;
          const v2268 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2270 = stdlib.add(v2269, v2217);
          const v2273 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2274 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2275 = [v2270, v2273, v2274];
          const v2276 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2275);
          sim_r.txns.push({
            amt: v2217,
            kind: 'to',
            tok: v1340
            });
          const v2277 = v2276[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2282 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2283 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2284 = [v2278, v2282, v2283];
          const v2285 = stdlib.Array_set(v2276, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2284);
          ;
          const v2365 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1593), null);
          const v2366 = stdlib.fromSome(v2365, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
          const v2367 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1593), null);
          const v2368 = stdlib.fromSome(v2367, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
          const v2369 = {
            reward: v2368,
            staked: v2366
            };
          const v2371 = await txn1.getOutput('stake', 'v2369', ctc11, v2369);
          
          const v2376 = stdlib.lt(v1381, v1343);
          const v2377 = v2376 ? v1381 : v1343;
          const v2378 = stdlib.sub(v2377, v1382);
          const v2379 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
          const v2380 = stdlib.mul(v2378, v1345);
          const v2381 = stdlib.div(v2380, v1385);
          const v2382 = stdlib.add(v1383, v2381);
          const v2383 = v2379 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2382;
          const v2386 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1593), null);
          const v2387 = stdlib.fromSome(v2386, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
          const v2388 = stdlib.sub(v2383, v2387);
          const v2389 = stdlib.mul(v2366, v2388);
          const v2392 = stdlib.add(v2389, v2368);
          await stdlib.simMapSet(sim_r, 1, v1593, v2392);
          await stdlib.simMapSet(sim_r, 2, v1593, v2383);
          const v2398 = stdlib.add(v2366, v2217);
          await stdlib.simMapSet(sim_r, 0, v1593, v2398);
          null;
          const v2399 = stdlib.add(v1385, v2217);
          const v6064 = v1381;
          const v6065 = v2377;
          const v6066 = v2383;
          const v6067 = v2399;
          const v6069 = v2285;
          const v6070 = v1393;
          if (v2376) {
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_132': {
          const v2488 = v1594[1];
          
          break;
          }
        case 'update0_132': {
          const v2785 = v1594[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
  switch (v1594[0]) {
    case 'claim0_132': {
      const v1597 = v1594[1];
      return;
      break;
      }
    case 'setTime0_132': {
      const v1894 = v1594[1];
      return;
      break;
      }
    case 'stake0_132': {
      const v2191 = v1594[1];
      undefined /* setApiDetails */;
      const v2217 = v2191[stdlib.checkedBigNumberify('./index.rsh:241:9:spread', stdlib.UInt_max, 0)];
      ;
      const v2268 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2269 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2270 = stdlib.add(v2269, v2217);
      const v2273 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2274 = v2268[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2275 = [v2270, v2273, v2274];
      const v2276 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2275);
      ;
      const v2277 = v2276[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2278 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2282 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2283 = v2277[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2284 = [v2278, v2282, v2283];
      const v2285 = stdlib.Array_set(v2276, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2284);
      ;
      const v2365 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
      const v2366 = stdlib.fromSome(v2365, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
      const v2367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
      const v2368 = stdlib.fromSome(v2367, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
      const v2369 = {
        reward: v2368,
        staked: v2366
        };
      const v2371 = await txn1.getOutput('stake', 'v2369', ctc11, v2369);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v2191, v2371), {
          at: './index.rsh:242:7:application',
          fs: ['at ./index.rsh:242:7:application call to [unknown function] (defined at: ./index.rsh:242:7:function exp)', 'at ./index.rsh:248:17:application call to "callback" (defined at: ./index.rsh:247:27:function exp)', 'at ./index.rsh:247:27:application call to [unknown function] (defined at: ./index.rsh:247:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v2376 = stdlib.lt(v1381, v1343);
      const v2377 = v2376 ? v1381 : v1343;
      const v2378 = stdlib.sub(v2377, v1382);
      const v2379 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
      const v2380 = stdlib.mul(v2378, v1345);
      const v2381 = stdlib.div(v2380, v1385);
      const v2382 = stdlib.add(v1383, v2381);
      const v2383 = v2379 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2382;
      const v2386 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
      const v2387 = stdlib.fromSome(v2386, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
      const v2388 = stdlib.sub(v2383, v2387);
      const v2389 = stdlib.mul(v2366, v2388);
      const v2392 = stdlib.add(v2389, v2368);
      await stdlib.mapSet(map1, v1593, v2392);
      await stdlib.mapSet(map2, v1593, v2383);
      const v2398 = stdlib.add(v2366, v2217);
      await stdlib.mapSet(map0, v1593, v2398);
      null;
      const v2399 = stdlib.add(v1385, v2217);
      const v6064 = v1381;
      const v6065 = v2377;
      const v6066 = v2383;
      const v6067 = v2399;
      const v6069 = v2285;
      const v6070 = v1393;
      if (v2376) {
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'unstake0_132': {
      const v2488 = v1594[1];
      return;
      break;
      }
    case 'update0_132': {
      const v2785 = v1594[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_132: ctc9,
    setTime0_132: ctc8,
    stake0_132: ctc8,
    unstake0_132: ctc8,
    update0_132: ctc9
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
  
  
  const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v1427 = ctc.selfAddress();
  const v1429 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:264:19:application call to [unknown function] (defined at: ./index.rsh:264:19:function exp)', 'at ./index.rsh:213:21:application call to "rununstake0_132" (defined at: ./index.rsh:262:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1430 = v1429[stdlib.checkedBigNumberify('./index.rsh:262:9:spread', stdlib.UInt_max, 0)];
  const v1432 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
  const v1433 = stdlib.fromSome(v1432, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
  const v1434 = stdlib.le(v1430, v1433);
  stdlib.assert(v1434, {
    at: './index.rsh:265:15:application',
    fs: ['at ./index.rsh:264:19:application call to [unknown function] (defined at: ./index.rsh:264:19:function exp)', 'at ./index.rsh:264:19:application call to [unknown function] (defined at: ./index.rsh:264:19:function exp)', 'at ./index.rsh:213:21:application call to "rununstake0_132" (defined at: ./index.rsh:262:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1435 = v1392[stdlib.checkedBigNumberify('./index.rsh:266:36:application', stdlib.UInt_max, 0)];
  const v1436 = v1435[stdlib.checkedBigNumberify('./index.rsh:266:36:application', stdlib.UInt_max, 0)];
  const v1437 = stdlib.le(v1430, v1436);
  stdlib.assert(v1437, {
    at: './index.rsh:266:15:application',
    fs: ['at ./index.rsh:264:19:application call to [unknown function] (defined at: ./index.rsh:264:19:function exp)', 'at ./index.rsh:264:19:application call to [unknown function] (defined at: ./index.rsh:264:19:function exp)', 'at ./index.rsh:213:21:application call to "rununstake0_132" (defined at: ./index.rsh:262:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1440 = ['unstake0_132', v1429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393, v1440],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:268:19:decimal', stdlib.UInt_max, 0), v1340], [stdlib.checkedBigNumberify('./index.rsh:268:36:decimal', stdlib.UInt_max, 0), v1341]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
      
      switch (v1594[0]) {
        case 'claim0_132': {
          const v1597 = v1594[1];
          
          break;
          }
        case 'setTime0_132': {
          const v1894 = v1594[1];
          
          break;
          }
        case 'stake0_132': {
          const v2191 = v1594[1];
          
          break;
          }
        case 'unstake0_132': {
          const v2488 = v1594[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2565 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2566 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2570 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2571 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2572 = [v2566, v2570, v2571];
          const v2573 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2572);
          ;
          const v2574 = v2573[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2575 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2579 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2580 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2581 = [v2575, v2579, v2580];
          const v2582 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2581);
          ;
          const v2699 = v2488[stdlib.checkedBigNumberify('./index.rsh:262:9:spread', stdlib.UInt_max, 0)];
          const v2700 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1593), null);
          const v2701 = stdlib.fromSome(v2700, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
          const v2702 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1593), null);
          const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
          const v2704 = {
            reward: v2703,
            staked: v2701
            };
          const v2706 = await txn1.getOutput('unstake', 'v2704', ctc11, v2704);
          
          const v2713 = stdlib.le(v2699, v2701);
          ;
          const v2714 = v2582[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
          const v2715 = v2714[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
          const v2716 = stdlib.le(v2699, v2715);
          ;
          const v2717 = stdlib.lt(v1381, v1343);
          const v2718 = v2717 ? v1381 : v1343;
          const v2719 = stdlib.sub(v2718, v1382);
          const v2720 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
          const v2721 = stdlib.mul(v2719, v1345);
          const v2722 = stdlib.div(v2721, v1385);
          const v2723 = stdlib.add(v1383, v2722);
          const v2724 = v2720 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2723;
          const v2727 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1593), null);
          const v2728 = stdlib.fromSome(v2727, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
          const v2729 = stdlib.sub(v2724, v2728);
          const v2730 = stdlib.mul(v2701, v2729);
          const v2733 = stdlib.add(v2730, v2703);
          await stdlib.simMapSet(sim_r, 1, v1593, v2733);
          await stdlib.simMapSet(sim_r, 2, v1593, v2724);
          const v2737 = stdlib.sub(v2701, v2699);
          await stdlib.simMapSet(sim_r, 0, v1593, v2737);
          const v2743 = stdlib.sub(v2715, v2699);
          const v2746 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 1)];
          const v2747 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 2)];
          const v2748 = [v2743, v2746, v2747];
          const v2749 = stdlib.Array_set(v2582, stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 0), v2748);
          sim_r.txns.push({
            amt: v2699,
            kind: 'from',
            to: v1593,
            tok: v1340
            });
          null;
          const v2750 = stdlib.sub(v1385, v2699);
          const v6176 = v1381;
          const v6177 = v2718;
          const v6178 = v2724;
          const v6179 = v2750;
          const v6181 = v2749;
          const v6182 = v1393;
          if (v2717) {
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_132': {
          const v2785 = v1594[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
  switch (v1594[0]) {
    case 'claim0_132': {
      const v1597 = v1594[1];
      return;
      break;
      }
    case 'setTime0_132': {
      const v1894 = v1594[1];
      return;
      break;
      }
    case 'stake0_132': {
      const v2191 = v1594[1];
      return;
      break;
      }
    case 'unstake0_132': {
      const v2488 = v1594[1];
      undefined /* setApiDetails */;
      ;
      const v2565 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2566 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2570 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2571 = v2565[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2572 = [v2566, v2570, v2571];
      const v2573 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2572);
      ;
      const v2574 = v2573[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2575 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2579 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2580 = v2574[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2581 = [v2575, v2579, v2580];
      const v2582 = stdlib.Array_set(v2573, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2581);
      ;
      const v2699 = v2488[stdlib.checkedBigNumberify('./index.rsh:262:9:spread', stdlib.UInt_max, 0)];
      const v2700 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
      const v2701 = stdlib.fromSome(v2700, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
      const v2702 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
      const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
      const v2704 = {
        reward: v2703,
        staked: v2701
        };
      const v2706 = await txn1.getOutput('unstake', 'v2704', ctc11, v2704);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v2488, v2706), {
          at: './index.rsh:263:7:application',
          fs: ['at ./index.rsh:263:7:application call to [unknown function] (defined at: ./index.rsh:263:7:function exp)', 'at ./index.rsh:270:17:application call to "callback" (defined at: ./index.rsh:269:29:function exp)', 'at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      const v2713 = stdlib.le(v2699, v2701);
      stdlib.assert(v2713, {
        at: './index.rsh:272:14:application',
        fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2714 = v2582[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
      const v2715 = v2714[stdlib.checkedBigNumberify('./index.rsh:273:35:application', stdlib.UInt_max, 0)];
      const v2716 = stdlib.le(v2699, v2715);
      stdlib.assert(v2716, {
        at: './index.rsh:273:14:application',
        fs: ['at ./index.rsh:269:29:application call to [unknown function] (defined at: ./index.rsh:269:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2717 = stdlib.lt(v1381, v1343);
      const v2718 = v2717 ? v1381 : v1343;
      const v2719 = stdlib.sub(v2718, v1382);
      const v2720 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
      const v2721 = stdlib.mul(v2719, v1345);
      const v2722 = stdlib.div(v2721, v1385);
      const v2723 = stdlib.add(v1383, v2722);
      const v2724 = v2720 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v2723;
      const v2727 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
      const v2728 = stdlib.fromSome(v2727, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
      const v2729 = stdlib.sub(v2724, v2728);
      const v2730 = stdlib.mul(v2701, v2729);
      const v2733 = stdlib.add(v2730, v2703);
      await stdlib.mapSet(map1, v1593, v2733);
      await stdlib.mapSet(map2, v1593, v2724);
      const v2737 = stdlib.sub(v2701, v2699);
      await stdlib.mapSet(map0, v1593, v2737);
      const v2743 = stdlib.sub(v2715, v2699);
      const v2746 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 1)];
      const v2747 = v2714[stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 2)];
      const v2748 = [v2743, v2746, v2747];
      const v2749 = stdlib.Array_set(v2582, stdlib.checkedBigNumberify('./index.rsh:280:47:application', stdlib.UInt_max, 0), v2748);
      ;
      null;
      const v2750 = stdlib.sub(v1385, v2699);
      const v6176 = v1381;
      const v6177 = v2718;
      const v6178 = v2724;
      const v6179 = v2750;
      const v6181 = v2749;
      const v6182 = v1393;
      if (v2717) {
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'update0_132': {
      const v2785 = v1594[1];
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_132: ctc8,
    setTime0_132: ctc9,
    stake0_132: ctc9,
    unstake0_132: ctc9,
    update0_132: ctc8
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
  
  
  const [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1]);
  const v1457 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:320:9:application call to [unknown function] (defined at: ./index.rsh:320:9:function exp)', 'at ./index.rsh:213:21:application call to "runupdate0_132" (defined at: ./index.rsh:320:9:function exp)', 'at ./index.rsh:213:21:application call to [unknown function] (defined at: ./index.rsh:213:21:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v1461 = ['update0_132', v1457];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1339, v1340, v1341, v1342, v1343, v1344, v1345, v1381, v1382, v1383, v1385, v1392, v1393, v1461],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:320:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:240:14:decimal', stdlib.UInt_max, 0), v1340], [stdlib.checkedBigNumberify('./index.rsh:240:14:decimal', stdlib.UInt_max, 0), v1341]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
      
      switch (v1594[0]) {
        case 'claim0_132': {
          const v1597 = v1594[1];
          
          break;
          }
        case 'setTime0_132': {
          const v1894 = v1594[1];
          
          break;
          }
        case 'stake0_132': {
          const v2191 = v1594[1];
          
          break;
          }
        case 'unstake0_132': {
          const v2488 = v1594[1];
          
          break;
          }
        case 'update0_132': {
          const v2785 = v1594[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v2862 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2863 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2867 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2868 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2869 = [v2863, v2867, v2868];
          const v2870 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2869);
          ;
          const v2871 = v2870[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
          const v2876 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
          const v2877 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
          const v2878 = [v2872, v2876, v2877];
          const v2879 = stdlib.Array_set(v2870, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2878);
          ;
          const v3050 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1593), null);
          const v3051 = stdlib.fromSome(v3050, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
          const v3052 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1593), null);
          const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
          const v3054 = {
            reward: v3053,
            staked: v3051
            };
          const v3056 = await txn1.getOutput('update', 'v3054', ctc11, v3054);
          
          const v3061 = stdlib.lt(v1381, v1343);
          const v3062 = v3061 ? v1381 : v1343;
          const v3063 = stdlib.sub(v3062, v1382);
          const v3064 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
          const v3065 = stdlib.mul(v3063, v1345);
          const v3066 = stdlib.div(v3065, v1385);
          const v3067 = stdlib.add(v1383, v3066);
          const v3068 = v3064 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v3067;
          const v3071 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1593), null);
          const v3072 = stdlib.fromSome(v3071, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
          const v3073 = stdlib.sub(v3068, v3072);
          const v3074 = stdlib.mul(v3051, v3073);
          const v3077 = stdlib.add(v3074, v3053);
          await stdlib.simMapSet(sim_r, 1, v1593, v3077);
          await stdlib.simMapSet(sim_r, 2, v1593, v3068);
          null;
          const v6288 = v1381;
          const v6289 = v3062;
          const v6290 = v3068;
          const v6291 = v1385;
          const v6293 = v2879;
          const v6294 = v1393;
          if (v3061) {
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
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1594], secs: v1596, time: v1595, didSend: v807, from: v1593 } = txn1;
  switch (v1594[0]) {
    case 'claim0_132': {
      const v1597 = v1594[1];
      return;
      break;
      }
    case 'setTime0_132': {
      const v1894 = v1594[1];
      return;
      break;
      }
    case 'stake0_132': {
      const v2191 = v1594[1];
      return;
      break;
      }
    case 'unstake0_132': {
      const v2488 = v1594[1];
      return;
      break;
      }
    case 'update0_132': {
      const v2785 = v1594[1];
      undefined /* setApiDetails */;
      ;
      const v2862 = v1392[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2863 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2867 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2868 = v2862[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2869 = [v2863, v2867, v2868];
      const v2870 = stdlib.Array_set(v1392, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0), v2869);
      ;
      const v2871 = v2870[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 0)];
      const v2876 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1)];
      const v2877 = v2871[stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 2)];
      const v2878 = [v2872, v2876, v2877];
      const v2879 = stdlib.Array_set(v2870, stdlib.checkedBigNumberify('./index.rsh:213:21:dot', stdlib.UInt_max, 1), v2878);
      ;
      const v3050 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1593), null);
      const v3051 = stdlib.fromSome(v3050, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, 0));
      const v3052 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1593), null);
      const v3053 = stdlib.fromSome(v3052, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, 0));
      const v3054 = {
        reward: v3053,
        staked: v3051
        };
      const v3056 = await txn1.getOutput('update', 'v3054', ctc11, v3054);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v2785, v3056), {
          at: './index.rsh:321:7:application',
          fs: ['at ./index.rsh:321:7:application call to [unknown function] (defined at: ./index.rsh:321:7:function exp)', 'at ./index.rsh:323:17:application call to "callback" (defined at: ./index.rsh:322:18:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      const v3061 = stdlib.lt(v1381, v1343);
      const v3062 = v3061 ? v1381 : v1343;
      const v3063 = stdlib.sub(v3062, v1382);
      const v3064 = stdlib.eq(v1385, stdlib.checkedBigNumberify('./index.rsh:163:27:decimal', stdlib.UInt_max, 0));
      const v3065 = stdlib.mul(v3063, v1345);
      const v3066 = stdlib.div(v3065, v1385);
      const v3067 = stdlib.add(v1383, v3066);
      const v3068 = v3064 ? stdlib.checkedBigNumberify('./index.rsh:164:9:decimal', stdlib.UInt_max, 0) : v3067;
      const v3071 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1593), null);
      const v3072 = stdlib.fromSome(v3071, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, 0));
      const v3073 = stdlib.sub(v3068, v3072);
      const v3074 = stdlib.mul(v3051, v3073);
      const v3077 = stdlib.add(v3074, v3053);
      await stdlib.mapSet(map1, v1593, v3077);
      await stdlib.mapSet(map2, v1593, v3068);
      null;
      const v6288 = v1381;
      const v6289 = v3062;
      const v6290 = v3068;
      const v6291 = v1385;
      const v6293 = v2879;
      const v6294 = v1393;
      if (v3061) {
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
  appApproval: `BiAVAAEEBQMIICigjQYbvfqL1ASrpp6jCrz138MLq5ryxgi6pcyCApWqrdoD+srupQEwOEBIJgUBAAEBAAkBAAAAAAAAAAAE5SLx1yI1ADEYQQxFKmRJIls1ASEFWzUCMRkjEkEACjEAKCEJr2ZCDBE2GgAXSUEBuyI1BCM1BkkhCgxAAK5JIQsMQAB+SSEMDEAAYyEMEkQ0AUklDEAAKyUSRChkKWRQSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCC8YhBBJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0ILmiELEkQqNf+AAQQ0/1AhBa9QQgFGSSENDEAAECENEkQ2GgE1/yk0/1BCAS8hChJENhoBNf+AAQM0/1BCAR1JIQ4MQABkSSEPDEAAEiEPEkQqNf8oNP9QIQWvUEIA/SEOEkQ0AUklDEAAHyUSRChkKWRQSTUDV2gINANXWAhQNANXYAhQNQdCCxIhBBJEKGQpZFBJNQNXWAg0A1dICFA0A1dQCFA1B0IK8kkhEAxAAHkhEBJENAFJJQxAADYlEkQ2GgE1/yI0/4gK4lcACUk1/iNbNP4iVU0WIjT/iArOVwkJSTX+I1s0/iJVTRZQNQdCCqkhBBJENhoBNf8iNP+ICqtXAAlJNf4jWzT+IlVNFiI0/4gKl1cJCUk1/iNbNP4iVU0WUDUHQgpygc3I+h4SRDYaATX/gAECNP9QQgAdNhoCFzUENhoDNhoBF0khBAxAB7pJJAxABwYkEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpJVwAgNf8hBls1/iEHWzX9IRFbNfwhEls1+yETWzX6IRRbNfmBUFs1+IFYWzX3gWBbNfaBaFs19VdwIjX0gZIBWzXzSTUFNfKABNWOHas08lCwNPIiVUmBAgxABAFJIQQMQAKrSSQMQAEaJBJENPRXABFJNfFXAAg08VcICFA08VcQAVA09FcREVA18DTwVxERNe8iMQCICZpXAAlJNe0jWzTtIlVNNe4iMQCICYVXCQlJNewjWzTsIlVNNe2ACAAAAAAAAAvuNO4WNO0WUFCwNO4WNO0WUDUHNPs0+Ek0+wxNNew09jTsNPcJNPkLNPUKCCI09SISTTXrMQAoMQCICTEpNO406yIxAIgJJlcSCUk16iNbNOoiVU0JCzTtCBZQNepJVwAJNOpQTFcSCVBmMQAoMQCICPspNOsWUDXqVwASNOpQZoAElYOeTjEAULA0/zT+NP00/DT7NPo0+TT4NOw06zT1MgY08FcAETTvVwAINO9XCAhQNO9XEAFQUDTzQgefSDTyVwEINfE09FcAEUk18FcACDTwVwgIUDTwVxABUDT0VxERUDXvNO9XERE17jTvVwARNO5XAAg07lcICFA07lcQAVBQNe008Rc17CIxAIgIXVcACUk16iNbNOoiVU016yIxAIgISFcJCUk16SNbNOkiVU016oAIAAAAAAAACpA06xY06hZQULA06xY06hZQNQc07DTrDkQ07VcAEUk16SJbNeg07DToDkQ0+zT4STT7DE015zT2NOc09wk0+Qs09QoIIjT1IhJNNeYxACgxAIgH3Ck06zTmIjEAiAfRVxIJSTXlI1s05SJVTQkLNOoIFlA15UlXAAk05VBMVxIJUGYxACgxAIgHpik05hZQNeVXABI05VBmMQAoMQCIB5ApNOs07AkWUDXlVwkSNOVMUGaxIrIBNOyyEiSyEDEAshQ0/rIRs4AE0WlzKTEAUDTsFlCwNP80/jT9NPw0+zT6NPk0+DTnNOY09TTsCTIGNOg07AkWNOlXCAhQNOlXEAFQNO1XERFQNPNCBhRINPJXAQg18TTxFzXwNPRXABFJNe8iWzTwCBY071cICFA071cQAVA09FcREVA17jTwNP6IBxU07lcRETXtIjEAiAbhVwAJSTXrI1s06yJVTTXsIjEAiAbMVwkJSTXqI1s06iJVTTXrgAgAAAAAAAAJQTTsFjTrFlBQsDTsFjTrFlA1BzT7NPhJNPsMTTXqNPY06jT3CTT5CzT1CggiNPUiEk016TEAKDEAiAZ4KTTsNOkiMQCIBm1XEglJNegjWzToIlVNCQs06wgWUDXoSVcACTToUExXEglQZjEAKDEAiAZCKTTpFlA16FcAEjToUGYxACgxAIgGLCk07DTwCBZQNehXCRI06ExQZoAEMY+lDjEAUDTwFlCwNP80/jT9NPw0+zT6NPk0+DTqNOk09TTwCDIGNO5XABE07VcACDTtVwgIUDTtVxABUFA080IExUkjDEAAzEg08lcBCDXxNPRXABFJNfBXAAg08FcICFA08FcQAVA09FcREVA17zTvVxERNe408RdJNe00+A1EgAgAAAAAAAAICiIxAIgFh1cACUk17CNbNOwiVU0WIjEAiAVzVwkJSTXsI1s07CJVTRZQULAiMQCIBVxXAAlJNewjWzTsIlVNFiIxAIgFSFcJCUk17CNbNOwiVU0WUDUHNP80/jT9NPw0+zT6NPk07TT3NPY09TIGNO9XABE07lcACDTuVwgIUDTuVxABUFA080ID80g09FcAEUk18VcACDTxVwgIUDTxVxABUDT0VxERUDXwNPBXERE17zTwVwARNO9XAAg071cICFA071cQAVBQNe4iMQCIBL1XCQlJNewjWzTsIlVNNe007lcREUk17CJbNes07TTrDEQiMQCIBJZXAAlJNekjWzTpIlVNNeqACAAAAAAAAAamNOoWNO0WUFCwNOoWNO0WUDUHNPs0+Ek0+wxNNek09jTpNPcJNPkLNPUKCCI09SISTTXoNOo06CIxAIgEQFcSCUk15iNbNOYiVU0JCzTtCDXnMQAoMQCIBCQpNOcWUDXmSVcACTTmUExXEglQZjEAKDEAiAQIKTToFlA15lcAEjTmUGY05zTrDEEAZ7EisgE057ISJLIQMQCyFDT9shGzMQAoMQCIA9YrNeZJVwAJNOZQTFcSCVBmJwQxAFCwNP80/jT9NPw0+zT6NPk0+DTpNOg09TIGNO5XABE06zTnCRY07FcICFA07FcQAVBQNPNCAnsxACgxAIgDgys15klXAAk05lBMVxIJUGYnBDEAULA0/zT+NP00/DT7NPo0+TT4NOk06DT1MgY07jTzQgI+SCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSlcAIDX/IQZbNf4hB1s1/VdgIjX8gASnZcS0sLEisgE0A4GCAVuyCCOyEDT/sgezsSKyATT8VxERIluyEiSyEDT/shQ0/bIRs7EisgE0/FcAESJbshIkshA0/7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgJISSMMQACHIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEHWzX+IRNbNf1XUCI1/IAEmouRdLA0/FcRETX7NP00/ogCfjT/MQASRDT/NAMhBls0/jQDIRFbNAMhEls0/TQDIRRbIiIiIjIGNPxXABE0+yJbNP0IFjT7VwgIUDT7VxABUFAiQgEDSCI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/IQVbNf6BEFs1/YEYWzX8IQZbNfshB1s1+oAEisGMiDT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWULAhCIgByoERr0k1+UlQNfg0/zT+E0Q0+FcAETX3IQWvNPdXCAhQNPdXEAFQNPhXERFQNfYhCIgBl7EisgEishIkshAyCrIUNP+yEbM09lcRETX1NPZXABEhBa809VcICFA09VcQAVBQNfQhCIgBYbEisgEishIkshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT0UChLAVcAcmdIIzUBMgY1AkIA0zX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0+TT2DEEASjTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV38bZ0glNQEyBjUCQgBlgARcBkX5sDTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/C2dIIQQ1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 27,
  stateKeys: 2,
  stateSize: 154,
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
                "name": "v1340",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1341",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1345",
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
                "name": "v1340",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1341",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1345",
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
                    "name": "_claim0_132",
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
                    "name": "_setTime0_132",
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
                    "name": "_stake0_132",
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
                    "name": "_unstake0_132",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_132",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1594",
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
    "name": "_reach_oe_v1702",
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
    "name": "_reach_oe_v2058",
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
    "name": "_reach_oe_v2369",
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
    "name": "_reach_oe_v2704",
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
    "name": "_reach_oe_v3054",
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
                    "name": "_claim0_132",
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
                    "name": "_setTime0_132",
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
                    "name": "_stake0_132",
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
                    "name": "_unstake0_132",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_132",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1594",
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
        "name": "v6308",
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
  Bytecode: `0x60806040526040516200492c3803806200492c83398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b6141d380620007596000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063a2e6204511610061578063a2e620451461025e578063a694fc3a14610266578063ab53f2c614610279578063bb806dc91461029c578063cadc2e7a146102fc57005b806373b4522c146101df578063817d57f3146101f25780638323075714610212578063a05f99061461022757005b80633bc5b7bf116100c85780633bc5b7bf146101845780633beb26c4146101b15780634e71d92d146101c457806373394993146101cc57005b80630ff1680e146100ff5780631e93b0f11461013f5780632c10a1591461015e5780632e17de781461017157005b366100fd57005b005b34801561010b57600080fd5b5061011f61011a366004613860565b61031c565b604080518251815260209283015192810192909252015b60405180910390f35b34801561014b57600080fd5b506003545b604051908152602001610136565b6100fd61016c36600461387d565b6105f3565b61011f61017f366004613895565b610617565b34801561019057600080fd5b506101a461019f366004613860565b610681565b60405161013691906138c4565b61011f6101bf366004613895565b6106ad565b61011f610716565b6100fd6101da3660046138fb565b610772565b6100fd6101ed36600461387d565b610792565b3480156101fe57600080fd5b506101a461020d366004613860565b6107b2565b34801561021e57600080fd5b50600154610150565b34801561023357600080fd5b5061023c6107d8565b6040805182518152602080840151908201529181015190820152606001610136565b61011f610abc565b61011f610274366004613895565b610b1b565b34801561028557600080fd5b5061028e610b85565b604051610136929190613939565b3480156102a857600080fd5b506102b1610c22565b604051610136919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b34801561030857600080fd5b506101a4610317366004613860565b610ea8565b6040805180820190915260008082526020820152600160005414156103eb5760006002805461034a90613973565b80601f016020809104026020016040519081016040528092919081815260200182805461037690613973565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db9190613b3a565b90506103e960006009610ece565b505b600360005414156105375760006002805461040590613973565b80601f016020809104026020016040519081016040528092919081815260200182805461043190613973565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050508060200190518101906104969190613be4565b90506104b8604080516060810182526000602082018181529282015290815290565b60016104c385610ef4565b5160018111156104d5576104d56138ae565b146104e15760006104ef565b6104ea84610ef4565b604001515b81515260016104fd85610fc6565b51600181111561050f5761050f6138ae565b1461051b576000610529565b61052484610fc6565b604001515b815160200152519392505050565b600560005414156105e25760006002805461055190613973565b80601f016020809104026020016040519081016040528092919081815260200182805461057d90613973565b80156105ca5780601f1061059f576101008083540402835291602001916105ca565b820191906000526020600020905b8154815290600101906020018083116105ad57829003601f168201915b50505050508060200190518101906104969190613c91565b6105ee60006009610ece565b919050565b6105fb6130c9565b61061361060d36849003840184613d56565b82611053565b5050565b60408051808201909152600080825260208201526106336130c9565b61063b61316f565b610643613189565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261067582846112da565b50506060015192915050565b60408051606081018252600080825260208201819052918101919091526106a782610ef4565b92915050565b60408051808201909152600080825260208201526106c96130c9565b6106d161316f565b6106d9613189565b60408051602080820183528782528383019190915260018352815180820190925282825283015261070a82846112da565b50506020015192915050565b60408051808201909152600080825260208201526107326130c9565b61073a61316f565b610742613189565b60006020828101829052908252604080518083019091528281529083015261076a82846112da565b505051919050565b61077a6130c9565b61061361078c36849003840184613dd0565b826112da565b61079a6130c9565b6106136107ac36849003840184613d56565b82612a33565b60408051606081018252600080825260208201819052918101919091526106a782612be4565b6107fc60405180606001604052806000815260200160008152602001600081525090565b600160005414156108b75760006002805461081690613973565b80601f016020809104026020016040519081016040528092919081815260200182805461084290613973565b801561088f5780601f106108645761010080835404028352916020019161088f565b820191906000526020600020905b81548152906001019060200180831161087257829003601f168201915b50505050508060200190518101906108a79190613b3a565b90506108b560006007610ece565b505b600360005414156109b1576000600280546108d190613973565b80601f01602080910402602001604051908101604052809291908181526020018280546108fd90613973565b801561094a5780601f1061091f5761010080835404028352916020019161094a565b820191906000526020600020905b81548152906001019060200180831161092d57829003601f168201915b50505050508060200190518101906109629190613be4565b905061098b60408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60056000541415610aad576000600280546109cb90613973565b80601f01602080910402602001604051908101604052809291908181526020018280546109f790613973565b8015610a445780601f10610a1957610100808354040283529160200191610a44565b820191906000526020600020905b815481529060010190602001808311610a2757829003601f168201915b5050505050806020019051810190610a5c9190613c91565b9050610a8560408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610ab960006007610ece565b90565b6040805180820190915260008082526020820152610ad86130c9565b610ae061316f565b610ae8613189565b600060a08201526004815260408051602080820190925282815290830152610b1082846112da565b505060800151919050565b6040805180820190915260008082526020820152610b376130c9565b610b3f61316f565b610b47613189565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610b7982846112da565b50506040015192915050565b600060606000546002808054610b9a90613973565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc690613973565b8015610c135780601f10610be857610100808354040283529160200191610c13565b820191906000526020600020905b815481529060010190602001808311610bf657829003601f168201915b50505050509050915091509091565b610c2a6131da565b60016000541415610ce557600060028054610c4490613973565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7090613973565b8015610cbd5780601f10610c9257610100808354040283529160200191610cbd565b820191906000526020600020905b815481529060010190602001808311610ca057829003601f168201915b5050505050806020019051810190610cd59190613b3a565b9050610ce360006008610ece565b505b60036000541415610df157600060028054610cff90613973565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b90613973565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050806020019051810190610d909190613be4565b9050610d9a61321b565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60056000541415610e9c57600060028054610e0b90613973565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3790613973565b8015610e845780601f10610e5957610100808354040283529160200191610e84565b820191906000526020600020905b815481529060010190602001808311610e6757829003601f168201915b5050505050806020019051810190610d909190613c91565b610ab960006008610ece565b60408051606081018252600080825260208201819052918101919091526106a782610fc6565b816106135760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610f4057610f406138ae565b1415610fb7576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610f8157610f816138ae565b6001811115610f9257610f926138ae565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611012576110126138ae565b1415610fb7576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f8157610f816138ae565b611063600160005414600f610ece565b815161107e90158061107757508251600154145b6010610ece565b60008080556002805461109090613973565b80601f01602080910402602001604051908101604052809291908181526020018280546110bc90613973565b80156111095780601f106110de57610100808354040283529160200191611109565b820191906000526020600020905b8154815290600101906020018083116110ec57829003601f168201915b50505050508060200190518101906111219190613b3a565b905061114a60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111953415600c610ece565b60a082015160e083015160200151516111ae9190613ec0565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516111f7916111f091339190612c71565b600d610ece565b815161120f906001600160a01b03163314600e610ece565b61121761322e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015282850180516000908190528151909401849052805190940183905283519091019190915290514391015260e083015182516112b49190600190612c89565b60208201805160a0019190915251600060c0909101526112d381612cfd565b5050505050565b6112ea6005600054146027610ece565b81516113059015806112fe57508251600154145b6028610ece565b60008080556002805461131790613973565b80601f016020809104026020016040519081016040528092919081815260200182805461134390613973565b80156113905780601f1061136557610100808354040283529160200191611390565b820191906000526020600020905b81548152906001019060200180831161137357829003601f168201915b50505050508060200190518101906113a89190613c91565b90506113b261327c565b7fa9e586c84135dd0eb80dcde96cd5b610fdecd3cab68ce1fd88af69e25afae205846040516113e19190613ed8565b60405180910390a16000602085015151516004811115611403576114036138ae565b14156119ca5761141534156014610ece565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516114519190600090612c89565b816020018190525061147361146c3384602001516000612c71565b6015610ece565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516114ba9190600190612c89565b81606001819052506114dc6114d53384604001516000612c71565b6016610ece565b60016114e733610fc6565b5160018111156114f9576114f96138ae565b14611505576000611513565b61150e33610fc6565b604001515b608082018190526060820151602001515161153091106017610ece565b600161153b33610ef4565b51600181111561154d5761154d6138ae565b14611559576000611567565b61156233610ef4565b604001515b60a0820181905260c082018051919091526080820151815160200152516040517fd26a737cb3deb0b05329712e66bbf17661fe85ba59ebc81ec8bf49c0f51066f5916115c491815181526020918201519181019190915260400190565b60405180910390a160c08101518352608082015160e0830151106115ec5781608001516115f2565b8160e001515b60e08201526101408201511561164b578161014001518260c001518361010001518360e001516116229190613f41565b61162c9190613f58565b6116369190613f77565b8261012001516116469190613ec0565b61164e565b60005b6101008201526080810151600161166433612be4565b516001811115611676576116766138ae565b14611682576000611690565b61168b33612be4565b604001515b8261010001516116a09190613f41565b8260a001516116af9190613f58565b6116b99190613ec0565b61012082019081523360009081526005602090815260408083208054600160ff199182168117835586519281019290925560068452919093208054909116831781556101008501519201919091556060830151015151905110156118b357610120810151606082015160200151516117319190613f41565b610140820180519190915260608201805160209081015181015183518201529051015160409081015191519115159181019190915282015161012082015161177b91903390612eca565b336000818152600560209081526040808320805460ff191660019081178255019290925590519182527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e910160405180910390a16117d761322e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e08088015184870180519190915290870151815190940193909352610100860151835190940193909352610140808701518351830152915143930192909252908301519083015161188b9190600190612c89565b60208201805160a00191909152610180840151905160c001526118ad81612cfd565b50612a2d565b336000818152600560209081526040808320805460ff191660019081178255019290925590519182527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e910160405180910390a161190f61322e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e0808a0151868901805191909152908901518151909601959095526101008801518551909601959095526101408801518451840152835143920191909152908501518251909101526101808501519051909101526118ad81612cfd565b60016020850151515160048111156119e4576119e46138ae565b1415611c6d5760208401515160400151610160820152611a0634156018610ece565b6101608201805151516101808301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611a4b9190600090612c89565b816101a00181905250611a6e611a673384602001516000612c71565b6019610ece565b6101a081018051602090810151516101c084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611ac590611abe9033906000612c71565b601a610ece565b611adf8260e001518261016001516000015111601b610ece565b6001611aea33610ef4565b516001811115611afc57611afc6138ae565b14611b08576000611b16565b611b1133610ef4565b604001515b6101e0820151526001611b2833610fc6565b516001811115611b3a57611b3a6138ae565b14611b46576000611b54565b611b4f33610fc6565b604001515b6101e08201805160209081019290925251604080518251815291830151928201929092527f4fc35c3e89b86a4cc5f25cc734d9a8cd4f4c3c2fb0185dfee142024c3339849b910160405180910390a16101e08101516020840152611bb661322e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c0808801518651909101526101608601515183860180519190915261010088015181519094019390935261012087015183519094019390935261014086015182519091015251439101526101a08201516101c083015161188b9190600190612c89565b6002602085015151516004811115611c8757611c876138ae565b14156121045760208401515160600151610200820152611ca93415601c610ece565b610200810151516101608301515151611cc29190613ec0565b610220820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611d029190600090612c89565b610240820152602082015161020082015151611d2b91611d2491339190612c71565b601d610ece565b610240810180516020908101515161026084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611d8290611d7b9033906000612c71565b601e610ece565b6001611d8d33610ef4565b516001811115611d9f57611d9f6138ae565b14611dab576000611db9565b611db433610ef4565b604001515b6102808201526001611dca33610fc6565b516001811115611ddc57611ddc6138ae565b14611de8576000611df6565b611df133610fc6565b604001515b6102a082019081526102808201516102c083018051919091529051815160200152516040517fc18b08b2a039de4d97c43ec46954e9e7becc233bda40563fbead87d9a30da65b91611e5891815181526020918201519181019190915260400190565b60405180910390a16102c08101516040840152608082015160e083015110611e84578160800151611e8a565b8160e001515b6102e082015261014082015115611ee5578161014001518260c00151836101000151836102e00151611ebc9190613f41565b611ec69190613f58565b611ed09190613f77565b826101200151611ee09190613ec0565b611ee8565b60005b610300820152336000818152600560205260409020805460ff191660019081179091556102a083015191611f1b90612be4565b516001811115611f2d57611f2d6138ae565b14611f39576000611f47565b611f4233612be4565b604001515b826103000151611f579190613f41565b826102800151611f679190613f58565b611f719190613ec0565b33600090815260056020908152604080832060019081019490945560068252808320805460ff19908116861782556103008701519186019190915560049092529091208054909116909117905561020081015151610280820151611fd59190613ec0565b3360008181526004602090815260409182902060010193909355610200840151518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a161203561322e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526102e0850151815190920191909152610300840151905190910152610200820151516101408401516120d69190613ec0565b60208201805160600191909152514360809091015261024082015161026083015161188b9190600190612c89565b600360208501515151600481111561211e5761211e6138ae565b141561262b57602084015151608001516103208201526121403415601f610ece565b61016082018051515161034083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516121859190600090612c89565b8161036001819052506121a86121a13384602001516000612c71565b6020610ece565b61036081018051602090810151516103808401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516121f39190600190612c89565b816103a0018190525061221661220f3384604001516000612c71565b6021610ece565b600161222133610ef4565b516001811115612233576122336138ae565b1461223f57600061224d565b61224833610ef4565b604001515b6103c0820152600161225e33610fc6565b516001811115612270576122706138ae565b1461227c57600061228a565b61228533610fc6565b604001515b6103e082019081526103c082015161040083018051919091529051815160200152516040517fba2ce90f7362dc1b32d6b24c101a1f34d879573bb446bbbb7723c7f910396c1d916122ec91815181526020918201519181019190915260400190565b60405180910390a161040081015160608401526103c0810151610320820151516123199110156022610ece565b6103a08101515151610320820151516123359110156023610ece565b81608001518260e001511061234e578160800151612354565b8160e001515b610420820152610140820151156123af578161014001518260c001518361010001518361042001516123869190613f41565b6123909190613f58565b61239a9190613f77565b8261012001516123aa9190613ec0565b6123b2565b60005b610440820152336000818152600560205260409020805460ff191660019081179091556103e0830151916123e590612be4565b5160018111156123f7576123f76138ae565b14612403576000612411565b61240c33612be4565b604001515b8261044001516124219190613f41565b826103c001516124319190613f58565b61243b9190613ec0565b33600090815260056020908152604080832060019081019490945560068252808320805460ff199081168617825561044087015191860191909155600490925290912080549091169091179055610320810151516103c082015161249f9190613f41565b33600090815260046020526040902060010155610320810151516103a082015151516124cb9190613f41565b61046082018051919091526103a08201805151602090810151835182015290515160409081015192519215159201919091528201516103208201515161251391903390612eca565b610320810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a161255c61322e565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e0850151818401805191909152610420850151815190920191909152610440840151905190910152610320820151516101408401516125fd9190613f41565b6020820180516060019190915251436080909101526103a082015161046083015161188b9190600090612c89565b6004602085015151516004811115612645576126456138ae565b1415612a2d5761265734156024610ece565b610160820180515151610480830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161269c9190600090612c89565b816104a001819052506126bf6126b83384602001516000612c71565b6025610ece565b6104a081018051602090810151516104c0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516127169061270f9033906000612c71565b6026610ece565b600161272133610ef4565b516001811115612733576127336138ae565b1461273f57600061274d565b61274833610ef4565b604001515b6104e0820152600161275e33610fc6565b516001811115612770576127706138ae565b1461277c57600061278a565b61278533610fc6565b604001515b61050082019081526104e082015161052083018051919091529051815160200152516040517f3f1fb0dfb65576b46237b0d5fc81125eb7f30a30587a530e3cdae7ee61b5fa55916127ec91815181526020918201519181019190915260400190565b60405180910390a1806105200151836080018190525081608001518260e001511061281b578160800151612821565b8160e001515b6105408201526101408201511561287c578161014001518260c001518361010001518361054001516128539190613f41565b61285d9190613f58565b6128679190613f77565b8261012001516128779190613ec0565b61287f565b60005b610560820152336000818152600560205260409020805460ff19166001908117909155610500830151916128b290612be4565b5160018111156128c4576128c46138ae565b146128d05760006128de565b6128d933612be4565b604001515b8261056001516128ee9190613f41565b826104e001516128fe9190613f58565b6129089190613ec0565b3360008181526005602090815260408083206001908101959095556006825291829020805460ff191685178155610560860151940193909355519081527f1d2f67e3c99742b6b589e3af77fe96ec360dc58b8dca7d3d9a6ee9b64385a2e8910160405180910390a161297861322e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e087015183860180519190915261054087015181519094019390935261056086015183519094019390935261014086015182519091015251439101526104a08201516104c083015161188b9190600190612c89565b50505050565b612a436003600054146012610ece565b8151612a5e901580612a5757508251600154145b6013610ece565b600080805560028054612a7090613973565b80601f0160208091040260200160405190810160405280929190818152602001828054612a9c90613973565b8015612ae95780601f10612abe57610100808354040283529160200191612ae9565b820191906000526020600020905b815481529060010190602001808311612acc57829003601f168201915b5050505050806020019051810190612b019190613be4565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1612b4f34156011610ece565b80516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612b8d573d6000803e3d6000fd5b5060408101518151610120830151612baf92919060015b602002015151612eca565b60208101518151610120830151612bc99291906000612ba4565b60008080556001819055612bdf906002906135ed565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612c3057612c306138ae565b1415610fb7576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610f8157610f816138ae565b6000612c7f83853085612ede565b90505b9392505050565b612c91613627565b60005b6002811015612cdd57848160028110612caf57612caf613e94565b6020020151828260028110612cc657612cc6613e94565b602002015280612cd581613f99565b915050612c94565b5081818460028110612cf157612cf1613e94565b60200201529392505050565b8051608001516020820151511015612df257612d17613672565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152855160c0908101518187015283870180515160e088015280518501516101008801528051860151610120880152805190930151610140870152825190910151610160860152905101516101808401526005600055436001559051612dce91839101613ff2565b60405160208183030381529060405260029080519060200190612bdf9291906136fb565b6040517fde386e12d6c97acd73514c71490d6d5114424ddc93ef1080bd05ffe08c20868d90600090a1612e2361377f565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152828601805184015160c080880191909152815186015160e08801528151909301516101008701528051909101516101208601525101516101408401526003600055436001559051612dce918391016140b7565b50565b612ed5838383612fb8565b612bdf57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612f4591614164565b60006040518083038185875af1925050503d8060008114612f82576040519150601f19603f3d011682016040523d82523d6000602084013e612f87565b606091505b5091509150612f9882826001613089565b5080806020019051810190612fad9190614180565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161301791614164565b60006040518083038185875af1925050503d8060008114613054576040519150601f19603f3d011682016040523d82523d6000602084013e613059565b606091505b509150915061306a82826002613089565b508080602001905181019061307f9190614180565b9695505050505050565b60608315613098575081612c82565b8251156130a85782518084602001fd5b60405163100960cb60e01b815260048101839052602401610eeb565b905290565b6040805160e08101909152600060a0820181815260c083019190915281908152602001613109604051806040016040528060008152602001600081525090565b815260200161312b604051806040016040528060008152602001600081525090565b815260200161314d604051806040016040528060008152602001600081525090565b81526020016130c4604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016130c46137ed565b6040805160c081018252600080825260208083018290528351808201855282815283850152835180820185528281526060840152835190810190935282529060808201908152600060209091015290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b60405180602001604052806130c46131da565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252908152602081016130c4613800565b604080516105e08101909152600061058082018181526105a083018290526105c08301919091528152602081016132b1613627565b815260408051606081018252600080825260208281018290529282015291019081526020016132de613627565b8152602001600081526020016000815260200161330e604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200161334e604051806060016040528060008152602001600081526020016000151581525090565b81526020016133696040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613396613627565b815260408051606081018252600080825260208281018290529282015291019081526020016133d8604051806040016040528060008152602001600081525090565b81526020016133f36040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613420613627565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001613470604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016134996040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016134c6613627565b815260408051606081018252600080825260208281018290529282015291019081526020016134f3613627565b81526020016000815260200160008152602001613523604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200161355c604051806060016040528060008152602001600081526020016000151581525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613589613627565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016135d9604051806040016040528060008152602001600081525090565b815260200160008152602001600081525090565b5080546135f990613973565b6000825580601f10613609575050565b601f016020900490600052602060002090810190612ec79190613836565b60405180604001604052806002905b61365c604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816136365790505090565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016136ee613627565b8152602001600081525090565b82805461370790613973565b90600052602060002090601f016020900481019282613729576000855561376f565b82601f1061374257805160ff191683800117855561376f565b8280016001018555821561376f579182015b8281111561376f578251825591602001919060010190613754565b5061377b929150613836565b5090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016136ee613627565b60405180602001604052806130c4613189565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016136ee613627565b5b8082111561377b5760008155600101613837565b6001600160a01b0381168114612ec757600080fd5b60006020828403121561387257600080fd5b8135612c828161384b565b60006040828403121561388f57600080fd5b50919050565b6000602082840312156138a757600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106138db576138db6138ae565b808352506020830151151560208301526040830151604083015292915050565b600060e0828403121561388f57600080fd5b60005b83811015613928578181015183820152602001613910565b83811115612a2d5750506000910152565b828152604060208201526000825180604084015261395e81606085016020870161390d565b601f01601f1916919091016060019392505050565b600181811c9082168061398757607f821691505b6020821081141561388f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156139e1576139e16139a8565b60405290565b6040516060810167ffffffffffffffff811182821017156139e1576139e16139a8565b604051610160810167ffffffffffffffff811182821017156139e1576139e16139a8565b6040516101a0810167ffffffffffffffff811182821017156139e1576139e16139a8565b6040516020810167ffffffffffffffff811182821017156139e1576139e16139a8565b60405160c0810167ffffffffffffffff811182821017156139e1576139e16139a8565b80516105ee8161384b565b8015158114612ec757600080fd5b600082601f830112613ac257600080fd5b613aca6139be565b8060c0840185811115613adc57600080fd5b845b81811015613b2f5760608188031215613af75760008081fd5b613aff6139e7565b8151815260208083015181830152604080840151613b1c81613aa3565b9083015290855290930192606001613ade565b509095945050505050565b60006101a08284031215613b4d57600080fd5b604051610100810181811067ffffffffffffffff82111715613b7157613b716139a8565b6040528251613b7f8161384b565b8152613b8d60208401613a98565b6020820152613b9e60408401613a98565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613bd88460e08501613ab1565b60e08201529392505050565b60006102008284031215613bf757600080fd5b613bff613a0a565b613c0883613a98565b8152613c1660208401613a98565b6020820152613c2760408401613a98565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613c7985828601613ab1565b908201526101e0929092015161014083015250919050565b60006102408284031215613ca457600080fd5b613cac613a2e565b613cb583613a98565b8152613cc360208401613a98565b6020820152613cd460408401613a98565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160613d3e85828601613ab1565b90820152610220929092015161018083015250919050565b600060408284031215613d6857600080fd5b613d706139be565b823581526020830135613d8281613aa3565b60208201529392505050565b600060208284031215613da057600080fd5b6040516020810181811067ffffffffffffffff82111715613dc357613dc36139a8565b6040529135825250919050565b600081830360e0811215613de357600080fd5b613deb6139be565b8335815260c0601f1983011215613e0157600080fd5b613e09613a52565b9150613e13613a75565b602085013560058110613e2557600080fd5b81526040850135613e3581613aa3565b6020820152613e478660608701613d8e565b6040820152613e598660808701613d8e565b6060820152613e6b8660a08701613d8e565b608082015260c0850135613e7e81613aa3565b60a0820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115613ed357613ed3613eaa565b500190565b81518152602082015151805160e08301919060058110613efa57613efa6138ae565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a084015260a0810151151560c08401525092915050565b600082821015613f5357613f53613eaa565b500390565b6000816000190483118215151615613f7257613f72613eaa565b500290565b600082613f9457634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415613fad57613fad613eaa565b5060010190565b8060005b6002811015612a2d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613fb8565b81516001600160a01b031681526102408101602083015161401e60208401826001600160a01b03169052565b50604083015161403960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516140a382850182613fb4565b505061018083015161022083015292915050565b81516001600160a01b03168152610200810160208301516140e360208401826001600160a01b03169052565b5060408301516140fe60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015161415082850182613fb4565b50506101408301516101e083015292915050565b6000825161417681846020870161390d565b9190910192915050565b60006020828403121561419257600080fd5b8151612c8281613aa356fea2646970667358221220cb905e90b3ae1385213e859ec5df32a03a1c960544dda9b092d5952a231370d664736f6c634300080c0033`,
  BytecodeLen: 18732,
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
    at: './index.rsh:361:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:365:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:213:21:after expr stmt semicolon',
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

// Automatically generated with Reach 0.1.9 (78dbf873)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (78dbf873)';
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
  const ctc6 = stdlib.T_Struct([['totalStaked', ctc2], ['lastUpdateTime', ctc2], ['rewardPerTokenStored', ctc2]]);
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
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1393] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async () => {
              
              const v3470 = {
                lastUpdateTime: v1414,
                rewardPerTokenStored: v1415,
                totalStaked: v1416
                };
              
              return v3470;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async () => {
              
              const v3470 = {
                lastUpdateTime: v1414,
                rewardPerTokenStored: v1415,
                totalStaked: v1416
                };
              
              return v3470;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = svs;
            return (await ((async () => {
              
              const v1426 = {
                lastUpdateTime: v1414,
                rewardPerTokenStored: v1415,
                totalStaked: v1416
                };
              
              return v1426;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1393] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async () => {
              
              const v3469 = {
                beginBlock: v1373,
                endBlock: v1374,
                rewardToken: v1372,
                stakeToken: v1371,
                totalRewardAmount: v1375
                };
              
              return v3469;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async () => {
              
              const v3469 = {
                beginBlock: v1373,
                endBlock: v1374,
                rewardToken: v1372,
                stakeToken: v1371,
                totalRewardAmount: v1375
                };
              
              return v3469;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = svs;
            return (await ((async () => {
              
              const v1425 = {
                beginBlock: v1373,
                endBlock: v1374,
                rewardToken: v1372,
                stakeToken: v1371,
                totalRewardAmount: v1375
                };
              
              return v1425;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1393] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async (_v3471 ) => {
                const v3471 = stdlib.protect(ctc0, _v3471, null);
              
              const v3472 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3471), null);
              const v3473 = stdlib.fromSome(v3472, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
              const v3474 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3471), null);
              const v3475 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
              const v3476 = {
                reward: v3475,
                staked: v3473
                };
              
              return v3476;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416] = svs;
            return (await ((async (_v3471 ) => {
                const v3471 = stdlib.protect(ctc0, _v3471, null);
              
              const v3472 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3471), null);
              const v3473 = stdlib.fromSome(v3472, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
              const v3474 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3471), null);
              const v3475 = stdlib.fromSome(v3474, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
              const v3476 = {
                reward: v3475,
                staked: v3473
                };
              
              return v3476;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = svs;
            return (await ((async (_v1427 ) => {
                const v1427 = stdlib.protect(ctc0, _v1427, null);
              
              const v1428 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1427), null);
              const v1429 = stdlib.fromSome(v1428, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
              const v1430 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1427), null);
              const v1431 = stdlib.fromSome(v1430, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
              const v1432 = {
                reward: v1431,
                staked: v1429
                };
              
              return v1432;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      7: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5]
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
    rewardToken: ctc3,
    stakeToken: ctc3,
    totalRewardAmount: ctc1
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    claim0_108: ctc5,
    setTime0_108: ctc6,
    stake0_108: ctc6,
    unstake0_108: ctc6,
    update0_108: ctc5
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
  
  
  const v1353 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1354 = [v1353, v1353];
  const v1360 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:121:38:application',
    fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1361 = v1360.stakeToken;
  const v1362 = v1360.rewardToken;
  const v1363 = v1360.beginBlock;
  const v1364 = v1360.endBlock;
  const v1365 = v1360.totalRewardAmount;
  const v1366 = stdlib.tokenEq(v1361, v1362);
  const v1367 = v1366 ? false : true;
  stdlib.assert(v1367, {
    at: './index.rsh:123:11:application',
    fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1368 = stdlib.sub(v1364, v1363);
  const v1369 = stdlib.div(v1365, v1368);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1361, v1362, v1363, v1364, v1365, v1369],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1371, v1372, v1373, v1374, v1375, v1376], secs: v1378, time: v1377, didSend: v45, from: v1370 } = txn1;
      
      const v1379 = stdlib.tokenEq(v1371, v1372);
      const v1380 = v1379 ? false : true;
      ;
      const v1381 = v1354[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0)];
      const v1383 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
      const v1384 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
      const v1385 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1383, v1384];
      const v1386 = stdlib.Array_set(v1354, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0), v1385);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1371
        });
      const v1388 = v1386[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
      const v1390 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
      const v1391 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
      const v1392 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1390, v1391];
      const v1393 = stdlib.Array_set(v1386, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1), v1392);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1372
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
  const {data: [v1371, v1372, v1373, v1374, v1375, v1376], secs: v1378, time: v1377, didSend: v45, from: v1370 } = txn1;
  const v1379 = stdlib.tokenEq(v1371, v1372);
  const v1380 = v1379 ? false : true;
  stdlib.assert(v1380, {
    at: './index.rsh:137:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1381 = v1354[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0)];
  const v1383 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1384 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
  const v1385 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1383, v1384];
  const v1386 = stdlib.Array_set(v1354, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0), v1385);
  ;
  const v1388 = v1386[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1390 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1391 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
  const v1392 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1390, v1391];
  const v1393 = stdlib.Array_set(v1386, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1), v1392);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1393],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1377,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0), [[v1375, v1372]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1397, time: v1396, didSend: v52, from: v1395 } = txn2;
      
      ;
      const v1398 = v1393[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
      const v1399 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
      const v1400 = stdlib.add(v1399, v1375);
      const v1403 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
      const v1404 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
      const v1405 = [v1400, v1403, v1404];
      const v1406 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1405);
      sim_r.txns.push({
        amt: v1375,
        kind: 'to',
        tok: v1372
        });
      const v1407 = stdlib.addressEq(v1370, v1395);
      ;
      
      const v1412 = stdlib.checkedBigNumberify('./index.rsh:241:5:decimal', stdlib.UInt_max, 0);
      const v1413 = true;
      const v1414 = stdlib.checkedBigNumberify('./index.rsh:239:5:decimal', stdlib.UInt_max, 0);
      const v1415 = stdlib.checkedBigNumberify('./index.rsh:240:5:decimal', stdlib.UInt_max, 0);
      const v1416 = stdlib.checkedBigNumberify('./index.rsh:238:5:decimal', stdlib.UInt_max, 0);
      const v1417 = v1396;
      const v1423 = v1406;
      
      if (await (async () => {
        
        return v1413;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1397, time: v1396, didSend: v52, from: v1395 } = txn2;
  ;
  const v1398 = v1393[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1399 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
  const v1400 = stdlib.add(v1399, v1375);
  const v1403 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1404 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1405 = [v1400, v1403, v1404];
  const v1406 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1405);
  ;
  const v1407 = stdlib.addressEq(v1370, v1395);
  stdlib.assert(v1407, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:217:22:application',
    fs: ['at ./index.rsh:216:7:application call to [unknown function] (defined at: ./index.rsh:216:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v1412 = stdlib.checkedBigNumberify('./index.rsh:241:5:decimal', stdlib.UInt_max, 0);
  let v1413 = true;
  let v1414 = stdlib.checkedBigNumberify('./index.rsh:239:5:decimal', stdlib.UInt_max, 0);
  let v1415 = stdlib.checkedBigNumberify('./index.rsh:240:5:decimal', stdlib.UInt_max, 0);
  let v1416 = stdlib.checkedBigNumberify('./index.rsh:238:5:decimal', stdlib.UInt_max, 0);
  let v1417 = v1396;
  let v1423 = v1406;
  
  while (await (async () => {
    
    return v1413;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn3;
    switch (v1596[0]) {
      case 'claim0_108': {
        const v1599 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v1669 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1670 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1674 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1675 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v1676 = [v1670, v1674, v1675];
        const v1677 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v1676);
        ;
        const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1683 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1684 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v1685 = [v1679, v1683, v1684];
        const v1686 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v1685);
        ;
        let v1688;
        const v1689 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v1689) {
          v1688 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1690 = stdlib.sub(v1412, v1414);
          const v1691 = stdlib.mul(v1690, v1376);
          const v1692 = stdlib.div(v1691, v1416);
          const v1693 = stdlib.add(v1415, v1692);
          v1688 = v1693;
          }
        const v1696 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v1697 = stdlib.fromSome(v1696, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v1700 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v1701 = stdlib.fromSome(v1700, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v1708 = stdlib.sub(v1688, v1701);
        const v1709 = stdlib.mul(v1699, v1708);
        const v1712 = stdlib.add(v1709, v1697);
        await stdlib.mapSet(map1, v1595, v1712);
        await stdlib.mapSet(map2, v1595, v1688);
        await stdlib.mapSet(map1, v1595, stdlib.checkedBigNumberify('./index.rsh:300:25:decimal', stdlib.UInt_max, 0));
        const v1726 = v1686[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
        const v1727 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 0)];
        const v1734 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
        const v1735 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 2)];
        const v1736 = [v1727, v1734, v1735];
        const v1737 = stdlib.Array_set(v1686, stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1), v1736);
        const v1742 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
          staked: v1699
          };
        await txn3.getOutput('claim', 'v1742', ctc8, v1742);
        null;
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v1688;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v1737;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'setTime0_108': {
        const v1973 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v2043 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2044 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2048 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2049 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2050 = [v2044, v2048, v2049];
        const v2051 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2050);
        ;
        const v2052 = v2051[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2053 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2057 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2058 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2059 = [v2053, v2057, v2058];
        const v2060 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2059);
        ;
        const v2125 = v1973[stdlib.checkedBigNumberify('./index.rsh:318:9:spread', stdlib.UInt_max, 0)];
        let v2126;
        const v2127 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2127) {
          v2126 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2128 = stdlib.sub(v2125, v1414);
          const v2129 = stdlib.mul(v2128, v1376);
          const v2130 = stdlib.div(v2129, v1416);
          const v2131 = stdlib.add(v1415, v2130);
          v2126 = v2131;
          }
        const v2134 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2135 = stdlib.fromSome(v2134, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2136 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2137 = stdlib.fromSome(v2136, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2139 = stdlib.fromSome(v2138, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v2146 = stdlib.sub(v2126, v2139);
        const v2147 = stdlib.mul(v2137, v2146);
        const v2150 = stdlib.add(v2147, v2135);
        await stdlib.mapSet(map1, v1595, v2150);
        await stdlib.mapSet(map2, v1595, v2126);
        const v2166 = {
          reward: v2150,
          staked: v2137
          };
        await txn3.getOutput('setTime', 'v2166', ctc8, v2166);
        const cv1412 = v2125;
        const cv1413 = true;
        const cv1414 = v2125;
        const cv1415 = v2126;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v2060;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'stake0_108': {
        const v2347 = v1596[1];
        undefined /* setApiDetails */;
        const v2366 = v2347[stdlib.checkedBigNumberify('./index.rsh:261:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2417 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2418 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2419 = stdlib.add(v2418, v2366);
        const v2422 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2423 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2424 = [v2419, v2422, v2423];
        const v2425 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2424);
        ;
        const v2426 = v2425[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2427 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2431 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2432 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2433 = [v2427, v2431, v2432];
        const v2434 = stdlib.Array_set(v2425, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2433);
        ;
        let v2550;
        const v2551 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2551) {
          v2550 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2552 = stdlib.sub(v1412, v1414);
          const v2553 = stdlib.mul(v2552, v1376);
          const v2554 = stdlib.div(v2553, v1416);
          const v2555 = stdlib.add(v1415, v2554);
          v2550 = v2555;
          }
        const v2558 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2559 = stdlib.fromSome(v2558, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2562 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2563 = stdlib.fromSome(v2562, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v2570 = stdlib.sub(v2550, v2563);
        const v2571 = stdlib.mul(v2561, v2570);
        const v2574 = stdlib.add(v2571, v2559);
        await stdlib.mapSet(map1, v1595, v2574);
        await stdlib.mapSet(map2, v1595, v2550);
        const v2588 = stdlib.add(v2561, v2366);
        await stdlib.mapSet(map0, v1595, v2588);
        const v2593 = {
          reward: v2574,
          staked: v2588
          };
        await txn3.getOutput('stake', 'v2593', ctc8, v2593);
        null;
        const v2600 = stdlib.add(v1416, v2366);
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v2550;
        const cv1416 = v2600;
        const cv1417 = v1597;
        const cv1423 = v2434;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'unstake0_108': {
        const v2721 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v2791 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2792 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2796 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2797 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2798 = [v2792, v2796, v2797];
        const v2799 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2798);
        ;
        const v2800 = v2799[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2801 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2805 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2806 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2807 = [v2801, v2805, v2806];
        const v2808 = stdlib.Array_set(v2799, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2807);
        ;
        const v2977 = v2721[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, 0)];
        const v2978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2979 = stdlib.fromSome(v2978, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2980 = stdlib.le(v2977, v2979);
        stdlib.assert(v2980, {
          at: './index.rsh:283:14:application',
          fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2981 = v2808[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
        const v2982 = v2981[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
        const v2983 = stdlib.le(v2977, v2982);
        stdlib.assert(v2983, {
          at: './index.rsh:284:14:application',
          fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v2984;
        const v2985 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2985) {
          v2984 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2986 = stdlib.sub(v1412, v1414);
          const v2987 = stdlib.mul(v2986, v1376);
          const v2988 = stdlib.div(v2987, v1416);
          const v2989 = stdlib.add(v1415, v2988);
          v2984 = v2989;
          }
        const v2992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2996 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2997 = stdlib.fromSome(v2996, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v3004 = stdlib.sub(v2984, v2997);
        const v3005 = stdlib.mul(v2979, v3004);
        const v3008 = stdlib.add(v3005, v2993);
        await stdlib.mapSet(map1, v1595, v3008);
        await stdlib.mapSet(map2, v1595, v2984);
        const v3020 = stdlib.sub(v2979, v2977);
        await stdlib.mapSet(map0, v1595, v3020);
        const v3026 = stdlib.sub(v2982, v2977);
        const v3029 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 1)];
        const v3030 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 2)];
        const v3031 = [v3026, v3029, v3030];
        const v3032 = stdlib.Array_set(v2808, stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 0), v3031);
        ;
        const v3037 = {
          reward: v3008,
          staked: v3020
          };
        await txn3.getOutput('unstake', 'v3037', ctc8, v3037);
        null;
        const v3044 = stdlib.sub(v1416, v2977);
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v2984;
        const cv1416 = v3044;
        const cv1417 = v1597;
        const cv1423 = v3032;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'update0_108': {
        const v3095 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v3165 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3166 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3170 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3171 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v3172 = [v3166, v3170, v3171];
        const v3173 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v3172);
        ;
        const v3174 = v3173[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3175 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3179 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3180 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v3181 = [v3175, v3179, v3180];
        const v3182 = stdlib.Array_set(v3173, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v3181);
        ;
        let v3421;
        const v3422 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v3422) {
          v3421 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3423 = stdlib.sub(v1412, v1414);
          const v3424 = stdlib.mul(v3423, v1376);
          const v3425 = stdlib.div(v3424, v1416);
          const v3426 = stdlib.add(v1415, v3425);
          v3421 = v3426;
          }
        const v3429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v3430 = stdlib.fromSome(v3429, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v3431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v3432 = stdlib.fromSome(v3431, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v3433 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v3434 = stdlib.fromSome(v3433, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v3441 = stdlib.sub(v3421, v3434);
        const v3442 = stdlib.mul(v3432, v3441);
        const v3445 = stdlib.add(v3442, v3430);
        await stdlib.mapSet(map1, v1595, v3445);
        await stdlib.mapSet(map2, v1595, v3421);
        const v3461 = {
          reward: v3445,
          staked: v3432
          };
        await txn3.getOutput('update', 'v3461', ctc8, v3461);
        null;
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v3421;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v3182;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1417,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:328:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3480, time: v3479, didSend: v1139, from: v3478 } = txn3;
      
      ;
      const v3481 = v3479;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1372
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1371
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3480, time: v3479, didSend: v1139, from: v3478 } = txn3;
  ;
  let v3481 = v3479;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416],
      evt_cnt: 0,
      funcNum: 5,
      lct: v3481,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:331:36:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v3491, time: v3490, didSend: v1146, from: v3489 } = txn4;
        
        ;
        const v3492 = stdlib.addressEq(v1370, v3489);
        ;
        const cv3481 = v3490;
        
        await (async () => {
          const v3481 = cv3481;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1372
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v1371
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v3491, time: v3490, didSend: v1146, from: v3489 } = txn4;
    ;
    const v3492 = stdlib.addressEq(v1370, v3489);
    stdlib.assert(v3492, {
      at: './index.rsh:331:36:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv3481 = v3490;
    
    v3481 = cv3481;
    
    continue;
    
    }
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
    claim0_108: ctc4,
    setTime0_108: ctc5,
    stake0_108: ctc5,
    unstake0_108: ctc5,
    update0_108: ctc4
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc8 = stdlib.T_Address;
  
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
  
  
  const v1353 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1354 = [v1353, v1353];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1371, v1372, v1373, v1374, v1375, v1376], secs: v1378, time: v1377, didSend: v45, from: v1370 } = txn1;
  const v1379 = stdlib.tokenEq(v1371, v1372);
  const v1380 = v1379 ? false : true;
  stdlib.assert(v1380, {
    at: './index.rsh:137:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1381 = v1354[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0)];
  const v1383 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1384 = v1381[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
  const v1385 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1383, v1384];
  const v1386 = stdlib.Array_set(v1354, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 0), v1385);
  ;
  const v1388 = v1386[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1390 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1)];
  const v1391 = v1388[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 2)];
  const v1392 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1390, v1391];
  const v1393 = stdlib.Array_set(v1386, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, 1), v1392);
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
  const {data: [], secs: v1397, time: v1396, didSend: v52, from: v1395 } = txn2;
  ;
  const v1398 = v1393[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1399 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 0)];
  const v1400 = stdlib.add(v1399, v1375);
  const v1403 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1)];
  const v1404 = v1398[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 2)];
  const v1405 = [v1400, v1403, v1404];
  const v1406 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, 1), v1405);
  ;
  const v1407 = stdlib.addressEq(v1370, v1395);
  stdlib.assert(v1407, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:217:22:application',
    fs: ['at ./index.rsh:216:7:application call to [unknown function] (defined at: ./index.rsh:216:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v1412 = stdlib.checkedBigNumberify('./index.rsh:241:5:decimal', stdlib.UInt_max, 0);
  let v1413 = true;
  let v1414 = stdlib.checkedBigNumberify('./index.rsh:239:5:decimal', stdlib.UInt_max, 0);
  let v1415 = stdlib.checkedBigNumberify('./index.rsh:240:5:decimal', stdlib.UInt_max, 0);
  let v1416 = stdlib.checkedBigNumberify('./index.rsh:238:5:decimal', stdlib.UInt_max, 0);
  let v1417 = v1396;
  let v1423 = v1406;
  
  while (await (async () => {
    
    return v1413;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn3;
    switch (v1596[0]) {
      case 'claim0_108': {
        const v1599 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v1669 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1670 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1674 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1675 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v1676 = [v1670, v1674, v1675];
        const v1677 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v1676);
        ;
        const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v1683 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v1684 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v1685 = [v1679, v1683, v1684];
        const v1686 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v1685);
        ;
        let v1688;
        const v1689 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v1689) {
          v1688 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1690 = stdlib.sub(v1412, v1414);
          const v1691 = stdlib.mul(v1690, v1376);
          const v1692 = stdlib.div(v1691, v1416);
          const v1693 = stdlib.add(v1415, v1692);
          v1688 = v1693;
          }
        const v1695 = 'before';
        stdlib.protect(ctc0, await interact.log(v1695), {
          at: './index.rsh:184:22:application',
          fs: ['at ./index.rsh:184:22:application call to [unknown function] (defined at: ./index.rsh:184:22:function exp)', 'at ./index.rsh:184:22:application call to "liftedInteract" (defined at: ./index.rsh:184:22:application)', 'at ./index.rsh:299:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1696 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v1697 = stdlib.fromSome(v1696, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v1700 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v1701 = stdlib.fromSome(v1700, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v1703 = {
          lastUpdateTime: v1414,
          p: v1595,
          reward: v1697,
          rewardPerTokenPaid: v1701,
          rewardPerTokenStored: v1415,
          rewardPerTokenStoredNew: v1688,
          staked: v1699,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v1703), {
          at: './index.rsh:185:22:application',
          fs: ['at ./index.rsh:185:22:application call to [unknown function] (defined at: ./index.rsh:185:22:function exp)', 'at ./index.rsh:185:22:application call to "liftedInteract" (defined at: ./index.rsh:185:22:application)', 'at ./index.rsh:299:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1708 = stdlib.sub(v1688, v1701);
        const v1709 = stdlib.mul(v1699, v1708);
        const v1712 = stdlib.add(v1709, v1697);
        await stdlib.mapSet(map1, v1595, v1712);
        await stdlib.mapSet(map2, v1595, v1688);
        const v1714 = 'after';
        stdlib.protect(ctc0, await interact.log(v1714), {
          at: './index.rsh:199:22:application',
          fs: ['at ./index.rsh:199:22:application call to [unknown function] (defined at: ./index.rsh:199:22:function exp)', 'at ./index.rsh:199:22:application call to "liftedInteract" (defined at: ./index.rsh:199:22:application)', 'at ./index.rsh:299:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1722 = {
          reward: v1712,
          rewardPerTokenPaid: v1688,
          staked: v1699,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v1722), {
          at: './index.rsh:201:22:application',
          fs: ['at ./index.rsh:201:22:application call to [unknown function] (defined at: ./index.rsh:201:22:function exp)', 'at ./index.rsh:201:22:application call to "liftedInteract" (defined at: ./index.rsh:201:22:application)', 'at ./index.rsh:299:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        await stdlib.mapSet(map1, v1595, stdlib.checkedBigNumberify('./index.rsh:300:25:decimal', stdlib.UInt_max, 0));
        const v1726 = v1686[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
        const v1727 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 0)];
        const v1734 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
        const v1735 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 2)];
        const v1736 = [v1727, v1734, v1735];
        const v1737 = stdlib.Array_set(v1686, stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1), v1736);
        const v1742 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
          staked: v1699
          };
        await txn3.getOutput('claim', 'v1742', ctc7, v1742);
        null;
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v1688;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v1737;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'setTime0_108': {
        const v1973 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v2043 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2044 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2048 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2049 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2050 = [v2044, v2048, v2049];
        const v2051 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2050);
        ;
        const v2052 = v2051[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2053 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2057 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2058 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2059 = [v2053, v2057, v2058];
        const v2060 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2059);
        ;
        const v2125 = v1973[stdlib.checkedBigNumberify('./index.rsh:318:9:spread', stdlib.UInt_max, 0)];
        let v2126;
        const v2127 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2127) {
          v2126 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2128 = stdlib.sub(v2125, v1414);
          const v2129 = stdlib.mul(v2128, v1376);
          const v2130 = stdlib.div(v2129, v1416);
          const v2131 = stdlib.add(v1415, v2130);
          v2126 = v2131;
          }
        const v2133 = 'before';
        stdlib.protect(ctc0, await interact.log(v2133), {
          at: './index.rsh:184:22:application',
          fs: ['at ./index.rsh:184:22:application call to [unknown function] (defined at: ./index.rsh:184:22:function exp)', 'at ./index.rsh:184:22:application call to "liftedInteract" (defined at: ./index.rsh:184:22:application)', 'at ./index.rsh:321:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:320:24:application call to [unknown function] (defined at: ./index.rsh:320:24:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2134 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2135 = stdlib.fromSome(v2134, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2136 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2137 = stdlib.fromSome(v2136, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2139 = stdlib.fromSome(v2138, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v2141 = {
          lastUpdateTime: v1414,
          p: v1595,
          reward: v2135,
          rewardPerTokenPaid: v2139,
          rewardPerTokenStored: v1415,
          rewardPerTokenStoredNew: v2126,
          staked: v2137,
          time: v2125
          };
        stdlib.protect(ctc0, await interact.log(v2141), {
          at: './index.rsh:185:22:application',
          fs: ['at ./index.rsh:185:22:application call to [unknown function] (defined at: ./index.rsh:185:22:function exp)', 'at ./index.rsh:185:22:application call to "liftedInteract" (defined at: ./index.rsh:185:22:application)', 'at ./index.rsh:321:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:320:24:application call to [unknown function] (defined at: ./index.rsh:320:24:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2146 = stdlib.sub(v2126, v2139);
        const v2147 = stdlib.mul(v2137, v2146);
        const v2150 = stdlib.add(v2147, v2135);
        await stdlib.mapSet(map1, v1595, v2150);
        await stdlib.mapSet(map2, v1595, v2126);
        const v2152 = 'after';
        stdlib.protect(ctc0, await interact.log(v2152), {
          at: './index.rsh:199:22:application',
          fs: ['at ./index.rsh:199:22:application call to [unknown function] (defined at: ./index.rsh:199:22:function exp)', 'at ./index.rsh:199:22:application call to "liftedInteract" (defined at: ./index.rsh:199:22:application)', 'at ./index.rsh:321:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:320:24:application call to [unknown function] (defined at: ./index.rsh:320:24:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2160 = {
          reward: v2150,
          rewardPerTokenPaid: v2126,
          staked: v2137,
          time: v2125
          };
        stdlib.protect(ctc0, await interact.log(v2160), {
          at: './index.rsh:201:22:application',
          fs: ['at ./index.rsh:201:22:application call to [unknown function] (defined at: ./index.rsh:201:22:function exp)', 'at ./index.rsh:201:22:application call to "liftedInteract" (defined at: ./index.rsh:201:22:application)', 'at ./index.rsh:321:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:320:24:application call to [unknown function] (defined at: ./index.rsh:320:24:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2166 = {
          reward: v2150,
          staked: v2137
          };
        await txn3.getOutput('setTime', 'v2166', ctc7, v2166);
        const cv1412 = v2125;
        const cv1413 = true;
        const cv1414 = v2125;
        const cv1415 = v2126;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v2060;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'stake0_108': {
        const v2347 = v1596[1];
        undefined /* setApiDetails */;
        const v2366 = v2347[stdlib.checkedBigNumberify('./index.rsh:261:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2417 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2418 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2419 = stdlib.add(v2418, v2366);
        const v2422 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2423 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2424 = [v2419, v2422, v2423];
        const v2425 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2424);
        ;
        const v2426 = v2425[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2427 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2431 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2432 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2433 = [v2427, v2431, v2432];
        const v2434 = stdlib.Array_set(v2425, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2433);
        ;
        let v2550;
        const v2551 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2551) {
          v2550 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2552 = stdlib.sub(v1412, v1414);
          const v2553 = stdlib.mul(v2552, v1376);
          const v2554 = stdlib.div(v2553, v1416);
          const v2555 = stdlib.add(v1415, v2554);
          v2550 = v2555;
          }
        const v2557 = 'before';
        stdlib.protect(ctc0, await interact.log(v2557), {
          at: './index.rsh:184:22:application',
          fs: ['at ./index.rsh:184:22:application call to [unknown function] (defined at: ./index.rsh:184:22:function exp)', 'at ./index.rsh:184:22:application call to "liftedInteract" (defined at: ./index.rsh:184:22:application)', 'at ./index.rsh:266:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:265:27:application call to [unknown function] (defined at: ./index.rsh:265:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2558 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2559 = stdlib.fromSome(v2558, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2562 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2563 = stdlib.fromSome(v2562, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v2565 = {
          lastUpdateTime: v1414,
          p: v1595,
          reward: v2559,
          rewardPerTokenPaid: v2563,
          rewardPerTokenStored: v1415,
          rewardPerTokenStoredNew: v2550,
          staked: v2561,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v2565), {
          at: './index.rsh:185:22:application',
          fs: ['at ./index.rsh:185:22:application call to [unknown function] (defined at: ./index.rsh:185:22:function exp)', 'at ./index.rsh:185:22:application call to "liftedInteract" (defined at: ./index.rsh:185:22:application)', 'at ./index.rsh:266:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:265:27:application call to [unknown function] (defined at: ./index.rsh:265:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2570 = stdlib.sub(v2550, v2563);
        const v2571 = stdlib.mul(v2561, v2570);
        const v2574 = stdlib.add(v2571, v2559);
        await stdlib.mapSet(map1, v1595, v2574);
        await stdlib.mapSet(map2, v1595, v2550);
        const v2576 = 'after';
        stdlib.protect(ctc0, await interact.log(v2576), {
          at: './index.rsh:199:22:application',
          fs: ['at ./index.rsh:199:22:application call to [unknown function] (defined at: ./index.rsh:199:22:function exp)', 'at ./index.rsh:199:22:application call to "liftedInteract" (defined at: ./index.rsh:199:22:application)', 'at ./index.rsh:266:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:265:27:application call to [unknown function] (defined at: ./index.rsh:265:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2584 = {
          reward: v2574,
          rewardPerTokenPaid: v2550,
          staked: v2561,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v2584), {
          at: './index.rsh:201:22:application',
          fs: ['at ./index.rsh:201:22:application call to [unknown function] (defined at: ./index.rsh:201:22:function exp)', 'at ./index.rsh:201:22:application call to "liftedInteract" (defined at: ./index.rsh:201:22:application)', 'at ./index.rsh:266:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:265:27:application call to [unknown function] (defined at: ./index.rsh:265:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2588 = stdlib.add(v2561, v2366);
        await stdlib.mapSet(map0, v1595, v2588);
        const v2593 = {
          reward: v2574,
          staked: v2588
          };
        await txn3.getOutput('stake', 'v2593', ctc7, v2593);
        null;
        const v2600 = stdlib.add(v1416, v2366);
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v2550;
        const cv1416 = v2600;
        const cv1417 = v1597;
        const cv1423 = v2434;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'unstake0_108': {
        const v2721 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v2791 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2792 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2796 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2797 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2798 = [v2792, v2796, v2797];
        const v2799 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2798);
        ;
        const v2800 = v2799[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2801 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v2805 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v2806 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v2807 = [v2801, v2805, v2806];
        const v2808 = stdlib.Array_set(v2799, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2807);
        ;
        const v2977 = v2721[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, 0)];
        const v2978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v2979 = stdlib.fromSome(v2978, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v2980 = stdlib.le(v2977, v2979);
        stdlib.assert(v2980, {
          at: './index.rsh:283:14:application',
          fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2981 = v2808[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
        const v2982 = v2981[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
        const v2983 = stdlib.le(v2977, v2982);
        stdlib.assert(v2983, {
          at: './index.rsh:284:14:application',
          fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: null,
          who: 'User'
          });
        let v2984;
        const v2985 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v2985) {
          v2984 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2986 = stdlib.sub(v1412, v1414);
          const v2987 = stdlib.mul(v2986, v1376);
          const v2988 = stdlib.div(v2987, v1416);
          const v2989 = stdlib.add(v1415, v2988);
          v2984 = v2989;
          }
        const v2991 = 'before';
        stdlib.protect(ctc0, await interact.log(v2991), {
          at: './index.rsh:184:22:application',
          fs: ['at ./index.rsh:184:22:application call to [unknown function] (defined at: ./index.rsh:184:22:function exp)', 'at ./index.rsh:184:22:application call to "liftedInteract" (defined at: ./index.rsh:184:22:application)', 'at ./index.rsh:286:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v2996 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v2997 = stdlib.fromSome(v2996, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v2999 = {
          lastUpdateTime: v1414,
          p: v1595,
          reward: v2993,
          rewardPerTokenPaid: v2997,
          rewardPerTokenStored: v1415,
          rewardPerTokenStoredNew: v2984,
          staked: v2979,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v2999), {
          at: './index.rsh:185:22:application',
          fs: ['at ./index.rsh:185:22:application call to [unknown function] (defined at: ./index.rsh:185:22:function exp)', 'at ./index.rsh:185:22:application call to "liftedInteract" (defined at: ./index.rsh:185:22:application)', 'at ./index.rsh:286:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3004 = stdlib.sub(v2984, v2997);
        const v3005 = stdlib.mul(v2979, v3004);
        const v3008 = stdlib.add(v3005, v2993);
        await stdlib.mapSet(map1, v1595, v3008);
        await stdlib.mapSet(map2, v1595, v2984);
        const v3010 = 'after';
        stdlib.protect(ctc0, await interact.log(v3010), {
          at: './index.rsh:199:22:application',
          fs: ['at ./index.rsh:199:22:application call to [unknown function] (defined at: ./index.rsh:199:22:function exp)', 'at ./index.rsh:199:22:application call to "liftedInteract" (defined at: ./index.rsh:199:22:application)', 'at ./index.rsh:286:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3018 = {
          reward: v3008,
          rewardPerTokenPaid: v2984,
          staked: v2979,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v3018), {
          at: './index.rsh:201:22:application',
          fs: ['at ./index.rsh:201:22:application call to [unknown function] (defined at: ./index.rsh:201:22:function exp)', 'at ./index.rsh:201:22:application call to "liftedInteract" (defined at: ./index.rsh:201:22:application)', 'at ./index.rsh:286:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3020 = stdlib.sub(v2979, v2977);
        await stdlib.mapSet(map0, v1595, v3020);
        const v3026 = stdlib.sub(v2982, v2977);
        const v3029 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 1)];
        const v3030 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 2)];
        const v3031 = [v3026, v3029, v3030];
        const v3032 = stdlib.Array_set(v2808, stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 0), v3031);
        ;
        const v3037 = {
          reward: v3008,
          staked: v3020
          };
        await txn3.getOutput('unstake', 'v3037', ctc7, v3037);
        null;
        const v3044 = stdlib.sub(v1416, v2977);
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v2984;
        const cv1416 = v3044;
        const cv1417 = v1597;
        const cv1423 = v3032;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      case 'update0_108': {
        const v3095 = v1596[1];
        undefined /* setApiDetails */;
        ;
        const v3165 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3166 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3170 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3171 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v3172 = [v3166, v3170, v3171];
        const v3173 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v3172);
        ;
        const v3174 = v3173[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3175 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
        const v3179 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
        const v3180 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
        const v3181 = [v3175, v3179, v3180];
        const v3182 = stdlib.Array_set(v3173, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v3181);
        ;
        let v3421;
        const v3422 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
        if (v3422) {
          v3421 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3423 = stdlib.sub(v1412, v1414);
          const v3424 = stdlib.mul(v3423, v1376);
          const v3425 = stdlib.div(v3424, v1416);
          const v3426 = stdlib.add(v1415, v3425);
          v3421 = v3426;
          }
        const v3428 = 'before';
        stdlib.protect(ctc0, await interact.log(v3428), {
          at: './index.rsh:184:22:application',
          fs: ['at ./index.rsh:184:22:application call to [unknown function] (defined at: ./index.rsh:184:22:function exp)', 'at ./index.rsh:184:22:application call to "liftedInteract" (defined at: ./index.rsh:184:22:application)', 'at ./index.rsh:311:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:310:18:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
        const v3430 = stdlib.fromSome(v3429, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
        const v3431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
        const v3432 = stdlib.fromSome(v3431, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
        const v3433 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
        const v3434 = stdlib.fromSome(v3433, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
        const v3436 = {
          lastUpdateTime: v1414,
          p: v1595,
          reward: v3430,
          rewardPerTokenPaid: v3434,
          rewardPerTokenStored: v1415,
          rewardPerTokenStoredNew: v3421,
          staked: v3432,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v3436), {
          at: './index.rsh:185:22:application',
          fs: ['at ./index.rsh:185:22:application call to [unknown function] (defined at: ./index.rsh:185:22:function exp)', 'at ./index.rsh:185:22:application call to "liftedInteract" (defined at: ./index.rsh:185:22:application)', 'at ./index.rsh:311:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:310:18:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3441 = stdlib.sub(v3421, v3434);
        const v3442 = stdlib.mul(v3432, v3441);
        const v3445 = stdlib.add(v3442, v3430);
        await stdlib.mapSet(map1, v1595, v3445);
        await stdlib.mapSet(map2, v1595, v3421);
        const v3447 = 'after';
        stdlib.protect(ctc0, await interact.log(v3447), {
          at: './index.rsh:199:22:application',
          fs: ['at ./index.rsh:199:22:application call to [unknown function] (defined at: ./index.rsh:199:22:function exp)', 'at ./index.rsh:199:22:application call to "liftedInteract" (defined at: ./index.rsh:199:22:application)', 'at ./index.rsh:311:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:310:18:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3455 = {
          reward: v3445,
          rewardPerTokenPaid: v3421,
          staked: v3432,
          time: v1412
          };
        stdlib.protect(ctc0, await interact.log(v3455), {
          at: './index.rsh:201:22:application',
          fs: ['at ./index.rsh:201:22:application call to [unknown function] (defined at: ./index.rsh:201:22:function exp)', 'at ./index.rsh:201:22:application call to "liftedInteract" (defined at: ./index.rsh:201:22:application)', 'at ./index.rsh:311:74:application call to "updateReward" (defined at: ./index.rsh:181:85:function exp)', 'at ./index.rsh:310:18:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3461 = {
          reward: v3445,
          staked: v3432
          };
        await txn3.getOutput('update', 'v3461', ctc7, v3461);
        null;
        const cv1412 = v1412;
        const cv1413 = true;
        const cv1414 = v1412;
        const cv1415 = v3421;
        const cv1416 = v1416;
        const cv1417 = v1597;
        const cv1423 = v3182;
        
        v1412 = cv1412;
        v1413 = cv1413;
        v1414 = cv1414;
        v1415 = cv1415;
        v1416 = cv1416;
        v1417 = cv1417;
        v1423 = cv1423;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1414, v1415, v1416],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1417,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:328:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3480, time: v3479, didSend: v1139, from: v3478 } = txn3;
      
      ;
      const v3481 = v3479;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1372
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1371
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v3480, time: v3479, didSend: v1139, from: v3478 } = txn3;
  ;
  let v3481 = v3479;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v3491, time: v3490, didSend: v1146, from: v3489 } = txn4;
    ;
    const v3492 = stdlib.addressEq(v1370, v3489);
    stdlib.assert(v3492, {
      at: './index.rsh:331:36:dot',
      fs: [],
      msg: 'sender correct',
      who: 'User'
      });
    const cv3481 = v3490;
    
    v3481 = cv3481;
    
    continue;
    
    }
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
    claim0_108: ctc8,
    setTime0_108: ctc9,
    stake0_108: ctc9,
    unstake0_108: ctc9,
    update0_108: ctc8
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
  
  
  const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1459 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:296:9:application call to [unknown function] (defined at: ./index.rsh:296:9:function exp)', 'at ./index.rsh:236:21:application call to "runclaim0_108" (defined at: ./index.rsh:296:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1463 = ['claim0_108', v1459];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423, v1463],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:296:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1371], [stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1372]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
      
      switch (v1596[0]) {
        case 'claim0_108': {
          const v1599 = v1596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1669 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v1670 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v1674 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v1675 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v1676 = [v1670, v1674, v1675];
          const v1677 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v1676);
          ;
          const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v1683 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v1684 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v1685 = [v1679, v1683, v1684];
          const v1686 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v1685);
          ;
          let v1688;
          const v1689 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
          if (v1689) {
            v1688 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1690 = stdlib.sub(v1412, v1414);
            const v1691 = stdlib.mul(v1690, v1376);
            const v1692 = stdlib.div(v1691, v1416);
            const v1693 = stdlib.add(v1415, v1692);
            v1688 = v1693;
            }
          const v1696 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1595), null);
          const v1697 = stdlib.fromSome(v1696, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
          const v1698 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1595), null);
          const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
          const v1700 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1595), null);
          const v1701 = stdlib.fromSome(v1700, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
          const v1708 = stdlib.sub(v1688, v1701);
          const v1709 = stdlib.mul(v1699, v1708);
          const v1712 = stdlib.add(v1709, v1697);
          await stdlib.simMapSet(sim_r, 1, v1595, v1712);
          await stdlib.simMapSet(sim_r, 2, v1595, v1688);
          await stdlib.simMapSet(sim_r, 1, v1595, stdlib.checkedBigNumberify('./index.rsh:300:25:decimal', stdlib.UInt_max, 0));
          const v1726 = v1686[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
          const v1727 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 0)];
          const v1734 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
          const v1735 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 2)];
          const v1736 = [v1727, v1734, v1735];
          const v1737 = stdlib.Array_set(v1686, stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1), v1736);
          const v1742 = {
            reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            staked: v1699
            };
          const v1744 = await txn1.getOutput('claim', 'v1742', ctc11, v1742);
          
          null;
          const v4782 = v1412;
          const v4784 = v1412;
          const v4785 = v1688;
          const v4786 = v1416;
          const v4788 = v1737;
          sim_r.isHalt = false;
          
          break;
          }
        case 'setTime0_108': {
          const v1973 = v1596[1];
          
          break;
          }
        case 'stake0_108': {
          const v2347 = v1596[1];
          
          break;
          }
        case 'unstake0_108': {
          const v2721 = v1596[1];
          
          break;
          }
        case 'update0_108': {
          const v3095 = v1596[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
  switch (v1596[0]) {
    case 'claim0_108': {
      const v1599 = v1596[1];
      undefined /* setApiDetails */;
      ;
      const v1669 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v1670 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v1674 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v1675 = v1669[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v1676 = [v1670, v1674, v1675];
      const v1677 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v1676);
      ;
      const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v1679 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v1683 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v1684 = v1678[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v1685 = [v1679, v1683, v1684];
      const v1686 = stdlib.Array_set(v1677, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v1685);
      ;
      let v1688;
      const v1689 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
      if (v1689) {
        v1688 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1690 = stdlib.sub(v1412, v1414);
        const v1691 = stdlib.mul(v1690, v1376);
        const v1692 = stdlib.div(v1691, v1416);
        const v1693 = stdlib.add(v1415, v1692);
        v1688 = v1693;
        }
      const v1696 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
      const v1697 = stdlib.fromSome(v1696, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
      const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
      const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
      const v1700 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
      const v1701 = stdlib.fromSome(v1700, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
      const v1708 = stdlib.sub(v1688, v1701);
      const v1709 = stdlib.mul(v1699, v1708);
      const v1712 = stdlib.add(v1709, v1697);
      await stdlib.mapSet(map1, v1595, v1712);
      await stdlib.mapSet(map2, v1595, v1688);
      await stdlib.mapSet(map1, v1595, stdlib.checkedBigNumberify('./index.rsh:300:25:decimal', stdlib.UInt_max, 0));
      const v1726 = v1686[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
      const v1727 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 0)];
      const v1734 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1)];
      const v1735 = v1726[stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 2)];
      const v1736 = [v1727, v1734, v1735];
      const v1737 = stdlib.Array_set(v1686, stdlib.checkedBigNumberify('./index.rsh:301:51:application', stdlib.UInt_max, 1), v1736);
      const v1742 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        staked: v1699
        };
      const v1744 = await txn1.getOutput('claim', 'v1742', ctc11, v1742);
      if (v712) {
        stdlib.protect(ctc0, await interact.out(v1599, v1744), {
          at: './index.rsh:297:7:application',
          fs: ['at ./index.rsh:297:7:application call to [unknown function] (defined at: ./index.rsh:297:7:function exp)', 'at ./index.rsh:303:17:application call to "callback" (defined at: ./index.rsh:298:18:function exp)', 'at ./index.rsh:298:18:application call to [unknown function] (defined at: ./index.rsh:298:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      null;
      const v4782 = v1412;
      const v4784 = v1412;
      const v4785 = v1688;
      const v4786 = v1416;
      const v4788 = v1737;
      return;
      
      break;
      }
    case 'setTime0_108': {
      const v1973 = v1596[1];
      return;
      break;
      }
    case 'stake0_108': {
      const v2347 = v1596[1];
      return;
      break;
      }
    case 'unstake0_108': {
      const v2721 = v1596[1];
      return;
      break;
      }
    case 'update0_108': {
      const v3095 = v1596[1];
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
    claim0_108: ctc9,
    setTime0_108: ctc8,
    stake0_108: ctc8,
    unstake0_108: ctc8,
    update0_108: ctc9
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
  
  
  const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1475 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:318:9:application call to [unknown function] (defined at: ./index.rsh:318:9:function exp)', 'at ./index.rsh:236:21:application call to "runsetTime0_108" (defined at: ./index.rsh:318:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1480 = ['setTime0_108', v1475];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423, v1480],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:318:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1371], [stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1372]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
      
      switch (v1596[0]) {
        case 'claim0_108': {
          const v1599 = v1596[1];
          
          break;
          }
        case 'setTime0_108': {
          const v1973 = v1596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v2043 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2044 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2048 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2049 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2050 = [v2044, v2048, v2049];
          const v2051 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2050);
          ;
          const v2052 = v2051[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2053 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2057 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2058 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2059 = [v2053, v2057, v2058];
          const v2060 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2125 = v1973[stdlib.checkedBigNumberify('./index.rsh:318:9:spread', stdlib.UInt_max, 0)];
          let v2126;
          const v2127 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
          if (v2127) {
            v2126 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2128 = stdlib.sub(v2125, v1414);
            const v2129 = stdlib.mul(v2128, v1376);
            const v2130 = stdlib.div(v2129, v1416);
            const v2131 = stdlib.add(v1415, v2130);
            v2126 = v2131;
            }
          const v2134 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1595), null);
          const v2135 = stdlib.fromSome(v2134, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
          const v2136 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1595), null);
          const v2137 = stdlib.fromSome(v2136, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
          const v2138 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1595), null);
          const v2139 = stdlib.fromSome(v2138, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
          const v2146 = stdlib.sub(v2126, v2139);
          const v2147 = stdlib.mul(v2137, v2146);
          const v2150 = stdlib.add(v2147, v2135);
          await stdlib.simMapSet(sim_r, 1, v1595, v2150);
          await stdlib.simMapSet(sim_r, 2, v1595, v2126);
          const v2166 = {
            reward: v2150,
            staked: v2137
            };
          const v2168 = await txn1.getOutput('setTime', 'v2166', ctc11, v2166);
          
          const v4884 = v2125;
          const v4886 = v2125;
          const v4887 = v2126;
          const v4888 = v1416;
          const v4890 = v2060;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_108': {
          const v2347 = v1596[1];
          
          break;
          }
        case 'unstake0_108': {
          const v2721 = v1596[1];
          
          break;
          }
        case 'update0_108': {
          const v3095 = v1596[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
  switch (v1596[0]) {
    case 'claim0_108': {
      const v1599 = v1596[1];
      return;
      break;
      }
    case 'setTime0_108': {
      const v1973 = v1596[1];
      undefined /* setApiDetails */;
      ;
      const v2043 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2044 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2048 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2049 = v2043[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2050 = [v2044, v2048, v2049];
      const v2051 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2050);
      ;
      const v2052 = v2051[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2053 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2057 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2058 = v2052[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2059 = [v2053, v2057, v2058];
      const v2060 = stdlib.Array_set(v2051, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2059);
      ;
      const v2125 = v1973[stdlib.checkedBigNumberify('./index.rsh:318:9:spread', stdlib.UInt_max, 0)];
      let v2126;
      const v2127 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
      if (v2127) {
        v2126 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2128 = stdlib.sub(v2125, v1414);
        const v2129 = stdlib.mul(v2128, v1376);
        const v2130 = stdlib.div(v2129, v1416);
        const v2131 = stdlib.add(v1415, v2130);
        v2126 = v2131;
        }
      const v2134 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
      const v2135 = stdlib.fromSome(v2134, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
      const v2136 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
      const v2137 = stdlib.fromSome(v2136, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
      const v2138 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
      const v2139 = stdlib.fromSome(v2138, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
      const v2146 = stdlib.sub(v2126, v2139);
      const v2147 = stdlib.mul(v2137, v2146);
      const v2150 = stdlib.add(v2147, v2135);
      await stdlib.mapSet(map1, v1595, v2150);
      await stdlib.mapSet(map2, v1595, v2126);
      const v2166 = {
        reward: v2150,
        staked: v2137
        };
      const v2168 = await txn1.getOutput('setTime', 'v2166', ctc11, v2166);
      if (v712) {
        stdlib.protect(ctc0, await interact.out(v1973, v2168), {
          at: './index.rsh:319:7:application',
          fs: ['at ./index.rsh:319:7:application call to [unknown function] (defined at: ./index.rsh:319:7:function exp)', 'at ./index.rsh:322:17:application call to "callback" (defined at: ./index.rsh:320:24:function exp)', 'at ./index.rsh:320:24:application call to [unknown function] (defined at: ./index.rsh:320:24:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v4884 = v2125;
      const v4886 = v2125;
      const v4887 = v2126;
      const v4888 = v1416;
      const v4890 = v2060;
      return;
      
      break;
      }
    case 'stake0_108': {
      const v2347 = v1596[1];
      return;
      break;
      }
    case 'unstake0_108': {
      const v2721 = v1596[1];
      return;
      break;
      }
    case 'update0_108': {
      const v3095 = v1596[1];
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
    claim0_108: ctc9,
    setTime0_108: ctc8,
    stake0_108: ctc8,
    unstake0_108: ctc8,
    update0_108: ctc9
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
  
  
  const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1436 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:263:11:application call to [unknown function] (defined at: ./index.rsh:263:11:function exp)', 'at ./index.rsh:236:21:application call to "runstake0_108" (defined at: ./index.rsh:261:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1437 = v1436[stdlib.checkedBigNumberify('./index.rsh:261:9:spread', stdlib.UInt_max, 0)];
  const v1440 = ['stake0_108', v1436];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423, v1440],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:264:21:decimal', stdlib.UInt_max, 0), [[v1437, v1371], [stdlib.checkedBigNumberify('./index.rsh:264:48:decimal', stdlib.UInt_max, 0), v1372]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
      
      switch (v1596[0]) {
        case 'claim0_108': {
          const v1599 = v1596[1];
          
          break;
          }
        case 'setTime0_108': {
          const v1973 = v1596[1];
          
          break;
          }
        case 'stake0_108': {
          const v2347 = v1596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v2366 = v2347[stdlib.checkedBigNumberify('./index.rsh:261:9:spread', stdlib.UInt_max, 0)];
          ;
          const v2417 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2418 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2419 = stdlib.add(v2418, v2366);
          const v2422 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2423 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2424 = [v2419, v2422, v2423];
          const v2425 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2424);
          sim_r.txns.push({
            amt: v2366,
            kind: 'to',
            tok: v1371
            });
          const v2426 = v2425[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2427 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2431 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2432 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2433 = [v2427, v2431, v2432];
          const v2434 = stdlib.Array_set(v2425, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2433);
          ;
          let v2550;
          const v2551 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
          if (v2551) {
            v2550 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2552 = stdlib.sub(v1412, v1414);
            const v2553 = stdlib.mul(v2552, v1376);
            const v2554 = stdlib.div(v2553, v1416);
            const v2555 = stdlib.add(v1415, v2554);
            v2550 = v2555;
            }
          const v2558 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1595), null);
          const v2559 = stdlib.fromSome(v2558, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
          const v2560 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1595), null);
          const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
          const v2562 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1595), null);
          const v2563 = stdlib.fromSome(v2562, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
          const v2570 = stdlib.sub(v2550, v2563);
          const v2571 = stdlib.mul(v2561, v2570);
          const v2574 = stdlib.add(v2571, v2559);
          await stdlib.simMapSet(sim_r, 1, v1595, v2574);
          await stdlib.simMapSet(sim_r, 2, v1595, v2550);
          const v2588 = stdlib.add(v2561, v2366);
          await stdlib.simMapSet(sim_r, 0, v1595, v2588);
          const v2593 = {
            reward: v2574,
            staked: v2588
            };
          const v2595 = await txn1.getOutput('stake', 'v2593', ctc11, v2593);
          
          null;
          const v2600 = stdlib.add(v1416, v2366);
          const v4986 = v1412;
          const v4988 = v1412;
          const v4989 = v2550;
          const v4990 = v2600;
          const v4992 = v2434;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_108': {
          const v2721 = v1596[1];
          
          break;
          }
        case 'update0_108': {
          const v3095 = v1596[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
  switch (v1596[0]) {
    case 'claim0_108': {
      const v1599 = v1596[1];
      return;
      break;
      }
    case 'setTime0_108': {
      const v1973 = v1596[1];
      return;
      break;
      }
    case 'stake0_108': {
      const v2347 = v1596[1];
      undefined /* setApiDetails */;
      const v2366 = v2347[stdlib.checkedBigNumberify('./index.rsh:261:9:spread', stdlib.UInt_max, 0)];
      ;
      const v2417 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2418 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2419 = stdlib.add(v2418, v2366);
      const v2422 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2423 = v2417[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2424 = [v2419, v2422, v2423];
      const v2425 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2424);
      ;
      const v2426 = v2425[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2427 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2431 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2432 = v2426[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2433 = [v2427, v2431, v2432];
      const v2434 = stdlib.Array_set(v2425, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2433);
      ;
      let v2550;
      const v2551 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
      if (v2551) {
        v2550 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2552 = stdlib.sub(v1412, v1414);
        const v2553 = stdlib.mul(v2552, v1376);
        const v2554 = stdlib.div(v2553, v1416);
        const v2555 = stdlib.add(v1415, v2554);
        v2550 = v2555;
        }
      const v2558 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
      const v2559 = stdlib.fromSome(v2558, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
      const v2560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
      const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
      const v2562 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
      const v2563 = stdlib.fromSome(v2562, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
      const v2570 = stdlib.sub(v2550, v2563);
      const v2571 = stdlib.mul(v2561, v2570);
      const v2574 = stdlib.add(v2571, v2559);
      await stdlib.mapSet(map1, v1595, v2574);
      await stdlib.mapSet(map2, v1595, v2550);
      const v2588 = stdlib.add(v2561, v2366);
      await stdlib.mapSet(map0, v1595, v2588);
      const v2593 = {
        reward: v2574,
        staked: v2588
        };
      const v2595 = await txn1.getOutput('stake', 'v2593', ctc11, v2593);
      if (v712) {
        stdlib.protect(ctc0, await interact.out(v2347, v2595), {
          at: './index.rsh:262:7:application',
          fs: ['at ./index.rsh:262:7:application call to [unknown function] (defined at: ./index.rsh:262:7:function exp)', 'at ./index.rsh:269:17:application call to "callback" (defined at: ./index.rsh:265:27:function exp)', 'at ./index.rsh:265:27:application call to [unknown function] (defined at: ./index.rsh:265:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      null;
      const v2600 = stdlib.add(v1416, v2366);
      const v4986 = v1412;
      const v4988 = v1412;
      const v4989 = v2550;
      const v4990 = v2600;
      const v4992 = v2434;
      return;
      
      break;
      }
    case 'unstake0_108': {
      const v2721 = v1596[1];
      return;
      break;
      }
    case 'update0_108': {
      const v3095 = v1596[1];
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
    claim0_108: ctc9,
    setTime0_108: ctc8,
    stake0_108: ctc8,
    unstake0_108: ctc8,
    update0_108: ctc9
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
  
  
  const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1442 = ctc.selfAddress();
  const v1444 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:276:19:application call to [unknown function] (defined at: ./index.rsh:276:19:function exp)', 'at ./index.rsh:236:21:application call to "rununstake0_108" (defined at: ./index.rsh:274:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1445 = v1444[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, 0)];
  const v1447 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1442), null);
  const v1448 = stdlib.fromSome(v1447, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
  const v1449 = stdlib.le(v1445, v1448);
  stdlib.assert(v1449, {
    at: './index.rsh:277:15:application',
    fs: ['at ./index.rsh:276:19:application call to [unknown function] (defined at: ./index.rsh:276:19:function exp)', 'at ./index.rsh:276:19:application call to [unknown function] (defined at: ./index.rsh:276:19:function exp)', 'at ./index.rsh:236:21:application call to "rununstake0_108" (defined at: ./index.rsh:274:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1450 = v1423[stdlib.checkedBigNumberify('./index.rsh:278:36:application', stdlib.UInt_max, 0)];
  const v1451 = v1450[stdlib.checkedBigNumberify('./index.rsh:278:36:application', stdlib.UInt_max, 0)];
  const v1452 = stdlib.le(v1445, v1451);
  stdlib.assert(v1452, {
    at: './index.rsh:278:15:application',
    fs: ['at ./index.rsh:276:19:application call to [unknown function] (defined at: ./index.rsh:276:19:function exp)', 'at ./index.rsh:276:19:application call to [unknown function] (defined at: ./index.rsh:276:19:function exp)', 'at ./index.rsh:236:21:application call to "rununstake0_108" (defined at: ./index.rsh:274:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1455 = ['unstake0_108', v1444];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423, v1455],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:280:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:280:19:decimal', stdlib.UInt_max, 0), v1371], [stdlib.checkedBigNumberify('./index.rsh:280:36:decimal', stdlib.UInt_max, 0), v1372]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
      
      switch (v1596[0]) {
        case 'claim0_108': {
          const v1599 = v1596[1];
          
          break;
          }
        case 'setTime0_108': {
          const v1973 = v1596[1];
          
          break;
          }
        case 'stake0_108': {
          const v2347 = v1596[1];
          
          break;
          }
        case 'unstake0_108': {
          const v2721 = v1596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2791 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2792 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2796 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2797 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2798 = [v2792, v2796, v2797];
          const v2799 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2798);
          ;
          const v2800 = v2799[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2801 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v2805 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v2806 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v2807 = [v2801, v2805, v2806];
          const v2808 = stdlib.Array_set(v2799, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2807);
          ;
          const v2977 = v2721[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, 0)];
          const v2978 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1595), null);
          const v2979 = stdlib.fromSome(v2978, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
          const v2980 = stdlib.le(v2977, v2979);
          ;
          const v2981 = v2808[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
          const v2982 = v2981[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
          const v2983 = stdlib.le(v2977, v2982);
          ;
          let v2984;
          const v2985 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
          if (v2985) {
            v2984 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2986 = stdlib.sub(v1412, v1414);
            const v2987 = stdlib.mul(v2986, v1376);
            const v2988 = stdlib.div(v2987, v1416);
            const v2989 = stdlib.add(v1415, v2988);
            v2984 = v2989;
            }
          const v2992 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1595), null);
          const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
          const v2996 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1595), null);
          const v2997 = stdlib.fromSome(v2996, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
          const v3004 = stdlib.sub(v2984, v2997);
          const v3005 = stdlib.mul(v2979, v3004);
          const v3008 = stdlib.add(v3005, v2993);
          await stdlib.simMapSet(sim_r, 1, v1595, v3008);
          await stdlib.simMapSet(sim_r, 2, v1595, v2984);
          const v3020 = stdlib.sub(v2979, v2977);
          await stdlib.simMapSet(sim_r, 0, v1595, v3020);
          const v3026 = stdlib.sub(v2982, v2977);
          const v3029 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 1)];
          const v3030 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 2)];
          const v3031 = [v3026, v3029, v3030];
          const v3032 = stdlib.Array_set(v2808, stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 0), v3031);
          sim_r.txns.push({
            amt: v2977,
            kind: 'from',
            to: v1595,
            tok: v1371
            });
          const v3037 = {
            reward: v3008,
            staked: v3020
            };
          const v3039 = await txn1.getOutput('unstake', 'v3037', ctc11, v3037);
          
          null;
          const v3044 = stdlib.sub(v1416, v2977);
          const v5088 = v1412;
          const v5090 = v1412;
          const v5091 = v2984;
          const v5092 = v3044;
          const v5094 = v3032;
          sim_r.isHalt = false;
          
          break;
          }
        case 'update0_108': {
          const v3095 = v1596[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
  switch (v1596[0]) {
    case 'claim0_108': {
      const v1599 = v1596[1];
      return;
      break;
      }
    case 'setTime0_108': {
      const v1973 = v1596[1];
      return;
      break;
      }
    case 'stake0_108': {
      const v2347 = v1596[1];
      return;
      break;
      }
    case 'unstake0_108': {
      const v2721 = v1596[1];
      undefined /* setApiDetails */;
      ;
      const v2791 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2792 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2796 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2797 = v2791[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2798 = [v2792, v2796, v2797];
      const v2799 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v2798);
      ;
      const v2800 = v2799[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2801 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v2805 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v2806 = v2800[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v2807 = [v2801, v2805, v2806];
      const v2808 = stdlib.Array_set(v2799, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v2807);
      ;
      const v2977 = v2721[stdlib.checkedBigNumberify('./index.rsh:274:9:spread', stdlib.UInt_max, 0)];
      const v2978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
      const v2979 = stdlib.fromSome(v2978, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
      const v2980 = stdlib.le(v2977, v2979);
      stdlib.assert(v2980, {
        at: './index.rsh:283:14:application',
        fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2981 = v2808[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
      const v2982 = v2981[stdlib.checkedBigNumberify('./index.rsh:284:35:application', stdlib.UInt_max, 0)];
      const v2983 = stdlib.le(v2977, v2982);
      stdlib.assert(v2983, {
        at: './index.rsh:284:14:application',
        fs: ['at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v2984;
      const v2985 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
      if (v2985) {
        v2984 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2986 = stdlib.sub(v1412, v1414);
        const v2987 = stdlib.mul(v2986, v1376);
        const v2988 = stdlib.div(v2987, v1416);
        const v2989 = stdlib.add(v1415, v2988);
        v2984 = v2989;
        }
      const v2992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
      const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
      const v2996 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
      const v2997 = stdlib.fromSome(v2996, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
      const v3004 = stdlib.sub(v2984, v2997);
      const v3005 = stdlib.mul(v2979, v3004);
      const v3008 = stdlib.add(v3005, v2993);
      await stdlib.mapSet(map1, v1595, v3008);
      await stdlib.mapSet(map2, v1595, v2984);
      const v3020 = stdlib.sub(v2979, v2977);
      await stdlib.mapSet(map0, v1595, v3020);
      const v3026 = stdlib.sub(v2982, v2977);
      const v3029 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 1)];
      const v3030 = v2981[stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 2)];
      const v3031 = [v3026, v3029, v3030];
      const v3032 = stdlib.Array_set(v2808, stdlib.checkedBigNumberify('./index.rsh:289:47:application', stdlib.UInt_max, 0), v3031);
      ;
      const v3037 = {
        reward: v3008,
        staked: v3020
        };
      const v3039 = await txn1.getOutput('unstake', 'v3037', ctc11, v3037);
      if (v712) {
        stdlib.protect(ctc0, await interact.out(v2721, v3039), {
          at: './index.rsh:275:7:application',
          fs: ['at ./index.rsh:275:7:application call to [unknown function] (defined at: ./index.rsh:275:7:function exp)', 'at ./index.rsh:291:17:application call to "callback" (defined at: ./index.rsh:281:29:function exp)', 'at ./index.rsh:281:29:application call to [unknown function] (defined at: ./index.rsh:281:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      null;
      const v3044 = stdlib.sub(v1416, v2977);
      const v5088 = v1412;
      const v5090 = v1412;
      const v5091 = v2984;
      const v5092 = v3044;
      const v5094 = v3032;
      return;
      
      break;
      }
    case 'update0_108': {
      const v3095 = v1596[1];
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
    claim0_108: ctc8,
    setTime0_108: ctc9,
    stake0_108: ctc9,
    unstake0_108: ctc9,
    update0_108: ctc8
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
  
  
  const [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1467 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:308:9:application call to [unknown function] (defined at: ./index.rsh:308:9:function exp)', 'at ./index.rsh:236:21:application call to "runupdate0_108" (defined at: ./index.rsh:308:9:function exp)', 'at ./index.rsh:236:21:application call to [unknown function] (defined at: ./index.rsh:236:21:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v1471 = ['update0_108', v1467];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1370, v1371, v1372, v1373, v1374, v1375, v1376, v1412, v1414, v1415, v1416, v1423, v1471],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:308:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1371], [stdlib.checkedBigNumberify('./index.rsh:260:14:decimal', stdlib.UInt_max, 0), v1372]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
      
      switch (v1596[0]) {
        case 'claim0_108': {
          const v1599 = v1596[1];
          
          break;
          }
        case 'setTime0_108': {
          const v1973 = v1596[1];
          
          break;
          }
        case 'stake0_108': {
          const v2347 = v1596[1];
          
          break;
          }
        case 'unstake0_108': {
          const v2721 = v1596[1];
          
          break;
          }
        case 'update0_108': {
          const v3095 = v1596[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v3165 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v3166 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v3170 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v3171 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v3172 = [v3166, v3170, v3171];
          const v3173 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v3172);
          ;
          const v3174 = v3173[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v3175 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
          const v3179 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
          const v3180 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
          const v3181 = [v3175, v3179, v3180];
          const v3182 = stdlib.Array_set(v3173, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v3181);
          ;
          let v3421;
          const v3422 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
          if (v3422) {
            v3421 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3423 = stdlib.sub(v1412, v1414);
            const v3424 = stdlib.mul(v3423, v1376);
            const v3425 = stdlib.div(v3424, v1416);
            const v3426 = stdlib.add(v1415, v3425);
            v3421 = v3426;
            }
          const v3429 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1595), null);
          const v3430 = stdlib.fromSome(v3429, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
          const v3431 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1595), null);
          const v3432 = stdlib.fromSome(v3431, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
          const v3433 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1595), null);
          const v3434 = stdlib.fromSome(v3433, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
          const v3441 = stdlib.sub(v3421, v3434);
          const v3442 = stdlib.mul(v3432, v3441);
          const v3445 = stdlib.add(v3442, v3430);
          await stdlib.simMapSet(sim_r, 1, v1595, v3445);
          await stdlib.simMapSet(sim_r, 2, v1595, v3421);
          const v3461 = {
            reward: v3445,
            staked: v3432
            };
          const v3463 = await txn1.getOutput('update', 'v3461', ctc11, v3461);
          
          null;
          const v5190 = v1412;
          const v5192 = v1412;
          const v5193 = v3421;
          const v5194 = v1416;
          const v5196 = v3182;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1596], secs: v1598, time: v1597, didSend: v712, from: v1595 } = txn1;
  switch (v1596[0]) {
    case 'claim0_108': {
      const v1599 = v1596[1];
      return;
      break;
      }
    case 'setTime0_108': {
      const v1973 = v1596[1];
      return;
      break;
      }
    case 'stake0_108': {
      const v2347 = v1596[1];
      return;
      break;
      }
    case 'unstake0_108': {
      const v2721 = v1596[1];
      return;
      break;
      }
    case 'update0_108': {
      const v3095 = v1596[1];
      undefined /* setApiDetails */;
      ;
      const v3165 = v1423[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v3166 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v3170 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v3171 = v3165[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v3172 = [v3166, v3170, v3171];
      const v3173 = stdlib.Array_set(v1423, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0), v3172);
      ;
      const v3174 = v3173[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v3175 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 0)];
      const v3179 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1)];
      const v3180 = v3174[stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 2)];
      const v3181 = [v3175, v3179, v3180];
      const v3182 = stdlib.Array_set(v3173, stdlib.checkedBigNumberify('./index.rsh:236:21:dot', stdlib.UInt_max, 1), v3181);
      ;
      let v3421;
      const v3422 = stdlib.eq(v1416, stdlib.checkedBigNumberify('./index.rsh:162:24:decimal', stdlib.UInt_max, 0));
      if (v3422) {
        v3421 = stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3423 = stdlib.sub(v1412, v1414);
        const v3424 = stdlib.mul(v3423, v1376);
        const v3425 = stdlib.div(v3424, v1416);
        const v3426 = stdlib.add(v1415, v3425);
        v3421 = v3426;
        }
      const v3429 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1595), null);
      const v3430 = stdlib.fromSome(v3429, stdlib.checkedBigNumberify('./index.rsh:150:46:decimal', stdlib.UInt_max, 0));
      const v3431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1595), null);
      const v3432 = stdlib.fromSome(v3431, stdlib.checkedBigNumberify('./index.rsh:147:46:decimal', stdlib.UInt_max, 0));
      const v3433 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1595), null);
      const v3434 = stdlib.fromSome(v3433, stdlib.checkedBigNumberify('./index.rsh:154:70:decimal', stdlib.UInt_max, 0));
      const v3441 = stdlib.sub(v3421, v3434);
      const v3442 = stdlib.mul(v3432, v3441);
      const v3445 = stdlib.add(v3442, v3430);
      await stdlib.mapSet(map1, v1595, v3445);
      await stdlib.mapSet(map2, v1595, v3421);
      const v3461 = {
        reward: v3445,
        staked: v3432
        };
      const v3463 = await txn1.getOutput('update', 'v3461', ctc11, v3461);
      if (v712) {
        stdlib.protect(ctc0, await interact.out(v3095, v3463), {
          at: './index.rsh:309:7:application',
          fs: ['at ./index.rsh:309:7:application call to [unknown function] (defined at: ./index.rsh:309:7:function exp)', 'at ./index.rsh:313:17:application call to "callback" (defined at: ./index.rsh:310:18:function exp)', 'at ./index.rsh:310:18:application call to [unknown function] (defined at: ./index.rsh:310:18:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      null;
      const v5190 = v1412;
      const v5192 = v1412;
      const v5193 = v3421;
      const v5194 = v1416;
      const v5196 = v3182;
      return;
      
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
  appApproval: `BiAaAAEIBwYDBCAoMDhASFBYoI0GG736i9QEq6aeowq89d/DC6ua8sYIuqXMggKVqq3aA/rK7qUBBQImAwEAAQEAIjUAMRhBDM4qZEkiWzUBJFs1AjEZIxJBAAoxACghEK9mQgyjNhoAF0lBAjwiNQQjNQZJIREMQADXSSESDEAAp0khEwxAAI0hExJENAFJIQQMQABXSSUMQAArJRJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0IMOEgoZEk1A1cgCDQDVygIUDQDVzAIUDQDVzgIUDQDV0AIUDUHQgwSIQUSRChkSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCC+khEhJEKjX/gAEENP9QJK9QQgGnSSEUDEAAECEUEkQ2GgE1/yk0/1BCAZAhERJENhoBNf+AAQM0/1BCAX5JIRUMQACBSSEWDEAAESEWEkQqNf8oNP9QJK9QQgFfIRUSRDQBSSEEDEAAP0klDEAAHyUSRChkKWRQSTUDV2gINANXWAhQNANXYAhQNQdCC1xIKGRJNQNXWAg0A1dICFA0A1dQCFA1B0ILQiEFEkQoZEk1A1dYCDQDV0gIUDQDV1AIUDUHQgslSSEXDEAAtCEXEkQ0AUkhBAxAAHBJJQxAADYlEkQ2GgE1/yI0/4gLJFcACUk1/iNbNP4iVU0WIjT/iAsQVwkJSTX+I1s0/iJVTRZQNQdCCtVINhoBNf8iNP+ICvBXAAlJNf4jWzT+IlVNFiI0/4gK3FcJCUk1/iNbNP4iVU0WUDUHQgqhIQUSRDYaATX/IjT/iAq5VwAJSTX+I1s0/iJVTRYiNP+ICqVXCQlJNf4jWzT+IlVNFlA1B0IKaoHNyPoeEkQ2GgE1/4ABAjT/UEIAJjYaAhc1BDYaAzYaARdJIQUMQAeZSSEYDEAHO0khBAxABtwhBBJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpKVwAgNf8hB1s1/iEIWzX9IQlbNfwhCls1+yELWzX6IQxbNfkhDVs1+CEOWzX3gWBbNfaBaFs19VdwIjX0STUFNfOABBQM5gg081CwNPMiVUkhGQxAA/tJIQUMQAKnSSEGDEABFSEGEkQ09FcAEUk18lcACDTyVwgIUDTyVxABUDT0VxERUDXxNPFXERE18DT1IhJBAAYiNe9CABA09jT4NPcJNPkLNPUKCDXvIjEAiAmHVwAJSTXtI1s07SJVTUk17jTvIjEAiAlvVxIJSTXsI1s07CJVTQkLIjEAiAlaVwkJSTXsI1s07CJVTQg17TEAKDEAiAlCKTTtFlA17ElXAAk07FBMVxIJUGYxACgxAIgJJik07xZQNexXABI07FBmgAgAAAAAAAANhTTuFjTtFlBQsDTuFjTtFlA1B4AElYOeTjEAULA0/zT+NP00/DT7NPo0+TT4IzT4NO809TIGNPFXABE08FcACDTwVwgIUDTwVxABUFBCB4VINPNXAQg18jT0VwARSTXxVwAINPFXCAhQNPFXEAFQNPRXERFQNfA08FcRETXvNPBXABE071cACDTvVwgIUDTvVxABUFA17jTyFzXtIjEAiAhtVwAJSTXrI1s06yJVTTXsNO007A5ENO5XABFJNesiWzXqNO006g5ENPUiEkEABiI16UIAEDT2NPg09wk0+Qs09QoINek07DTpIjEAiAgfVxIJSTXnI1s05yJVTQkLIjEAiAgKVwkJSTXnI1s05yJVTQg16DEAKDEAiAfyKTToFlA150lXAAk051BMVxIJUGYxACgxAIgH1ik06RZQNedXABI051BmNOw07Qk15zEAKDEAiAe5KTTnFlA15lcJEjTmTFBmsSKyATTtshIhBrIQMQCyFDT+shGzgAgAAAAAAAAL3TTnFjToFlBQsDTnFjToFlA1B4AE0WlzKTEAUDTtFlCwNP80/jT9NPw0+zT6NPk0+CM0+DTpNPU07QkyBjTqNO0JFjTrVwgIUDTrVxABUDTuVxERUEIF+kg081cBCDXyNPIXNfE09FcAEUk18CJbNPEIFjTwVwgIUDTwVxABUDT0VxERUDXvNPE0/ogHJTTvVxERNe409SISQQAGIjXtQgAQNPY0+DT3CTT5CzT1Cgg17SIxAIgG1FcACUk16yNbNOsiVU1JNew07SIxAIgGvFcSCUk16iNbNOoiVU0JCyIxAIgGp1cJCUk16iNbNOoiVU0INesxACgxAIgGjyk06xZQNepJVwAJNOpQTFcSCVBmMQAoMQCIBnMpNO0WUDXqVwASNOpQZjTsNPEINeoxACgxAIgGVik06hZQNelXCRI06UxQZoAIAAAAAAAACiE06hY06xZQULA06hY06xZQNQeABDGPpQ4xAFA08RZQsDT/NP40/TT8NPs0+jT5NPgjNPg07TT1NPEIMgY071cAETTuVwAINO5XCAhQNO5XEAFQUEIErUkjDEABFEg081cBCDXyNPRXABFJNfFXAAg08VcICFA08VcQAVA09FcREVA18DTwVxERNe808hc17jT1IhJBAAYiNe1CABA09jTuNPcJNPkLNPUKCDXtIjEAiAWLVwAJSTXrI1s06yJVTUk17DTtIjEAiAVzVxIJSTXqI1s06iJVTQkLIjEAiAVeVwkJSTXqI1s06iJVTQg16zEAKDEAiAVGKTTrFlA16klXAAk06lBMVxIJUGYxACgxAIgFKik07RZQNepXABI06lBmgAgAAAAAAAAIdjTsFjTrFlBQsDTsFjTrFlA1BzT/NP40/TT8NPs0+jT5NO4jNO407TT1MgY08FcAETTvVwAINO9XCAhQNO9XEAFQUEIDk0g09FcAEUk18lcACDTyVwgIUDTyVxABUDT0VxERUDXxNPFXERE18DTxVwARNPBXAAg08FcICFA08FcQAVBQNe809SISQQAGIjXuQgAQNPY0+DT3CTT5CzT1Cgg17iIxAIgEalcACUk17CNbNOwiVU017TEAKDEAiARTKTTtNO4iMQCIBEhXEglJNewjWzTsIlVNCQsiMQCIBDNXCQlJNewjWzTsIlVNCBZQNexJVwAJNOxQTFcSCVBmMQAoMQCIBAwpNO4WUDXsVwASNOxQZjEAKDEAiAP2gAkBAAAAAAAAAAA17ElXAAk07FBMVxIJUGY071cRETXsgAgAAAAAAAAGzjTtFiSvUFCwNO0WJK9QNQeABOUi8dcxAFCwNP80/jT9NPw0+zT6NPk0+CM0+DTuNPUyBjTvVwARNOxXAAg07FcICFA07FcQAVBQQgJESCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQdbNAMhCFs0AyEJWzQDIQpbNAMhC1s0AyEMWzQDIQ1bNAMhDlsyBkICiEkhBgxAAAFISCEFNAESRDQESSISTDQCEhFEKGQ1A4AEp2XEtLA0A1cAIDQDIQdbNAMhCFs0AyEJWzQDIQpbNAMhC1s0AyEMWzQDIQ1bNAMhDlsyBkICMUkjDEAAjUkhGQxAAAFISCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hCFs1/iELWzX9V1AiNfyABJqLkXSwNPxXERE1+zT9NP6IAqc0/zEAEkQ0/zQDIQdbNP40AyEJWzQDIQpbNP00AyEMWyIjIiIiMgY0/FcAETT7Ils0/QgWNPtXCAhQNPtXEAFQUEIBAkgiNAESRDQESSISTDQCEhFESTUFSUpKIls1/yRbNf6BEFs1/YEYWzX8IQdbNfshCFs1+oAEisGMiDT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWULAhD4gB9IERr0k1+UlQNfg0/zT+E0Q0+FcAETX3JK8091cICFA091cQAVA0+FcREVA19iEPiAHCsSKyASKyEiEGshAyCrIUNP+yEbM09lcRETX1NPZXABEkrzT1VwgIUDT1VxABUFA19CEPiAGMsSKyASKyEiEGshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT0UChLAVcAcmdIIzUBMgY1AkIBADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0+kEARjTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT7FlA0/BZQNP0WUDT/UChLAVcAf2cpSwFXfxNnSCU1ATIGNQJCAJk08jTzFlA09BZQNPUWUDT2FlA09xZQNPsWUDT8FlA0/RZQKEsBVwBgZ0ghBTUBMgY1AkIAZDX/Nf41/TX8Nfs1+jX5Nfg190k19jT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT9FlA0/hZQKEsBVwBgZ0ghBDUBMgY1AkIAHDEZIRgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghEK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBhJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 27,
  stateKeys: 2,
  stateSize: 146,
  unsupported: [],
  version: 10,
  warnings: []
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
                "name": "v1371",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1372",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1373",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1374",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1376",
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
                "name": "v1371",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1372",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1373",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1374",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1376",
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
    "name": "_reach_e5",
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
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_108",
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
                    "internalType": "struct T19",
                    "name": "_setTime0_108",
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
                    "internalType": "struct T19",
                    "name": "_stake0_108",
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
                    "internalType": "struct T19",
                    "name": "_unstake0_108",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_108",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1596",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_oe_v1742",
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
    "name": "_reach_oe_v2166",
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
    "name": "_reach_oe_v2593",
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
    "name": "_reach_oe_v3037",
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
    "name": "_reach_oe_v3461",
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
    "name": "_reach_m5",
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
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_108",
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
                    "internalType": "struct T19",
                    "name": "_setTime0_108",
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
                    "internalType": "struct T19",
                    "name": "_stake0_108",
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
                    "internalType": "struct T19",
                    "name": "_unstake0_108",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_108",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1596",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "name": "lastUpdateTime",
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
        "name": "v5213",
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
  Bytecode: `0x6080604052604051620049313803806200493183398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b6141d880620007596000396000f3fe6080604052600436106101015760003560e01c8063817d57f31161008f578063a2e6204511610061578063a2e620451461027c578063a694fc3a14610284578063ab53f2c614610297578063bb806dc9146102ba578063cadc2e7a1461031a57005b8063817d57f3146101fd578063832307571461021d5780638e31476914610232578063a05f99061461024557005b80632e17de78116100d35780632e17de781461018f5780633bc5b7bf146101a25780633beb26c4146101cf5780634e71d92d146101e257806373b4522c146101ea57005b80630ff1680e1461010a5780630ffe00871461014a5780631e93b0f11461015d5780632c10a1591461017c57005b3661010857005b005b34801561011657600080fd5b5061012a6101253660046138d5565b61033a565b604080518251815260209283015192810192909252015b60405180910390f35b6101086101583660046138f2565b61062b565b34801561016957600080fd5b506003545b604051908152602001610141565b61010861018a36600461390a565b61064f565b61012a61019d36600461391c565b61066f565b3480156101ae57600080fd5b506101c26101bd3660046138d5565b6106d9565b604051610141919061394b565b61012a6101dd36600461391c565b610705565b61012a61076e565b6101086101f836600461390a565b6107ca565b34801561020957600080fd5b506101c26102183660046138d5565b6107ea565b34801561022957600080fd5b5060015461016e565b61010861024036600461390a565b610810565b34801561025157600080fd5b5061025a610830565b6040805182518152602080840151908201529181015190820152606001610141565b61012a610b2e565b61012a61029236600461391c565b610b8d565b3480156102a357600080fd5b506102ac610bf7565b6040516101419291906139ae565b3480156102c657600080fd5b506102cf610c94565b604051610141919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b34801561032657600080fd5b506101c26103353660046138d5565b610f34565b60408051808201909152600080825260208201526001600054141561040957600060028054610368906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610394906139e8565b80156103e15780601f106103b6576101008083540402835291602001916103e1565b820191906000526020600020905b8154815290600101906020018083116103c457829003601f168201915b50505050508060200190518101906103f99190613baf565b905061040760006009610f5a565b505b6003600054141561055557600060028054610423906139e8565b80601f016020809104026020016040519081016040528092919081815260200182805461044f906139e8565b801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600020905b81548152906001019060200180831161047f57829003601f168201915b50505050508060200190518101906104b49190613c59565b90506104d6604080516060810182526000602082018181529282015290815290565b60016104e185610f80565b5160018111156104f3576104f3613935565b146104ff57600061050d565b61050884610f80565b604001515b815152600161051b85611052565b51600181111561052d5761052d613935565b14610539576000610547565b61054284611052565b604001515b815160200152519392505050565b6006600054141561056f57600060028054610423906139e8565b6007600054141561061a57600060028054610589906139e8565b80601f01602080910402602001604051908101604052809291908181526020018280546105b5906139e8565b80156106025780601f106105d757610100808354040283529160200191610602565b820191906000526020600020905b8154815290600101906020018083116105e557829003601f168201915b50505050508060200190518101906104b49190613ce9565b61062660006009610f5a565b919050565b610633613162565b61064b61064536849003840184613de3565b826110df565b5050565b610657613162565b61064b61066936849003840184613ea7565b826126d4565b604080518082019091526000808252602082015261068b613162565b610693613208565b61069b613222565b604080516020808201835287825260808401919091526003835281518082019092528282528301526106cd82846110df565b50506060015192915050565b60408051606081018252600080825260208201819052918101919091526106ff82610f80565b92915050565b6040805180820190915260008082526020820152610721613162565b610729613208565b610731613222565b60408051602080820183528782528383019190915260018352815180820190925282825283015261076282846110df565b50506020015192915050565b604080518082019091526000808252602082015261078a613162565b610792613208565b61079a613222565b6000602082810182905290825260408051808301909152828152908301526107c282846110df565b505051919050565b6107d2613162565b61064b6107e436849003840184613ea7565b82612955565b60408051606081018252600080825260208201819052918101919091526106ff82612b01565b610818613162565b61064b61082a36849003840184613ea7565b82612b8e565b61085460405180606001604052806000815260200160008152602001600081525090565b6001600054141561090f5760006002805461086e906139e8565b80601f016020809104026020016040519081016040528092919081815260200182805461089a906139e8565b80156108e75780601f106108bc576101008083540402835291602001916108e7565b820191906000526020600020905b8154815290600101906020018083116108ca57829003601f168201915b50505050508060200190518101906108ff9190613baf565b905061090d60006007610f5a565b505b60036000541415610a0957600060028054610929906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610955906139e8565b80156109a25780601f10610977576101008083540402835291602001916109a2565b820191906000526020600020905b81548152906001019060200180831161098557829003601f168201915b50505050508060200190518101906109ba9190613c59565b90506109e360408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60066000541415610a2357600060028054610929906139e8565b60076000541415610b1f57600060028054610a3d906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a69906139e8565b8015610ab65780601f10610a8b57610100808354040283529160200191610ab6565b820191906000526020600020905b815481529060010190602001808311610a9957829003601f168201915b5050505050806020019051810190610ace9190613ce9565b9050610af760408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610b2b60006007610f5a565b90565b6040805180820190915260008082526020820152610b4a613162565b610b52613208565b610b5a613222565b600060a08201526004815260408051602080820190925282815290830152610b8282846110df565b505060800151919050565b6040805180820190915260008082526020820152610ba9613162565b610bb1613208565b610bb9613222565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610beb82846110df565b50506040015192915050565b600060606000546002808054610c0c906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c38906139e8565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b50505050509050915091509091565b610c9c613273565b60016000541415610d5757600060028054610cb6906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce2906139e8565b8015610d2f5780601f10610d0457610100808354040283529160200191610d2f565b820191906000526020600020905b815481529060010190602001808311610d1257829003601f168201915b5050505050806020019051810190610d479190613baf565b9050610d5560006008610f5a565b505b60036000541415610e6357600060028054610d71906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9d906139e8565b8015610dea5780601f10610dbf57610100808354040283529160200191610dea565b820191906000526020600020905b815481529060010190602001808311610dcd57829003601f168201915b5050505050806020019051810190610e029190613c59565b9050610e0c6132b4565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60066000541415610e7d57600060028054610d71906139e8565b60076000541415610f2857600060028054610e97906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec3906139e8565b8015610f105780601f10610ee557610100808354040283529160200191610f10565b820191906000526020600020905b815481529060010190602001808311610ef357829003601f168201915b5050505050806020019051810190610e029190613ce9565b610b2b60006008610f5a565b60408051606081018252600080825260208201819052918101919091526106ff82611052565b8161064b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610fcc57610fcc613935565b1415611043576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561100d5761100d613935565b600181111561101e5761101e613935565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561109e5761109e613935565b1415611043576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561100d5761100d613935565b6110ef6007600054146029610f5a565b815161110a90158061110357508251600154145b602a610f5a565b60008080556002805461111c906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054611148906139e8565b80156111955780601f1061116a57610100808354040283529160200191611195565b820191906000526020600020905b81548152906001019060200180831161117857829003601f168201915b50505050508060200190518101906111ad9190613ce9565b90506111b76132c7565b7ffbf8864288001800ada068936b1460cabd530e8eb382c05cf88033dc630ae4a9846040516111e69190613edf565b60405180910390a1600060208501515151600481111561120857611208613935565b141561160e5761121a34156018610f5a565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516112569190600090612cc2565b81602001819052506112786112713384602001516000612d36565b6019610f5a565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516112bf9190600190612cc2565b81606001819052506112e16112da3384604001516000612d36565b601a610f5a565b6101408201516112f75760006080820152611341565b8161014001518260c001518361010001518460e001516113179190613f74565b6113219190613f8b565b61132b9190613faa565b82610120015161133b9190613fcc565b60808201525b600161134c33610f80565b51600181111561135e5761135e613935565b1461136a576000611378565b61137333610f80565b604001515b60a0820152336000818152600560205260409020805460ff19166001908117909155906113a490611052565b5160018111156113b6576113b6613935565b146113c25760006113d0565b6113cb33611052565b604001515b60016113db33612b01565b5160018111156113ed576113ed613935565b146113f9576000611407565b61140233612b01565b604001515b82608001516114169190613f74565b8260a001516114259190613f8b565b61142f9190613fcc565b336000908152600560208181526040808420600180820196875560068452828620805460ff199081168317825560808a0151918301919091559484528154909416909317909255928290556060840180518401515160c0860180519190915281518501518501518151860152905184015182015190519015159082015260a084015160e085018051919091528051840192909252905181518151815290830151928101929092527fee0a86b502f3ea1e26fa051fd5c35503f2ea711150e8a058fba6adaa3f144786910160405180910390a160e081015183526040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a161154361362b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e0890180518689018051919091528051600197018790529051815190970196909652878301518651850152610140890151865190930192909252935143940193909352840151918401516115f6929190612cc2565b602082015160c0015261160881612d4e565b506126ce565b600160208501515151600481111561162857611628613935565b14156119b6576020840151516040015161010082015261164a3415601b610f5a565b610160820180515151610120830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161168f9190600090612cc2565b8161014001819052506116b26116ab3384602001516000612d36565b601c610f5a565b610140810180516020908101515161016084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611709906117029033906000612d36565b601d610f5a565b61014082015161172057600061018082015261176c565b61014082015160c08301516101008085015190840151516117419190613f74565b61174b9190613f8b565b6117559190613faa565b8261012001516117659190613fcc565b6101808201525b600161177733610f80565b51600181111561178957611789613935565b146117955760006117a3565b61179e33610f80565b604001515b6101a082015260016117b433611052565b5160018111156117c6576117c6613935565b146117d25760006117e0565b6117db33611052565b604001515b60016117eb33612b01565b5160018111156117fd576117fd613935565b14611809576000611817565b61181233612b01565b604001515b8261018001516118279190613f74565b826101a001516118379190613f8b565b6118419190613fcc565b6101c08201908152336000908152600560209081526040808320805460ff199081166001908117835586519281019290925560068452938290208054909416811784556101808601519301929092556101a08401516101e0850180519190915292518351820152915181518151815290830151928101929092527fb11ae68a4383de85b27eaad9405a8724f5f253392f7d5299a080c34fdee7cbd3910160405180910390a16101e081015160208401526118f961362b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875190910152610100870180515185880180519190915280516001960186905290515181519096019590955261018087015185519093019290925261014080880151855190920191909152925143910152908301516101608401516115f69290612cc2565b60026020850151515160048111156119d0576119d0613935565b1415611e1157602084015151606001516102008201526119f23415601e610f5a565b610200810151516101608301515151611a0b9190613fcc565b610220820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611a4b9190600090612cc2565b610240820152602082015161020082015151611a7491611a6d91339190612d36565b601f610f5a565b610240810180516020908101515161026084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611acb90611ac49033906000612d36565b6020610f5a565b610140820151611ae2576000610280820152611b2d565b8161014001518260c001518361010001518460e00151611b029190613f74565b611b0c9190613f8b565b611b169190613faa565b826101200151611b269190613fcc565b6102808201525b6001611b3833610f80565b516001811115611b4a57611b4a613935565b14611b56576000611b64565b611b5f33610f80565b604001515b6102a08201526001611b7533611052565b516001811115611b8757611b87613935565b14611b93576000611ba1565b611b9c33611052565b604001515b6001611bac33612b01565b516001811115611bbe57611bbe613935565b14611bca576000611bd8565b611bd333612b01565b604001515b826102800151611be89190613f74565b826102a00151611bf89190613f8b565b611c029190613fcc565b6102c082019081523360009081526005602090815260408083208054600160ff19918216811783559551918601919091556006909252909120805490911682178155610280830151910155610200810151516102a0820151611c649190613fcc565b6102e0820190815233600090815260046020908152604091829020805460ff1916600190811782559351930183905561030084018051939093526102c08401518351820152915181518151815290830151928101929092527f935dda38f68b86d6f6b22009fd6d3e79a469e94c3775153cb6f95c03576debe7910160405180910390a161030081015160408085019190915261020082015151815133815260208101919091527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a1611d3d61362b565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015260a08087015185519091015260c08087015185519091015260e086018051838601805191909152805160019401939093525182519093019290925261028084015190519091015261020082015151610140840151611de39190613fcc565b60208201805160800191909152514360a0909101526102408201516102608301516115f69190600190612cc2565b6003602085015151516004811115611e2b57611e2b613935565b14156123065760208401515160800151610320820152611e4d34156021610f5a565b6101608201805151516103408301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611e929190600090612cc2565b816103600181905250611eb5611eae3384602001516000612d36565b6022610f5a565b6103608101805160209081015151610380840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611f009190600190612cc2565b816103a00181905250611f23611f1c3384604001516000612d36565b6023610f5a565b6001611f2e33610f80565b516001811115611f4057611f40613935565b14611f4c576000611f5a565b611f5533610f80565b604001515b6103c0820181905261032082015151611f769110156024610f5a565b6103a0810151515161032082015151611f929110156025610f5a565b610140820151611fa95760006103e0820152611ff4565b8161014001518260c001518361010001518460e00151611fc99190613f74565b611fd39190613f8b565b611fdd9190613faa565b826101200151611fed9190613fcc565b6103e08201525b6001611fff33611052565b51600181111561201157612011613935565b1461201d57600061202b565b61202633611052565b604001515b600161203633612b01565b51600181111561204857612048613935565b14612054576000612062565b61205d33612b01565b604001515b826103e001516120729190613f74565b826103c001516120829190613f8b565b61208c9190613fcc565b61040082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556103e0830151910155610320810151516103c08201516120ee9190613f74565b6104208201908152336000908152600460205260409020805460ff1916600190811782559151910155610320810151516103a082015151516121309190613f74565b61044082018051919091526103a08201805151602090810151835182015290515160409081015192519215159201919091528201516103208201515161217891903390612ece565b6104208101516104608201805191909152610400820151815160200152516040517f9c2d244a0a841a87bd7ecab00513bcef83af27c9a39310b4cf02b0457b53263a916121d691815181526020918201519181019190915260400190565b60405180910390a16104608101516060840152610320810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a161223261362b565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015260a08087015185519091015260c08087015185519091015260e08601805183860180519190915280516001940193909352518251909301929092526103e0840151905190910152610320820151516101408401516122d89190613f74565b60208201805160800191909152514360a0909101526103a08201516104408301516115f69190600090612cc2565b600460208501515151600481111561232057612320613935565b14156126ce5761233234156026610f5a565b61016082018051515161048083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516123779190600090612cc2565b816104a0018190525061239a6123933384602001516000612d36565b6027610f5a565b6104a081018051602090810151516104c0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516123f1906123ea9033906000612d36565b6028610f5a565b6101408201516124085760006104e0820152612453565b8161014001518260c001518361010001518460e001516124289190613f74565b6124329190613f8b565b61243c9190613faa565b82610120015161244c9190613fcc565b6104e08201525b600161245e33610f80565b51600181111561247057612470613935565b1461247c57600061248a565b61248533610f80565b604001515b610500820152600161249b33611052565b5160018111156124ad576124ad613935565b146124b95760006124c7565b6124c233611052565b604001515b60016124d233612b01565b5160018111156124e4576124e4613935565b146124f05760006124fe565b6124f933612b01565b604001515b826104e0015161250e9190613f74565b82610500015161251e9190613f8b565b6125289190613fcc565b6105208201908152336000908152600560209081526040808320805460ff199081166001908117835586519281019290925560068452938290208054909416811784556104e0860151930192909255610500840151610540850180519190915292518351820152915181518151815290830151928101929092527f1e3df7cddf1a83495a7fe844322ae3393609f13e80b744aa60133f6602e48bc7910160405180910390a161054081015160808401526040513381527f1d2f67e3c99742b6b589e3af77fe96ec360dc58b8dca7d3d9a6ee9b64385a2e89060200160405180910390a161261361362b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c08089015187519091015260e08801805185880180519190915280516001960186905290518151909601959095526104e08701518551909301929092526101408701518451909101529151439201919091526104a08301516104c08401516115f69290612cc2565b50505050565b6126e4600160005414600f610f5a565b81516126ff9015806126f857508251600154145b6010610f5a565b600080805560028054612711906139e8565b80601f016020809104026020016040519081016040528092919081815260200182805461273d906139e8565b801561278a5780601f1061275f5761010080835404028352916020019161278a565b820191906000526020600020905b81548152906001019060200180831161276d57829003601f168201915b50505050508060200190518101906127a29190613baf565b90506127cb60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16128163415600c610f5a565b60a082015160e0830151602001515161282f9190613fcc565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516128789161287191339190612d36565b600d610f5a565b8151612890906001600160a01b03163314600e610f5a565b61289861362b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875190910152838601805160009081905281516001960186905281519096018690528051909301859052825190910193909352514392019190915260e0840151835161293c9290612cc2565b602082015160c0015261294e81612d4e565b5050505050565b6129656003600054146012610f5a565b815161298090158061297957508251600154145b6013610f5a565b600080805560028054612992906139e8565b80601f01602080910402602001604051908101604052809291908181526020018280546129be906139e8565b8015612a0b5780601f106129e057610100808354040283529160200191612a0b565b820191906000526020600020905b8154815290600101906020018083116129ee57829003601f168201915b5050505050806020019051810190612a239190613c59565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1612a7134156011610f5a565b612a79613679565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451931692019190915260608084015183519091015260808084015183519091015260a08084015183519091015260c08084015183519091015260e080840151835190910152610100808401518351909101528101514390526126ce81612ee2565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612b4d57612b4d613935565b1415611043576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561100d5761100d613935565b612b9e6006600054146016610f5a565b8151612bb9901580612bb257508251600154145b6017610f5a565b600080805560028054612bcb906139e8565b80601f0160208091040260200160405190810160405280929190818152602001828054612bf7906139e8565b8015612c445780601f10612c1957610100808354040283529160200191612c44565b820191906000526020600020905b815481529060010190602001808311612c2757829003601f168201915b5050505050806020019051810190612c5c9190613c59565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a1612caa34156014610f5a565b8051612a71906001600160a01b031633146015610f5a565b612cca6136a7565b60005b6002811015612d1657848160028110612ce857612ce8613f48565b6020020151828260028110612cff57612cff613f48565b602002015280612d0e81613fe4565b915050612ccd565b5081818460028110612d2a57612d2a613f48565b60200201529392505050565b6000612d4483853085612f77565b90505b9392505050565b80602001516020015115612e3957612d646136f2565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152855160c0908101518187015283870180515160e08801528051860151610100880152805190930151610120870152825190910151610140860152905101516101608401526007600055436001559051612e109183910161403d565b60405160208183030381529060405260029080519060200190612e3492919061376e565b505050565b612e416137f2565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152828601805185015160c087015280519092015160e0860152905101516101008401526003600055436001559051612e10918391016140f6565b50565b612ed9838383613051565b612e3457600080fd5b612eea6137f2565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152835160809081015190840152835160a09081015190840152835160c09081015190840152835160e09081015190840152835161010090810151908401526006600055436001559051612e10918391016140f6565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612fde91614169565b60006040518083038185875af1925050503d806000811461301b576040519150601f19603f3d011682016040523d82523d6000602084013e613020565b606091505b509150915061303182826001613122565b50808060200190518101906130469190614185565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916130b091614169565b60006040518083038185875af1925050503d80600081146130ed576040519150601f19603f3d011682016040523d82523d6000602084013e6130f2565b606091505b509150915061310382826002613122565b50808060200190518101906131189190614185565b9695505050505050565b60608315613131575081612d47565b8251156131415782518084602001fd5b60405163100960cb60e01b815260048101839052602401610f77565b905290565b6040805160e08101909152600060a0820181815260c0830191909152819081526020016131a2604051806040016040528060008152602001600081525090565b81526020016131c4604051806040016040528060008152602001600081525090565b81526020016131e6604051806040016040528060008152602001600081525090565b815260200161315d604051806040016040528060008152602001600081525090565b60405180604001604052806000815260200161315d613859565b6040805160c081018252600080825260208083018290528351808201855282815283850152835180820185528281526060840152835190810190935282529060808201908152600060209091015290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b604051806020016040528061315d613273565b604080516105c081019091526000610560820181815261058083018290526105a08301919091528152602081016132fc6136a7565b815260408051606081018252600080825260208281018290529282015291019081526020016133296136a7565b81526020016000815260200160008152602001613362604051806060016040528060008152602001600081526020016000151581525090565b8152602001613384604051806040016040528060008152602001600081525090565b815260200161339f6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016133cc6136a7565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001613423604051806040016040528060008152602001600081525090565b815260200161343e6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161346b6136a7565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001600081526020016134c9604051806040016040528060008152602001600081525090565b81526020016134e46040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016135116136a7565b8152604080516060810182526000808252602082810182905292820152910190815260200161353e6136a7565b815260200160008152602001600081526020016000815260200160008152602001613585604051806060016040528060008152602001600081526020016000151581525090565b81526020016135a7604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016135d46136a7565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200161315d604051806040016040528060008152602001600081525090565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082018390526101008201929092529081526020810161315d61386c565b604051806040016040528061368c6137f2565b815260200161315d6040518060200160405280600081525090565b60405180604001604052806002905b6136dc604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816136b65790505090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161315d6136a7565b82805461377a906139e8565b90600052602060002090601f01602090048101928261379c57600085556137e2565b82601f106137b557805160ff19168380011785556137e2565b828001600101855582156137e2579182015b828111156137e25782518255916020019190600101906137c7565b506137ee9291506138ab565b5090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806020016040528061315d613222565b6040518060e00160405280600081526020016000151581526020016000815260200160008152602001600081526020016000815260200161315d6136a7565b5b808211156137ee57600081556001016138ac565b6001600160a01b0381168114612ecb57600080fd5b6000602082840312156138e757600080fd5b8135612d47816138c0565b600060e0828403121561390457600080fd5b50919050565b60006040828403121561390457600080fd5b60006020828403121561392e57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061396257613962613935565b808352506020830151151560208301526040830151604083015292915050565b60005b8381101561399d578181015183820152602001613985565b838111156126ce5750506000910152565b82815260406020820152600082518060408401526139d3816060850160208701613982565b601f01601f1916919091016060019392505050565b600181811c908216806139fc57607f821691505b6020821081141561390457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613a5657613a56613a1d565b60405290565b6040516060810167ffffffffffffffff81118282101715613a5657613a56613a1d565b604051610120810167ffffffffffffffff81118282101715613a5657613a56613a1d565b604051610180810167ffffffffffffffff81118282101715613a5657613a56613a1d565b6040516020810167ffffffffffffffff81118282101715613a5657613a56613a1d565b60405160c0810167ffffffffffffffff81118282101715613a5657613a56613a1d565b8051610626816138c0565b8015158114612ecb57600080fd5b600082601f830112613b3757600080fd5b613b3f613a33565b8060c0840185811115613b5157600080fd5b845b81811015613ba45760608188031215613b6c5760008081fd5b613b74613a5c565b8151815260208083015181830152604080840151613b9181613b18565b9083015290855290930192606001613b53565b509095945050505050565b60006101a08284031215613bc257600080fd5b604051610100810181811067ffffffffffffffff82111715613be657613be6613a1d565b6040528251613bf4816138c0565b8152613c0260208401613b0d565b6020820152613c1360408401613b0d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613c4d8460e08501613b26565b60e08201529392505050565b60006101208284031215613c6c57600080fd5b613c74613a7f565b613c7d83613b0d565b8152613c8b60208401613b0d565b6020820152613c9c60408401613b0d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006102208284031215613cfc57600080fd5b613d04613aa3565b613d0d83613b0d565b8152613d1b60208401613b0d565b6020820152613d2c60408401613b0d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160613d9685828601613b26565b908201529392505050565b600060208284031215613db357600080fd5b6040516020810181811067ffffffffffffffff82111715613dd657613dd6613a1d565b6040529135825250919050565b600081830360e0811215613df657600080fd5b613dfe613a33565b8335815260c0601f1983011215613e1457600080fd5b613e1c613ac7565b9150613e26613aea565b602085013560058110613e3857600080fd5b81526040850135613e4881613b18565b6020820152613e5a8660608701613da1565b6040820152613e6c8660808701613da1565b6060820152613e7e8660a08701613da1565b608082015260c0850135613e9181613b18565b60a0820152825260208101919091529392505050565b600060408284031215613eb957600080fd5b613ec1613a33565b823581526020830135613ed381613b18565b60208201529392505050565b81518152602082015151805160e08301919060058110613f0157613f01613935565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a084015260a0810151151560c08401525092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015613f8657613f86613f5e565b500390565b6000816000190483118215151615613fa557613fa5613f5e565b500290565b600082613fc757634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115613fdf57613fdf613f5e565b500190565b6000600019821415613ff857613ff8613f5e565b5060010190565b8060005b60028110156126ce578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614003565b81516001600160a01b031681526102208101602083015161406960208401826001600160a01b03169052565b50604083015161408460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401518184015250610140808401518184015250610160808401516140ee82850182613fff565b505092915050565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b6000825161417b818460208701613982565b9190910192915050565b60006020828403121561419757600080fd5b8151612d4781613b1856fea26469706673582212202b79342e869cd92d5a092c7ce50d8142efa1da144e2e6b3fc2e252e10e687d3564736f6c634300080c0033`,
  BytecodeLen: 18737,
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
    at: './index.rsh:138:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:327:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:332:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:331:26:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:236:21:after expr stmt semicolon',
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

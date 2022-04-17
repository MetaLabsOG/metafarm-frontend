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
              
              const v2987 = {
                lastUpdateBlock: v1358,
                rewardPerTokenStored: v1359,
                totalStaked: v1361
                };
              
              return v2987;}))(...args));
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
              
              const v2986 = {
                beginBlock: v1318,
                endBlock: v1319,
                rewardToken: v1317,
                stakeToken: v1316,
                totalRewardAmount: v1320
                };
              
              return v2986;}))(...args));
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
            return (await ((async (_v2988 ) => {
                const v2988 = stdlib.protect(ctc0, _v2988, null);
              
              const v2989 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2988), null);
              const v2990 = stdlib.fromSome(v2989, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
              const v2991 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2988), null);
              const v2992 = stdlib.fromSome(v2991, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
              const v2993 = {
                reward: v2992,
                staked: v2990
                };
              
              return v2993;}))(...args));
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
    const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn3;
    switch (v1576[0]) {
      case 'claim0_138': {
        const v1579 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v1656 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1661 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1662 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1663 = [v1657, v1661, v1662];
        const v1664 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1663);
        ;
        const v1665 = v1664[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1666 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1670 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1671 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1672 = [v1666, v1670, v1671];
        const v1673 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1672);
        ;
        const v1675 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v1676 = stdlib.fromSome(v1675, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v1677 = v1673[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
        const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
        const v1679 = stdlib.lt(v1676, v1678);
        stdlib.assert(v1679, {
          at: './index.rsh:293:14:application',
          fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1680 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v1681 = stdlib.fromSome(v1680, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v1684 = {
          reward: v1676,
          staked: v1681
          };
        await txn3.getOutput('claim', 'v1684', ctc8, v1684);
        let v1691;
        const v1692 = stdlib.sub(v1390, v1358);
        const v1693 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v1693) {
          v1691 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1694 = stdlib.mul(v1692, v1321);
          const v1695 = stdlib.div(v1694, v1361);
          const v1696 = stdlib.add(v1359, v1695);
          v1691 = v1696;
          }
        const v1699 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v1700 = stdlib.fromSome(v1699, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v1701 = stdlib.sub(v1359, v1700);
        const v1702 = stdlib.mul(v1681, v1701);
        const v1705 = stdlib.add(v1702, v1676);
        await stdlib.mapSet(map1, v1575, v1705);
        await stdlib.mapSet(map2, v1575, v1691);
        const v1713 = stdlib.lt(v1705, v1678);
        if (v1713) {
          const v1721 = stdlib.sub(v1678, v1705);
          const v1724 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1')];
          const v1725 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '2')];
          const v1726 = [v1721, v1724, v1725];
          const v1727 = stdlib.Array_set(v1673, stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1'), v1726);
          ;
          await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1691;
          const cv1361 = v1361;
          const cv1362 = v1577;
          const cv1368 = v1727;
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
          await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1691;
          const cv1361 = v1361;
          const cv1362 = v1577;
          const cv1368 = v1673;
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
        const v1860 = v1576[1];
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
        const v2014 = v1860[stdlib.checkedBigNumberify('./index.rsh:330:9:spread', stdlib.UInt_max, '0')];
        const v2015 = stdlib.gt(v2014, v1357);
        stdlib.assert(v2015, {
          at: './index.rsh:337:14:application',
          fs: ['at ./index.rsh:336:24:application call to [unknown function] (defined at: ./index.rsh:336:24:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2018 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2019 = stdlib.fromSome(v2018, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2020 = {
          reward: v2019,
          staked: v2017
          };
        await txn3.getOutput('setTime', 'v2020', ctc8, v2020);
        const cv1357 = v2014;
        const cv1358 = v1358;
        const cv1359 = v1359;
        const cv1361 = v1361;
        const cv1362 = v1577;
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
        const v2141 = v1576[1];
        undefined /* setApiDetails */;
        const v2167 = v2141[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2218 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2219 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2220 = stdlib.add(v2219, v2167);
        const v2223 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2224 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2225 = [v2220, v2223, v2224];
        const v2226 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2225);
        ;
        const v2227 = v2226[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2228 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2232 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2233 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2234 = [v2228, v2232, v2233];
        const v2235 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2234);
        ;
        const v2311 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2312 = stdlib.fromSome(v2311, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2313 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2315 = {
          reward: v2314,
          staked: v2312
          };
        await txn3.getOutput('stake', 'v2315', ctc8, v2315);
        let v2322;
        const v2323 = stdlib.sub(v1390, v1358);
        const v2324 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2324) {
          v2322 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2325 = stdlib.mul(v2323, v1321);
          const v2326 = stdlib.div(v2325, v1361);
          const v2327 = stdlib.add(v1359, v2326);
          v2322 = v2327;
          }
        const v2330 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2331 = stdlib.fromSome(v2330, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2332 = stdlib.sub(v1359, v2331);
        const v2333 = stdlib.mul(v2312, v2332);
        const v2336 = stdlib.add(v2333, v2314);
        await stdlib.mapSet(map1, v1575, v2336);
        await stdlib.mapSet(map2, v1575, v2322);
        const v2340 = stdlib.add(v2312, v2167);
        await stdlib.mapSet(map0, v1575, v2340);
        null;
        const v2341 = stdlib.add(v1361, v2167);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2322;
        const cv1361 = v2341;
        const cv1362 = v1577;
        const cv1368 = v2235;
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
        const v2422 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v2499 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2504 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2505 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2506 = [v2500, v2504, v2505];
        const v2507 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2506);
        ;
        const v2508 = v2507[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2509 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2513 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2514 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2515 = [v2509, v2513, v2514];
        const v2516 = stdlib.Array_set(v2507, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2515);
        ;
        const v2625 = v2422[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
        const v2626 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2629 = stdlib.fromSome(v2628, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2630 = {
          reward: v2629,
          staked: v2627
          };
        await txn3.getOutput('unstake', 'v2630', ctc8, v2630);
        const v2639 = stdlib.le(v2625, v2627);
        stdlib.assert(v2639, {
          at: './index.rsh:266:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2640 = v2516[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
        const v2641 = v2640[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
        const v2642 = stdlib.le(v2625, v2641);
        stdlib.assert(v2642, {
          at: './index.rsh:267:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v2643;
        const v2644 = stdlib.sub(v1390, v1358);
        const v2645 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2645) {
          v2643 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2646 = stdlib.mul(v2644, v1321);
          const v2647 = stdlib.div(v2646, v1361);
          const v2648 = stdlib.add(v1359, v2647);
          v2643 = v2648;
          }
        const v2651 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2652 = stdlib.fromSome(v2651, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2653 = stdlib.sub(v1359, v2652);
        const v2654 = stdlib.mul(v2627, v2653);
        const v2657 = stdlib.add(v2654, v2629);
        await stdlib.mapSet(map1, v1575, v2657);
        await stdlib.mapSet(map2, v1575, v2643);
        const v2659 = stdlib.sub(v2627, v2625);
        await stdlib.mapSet(map0, v1575, v2659);
        const v2665 = stdlib.sub(v2641, v2625);
        const v2668 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
        const v2669 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
        const v2670 = [v2665, v2668, v2669];
        const v2671 = stdlib.Array_set(v2516, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2670);
        ;
        null;
        const v2672 = stdlib.sub(v1361, v2625);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2643;
        const cv1361 = v2672;
        const cv1362 = v1577;
        const cv1368 = v2671;
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
        const v2703 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v2780 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2781 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2785 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2786 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2787 = [v2781, v2785, v2786];
        const v2788 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2787);
        ;
        const v2789 = v2788[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2790 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2794 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2795 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2796 = [v2790, v2794, v2795];
        const v2797 = stdlib.Array_set(v2788, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2796);
        ;
        const v2956 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2958 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2959 = stdlib.fromSome(v2958, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2960 = {
          reward: v2959,
          staked: v2957
          };
        await txn3.getOutput('update', 'v2960', ctc8, v2960);
        let v2967;
        const v2968 = stdlib.sub(v1390, v1358);
        const v2969 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2969) {
          v2967 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2970 = stdlib.mul(v2968, v1321);
          const v2971 = stdlib.div(v2970, v1361);
          const v2972 = stdlib.add(v1359, v2971);
          v2967 = v2972;
          }
        const v2975 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2976 = stdlib.fromSome(v2975, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2977 = stdlib.sub(v1359, v2976);
        const v2978 = stdlib.mul(v2957, v2977);
        const v2981 = stdlib.add(v2978, v2959);
        await stdlib.mapSet(map1, v1575, v2981);
        await stdlib.mapSet(map2, v1575, v2967);
        null;
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2967;
        const cv1361 = v1361;
        const cv1362 = v1577;
        const cv1368 = v2797;
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:357:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2997, time: v2996, didSend: v1042, from: v2995 } = txn3;
      
      ;
      const v2999 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '1')];
      const v3000 = v2999[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '0')];
      const v3001 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
      const v3002 = v3001[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1369,
        kind: 'from',
        to: v1315,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v3000,
        kind: 'from',
        to: v1315,
        tok: v1317
        });
      sim_r.txns.push({
        amt: v3002,
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
  const {data: [], secs: v2997, time: v2996, didSend: v1042, from: v2995 } = txn3;
  ;
  const v2999 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '1')];
  const v3000 = v2999[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '0')];
  const v3001 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
  const v3002 = v3001[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
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
    const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn3;
    switch (v1576[0]) {
      case 'claim0_138': {
        const v1579 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v1656 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1661 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1662 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1663 = [v1657, v1661, v1662];
        const v1664 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1663);
        ;
        const v1665 = v1664[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1666 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v1670 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v1671 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v1672 = [v1666, v1670, v1671];
        const v1673 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1672);
        ;
        const v1675 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v1676 = stdlib.fromSome(v1675, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v1677 = v1673[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
        const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
        const v1679 = stdlib.lt(v1676, v1678);
        stdlib.assert(v1679, {
          at: './index.rsh:293:14:application',
          fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: null,
          who: 'User'
          });
        const v1680 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v1681 = stdlib.fromSome(v1680, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v1684 = {
          reward: v1676,
          staked: v1681
          };
        await txn3.getOutput('claim', 'v1684', ctc7, v1684);
        let v1691;
        const v1692 = stdlib.sub(v1390, v1358);
        const v1693 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v1693) {
          v1691 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1694 = stdlib.mul(v1692, v1321);
          const v1695 = stdlib.div(v1694, v1361);
          const v1696 = stdlib.add(v1359, v1695);
          v1691 = v1696;
          }
        const v1699 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v1700 = stdlib.fromSome(v1699, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v1701 = stdlib.sub(v1359, v1700);
        const v1702 = stdlib.mul(v1681, v1701);
        const v1705 = stdlib.add(v1702, v1676);
        await stdlib.mapSet(map1, v1575, v1705);
        await stdlib.mapSet(map2, v1575, v1691);
        const v1713 = stdlib.lt(v1705, v1678);
        if (v1713) {
          const v1721 = stdlib.sub(v1678, v1705);
          const v1724 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1')];
          const v1725 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '2')];
          const v1726 = [v1721, v1724, v1725];
          const v1727 = stdlib.Array_set(v1673, stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1'), v1726);
          ;
          await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1691;
          const cv1361 = v1361;
          const cv1362 = v1577;
          const cv1368 = v1727;
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
          await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
          null;
          const cv1357 = v1357;
          const cv1358 = v1390;
          const cv1359 = v1691;
          const cv1361 = v1361;
          const cv1362 = v1577;
          const cv1368 = v1673;
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
        const v1860 = v1576[1];
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
        const v2014 = v1860[stdlib.checkedBigNumberify('./index.rsh:330:9:spread', stdlib.UInt_max, '0')];
        const v2015 = stdlib.gt(v2014, v1357);
        stdlib.assert(v2015, {
          at: './index.rsh:337:14:application',
          fs: ['at ./index.rsh:336:24:application call to [unknown function] (defined at: ./index.rsh:336:24:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2018 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2019 = stdlib.fromSome(v2018, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2020 = {
          reward: v2019,
          staked: v2017
          };
        await txn3.getOutput('setTime', 'v2020', ctc7, v2020);
        const cv1357 = v2014;
        const cv1358 = v1358;
        const cv1359 = v1359;
        const cv1361 = v1361;
        const cv1362 = v1577;
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
        const v2141 = v1576[1];
        undefined /* setApiDetails */;
        const v2167 = v2141[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
        ;
        const v2218 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2219 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2220 = stdlib.add(v2219, v2167);
        const v2223 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2224 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2225 = [v2220, v2223, v2224];
        const v2226 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2225);
        ;
        const v2227 = v2226[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2228 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2232 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2233 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2234 = [v2228, v2232, v2233];
        const v2235 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2234);
        ;
        const v2311 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2312 = stdlib.fromSome(v2311, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2313 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2315 = {
          reward: v2314,
          staked: v2312
          };
        await txn3.getOutput('stake', 'v2315', ctc7, v2315);
        let v2322;
        const v2323 = stdlib.sub(v1390, v1358);
        const v2324 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2324) {
          v2322 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2325 = stdlib.mul(v2323, v1321);
          const v2326 = stdlib.div(v2325, v1361);
          const v2327 = stdlib.add(v1359, v2326);
          v2322 = v2327;
          }
        const v2330 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2331 = stdlib.fromSome(v2330, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2332 = stdlib.sub(v1359, v2331);
        const v2333 = stdlib.mul(v2312, v2332);
        const v2336 = stdlib.add(v2333, v2314);
        await stdlib.mapSet(map1, v1575, v2336);
        await stdlib.mapSet(map2, v1575, v2322);
        const v2340 = stdlib.add(v2312, v2167);
        await stdlib.mapSet(map0, v1575, v2340);
        null;
        const v2341 = stdlib.add(v1361, v2167);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2322;
        const cv1361 = v2341;
        const cv1362 = v1577;
        const cv1368 = v2235;
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
        const v2422 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v2499 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2504 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2505 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2506 = [v2500, v2504, v2505];
        const v2507 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2506);
        ;
        const v2508 = v2507[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2509 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2513 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2514 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2515 = [v2509, v2513, v2514];
        const v2516 = stdlib.Array_set(v2507, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2515);
        ;
        const v2625 = v2422[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
        const v2626 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2629 = stdlib.fromSome(v2628, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2630 = {
          reward: v2629,
          staked: v2627
          };
        await txn3.getOutput('unstake', 'v2630', ctc7, v2630);
        const v2639 = stdlib.le(v2625, v2627);
        stdlib.assert(v2639, {
          at: './index.rsh:266:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2640 = v2516[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
        const v2641 = v2640[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
        const v2642 = stdlib.le(v2625, v2641);
        stdlib.assert(v2642, {
          at: './index.rsh:267:14:application',
          fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: null,
          who: 'User'
          });
        let v2643;
        const v2644 = stdlib.sub(v1390, v1358);
        const v2645 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2645) {
          v2643 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2646 = stdlib.mul(v2644, v1321);
          const v2647 = stdlib.div(v2646, v1361);
          const v2648 = stdlib.add(v1359, v2647);
          v2643 = v2648;
          }
        const v2651 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2652 = stdlib.fromSome(v2651, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2653 = stdlib.sub(v1359, v2652);
        const v2654 = stdlib.mul(v2627, v2653);
        const v2657 = stdlib.add(v2654, v2629);
        await stdlib.mapSet(map1, v1575, v2657);
        await stdlib.mapSet(map2, v1575, v2643);
        const v2659 = stdlib.sub(v2627, v2625);
        await stdlib.mapSet(map0, v1575, v2659);
        const v2665 = stdlib.sub(v2641, v2625);
        const v2668 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
        const v2669 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
        const v2670 = [v2665, v2668, v2669];
        const v2671 = stdlib.Array_set(v2516, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2670);
        ;
        null;
        const v2672 = stdlib.sub(v1361, v2625);
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2643;
        const cv1361 = v2672;
        const cv1362 = v1577;
        const cv1368 = v2671;
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
        const v2703 = v1576[1];
        undefined /* setApiDetails */;
        ;
        const v2780 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2781 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2785 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2786 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2787 = [v2781, v2785, v2786];
        const v2788 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2787);
        ;
        const v2789 = v2788[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2790 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
        const v2794 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
        const v2795 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
        const v2796 = [v2790, v2794, v2795];
        const v2797 = stdlib.Array_set(v2788, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2796);
        ;
        const v2956 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
        const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
        const v2958 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
        const v2959 = stdlib.fromSome(v2958, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
        const v2960 = {
          reward: v2959,
          staked: v2957
          };
        await txn3.getOutput('update', 'v2960', ctc7, v2960);
        let v2967;
        const v2968 = stdlib.sub(v1390, v1358);
        const v2969 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
        if (v2969) {
          v2967 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2970 = stdlib.mul(v2968, v1321);
          const v2971 = stdlib.div(v2970, v1361);
          const v2972 = stdlib.add(v1359, v2971);
          v2967 = v2972;
          }
        const v2975 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
        const v2976 = stdlib.fromSome(v2975, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
        const v2977 = stdlib.sub(v1359, v2976);
        const v2978 = stdlib.mul(v2957, v2977);
        const v2981 = stdlib.add(v2978, v2959);
        await stdlib.mapSet(map1, v1575, v2981);
        await stdlib.mapSet(map2, v1575, v2967);
        null;
        const cv1357 = v1357;
        const cv1358 = v1390;
        const cv1359 = v2967;
        const cv1361 = v1361;
        const cv1362 = v1577;
        const cv1368 = v2797;
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:357:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2997, time: v2996, didSend: v1042, from: v2995 } = txn3;
      
      ;
      const v2999 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '1')];
      const v3000 = v2999[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '0')];
      const v3001 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
      const v3002 = v3001[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1369,
        kind: 'from',
        to: v1315,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v3000,
        kind: 'from',
        to: v1315,
        tok: v1317
        });
      sim_r.txns.push({
        amt: v3002,
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
  const {data: [], secs: v2997, time: v2996, didSend: v1042, from: v2995 } = txn3;
  ;
  const v2999 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '1')];
  const v3000 = v2999[stdlib.checkedBigNumberify('./index.rsh:358:32:application', stdlib.UInt_max, '0')];
  const v3001 = v1368[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
  const v3002 = v3001[stdlib.checkedBigNumberify('./index.rsh:358:69:application', stdlib.UInt_max, '0')];
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
    fs: ['at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:179:21:application call to "runclaim0_138" (defined at: ./index.rsh:286:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1428 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1424), null);
  const v1429 = stdlib.fromSome(v1428, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
  const v1430 = v1368[stdlib.checkedBigNumberify('./index.rsh:289:37:application', stdlib.UInt_max, '1')];
  const v1431 = v1430[stdlib.checkedBigNumberify('./index.rsh:289:37:application', stdlib.UInt_max, '0')];
  const v1432 = stdlib.lt(v1429, v1431);
  stdlib.assert(v1432, {
    at: './index.rsh:289:14:application',
    fs: ['at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:179:21:application call to "runclaim0_138" (defined at: ./index.rsh:286:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:291:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:291:35:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
      
      switch (v1576[0]) {
        case 'claim0_138': {
          const v1579 = v1576[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1656 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1661 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1662 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1663 = [v1657, v1661, v1662];
          const v1664 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1663);
          ;
          const v1665 = v1664[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1666 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v1670 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v1671 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v1672 = [v1666, v1670, v1671];
          const v1673 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1672);
          ;
          const v1675 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1575), null);
          const v1676 = stdlib.fromSome(v1675, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v1677 = v1673[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
          const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
          const v1679 = stdlib.lt(v1676, v1678);
          ;
          const v1680 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1575), null);
          const v1681 = stdlib.fromSome(v1680, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v1684 = {
            reward: v1676,
            staked: v1681
            };
          const v1686 = await txn1.getOutput('claim', 'v1684', ctc11, v1684);
          
          let v1691;
          const v1692 = stdlib.sub(v1390, v1358);
          const v1693 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v1693) {
            v1691 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1694 = stdlib.mul(v1692, v1321);
            const v1695 = stdlib.div(v1694, v1361);
            const v1696 = stdlib.add(v1359, v1695);
            v1691 = v1696;
            }
          const v1699 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1575), null);
          const v1700 = stdlib.fromSome(v1699, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v1701 = stdlib.sub(v1359, v1700);
          const v1702 = stdlib.mul(v1681, v1701);
          const v1705 = stdlib.add(v1702, v1676);
          await stdlib.simMapSet(sim_r, 1, v1575, v1705);
          await stdlib.simMapSet(sim_r, 2, v1575, v1691);
          const v1713 = stdlib.lt(v1705, v1678);
          if (v1713) {
            const v1721 = stdlib.sub(v1678, v1705);
            const v1724 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1')];
            const v1725 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '2')];
            const v1726 = [v1721, v1724, v1725];
            const v1727 = stdlib.Array_set(v1673, stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1'), v1726);
            sim_r.txns.push({
              amt: v1705,
              kind: 'from',
              to: v1575,
              tok: v1317
              });
            await stdlib.simMapSet(sim_r, 1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
            null;
            const v5728 = v1357;
            const v5729 = v1390;
            const v5730 = v1691;
            const v5731 = v1361;
            const v5733 = v1727;
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
          else {
            await stdlib.simMapSet(sim_r, 1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
            null;
            const v5746 = v1357;
            const v5747 = v1390;
            const v5748 = v1691;
            const v5749 = v1361;
            const v5751 = v1673;
            const v5752 = v1369;
            const v5753 = stdlib.lt(v1357, v1319);
            if (v5753) {
              const v5755 = v1357;
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1576[1];
          
          break;
          }
        case 'stake0_138': {
          const v2141 = v1576[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2422 = v1576[1];
          
          break;
          }
        case 'update0_138': {
          const v2703 = v1576[1];
          
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
  const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
  switch (v1576[0]) {
    case 'claim0_138': {
      const v1579 = v1576[1];
      undefined /* setApiDetails */;
      ;
      const v1656 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1657 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1661 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1662 = v1656[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1663 = [v1657, v1661, v1662];
      const v1664 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v1663);
      ;
      const v1665 = v1664[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1666 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v1670 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v1671 = v1665[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v1672 = [v1666, v1670, v1671];
      const v1673 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v1672);
      ;
      const v1675 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
      const v1676 = stdlib.fromSome(v1675, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v1677 = v1673[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
      const v1678 = v1677[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
      const v1679 = stdlib.lt(v1676, v1678);
      stdlib.assert(v1679, {
        at: './index.rsh:293:14:application',
        fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
        msg: null,
        who: 'claim'
        });
      const v1680 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
      const v1681 = stdlib.fromSome(v1680, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v1684 = {
        reward: v1676,
        staked: v1681
        };
      const v1686 = await txn1.getOutput('claim', 'v1684', ctc11, v1684);
      if (v813) {
        stdlib.protect(ctc0, await interact.out(v1579, v1686), {
          at: './index.rsh:287:7:application',
          fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:7:function exp)', 'at ./index.rsh:294:17:application call to "callback" (defined at: ./index.rsh:292:18:function exp)', 'at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      let v1691;
      const v1692 = stdlib.sub(v1390, v1358);
      const v1693 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v1693) {
        v1691 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1694 = stdlib.mul(v1692, v1321);
        const v1695 = stdlib.div(v1694, v1361);
        const v1696 = stdlib.add(v1359, v1695);
        v1691 = v1696;
        }
      const v1699 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
      const v1700 = stdlib.fromSome(v1699, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v1701 = stdlib.sub(v1359, v1700);
      const v1702 = stdlib.mul(v1681, v1701);
      const v1705 = stdlib.add(v1702, v1676);
      await stdlib.mapSet(map1, v1575, v1705);
      await stdlib.mapSet(map2, v1575, v1691);
      const v1713 = stdlib.lt(v1705, v1678);
      if (v1713) {
        const v1721 = stdlib.sub(v1678, v1705);
        const v1724 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1')];
        const v1725 = v1677[stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '2')];
        const v1726 = [v1721, v1724, v1725];
        const v1727 = stdlib.Array_set(v1673, stdlib.checkedBigNumberify('./index.rsh:300:53:application', stdlib.UInt_max, '1'), v1726);
        ;
        await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
        null;
        const v5728 = v1357;
        const v5729 = v1390;
        const v5730 = v1691;
        const v5731 = v1361;
        const v5733 = v1727;
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
      else {
        await stdlib.mapSet(map1, v1575, stdlib.checkedBigNumberify('./index.rsh:302:25:decimal', stdlib.UInt_max, '0'));
        null;
        const v5746 = v1357;
        const v5747 = v1390;
        const v5748 = v1691;
        const v5749 = v1361;
        const v5751 = v1673;
        const v5752 = v1369;
        const v5753 = stdlib.lt(v1357, v1319);
        if (v5753) {
          const v5755 = v1357;
          return;
          }
        else {
          null;
          return;
          }}
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1576[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2141 = v1576[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2422 = v1576[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2703 = v1576[1];
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
    fs: ['at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:179:21:application call to "runsetTime0_138" (defined at: ./index.rsh:330:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:330:9:spread', stdlib.UInt_max, '0')];
  const v1450 = stdlib.gt(v1448, v1357);
  stdlib.assert(v1450, {
    at: './index.rsh:333:14:application',
    fs: ['at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:179:21:application call to "runsetTime0_138" (defined at: ./index.rsh:330:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1453 = ['setTime0_138', v1447];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1315, v1316, v1317, v1318, v1319, v1320, v1321, v1357, v1358, v1359, v1361, v1368, v1369, v1390, v1453],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:335:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:335:19:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:335:36:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
      
      switch (v1576[0]) {
        case 'claim0_138': {
          const v1579 = v1576[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1576[1];
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
          const v2014 = v1860[stdlib.checkedBigNumberify('./index.rsh:330:9:spread', stdlib.UInt_max, '0')];
          const v2015 = stdlib.gt(v2014, v1357);
          ;
          const v2016 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1575), null);
          const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2018 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1575), null);
          const v2019 = stdlib.fromSome(v2018, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2020 = {
            reward: v2019,
            staked: v2017
            };
          const v2022 = await txn1.getOutput('setTime', 'v2020', ctc11, v2020);
          
          const v5872 = v2014;
          const v5873 = v1358;
          const v5874 = v1359;
          const v5875 = v1361;
          const v5877 = v1954;
          const v5878 = v1369;
          const v5879 = stdlib.lt(v2014, v1319);
          if (v5879) {
            const v5881 = v2014;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_138': {
          const v2141 = v1576[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2422 = v1576[1];
          
          break;
          }
        case 'update0_138': {
          const v2703 = v1576[1];
          
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
  const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
  switch (v1576[0]) {
    case 'claim0_138': {
      const v1579 = v1576[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1576[1];
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
      const v2014 = v1860[stdlib.checkedBigNumberify('./index.rsh:330:9:spread', stdlib.UInt_max, '0')];
      const v2015 = stdlib.gt(v2014, v1357);
      stdlib.assert(v2015, {
        at: './index.rsh:337:14:application',
        fs: ['at ./index.rsh:336:24:application call to [unknown function] (defined at: ./index.rsh:336:24:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v2016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
      const v2017 = stdlib.fromSome(v2016, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2018 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
      const v2019 = stdlib.fromSome(v2018, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2020 = {
        reward: v2019,
        staked: v2017
        };
      const v2022 = await txn1.getOutput('setTime', 'v2020', ctc11, v2020);
      if (v813) {
        stdlib.protect(ctc0, await interact.out(v1860, v2022), {
          at: './index.rsh:331:7:application',
          fs: ['at ./index.rsh:331:7:application call to [unknown function] (defined at: ./index.rsh:331:7:function exp)', 'at ./index.rsh:338:17:application call to "callback" (defined at: ./index.rsh:336:24:function exp)', 'at ./index.rsh:336:24:application call to [unknown function] (defined at: ./index.rsh:336:24:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v5872 = v2014;
      const v5873 = v1358;
      const v5874 = v1359;
      const v5875 = v1361;
      const v5877 = v1954;
      const v5878 = v1369;
      const v5879 = stdlib.lt(v2014, v1319);
      if (v5879) {
        const v5881 = v2014;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'stake0_138': {
      const v2141 = v1576[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2422 = v1576[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2703 = v1576[1];
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
      
      const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
      
      switch (v1576[0]) {
        case 'claim0_138': {
          const v1579 = v1576[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1576[1];
          
          break;
          }
        case 'stake0_138': {
          const v2141 = v1576[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v2167 = v2141[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
          ;
          const v2218 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2219 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2220 = stdlib.add(v2219, v2167);
          const v2223 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2224 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2225 = [v2220, v2223, v2224];
          const v2226 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2225);
          sim_r.txns.push({
            amt: v2167,
            kind: 'to',
            tok: v1316
            });
          const v2227 = v2226[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2228 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2232 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2233 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2234 = [v2228, v2232, v2233];
          const v2235 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2234);
          ;
          const v2311 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1575), null);
          const v2312 = stdlib.fromSome(v2311, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2313 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1575), null);
          const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2315 = {
            reward: v2314,
            staked: v2312
            };
          const v2317 = await txn1.getOutput('stake', 'v2315', ctc11, v2315);
          
          let v2322;
          const v2323 = stdlib.sub(v1390, v1358);
          const v2324 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2324) {
            v2322 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2325 = stdlib.mul(v2323, v1321);
            const v2326 = stdlib.div(v2325, v1361);
            const v2327 = stdlib.add(v1359, v2326);
            v2322 = v2327;
            }
          const v2330 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1575), null);
          const v2331 = stdlib.fromSome(v2330, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2332 = stdlib.sub(v1359, v2331);
          const v2333 = stdlib.mul(v2312, v2332);
          const v2336 = stdlib.add(v2333, v2314);
          await stdlib.simMapSet(sim_r, 1, v1575, v2336);
          await stdlib.simMapSet(sim_r, 2, v1575, v2322);
          const v2340 = stdlib.add(v2312, v2167);
          await stdlib.simMapSet(sim_r, 0, v1575, v2340);
          null;
          const v2341 = stdlib.add(v1361, v2167);
          const v5998 = v1357;
          const v5999 = v1390;
          const v6000 = v2322;
          const v6001 = v2341;
          const v6003 = v2235;
          const v6004 = v1369;
          const v6005 = stdlib.lt(v1357, v1319);
          if (v6005) {
            const v6007 = v1357;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_138': {
          const v2422 = v1576[1];
          
          break;
          }
        case 'update0_138': {
          const v2703 = v1576[1];
          
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
  const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
  switch (v1576[0]) {
    case 'claim0_138': {
      const v1579 = v1576[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1576[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2141 = v1576[1];
      undefined /* setApiDetails */;
      const v2167 = v2141[stdlib.checkedBigNumberify('./index.rsh:235:9:spread', stdlib.UInt_max, '0')];
      ;
      const v2218 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2219 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2220 = stdlib.add(v2219, v2167);
      const v2223 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2224 = v2218[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2225 = [v2220, v2223, v2224];
      const v2226 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2225);
      ;
      const v2227 = v2226[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2228 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2232 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2233 = v2227[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2234 = [v2228, v2232, v2233];
      const v2235 = stdlib.Array_set(v2226, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2234);
      ;
      const v2311 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
      const v2312 = stdlib.fromSome(v2311, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2313 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
      const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2315 = {
        reward: v2314,
        staked: v2312
        };
      const v2317 = await txn1.getOutput('stake', 'v2315', ctc11, v2315);
      if (v813) {
        stdlib.protect(ctc0, await interact.out(v2141, v2317), {
          at: './index.rsh:236:7:application',
          fs: ['at ./index.rsh:236:7:application call to [unknown function] (defined at: ./index.rsh:236:7:function exp)', 'at ./index.rsh:242:17:application call to "callback" (defined at: ./index.rsh:241:27:function exp)', 'at ./index.rsh:241:27:application call to [unknown function] (defined at: ./index.rsh:241:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      let v2322;
      const v2323 = stdlib.sub(v1390, v1358);
      const v2324 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2324) {
        v2322 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2325 = stdlib.mul(v2323, v1321);
        const v2326 = stdlib.div(v2325, v1361);
        const v2327 = stdlib.add(v1359, v2326);
        v2322 = v2327;
        }
      const v2330 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
      const v2331 = stdlib.fromSome(v2330, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2332 = stdlib.sub(v1359, v2331);
      const v2333 = stdlib.mul(v2312, v2332);
      const v2336 = stdlib.add(v2333, v2314);
      await stdlib.mapSet(map1, v1575, v2336);
      await stdlib.mapSet(map2, v1575, v2322);
      const v2340 = stdlib.add(v2312, v2167);
      await stdlib.mapSet(map0, v1575, v2340);
      null;
      const v2341 = stdlib.add(v1361, v2167);
      const v5998 = v1357;
      const v5999 = v1390;
      const v6000 = v2322;
      const v6001 = v2341;
      const v6003 = v2235;
      const v6004 = v1369;
      const v6005 = stdlib.lt(v1357, v1319);
      if (v6005) {
        const v6007 = v1357;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'unstake0_138': {
      const v2422 = v1576[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2703 = v1576[1];
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
      
      const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
      
      switch (v1576[0]) {
        case 'claim0_138': {
          const v1579 = v1576[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1576[1];
          
          break;
          }
        case 'stake0_138': {
          const v2141 = v1576[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2422 = v1576[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2499 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2504 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2505 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2506 = [v2500, v2504, v2505];
          const v2507 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2506);
          ;
          const v2508 = v2507[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2509 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2513 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2514 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2515 = [v2509, v2513, v2514];
          const v2516 = stdlib.Array_set(v2507, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2515);
          ;
          const v2625 = v2422[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
          const v2626 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1575), null);
          const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2628 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1575), null);
          const v2629 = stdlib.fromSome(v2628, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2630 = {
            reward: v2629,
            staked: v2627
            };
          const v2632 = await txn1.getOutput('unstake', 'v2630', ctc11, v2630);
          
          const v2639 = stdlib.le(v2625, v2627);
          ;
          const v2640 = v2516[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
          const v2641 = v2640[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
          const v2642 = stdlib.le(v2625, v2641);
          ;
          let v2643;
          const v2644 = stdlib.sub(v1390, v1358);
          const v2645 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2645) {
            v2643 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2646 = stdlib.mul(v2644, v1321);
            const v2647 = stdlib.div(v2646, v1361);
            const v2648 = stdlib.add(v1359, v2647);
            v2643 = v2648;
            }
          const v2651 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1575), null);
          const v2652 = stdlib.fromSome(v2651, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2653 = stdlib.sub(v1359, v2652);
          const v2654 = stdlib.mul(v2627, v2653);
          const v2657 = stdlib.add(v2654, v2629);
          await stdlib.simMapSet(sim_r, 1, v1575, v2657);
          await stdlib.simMapSet(sim_r, 2, v1575, v2643);
          const v2659 = stdlib.sub(v2627, v2625);
          await stdlib.simMapSet(sim_r, 0, v1575, v2659);
          const v2665 = stdlib.sub(v2641, v2625);
          const v2668 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
          const v2669 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
          const v2670 = [v2665, v2668, v2669];
          const v2671 = stdlib.Array_set(v2516, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2670);
          sim_r.txns.push({
            amt: v2625,
            kind: 'from',
            to: v1575,
            tok: v1316
            });
          null;
          const v2672 = stdlib.sub(v1361, v2625);
          const v6124 = v1357;
          const v6125 = v1390;
          const v6126 = v2643;
          const v6127 = v2672;
          const v6129 = v2671;
          const v6130 = v1369;
          const v6131 = stdlib.lt(v1357, v1319);
          if (v6131) {
            const v6133 = v1357;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_138': {
          const v2703 = v1576[1];
          
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
  const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
  switch (v1576[0]) {
    case 'claim0_138': {
      const v1579 = v1576[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1576[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2141 = v1576[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2422 = v1576[1];
      undefined /* setApiDetails */;
      ;
      const v2499 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2504 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2505 = v2499[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2506 = [v2500, v2504, v2505];
      const v2507 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2506);
      ;
      const v2508 = v2507[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2509 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2513 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2514 = v2508[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2515 = [v2509, v2513, v2514];
      const v2516 = stdlib.Array_set(v2507, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2515);
      ;
      const v2625 = v2422[stdlib.checkedBigNumberify('./index.rsh:256:9:spread', stdlib.UInt_max, '0')];
      const v2626 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
      const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
      const v2629 = stdlib.fromSome(v2628, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2630 = {
        reward: v2629,
        staked: v2627
        };
      const v2632 = await txn1.getOutput('unstake', 'v2630', ctc11, v2630);
      if (v813) {
        stdlib.protect(ctc0, await interact.out(v2422, v2632), {
          at: './index.rsh:257:7:application',
          fs: ['at ./index.rsh:257:7:application call to [unknown function] (defined at: ./index.rsh:257:7:function exp)', 'at ./index.rsh:264:17:application call to "callback" (defined at: ./index.rsh:263:29:function exp)', 'at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      const v2639 = stdlib.le(v2625, v2627);
      stdlib.assert(v2639, {
        at: './index.rsh:266:14:application',
        fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2640 = v2516[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
      const v2641 = v2640[stdlib.checkedBigNumberify('./index.rsh:267:35:application', stdlib.UInt_max, '0')];
      const v2642 = stdlib.le(v2625, v2641);
      stdlib.assert(v2642, {
        at: './index.rsh:267:14:application',
        fs: ['at ./index.rsh:263:29:application call to [unknown function] (defined at: ./index.rsh:263:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v2643;
      const v2644 = stdlib.sub(v1390, v1358);
      const v2645 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2645) {
        v2643 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2646 = stdlib.mul(v2644, v1321);
        const v2647 = stdlib.div(v2646, v1361);
        const v2648 = stdlib.add(v1359, v2647);
        v2643 = v2648;
        }
      const v2651 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
      const v2652 = stdlib.fromSome(v2651, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2653 = stdlib.sub(v1359, v2652);
      const v2654 = stdlib.mul(v2627, v2653);
      const v2657 = stdlib.add(v2654, v2629);
      await stdlib.mapSet(map1, v1575, v2657);
      await stdlib.mapSet(map2, v1575, v2643);
      const v2659 = stdlib.sub(v2627, v2625);
      await stdlib.mapSet(map0, v1575, v2659);
      const v2665 = stdlib.sub(v2641, v2625);
      const v2668 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '1')];
      const v2669 = v2640[stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '2')];
      const v2670 = [v2665, v2668, v2669];
      const v2671 = stdlib.Array_set(v2516, stdlib.checkedBigNumberify('./index.rsh:274:47:application', stdlib.UInt_max, '0'), v2670);
      ;
      null;
      const v2672 = stdlib.sub(v1361, v2625);
      const v6124 = v1357;
      const v6125 = v1390;
      const v6126 = v2643;
      const v6127 = v2672;
      const v6129 = v2671;
      const v6130 = v1369;
      const v6131 = stdlib.lt(v1357, v1319);
      if (v6131) {
        const v6133 = v1357;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'update0_138': {
      const v2703 = v1576[1];
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
    fs: ['at ./index.rsh:314:9:application call to [unknown function] (defined at: ./index.rsh:314:9:function exp)', 'at ./index.rsh:179:21:application call to "runupdate0_138" (defined at: ./index.rsh:314:9:function exp)', 'at ./index.rsh:179:21:application call to [unknown function] (defined at: ./index.rsh:179:21:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:314:9:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:234:14:decimal', stdlib.UInt_max, '0'), v1316], [stdlib.checkedBigNumberify('./index.rsh:234:14:decimal', stdlib.UInt_max, '0'), v1317]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
      
      switch (v1576[0]) {
        case 'claim0_138': {
          const v1579 = v1576[1];
          
          break;
          }
        case 'setTime0_138': {
          const v1860 = v1576[1];
          
          break;
          }
        case 'stake0_138': {
          const v2141 = v1576[1];
          
          break;
          }
        case 'unstake0_138': {
          const v2422 = v1576[1];
          
          break;
          }
        case 'update0_138': {
          const v2703 = v1576[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v2780 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2781 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2785 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2786 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2787 = [v2781, v2785, v2786];
          const v2788 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2787);
          ;
          const v2789 = v2788[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2790 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
          const v2794 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
          const v2795 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
          const v2796 = [v2790, v2794, v2795];
          const v2797 = stdlib.Array_set(v2788, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2796);
          ;
          const v2956 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1575), null);
          const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
          const v2958 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1575), null);
          const v2959 = stdlib.fromSome(v2958, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
          const v2960 = {
            reward: v2959,
            staked: v2957
            };
          const v2962 = await txn1.getOutput('update', 'v2960', ctc11, v2960);
          
          let v2967;
          const v2968 = stdlib.sub(v1390, v1358);
          const v2969 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
          if (v2969) {
            v2967 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2970 = stdlib.mul(v2968, v1321);
            const v2971 = stdlib.div(v2970, v1361);
            const v2972 = stdlib.add(v1359, v2971);
            v2967 = v2972;
            }
          const v2975 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1575), null);
          const v2976 = stdlib.fromSome(v2975, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
          const v2977 = stdlib.sub(v1359, v2976);
          const v2978 = stdlib.mul(v2957, v2977);
          const v2981 = stdlib.add(v2978, v2959);
          await stdlib.simMapSet(sim_r, 1, v1575, v2981);
          await stdlib.simMapSet(sim_r, 2, v1575, v2967);
          null;
          const v6250 = v1357;
          const v6251 = v1390;
          const v6252 = v2967;
          const v6253 = v1361;
          const v6255 = v2797;
          const v6256 = v1369;
          const v6257 = stdlib.lt(v1357, v1319);
          if (v6257) {
            const v6259 = v1357;
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
  const {data: [v1576], secs: v1578, time: v1577, didSend: v813, from: v1575 } = txn1;
  switch (v1576[0]) {
    case 'claim0_138': {
      const v1579 = v1576[1];
      return;
      break;
      }
    case 'setTime0_138': {
      const v1860 = v1576[1];
      return;
      break;
      }
    case 'stake0_138': {
      const v2141 = v1576[1];
      return;
      break;
      }
    case 'unstake0_138': {
      const v2422 = v1576[1];
      return;
      break;
      }
    case 'update0_138': {
      const v2703 = v1576[1];
      undefined /* setApiDetails */;
      ;
      const v2780 = v1368[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2781 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2785 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2786 = v2780[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2787 = [v2781, v2785, v2786];
      const v2788 = stdlib.Array_set(v1368, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0'), v2787);
      ;
      const v2789 = v2788[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2790 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '0')];
      const v2794 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1')];
      const v2795 = v2789[stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '2')];
      const v2796 = [v2790, v2794, v2795];
      const v2797 = stdlib.Array_set(v2788, stdlib.checkedBigNumberify('./index.rsh:179:21:dot', stdlib.UInt_max, '1'), v2796);
      ;
      const v2956 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1575), null);
      const v2957 = stdlib.fromSome(v2956, stdlib.checkedBigNumberify('./index.rsh:149:77:decimal', stdlib.UInt_max, '0'));
      const v2958 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1575), null);
      const v2959 = stdlib.fromSome(v2958, stdlib.checkedBigNumberify('./index.rsh:151:77:decimal', stdlib.UInt_max, '0'));
      const v2960 = {
        reward: v2959,
        staked: v2957
        };
      const v2962 = await txn1.getOutput('update', 'v2960', ctc11, v2960);
      if (v813) {
        stdlib.protect(ctc0, await interact.out(v2703, v2962), {
          at: './index.rsh:315:7:application',
          fs: ['at ./index.rsh:315:7:application call to [unknown function] (defined at: ./index.rsh:315:7:function exp)', 'at ./index.rsh:317:17:application call to "callback" (defined at: ./index.rsh:316:18:function exp)', 'at ./index.rsh:316:18:application call to [unknown function] (defined at: ./index.rsh:316:18:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      let v2967;
      const v2968 = stdlib.sub(v1390, v1358);
      const v2969 = stdlib.eq(v1361, stdlib.checkedBigNumberify('./index.rsh:192:28:decimal', stdlib.UInt_max, '0'));
      if (v2969) {
        v2967 = stdlib.checkedBigNumberify('./index.rsh:193:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2970 = stdlib.mul(v2968, v1321);
        const v2971 = stdlib.div(v2970, v1361);
        const v2972 = stdlib.add(v1359, v2971);
        v2967 = v2972;
        }
      const v2975 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1575), null);
      const v2976 = stdlib.fromSome(v2975, stdlib.checkedBigNumberify('./index.rsh:154:113:decimal', stdlib.UInt_max, '0'));
      const v2977 = stdlib.sub(v1359, v2976);
      const v2978 = stdlib.mul(v2957, v2977);
      const v2981 = stdlib.add(v2978, v2959);
      await stdlib.mapSet(map1, v1575, v2981);
      await stdlib.mapSet(map2, v1575, v2967);
      null;
      const v6250 = v1357;
      const v6251 = v1390;
      const v6252 = v2967;
      const v6253 = v1361;
      const v6255 = v2797;
      const v6256 = v1369;
      const v6257 = stdlib.lt(v1357, v1319);
      if (v6257) {
        const v6259 = v1357;
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
  appApproval: `BiAVAAEEBQMIICigjQYbvfqL1ASrpp6jCrz138MLq5ryxgi6pcyCApWqrdoD+srupQEwOEBIJgUBAAEBAAkBAAAAAAAAAAAE5SLx1yI1ADEYQQw/KmRJIls1ASEFWzUCMRkjEkEACjEAKCEJr2ZCDAs2GgAXSUEBuyI1BCM1BkkhCgxAAK5JIQsMQAB+SSEMDEAAYyEMEkQ0AUklDEAAKyUSRChkKWRQSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCC8AhBBJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0ILlCELEkQqNf+AAQQ0/1AhBa9QQgFGSSENDEAAECENEkQ2GgE1/yk0/1BCAS8hChJENhoBNf+AAQM0/1BCAR1JIQ4MQABkSSEPDEAAEiEPEkQqNf8oNP9QIQWvUEIA/SEOEkQ0AUklDEAAHyUSRChkKWRQSTUDV2gINANXWAhQNANXYAhQNQdCCwwhBBJEKGQpZFBJNQNXWAg0A1dICFA0A1dQCFA1B0IK7EkhEAxAAHkhEBJENAFJJQxAADYlEkQ2GgE1/yI0/4gK3FcACUk1/iNbNP4iVU0WIjT/iArIVwkJSTX+I1s0/iJVTRZQNQdCCqMhBBJENhoBNf8iNP+ICqVXAAlJNf4jWzT+IlVNFiI0/4gKkVcJCUk1/iNbNP4iVU0WUDUHQgpsgc3I+h4SRDYaATX/gAECNP9QQgAdNhoCFzUENhoDNhoBF0khBAxAB7BJJAxABvwkEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKVwAgNf8hBls1/iEHWzX9IRFbNfwhEls1+yETWzX6IRRbNfmBUFs1+IFYWzX3gWBbNfaBaFs19VdwIjX0gZIBWzXzgZoBWzXySTUFNfGABNWOHas08VCwNPEiVUmBAgxAA/VJIQQMQAKjSSQMQAEWJBJENPRXABFJNfBXAAg08FcICFA08FcQAVA09FcREVA17zTvVxERNe4iMQCICY5XAAlJNewjWzTsIlVNNe0iMQCICXlXCQlJNesjWzTrIlVNNeyACAAAAAAAAAuQNO0WNOwWUFCwNO0WNOwWUDUHNPUiEkEABiI160IAEDT2NPI09wk0+Qs09QoINesxACgxAIgJKSk07TT2IjEAiAkeVxIJSTXqI1s06iJVTQkLNOwIFlA16klXAAk06lBMVxIJUGYxACgxAIgI8yk06xZQNepXABI06lBmgASVg55OMQBQsDT/NP40/TT8NPs0+jT5NPg08jTrNPUyBjTvVwARNO5XAAg07lcICFA07lcQAVBQNPNCB5NINPFXAQg18DT0VwARSTXvVwAINO9XCAhQNO9XEAFQNPRXERFQNe407lcRETXtNO5XABE07VcACDTtVwgIUDTtVxABUFA17DTwFzXrIjEAiAhVVwAJSTXpI1s06SJVTTXqIjEAiAhAVwkJSTXoI1s06CJVTTXpgAgAAAAAAAAKRjTqFjTpFlBQsDTqFjTpFlA1BzTrNOoORDTsVwARSTXoIls15zTrNOcORDT1IhJBAAYiNeZCABA09jTyNPcJNPkLNPUKCDXmMQAoMQCIB9gpNOo09iIxAIgHzVcSCUk15SNbNOUiVU0JCzTpCBZQNeVJVwAJNOVQTFcSCVBmMQAoMQCIB6IpNOYWUDXlVwASNOVQZjEAKDEAiAeMKTTqNOsJFlA15VcJEjTlTFBmsSKyATTrshIkshAxALIUNP6yEbOABNFpcykxAFA06xZQsDT/NP40/TT8NPs0+jT5NPg08jTmNPU06wkyBjTnNOsJFjToVwgIUDToVxABUDTsVxERUDTzQgYMSDTxVwEINfA08Bc17zT0VwARSTXuIls07wgWNO5XCAhQNO5XEAFQNPRXERFQNe007zT+iAcRNO1XERE17CIxAIgG3VcACUk16iNbNOoiVU016yIxAIgGyFcJCUk16SNbNOkiVU016oAIAAAAAAAACQs06xY06hZQULA06xY06hZQNQc09SISQQAGIjXpQgAQNPY08jT3CTT5CzT1Cgg16TEAKDEAiAZ4KTTrNPYiMQCIBm1XEglJNegjWzToIlVNCQs06ggWUDXoSVcACTToUExXEglQZjEAKDEAiAZCKTTpFlA16FcAEjToUGYxACgxAIgGLCk06zTvCBZQNehXCRI06ExQZoAEMY+lDjEAUDTvFlCwNP80/jT9NPw0+zT6NPk0+DTyNOk09TTvCDIGNO1XABE07FcACDTsVwgIUDTsVxABUFA080IEwUkjDEAAzEg08VcBCDXwNPRXABFJNe9XAAg071cICFA071cQAVA09FcREVA17jTuVxERNe008BdJNew0+A1EgAgAAAAAAAAH5CIxAIgFh1cACUk16yNbNOsiVU0WIjEAiAVzVwkJSTXrI1s06yJVTRZQULAiMQCIBVxXAAlJNesjWzTrIlVNFiIxAIgFSFcJCUk16yNbNOsiVU0WUDUHNP80/jT9NPw0+zT6NPk07DT3NPY09TIGNO5XABE07VcACDTtVwgIUDTtVxABUFA080ID70g09FcAEUk18FcACDTwVwgIUDTwVxABUDT0VxERUDXvNO9XERE17jTvVwARNO5XAAg07lcICFA07lcQAVBQNe0iMQCIBL1XCQlJNesjWzTrIlVNNew07VcREUk16yJbNeo07DTqDEQiMQCIBJZXAAlJNegjWzToIlVNNemACAAAAAAAAAaUNOkWNOwWUFCwNOkWNOwWUDUHNPUiEkEABiI16EIAEDT2NPI09wk0+Qs09QoINeg06TT2IjEAiAREVxIJSTXmI1s05iJVTQkLNOwINecxACgxAIgEKCk05xZQNeZJVwAJNOZQTFcSCVBmMQAoMQCIBAwpNOgWUDXmVwASNOZQZjTnNOoMQQBnsSKyATTnshIkshAxALIUNP2yEbMxACgxAIgD2is15klXAAk05lBMVxIJUGYnBDEAULA0/zT+NP00/DT7NPo0+TT4NPI06DT1MgY07VcAETTqNOcJFjTrVwgIUDTrVxABUFA080ICezEAKDEAiAOHKzXmSVcACTTmUExXEglQZicEMQBQsDT/NP40/TT8NPs0+jT5NPg08jToNPUyBjTtNPNCAj5IIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBls1/iEHWzX9V2AiNfyABKdlxLSwsSKyATQDgYIBW7III7IQNP+yB7OxIrIBNPxXEREiW7ISJLIQNP+yFDT9shGzsSKyATT8VwARIluyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAkxJIwxAAIcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQdbNf4hE1s1/VdQIjX8gASai5F0sDT8VxERNfs0/TT+iAKCNP8xABJENP80AyEGWzT+NAMhEVs0AyESWzT9NAMhFFsiIiIiMgY0/FcAETT7Ils0/QgWNPtXCAhQNPtXEAFQUCJCAQNIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSiJbNf8hBVs1/oEQWzX9gRhbNfwhBls1+yEHWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsCEIiAHOgRGvSTX5SVA1+DT/NP4TRDT4VwARNfchBa8091cICFA091cQAVA0+FcREVA19iEIiAGbsSKyASKyEiSyEDIKshQ0/7IRszT2VxERNfU09lcAESEFrzT1VwgIUDT1VxABUFA19CEIiAFlsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPRQKEsBVwByZ0gjNQEyBjUCQgDXNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT5NPYMQQBONPI08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUDT5FlAoSwFXAH9nKUsBV38jZ0glNQEyBjUCQgBlgARcBkX5sDTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/C2dIIQQ1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v1576",
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
    "name": "_reach_oe_v1684",
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
    "name": "_reach_oe_v2020",
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
    "name": "_reach_oe_v2315",
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
    "name": "_reach_oe_v2630",
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
    "name": "_reach_oe_v2960",
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
                "name": "v1576",
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
        "name": "v6272",
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
  Bytecode: `0x6080604052604051620048ac380380620048ac83398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b61415380620007596000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063a2e6204511610061578063a2e620451461025e578063a694fc3a14610266578063ab53f2c614610279578063bb806dc91461029c578063cadc2e7a146102fc57005b806373b4522c146101df578063817d57f3146101f25780638323075714610212578063a05f99061461022757005b80633bc5b7bf116100c85780633bc5b7bf146101845780633beb26c4146101b15780634e71d92d146101c457806373394993146101cc57005b80630ff1680e146100ff5780631e93b0f11461013f5780632c10a1591461015e5780632e17de781461017157005b366100fd57005b005b34801561010b57600080fd5b5061011f61011a3660046137ca565b61031c565b604080518251815260209283015192810192909252015b60405180910390f35b34801561014b57600080fd5b506003545b604051908152602001610136565b6100fd61016c3660046137e7565b6105f3565b61011f61017f3660046137ff565b610617565b34801561019057600080fd5b506101a461019f3660046137ca565b610681565b604051610136919061382e565b61011f6101bf3660046137ff565b6106ad565b61011f610716565b6100fd6101da366004613865565b610772565b6100fd6101ed3660046137e7565b610792565b3480156101fe57600080fd5b506101a461020d3660046137ca565b6107b2565b34801561021e57600080fd5b50600154610150565b34801561023357600080fd5b5061023c6107d8565b6040805182518152602080840151908201529181015190820152606001610136565b61011f610abc565b61011f6102743660046137ff565b610b1b565b34801561028557600080fd5b5061028e610b85565b6040516101369291906138a3565b3480156102a857600080fd5b506102b1610c22565b604051610136919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b34801561030857600080fd5b506101a46103173660046137ca565b610ea8565b6040805180820190915260008082526020820152600160005414156103eb5760006002805461034a906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610376906138dd565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db9190613aa4565b90506103e960006009610ece565b505b6003600054141561053757600060028054610405906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610431906138dd565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050508060200190518101906104969190613b4e565b90506104b8604080516060810182526000602082018181529282015290815290565b60016104c385610ef4565b5160018111156104d5576104d5613818565b146104e15760006104ef565b6104ea84610ef4565b604001515b81515260016104fd85610fc6565b51600181111561050f5761050f613818565b1461051b576000610529565b61052484610fc6565b604001515b815160200152519392505050565b600560005414156105e257600060028054610551906138dd565b80601f016020809104026020016040519081016040528092919081815260200182805461057d906138dd565b80156105ca5780601f1061059f576101008083540402835291602001916105ca565b820191906000526020600020905b8154815290600101906020018083116105ad57829003601f168201915b50505050508060200190518101906104969190613bfb565b6105ee60006009610ece565b919050565b6105fb613048565b61061361060d36849003840184613ccb565b82611053565b5050565b6040805180820190915260008082526020820152610633613048565b61063b6130ee565b610643613108565b6040805160208082018352878252608084019190915260038352815180820190925282825283015261067582846112da565b50506060015192915050565b60408051606081018252600080825260208201819052918101919091526106a782610ef4565b92915050565b60408051808201909152600080825260208201526106c9613048565b6106d16130ee565b6106d9613108565b60408051602080820183528782528383019190915260018352815180820190925282825283015261070a82846112da565b50506020015192915050565b6040805180820190915260008082526020820152610732613048565b61073a6130ee565b610742613108565b60006020828101829052908252604080518083019091528281529083015261076a82846112da565b505051919050565b61077a613048565b61061361078c36849003840184613d45565b826112da565b61079a613048565b6106136107ac36849003840184613ccb565b826129aa565b60408051606081018252600080825260208201819052918101919091526106a782612b5b565b6107fc60405180606001604052806000815260200160008152602001600081525090565b600160005414156108b757600060028054610816906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610842906138dd565b801561088f5780601f106108645761010080835404028352916020019161088f565b820191906000526020600020905b81548152906001019060200180831161087257829003601f168201915b50505050508060200190518101906108a79190613aa4565b90506108b560006007610ece565b505b600360005414156109b1576000600280546108d1906138dd565b80601f01602080910402602001604051908101604052809291908181526020018280546108fd906138dd565b801561094a5780601f1061091f5761010080835404028352916020019161094a565b820191906000526020600020905b81548152906001019060200180831161092d57829003601f168201915b50505050508060200190518101906109629190613b4e565b905061098b60408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60056000541415610aad576000600280546109cb906138dd565b80601f01602080910402602001604051908101604052809291908181526020018280546109f7906138dd565b8015610a445780601f10610a1957610100808354040283529160200191610a44565b820191906000526020600020905b815481529060010190602001808311610a2757829003601f168201915b5050505050806020019051810190610a5c9190613bfb565b9050610a8560408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610ab960006007610ece565b90565b6040805180820190915260008082526020820152610ad8613048565b610ae06130ee565b610ae8613108565b600060a08201526004815260408051602080820190925282815290830152610b1082846112da565b505060800151919050565b6040805180820190915260008082526020820152610b37613048565b610b3f6130ee565b610b47613108565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610b7982846112da565b50506040015192915050565b600060606000546002808054610b9a906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc6906138dd565b8015610c135780601f10610be857610100808354040283529160200191610c13565b820191906000526020600020905b815481529060010190602001808311610bf657829003601f168201915b50505050509050915091509091565b610c2a613159565b60016000541415610ce557600060028054610c44906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c70906138dd565b8015610cbd5780601f10610c9257610100808354040283529160200191610cbd565b820191906000526020600020905b815481529060010190602001808311610ca057829003601f168201915b5050505050806020019051810190610cd59190613aa4565b9050610ce360006008610ece565b505b60036000541415610df157600060028054610cff906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b906138dd565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b5050505050806020019051810190610d909190613b4e565b9050610d9a61319a565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60056000541415610e9c57600060028054610e0b906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e37906138dd565b8015610e845780601f10610e5957610100808354040283529160200191610e84565b820191906000526020600020905b815481529060010190602001808311610e6757829003601f168201915b5050505050806020019051810190610d909190613bfb565b610ab960006008610ece565b60408051606081018252600080825260208201819052918101919091526106a782610fc6565b816106135760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610f4057610f40613818565b1415610fb7576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610f8157610f81613818565b6001811115610f9257610f92613818565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561101257611012613818565b1415610fb7576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f8157610f81613818565b611063600160005414600f610ece565b815161107e90158061107757508251600154145b6010610ece565b600080805560028054611090906138dd565b80601f01602080910402602001604051908101604052809291908181526020018280546110bc906138dd565b80156111095780601f106110de57610100808354040283529160200191611109565b820191906000526020600020905b8154815290600101906020018083116110ec57829003601f168201915b50505050508060200190518101906111219190613aa4565b905061114a60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111953415600c610ece565b60a082015160e083015160200151516111ae9190613e35565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516111f7916111f091339190612be8565b600d610ece565b815161120f906001600160a01b03163314600e610ece565b6112176131ad565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015282850180516000908190528151909401849052805190940183905283519091019190915290514391015260e083015182516112b49190600190612c00565b60208201805160a0019190915251600060c0909101526112d381612c74565b5050505050565b6112ea6005600054146027610ece565b81516113059015806112fe57508251600154145b6028610ece565b600080805560028054611317906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054611343906138dd565b80156113905780601f1061136557610100808354040283529160200191611390565b820191906000526020600020905b81548152906001019060200180831161137357829003601f168201915b50505050508060200190518101906113a89190613bfb565b90506113b26131fb565b7fa9e586c84135dd0eb80dcde96cd5b610fdecd3cab68ce1fd88af69e25afae205846040516113e19190613e4d565b60405180910390a1600060208501515151600481111561140357611403613818565b14156119a75761141534156014610ece565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516114519190600090612c00565b816020018190525061147361146c3384602001516000612be8565b6015610ece565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516114ba9190600190612c00565b81606001819052506114dc6114d53384604001516000612be8565b6016610ece565b60016114e733610fc6565b5160018111156114f9576114f9613818565b14611505576000611513565b61150e33610fc6565b604001515b608082018190526060820151602001515161153091106017610ece565b600161153b33610ef4565b51600181111561154d5761154d613818565b14611559576000611567565b61156233610ef4565b604001515b60a0820181905260c082018051919091526080820151815160200152516040517f42c9a0cb8c4a1a8d82521eba7f3fa1d2cca0270ac7f8bbdb03a4899e2d4f3d22916115c491815181526020918201519181019190915260400190565b60405180910390a160c081015183526101408201516115e957600060e0820152611634565b8161014001518260c00151836101000151846101a0015161160a9190613eb6565b6116149190613ecd565b61161e9190613eec565b82610120015161162e9190613e35565b60e08201525b6080810151600161164433612b5b565b51600181111561165657611656613818565b14611662576000611670565b61166b33612b5b565b604001515b8361012001516116809190613eb6565b8260a0015161168f9190613ecd565b6116999190613e35565b61010082019081523360009081526005602090815260408083208054600160ff1991821681178355865192810192909255600684529190932080549091168317815560e085015192019190915560608301510151519051101561189157610100810151606082015160200151516117109190613eb6565b610120820180519190915260608201805160209081015181015183518201529051015160409081015191519115159181019190915282015161010082015161175a91903390612e49565b336000818152600560209081526040808320805460ff191660019081178255019290925590519182527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e910160405180910390a16117b66131ad565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e0808801518487018051919091526101a089015181519095019490945286015183519094019390935261014086015182518201529051439201919091528201516101208301516118699190600190612c00565b60208201805160a00191909152610180840151905160c0015261188b81612c74565b506129a4565b336000818152600560209081526040808320805460ff191660019081178255019290925590519182527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e910160405180910390a16118ed6131ad565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e0808a01518689018051919091526101a08b015181519097019690965288015185519096019590955261014088015184518401528351439201919091529085015182519091015261018085015190519091015261188b81612c74565b60016020850151515160048111156119c1576119c1613818565b1415611c4757602084015151604001516101408201526119e334156018610ece565b610160828101805151519183018051929092528051516020908101518351909101528051516040908101518351901515910152519051611a269190600090612c00565b816101800181905250611a49611a423384602001516000612be8565b6019610ece565b61018081018051602090810151516101a084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611aa090611a999033906000612be8565b601a610ece565b611aba8260e001518261014001516000015111601b610ece565b6001611ac533610ef4565b516001811115611ad757611ad7613818565b14611ae3576000611af1565b611aec33610ef4565b604001515b6101c0820151526001611b0333610fc6565b516001811115611b1557611b15613818565b14611b21576000611b2f565b611b2a33610fc6565b604001515b6101c08201805160209081019290925251604080518251815291830151928201929092527f31d5f669f2426fb6b8f9426ee80b309a72e73bae6baf3ae0461f5e8e20674605910160405180910390a16101c08101516020840152611b916131ad565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015261014080870151518487018051919091526101008901518151909501949094526101208801518451909501949094529286015182519091015251439101526101808201516101a08301516118699190600190612c00565b6002602085015151516004811115611c6157611c61613818565b14156120be57602084015151606001516101e0820152611c833415601c610ece565b6101e0810151516101608301515151611c9c9190613e35565b610200820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611cdc9190600090612c00565b61022082015260208201516101e082015151611d0591611cfe91339190612be8565b601d610ece565b610220810180516020908101515161024084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611d5c90611d559033906000612be8565b601e610ece565b6001611d6733610ef4565b516001811115611d7957611d79613818565b14611d85576000611d93565b611d8e33610ef4565b604001515b6102608201526001611da433610fc6565b516001811115611db657611db6613818565b14611dc2576000611dd0565b611dcb33610fc6565b604001515b61028082019081526102608201516102a083018051919091529051815160200152516040517f0229bffac1134b01f6153068bacae7f788459e310d22d3950b611642dbcc0d8391611e3291815181526020918201519181019190915260400190565b60405180910390a16102a08101516040840152610140820151611e5c5760006102c0820152611ea8565b8161014001518260c00151836101000151846101a00151611e7d9190613eb6565b611e879190613ecd565b611e919190613eec565b826101200151611ea19190613e35565b6102c08201525b336000818152600560205260409020805460ff1916600190811790915561028083015191611ed590612b5b565b516001811115611ee757611ee7613818565b14611ef3576000611f01565b611efc33612b5b565b604001515b836101200151611f119190613eb6565b826102600151611f219190613ecd565b611f2b9190613e35565b33600090815260056020908152604080832060019081019490945560068252808320805460ff19908116861782556102c0870151918601919091556004909252909120805490911690911790556101e081015151610260820151611f8f9190613e35565b33600081815260046020908152604091829020600101939093556101e0840151518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a1611fef6131ad565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526102c08401519051909101526101e0820151516101408401516120909190613e35565b6020820180516060019190915251436080909101526102208201516102408301516118699190600190612c00565b60036020850151515160048111156120d8576120d8613818565b14156125c557602084015151608001516102e08201526120fa3415601f610ece565b610160820180515151610300830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161213f9190600090612c00565b81610320018190525061216261215b3384602001516000612be8565b6020610ece565b61032081018051602090810151516103408401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516121ad9190600190612c00565b8161036001819052506121d06121c93384604001516000612be8565b6021610ece565b60016121db33610ef4565b5160018111156121ed576121ed613818565b146121f9576000612207565b61220233610ef4565b604001515b610380820152600161221833610fc6565b51600181111561222a5761222a613818565b14612236576000612244565b61223f33610fc6565b604001515b6103a082019081526103808201516103c083018051919091529051815160200152516040517f0d1e094259a041da20f04bf5bcb9937130c7a7bdf86ab03c2561f9d01e08a3b0916122a691815181526020918201519181019190915260400190565b60405180910390a16103c081015160608401526103808101516102e0820151516122d39110156022610ece565b61036081015151516102e0820151516122ef9110156023610ece565b6101408201516123065760006103e0820152612352565b8161014001518260c00151836101000151846101a001516123279190613eb6565b6123319190613ecd565b61233b9190613eec565b82610120015161234b9190613e35565b6103e08201525b336000818152600560205260409020805460ff191660019081179091556103a08301519161237f90612b5b565b51600181111561239157612391613818565b1461239d5760006123ab565b6123a633612b5b565b604001515b8361012001516123bb9190613eb6565b8261038001516123cb9190613ecd565b6123d59190613e35565b33600090815260056020908152604080832060019081019490945560068252808320805460ff19908116861782556103e0870151918601919091556004909252909120805490911690911790556102e0810151516103808201516124399190613eb6565b336000908152600460205260409020600101556102e08101515161036082015151516124659190613eb6565b61040082018051919091526103608201805151602090810151835182015290515160409081015192519215159201919091528201516102e0820151516124ad91903390612e49565b6102e0810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a16124f66131ad565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526103e08401519051909101526102e0820151516101408401516125979190613eb6565b6020820180516060019190915251436080909101526103608201516104008301516118699190600090612c00565b60046020850151515160048111156125df576125df613818565b14156129a4576125f134156024610ece565b61016082018051515161042083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516126369190600090612c00565b8161044001819052506126596126523384602001516000612be8565b6025610ece565b6104408101805160209081015151610460840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516126b0906126a99033906000612be8565b6026610ece565b60016126bb33610ef4565b5160018111156126cd576126cd613818565b146126d95760006126e7565b6126e233610ef4565b604001515b61048082015260016126f833610fc6565b51600181111561270a5761270a613818565b14612716576000612724565b61271f33610fc6565b604001515b6104a082019081526104808201516104c083018051919091529051815160200152516040517f6bb01f2a6339d108faa0f13b77ba745556abb288fc2cd367d780ebac96df48829161278691815181526020918201519181019190915260400190565b60405180910390a16104c081015160808401526101408201516127b05760006104e08201526127fc565b8161014001518260c00151836101000151846101a001516127d19190613eb6565b6127db9190613ecd565b6127e59190613eec565b8261012001516127f59190613e35565b6104e08201525b336000818152600560205260409020805460ff191660019081179091556104a08301519161282990612b5b565b51600181111561283b5761283b613818565b14612847576000612855565b61285033612b5b565b604001515b8361012001516128659190613eb6565b8261048001516128759190613ecd565b61287f9190613e35565b3360008181526005602090815260408083206001908101959095556006825291829020805460ff1916851781556104e0860151940193909355519081527f1d2f67e3c99742b6b589e3af77fe96ec360dc58b8dca7d3d9a6ee9b64385a2e8910160405180910390a16128ef6131ad565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e08701518386018051919091526101a08801518151909401939093526104e086015183519094019390935261014086015182519091015251439101526104408201516104608301516118699190600190612c00565b50505050565b6129ba6003600054146012610ece565b81516129d59015806129ce57508251600154145b6013610ece565b6000808055600280546129e7906138dd565b80601f0160208091040260200160405190810160405280929190818152602001828054612a13906138dd565b8015612a605780601f10612a3557610100808354040283529160200191612a60565b820191906000526020600020905b815481529060010190602001808311612a4357829003601f168201915b5050505050806020019051810190612a789190613b4e565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1612ac634156011610ece565b80516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612b04573d6000803e3d6000fd5b5060408101518151610120830151612b2692919060015b602002015151612e49565b60208101518151610120830151612b409291906000612b1b565b60008080556001819055612b5690600290613550565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612ba757612ba7613818565b1415610fb7576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610f8157610f81613818565b6000612bf683853085612e5d565b90505b9392505050565b612c0861358a565b60005b6002811015612c5457848160028110612c2657612c26613e09565b6020020151828260028110612c3d57612c3d613e09565b602002015280612c4c81613f0e565b915050612c0b565b5081818460028110612c6857612c68613e09565b60200201529392505050565b8051608001516020820151511015612d7157612c8e6135d5565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152855160c0908101518187015283870180515160e0880152805185015161010088015280518601516101208801528051909301516101408701528251909101516101608601528151015161018085015251516101a08401526005600055436001559051612d4d91839101613f67565b60405160208183030381529060405260029080519060200190612b56929190613665565b6040517fde386e12d6c97acd73514c71490d6d5114424ddc93ef1080bd05ffe08c20868d90600090a1612da26136e9565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152828601805184015160c080880191909152815186015160e08801528151909301516101008701528051909101516101208601525101516101408401526003600055436001559051612d4d91839101614037565b50565b612e54838383612f37565b612b5657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612ec4916140e4565b60006040518083038185875af1925050503d8060008114612f01576040519150601f19603f3d011682016040523d82523d6000602084013e612f06565b606091505b5091509150612f1782826001613008565b5080806020019051810190612f2c9190614100565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612f96916140e4565b60006040518083038185875af1925050503d8060008114612fd3576040519150601f19603f3d011682016040523d82523d6000602084013e612fd8565b606091505b5091509150612fe982826002613008565b5080806020019051810190612ffe9190614100565b9695505050505050565b60608315613017575081612bf9565b8251156130275782518084602001fd5b60405163100960cb60e01b815260048101839052602401610eeb565b905290565b6040805160e08101909152600060a0820181815260c083019190915281908152602001613088604051806040016040528060008152602001600081525090565b81526020016130aa604051806040016040528060008152602001600081525090565b81526020016130cc604051806040016040528060008152602001600081525090565b8152602001613043604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001613043613757565b6040805160c081018252600080825260208083018290528351808201855282815283850152835180820185528281526060840152835190810190935282529060808201908152600060209091015290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280613043613159565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082018390526101008201929092529081526020810161304361376a565b60408051610560810190915260006105008201818152610520830182905261054083019190915281526020810161323061358a565b8152604080516060810182526000808252602082810182905292820152910190815260200161325d61358a565b8152602001600081526020016000815260200161328d604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016132c6604051806060016040528060008152602001600081526020016000151581525090565b81526020016132e16040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161330e61358a565b81526040805160608101825260008082526020828101829052928201529101908152602001613350604051806040016040528060008152602001600081525090565b815260200161336b6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161339861358a565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016133e8604051806040016040528060008152602001600081525090565b81526020016000815260200161340a6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161343761358a565b8152604080516060810182526000808252602082810182905292820152910190815260200161346461358a565b81526020016000815260200160008152602001613494604051806040016040528060008152602001600081525090565b8152602001600081526020016134c6604051806060016040528060008152602001600081526020016000151581525090565b815260408051606081018252600080825260208281018290529282015291019081526020016134f361358a565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001613543604051806040016040528060008152602001600081525090565b8152602001600081525090565b50805461355c906138dd565b6000825580601f1061356c575050565b601f016020900490600052602060002090810190612e4691906137a0565b60405180604001604052806002905b6135bf604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816135995790505090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161365161358a565b815260200160008152602001600081525090565b828054613671906138dd565b90600052602060002090601f01602090048101928261369357600085556136d9565b82601f106136ac57805160ff19168380011785556136d9565b828001600101855582156136d9579182015b828111156136d95782518255916020019190600101906136be565b506136e59291506137a0565b5090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161354361358a565b6040518060200160405280613043613108565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200161354361358a565b5b808211156136e557600081556001016137a1565b6001600160a01b0381168114612e4657600080fd5b6000602082840312156137dc57600080fd5b8135612bf9816137b5565b6000604082840312156137f957600080fd5b50919050565b60006020828403121561381157600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061384557613845613818565b808352506020830151151560208301526040830151604083015292915050565b600060e082840312156137f957600080fd5b60005b8381101561389257818101518382015260200161387a565b838111156129a45750506000910152565b82815260406020820152600082518060408401526138c8816060850160208701613877565b601f01601f1916919091016060019392505050565b600181811c908216806138f157607f821691505b602082108114156137f957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561394b5761394b613912565b60405290565b6040516060810167ffffffffffffffff8111828210171561394b5761394b613912565b604051610160810167ffffffffffffffff8111828210171561394b5761394b613912565b6040516101c0810167ffffffffffffffff8111828210171561394b5761394b613912565b6040516020810167ffffffffffffffff8111828210171561394b5761394b613912565b60405160c0810167ffffffffffffffff8111828210171561394b5761394b613912565b80516105ee816137b5565b8015158114612e4657600080fd5b600082601f830112613a2c57600080fd5b613a34613928565b8060c0840185811115613a4657600080fd5b845b81811015613a995760608188031215613a615760008081fd5b613a69613951565b8151815260208083015181830152604080840151613a8681613a0d565b9083015290855290930192606001613a48565b509095945050505050565b60006101a08284031215613ab757600080fd5b604051610100810181811067ffffffffffffffff82111715613adb57613adb613912565b6040528251613ae9816137b5565b8152613af760208401613a02565b6020820152613b0860408401613a02565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613b428460e08501613a1b565b60e08201529392505050565b60006102008284031215613b6157600080fd5b613b69613974565b613b7283613a02565b8152613b8060208401613a02565b6020820152613b9160408401613a02565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613be385828601613a1b565b908201526101e0929092015161014083015250919050565b60006102608284031215613c0e57600080fd5b613c16613998565b613c1f83613a02565b8152613c2d60208401613a02565b6020820152613c3e60408401613a02565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160613ca885828601613a1b565b90820152610220830151610180820152610240909201516101a083015250919050565b600060408284031215613cdd57600080fd5b613ce5613928565b823581526020830135613cf781613a0d565b60208201529392505050565b600060208284031215613d1557600080fd5b6040516020810181811067ffffffffffffffff82111715613d3857613d38613912565b6040529135825250919050565b600081830360e0811215613d5857600080fd5b613d60613928565b8335815260c0601f1983011215613d7657600080fd5b613d7e6139bc565b9150613d886139df565b602085013560058110613d9a57600080fd5b81526040850135613daa81613a0d565b6020820152613dbc8660608701613d03565b6040820152613dce8660808701613d03565b6060820152613de08660a08701613d03565b608082015260c0850135613df381613a0d565b60a0820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115613e4857613e48613e1f565b500190565b81518152602082015151805160e08301919060058110613e6f57613e6f613818565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a084015260a0810151151560c08401525092915050565b600082821015613ec857613ec8613e1f565b500390565b6000816000190483118215151615613ee757613ee7613e1f565b500290565b600082613f0957634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415613f2257613f22613e1f565b5060010190565b8060005b60028110156129a4578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613f2d565b81516001600160a01b0316815261026081016020830151613f9360208401826001600160a01b03169052565b506040830151613fae60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161401882850182613f29565b50506101808301516102208301526101a0909201516102409091015290565b81516001600160a01b031681526102008101602083015161406360208401826001600160a01b03169052565b50604083015161407e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516140d082850182613f29565b50506101408301516101e083015292915050565b600082516140f6818460208701613877565b9190910192915050565b60006020828403121561411257600080fd5b8151612bf981613a0d56fea26469706673582212205355e5c1e9b2053d11bc6cbaa365d5e04335b7d9c4ce93edfeaf6319156b6c9c64736f6c634300080c0033`,
  BytecodeLen: 18604,
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
    at: './index.rsh:355:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:359:11:after expr stmt semicolon',
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

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
    noRewardsLeft: [],
    staked: [ctc0, ctc1],
    unstaked: [ctc0, ctc1],
    updated: [ctc0],
    withdrawn: [ctc0]
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
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1511] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async () => {
              
              const v3408 = {
                lastUpdateTime: v1531,
                rewardPerTokenStored: v1532,
                totalStaked: v1533
                };
              
              return v3408;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async () => {
              
              const v3408 = {
                lastUpdateTime: v1531,
                rewardPerTokenStored: v1532,
                totalStaked: v1533
                };
              
              return v3408;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1531, v1532, v1533, v3416, v3417, v3418, v3419] = svs;
            return (await ((async () => {
              
              const v3408 = {
                lastUpdateTime: v1531,
                rewardPerTokenStored: v1532,
                totalStaked: v1533
                };
              
              return v3408;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = svs;
            return (await ((async () => {
              
              const v1544 = {
                lastUpdateTime: v1531,
                rewardPerTokenStored: v1532,
                totalStaked: v1533
                };
              
              return v1544;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1511] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async () => {
              
              const v3407 = {
                beginBlock: v1491,
                endBlock: v1492,
                rewardToken: v1490,
                stakeToken: v1489,
                totalRewardAmount: v1493
                };
              
              return v3407;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async () => {
              
              const v3407 = {
                beginBlock: v1491,
                endBlock: v1492,
                rewardToken: v1490,
                stakeToken: v1489,
                totalRewardAmount: v1493
                };
              
              return v3407;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1531, v1532, v1533, v3416, v3417, v3418, v3419] = svs;
            return (await ((async () => {
              
              const v3407 = {
                beginBlock: v1491,
                endBlock: v1492,
                rewardToken: v1490,
                stakeToken: v1489,
                totalRewardAmount: v1493
                };
              
              return v3407;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = svs;
            return (await ((async () => {
              
              const v1543 = {
                beginBlock: v1491,
                endBlock: v1492,
                rewardToken: v1490,
                stakeToken: v1489,
                totalRewardAmount: v1493
                };
              
              return v1543;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1511] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async (_v3409 ) => {
                const v3409 = stdlib.protect(ctc0, _v3409, null);
              
              const v3410 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3409), null);
              const v3411 = stdlib.fromSome(v3410, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
              const v3412 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3409), null);
              const v3413 = stdlib.fromSome(v3412, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
              const v3414 = {
                reward: v3413,
                staked: v3411
                };
              
              return v3414;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533] = svs;
            return (await ((async (_v3409 ) => {
                const v3409 = stdlib.protect(ctc0, _v3409, null);
              
              const v3410 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3409), null);
              const v3411 = stdlib.fromSome(v3410, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
              const v3412 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3409), null);
              const v3413 = stdlib.fromSome(v3412, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
              const v3414 = {
                reward: v3413,
                staked: v3411
                };
              
              return v3414;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1531, v1532, v1533, v3416, v3417, v3418, v3419] = svs;
            return (await ((async (_v3409 ) => {
                const v3409 = stdlib.protect(ctc0, _v3409, null);
              
              const v3410 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3409), null);
              const v3411 = stdlib.fromSome(v3410, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
              const v3412 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v3409), null);
              const v3413 = stdlib.fromSome(v3412, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
              const v3414 = {
                reward: v3413,
                staked: v3411
                };
              
              return v3414;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
            const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = svs;
            return (await ((async (_v1545 ) => {
                const v1545 = stdlib.protect(ctc0, _v1545, null);
              
              const v1546 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1545), null);
              const v1547 = stdlib.fromSome(v1546, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
              const v1548 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1545), null);
              const v1549 = stdlib.fromSome(v1548, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
              const v1550 = {
                reward: v1549,
                staked: v1547
                };
              
              return v1550;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      7: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      8: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      9: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5]
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
    claim0_109: ctc5,
    setTime0_109: ctc6,
    stake0_109: ctc6,
    unstake0_109: ctc6,
    update0_109: ctc5
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
  
  
  const v1471 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1472 = [v1471, v1471];
  const v1478 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:128:38:application',
    fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1479 = v1478.stakeToken;
  const v1480 = v1478.rewardToken;
  const v1481 = v1478.beginBlock;
  const v1482 = v1478.endBlock;
  const v1483 = v1478.totalRewardAmount;
  const v1484 = stdlib.tokenEq(v1479, v1480);
  const v1485 = v1484 ? false : true;
  stdlib.assert(v1485, {
    at: './index.rsh:130:11:application',
    fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1486 = stdlib.sub(v1482, v1481);
  const v1487 = stdlib.div(v1483, v1486);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1479, v1480, v1481, v1482, v1483, v1487],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:144:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1489, v1490, v1491, v1492, v1493, v1494], secs: v1496, time: v1495, didSend: v45, from: v1488 } = txn1;
      
      const v1497 = stdlib.tokenEq(v1489, v1490);
      const v1498 = v1497 ? false : true;
      ;
      const v1499 = v1472[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0)];
      const v1501 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
      const v1502 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
      const v1503 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1501, v1502];
      const v1504 = stdlib.Array_set(v1472, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0), v1503);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1489
        });
      const v1506 = v1504[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
      const v1508 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
      const v1509 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
      const v1510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1508, v1509];
      const v1511 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1), v1510);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1490
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
  const {data: [v1489, v1490, v1491, v1492, v1493, v1494], secs: v1496, time: v1495, didSend: v45, from: v1488 } = txn1;
  const v1497 = stdlib.tokenEq(v1489, v1490);
  const v1498 = v1497 ? false : true;
  stdlib.assert(v1498, {
    at: './index.rsh:144:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1499 = v1472[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0)];
  const v1501 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1502 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
  const v1503 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1501, v1502];
  const v1504 = stdlib.Array_set(v1472, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0), v1503);
  ;
  const v1506 = v1504[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1508 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1509 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
  const v1510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1508, v1509];
  const v1511 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1), v1510);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1511],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1495,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 0), [[v1493, v1490]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1515, time: v1514, didSend: v52, from: v1513 } = txn2;
      
      ;
      const v1516 = v1511[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
      const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 0)];
      const v1518 = stdlib.add(v1517, v1493);
      const v1521 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
      const v1522 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 2)];
      const v1523 = [v1518, v1521, v1522];
      const v1524 = stdlib.Array_set(v1511, stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1), v1523);
      sim_r.txns.push({
        amt: v1493,
        kind: 'to',
        tok: v1490
        });
      const v1525 = stdlib.addressEq(v1488, v1513);
      ;
      
      const v1530 = stdlib.checkedBigNumberify('./index.rsh:248:5:decimal', stdlib.UInt_max, 0);
      const v1531 = stdlib.checkedBigNumberify('./index.rsh:246:5:decimal', stdlib.UInt_max, 0);
      const v1532 = stdlib.checkedBigNumberify('./index.rsh:247:5:decimal', stdlib.UInt_max, 0);
      const v1533 = stdlib.checkedBigNumberify('./index.rsh:245:5:decimal', stdlib.UInt_max, 0);
      const v1534 = v1514;
      const v1540 = v1524;
      
      if (await (async () => {
        const v1542 = stdlib.gt(v1492, v1530);
        
        return v1542;})()) {
        sim_r.isHalt = false;
        }
      else {
        null;
        const v3416 = v1530;
        const v3417 = v1531;
        const v3418 = v1532;
        const v3419 = v1533;
        const v3420 = v1534;
        
        if (await (async () => {
          
          return true;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1515, time: v1514, didSend: v52, from: v1513 } = txn2;
  ;
  const v1516 = v1511[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
  const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 0)];
  const v1518 = stdlib.add(v1517, v1493);
  const v1521 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
  const v1522 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 2)];
  const v1523 = [v1518, v1521, v1522];
  const v1524 = stdlib.Array_set(v1511, stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1), v1523);
  ;
  const v1525 = stdlib.addressEq(v1488, v1513);
  stdlib.assert(v1525, {
    at: './index.rsh:147:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:224:22:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v1530 = stdlib.checkedBigNumberify('./index.rsh:248:5:decimal', stdlib.UInt_max, 0);
  let v1531 = stdlib.checkedBigNumberify('./index.rsh:246:5:decimal', stdlib.UInt_max, 0);
  let v1532 = stdlib.checkedBigNumberify('./index.rsh:247:5:decimal', stdlib.UInt_max, 0);
  let v1533 = stdlib.checkedBigNumberify('./index.rsh:245:5:decimal', stdlib.UInt_max, 0);
  let v1534 = v1514;
  let v1540 = v1524;
  
  while (await (async () => {
    const v1542 = stdlib.gt(v1492, v1530);
    
    return v1542;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn3;
    switch (v1714[0]) {
      case 'claim0_109': {
        const v1717 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v1787 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1792 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1793 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v1794 = [v1788, v1792, v1793];
        const v1795 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v1794);
        ;
        const v1796 = v1795[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1797 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1801 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1802 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v1803 = [v1797, v1801, v1802];
        const v1804 = stdlib.Array_set(v1795, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v1803);
        ;
        let v1806;
        const v1807 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v1807) {
          v1806 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1808 = stdlib.sub(v1530, v1531);
          const v1809 = stdlib.mul(v1808, v1494);
          const v1810 = stdlib.div(v1809, v1533);
          const v1811 = stdlib.add(v1532, v1810);
          v1806 = v1811;
          }
        const v1814 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v1815 = stdlib.fromSome(v1814, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v1816 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v1817 = stdlib.fromSome(v1816, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v1818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v1819 = stdlib.fromSome(v1818, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v1826 = stdlib.sub(v1806, v1819);
        const v1827 = stdlib.mul(v1817, v1826);
        const v1830 = stdlib.add(v1827, v1815);
        await stdlib.mapSet(map1, v1713, v1830);
        await stdlib.mapSet(map2, v1713, v1806);
        await stdlib.mapSet(map1, v1713, stdlib.checkedBigNumberify('./index.rsh:307:25:decimal', stdlib.UInt_max, 0));
        const v1844 = v1804[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
        const v1845 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 0)];
        const v1852 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
        const v1853 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 2)];
        const v1854 = [v1845, v1852, v1853];
        const v1855 = stdlib.Array_set(v1804, stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1), v1854);
        const v1860 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
          staked: v1817
          };
        await txn3.getOutput('claim', 'v1860', ctc8, v1860);
        null;
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v1806;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v1855;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'setTime0_109': {
        const v2055 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2125 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2126 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2130 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2131 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2132 = [v2126, v2130, v2131];
        const v2133 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2132);
        ;
        const v2134 = v2133[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2135 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2139 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2140 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2141 = [v2135, v2139, v2140];
        const v2142 = stdlib.Array_set(v2133, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2141);
        ;
        const v2207 = v2055[stdlib.checkedBigNumberify('./index.rsh:325:9:spread', stdlib.UInt_max, 0)];
        const v2208 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2209 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2210 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2211 = stdlib.fromSome(v2210, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2212 = {
          reward: v2211,
          staked: v2209
          };
        await txn3.getOutput('setTime', 'v2212', ctc8, v2212);
        const cv1530 = v2207;
        const cv1531 = v1531;
        const cv1532 = v1532;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v2142;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'stake0_109': {
        const v2393 = v1714[1];
        undefined /* setApiDetails */;
        const v2412 = v2393[stdlib.checkedBigNumberify('./index.rsh:268:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2463 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2464 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2465 = stdlib.add(v2464, v2412);
        const v2468 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2469 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2470 = [v2465, v2468, v2469];
        const v2471 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2470);
        ;
        const v2472 = v2471[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2473 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2477 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2478 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2479 = [v2473, v2477, v2478];
        const v2480 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2479);
        ;
        let v2560;
        const v2561 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v2561) {
          v2560 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2562 = stdlib.sub(v1530, v1531);
          const v2563 = stdlib.mul(v2562, v1494);
          const v2564 = stdlib.div(v2563, v1533);
          const v2565 = stdlib.add(v1532, v2564);
          v2560 = v2565;
          }
        const v2568 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2569 = stdlib.fromSome(v2568, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2571 = stdlib.fromSome(v2570, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2572 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v2573 = stdlib.fromSome(v2572, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v2580 = stdlib.sub(v2560, v2573);
        const v2581 = stdlib.mul(v2571, v2580);
        const v2584 = stdlib.add(v2581, v2569);
        await stdlib.mapSet(map1, v1713, v2584);
        await stdlib.mapSet(map2, v1713, v2560);
        const v2598 = stdlib.add(v2571, v2412);
        await stdlib.mapSet(map0, v1713, v2598);
        const v2603 = {
          reward: v2584,
          staked: v2598
          };
        await txn3.getOutput('stake', 'v2603', ctc8, v2603);
        null;
        const v2610 = stdlib.add(v1533, v2412);
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v2560;
        const cv1533 = v2610;
        const cv1534 = v1715;
        const cv1540 = v2480;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'unstake0_109': {
        const v2731 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2801 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2802 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2806 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2807 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2808 = [v2802, v2806, v2807];
        const v2809 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2808);
        ;
        const v2810 = v2809[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2811 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2815 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2816 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2817 = [v2811, v2815, v2816];
        const v2818 = stdlib.Array_set(v2809, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2817);
        ;
        const v2951 = v2731[stdlib.checkedBigNumberify('./index.rsh:281:9:spread', stdlib.UInt_max, 0)];
        const v2952 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2953 = stdlib.fromSome(v2952, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2954 = stdlib.le(v2951, v2953);
        stdlib.assert(v2954, {
          at: './index.rsh:290:14:application',
          fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2955 = v2818[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
        const v2956 = v2955[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
        const v2957 = stdlib.le(v2951, v2956);
        stdlib.assert(v2957, {
          at: './index.rsh:291:14:application',
          fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v2958;
        const v2959 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v2959) {
          v2958 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2960 = stdlib.sub(v1530, v1531);
          const v2961 = stdlib.mul(v2960, v1494);
          const v2962 = stdlib.div(v2961, v1533);
          const v2963 = stdlib.add(v1532, v2962);
          v2958 = v2963;
          }
        const v2966 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2967 = stdlib.fromSome(v2966, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2970 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v2971 = stdlib.fromSome(v2970, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v2978 = stdlib.sub(v2958, v2971);
        const v2979 = stdlib.mul(v2953, v2978);
        const v2982 = stdlib.add(v2979, v2967);
        await stdlib.mapSet(map1, v1713, v2982);
        await stdlib.mapSet(map2, v1713, v2958);
        const v2994 = stdlib.sub(v2953, v2951);
        await stdlib.mapSet(map0, v1713, v2994);
        const v3000 = stdlib.sub(v2956, v2951);
        const v3003 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 1)];
        const v3004 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 2)];
        const v3005 = [v3000, v3003, v3004];
        const v3006 = stdlib.Array_set(v2818, stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 0), v3005);
        ;
        const v3011 = {
          reward: v2982,
          staked: v2994
          };
        await txn3.getOutput('unstake', 'v3011', ctc8, v3011);
        null;
        const v3018 = stdlib.sub(v1533, v2951);
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v2958;
        const cv1533 = v3018;
        const cv1534 = v1715;
        const cv1540 = v3006;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'update0_109': {
        const v3069 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v3139 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3140 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3144 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3145 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v3146 = [v3140, v3144, v3145];
        const v3147 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v3146);
        ;
        const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3153 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3154 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v3155 = [v3149, v3153, v3154];
        const v3156 = stdlib.Array_set(v3147, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v3155);
        ;
        let v3359;
        const v3360 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v3360) {
          v3359 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3361 = stdlib.sub(v1530, v1531);
          const v3362 = stdlib.mul(v3361, v1494);
          const v3363 = stdlib.div(v3362, v1533);
          const v3364 = stdlib.add(v1532, v3363);
          v3359 = v3364;
          }
        const v3367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v3369 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v3370 = stdlib.fromSome(v3369, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v3371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v3372 = stdlib.fromSome(v3371, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v3379 = stdlib.sub(v3359, v3372);
        const v3380 = stdlib.mul(v3370, v3379);
        const v3383 = stdlib.add(v3380, v3368);
        await stdlib.mapSet(map1, v1713, v3383);
        await stdlib.mapSet(map2, v1713, v3359);
        const v3399 = {
          reward: v3383,
          staked: v3370
          };
        await txn3.getOutput('update', 'v3399', ctc8, v3399);
        null;
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v3359;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v3156;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      }
    
    }
  null;
  let v3416 = v1530;
  let v3417 = v1531;
  let v3418 = v1532;
  let v3419 = v1533;
  let v3420 = v1534;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3451], secs: v3453, time: v3452, didSend: v1153, from: v3450 } = txn3;
    undefined /* setApiDetails */;
    ;
    ;
    ;
    let v3472;
    const v3473 = stdlib.eq(v3419, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
    if (v3473) {
      v3472 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v3474 = stdlib.sub(v3416, v3417);
      const v3475 = stdlib.mul(v3474, v1494);
      const v3476 = stdlib.div(v3475, v3419);
      const v3477 = stdlib.add(v3418, v3476);
      v3472 = v3477;
      }
    const v3480 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3450), null);
    const v3481 = stdlib.fromSome(v3480, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
    const v3482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3450), null);
    const v3483 = stdlib.fromSome(v3482, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
    const v3484 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3450), null);
    const v3485 = stdlib.fromSome(v3484, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
    const v3492 = stdlib.sub(v3472, v3485);
    const v3493 = stdlib.mul(v3483, v3492);
    const v3496 = stdlib.add(v3493, v3481);
    await stdlib.mapSet(map1, v3450, v3496);
    await stdlib.mapSet(map2, v3450, v3472);
    await stdlib.mapSet(map1, v3450, stdlib.checkedBigNumberify('./index.rsh:355:25:decimal', stdlib.UInt_max, 0));
    const v3526 = {
      reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
      staked: v3483
      };
    await txn3.getOutput('withdraw', 'v3526', ctc8, v3526);
    null;
    const cv3416 = v3416;
    const cv3417 = v3416;
    const cv3418 = v3472;
    const cv3419 = v3419;
    const cv3420 = v3452;
    
    v3416 = cv3416;
    v3417 = cv3417;
    v3418 = cv3418;
    v3419 = cv3419;
    v3420 = cv3420;
    
    continue;
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533],
    evt_cnt: 0,
    funcNum: 4,
    lct: v3420,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:366:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3536, time: v3535, didSend: v1240, from: v3534 } = txn3;
      
      ;
      const v3537 = v3535;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1490
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1489
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
  const {data: [], secs: v3536, time: v3535, didSend: v1240, from: v3534 } = txn3;
  ;
  let v3537 = v3535;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533],
      evt_cnt: 0,
      funcNum: 6,
      lct: v3537,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:369:36:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v3547, time: v3546, didSend: v1247, from: v3545 } = txn4;
        
        ;
        const v3548 = stdlib.addressEq(v1488, v3545);
        ;
        const cv3537 = v3546;
        
        await (async () => {
          const v3537 = cv3537;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1490
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v1489
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
    const {data: [], secs: v3547, time: v3546, didSend: v1247, from: v3545 } = txn4;
    ;
    const v3548 = stdlib.addressEq(v1488, v3545);
    stdlib.assert(v3548, {
      at: './index.rsh:369:36:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv3537 = v3546;
    
    v3537 = cv3537;
    
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
    claim0_109: ctc4,
    setTime0_109: ctc5,
    stake0_109: ctc5,
    unstake0_109: ctc5,
    update0_109: ctc4
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
  
  
  const v1471 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1472 = [v1471, v1471];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1489, v1490, v1491, v1492, v1493, v1494], secs: v1496, time: v1495, didSend: v45, from: v1488 } = txn1;
  const v1497 = stdlib.tokenEq(v1489, v1490);
  const v1498 = v1497 ? false : true;
  stdlib.assert(v1498, {
    at: './index.rsh:144:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1499 = v1472[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0)];
  const v1501 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1502 = v1499[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
  const v1503 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1501, v1502];
  const v1504 = stdlib.Array_set(v1472, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 0), v1503);
  ;
  const v1506 = v1504[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1508 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1)];
  const v1509 = v1506[stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 2)];
  const v1510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1508, v1509];
  const v1511 = stdlib.Array_set(v1504, stdlib.checkedBigNumberify('./index.rsh:144:11:dot', stdlib.UInt_max, 1), v1510);
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
  const {data: [], secs: v1515, time: v1514, didSend: v52, from: v1513 } = txn2;
  ;
  const v1516 = v1511[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
  const v1517 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 0)];
  const v1518 = stdlib.add(v1517, v1493);
  const v1521 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1)];
  const v1522 = v1516[stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 2)];
  const v1523 = [v1518, v1521, v1522];
  const v1524 = stdlib.Array_set(v1511, stdlib.checkedBigNumberify('./index.rsh:147:11:dot', stdlib.UInt_max, 1), v1523);
  ;
  const v1525 = stdlib.addressEq(v1488, v1513);
  stdlib.assert(v1525, {
    at: './index.rsh:147:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:224:22:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v1530 = stdlib.checkedBigNumberify('./index.rsh:248:5:decimal', stdlib.UInt_max, 0);
  let v1531 = stdlib.checkedBigNumberify('./index.rsh:246:5:decimal', stdlib.UInt_max, 0);
  let v1532 = stdlib.checkedBigNumberify('./index.rsh:247:5:decimal', stdlib.UInt_max, 0);
  let v1533 = stdlib.checkedBigNumberify('./index.rsh:245:5:decimal', stdlib.UInt_max, 0);
  let v1534 = v1514;
  let v1540 = v1524;
  
  while (await (async () => {
    const v1542 = stdlib.gt(v1492, v1530);
    
    return v1542;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn3;
    switch (v1714[0]) {
      case 'claim0_109': {
        const v1717 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v1787 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1792 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1793 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v1794 = [v1788, v1792, v1793];
        const v1795 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v1794);
        ;
        const v1796 = v1795[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1797 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v1801 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v1802 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v1803 = [v1797, v1801, v1802];
        const v1804 = stdlib.Array_set(v1795, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v1803);
        ;
        let v1806;
        const v1807 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v1807) {
          v1806 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1808 = stdlib.sub(v1530, v1531);
          const v1809 = stdlib.mul(v1808, v1494);
          const v1810 = stdlib.div(v1809, v1533);
          const v1811 = stdlib.add(v1532, v1810);
          v1806 = v1811;
          }
        const v1813 = 'before';
        stdlib.protect(ctc0, await interact.log(v1813), {
          at: './index.rsh:191:22:application',
          fs: ['at ./index.rsh:191:22:application call to [unknown function] (defined at: ./index.rsh:191:22:function exp)', 'at ./index.rsh:191:22:application call to "liftedInteract" (defined at: ./index.rsh:191:22:application)', 'at ./index.rsh:306:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:305:18:application call to [unknown function] (defined at: ./index.rsh:305:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1814 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v1815 = stdlib.fromSome(v1814, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v1816 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v1817 = stdlib.fromSome(v1816, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v1818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v1819 = stdlib.fromSome(v1818, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v1821 = {
          lastUpdateTime: v1531,
          p: v1713,
          reward: v1815,
          rewardPerTokenPaid: v1819,
          rewardPerTokenStored: v1532,
          rewardPerTokenStoredNew: v1806,
          staked: v1817,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v1821), {
          at: './index.rsh:192:22:application',
          fs: ['at ./index.rsh:192:22:application call to [unknown function] (defined at: ./index.rsh:192:22:function exp)', 'at ./index.rsh:192:22:application call to "liftedInteract" (defined at: ./index.rsh:192:22:application)', 'at ./index.rsh:306:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:305:18:application call to [unknown function] (defined at: ./index.rsh:305:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1826 = stdlib.sub(v1806, v1819);
        const v1827 = stdlib.mul(v1817, v1826);
        const v1830 = stdlib.add(v1827, v1815);
        await stdlib.mapSet(map1, v1713, v1830);
        await stdlib.mapSet(map2, v1713, v1806);
        const v1832 = 'after';
        stdlib.protect(ctc0, await interact.log(v1832), {
          at: './index.rsh:206:22:application',
          fs: ['at ./index.rsh:206:22:application call to [unknown function] (defined at: ./index.rsh:206:22:function exp)', 'at ./index.rsh:206:22:application call to "liftedInteract" (defined at: ./index.rsh:206:22:application)', 'at ./index.rsh:306:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:305:18:application call to [unknown function] (defined at: ./index.rsh:305:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v1840 = {
          reward: v1830,
          rewardPerTokenPaid: v1806,
          staked: v1817,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v1840), {
          at: './index.rsh:208:22:application',
          fs: ['at ./index.rsh:208:22:application call to [unknown function] (defined at: ./index.rsh:208:22:function exp)', 'at ./index.rsh:208:22:application call to "liftedInteract" (defined at: ./index.rsh:208:22:application)', 'at ./index.rsh:306:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:305:18:application call to [unknown function] (defined at: ./index.rsh:305:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        await stdlib.mapSet(map1, v1713, stdlib.checkedBigNumberify('./index.rsh:307:25:decimal', stdlib.UInt_max, 0));
        const v1844 = v1804[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
        const v1845 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 0)];
        const v1852 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
        const v1853 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 2)];
        const v1854 = [v1845, v1852, v1853];
        const v1855 = stdlib.Array_set(v1804, stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1), v1854);
        const v1860 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
          staked: v1817
          };
        await txn3.getOutput('claim', 'v1860', ctc7, v1860);
        null;
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v1806;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v1855;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'setTime0_109': {
        const v2055 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2125 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2126 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2130 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2131 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2132 = [v2126, v2130, v2131];
        const v2133 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2132);
        ;
        const v2134 = v2133[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2135 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2139 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2140 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2141 = [v2135, v2139, v2140];
        const v2142 = stdlib.Array_set(v2133, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2141);
        ;
        const v2207 = v2055[stdlib.checkedBigNumberify('./index.rsh:325:9:spread', stdlib.UInt_max, 0)];
        const v2208 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2209 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2210 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2211 = stdlib.fromSome(v2210, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2212 = {
          reward: v2211,
          staked: v2209
          };
        await txn3.getOutput('setTime', 'v2212', ctc7, v2212);
        const cv1530 = v2207;
        const cv1531 = v1531;
        const cv1532 = v1532;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v2142;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'stake0_109': {
        const v2393 = v1714[1];
        undefined /* setApiDetails */;
        const v2412 = v2393[stdlib.checkedBigNumberify('./index.rsh:268:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2463 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2464 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2465 = stdlib.add(v2464, v2412);
        const v2468 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2469 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2470 = [v2465, v2468, v2469];
        const v2471 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2470);
        ;
        const v2472 = v2471[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2473 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2477 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2478 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2479 = [v2473, v2477, v2478];
        const v2480 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2479);
        ;
        let v2560;
        const v2561 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v2561) {
          v2560 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2562 = stdlib.sub(v1530, v1531);
          const v2563 = stdlib.mul(v2562, v1494);
          const v2564 = stdlib.div(v2563, v1533);
          const v2565 = stdlib.add(v1532, v2564);
          v2560 = v2565;
          }
        const v2567 = 'before';
        stdlib.protect(ctc0, await interact.log(v2567), {
          at: './index.rsh:191:22:application',
          fs: ['at ./index.rsh:191:22:application call to [unknown function] (defined at: ./index.rsh:191:22:function exp)', 'at ./index.rsh:191:22:application call to "liftedInteract" (defined at: ./index.rsh:191:22:application)', 'at ./index.rsh:273:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:272:27:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2568 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2569 = stdlib.fromSome(v2568, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2571 = stdlib.fromSome(v2570, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2572 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v2573 = stdlib.fromSome(v2572, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v2575 = {
          lastUpdateTime: v1531,
          p: v1713,
          reward: v2569,
          rewardPerTokenPaid: v2573,
          rewardPerTokenStored: v1532,
          rewardPerTokenStoredNew: v2560,
          staked: v2571,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v2575), {
          at: './index.rsh:192:22:application',
          fs: ['at ./index.rsh:192:22:application call to [unknown function] (defined at: ./index.rsh:192:22:function exp)', 'at ./index.rsh:192:22:application call to "liftedInteract" (defined at: ./index.rsh:192:22:application)', 'at ./index.rsh:273:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:272:27:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2580 = stdlib.sub(v2560, v2573);
        const v2581 = stdlib.mul(v2571, v2580);
        const v2584 = stdlib.add(v2581, v2569);
        await stdlib.mapSet(map1, v1713, v2584);
        await stdlib.mapSet(map2, v1713, v2560);
        const v2586 = 'after';
        stdlib.protect(ctc0, await interact.log(v2586), {
          at: './index.rsh:206:22:application',
          fs: ['at ./index.rsh:206:22:application call to [unknown function] (defined at: ./index.rsh:206:22:function exp)', 'at ./index.rsh:206:22:application call to "liftedInteract" (defined at: ./index.rsh:206:22:application)', 'at ./index.rsh:273:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:272:27:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2594 = {
          reward: v2584,
          rewardPerTokenPaid: v2560,
          staked: v2571,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v2594), {
          at: './index.rsh:208:22:application',
          fs: ['at ./index.rsh:208:22:application call to [unknown function] (defined at: ./index.rsh:208:22:function exp)', 'at ./index.rsh:208:22:application call to "liftedInteract" (defined at: ./index.rsh:208:22:application)', 'at ./index.rsh:273:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:272:27:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2598 = stdlib.add(v2571, v2412);
        await stdlib.mapSet(map0, v1713, v2598);
        const v2603 = {
          reward: v2584,
          staked: v2598
          };
        await txn3.getOutput('stake', 'v2603', ctc7, v2603);
        null;
        const v2610 = stdlib.add(v1533, v2412);
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v2560;
        const cv1533 = v2610;
        const cv1534 = v1715;
        const cv1540 = v2480;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'unstake0_109': {
        const v2731 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2801 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2802 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2806 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2807 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2808 = [v2802, v2806, v2807];
        const v2809 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2808);
        ;
        const v2810 = v2809[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2811 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v2815 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v2816 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v2817 = [v2811, v2815, v2816];
        const v2818 = stdlib.Array_set(v2809, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2817);
        ;
        const v2951 = v2731[stdlib.checkedBigNumberify('./index.rsh:281:9:spread', stdlib.UInt_max, 0)];
        const v2952 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v2953 = stdlib.fromSome(v2952, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v2954 = stdlib.le(v2951, v2953);
        stdlib.assert(v2954, {
          at: './index.rsh:290:14:application',
          fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2955 = v2818[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
        const v2956 = v2955[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
        const v2957 = stdlib.le(v2951, v2956);
        stdlib.assert(v2957, {
          at: './index.rsh:291:14:application',
          fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: null,
          who: 'User'
          });
        let v2958;
        const v2959 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v2959) {
          v2958 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2960 = stdlib.sub(v1530, v1531);
          const v2961 = stdlib.mul(v2960, v1494);
          const v2962 = stdlib.div(v2961, v1533);
          const v2963 = stdlib.add(v1532, v2962);
          v2958 = v2963;
          }
        const v2965 = 'before';
        stdlib.protect(ctc0, await interact.log(v2965), {
          at: './index.rsh:191:22:application',
          fs: ['at ./index.rsh:191:22:application call to [unknown function] (defined at: ./index.rsh:191:22:function exp)', 'at ./index.rsh:191:22:application call to "liftedInteract" (defined at: ./index.rsh:191:22:application)', 'at ./index.rsh:293:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2966 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v2967 = stdlib.fromSome(v2966, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v2970 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v2971 = stdlib.fromSome(v2970, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v2973 = {
          lastUpdateTime: v1531,
          p: v1713,
          reward: v2967,
          rewardPerTokenPaid: v2971,
          rewardPerTokenStored: v1532,
          rewardPerTokenStoredNew: v2958,
          staked: v2953,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v2973), {
          at: './index.rsh:192:22:application',
          fs: ['at ./index.rsh:192:22:application call to [unknown function] (defined at: ./index.rsh:192:22:function exp)', 'at ./index.rsh:192:22:application call to "liftedInteract" (defined at: ./index.rsh:192:22:application)', 'at ./index.rsh:293:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2978 = stdlib.sub(v2958, v2971);
        const v2979 = stdlib.mul(v2953, v2978);
        const v2982 = stdlib.add(v2979, v2967);
        await stdlib.mapSet(map1, v1713, v2982);
        await stdlib.mapSet(map2, v1713, v2958);
        const v2984 = 'after';
        stdlib.protect(ctc0, await interact.log(v2984), {
          at: './index.rsh:206:22:application',
          fs: ['at ./index.rsh:206:22:application call to [unknown function] (defined at: ./index.rsh:206:22:function exp)', 'at ./index.rsh:206:22:application call to "liftedInteract" (defined at: ./index.rsh:206:22:application)', 'at ./index.rsh:293:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2992 = {
          reward: v2982,
          rewardPerTokenPaid: v2958,
          staked: v2953,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v2992), {
          at: './index.rsh:208:22:application',
          fs: ['at ./index.rsh:208:22:application call to [unknown function] (defined at: ./index.rsh:208:22:function exp)', 'at ./index.rsh:208:22:application call to "liftedInteract" (defined at: ./index.rsh:208:22:application)', 'at ./index.rsh:293:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v2994 = stdlib.sub(v2953, v2951);
        await stdlib.mapSet(map0, v1713, v2994);
        const v3000 = stdlib.sub(v2956, v2951);
        const v3003 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 1)];
        const v3004 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 2)];
        const v3005 = [v3000, v3003, v3004];
        const v3006 = stdlib.Array_set(v2818, stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 0), v3005);
        ;
        const v3011 = {
          reward: v2982,
          staked: v2994
          };
        await txn3.getOutput('unstake', 'v3011', ctc7, v3011);
        null;
        const v3018 = stdlib.sub(v1533, v2951);
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v2958;
        const cv1533 = v3018;
        const cv1534 = v1715;
        const cv1540 = v3006;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      case 'update0_109': {
        const v3069 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v3139 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3140 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3144 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3145 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v3146 = [v3140, v3144, v3145];
        const v3147 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v3146);
        ;
        const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
        const v3153 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
        const v3154 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
        const v3155 = [v3149, v3153, v3154];
        const v3156 = stdlib.Array_set(v3147, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v3155);
        ;
        let v3359;
        const v3360 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
        if (v3360) {
          v3359 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3361 = stdlib.sub(v1530, v1531);
          const v3362 = stdlib.mul(v3361, v1494);
          const v3363 = stdlib.div(v3362, v1533);
          const v3364 = stdlib.add(v1532, v3363);
          v3359 = v3364;
          }
        const v3366 = 'before';
        stdlib.protect(ctc0, await interact.log(v3366), {
          at: './index.rsh:191:22:application',
          fs: ['at ./index.rsh:191:22:application call to [unknown function] (defined at: ./index.rsh:191:22:function exp)', 'at ./index.rsh:191:22:application call to "liftedInteract" (defined at: ./index.rsh:191:22:application)', 'at ./index.rsh:318:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:317:18:application call to [unknown function] (defined at: ./index.rsh:317:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
        const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
        const v3369 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
        const v3370 = stdlib.fromSome(v3369, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
        const v3371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
        const v3372 = stdlib.fromSome(v3371, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
        const v3374 = {
          lastUpdateTime: v1531,
          p: v1713,
          reward: v3368,
          rewardPerTokenPaid: v3372,
          rewardPerTokenStored: v1532,
          rewardPerTokenStoredNew: v3359,
          staked: v3370,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v3374), {
          at: './index.rsh:192:22:application',
          fs: ['at ./index.rsh:192:22:application call to [unknown function] (defined at: ./index.rsh:192:22:function exp)', 'at ./index.rsh:192:22:application call to "liftedInteract" (defined at: ./index.rsh:192:22:application)', 'at ./index.rsh:318:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:317:18:application call to [unknown function] (defined at: ./index.rsh:317:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3379 = stdlib.sub(v3359, v3372);
        const v3380 = stdlib.mul(v3370, v3379);
        const v3383 = stdlib.add(v3380, v3368);
        await stdlib.mapSet(map1, v1713, v3383);
        await stdlib.mapSet(map2, v1713, v3359);
        const v3385 = 'after';
        stdlib.protect(ctc0, await interact.log(v3385), {
          at: './index.rsh:206:22:application',
          fs: ['at ./index.rsh:206:22:application call to [unknown function] (defined at: ./index.rsh:206:22:function exp)', 'at ./index.rsh:206:22:application call to "liftedInteract" (defined at: ./index.rsh:206:22:application)', 'at ./index.rsh:318:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:317:18:application call to [unknown function] (defined at: ./index.rsh:317:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3393 = {
          reward: v3383,
          rewardPerTokenPaid: v3359,
          staked: v3370,
          time: v1530
          };
        stdlib.protect(ctc0, await interact.log(v3393), {
          at: './index.rsh:208:22:application',
          fs: ['at ./index.rsh:208:22:application call to [unknown function] (defined at: ./index.rsh:208:22:function exp)', 'at ./index.rsh:208:22:application call to "liftedInteract" (defined at: ./index.rsh:208:22:application)', 'at ./index.rsh:318:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:317:18:application call to [unknown function] (defined at: ./index.rsh:317:18:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v3399 = {
          reward: v3383,
          staked: v3370
          };
        await txn3.getOutput('update', 'v3399', ctc7, v3399);
        null;
        const cv1530 = v1530;
        const cv1531 = v1530;
        const cv1532 = v3359;
        const cv1533 = v1533;
        const cv1534 = v1715;
        const cv1540 = v3156;
        
        v1530 = cv1530;
        v1531 = cv1531;
        v1532 = cv1532;
        v1533 = cv1533;
        v1534 = cv1534;
        v1540 = cv1540;
        
        continue;
        break;
        }
      }
    
    }
  null;
  let v3416 = v1530;
  let v3417 = v1531;
  let v3418 = v1532;
  let v3419 = v1533;
  let v3420 = v1534;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3451], secs: v3453, time: v3452, didSend: v1153, from: v3450 } = txn3;
    undefined /* setApiDetails */;
    ;
    ;
    ;
    let v3472;
    const v3473 = stdlib.eq(v3419, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
    if (v3473) {
      v3472 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v3474 = stdlib.sub(v3416, v3417);
      const v3475 = stdlib.mul(v3474, v1494);
      const v3476 = stdlib.div(v3475, v3419);
      const v3477 = stdlib.add(v3418, v3476);
      v3472 = v3477;
      }
    const v3479 = 'before';
    stdlib.protect(ctc0, await interact.log(v3479), {
      at: './index.rsh:191:22:application',
      fs: ['at ./index.rsh:191:22:application call to [unknown function] (defined at: ./index.rsh:191:22:function exp)', 'at ./index.rsh:191:22:application call to "liftedInteract" (defined at: ./index.rsh:191:22:application)', 'at ./index.rsh:354:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
      msg: 'log',
      who: 'User'
      });
    
    const v3480 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3450), null);
    const v3481 = stdlib.fromSome(v3480, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
    const v3482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3450), null);
    const v3483 = stdlib.fromSome(v3482, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
    const v3484 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3450), null);
    const v3485 = stdlib.fromSome(v3484, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
    const v3487 = {
      lastUpdateTime: v3417,
      p: v3450,
      reward: v3481,
      rewardPerTokenPaid: v3485,
      rewardPerTokenStored: v3418,
      rewardPerTokenStoredNew: v3472,
      staked: v3483,
      time: v3416
      };
    stdlib.protect(ctc0, await interact.log(v3487), {
      at: './index.rsh:192:22:application',
      fs: ['at ./index.rsh:192:22:application call to [unknown function] (defined at: ./index.rsh:192:22:function exp)', 'at ./index.rsh:192:22:application call to "liftedInteract" (defined at: ./index.rsh:192:22:application)', 'at ./index.rsh:354:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
      msg: 'log',
      who: 'User'
      });
    
    const v3492 = stdlib.sub(v3472, v3485);
    const v3493 = stdlib.mul(v3483, v3492);
    const v3496 = stdlib.add(v3493, v3481);
    await stdlib.mapSet(map1, v3450, v3496);
    await stdlib.mapSet(map2, v3450, v3472);
    const v3498 = 'after';
    stdlib.protect(ctc0, await interact.log(v3498), {
      at: './index.rsh:206:22:application',
      fs: ['at ./index.rsh:206:22:application call to [unknown function] (defined at: ./index.rsh:206:22:function exp)', 'at ./index.rsh:206:22:application call to "liftedInteract" (defined at: ./index.rsh:206:22:application)', 'at ./index.rsh:354:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
      msg: 'log',
      who: 'User'
      });
    
    const v3506 = {
      reward: v3496,
      rewardPerTokenPaid: v3472,
      staked: v3483,
      time: v3416
      };
    stdlib.protect(ctc0, await interact.log(v3506), {
      at: './index.rsh:208:22:application',
      fs: ['at ./index.rsh:208:22:application call to [unknown function] (defined at: ./index.rsh:208:22:function exp)', 'at ./index.rsh:208:22:application call to "liftedInteract" (defined at: ./index.rsh:208:22:application)', 'at ./index.rsh:354:74:application call to "updateReward" (defined at: ./index.rsh:188:85:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
      msg: 'log',
      who: 'User'
      });
    
    await stdlib.mapSet(map1, v3450, stdlib.checkedBigNumberify('./index.rsh:355:25:decimal', stdlib.UInt_max, 0));
    const v3526 = {
      reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
      staked: v3483
      };
    await txn3.getOutput('withdraw', 'v3526', ctc7, v3526);
    null;
    const cv3416 = v3416;
    const cv3417 = v3416;
    const cv3418 = v3472;
    const cv3419 = v3419;
    const cv3420 = v3452;
    
    v3416 = cv3416;
    v3417 = cv3417;
    v3418 = cv3418;
    v3419 = cv3419;
    v3420 = cv3420;
    
    continue;
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1531, v1532, v1533],
    evt_cnt: 0,
    funcNum: 4,
    lct: v3420,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:366:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v3536, time: v3535, didSend: v1240, from: v3534 } = txn3;
      
      ;
      const v3537 = v3535;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1490
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1489
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
  const {data: [], secs: v3536, time: v3535, didSend: v1240, from: v3534 } = txn3;
  ;
  let v3537 = v3535;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v3547, time: v3546, didSend: v1247, from: v3545 } = txn4;
    ;
    const v3548 = stdlib.addressEq(v1488, v3545);
    stdlib.assert(v3548, {
      at: './index.rsh:369:36:dot',
      fs: [],
      msg: 'sender correct',
      who: 'User'
      });
    const cv3537 = v3546;
    
    v3537 = cv3537;
    
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
    claim0_109: ctc8,
    setTime0_109: ctc9,
    stake0_109: ctc9,
    unstake0_109: ctc9,
    update0_109: ctc8
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1577 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:303:9:application call to [unknown function] (defined at: ./index.rsh:303:9:function exp)', 'at ./index.rsh:244:21:application call to "runclaim0_109" (defined at: ./index.rsh:303:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1581 = ['claim0_109', v1577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540, v1581],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:303:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1489], [stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'claim0_109': {
          const v1717 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1787 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v1792 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v1793 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v1794 = [v1788, v1792, v1793];
          const v1795 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v1794);
          ;
          const v1796 = v1795[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v1797 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v1801 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v1802 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v1803 = [v1797, v1801, v1802];
          const v1804 = stdlib.Array_set(v1795, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v1803);
          ;
          let v1806;
          const v1807 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
          if (v1807) {
            v1806 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1808 = stdlib.sub(v1530, v1531);
            const v1809 = stdlib.mul(v1808, v1494);
            const v1810 = stdlib.div(v1809, v1533);
            const v1811 = stdlib.add(v1532, v1810);
            v1806 = v1811;
            }
          const v1814 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1713), null);
          const v1815 = stdlib.fromSome(v1814, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
          const v1816 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1713), null);
          const v1817 = stdlib.fromSome(v1816, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
          const v1818 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1713), null);
          const v1819 = stdlib.fromSome(v1818, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
          const v1826 = stdlib.sub(v1806, v1819);
          const v1827 = stdlib.mul(v1817, v1826);
          const v1830 = stdlib.add(v1827, v1815);
          await stdlib.simMapSet(sim_r, 1, v1713, v1830);
          await stdlib.simMapSet(sim_r, 2, v1713, v1806);
          await stdlib.simMapSet(sim_r, 1, v1713, stdlib.checkedBigNumberify('./index.rsh:307:25:decimal', stdlib.UInt_max, 0));
          const v1844 = v1804[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
          const v1845 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 0)];
          const v1852 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
          const v1853 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 2)];
          const v1854 = [v1845, v1852, v1853];
          const v1855 = stdlib.Array_set(v1804, stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1), v1854);
          const v1860 = {
            reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            staked: v1817
            };
          const v1862 = await txn1.getOutput('claim', 'v1860', ctc11, v1860);
          
          null;
          const v4888 = v1530;
          const v4889 = v1530;
          const v4890 = v1806;
          const v4891 = v1533;
          const v4893 = v1855;
          const v4894 = stdlib.gt(v1492, v1530);
          if (v4894) {
            sim_r.isHalt = false;
            }
          else {
            null;
            const v4932 = v1530;
            const v4933 = v1530;
            const v4934 = v1806;
            const v4935 = v1533;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'setTime0_109': {
          const v2055 = v1714[1];
          
          break;
          }
        case 'stake0_109': {
          const v2393 = v1714[1];
          
          break;
          }
        case 'unstake0_109': {
          const v2731 = v1714[1];
          
          break;
          }
        case 'update0_109': {
          const v3069 = v1714[1];
          
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
  const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'claim0_109': {
      const v1717 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v1787 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v1788 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v1792 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v1793 = v1787[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v1794 = [v1788, v1792, v1793];
      const v1795 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v1794);
      ;
      const v1796 = v1795[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v1797 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v1801 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v1802 = v1796[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v1803 = [v1797, v1801, v1802];
      const v1804 = stdlib.Array_set(v1795, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v1803);
      ;
      let v1806;
      const v1807 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
      if (v1807) {
        v1806 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1808 = stdlib.sub(v1530, v1531);
        const v1809 = stdlib.mul(v1808, v1494);
        const v1810 = stdlib.div(v1809, v1533);
        const v1811 = stdlib.add(v1532, v1810);
        v1806 = v1811;
        }
      const v1814 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
      const v1815 = stdlib.fromSome(v1814, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v1816 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
      const v1817 = stdlib.fromSome(v1816, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v1818 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
      const v1819 = stdlib.fromSome(v1818, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
      const v1826 = stdlib.sub(v1806, v1819);
      const v1827 = stdlib.mul(v1817, v1826);
      const v1830 = stdlib.add(v1827, v1815);
      await stdlib.mapSet(map1, v1713, v1830);
      await stdlib.mapSet(map2, v1713, v1806);
      await stdlib.mapSet(map1, v1713, stdlib.checkedBigNumberify('./index.rsh:307:25:decimal', stdlib.UInt_max, 0));
      const v1844 = v1804[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
      const v1845 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 0)];
      const v1852 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1)];
      const v1853 = v1844[stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 2)];
      const v1854 = [v1845, v1852, v1853];
      const v1855 = stdlib.Array_set(v1804, stdlib.checkedBigNumberify('./index.rsh:308:51:application', stdlib.UInt_max, 1), v1854);
      const v1860 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        staked: v1817
        };
      const v1862 = await txn1.getOutput('claim', 'v1860', ctc11, v1860);
      if (v713) {
        stdlib.protect(ctc0, await interact.out(v1717, v1862), {
          at: './index.rsh:304:7:application',
          fs: ['at ./index.rsh:304:7:application call to [unknown function] (defined at: ./index.rsh:304:7:function exp)', 'at ./index.rsh:310:17:application call to "callback" (defined at: ./index.rsh:305:18:function exp)', 'at ./index.rsh:305:18:application call to [unknown function] (defined at: ./index.rsh:305:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      null;
      const v4888 = v1530;
      const v4889 = v1530;
      const v4890 = v1806;
      const v4891 = v1533;
      const v4893 = v1855;
      const v4894 = stdlib.gt(v1492, v1530);
      if (v4894) {
        return;
        }
      else {
        null;
        const v4932 = v1530;
        const v4933 = v1530;
        const v4934 = v1806;
        const v4935 = v1533;
        return;
        }
      break;
      }
    case 'setTime0_109': {
      const v2055 = v1714[1];
      return;
      break;
      }
    case 'stake0_109': {
      const v2393 = v1714[1];
      return;
      break;
      }
    case 'unstake0_109': {
      const v2731 = v1714[1];
      return;
      break;
      }
    case 'update0_109': {
      const v3069 = v1714[1];
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
    claim0_109: ctc9,
    setTime0_109: ctc8,
    stake0_109: ctc8,
    unstake0_109: ctc8,
    update0_109: ctc9
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1593 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:325:9:application call to [unknown function] (defined at: ./index.rsh:325:9:function exp)', 'at ./index.rsh:244:21:application call to "runsetTime0_109" (defined at: ./index.rsh:325:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1598 = ['setTime0_109', v1593];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540, v1598],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:325:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1489], [stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'claim0_109': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'setTime0_109': {
          const v2055 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v2125 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2126 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2130 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2131 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2132 = [v2126, v2130, v2131];
          const v2133 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2132);
          ;
          const v2134 = v2133[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2135 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2139 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2140 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2141 = [v2135, v2139, v2140];
          const v2142 = stdlib.Array_set(v2133, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2141);
          ;
          const v2207 = v2055[stdlib.checkedBigNumberify('./index.rsh:325:9:spread', stdlib.UInt_max, 0)];
          const v2208 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1713), null);
          const v2209 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
          const v2210 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1713), null);
          const v2211 = stdlib.fromSome(v2210, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
          const v2212 = {
            reward: v2211,
            staked: v2209
            };
          const v2214 = await txn1.getOutput('setTime', 'v2212', ctc11, v2212);
          
          const v5242 = v2207;
          const v5243 = v1531;
          const v5244 = v1532;
          const v5245 = v1533;
          const v5247 = v2142;
          const v5248 = stdlib.gt(v1492, v2207);
          if (v5248) {
            sim_r.isHalt = false;
            }
          else {
            null;
            const v5286 = v2207;
            const v5287 = v1531;
            const v5288 = v1532;
            const v5289 = v1533;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_109': {
          const v2393 = v1714[1];
          
          break;
          }
        case 'unstake0_109': {
          const v2731 = v1714[1];
          
          break;
          }
        case 'update0_109': {
          const v3069 = v1714[1];
          
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
  const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'claim0_109': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'setTime0_109': {
      const v2055 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v2125 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2126 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2130 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2131 = v2125[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2132 = [v2126, v2130, v2131];
      const v2133 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2132);
      ;
      const v2134 = v2133[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2135 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2139 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2140 = v2134[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2141 = [v2135, v2139, v2140];
      const v2142 = stdlib.Array_set(v2133, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2141);
      ;
      const v2207 = v2055[stdlib.checkedBigNumberify('./index.rsh:325:9:spread', stdlib.UInt_max, 0)];
      const v2208 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
      const v2209 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v2210 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
      const v2211 = stdlib.fromSome(v2210, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v2212 = {
        reward: v2211,
        staked: v2209
        };
      const v2214 = await txn1.getOutput('setTime', 'v2212', ctc11, v2212);
      if (v713) {
        stdlib.protect(ctc0, await interact.out(v2055, v2214), {
          at: './index.rsh:326:7:application',
          fs: ['at ./index.rsh:326:7:application call to [unknown function] (defined at: ./index.rsh:326:7:function exp)', 'at ./index.rsh:328:17:application call to "callback" (defined at: ./index.rsh:327:24:function exp)', 'at ./index.rsh:327:24:application call to [unknown function] (defined at: ./index.rsh:327:24:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v5242 = v2207;
      const v5243 = v1531;
      const v5244 = v1532;
      const v5245 = v1533;
      const v5247 = v2142;
      const v5248 = stdlib.gt(v1492, v2207);
      if (v5248) {
        return;
        }
      else {
        null;
        const v5286 = v2207;
        const v5287 = v1531;
        const v5288 = v1532;
        const v5289 = v1533;
        return;
        }
      break;
      }
    case 'stake0_109': {
      const v2393 = v1714[1];
      return;
      break;
      }
    case 'unstake0_109': {
      const v2731 = v1714[1];
      return;
      break;
      }
    case 'update0_109': {
      const v3069 = v1714[1];
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
    claim0_109: ctc9,
    setTime0_109: ctc8,
    stake0_109: ctc8,
    unstake0_109: ctc8,
    update0_109: ctc9
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1554 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:270:11:application call to [unknown function] (defined at: ./index.rsh:270:11:function exp)', 'at ./index.rsh:244:21:application call to "runstake0_109" (defined at: ./index.rsh:268:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1555 = v1554[stdlib.checkedBigNumberify('./index.rsh:268:9:spread', stdlib.UInt_max, 0)];
  const v1558 = ['stake0_109', v1554];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540, v1558],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:271:21:decimal', stdlib.UInt_max, 0), [[v1555, v1489], [stdlib.checkedBigNumberify('./index.rsh:271:48:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'claim0_109': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'setTime0_109': {
          const v2055 = v1714[1];
          
          break;
          }
        case 'stake0_109': {
          const v2393 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v2412 = v2393[stdlib.checkedBigNumberify('./index.rsh:268:9:spread', stdlib.UInt_max, 0)];
          ;
          const v2463 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2464 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2465 = stdlib.add(v2464, v2412);
          const v2468 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2469 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2470 = [v2465, v2468, v2469];
          const v2471 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2470);
          sim_r.txns.push({
            amt: v2412,
            kind: 'to',
            tok: v1489
            });
          const v2472 = v2471[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2473 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2477 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2478 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2479 = [v2473, v2477, v2478];
          const v2480 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2479);
          ;
          let v2560;
          const v2561 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
          if (v2561) {
            v2560 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2562 = stdlib.sub(v1530, v1531);
            const v2563 = stdlib.mul(v2562, v1494);
            const v2564 = stdlib.div(v2563, v1533);
            const v2565 = stdlib.add(v1532, v2564);
            v2560 = v2565;
            }
          const v2568 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1713), null);
          const v2569 = stdlib.fromSome(v2568, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
          const v2570 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1713), null);
          const v2571 = stdlib.fromSome(v2570, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
          const v2572 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1713), null);
          const v2573 = stdlib.fromSome(v2572, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
          const v2580 = stdlib.sub(v2560, v2573);
          const v2581 = stdlib.mul(v2571, v2580);
          const v2584 = stdlib.add(v2581, v2569);
          await stdlib.simMapSet(sim_r, 1, v1713, v2584);
          await stdlib.simMapSet(sim_r, 2, v1713, v2560);
          const v2598 = stdlib.add(v2571, v2412);
          await stdlib.simMapSet(sim_r, 0, v1713, v2598);
          const v2603 = {
            reward: v2584,
            staked: v2598
            };
          const v2605 = await txn1.getOutput('stake', 'v2603', ctc11, v2603);
          
          null;
          const v2610 = stdlib.add(v1533, v2412);
          const v5596 = v1530;
          const v5597 = v1530;
          const v5598 = v2560;
          const v5599 = v2610;
          const v5601 = v2480;
          const v5602 = stdlib.gt(v1492, v1530);
          if (v5602) {
            sim_r.isHalt = false;
            }
          else {
            null;
            const v5640 = v1530;
            const v5641 = v1530;
            const v5642 = v2560;
            const v5643 = v2610;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_109': {
          const v2731 = v1714[1];
          
          break;
          }
        case 'update0_109': {
          const v3069 = v1714[1];
          
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
  const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'claim0_109': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'setTime0_109': {
      const v2055 = v1714[1];
      return;
      break;
      }
    case 'stake0_109': {
      const v2393 = v1714[1];
      undefined /* setApiDetails */;
      const v2412 = v2393[stdlib.checkedBigNumberify('./index.rsh:268:9:spread', stdlib.UInt_max, 0)];
      ;
      const v2463 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2464 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2465 = stdlib.add(v2464, v2412);
      const v2468 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2469 = v2463[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2470 = [v2465, v2468, v2469];
      const v2471 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2470);
      ;
      const v2472 = v2471[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2473 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2477 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2478 = v2472[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2479 = [v2473, v2477, v2478];
      const v2480 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2479);
      ;
      let v2560;
      const v2561 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
      if (v2561) {
        v2560 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2562 = stdlib.sub(v1530, v1531);
        const v2563 = stdlib.mul(v2562, v1494);
        const v2564 = stdlib.div(v2563, v1533);
        const v2565 = stdlib.add(v1532, v2564);
        v2560 = v2565;
        }
      const v2568 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
      const v2569 = stdlib.fromSome(v2568, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v2570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
      const v2571 = stdlib.fromSome(v2570, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v2572 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
      const v2573 = stdlib.fromSome(v2572, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
      const v2580 = stdlib.sub(v2560, v2573);
      const v2581 = stdlib.mul(v2571, v2580);
      const v2584 = stdlib.add(v2581, v2569);
      await stdlib.mapSet(map1, v1713, v2584);
      await stdlib.mapSet(map2, v1713, v2560);
      const v2598 = stdlib.add(v2571, v2412);
      await stdlib.mapSet(map0, v1713, v2598);
      const v2603 = {
        reward: v2584,
        staked: v2598
        };
      const v2605 = await txn1.getOutput('stake', 'v2603', ctc11, v2603);
      if (v713) {
        stdlib.protect(ctc0, await interact.out(v2393, v2605), {
          at: './index.rsh:269:7:application',
          fs: ['at ./index.rsh:269:7:application call to [unknown function] (defined at: ./index.rsh:269:7:function exp)', 'at ./index.rsh:276:17:application call to "callback" (defined at: ./index.rsh:272:27:function exp)', 'at ./index.rsh:272:27:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      null;
      const v2610 = stdlib.add(v1533, v2412);
      const v5596 = v1530;
      const v5597 = v1530;
      const v5598 = v2560;
      const v5599 = v2610;
      const v5601 = v2480;
      const v5602 = stdlib.gt(v1492, v1530);
      if (v5602) {
        return;
        }
      else {
        null;
        const v5640 = v1530;
        const v5641 = v1530;
        const v5642 = v2560;
        const v5643 = v2610;
        return;
        }
      break;
      }
    case 'unstake0_109': {
      const v2731 = v1714[1];
      return;
      break;
      }
    case 'update0_109': {
      const v3069 = v1714[1];
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
    claim0_109: ctc9,
    setTime0_109: ctc8,
    stake0_109: ctc8,
    unstake0_109: ctc8,
    update0_109: ctc9
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1560 = ctc.selfAddress();
  const v1562 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:283:19:application call to [unknown function] (defined at: ./index.rsh:283:19:function exp)', 'at ./index.rsh:244:21:application call to "rununstake0_109" (defined at: ./index.rsh:281:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1563 = v1562[stdlib.checkedBigNumberify('./index.rsh:281:9:spread', stdlib.UInt_max, 0)];
  const v1565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1560), null);
  const v1566 = stdlib.fromSome(v1565, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
  const v1567 = stdlib.le(v1563, v1566);
  stdlib.assert(v1567, {
    at: './index.rsh:284:15:application',
    fs: ['at ./index.rsh:283:19:application call to [unknown function] (defined at: ./index.rsh:283:19:function exp)', 'at ./index.rsh:283:19:application call to [unknown function] (defined at: ./index.rsh:283:19:function exp)', 'at ./index.rsh:244:21:application call to "rununstake0_109" (defined at: ./index.rsh:281:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1568 = v1540[stdlib.checkedBigNumberify('./index.rsh:285:36:application', stdlib.UInt_max, 0)];
  const v1569 = v1568[stdlib.checkedBigNumberify('./index.rsh:285:36:application', stdlib.UInt_max, 0)];
  const v1570 = stdlib.le(v1563, v1569);
  stdlib.assert(v1570, {
    at: './index.rsh:285:15:application',
    fs: ['at ./index.rsh:283:19:application call to [unknown function] (defined at: ./index.rsh:283:19:function exp)', 'at ./index.rsh:283:19:application call to [unknown function] (defined at: ./index.rsh:283:19:function exp)', 'at ./index.rsh:244:21:application call to "rununstake0_109" (defined at: ./index.rsh:281:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1573 = ['unstake0_109', v1562];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540, v1573],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:287:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:287:19:decimal', stdlib.UInt_max, 0), v1489], [stdlib.checkedBigNumberify('./index.rsh:287:36:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'claim0_109': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'setTime0_109': {
          const v2055 = v1714[1];
          
          break;
          }
        case 'stake0_109': {
          const v2393 = v1714[1];
          
          break;
          }
        case 'unstake0_109': {
          const v2731 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2801 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2802 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2806 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2807 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2808 = [v2802, v2806, v2807];
          const v2809 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2808);
          ;
          const v2810 = v2809[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2811 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v2815 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v2816 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v2817 = [v2811, v2815, v2816];
          const v2818 = stdlib.Array_set(v2809, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2817);
          ;
          const v2951 = v2731[stdlib.checkedBigNumberify('./index.rsh:281:9:spread', stdlib.UInt_max, 0)];
          const v2952 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1713), null);
          const v2953 = stdlib.fromSome(v2952, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
          const v2954 = stdlib.le(v2951, v2953);
          ;
          const v2955 = v2818[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
          const v2956 = v2955[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
          const v2957 = stdlib.le(v2951, v2956);
          ;
          let v2958;
          const v2959 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
          if (v2959) {
            v2958 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2960 = stdlib.sub(v1530, v1531);
            const v2961 = stdlib.mul(v2960, v1494);
            const v2962 = stdlib.div(v2961, v1533);
            const v2963 = stdlib.add(v1532, v2962);
            v2958 = v2963;
            }
          const v2966 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1713), null);
          const v2967 = stdlib.fromSome(v2966, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
          const v2970 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1713), null);
          const v2971 = stdlib.fromSome(v2970, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
          const v2978 = stdlib.sub(v2958, v2971);
          const v2979 = stdlib.mul(v2953, v2978);
          const v2982 = stdlib.add(v2979, v2967);
          await stdlib.simMapSet(sim_r, 1, v1713, v2982);
          await stdlib.simMapSet(sim_r, 2, v1713, v2958);
          const v2994 = stdlib.sub(v2953, v2951);
          await stdlib.simMapSet(sim_r, 0, v1713, v2994);
          const v3000 = stdlib.sub(v2956, v2951);
          const v3003 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 1)];
          const v3004 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 2)];
          const v3005 = [v3000, v3003, v3004];
          const v3006 = stdlib.Array_set(v2818, stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 0), v3005);
          sim_r.txns.push({
            amt: v2951,
            kind: 'from',
            to: v1713,
            tok: v1489
            });
          const v3011 = {
            reward: v2982,
            staked: v2994
            };
          const v3013 = await txn1.getOutput('unstake', 'v3011', ctc11, v3011);
          
          null;
          const v3018 = stdlib.sub(v1533, v2951);
          const v5950 = v1530;
          const v5951 = v1530;
          const v5952 = v2958;
          const v5953 = v3018;
          const v5955 = v3006;
          const v5956 = stdlib.gt(v1492, v1530);
          if (v5956) {
            sim_r.isHalt = false;
            }
          else {
            null;
            const v5994 = v1530;
            const v5995 = v1530;
            const v5996 = v2958;
            const v5997 = v3018;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'update0_109': {
          const v3069 = v1714[1];
          
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
  const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'claim0_109': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'setTime0_109': {
      const v2055 = v1714[1];
      return;
      break;
      }
    case 'stake0_109': {
      const v2393 = v1714[1];
      return;
      break;
      }
    case 'unstake0_109': {
      const v2731 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v2801 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2802 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2806 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2807 = v2801[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2808 = [v2802, v2806, v2807];
      const v2809 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v2808);
      ;
      const v2810 = v2809[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2811 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v2815 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v2816 = v2810[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v2817 = [v2811, v2815, v2816];
      const v2818 = stdlib.Array_set(v2809, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v2817);
      ;
      const v2951 = v2731[stdlib.checkedBigNumberify('./index.rsh:281:9:spread', stdlib.UInt_max, 0)];
      const v2952 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
      const v2953 = stdlib.fromSome(v2952, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v2954 = stdlib.le(v2951, v2953);
      stdlib.assert(v2954, {
        at: './index.rsh:290:14:application',
        fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2955 = v2818[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
      const v2956 = v2955[stdlib.checkedBigNumberify('./index.rsh:291:35:application', stdlib.UInt_max, 0)];
      const v2957 = stdlib.le(v2951, v2956);
      stdlib.assert(v2957, {
        at: './index.rsh:291:14:application',
        fs: ['at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v2958;
      const v2959 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
      if (v2959) {
        v2958 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2960 = stdlib.sub(v1530, v1531);
        const v2961 = stdlib.mul(v2960, v1494);
        const v2962 = stdlib.div(v2961, v1533);
        const v2963 = stdlib.add(v1532, v2962);
        v2958 = v2963;
        }
      const v2966 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
      const v2967 = stdlib.fromSome(v2966, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v2970 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
      const v2971 = stdlib.fromSome(v2970, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
      const v2978 = stdlib.sub(v2958, v2971);
      const v2979 = stdlib.mul(v2953, v2978);
      const v2982 = stdlib.add(v2979, v2967);
      await stdlib.mapSet(map1, v1713, v2982);
      await stdlib.mapSet(map2, v1713, v2958);
      const v2994 = stdlib.sub(v2953, v2951);
      await stdlib.mapSet(map0, v1713, v2994);
      const v3000 = stdlib.sub(v2956, v2951);
      const v3003 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 1)];
      const v3004 = v2955[stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 2)];
      const v3005 = [v3000, v3003, v3004];
      const v3006 = stdlib.Array_set(v2818, stdlib.checkedBigNumberify('./index.rsh:296:47:application', stdlib.UInt_max, 0), v3005);
      ;
      const v3011 = {
        reward: v2982,
        staked: v2994
        };
      const v3013 = await txn1.getOutput('unstake', 'v3011', ctc11, v3011);
      if (v713) {
        stdlib.protect(ctc0, await interact.out(v2731, v3013), {
          at: './index.rsh:282:7:application',
          fs: ['at ./index.rsh:282:7:application call to [unknown function] (defined at: ./index.rsh:282:7:function exp)', 'at ./index.rsh:298:17:application call to "callback" (defined at: ./index.rsh:288:29:function exp)', 'at ./index.rsh:288:29:application call to [unknown function] (defined at: ./index.rsh:288:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      null;
      const v3018 = stdlib.sub(v1533, v2951);
      const v5950 = v1530;
      const v5951 = v1530;
      const v5952 = v2958;
      const v5953 = v3018;
      const v5955 = v3006;
      const v5956 = stdlib.gt(v1492, v1530);
      if (v5956) {
        return;
        }
      else {
        null;
        const v5994 = v1530;
        const v5995 = v1530;
        const v5996 = v2958;
        const v5997 = v3018;
        return;
        }
      break;
      }
    case 'update0_109': {
      const v3069 = v1714[1];
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
    claim0_109: ctc8,
    setTime0_109: ctc9,
    stake0_109: ctc9,
    unstake0_109: ctc9,
    update0_109: ctc8
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v1585 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:315:9:application call to [unknown function] (defined at: ./index.rsh:315:9:function exp)', 'at ./index.rsh:244:21:application call to "runupdate0_109" (defined at: ./index.rsh:315:9:function exp)', 'at ./index.rsh:244:21:application call to [unknown function] (defined at: ./index.rsh:244:21:function exp)'],
    msg: 'in',
    who: 'update'
    });
  const v1589 = ['update0_109', v1585];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1530, v1531, v1532, v1533, v1540, v1589],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:315:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1489], [stdlib.checkedBigNumberify('./index.rsh:267:14:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'claim0_109': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'setTime0_109': {
          const v2055 = v1714[1];
          
          break;
          }
        case 'stake0_109': {
          const v2393 = v1714[1];
          
          break;
          }
        case 'unstake0_109': {
          const v2731 = v1714[1];
          
          break;
          }
        case 'update0_109': {
          const v3069 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "update"
            });
          ;
          const v3139 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v3140 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v3144 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v3145 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v3146 = [v3140, v3144, v3145];
          const v3147 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v3146);
          ;
          const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
          const v3153 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
          const v3154 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
          const v3155 = [v3149, v3153, v3154];
          const v3156 = stdlib.Array_set(v3147, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v3155);
          ;
          let v3359;
          const v3360 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
          if (v3360) {
            v3359 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3361 = stdlib.sub(v1530, v1531);
            const v3362 = stdlib.mul(v3361, v1494);
            const v3363 = stdlib.div(v3362, v1533);
            const v3364 = stdlib.add(v1532, v3363);
            v3359 = v3364;
            }
          const v3367 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1713), null);
          const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
          const v3369 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1713), null);
          const v3370 = stdlib.fromSome(v3369, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
          const v3371 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1713), null);
          const v3372 = stdlib.fromSome(v3371, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
          const v3379 = stdlib.sub(v3359, v3372);
          const v3380 = stdlib.mul(v3370, v3379);
          const v3383 = stdlib.add(v3380, v3368);
          await stdlib.simMapSet(sim_r, 1, v1713, v3383);
          await stdlib.simMapSet(sim_r, 2, v1713, v3359);
          const v3399 = {
            reward: v3383,
            staked: v3370
            };
          const v3401 = await txn1.getOutput('update', 'v3399', ctc11, v3399);
          
          null;
          const v6304 = v1530;
          const v6305 = v1530;
          const v6306 = v3359;
          const v6307 = v1533;
          const v6309 = v3156;
          const v6310 = stdlib.gt(v1492, v1530);
          if (v6310) {
            sim_r.isHalt = false;
            }
          else {
            null;
            const v6348 = v1530;
            const v6349 = v1530;
            const v6350 = v3359;
            const v6351 = v1533;
            sim_r.isHalt = false;
            }
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
  const {data: [v1714], secs: v1716, time: v1715, didSend: v713, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'claim0_109': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'setTime0_109': {
      const v2055 = v1714[1];
      return;
      break;
      }
    case 'stake0_109': {
      const v2393 = v1714[1];
      return;
      break;
      }
    case 'unstake0_109': {
      const v2731 = v1714[1];
      return;
      break;
      }
    case 'update0_109': {
      const v3069 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v3139 = v1540[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v3140 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v3144 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v3145 = v3139[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v3146 = [v3140, v3144, v3145];
      const v3147 = stdlib.Array_set(v1540, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0), v3146);
      ;
      const v3148 = v3147[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 0)];
      const v3153 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1)];
      const v3154 = v3148[stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 2)];
      const v3155 = [v3149, v3153, v3154];
      const v3156 = stdlib.Array_set(v3147, stdlib.checkedBigNumberify('./index.rsh:244:21:dot', stdlib.UInt_max, 1), v3155);
      ;
      let v3359;
      const v3360 = stdlib.eq(v1533, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
      if (v3360) {
        v3359 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3361 = stdlib.sub(v1530, v1531);
        const v3362 = stdlib.mul(v3361, v1494);
        const v3363 = stdlib.div(v3362, v1533);
        const v3364 = stdlib.add(v1532, v3363);
        v3359 = v3364;
        }
      const v3367 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1713), null);
      const v3368 = stdlib.fromSome(v3367, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v3369 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1713), null);
      const v3370 = stdlib.fromSome(v3369, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v3371 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1713), null);
      const v3372 = stdlib.fromSome(v3371, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
      const v3379 = stdlib.sub(v3359, v3372);
      const v3380 = stdlib.mul(v3370, v3379);
      const v3383 = stdlib.add(v3380, v3368);
      await stdlib.mapSet(map1, v1713, v3383);
      await stdlib.mapSet(map2, v1713, v3359);
      const v3399 = {
        reward: v3383,
        staked: v3370
        };
      const v3401 = await txn1.getOutput('update', 'v3399', ctc11, v3399);
      if (v713) {
        stdlib.protect(ctc0, await interact.out(v3069, v3401), {
          at: './index.rsh:316:7:application',
          fs: ['at ./index.rsh:316:7:application call to [unknown function] (defined at: ./index.rsh:316:7:function exp)', 'at ./index.rsh:320:17:application call to "callback" (defined at: ./index.rsh:317:18:function exp)', 'at ./index.rsh:317:18:application call to [unknown function] (defined at: ./index.rsh:317:18:function exp)'],
          msg: 'out',
          who: 'update'
          });
        }
      else {
        }
      
      null;
      const v6304 = v1530;
      const v6305 = v1530;
      const v6306 = v3359;
      const v6307 = v1533;
      const v6309 = v3156;
      const v6310 = stdlib.gt(v1492, v1530);
      if (v6310) {
        return;
        }
      else {
        null;
        const v6348 = v1530;
        const v6349 = v1530;
        const v6350 = v3359;
        const v6351 = v1533;
        return;
        }
      break;
      }
    }
  
  
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1531, v1532, v1533, v3416, v3417, v3418, v3419] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v3430 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:9:application call to [unknown function] (defined at: ./index.rsh:351:9:function exp)', 'at ./index.rsh:351:9:application call to [unknown function] (defined at: ./index.rsh:351:9:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1488, v1489, v1490, v1491, v1492, v1493, v1494, v1531, v1532, v1533, v3416, v3417, v3418, v3419, v3430],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:351:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:350:14:decimal', stdlib.UInt_max, 0), v1489], [stdlib.checkedBigNumberify('./index.rsh:350:14:decimal', stdlib.UInt_max, 0), v1490]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v3451], secs: v3453, time: v3452, didSend: v1153, from: v3450 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "withdraw"
        });
      ;
      ;
      ;
      let v3472;
      const v3473 = stdlib.eq(v3419, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
      if (v3473) {
        v3472 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3474 = stdlib.sub(v3416, v3417);
        const v3475 = stdlib.mul(v3474, v1494);
        const v3476 = stdlib.div(v3475, v3419);
        const v3477 = stdlib.add(v3418, v3476);
        v3472 = v3477;
        }
      const v3480 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v3450), null);
      const v3481 = stdlib.fromSome(v3480, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
      const v3482 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3450), null);
      const v3483 = stdlib.fromSome(v3482, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
      const v3484 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3450), null);
      const v3485 = stdlib.fromSome(v3484, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
      const v3492 = stdlib.sub(v3472, v3485);
      const v3493 = stdlib.mul(v3483, v3492);
      const v3496 = stdlib.add(v3493, v3481);
      await stdlib.simMapSet(sim_r, 1, v3450, v3496);
      await stdlib.simMapSet(sim_r, 2, v3450, v3472);
      await stdlib.simMapSet(sim_r, 1, v3450, stdlib.checkedBigNumberify('./index.rsh:355:25:decimal', stdlib.UInt_max, 0));
      const v3526 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        staked: v3483
        };
      const v3528 = await txn1.getOutput('withdraw', 'v3526', ctc6, v3526);
      
      null;
      const v6363 = v3416;
      const v6364 = v3416;
      const v6365 = v3472;
      const v6366 = v3419;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v3451], secs: v3453, time: v3452, didSend: v1153, from: v3450 } = txn1;
  undefined /* setApiDetails */;
  ;
  ;
  ;
  let v3472;
  const v3473 = stdlib.eq(v3419, stdlib.checkedBigNumberify('./index.rsh:169:24:decimal', stdlib.UInt_max, 0));
  if (v3473) {
    v3472 = stdlib.checkedBigNumberify('./index.rsh:170:14:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v3474 = stdlib.sub(v3416, v3417);
    const v3475 = stdlib.mul(v3474, v1494);
    const v3476 = stdlib.div(v3475, v3419);
    const v3477 = stdlib.add(v3418, v3476);
    v3472 = v3477;
    }
  const v3480 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3450), null);
  const v3481 = stdlib.fromSome(v3480, stdlib.checkedBigNumberify('./index.rsh:157:46:decimal', stdlib.UInt_max, 0));
  const v3482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3450), null);
  const v3483 = stdlib.fromSome(v3482, stdlib.checkedBigNumberify('./index.rsh:154:46:decimal', stdlib.UInt_max, 0));
  const v3484 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3450), null);
  const v3485 = stdlib.fromSome(v3484, stdlib.checkedBigNumberify('./index.rsh:161:70:decimal', stdlib.UInt_max, 0));
  const v3492 = stdlib.sub(v3472, v3485);
  const v3493 = stdlib.mul(v3483, v3492);
  const v3496 = stdlib.add(v3493, v3481);
  await stdlib.mapSet(map1, v3450, v3496);
  await stdlib.mapSet(map2, v3450, v3472);
  await stdlib.mapSet(map1, v3450, stdlib.checkedBigNumberify('./index.rsh:355:25:decimal', stdlib.UInt_max, 0));
  const v3526 = {
    reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    staked: v3483
    };
  const v3528 = await txn1.getOutput('withdraw', 'v3526', ctc6, v3526);
  if (v1153) {
    stdlib.protect(ctc0, await interact.out(v3451, v3528), {
      at: './index.rsh:352:7:application',
      fs: ['at ./index.rsh:352:7:application call to [unknown function] (defined at: ./index.rsh:352:7:function exp)', 'at ./index.rsh:359:17:application call to "callback" (defined at: ./index.rsh:353:18:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
      msg: 'out',
      who: 'withdraw'
      });
    }
  else {
    }
  
  null;
  const v6363 = v3416;
  const v6364 = v3416;
  const v6365 = v3472;
  const v6366 = v3419;
  return;
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`, `update()(uint64,uint64)`, `withdraw()(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`],
    sigs: [`claim()(uint64,uint64)`, `global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`, `update()(uint64,uint64)`, `withdraw()(uint64,uint64)`]
    },
  appApproval: `BiAdAAEIBAkHICgwOEBIUFigjQYbvfqL1ASjxcfzCKumnqMKvPXfwwurmvLGCLqlzIIClaqt2gP6yu6lAWBoAgMFJgQBAAEBAAkBAAAAAAAAAAAiNQAxGEEOuSpkSSJbNQEkWzUCMRkjEkEACjEAKCEPr2ZCDo42GgAXSUEC2iI1BCM1BkkhEAxAARZJIREMQADmSSESDEAA10khEwxAAL0hExJENAFJJAxAAFxJIQQMQAAsIQQSRChkKWRQSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCDhtIKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0IN8kkhBQxAACZIKGRJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0INxSUSRChkSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCDZ0hEhJEKjX/gAEENP9QJK9QQgISIRESRCpCCHxJIRQMQAAQIRQSRDYaATX/KTT/UEIB8yEQEkQ2GgE1/4ABAzT/UEIB4UkhFQxAAKVJIRYMQAARIRYSRCo1/yg0/1Akr1BCAcIhFRJENAFJJAxAAERJIQQMQAAgIQQSRChkKWRQSTUDV2gINANXWAhQNANXYAhQNQdCDQdIKGQpZFBJNQNXYAg0A1dQCFA0A1dYCFA1B0IM6kkhBQxAABpIKGRJNQNXWAg0A1dICFA0A1dQCFA1B0IMySUSRChkSTUDV1gINANXSAhQNANXUAhQNQdCDK1JIRcMQADvIRcSRDQBSSQMQABySSEEDEAANyEEEkQ2GgE1/yI0/4gMq1cACUk1/iNbNP4iVU0WIjT/iAyXVwkJSTX+I1s0/iJVTRZQNQdCDFxINhoBNf8iNP+IDHdXAAlJNf4jWzT+IlVNFiI0/4gMY1cJCUk1/iNbNP4iVU0WUDUHQgwoSSEFDEAANEg2GgE1/yI0/4gMPFcACUk1/iNbNP4iVU0WIjT/iAwoVwkJSTX+I1s0/iJVTRZQNQdCC+0lEkQ2GgE1/yI0/4gMBlcACUk1/iNbNP4iVU0WIjT/iAvyVwkJSTX+I1s0/iJVTRZQNQdCC7eBzcj6HhJENhoBNf+AAQI0/1BCACo2GgIXNQQ2GgM2GgEXSSUMQAiBSYEGDEAIJEkhBQxAB8VJJAxABnQkEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpKVwAgNf8hBls1/iEHWzX9IQhbNfwhCVs1+yEKWzX6IQtbNfkhDFs1+CENWzX3IRhbNfYhGVs19VdwIjX0STUFNfOABOOwEkw081CwNPMiVUkhGgxAA/JJIRsMQAKgSSUMQAESJRJENPRXABFJNfJXAAg08lcICFA08lcQAVA09FcREVA18TTxVxERNfA09SISQQAGIjXvQgAQNPY0+DT3CTT5CzT1Cgg17yIxAIgK0VcACUk17SNbNO0iVU1JNe407yIxAIgKuVcSCUk17CNbNOwiVU0JCyIxAIgKpFcJCUk17CNbNOwiVU0INe0xACgxAIgKjCk07RZQNexJVwAJNOxQTFcSCVBmMQAoMQCICnApNO8WUDXsVwASNOxQZoAIAAAAAAAADUc07hY07RZQULA07hY07RZQNQeABJWDnk4xAFCwNP80/jT9NPw0+zT6NPk0+Ek07zT1MgY08VcAETTwVwAINPBXCAhQNPBXEAFQUEIIcEg081cBCDXyNPRXABFJNfFXAAg08VcICFA08VcQAVA09FcREVA18DTwVxERNe808FcAETTvVwAINO9XCAhQNO9XEAFQUDXuNPIXNe0iMQCICblXAAlJNesjWzTrIlVNNew07TTsDkQ07lcAEUk16yJbNeo07TTqDkQ09SISQQAGIjXpQgAQNPY0+DT3CTT5CzT1Cgg16TTsNOkiMQCICWtXEglJNecjWzTnIlVNCQsiMQCICVZXCQlJNecjWzTnIlVNCDXoMQAoMQCICT4pNOgWUDXnSVcACTTnUExXEglQZjEAKDEAiAkiKTTpFlA151cAEjTnUGY07DTtCTXnMQAoMQCICQUpNOcWUDXmVwkSNOZMUGaxIrIBNO2yEiWyEDEAshQ0/rIRs4AIAAAAAAAAC8M05xY06BZQULA05xY06BZQNQeABNFpcykxAFA07RZQsDT/NP40/TT8NPs0+jT5NPhJNOk09TTtCTIGNOo07QkWNOtXCAhQNOtXEAFQNO5XERFQQgboSDTzVwEINfI08hc18TT0VwARSTXwIls08QgWNPBXCAhQNPBXEAFQNPRXERFQNe808TT+iAh0NO9XERE17jT1IhJBAAYiNe1CABA09jT4NPcJNPkLNPUKCDXtIjEAiAgjVwAJSTXrI1s06yJVTUk17DTtIjEAiAgLVxIJSTXqI1s06iJVTQkLIjEAiAf2VwkJSTXqI1s06iJVTQg16zEAKDEAiAfeKTTrFlA16klXAAk06lBMVxIJUGYxACgxAIgHwik07RZQNepXABI06lBmNOw08Qg16jEAKDEAiAelKTTqFlA16VcJEjTpTFBmgAgAAAAAAAAKKzTqFjTrFlBQsDTqFjTrFlA1B4AEMY+lDjEAUDTxFlCwNP80/jT9NPw0+zT6NPk0+Ek07TT1NPEIMgY071cAETTuVwAINO5XCAhQNO5XEAFQUEIFnUkjDEAAwUg081cBCDXyNPRXABFJNfFXAAg08VcICFA08VcQAVA09FcREVA18DTwVxERNe+ACAAAAAAAAAikIjEAiAb0VwAJSTXuI1s07iJVTRYiMQCIBuBXCQlJNe4jWzTuIlVNFlBQsCIxAIgGyVcACUk17iNbNO4iVU0WIjEAiAa1VwkJSTXuI1s07iJVTRZQNQc0/zT+NP00/DT7NPo0+TTyFzT3NPY09TIGNPBXABE071cACDTvVwgIUDTvVxABUFBCBNZINPRXABFJNfJXAAg08lcICFA08lcQAVA09FcREVA18TTxVxERNfA08VcAETTwVwAINPBXCAhQNPBXEAFQUDXvNPUiEkEABiI17kIAEDT2NPg09wk0+Qs09QoINe4iMQCIBg5XAAlJNewjWzTsIlVNNe0xACgxAIgF9yk07TTuIjEAiAXsVxIJSTXsI1s07CJVTQkLIjEAiAXXVwkJSTXsI1s07CJVTQgWUDXsSVcACTTsUExXEglQZjEAKDEAiAWwKTTuFlA17FcAEjTsUGYxACgxAIgFmis17ElXAAk07FBMVxIJUGY071cRETXsgAgAAAAAAAAHRDTtFiSvUFCwNO0WJK9QNQeABOUi8dcxAFCwNP80/jT9NPw0+zT6NPk0+Ek07jT1MgY071cAETTsVwAINOxXCAhQNOxXEAFQUEIDk0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkkhBls1/yEHWzX+IQtbNf0hGVs1/IGAAVs1+0k1BTX6gATcqibeNPpQsDT7IhJBAAYiNflCABY0A4F4WzT8NAOBcFsJNP0LNPsKCDX5IjEAiATAVwAJSTX3I1s09yJVTTX4MQAoMQCIBKkpNPg0+SIxAIgEnlcSCUk19yNbNPciVU0JCyIxAIgEiVcJCUk19yNbNPciVU0IFlA190lXAAk091BMVxIJUGYxACgxAIgEYik0+RZQNfdXABI091BmMQAoMQCIBEwrNfdJVwAJNPdQTFcSCVBmgAgAAAAAAAANxjT4FiSvUFCwNPgWJK9QNQeABI/vbD0xAFCwNANXACA0/zT+NAMhCFs0AyEJWzQDIQpbNP00AyEMWzQDIQ1bNAMhGFs0/Ek0+TT7MgZCAtlIIQU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARhtKwMsDT/MQASRDT/NAMhBls0AyEHWzQDIQhbNAMhCVs0AyEKWzQDIQtbNAMhDFs0AyENWzIGQgLtSSEcDEAAAUhIJTQBEkQ0BEkiEkw0AhIRRChkNQOABJEnNPOwNANXACA0AyEGWzQDIQdbNAMhCFs0AyEJWzQDIQpbNAMhC1s0AyEMWzQDIQ1bMgZCApdJIRoMQAAJSSEbDEAAAUhISSMMQACESCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hB1s1/iEKWzX9V1AiNfyABJqLkXSwNPxXERE1+zT9NP6IAwU0/zEAEkQ0/zQDIQZbNP40AyEIWzQDIQlbNP00AyELWyIiIiIyBjT8VwARNPsiWzT9CBY0+1cICFA0+1cQAVBQQgEASCI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/JFs1/oEQWzX9gRhbNfwhBls1+yEHWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsCEOiAJTgRGvSTX5SVA1+DT/NP4TRDT4VwARNfckrzT3VwgIUDT3VxABUDT4VxERUDX2IQ6IAiGxIrIBIrISJbIQMgqyFDT/shGzNPZXERE19TT2VwARJK809VcICFA09VcQAVBQNfQhDogB7LEisgEishIlshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT0UChLAVcAcmdIIzUBMgY1AkIBYTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNPc0+g1BAEc08zT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT9FlA0/1AoSwFXAH9nKUsBV38TZ0ghBDUBMgY1AkIA+IAEXAZF+bA08zT0NPU09jT3NPg0+TT7NPw0/TT6NPs0/DT9NP5CAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXySTXxNPIWUDTzFlA09BZQNPUWUDT2FlA09xZQNPgWUDT5FlA0+hZQNPsWUDT8FlA0/RZQNP4WUChLAVcAf2cpSwFXfwlnSCQ1ATIGNQJCAGQ1/zX+Nf01/DX7Nfo1+TX4NfdJNfY09xZQNPgWUDT5FlA0+hZQNPsWUDT8FlA0/RZQNP4WUChLAVcAYGdIIQU1ATIGNQJCABwxGSEcEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/y0kxGGFAAAVIIQ+viShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
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
                "name": "v1489",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1490",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1492",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1493",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1494",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                "name": "v1489",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1490",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1492",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1493",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1494",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v3451",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_109",
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
                    "internalType": "struct T25",
                    "name": "_setTime0_109",
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
                    "internalType": "struct T25",
                    "name": "_stake0_109",
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
                    "internalType": "struct T25",
                    "name": "_unstake0_109",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_109",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1714",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1860",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2212",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2603",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3011",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3399",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3526",
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "withdrawn",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
        "internalType": "struct T16",
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
                "internalType": "bool",
                "name": "v3451",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_109",
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
                    "internalType": "struct T25",
                    "name": "_setTime0_109",
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
                    "internalType": "struct T25",
                    "name": "_stake0_109",
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
                    "internalType": "struct T25",
                    "name": "_unstake0_109",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_update0_109",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1714",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
        "internalType": "struct T9",
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
        "internalType": "address payable",
        "name": "v6386",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
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
        "internalType": "struct T9",
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
  Bytecode: `0x6080604052604051620054303803806200543083398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b614cd780620007596000396000f3fe6080604052600436106101175760003560e01c8063832307571161009a578063a7661d5411610061578063a7661d54146102a2578063ab53f2c6146102b5578063bb806dc9146102d8578063c798003714610338578063cadc2e7a1461034b57005b806383230757146102285780638f3c54f41461023d578063a05f990614610250578063a2e6204514610287578063a694fc3a1461028f57005b80633beb26c4116100de5780633beb26c4146101d25780633ccfd60b146101e55780634e71d92d146101ed578063633b7339146101f5578063817d57f31461020857005b80630ff1680e146101205780631e93b0f1146101605780632c10a1591461017f5780632e17de78146101925780633bc5b7bf146101a557005b3661011e57005b005b34801561012c57600080fd5b5061014061013b366004614220565b61036b565b604080518251815260209283015192810192909252015b60405180910390f35b34801561016c57600080fd5b506003545b604051908152602001610157565b61011e61018d366004614255565b610707565b6101406101a0366004614271565b61072b565b3480156101b157600080fd5b506101c56101c0366004614220565b610795565b60405161015791906142a0565b6101406101e0366004614271565b6107c1565b61014061082a565b610140610876565b61011e6102033660046142d7565b6108d2565b34801561021457600080fd5b506101c5610223366004614220565b6108f2565b34801561023457600080fd5b50600154610171565b61011e61024b366004614255565b610918565b34801561025c57600080fd5b50610265610938565b6040805182518152602080840151908201529181015190820152606001610157565b610140610d31565b61014061029d366004614271565b610d90565b61011e6102b0366004614255565b610dfa565b3480156102c157600080fd5b506102ca610e1a565b604051610157929190614315565b3480156102e457600080fd5b506102ed610eb7565b604051610157919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b61011e610346366004614255565b611202565b34801561035757600080fd5b506101c5610366366004614220565b611222565b60408051808201909152600080825260208201526001600054141561043a576000600280546103999061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546103c59061434f565b80156104125780601f106103e757610100808354040283529160200191610412565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b505050505080602001905181019061042a919061453a565b905061043860006009611248565b505b60046000541415610586576000600280546104549061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546104809061434f565b80156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b50505050508060200190518101906104e591906145e4565b9050610507604080516060810182526000602082018181529282015290815290565b60016105128561126e565b5160018111156105245761052461428a565b1461053057600061053e565b6105398461126e565b604001515b815152600161054c85611340565b51600181111561055e5761055e61428a565b1461056a576000610578565b61057384611340565b604001515b815160200152519392505050565b600760005414156105a0576000600280546104549061434f565b6008600054141561064b576000600280546105ba9061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546105e69061434f565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b50505050508060200190518101906104e59190614674565b600960005414156106f6576000600280546106659061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546106919061434f565b80156106de5780601f106106b3576101008083540402835291602001916106de565b820191906000526020600020905b8154815290600101906020018083116106c157829003601f168201915b50505050508060200190518101906104e59190614739565b61070260006009611248565b919050565b61070f613995565b610727610721368490038401846147f1565b826113cd565b5050565b6040805180820190915260008082526020820152610747613995565b61074f613a5e565b610757613a78565b604080516020808201835287825260808401919091526003835281518082019092528282528301526107898284611647565b50506060015192915050565b60408051606081018252600080825260208201819052918101919091526107bb8261126e565b92915050565b60408051808201909152600080825260208201526107dd613995565b6107e5613a5e565b6107ed613a78565b60408051602080820183528782528383019190915260018352815180820190925282825283015261081e8284611647565b50506020015192915050565b6040805180820190915260008082526020820152610846613995565b61084e613ac9565b604080516020808201909252600081529082015261086c8183612b03565b5060a00151919050565b6040805180820190915260008082526020820152610892613995565b61089a613a5e565b6108a2613a78565b6000602082810182905290825260408051808301909152828152908301526108ca8284611647565b505051919050565b6108da613995565b6107276108ec3684900384018461486b565b82611647565b60408051606081018252600080825260208201819052918101919091526107bb82612f4a565b610920613995565b6107276109323684900384018461492f565b82612b03565b61095c60405180606001604052806000815260200160008152602001600081525090565b60016000541415610a17576000600280546109769061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546109a29061434f565b80156109ef5780601f106109c4576101008083540402835291602001916109ef565b820191906000526020600020905b8154815290600101906020018083116109d257829003601f168201915b5050505050806020019051810190610a07919061453a565b9050610a1560006007611248565b505b60046000541415610b1157600060028054610a319061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5d9061434f565b8015610aaa5780601f10610a7f57610100808354040283529160200191610aaa565b820191906000526020600020905b815481529060010190602001808311610a8d57829003601f168201915b5050505050806020019051810190610ac291906145e4565b9050610aeb60408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60076000541415610b2b57600060028054610a319061434f565b60086000541415610c2657600060028054610b459061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b719061434f565b8015610bbe5780601f10610b9357610100808354040283529160200191610bbe565b820191906000526020600020905b815481529060010190602001808311610ba157829003601f168201915b5050505050806020019051810190610bd69190614674565b9050610bff60408051608081018252600060208201818152928201819052606082015290815290565b61012082015181515260e08201518151602001526101009091015181516040015251919050565b60096000541415610d2257600060028054610c409061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6c9061434f565b8015610cb95780601f10610c8e57610100808354040283529160200191610cb9565b820191906000526020600020905b815481529060010190602001808311610c9c57829003601f168201915b5050505050806020019051810190610cd19190614739565b9050610cfa60408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610d2e60006007611248565b90565b6040805180820190915260008082526020820152610d4d613995565b610d55613a5e565b610d5d613a78565b600060a08201526004815260408051602080820190925282815290830152610d858284611647565b505060800151919050565b6040805180820190915260008082526020820152610dac613995565b610db4613a5e565b610dbc613a78565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610dee8284611647565b50506040015192915050565b610e02613995565b610727610e14368490038401846147f1565b82612fd7565b600060606000546002808054610e2f9061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5b9061434f565b8015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b50505050509050915091509091565b610ebf613af3565b60016000541415610f7a57600060028054610ed99061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f059061434f565b8015610f525780601f10610f2757610100808354040283529160200191610f52565b820191906000526020600020905b815481529060010190602001808311610f3557829003601f168201915b5050505050806020019051810190610f6a919061453a565b9050610f7860006008611248565b505b6004600054141561108657600060028054610f949061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc09061434f565b801561100d5780601f10610fe25761010080835404028352916020019161100d565b820191906000526020600020905b815481529060010190602001808311610ff057829003601f168201915b505050505080602001905181019061102591906145e4565b905061102f613b34565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b600760005414156110a057600060028054610f949061434f565b6008600054141561114b576000600280546110ba9061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546110e69061434f565b80156111335780601f1061110857610100808354040283529160200191611133565b820191906000526020600020905b81548152906001019060200180831161111657829003601f168201915b50505050508060200190518101906110259190614674565b600960005414156111f6576000600280546111659061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546111919061434f565b80156111de5780601f106111b3576101008083540402835291602001916111de565b820191906000526020600020905b8154815290600101906020018083116111c157829003601f168201915b50505050508060200190518101906110259190614739565b610d2e60006008611248565b61120a613995565b61072761121c368490038401846147f1565b82613183565b60408051606081018252600080825260208201819052918101919091526107bb82611340565b816107275760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156112ba576112ba61428a565b1415611331576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112fb576112fb61428a565b600181111561130c5761130c61428a565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561138c5761138c61428a565b1415611331576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156112fb576112fb61428a565b6113dd600160005414600f611248565b81516113f89015806113f157508251600154145b6010611248565b60008080556002805461140a9061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546114369061434f565b80156114835780601f1061145857610100808354040283529160200191611483565b820191906000526020600020905b81548152906001019060200180831161146657829003601f168201915b505050505080602001905181019061149b919061453a565b90506114c460408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161150f3415600c611248565b60a082015160e0830151602001515161152891906149b5565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516115719161156a913391906132b7565b600d611248565b8151611589906001600160a01b03163314600e611248565b611591613b47565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015282850180516000908190528151909401849052805190940183905283519091019190915290514391015260e0830151825161162e91906001906132cf565b602082015160a0015261164081613343565b5050505050565b611657600960005414602e611248565b815161167290158061166b57508251600154145b602f611248565b6000808055600280546116849061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546116b09061434f565b80156116fd5780601f106116d2576101008083540402835291602001916116fd565b820191906000526020600020905b8154815290600101906020018083116116e057829003601f168201915b50505050508060200190518101906117159190614739565b905061171f613b95565b7ff8e8f30961aa778cf19da498cc624360a1aa9fbbb38aaf0e733a0d3c0e9e1b148460405161174e91906149cd565b60405180910390a160006020850151515160048111156117705761177061428a565b1415611b70576117823415601d611248565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516117be91906000906132cf565b81602001819052506117e06117d933846020015160006132b7565b601e611248565b6020818101805182015151604080850180519290925282518401518401518251850152825190930151830151815190151593019290925251905161182791906001906132cf565b816060018190525061184961184233846040015160006132b7565b601f611248565b61014082015161185f57600060808201526118a9565b8161014001518260c001518361010001518460e0015161187f9190614a36565b6118899190614a4d565b6118939190614a6c565b8261012001516118a391906149b5565b60808201525b60016118b43361126e565b5160018111156118c6576118c661428a565b146118d25760006118e0565b6118db3361126e565b604001515b60a0820152336000818152600560205260409020805460ff191660019081179091559061190c90611340565b51600181111561191e5761191e61428a565b1461192a576000611938565b61193333611340565b604001515b600161194333612f4a565b5160018111156119555761195561428a565b1461196157600061196f565b61196a33612f4a565b604001515b826080015161197e9190614a36565b8260a0015161198d9190614a4d565b61199791906149b5565b336000908152600560208181526040808420600180820196875560068452828620805460ff199081168317825560808a0151918301919091559484528154909416909317909255928290556060840180518401515160c0860180519190915281518501518501518151860152905184015182015190519015159082015260a084015160e085018051919091528051840192909252905181518151815290830151928101929092527f15fd4dea14b9df93d9c95ddb6279841154b25f9eef27bb1424cb0192e7947f22910160405180910390a160e081015183526040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a1611aab613b47565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c080880151865182015260e088018051858801805191909152905181519095019490945286820151845190950194909452610140870151835183015291514392019190915283015190830151611b5891906001906132cf565b602082015160a00152611b6a81613343565b50612afd565b6001602085015151516004811115611b8a57611b8a61428a565b1415611dfe576020808501515160400151610100830152611bad90341590611248565b6101608201805151516101208301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611bf291906000906132cf565b816101400181905250611c15611c0e33846020015160006132b7565b6021611248565b610140810180516020908101515161016084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611c6c90611c6590339060006132b7565b6022611248565b6001611c773361126e565b516001811115611c8957611c8961428a565b14611c95576000611ca3565b611c9e3361126e565b604001515b610180820151526001611cb533611340565b516001811115611cc757611cc761428a565b14611cd3576000611ce1565b611cdc33611340565b604001515b6101808201805160209081019290925251604080518251815291830151928201929092527f2a2d7cc2af188d08ba8210bdafeeaaa157fd507fd1360947f01186d01b5e5e08910160405180910390a16101808101516020840152611d43613b47565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015261010080870151518487018051919091529088015181519094019390935261012087015183519094019390935261014080870151835190920191909152905143920191909152820151610160830151611b5891906001906132cf565b6002602085015151516004811115611e1857611e1861428a565b141561225157602084015151606001516101a0820152611e3a34156023611248565b6101a0810151516101608301515151611e5391906149b5565b6101c0820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611e9391906000906132cf565b6101e082015260208201516101a082015151611ebc91611eb5913391906132b7565b6024611248565b6101e0810180516020908101515161020084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611f1390611f0c90339060006132b7565b6025611248565b610140820151611f2a576000610220820152611f75565b8161014001518260c001518361010001518460e00151611f4a9190614a36565b611f549190614a4d565b611f5e9190614a6c565b826101200151611f6e91906149b5565b6102208201525b6001611f803361126e565b516001811115611f9257611f9261428a565b14611f9e576000611fac565b611fa73361126e565b604001515b6102408201526001611fbd33611340565b516001811115611fcf57611fcf61428a565b14611fdb576000611fe9565b611fe433611340565b604001515b6001611ff433612f4a565b5160018111156120065761200661428a565b14612012576000612020565b61201b33612f4a565b604001515b8261022001516120309190614a36565b8261024001516120409190614a4d565b61204a91906149b5565b61026082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556102208301519101556101a0810151516102408201516120ac91906149b5565b610280820190815233600090815260046020908152604091829020805460ff191660019081178255935193018390556102a084018051939093526102608401518351820152915181518151815290830151928101929092527fb1f13249deac3a28bf50d1ad02ad94157c84e0b9fe2a1e6928bfd3ed1ba429e5910160405180910390a16102a08101516040808501919091526101a082015151815133815260208101919091527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a1612185613b47565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501805182850180519190915290518151909201919091526102208401519051909101526101a08201515161014084015161222391906149b5565b6020820180516060019190915251436080909101526101e0820151610200830151611b5891906001906132cf565b600360208501515151600481111561226b5761226b61428a565b141561273e57602084015151608001516102c082015261228d34156026611248565b6101608201805151516102e083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516122d291906000906132cf565b8161030001819052506122f56122ee33846020015160006132b7565b6027611248565b610300810180516020908101515161032084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161234091906001906132cf565b81610340018190525061236361235c33846040015160006132b7565b6028611248565b600161236e3361126e565b5160018111156123805761238061428a565b1461238c57600061239a565b6123953361126e565b604001515b61036082018190526102c0820151516123b69110156029611248565b61034081015151516102c0820151516123d2911015602a611248565b6101408201516123e9576000610380820152612434565b8161014001518260c001518361010001518460e001516124099190614a36565b6124139190614a4d565b61241d9190614a6c565b82610120015161242d91906149b5565b6103808201525b600161243f33611340565b5160018111156124515761245161428a565b1461245d57600061246b565b61246633611340565b604001515b600161247633612f4a565b5160018111156124885761248861428a565b146124945760006124a2565b61249d33612f4a565b604001515b8261038001516124b29190614a36565b8261036001516124c29190614a4d565b6124cc91906149b5565b6103a082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556103808301519101556102c08101515161036082015161252e9190614a36565b6103c08201908152336000908152600460205260409020805460ff19166001908117825591519101556102c08101515161034082015151516125709190614a36565b6103e082018051919091526103408201805151602090810151835182015290515160409081015192519215159201919091528201516102c0820151516125b891903390613541565b6103c081015161040082018051919091526103a0820151815160200152516040517f24b5bd8dbb49c946c47f88f15eaebf17f3cdcddd77441c32c7033472fa676dfb9161261691815181526020918201519181019190915260400190565b60405180910390a161040081015160608401526102c0810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a1612672613b47565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501805182850180519190915290518151909201919091526103808401519051909101526102c0820151516101408401516127109190614a36565b6020820180516060019190915251436080909101526103408201516103e0830151611b5891906000906132cf565b60046020850151515160048111156127585761275861428a565b1415612afd5761276a3415602b611248565b61016082018051515161042083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516127af91906000906132cf565b8161044001819052506127d26127cb33846020015160006132b7565b602c611248565b6104408101805160209081015151610460840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516128299061282290339060006132b7565b602d611248565b61014082015161284057600061048082015261288b565b8161014001518260c001518361010001518460e001516128609190614a36565b61286a9190614a4d565b6128749190614a6c565b82610120015161288491906149b5565b6104808201525b60016128963361126e565b5160018111156128a8576128a861428a565b146128b45760006128c2565b6128bd3361126e565b604001515b6104a082015260016128d333611340565b5160018111156128e5576128e561428a565b146128f15760006128ff565b6128fa33611340565b604001515b600161290a33612f4a565b51600181111561291c5761291c61428a565b14612928576000612936565b61293133612f4a565b604001515b8261048001516129469190614a36565b826104a001516129569190614a4d565b61296091906149b5565b6104c08201908152336000908152600560209081526040808320805460ff199081166001908117835586519281019290925560068452938290208054909416811784556104808601519301929092556104a08401516104e0850180519190915292518351820152915181518151815290830151928101929092527fdb2da844802f7b5a64b1c29883ad31e1167790ee7710ecbf6f7910e861774ea3910160405180910390a16104e081015160808401526040513381527f1d2f67e3c99742b6b589e3af77fe96ec360dc58b8dca7d3d9a6ee9b64385a2e89060200160405180910390a1612a4b613b47565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e08701805184870180519190915290518151909401939093526104808601518351909401939093526101408601518251909101525143910152610440820151610460830151611b5891906001906132cf565b50505050565b612b13600860005414601b611248565b8151612b2e901580612b2757508251600154145b601c611248565b600080805560028054612b409061434f565b80601f0160208091040260200160405190810160405280929190818152602001828054612b6c9061434f565b8015612bb95780601f10612b8e57610100808354040283529160200191612bb9565b820191906000526020600020905b815481529060010190602001808311612b9c57829003601f168201915b5050505050806020019051810190612bd19190614674565b9050612bdb613ee4565b6040805185518152602080870151511515908201527f95d14771a61c185c15a65462137c4d5f7abf51a320d999d012bcef729f0c206b910160405180910390a1612c2734156018611248565b612c41612c3a33846020015160006132b7565b6019611248565b612c5b612c5433846040015160006132b7565b601a611248565b6101a0820151612c6e5760008152612cb6565b816101a001518260c00151836101600151846101400151612c8f9190614a36565b612c999190614a4d565b612ca39190614a6c565b826101800151612cb391906149b5565b81525b6001612cc13361126e565b516001811115612cd357612cd361428a565b14612cdf576000612ced565b612ce83361126e565b604001515b60208281019190915233600081815260059092526040909120805460ff1916600190811790915590612d1e90611340565b516001811115612d3057612d3061428a565b14612d3c576000612d4a565b612d4533611340565b604001515b6001612d5533612f4a565b516001811115612d6757612d6761428a565b14612d73576000612d81565b612d7c33612f4a565b604001515b8251612d8d9190614a36565b8260200151612d9c9190614a4d565b612da691906149b5565b336000908152600560208181526040808420600180820196875560068452828620805460ff1990811683178255895191830191909155948452815490941690931790925592829055838301518482018051919091528051840192909252905181518151815290830151928101929092527f692b0ea85aeef4f9c8ddc08dcaa146969e1e621ce8d231ebcd8e3bb31944b011910160405180910390a160408181015160a0850152513381527f6ef61092eb83658ef4afcd786b2dc341ac3fe0f3fb37986e9dbbdacb546749429060200160405180910390a1612e85613f1a565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015260e080880151865190910152610100808801518651909101526101208088015186519091015261014087018051848701805191909152905181519094019390935285518351909401939093526101a0860151825190910152514391015261164081613555565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115612f9657612f9661428a565b1415611331576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156112fb576112fb61428a565b612fe76004600054146012611248565b8151613002901580612ffb57508251600154145b6013611248565b6000808055600280546130149061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546130409061434f565b801561308d5780601f106130625761010080835404028352916020019161308d565b820191906000526020600020905b81548152906001019060200180831161307057829003601f168201915b50505050508060200190518101906130a591906145e4565b60408051855181526020808701511515908201529192507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a16130f334156011611248565b6130fb613fcd565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451931692019190915260608084015183519091015260808084015183519091015260a08084015183519091015260c08084015183519091015260e08084015183519091015261010080840151835190910152810151439052612afd816136a7565b6131936007600054146016611248565b81516131ae9015806131a757508251600154145b6017611248565b6000808055600280546131c09061434f565b80601f01602080910402602001604051908101604052809291908181526020018280546131ec9061434f565b80156132395780601f1061320e57610100808354040283529160200191613239565b820191906000526020600020905b81548152906001019060200180831161321c57829003601f168201915b505050505080602001905181019061325191906145e4565b60408051855181526020808701511515908201529192507f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf41562759910160405180910390a161329f34156014611248565b80516130f3906001600160a01b031633146015611248565b60006132c5838530856137aa565b90505b9392505050565b6132d7613ffb565b60005b6002811015613323578481600281106132f5576132f5614989565b602002015182826002811061330c5761330c614989565b60200201528061331b81614a8e565b9150506132da565b508181846002811061333757613337614989565b60200201529392505050565b60208101515181516080015111156134315761335d614046565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152855160c0908101519086015282860180515160e08701528051840151610100870152805185015161012087015280519092015161014086015290510151610160840152600960005543600155905161340891839101614ae7565b6040516020818303038152906040526002908051906020019061342c9291906140c2565b505050565b6040517fde386e12d6c97acd73514c71490d6d5114424ddc93ef1080bd05ffe08c20868d90600090a1613462613f1a565b81515181516001600160a01b0391821690528251602090810151835190831690820152835160409081015184519316928101929092528351606090810151845182015284516080908101518551820152855160a090810151865190910152855160c0908101518651909101528286018051840151865160e00152805185015186516101000152805183015186516101200152805151848701805191909152815185015181519095019490945280518501518451909501949094528351820151835190920191909152915182015190519091015261072781613555565b50565b61354c838383613884565b61342c57600080fd5b6135e2604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101519085015284516101209081015190850152818501805151610140860152805183015161016086015280518401516101808601525101516101a0840152600860005543600155905161340891839101614ba0565b6136af614146565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152835160809081015190840152835160a09081015190840152835160c09081015190840152835160e090810151908401528351610100908101519084015260076000554360015590516134089183910181516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161381191614c68565b60006040518083038185875af1925050503d806000811461384e576040519150601f19603f3d011682016040523d82523d6000602084013e613853565b606091505b509150915061386482826001613955565b50808060200190518101906138799190614c84565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916138e391614c68565b60006040518083038185875af1925050503d8060008114613920576040519150601f19603f3d011682016040523d82523d6000602084013e613925565b606091505b509150915061393682826002613955565b508080602001905181019061394b9190614c84565b9695505050505050565b606083156139645750816132c8565b8251156139745782518084602001fd5b60405163100960cb60e01b815260048101839052602401611265565b905290565b604080516101008101909152600060c0820181815260e0830191909152819081526020016139d6604051806040016040528060008152602001600081525090565b81526020016139f8604051806040016040528060008152602001600081525090565b8152602001613a1a604051806040016040528060008152602001600081525090565b8152602001613a3c604051806040016040528060008152602001600081525090565b8152602001613990604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016139906141ad565b6040805160c081018252600080825260208083018290528351808201855282815283850152835180820185528281526060840152835190810190935282529060808201908152600060209091015290565b60405180604001604052806000815260200161399060405180602001604052806000151581525090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280613990613af3565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252908152602081016139906141c0565b604080516105608101909152600061050082018181526105208301829052610540830191909152815260208101613bca613ffb565b81526040805160608101825260008082526020828101829052928201529101908152602001613bf7613ffb565b81526020016000815260200160008152602001613c30604051806060016040528060008152602001600081526020016000151581525090565b8152602001613c52604051806040016040528060008152602001600081525090565b8152602001613c6d6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613c9a613ffb565b81526040805160608101825260008082526020828101829052928201529101908152602001613cdc604051806040016040528060008152602001600081525090565b8152602001613cf76040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613d24613ffb565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200160008152602001613d82604051806040016040528060008152602001600081525090565b8152602001613d9d6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613dca613ffb565b81526040805160608101825260008082526020828101829052928201529101908152602001613df7613ffb565b815260200160008152602001600081526020016000815260200160008152602001613e3e604051806060016040528060008152602001600081526020016000151581525090565b8152602001613e60604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613e8d613ffb565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001613990604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001613990604051806040016040528060008152602001600081525090565b6040518060400160405280613f9660405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526020016139906040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040518060400160405280613fe0614146565b81526020016139906040518060200160405280600081525090565b60405180604001604052806002905b614030604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161400a5790505090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613990613ffb565b8280546140ce9061434f565b90600052602060002090601f0160209004810192826140f05760008555614136565b82601f1061410957805160ff1916838001178555614136565b82800160010185558215614136579182015b8281111561413657825182559160200191906001019061411b565b506141429291506141f6565b5090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280613990613a78565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001613990613ffb565b5b8082111561414257600081556001016141f7565b6001600160a01b038116811461353e57600080fd5b60006020828403121561423257600080fd5b81356132c88161420b565b60006040828403121561424f57600080fd5b50919050565b60006040828403121561426757600080fd5b6132c8838361423d565b60006020828403121561428357600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106142b7576142b761428a565b808352506020830151151560208301526040830151604083015292915050565b600060e0828403121561424f57600080fd5b60005b838110156143045781810151838201526020016142ec565b83811115612afd5750506000910152565b828152604060208201526000825180604084015261433a8160608501602087016142e9565b601f01601f1916919091016060019392505050565b600181811c9082168061436357607f821691505b6020821081141561424f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156143bd576143bd614384565b60405290565b6040516060810167ffffffffffffffff811182821017156143bd576143bd614384565b604051610120810167ffffffffffffffff811182821017156143bd576143bd614384565b6040516101c0810167ffffffffffffffff811182821017156143bd576143bd614384565b604051610180810167ffffffffffffffff811182821017156143bd576143bd614384565b6040516020810167ffffffffffffffff811182821017156143bd576143bd614384565b60405160c0810167ffffffffffffffff811182821017156143bd576143bd614384565b80516107028161420b565b801515811461353e57600080fd5b600082601f8301126144c257600080fd5b6144ca61439a565b8060c08401858111156144dc57600080fd5b845b8181101561452f57606081880312156144f75760008081fd5b6144ff6143c3565b815181526020808301518183015260408084015161451c816144a3565b90830152908552909301926060016144de565b509095945050505050565b60006101a0828403121561454d57600080fd5b604051610100810181811067ffffffffffffffff8211171561457157614571614384565b604052825161457f8161420b565b815261458d60208401614498565b602082015261459e60408401614498565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526145d88460e085016144b1565b60e08201529392505050565b600061012082840312156145f757600080fd5b6145ff6143e6565b61460883614498565b815261461660208401614498565b602082015261462760408401614498565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006101c0828403121561468757600080fd5b61468f61440a565b61469883614498565b81526146a660208401614498565b60208201526146b760408401614498565b6040820152606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a0928301519281019290925250919050565b6000610220828403121561474c57600080fd5b61475461442e565b61475d83614498565b815261476b60208401614498565b602082015261477c60408401614498565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101606147e6858286016144b1565b908201529392505050565b60006040828403121561480357600080fd5b61480b61439a565b82358152602083013561481d816144a3565b60208201529392505050565b60006020828403121561483b57600080fd5b6040516020810181811067ffffffffffffffff8211171561485e5761485e614384565b6040529135825250919050565b600081830360e081121561487e57600080fd5b61488661439a565b8335815260c0601f198301121561489c57600080fd5b6148a4614452565b91506148ae614475565b6020850135600581106148c057600080fd5b815260408501356148d0816144a3565b60208201526148e28660608701614829565b60408201526148f48660808701614829565b60608201526149068660a08701614829565b608082015260c0850135614919816144a3565b60a0820152825260208101919091529392505050565b6000818303604081121561494257600080fd5b61494a61439a565b833581526020601f198301121561496057600080fd5b614968614452565b91506020840135614978816144a3565b825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156149c8576149c861499f565b500190565b81518152602082015151805160e083019190600581106149ef576149ef61428a565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a084015260a0810151151560c08401525092915050565b600082821015614a4857614a4861499f565b500390565b6000816000190483118215151615614a6757614a6761499f565b500290565b600082614a8957634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415614aa257614aa261499f565b5060010190565b8060005b6002811015612afd578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614aad565b81516001600160a01b0316815261022081016020830151614b1360208401826001600160a01b03169052565b506040830151614b2e60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151614b9882850182614aa9565b505092915050565b81516001600160a01b031681526101c081016020830151614bcc60208401826001600160a01b03169052565b506040830151614be760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a080840151818401525092915050565b60008251614c7a8184602087016142e9565b9190910192915050565b600060208284031215614c9657600080fd5b81516132c8816144a356fea264697066735822122031470d981d3b6784af2fa163046161a4c7a0b1d7c46c22f42be5dcf914faf9f764736f6c634300080c0033`,
  BytecodeLen: 21552,
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
    at: './index.rsh:145:11:after expr stmt semicolon',
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
  6: {
    at: './index.rsh:370:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:369:26:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:342:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:244:21:after expr stmt semicolon',
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
  "update": update,
  "withdraw": withdraw
  };
export const _APIs = {
  claim: claim,
  setTime: setTime,
  stake: stake,
  unstake: unstake,
  update: update,
  withdraw: withdraw
  };

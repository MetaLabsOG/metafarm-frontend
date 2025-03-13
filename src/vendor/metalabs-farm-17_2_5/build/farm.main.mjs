// Automatically generated with Reach 0.1.11 (2d125008)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (2d125008)';
export const _backendVersion = 17;

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
    unstaked: [ctc0, ctc1]
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
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc2], ['lastUpdateBlock', ctc2], ['rewardPerTokenStored', ctc6], ['rewardsPaid', ctc2]]);
  const ctc8 = stdlib.T_Struct([['stakeToken', ctc1], ['rewardToken', ctc1], ['beginBlock', ctc2], ['endBlock', ctc2], ['rewardPerBlock', ctc2], ['stakeFee', ctc2], ['unstakeFee', ctc2], ['lockLengthBlocks', ctc2]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc2], ['reward', ctc2], ['lockTimestamp', ctc2], ['rewardPerTokenPaid', ctc6]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc2
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
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1623, v1626] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async () => {
              
              const v4417 = {
                lastUpdateBlock: v1647,
                rewardPerTokenStored: v1648,
                rewardsPaid: v1649,
                totalStaked: v1650
                };
              
              return v4417;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async () => {
              
              const v1668 = {
                lastUpdateBlock: v1647,
                rewardPerTokenStored: v1648,
                rewardsPaid: v1649,
                totalStaked: v1650
                };
              
              return v1668;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1623, v1626] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async () => {
              
              const v4416 = {
                beginBlock: v1600,
                endBlock: v1601,
                lockLengthBlocks: v1603,
                rewardPerBlock: v1602,
                rewardToken: v1599,
                stakeFee: v1604,
                stakeToken: v1598,
                unstakeFee: v1605
                };
              
              return v4416;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async () => {
              
              const v1667 = {
                beginBlock: v1600,
                endBlock: v1601,
                lockLengthBlocks: v1603,
                rewardPerBlock: v1602,
                rewardToken: v1599,
                stakeFee: v1604,
                stakeToken: v1598,
                unstakeFee: v1605
                };
              
              return v1667;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1623, v1626] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async (_v4418 ) => {
                const v4418 = stdlib.protect(ctc0, _v4418, null);
              
              const v4419 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v4418), null);
              const v4420 = stdlib.fromSome(v4419, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
              const v4421 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v4418), null);
              const v4422 = stdlib.fromSome(v4421, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
              const v4423 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v4418), null);
              const v4424 = stdlib.fromSome(v4423, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
              const v4425 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v4418), null);
              const v4426 = stdlib.fromSome(v4425, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v4427 = {
                lockTimestamp: v4424,
                reward: v4422,
                rewardPerTokenPaid: v4426,
                staked: v4420
                };
              
              return v4427;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = svs;
            return (await ((async (_v1669 ) => {
                const v1669 = stdlib.protect(ctc0, _v1669, null);
              
              const v1670 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1669), null);
              const v1671 = stdlib.fromSome(v1670, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
              const v1672 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1669), null);
              const v1673 = stdlib.fromSome(v1672, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
              const v1674 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v1669), null);
              const v1675 = stdlib.fromSome(v1674, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
              const v1676 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v1669), null);
              const v1677 = stdlib.fromSome(v1676, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v1678 = {
                lockTimestamp: v1675,
                reward: v1673,
                rewardPerTokenPaid: v1677,
                staked: v1671
                };
              
              return v1678;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc5, ctc2],
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc2, ctc6, ctc2, ctc2, ctc5, ctc2]
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    beginBlock: ctc1,
    endBlock: ctc1,
    isDevEnv: ctc5,
    lockLengthBlocks: ctc1,
    rewardPerBlock: ctc1,
    rewardToken: ctc6,
    stakeFee: ctc1,
    stakeToken: ctc6,
    unstakeFee: ctc1
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_163: ctc8,
    recalculateRewards0_163: ctc8,
    setTime0_163: ctc9,
    stake0_163: ctc9,
    unstake0_163: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc3]]);
  const ctc12 = stdlib.T_Address;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1566 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1567 = [v1566, v1566];
  const v1573 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './farm.rsh:133:38:application',
    fs: ['at ./farm.rsh:122:15:application call to [unknown function] (defined at: ./farm.rsh:122:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1574 = v1573.beginBlock;
  const v1575 = v1573.endBlock;
  const v1576 = v1573.isDevEnv;
  const v1577 = v1573.lockLengthBlocks;
  const v1578 = v1573.rewardPerBlock;
  const v1579 = v1573.rewardToken;
  const v1580 = v1573.stakeFee;
  const v1581 = v1573.stakeToken;
  const v1582 = v1573.unstakeFee;
  const v1592 = stdlib.tokenEq(v1581, v1579);
  const v1593 = v1592 ? false : true;
  stdlib.assert(v1593, {
    at: './farm.rsh:136:11:application',
    fs: ['at ./farm.rsh:122:15:application call to [unknown function] (defined at: ./farm.rsh:122:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1594 = stdlib.lt(v1574, v1575);
  stdlib.assert(v1594, {
    at: './farm.rsh:138:11:application',
    fs: ['at ./farm.rsh:122:15:application call to [unknown function] (defined at: ./farm.rsh:122:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1595 = stdlib.lt(v1580, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v1595, {
    at: './farm.rsh:140:11:application',
    fs: ['at ./farm.rsh:122:15:application call to [unknown function] (defined at: ./farm.rsh:122:19:function exp)'],
    msg: 'Entrance fee cannot be 100% or more',
    who: 'Creator'
    });
  const v1596 = stdlib.lt(v1582, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
  stdlib.assert(v1596, {
    at: './farm.rsh:141:11:application',
    fs: ['at ./farm.rsh:122:15:application call to [unknown function] (defined at: ./farm.rsh:122:19:function exp)'],
    msg: 'Exit fee cannot be 100% or more',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1581, v1579, v1574, v1575, v1578, v1577, v1580, v1582, v1576],
    evt_cnt: 9,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:144:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606], secs: v1608, time: v1607, didSend: v62, from: v1597 } = txn1;
      
      const v1611 = v1567[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0')];
      const v1613 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
      const v1614 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
      const v1615 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1613, v1614];
      const v1616 = stdlib.Array_set(v1567, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0'), v1615);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1598
        });
      const v1618 = v1616[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
      const v1620 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
      const v1621 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
      const v1622 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1620, v1621];
      const v1623 = stdlib.Array_set(v1616, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1'), v1622);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1599
        });
      ;
      const v1625 = stdlib.sub(v1601, v1600);
      const v1626 = stdlib.mul(v1625, v1602);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606], secs: v1608, time: v1607, didSend: v62, from: v1597 } = txn1;
  const v1609 = stdlib.tokenEq(v1598, v1599);
  const v1610 = v1609 ? false : true;
  stdlib.assert(v1610, {
    at: './farm.rsh:144:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1611 = v1567[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0')];
  const v1613 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1614 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
  const v1615 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1613, v1614];
  const v1616 = stdlib.Array_set(v1567, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0'), v1615);
  ;
  const v1618 = v1616[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1620 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1621 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
  const v1622 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1620, v1621];
  const v1623 = stdlib.Array_set(v1616, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1'), v1622);
  ;
  ;
  const v1625 = stdlib.sub(v1601, v1600);
  const v1626 = stdlib.mul(v1625, v1602);
  const txn2 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1623, v1626],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1607,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '0'), [[v1626, v1599]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v1629, time: v1628, didSend: v71, from: v1627 } = txn2;
      
      ;
      const v1630 = v1623[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
      const v1631 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '0')];
      const v1632 = stdlib.add(v1631, v1626);
      const v1635 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
      const v1636 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '2')];
      const v1637 = [v1632, v1635, v1636];
      const v1638 = stdlib.Array_set(v1623, stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1'), v1637);
      sim_r.txns.push({
        amt: v1626,
        kind: 'to',
        tok: v1599
        });
      
      const v1645 = v1606 ? stdlib.checkedBigNumberify('./farm.rsh:188:33:decimal', stdlib.UInt_max, '0') : v1628;
      const v1646 = v1645;
      const v1647 = stdlib.checkedBigNumberify('./farm.rsh:196:26:decimal', stdlib.UInt_max, '0');
      const v1648 = stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v1649 = stdlib.checkedBigNumberify('./farm.rsh:196:33:decimal', stdlib.UInt_max, '0');
      const v1650 = stdlib.checkedBigNumberify('./farm.rsh:196:23:decimal', stdlib.UInt_max, '0');
      const v1651 = v1628;
      const v1657 = v1638;
      const v1658 = stdlib.checkedBigNumberify('./farm.rsh:120:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc12, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc14, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1629, time: v1628, didSend: v71, from: v1627 } = txn2;
  ;
  const v1630 = v1623[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
  const v1631 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '0')];
  const v1632 = stdlib.add(v1631, v1626);
  const v1635 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
  const v1636 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '2')];
  const v1637 = [v1632, v1635, v1636];
  const v1638 = stdlib.Array_set(v1623, stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1'), v1637);
  ;
  const v1639 = stdlib.addressEq(v1597, v1627);
  stdlib.assert(v1639, {
    at: './farm.rsh:158:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './farm.rsh:176:22:application',
    fs: ['at ./farm.rsh:175:7:application call to [unknown function] (defined at: ./farm.rsh:175:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v1645 = v1606 ? stdlib.checkedBigNumberify('./farm.rsh:188:33:decimal', stdlib.UInt_max, '0') : v1628;
  let v1646 = v1645;
  let v1647 = stdlib.checkedBigNumberify('./farm.rsh:196:26:decimal', stdlib.UInt_max, '0');
  let v1648 = stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1649 = stdlib.checkedBigNumberify('./farm.rsh:196:33:decimal', stdlib.UInt_max, '0');
  let v1650 = stdlib.checkedBigNumberify('./farm.rsh:196:23:decimal', stdlib.UInt_max, '0');
  let v1651 = v1628;
  let v1657 = v1638;
  let v1658 = stdlib.checkedBigNumberify('./farm.rsh:120:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn3;
    switch (v1863[0]) {
      case 'claim0_163': {
        const v1866 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v1943 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1944 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1948 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1949 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v1950 = [v1944, v1948, v1949];
        const v1951 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v1950);
        ;
        const v1952 = v1951[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1953 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1957 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1958 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v1959 = [v1953, v1957, v1958];
        const v1960 = stdlib.Array_set(v1951, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v1959);
        ;
        const v1962 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v1963 = stdlib.fromSome(v1962, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v1964 = v1960[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '1')];
        const v1965 = v1964[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '0')];
        const v1966 = stdlib.lt(v1963, v1965);
        stdlib.assert(v1966, {
          at: './farm.rsh:350:16:application',
          fs: ['at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)'],
          msg: 'tried to claim more than contract has',
          who: 'Creator'
          });
        let v1967;
        let v1968;
        if (v1606) {
          v1968 = v1646;
          }
        else {
          const v1970 = stdlib.lt(v1864, v1646);
          const v1971 = v1970 ? v1646 : v1864;
          v1968 = v1971;
          }
        const v1972 = stdlib.lt(v1968, v1601);
        let v1973;
        if (v1606) {
          v1973 = v1646;
          }
        else {
          const v1975 = stdlib.lt(v1864, v1646);
          const v1976 = v1975 ? v1646 : v1864;
          v1973 = v1976;
          }
        const v1977 = v1972 ? v1973 : v1601;
        const v1978 = stdlib.sub(v1977, v1647);
        const v1979 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v1979) {
          v1967 = v1648;
          }
        else {
          const v1980 = stdlib.cast("UInt", "UInt256", v1978, false);
          const v1981 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v1982 = stdlib.mul256(v1980, v1981);
          const v1983 = stdlib.mul256(v1982, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v1984 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v1985 = stdlib.div256(v1983, v1984);
          const v1986 = stdlib.add256(v1648, v1985);
          v1967 = v1986;
          }
        const v1987 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v1988 = stdlib.fromSome(v1987, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v1989 = stdlib.cast("UInt", "UInt256", v1988, false);
        const v1990 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v1991 = stdlib.fromSome(v1990, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1992 = stdlib.sub256(v1967, v1991);
        const v1993 = stdlib.mul256(v1989, v1992);
        const v1994 = stdlib.div256(v1993, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v1995 = stdlib.cast("UInt256", "UInt", v1994, false);
        const v1998 = stdlib.add(v1995, v1963);
        await stdlib.mapSet(map1, v1862, v1998);
        await stdlib.mapSet(map3, v1862, v1967);
        let v1999;
        if (v1606) {
          v1999 = v1646;
          }
        else {
          const v2001 = stdlib.lt(v1864, v1646);
          const v2002 = v2001 ? v1646 : v1864;
          v1999 = v2002;
          }
        const v2003 = stdlib.lt(v1999, v1601);
        let v2004;
        if (v1606) {
          v2004 = v1646;
          }
        else {
          const v2006 = stdlib.lt(v1864, v1646);
          const v2007 = v2006 ? v1646 : v1864;
          v2004 = v2007;
          }
        const v2008 = v2003 ? v2004 : v1601;
        const v2010 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v2011 = stdlib.fromSome(v2010, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v2012 = stdlib.add(v2011, v1603);
        let v2013;
        if (v1606) {
          v2013 = v1646;
          }
        else {
          const v2015 = stdlib.lt(v1864, v1646);
          const v2016 = v2015 ? v1646 : v1864;
          v2013 = v2016;
          }
        const v2017 = stdlib.le(v2012, v2013);
        if (v2017) {
          let v2018;
          if (v1606) {
            v2018 = v1646;
            }
          else {
            const v2020 = stdlib.lt(v1864, v1646);
            const v2021 = v2020 ? v1646 : v1864;
            v2018 = v2021;
            }
          await stdlib.mapSet(map2, v1862, v2018);
          const v2024 = v1998;
          await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:358:27:decimal', stdlib.UInt_max, '0'));
          await txn3.getOutput('claim', 'v2024', ctc1, v2024);
          const v2032 = stdlib.lt(v1998, v1965);
          if (v2032) {
            const v2038 = stdlib.sub(v1965, v1998);
            const v2041 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1')];
            const v2042 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '2')];
            const v2043 = [v2038, v2041, v2042];
            const v2044 = stdlib.Array_set(v1960, stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1'), v2043);
            ;
            null;
            const v2045 = stdlib.add(v1649, v1998);
            let v2046;
            if (v1606) {
              v2046 = v1646;
              }
            else {
              const v2048 = stdlib.lt(v1864, v1646);
              const v2049 = v2048 ? v1646 : v1864;
              v2046 = v2049;
              }
            const cv1646 = v2046;
            const cv1647 = v2008;
            const cv1648 = v1967;
            const cv1649 = v2045;
            const cv1650 = v1650;
            const cv1651 = v1864;
            const cv1657 = v2044;
            const cv1658 = v1658;
            
            v1646 = cv1646;
            v1647 = cv1647;
            v1648 = cv1648;
            v1649 = cv1649;
            v1650 = cv1650;
            v1651 = cv1651;
            v1657 = cv1657;
            v1658 = cv1658;
            
            continue;}
          else {
            null;
            const v2057 = stdlib.add(v1649, v1998);
            let v2058;
            if (v1606) {
              v2058 = v1646;
              }
            else {
              const v2060 = stdlib.lt(v1864, v1646);
              const v2061 = v2060 ? v1646 : v1864;
              v2058 = v2061;
              }
            const cv1646 = v2058;
            const cv1647 = v2008;
            const cv1648 = v1967;
            const cv1649 = v2057;
            const cv1650 = v1650;
            const cv1651 = v1864;
            const cv1657 = v1960;
            const cv1658 = v1658;
            
            v1646 = cv1646;
            v1647 = cv1647;
            v1648 = cv1648;
            v1649 = cv1649;
            v1650 = cv1650;
            v1651 = cv1651;
            v1657 = cv1657;
            v1658 = cv1658;
            
            continue;}}
        else {
          const v2069 = stdlib.checkedBigNumberify('./farm.rsh:374:20:decimal', stdlib.UInt_max, '0');
          await txn3.getOutput('claim', 'v2069', ctc1, v2069);
          let v2075;
          if (v1606) {
            v2075 = v1646;
            }
          else {
            const v2077 = stdlib.lt(v1864, v1646);
            const v2078 = v2077 ? v1646 : v1864;
            v2075 = v2078;
            }
          const cv1646 = v2075;
          const cv1647 = v2008;
          const cv1648 = v1967;
          const cv1649 = v1649;
          const cv1650 = v1650;
          const cv1651 = v1864;
          const cv1657 = v1960;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        break;
        }
      case 'recalculateRewards0_163': {
        const v2376 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v2453 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2454 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2458 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2459 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2460 = [v2454, v2458, v2459];
        const v2461 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2460);
        ;
        const v2462 = v2461[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2463 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2467 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2468 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2469 = [v2463, v2467, v2468];
        const v2470 = stdlib.Array_set(v2461, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2469);
        ;
        let v2597;
        let v2598;
        if (v1606) {
          v2598 = v1646;
          }
        else {
          const v2600 = stdlib.lt(v1864, v1646);
          const v2601 = v2600 ? v1646 : v1864;
          v2598 = v2601;
          }
        const v2602 = stdlib.lt(v2598, v1601);
        let v2603;
        if (v1606) {
          v2603 = v1646;
          }
        else {
          const v2605 = stdlib.lt(v1864, v1646);
          const v2606 = v2605 ? v1646 : v1864;
          v2603 = v2606;
          }
        const v2607 = v2602 ? v2603 : v1601;
        const v2608 = stdlib.sub(v2607, v1647);
        const v2609 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v2609) {
          v2597 = v1648;
          }
        else {
          const v2610 = stdlib.cast("UInt", "UInt256", v2608, false);
          const v2611 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v2612 = stdlib.mul256(v2610, v2611);
          const v2613 = stdlib.mul256(v2612, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2614 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v2615 = stdlib.div256(v2613, v2614);
          const v2616 = stdlib.add256(v1648, v2615);
          v2597 = v2616;
          }
        const v2617 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v2618 = stdlib.fromSome(v2617, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v2619 = stdlib.cast("UInt", "UInt256", v2618, false);
        const v2620 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2622 = stdlib.sub256(v2597, v2621);
        const v2623 = stdlib.mul256(v2619, v2622);
        const v2624 = stdlib.div256(v2623, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2625 = stdlib.cast("UInt256", "UInt", v2624, false);
        const v2626 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v2628 = stdlib.add(v2625, v2627);
        await stdlib.mapSet(map1, v1862, v2628);
        await stdlib.mapSet(map3, v1862, v2597);
        let v2629;
        if (v1606) {
          v2629 = v1646;
          }
        else {
          const v2631 = stdlib.lt(v1864, v1646);
          const v2632 = v2631 ? v1646 : v1864;
          v2629 = v2632;
          }
        const v2633 = stdlib.lt(v2629, v1601);
        let v2634;
        if (v1606) {
          v2634 = v1646;
          }
        else {
          const v2636 = stdlib.lt(v1864, v1646);
          const v2637 = v2636 ? v1646 : v1864;
          v2634 = v2637;
          }
        const v2638 = v2633 ? v2634 : v1601;
        const v2644 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v2645 = stdlib.fromSome(v2644, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v2648 = {
          lockTimestamp: v2645,
          reward: v2628,
          rewardPerTokenPaid: v2597,
          staked: v2618
          };
        await txn3.getOutput('recalculateRewards', 'v2648', ctc11, v2648);
        let v2659;
        if (v1606) {
          v2659 = v1646;
          }
        else {
          const v2661 = stdlib.lt(v1864, v1646);
          const v2662 = v2661 ? v1646 : v1864;
          v2659 = v2662;
          }
        const cv1646 = v2659;
        const cv1647 = v2638;
        const cv1648 = v2597;
        const cv1649 = v1649;
        const cv1650 = v1650;
        const cv1651 = v1864;
        const cv1657 = v2470;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'setTime0_163': {
        const v2886 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v2963 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2964 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2968 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2969 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2970 = [v2964, v2968, v2969];
        const v2971 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2970);
        ;
        const v2972 = v2971[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2973 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2977 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2978 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2979 = [v2973, v2977, v2978];
        const v2980 = stdlib.Array_set(v2971, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2979);
        ;
        const v3175 = v2886[stdlib.checkedBigNumberify('./farm.rsh:385:9:spread', stdlib.UInt_max, '0')];
        stdlib.assert(v1606, {
          at: './farm.rsh:393:14:application',
          fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v3176 = stdlib.ge(v3175, v1646);
        stdlib.assert(v3176, {
          at: './farm.rsh:394:14:application',
          fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v3177 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v3178 = stdlib.fromSome(v3177, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v3179 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v3180 = stdlib.fromSome(v3179, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v3181 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v3182 = stdlib.fromSome(v3181, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v3183 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3185 = {
          lockTimestamp: v3182,
          reward: v3180,
          rewardPerTokenPaid: v3184,
          staked: v3178
          };
        await txn3.getOutput('setTime', 'v3185', ctc11, v3185);
        const cv1646 = v3175;
        const cv1647 = v1647;
        const cv1648 = v1648;
        const cv1649 = v1649;
        const cv1650 = v1650;
        const cv1651 = v1864;
        const cv1657 = v2980;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'stake0_163': {
        const v3396 = v1863[1];
        undefined /* setApiDetails */;
        const v3429 = v3396[stdlib.checkedBigNumberify('./farm.rsh:279:9:spread', stdlib.UInt_max, '0')];
        ;
        const v3473 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3474 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3475 = stdlib.add(v3474, v3429);
        const v3478 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3479 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3480 = [v3475, v3478, v3479];
        const v3481 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3480);
        ;
        const v3482 = v3481[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3483 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3487 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3488 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3489 = [v3483, v3487, v3488];
        const v3490 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3489);
        ;
        const v3710 = stdlib.le(v1646, v1601);
        stdlib.assert(v3710, {
          at: './farm.rsh:286:14:application',
          fs: ['at ./farm.rsh:285:27:application call to [unknown function] (defined at: ./farm.rsh:285:27:function exp)'],
          msg: 'cannot stake when no rewards left',
          who: 'Creator'
          });
        const v3711 = stdlib.mul(v3429, v1604);
        const v3712 = stdlib.div(v3711, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
        const v3713 = stdlib.sub(v3429, v3712);
        let v3714;
        let v3715;
        if (v1606) {
          v3715 = v1646;
          }
        else {
          const v3717 = stdlib.lt(v1864, v1646);
          const v3718 = v3717 ? v1646 : v1864;
          v3715 = v3718;
          }
        const v3719 = stdlib.lt(v3715, v1601);
        let v3720;
        if (v1606) {
          v3720 = v1646;
          }
        else {
          const v3722 = stdlib.lt(v1864, v1646);
          const v3723 = v3722 ? v1646 : v1864;
          v3720 = v3723;
          }
        const v3724 = v3719 ? v3720 : v1601;
        const v3725 = stdlib.sub(v3724, v1647);
        const v3726 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v3726) {
          v3714 = v1648;
          }
        else {
          const v3727 = stdlib.cast("UInt", "UInt256", v3725, false);
          const v3728 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v3729 = stdlib.mul256(v3727, v3728);
          const v3730 = stdlib.mul256(v3729, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3731 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v3732 = stdlib.div256(v3730, v3731);
          const v3733 = stdlib.add256(v1648, v3732);
          v3714 = v3733;
          }
        const v3734 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v3735 = stdlib.fromSome(v3734, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v3736 = stdlib.cast("UInt", "UInt256", v3735, false);
        const v3737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v3738 = stdlib.fromSome(v3737, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3739 = stdlib.sub256(v3714, v3738);
        const v3740 = stdlib.mul256(v3736, v3739);
        const v3741 = stdlib.div256(v3740, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3742 = stdlib.cast("UInt256", "UInt", v3741, false);
        const v3743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v3744 = stdlib.fromSome(v3743, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v3745 = stdlib.add(v3742, v3744);
        await stdlib.mapSet(map1, v1862, v3745);
        await stdlib.mapSet(map3, v1862, v3714);
        let v3746;
        if (v1606) {
          v3746 = v1646;
          }
        else {
          const v3748 = stdlib.lt(v1864, v1646);
          const v3749 = v3748 ? v1646 : v1864;
          v3746 = v3749;
          }
        const v3750 = stdlib.lt(v3746, v1601);
        let v3751;
        if (v1606) {
          v3751 = v1646;
          }
        else {
          const v3753 = stdlib.lt(v1864, v1646);
          const v3754 = v3753 ? v1646 : v1864;
          v3751 = v3754;
          }
        const v3755 = v3750 ? v3751 : v1601;
        let v3757;
        if (v1606) {
          v3757 = v1646;
          }
        else {
          const v3759 = stdlib.lt(v1864, v1646);
          const v3760 = v3759 ? v1646 : v1864;
          v3757 = v3760;
          }
        await stdlib.mapSet(map2, v1862, v3757);
        const v3764 = stdlib.add(v3735, v3713);
        await stdlib.mapSet(map0, v1862, v3764);
        null;
        await txn3.getOutput('stake', 'v3713', ctc1, v3713);
        const v3771 = stdlib.add(v1650, v3713);
        let v3772;
        if (v1606) {
          v3772 = v1646;
          }
        else {
          const v3774 = stdlib.lt(v1864, v1646);
          const v3775 = v3774 ? v1646 : v1864;
          v3772 = v3775;
          }
        const cv1646 = v3772;
        const cv1647 = v3755;
        const cv1648 = v3714;
        const cv1649 = v1649;
        const cv1650 = v3771;
        const cv1651 = v1864;
        const cv1657 = v3490;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'unstake0_163': {
        const v3906 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v3983 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3984 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3988 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3989 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3990 = [v3984, v3988, v3989];
        const v3991 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3990);
        ;
        const v3992 = v3991[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3993 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3997 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3998 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3999 = [v3993, v3997, v3998];
        const v4000 = stdlib.Array_set(v3991, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3999);
        ;
        const v4288 = v3906[stdlib.checkedBigNumberify('./farm.rsh:305:9:spread', stdlib.UInt_max, '0')];
        const v4289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v4290 = stdlib.fromSome(v4289, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v4291 = stdlib.le(v4288, v4290);
        stdlib.assert(v4291, {
          at: './farm.rsh:313:14:application',
          fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        const v4292 = v4000[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
        const v4293 = v4292[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
        const v4294 = stdlib.le(v4288, v4293);
        stdlib.assert(v4294, {
          at: './farm.rsh:314:14:application',
          fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
          msg: 'tried to unstake more than contract has',
          who: 'Creator'
          });
        let v4297;
        let v4298;
        if (v1606) {
          v4298 = v1646;
          }
        else {
          const v4300 = stdlib.lt(v1864, v1646);
          const v4301 = v4300 ? v1646 : v1864;
          v4298 = v4301;
          }
        const v4302 = stdlib.lt(v4298, v1601);
        let v4303;
        if (v1606) {
          v4303 = v1646;
          }
        else {
          const v4305 = stdlib.lt(v1864, v1646);
          const v4306 = v4305 ? v1646 : v1864;
          v4303 = v4306;
          }
        const v4307 = v4302 ? v4303 : v1601;
        const v4308 = stdlib.sub(v4307, v1647);
        const v4309 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v4309) {
          v4297 = v1648;
          }
        else {
          const v4310 = stdlib.cast("UInt", "UInt256", v4308, false);
          const v4311 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v4312 = stdlib.mul256(v4310, v4311);
          const v4313 = stdlib.mul256(v4312, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4314 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v4315 = stdlib.div256(v4313, v4314);
          const v4316 = stdlib.add256(v1648, v4315);
          v4297 = v4316;
          }
        const v4319 = stdlib.cast("UInt", "UInt256", v4290, false);
        const v4320 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v4321 = stdlib.fromSome(v4320, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4322 = stdlib.sub256(v4297, v4321);
        const v4323 = stdlib.mul256(v4319, v4322);
        const v4324 = stdlib.div256(v4323, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4325 = stdlib.cast("UInt256", "UInt", v4324, false);
        const v4326 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v4327 = stdlib.fromSome(v4326, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v4328 = stdlib.add(v4325, v4327);
        await stdlib.mapSet(map1, v1862, v4328);
        await stdlib.mapSet(map3, v1862, v4297);
        let v4329;
        if (v1606) {
          v4329 = v1646;
          }
        else {
          const v4331 = stdlib.lt(v1864, v1646);
          const v4332 = v4331 ? v1646 : v1864;
          v4329 = v4332;
          }
        const v4333 = stdlib.lt(v4329, v1601);
        let v4334;
        if (v1606) {
          v4334 = v1646;
          }
        else {
          const v4336 = stdlib.lt(v1864, v1646);
          const v4337 = v4336 ? v1646 : v1864;
          v4334 = v4337;
          }
        const v4338 = v4333 ? v4334 : v1601;
        const v4340 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v4341 = stdlib.fromSome(v4340, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v4342 = stdlib.add(v4341, v1603);
        let v4343;
        if (v1606) {
          v4343 = v1646;
          }
        else {
          const v4345 = stdlib.lt(v1864, v1646);
          const v4346 = v4345 ? v1646 : v1864;
          v4343 = v4346;
          }
        const v4347 = stdlib.le(v4342, v4343);
        if (v4347) {
          let v4383;
          if (v1606) {
            v4383 = v1646;
            }
          else {
            const v4385 = stdlib.lt(v1864, v1646);
            const v4386 = v4385 ? v1646 : v1864;
            v4383 = v4386;
            }
          await stdlib.mapSet(map2, v1862, v4383);
          const v4388 = stdlib.sub(v4290, v4288);
          await stdlib.mapSet(map0, v1862, v4388);
          const v4389 = stdlib.mul(v4288, v1605);
          const v4390 = stdlib.div(v4389, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
          const v4391 = stdlib.sub(v4288, v4390);
          const v4397 = stdlib.sub(v4293, v4391);
          const v4400 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
          const v4401 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
          const v4402 = [v4397, v4400, v4401];
          const v4403 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4402);
          ;
          null;
          await txn3.getOutput('unstake', 'v4288', ctc1, v4288);
          const v4410 = stdlib.sub(v1650, v4288);
          let v4411;
          if (v1606) {
            v4411 = v1646;
            }
          else {
            const v4413 = stdlib.lt(v1864, v1646);
            const v4414 = v4413 ? v1646 : v1864;
            v4411 = v4414;
            }
          const cv1646 = v4411;
          const cv1647 = v4338;
          const cv1648 = v4297;
          const cv1649 = v1649;
          const cv1650 = v4410;
          const cv1651 = v1864;
          const cv1657 = v4403;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:243:22:decimal', stdlib.UInt_max, '0'));
          let v4350;
          if (v1606) {
            v4350 = v1646;
            }
          else {
            const v4352 = stdlib.lt(v1864, v1646);
            const v4353 = v4352 ? v1646 : v1864;
            v4350 = v4353;
            }
          await stdlib.mapSet(map2, v1862, v4350);
          const v4355 = stdlib.sub(v4290, v4288);
          await stdlib.mapSet(map0, v1862, v4355);
          const v4356 = stdlib.mul(v4288, v1605);
          const v4357 = stdlib.div(v4356, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
          const v4358 = stdlib.sub(v4288, v4357);
          const v4364 = stdlib.sub(v4293, v4358);
          const v4367 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
          const v4368 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
          const v4369 = [v4364, v4367, v4368];
          const v4370 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4369);
          ;
          null;
          await txn3.getOutput('unstake', 'v4288', ctc1, v4288);
          const v4377 = stdlib.sub(v1650, v4288);
          let v4378;
          if (v1606) {
            v4378 = v1646;
            }
          else {
            const v4380 = stdlib.lt(v1864, v1646);
            const v4381 = v4380 ? v1646 : v1864;
            v4378 = v4381;
            }
          const cv1646 = v4378;
          const cv1647 = v4338;
          const cv1648 = v4297;
          const cv1649 = v1649;
          const cv1650 = v4377;
          const cv1651 = v1864;
          const cv1657 = v4370;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1647, v1648, v1649, v1650, v1657, v1658],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1651,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:407:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v4431, time: v4430, didSend: v1272, from: v4429 } = txn3;
      
      ;
      const v4433 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '1')];
      const v4434 = v4433[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '0')];
      const v4435 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
      const v4436 = v4435[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: v1599
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: v1598
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1599
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1598
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
    tys: [ctc12, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc14, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4431, time: v4430, didSend: v1272, from: v4429 } = txn3;
  ;
  const v4433 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '1')];
  const v4434 = v4433[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '0')];
  const v4435 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
  const v4436 = v4435[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
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
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    claim0_163: ctc7,
    recalculateRewards0_163: ctc7,
    setTime0_163: ctc8,
    stake0_163: ctc8,
    unstake0_163: ctc8
    });
  const ctc10 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc3]]);
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1566 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1567 = [v1566, v1566];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 9,
    funcNum: 0,
    out_tys: [ctc5, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606], secs: v1608, time: v1607, didSend: v62, from: v1597 } = txn1;
  const v1609 = stdlib.tokenEq(v1598, v1599);
  const v1610 = v1609 ? false : true;
  stdlib.assert(v1610, {
    at: './farm.rsh:144:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1611 = v1567[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0')];
  const v1613 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1614 = v1611[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
  const v1615 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1613, v1614];
  const v1616 = stdlib.Array_set(v1567, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '0'), v1615);
  ;
  const v1618 = v1616[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1620 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1')];
  const v1621 = v1618[stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '2')];
  const v1622 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1620, v1621];
  const v1623 = stdlib.Array_set(v1616, stdlib.checkedBigNumberify('./farm.rsh:144:11:dot', stdlib.UInt_max, '1'), v1622);
  ;
  ;
  const v1625 = stdlib.sub(v1601, v1600);
  const v1626 = stdlib.mul(v1625, v1602);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1629, time: v1628, didSend: v71, from: v1627 } = txn2;
  ;
  const v1630 = v1623[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
  const v1631 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '0')];
  const v1632 = stdlib.add(v1631, v1626);
  const v1635 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1')];
  const v1636 = v1630[stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '2')];
  const v1637 = [v1632, v1635, v1636];
  const v1638 = stdlib.Array_set(v1623, stdlib.checkedBigNumberify('./farm.rsh:158:11:dot', stdlib.UInt_max, '1'), v1637);
  ;
  const v1639 = stdlib.addressEq(v1597, v1627);
  stdlib.assert(v1639, {
    at: './farm.rsh:158:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './farm.rsh:176:22:application',
    fs: ['at ./farm.rsh:175:7:application call to [unknown function] (defined at: ./farm.rsh:175:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v1645 = v1606 ? stdlib.checkedBigNumberify('./farm.rsh:188:33:decimal', stdlib.UInt_max, '0') : v1628;
  let v1646 = v1645;
  let v1647 = stdlib.checkedBigNumberify('./farm.rsh:196:26:decimal', stdlib.UInt_max, '0');
  let v1648 = stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v1649 = stdlib.checkedBigNumberify('./farm.rsh:196:33:decimal', stdlib.UInt_max, '0');
  let v1650 = stdlib.checkedBigNumberify('./farm.rsh:196:23:decimal', stdlib.UInt_max, '0');
  let v1651 = v1628;
  let v1657 = v1638;
  let v1658 = stdlib.checkedBigNumberify('./farm.rsh:120:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn3;
    switch (v1863[0]) {
      case 'claim0_163': {
        const v1866 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v1943 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1944 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1948 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1949 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v1950 = [v1944, v1948, v1949];
        const v1951 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v1950);
        ;
        const v1952 = v1951[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1953 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v1957 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v1958 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v1959 = [v1953, v1957, v1958];
        const v1960 = stdlib.Array_set(v1951, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v1959);
        ;
        const v1962 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v1963 = stdlib.fromSome(v1962, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v1964 = v1960[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '1')];
        const v1965 = v1964[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '0')];
        const v1966 = stdlib.lt(v1963, v1965);
        stdlib.assert(v1966, {
          at: './farm.rsh:350:16:application',
          fs: ['at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)'],
          msg: 'tried to claim more than contract has',
          who: 'User'
          });
        let v1967;
        let v1968;
        if (v1606) {
          v1968 = v1646;
          }
        else {
          const v1970 = stdlib.lt(v1864, v1646);
          const v1971 = v1970 ? v1646 : v1864;
          v1968 = v1971;
          }
        const v1972 = stdlib.lt(v1968, v1601);
        let v1973;
        if (v1606) {
          v1973 = v1646;
          }
        else {
          const v1975 = stdlib.lt(v1864, v1646);
          const v1976 = v1975 ? v1646 : v1864;
          v1973 = v1976;
          }
        const v1977 = v1972 ? v1973 : v1601;
        const v1978 = stdlib.sub(v1977, v1647);
        const v1979 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v1979) {
          v1967 = v1648;
          }
        else {
          const v1980 = stdlib.cast("UInt", "UInt256", v1978, false);
          const v1981 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v1982 = stdlib.mul256(v1980, v1981);
          const v1983 = stdlib.mul256(v1982, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v1984 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v1985 = stdlib.div256(v1983, v1984);
          const v1986 = stdlib.add256(v1648, v1985);
          v1967 = v1986;
          }
        const v1987 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v1988 = stdlib.fromSome(v1987, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v1989 = stdlib.cast("UInt", "UInt256", v1988, false);
        const v1990 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v1991 = stdlib.fromSome(v1990, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1992 = stdlib.sub256(v1967, v1991);
        const v1993 = stdlib.mul256(v1989, v1992);
        const v1994 = stdlib.div256(v1993, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v1995 = stdlib.cast("UInt256", "UInt", v1994, false);
        const v1998 = stdlib.add(v1995, v1963);
        await stdlib.mapSet(map1, v1862, v1998);
        await stdlib.mapSet(map3, v1862, v1967);
        let v1999;
        if (v1606) {
          v1999 = v1646;
          }
        else {
          const v2001 = stdlib.lt(v1864, v1646);
          const v2002 = v2001 ? v1646 : v1864;
          v1999 = v2002;
          }
        const v2003 = stdlib.lt(v1999, v1601);
        let v2004;
        if (v1606) {
          v2004 = v1646;
          }
        else {
          const v2006 = stdlib.lt(v1864, v1646);
          const v2007 = v2006 ? v1646 : v1864;
          v2004 = v2007;
          }
        const v2008 = v2003 ? v2004 : v1601;
        const v2010 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v2011 = stdlib.fromSome(v2010, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v2012 = stdlib.add(v2011, v1603);
        let v2013;
        if (v1606) {
          v2013 = v1646;
          }
        else {
          const v2015 = stdlib.lt(v1864, v1646);
          const v2016 = v2015 ? v1646 : v1864;
          v2013 = v2016;
          }
        const v2017 = stdlib.le(v2012, v2013);
        if (v2017) {
          let v2018;
          if (v1606) {
            v2018 = v1646;
            }
          else {
            const v2020 = stdlib.lt(v1864, v1646);
            const v2021 = v2020 ? v1646 : v1864;
            v2018 = v2021;
            }
          await stdlib.mapSet(map2, v1862, v2018);
          const v2024 = v1998;
          await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:358:27:decimal', stdlib.UInt_max, '0'));
          await txn3.getOutput('claim', 'v2024', ctc1, v2024);
          const v2032 = stdlib.lt(v1998, v1965);
          if (v2032) {
            const v2038 = stdlib.sub(v1965, v1998);
            const v2041 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1')];
            const v2042 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '2')];
            const v2043 = [v2038, v2041, v2042];
            const v2044 = stdlib.Array_set(v1960, stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1'), v2043);
            ;
            null;
            const v2045 = stdlib.add(v1649, v1998);
            let v2046;
            if (v1606) {
              v2046 = v1646;
              }
            else {
              const v2048 = stdlib.lt(v1864, v1646);
              const v2049 = v2048 ? v1646 : v1864;
              v2046 = v2049;
              }
            const cv1646 = v2046;
            const cv1647 = v2008;
            const cv1648 = v1967;
            const cv1649 = v2045;
            const cv1650 = v1650;
            const cv1651 = v1864;
            const cv1657 = v2044;
            const cv1658 = v1658;
            
            v1646 = cv1646;
            v1647 = cv1647;
            v1648 = cv1648;
            v1649 = cv1649;
            v1650 = cv1650;
            v1651 = cv1651;
            v1657 = cv1657;
            v1658 = cv1658;
            
            continue;}
          else {
            null;
            const v2057 = stdlib.add(v1649, v1998);
            let v2058;
            if (v1606) {
              v2058 = v1646;
              }
            else {
              const v2060 = stdlib.lt(v1864, v1646);
              const v2061 = v2060 ? v1646 : v1864;
              v2058 = v2061;
              }
            const cv1646 = v2058;
            const cv1647 = v2008;
            const cv1648 = v1967;
            const cv1649 = v2057;
            const cv1650 = v1650;
            const cv1651 = v1864;
            const cv1657 = v1960;
            const cv1658 = v1658;
            
            v1646 = cv1646;
            v1647 = cv1647;
            v1648 = cv1648;
            v1649 = cv1649;
            v1650 = cv1650;
            v1651 = cv1651;
            v1657 = cv1657;
            v1658 = cv1658;
            
            continue;}}
        else {
          const v2069 = stdlib.checkedBigNumberify('./farm.rsh:374:20:decimal', stdlib.UInt_max, '0');
          await txn3.getOutput('claim', 'v2069', ctc1, v2069);
          let v2075;
          if (v1606) {
            v2075 = v1646;
            }
          else {
            const v2077 = stdlib.lt(v1864, v1646);
            const v2078 = v2077 ? v1646 : v1864;
            v2075 = v2078;
            }
          const cv1646 = v2075;
          const cv1647 = v2008;
          const cv1648 = v1967;
          const cv1649 = v1649;
          const cv1650 = v1650;
          const cv1651 = v1864;
          const cv1657 = v1960;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        break;
        }
      case 'recalculateRewards0_163': {
        const v2376 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v2453 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2454 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2458 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2459 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2460 = [v2454, v2458, v2459];
        const v2461 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2460);
        ;
        const v2462 = v2461[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2463 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2467 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2468 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2469 = [v2463, v2467, v2468];
        const v2470 = stdlib.Array_set(v2461, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2469);
        ;
        let v2597;
        let v2598;
        if (v1606) {
          v2598 = v1646;
          }
        else {
          const v2600 = stdlib.lt(v1864, v1646);
          const v2601 = v2600 ? v1646 : v1864;
          v2598 = v2601;
          }
        const v2602 = stdlib.lt(v2598, v1601);
        let v2603;
        if (v1606) {
          v2603 = v1646;
          }
        else {
          const v2605 = stdlib.lt(v1864, v1646);
          const v2606 = v2605 ? v1646 : v1864;
          v2603 = v2606;
          }
        const v2607 = v2602 ? v2603 : v1601;
        const v2608 = stdlib.sub(v2607, v1647);
        const v2609 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v2609) {
          v2597 = v1648;
          }
        else {
          const v2610 = stdlib.cast("UInt", "UInt256", v2608, false);
          const v2611 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v2612 = stdlib.mul256(v2610, v2611);
          const v2613 = stdlib.mul256(v2612, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2614 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v2615 = stdlib.div256(v2613, v2614);
          const v2616 = stdlib.add256(v1648, v2615);
          v2597 = v2616;
          }
        const v2617 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v2618 = stdlib.fromSome(v2617, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v2619 = stdlib.cast("UInt", "UInt256", v2618, false);
        const v2620 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2622 = stdlib.sub256(v2597, v2621);
        const v2623 = stdlib.mul256(v2619, v2622);
        const v2624 = stdlib.div256(v2623, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2625 = stdlib.cast("UInt256", "UInt", v2624, false);
        const v2626 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v2628 = stdlib.add(v2625, v2627);
        await stdlib.mapSet(map1, v1862, v2628);
        await stdlib.mapSet(map3, v1862, v2597);
        let v2629;
        if (v1606) {
          v2629 = v1646;
          }
        else {
          const v2631 = stdlib.lt(v1864, v1646);
          const v2632 = v2631 ? v1646 : v1864;
          v2629 = v2632;
          }
        const v2633 = stdlib.lt(v2629, v1601);
        let v2634;
        if (v1606) {
          v2634 = v1646;
          }
        else {
          const v2636 = stdlib.lt(v1864, v1646);
          const v2637 = v2636 ? v1646 : v1864;
          v2634 = v2637;
          }
        const v2638 = v2633 ? v2634 : v1601;
        const v2644 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v2645 = stdlib.fromSome(v2644, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v2648 = {
          lockTimestamp: v2645,
          reward: v2628,
          rewardPerTokenPaid: v2597,
          staked: v2618
          };
        await txn3.getOutput('recalculateRewards', 'v2648', ctc10, v2648);
        let v2659;
        if (v1606) {
          v2659 = v1646;
          }
        else {
          const v2661 = stdlib.lt(v1864, v1646);
          const v2662 = v2661 ? v1646 : v1864;
          v2659 = v2662;
          }
        const cv1646 = v2659;
        const cv1647 = v2638;
        const cv1648 = v2597;
        const cv1649 = v1649;
        const cv1650 = v1650;
        const cv1651 = v1864;
        const cv1657 = v2470;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'setTime0_163': {
        const v2886 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v2963 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2964 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2968 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2969 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2970 = [v2964, v2968, v2969];
        const v2971 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2970);
        ;
        const v2972 = v2971[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2973 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v2977 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v2978 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v2979 = [v2973, v2977, v2978];
        const v2980 = stdlib.Array_set(v2971, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2979);
        ;
        const v3175 = v2886[stdlib.checkedBigNumberify('./farm.rsh:385:9:spread', stdlib.UInt_max, '0')];
        stdlib.assert(v1606, {
          at: './farm.rsh:393:14:application',
          fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
          msg: null,
          who: 'User'
          });
        const v3176 = stdlib.ge(v3175, v1646);
        stdlib.assert(v3176, {
          at: './farm.rsh:394:14:application',
          fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
          msg: null,
          who: 'User'
          });
        const v3177 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v3178 = stdlib.fromSome(v3177, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v3179 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v3180 = stdlib.fromSome(v3179, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v3181 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v3182 = stdlib.fromSome(v3181, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v3183 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3185 = {
          lockTimestamp: v3182,
          reward: v3180,
          rewardPerTokenPaid: v3184,
          staked: v3178
          };
        await txn3.getOutput('setTime', 'v3185', ctc10, v3185);
        const cv1646 = v3175;
        const cv1647 = v1647;
        const cv1648 = v1648;
        const cv1649 = v1649;
        const cv1650 = v1650;
        const cv1651 = v1864;
        const cv1657 = v2980;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'stake0_163': {
        const v3396 = v1863[1];
        undefined /* setApiDetails */;
        const v3429 = v3396[stdlib.checkedBigNumberify('./farm.rsh:279:9:spread', stdlib.UInt_max, '0')];
        ;
        const v3473 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3474 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3475 = stdlib.add(v3474, v3429);
        const v3478 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3479 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3480 = [v3475, v3478, v3479];
        const v3481 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3480);
        ;
        const v3482 = v3481[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3483 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3487 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3488 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3489 = [v3483, v3487, v3488];
        const v3490 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3489);
        ;
        const v3710 = stdlib.le(v1646, v1601);
        stdlib.assert(v3710, {
          at: './farm.rsh:286:14:application',
          fs: ['at ./farm.rsh:285:27:application call to [unknown function] (defined at: ./farm.rsh:285:27:function exp)'],
          msg: 'cannot stake when no rewards left',
          who: 'User'
          });
        const v3711 = stdlib.mul(v3429, v1604);
        const v3712 = stdlib.div(v3711, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
        const v3713 = stdlib.sub(v3429, v3712);
        let v3714;
        let v3715;
        if (v1606) {
          v3715 = v1646;
          }
        else {
          const v3717 = stdlib.lt(v1864, v1646);
          const v3718 = v3717 ? v1646 : v1864;
          v3715 = v3718;
          }
        const v3719 = stdlib.lt(v3715, v1601);
        let v3720;
        if (v1606) {
          v3720 = v1646;
          }
        else {
          const v3722 = stdlib.lt(v1864, v1646);
          const v3723 = v3722 ? v1646 : v1864;
          v3720 = v3723;
          }
        const v3724 = v3719 ? v3720 : v1601;
        const v3725 = stdlib.sub(v3724, v1647);
        const v3726 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v3726) {
          v3714 = v1648;
          }
        else {
          const v3727 = stdlib.cast("UInt", "UInt256", v3725, false);
          const v3728 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v3729 = stdlib.mul256(v3727, v3728);
          const v3730 = stdlib.mul256(v3729, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3731 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v3732 = stdlib.div256(v3730, v3731);
          const v3733 = stdlib.add256(v1648, v3732);
          v3714 = v3733;
          }
        const v3734 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v3735 = stdlib.fromSome(v3734, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v3736 = stdlib.cast("UInt", "UInt256", v3735, false);
        const v3737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v3738 = stdlib.fromSome(v3737, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3739 = stdlib.sub256(v3714, v3738);
        const v3740 = stdlib.mul256(v3736, v3739);
        const v3741 = stdlib.div256(v3740, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3742 = stdlib.cast("UInt256", "UInt", v3741, false);
        const v3743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v3744 = stdlib.fromSome(v3743, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v3745 = stdlib.add(v3742, v3744);
        await stdlib.mapSet(map1, v1862, v3745);
        await stdlib.mapSet(map3, v1862, v3714);
        let v3746;
        if (v1606) {
          v3746 = v1646;
          }
        else {
          const v3748 = stdlib.lt(v1864, v1646);
          const v3749 = v3748 ? v1646 : v1864;
          v3746 = v3749;
          }
        const v3750 = stdlib.lt(v3746, v1601);
        let v3751;
        if (v1606) {
          v3751 = v1646;
          }
        else {
          const v3753 = stdlib.lt(v1864, v1646);
          const v3754 = v3753 ? v1646 : v1864;
          v3751 = v3754;
          }
        const v3755 = v3750 ? v3751 : v1601;
        let v3757;
        if (v1606) {
          v3757 = v1646;
          }
        else {
          const v3759 = stdlib.lt(v1864, v1646);
          const v3760 = v3759 ? v1646 : v1864;
          v3757 = v3760;
          }
        await stdlib.mapSet(map2, v1862, v3757);
        const v3764 = stdlib.add(v3735, v3713);
        await stdlib.mapSet(map0, v1862, v3764);
        null;
        await txn3.getOutput('stake', 'v3713', ctc1, v3713);
        const v3771 = stdlib.add(v1650, v3713);
        let v3772;
        if (v1606) {
          v3772 = v1646;
          }
        else {
          const v3774 = stdlib.lt(v1864, v1646);
          const v3775 = v3774 ? v1646 : v1864;
          v3772 = v3775;
          }
        const cv1646 = v3772;
        const cv1647 = v3755;
        const cv1648 = v3714;
        const cv1649 = v1649;
        const cv1650 = v3771;
        const cv1651 = v1864;
        const cv1657 = v3490;
        const cv1658 = v1658;
        
        v1646 = cv1646;
        v1647 = cv1647;
        v1648 = cv1648;
        v1649 = cv1649;
        v1650 = cv1650;
        v1651 = cv1651;
        v1657 = cv1657;
        v1658 = cv1658;
        
        continue;
        break;
        }
      case 'unstake0_163': {
        const v3906 = v1863[1];
        undefined /* setApiDetails */;
        ;
        const v3983 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3984 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3988 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3989 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3990 = [v3984, v3988, v3989];
        const v3991 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3990);
        ;
        const v3992 = v3991[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3993 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
        const v3997 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
        const v3998 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
        const v3999 = [v3993, v3997, v3998];
        const v4000 = stdlib.Array_set(v3991, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3999);
        ;
        const v4288 = v3906[stdlib.checkedBigNumberify('./farm.rsh:305:9:spread', stdlib.UInt_max, '0')];
        const v4289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
        const v4290 = stdlib.fromSome(v4289, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
        const v4291 = stdlib.le(v4288, v4290);
        stdlib.assert(v4291, {
          at: './farm.rsh:313:14:application',
          fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        const v4292 = v4000[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
        const v4293 = v4292[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
        const v4294 = stdlib.le(v4288, v4293);
        stdlib.assert(v4294, {
          at: './farm.rsh:314:14:application',
          fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
          msg: 'tried to unstake more than contract has',
          who: 'User'
          });
        let v4297;
        let v4298;
        if (v1606) {
          v4298 = v1646;
          }
        else {
          const v4300 = stdlib.lt(v1864, v1646);
          const v4301 = v4300 ? v1646 : v1864;
          v4298 = v4301;
          }
        const v4302 = stdlib.lt(v4298, v1601);
        let v4303;
        if (v1606) {
          v4303 = v1646;
          }
        else {
          const v4305 = stdlib.lt(v1864, v1646);
          const v4306 = v4305 ? v1646 : v1864;
          v4303 = v4306;
          }
        const v4307 = v4302 ? v4303 : v1601;
        const v4308 = stdlib.sub(v4307, v1647);
        const v4309 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
        if (v4309) {
          v4297 = v1648;
          }
        else {
          const v4310 = stdlib.cast("UInt", "UInt256", v4308, false);
          const v4311 = stdlib.cast("UInt", "UInt256", v1602, false);
          const v4312 = stdlib.mul256(v4310, v4311);
          const v4313 = stdlib.mul256(v4312, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4314 = stdlib.cast("UInt", "UInt256", v1650, false);
          const v4315 = stdlib.div256(v4313, v4314);
          const v4316 = stdlib.add256(v1648, v4315);
          v4297 = v4316;
          }
        const v4319 = stdlib.cast("UInt", "UInt256", v4290, false);
        const v4320 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
        const v4321 = stdlib.fromSome(v4320, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4322 = stdlib.sub256(v4297, v4321);
        const v4323 = stdlib.mul256(v4319, v4322);
        const v4324 = stdlib.div256(v4323, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4325 = stdlib.cast("UInt256", "UInt", v4324, false);
        const v4326 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
        const v4327 = stdlib.fromSome(v4326, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
        const v4328 = stdlib.add(v4325, v4327);
        await stdlib.mapSet(map1, v1862, v4328);
        await stdlib.mapSet(map3, v1862, v4297);
        let v4329;
        if (v1606) {
          v4329 = v1646;
          }
        else {
          const v4331 = stdlib.lt(v1864, v1646);
          const v4332 = v4331 ? v1646 : v1864;
          v4329 = v4332;
          }
        const v4333 = stdlib.lt(v4329, v1601);
        let v4334;
        if (v1606) {
          v4334 = v1646;
          }
        else {
          const v4336 = stdlib.lt(v1864, v1646);
          const v4337 = v4336 ? v1646 : v1864;
          v4334 = v4337;
          }
        const v4338 = v4333 ? v4334 : v1601;
        const v4340 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
        const v4341 = stdlib.fromSome(v4340, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
        const v4342 = stdlib.add(v4341, v1603);
        let v4343;
        if (v1606) {
          v4343 = v1646;
          }
        else {
          const v4345 = stdlib.lt(v1864, v1646);
          const v4346 = v4345 ? v1646 : v1864;
          v4343 = v4346;
          }
        const v4347 = stdlib.le(v4342, v4343);
        if (v4347) {
          let v4383;
          if (v1606) {
            v4383 = v1646;
            }
          else {
            const v4385 = stdlib.lt(v1864, v1646);
            const v4386 = v4385 ? v1646 : v1864;
            v4383 = v4386;
            }
          await stdlib.mapSet(map2, v1862, v4383);
          const v4388 = stdlib.sub(v4290, v4288);
          await stdlib.mapSet(map0, v1862, v4388);
          const v4389 = stdlib.mul(v4288, v1605);
          const v4390 = stdlib.div(v4389, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
          const v4391 = stdlib.sub(v4288, v4390);
          const v4397 = stdlib.sub(v4293, v4391);
          const v4400 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
          const v4401 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
          const v4402 = [v4397, v4400, v4401];
          const v4403 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4402);
          ;
          null;
          await txn3.getOutput('unstake', 'v4288', ctc1, v4288);
          const v4410 = stdlib.sub(v1650, v4288);
          let v4411;
          if (v1606) {
            v4411 = v1646;
            }
          else {
            const v4413 = stdlib.lt(v1864, v1646);
            const v4414 = v4413 ? v1646 : v1864;
            v4411 = v4414;
            }
          const cv1646 = v4411;
          const cv1647 = v4338;
          const cv1648 = v4297;
          const cv1649 = v1649;
          const cv1650 = v4410;
          const cv1651 = v1864;
          const cv1657 = v4403;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:243:22:decimal', stdlib.UInt_max, '0'));
          let v4350;
          if (v1606) {
            v4350 = v1646;
            }
          else {
            const v4352 = stdlib.lt(v1864, v1646);
            const v4353 = v4352 ? v1646 : v1864;
            v4350 = v4353;
            }
          await stdlib.mapSet(map2, v1862, v4350);
          const v4355 = stdlib.sub(v4290, v4288);
          await stdlib.mapSet(map0, v1862, v4355);
          const v4356 = stdlib.mul(v4288, v1605);
          const v4357 = stdlib.div(v4356, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
          const v4358 = stdlib.sub(v4288, v4357);
          const v4364 = stdlib.sub(v4293, v4358);
          const v4367 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
          const v4368 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
          const v4369 = [v4364, v4367, v4368];
          const v4370 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4369);
          ;
          null;
          await txn3.getOutput('unstake', 'v4288', ctc1, v4288);
          const v4377 = stdlib.sub(v1650, v4288);
          let v4378;
          if (v1606) {
            v4378 = v1646;
            }
          else {
            const v4380 = stdlib.lt(v1864, v1646);
            const v4381 = v4380 ? v1646 : v1864;
            v4378 = v4381;
            }
          const cv1646 = v4378;
          const cv1647 = v4338;
          const cv1648 = v4297;
          const cv1649 = v1649;
          const cv1650 = v4377;
          const cv1651 = v1864;
          const cv1657 = v4370;
          const cv1658 = v1658;
          
          v1646 = cv1646;
          v1647 = cv1647;
          v1648 = cv1648;
          v1649 = cv1649;
          v1650 = cv1650;
          v1651 = cv1651;
          v1657 = cv1657;
          v1658 = cv1658;
          
          continue;}
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1647, v1648, v1649, v1650, v1657, v1658],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1651,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:407:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v4431, time: v4430, didSend: v1272, from: v4429 } = txn3;
      
      ;
      const v4433 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '1')];
      const v4434 = v4433[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '0')];
      const v4435 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
      const v4436 = v4435[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: v1599
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1597,
        tok: v1598
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1599
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1598
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
    tys: [ctc11, ctc5, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc13, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v4431, time: v4430, didSend: v1272, from: v4429 } = txn3;
  ;
  const v4433 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '1')];
  const v4434 = v4433[stdlib.checkedBigNumberify('./farm.rsh:408:32:application', stdlib.UInt_max, '0')];
  const v4435 = v1657[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
  const v4436 = v4435[stdlib.checkedBigNumberify('./farm.rsh:408:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function _claim5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claim5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claim5 expects to receive an interact object as its second argument.`));}
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
    claim0_163: ctc10,
    recalculateRewards0_163: ctc10,
    setTime0_163: ctc11,
    stake0_163: ctc11,
    unstake0_163: ctc11
    });
  
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
  
  
  const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v1709 = ctc.selfAddress();
  const v1711 = stdlib.protect(ctc10, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:342:10:application call to [unknown function] (defined at: ./farm.rsh:342:10:function exp)', 'at ./farm.rsh:196:21:application call to "runclaim0_163" (defined at: ./farm.rsh:340:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1713 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1709), null);
  const v1714 = stdlib.fromSome(v1713, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
  const v1715 = v1657[stdlib.checkedBigNumberify('./farm.rsh:343:38:application', stdlib.UInt_max, '1')];
  const v1716 = v1715[stdlib.checkedBigNumberify('./farm.rsh:343:38:application', stdlib.UInt_max, '0')];
  const v1717 = stdlib.lt(v1714, v1716);
  stdlib.assert(v1717, {
    at: './farm.rsh:343:15:application',
    fs: ['at ./farm.rsh:342:10:application call to [unknown function] (defined at: ./farm.rsh:342:10:function exp)', 'at ./farm.rsh:342:10:application call to [unknown function] (defined at: ./farm.rsh:342:10:function exp)', 'at ./farm.rsh:196:21:application call to "runclaim0_163" (defined at: ./farm.rsh:340:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'tried to claim more than contract has',
    who: 'claim'
    });
  const v1720 = ['claim0_163', v1711];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658, v1720],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:348:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./farm.rsh:348:18:decimal', stdlib.UInt_max, '0'), v1598], [stdlib.checkedBigNumberify('./farm.rsh:348:35:decimal', stdlib.UInt_max, '0'), v1599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
      
      switch (v1863[0]) {
        case 'claim0_163': {
          const v1866 = v1863[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1943 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v1944 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v1948 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v1949 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v1950 = [v1944, v1948, v1949];
          const v1951 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v1950);
          ;
          const v1952 = v1951[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v1953 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v1957 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v1958 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v1959 = [v1953, v1957, v1958];
          const v1960 = stdlib.Array_set(v1951, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v1959);
          ;
          const v1962 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1862), null);
          const v1963 = stdlib.fromSome(v1962, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
          const v1964 = v1960[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '1')];
          const v1965 = v1964[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '0')];
          let v1967;
          let v1968;
          if (v1606) {
            v1968 = v1646;
            }
          else {
            const v1970 = stdlib.lt(v1864, v1646);
            const v1971 = v1970 ? v1646 : v1864;
            v1968 = v1971;
            }
          const v1972 = stdlib.lt(v1968, v1601);
          let v1973;
          if (v1606) {
            v1973 = v1646;
            }
          else {
            const v1975 = stdlib.lt(v1864, v1646);
            const v1976 = v1975 ? v1646 : v1864;
            v1973 = v1976;
            }
          const v1977 = v1972 ? v1973 : v1601;
          const v1978 = stdlib.sub(v1977, v1647);
          const v1979 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
          if (v1979) {
            v1967 = v1648;
            }
          else {
            const v1980 = stdlib.cast("UInt", "UInt256", v1978, false);
            const v1981 = stdlib.cast("UInt", "UInt256", v1602, false);
            const v1982 = stdlib.mul256(v1980, v1981);
            const v1983 = stdlib.mul256(v1982, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
            const v1984 = stdlib.cast("UInt", "UInt256", v1650, false);
            const v1985 = stdlib.div256(v1983, v1984);
            const v1986 = stdlib.add256(v1648, v1985);
            v1967 = v1986;
            }
          const v1987 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1862), null);
          const v1988 = stdlib.fromSome(v1987, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
          const v1989 = stdlib.cast("UInt", "UInt256", v1988, false);
          const v1990 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1862), null);
          const v1991 = stdlib.fromSome(v1990, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1992 = stdlib.sub256(v1967, v1991);
          const v1993 = stdlib.mul256(v1989, v1992);
          const v1994 = stdlib.div256(v1993, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v1995 = stdlib.cast("UInt256", "UInt", v1994, false);
          const v1998 = stdlib.add(v1995, v1963);
          await stdlib.simMapSet(sim_r, 1, v1862, v1998);
          await stdlib.simMapSet(sim_r, 3, v1862, v1967);
          let v1999;
          if (v1606) {
            v1999 = v1646;
            }
          else {
            const v2001 = stdlib.lt(v1864, v1646);
            const v2002 = v2001 ? v1646 : v1864;
            v1999 = v2002;
            }
          const v2003 = stdlib.lt(v1999, v1601);
          let v2004;
          if (v1606) {
            v2004 = v1646;
            }
          else {
            const v2006 = stdlib.lt(v1864, v1646);
            const v2007 = v2006 ? v1646 : v1864;
            v2004 = v2007;
            }
          const v2008 = v2003 ? v2004 : v1601;
          const v2010 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1862), null);
          const v2011 = stdlib.fromSome(v2010, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
          const v2012 = stdlib.add(v2011, v1603);
          let v2013;
          if (v1606) {
            v2013 = v1646;
            }
          else {
            const v2015 = stdlib.lt(v1864, v1646);
            const v2016 = v2015 ? v1646 : v1864;
            v2013 = v2016;
            }
          const v2017 = stdlib.le(v2012, v2013);
          if (v2017) {
            let v2018;
            if (v1606) {
              v2018 = v1646;
              }
            else {
              const v2020 = stdlib.lt(v1864, v1646);
              const v2021 = v2020 ? v1646 : v1864;
              v2018 = v2021;
              }
            await stdlib.simMapSet(sim_r, 2, v1862, v2018);
            const v2024 = v1998;
            await stdlib.simMapSet(sim_r, 1, v1862, stdlib.checkedBigNumberify('./farm.rsh:358:27:decimal', stdlib.UInt_max, '0'));
            const v2025 = await txn1.getOutput('claim', 'v2024', ctc1, v2024);
            
            const v2032 = stdlib.lt(v1998, v1965);
            if (v2032) {
              const v2038 = stdlib.sub(v1965, v1998);
              const v2041 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1')];
              const v2042 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '2')];
              const v2043 = [v2038, v2041, v2042];
              const v2044 = stdlib.Array_set(v1960, stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1'), v2043);
              sim_r.txns.push({
                kind: 'from',
                to: v1862,
                tok: v1599
                });
              null;
              const v2045 = stdlib.add(v1649, v1998);
              let v2046;
              if (v1606) {
                v2046 = v1646;
                }
              else {
                const v2048 = stdlib.lt(v1864, v1646);
                const v2049 = v2048 ? v1646 : v1864;
                v2046 = v2049;
                }
              const v7397 = v2046;
              const v7398 = v2008;
              const v7399 = v1967;
              const v7400 = v2045;
              const v7401 = v1650;
              const v7403 = v2044;
              const v7404 = v1658;
              sim_r.isHalt = false;
              }
            else {
              null;
              const v2057 = stdlib.add(v1649, v1998);
              let v2058;
              if (v1606) {
                v2058 = v1646;
                }
              else {
                const v2060 = stdlib.lt(v1864, v1646);
                const v2061 = v2060 ? v1646 : v1864;
                v2058 = v2061;
                }
              const v7413 = v2058;
              const v7414 = v2008;
              const v7415 = v1967;
              const v7416 = v2057;
              const v7417 = v1650;
              const v7419 = v1960;
              const v7420 = v1658;
              sim_r.isHalt = false;
              }}
          else {
            const v2069 = stdlib.checkedBigNumberify('./farm.rsh:374:20:decimal', stdlib.UInt_max, '0');
            const v2070 = await txn1.getOutput('claim', 'v2069', ctc1, v2069);
            
            let v2075;
            if (v1606) {
              v2075 = v1646;
              }
            else {
              const v2077 = stdlib.lt(v1864, v1646);
              const v2078 = v2077 ? v1646 : v1864;
              v2075 = v2078;
              }
            const v7429 = v2075;
            const v7430 = v2008;
            const v7431 = v1967;
            const v7432 = v1649;
            const v7433 = v1650;
            const v7435 = v1960;
            const v7436 = v1658;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'recalculateRewards0_163': {
          const v2376 = v1863[1];
          
          break;
          }
        case 'setTime0_163': {
          const v2886 = v1863[1];
          
          break;
          }
        case 'stake0_163': {
          const v3396 = v1863[1];
          
          break;
          }
        case 'unstake0_163': {
          const v3906 = v1863[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
  switch (v1863[0]) {
    case 'claim0_163': {
      const v1866 = v1863[1];
      undefined /* setApiDetails */;
      ;
      const v1943 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v1944 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v1948 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v1949 = v1943[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v1950 = [v1944, v1948, v1949];
      const v1951 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v1950);
      ;
      const v1952 = v1951[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v1953 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v1957 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v1958 = v1952[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v1959 = [v1953, v1957, v1958];
      const v1960 = stdlib.Array_set(v1951, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v1959);
      ;
      const v1962 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
      const v1963 = stdlib.fromSome(v1962, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
      const v1964 = v1960[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '1')];
      const v1965 = v1964[stdlib.checkedBigNumberify('./farm.rsh:350:39:application', stdlib.UInt_max, '0')];
      const v1966 = stdlib.lt(v1963, v1965);
      stdlib.assert(v1966, {
        at: './farm.rsh:350:16:application',
        fs: ['at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)'],
        msg: 'tried to claim more than contract has',
        who: 'claim'
        });
      let v1967;
      let v1968;
      if (v1606) {
        v1968 = v1646;
        }
      else {
        const v1970 = stdlib.lt(v1864, v1646);
        const v1971 = v1970 ? v1646 : v1864;
        v1968 = v1971;
        }
      const v1972 = stdlib.lt(v1968, v1601);
      let v1973;
      if (v1606) {
        v1973 = v1646;
        }
      else {
        const v1975 = stdlib.lt(v1864, v1646);
        const v1976 = v1975 ? v1646 : v1864;
        v1973 = v1976;
        }
      const v1977 = v1972 ? v1973 : v1601;
      const v1978 = stdlib.sub(v1977, v1647);
      const v1979 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
      if (v1979) {
        v1967 = v1648;
        }
      else {
        const v1980 = stdlib.cast("UInt", "UInt256", v1978, false);
        const v1981 = stdlib.cast("UInt", "UInt256", v1602, false);
        const v1982 = stdlib.mul256(v1980, v1981);
        const v1983 = stdlib.mul256(v1982, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v1984 = stdlib.cast("UInt", "UInt256", v1650, false);
        const v1985 = stdlib.div256(v1983, v1984);
        const v1986 = stdlib.add256(v1648, v1985);
        v1967 = v1986;
        }
      const v1987 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
      const v1988 = stdlib.fromSome(v1987, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
      const v1989 = stdlib.cast("UInt", "UInt256", v1988, false);
      const v1990 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
      const v1991 = stdlib.fromSome(v1990, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1992 = stdlib.sub256(v1967, v1991);
      const v1993 = stdlib.mul256(v1989, v1992);
      const v1994 = stdlib.div256(v1993, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v1995 = stdlib.cast("UInt256", "UInt", v1994, false);
      const v1998 = stdlib.add(v1995, v1963);
      await stdlib.mapSet(map1, v1862, v1998);
      await stdlib.mapSet(map3, v1862, v1967);
      let v1999;
      if (v1606) {
        v1999 = v1646;
        }
      else {
        const v2001 = stdlib.lt(v1864, v1646);
        const v2002 = v2001 ? v1646 : v1864;
        v1999 = v2002;
        }
      const v2003 = stdlib.lt(v1999, v1601);
      let v2004;
      if (v1606) {
        v2004 = v1646;
        }
      else {
        const v2006 = stdlib.lt(v1864, v1646);
        const v2007 = v2006 ? v1646 : v1864;
        v2004 = v2007;
        }
      const v2008 = v2003 ? v2004 : v1601;
      const v2010 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
      const v2011 = stdlib.fromSome(v2010, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
      const v2012 = stdlib.add(v2011, v1603);
      let v2013;
      if (v1606) {
        v2013 = v1646;
        }
      else {
        const v2015 = stdlib.lt(v1864, v1646);
        const v2016 = v2015 ? v1646 : v1864;
        v2013 = v2016;
        }
      const v2017 = stdlib.le(v2012, v2013);
      if (v2017) {
        let v2018;
        if (v1606) {
          v2018 = v1646;
          }
        else {
          const v2020 = stdlib.lt(v1864, v1646);
          const v2021 = v2020 ? v1646 : v1864;
          v2018 = v2021;
          }
        await stdlib.mapSet(map2, v1862, v2018);
        const v2024 = v1998;
        await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:358:27:decimal', stdlib.UInt_max, '0'));
        const v2025 = await txn1.getOutput('claim', 'v2024', ctc1, v2024);
        if (v849) {
          stdlib.protect(ctc0, await interact.out(v1866, v2025), {
            at: './farm.rsh:341:7:application',
            fs: ['at ./farm.rsh:341:7:application call to [unknown function] (defined at: ./farm.rsh:341:7:function exp)', 'at ./farm.rsh:360:19:application call to "callback" (defined at: ./farm.rsh:349:18:function exp)', 'at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v2032 = stdlib.lt(v1998, v1965);
        if (v2032) {
          const v2038 = stdlib.sub(v1965, v1998);
          const v2041 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1')];
          const v2042 = v1964[stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '2')];
          const v2043 = [v2038, v2041, v2042];
          const v2044 = stdlib.Array_set(v1960, stdlib.checkedBigNumberify('./farm.rsh:362:56:application', stdlib.UInt_max, '1'), v2043);
          ;
          null;
          const v2045 = stdlib.add(v1649, v1998);
          let v2046;
          if (v1606) {
            v2046 = v1646;
            }
          else {
            const v2048 = stdlib.lt(v1864, v1646);
            const v2049 = v2048 ? v1646 : v1864;
            v2046 = v2049;
            }
          const v7397 = v2046;
          const v7398 = v2008;
          const v7399 = v1967;
          const v7400 = v2045;
          const v7401 = v1650;
          const v7403 = v2044;
          const v7404 = v1658;
          return;
          }
        else {
          null;
          const v2057 = stdlib.add(v1649, v1998);
          let v2058;
          if (v1606) {
            v2058 = v1646;
            }
          else {
            const v2060 = stdlib.lt(v1864, v1646);
            const v2061 = v2060 ? v1646 : v1864;
            v2058 = v2061;
            }
          const v7413 = v2058;
          const v7414 = v2008;
          const v7415 = v1967;
          const v7416 = v2057;
          const v7417 = v1650;
          const v7419 = v1960;
          const v7420 = v1658;
          return;
          }}
      else {
        const v2069 = stdlib.checkedBigNumberify('./farm.rsh:374:20:decimal', stdlib.UInt_max, '0');
        const v2070 = await txn1.getOutput('claim', 'v2069', ctc1, v2069);
        if (v849) {
          stdlib.protect(ctc0, await interact.out(v1866, v2070), {
            at: './farm.rsh:341:7:application',
            fs: ['at ./farm.rsh:341:7:application call to [unknown function] (defined at: ./farm.rsh:341:7:function exp)', 'at ./farm.rsh:374:19:application call to "callback" (defined at: ./farm.rsh:349:18:function exp)', 'at ./farm.rsh:349:18:application call to [unknown function] (defined at: ./farm.rsh:349:18:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        let v2075;
        if (v1606) {
          v2075 = v1646;
          }
        else {
          const v2077 = stdlib.lt(v1864, v1646);
          const v2078 = v2077 ? v1646 : v1864;
          v2075 = v2078;
          }
        const v7429 = v2075;
        const v7430 = v2008;
        const v7431 = v1967;
        const v7432 = v1649;
        const v7433 = v1650;
        const v7435 = v1960;
        const v7436 = v1658;
        return;
        }
      break;
      }
    case 'recalculateRewards0_163': {
      const v2376 = v1863[1];
      return;
      break;
      }
    case 'setTime0_163': {
      const v2886 = v1863[1];
      return;
      break;
      }
    case 'stake0_163': {
      const v3396 = v1863[1];
      return;
      break;
      }
    case 'unstake0_163': {
      const v3906 = v1863[1];
      return;
      break;
      }
    }
  
  
  };
export async function _recalculateRewards5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _recalculateRewards5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _recalculateRewards5 expects to receive an interact object as its second argument.`));}
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
    claim0_163: ctc10,
    recalculateRewards0_163: ctc10,
    setTime0_163: ctc11,
    stake0_163: ctc11,
    unstake0_163: ctc11
    });
  const ctc13 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc3]]);
  
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
  
  
  const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v1736 = stdlib.protect(ctc10, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:399:9:application call to [unknown function] (defined at: ./farm.rsh:399:9:function exp)', 'at ./farm.rsh:196:21:application call to "runrecalculateRewards0_163" (defined at: ./farm.rsh:399:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'in',
    who: 'recalculateRewards'
    });
  const v1740 = ['recalculateRewards0_163', v1736];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658, v1740],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:399:9:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./farm.rsh:278:14:decimal', stdlib.UInt_max, '0'), v1598], [stdlib.checkedBigNumberify('./farm.rsh:278:14:decimal', stdlib.UInt_max, '0'), v1599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
      
      switch (v1863[0]) {
        case 'claim0_163': {
          const v1866 = v1863[1];
          
          break;
          }
        case 'recalculateRewards0_163': {
          const v2376 = v1863[1];
          sim_r.txns.push({
            kind: 'api',
            who: "recalculateRewards"
            });
          ;
          const v2453 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2454 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2458 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2459 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v2460 = [v2454, v2458, v2459];
          const v2461 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2460);
          ;
          const v2462 = v2461[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2463 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2467 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2468 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v2469 = [v2463, v2467, v2468];
          const v2470 = stdlib.Array_set(v2461, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2469);
          ;
          let v2597;
          let v2598;
          if (v1606) {
            v2598 = v1646;
            }
          else {
            const v2600 = stdlib.lt(v1864, v1646);
            const v2601 = v2600 ? v1646 : v1864;
            v2598 = v2601;
            }
          const v2602 = stdlib.lt(v2598, v1601);
          let v2603;
          if (v1606) {
            v2603 = v1646;
            }
          else {
            const v2605 = stdlib.lt(v1864, v1646);
            const v2606 = v2605 ? v1646 : v1864;
            v2603 = v2606;
            }
          const v2607 = v2602 ? v2603 : v1601;
          const v2608 = stdlib.sub(v2607, v1647);
          const v2609 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
          if (v2609) {
            v2597 = v1648;
            }
          else {
            const v2610 = stdlib.cast("UInt", "UInt256", v2608, false);
            const v2611 = stdlib.cast("UInt", "UInt256", v1602, false);
            const v2612 = stdlib.mul256(v2610, v2611);
            const v2613 = stdlib.mul256(v2612, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
            const v2614 = stdlib.cast("UInt", "UInt256", v1650, false);
            const v2615 = stdlib.div256(v2613, v2614);
            const v2616 = stdlib.add256(v1648, v2615);
            v2597 = v2616;
            }
          const v2617 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1862), null);
          const v2618 = stdlib.fromSome(v2617, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
          const v2619 = stdlib.cast("UInt", "UInt256", v2618, false);
          const v2620 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1862), null);
          const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2622 = stdlib.sub256(v2597, v2621);
          const v2623 = stdlib.mul256(v2619, v2622);
          const v2624 = stdlib.div256(v2623, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2625 = stdlib.cast("UInt256", "UInt", v2624, false);
          const v2626 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1862), null);
          const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
          const v2628 = stdlib.add(v2625, v2627);
          await stdlib.simMapSet(sim_r, 1, v1862, v2628);
          await stdlib.simMapSet(sim_r, 3, v1862, v2597);
          let v2629;
          if (v1606) {
            v2629 = v1646;
            }
          else {
            const v2631 = stdlib.lt(v1864, v1646);
            const v2632 = v2631 ? v1646 : v1864;
            v2629 = v2632;
            }
          const v2633 = stdlib.lt(v2629, v1601);
          let v2634;
          if (v1606) {
            v2634 = v1646;
            }
          else {
            const v2636 = stdlib.lt(v1864, v1646);
            const v2637 = v2636 ? v1646 : v1864;
            v2634 = v2637;
            }
          const v2638 = v2633 ? v2634 : v1601;
          const v2644 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1862), null);
          const v2645 = stdlib.fromSome(v2644, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
          const v2648 = {
            lockTimestamp: v2645,
            reward: v2628,
            rewardPerTokenPaid: v2597,
            staked: v2618
            };
          const v2650 = await txn1.getOutput('recalculateRewards', 'v2648', ctc13, v2648);
          
          let v2659;
          if (v1606) {
            v2659 = v1646;
            }
          else {
            const v2661 = stdlib.lt(v1864, v1646);
            const v2662 = v2661 ? v1646 : v1864;
            v2659 = v2662;
            }
          const v7573 = v2659;
          const v7574 = v2638;
          const v7575 = v2597;
          const v7576 = v1649;
          const v7577 = v1650;
          const v7579 = v2470;
          const v7580 = v1658;
          sim_r.isHalt = false;
          
          break;
          }
        case 'setTime0_163': {
          const v2886 = v1863[1];
          
          break;
          }
        case 'stake0_163': {
          const v3396 = v1863[1];
          
          break;
          }
        case 'unstake0_163': {
          const v3906 = v1863[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
  switch (v1863[0]) {
    case 'claim0_163': {
      const v1866 = v1863[1];
      return;
      break;
      }
    case 'recalculateRewards0_163': {
      const v2376 = v1863[1];
      undefined /* setApiDetails */;
      ;
      const v2453 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2454 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2458 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2459 = v2453[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v2460 = [v2454, v2458, v2459];
      const v2461 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2460);
      ;
      const v2462 = v2461[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2463 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2467 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2468 = v2462[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v2469 = [v2463, v2467, v2468];
      const v2470 = stdlib.Array_set(v2461, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2469);
      ;
      let v2597;
      let v2598;
      if (v1606) {
        v2598 = v1646;
        }
      else {
        const v2600 = stdlib.lt(v1864, v1646);
        const v2601 = v2600 ? v1646 : v1864;
        v2598 = v2601;
        }
      const v2602 = stdlib.lt(v2598, v1601);
      let v2603;
      if (v1606) {
        v2603 = v1646;
        }
      else {
        const v2605 = stdlib.lt(v1864, v1646);
        const v2606 = v2605 ? v1646 : v1864;
        v2603 = v2606;
        }
      const v2607 = v2602 ? v2603 : v1601;
      const v2608 = stdlib.sub(v2607, v1647);
      const v2609 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
      if (v2609) {
        v2597 = v1648;
        }
      else {
        const v2610 = stdlib.cast("UInt", "UInt256", v2608, false);
        const v2611 = stdlib.cast("UInt", "UInt256", v1602, false);
        const v2612 = stdlib.mul256(v2610, v2611);
        const v2613 = stdlib.mul256(v2612, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2614 = stdlib.cast("UInt", "UInt256", v1650, false);
        const v2615 = stdlib.div256(v2613, v2614);
        const v2616 = stdlib.add256(v1648, v2615);
        v2597 = v2616;
        }
      const v2617 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
      const v2618 = stdlib.fromSome(v2617, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
      const v2619 = stdlib.cast("UInt", "UInt256", v2618, false);
      const v2620 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
      const v2621 = stdlib.fromSome(v2620, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2622 = stdlib.sub256(v2597, v2621);
      const v2623 = stdlib.mul256(v2619, v2622);
      const v2624 = stdlib.div256(v2623, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2625 = stdlib.cast("UInt256", "UInt", v2624, false);
      const v2626 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
      const v2627 = stdlib.fromSome(v2626, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
      const v2628 = stdlib.add(v2625, v2627);
      await stdlib.mapSet(map1, v1862, v2628);
      await stdlib.mapSet(map3, v1862, v2597);
      let v2629;
      if (v1606) {
        v2629 = v1646;
        }
      else {
        const v2631 = stdlib.lt(v1864, v1646);
        const v2632 = v2631 ? v1646 : v1864;
        v2629 = v2632;
        }
      const v2633 = stdlib.lt(v2629, v1601);
      let v2634;
      if (v1606) {
        v2634 = v1646;
        }
      else {
        const v2636 = stdlib.lt(v1864, v1646);
        const v2637 = v2636 ? v1646 : v1864;
        v2634 = v2637;
        }
      const v2638 = v2633 ? v2634 : v1601;
      const v2644 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
      const v2645 = stdlib.fromSome(v2644, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
      const v2648 = {
        lockTimestamp: v2645,
        reward: v2628,
        rewardPerTokenPaid: v2597,
        staked: v2618
        };
      const v2650 = await txn1.getOutput('recalculateRewards', 'v2648', ctc13, v2648);
      if (v849) {
        stdlib.protect(ctc0, await interact.out(v2376, v2650), {
          at: './farm.rsh:399:10:application',
          fs: ['at ./farm.rsh:399:10:application call to [unknown function] (defined at: ./farm.rsh:399:10:function exp)', 'at ./farm.rsh:401:15:application call to "callback" (defined at: ./farm.rsh:399:45:function exp)', 'at ./farm.rsh:399:45:application call to [unknown function] (defined at: ./farm.rsh:399:45:function exp)'],
          msg: 'out',
          who: 'recalculateRewards'
          });
        }
      else {
        }
      
      let v2659;
      if (v1606) {
        v2659 = v1646;
        }
      else {
        const v2661 = stdlib.lt(v1864, v1646);
        const v2662 = v2661 ? v1646 : v1864;
        v2659 = v2662;
        }
      const v7573 = v2659;
      const v7574 = v2638;
      const v7575 = v2597;
      const v7576 = v1649;
      const v7577 = v1650;
      const v7579 = v2470;
      const v7580 = v1658;
      return;
      
      break;
      }
    case 'setTime0_163': {
      const v2886 = v1863[1];
      return;
      break;
      }
    case 'stake0_163': {
      const v3396 = v1863[1];
      return;
      break;
      }
    case 'unstake0_163': {
      const v3906 = v1863[1];
      return;
      break;
      }
    }
  
  
  };
export async function _setTime5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _setTime5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _setTime5 expects to receive an interact object as its second argument.`));}
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
    claim0_163: ctc11,
    recalculateRewards0_163: ctc11,
    setTime0_163: ctc10,
    stake0_163: ctc10,
    unstake0_163: ctc10
    });
  const ctc13 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc3]]);
  
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
  
  
  const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v1724 = stdlib.protect(ctc10, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:387:15:application call to [unknown function] (defined at: ./farm.rsh:387:15:function exp)', 'at ./farm.rsh:196:21:application call to "runsetTime0_163" (defined at: ./farm.rsh:385:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1725 = v1724[stdlib.checkedBigNumberify('./farm.rsh:1:23:application', stdlib.UInt_max, '0')];
  stdlib.assert(v1606, {
    at: './farm.rsh:388:14:application',
    fs: ['at ./farm.rsh:387:15:application call to [unknown function] (defined at: ./farm.rsh:387:15:function exp)', 'at ./farm.rsh:387:15:application call to [unknown function] (defined at: ./farm.rsh:387:15:function exp)', 'at ./farm.rsh:196:21:application call to "runsetTime0_163" (defined at: ./farm.rsh:385:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1728 = stdlib.ge(v1725, v1646);
  stdlib.assert(v1728, {
    at: './farm.rsh:389:14:application',
    fs: ['at ./farm.rsh:387:15:application call to [unknown function] (defined at: ./farm.rsh:387:15:function exp)', 'at ./farm.rsh:387:15:application call to [unknown function] (defined at: ./farm.rsh:387:15:function exp)', 'at ./farm.rsh:196:21:application call to "runsetTime0_163" (defined at: ./farm.rsh:385:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1732 = ['setTime0_163', v1724];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658, v1732],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:391:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./farm.rsh:391:19:decimal', stdlib.UInt_max, '0'), v1598], [stdlib.checkedBigNumberify('./farm.rsh:391:36:decimal', stdlib.UInt_max, '0'), v1599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
      
      switch (v1863[0]) {
        case 'claim0_163': {
          const v1866 = v1863[1];
          
          break;
          }
        case 'recalculateRewards0_163': {
          const v2376 = v1863[1];
          
          break;
          }
        case 'setTime0_163': {
          const v2886 = v1863[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v2963 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2964 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2968 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2969 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v2970 = [v2964, v2968, v2969];
          const v2971 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2970);
          ;
          const v2972 = v2971[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2973 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v2977 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v2978 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v2979 = [v2973, v2977, v2978];
          const v2980 = stdlib.Array_set(v2971, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2979);
          ;
          const v3175 = v2886[stdlib.checkedBigNumberify('./farm.rsh:385:9:spread', stdlib.UInt_max, '0')];
          const v3177 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1862), null);
          const v3178 = stdlib.fromSome(v3177, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
          const v3179 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1862), null);
          const v3180 = stdlib.fromSome(v3179, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
          const v3181 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1862), null);
          const v3182 = stdlib.fromSome(v3181, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
          const v3183 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1862), null);
          const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3185 = {
            lockTimestamp: v3182,
            reward: v3180,
            rewardPerTokenPaid: v3184,
            staked: v3178
            };
          const v3187 = await txn1.getOutput('setTime', 'v3185', ctc13, v3185);
          
          const v7717 = v3175;
          const v7718 = v1647;
          const v7719 = v1648;
          const v7720 = v1649;
          const v7721 = v1650;
          const v7723 = v2980;
          const v7724 = v1658;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_163': {
          const v3396 = v1863[1];
          
          break;
          }
        case 'unstake0_163': {
          const v3906 = v1863[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
  switch (v1863[0]) {
    case 'claim0_163': {
      const v1866 = v1863[1];
      return;
      break;
      }
    case 'recalculateRewards0_163': {
      const v2376 = v1863[1];
      return;
      break;
      }
    case 'setTime0_163': {
      const v2886 = v1863[1];
      undefined /* setApiDetails */;
      ;
      const v2963 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2964 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2968 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2969 = v2963[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v2970 = [v2964, v2968, v2969];
      const v2971 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v2970);
      ;
      const v2972 = v2971[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2973 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v2977 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v2978 = v2972[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v2979 = [v2973, v2977, v2978];
      const v2980 = stdlib.Array_set(v2971, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v2979);
      ;
      const v3175 = v2886[stdlib.checkedBigNumberify('./farm.rsh:385:9:spread', stdlib.UInt_max, '0')];
      stdlib.assert(v1606, {
        at: './farm.rsh:393:14:application',
        fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v3176 = stdlib.ge(v3175, v1646);
      stdlib.assert(v3176, {
        at: './farm.rsh:394:14:application',
        fs: ['at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v3177 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
      const v3178 = stdlib.fromSome(v3177, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
      const v3179 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
      const v3180 = stdlib.fromSome(v3179, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
      const v3181 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
      const v3182 = stdlib.fromSome(v3181, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
      const v3183 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
      const v3184 = stdlib.fromSome(v3183, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3185 = {
        lockTimestamp: v3182,
        reward: v3180,
        rewardPerTokenPaid: v3184,
        staked: v3178
        };
      const v3187 = await txn1.getOutput('setTime', 'v3185', ctc13, v3185);
      if (v849) {
        stdlib.protect(ctc0, await interact.out(v2886, v3187), {
          at: './farm.rsh:386:7:application',
          fs: ['at ./farm.rsh:386:7:application call to [unknown function] (defined at: ./farm.rsh:386:7:function exp)', 'at ./farm.rsh:395:17:application call to "callback" (defined at: ./farm.rsh:392:25:function exp)', 'at ./farm.rsh:392:25:application call to [unknown function] (defined at: ./farm.rsh:392:25:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v7717 = v3175;
      const v7718 = v1647;
      const v7719 = v1648;
      const v7720 = v1649;
      const v7721 = v1650;
      const v7723 = v2980;
      const v7724 = v1658;
      return;
      
      break;
      }
    case 'stake0_163': {
      const v3396 = v1863[1];
      return;
      break;
      }
    case 'unstake0_163': {
      const v3906 = v1863[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stake5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stake5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stake5 expects to receive an interact object as its second argument.`));}
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
    claim0_163: ctc11,
    recalculateRewards0_163: ctc11,
    setTime0_163: ctc10,
    stake0_163: ctc10,
    unstake0_163: ctc10
    });
  
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
  
  
  const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v1682 = stdlib.protect(ctc10, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:281:11:application call to [unknown function] (defined at: ./farm.rsh:281:11:function exp)', 'at ./farm.rsh:196:21:application call to "runstake0_163" (defined at: ./farm.rsh:279:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1683 = v1682[stdlib.checkedBigNumberify('./farm.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1686 = stdlib.le(v1646, v1601);
  stdlib.assert(v1686, {
    at: './farm.rsh:282:14:application',
    fs: ['at ./farm.rsh:281:11:application call to [unknown function] (defined at: ./farm.rsh:281:11:function exp)', 'at ./farm.rsh:281:11:application call to [unknown function] (defined at: ./farm.rsh:281:11:function exp)', 'at ./farm.rsh:196:21:application call to "runstake0_163" (defined at: ./farm.rsh:279:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'cannot stake when no rewards left',
    who: 'stake'
    });
  const v1690 = ['stake0_163', v1682];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658, v1690],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:284:21:decimal', stdlib.UInt_max, '0'), [[v1683, v1598], [stdlib.checkedBigNumberify('./farm.rsh:284:48:decimal', stdlib.UInt_max, '0'), v1599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
      
      switch (v1863[0]) {
        case 'claim0_163': {
          const v1866 = v1863[1];
          
          break;
          }
        case 'recalculateRewards0_163': {
          const v2376 = v1863[1];
          
          break;
          }
        case 'setTime0_163': {
          const v2886 = v1863[1];
          
          break;
          }
        case 'stake0_163': {
          const v3396 = v1863[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v3429 = v3396[stdlib.checkedBigNumberify('./farm.rsh:279:9:spread', stdlib.UInt_max, '0')];
          ;
          const v3473 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3474 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3475 = stdlib.add(v3474, v3429);
          const v3478 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3479 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v3480 = [v3475, v3478, v3479];
          const v3481 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3480);
          sim_r.txns.push({
            amt: v3429,
            kind: 'to',
            tok: v1598
            });
          const v3482 = v3481[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3483 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3487 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3488 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v3489 = [v3483, v3487, v3488];
          const v3490 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3489);
          ;
          const v3711 = stdlib.mul(v3429, v1604);
          const v3712 = stdlib.div(v3711, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
          const v3713 = stdlib.sub(v3429, v3712);
          let v3714;
          let v3715;
          if (v1606) {
            v3715 = v1646;
            }
          else {
            const v3717 = stdlib.lt(v1864, v1646);
            const v3718 = v3717 ? v1646 : v1864;
            v3715 = v3718;
            }
          const v3719 = stdlib.lt(v3715, v1601);
          let v3720;
          if (v1606) {
            v3720 = v1646;
            }
          else {
            const v3722 = stdlib.lt(v1864, v1646);
            const v3723 = v3722 ? v1646 : v1864;
            v3720 = v3723;
            }
          const v3724 = v3719 ? v3720 : v1601;
          const v3725 = stdlib.sub(v3724, v1647);
          const v3726 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
          if (v3726) {
            v3714 = v1648;
            }
          else {
            const v3727 = stdlib.cast("UInt", "UInt256", v3725, false);
            const v3728 = stdlib.cast("UInt", "UInt256", v1602, false);
            const v3729 = stdlib.mul256(v3727, v3728);
            const v3730 = stdlib.mul256(v3729, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
            const v3731 = stdlib.cast("UInt", "UInt256", v1650, false);
            const v3732 = stdlib.div256(v3730, v3731);
            const v3733 = stdlib.add256(v1648, v3732);
            v3714 = v3733;
            }
          const v3734 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1862), null);
          const v3735 = stdlib.fromSome(v3734, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
          const v3736 = stdlib.cast("UInt", "UInt256", v3735, false);
          const v3737 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1862), null);
          const v3738 = stdlib.fromSome(v3737, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3739 = stdlib.sub256(v3714, v3738);
          const v3740 = stdlib.mul256(v3736, v3739);
          const v3741 = stdlib.div256(v3740, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3742 = stdlib.cast("UInt256", "UInt", v3741, false);
          const v3743 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1862), null);
          const v3744 = stdlib.fromSome(v3743, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
          const v3745 = stdlib.add(v3742, v3744);
          await stdlib.simMapSet(sim_r, 1, v1862, v3745);
          await stdlib.simMapSet(sim_r, 3, v1862, v3714);
          let v3746;
          if (v1606) {
            v3746 = v1646;
            }
          else {
            const v3748 = stdlib.lt(v1864, v1646);
            const v3749 = v3748 ? v1646 : v1864;
            v3746 = v3749;
            }
          const v3750 = stdlib.lt(v3746, v1601);
          let v3751;
          if (v1606) {
            v3751 = v1646;
            }
          else {
            const v3753 = stdlib.lt(v1864, v1646);
            const v3754 = v3753 ? v1646 : v1864;
            v3751 = v3754;
            }
          const v3755 = v3750 ? v3751 : v1601;
          let v3757;
          if (v1606) {
            v3757 = v1646;
            }
          else {
            const v3759 = stdlib.lt(v1864, v1646);
            const v3760 = v3759 ? v1646 : v1864;
            v3757 = v3760;
            }
          await stdlib.simMapSet(sim_r, 2, v1862, v3757);
          const v3764 = stdlib.add(v3735, v3713);
          await stdlib.simMapSet(sim_r, 0, v1862, v3764);
          null;
          const v3765 = await txn1.getOutput('stake', 'v3713', ctc1, v3713);
          
          const v3771 = stdlib.add(v1650, v3713);
          let v3772;
          if (v1606) {
            v3772 = v1646;
            }
          else {
            const v3774 = stdlib.lt(v1864, v1646);
            const v3775 = v3774 ? v1646 : v1864;
            v3772 = v3775;
            }
          const v7861 = v3772;
          const v7862 = v3755;
          const v7863 = v3714;
          const v7864 = v1649;
          const v7865 = v3771;
          const v7867 = v3490;
          const v7868 = v1658;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_163': {
          const v3906 = v1863[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
  switch (v1863[0]) {
    case 'claim0_163': {
      const v1866 = v1863[1];
      return;
      break;
      }
    case 'recalculateRewards0_163': {
      const v2376 = v1863[1];
      return;
      break;
      }
    case 'setTime0_163': {
      const v2886 = v1863[1];
      return;
      break;
      }
    case 'stake0_163': {
      const v3396 = v1863[1];
      undefined /* setApiDetails */;
      const v3429 = v3396[stdlib.checkedBigNumberify('./farm.rsh:279:9:spread', stdlib.UInt_max, '0')];
      ;
      const v3473 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3474 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3475 = stdlib.add(v3474, v3429);
      const v3478 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3479 = v3473[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v3480 = [v3475, v3478, v3479];
      const v3481 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3480);
      ;
      const v3482 = v3481[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3483 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3487 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3488 = v3482[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v3489 = [v3483, v3487, v3488];
      const v3490 = stdlib.Array_set(v3481, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3489);
      ;
      const v3710 = stdlib.le(v1646, v1601);
      stdlib.assert(v3710, {
        at: './farm.rsh:286:14:application',
        fs: ['at ./farm.rsh:285:27:application call to [unknown function] (defined at: ./farm.rsh:285:27:function exp)'],
        msg: 'cannot stake when no rewards left',
        who: 'stake'
        });
      const v3711 = stdlib.mul(v3429, v1604);
      const v3712 = stdlib.div(v3711, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
      const v3713 = stdlib.sub(v3429, v3712);
      let v3714;
      let v3715;
      if (v1606) {
        v3715 = v1646;
        }
      else {
        const v3717 = stdlib.lt(v1864, v1646);
        const v3718 = v3717 ? v1646 : v1864;
        v3715 = v3718;
        }
      const v3719 = stdlib.lt(v3715, v1601);
      let v3720;
      if (v1606) {
        v3720 = v1646;
        }
      else {
        const v3722 = stdlib.lt(v1864, v1646);
        const v3723 = v3722 ? v1646 : v1864;
        v3720 = v3723;
        }
      const v3724 = v3719 ? v3720 : v1601;
      const v3725 = stdlib.sub(v3724, v1647);
      const v3726 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
      if (v3726) {
        v3714 = v1648;
        }
      else {
        const v3727 = stdlib.cast("UInt", "UInt256", v3725, false);
        const v3728 = stdlib.cast("UInt", "UInt256", v1602, false);
        const v3729 = stdlib.mul256(v3727, v3728);
        const v3730 = stdlib.mul256(v3729, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3731 = stdlib.cast("UInt", "UInt256", v1650, false);
        const v3732 = stdlib.div256(v3730, v3731);
        const v3733 = stdlib.add256(v1648, v3732);
        v3714 = v3733;
        }
      const v3734 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
      const v3735 = stdlib.fromSome(v3734, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
      const v3736 = stdlib.cast("UInt", "UInt256", v3735, false);
      const v3737 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
      const v3738 = stdlib.fromSome(v3737, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3739 = stdlib.sub256(v3714, v3738);
      const v3740 = stdlib.mul256(v3736, v3739);
      const v3741 = stdlib.div256(v3740, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3742 = stdlib.cast("UInt256", "UInt", v3741, false);
      const v3743 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
      const v3744 = stdlib.fromSome(v3743, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
      const v3745 = stdlib.add(v3742, v3744);
      await stdlib.mapSet(map1, v1862, v3745);
      await stdlib.mapSet(map3, v1862, v3714);
      let v3746;
      if (v1606) {
        v3746 = v1646;
        }
      else {
        const v3748 = stdlib.lt(v1864, v1646);
        const v3749 = v3748 ? v1646 : v1864;
        v3746 = v3749;
        }
      const v3750 = stdlib.lt(v3746, v1601);
      let v3751;
      if (v1606) {
        v3751 = v1646;
        }
      else {
        const v3753 = stdlib.lt(v1864, v1646);
        const v3754 = v3753 ? v1646 : v1864;
        v3751 = v3754;
        }
      const v3755 = v3750 ? v3751 : v1601;
      let v3757;
      if (v1606) {
        v3757 = v1646;
        }
      else {
        const v3759 = stdlib.lt(v1864, v1646);
        const v3760 = v3759 ? v1646 : v1864;
        v3757 = v3760;
        }
      await stdlib.mapSet(map2, v1862, v3757);
      const v3764 = stdlib.add(v3735, v3713);
      await stdlib.mapSet(map0, v1862, v3764);
      null;
      const v3765 = await txn1.getOutput('stake', 'v3713', ctc1, v3713);
      if (v849) {
        stdlib.protect(ctc0, await interact.out(v3396, v3765), {
          at: './farm.rsh:280:7:application',
          fs: ['at ./farm.rsh:280:7:application call to [unknown function] (defined at: ./farm.rsh:280:7:function exp)', 'at ./farm.rsh:295:17:application call to "callback" (defined at: ./farm.rsh:285:27:function exp)', 'at ./farm.rsh:285:27:application call to [unknown function] (defined at: ./farm.rsh:285:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v3771 = stdlib.add(v1650, v3713);
      let v3772;
      if (v1606) {
        v3772 = v1646;
        }
      else {
        const v3774 = stdlib.lt(v1864, v1646);
        const v3775 = v3774 ? v1646 : v1864;
        v3772 = v3775;
        }
      const v7861 = v3772;
      const v7862 = v3755;
      const v7863 = v3714;
      const v7864 = v1649;
      const v7865 = v3771;
      const v7867 = v3490;
      const v7868 = v1658;
      return;
      
      break;
      }
    case 'unstake0_163': {
      const v3906 = v1863[1];
      return;
      break;
      }
    }
  
  
  };
export async function _unstake5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _unstake5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _unstake5 expects to receive an interact object as its second argument.`));}
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
    claim0_163: ctc11,
    recalculateRewards0_163: ctc11,
    setTime0_163: ctc10,
    stake0_163: ctc10,
    unstake0_163: ctc10
    });
  
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
  
  
  const [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v1692 = ctc.selfAddress();
  const v1694 = stdlib.protect(ctc10, await interact.in(), {
    at: './farm.rsh:1:23:application',
    fs: ['at ./farm.rsh:307:19:application call to [unknown function] (defined at: ./farm.rsh:307:19:function exp)', 'at ./farm.rsh:196:21:application call to "rununstake0_163" (defined at: ./farm.rsh:305:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1695 = v1694[stdlib.checkedBigNumberify('./farm.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1692), null);
  const v1699 = stdlib.fromSome(v1698, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
  const v1700 = stdlib.le(v1695, v1699);
  stdlib.assert(v1700, {
    at: './farm.rsh:308:14:application',
    fs: ['at ./farm.rsh:307:19:application call to [unknown function] (defined at: ./farm.rsh:307:19:function exp)', 'at ./farm.rsh:307:19:application call to [unknown function] (defined at: ./farm.rsh:307:19:function exp)', 'at ./farm.rsh:196:21:application call to "rununstake0_163" (defined at: ./farm.rsh:305:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v1701 = v1657[stdlib.checkedBigNumberify('./farm.rsh:309:35:application', stdlib.UInt_max, '0')];
  const v1702 = v1701[stdlib.checkedBigNumberify('./farm.rsh:309:35:application', stdlib.UInt_max, '0')];
  const v1703 = stdlib.le(v1695, v1702);
  stdlib.assert(v1703, {
    at: './farm.rsh:309:14:application',
    fs: ['at ./farm.rsh:307:19:application call to [unknown function] (defined at: ./farm.rsh:307:19:function exp)', 'at ./farm.rsh:307:19:application call to [unknown function] (defined at: ./farm.rsh:307:19:function exp)', 'at ./farm.rsh:196:21:application call to "rununstake0_163" (defined at: ./farm.rsh:305:9:function exp)', 'at ./farm.rsh:196:21:application call to [unknown function] (defined at: ./farm.rsh:196:21:function exp)'],
    msg: 'tried to unstake more than contract has',
    who: 'unstake'
    });
  const v1707 = ['unstake0_163', v1694];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1597, v1598, v1599, v1600, v1601, v1602, v1603, v1604, v1605, v1606, v1646, v1647, v1648, v1649, v1650, v1657, v1658, v1707],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./farm.rsh:311:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./farm.rsh:311:19:decimal', stdlib.UInt_max, '0'), v1598], [stdlib.checkedBigNumberify('./farm.rsh:311:36:decimal', stdlib.UInt_max, '0'), v1599]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
      
      switch (v1863[0]) {
        case 'claim0_163': {
          const v1866 = v1863[1];
          
          break;
          }
        case 'recalculateRewards0_163': {
          const v2376 = v1863[1];
          
          break;
          }
        case 'setTime0_163': {
          const v2886 = v1863[1];
          
          break;
          }
        case 'stake0_163': {
          const v3396 = v1863[1];
          
          break;
          }
        case 'unstake0_163': {
          const v3906 = v1863[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v3983 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3984 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3988 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3989 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v3990 = [v3984, v3988, v3989];
          const v3991 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3990);
          ;
          const v3992 = v3991[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3993 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
          const v3997 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
          const v3998 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
          const v3999 = [v3993, v3997, v3998];
          const v4000 = stdlib.Array_set(v3991, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3999);
          ;
          const v4288 = v3906[stdlib.checkedBigNumberify('./farm.rsh:305:9:spread', stdlib.UInt_max, '0')];
          const v4289 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1862), null);
          const v4290 = stdlib.fromSome(v4289, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
          const v4292 = v4000[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
          const v4293 = v4292[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
          let v4297;
          let v4298;
          if (v1606) {
            v4298 = v1646;
            }
          else {
            const v4300 = stdlib.lt(v1864, v1646);
            const v4301 = v4300 ? v1646 : v1864;
            v4298 = v4301;
            }
          const v4302 = stdlib.lt(v4298, v1601);
          let v4303;
          if (v1606) {
            v4303 = v1646;
            }
          else {
            const v4305 = stdlib.lt(v1864, v1646);
            const v4306 = v4305 ? v1646 : v1864;
            v4303 = v4306;
            }
          const v4307 = v4302 ? v4303 : v1601;
          const v4308 = stdlib.sub(v4307, v1647);
          const v4309 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
          if (v4309) {
            v4297 = v1648;
            }
          else {
            const v4310 = stdlib.cast("UInt", "UInt256", v4308, false);
            const v4311 = stdlib.cast("UInt", "UInt256", v1602, false);
            const v4312 = stdlib.mul256(v4310, v4311);
            const v4313 = stdlib.mul256(v4312, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
            const v4314 = stdlib.cast("UInt", "UInt256", v1650, false);
            const v4315 = stdlib.div256(v4313, v4314);
            const v4316 = stdlib.add256(v1648, v4315);
            v4297 = v4316;
            }
          const v4319 = stdlib.cast("UInt", "UInt256", v4290, false);
          const v4320 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1862), null);
          const v4321 = stdlib.fromSome(v4320, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4322 = stdlib.sub256(v4297, v4321);
          const v4323 = stdlib.mul256(v4319, v4322);
          const v4324 = stdlib.div256(v4323, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4325 = stdlib.cast("UInt256", "UInt", v4324, false);
          const v4326 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1862), null);
          const v4327 = stdlib.fromSome(v4326, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
          const v4328 = stdlib.add(v4325, v4327);
          await stdlib.simMapSet(sim_r, 1, v1862, v4328);
          await stdlib.simMapSet(sim_r, 3, v1862, v4297);
          let v4329;
          if (v1606) {
            v4329 = v1646;
            }
          else {
            const v4331 = stdlib.lt(v1864, v1646);
            const v4332 = v4331 ? v1646 : v1864;
            v4329 = v4332;
            }
          const v4333 = stdlib.lt(v4329, v1601);
          let v4334;
          if (v1606) {
            v4334 = v1646;
            }
          else {
            const v4336 = stdlib.lt(v1864, v1646);
            const v4337 = v4336 ? v1646 : v1864;
            v4334 = v4337;
            }
          const v4338 = v4333 ? v4334 : v1601;
          const v4340 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1862), null);
          const v4341 = stdlib.fromSome(v4340, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
          const v4342 = stdlib.add(v4341, v1603);
          let v4343;
          if (v1606) {
            v4343 = v1646;
            }
          else {
            const v4345 = stdlib.lt(v1864, v1646);
            const v4346 = v4345 ? v1646 : v1864;
            v4343 = v4346;
            }
          const v4347 = stdlib.le(v4342, v4343);
          if (v4347) {
            let v4383;
            if (v1606) {
              v4383 = v1646;
              }
            else {
              const v4385 = stdlib.lt(v1864, v1646);
              const v4386 = v4385 ? v1646 : v1864;
              v4383 = v4386;
              }
            await stdlib.simMapSet(sim_r, 2, v1862, v4383);
            const v4388 = stdlib.sub(v4290, v4288);
            await stdlib.simMapSet(sim_r, 0, v1862, v4388);
            const v4389 = stdlib.mul(v4288, v1605);
            const v4390 = stdlib.div(v4389, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
            const v4391 = stdlib.sub(v4288, v4390);
            const v4397 = stdlib.sub(v4293, v4391);
            const v4400 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
            const v4401 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
            const v4402 = [v4397, v4400, v4401];
            const v4403 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4402);
            sim_r.txns.push({
              kind: 'from',
              to: v1862,
              tok: v1598
              });
            null;
            const v4404 = await txn1.getOutput('unstake', 'v4288', ctc1, v4288);
            
            const v4410 = stdlib.sub(v1650, v4288);
            let v4411;
            if (v1606) {
              v4411 = v1646;
              }
            else {
              const v4413 = stdlib.lt(v1864, v1646);
              const v4414 = v4413 ? v1646 : v1864;
              v4411 = v4414;
              }
            const v8005 = v4411;
            const v8006 = v4338;
            const v8007 = v4297;
            const v8008 = v1649;
            const v8009 = v4410;
            const v8011 = v4403;
            const v8012 = v1658;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v1862, stdlib.checkedBigNumberify('./farm.rsh:243:22:decimal', stdlib.UInt_max, '0'));
            let v4350;
            if (v1606) {
              v4350 = v1646;
              }
            else {
              const v4352 = stdlib.lt(v1864, v1646);
              const v4353 = v4352 ? v1646 : v1864;
              v4350 = v4353;
              }
            await stdlib.simMapSet(sim_r, 2, v1862, v4350);
            const v4355 = stdlib.sub(v4290, v4288);
            await stdlib.simMapSet(sim_r, 0, v1862, v4355);
            const v4356 = stdlib.mul(v4288, v1605);
            const v4357 = stdlib.div(v4356, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
            const v4358 = stdlib.sub(v4288, v4357);
            const v4364 = stdlib.sub(v4293, v4358);
            const v4367 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
            const v4368 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
            const v4369 = [v4364, v4367, v4368];
            const v4370 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4369);
            sim_r.txns.push({
              kind: 'from',
              to: v1862,
              tok: v1598
              });
            null;
            const v4371 = await txn1.getOutput('unstake', 'v4288', ctc1, v4288);
            
            const v4377 = stdlib.sub(v1650, v4288);
            let v4378;
            if (v1606) {
              v4378 = v1646;
              }
            else {
              const v4380 = stdlib.lt(v1864, v1646);
              const v4381 = v4380 ? v1646 : v1864;
              v4378 = v4381;
              }
            const v8021 = v4378;
            const v8022 = v4338;
            const v8023 = v4297;
            const v8024 = v1649;
            const v8025 = v4377;
            const v8027 = v4370;
            const v8028 = v1658;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v1863], secs: v1865, time: v1864, didSend: v849, from: v1862 } = txn1;
  switch (v1863[0]) {
    case 'claim0_163': {
      const v1866 = v1863[1];
      return;
      break;
      }
    case 'recalculateRewards0_163': {
      const v2376 = v1863[1];
      return;
      break;
      }
    case 'setTime0_163': {
      const v2886 = v1863[1];
      return;
      break;
      }
    case 'stake0_163': {
      const v3396 = v1863[1];
      return;
      break;
      }
    case 'unstake0_163': {
      const v3906 = v1863[1];
      undefined /* setApiDetails */;
      ;
      const v3983 = v1657[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3984 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3988 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3989 = v3983[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v3990 = [v3984, v3988, v3989];
      const v3991 = stdlib.Array_set(v1657, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0'), v3990);
      ;
      const v3992 = v3991[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3993 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '0')];
      const v3997 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1')];
      const v3998 = v3992[stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '2')];
      const v3999 = [v3993, v3997, v3998];
      const v4000 = stdlib.Array_set(v3991, stdlib.checkedBigNumberify('./farm.rsh:196:21:dot', stdlib.UInt_max, '1'), v3999);
      ;
      const v4288 = v3906[stdlib.checkedBigNumberify('./farm.rsh:305:9:spread', stdlib.UInt_max, '0')];
      const v4289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
      const v4290 = stdlib.fromSome(v4289, stdlib.checkedBigNumberify('./farm.rsh:162:46:decimal', stdlib.UInt_max, '0'));
      const v4291 = stdlib.le(v4288, v4290);
      stdlib.assert(v4291, {
        at: './farm.rsh:313:14:application',
        fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      const v4292 = v4000[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
      const v4293 = v4292[stdlib.checkedBigNumberify('./farm.rsh:314:35:application', stdlib.UInt_max, '0')];
      const v4294 = stdlib.le(v4288, v4293);
      stdlib.assert(v4294, {
        at: './farm.rsh:314:14:application',
        fs: ['at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
        msg: 'tried to unstake more than contract has',
        who: 'unstake'
        });
      let v4297;
      let v4298;
      if (v1606) {
        v4298 = v1646;
        }
      else {
        const v4300 = stdlib.lt(v1864, v1646);
        const v4301 = v4300 ? v1646 : v1864;
        v4298 = v4301;
        }
      const v4302 = stdlib.lt(v4298, v1601);
      let v4303;
      if (v1606) {
        v4303 = v1646;
        }
      else {
        const v4305 = stdlib.lt(v1864, v1646);
        const v4306 = v4305 ? v1646 : v1864;
        v4303 = v4306;
        }
      const v4307 = v4302 ? v4303 : v1601;
      const v4308 = stdlib.sub(v4307, v1647);
      const v4309 = stdlib.eq(v1650, stdlib.checkedBigNumberify('./farm.rsh:215:28:decimal', stdlib.UInt_max, '0'));
      if (v4309) {
        v4297 = v1648;
        }
      else {
        const v4310 = stdlib.cast("UInt", "UInt256", v4308, false);
        const v4311 = stdlib.cast("UInt", "UInt256", v1602, false);
        const v4312 = stdlib.mul256(v4310, v4311);
        const v4313 = stdlib.mul256(v4312, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4314 = stdlib.cast("UInt", "UInt256", v1650, false);
        const v4315 = stdlib.div256(v4313, v4314);
        const v4316 = stdlib.add256(v1648, v4315);
        v4297 = v4316;
        }
      const v4319 = stdlib.cast("UInt", "UInt256", v4290, false);
      const v4320 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1862), null);
      const v4321 = stdlib.fromSome(v4320, stdlib.checkedBigNumberify('./farm.rsh:4:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4322 = stdlib.sub256(v4297, v4321);
      const v4323 = stdlib.mul256(v4319, v4322);
      const v4324 = stdlib.div256(v4323, stdlib.checkedBigNumberify('./farm.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4325 = stdlib.cast("UInt256", "UInt", v4324, false);
      const v4326 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1862), null);
      const v4327 = stdlib.fromSome(v4326, stdlib.checkedBigNumberify('./farm.rsh:165:46:decimal', stdlib.UInt_max, '0'));
      const v4328 = stdlib.add(v4325, v4327);
      await stdlib.mapSet(map1, v1862, v4328);
      await stdlib.mapSet(map3, v1862, v4297);
      let v4329;
      if (v1606) {
        v4329 = v1646;
        }
      else {
        const v4331 = stdlib.lt(v1864, v1646);
        const v4332 = v4331 ? v1646 : v1864;
        v4329 = v4332;
        }
      const v4333 = stdlib.lt(v4329, v1601);
      let v4334;
      if (v1606) {
        v4334 = v1646;
        }
      else {
        const v4336 = stdlib.lt(v1864, v1646);
        const v4337 = v4336 ? v1646 : v1864;
        v4334 = v4337;
        }
      const v4338 = v4333 ? v4334 : v1601;
      const v4340 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1862), null);
      const v4341 = stdlib.fromSome(v4340, stdlib.checkedBigNumberify('./farm.rsh:168:60:decimal', stdlib.UInt_max, '0'));
      const v4342 = stdlib.add(v4341, v1603);
      let v4343;
      if (v1606) {
        v4343 = v1646;
        }
      else {
        const v4345 = stdlib.lt(v1864, v1646);
        const v4346 = v4345 ? v1646 : v1864;
        v4343 = v4346;
        }
      const v4347 = stdlib.le(v4342, v4343);
      if (v4347) {
        let v4383;
        if (v1606) {
          v4383 = v1646;
          }
        else {
          const v4385 = stdlib.lt(v1864, v1646);
          const v4386 = v4385 ? v1646 : v1864;
          v4383 = v4386;
          }
        await stdlib.mapSet(map2, v1862, v4383);
        const v4388 = stdlib.sub(v4290, v4288);
        await stdlib.mapSet(map0, v1862, v4388);
        const v4389 = stdlib.mul(v4288, v1605);
        const v4390 = stdlib.div(v4389, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
        const v4391 = stdlib.sub(v4288, v4390);
        const v4397 = stdlib.sub(v4293, v4391);
        const v4400 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
        const v4401 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
        const v4402 = [v4397, v4400, v4401];
        const v4403 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4402);
        ;
        null;
        const v4404 = await txn1.getOutput('unstake', 'v4288', ctc1, v4288);
        if (v849) {
          stdlib.protect(ctc0, await interact.out(v3906, v4404), {
            at: './farm.rsh:306:7:application',
            fs: ['at ./farm.rsh:306:7:application call to [unknown function] (defined at: ./farm.rsh:306:7:function exp)', 'at ./farm.rsh:330:17:application call to "callback" (defined at: ./farm.rsh:312:29:function exp)', 'at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4410 = stdlib.sub(v1650, v4288);
        let v4411;
        if (v1606) {
          v4411 = v1646;
          }
        else {
          const v4413 = stdlib.lt(v1864, v1646);
          const v4414 = v4413 ? v1646 : v1864;
          v4411 = v4414;
          }
        const v8005 = v4411;
        const v8006 = v4338;
        const v8007 = v4297;
        const v8008 = v1649;
        const v8009 = v4410;
        const v8011 = v4403;
        const v8012 = v1658;
        return;
        }
      else {
        await stdlib.mapSet(map1, v1862, stdlib.checkedBigNumberify('./farm.rsh:243:22:decimal', stdlib.UInt_max, '0'));
        let v4350;
        if (v1606) {
          v4350 = v1646;
          }
        else {
          const v4352 = stdlib.lt(v1864, v1646);
          const v4353 = v4352 ? v1646 : v1864;
          v4350 = v4353;
          }
        await stdlib.mapSet(map2, v1862, v4350);
        const v4355 = stdlib.sub(v4290, v4288);
        await stdlib.mapSet(map0, v1862, v4355);
        const v4356 = stdlib.mul(v4288, v1605);
        const v4357 = stdlib.div(v4356, stdlib.checkedBigNumberify('./farm.rsh:8:19:decimal', stdlib.UInt_max, '1000000'));
        const v4358 = stdlib.sub(v4288, v4357);
        const v4364 = stdlib.sub(v4293, v4358);
        const v4367 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '1')];
        const v4368 = v4292[stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '2')];
        const v4369 = [v4364, v4367, v4368];
        const v4370 = stdlib.Array_set(v4000, stdlib.checkedBigNumberify('./farm.rsh:327:76:application', stdlib.UInt_max, '0'), v4369);
        ;
        null;
        const v4371 = await txn1.getOutput('unstake', 'v4288', ctc1, v4288);
        if (v849) {
          stdlib.protect(ctc0, await interact.out(v3906, v4371), {
            at: './farm.rsh:306:7:application',
            fs: ['at ./farm.rsh:306:7:application call to [unknown function] (defined at: ./farm.rsh:306:7:function exp)', 'at ./farm.rsh:330:17:application call to "callback" (defined at: ./farm.rsh:312:29:function exp)', 'at ./farm.rsh:312:29:application call to [unknown function] (defined at: ./farm.rsh:312:29:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4377 = stdlib.sub(v1650, v4288);
        let v4378;
        if (v1606) {
          v4378 = v1646;
          }
        else {
          const v4380 = stdlib.lt(v1864, v1646);
          const v4381 = v4380 ? v1646 : v1864;
          v4378 = v4381;
          }
        const v8021 = v4378;
        const v8022 = v4338;
        const v8023 = v4297;
        const v8024 = v1649;
        const v8025 = v4377;
        const v8027 = v4370;
        const v8028 = v1658;
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
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _claim5(ctcTop, interact);}
  };
export async function recalculateRewards(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for recalculateRewards expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for recalculateRewards expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _recalculateRewards5(ctcTop, interact);}
  };
export async function setTime(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for setTime expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for setTime expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _setTime5(ctcTop, interact);}
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _stake5(ctcTop, interact);}
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _unstake5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`claim()uint64`, `recalculateRewards()(uint64,uint64,uint64,uint256)`, `setTime(uint64)(uint64,uint64,uint64,uint256)`, `stake(uint64)uint64`, `unstake(uint64)uint64`],
    pure: [`global()(uint64,uint64,uint256,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()uint64`, `global()(uint64,uint64,uint256,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `recalculateRewards()(uint64,uint64,uint64,uint256)`, `setTime(uint64)(uint64,uint64,uint64,uint256)`, `stake(uint64)uint64`, `unstake(uint64)uint64`]
    },
  appApproval: `BiAbAAEYBAgFAxAGICgwOMCEPTzwopSPCpnXiuQM9/L9ow+VsdXxC+Oh3ocG54umrQnMxvyNBEBIUFigjQYmCAEAAQEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeC2s6dkAAAABNFpcykIAAAAAAAAEMAJAQAAAAAAAAAABOUi8dciNQAxGEETlytkSSJbNQFJIQRbNQIhB1s1CDEZIxJBAAoxACghDq9mQhNdNhoAF0lBAkgiNQQjNQZJIQ8MQACkSSEQDEAAK0khEQxAABIhERJEKzX/KTT/UCEEr1BCAjghEBJEKzX/KDT/UCEEr1BCAiZJIRIMQABZIRISRDQBSSEFDEAAJiEFEkQoZClkUEk1A1eZCDQDV2kIUDQDV3EgUDQDV5EIUDUHQhLrIQYSRChkKWRQSTUDV5AINANXYAhQNANXaCBQNANXiAhQNQdCEsUhDxJENhoBNf+AAQQ0/1BCAbRJIRMMQACiSSEUDEAAEiEUEkQ2GgE1/4ABAzT/UEIBlCETEkQ0AUkhBQxAAD4hBRJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA0A1dQCFA0A1dYCFA0A1dICFA1B0ISSCEGEkQoZClkUEk1A1cgCDQDVygIUDQDVzAIUDQDVzgIUDQDV0AIUDQDV1AIUDQDV1gIUDQDV0gIUDUHQhIKSSEVDEAAEiEVEkQ2GgE1/4ABAjT/UEIA8oHXpergAxJENAFJIQUMQABiIQUSRDYaATX/IjT/iBH6VwAJSTX+I1s0/iJVTRYiNP+IEeZXCQlJNf4jWzT+IlVNFlAiNP+IEdFXEglJNf4jWzT+IlVNFlAyAzT/iBG7VxshSTX+VwEgNP4iVU1QNQdCEX4hBhJENhoBNf8iNP+IEZhXAAlJNf4jWzT+IlVNFiI0/4gRhFcJCUk1/iNbNP4iVU0WUCI0/4gRb1cSCUk1/iNbNP4iVU0WUDIDNP+IEVlXGyFJNf5XASA0/iJVTVA1B0IRHDYaAhc1BDYaAzYaARdJIQYMQA4VSSUMQA1hJRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSkpKSVcAIDX/IQlbNf4hCls1/SELWzX8IQxbNfshFls1+iEXWzX5IRhbNfghGVs191dgARc19oFhWzX1gWlbNfRXcSA184GRAVs18oGZAVs18VehIjXwgcMBWzXvSTUFNe6ABNWOHas07lCwNO4iVUmBAgxAB1hJIQYMQAYjSSUMQAO7JRJENO5XAQg17bEisgEhCLIQNAiyGLM08FcAEUk17FcACDTsVwgIUDTsVxABUDTwVxERUDXrNOtXERE16jTrVwARNOpXAAg06lcICFA06lcQAVBQNek07Rc16CIxAIgQJVcACUk15iNbNOYiVU015zToNOcORDTpVwARSTXmIls15TToNOUORDT2QQAHNPU140IADDIGNPUyBjT1DE014zT2QQAHNPU14kIADDIGNPUyBjT1DE014jTxIhJBAAc08zXkQgAyNPMkrzT7NOI04zT7DE009AkWUCSvNPoWUKOID+kqo4gP5CSvNPEWUKKID9qgiA/WNeQxACgxAIgPhikkrzTnFlA05DIDMQCID3ZXGyFJNeFXASA04SJVTaGID6qjiA+mKqKID6FJSiEHWyISRCEEWyISRCJbIhJEJFsiMQCID0BXCQlJNeEjWzThIlVNCBZQNeFJVwAJNOFQTFcSKlBmMQAoMQCIDxkpNORQNeFXABs04VBmNPZBAAc09TXhQgAMMgY09TIGNPUMTTXhNPZBAAc09TXgQgAMMgY09TIGNPUMTTXgNPs04DThNPsMTTXfNPZBAAc09TXeQgAMMgY09TIGNPUMTTXeIjEAiA6yVxIJSTXdI1s03SJVTTT5CDTeDkEA3DT2QQAHNPU13UIADDIGNPUyBjT1DE013TEAKDEAiA58KTTdFlA13ElXABI03FBMVxshUGYxACgxAIgOYCk05zToCRZQNdxXCTM03ExQZjToSTT3CyENCgk13LEisgE03LISJbIQMQCyFDT+shGzJwQxAFA06BZQsCcFNOgWULA06BY1BzT2QQAHNPU120IADDIGNPUyBjT1DE012zT/NP40/TT8NPs0+jT5NPg09zT2NNs03zTkNPI08TToCTIGNOU03AkWNOZXCAhQNOZXEAFQNOlXERFQNO9CDLoxACgxAIgNuCcGNd1JVwAJNN1QTFcSKlBmNPZBAAc09TXdQgAMMgY09TIGNPUMTTXdMQAoMQCIDYcpNN0WUDXcSVcAEjTcUExXGyFQZjEAKDEAiA1rKTTnNOgJFlA13FcJMzTcTFBmNOhJNPcLIQ0KCTXcsSKyATTcshIlshAxALIUNP6yEbMnBDEAUDToFlCwJwU06BZQsDToFjUHNPZBAAc09TXbQgAMMgY09TIGNPUMTTXbNP80/jT9NPw0+zT6NPk0+DT3NPY02zTfNOQ08jTxNOgJMgY05TTcCRY05lcICFA05lcQAVA06VcREVA070ILxUg07lcBCDXtsSKyASEIshA0CLIYszTtFzXsNPBXABFJNesiWzTsCBY061cICFA061cQAVA08FcREVA16jTsNP6IDK806lcRETXpNPU0+w5ENOxJNPgLIQ0KCTXoNPZBAAc09TXmQgAMMgY09TIGNPUMTTXmNPZBAAc09TXlQgAMMgY09TIGNPUMTTXlNPEiEkEABzTzNedCADI08ySvNPs05TTmNPsMTTT0CRZQJK80+hZQo4gMWiqjiAxVJK808RZQoogMS6CIDEc15yIxAIgL+VcACUk14yNbNOMiVU015DEAKDEAiAviKSSvNOQWUDTnMgMxAIgL0lcbIUk141cBIDTjIlVNoYgMBqOIDAIqoogL/UlKIQdbIhJEIQRbIhJEIlsiEkQkWyIxAIgLnFcJCUk14yNbNOMiVU0IFlA140lXAAk041BMVxIqUGYxACgxAIgLdSk051A141cAGzTjUGY09kEABzT1NeNCAAwyBjT1MgY09QxNNeM09kEABzT1NeJCAAwyBjT1MgY09QxNNeI09kEABzT1NeFCAAwyBjT1MgY09QxNNeExACgxAIgLGCk04RZQNeBJVwASNOBQTFcbIVBmMQAoMQCICvwpNOQ06AgWUDXgVwkzNOBMUGaABDGPpQ4xAFA06BZQsIAIAAAAAAAADoE06BZQsDToFjUHNPZBAAc09TXgQgAMMgY09TIGNPUMTTXgNP80/jT9NPw0+zT6NPk0+DT3NPY04DT7NOI04zT7DE005zTyNPE06AgyBjTqVwARNOlXAAg06VcICFA06VcQAVBQNO9CCWNINO5XAQg17TTwVwARSTXsVwAINOxXCAhQNOxXEAFQNPBXERFQNes061cRETXqNO0XNek09kQ06TT1D0SACAAAAAAAAAxxIjEAiAodVwAJSTXoI1s06CJVTRYiMQCICglXCQlJNegjWzToIlVNFlAiMQCICfRXEglJNegjWzToIlVNFlAyAzEAiAneVxshSTXoVwEgNOgiVU1QULAiMQCICcdXAAlJNegjWzToIlVNFiIxAIgJs1cJCUk16CNbNOgiVU0WUCIxAIgJnlcSCUk16CNbNOgiVU0WUDIDMQCICYhXGyFJNehXASA06CJVTVA1BzT/NP40/TT8NPs0+jT5NPg09zT2NOk09DTzNPI08TIGNOtXABE06lcACDTqVwgIUDTqVxABUFA070IINUkjDEACF0ixIrIBIQiyEDQIshizNPBXABFJNe1XAAg07VcICFA07VcQAVA08FcREVA17DTsVxERNes09kEABzT1NelCAAwyBjT1MgY09QxNNek09kEABzT1NehCAAwyBjT1MgY09QxNNeg08SISQQAHNPM16kIAMjTzJK80+zToNOk0+wxNNPQJFlAkrzT6FlCjiAjsKqOICOckrzTxFlCiiAjdoIgI2TXqIjEAiAiLVwAJSTXmI1s05iJVTTXnJK805xZQNOoyAzEAiAhtVxshSTXlVwEgNOUiVU2hiAiho4gInSqiiAiYSUohB1siEkQhBFsiEkQiWyISRCRbIjEAiAg3VwkJSTXlI1s05SJVTQg15jEAKDEAiAgfKTTmFlA15UlXAAk05VBMVxIqUGYxACgxAIgIAyk06lA15VcAGzTlUGY09kEABzT1NeVCAAwyBjT1MgY09QxNNeU09kEABzT1NeRCAAwyBjT1MgY09QxNNeSACAAAAAAAAApYNOcWNOYWUCIxAIgHr1cSCUk14yNbNOMiVU0WUDTqUFCwNOcWNOYWUCIxAIgHjlcSCUk14yNbNOMiVU0WUDTqUDUHNPZBAAc09TXjQgAMMgY09TIGNPUMTTXjNP80/jT9NPw0+zT6NPk0+DT3NPY04zT7NOQ05TT7DE006jTyNPEyBjTsVwARNOtXAAg061cICFA061cQAVBQNO9CBhhIsSKyASEIshA0CLIYszTwVwARSTXtVwAINO1XCAhQNO1XEAFQNPBXERFQNew07FcRETXrNOxXABE061cACDTrVwgIUDTrVxABUFA16iIxAIgGy1cJCUk16CNbNOgiVU016TTqVxERSTXoIls15zTpNOcMRDT2QQAHNPU15UIADDIGNPUyBjT1DE015TT2QQAHNPU15EIADDIGNPUyBjT1DE015DTxIhJBAAc08zXmQgAyNPMkrzT7NOQ05TT7DE009AkWUCSvNPoWUKOIBpUqo4gGkCSvNPEWUKKIBoagiAaCNeYkryIxAIgGMlcACUk14iNbNOIiVU0WUDTmMgMxAIgGGlcbIUk14lcBIDTiIlVNoYgGTqOIBkoqoogGRUlKIQdbIhJEIQRbIhJEIlsiEkQkWzTpCDXjMQAoMQCIBd0pNOMWUDXiSVcACTTiUExXEipQZjEAKDEAiAXBKTTmUDXiVwAbNOJQZjT2QQAHNPU14kIADDIGNPUyBjT1DE014jT2QQAHNPU14UIADDIGNPUyBjT1DE014TT7NOE04jT7DE014DT2QQAHNPU130IADDIGNPUyBjT1DE013yIxAIgFWlcSCUk13iNbNN4iVU00+Qg03w5BASM09kEABzT1Nd5CAAwyBjT1MgY09QxNNd4xACgxAIgFJCk03hZQNd1JVwASNN1QTFcbIVBmMQAoMQCIBQgnBjXdSVcACTTdUExXEipQZoAIAAAAAAAAB+g04xZQsDTjFjUHNOM05wxBAHKxIrIBNOOyEiWyEDEAshQ0/bIRsycHMQBQsDT2QQAHNPU13UIADDIGNPUyBjT1DE013TT/NP40/TT8NPs0+jT5NPg09zT2NN004DTmNPI04wg08TIGNOpXABE05zTjCRY06FcICFA06FcQAVBQNO9CA2MnBzEAULA09kEABzT1Nd1CAAwyBjT1MgY09QxNNd00/zT+NP00/DT7NPo0+TT4NPc09jTdNOA05jTyNOMINPEyBjTqNO9CAxuAEAAAAAAAAAgVAAAAAAAAAACwIQSvNQc09kEABzT1Nd5CAAwyBjT1MgY09QxNNd40/zT+NP00/DT7NPo0+TT4NPc09jTeNOA05jTyNPEyBjTqNO9CAsRIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hCVs1/iEKWzX9V5giNfyABKdlxLSwsSKyATQDgboBW7III7IQNP+yB7OxIrIBNPxXEREiW7ISJbIQNP+yFDT9shGzsSKyATT8VwARIluyEiWyEDT/shQ0/rIRs7EisgEishIlshAyCbIVMgqyFDT9shGzsSKyASKyEiWyEDIJshUyCrIUNP6yEbNCApZJIwxAAKgjEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yEKWzX+V2ABFzX9V2EiNfyBgwFbNfuABJqLkXSwNPxXERE1+jT7NP6IAu80/zEAEkQ0/zQDIQlbNP40AyELWzQDIQxbNAMhFls0AyEXWzQDIRhbNAMhGVs0/TIGIjT9TSIyAyIiMgY0/FcAETT6Ils0+wgWNPpXCAhQNPpXEAFQUCJCAWhIgcCaDIgCdbEisgEhCLIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSkkiWzX/IQRbNf4hB1s1/SRbNfwhCVs1+yEKWzX6IQtbNfkhDFs1+FdAARc194AEppKjJDT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUQcIULCBEa9JNfZJUDX1NP80/hNENPVXABE19CEErzT0VwgIUDT0VxABUDT1VxERUDXzIRqIAbGxIrIBIrISJbIQMgqyFDT/shGzNPNXERE18jTzVwARIQSvNPJXCAhQNPJXEAFQUDXxIRqIAXuxIrIBIrISJbIQMgqyFDT+shGzNPw0/Qk0+ws18DEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZRBwhQNPFQNPAWUChLAVcAf2cpSwFXfwxnSCM1ATIGNQJCAK01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvSTXuNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlA09xZRBwhQNPgWUDT5FlA0+lA0+xZQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV39MZ0ghBTUBMgY1AkIALTEZIQUSRLEisgEhCLIQNAiyGCEFshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKzQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCMxNxJEIjUBIjUCIjUIQv+nSTEYYUAABUghDq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiUkVIQlMCa9MUIk=`,
  appClear: `Bg==`,
  companionInfo: {
    api_claim: 1,
    api_recalculateRewards: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 2,
  stateSize: 203,
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
                "name": "v1598",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1599",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1601",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1602",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1603",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1604",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1605",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1606",
                "type": "bool"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v1598",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1599",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1600",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1601",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1602",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1603",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1604",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1605",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1606",
                "type": "bool"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_163",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_recalculateRewards0_163",
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
                    "internalType": "struct T18",
                    "name": "_setTime0_163",
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
                    "internalType": "struct T18",
                    "name": "_stake0_163",
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
                    "internalType": "struct T18",
                    "name": "_unstake0_163",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1863",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v2024",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v2069",
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
          },
          {
            "internalType": "uint256",
            "name": "lockTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenPaid",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2648",
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
          },
          {
            "internalType": "uint256",
            "name": "lockTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenPaid",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3185",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v3713",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v4288",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
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
        "internalType": "struct T1",
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_163",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_recalculateRewards0_163",
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
                    "internalType": "struct T18",
                    "name": "_setTime0_163",
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
                    "internalType": "struct T18",
                    "name": "_stake0_163",
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
                    "internalType": "struct T18",
                    "name": "_unstake0_163",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1863",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
          },
          {
            "internalType": "uint256",
            "name": "rewardsPaid",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
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
            "name": "rewardPerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stakeFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "unstakeFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lockLengthBlocks",
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
        "name": "v8041",
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
          },
          {
            "internalType": "uint256",
            "name": "lockTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenPaid",
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
    "inputs": [],
    "name": "recalculateRewards",
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
          },
          {
            "internalType": "uint256",
            "name": "lockTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenPaid",
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
          },
          {
            "internalType": "uint256",
            "name": "lockTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardPerTokenPaid",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
  Bytecode: `0x608060405260405162005ad838038062005ad88339810160408190526200002691620005e3565b6000805543600355620000386200033f565b7f741af5e4d7e22dbe1fa56e2fd146afb6062c097b11b7a3d45585d90140b9e20833836040516200006b929190620006a9565b60405180910390a180516000908190528151602090810182905282516040019190915281518183018051919091528251905182015282810151908101519051620000d5916001600160a01b03918216911614620000ca576001620000cd565b60005b600a62000292565b604081810180516000908190526020808501805151820151845190920191909152805151840151835190151594019390935291519051620001179290620002bc565b606082019081526080820180516000905281516020908101518101518251820152825101516040908101518251901515910152905190516200015d9190600190620002bc565b60a0820152620001703415600b62000292565b602082015160808101516040820151606090920151909162000192916200076d565b6200019e919062000787565b60c0820152620001ad620003e0565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152825181015160c080870191909152835181015160e080880191909152845101516101008088019190915293519093015115156101208601528501516101408501529084015161016084015260016000819055439055516200026291839101620007ef565b604051602081830303815290604052600290805190602001906200028892919062000459565b5050505062000912565b81620002b85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002c6620004e8565b60005b60028110156200031c57848160028110620002e857620002e862000741565b602002015182826002811062000302576200030262000741565b6020020152806200031381620008b7565b915050620002c9565b508181846002811062000333576200033362000741565b60200201529392505050565b604080516101408101909152600060e08201818152610100830182905261012083019190915281526020810162000375620004e8565b81526040805160608101825260008082526020828101829052928201529101908152602001620003a4620004e8565b81526040805160608101825260008082526020828101829052928201529101908152602001620003d3620004e8565b8152602001600081525090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001620003d3620004e8565b8280546200046790620008d5565b90600052602060002090601f0160209004810192826200048b5760008555620004d6565b82601f10620004a657805160ff1916838001178555620004d6565b82800160010185558215620004d6579182015b82811115620004d6578251825591602001919060010190620004b9565b50620004e492915062000535565b5090565b60405180604001604052806002905b6200051e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004f75790505090565b5b80821115620004e4576000815560010162000536565b604080519081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b60405290565b60405161012081016001600160401b03811182821017156200057d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620005cd57600080fd5b919050565b80518015158114620005cd57600080fd5b6000818303610140811215620005f857600080fd5b620006026200054c565b8351815261012080601f19840112156200061b57600080fd5b6200062562000583565b92506200063560208601620005b5565b83526200064560408601620005b5565b6020840152606085015160408401526080850151606084015260a0850151608084015260c085015160a084015260e085015160c08401526101008086015160e085015262000695828701620005d2565b908401525060208101919091529392505050565b60006101608201905060018060a01b03808516835283516020840152602084015181815116604085015281602082015116606085015260408101516080850152606081015160a0850152608081015160c085015260a081015160e085015260c08101519150610100828186015260e082015161012086015280820151925050506200073961014084018215159052565b509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101562000782576200078262000757565b500390565b6000816000190483118215151615620007a457620007a462000757565b500290565b8060005b6002811015620007e9578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620007ad565b50505050565b81516001600160a01b03168152610220810160208301516200081c60208401826001600160a01b03169052565b5060408301516200083860408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516200088c8285018215159052565b505061014080840151620008a382850182620007a9565b505061016083015161020083015292915050565b6000600019821415620008ce57620008ce62000757565b5060010190565b600181811c90821680620008ea57607f821691505b602082108114156200090c57634e487b7160e01b600052602260045260246000fd5b50919050565b6151b680620009226000396000f3fe6080604052600436106101015760003560e01c806373b4522c1161008f578063a694fc3a11610061578063a694fc3a14610252578063ab53f2c614610265578063bb806dc914610288578063cadc2e7a1461030a578063cc428ab21461032a57005b806373b4522c146101f5578063817d57f3146102085780638323075714610228578063a05f99061461023d57005b80632e17de78116100d35780632e17de781461019f5780633bc5b7bf146101b25780633beb26c4146101d25780633f5df180146101e55780634e71d92d146101ed57005b806306dc92ff1461010a5780630ff1680e146101405780631e93b0f11461016d5780632c10a1591461018c57005b3661010857005b005b34801561011657600080fd5b5061012a6101253660046147cf565b61033d565b6040516101379190614812565b60405180910390f35b34801561014c57600080fd5b5061016061015b3660046147cf565b610369565b6040516101379190614842565b34801561017957600080fd5b506003545b604051908152602001610137565b61010861019a36600461486d565b610696565b61017e6101ad366004614885565b6106ba565b3480156101be57600080fd5b5061012a6101cd3660046147cf565b610712565b6101606101e0366004614885565b610738565b610160610796565b61017e6107ec565b61010861020336600461486d565b610836565b34801561021457600080fd5b5061012a6102233660046147cf565b610856565b34801561023457600080fd5b5060015461017e565b34801561024957600080fd5b5061016061087c565b61017e610260366004614885565b610b8f565b34801561027157600080fd5b5061027a610be7565b6040516101379291906148ca565b34801561029457600080fd5b5061029d610c84565b604051610137919060006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b34801561031657600080fd5b5061012a6103253660046147cf565b610f37565b610108610338366004614904565b610f5d565b604080516060810182526000808252602082018190529181019190915261036382610f7d565b92915050565b610371614027565b6001600054141561042c5760006002805461038b90614916565b80601f01602080910402602001604051908101604052809291908181526020018280546103b790614916565b80156104045780601f106103d957610100808354040283529160200191610404565b820191906000526020600020905b8154815290600101906020018083116103e757829003601f168201915b505050505080602001905181019061041c9190614b0c565b905061042a6000600961104f565b505b600360005414156105da5760006002805461044690614916565b80601f016020809104026020016040519081016040528092919081815260200182805461047290614916565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b50505050508060200190518101906104d79190614bcb565b90506104e161404f565b60016104ec85611075565b5160018111156104fe576104fe6147ec565b1461050a576000610518565b61051384611075565b604001515b815152600161052685611102565b516001811115610538576105386147ec565b14610544576000610552565b61054d84611102565b604001515b81516020015260016105638561118f565b516001811115610575576105756147ec565b1461058157600061058f565b61058a8461118f565b604001515b81516040015260016105a085610f7d565b5160018111156105b2576105b26147ec565b146105be5760006105cc565b6105c784610f7d565b604001515b815160600152519392505050565b60056000541415610685576000600280546105f490614916565b80601f016020809104026020016040519081016040528092919081815260200182805461062090614916565b801561066d5780601f106106425761010080835404028352916020019161066d565b820191906000526020600020905b81548152906001019060200180831161065057829003601f168201915b50505050508060200190518101906104d79190614ca8565b6106916000600961104f565b919050565b61069e614067565b6106b66106b036849003840184614d9e565b8261121c565b5050565b60006106c4614067565b6106cc6140a2565b6106d46140bc565b604080516020808201835287825260a084019190915260048352815180820190925282825283015261070682846114ef565b50506080015192915050565b604080516060810182526000808252602082018190529181019190915261036382611075565b610740614027565b610748614067565b6107506140a2565b6107586140bc565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261078a82846114ef565b50506040015192915050565b61079e614027565b6107a6614067565b6107ae6140a2565b6107b66140bc565b6000604082015260018181905250604080516020808201909252828152908301526107e182846114ef565b505060200151919050565b60006107f6614067565b6107fe6140a2565b6108066140bc565b60006020828101829052908252604080518083019091528281529083015261082e82846114ef565b505051919050565b61083e614067565b6106b661085036849003840184614d9e565b82613ad1565b60408051606081018252600080825260208201819052918101919091526103638261118f565b6108a76040518060800160405280600081526020016000815260200160008152602001600081525090565b60016000541415610962576000600280546108c190614916565b80601f01602080910402602001604051908101604052809291908181526020018280546108ed90614916565b801561093a5780601f1061090f5761010080835404028352916020019161093a565b820191906000526020600020905b81548152906001019060200180831161091d57829003601f168201915b50505050508060200190518101906109529190614b0c565b90506109606000600761104f565b505b60036000541415610a715760006002805461097c90614916565b80601f01602080910402602001604051908101604052809291908181526020018280546109a890614916565b80156109f55780601f106109ca576101008083540402835291602001916109f5565b820191906000526020600020905b8154815290600101906020018083116109d857829003601f168201915b5050505050806020019051810190610a0d9190614bcb565b9050610a3d6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b6101808201518151526101208201518151602001526101408201518151604001526101609091015181516060015251919050565b60056000541415610b8057600060028054610a8b90614916565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790614916565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050505050806020019051810190610b1c9190614ca8565b9050610b4c6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b6101c08201518151526101608201518151602001526101808201518151604001526101a09091015181516060015251919050565b610b8c6000600761104f565b90565b6000610b99614067565b610ba16140a2565b610ba96140bc565b60408051602080820183528782526080840191909152600383528151808201909252828252830152610bdb82846114ef565b50506060015192915050565b600060606000546002808054610bfc90614916565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2890614916565b8015610c755780601f10610c4a57610100808354040283529160200191610c75565b820191906000526020600020905b815481529060010190602001808311610c5857829003601f168201915b50505050509050915091509091565b610c8c61410a565b60016000541415610d4757600060028054610ca690614916565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd290614916565b8015610d1f5780601f10610cf457610100808354040283529160200191610d1f565b820191906000526020600020905b815481529060010190602001808311610d0257829003601f168201915b5050505050806020019051810190610d379190614b0c565b9050610d456000600861104f565b505b60036000541415610e8057600060028054610d6190614916565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8d90614916565b8015610dda5780601f10610daf57610100808354040283529160200191610dda565b820191906000526020600020905b815481529060010190602001808311610dbd57829003601f168201915b5050505050806020019051810190610df29190614bcb565b9050610dfc614161565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a08084015183519092019190915260e080840151835190920191909152610100830151825160c0908101919091529092015181519092019190915251919050565b60056000541415610f2b57600060028054610e9a90614916565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec690614916565b8015610f135780601f10610ee857610100808354040283529160200191610f13565b820191906000526020600020905b815481529060010190602001808311610ef657829003601f168201915b5050505050806020019051810190610df29190614ca8565b610b8c6000600861104f565b604080516060810182526000808252602082018190529181019190915261036382611102565b610f65614067565b6106b6610f7736849003840184614e18565b826114ef565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff166001811115610fc957610fc96147ec565b1415611040576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561100a5761100a6147ec565b600181111561101b5761101b6147ec565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b816106b65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156110c1576110c16147ec565b1415611040576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561100a5761100a6147ec565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561114e5761114e6147ec565b1415611040576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561100a5761100a6147ec565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156111db576111db6147ec565b1415611040576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561100a5761100a6147ec565b61122c600160005414600f61104f565b815161124790158061124057508251600154145b601061104f565b60008080556002805461125990614916565b80601f016020809104026020016040519081016040528092919081815260200182805461128590614916565b80156112d25780601f106112a7576101008083540402835291602001916112d2565b820191906000526020600020905b8154815290600101906020018083116112b557829003601f168201915b50505050508060200190518101906112ea9190614b0c565b905061131360408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16113663415600c61104f565b61016082015161014083015160200151516113819190614f08565b815152610140820180516020908101518101518351820152905101516040908101518251901515908201528201516101608301516113cc916113c591339190613c8b565b600d61104f565b81516113e4906001600160a01b03163314600e61104f565b6113ec614174565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351921691015260608084015182519091015260808084015182519091015260a08084015182519091015260c08084015182519091015260e08084015182519091015261010080840151825190910152610120808401805183519015159201919091525161147f5743611482565b60005b602080830180519290925281516000910181905281516040018190528151606001819052815160800152514360a09091015261014083015182516114c99190600190613ca3565b60208201805160c0019190915251600060e0909101526114e881613d17565b5050505050565b6114ff600560005414602961104f565b815161151a90158061151357508251600154145b602a61104f565b60008080556002805461152c90614916565b80601f016020809104026020016040519081016040528092919081815260200182805461155890614916565b80156115a55780601f1061157a576101008083540402835291602001916115a5565b820191906000526020600020905b81548152906001019060200180831161158857829003601f168201915b50505050508060200190518101906115bd9190614ca8565b90506115c76141da565b7f621bc490545d114655492d51b64d71212350282d33af1db13985cad8a5bb1ee433856040516115f8929190614f20565b60405180910390a1600060208501515151600481111561161a5761161a6147ec565b141561201f5761162c3415601461104f565b6101e082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516116689190600090613ca3565b816020018190525061168a6116833384602001516000613c8b565b601561104f565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516116d19190600190613ca3565b81606001819052506116f36116ec3384604001516000613c8b565b601661104f565b60016116fe33611102565b516001811115611710576117106147ec565b1461171c57600061172a565b61172533611102565b604001515b60808201819052606082015160200151516117479110601761104f565b816101200151156117625761014082015160c0820152611781565b8161014001514310611774574361177b565b8161014001515b60c08201525b8161012001511561179c5761014082015160e08201526117bb565b81610140015143106117ae57436117b5565b8161014001515b60e08201525b6101c08201516117d55761018082015160a082015261184c565b816101c00151670de0b6b3a76400008360a0015184610160015185608001518560c001511061180857856080015161180e565b8460e001515b6118189190614f9c565b6118229190614fb3565b61182c9190614fb3565b6118369190614fd2565b8261018001516118469190614f08565b60a08201525b6080810151670de0b6b3a7640000600161186533610f7d565b516001811115611877576118776147ec565b14611883576000611891565b61188c33610f7d565b604001515b8360a001516118a09190614f9c565b60016118ab33611075565b5160018111156118bd576118bd6147ec565b146118c95760006118d7565b6118d233611075565b604001515b6118e19190614fb3565b6118eb9190614fd2565b6118f59190614f08565b61010082019081523360009081526005602090815260408083208054600160ff1991821681178355955191860191909155600790925290912080549091168217815560a08301519101556101208201511561195b5761014082015161012082015261197b565b816101400151431061196d5743611974565b8161014001515b6101208201525b816101200151156119965761014080830151908201526119b6565b81610140015143106119a857436119af565b8161014001515b6101408201525b8160800151816101200151106119d05781608001516119d7565b8061014001515b610160820152610120820151156119f957610140820151610180820152611a19565b8161014001514310611a0b5743611a12565b8161014001515b6101808201525b61018081015160c08301516001611a2f3361118f565b516001811115611a4157611a416147ec565b14611a4d576000611a5b565b611a563361118f565b604001515b611a659190614f08565b11611eb55781610120015115611a86576101408201516101a0820152611aa6565b8161014001514310611a985743611a9f565b8161014001515b6101a08201525b336000908152600660209081526040808320805460ff19908116600190811783556101a08701519281019290925560058452828520805490911682178155019290925561010083015191519182527f38102435fe1968993990dec22755814900f5d5c9f06d4d3c1f70e40d2226ef33910160405180910390a16101008101805184526060820151602001515190511015611d395761010081015160608201516020015151611b549190614f9c565b6101c08201805191909152606082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610100820151611b9e91903390613e2d565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a181610120015115611bed576101408201516101e0820152611c0d565b8161014001514310611bff5743611c06565b8161014001515b6101e08201525b611c15614174565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a080860151845182015260c08087015185519091015260e0808701518551909101526101008087015185518201526101208088015186519015159101526101e0860151838601805191909152610160870151815190940193909352908501519151909201528201516101a0840151611cd79190614f08565b6020820180516060908101929092526101c08086015182516080015290514360a0909101529083015190830151611d119190600190613ca3565b60208201805160c00191909152610200840151905160e00152611d3381613d17565b50613acb565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a181610120015115611d8857610140820151610200820152611da8565b8161014001514310611d9a5743611da1565b8161014001515b6102008201525b611db0614174565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a080860151845182015260c08087015185519091015260e080870151855190910152610100808701518551820152610120808801518651901515910152610200860151838601805191909152610160870151815190940193909352908501519151909201528201516101a0840151611e729190614f08565b6020820180516060908101929092526101c085015181516080015280514360a09091015290830151815160c00152610200840151905160e00152611d3381613d17565b604051600081527ff137d26de5ebcf2f7edcc7dba6e4686c899c2d6dfb8212a0c56da72b743831f39060200160405180910390a16000835261012082015115611f0957610140820151610220820152611f29565b8161014001514310611f1b5743611f22565b8161014001515b6102208201525b611f31614174565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e0808a01518851820152610100808b0151895190910152610120808b015189519015159101526102208901518689018051919091526101608a0151815190970196909652888301518651909701969096526101a089015185518501526101c089015185519093019290925283514391015290850151825190910152610200850151905190910152611d3381613d17565b6001602085015151516004811115612039576120396147ec565b14156125c15761204b3415601861104f565b6101e082018051515161024083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516120909190600090613ca3565b8161026001819052506120b36120ac3384602001516000613c8b565b601961104f565b61026081018051602090810151516102808401805191909152825182015182015181518301529151015160409081015191519115159181019190915282015161210a906121039033906000613c8b565b601a61104f565b81610120015115612126576101408201516102c0820152612146565b8161014001514310612138574361213f565b8161014001515b6102c08201525b81610120015115612162576101408201516102e0820152612182565b8161014001514310612174574361217b565b8161014001515b6102e08201525b6101c082015161219d576101808201516102a0820152612217565b816101c00151670de0b6b3a76400008360a001518461016001518560800151856102c00151106121d15785608001516121d8565b846102e001515b6121e29190614f9c565b6121ec9190614fb3565b6121f69190614fb3565b6122009190614fd2565b8261018001516122109190614f08565b6102a08201525b600161222233611075565b516001811115612234576122346147ec565b1461224057600061224e565b61224933611075565b604001515b610300820152600161225f33611102565b516001811115612271576122716147ec565b1461227d57600061228b565b61228633611102565b604001515b670de0b6b3a7640000600161229f33610f7d565b5160018111156122b1576122b16147ec565b146122bd5760006122cb565b6122c633610f7d565b604001515b836102a001516122db9190614f9c565b8361030001516122eb9190614fb3565b6122f59190614fd2565b6122ff9190614f08565b61032082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560079092529091208054909116821781556102a08301519101556101208201511561236657610140820151610340820152612386565b8161014001514310612378574361237f565b8161014001515b6103408201525b816101200151156123a2576101408201516103608201526123c2565b81610140015143106123b457436123bb565b8161014001515b6103608201525b610300810151610380820180519190915261032082015190516020015260016123ea3361118f565b5160018111156123fc576123fc6147ec565b14612408576000612416565b6124113361118f565b604001515b610380820180516040908101929092526102a08301518151606001525190517fec066529b74c692c06bb6d7ed04f982c26022f8ad9c1283ed932ff9b672cd8cb9161246091614842565b60405180910390a161038081015160208401526101208201511561248f576101408201516103a08201526124af565b81610140015143106124a157436124a8565b8161014001515b6103a08201525b6124b7614174565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169201919091526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e080860151845190910152610100808601518451909101526101208086015184519015159101526103a08401519183015191909152516103408301511061256757826080015161256e565b8161036001515b60208083018051909101919091526102a08301518151604001526101a08401518151606001526101c0840151815160800152514360a090910152610260820151610280830151611d119190600190613ca3565b60026020850151515160048111156125db576125db6147ec565b141561292457602084015151606001516103c08201526125fd3415601b61104f565b6101e08201805151516103e083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516126429190600090613ca3565b81610400018190525061266561265e3384602001516000613c8b565b601c61104f565b6104008101805160209081015151610420840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516126bc906126b59033906000613c8b565b601d61104f565b6126cc826101200151601e61104f565b6126e8826101400151826103c00151600001511015601f61104f565b60016126f333611075565b516001811115612705576127056147ec565b1461271157600061271f565b61271a33611075565b604001515b61044082015152600161273133611102565b516001811115612743576127436147ec565b1461274f57600061275d565b61275833611102565b604001515b6104408201516020015260016127723361118f565b516001811115612784576127846147ec565b1461279057600061279e565b6127993361118f565b604001515b6104408201516040015260016127b333610f7d565b5160018111156127c5576127c56147ec565b146127d15760006127df565b6127da33610f7d565b604001515b6104408201805160600191909152516040517f2dab7af9fb16aea62250b6866cd9eb36dd65650014548ccd0e8cb39f0ab2a2949161281c91614842565b60405180910390a16104408101516040840152612837614174565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c08089015187519091015260e080890151875190910152610100808901518751909101526101208089015187519015159101526103c0870151518487018051919091526101608901518151909501949094526101808801518451909501949094526101a08701518351909201919091526101c08601518251909101525143910152610400820151610420830151611d119190600190613ca3565b600360208501515151600481111561293e5761293e6147ec565b1415612fdf5760208085015151608001516104608301526129619034159061104f565b610460810151516101e0830151515161297a9190614f08565b61048082018051919091526101e0830180515160209081015183519091015280515160409081015183519015159101525190516129ba9190600090613ca3565b6104a08201526020820151610460820151516129e3916129dc91339190613c8b565b602161104f565b6104a081018051602090810151516104c084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151612a3a90612a339033906000613c8b565b602261104f565b612a5182608001518361014001511115602361104f565b60e082015161046082015151620f424091612a6b91614fb3565b612a759190614fd2565b61046082015151612a869190614f9c565b6104e082015261012082015115612aa857610140820151610520820152612ac8565b8161014001514310612aba5743612ac1565b8161014001515b6105208201525b81610120015115612ae457610140820151610540820152612b04565b8161014001514310612af65743612afd565b8161014001515b6105408201525b6101c0820151612b1f57610180820151610500820152612b99565b816101c00151670de0b6b3a76400008360a00151846101600151856080015185610520015110612b53578560800151612b5a565b8461054001515b612b649190614f9c565b612b6e9190614fb3565b612b789190614fb3565b612b829190614fd2565b826101800151612b929190614f08565b6105008201525b6001612ba433611075565b516001811115612bb657612bb66147ec565b14612bc2576000612bd0565b612bcb33611075565b604001515b610560820152336000818152600560205260409020805460ff1916600190811790915590612bfd90611102565b516001811115612c0f57612c0f6147ec565b14612c1b576000612c29565b612c2433611102565b604001515b670de0b6b3a76400006001612c3d33610f7d565b516001811115612c4f57612c4f6147ec565b14612c5b576000612c69565b612c6433610f7d565b604001515b836105000151612c799190614f9c565b836105600151612c899190614fb3565b612c939190614fd2565b612c9d9190614f08565b33600090815260056020908152604080832060019081019490945560079091529020805460ff19168217815561050083015191015561012082015115612cee57610140820151610580820152612d0e565b8161014001514310612d005743612d07565b8161014001515b6105808201525b81610120015115612d2a576101408201516105a0820152612d4a565b8161014001514310612d3c5743612d43565b8161014001515b6105a08201525b81610120015115612d66576101408201516105c0820152612d86565b8161014001514310612d785743612d7f565b8161014001515b6105c08201525b3360009081526006602090815260408083208054600160ff19918216811783556105c08701519281019290925560049093529220805490911690911790556104e0810151610560820151612dda9190614f08565b33600081815260046020908152604091829020600101939093556104e08401518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a17fb99603cf02636731b1f2cc9c8e11446b6e6f1ca8a3c5630ab2cbabffeac62006816104e00151604051612e6791815260200190565b60405180910390a16104e0810151606084015261012082015115612e96576101408201516105e0820152612eb6565b8161014001514310612ea85743612eaf565b8161014001515b6105e08201525b612ebe614174565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169201919091526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e080860151845190910152610100808601518451909101526101208086015184519015159101526105e084015191830151919091525161058083015110612f6e578260800151612f75565b816105a001515b60208083018051909101919091526105008301518151604001526101a08401519051606001526104e08201516101c0840151612fb19190614f08565b60208201805160800191909152514360a0909101526104a08201516104c0830151611d119190600190613ca3565b6004602085015151516004811115612ff957612ff96147ec565b1415613acb5760208401515160a0015161060082015261301b3415602461104f565b6101e082018051515161062083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516130609190600090613ca3565b81610640018190525061308361307c3384602001516000613c8b565b602561104f565b61064081018051602090810151516106608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516130ce9190600190613ca3565b8161068001819052506130f16130ea3384604001516000613c8b565b602661104f565b60016130fc33611075565b51600181111561310e5761310e6147ec565b1461311a576000613128565b61312333611075565b604001515b6106a0820181905261060082015151613144911015602761104f565b610680810151515161060082015151613160911015602861104f565b8161012001511561317c576101408201516106e082015261319c565b816101400151431061318e5743613195565b8161014001515b6106e08201525b816101200151156131b8576101408201516107008201526131d8565b81610140015143106131ca57436131d1565b8161014001515b6107008201525b6101c08201516131f3576101808201516106c082015261326d565b816101c00151670de0b6b3a76400008360a001518461016001518560800151856106e001511061322757856080015161322e565b8461070001515b6132389190614f9c565b6132429190614fb3565b61324c9190614fb3565b6132569190614fd2565b8261018001516132669190614f08565b6106c08201525b336000818152600560205260409020805460ff191660019081179091559061329490611102565b5160018111156132a6576132a66147ec565b146132b25760006132c0565b6132bb33611102565b604001515b670de0b6b3a764000060016132d433610f7d565b5160018111156132e6576132e66147ec565b146132f2576000613300565b6132fb33610f7d565b604001515b836106c001516133109190614f9c565b836106a001516133209190614fb3565b61332a9190614fd2565b6133349190614f08565b33600090815260056020908152604080832060019081019490945560079091529020805460ff1916821781556106c083015191015561012082015115613385576101408201516107208201526133a5565b8161014001514310613397574361339e565b8161014001515b6107208201525b816101200151156133c1576101408201516107408201526133e1565b81610140015143106133d357436133da565b8161014001515b6107408201525b8160800151816107200151106133fb578160800151613402565b8061074001515b6107608201526101208201511561342457610140820151610780820152613444565b8161014001514310613436574361343d565b8161014001515b6107808201525b61078081015160c0830151600161345a3361118f565b51600181111561346c5761346c6147ec565b14613478576000613486565b6134813361118f565b604001515b6134909190614f08565b116137a157816101200151156134b1576101408201516108208201526134d1565b81610140015143106134c357436134ca565b8161014001515b6108208201525b3360009081526006602090815260408083208054600160ff1991821681178355610820870151928101929092556004909352922080549091169091179055610600810151516106a08201516135269190614f9c565b3360009081526004602052604090206001015561010082015161060082015151620f42409161355491614fb3565b61355e9190614fd2565b6106008201515161356f9190614f9c565b610840820181905261068082015151516135899190614f9c565b61086082018051919091526106808201805151602090810151835182015290515160409081015192519215159201919091528201516108408201516135d091903390613e2d565b610600810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a1610600810151516040519081527f424ec7a0c437a8cae2711aa429faa331e5f416f1471c1dae6040cfd1788d6abb9060200160405180910390a16106008101515160808401526101208201511561367357610140820151610880820152613693565b8161014001514310613685574361368c565b8161014001515b6108808201525b61369b614174565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015260a08087015185519091015260c08087015185519091015260e080870151855190910152610100808701518551909101526101208087015185519015159101526108808501518285018051919091526107608601518151909301929092526106c08501518251909301929092526101a0850151905190910152610600820151516101c08401516137739190614f9c565b60208201805160800191909152514360a090910152610680820151610860830151611d119190600090613ca3565b336000908152600560205260408120805460ff1916600190811782550155610120820151156137db576101408201516107a08201526137fb565b81610140015143106137ed57436137f4565b8161014001515b6107a08201525b3360009081526006602090815260408083208054600160ff19918216811783556107a0870151928101929092556004909352922080549091169091179055610600810151516106a08201516138509190614f9c565b3360009081526004602052604090206001015561010082015161060082015151620f42409161387e91614fb3565b6138889190614fd2565b610600820151516138999190614f9c565b6107c0820181905261068082015151516138b39190614f9c565b6107e082018051919091526106808201805151602090810151835182015290515160409081015192519215159201919091528201516107c08201516138fa91903390613e2d565b610600810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a1610600810151516040519081527f424ec7a0c437a8cae2711aa429faa331e5f416f1471c1dae6040cfd1788d6abb9060200160405180910390a16106008101515160808401526101208201511561399d576101408201516108008201526139bd565b81610140015143106139af57436139b6565b8161014001515b6108008201525b6139c5614174565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015260a08087015185519091015260c08087015185519091015260e080870151855190910152610100808701518551909101526101208087015185519015159101526108008501518285018051919091526107608601518151909301929092526106c08501518251909301929092526101a0850151905190910152610600820151516101c0840151613a9d9190614f9c565b60208201805160800191909152514360a0909101526106808201516107e0830151611d119190600090613ca3565b50505050565b613ae1600360005414601261104f565b8151613afc901580613af557508251600154145b601361104f565b600080805560028054613b0e90614916565b80601f0160208091040260200160405190810160405280929190818152602001828054613b3a90614916565b8015613b875780601f10613b5c57610100808354040283529160200191613b87565b820191906000526020600020905b815481529060010190602001808311613b6a57829003601f168201915b5050505050806020019051810190613b9f9190614bcb565b60408051338152855160208083019190915286015115158183015290519192507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6919081900360600190a1613bf63415601161104f565b80516101c08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613c34573d6000803e3d6000fd5b50604081015181516101a0830151613c5692919060015b602002015151613e2d565b602081015181516101a0830151613c709291906000613c4b565b60008080556001819055613c86906002906145ae565b505050565b6000613c9983853085613e41565b90505b9392505050565b613cab6145eb565b60005b6002811015613cf757848160028110613cc957613cc9614edc565b6020020151828260028110613ce057613ce0614edc565b602002015280613cef81614ff4565b915050613cae565b5081818460028110613d0b57613d0b614edc565b60200201529392505050565b613d1f614636565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152855160c09081015181870152865160e0908101518188015287516101009081015190880152875161012090810151151590880152848801805151610140890152805186015161016089015280518701516101808901528051909401516101a08801528351909201516101c0870152825101516101e0860152905101516102008401526005600055436001559051613e099183910161504d565b60405160208183030381529060405260029080519060200190613c869291906146d0565b613e38838383613f1b565b613c8657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613ea891615147565b60006040518083038185875af1925050503d8060008114613ee5576040519150601f19603f3d011682016040523d82523d6000602084013e613eea565b606091505b5091509150613efb82826001613fec565b5080806020019051810190613f109190615163565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613f7a91615147565b60006040518083038185875af1925050503d8060008114613fb7576040519150601f19603f3d011682016040523d82523d6000602084013e613fbc565b606091505b5091509150613fcd82826002613fec565b5080806020019051810190613fe29190615163565b9695505050505050565b60608315613ffb575081613c9c565b82511561400b5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161106c565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060200160405280614062614027565b905290565b6040518060a0016040528060008152602001614081614027565b815260200161408e614027565b815260200160008152602001600081525090565b604051806040016040528060008152602001614062614754565b6040805160c08101825260008082526020808301829052828401829052835180820185528281526060840152835180820185528281526080840152835190810190935282529060a082015290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806020016040528061406261410a565b60408051610180810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082018390526101208201839052610140820183905261016082019290925290815260208101614062614767565b60408051610900810190915260006108a082018181526108c083018290526108e083019190915281526020810161420f6145eb565b8152604080516060810182526000808252602082810182905292820152910190815260200161423c6145eb565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016142ad604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081526020016142ed604051806060016040528060008152602001600081526020016000151581525090565b81526020016142fa6145eb565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614358614027565b81526020016000815260200161437a6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016143a76145eb565b815260408051606081018252600080825260208281018290529282015291019081526020016143d4614027565b81526020016143ef6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161441c6145eb565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016144966040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016144c36145eb565b815260408051606081018252600080825260208281018290529282015291019081526020016144f06145eb565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001614561604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081526020016145a1604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b5080546145ba90614916565b6000825580601f106145ca575050565b601f0160209004906000526020600020908101906145e891906147a5565b50565b60405180604001604052806002905b614620604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816145fa5790505090565b60405180610220016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016145a16145eb565b8280546146dc90614916565b90600052602060002090601f0160209004810192826146fe5760008555614744565b82601f1061471757805160ff1916838001178555614744565b82800160010185558215614744579182015b82811115614744578251825591602001919060010190614729565b506147509291506147a5565b5090565b60405180602001604052806140626140bc565b6040518061010001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016145a16145eb565b5b8082111561475057600081556001016147a6565b6001600160a01b03811681146145e857600080fd5b6000602082840312156147e157600080fd5b8135613c9c816147ba565b634e487b7160e01b600052602160045260246000fd5b600281106145e8576145e86147ec565b8151606082019061482281614802565b808352506020830151151560208301526040830151604083015292915050565b8151815260208083015190820152604080830151908201526060808301519082015260808101610363565b60006040828403121561487f57600080fd5b50919050565b60006020828403121561489757600080fd5b5035919050565b60005b838110156148b95781810151838201526020016148a1565b83811115613acb5750506000910152565b82815260406020820152600082518060408401526148ef81606085016020870161489e565b601f01601f1916919091016060019392505050565b600060e0828403121561487f57600080fd5b600181811c9082168061492a57607f821691505b6020821081141561487f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156149845761498461494b565b60405290565b6040516060810167ffffffffffffffff811182821017156149845761498461494b565b604051610180810167ffffffffffffffff811182821017156149845761498461494b565b6040516101e0810167ffffffffffffffff811182821017156149845761498461494b565b604051610220810167ffffffffffffffff811182821017156149845761498461494b565b6040516020810167ffffffffffffffff811182821017156149845761498461494b565b60405160c0810167ffffffffffffffff811182821017156149845761498461494b565b8051610691816147ba565b80151581146145e857600080fd5b805161069181614a6a565b600082601f830112614a9457600080fd5b614a9c614961565b8060c0840185811115614aae57600080fd5b845b81811015614b015760608188031215614ac95760008081fd5b614ad161498a565b8151815260208083015181830152604080840151614aee81614a6a565b9083015290855290930192606001614ab0565b509095945050505050565b60006102208284031215614b1f57600080fd5b614b276149ad565b614b3083614a5f565b8152614b3e60208401614a5f565b6020820152614b4f60408401614a5f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120614ba0818501614a78565b90820152610140614bb385858301614a83565b90820152610200929092015161016083015250919050565b60006102808284031215614bde57600080fd5b614be66149d1565b614bef83614a5f565b8152614bfd60208401614a5f565b6020820152614c0e60408401614a5f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152506101a0614c9085828601614a83565b9082015261026092909201516101c083015250919050565b60006102c08284031215614cbb57600080fd5b614cc36149f5565b614ccc83614a5f565b8152614cda60208401614a5f565b6020820152614ceb60408401614a5f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120614d3c818501614a78565b908201526101408381015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0614d8685828601614a83565b908201526102a0929092015161020083015250919050565b600060408284031215614db057600080fd5b614db8614961565b823581526020830135614dca81614a6a565b60208201529392505050565b600060208284031215614de857600080fd5b6040516020810181811067ffffffffffffffff82111715614e0b57614e0b61494b565b6040529135825250919050565b600081830360e0811215614e2b57600080fd5b614e33614961565b8335815260c0601f1983011215614e4957600080fd5b614e51614a19565b9150614e5b614a3c565b602085013560058110614e6d57600080fd5b81526040850135614e7d81614a6a565b60208201526060850135614e9081614a6a565b6040820152614ea28660808701614dd6565b6060820152614eb48660a08701614dd6565b6080820152614ec68660c08701614dd6565b60a0820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115614f1b57614f1b614ef2565b500190565b6001600160a01b038316815281516020808301919091528201515180516101008301919060058110614f5457614f546147ec565b8060408501525060208101511515606084015260408101511515608084015260608101515160a084015260808101515160c084015260a08101515160e0840152509392505050565b600082821015614fae57614fae614ef2565b500390565b6000816000190483118215151615614fcd57614fcd614ef2565b500290565b600082614fef57634e487b7160e01b600052601260045260246000fd5b500490565b600060001982141561500857615008614ef2565b5060010190565b8060005b6002811015613acb578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101615013565b81516001600160a01b031681526102c08101602083015161507960208401826001600160a01b03169052565b50604083015161509460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516150e78285018215159052565b50506101408381015190830152610160808401519083015261018080840151908301526101a080840151908301526101c080840151908301526101e0808401516151338285018261500f565b50506102008301516102a083015292915050565b6000825161515981846020870161489e565b9190910192915050565b60006020828403121561517557600080fd5b8151613c9c81614a6a56fea2646970667358221220b5d21e02217bf694bae01106e959972f44a66b560ec4eb3922f161e67b164af964736f6c634300080c0033`,
  BytecodeLen: 23256,
  Which: `oD`,
  version: 7,
  views: {
    global: `global`,
    initial: `initial`,
    local: `local`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './farm.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './farm.rsh:405:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './farm.rsh:411:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './farm.rsh:196:21:after expr stmt semicolon',
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
  "recalculateRewards": recalculateRewards,
  "setTime": setTime,
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  recalculateRewards: recalculateRewards,
  setTime: setTime,
  stake: stake,
  unstake: unstake
  };

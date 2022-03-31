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
            const [v757, v758, v759, v760, v761, v762, v763, v764, v780] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async () => {
              
              const v1504 = {
                lastUpdateTime: v801,
                rewardPerTokenStored: v802,
                totalStaked: v803
                };
              
              return v1504;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async () => {
              
              const v1504 = {
                lastUpdateTime: v801,
                rewardPerTokenStored: v802,
                totalStaked: v803
                };
              
              return v1504;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = svs;
            return (await ((async () => {
              
              const v813 = {
                lastUpdateTime: v801,
                rewardPerTokenStored: v802,
                totalStaked: v803
                };
              
              return v813;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v757, v758, v759, v760, v761, v762, v763, v764, v780] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async () => {
              
              const v1503 = {
                beginBlock: v760,
                endBlock: v761,
                rewardToken: v759,
                stakeToken: v758,
                totalRewardAmount: v762
                };
              
              return v1503;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async () => {
              
              const v1503 = {
                beginBlock: v760,
                endBlock: v761,
                rewardToken: v759,
                stakeToken: v758,
                totalRewardAmount: v762
                };
              
              return v1503;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = svs;
            return (await ((async () => {
              
              const v812 = {
                beginBlock: v760,
                endBlock: v761,
                rewardToken: v759,
                stakeToken: v758,
                totalRewardAmount: v762
                };
              
              return v812;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v757, v758, v759, v760, v761, v762, v763, v764, v780] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async (_v1505 ) => {
                const v1505 = stdlib.protect(ctc0, _v1505, null);
              
              const v1506 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1505), null);
              const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
              const v1508 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1505), null);
              const v1509 = stdlib.fromSome(v1508, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
              const v1510 = {
                reward: v1509,
                staked: v1507
                };
              
              return v1510;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v757, v758, v759, v760, v761, v762, v801, v802, v803] = svs;
            return (await ((async (_v1505 ) => {
                const v1505 = stdlib.protect(ctc0, _v1505, null);
              
              const v1506 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1505), null);
              const v1507 = stdlib.fromSome(v1506, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
              const v1508 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1505), null);
              const v1509 = stdlib.fromSome(v1508, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
              const v1510 = {
                reward: v1509,
                staked: v1507
                };
              
              return v1510;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
            const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = svs;
            return (await ((async (_v814 ) => {
                const v814 = stdlib.protect(ctc0, _v814, null);
              
              const v815 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v814), null);
              const v816 = stdlib.fromSome(v815, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
              const v817 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v814), null);
              const v818 = stdlib.fromSome(v817, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
              const v819 = {
                reward: v818,
                staked: v816
                };
              
              return v819;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
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
    claim0_106: ctc5,
    stake0_106: ctc6,
    unstake0_106: ctc6
    });
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
  
  
  const v740 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v741 = [v740, v740];
  const v747 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:114:38:application',
    fs: ['at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v748 = v747.stakeToken;
  const v749 = v747.rewardToken;
  const v750 = v747.beginBlock;
  const v751 = v747.endBlock;
  const v752 = v747.totalRewardAmount;
  const v753 = stdlib.tokenEq(v748, v749);
  const v754 = v753 ? false : true;
  stdlib.assert(v754, {
    at: './index.rsh:116:11:application',
    fs: ['at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v755 = stdlib.sub(v751, v750);
  const v756 = stdlib.div(v752, v755);
  
  const txn1 = await (ctc.sendrecv({
    args: [v748, v749, v750, v751, v752, v756],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v758, v759, v760, v761, v762, v763], secs: v765, time: v764, didSend: v45, from: v757 } = txn1;
      
      const v766 = stdlib.tokenEq(v758, v759);
      const v767 = v766 ? false : true;
      ;
      const v768 = v741[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0)];
      const v770 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
      const v771 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
      const v772 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v770, v771];
      const v773 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0), v772);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v758
        });
      const v775 = v773[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
      const v777 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
      const v778 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
      const v779 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v777, v778];
      const v780 = stdlib.Array_set(v773, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1), v779);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v759
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
  const {data: [v758, v759, v760, v761, v762, v763], secs: v765, time: v764, didSend: v45, from: v757 } = txn1;
  const v766 = stdlib.tokenEq(v758, v759);
  const v767 = v766 ? false : true;
  stdlib.assert(v767, {
    at: './index.rsh:130:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v768 = v741[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0)];
  const v770 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v771 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
  const v772 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v770, v771];
  const v773 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0), v772);
  ;
  const v775 = v773[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v777 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v778 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
  const v779 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v777, v778];
  const v780 = stdlib.Array_set(v773, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1), v779);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v763, v764, v780],
    evt_cnt: 0,
    funcNum: 1,
    lct: v764,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 0), [[v762, v759]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v784, time: v783, didSend: v52, from: v782 } = txn2;
      
      ;
      const v785 = v780[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
      const v786 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 0)];
      const v787 = stdlib.add(v786, v762);
      const v790 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
      const v791 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 2)];
      const v792 = [v787, v790, v791];
      const v793 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1), v792);
      sim_r.txns.push({
        amt: v762,
        kind: 'to',
        tok: v759
        });
      const v794 = stdlib.addressEq(v757, v782);
      ;
      
      const v800 = true;
      const v801 = v764;
      const v802 = stdlib.checkedBigNumberify('./index.rsh:204:5:decimal', stdlib.UInt_max, 0);
      const v803 = stdlib.checkedBigNumberify('./index.rsh:202:5:decimal', stdlib.UInt_max, 0);
      const v804 = v783;
      const v810 = v793;
      
      if (await (async () => {
        
        return v800;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v784, time: v783, didSend: v52, from: v782 } = txn2;
  ;
  const v785 = v780[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
  const v786 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 0)];
  const v787 = stdlib.add(v786, v762);
  const v790 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
  const v791 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 2)];
  const v792 = [v787, v790, v791];
  const v793 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1), v792);
  ;
  const v794 = stdlib.addressEq(v757, v782);
  stdlib.assert(v794, {
    at: './index.rsh:133:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.contractStarted(), {
    at: './index.rsh:189:29:application',
    fs: ['at ./index.rsh:188:7:application call to [unknown function] (defined at: ./index.rsh:188:28:function exp)'],
    msg: 'contractStarted',
    who: 'Creator'
    });
  
  let v800 = true;
  let v801 = v764;
  let v802 = stdlib.checkedBigNumberify('./index.rsh:204:5:decimal', stdlib.UInt_max, 0);
  let v803 = stdlib.checkedBigNumberify('./index.rsh:202:5:decimal', stdlib.UInt_max, 0);
  let v804 = v783;
  let v810 = v793;
  
  while (await (async () => {
    
    return v800;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn3;
    switch (v924[0]) {
      case 'claim0_106': {
        const v927 = v924[1];
        undefined /* setApiDetails */;
        ;
        const v983 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v988 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v989 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v990 = [v984, v988, v989];
        const v991 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v990);
        ;
        const v992 = v991[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v993 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v999 = [v993, v997, v998];
        const v1000 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v999);
        ;
        let v1002;
        const v1003 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1003) {
          v1002 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1005 = stdlib.sub(v804, v801);
          const v1006 = stdlib.mul(v1005, v763);
          const v1007 = stdlib.div(v1006, v803);
          const v1008 = stdlib.add(v802, v1007);
          v1002 = v1008;
          }
        const v1009 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1010 = stdlib.fromSome(v1009, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1011 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1012 = stdlib.fromSome(v1011, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1013 = stdlib.sub(v1002, v1012);
        const v1014 = stdlib.mul(v1010, v1013);
        const v1015 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1016 = stdlib.fromSome(v1015, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1017 = stdlib.add(v1014, v1016);
        await stdlib.mapSet(map1, v923, v1017);
        await stdlib.mapSet(map2, v923, v1002);
        await stdlib.mapSet(map1, v923, stdlib.checkedBigNumberify('./index.rsh:266:25:decimal', stdlib.UInt_max, 0));
        const v1022 = v1000[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
        const v1023 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 0)];
        const v1030 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
        const v1031 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 2)];
        const v1032 = [v1023, v1030, v1031];
        const v1033 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1), v1032);
        const v1034 = null;
        await txn3.getOutput('claim', 'v1034', ctc0, v1034);
        null;
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1002;
        const cv803 = v803;
        const cv804 = v925;
        const cv810 = v1033;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      case 'stake0_106': {
        const v1119 = v924[1];
        undefined /* setApiDetails */;
        const v1131 = v1119[stdlib.checkedBigNumberify('./index.rsh:227:9:spread', stdlib.UInt_max, 0)];
        ;
        const v1175 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1177 = stdlib.add(v1176, v1131);
        const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1181 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1182 = [v1177, v1180, v1181];
        const v1183 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1182);
        ;
        const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1185 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1189 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1190 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1191 = [v1185, v1189, v1190];
        const v1192 = stdlib.Array_set(v1183, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1191);
        ;
        let v1235;
        const v1236 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1236) {
          v1235 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1238 = stdlib.sub(v804, v801);
          const v1239 = stdlib.mul(v1238, v763);
          const v1240 = stdlib.div(v1239, v803);
          const v1241 = stdlib.add(v802, v1240);
          v1235 = v1241;
          }
        const v1242 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1244 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1246 = stdlib.sub(v1235, v1245);
        const v1247 = stdlib.mul(v1243, v1246);
        const v1248 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1250 = stdlib.add(v1247, v1249);
        await stdlib.mapSet(map1, v923, v1250);
        await stdlib.mapSet(map2, v923, v1235);
        const v1255 = stdlib.add(v1243, v1131);
        await stdlib.mapSet(map0, v923, v1255);
        const v1256 = null;
        await txn3.getOutput('stake', 'v1256', ctc0, v1256);
        null;
        const v1262 = stdlib.add(v803, v1131);
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1235;
        const cv803 = v1262;
        const cv804 = v925;
        const cv810 = v1192;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      case 'unstake0_106': {
        const v1311 = v924[1];
        undefined /* setApiDetails */;
        ;
        const v1367 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1374 = [v1368, v1372, v1373];
        const v1375 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1374);
        ;
        const v1376 = v1375[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1377 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1381 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1382 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1383 = [v1377, v1381, v1382];
        const v1384 = stdlib.Array_set(v1375, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1383);
        ;
        const v1457 = v1311[stdlib.checkedBigNumberify('./index.rsh:240:9:spread', stdlib.UInt_max, 0)];
        const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1459 = stdlib.fromSome(v1458, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1460 = stdlib.le(v1457, v1459);
        stdlib.assert(v1460, {
          at: './index.rsh:249:14:application',
          fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1461 = v1384[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
        const v1462 = v1461[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
        const v1463 = stdlib.le(v1457, v1462);
        stdlib.assert(v1463, {
          at: './index.rsh:250:14:application',
          fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v1464;
        const v1465 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1465) {
          v1464 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1467 = stdlib.sub(v804, v801);
          const v1468 = stdlib.mul(v1467, v763);
          const v1469 = stdlib.div(v1468, v803);
          const v1470 = stdlib.add(v802, v1469);
          v1464 = v1470;
          }
        const v1473 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1474 = stdlib.fromSome(v1473, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1475 = stdlib.sub(v1464, v1474);
        const v1476 = stdlib.mul(v1459, v1475);
        const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1479 = stdlib.add(v1476, v1478);
        await stdlib.mapSet(map1, v923, v1479);
        await stdlib.mapSet(map2, v923, v1464);
        const v1482 = stdlib.sub(v1459, v1457);
        await stdlib.mapSet(map0, v923, v1482);
        const v1488 = stdlib.sub(v1462, v1457);
        const v1491 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 1)];
        const v1492 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 2)];
        const v1493 = [v1488, v1491, v1492];
        const v1494 = stdlib.Array_set(v1384, stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 0), v1493);
        ;
        const v1495 = null;
        await txn3.getOutput('unstake', 'v1495', ctc0, v1495);
        null;
        const v1501 = stdlib.sub(v803, v1457);
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1464;
        const cv803 = v1501;
        const cv804 = v925;
        const cv810 = v1494;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v801, v802, v803],
    evt_cnt: 0,
    funcNum: 3,
    lct: v804,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:276:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1514, time: v1513, didSend: v588, from: v1512 } = txn3;
      
      ;
      const v1515 = v1513;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v759
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v758
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
  const {data: [], secs: v1514, time: v1513, didSend: v588, from: v1512 } = txn3;
  ;
  let v1515 = v1513;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v757, v758, v759, v760, v761, v762, v801, v802, v803],
      evt_cnt: 0,
      funcNum: 5,
      lct: v1515,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:279:38:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v1525, time: v1524, didSend: v595, from: v1523 } = txn4;
        
        ;
        const v1526 = stdlib.addressEq(v757, v1523);
        ;
        const cv1515 = v1524;
        
        await (async () => {
          const v1515 = cv1515;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v759
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v758
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
      tys: [ctc8, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1525, time: v1524, didSend: v595, from: v1523 } = txn4;
    ;
    const v1526 = stdlib.addressEq(v757, v1523);
    stdlib.assert(v1526, {
      at: './index.rsh:279:38:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const cv1515 = v1524;
    
    v1515 = cv1515;
    
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
    claim0_106: ctc4,
    stake0_106: ctc5,
    unstake0_106: ctc5
    });
  const ctc7 = stdlib.T_Address;
  
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
  
  
  const v740 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v741 = [v740, v740];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v758, v759, v760, v761, v762, v763], secs: v765, time: v764, didSend: v45, from: v757 } = txn1;
  const v766 = stdlib.tokenEq(v758, v759);
  const v767 = v766 ? false : true;
  stdlib.assert(v767, {
    at: './index.rsh:130:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v768 = v741[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0)];
  const v770 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v771 = v768[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
  const v772 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v770, v771];
  const v773 = stdlib.Array_set(v741, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 0), v772);
  ;
  const v775 = v773[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v777 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1)];
  const v778 = v775[stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 2)];
  const v779 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v777, v778];
  const v780 = stdlib.Array_set(v773, stdlib.checkedBigNumberify('./index.rsh:130:11:dot', stdlib.UInt_max, 1), v779);
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
  const {data: [], secs: v784, time: v783, didSend: v52, from: v782 } = txn2;
  ;
  const v785 = v780[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
  const v786 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 0)];
  const v787 = stdlib.add(v786, v762);
  const v790 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1)];
  const v791 = v785[stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 2)];
  const v792 = [v787, v790, v791];
  const v793 = stdlib.Array_set(v780, stdlib.checkedBigNumberify('./index.rsh:133:11:dot', stdlib.UInt_max, 1), v792);
  ;
  const v794 = stdlib.addressEq(v757, v782);
  stdlib.assert(v794, {
    at: './index.rsh:133:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.contractStarted(), {
    at: './index.rsh:189:29:application',
    fs: ['at ./index.rsh:188:7:application call to [unknown function] (defined at: ./index.rsh:188:28:function exp)'],
    msg: 'contractStarted',
    who: 'User'
    });
  
  let v800 = true;
  let v801 = v764;
  let v802 = stdlib.checkedBigNumberify('./index.rsh:204:5:decimal', stdlib.UInt_max, 0);
  let v803 = stdlib.checkedBigNumberify('./index.rsh:202:5:decimal', stdlib.UInt_max, 0);
  let v804 = v783;
  let v810 = v793;
  
  while (await (async () => {
    
    return v800;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn3;
    switch (v924[0]) {
      case 'claim0_106': {
        const v927 = v924[1];
        undefined /* setApiDetails */;
        ;
        const v983 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v988 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v989 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v990 = [v984, v988, v989];
        const v991 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v990);
        ;
        const v992 = v991[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v993 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v999 = [v993, v997, v998];
        const v1000 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v999);
        ;
        let v1002;
        const v1003 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1003) {
          v1002 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1005 = stdlib.sub(v804, v801);
          const v1006 = stdlib.mul(v1005, v763);
          const v1007 = stdlib.div(v1006, v803);
          const v1008 = stdlib.add(v802, v1007);
          v1002 = v1008;
          }
        const v1009 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1010 = stdlib.fromSome(v1009, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1011 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1012 = stdlib.fromSome(v1011, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1013 = stdlib.sub(v1002, v1012);
        const v1014 = stdlib.mul(v1010, v1013);
        const v1015 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1016 = stdlib.fromSome(v1015, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1017 = stdlib.add(v1014, v1016);
        await stdlib.mapSet(map1, v923, v1017);
        await stdlib.mapSet(map2, v923, v1002);
        await stdlib.mapSet(map1, v923, stdlib.checkedBigNumberify('./index.rsh:266:25:decimal', stdlib.UInt_max, 0));
        const v1022 = v1000[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
        const v1023 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 0)];
        const v1030 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
        const v1031 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 2)];
        const v1032 = [v1023, v1030, v1031];
        const v1033 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1), v1032);
        const v1034 = null;
        await txn3.getOutput('claim', 'v1034', ctc0, v1034);
        null;
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1002;
        const cv803 = v803;
        const cv804 = v925;
        const cv810 = v1033;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      case 'stake0_106': {
        const v1119 = v924[1];
        undefined /* setApiDetails */;
        const v1131 = v1119[stdlib.checkedBigNumberify('./index.rsh:227:9:spread', stdlib.UInt_max, 0)];
        ;
        const v1175 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1177 = stdlib.add(v1176, v1131);
        const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1181 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1182 = [v1177, v1180, v1181];
        const v1183 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1182);
        ;
        const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1185 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1189 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1190 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1191 = [v1185, v1189, v1190];
        const v1192 = stdlib.Array_set(v1183, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1191);
        ;
        let v1235;
        const v1236 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1236) {
          v1235 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1238 = stdlib.sub(v804, v801);
          const v1239 = stdlib.mul(v1238, v763);
          const v1240 = stdlib.div(v1239, v803);
          const v1241 = stdlib.add(v802, v1240);
          v1235 = v1241;
          }
        const v1242 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1244 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1246 = stdlib.sub(v1235, v1245);
        const v1247 = stdlib.mul(v1243, v1246);
        const v1248 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1250 = stdlib.add(v1247, v1249);
        await stdlib.mapSet(map1, v923, v1250);
        await stdlib.mapSet(map2, v923, v1235);
        const v1255 = stdlib.add(v1243, v1131);
        await stdlib.mapSet(map0, v923, v1255);
        const v1256 = null;
        await txn3.getOutput('stake', 'v1256', ctc0, v1256);
        null;
        const v1262 = stdlib.add(v803, v1131);
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1235;
        const cv803 = v1262;
        const cv804 = v925;
        const cv810 = v1192;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      case 'unstake0_106': {
        const v1311 = v924[1];
        undefined /* setApiDetails */;
        ;
        const v1367 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1374 = [v1368, v1372, v1373];
        const v1375 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1374);
        ;
        const v1376 = v1375[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1377 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
        const v1381 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
        const v1382 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
        const v1383 = [v1377, v1381, v1382];
        const v1384 = stdlib.Array_set(v1375, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1383);
        ;
        const v1457 = v1311[stdlib.checkedBigNumberify('./index.rsh:240:9:spread', stdlib.UInt_max, 0)];
        const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
        const v1459 = stdlib.fromSome(v1458, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
        const v1460 = stdlib.le(v1457, v1459);
        stdlib.assert(v1460, {
          at: './index.rsh:249:14:application',
          fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
          msg: null,
          who: 'User'
          });
        const v1461 = v1384[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
        const v1462 = v1461[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
        const v1463 = stdlib.le(v1457, v1462);
        stdlib.assert(v1463, {
          at: './index.rsh:250:14:application',
          fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
          msg: null,
          who: 'User'
          });
        let v1464;
        const v1465 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
        if (v1465) {
          v1464 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1467 = stdlib.sub(v804, v801);
          const v1468 = stdlib.mul(v1467, v763);
          const v1469 = stdlib.div(v1468, v803);
          const v1470 = stdlib.add(v802, v1469);
          v1464 = v1470;
          }
        const v1473 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
        const v1474 = stdlib.fromSome(v1473, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
        const v1475 = stdlib.sub(v1464, v1474);
        const v1476 = stdlib.mul(v1459, v1475);
        const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
        const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
        const v1479 = stdlib.add(v1476, v1478);
        await stdlib.mapSet(map1, v923, v1479);
        await stdlib.mapSet(map2, v923, v1464);
        const v1482 = stdlib.sub(v1459, v1457);
        await stdlib.mapSet(map0, v923, v1482);
        const v1488 = stdlib.sub(v1462, v1457);
        const v1491 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 1)];
        const v1492 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 2)];
        const v1493 = [v1488, v1491, v1492];
        const v1494 = stdlib.Array_set(v1384, stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 0), v1493);
        ;
        const v1495 = null;
        await txn3.getOutput('unstake', 'v1495', ctc0, v1495);
        null;
        const v1501 = stdlib.sub(v803, v1457);
        const cv800 = true;
        const cv801 = v804;
        const cv802 = v1464;
        const cv803 = v1501;
        const cv804 = v925;
        const cv810 = v1494;
        
        v800 = cv800;
        v801 = cv801;
        v802 = cv802;
        v803 = cv803;
        v804 = cv804;
        v810 = cv810;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v801, v802, v803],
    evt_cnt: 0,
    funcNum: 3,
    lct: v804,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:276:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1514, time: v1513, didSend: v588, from: v1512 } = txn3;
      
      ;
      const v1515 = v1513;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v759
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v758
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
    tys: [ctc7, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1514, time: v1513, didSend: v588, from: v1512 } = txn3;
  ;
  let v1515 = v1513;
  
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
    const {data: [], secs: v1525, time: v1524, didSend: v595, from: v1523 } = txn4;
    ;
    const v1526 = stdlib.addressEq(v757, v1523);
    stdlib.assert(v1526, {
      at: './index.rsh:279:38:dot',
      fs: [],
      msg: 'sender correct',
      who: 'User'
      });
    const cv1515 = v1524;
    
    v1515 = cv1515;
    
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
    claim0_106: ctc8,
    stake0_106: ctc9,
    unstake0_106: ctc9
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
  
  
  const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v846 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:9:application call to [unknown function] (defined at: ./index.rsh:262:9:function exp)', 'at ./index.rsh:200:21:application call to "runclaim0_106" (defined at: ./index.rsh:262:9:function exp)', 'at ./index.rsh:200:21:application call to [unknown function] (defined at: ./index.rsh:200:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v850 = ['claim0_106', v846];
  
  const txn1 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810, v850],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:226:14:decimal', stdlib.UInt_max, 0), v758], [stdlib.checkedBigNumberify('./index.rsh:226:14:decimal', stdlib.UInt_max, 0), v759]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
      
      switch (v924[0]) {
        case 'claim0_106': {
          const v927 = v924[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v983 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v988 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v989 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v990 = [v984, v988, v989];
          const v991 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v990);
          ;
          const v992 = v991[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v993 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v999 = [v993, v997, v998];
          const v1000 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v999);
          ;
          let v1002;
          const v1003 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
          if (v1003) {
            v1002 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1005 = stdlib.sub(v804, v801);
            const v1006 = stdlib.mul(v1005, v763);
            const v1007 = stdlib.div(v1006, v803);
            const v1008 = stdlib.add(v802, v1007);
            v1002 = v1008;
            }
          const v1009 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v923), null);
          const v1010 = stdlib.fromSome(v1009, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
          const v1011 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v923), null);
          const v1012 = stdlib.fromSome(v1011, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
          const v1013 = stdlib.sub(v1002, v1012);
          const v1014 = stdlib.mul(v1010, v1013);
          const v1015 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v923), null);
          const v1016 = stdlib.fromSome(v1015, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
          const v1017 = stdlib.add(v1014, v1016);
          await stdlib.simMapSet(sim_r, 1, v923, v1017);
          await stdlib.simMapSet(sim_r, 2, v923, v1002);
          await stdlib.simMapSet(sim_r, 1, v923, stdlib.checkedBigNumberify('./index.rsh:266:25:decimal', stdlib.UInt_max, 0));
          const v1022 = v1000[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
          const v1023 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 0)];
          const v1030 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
          const v1031 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 2)];
          const v1032 = [v1023, v1030, v1031];
          const v1033 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1), v1032);
          const v1034 = null;
          const v1035 = await txn1.getOutput('claim', 'v1034', ctc0, v1034);
          
          null;
          const v2175 = v804;
          const v2176 = v1002;
          const v2177 = v803;
          const v2178 = v925;
          const v2179 = v1033;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_106': {
          const v1119 = v924[1];
          
          break;
          }
        case 'unstake0_106': {
          const v1311 = v924[1];
          
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
  const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
  switch (v924[0]) {
    case 'claim0_106': {
      const v927 = v924[1];
      undefined /* setApiDetails */;
      ;
      const v983 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v984 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v988 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v989 = v983[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v990 = [v984, v988, v989];
      const v991 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v990);
      ;
      const v992 = v991[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v993 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v999 = [v993, v997, v998];
      const v1000 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v999);
      ;
      let v1002;
      const v1003 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
      if (v1003) {
        v1002 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1005 = stdlib.sub(v804, v801);
        const v1006 = stdlib.mul(v1005, v763);
        const v1007 = stdlib.div(v1006, v803);
        const v1008 = stdlib.add(v802, v1007);
        v1002 = v1008;
        }
      const v1009 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
      const v1010 = stdlib.fromSome(v1009, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
      const v1011 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
      const v1012 = stdlib.fromSome(v1011, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
      const v1013 = stdlib.sub(v1002, v1012);
      const v1014 = stdlib.mul(v1010, v1013);
      const v1015 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
      const v1016 = stdlib.fromSome(v1015, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
      const v1017 = stdlib.add(v1014, v1016);
      await stdlib.mapSet(map1, v923, v1017);
      await stdlib.mapSet(map2, v923, v1002);
      await stdlib.mapSet(map1, v923, stdlib.checkedBigNumberify('./index.rsh:266:25:decimal', stdlib.UInt_max, 0));
      const v1022 = v1000[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
      const v1023 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 0)];
      const v1030 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1)];
      const v1031 = v1022[stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 2)];
      const v1032 = [v1023, v1030, v1031];
      const v1033 = stdlib.Array_set(v1000, stdlib.checkedBigNumberify('./index.rsh:267:51:application', stdlib.UInt_max, 1), v1032);
      const v1034 = null;
      const v1035 = await txn1.getOutput('claim', 'v1034', ctc0, v1034);
      if (v448) {
        stdlib.protect(ctc0, await interact.out(v927, v1035), {
          at: './index.rsh:263:7:application',
          fs: ['at ./index.rsh:263:7:application call to [unknown function] (defined at: ./index.rsh:263:7:function exp)', 'at ./index.rsh:269:10:application call to "k" (defined at: ./index.rsh:264:11:function exp)', 'at ./index.rsh:264:11:application call to [unknown function] (defined at: ./index.rsh:264:11:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      null;
      const v2175 = v804;
      const v2176 = v1002;
      const v2177 = v803;
      const v2178 = v925;
      const v2179 = v1033;
      return;
      
      break;
      }
    case 'stake0_106': {
      const v1119 = v924[1];
      return;
      break;
      }
    case 'unstake0_106': {
      const v1311 = v924[1];
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
    claim0_106: ctc9,
    stake0_106: ctc8,
    unstake0_106: ctc8
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
  
  
  const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v823 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:229:11:application call to [unknown function] (defined at: ./index.rsh:229:11:function exp)', 'at ./index.rsh:200:21:application call to "runstake0_106" (defined at: ./index.rsh:227:9:function exp)', 'at ./index.rsh:200:21:application call to [unknown function] (defined at: ./index.rsh:200:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v824 = v823[stdlib.checkedBigNumberify('./index.rsh:227:9:spread', stdlib.UInt_max, 0)];
  const v827 = ['stake0_106', v823];
  
  const txn1 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810, v827],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:230:21:decimal', stdlib.UInt_max, 0), [[v824, v758], [stdlib.checkedBigNumberify('./index.rsh:230:48:decimal', stdlib.UInt_max, 0), v759]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
      
      switch (v924[0]) {
        case 'claim0_106': {
          const v927 = v924[1];
          
          break;
          }
        case 'stake0_106': {
          const v1119 = v924[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v1131 = v1119[stdlib.checkedBigNumberify('./index.rsh:227:9:spread', stdlib.UInt_max, 0)];
          ;
          const v1175 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1177 = stdlib.add(v1176, v1131);
          const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1181 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v1182 = [v1177, v1180, v1181];
          const v1183 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1182);
          sim_r.txns.push({
            amt: v1131,
            kind: 'to',
            tok: v758
            });
          const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1185 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1189 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1190 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v1191 = [v1185, v1189, v1190];
          const v1192 = stdlib.Array_set(v1183, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1191);
          ;
          let v1235;
          const v1236 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
          if (v1236) {
            v1235 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1238 = stdlib.sub(v804, v801);
            const v1239 = stdlib.mul(v1238, v763);
            const v1240 = stdlib.div(v1239, v803);
            const v1241 = stdlib.add(v802, v1240);
            v1235 = v1241;
            }
          const v1242 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v923), null);
          const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
          const v1244 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v923), null);
          const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
          const v1246 = stdlib.sub(v1235, v1245);
          const v1247 = stdlib.mul(v1243, v1246);
          const v1248 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v923), null);
          const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
          const v1250 = stdlib.add(v1247, v1249);
          await stdlib.simMapSet(sim_r, 1, v923, v1250);
          await stdlib.simMapSet(sim_r, 2, v923, v1235);
          const v1255 = stdlib.add(v1243, v1131);
          await stdlib.simMapSet(sim_r, 0, v923, v1255);
          const v1256 = null;
          const v1257 = await txn1.getOutput('stake', 'v1256', ctc0, v1256);
          
          null;
          const v1262 = stdlib.add(v803, v1131);
          const v2239 = v804;
          const v2240 = v1235;
          const v2241 = v1262;
          const v2242 = v925;
          const v2243 = v1192;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_106': {
          const v1311 = v924[1];
          
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
  const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
  switch (v924[0]) {
    case 'claim0_106': {
      const v927 = v924[1];
      return;
      break;
      }
    case 'stake0_106': {
      const v1119 = v924[1];
      undefined /* setApiDetails */;
      const v1131 = v1119[stdlib.checkedBigNumberify('./index.rsh:227:9:spread', stdlib.UInt_max, 0)];
      ;
      const v1175 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1176 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1177 = stdlib.add(v1176, v1131);
      const v1180 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1181 = v1175[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v1182 = [v1177, v1180, v1181];
      const v1183 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1182);
      ;
      const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1185 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1189 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1190 = v1184[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v1191 = [v1185, v1189, v1190];
      const v1192 = stdlib.Array_set(v1183, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1191);
      ;
      let v1235;
      const v1236 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
      if (v1236) {
        v1235 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1238 = stdlib.sub(v804, v801);
        const v1239 = stdlib.mul(v1238, v763);
        const v1240 = stdlib.div(v1239, v803);
        const v1241 = stdlib.add(v802, v1240);
        v1235 = v1241;
        }
      const v1242 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
      const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
      const v1244 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
      const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
      const v1246 = stdlib.sub(v1235, v1245);
      const v1247 = stdlib.mul(v1243, v1246);
      const v1248 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
      const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
      const v1250 = stdlib.add(v1247, v1249);
      await stdlib.mapSet(map1, v923, v1250);
      await stdlib.mapSet(map2, v923, v1235);
      const v1255 = stdlib.add(v1243, v1131);
      await stdlib.mapSet(map0, v923, v1255);
      const v1256 = null;
      const v1257 = await txn1.getOutput('stake', 'v1256', ctc0, v1256);
      if (v448) {
        stdlib.protect(ctc0, await interact.out(v1119, v1257), {
          at: './index.rsh:228:7:application',
          fs: ['at ./index.rsh:228:7:application call to [unknown function] (defined at: ./index.rsh:228:7:function exp)', 'at ./index.rsh:235:10:application call to "k" (defined at: ./index.rsh:231:20:function exp)', 'at ./index.rsh:231:20:application call to [unknown function] (defined at: ./index.rsh:231:20:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      null;
      const v1262 = stdlib.add(v803, v1131);
      const v2239 = v804;
      const v2240 = v1235;
      const v2241 = v1262;
      const v2242 = v925;
      const v2243 = v1192;
      return;
      
      break;
      }
    case 'unstake0_106': {
      const v1311 = v924[1];
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
    claim0_106: ctc9,
    stake0_106: ctc8,
    unstake0_106: ctc8
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
  
  
  const [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]);
  const v829 = ctc.selfAddress();
  const v831 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:242:19:application call to [unknown function] (defined at: ./index.rsh:242:19:function exp)', 'at ./index.rsh:200:21:application call to "rununstake0_106" (defined at: ./index.rsh:240:9:function exp)', 'at ./index.rsh:200:21:application call to [unknown function] (defined at: ./index.rsh:200:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v832 = v831[stdlib.checkedBigNumberify('./index.rsh:240:9:spread', stdlib.UInt_max, 0)];
  const v834 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v829), null);
  const v835 = stdlib.fromSome(v834, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
  const v836 = stdlib.le(v832, v835);
  stdlib.assert(v836, {
    at: './index.rsh:243:15:application',
    fs: ['at ./index.rsh:242:19:application call to [unknown function] (defined at: ./index.rsh:242:19:function exp)', 'at ./index.rsh:242:19:application call to [unknown function] (defined at: ./index.rsh:242:19:function exp)', 'at ./index.rsh:200:21:application call to "rununstake0_106" (defined at: ./index.rsh:240:9:function exp)', 'at ./index.rsh:200:21:application call to [unknown function] (defined at: ./index.rsh:200:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v837 = v810[stdlib.checkedBigNumberify('./index.rsh:244:36:application', stdlib.UInt_max, 0)];
  const v838 = v837[stdlib.checkedBigNumberify('./index.rsh:244:36:application', stdlib.UInt_max, 0)];
  const v839 = stdlib.le(v832, v838);
  stdlib.assert(v839, {
    at: './index.rsh:244:15:application',
    fs: ['at ./index.rsh:242:19:application call to [unknown function] (defined at: ./index.rsh:242:19:function exp)', 'at ./index.rsh:242:19:application call to [unknown function] (defined at: ./index.rsh:242:19:function exp)', 'at ./index.rsh:200:21:application call to "rununstake0_106" (defined at: ./index.rsh:240:9:function exp)', 'at ./index.rsh:200:21:application call to [unknown function] (defined at: ./index.rsh:200:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v842 = ['unstake0_106', v831];
  
  const txn1 = await (ctc.sendrecv({
    args: [v757, v758, v759, v760, v761, v762, v763, v801, v802, v803, v804, v810, v842],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:246:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:246:19:decimal', stdlib.UInt_max, 0), v758], [stdlib.checkedBigNumberify('./index.rsh:246:36:decimal', stdlib.UInt_max, 0), v759]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
      
      switch (v924[0]) {
        case 'claim0_106': {
          const v927 = v924[1];
          
          break;
          }
        case 'stake0_106': {
          const v1119 = v924[1];
          
          break;
          }
        case 'unstake0_106': {
          const v1311 = v924[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v1367 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v1374 = [v1368, v1372, v1373];
          const v1375 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1374);
          ;
          const v1376 = v1375[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1377 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
          const v1381 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
          const v1382 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
          const v1383 = [v1377, v1381, v1382];
          const v1384 = stdlib.Array_set(v1375, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1383);
          ;
          const v1457 = v1311[stdlib.checkedBigNumberify('./index.rsh:240:9:spread', stdlib.UInt_max, 0)];
          const v1458 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v923), null);
          const v1459 = stdlib.fromSome(v1458, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
          const v1460 = stdlib.le(v1457, v1459);
          ;
          const v1461 = v1384[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
          const v1462 = v1461[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
          const v1463 = stdlib.le(v1457, v1462);
          ;
          let v1464;
          const v1465 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
          if (v1465) {
            v1464 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1467 = stdlib.sub(v804, v801);
            const v1468 = stdlib.mul(v1467, v763);
            const v1469 = stdlib.div(v1468, v803);
            const v1470 = stdlib.add(v802, v1469);
            v1464 = v1470;
            }
          const v1473 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v923), null);
          const v1474 = stdlib.fromSome(v1473, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
          const v1475 = stdlib.sub(v1464, v1474);
          const v1476 = stdlib.mul(v1459, v1475);
          const v1477 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v923), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
          const v1479 = stdlib.add(v1476, v1478);
          await stdlib.simMapSet(sim_r, 1, v923, v1479);
          await stdlib.simMapSet(sim_r, 2, v923, v1464);
          const v1482 = stdlib.sub(v1459, v1457);
          await stdlib.simMapSet(sim_r, 0, v923, v1482);
          const v1488 = stdlib.sub(v1462, v1457);
          const v1491 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 1)];
          const v1492 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 2)];
          const v1493 = [v1488, v1491, v1492];
          const v1494 = stdlib.Array_set(v1384, stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 0), v1493);
          sim_r.txns.push({
            amt: v1457,
            kind: 'from',
            to: v923,
            tok: v758
            });
          const v1495 = null;
          const v1496 = await txn1.getOutput('unstake', 'v1495', ctc0, v1495);
          
          null;
          const v1501 = stdlib.sub(v803, v1457);
          const v2303 = v804;
          const v2304 = v1464;
          const v2305 = v1501;
          const v2306 = v925;
          const v2307 = v1494;
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
  const {data: [v924], secs: v926, time: v925, didSend: v448, from: v923 } = txn1;
  switch (v924[0]) {
    case 'claim0_106': {
      const v927 = v924[1];
      return;
      break;
      }
    case 'stake0_106': {
      const v1119 = v924[1];
      return;
      break;
      }
    case 'unstake0_106': {
      const v1311 = v924[1];
      undefined /* setApiDetails */;
      ;
      const v1367 = v810[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1368 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1372 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1373 = v1367[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v1374 = [v1368, v1372, v1373];
      const v1375 = stdlib.Array_set(v810, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0), v1374);
      ;
      const v1376 = v1375[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1377 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 0)];
      const v1381 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1)];
      const v1382 = v1376[stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 2)];
      const v1383 = [v1377, v1381, v1382];
      const v1384 = stdlib.Array_set(v1375, stdlib.checkedBigNumberify('./index.rsh:200:21:dot', stdlib.UInt_max, 1), v1383);
      ;
      const v1457 = v1311[stdlib.checkedBigNumberify('./index.rsh:240:9:spread', stdlib.UInt_max, 0)];
      const v1458 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v923), null);
      const v1459 = stdlib.fromSome(v1458, stdlib.checkedBigNumberify('./index.rsh:140:46:decimal', stdlib.UInt_max, 0));
      const v1460 = stdlib.le(v1457, v1459);
      stdlib.assert(v1460, {
        at: './index.rsh:249:14:application',
        fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v1461 = v1384[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
      const v1462 = v1461[stdlib.checkedBigNumberify('./index.rsh:250:35:application', stdlib.UInt_max, 0)];
      const v1463 = stdlib.le(v1457, v1462);
      stdlib.assert(v1463, {
        at: './index.rsh:250:14:application',
        fs: ['at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v1464;
      const v1465 = stdlib.eq(v803, stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, 0));
      if (v1465) {
        v1464 = stdlib.checkedBigNumberify('./index.rsh:156:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1467 = stdlib.sub(v804, v801);
        const v1468 = stdlib.mul(v1467, v763);
        const v1469 = stdlib.div(v1468, v803);
        const v1470 = stdlib.add(v802, v1469);
        v1464 = v1470;
        }
      const v1473 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v923), null);
      const v1474 = stdlib.fromSome(v1473, stdlib.checkedBigNumberify('./index.rsh:147:70:decimal', stdlib.UInt_max, 0));
      const v1475 = stdlib.sub(v1464, v1474);
      const v1476 = stdlib.mul(v1459, v1475);
      const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v923), null);
      const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:143:46:decimal', stdlib.UInt_max, 0));
      const v1479 = stdlib.add(v1476, v1478);
      await stdlib.mapSet(map1, v923, v1479);
      await stdlib.mapSet(map2, v923, v1464);
      const v1482 = stdlib.sub(v1459, v1457);
      await stdlib.mapSet(map0, v923, v1482);
      const v1488 = stdlib.sub(v1462, v1457);
      const v1491 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 1)];
      const v1492 = v1461[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 2)];
      const v1493 = [v1488, v1491, v1492];
      const v1494 = stdlib.Array_set(v1384, stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, 0), v1493);
      ;
      const v1495 = null;
      const v1496 = await txn1.getOutput('unstake', 'v1495', ctc0, v1495);
      if (v448) {
        stdlib.protect(ctc0, await interact.out(v1311, v1496), {
          at: './index.rsh:241:7:application',
          fs: ['at ./index.rsh:241:7:application call to [unknown function] (defined at: ./index.rsh:241:7:function exp)', 'at ./index.rsh:257:10:application call to "k" (defined at: ./index.rsh:247:22:function exp)', 'at ./index.rsh:247:22:application call to [unknown function] (defined at: ./index.rsh:247:22:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      null;
      const v1501 = stdlib.sub(v803, v1457);
      const v2303 = v804;
      const v2304 = v1464;
      const v2305 = v1501;
      const v2306 = v925;
      const v2307 = v1494;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`claim()byte[0]`, `stake(uint64)byte[0]`, `unstake(uint64)byte[0]`],
    pure: [`global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`],
    sigs: [`claim()byte[0]`, `global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`, `stake(uint64)byte[0]`, `unstake(uint64)byte[0]`]
    },
  appApproval: `BiAYAAEHBgMIICgEMDhASFBYAqCNBhu89d/DC4+kr7YM2en9pw+6pcyCAr//kc4KBSYDAQABAQAiNQAxGEEKKipkSSJbNQEhBVs1AjEZIxJBAAoxACghEa9mQgn+NhoAF0lBAggiNQQjNQZJIRIMQAC+SSETDEAAK0khFAxAABIhFBJEKjX/KDT/UCEFr1BCAf8hExJENhoBNf+AAQI0/1BCAe0hEhJENAFJJQxAAFdJJAxAACskEkQoZClkUEk1A1cgCDQDVygIUDQDVzAIUDQDVzgIUDQDV0AIUDUHQglwSChkSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCCUohBBJEKGRJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0IJIUkhFQxAAH9JIRYMQAAQIRYSRDYaATX/KTT/UEIBQyEVEkQ0AUklDEAAP0kkDEAAHyQSRChkKWRQSTUDV2AINANXUAhQNANXWAhQNQdCCNJIKGRJNQNXWAg0A1dICFA0A1dQCFA1B0IIuCEEEkQoZEk1A1dYCDQDV0gIUDQDV1AIUDUHQgibgfrK7qUBEkQ0AUklDEAAcEkkDEAANiQSRDYaATX/IjT/iAieVwAJSTX+I1s0/iJVTRYiNP+ICIpXCQlJNf4jWzT+IlVNFlA1B0IIT0g2GgE1/yI0/4gIalcACUk1/iNbNP4iVU0WIjT/iAhWVwkJSTX+I1s0/iJVTRZQNQdCCBshBBJENhoBNf8iNP+ICDNXAAlJNf4jWzT+IlVNFiI0/4gIH1cJCUk1/iNbNP4iVU0WUDUHQgfkNhoCFzUENhoDNhoBF0khBAxABSFJIRcMQATDSSUMQARmJRJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpKVwAgNf8hBls1/iEHWzX9IQlbNfwhCls1+yELWzX6IQxbNfkhDVs1+CEOWzX3gWBbNfaBaFs19VdwIjX0STUFNfOABBQM5gg081CwNPMiVUkjDEACs0khDwxAAXYhDxJENPNXAQg18jT0VwARSTXxVwAINPFXCAhQNPFXEAFQNPRXERFQNfA08FcRETXvNPBXABE071cACDTvVwgIUDTvVxABUFA17jTyFzXtIjEAiAcYVwAJSTXrI1s06yJVTTXsNO007A5ENO5XABFJNesiWzXqNO006g5ENPYiEkEABiI16UIAEDT3NPU0+Ak0+Qs09goINekxACgxAIgGzCk07DTpIjEAiAbBVxIJSTXoI1s06CJVTQkLIjEAiAasVwkJSTXoI1s06CJVTQgWUDXoSVcACTToUExXEglQZjEAKDEAiAaFKTTpFlA16FcAEjToUGYxACgxAIgGbyk07DTtCRZQNehXCRI06ExQZrEisgE07bISIQiyEDEAshQ0/rIRs4AIAAAAAAAABdewKjUHgATRaXMpMQBQNO0WULA0/zT+NP00/DT7NPo0+SM09TTpNPY07QkyBjTqNO0JFjTrVwgIUDTrVxABUDTuVxERUEIEwEg081cBCDXyNPIXNfE09FcAEUk18CJbNPEIFjTwVwgIUDTwVxABUDT0VxERUDXvNPE0/ogF6DTvVxERNe409iISQQAGIjXtQgAQNPc09TT4CTT5CzT2Cgg17SIxAIgFl1cACUk16yNbNOsiVU017DEAKDEAiAWAKTTsNO0iMQCIBXVXEglJNesjWzTrIlVNCQsiMQCIBWBXCQlJNesjWzTrIlVNCBZQNetJVwAJNOtQTFcSCVBmMQAoMQCIBTkpNO0WUDXrVwASNOtQZjEAKDEAiAUjKTTsNPEIFlA161cJEjTrTFBmgAgAAAAAAAAE6LAqNQeABDGPpQ4xAFA08RZQsDT/NP40/TT8NPs0+jT5IzT1NO009jTxCDIGNO9XABE07lcACDTuVwgIUDTuVxABUFBCA4pINPRXABFJNfJXAAg08lcICFA08lcQAVA09FcREVA18TTxVxERNfA08VcAETTwVwAINPBXCAhQNPBXEAFQUDXvNPYiEkEABiI17kIAEDT3NPU0+Ak0+Qs09goINe4xACgxAIgEXCkiMQCIBFVXAAlJNe0jWzTtIlVNNO4iMQCIBEBXEglJNe0jWzTtIlVNCQsiMQCIBCtXCQlJNe0jWzTtIlVNCBZQNe1JVwAJNO1QTFcSCVBmMQAoMQCIBAQpNO4WUDXtVwASNO1QZjEAKDEAiAPugAkBAAAAAAAAAAA17UlXAAk07VBMVxIJUGY071cRETXtgAgAAAAAAAAECrAqNQeABOUi8dcxAFCwNP80/jT9NPw0+zT6NPkjNPU07jT2MgY071cAETTtVwAINO1XCAhQNO1XEAFQUEICTUglNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQZbNAMhB1s0AyEJWzQDIQpbNAMhC1s0AyEMWzQDIQ1bNAMhDlsyBkICkEkhCAxAAAFISCEENAESRDQESSISTDQCEhFEKGQ1A4AEp2XEtLA0A1cAIDQDIQZbNAMhB1s0AyEJWzQDIQpbNAMhC1s0AyEMWzQDIQ1bNAMhDlsyBkICOUkjDEAAkEkhDwxAAAFISCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hB1s1/iELWzX9V1giNfyABJqLkXSwNPxXERE1+zT9NP6IAq40/zEAEkQ0/zQDIQZbNP40AyEJWzQDIQpbNP00AyEMWyM0AyENWyIiMgY0/FcAETT7Ils0/QgWNPtXCAhQNPtXEAFQUEIBCUgiNAESRDQESSISTDQCEhFESTUFSUpKIls1/yEFWzX+gRBbNf2BGFs1/CEGWzX7IQdbNfqABIrBjIg0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlCwIRCIAfeBEa9JNflJUDX4NP80/hNENPhXABE19yEFrzT3VwgIUDT3VxABUDT4VxERUDX2IRCIAcSxIrIBIrISIQiyEDIKshQ0/7IRszT2VxERNfU09lcAESEFrzT1VwgIUDT1VxABUFA19CEQiAGNsSKyASKyEiEIshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDIGFlA09FAoSwFXAHpnSCM1ATIGNQJCAP01/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zT6QQBGNPM09BZQNPUWUDT2FlA09xZQNPgWUDT5FlA0+xZQNPwWUDT9FlA0/hZQNP9QKEsBVwB/ZylLAVd/E2dIJDUBMgY1AkIAmDTzNPQWUDT1FlA09hZQNPcWUDT4FlA0+xZQNPwWUDT9FlAoSwFXAGBnSCEENQEyBjUCQgBjNf81/jX9Nfw1+zX6Nfk1+DX3STX2NPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDT+FlAoSwFXAGBnSCU1ATIGNQJCABwxGSEXEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/y0kxGGFAAAVIIRGviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQgSRDgRTwISRDgSEkSJ`,
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
                "name": "v758",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v759",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v760",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v761",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v762",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v763",
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
                "name": "v758",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v759",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v760",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v761",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v762",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v763",
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
                    "name": "_claim0_106",
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
                    "name": "_stake0_106",
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
                    "name": "_unstake0_106",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v924",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1034",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1256",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1495",
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
                    "name": "_claim0_106",
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
                    "name": "_stake0_106",
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
                    "name": "_unstake0_106",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T20",
                "name": "v924",
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
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "name": "v2324",
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
    "name": "stake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
  Bytecode: `0x608060405260405162003dd438038062003dd483398101604081905262000026916200059e565b60008055436003556200003862000325565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a62000278565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e9290620002a2565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a49190600190620002a2565b60a0820152620001b73415600b62000278565b620001c1620003bd565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501524360e0850181905291850151610100850152600160008190559190915551620002489183910162000697565b604051602081830303815290604052600290805190602001906200026e92919062000426565b505050506200077c565b816200029e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002ac620004b5565b60005b60028110156200030257848160028110620002ce57620002ce6200063b565b6020020151828260028110620002e857620002e86200063b565b602002015280620002f98162000715565b915050620002af565b50818184600281106200031957620003196200063b565b60200201529392505050565b604080516101208101909152600060c0820181815260e083018290526101008301919091528152602081016200035a620004b5565b8152604080516060810182526000808252602082810182905292820152910190815260200162000389620004b5565b81526040805160608101825260008082526020828101829052928201529101908152602001620003b8620004b5565b905290565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001620003b8620004b5565b82805462000434906200073f565b90600052602060002090601f016020900481019282620004585760008555620004a3565b82601f106200047357805160ff1916838001178555620004a3565b82800160010185558215620004a3579182015b82811115620004a357825182559160200191906001019062000486565b50620004b192915062000502565b5090565b60405180604001604052806002905b620004eb604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004c45790505090565b5b80821115620004b1576000815560010162000503565b604080519081016001600160401b03811182821017156200054a57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200054a57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200059957600080fd5b919050565b600081830360e0811215620005b257600080fd5b620005bc62000519565b8351815260c0601f1983011215620005d357600080fd5b620005dd62000550565b9150620005ed6020850162000581565b8252620005fd6040850162000581565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60028110156200069157815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000655565b50505050565b81516001600160a01b039081168252602080840151821690830152604080840151918216908301526101c082019050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516200070d8285018262000651565b505092915050565b60006000198214156200073857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200075457607f821691505b602082108114156200077657634e487b7160e01b600052602260045260246000fd5b50919050565b613648806200078c6000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063a694fc3a11610056578063a694fc3a14610263578063ab53f2c614610276578063bb806dc914610299578063cadc2e7a146102f957005b806383230757146101f15780638e31476914610206578063a05f990614610219578063a35ec98f1461025057005b80633bc5b7bf116100bd5780633bc5b7bf146101895780634e71d92d146101b657806373b4522c146101be578063817d57f3146101d157005b80630ff1680e146100f45780631e93b0f1146101345780632c10a159146101535780632e17de781461016657005b366100f257005b005b34801561010057600080fd5b5061011461010f366004612da2565b610319565b604080518251815260209283015192810192909252015b60405180910390f35b34801561014057600080fd5b506003545b60405190815260200161012b565b6100f2610161366004612dbf565b61060a565b610179610174366004612dd7565b610643565b604051901515815260200161012b565b34801561019557600080fd5b506101a96101a4366004612da2565b6106ad565b60405161012b9190612e06565b6101796106d9565b6100f26101cc366004612dbf565b610735565b3480156101dd57600080fd5b506101a96101ec366004612da2565b61076a565b3480156101fd57600080fd5b50600154610145565b6100f2610214366004612dbf565b610790565b34801561022557600080fd5b5061022e6107c5565b604080518251815260208084015190820152918101519082015260600161012b565b6100f261025e366004612e3d565b610ac2565b610179610271366004612dd7565b610af7565b34801561028257600080fd5b5061028b610b60565b60405161012b929190612e7b565b3480156102a557600080fd5b506102ae610bfd565b60405161012b919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b34801561030557600080fd5b506101a9610314366004612da2565b610e9d565b6040805180820190915260008082526020820152600160005414156103e85760006002805461034790612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461037390612eb5565b80156103c05780601f10610395576101008083540402835291602001916103c0565b820191906000526020600020905b8154815290600101906020018083116103a357829003601f168201915b50505050508060200190518101906103d8919061307c565b90506103e660006009610ec3565b505b600360005414156105345760006002805461040290612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90612eb5565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050508060200190518101906104939190613110565b90506104b5604080516060810182526000602082018181529282015290815290565b60016104c085610ee9565b5160018111156104d2576104d2612df0565b146104de5760006104ec565b6104e784610ee9565b604001515b81515260016104fa85610fbb565b51600181111561050c5761050c612df0565b14610518576000610526565b61052184610fbb565b604001515b815160200152519392505050565b6006600054141561054e5760006002805461040290612eb5565b600760005414156105f95760006002805461056890612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461059490612eb5565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b505050505080602001905181019061049391906131a0565b61060560006009610ec3565b919050565b604080516060810182526000808252602082018190529181019190915261063f6106393684900384018461324d565b82611048565b5050565b604080516060810182526000808252602082018190529181018290526106676128b2565b61066f6128cc565b604080516020808201835287825260608401919091526002835281518082019092528282528301526106a182846112cb565b50506040015192915050565b60408051606081018252600080825260208201819052918101919091526106d382610ee9565b92915050565b604080516060810182526000808252602082018190529181018290526106fd6128b2565b6107056128cc565b60006020828101829052908252604080518083019091528281529083015261072d82846112cb565b505051919050565b604080516060810182526000808252602082018190529181019190915261063f6107643684900384018461324d565b826120a8565b60408051606081018252600080825260208201819052918101919091526106d382612254565b604080516060810182526000808252602082018190529181019190915261063f6107bf3684900384018461324d565b826122e1565b6107e960405180606001604052806000815260200160008152602001600081525090565b600160005414156108a45760006002805461080390612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461082f90612eb5565b801561087c5780601f106108515761010080835404028352916020019161087c565b820191906000526020600020905b81548152906001019060200180831161085f57829003601f168201915b5050505050806020019051810190610894919061307c565b90506108a260006007610ec3565b505b6003600054141561099e576000600280546108be90612eb5565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea90612eb5565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b505050505080602001905181019061094f9190613110565b905061097860408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b600660005414156109b8576000600280546108be90612eb5565b60076000541415610ab3576000600280546109d290612eb5565b80601f01602080910402602001604051908101604052809291908181526020018280546109fe90612eb5565b8015610a4b5780601f10610a2057610100808354040283529160200191610a4b565b820191906000526020600020905b815481529060010190602001808311610a2e57829003601f168201915b5050505050806020019051810190610a6391906131a0565b9050610a8c60408051608081018252600060208201818152928201819052606082015290815290565b61012082015181515260e08201518151602001526101009091015181516040015251919050565b610abf60006007610ec3565b90565b604080516060810182526000808252602082018190529181019190915261063f610af1368490038401846132c7565b826112cb565b60408051606081018252600080825260208201819052918101829052610b1b6128b2565b610b236128cc565b604080516020808201835287825283830191909152600183528151808201909252828252830152610b5482846112cb565b50506020015192915050565b600060606000546002808054610b7590612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba190612eb5565b8015610bee5780601f10610bc357610100808354040283529160200191610bee565b820191906000526020600020905b815481529060010190602001808311610bd157829003601f168201915b50505050509050915091509091565b610c0561290e565b60016000541415610cc057600060028054610c1f90612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4b90612eb5565b8015610c985780601f10610c6d57610100808354040283529160200191610c98565b820191906000526020600020905b815481529060010190602001808311610c7b57829003601f168201915b5050505050806020019051810190610cb0919061307c565b9050610cbe60006008610ec3565b505b60036000541415610dcc57600060028054610cda90612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0690612eb5565b8015610d535780601f10610d2857610100808354040283529160200191610d53565b820191906000526020600020905b815481529060010190602001808311610d3657829003601f168201915b5050505050806020019051810190610d6b9190613110565b9050610d7561294f565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60066000541415610de657600060028054610cda90612eb5565b60076000541415610e9157600060028054610e0090612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2c90612eb5565b8015610e795780601f10610e4e57610100808354040283529160200191610e79565b820191906000526020600020905b815481529060010190602001808311610e5c57829003601f168201915b5050505050806020019051810190610d6b91906131a0565b610abf60006008610ec3565b60408051606081018252600080825260208201819052918101919091526106d382610fbb565b8161063f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610f3557610f35612df0565b1415610fac576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610f7657610f76612df0565b6001811115610f8757610f87612df0565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561100757611007612df0565b1415610fac576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f7657610f76612df0565b611058600160005414600f610ec3565b815161107390158061106c57508251600154145b6010610ec3565b60008080556002805461108590612eb5565b80601f01602080910402602001604051908101604052809291908181526020018280546110b190612eb5565b80156110fe5780601f106110d3576101008083540402835291602001916110fe565b820191906000526020600020905b8154815290600101906020018083116110e157829003601f168201915b5050505050806020019051810190611116919061307c565b905061113f60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161118a3415600c610ec3565b60a082015161010083015160200151516111a49190613392565b8151526101008201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516111ee916111e791339190612415565b600d610ec3565b8151611206906001600160a01b03163314600e610ec3565b61120e612962565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c080880151865190910152828501805160019081905260e0890151825190950194909452805160009501859052805190920193909352514392019190915261010084015183516112b2929061242d565b602082015160a001526112c4816124a1565b5050505050565b6112db6007600054146023610ec3565b81516112f69015806112ef57508251600154145b6024610ec3565b60008080556002805461130890612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461133490612eb5565b80156113815780601f1061135657610100808354040283529160200191611381565b820191906000526020600020905b81548152906001019060200180831161136457829003601f168201915b505050505080602001905181019061139991906131a0565b90506113a36129b0565b7f20772988ca2b4096ff9db75514825a300d210421364cc56aceeae94e923b5991846040516113d291906133aa565b60405180910390a160006020850151515160028111156113f4576113f4612df0565b14156117bc5761140634156018610ec3565b6101608201805151518251528051516020908101518351909101528051516040908101518351901515910152518151611442919060009061242d565b816020018190525061146461145d3384602001516000612415565b6019610ec3565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516114ab919060019061242d565b81606001819052506114cd6114c63384604001516000612415565b601a610ec3565b6101208201516114e3576000608082015261152d565b8161012001518260c001518360e0015184610140015161150391906133fc565b61150d9190613413565b6115179190613432565b8261010001516115279190613392565b60808201525b336000818152600560205260409020805460ff191660019081179091559061155490610fbb565b51600181111561156657611566612df0565b14611572576000611580565b61157b33610fbb565b604001515b600161158b33612254565b51600181111561159d5761159d612df0565b146115a95760006115b7565b6115b233612254565b604001515b82608001516115c691906133fc565b60016115d133610ee9565b5160018111156115e3576115e3612df0565b146115ef5760006115fd565b6115f833610ee9565b604001515b6116079190613413565b6116119190613392565b336000908152600560208181526040808420600180820196875560068452828620805460ff199081168317825560808a0151918301919091559484528154909416909317909255928290556060840180518401515160a08601805191909152815185015185015181518601529051840151820151905190151590820152519081527f84310b976de40080e927b2ce62df22f1ecf4736ba63c85db727dfd2894b172f1910160405180910390a1600083526040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a16116fc612962565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c08089015187519091015283860180516001908190526101408a0151825190960195909552878301518151909601959095526101208801518551840152935143910152840151918401516117a492919061242d565b602082015160a001526117b6816124a1565b506120a2565b60016020850151515160028111156117d6576117d6612df0565b1415611be3576020840151516040015160c08201526117f73415601b610ec3565b60c081015151610160830151515161180f9190613392565b60e082018051919091526101608301805151602090810151835190910152805151604090810151835190151591015251905161184e919060009061242d565b610100820152602082015160c0820151516118769161186f91339190612415565b601c610ec3565b6101008101805160209081015151610120840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516118cd906118c69033906000612415565b601d610ec3565b6101208201516118e457600061014082015261192f565b8161012001518260c001518360e0015184610140015161190491906133fc565b61190e9190613413565b6119189190613432565b8261010001516119289190613392565b6101408201525b600161193a33610ee9565b51600181111561194c5761194c612df0565b14611958576000611966565b61196133610ee9565b604001515b610160820152336000818152600560205260409020805460ff191660019081179091559061199390610fbb565b5160018111156119a5576119a5612df0565b146119b15760006119bf565b6119ba33610fbb565b604001515b60016119ca33612254565b5160018111156119dc576119dc612df0565b146119e85760006119f6565b6119f133612254565b604001515b826101400151611a0691906133fc565b826101600151611a169190613413565b611a209190613392565b33600090815260056020908152604080832060019081019490945560068252808320805460ff19908116861782556101408701519186019190915560049092529091208054909116909117905560c081015151610160820151611a839190613392565b3360009081526004602090815260408083206001019390935591519081527f1286b290dd8daa18f63be16959ad0157b5dc32e0bd8c0aa66a79120a6f75dad0910160405180910390a1600060208481019190915260c08201515160408051338152928301919091527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a1611b1e612962565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c0808601518451820152818401805160019052610140808801518251909401939093529185015191519092015282015151610120840151611bb59190613392565b6020820180516060019190915251436080909101526101008201516101208301516117a4919060019061242d565b6002602085015151516002811115611bfd57611bfd612df0565b14156120a25760208401515160600151610180820152611c1f3415601e610ec3565b6101608201805151516101a08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051611c64919060009061242d565b816101c00181905250611c87611c803384602001516000612415565b601f610ec3565b6101c081018051602090810151516101e0840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611cd2919060019061242d565b816102000181905250611cf5611cee3384604001516000612415565b6020610ec3565b6001611d0033610ee9565b516001811115611d1257611d12612df0565b14611d1e576000611d2c565b611d2733610ee9565b604001515b610220820181905261018082015151611d489110156021610ec3565b610200810151515161018082015151611d649110156022610ec3565b610120820151611d7b576000610240820152611dc6565b8161012001518260c001518360e00151846101400151611d9b91906133fc565b611da59190613413565b611daf9190613432565b826101000151611dbf9190613392565b6102408201525b336000818152600560205260409020805460ff1916600190811790915590611ded90610fbb565b516001811115611dff57611dff612df0565b14611e0b576000611e19565b611e1433610fbb565b604001515b6001611e2433612254565b516001811115611e3657611e36612df0565b14611e42576000611e50565b611e4b33612254565b604001515b826102400151611e6091906133fc565b826102200151611e709190613413565b611e7a9190613392565b33600090815260056020908152604080832060019081019490945560068252808320805460ff19908116861782556102408701519186019190915560049092529091208054909116909117905561018081015151610220820151611ede91906133fc565b33600090815260046020526040902060010155610180810151516102008201515151611f0a91906133fc565b610260820180519190915261020082018051516020908101518351820152905151604090810151925192151592019190915282015161018082015151611f529190339061261e565b604051600081527fcff89d4bfdd347bc487d4429dfa36acd74f4090b7aa100733a7de6cc871400ad9060200160405180910390a1600060408481019190915261018082015151815133815260208101919091527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a1611fd8612962565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c0808601518451909101528083018051600190526101408601518151909201919091526102408401519051909101526101808201515161012084015161207491906133fc565b6020820180516060019190915251436080909101526102008201516102608301516117a4919060009061242d565b50505050565b6120b86003600054146012610ec3565b81516120d39015806120cc57508251600154145b6013610ec3565b6000808055600280546120e590612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461211190612eb5565b801561215e5780601f106121335761010080835404028352916020019161215e565b820191906000526020600020905b81548152906001019060200180831161214157829003601f168201915b50505050508060200190518101906121769190613110565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a16121c434156011610ec3565b6121cc612b68565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451931692019190915260608084015183519091015260808084015183519091015260a08084015183519091015260c08084015183519091015260e080840151835190910152610100808401518351909101528101514390526120a281612632565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156122a0576122a0612df0565b1415610fac576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610f7657610f76612df0565b6122f16006600054146016610ec3565b815161230c90158061230557508251600154145b6017610ec3565b60008080556002805461231e90612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461234a90612eb5565b80156123975780601f1061236c57610100808354040283529160200191612397565b820191906000526020600020905b81548152906001019060200180831161237a57829003601f168201915b50505050508060200190518101906123af9190613110565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a16123fd34156014610ec3565b80516121c4906001600160a01b031633146015610ec3565b6000612423838530856126c7565b90505b9392505050565b612435612b7b565b60005b60028110156124815784816002811061245357612453613366565b602002015182826002811061246a5761246a613366565b60200201528061247981613454565b915050612438565b508181846002811061249557612495613366565b60200201529392505050565b6020810151511561258b576124b4612bc6565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015181870152865160c09081015190870152838701805185015160e08801528051860151610100880152805190930151610120870152825190910151610140860152905101516101608401526007600055436001559051612562918391016134ad565b60405160208183030381529060405260029080519060200190612586929190612c42565b505050565b612593612cc6565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015190850152818501805183015160c0860152805184015160e0860152510151610100840152600360005543600155905161256291839101613566565b50565b6126298383836127a1565b61258657600080fd5b61263a612cc6565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152835160809081015190840152835160a09081015190840152835160c09081015190840152835160e0908101519084015283516101009081015190840152600660005543600155905161256291839101613566565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161272e916135d9565b60006040518083038185875af1925050503d806000811461276b576040519150601f19603f3d011682016040523d82523d6000602084013e612770565b606091505b509150915061278182826001612872565b508080602001905181019061279691906135f5565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612800916135d9565b60006040518083038185875af1925050503d806000811461283d576040519150601f19603f3d011682016040523d82523d6000602084013e612842565b606091505b509150915061285382826002612872565b508080602001905181019061286891906135f5565b9695505050505050565b60608315612881575081612426565b8251156128915782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ee0565b905290565b6040518060400160405280600081526020016128ad612d2d565b60408051608081018252600080825260208083018290528351908101845290815290918201905b81526020016128ad6040518060200160405280600081525090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b60405180602001604052806128ad61290e565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252908152602081016128ad612d40565b604080516102e08101909152600061028082018181526102a083018290526102c08301919091528152602081016129e5612b7b565b81526040805160608101825260008082526020828101829052928201529101908152602001612a12612b7b565b815260200160008152602001612a44604051806060016040528060008152602001600081526020016000151581525090565b8152602001612a5f6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612a8c612b7b565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001612ad56040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612b02612b7b565b81526040805160608101825260008082526020828101829052928201529101908152602001612b2f612b7b565b815260200160008152602001600081526020016128ad604051806060016040528060008152602001600081526020016000151581525090565b60405180604001604052806128f3612cc6565b60405180604001604052806002905b612bb0604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612b8a5790505090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016128ad612b7b565b828054612c4e90612eb5565b90600052602060002090601f016020900481019282612c705760008555612cb6565b82601f10612c8957805160ff1916838001178555612cb6565b82800160010185558215612cb6579182015b82811115612cb6578251825591602001919060010190612c9b565b50612cc2929150612d78565b5090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180602001604052806128ad6128cc565b6040518060c00160405280600015158152602001600081526020016000815260200160008152602001600081526020016128ad612b7b565b5b80821115612cc25760008155600101612d79565b6001600160a01b038116811461261b57600080fd5b600060208284031215612db457600080fd5b813561242681612d8d565b600060408284031215612dd157600080fd5b50919050565b600060208284031215612de957600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612e1d57612e1d612df0565b808352506020830151151560208301526040830151604083015292915050565b600060a08284031215612dd157600080fd5b60005b83811015612e6a578181015183820152602001612e52565b838111156120a25750506000910152565b8281526040602082015260008251806040840152612ea0816060850160208701612e4f565b601f01601f1916919091016060019392505050565b600181811c90821680612ec957607f821691505b60208210811415612dd157634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612f2357612f23612eea565b60405290565b6040516060810167ffffffffffffffff81118282101715612f2357612f23612eea565b604051610120810167ffffffffffffffff81118282101715612f2357612f23612eea565b604051610180810167ffffffffffffffff81118282101715612f2357612f23612eea565b6040516020810167ffffffffffffffff81118282101715612f2357612f23612eea565b6040516080810167ffffffffffffffff81118282101715612f2357612f23612eea565b805161060581612d8d565b801515811461261b57600080fd5b600082601f83011261300457600080fd5b61300c612f00565b8060c084018581111561301e57600080fd5b845b8181101561307157606081880312156130395760008081fd5b613041612f29565b815181526020808301518183015260408084015161305e81612fe5565b9083015290855290930192606001613020565b509095945050505050565b60006101c0828403121561308f57600080fd5b613097612f4c565b6130a083612fda565b81526130ae60208401612fda565b60208201526130bf60408401612fda565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010061310585828601612ff3565b908201529392505050565b6000610120828403121561312357600080fd5b61312b612f4c565b61313483612fda565b815261314260208401612fda565b602082015261315360408401612fda565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600061022082840312156131b357600080fd5b6131bb612f70565b6131c483612fda565b81526131d260208401612fda565b60208201526131e360408401612fda565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012080840151818301525061014080840151818301525061016061310585828601612ff3565b60006040828403121561325f57600080fd5b613267612f00565b82358152602083013561327981612fe5565b60208201529392505050565b60006020828403121561329757600080fd5b6040516020810181811067ffffffffffffffff821117156132ba576132ba612eea565b6040529135825250919050565b600081830360a08112156132da57600080fd5b6132e2612f00565b833581526080601f19830112156132f857600080fd5b613300612f94565b915061330a612fb7565b60208501356003811061331c57600080fd5b8152604085013561332c81612fe5565b602082015261333e8660608701613285565b60408201526133508660808701613285565b6060820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156133a5576133a561337c565b500190565b81518152602082015151805160a083019190600381106133cc576133cc612df0565b80602085015250602081015115156040840152604081015151606084015260608101515160808401525092915050565b60008282101561340e5761340e61337c565b500390565b600081600019048311821515161561342d5761342d61337c565b500290565b60008261344f57634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156134685761346861337c565b5060010190565b8060005b60028110156120a2578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613473565b81516001600160a01b03168152610220810160208301516134d960208401826001600160a01b03169052565b5060408301516134f460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015161355e8285018261346f565b505092915050565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b600082516135eb818460208701612e4f565b9190910192915050565b60006020828403121561360757600080fd5b815161242681612fe556fea264697066735822122060fb109a1aa813f2a4356f5628e467c21ed829929061a38368d149525eefe48564736f6c634300080c0033`,
  BytecodeLen: 15828,
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
    at: './index.rsh:131:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:275:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:280:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:279:28:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:200:21:after expr stmt semicolon',
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
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  stake: stake,
  unstake: unstake
  };

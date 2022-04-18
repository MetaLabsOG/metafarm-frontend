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
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1119] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1139, v1140, v1142, v1149, v1150] = svs;
            return (await ((async () => {
              
              const v2309 = {
                lastUpdateBlock: v1139,
                rewardPerTokenStored: v1140,
                totalStaked: v1142
                };
              
              return v2309;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = svs;
            return (await ((async () => {
              
              const v1169 = {
                lastUpdateBlock: v1139,
                rewardPerTokenStored: v1140,
                totalStaked: v1142
                };
              
              return v1169;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1119] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1139, v1140, v1142, v1149, v1150] = svs;
            return (await ((async () => {
              
              const v2308 = {
                beginBlock: v1099,
                endBlock: v1100,
                rewardToken: v1098,
                stakeToken: v1097,
                totalRewardAmount: v1101
                };
              
              return v2308;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = svs;
            return (await ((async () => {
              
              const v1168 = {
                beginBlock: v1099,
                endBlock: v1100,
                rewardToken: v1098,
                stakeToken: v1097,
                totalRewardAmount: v1101
                };
              
              return v1168;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1119] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1139, v1140, v1142, v1149, v1150] = svs;
            return (await ((async (_v2310 ) => {
                const v2310 = stdlib.protect(ctc0, _v2310, null);
              
              const v2311 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2310), null);
              const v2312 = stdlib.fromSome(v2311, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
              const v2313 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2310), null);
              const v2314 = stdlib.fromSome(v2313, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
              const v2315 = {
                reward: v2314,
                staked: v2312
                };
              
              return v2315;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = svs;
            return (await ((async (_v1170 ) => {
                const v1170 = stdlib.protect(ctc0, _v1170, null);
              
              const v1171 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1170), null);
              const v1172 = stdlib.fromSome(v1171, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
              const v1173 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1170), null);
              const v1174 = stdlib.fromSome(v1173, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
              const v1175 = {
                reward: v1174,
                staked: v1172
                };
              
              return v1175;}))(...args));
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
    claim0_134: ctc5,
    setTime0_134: ctc6,
    stake0_134: ctc6,
    unstake0_134: ctc6
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
  
  
  const v1078 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1079 = [v1078, v1078];
  const v1085 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:121:38:application',
    fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v1086 = v1085.stakeToken;
  const v1087 = v1085.rewardToken;
  const v1088 = v1085.beginBlock;
  const v1089 = v1085.endBlock;
  const v1090 = v1085.rewardPerBlock;
  const v1091 = stdlib.tokenEq(v1086, v1087);
  const v1092 = v1091 ? false : true;
  stdlib.assert(v1092, {
    at: './index.rsh:123:11:application',
    fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1093 = stdlib.lt(v1088, v1089);
  stdlib.assert(v1093, {
    at: './index.rsh:125:11:application',
    fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v1094 = stdlib.sub(v1089, v1088);
  const v1095 = stdlib.mul(v1094, v1090);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1086, v1087, v1088, v1089, v1095, v1090],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1097, v1098, v1099, v1100, v1101, v1102], secs: v1104, time: v1103, didSend: v46, from: v1096 } = txn1;
      
      const v1105 = stdlib.tokenEq(v1097, v1098);
      const v1106 = v1105 ? false : true;
      ;
      const v1107 = v1079[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0')];
      const v1109 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
      const v1110 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
      const v1111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1109, v1110];
      const v1112 = stdlib.Array_set(v1079, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0'), v1111);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1097
        });
      const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
      const v1116 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
      const v1117 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
      const v1118 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1116, v1117];
      const v1119 = stdlib.Array_set(v1112, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1'), v1118);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1098
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
  const {data: [v1097, v1098, v1099, v1100, v1101, v1102], secs: v1104, time: v1103, didSend: v46, from: v1096 } = txn1;
  const v1105 = stdlib.tokenEq(v1097, v1098);
  const v1106 = v1105 ? false : true;
  stdlib.assert(v1106, {
    at: './index.rsh:137:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v1107 = v1079[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0')];
  const v1109 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1110 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
  const v1111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1109, v1110];
  const v1112 = stdlib.Array_set(v1079, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0'), v1111);
  ;
  const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1116 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1117 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
  const v1118 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1116, v1117];
  const v1119 = stdlib.Array_set(v1112, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1'), v1118);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1119],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1103,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0'), [[v1101, v1098]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v1123, time: v1122, didSend: v53, from: v1121 } = txn2;
      
      ;
      const v1124 = v1119[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
      const v1125 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
      const v1126 = stdlib.add(v1125, v1101);
      const v1129 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
      const v1130 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
      const v1131 = [v1126, v1129, v1130];
      const v1132 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1131);
      sim_r.txns.push({
        amt: v1101,
        kind: 'to',
        tok: v1098
        });
      const v1133 = stdlib.addressEq(v1096, v1121);
      ;
      
      const v1138 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
      const v1139 = stdlib.checkedBigNumberify('./index.rsh:178:5:decimal', stdlib.UInt_max, '0');
      const v1140 = stdlib.checkedBigNumberify('./index.rsh:179:5:decimal', stdlib.UInt_max, '0');
      const v1142 = stdlib.checkedBigNumberify('./index.rsh:177:5:decimal', stdlib.UInt_max, '0');
      const v1143 = v1122;
      const v1149 = v1132;
      const v1150 = stdlib.checkedBigNumberify('./index.rsh:111:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1163 = stdlib.lt(v1138, v1100);
        
        return v1163;})()) {
        const v1166 = stdlib.lt(v1138, v1100);
        const v1167 = v1166 ? v1138 : v1100;
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
  const {data: [], secs: v1123, time: v1122, didSend: v53, from: v1121 } = txn2;
  ;
  const v1124 = v1119[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1125 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
  const v1126 = stdlib.add(v1125, v1101);
  const v1129 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1130 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1131 = [v1126, v1129, v1130];
  const v1132 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1131);
  ;
  const v1133 = stdlib.addressEq(v1096, v1121);
  stdlib.assert(v1133, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:155:22:application',
    fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v1138 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
  let v1139 = stdlib.checkedBigNumberify('./index.rsh:178:5:decimal', stdlib.UInt_max, '0');
  let v1140 = stdlib.checkedBigNumberify('./index.rsh:179:5:decimal', stdlib.UInt_max, '0');
  let v1142 = stdlib.checkedBigNumberify('./index.rsh:177:5:decimal', stdlib.UInt_max, '0');
  let v1143 = v1122;
  let v1149 = v1132;
  let v1150 = stdlib.checkedBigNumberify('./index.rsh:111:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1163 = stdlib.lt(v1138, v1100);
    
    return v1163;})()) {
    const v1166 = stdlib.lt(v1138, v1100);
    const v1167 = v1166 ? v1138 : v1100;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn3;
    switch (v1327[0]) {
      case 'claim0_134': {
        const v1330 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v1400 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1401 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1405 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1406 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1407 = [v1401, v1405, v1406];
        const v1408 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1407);
        ;
        const v1409 = v1408[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1410 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1414 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1415 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1416 = [v1410, v1414, v1415];
        const v1417 = stdlib.Array_set(v1408, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1416);
        ;
        const v1419 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1420 = stdlib.fromSome(v1419, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
        const v1422 = v1421[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
        const v1423 = stdlib.lt(v1420, v1422);
        stdlib.assert(v1423, {
          at: './index.rsh:293:14:application',
          fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v1424;
        const v1425 = stdlib.sub(v1167, v1139);
        const v1426 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v1426) {
          v1424 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1427 = stdlib.mul(v1425, v1102);
          const v1428 = stdlib.div(v1427, v1142);
          const v1429 = stdlib.add(v1140, v1428);
          v1424 = v1429;
          }
        const v1430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1431 = stdlib.fromSome(v1430, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1432 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v1433 = stdlib.fromSome(v1432, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v1434 = stdlib.sub(v1424, v1433);
        const v1435 = stdlib.mul(v1431, v1434);
        const v1438 = stdlib.add(v1435, v1420);
        await stdlib.mapSet(map1, v1326, v1438);
        await stdlib.mapSet(map2, v1326, v1424);
        await stdlib.mapSet(map1, v1326, stdlib.checkedBigNumberify('./index.rsh:297:25:decimal', stdlib.UInt_max, '0'));
        const v1446 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v1431
          };
        await txn3.getOutput('claim', 'v1446', ctc8, v1446);
        const v1455 = stdlib.lt(v1438, v1422);
        if (v1455) {
          const v1461 = stdlib.sub(v1422, v1438);
          const v1464 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1')];
          const v1465 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '2')];
          const v1466 = [v1461, v1464, v1465];
          const v1467 = stdlib.Array_set(v1417, stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1'), v1466);
          ;
          null;
          const cv1138 = v1138;
          const cv1139 = v1167;
          const cv1140 = v1424;
          const cv1142 = v1142;
          const cv1143 = v1328;
          const cv1149 = v1467;
          const cv1150 = v1150;
          
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1142 = cv1142;
          v1143 = cv1143;
          v1149 = cv1149;
          v1150 = cv1150;
          
          continue;}
        else {
          null;
          const cv1138 = v1138;
          const cv1139 = v1167;
          const cv1140 = v1424;
          const cv1142 = v1142;
          const cv1143 = v1328;
          const cv1149 = v1417;
          const cv1150 = v1150;
          
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1142 = cv1142;
          v1143 = cv1143;
          v1149 = cv1149;
          v1150 = cv1150;
          
          continue;}
        break;
        }
      case 'setTime0_134': {
        const v1574 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v1644 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1645 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1649 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1650 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1651 = [v1645, v1649, v1650];
        const v1652 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1651);
        ;
        const v1653 = v1652[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1654 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1658 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1659 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1660 = [v1654, v1658, v1659];
        const v1661 = stdlib.Array_set(v1652, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1660);
        ;
        const v1717 = v1574[stdlib.checkedBigNumberify('./index.rsh:315:9:spread', stdlib.UInt_max, '0')];
        const v1718 = stdlib.gt(v1717, v1138);
        const v1719 = stdlib.le(v1717, v1100);
        const v1720 = v1718 ? v1719 : false;
        stdlib.assert(v1720, {
          at: './index.rsh:322:14:application',
          fs: ['at ./index.rsh:321:25:application call to [unknown function] (defined at: ./index.rsh:321:25:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1721 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1723 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1724 = stdlib.fromSome(v1723, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1725 = {
          reward: v1724,
          staked: v1722
          };
        await txn3.getOutput('setTime', 'v1725', ctc8, v1725);
        const cv1138 = v1717;
        const cv1139 = v1139;
        const cv1140 = v1140;
        const cv1142 = v1142;
        const cv1143 = v1328;
        const cv1149 = v1661;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      case 'stake0_134': {
        const v1818 = v1327[1];
        undefined /* setApiDetails */;
        const v1844 = v1818[stdlib.checkedBigNumberify('./index.rsh:233:9:spread', stdlib.UInt_max, '0')];
        ;
        const v1888 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1889 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1890 = stdlib.add(v1889, v1844);
        const v1893 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1894 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1895 = [v1890, v1893, v1894];
        const v1896 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1895);
        ;
        const v1897 = v1896[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1898 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1902 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1903 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1904 = [v1898, v1902, v1903];
        const v1905 = stdlib.Array_set(v1896, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1904);
        ;
        const v1979 = stdlib.le(v1138, v1100);
        stdlib.assert(v1979, {
          at: './index.rsh:240:14:application',
          fs: ['at ./index.rsh:239:27:application call to [unknown function] (defined at: ./index.rsh:239:27:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v1980;
        const v1981 = stdlib.sub(v1167, v1139);
        const v1982 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v1982) {
          v1980 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1983 = stdlib.mul(v1981, v1102);
          const v1984 = stdlib.div(v1983, v1142);
          const v1985 = stdlib.add(v1140, v1984);
          v1980 = v1985;
          }
        const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1988 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v1989 = stdlib.fromSome(v1988, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v1990 = stdlib.sub(v1980, v1989);
        const v1991 = stdlib.mul(v1987, v1990);
        const v1992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1993 = stdlib.fromSome(v1992, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1994 = stdlib.add(v1991, v1993);
        await stdlib.mapSet(map1, v1326, v1994);
        await stdlib.mapSet(map2, v1326, v1980);
        const v1998 = stdlib.add(v1987, v1844);
        await stdlib.mapSet(map0, v1326, v1998);
        null;
        const v2003 = {
          reward: v1994,
          staked: v1998
          };
        await txn3.getOutput('stake', 'v2003', ctc8, v2003);
        const v2010 = stdlib.add(v1142, v1844);
        const cv1138 = v1138;
        const cv1139 = v1167;
        const cv1140 = v1980;
        const cv1142 = v2010;
        const cv1143 = v1328;
        const cv1149 = v1905;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      case 'unstake0_134': {
        const v2062 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v2132 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2137 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2138 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v2139 = [v2133, v2137, v2138];
        const v2140 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v2139);
        ;
        const v2141 = v2140[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2142 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2146 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2147 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v2148 = [v2142, v2146, v2147];
        const v2149 = stdlib.Array_set(v2140, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v2148);
        ;
        const v2257 = v2062[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
        const v2258 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v2259 = stdlib.fromSome(v2258, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v2260 = stdlib.le(v2257, v2259);
        stdlib.assert(v2260, {
          at: './index.rsh:264:14:application',
          fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v2261 = v2149[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
        const v2262 = v2261[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
        const v2263 = stdlib.le(v2257, v2262);
        stdlib.assert(v2263, {
          at: './index.rsh:265:14:application',
          fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v2264;
        const v2265 = stdlib.sub(v1167, v1139);
        const v2266 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v2266) {
          v2264 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2267 = stdlib.mul(v2265, v1102);
          const v2268 = stdlib.div(v2267, v1142);
          const v2269 = stdlib.add(v1140, v2268);
          v2264 = v2269;
          }
        const v2272 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v2273 = stdlib.fromSome(v2272, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v2274 = stdlib.sub(v2264, v2273);
        const v2275 = stdlib.mul(v2259, v2274);
        const v2276 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v2277 = stdlib.fromSome(v2276, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v2278 = stdlib.add(v2275, v2277);
        await stdlib.mapSet(map1, v1326, v2278);
        await stdlib.mapSet(map2, v1326, v2264);
        const v2280 = stdlib.sub(v2259, v2257);
        await stdlib.mapSet(map0, v1326, v2280);
        const v2286 = stdlib.sub(v2262, v2257);
        const v2289 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '1')];
        const v2290 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '2')];
        const v2291 = [v2286, v2289, v2290];
        const v2292 = stdlib.Array_set(v2149, stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '0'), v2291);
        ;
        null;
        const v2297 = {
          reward: v2278,
          staked: v2280
          };
        await txn3.getOutput('unstake', 'v2297', ctc8, v2297);
        const v2304 = stdlib.sub(v1142, v2257);
        const cv1138 = v1138;
        const cv1139 = v1167;
        const cv1140 = v2264;
        const cv1142 = v2304;
        const cv1143 = v1328;
        const cv1149 = v2292;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1139, v1140, v1142, v1149, v1150],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1143,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:342:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2319, time: v2318, didSend: v857, from: v2317 } = txn3;
      
      ;
      const v2321 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '1')];
      const v2322 = v2321[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '0')];
      const v2323 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
      const v2324 = v2323[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1150,
        kind: 'from',
        to: v1096,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v2322,
        kind: 'from',
        to: v1096,
        tok: v1098
        });
      sim_r.txns.push({
        amt: v2324,
        kind: 'from',
        to: v1096,
        tok: v1097
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1098
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1097
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
  const {data: [], secs: v2319, time: v2318, didSend: v857, from: v2317 } = txn3;
  ;
  const v2321 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '1')];
  const v2322 = v2321[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '0')];
  const v2323 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
  const v2324 = v2323[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
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
    claim0_134: ctc4,
    setTime0_134: ctc5,
    stake0_134: ctc5,
    unstake0_134: ctc5
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
  
  
  const v1078 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1079 = [v1078, v1078];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1097, v1098, v1099, v1100, v1101, v1102], secs: v1104, time: v1103, didSend: v46, from: v1096 } = txn1;
  const v1105 = stdlib.tokenEq(v1097, v1098);
  const v1106 = v1105 ? false : true;
  stdlib.assert(v1106, {
    at: './index.rsh:137:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v1107 = v1079[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0')];
  const v1109 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1110 = v1107[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
  const v1111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1109, v1110];
  const v1112 = stdlib.Array_set(v1079, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '0'), v1111);
  ;
  const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1116 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1')];
  const v1117 = v1114[stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '2')];
  const v1118 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1116, v1117];
  const v1119 = stdlib.Array_set(v1112, stdlib.checkedBigNumberify('./index.rsh:137:11:dot', stdlib.UInt_max, '1'), v1118);
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
  const {data: [], secs: v1123, time: v1122, didSend: v53, from: v1121 } = txn2;
  ;
  const v1124 = v1119[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1125 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '0')];
  const v1126 = stdlib.add(v1125, v1101);
  const v1129 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1')];
  const v1130 = v1124[stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '2')];
  const v1131 = [v1126, v1129, v1130];
  const v1132 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:140:11:dot', stdlib.UInt_max, '1'), v1131);
  ;
  const v1133 = stdlib.addressEq(v1096, v1121);
  stdlib.assert(v1133, {
    at: './index.rsh:140:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:155:22:application',
    fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v1138 = stdlib.checkedBigNumberify('./index.rsh:181:5:decimal', stdlib.UInt_max, '0');
  let v1139 = stdlib.checkedBigNumberify('./index.rsh:178:5:decimal', stdlib.UInt_max, '0');
  let v1140 = stdlib.checkedBigNumberify('./index.rsh:179:5:decimal', stdlib.UInt_max, '0');
  let v1142 = stdlib.checkedBigNumberify('./index.rsh:177:5:decimal', stdlib.UInt_max, '0');
  let v1143 = v1122;
  let v1149 = v1132;
  let v1150 = stdlib.checkedBigNumberify('./index.rsh:111:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1163 = stdlib.lt(v1138, v1100);
    
    return v1163;})()) {
    const v1166 = stdlib.lt(v1138, v1100);
    const v1167 = v1166 ? v1138 : v1100;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn3;
    switch (v1327[0]) {
      case 'claim0_134': {
        const v1330 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v1400 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1401 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1405 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1406 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1407 = [v1401, v1405, v1406];
        const v1408 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1407);
        ;
        const v1409 = v1408[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1410 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1414 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1415 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1416 = [v1410, v1414, v1415];
        const v1417 = stdlib.Array_set(v1408, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1416);
        ;
        const v1419 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1420 = stdlib.fromSome(v1419, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
        const v1422 = v1421[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
        const v1423 = stdlib.lt(v1420, v1422);
        stdlib.assert(v1423, {
          at: './index.rsh:293:14:application',
          fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: null,
          who: 'User'
          });
        let v1424;
        const v1425 = stdlib.sub(v1167, v1139);
        const v1426 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v1426) {
          v1424 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1427 = stdlib.mul(v1425, v1102);
          const v1428 = stdlib.div(v1427, v1142);
          const v1429 = stdlib.add(v1140, v1428);
          v1424 = v1429;
          }
        const v1430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1431 = stdlib.fromSome(v1430, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1432 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v1433 = stdlib.fromSome(v1432, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v1434 = stdlib.sub(v1424, v1433);
        const v1435 = stdlib.mul(v1431, v1434);
        const v1438 = stdlib.add(v1435, v1420);
        await stdlib.mapSet(map1, v1326, v1438);
        await stdlib.mapSet(map2, v1326, v1424);
        await stdlib.mapSet(map1, v1326, stdlib.checkedBigNumberify('./index.rsh:297:25:decimal', stdlib.UInt_max, '0'));
        const v1446 = {
          reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          staked: v1431
          };
        await txn3.getOutput('claim', 'v1446', ctc7, v1446);
        const v1455 = stdlib.lt(v1438, v1422);
        if (v1455) {
          const v1461 = stdlib.sub(v1422, v1438);
          const v1464 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1')];
          const v1465 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '2')];
          const v1466 = [v1461, v1464, v1465];
          const v1467 = stdlib.Array_set(v1417, stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1'), v1466);
          ;
          null;
          const cv1138 = v1138;
          const cv1139 = v1167;
          const cv1140 = v1424;
          const cv1142 = v1142;
          const cv1143 = v1328;
          const cv1149 = v1467;
          const cv1150 = v1150;
          
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1142 = cv1142;
          v1143 = cv1143;
          v1149 = cv1149;
          v1150 = cv1150;
          
          continue;}
        else {
          null;
          const cv1138 = v1138;
          const cv1139 = v1167;
          const cv1140 = v1424;
          const cv1142 = v1142;
          const cv1143 = v1328;
          const cv1149 = v1417;
          const cv1150 = v1150;
          
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1142 = cv1142;
          v1143 = cv1143;
          v1149 = cv1149;
          v1150 = cv1150;
          
          continue;}
        break;
        }
      case 'setTime0_134': {
        const v1574 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v1644 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1645 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1649 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1650 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1651 = [v1645, v1649, v1650];
        const v1652 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1651);
        ;
        const v1653 = v1652[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1654 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1658 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1659 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1660 = [v1654, v1658, v1659];
        const v1661 = stdlib.Array_set(v1652, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1660);
        ;
        const v1717 = v1574[stdlib.checkedBigNumberify('./index.rsh:315:9:spread', stdlib.UInt_max, '0')];
        const v1718 = stdlib.gt(v1717, v1138);
        const v1719 = stdlib.le(v1717, v1100);
        const v1720 = v1718 ? v1719 : false;
        stdlib.assert(v1720, {
          at: './index.rsh:322:14:application',
          fs: ['at ./index.rsh:321:25:application call to [unknown function] (defined at: ./index.rsh:321:25:function exp)'],
          msg: null,
          who: 'User'
          });
        const v1721 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1723 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1724 = stdlib.fromSome(v1723, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1725 = {
          reward: v1724,
          staked: v1722
          };
        await txn3.getOutput('setTime', 'v1725', ctc7, v1725);
        const cv1138 = v1717;
        const cv1139 = v1139;
        const cv1140 = v1140;
        const cv1142 = v1142;
        const cv1143 = v1328;
        const cv1149 = v1661;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      case 'stake0_134': {
        const v1818 = v1327[1];
        undefined /* setApiDetails */;
        const v1844 = v1818[stdlib.checkedBigNumberify('./index.rsh:233:9:spread', stdlib.UInt_max, '0')];
        ;
        const v1888 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1889 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1890 = stdlib.add(v1889, v1844);
        const v1893 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1894 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1895 = [v1890, v1893, v1894];
        const v1896 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1895);
        ;
        const v1897 = v1896[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1898 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v1902 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v1903 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v1904 = [v1898, v1902, v1903];
        const v1905 = stdlib.Array_set(v1896, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1904);
        ;
        const v1979 = stdlib.le(v1138, v1100);
        stdlib.assert(v1979, {
          at: './index.rsh:240:14:application',
          fs: ['at ./index.rsh:239:27:application call to [unknown function] (defined at: ./index.rsh:239:27:function exp)'],
          msg: null,
          who: 'User'
          });
        let v1980;
        const v1981 = stdlib.sub(v1167, v1139);
        const v1982 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v1982) {
          v1980 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1983 = stdlib.mul(v1981, v1102);
          const v1984 = stdlib.div(v1983, v1142);
          const v1985 = stdlib.add(v1140, v1984);
          v1980 = v1985;
          }
        const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v1988 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v1989 = stdlib.fromSome(v1988, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v1990 = stdlib.sub(v1980, v1989);
        const v1991 = stdlib.mul(v1987, v1990);
        const v1992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v1993 = stdlib.fromSome(v1992, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v1994 = stdlib.add(v1991, v1993);
        await stdlib.mapSet(map1, v1326, v1994);
        await stdlib.mapSet(map2, v1326, v1980);
        const v1998 = stdlib.add(v1987, v1844);
        await stdlib.mapSet(map0, v1326, v1998);
        null;
        const v2003 = {
          reward: v1994,
          staked: v1998
          };
        await txn3.getOutput('stake', 'v2003', ctc7, v2003);
        const v2010 = stdlib.add(v1142, v1844);
        const cv1138 = v1138;
        const cv1139 = v1167;
        const cv1140 = v1980;
        const cv1142 = v2010;
        const cv1143 = v1328;
        const cv1149 = v1905;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      case 'unstake0_134': {
        const v2062 = v1327[1];
        undefined /* setApiDetails */;
        ;
        const v2132 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2137 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2138 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v2139 = [v2133, v2137, v2138];
        const v2140 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v2139);
        ;
        const v2141 = v2140[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2142 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
        const v2146 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
        const v2147 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
        const v2148 = [v2142, v2146, v2147];
        const v2149 = stdlib.Array_set(v2140, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v2148);
        ;
        const v2257 = v2062[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
        const v2258 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
        const v2259 = stdlib.fromSome(v2258, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
        const v2260 = stdlib.le(v2257, v2259);
        stdlib.assert(v2260, {
          at: './index.rsh:264:14:application',
          fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v2261 = v2149[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
        const v2262 = v2261[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
        const v2263 = stdlib.le(v2257, v2262);
        stdlib.assert(v2263, {
          at: './index.rsh:265:14:application',
          fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
          msg: null,
          who: 'User'
          });
        let v2264;
        const v2265 = stdlib.sub(v1167, v1139);
        const v2266 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
        if (v2266) {
          v2264 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v2267 = stdlib.mul(v2265, v1102);
          const v2268 = stdlib.div(v2267, v1142);
          const v2269 = stdlib.add(v1140, v2268);
          v2264 = v2269;
          }
        const v2272 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
        const v2273 = stdlib.fromSome(v2272, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
        const v2274 = stdlib.sub(v2264, v2273);
        const v2275 = stdlib.mul(v2259, v2274);
        const v2276 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
        const v2277 = stdlib.fromSome(v2276, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
        const v2278 = stdlib.add(v2275, v2277);
        await stdlib.mapSet(map1, v1326, v2278);
        await stdlib.mapSet(map2, v1326, v2264);
        const v2280 = stdlib.sub(v2259, v2257);
        await stdlib.mapSet(map0, v1326, v2280);
        const v2286 = stdlib.sub(v2262, v2257);
        const v2289 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '1')];
        const v2290 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '2')];
        const v2291 = [v2286, v2289, v2290];
        const v2292 = stdlib.Array_set(v2149, stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '0'), v2291);
        ;
        null;
        const v2297 = {
          reward: v2278,
          staked: v2280
          };
        await txn3.getOutput('unstake', 'v2297', ctc7, v2297);
        const v2304 = stdlib.sub(v1142, v2257);
        const cv1138 = v1138;
        const cv1139 = v1167;
        const cv1140 = v2264;
        const cv1142 = v2304;
        const cv1143 = v1328;
        const cv1149 = v2292;
        const cv1150 = v1150;
        
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1142 = cv1142;
        v1143 = cv1143;
        v1149 = cv1149;
        v1150 = cv1150;
        
        continue;
        break;
        }
      }
    
    }
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1139, v1140, v1142, v1149, v1150],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1143,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:342:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v2319, time: v2318, didSend: v857, from: v2317 } = txn3;
      
      ;
      const v2321 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '1')];
      const v2322 = v2321[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '0')];
      const v2323 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
      const v2324 = v2323[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v1150,
        kind: 'from',
        to: v1096,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v2322,
        kind: 'from',
        to: v1096,
        tok: v1098
        });
      sim_r.txns.push({
        amt: v2324,
        kind: 'from',
        to: v1096,
        tok: v1097
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1098
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v1097
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
  const {data: [], secs: v2319, time: v2318, didSend: v857, from: v2317 } = txn3;
  ;
  const v2321 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '1')];
  const v2322 = v2321[stdlib.checkedBigNumberify('./index.rsh:343:32:application', stdlib.UInt_max, '0')];
  const v2323 = v1149[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
  const v2324 = v2323[stdlib.checkedBigNumberify('./index.rsh:343:69:application', stdlib.UInt_max, '0')];
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
    claim0_134: ctc8,
    setTime0_134: ctc9,
    stake0_134: ctc9,
    unstake0_134: ctc9
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
  
  
  const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1202 = ctc.selfAddress();
  const v1204 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:176:21:application call to "runclaim0_134" (defined at: ./index.rsh:286:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v1206 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1202), null);
  const v1207 = stdlib.fromSome(v1206, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
  const v1208 = v1149[stdlib.checkedBigNumberify('./index.rsh:289:37:application', stdlib.UInt_max, '1')];
  const v1209 = v1208[stdlib.checkedBigNumberify('./index.rsh:289:37:application', stdlib.UInt_max, '0')];
  const v1210 = stdlib.lt(v1207, v1209);
  stdlib.assert(v1210, {
    at: './index.rsh:289:14:application',
    fs: ['at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:288:10:application call to [unknown function] (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:176:21:application call to "runclaim0_134" (defined at: ./index.rsh:286:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: null,
    who: 'claim'
    });
  const v1213 = ['claim0_134', v1204];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167, v1213],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:291:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'), v1097], [stdlib.checkedBigNumberify('./index.rsh:291:35:decimal', stdlib.UInt_max, '0'), v1098]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
      
      switch (v1327[0]) {
        case 'claim0_134': {
          const v1330 = v1327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v1400 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1401 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1405 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1406 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1407 = [v1401, v1405, v1406];
          const v1408 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1407);
          ;
          const v1409 = v1408[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1410 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1414 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1415 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1416 = [v1410, v1414, v1415];
          const v1417 = stdlib.Array_set(v1408, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1416);
          ;
          const v1419 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1326), null);
          const v1420 = stdlib.fromSome(v1419, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
          const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
          const v1422 = v1421[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
          const v1423 = stdlib.lt(v1420, v1422);
          ;
          let v1424;
          const v1425 = stdlib.sub(v1167, v1139);
          const v1426 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
          if (v1426) {
            v1424 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1427 = stdlib.mul(v1425, v1102);
            const v1428 = stdlib.div(v1427, v1142);
            const v1429 = stdlib.add(v1140, v1428);
            v1424 = v1429;
            }
          const v1430 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1326), null);
          const v1431 = stdlib.fromSome(v1430, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
          const v1432 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1326), null);
          const v1433 = stdlib.fromSome(v1432, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
          const v1434 = stdlib.sub(v1424, v1433);
          const v1435 = stdlib.mul(v1431, v1434);
          const v1438 = stdlib.add(v1435, v1420);
          await stdlib.simMapSet(sim_r, 1, v1326, v1438);
          await stdlib.simMapSet(sim_r, 2, v1326, v1424);
          await stdlib.simMapSet(sim_r, 1, v1326, stdlib.checkedBigNumberify('./index.rsh:297:25:decimal', stdlib.UInt_max, '0'));
          const v1446 = {
            reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            staked: v1431
            };
          const v1448 = await txn1.getOutput('claim', 'v1446', ctc11, v1446);
          
          const v1455 = stdlib.lt(v1438, v1422);
          if (v1455) {
            const v1461 = stdlib.sub(v1422, v1438);
            const v1464 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1')];
            const v1465 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '2')];
            const v1466 = [v1461, v1464, v1465];
            const v1467 = stdlib.Array_set(v1417, stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1'), v1466);
            sim_r.txns.push({
              amt: v1438,
              kind: 'from',
              to: v1326,
              tok: v1098
              });
            null;
            const v4082 = v1138;
            const v4083 = v1167;
            const v4084 = v1424;
            const v4085 = v1142;
            const v4087 = v1467;
            const v4088 = v1150;
            const v4089 = stdlib.lt(v1138, v1100);
            if (v4089) {
              const v4091 = v1138;
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          else {
            null;
            const v4100 = v1138;
            const v4101 = v1167;
            const v4102 = v1424;
            const v4103 = v1142;
            const v4105 = v1417;
            const v4106 = v1150;
            const v4107 = stdlib.lt(v1138, v1100);
            if (v4107) {
              const v4109 = v1138;
              sim_r.isHalt = false;
              }
            else {
              null;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'setTime0_134': {
          const v1574 = v1327[1];
          
          break;
          }
        case 'stake0_134': {
          const v1818 = v1327[1];
          
          break;
          }
        case 'unstake0_134': {
          const v2062 = v1327[1];
          
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
  const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
  switch (v1327[0]) {
    case 'claim0_134': {
      const v1330 = v1327[1];
      undefined /* setApiDetails */;
      ;
      const v1400 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1401 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1405 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1406 = v1400[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1407 = [v1401, v1405, v1406];
      const v1408 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1407);
      ;
      const v1409 = v1408[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1410 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1414 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1415 = v1409[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1416 = [v1410, v1414, v1415];
      const v1417 = stdlib.Array_set(v1408, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1416);
      ;
      const v1419 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
      const v1420 = stdlib.fromSome(v1419, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
      const v1421 = v1417[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '1')];
      const v1422 = v1421[stdlib.checkedBigNumberify('./index.rsh:293:37:application', stdlib.UInt_max, '0')];
      const v1423 = stdlib.lt(v1420, v1422);
      stdlib.assert(v1423, {
        at: './index.rsh:293:14:application',
        fs: ['at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
        msg: null,
        who: 'claim'
        });
      let v1424;
      const v1425 = stdlib.sub(v1167, v1139);
      const v1426 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
      if (v1426) {
        v1424 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1427 = stdlib.mul(v1425, v1102);
        const v1428 = stdlib.div(v1427, v1142);
        const v1429 = stdlib.add(v1140, v1428);
        v1424 = v1429;
        }
      const v1430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v1431 = stdlib.fromSome(v1430, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
      const v1432 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
      const v1433 = stdlib.fromSome(v1432, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
      const v1434 = stdlib.sub(v1424, v1433);
      const v1435 = stdlib.mul(v1431, v1434);
      const v1438 = stdlib.add(v1435, v1420);
      await stdlib.mapSet(map1, v1326, v1438);
      await stdlib.mapSet(map2, v1326, v1424);
      await stdlib.mapSet(map1, v1326, stdlib.checkedBigNumberify('./index.rsh:297:25:decimal', stdlib.UInt_max, '0'));
      const v1446 = {
        reward: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        staked: v1431
        };
      const v1448 = await txn1.getOutput('claim', 'v1446', ctc11, v1446);
      if (v668) {
        stdlib.protect(ctc0, await interact.out(v1330, v1448), {
          at: './index.rsh:287:7:application',
          fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:7:function exp)', 'at ./index.rsh:300:17:application call to "callback" (defined at: ./index.rsh:292:18:function exp)', 'at ./index.rsh:292:18:application call to [unknown function] (defined at: ./index.rsh:292:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v1455 = stdlib.lt(v1438, v1422);
      if (v1455) {
        const v1461 = stdlib.sub(v1422, v1438);
        const v1464 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1')];
        const v1465 = v1421[stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '2')];
        const v1466 = [v1461, v1464, v1465];
        const v1467 = stdlib.Array_set(v1417, stdlib.checkedBigNumberify('./index.rsh:302:54:application', stdlib.UInt_max, '1'), v1466);
        ;
        null;
        const v4082 = v1138;
        const v4083 = v1167;
        const v4084 = v1424;
        const v4085 = v1142;
        const v4087 = v1467;
        const v4088 = v1150;
        const v4089 = stdlib.lt(v1138, v1100);
        if (v4089) {
          const v4091 = v1138;
          return;
          }
        else {
          null;
          return;
          }}
      else {
        null;
        const v4100 = v1138;
        const v4101 = v1167;
        const v4102 = v1424;
        const v4103 = v1142;
        const v4105 = v1417;
        const v4106 = v1150;
        const v4107 = stdlib.lt(v1138, v1100);
        if (v4107) {
          const v4109 = v1138;
          return;
          }
        else {
          null;
          return;
          }}
      break;
      }
    case 'setTime0_134': {
      const v1574 = v1327[1];
      return;
      break;
      }
    case 'stake0_134': {
      const v1818 = v1327[1];
      return;
      break;
      }
    case 'unstake0_134': {
      const v2062 = v1327[1];
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
    claim0_134: ctc9,
    setTime0_134: ctc8,
    stake0_134: ctc8,
    unstake0_134: ctc8
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
  
  
  const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1217 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:317:15:application call to [unknown function] (defined at: ./index.rsh:317:15:function exp)', 'at ./index.rsh:176:21:application call to "runsetTime0_134" (defined at: ./index.rsh:315:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: 'in',
    who: 'setTime'
    });
  const v1218 = v1217[stdlib.checkedBigNumberify('./index.rsh:315:9:spread', stdlib.UInt_max, '0')];
  const v1220 = stdlib.gt(v1218, v1138);
  const v1221 = stdlib.le(v1218, v1100);
  const v1222 = v1220 ? v1221 : false;
  stdlib.assert(v1222, {
    at: './index.rsh:318:14:application',
    fs: ['at ./index.rsh:317:15:application call to [unknown function] (defined at: ./index.rsh:317:15:function exp)', 'at ./index.rsh:317:15:application call to [unknown function] (defined at: ./index.rsh:317:15:function exp)', 'at ./index.rsh:176:21:application call to "runsetTime0_134" (defined at: ./index.rsh:315:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: null,
    who: 'setTime'
    });
  const v1225 = ['setTime0_134', v1217];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167, v1225],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:320:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:320:19:decimal', stdlib.UInt_max, '0'), v1097], [stdlib.checkedBigNumberify('./index.rsh:320:36:decimal', stdlib.UInt_max, '0'), v1098]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
      
      switch (v1327[0]) {
        case 'claim0_134': {
          const v1330 = v1327[1];
          
          break;
          }
        case 'setTime0_134': {
          const v1574 = v1327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setTime"
            });
          ;
          const v1644 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1645 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1649 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1650 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1651 = [v1645, v1649, v1650];
          const v1652 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1651);
          ;
          const v1653 = v1652[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1654 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1658 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1659 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1660 = [v1654, v1658, v1659];
          const v1661 = stdlib.Array_set(v1652, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1660);
          ;
          const v1717 = v1574[stdlib.checkedBigNumberify('./index.rsh:315:9:spread', stdlib.UInt_max, '0')];
          const v1718 = stdlib.gt(v1717, v1138);
          const v1719 = stdlib.le(v1717, v1100);
          const v1720 = v1718 ? v1719 : false;
          ;
          const v1721 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1326), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
          const v1723 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1326), null);
          const v1724 = stdlib.fromSome(v1723, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
          const v1725 = {
            reward: v1724,
            staked: v1722
            };
          const v1727 = await txn1.getOutput('setTime', 'v1725', ctc11, v1725);
          
          const v4208 = v1717;
          const v4209 = v1139;
          const v4210 = v1140;
          const v4211 = v1142;
          const v4213 = v1661;
          const v4214 = v1150;
          const v4215 = stdlib.lt(v1717, v1100);
          if (v4215) {
            const v4217 = v1717;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_134': {
          const v1818 = v1327[1];
          
          break;
          }
        case 'unstake0_134': {
          const v2062 = v1327[1];
          
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
  const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
  switch (v1327[0]) {
    case 'claim0_134': {
      const v1330 = v1327[1];
      return;
      break;
      }
    case 'setTime0_134': {
      const v1574 = v1327[1];
      undefined /* setApiDetails */;
      ;
      const v1644 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1645 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1649 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1650 = v1644[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1651 = [v1645, v1649, v1650];
      const v1652 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1651);
      ;
      const v1653 = v1652[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1654 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1658 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1659 = v1653[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1660 = [v1654, v1658, v1659];
      const v1661 = stdlib.Array_set(v1652, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1660);
      ;
      const v1717 = v1574[stdlib.checkedBigNumberify('./index.rsh:315:9:spread', stdlib.UInt_max, '0')];
      const v1718 = stdlib.gt(v1717, v1138);
      const v1719 = stdlib.le(v1717, v1100);
      const v1720 = v1718 ? v1719 : false;
      stdlib.assert(v1720, {
        at: './index.rsh:322:14:application',
        fs: ['at ./index.rsh:321:25:application call to [unknown function] (defined at: ./index.rsh:321:25:function exp)'],
        msg: null,
        who: 'setTime'
        });
      const v1721 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
      const v1723 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
      const v1724 = stdlib.fromSome(v1723, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
      const v1725 = {
        reward: v1724,
        staked: v1722
        };
      const v1727 = await txn1.getOutput('setTime', 'v1725', ctc11, v1725);
      if (v668) {
        stdlib.protect(ctc0, await interact.out(v1574, v1727), {
          at: './index.rsh:316:7:application',
          fs: ['at ./index.rsh:316:7:application call to [unknown function] (defined at: ./index.rsh:316:7:function exp)', 'at ./index.rsh:323:17:application call to "callback" (defined at: ./index.rsh:321:25:function exp)', 'at ./index.rsh:321:25:application call to [unknown function] (defined at: ./index.rsh:321:25:function exp)'],
          msg: 'out',
          who: 'setTime'
          });
        }
      else {
        }
      
      const v4208 = v1717;
      const v4209 = v1139;
      const v4210 = v1140;
      const v4211 = v1142;
      const v4213 = v1661;
      const v4214 = v1150;
      const v4215 = stdlib.lt(v1717, v1100);
      if (v4215) {
        const v4217 = v1717;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'stake0_134': {
      const v1818 = v1327[1];
      return;
      break;
      }
    case 'unstake0_134': {
      const v2062 = v1327[1];
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
    claim0_134: ctc9,
    setTime0_134: ctc8,
    stake0_134: ctc8,
    unstake0_134: ctc8
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
  
  
  const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1179 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:235:11:application call to [unknown function] (defined at: ./index.rsh:235:11:function exp)', 'at ./index.rsh:176:21:application call to "runstake0_134" (defined at: ./index.rsh:233:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v1180 = v1179[stdlib.checkedBigNumberify('./index.rsh:233:9:spread', stdlib.UInt_max, '0')];
  const v1182 = stdlib.le(v1138, v1100);
  stdlib.assert(v1182, {
    at: './index.rsh:236:14:application',
    fs: ['at ./index.rsh:235:11:application call to [unknown function] (defined at: ./index.rsh:235:11:function exp)', 'at ./index.rsh:235:11:application call to [unknown function] (defined at: ./index.rsh:235:11:function exp)', 'at ./index.rsh:176:21:application call to "runstake0_134" (defined at: ./index.rsh:233:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: null,
    who: 'stake'
    });
  const v1185 = ['stake0_134', v1179];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167, v1185],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:238:21:decimal', stdlib.UInt_max, '0'), [[v1180, v1097], [stdlib.checkedBigNumberify('./index.rsh:238:48:decimal', stdlib.UInt_max, '0'), v1098]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
      
      switch (v1327[0]) {
        case 'claim0_134': {
          const v1330 = v1327[1];
          
          break;
          }
        case 'setTime0_134': {
          const v1574 = v1327[1];
          
          break;
          }
        case 'stake0_134': {
          const v1818 = v1327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v1844 = v1818[stdlib.checkedBigNumberify('./index.rsh:233:9:spread', stdlib.UInt_max, '0')];
          ;
          const v1888 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1889 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1890 = stdlib.add(v1889, v1844);
          const v1893 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1894 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1895 = [v1890, v1893, v1894];
          const v1896 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1895);
          sim_r.txns.push({
            amt: v1844,
            kind: 'to',
            tok: v1097
            });
          const v1897 = v1896[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1898 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v1902 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v1903 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v1904 = [v1898, v1902, v1903];
          const v1905 = stdlib.Array_set(v1896, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1904);
          ;
          const v1979 = stdlib.le(v1138, v1100);
          ;
          let v1980;
          const v1981 = stdlib.sub(v1167, v1139);
          const v1982 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
          if (v1982) {
            v1980 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1983 = stdlib.mul(v1981, v1102);
            const v1984 = stdlib.div(v1983, v1142);
            const v1985 = stdlib.add(v1140, v1984);
            v1980 = v1985;
            }
          const v1986 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1326), null);
          const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
          const v1988 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1326), null);
          const v1989 = stdlib.fromSome(v1988, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
          const v1990 = stdlib.sub(v1980, v1989);
          const v1991 = stdlib.mul(v1987, v1990);
          const v1992 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1326), null);
          const v1993 = stdlib.fromSome(v1992, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
          const v1994 = stdlib.add(v1991, v1993);
          await stdlib.simMapSet(sim_r, 1, v1326, v1994);
          await stdlib.simMapSet(sim_r, 2, v1326, v1980);
          const v1998 = stdlib.add(v1987, v1844);
          await stdlib.simMapSet(sim_r, 0, v1326, v1998);
          null;
          const v2003 = {
            reward: v1994,
            staked: v1998
            };
          const v2005 = await txn1.getOutput('stake', 'v2003', ctc11, v2003);
          
          const v2010 = stdlib.add(v1142, v1844);
          const v4316 = v1138;
          const v4317 = v1167;
          const v4318 = v1980;
          const v4319 = v2010;
          const v4321 = v1905;
          const v4322 = v1150;
          const v4323 = stdlib.lt(v1138, v1100);
          if (v4323) {
            const v4325 = v1138;
            sim_r.isHalt = false;
            }
          else {
            null;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_134': {
          const v2062 = v1327[1];
          
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
  const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
  switch (v1327[0]) {
    case 'claim0_134': {
      const v1330 = v1327[1];
      return;
      break;
      }
    case 'setTime0_134': {
      const v1574 = v1327[1];
      return;
      break;
      }
    case 'stake0_134': {
      const v1818 = v1327[1];
      undefined /* setApiDetails */;
      const v1844 = v1818[stdlib.checkedBigNumberify('./index.rsh:233:9:spread', stdlib.UInt_max, '0')];
      ;
      const v1888 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1889 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1890 = stdlib.add(v1889, v1844);
      const v1893 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1894 = v1888[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1895 = [v1890, v1893, v1894];
      const v1896 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v1895);
      ;
      const v1897 = v1896[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1898 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v1902 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v1903 = v1897[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v1904 = [v1898, v1902, v1903];
      const v1905 = stdlib.Array_set(v1896, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v1904);
      ;
      const v1979 = stdlib.le(v1138, v1100);
      stdlib.assert(v1979, {
        at: './index.rsh:240:14:application',
        fs: ['at ./index.rsh:239:27:application call to [unknown function] (defined at: ./index.rsh:239:27:function exp)'],
        msg: null,
        who: 'stake'
        });
      let v1980;
      const v1981 = stdlib.sub(v1167, v1139);
      const v1982 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
      if (v1982) {
        v1980 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1983 = stdlib.mul(v1981, v1102);
        const v1984 = stdlib.div(v1983, v1142);
        const v1985 = stdlib.add(v1140, v1984);
        v1980 = v1985;
        }
      const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
      const v1988 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
      const v1989 = stdlib.fromSome(v1988, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
      const v1990 = stdlib.sub(v1980, v1989);
      const v1991 = stdlib.mul(v1987, v1990);
      const v1992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
      const v1993 = stdlib.fromSome(v1992, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
      const v1994 = stdlib.add(v1991, v1993);
      await stdlib.mapSet(map1, v1326, v1994);
      await stdlib.mapSet(map2, v1326, v1980);
      const v1998 = stdlib.add(v1987, v1844);
      await stdlib.mapSet(map0, v1326, v1998);
      null;
      const v2003 = {
        reward: v1994,
        staked: v1998
        };
      const v2005 = await txn1.getOutput('stake', 'v2003', ctc11, v2003);
      if (v668) {
        stdlib.protect(ctc0, await interact.out(v1818, v2005), {
          at: './index.rsh:234:7:application',
          fs: ['at ./index.rsh:234:7:application call to [unknown function] (defined at: ./index.rsh:234:7:function exp)', 'at ./index.rsh:245:17:application call to "callback" (defined at: ./index.rsh:239:27:function exp)', 'at ./index.rsh:239:27:application call to [unknown function] (defined at: ./index.rsh:239:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v2010 = stdlib.add(v1142, v1844);
      const v4316 = v1138;
      const v4317 = v1167;
      const v4318 = v1980;
      const v4319 = v2010;
      const v4321 = v1905;
      const v4322 = v1150;
      const v4323 = stdlib.lt(v1138, v1100);
      if (v4323) {
        const v4325 = v1138;
        return;
        }
      else {
        null;
        return;
        }
      break;
      }
    case 'unstake0_134': {
      const v2062 = v1327[1];
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
    claim0_134: ctc9,
    setTime0_134: ctc8,
    stake0_134: ctc8,
    unstake0_134: ctc8
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
  
  
  const [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v1187 = ctc.selfAddress();
  const v1189 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:257:19:application call to [unknown function] (defined at: ./index.rsh:257:19:function exp)', 'at ./index.rsh:176:21:application call to "rununstake0_134" (defined at: ./index.rsh:255:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v1190 = v1189[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
  const v1192 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1187), null);
  const v1193 = stdlib.fromSome(v1192, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
  const v1194 = stdlib.le(v1190, v1193);
  stdlib.assert(v1194, {
    at: './index.rsh:258:15:application',
    fs: ['at ./index.rsh:257:19:application call to [unknown function] (defined at: ./index.rsh:257:19:function exp)', 'at ./index.rsh:257:19:application call to [unknown function] (defined at: ./index.rsh:257:19:function exp)', 'at ./index.rsh:176:21:application call to "rununstake0_134" (defined at: ./index.rsh:255:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1195 = v1149[stdlib.checkedBigNumberify('./index.rsh:259:36:application', stdlib.UInt_max, '0')];
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:259:36:application', stdlib.UInt_max, '0')];
  const v1197 = stdlib.le(v1190, v1196);
  stdlib.assert(v1197, {
    at: './index.rsh:259:15:application',
    fs: ['at ./index.rsh:257:19:application call to [unknown function] (defined at: ./index.rsh:257:19:function exp)', 'at ./index.rsh:257:19:application call to [unknown function] (defined at: ./index.rsh:257:19:function exp)', 'at ./index.rsh:176:21:application call to "rununstake0_134" (defined at: ./index.rsh:255:9:function exp)', 'at ./index.rsh:176:21:application call to [unknown function] (defined at: ./index.rsh:176:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v1200 = ['unstake0_134', v1189];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1096, v1097, v1098, v1099, v1100, v1101, v1102, v1138, v1139, v1140, v1142, v1149, v1150, v1167, v1200],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:261:19:decimal', stdlib.UInt_max, '0'), v1097], [stdlib.checkedBigNumberify('./index.rsh:261:36:decimal', stdlib.UInt_max, '0'), v1098]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
      
      switch (v1327[0]) {
        case 'claim0_134': {
          const v1330 = v1327[1];
          
          break;
          }
        case 'setTime0_134': {
          const v1574 = v1327[1];
          
          break;
          }
        case 'stake0_134': {
          const v1818 = v1327[1];
          
          break;
          }
        case 'unstake0_134': {
          const v2062 = v1327[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v2132 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v2137 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v2138 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v2139 = [v2133, v2137, v2138];
          const v2140 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v2139);
          ;
          const v2141 = v2140[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v2142 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
          const v2146 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
          const v2147 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
          const v2148 = [v2142, v2146, v2147];
          const v2149 = stdlib.Array_set(v2140, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v2148);
          ;
          const v2257 = v2062[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
          const v2258 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1326), null);
          const v2259 = stdlib.fromSome(v2258, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
          const v2260 = stdlib.le(v2257, v2259);
          ;
          const v2261 = v2149[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
          const v2262 = v2261[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
          const v2263 = stdlib.le(v2257, v2262);
          ;
          let v2264;
          const v2265 = stdlib.sub(v1167, v1139);
          const v2266 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
          if (v2266) {
            v2264 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v2267 = stdlib.mul(v2265, v1102);
            const v2268 = stdlib.div(v2267, v1142);
            const v2269 = stdlib.add(v1140, v2268);
            v2264 = v2269;
            }
          const v2272 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1326), null);
          const v2273 = stdlib.fromSome(v2272, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
          const v2274 = stdlib.sub(v2264, v2273);
          const v2275 = stdlib.mul(v2259, v2274);
          const v2276 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1326), null);
          const v2277 = stdlib.fromSome(v2276, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
          const v2278 = stdlib.add(v2275, v2277);
          await stdlib.simMapSet(sim_r, 1, v1326, v2278);
          await stdlib.simMapSet(sim_r, 2, v1326, v2264);
          const v2280 = stdlib.sub(v2259, v2257);
          await stdlib.simMapSet(sim_r, 0, v1326, v2280);
          const v2286 = stdlib.sub(v2262, v2257);
          const v2289 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '1')];
          const v2290 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '2')];
          const v2291 = [v2286, v2289, v2290];
          const v2292 = stdlib.Array_set(v2149, stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '0'), v2291);
          sim_r.txns.push({
            amt: v2257,
            kind: 'from',
            to: v1326,
            tok: v1097
            });
          null;
          const v2297 = {
            reward: v2278,
            staked: v2280
            };
          const v2299 = await txn1.getOutput('unstake', 'v2297', ctc11, v2297);
          
          const v2304 = stdlib.sub(v1142, v2257);
          const v4424 = v1138;
          const v4425 = v1167;
          const v4426 = v2264;
          const v4427 = v2304;
          const v4429 = v2292;
          const v4430 = v1150;
          const v4431 = stdlib.lt(v1138, v1100);
          if (v4431) {
            const v4433 = v1138;
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
  const {data: [v1327], secs: v1329, time: v1328, didSend: v668, from: v1326 } = txn1;
  switch (v1327[0]) {
    case 'claim0_134': {
      const v1330 = v1327[1];
      return;
      break;
      }
    case 'setTime0_134': {
      const v1574 = v1327[1];
      return;
      break;
      }
    case 'stake0_134': {
      const v1818 = v1327[1];
      return;
      break;
      }
    case 'unstake0_134': {
      const v2062 = v1327[1];
      undefined /* setApiDetails */;
      ;
      const v2132 = v1149[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v2137 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v2138 = v2132[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v2139 = [v2133, v2137, v2138];
      const v2140 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0'), v2139);
      ;
      const v2141 = v2140[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v2142 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '0')];
      const v2146 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1')];
      const v2147 = v2141[stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '2')];
      const v2148 = [v2142, v2146, v2147];
      const v2149 = stdlib.Array_set(v2140, stdlib.checkedBigNumberify('./index.rsh:176:21:dot', stdlib.UInt_max, '1'), v2148);
      ;
      const v2257 = v2062[stdlib.checkedBigNumberify('./index.rsh:255:9:spread', stdlib.UInt_max, '0')];
      const v2258 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
      const v2259 = stdlib.fromSome(v2258, stdlib.checkedBigNumberify('./index.rsh:146:77:decimal', stdlib.UInt_max, '0'));
      const v2260 = stdlib.le(v2257, v2259);
      stdlib.assert(v2260, {
        at: './index.rsh:264:14:application',
        fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v2261 = v2149[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
      const v2262 = v2261[stdlib.checkedBigNumberify('./index.rsh:265:35:application', stdlib.UInt_max, '0')];
      const v2263 = stdlib.le(v2257, v2262);
      stdlib.assert(v2263, {
        at: './index.rsh:265:14:application',
        fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v2264;
      const v2265 = stdlib.sub(v1167, v1139);
      const v2266 = stdlib.eq(v1142, stdlib.checkedBigNumberify('./index.rsh:189:28:decimal', stdlib.UInt_max, '0'));
      if (v2266) {
        v2264 = stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v2267 = stdlib.mul(v2265, v1102);
        const v2268 = stdlib.div(v2267, v1142);
        const v2269 = stdlib.add(v1140, v2268);
        v2264 = v2269;
        }
      const v2272 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1326), null);
      const v2273 = stdlib.fromSome(v2272, stdlib.checkedBigNumberify('./index.rsh:151:113:decimal', stdlib.UInt_max, '0'));
      const v2274 = stdlib.sub(v2264, v2273);
      const v2275 = stdlib.mul(v2259, v2274);
      const v2276 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1326), null);
      const v2277 = stdlib.fromSome(v2276, stdlib.checkedBigNumberify('./index.rsh:148:77:decimal', stdlib.UInt_max, '0'));
      const v2278 = stdlib.add(v2275, v2277);
      await stdlib.mapSet(map1, v1326, v2278);
      await stdlib.mapSet(map2, v1326, v2264);
      const v2280 = stdlib.sub(v2259, v2257);
      await stdlib.mapSet(map0, v1326, v2280);
      const v2286 = stdlib.sub(v2262, v2257);
      const v2289 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '1')];
      const v2290 = v2261[stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '2')];
      const v2291 = [v2286, v2289, v2290];
      const v2292 = stdlib.Array_set(v2149, stdlib.checkedBigNumberify('./index.rsh:273:47:application', stdlib.UInt_max, '0'), v2291);
      ;
      null;
      const v2297 = {
        reward: v2278,
        staked: v2280
        };
      const v2299 = await txn1.getOutput('unstake', 'v2297', ctc11, v2297);
      if (v668) {
        stdlib.protect(ctc0, await interact.out(v2062, v2299), {
          at: './index.rsh:256:7:application',
          fs: ['at ./index.rsh:256:7:application call to [unknown function] (defined at: ./index.rsh:256:7:function exp)', 'at ./index.rsh:276:17:application call to "callback" (defined at: ./index.rsh:262:29:function exp)', 'at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      const v2304 = stdlib.sub(v1142, v2257);
      const v4424 = v1138;
      const v4425 = v1167;
      const v4426 = v2264;
      const v4427 = v2304;
      const v4429 = v2292;
      const v4430 = v1150;
      const v4431 = stdlib.lt(v1138, v1100);
      if (v4431) {
        const v4433 = v1138;
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
    impure: [`claim()(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`],
    sigs: [`claim()(uint64,uint64)`, `global()(uint64,uint64,uint64)`, `initial()(uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64)`, `setTime(uint64)(uint64,uint64)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAUAAEEBQMIICigjQYblaqt2gOrmvLGCLz138MLvfqL1AT6yu6lAbqlzIICMDhASCYEAQABAQAE5SLx1yI1ADEYQQsNKmRJIls1ASEFWzUCMRkjEkEACjEAKCEJr2ZCCtk2GgAXSUEBoCI1BCM1BkkhCgxAAKxJIQsMQAB6SSEMDEAAYyEMEkQ0AUklDEAAKyUSRChkKWRQSTUDVyAINANXKAhQNANXMAhQNANXOAhQNANXQAhQNQdCCo4hBBJEKGQpZFBJNQNXIAg0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA1B0IKYiELEkQ2GgE1/yk0/1BCAS9JIQ0MQAASIQ0SRDYaATX/gAEDNP9QQgEWIQoSRCo1/yg0/1AhBa9QQgEESSEODEAAy0khDwxAAEshDxJENAFJJQxAAB8lEkQoZClkUEk1A1doCDQDV1gIUDQDV2AIUDUHQgnuIQQSRChkKWRQSTUDV1gINANXSAhQNANXUAhQNQdCCc4hDhJENAFJJQxAADYlEkQ2GgE1/yI0/4gJxVcACUk1/iNbNP4iVU0WIjT/iAmxVwkJSTX+I1s0/iJVTRZQNQdCCYwhBBJENhoBNf8iNP+ICY5XAAlJNf4jWzT+IlVNFiI0/4gJelcJCUk1/iNbNP4iVU0WUDUHQglVgc3I+h4SRDYaATX/gAECNP9QQgAdNhoCFzUENhoDNhoBF0khBAxABplJJAxABeUkEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKVwAgNf8hBls1/iEHWzX9IRBbNfwhEVs1+yESWzX6IRNbNfmBUFs1+IFYWzX3gWBbNfaBaFs19VdwIjX0gZIBWzXzgZoBWzXySTUFNfGABNWOHas08VCwNPEiVUmBAgxAAulJIQQMQAGOIQQSRDTxVwEINfA09FcAEUk171cACDTvVwgIUDTvVxABUDT0VxERUDXuNO5XERE17TTuVwARNO1XAAg07VcICFA07VcQAVBQNew08Bc16yIxAIgIV1cACUk16SNbNOkiVU016jTrNOoORDTsVwARSTXpIls16DTrNOgORDT1IhJBAAYiNedCABA09jTyNPcJNPkLNPUKCDXnNOo05yIxAIgICVcSCUk15SNbNOUiVU0JCyIxAIgH9FcJCUk15SNbNOUiVU0INeYxACgxAIgH3Ck05hZQNeVJVwAJNOVQTFcSCVBmMQAoMQCIB8ApNOcWUDXlVwASNOVQZjTqNOsJNeUxACgxAIgHoyk05RZQNeRXCRI05ExQZrEisgE067ISJLIQMQCyFDT+shGzgATRaXMpMQBQNOsWULCACAAAAAAAAAj5NOUWNOYWUFCwNOUWNOYWUDUHNP80/jT9NPw0+zT6NPk0+DTyNOc09TTrCTIGNOg06wkWNOlXCAhQNOlXEAFQNOxXERFQNPNCBgpINPFXAQg18DTwFzXvNPRXABFJNe4iWzTvCBY07lcICFA07lcQAVA09FcREVA17TTvNP6IBw807VcRETXsNPg0+w5ENPUiEkEABiI160IAEDT2NPI09wk0+Qs09QoINesiMQCIBrhXAAlJNekjWzTpIlVNSTXqNOsiMQCIBqBXEglJNegjWzToIlVNCQsiMQCIBotXCQlJNegjWzToIlVNCDXpMQAoMQCIBnMpNOkWUDXoSVcACTToUExXEglQZjEAKDEAiAZXKTTrFlA16FcAEjToUGY06jTvCDXoMQAoMQCIBjopNOgWUDXnVwkSNOdMUGaABDGPpQ4xAFA07xZQsIAIAAAAAAAAB9M06BY06RZQULA06BY06RZQNQc0/zT+NP00/DT7NPo0+TT4NPI06zT1NO8IMgY07VcAETTsVwAINOxXCAhQNOxXEAFQUDTzQgS2SSMMQADSSDTxVwEINfA09FcAEUk171cACDTvVwgIUDTvVxABUDT0VxERUDXuNO5XERE17TTwF0k17DT4DTTsNPsOEESACAAAAAAAAAa9IjEAiAV2VwAJSTXrI1s06yJVTRYiMQCIBWJXCQlJNesjWzTrIlVNFlBQsCIxAIgFS1cACUk16yNbNOsiVU0WIjEAiAU3VwkJSTXrI1s06yJVTRZQNQc0/zT+NP00/DT7NPo0+TTsNPc09jT1MgY07lcAETTtVwAINO1XCAhQNO1XEAFQUDTzQgPeSDT0VwARSTXwVwAINPBXCAhQNPBXEAFQNPRXERFQNe8071cRETXuNO9XABE07lcACDTuVwgIUDTuVxABUFA17SIxAIgErFcJCUk16yNbNOsiVU017DTtVxERSTXrIls16jTsNOoMRDT1IhJBAAYiNelCABA09jTyNPcJNPkLNPUKCDXpIjEAiARoVwAJSTXnI1s05yJVTUk16DTpIjEAiARQVxIJSTXmI1s05iJVTQkLNOwINecxACgxAIgENCk05xZQNeZJVwAJNOZQTFcSCVBmMQAoMQCIBBgpNOkWUDXmVwASNOZQZjEAKDEAiAQCgAkBAAAAAAAAAAA15klXAAk05lBMVxIJUGaACAAAAAAAAAWmNOgWIQWvUFCwNOgWIQWvUDUHNOc06gxBAE6xIrIBNOeyEiSyEDEAshQ0/bIRsysxAFCwNP80/jT9NPw0+zT6NPk0+DTyNOk09TIGNO1XABE06jTnCRY061cICFA061cQAVBQNPNCAmIrMQBQsDT/NP40/TT8NPs0+jT5NPg08jTpNPUyBjTtNPNCAj5IIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBls1/iEHWzX9V2AiNfyABKdlxLSwsSKyATQDgYIBW7III7IQNP+yB7OxIrIBNPxXEREiW7ISJLIQNP+yFDT9shGzsSKyATT8VwARIluyEiSyEDT/shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAkxJIwxAAIcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQdbNf4hEls1/VdQIjX8gASai5F0sDT8VxERNfs0/TT+iAKCNP8xABJENP80AyEGWzT+NAMhEFs0AyERWzT9NAMhE1siIiIiMgY0/FcAETT7Ils0/QgWNPtXCAhQNPtXEAFQUCJCAQNIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSiJbNf8hBVs1/oEQWzX9gRhbNfwhBls1+yEHWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsCEIiAHOgRGvSTX5SVA1+DT/NP4TRDT4VwARNfchBa8091cICFA091cQAVA0+FcREVA19iEIiAGbsSKyASKyEiSyEDIKshQ0/7IRszT2VxERNfU09lcAESEFrzT1VwgIUDT1VxABUFA19CEIiAFlsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPRQKEsBVwByZ0gjNQEyBjUCQgDXNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT5NPYMQQBONPI08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP5QNP8WUDT5FlAoSwFXAH9nKUsBV38jZ0glNQEyBjUCQgBlgARcBkX5sDTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/C2dIIQQ1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v1097",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1098",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1099",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1102",
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
                "name": "v1097",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1098",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1099",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1102",
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
                    "name": "_claim0_134",
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
                    "name": "_setTime0_134",
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
                    "name": "_stake0_134",
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
                    "name": "_unstake0_134",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1327",
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
    "name": "_reach_oe_v1446",
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
    "name": "_reach_oe_v1725",
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
    "name": "_reach_oe_v2003",
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
    "name": "_reach_oe_v2297",
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
                    "name": "_claim0_134",
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
                    "name": "_setTime0_134",
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
                    "name": "_stake0_134",
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
                    "name": "_unstake0_134",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1327",
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
        "name": "v4446",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200433d3803806200433d83398101604081905262000026916200058d565b6000805543600355620000386200031b565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600a6200026e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e929062000298565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a4919060019062000298565b60a0820152620001b73415600b6200026e565b620001c1620003b3565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501529084015160e084015260016000819055439055516200023e9183910162000640565b604051602081830303815290604052600290805190602001906200026492919062000415565b5050505062000749565b81620002945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002a2620004a4565b60005b6002811015620002f857848160028110620002c457620002c46200062a565b6020020151828260028110620002de57620002de6200062a565b602002015280620002ef81620006e2565b915050620002a5565b50818184600281106200030f576200030f6200062a565b60200201529392505050565b604080516101208101909152600060c0820181815260e0830182905261010083019190915281526020810162000350620004a4565b815260408051606081018252600080825260208281018290529282015291019081526020016200037f620004a4565b81526040805160608101825260008082526020828101829052928201529101908152602001620003ae620004a4565b905290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620003ae620004a4565b82805462000423906200070c565b90600052602060002090601f01602090048101928262000447576000855562000492565b82601f106200046257805160ff191683800117855562000492565b8280016001018555821562000492579182015b828111156200049257825182559160200191906001019062000475565b50620004a0929150620004f1565b5090565b60405180604001604052806002905b620004da604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004b35790505090565b5b80821115620004a05760008155600101620004f2565b604080519081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200053957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200058857600080fd5b919050565b600081830360e0811215620005a157600080fd5b620005ab62000508565b8351815260c0601f1983011215620005c257600080fd5b620005cc6200053f565b9150620005dc6020850162000570565b8252620005ec6040850162000570565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060925082860151838601526080860151608086015260a086015160a086015260c086015160c086015260e086015160e0860160005b6002811015620006d65782518051835285810151868401528401511515848301529184019190850190600101620006a4565b50505050505092915050565b60006000198214156200070557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200072157607f821691505b602082108114156200074357634e487b7160e01b600052602260045260246000fd5b50919050565b613be480620007596000396000f3fe6080604052600436106100eb5760003560e01c80637efdbd7111610084578063a694fc3a11610056578063a694fc3a14610253578063ab53f2c614610266578063bb806dc914610289578063cadc2e7a146102e957005b80637efdbd71146101d4578063817d57f3146101e75780638323075714610207578063a05f99061461021c57005b80633bc5b7bf116100bd5780633bc5b7bf146101795780633beb26c4146101a65780634e71d92d146101b957806373b4522c146101c157005b80630ff1680e146100f45780631e93b0f1146101345780632c10a159146101535780632e17de781461016657005b366100f257005b005b34801561010057600080fd5b5061011461010f36600461327a565b610309565b604080518251815260209283015192810192909252015b60405180910390f35b34801561014057600080fd5b506003545b60405190815260200161012b565b6100f2610161366004613297565b6105e0565b6101146101743660046132af565b610604565b34801561018557600080fd5b5061019961019436600461327a565b61066e565b60405161012b91906132de565b6101146101b43660046132af565b61069a565b610114610703565b6100f26101cf366004613297565b61075f565b6100f26101e2366004613315565b61077f565b3480156101f357600080fd5b5061019961020236600461327a565b61079f565b34801561021357600080fd5b50600154610145565b34801561022857600080fd5b506102316107c5565b604080518251815260208084015190820152918101519082015260600161012b565b6101146102613660046132af565b610aa9565b34801561027257600080fd5b5061027b610b13565b60405161012b929190613353565b34801561029557600080fd5b5061029e610bb0565b60405161012b919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b3480156102f557600080fd5b5061019961030436600461327a565b610e36565b6040805180820190915260008082526020820152600160005414156103d8576000600280546103379061338d565b80601f01602080910402602001604051908101604052809291908181526020018280546103639061338d565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b50505050508060200190518101906103c89190613554565b90506103d660006009610e5c565b505b60036000541415610524576000600280546103f29061338d565b80601f016020809104026020016040519081016040528092919081815260200182805461041e9061338d565b801561046b5780601f106104405761010080835404028352916020019161046b565b820191906000526020600020905b81548152906001019060200180831161044e57829003601f168201915b505050505080602001905181019061048391906135fe565b90506104a5604080516060810182526000602082018181529282015290815290565b60016104b085610e82565b5160018111156104c2576104c26132c8565b146104ce5760006104dc565b6104d784610e82565b604001515b81515260016104ea85610f54565b5160018111156104fc576104fc6132c8565b14610508576000610516565b61051184610f54565b604001515b815160200152519392505050565b600560005414156105cf5760006002805461053e9061338d565b80601f016020809104026020016040519081016040528092919081815260200182805461056a9061338d565b80156105b75780601f1061058c576101008083540402835291602001916105b7565b820191906000526020600020905b81548152906001019060200180831161059a57829003601f168201915b505050505080602001905181019061048391906136ab565b6105db60006009610e5c565b919050565b6105e8612bc0565b6106006105fa3684900384018461377b565b82610fe1565b5050565b6040805180820190915260008082526020820152610620612bc0565b610628612c44565b610630612c5e565b604080516020808201835287825260808401919091526003835281518082019092528282528301526106628284611268565b50506060015192915050565b604080516060810182526000808252602082018190529181019190915261069482610e82565b92915050565b60408051808201909152600080825260208201526106b6612bc0565b6106be612c44565b6106c6612c5e565b6040805160208082018352878252838301919091526001835281518082019092528282528301526106f78284611268565b50506020015192915050565b604080518082019091526000808252602082015261071f612bc0565b610727612c44565b61072f612c5e565b6000602082810182905290825260408051808301909152828152908301526107578284611268565b505051919050565b610767612bc0565b6106006107793684900384018461377b565b82612522565b610787612bc0565b610600610799368490038401846137f5565b82611268565b6040805160608101825260008082526020820181905291810191909152610694826126d3565b6107e960405180606001604052806000815260200160008152602001600081525090565b600160005414156108a4576000600280546108039061338d565b80601f016020809104026020016040519081016040528092919081815260200182805461082f9061338d565b801561087c5780601f106108515761010080835404028352916020019161087c565b820191906000526020600020905b81548152906001019060200180831161085f57829003601f168201915b50505050508060200190518101906108949190613554565b90506108a260006007610e5c565b505b6003600054141561099e576000600280546108be9061338d565b80601f01602080910402602001604051908101604052809291908181526020018280546108ea9061338d565b80156109375780601f1061090c57610100808354040283529160200191610937565b820191906000526020600020905b81548152906001019060200180831161091a57829003601f168201915b505050505080602001905181019061094f91906135fe565b905061097860408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260c082015181516020015260e09091015181516040015251919050565b60056000541415610a9a576000600280546109b89061338d565b80601f01602080910402602001604051908101604052809291908181526020018280546109e49061338d565b8015610a315780601f10610a0657610100808354040283529160200191610a31565b820191906000526020600020905b815481529060010190602001808311610a1457829003601f168201915b5050505050806020019051810190610a4991906136ab565b9050610a7260408051608081018252600060208201818152928201819052606082015290815290565b6101408201518151526101008201518151602001526101209091015181516040015251919050565b610aa660006007610e5c565b90565b6040805180820190915260008082526020820152610ac5612bc0565b610acd612c44565b610ad5612c5e565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610b078284611268565b50506040015192915050565b600060606000546002808054610b289061338d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b549061338d565b8015610ba15780601f10610b7657610100808354040283529160200191610ba1565b820191906000526020600020905b815481529060010190602001808311610b8457829003601f168201915b50505050509050915091509091565b610bb8612ca5565b60016000541415610c7357600060028054610bd29061338d565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfe9061338d565b8015610c4b5780601f10610c2057610100808354040283529160200191610c4b565b820191906000526020600020905b815481529060010190602001808311610c2e57829003601f168201915b5050505050806020019051810190610c639190613554565b9050610c7160006008610e5c565b505b60036000541415610d7f57600060028054610c8d9061338d565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb99061338d565b8015610d065780601f10610cdb57610100808354040283529160200191610d06565b820191906000526020600020905b815481529060010190602001808311610ce957829003601f168201915b5050505050806020019051810190610d1e91906135fe565b9050610d28612ce6565b60208083015182516001600160a01b03918216905260408085015184519216919092015260608084015183519092019190915260808084015183519092019190915260a09092015181519092019190915251919050565b60056000541415610e2a57600060028054610d999061338d565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc59061338d565b8015610e125780601f10610de757610100808354040283529160200191610e12565b820191906000526020600020905b815481529060010190602001808311610df557829003601f168201915b5050505050806020019051810190610d1e91906136ab565b610aa660006008610e5c565b604080516060810182526000808252602082018190529181019190915261069482610f54565b816106005760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610ece57610ece6132c8565b1415610f45576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610f0f57610f0f6132c8565b6001811115610f2057610f206132c8565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115610fa057610fa06132c8565b1415610f45576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610f0f57610f0f6132c8565b610ff1600160005414600f610e5c565b815161100c90158061100557508251600154145b6010610e5c565b60008080556002805461101e9061338d565b80601f016020809104026020016040519081016040528092919081815260200182805461104a9061338d565b80156110975780601f1061106c57610100808354040283529160200191611097565b820191906000526020600020905b81548152906001019060200180831161107a57829003601f168201915b50505050508060200190518101906110af9190613554565b90506110d860408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16111233415600c610e5c565b60a082015160e0830151602001515161113c91906138d2565b81515260e08201805160209081015181015183518201529051015160409081015182519015159082015282015160a08301516111859161117e91339190612760565b600d610e5c565b815161119d906001600160a01b03163314600e610e5c565b6111a5612cf9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015282850180516000908190528151909401849052805190940183905283519091019190915290514391015260e083015182516112429190600190612778565b60208201805160a0019190915251600060c090910152611261816127ec565b5050505050565b6112786005600054146025610e5c565b815161129390158061128c57508251600154145b6026610e5c565b6000808055600280546112a59061338d565b80601f01602080910402602001604051908101604052809291908181526020018280546112d19061338d565b801561131e5780601f106112f35761010080835404028352916020019161131e565b820191906000526020600020905b81548152906001019060200180831161130157829003601f168201915b505050505080602001905181019061133691906136ab565b9050611340612d47565b7f1a611c44112eab8f114b8fd7a9a2b4008e36120a9e4f398eb5de7248ee9dc8328460405161136f91906138ea565b60405180910390a16000602085015151516003811115611391576113916132c8565b14156118f5576113a334156014610e5c565b61016082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516113df9190600090612778565b81602001819052506114016113fa3384602001516000612760565b6015610e5c565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516114489190600190612778565b816060018190525061146a6114633384604001516000612760565b6016610e5c565b600161147533610f54565b516001811115611487576114876132c8565b146114935760006114a1565b61149c33610f54565b604001515b60808201819052606082015160200151516114be91106017610e5c565b6101408201516114d457600060a082015261151f565b8161014001518260c00151836101000151846101a001516114f59190613947565b6114ff919061395e565b611509919061397d565b82610120015161151991906138d2565b60a08201525b600161152a33610e82565b51600181111561153c5761153c6132c8565b14611548576000611556565b61155133610e82565b604001515b60c08201526080810151600161156b336126d3565b51600181111561157d5761157d6132c8565b14611589576000611597565b611592336126d3565b604001515b8260a001516115a69190613947565b8260c001516115b5919061395e565b6115bf91906138d2565b60e08201908152336000908152600560208181526040808420805460ff1990811660019081178355965187830190815560068552838720805483168917815560a08a0151908901559484528154169095179094559082905560c084015161010085018051919091528051820192909252905182518151815290820151918101919091527fc5ac2608bb32407e52541db8f60714dcfb91db501f932c712a561fd730cc6e95910160405180910390a161010081015183526060810151602001515160e082015110156118005760e0810151606082015160200151516116a39190613947565b610120820180519190915260608201805160209081015181015183518201529051015160409081015191519115159181019190915282015160e08201516116ec919033906129c1565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a1611727612cf9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c08089015187519091015260e08801518487018051919091526101a089015181519095019490945286015183519094019390935261014086015182518201529051439201919091528201516101208301516117d89190600190612778565b60208201805160a00191909152610180840151905160c001526117fa816127ec565b5061251c565b6040513381527fc884ef83c62fb247b61c9482500d2474d59448e58cefa0f9710d3a6f5323ef5e9060200160405180910390a161183b612cf9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a080880151865182015260c080890151875182015260e08901518588018051919091526101a08a0151815190960195909552878201518551909601959095526101408801518451840152835143920191909152908501518251909101526101808501519051909101526117fa816127ec565b600160208501515151600381111561190f5761190f6132c8565b1415611baf576020840151516040015161014082015261193134156018610e5c565b6101608281018051515191830180519290925280515160209081015183519091015280515160409081015183519015159101525190516119749190600090612778565b8161018001819052506119976119903384602001516000612760565b6019610e5c565b61018081018051602090810151516101a0840180519190915282518201518201518151830152915101516040908101519151911515918101919091528201516119ee906119e79033906000612760565b601a610e5c565b611a228260e001518261014001516000015111611a0c576000611a1b565b60808301516101408301515111155b601b610e5c565b6001611a2d33610e82565b516001811115611a3f57611a3f6132c8565b14611a4b576000611a59565b611a5433610e82565b604001515b6101c0820151526001611a6b33610f54565b516001811115611a7d57611a7d6132c8565b14611a89576000611a97565b611a9233610f54565b604001515b6101c08201805160209081019290925251604080518251815291830151928201929092527ff0ae68ce9a725d61858f1251aaf8402490274e4cb357a3b4d93f819ce765f953910160405180910390a16101c08101516020840152611af9612cf9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152608080870151855182015260a08088015186519091015260c08088015186519091015261014080870151518487018051919091526101008901518151909501949094526101208801518451909501949094529286015182519091015251439101526101808201516101a08301516117d89190600190612778565b6002602085015151516003811115611bc957611bc96132c8565b141561202a57602084015151606001516101e0820152611beb3415601c610e5c565b6101e0810151516101608301515151611c0491906138d2565b610200820180519190915261016083018051516020908101518351909101528051516040908101518351901515910152519051611c449190600090612778565b61022082015260208201516101e082015151611c6d91611c6691339190612760565b601d610e5c565b610220810180516020908101515161024084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151611cc490611cbd9033906000612760565b601e610e5c565b611cda82608001518360e001511115601f610e5c565b610140820151611cf1576000610260820152611d3d565b8161014001518260c00151836101000151846101a00151611d129190613947565b611d1c919061395e565b611d26919061397d565b826101200151611d3691906138d2565b6102608201525b6001611d4833610e82565b516001811115611d5a57611d5a6132c8565b14611d66576000611d74565b611d6f33610e82565b604001515b6102808201526001611d8533610f54565b516001811115611d9757611d976132c8565b14611da3576000611db1565b611dac33610f54565b604001515b6001611dbc336126d3565b516001811115611dce57611dce6132c8565b14611dda576000611de8565b611de3336126d3565b604001515b826102600151611df89190613947565b826102800151611e08919061395e565b611e1291906138d2565b6102a082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556102608301519101556101e081015151610280820151611e7491906138d2565b6102c0820190815233600081815260046020908152604091829020805460ff19166001908117825594519401939093556101e0840151518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a16102c08101516102e082018051919091526102a0820151815160200152516040517fad62b6ee11212cf2cda5075f9ae64ed38a280df409c428988228cc01233ac08591611f4091815181526020918201519181019190915260400190565b60405180910390a16102e08101516040840152611f5b612cf9565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526102608401519051909101526101e082015151610140840151611ffc91906138d2565b6020820180516060019190915251436080909101526102208201516102408301516117d89190600190612778565b6003602085015151516003811115612044576120446132c8565b141561251c57602080850151516080015161030083015261206790341590610e5c565b61016082018051515161032083018051919091528151516020908101518251909101528151516040908101518251901515910152905190516120ac9190600090612778565b8161034001819052506120cf6120c83384602001516000612760565b6021610e5c565b610340810180516020908101515161036084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161211a9190600190612778565b81610380018190525061213d6121363384604001516000612760565b6022610e5c565b600161214833610e82565b51600181111561215a5761215a6132c8565b14612166576000612174565b61216f33610e82565b604001515b6103a08201819052610300820151516121909110156023610e5c565b6103808101515151610300820151516121ac9110156024610e5c565b6101408201516121c35760006103c082015261220f565b8161014001518260c00151836101000151846101a001516121e49190613947565b6121ee919061395e565b6121f8919061397d565b82610120015161220891906138d2565b6103c08201525b600161221a33610f54565b51600181111561222c5761222c6132c8565b14612238576000612246565b61224133610f54565b604001515b6001612251336126d3565b516001811115612263576122636132c8565b1461226f57600061227d565b612278336126d3565b604001515b826103c0015161228d9190613947565b826103a0015161229d919061395e565b6122a791906138d2565b6103e082019081523360009081526005602090815260408083208054600160ff199182168117835595519186019190915560069092529091208054909116821781556103c0830151910155610300810151516103a08201516123099190613947565b6104008201908152336000908152600460205260409020805460ff191660019081178255915191015561030081015151610380820151515161234b9190613947565b610420820180519190915261038082018051516020908101518351820152905151604090810151925192151592019190915282015161030082015151612393919033906129c1565b610300810151516040805133815260208101929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a161040081015161044082018051919091526103e0820151815160200152516040517f325a9715aff659b04f837cf31dfb5244c90cdfa9e523e5d9b584b561fc8f75eb9161243291815181526020918201519181019190915260400190565b60405180910390a1610440810151606084015261244d612cf9565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184519091015260808086015184519091015260a08086015184519091015260c08086015184519091015260e08501518184018051919091526101a08601518151909201919091526103c0840151905190910152610300820151516101408401516124ee9190613947565b6020820180516060019190915251436080909101526103808201516104208301516117d89190600090612778565b50505050565b6125326003600054146012610e5c565b815161254d90158061254657508251600154145b6013610e5c565b60008080556002805461255f9061338d565b80601f016020809104026020016040519081016040528092919081815260200182805461258b9061338d565b80156125d85780601f106125ad576101008083540402835291602001916125d8565b820191906000526020600020905b8154815290600101906020018083116125bb57829003601f168201915b50505050508060200190518101906125f091906135fe565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a161263e34156011610e5c565b80516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561267c573d6000803e3d6000fd5b506040810151815161012083015161269e92919060015b6020020151516129c1565b602081015181516101208301516126b89291906000612693565b600080805560018190556126ce90600290612ff3565b505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561271f5761271f6132c8565b1415610f45576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115610f0f57610f0f6132c8565b600061276e838530856129d5565b90505b9392505050565b61278061302d565b60005b60028110156127cc5784816002811061279e5761279e6138a6565b60200201518282600281106127b5576127b56138a6565b6020020152806127c48161399f565b915050612783565b50818184600281106127e0576127e06138a6565b60200201529392505050565b80516080015160208201515110156128e957612806613078565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152855160c0908101518187015283870180515160e0880152805185015161010088015280518601516101208801528051909301516101408701528251909101516101608601528151015161018085015251516101a084015260056000554360015590516128c5918391016139f8565b604051602081830303815290604052600290805190602001906126ce929190613108565b6040517fde386e12d6c97acd73514c71490d6d5114424ddc93ef1080bd05ffe08c20868d90600090a161291a61318c565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015181850152845160809081015190850152845160a09081015181860152828601805184015160c080880191909152815186015160e088015281519093015161010087015280519091015161012086015251015161014084015260036000554360015590516128c591839101613ac8565b50565b6129cc838383612aaf565b6126ce57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612a3c91613b75565b60006040518083038185875af1925050503d8060008114612a79576040519150601f19603f3d011682016040523d82523d6000602084013e612a7e565b606091505b5091509150612a8f82826001612b80565b5080806020019051810190612aa49190613b91565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612b0e91613b75565b60006040518083038185875af1925050503d8060008114612b4b576040519150601f19603f3d011682016040523d82523d6000602084013e612b50565b606091505b5091509150612b6182826002612b80565b5080806020019051810190612b769190613b91565b9695505050505050565b60608315612b8f575081612771565b825115612b9f5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610e79565b905290565b6040805160c0810190915260006080820181815260a083019190915281908152602001612c00604051806040016040528060008152602001600081525090565b8152602001612c22604051806040016040528060008152602001600081525090565b8152602001612bbb604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001612bbb613207565b6040805160a0810182526000808252602080830182905283518082018552828152838501528351808201855282815260608401528351908101909352825290608082015290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060200160405280612bbb612ca5565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925290815260208101612bbb61321a565b604080516104c081019091526000610460820181815261048083018290526104a0830191909152815260208101612d7c61302d565b81526040805160608101825260008082526020828101829052928201529101908152602001612da961302d565b815260200160008152602001600081526020016000815260200160008152602001612de7604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612e226040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612e4f61302d565b81526040805160608101825260008082526020828101829052928201529101908152602001612e91604051806040016040528060008152602001600081525090565b8152602001612eac6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612ed961302d565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200160008152602001612f37604051806040016040528060008152602001600081525090565b8152602001612f526040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612f7f61302d565b81526040805160608101825260008082526020828101829052928201529101908152602001612fac61302d565b815260200160008152602001600081526020016000815260200160008152602001612c22604051806060016040528060008152602001600081526020016000151581525090565b508054612fff9061338d565b6000825580601f1061300f575050565b601f0160209004906000526020600020908101906129be9190613250565b60405180604001604052806002905b613062604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161303c5790505090565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016130f461302d565b815260200160008152602001600081525090565b8280546131149061338d565b90600052602060002090601f016020900481019282613136576000855561317c565b82601f1061314f57805160ff191683800117855561317c565b8280016001018555821561317c579182015b8281111561317c578251825591602001919060010190613161565b50613188929150613250565b5090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016131fa61302d565b8152602001600081525090565b6040518060200160405280612bbb612c5e565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016131fa61302d565b5b808211156131885760008155600101613251565b6001600160a01b03811681146129be57600080fd5b60006020828403121561328c57600080fd5b813561277181613265565b6000604082840312156132a957600080fd5b50919050565b6000602082840312156132c157600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106132f5576132f56132c8565b808352506020830151151560208301526040830151604083015292915050565b600060c082840312156132a957600080fd5b60005b8381101561334257818101518382015260200161332a565b8381111561251c5750506000910152565b8281526040602082015260008251806040840152613378816060850160208701613327565b601f01601f1916919091016060019392505050565b600181811c908216806133a157607f821691505b602082108114156132a957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156133fb576133fb6133c2565b60405290565b6040516060810167ffffffffffffffff811182821017156133fb576133fb6133c2565b604051610160810167ffffffffffffffff811182821017156133fb576133fb6133c2565b6040516101c0810167ffffffffffffffff811182821017156133fb576133fb6133c2565b6040516020810167ffffffffffffffff811182821017156133fb576133fb6133c2565b60405160a0810167ffffffffffffffff811182821017156133fb576133fb6133c2565b80516105db81613265565b80151581146129be57600080fd5b600082601f8301126134dc57600080fd5b6134e46133d8565b8060c08401858111156134f657600080fd5b845b8181101561354957606081880312156135115760008081fd5b613519613401565b8151815260208083015181830152604080840151613536816134bd565b90830152908552909301926060016134f8565b509095945050505050565b60006101a0828403121561356757600080fd5b604051610100810181811067ffffffffffffffff8211171561358b5761358b6133c2565b604052825161359981613265565b81526135a7602084016134b2565b60208201526135b8604084016134b2565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526135f28460e085016134cb565b60e08201529392505050565b6000610200828403121561361157600080fd5b613619613424565b613622836134b2565b8152613630602084016134b2565b6020820152613641604084016134b2565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613693858286016134cb565b908201526101e0929092015161014083015250919050565b600061026082840312156136be57600080fd5b6136c6613448565b6136cf836134b2565b81526136dd602084016134b2565b60208201526136ee604084016134b2565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140808401518183015250610160613758858286016134cb565b90820152610220830151610180820152610240909201516101a083015250919050565b60006040828403121561378d57600080fd5b6137956133d8565b8235815260208301356137a7816134bd565b60208201529392505050565b6000602082840312156137c557600080fd5b6040516020810181811067ffffffffffffffff821117156137e8576137e86133c2565b6040529135825250919050565b600081830360c081121561380857600080fd5b6138106133d8565b8335815260a0601f198301121561382657600080fd5b61382e61346c565b915061383861348f565b60208501356004811061384a57600080fd5b8152604085013561385a816134bd565b602082015261386c86606087016137b3565b604082015261387e86608087016137b3565b60608201526138908660a087016137b3565b6080820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156138e5576138e56138bc565b500190565b81518152602082015151805160c0830191906004811061390c5761390c6132c8565b806020850152506020810151151560408401526040810151516060840152606081015151608084015260808101515160a08401525092915050565b600082821015613959576139596138bc565b500390565b6000816000190483118215151615613978576139786138bc565b500290565b60008261399a57634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156139b3576139b36138bc565b5060010190565b8060005b600281101561251c5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016139be565b81516001600160a01b0316815261026081016020830151613a2460208401826001600160a01b03169052565b506040830151613a3f60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613aa9828501826139ba565b50506101808301516102208301526101a0909201516102409091015290565b81516001600160a01b0316815261020081016020830151613af460208401826001600160a01b03169052565b506040830151613b0f60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613b61828501826139ba565b50506101408301516101e083015292915050565b60008251613b87818460208701613327565b9190910192915050565b600060208284031215613ba357600080fd5b8151612771816134bd56fea2646970667358221220f805df2debd7e239a9010e8037391a46c0186be4d8992204656895199d8a95b664736f6c634300080c0033`,
  BytecodeLen: 17213,
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
    at: './index.rsh:340:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:344:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:176:21:after expr stmt semicolon',
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
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  setTime: setTime,
  stake: stake,
  unstake: unstake
  };

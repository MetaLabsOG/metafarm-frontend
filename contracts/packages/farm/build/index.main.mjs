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
  return {
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
  const ctc6 = stdlib.T_Struct([['stakeToken', ctc1], ['rewardToken', ctc1], ['beginBlock', ctc2], ['endBlock', ctc2], ['totalRewardAmount', ctc2], ['totalStaked', ctc2]]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc8;
  
  const map2_ctc = ctc8;
  
  
  return {
    infos: {
      State: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v717, v718, v719, v720, v721, v722, v723, v724, v740] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770] = svs;
              return (await ((async () => {
                
                const v772 = {
                  beginBlock: v720,
                  endBlock: v721,
                  rewardToken: v719,
                  stakeToken: v718,
                  totalRewardAmount: v722,
                  totalStaked: v763
                  };
                
                return v772;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5],
      4: [ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc5]
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
    Farm_claim0_73: ctc5,
    Farm_getInfo0_73: ctc5,
    Farm_stake0_73: ctc6,
    Farm_unstake0_73: ctc6
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
  
  
  const v700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v701 = [v700, v700];
  const v707 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:106:38:application',
    fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v708 = v707.stakeToken;
  const v709 = v707.rewardToken;
  const v710 = v707.beginBlock;
  const v711 = v707.endBlock;
  const v712 = v707.totalRewardAmount;
  const v713 = stdlib.tokenEq(v708, v709);
  const v714 = v713 ? false : true;
  stdlib.assert(v714, {
    at: './index.rsh:108:13:application',
    fs: ['at ./index.rsh:99:15:application call to [unknown function] (defined at: ./index.rsh:99:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v715 = stdlib.sub(v711, v710);
  const v716 = stdlib.div(v712, v715);
  
  const txn1 = await (ctc.sendrecv({
    args: [v708, v709, v710, v711, v712, v716],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:122:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v718, v719, v720, v721, v722, v723], secs: v725, time: v724, didSend: v44, from: v717 } = txn1;
      
      const v726 = stdlib.tokenEq(v718, v719);
      const v727 = v726 ? false : true;
      ;
      const v728 = v701[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0)];
      const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
      const v731 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
      const v732 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v730, v731];
      const v733 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0), v732);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v718
        });
      const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
      const v737 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
      const v738 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
      const v739 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v737, v738];
      const v740 = stdlib.Array_set(v733, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1), v739);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v719
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
  const {data: [v718, v719, v720, v721, v722, v723], secs: v725, time: v724, didSend: v44, from: v717 } = txn1;
  const v726 = stdlib.tokenEq(v718, v719);
  const v727 = v726 ? false : true;
  stdlib.assert(v727, {
    at: './index.rsh:122:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v728 = v701[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0)];
  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v731 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
  const v732 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v730, v731];
  const v733 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0), v732);
  ;
  const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v737 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v738 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
  const v739 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v737, v738];
  const v740 = stdlib.Array_set(v733, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1), v739);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v717, v718, v719, v720, v721, v722, v723, v724, v740],
    evt_cnt: 0,
    funcNum: 1,
    lct: v724,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 0), [[v722, v719]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v744, time: v743, didSend: v51, from: v742 } = txn2;
      
      ;
      const v745 = v740[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
      const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 0)];
      const v747 = stdlib.add(v746, v722);
      const v750 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
      const v751 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 2)];
      const v752 = [v747, v750, v751];
      const v753 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1), v752);
      sim_r.txns.push({
        amt: v722,
        kind: 'to',
        tok: v719
        });
      const v754 = stdlib.addressEq(v717, v742);
      ;
      
      const v761 = v724;
      const v762 = stdlib.checkedBigNumberify('./index.rsh:196:5:decimal', stdlib.UInt_max, 0);
      const v763 = stdlib.checkedBigNumberify('./index.rsh:194:5:decimal', stdlib.UInt_max, 0);
      const v764 = v743;
      const v770 = v753;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v719
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v718
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
    tys: [ctc9, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v744, time: v743, didSend: v51, from: v742 } = txn2;
  ;
  const v745 = v740[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
  const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 0)];
  const v747 = stdlib.add(v746, v722);
  const v750 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
  const v751 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 2)];
  const v752 = [v747, v750, v751];
  const v753 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1), v752);
  ;
  const v754 = stdlib.addressEq(v717, v742);
  stdlib.assert(v754, {
    at: './index.rsh:125:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:181:22:application',
    fs: ['at ./index.rsh:180:7:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v761 = v724;
  let v762 = stdlib.checkedBigNumberify('./index.rsh:196:5:decimal', stdlib.UInt_max, 0);
  let v763 = stdlib.checkedBigNumberify('./index.rsh:194:5:decimal', stdlib.UInt_max, 0);
  let v764 = v743;
  let v770 = v753;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn3;
    switch (v905[0]) {
      case 'Farm_claim0_73': {
        const v908 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v971 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v972 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v977 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v978 = [v972, v976, v977];
        const v979 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v978);
        ;
        const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v981 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v985 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v986 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v987 = [v981, v985, v986];
        const v988 = stdlib.Array_set(v979, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v987);
        ;
        let v990;
        const v991 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v991) {
          v990 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v993 = stdlib.sub(v764, v761);
          const v994 = stdlib.mul(v993, v723);
          const v995 = stdlib.div(v994, v763);
          const v996 = stdlib.add(v762, v995);
          v990 = v996;
          }
        const v997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v998 = stdlib.fromSome(v997, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v999 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1000 = stdlib.fromSome(v999, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1001 = stdlib.sub(v990, v1000);
        const v1002 = stdlib.mul(v998, v1001);
        const v1003 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1004 = stdlib.fromSome(v1003, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1005 = stdlib.add(v1002, v1004);
        await stdlib.mapSet(map1, v904, v1005);
        await stdlib.mapSet(map2, v904, v990);
        await stdlib.mapSet(map1, v904, stdlib.checkedBigNumberify('./index.rsh:246:25:decimal', stdlib.UInt_max, 0));
        const v1008 = null;
        await txn3.getOutput('Farm_claim', 'v1008', ctc0, v1008);
        const v1016 = v988[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
        const v1017 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 0)];
        const v1024 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
        const v1025 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 2)];
        const v1026 = [v1017, v1024, v1025];
        const v1027 = stdlib.Array_set(v988, stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1), v1026);
        const cv761 = v764;
        const cv762 = v990;
        const cv763 = v763;
        const cv764 = v906;
        const cv770 = v1027;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_getInfo0_73': {
        const v1137 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v1200 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1201 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1205 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1206 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1207 = [v1201, v1205, v1206];
        const v1208 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1207);
        ;
        const v1209 = v1208[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1216 = [v1210, v1214, v1215];
        const v1217 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1216);
        ;
        let v1259;
        const v1260 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1260) {
          v1259 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1262 = stdlib.sub(v764, v761);
          const v1263 = stdlib.mul(v1262, v723);
          const v1264 = stdlib.div(v1263, v763);
          const v1265 = stdlib.add(v762, v1264);
          v1259 = v1265;
          }
        const v1266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1267 = stdlib.fromSome(v1266, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1268 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1269 = stdlib.fromSome(v1268, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1270 = stdlib.sub(v1259, v1269);
        const v1271 = stdlib.mul(v1267, v1270);
        const v1272 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1273 = stdlib.fromSome(v1272, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1274 = stdlib.add(v1271, v1273);
        await stdlib.mapSet(map1, v904, v1274);
        await stdlib.mapSet(map2, v904, v1259);
        const v1281 = {
          reward: v1274,
          staked: v1267
          };
        await txn3.getOutput('Farm_getInfo', 'v1281', ctc8, v1281);
        const cv761 = v764;
        const cv762 = v1259;
        const cv763 = v763;
        const cv764 = v906;
        const cv770 = v1217;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_stake0_73': {
        const v1366 = v905[1];
        undefined /* setApiDetails */;
        const v1385 = v1366[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, 0)];
        ;
        const v1429 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1430 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1431 = stdlib.add(v1430, v1385);
        const v1434 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1435 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1436 = [v1431, v1434, v1435];
        const v1437 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1436);
        ;
        const v1438 = v1437[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1439 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1443 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1444 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1445 = [v1439, v1443, v1444];
        const v1446 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1445);
        ;
        let v1519;
        const v1520 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1520) {
          v1519 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1522 = stdlib.sub(v764, v761);
          const v1523 = stdlib.mul(v1522, v723);
          const v1524 = stdlib.div(v1523, v763);
          const v1525 = stdlib.add(v762, v1524);
          v1519 = v1525;
          }
        const v1526 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1528 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1529 = stdlib.fromSome(v1528, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1530 = stdlib.sub(v1519, v1529);
        const v1531 = stdlib.mul(v1527, v1530);
        const v1532 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1533 = stdlib.fromSome(v1532, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1534 = stdlib.add(v1531, v1533);
        await stdlib.mapSet(map1, v904, v1534);
        await stdlib.mapSet(map2, v904, v1519);
        const v1539 = stdlib.add(v1527, v1385);
        await stdlib.mapSet(map0, v904, v1539);
        const v1540 = null;
        await txn3.getOutput('Farm_stake', 'v1540', ctc0, v1540);
        const v1546 = stdlib.add(v763, v1385);
        const cv761 = v764;
        const cv762 = v1519;
        const cv763 = v1546;
        const cv764 = v906;
        const cv770 = v1446;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_unstake0_73': {
        const v1595 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v1658 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1665 = [v1659, v1663, v1664];
        const v1666 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1665);
        ;
        const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1674 = [v1668, v1672, v1673];
        const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1674);
        ;
        const v1778 = v1595[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, 0)];
        const v1779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1780 = stdlib.fromSome(v1779, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1781 = stdlib.le(v1778, v1780);
        stdlib.assert(v1781, {
          at: './index.rsh:231:14:application',
          fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1782 = v1675[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
        const v1783 = v1782[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
        const v1784 = stdlib.le(v1778, v1783);
        stdlib.assert(v1784, {
          at: './index.rsh:232:14:application',
          fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v1785;
        const v1786 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1786) {
          v1785 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1788 = stdlib.sub(v764, v761);
          const v1789 = stdlib.mul(v1788, v723);
          const v1790 = stdlib.div(v1789, v763);
          const v1791 = stdlib.add(v762, v1790);
          v1785 = v1791;
          }
        const v1794 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1795 = stdlib.fromSome(v1794, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1796 = stdlib.sub(v1785, v1795);
        const v1797 = stdlib.mul(v1780, v1796);
        const v1798 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1799 = stdlib.fromSome(v1798, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1800 = stdlib.add(v1797, v1799);
        await stdlib.mapSet(map1, v904, v1800);
        await stdlib.mapSet(map2, v904, v1785);
        const v1803 = stdlib.sub(v1780, v1778);
        await stdlib.mapSet(map0, v904, v1803);
        const v1804 = null;
        await txn3.getOutput('Farm_unstake', 'v1804', ctc0, v1804);
        const v1815 = stdlib.sub(v1783, v1778);
        const v1818 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 1)];
        const v1819 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 2)];
        const v1820 = [v1815, v1818, v1819];
        const v1821 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 0), v1820);
        ;
        const v1822 = stdlib.sub(v763, v1778);
        const cv761 = v764;
        const cv762 = v1785;
        const cv763 = v1822;
        const cv764 = v906;
        const cv770 = v1821;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function Farm_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Farm_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Farm_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Farm_claim0_73: ctc7,
    Farm_getInfo0_73: ctc7,
    Farm_stake0_73: ctc8,
    Farm_unstake0_73: ctc8
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
  
  
  const [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6]);
  const v798 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:242:9:application call to [unknown function] (defined at: ./index.rsh:242:9:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_claim0_73" (defined at: ./index.rsh:242:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: 'in',
    who: 'Farm_claim'
    });
  const v802 = ['Farm_claim0_73', v798];
  
  const txn1 = await (ctc.sendrecv({
    args: [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770, v802],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:210:14:decimal', stdlib.UInt_max, 0), v718], [stdlib.checkedBigNumberify('./index.rsh:210:14:decimal', stdlib.UInt_max, 0), v719]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
      
      switch (v905[0]) {
        case 'Farm_claim0_73': {
          const v908 = v905[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Farm_claim"
            });
          ;
          const v971 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v972 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v977 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v978 = [v972, v976, v977];
          const v979 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v978);
          ;
          const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v981 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v985 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v986 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v987 = [v981, v985, v986];
          const v988 = stdlib.Array_set(v979, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v987);
          ;
          let v990;
          const v991 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
          if (v991) {
            v990 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v993 = stdlib.sub(v764, v761);
            const v994 = stdlib.mul(v993, v723);
            const v995 = stdlib.div(v994, v763);
            const v996 = stdlib.add(v762, v995);
            v990 = v996;
            }
          const v997 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v904), null);
          const v998 = stdlib.fromSome(v997, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
          const v999 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v904), null);
          const v1000 = stdlib.fromSome(v999, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
          const v1001 = stdlib.sub(v990, v1000);
          const v1002 = stdlib.mul(v998, v1001);
          const v1003 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v904), null);
          const v1004 = stdlib.fromSome(v1003, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
          const v1005 = stdlib.add(v1002, v1004);
          await stdlib.simMapSet(sim_r, 1, v904, v1005);
          await stdlib.simMapSet(sim_r, 2, v904, v990);
          await stdlib.simMapSet(sim_r, 1, v904, stdlib.checkedBigNumberify('./index.rsh:246:25:decimal', stdlib.UInt_max, 0));
          const v1008 = null;
          const v1009 = await txn1.getOutput('Farm_claim', 'v1008', ctc0, v1008);
          
          const v1016 = v988[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
          const v1017 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 0)];
          const v1024 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
          const v1025 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 2)];
          const v1026 = [v1017, v1024, v1025];
          const v1027 = stdlib.Array_set(v988, stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1), v1026);
          const v2538 = v764;
          const v2539 = v990;
          const v2540 = v763;
          const v2541 = v906;
          const v2542 = v1027;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Farm_getInfo0_73': {
          const v1137 = v905[1];
          
          break;
          }
        case 'Farm_stake0_73': {
          const v1366 = v905[1];
          
          break;
          }
        case 'Farm_unstake0_73': {
          const v1595 = v905[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
  switch (v905[0]) {
    case 'Farm_claim0_73': {
      const v908 = v905[1];
      undefined /* setApiDetails */;
      ;
      const v971 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v972 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v977 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v978 = [v972, v976, v977];
      const v979 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v978);
      ;
      const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v981 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v985 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v986 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v987 = [v981, v985, v986];
      const v988 = stdlib.Array_set(v979, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v987);
      ;
      let v990;
      const v991 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
      if (v991) {
        v990 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v993 = stdlib.sub(v764, v761);
        const v994 = stdlib.mul(v993, v723);
        const v995 = stdlib.div(v994, v763);
        const v996 = stdlib.add(v762, v995);
        v990 = v996;
        }
      const v997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
      const v998 = stdlib.fromSome(v997, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
      const v999 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
      const v1000 = stdlib.fromSome(v999, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
      const v1001 = stdlib.sub(v990, v1000);
      const v1002 = stdlib.mul(v998, v1001);
      const v1003 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
      const v1004 = stdlib.fromSome(v1003, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
      const v1005 = stdlib.add(v1002, v1004);
      await stdlib.mapSet(map1, v904, v1005);
      await stdlib.mapSet(map2, v904, v990);
      await stdlib.mapSet(map1, v904, stdlib.checkedBigNumberify('./index.rsh:246:25:decimal', stdlib.UInt_max, 0));
      const v1008 = null;
      const v1009 = await txn1.getOutput('Farm_claim', 'v1008', ctc0, v1008);
      if (v369) {
        stdlib.protect(ctc0, await interact.out(v908, v1009), {
          at: './index.rsh:243:7:application',
          fs: ['at ./index.rsh:243:7:application call to [unknown function] (defined at: ./index.rsh:243:7:function exp)', 'at ./index.rsh:247:10:application call to "k" (defined at: ./index.rsh:244:11:function exp)', 'at ./index.rsh:244:11:application call to [unknown function] (defined at: ./index.rsh:244:11:function exp)'],
          msg: 'out',
          who: 'Farm_claim'
          });
        }
      else {
        }
      
      const v1016 = v988[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
      const v1017 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 0)];
      const v1024 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
      const v1025 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 2)];
      const v1026 = [v1017, v1024, v1025];
      const v1027 = stdlib.Array_set(v988, stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1), v1026);
      const v2538 = v764;
      const v2539 = v990;
      const v2540 = v763;
      const v2541 = v906;
      const v2542 = v1027;
      return;
      
      break;
      }
    case 'Farm_getInfo0_73': {
      const v1137 = v905[1];
      return;
      break;
      }
    case 'Farm_stake0_73': {
      const v1366 = v905[1];
      return;
      break;
      }
    case 'Farm_unstake0_73': {
      const v1595 = v905[1];
      return;
      break;
      }
    }
  
  
  };
export async function Farm_getInfo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Farm_getInfo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Farm_getInfo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Farm_claim0_73: ctc7,
    Farm_getInfo0_73: ctc7,
    Farm_stake0_73: ctc8,
    Farm_unstake0_73: ctc8
    });
  const ctc10 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6]);
  const v806 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:252:9:application call to [unknown function] (defined at: ./index.rsh:252:9:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_getInfo0_73" (defined at: ./index.rsh:252:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: 'in',
    who: 'Farm_getInfo'
    });
  const v810 = ['Farm_getInfo0_73', v806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770, v810],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:252:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:210:14:decimal', stdlib.UInt_max, 0), v718], [stdlib.checkedBigNumberify('./index.rsh:210:14:decimal', stdlib.UInt_max, 0), v719]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
      
      switch (v905[0]) {
        case 'Farm_claim0_73': {
          const v908 = v905[1];
          
          break;
          }
        case 'Farm_getInfo0_73': {
          const v1137 = v905[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Farm_getInfo"
            });
          ;
          const v1200 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1201 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1205 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1206 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1207 = [v1201, v1205, v1206];
          const v1208 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1207);
          ;
          const v1209 = v1208[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1216 = [v1210, v1214, v1215];
          const v1217 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1216);
          ;
          let v1259;
          const v1260 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
          if (v1260) {
            v1259 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1262 = stdlib.sub(v764, v761);
            const v1263 = stdlib.mul(v1262, v723);
            const v1264 = stdlib.div(v1263, v763);
            const v1265 = stdlib.add(v762, v1264);
            v1259 = v1265;
            }
          const v1266 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v904), null);
          const v1267 = stdlib.fromSome(v1266, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
          const v1268 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v904), null);
          const v1269 = stdlib.fromSome(v1268, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
          const v1270 = stdlib.sub(v1259, v1269);
          const v1271 = stdlib.mul(v1267, v1270);
          const v1272 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v904), null);
          const v1273 = stdlib.fromSome(v1272, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
          const v1274 = stdlib.add(v1271, v1273);
          await stdlib.simMapSet(sim_r, 1, v904, v1274);
          await stdlib.simMapSet(sim_r, 2, v904, v1259);
          const v1281 = {
            reward: v1274,
            staked: v1267
            };
          const v1282 = await txn1.getOutput('Farm_getInfo', 'v1281', ctc10, v1281);
          
          const v2563 = v764;
          const v2564 = v1259;
          const v2565 = v763;
          const v2566 = v906;
          const v2567 = v1217;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Farm_stake0_73': {
          const v1366 = v905[1];
          
          break;
          }
        case 'Farm_unstake0_73': {
          const v1595 = v905[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
  switch (v905[0]) {
    case 'Farm_claim0_73': {
      const v908 = v905[1];
      return;
      break;
      }
    case 'Farm_getInfo0_73': {
      const v1137 = v905[1];
      undefined /* setApiDetails */;
      ;
      const v1200 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1201 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1205 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1206 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1207 = [v1201, v1205, v1206];
      const v1208 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1207);
      ;
      const v1209 = v1208[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1216 = [v1210, v1214, v1215];
      const v1217 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1216);
      ;
      let v1259;
      const v1260 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
      if (v1260) {
        v1259 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1262 = stdlib.sub(v764, v761);
        const v1263 = stdlib.mul(v1262, v723);
        const v1264 = stdlib.div(v1263, v763);
        const v1265 = stdlib.add(v762, v1264);
        v1259 = v1265;
        }
      const v1266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
      const v1267 = stdlib.fromSome(v1266, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
      const v1268 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
      const v1269 = stdlib.fromSome(v1268, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
      const v1270 = stdlib.sub(v1259, v1269);
      const v1271 = stdlib.mul(v1267, v1270);
      const v1272 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
      const v1273 = stdlib.fromSome(v1272, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
      const v1274 = stdlib.add(v1271, v1273);
      await stdlib.mapSet(map1, v904, v1274);
      await stdlib.mapSet(map2, v904, v1259);
      const v1281 = {
        reward: v1274,
        staked: v1267
        };
      const v1282 = await txn1.getOutput('Farm_getInfo', 'v1281', ctc10, v1281);
      if (v369) {
        stdlib.protect(ctc0, await interact.out(v1137, v1282), {
          at: './index.rsh:253:7:application',
          fs: ['at ./index.rsh:253:7:application call to [unknown function] (defined at: ./index.rsh:253:7:function exp)', 'at ./index.rsh:256:17:application call to "callback" (defined at: ./index.rsh:254:18:function exp)', 'at ./index.rsh:254:18:application call to [unknown function] (defined at: ./index.rsh:254:18:function exp)'],
          msg: 'out',
          who: 'Farm_getInfo'
          });
        }
      else {
        }
      
      const v2563 = v764;
      const v2564 = v1259;
      const v2565 = v763;
      const v2566 = v906;
      const v2567 = v1217;
      return;
      
      break;
      }
    case 'Farm_stake0_73': {
      const v1366 = v905[1];
      return;
      break;
      }
    case 'Farm_unstake0_73': {
      const v1595 = v905[1];
      return;
      break;
      }
    }
  
  
  };
export async function Farm_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Farm_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Farm_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Farm_claim0_73: ctc8,
    Farm_getInfo0_73: ctc8,
    Farm_stake0_73: ctc7,
    Farm_unstake0_73: ctc7
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
  
  
  const [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6]);
  const v775 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:213:17:application call to [unknown function] (defined at: ./index.rsh:213:17:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_stake0_73" (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: 'in',
    who: 'Farm_stake'
    });
  const v776 = v775[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, 0)];
  const v779 = ['Farm_stake0_73', v775];
  
  const txn1 = await (ctc.sendrecv({
    args: [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770, v779],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:214:21:decimal', stdlib.UInt_max, 0), [[v776, v718], [stdlib.checkedBigNumberify('./index.rsh:214:48:decimal', stdlib.UInt_max, 0), v719]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
      
      switch (v905[0]) {
        case 'Farm_claim0_73': {
          const v908 = v905[1];
          
          break;
          }
        case 'Farm_getInfo0_73': {
          const v1137 = v905[1];
          
          break;
          }
        case 'Farm_stake0_73': {
          const v1366 = v905[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Farm_stake"
            });
          const v1385 = v1366[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, 0)];
          ;
          const v1429 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1430 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1431 = stdlib.add(v1430, v1385);
          const v1434 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1435 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1436 = [v1431, v1434, v1435];
          const v1437 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1436);
          sim_r.txns.push({
            amt: v1385,
            kind: 'to',
            tok: v718
            });
          const v1438 = v1437[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1439 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1443 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1444 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1445 = [v1439, v1443, v1444];
          const v1446 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1445);
          ;
          let v1519;
          const v1520 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
          if (v1520) {
            v1519 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1522 = stdlib.sub(v764, v761);
            const v1523 = stdlib.mul(v1522, v723);
            const v1524 = stdlib.div(v1523, v763);
            const v1525 = stdlib.add(v762, v1524);
            v1519 = v1525;
            }
          const v1526 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v904), null);
          const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
          const v1528 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v904), null);
          const v1529 = stdlib.fromSome(v1528, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
          const v1530 = stdlib.sub(v1519, v1529);
          const v1531 = stdlib.mul(v1527, v1530);
          const v1532 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v904), null);
          const v1533 = stdlib.fromSome(v1532, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
          const v1534 = stdlib.add(v1531, v1533);
          await stdlib.simMapSet(sim_r, 1, v904, v1534);
          await stdlib.simMapSet(sim_r, 2, v904, v1519);
          const v1539 = stdlib.add(v1527, v1385);
          await stdlib.simMapSet(sim_r, 0, v904, v1539);
          const v1540 = null;
          const v1541 = await txn1.getOutput('Farm_stake', 'v1540', ctc0, v1540);
          
          const v1546 = stdlib.add(v763, v1385);
          const v2588 = v764;
          const v2589 = v1519;
          const v2590 = v1546;
          const v2591 = v906;
          const v2592 = v1446;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Farm_unstake0_73': {
          const v1595 = v905[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
  switch (v905[0]) {
    case 'Farm_claim0_73': {
      const v908 = v905[1];
      return;
      break;
      }
    case 'Farm_getInfo0_73': {
      const v1137 = v905[1];
      return;
      break;
      }
    case 'Farm_stake0_73': {
      const v1366 = v905[1];
      undefined /* setApiDetails */;
      const v1385 = v1366[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, 0)];
      ;
      const v1429 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1430 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1431 = stdlib.add(v1430, v1385);
      const v1434 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1435 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1436 = [v1431, v1434, v1435];
      const v1437 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1436);
      ;
      const v1438 = v1437[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1439 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1443 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1444 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1445 = [v1439, v1443, v1444];
      const v1446 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1445);
      ;
      let v1519;
      const v1520 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
      if (v1520) {
        v1519 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1522 = stdlib.sub(v764, v761);
        const v1523 = stdlib.mul(v1522, v723);
        const v1524 = stdlib.div(v1523, v763);
        const v1525 = stdlib.add(v762, v1524);
        v1519 = v1525;
        }
      const v1526 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
      const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
      const v1528 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
      const v1529 = stdlib.fromSome(v1528, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
      const v1530 = stdlib.sub(v1519, v1529);
      const v1531 = stdlib.mul(v1527, v1530);
      const v1532 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
      const v1533 = stdlib.fromSome(v1532, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
      const v1534 = stdlib.add(v1531, v1533);
      await stdlib.mapSet(map1, v904, v1534);
      await stdlib.mapSet(map2, v904, v1519);
      const v1539 = stdlib.add(v1527, v1385);
      await stdlib.mapSet(map0, v904, v1539);
      const v1540 = null;
      const v1541 = await txn1.getOutput('Farm_stake', 'v1540', ctc0, v1540);
      if (v369) {
        stdlib.protect(ctc0, await interact.out(v1366, v1541), {
          at: './index.rsh:212:7:application',
          fs: ['at ./index.rsh:212:7:application call to [unknown function] (defined at: ./index.rsh:212:7:function exp)', 'at ./index.rsh:218:10:application call to "k" (defined at: ./index.rsh:215:20:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
          msg: 'out',
          who: 'Farm_stake'
          });
        }
      else {
        }
      
      const v1546 = stdlib.add(v763, v1385);
      const v2588 = v764;
      const v2589 = v1519;
      const v2590 = v1546;
      const v2591 = v906;
      const v2592 = v1446;
      return;
      
      break;
      }
    case 'Farm_unstake0_73': {
      const v1595 = v905[1];
      return;
      break;
      }
    }
  
  
  };
export async function Farm_unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Farm_unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Farm_unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Farm_claim0_73: ctc8,
    Farm_getInfo0_73: ctc8,
    Farm_stake0_73: ctc7,
    Farm_unstake0_73: ctc7
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
  
  
  const [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6]);
  const v781 = ctc.selfAddress();
  const v783 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:19:application call to [unknown function] (defined at: ./index.rsh:224:19:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_unstake0_73" (defined at: ./index.rsh:222:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: 'in',
    who: 'Farm_unstake'
    });
  const v784 = v783[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, 0)];
  const v786 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v781), null);
  const v787 = stdlib.fromSome(v786, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
  const v788 = stdlib.le(v784, v787);
  stdlib.assert(v788, {
    at: './index.rsh:225:15:application',
    fs: ['at ./index.rsh:224:19:application call to [unknown function] (defined at: ./index.rsh:224:19:function exp)', 'at ./index.rsh:224:19:application call to [unknown function] (defined at: ./index.rsh:224:19:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_unstake0_73" (defined at: ./index.rsh:222:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: null,
    who: 'Farm_unstake'
    });
  const v789 = v770[stdlib.checkedBigNumberify('./index.rsh:226:36:application', stdlib.UInt_max, 0)];
  const v790 = v789[stdlib.checkedBigNumberify('./index.rsh:226:36:application', stdlib.UInt_max, 0)];
  const v791 = stdlib.le(v784, v790);
  stdlib.assert(v791, {
    at: './index.rsh:226:15:application',
    fs: ['at ./index.rsh:224:19:application call to [unknown function] (defined at: ./index.rsh:224:19:function exp)', 'at ./index.rsh:224:19:application call to [unknown function] (defined at: ./index.rsh:224:19:function exp)', 'at ./index.rsh:192:21:application call to "runFarm_unstake0_73" (defined at: ./index.rsh:222:9:function exp)', 'at ./index.rsh:192:21:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
    msg: null,
    who: 'Farm_unstake'
    });
  const v794 = ['Farm_unstake0_73', v783];
  
  const txn1 = await (ctc.sendrecv({
    args: [v718, v719, v720, v721, v722, v723, v761, v762, v763, v764, v770, v794],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:228:23:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:228:27:decimal', stdlib.UInt_max, 0), v718], [stdlib.checkedBigNumberify('./index.rsh:228:44:decimal', stdlib.UInt_max, 0), v719]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
      
      switch (v905[0]) {
        case 'Farm_claim0_73': {
          const v908 = v905[1];
          
          break;
          }
        case 'Farm_getInfo0_73': {
          const v1137 = v905[1];
          
          break;
          }
        case 'Farm_stake0_73': {
          const v1366 = v905[1];
          
          break;
          }
        case 'Farm_unstake0_73': {
          const v1595 = v905[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Farm_unstake"
            });
          ;
          const v1658 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1665 = [v1659, v1663, v1664];
          const v1666 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1665);
          ;
          const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
          const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
          const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
          const v1674 = [v1668, v1672, v1673];
          const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1674);
          ;
          const v1778 = v1595[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, 0)];
          const v1779 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v904), null);
          const v1780 = stdlib.fromSome(v1779, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
          const v1781 = stdlib.le(v1778, v1780);
          ;
          const v1782 = v1675[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
          const v1783 = v1782[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
          const v1784 = stdlib.le(v1778, v1783);
          ;
          let v1785;
          const v1786 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
          if (v1786) {
            v1785 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1788 = stdlib.sub(v764, v761);
            const v1789 = stdlib.mul(v1788, v723);
            const v1790 = stdlib.div(v1789, v763);
            const v1791 = stdlib.add(v762, v1790);
            v1785 = v1791;
            }
          const v1794 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v904), null);
          const v1795 = stdlib.fromSome(v1794, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
          const v1796 = stdlib.sub(v1785, v1795);
          const v1797 = stdlib.mul(v1780, v1796);
          const v1798 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v904), null);
          const v1799 = stdlib.fromSome(v1798, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
          const v1800 = stdlib.add(v1797, v1799);
          await stdlib.simMapSet(sim_r, 1, v904, v1800);
          await stdlib.simMapSet(sim_r, 2, v904, v1785);
          const v1803 = stdlib.sub(v1780, v1778);
          await stdlib.simMapSet(sim_r, 0, v904, v1803);
          const v1804 = null;
          const v1805 = await txn1.getOutput('Farm_unstake', 'v1804', ctc0, v1804);
          
          const v1815 = stdlib.sub(v1783, v1778);
          const v1818 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 1)];
          const v1819 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 2)];
          const v1820 = [v1815, v1818, v1819];
          const v1821 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 0), v1820);
          sim_r.txns.push({
            amt: v1778,
            kind: 'from',
            to: v904,
            tok: v718
            });
          const v1822 = stdlib.sub(v763, v1778);
          const v2613 = v764;
          const v2614 = v1785;
          const v2615 = v1822;
          const v2616 = v906;
          const v2617 = v1821;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn1;
  switch (v905[0]) {
    case 'Farm_claim0_73': {
      const v908 = v905[1];
      return;
      break;
      }
    case 'Farm_getInfo0_73': {
      const v1137 = v905[1];
      return;
      break;
      }
    case 'Farm_stake0_73': {
      const v1366 = v905[1];
      return;
      break;
      }
    case 'Farm_unstake0_73': {
      const v1595 = v905[1];
      undefined /* setApiDetails */;
      ;
      const v1658 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1665 = [v1659, v1663, v1664];
      const v1666 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1665);
      ;
      const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
      const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
      const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
      const v1674 = [v1668, v1672, v1673];
      const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1674);
      ;
      const v1778 = v1595[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, 0)];
      const v1779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
      const v1780 = stdlib.fromSome(v1779, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
      const v1781 = stdlib.le(v1778, v1780);
      stdlib.assert(v1781, {
        at: './index.rsh:231:14:application',
        fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
        msg: null,
        who: 'Farm_unstake'
        });
      const v1782 = v1675[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
      const v1783 = v1782[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
      const v1784 = stdlib.le(v1778, v1783);
      stdlib.assert(v1784, {
        at: './index.rsh:232:14:application',
        fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
        msg: null,
        who: 'Farm_unstake'
        });
      let v1785;
      const v1786 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
      if (v1786) {
        v1785 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1788 = stdlib.sub(v764, v761);
        const v1789 = stdlib.mul(v1788, v723);
        const v1790 = stdlib.div(v1789, v763);
        const v1791 = stdlib.add(v762, v1790);
        v1785 = v1791;
        }
      const v1794 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
      const v1795 = stdlib.fromSome(v1794, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
      const v1796 = stdlib.sub(v1785, v1795);
      const v1797 = stdlib.mul(v1780, v1796);
      const v1798 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
      const v1799 = stdlib.fromSome(v1798, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
      const v1800 = stdlib.add(v1797, v1799);
      await stdlib.mapSet(map1, v904, v1800);
      await stdlib.mapSet(map2, v904, v1785);
      const v1803 = stdlib.sub(v1780, v1778);
      await stdlib.mapSet(map0, v904, v1803);
      const v1804 = null;
      const v1805 = await txn1.getOutput('Farm_unstake', 'v1804', ctc0, v1804);
      if (v369) {
        stdlib.protect(ctc0, await interact.out(v1595, v1805), {
          at: './index.rsh:223:7:application',
          fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:7:function exp)', 'at ./index.rsh:236:10:application call to "k" (defined at: ./index.rsh:229:22:function exp)', 'at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
          msg: 'out',
          who: 'Farm_unstake'
          });
        }
      else {
        }
      
      const v1815 = stdlib.sub(v1783, v1778);
      const v1818 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 1)];
      const v1819 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 2)];
      const v1820 = [v1815, v1818, v1819];
      const v1821 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 0), v1820);
      ;
      const v1822 = stdlib.sub(v763, v1778);
      const v2613 = v764;
      const v2614 = v1785;
      const v2615 = v1822;
      const v2616 = v906;
      const v2617 = v1821;
      return;
      
      break;
      }
    }
  
  
  };
export async function Farmer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Farmer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Farmer expects to receive an interact object as its second argument.`));}
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
    Farm_claim0_73: ctc4,
    Farm_getInfo0_73: ctc4,
    Farm_stake0_73: ctc5,
    Farm_unstake0_73: ctc5
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  
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
  
  
  const v700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v701 = [v700, v700];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v718, v719, v720, v721, v722, v723], secs: v725, time: v724, didSend: v44, from: v717 } = txn1;
  const v726 = stdlib.tokenEq(v718, v719);
  const v727 = v726 ? false : true;
  stdlib.assert(v727, {
    at: './index.rsh:122:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Farmer'
    });
  const v728 = v701[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0)];
  const v730 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v731 = v728[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
  const v732 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v730, v731];
  const v733 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 0), v732);
  ;
  const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v737 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1)];
  const v738 = v735[stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 2)];
  const v739 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v737, v738];
  const v740 = stdlib.Array_set(v733, stdlib.checkedBigNumberify('./index.rsh:122:11:dot', stdlib.UInt_max, 1), v739);
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
  const {data: [], secs: v744, time: v743, didSend: v51, from: v742 } = txn2;
  ;
  const v745 = v740[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
  const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 0)];
  const v747 = stdlib.add(v746, v722);
  const v750 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1)];
  const v751 = v745[stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 2)];
  const v752 = [v747, v750, v751];
  const v753 = stdlib.Array_set(v740, stdlib.checkedBigNumberify('./index.rsh:125:11:dot', stdlib.UInt_max, 1), v752);
  ;
  const v754 = stdlib.addressEq(v717, v742);
  stdlib.assert(v754, {
    at: './index.rsh:125:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Farmer'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:181:22:application',
    fs: ['at ./index.rsh:180:7:application call to [unknown function] (defined at: ./index.rsh:180:30:function exp)'],
    msg: 'deployed',
    who: 'Farmer'
    });
  
  let v761 = v724;
  let v762 = stdlib.checkedBigNumberify('./index.rsh:196:5:decimal', stdlib.UInt_max, 0);
  let v763 = stdlib.checkedBigNumberify('./index.rsh:194:5:decimal', stdlib.UInt_max, 0);
  let v764 = v743;
  let v770 = v753;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v905], secs: v907, time: v906, didSend: v369, from: v904 } = txn3;
    switch (v905[0]) {
      case 'Farm_claim0_73': {
        const v908 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v971 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v972 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v976 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v977 = v971[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v978 = [v972, v976, v977];
        const v979 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v978);
        ;
        const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v981 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v985 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v986 = v980[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v987 = [v981, v985, v986];
        const v988 = stdlib.Array_set(v979, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v987);
        ;
        let v990;
        const v991 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v991) {
          v990 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v993 = stdlib.sub(v764, v761);
          const v994 = stdlib.mul(v993, v723);
          const v995 = stdlib.div(v994, v763);
          const v996 = stdlib.add(v762, v995);
          v990 = v996;
          }
        const v997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v998 = stdlib.fromSome(v997, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v999 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1000 = stdlib.fromSome(v999, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1001 = stdlib.sub(v990, v1000);
        const v1002 = stdlib.mul(v998, v1001);
        const v1003 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1004 = stdlib.fromSome(v1003, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1005 = stdlib.add(v1002, v1004);
        await stdlib.mapSet(map1, v904, v1005);
        await stdlib.mapSet(map2, v904, v990);
        await stdlib.mapSet(map1, v904, stdlib.checkedBigNumberify('./index.rsh:246:25:decimal', stdlib.UInt_max, 0));
        const v1008 = null;
        await txn3.getOutput('Farm_claim', 'v1008', ctc0, v1008);
        const v1016 = v988[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
        const v1017 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 0)];
        const v1024 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1)];
        const v1025 = v1016[stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 2)];
        const v1026 = [v1017, v1024, v1025];
        const v1027 = stdlib.Array_set(v988, stdlib.checkedBigNumberify('./index.rsh:248:51:application', stdlib.UInt_max, 1), v1026);
        const cv761 = v764;
        const cv762 = v990;
        const cv763 = v763;
        const cv764 = v906;
        const cv770 = v1027;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_getInfo0_73': {
        const v1137 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v1200 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1201 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1205 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1206 = v1200[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1207 = [v1201, v1205, v1206];
        const v1208 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1207);
        ;
        const v1209 = v1208[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1216 = [v1210, v1214, v1215];
        const v1217 = stdlib.Array_set(v1208, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1216);
        ;
        let v1259;
        const v1260 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1260) {
          v1259 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1262 = stdlib.sub(v764, v761);
          const v1263 = stdlib.mul(v1262, v723);
          const v1264 = stdlib.div(v1263, v763);
          const v1265 = stdlib.add(v762, v1264);
          v1259 = v1265;
          }
        const v1266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1267 = stdlib.fromSome(v1266, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1268 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1269 = stdlib.fromSome(v1268, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1270 = stdlib.sub(v1259, v1269);
        const v1271 = stdlib.mul(v1267, v1270);
        const v1272 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1273 = stdlib.fromSome(v1272, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1274 = stdlib.add(v1271, v1273);
        await stdlib.mapSet(map1, v904, v1274);
        await stdlib.mapSet(map2, v904, v1259);
        const v1281 = {
          reward: v1274,
          staked: v1267
          };
        await txn3.getOutput('Farm_getInfo', 'v1281', ctc7, v1281);
        const cv761 = v764;
        const cv762 = v1259;
        const cv763 = v763;
        const cv764 = v906;
        const cv770 = v1217;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_stake0_73': {
        const v1366 = v905[1];
        undefined /* setApiDetails */;
        const v1385 = v1366[stdlib.checkedBigNumberify('./index.rsh:211:9:spread', stdlib.UInt_max, 0)];
        ;
        const v1429 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1430 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1431 = stdlib.add(v1430, v1385);
        const v1434 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1435 = v1429[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1436 = [v1431, v1434, v1435];
        const v1437 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1436);
        ;
        const v1438 = v1437[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1439 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1443 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1444 = v1438[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1445 = [v1439, v1443, v1444];
        const v1446 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1445);
        ;
        let v1519;
        const v1520 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1520) {
          v1519 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1522 = stdlib.sub(v764, v761);
          const v1523 = stdlib.mul(v1522, v723);
          const v1524 = stdlib.div(v1523, v763);
          const v1525 = stdlib.add(v762, v1524);
          v1519 = v1525;
          }
        const v1526 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1527 = stdlib.fromSome(v1526, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1528 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1529 = stdlib.fromSome(v1528, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1530 = stdlib.sub(v1519, v1529);
        const v1531 = stdlib.mul(v1527, v1530);
        const v1532 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1533 = stdlib.fromSome(v1532, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1534 = stdlib.add(v1531, v1533);
        await stdlib.mapSet(map1, v904, v1534);
        await stdlib.mapSet(map2, v904, v1519);
        const v1539 = stdlib.add(v1527, v1385);
        await stdlib.mapSet(map0, v904, v1539);
        const v1540 = null;
        await txn3.getOutput('Farm_stake', 'v1540', ctc0, v1540);
        const v1546 = stdlib.add(v763, v1385);
        const cv761 = v764;
        const cv762 = v1519;
        const cv763 = v1546;
        const cv764 = v906;
        const cv770 = v1446;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      case 'Farm_unstake0_73': {
        const v1595 = v905[1];
        undefined /* setApiDetails */;
        ;
        const v1658 = v770[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1663 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1664 = v1658[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1665 = [v1659, v1663, v1664];
        const v1666 = stdlib.Array_set(v770, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0), v1665);
        ;
        const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1668 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 0)];
        const v1672 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1)];
        const v1673 = v1667[stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 2)];
        const v1674 = [v1668, v1672, v1673];
        const v1675 = stdlib.Array_set(v1666, stdlib.checkedBigNumberify('./index.rsh:192:21:dot', stdlib.UInt_max, 1), v1674);
        ;
        const v1778 = v1595[stdlib.checkedBigNumberify('./index.rsh:222:9:spread', stdlib.UInt_max, 0)];
        const v1779 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
        const v1780 = stdlib.fromSome(v1779, stdlib.checkedBigNumberify('./index.rsh:132:46:decimal', stdlib.UInt_max, 0));
        const v1781 = stdlib.le(v1778, v1780);
        stdlib.assert(v1781, {
          at: './index.rsh:231:14:application',
          fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
          msg: null,
          who: 'Farmer'
          });
        const v1782 = v1675[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
        const v1783 = v1782[stdlib.checkedBigNumberify('./index.rsh:232:35:application', stdlib.UInt_max, 0)];
        const v1784 = stdlib.le(v1778, v1783);
        stdlib.assert(v1784, {
          at: './index.rsh:232:14:application',
          fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)'],
          msg: null,
          who: 'Farmer'
          });
        let v1785;
        const v1786 = stdlib.eq(v763, stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, 0));
        if (v1786) {
          v1785 = stdlib.checkedBigNumberify('./index.rsh:148:14:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1788 = stdlib.sub(v764, v761);
          const v1789 = stdlib.mul(v1788, v723);
          const v1790 = stdlib.div(v1789, v763);
          const v1791 = stdlib.add(v762, v1790);
          v1785 = v1791;
          }
        const v1794 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v904), null);
        const v1795 = stdlib.fromSome(v1794, stdlib.checkedBigNumberify('./index.rsh:139:70:decimal', stdlib.UInt_max, 0));
        const v1796 = stdlib.sub(v1785, v1795);
        const v1797 = stdlib.mul(v1780, v1796);
        const v1798 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v904), null);
        const v1799 = stdlib.fromSome(v1798, stdlib.checkedBigNumberify('./index.rsh:135:46:decimal', stdlib.UInt_max, 0));
        const v1800 = stdlib.add(v1797, v1799);
        await stdlib.mapSet(map1, v904, v1800);
        await stdlib.mapSet(map2, v904, v1785);
        const v1803 = stdlib.sub(v1780, v1778);
        await stdlib.mapSet(map0, v904, v1803);
        const v1804 = null;
        await txn3.getOutput('Farm_unstake', 'v1804', ctc0, v1804);
        const v1815 = stdlib.sub(v1783, v1778);
        const v1818 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 1)];
        const v1819 = v1782[stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 2)];
        const v1820 = [v1815, v1818, v1819];
        const v1821 = stdlib.Array_set(v1675, stdlib.checkedBigNumberify('./index.rsh:238:47:application', stdlib.UInt_max, 0), v1820);
        ;
        const v1822 = stdlib.sub(v763, v1778);
        const cv761 = v764;
        const cv762 = v1785;
        const cv763 = v1822;
        const cv764 = v906;
        const cv770 = v1821;
        
        v761 = cv761;
        v762 = cv762;
        v763 = cv763;
        v764 = cv764;
        v770 = cv770;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Farm_claim()byte[0]`, `Farm_getInfo()(uint64,uint64)`, `Farm_stake(uint64)byte[0]`, `Farm_unstake(uint64)byte[0]`],
    pure: [`State_info()(uint64,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`Farm_claim()byte[0]`, `Farm_getInfo()(uint64,uint64)`, `Farm_stake(uint64)byte[0]`, `Farm_unstake(uint64)byte[0]`, `State_info()(uint64,uint64,uint64,uint64,uint64,uint64)`]
    },
  appApproval: `BiAUAAEIBAMgKKCNBhv0iZvHB63xg5AI2uDA1A+1xLemBwIQGDA4QEgmAwEAAQEAIjUAMRhBCD0qZEkiWzUBJFs1AjEZIxJBAAoxACghCK9mQggSNhoAF0lBAKAiNQQjNQZJIQkMQABkSSEKDEAATEkhCwxAADQhCxJENAElEkQoZEk1A1cACDQDVwgIUDQDVxAIUDQDVxgIUDQDVyAIUDQDV0AIUDUHQgexIQoSRCo1/yk0/1Akr1BCAF8hCRJEKjX/KDT/UCSvUEIATkkhDAxAABIhDBJENhoBNf+AAQI0/1BCADWBhIGw9AQSRDYaATX/gAEDNP9QQgAfNhoCFzUENhoDNhoBF0khDQxABT9JIQQMQAU3IQQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKSkpKSSJbNf8kWzX+IQ5bNf0hD1s1/CEFWzX7IQZbNfohEFs1+SERWzX4IRJbNfchE1s19ldQIjX1STUFNfSABJHxp5o09FCwNPQiVUkhDQxAApBJIQQMQAFkIQQSRDT0VwEINfM09VcAEUk18lcACDTyVwgIUDTyVxABUDT1VxERUDXxNPFXERE18DTxVwARNPBXAAg08FcICFA08FcQAVBQNe808xc17iIxAIgGolcACUk17CNbNOwiVU017TTuNO0ORDTvVwARSTXsIls16zTuNOsORDT3IhJBAAYiNepCABA0+DT2NPkJNPoLNPcKCDXqMQAoMQCIBlYpNO006iIxAIgGS1cSCUk16SNbNOkiVU0JCyIxAIgGNlcJCUk16SNbNOkiVU0IFlA16UlXAAk06VBMVxIJUGYxACgxAIgGDyk06hZQNelXABI06VBmMQAoMQCIBfkpNO007gkWUDXpVwkSNOlMUGaACAAAAAAAAAcMsCo1B7EisgE07rISJbIQMQCyFDT/shGzNP80/jT9NPw0+zT6NPY06jT3NO4JMgY06zTuCRY07FcICFA07FcQAVA071cREVBCBOxINPRXAQg18zTzFzXyNPVXABFJNfEiWzTyCBY08VcICFA08VcQAVA09VcREVA18DTyNP+IBYQ08FcRETXvNPciEkEABiI17kIAEDT4NPY0+Qk0+gs09woINe4iMQCIBTNXAAlJNewjWzTsIlVNNe0xACgxAIgFHCk07TTuIjEAiAURVxIJSTXsI1s07CJVTQkLIjEAiAT8VwkJSTXsI1s07CJVTQgWUDXsSVcACTTsUExXEglQZjEAKDEAiATVKTTuFlA17FcAEjTsUGYxACgxAIgEvyk07TTyCBZQNexXCRI07ExQZoAIAAAAAAAABgSwKjUHNP80/jT9NPw0+zT6NPY07jT3NPIIMgY08FcAETTvVwAINO9XCAhQNO9XEAFQUEIDx0kjDEABA0g09VcAEUk181cACDTzVwgIUDTzVxABUDT1VxERUDXyNPJXERE18TT3IhJBAAYiNfBCABA0+DT2NPkJNPoLNPcKCDXwIjEAiAQeVwAJSTXuI1s07iJVTUk17zTwIjEAiAQGVxIJSTXtI1s07SJVTQkLIjEAiAPxVwkJSTXtI1s07SJVTQg17jEAKDEAiAPZKTTuFlA17UlXAAk07VBMVxIJUGYxACgxAIgDvSk08BZQNe1XABI07VBmgAgAAAAAAAAFATTvFjTuFlBQsDTvFjTuFlA1BzT/NP40/TT8NPs0+jT2NPA09zIGNPJXABE08VcACDTxVwgIUDTxVxABUFBCAr5INPVXABFJNfNXAAg081cICFA081cQAVA09VcREVA18jTyVxERNfE08lcAETTxVwAINPFXCAhQNPFXEAFQUDXwNPciEkEABiI170IAEDT4NPY0+Qk0+gs09woINe8xACgxAIgDACkiMQCIAvlXAAlJNe4jWzTuIlVNNO8iMQCIAuRXEglJNe4jWzTuIlVNCQsiMQCIAs9XCQlJNe4jWzTuIlVNCBZQNe5JVwAJNO5QTFcSCVBmMQAoMQCIAqgpNO8WUDXuVwASNO5QZjEAKDEAiAKSgAkBAAAAAAAAAAA17klXAAk07lBMVxIJUGaACAAAAAAAAAPwsCo1BzTwVxERNe40/zT+NP00/DT7NPo09jTvNPcyBjTwVwARNO5XAAg07lcICFA07lcQAVBQQgGOSEkjDEAAg0gjNAESRDQESSISTDQCEhFEKGRJNQNJSSEGWzX/IRJbNf5XWCI1/YAEmouRdLA0/VcRETX8NP40/4gCGTQDVwAgMQASRDQDIQVbNP80AyEQWzQDIRFbNP40AyETWzQDgVBbIiIyBjT9VwARNPwiWzT+CBY0/FcICFA0/FcQAVBQQgEESCI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/JFs1/iEOWzX9IQ9bNfwhBVs1+yEGWzX6gASKwYyINP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQsCEHiAFjgRGvSTX5SVA1+DT/NP4TRDT4VwARNfckrzT3VwgIUDT3VxABUDT4VxERUDX2IQeIATGxIrIBIrISJbIQMgqyFDT/shGzNPZXERE19TT2VwARJK809VcICFA09VcQAVBQNfQhB4gA/LEisgEishIlshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDIGFlA09FAoSwFXAHpnSCM1ATIGNQJCAG01/zX+Nf01/DX7Nfo1+TX4Nfc19kk19RY09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDT+FlA0/1AoSwFXAHJnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/y0kxGGFAAAVIIQiviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 27,
  stateKeys: 1,
  stateSize: 122,
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
                "name": "v718",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v719",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v720",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v721",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v722",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v723",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v718",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v719",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v720",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v721",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v722",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v723",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Farm_claim0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Farm_getInfo0_73",
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
                    "internalType": "struct T13",
                    "name": "_Farm_stake0_73",
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
                    "internalType": "struct T13",
                    "name": "_Farm_unstake0_73",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v905",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1008",
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
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1281",
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
    "name": "_reach_oe_v1540",
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
    "name": "_reach_oe_v1804",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Farm_claim",
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
    "name": "Farm_getInfo",
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
        "internalType": "struct T15",
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
    "name": "Farm_stake",
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
    "name": "Farm_unstake",
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
    "name": "State_info",
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
          },
          {
            "internalType": "uint256",
            "name": "totalStaked",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Farm_claim0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Farm_getInfo0_73",
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
                    "internalType": "struct T13",
                    "name": "_Farm_stake0_73",
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
                    "internalType": "struct T13",
                    "name": "_Farm_unstake0_73",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v905",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200337b3803806200337b83398101604081905262000026916200059e565b60008055436003556200003862000325565b604080518351815260208085015180516001600160a01b039081168385015291810151909116828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f2ef0d34a497990de531ae070c47044e5d791d682070a4eec0c097b0a5d632fcb9181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152828101519081015190516200011c916001600160a01b039182169116146200011157600162000114565b60005b600862000278565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015e9290620002a2565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a49190600190620002a2565b60a0820152620001b73415600962000278565b620001c1620003bd565b33815260208084018051516001600160a01b03908116838501528151830151166040808501919091528151810151606080860191909152825101516080808601919091528251015160a080860191909152915182015160c08501524360e0850181905291850151610100850152600160008190559190915551620002489183910162000697565b604051602081830303815290604052600290805190602001906200026e92919062000426565b505050506200077c565b816200029e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002ac620004b5565b60005b60028110156200030257848160028110620002ce57620002ce6200063b565b6020020151828260028110620002e857620002e86200063b565b602002015280620002f98162000715565b915050620002af565b50818184600281106200031957620003196200063b565b60200201529392505050565b604080516101208101909152600060c0820181815260e083018290526101008301919091528152602081016200035a620004b5565b8152604080516060810182526000808252602082810182905292820152910190815260200162000389620004b5565b81526040805160608101825260008082526020828101829052928201529101908152602001620003b8620004b5565b905290565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001620003b8620004b5565b82805462000434906200073f565b90600052602060002090601f016020900481019282620004585760008555620004a3565b82601f106200047357805160ff1916838001178555620004a3565b82800160010185558215620004a3579182015b82811115620004a357825182559160200191906001019062000486565b50620004b192915062000502565b5090565b60405180604001604052806002905b620004eb604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004c45790505090565b5b80821115620004b1576000815560010162000503565b604080519081016001600160401b03811182821017156200054a57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200054a57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200059957600080fd5b919050565b600081830360e0811215620005b257600080fd5b620005bc62000519565b8351815260c0601f1983011215620005d357600080fd5b620005dd62000550565b9150620005ed6020850162000581565b8252620005fd6040850162000581565b6020830152606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60028110156200069157815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000655565b50505050565b81516001600160a01b039081168252602080840151821690830152604080840151918216908301526101c082019050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516200070d8285018262000651565b505092915050565b60006000198214156200073857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200075457607f821691505b602082108114156200077657634e487b7160e01b600052602260045260246000fd5b50919050565b612bef806200078c6000396000f3fe6080604052600436106100bd5760003560e01c8063817d57f311610079578063a4468b9a11610056578063a4468b9a14610207578063ab53f2c61461021a578063c84143aa1461023d578063cadc2e7a1461026057005b8063817d57f31461016857806383230757146101885780639312a12a1461019d57005b8063159e96d9146100c657806316b45523146100ee5780631e93b0f1146101015780632c10a159146101205780633bc5b7bf1461013357806355924d661461016057005b366100c457005b005b6100d96100d4366004612445565b610280565b60405190151581526020015b60405180910390f35b6100c46100fc36600461245e565b6102d8565b34801561010d57600080fd5b506003545b6040519081526020016100e5565b6100c461012e366004612476565b6102fc565b34801561013f57600080fd5b5061015361014e3660046124a0565b61031c565b6040516100e591906124d3565b6100d9610348565b34801561017457600080fd5b506101536101833660046124a0565b610392565b34801561019457600080fd5b50600154610112565b3480156101a957600080fd5b506101b26103b8565b6040516100e5919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b6100d9610215366004612445565b610594565b34801561022657600080fd5b5061022f6105ec565b6040516100e5929190612536565b610245610689565b604080518251815260209283015192810192909252016100e5565b34801561026c57600080fd5b5061015361027b3660046124a0565b6106eb565b600061028a611f33565b610292611f78565b61029a611f97565b604080516020808201835287825260608401919091526002835281518082019092528282528301526102cc8284610711565b50506040015192915050565b6102e0611f33565b6102f86102f2368490038401846126b0565b82610711565b5050565b610304611f33565b6102f861031636849003840184612762565b8261175f565b6040805160608101825260008082526020820181905291810191909152610342826119ce565b92915050565b6000610352611f33565b61035a611f78565b610362611f97565b60006020828101829052908252604080518083019091528281529083015261038a8284610711565b505051919050565b604080516060810182526000808252602082018190529181019190915261034282611aa1565b6103c0611fd6565b6001600054141561047b576000600280546103da9061279a565b80601f01602080910402602001604051908101604052809291908181526020018280546104069061279a565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050505080602001905181019061046b9190612863565b905061047960006007611b2e565b505b60046000541415610585576000600280546104959061279a565b80601f01602080910402602001604051908101604052809291908181526020018280546104c19061279a565b801561050e5780601f106104e35761010080835404028352916020019161050e565b820191906000526020600020905b8154815290600101906020018083116104f157829003601f168201915b505050505080602001905181019061052691906128f7565b905061053061201e565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808083015182519091015261010090910151815160a0015251919050565b61059160006007611b2e565b90565b600061059e611f33565b6105a6611f78565b6105ae611f97565b604080516020808201835287825260808401919091526003835281518082019092528282528301526105e08284610711565b50506060015192915050565b6000606060005460028080546106019061279a565b80601f016020809104026020016040519081016040528092919081815260200182805461062d9061279a565b801561067a5780601f1061064f5761010080835404028352916020019161067a565b820191906000526020600020905b81548152906001019060200180831161065d57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526106a5611f33565b6106ad611f78565b6106b5611f97565b6000604082015260018181905250604080516020808201909252828152908301526106e08284610711565b505060200151919050565b604080516060810182526000808252602082018190529181019190915261034282611b54565b610721600460005414601d611b2e565b815161073c90158061073557508251600154145b601e611b2e565b60008080556002805461074e9061279a565b80601f016020809104026020016040519081016040528092919081815260200182805461077a9061279a565b80156107c75780601f1061079c576101008083540402835291602001916107c7565b820191906000526020600020905b8154815290600101906020018083116107aa57829003601f168201915b50505050508060200190518101906107df91906128f7565b90506107e9612031565b7fc81731e5ebd863dfe59642053908b32550afd40a6f86f6eb24d97ebfb2bc3952846040516108189190612991565b60405180910390a1600060208501515151600381111561083a5761083a6124bd565b1415610bbb5761084c3415600f611b2e565b61014082018051515182515280515160209081015183519091015280515160409081015183519015159101525181516108889190600090611be1565b602082015281516108a7906108a09033906000611c55565b6010611b2e565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516108ee9190600190611be1565b81606001819052506109106109093384602001516000611c55565b6011611b2e565b610100820151610926576000608082015261096f565b8161010001518260a001518360c001518461012001516109469190612a1b565b6109509190612a32565b61095a9190612a51565b8260e001516109699190612a73565b60808201525b336000818152600560205260409020805460ff191660019081179091559061099690611b54565b5160018111156109a8576109a86124bd565b146109b45760006109c2565b6109bd33611b54565b604001515b60016109cd33611aa1565b5160018111156109df576109df6124bd565b146109eb5760006109f9565b6109f433611aa1565b604001515b8260800151610a089190612a1b565b6001610a13336119ce565b516001811115610a2557610a256124bd565b14610a31576000610a3f565b610a3a336119ce565b604001515b610a499190612a32565b610a539190612a73565b336000908152600560208181526040808420600180820196875560068452828620805460ff199081168317825560808a015191830191909155948452815490941690931790925592829055519081527f9aa18d836173795b84e00308d2846e0e7d6d6a1497080d2d49444dff95c142e4910160405180910390a1600083526060810180516020908101515160a0840180519190915282518201518201518151830152915101516040908101519151911515910152610b0f61226d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152608080870151855182015260a0808801518651820152610120880151858701805191909152918701518251909501949094526101008701518151909301929092529051439082015283015190830151610ba39190600190611be1565b602082015160800152610bb581611c6d565b50611759565b6001602085015151516003811115610bd557610bd56124bd565b1415610f2957610be734156012611b2e565b61014082018051515160c08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051610c2b9190600090611be1565b60e08201528151610c4a90610c439033906000611c55565b6013611b2e565b60e0810180516020908101515161010084018051919091528251820151820151815183015291518101516040908101519251921515920191909152820151610ca090610c999033906000611c55565b6014611b2e565b610100820151610cb7576000610120820152610d01565b8161010001518260a001518360c00151846101200151610cd79190612a1b565b610ce19190612a32565b610ceb9190612a51565b8260e00151610cfa9190612a73565b6101208201525b6001610d0c336119ce565b516001811115610d1e57610d1e6124bd565b14610d2a576000610d38565b610d33336119ce565b604001515b6101408201526001610d4933611b54565b516001811115610d5b57610d5b6124bd565b14610d67576000610d75565b610d7033611b54565b604001515b6001610d8033611aa1565b516001811115610d9257610d926124bd565b14610d9e576000610dac565b610da733611aa1565b604001515b826101200151610dbc9190612a1b565b826101400151610dcc9190612a32565b610dd69190612a73565b6101608201908152336000908152600560209081526040808320805460ff19908116600190811783558651928101929092556006845293829020805490941681178455610120860151930192909255610140840151610180850180519190915292518351820152915181518151815290830151928101929092527ea3a65d4c58a150fefd557d22e2225cca51c0795da3c86cc396a87bd53d5e72910160405180910390a16101808101516020840152610e8d61226d565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08087015185519091015261012080870151848601805191909152908601518151909401939093526101008087015184519093019290925291514392019190915260e083015190830151610ba39190600190611be1565b6002602085015151516003811115610f4357610f436124bd565b14156112fb57602084015151606001516101a0820152610f6534156015611b2e565b6101a0810151516101408301515151610f7e9190612a73565b6101c0820180519190915261014083018051516020908101518351909101528051516040908101518351901515910152519051610fbe9190600090611be1565b6101e082015281516101a082015151610fe491610fdd91339190611c55565b6016611b2e565b6101e081018051602090810151516102008401805191909152825182015182015181518301529151810151604090810151925192151592019190915282015161103b906110349033906000611c55565b6017611b2e565b61010082015161105257600061022082015261109c565b8161010001518260a001518360c001518461012001516110729190612a1b565b61107c9190612a32565b6110869190612a51565b8260e001516110959190612a73565b6102208201525b60016110a7336119ce565b5160018111156110b9576110b96124bd565b146110c55760006110d3565b6110ce336119ce565b604001515b610240820152336000818152600560205260409020805460ff191660019081179091559061110090611b54565b516001811115611112576111126124bd565b1461111e57600061112c565b61112733611b54565b604001515b600161113733611aa1565b516001811115611149576111496124bd565b14611155576000611163565b61115e33611aa1565b604001515b8261022001516111739190612a1b565b8261024001516111839190612a32565b61118d9190612a73565b33600090815260056020908152604080832060019081019490945560068252808320805460ff1990811686178255610220870151918601919091556004909252909120805490911690911790556101a0810151516102408201516111f19190612a73565b3360009081526004602090815260408083206001019390935591519081527f564b6b85bbf634a5c4ba393f7c9846c85c697a5c58b6b92583b5547b73d17cdc910160405180910390a16000604084015261124961226d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015260a0808501518351909101526101208401518183018051919091526102208401519051909101526101a0820151516101008401516112cd9190612a73565b6020820180516040019190915251436060909101526101e0820151610200830151610ba39190600190611be1565b6003602085015151516003811115611315576113156124bd565b1415611759576020840151516080015161026082015261133734156018611b2e565b610140820180515151610280830180519190915281515160209081015182519091015281515160409081015182519015159101529051905161137c9190600090611be1565b6102a0820152815161139c906113959033906000611c55565b6019611b2e565b6102a081018051602090810151516102c08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516113e79190600190611be1565b816102e0018190525061140a6114033384602001516000611c55565b601a611b2e565b6001611415336119ce565b516001811115611427576114276124bd565b14611433576000611441565b61143c336119ce565b604001515b61030082018190526102608201515161145d911015601b611b2e565b6102e0810151515161026082015151611479911015601c611b2e565b6101008201516114905760006103208201526114da565b8161010001518260a001518360c001518461012001516114b09190612a1b565b6114ba9190612a32565b6114c49190612a51565b8260e001516114d39190612a73565b6103208201525b336000818152600560205260409020805460ff191660019081179091559061150190611b54565b516001811115611513576115136124bd565b1461151f57600061152d565b61152833611b54565b604001515b600161153833611aa1565b51600181111561154a5761154a6124bd565b14611556576000611564565b61155f33611aa1565b604001515b8261032001516115749190612a1b565b8261030001516115849190612a32565b61158e9190612a73565b33600090815260056020908152604080832060019081019490945560068252808320805460ff199081168617825561032087015191860191909155600490925290912080549091169091179055610260810151516103008201516115f29190612a1b565b3360009081526004602090815260408083206001019390935591519081527f1d17acc0d6da32b5efa1bda1faa11c37d42c1d931e7bfa1ea739cc663f6b8415910160405180910390a160006060840152610260810151516102e0820151515161165b9190612a1b565b61034082018051919091526102e082018051516020908101518351909101525151604090810151915191151591015281516102608201515161169f91903390611d39565b6116a761226d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015260a0808501518351909101526101208401518183018051919091526103208401519051909101526102608201515161010084015161172b9190612a1b565b6020820180516040019190915251436060909101526102e0820151610340830151610ba39190600090611be1565b50505050565b61176f600160005414600d611b2e565b815161178a90158061178357508251600154145b600e611b2e565b60008080556002805461179c9061279a565b80601f01602080910402602001604051908101604052809291908181526020018280546117c89061279a565b80156118155780601f106117ea57610100808354040283529160200191611815565b820191906000526020600020905b8154815290600101906020018083116117f857829003601f168201915b505050505080602001905181019061182d9190612863565b905061185660408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16118a13415600a611b2e565b60a082015161010083015160200151516118bb9190612a73565b8151526101008201805160209081015181015183518201529051015160409081015182519015159082015282015160a0830151611905916118fe91339190611c55565b600b611b2e565b815161191d906001600160a01b03163314600c611b2e565b61192561226d565b60208084015182516001600160a01b03918216905260408086015184519216918301919091526060808601518451830152608080870151855183015260a08088015186519092019190915260c087015185519091015260e0860151848401805191909152805160009401849052805190920192909252514391015261010083015182516119b59190600190611be1565b6020820151608001526119c781611c6d565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611a1a57611a1a6124bd565b1415611a91576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611a5b57611a5b6124bd565b6001811115611a6c57611a6c6124bd565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115611aed57611aed6124bd565b1415611a91576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611a5b57611a5b6124bd565b816102f85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611ba057611ba06124bd565b1415611a91576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611a5b57611a5b6124bd565b611be96122b3565b60005b6002811015611c3557848160028110611c0757611c076129ef565b6020020151828260028110611c1e57611c1e6129ef565b602002015280611c2d81612a8b565b915050611bec565b5081818460028110611c4957611c496129ef565b60200201529392505050565b6000611c6383853085611d4d565b90505b9392505050565b611c756122fe565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015181850152845160809081015181860152855160a0908101519086015283860180515160c0870152805185015160e087015280518401516101008701528051909201516101208601529051015161014084015260046000554360015551611d1091839101612ae4565b60405160208183030381529060405260029080519060200190611d3492919061236a565b505050565b611d44838383611e27565b611d3457600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611db491612b80565b60006040518083038185875af1925050503d8060008114611df1576040519150601f19603f3d011682016040523d82523d6000602084013e611df6565b606091505b5091509150611e0782826001611ef8565b5080806020019051810190611e1c9190612b9c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e8691612b80565b60006040518083038185875af1925050503d8060008114611ec3576040519150601f19603f3d011682016040523d82523d6000602084013e611ec8565b606091505b5091509150611ed982826002611ef8565b5080806020019051810190611eee9190612b9c565b9695505050505050565b60608315611f07575081611c66565b825115611f175782518084602001fd5b60405163100960cb60e01b815260048101839052602401611b4b565b6040518060800160405280600015158152602001611f64604051806040016040528060008152602001600081525090565b815260006020820181905260409091015290565b604051806040016040528060008152602001611f926123ee565b905290565b6040805160a081018252600080825260208083018290528284018290528351808201855282815260608401528351908101909352825290608082015290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280611f92611fd6565b604080516103c081019091526000610360820181815261038083018290526103a08301919091528152602081016120666122b3565b815260408051606081018252600080825260208281018290529282015291019081526020016120936122b3565b8152602001600081526020016120c5604051806060016040528060008152602001600081526020016000151581525090565b815260408051606081018252600080825260208281018290529282015291019081526020016120f26122b3565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001612149604051806040016040528060008152602001600081525090565b81526020016121646040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016121916122b3565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016121da6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016122076122b3565b815260408051606081018252600080825260208281018290529282015291019081526020016122346122b3565b81526020016000815260200160008152602001611f92604051806060016040528060008152602001600081526020016000151581525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101611f92612401565b60405180604001604052806002905b6122e8604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816122c25790505090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611f926122b3565b8280546123769061279a565b90600052602060002090601f01602090048101928261239857600085556123de565b82601f106123b157805160ff19168380011785556123de565b828001600101855582156123de579182015b828111156123de5782518255916020019190600101906123c3565b506123ea929150612430565b5090565b6040518060200160405280611f92611f97565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001611f926122b3565b5b808211156123ea5760008155600101612431565b60006020828403121561245757600080fd5b5035919050565b600060c0828403121561247057600080fd5b50919050565b60006040828403121561247057600080fd5b6001600160a01b038116811461249d57600080fd5b50565b6000602082840312156124b257600080fd5b8135611c6681612488565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106124ea576124ea6124bd565b808352506020830151151560208301526040830151604083015292915050565b60005b8381101561252557818101518382015260200161250d565b838111156117595750506000910152565b828152604060208201526000825180604084015261255b81606085016020870161250a565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156125a9576125a9612570565b60405290565b6040516020810167ffffffffffffffff811182821017156125a9576125a9612570565b60405160a0810167ffffffffffffffff811182821017156125a9576125a9612570565b6040516060810167ffffffffffffffff811182821017156125a9576125a9612570565b604051610120810167ffffffffffffffff811182821017156125a9576125a9612570565b604051610160810167ffffffffffffffff811182821017156125a9576125a9612570565b801515811461249d57600080fd5b60006020828403121561268057600080fd5b6040516020810181811067ffffffffffffffff821117156126a3576126a3612570565b6040529135825250919050565b600081830360c08112156126c357600080fd5b6126cb612586565b8335815260a0601f19830112156126e157600080fd5b6126e96125af565b91506126f36125d2565b60208501356004811061270557600080fd5b8152604085013561271581612660565b6020820152606085013561272881612660565b604082015261273a866080870161266e565b606082015261274c8660a0870161266e565b6080820152825260208101919091529392505050565b60006040828403121561277457600080fd5b61277c612586565b82358152602083013561278e81612660565b60208201529392505050565b600181811c908216806127ae57607f821691505b6020821081141561247057634e487b7160e01b600052602260045260246000fd5b8051611a9c81612488565b600082601f8301126127eb57600080fd5b6127f3612586565b8060c084018581111561280557600080fd5b845b8181101561285857606081880312156128205760008081fd5b6128286125f5565b815181526020808301518183015260408084015161284581612660565b9083015290855290930192606001612807565b509095945050505050565b60006101c0828403121561287657600080fd5b61287e612618565b612887836127cf565b8152612895602084016127cf565b60208201526128a6604084016127cf565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006128ec858286016127da565b908201529392505050565b6000610200828403121561290a57600080fd5b61291261263c565b61291b836127cf565b8152612929602084016127cf565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406128ec858286016127da565b81518152602082015151805160c083019190600481106129b3576129b36124bd565b80602085015250602081015115156040840152604081015115156060840152606081015151608084015260808101515160a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015612a2d57612a2d612a05565b500390565b6000816000190483118215151615612a4c57612a4c612a05565b500290565b600082612a6e57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115612a8657612a86612a05565b500190565b6000600019821415612a9f57612a9f612a05565b5060010190565b8060005b6002811015611759578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612aaa565b81516001600160a01b0316815261020081016020830151612b1060208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612b7882850182612aa6565b505092915050565b60008251612b9281846020870161250a565b9190910192915050565b600060208284031215612bae57600080fd5b8151611c668161266056fea26469706673582212202322df452104a21c45cc527409b3b9c6c17af0e9c1fbc1b87c7a085c0a4ce45164736f6c634300080c0033`,
  BytecodeLen: 13179,
  Which: `oD`,
  version: 6,
  views: {
    State: {
      info: `State_info`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:123:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:265:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:192:21:after expr stmt semicolon',
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
  "Farm_claim": Farm_claim,
  "Farm_getInfo": Farm_getInfo,
  "Farm_stake": Farm_stake,
  "Farm_unstake": Farm_unstake,
  "Farmer": Farmer
  };
export const _APIs = {
  Farm: {
    claim: Farm_claim,
    getInfo: Farm_getInfo,
    stake: Farm_stake,
    unstake: Farm_unstake
    }
  };

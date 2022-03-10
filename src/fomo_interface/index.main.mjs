// Automatically generated with Reach 0.1.8 (9e3e58f4)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (9e3e58f4)';
export const _backendVersion = 10;

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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['nftPrize', ctc2], ['tokenOwnedByUsers', ctc1], ['token', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1]]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc1
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc8;
  
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v827, v828, v829, v830, v831, v832, v833, v834, v836, v849, v877] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async () => {
                
                const v1484 = {
                  currentPrice: v897,
                  currentTotal: v899,
                  currentWinner: v900,
                  deadline: v830,
                  deltaDeadline: v831,
                  endTimestamp: v894,
                  nftPrize: v829,
                  paidToFunder: v896,
                  token: v849,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v1484;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async () => {
                
                const v1484 = {
                  currentPrice: v897,
                  currentTotal: v899,
                  currentWinner: v900,
                  deadline: v830,
                  deltaDeadline: v831,
                  endTimestamp: v894,
                  nftPrize: v829,
                  paidToFunder: v896,
                  token: v849,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v1484;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = svs;
              return (await ((async () => {
                
                const v924 = {
                  currentPrice: v897,
                  currentTotal: v899,
                  currentWinner: v900,
                  deadline: v830,
                  deltaDeadline: v831,
                  endTimestamp: v894,
                  nftPrize: v829,
                  paidToFunder: v896,
                  token: v849,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v924;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v827, v828, v829, v830, v831, v832, v833, v834, v836, v849, v877] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async (_v1485 ) => {
                  const v1485 = stdlib.protect(ctc1, _v1485, null);
                
                const v1486 = stdlib.add(v1485, v832);
                
                return v1486;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async (_v1485 ) => {
                  const v1485 = stdlib.protect(ctc1, _v1485, null);
                
                const v1486 = stdlib.add(v1485, v832);
                
                return v1486;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = svs;
              return (await ((async (_v925 ) => {
                  const v925 = stdlib.protect(ctc1, _v925, null);
                
                const v926 = stdlib.add(v925, v832);
                
                return v926;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v827, v828, v829, v830, v831, v832, v833, v834, v836, v849, v877] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async (_v1487 ) => {
                  const v1487 = stdlib.protect(ctc1, _v1487, null);
                
                const v1488 = stdlib.sub(v1487, v832);
                
                return v1488;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900] = svs;
              return (await ((async (_v1487 ) => {
                  const v1487 = stdlib.protect(ctc1, _v1487, null);
                
                const v1488 = stdlib.sub(v1487, v832);
                
                return v1488;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = svs;
              return (await ((async (_v927 ) => {
                  const v927 = stdlib.protect(ctc1, _v927, null);
                
                const v928 = stdlib.sub(v927, v832);
                
                return v928;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc5],
      3: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0],
      6: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0],
      7: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1]
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
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Api_buyDiscount(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Api_buyDiscount expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Api_buyDiscount expects to receive an interact object as its second argument.`));}
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
  const ctc9 = stdlib.T_Data({
    Api_buyDiscount0_136: ctc8,
    Api_buyTicket0_136: ctc8,
    Api_buyTimeReduction0_136: ctc8
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
  
  
  const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1]);
  const v944 = ctc.selfAddress();
  const v946 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:293:14:application call to [unknown function] (defined at: ./index.rsh:293:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyDiscount0_136" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v947 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v944), null);
  const v948 = stdlib.fromSome(v947, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
  const v949 = stdlib.lt(v948, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v949, {
    at: './index.rsh:293:23:application',
    fs: ['at ./index.rsh:293:14:application call to [unknown function] (defined at: ./index.rsh:293:14:function exp)', 'at ./index.rsh:293:14:application call to [unknown function] (defined at: ./index.rsh:293:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyDiscount0_136" (defined at: ./index.rsh:291:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v951 = ['Api_buyDiscount0_136', v946];
  
  let v963;
  const v967 = stdlib.ge(v948, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
  if (v967) {
    v963 = stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v968 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v970 = v968[v948];
    v963 = v970;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908, v951],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:294:18:decimal', stdlib.UInt_max, 0), [[v963, v849]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
      
      switch (v1020[0]) {
        case 'Api_buyDiscount0_136': {
          const v1023 = v1020[1];
          let v1028;
          const v1029 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1019), null);
          const v1030 = stdlib.fromSome(v1029, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1031 = stdlib.lt(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1031, {
            at: './index.rsh:145:12:application',
            fs: ['at ./index.rsh:294:38:application call to "getDiscountPrice" (defined at: ./index.rsh:143:36:function exp)', 'at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Api_buyDiscount'
            });
          const v1032 = stdlib.ge(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1032) {
            v1028 = stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1033 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1035 = v1033[v1030];
            v1028 = v1035;
            }
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v1084 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1085 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1086 = stdlib.add(v1085, v1028);
          const v1089 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1090 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1091 = [v1086, v1089, v1090];
          const v1092 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1091);
          sim_r.txns.push({
            amt: v1028,
            kind: 'to',
            tok: v849
            });
          undefined;
          const v1097 = null;
          const v1098 = await txn1.getOutput('Api_buyDiscount', 'v1097', ctc0, v1097);
          
          const v1105 = stdlib.add(v1030, stdlib.checkedBigNumberify('./index.rsh:303:56:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1019, v1105);
          const v2481 = v894;
          const v2483 = v896;
          const v2484 = v897;
          const v2485 = v899;
          const v2486 = v900;
          const v2488 = v1092;
          const v2489 = v908;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_136': {
          const v1175 = v1020[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_136': {
          const v1327 = v1020[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
  switch (v1020[0]) {
    case 'Api_buyDiscount0_136': {
      const v1023 = v1020[1];
      let v1028;
      const v1029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
      const v1030 = stdlib.fromSome(v1029, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
      const v1031 = stdlib.lt(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1031, {
        at: './index.rsh:145:12:application',
        fs: ['at ./index.rsh:294:38:application call to "getDiscountPrice" (defined at: ./index.rsh:143:36:function exp)', 'at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1032 = stdlib.ge(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
      if (v1032) {
        v1028 = stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1033 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v1035 = v1033[v1030];
        v1028 = v1035;
        }
      ;
      const v1084 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
      const v1085 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
      const v1086 = stdlib.add(v1085, v1028);
      const v1089 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
      const v1090 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
      const v1091 = [v1086, v1089, v1090];
      const v1092 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1091);
      ;
      undefined;
      const v1097 = null;
      const v1098 = await txn1.getOutput('Api_buyDiscount', 'v1097', ctc0, v1097);
      if (v537) {
        stdlib.protect(ctc0, await interact.out(v1023, v1098), {
          at: './index.rsh:292:11:application',
          fs: ['at ./index.rsh:292:11:application call to [unknown function] (defined at: ./index.rsh:292:11:function exp)', 'at ./index.rsh:299:21:application call to "callback" (defined at: ./index.rsh:295:22:function exp)', 'at ./index.rsh:295:22:application call to [unknown function] (defined at: ./index.rsh:295:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v1105 = stdlib.add(v1030, stdlib.checkedBigNumberify('./index.rsh:303:56:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1019, v1105);
      const v2481 = v894;
      const v2483 = v896;
      const v2484 = v897;
      const v2485 = v899;
      const v2486 = v900;
      const v2488 = v1092;
      const v2489 = v908;
      return;
      
      break;
      }
    case 'Api_buyTicket0_136': {
      const v1175 = v1020[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_136': {
      const v1327 = v1020[1];
      return;
      break;
      }
    }
  
  
  };
export async function Api_buyTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Api_buyTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Api_buyTicket expects to receive an interact object as its second argument.`));}
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
  const ctc9 = stdlib.T_Data({
    Api_buyDiscount0_136: ctc8,
    Api_buyTicket0_136: ctc8,
    Api_buyTimeReduction0_136: ctc8
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
  
  
  const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1]);
  const v933 = ctc.selfAddress();
  const v935 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:14:application call to [unknown function] (defined at: ./index.rsh:262:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyTicket0_136" (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v937 = stdlib.gt(v833, stdlib.checkedBigNumberify('./index.rsh:263:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v937, {
    at: './index.rsh:263:19:application',
    fs: ['at ./index.rsh:262:14:application call to [unknown function] (defined at: ./index.rsh:262:14:function exp)', 'at ./index.rsh:262:14:application call to [unknown function] (defined at: ./index.rsh:262:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyTicket0_136" (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v938 = v907[stdlib.checkedBigNumberify('./index.rsh:264:27:application', stdlib.UInt_max, 1)];
  const v939 = v938[stdlib.checkedBigNumberify('./index.rsh:264:27:application', stdlib.UInt_max, 0)];
  const v940 = stdlib.gt(v939, v834);
  stdlib.assert(v940, {
    at: './index.rsh:264:19:application',
    fs: ['at ./index.rsh:262:14:application call to [unknown function] (defined at: ./index.rsh:262:14:function exp)', 'at ./index.rsh:262:14:application call to [unknown function] (defined at: ./index.rsh:262:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyTicket0_136" (defined at: ./index.rsh:260:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v942 = ['Api_buyTicket0_136', v935];
  
  let v981;
  const v982 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v933), null);
  const v983 = stdlib.fromSome(v982, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
  const v984 = stdlib.ge(v983, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
  if (v984) {
    v981 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v985 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
    const v987 = v985[v983];
    v981 = v987;
    }
  const v988 = stdlib.lt(v981, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v988, {
    at: './index.rsh:165:12:application',
    fs: ['at ./index.rsh:266:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:266:14:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v989 = stdlib.div(v981, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
  const v990 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v989);
  const v991 = stdlib.mul(v897, v990);
  
  const txn1 = await (ctc.sendrecv({
    args: [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908, v942],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v991, [[stdlib.checkedBigNumberify('./index.rsh:266:54:decimal', stdlib.UInt_max, 0), v849]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
      
      switch (v1020[0]) {
        case 'Api_buyDiscount0_136': {
          const v1023 = v1020[1];
          
          break;
          }
        case 'Api_buyTicket0_136': {
          const v1175 = v1020[1];
          let v1195;
          const v1196 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1019), null);
          const v1197 = stdlib.fromSome(v1196, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1198 = stdlib.ge(v1197, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1198) {
            v1195 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1201 = v1199[v1197];
            v1195 = v1201;
            }
          const v1202 = stdlib.lt(v1195, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1202, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:266:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:266:14:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Api_buyTicket'
            });
          const v1203 = stdlib.div(v1195, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1204 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1203);
          const v1205 = stdlib.mul(v897, v1204);
          const v1235 = stdlib.add(v908, v1205);
          sim_r.txns.push({
            amt: v1205,
            kind: 'to',
            tok: undefined
            });
          const v1241 = v938[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1242 = v938[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1243 = [v939, v1241, v1242];
          const v1244 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1243);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v849
            });
          undefined;
          const v1261 = v1244[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 1)];
          const v1262 = v1261[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 0)];
          const v1263 = stdlib.gt(v1262, v834);
          stdlib.assert(v1263, {
            at: './index.rsh:269:20:application',
            fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Api_buyTicket'
            });
          const v1264 = null;
          const v1265 = await txn1.getOutput('Api_buyTicket', 'v1264', ctc0, v1264);
          
          const v1270 = stdlib.div(v897, v833);
          const v1271 = stdlib.add(v897, v832);
          const v1276 = stdlib.sub(v1235, v1270);
          sim_r.txns.push({
            amt: v1270,
            kind: 'from',
            to: v827,
            tok: undefined
            });
          const v1282 = stdlib.sub(v1262, v834);
          const v1285 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1)];
          const v1286 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 2)];
          const v1287 = [v1282, v1285, v1286];
          const v1288 = stdlib.Array_set(v1244, stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1), v1287);
          sim_r.txns.push({
            amt: v834,
            kind: 'from',
            to: v1019,
            tok: v849
            });
          let v1289;
          const v1290 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1019), null);
          const v1291 = stdlib.fromSome(v1290, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1292 = stdlib.ge(v1291, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1292) {
            v1289 = stdlib.checkedBigNumberify('./index.rsh:196:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1295 = v1293[v1291];
            v1289 = v1295;
            }
          const v1296 = stdlib.sub(v831, v1289);
          let v1298;
          if (v1198) {
            v1298 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1302 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1304 = v1302[v1197];
            v1298 = v1304;
            }
          const v1305 = stdlib.lt(v1298, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1305, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:284:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Api_buyTicket'
            });
          const v1306 = stdlib.div(v1298, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1307 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1306);
          const v1308 = stdlib.mul(v897, v1307);
          const v1309 = stdlib.add(v899, v1308);
          const v1310 = stdlib.add(v896, v1270);
          const v1311 = stdlib.add(v894, v1296);
          const v2557 = v1311;
          const v2559 = v1310;
          const v2560 = v1271;
          const v2561 = v1309;
          const v2562 = v1019;
          const v2564 = v1288;
          const v2565 = v1276;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_136': {
          const v1327 = v1020[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
  switch (v1020[0]) {
    case 'Api_buyDiscount0_136': {
      const v1023 = v1020[1];
      return;
      break;
      }
    case 'Api_buyTicket0_136': {
      const v1175 = v1020[1];
      let v1195;
      const v1196 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
      const v1197 = stdlib.fromSome(v1196, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
      const v1198 = stdlib.ge(v1197, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
      if (v1198) {
        v1195 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1201 = v1199[v1197];
        v1195 = v1201;
        }
      const v1202 = stdlib.lt(v1195, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1202, {
        at: './index.rsh:165:12:application',
        fs: ['at ./index.rsh:266:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:266:14:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1203 = stdlib.div(v1195, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
      const v1204 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1203);
      const v1205 = stdlib.mul(v897, v1204);
      const v1235 = stdlib.add(v908, v1205);
      ;
      const v1241 = v938[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
      const v1242 = v938[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
      const v1243 = [v939, v1241, v1242];
      const v1244 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1243);
      ;
      undefined;
      const v1261 = v1244[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 1)];
      const v1262 = v1261[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 0)];
      const v1263 = stdlib.gt(v1262, v834);
      stdlib.assert(v1263, {
        at: './index.rsh:269:20:application',
        fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1264 = null;
      const v1265 = await txn1.getOutput('Api_buyTicket', 'v1264', ctc0, v1264);
      if (v537) {
        stdlib.protect(ctc0, await interact.out(v1175, v1265), {
          at: './index.rsh:261:11:application',
          fs: ['at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)', 'at ./index.rsh:270:21:application call to "callback" (defined at: ./index.rsh:267:22:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1270 = stdlib.div(v897, v833);
      const v1271 = stdlib.add(v897, v832);
      const v1276 = stdlib.sub(v1235, v1270);
      ;
      const v1282 = stdlib.sub(v1262, v834);
      const v1285 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1)];
      const v1286 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 2)];
      const v1287 = [v1282, v1285, v1286];
      const v1288 = stdlib.Array_set(v1244, stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1), v1287);
      ;
      let v1289;
      const v1290 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
      const v1291 = stdlib.fromSome(v1290, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
      const v1292 = stdlib.ge(v1291, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
      if (v1292) {
        v1289 = stdlib.checkedBigNumberify('./index.rsh:196:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
        const v1295 = v1293[v1291];
        v1289 = v1295;
        }
      const v1296 = stdlib.sub(v831, v1289);
      let v1298;
      if (v1198) {
        v1298 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1302 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1304 = v1302[v1197];
        v1298 = v1304;
        }
      const v1305 = stdlib.lt(v1298, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1305, {
        at: './index.rsh:165:12:application',
        fs: ['at ./index.rsh:284:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1306 = stdlib.div(v1298, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
      const v1307 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1306);
      const v1308 = stdlib.mul(v897, v1307);
      const v1309 = stdlib.add(v899, v1308);
      const v1310 = stdlib.add(v896, v1270);
      const v1311 = stdlib.add(v894, v1296);
      const v2557 = v1311;
      const v2559 = v1310;
      const v2560 = v1271;
      const v2561 = v1309;
      const v2562 = v1019;
      const v2564 = v1288;
      const v2565 = v1276;
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_136': {
      const v1327 = v1020[1];
      return;
      break;
      }
    }
  
  
  };
export async function Api_buyTimeReduction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Api_buyTimeReduction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Api_buyTimeReduction expects to receive an interact object as its second argument.`));}
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
  const ctc9 = stdlib.T_Data({
    Api_buyDiscount0_136: ctc8,
    Api_buyTicket0_136: ctc8,
    Api_buyTimeReduction0_136: ctc8
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
  
  
  const [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1]);
  const v953 = ctc.selfAddress();
  const v955 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:310:14:application call to [unknown function] (defined at: ./index.rsh:310:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyTimeReduction0_136" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v956 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v953), null);
  const v957 = stdlib.fromSome(v956, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
  const v958 = stdlib.lt(v957, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v958, {
    at: './index.rsh:310:23:application',
    fs: ['at ./index.rsh:310:14:application call to [unknown function] (defined at: ./index.rsh:310:14:function exp)', 'at ./index.rsh:310:14:application call to [unknown function] (defined at: ./index.rsh:310:14:function exp)', 'at ./index.rsh:221:23:application call to "runApi_buyTimeReduction0_136" (defined at: ./index.rsh:308:13:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v960 = ['Api_buyTimeReduction0_136', v955];
  
  let v1002;
  const v1006 = stdlib.ge(v957, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
  if (v1006) {
    v1002 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1007 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v1009 = v1007[v957];
    v1002 = v1009;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908, v960],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:311:18:decimal', stdlib.UInt_max, 0), [[v1002, v849]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
      
      switch (v1020[0]) {
        case 'Api_buyDiscount0_136': {
          const v1023 = v1020[1];
          
          break;
          }
        case 'Api_buyTicket0_136': {
          const v1175 = v1020[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_136': {
          const v1327 = v1020[1];
          let v1365;
          const v1366 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1019), null);
          const v1367 = stdlib.fromSome(v1366, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1368 = stdlib.lt(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1368, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:311:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:182:41:function exp)', 'at ./index.rsh:311:14:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Api_buyTimeReduction'
            });
          const v1369 = stdlib.ge(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1369) {
            v1365 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1370 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1372 = v1370[v1367];
            v1365 = v1372;
            }
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v1388 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1389 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1390 = stdlib.add(v1389, v1365);
          const v1393 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1394 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1395 = [v1390, v1393, v1394];
          const v1396 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1395);
          sim_r.txns.push({
            amt: v1365,
            kind: 'to',
            tok: v849
            });
          undefined;
          const v1469 = null;
          const v1470 = await txn1.getOutput('Api_buyTimeReduction', 'v1469', ctc0, v1469);
          
          const v1477 = stdlib.add(v1367, stdlib.checkedBigNumberify('./index.rsh:318:66:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1019, v1477);
          const v2633 = v894;
          const v2635 = v896;
          const v2636 = v897;
          const v2637 = v899;
          const v2638 = v900;
          const v2640 = v1396;
          const v2641 = v908;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn1;
  switch (v1020[0]) {
    case 'Api_buyDiscount0_136': {
      const v1023 = v1020[1];
      return;
      break;
      }
    case 'Api_buyTicket0_136': {
      const v1175 = v1020[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_136': {
      const v1327 = v1020[1];
      let v1365;
      const v1366 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
      const v1367 = stdlib.fromSome(v1366, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
      const v1368 = stdlib.lt(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1368, {
        at: './index.rsh:184:12:application',
        fs: ['at ./index.rsh:311:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:182:41:function exp)', 'at ./index.rsh:311:14:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1369 = stdlib.ge(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
      if (v1369) {
        v1365 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1370 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v1372 = v1370[v1367];
        v1365 = v1372;
        }
      ;
      const v1388 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
      const v1389 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
      const v1390 = stdlib.add(v1389, v1365);
      const v1393 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
      const v1394 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
      const v1395 = [v1390, v1393, v1394];
      const v1396 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1395);
      ;
      undefined;
      const v1469 = null;
      const v1470 = await txn1.getOutput('Api_buyTimeReduction', 'v1469', ctc0, v1469);
      if (v537) {
        stdlib.protect(ctc0, await interact.out(v1327, v1470), {
          at: './index.rsh:309:11:application',
          fs: ['at ./index.rsh:309:11:application call to [unknown function] (defined at: ./index.rsh:309:11:function exp)', 'at ./index.rsh:314:21:application call to "callback" (defined at: ./index.rsh:312:22:function exp)', 'at ./index.rsh:312:22:application call to [unknown function] (defined at: ./index.rsh:312:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v1477 = stdlib.add(v1367, stdlib.checkedBigNumberify('./index.rsh:318:66:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1019, v1477);
      const v2633 = v894;
      const v2635 = v896;
      const v2636 = v897;
      const v2637 = v899;
      const v2638 = v900;
      const v2640 = v1396;
      const v2641 = v908;
      return;
      
      break;
      }
    }
  
  
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Data({
    Api_buyDiscount0_136: ctc4,
    Api_buyTicket0_136: ctc4,
    Api_buyTimeReduction0_136: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
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
  
  
  const v806 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v807 = [v806, v806];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v828, v829, v830, v831, v832, v833, v834], secs: v836, time: v835, didSend: v52, from: v827 } = txn1;
  const v837 = v807[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0)];
  const v839 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 1)];
  const v840 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 2)];
  const v841 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v839, v840];
  const v842 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0), v841);
  ;
  ;
  const v844 = 'Metafomo                        ';
  const v845 = 'METAFOMO';
  const v846 = 'https://metalabs.technology                                                                     ';
  const v847 = '                                ';
  const v848 = undefined;
  const v849 = await txn1.getOutput('internal', 'v848', ctc3, v848);
  const v850 = [v829];
  const v1538 = v850[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v1542 = stdlib.tokenEq(v849, v1538);
  const v858 = v1542 ? false : true;
  stdlib.assert(v858, {
    at: './index.rsh:124:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v859 = v842[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v861 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v862 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
  const v863 = [stdlib.UInt_max, v861, v862];
  const v864 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v863);
  const v866 = v864[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v867 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
  const v869 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
  const v870 = [v867, stdlib.UInt_max, v869];
  const v871 = stdlib.Array_set(v864, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v870);
  const v872 = v871[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v873 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
  const v874 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v876 = [v873, v874, false];
  const v877 = stdlib.Array_set(v871, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v876);
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:208:28:application call to "liftedInteract" (defined at: ./index.rsh:208:28:application)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v881, time: v880, didSend: v81, from: v879 } = txn2;
  ;
  const v882 = v877[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
  const v883 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
  const v884 = stdlib.add(v883, stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, 1));
  const v887 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 1)];
  const v888 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 2)];
  const v889 = [v884, v887, v888];
  const v890 = stdlib.Array_set(v877, stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0), v889);
  ;
  const v891 = stdlib.addressEq(v827, v879);
  stdlib.assert(v891, {
    at: './index.rsh:210:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v893 = stdlib.add(v836, v830);
  let v894 = v893;
  let v895 = true;
  let v896 = stdlib.checkedBigNumberify('./index.rsh:221:59:decimal', stdlib.UInt_max, 0);
  let v897 = v828;
  let v899 = stdlib.checkedBigNumberify('./index.rsh:221:43:decimal', stdlib.UInt_max, 0);
  let v900 = v827;
  let v901 = v880;
  let v907 = v890;
  let v908 = stdlib.checkedBigNumberify('./index.rsh:107:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v895;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v894],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908],
        evt_cnt: 0,
        funcNum: 7,
        lct: v901,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:324:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1481, time: v1480, didSend: v641, from: v1479 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:324:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv894 = v894;
          const cv895 = false;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1480;
          const cv907 = v907;
          const cv908 = v908;
          
          await (async () => {
            const v894 = cv894;
            const v895 = cv895;
            const v896 = cv896;
            const v897 = cv897;
            const v899 = cv899;
            const v900 = cv900;
            const v901 = cv901;
            const v907 = cv907;
            const v908 = cv908;
            
            if (await (async () => {
              
              return v895;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v908,
                kind: 'from',
                to: v900,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:329:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v900,
                tok: v829
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1481, time: v1480, didSend: v641, from: v1479 } = txn4;
      ;
      const cv894 = v894;
      const cv895 = false;
      const cv896 = v896;
      const cv897 = v897;
      const cv899 = v899;
      const cv900 = v900;
      const cv901 = v1480;
      const cv907 = v907;
      const cv908 = v908;
      
      v894 = cv894;
      v895 = cv895;
      v896 = cv896;
      v897 = cv897;
      v899 = cv899;
      v900 = cv900;
      v901 = cv901;
      v907 = cv907;
      v908 = cv908;
      
      continue;
      }
    else {
      const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn3;
      switch (v1020[0]) {
        case 'Api_buyDiscount0_136': {
          const v1023 = v1020[1];
          let v1028;
          const v1029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
          const v1030 = stdlib.fromSome(v1029, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1031 = stdlib.lt(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1031, {
            at: './index.rsh:145:12:application',
            fs: ['at ./index.rsh:294:38:application call to "getDiscountPrice" (defined at: ./index.rsh:143:36:function exp)', 'at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1032 = stdlib.ge(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1032) {
            v1028 = stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1033 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1035 = v1033[v1030];
            v1028 = v1035;
            }
          ;
          const v1084 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1085 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1086 = stdlib.add(v1085, v1028);
          const v1089 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1090 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1091 = [v1086, v1089, v1090];
          const v1092 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1091);
          ;
          undefined;
          const v1097 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1097', ctc0, v1097);
          const v1105 = stdlib.add(v1030, stdlib.checkedBigNumberify('./index.rsh:303:56:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1019, v1105);
          const cv894 = v894;
          const cv895 = true;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1021;
          const cv907 = v1092;
          const cv908 = v908;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_136': {
          const v1175 = v1020[1];
          let v1195;
          const v1196 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
          const v1197 = stdlib.fromSome(v1196, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1198 = stdlib.ge(v1197, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1198) {
            v1195 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1201 = v1199[v1197];
            v1195 = v1201;
            }
          const v1202 = stdlib.lt(v1195, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1202, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:266:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:266:14:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1203 = stdlib.div(v1195, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1204 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1203);
          const v1205 = stdlib.mul(v897, v1204);
          const v1235 = stdlib.add(v908, v1205);
          ;
          const v1236 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1237 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1241 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1242 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1243 = [v1237, v1241, v1242];
          const v1244 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1243);
          ;
          undefined;
          const v1260 = stdlib.gt(v833, stdlib.checkedBigNumberify('./index.rsh:268:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1260, {
            at: './index.rsh:268:20:application',
            fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1261 = v1244[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 1)];
          const v1262 = v1261[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 0)];
          const v1263 = stdlib.gt(v1262, v834);
          stdlib.assert(v1263, {
            at: './index.rsh:269:20:application',
            fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1264 = null;
          await txn3.getOutput('Api_buyTicket', 'v1264', ctc0, v1264);
          const v1270 = stdlib.div(v897, v833);
          const v1271 = stdlib.add(v897, v832);
          stdlib.protect(ctc0, await interact.showPurchase(v1019, v897, v1271), {
            at: './index.rsh:275:51:application',
            fs: ['at ./index.rsh:275:23:application call to [unknown function] (defined at: ./index.rsh:275:27:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1276 = stdlib.sub(v1235, v1270);
          ;
          const v1282 = stdlib.sub(v1262, v834);
          const v1285 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1)];
          const v1286 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 2)];
          const v1287 = [v1282, v1285, v1286];
          const v1288 = stdlib.Array_set(v1244, stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1), v1287);
          ;
          let v1289;
          const v1290 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
          const v1291 = stdlib.fromSome(v1290, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1292 = stdlib.ge(v1291, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1292) {
            v1289 = stdlib.checkedBigNumberify('./index.rsh:196:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1295 = v1293[v1291];
            v1289 = v1295;
            }
          const v1296 = stdlib.sub(v831, v1289);
          let v1298;
          if (v1198) {
            v1298 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1302 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1304 = v1302[v1197];
            v1298 = v1304;
            }
          const v1305 = stdlib.lt(v1298, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1305, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:284:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1306 = stdlib.div(v1298, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1307 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1306);
          const v1308 = stdlib.mul(v897, v1307);
          const v1309 = stdlib.add(v899, v1308);
          const v1310 = stdlib.add(v896, v1270);
          const v1311 = stdlib.add(v894, v1296);
          const cv894 = v1311;
          const cv895 = true;
          const cv896 = v1310;
          const cv897 = v1271;
          const cv899 = v1309;
          const cv900 = v1019;
          const cv901 = v1021;
          const cv907 = v1288;
          const cv908 = v1276;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_136': {
          const v1327 = v1020[1];
          let v1365;
          const v1366 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
          const v1367 = stdlib.fromSome(v1366, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1368 = stdlib.lt(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1368, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:311:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:182:41:function exp)', 'at ./index.rsh:311:14:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1369 = stdlib.ge(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1369) {
            v1365 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1370 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1372 = v1370[v1367];
            v1365 = v1372;
            }
          ;
          const v1388 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1389 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1390 = stdlib.add(v1389, v1365);
          const v1393 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1394 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1395 = [v1390, v1393, v1394];
          const v1396 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1395);
          ;
          undefined;
          const v1469 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1469', ctc0, v1469);
          const v1477 = stdlib.add(v1367, stdlib.checkedBigNumberify('./index.rsh:318:66:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1019, v1477);
          const cv894 = v894;
          const cv895 = true;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1021;
          const cv907 = v1396;
          const cv908 = v908;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v900), {
    at: './index.rsh:92:29:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:32:function exp)', 'at ./index.rsh:331:16:application call to "showOutcome" (defined at: ./index.rsh:90:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900],
    evt_cnt: 0,
    funcNum: 3,
    lct: v901,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:334:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1512, time: v1511, didSend: v671, from: v1510 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:334:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1513 = v1511;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v829
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1512, time: v1511, didSend: v671, from: v1510 } = txn3;
  ;
  let v1513 = v1511;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1525, time: v1524, didSend: v680, from: v1523 } = txn4;
    ;
    const v1526 = stdlib.addressEq(v827, v1523);
    stdlib.assert(v1526, {
      at: './index.rsh:337:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv1513 = v1524;
    
    v1513 = cv1513;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
export async function Funder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Funder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Funder expects to receive an interact object as its second argument.`));}
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
    deadline: ctc1,
    deltaDeadline: ctc1,
    nftPrize: ctc3,
    ticketFeeDenominator: ctc1,
    ticketPrice: ctc1,
    tokensGivenPerTicket: ctc1,
    unitPrice: ctc1
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Api_buyDiscount0_136: ctc5,
    Api_buyTicket0_136: ctc5,
    Api_buyTimeReduction0_136: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
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
  
  
  const v806 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v807 = [v806, v806];
  const v818 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:112:38:application',
    fs: ['at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v819 = v818.ticketPrice;
  const v820 = v818.nftPrize;
  const v821 = v818.deadline;
  const v822 = v818.deltaDeadline;
  const v823 = v818.unitPrice;
  const v824 = v818.ticketFeeDenominator;
  const v825 = v818.tokensGivenPerTicket;
  const v826 = stdlib.gt(v824, stdlib.checkedBigNumberify('./index.rsh:113:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v826, {
    at: './index.rsh:113:12:application',
    fs: ['at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v819, v820, v821, v822, v823, v824, v825],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v828, v829, v830, v831, v832, v833, v834], secs: v836, time: v835, didSend: v52, from: v827 } = txn1;
      
      const v837 = v807[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0)];
      const v839 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 1)];
      const v840 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 2)];
      const v841 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v839, v840];
      const v842 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0), v841);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v829
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:115:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v844 = 'Metafomo                        ';
      const v845 = 'METAFOMO';
      const v846 = 'https://metalabs.technology                                                                     ';
      const v847 = '                                ';
      const v848 = stdlib.simTokenNew(sim_r, v844, v845, v846, v847, stdlib.UInt_max, undefined, getSimTokCtr());
      const v849 = await txn1.getOutput('internal', 'v848', ctc3, v848);
      const v850 = [v829];
      const v1538 = v850[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v1542 = stdlib.tokenEq(v849, v1538);
      const v858 = v1542 ? false : true;
      stdlib.assert(v858, {
        at: './index.rsh:124:32:application',
        fs: [],
        msg: 'New token is unique',
        who: 'Funder'
        });
      const v859 = v842[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
      const v861 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
      const v862 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
      const v863 = [stdlib.UInt_max, v861, v862];
      const v864 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v863);
      const v866 = v864[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
      const v867 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
      const v869 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
      const v870 = [v867, stdlib.UInt_max, v869];
      const v871 = stdlib.Array_set(v864, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v870);
      const v872 = v871[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
      const v873 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
      const v874 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
      const v876 = [v873, v874, false];
      const v877 = stdlib.Array_set(v871, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v876);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v828, v829, v830, v831, v832, v833, v834], secs: v836, time: v835, didSend: v52, from: v827 } = txn1;
  const v837 = v807[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0)];
  const v839 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 1)];
  const v840 = v837[stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 2)];
  const v841 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v839, v840];
  const v842 = stdlib.Array_set(v807, stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, 0), v841);
  ;
  ;
  const v844 = 'Metafomo                        ';
  const v845 = 'METAFOMO';
  const v846 = 'https://metalabs.technology                                                                     ';
  const v847 = '                                ';
  const v848 = undefined;
  const v849 = await txn1.getOutput('internal', 'v848', ctc3, v848);
  const v850 = [v829];
  const v1538 = v850[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v1542 = stdlib.tokenEq(v849, v1538);
  const v858 = v1542 ? false : true;
  stdlib.assert(v858, {
    at: './index.rsh:124:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v859 = v842[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v861 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v862 = v859[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
  const v863 = [stdlib.UInt_max, v861, v862];
  const v864 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v863);
  const v866 = v864[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v867 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
  const v869 = v866[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 2)];
  const v870 = [v867, stdlib.UInt_max, v869];
  const v871 = stdlib.Array_set(v864, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v870);
  const v872 = v871[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v873 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 0)];
  const v874 = v872[stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1)];
  const v876 = [v873, v874, false];
  const v877 = stdlib.Array_set(v871, stdlib.checkedBigNumberify('./index.rsh:124:32:application', stdlib.UInt_max, 1), v876);
  const txn2 = await (ctc.sendrecv({
    args: [v827, v828, v829, v830, v831, v832, v833, v834, v836, v849, v877],
    evt_cnt: 0,
    funcNum: 1,
    lct: v835,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, 1), v829]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v881, time: v880, didSend: v81, from: v879 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v882 = v877[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
      const v883 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
      const v884 = stdlib.add(v883, stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, 1));
      const v887 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 1)];
      const v888 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 2)];
      const v889 = [v884, v887, v888];
      const v890 = stdlib.Array_set(v877, stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0), v889);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v829
        });
      const v891 = stdlib.addressEq(v827, v879);
      stdlib.assert(v891, {
        at: './index.rsh:210:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v893 = stdlib.add(v836, v830);
      const v894 = v893;
      const v895 = true;
      const v896 = stdlib.checkedBigNumberify('./index.rsh:221:59:decimal', stdlib.UInt_max, 0);
      const v897 = v828;
      const v899 = stdlib.checkedBigNumberify('./index.rsh:221:43:decimal', stdlib.UInt_max, 0);
      const v900 = v827;
      const v901 = v880;
      const v907 = v890;
      const v908 = stdlib.checkedBigNumberify('./index.rsh:107:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v895;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v908,
          kind: 'from',
          to: v900,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:329:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v900,
          tok: v829
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v881, time: v880, didSend: v81, from: v879 } = txn2;
  ;
  const v882 = v877[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
  const v883 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0)];
  const v884 = stdlib.add(v883, stdlib.checkedBigNumberify('./index.rsh:210:18:decimal', stdlib.UInt_max, 1));
  const v887 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 1)];
  const v888 = v882[stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 2)];
  const v889 = [v884, v887, v888];
  const v890 = stdlib.Array_set(v877, stdlib.checkedBigNumberify('./index.rsh:210:12:dot', stdlib.UInt_max, 0), v889);
  ;
  const v891 = stdlib.addressEq(v827, v879);
  stdlib.assert(v891, {
    at: './index.rsh:210:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v893 = stdlib.add(v836, v830);
  let v894 = v893;
  let v895 = true;
  let v896 = stdlib.checkedBigNumberify('./index.rsh:221:59:decimal', stdlib.UInt_max, 0);
  let v897 = v828;
  let v899 = stdlib.checkedBigNumberify('./index.rsh:221:43:decimal', stdlib.UInt_max, 0);
  let v900 = v827;
  let v901 = v880;
  let v907 = v890;
  let v908 = stdlib.checkedBigNumberify('./index.rsh:107:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v895;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v894],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v827, v829, v830, v831, v832, v833, v834, v849, v894, v896, v897, v899, v900, v907, v908],
        evt_cnt: 0,
        funcNum: 7,
        lct: v901,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:324:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1481, time: v1480, didSend: v641, from: v1479 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:324:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv894 = v894;
          const cv895 = false;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1480;
          const cv907 = v907;
          const cv908 = v908;
          
          await (async () => {
            const v894 = cv894;
            const v895 = cv895;
            const v896 = cv896;
            const v897 = cv897;
            const v899 = cv899;
            const v900 = cv900;
            const v901 = cv901;
            const v907 = cv907;
            const v908 = cv908;
            
            if (await (async () => {
              
              return v895;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v908,
                kind: 'from',
                to: v900,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:329:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v900,
                tok: v829
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1481, time: v1480, didSend: v641, from: v1479 } = txn4;
      ;
      const cv894 = v894;
      const cv895 = false;
      const cv896 = v896;
      const cv897 = v897;
      const cv899 = v899;
      const cv900 = v900;
      const cv901 = v1480;
      const cv907 = v907;
      const cv908 = v908;
      
      v894 = cv894;
      v895 = cv895;
      v896 = cv896;
      v897 = cv897;
      v899 = cv899;
      v900 = cv900;
      v901 = cv901;
      v907 = cv907;
      v908 = cv908;
      
      continue;
      }
    else {
      const {data: [v1020], secs: v1022, time: v1021, didSend: v537, from: v1019 } = txn3;
      switch (v1020[0]) {
        case 'Api_buyDiscount0_136': {
          const v1023 = v1020[1];
          let v1028;
          const v1029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
          const v1030 = stdlib.fromSome(v1029, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1031 = stdlib.lt(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1031, {
            at: './index.rsh:145:12:application',
            fs: ['at ./index.rsh:294:38:application call to "getDiscountPrice" (defined at: ./index.rsh:143:36:function exp)', 'at ./index.rsh:294:14:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:294:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1032 = stdlib.ge(v1030, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1032) {
            v1028 = stdlib.checkedBigNumberify('./index.rsh:148:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1033 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1035 = v1033[v1030];
            v1028 = v1035;
            }
          ;
          const v1084 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1085 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1086 = stdlib.add(v1085, v1028);
          const v1089 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1090 = v1084[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1091 = [v1086, v1089, v1090];
          const v1092 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1091);
          ;
          undefined;
          const v1097 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1097', ctc0, v1097);
          const v1105 = stdlib.add(v1030, stdlib.checkedBigNumberify('./index.rsh:303:56:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1019, v1105);
          const cv894 = v894;
          const cv895 = true;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1021;
          const cv907 = v1092;
          const cv908 = v908;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_136': {
          const v1175 = v1020[1];
          let v1195;
          const v1196 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1019), null);
          const v1197 = stdlib.fromSome(v1196, stdlib.checkedBigNumberify('./index.rsh:141:64:decimal', stdlib.UInt_max, 0));
          const v1198 = stdlib.ge(v1197, stdlib.checkedBigNumberify('./index.rsh:134:30:decimal', stdlib.UInt_max, 5));
          if (v1198) {
            v1195 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1199 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1201 = v1199[v1197];
            v1195 = v1201;
            }
          const v1202 = stdlib.lt(v1195, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1202, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:266:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:266:14:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:266:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1203 = stdlib.div(v1195, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1204 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1203);
          const v1205 = stdlib.mul(v897, v1204);
          const v1235 = stdlib.add(v908, v1205);
          ;
          const v1236 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1237 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1241 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1242 = v1236[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1243 = [v1237, v1241, v1242];
          const v1244 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1243);
          ;
          undefined;
          const v1260 = stdlib.gt(v833, stdlib.checkedBigNumberify('./index.rsh:268:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1260, {
            at: './index.rsh:268:20:application',
            fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1261 = v1244[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 1)];
          const v1262 = v1261[stdlib.checkedBigNumberify('./index.rsh:269:28:application', stdlib.UInt_max, 0)];
          const v1263 = stdlib.gt(v1262, v834);
          stdlib.assert(v1263, {
            at: './index.rsh:269:20:application',
            fs: ['at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1264 = null;
          await txn3.getOutput('Api_buyTicket', 'v1264', ctc0, v1264);
          const v1270 = stdlib.div(v897, v833);
          const v1271 = stdlib.add(v897, v832);
          const v1276 = stdlib.sub(v1235, v1270);
          ;
          const v1282 = stdlib.sub(v1262, v834);
          const v1285 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1)];
          const v1286 = v1261[stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 2)];
          const v1287 = [v1282, v1285, v1286];
          const v1288 = stdlib.Array_set(v1244, stdlib.checkedBigNumberify('./index.rsh:277:61:application', stdlib.UInt_max, 1), v1287);
          ;
          let v1289;
          const v1290 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
          const v1291 = stdlib.fromSome(v1290, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1292 = stdlib.ge(v1291, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1292) {
            v1289 = stdlib.checkedBigNumberify('./index.rsh:196:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1295 = v1293[v1291];
            v1289 = v1295;
            }
          const v1296 = stdlib.sub(v831, v1289);
          let v1298;
          if (v1198) {
            v1298 = stdlib.checkedBigNumberify('./index.rsh:157:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1302 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1304 = v1302[v1197];
            v1298 = v1304;
            }
          const v1305 = stdlib.lt(v1298, stdlib.checkedBigNumberify('./index.rsh:165:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1305, {
            at: './index.rsh:165:12:application',
            fs: ['at ./index.rsh:284:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:163:47:function exp)', 'at ./index.rsh:267:22:application call to [unknown function] (defined at: ./index.rsh:267:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1306 = stdlib.div(v1298, stdlib.checkedBigNumberify('./index.rsh:166:27:decimal', stdlib.UInt_max, 100));
          const v1307 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:166:23:decimal', stdlib.UInt_max, 1), v1306);
          const v1308 = stdlib.mul(v897, v1307);
          const v1309 = stdlib.add(v899, v1308);
          const v1310 = stdlib.add(v896, v1270);
          const v1311 = stdlib.add(v894, v1296);
          const cv894 = v1311;
          const cv895 = true;
          const cv896 = v1310;
          const cv897 = v1271;
          const cv899 = v1309;
          const cv900 = v1019;
          const cv901 = v1021;
          const cv907 = v1288;
          const cv908 = v1276;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_136': {
          const v1327 = v1020[1];
          let v1365;
          const v1366 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1019), null);
          const v1367 = stdlib.fromSome(v1366, stdlib.checkedBigNumberify('./index.rsh:180:74:decimal', stdlib.UInt_max, 0));
          const v1368 = stdlib.lt(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1368, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:311:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:182:41:function exp)', 'at ./index.rsh:311:14:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:311:14:function exp)', 'at ./index.rsh:221:23:application call to [unknown function] (defined at: ./index.rsh:221:23:function exp)', 'at ./index.rsh:245:18:application call to [unknown function] (defined at: ./index.rsh:245:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1369 = stdlib.ge(v1367, stdlib.checkedBigNumberify('./index.rsh:174:35:decimal', stdlib.UInt_max, 5));
          if (v1369) {
            v1365 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1370 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1372 = v1370[v1367];
            v1365 = v1372;
            }
          ;
          const v1388 = v907[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1389 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 0)];
          const v1390 = stdlib.add(v1389, v1365);
          const v1393 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1)];
          const v1394 = v1388[stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 2)];
          const v1395 = [v1390, v1393, v1394];
          const v1396 = stdlib.Array_set(v907, stdlib.checkedBigNumberify('./index.rsh:221:23:dot', stdlib.UInt_max, 1), v1395);
          ;
          undefined;
          const v1469 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1469', ctc0, v1469);
          const v1477 = stdlib.add(v1367, stdlib.checkedBigNumberify('./index.rsh:318:66:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1019, v1477);
          const cv894 = v894;
          const cv895 = true;
          const cv896 = v896;
          const cv897 = v897;
          const cv899 = v899;
          const cv900 = v900;
          const cv901 = v1021;
          const cv907 = v1396;
          const cv908 = v908;
          
          v894 = cv894;
          v895 = cv895;
          v896 = cv896;
          v897 = cv897;
          v899 = cv899;
          v900 = cv900;
          v901 = cv901;
          v907 = cv907;
          v908 = cv908;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v900), {
    at: './index.rsh:92:29:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:32:function exp)', 'at ./index.rsh:331:16:application call to "showOutcome" (defined at: ./index.rsh:90:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900],
    evt_cnt: 0,
    funcNum: 3,
    lct: v901,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:334:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1512, time: v1511, didSend: v671, from: v1510 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:334:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1513 = v1511;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v829
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1512, time: v1511, didSend: v671, from: v1510 } = txn3;
  ;
  let v1513 = v1511;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v827, v829, v830, v831, v832, v849, v894, v896, v897, v899, v900],
      evt_cnt: 0,
      funcNum: 5,
      lct: v1513,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:337:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v1525, time: v1524, didSend: v680, from: v1523 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:337:39:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v1526 = stdlib.addressEq(v827, v1523);
        stdlib.assert(v1526, {
          at: './index.rsh:337:39:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Funder'
          });
        const cv1513 = v1524;
        
        await (async () => {
          const v1513 = cv1513;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v829
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1525, time: v1524, didSend: v680, from: v1523 } = txn4;
    ;
    const v1526 = stdlib.addressEq(v827, v1523);
    stdlib.assert(v1526, {
      at: './index.rsh:337:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv1513 = v1524;
    
    v1513 = cv1513;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BSAdAAEIBzgGAwQFICgwWEBIUGBkAqCNBp3RyqsGzN6axQ2Do/jPDZHm0r4Dk7m+1ARocLoB+QEmCAEAAQEAEgAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAACgAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgMAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAACgAAAAAAAAAPAAAAAAAAABQAAAAAAAAAGQj//////////yI1ADEYQQyxKmRJIls1ASRbNQIxGSMSQQAJMQArKExmQgyHNhoAF0lBAgMiNQQjNQZJIRQMQACQSSEVDEAAd0khFgxAAGAhFhJENAFJIQUMQAA4SSUMQAAaJRJEKGQpZFA1AzYaARc0AyEEWwkWNQdCDC1IKGQpZFA1AzYaARc0AyEEWwkWNQdCDBUhBhJEKGQpZFA1AzYaARc0AyEEWwkWNQdCC/ohFRJEKjX/KTT/UDUFQgIXIRQSRCo1/4ABAjT/UDUFQgIFSSEXDEAAd0khGAxAAGAhGBJENAFJIQUMQAA4SSUMQAAaJRJEKGQpZFA1AzYaARc0AyEEWwgWNQdCC51IKGQpZFA1AzYaARc0AyEEWwgWNQdCC4UhBhJEKGQpZFA1AzYaARc0AyEEWwgWNQdCC2ohFxJEKjX/KDT/UDUFQgGHgbKxquABEkQ0AUkhBQxAAJBJJQxAAEYlEkQoZClkUEk1A1coCDQDVzAIUDQDVyAIUCcEUDQDV1AIUDQDV2gIUDQDV3AIUDQDV3ggUDQDV2AIUDQDV1gIUDUHQgr9SChkKWRQSTUDVygINANXMAhQNANXIAhQJwRQNANXQAhQNANXWAhQNANXYAhQNANXaCBQNANXUAhQNANXSAhQNQdCCrkhBhJEKGQpZFBJNQNXKAg0A1cwCFA0A1cgCFAnBFA0A1dACFA0A1dYCFA0A1dgCFA0A1doIFA0A1dQCFA0A1dICFA1B0IKcjYaARc2GgIXNQQ2GgM1BUkhBwxABTRJIQUMQATASSUMQAB7JRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQxbNf+ABOIbs6mwMgc0/w9ENANXACA0AyEJWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhDls0AyEPWzT/IjQDIRBbNAMhGVs0AyEaWzQDV3ggMgY0A1eYIjQDIRtbQgh4SCU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhCVs1/jQDIQpbNf00AyELWzX8NAMhBFs1+zQDIQ1bNfo0AyEOWzX5NAMhD1s1+DQDIQxbNfc0AyEQWzX2NAMhGVs19TQDIRpbNfQ0A1d4IDXzNANXmCI18jQDIRtbNfE0BTXwgASQT2RJNPBQsDIHNPcMRDTwIlVJIwxAArpJIRIMQADqIRISRCIxAEkxGGFAAAVIK0IAAihiVwkJSTXtI1s07SJVTUk17iEIDEQ07iEID0EAByEcNe9CAAsnBSQ07gskWBc17zTyVxERNe0070lBACY0AEkjCDUATEsBOBISRDT4SwE4ERJEIQdLATgQEkQyCksBOBQSREiACAAAAAAAAAW9sCo1BzEASUkxGGFAAAVIK0IAAihiKTTuIwgWUDXsSVcACTTsUExIKExmNP80/jT9NPw0+zT6NPk0+DT3IzT2NPU09DTzMgY08lcAETTtIls07wgWNO1XCAhQNO1XEAFQUDTySDTxQgbpSCIxAEkxGGFAAAVIK0IAAihiVwAJSTXtI1s07SJVTUk17iEID0k17UEABiI170IACycGJDTuCyRYFzXvNO8hEQxENPUjNO8hEQoJCzXsNOxJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINPJXERE16zTyVwARNOtXAAg061cICFA061cQAVBQNPJINeo0+iMNRDTqVxERSTXpIltJNeg0+Q1EgAgAAAAAAAAE8LAqNQc09TT6CjXnNOdJQQAMsbIII7IQNP+yB7MiSDT5SUEAEbGyEiEHshAxALIUNPiyEbMiSCIxAEkxGGFAAAVIK0IAAihiVwkJSTXkI1s05CJVTUk15SEID0EABiI15kIAO4AwAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAACAAAAAAAAAAMAAAAAAAAABAAAAAAAAAAFJDTlCyRYFzXmNO1BAAYiNeRCAAsnBiQ07gskWBc15DTkIREMRDT/NP40/TT8NPs0+jT5NPg09zT8NOYJCCM09jTnCDT1NPsINPQ09SM05CERCgkLCDEAMgY06lcAETToNPkJFjTpVwgIUDTpVxABUFA06kg08TTsCDTnCUIFIEgiMQBJMRhhQAAFSCtCAAIoYlcACUk17SNbNO0iVU1JNe4hCAxENO4hCA9BAAchHDXvQgALJwUkNO4LJFgXNe808lcRETXtNO9JQQAmNABJIwg1AExLATgSEkQ0+EsBOBESRCEHSwE4EBJEMgpLATgUEkRIgAgAAAAAAAAESbAqNQcxAElJMRhhQAAFSCtCAAIoYik07iMIFlA17ElINOxMVwkJUChMZjT/NP40/TT8NPs0+jT5NPg09yM09jT1NPQ08zIGNPJXABE07SJbNO8IFjTtVwgIUDTtVxABUFA08kg08UIEOUkhCAxAAGVIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATMmZJcsDT/MQASRDT/NAMhCVs0AyEKWzQDIQtbNAMhBFs0AyENWzQDIQ5bNAMhD1s0AyEMWzQDIRBbNANXaCAyBkIEvEhJIRIMQABkSSEGDEAAXEghBjQBEkQ0BEkiEkw0AhIRRChkKWRQNQOABKdlxLSwNANXACA0AyEJWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhDls0AyEPWzQDIQxbNAMhEFs0A1doIDIGQgRRSEkjDEAAyEgjNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/zQDIQpbNf40AyELWzX9NANXaCI1/IAEmouRdLA0/FcAETX7I0lBACY0AEkjCDUATEsBOBISRDT+SwE4ERJEIQdLATgQEkQyCksBOBQSREg0/zEAEkQ0/zT+NP00AyEEWzQDIQ1bNAMhDls0AyEPWzQDIRBbNAMhDFs0/QgjIjQDIQlbIjT/MgY0/EgqNPsiWyMIFjT7VwgIUDT7VxABUFA0/FcREVAiQgKTSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BSRbNf40BYEQWzX9NAWBGFs1/DQFIQlbNfs0BSEKWzX6NAUhC1s1+YAE/iY4njT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlCwIRNJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIgBEAAAAAAAAAAAAAAAAAAAAAAEk1+ElQSTX3VwARNfY090gqJwQ09lcICFA09lcQAVBQNPdXERFQNfUhE0lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgisbISIQeyEDIKshQ0/rIRsyJIIRNJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIsSEGshCB////////////AbIiIQWyI4AITUVUQUZPTU+yJYAgTWV0YWZvbW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJoBgaHR0cHM6Ly9tZXRhbGFicy50ZWNobm9sb2d5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsicyA7IoMgqyKbO0PDX0gAgAAAAAAAADUDT0FlCwNPRJNfM0/hYiWxNENPVXERE18jT1VwARJwc08lcICFA08lcQAVBQNPVISTXxVxERNfA08VcAETTwVwAIJwdQNPBXEAFQUDTxSEk171cRETXuNO9XABE07lcACDTuVwgIUChQUDTvSDXtMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDTzFlA07VAoSwFXAH9nKUsBV38LZ0gjNQEyBjUCMRkiEkRCAU41/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNPhBAFY07zTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlA09xZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUChLAVcAf2cpSwFXf0NnSCU1ATIGNQIxGSISREIA0TT/SUEADLGyCCOyEDT8sgezIkgjSUEAEbGyEiEHshA0/LIUNPCyEbMiSDTvNPAWUDTxFlA08hZQNPMWUDT2FlA09xZQNPkWUDT6FlA0+xZQNPxQKEsBVwB/ZylLAVd/CWdIIQY1ATIGNQIxGSISREIAXzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfVJNfQ09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNPwWUDT9FlA0/lAoSwFXAH9nKUsBV38JZ0ghBTUBMgY1AjEZIhJEQgAAKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `BQ==`,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 2,
  stateSize: 194,
  unsupported: [],
  version: 9,
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
                "internalType": "uint256",
                "name": "v828",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v829",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v830",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v831",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v832",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v833",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v834",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "internalType": "uint256",
                "name": "v828",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v829",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v830",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v831",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v832",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v833",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v834",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_136",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_136",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_136",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1020",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1097",
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
    "name": "_reach_oe_v1264",
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
    "name": "_reach_oe_v1469",
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
    "name": "_reach_oe_v848",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Api_buyDiscount",
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
    "name": "Api_buyTicket",
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
    "name": "Api_buyTimeReduction",
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
    "name": "Fomo_info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deltaDeadline",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "nftPrize",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenOwnedByUsers",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "currentPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentTotal",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "currentWinner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "paidToFunder",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTimestamp",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "v2674",
        "type": "uint256"
      }
    ],
    "name": "Fomo_nextPrice",
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
        "internalType": "uint256",
        "name": "v2678",
        "type": "uint256"
      }
    ],
    "name": "Fomo_prevPrice",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_136",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_136",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_136",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1020",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T17",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005332380380620053328339810160408190526200002691620008ea565b60008055436003556200003862000586565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620004d9565b6060820152620001473415600a6200055c565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620006ec565b6200027296959493929190620009ff565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527feffe91d4bb36d58bf8f9d818ec9834f90316b02dc57b850d58567c696a08840d9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b6200055c565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620004d9565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620004d9565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620004d9565b61020082015262000407620006fa565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526001600081905543905551620004a99183910162000ab0565b60405160208183030381529060405260029080519060200190620004cf92919062000771565b5050505062000bc8565b620004e362000800565b60005b6002811015620005395784816002811062000505576200050562000999565b60200201518282600281106200051f576200051f62000999565b602002015280620005308162000b61565b915050620004e6565b508181846002811062000550576200055062000999565b60200201529392505050565b81620005825760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102808101909152600061022082018181526102408301829052610260830191909152815260208101620005bd62000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620005ec62000800565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200065a6200084d565b815260408051606081018252600080825260208281018290529282015291019081526020016200068962000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b862000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620006e762000800565b905290565b610f7580620043bd83390190565b60405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620006e762000800565b8280546200077f9062000b8b565b90600052602060002090601f016020900481019282620007a35760008555620007ee565b82601f10620007be57805160ff1916838001178555620007ee565b82800160010185558215620007ee579182015b82811115620007ee578251825591602001919060010190620007d1565b50620007fc9291506200086b565b5090565b60405180604001604052806002905b62000836604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200080f5790505090565b60405180602001604052806001906020820280368337509192915050565b5b80821115620007fc57600081556001016200086c565b604080519081016001600160401b0381118282101715620008b357634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620008b357634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620008ff57600080fd5b6200090962000882565b8351815260e0601f19830112156200092057600080fd5b6200092a620008b9565b6020850151815260408501519092506001600160a01b03811681146200094f57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620009d757602081850181015186830182015201620009b9565b81811115620009ea576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000a1460c0830189620009af565b828103602084015262000a288189620009af565b9050828103604084015262000a3e8188620009af565b9050828103606084015262000a548187620009af565b6080840195909552505060a00152949350505050565b8060005b600281101562000aaa57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000a6e565b50505050565b81516001600160a01b03168152610200810160208301516020830152604083015162000ae760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000b42828501826001600160a01b03169052565b50506101408084015162000b598285018262000a6a565b505092915050565b600060001982141562000b8457634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000ba057607f821691505b6020821081141562000bc257634e487b7160e01b600052602260045260246000fd5b50919050565b6137e58062000bd86000396000f3fe6080604052600436106100ea5760003560e01c806373b4522c11610084578063a556059611610056578063a55605961461020f578063ab53f2c61461022f578063bf2c5b2414610252578063cadc2e7a1461026557005b806373b4522c146101b25780637a3678dd146101c557806383230757146101e75780638e314769146101fc57005b806330a94db4116100bd57806330a94db4146101555780633bc5b7bf146101755780636cd6de3a146101a25780636cdcb9df146101aa57005b806236c367146100f35780631e93b0f1146101065780632b10758a1461012a5780632c10a1591461014257005b366100f157005b005b6100f1610101366004612e0c565b610285565b34801561011257600080fd5b506003545b6040519081526020015b60405180910390f35b6101326102be565b6040519015158152602001610121565b6100f1610150366004612e24565b61032a565b34801561016157600080fd5b50610117610170366004612e36565b61035f565b34801561018157600080fd5b50610195610190366004612e64565b6105b6565b6040516101219190612e97565b6101326105e2565b610132610652565b6100f16101c0366004612e24565b6106c2565b3480156101d157600080fd5b506101da6106f7565b6040516101219190612ece565b3480156101f357600080fd5b50600154610117565b6100f161020a366004612e24565b610a79565b34801561021b57600080fd5b5061011761022a366004612e36565b610aae565b34801561023b57600080fd5b50610244610cf9565b604051610121929190612f9d565b6100f1610260366004612e24565b610d96565b34801561027157600080fd5b50610195610280366004612e64565b610dcb565b60408051606081018252600080825260208201819052918101919091526102ba6102b4368490038401846130d5565b82610df1565b5050565b604080516060810182526000808252602082018190529181018290526102e26128f0565b6040805160808101825260008082526020808301829052828401829052606083019190915282518082019093528183528301919091526103228284610df1565b505051919050565b60408051606081018252600080825260208201819052918101919091526102ba61035936849003840184613176565b82611a19565b60006001600054141561041c5760006002805461037b906131ae565b80601f01602080910402602001604051908101604052809291908181526020018280546103a7906131ae565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b505050505080602001905181019061040c9190613277565b905061041a60006009611ce9565b505b600360005414156104e057600060028054610436906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610462906131ae565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b50505050508060200190518101906104c79190613322565b90508060800151836104d991906133d8565b9392505050565b600660005414156104fa57600060028054610436906131ae565b600760005414156105a557600060028054610514906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610540906131ae565b801561058d5780601f106105625761010080835404028352916020019161058d565b820191906000526020600020905b81548152906001019060200180831161057057829003601f168201915b50505050508060200190518101906104c791906133ef565b6105b160006009611ce9565b919050565b60408051606081018252600080825260208201819052918101919091526105dc82611d0f565b92915050565b604080516060810182526000808252602082018190529181018290526106066128f0565b604080516080810182526000602080830182905282840182905260608301919091526002825282518082019093528183528301919091526106478284610df1565b505060400151919050565b604080516060810182526000808252602082018190529181018290526106766128f0565b604080516080810182526000602080830182905282840182905260608301919091526001825282518082019093528183528301919091526106b78284610df1565b505060200151919050565b60408051606081018252600080825260208201819052918101919091526102ba6106f136849003840184613176565b82611de1565b6106ff612935565b600160005414156107ba57600060028054610719906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610745906131ae565b80156107925780601f1061076757610100808354040283529160200191610792565b820191906000526020600020905b81548152906001019060200180831161077557829003601f168201915b50505050508060200190518101906107aa9190613277565b90506107b860006007611ce9565b505b60036000541415610908576000600280546107d4906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610800906131ae565b801561084d5780601f106108225761010080835404028352916020019161084d565b820191906000526020600020905b81548152906001019060200180831161083057829003601f168201915b50505050508060200190518101906108659190613322565b905061086f6129a3565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092528251600091015260a08084015183519083166080909101526101008085015184519092019190915261012080850151845160c0908101919091526101408601518551941660e0948501529285015184519092019190915292015181519092019190915251919050565b60066000541415610922576000600280546107d4906131ae565b60076000541415610a6a5760006002805461093c906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610968906131ae565b80156109b55780601f1061098a576101008083540402835291602001916109b5565b820191906000526020600020905b81548152906001019060200180831161099857829003601f168201915b50505050508060200190518101906109cd91906133ef565b90506109d76129a3565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092528251600091015260e0808401518351908316608090910152610140840151835160a00152610160840151835160c0015261018084015183519216910152610120808301518251610100908101919091529092015181519092019190915251919050565b610a7660006007611ce9565b90565b60408051606081018252600080825260208201819052918101919091526102ba610aa836849003840184613176565b82611fa9565b600060016000541415610b6b57600060028054610aca906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610af6906131ae565b8015610b435780601f10610b1857610100808354040283529160200191610b43565b820191906000526020600020905b815481529060010190602001808311610b2657829003601f168201915b5050505050806020019051810190610b5b9190613277565b9050610b6960006008611ce9565b505b60036000541415610c2857600060028054610b85906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb1906131ae565b8015610bfe5780601f10610bd357610100808354040283529160200191610bfe565b820191906000526020600020905b815481529060010190602001808311610be157829003601f168201915b5050505050806020019051810190610c169190613322565b90508060800151836104d991906134ce565b60066000541415610c4257600060028054610b85906131ae565b60076000541415610ced57600060028054610c5c906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610c88906131ae565b8015610cd55780601f10610caa57610100808354040283529160200191610cd5565b820191906000526020600020905b815481529060010190602001808311610cb857829003601f168201915b5050505050806020019051810190610c1691906133ef565b6105b160006008611ce9565b600060606000546002808054610d0e906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3a906131ae565b8015610d875780601f10610d5c57610100808354040283529160200191610d87565b820191906000526020600020905b815481529060010190602001808311610d6a57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102ba610dc536849003840184613176565b826120dd565b60408051606081018252600080825260208201819052918101919091526105dc826122fd565b610e016007600054146024611ce9565b8151610e1c901580610e1557508251600154145b6025611ce9565b600080805560028054610e2e906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5a906131ae565b8015610ea75780601f10610e7c57610100808354040283529160200191610ea7565b820191906000526020600020905b815481529060010190602001808311610e8a57829003601f168201915b5050505050806020019051810190610ebf91906133ef565b9050610ec96129b6565b610edb82610100015142106026611ce9565b7f65ba3c52e9aacb57f14951ed6b2e6d6482045474161df5f26ea357744bd0e7cd84604051610f0a91906134e6565b60405180910390a16000602085015151516002811115610f2c57610f2c612e81565b14156111d1576001610f3d33611d0f565b516001811115610f4f57610f4f612e81565b14610f5b576000610f69565b610f6433611d0f565b604001515b60208201819052610f7e906005116018611ce9565b6005816020015110610f935760f98152610fe3565b60408181018051600a9052805160146020918201528151602893019290925280516050606090910152805160a0608090910152519082015160058110610fdb57610fdb61353a565b602002015181525b610fef34156019611ce9565b80516101a0830151602001515161100691906134ce565b606082018051919091526101a083018051602090810151810151835182015290510151604090810151915191151591015260e082015181516110559161104e9133919061238a565b601a611ce9565b604051600081527f1f44f06fa2c378dc8e31d2830931d9a9c49976009917dcad6fe83531e8d1a7cd9060200160405180910390a16000808452338152600460209081526040909120805460ff19166001908117909155908201516110b991906134ce565b336000908152600460205260409020600101556110d4612afa565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b015189519089169101526101008a01518689018051919091528051600197018790526101208b01518151909601959095526101408a015185518501526101608a0151855190930192909252610180890151845196169501949094529051439301929092526101a0850151918401516111a89291906123a0565b60208201805160e001919091526101c0840151905161010001526111cb81612414565b50611a13565b60016020850151515160028111156111eb576111eb612e81565b14156117625760016111fc33611d0f565b51600181111561120e5761120e612e81565b1461121a576000611228565b61122333611d0f565b604001515b60a08201819052600511801560c083015261124957600060808201526112a7565b60e08101805160009052805160056020909101528051600a6040909101528051600f60609091015280516014608091909101528051601960a0918201529051908201516006811061129c5761129c61353a565b602002015160808201525b6112b96064826080015110601b611ce9565b606481608001516112ca9190613550565b6112d59060016133d8565b8261014001516112e59190613572565b61010082018190526112fa903414601c611ce9565b6101a0820180516020908101515161012084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161134591906001906123a0565b816101400181905250611368611361338460e00151600061238a565b601d611ce9565b61137a60018360a0015111601e611ce9565b60c082015161014082015160200151516113969110601f611ce9565b604051600081527f7ed7fe3c55245ab10f0c657f73bd67de3ff671aec4fc6d87167d657d350514989060200160405180910390a16000602084015260a08201516101408301516113e69190613550565b610160820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611425573d6000803e3d6000fd5b5060c0820151610140820151602001515161144091906133d8565b610180820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c083015161148891903390612642565b6001611493336122fd565b5160018111156114a5576114a5612e81565b146114b15760006114bf565b6114ba336122fd565b604001515b6101c082018190526005116114db5760006101a082015261153b565b6101e08101805160009052805160016020909101528051600260409091015280516003606090910152805160046080909101528051600560a090910152516101c08201516006811061152f5761152f61353a565b60200201516101a08201525b8060c00151156115525760006102008201526115b1565b6102208101805160009052805160056020909101528051600a6040909101528051600f606090910152805160146080909101528051601960a091820152905190820151600681106115a5576115a561353a565b60200201516102008201525b6115c46064826102000151106020611ce9565b6115cc612afa565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e080860151845193169201919091526101a0830151905161164d91906133d8565b83610100015161165d91906134ce565b60208083018051929092529051600191015261016082015161012084015161168591906134ce565b60208201516040015260808301516101408401516116a391906134ce565b6020820151606001526102008201516116be90606490613550565b6116c99060016133d8565b8361014001516116d99190613572565b8361016001516116e991906134ce565b6020820180516080019190915280513360a090910152514360c09091015261014082015161018083015161172091906001906123a0565b602082015160e001526101608201516101008301516101c085015161174591906134ce565b61174f91906133d8565b602082015161010001526111cb81612414565b600260208501515151600281111561177c5761177c612e81565b1415611a1357600161178d336122fd565b51600181111561179f5761179f612e81565b146117ab5760006117b9565b6117b4336122fd565b604001515b61026082018190526117cf906005116021611ce9565b6005816102600151106117e95760f961024082015261183f565b61028081018051600a9052805160146020909101528051602860409091015280516050606090910152805160a060809091015251610260820151600581106118335761183361353a565b60200201516102408201525b61184b34156022611ce9565b6102408101516101a0830151602001515161186691906134ce565b6102a082018051919091526101a083018051602090810151810151835182015290510151604090810151915191151591015260e08201516102408201516118ba916118b39133919061238a565b6023611ce9565b604051600081527fc1bbaa6dbc15990cc4c3b78c21dec9e684ba09a2718716fc646e11ac05815f279060200160405180910390a16000604084810182905233825260056020529020805460ff1916600190811790915561026082015161192091906134ce565b3360009081526005602052604090206001015561193b612afa565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b015189519089169101526101008a01518689018051919091528051600197018790526101208b01518151909601959095526101408a01518551909401939093526101608901518451909201919091526101808801518351951694019390935251439201919091526101a08401516102a08401516111a892906123a0565b50505050565b611a29600160005414600f611ce9565b8151611a44901580611a3d57508251600154145b6010611ce9565b600080805560028054611a56906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054611a82906131ae565b8015611acf5780601f10611aa457610100808354040283529160200191611acf565b820191906000526020600020905b815481529060010190602001808311611ab257829003601f168201915b5050505050806020019051810190611ae79190613277565b9050611b1060408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611b5b3415600c611ce9565b6101408201515151611b6f906001906134ce565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611bb290611bab903390600161238a565b600d611ce9565b8151611bca906001600160a01b03163314600e611ce9565b611bd2612afa565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e0808701518551909201919091526101208601518451931692019190915251610100840151611c6191906134ce565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611cc292906123a0565b60208201805160e0019190915251600061010090910152611ce281612414565b5050505050565b816102ba5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611d5b57611d5b612e81565b1415611dd2576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611d9c57611d9c612e81565b6001811115611dad57611dad612e81565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b611df16003600054146012611ce9565b8151611e0c901580611e0557508251600154145b6013611ce9565b600080805560028054611e1e906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054611e4a906131ae565b8015611e975780601f10611e6c57610100808354040283529160200191611e97565b820191906000526020600020905b815481529060010190602001808311611e7a57829003601f168201915b5050505050806020019051810190611eaf9190613322565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1611efd34156011611ce9565b611f05612b50565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451909101526101408085015184519316920191909152810151439052611a1381612656565b611fb96006600054146016611ce9565b8151611fd4901580611fcd57508251600154145b6017611ce9565b600080805560028054611fe6906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054612012906131ae565b801561205f5780601f106120345761010080835404028352916020019161205f565b820191906000526020600020905b81548152906001019060200180831161204257829003601f168201915b50505050508060200190518101906120779190613322565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a16120c534156014611ce9565b8051611efd906001600160a01b031633146015611ce9565b6120ed6007600054146028611ce9565b815161210890158061210157508251600154145b6029611ce9565b60008080556002805461211a906131ae565b80601f0160208091040260200160405190810160405280929190818152602001828054612146906131ae565b80156121935780601f1061216857610100808354040283529160200191612193565b820191906000526020600020905b81548152906001019060200180831161217657829003601f168201915b50505050508060200190518101906121ab91906133ef565b90506121c0816101000151421015602a611ce9565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a161220b34156027611ce9565b612213612afa565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b0151888b01805191909152805160009901989098526101208b01518851909701969096526101408a0151875190950194909452610160890151865190930192909252610180880151855196169501949094528251439401939093526101a08501518251909301929092526101c0840151905190910152611a1381612414565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561234957612349612e81565b1415611dd2576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611d9c57611d9c612e81565b60006123988385308561270a565b949350505050565b6123a8612b7e565b60005b60028110156123f4578481600281106123c6576123c661353a565b60200201518282600281106123dd576123dd61353a565b6020020152806123ec81613591565b9150506123ab565b50818184600281106124085761240861353a565b60200201529392505050565b8060200151602001511561252c5761242a612bc9565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015181860152855160809081015181870152865160a09081015181880152875160c09081015190880152875160e090810151871681890152858901805151610100808b019190915281518701516101208b01528151909501516101408a01528051909301516101608901528251909101519095166101808701528051909401516101a08601529251909201516101c08401526007600055436001559051612503918391016135ea565b60405160208183030381529060405260029080519060200190612527929190612c69565b505050565b602081015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612573573d6000803e3d6000fd5b50612590816000015160200151826020015160a001516001612642565b612598612ced565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015181860152855160809081015181870152865160e090810151861660a08089019190915285890180515160c08a01528051860151928901929092528151909301516101008801528051909101516101208701525101519092166101408401526003600055436001559051612503918391016136cb565b50565b61264d8383836127e4565b61252757600080fd5b61265e612ced565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e090810151908501528451610100908101519085015284516101209081015190850152845161014090810151909316928401929092526006600055436001559051612503918391016136cb565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161277191613776565b60006040518083038185875af1925050503d80600081146127ae576040519150601f19603f3d011682016040523d82523d6000602084013e6127b3565b606091505b50915091506127c4828260016128b5565b50808060200190518101906127d99190613792565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161284391613776565b60006040518083038185875af1925050503d8060008114612880576040519150601f19603f3d011682016040523d82523d6000602084013e612885565b606091505b5091509150612896828260026128b5565b50808060200190518101906128ab9190613792565b9695505050505050565b606083156128c45750816104d9565b8251156128d45782518084602001fd5b60405163100960cb60e01b815260048101839052602401611d06565b6040518060400160405280600081526020016129306040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b604051806101400160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060200160405280612930612935565b604051806102c0016040528060008152602001600081526020016129d8612d6b565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001600015158152602001612a1c612d89565b815260200160008152602001612a4e604051806060016040528060008152602001600081526020016000151581525090565b8152602001612a5b612b7e565b815260200160008152602001612a8d604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001612aa8612d89565b815260200160008152602001612abc612d89565b81526020016000815260200160008152602001612ad7612d6b565b815260408051606081018252600080825260208281018290529282015291015290565b60408051610140810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201839052610100820183905261012082019290925290815260208101612930612da7565b6040518060400160405280612b63612ced565b81526020016129306040518060200160405280600081525090565b60405180604001604052806002905b612bb3604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612b8d5790505090565b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001612c5c612b7e565b8152602001600081525090565b828054612c75906131ae565b90600052602060002090601f016020900481019282612c975760008555612cdd565b82601f10612cb057805160ff1916838001178555612cdd565b82800160010185558215612cdd579182015b82811115612cdd578251825591602001919060010190612cc2565b50612ce9929150612df7565b5090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001612c5c612b7e565b5b80821115612ce95760008155600101612df8565b600060a08284031215612e1e57600080fd5b50919050565b600060408284031215612e1e57600080fd5b600060208284031215612e4857600080fd5b5035919050565b6001600160a01b038116811461263f57600080fd5b600060208284031215612e7657600080fd5b81356104d981612e4f565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612eae57612eae612e81565b808352506020830151151560208301526040830151604083015292915050565b60006101408201905082518252602083015160208301526040830151612eff60408401826001600160a01b03169052565b50606083015160608301526080830151612f2460808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e0830151612f5360e08401826001600160a01b03169052565b50610100838101519083015261012092830151929091019190915290565b60005b83811015612f8c578181015183820152602001612f74565b83811115611a135750506000910152565b8281526040602082015260008251806040840152612fc2816060850160208701612f71565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561301057613010612fd7565b60405290565b6040516020810167ffffffffffffffff8111828210171561301057613010612fd7565b6040516080810167ffffffffffffffff8111828210171561301057613010612fd7565b6040516060810167ffffffffffffffff8111828210171561301057613010612fd7565b604051610160810167ffffffffffffffff8111828210171561301057613010612fd7565b6040516101e0810167ffffffffffffffff8111828210171561301057613010612fd7565b801515811461263f57600080fd5b600081830360a08112156130e857600080fd5b6130f0612fed565b833581526080601f198301121561310657600080fd5b61310e613016565b9150613118613039565b60208501356003811061312a57600080fd5b8152604085013561313a816130c7565b6020820152606085013561314d816130c7565b60408201526080850135613160816130c7565b6060820152825260208101919091529392505050565b60006040828403121561318857600080fd5b613190612fed565b8235815260208301356131a2816130c7565b60208201529392505050565b600181811c908216806131c257607f821691505b60208210811415612e1e57634e487b7160e01b600052602260045260246000fd5b80516105b181612e4f565b600082601f8301126131ff57600080fd5b613207612fed565b8060c084018581111561321957600080fd5b845b8181101561326c57606081880312156132345760008081fd5b61323c61305c565b8151815260208083015181830152604080840151613259816130c7565b908301529085529093019260600161321b565b509095945050505050565b6000610200828403121561328a57600080fd5b61329261307f565b61329b836131e3565b8152602083015160208201526132b3604084016131e3565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206133048185016131e3565b90820152610140613317858583016131ee565b908201529392505050565b6000610160828403121561333557600080fd5b61333d61307f565b613346836131e3565b8152613354602084016131e3565b602082015260408301516040820152606083015160608201526080830151608082015261338360a084016131e3565b60a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406133178185016131e3565b634e487b7160e01b600052601160045260246000fd5b6000828210156133ea576133ea6133c2565b500390565b6000610280828403121561340257600080fd5b61340a6130a3565b613413836131e3565b8152613421602084016131e3565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261346460e084016131e3565b60e082015261010083810151908201526101208084015190820152610140808401519082015261016080840151908201526101806134a38185016131e3565b908201526101a06134b6858583016131ee565b9082015261026092909201516101c083015250919050565b600082198211156134e1576134e16133c2565b500190565b81518152602082015151805160a0830191906003811061350857613508612e81565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401525092915050565b634e487b7160e01b600052603260045260246000fd5b60008261356d57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561358c5761358c6133c2565b500290565b60006000198214156135a5576135a56133c2565b5060010190565b8060005b6002811015611a135781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016135b0565b81516001600160a01b031681526102808101602083015161361660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015161366360e08401826001600160a01b03169052565b506101008381015190830152610120808401519083015261014080840151908301526101608084015190830152610180808401516001600160a01b0316908301526101a0808401516136b7828501826135ac565b50506101c083015161026083015292915050565b81516001600160a01b03168152610160810160208301516136f760208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015161373060a08401826001600160a01b03169052565b5060c0838101519083015260e0808401519083015261010080840151908301526101208084015190830152610140928301516001600160a01b0316929091019190915290565b60008251613788818460208701612f71565b9190910192915050565b6000602082840312156137a457600080fd5b81516104d9816130c756fea264697066735822122019544195cc3759c0e2671e36080c37e109f3b3aa149caf9e9ed70cf1fac1841064736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220c027c7eb54c6f59a9830031ea578ce04375212a63d1eb8f0d3701196921c8b1164736f6c63430008090033`,
  BytecodeLen: 21298,
  Which: `oD`,
  version: 6,
  views: {
    Fomo: {
      info: `Fomo_info`,
      nextPrice: `Fomo_nextPrice`,
      prevPrice: `Fomo_prevPrice`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:205:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:330:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:339:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:337:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:221:23:after expr stmt semicolon',
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
  "Api_buyDiscount": Api_buyDiscount,
  "Api_buyTicket": Api_buyTicket,
  "Api_buyTimeReduction": Api_buyTimeReduction,
  "Buyer": Buyer,
  "Funder": Funder
  };
export const _APIs = {
  Api: {
    buyDiscount: Api_buyDiscount,
    buyTicket: Api_buyTicket,
    buyTimeReduction: Api_buyTimeReduction
    }
  };

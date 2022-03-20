// Automatically generated with Reach 0.1.9 (402c3faa)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (402c3faa)';
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
              const [v855, v856, v857, v858, v859, v860, v861, v862, v864, v877, v905] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async () => {
                
                const v1547 = {
                  currentPrice: v925,
                  currentTotal: v927,
                  currentWinner: v928,
                  deadline: v858,
                  deltaDeadline: v859,
                  endTimestamp: v922,
                  nftPrize: v857,
                  paidToFunder: v924,
                  token: v877,
                  tokenOwnedByUsers: v1546
                  };
                
                return v1547;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async () => {
                
                const v1547 = {
                  currentPrice: v925,
                  currentTotal: v927,
                  currentWinner: v928,
                  deadline: v858,
                  deltaDeadline: v859,
                  endTimestamp: v922,
                  nftPrize: v857,
                  paidToFunder: v924,
                  token: v877,
                  tokenOwnedByUsers: v1546
                  };
                
                return v1547;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = svs;
              return (await ((async () => {
                
                const v967 = {
                  currentPrice: v925,
                  currentTotal: v927,
                  currentWinner: v928,
                  deadline: v858,
                  deltaDeadline: v859,
                  endTimestamp: v922,
                  nftPrize: v857,
                  paidToFunder: v924,
                  token: v877,
                  tokenOwnedByUsers: v966
                  };
                
                return v967;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc6
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v855, v856, v857, v858, v859, v860, v861, v862, v864, v877, v905] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async (_v1548 ) => {
                  const v1548 = stdlib.protect(ctc1, _v1548, null);
                
                const v1549 = stdlib.add(v1548, v860);
                
                return v1549;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async (_v1548 ) => {
                  const v1548 = stdlib.protect(ctc1, _v1548, null);
                
                const v1549 = stdlib.add(v1548, v860);
                
                return v1549;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = svs;
              return (await ((async (_v968 ) => {
                  const v968 = stdlib.protect(ctc1, _v968, null);
                
                const v969 = stdlib.add(v968, v860);
                
                return v969;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v855, v856, v857, v858, v859, v860, v861, v862, v864, v877, v905] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async (_v1550 ) => {
                  const v1550 = stdlib.protect(ctc1, _v1550, null);
                
                const v1551 = stdlib.sub(v1550, v860);
                
                return v1551;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546] = svs;
              return (await ((async (_v1550 ) => {
                  const v1550 = stdlib.protect(ctc1, _v1550, null);
                
                const v1551 = stdlib.sub(v1550, v860);
                
                return v1551;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = svs;
              return (await ((async (_v970 ) => {
                  const v970 = stdlib.protect(ctc1, _v970, null);
                
                const v971 = stdlib.sub(v970, v860);
                
                return v971;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc5],
      3: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1]
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
    Api_buyDiscount0_145: ctc8,
    Api_buyTicket0_145: ctc8,
    Api_buyTimeReduction0_145: ctc8
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
  
  
  const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v988 = ctc.selfAddress();
  const v990 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyDiscount0_145" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v991 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v988), null);
  const v992 = stdlib.fromSome(v991, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
  const v993 = stdlib.lt(v992, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v993, {
    at: './index.rsh:280:23:application',
    fs: ['at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyDiscount0_145" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v996 = ['Api_buyDiscount0_145', v990];
  
  let v1009;
  const v1013 = stdlib.ge(v992, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
  if (v1013) {
    v1009 = stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v1016 = v1014[v992];
    v1009 = v1016;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966, v996],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:281:18:decimal', stdlib.UInt_max, 0), [[v1009, v877]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
      
      switch (v1066[0]) {
        case 'Api_buyDiscount0_145': {
          const v1069 = v1066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1074;
          const v1075 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1065), null);
          const v1076 = stdlib.fromSome(v1075, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1077 = stdlib.lt(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          ;
          const v1078 = stdlib.ge(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1078) {
            v1074 = stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1079 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1081 = v1079[v1076];
            v1074 = v1081;
            }
          ;
          const v1132 = stdlib.add(v965, v1074);
          const v1136 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1137 = [v1132, v963, v1136];
          const v1138 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1137);
          sim_r.txns.push({
            amt: v1074,
            kind: 'to',
            tok: v877
            });
          const v1143 = null;
          const v1144 = await txn1.getOutput('Api_buyDiscount', 'v1143', ctc0, v1143);
          
          const v1149 = stdlib.add(v1076, stdlib.checkedBigNumberify('./index.rsh:290:47:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1065, v1149);
          const v2544 = v922;
          const v2546 = v924;
          const v2547 = v925;
          const v2548 = v927;
          const v2549 = v928;
          const v2551 = v1138;
          const v2552 = v936;
          const v2553 = v1138[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2554 = v2553[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2555 = v2553[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
          const v2556 = stdlib.sub(v2554, v2555);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_145': {
          const v1225 = v1066[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_145': {
          const v1381 = v1066[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
  switch (v1066[0]) {
    case 'Api_buyDiscount0_145': {
      const v1069 = v1066[1];
      undefined /* setApiDetails */;
      let v1074;
      const v1075 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
      const v1076 = stdlib.fromSome(v1075, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
      const v1077 = stdlib.lt(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1077, {
        at: './index.rsh:146:12:application',
        fs: ['at ./index.rsh:281:38:application call to "getDiscountPrice" (defined at: ./index.rsh:144:36:function exp)', 'at ./index.rsh:281:14:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1078 = stdlib.ge(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
      if (v1078) {
        v1074 = stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1079 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v1081 = v1079[v1076];
        v1074 = v1081;
        }
      ;
      const v1132 = stdlib.add(v965, v1074);
      const v1136 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
      const v1137 = [v1132, v963, v1136];
      const v1138 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1137);
      ;
      const v1143 = null;
      const v1144 = await txn1.getOutput('Api_buyDiscount', 'v1143', ctc0, v1143);
      if (v550) {
        stdlib.protect(ctc0, await interact.out(v1069, v1144), {
          at: './index.rsh:279:11:application',
          fs: ['at ./index.rsh:279:11:application call to [unknown function] (defined at: ./index.rsh:279:11:function exp)', 'at ./index.rsh:286:21:application call to "callback" (defined at: ./index.rsh:282:22:function exp)', 'at ./index.rsh:282:22:application call to [unknown function] (defined at: ./index.rsh:282:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v1149 = stdlib.add(v1076, stdlib.checkedBigNumberify('./index.rsh:290:47:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1065, v1149);
      const v2544 = v922;
      const v2546 = v924;
      const v2547 = v925;
      const v2548 = v927;
      const v2549 = v928;
      const v2551 = v1138;
      const v2552 = v936;
      const v2553 = v1138[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2554 = v2553[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2555 = v2553[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
      const v2556 = stdlib.sub(v2554, v2555);
      return;
      
      break;
      }
    case 'Api_buyTicket0_145': {
      const v1225 = v1066[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_145': {
      const v1381 = v1066[1];
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
    Api_buyDiscount0_145: ctc8,
    Api_buyTicket0_145: ctc8,
    Api_buyTimeReduction0_145: ctc8
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
  
  
  const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v976 = ctc.selfAddress();
  const v978 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:249:14:application call to [unknown function] (defined at: ./index.rsh:249:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyTicket0_145" (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v980 = stdlib.gt(v861, stdlib.checkedBigNumberify('./index.rsh:250:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v980, {
    at: './index.rsh:250:19:application',
    fs: ['at ./index.rsh:249:14:application call to [unknown function] (defined at: ./index.rsh:249:14:function exp)', 'at ./index.rsh:249:14:application call to [unknown function] (defined at: ./index.rsh:249:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyTicket0_145" (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v983 = stdlib.gt(v965, v862);
  stdlib.assert(v983, {
    at: './index.rsh:251:19:application',
    fs: ['at ./index.rsh:249:14:application call to [unknown function] (defined at: ./index.rsh:249:14:function exp)', 'at ./index.rsh:249:14:application call to [unknown function] (defined at: ./index.rsh:249:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyTicket0_145" (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v986 = ['Api_buyTicket0_145', v978];
  
  let v1027;
  const v1028 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v976), null);
  const v1029 = stdlib.fromSome(v1028, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
  const v1030 = stdlib.ge(v1029, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
  if (v1030) {
    v1027 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1031 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
    const v1033 = v1031[v1029];
    v1027 = v1033;
    }
  const v1034 = stdlib.lt(v1027, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1034, {
    at: './index.rsh:166:12:application',
    fs: ['at ./index.rsh:253:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:253:14:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1035 = stdlib.div(v1027, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
  const v1036 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1035);
  const v1037 = stdlib.mul(v925, v1036);
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966, v986],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v1037, [[stdlib.checkedBigNumberify('./index.rsh:253:54:decimal', stdlib.UInt_max, 0), v877]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
      
      switch (v1066[0]) {
        case 'Api_buyDiscount0_145': {
          const v1069 = v1066[1];
          
          break;
          }
        case 'Api_buyTicket0_145': {
          const v1225 = v1066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1245;
          const v1246 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1065), null);
          const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1248 = stdlib.ge(v1247, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1248) {
            v1245 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1251 = v1249[v1247];
            v1245 = v1251;
            }
          const v1252 = stdlib.lt(v1245, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1253 = stdlib.div(v1245, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1253);
          const v1255 = stdlib.mul(v925, v1254);
          const v1285 = stdlib.add(v936, v1255);
          sim_r.txns.push({
            amt: v1255,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1292 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1293 = [v965, v963, v1292];
          const v1294 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1293);
          ;
          const v1313 = v1294[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 1)];
          const v1314 = v1313[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 0)];
          const v1315 = stdlib.gt(v1314, v862);
          ;
          const v1316 = null;
          const v1317 = await txn1.getOutput('Api_buyTicket', 'v1316', ctc0, v1316);
          
          const v1322 = stdlib.div(v925, v861);
          const v1323 = stdlib.add(v925, v860);
          const v1328 = stdlib.sub(v1285, v1322);
          sim_r.txns.push({
            amt: v1322,
            kind: 'from',
            to: v855,
            tok: undefined /* Nothing */
            });
          const v1334 = stdlib.sub(v1314, v862);
          const v1337 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1)];
          const v1338 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 2)];
          const v1339 = [v1334, v1337, v1338];
          const v1340 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1), v1339);
          sim_r.txns.push({
            amt: v862,
            kind: 'from',
            to: v1065,
            tok: v877
            });
          let v1341;
          const v1342 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1065), null);
          const v1343 = stdlib.fromSome(v1342, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1344 = stdlib.ge(v1343, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1344) {
            v1341 = stdlib.checkedBigNumberify('./index.rsh:197:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1347 = v1345[v1343];
            v1341 = v1347;
            }
          const v1348 = stdlib.sub(v859, v1341);
          let v1350;
          if (v1248) {
            v1350 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1356 = v1354[v1247];
            v1350 = v1356;
            }
          const v1357 = stdlib.lt(v1350, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1358 = stdlib.div(v1350, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1359 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1358);
          const v1360 = stdlib.mul(v925, v1359);
          const v1361 = stdlib.add(v927, v1360);
          const v1362 = stdlib.add(v924, v1322);
          const v1363 = stdlib.add(v922, v1348);
          const v2652 = v1363;
          const v2654 = v1362;
          const v2655 = v1323;
          const v2656 = v1361;
          const v2657 = v1065;
          const v2659 = v1340;
          const v2660 = v1328;
          const v2661 = v1340[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2662 = v2661[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2663 = v2661[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
          const v2664 = stdlib.sub(v2662, v2663);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_145': {
          const v1381 = v1066[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
  switch (v1066[0]) {
    case 'Api_buyDiscount0_145': {
      const v1069 = v1066[1];
      return;
      break;
      }
    case 'Api_buyTicket0_145': {
      const v1225 = v1066[1];
      undefined /* setApiDetails */;
      let v1245;
      const v1246 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
      const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
      const v1248 = stdlib.ge(v1247, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
      if (v1248) {
        v1245 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1251 = v1249[v1247];
        v1245 = v1251;
        }
      const v1252 = stdlib.lt(v1245, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1252, {
        at: './index.rsh:166:12:application',
        fs: ['at ./index.rsh:253:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:253:14:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1253 = stdlib.div(v1245, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
      const v1254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1253);
      const v1255 = stdlib.mul(v925, v1254);
      const v1285 = stdlib.add(v936, v1255);
      ;
      const v1292 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
      const v1293 = [v965, v963, v1292];
      const v1294 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1293);
      ;
      const v1313 = v1294[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 1)];
      const v1314 = v1313[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 0)];
      const v1315 = stdlib.gt(v1314, v862);
      stdlib.assert(v1315, {
        at: './index.rsh:256:20:application',
        fs: ['at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1316 = null;
      const v1317 = await txn1.getOutput('Api_buyTicket', 'v1316', ctc0, v1316);
      if (v550) {
        stdlib.protect(ctc0, await interact.out(v1225, v1317), {
          at: './index.rsh:248:11:application',
          fs: ['at ./index.rsh:248:11:application call to [unknown function] (defined at: ./index.rsh:248:11:function exp)', 'at ./index.rsh:257:21:application call to "callback" (defined at: ./index.rsh:254:22:function exp)', 'at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1322 = stdlib.div(v925, v861);
      const v1323 = stdlib.add(v925, v860);
      const v1328 = stdlib.sub(v1285, v1322);
      ;
      const v1334 = stdlib.sub(v1314, v862);
      const v1337 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1)];
      const v1338 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 2)];
      const v1339 = [v1334, v1337, v1338];
      const v1340 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1), v1339);
      ;
      let v1341;
      const v1342 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
      const v1343 = stdlib.fromSome(v1342, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
      const v1344 = stdlib.ge(v1343, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
      if (v1344) {
        v1341 = stdlib.checkedBigNumberify('./index.rsh:197:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
        const v1347 = v1345[v1343];
        v1341 = v1347;
        }
      const v1348 = stdlib.sub(v859, v1341);
      let v1350;
      if (v1248) {
        v1350 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1356 = v1354[v1247];
        v1350 = v1356;
        }
      const v1357 = stdlib.lt(v1350, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1357, {
        at: './index.rsh:166:12:application',
        fs: ['at ./index.rsh:271:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1358 = stdlib.div(v1350, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
      const v1359 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1358);
      const v1360 = stdlib.mul(v925, v1359);
      const v1361 = stdlib.add(v927, v1360);
      const v1362 = stdlib.add(v924, v1322);
      const v1363 = stdlib.add(v922, v1348);
      const v2652 = v1363;
      const v2654 = v1362;
      const v2655 = v1323;
      const v2656 = v1361;
      const v2657 = v1065;
      const v2659 = v1340;
      const v2660 = v1328;
      const v2661 = v1340[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2662 = v2661[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2663 = v2661[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
      const v2664 = stdlib.sub(v2662, v2663);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_145': {
      const v1381 = v1066[1];
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
    Api_buyDiscount0_145: ctc8,
    Api_buyTicket0_145: ctc8,
    Api_buyTimeReduction0_145: ctc8
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
  
  
  const [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1]);
  const v998 = ctc.selfAddress();
  const v1000 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:303:14:application call to [unknown function] (defined at: ./index.rsh:303:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyTimeReduction0_145" (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1001 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v998), null);
  const v1002 = stdlib.fromSome(v1001, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
  const v1003 = stdlib.lt(v1002, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1003, {
    at: './index.rsh:303:23:application',
    fs: ['at ./index.rsh:303:14:application call to [unknown function] (defined at: ./index.rsh:303:14:function exp)', 'at ./index.rsh:303:14:application call to [unknown function] (defined at: ./index.rsh:303:14:function exp)', 'at ./index.rsh:222:23:application call to "runApi_buyTimeReduction0_145" (defined at: ./index.rsh:301:13:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1006 = ['Api_buyTimeReduction0_145', v1000];
  
  let v1048;
  const v1052 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
  if (v1052) {
    v1048 = stdlib.checkedBigNumberify('./index.rsh:188:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1053 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v1055 = v1053[v1002];
    v1048 = v1055;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966, v1006],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:304:18:decimal', stdlib.UInt_max, 0), [[v1048, v877]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
      
      switch (v1066[0]) {
        case 'Api_buyDiscount0_145': {
          const v1069 = v1066[1];
          
          break;
          }
        case 'Api_buyTicket0_145': {
          const v1225 = v1066[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_145': {
          const v1381 = v1066[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1419;
          const v1420 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1065), null);
          const v1421 = stdlib.fromSome(v1420, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1422 = stdlib.lt(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          ;
          const v1423 = stdlib.ge(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1423) {
            v1419 = stdlib.checkedBigNumberify('./index.rsh:188:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1424 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1426 = v1424[v1421];
            v1419 = v1426;
            }
          ;
          const v1444 = stdlib.add(v965, v1419);
          const v1448 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v963, v1448];
          const v1450 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1449);
          sim_r.txns.push({
            amt: v1419,
            kind: 'to',
            tok: v877
            });
          const v1525 = null;
          const v1526 = await txn1.getOutput('Api_buyTimeReduction', 'v1525', ctc0, v1525);
          
          const v1531 = stdlib.add(v1421, stdlib.checkedBigNumberify('./index.rsh:313:57:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1065, v1531);
          const v2760 = v922;
          const v2762 = v924;
          const v2763 = v925;
          const v2764 = v927;
          const v2765 = v928;
          const v2767 = v1450;
          const v2768 = v936;
          const v2769 = v1450[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
          const v2771 = v2769[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
          const v2772 = stdlib.sub(v2770, v2771);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc7, ctc1, ctc6, ctc1, ctc1, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn1;
  switch (v1066[0]) {
    case 'Api_buyDiscount0_145': {
      const v1069 = v1066[1];
      return;
      break;
      }
    case 'Api_buyTicket0_145': {
      const v1225 = v1066[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_145': {
      const v1381 = v1066[1];
      undefined /* setApiDetails */;
      let v1419;
      const v1420 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
      const v1421 = stdlib.fromSome(v1420, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
      const v1422 = stdlib.lt(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1422, {
        at: './index.rsh:185:12:application',
        fs: ['at ./index.rsh:304:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:183:41:function exp)', 'at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1423 = stdlib.ge(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
      if (v1423) {
        v1419 = stdlib.checkedBigNumberify('./index.rsh:188:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1424 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v1426 = v1424[v1421];
        v1419 = v1426;
        }
      ;
      const v1444 = stdlib.add(v965, v1419);
      const v1448 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
      const v1449 = [v1444, v963, v1448];
      const v1450 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1449);
      ;
      const v1525 = null;
      const v1526 = await txn1.getOutput('Api_buyTimeReduction', 'v1525', ctc0, v1525);
      if (v550) {
        stdlib.protect(ctc0, await interact.out(v1381, v1526), {
          at: './index.rsh:302:11:application',
          fs: ['at ./index.rsh:302:11:application call to [unknown function] (defined at: ./index.rsh:302:11:function exp)', 'at ./index.rsh:309:21:application call to "callback" (defined at: ./index.rsh:305:22:function exp)', 'at ./index.rsh:305:22:application call to [unknown function] (defined at: ./index.rsh:305:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v1531 = stdlib.add(v1421, stdlib.checkedBigNumberify('./index.rsh:313:57:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1065, v1531);
      const v2760 = v922;
      const v2762 = v924;
      const v2763 = v925;
      const v2764 = v927;
      const v2765 = v928;
      const v2767 = v1450;
      const v2768 = v936;
      const v2769 = v1450[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2770 = v2769[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
      const v2771 = v2769[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
      const v2772 = stdlib.sub(v2770, v2771);
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
    Api_buyDiscount0_145: ctc4,
    Api_buyTicket0_145: ctc4,
    Api_buyTimeReduction0_145: ctc4
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
  
  
  const v834 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v835 = [v834, v834];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v856, v857, v858, v859, v860, v861, v862], secs: v864, time: v863, didSend: v52, from: v855 } = txn1;
  const v865 = v835[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0)];
  const v867 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 1)];
  const v868 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 2)];
  const v869 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v867, v868];
  const v870 = stdlib.Array_set(v835, stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0), v869);
  ;
  ;
  const v872 = 'Metafomo                        ';
  const v873 = 'METAFOMO';
  const v874 = 'https://metalabs.technology                                                                     ';
  const v875 = '                                ';
  const v876 = undefined /* TokenNew */;
  const v877 = await txn1.getOutput('internal', 'v876', ctc3, v876);
  const v878 = [v857];
  const v1601 = v878[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v1605 = stdlib.tokenEq(v877, v1601);
  const v886 = v1605 ? false : true;
  stdlib.assert(v886, {
    at: './index.rsh:125:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v887 = v870[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v889 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v890 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
  const v891 = [stdlib.UInt_max, v889, v890];
  const v892 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v891);
  const v894 = v892[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v895 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
  const v897 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
  const v898 = [v895, stdlib.UInt_max, v897];
  const v899 = stdlib.Array_set(v892, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v898);
  const v900 = v899[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
  const v902 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v904 = [v901, v902, false];
  const v905 = stdlib.Array_set(v899, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v904);
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:209:28:application',
    fs: ['at ./index.rsh:209:28:application call to [unknown function] (defined at: ./index.rsh:209:28:function exp)', 'at ./index.rsh:209:28:application call to "liftedInteract" (defined at: ./index.rsh:209:28:application)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v909, time: v908, didSend: v81, from: v907 } = txn2;
  ;
  const v910 = v905[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
  const v911 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
  const v912 = stdlib.add(v911, stdlib.checkedBigNumberify('./index.rsh:211:18:decimal', stdlib.UInt_max, 1));
  const v915 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 1)];
  const v916 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 2)];
  const v917 = [v912, v915, v916];
  const v918 = stdlib.Array_set(v905, stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0), v917);
  ;
  const v919 = stdlib.addressEq(v855, v907);
  stdlib.assert(v919, {
    at: './index.rsh:211:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v921 = stdlib.add(v864, v858);
  let v922 = v921;
  let v923 = true;
  let v924 = stdlib.checkedBigNumberify('./index.rsh:222:59:decimal', stdlib.UInt_max, 0);
  let v925 = v856;
  let v927 = stdlib.checkedBigNumberify('./index.rsh:222:43:decimal', stdlib.UInt_max, 0);
  let v928 = v855;
  let v929 = v908;
  let v935 = v918;
  let v936 = stdlib.checkedBigNumberify('./index.rsh:108:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v923;})()) {
    const v962 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
    const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
    const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
    const v966 = stdlib.sub(v963, v965);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v922],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966],
        evt_cnt: 0,
        funcNum: 7,
        lct: v929,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:325:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1539, time: v1538, didSend: v658, from: v1537 } = txn4;
          
          ;
          const cv922 = v922;
          const cv923 = false;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1538;
          const cv935 = v935;
          const cv936 = v936;
          
          await (async () => {
            const v922 = cv922;
            const v923 = cv923;
            const v924 = cv924;
            const v925 = cv925;
            const v927 = cv927;
            const v928 = cv928;
            const v929 = cv929;
            const v935 = cv935;
            const v936 = cv936;
            
            if (await (async () => {
              
              return v923;})()) {
              const v962 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
              const v966 = stdlib.sub(v963, v965);
              sim_r.isHalt = false;
              }
            else {
              const v1542 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v1545 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
              const v1546 = stdlib.sub(v1543, v1545);
              sim_r.txns.push({
                amt: v936,
                kind: 'from',
                to: v928,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:330:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v928,
                tok: v857
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc6, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1539, time: v1538, didSend: v658, from: v1537 } = txn4;
      ;
      const cv922 = v922;
      const cv923 = false;
      const cv924 = v924;
      const cv925 = v925;
      const cv927 = v927;
      const cv928 = v928;
      const cv929 = v1538;
      const cv935 = v935;
      const cv936 = v936;
      
      v922 = cv922;
      v923 = cv923;
      v924 = cv924;
      v925 = cv925;
      v927 = cv927;
      v928 = cv928;
      v929 = cv929;
      v935 = cv935;
      v936 = cv936;
      
      continue;
      }
    else {
      const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn3;
      switch (v1066[0]) {
        case 'Api_buyDiscount0_145': {
          const v1069 = v1066[1];
          undefined /* setApiDetails */;
          let v1074;
          const v1075 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
          const v1076 = stdlib.fromSome(v1075, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1077 = stdlib.lt(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1077, {
            at: './index.rsh:146:12:application',
            fs: ['at ./index.rsh:281:38:application call to "getDiscountPrice" (defined at: ./index.rsh:144:36:function exp)', 'at ./index.rsh:281:14:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1078 = stdlib.ge(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1078) {
            v1074 = stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1079 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1081 = v1079[v1076];
            v1074 = v1081;
            }
          ;
          const v1132 = stdlib.add(v965, v1074);
          const v1136 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1137 = [v1132, v963, v1136];
          const v1138 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1137);
          ;
          const v1143 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1143', ctc0, v1143);
          const v1149 = stdlib.add(v1076, stdlib.checkedBigNumberify('./index.rsh:290:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1065, v1149);
          if (v550) {
            stdlib.protect(ctc0, await interact.updateDiscountLevel(v1149), {
              at: './index.rsh:294:45:application',
              fs: ['at ./index.rsh:292:23:application call to [unknown function] (defined at: ./index.rsh:292:27:function exp)', 'at ./index.rsh:282:22:application call to [unknown function] (defined at: ./index.rsh:282:22:function exp)'],
              msg: 'updateDiscountLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv922 = v922;
          const cv923 = true;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1067;
          const cv935 = v1138;
          const cv936 = v936;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_145': {
          const v1225 = v1066[1];
          undefined /* setApiDetails */;
          let v1245;
          const v1246 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
          const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1248 = stdlib.ge(v1247, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1248) {
            v1245 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1251 = v1249[v1247];
            v1245 = v1251;
            }
          const v1252 = stdlib.lt(v1245, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1252, {
            at: './index.rsh:166:12:application',
            fs: ['at ./index.rsh:253:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:253:14:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1253 = stdlib.div(v1245, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1253);
          const v1255 = stdlib.mul(v925, v1254);
          const v1285 = stdlib.add(v936, v1255);
          ;
          const v1292 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1293 = [v965, v963, v1292];
          const v1294 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1293);
          ;
          const v1312 = stdlib.gt(v861, stdlib.checkedBigNumberify('./index.rsh:255:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1312, {
            at: './index.rsh:255:20:application',
            fs: ['at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1313 = v1294[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 1)];
          const v1314 = v1313[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 0)];
          const v1315 = stdlib.gt(v1314, v862);
          stdlib.assert(v1315, {
            at: './index.rsh:256:20:application',
            fs: ['at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1316 = null;
          await txn3.getOutput('Api_buyTicket', 'v1316', ctc0, v1316);
          const v1322 = stdlib.div(v925, v861);
          const v1323 = stdlib.add(v925, v860);
          stdlib.protect(ctc0, await interact.showPurchase(v1065, v925, v1323), {
            at: './index.rsh:262:51:application',
            fs: ['at ./index.rsh:262:23:application call to [unknown function] (defined at: ./index.rsh:262:27:function exp)', 'at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1328 = stdlib.sub(v1285, v1322);
          ;
          const v1334 = stdlib.sub(v1314, v862);
          const v1337 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1)];
          const v1338 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 2)];
          const v1339 = [v1334, v1337, v1338];
          const v1340 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1), v1339);
          ;
          let v1341;
          const v1342 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
          const v1343 = stdlib.fromSome(v1342, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1344 = stdlib.ge(v1343, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1344) {
            v1341 = stdlib.checkedBigNumberify('./index.rsh:197:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1347 = v1345[v1343];
            v1341 = v1347;
            }
          const v1348 = stdlib.sub(v859, v1341);
          let v1350;
          if (v1248) {
            v1350 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1356 = v1354[v1247];
            v1350 = v1356;
            }
          const v1357 = stdlib.lt(v1350, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1357, {
            at: './index.rsh:166:12:application',
            fs: ['at ./index.rsh:271:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1358 = stdlib.div(v1350, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1359 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1358);
          const v1360 = stdlib.mul(v925, v1359);
          const v1361 = stdlib.add(v927, v1360);
          const v1362 = stdlib.add(v924, v1322);
          const v1363 = stdlib.add(v922, v1348);
          const cv922 = v1363;
          const cv923 = true;
          const cv924 = v1362;
          const cv925 = v1323;
          const cv927 = v1361;
          const cv928 = v1065;
          const cv929 = v1067;
          const cv935 = v1340;
          const cv936 = v1328;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_145': {
          const v1381 = v1066[1];
          undefined /* setApiDetails */;
          let v1419;
          const v1420 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
          const v1421 = stdlib.fromSome(v1420, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1422 = stdlib.lt(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1422, {
            at: './index.rsh:185:12:application',
            fs: ['at ./index.rsh:304:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:183:41:function exp)', 'at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1423 = stdlib.ge(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1423) {
            v1419 = stdlib.checkedBigNumberify('./index.rsh:188:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1424 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1426 = v1424[v1421];
            v1419 = v1426;
            }
          ;
          const v1444 = stdlib.add(v965, v1419);
          const v1448 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v963, v1448];
          const v1450 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1449);
          ;
          const v1525 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1525', ctc0, v1525);
          const v1531 = stdlib.add(v1421, stdlib.checkedBigNumberify('./index.rsh:313:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1065, v1531);
          if (v550) {
            stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1531), {
              at: './index.rsh:317:50:application',
              fs: ['at ./index.rsh:315:23:application call to [unknown function] (defined at: ./index.rsh:315:27:function exp)', 'at ./index.rsh:305:22:application call to [unknown function] (defined at: ./index.rsh:305:22:function exp)'],
              msg: 'updateTimeReductionLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv922 = v922;
          const cv923 = true;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1067;
          const cv935 = v1450;
          const cv936 = v936;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        }}
    
    }
  const v1542 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
  const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
  const v1545 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
  const v1546 = stdlib.sub(v1543, v1545);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v928), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:32:function exp)', 'at ./index.rsh:332:16:application call to "showOutcome" (defined at: ./index.rsh:91:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546],
    evt_cnt: 0,
    funcNum: 3,
    lct: v929,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:335:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1575, time: v1574, didSend: v691, from: v1573 } = txn3;
      
      ;
      const v1576 = v1574;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v857
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
    tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1575, time: v1574, didSend: v691, from: v1573 } = txn3;
  ;
  let v1576 = v1574;
  
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
    const {data: [], secs: v1588, time: v1587, didSend: v700, from: v1586 } = txn4;
    ;
    const v1589 = stdlib.addressEq(v855, v1586);
    stdlib.assert(v1589, {
      at: './index.rsh:338:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv1576 = v1587;
    
    v1576 = cv1576;
    
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
    Api_buyDiscount0_145: ctc5,
    Api_buyTicket0_145: ctc5,
    Api_buyTimeReduction0_145: ctc5
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
  
  
  const v834 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v835 = [v834, v834];
  const v846 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:113:38:application',
    fs: ['at ./index.rsh:111:16:application call to [unknown function] (defined at: ./index.rsh:111:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v847 = v846.ticketPrice;
  const v848 = v846.nftPrize;
  const v849 = v846.deadline;
  const v850 = v846.deltaDeadline;
  const v851 = v846.unitPrice;
  const v852 = v846.ticketFeeDenominator;
  const v853 = v846.tokensGivenPerTicket;
  const v854 = stdlib.gt(v852, stdlib.checkedBigNumberify('./index.rsh:114:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v854, {
    at: './index.rsh:114:12:application',
    fs: ['at ./index.rsh:111:16:application call to [unknown function] (defined at: ./index.rsh:111:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v847, v848, v849, v850, v851, v852, v853],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:116:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v856, v857, v858, v859, v860, v861, v862], secs: v864, time: v863, didSend: v52, from: v855 } = txn1;
      
      const v865 = v835[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0)];
      const v867 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 1)];
      const v868 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 2)];
      const v869 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v867, v868];
      const v870 = stdlib.Array_set(v835, stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0), v869);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v857
        });
      ;
      const v872 = 'Metafomo                        ';
      const v873 = 'METAFOMO';
      const v874 = 'https://metalabs.technology                                                                     ';
      const v875 = '                                ';
      const v876 = stdlib.simTokenNew(sim_r, v872, v873, v874, v875, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v877 = await txn1.getOutput('internal', 'v876', ctc3, v876);
      const v878 = [v857];
      const v1601 = v878[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v1605 = stdlib.tokenEq(v877, v1601);
      const v886 = v1605 ? false : true;
      ;
      const v887 = v870[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
      const v889 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
      const v890 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
      const v891 = [stdlib.UInt_max, v889, v890];
      const v892 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v891);
      const v894 = v892[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
      const v895 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
      const v897 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
      const v898 = [v895, stdlib.UInt_max, v897];
      const v899 = stdlib.Array_set(v892, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v898);
      const v900 = v899[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
      const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
      const v902 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
      const v904 = [v901, v902, false];
      const v905 = stdlib.Array_set(v899, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v904);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v856, v857, v858, v859, v860, v861, v862], secs: v864, time: v863, didSend: v52, from: v855 } = txn1;
  const v865 = v835[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0)];
  const v867 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 1)];
  const v868 = v865[stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 2)];
  const v869 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v867, v868];
  const v870 = stdlib.Array_set(v835, stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0), v869);
  ;
  ;
  const v872 = 'Metafomo                        ';
  const v873 = 'METAFOMO';
  const v874 = 'https://metalabs.technology                                                                     ';
  const v875 = '                                ';
  const v876 = undefined /* TokenNew */;
  const v877 = await txn1.getOutput('internal', 'v876', ctc3, v876);
  const v878 = [v857];
  const v1601 = v878[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v1605 = stdlib.tokenEq(v877, v1601);
  const v886 = v1605 ? false : true;
  stdlib.assert(v886, {
    at: './index.rsh:125:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v887 = v870[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v889 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v890 = v887[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
  const v891 = [stdlib.UInt_max, v889, v890];
  const v892 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v891);
  const v894 = v892[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v895 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
  const v897 = v894[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 2)];
  const v898 = [v895, stdlib.UInt_max, v897];
  const v899 = stdlib.Array_set(v892, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v898);
  const v900 = v899[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v901 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 0)];
  const v902 = v900[stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1)];
  const v904 = [v901, v902, false];
  const v905 = stdlib.Array_set(v899, stdlib.checkedBigNumberify('./index.rsh:125:32:application', stdlib.UInt_max, 1), v904);
  const txn2 = await (ctc.sendrecv({
    args: [v855, v856, v857, v858, v859, v860, v861, v862, v864, v877, v905],
    evt_cnt: 0,
    funcNum: 1,
    lct: v863,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:211:18:decimal', stdlib.UInt_max, 1), v857]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v909, time: v908, didSend: v81, from: v907 } = txn2;
      
      ;
      const v910 = v905[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
      const v911 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
      const v912 = stdlib.add(v911, stdlib.checkedBigNumberify('./index.rsh:211:18:decimal', stdlib.UInt_max, 1));
      const v915 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 1)];
      const v916 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 2)];
      const v917 = [v912, v915, v916];
      const v918 = stdlib.Array_set(v905, stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0), v917);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:211:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v857
        });
      const v919 = stdlib.addressEq(v855, v907);
      ;
      const v921 = stdlib.add(v864, v858);
      const v922 = v921;
      const v923 = true;
      const v924 = stdlib.checkedBigNumberify('./index.rsh:222:59:decimal', stdlib.UInt_max, 0);
      const v925 = v856;
      const v927 = stdlib.checkedBigNumberify('./index.rsh:222:43:decimal', stdlib.UInt_max, 0);
      const v928 = v855;
      const v929 = v908;
      const v935 = v918;
      const v936 = stdlib.checkedBigNumberify('./index.rsh:108:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v923;})()) {
        const v962 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
        const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
        const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
        const v966 = stdlib.sub(v963, v965);
        sim_r.isHalt = false;
        }
      else {
        const v1542 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
        const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
        const v1545 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
        const v1546 = stdlib.sub(v1543, v1545);
        sim_r.txns.push({
          amt: v936,
          kind: 'from',
          to: v928,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:330:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v928,
          tok: v857
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v909, time: v908, didSend: v81, from: v907 } = txn2;
  ;
  const v910 = v905[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
  const v911 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0)];
  const v912 = stdlib.add(v911, stdlib.checkedBigNumberify('./index.rsh:211:18:decimal', stdlib.UInt_max, 1));
  const v915 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 1)];
  const v916 = v910[stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 2)];
  const v917 = [v912, v915, v916];
  const v918 = stdlib.Array_set(v905, stdlib.checkedBigNumberify('./index.rsh:211:12:dot', stdlib.UInt_max, 0), v917);
  ;
  const v919 = stdlib.addressEq(v855, v907);
  stdlib.assert(v919, {
    at: './index.rsh:211:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v921 = stdlib.add(v864, v858);
  let v922 = v921;
  let v923 = true;
  let v924 = stdlib.checkedBigNumberify('./index.rsh:222:59:decimal', stdlib.UInt_max, 0);
  let v925 = v856;
  let v927 = stdlib.checkedBigNumberify('./index.rsh:222:43:decimal', stdlib.UInt_max, 0);
  let v928 = v855;
  let v929 = v908;
  let v935 = v918;
  let v936 = stdlib.checkedBigNumberify('./index.rsh:108:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v923;})()) {
    const v962 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
    const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
    const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
    const v966 = stdlib.sub(v963, v965);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v922],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v855, v857, v858, v859, v860, v861, v862, v877, v922, v924, v925, v927, v928, v935, v936, v962, v963, v965, v966],
        evt_cnt: 0,
        funcNum: 7,
        lct: v929,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:325:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1539, time: v1538, didSend: v658, from: v1537 } = txn4;
          
          ;
          const cv922 = v922;
          const cv923 = false;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1538;
          const cv935 = v935;
          const cv936 = v936;
          
          await (async () => {
            const v922 = cv922;
            const v923 = cv923;
            const v924 = cv924;
            const v925 = cv925;
            const v927 = cv927;
            const v928 = cv928;
            const v929 = cv929;
            const v935 = cv935;
            const v936 = cv936;
            
            if (await (async () => {
              
              return v923;})()) {
              const v962 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v963 = v962[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v965 = v962[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
              const v966 = stdlib.sub(v963, v965);
              sim_r.isHalt = false;
              }
            else {
              const v1542 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
              const v1545 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
              const v1546 = stdlib.sub(v1543, v1545);
              sim_r.txns.push({
                amt: v936,
                kind: 'from',
                to: v928,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:330:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v928,
                tok: v857
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7, ctc10, ctc1, ctc9, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1539, time: v1538, didSend: v658, from: v1537 } = txn4;
      ;
      const cv922 = v922;
      const cv923 = false;
      const cv924 = v924;
      const cv925 = v925;
      const cv927 = v927;
      const cv928 = v928;
      const cv929 = v1538;
      const cv935 = v935;
      const cv936 = v936;
      
      v922 = cv922;
      v923 = cv923;
      v924 = cv924;
      v925 = cv925;
      v927 = cv927;
      v928 = cv928;
      v929 = cv929;
      v935 = cv935;
      v936 = cv936;
      
      continue;
      }
    else {
      const {data: [v1066], secs: v1068, time: v1067, didSend: v550, from: v1065 } = txn3;
      switch (v1066[0]) {
        case 'Api_buyDiscount0_145': {
          const v1069 = v1066[1];
          undefined /* setApiDetails */;
          let v1074;
          const v1075 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
          const v1076 = stdlib.fromSome(v1075, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1077 = stdlib.lt(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1077, {
            at: './index.rsh:146:12:application',
            fs: ['at ./index.rsh:281:38:application call to "getDiscountPrice" (defined at: ./index.rsh:144:36:function exp)', 'at ./index.rsh:281:14:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:281:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1078 = stdlib.ge(v1076, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1078) {
            v1074 = stdlib.checkedBigNumberify('./index.rsh:149:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1079 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1081 = v1079[v1076];
            v1074 = v1081;
            }
          ;
          const v1132 = stdlib.add(v965, v1074);
          const v1136 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1137 = [v1132, v963, v1136];
          const v1138 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1137);
          ;
          const v1143 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1143', ctc0, v1143);
          const v1149 = stdlib.add(v1076, stdlib.checkedBigNumberify('./index.rsh:290:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1065, v1149);
          const cv922 = v922;
          const cv923 = true;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1067;
          const cv935 = v1138;
          const cv936 = v936;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_145': {
          const v1225 = v1066[1];
          undefined /* setApiDetails */;
          let v1245;
          const v1246 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1065), null);
          const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:142:64:decimal', stdlib.UInt_max, 0));
          const v1248 = stdlib.ge(v1247, stdlib.checkedBigNumberify('./index.rsh:135:30:decimal', stdlib.UInt_max, 5));
          if (v1248) {
            v1245 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1249 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1251 = v1249[v1247];
            v1245 = v1251;
            }
          const v1252 = stdlib.lt(v1245, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1252, {
            at: './index.rsh:166:12:application',
            fs: ['at ./index.rsh:253:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:253:14:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:253:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1253 = stdlib.div(v1245, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1253);
          const v1255 = stdlib.mul(v925, v1254);
          const v1285 = stdlib.add(v936, v1255);
          ;
          const v1292 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1293 = [v965, v963, v1292];
          const v1294 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1293);
          ;
          const v1312 = stdlib.gt(v861, stdlib.checkedBigNumberify('./index.rsh:255:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1312, {
            at: './index.rsh:255:20:application',
            fs: ['at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1313 = v1294[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 1)];
          const v1314 = v1313[stdlib.checkedBigNumberify('./index.rsh:256:28:application', stdlib.UInt_max, 0)];
          const v1315 = stdlib.gt(v1314, v862);
          stdlib.assert(v1315, {
            at: './index.rsh:256:20:application',
            fs: ['at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1316 = null;
          await txn3.getOutput('Api_buyTicket', 'v1316', ctc0, v1316);
          const v1322 = stdlib.div(v925, v861);
          const v1323 = stdlib.add(v925, v860);
          const v1328 = stdlib.sub(v1285, v1322);
          ;
          const v1334 = stdlib.sub(v1314, v862);
          const v1337 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1)];
          const v1338 = v1313[stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 2)];
          const v1339 = [v1334, v1337, v1338];
          const v1340 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./index.rsh:264:61:application', stdlib.UInt_max, 1), v1339);
          ;
          let v1341;
          const v1342 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
          const v1343 = stdlib.fromSome(v1342, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1344 = stdlib.ge(v1343, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1344) {
            v1341 = stdlib.checkedBigNumberify('./index.rsh:197:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1345 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1347 = v1345[v1343];
            v1341 = v1347;
            }
          const v1348 = stdlib.sub(v859, v1341);
          let v1350;
          if (v1248) {
            v1350 = stdlib.checkedBigNumberify('./index.rsh:158:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1354 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1356 = v1354[v1247];
            v1350 = v1356;
            }
          const v1357 = stdlib.lt(v1350, stdlib.checkedBigNumberify('./index.rsh:166:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1357, {
            at: './index.rsh:166:12:application',
            fs: ['at ./index.rsh:271:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:164:47:function exp)', 'at ./index.rsh:254:22:application call to [unknown function] (defined at: ./index.rsh:254:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1358 = stdlib.div(v1350, stdlib.checkedBigNumberify('./index.rsh:167:27:decimal', stdlib.UInt_max, 100));
          const v1359 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:167:23:decimal', stdlib.UInt_max, 1), v1358);
          const v1360 = stdlib.mul(v925, v1359);
          const v1361 = stdlib.add(v927, v1360);
          const v1362 = stdlib.add(v924, v1322);
          const v1363 = stdlib.add(v922, v1348);
          const cv922 = v1363;
          const cv923 = true;
          const cv924 = v1362;
          const cv925 = v1323;
          const cv927 = v1361;
          const cv928 = v1065;
          const cv929 = v1067;
          const cv935 = v1340;
          const cv936 = v1328;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_145': {
          const v1381 = v1066[1];
          undefined /* setApiDetails */;
          let v1419;
          const v1420 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1065), null);
          const v1421 = stdlib.fromSome(v1420, stdlib.checkedBigNumberify('./index.rsh:181:74:decimal', stdlib.UInt_max, 0));
          const v1422 = stdlib.lt(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1422, {
            at: './index.rsh:185:12:application',
            fs: ['at ./index.rsh:304:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:183:41:function exp)', 'at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:222:23:application call to [unknown function] (defined at: ./index.rsh:222:23:function exp)', 'at ./index.rsh:246:18:application call to [unknown function] (defined at: ./index.rsh:246:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1423 = stdlib.ge(v1421, stdlib.checkedBigNumberify('./index.rsh:175:35:decimal', stdlib.UInt_max, 5));
          if (v1423) {
            v1419 = stdlib.checkedBigNumberify('./index.rsh:188:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1424 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1426 = v1424[v1421];
            v1419 = v1426;
            }
          ;
          const v1444 = stdlib.add(v965, v1419);
          const v1448 = v962[stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v963, v1448];
          const v1450 = stdlib.Array_set(v935, stdlib.checkedBigNumberify('./index.rsh:222:23:dot', stdlib.UInt_max, 1), v1449);
          ;
          const v1525 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1525', ctc0, v1525);
          const v1531 = stdlib.add(v1421, stdlib.checkedBigNumberify('./index.rsh:313:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1065, v1531);
          const cv922 = v922;
          const cv923 = true;
          const cv924 = v924;
          const cv925 = v925;
          const cv927 = v927;
          const cv928 = v928;
          const cv929 = v1067;
          const cv935 = v1450;
          const cv936 = v936;
          
          v922 = cv922;
          v923 = cv923;
          v924 = cv924;
          v925 = cv925;
          v927 = cv927;
          v928 = cv928;
          v929 = cv929;
          v935 = cv935;
          v936 = cv936;
          
          continue;
          break;
          }
        }}
    
    }
  const v1542 = v935[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
  const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:48:application', stdlib.UInt_max, 1)];
  const v1545 = v1542[stdlib.checkedBigNumberify('./index.rsh:229:60:application', stdlib.UInt_max, 0)];
  const v1546 = stdlib.sub(v1543, v1545);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v928), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:92:11:application call to [unknown function] (defined at: ./index.rsh:92:32:function exp)', 'at ./index.rsh:332:16:application call to "showOutcome" (defined at: ./index.rsh:91:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546],
    evt_cnt: 0,
    funcNum: 3,
    lct: v929,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:335:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1575, time: v1574, didSend: v691, from: v1573 } = txn3;
      
      ;
      const v1576 = v1574;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v857
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
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1575, time: v1574, didSend: v691, from: v1573 } = txn3;
  ;
  let v1576 = v1574;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v855, v857, v858, v859, v860, v877, v922, v924, v925, v927, v928, v1546],
      evt_cnt: 0,
      funcNum: 5,
      lct: v1576,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:338:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v1588, time: v1587, didSend: v700, from: v1586 } = txn4;
        
        ;
        const v1589 = stdlib.addressEq(v855, v1586);
        ;
        const cv1576 = v1587;
        
        await (async () => {
          const v1576 = cv1576;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v857
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
      tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1588, time: v1587, didSend: v700, from: v1586 } = txn4;
    ;
    const v1589 = stdlib.addressEq(v855, v1586);
    stdlib.assert(v1589, {
      at: './index.rsh:338:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv1576 = v1587;
    
    v1576 = cv1576;
    
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
  appApproval: `BiAfAAEIBzgFBgMgKDAEWEBIUGBkAqCNBhKd0cqrBszemsUNg6P4zw2R5tK+A5O5vtQEaHC6AfkBiAEmBgEAAQEAKAAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAKAAAAAAAAAA8AAAAAAAAAFAAAAAAAAAAZCP//////////IjUAMRhBC3QqZEkiWzUBJFs1AjEZIxJBAAoxACghFK9mQgtJNhoAF0lBAgYiNQQjNQZJIRUMQACMSSEWDEAAdUkhFwxAAGAhFxJENAFJIQYMQAA4SSUMQAAaJRJEKGQpZFA1AzYaARc0AyEEWwkWNQdCCu9IKGQpZFA1AzYaARc0AyEEWwkWNQdCCtchBxJEKGQpZFA1AzYaARc0AyEEWwkWNQdCCrwhFhJEKjX/KTT/UEICGiEVEkQqNf+AAQI0/1BCAgpJIRgMQAB1SSEZDEAAYCEZEkQ0AUkhBgxAADhJJQxAABolEkQoZClkUDUDNhoBFzQDIQRbCBY1B0IKY0goZClkUDUDNhoBFzQDIQRbCBY1B0IKSyEHEkQoZClkUDUDNhoBFzQDIQRbCBY1B0IKMCEYEkQqNf8oNP9QQgGOgbKxquABEkQ0AUkhBgxAAJZJJQxAAEklEkQoZClkUEk1A1coCDQDVzAIUDQDVyAIUDQDV+MIUDQDV1AIUDQDV2gIUDQDV3AIUDQDV3ggUDQDV2AIUDQDV1gIUDUHQgnCSChkKWRQSTUDVygINANXMAhQNANXIAhQNANXiAhQNANXQAhQNANXWAhQNANXYAhQNANXaCBQNANXUAhQNANXSAhQNQdCCXshBxJEKGQpZFBJNQNXKAg0A1cwCFA0A1cgCFA0A1eICFA0A1dACFA0A1dYCFA0A1dgCFA0A1doIFA0A1dQCFA0A1dICFA1B0IJMTYaAhc1BDYaAzYaARdJIQsMQARRSSEGDEAD2EklDEAAeyUSRCU0ARJENARJIhJMNAISEUQoZClkUEk1AyEMWzX/gATiG7OpsDIHNP8PRDQDVwAgNAMhCFs0AyEJWzQDIQpbNAMhBFs0AyENWzQDIQ5bNAMhD1s0/yI0AyEQWzQDIRpbNAMhG1s0A1d4IDIGNANXmCI0AyEcW0IG6kglNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKSkpXACA1/yEIWzX+IQlbNf0hCls1/CEEWzX7IQ1bNfohDls1+SEPWzX4IQxbNfchEFs19iEaWzX1IRtbNfRXeCA181eYIjXyIRxbNfFXwhE18IHTAVs174HbAVs17kk1BTXtgASQT2RJNO1QsDIHNPcMRDTtIlVJIwxAAiBJIRIMQACcIRISRCIxAIgIDlcJCUk16iNbNOoiVU1JNeshBQxENOshBQ9BAAchHTXsQgAKKyQ06wskWBc17DTsNPiICAGACAAAAAAAAAX1sCo1BzEAKDEAiAfEKTTrIwgWUDXqVwAJNOpQZjT/NP40/TT8NPs0+jT5NPg09yM09jT1NPQ08zIGNPJXABE07jTsCBY07xZQNPBXEAFQUDTxQgWqSCIxAIgHdVcACUk16iNbNOoiVU1JNeshBQ9JNepBAAYiNexCAAsnBCQ06wskWBc17DTsIREMRDT1IzTsIREKCQs16TTpiAdDNPJXABE07hY07xZQNPBXEAFQUDXoNPojDUQ06FcREUk15yJbSTXmNPkNRIAIAAAAAAAABSSwKjUHNPU0+go15bEisgE05bIII7IQNP+yB7OxIrIBNPmyEiELshAxALIUNPiyEbMiMQCIBslXCQlJNeIjWzTiIlVNSTXjIQUPQQAGIjXkQgA7gDAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAwAAAAAAAAAEAAAAAAAAAAUkNOMLJFgXNeQ06kEABiI14kIACycEJDTrCyRYFzXiNOIhEQxENP80/jT9NPw0+zT6NPk0+DT3NPw05AkIIzT2NOUINPU0+wg09DT1IzTiIREKCQsIMQAyBjToVwARNOY0+QkWNOdXCAhQNOdXEAFQUDTxNOkINOUJQgQtSCIxAIgF+FcACUk16iNbNOoiVU1JNeshBQxENOshBQ9BAAchHTXsQgAKKyQ06wskWBc17DTsNPiIBeuACAAAAAAAAAR3sCo1BzEAKDEAiAWuKTTrIwgWUDXqVwkJNOpMUGY0/zT+NP00/DT7NPo0+TT4NPcjNPY09TT0NPMyBjTyVwARNO407AgWNO8WUDTwVxABUFA08UIDk0khBQxAAGpIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATMmZJcsDT/MQASRDT/NAMhCFs0AyEJWzQDIQpbNAMhBFs0AyENWzQDIQ5bNAMhD1s0AyEMWzQDIRBbNANXaCA0AyEeWzIGQgQ+SEkhEgxAAGlJIQcMQABhSCEHNAESRDQESSISTDQCEhFEKGQpZFA1A4AEp2XEtLA0A1cAIDQDIQhbNAMhCVs0AyEKWzQDIQRbNAMhDVs0AyEOWzQDIQ9bNAMhDFs0AyEQWzQDV2ggNAMhHlsyBkIDzkhJIwxAAJpIIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpXACA1/yEJWzX+IQpbNf1XaCI1/IAEmouRdLA0/FcAETX7IzT+iARhNP8xABJENP80/jT9NAMhBFs0AyENWzQDIQ5bNAMhD1s0AyEQWzQDIQxbNP0IIyI0AyEIWyI0/zIGNPxXERE0+yJbIwgWNPtXCAhQNPtXEAFQTFAiQgIRSCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yRbNf6BEFs1/YEYWzX8IQhbNfshCVs1+iEKWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULAhE4gDkYERr0k1+ElQSTX3VwARNfY091cRESSvNPZXCAhQNPZXEAFQTFA19SETiANlsSKyASKyEiELshAyCrIUNP6yEbMhE4gDTLEisgEhB7IQgf///////////wGyIiEGsiOACE1FVEFGT01PsiWAIE1ldGFmb21vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiaAYGh0dHBzOi8vbWV0YWxhYnMudGVjaG5vbG9neQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALInMgOyKDIKsimztDw19IAIAAAAAAAAA2w09BZQsDT0STXzNP4WIlsTRDT1VxERNfI09VcAEScFNPJXCAhQNPJXEAFQUEk18VcRETXwNPFXABE08FcACCcFUDTwVxABUFBJNe9XERE17jTvVwARNO5XAAg07lcICFAoUFA17TEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDIHFlA08xZQNO1QKEsBVwB/ZylLAVd/C2dIIzUBMgY1AkIBmDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe80+EEAeTT+VxERSTXuJFs17TTuIls17DTtNOwJNes07zTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlA09xZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUDTuUDTtFlA07BZQNOsWUChLAVcAf2cpSwFXf2xnSCU1ATIGNQJCAPg0/lcREUk17iRbNO4iWwk17bEisgE0/7III7IQNPyyB7OxIrIBI7ISIQuyEDT8shQ08LIRszTvNPAWUDTxFlA08hZQNPMWUDT2FlA09xZQNPkWUDT6FlA0+xZQNPxQNO0WUChLAVcAf2cpSwFXfxFnSCEHNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0STXzNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXfxFnSCEGNQEyBjUCQgAcMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8tJMRhhQAAFSCEUr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECELEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 2,
  stateSize: 235,
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
                "internalType": "uint256",
                "name": "v856",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v857",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v858",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v859",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v860",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v861",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v862",
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
                "name": "v856",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v857",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v858",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v859",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v860",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v861",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v862",
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
                    "name": "_Api_buyDiscount0_145",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_145",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_145",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1066",
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
    "name": "_reach_oe_v1143",
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
    "name": "_reach_oe_v1316",
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
    "name": "_reach_oe_v1525",
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
    "name": "_reach_oe_v876",
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
        "name": "v2790",
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
        "name": "v2794",
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
                    "name": "_Api_buyDiscount0_145",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_145",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_145",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1066",
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
  Bytecode: `0x608060405260405162005637380380620056378339810160408190526200002691620008ea565b60008055436003556200003862000586565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620004d9565b6060820152620001473415600a6200055c565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620006ec565b6200027296959493929190620009ff565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527fc95cd80d98f16363f9a43a62205571d4fe97550472fcf1b451625e10b38964559060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b6200055c565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620004d9565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620004d9565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620004d9565b61020082015262000407620006fa565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526001600081905543905551620004a99183910162000ab0565b60405160208183030381529060405260029080519060200190620004cf92919062000771565b5050505062000bc8565b620004e362000800565b60005b6002811015620005395784816002811062000505576200050562000999565b60200201518282600281106200051f576200051f62000999565b602002015280620005308162000b61565b915050620004e6565b508181846002811062000550576200055062000999565b60200201529392505050565b81620005825760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102808101909152600061022082018181526102408301829052610260830191909152815260208101620005bd62000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620005ec62000800565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200065a6200084d565b815260408051606081018252600080825260208281018290529282015291019081526020016200068962000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b862000800565b81526040805160608101825260008082526020828101829052928201529101908152602001620006e762000800565b905290565b61108780620045b083390190565b60405180610160016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620006e762000800565b8280546200077f9062000b8b565b90600052602060002090601f016020900481019282620007a35760008555620007ee565b82601f10620007be57805160ff1916838001178555620007ee565b82800160010185558215620007ee579182015b82811115620007ee578251825591602001919060010190620007d1565b50620007fc9291506200086b565b5090565b60405180604001604052806002905b62000836604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200080f5790505090565b60405180602001604052806001906020820280368337509192915050565b5b80821115620007fc57600081556001016200086c565b604080519081016001600160401b0381118282101715620008b357634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620008b357634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620008ff57600080fd5b6200090962000882565b8351815260e0601f19830112156200092057600080fd5b6200092a620008b9565b6020850151815260408501519092506001600160a01b03811681146200094f57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b81811015620009d757602081850181015186830182015201620009b9565b81811115620009ea576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000a1460c0830189620009af565b828103602084015262000a288189620009af565b9050828103604084015262000a3e8188620009af565b9050828103606084015262000a548187620009af565b6080840195909552505060a00152949350505050565b8060005b600281101562000aaa57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000a6e565b50505050565b81516001600160a01b03168152610200810160208301516020830152604083015162000ae760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000b42828501826001600160a01b03169052565b50506101408084015162000b598285018262000a6a565b505092915050565b600060001982141562000b8457634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000ba057607f821691505b6020821081141562000bc257634e487b7160e01b600052602260045260246000fd5b50919050565b6139d88062000bd86000396000f3fe6080604052600436106100ea5760003560e01c806373b4522c11610084578063a556059611610056578063a55605961461020f578063ab53f2c61461022f578063bf2c5b2414610252578063cadc2e7a1461026557005b806373b4522c146101b25780637a3678dd146101c557806383230757146101e75780638e314769146101fc57005b806330a94db4116100bd57806330a94db4146101555780633bc5b7bf146101755780636cd6de3a146101a25780636cdcb9df146101aa57005b806236c367146100f35780631e93b0f1146101065780632b10758a1461012a5780632c10a1591461014257005b366100f157005b005b6100f1610101366004612f1c565b610285565b34801561011257600080fd5b506003545b6040519081526020015b60405180910390f35b6101326102be565b6040519015158152602001610121565b6100f1610150366004612f34565b61032a565b34801561016157600080fd5b50610117610170366004612f46565b61035f565b34801561018157600080fd5b50610195610190366004612f77565b6105b6565b6040516101219190612faa565b6101326105e2565b610132610652565b6100f16101c0366004612f34565b6106c2565b3480156101d157600080fd5b506101da6106f7565b6040516101219190612fe1565b3480156101f357600080fd5b50600154610117565b6100f161020a366004612f34565b610a83565b34801561021b57600080fd5b5061011761022a366004612f46565b610ab8565b34801561023b57600080fd5b50610244610d03565b6040516101219291906130b0565b6100f1610260366004612f34565b610da0565b34801561027157600080fd5b50610195610280366004612f77565b610dd5565b60408051606081018252600080825260208201819052918101919091526102ba6102b4368490038401846131e9565b82610dfb565b5050565b604080516060810182526000808252602082018190529181018290526102e26129ac565b6040805160808101825260008082526020808301829052828401829052606083019190915282518082019093528183528301919091526103228284610dfb565b505051919050565b60408051606081018252600080825260208201819052918101919091526102ba6103593684900384018461328a565b82611a06565b60006001600054141561041c5760006002805461037b906132c2565b80601f01602080910402602001604051908101604052809291908181526020018280546103a7906132c2565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b505050505080602001905181019061040c91906133c2565b905061041a60006009611cd6565b505b600360005414156104e057600060028054610436906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610462906132c2565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b50505050508060200190518101906104c7919061346d565b90508060800151836104d9919061353b565b9392505050565b600660005414156104fa57600060028054610436906132c2565b600760005414156105a557600060028054610514906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610540906132c2565b801561058d5780601f106105625761010080835404028352916020019161058d565b820191906000526020600020905b81548152906001019060200180831161057057829003601f168201915b50505050508060200190518101906104c79190613552565b6105b160006009611cd6565b919050565b60408051606081018252600080825260208201819052918101919091526105dc82611cfc565b92915050565b604080516060810182526000808252602082018190529181018290526106066129ac565b604080516080810182526000602080830182905282840182905260608301919091526002825282518082019093528183528301919091526106478284610dfb565b505060400151919050565b604080516060810182526000808252602082018190529181018290526106766129ac565b604080516080810182526000602080830182905282840182905260608301919091526001825282518082019093528183528301919091526106b78284610dfb565b505060200151919050565b60408051606081018252600080825260208201819052918101919091526102ba6106f13684900384018461328a565b82611dce565b6106ff6129f1565b600160005414156107ba57600060028054610719906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610745906132c2565b80156107925780601f1061076757610100808354040283529160200191610792565b820191906000526020600020905b81548152906001019060200180831161077557829003601f168201915b50505050508060200190518101906107aa91906133c2565b90506107b860006007611cd6565b505b6003600054141561090d576000600280546107d4906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610800906132c2565b801561084d5780601f106108225761010080835404028352916020019161084d565b820191906000526020600020905b81548152906001019060200180831161083057829003601f168201915b5050505050806020019051810190610865919061346d565b905061086f612a5f565b604080830151825152606080840151835160209081019190915284015183516001600160a01b0391821693019290925261016084015183519091015260a08084015183519083166080909101526101008085015184519092019190915261012080850151845160c0908101919091526101408601518551941660e0948501529285015184519092019190915292015181519092019190915251919050565b60066000541415610927576000600280546107d4906132c2565b60076000541415610a7457600060028054610941906132c2565b80601f016020809104026020016040519081016040528092919081815260200182805461096d906132c2565b80156109ba5780601f1061098f576101008083540402835291602001916109ba565b820191906000526020600020905b81548152906001019060200180831161099d57829003601f168201915b50505050508060200190518101906109d29190613552565b90506109dc612a5f565b604080830151825152606080840151835160209081019190915284015183516001600160a01b0391821693019290925261024084015183519091015260e0808401518351908316608090910152610140840151835160a00152610160840151835160c0015261018084015183519216910152610120808301518251610100908101919091529092015181519092019190915251919050565b610a8060006007611cd6565b90565b60408051606081018252600080825260208201819052918101919091526102ba610ab23684900384018461328a565b82611fa3565b600060016000541415610b7557600060028054610ad4906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610b00906132c2565b8015610b4d5780601f10610b2257610100808354040283529160200191610b4d565b820191906000526020600020905b815481529060010190602001808311610b3057829003601f168201915b5050505050806020019051810190610b6591906133c2565b9050610b7360006008611cd6565b505b60036000541415610c3257600060028054610b8f906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbb906132c2565b8015610c085780601f10610bdd57610100808354040283529160200191610c08565b820191906000526020600020905b815481529060010190602001808311610beb57829003601f168201915b5050505050806020019051810190610c20919061346d565b90508060800151836104d99190613668565b60066000541415610c4c57600060028054610b8f906132c2565b60076000541415610cf757600060028054610c66906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610c92906132c2565b8015610cdf5780601f10610cb457610100808354040283529160200191610cdf565b820191906000526020600020905b815481529060010190602001808311610cc257829003601f168201915b5050505050806020019051810190610c209190613552565b6105b160006008611cd6565b600060606000546002808054610d18906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610d44906132c2565b8015610d915780601f10610d6657610100808354040283529160200191610d91565b820191906000526020600020905b815481529060010190602001808311610d7457829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102ba610dcf3684900384018461328a565b826120d7565b60408051606081018252600080825260208201819052918101919091526105dc826122f7565b610e0b6007600054146024611cd6565b8151610e26901580610e1f57508251600154145b6025611cd6565b600080805560028054610e38906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610e64906132c2565b8015610eb15780601f10610e8657610100808354040283529160200191610eb1565b820191906000526020600020905b815481529060010190602001808311610e9457829003601f168201915b5050505050806020019051810190610ec99190613552565b9050610ed3612a72565b610ee582610100015142106026611cd6565b7f65ba3c52e9aacb57f14951ed6b2e6d6482045474161df5f26ea357744bd0e7cd84604051610f149190613680565b60405180910390a16000602085015151516002811115610f3657610f36612f94565b14156111cf576001610f4733611cfc565b516001811115610f5957610f59612f94565b14610f65576000610f73565b610f6e33611cfc565b604001515b60208201819052610f88906005116018611cd6565b6005816020015110610f9d5760f98152610fed565b60408181018051600a9052805160146020918201528151602893019290925280516050606090910152805160a0608090910152519082015160058110610fe557610fe56136d4565b602002015181525b610ff934156019611cd6565b805161022083015161100b9190613668565b606082018051919091526102008301518151602001526101e0830151604090810151915191151591015260e082015181516110539161104c91339190612384565b601a611cd6565b604051600081527ff4e36ad61e5015e3ad877512b6ac9a9d5e3b4c0ff354a1c08913d4aebd93c9569060200160405180910390a16000808452338152600460209081526040909120805460ff19166001908117909155908201516110b79190613668565b336000908152600460205260409020600101556110d2612bb6565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b015189519089169101526101008a01518689018051919091528051600197018790526101208b01518151909601959095526101408a015185518501526101608a0151855190930192909252610180890151845196169501949094529051439301929092526101a0850151918401516111a692919061239a565b60208201805160e001919091526101c0840151905161010001526111c98161240e565b50611a00565b60016020850151515160028111156111e9576111e9612f94565b141561175b5760016111fa33611cfc565b51600181111561120c5761120c612f94565b14611218576000611226565b61122133611cfc565b604001515b60a08201819052600511801560c083015261124757600060808201526112a5565b60e08101805160009052805160056020909101528051600a6040909101528051600f60609091015280516014608091909101528051601960a0918201529051908201516006811061129a5761129a6136d4565b602002015160808201525b6112b76064826080015110601b611cd6565b606481608001516112c891906136ea565b6112d390600161353b565b8261014001516112e3919061370c565b61010082018190526112f8903414601c611cd6565b61022082015161012082018051919091526102008301518151602001526101e083015160409081015182519015159101526101a0830151905161133e919060019061239a565b81610140018190525061136161135a338460e001516000612384565b601d611cd6565b61137360018360a0015111601e611cd6565b60c0820151610140820151602001515161138f9110601f611cd6565b604051600081527f0db55126c0027c176190a9cd1615cb3255b107c5660d604ab36aedb6c27fd5219060200160405180910390a16000602084015260a08201516101408301516113df91906136ea565b610160820181905282516040516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561141e573d6000803e3d6000fd5b5060c08201516101408201516020015151611439919061353b565b610180820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c0830151611481919033906126c8565b600161148c336122f7565b51600181111561149e5761149e612f94565b146114aa5760006114b8565b6114b3336122f7565b604001515b6101c082018190526005116114d45760006101a0820152611534565b6101e08101805160009052805160016020909101528051600260409091015280516003606090910152805160046080909101528051600560a090910152516101c082015160068110611528576115286136d4565b60200201516101a08201525b8060c001511561154b5760006102008201526115aa565b6102208101805160009052805160056020909101528051600a6040909101528051600f606090910152805160146080909101528051601960a0918201529051908201516006811061159e5761159e6136d4565b60200201516102008201525b6115bd6064826102000151106020611cd6565b6115c5612bb6565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e080860151845193169201919091526101a08301519051611646919061353b565b8361010001516116569190613668565b60208083018051929092529051600191015261016082015161012084015161167e9190613668565b602082015160400152608083015161014084015161169c9190613668565b6020820151606001526102008201516116b7906064906136ea565b6116c290600161353b565b8361014001516116d2919061370c565b8361016001516116e29190613668565b6020820180516080019190915280513360a090910152514360c090910152610140820151610180830151611719919060019061239a565b602082015160e001526101608201516101008301516101c085015161173e9190613668565b611748919061353b565b602082015161010001526111c98161240e565b600260208501515151600281111561177557611775612f94565b1415611a00576001611786336122f7565b51600181111561179857611798612f94565b146117a45760006117b2565b6117ad336122f7565b604001515b61026082018190526117c8906005116021611cd6565b6005816102600151106117e25760f9610240820152611838565b61028081018051600a9052805160146020909101528051602860409091015280516050606090910152805160a0608090910152516102608201516005811061182c5761182c6136d4565b60200201516102408201525b61184434156022611cd6565b80610240015182610220015161185a9190613668565b6102a082018051919091526102008301518151602001526101e0830151604090810151915191151591015260e08201516102408201516118a7916118a091339190612384565b6023611cd6565b604051600081527f6de0a0173547bd4d1f5e937821b1d117fbc69c3f4f388b7c578515cab0ff05429060200160405180910390a16000604084810182905233825260056020529020805460ff1916600190811790915561026082015161190d9190613668565b33600090815260056020526040902060010155611928612bb6565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b015189519089169101526101008a01518689018051919091528051600197018790526101208b01518151909601959095526101408a01518551909401939093526101608901518451909201919091526101808801518351951694019390935251439201919091526101a08401516102a08401516111a6929061239a565b50505050565b611a16600160005414600f611cd6565b8151611a31901580611a2a57508251600154145b6010611cd6565b600080805560028054611a43906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054611a6f906132c2565b8015611abc5780601f10611a9157610100808354040283529160200191611abc565b820191906000526020600020905b815481529060010190602001808311611a9f57829003601f168201915b5050505050806020019051810190611ad491906133c2565b9050611afd60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611b483415600c611cd6565b6101408201515151611b5c90600190613668565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611b9f90611b989033906001612384565b600d611cd6565b8151611bb7906001600160a01b03163314600e611cd6565b611bbf612bb6565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e0808701518551909201919091526101208601518451931692019190915251610100840151611c4e9190613668565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611caf929061239a565b60208201805160e0019190915251600061010090910152611ccf8161240e565b5050505050565b816102ba5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611d4857611d48612f94565b1415611dbf576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611d8957611d89612f94565b6001811115611d9a57611d9a612f94565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b611dde6003600054146012611cd6565b8151611df9901580611df257508251600154145b6013611cd6565b600080805560028054611e0b906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054611e37906132c2565b8015611e845780601f10611e5957610100808354040283529160200191611e84565b820191906000526020600020905b815481529060010190602001808311611e6757829003601f168201915b5050505050806020019051810190611e9c919061346d565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1611eea34156011611cd6565b611ef2612c0c565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e0808501518451909101526101008085015184519091015261012080850151845190910152610140808501518451931692019190915261016080840151835190910152810151439052611a00816126e1565b611fb36006600054146016611cd6565b8151611fce901580611fc757508251600154145b6017611cd6565b600080805560028054611fe0906132c2565b80601f016020809104026020016040519081016040528092919081815260200182805461200c906132c2565b80156120595780601f1061202e57610100808354040283529160200191612059565b820191906000526020600020905b81548152906001019060200180831161203c57829003601f168201915b5050505050806020019051810190612071919061346d565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a16120bf34156014611cd6565b8051611eea906001600160a01b031633146015611cd6565b6120e76007600054146028611cd6565b81516121029015806120fb57508251600154145b6029611cd6565b600080805560028054612114906132c2565b80601f0160208091040260200160405190810160405280929190818152602001828054612140906132c2565b801561218d5780601f106121625761010080835404028352916020019161218d565b820191906000526020600020905b81548152906001019060200180831161217057829003601f168201915b50505050508060200190518101906121a59190613552565b90506121ba816101000151421015602a611cd6565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a161220534156027611cd6565b61220d612bb6565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b0151888b01805191909152805160009901989098526101208b01518851909701969096526101408a0151875190950194909452610160890151865190930192909252610180880151855196169501949094528251439401939093526101a08501518251909301929092526101c0840151905190910152611a008161240e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561234357612343612f94565b1415611dbf576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611d8957611d89612f94565b6000612392838530856127c6565b949350505050565b6123a2612c3a565b60005b60028110156123ee578481600281106123c0576123c06136d4565b60200201518282600281106123d7576123d76136d4565b6020020152806123e68161372b565b9150506123a5565b5081818460028110612402576124026136d4565b60200201529392505050565b6040805180820190915260008082526020820152816020015160200151156125885760208281015160e00151810151805191015161244c919061353b565b8152612456612c85565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151871681890152858a01805151610100808b019190915281518701516101208b01528151909501516101408a015280519093015161016089015282519091015190951661018087015280518501516101a08701528051909101516101c086015280518401518301516101e08601528051840151830151830151610200860152519092015181015151610220840152835161024084015260076000554360015590516125649183910161378a565b60405160208183030381529060405260029080519060200190611a00929190612d65565b60208281015160e0015181015180519101516125a4919061353b565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156125f2573d6000803e3d6000fd5b5061260f826000015160200151836020015160a0015160016126c8565b612617612de9565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160e090810151861660a080890191909152858a0180515160c08a0152805186015192890192909252815190930151610100880152805190910151610120870152510151909216610140840152838101516101608401526003600055436001559051612564918391016138b3565b6126d38383836128a0565b6126dc57600080fd5b505050565b6126e9612de9565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e090810151908501528451610100908101519085015284516101209081015190850152845161014090810151909316928401929092528351610160908101519084015260066000554360015590516127a2918391016138b3565b604051602081830303815290604052600290805190602001906126dc929190612d65565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161282d91613969565b60006040518083038185875af1925050503d806000811461286a576040519150601f19603f3d011682016040523d82523d6000602084013e61286f565b606091505b509150915061288082826001612971565b50808060200190518101906128959190613985565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916128ff91613969565b60006040518083038185875af1925050503d806000811461293c576040519150601f19603f3d011682016040523d82523d6000602084013e612941565b606091505b509150915061295282826002612971565b50808060200190518101906129679190613985565b9695505050505050565b606083156129805750816104d9565b8251156129905782518084602001fd5b60405163100960cb60e01b815260048101839052602401611cf3565b6040518060400160405280600081526020016129ec6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b604051806101400160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180602001604052806129ec6129f1565b604051806102c001604052806000815260200160008152602001612a94612e6e565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001600015158152602001612ad8612e8c565b815260200160008152602001612b0a604051806060016040528060008152602001600081526020016000151581525090565b8152602001612b17612c3a565b815260200160008152602001612b49604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001612b64612e8c565b815260200160008152602001612b78612e8c565b81526020016000815260200160008152602001612b93612e6e565b815260408051606081018252600080825260208281018290529282015291015290565b60408051610140810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082018390526101008201839052610120820192909252908152602081016129ec612eaa565b6040518060400160405280612c1f612de9565b81526020016129ec6040518060200160405280600081525090565b60405180604001604052806002905b612c6f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612c495790505090565b60405180610260016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001612d18612c3a565b815260200160008152602001612d4a604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b828054612d71906132c2565b90600052602060002090601f016020900481019282612d935760008555612dd9565b82601f10612dac57805160ff1916838001178555612dd9565b82800160010185558215612dd9579182015b82811115612dd9578251825591602001919060010190612dbe565b50612de5929150612f07565b5090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001612efa612c3a565b8152602001600081525090565b5b80821115612de55760008155600101612f08565b600060a08284031215612f2e57600080fd5b50919050565b600060408284031215612f2e57600080fd5b600060208284031215612f5857600080fd5b5035919050565b6001600160a01b0381168114612f7457600080fd5b50565b600060208284031215612f8957600080fd5b81356104d981612f5f565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612fc157612fc1612f94565b808352506020830151151560208301526040830151604083015292915050565b6000610140820190508251825260208301516020830152604083015161301260408401826001600160a01b03169052565b5060608301516060830152608083015161303760808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015161306660e08401826001600160a01b03169052565b50610100838101519083015261012092830151929091019190915290565b60005b8381101561309f578181015183820152602001613087565b83811115611a005750506000910152565b82815260406020820152600082518060408401526130d5816060850160208701613084565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613123576131236130ea565b60405290565b6040516020810167ffffffffffffffff81118282101715613123576131236130ea565b6040516080810167ffffffffffffffff81118282101715613123576131236130ea565b604051610160810167ffffffffffffffff81118282101715613123576131236130ea565b604051610180810167ffffffffffffffff81118282101715613123576131236130ea565b604051610260810167ffffffffffffffff81118282101715613123576131236130ea565b8015158114612f7457600080fd5b600081830360a08112156131fc57600080fd5b613204613100565b833581526080601f198301121561321a57600080fd5b613222613129565b915061322c61314c565b60208501356003811061323e57600080fd5b8152604085013561324e816131db565b60208201526060850135613261816131db565b60408201526080850135613274816131db565b6060820152825260208101919091529392505050565b60006040828403121561329c57600080fd5b6132a4613100565b8235815260208301356132b6816131db565b60208201529392505050565b600181811c908216806132d657607f821691505b60208210811415612f2e57634e487b7160e01b600052602260045260246000fd5b80516105b181612f5f565b60006060828403121561331457600080fd5b6040516060810181811067ffffffffffffffff82111715613337576133376130ea565b80604052508091508251815260208301516020820152604083015161335b816131db565b6040919091015292915050565b600082601f83011261337957600080fd5b613381613100565b8060c084018581111561339357600080fd5b845b818110156133b7576133a78782613302565b8452602090930192606001613395565b509095945050505050565b600061020082840312156133d557600080fd5b6133dd61316f565b6133e6836132f7565b8152602083015160208201526133fe604084016132f7565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061344f8185016132f7565b9082015261014061346285858301613368565b908201529392505050565b6000610180828403121561348057600080fd5b613488613193565b613491836132f7565b815261349f602084016132f7565b60208201526040830151604082015260608301516060820152608083015160808201526134ce60a084016132f7565b60a082015260c083015160c082015260e083015160e082015261010080840151818301525061012080840151818301525061014061350d8185016132f7565b90820152610160928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561354d5761354d613525565b500390565b6000610340828403121561356557600080fd5b61356d6131b7565b613576836132f7565b8152613584602084016132f7565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526135c760e084016132f7565b60e082015261010083810151908201526101208084015190820152610140808401519082015261016080840151908201526101806136068185016132f7565b908201526101a061361985858301613368565b908201526102608301516101c0820152613637846102808501613302565b6101e08201526102e08301516102008201526103008301516102208201526103209092015161024083015250919050565b6000821982111561367b5761367b613525565b500190565b81518152602082015151805160a083019190600381106136a2576136a2612f94565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401525092915050565b634e487b7160e01b600052603260045260246000fd5b60008261370757634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561372657613726613525565b500290565b600060001982141561373f5761373f613525565b5060010190565b8060005b6002811015611a005761377484835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161374a565b81516001600160a01b03168152610340810160208301516137b660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015161380360e08401826001600160a01b03169052565b506101008381015190830152610120808401519083015261014080840151908301526101608084015190830152610180808401516001600160a01b0316908301526101a08084015161385782850182613746565b50506101c08301516102608301526101e0830151805161028084015260208101516102a08401526040015115156102c08301526102008301516102e0830152610220830151610300830152610240909201516103209091015290565b81516001600160a01b03168152610180810160208301516138df60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015161391860a08401826001600160a01b03169052565b5060c0838101519083015260e0808401519083015261010080840151908301526101208084015190830152610140808401516001600160a01b03811682850152505061016092830151919092015290565b6000825161397b818460208701613084565b9190910192915050565b60006020828403121561399757600080fd5b81516104d9816131db56fea2646970667358221220623b196c888e43b6b00db573d3a5d093f4aec011be802738c858cbc128a80aa564736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220e67b5ccaf21751a0b5cdfd6579a01f116dd8e81e083c55bc1d8093229225341864736f6c634300080c0033`,
  BytecodeLen: 22071,
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
    at: './index.rsh:206:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:331:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:340:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:338:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:222:23:after expr stmt semicolon',
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

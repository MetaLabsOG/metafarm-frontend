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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc8 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['nftPrize', ctc2], ['tokenOwnedByUsers', ctc1], ['token', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1], ['discountPrices', ctc6], ['discountPercents', ctc7], ['timeReductionPrices', ctc6], ['timeReductionSecs', ctc7]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc1
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc10;
  
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1138, v1139, v1140, v1141, v1142, v1143, v1144, v1145, v1147, v1160, v1188, v1189, v1190, v1192] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async () => {
                
                const v2146 = {
                  currentPrice: v1212,
                  currentTotal: v1214,
                  currentWinner: v1215,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1209,
                  nftPrize: v1140,
                  paidToFunder: v1211,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v2141
                  };
                
                return v2146;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async () => {
                
                const v2146 = {
                  currentPrice: v1212,
                  currentTotal: v1214,
                  currentWinner: v1215,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1209,
                  nftPrize: v1140,
                  paidToFunder: v1211,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v2141
                  };
                
                return v2146;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = svs;
              return (await ((async () => {
                
                const v1258 = {
                  currentPrice: v1212,
                  currentTotal: v1214,
                  currentWinner: v1215,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1209,
                  nftPrize: v1140,
                  paidToFunder: v1211,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v1253
                  };
                
                return v1258;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1138, v1139, v1140, v1141, v1142, v1143, v1144, v1145, v1147, v1160, v1188, v1189, v1190, v1192] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async (_v2147 ) => {
                  const v2147 = stdlib.protect(ctc1, _v2147, null);
                
                const v2148 = stdlib.add(v2147, v1143);
                
                return v2148;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async (_v2147 ) => {
                  const v2147 = stdlib.protect(ctc1, _v2147, null);
                
                const v2148 = stdlib.add(v2147, v1143);
                
                return v2148;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = svs;
              return (await ((async (_v1259 ) => {
                  const v1259 = stdlib.protect(ctc1, _v1259, null);
                
                const v1260 = stdlib.add(v1259, v1143);
                
                return v1260;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1138, v1139, v1140, v1141, v1142, v1143, v1144, v1145, v1147, v1160, v1188, v1189, v1190, v1192] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async (_v2149 ) => {
                  const v2149 = stdlib.protect(ctc1, _v2149, null);
                
                const v2150 = stdlib.sub(v2149, v1143);
                
                return v2150;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141] = svs;
              return (await ((async (_v2149 ) => {
                  const v2149 = stdlib.protect(ctc1, _v2149, null);
                
                const v2150 = stdlib.sub(v2149, v1143);
                
                return v2150;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = svs;
              return (await ((async (_v1261 ) => {
                  const v1261 = stdlib.protect(ctc1, _v1261, null);
                
                const v1262 = stdlib.sub(v1261, v1143);
                
                return v1262;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc5, ctc6, ctc7, ctc7],
      3: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1]
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Api_buyDiscount0_246: ctc10,
    Api_buyTicket0_246: ctc10,
    Api_buyTimeReduction0_246: ctc10,
    Api_getParticipantStats0_246: ctc10
    });
  const ctc12 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1279 = ctc.selfAddress();
  const v1281 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:312:14:application call to [unknown function] (defined at: ./index.rsh:312:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyDiscount0_246" (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1282 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1279), null);
  const v1283 = stdlib.fromSome(v1282, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
  const v1284 = stdlib.lt(v1283, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1284, {
    at: './index.rsh:312:23:application',
    fs: ['at ./index.rsh:312:14:application call to [unknown function] (defined at: ./index.rsh:312:14:function exp)', 'at ./index.rsh:312:14:application call to [unknown function] (defined at: ./index.rsh:312:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyDiscount0_246" (defined at: ./index.rsh:310:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1287 = ['Api_buyDiscount0_246', v1281];
  
  let v1308;
  const v1312 = stdlib.ge(v1283, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1312) {
    v1308 = stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1315 = v1189[v1283];
    v1308 = v1315;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253, v1287],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:313:18:decimal', stdlib.UInt_max, 0), [[v1308, v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
      
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1381;
          const v1382 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1372), null);
          const v1383 = stdlib.fromSome(v1382, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1384 = stdlib.lt(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1385 = stdlib.ge(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1385) {
            v1381 = stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1388 = v1189[v1383];
            v1381 = v1388;
            }
          ;
          const v1444 = stdlib.add(v1252, v1381);
          const v1448 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v1250, v1448];
          const v1450 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1449);
          sim_r.txns.push({
            amt: v1381,
            kind: 'to',
            tok: v1160
            });
          const v1457 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1372), null);
          const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1459 = {
            addr: v1372,
            discountLevel: v1383,
            timeReductionLevel: v1458
            };
          const v1461 = await txn1.getOutput('Api_buyDiscount', 'v1459', ctc12, v1459);
          
          const v1466 = stdlib.add(v1383, stdlib.checkedBigNumberify('./index.rsh:322:47:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1372, v1466);
          const v3593 = v1209;
          const v3595 = v1211;
          const v3596 = v1212;
          const v3597 = v1214;
          const v3598 = v1215;
          const v3600 = v1450;
          const v3601 = v1223;
          const v3602 = v1450[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3603 = v3602[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3604 = v3602[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
          const v3605 = stdlib.sub(v3603, v3604);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
  switch (v1373[0]) {
    case 'Api_buyDiscount0_246': {
      const v1376 = v1373[1];
      undefined /* setApiDetails */;
      let v1381;
      const v1382 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
      const v1383 = stdlib.fromSome(v1382, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
      const v1384 = stdlib.lt(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1384, {
        at: './index.rsh:164:12:application',
        fs: ['at ./index.rsh:313:38:application call to "getDiscountPrice" (defined at: ./index.rsh:162:36:function exp)', 'at ./index.rsh:313:14:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1385 = stdlib.ge(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1385) {
        v1381 = stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1388 = v1189[v1383];
        v1381 = v1388;
        }
      ;
      const v1444 = stdlib.add(v1252, v1381);
      const v1448 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
      const v1449 = [v1444, v1250, v1448];
      const v1450 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1449);
      ;
      const v1457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
      const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
      const v1459 = {
        addr: v1372,
        discountLevel: v1383,
        timeReductionLevel: v1458
        };
      const v1461 = await txn1.getOutput('Api_buyDiscount', 'v1459', ctc12, v1459);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1376, v1461), {
          at: './index.rsh:311:11:application',
          fs: ['at ./index.rsh:311:11:application call to [unknown function] (defined at: ./index.rsh:311:11:function exp)', 'at ./index.rsh:318:21:application call to "callback" (defined at: ./index.rsh:314:22:function exp)', 'at ./index.rsh:314:22:application call to [unknown function] (defined at: ./index.rsh:314:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v1466 = stdlib.add(v1383, stdlib.checkedBigNumberify('./index.rsh:322:47:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1372, v1466);
      const v3593 = v1209;
      const v3595 = v1211;
      const v3596 = v1212;
      const v3597 = v1214;
      const v3598 = v1215;
      const v3600 = v1450;
      const v3601 = v1223;
      const v3602 = v1450[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3603 = v3602[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3604 = v3602[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
      const v3605 = stdlib.sub(v3603, v3604);
      return;
      
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1565 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1754 = v1373[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1943 = v1373[1];
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Api_buyDiscount0_246: ctc10,
    Api_buyTicket0_246: ctc10,
    Api_buyTimeReduction0_246: ctc10,
    Api_getParticipantStats0_246: ctc10
    });
  const ctc12 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1267 = ctc.selfAddress();
  const v1269 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1271 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:281:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1271, {
    at: './index.rsh:281:19:application',
    fs: ['at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1274 = stdlib.gt(v1252, v1145);
  stdlib.assert(v1274, {
    at: './index.rsh:282:19:application',
    fs: ['at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:280:14:application call to [unknown function] (defined at: ./index.rsh:280:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1277 = ['Api_buyTicket0_246', v1269];
  
  let v1326;
  const v1327 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1267), null);
  const v1328 = stdlib.fromSome(v1327, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
  const v1329 = stdlib.ge(v1328, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1329) {
    v1326 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1332 = v1190[v1328];
    v1326 = v1332;
    }
  const v1333 = stdlib.lt(v1326, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1333, {
    at: './index.rsh:184:12:application',
    fs: ['at ./index.rsh:284:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:284:14:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1334 = stdlib.div(v1326, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
  const v1335 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1334);
  const v1336 = stdlib.mul(v1212, v1335);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253, v1277],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1336, [[stdlib.checkedBigNumberify('./index.rsh:284:54:decimal', stdlib.UInt_max, 0), v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
      
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1585;
          const v1586 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1372), null);
          const v1587 = stdlib.fromSome(v1586, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1588 = stdlib.ge(v1587, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1588) {
            v1585 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1591 = v1190[v1587];
            v1585 = v1591;
            }
          const v1592 = stdlib.lt(v1585, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1593 = stdlib.div(v1585, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1594 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1593);
          const v1595 = stdlib.mul(v1212, v1594);
          const v1630 = stdlib.add(v1223, v1595);
          sim_r.txns.push({
            amt: v1595,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1637 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1638 = [v1252, v1250, v1637];
          const v1639 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1638);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:286:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1663 = v1639[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          ;
          const v1668 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1372), null);
          const v1669 = stdlib.fromSome(v1668, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1670 = {
            addr: v1372,
            discountLevel: v1587,
            timeReductionLevel: v1669
            };
          const v1672 = await txn1.getOutput('Api_buyTicket', 'v1670', ctc12, v1670);
          
          const v1677 = stdlib.div(v1212, v1144);
          const v1678 = stdlib.add(v1212, v1143);
          const v1683 = stdlib.sub(v1630, v1677);
          sim_r.txns.push({
            amt: v1677,
            kind: 'from',
            to: v1138,
            tok: undefined /* Nothing */
            });
          const v1689 = stdlib.sub(v1664, v1145);
          const v1692 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1)];
          const v1693 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 2)];
          const v1694 = [v1689, v1692, v1693];
          const v1695 = stdlib.Array_set(v1639, stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1), v1694);
          sim_r.txns.push({
            amt: v1145,
            kind: 'from',
            to: v1372,
            tok: v1160
            });
          let v1696;
          const v1699 = stdlib.ge(v1669, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1699) {
            v1696 = stdlib.checkedBigNumberify('./index.rsh:217:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1702 = v1192[v1669];
            v1696 = v1702;
            }
          const v1703 = stdlib.sub(v1142, v1696);
          let v1705;
          if (v1588) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1587];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1212, v1714);
          const v1716 = stdlib.add(v1214, v1715);
          const v1717 = stdlib.add(v1211, v1677);
          const v1718 = stdlib.add(v1209, v1703);
          const v3728 = v1718;
          const v3730 = v1717;
          const v3731 = v1678;
          const v3732 = v1716;
          const v3733 = v1372;
          const v3735 = v1695;
          const v3736 = v1683;
          const v3737 = v1695[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3738 = v3737[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3739 = v3737[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
          const v3740 = stdlib.sub(v3738, v3739);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
  switch (v1373[0]) {
    case 'Api_buyDiscount0_246': {
      const v1376 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1565 = v1373[1];
      undefined /* setApiDetails */;
      let v1585;
      const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
      const v1587 = stdlib.fromSome(v1586, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
      const v1588 = stdlib.ge(v1587, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1588) {
        v1585 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1591 = v1190[v1587];
        v1585 = v1591;
        }
      const v1592 = stdlib.lt(v1585, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1592, {
        at: './index.rsh:184:12:application',
        fs: ['at ./index.rsh:284:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:284:14:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1593 = stdlib.div(v1585, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
      const v1594 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1593);
      const v1595 = stdlib.mul(v1212, v1594);
      const v1630 = stdlib.add(v1223, v1595);
      ;
      const v1637 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
      const v1638 = [v1252, v1250, v1637];
      const v1639 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1638);
      ;
      const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:286:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1662, {
        at: './index.rsh:286:20:application',
        fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1663 = v1639[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 1)];
      const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 0)];
      const v1665 = stdlib.gt(v1664, v1145);
      stdlib.assert(v1665, {
        at: './index.rsh:287:20:application',
        fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1668 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
      const v1669 = stdlib.fromSome(v1668, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
      const v1670 = {
        addr: v1372,
        discountLevel: v1587,
        timeReductionLevel: v1669
        };
      const v1672 = await txn1.getOutput('Api_buyTicket', 'v1670', ctc12, v1670);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1565, v1672), {
          at: './index.rsh:279:11:application',
          fs: ['at ./index.rsh:279:11:application call to [unknown function] (defined at: ./index.rsh:279:11:function exp)', 'at ./index.rsh:289:21:application call to "callback" (defined at: ./index.rsh:285:22:function exp)', 'at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1677 = stdlib.div(v1212, v1144);
      const v1678 = stdlib.add(v1212, v1143);
      const v1683 = stdlib.sub(v1630, v1677);
      ;
      const v1689 = stdlib.sub(v1664, v1145);
      const v1692 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1)];
      const v1693 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 2)];
      const v1694 = [v1689, v1692, v1693];
      const v1695 = stdlib.Array_set(v1639, stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1), v1694);
      ;
      let v1696;
      const v1699 = stdlib.ge(v1669, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1699) {
        v1696 = stdlib.checkedBigNumberify('./index.rsh:217:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1702 = v1192[v1669];
        v1696 = v1702;
        }
      const v1703 = stdlib.sub(v1142, v1696);
      let v1705;
      if (v1588) {
        v1705 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1711 = v1190[v1587];
        v1705 = v1711;
        }
      const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1712, {
        at: './index.rsh:184:12:application',
        fs: ['at ./index.rsh:303:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
      const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1713);
      const v1715 = stdlib.mul(v1212, v1714);
      const v1716 = stdlib.add(v1214, v1715);
      const v1717 = stdlib.add(v1211, v1677);
      const v1718 = stdlib.add(v1209, v1703);
      const v3728 = v1718;
      const v3730 = v1717;
      const v3731 = v1678;
      const v3732 = v1716;
      const v3733 = v1372;
      const v3735 = v1695;
      const v3736 = v1683;
      const v3737 = v1695[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3738 = v3737[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3739 = v3737[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
      const v3740 = stdlib.sub(v3738, v3739);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1754 = v1373[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1943 = v1373[1];
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Api_buyDiscount0_246: ctc10,
    Api_buyTicket0_246: ctc10,
    Api_buyTimeReduction0_246: ctc10,
    Api_getParticipantStats0_246: ctc10
    });
  const ctc12 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1289 = ctc.selfAddress();
  const v1291 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:335:14:application call to [unknown function] (defined at: ./index.rsh:335:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyTimeReduction0_246" (defined at: ./index.rsh:333:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1292 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1289), null);
  const v1293 = stdlib.fromSome(v1292, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
  const v1294 = stdlib.lt(v1293, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1294, {
    at: './index.rsh:335:23:application',
    fs: ['at ./index.rsh:335:14:application call to [unknown function] (defined at: ./index.rsh:335:14:function exp)', 'at ./index.rsh:335:14:application call to [unknown function] (defined at: ./index.rsh:335:14:function exp)', 'at ./index.rsh:248:23:application call to "runApi_buyTimeReduction0_246" (defined at: ./index.rsh:333:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1297 = ['Api_buyTimeReduction0_246', v1291];
  
  let v1347;
  const v1351 = stdlib.ge(v1293, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1351) {
    v1347 = stdlib.checkedBigNumberify('./index.rsh:208:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1354 = v1189[v1293];
    v1347 = v1354;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253, v1297],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:336:18:decimal', stdlib.UInt_max, 0), [[v1347, v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
      
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1792;
          const v1793 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1372), null);
          const v1794 = stdlib.fromSome(v1793, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1795 = stdlib.lt(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1796 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1796) {
            v1792 = stdlib.checkedBigNumberify('./index.rsh:208:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1799 = v1189[v1794];
            v1792 = v1799;
            }
          ;
          const v1822 = stdlib.add(v1252, v1792);
          const v1826 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1827 = [v1822, v1250, v1826];
          const v1828 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1827);
          sim_r.txns.push({
            amt: v1792,
            kind: 'to',
            tok: v1160
            });
          const v1913 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1372), null);
          const v1914 = stdlib.fromSome(v1913, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1917 = {
            addr: v1372,
            discountLevel: v1914,
            timeReductionLevel: v1794
            };
          const v1919 = await txn1.getOutput('Api_buyTimeReduction', 'v1917', ctc12, v1917);
          
          const v1924 = stdlib.add(v1794, stdlib.checkedBigNumberify('./index.rsh:345:57:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1372, v1924);
          const v3863 = v1209;
          const v3865 = v1211;
          const v3866 = v1212;
          const v3867 = v1214;
          const v3868 = v1215;
          const v3870 = v1828;
          const v3871 = v1223;
          const v3872 = v1828[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v3874 = v3872[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
          const v3875 = stdlib.sub(v3873, v3874);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
  switch (v1373[0]) {
    case 'Api_buyDiscount0_246': {
      const v1376 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1565 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1754 = v1373[1];
      undefined /* setApiDetails */;
      let v1792;
      const v1793 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
      const v1794 = stdlib.fromSome(v1793, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
      const v1795 = stdlib.lt(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1795, {
        at: './index.rsh:205:12:application',
        fs: ['at ./index.rsh:336:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:203:41:function exp)', 'at ./index.rsh:336:14:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1796 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1796) {
        v1792 = stdlib.checkedBigNumberify('./index.rsh:208:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1799 = v1189[v1794];
        v1792 = v1799;
        }
      ;
      const v1822 = stdlib.add(v1252, v1792);
      const v1826 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
      const v1827 = [v1822, v1250, v1826];
      const v1828 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1827);
      ;
      const v1913 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
      const v1914 = stdlib.fromSome(v1913, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
      const v1917 = {
        addr: v1372,
        discountLevel: v1914,
        timeReductionLevel: v1794
        };
      const v1919 = await txn1.getOutput('Api_buyTimeReduction', 'v1917', ctc12, v1917);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1754, v1919), {
          at: './index.rsh:334:11:application',
          fs: ['at ./index.rsh:334:11:application call to [unknown function] (defined at: ./index.rsh:334:11:function exp)', 'at ./index.rsh:341:21:application call to "callback" (defined at: ./index.rsh:337:22:function exp)', 'at ./index.rsh:337:22:application call to [unknown function] (defined at: ./index.rsh:337:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v1924 = stdlib.add(v1794, stdlib.checkedBigNumberify('./index.rsh:345:57:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1372, v1924);
      const v3863 = v1209;
      const v3865 = v1211;
      const v3866 = v1212;
      const v3867 = v1214;
      const v3868 = v1215;
      const v3870 = v1828;
      const v3871 = v1223;
      const v3872 = v1828[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v3874 = v3872[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
      const v3875 = stdlib.sub(v3873, v3874);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1943 = v1373[1];
      return;
      break;
      }
    }
  
  
  };
export async function Api_getParticipantStats(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Api_getParticipantStats expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Api_getParticipantStats expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Api_buyDiscount0_246: ctc10,
    Api_buyTicket0_246: ctc10,
    Api_buyTimeReduction0_246: ctc10,
    Api_getParticipantStats0_246: ctc10
    });
  const ctc12 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1301 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:356:13:application call to [unknown function] (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:248:23:application call to "runApi_getParticipantStats0_246" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1305 = ['Api_getParticipantStats0_246', v1301];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253, v1305],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:277:18:decimal', stdlib.UInt_max, 0), v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
      
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2015 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v2016 = [v1252, v1250, v2015];
          const v2017 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v2016);
          ;
          const v2120 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1372), null);
          const v2121 = stdlib.fromSome(v2120, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v2122 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1372), null);
          const v2123 = stdlib.fromSome(v2122, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v2124 = {
            addr: v1372,
            discountLevel: v2121,
            timeReductionLevel: v2123
            };
          const v2126 = await txn1.getOutput('Api_getParticipantStats', 'v2124', ctc12, v2124);
          
          const v3998 = v1209;
          const v4000 = v1211;
          const v4001 = v1212;
          const v4002 = v1214;
          const v4003 = v1215;
          const v4005 = v2017;
          const v4006 = v1223;
          const v4007 = v2017[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v4008 = v4007[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
          const v4009 = v4007[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
          const v4010 = stdlib.sub(v4008, v4009);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn1;
  switch (v1373[0]) {
    case 'Api_buyDiscount0_246': {
      const v1376 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1565 = v1373[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1754 = v1373[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1943 = v1373[1];
      undefined /* setApiDetails */;
      ;
      const v2015 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
      const v2016 = [v1252, v1250, v2015];
      const v2017 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v2016);
      ;
      const v2120 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
      const v2121 = stdlib.fromSome(v2120, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
      const v2122 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
      const v2123 = stdlib.fromSome(v2122, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
      const v2124 = {
        addr: v1372,
        discountLevel: v2121,
        timeReductionLevel: v2123
        };
      const v2126 = await txn1.getOutput('Api_getParticipantStats', 'v2124', ctc12, v2124);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1943, v2126), {
          at: './index.rsh:357:11:application',
          fs: ['at ./index.rsh:357:11:application call to [unknown function] (defined at: ./index.rsh:357:11:function exp)', 'at ./index.rsh:360:21:application call to "callback" (defined at: ./index.rsh:358:22:function exp)', 'at ./index.rsh:358:22:application call to [unknown function] (defined at: ./index.rsh:358:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v3998 = v1209;
      const v4000 = v1211;
      const v4001 = v1212;
      const v4002 = v1214;
      const v4003 = v1215;
      const v4005 = v2017;
      const v4006 = v1223;
      const v4007 = v2017[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v4008 = v4007[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
      const v4009 = v4007[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
      const v4010 = stdlib.sub(v4008, v4009);
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
    Api_buyDiscount0_246: ctc4,
    Api_buyTicket0_246: ctc4,
    Api_buyTimeReduction0_246: ctc4,
    Api_getParticipantStats0_246: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
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
  
  
  const v1117 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1118 = [v1117, v1117];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1139, v1140, v1141, v1142, v1143, v1144, v1145], secs: v1147, time: v1146, didSend: v52, from: v1138 } = txn1;
  const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0)];
  const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 1)];
  const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 2)];
  const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
  const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0), v1152);
  ;
  ;
  const v1155 = 'Metafomo                        ';
  const v1156 = 'METAFOMO';
  const v1157 = 'https://metalabs.technology                                                                     ';
  const v1158 = '                                ';
  const v1159 = undefined /* TokenNew */;
  const v1160 = await txn1.getOutput('internal', 'v1159', ctc3, v1159);
  const v1161 = [v1140];
  const v2200 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2204 = stdlib.tokenEq(v1160, v2200);
  const v1169 = v2204 ? false : true;
  stdlib.assert(v1169, {
    at: './index.rsh:141:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
  const v1174 = [stdlib.UInt_max, v1172, v1173];
  const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1174);
  const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
  const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
  const v1181 = [v1178, stdlib.UInt_max, v1180];
  const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1181);
  const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1187 = [v1184, v1185, false];
  const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1187);
  const v1189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1190 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:235:28:application',
    fs: ['at ./index.rsh:235:28:application call to [unknown function] (defined at: ./index.rsh:235:28:function exp)', 'at ./index.rsh:235:28:application call to "liftedInteract" (defined at: ./index.rsh:235:28:application)'],
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
  const {data: [], secs: v1196, time: v1195, didSend: v169, from: v1194 } = txn2;
  ;
  const v1197 = v1188[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
  const v1198 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
  const v1199 = stdlib.add(v1198, stdlib.checkedBigNumberify('./index.rsh:237:18:decimal', stdlib.UInt_max, 1));
  const v1202 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 1)];
  const v1203 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 2)];
  const v1204 = [v1199, v1202, v1203];
  const v1205 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0), v1204);
  ;
  const v1206 = stdlib.addressEq(v1138, v1194);
  stdlib.assert(v1206, {
    at: './index.rsh:237:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1208 = stdlib.add(v1147, v1141);
  let v1209 = v1208;
  let v1210 = true;
  let v1211 = stdlib.checkedBigNumberify('./index.rsh:248:59:decimal', stdlib.UInt_max, 0);
  let v1212 = v1139;
  let v1214 = stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', stdlib.UInt_max, 0);
  let v1215 = v1138;
  let v1216 = v1195;
  let v1222 = v1205;
  let v1223 = stdlib.checkedBigNumberify('./index.rsh:124:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1210;})()) {
    const v1249 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
    const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
    const v1252 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
    const v1253 = stdlib.sub(v1250, v1252);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1209],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1216,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:366:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2134, time: v2133, didSend: v921, from: v2132 } = txn4;
          
          ;
          const cv1209 = v1209;
          const cv1210 = false;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v2133;
          const cv1222 = v1222;
          const cv1223 = v1223;
          
          await (async () => {
            const v1209 = cv1209;
            const v1210 = cv1210;
            const v1211 = cv1211;
            const v1212 = cv1212;
            const v1214 = cv1214;
            const v1215 = cv1215;
            const v1216 = cv1216;
            const v1222 = cv1222;
            const v1223 = cv1223;
            
            if (await (async () => {
              
              return v1210;})()) {
              const v1249 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v1252 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
              const v1253 = stdlib.sub(v1250, v1252);
              sim_r.isHalt = false;
              }
            else {
              const v2137 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v2138 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v2140 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
              const v2141 = stdlib.sub(v2138, v2140);
              sim_r.txns.push({
                amt: v1223,
                kind: 'from',
                to: v1215,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:371:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1215,
                tok: v1140
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2134, time: v2133, didSend: v921, from: v2132 } = txn4;
      ;
      const cv1209 = v1209;
      const cv1210 = false;
      const cv1211 = v1211;
      const cv1212 = v1212;
      const cv1214 = v1214;
      const cv1215 = v1215;
      const cv1216 = v2133;
      const cv1222 = v1222;
      const cv1223 = v1223;
      
      v1209 = cv1209;
      v1210 = cv1210;
      v1211 = cv1211;
      v1212 = cv1212;
      v1214 = cv1214;
      v1215 = cv1215;
      v1216 = cv1216;
      v1222 = cv1222;
      v1223 = cv1223;
      
      continue;
      }
    else {
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn3;
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          undefined /* setApiDetails */;
          let v1381;
          const v1382 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1383 = stdlib.fromSome(v1382, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1384 = stdlib.lt(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1384, {
            at: './index.rsh:164:12:application',
            fs: ['at ./index.rsh:313:38:application call to "getDiscountPrice" (defined at: ./index.rsh:162:36:function exp)', 'at ./index.rsh:313:14:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1385 = stdlib.ge(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1385) {
            v1381 = stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1388 = v1189[v1383];
            v1381 = v1388;
            }
          ;
          const v1444 = stdlib.add(v1252, v1381);
          const v1448 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v1250, v1448];
          const v1450 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1449);
          ;
          const v1457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1459 = {
            addr: v1372,
            discountLevel: v1383,
            timeReductionLevel: v1458
            };
          await txn3.getOutput('Api_buyDiscount', 'v1459', ctc7, v1459);
          const v1466 = stdlib.add(v1383, stdlib.checkedBigNumberify('./index.rsh:322:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1372, v1466);
          if (v771) {
            stdlib.protect(ctc0, await interact.updateDiscountLevel(v1466), {
              at: './index.rsh:326:45:application',
              fs: ['at ./index.rsh:324:23:application call to [unknown function] (defined at: ./index.rsh:324:27:function exp)', 'at ./index.rsh:314:22:application call to [unknown function] (defined at: ./index.rsh:314:22:function exp)'],
              msg: 'updateDiscountLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v1450;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          undefined /* setApiDetails */;
          let v1585;
          const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1587 = stdlib.fromSome(v1586, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1588 = stdlib.ge(v1587, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1588) {
            v1585 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1591 = v1190[v1587];
            v1585 = v1591;
            }
          const v1592 = stdlib.lt(v1585, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1592, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:284:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:284:14:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1593 = stdlib.div(v1585, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1594 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1593);
          const v1595 = stdlib.mul(v1212, v1594);
          const v1630 = stdlib.add(v1223, v1595);
          ;
          const v1637 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1638 = [v1252, v1250, v1637];
          const v1639 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1638);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:286:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1662, {
            at: './index.rsh:286:20:application',
            fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1663 = v1639[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          stdlib.assert(v1665, {
            at: './index.rsh:287:20:application',
            fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1668 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1669 = stdlib.fromSome(v1668, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1670 = {
            addr: v1372,
            discountLevel: v1587,
            timeReductionLevel: v1669
            };
          await txn3.getOutput('Api_buyTicket', 'v1670', ctc7, v1670);
          const v1677 = stdlib.div(v1212, v1144);
          const v1678 = stdlib.add(v1212, v1143);
          stdlib.protect(ctc0, await interact.showPurchase(v1372, v1212, v1678), {
            at: './index.rsh:294:51:application',
            fs: ['at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:27:function exp)', 'at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1683 = stdlib.sub(v1630, v1677);
          ;
          const v1689 = stdlib.sub(v1664, v1145);
          const v1692 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1)];
          const v1693 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 2)];
          const v1694 = [v1689, v1692, v1693];
          const v1695 = stdlib.Array_set(v1639, stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1), v1694);
          ;
          let v1696;
          const v1699 = stdlib.ge(v1669, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1699) {
            v1696 = stdlib.checkedBigNumberify('./index.rsh:217:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1702 = v1192[v1669];
            v1696 = v1702;
            }
          const v1703 = stdlib.sub(v1142, v1696);
          let v1705;
          if (v1588) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1587];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1712, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:303:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1212, v1714);
          const v1716 = stdlib.add(v1214, v1715);
          const v1717 = stdlib.add(v1211, v1677);
          const v1718 = stdlib.add(v1209, v1703);
          const cv1209 = v1718;
          const cv1210 = true;
          const cv1211 = v1717;
          const cv1212 = v1678;
          const cv1214 = v1716;
          const cv1215 = v1372;
          const cv1216 = v1374;
          const cv1222 = v1695;
          const cv1223 = v1683;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          undefined /* setApiDetails */;
          let v1792;
          const v1793 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1794 = stdlib.fromSome(v1793, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1795 = stdlib.lt(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1795, {
            at: './index.rsh:205:12:application',
            fs: ['at ./index.rsh:336:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:203:41:function exp)', 'at ./index.rsh:336:14:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1796 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1796) {
            v1792 = stdlib.checkedBigNumberify('./index.rsh:208:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1799 = v1189[v1794];
            v1792 = v1799;
            }
          ;
          const v1822 = stdlib.add(v1252, v1792);
          const v1826 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1827 = [v1822, v1250, v1826];
          const v1828 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1827);
          ;
          const v1913 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1914 = stdlib.fromSome(v1913, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1917 = {
            addr: v1372,
            discountLevel: v1914,
            timeReductionLevel: v1794
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1917', ctc7, v1917);
          const v1924 = stdlib.add(v1794, stdlib.checkedBigNumberify('./index.rsh:345:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1372, v1924);
          if (v771) {
            stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1924), {
              at: './index.rsh:349:50:application',
              fs: ['at ./index.rsh:347:23:application call to [unknown function] (defined at: ./index.rsh:347:27:function exp)', 'at ./index.rsh:337:22:application call to [unknown function] (defined at: ./index.rsh:337:22:function exp)'],
              msg: 'updateTimeReductionLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v1828;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          undefined /* setApiDetails */;
          ;
          const v2015 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v2016 = [v1252, v1250, v2015];
          const v2017 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v2016);
          ;
          const v2120 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v2121 = stdlib.fromSome(v2120, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v2122 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v2123 = stdlib.fromSome(v2122, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v2124 = {
            addr: v1372,
            discountLevel: v2121,
            timeReductionLevel: v2123
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2124', ctc7, v2124);
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v2017;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        }}
    
    }
  const v2137 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
  const v2138 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
  const v2140 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
  const v2141 = stdlib.sub(v2138, v2140);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1215), {
    at: './index.rsh:109:29:application',
    fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:32:function exp)', 'at ./index.rsh:373:16:application call to "showOutcome" (defined at: ./index.rsh:107:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:376:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2174, time: v2173, didSend: v958, from: v2172 } = txn3;
      
      ;
      const v2175 = v2173;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1140
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
    tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2174, time: v2173, didSend: v958, from: v2172 } = txn3;
  ;
  let v2175 = v2173;
  
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
    const {data: [], secs: v2187, time: v2186, didSend: v967, from: v2185 } = txn4;
    ;
    const v2188 = stdlib.addressEq(v1138, v2185);
    stdlib.assert(v2188, {
      at: './index.rsh:379:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2175 = v2186;
    
    v2175 = cv2175;
    
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
    Api_buyDiscount0_246: ctc5,
    Api_buyTicket0_246: ctc5,
    Api_buyTimeReduction0_246: ctc5,
    Api_getParticipantStats0_246: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc10 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6));
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
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
  
  
  const v1117 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1118 = [v1117, v1117];
  const v1129 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:129:38:application',
    fs: ['at ./index.rsh:127:16:application call to [unknown function] (defined at: ./index.rsh:127:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1130 = v1129.ticketPrice;
  const v1131 = v1129.nftPrize;
  const v1132 = v1129.deadline;
  const v1133 = v1129.deltaDeadline;
  const v1134 = v1129.unitPrice;
  const v1135 = v1129.ticketFeeDenominator;
  const v1136 = v1129.tokensGivenPerTicket;
  const v1137 = stdlib.gt(v1135, stdlib.checkedBigNumberify('./index.rsh:130:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1137, {
    at: './index.rsh:130:12:application',
    fs: ['at ./index.rsh:127:16:application call to [unknown function] (defined at: ./index.rsh:127:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1130, v1131, v1132, v1133, v1134, v1135, v1136],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1139, v1140, v1141, v1142, v1143, v1144, v1145], secs: v1147, time: v1146, didSend: v52, from: v1138 } = txn1;
      
      const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0)];
      const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 1)];
      const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 2)];
      const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
      const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0), v1152);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1140
        });
      ;
      const v1155 = 'Metafomo                        ';
      const v1156 = 'METAFOMO';
      const v1157 = 'https://metalabs.technology                                                                     ';
      const v1158 = '                                ';
      const v1159 = stdlib.simTokenNew(sim_r, v1155, v1156, v1157, v1158, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1160 = await txn1.getOutput('internal', 'v1159', ctc3, v1159);
      const v1161 = [v1140];
      const v2200 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2204 = stdlib.tokenEq(v1160, v2200);
      const v1169 = v2204 ? false : true;
      ;
      const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
      const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
      const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
      const v1174 = [stdlib.UInt_max, v1172, v1173];
      const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1174);
      const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
      const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
      const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
      const v1181 = [v1178, stdlib.UInt_max, v1180];
      const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1181);
      const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
      const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
      const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
      const v1187 = [v1184, v1185, false];
      const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1187);
      const v1189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
      const v1190 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
      const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1139, v1140, v1141, v1142, v1143, v1144, v1145], secs: v1147, time: v1146, didSend: v52, from: v1138 } = txn1;
  const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0)];
  const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 1)];
  const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 2)];
  const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
  const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:132:12:dot', stdlib.UInt_max, 0), v1152);
  ;
  ;
  const v1155 = 'Metafomo                        ';
  const v1156 = 'METAFOMO';
  const v1157 = 'https://metalabs.technology                                                                     ';
  const v1158 = '                                ';
  const v1159 = undefined /* TokenNew */;
  const v1160 = await txn1.getOutput('internal', 'v1159', ctc3, v1159);
  const v1161 = [v1140];
  const v2200 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2204 = stdlib.tokenEq(v1160, v2200);
  const v1169 = v2204 ? false : true;
  stdlib.assert(v1169, {
    at: './index.rsh:141:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
  const v1174 = [stdlib.UInt_max, v1172, v1173];
  const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1174);
  const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
  const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 2)];
  const v1181 = [v1178, stdlib.UInt_max, v1180];
  const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1181);
  const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 0)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1)];
  const v1187 = [v1184, v1185, false];
  const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:141:32:application', stdlib.UInt_max, 1), v1187);
  const v1189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1190 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.sendrecv({
    args: [v1138, v1139, v1140, v1141, v1142, v1143, v1144, v1145, v1147, v1160, v1188, v1189, v1190, v1192],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1146,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:237:18:decimal', stdlib.UInt_max, 1), v1140]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1196, time: v1195, didSend: v169, from: v1194 } = txn2;
      
      ;
      const v1197 = v1188[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
      const v1198 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
      const v1199 = stdlib.add(v1198, stdlib.checkedBigNumberify('./index.rsh:237:18:decimal', stdlib.UInt_max, 1));
      const v1202 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 1)];
      const v1203 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 2)];
      const v1204 = [v1199, v1202, v1203];
      const v1205 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0), v1204);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:237:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1140
        });
      const v1206 = stdlib.addressEq(v1138, v1194);
      ;
      const v1208 = stdlib.add(v1147, v1141);
      const v1209 = v1208;
      const v1210 = true;
      const v1211 = stdlib.checkedBigNumberify('./index.rsh:248:59:decimal', stdlib.UInt_max, 0);
      const v1212 = v1139;
      const v1214 = stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', stdlib.UInt_max, 0);
      const v1215 = v1138;
      const v1216 = v1195;
      const v1222 = v1205;
      const v1223 = stdlib.checkedBigNumberify('./index.rsh:124:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1210;})()) {
        const v1249 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
        const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
        const v1252 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
        const v1253 = stdlib.sub(v1250, v1252);
        sim_r.isHalt = false;
        }
      else {
        const v2137 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
        const v2138 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
        const v2140 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
        const v2141 = stdlib.sub(v2138, v2140);
        sim_r.txns.push({
          amt: v1223,
          kind: 'from',
          to: v1215,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:371:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1215,
          tok: v1140
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc13, ctc9, ctc10, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1196, time: v1195, didSend: v169, from: v1194 } = txn2;
  ;
  const v1197 = v1188[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
  const v1198 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0)];
  const v1199 = stdlib.add(v1198, stdlib.checkedBigNumberify('./index.rsh:237:18:decimal', stdlib.UInt_max, 1));
  const v1202 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 1)];
  const v1203 = v1197[stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 2)];
  const v1204 = [v1199, v1202, v1203];
  const v1205 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:237:12:dot', stdlib.UInt_max, 0), v1204);
  ;
  const v1206 = stdlib.addressEq(v1138, v1194);
  stdlib.assert(v1206, {
    at: './index.rsh:237:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v1208 = stdlib.add(v1147, v1141);
  let v1209 = v1208;
  let v1210 = true;
  let v1211 = stdlib.checkedBigNumberify('./index.rsh:248:59:decimal', stdlib.UInt_max, 0);
  let v1212 = v1139;
  let v1214 = stdlib.checkedBigNumberify('./index.rsh:248:43:decimal', stdlib.UInt_max, 0);
  let v1215 = v1138;
  let v1216 = v1195;
  let v1222 = v1205;
  let v1223 = stdlib.checkedBigNumberify('./index.rsh:124:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1210;})()) {
    const v1249 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
    const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
    const v1252 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
    const v1253 = stdlib.sub(v1250, v1252);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1209],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v1222, v1223, v1249, v1250, v1252, v1253],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1216,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:366:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2134, time: v2133, didSend: v921, from: v2132 } = txn4;
          
          ;
          const cv1209 = v1209;
          const cv1210 = false;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v2133;
          const cv1222 = v1222;
          const cv1223 = v1223;
          
          await (async () => {
            const v1209 = cv1209;
            const v1210 = cv1210;
            const v1211 = cv1211;
            const v1212 = cv1212;
            const v1214 = cv1214;
            const v1215 = cv1215;
            const v1216 = cv1216;
            const v1222 = cv1222;
            const v1223 = cv1223;
            
            if (await (async () => {
              
              return v1210;})()) {
              const v1249 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v1252 = v1249[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
              const v1253 = stdlib.sub(v1250, v1252);
              sim_r.isHalt = false;
              }
            else {
              const v2137 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v2138 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
              const v2140 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
              const v2141 = stdlib.sub(v2138, v2140);
              sim_r.txns.push({
                amt: v1223,
                kind: 'from',
                to: v1215,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:371:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1215,
                tok: v1140
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2134, time: v2133, didSend: v921, from: v2132 } = txn4;
      ;
      const cv1209 = v1209;
      const cv1210 = false;
      const cv1211 = v1211;
      const cv1212 = v1212;
      const cv1214 = v1214;
      const cv1215 = v1215;
      const cv1216 = v2133;
      const cv1222 = v1222;
      const cv1223 = v1223;
      
      v1209 = cv1209;
      v1210 = cv1210;
      v1211 = cv1211;
      v1212 = cv1212;
      v1214 = cv1214;
      v1215 = cv1215;
      v1216 = cv1216;
      v1222 = cv1222;
      v1223 = cv1223;
      
      continue;
      }
    else {
      const {data: [v1373], secs: v1375, time: v1374, didSend: v771, from: v1372 } = txn3;
      switch (v1373[0]) {
        case 'Api_buyDiscount0_246': {
          const v1376 = v1373[1];
          undefined /* setApiDetails */;
          let v1381;
          const v1382 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1383 = stdlib.fromSome(v1382, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1384 = stdlib.lt(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1384, {
            at: './index.rsh:164:12:application',
            fs: ['at ./index.rsh:313:38:application call to "getDiscountPrice" (defined at: ./index.rsh:162:36:function exp)', 'at ./index.rsh:313:14:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:313:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1385 = stdlib.ge(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1385) {
            v1381 = stdlib.checkedBigNumberify('./index.rsh:167:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1388 = v1189[v1383];
            v1381 = v1388;
            }
          ;
          const v1444 = stdlib.add(v1252, v1381);
          const v1448 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1449 = [v1444, v1250, v1448];
          const v1450 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1449);
          ;
          const v1457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1458 = stdlib.fromSome(v1457, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1459 = {
            addr: v1372,
            discountLevel: v1383,
            timeReductionLevel: v1458
            };
          await txn3.getOutput('Api_buyDiscount', 'v1459', ctc8, v1459);
          const v1466 = stdlib.add(v1383, stdlib.checkedBigNumberify('./index.rsh:322:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1372, v1466);
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v1450;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1565 = v1373[1];
          undefined /* setApiDetails */;
          let v1585;
          const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1587 = stdlib.fromSome(v1586, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1588 = stdlib.ge(v1587, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1588) {
            v1585 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1591 = v1190[v1587];
            v1585 = v1591;
            }
          const v1592 = stdlib.lt(v1585, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1592, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:284:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:284:14:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:284:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1593 = stdlib.div(v1585, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1594 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1593);
          const v1595 = stdlib.mul(v1212, v1594);
          const v1630 = stdlib.add(v1223, v1595);
          ;
          const v1637 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1638 = [v1252, v1250, v1637];
          const v1639 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1638);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:286:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1662, {
            at: './index.rsh:286:20:application',
            fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1663 = v1639[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:287:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          stdlib.assert(v1665, {
            at: './index.rsh:287:20:application',
            fs: ['at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1668 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1669 = stdlib.fromSome(v1668, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1670 = {
            addr: v1372,
            discountLevel: v1587,
            timeReductionLevel: v1669
            };
          await txn3.getOutput('Api_buyTicket', 'v1670', ctc8, v1670);
          const v1677 = stdlib.div(v1212, v1144);
          const v1678 = stdlib.add(v1212, v1143);
          const v1683 = stdlib.sub(v1630, v1677);
          ;
          const v1689 = stdlib.sub(v1664, v1145);
          const v1692 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1)];
          const v1693 = v1663[stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 2)];
          const v1694 = [v1689, v1692, v1693];
          const v1695 = stdlib.Array_set(v1639, stdlib.checkedBigNumberify('./index.rsh:296:61:application', stdlib.UInt_max, 1), v1694);
          ;
          let v1696;
          const v1699 = stdlib.ge(v1669, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1699) {
            v1696 = stdlib.checkedBigNumberify('./index.rsh:217:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1702 = v1192[v1669];
            v1696 = v1702;
            }
          const v1703 = stdlib.sub(v1142, v1696);
          let v1705;
          if (v1588) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:176:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1587];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:184:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1712, {
            at: './index.rsh:184:12:application',
            fs: ['at ./index.rsh:303:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:182:47:function exp)', 'at ./index.rsh:285:22:application call to [unknown function] (defined at: ./index.rsh:285:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:185:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:185:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1212, v1714);
          const v1716 = stdlib.add(v1214, v1715);
          const v1717 = stdlib.add(v1211, v1677);
          const v1718 = stdlib.add(v1209, v1703);
          const cv1209 = v1718;
          const cv1210 = true;
          const cv1211 = v1717;
          const cv1212 = v1678;
          const cv1214 = v1716;
          const cv1215 = v1372;
          const cv1216 = v1374;
          const cv1222 = v1695;
          const cv1223 = v1683;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1754 = v1373[1];
          undefined /* setApiDetails */;
          let v1792;
          const v1793 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v1794 = stdlib.fromSome(v1793, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v1795 = stdlib.lt(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1795, {
            at: './index.rsh:205:12:application',
            fs: ['at ./index.rsh:336:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:203:41:function exp)', 'at ./index.rsh:336:14:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:336:14:function exp)', 'at ./index.rsh:248:23:application call to [unknown function] (defined at: ./index.rsh:248:23:function exp)', 'at ./index.rsh:277:18:application call to [unknown function] (defined at: ./index.rsh:277:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1796 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1796) {
            v1792 = stdlib.checkedBigNumberify('./index.rsh:208:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1799 = v1189[v1794];
            v1792 = v1799;
            }
          ;
          const v1822 = stdlib.add(v1252, v1792);
          const v1826 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v1827 = [v1822, v1250, v1826];
          const v1828 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v1827);
          ;
          const v1913 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v1914 = stdlib.fromSome(v1913, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v1917 = {
            addr: v1372,
            discountLevel: v1914,
            timeReductionLevel: v1794
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1917', ctc8, v1917);
          const v1924 = stdlib.add(v1794, stdlib.checkedBigNumberify('./index.rsh:345:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1372, v1924);
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v1828;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1943 = v1373[1];
          undefined /* setApiDetails */;
          ;
          const v2015 = v1249[stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 2)];
          const v2016 = [v1252, v1250, v2015];
          const v2017 = stdlib.Array_set(v1222, stdlib.checkedBigNumberify('./index.rsh:248:23:dot', stdlib.UInt_max, 1), v2016);
          ;
          const v2120 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1372), null);
          const v2121 = stdlib.fromSome(v2120, stdlib.checkedBigNumberify('./index.rsh:160:64:decimal', stdlib.UInt_max, 0));
          const v2122 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1372), null);
          const v2123 = stdlib.fromSome(v2122, stdlib.checkedBigNumberify('./index.rsh:201:74:decimal', stdlib.UInt_max, 0));
          const v2124 = {
            addr: v1372,
            discountLevel: v2121,
            timeReductionLevel: v2123
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2124', ctc8, v2124);
          const cv1209 = v1209;
          const cv1210 = true;
          const cv1211 = v1211;
          const cv1212 = v1212;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1216 = v1374;
          const cv1222 = v2017;
          const cv1223 = v1223;
          
          v1209 = cv1209;
          v1210 = cv1210;
          v1211 = cv1211;
          v1212 = cv1212;
          v1214 = cv1214;
          v1215 = cv1215;
          v1216 = cv1216;
          v1222 = cv1222;
          v1223 = cv1223;
          
          continue;
          break;
          }
        }}
    
    }
  const v2137 = v1222[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
  const v2138 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:48:application', stdlib.UInt_max, 1)];
  const v2140 = v2137[stdlib.checkedBigNumberify('./index.rsh:255:60:application', stdlib.UInt_max, 0)];
  const v2141 = stdlib.sub(v2138, v2140);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1215), {
    at: './index.rsh:109:29:application',
    fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:32:function exp)', 'at ./index.rsh:373:16:application call to "showOutcome" (defined at: ./index.rsh:107:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:376:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2174, time: v2173, didSend: v958, from: v2172 } = txn3;
      
      ;
      const v2175 = v2173;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1140
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
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2174, time: v2173, didSend: v958, from: v2172 } = txn3;
  ;
  let v2175 = v2173;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1209, v1211, v1212, v1214, v1215, v2141],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2175,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:379:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2187, time: v2186, didSend: v967, from: v2185 } = txn4;
        
        ;
        const v2188 = stdlib.addressEq(v1138, v2185);
        ;
        const cv2175 = v2186;
        
        await (async () => {
          const v2175 = cv2175;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1140
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
      tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2187, time: v2186, didSend: v967, from: v2185 } = txn4;
    ;
    const v2188 = stdlib.addressEq(v1138, v2185);
    stdlib.assert(v2188, {
      at: './index.rsh:379:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2175 = v2186;
    
    v2175 = cv2175;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAmAAEIBzgDIAUGKDAEQJAC4AHoAWSAAkhQoI0GEpO5vtQE1PPd8QuDo/jPDYWf7bsJi7iLgQKgpJi0BPAB+AGgAiLCAhEC+QHQAdgBJgUBAAEBAQIACP//////////IjUAMRhBDkcrZEkiWzUBJFs1AjEZIxJBAAoxACghFa9mQg4cNhoAF0lBAoYiNQQjNQZJIRYMQAEFSSEXDEAAgEkhGAxAAGkhGBJENAFJIQgMQAA+SSUMQAAdJRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDb9IKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDaQhBRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDYYhFxJEKzX/gAEDNP9QQgKlSSEZDEAADiEZEkQrNf8qNP9QQgKQIRYSRDQBSSEIDEAAPkklDEAAHSUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg0xSChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg0WIQUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQgz4SSEaDEABXEkhGwxAAUchGxJENAFJIQgMQADTSSUMQABpJRJEKGQpZFAqZFBJNQNXWCg1/zQDVygINANXMAhQNANXIAhQNAOB6wIkWFA0A1dQCFA0A1fwCFA0A1f4CFA0AyERIQZYUDQDV+gIUDQDV+AIUDT/UDQDV4AwUDT/UDQDV7AwUDUHQgxuSChkKWRQKmRQSTUDV0goNf80A1coCDQDVzAIUDQDVyAIUDQDIQ0kWFA0A1dACFA0A1fgCFA0A1foCFA0A1fwIFA0A1fYCFA0A1fQCFA0/1A0A1dwMFA0/1A0A1egMFA1B0IMCiEFEkQoZClkUCpkUEk1A1dIKDX/NANXKAg0A1cwCFA0A1cgCFA0AyENJFhQNANXQAhQNANX4AhQNANX6AhQNANX8CBQNANX2AhQNANX0AhQNP9QNANXcDBQNP9QNANXoDBQNQdCC6MhGhJEKzX/KTT/UEIAxIGthJtjEkQrNf8oNP9QQgCzNhoCFzUENhoDNhoBF0khCwxABaJJIQgMQAUXSSUMQACRJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDIQ5bNf+ABOIbs6mwMgc0/w9ENANXACA0AyEGWzQDIQlbNAMhCls0AyEEWzQDIQxbNAMhEls0AyETWzQDV1goNANXgDA0A1ewMDT/IjQDIQ9bNAMhHFs0AyEdWzQDIREhBlgyBjQDIR4hH1g0AyEgW0II60glNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQZbNf4hCVs1/SEKWzX8IQRbNfshDFs1+iESWzX5IRNbNfhXWCg191eAMDX2V7AwNfUhDls19CEPWzXzIRxbNfIhHVs18SERIQZYNfAhHiEfWDXvISBbNe6BygIhIVg17YHbAls17IHjAls160k1BTXqgASQT2RJNOpQsDIHNPQMRDTqIlVJISIMQAGCSSEFDEAApSEFEkSACAAAAAAAAAhMIjEAiAolVwAJSTXpI1s06SJVTRYiMQCIChFXCQlJNekjWzTpIlVNFlAxAFBQsCIxAIgJ91cACUk16SNbNOkiVU0WIjEAiAnjVwkJSTXpI1s06SJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQjNPM08jTxNPAyBjTvVwARNOsWNOwWUDTtVxABUFA07kIHhkgiMQCICY1XCQlJNecjWzTnIlVNSTXoIQcMRDToIQcPQQAHISM16UIACzT3JDToCyRYFzXpNOk0+IgJf4AIAAAAAAAAB30iMQCICUhXAAlJNecjWzTnIlVNFjToFlAxAFBQsCIxAIgJK1cACUk15yNbNOciVU0WNOgWUDEAUDUHMQAoMQCICQwpNOgjCBZQNedXAAk051BmNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IzTzNPI08TTwMgY071cAETTrNOkIFjTsFlA07VcQAVBQNO5CBrBJIwxAAWhIIjEAiAixVwAJSTXnI1s05yJVTUk16CEHD0k150EABiI16UIACzT2JDToCyRYFzXpNOkhEAxENPIjNOkhEAoJCzXmNOaICH8071cAETTrFjTsFlA07VcQAVBQNeU0+iMNRDTlVxERSTXkIltJNeM0+Q1EIjEAiAg/VwkJSTXhI1s04SJVTTXigAgAAAAAAAAGhjToFjTiFlAxAFBQsDToFjTiFlAxAFA1BzTyNPoKNeGxIrIBNOGyCCOyEDT/sgezsSKyATT5shIhC7IQMQCyFDT4shGzNOIhBw9BAAYiNeBCAAs09SQ04gskWBc14DTnQQAGIjXfQgALNPYkNOgLJFgXNd803yEQDEQ0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ0/DTgCQgjNPM04Qg08jT7CDTxNPIjNN8hEAoJCwgxADIGNOVXABE04zT5CRY05FcICFA05FcQAVBQNO405gg04QlCBUJIIjEAiAdJVwAJSTXnI1s05yJVTUk16CEHDEQ06CEHD0EAByEjNelCAAs09yQ06AskWBc16TTpNPiIBzuACAAAAAAAAAWzNOgWIjEAiAcBVwkJSTXnI1s05yJVTRZQMQBQULA06BYiMQCIBuRXCQlJNecjWzTnIlVNFlAxAFA1BzEAKDEAiAbIKTToIwgWUDXnVwkJNOdMUGY0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQjNPM08jTxNPAyBjTvVwARNOs06QgWNOwWUDTtVxABUFA07kIEa0khBwxAAHxIIQg0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A1cAIDX/gATMmZJcsDT/MQASRDT/NAMhBls0AyEJWzQDIQpbNAMhBFs0AyEMWzQDV0goNANXcDA0A1egMDQDISRbNAMhJVs0AyEOWzQDIQ9bNANX8CA0AyENWzIGQgUqSEkhIgxAAHtJIQUMQABzSCEFNAESRDQESSISTDQCEhFEKGQpZFAqZFA1A4AEp2XEtLA0A1cAIDQDIQZbNAMhCVs0AyEKWzQDIQRbNAMhDFs0A1dIKDQDV3AwNANXoDA0AyEkWzQDISVbNAMhDls0AyEPWzQDV/AgNAMhDVsyBkIEqEhJIwxAAKtIIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpXACA1/yEJWzX+IQpbNf1XaCI1/IAEmouRdLA0/FcAETX7IzT+iAVONP8xABJENP80/jT9NAMhBFs0AyEMWzQDIRJbNAMhE1s0A4FgWzQDV4ooNANXsjA0A1fiMDQDgVhbNP0IIyI0AyEGWyI0/zIGNPsiWyMIFjT7VwgIUDT7VxABUDT8VxERUCJCArRIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkkiWzX/JFs1/oEQWzX9gRhbNfwhBls1+yEJWzX6IQpbNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsCEUiARwISGvSTX4SVBJNfdXABE19iSvNPZXCAhQNPZXEAFQNPdXERFQNfUhFIgERbEisgEishIhC7IQMgqyFDT+shGzIRSIBCyxIrIBIQWyEIH///////////8BsiIhCLIjgAhNRVRBRk9NT7IlgCBNZXRhZm9tbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGBodHRwczovL21ldGFsYWJzLnRlY2hub2xvZ3kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfSACAAAAAAAAASHNPQWULA09Ek18zT+FiJbE0Q09VcRETXyNPVXABEnBDTyVwgIUDTyVxABUFBJNfFXERE18DTxVwARNPBXAAgnBFA08FcQAVBQSTXvVxERNe4071cAETTuVwAINO5XCAhQKFBQNe2AKAAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKA17IAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAKAAAAAAAAAA8AAAAAAAAAFAAAAAAAAAAZNeuAMAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABTXqMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDTzFlA07VA07FA061A06lAoSwFXAH9nKUsBV39/ZypLAVf+FGdIIzUBMgY1AkIB1DX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew0+EEAiTT+VxERSTXrJFs16jTrIls16TTqNOkJNeg07DTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09FA09VA09lA09xZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUDTrUDTqFlA06RZQNOgWUChLAVcAf2cpSwFXf39nKksBV/51Z0glNQEyBjUCQgEeNP5XERFJNeskWzTrIlsJNeqxIrIBNP+yCCOyEDT8sgezsSKyASOyEiELshA0/LIUNO2yEbM07DTtFlA07hZQNO8WUDTwFlA08xZQNPRQNPVQNPZQNPcWUDT5FlA0+hZQNPsWUDT8UDTqFlAoSwFXAH9nKUsBV39/ZypLAVf+GmdIIQU1ATIGNQJCAJI1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfFJNfA08RZQNPIWUDTzFlA09BZQNPUWUDT2UDT3UDT4UDT5FlA0+hZQNPsWUDT8FlA0/VA0/hZQKEsBVwB/ZylLAVd/f2cqSwFX/hpnSCEINQEyBjUCQgAcMRkhBxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKzQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8tJMRhhQAAFSCEVr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECELEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 3,
  stateSize: 371,
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
                "name": "v1139",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v1139",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1144",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1145",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
        "internalType": "struct T19",
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
        "internalType": "struct T19",
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
        "internalType": "struct T19",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_246",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1373",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
        "internalType": "struct T19",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1159",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1459",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1670",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1917",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2124",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T24",
        "name": "",
        "type": "tuple"
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
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T24",
        "name": "",
        "type": "tuple"
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
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T24",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Api_getParticipantStats",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "discountLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeReductionLevel",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct T24",
        "name": "",
        "type": "tuple"
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
          },
          {
            "internalType": "uint256[5]",
            "name": "discountPrices",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[6]",
            "name": "discountPercents",
            "type": "uint256[6]"
          },
          {
            "internalType": "uint256[5]",
            "name": "timeReductionPrices",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[6]",
            "name": "timeReductionSecs",
            "type": "uint256[6]"
          }
        ],
        "internalType": "struct T3",
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
        "name": "v4028",
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
        "name": "v4032",
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
        "internalType": "struct T19",
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
        "internalType": "struct T19",
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
        "internalType": "struct T19",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_246",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_246",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1373",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
        "internalType": "struct T19",
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
  Bytecode: `0x608060405260405162005e3438038062005e348339810160408190526200002691620009e9565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600a62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007a9565b620002729695949392919062000b0b565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f5f0085377a9263f641988827636c81541bf69a3d8879c233476b292ab32f0aaf9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007b7565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c06565b604051602081830303815290604052600290805190602001906200059b9291906200082e565b5050505062000d59565b620005af620008bd565b60005b60028110156200060557848160028110620005d157620005d162000aa5565b6020020151828260028110620005eb57620005eb62000aa5565b602002015280620005fc8162000cf2565b915050620005b2565b50818184600281106200061c576200061c62000aa5565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60405180610280016040528062000668620008ed565b815260200162000677620008bd565b815260200162000686620008ed565b815260200162000695620008bd565b8152602001620006b060408051602081019091526000815290565b815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291019081526020016200070060408051602081019091526000815290565b815260006020820181905260408201526060016200071d62000910565b81526020016200072c620008ed565b81526020016200073b620008bd565b81526020016200074a620008ed565b815260200162000759620008bd565b815260200162000768620008ed565b815260200162000777620008bd565b8152602001620007866200092e565b8152602001620007956200094c565b8152602001620007a46200094c565b905290565b6110298062004e0b83390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200162000777620008bd565b8280546200083c9062000d1c565b90600052602060002090601f016020900481019282620008605760008555620008ab565b82601f106200087b57805160ff1916838001178555620008ab565b82800160010185558215620008ab579182015b82811115620008ab5782518255916020019190600101906200088e565b50620008b99291506200096a565b5090565b60405180604001604052806002905b620008d6620008ed565b815260200190600190039081620008cc5790505090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008b957600081556001016200096b565b604080519081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620009fe57600080fd5b62000a0862000981565b8351815260e0601f198301121562000a1f57600080fd5b62000a29620009b8565b6020850151815260408501519092506001600160a01b038116811462000a4e57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6001600160a01b03169052565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000ae35760208185018101518683018201520162000ac5565b8181111562000af6576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b2060c083018962000abb565b828103602084015262000b34818962000abb565b9050828103604084015262000b4a818862000abb565b9050828103606084015262000b60818762000abb565b6080840195909552505060a00152949350505050565b8060005b600281101562000bb657815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000b7a565b50505050565b8060005b600581101562000bb657815184526020938401939091019060010162000bc0565b8060005b600681101562000bb657815184526020938401939091019060010162000be5565b60006104208201905062000c1c82845162000a98565b60208301516020830152604083015162000c3a604084018262000a98565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000c8e8285018262000a98565b50506101408084015162000ca58285018262000b76565b505061016083015162000cbd61020084018262000bbc565b5061018083015162000cd46102a084018262000be1565b506101a083015162000ceb61036084018262000be1565b5092915050565b600060001982141562000d1557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d3157607f821691505b6020821081141562000d5357634e487b7160e01b600052602260045260246000fd5b50919050565b6140a28062000d696000396000f3fe6080604052600436106100cf5760003560e01c80631e93b0f1146100d85780632b10758a146100fc5780632c10a1591461011157806330a94db4146101245780633bc5b7bf146101445780636579ece6146101715780636cd6de3a146101845780636cdcb9df1461018c57806373b4522c146101945780637a3678dd146101a757806383230757146101c95780638e314769146101de578063a5560596146101f1578063ab53f2c614610211578063bf2c5b2414610234578063cadc2e7a14610247578063e73216b51461026757005b366100d657005b005b3480156100e457600080fd5b506003545b6040519081526020015b60405180910390f35b61010461026f565b6040516100f3919061330c565b6100d661011f366004613336565b6102bf565b34801561013057600080fd5b506100e961013f36600461334e565b6102e3565b34801561015057600080fd5b5061016461015f36600461337f565b61053a565b6040516100f391906133b2565b6100d661017f3660046133e9565b610551565b610104610571565b6101046105c4565b6100d66101a2366004613336565b61061a565b3480156101b357600080fd5b506101bc61063a565b6040516100f39190613441565b3480156101d557600080fd5b506001546100e9565b6100d66101ec366004613336565b610a3e565b3480156101fd57600080fd5b506100e961020c36600461334e565b610a5e565b34801561021d57600080fd5b50610226610ca9565b6040516100f392919061354b565b6100d6610242366004613336565b610d46565b34801561025357600080fd5b5061016461026236600461337f565b610d66565b610104610d77565b610277612caa565b61027f612cd4565b610287612d13565b61028f612d2d565b6000602082810182905290825260408051808301909152828152908301526102b78284610dca565b505051919050565b6102c7612cd4565b6102df6102d93684900384018461367e565b82611c7f565b5050565b6000600160005414156103a0576000600280546102ff906136d3565b80601f016020809104026020016040519081016040528092919081815260200182805461032b906136d3565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b50505050508060200190518101906103909190613899565b905061039e60006009611f57565b505b60036000541415610464576000600280546103ba906136d3565b80601f01602080910402602001604051908101604052809291908181526020018280546103e6906136d3565b80156104335780601f1061040857610100808354040283529160200191610433565b820191906000526020600020905b81548152906001019060200180831161041657829003601f168201915b505050505080602001905181019061044b9190613980565b905080608001518361045d9190613a8b565b9392505050565b6006600054141561047e576000600280546103ba906136d3565b6007600054141561052957600060028054610498906136d3565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906136d3565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505080602001905181019061044b9190613aa2565b61053560006009611f57565b919050565b610542612d5d565b61054b82611f7d565b92915050565b610559612cd4565b6102df61056b36849003840184613bf8565b82610dca565b610579612caa565b610581612cd4565b610589612d13565b610591612d2d565b6000606082015260028152604080516020808201909252828152908301526105b98284610dca565b505060400151919050565b6105cc612caa565b6105d4612cd4565b6105dc612d13565b6105e4612d2d565b60006040820152600181819052506040805160208082019092528281529083015261060f8284610dca565b505060200151919050565b610622612cd4565b6102df6106343684900384018461367e565b8261203a565b610642612d7f565b600160005414156106fd5760006002805461065c906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610688906136d3565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed9190613899565b90506106fb60006007611f57565b505b6003600054141561088757600060028054610717906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610743906136d3565b80156107905780601f1061076557610100808354040283529160200191610790565b820191906000526020600020905b81548152906001019060200180831161077357829003601f168201915b50505050508060200190518101906107a89190613980565b90506107b2612e1b565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526101c084015183519091015260a08084015183519083166080909101526101608085015184519092019190915261018080850151845160c0908101919091526101a0808701518651951660e09586015261014080880151875161010090810191909152610120808a0151895190910152928801805188519092019190915294870151865190940193909352925184519091015292015181519092019190915251919050565b600660005414156108a157600060028054610717906136d3565b60076000541415610a2f576000600280546108bb906136d3565b80601f01602080910402602001604051908101604052809291908181526020018280546108e7906136d3565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b505050505080602001905181019061094c9190613aa2565b9050610956612e1b565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526102a084015183519091015260e08084015183519083166080909101526101a080850151845160a001526101c0850151845160c001526101e08501518451931692909101919091526101808084015183516101009081019190915261016080860151855161012090810191909152918601805186516101409081019190915292870151865190920191909152518451909201919091529092015181519092019190915251919050565b610a3b60006007611f57565b90565b610a46612cd4565b6102df610a583684900384018461367e565b8261222d565b600060016000541415610b1b57600060028054610a7a906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa6906136d3565b8015610af35780601f10610ac857610100808354040283529160200191610af3565b820191906000526020600020905b815481529060010190602001808311610ad657829003601f168201915b5050505050806020019051810190610b0b9190613899565b9050610b1960006008611f57565b505b60036000541415610bd857600060028054610b35906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b61906136d3565b8015610bae5780601f10610b8357610100808354040283529160200191610bae565b820191906000526020600020905b815481529060010190602001808311610b9157829003601f168201915b5050505050806020019051810190610bc69190613980565b905080608001518361045d9190613cac565b60066000541415610bf257600060028054610b35906136d3565b60076000541415610c9d57600060028054610c0c906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c38906136d3565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050505050806020019051810190610bc69190613aa2565b61053560006008611f57565b600060606000546002808054610cbe906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610cea906136d3565b8015610d375780601f10610d0c57610100808354040283529160200191610d37565b820191906000526020600020905b815481529060010190602001808311610d1a57829003601f168201915b50505050509050915091509091565b610d4e612cd4565b6102df610d603684900384018461367e565b82612358565b610d6e612d5d565b61054b82612595565b610d7f612caa565b610d87612cd4565b610d8f612d13565b610d97612d2d565b600060808201526003815260408051602080820190925282815290830152610dbf8284610dca565b505060600151919050565b610dda6007600054146026611f57565b8151610df5901580610dee57508251600154145b6027611f57565b600080805560028054610e07906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610e33906136d3565b8015610e805780601f10610e5557610100808354040283529160200191610e80565b820191906000526020600020905b815481529060010190602001808311610e6357829003601f168201915b5050505050806020019051810190610e989190613aa2565b9050610ea2612e2e565b610eb482610160015142106028611f57565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e184604051610ee39190613cc4565b60405180910390a16000602085015151516003811115610f0557610f0561339c565b14156111f5576001610f1633611f7d565b516001811115610f2857610f2861339c565b14610f34576000610f42565b610f3d33611f7d565b604001515b60208201819052610f57906005116018611f57565b6005816020015110610f6c5760f98152610f8f565b816101000151816020015160058110610f8757610f87613d24565b602002015181525b610f9b34156019611f57565b8051610280830151610fad9190613cac565b6040808301805192909252610260840151825160200152610240840151810151915191151591015260e08201518151610ff391610fec9133919061260d565b601a611f57565b6020810151606082015152600161100933612595565b51600181111561101b5761101b61339c565b14611027576000611035565b61103033612595565b604001515b60608201805160200191909152805133604091820152905190517f81cfa878e37c5a427622b6fd9f4613c2ddd6547b23911feb6e5919008b4c71af9161107a9161330c565b60405180910390a160608101518352336000908152600460209081526040909120805460ff19166001908117909155908201516110b79190613cac565b336000908152600460205260409020600101556110d2612f00565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b015181518701526101a08b01518151909501949094526101c08a01518451909301929092526101e0890151835196169501949094525143930192909252610200850151918401516111cc929190612623565b60208201805160e00191909152610220840151905161010001526111ef81612697565b50611c79565b600160208501515151600381111561120f5761120f61339c565b141561172e57600161122033611f7d565b5160018111156112325761123261339c565b1461123e57600061124c565b61124733611f7d565b604001515b60a08201819052600511801560c083015261126d5760006080820152611293565b8161012001518160a001516006811061128857611288613d24565b602002015160808201525b6112a56064826080015110601b611f57565b606481608001516112b69190613d3a565b6112c1906001613a8b565b826101a001516112d19190613d5c565b60e082018190526112e5903414601c611f57565b61028082015161010082018051919091526102608301518151602001526102408301516040908101518251901515910152610200830151905161132b9190600190612623565b81610120018190525061134e611347338460e00151600061260d565b601d611f57565b61136060018360a0015111601e611f57565b60c0820151610120820151602001515161137c9110601f611f57565b600161138733612595565b5160018111156113995761139961339c565b146113a55760006113b3565b6113ae33612595565b604001515b610140820190815260a082015161016083018051919091529051815160200152805133604091820152905190517f22ab421b831235205ea2791f6c36069d71a17123c4bdca7ee9db7fff0e9f6e0a9161140b9161330c565b60405180910390a1610160810151602084015260a08201516101a08301516114339190613d3a565b610180820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611472573d6000803e3d6000fd5b5060c0820151610120820151602001515161148d9190613a8b565b6101a0820180519190915261012082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c08301516114d59190339061299f565b6005816101400151106114ef5760006101c0820152611517565b8161014001518161014001516006811061150b5761150b613d24565b60200201516101c08201525b8060c001511561152e5760006101e0820152611555565b8161012001518160a001516006811061154957611549613d24565b60200201516101e08201525b6115686064826101e00151106020611f57565b611570612f00565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e080860151845193169201919091526101008085015183519091015261012080850151835190910152610140808501518351909101526101c083015190516116189190613a8b565b8361016001516116289190613cac565b602080830180519290925290516001910152610180808301519084015161164f9190613cac565b60208201516040015260808301516101a084015161166d9190613cac565b6020820151606001526101e082015161168890606490613d3a565b611693906001613a8b565b836101a001516116a39190613d5c565b836101c001516116b39190613cac565b6020820180516080019190915280513360a090910152514360c0909101526101208201516101a08301516116ea9190600190612623565b816020015160e001819052508161018001518260e001518461022001516117119190613cac565b61171b9190613a8b565b602082015161010001526111ef81612697565b60026020850151515160038111156117485761174861339c565b1415611a2b57600161175933612595565b51600181111561176b5761176b61339c565b14611777576000611785565b61178033612595565b604001515b610220820181905261179b906005116021611f57565b6005816102200151106117b55760f96102008201526117dd565b816101000151816102200151600581106117d1576117d1613d24565b60200201516102008201525b6117e934156022611f57565b8061020001518261028001516117ff9190613cac565b610240808301805192909252610260840151825160200152830151604090810151915191151591015260e082015161020082015161184a916118439133919061260d565b6023611f57565b600161185533611f7d565b5160018111156118675761186761339c565b14611873576000611881565b61187c33611f7d565b604001515b6102608201805191909152610220820151815160200152805133604091820152905190517f83bc84c524f4ca8fbd7db5006de0772ac39ecd3766d5fd4fd2dc4c5883a3a434916118d09161330c565b60405180910390a1610260810151604084810191909152336000908152600560205220805460ff191660019081179091556102208201516119119190613cac565b3360009081526005602052604090206001015561192c612f00565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102408401516111cc9290612623565b6003602085015151516003811115611a4557611a4561339c565b1415611c7957611a5734156024611f57565b61028080830151908201805191909152610260830151815160200152610240830151604090810151915191151591015260e0820151611aa490611a9d903390600061260d565b6025611f57565b6001611aaf33611f7d565b516001811115611ac157611ac161339c565b14611acd576000611adb565b611ad633611f7d565b604001515b6102a0820151526001611aed33612595565b516001811115611aff57611aff61339c565b14611b0b576000611b19565b611b1433612595565b604001515b6102a08201805160200191909152805133604091820152905190517f2322902db89cc6c7b901374451a2a7e26d7772cc3e91d24f1fa8e407e2741def91611b5f9161330c565b60405180910390a16102a08101516060840152611b7a612f00565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102808401516111cc9290612623565b50505050565b611c8f600160005414600f611f57565b8151611caa901580611ca357508251600154145b6010611f57565b600080805560028054611cbc906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054611ce8906136d3565b8015611d355780601f10611d0a57610100808354040283529160200191611d35565b820191906000526020600020905b815481529060010190602001808311611d1857829003601f168201915b5050505050806020019051810190611d4d9190613899565b9050611d57612f20565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d184604051611d869190613d7b565b60405180910390a1611d9a3415600c611f57565b6101408201515151611dae90600190613cac565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611df190611dea903390600161260d565b600d611f57565b8151611e09906001600160a01b03163314600e611f57565b611e11612f00565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e080870151855190920191909152610120808701518551941693909101929092526101608501518351610100908101919091526101808601518451909301929092526101a0850151835161014001525190840151611ecf9190613cac565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611f309290612623565b60208201805160e0019190915251600061010090910152611f5081612697565b5050505050565b816102df5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611f85612d5d565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611fb457611fb461339c565b141561202b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611ff557611ff561339c565b60018111156120065761200661339c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b61204a6003600054146012611f57565b815161206590158061205e57508251600154145b6013611f57565b600080805560028054612077906136d3565b80601f01602080910402602001604051908101604052809291908181526020018280546120a3906136d3565b80156120f05780601f106120c5576101008083540402835291602001916120f0565b820191906000526020600020905b8154815290600101906020018083116120d357829003601f168201915b50505050508060200190518101906121089190613980565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09836040516121399190613d7b565b60405180910390a161214d34156011611f57565b612155612f33565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a080850151845193169201919091526101c080840151835190910152810151439052611c79816129b8565b61223d6006600054146016611f57565b815161225890158061225157508251600154145b6017611f57565b60008080556002805461226a906136d3565b80601f0160208091040260200160405190810160405280929190818152602001828054612296906136d3565b80156122e35780601f106122b8576101008083540402835291602001916122e3565b820191906000526020600020905b8154815290600101906020018083116122c657829003601f168201915b50505050508060200190518101906122fb9190613980565b90507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88360405161232c9190613d7b565b60405180910390a161234034156014611f57565b805161214d906001600160a01b031633146015611f57565b612368600760005414602a611f57565b815161238390158061237c57508251600154145b602b611f57565b600080805560028054612395906136d3565b80601f01602080910402602001604051908101604052809291908181526020018280546123c1906136d3565b801561240e5780601f106123e35761010080835404028352916020019161240e565b820191906000526020600020905b8154815290600101906020018083116123f157829003601f168201915b50505050508060200190518101906124269190613aa2565b905061243b816101600151421015602c611f57565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e08360405161246a9190613d7b565b60405180910390a161247e34156029611f57565b612486612f00565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b01518a51820152610120808c01518b5190910152610140808c01518b51909101526101608b0151888b01805191909152805160009901989098526101808b01518851909701969096526101a08a01518751909501949094526101c08901518651909301929092526101e088015185519616950194909452825143940193909352610200850151825190930192909252610220840151905190910152611c7981612697565b61259d612d5d565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156125cc576125cc61339c565b141561202b576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611ff557611ff561339c565b600061261b83853085612ac4565b949350505050565b61262b612f61565b60005b60028110156126775784816002811061264957612649613d24565b602002015182826002811061266057612660613d24565b60200201528061266f81613d94565b91505061262e565b508181846002811061268b5761268b613d24565b60200201529392505050565b6040805180820190915260008082526020820152816020015160200151156128325760208281015160e0015181015180519101516126d59190613a8b565b81526126df612f8e565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151871681890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015280518701516101808b01528051909501516101a08a01528451909301516101c08901528351909101519095166101e08701528151850151610200870152815101516102208601528051840151830151610240860152805184015183015183015161026086015251909201518101515161028084015283516102a0840152600760005543600155905161280e91839101613df8565b60405160208183030381529060405260029080519060200190611c79929190613077565b60208281015160e00151810151805191015161284e9190613a8b565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561289c573d6000803e3d6000fd5b506128b9826000015160200151836020015160a00151600161299f565b6128c16130fb565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160e090810151861660a08089019190915289516101009081015160c08a01528a5161012090810151938a01939093528a5161014090810151918a0191909152868b01805151938a01939093528251860151908901528151909301516101608801528051909101516101808701525101519092166101a0840152838101516101c0840152600360005543600155905161280e91839101613f49565b6129aa838383612b9e565b6129b357600080fd5b505050565b6129c06130fb565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e09081015190850152845161010090810151908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519093169284019290925283516101c090810151908401526006600055436001559051612aa091839101613f49565b604051602081830303815290604052600290805190602001906129b3929190613077565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612b2b91614033565b60006040518083038185875af1925050503d8060008114612b68576040519150601f19603f3d011682016040523d82523d6000602084013e612b6d565b606091505b5091509150612b7e82826001612c6f565b5080806020019051810190612b93919061404f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612bfd91614033565b60006040518083038185875af1925050503d8060008114612c3a576040519150601f19603f3d011682016040523d82523d6000602084013e612c3f565b606091505b5091509150612c5082826002612c6f565b5080806020019051810190612c65919061404f565b9695505050505050565b60608315612c7e57508161045d565b825115612c8e5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611f74565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b6040518060800160405280612ce7612caa565b8152602001612cf4612caa565b8152602001612d01612caa565b8152602001612d0e612caa565b905290565b604051806040016040528060008152602001612d0e6131a7565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b6040805160608101909152806000815260006020820181905260409091015290565b604051806101c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001612df46131ba565b8152602001612e016131d8565b8152602001612e0e6131ba565b8152602001612d0e6131d8565b6040518060200160405280612d0e612d7f565b604051806102c001604052806000815260200160008152602001612e506131f6565b8152602001612e5d612caa565b8152602001600081526020016000815260200160001515815260200160008152602001612e886131f6565b8152602001612e95612f61565b815260200160008152602001612ea9612caa565b815260200160008152602001612ebd6131f6565b815260200160008152602001600081526020016000815260200160008152602001612ee66131f6565b8152602001612ef3612caa565b8152602001612d016131f6565b6040518060400160405280612f13613219565b8152602001612d0e61328d565b6040518060200160405280612d0e6131f6565b6040518060400160405280612f466130fb565b8152602001612d0e6040518060200160405280600081525090565b60405180604001604052806002905b612f786131f6565b815260200190600190039081612f705790505090565b604051806102c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001612ff56131ba565b81526020016130026131d8565b815260200161300f6131d8565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613048612f61565b81526020016000815260200161305c6131f6565b81526020016000815260200160008152602001600081525090565b828054613083906136d3565b90600052602060002090601f0160209004810192826130a557600085556130eb565b82601f106130be57805160ff19168380011785556130eb565b828001600101855582156130eb579182015b828111156130eb5782518255916020019190600101906130d0565b506130f79291506132ea565b5090565b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016131546131ba565b81526020016131616131d8565b815260200161316e6131d8565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280612d0e612d2d565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b604051806060016040528060008152602001600081526020016000151581525090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016132806131ba565b8152602001612e0e6131d8565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016132dd612f61565b8152602001600081525090565b5b808211156130f757600081556001016132eb565b6001600160a01b03169052565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b60006040828403121561334857600080fd5b50919050565b60006020828403121561336057600080fd5b5035919050565b6001600160a01b038116811461337c57600080fd5b50565b60006020828403121561339157600080fd5b813561045d81613367565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106133c9576133c961339c565b808352506020830151151560208301526040830151604083015292915050565b600060c0828403121561334857600080fd5b8060005b6005811015611c795781518452602093840193909101906001016133ff565b8060005b6006811015611c79578151845260209384019390910190600101613422565b6000610400820190508251825260208301516020830152604083015161346a60408401826132ff565b5060608301516060830152608083015161348760808401826132ff565b5060a083015160a083015260c083015160c083015260e08301516134ae60e08401826132ff565b5061010083810151908301526101208084015190830152610140808401516134d8828501826133fb565b50506101608301516134ee6101e084018261341e565b506101808301516135036102a08401826133fb565b506101a083015161351861034084018261341e565b5092915050565b60005b8381101561353a578181015183820152602001613522565b83811115611c795750506000910152565b828152604060208201526000825180604084015261357081606085016020870161351f565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c081016001600160401b03811182821017156135be576135be613585565b60405290565b6040516101e081016001600160401b03811182821017156135be576135be613585565b6040516102c081016001600160401b03811182821017156135be576135be613585565b604080519081016001600160401b03811182821017156135be576135be613585565b604051602081016001600160401b03811182821017156135be576135be613585565b60405160a081016001600160401b03811182821017156135be576135be613585565b801515811461337c57600080fd5b60006040828403121561369057600080fd5b604080519081016001600160401b03811182821017156136b2576136b2613585565b6040528235815260208301356136c781613670565b60208201529392505050565b600181811c908216806136e757607f821691505b6020821081141561334857634e487b7160e01b600052602260045260246000fd5b805161053581613367565b60006060828403121561372557600080fd5b604051606081016001600160401b038111828210171561374757613747613585565b80604052508091508251815260208301516020820152604083015161376b81613670565b6040919091015292915050565b600082601f83011261378957600080fd5b604080519081016001600160401b03811182821017156137ab576137ab613585565b6040528060c08401858111156137c057600080fd5b845b818110156137e4576137d48782613713565b83526020909201916060016137c2565b509195945050505050565b600082601f83011261380057600080fd5b60405160a081016001600160401b038111828210171561382257613822613585565b6040528060a084018581111561383757600080fd5b845b818110156137e4578051835260209283019201613839565b600082601f83011261386257600080fd5b60405160c081016001600160401b038111828210171561388457613884613585565b6040528060c084018581111561383757600080fd5b600061042082840312156138ac57600080fd5b6138b461359b565b6138bd83613708565b8152602083015160208201526138d560408401613708565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613926818501613708565b9082015261014061393985858301613778565b9082015261394b8461020085016137ef565b61016082015261395f846102a08501613851565b610180820152613973846103608501613851565b6101a08201529392505050565b60006103a0828403121561399357600080fd5b61399b6135c4565b6139a483613708565b81526139b260208401613708565b60208201526040830151604082015260608301516060820152608083015160808201526139e160a08401613708565b60a08201526139f38460c085016137ef565b60c0820152610160613a0785828601613851565b60e0830152613a1a856102208601613851565b6101008301526102e084015161012083015261030084015161014083015261032084015190820152610340830151610180820152613a5b6103608401613708565b6101a082015261038092909201516101c083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613a9d57613a9d613a75565b500390565b60006105608284031215613ab557600080fd5b613abd6135e7565b613ac683613708565b8152613ad460208401613708565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613b1760e08401613708565b60e0820152610100613b2b858286016137ef565b908201526101a0613b3e85858301613851565b610120830152610260613b5386828701613851565b610140840152610320850151610160840152610340850151610180840152610360850151828401526103808501516101c0840152613b946103a08601613708565b6101e0840152613ba8866103c08701613778565b610200840152610480850151610220840152613bc8866104a08701613713565b6102408401526105008501519083015250610520830151610280820152610540909201516102a083015250919050565b600081830360c0811215613c0b57600080fd5b613c1361360a565b8335815260a0601f1983011215613c2957600080fd5b613c3161362c565b9150613c3b61364e565b602085013560048110613c4d57600080fd5b81526040850135613c5d81613670565b60208201526060850135613c7081613670565b60408201526080850135613c8381613670565b606082015260a0850135613c9681613670565b6080820152825260208101919091529392505050565b60008219821115613cbf57613cbf613a75565b500190565b81518152602082015151805160c08301919060048110613ce657613ce661339c565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b600082613d5757634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615613d7657613d76613a75565b500290565b8151815260209182015115159181019190915260400190565b6000600019821415613da857613da8613a75565b5060010190565b80518252602080820151908301526040908101511515910152565b8060005b6002811015611c7957613de2848351613daf565b6060939093019260209190910190600101613dce565b600061056082019050613e0c8284516132ff565b6020830151613e1e60208401826132ff565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151613e6360e08401826132ff565b5061010080840151613e77828501826133fb565b50506101208301516101a0613e8e8185018361341e565b6101408501519150610260613ea58186018461341e565b610160860151610320860152610180860151610340860152818601516103608601526101c08601516103808601526101e08601519250613ee96103a08601846132ff565b6102008601519250613eff6103c0860184613dca565b6102208601516104808601526102408601519250613f216104a0860184613daf565b85015161050085015250506102808301516105208301526102a0909201516105409091015290565b60006103a082019050613f5d8284516132ff565b6020830151613f6f60208401826132ff565b5060408301516040830152606083015160608301526080830151608083015260a0830151613fa060a08401826132ff565b5060c0830151613fb360c08401826133fb565b5060e0830151610160613fc88185018361341e565b6101008501519150613fde61022085018361341e565b6101208501516102e0850152610140850151610300850152840151610320840152506101808301516103408301526101a08301516140206103608401826132ff565b506101c083015161038083015292915050565b6000825161404581846020870161351f565b9190910192915050565b60006020828403121561406157600080fd5b815161045d8161367056fea2646970667358221220b7f533bf31a619f313bb9e61bf2f5ffa19e94af9febc88d77f5872f8fa6b51aa64736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122070dd21454242db5fc69e73e17bd37a9cc73d672c86654f521086a91e2f56fe3264736f6c634300080c0033`,
  BytecodeLen: 24116,
  Which: `o1`,
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
    at: './index.rsh:232:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:372:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:381:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:379:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:248:23:after expr stmt semicolon',
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
  "Api_getParticipantStats": Api_getParticipantStats,
  "Buyer": Buyer,
  "Funder": Funder
  };
export const _APIs = {
  Api: {
    buyDiscount: Api_buyDiscount,
    buyTicket: Api_buyTicket,
    buyTimeReduction: Api_buyTimeReduction,
    getParticipantStats: Api_getParticipantStats
    }
  };

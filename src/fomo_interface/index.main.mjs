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
              const [v1112, v1113, v1114, v1115, v1116, v1117, v1118, v1119, v1121, v1134, v1162, v1163, v1164, v1166] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async () => {
                
                const v2056 = {
                  currentPrice: v1186,
                  currentTotal: v1188,
                  currentWinner: v1189,
                  deadline: v1115,
                  deltaDeadline: v1116,
                  discountPercents: v1164,
                  discountPrices: v1163,
                  endTimestamp: v1183,
                  nftPrize: v1114,
                  paidToFunder: v1185,
                  timeReductionPrices: v1163,
                  timeReductionSecs: v1166,
                  token: v1134,
                  tokenOwnedByUsers: v2051
                  };
                
                return v2056;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async () => {
                
                const v2056 = {
                  currentPrice: v1186,
                  currentTotal: v1188,
                  currentWinner: v1189,
                  deadline: v1115,
                  deltaDeadline: v1116,
                  discountPercents: v1164,
                  discountPrices: v1163,
                  endTimestamp: v1183,
                  nftPrize: v1114,
                  paidToFunder: v1185,
                  timeReductionPrices: v1163,
                  timeReductionSecs: v1166,
                  token: v1134,
                  tokenOwnedByUsers: v2051
                  };
                
                return v2056;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = svs;
              return (await ((async () => {
                
                const v1232 = {
                  currentPrice: v1186,
                  currentTotal: v1188,
                  currentWinner: v1189,
                  deadline: v1115,
                  deltaDeadline: v1116,
                  discountPercents: v1164,
                  discountPrices: v1163,
                  endTimestamp: v1183,
                  nftPrize: v1114,
                  paidToFunder: v1185,
                  timeReductionPrices: v1163,
                  timeReductionSecs: v1166,
                  token: v1134,
                  tokenOwnedByUsers: v1227
                  };
                
                return v1232;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1112, v1113, v1114, v1115, v1116, v1117, v1118, v1119, v1121, v1134, v1162, v1163, v1164, v1166] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async (_v2057 ) => {
                  const v2057 = stdlib.protect(ctc1, _v2057, null);
                
                const v2058 = stdlib.add(v2057, v1117);
                
                return v2058;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async (_v2057 ) => {
                  const v2057 = stdlib.protect(ctc1, _v2057, null);
                
                const v2058 = stdlib.add(v2057, v1117);
                
                return v2058;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = svs;
              return (await ((async (_v1233 ) => {
                  const v1233 = stdlib.protect(ctc1, _v1233, null);
                
                const v1234 = stdlib.add(v1233, v1117);
                
                return v1234;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1112, v1113, v1114, v1115, v1116, v1117, v1118, v1119, v1121, v1134, v1162, v1163, v1164, v1166] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async (_v2059 ) => {
                  const v2059 = stdlib.protect(ctc1, _v2059, null);
                
                const v2060 = stdlib.sub(v2059, v1117);
                
                return v2060;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051] = svs;
              return (await ((async (_v2059 ) => {
                  const v2059 = stdlib.protect(ctc1, _v2059, null);
                
                const v2060 = stdlib.sub(v2059, v1117);
                
                return v2060;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = svs;
              return (await ((async (_v1235 ) => {
                  const v1235 = stdlib.protect(ctc1, _v1235, null);
                
                const v1236 = stdlib.sub(v1235, v1117);
                
                return v1236;}))(...args));
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
  
  
  const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1253 = ctc.selfAddress();
  const v1255 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyDiscount0_246" (defined at: ./index.rsh:302:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1253), null);
  const v1257 = stdlib.fromSome(v1256, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
  const v1258 = stdlib.lt(v1257, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1258, {
    at: './index.rsh:304:23:application',
    fs: ['at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:304:14:application call to [unknown function] (defined at: ./index.rsh:304:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyDiscount0_246" (defined at: ./index.rsh:302:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1261 = ['Api_buyDiscount0_246', v1255];
  
  let v1282;
  const v1286 = stdlib.ge(v1257, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1286) {
    v1282 = stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1289 = v1163[v1257];
    v1282 = v1289;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227, v1261],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:305:18:decimal', stdlib.UInt_max, 0), [[v1282, v1134]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
      
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1355;
          const v1356 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1346), null);
          const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1358 = stdlib.lt(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1359 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1359) {
            v1355 = stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1362 = v1163[v1357];
            v1355 = v1362;
            }
          ;
          const v1418 = stdlib.add(v1226, v1355);
          const v1422 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1423 = [v1418, v1224, v1422];
          const v1424 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1423);
          sim_r.txns.push({
            amt: v1355,
            kind: 'to',
            tok: v1134
            });
          const v1429 = null;
          const v1430 = await txn1.getOutput('Api_buyDiscount', 'v1429', ctc0, v1429);
          
          const v1435 = stdlib.add(v1357, stdlib.checkedBigNumberify('./index.rsh:314:47:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1346, v1435);
          const v3503 = v1183;
          const v3505 = v1185;
          const v3506 = v1186;
          const v3507 = v1188;
          const v3508 = v1189;
          const v3510 = v1424;
          const v3511 = v1197;
          const v3512 = v1424[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3513 = v3512[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3514 = v3512[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
          const v3515 = stdlib.sub(v3513, v3514);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          
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
  const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
  switch (v1347[0]) {
    case 'Api_buyDiscount0_246': {
      const v1350 = v1347[1];
      undefined /* setApiDetails */;
      let v1355;
      const v1356 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
      const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
      const v1358 = stdlib.lt(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1358, {
        at: './index.rsh:163:12:application',
        fs: ['at ./index.rsh:305:38:application call to "getDiscountPrice" (defined at: ./index.rsh:161:36:function exp)', 'at ./index.rsh:305:14:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1359 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1359) {
        v1355 = stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1362 = v1163[v1357];
        v1355 = v1362;
        }
      ;
      const v1418 = stdlib.add(v1226, v1355);
      const v1422 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
      const v1423 = [v1418, v1224, v1422];
      const v1424 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1423);
      ;
      const v1429 = null;
      const v1430 = await txn1.getOutput('Api_buyDiscount', 'v1429', ctc0, v1429);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1350, v1430), {
          at: './index.rsh:303:11:application',
          fs: ['at ./index.rsh:303:11:application call to [unknown function] (defined at: ./index.rsh:303:11:function exp)', 'at ./index.rsh:310:21:application call to "callback" (defined at: ./index.rsh:306:22:function exp)', 'at ./index.rsh:306:22:application call to [unknown function] (defined at: ./index.rsh:306:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v1435 = stdlib.add(v1357, stdlib.checkedBigNumberify('./index.rsh:314:47:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1346, v1435);
      const v3503 = v1183;
      const v3505 = v1185;
      const v3506 = v1186;
      const v3507 = v1188;
      const v3508 = v1189;
      const v3510 = v1424;
      const v3511 = v1197;
      const v3512 = v1424[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3513 = v3512[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3514 = v3512[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
      const v3515 = stdlib.sub(v3513, v3514);
      return;
      
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1523 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1696 = v1347[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1869 = v1347[1];
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
  
  
  const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1241 = ctc.selfAddress();
  const v1243 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:14:application call to [unknown function] (defined at: ./index.rsh:273:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1245 = stdlib.gt(v1118, stdlib.checkedBigNumberify('./index.rsh:274:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1245, {
    at: './index.rsh:274:19:application',
    fs: ['at ./index.rsh:273:14:application call to [unknown function] (defined at: ./index.rsh:273:14:function exp)', 'at ./index.rsh:273:14:application call to [unknown function] (defined at: ./index.rsh:273:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1248 = stdlib.gt(v1226, v1119);
  stdlib.assert(v1248, {
    at: './index.rsh:275:19:application',
    fs: ['at ./index.rsh:273:14:application call to [unknown function] (defined at: ./index.rsh:273:14:function exp)', 'at ./index.rsh:273:14:application call to [unknown function] (defined at: ./index.rsh:273:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyTicket0_246" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1251 = ['Api_buyTicket0_246', v1243];
  
  let v1300;
  const v1301 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1241), null);
  const v1302 = stdlib.fromSome(v1301, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
  const v1303 = stdlib.ge(v1302, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1303) {
    v1300 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1306 = v1164[v1302];
    v1300 = v1306;
    }
  const v1307 = stdlib.lt(v1300, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1307, {
    at: './index.rsh:183:12:application',
    fs: ['at ./index.rsh:277:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:277:14:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1308 = stdlib.div(v1300, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
  const v1309 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1308);
  const v1310 = stdlib.mul(v1186, v1309);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227, v1251],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1310, [[stdlib.checkedBigNumberify('./index.rsh:277:54:decimal', stdlib.UInt_max, 0), v1134]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
      
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1543;
          const v1544 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1346), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1546 = stdlib.ge(v1545, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1546) {
            v1543 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1549 = v1164[v1545];
            v1543 = v1549;
            }
          const v1550 = stdlib.lt(v1543, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1551 = stdlib.div(v1543, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1552 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1551);
          const v1553 = stdlib.mul(v1186, v1552);
          const v1588 = stdlib.add(v1197, v1553);
          sim_r.txns.push({
            amt: v1553,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1595 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1596 = [v1226, v1224, v1595];
          const v1597 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1596);
          ;
          const v1615 = stdlib.gt(v1118, stdlib.checkedBigNumberify('./index.rsh:279:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1616 = v1597[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 1)];
          const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 0)];
          const v1618 = stdlib.gt(v1617, v1119);
          ;
          const v1619 = null;
          const v1620 = await txn1.getOutput('Api_buyTicket', 'v1619', ctc0, v1619);
          
          const v1625 = stdlib.div(v1186, v1118);
          const v1626 = stdlib.add(v1186, v1117);
          const v1631 = stdlib.sub(v1588, v1625);
          sim_r.txns.push({
            amt: v1625,
            kind: 'from',
            to: v1112,
            tok: undefined /* Nothing */
            });
          const v1637 = stdlib.sub(v1617, v1119);
          const v1640 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1)];
          const v1641 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 2)];
          const v1642 = [v1637, v1640, v1641];
          const v1643 = stdlib.Array_set(v1597, stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1), v1642);
          sim_r.txns.push({
            amt: v1119,
            kind: 'from',
            to: v1346,
            tok: v1134
            });
          let v1644;
          const v1645 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1346), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:216:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1166[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.sub(v1116, v1644);
          let v1653;
          if (v1546) {
            v1653 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1659 = v1164[v1545];
            v1653 = v1659;
            }
          const v1660 = stdlib.lt(v1653, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1661 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1662 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1661);
          const v1663 = stdlib.mul(v1186, v1662);
          const v1664 = stdlib.add(v1188, v1663);
          const v1665 = stdlib.add(v1185, v1625);
          const v1666 = stdlib.add(v1183, v1651);
          const v3638 = v1666;
          const v3640 = v1665;
          const v3641 = v1626;
          const v3642 = v1664;
          const v3643 = v1346;
          const v3645 = v1643;
          const v3646 = v1631;
          const v3647 = v1643[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3648 = v3647[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3649 = v3647[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
          const v3650 = stdlib.sub(v3648, v3649);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          
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
  const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
  switch (v1347[0]) {
    case 'Api_buyDiscount0_246': {
      const v1350 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1523 = v1347[1];
      undefined /* setApiDetails */;
      let v1543;
      const v1544 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
      const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
      const v1546 = stdlib.ge(v1545, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1546) {
        v1543 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1549 = v1164[v1545];
        v1543 = v1549;
        }
      const v1550 = stdlib.lt(v1543, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1550, {
        at: './index.rsh:183:12:application',
        fs: ['at ./index.rsh:277:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:277:14:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1551 = stdlib.div(v1543, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
      const v1552 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1551);
      const v1553 = stdlib.mul(v1186, v1552);
      const v1588 = stdlib.add(v1197, v1553);
      ;
      const v1595 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
      const v1596 = [v1226, v1224, v1595];
      const v1597 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1596);
      ;
      const v1615 = stdlib.gt(v1118, stdlib.checkedBigNumberify('./index.rsh:279:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1615, {
        at: './index.rsh:279:20:application',
        fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1616 = v1597[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 1)];
      const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 0)];
      const v1618 = stdlib.gt(v1617, v1119);
      stdlib.assert(v1618, {
        at: './index.rsh:280:20:application',
        fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1619 = null;
      const v1620 = await txn1.getOutput('Api_buyTicket', 'v1619', ctc0, v1619);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1523, v1620), {
          at: './index.rsh:272:11:application',
          fs: ['at ./index.rsh:272:11:application call to [unknown function] (defined at: ./index.rsh:272:11:function exp)', 'at ./index.rsh:281:21:application call to "callback" (defined at: ./index.rsh:278:22:function exp)', 'at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1625 = stdlib.div(v1186, v1118);
      const v1626 = stdlib.add(v1186, v1117);
      const v1631 = stdlib.sub(v1588, v1625);
      ;
      const v1637 = stdlib.sub(v1617, v1119);
      const v1640 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1)];
      const v1641 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 2)];
      const v1642 = [v1637, v1640, v1641];
      const v1643 = stdlib.Array_set(v1597, stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1), v1642);
      ;
      let v1644;
      const v1645 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
      const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
      const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1647) {
        v1644 = stdlib.checkedBigNumberify('./index.rsh:216:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1650 = v1166[v1646];
        v1644 = v1650;
        }
      const v1651 = stdlib.sub(v1116, v1644);
      let v1653;
      if (v1546) {
        v1653 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1659 = v1164[v1545];
        v1653 = v1659;
        }
      const v1660 = stdlib.lt(v1653, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1660, {
        at: './index.rsh:183:12:application',
        fs: ['at ./index.rsh:295:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1661 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
      const v1662 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1661);
      const v1663 = stdlib.mul(v1186, v1662);
      const v1664 = stdlib.add(v1188, v1663);
      const v1665 = stdlib.add(v1185, v1625);
      const v1666 = stdlib.add(v1183, v1651);
      const v3638 = v1666;
      const v3640 = v1665;
      const v3641 = v1626;
      const v3642 = v1664;
      const v3643 = v1346;
      const v3645 = v1643;
      const v3646 = v1631;
      const v3647 = v1643[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3648 = v3647[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3649 = v3647[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
      const v3650 = stdlib.sub(v3648, v3649);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1696 = v1347[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1869 = v1347[1];
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
  
  
  const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1263 = ctc.selfAddress();
  const v1265 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:327:14:application call to [unknown function] (defined at: ./index.rsh:327:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyTimeReduction0_246" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1266 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1263), null);
  const v1267 = stdlib.fromSome(v1266, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
  const v1268 = stdlib.lt(v1267, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1268, {
    at: './index.rsh:327:23:application',
    fs: ['at ./index.rsh:327:14:application call to [unknown function] (defined at: ./index.rsh:327:14:function exp)', 'at ./index.rsh:327:14:application call to [unknown function] (defined at: ./index.rsh:327:14:function exp)', 'at ./index.rsh:241:23:application call to "runApi_buyTimeReduction0_246" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1271 = ['Api_buyTimeReduction0_246', v1265];
  
  let v1321;
  const v1325 = stdlib.ge(v1267, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1325) {
    v1321 = stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1328 = v1163[v1267];
    v1321 = v1328;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227, v1271],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:328:18:decimal', stdlib.UInt_max, 0), [[v1321, v1134]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
      
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1734;
          const v1735 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1346), null);
          const v1736 = stdlib.fromSome(v1735, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1737 = stdlib.lt(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1738 = stdlib.ge(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1738) {
            v1734 = stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1741 = v1163[v1736];
            v1734 = v1741;
            }
          ;
          const v1764 = stdlib.add(v1226, v1734);
          const v1768 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1769 = [v1764, v1224, v1768];
          const v1770 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1769);
          sim_r.txns.push({
            amt: v1734,
            kind: 'to',
            tok: v1134
            });
          const v1845 = null;
          const v1846 = await txn1.getOutput('Api_buyTimeReduction', 'v1845', ctc0, v1845);
          
          const v1851 = stdlib.add(v1736, stdlib.checkedBigNumberify('./index.rsh:337:57:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1346, v1851);
          const v3773 = v1183;
          const v3775 = v1185;
          const v3776 = v1186;
          const v3777 = v1188;
          const v3778 = v1189;
          const v3780 = v1770;
          const v3781 = v1197;
          const v3782 = v1770[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3783 = v3782[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3784 = v3782[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
          const v3785 = stdlib.sub(v3783, v3784);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          
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
  const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
  switch (v1347[0]) {
    case 'Api_buyDiscount0_246': {
      const v1350 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1523 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1696 = v1347[1];
      undefined /* setApiDetails */;
      let v1734;
      const v1735 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
      const v1736 = stdlib.fromSome(v1735, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
      const v1737 = stdlib.lt(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1737, {
        at: './index.rsh:204:12:application',
        fs: ['at ./index.rsh:328:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:328:14:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1738 = stdlib.ge(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1738) {
        v1734 = stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1741 = v1163[v1736];
        v1734 = v1741;
        }
      ;
      const v1764 = stdlib.add(v1226, v1734);
      const v1768 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
      const v1769 = [v1764, v1224, v1768];
      const v1770 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1769);
      ;
      const v1845 = null;
      const v1846 = await txn1.getOutput('Api_buyTimeReduction', 'v1845', ctc0, v1845);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1696, v1846), {
          at: './index.rsh:326:11:application',
          fs: ['at ./index.rsh:326:11:application call to [unknown function] (defined at: ./index.rsh:326:11:function exp)', 'at ./index.rsh:333:21:application call to "callback" (defined at: ./index.rsh:329:22:function exp)', 'at ./index.rsh:329:22:application call to [unknown function] (defined at: ./index.rsh:329:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v1851 = stdlib.add(v1736, stdlib.checkedBigNumberify('./index.rsh:337:57:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1346, v1851);
      const v3773 = v1183;
      const v3775 = v1185;
      const v3776 = v1186;
      const v3777 = v1188;
      const v3778 = v1189;
      const v3780 = v1770;
      const v3781 = v1197;
      const v3782 = v1770[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3783 = v3782[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3784 = v3782[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
      const v3785 = stdlib.sub(v3783, v3784);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1869 = v1347[1];
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
  const ctc12 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1]]);
  
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
  
  
  const [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1275 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:348:13:application call to [unknown function] (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:241:23:application call to "runApi_getParticipantStats0_246" (defined at: ./index.rsh:348:13:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1279 = ['Api_getParticipantStats0_246', v1275];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227, v1279],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:348:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 0), v1134]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
      
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v1941 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1942 = [v1226, v1224, v1941];
          const v1943 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1942);
          ;
          const v2031 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1346), null);
          const v2032 = stdlib.fromSome(v2031, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v2033 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1346), null);
          const v2034 = stdlib.fromSome(v2033, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v2035 = {
            discountLevel: v2032,
            timeReductionLevel: v2034
            };
          const v2036 = await txn1.getOutput('Api_getParticipantStats', 'v2035', ctc12, v2035);
          
          const v3908 = v1183;
          const v3910 = v1185;
          const v3911 = v1186;
          const v3912 = v1188;
          const v3913 = v1189;
          const v3915 = v1943;
          const v3916 = v1197;
          const v3917 = v1943[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3918 = v3917[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
          const v3919 = v3917[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
          const v3920 = stdlib.sub(v3918, v3919);
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
  const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn1;
  switch (v1347[0]) {
    case 'Api_buyDiscount0_246': {
      const v1350 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTicket0_246': {
      const v1523 = v1347[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_246': {
      const v1696 = v1347[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_246': {
      const v1869 = v1347[1];
      undefined /* setApiDetails */;
      ;
      const v1941 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
      const v1942 = [v1226, v1224, v1941];
      const v1943 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1942);
      ;
      const v2031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
      const v2032 = stdlib.fromSome(v2031, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
      const v2033 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
      const v2034 = stdlib.fromSome(v2033, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
      const v2035 = {
        discountLevel: v2032,
        timeReductionLevel: v2034
        };
      const v2036 = await txn1.getOutput('Api_getParticipantStats', 'v2035', ctc12, v2035);
      if (v771) {
        stdlib.protect(ctc0, await interact.out(v1869, v2036), {
          at: './index.rsh:349:11:application',
          fs: ['at ./index.rsh:349:11:application call to [unknown function] (defined at: ./index.rsh:349:11:function exp)', 'at ./index.rsh:355:21:application call to "callback" (defined at: ./index.rsh:350:22:function exp)', 'at ./index.rsh:350:22:application call to [unknown function] (defined at: ./index.rsh:350:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v3908 = v1183;
      const v3910 = v1185;
      const v3911 = v1186;
      const v3912 = v1188;
      const v3913 = v1189;
      const v3915 = v1943;
      const v3916 = v1197;
      const v3917 = v1943[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3918 = v3917[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
      const v3919 = v3917[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
      const v3920 = stdlib.sub(v3918, v3919);
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
  const ctc6 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1]]);
  const ctc7 = stdlib.T_Address;
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
  
  
  const v1091 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1092 = [v1091, v1091];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1113, v1114, v1115, v1116, v1117, v1118, v1119], secs: v1121, time: v1120, didSend: v52, from: v1112 } = txn1;
  const v1122 = v1092[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0)];
  const v1124 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 1)];
  const v1125 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 2)];
  const v1126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1124, v1125];
  const v1127 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0), v1126);
  ;
  ;
  const v1129 = 'Metafomo                        ';
  const v1130 = 'METAFOMO';
  const v1131 = 'https://metalabs.technology                                                                     ';
  const v1132 = '                                ';
  const v1133 = undefined /* TokenNew */;
  const v1134 = await txn1.getOutput('internal', 'v1133', ctc3, v1133);
  const v1135 = [v1114];
  const v2110 = v1135[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2114 = stdlib.tokenEq(v1134, v2110);
  const v1143 = v2114 ? false : true;
  stdlib.assert(v1143, {
    at: './index.rsh:140:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1144 = v1127[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1147 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
  const v1148 = [stdlib.UInt_max, v1146, v1147];
  const v1149 = stdlib.Array_set(v1127, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1148);
  const v1151 = v1149[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1152 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
  const v1154 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
  const v1155 = [v1152, stdlib.UInt_max, v1154];
  const v1156 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1155);
  const v1157 = v1156[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1158 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
  const v1159 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1161 = [v1158, v1159, false];
  const v1162 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1161);
  const v1163 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1164 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:228:28:application',
    fs: ['at ./index.rsh:228:28:application call to [unknown function] (defined at: ./index.rsh:228:28:function exp)', 'at ./index.rsh:228:28:application call to "liftedInteract" (defined at: ./index.rsh:228:28:application)'],
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
  const {data: [], secs: v1170, time: v1169, didSend: v169, from: v1168 } = txn2;
  ;
  const v1171 = v1162[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
  const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
  const v1173 = stdlib.add(v1172, stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, 1));
  const v1176 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 1)];
  const v1177 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 2)];
  const v1178 = [v1173, v1176, v1177];
  const v1179 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0), v1178);
  ;
  const v1180 = stdlib.addressEq(v1112, v1168);
  stdlib.assert(v1180, {
    at: './index.rsh:230:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1182 = stdlib.add(v1121, v1115);
  let v1183 = v1182;
  let v1184 = true;
  let v1185 = stdlib.checkedBigNumberify('./index.rsh:241:59:decimal', stdlib.UInt_max, 0);
  let v1186 = v1113;
  let v1188 = stdlib.checkedBigNumberify('./index.rsh:241:43:decimal', stdlib.UInt_max, 0);
  let v1189 = v1112;
  let v1190 = v1169;
  let v1196 = v1179;
  let v1197 = stdlib.checkedBigNumberify('./index.rsh:123:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1184;})()) {
    const v1223 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
    const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
    const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
    const v1227 = stdlib.sub(v1224, v1226);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1183],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1190,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:361:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2044, time: v2043, didSend: v895, from: v2042 } = txn4;
          
          ;
          const cv1183 = v1183;
          const cv1184 = false;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v2043;
          const cv1196 = v1196;
          const cv1197 = v1197;
          
          await (async () => {
            const v1183 = cv1183;
            const v1184 = cv1184;
            const v1185 = cv1185;
            const v1186 = cv1186;
            const v1188 = cv1188;
            const v1189 = cv1189;
            const v1190 = cv1190;
            const v1196 = cv1196;
            const v1197 = cv1197;
            
            if (await (async () => {
              
              return v1184;})()) {
              const v1223 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
              const v1227 = stdlib.sub(v1224, v1226);
              sim_r.isHalt = false;
              }
            else {
              const v2047 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v2048 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v2050 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
              const v2051 = stdlib.sub(v2048, v2050);
              sim_r.txns.push({
                amt: v1197,
                kind: 'from',
                to: v1189,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:366:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1189,
                tok: v1114
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc7, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2044, time: v2043, didSend: v895, from: v2042 } = txn4;
      ;
      const cv1183 = v1183;
      const cv1184 = false;
      const cv1185 = v1185;
      const cv1186 = v1186;
      const cv1188 = v1188;
      const cv1189 = v1189;
      const cv1190 = v2043;
      const cv1196 = v1196;
      const cv1197 = v1197;
      
      v1183 = cv1183;
      v1184 = cv1184;
      v1185 = cv1185;
      v1186 = cv1186;
      v1188 = cv1188;
      v1189 = cv1189;
      v1190 = cv1190;
      v1196 = cv1196;
      v1197 = cv1197;
      
      continue;
      }
    else {
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn3;
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          undefined /* setApiDetails */;
          let v1355;
          const v1356 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1358 = stdlib.lt(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1358, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:305:38:application call to "getDiscountPrice" (defined at: ./index.rsh:161:36:function exp)', 'at ./index.rsh:305:14:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1359 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1359) {
            v1355 = stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1362 = v1163[v1357];
            v1355 = v1362;
            }
          ;
          const v1418 = stdlib.add(v1226, v1355);
          const v1422 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1423 = [v1418, v1224, v1422];
          const v1424 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1423);
          ;
          const v1429 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1429', ctc0, v1429);
          const v1435 = stdlib.add(v1357, stdlib.checkedBigNumberify('./index.rsh:314:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1346, v1435);
          if (v771) {
            stdlib.protect(ctc0, await interact.updateDiscountLevel(v1435), {
              at: './index.rsh:318:45:application',
              fs: ['at ./index.rsh:316:23:application call to [unknown function] (defined at: ./index.rsh:316:27:function exp)', 'at ./index.rsh:306:22:application call to [unknown function] (defined at: ./index.rsh:306:22:function exp)'],
              msg: 'updateDiscountLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1424;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          undefined /* setApiDetails */;
          let v1543;
          const v1544 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1546 = stdlib.ge(v1545, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1546) {
            v1543 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1549 = v1164[v1545];
            v1543 = v1549;
            }
          const v1550 = stdlib.lt(v1543, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1550, {
            at: './index.rsh:183:12:application',
            fs: ['at ./index.rsh:277:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:277:14:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1551 = stdlib.div(v1543, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1552 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1551);
          const v1553 = stdlib.mul(v1186, v1552);
          const v1588 = stdlib.add(v1197, v1553);
          ;
          const v1595 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1596 = [v1226, v1224, v1595];
          const v1597 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1596);
          ;
          const v1615 = stdlib.gt(v1118, stdlib.checkedBigNumberify('./index.rsh:279:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1615, {
            at: './index.rsh:279:20:application',
            fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1616 = v1597[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 1)];
          const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 0)];
          const v1618 = stdlib.gt(v1617, v1119);
          stdlib.assert(v1618, {
            at: './index.rsh:280:20:application',
            fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1619 = null;
          await txn3.getOutput('Api_buyTicket', 'v1619', ctc0, v1619);
          const v1625 = stdlib.div(v1186, v1118);
          const v1626 = stdlib.add(v1186, v1117);
          stdlib.protect(ctc0, await interact.showPurchase(v1346, v1186, v1626), {
            at: './index.rsh:286:51:application',
            fs: ['at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:27:function exp)', 'at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1631 = stdlib.sub(v1588, v1625);
          ;
          const v1637 = stdlib.sub(v1617, v1119);
          const v1640 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1)];
          const v1641 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 2)];
          const v1642 = [v1637, v1640, v1641];
          const v1643 = stdlib.Array_set(v1597, stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1), v1642);
          ;
          let v1644;
          const v1645 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:216:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1166[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.sub(v1116, v1644);
          let v1653;
          if (v1546) {
            v1653 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1659 = v1164[v1545];
            v1653 = v1659;
            }
          const v1660 = stdlib.lt(v1653, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1660, {
            at: './index.rsh:183:12:application',
            fs: ['at ./index.rsh:295:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1661 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1662 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1661);
          const v1663 = stdlib.mul(v1186, v1662);
          const v1664 = stdlib.add(v1188, v1663);
          const v1665 = stdlib.add(v1185, v1625);
          const v1666 = stdlib.add(v1183, v1651);
          const cv1183 = v1666;
          const cv1184 = true;
          const cv1185 = v1665;
          const cv1186 = v1626;
          const cv1188 = v1664;
          const cv1189 = v1346;
          const cv1190 = v1348;
          const cv1196 = v1643;
          const cv1197 = v1631;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          undefined /* setApiDetails */;
          let v1734;
          const v1735 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v1736 = stdlib.fromSome(v1735, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1737 = stdlib.lt(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1737, {
            at: './index.rsh:204:12:application',
            fs: ['at ./index.rsh:328:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:328:14:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1738 = stdlib.ge(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1738) {
            v1734 = stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1741 = v1163[v1736];
            v1734 = v1741;
            }
          ;
          const v1764 = stdlib.add(v1226, v1734);
          const v1768 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1769 = [v1764, v1224, v1768];
          const v1770 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1769);
          ;
          const v1845 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1845', ctc0, v1845);
          const v1851 = stdlib.add(v1736, stdlib.checkedBigNumberify('./index.rsh:337:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1346, v1851);
          if (v771) {
            stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1851), {
              at: './index.rsh:341:50:application',
              fs: ['at ./index.rsh:339:23:application call to [unknown function] (defined at: ./index.rsh:339:27:function exp)', 'at ./index.rsh:329:22:application call to [unknown function] (defined at: ./index.rsh:329:22:function exp)'],
              msg: 'updateTimeReductionLevel',
              who: 'Buyer'
              });
            }
          else {
            }
          
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1770;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          undefined /* setApiDetails */;
          ;
          const v1941 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1942 = [v1226, v1224, v1941];
          const v1943 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1942);
          ;
          const v2031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v2032 = stdlib.fromSome(v2031, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v2033 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v2034 = stdlib.fromSome(v2033, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v2035 = {
            discountLevel: v2032,
            timeReductionLevel: v2034
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2035', ctc6, v2035);
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1943;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        }}
    
    }
  const v2047 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
  const v2048 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
  const v2050 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
  const v2051 = stdlib.sub(v2048, v2050);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1189), {
    at: './index.rsh:108:29:application',
    fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:32:function exp)', 'at ./index.rsh:368:16:application call to "showOutcome" (defined at: ./index.rsh:106:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1190,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:371:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2084, time: v2083, didSend: v932, from: v2082 } = txn3;
      
      ;
      const v2085 = v2083;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1114
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
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2084, time: v2083, didSend: v932, from: v2082 } = txn3;
  ;
  let v2085 = v2083;
  
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
    const {data: [], secs: v2097, time: v2096, didSend: v941, from: v2095 } = txn4;
    ;
    const v2098 = stdlib.addressEq(v1112, v2095);
    stdlib.assert(v2098, {
      at: './index.rsh:374:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2085 = v2096;
    
    v2085 = cv2085;
    
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
  const ctc7 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1]]);
  const ctc8 = stdlib.T_Address;
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
  
  
  const v1091 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1092 = [v1091, v1091];
  const v1103 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:128:38:application',
    fs: ['at ./index.rsh:126:16:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1104 = v1103.ticketPrice;
  const v1105 = v1103.nftPrize;
  const v1106 = v1103.deadline;
  const v1107 = v1103.deltaDeadline;
  const v1108 = v1103.unitPrice;
  const v1109 = v1103.ticketFeeDenominator;
  const v1110 = v1103.tokensGivenPerTicket;
  const v1111 = stdlib.gt(v1109, stdlib.checkedBigNumberify('./index.rsh:129:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1111, {
    at: './index.rsh:129:12:application',
    fs: ['at ./index.rsh:126:16:application call to [unknown function] (defined at: ./index.rsh:126:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1104, v1105, v1106, v1107, v1108, v1109, v1110],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:131:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1113, v1114, v1115, v1116, v1117, v1118, v1119], secs: v1121, time: v1120, didSend: v52, from: v1112 } = txn1;
      
      const v1122 = v1092[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0)];
      const v1124 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 1)];
      const v1125 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 2)];
      const v1126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1124, v1125];
      const v1127 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0), v1126);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1114
        });
      ;
      const v1129 = 'Metafomo                        ';
      const v1130 = 'METAFOMO';
      const v1131 = 'https://metalabs.technology                                                                     ';
      const v1132 = '                                ';
      const v1133 = stdlib.simTokenNew(sim_r, v1129, v1130, v1131, v1132, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1134 = await txn1.getOutput('internal', 'v1133', ctc3, v1133);
      const v1135 = [v1114];
      const v2110 = v1135[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2114 = stdlib.tokenEq(v1134, v2110);
      const v1143 = v2114 ? false : true;
      ;
      const v1144 = v1127[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
      const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
      const v1147 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
      const v1148 = [stdlib.UInt_max, v1146, v1147];
      const v1149 = stdlib.Array_set(v1127, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1148);
      const v1151 = v1149[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
      const v1152 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
      const v1154 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
      const v1155 = [v1152, stdlib.UInt_max, v1154];
      const v1156 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1155);
      const v1157 = v1156[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
      const v1158 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
      const v1159 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
      const v1161 = [v1158, v1159, false];
      const v1162 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1161);
      const v1163 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
      const v1164 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
      const v1166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1113, v1114, v1115, v1116, v1117, v1118, v1119], secs: v1121, time: v1120, didSend: v52, from: v1112 } = txn1;
  const v1122 = v1092[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0)];
  const v1124 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 1)];
  const v1125 = v1122[stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 2)];
  const v1126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1124, v1125];
  const v1127 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./index.rsh:131:12:dot', stdlib.UInt_max, 0), v1126);
  ;
  ;
  const v1129 = 'Metafomo                        ';
  const v1130 = 'METAFOMO';
  const v1131 = 'https://metalabs.technology                                                                     ';
  const v1132 = '                                ';
  const v1133 = undefined /* TokenNew */;
  const v1134 = await txn1.getOutput('internal', 'v1133', ctc3, v1133);
  const v1135 = [v1114];
  const v2110 = v1135[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2114 = stdlib.tokenEq(v1134, v2110);
  const v1143 = v2114 ? false : true;
  stdlib.assert(v1143, {
    at: './index.rsh:140:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1144 = v1127[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1146 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1147 = v1144[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
  const v1148 = [stdlib.UInt_max, v1146, v1147];
  const v1149 = stdlib.Array_set(v1127, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1148);
  const v1151 = v1149[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1152 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
  const v1154 = v1151[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 2)];
  const v1155 = [v1152, stdlib.UInt_max, v1154];
  const v1156 = stdlib.Array_set(v1149, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1155);
  const v1157 = v1156[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1158 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 0)];
  const v1159 = v1157[stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1)];
  const v1161 = [v1158, v1159, false];
  const v1162 = stdlib.Array_set(v1156, stdlib.checkedBigNumberify('./index.rsh:140:32:application', stdlib.UInt_max, 1), v1161);
  const v1163 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1164 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.sendrecv({
    args: [v1112, v1113, v1114, v1115, v1116, v1117, v1118, v1119, v1121, v1134, v1162, v1163, v1164, v1166],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1120,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, 1), v1114]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1170, time: v1169, didSend: v169, from: v1168 } = txn2;
      
      ;
      const v1171 = v1162[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
      const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
      const v1173 = stdlib.add(v1172, stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, 1));
      const v1176 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 1)];
      const v1177 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 2)];
      const v1178 = [v1173, v1176, v1177];
      const v1179 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0), v1178);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1114
        });
      const v1180 = stdlib.addressEq(v1112, v1168);
      ;
      const v1182 = stdlib.add(v1121, v1115);
      const v1183 = v1182;
      const v1184 = true;
      const v1185 = stdlib.checkedBigNumberify('./index.rsh:241:59:decimal', stdlib.UInt_max, 0);
      const v1186 = v1113;
      const v1188 = stdlib.checkedBigNumberify('./index.rsh:241:43:decimal', stdlib.UInt_max, 0);
      const v1189 = v1112;
      const v1190 = v1169;
      const v1196 = v1179;
      const v1197 = stdlib.checkedBigNumberify('./index.rsh:123:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1184;})()) {
        const v1223 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
        const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
        const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
        const v1227 = stdlib.sub(v1224, v1226);
        sim_r.isHalt = false;
        }
      else {
        const v2047 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
        const v2048 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
        const v2050 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
        const v2051 = stdlib.sub(v2048, v2050);
        sim_r.txns.push({
          amt: v1197,
          kind: 'from',
          to: v1189,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:366:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1189,
          tok: v1114
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc13, ctc9, ctc10, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1170, time: v1169, didSend: v169, from: v1168 } = txn2;
  ;
  const v1171 = v1162[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
  const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0)];
  const v1173 = stdlib.add(v1172, stdlib.checkedBigNumberify('./index.rsh:230:18:decimal', stdlib.UInt_max, 1));
  const v1176 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 1)];
  const v1177 = v1171[stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 2)];
  const v1178 = [v1173, v1176, v1177];
  const v1179 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:230:12:dot', stdlib.UInt_max, 0), v1178);
  ;
  const v1180 = stdlib.addressEq(v1112, v1168);
  stdlib.assert(v1180, {
    at: './index.rsh:230:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v1182 = stdlib.add(v1121, v1115);
  let v1183 = v1182;
  let v1184 = true;
  let v1185 = stdlib.checkedBigNumberify('./index.rsh:241:59:decimal', stdlib.UInt_max, 0);
  let v1186 = v1113;
  let v1188 = stdlib.checkedBigNumberify('./index.rsh:241:43:decimal', stdlib.UInt_max, 0);
  let v1189 = v1112;
  let v1190 = v1169;
  let v1196 = v1179;
  let v1197 = stdlib.checkedBigNumberify('./index.rsh:123:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1184;})()) {
    const v1223 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
    const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
    const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
    const v1227 = stdlib.sub(v1224, v1226);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1183],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1112, v1114, v1115, v1116, v1117, v1118, v1119, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v1196, v1197, v1223, v1224, v1226, v1227],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1190,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:361:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2044, time: v2043, didSend: v895, from: v2042 } = txn4;
          
          ;
          const cv1183 = v1183;
          const cv1184 = false;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v2043;
          const cv1196 = v1196;
          const cv1197 = v1197;
          
          await (async () => {
            const v1183 = cv1183;
            const v1184 = cv1184;
            const v1185 = cv1185;
            const v1186 = cv1186;
            const v1188 = cv1188;
            const v1189 = cv1189;
            const v1190 = cv1190;
            const v1196 = cv1196;
            const v1197 = cv1197;
            
            if (await (async () => {
              
              return v1184;})()) {
              const v1223 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
              const v1227 = stdlib.sub(v1224, v1226);
              sim_r.isHalt = false;
              }
            else {
              const v2047 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v2048 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
              const v2050 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
              const v2051 = stdlib.sub(v2048, v2050);
              sim_r.txns.push({
                amt: v1197,
                kind: 'from',
                to: v1189,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:366:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1189,
                tok: v1114
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc8, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2044, time: v2043, didSend: v895, from: v2042 } = txn4;
      ;
      const cv1183 = v1183;
      const cv1184 = false;
      const cv1185 = v1185;
      const cv1186 = v1186;
      const cv1188 = v1188;
      const cv1189 = v1189;
      const cv1190 = v2043;
      const cv1196 = v1196;
      const cv1197 = v1197;
      
      v1183 = cv1183;
      v1184 = cv1184;
      v1185 = cv1185;
      v1186 = cv1186;
      v1188 = cv1188;
      v1189 = cv1189;
      v1190 = cv1190;
      v1196 = cv1196;
      v1197 = cv1197;
      
      continue;
      }
    else {
      const {data: [v1347], secs: v1349, time: v1348, didSend: v771, from: v1346 } = txn3;
      switch (v1347[0]) {
        case 'Api_buyDiscount0_246': {
          const v1350 = v1347[1];
          undefined /* setApiDetails */;
          let v1355;
          const v1356 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v1357 = stdlib.fromSome(v1356, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1358 = stdlib.lt(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1358, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:305:38:application call to "getDiscountPrice" (defined at: ./index.rsh:161:36:function exp)', 'at ./index.rsh:305:14:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:305:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1359 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1359) {
            v1355 = stdlib.checkedBigNumberify('./index.rsh:166:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1362 = v1163[v1357];
            v1355 = v1362;
            }
          ;
          const v1418 = stdlib.add(v1226, v1355);
          const v1422 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1423 = [v1418, v1224, v1422];
          const v1424 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1423);
          ;
          const v1429 = null;
          await txn3.getOutput('Api_buyDiscount', 'v1429', ctc0, v1429);
          const v1435 = stdlib.add(v1357, stdlib.checkedBigNumberify('./index.rsh:314:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1346, v1435);
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1424;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_246': {
          const v1523 = v1347[1];
          undefined /* setApiDetails */;
          let v1543;
          const v1544 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v1546 = stdlib.ge(v1545, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1546) {
            v1543 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1549 = v1164[v1545];
            v1543 = v1549;
            }
          const v1550 = stdlib.lt(v1543, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1550, {
            at: './index.rsh:183:12:application',
            fs: ['at ./index.rsh:277:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:277:14:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:277:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1551 = stdlib.div(v1543, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1552 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1551);
          const v1553 = stdlib.mul(v1186, v1552);
          const v1588 = stdlib.add(v1197, v1553);
          ;
          const v1595 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1596 = [v1226, v1224, v1595];
          const v1597 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1596);
          ;
          const v1615 = stdlib.gt(v1118, stdlib.checkedBigNumberify('./index.rsh:279:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1615, {
            at: './index.rsh:279:20:application',
            fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1616 = v1597[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 1)];
          const v1617 = v1616[stdlib.checkedBigNumberify('./index.rsh:280:28:application', stdlib.UInt_max, 0)];
          const v1618 = stdlib.gt(v1617, v1119);
          stdlib.assert(v1618, {
            at: './index.rsh:280:20:application',
            fs: ['at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1619 = null;
          await txn3.getOutput('Api_buyTicket', 'v1619', ctc0, v1619);
          const v1625 = stdlib.div(v1186, v1118);
          const v1626 = stdlib.add(v1186, v1117);
          const v1631 = stdlib.sub(v1588, v1625);
          ;
          const v1637 = stdlib.sub(v1617, v1119);
          const v1640 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1)];
          const v1641 = v1616[stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 2)];
          const v1642 = [v1637, v1640, v1641];
          const v1643 = stdlib.Array_set(v1597, stdlib.checkedBigNumberify('./index.rsh:288:61:application', stdlib.UInt_max, 1), v1642);
          ;
          let v1644;
          const v1645 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:216:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1166[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.sub(v1116, v1644);
          let v1653;
          if (v1546) {
            v1653 = stdlib.checkedBigNumberify('./index.rsh:175:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1659 = v1164[v1545];
            v1653 = v1659;
            }
          const v1660 = stdlib.lt(v1653, stdlib.checkedBigNumberify('./index.rsh:183:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1660, {
            at: './index.rsh:183:12:application',
            fs: ['at ./index.rsh:295:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:181:47:function exp)', 'at ./index.rsh:278:22:application call to [unknown function] (defined at: ./index.rsh:278:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1661 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:184:27:decimal', stdlib.UInt_max, 100));
          const v1662 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:184:23:decimal', stdlib.UInt_max, 1), v1661);
          const v1663 = stdlib.mul(v1186, v1662);
          const v1664 = stdlib.add(v1188, v1663);
          const v1665 = stdlib.add(v1185, v1625);
          const v1666 = stdlib.add(v1183, v1651);
          const cv1183 = v1666;
          const cv1184 = true;
          const cv1185 = v1665;
          const cv1186 = v1626;
          const cv1188 = v1664;
          const cv1189 = v1346;
          const cv1190 = v1348;
          const cv1196 = v1643;
          const cv1197 = v1631;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_246': {
          const v1696 = v1347[1];
          undefined /* setApiDetails */;
          let v1734;
          const v1735 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v1736 = stdlib.fromSome(v1735, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v1737 = stdlib.lt(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1737, {
            at: './index.rsh:204:12:application',
            fs: ['at ./index.rsh:328:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:202:41:function exp)', 'at ./index.rsh:328:14:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:328:14:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:270:18:application call to [unknown function] (defined at: ./index.rsh:270:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1738 = stdlib.ge(v1736, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1738) {
            v1734 = stdlib.checkedBigNumberify('./index.rsh:207:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1741 = v1163[v1736];
            v1734 = v1741;
            }
          ;
          const v1764 = stdlib.add(v1226, v1734);
          const v1768 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1769 = [v1764, v1224, v1768];
          const v1770 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1769);
          ;
          const v1845 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1845', ctc0, v1845);
          const v1851 = stdlib.add(v1736, stdlib.checkedBigNumberify('./index.rsh:337:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1346, v1851);
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1770;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_246': {
          const v1869 = v1347[1];
          undefined /* setApiDetails */;
          ;
          const v1941 = v1223[stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 2)];
          const v1942 = [v1226, v1224, v1941];
          const v1943 = stdlib.Array_set(v1196, stdlib.checkedBigNumberify('./index.rsh:241:23:dot', stdlib.UInt_max, 1), v1942);
          ;
          const v2031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1346), null);
          const v2032 = stdlib.fromSome(v2031, stdlib.checkedBigNumberify('./index.rsh:159:64:decimal', stdlib.UInt_max, 0));
          const v2033 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1346), null);
          const v2034 = stdlib.fromSome(v2033, stdlib.checkedBigNumberify('./index.rsh:200:74:decimal', stdlib.UInt_max, 0));
          const v2035 = {
            discountLevel: v2032,
            timeReductionLevel: v2034
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2035', ctc7, v2035);
          const cv1183 = v1183;
          const cv1184 = true;
          const cv1185 = v1185;
          const cv1186 = v1186;
          const cv1188 = v1188;
          const cv1189 = v1189;
          const cv1190 = v1348;
          const cv1196 = v1943;
          const cv1197 = v1197;
          
          v1183 = cv1183;
          v1184 = cv1184;
          v1185 = cv1185;
          v1186 = cv1186;
          v1188 = cv1188;
          v1189 = cv1189;
          v1190 = cv1190;
          v1196 = cv1196;
          v1197 = cv1197;
          
          continue;
          break;
          }
        }}
    
    }
  const v2047 = v1196[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
  const v2048 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:48:application', stdlib.UInt_max, 1)];
  const v2050 = v2047[stdlib.checkedBigNumberify('./index.rsh:248:60:application', stdlib.UInt_max, 0)];
  const v2051 = stdlib.sub(v2048, v2050);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1189), {
    at: './index.rsh:108:29:application',
    fs: ['at ./index.rsh:107:11:application call to [unknown function] (defined at: ./index.rsh:107:32:function exp)', 'at ./index.rsh:368:16:application call to "showOutcome" (defined at: ./index.rsh:106:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1190,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:371:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2084, time: v2083, didSend: v932, from: v2082 } = txn3;
      
      ;
      const v2085 = v2083;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1114
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
    tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2084, time: v2083, didSend: v932, from: v2082 } = txn3;
  ;
  let v2085 = v2083;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1112, v1114, v1115, v1116, v1117, v1134, v1163, v1164, v1166, v1183, v1185, v1186, v1188, v1189, v2051],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2085,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:374:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2097, time: v2096, didSend: v941, from: v2095 } = txn4;
        
        ;
        const v2098 = stdlib.addressEq(v1112, v2095);
        ;
        const cv2085 = v2096;
        
        await (async () => {
          const v2085 = cv2085;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1114
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
      tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2097, time: v2096, didSend: v941, from: v2095 } = txn4;
    ;
    const v2098 = stdlib.addressEq(v1112, v2095);
    stdlib.assert(v2098, {
      at: './index.rsh:374:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2085 = v2096;
    
    v2085 = cv2085;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`, `Api_getParticipantStats()(uint64,uint64)`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`, `Api_getParticipantStats()(uint64,uint64)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAmAAEIBzgDIAUGKDAEQJAC4AHoAWSAAkhQoI0GEp3RyqsGzN6axQ2Do/jPDdLs/JMNoKSYtASTub7UBPAB+AGgAiLCAhEC+QHQAdgBJgUBAAEBAQIACP//////////IjUAMRhBDcErZEkiWzUBJFs1AjEZIxJBAAoxACghFa9mQg2WNhoAF0lBAociNQQjNQZJIRYMQACqSSEXDEAAfkkhGAxAAGkhGBJENAFJIQgMQAA+SSUMQAAdJRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDTlIKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDR4hBRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDQAhFxJEKzX/KTT/UEICqEkhGQxAABAhGRJEKzX/gAEDNP9QQgKRIRYSRCs1/yo0/1BCAoNJIRoMQAG3SSEbDEAAaSEbEkQ0AUkhCAxAAD5JJQxAAB0lEkQoZClkUCpkUDUDNhoBFzQDIQRbCBY1B0IMj0goZClkUCpkUDUDNhoBFzQDIQRbCBY1B0IMdCEFEkQoZClkUCpkUDUDNhoBFzQDIQRbCBY1B0IMViEaEkQ0AUkhCAxAANNJJQxAAGklEkQoZClkUCpkUEk1A1dYKDX/NANXKAg0A1cwCFA0A1cgCFA0A4HrAiRYUDQDV1AIUDQDV/AIUDQDV/gIUDQDIREhBlhQNANX6AhQNANX4AhQNP9QNANXgDBQNP9QNANXsDBQNQdCC9pIKGQpZFAqZFBJNQNXSCg1/zQDVygINANXMAhQNANXIAhQNAMhDSRYUDQDV0AIUDQDV+AIUDQDV+gIUDQDV/AgUDQDV9gIUDQDV9AIUDT/UDQDV3AwUDT/UDQDV6AwUDUHQgt2IQUSRChkKWRQKmRQSTUDV0goNf80A1coCDQDVzAIUDQDVyAIUDQDIQ0kWFA0A1dACFA0A1fgCFA0A1foCFA0A1fwIFA0A1fYCFA0A1fQCFA0/1A0A1dwMFA0/1A0A1egMFA1B0ILD4GR5tK+AxJEKzX/KDT/UEIAszYaAhc1BDYaAzYaARdJIQsMQAUbSSEIDEAEkEklDEAAkSUSRCU0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyEOWzX/gATiG7OpsDIHNP8PRDQDVwAgNAMhBls0AyEJWzQDIQpbNAMhBFs0AyEMWzQDIRJbNAMhE1s0A1dYKDQDV4AwNANXsDA0/yI0AyEPWzQDIRxbNAMhHVs0AyERIQZYMgY0AyEeIR9YNAMhIFtCCGRIJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpKSkpKSkpKSklXACA1/yEGWzX+IQlbNf0hCls1/CEEWzX7IQxbNfohEls1+SETWzX4V1goNfdXgDA19lewMDX1IQ5bNfQhD1s18yEcWzXyIR1bNfEhESEGWDXwIR4hH1g17yEgWzXugcoCISFYNe2B2wJbNeyB4wJbNetJNQU16oAEkE9kSTTqULAyBzT0DEQ06iJVSSEiDEABRkkhBQxAAJ8hBRJEgAgAAAAAAAAH8yIxAIgJnlcACUk16SNbNOkiVU0WIjEAiAmKVwkJSTXpI1s06SJVTRZQULAiMQCICXNXAAlJNekjWzTpIlVNFiIxAIgJX1cJCUk16SNbNOkiVU0WUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IzTzNPI08TTwMgY071cAETTrFjTsFlA07VcQAVBQNO5CBwVIIjEAiAkMVwkJSTXnI1s05yJVTUk16CEHDEQ06CEHD0EAByEjNelCAAs09yQ06AskWBc16TTpNPiICP6ACAAAAAAAAAc1sCs1BzEAKDEAiAjBKTToIwgWUDXnVwAJNOdQZjT/NP40/TT8NPs0+jT5NPg09zT2NPU09CM08zTyNPE08DIGNO9XABE06zTpCBY07BZQNO1XEAFQUDTuQgZlSSMMQAFTSCIxAIgIZlcACUk15yNbNOciVU1JNeghBw9JNedBAAYiNelCAAs09iQ06AskWBc16TTpIRAMRDTyIzTpIRAKCQs15jTmiAg0NO9XABE06xY07BZQNO1XEAFQUDXlNPojDUQ05VcREUk15CJbSTXjNPkNRIAIAAAAAAAABlOwKzUHNPI0+go14rEisgE04rIII7IQNP+yB7OxIrIBNPmyEiELshAxALIUNPiyEbMiMQCIB7pXCQlJNd8jWzTfIlVNSTXgIQcPQQAGIjXhQgALNPUkNOALJFgXNeE050EABiI130IACzT2JDToCyRYFzXfNN8hEAxENP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPw04QkIIzTzNOIINPI0+wg08TTyIzTfIRAKCQsIMQAyBjTlVwARNOM0+QkWNORXCAhQNORXEAFQUDTuNOYINOIJQgUMSCIxAIgHE1cACUk15yNbNOciVU1JNeghBwxENOghBw9BAAchIzXpQgALNPckNOgLJFgXNek06TT4iAcFgAgAAAAAAAAFlbArNQcxACgxAIgGyCk06CMIFlA151cJCTTnTFBmNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IzTzNPI08TTwMgY071cAETTrNOkIFjTsFlA07VcQAVBQNO5CBGtJIQcMQAB8SCEINAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQZbNAMhCVs0AyEKWzQDIQRbNAMhDFs0A1dIKDQDV3AwNANXoDA0AyEkWzQDISVbNAMhDls0AyEPWzQDV/AgNAMhDVsyBkIFKkhJISIMQAB7SSEFDEAAc0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEGWzQDIQlbNAMhCls0AyEEWzQDIQxbNANXSCg0A1dwMDQDV6AwNAMhJFs0AyElWzQDIQ5bNAMhD1s0A1fwIDQDIQ1bMgZCBKhISSMMQACrSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKVwAgNf8hCVs1/iEKWzX9V2giNfyABJqLkXSwNPxXABE1+yM0/ogFTjT/MQASRDT/NP40/TQDIQRbNAMhDFs0AyESWzQDIRNbNAOBYFs0A1eKKDQDV7IwNANX4jA0A4FYWzT9CCMiNAMhBlsiNP8yBjT7IlsjCBY0+1cICFA0+1cQAVA0/FcREVAiQgK0SCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yRbNf6BEFs1/YEYWzX8IQZbNfshCVs1+iEKWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULAhFIgEcCEhr0k1+ElQSTX3VwARNfYkrzT2VwgIUDT2VxABUDT3VxERUDX1IRSIBEWxIrIBIrISIQuyEDIKshQ0/rIRsyEUiAQssSKyASEFshCB////////////AbIiIQiyI4AITUVUQUZPTU+yJYAgTWV0YWZvbW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJoBgaHR0cHM6Ly9tZXRhbGFicy50ZWNobm9sb2d5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsicyA7IoMgqyKbO0PDX0gAgAAAAAAAAEbTT0FlCwNPRJNfM0/hYiWxNENPVXERE18jT1VwARJwQ08lcICFA08lcQAVBQSTXxVxERNfA08VcAETTwVwAIJwRQNPBXEAFQUEk171cRETXuNO9XABE07lcACDTuVwgIUChQUDXtgCgAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgNeyAMAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAACgAAAAAAAAAPAAAAAAAAABQAAAAAAAAAGTXrgDAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAwAAAAAAAAAEAAAAAAAAAAU16jEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDIHFlA08xZQNO1QNOxQNOtQNOpQKEsBVwB/ZylLAVd/f2cqSwFX/hRnSCM1ATIGNQJCAdQ1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TXsNPhBAIk0/lcREUk16yRbNeo06yJbNek06jTpCTXoNOw07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPRQNPVQNPZQNPcWUDT5FlA0+hZQNPsWUDT8UDT+UDT/FlA061A06hZQNOkWUDToFlAoSwFXAH9nKUsBV39/ZypLAVf+dWdIJTUBMgY1AkIBHjT+VxERSTXrJFs06yJbCTXqsSKyATT/sggjshA0/LIHs7EisgEjshIhC7IQNPyyFDTtshGzNOw07RZQNO4WUDTvFlA08BZQNPMWUDT0UDT1UDT2UDT3FlA0+RZQNPoWUDT7FlA0/FA06hZQKEsBVwB/ZylLAVd/f2cqSwFX/hpnSCEFNQEyBjUCQgCSNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxSTXwNPEWUDTyFlA08xZQNPQWUDT1FlA09lA091A0+FA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4aZ0ghCDUBMgY1AkIAHDEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghFa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhCxJEOBFPAhJEOBISRIk=`,
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
                "name": "v1113",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1114",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1119",
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
                "name": "v1113",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1114",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1115",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1116",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1117",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1118",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1119",
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
                "name": "v1347",
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
    "name": "_reach_oe_v1133",
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
    "name": "_reach_oe_v1429",
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
    "name": "_reach_oe_v1619",
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
    "name": "_reach_oe_v1845",
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
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2035",
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
        "name": "v3938",
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
        "name": "v3942",
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
                "name": "v1347",
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
  Bytecode: `0x608060405260405162005edb38038062005edb833981016040819052620000269162000a1f565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600a62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007e5565b620002729695949392919062000b34565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f8a0465353465a1e7c28230e9fa093f0cf2d30e0a690923cdce1470c53a0bca479060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007f3565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c2f565b604051602081830303815290604052600290805190602001906200059b9291906200086a565b5050505062000d8c565b620005af620008f9565b60005b60028110156200060557848160028110620005d157620005d162000ace565b6020020151828260028110620005eb57620005eb62000ace565b602002015280620005fc8162000d25565b915050620005b2565b50818184600281106200061c576200061c62000ace565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102e08101909152600061028082018181526102a083018290526102c083019190915281526020810162000689620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b8620008f9565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200072662000946565b8152604080516060810182526000808252602082810182905292820152910190815260200162000755620008f9565b8152604080516060810182526000808252602082810182905292820152910190815260200162000784620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620007b3620008f9565b8152602001620007c262000964565b8152602001620007d162000982565b8152602001620007e062000982565b905290565b6110878062004e5483390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620007b3620008f9565b828054620008789062000d4f565b90600052602060002090601f0160209004810192826200089c5760008555620008e7565b82601f10620008b757805160ff1916838001178555620008e7565b82800160010185558215620008e7579182015b82811115620008e7578251825591602001919060010190620008ca565b50620008f5929150620009a0565b5090565b60405180604001604052806002905b6200092f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009085790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008f55760008155600101620009a1565b604080519081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000a3457600080fd5b62000a3e620009b7565b8351815260e0601f198301121562000a5557600080fd5b62000a5f620009ee565b6020850151815260408501519092506001600160a01b038116811462000a8457600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b0c5760208185018101518683018201520162000aee565b8181111562000b1f576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b4960c083018962000ae4565b828103602084015262000b5d818962000ae4565b9050828103604084015262000b73818862000ae4565b9050828103606084015262000b89818762000ae4565b6080840195909552505060a00152949350505050565b8060005b600281101562000bdf57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000ba3565b50505050565b8060005b600581101562000bdf57815184526020938401939091019060010162000be9565b8060005b600681101562000bdf57815184526020938401939091019060010162000c0e565b81516001600160a01b03168152610420810160208301516020830152604083015162000c6660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000cc1828501826001600160a01b03169052565b50506101408084015162000cd88285018262000b9f565b505061016083015162000cf061020084018262000be5565b5061018083015162000d076102a084018262000c0a565b506101a083015162000d1e61036084018262000c0a565b5092915050565b600060001982141562000d4857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d6457607f821691505b6020821081141562000d8657634e487b7160e01b600052602260045260246000fd5b50919050565b6140b88062000d9c6000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063a556059611610061578063a55605961461021b578063ab53f2c61461023b578063bf2c5b241461025e578063cadc2e7a14610271578063e73216b51461029157005b806373b4522c146101be5780637a3678dd146101d157806383230757146101f35780638e3147691461020857005b80633bc5b7bf116100c85780633bc5b7bf1461016e5780636579ece61461019b5780636cd6de3a146101ae5780636cdcb9df146101b657005b80631e93b0f1146100ff5780632b10758a146101235780632c10a1591461013b57806330a94db41461014e57005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b61012b6102b4565b604051901515815260200161011a565b6100fd61014936600461331e565b6102fe565b34801561015a57600080fd5b50610110610169366004613336565b610322565b34801561017a57600080fd5b5061018e610189366004613367565b610579565b60405161011a919061339a565b6100fd6101a93660046133d1565b6105a5565b61012b6105c5565b61012b610612565b6100fd6101cc36600461331e565b610662565b3480156101dd57600080fd5b506101e6610682565b60405161011a9190613429565b3480156101ff57600080fd5b50600154610110565b6100fd61021636600461331e565b610a86565b34801561022757600080fd5b50610110610236366004613336565b610aa6565b34801561024757600080fd5b50610250610cf1565b60405161011a92919061354b565b6100fd61026c36600461331e565b610d8e565b34801561027d57600080fd5b5061018e61028c366004613367565b610dae565b610299610dd4565b6040805182518152602092830151928101929092520161011a565b60006102be612c8f565b6102c6612cc8565b6102ce612ce2565b6000602082810182905290825260408051808301909152828152908301526102f68284610e33565b505051919050565b610306612c8f565b61031e61031836849003840184613684565b82611bf9565b5050565b6000600160005414156103df5760006002805461033e906136da565b80601f016020809104026020016040519081016040528092919081815260200182805461036a906136da565b80156103b75780601f1061038c576101008083540402835291602001916103b7565b820191906000526020600020905b81548152906001019060200180831161039a57829003601f168201915b50505050508060200190518101906103cf91906138a4565b90506103dd60006009611ef8565b505b600360005414156104a3576000600280546103f9906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610425906136da565b80156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b505050505080602001905181019061048a919061398b565b905080608001518361049c9190613a96565b9392505050565b600660005414156104bd576000600280546103f9906136da565b60076000541415610568576000600280546104d7906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610503906136da565b80156105505780601f1061052557610100808354040283529160200191610550565b820191906000526020600020905b81548152906001019060200180831161053357829003601f168201915b505050505080602001905181019061048a9190613aad565b61057460006009611ef8565b919050565b604080516060810182526000808252602082018190529181019190915261059f82611f1e565b92915050565b6105ad612c8f565b61031e6105bf36849003840184613c03565b82610e33565b60006105cf612c8f565b6105d7612cc8565b6105df612ce2565b6000606082015260028152604080516020808201909252828152908301526106078284610e33565b505060400151919050565b600061061c612c8f565b610624612cc8565b61062c612ce2565b6000604082015260018181905250604080516020808201909252828152908301526106578284610e33565b505060200151919050565b61066a612c8f565b61031e61067c36849003840184613684565b82611ff0565b61068a612d12565b60016000541415610745576000600280546106a4906136da565b80601f01602080910402602001604051908101604052809291908181526020018280546106d0906136da565b801561071d5780601f106106f25761010080835404028352916020019161071d565b820191906000526020600020905b81548152906001019060200180831161070057829003601f168201915b505050505080602001905181019061073591906138a4565b905061074360006007611ef8565b505b600360005414156108cf5760006002805461075f906136da565b80601f016020809104026020016040519081016040528092919081815260200182805461078b906136da565b80156107d85780601f106107ad576101008083540402835291602001916107d8565b820191906000526020600020905b8154815290600101906020018083116107bb57829003601f168201915b50505050508060200190518101906107f0919061398b565b90506107fa612dae565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526101c084015183519091015260a08084015183519083166080909101526101608085015184519092019190915261018080850151845160c0908101919091526101a0808701518651951660e09586015261014080880151875161010090810191909152610120808a0151895190910152928801805188519092019190915294870151865190940193909352925184519091015292015181519092019190915251919050565b600660005414156108e95760006002805461075f906136da565b60076000541415610a7757600060028054610903906136da565b80601f016020809104026020016040519081016040528092919081815260200182805461092f906136da565b801561097c5780601f106109515761010080835404028352916020019161097c565b820191906000526020600020905b81548152906001019060200180831161095f57829003601f168201915b50505050508060200190518101906109949190613aad565b905061099e612dae565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526102a084015183519091015260e08084015183519083166080909101526101a080850151845160a001526101c0850151845160c001526101e08501518451931692909101919091526101808084015183516101009081019190915261016080860151855161012090810191909152918601805186516101409081019190915292870151865190920191909152518451909201919091529092015181519092019190915251919050565b610a8360006007611ef8565b90565b610a8e612c8f565b61031e610aa036849003840184613684565b826121ec565b600060016000541415610b6357600060028054610ac2906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610aee906136da565b8015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b820191906000526020600020905b815481529060010190602001808311610b1e57829003601f168201915b5050505050806020019051810190610b5391906138a4565b9050610b6160006008611ef8565b505b60036000541415610c2057600060028054610b7d906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba9906136da565b8015610bf65780601f10610bcb57610100808354040283529160200191610bf6565b820191906000526020600020905b815481529060010190602001808311610bd957829003601f168201915b5050505050806020019051810190610c0e919061398b565b905080608001518361049c9190613cb7565b60066000541415610c3a57600060028054610b7d906136da565b60076000541415610ce557600060028054610c54906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610c80906136da565b8015610ccd5780601f10610ca257610100808354040283529160200191610ccd565b820191906000526020600020905b815481529060010190602001808311610cb057829003601f168201915b5050505050806020019051810190610c0e9190613aad565b61057460006008611ef8565b600060606000546002808054610d06906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610d32906136da565b8015610d7f5780601f10610d5457610100808354040283529160200191610d7f565b820191906000526020600020905b815481529060010190602001808311610d6257829003601f168201915b50505050509050915091509091565b610d96612c8f565b61031e610da836849003840184613684565b82612320565b604080516060810182526000808252602082018190529181019190915261059f82612565565b6040805180820190915260008082526020820152610df0612c8f565b610df8612cc8565b610e00612ce2565b600060808201526003815260408051602080820190925282815290830152610e288284610e33565b505060600151919050565b610e436007600054146026611ef8565b8151610e5e901580610e5757508251600154145b6027611ef8565b600080805560028054610e70906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9c906136da565b8015610ee95780601f10610ebe57610100808354040283529160200191610ee9565b820191906000526020600020905b815481529060010190602001808311610ecc57829003601f168201915b5050505050806020019051810190610f019190613aad565b9050610f0b612dc1565b610f1d82610160015142106028611ef8565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e184604051610f4c9190613ccf565b60405180910390a16000602085015151516003811115610f6e57610f6e613384565b14156111fe576001610f7f33611f1e565b516001811115610f9157610f91613384565b14610f9d576000610fab565b610fa633611f1e565b604001515b60208201819052610fc0906005116018611ef8565b6005816020015110610fd55760f98152610ff8565b816101000151816020015160058110610ff057610ff0613d2f565b602002015181525b61100434156019611ef8565b80516102808301516110169190613cb7565b6040808301805192909252610260840151825160200152610240840151810151915191151591015260e0820151815161105c91611055913391906125f2565b601a611ef8565b604051600081527fbc40d7fb273924ac9d18414b540bf8b05eb65fdfbd01425485288414754d5a409060200160405180910390a16000808452338152600460209081526040909120805460ff19166001908117909155908201516110c09190613cb7565b336000908152600460205260409020600101556110db612f19565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b015181518701526101a08b01518151909501949094526101c08a01518451909301929092526101e0890151835196169501949094525143930192909252610200850151918401516111d5929190612608565b60208201805160e00191909152610220840151905161010001526111f88161267c565b50611bf3565b600160208501515151600381111561121857611218613384565b141561170657600161122933611f1e565b51600181111561123b5761123b613384565b14611247576000611255565b61125033611f1e565b604001515b60808201819052600511801560a0830152611276576000606082015261129c565b81610120015181608001516006811061129157611291613d2f565b602002015160608201525b6112ae6064826060015110601b611ef8565b606481606001516112bf9190613d45565b6112ca906001613a96565b826101a001516112da9190613d67565b60c082018190526112ee903414601c611ef8565b61028082015160e08201805191909152610260830151815160200152610240830151604090810151825190151591015261020083015190516113339190600190612608565b81610100018190525061135661134f338460e0015160006125f2565b601d611ef8565b61136860018360a0015111601e611ef8565b60c082015161010082015160200151516113849110601f611ef8565b604051600081527f792b0876256873fdb79cee1ea7c644726af47cdb1b309a3b9753a69c75880c779060200160405180910390a16000602084015260a08201516101a08301516113d49190613d45565b610120820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611413573d6000803e3d6000fd5b5060c0820151610100820151602001515161142e9190613a96565b610140820180519190915261010082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c083015161147691903390612984565b600161148133612565565b51600181111561149357611493613384565b1461149f5760006114ad565b6114a833612565565b604001515b61018082018190526005116114c95760006101608201526114f1565b816101400151816101800151600681106114e5576114e5613d2f565b60200201516101608201525b8060a00151156115085760006101a082015261152f565b81610120015181608001516006811061152357611523613d2f565b60200201516101a08201525b6115426064826101a00151106020611ef8565b61154a612f19565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e0808601518451931692019190915261010080850151835190910152610120808501518351909101526101408085015183519091015261016083015190516115f29190613a96565b8361016001516116029190613cb7565b60208083018051929092529051600191015261012082015161018084015161162a9190613cb7565b60208201516040015260808301516101a08401516116489190613cb7565b6020820151606001526101a082015161166390606490613d45565b61166e906001613a96565b836101a0015161167e9190613d67565b836101c0015161168e9190613cb7565b6020820180516080019190915280513360a090910152514360c0909101526101008201516101408301516116c59190600190612608565b602082015160e0015261012082015160c08301516102208501516116e99190613cb7565b6116f39190613a96565b602082015161010001526111f88161267c565b600260208501515151600381111561172057611720613384565b14156119a357600161173133612565565b51600181111561174357611743613384565b1461174f57600061175d565b61175833612565565b604001515b6101e08201819052611773906005116021611ef8565b6005816101e001511061178d5760f96101c08201526117b5565b816101000151816101e00151600581106117a9576117a9613d2f565b60200201516101c08201525b6117c134156022611ef8565b806101c001518261028001516117d79190613cb7565b6102008201805191909152610260830151815160200152610240830151604090810151915191151591015260e08201516101c08201516118249161181d913391906125f2565b6023611ef8565b604051600081527f61850297e2a3136c0fb748535951942c649d78131d7fec83f8570cbad81462c39060200160405180910390a16000604084810182905233825260056020529020805460ff191660019081179091556101e082015161188a9190613cb7565b336000908152600560205260409020600101556118a5612f19565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e088015183519516940193909352514392019190915261020080850151908401516111d59290612608565b60036020850151515160038111156119bd576119bd613384565b1415611bf3576119cf34156024611ef8565b6102808201516102208201805191909152610260830151815160200152610240830151604090810151915191151591015260e0820151611a1d90611a1690339060006125f2565b6025611ef8565b6001611a2833611f1e565b516001811115611a3a57611a3a613384565b14611a46576000611a54565b611a4f33611f1e565b604001515b610240820151526001611a6633612565565b516001811115611a7857611a78613384565b14611a84576000611a92565b611a8d33612565565b604001515b6102408201805160209081019290925251604080518251815291830151928201929092527f6ab16ab80939ea19ed2dbb0d81f2c14e966e491830aa7342c4e6a9c2c1c0d12d910160405180910390a16102408101516060840152611af4612f19565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102208401516111d59290612608565b50505050565b611c09600160005414600f611ef8565b8151611c24901580611c1d57508251600154145b6010611ef8565b600080805560028054611c36906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054611c62906136da565b8015611caf5780601f10611c8457610100808354040283529160200191611caf565b820191906000526020600020905b815481529060010190602001808311611c9257829003601f168201915b5050505050806020019051810190611cc791906138a4565b9050611cf060408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611d3b3415600c611ef8565b6101408201515151611d4f90600190613cb7565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611d9290611d8b90339060016125f2565b600d611ef8565b8151611daa906001600160a01b03163314600e611ef8565b611db2612f19565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e080870151855190920191909152610120808701518551941693909101929092526101608501518351610100908101919091526101808601518451909301929092526101a0850151835161014001525190840151611e709190613cb7565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611ed19290612608565b60208201805160e0019190915251600061010090910152611ef18161267c565b5050505050565b8161031e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611f6a57611f6a613384565b1415611fe1576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611fab57611fab613384565b6001811115611fbc57611fbc613384565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6120006003600054146012611ef8565b815161201b90158061201457508251600154145b6013611ef8565b60008080556002805461202d906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054612059906136da565b80156120a65780601f1061207b576101008083540402835291602001916120a6565b820191906000526020600020905b81548152906001019060200180831161208957829003601f168201915b50505050508060200190518101906120be919061398b565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a161210c34156011611ef8565b612114612f39565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a080850151845193169201919091526101c080840151835190910152810151439052611bf38161299d565b6121fc6006600054146016611ef8565b815161221790158061221057508251600154145b6017611ef8565b600080805560028054612229906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054612255906136da565b80156122a25780601f10612277576101008083540402835291602001916122a2565b820191906000526020600020905b81548152906001019060200180831161228557829003601f168201915b50505050508060200190518101906122ba919061398b565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a161230834156014611ef8565b805161210c906001600160a01b031633146015611ef8565b612330600760005414602a611ef8565b815161234b90158061234457508251600154145b602b611ef8565b60008080556002805461235d906136da565b80601f0160208091040260200160405190810160405280929190818152602001828054612389906136da565b80156123d65780601f106123ab576101008083540402835291602001916123d6565b820191906000526020600020905b8154815290600101906020018083116123b957829003601f168201915b50505050508060200190518101906123ee9190613aad565b9050612403816101600151421015602c611ef8565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a161244e34156029611ef8565b612456612f19565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b01518a51820152610120808c01518b5190910152610140808c01518b51909101526101608b0151888b01805191909152805160009901989098526101808b01518851909701969096526101a08a01518751909501949094526101c08901518651909301929092526101e088015185519616950194909452825143940193909352610200850151825190930192909252610220840151905190910152611bf38161267c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156125b1576125b1613384565b1415611fe1576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611fab57611fab613384565b600061260083853085612aa9565b949350505050565b612610612f67565b60005b600281101561265c5784816002811061262e5761262e613d2f565b602002015182826002811061264557612645613d2f565b60200201528061265481613d86565b915050612613565b508181846002811061267057612670613d2f565b60200201529392505050565b6040805180820190915260008082526020820152816020015160200151156128175760208281015160e0015181015180519101516126ba9190613a96565b81526126c4612fb2565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151871681890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015280518701516101808b01528051909501516101a08a01528451909301516101c08901528351909101519095166101e08701528151850151610200870152815101516102208601528051840151830151610240860152805184015183015183015161026086015251909201518101515161028084015283516102a084015260076000554360015590516127f391839101613de5565b60405160208183030381529060405260029080519060200190611bf39291906130b9565b60208281015160e0015181015180519101516128339190613a96565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612881573d6000803e3d6000fd5b5061289e826000015160200151836020015160a001516001612984565b6128a661313d565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160e090810151861660a08089019190915289516101009081015160c08a01528a5161012090810151938a01939093528a5161014090810151918a0191909152868b01805151938a01939093528251860151908901528151909301516101608801528051909101516101808701525101519092166101a0840152838101516101c084015260036000554360015590516127f391839101613f52565b61298f838383612b83565b61299857600080fd5b505050565b6129a561313d565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e09081015190850152845161010090810151908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519093169284019290925283516101c090810151908401526006600055436001559051612a8591839101613f52565b604051602081830303815290604052600290805190602001906129989291906130b9565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612b1091614049565b60006040518083038185875af1925050503d8060008114612b4d576040519150601f19603f3d011682016040523d82523d6000602084013e612b52565b606091505b5091509150612b6382826001612c54565b5080806020019051810190612b789190614065565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612be291614049565b60006040518083038185875af1925050503d8060008114612c1f576040519150601f19603f3d011682016040523d82523d6000602084013e612c24565b606091505b5091509150612c3582826002612c54565b5080806020019051810190612c4a9190614065565b9695505050505050565b60608315612c6357508161049c565b825115612c735782518084602001fd5b60405163100960cb60e01b815260048101839052602401611f15565b6040805160808101825260008082526020808301829052828401829052835180850190945281845283015290606082015290565b905290565b604051806040016040528060008152602001612cc36131e9565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b604051806101c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001612d876131fc565b8152602001612d9461321a565b8152602001612da16131fc565b8152602001612cc361321a565b6040518060200160405280612cc3612d12565b6040518061026001604052806000815260200160008152602001612e01604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016000815260200160001515815260200160008152602001612e4a604051806060016040528060008152602001600081526020016000151581525090565b8152602001612e57612f67565b815260200160008152602001612e89604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001612ed7604051806060016040528060008152602001600081526020016000151581525090565b81526040805160608101825260008082526020828101829052928201529101908152602001612cc3604051806040016040528060008152602001600081525090565b6040518060400160405280612f2c613238565b8152602001612cc36132ac565b6040518060400160405280612f4c61313d565b8152602001612cc36040518060200160405280600081525090565b60405180604001604052806002905b612f9c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612f765790505090565b604051806102c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016130196131fc565b815260200161302661321a565b815260200161303361321a565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161306c612f67565b81526020016000815260200161309e604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b8280546130c5906136da565b90600052602060002090601f0160209004810192826130e7576000855561312d565b82601f1061310057805160ff191683800117855561312d565b8280016001018555821561312d579182015b8281111561312d578251825591602001919060010190613112565b50613139929150613309565b5090565b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016131966131fc565b81526020016131a361321a565b81526020016131b061321a565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280612cc3612ce2565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161329f6131fc565b8152602001612da161321a565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016132fc612f67565b8152602001600081525090565b5b80821115613139576000815560010161330a565b60006040828403121561333057600080fd5b50919050565b60006020828403121561334857600080fd5b5035919050565b6001600160a01b038116811461336457600080fd5b50565b60006020828403121561337957600080fd5b813561049c8161334f565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106133b1576133b1613384565b808352506020830151151560208301526040830151604083015292915050565b600060c0828403121561333057600080fd5b8060005b6005811015611bf35781518452602093840193909101906001016133e7565b8060005b6006811015611bf357815184526020938401939091019060010161340a565b6000610400820190508251825260208301516020830152604083015161345a60408401826001600160a01b03169052565b5060608301516060830152608083015161347f60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e08301516134ae60e08401826001600160a01b03169052565b5061010083810151908301526101208084015190830152610140808401516134d8828501826133e3565b50506101608301516134ee6101e0840182613406565b506101808301516135036102a08401826133e3565b506101a0830151613518610340840182613406565b5092915050565b60005b8381101561353a578181015183820152602001613522565b83811115611bf35750506000910152565b828152604060208201526000825180604084015261357081606085016020870161351f565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff811182821017156135bf576135bf613585565b60405290565b6040516101e0810167ffffffffffffffff811182821017156135bf576135bf613585565b6040516102c0810167ffffffffffffffff811182821017156135bf576135bf613585565b6040805190810167ffffffffffffffff811182821017156135bf576135bf613585565b6040516020810167ffffffffffffffff811182821017156135bf576135bf613585565b60405160a0810167ffffffffffffffff811182821017156135bf576135bf613585565b801515811461336457600080fd5b60006040828403121561369657600080fd5b6040516040810181811067ffffffffffffffff821117156136b9576136b9613585565b6040528235815260208301356136ce81613676565b60208201529392505050565b600181811c908216806136ee57607f821691505b6020821081141561333057634e487b7160e01b600052602260045260246000fd5b80516105748161334f565b60006060828403121561372c57600080fd5b6040516060810181811067ffffffffffffffff8211171561374f5761374f613585565b80604052508091508251815260208301516020820152604083015161377381613676565b6040919091015292915050565b600082601f83011261379157600080fd5b6040516040810181811067ffffffffffffffff821117156137b4576137b4613585565b6040528060c08401858111156137c957600080fd5b845b818110156137ed576137dd878261371a565b83526020909201916060016137cb565b509195945050505050565b600082601f83011261380957600080fd5b60405160a0810181811067ffffffffffffffff8211171561382c5761382c613585565b6040528060a084018581111561384157600080fd5b845b818110156137ed578051835260209283019201613843565b600082601f83011261386c57600080fd5b60405160c0810181811067ffffffffffffffff8211171561388f5761388f613585565b6040528060c084018581111561384157600080fd5b600061042082840312156138b757600080fd5b6138bf61359b565b6138c88361370f565b8152602083015160208201526138e06040840161370f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061393181850161370f565b9082015261014061394485858301613780565b908201526139568461020085016137f8565b61016082015261396a846102a0850161385b565b61018082015261397e84610360850161385b565b6101a08201529392505050565b60006103a0828403121561399e57600080fd5b6139a66135c5565b6139af8361370f565b81526139bd6020840161370f565b60208201526040830151604082015260608301516060820152608083015160808201526139ec60a0840161370f565b60a08201526139fe8460c085016137f8565b60c0820152610160613a128582860161385b565b60e0830152613a2585610220860161385b565b6101008301526102e084015161012083015261030084015161014083015261032084015190820152610340830151610180820152613a66610360840161370f565b6101a082015261038092909201516101c083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613aa857613aa8613a80565b500390565b60006105608284031215613ac057600080fd5b613ac86135e9565b613ad18361370f565b8152613adf6020840161370f565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613b2260e0840161370f565b60e0820152610100613b36858286016137f8565b908201526101a0613b498585830161385b565b610120830152610260613b5e8682870161385b565b610140840152610320850151610160840152610340850151610180840152610360850151828401526103808501516101c0840152613b9f6103a0860161370f565b6101e0840152613bb3866103c08701613780565b610200840152610480850151610220840152613bd3866104a0870161371a565b6102408401526105008501519083015250610520830151610280820152610540909201516102a083015250919050565b600081830360c0811215613c1657600080fd5b613c1e61360d565b8335815260a0601f1983011215613c3457600080fd5b613c3c613630565b9150613c46613653565b602085013560048110613c5857600080fd5b81526040850135613c6881613676565b60208201526060850135613c7b81613676565b60408201526080850135613c8e81613676565b606082015260a0850135613ca181613676565b6080820152825260208101919091529392505050565b60008219821115613cca57613cca613a80565b500190565b81518152602082015151805160c08301919060048110613cf157613cf1613384565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b600082613d6257634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615613d8157613d81613a80565b500290565b6000600019821415613d9a57613d9a613a80565b5060010190565b8060005b6002811015611bf357613dcf84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101613da5565b81516001600160a01b0316815261056081016020830151613e1160208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151613e5e60e08401826001600160a01b03169052565b5061010080840151613e72828501826133e3565b50506101208301516101a0613e8981850183613406565b6101408501519150610260613ea081860184613406565b610160860151610320860152610180860151610340860152818601516103608601526101c08601516103808601526101e08601516001600160a01b03166103a08601526102008601519250613ef96103c0860184613da1565b61022086015161048086015261024086015180516104a087015260208101516104c08701526040015115156104e086015285015161050085015250506102808301516105208301526102a0909201516105409091015290565b81516001600160a01b031681526103a081016020830151613f7e60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a0830151613fb760a08401826001600160a01b03169052565b5060c0830151613fca60c08401826133e3565b5060e0830151610160613fdf81850183613406565b6101008501519150613ff5610220850183613406565b6101208501516102e0850152610140850151610300850152840151610320840152506101808301516103408301526101a08301516001600160a01b03166103608301526101c0909201516103809091015290565b6000825161405b81846020870161351f565b9190910192915050565b60006020828403121561407757600080fd5b815161049c8161367656fea264697066735822122061e516690a38e577a7f6d3630abc2ca8a12a2cee104db175f43f90645ff5aa0c64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220890fb1ba04e4ef860fe03902da3d9690d131d91d59d50085d239f59ca81f41f564736f6c634300080c0033`,
  BytecodeLen: 24283,
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
    at: './index.rsh:225:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:367:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:376:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:374:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:241:23:after expr stmt semicolon',
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

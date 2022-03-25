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
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async () => {
                
                const v2141 = {
                  currentPrice: v1215,
                  currentTotal: v1217,
                  currentWinner: v1218,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1212,
                  nftPrize: v1140,
                  paidToFunder: v1214,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v2136
                  };
                
                return v2141;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async () => {
                
                const v2141 = {
                  currentPrice: v1215,
                  currentTotal: v1217,
                  currentWinner: v1218,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1212,
                  nftPrize: v1140,
                  paidToFunder: v1214,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v2136
                  };
                
                return v2141;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = svs;
              return (await ((async () => {
                
                const v1261 = {
                  currentPrice: v1215,
                  currentTotal: v1217,
                  currentWinner: v1218,
                  deadline: v1141,
                  deltaDeadline: v1142,
                  discountPercents: v1190,
                  discountPrices: v1189,
                  endTimestamp: v1212,
                  nftPrize: v1140,
                  paidToFunder: v1214,
                  timeReductionPrices: v1189,
                  timeReductionSecs: v1192,
                  token: v1160,
                  tokenOwnedByUsers: v1256
                  };
                
                return v1261;}))(...args));
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
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async (_v2142 ) => {
                  const v2142 = stdlib.protect(ctc1, _v2142, null);
                
                const v2143 = stdlib.add(v2142, v1143);
                
                return v2143;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async (_v2142 ) => {
                  const v2142 = stdlib.protect(ctc1, _v2142, null);
                
                const v2143 = stdlib.add(v2142, v1143);
                
                return v2143;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = svs;
              return (await ((async (_v1262 ) => {
                  const v1262 = stdlib.protect(ctc1, _v1262, null);
                
                const v1263 = stdlib.add(v1262, v1143);
                
                return v1263;}))(...args));
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
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async (_v2144 ) => {
                  const v2144 = stdlib.protect(ctc1, _v2144, null);
                
                const v2145 = stdlib.sub(v2144, v1143);
                
                return v2145;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136] = svs;
              return (await ((async (_v2144 ) => {
                  const v2144 = stdlib.protect(ctc1, _v2144, null);
                
                const v2145 = stdlib.sub(v2144, v1143);
                
                return v2145;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = svs;
              return (await ((async (_v1264 ) => {
                  const v1264 = stdlib.protect(ctc1, _v1264, null);
                
                const v1265 = stdlib.sub(v1264, v1143);
                
                return v1265;}))(...args));
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
    Api_buyDiscount0_248: ctc10,
    Api_buyTicket0_248: ctc10,
    Api_buyTimeReduction0_248: ctc10,
    Api_getParticipantStats0_248: ctc10
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1282 = ctc.selfAddress();
  const v1284 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:319:14:application call to [unknown function] (defined at: ./index.rsh:319:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1285 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1282), null);
  const v1286 = stdlib.fromSome(v1285, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
  const v1287 = stdlib.lt(v1286, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1287, {
    at: './index.rsh:319:23:application',
    fs: ['at ./index.rsh:319:14:application call to [unknown function] (defined at: ./index.rsh:319:14:function exp)', 'at ./index.rsh:319:14:application call to [unknown function] (defined at: ./index.rsh:319:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1290 = ['Api_buyDiscount0_248', v1284];
  
  let v1311;
  const v1315 = stdlib.ge(v1286, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1315) {
    v1311 = stdlib.checkedBigNumberify('./index.rsh:172:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1318 = v1189[v1286];
    v1311 = v1318;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256, v1290],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:320:18:decimal', stdlib.UInt_max, 0), [[v1311, v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
      
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1384;
          const v1385 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1375), null);
          const v1386 = stdlib.fromSome(v1385, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1387 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1388 = stdlib.ge(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1388) {
            v1384 = stdlib.checkedBigNumberify('./index.rsh:172:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1391 = v1189[v1386];
            v1384 = v1391;
            }
          ;
          const v1447 = stdlib.add(v1255, v1384);
          const v1451 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1452 = [v1447, v1253, v1451];
          const v1453 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1452);
          sim_r.txns.push({
            amt: v1384,
            kind: 'to',
            tok: v1160
            });
          const v1458 = stdlib.add(v1386, stdlib.checkedBigNumberify('./index.rsh:327:47:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1375, v1458);
          const v1464 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1375), null);
          const v1465 = stdlib.fromSome(v1464, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1466 = {
            addr: v1375,
            discountLevel: v1458,
            timeReductionLevel: v1465
            };
          const v1468 = await txn1.getOutput('Api_buyDiscount', 'v1466', ctc12, v1466);
          
          const v3616 = v1212;
          const v3618 = v1214;
          const v3619 = v1215;
          const v3620 = v1217;
          const v3621 = v1218;
          const v3623 = v1453;
          const v3624 = v1226;
          const v3625 = v1453[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3626 = v3625[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3627 = v3625[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
          const v3628 = stdlib.sub(v3626, v3627);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          
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
  const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
  switch (v1376[0]) {
    case 'Api_buyDiscount0_248': {
      const v1379 = v1376[1];
      undefined /* setApiDetails */;
      let v1384;
      const v1385 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
      const v1386 = stdlib.fromSome(v1385, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
      const v1387 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1387, {
        at: './index.rsh:169:12:application',
        fs: ['at ./index.rsh:320:38:application call to "getDiscountPrice" (defined at: ./index.rsh:167:36:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1388 = stdlib.ge(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1388) {
        v1384 = stdlib.checkedBigNumberify('./index.rsh:172:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1391 = v1189[v1386];
        v1384 = v1391;
        }
      ;
      const v1447 = stdlib.add(v1255, v1384);
      const v1451 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
      const v1452 = [v1447, v1253, v1451];
      const v1453 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1452);
      ;
      const v1458 = stdlib.add(v1386, stdlib.checkedBigNumberify('./index.rsh:327:47:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1375, v1458);
      const v1464 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
      const v1465 = stdlib.fromSome(v1464, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
      const v1466 = {
        addr: v1375,
        discountLevel: v1458,
        timeReductionLevel: v1465
        };
      const v1468 = await txn1.getOutput('Api_buyDiscount', 'v1466', ctc12, v1466);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1379, v1468), {
          at: './index.rsh:318:11:application',
          fs: ['at ./index.rsh:318:11:application call to [unknown function] (defined at: ./index.rsh:318:11:function exp)', 'at ./index.rsh:336:21:application call to "callback" (defined at: ./index.rsh:321:22:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3616 = v1212;
      const v3618 = v1214;
      const v3619 = v1215;
      const v3620 = v1217;
      const v3621 = v1218;
      const v3623 = v1453;
      const v3624 = v1226;
      const v3625 = v1453[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3626 = v3625[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3627 = v3625[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
      const v3628 = stdlib.sub(v3626, v3627);
      return;
      
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1566 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1753 = v1376[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1940 = v1376[1];
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
    Api_buyDiscount0_248: ctc10,
    Api_buyTicket0_248: ctc10,
    Api_buyTimeReduction0_248: ctc10,
    Api_getParticipantStats0_248: ctc10
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1270 = ctc.selfAddress();
  const v1272 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:287:14:application call to [unknown function] (defined at: ./index.rsh:287:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1274 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:288:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1274, {
    at: './index.rsh:288:19:application',
    fs: ['at ./index.rsh:287:14:application call to [unknown function] (defined at: ./index.rsh:287:14:function exp)', 'at ./index.rsh:287:14:application call to [unknown function] (defined at: ./index.rsh:287:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1277 = stdlib.gt(v1255, v1145);
  stdlib.assert(v1277, {
    at: './index.rsh:289:19:application',
    fs: ['at ./index.rsh:287:14:application call to [unknown function] (defined at: ./index.rsh:287:14:function exp)', 'at ./index.rsh:287:14:application call to [unknown function] (defined at: ./index.rsh:287:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:285:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1280 = ['Api_buyTicket0_248', v1272];
  
  let v1329;
  const v1330 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1270), null);
  const v1331 = stdlib.fromSome(v1330, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
  const v1332 = stdlib.ge(v1331, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1332) {
    v1329 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1335 = v1190[v1331];
    v1329 = v1335;
    }
  const v1336 = stdlib.lt(v1329, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1336, {
    at: './index.rsh:189:12:application',
    fs: ['at ./index.rsh:291:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1337 = stdlib.div(v1329, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
  const v1338 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1337);
  const v1339 = stdlib.mul(v1215, v1338);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256, v1280],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1339, [[stdlib.checkedBigNumberify('./index.rsh:291:54:decimal', stdlib.UInt_max, 0), v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
      
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1586;
          const v1587 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1375), null);
          const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1589 = stdlib.ge(v1588, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1589) {
            v1586 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1592 = v1190[v1588];
            v1586 = v1592;
            }
          const v1593 = stdlib.lt(v1586, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1594 = stdlib.div(v1586, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1595 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1594);
          const v1596 = stdlib.mul(v1215, v1595);
          const v1631 = stdlib.add(v1226, v1596);
          sim_r.txns.push({
            amt: v1596,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1638 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1639 = [v1255, v1253, v1638];
          const v1640 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1639);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:293:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1663 = v1640[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          ;
          const v1666 = stdlib.div(v1215, v1144);
          const v1667 = stdlib.add(v1215, v1143);
          const v1672 = stdlib.sub(v1631, v1666);
          sim_r.txns.push({
            amt: v1666,
            kind: 'from',
            to: v1138,
            tok: undefined /* Nothing */
            });
          const v1678 = stdlib.sub(v1664, v1145);
          const v1681 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1)];
          const v1682 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 2)];
          const v1683 = [v1678, v1681, v1682];
          const v1684 = stdlib.Array_set(v1640, stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1), v1683);
          sim_r.txns.push({
            amt: v1145,
            kind: 'from',
            to: v1375,
            tok: v1160
            });
          let v1685;
          const v1686 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1375), null);
          const v1687 = stdlib.fromSome(v1686, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1688 = stdlib.ge(v1687, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1688) {
            v1685 = stdlib.checkedBigNumberify('./index.rsh:222:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1691 = v1192[v1687];
            v1685 = v1691;
            }
          const v1692 = stdlib.sub(v1142, v1685);
          const v1697 = {
            addr: v1375,
            discountLevel: v1588,
            timeReductionLevel: v1687
            };
          const v1699 = await txn1.getOutput('Api_buyTicket', 'v1697', ctc12, v1697);
          
          let v1705;
          if (v1589) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1588];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1215, v1714);
          const v1716 = stdlib.add(v1217, v1715);
          const v1717 = stdlib.add(v1214, v1666);
          const v1718 = stdlib.add(v1212, v1692);
          const v3751 = v1718;
          const v3753 = v1717;
          const v3754 = v1667;
          const v3755 = v1716;
          const v3756 = v1375;
          const v3758 = v1684;
          const v3759 = v1672;
          const v3760 = v1684[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3761 = v3760[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3762 = v3760[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
          const v3763 = stdlib.sub(v3761, v3762);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          
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
  const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
  switch (v1376[0]) {
    case 'Api_buyDiscount0_248': {
      const v1379 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1566 = v1376[1];
      undefined /* setApiDetails */;
      let v1586;
      const v1587 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
      const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
      const v1589 = stdlib.ge(v1588, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1589) {
        v1586 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1592 = v1190[v1588];
        v1586 = v1592;
        }
      const v1593 = stdlib.lt(v1586, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1593, {
        at: './index.rsh:189:12:application',
        fs: ['at ./index.rsh:291:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1594 = stdlib.div(v1586, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
      const v1595 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1594);
      const v1596 = stdlib.mul(v1215, v1595);
      const v1631 = stdlib.add(v1226, v1596);
      ;
      const v1638 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
      const v1639 = [v1255, v1253, v1638];
      const v1640 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1639);
      ;
      const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:293:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1662, {
        at: './index.rsh:293:20:application',
        fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1663 = v1640[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 1)];
      const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 0)];
      const v1665 = stdlib.gt(v1664, v1145);
      stdlib.assert(v1665, {
        at: './index.rsh:294:20:application',
        fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1666 = stdlib.div(v1215, v1144);
      const v1667 = stdlib.add(v1215, v1143);
      const v1672 = stdlib.sub(v1631, v1666);
      ;
      const v1678 = stdlib.sub(v1664, v1145);
      const v1681 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1)];
      const v1682 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 2)];
      const v1683 = [v1678, v1681, v1682];
      const v1684 = stdlib.Array_set(v1640, stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1), v1683);
      ;
      let v1685;
      const v1686 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
      const v1687 = stdlib.fromSome(v1686, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
      const v1688 = stdlib.ge(v1687, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1688) {
        v1685 = stdlib.checkedBigNumberify('./index.rsh:222:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1691 = v1192[v1687];
        v1685 = v1691;
        }
      const v1692 = stdlib.sub(v1142, v1685);
      const v1697 = {
        addr: v1375,
        discountLevel: v1588,
        timeReductionLevel: v1687
        };
      const v1699 = await txn1.getOutput('Api_buyTicket', 'v1697', ctc12, v1697);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1566, v1699), {
          at: './index.rsh:286:11:application',
          fs: ['at ./index.rsh:286:11:application call to [unknown function] (defined at: ./index.rsh:286:11:function exp)', 'at ./index.rsh:306:21:application call to "callback" (defined at: ./index.rsh:292:22:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      let v1705;
      if (v1589) {
        v1705 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1711 = v1190[v1588];
        v1705 = v1711;
        }
      const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1712, {
        at: './index.rsh:189:12:application',
        fs: ['at ./index.rsh:310:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
      const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1713);
      const v1715 = stdlib.mul(v1215, v1714);
      const v1716 = stdlib.add(v1217, v1715);
      const v1717 = stdlib.add(v1214, v1666);
      const v1718 = stdlib.add(v1212, v1692);
      const v3751 = v1718;
      const v3753 = v1717;
      const v3754 = v1667;
      const v3755 = v1716;
      const v3756 = v1375;
      const v3758 = v1684;
      const v3759 = v1672;
      const v3760 = v1684[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3761 = v3760[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3762 = v3760[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
      const v3763 = stdlib.sub(v3761, v3762);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1753 = v1376[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1940 = v1376[1];
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
    Api_buyDiscount0_248: ctc10,
    Api_buyTicket0_248: ctc10,
    Api_buyTimeReduction0_248: ctc10,
    Api_getParticipantStats0_248: ctc10
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1292 = ctc.selfAddress();
  const v1294 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:342:14:application call to [unknown function] (defined at: ./index.rsh:342:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:340:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1295 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1292), null);
  const v1296 = stdlib.fromSome(v1295, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
  const v1297 = stdlib.lt(v1296, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1297, {
    at: './index.rsh:342:23:application',
    fs: ['at ./index.rsh:342:14:application call to [unknown function] (defined at: ./index.rsh:342:14:function exp)', 'at ./index.rsh:342:14:application call to [unknown function] (defined at: ./index.rsh:342:14:function exp)', 'at ./index.rsh:255:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:340:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1300 = ['Api_buyTimeReduction0_248', v1294];
  
  let v1350;
  const v1354 = stdlib.ge(v1296, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1354) {
    v1350 = stdlib.checkedBigNumberify('./index.rsh:213:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1357 = v1189[v1296];
    v1350 = v1357;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256, v1300],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:343:18:decimal', stdlib.UInt_max, 0), [[v1350, v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
      
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1791;
          const v1792 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1375), null);
          const v1793 = stdlib.fromSome(v1792, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1794 = stdlib.lt(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1795 = stdlib.ge(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1795) {
            v1791 = stdlib.checkedBigNumberify('./index.rsh:213:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1798 = v1189[v1793];
            v1791 = v1798;
            }
          ;
          const v1821 = stdlib.add(v1255, v1791);
          const v1825 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1826 = [v1821, v1253, v1825];
          const v1827 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1826);
          sim_r.txns.push({
            amt: v1791,
            kind: 'to',
            tok: v1160
            });
          const v1911 = stdlib.add(v1793, stdlib.checkedBigNumberify('./index.rsh:350:57:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1375, v1911);
          const v1915 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1375), null);
          const v1916 = stdlib.fromSome(v1915, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1919 = {
            addr: v1375,
            discountLevel: v1916,
            timeReductionLevel: v1911
            };
          const v1921 = await txn1.getOutput('Api_buyTimeReduction', 'v1919', ctc12, v1919);
          
          const v3886 = v1212;
          const v3888 = v1214;
          const v3889 = v1215;
          const v3890 = v1217;
          const v3891 = v1218;
          const v3893 = v1827;
          const v3894 = v1226;
          const v3895 = v1827[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3896 = v3895[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v3897 = v3895[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
          const v3898 = stdlib.sub(v3896, v3897);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          
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
  const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
  switch (v1376[0]) {
    case 'Api_buyDiscount0_248': {
      const v1379 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1566 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1753 = v1376[1];
      undefined /* setApiDetails */;
      let v1791;
      const v1792 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
      const v1793 = stdlib.fromSome(v1792, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
      const v1794 = stdlib.lt(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1794, {
        at: './index.rsh:210:12:application',
        fs: ['at ./index.rsh:343:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:208:41:function exp)', 'at ./index.rsh:343:14:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1795 = stdlib.ge(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1795) {
        v1791 = stdlib.checkedBigNumberify('./index.rsh:213:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1798 = v1189[v1793];
        v1791 = v1798;
        }
      ;
      const v1821 = stdlib.add(v1255, v1791);
      const v1825 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
      const v1826 = [v1821, v1253, v1825];
      const v1827 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1826);
      ;
      const v1911 = stdlib.add(v1793, stdlib.checkedBigNumberify('./index.rsh:350:57:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1375, v1911);
      const v1915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
      const v1916 = stdlib.fromSome(v1915, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
      const v1919 = {
        addr: v1375,
        discountLevel: v1916,
        timeReductionLevel: v1911
        };
      const v1921 = await txn1.getOutput('Api_buyTimeReduction', 'v1919', ctc12, v1919);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1753, v1921), {
          at: './index.rsh:341:11:application',
          fs: ['at ./index.rsh:341:11:application call to [unknown function] (defined at: ./index.rsh:341:11:function exp)', 'at ./index.rsh:360:21:application call to "callback" (defined at: ./index.rsh:344:22:function exp)', 'at ./index.rsh:344:22:application call to [unknown function] (defined at: ./index.rsh:344:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v3886 = v1212;
      const v3888 = v1214;
      const v3889 = v1215;
      const v3890 = v1217;
      const v3891 = v1218;
      const v3893 = v1827;
      const v3894 = v1226;
      const v3895 = v1827[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3896 = v3895[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v3897 = v3895[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
      const v3898 = stdlib.sub(v3896, v3897);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1940 = v1376[1];
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
    Api_buyDiscount0_248: ctc10,
    Api_buyTicket0_248: ctc10,
    Api_buyTimeReduction0_248: ctc10,
    Api_getParticipantStats0_248: ctc10
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
  
  
  const [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1304 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:364:13:application call to [unknown function] (defined at: ./index.rsh:364:13:function exp)', 'at ./index.rsh:255:23:application call to "runApi_getParticipantStats0_248" (defined at: ./index.rsh:364:13:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1308 = ['Api_getParticipantStats0_248', v1304];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256, v1308],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:364:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:284:18:decimal', stdlib.UInt_max, 0), v1160]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
      
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2012 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v2013 = [v1255, v1253, v2012];
          const v2014 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v2013);
          ;
          const v2115 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1375), null);
          const v2116 = stdlib.fromSome(v2115, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v2117 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1375), null);
          const v2118 = stdlib.fromSome(v2117, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v2119 = {
            addr: v1375,
            discountLevel: v2116,
            timeReductionLevel: v2118
            };
          const v2121 = await txn1.getOutput('Api_getParticipantStats', 'v2119', ctc12, v2119);
          
          const v4021 = v1212;
          const v4023 = v1214;
          const v4024 = v1215;
          const v4025 = v1217;
          const v4026 = v1218;
          const v4028 = v2014;
          const v4029 = v1226;
          const v4030 = v2014[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v4031 = v4030[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
          const v4032 = v4030[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
          const v4033 = stdlib.sub(v4031, v4032);
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
  const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn1;
  switch (v1376[0]) {
    case 'Api_buyDiscount0_248': {
      const v1379 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1566 = v1376[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1753 = v1376[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1940 = v1376[1];
      undefined /* setApiDetails */;
      ;
      const v2012 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
      const v2013 = [v1255, v1253, v2012];
      const v2014 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v2013);
      ;
      const v2115 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
      const v2116 = stdlib.fromSome(v2115, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
      const v2117 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
      const v2118 = stdlib.fromSome(v2117, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
      const v2119 = {
        addr: v1375,
        discountLevel: v2116,
        timeReductionLevel: v2118
        };
      const v2121 = await txn1.getOutput('Api_getParticipantStats', 'v2119', ctc12, v2119);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1940, v2121), {
          at: './index.rsh:365:11:application',
          fs: ['at ./index.rsh:365:11:application call to [unknown function] (defined at: ./index.rsh:365:11:function exp)', 'at ./index.rsh:368:21:application call to "callback" (defined at: ./index.rsh:366:22:function exp)', 'at ./index.rsh:366:22:application call to [unknown function] (defined at: ./index.rsh:366:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4021 = v1212;
      const v4023 = v1214;
      const v4024 = v1215;
      const v4025 = v1217;
      const v4026 = v1218;
      const v4028 = v2014;
      const v4029 = v1226;
      const v4030 = v2014[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v4031 = v4030[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
      const v4032 = v4030[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
      const v4033 = stdlib.sub(v4031, v4032);
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
    Api_buyDiscount0_248: ctc4,
    Api_buyTicket0_248: ctc4,
    Api_buyTimeReduction0_248: ctc4,
    Api_getParticipantStats0_248: ctc4
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
  const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0)];
  const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 1)];
  const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 2)];
  const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
  const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0), v1152);
  ;
  ;
  const v1155 = 'Metafomo                        ';
  const v1156 = 'METAFOMO';
  const v1157 = 'https://metalabs.technology                                                                     ';
  const v1158 = '                                ';
  const v1159 = undefined /* TokenNew */;
  const v1160 = await txn1.getOutput('internal', 'v1159', ctc3, v1159);
  const v1161 = [v1140];
  const v2195 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2199 = stdlib.tokenEq(v1160, v2195);
  const v1169 = v2199 ? false : true;
  stdlib.assert(v1169, {
    at: './index.rsh:146:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
  const v1174 = [stdlib.UInt_max, v1172, v1173];
  const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1174);
  const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
  const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
  const v1181 = [v1178, stdlib.UInt_max, v1180];
  const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1181);
  const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1187 = [v1184, v1185, false];
  const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1187);
  const v1189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1190 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1195, time: v1194, didSend: v165, from: v1193 } = txn2;
  ;
  const v1196 = v1188[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
  const v1198 = stdlib.add(v1197, stdlib.checkedBigNumberify('./index.rsh:239:18:decimal', stdlib.UInt_max, 1));
  const v1201 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 1)];
  const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 2)];
  const v1203 = [v1198, v1201, v1202];
  const v1204 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0), v1203);
  ;
  const v1205 = stdlib.addressEq(v1138, v1193);
  stdlib.assert(v1205, {
    at: './index.rsh:239:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:243:24:application',
    fs: ['at ./index.rsh:242:9:application call to [unknown function] (defined at: ./index.rsh:242:30:function exp)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const v1211 = stdlib.add(v1147, v1141);
  let v1212 = v1211;
  let v1213 = true;
  let v1214 = stdlib.checkedBigNumberify('./index.rsh:255:59:decimal', stdlib.UInt_max, 0);
  let v1215 = v1139;
  let v1217 = stdlib.checkedBigNumberify('./index.rsh:255:43:decimal', stdlib.UInt_max, 0);
  let v1218 = v1138;
  let v1219 = v1194;
  let v1225 = v1204;
  let v1226 = stdlib.checkedBigNumberify('./index.rsh:129:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1213;})()) {
    const v1252 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
    const v1253 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
    const v1255 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
    const v1256 = stdlib.sub(v1253, v1255);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1212],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1219,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:374:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2129, time: v2128, didSend: v921, from: v2127 } = txn4;
          
          ;
          const cv1212 = v1212;
          const cv1213 = false;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v2128;
          const cv1225 = v1225;
          const cv1226 = v1226;
          
          await (async () => {
            const v1212 = cv1212;
            const v1213 = cv1213;
            const v1214 = cv1214;
            const v1215 = cv1215;
            const v1217 = cv1217;
            const v1218 = cv1218;
            const v1219 = cv1219;
            const v1225 = cv1225;
            const v1226 = cv1226;
            
            if (await (async () => {
              
              return v1213;})()) {
              const v1252 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v1253 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v1255 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
              const v1256 = stdlib.sub(v1253, v1255);
              sim_r.isHalt = false;
              }
            else {
              const v2132 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v2135 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
              const v2136 = stdlib.sub(v2133, v2135);
              sim_r.txns.push({
                amt: v1226,
                kind: 'from',
                to: v1218,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:379:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1218,
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
      const {data: [], secs: v2129, time: v2128, didSend: v921, from: v2127 } = txn4;
      ;
      const cv1212 = v1212;
      const cv1213 = false;
      const cv1214 = v1214;
      const cv1215 = v1215;
      const cv1217 = v1217;
      const cv1218 = v1218;
      const cv1219 = v2128;
      const cv1225 = v1225;
      const cv1226 = v1226;
      
      v1212 = cv1212;
      v1213 = cv1213;
      v1214 = cv1214;
      v1215 = cv1215;
      v1217 = cv1217;
      v1218 = cv1218;
      v1219 = cv1219;
      v1225 = cv1225;
      v1226 = cv1226;
      
      continue;
      }
    else {
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn3;
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          undefined /* setApiDetails */;
          let v1384;
          const v1385 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1386 = stdlib.fromSome(v1385, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1387 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1387, {
            at: './index.rsh:169:12:application',
            fs: ['at ./index.rsh:320:38:application call to "getDiscountPrice" (defined at: ./index.rsh:167:36:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1388 = stdlib.ge(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1388) {
            v1384 = stdlib.checkedBigNumberify('./index.rsh:172:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1391 = v1189[v1386];
            v1384 = v1391;
            }
          ;
          const v1447 = stdlib.add(v1255, v1384);
          const v1451 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1452 = [v1447, v1253, v1451];
          const v1453 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1452);
          ;
          const v1458 = stdlib.add(v1386, stdlib.checkedBigNumberify('./index.rsh:327:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1375, v1458);
          const v1459 = ctc.selfAddress();
          stdlib.protect(ctc0, await interact.updateDiscountLevel(v1459, v1458), {
            at: './index.rsh:331:45:application',
            fs: ['at ./index.rsh:329:23:application call to [unknown function] (defined at: ./index.rsh:329:27:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: 'updateDiscountLevel',
            who: 'Buyer'
            });
          
          const v1464 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1465 = stdlib.fromSome(v1464, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1466 = {
            addr: v1375,
            discountLevel: v1458,
            timeReductionLevel: v1465
            };
          await txn3.getOutput('Api_buyDiscount', 'v1466', ctc7, v1466);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v1453;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          undefined /* setApiDetails */;
          let v1586;
          const v1587 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1589 = stdlib.ge(v1588, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1589) {
            v1586 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1592 = v1190[v1588];
            v1586 = v1592;
            }
          const v1593 = stdlib.lt(v1586, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1593, {
            at: './index.rsh:189:12:application',
            fs: ['at ./index.rsh:291:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1594 = stdlib.div(v1586, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1595 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1594);
          const v1596 = stdlib.mul(v1215, v1595);
          const v1631 = stdlib.add(v1226, v1596);
          ;
          const v1638 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1639 = [v1255, v1253, v1638];
          const v1640 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1639);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:293:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1662, {
            at: './index.rsh:293:20:application',
            fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1663 = v1640[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          stdlib.assert(v1665, {
            at: './index.rsh:294:20:application',
            fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1666 = stdlib.div(v1215, v1144);
          const v1667 = stdlib.add(v1215, v1143);
          stdlib.protect(ctc0, await interact.showPurchase(v1375, v1215, v1667), {
            at: './index.rsh:299:51:application',
            fs: ['at ./index.rsh:299:23:application call to [unknown function] (defined at: ./index.rsh:299:27:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1672 = stdlib.sub(v1631, v1666);
          ;
          const v1678 = stdlib.sub(v1664, v1145);
          const v1681 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1)];
          const v1682 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 2)];
          const v1683 = [v1678, v1681, v1682];
          const v1684 = stdlib.Array_set(v1640, stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1), v1683);
          ;
          let v1685;
          const v1686 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1687 = stdlib.fromSome(v1686, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1688 = stdlib.ge(v1687, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1688) {
            v1685 = stdlib.checkedBigNumberify('./index.rsh:222:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1691 = v1192[v1687];
            v1685 = v1691;
            }
          const v1692 = stdlib.sub(v1142, v1685);
          const v1697 = {
            addr: v1375,
            discountLevel: v1588,
            timeReductionLevel: v1687
            };
          await txn3.getOutput('Api_buyTicket', 'v1697', ctc7, v1697);
          let v1705;
          if (v1589) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1588];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1712, {
            at: './index.rsh:189:12:application',
            fs: ['at ./index.rsh:310:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1215, v1714);
          const v1716 = stdlib.add(v1217, v1715);
          const v1717 = stdlib.add(v1214, v1666);
          const v1718 = stdlib.add(v1212, v1692);
          const cv1212 = v1718;
          const cv1213 = true;
          const cv1214 = v1717;
          const cv1215 = v1667;
          const cv1217 = v1716;
          const cv1218 = v1375;
          const cv1219 = v1377;
          const cv1225 = v1684;
          const cv1226 = v1672;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          undefined /* setApiDetails */;
          let v1791;
          const v1792 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1793 = stdlib.fromSome(v1792, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1794 = stdlib.lt(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1794, {
            at: './index.rsh:210:12:application',
            fs: ['at ./index.rsh:343:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:208:41:function exp)', 'at ./index.rsh:343:14:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1795 = stdlib.ge(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1795) {
            v1791 = stdlib.checkedBigNumberify('./index.rsh:213:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1798 = v1189[v1793];
            v1791 = v1798;
            }
          ;
          const v1821 = stdlib.add(v1255, v1791);
          const v1825 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1826 = [v1821, v1253, v1825];
          const v1827 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1826);
          ;
          const v1911 = stdlib.add(v1793, stdlib.checkedBigNumberify('./index.rsh:350:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1375, v1911);
          const v1912 = ctc.selfAddress();
          stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1912, v1911), {
            at: './index.rsh:355:50:application',
            fs: ['at ./index.rsh:352:23:application call to [unknown function] (defined at: ./index.rsh:352:27:function exp)', 'at ./index.rsh:344:22:application call to [unknown function] (defined at: ./index.rsh:344:22:function exp)'],
            msg: 'updateTimeReductionLevel',
            who: 'Buyer'
            });
          
          const v1915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1916 = stdlib.fromSome(v1915, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1919 = {
            addr: v1375,
            discountLevel: v1916,
            timeReductionLevel: v1911
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1919', ctc7, v1919);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v1827;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          undefined /* setApiDetails */;
          ;
          const v2012 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v2013 = [v1255, v1253, v2012];
          const v2014 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v2013);
          ;
          const v2115 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v2116 = stdlib.fromSome(v2115, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v2117 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v2118 = stdlib.fromSome(v2117, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v2119 = {
            addr: v1375,
            discountLevel: v2116,
            timeReductionLevel: v2118
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2119', ctc7, v2119);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v2014;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        }}
    
    }
  const v2132 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
  const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
  const v2135 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
  const v2136 = stdlib.sub(v2133, v2135);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1218), {
    at: './index.rsh:109:29:application',
    fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:32:function exp)', 'at ./index.rsh:381:16:application call to "showOutcome" (defined at: ./index.rsh:107:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1219,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:384:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2169, time: v2168, didSend: v958, from: v2167 } = txn3;
      
      ;
      const v2170 = v2168;
      
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
  const {data: [], secs: v2169, time: v2168, didSend: v958, from: v2167 } = txn3;
  ;
  let v2170 = v2168;
  
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
    const {data: [], secs: v2182, time: v2181, didSend: v967, from: v2180 } = txn4;
    ;
    const v2183 = stdlib.addressEq(v1138, v2180);
    stdlib.assert(v2183, {
      at: './index.rsh:387:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2170 = v2181;
    
    v2170 = cv2170;
    
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
    Api_buyDiscount0_248: ctc5,
    Api_buyTicket0_248: ctc5,
    Api_buyTimeReduction0_248: ctc5,
    Api_getParticipantStats0_248: ctc5
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
    at: './index.rsh:134:38:application',
    fs: ['at ./index.rsh:132:16:application call to [unknown function] (defined at: ./index.rsh:132:20:function exp)'],
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
  const v1137 = stdlib.gt(v1135, stdlib.checkedBigNumberify('./index.rsh:135:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1137, {
    at: './index.rsh:135:12:application',
    fs: ['at ./index.rsh:132:16:application call to [unknown function] (defined at: ./index.rsh:132:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1130, v1131, v1132, v1133, v1134, v1135, v1136],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1139, v1140, v1141, v1142, v1143, v1144, v1145], secs: v1147, time: v1146, didSend: v52, from: v1138 } = txn1;
      
      const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0)];
      const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 1)];
      const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 2)];
      const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
      const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0), v1152);
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
      const v2195 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2199 = stdlib.tokenEq(v1160, v2195);
      const v1169 = v2199 ? false : true;
      ;
      const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
      const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
      const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
      const v1174 = [stdlib.UInt_max, v1172, v1173];
      const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1174);
      const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
      const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
      const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
      const v1181 = [v1178, stdlib.UInt_max, v1180];
      const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1181);
      const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
      const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
      const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
      const v1187 = [v1184, v1185, false];
      const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1187);
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
  const v1148 = v1118[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0)];
  const v1150 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 1)];
  const v1151 = v1148[stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 2)];
  const v1152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1150, v1151];
  const v1153 = stdlib.Array_set(v1118, stdlib.checkedBigNumberify('./index.rsh:137:12:dot', stdlib.UInt_max, 0), v1152);
  ;
  ;
  const v1155 = 'Metafomo                        ';
  const v1156 = 'METAFOMO';
  const v1157 = 'https://metalabs.technology                                                                     ';
  const v1158 = '                                ';
  const v1159 = undefined /* TokenNew */;
  const v1160 = await txn1.getOutput('internal', 'v1159', ctc3, v1159);
  const v1161 = [v1140];
  const v2195 = v1161[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2199 = stdlib.tokenEq(v1160, v2195);
  const v1169 = v2199 ? false : true;
  stdlib.assert(v1169, {
    at: './index.rsh:146:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1170 = v1153[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1172 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1173 = v1170[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
  const v1174 = [stdlib.UInt_max, v1172, v1173];
  const v1175 = stdlib.Array_set(v1153, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1174);
  const v1177 = v1175[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1178 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
  const v1180 = v1177[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 2)];
  const v1181 = [v1178, stdlib.UInt_max, v1180];
  const v1182 = stdlib.Array_set(v1175, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1181);
  const v1183 = v1182[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1184 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 0)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1)];
  const v1187 = [v1184, v1185, false];
  const v1188 = stdlib.Array_set(v1182, stdlib.checkedBigNumberify('./index.rsh:146:32:application', stdlib.UInt_max, 1), v1187);
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:239:18:decimal', stdlib.UInt_max, 1), v1140]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1195, time: v1194, didSend: v165, from: v1193 } = txn2;
      
      ;
      const v1196 = v1188[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
      const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
      const v1198 = stdlib.add(v1197, stdlib.checkedBigNumberify('./index.rsh:239:18:decimal', stdlib.UInt_max, 1));
      const v1201 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 1)];
      const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 2)];
      const v1203 = [v1198, v1201, v1202];
      const v1204 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0), v1203);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:239:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1140
        });
      const v1205 = stdlib.addressEq(v1138, v1193);
      ;
      
      const v1211 = stdlib.add(v1147, v1141);
      const v1212 = v1211;
      const v1213 = true;
      const v1214 = stdlib.checkedBigNumberify('./index.rsh:255:59:decimal', stdlib.UInt_max, 0);
      const v1215 = v1139;
      const v1217 = stdlib.checkedBigNumberify('./index.rsh:255:43:decimal', stdlib.UInt_max, 0);
      const v1218 = v1138;
      const v1219 = v1194;
      const v1225 = v1204;
      const v1226 = stdlib.checkedBigNumberify('./index.rsh:129:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1213;})()) {
        const v1252 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
        const v1253 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
        const v1255 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
        const v1256 = stdlib.sub(v1253, v1255);
        sim_r.isHalt = false;
        }
      else {
        const v2132 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
        const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
        const v2135 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
        const v2136 = stdlib.sub(v2133, v2135);
        sim_r.txns.push({
          amt: v1226,
          kind: 'from',
          to: v1218,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:379:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1218,
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
  const {data: [], secs: v1195, time: v1194, didSend: v165, from: v1193 } = txn2;
  ;
  const v1196 = v1188[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0)];
  const v1198 = stdlib.add(v1197, stdlib.checkedBigNumberify('./index.rsh:239:18:decimal', stdlib.UInt_max, 1));
  const v1201 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 1)];
  const v1202 = v1196[stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 2)];
  const v1203 = [v1198, v1201, v1202];
  const v1204 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:239:12:dot', stdlib.UInt_max, 0), v1203);
  ;
  const v1205 = stdlib.addressEq(v1138, v1193);
  stdlib.assert(v1205, {
    at: './index.rsh:239:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:243:24:application',
    fs: ['at ./index.rsh:242:9:application call to [unknown function] (defined at: ./index.rsh:242:30:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1211 = stdlib.add(v1147, v1141);
  let v1212 = v1211;
  let v1213 = true;
  let v1214 = stdlib.checkedBigNumberify('./index.rsh:255:59:decimal', stdlib.UInt_max, 0);
  let v1215 = v1139;
  let v1217 = stdlib.checkedBigNumberify('./index.rsh:255:43:decimal', stdlib.UInt_max, 0);
  let v1218 = v1138;
  let v1219 = v1194;
  let v1225 = v1204;
  let v1226 = stdlib.checkedBigNumberify('./index.rsh:129:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1213;})()) {
    const v1252 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
    const v1253 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
    const v1255 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
    const v1256 = stdlib.sub(v1253, v1255);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1212],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1138, v1140, v1141, v1142, v1143, v1144, v1145, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v1225, v1226, v1252, v1253, v1255, v1256],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1219,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:374:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2129, time: v2128, didSend: v921, from: v2127 } = txn4;
          
          ;
          const cv1212 = v1212;
          const cv1213 = false;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v2128;
          const cv1225 = v1225;
          const cv1226 = v1226;
          
          await (async () => {
            const v1212 = cv1212;
            const v1213 = cv1213;
            const v1214 = cv1214;
            const v1215 = cv1215;
            const v1217 = cv1217;
            const v1218 = cv1218;
            const v1219 = cv1219;
            const v1225 = cv1225;
            const v1226 = cv1226;
            
            if (await (async () => {
              
              return v1213;})()) {
              const v1252 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v1253 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v1255 = v1252[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
              const v1256 = stdlib.sub(v1253, v1255);
              sim_r.isHalt = false;
              }
            else {
              const v2132 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
              const v2135 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
              const v2136 = stdlib.sub(v2133, v2135);
              sim_r.txns.push({
                amt: v1226,
                kind: 'from',
                to: v1218,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:379:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1218,
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
      const {data: [], secs: v2129, time: v2128, didSend: v921, from: v2127 } = txn4;
      ;
      const cv1212 = v1212;
      const cv1213 = false;
      const cv1214 = v1214;
      const cv1215 = v1215;
      const cv1217 = v1217;
      const cv1218 = v1218;
      const cv1219 = v2128;
      const cv1225 = v1225;
      const cv1226 = v1226;
      
      v1212 = cv1212;
      v1213 = cv1213;
      v1214 = cv1214;
      v1215 = cv1215;
      v1217 = cv1217;
      v1218 = cv1218;
      v1219 = cv1219;
      v1225 = cv1225;
      v1226 = cv1226;
      
      continue;
      }
    else {
      const {data: [v1376], secs: v1378, time: v1377, didSend: v773, from: v1375 } = txn3;
      switch (v1376[0]) {
        case 'Api_buyDiscount0_248': {
          const v1379 = v1376[1];
          undefined /* setApiDetails */;
          let v1384;
          const v1385 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1386 = stdlib.fromSome(v1385, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1387 = stdlib.lt(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1387, {
            at: './index.rsh:169:12:application',
            fs: ['at ./index.rsh:320:38:application call to "getDiscountPrice" (defined at: ./index.rsh:167:36:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1388 = stdlib.ge(v1386, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1388) {
            v1384 = stdlib.checkedBigNumberify('./index.rsh:172:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1391 = v1189[v1386];
            v1384 = v1391;
            }
          ;
          const v1447 = stdlib.add(v1255, v1384);
          const v1451 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1452 = [v1447, v1253, v1451];
          const v1453 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1452);
          ;
          const v1458 = stdlib.add(v1386, stdlib.checkedBigNumberify('./index.rsh:327:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1375, v1458);
          const v1464 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1465 = stdlib.fromSome(v1464, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1466 = {
            addr: v1375,
            discountLevel: v1458,
            timeReductionLevel: v1465
            };
          await txn3.getOutput('Api_buyDiscount', 'v1466', ctc8, v1466);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v1453;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1566 = v1376[1];
          undefined /* setApiDetails */;
          let v1586;
          const v1587 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1589 = stdlib.ge(v1588, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1589) {
            v1586 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1592 = v1190[v1588];
            v1586 = v1592;
            }
          const v1593 = stdlib.lt(v1586, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1593, {
            at: './index.rsh:189:12:application',
            fs: ['at ./index.rsh:291:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1594 = stdlib.div(v1586, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1595 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1594);
          const v1596 = stdlib.mul(v1215, v1595);
          const v1631 = stdlib.add(v1226, v1596);
          ;
          const v1638 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1639 = [v1255, v1253, v1638];
          const v1640 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1639);
          ;
          const v1662 = stdlib.gt(v1144, stdlib.checkedBigNumberify('./index.rsh:293:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1662, {
            at: './index.rsh:293:20:application',
            fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1663 = v1640[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 1)];
          const v1664 = v1663[stdlib.checkedBigNumberify('./index.rsh:294:28:application', stdlib.UInt_max, 0)];
          const v1665 = stdlib.gt(v1664, v1145);
          stdlib.assert(v1665, {
            at: './index.rsh:294:20:application',
            fs: ['at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1666 = stdlib.div(v1215, v1144);
          const v1667 = stdlib.add(v1215, v1143);
          const v1672 = stdlib.sub(v1631, v1666);
          ;
          const v1678 = stdlib.sub(v1664, v1145);
          const v1681 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1)];
          const v1682 = v1663[stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 2)];
          const v1683 = [v1678, v1681, v1682];
          const v1684 = stdlib.Array_set(v1640, stdlib.checkedBigNumberify('./index.rsh:301:61:application', stdlib.UInt_max, 1), v1683);
          ;
          let v1685;
          const v1686 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1687 = stdlib.fromSome(v1686, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1688 = stdlib.ge(v1687, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1688) {
            v1685 = stdlib.checkedBigNumberify('./index.rsh:222:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1691 = v1192[v1687];
            v1685 = v1691;
            }
          const v1692 = stdlib.sub(v1142, v1685);
          const v1697 = {
            addr: v1375,
            discountLevel: v1588,
            timeReductionLevel: v1687
            };
          await txn3.getOutput('Api_buyTicket', 'v1697', ctc8, v1697);
          let v1705;
          if (v1589) {
            v1705 = stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1711 = v1190[v1588];
            v1705 = v1711;
            }
          const v1712 = stdlib.lt(v1705, stdlib.checkedBigNumberify('./index.rsh:189:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1712, {
            at: './index.rsh:189:12:application',
            fs: ['at ./index.rsh:310:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1713 = stdlib.div(v1705, stdlib.checkedBigNumberify('./index.rsh:190:27:decimal', stdlib.UInt_max, 100));
          const v1714 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:190:23:decimal', stdlib.UInt_max, 1), v1713);
          const v1715 = stdlib.mul(v1215, v1714);
          const v1716 = stdlib.add(v1217, v1715);
          const v1717 = stdlib.add(v1214, v1666);
          const v1718 = stdlib.add(v1212, v1692);
          const cv1212 = v1718;
          const cv1213 = true;
          const cv1214 = v1717;
          const cv1215 = v1667;
          const cv1217 = v1716;
          const cv1218 = v1375;
          const cv1219 = v1377;
          const cv1225 = v1684;
          const cv1226 = v1672;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1753 = v1376[1];
          undefined /* setApiDetails */;
          let v1791;
          const v1792 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v1793 = stdlib.fromSome(v1792, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v1794 = stdlib.lt(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1794, {
            at: './index.rsh:210:12:application',
            fs: ['at ./index.rsh:343:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:208:41:function exp)', 'at ./index.rsh:343:14:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:343:14:function exp)', 'at ./index.rsh:255:23:application call to [unknown function] (defined at: ./index.rsh:255:23:function exp)', 'at ./index.rsh:284:18:application call to [unknown function] (defined at: ./index.rsh:284:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1795 = stdlib.ge(v1793, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1795) {
            v1791 = stdlib.checkedBigNumberify('./index.rsh:213:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1798 = v1189[v1793];
            v1791 = v1798;
            }
          ;
          const v1821 = stdlib.add(v1255, v1791);
          const v1825 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v1826 = [v1821, v1253, v1825];
          const v1827 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v1826);
          ;
          const v1911 = stdlib.add(v1793, stdlib.checkedBigNumberify('./index.rsh:350:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1375, v1911);
          const v1915 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v1916 = stdlib.fromSome(v1915, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v1919 = {
            addr: v1375,
            discountLevel: v1916,
            timeReductionLevel: v1911
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1919', ctc8, v1919);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v1827;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1940 = v1376[1];
          undefined /* setApiDetails */;
          ;
          const v2012 = v1252[stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 2)];
          const v2013 = [v1255, v1253, v2012];
          const v2014 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:255:23:dot', stdlib.UInt_max, 1), v2013);
          ;
          const v2115 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1375), null);
          const v2116 = stdlib.fromSome(v2115, stdlib.checkedBigNumberify('./index.rsh:165:64:decimal', stdlib.UInt_max, 0));
          const v2117 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1375), null);
          const v2118 = stdlib.fromSome(v2117, stdlib.checkedBigNumberify('./index.rsh:206:74:decimal', stdlib.UInt_max, 0));
          const v2119 = {
            addr: v1375,
            discountLevel: v2116,
            timeReductionLevel: v2118
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2119', ctc8, v2119);
          const cv1212 = v1212;
          const cv1213 = true;
          const cv1214 = v1214;
          const cv1215 = v1215;
          const cv1217 = v1217;
          const cv1218 = v1218;
          const cv1219 = v1377;
          const cv1225 = v2014;
          const cv1226 = v1226;
          
          v1212 = cv1212;
          v1213 = cv1213;
          v1214 = cv1214;
          v1215 = cv1215;
          v1217 = cv1217;
          v1218 = cv1218;
          v1219 = cv1219;
          v1225 = cv1225;
          v1226 = cv1226;
          
          continue;
          break;
          }
        }}
    
    }
  const v2132 = v1225[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
  const v2133 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:48:application', stdlib.UInt_max, 1)];
  const v2135 = v2132[stdlib.checkedBigNumberify('./index.rsh:262:60:application', stdlib.UInt_max, 0)];
  const v2136 = stdlib.sub(v2133, v2135);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1218), {
    at: './index.rsh:109:29:application',
    fs: ['at ./index.rsh:108:11:application call to [unknown function] (defined at: ./index.rsh:108:32:function exp)', 'at ./index.rsh:381:16:application call to "showOutcome" (defined at: ./index.rsh:107:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1219,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:384:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2169, time: v2168, didSend: v958, from: v2167 } = txn3;
      
      ;
      const v2170 = v2168;
      
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
  const {data: [], secs: v2169, time: v2168, didSend: v958, from: v2167 } = txn3;
  ;
  let v2170 = v2168;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1138, v1140, v1141, v1142, v1143, v1160, v1189, v1190, v1192, v1212, v1214, v1215, v1217, v1218, v2136],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2170,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:387:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2182, time: v2181, didSend: v967, from: v2180 } = txn4;
        
        ;
        const v2183 = stdlib.addressEq(v1138, v2180);
        ;
        const cv2170 = v2181;
        
        await (async () => {
          const v2170 = cv2170;
          
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
    const {data: [], secs: v2182, time: v2181, didSend: v967, from: v2180 } = txn4;
    ;
    const v2183 = stdlib.addressEq(v1138, v2180);
    stdlib.assert(v2183, {
      at: './index.rsh:387:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2170 = v2181;
    
    v2170 = cv2170;
    
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
  appApproval: `BiAmAAEIBzgDIAUGKDAEQJAC4AHoAWSAAkhQoI0GEpO5vtQE1PPd8QuDo/jPDYWf7bsJi7iLgQKgpJi0BPAB+AGgAiLCAhEC+QHQAdgBJgUBAAEBAQIACP//////////IjUAMRhBDk4rZEkiWzUBJFs1AjEZIxJBAAoxACghFa9mQg4jNhoAF0lBAoYiNQQjNQZJIRYMQAEFSSEXDEAAgEkhGAxAAGkhGBJENAFJIQgMQAA+SSUMQAAdJRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDcZIKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDashBRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDY0hFxJEKzX/gAEDNP9QQgKlSSEZDEAADiEZEkQrNf8qNP9QQgKQIRYSRDQBSSEIDEAAPkklDEAAHSUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg04SChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg0dIQUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQgz/SSEaDEABXEkhGwxAAUchGxJENAFJIQgMQADTSSUMQABpJRJEKGQpZFAqZFBJNQNXWCg1/zQDVygINANXMAhQNANXIAhQNAOB6wIkWFA0A1dQCFA0A1fwCFA0A1f4CFA0AyERIQZYUDQDV+gIUDQDV+AIUDT/UDQDV4AwUDT/UDQDV7AwUDUHQgx1SChkKWRQKmRQSTUDV0goNf80A1coCDQDVzAIUDQDVyAIUDQDIQ0kWFA0A1dACFA0A1fgCFA0A1foCFA0A1fwIFA0A1fYCFA0A1fQCFA0/1A0A1dwMFA0/1A0A1egMFA1B0IMESEFEkQoZClkUCpkUEk1A1dIKDX/NANXKAg0A1cwCFA0A1cgCFA0AyENJFhQNANXQAhQNANX4AhQNANX6AhQNANX8CBQNANX2AhQNANX0AhQNP9QNANXcDBQNP9QNANXoDBQNQdCC6ohGhJEKzX/KTT/UEIAxIGthJtjEkQrNf8oNP9QQgCzNhoCFzUENhoDNhoBF0khCwxABalJIQgMQAUeSSUMQACRJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDIQ5bNf+ABOIbs6mwMgc0/w9ENANXACA0AyEGWzQDIQlbNAMhCls0AyEEWzQDIQxbNAMhEls0AyETWzQDV1goNANXgDA0A1ewMDT/IjQDIQ9bNAMhHFs0AyEdWzQDIREhBlgyBjQDIR4hH1g0AyEgW0II8kglNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQZbNf4hCVs1/SEKWzX8IQRbNfshDFs1+iESWzX5IRNbNfhXWCg191eAMDX2V7AwNfUhDls19CEPWzXzIRxbNfIhHVs18SERIQZYNfAhHiEfWDXvISBbNe6BygIhIVg17YHbAls17IHjAls160k1BTXqgASQT2RJNOpQsDIHNPQMRDTqIlVJISIMQAGGSSEFDEAApSEFEkSACAAAAAAAAAhHIjEAiAosVwAJSTXpI1s06SJVTRYiMQCIChhXCQlJNekjWzTpIlVNFlAxAFBQsCIxAIgJ/lcACUk16SNbNOkiVU0WIjEAiAnqVwkJSTXpI1s06SJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQjNPM08jTxNPAyBjTvVwARNOsWNOwWUDTtVxABUFA07kIHjUgiMQCICZRXCQlJNecjWzTnIlVNSTXoIQcMRDToIQcPQQAHISM16UIACzT3JDToCyRYFzXpNOk0+IgJhjToIwg15zEAKDEAiAlRKTTnFlA15lcACTTmUGaACAAAAAAAAAd/IjEAiAkzVwAJSTXmI1s05iJVTRY05xZQMQBQULAiMQCICRZXAAlJNeYjWzTmIlVNFjTnFlAxAFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09CM08zTyNPE08DIGNO9XABE06zTpCBY07BZQNO1XEAFQUDTuQgazSSMMQAFnSCIxAIgItFcACUk15yNbNOciVU1JNeghBw9JNedBAAYiNelCAAs09iQ06AskWBc16TTpIRAMRDTyIzTpIRAKCQs15jTmiAiCNO9XABE06xY07BZQNO1XEAFQUDXlNPojDUQ05VcREUk15CJbSTXjNPkNRDTyNPoKNeKxIrIBNOKyCCOyEDT/sgezsSKyATT5shIhC7IQMQCyFDT4shGzIjEAiAgWVwkJSTXfI1s03yJVTUk14CEHD0EABiI14UIACzT1JDTgCyRYFzXhgAgAAAAAAAAGoTToFjTgFlAxAFBQsDToFjTgFlAxAFA1BzTnQQAGIjXfQgALNPYkNOgLJFgXNd803yEQDEQ0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ0/DThCQgjNPM04gg08jT7CDTxNPIjNN8hEAoJCwgxADIGNOVXABE04zT5CRY05FcICFA05FcQAVBQNO405gg04glCBUZIIjEAiAdNVwAJSTXnI1s05yJVTUk16CEHDEQ06CEHD0EAByEjNelCAAs09yQ06AskWBc16TTpNPiIBz806CMINecxACgxAIgHCik05xZQNeZXCQk05kxQZoAIAAAAAAAABbo05xYiMQCIBuhXCQlJNeYjWzTmIlVNFlAxAFBQsDTnFiIxAIgGy1cJCUk15iNbNOYiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IzTzNPI08TTwMgY071cAETTrNOkIFjTsFlA07VcQAVBQNO5CBGtJIQcMQAB8SCEINAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQZbNAMhCVs0AyEKWzQDIQRbNAMhDFs0A1dIKDQDV3AwNANXoDA0AyEkWzQDISVbNAMhDls0AyEPWzQDV/AgNAMhDVsyBkIFKkhJISIMQAB7SSEFDEAAc0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEGWzQDIQlbNAMhCls0AyEEWzQDIQxbNANXSCg0A1dwMDQDV6AwNAMhJFs0AyElWzQDIQ5bNAMhD1s0A1fwIDQDIQ1bMgZCBKhISSMMQACrSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKVwAgNf8hCVs1/iEKWzX9V2giNfyABJqLkXSwNPxXABE1+yM0/ogFTjT/MQASRDT/NP40/TQDIQRbNAMhDFs0AyESWzQDIRNbNAOBYFs0A1eKKDQDV7IwNANX4jA0A4FYWzT9CCMiNAMhBlsiNP8yBjT7IlsjCBY0+1cICFA0+1cQAVA0/FcREVAiQgK0SCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yRbNf6BEFs1/YEYWzX8IQZbNfshCVs1+iEKWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULAhFIgEcCEhr0k1+ElQSTX3VwARNfYkrzT2VwgIUDT2VxABUDT3VxERUDX1IRSIBEWxIrIBIrISIQuyEDIKshQ0/rIRsyEUiAQssSKyASEFshCB////////////AbIiIQiyI4AITUVUQUZPTU+yJYAgTWV0YWZvbW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJoBgaHR0cHM6Ly9tZXRhbGFicy50ZWNobm9sb2d5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsicyA7IoMgqyKbO0PDX0gAgAAAAAAAAEhzT0FlCwNPRJNfM0/hYiWxNENPVXERE18jT1VwARJwQ08lcICFA08lcQAVBQSTXxVxERNfA08VcAETTwVwAIJwRQNPBXEAFQUEk171cRETXuNO9XABE07lcACDTuVwgIUChQUDXtgCgAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgNeyAMAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAACgAAAAAAAAAPAAAAAAAAABQAAAAAAAAAGTXrgDAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAwAAAAAAAAAEAAAAAAAAAAU16jEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDIHFlA08xZQNO1QNOxQNOtQNOpQKEsBVwB/ZylLAVd/f2cqSwFX/hRnSCM1ATIGNQJCAdQ1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TXsNPhBAIk0/lcREUk16yRbNeo06yJbNek06jTpCTXoNOw07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPRQNPVQNPZQNPcWUDT5FlA0+hZQNPsWUDT8UDT+UDT/FlA061A06hZQNOkWUDToFlAoSwFXAH9nKUsBV39/ZypLAVf+dWdIJTUBMgY1AkIBHjT+VxERSTXrJFs06yJbCTXqsSKyATT/sggjshA0/LIHs7EisgEjshIhC7IQNPyyFDTtshGzNOw07RZQNO4WUDTvFlA08BZQNPMWUDT0UDT1UDT2UDT3FlA0+RZQNPoWUDT7FlA0/FA06hZQKEsBVwB/ZylLAVd/f2cqSwFX/hpnSCEFNQEyBjUCQgCSNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxSTXwNPEWUDTyFlA08xZQNPQWUDT1FlA09lA091A0+FA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4aZ0ghCDUBMgY1AkIAHDEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghFa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhCxJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 3,
  stateSize: 371,
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
                    "name": "_Api_buyDiscount0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_248",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1376",
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
    "name": "_reach_oe_v1466",
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
    "name": "_reach_oe_v1697",
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
    "name": "_reach_oe_v1919",
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
    "name": "_reach_oe_v2119",
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
        "name": "v4051",
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
        "name": "v4055",
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
                    "name": "_Api_buyDiscount0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_248",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_248",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v1376",
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
  Bytecode: `0x608060405260405162005e2e38038062005e2e8339810160408190526200002691620009e9565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600a62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007a9565b620002729695949392919062000b0b565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f5f0085377a9263f641988827636c81541bf69a3d8879c233476b292ab32f0aaf9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007b7565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c06565b604051602081830303815290604052600290805190602001906200059b9291906200082e565b5050505062000d59565b620005af620008bd565b60005b60028110156200060557848160028110620005d157620005d162000aa5565b6020020151828260028110620005eb57620005eb62000aa5565b602002015280620005fc8162000cf2565b915050620005b2565b50818184600281106200061c576200061c62000aa5565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60405180610280016040528062000668620008ed565b815260200162000677620008bd565b815260200162000686620008ed565b815260200162000695620008bd565b8152602001620006b060408051602081019091526000815290565b815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291019081526020016200070060408051602081019091526000815290565b815260006020820181905260408201526060016200071d62000910565b81526020016200072c620008ed565b81526020016200073b620008bd565b81526020016200074a620008ed565b815260200162000759620008bd565b815260200162000768620008ed565b815260200162000777620008bd565b8152602001620007866200092e565b8152602001620007956200094c565b8152602001620007a46200094c565b905290565b6110298062004e0583390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200162000777620008bd565b8280546200083c9062000d1c565b90600052602060002090601f016020900481019282620008605760008555620008ab565b82601f106200087b57805160ff1916838001178555620008ab565b82800160010185558215620008ab579182015b82811115620008ab5782518255916020019190600101906200088e565b50620008b99291506200096a565b5090565b60405180604001604052806002905b620008d6620008ed565b815260200190600190039081620008cc5790505090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008b957600081556001016200096b565b604080519081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620009fe57600080fd5b62000a0862000981565b8351815260e0601f198301121562000a1f57600080fd5b62000a29620009b8565b6020850151815260408501519092506001600160a01b038116811462000a4e57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6001600160a01b03169052565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000ae35760208185018101518683018201520162000ac5565b8181111562000af6576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b2060c083018962000abb565b828103602084015262000b34818962000abb565b9050828103604084015262000b4a818862000abb565b9050828103606084015262000b60818762000abb565b6080840195909552505060a00152949350505050565b8060005b600281101562000bb657815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000b7a565b50505050565b8060005b600581101562000bb657815184526020938401939091019060010162000bc0565b8060005b600681101562000bb657815184526020938401939091019060010162000be5565b60006104208201905062000c1c82845162000a98565b60208301516020830152604083015162000c3a604084018262000a98565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000c8e8285018262000a98565b50506101408084015162000ca58285018262000b76565b505061016083015162000cbd61020084018262000bbc565b5061018083015162000cd46102a084018262000be1565b506101a083015162000ceb61036084018262000be1565b5092915050565b600060001982141562000d1557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d3157607f821691505b6020821081141562000d5357634e487b7160e01b600052602260045260246000fd5b50919050565b61409c8062000d696000396000f3fe6080604052600436106100cf5760003560e01c80631e93b0f1146100d85780632b10758a146100fc5780632c10a1591461011157806330a94db4146101245780633bc5b7bf146101445780636579ece6146101715780636cd6de3a146101845780636cdcb9df1461018c57806373b4522c146101945780637a3678dd146101a757806383230757146101c95780638e314769146101de578063a5560596146101f1578063ab53f2c614610211578063bf2c5b2414610234578063cadc2e7a14610247578063e73216b51461026757005b366100d657005b005b3480156100e457600080fd5b506003545b6040519081526020015b60405180910390f35b61010461026f565b6040516100f39190613306565b6100d661011f366004613330565b6102bf565b34801561013057600080fd5b506100e961013f366004613348565b6102e3565b34801561015057600080fd5b5061016461015f366004613379565b61053a565b6040516100f391906133ac565b6100d661017f3660046133e3565b610551565b610104610571565b6101046105c4565b6100d66101a2366004613330565b61061a565b3480156101b357600080fd5b506101bc61063a565b6040516100f3919061343b565b3480156101d557600080fd5b506001546100e9565b6100d66101ec366004613330565b610a3e565b3480156101fd57600080fd5b506100e961020c366004613348565b610a5e565b34801561021d57600080fd5b50610226610ca9565b6040516100f3929190613545565b6100d6610242366004613330565b610d46565b34801561025357600080fd5b50610164610262366004613379565b610d66565b610104610d77565b610277612c96565b61027f612cc0565b610287612cff565b61028f612d19565b6000602082810182905290825260408051808301909152828152908301526102b78284610dca565b505051919050565b6102c7612cc0565b6102df6102d936849003840184613678565b82611c6b565b5050565b6000600160005414156103a0576000600280546102ff906136cd565b80601f016020809104026020016040519081016040528092919081815260200182805461032b906136cd565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b50505050508060200190518101906103909190613893565b905061039e60006009611f43565b505b60036000541415610464576000600280546103ba906136cd565b80601f01602080910402602001604051908101604052809291908181526020018280546103e6906136cd565b80156104335780601f1061040857610100808354040283529160200191610433565b820191906000526020600020905b81548152906001019060200180831161041657829003601f168201915b505050505080602001905181019061044b919061397a565b905080608001518361045d9190613a85565b9392505050565b6006600054141561047e576000600280546103ba906136cd565b6007600054141561052957600060028054610498906136cd565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906136cd565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505080602001905181019061044b9190613a9c565b61053560006009611f43565b919050565b610542612d49565b61054b82611f69565b92915050565b610559612cc0565b6102df61056b36849003840184613bf2565b82610dca565b610579612c96565b610581612cc0565b610589612cff565b610591612d19565b6000606082015260028152604080516020808201909252828152908301526105b98284610dca565b505060400151919050565b6105cc612c96565b6105d4612cc0565b6105dc612cff565b6105e4612d19565b60006040820152600181819052506040805160208082019092528281529083015261060f8284610dca565b505060200151919050565b610622612cc0565b6102df61063436849003840184613678565b82612026565b610642612d6b565b600160005414156106fd5760006002805461065c906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610688906136cd565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed9190613893565b90506106fb60006007611f43565b505b6003600054141561088757600060028054610717906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610743906136cd565b80156107905780601f1061076557610100808354040283529160200191610790565b820191906000526020600020905b81548152906001019060200180831161077357829003601f168201915b50505050508060200190518101906107a8919061397a565b90506107b2612e07565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526101c084015183519091015260a08084015183519083166080909101526101608085015184519092019190915261018080850151845160c0908101919091526101a0808701518651951660e09586015261014080880151875161010090810191909152610120808a0151895190910152928801805188519092019190915294870151865190940193909352925184519091015292015181519092019190915251919050565b600660005414156108a157600060028054610717906136cd565b60076000541415610a2f576000600280546108bb906136cd565b80601f01602080910402602001604051908101604052809291908181526020018280546108e7906136cd565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b505050505080602001905181019061094c9190613a9c565b9050610956612e07565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526102a084015183519091015260e08084015183519083166080909101526101a080850151845160a001526101c0850151845160c001526101e08501518451931692909101919091526101808084015183516101009081019190915261016080860151855161012090810191909152918601805186516101409081019190915292870151865190920191909152518451909201919091529092015181519092019190915251919050565b610a3b60006007611f43565b90565b610a46612cc0565b6102df610a5836849003840184613678565b82612219565b600060016000541415610b1b57600060028054610a7a906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa6906136cd565b8015610af35780601f10610ac857610100808354040283529160200191610af3565b820191906000526020600020905b815481529060010190602001808311610ad657829003601f168201915b5050505050806020019051810190610b0b9190613893565b9050610b1960006008611f43565b505b60036000541415610bd857600060028054610b35906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b61906136cd565b8015610bae5780601f10610b8357610100808354040283529160200191610bae565b820191906000526020600020905b815481529060010190602001808311610b9157829003601f168201915b5050505050806020019051810190610bc6919061397a565b905080608001518361045d9190613ca6565b60066000541415610bf257600060028054610b35906136cd565b60076000541415610c9d57600060028054610c0c906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c38906136cd565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050505050806020019051810190610bc69190613a9c565b61053560006008611f43565b600060606000546002808054610cbe906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610cea906136cd565b8015610d375780601f10610d0c57610100808354040283529160200191610d37565b820191906000526020600020905b815481529060010190602001808311610d1a57829003601f168201915b50505050509050915091509091565b610d4e612cc0565b6102df610d6036849003840184613678565b82612344565b610d6e612d49565b61054b82612581565b610d7f612c96565b610d87612cc0565b610d8f612cff565b610d97612d19565b600060808201526003815260408051602080820190925282815290830152610dbf8284610dca565b505060600151919050565b610dda6007600054146026611f43565b8151610df5901580610dee57508251600154145b6027611f43565b600080805560028054610e07906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e33906136cd565b8015610e805780601f10610e5557610100808354040283529160200191610e80565b820191906000526020600020905b815481529060010190602001808311610e6357829003601f168201915b5050505050806020019051810190610e989190613a9c565b9050610ea2612e1a565b610eb482610160015142106028611f43565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e184604051610ee39190613cbe565b60405180910390a16000602085015151516003811115610f0557610f05613396565b14156111e9576001610f1633611f69565b516001811115610f2857610f28613396565b14610f34576000610f42565b610f3d33611f69565b604001515b60208201819052610f57906005116018611f43565b6005816020015110610f6c5760f98152610f8f565b816101000151816020015160058110610f8757610f87613d1e565b602002015181525b610f9b34156019611f43565b8051610280830151610fad9190613ca6565b6040808301805192909252610260840151825160200152610240840151810151915191151591015260e08201518151610ff391610fec913391906125f9565b601a611f43565b600181602001516110049190613ca6565b60608201908152336000818152600460205260409020805460ff191660019081178255925190830181905560808401515261103e90612581565b51600181111561105057611050613396565b1461105c57600061106a565b61106533612581565b604001515b60808201805160200191909152805133604091820152905190517f5db252764948711ec50cf078c464cb2df6995b79b445d2d1365bb6054faeede3916110af91613306565b60405180910390a1608081015183526110c6612efa565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b015181518701526101a08b01518151909501949094526101c08a01518451909301929092526101e0890151835196169501949094525143930192909252610200850151918401516111c092919061260f565b60208201805160e00191909152610220840151905161010001526111e381612683565b50611c65565b600160208501515151600381111561120357611203613396565b141561172057600161121433611f69565b51600181111561122657611226613396565b14611232576000611240565b61123b33611f69565b604001515b60c08201819052600511801560e083015261126157600060a0820152611287565b8161012001518160c001516006811061127c5761127c613d1e565b602002015160a08201525b61129960648260a0015110601b611f43565b60648160a001516112aa9190613d34565b6112b5906001613a85565b826101a001516112c59190613d56565b61010082018190526112da903414601c611f43565b610280820151610120820180519190915261026083015181516020015261024083015160409081015182519015159101526102008301519051611320919060019061260f565b81610140018190525061134361133c338460e0015160006125f9565b601d611f43565b61135560018360a0015111601e611f43565b60c082015161014082015160200151516113719110601f611f43565b8160a00151826101a001516113869190613d34565b610160820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156113c5573d6000803e3d6000fd5b5060c082015161014082015160200151516113e09190613a85565b610180820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c08301516114289190339061298b565b600161143333612581565b51600181111561144557611445613396565b1461145157600061145f565b61145a33612581565b604001515b6101c0820181905260051161147b5760006101a08201526114a3565b816101400151816101c001516006811061149757611497613d1e565b60200201516101a08201525b60c08101516101e082018051919091526101c0820151815160200152805133604091820152905190517f6db6d71c97c9c821c2158aef92a23379cdef3b740e05a3e8f6fc2bae9afa4225916114f791613306565b60405180910390a16101e0810151602084015260e081015115611521576000610200820152611548565b8161012001518160c001516006811061153c5761153c613d1e565b60200201516102008201525b61155b6064826102000151106020611f43565b611563612efa565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e080860151845193169201919091526101008085015183519091015261012080850151835190910152610140808501518351909101526101a0830151905161160b9190613a85565b83610160015161161b9190613ca6565b6020808301805192909252905160019101526101608201516101808401516116439190613ca6565b60208201516040015260808301516101a08401516116619190613ca6565b60208201516060015261020082015161167c90606490613d34565b611687906001613a85565b836101a001516116979190613d56565b836101c001516116a79190613ca6565b6020820180516080019190915280513360a090910152514360c0909101526101408201516101808301516116de919060019061260f565b602082015160e001526101608201516101008301516102208501516117039190613ca6565b61170d9190613a85565b602082015161010001526111e381612683565b600260208501515151600381111561173a5761173a613396565b1415611a1657600161174b33612581565b51600181111561175d5761175d613396565b14611769576000611777565b61177233612581565b604001515b610240820181905261178d906005116021611f43565b6005816102400151106117a75760f96102208201526117cf565b816101000151816102400151600581106117c3576117c3613d1e565b60200201516102208201525b6117db34156022611f43565b8061022001518261028001516117f19190613ca6565b610260808301805192909252830151815160200152610240830151604090810151915191151591015260e082015161022082015161183c91611835913391906125f9565b6023611f43565b600181610240015161184e9190613ca6565b6102808201908152336000818152600560205260409020805460ff19166001908117825592519083015561188190611f69565b51600181111561189357611893613396565b1461189f5760006118ad565b6118a833611f69565b604001515b6102a08201805191909152610280820151815160200152805133604091820152905190517fc7ffdffdeec5f1f2560d0d2de118d031c5307044b16a41948ea6e4b8a3d4a907916118fc91613306565b60405180910390a16102a08101516040840152611917612efa565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102608401516111c0929061260f565b6003602085015151516003811115611a3057611a30613396565b1415611c6557611a4234156024611f43565b6102808201516102c08201805191909152610260830151815160200152610240830151604090810151915191151591015260e0820151611a9090611a8990339060006125f9565b6025611f43565b6001611a9b33611f69565b516001811115611aad57611aad613396565b14611ab9576000611ac7565b611ac233611f69565b604001515b6102e0820151526001611ad933612581565b516001811115611aeb57611aeb613396565b14611af7576000611b05565b611b0033612581565b604001515b6102e08201805160200191909152805133604091820152905190517fac6aaf2e8f682593c8a02483e0264170cee494e94af704b350bd609429d939a191611b4b91613306565b60405180910390a16102e08101516060840152611b66612efa565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102c08401516111c0929061260f565b50505050565b611c7b600160005414600f611f43565b8151611c96901580611c8f57508251600154145b6010611f43565b600080805560028054611ca8906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054611cd4906136cd565b8015611d215780601f10611cf657610100808354040283529160200191611d21565b820191906000526020600020905b815481529060010190602001808311611d0457829003601f168201915b5050505050806020019051810190611d399190613893565b9050611d43612f1a565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d184604051611d729190613d75565b60405180910390a1611d863415600c611f43565b6101408201515151611d9a90600190613ca6565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611ddd90611dd690339060016125f9565b600d611f43565b8151611df5906001600160a01b03163314600e611f43565b611dfd612efa565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e080870151855190920191909152610120808701518551941693909101929092526101608501518351610100908101919091526101808601518451909301929092526101a0850151835161014001525190840151611ebb9190613ca6565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611f1c929061260f565b60208201805160e0019190915251600061010090910152611f3c81612683565b5050505050565b816102df5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611f71612d49565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611fa057611fa0613396565b1415612017576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611fe157611fe1613396565b6001811115611ff257611ff2613396565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6120366003600054146012611f43565b815161205190158061204a57508251600154145b6013611f43565b600080805560028054612063906136cd565b80601f016020809104026020016040519081016040528092919081815260200182805461208f906136cd565b80156120dc5780601f106120b1576101008083540402835291602001916120dc565b820191906000526020600020905b8154815290600101906020018083116120bf57829003601f168201915b50505050508060200190518101906120f4919061397a565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09836040516121259190613d75565b60405180910390a161213934156011611f43565b612141612f2d565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a080850151845193169201919091526101c080840151835190910152810151439052611c65816129a4565b6122296006600054146016611f43565b815161224490158061223d57508251600154145b6017611f43565b600080805560028054612256906136cd565b80601f0160208091040260200160405190810160405280929190818152602001828054612282906136cd565b80156122cf5780601f106122a4576101008083540402835291602001916122cf565b820191906000526020600020905b8154815290600101906020018083116122b257829003601f168201915b50505050508060200190518101906122e7919061397a565b90507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8836040516123189190613d75565b60405180910390a161232c34156014611f43565b8051612139906001600160a01b031633146015611f43565b612354600760005414602a611f43565b815161236f90158061236857508251600154145b602b611f43565b600080805560028054612381906136cd565b80601f01602080910402602001604051908101604052809291908181526020018280546123ad906136cd565b80156123fa5780601f106123cf576101008083540402835291602001916123fa565b820191906000526020600020905b8154815290600101906020018083116123dd57829003601f168201915b50505050508060200190518101906124129190613a9c565b9050612427816101600151421015602c611f43565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0836040516124569190613d75565b60405180910390a161246a34156029611f43565b612472612efa565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b01518a51820152610120808c01518b5190910152610140808c01518b51909101526101608b0151888b01805191909152805160009901989098526101808b01518851909701969096526101a08a01518751909501949094526101c08901518651909301929092526101e088015185519616950194909452825143940193909352610200850151825190930192909252610220840151905190910152611c6581612683565b612589612d49565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156125b8576125b8613396565b1415612017576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611fe157611fe1613396565b600061260783853085612ab0565b949350505050565b612617612f5b565b60005b60028110156126635784816002811061263557612635613d1e565b602002015182826002811061264c5761264c613d1e565b60200201528061265b81613d8e565b91505061261a565b508181846002811061267757612677613d1e565b60200201529392505050565b60408051808201909152600080825260208201528160200151602001511561281e5760208281015160e0015181015180519101516126c19190613a85565b81526126cb612f88565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151871681890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015280518701516101808b01528051909501516101a08a01528451909301516101c08901528351909101519095166101e08701528151850151610200870152815101516102208601528051840151830151610240860152805184015183015183015161026086015251909201518101515161028084015283516102a084015260076000554360015590516127fa91839101613df2565b60405160208183030381529060405260029080519060200190611c65929190613071565b60208281015160e00151810151805191015161283a9190613a85565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612888573d6000803e3d6000fd5b506128a5826000015160200151836020015160a00151600161298b565b6128ad6130f5565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160e090810151861660a08089019190915289516101009081015160c08a01528a5161012090810151938a01939093528a5161014090810151918a0191909152868b01805151938a01939093528251860151908901528151909301516101608801528051909101516101808701525101519092166101a0840152838101516101c084015260036000554360015590516127fa91839101613f43565b612996838383612b8a565b61299f57600080fd5b505050565b6129ac6130f5565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e09081015190850152845161010090810151908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519093169284019290925283516101c090810151908401526006600055436001559051612a8c91839101613f43565b6040516020818303038152906040526002908051906020019061299f929190613071565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612b179161402d565b60006040518083038185875af1925050503d8060008114612b54576040519150601f19603f3d011682016040523d82523d6000602084013e612b59565b606091505b5091509150612b6a82826001612c5b565b5080806020019051810190612b7f9190614049565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612be99161402d565b60006040518083038185875af1925050503d8060008114612c26576040519150601f19603f3d011682016040523d82523d6000602084013e612c2b565b606091505b5091509150612c3c82826002612c5b565b5080806020019051810190612c519190614049565b9695505050505050565b60608315612c6a57508161045d565b825115612c7a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611f60565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b6040518060800160405280612cd3612c96565b8152602001612ce0612c96565b8152602001612ced612c96565b8152602001612cfa612c96565b905290565b604051806040016040528060008152602001612cfa6131a1565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b6040805160608101909152806000815260006020820181905260409091015290565b604051806101c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001612de06131b4565b8152602001612ded6131d2565b8152602001612dfa6131b4565b8152602001612cfa6131d2565b6040518060200160405280612cfa612d6b565b6040518061030001604052806000815260200160008152602001612e3c6131f0565b815260200160008152602001612e50612c96565b8152602001600081526020016000815260200160001515815260200160008152602001612e7b6131f0565b8152602001612e88612f5b565b815260200160008152602001612e9c6131f0565b81526020016000815260200160008152602001612eb7612c96565b8152602001600081526020016000815260200160008152602001612ed96131f0565b815260200160008152602001612eed612c96565b8152602001612ced6131f0565b6040518060400160405280612f0d613213565b8152602001612cfa613287565b6040518060200160405280612cfa6131f0565b6040518060400160405280612f406130f5565b8152602001612cfa6040518060200160405280600081525090565b60405180604001604052806002905b612f726131f0565b815260200190600190039081612f6a5790505090565b604051806102c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001612fef6131b4565b8152602001612ffc6131d2565b81526020016130096131d2565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613042612f5b565b8152602001600081526020016130566131f0565b81526020016000815260200160008152602001600081525090565b82805461307d906136cd565b90600052602060002090601f01602090048101928261309f57600085556130e5565b82601f106130b857805160ff19168380011785556130e5565b828001600101855582156130e5579182015b828111156130e55782518255916020019190600101906130ca565b506130f19291506132e4565b5090565b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161314e6131b4565b815260200161315b6131d2565b81526020016131686131d2565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280612cfa612d19565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b604051806060016040528060008152602001600081526020016000151581525090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161327a6131b4565b8152602001612dfa6131d2565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016132d7612f5b565b8152602001600081525090565b5b808211156130f157600081556001016132e5565b6001600160a01b03169052565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b60006040828403121561334257600080fd5b50919050565b60006020828403121561335a57600080fd5b5035919050565b6001600160a01b038116811461337657600080fd5b50565b60006020828403121561338b57600080fd5b813561045d81613361565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106133c3576133c3613396565b808352506020830151151560208301526040830151604083015292915050565b600060c0828403121561334257600080fd5b8060005b6005811015611c655781518452602093840193909101906001016133f9565b8060005b6006811015611c6557815184526020938401939091019060010161341c565b6000610400820190508251825260208301516020830152604083015161346460408401826132f9565b5060608301516060830152608083015161348160808401826132f9565b5060a083015160a083015260c083015160c083015260e08301516134a860e08401826132f9565b5061010083810151908301526101208084015190830152610140808401516134d2828501826133f5565b50506101608301516134e86101e0840182613418565b506101808301516134fd6102a08401826133f5565b506101a0830151613512610340840182613418565b5092915050565b60005b8381101561353457818101518382015260200161351c565b83811115611c655750506000910152565b828152604060208201526000825180604084015261356a816060850160208701613519565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c081016001600160401b03811182821017156135b8576135b861357f565b60405290565b6040516101e081016001600160401b03811182821017156135b8576135b861357f565b6040516102c081016001600160401b03811182821017156135b8576135b861357f565b604080519081016001600160401b03811182821017156135b8576135b861357f565b604051602081016001600160401b03811182821017156135b8576135b861357f565b60405160a081016001600160401b03811182821017156135b8576135b861357f565b801515811461337657600080fd5b60006040828403121561368a57600080fd5b604080519081016001600160401b03811182821017156136ac576136ac61357f565b6040528235815260208301356136c18161366a565b60208201529392505050565b600181811c908216806136e157607f821691505b6020821081141561334257634e487b7160e01b600052602260045260246000fd5b805161053581613361565b60006060828403121561371f57600080fd5b604051606081016001600160401b03811182821017156137415761374161357f565b8060405250809150825181526020830151602082015260408301516137658161366a565b6040919091015292915050565b600082601f83011261378357600080fd5b604080519081016001600160401b03811182821017156137a5576137a561357f565b6040528060c08401858111156137ba57600080fd5b845b818110156137de576137ce878261370d565b83526020909201916060016137bc565b509195945050505050565b600082601f8301126137fa57600080fd5b60405160a081016001600160401b038111828210171561381c5761381c61357f565b6040528060a084018581111561383157600080fd5b845b818110156137de578051835260209283019201613833565b600082601f83011261385c57600080fd5b60405160c081016001600160401b038111828210171561387e5761387e61357f565b6040528060c084018581111561383157600080fd5b600061042082840312156138a657600080fd5b6138ae613595565b6138b783613702565b8152602083015160208201526138cf60408401613702565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613920818501613702565b9082015261014061393385858301613772565b908201526139458461020085016137e9565b610160820152613959846102a0850161384b565b61018082015261396d84610360850161384b565b6101a08201529392505050565b60006103a0828403121561398d57600080fd5b6139956135be565b61399e83613702565b81526139ac60208401613702565b60208201526040830151604082015260608301516060820152608083015160808201526139db60a08401613702565b60a08201526139ed8460c085016137e9565b60c0820152610160613a018582860161384b565b60e0830152613a1485610220860161384b565b6101008301526102e084015161012083015261030084015161014083015261032084015190820152610340830151610180820152613a556103608401613702565b6101a082015261038092909201516101c083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613a9757613a97613a6f565b500390565b60006105608284031215613aaf57600080fd5b613ab76135e1565b613ac083613702565b8152613ace60208401613702565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613b1160e08401613702565b60e0820152610100613b25858286016137e9565b908201526101a0613b388585830161384b565b610120830152610260613b4d8682870161384b565b610140840152610320850151610160840152610340850151610180840152610360850151828401526103808501516101c0840152613b8e6103a08601613702565b6101e0840152613ba2866103c08701613772565b610200840152610480850151610220840152613bc2866104a0870161370d565b6102408401526105008501519083015250610520830151610280820152610540909201516102a083015250919050565b600081830360c0811215613c0557600080fd5b613c0d613604565b8335815260a0601f1983011215613c2357600080fd5b613c2b613626565b9150613c35613648565b602085013560048110613c4757600080fd5b81526040850135613c578161366a565b60208201526060850135613c6a8161366a565b60408201526080850135613c7d8161366a565b606082015260a0850135613c908161366a565b6080820152825260208101919091529392505050565b60008219821115613cb957613cb9613a6f565b500190565b81518152602082015151805160c08301919060048110613ce057613ce0613396565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b600082613d5157634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615613d7057613d70613a6f565b500290565b8151815260209182015115159181019190915260400190565b6000600019821415613da257613da2613a6f565b5060010190565b80518252602080820151908301526040908101511515910152565b8060005b6002811015611c6557613ddc848351613da9565b6060939093019260209190910190600101613dc8565b600061056082019050613e068284516132f9565b6020830151613e1860208401826132f9565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151613e5d60e08401826132f9565b5061010080840151613e71828501826133f5565b50506101208301516101a0613e8881850183613418565b6101408501519150610260613e9f81860184613418565b610160860151610320860152610180860151610340860152818601516103608601526101c08601516103808601526101e08601519250613ee36103a08601846132f9565b6102008601519250613ef96103c0860184613dc4565b6102208601516104808601526102408601519250613f1b6104a0860184613da9565b85015161050085015250506102808301516105208301526102a0909201516105409091015290565b60006103a082019050613f578284516132f9565b6020830151613f6960208401826132f9565b5060408301516040830152606083015160608301526080830151608083015260a0830151613f9a60a08401826132f9565b5060c0830151613fad60c08401826133f5565b5060e0830151610160613fc281850183613418565b6101008501519150613fd8610220850183613418565b6101208501516102e0850152610140850151610300850152840151610320840152506101808301516103408301526101a083015161401a6103608401826132f9565b506101c083015161038083015292915050565b6000825161403f818460208701613519565b9190910192915050565b60006020828403121561405b57600080fd5b815161045d8161366a56fea2646970667358221220850fb40842a594d171d79349c8cf7f35220946f4bacbaaa6698341ec47609f6164736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220835c61d569d2a68db753a6bde45050dd90dabc46181dfe0264b0c542c2569ac764736f6c634300080c0033`,
  BytecodeLen: 24110,
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
    at: './index.rsh:237:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:380:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:389:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:387:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:255:23:after expr stmt semicolon',
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

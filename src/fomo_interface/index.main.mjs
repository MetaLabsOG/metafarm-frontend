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
    showOutcome: [ctc0],
    showPurchase: [ctc0, ctc1, ctc1],
    updateDiscountLevel: [ctc0, ctc1],
    updateTimeReductionLevel: [ctc0, ctc1]
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
  const ctc8 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['initialPrice', ctc1], ['nftPrize', ctc2], ['priceStep', ctc1], ['ticketFeeDenominator', ctc1], ['tokensGivenPerTicket', ctc1], ['tokenOwnedByUsers', ctc1], ['token', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1], ['discountPrices', ctc6], ['discountPercents', ctc7], ['timeReductionPrices', ctc6], ['timeReductionSecs', ctc7]]);
  const ctc9 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc0]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc1
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1191, v1204, v1232, v1233, v1234, v1236] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async () => {
                
                const v2219 = {
                  currentPrice: v1257,
                  currentTotal: v1259,
                  currentWinner: v1260,
                  deadline: v1185,
                  deltaDeadline: v1186,
                  discountPercents: v1234,
                  discountPrices: v1233,
                  endTimestamp: v1254,
                  initialPrice: v1183,
                  nftPrize: v1184,
                  paidToFunder: v1256,
                  priceStep: v1187,
                  ticketFeeDenominator: v1188,
                  timeReductionPrices: v1233,
                  timeReductionSecs: v1236,
                  token: v1204,
                  tokenOwnedByUsers: v2214,
                  tokensGivenPerTicket: v1189
                  };
                
                return v2219;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async () => {
                
                const v2219 = {
                  currentPrice: v1257,
                  currentTotal: v1259,
                  currentWinner: v1260,
                  deadline: v1185,
                  deltaDeadline: v1186,
                  discountPercents: v1234,
                  discountPrices: v1233,
                  endTimestamp: v1254,
                  initialPrice: v1183,
                  nftPrize: v1184,
                  paidToFunder: v1256,
                  priceStep: v1187,
                  ticketFeeDenominator: v1188,
                  timeReductionPrices: v1233,
                  timeReductionSecs: v1236,
                  token: v1204,
                  tokenOwnedByUsers: v2214,
                  tokensGivenPerTicket: v1189
                  };
                
                return v2219;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = svs;
              return (await ((async () => {
                
                const v1303 = {
                  currentPrice: v1257,
                  currentTotal: v1259,
                  currentWinner: v1260,
                  deadline: v1185,
                  deltaDeadline: v1186,
                  discountPercents: v1234,
                  discountPrices: v1233,
                  endTimestamp: v1254,
                  initialPrice: v1183,
                  nftPrize: v1184,
                  paidToFunder: v1256,
                  priceStep: v1187,
                  ticketFeeDenominator: v1188,
                  timeReductionPrices: v1233,
                  timeReductionSecs: v1236,
                  token: v1204,
                  tokenOwnedByUsers: v1298,
                  tokensGivenPerTicket: v1189
                  };
                
                return v1303;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1191, v1204, v1232, v1233, v1234, v1236] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2228 ) => {
                  const v2228 = stdlib.protect(ctc1, _v2228, null);
                
                const v2229 = stdlib.add(v2228, v1187);
                
                return v2229;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2228 ) => {
                  const v2228 = stdlib.protect(ctc1, _v2228, null);
                
                const v2229 = stdlib.add(v2228, v1187);
                
                return v2229;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = svs;
              return (await ((async (_v1312 ) => {
                  const v1312 = stdlib.protect(ctc1, _v1312, null);
                
                const v1313 = stdlib.add(v1312, v1187);
                
                return v1313;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        participantInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1191, v1204, v1232, v1233, v1234, v1236] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2220 ) => {
                  const v2220 = stdlib.protect(ctc0, _v2220, null);
                
                const v2221 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2220), null);
                const v2222 = stdlib.fromSome(v2221, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
                const v2223 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2220), null);
                const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
                const v2225 = {
                  addr: v2220,
                  discountLevel: v2222,
                  timeReductionLevel: v2224
                  };
                
                return v2225;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2220 ) => {
                  const v2220 = stdlib.protect(ctc0, _v2220, null);
                
                const v2221 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2220), null);
                const v2222 = stdlib.fromSome(v2221, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
                const v2223 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2220), null);
                const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
                const v2225 = {
                  addr: v2220,
                  discountLevel: v2222,
                  timeReductionLevel: v2224
                  };
                
                return v2225;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = svs;
              return (await ((async (_v1304 ) => {
                  const v1304 = stdlib.protect(ctc0, _v1304, null);
                
                const v1305 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1304), null);
                const v1306 = stdlib.fromSome(v1305, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
                const v1307 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1304), null);
                const v1308 = stdlib.fromSome(v1307, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
                const v1309 = {
                  addr: v1304,
                  discountLevel: v1306,
                  timeReductionLevel: v1308
                  };
                
                return v1309;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc9
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1191, v1204, v1232, v1233, v1234, v1236] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2230 ) => {
                  const v2230 = stdlib.protect(ctc1, _v2230, null);
                
                const v2231 = stdlib.sub(v2230, v1187);
                
                return v2231;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214] = svs;
              return (await ((async (_v2230 ) => {
                  const v2230 = stdlib.protect(ctc1, _v2230, null);
                
                const v2231 = stdlib.sub(v2230, v1187);
                
                return v2231;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = svs;
              return (await ((async (_v1314 ) => {
                  const v1314 = stdlib.protect(ctc1, _v1314, null);
                
                const v1315 = stdlib.sub(v1314, v1187);
                
                return v1315;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc5, ctc6, ctc7, ctc7],
      3: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1]
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
    Api_buyDiscount0_282: ctc10,
    Api_buyTicket0_282: ctc10,
    Api_buyTimeReduction0_282: ctc10,
    Api_getParticipantStats0_282: ctc10
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
  
  
  const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1332 = ctc.selfAddress();
  const v1334 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:349:14:application call to [unknown function] (defined at: ./index.rsh:349:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyDiscount0_282" (defined at: ./index.rsh:347:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1335 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1332), null);
  const v1336 = stdlib.fromSome(v1335, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
  const v1337 = stdlib.lt(v1336, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1337, {
    at: './index.rsh:349:23:application',
    fs: ['at ./index.rsh:349:14:application call to [unknown function] (defined at: ./index.rsh:349:14:function exp)', 'at ./index.rsh:349:14:application call to [unknown function] (defined at: ./index.rsh:349:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyDiscount0_282" (defined at: ./index.rsh:347:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1340 = ['Api_buyDiscount0_282', v1334];
  
  let v1361;
  const v1365 = stdlib.ge(v1336, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1365) {
    v1361 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1368 = v1233[v1336];
    v1361 = v1368;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298, v1340],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:350:18:decimal', stdlib.UInt_max, 0), [[v1361, v1204]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
      
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1434;
          const v1435 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1425), null);
          const v1436 = stdlib.fromSome(v1435, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1437 = stdlib.lt(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1438 = stdlib.ge(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1438) {
            v1434 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1441 = v1233[v1436];
            v1434 = v1441;
            }
          ;
          const v1497 = stdlib.add(v1297, v1434);
          const v1501 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1502 = [v1497, v1295, v1501];
          const v1503 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1502);
          sim_r.txns.push({
            amt: v1434,
            kind: 'to',
            tok: v1204
            });
          const v1508 = stdlib.add(v1436, stdlib.checkedBigNumberify('./index.rsh:358:48:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1425, v1508);
          null;
          const v1512 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1425), null);
          const v1513 = stdlib.fromSome(v1512, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1514 = {
            addr: v1425,
            discountLevel: v1508,
            timeReductionLevel: v1513
            };
          const v1516 = await txn1.getOutput('Api_buyDiscount', 'v1514', ctc12, v1514);
          
          const v3722 = v1254;
          const v3724 = v1256;
          const v3725 = v1257;
          const v3726 = v1259;
          const v3727 = v1260;
          const v3729 = v1503;
          const v3730 = v1268;
          const v3731 = v1503[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v3732 = v3731[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v3733 = v3731[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
          const v3734 = stdlib.sub(v3732, v3733);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
  switch (v1426[0]) {
    case 'Api_buyDiscount0_282': {
      const v1429 = v1426[1];
      undefined /* setApiDetails */;
      let v1434;
      const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
      const v1436 = stdlib.fromSome(v1435, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
      const v1437 = stdlib.lt(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1437, {
        at: './index.rsh:191:12:application',
        fs: ['at ./index.rsh:350:38:application call to "getDiscountPrice" (defined at: ./index.rsh:189:36:function exp)', 'at ./index.rsh:350:14:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1438 = stdlib.ge(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1438) {
        v1434 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1441 = v1233[v1436];
        v1434 = v1441;
        }
      ;
      const v1497 = stdlib.add(v1297, v1434);
      const v1501 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
      const v1502 = [v1497, v1295, v1501];
      const v1503 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1502);
      ;
      const v1508 = stdlib.add(v1436, stdlib.checkedBigNumberify('./index.rsh:358:48:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1425, v1508);
      null;
      const v1512 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
      const v1513 = stdlib.fromSome(v1512, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
      const v1514 = {
        addr: v1425,
        discountLevel: v1508,
        timeReductionLevel: v1513
        };
      const v1516 = await txn1.getOutput('Api_buyDiscount', 'v1514', ctc12, v1514);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1429, v1516), {
          at: './index.rsh:348:11:application',
          fs: ['at ./index.rsh:348:11:application call to [unknown function] (defined at: ./index.rsh:348:11:function exp)', 'at ./index.rsh:363:21:application call to "callback" (defined at: ./index.rsh:351:22:function exp)', 'at ./index.rsh:351:22:application call to [unknown function] (defined at: ./index.rsh:351:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3722 = v1254;
      const v3724 = v1256;
      const v3725 = v1257;
      const v3726 = v1259;
      const v3727 = v1260;
      const v3729 = v1503;
      const v3730 = v1268;
      const v3731 = v1503[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v3732 = v3731[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v3733 = v3731[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
      const v3734 = stdlib.sub(v3732, v3733);
      return;
      
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1623 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1426[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2011 = v1426[1];
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
    Api_buyDiscount0_282: ctc10,
    Api_buyTicket0_282: ctc10,
    Api_buyTimeReduction0_282: ctc10,
    Api_getParticipantStats0_282: ctc10
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
  
  
  const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1320 = ctc.selfAddress();
  const v1322 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:316:14:application call to [unknown function] (defined at: ./index.rsh:316:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:314:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1324 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:317:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1324, {
    at: './index.rsh:317:19:application',
    fs: ['at ./index.rsh:316:14:application call to [unknown function] (defined at: ./index.rsh:316:14:function exp)', 'at ./index.rsh:316:14:application call to [unknown function] (defined at: ./index.rsh:316:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:314:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1327 = stdlib.gt(v1297, v1189);
  stdlib.assert(v1327, {
    at: './index.rsh:318:19:application',
    fs: ['at ./index.rsh:316:14:application call to [unknown function] (defined at: ./index.rsh:316:14:function exp)', 'at ./index.rsh:316:14:application call to [unknown function] (defined at: ./index.rsh:316:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:314:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1330 = ['Api_buyTicket0_282', v1322];
  
  let v1379;
  const v1380 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1320), null);
  const v1381 = stdlib.fromSome(v1380, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
  const v1382 = stdlib.ge(v1381, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1382) {
    v1379 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1385 = v1234[v1381];
    v1379 = v1385;
    }
  const v1386 = stdlib.lt(v1379, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1386, {
    at: './index.rsh:211:12:application',
    fs: ['at ./index.rsh:320:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1387 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1379);
  const v1388 = stdlib.mul(v1257, v1387);
  const v1389 = stdlib.div(v1388, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298, v1330],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1389, [[stdlib.checkedBigNumberify('./index.rsh:320:54:decimal', stdlib.UInt_max, 0), v1204]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
      
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1643;
          const v1644 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1425), null);
          const v1645 = stdlib.fromSome(v1644, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1646 = stdlib.ge(v1645, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1646) {
            v1643 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1649 = v1234[v1645];
            v1643 = v1649;
            }
          const v1650 = stdlib.lt(v1643, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1651 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1643);
          const v1652 = stdlib.mul(v1257, v1651);
          const v1653 = stdlib.div(v1652, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1688 = stdlib.add(v1268, v1653);
          sim_r.txns.push({
            amt: v1653,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1695 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1696 = [v1297, v1295, v1695];
          const v1697 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1696);
          ;
          const v1717 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:322:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1718 = v1697[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 1)];
          const v1719 = v1718[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 0)];
          const v1720 = stdlib.gt(v1719, v1189);
          ;
          let v1721;
          if (v1646) {
            v1721 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1727 = v1234[v1645];
            v1721 = v1727;
            }
          const v1728 = stdlib.lt(v1721, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1729 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1721);
          const v1730 = stdlib.mul(v1257, v1729);
          const v1731 = stdlib.div(v1730, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1732 = stdlib.div(v1731, v1188);
          const v1733 = stdlib.add(v1257, v1187);
          null;
          const v1737 = stdlib.sub(v1688, v1732);
          sim_r.txns.push({
            amt: v1732,
            kind: 'from',
            to: v1182,
            tok: undefined /* Nothing */
            });
          const v1743 = stdlib.sub(v1719, v1189);
          const v1746 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1)];
          const v1747 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 2)];
          const v1748 = [v1743, v1746, v1747];
          const v1749 = stdlib.Array_set(v1697, stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1), v1748);
          sim_r.txns.push({
            amt: v1189,
            kind: 'from',
            to: v1425,
            tok: v1204
            });
          let v1750;
          const v1751 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1425), null);
          const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1753 = stdlib.ge(v1752, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1753) {
            v1750 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1756 = v1236[v1752];
            v1750 = v1756;
            }
          const v1757 = stdlib.mul(v1750, stdlib.checkedBigNumberify('./index.rsh:333:79:decimal', stdlib.UInt_max, 1000));
          const v1758 = stdlib.sub(v1186, v1757);
          const v1763 = {
            addr: v1425,
            discountLevel: v1645,
            timeReductionLevel: v1752
            };
          const v1765 = await txn1.getOutput('Api_buyTicket', 'v1763', ctc12, v1763);
          
          let v1771;
          if (v1646) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1234[v1645];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1257, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1259, v1781);
          const v1783 = stdlib.add(v1256, v1732);
          const v1784 = stdlib.add(v1254, v1758);
          const v3857 = v1784;
          const v3859 = v1783;
          const v3860 = v1733;
          const v3861 = v1782;
          const v3862 = v1425;
          const v3864 = v1749;
          const v3865 = v1737;
          const v3866 = v1749[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v3867 = v3866[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v3868 = v3866[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
          const v3869 = stdlib.sub(v3867, v3868);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
  switch (v1426[0]) {
    case 'Api_buyDiscount0_282': {
      const v1429 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1623 = v1426[1];
      undefined /* setApiDetails */;
      let v1643;
      const v1644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
      const v1645 = stdlib.fromSome(v1644, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
      const v1646 = stdlib.ge(v1645, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1646) {
        v1643 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1649 = v1234[v1645];
        v1643 = v1649;
        }
      const v1650 = stdlib.lt(v1643, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1650, {
        at: './index.rsh:211:12:application',
        fs: ['at ./index.rsh:320:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1651 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1643);
      const v1652 = stdlib.mul(v1257, v1651);
      const v1653 = stdlib.div(v1652, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
      const v1688 = stdlib.add(v1268, v1653);
      ;
      const v1695 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
      const v1696 = [v1297, v1295, v1695];
      const v1697 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1696);
      ;
      const v1717 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:322:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1717, {
        at: './index.rsh:322:20:application',
        fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1718 = v1697[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 1)];
      const v1719 = v1718[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 0)];
      const v1720 = stdlib.gt(v1719, v1189);
      stdlib.assert(v1720, {
        at: './index.rsh:323:20:application',
        fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1721;
      if (v1646) {
        v1721 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1727 = v1234[v1645];
        v1721 = v1727;
        }
      const v1728 = stdlib.lt(v1721, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1728, {
        at: './index.rsh:211:12:application',
        fs: ['at ./index.rsh:326:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1729 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1721);
      const v1730 = stdlib.mul(v1257, v1729);
      const v1731 = stdlib.div(v1730, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
      const v1732 = stdlib.div(v1731, v1188);
      const v1733 = stdlib.add(v1257, v1187);
      null;
      const v1737 = stdlib.sub(v1688, v1732);
      ;
      const v1743 = stdlib.sub(v1719, v1189);
      const v1746 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1)];
      const v1747 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 2)];
      const v1748 = [v1743, v1746, v1747];
      const v1749 = stdlib.Array_set(v1697, stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1), v1748);
      ;
      let v1750;
      const v1751 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
      const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
      const v1753 = stdlib.ge(v1752, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1753) {
        v1750 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1756 = v1236[v1752];
        v1750 = v1756;
        }
      const v1757 = stdlib.mul(v1750, stdlib.checkedBigNumberify('./index.rsh:333:79:decimal', stdlib.UInt_max, 1000));
      const v1758 = stdlib.sub(v1186, v1757);
      const v1763 = {
        addr: v1425,
        discountLevel: v1645,
        timeReductionLevel: v1752
        };
      const v1765 = await txn1.getOutput('Api_buyTicket', 'v1763', ctc12, v1763);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1623, v1765), {
          at: './index.rsh:315:11:application',
          fs: ['at ./index.rsh:315:11:application call to [unknown function] (defined at: ./index.rsh:315:11:function exp)', 'at ./index.rsh:336:21:application call to "callback" (defined at: ./index.rsh:321:22:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      let v1771;
      if (v1646) {
        v1771 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1777 = v1234[v1645];
        v1771 = v1777;
        }
      const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1778, {
        at: './index.rsh:211:12:application',
        fs: ['at ./index.rsh:340:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1771);
      const v1780 = stdlib.mul(v1257, v1779);
      const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
      const v1782 = stdlib.add(v1259, v1781);
      const v1783 = stdlib.add(v1256, v1732);
      const v1784 = stdlib.add(v1254, v1758);
      const v3857 = v1784;
      const v3859 = v1783;
      const v3860 = v1733;
      const v3861 = v1782;
      const v3862 = v1425;
      const v3864 = v1749;
      const v3865 = v1737;
      const v3866 = v1749[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v3867 = v3866[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v3868 = v3866[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
      const v3869 = stdlib.sub(v3867, v3868);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1426[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2011 = v1426[1];
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
    Api_buyDiscount0_282: ctc10,
    Api_buyTicket0_282: ctc10,
    Api_buyTimeReduction0_282: ctc10,
    Api_getParticipantStats0_282: ctc10
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
  
  
  const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1342 = ctc.selfAddress();
  const v1344 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:369:14:application call to [unknown function] (defined at: ./index.rsh:369:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyTimeReduction0_282" (defined at: ./index.rsh:367:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1345 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1342), null);
  const v1346 = stdlib.fromSome(v1345, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
  const v1347 = stdlib.lt(v1346, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1347, {
    at: './index.rsh:369:23:application',
    fs: ['at ./index.rsh:369:14:application call to [unknown function] (defined at: ./index.rsh:369:14:function exp)', 'at ./index.rsh:369:14:application call to [unknown function] (defined at: ./index.rsh:369:14:function exp)', 'at ./index.rsh:277:23:application call to "runApi_buyTimeReduction0_282" (defined at: ./index.rsh:367:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1350 = ['Api_buyTimeReduction0_282', v1344];
  
  let v1400;
  const v1404 = stdlib.ge(v1346, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1404) {
    v1400 = stdlib.checkedBigNumberify('./index.rsh:235:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1407 = v1233[v1346];
    v1400 = v1407;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298, v1350],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:370:18:decimal', stdlib.UInt_max, 0), [[v1400, v1204]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
      
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1425), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:235:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1233[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1297, v1855);
          const v1889 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1295, v1889];
          const v1891 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1890);
          sim_r.txns.push({
            amt: v1855,
            kind: 'to',
            tok: v1204
            });
          const v1984 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:378:58:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1425, v1984);
          null;
          const v1986 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1425), null);
          const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1990 = {
            addr: v1425,
            discountLevel: v1987,
            timeReductionLevel: v1984
            };
          const v1992 = await txn1.getOutput('Api_buyTimeReduction', 'v1990', ctc12, v1990);
          
          const v3992 = v1254;
          const v3994 = v1256;
          const v3995 = v1257;
          const v3996 = v1259;
          const v3997 = v1260;
          const v3999 = v1891;
          const v4000 = v1268;
          const v4001 = v1891[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v4002 = v4001[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v4003 = v4001[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
          const v4004 = stdlib.sub(v4002, v4003);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
  switch (v1426[0]) {
    case 'Api_buyDiscount0_282': {
      const v1429 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1623 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1426[1];
      undefined /* setApiDetails */;
      let v1855;
      const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
      const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
      const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1858, {
        at: './index.rsh:232:12:application',
        fs: ['at ./index.rsh:370:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:230:41:function exp)', 'at ./index.rsh:370:14:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1859) {
        v1855 = stdlib.checkedBigNumberify('./index.rsh:235:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1862 = v1233[v1857];
        v1855 = v1862;
        }
      ;
      const v1885 = stdlib.add(v1297, v1855);
      const v1889 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
      const v1890 = [v1885, v1295, v1889];
      const v1891 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1890);
      ;
      const v1984 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:378:58:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1425, v1984);
      null;
      const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
      const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
      const v1990 = {
        addr: v1425,
        discountLevel: v1987,
        timeReductionLevel: v1984
        };
      const v1992 = await txn1.getOutput('Api_buyTimeReduction', 'v1990', ctc12, v1990);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1817, v1992), {
          at: './index.rsh:368:11:application',
          fs: ['at ./index.rsh:368:11:application call to [unknown function] (defined at: ./index.rsh:368:11:function exp)', 'at ./index.rsh:383:21:application call to "callback" (defined at: ./index.rsh:371:22:function exp)', 'at ./index.rsh:371:22:application call to [unknown function] (defined at: ./index.rsh:371:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v3992 = v1254;
      const v3994 = v1256;
      const v3995 = v1257;
      const v3996 = v1259;
      const v3997 = v1260;
      const v3999 = v1891;
      const v4000 = v1268;
      const v4001 = v1891[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v4002 = v4001[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v4003 = v4001[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
      const v4004 = stdlib.sub(v4002, v4003);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2011 = v1426[1];
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
    Api_buyDiscount0_282: ctc10,
    Api_buyTicket0_282: ctc10,
    Api_buyTimeReduction0_282: ctc10,
    Api_getParticipantStats0_282: ctc10
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
  
  
  const [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1354 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:387:13:application call to [unknown function] (defined at: ./index.rsh:387:13:function exp)', 'at ./index.rsh:277:23:application call to "runApi_getParticipantStats0_282" (defined at: ./index.rsh:387:13:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1358 = ['Api_getParticipantStats0_282', v1354];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298, v1358],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:387:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:313:18:decimal', stdlib.UInt_max, 0), v1204]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
      
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2083 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v2084 = [v1297, v1295, v2083];
          const v2085 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v2084);
          ;
          const v2193 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1425), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v2195 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1425), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v2197 = {
            addr: v1425,
            discountLevel: v2194,
            timeReductionLevel: v2196
            };
          const v2199 = await txn1.getOutput('Api_getParticipantStats', 'v2197', ctc12, v2197);
          
          const v4127 = v1254;
          const v4129 = v1256;
          const v4130 = v1257;
          const v4131 = v1259;
          const v4132 = v1260;
          const v4134 = v2085;
          const v4135 = v1268;
          const v4136 = v2085[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v4137 = v4136[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
          const v4138 = v4136[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
          const v4139 = stdlib.sub(v4137, v4138);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn1;
  switch (v1426[0]) {
    case 'Api_buyDiscount0_282': {
      const v1429 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1623 = v1426[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1426[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2011 = v1426[1];
      undefined /* setApiDetails */;
      ;
      const v2083 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
      const v2084 = [v1297, v1295, v2083];
      const v2085 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v2084);
      ;
      const v2193 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
      const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
      const v2195 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
      const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
      const v2197 = {
        addr: v1425,
        discountLevel: v2194,
        timeReductionLevel: v2196
        };
      const v2199 = await txn1.getOutput('Api_getParticipantStats', 'v2197', ctc12, v2197);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v2011, v2199), {
          at: './index.rsh:388:11:application',
          fs: ['at ./index.rsh:388:11:application call to [unknown function] (defined at: ./index.rsh:388:11:function exp)', 'at ./index.rsh:391:21:application call to "callback" (defined at: ./index.rsh:389:22:function exp)', 'at ./index.rsh:389:22:application call to [unknown function] (defined at: ./index.rsh:389:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4127 = v1254;
      const v4129 = v1256;
      const v4130 = v1257;
      const v4131 = v1259;
      const v4132 = v1260;
      const v4134 = v2085;
      const v4135 = v1268;
      const v4136 = v2085[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v4137 = v4136[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
      const v4138 = v4136[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
      const v4139 = stdlib.sub(v4137, v4138);
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
    Api_buyDiscount0_282: ctc4,
    Api_buyTicket0_282: ctc4,
    Api_buyTimeReduction0_282: ctc4,
    Api_getParticipantStats0_282: ctc4
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
  
  
  const v1161 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1162 = [v1161, v1161];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1183, v1184, v1185, v1186, v1187, v1188, v1189], secs: v1191, time: v1190, didSend: v53, from: v1182 } = txn1;
  const v1192 = v1162[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0)];
  const v1194 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 1)];
  const v1195 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 2)];
  const v1196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1194, v1195];
  const v1197 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0), v1196);
  ;
  ;
  const v1199 = 'Metafomo                        ';
  const v1200 = 'METAFOMO';
  const v1201 = 'https://metalabs.technology                                                                     ';
  const v1202 = '                                ';
  const v1203 = undefined /* TokenNew */;
  const v1204 = await txn1.getOutput('internal', 'v1203', ctc3, v1203);
  const v1205 = [v1184];
  const v2277 = v1205[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2281 = stdlib.tokenEq(v1204, v2277);
  const v1213 = v2281 ? false : true;
  stdlib.assert(v1213, {
    at: './index.rsh:168:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1214 = v1197[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1216 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1217 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
  const v1218 = [stdlib.UInt_max, v1216, v1217];
  const v1219 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1218);
  const v1221 = v1219[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1222 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
  const v1224 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
  const v1225 = [v1222, stdlib.UInt_max, v1224];
  const v1226 = stdlib.Array_set(v1219, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1225);
  const v1227 = v1226[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
  const v1229 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1231 = [v1228, v1229, false];
  const v1232 = stdlib.Array_set(v1226, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1231);
  const v1233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1234 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1239, time: v1238, didSend: v166, from: v1237 } = txn2;
  ;
  const v1240 = v1232[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
  const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
  const v1242 = stdlib.add(v1241, stdlib.checkedBigNumberify('./index.rsh:261:18:decimal', stdlib.UInt_max, 1));
  const v1245 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 1)];
  const v1246 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 2)];
  const v1247 = [v1242, v1245, v1246];
  const v1248 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0), v1247);
  ;
  const v1249 = stdlib.addressEq(v1182, v1237);
  stdlib.assert(v1249, {
    at: './index.rsh:261:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1253 = stdlib.add(v1191, v1185);
  let v1254 = v1253;
  let v1255 = true;
  let v1256 = stdlib.checkedBigNumberify('./index.rsh:277:59:decimal', stdlib.UInt_max, 0);
  let v1257 = v1183;
  let v1259 = stdlib.checkedBigNumberify('./index.rsh:277:43:decimal', stdlib.UInt_max, 0);
  let v1260 = v1182;
  let v1261 = v1238;
  let v1267 = v1248;
  let v1268 = stdlib.checkedBigNumberify('./index.rsh:151:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1255;})()) {
    const v1294 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
    const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
    const v1297 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
    const v1298 = stdlib.sub(v1295, v1297);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1254],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1261,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:397:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2207, time: v2206, didSend: v960, from: v2205 } = txn4;
          
          ;
          const cv1254 = v1254;
          const cv1255 = false;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v2206;
          const cv1267 = v1267;
          const cv1268 = v1268;
          
          await (async () => {
            const v1254 = cv1254;
            const v1255 = cv1255;
            const v1256 = cv1256;
            const v1257 = cv1257;
            const v1259 = cv1259;
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1267 = cv1267;
            const v1268 = cv1268;
            
            if (await (async () => {
              
              return v1255;})()) {
              const v1294 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v1297 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
              const v1298 = stdlib.sub(v1295, v1297);
              sim_r.isHalt = false;
              }
            else {
              const v2210 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v2213 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
              const v2214 = stdlib.sub(v2211, v2213);
              sim_r.txns.push({
                amt: v1268,
                kind: 'from',
                to: v1260,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:402:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1260,
                tok: v1184
                });
              null;
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2207, time: v2206, didSend: v960, from: v2205 } = txn4;
      ;
      const cv1254 = v1254;
      const cv1255 = false;
      const cv1256 = v1256;
      const cv1257 = v1257;
      const cv1259 = v1259;
      const cv1260 = v1260;
      const cv1261 = v2206;
      const cv1267 = v1267;
      const cv1268 = v1268;
      
      v1254 = cv1254;
      v1255 = cv1255;
      v1256 = cv1256;
      v1257 = cv1257;
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1267 = cv1267;
      v1268 = cv1268;
      
      continue;
      }
    else {
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn3;
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          undefined /* setApiDetails */;
          let v1434;
          const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1436 = stdlib.fromSome(v1435, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1437 = stdlib.lt(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1437, {
            at: './index.rsh:191:12:application',
            fs: ['at ./index.rsh:350:38:application call to "getDiscountPrice" (defined at: ./index.rsh:189:36:function exp)', 'at ./index.rsh:350:14:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1438 = stdlib.ge(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1438) {
            v1434 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1441 = v1233[v1436];
            v1434 = v1441;
            }
          ;
          const v1497 = stdlib.add(v1297, v1434);
          const v1501 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1502 = [v1497, v1295, v1501];
          const v1503 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1502);
          ;
          const v1508 = stdlib.add(v1436, stdlib.checkedBigNumberify('./index.rsh:358:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1425, v1508);
          null;
          const v1512 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1513 = stdlib.fromSome(v1512, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1514 = {
            addr: v1425,
            discountLevel: v1508,
            timeReductionLevel: v1513
            };
          await txn3.getOutput('Api_buyDiscount', 'v1514', ctc7, v1514);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v1503;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          undefined /* setApiDetails */;
          let v1643;
          const v1644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1645 = stdlib.fromSome(v1644, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1646 = stdlib.ge(v1645, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1646) {
            v1643 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1649 = v1234[v1645];
            v1643 = v1649;
            }
          const v1650 = stdlib.lt(v1643, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1650, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:320:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1651 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1643);
          const v1652 = stdlib.mul(v1257, v1651);
          const v1653 = stdlib.div(v1652, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1688 = stdlib.add(v1268, v1653);
          ;
          const v1695 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1696 = [v1297, v1295, v1695];
          const v1697 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1696);
          ;
          const v1717 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:322:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1717, {
            at: './index.rsh:322:20:application',
            fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1718 = v1697[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 1)];
          const v1719 = v1718[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 0)];
          const v1720 = stdlib.gt(v1719, v1189);
          stdlib.assert(v1720, {
            at: './index.rsh:323:20:application',
            fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1721;
          if (v1646) {
            v1721 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1727 = v1234[v1645];
            v1721 = v1727;
            }
          const v1728 = stdlib.lt(v1721, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1728, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:326:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1729 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1721);
          const v1730 = stdlib.mul(v1257, v1729);
          const v1731 = stdlib.div(v1730, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1732 = stdlib.div(v1731, v1188);
          const v1733 = stdlib.add(v1257, v1187);
          null;
          const v1737 = stdlib.sub(v1688, v1732);
          ;
          const v1743 = stdlib.sub(v1719, v1189);
          const v1746 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1)];
          const v1747 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 2)];
          const v1748 = [v1743, v1746, v1747];
          const v1749 = stdlib.Array_set(v1697, stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1), v1748);
          ;
          let v1750;
          const v1751 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1753 = stdlib.ge(v1752, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1753) {
            v1750 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1756 = v1236[v1752];
            v1750 = v1756;
            }
          const v1757 = stdlib.mul(v1750, stdlib.checkedBigNumberify('./index.rsh:333:79:decimal', stdlib.UInt_max, 1000));
          const v1758 = stdlib.sub(v1186, v1757);
          const v1763 = {
            addr: v1425,
            discountLevel: v1645,
            timeReductionLevel: v1752
            };
          await txn3.getOutput('Api_buyTicket', 'v1763', ctc7, v1763);
          let v1771;
          if (v1646) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1234[v1645];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1778, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:340:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1257, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1259, v1781);
          const v1783 = stdlib.add(v1256, v1732);
          const v1784 = stdlib.add(v1254, v1758);
          const cv1254 = v1784;
          const cv1255 = true;
          const cv1256 = v1783;
          const cv1257 = v1733;
          const cv1259 = v1782;
          const cv1260 = v1425;
          const cv1261 = v1427;
          const cv1267 = v1749;
          const cv1268 = v1737;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          undefined /* setApiDetails */;
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1858, {
            at: './index.rsh:232:12:application',
            fs: ['at ./index.rsh:370:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:230:41:function exp)', 'at ./index.rsh:370:14:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:235:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1233[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1297, v1855);
          const v1889 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1295, v1889];
          const v1891 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1890);
          ;
          const v1984 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:378:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1425, v1984);
          null;
          const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1990 = {
            addr: v1425,
            discountLevel: v1987,
            timeReductionLevel: v1984
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1990', ctc7, v1990);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v1891;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          undefined /* setApiDetails */;
          ;
          const v2083 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v2084 = [v1297, v1295, v2083];
          const v2085 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v2084);
          ;
          const v2193 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v2195 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v2197 = {
            addr: v1425,
            discountLevel: v2194,
            timeReductionLevel: v2196
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2197', ctc7, v2197);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v2085;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        }}
    
    }
  const v2210 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
  const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
  const v2213 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
  const v2214 = stdlib.sub(v2211, v2213);
  ;
  ;
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1261,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:407:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2251, time: v2250, didSend: v1002, from: v2249 } = txn3;
      
      ;
      const v2252 = v2250;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1184
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
    tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2251, time: v2250, didSend: v1002, from: v2249 } = txn3;
  ;
  let v2252 = v2250;
  
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
    const {data: [], secs: v2264, time: v2263, didSend: v1011, from: v2262 } = txn4;
    ;
    const v2265 = stdlib.addressEq(v1182, v2262);
    stdlib.assert(v2265, {
      at: './index.rsh:410:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2252 = v2263;
    
    v2252 = cv2252;
    
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
    Api_buyDiscount0_282: ctc5,
    Api_buyTicket0_282: ctc5,
    Api_buyTimeReduction0_282: ctc5,
    Api_getParticipantStats0_282: ctc5
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
  
  
  const v1161 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1162 = [v1161, v1161];
  const v1173 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:156:38:application',
    fs: ['at ./index.rsh:154:16:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1174 = v1173.ticketPrice;
  const v1175 = v1173.nftPrize;
  const v1176 = v1173.deadline;
  const v1177 = v1173.deltaDeadline;
  const v1178 = v1173.unitPrice;
  const v1179 = v1173.ticketFeeDenominator;
  const v1180 = v1173.tokensGivenPerTicket;
  const v1181 = stdlib.gt(v1179, stdlib.checkedBigNumberify('./index.rsh:157:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1181, {
    at: './index.rsh:157:12:application',
    fs: ['at ./index.rsh:154:16:application call to [unknown function] (defined at: ./index.rsh:154:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1174, v1175, v1176, v1177, v1178, v1179, v1180],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:159:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1183, v1184, v1185, v1186, v1187, v1188, v1189], secs: v1191, time: v1190, didSend: v53, from: v1182 } = txn1;
      
      const v1192 = v1162[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0)];
      const v1194 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 1)];
      const v1195 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 2)];
      const v1196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1194, v1195];
      const v1197 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0), v1196);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1184
        });
      ;
      const v1199 = 'Metafomo                        ';
      const v1200 = 'METAFOMO';
      const v1201 = 'https://metalabs.technology                                                                     ';
      const v1202 = '                                ';
      const v1203 = stdlib.simTokenNew(sim_r, v1199, v1200, v1201, v1202, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1204 = await txn1.getOutput('internal', 'v1203', ctc3, v1203);
      const v1205 = [v1184];
      const v2277 = v1205[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2281 = stdlib.tokenEq(v1204, v2277);
      const v1213 = v2281 ? false : true;
      ;
      const v1214 = v1197[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
      const v1216 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
      const v1217 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
      const v1218 = [stdlib.UInt_max, v1216, v1217];
      const v1219 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1218);
      const v1221 = v1219[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
      const v1222 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
      const v1224 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
      const v1225 = [v1222, stdlib.UInt_max, v1224];
      const v1226 = stdlib.Array_set(v1219, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1225);
      const v1227 = v1226[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
      const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
      const v1229 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
      const v1231 = [v1228, v1229, false];
      const v1232 = stdlib.Array_set(v1226, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1231);
      const v1233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
      const v1234 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
      const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1183, v1184, v1185, v1186, v1187, v1188, v1189], secs: v1191, time: v1190, didSend: v53, from: v1182 } = txn1;
  const v1192 = v1162[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0)];
  const v1194 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 1)];
  const v1195 = v1192[stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 2)];
  const v1196 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1194, v1195];
  const v1197 = stdlib.Array_set(v1162, stdlib.checkedBigNumberify('./index.rsh:159:12:dot', stdlib.UInt_max, 0), v1196);
  ;
  ;
  const v1199 = 'Metafomo                        ';
  const v1200 = 'METAFOMO';
  const v1201 = 'https://metalabs.technology                                                                     ';
  const v1202 = '                                ';
  const v1203 = undefined /* TokenNew */;
  const v1204 = await txn1.getOutput('internal', 'v1203', ctc3, v1203);
  const v1205 = [v1184];
  const v2277 = v1205[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2281 = stdlib.tokenEq(v1204, v2277);
  const v1213 = v2281 ? false : true;
  stdlib.assert(v1213, {
    at: './index.rsh:168:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1214 = v1197[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1216 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1217 = v1214[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
  const v1218 = [stdlib.UInt_max, v1216, v1217];
  const v1219 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1218);
  const v1221 = v1219[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1222 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
  const v1224 = v1221[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 2)];
  const v1225 = [v1222, stdlib.UInt_max, v1224];
  const v1226 = stdlib.Array_set(v1219, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1225);
  const v1227 = v1226[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 0)];
  const v1229 = v1227[stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1)];
  const v1231 = [v1228, v1229, false];
  const v1232 = stdlib.Array_set(v1226, stdlib.checkedBigNumberify('./index.rsh:168:32:application', stdlib.UInt_max, 1), v1231);
  const v1233 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1234 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1191, v1204, v1232, v1233, v1234, v1236],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1190,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:261:18:decimal', stdlib.UInt_max, 1), v1184]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1239, time: v1238, didSend: v166, from: v1237 } = txn2;
      
      ;
      const v1240 = v1232[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
      const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
      const v1242 = stdlib.add(v1241, stdlib.checkedBigNumberify('./index.rsh:261:18:decimal', stdlib.UInt_max, 1));
      const v1245 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 1)];
      const v1246 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 2)];
      const v1247 = [v1242, v1245, v1246];
      const v1248 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0), v1247);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:261:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1184
        });
      const v1249 = stdlib.addressEq(v1182, v1237);
      ;
      
      const v1253 = stdlib.add(v1191, v1185);
      const v1254 = v1253;
      const v1255 = true;
      const v1256 = stdlib.checkedBigNumberify('./index.rsh:277:59:decimal', stdlib.UInt_max, 0);
      const v1257 = v1183;
      const v1259 = stdlib.checkedBigNumberify('./index.rsh:277:43:decimal', stdlib.UInt_max, 0);
      const v1260 = v1182;
      const v1261 = v1238;
      const v1267 = v1248;
      const v1268 = stdlib.checkedBigNumberify('./index.rsh:151:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1255;})()) {
        const v1294 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
        const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
        const v1297 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
        const v1298 = stdlib.sub(v1295, v1297);
        sim_r.isHalt = false;
        }
      else {
        const v2210 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
        const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
        const v2213 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
        const v2214 = stdlib.sub(v2211, v2213);
        sim_r.txns.push({
          amt: v1268,
          kind: 'from',
          to: v1260,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:402:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1260,
          tok: v1184
          });
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc13, ctc9, ctc10, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1239, time: v1238, didSend: v166, from: v1237 } = txn2;
  ;
  const v1240 = v1232[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
  const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0)];
  const v1242 = stdlib.add(v1241, stdlib.checkedBigNumberify('./index.rsh:261:18:decimal', stdlib.UInt_max, 1));
  const v1245 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 1)];
  const v1246 = v1240[stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 2)];
  const v1247 = [v1242, v1245, v1246];
  const v1248 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:261:12:dot', stdlib.UInt_max, 0), v1247);
  ;
  const v1249 = stdlib.addressEq(v1182, v1237);
  stdlib.assert(v1249, {
    at: './index.rsh:261:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:265:24:application',
    fs: ['at ./index.rsh:264:9:application call to [unknown function] (defined at: ./index.rsh:264:23:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1253 = stdlib.add(v1191, v1185);
  let v1254 = v1253;
  let v1255 = true;
  let v1256 = stdlib.checkedBigNumberify('./index.rsh:277:59:decimal', stdlib.UInt_max, 0);
  let v1257 = v1183;
  let v1259 = stdlib.checkedBigNumberify('./index.rsh:277:43:decimal', stdlib.UInt_max, 0);
  let v1260 = v1182;
  let v1261 = v1238;
  let v1267 = v1248;
  let v1268 = stdlib.checkedBigNumberify('./index.rsh:151:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1255;})()) {
    const v1294 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
    const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
    const v1297 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
    const v1298 = stdlib.sub(v1295, v1297);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1254],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v1267, v1268, v1294, v1295, v1297, v1298],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1261,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:397:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2207, time: v2206, didSend: v960, from: v2205 } = txn4;
          
          ;
          const cv1254 = v1254;
          const cv1255 = false;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v2206;
          const cv1267 = v1267;
          const cv1268 = v1268;
          
          await (async () => {
            const v1254 = cv1254;
            const v1255 = cv1255;
            const v1256 = cv1256;
            const v1257 = cv1257;
            const v1259 = cv1259;
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1267 = cv1267;
            const v1268 = cv1268;
            
            if (await (async () => {
              
              return v1255;})()) {
              const v1294 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v1295 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v1297 = v1294[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
              const v1298 = stdlib.sub(v1295, v1297);
              sim_r.isHalt = false;
              }
            else {
              const v2210 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
              const v2213 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
              const v2214 = stdlib.sub(v2211, v2213);
              sim_r.txns.push({
                amt: v1268,
                kind: 'from',
                to: v1260,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:402:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1260,
                tok: v1184
                });
              null;
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2207, time: v2206, didSend: v960, from: v2205 } = txn4;
      ;
      const cv1254 = v1254;
      const cv1255 = false;
      const cv1256 = v1256;
      const cv1257 = v1257;
      const cv1259 = v1259;
      const cv1260 = v1260;
      const cv1261 = v2206;
      const cv1267 = v1267;
      const cv1268 = v1268;
      
      v1254 = cv1254;
      v1255 = cv1255;
      v1256 = cv1256;
      v1257 = cv1257;
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1267 = cv1267;
      v1268 = cv1268;
      
      continue;
      }
    else {
      const {data: [v1426], secs: v1428, time: v1427, didSend: v807, from: v1425 } = txn3;
      switch (v1426[0]) {
        case 'Api_buyDiscount0_282': {
          const v1429 = v1426[1];
          undefined /* setApiDetails */;
          let v1434;
          const v1435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1436 = stdlib.fromSome(v1435, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1437 = stdlib.lt(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1437, {
            at: './index.rsh:191:12:application',
            fs: ['at ./index.rsh:350:38:application call to "getDiscountPrice" (defined at: ./index.rsh:189:36:function exp)', 'at ./index.rsh:350:14:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:350:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1438 = stdlib.ge(v1436, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1438) {
            v1434 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1441 = v1233[v1436];
            v1434 = v1441;
            }
          ;
          const v1497 = stdlib.add(v1297, v1434);
          const v1501 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1502 = [v1497, v1295, v1501];
          const v1503 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1502);
          ;
          const v1508 = stdlib.add(v1436, stdlib.checkedBigNumberify('./index.rsh:358:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1425, v1508);
          null;
          const v1512 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1513 = stdlib.fromSome(v1512, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1514 = {
            addr: v1425,
            discountLevel: v1508,
            timeReductionLevel: v1513
            };
          await txn3.getOutput('Api_buyDiscount', 'v1514', ctc8, v1514);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v1503;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1623 = v1426[1];
          undefined /* setApiDetails */;
          let v1643;
          const v1644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1645 = stdlib.fromSome(v1644, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1646 = stdlib.ge(v1645, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1646) {
            v1643 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1649 = v1234[v1645];
            v1643 = v1649;
            }
          const v1650 = stdlib.lt(v1643, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1650, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:320:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:320:14:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:320:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1651 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1643);
          const v1652 = stdlib.mul(v1257, v1651);
          const v1653 = stdlib.div(v1652, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1688 = stdlib.add(v1268, v1653);
          ;
          const v1695 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1696 = [v1297, v1295, v1695];
          const v1697 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1696);
          ;
          const v1717 = stdlib.gt(v1188, stdlib.checkedBigNumberify('./index.rsh:322:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1717, {
            at: './index.rsh:322:20:application',
            fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1718 = v1697[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 1)];
          const v1719 = v1718[stdlib.checkedBigNumberify('./index.rsh:323:28:application', stdlib.UInt_max, 0)];
          const v1720 = stdlib.gt(v1719, v1189);
          stdlib.assert(v1720, {
            at: './index.rsh:323:20:application',
            fs: ['at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1721;
          if (v1646) {
            v1721 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1727 = v1234[v1645];
            v1721 = v1727;
            }
          const v1728 = stdlib.lt(v1721, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1728, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:326:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1729 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1721);
          const v1730 = stdlib.mul(v1257, v1729);
          const v1731 = stdlib.div(v1730, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1732 = stdlib.div(v1731, v1188);
          const v1733 = stdlib.add(v1257, v1187);
          null;
          const v1737 = stdlib.sub(v1688, v1732);
          ;
          const v1743 = stdlib.sub(v1719, v1189);
          const v1746 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1)];
          const v1747 = v1718[stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 2)];
          const v1748 = [v1743, v1746, v1747];
          const v1749 = stdlib.Array_set(v1697, stdlib.checkedBigNumberify('./index.rsh:331:61:application', stdlib.UInt_max, 1), v1748);
          ;
          let v1750;
          const v1751 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1752 = stdlib.fromSome(v1751, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1753 = stdlib.ge(v1752, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1753) {
            v1750 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1756 = v1236[v1752];
            v1750 = v1756;
            }
          const v1757 = stdlib.mul(v1750, stdlib.checkedBigNumberify('./index.rsh:333:79:decimal', stdlib.UInt_max, 1000));
          const v1758 = stdlib.sub(v1186, v1757);
          const v1763 = {
            addr: v1425,
            discountLevel: v1645,
            timeReductionLevel: v1752
            };
          await txn3.getOutput('Api_buyTicket', 'v1763', ctc8, v1763);
          let v1771;
          if (v1646) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1234[v1645];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:211:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1778, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:340:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:209:47:function exp)', 'at ./index.rsh:321:22:application call to [unknown function] (defined at: ./index.rsh:321:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:212:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1257, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:212:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1259, v1781);
          const v1783 = stdlib.add(v1256, v1732);
          const v1784 = stdlib.add(v1254, v1758);
          const cv1254 = v1784;
          const cv1255 = true;
          const cv1256 = v1783;
          const cv1257 = v1733;
          const cv1259 = v1782;
          const cv1260 = v1425;
          const cv1261 = v1427;
          const cv1267 = v1749;
          const cv1268 = v1737;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1426[1];
          undefined /* setApiDetails */;
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1858, {
            at: './index.rsh:232:12:application',
            fs: ['at ./index.rsh:370:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:230:41:function exp)', 'at ./index.rsh:370:14:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:370:14:function exp)', 'at ./index.rsh:277:23:application call to [unknown function] (defined at: ./index.rsh:277:23:function exp)', 'at ./index.rsh:313:18:application call to [unknown function] (defined at: ./index.rsh:313:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:235:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1233[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1297, v1855);
          const v1889 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1295, v1889];
          const v1891 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v1890);
          ;
          const v1984 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:378:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1425, v1984);
          null;
          const v1986 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v1987 = stdlib.fromSome(v1986, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v1990 = {
            addr: v1425,
            discountLevel: v1987,
            timeReductionLevel: v1984
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1990', ctc8, v1990);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v1891;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2011 = v1426[1];
          undefined /* setApiDetails */;
          ;
          const v2083 = v1294[stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 2)];
          const v2084 = [v1297, v1295, v2083];
          const v2085 = stdlib.Array_set(v1267, stdlib.checkedBigNumberify('./index.rsh:277:23:dot', stdlib.UInt_max, 1), v2084);
          ;
          const v2193 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1425), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', stdlib.UInt_max, 0));
          const v2195 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1425), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:228:74:decimal', stdlib.UInt_max, 0));
          const v2197 = {
            addr: v1425,
            discountLevel: v2194,
            timeReductionLevel: v2196
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2197', ctc8, v2197);
          const cv1254 = v1254;
          const cv1255 = true;
          const cv1256 = v1256;
          const cv1257 = v1257;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1427;
          const cv1267 = v2085;
          const cv1268 = v1268;
          
          v1254 = cv1254;
          v1255 = cv1255;
          v1256 = cv1256;
          v1257 = cv1257;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1267 = cv1267;
          v1268 = cv1268;
          
          continue;
          break;
          }
        }}
    
    }
  const v2210 = v1267[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
  const v2211 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:48:application', stdlib.UInt_max, 1)];
  const v2213 = v2210[stdlib.checkedBigNumberify('./index.rsh:289:60:application', stdlib.UInt_max, 0)];
  const v2214 = stdlib.sub(v2211, v2213);
  ;
  ;
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1261,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:407:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2251, time: v2250, didSend: v1002, from: v2249 } = txn3;
      
      ;
      const v2252 = v2250;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1184
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
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2251, time: v2250, didSend: v1002, from: v2249 } = txn3;
  ;
  let v2252 = v2250;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1182, v1183, v1184, v1185, v1186, v1187, v1188, v1189, v1204, v1233, v1234, v1236, v1254, v1256, v1257, v1259, v1260, v2214],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2252,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:410:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2264, time: v2263, didSend: v1011, from: v2262 } = txn4;
        
        ;
        const v2265 = stdlib.addressEq(v1182, v2262);
        ;
        const cv2252 = v2263;
        
        await (async () => {
          const v2252 = cv2252;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1184
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
      tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2264, time: v2263, didSend: v1011, from: v2262 } = txn4;
    ;
    const v2265 = stdlib.addressEq(v1182, v2262);
    stdlib.assert(v2265, {
      at: './index.rsh:410:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2252 = v2263;
    
    v2252 = cv2252;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_participantInfo(address)(uint64,uint64,address)`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_participantInfo(address)(uint64,uint64,address)`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAlAAEIByBAA2QGBYACiAKoAigwBDhIUFjoAfAB+AGgjQYS1PPd8QuFkqTZDIOj+M8N4fuxywyTub7UBIWf7bsJi7iLgQIiygIRAvkBJgUBAAEBAQIACP//////////IjUAMRhBECgrZEkiWzUBJFs1AjEZIxJBAAoxACghGK9mQg/9NhoAF0lBA5kiNQQjNQZJIRkMQALhSSEaDEABLUkhGwxAAGkhGxJENAFJIQgMQAA+SSUMQAAdJRJEKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCD6BIKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCD4UhBhJEKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCD2chGhJENAFJIQgMQAB2SSUMQAA5JRJENhoBNf8iNP+ID21XAAlJNf4jWzT+IlVNFiI0/4gPWVcJCUk1/iNbNP4iVU0WUDT/UDUHQg8bSDYaATX/IjT/iA82VwAJSTX+I1s0/iJVTRYiNP+IDyJXCQlJNf4jWzT+IlVNFlA0/1A1B0IO5CEGEkQ2GgE1/yI0/4gO/FcACUk1/iNbNP4iVU0WIjT/iA7oVwkJSTX+I1s0/iJVTRZQNP9QNQdCDqpJIRwMQAGWIRwSRDQBSSEIDEABB0klDEAAgiUSRChkKWRQKmRQSTUDV2AoNf80A1cwCDQDVzgIUDQDVyAIUDQDVygIUDQDV0AIUDQDV0gIUDQDV1AIUDQDgfMCJFhQNANXWAhQNANX+AhQNAMhCiRYUDQDIQshBFhQNANX8AhQNANX6AhQNP9QNANXiDBQNP9QNANXuDBQNQdCDg5IKGQpZFAqZFBJNQNXYCg1/zQDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhDCRYUDQDV1gIUDQDV/gIUDQDIQokWFA0AyELIQRYUDQDV/AIUDQDV+gIUDT/UDQDV4gwUDT/UDQDV7gwUDUHQg2PIQYSRChkKWRQKmRQSTUDV2AoNf80A1cwCDQDVzgIUDQDVyAIUDQDVygIUDQDV0AIUDQDV0gIUDQDV1AIUDQDIQwkWFA0A1dYCFA0A1f4CFA0AyEKJFhQNAMhCyEEWFA0A1fwCFA0A1foCFA0/1A0A1eIMFA0/1A0A1e4MFA1B0INDSEZEkQrNf+AAQM0/1BCAWNJIR0MQAB+SSEeDEAADiEeEkQrNf8qNP9QQgFHIR0SRDQBSSEIDEAAPkklDEAAHSUSRChkKWRQKmRQNQM2GgEXNAMhBVsIFjUHQgyxSChkKWRQKmRQNQM2GgEXNAMhBVsIFjUHQgyWIQYSRChkKWRQKmRQNQM2GgEXNAMhBVsIFjUHQgx4SSEfDEAADiEfEkQrNf8pNP9QQgDJga2Em2MSRCs1/yg0/1BCALg2GgIXNQQ2GgM2GgEXSSEPDEAGLEkhCAxABZBJJQxAAJYlEkQlNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQMhFFs1/4AE4huzqbAyBzT/D0Q0A1cAIDQDIQRbNAMhDVs0AyEOWzQDIRBbNAMhBVs0AyERWzQDIRJbNAMhE1s0A1dgKDQDV4gwNANXuDA0/yI0AyEVWzQDIRZbNAMhCls0AyELIQRYMgY0AyEMISBYNAMhIVtCCYZIJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpKSkpKSkpKSkpXACA1/yEEWzX+IQ1bNf0hDls1/CEQWzX7IQVbNfohEVs1+SESWzX4IRNbNfdXYCg19leIMDX1V7gwNfQhFFs18yEVWzXyIRZbNfEhCls18CELIQRYNe8hDCEgWDXuISFbNe2B0gIhIlg17IHjAls164HrAls16kk1BTXpgASQT2RJNOlQsDIHNPMMRDTpIlVJISMMQAGYSSEGDEAApyEGEkSACAAAAAAAAAiVIjEAiArpVwAJSTXoI1s06CJVTRYiMQCICtVXCQlJNegjWzToIlVNFlAxAFBQsCIxAIgKu1cACUk16CNbNOgiVU0WIjEAiAqnVwkJSTXoI1s06CJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08yM08jTxNPA07zIGNO5XABE06hY06xZQNOxXEAFQUDTtQggaSCIxAIgKT1cJCUk15iNbNOYiVU1JNechCQxENOchCQ9BAAchJDXoQgALNPYkNOcLJFgXNeg06DT3iApBNOcjCDXmMQAoMQCICgwpNOYWUDXlVwAJNOVQZoAE6aTuQTEAUDTmFlCwgAgAAAAAAAAHxiIxAIgJ4FcACUk15SNbNOUiVU0WNOYWUDEAUFCwIjEAiAnDVwAJSTXlI1s05SJVTRY05hZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08yM08jTxNPA07zIGNO5XABE06jToCBY06xZQNOxXEAFQUDTtQgcwSSMMQAGtSCIxAIgJX1cACUk15iNbNOYiVU1JNechCQ9JNeZBAAYiNehCAAs09SQ05wskWBc16DToIQcMRDTxIQc06AkLIQcKNeU05YgJLDTuVwARNOoWNOsWUDTsVxABUFA15DT5Iw1ENORXERFJNeMiW0k14jT4DUQ05kEABiI14UIACzT1JDTnCyRYFzXhNOEhBwxENPEhBzThCQshBwpJNeA0+Qo13zTxNPoINd6ABEXJ7MQxAFA04BZQNN4WULCxIrIBNN+yCCOyEDT/sgezsSKyATT4shIhD7IQMQCyFDT3shGzIjEAiAh/VwkJSTXbI1s02yJVTUk13CEJD0EABiI13UIACzT0JDTcCyRYFzXdgAgAAAAAAAAG4zTnFjTcFlAxAFBQsDTnFjTcFlAxAFA1BzTmQQAGIjXbQgALNPUkNOcLJFgXNds02yEHDEQ0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zT7NN2B6AcLCQgjNPI03wg03jTwNPEhBzTbCQshBwoIMQAyBjTkVwARNOI0+AkWNONXCAhQNONXEAFQUDTtNOUINN8JQgV9SCIxAIgHslcACUk15iNbNOYiVU1JNechCQxENOchCQ9BAAchJDXoQgALNPYkNOcLJFgXNeg06DT3iAekNOcjCDXmMQAoMQCIB28pNOYWUDXlVwkJNOVMUGaABFaPh0wxAFA05hZQsIAIAAAAAAAABeo05hYiMQCIBz9XCQlJNeUjWzTlIlVNFlAxAFBQsDTmFiIxAIgHIlcJCUk15SNbNOUiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPMjNPI08TTwNO8yBjTuVwARNOo06AgWNOsWUDTsVxABUFA07UIEkkkhCQxAAI1IIQg0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A1cAIDX/gATMmZJcsDT/MQASRDT/NAMhBFs0AyENWzQDIQ5bNAMhEFs0AyEFWzQDIRFbNAMhEls0AyETWzQDV2AoNANXiDA0A1e4MDQDIRRbNAMhFVs0AyEWWzQDIQpbNAMhCyEEWDQDIQxbMgZCBVxISSEjDEAAjEkhBgxAAIRIIQY0ARJENARJIhJMNAISEUQoZClkUCpkUDUDgASnZcS0sDQDVwAgNAMhBFs0AyENWzQDIQ5bNAMhEFs0AyEFWzQDIRFbNAMhEls0AyETWzQDV2AoNANXiDA0A1e4MDQDIRRbNAMhFVs0AyEWWzQDIQpbNAMhCyEEWDQDIQxbMgZCBMlISSMMQACwSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKSVcAIDX/IQRbNf4hDVs1/SEOWzX8V2giNfuABJqLkXSwNPtXABE1+iM0/YgFezT/MQASRDT/NP40/TT8NAMhEFs0AyEFWzQDIRFbNAMhEls0A4FgWzQDV4ooNANXsjA0A1fiMDQDIRNbNPwIIyI0/iI0/zIGNPoiWyMIFjT6VwgIUDT6VxABUDT7VxERUCJCArRIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkkiWzX/JFs1/oEQWzX9gRhbNfwhBFs1+yENWzX6IQ5bNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsCEXiASeISKvSTX4SVBJNfdXABE19iSvNPZXCAhQNPZXEAFQNPdXERFQNfUhF4gEc7EisgEishIhD7IQMgqyFDT+shGzIReIBFqxIrIBIQayEIH///////////8BsiIhCLIjgAhNRVRBRk9NT7IlgCBNZXRhZm9tbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGBodHRwczovL21ldGFsYWJzLnRlY2hub2xvZ3kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfSACAAAAAAAAASzNPQWULA09Ek18zT+FiJbE0Q09VcRETXyNPVXABEnBDTyVwgIUDTyVxABUFBJNfFXERE18DTxVwARNPBXAAgnBFA08FcQAVBQSTXvVxERNe4071cAETTuVwAINO5XCAhQKFBQNe2AKAAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKA17IAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAKAAAAAAAAAA8AAAAAAAAAFAAAAAAAAAAZNeuAMAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABTXqMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDTzFlA07VA07FA061A06lAoSwFXAH9nKUsBV39/ZypLAVf+FGdIIzUBMgY1AkICAjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zT4QQCNNP5XERFJNeokWzXpNOoiWzXoNOk06Ak15zTrNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09FA09VA09lA09xZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUDTqUDTpFlA06BZQNOcWUChLAVcAf2cpSwFXf39nKksBV/59Z0glNQEyBjUCQgFGNP5XERFJNeokWzTqIlsJNemxIrIBNP+yCCOyEDT8sgezsSKyASOyEiEPshA0/LIUNO2yEbOABOybYbc0/FCwNOs07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0UDT1UDT2UDT3FlA0+RZQNPoWUDT7FlA0/FA06RZQKEsBVwB/ZylLAVd/f2cqSwFX/jJnSCEGNQEyBjUCQgCkNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuSTXtNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09lA091A0+FA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghCDUBMgY1AkIAHDEZIQkSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghGK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhDxJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 3,
  stateSize: 379,
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
                "name": "v1183",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1184",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1186",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "name": "v1183",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1184",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1186",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_282",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v1426",
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
        "internalType": "struct T20",
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
    "name": "_reach_oe_v1203",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1514",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1763",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1990",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2197",
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
    "name": "showOutcome",
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
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "showPurchase",
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
    "name": "updateDiscountLevel",
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
    "name": "updateTimeReductionLevel",
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
            "internalType": "uint256",
            "name": "initialPrice",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "nftPrize",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "priceStep",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ticketFeeDenominator",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokensGivenPerTicket",
            "type": "uint256"
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
        "name": "v4157",
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
        "internalType": "address payable",
        "name": "v4161",
        "type": "address"
      }
    ],
    "name": "Fomo_participantInfo",
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
        "name": "v4165",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
        "internalType": "struct T20",
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
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_282",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_282",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v1426",
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
        "internalType": "struct T20",
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
  Bytecode: `0x6080604052604051620066c6380380620066c6833981016040819052620000269162000a1f565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600b62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007e5565b620002729695949392919062000b34565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527fdd73bf6a2ef2323b8d87608de08457128d9d604c2479d6a24a6f2ac20c45712a9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600c62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007f3565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c2f565b604051602081830303815290604052600290805190602001906200059b9291906200086a565b5050505062000d8c565b620005af620008f9565b60005b60028110156200060557848160028110620005d157620005d162000ace565b6020020151828260028110620005eb57620005eb62000ace565b602002015280620005fc8162000d25565b915050620005b2565b50818184600281106200061c576200061c62000ace565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102e08101909152600061028082018181526102a083018290526102c083019190915281526020810162000689620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b8620008f9565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200072662000946565b8152604080516060810182526000808252602082810182905292820152910190815260200162000755620008f9565b8152604080516060810182526000808252602082810182905292820152910190815260200162000784620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620007b3620008f9565b8152602001620007c262000964565b8152602001620007d162000982565b8152602001620007e062000982565b905290565b611087806200563f83390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620007b3620008f9565b828054620008789062000d4f565b90600052602060002090601f0160209004810192826200089c5760008555620008e7565b82601f10620008b757805160ff1916838001178555620008e7565b82800160010185558215620008e7579182015b82811115620008e7578251825591602001919060010190620008ca565b50620008f5929150620009a0565b5090565b60405180604001604052806002905b6200092f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009085790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008f55760008155600101620009a1565b604080519081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000a3457600080fd5b62000a3e620009b7565b8351815260e0601f198301121562000a5557600080fd5b62000a5f620009ee565b6020850151815260408501519092506001600160a01b038116811462000a8457600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b0c5760208185018101518683018201520162000aee565b8181111562000b1f576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b4960c083018962000ae4565b828103602084015262000b5d818962000ae4565b9050828103604084015262000b73818862000ae4565b9050828103606084015262000b89818762000ae4565b6080840195909552505060a00152949350505050565b8060005b600281101562000bdf57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000ba3565b50505050565b8060005b600581101562000bdf57815184526020938401939091019060010162000be9565b8060005b600681101562000bdf57815184526020938401939091019060010162000c0e565b81516001600160a01b03168152610420810160208301516020830152604083015162000c6660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000cc1828501826001600160a01b03169052565b50506101408084015162000cd88285018262000b9f565b505061016083015162000cf061020084018262000be5565b5061018083015162000d076102a084018262000c0a565b506101a083015162000d1e61036084018262000c0a565b5092915050565b600060001982141562000d4857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d6457607f821691505b6020821081141562000d8657634e487b7160e01b600052602260045260246000fd5b50919050565b6148a38062000d9c6000396000f3fe6080604052600436106101015760003560e01c80637a3678dd1161008f578063ab53f2c611610061578063ab53f2c614610243578063bf2c5b2414610266578063cadc2e7a14610279578063e73216b514610299578063eef5632c146102a157005b80637a3678dd146101d957806383230757146101fb5780638e31476914610210578063a55605961461022357005b80633bc5b7bf116100d35780633bc5b7bf146101765780636579ece6146101a35780636cd6de3a146101b65780636cdcb9df146101be57806373b4522c146101c657005b80631e93b0f11461010a5780632b10758a1461012e5780632c10a1591461014357806330a94db41461015657005b3661010857005b005b34801561011657600080fd5b506003545b6040519081526020015b60405180910390f35b6101366102c1565b6040516101259190613a5f565b610108610151366004613a89565b610311565b34801561016257600080fd5b5061011b610171366004613aa1565b610335565b34801561018257600080fd5b50610196610191366004613ad2565b61058c565b6040516101259190613b05565b6101086101b1366004613b3c565b6105b8565b6101366105d8565b61013661062b565b6101086101d4366004613a89565b610681565b3480156101e557600080fd5b506101ee6106a1565b6040516101259190613b94565b34801561020757600080fd5b5060015461011b565b61010861021e366004613a89565b610b10565b34801561022f57600080fd5b5061011b61023e366004613aa1565b610b30565b34801561024f57600080fd5b50610258610d7b565b604051610125929190613cdb565b610108610274366004613a89565b610e18565b34801561028557600080fd5b50610196610294366004613ad2565b610e38565b610136610e5e565b3480156102ad57600080fd5b506101366102bc366004613ad2565b610eb1565b6102c9613321565b6102d161334b565b6102d961338a565b6102e16133a4565b600060208281018290529082526040805180830190915282815290830152610309828461118d565b505051919050565b61031961334b565b61033161032b36849003840184613e14565b826121ce565b5050565b6000600160005414156103f25760006002805461035190613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90613e6a565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b50505050508060200190518101906103e29190614034565b90506103f06000600a6124c4565b505b600360005414156104b65760006002805461040c90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461043890613e6a565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b505050505080602001905181019061049d919061411b565b90508060a00151836104af9190614247565b9392505050565b600660005414156104d05760006002805461040c90613e6a565b6007600054141561057b576000600280546104ea90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461051690613e6a565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061049d919061425e565b6105876000600a6124c4565b919050565b60408051606081018252600080825260208201819052918101919091526105b2826124ea565b92915050565b6105c061334b565b6103316105d2368490038401846143bf565b8261118d565b6105e0613321565b6105e861334b565b6105f061338a565b6105f86133a4565b600060608201526002815260408051602080820190925282815290830152610620828461118d565b505060400151919050565b610633613321565b61063b61334b565b61064361338a565b61064b6133a4565b600060408201526001818190525060408051602080820190925282815290830152610676828461118d565b505060200151919050565b61068961334b565b61033161069b36849003840184613e14565b826125bc565b6106a96133d4565b60016000541415610764576000600280546106c390613e6a565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef90613e6a565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b50505050508060200190518101906107549190614034565b9050610762600060076124c4565b505b600360005414156109285760006002805461077e90613e6a565b80601f01602080910402602001604051908101604052809291908181526020018280546107aa90613e6a565b80156107f75780601f106107cc576101008083540402835291602001916107f7565b820191906000526020600020905b8154815290600101906020018083116107da57829003601f168201915b505050505080602001905181019061080f919061411b565b905061081961348c565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e080850151845190920191909152610220808501518451909201919091526101008085015184519084169101526101c0808501518451610120908101919091526101e0808701518651610140908101919091526102008089015188519716610160978801526101a0808a01518951610180908101919091528a01518951909101529288018051885190950194909452870151865190910152905184519091015292015181519092019190915251919050565b600660005414156109425760006002805461077e90613e6a565b60076000541415610b015760006002805461095c90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461098890613e6a565b80156109d55780601f106109aa576101008083540402835291602001916109d5565b820191906000526020600020905b8154815290600101906020018083116109b857829003601f168201915b50505050508060200190518101906109ed919061425e565b90506109f761348c565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526102c08401518351909101526101008084015183519083169101526101c0808401518351610120908101919091526101e0808601518551610140908101919091526102008088015187519616610160968701526101a08089015188516101809081019190915289015188519091015292870180518751909501949094528601518551909101529051835190910152909101518151610220015251919050565b610b0d600060076124c4565b90565b610b1861334b565b610331610b2a36849003840184613e14565b826127dd565b600060016000541415610bed57600060028054610b4c90613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7890613e6a565b8015610bc55780601f10610b9a57610100808354040283529160200191610bc5565b820191906000526020600020905b815481529060010190602001808311610ba857829003601f168201915b5050505050806020019051810190610bdd9190614034565b9050610beb600060086124c4565b505b60036000541415610caa57600060028054610c0790613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3390613e6a565b8015610c805780601f10610c5557610100808354040283529160200191610c80565b820191906000526020600020905b815481529060010190602001808311610c6357829003601f168201915b5050505050806020019051810190610c98919061411b565b90508060a00151836104af9190614473565b60066000541415610cc457600060028054610c0790613e6a565b60076000541415610d6f57600060028054610cde90613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0a90613e6a565b8015610d575780601f10610d2c57610100808354040283529160200191610d57565b820191906000526020600020905b815481529060010190602001808311610d3a57829003601f168201915b5050505050806020019051810190610c98919061425e565b610587600060086124c4565b600060606000546002808054610d9090613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610dbc90613e6a565b8015610e095780601f10610dde57610100808354040283529160200191610e09565b820191906000526020600020905b815481529060010190602001808311610dec57829003601f168201915b50505050509050915091509091565b610e2061334b565b610331610e3236849003840184613e14565b82612911565b60408051606081018252600080825260208201819052918101919091526105b282612b63565b610e66613321565b610e6e61334b565b610e7661338a565b610e7e6133a4565b600060808201526003815260408051602080820190925282815290830152610ea6828461118d565b505060600151919050565b610eb9613321565b60016000541415610f7457600060028054610ed390613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610eff90613e6a565b8015610f4c5780601f10610f2157610100808354040283529160200191610f4c565b820191906000526020600020905b815481529060010190602001808311610f2f57829003601f168201915b5050505050806020019051810190610f649190614034565b9050610f72600060096124c4565b505b600360005414156110bc57600060028054610f8e90613e6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610fba90613e6a565b80156110075780601f10610fdc57610100808354040283529160200191611007565b820191906000526020600020905b815481529060010190602001808311610fea57829003601f168201915b505050505080602001905181019061101f919061411b565b905061102961349f565b6001611034856124ea565b51600181111561104657611046613aef565b14611052576000611060565b61105b846124ea565b604001515b815152600161106e85612b63565b51600181111561108057611080613aef565b1461108c57600061109a565b61109584612b63565b604001515b81516020015280516001600160a01b0390941660409094019390935250505190565b600660005414156110d657600060028054610f8e90613e6a565b60076000541415611181576000600280546110f090613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461111c90613e6a565b80156111695780601f1061113e57610100808354040283529160200191611169565b820191906000526020600020905b81548152906001019060200180831161114c57829003601f168201915b505050505080602001905181019061101f919061425e565b610587600060096124c4565b61119d60076000541460286124c4565b81516111b89015806111b157508251600154145b60296124c4565b6000808055600280546111ca90613e6a565b80601f01602080910402602001604051908101604052809291908181526020018280546111f690613e6a565b80156112435780601f1061121857610100808354040283529160200191611243565b820191906000526020600020905b81548152906001019060200180831161122657829003601f168201915b505050505080602001905181019061125b919061425e565b90506112656134b2565b6112778261018001514210602a6124c4565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e1846040516112a6919061448b565b60405180910390a160006020850151515160038111156112c8576112c8613aef565b14156115fa5760016112d9336124ea565b5160018111156112eb576112eb613aef565b146112f7576000611305565b611300336124ea565b604001515b6020820181905261131a9060051160196124c4565b600581602001511061132f5760f98152611352565b81610120015181602001516005811061134a5761134a6144eb565b602002015181525b61135e3415601a6124c4565b80516102a08301516113709190614473565b6040808301805192909252610280840151825160200152610260840151810151915191151591015261010082015181516113b7916113b091339190612bf0565b601b6124c4565b600181602001516113c89190614473565b6060820190815233600081815260046020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527f049bed53fc19127a68e64c896e243a07b2c555296c04f396e70a2b7556edee6e910160405180910390a16060810151608082015152600161144233612b63565b51600181111561145457611454613aef565b1461146057600061146e565b61146933612b63565b604001515b60808201805160200191909152805133604091820152905190517f30e2a11570938227de9b87102dad48dcb2060f6fde03d4d6006b7cab646377dc916114b391613a5f565b60405180910390a1608081015183526114ca613637565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b015181518701526101c08b01518151909501949094526101e08a0151845190930192909252610200890151835196169501949094525143930192909252610220850151918401516115d1929190612c06565b60208201805160e00191909152610240840151905161010001526115f481612c7a565b506121c8565b600160208501515151600381111561161457611614613aef565b1415611c26576001611625336124ea565b51600181111561163757611637613aef565b14611643576000611651565b61164c336124ea565b604001515b60c08201819052600511801560e083015261167257600060a0820152611698565b8161014001518160c001516006811061168d5761168d6144eb565b602002015160a08201525b6116aa60648260a0015110601c6124c4565b60648160a0015160646116bd9190614247565b836101c001516116cd9190614501565b6116d79190614520565b61010082018190526116ec903414601d6124c4565b6102a08201516101208201805191909152610280830151815160200152610260830151604090810151825190151591015261022083015190516117329190600190612c06565b81610140018190525061175661174f338461010001516000612bf0565b601e6124c4565b61176860018360c0015111601f6124c4565b60e0820151610140820151602090810151516117859210906124c4565b8060e001511561179c5760006101608201526117c3565b8161014001518160c00151600681106117b7576117b76144eb565b60200201516101608201525b6117d660648261016001511060216124c4565b606481610160015160646117ea9190614247565b836101c001516117fa9190614501565b6118049190614520565b610180820181905260c083015161181a91614520565b6101a082015260a08201516101c08301516118359190614473565b6101c082018190526101808201516040805133815260208101929092528101919091527f3698508a0af4c7883b38082eb105938584bdb53436931b82abc2c338128794d09060600160405180910390a181516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156118c3573d6000803e3d6000fd5b5060e082015161014082015160200151516118de9190614247565b6101e0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015261010082015160e083015161192791903390612fef565b600161193233612b63565b51600181111561194457611944613aef565b1461195057600061195e565b61195933612b63565b604001515b610220820181905260051161197a5760006102008201526119a2565b81610160015181610220015160068110611996576119966144eb565b60200201516102008201525b60c08101516102408201805191909152610220820151815160200152805133604091820152905190517f9630b76386c0176de84c3e00a63c39badfad89922822eca2d2a121a9f1d2f0cc916119f691613a5f565b60405180910390a1610240810151602084015260e081015115611a20576000610260820152611a47565b8161014001518160c0015160068110611a3b57611a3b6144eb565b60200201516102608201525b611a5a60648261026001511060226124c4565b611a62613637565b825181516001600160a01b039182169052602080850151835190910152604080850151835190831691015260608085015183519091015260808085015183519091015260a08085015183519091015260c08085015183519091015260e0808501518351909101526101008085015183519216910152610120808401518251909101526101408084015182519091015261016080840151825190910152610200820151611b11906103e890614501565b8360800151611b209190614247565b836101800151611b309190614473565b6020808301805192909252905160019101526101a08083015190840151611b579190614473565b602082018051604001919091526101c0830151905160600152610260820151606490611b839082614247565b846101c00151611b939190614501565b611b9d9190614520565b836101e00151611bad9190614473565b6020820180516080019190915280513360a090910152514360c0909101526101408201516101e0830151611be49190600190612c06565b602082015160e001526101a0820151610100830151610240850151611c099190614473565b611c139190614247565b602082015161010001526115f481612c7a565b6002602085015151516003811115611c4057611c40613aef565b1415611f6b576001611c5133612b63565b516001811115611c6357611c63613aef565b14611c6f576000611c7d565b611c7833612b63565b604001515b6102a08201819052611c939060051160236124c4565b6005816102a0015110611cad5760f9610280820152611cd5565b816101200151816102a0015160058110611cc957611cc96144eb565b60200201516102808201525b611ce1341560246124c4565b806102800151826102a00151611cf79190614473565b6102c0820180519190915261028080840151825160200152610260840151604090810151925192151592019190915261010083015190820151611d4791611d4091339190612bf0565b60256124c4565b6001816102a00151611d599190614473565b6102e0820190815233600081815260056020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527fa713e261ccde52235a352fbddb3afe2103de7321502fbf5721c5b46e2e903b85910160405180910390a16001611dc9336124ea565b516001811115611ddb57611ddb613aef565b14611de7576000611df5565b611df0336124ea565b604001515b61030082018051919091526102e0820151815160200152805133604091820152905190517f2bb69bfee71f814e00ecc9720b12c4c42b2200c474af8983c42595dcc84d33bd91611e4491613a5f565b60405180910390a16103008101516040840152611e5f613637565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b01518151909601959095526101c08a01518551909401939093526101e08901518451909201919091526102008801518351951694019390935251439201919091526102208401516102c08401516115d19290612c06565b6003602085015151516003811115611f8557611f85613aef565b14156121c857611f97341560266124c4565b6102a082015161032082018051919091526102808301518151602001526102608301516040908101519151911515910152610100820151611fe690611fdf9033906000612bf0565b60276124c4565b6001611ff1336124ea565b51600181111561200357612003613aef565b1461200f57600061201d565b612018336124ea565b604001515b61034082015152600161202f33612b63565b51600181111561204157612041613aef565b1461204d57600061205b565b61205633612b63565b604001515b6103408201805160200191909152805133604091820152905190517f02a1b12f12d4727e5d71b6b976850c380ee52d5fbfa9ed68f180e99e638a840c916120a191613a5f565b60405180910390a161034081015160608401526120bc613637565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b01518151909601959095526101c08a01518551909401939093526101e08901518451909201919091526102008801518351951694019390935251439201919091526102208401516103208401516115d19290612c06565b50505050565b6121de60016000541460106124c4565b81516121f99015806121f257508251600154145b60116124c4565b60008080556002805461220b90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461223790613e6a565b80156122845780601f1061225957610100808354040283529160200191612284565b820191906000526020600020905b81548152906001019060200180831161226757829003601f168201915b505050505080602001905181019061229c9190614034565b90506122c560408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16123103415600d6124c4565b610140820151515161232490600190614473565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151612367906123609033906001612bf0565b600e6124c4565b815161237f906001600160a01b03163314600f6124c4565b612387613637565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e08086015184519091015261012080860151845193166101009384015261016080870151855190920191909152610180860151845161014001526101a0860151845190910152519084015161243c9190614473565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c090910152610140840151835161249d9290612c06565b60208201805160e00191909152516000610100909101526124bd81612c7a565b5050505050565b816103315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561253657612536613aef565b14156125ad576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561257757612577613aef565b600181111561258857612588613aef565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6125cc60036000541460136124c4565b81516125e79015806125e057508251600154145b60146124c4565b6000808055600280546125f990613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461262590613e6a565b80156126725780601f1061264757610100808354040283529160200191612672565b820191906000526020600020905b81548152906001019060200180831161265557829003601f168201915b505050505080602001905181019061268a919061411b565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a16126d8341560126124c4565b6126e0613657565b815181516001600160a01b0391821690526020808401518351820152604080850151845190841691015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e080850151845190910152610100808501518451908416910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a0808501518451909101526101c0808501518451909101526101e0808501518451909101526102008085015184519316920191909152610220808401518351909101528101514390526121c881613008565b6127ed60066000541460176124c4565b815161280890158061280157508251600154145b60186124c4565b60008080556002805461281a90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461284690613e6a565b80156128935780601f1061286857610100808354040283529160200191612893565b820191906000526020600020905b81548152906001019060200180831161287657829003601f168201915b50505050508060200190518101906128ab919061411b565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a16128f9341560156124c4565b80516126d8906001600160a01b0316331460166124c4565b612921600760005414602c6124c4565b815161293c90158061293557508251600154145b602d6124c4565b60008080556002805461294e90613e6a565b80601f016020809104026020016040519081016040528092919081815260200182805461297a90613e6a565b80156129c75780601f1061299c576101008083540402835291602001916129c7565b820191906000526020600020905b8154815290600101906020018083116129aa57829003601f168201915b50505050508060200190518101906129df919061425e565b90506129f4816101800151421015602e6124c4565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a1612a3f3415602b6124c4565b612a47613637565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a01518951820152610100808b01518a51908a1690820152610120808c01518b5190910152610140808c01518b5190910152610160808c01518b51909101526101808b0151888b01805191909152805160009901989098526101a08b01518851909701969096526101c08a01518751909501949094526101e0890151865190930192909252610200880151855196169501949094528251439401939093526102208501518251909301929092526102408401519051909101526121c881612c7a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612baf57612baf613aef565b14156125ad576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561257757612577613aef565b6000612bfe8385308561313b565b949350505050565b612c0e613685565b60005b6002811015612c5a57848160028110612c2c57612c2c6144eb565b6020020151828260028110612c4357612c436144eb565b602002015280612c5281614542565b915050612c11565b5081818460028110612c6e57612c6e6144eb565b60200201529392505050565b604080518082019091526000808252602082015281602001516020015115612e225760208281015160e001518101518051910151612cb89190614247565b8152612cc26136d0565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151818901528951610100908101518816818a01528a5161012090810151908a01528a5161014090810151908a01528a5161016090810151908a0152868b018051516101808b015280518701516101a08b01528051909501516101c08a01528451909301516101e0890152835190910151909516610200870152815185015161022087015281510151610240860152805184015183015161026086015280518401518301518301516102808601525190920151810151516102a084015283516102c08401526007600055436001559051612dfe918391016145a1565b604051602081830303815290604052600290805190602001906121c89291906137de565b60208281015160e001518101518051910151612e3e9190614247565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612e8c573d6000803e3d6000fd5b50612ea9826000015160400151836020015160a001516001612fef565b60208083015160a001516040516001600160a01b0390911681527f10712c47b269c9df1f602c16156b1d6404c0b81b5bbebfe8e2d13e08bda50b68910160405180910390a1612ef6613862565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e0908101519088015288516101009081015187169088015288516101209081015190880152885161014090810151908801528851610160908101519088015284890180515161018089015280518501516101a08901528051909301516101c08801528251909101516101e087015290510151909216610200840152838101516102208401526003600055436001559051612dfe9183910161471a565b612ffa838383613215565b61300357600080fd5b505050565b613010613862565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101518416908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519085015284516101c0908101519085015284516101e09081015190850152845161020090810151909316928401929092528351610220908101519084015260066000554360015590516131179183910161471a565b604051602081830303815290604052600290805190602001906130039291906137de565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916131a291614834565b60006040518083038185875af1925050503d80600081146131df576040519150601f19603f3d011682016040523d82523d6000602084013e6131e4565b606091505b50915091506131f5828260016132e6565b508080602001905181019061320a9190614850565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161327491614834565b60006040518083038185875af1925050503d80600081146132b1576040519150601f19603f3d011682016040523d82523d6000602084013e6132b6565b606091505b50915091506132c7828260026132e6565b50808060200190518101906132dc9190614850565b9695505050505050565b606083156132f55750816104af565b8251156133055782518084602001fd5b60405163100960cb60e01b8152600481018390526024016124e1565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b604051806080016040528061335e613321565b815260200161336b613321565b8152602001613378613321565b8152602001613385613321565b905290565b604051806040016040528060008152602001613385613923565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b60405180610240016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001613465613936565b8152602001613472613954565b815260200161347f613936565b8152602001613385613954565b60405180602001604052806133856133d4565b6040518060200160405280613385613321565b60405180610360016040528060008152602001600081526020016134f2604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001613506613321565b815260200160008152602001600081526020016000151581526020016000815260200161354f604051806060016040528060008152602001600081526020016000151581525090565b815260200161355c613685565b8152602001600081526020016000815260200160008152602001600081526020016135a3604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600081526020016135be613321565b81526020016000815260200160008152602001600081526020016135fe604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001613612613321565b8152604080516060810182526000808252602082810182905292820152910190613378565b604051806040016040528061364a613972565b81526020016133856139ed565b604051806040016040528061366a613862565b81526020016133856040518060200160405280600081525090565b60405180604001604052806002905b6136ba604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816136945790505090565b604051806102e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161373e613936565b815260200161374b613954565b8152602001613758613954565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613791613685565b8152602001600081526020016137c3604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b8280546137ea90613e6a565b90600052602060002090601f01602090048101928261380c5760008555613852565b82601f1061382557805160ff1916838001178555613852565b82800160010185558215613852579182015b82811115613852578251825591602001919060010190613837565b5061385e929150613a4a565b5090565b60405180610240016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016138d0613936565b81526020016138dd613954565b81526020016138ea613954565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b60405180602001604052806133856133a4565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016139e0613936565b815260200161347f613954565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001613a3d613685565b8152602001600081525090565b5b8082111561385e5760008155600101613a4b565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b600060408284031215613a9b57600080fd5b50919050565b600060208284031215613ab357600080fd5b5035919050565b6001600160a01b0381168114613acf57600080fd5b50565b600060208284031215613ae457600080fd5b81356104af81613aba565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110613b1c57613b1c613aef565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215613a9b57600080fd5b8060005b60058110156121c8578151845260209384019390910190600101613b52565b8060005b60068110156121c8578151845260209384019390910190600101613b75565b6000610480820190508251825260208301516020830152604083015160408301526060830151613bcf60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151613c13828501826001600160a01b03169052565b505061012083810151908301526101408084015190830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c080840151613c6882850182613b4e565b50506101e0830151613c7e610260840182613b71565b50610200830151613c93610320840182613b4e565b50610220830151613ca86103c0840182613b71565b5092915050565b60005b83811015613cca578181015183820152602001613cb2565b838111156121c85750506000910152565b8281526040602082015260008251806040840152613d00816060850160208701613caf565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b60405290565b604051610240810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b6040516102e0810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b6040805190810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b6040516020810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b60405160a0810167ffffffffffffffff81118282101715613d4f57613d4f613d15565b8015158114613acf57600080fd5b600060408284031215613e2657600080fd5b6040516040810181811067ffffffffffffffff82111715613e4957613e49613d15565b604052823581526020830135613e5e81613e06565b60208201529392505050565b600181811c90821680613e7e57607f821691505b60208210811415613a9b57634e487b7160e01b600052602260045260246000fd5b805161058781613aba565b600060608284031215613ebc57600080fd5b6040516060810181811067ffffffffffffffff82111715613edf57613edf613d15565b806040525080915082518152602083015160208201526040830151613f0381613e06565b6040919091015292915050565b600082601f830112613f2157600080fd5b6040516040810181811067ffffffffffffffff82111715613f4457613f44613d15565b6040528060c0840185811115613f5957600080fd5b845b81811015613f7d57613f6d8782613eaa565b8352602090920191606001613f5b565b509195945050505050565b600082601f830112613f9957600080fd5b60405160a0810181811067ffffffffffffffff82111715613fbc57613fbc613d15565b6040528060a0840185811115613fd157600080fd5b845b81811015613f7d578051835260209283019201613fd3565b600082601f830112613ffc57600080fd5b60405160c0810181811067ffffffffffffffff8211171561401f5761401f613d15565b6040528060c0840185811115613fd157600080fd5b6000610420828403121561404757600080fd5b61404f613d2b565b61405883613e9f565b81526020830151602082015261407060408401613e9f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206140c1818501613e9f565b908201526101406140d485858301613f10565b908201526140e6846102008501613f88565b6101608201526140fa846102a08501613feb565b61018082015261410e846103608501613feb565b6101a08201529392505050565b6000610400828403121561412e57600080fd5b614136613d55565b61413f83613e9f565b81526020830151602082015261415760408401613e9f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010061419c818501613e9f565b908201526101206141af85858301613f88565b908201526101c06141c285858301613feb565b6101408301526141d6856102808601613feb565b6101608301526103408401516101808301526103608401516101a0830152610380840151908201526103a08301516101e08201526142176103c08401613e9f565b6102008201526103e0929092015161022083015250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561425957614259614231565b500390565b6000610580828403121561427157600080fd5b614279613d79565b61428283613e9f565b81526020830151602082015261429a60408401613e9f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006142df818501613e9f565b908201526101206142f285858301613f88565b908201526101c061430585858301613feb565b61014083015261028061431a86828701613feb565b6101608401526103408501516101808401526103608501516101a0840152610380850151828401526103a08501516101e084015261435b6103c08601613e9f565b61020084015261436f866103e08701613f10565b6102208401526104a085015161024084015261438f866104c08701613eaa565b61026084015261052085015190830152506105408301516102a0820152610560909201516102c083015250919050565b600081830360c08112156143d257600080fd5b6143da613d9d565b8335815260a0601f19830112156143f057600080fd5b6143f8613dc0565b9150614402613de3565b60208501356004811061441457600080fd5b8152604085013561442481613e06565b6020820152606085013561443781613e06565b6040820152608085013561444a81613e06565b606082015260a085013561445d81613e06565b6080820152825260208101919091529392505050565b6000821982111561448657614486614231565b500190565b81518152602082015151805160c083019190600481106144ad576144ad613aef565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561451b5761451b614231565b500290565b60008261453d57634e487b7160e01b600052601260045260246000fd5b500490565b600060001982141561455657614556614231565b5060010190565b8060005b60028110156121c85761458b84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101614561565b81516001600160a01b0316815261058081016020830151602083015260408301516145d760408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614625828501826001600160a01b03169052565b50506101208084015161463a82850182613b4e565b50506101408301516101c061465181850183613b71565b610160850151915061028061466881860184613b71565b6101808601516103408601526101a0860151610360860152818601516103808601526101e08601516103a08601526102008601516001600160a01b03166103c086015261022086015192506146c16103e086018461455d565b6102408601516104a086015261026086015180516104c087015260208101516104e087015260400151151561050086015285015161052085015250506102a08301516105408301526102c0909201516105609091015290565b81516001600160a01b03168152610400810160208301516020830152604083015161475060408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015161479e828501826001600160a01b03169052565b5050610120808401516147b382850182613b4e565b50506101408301516101c06147ca81850183613b71565b61016085015191506147e0610280850183613b71565b6101808501516103408501526101a0850151610360850152840151610380840152506101e08301516103a08301526102008301516001600160a01b03166103c0830152610220909201516103e09091015290565b60008251614846818460208701613caf565b9190910192915050565b60006020828403121561486257600080fd5b81516104af81613e0656fea2646970667358221220eb78e191bfacdba9bf1c2549ea1650bfeeecebaa89e839004ae3967dca28b66d64736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220c3a84e820eee826af752862770b15f885531e70414f6c4bdae4f0da43a40494a64736f6c634300080c0033`,
  BytecodeLen: 26310,
  Which: `oD`,
  version: 6,
  views: {
    Fomo: {
      info: `Fomo_info`,
      nextPrice: `Fomo_nextPrice`,
      participantInfo: `Fomo_participantInfo`,
      prevPrice: `Fomo_prevPrice`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:259:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:404:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:412:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:410:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:277:23:after expr stmt semicolon',
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

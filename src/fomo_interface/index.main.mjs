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
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1193, v1206, v1234, v1235, v1236, v1238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async () => {
                
                const v2217 = {
                  currentPrice: v1259,
                  currentTotal: v1261,
                  currentWinner: v1262,
                  deadline: v1187,
                  deltaDeadline: v1188,
                  discountPercents: v1236,
                  discountPrices: v1235,
                  endTimestamp: v1256,
                  initialPrice: v1185,
                  nftPrize: v1186,
                  paidToFunder: v1258,
                  priceStep: v1189,
                  ticketFeeDenominator: v1190,
                  timeReductionPrices: v1235,
                  timeReductionSecs: v1238,
                  token: v1206,
                  tokenOwnedByUsers: v2212,
                  tokensGivenPerTicket: v1191
                  };
                
                return v2217;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async () => {
                
                const v2217 = {
                  currentPrice: v1259,
                  currentTotal: v1261,
                  currentWinner: v1262,
                  deadline: v1187,
                  deltaDeadline: v1188,
                  discountPercents: v1236,
                  discountPrices: v1235,
                  endTimestamp: v1256,
                  initialPrice: v1185,
                  nftPrize: v1186,
                  paidToFunder: v1258,
                  priceStep: v1189,
                  ticketFeeDenominator: v1190,
                  timeReductionPrices: v1235,
                  timeReductionSecs: v1238,
                  token: v1206,
                  tokenOwnedByUsers: v2212,
                  tokensGivenPerTicket: v1191
                  };
                
                return v2217;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = svs;
              return (await ((async () => {
                
                const v1305 = {
                  currentPrice: v1259,
                  currentTotal: v1261,
                  currentWinner: v1262,
                  deadline: v1187,
                  deltaDeadline: v1188,
                  discountPercents: v1236,
                  discountPrices: v1235,
                  endTimestamp: v1256,
                  initialPrice: v1185,
                  nftPrize: v1186,
                  paidToFunder: v1258,
                  priceStep: v1189,
                  ticketFeeDenominator: v1190,
                  timeReductionPrices: v1235,
                  timeReductionSecs: v1238,
                  token: v1206,
                  tokenOwnedByUsers: v1300,
                  tokensGivenPerTicket: v1191
                  };
                
                return v1305;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1193, v1206, v1234, v1235, v1236, v1238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2226 ) => {
                  const v2226 = stdlib.protect(ctc1, _v2226, null);
                
                const v2227 = stdlib.add(v2226, v1189);
                
                return v2227;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2226 ) => {
                  const v2226 = stdlib.protect(ctc1, _v2226, null);
                
                const v2227 = stdlib.add(v2226, v1189);
                
                return v2227;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = svs;
              return (await ((async (_v1314 ) => {
                  const v1314 = stdlib.protect(ctc1, _v1314, null);
                
                const v1315 = stdlib.add(v1314, v1189);
                
                return v1315;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        participantInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1193, v1206, v1234, v1235, v1236, v1238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2218 ) => {
                  const v2218 = stdlib.protect(ctc0, _v2218, null);
                
                const v2219 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2218), null);
                const v2220 = stdlib.fromSome(v2219, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
                const v2221 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2218), null);
                const v2222 = stdlib.fromSome(v2221, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
                const v2223 = {
                  addr: v2218,
                  discountLevel: v2220,
                  timeReductionLevel: v2222
                  };
                
                return v2223;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2218 ) => {
                  const v2218 = stdlib.protect(ctc0, _v2218, null);
                
                const v2219 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2218), null);
                const v2220 = stdlib.fromSome(v2219, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
                const v2221 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2218), null);
                const v2222 = stdlib.fromSome(v2221, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
                const v2223 = {
                  addr: v2218,
                  discountLevel: v2220,
                  timeReductionLevel: v2222
                  };
                
                return v2223;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = svs;
              return (await ((async (_v1306 ) => {
                  const v1306 = stdlib.protect(ctc0, _v1306, null);
                
                const v1307 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1306), null);
                const v1308 = stdlib.fromSome(v1307, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
                const v1309 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1306), null);
                const v1310 = stdlib.fromSome(v1309, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
                const v1311 = {
                  addr: v1306,
                  discountLevel: v1308,
                  timeReductionLevel: v1310
                  };
                
                return v1311;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc9
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1193, v1206, v1234, v1235, v1236, v1238] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2228 ) => {
                  const v2228 = stdlib.protect(ctc1, _v2228, null);
                
                const v2229 = stdlib.sub(v2228, v1189);
                
                return v2229;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212] = svs;
              return (await ((async (_v2228 ) => {
                  const v2228 = stdlib.protect(ctc1, _v2228, null);
                
                const v2229 = stdlib.sub(v2228, v1189);
                
                return v2229;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = svs;
              return (await ((async (_v1316 ) => {
                  const v1316 = stdlib.protect(ctc1, _v1316, null);
                
                const v1317 = stdlib.sub(v1316, v1189);
                
                return v1317;}))(...args));
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
      7: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1]
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
  
  
  const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1334 = ctc.selfAddress();
  const v1336 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyDiscount0_282" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1337 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1334), null);
  const v1338 = stdlib.fromSome(v1337, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
  const v1339 = stdlib.lt(v1338, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1339, {
    at: './index.rsh:358:23:application',
    fs: ['at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyDiscount0_282" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1342 = ['Api_buyDiscount0_282', v1336];
  
  let v1363;
  const v1367 = stdlib.ge(v1338, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1367) {
    v1363 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1370 = v1235[v1338];
    v1363 = v1370;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300, v1342],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:359:18:decimal', stdlib.UInt_max, 0), [[v1363, v1206]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
      
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1436;
          const v1437 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1427), null);
          const v1438 = stdlib.fromSome(v1437, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1439 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1440 = stdlib.ge(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1440) {
            v1436 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1443 = v1235[v1438];
            v1436 = v1443;
            }
          ;
          const v1499 = stdlib.add(v1299, v1436);
          const v1503 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1504 = [v1499, v1297, v1503];
          const v1505 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1504);
          sim_r.txns.push({
            amt: v1436,
            kind: 'to',
            tok: v1206
            });
          const v1510 = stdlib.add(v1438, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1427, v1510);
          null;
          const v1514 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1427), null);
          const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1516 = {
            addr: v1427,
            discountLevel: v1510,
            timeReductionLevel: v1515
            };
          const v1518 = await txn1.getOutput('Api_buyDiscount', 'v1516', ctc12, v1516);
          
          const v3722 = v1256;
          const v3724 = v1258;
          const v3725 = v1259;
          const v3726 = v1260;
          const v3727 = v1261;
          const v3728 = v1262;
          const v3730 = v1505;
          const v3731 = v1270;
          const v3732 = v1505[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v3733 = v3732[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v3734 = v3732[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
          const v3735 = stdlib.sub(v3733, v3734);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
  switch (v1428[0]) {
    case 'Api_buyDiscount0_282': {
      const v1431 = v1428[1];
      undefined /* setApiDetails */;
      let v1436;
      const v1437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
      const v1438 = stdlib.fromSome(v1437, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
      const v1439 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1439, {
        at: './index.rsh:200:12:application',
        fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1440 = stdlib.ge(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1440) {
        v1436 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1443 = v1235[v1438];
        v1436 = v1443;
        }
      ;
      const v1499 = stdlib.add(v1299, v1436);
      const v1503 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
      const v1504 = [v1499, v1297, v1503];
      const v1505 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1504);
      ;
      const v1510 = stdlib.add(v1438, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1427, v1510);
      null;
      const v1514 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
      const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
      const v1516 = {
        addr: v1427,
        discountLevel: v1510,
        timeReductionLevel: v1515
        };
      const v1518 = await txn1.getOutput('Api_buyDiscount', 'v1516', ctc12, v1516);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1431, v1518), {
          at: './index.rsh:357:11:application',
          fs: ['at ./index.rsh:357:11:application call to [unknown function] (defined at: ./index.rsh:357:11:function exp)', 'at ./index.rsh:372:21:application call to "callback" (defined at: ./index.rsh:360:22:function exp)', 'at ./index.rsh:360:22:application call to [unknown function] (defined at: ./index.rsh:360:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3722 = v1256;
      const v3724 = v1258;
      const v3725 = v1259;
      const v3726 = v1260;
      const v3727 = v1261;
      const v3728 = v1262;
      const v3730 = v1505;
      const v3731 = v1270;
      const v3732 = v1505[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v3733 = v3732[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v3734 = v3732[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
      const v3735 = stdlib.sub(v3733, v3734);
      return;
      
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1624 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1428[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2010 = v1428[1];
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
  
  
  const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1322 = ctc.selfAddress();
  const v1324 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1326 = stdlib.gt(v1190, stdlib.checkedBigNumberify('./index.rsh:326:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1326, {
    at: './index.rsh:326:19:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1329 = stdlib.gt(v1299, v1191);
  stdlib.assert(v1329, {
    at: './index.rsh:327:19:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_282" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1332 = ['Api_buyTicket0_282', v1324];
  
  let v1381;
  const v1382 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1322), null);
  const v1383 = stdlib.fromSome(v1382, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
  const v1384 = stdlib.ge(v1383, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1384) {
    v1381 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1387 = v1236[v1383];
    v1381 = v1387;
    }
  const v1388 = stdlib.lt(v1381, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1388, {
    at: './index.rsh:220:12:application',
    fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1389 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1381);
  const v1390 = stdlib.mul(v1259, v1389);
  const v1391 = stdlib.div(v1390, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300, v1332],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1391, [[stdlib.checkedBigNumberify('./index.rsh:329:54:decimal', stdlib.UInt_max, 0), v1206]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
      
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1644;
          const v1645 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1427), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1236[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.lt(v1644, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1652 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1644);
          const v1653 = stdlib.mul(v1259, v1652);
          const v1654 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1689 = stdlib.add(v1270, v1654);
          sim_r.txns.push({
            amt: v1654,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1696 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1697 = [v1299, v1297, v1696];
          const v1698 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1697);
          ;
          const v1718 = stdlib.gt(v1190, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1719 = v1698[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 1)];
          const v1720 = v1719[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 0)];
          const v1721 = stdlib.gt(v1720, v1191);
          ;
          let v1722;
          if (v1647) {
            v1722 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1728 = v1236[v1646];
            v1722 = v1728;
            }
          const v1729 = stdlib.lt(v1722, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1730 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1722);
          const v1731 = stdlib.mul(v1259, v1730);
          const v1732 = stdlib.div(v1731, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1733 = stdlib.div(v1732, v1190);
          const v1734 = stdlib.add(v1259, v1189);
          null;
          const v1738 = stdlib.sub(v1689, v1733);
          sim_r.txns.push({
            amt: v1733,
            kind: 'from',
            to: v1184,
            tok: undefined /* Nothing */
            });
          const v1744 = stdlib.sub(v1720, v1191);
          const v1747 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1)];
          const v1748 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 2)];
          const v1749 = [v1744, v1747, v1748];
          const v1750 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1), v1749);
          sim_r.txns.push({
            amt: v1191,
            kind: 'from',
            to: v1427,
            tok: v1206
            });
          let v1751;
          const v1752 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1427), null);
          const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1754 = stdlib.ge(v1753, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1754) {
            v1751 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1757 = v1238[v1753];
            v1751 = v1757;
            }
          const v1758 = stdlib.sub(v1188, v1751);
          const v1763 = {
            addr: v1427,
            discountLevel: v1646,
            timeReductionLevel: v1753
            };
          const v1765 = await txn1.getOutput('Api_buyTicket', 'v1763', ctc12, v1763);
          
          const v1770 = stdlib.add(v1260, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, 1));
          let v1771;
          if (v1647) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1236[v1646];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1259, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1261, v1781);
          const v1783 = stdlib.add(v1258, v1733);
          const v1784 = stdlib.add(v1256, v1758);
          const v3862 = v1784;
          const v3864 = v1783;
          const v3865 = v1734;
          const v3866 = v1770;
          const v3867 = v1782;
          const v3868 = v1427;
          const v3870 = v1750;
          const v3871 = v1738;
          const v3872 = v1750[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v3874 = v3872[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
          const v3875 = stdlib.sub(v3873, v3874);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
  switch (v1428[0]) {
    case 'Api_buyDiscount0_282': {
      const v1431 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1624 = v1428[1];
      undefined /* setApiDetails */;
      let v1644;
      const v1645 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
      const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
      const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1647) {
        v1644 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1650 = v1236[v1646];
        v1644 = v1650;
        }
      const v1651 = stdlib.lt(v1644, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1651, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1652 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1644);
      const v1653 = stdlib.mul(v1259, v1652);
      const v1654 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
      const v1689 = stdlib.add(v1270, v1654);
      ;
      const v1696 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
      const v1697 = [v1299, v1297, v1696];
      const v1698 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1697);
      ;
      const v1718 = stdlib.gt(v1190, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1718, {
        at: './index.rsh:331:20:application',
        fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1719 = v1698[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 1)];
      const v1720 = v1719[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 0)];
      const v1721 = stdlib.gt(v1720, v1191);
      stdlib.assert(v1721, {
        at: './index.rsh:332:20:application',
        fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1722;
      if (v1647) {
        v1722 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1728 = v1236[v1646];
        v1722 = v1728;
        }
      const v1729 = stdlib.lt(v1722, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1729, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1730 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1722);
      const v1731 = stdlib.mul(v1259, v1730);
      const v1732 = stdlib.div(v1731, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
      const v1733 = stdlib.div(v1732, v1190);
      const v1734 = stdlib.add(v1259, v1189);
      null;
      const v1738 = stdlib.sub(v1689, v1733);
      ;
      const v1744 = stdlib.sub(v1720, v1191);
      const v1747 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1)];
      const v1748 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 2)];
      const v1749 = [v1744, v1747, v1748];
      const v1750 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1), v1749);
      ;
      let v1751;
      const v1752 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
      const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
      const v1754 = stdlib.ge(v1753, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1754) {
        v1751 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1757 = v1238[v1753];
        v1751 = v1757;
        }
      const v1758 = stdlib.sub(v1188, v1751);
      const v1763 = {
        addr: v1427,
        discountLevel: v1646,
        timeReductionLevel: v1753
        };
      const v1765 = await txn1.getOutput('Api_buyTicket', 'v1763', ctc12, v1763);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1624, v1765), {
          at: './index.rsh:324:11:application',
          fs: ['at ./index.rsh:324:11:application call to [unknown function] (defined at: ./index.rsh:324:11:function exp)', 'at ./index.rsh:345:21:application call to "callback" (defined at: ./index.rsh:330:22:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1770 = stdlib.add(v1260, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, 1));
      let v1771;
      if (v1647) {
        v1771 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1777 = v1236[v1646];
        v1771 = v1777;
        }
      const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1778, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1771);
      const v1780 = stdlib.mul(v1259, v1779);
      const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
      const v1782 = stdlib.add(v1261, v1781);
      const v1783 = stdlib.add(v1258, v1733);
      const v1784 = stdlib.add(v1256, v1758);
      const v3862 = v1784;
      const v3864 = v1783;
      const v3865 = v1734;
      const v3866 = v1770;
      const v3867 = v1782;
      const v3868 = v1427;
      const v3870 = v1750;
      const v3871 = v1738;
      const v3872 = v1750[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v3873 = v3872[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v3874 = v3872[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
      const v3875 = stdlib.sub(v3873, v3874);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1428[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2010 = v1428[1];
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
  
  
  const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1344 = ctc.selfAddress();
  const v1346 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTimeReduction0_282" (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1347 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1344), null);
  const v1348 = stdlib.fromSome(v1347, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
  const v1349 = stdlib.lt(v1348, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1349, {
    at: './index.rsh:378:23:application',
    fs: ['at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTimeReduction0_282" (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1352 = ['Api_buyTimeReduction0_282', v1346];
  
  let v1402;
  const v1406 = stdlib.ge(v1348, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1406) {
    v1402 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1409 = v1235[v1348];
    v1402 = v1409;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300, v1352],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:18:decimal', stdlib.UInt_max, 0), [[v1402, v1206]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
      
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1427), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1235[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1299, v1855);
          const v1889 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1297, v1889];
          const v1891 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1890);
          sim_r.txns.push({
            amt: v1855,
            kind: 'to',
            tok: v1206
            });
          const v1983 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1427, v1983);
          null;
          const v1985 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1427), null);
          const v1986 = stdlib.fromSome(v1985, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1989 = {
            addr: v1427,
            discountLevel: v1986,
            timeReductionLevel: v1983
            };
          const v1991 = await txn1.getOutput('Api_buyTimeReduction', 'v1989', ctc12, v1989);
          
          const v4002 = v1256;
          const v4004 = v1258;
          const v4005 = v1259;
          const v4006 = v1260;
          const v4007 = v1261;
          const v4008 = v1262;
          const v4010 = v1891;
          const v4011 = v1270;
          const v4012 = v1891[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v4013 = v4012[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v4014 = v4012[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
          const v4015 = stdlib.sub(v4013, v4014);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
  switch (v1428[0]) {
    case 'Api_buyDiscount0_282': {
      const v1431 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1624 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1428[1];
      undefined /* setApiDetails */;
      let v1855;
      const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
      const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
      const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1858, {
        at: './index.rsh:241:12:application',
        fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1859) {
        v1855 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1862 = v1235[v1857];
        v1855 = v1862;
        }
      ;
      const v1885 = stdlib.add(v1299, v1855);
      const v1889 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
      const v1890 = [v1885, v1297, v1889];
      const v1891 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1890);
      ;
      const v1983 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1427, v1983);
      null;
      const v1985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
      const v1986 = stdlib.fromSome(v1985, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
      const v1989 = {
        addr: v1427,
        discountLevel: v1986,
        timeReductionLevel: v1983
        };
      const v1991 = await txn1.getOutput('Api_buyTimeReduction', 'v1989', ctc12, v1989);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v1817, v1991), {
          at: './index.rsh:377:11:application',
          fs: ['at ./index.rsh:377:11:application call to [unknown function] (defined at: ./index.rsh:377:11:function exp)', 'at ./index.rsh:392:21:application call to "callback" (defined at: ./index.rsh:380:22:function exp)', 'at ./index.rsh:380:22:application call to [unknown function] (defined at: ./index.rsh:380:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v4002 = v1256;
      const v4004 = v1258;
      const v4005 = v1259;
      const v4006 = v1260;
      const v4007 = v1261;
      const v4008 = v1262;
      const v4010 = v1891;
      const v4011 = v1270;
      const v4012 = v1891[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v4013 = v4012[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v4014 = v4012[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
      const v4015 = stdlib.sub(v4013, v4014);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2010 = v1428[1];
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
  
  
  const [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1356 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:286:23:application call to "runApi_getParticipantStats0_282" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1360 = ['Api_getParticipantStats0_282', v1356];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300, v1360],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:396:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:322:18:decimal', stdlib.UInt_max, 0), v1206]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
      
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2082 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v2083 = [v1299, v1297, v2082];
          const v2084 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v2083);
          ;
          const v2191 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1427), null);
          const v2192 = stdlib.fromSome(v2191, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v2193 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1427), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v2195 = {
            addr: v1427,
            discountLevel: v2192,
            timeReductionLevel: v2194
            };
          const v2197 = await txn1.getOutput('Api_getParticipantStats', 'v2195', ctc12, v2195);
          
          const v4142 = v1256;
          const v4144 = v1258;
          const v4145 = v1259;
          const v4146 = v1260;
          const v4147 = v1261;
          const v4148 = v1262;
          const v4150 = v2084;
          const v4151 = v1270;
          const v4152 = v2084[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v4153 = v4152[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
          const v4154 = v4152[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
          const v4155 = stdlib.sub(v4153, v4154);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn1;
  switch (v1428[0]) {
    case 'Api_buyDiscount0_282': {
      const v1431 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTicket0_282': {
      const v1624 = v1428[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_282': {
      const v1817 = v1428[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_282': {
      const v2010 = v1428[1];
      undefined /* setApiDetails */;
      ;
      const v2082 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
      const v2083 = [v1299, v1297, v2082];
      const v2084 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v2083);
      ;
      const v2191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
      const v2192 = stdlib.fromSome(v2191, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
      const v2193 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
      const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
      const v2195 = {
        addr: v1427,
        discountLevel: v2192,
        timeReductionLevel: v2194
        };
      const v2197 = await txn1.getOutput('Api_getParticipantStats', 'v2195', ctc12, v2195);
      if (v807) {
        stdlib.protect(ctc0, await interact.out(v2010, v2197), {
          at: './index.rsh:397:11:application',
          fs: ['at ./index.rsh:397:11:application call to [unknown function] (defined at: ./index.rsh:397:11:function exp)', 'at ./index.rsh:400:21:application call to "callback" (defined at: ./index.rsh:398:22:function exp)', 'at ./index.rsh:398:22:application call to [unknown function] (defined at: ./index.rsh:398:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4142 = v1256;
      const v4144 = v1258;
      const v4145 = v1259;
      const v4146 = v1260;
      const v4147 = v1261;
      const v4148 = v1262;
      const v4150 = v2084;
      const v4151 = v1270;
      const v4152 = v2084[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v4153 = v4152[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
      const v4154 = v4152[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
      const v4155 = stdlib.sub(v4153, v4154);
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
  
  
  const v1163 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1164 = [v1163, v1163];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1185, v1186, v1187, v1188, v1189, v1190, v1191], secs: v1193, time: v1192, didSend: v53, from: v1184 } = txn1;
  const v1194 = v1164[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0)];
  const v1196 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 1)];
  const v1197 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 2)];
  const v1198 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1196, v1197];
  const v1199 = stdlib.Array_set(v1164, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0), v1198);
  ;
  ;
  const v1201 = 'Metafomo                        ';
  const v1202 = 'METAFOMO';
  const v1203 = 'https://metalabs.technology                                                                     ';
  const v1204 = '                                ';
  const v1205 = undefined /* TokenNew */;
  const v1206 = await txn1.getOutput('internal', 'v1205', ctc3, v1205);
  const v1207 = [v1186];
  const v2277 = v1207[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2281 = stdlib.tokenEq(v1206, v2277);
  const v1215 = v2281 ? false : true;
  stdlib.assert(v1215, {
    at: './index.rsh:177:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1216 = v1199[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1218 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1219 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
  const v1220 = [stdlib.UInt_max, v1218, v1219];
  const v1221 = stdlib.Array_set(v1199, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1220);
  const v1223 = v1221[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
  const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
  const v1227 = [v1224, stdlib.UInt_max, v1226];
  const v1228 = stdlib.Array_set(v1221, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1227);
  const v1229 = v1228[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1230 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
  const v1231 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1233 = [v1230, v1231, false];
  const v1234 = stdlib.Array_set(v1228, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1233);
  const v1235 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1238 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1241, time: v1240, didSend: v166, from: v1239 } = txn2;
  ;
  const v1242 = v1234[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
  const v1243 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
  const v1244 = stdlib.add(v1243, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 1));
  const v1247 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 1)];
  const v1248 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 2)];
  const v1249 = [v1244, v1247, v1248];
  const v1250 = stdlib.Array_set(v1234, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0), v1249);
  ;
  const v1251 = stdlib.addressEq(v1184, v1239);
  stdlib.assert(v1251, {
    at: './index.rsh:270:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1255 = stdlib.add(v1193, v1187);
  let v1256 = v1255;
  let v1257 = true;
  let v1258 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, 0);
  let v1259 = v1185;
  let v1260 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, 0);
  let v1261 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, 0);
  let v1262 = v1184;
  let v1263 = v1240;
  let v1269 = v1250;
  let v1270 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1257;})()) {
    const v1296 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
    const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
    const v1299 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
    const v1300 = stdlib.sub(v1297, v1299);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1256],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1263,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:406:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2205, time: v2204, didSend: v959, from: v2203 } = txn4;
          
          ;
          const cv1256 = v1256;
          const cv1257 = false;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v2204;
          const cv1269 = v1269;
          const cv1270 = v1270;
          
          await (async () => {
            const v1256 = cv1256;
            const v1257 = cv1257;
            const v1258 = cv1258;
            const v1259 = cv1259;
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1262 = cv1262;
            const v1263 = cv1263;
            const v1269 = cv1269;
            const v1270 = cv1270;
            
            if (await (async () => {
              
              return v1257;})()) {
              const v1296 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v1299 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
              const v1300 = stdlib.sub(v1297, v1299);
              sim_r.isHalt = false;
              }
            else {
              const v2208 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
              const v2212 = stdlib.sub(v2209, v2211);
              sim_r.txns.push({
                amt: v1270,
                kind: 'from',
                to: v1262,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1262,
                tok: v1186
                });
              null;
              
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2205, time: v2204, didSend: v959, from: v2203 } = txn4;
      ;
      const cv1256 = v1256;
      const cv1257 = false;
      const cv1258 = v1258;
      const cv1259 = v1259;
      const cv1260 = v1260;
      const cv1261 = v1261;
      const cv1262 = v1262;
      const cv1263 = v2204;
      const cv1269 = v1269;
      const cv1270 = v1270;
      
      v1256 = cv1256;
      v1257 = cv1257;
      v1258 = cv1258;
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1262 = cv1262;
      v1263 = cv1263;
      v1269 = cv1269;
      v1270 = cv1270;
      
      continue;
      }
    else {
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn3;
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          undefined /* setApiDetails */;
          let v1436;
          const v1437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1438 = stdlib.fromSome(v1437, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1439 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1439, {
            at: './index.rsh:200:12:application',
            fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1440 = stdlib.ge(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1440) {
            v1436 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1443 = v1235[v1438];
            v1436 = v1443;
            }
          ;
          const v1499 = stdlib.add(v1299, v1436);
          const v1503 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1504 = [v1499, v1297, v1503];
          const v1505 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1504);
          ;
          const v1510 = stdlib.add(v1438, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1427, v1510);
          null;
          const v1514 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1516 = {
            addr: v1427,
            discountLevel: v1510,
            timeReductionLevel: v1515
            };
          await txn3.getOutput('Api_buyDiscount', 'v1516', ctc7, v1516);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v1505;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          undefined /* setApiDetails */;
          let v1644;
          const v1645 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1236[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.lt(v1644, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1651, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1652 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1644);
          const v1653 = stdlib.mul(v1259, v1652);
          const v1654 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1689 = stdlib.add(v1270, v1654);
          ;
          const v1696 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1697 = [v1299, v1297, v1696];
          const v1698 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1697);
          ;
          const v1718 = stdlib.gt(v1190, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1718, {
            at: './index.rsh:331:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1719 = v1698[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 1)];
          const v1720 = v1719[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 0)];
          const v1721 = stdlib.gt(v1720, v1191);
          stdlib.assert(v1721, {
            at: './index.rsh:332:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1722;
          if (v1647) {
            v1722 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1728 = v1236[v1646];
            v1722 = v1728;
            }
          const v1729 = stdlib.lt(v1722, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1729, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1730 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1722);
          const v1731 = stdlib.mul(v1259, v1730);
          const v1732 = stdlib.div(v1731, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1733 = stdlib.div(v1732, v1190);
          const v1734 = stdlib.add(v1259, v1189);
          null;
          const v1738 = stdlib.sub(v1689, v1733);
          ;
          const v1744 = stdlib.sub(v1720, v1191);
          const v1747 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1)];
          const v1748 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 2)];
          const v1749 = [v1744, v1747, v1748];
          const v1750 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1), v1749);
          ;
          let v1751;
          const v1752 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1754 = stdlib.ge(v1753, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1754) {
            v1751 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1757 = v1238[v1753];
            v1751 = v1757;
            }
          const v1758 = stdlib.sub(v1188, v1751);
          const v1763 = {
            addr: v1427,
            discountLevel: v1646,
            timeReductionLevel: v1753
            };
          await txn3.getOutput('Api_buyTicket', 'v1763', ctc7, v1763);
          const v1770 = stdlib.add(v1260, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, 1));
          let v1771;
          if (v1647) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1236[v1646];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1778, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1259, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1261, v1781);
          const v1783 = stdlib.add(v1258, v1733);
          const v1784 = stdlib.add(v1256, v1758);
          const cv1256 = v1784;
          const cv1257 = true;
          const cv1258 = v1783;
          const cv1259 = v1734;
          const cv1260 = v1770;
          const cv1261 = v1782;
          const cv1262 = v1427;
          const cv1263 = v1429;
          const cv1269 = v1750;
          const cv1270 = v1738;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          undefined /* setApiDetails */;
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1858, {
            at: './index.rsh:241:12:application',
            fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1235[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1299, v1855);
          const v1889 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1297, v1889];
          const v1891 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1890);
          ;
          const v1983 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1427, v1983);
          null;
          const v1985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1986 = stdlib.fromSome(v1985, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1989 = {
            addr: v1427,
            discountLevel: v1986,
            timeReductionLevel: v1983
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1989', ctc7, v1989);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v1891;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          undefined /* setApiDetails */;
          ;
          const v2082 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v2083 = [v1299, v1297, v2082];
          const v2084 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v2083);
          ;
          const v2191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v2192 = stdlib.fromSome(v2191, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v2193 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v2195 = {
            addr: v1427,
            discountLevel: v2192,
            timeReductionLevel: v2194
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2195', ctc7, v2195);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v2084;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        }}
    
    }
  const v2208 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
  const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
  const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
  const v2212 = stdlib.sub(v2209, v2211);
  ;
  ;
  null;
  stdlib.protect(ctc0, await interact.showOutcome(v1262, v1260, v1261, v1259, v1258), {
    at: './index.rsh:414:27:application',
    fs: ['at ./index.rsh:413:15:application call to [unknown function] (defined at: ./index.rsh:413:19:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1263,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:425:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2251, time: v2250, didSend: v1004, from: v2249 } = txn3;
      
      ;
      const v2252 = v2250;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1186
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
  const {data: [], secs: v2251, time: v2250, didSend: v1004, from: v2249 } = txn3;
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
    const {data: [], secs: v2264, time: v2263, didSend: v1013, from: v2262 } = txn4;
    ;
    const v2265 = stdlib.addressEq(v1184, v2262);
    stdlib.assert(v2265, {
      at: './index.rsh:428:39:dot',
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
  
  
  const v1163 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1164 = [v1163, v1163];
  const v1175 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:165:38:application',
    fs: ['at ./index.rsh:163:16:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1176 = v1175.ticketPrice;
  const v1177 = v1175.nftPrize;
  const v1178 = v1175.deadline;
  const v1179 = v1175.deltaDeadline;
  const v1180 = v1175.unitPrice;
  const v1181 = v1175.ticketFeeDenominator;
  const v1182 = v1175.tokensGivenPerTicket;
  const v1183 = stdlib.gt(v1181, stdlib.checkedBigNumberify('./index.rsh:166:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1183, {
    at: './index.rsh:166:12:application',
    fs: ['at ./index.rsh:163:16:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1176, v1177, v1178, v1179, v1180, v1181, v1182],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1185, v1186, v1187, v1188, v1189, v1190, v1191], secs: v1193, time: v1192, didSend: v53, from: v1184 } = txn1;
      
      const v1194 = v1164[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0)];
      const v1196 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 1)];
      const v1197 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 2)];
      const v1198 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1196, v1197];
      const v1199 = stdlib.Array_set(v1164, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0), v1198);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1186
        });
      ;
      const v1201 = 'Metafomo                        ';
      const v1202 = 'METAFOMO';
      const v1203 = 'https://metalabs.technology                                                                     ';
      const v1204 = '                                ';
      const v1205 = stdlib.simTokenNew(sim_r, v1201, v1202, v1203, v1204, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1206 = await txn1.getOutput('internal', 'v1205', ctc3, v1205);
      const v1207 = [v1186];
      const v2277 = v1207[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2281 = stdlib.tokenEq(v1206, v2277);
      const v1215 = v2281 ? false : true;
      ;
      const v1216 = v1199[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
      const v1218 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
      const v1219 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
      const v1220 = [stdlib.UInt_max, v1218, v1219];
      const v1221 = stdlib.Array_set(v1199, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1220);
      const v1223 = v1221[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
      const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
      const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
      const v1227 = [v1224, stdlib.UInt_max, v1226];
      const v1228 = stdlib.Array_set(v1221, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1227);
      const v1229 = v1228[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
      const v1230 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
      const v1231 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
      const v1233 = [v1230, v1231, false];
      const v1234 = stdlib.Array_set(v1228, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1233);
      const v1235 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
      const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
      const v1238 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1185, v1186, v1187, v1188, v1189, v1190, v1191], secs: v1193, time: v1192, didSend: v53, from: v1184 } = txn1;
  const v1194 = v1164[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0)];
  const v1196 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 1)];
  const v1197 = v1194[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 2)];
  const v1198 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1196, v1197];
  const v1199 = stdlib.Array_set(v1164, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, 0), v1198);
  ;
  ;
  const v1201 = 'Metafomo                        ';
  const v1202 = 'METAFOMO';
  const v1203 = 'https://metalabs.technology                                                                     ';
  const v1204 = '                                ';
  const v1205 = undefined /* TokenNew */;
  const v1206 = await txn1.getOutput('internal', 'v1205', ctc3, v1205);
  const v1207 = [v1186];
  const v2277 = v1207[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2281 = stdlib.tokenEq(v1206, v2277);
  const v1215 = v2281 ? false : true;
  stdlib.assert(v1215, {
    at: './index.rsh:177:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1216 = v1199[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1218 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1219 = v1216[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
  const v1220 = [stdlib.UInt_max, v1218, v1219];
  const v1221 = stdlib.Array_set(v1199, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1220);
  const v1223 = v1221[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1224 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
  const v1226 = v1223[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 2)];
  const v1227 = [v1224, stdlib.UInt_max, v1226];
  const v1228 = stdlib.Array_set(v1221, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1227);
  const v1229 = v1228[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1230 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 0)];
  const v1231 = v1229[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1)];
  const v1233 = [v1230, v1231, false];
  const v1234 = stdlib.Array_set(v1228, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, 1), v1233);
  const v1235 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1236 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1238 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1193, v1206, v1234, v1235, v1236, v1238],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1192,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 1), v1186]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1241, time: v1240, didSend: v166, from: v1239 } = txn2;
      
      ;
      const v1242 = v1234[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
      const v1243 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
      const v1244 = stdlib.add(v1243, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 1));
      const v1247 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 1)];
      const v1248 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 2)];
      const v1249 = [v1244, v1247, v1248];
      const v1250 = stdlib.Array_set(v1234, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0), v1249);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1186
        });
      const v1251 = stdlib.addressEq(v1184, v1239);
      ;
      
      const v1255 = stdlib.add(v1193, v1187);
      const v1256 = v1255;
      const v1257 = true;
      const v1258 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, 0);
      const v1259 = v1185;
      const v1260 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, 0);
      const v1261 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, 0);
      const v1262 = v1184;
      const v1263 = v1240;
      const v1269 = v1250;
      const v1270 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1257;})()) {
        const v1296 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
        const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
        const v1299 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
        const v1300 = stdlib.sub(v1297, v1299);
        sim_r.isHalt = false;
        }
      else {
        const v2208 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
        const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
        const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
        const v2212 = stdlib.sub(v2209, v2211);
        sim_r.txns.push({
          amt: v1270,
          kind: 'from',
          to: v1262,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1262,
          tok: v1186
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
  const {data: [], secs: v1241, time: v1240, didSend: v166, from: v1239 } = txn2;
  ;
  const v1242 = v1234[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
  const v1243 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0)];
  const v1244 = stdlib.add(v1243, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, 1));
  const v1247 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 1)];
  const v1248 = v1242[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 2)];
  const v1249 = [v1244, v1247, v1248];
  const v1250 = stdlib.Array_set(v1234, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, 0), v1249);
  ;
  const v1251 = stdlib.addressEq(v1184, v1239);
  stdlib.assert(v1251, {
    at: './index.rsh:270:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:274:24:application',
    fs: ['at ./index.rsh:273:9:application call to [unknown function] (defined at: ./index.rsh:273:23:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1255 = stdlib.add(v1193, v1187);
  let v1256 = v1255;
  let v1257 = true;
  let v1258 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, 0);
  let v1259 = v1185;
  let v1260 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, 0);
  let v1261 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, 0);
  let v1262 = v1184;
  let v1263 = v1240;
  let v1269 = v1250;
  let v1270 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1257;})()) {
    const v1296 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
    const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
    const v1299 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
    const v1300 = stdlib.sub(v1297, v1299);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1256],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1260, v1261, v1262, v1269, v1270, v1296, v1297, v1299, v1300],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1263,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:406:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2205, time: v2204, didSend: v959, from: v2203 } = txn4;
          
          ;
          const cv1256 = v1256;
          const cv1257 = false;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v2204;
          const cv1269 = v1269;
          const cv1270 = v1270;
          
          await (async () => {
            const v1256 = cv1256;
            const v1257 = cv1257;
            const v1258 = cv1258;
            const v1259 = cv1259;
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1262 = cv1262;
            const v1263 = cv1263;
            const v1269 = cv1269;
            const v1270 = cv1270;
            
            if (await (async () => {
              
              return v1257;})()) {
              const v1296 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v1297 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v1299 = v1296[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
              const v1300 = stdlib.sub(v1297, v1299);
              sim_r.isHalt = false;
              }
            else {
              const v2208 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
              const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
              const v2212 = stdlib.sub(v2209, v2211);
              sim_r.txns.push({
                amt: v1270,
                kind: 'from',
                to: v1262,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1262,
                tok: v1186
                });
              null;
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2205, time: v2204, didSend: v959, from: v2203 } = txn4;
      ;
      const cv1256 = v1256;
      const cv1257 = false;
      const cv1258 = v1258;
      const cv1259 = v1259;
      const cv1260 = v1260;
      const cv1261 = v1261;
      const cv1262 = v1262;
      const cv1263 = v2204;
      const cv1269 = v1269;
      const cv1270 = v1270;
      
      v1256 = cv1256;
      v1257 = cv1257;
      v1258 = cv1258;
      v1259 = cv1259;
      v1260 = cv1260;
      v1261 = cv1261;
      v1262 = cv1262;
      v1263 = cv1263;
      v1269 = cv1269;
      v1270 = cv1270;
      
      continue;
      }
    else {
      const {data: [v1428], secs: v1430, time: v1429, didSend: v807, from: v1427 } = txn3;
      switch (v1428[0]) {
        case 'Api_buyDiscount0_282': {
          const v1431 = v1428[1];
          undefined /* setApiDetails */;
          let v1436;
          const v1437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1438 = stdlib.fromSome(v1437, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1439 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1439, {
            at: './index.rsh:200:12:application',
            fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1440 = stdlib.ge(v1438, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1440) {
            v1436 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1443 = v1235[v1438];
            v1436 = v1443;
            }
          ;
          const v1499 = stdlib.add(v1299, v1436);
          const v1503 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1504 = [v1499, v1297, v1503];
          const v1505 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1504);
          ;
          const v1510 = stdlib.add(v1438, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1427, v1510);
          null;
          const v1514 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1516 = {
            addr: v1427,
            discountLevel: v1510,
            timeReductionLevel: v1515
            };
          await txn3.getOutput('Api_buyDiscount', 'v1516', ctc8, v1516);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v1505;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_282': {
          const v1624 = v1428[1];
          undefined /* setApiDetails */;
          let v1644;
          const v1645 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1646 = stdlib.fromSome(v1645, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1647 = stdlib.ge(v1646, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1647) {
            v1644 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1650 = v1236[v1646];
            v1644 = v1650;
            }
          const v1651 = stdlib.lt(v1644, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1651, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1652 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1644);
          const v1653 = stdlib.mul(v1259, v1652);
          const v1654 = stdlib.div(v1653, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1689 = stdlib.add(v1270, v1654);
          ;
          const v1696 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1697 = [v1299, v1297, v1696];
          const v1698 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1697);
          ;
          const v1718 = stdlib.gt(v1190, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1718, {
            at: './index.rsh:331:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1719 = v1698[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 1)];
          const v1720 = v1719[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, 0)];
          const v1721 = stdlib.gt(v1720, v1191);
          stdlib.assert(v1721, {
            at: './index.rsh:332:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1722;
          if (v1647) {
            v1722 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1728 = v1236[v1646];
            v1722 = v1728;
            }
          const v1729 = stdlib.lt(v1722, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1729, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1730 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1722);
          const v1731 = stdlib.mul(v1259, v1730);
          const v1732 = stdlib.div(v1731, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1733 = stdlib.div(v1732, v1190);
          const v1734 = stdlib.add(v1259, v1189);
          null;
          const v1738 = stdlib.sub(v1689, v1733);
          ;
          const v1744 = stdlib.sub(v1720, v1191);
          const v1747 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1)];
          const v1748 = v1719[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 2)];
          const v1749 = [v1744, v1747, v1748];
          const v1750 = stdlib.Array_set(v1698, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, 1), v1749);
          ;
          let v1751;
          const v1752 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1753 = stdlib.fromSome(v1752, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1754 = stdlib.ge(v1753, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1754) {
            v1751 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1757 = v1238[v1753];
            v1751 = v1757;
            }
          const v1758 = stdlib.sub(v1188, v1751);
          const v1763 = {
            addr: v1427,
            discountLevel: v1646,
            timeReductionLevel: v1753
            };
          await txn3.getOutput('Api_buyTicket', 'v1763', ctc8, v1763);
          const v1770 = stdlib.add(v1260, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, 1));
          let v1771;
          if (v1647) {
            v1771 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1777 = v1236[v1646];
            v1771 = v1777;
            }
          const v1778 = stdlib.lt(v1771, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1778, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1779 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, 100), v1771);
          const v1780 = stdlib.mul(v1259, v1779);
          const v1781 = stdlib.div(v1780, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, 100));
          const v1782 = stdlib.add(v1261, v1781);
          const v1783 = stdlib.add(v1258, v1733);
          const v1784 = stdlib.add(v1256, v1758);
          const cv1256 = v1784;
          const cv1257 = true;
          const cv1258 = v1783;
          const cv1259 = v1734;
          const cv1260 = v1770;
          const cv1261 = v1782;
          const cv1262 = v1427;
          const cv1263 = v1429;
          const cv1269 = v1750;
          const cv1270 = v1738;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_282': {
          const v1817 = v1428[1];
          undefined /* setApiDetails */;
          let v1855;
          const v1856 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v1857 = stdlib.fromSome(v1856, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v1858 = stdlib.lt(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1858, {
            at: './index.rsh:241:12:application',
            fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1859 = stdlib.ge(v1857, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1859) {
            v1855 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1862 = v1235[v1857];
            v1855 = v1862;
            }
          ;
          const v1885 = stdlib.add(v1299, v1855);
          const v1889 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v1890 = [v1885, v1297, v1889];
          const v1891 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v1890);
          ;
          const v1983 = stdlib.add(v1857, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1427, v1983);
          null;
          const v1985 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v1986 = stdlib.fromSome(v1985, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v1989 = {
            addr: v1427,
            discountLevel: v1986,
            timeReductionLevel: v1983
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1989', ctc8, v1989);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v1891;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_282': {
          const v2010 = v1428[1];
          undefined /* setApiDetails */;
          ;
          const v2082 = v1296[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 2)];
          const v2083 = [v1299, v1297, v2082];
          const v2084 = stdlib.Array_set(v1269, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, 1), v2083);
          ;
          const v2191 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1427), null);
          const v2192 = stdlib.fromSome(v2191, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, 0));
          const v2193 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1427), null);
          const v2194 = stdlib.fromSome(v2193, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, 0));
          const v2195 = {
            addr: v1427,
            discountLevel: v2192,
            timeReductionLevel: v2194
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2195', ctc8, v2195);
          const cv1256 = v1256;
          const cv1257 = true;
          const cv1258 = v1258;
          const cv1259 = v1259;
          const cv1260 = v1260;
          const cv1261 = v1261;
          const cv1262 = v1262;
          const cv1263 = v1429;
          const cv1269 = v2084;
          const cv1270 = v1270;
          
          v1256 = cv1256;
          v1257 = cv1257;
          v1258 = cv1258;
          v1259 = cv1259;
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1269 = cv1269;
          v1270 = cv1270;
          
          continue;
          break;
          }
        }}
    
    }
  const v2208 = v1269[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
  const v2209 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, 1)];
  const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, 0)];
  const v2212 = stdlib.sub(v2209, v2211);
  ;
  ;
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1263,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:425:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2251, time: v2250, didSend: v1004, from: v2249 } = txn3;
      
      ;
      const v2252 = v2250;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1186
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
  const {data: [], secs: v2251, time: v2250, didSend: v1004, from: v2249 } = txn3;
  ;
  let v2252 = v2250;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1184, v1185, v1186, v1187, v1188, v1189, v1190, v1191, v1206, v1235, v1236, v1238, v1256, v1258, v1259, v1261, v1262, v2212],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2252,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:428:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2264, time: v2263, didSend: v1013, from: v2262 } = txn4;
        
        ;
        const v2265 = stdlib.addressEq(v1184, v2262);
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
              tok: v1186
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
    const {data: [], secs: v2264, time: v2263, didSend: v1013, from: v2262 } = txn4;
    ;
    const v2265 = stdlib.addressEq(v1184, v2262);
    stdlib.assert(v2265, {
      at: './index.rsh:428:39:dot',
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
  appApproval: `BiAnAAEIByBAAwZkBYgCgAIoMAQ4SFBYqALoAfAB+AGQAqCNBhLU893xC4WSpNkMg6P4zw3h+7HLDJO5vtQEhZ/tuwmLuIuBArACItICEQL5ASYGAQABAQECAQMACP//////////IjUAMRhBEF0nBGRJIls1ASRbNQIxGSMSQQAKMQAoIRmvZkIQMTYaABdJQQOkIjUEIzUGSSEaDEAC5kkhGwxAATBJIRwMQABsIRwSRDQBSSEHDEAAQUklDEAAICUSRChkKWRQKmRQK2RQNQM2GgEXNAMhBVsJFjUHQg/RSChkKWRQKmRQNQM2GgEXNAMhBVsJFjUHQg+2IQYSRChkKWRQKmRQNQM2GgEXNAMhBVsJFjUHQg+YIRsSRDQBSSEHDEAAdkklDEAAOSUSRDYaATX/IjT/iA+eVwAJSTX+I1s0/iJVTRYiNP+ID4pXCQlJNf4jWzT+IlVNFlA0/1A1B0IPTEg2GgE1/yI0/4gPZ1cACUk1/iNbNP4iVU0WIjT/iA9TVwkJSTX+I1s0/iJVTRZQNP9QNQdCDxUhBhJENhoBNf8iNP+IDy1XAAlJNf4jWzT+IlVNFiI0/4gPGVcJCUk1/iNbNP4iVU0WUDT/UDUHQg7bSSEdDEABmSEdEkQ0AUkhBwxAAQpJJQxAAIUlEkQoZClkUCpkUCtkUEk1A1dgKDX/NANXMAg0A1c4CFA0A1cgCFA0A1coCFA0A1dACFA0A1dICFA0A1dQCFA0A4H7AiRYUDQDV1gIUDQDV/gIUDQDIQokWFA0AyEXIQRYUDQDV/AIUDQDV+gIUDT/UDQDV4gwUDT/UDQDV7gwUDUHQg48SChkKWRQKmRQSTUDV2AoNf80A1cwCDQDVzgIUDQDVyAIUDQDVygIUDQDV0AIUDQDV0gIUDQDV1AIUDQDIRMkWFA0A1dYCFA0A1f4CFA0AyELJFhQNAMhCiEEWFA0A1fwCFA0A1foCFA0/1A0A1eIMFA0/1A0A1e4MFA1B0INvSEGEkQoZClkUCpkUEk1A1dgKDX/NANXMAg0A1c4CFA0A1cgCFA0A1coCFA0A1dACFA0A1dICFA0A1dQCFA0AyETJFhQNANXWAhQNANX+AhQNAMhCyRYUDQDIQohBFhQNANX8AhQNANX6AhQNP9QNANXiDBQNP9QNANXuDBQNQdCDTshGhJEJwQ1/ys0/1BCAXFJIR4MQACCSSEfDEAADyEfEkQnBDX/KjT/UEIBVCEeEkQ0AUkhBwxAAEFJJQxAACAlEkQoZClkUCpkUCtkUDUDNhoBFzQDIQVbCBY1B0IM3EgoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IMwSEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IMo0khIAxAAA8hIBJEJwQ1/yk0/1BCANKBrYSbYxJEJwQ1/yg0/1BCAMA2GgIXNQQ2GgM2GgEXSSEODEAGQ0khBwxABadJJQxAAJ4lEkQlNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQMhFFs1/4AE4huzqbAyBzT/D0Q0A1cAIDQDIQRbNAMhDFs0AyENWzQDIQ9bNAMhBVs0AyEQWzQDIRFbNAMhEls0A1dgKDQDV4gwNANXuDA0/yI0AyEVWzQDIRZbNAMhC1s0AyEKWzQDIRchBFgyBjQDISEhIlg0AyEjW0IJlkglNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJSkpKSkpKSkpKSklXACA1/yEEWzX+IQxbNf0hDVs1/CEPWzX7IQVbNfohEFs1+SERWzX4IRJbNfdXYCg19leIMDX1V7gwNfQhFFs18yEVWzXyIRZbNfEhC1s18CEKWzXvIRchBFg17iEhISJYNe0hI1s17IHaAiEkWDXrgesCWzXqgfMCWzXpSTUFNeiABJBPZEk06FCwMgc08wxENOgiVUkhJQxAAZxJIQYMQACpIQYSRIAIAAAAAAAACJMiMQCICwFXAAlJNecjWzTnIlVNFiIxAIgK7VcJCUk15yNbNOciVU0WUDEAUFCwIjEAiArTVwAJSTXnI1s05yJVTRYiMQCICr9XCQlJNecjWzTnIlVNFlAxAFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzIzTyNPE08DTvNO4yBjTtVwARNOkWNOoWUDTrVxABUFA07EIIH0giMQCICmVXCQlJNeUjWzTlIlVNSTXmIQkMRDTmIQkPQQAHISY150IACzT2JDTmCyRYFzXnNOc094gKVzTmIwg15TEAKDEAiAoiKTTlFlA15FcACTTkUGaABOmk7kExAFA05RZQsIAIAAAAAAAAB8UiMQCICfZXAAlJNeQjWzTkIlVNFjTlFlAxAFBQsCIxAIgJ2VcACUk15CNbNOQiVU0WNOUWUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPMjNPI08TTwNO807jIGNO1XABE06TTnCBY06hZQNOtXEAFQUDTsQgczSSMMQAGtSCIxAIgJc1cACUk15SNbNOUiVU1JNeYhCQ9JNeVBAAYiNedCAAs09SQ05gskWBc15zTnIQgMRDTxIQg05wkLIQgKNeQ05IgJQDTtVwARNOkWNOoWUDTrVxABUFA14zT5Iw1ENONXERFJNeIiW0k14TT4DUQ05UEABiI14EIACzT1JDTmCyRYFzXgNOAhCAxENPEhCDTgCQshCApJNd80+Qo13jTxNPoINd2ABEXJ7MQxAFA03xZQNN0WULCxIrIBNN6yCCOyEDT/sgezsSKyATT4shIhDrIQMQCyFDT3shGzIjEAiAiTVwkJSTXaI1s02iJVTUk12yEJD0EABiI13EIACzT0JDTbCyRYFzXcgAgAAAAAAAAG4zTmFjTbFlAxAFBQsDTmFjTbFlAxAFA1BzTlQQAGIjXaQgALNPUkNOYLJFgXNdo02iEIDEQ0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zT7NNwJCCM08jTeCDTdNPAjCDTvNPEhCDTaCQshCAoIMQAyBjTjVwARNOE0+AkWNOJXCAhQNOJXEAFQUDTsNOQINN4JQgWASCIxAIgHxlcACUk15SNbNOUiVU1JNeYhCQxENOYhCQ9BAAchJjXnQgALNPYkNOYLJFgXNec05zT3iAe4NOYjCDXlMQAoMQCIB4MpNOUWUDXkVwkJNORMUGaABFaPh0wxAFA05RZQsIAIAAAAAAAABew05RYiMQCIB1NXCQlJNeQjWzTkIlVNFlAxAFBQsDTlFiIxAIgHNlcJCUk15CNbNOQiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPMjNPI08TTwNO807jIGNO1XABE06TTnCBY06hZQNOtXEAFQUDTsQgSTSSEJDEAAjUghBzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABMyZklywNP8xABJENP80AyEEWzQDIQxbNAMhDVs0AyEPWzQDIQVbNAMhEFs0AyERWzQDIRJbNANXYCg0A1eIMDQDV7gwNAMhFFs0AyEVWzQDIRZbNAMhC1s0AyEKIQRYNAMhE1syBkIFbUhJISUMQACMSSEGDEAAhEghBjQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEEWzQDIQxbNAMhDVs0AyEPWzQDIQVbNAMhEFs0AyERWzQDIRJbNANXYCg0A1eIMDQDV7gwNAMhFFs0AyEVWzQDIRZbNAMhC1s0AyEKIQRYNAMhE1syBkIE2khJIwxAALFIIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf8hBFs1/iEMWzX9IQ1bNfxXaCI1+4AEmouRdLA0+1cAETX6IzT9iAWNNP8xABJENP80/jT9NPw0AyEPWzQDIQVbNAMhEFs0AyERWzQDgWBbNANXiig0A1eyMDQDV+IwNAMhEls0/AgjIjT+IiI0/zIGNPoiWyMIFjT6VwgIUDT6VxABUDT7VxERUCJCArRIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkkiWzX/JFs1/oEQWzX9gRhbNfwhBFs1+yEMWzX6IQ1bNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsCEYiASvISSvSTX4SVBJNfdXABE19iSvNPZXCAhQNPZXEAFQNPdXERFQNfUhGIgEhLEisgEishIhDrIQMgqyFDT+shGzIRiIBGuxIrIBIQayEIH///////////8BsiIhB7IjgAhNRVRBRk9NT7IlgCBNZXRhZm9tbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGBodHRwczovL21ldGFsYWJzLnRlY2hub2xvZ3kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfSACAAAAAAAAAS1NPQWULA09Ek18zT+FiJbE0Q09VcRETXyNPVXABEnBTTyVwgIUDTyVxABUFBJNfFXERE18DTxVwARNPBXAAgnBVA08FcQAVBQSTXvVxERNe4071cAETTuVwAINO5XCAhQKFBQNe2AKAAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKA17IAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAKAAAAAAAAAA8AAAAAAAAAFAAAAAAAAAAZNeuAMAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABTXqMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDTzFlA07VA07FA061A06lAoSwFXAH9nKUsBV39/ZypLAVf+FGdIIzUBMgY1AkICEjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zXqNPdBAJs0/lcREUk16SRbNeg06SJbNec06DTnCTXmNOo06xZQNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzUDT0UDT1UDT2FlA0+BZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUDTpUDToFlA05xZQNOYWUChLAVcAf2cpSwFXf39nKksBV/5/ZytLAYH9AiEHWGdIJTUBMgY1AkIBRjT+VxERSTXpJFs06SJbCTXosSKyATT/sggjshA0/LIHs7EisgEjshIhDrIQNPyyFDTsshGzgATsm2G3NPxQsDTqNOsWUDTsFlA07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA081A09FA09VA09hZQNPgWUDT5FlA0+xZQNPxQNOgWUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghBjUBMgY1AkIApDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817kk17TTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0FlA09RZQNPZQNPdQNPhQNPkWUDT6FlA0+xZQNPwWUDT9UDT+FlAoSwFXAH9nKUsBV39/ZypLAVf+MmdIIQc1ATIGNQJCABwxGSEJEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8pJMRhhQAAFSCEZr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEOEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 4,
  stateSize: 387,
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
                "name": "v1185",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1186",
                "type": "address"
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
              },
              {
                "internalType": "uint256",
                "name": "v1190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1191",
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
                "name": "v1185",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1186",
                "type": "address"
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
              },
              {
                "internalType": "uint256",
                "name": "v1190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1191",
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
                "name": "v1428",
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
    "name": "_reach_oe_v1205",
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
    "name": "_reach_oe_v1516",
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
    "name": "_reach_oe_v1989",
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
    "name": "_reach_oe_v2195",
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
        "name": "v4173",
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
        "name": "v4177",
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
        "name": "v4181",
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
                "name": "v1428",
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
  Bytecode: `0x60806040526040516200675838038062006758833981016040819052620000269162000a1f565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600b62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007e5565b620002729695949392919062000b34565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f7c291011cafd69e4e4b800849ebfb130f5b3d7512263cf5f3e1366bbaab531909060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600c62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007f3565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c2f565b604051602081830303815290604052600290805190602001906200059b9291906200086a565b5050505062000d8c565b620005af620008f9565b60005b60028110156200060557848160028110620005d157620005d162000ace565b6020020151828260028110620005eb57620005eb62000ace565b602002015280620005fc8162000d25565b915050620005b2565b50818184600281106200061c576200061c62000ace565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102e08101909152600061028082018181526102a083018290526102c083019190915281526020810162000689620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b8620008f9565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200072662000946565b8152604080516060810182526000808252602082810182905292820152910190815260200162000755620008f9565b8152604080516060810182526000808252602082810182905292820152910190815260200162000784620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620007b3620008f9565b8152602001620007c262000964565b8152602001620007d162000982565b8152602001620007e062000982565b905290565b61108780620056d183390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620007b3620008f9565b828054620008789062000d4f565b90600052602060002090601f0160209004810192826200089c5760008555620008e7565b82601f10620008b757805160ff1916838001178555620008e7565b82800160010185558215620008e7579182015b82811115620008e7578251825591602001919060010190620008ca565b50620008f5929150620009a0565b5090565b60405180604001604052806002905b6200092f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009085790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008f55760008155600101620009a1565b604080519081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000a3457600080fd5b62000a3e620009b7565b8351815260e0601f198301121562000a5557600080fd5b62000a5f620009ee565b6020850151815260408501519092506001600160a01b038116811462000a8457600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b0c5760208185018101518683018201520162000aee565b8181111562000b1f576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b4960c083018962000ae4565b828103602084015262000b5d818962000ae4565b9050828103604084015262000b73818862000ae4565b9050828103606084015262000b89818762000ae4565b6080840195909552505060a00152949350505050565b8060005b600281101562000bdf57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000ba3565b50505050565b8060005b600581101562000bdf57815184526020938401939091019060010162000be9565b8060005b600681101562000bdf57815184526020938401939091019060010162000c0e565b81516001600160a01b03168152610420810160208301516020830152604083015162000c6660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000cc1828501826001600160a01b03169052565b50506101408084015162000cd88285018262000b9f565b505061016083015162000cf061020084018262000be5565b5061018083015162000d076102a084018262000c0a565b506101a083015162000d1e61036084018262000c0a565b5092915050565b600060001982141562000d4857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d6457607f821691505b6020821081141562000d8657634e487b7160e01b600052602260045260246000fd5b50919050565b6149358062000d9c6000396000f3fe6080604052600436106101015760003560e01c80637a3678dd1161008f578063ab53f2c611610061578063ab53f2c614610243578063bf2c5b2414610266578063cadc2e7a14610279578063e73216b514610299578063eef5632c146102a157005b80637a3678dd146101d957806383230757146101fb5780638e31476914610210578063a55605961461022357005b80633bc5b7bf116100d35780633bc5b7bf146101765780636579ece6146101a35780636cd6de3a146101b65780636cdcb9df146101be57806373b4522c146101c657005b80631e93b0f11461010a5780632b10758a1461012e5780632c10a1591461014357806330a94db41461015657005b3661010857005b005b34801561011657600080fd5b506003545b6040519081526020015b60405180910390f35b6101366102c1565b6040516101259190613ad0565b610108610151366004613afa565b610311565b34801561016257600080fd5b5061011b610171366004613b12565b610335565b34801561018257600080fd5b50610196610191366004613b43565b61058c565b6040516101259190613b76565b6101086101b1366004613bad565b6105b8565b6101366105d8565b61013661062b565b6101086101d4366004613afa565b610681565b3480156101e557600080fd5b506101ee6106a1565b6040516101259190613c05565b34801561020757600080fd5b5060015461011b565b61010861021e366004613afa565b610b15565b34801561022f57600080fd5b5061011b61023e366004613b12565b610b35565b34801561024f57600080fd5b50610258610d80565b604051610125929190613d4c565b610108610274366004613afa565b610e1d565b34801561028557600080fd5b50610196610294366004613b43565b610e3d565b610136610e63565b3480156102ad57600080fd5b506101366102bc366004613b43565b610eb6565b6102c9613384565b6102d16133ae565b6102d96133ed565b6102e1613407565b6000602082810182905290825260408051808301909152828152908301526103098284611192565b505051919050565b6103196133ae565b61033161032b36849003840184613e85565b8261220e565b5050565b6000600160005414156103f25760006002805461035190613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90613edb565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b50505050508060200190518101906103e291906140a5565b90506103f06000600a61250d565b505b600360005414156104b65760006002805461040c90613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461043890613edb565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b505050505080602001905181019061049d919061418c565b90508060a00151836104af91906142b8565b9392505050565b600660005414156104d05760006002805461040c90613edb565b6007600054141561057b576000600280546104ea90613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461051690613edb565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061049d91906142cf565b6105876000600a61250d565b919050565b60408051606081018252600080825260208201819052918101919091526105b282612533565b92915050565b6105c06133ae565b6103316105d23684900384018461443c565b82611192565b6105e0613384565b6105e86133ae565b6105f06133ed565b6105f8613407565b6000606082015260028152604080516020808201909252828152908301526106208284611192565b505060400151919050565b610633613384565b61063b6133ae565b6106436133ed565b61064b613407565b6000604082015260018181905250604080516020808201909252828152908301526106768284611192565b505060200151919050565b6106896133ae565b61033161069b36849003840184613e85565b82612605565b6106a9613437565b60016000541415610764576000600280546106c390613edb565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef90613edb565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b505050505080602001905181019061075491906140a5565b90506107626000600761250d565b505b600360005414156109285760006002805461077e90613edb565b80601f01602080910402602001604051908101604052809291908181526020018280546107aa90613edb565b80156107f75780601f106107cc576101008083540402835291602001916107f7565b820191906000526020600020905b8154815290600101906020018083116107da57829003601f168201915b505050505080602001905181019061080f919061418c565b90506108196134ef565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e080850151845190920191909152610220808501518451909201919091526101008085015184519084169101526101c0808501518451610120908101919091526101e0808701518651610140908101919091526102008089015188519716610160978801526101a0808a01518951610180908101919091528a01518951909101529288018051885190950194909452870151865190910152905184519091015292015181519092019190915251919050565b600660005414156109425760006002805461077e90613edb565b60076000541415610b065760006002805461095c90613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461098890613edb565b80156109d55780601f106109aa576101008083540402835291602001916109d5565b820191906000526020600020905b8154815290600101906020018083116109b857829003601f168201915b50505050508060200190518101906109ed91906142cf565b90506109f76134ef565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526102e08401518351909101526101008084015183519083169101526101c080840151835161012090810191909152610200808601518551610140908101919091526102208088015187519616610160968701526101a080890151885161018090810191909152890151885190910152928701805187519095019490945286015185516101e00152915184519092019190915292015181519092019190915251919050565b610b126000600761250d565b90565b610b1d6133ae565b610331610b2f36849003840184613e85565b82612826565b600060016000541415610bf257600060028054610b5190613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7d90613edb565b8015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b5050505050806020019051810190610be291906140a5565b9050610bf06000600861250d565b505b60036000541415610caf57600060028054610c0c90613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3890613edb565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050505050806020019051810190610c9d919061418c565b90508060a00151836104af91906144f0565b60066000541415610cc957600060028054610c0c90613edb565b60076000541415610d7457600060028054610ce390613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0f90613edb565b8015610d5c5780601f10610d3157610100808354040283529160200191610d5c565b820191906000526020600020905b815481529060010190602001808311610d3f57829003601f168201915b5050505050806020019051810190610c9d91906142cf565b6105876000600861250d565b600060606000546002808054610d9590613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc190613edb565b8015610e0e5780601f10610de357610100808354040283529160200191610e0e565b820191906000526020600020905b815481529060010190602001808311610df157829003601f168201915b50505050509050915091509091565b610e256133ae565b610331610e3736849003840184613e85565b8261295a565b60408051606081018252600080825260208201819052918101919091526105b282612bba565b610e6b613384565b610e736133ae565b610e7b6133ed565b610e83613407565b600060808201526003815260408051602080820190925282815290830152610eab8284611192565b505060600151919050565b610ebe613384565b60016000541415610f7957600060028054610ed890613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0490613edb565b8015610f515780601f10610f2657610100808354040283529160200191610f51565b820191906000526020600020905b815481529060010190602001808311610f3457829003601f168201915b5050505050806020019051810190610f6991906140a5565b9050610f776000600961250d565b505b600360005414156110c157600060028054610f9390613edb565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbf90613edb565b801561100c5780601f10610fe15761010080835404028352916020019161100c565b820191906000526020600020905b815481529060010190602001808311610fef57829003601f168201915b5050505050806020019051810190611024919061418c565b905061102e613502565b600161103985612533565b51600181111561104b5761104b613b60565b14611057576000611065565b61106084612533565b604001515b815152600161107385612bba565b51600181111561108557611085613b60565b1461109157600061109f565b61109a84612bba565b604001515b81516020015280516001600160a01b0390941660409094019390935250505190565b600660005414156110db57600060028054610f9390613edb565b60076000541415611186576000600280546110f590613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461112190613edb565b801561116e5780601f106111435761010080835404028352916020019161116e565b820191906000526020600020905b81548152906001019060200180831161115157829003601f168201915b505050505080602001905181019061102491906142cf565b6105876000600961250d565b6111a2600760005414602861250d565b81516111bd9015806111b657508251600154145b602961250d565b6000808055600280546111cf90613edb565b80601f01602080910402602001604051908101604052809291908181526020018280546111fb90613edb565b80156112485780601f1061121d57610100808354040283529160200191611248565b820191906000526020600020905b81548152906001019060200180831161122b57829003601f168201915b505050505080602001905181019061126091906142cf565b905061126a613515565b61127c8261018001514210602a61250d565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e1846040516112ab9190614508565b60405180910390a160006020850151515160038111156112cd576112cd613b60565b141561160e5760016112de33612533565b5160018111156112f0576112f0613b60565b146112fc57600061130a565b61130533612533565b604001515b6020820181905261131f90600511601961250d565b60058160200151106113345760f98152611357565b81610120015181602001516005811061134f5761134f614568565b602002015181525b6113633415601a61250d565b80516102c083015161137591906144f0565b60408083018051929092526102a0840151825160200152610280840151810151915191151591015261010082015181516113bc916113b591339190612c47565b601b61250d565b600181602001516113cd91906144f0565b6060820190815233600081815260046020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527f049bed53fc19127a68e64c896e243a07b2c555296c04f396e70a2b7556edee6e910160405180910390a16060810151608082015152600161144733612bba565b51600181111561145957611459613b60565b14611465576000611473565b61146e33612bba565b604001515b60808201805160200191909152805133604091820152905190517fc5ffcc27fc180f06713de093fef69d6b3b63130eb251abcd5d850a8e2736c8a3916114b891613ad0565b60405180910390a1608081015183526114cf61369a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a51909101526101808b0151878a018051919091528051600198018890526101a08c015181518801526101c08c01518151909601959095526101e08b01518551909401939093526102008a0151845190920191909152610220890151835196169501949094525143930192909252610240850151918401516115e4929190612c5d565b60208201805161010001919091526102608401519051610120015261160881612cd1565b50612208565b600160208501515151600381111561162857611628613b60565b1415611c5057600161163933612533565b51600181111561164b5761164b613b60565b14611657576000611665565b61166033612533565b604001515b60c08201819052600511801560e083015261168657600060a08201526116ac565b8161014001518160c00151600681106116a1576116a1614568565b602002015160a08201525b6116be60648260a0015110601c61250d565b60648160a0015160646116d191906142b8565b836101c001516116e1919061457e565b6116eb919061459d565b6101008201819052611700903414601d61250d565b6102c082015161012082018051919091526102a0830151815160200152610280830151604090810151825190151591015261024083015190516117469190600190612c5d565b81610140018190525061176a611763338461010001516000612c47565b601e61250d565b61177c60018360c0015111601f61250d565b60e08201516101408201516020908101515161179992109061250d565b8060e00151156117b05760006101608201526117d7565b8161014001518160c00151600681106117cb576117cb614568565b60200201516101608201525b6117ea606482610160015110602161250d565b606481610160015160646117fe91906142b8565b836101c0015161180e919061457e565b611818919061459d565b610180820181905260c083015161182e9161459d565b6101a082015260a08201516101c083015161184991906144f0565b6101c082018190526101808201516040805133815260208101929092528101919091527f3698508a0af4c7883b38082eb105938584bdb53436931b82abc2c338128794d09060600160405180910390a181516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156118d7573d6000803e3d6000fd5b5060e082015161014082015160200151516118f291906142b8565b6101e0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015261010082015160e083015161193b91903390613052565b600161194633612bba565b51600181111561195857611958613b60565b14611964576000611972565b61196d33612bba565b604001515b610220820181905260051161198e5760006102008201526119b6565b816101600151816102200151600681106119aa576119aa614568565b60200201516102008201525b60c08101516102408201805191909152610220820151815160200152805133604091820152905190517f9630b76386c0176de84c3e00a63c39badfad89922822eca2d2a121a9f1d2f0cc91611a0a91613ad0565b60405180910390a1610240810151602084015260e081015115611a34576000610260820152611a5b565b8161014001518160c0015160068110611a4f57611a4f614568565b60200201516102608201525b611a6e606482610260015110602261250d565b611a7661369a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e08086015184519091015261010080860151845193169201919091526101208085015183519091015261014080850151835190910152610160808501518351909101526102008301519051611b2b91906142b8565b836101800151611b3b91906144f0565b6020808301805192909252905160019101526101a08083015190840151611b6291906144f0565b602082018051604001919091526101c08301519051606001526101e0830151611b8d906001906144f0565b602082015160800152610260820151606490611ba990826142b8565b846101c00151611bb9919061457e565b611bc3919061459d565b836102000151611bd391906144f0565b60208201805160a0019190915280513360c090910152514360e0909101526101408201516101e0830151611c0a9190600190612c5d565b81602001516101000181905250816101a00151826101000151846102600151611c3391906144f0565b611c3d91906142b8565b6020820151610120015261160881612cd1565b6002602085015151516003811115611c6a57611c6a613b60565b1415611fa0576001611c7b33612bba565b516001811115611c8d57611c8d613b60565b14611c99576000611ca7565b611ca233612bba565b604001515b6102a08201819052611cbd90600511602361250d565b6005816102a0015110611cd75760f9610280820152611cff565b816101200151816102a0015160058110611cf357611cf3614568565b60200201516102808201525b611d0b3415602461250d565b806102800151826102c00151611d2191906144f0565b6102c082018051919091526102a083015181516020015261028080840151604090810151925192151592019190915261010083015190820151611d7191611d6a91339190612c47565b602561250d565b6001816102a00151611d8391906144f0565b6102e0820190815233600081815260056020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527fa713e261ccde52235a352fbddb3afe2103de7321502fbf5721c5b46e2e903b85910160405180910390a16001611df333612533565b516001811115611e0557611e05613b60565b14611e11576000611e1f565b611e1a33612533565b604001515b61030082018051919091526102e0820151815160200152805133604091820152905190517fc0ef0ada72ab1182120df355c18063282f6e00a373763f4cba38946a8edbee4b91611e6e91613ad0565b60405180910390a16103008101516040840152611e8961369a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a51909101526101808b0151878a018051919091528051600198018890526101a08c01518151909701969096526101c08b01518651909501949094526101e08a01518551909301929092526102008901518451909101526102208801518351951694019390935251439201919091526102408401516102c08401516115e49290612c5d565b6003602085015151516003811115611fba57611fba613b60565b141561220857611fcc3415602661250d565b6102c082015161032082018051919091526102a0830151815160200152610280830151604090810151915191151591015261010082015161201b906120149033906000612c47565b602761250d565b600161202633612533565b51600181111561203857612038613b60565b14612044576000612052565b61204d33612533565b604001515b61034082015152600161206433612bba565b51600181111561207657612076613b60565b14612082576000612090565b61208b33612bba565b604001515b6103408201805160200191909152805133604091820152905190517f0f6529c8cb7df2ed66de5fc87c33324987f8b8a758f59bda6634ee766976fb77916120d691613ad0565b60405180910390a161034081015160608401526120f161369a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a51909101526101808b0151878a018051919091528051600198018890526101a08c01518151909701969096526101c08b01518651909501949094526101e08a01518551909301929092526102008901518451909101526102208801518351951694019390935251439201919091526102408401516103208401516115e49290612c5d565b50505050565b61221e600160005414601061250d565b815161223990158061223257508251600154145b601161250d565b60008080556002805461224b90613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461227790613edb565b80156122c45780601f10612299576101008083540402835291602001916122c4565b820191906000526020600020905b8154815290600101906020018083116122a757829003601f168201915b50505050508060200190518101906122dc91906140a5565b905061230560408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16123503415600d61250d565b6101408201515151612364906001906144f0565b815152610140820180515160209081015183519091015251516040908101518251901515908201528201516123a7906123a09033906001612c47565b600e61250d565b81516123bf906001600160a01b03163314600f61250d565b6123c761369a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e08086015184519091015261012080860151845193166101009384015261016080870151855190920191909152610180860151845161014001526101a0860151845190910152519084015161247c91906144f0565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052815160a001819052845182516001600160a01b0390911660c09091015290514360e09091015261014084015183516124e59290612c5d565b60208201805161010001919091525160006101209091015261250681612cd1565b5050505050565b816103315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561257f5761257f613b60565b14156125f6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156125c0576125c0613b60565b60018111156125d1576125d1613b60565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b612615600360005414601361250d565b815161263090158061262957508251600154145b601461250d565b60008080556002805461264290613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461266e90613edb565b80156126bb5780601f10612690576101008083540402835291602001916126bb565b820191906000526020600020905b81548152906001019060200180831161269e57829003601f168201915b50505050508060200190518101906126d3919061418c565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a16127213415601261250d565b6127296136ba565b815181516001600160a01b0391821690526020808401518351820152604080850151845190841691015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e080850151845190910152610100808501518451908416910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a0808501518451909101526101c0808501518451909101526101e0808501518451909101526102008085015184519316920191909152610220808401518351909101528101514390526122088161306b565b612836600660005414601761250d565b815161285190158061284a57508251600154145b601861250d565b60008080556002805461286390613edb565b80601f016020809104026020016040519081016040528092919081815260200182805461288f90613edb565b80156128dc5780601f106128b1576101008083540402835291602001916128dc565b820191906000526020600020905b8154815290600101906020018083116128bf57829003601f168201915b50505050508060200190518101906128f4919061418c565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a16129423415601561250d565b8051612721906001600160a01b03163314601661250d565b61296a600760005414602c61250d565b815161298590158061297e57508251600154145b602d61250d565b60008080556002805461299790613edb565b80601f01602080910402602001604051908101604052809291908181526020018280546129c390613edb565b8015612a105780601f106129e557610100808354040283529160200191612a10565b820191906000526020600020905b8154815290600101906020018083116129f357829003601f168201915b5050505050806020019051810190612a2891906142cf565b9050612a3d816101800151421015602e61250d565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a1612a883415602b61250d565b612a9061369a565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a01518951820152610100808b01518a51908a1690820152610120808c01518b51820152610140808d01518c5190910152610160808d01518c51909101526101808c0151898c01805191909152805160009a01999099526101a08c01518951909801979097526101c08b01518851909601959095526101e08a01518751909401939093526102008901518651909201919091526102208801518551961695019490945282514394019390935261024085015182519093019290925261026084015190519091015261220881612cd1565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612c0657612c06613b60565b14156125f6576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156125c0576125c0613b60565b6000612c558385308561319e565b949350505050565b612c656136e8565b60005b6002811015612cb157848160028110612c8357612c83614568565b6020020151828260028110612c9a57612c9a614568565b602002015280612ca9816145bf565b915050612c68565b5081818460028110612cc557612cc5614568565b60200201529392505050565b604080518082019091526000808252602082015281602001516020015115612e845760208281015161010001518101518051910151612d1091906142b8565b8152612d1a613733565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015181890152895160e090810151908901528951610100908101518816818a01528a5161012090810151818b01528b5161014090810151908b01528b5161016090810151908b0152878c018051516101808c015280518801516101a08c01528051909601516101c08b01528551909401516101e08a015284519092015161020089015283510151909516610220870152815185015161024087015281510151610260860152805184015183015161028086015280518401518301518301516102a08601525190920151810151516102c084015283516102e08401526007600055436001559051612e609183910161461e565b60405160208183030381529060405260029080519060200190612208929190613848565b60208281015161010001518101518051910151612ea191906142b8565b60208083019190915282015160c0810151610120909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612eef573d6000803e3d6000fd5b50612f0c826000015160400151836020015160c001516001613052565b60208083015160c001516040516001600160a01b0390911681527f10712c47b269c9df1f602c16156b1d6404c0b81b5bbebfe8e2d13e08bda50b68910160405180910390a1612f596138cc565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190860152865160a09081015181870152875160c09081015181880152885160e0908101519088015288516101009081015187169088015288516101209081015190880152885161014090810151908801528851610160908101519088015284890180515161018089015280518501516101a08901528051909301516101c08801528251909101516101e087015290510151909216610200840152838101516102208401526003600055436001559051612e60918391016147ac565b61305d838383613278565b61306657600080fd5b505050565b6130736138cc565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101518416908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519085015284516101c0908101519085015284516101e090810151908501528451610200908101519093169284019290925283516102209081015190840152600660005543600155905161317a918391016147ac565b60405160208183030381529060405260029080519060200190613066929190613848565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613205916148c6565b60006040518083038185875af1925050503d8060008114613242576040519150601f19603f3d011682016040523d82523d6000602084013e613247565b606091505b509150915061325882826001613349565b508080602001905181019061326d91906148e2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916132d7916148c6565b60006040518083038185875af1925050503d8060008114613314576040519150601f19603f3d011682016040523d82523d6000602084013e613319565b606091505b509150915061332a82826002613349565b508080602001905181019061333f91906148e2565b9695505050505050565b606083156133585750816104af565b8251156133685782518084602001fd5b60405163100960cb60e01b81526004810183905260240161252a565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b60405180608001604052806133c1613384565b81526020016133ce613384565b81526020016133db613384565b81526020016133e8613384565b905290565b6040518060400160405280600081526020016133e861398d565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b60405180610240016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016134c86139a0565b81526020016134d56139be565b81526020016134e26139a0565b81526020016133e86139be565b60405180602001604052806133e8613437565b60405180602001604052806133e8613384565b6040518061036001604052806000815260200160008152602001613555604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001613569613384565b81526020016000815260200160008152602001600015158152602001600081526020016135b2604051806060016040528060008152602001600081526020016000151581525090565b81526020016135bf6136e8565b815260200160008152602001600081526020016000815260200160008152602001613606604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001613621613384565b8152602001600081526020016000815260200160008152602001613661604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001613675613384565b81526040805160608101825260008082526020828101829052928201529101906133db565b60405180604001604052806136ad6139dc565b81526020016133e8613a57565b60405180604001604052806136cd6138cc565b81526020016133e86040518060200160405280600081525090565b60405180604001604052806002905b61371d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816136f75790505090565b60405180610300016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016137a16139a0565b81526020016137ae6139be565b81526020016137bb6139be565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016137fb6136e8565b81526020016000815260200161382d604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b82805461385490613edb565b90600052602060002090601f01602090048101928261387657600085556138bc565b82601f1061388f57805160ff19168380011785556138bc565b828001600101855582156138bc579182015b828111156138bc5782518255916020019190600101906138a1565b506138c8929150613abb565b5090565b60405180610240016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161393a6139a0565b81526020016139476139be565b81526020016139546139be565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b60405180602001604052806133e8613407565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613a4a6139a0565b81526020016134e26139be565b604051806101400160405280600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001613aae6136e8565b8152602001600081525090565b5b808211156138c85760008155600101613abc565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b600060408284031215613b0c57600080fd5b50919050565b600060208284031215613b2457600080fd5b5035919050565b6001600160a01b0381168114613b4057600080fd5b50565b600060208284031215613b5557600080fd5b81356104af81613b2b565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110613b8d57613b8d613b60565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215613b0c57600080fd5b8060005b6005811015612208578151845260209384019390910190600101613bc3565b8060005b6006811015612208578151845260209384019390910190600101613be6565b6000610480820190508251825260208301516020830152604083015160408301526060830151613c4060608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151613c84828501826001600160a01b03169052565b505061012083810151908301526101408084015190830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c080840151613cd982850182613bbf565b50506101e0830151613cef610260840182613be2565b50610200830151613d04610320840182613bbf565b50610220830151613d196103c0840182613be2565b5092915050565b60005b83811015613d3b578181015183820152602001613d23565b838111156122085750506000910152565b8281526040602082015260008251806040840152613d71816060850160208701613d20565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715613dc057613dc0613d86565b60405290565b604051610240810167ffffffffffffffff81118282101715613dc057613dc0613d86565b604051610300810167ffffffffffffffff81118282101715613dc057613dc0613d86565b6040805190810167ffffffffffffffff81118282101715613dc057613dc0613d86565b6040516020810167ffffffffffffffff81118282101715613dc057613dc0613d86565b60405160a0810167ffffffffffffffff81118282101715613dc057613dc0613d86565b8015158114613b4057600080fd5b600060408284031215613e9757600080fd5b6040516040810181811067ffffffffffffffff82111715613eba57613eba613d86565b604052823581526020830135613ecf81613e77565b60208201529392505050565b600181811c90821680613eef57607f821691505b60208210811415613b0c57634e487b7160e01b600052602260045260246000fd5b805161058781613b2b565b600060608284031215613f2d57600080fd5b6040516060810181811067ffffffffffffffff82111715613f5057613f50613d86565b806040525080915082518152602083015160208201526040830151613f7481613e77565b6040919091015292915050565b600082601f830112613f9257600080fd5b6040516040810181811067ffffffffffffffff82111715613fb557613fb5613d86565b6040528060c0840185811115613fca57600080fd5b845b81811015613fee57613fde8782613f1b565b8352602090920191606001613fcc565b509195945050505050565b600082601f83011261400a57600080fd5b60405160a0810181811067ffffffffffffffff8211171561402d5761402d613d86565b6040528060a084018581111561404257600080fd5b845b81811015613fee578051835260209283019201614044565b600082601f83011261406d57600080fd5b60405160c0810181811067ffffffffffffffff8211171561409057614090613d86565b6040528060c084018581111561404257600080fd5b600061042082840312156140b857600080fd5b6140c0613d9c565b6140c983613f10565b8152602083015160208201526140e160408401613f10565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120614132818501613f10565b9082015261014061414585858301613f81565b90820152614157846102008501613ff9565b61016082015261416b846102a0850161405c565b61018082015261417f84610360850161405c565b6101a08201529392505050565b6000610400828403121561419f57600080fd5b6141a7613dc6565b6141b083613f10565b8152602083015160208201526141c860408401613f10565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010061420d818501613f10565b9082015261012061422085858301613ff9565b908201526101c06142338585830161405c565b61014083015261424785610280860161405c565b6101608301526103408401516101808301526103608401516101a0830152610380840151908201526103a08301516101e08201526142886103c08401613f10565b6102008201526103e0929092015161022083015250919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156142ca576142ca6142a2565b500390565b60006105a082840312156142e257600080fd5b6142ea613dea565b6142f383613f10565b81526020830151602082015261430b60408401613f10565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100614350818501613f10565b9082015261012061436385858301613ff9565b908201526101c06143768585830161405c565b61014083015261028061438b8682870161405c565b6101608401526103408501516101808401526103608501516101a0840152610380850151828401526103a08501516101e08401526103c08501516102008401526143d86103e08601613f10565b6102208401526143ec866104008701613f81565b6102408401526104c085015161026084015261440c866104e08701613f1b565b90830152506105408301516102a08201526105608301516102c0820152610580909201516102e083015250919050565b600081830360c081121561444f57600080fd5b614457613e0e565b8335815260a0601f198301121561446d57600080fd5b614475613e31565b915061447f613e54565b60208501356004811061449157600080fd5b815260408501356144a181613e77565b602082015260608501356144b481613e77565b604082015260808501356144c781613e77565b606082015260a08501356144da81613e77565b6080820152825260208101919091529392505050565b60008219821115614503576145036142a2565b500190565b81518152602082015151805160c0830191906004811061452a5761452a613b60565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615614598576145986142a2565b500290565b6000826145ba57634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156145d3576145d36142a2565b5060010190565b8060005b60028110156122085761460884835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016145de565b81516001600160a01b031681526105a0810160208301516020830152604083015161465460408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516146a2828501826001600160a01b03169052565b5050610120808401516146b782850182613bbf565b50506101408301516101c06146ce81850183613be2565b61016085015191506102806146e581860184613be2565b6101808601516103408601526101a0860151610360860152818601516103808601526101e08601516103a08601526102008601516103c08601526102208601516001600160a01b03166103e0860152610240860151925061474a6104008601846145da565b6102608601516104c086015285015180516104e086015260208101516105008601526040810151151561052086015291506147829050565b506102a08301516105408301526102c08301516105608301526102e0909201516105809091015290565b81516001600160a01b0316815261040081016020830151602083015260408301516147e260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614830828501826001600160a01b03169052565b50506101208084015161484582850182613bbf565b50506101408301516101c061485c81850183613be2565b6101608501519150614872610280850183613be2565b6101808501516103408501526101a0850151610360850152840151610380840152506101e08301516103a08301526102008301516001600160a01b03166103c0830152610220909201516103e09091015290565b600082516148d8818460208701613d20565b9190910192915050565b6000602082840312156148f457600080fd5b81516104af81613e7756fea26469706673582212203ac70f8378e02a6cb28a8b31212a2e393cf97d2ce023e1d094bc2bc6d1be33a064736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea264697066735822122098d3a2d497849cb20de52d82bc509a03dd7ae5cd842421b77ea8e5dd16a97de164736f6c634300080c0033`,
  BytecodeLen: 26456,
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
    at: './index.rsh:268:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:422:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:429:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:428:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:286:23:after expr stmt semicolon',
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

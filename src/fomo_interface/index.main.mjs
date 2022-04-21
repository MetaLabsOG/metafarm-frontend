// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['initialPrice', ctc1], ['nftPrize', ctc2], ['priceStep', ctc1], ['ticketFeeDenominator', ctc1], ['tokensGivenPerTicket', ctc1], ['tokenOwnedByUsers', ctc1], ['token', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1], ['discountPrices', ctc6], ['discountPercents', ctc7], ['timeReductionPrices', ctc8], ['timeReductionSecs', ctc9]]);
  const ctc11 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc0]]);
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc1
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc13;
  
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1223, v1236, v1264, v1265, v1266, v1267, v1268] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async () => {
                
                const v2295 = {
                  currentPrice: v1289,
                  currentTotal: v1291,
                  currentWinner: v1292,
                  deadline: v1217,
                  deltaDeadline: v1218,
                  discountPercents: v1266,
                  discountPrices: v1265,
                  endTimestamp: v1286,
                  initialPrice: v1215,
                  nftPrize: v1216,
                  paidToFunder: v1288,
                  priceStep: v1219,
                  ticketFeeDenominator: v1220,
                  timeReductionPrices: v1267,
                  timeReductionSecs: v1268,
                  token: v1236,
                  tokenOwnedByUsers: v2290,
                  tokensGivenPerTicket: v1221
                  };
                
                return v2295;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async () => {
                
                const v2295 = {
                  currentPrice: v1289,
                  currentTotal: v1291,
                  currentWinner: v1292,
                  deadline: v1217,
                  deltaDeadline: v1218,
                  discountPercents: v1266,
                  discountPrices: v1265,
                  endTimestamp: v1286,
                  initialPrice: v1215,
                  nftPrize: v1216,
                  paidToFunder: v1288,
                  priceStep: v1219,
                  ticketFeeDenominator: v1220,
                  timeReductionPrices: v1267,
                  timeReductionSecs: v1268,
                  token: v1236,
                  tokenOwnedByUsers: v2290,
                  tokensGivenPerTicket: v1221
                  };
                
                return v2295;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = svs;
              return (await ((async () => {
                
                const v1335 = {
                  currentPrice: v1289,
                  currentTotal: v1291,
                  currentWinner: v1292,
                  deadline: v1217,
                  deltaDeadline: v1218,
                  discountPercents: v1266,
                  discountPrices: v1265,
                  endTimestamp: v1286,
                  initialPrice: v1215,
                  nftPrize: v1216,
                  paidToFunder: v1288,
                  priceStep: v1219,
                  ticketFeeDenominator: v1220,
                  timeReductionPrices: v1267,
                  timeReductionSecs: v1268,
                  token: v1236,
                  tokenOwnedByUsers: v1330,
                  tokensGivenPerTicket: v1221
                  };
                
                return v1335;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc10
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1223, v1236, v1264, v1265, v1266, v1267, v1268] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2304 ) => {
                  const v2304 = stdlib.protect(ctc1, _v2304, null);
                
                const v2305 = stdlib.add(v2304, v1219);
                
                return v2305;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2304 ) => {
                  const v2304 = stdlib.protect(ctc1, _v2304, null);
                
                const v2305 = stdlib.add(v2304, v1219);
                
                return v2305;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = svs;
              return (await ((async (_v1344 ) => {
                  const v1344 = stdlib.protect(ctc1, _v1344, null);
                
                const v1345 = stdlib.add(v1344, v1219);
                
                return v1345;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        participantInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1223, v1236, v1264, v1265, v1266, v1267, v1268] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2296 ) => {
                  const v2296 = stdlib.protect(ctc0, _v2296, null);
                
                const v2297 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2296), null);
                const v2298 = stdlib.fromSome(v2297, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
                const v2299 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2296), null);
                const v2300 = stdlib.fromSome(v2299, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
                const v2301 = {
                  addr: v2296,
                  discountLevel: v2298,
                  timeReductionLevel: v2300
                  };
                
                return v2301;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2296 ) => {
                  const v2296 = stdlib.protect(ctc0, _v2296, null);
                
                const v2297 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2296), null);
                const v2298 = stdlib.fromSome(v2297, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
                const v2299 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2296), null);
                const v2300 = stdlib.fromSome(v2299, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
                const v2301 = {
                  addr: v2296,
                  discountLevel: v2298,
                  timeReductionLevel: v2300
                  };
                
                return v2301;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = svs;
              return (await ((async (_v1336 ) => {
                  const v1336 = stdlib.protect(ctc0, _v1336, null);
                
                const v1337 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1336), null);
                const v1338 = stdlib.fromSome(v1337, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
                const v1339 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1336), null);
                const v1340 = stdlib.fromSome(v1339, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
                const v1341 = {
                  addr: v1336,
                  discountLevel: v1338,
                  timeReductionLevel: v1340
                  };
                
                return v1341;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc11
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1223, v1236, v1264, v1265, v1266, v1267, v1268] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2306 ) => {
                  const v2306 = stdlib.protect(ctc1, _v2306, null);
                
                const v2307 = stdlib.sub(v2306, v1219);
                
                return v2307;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290] = svs;
              return (await ((async (_v2306 ) => {
                  const v2306 = stdlib.protect(ctc1, _v2306, null);
                
                const v2307 = stdlib.sub(v2306, v1219);
                
                return v2307;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = svs;
              return (await ((async (_v1346 ) => {
                  const v1346 = stdlib.protect(ctc1, _v1346, null);
                
                const v1347 = stdlib.sub(v1346, v1219);
                
                return v1347;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc5, ctc6, ctc7, ctc8, ctc9],
      3: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc8, ctc9, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc8, ctc9, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc6, ctc7, ctc8, ctc9, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1]
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Api_buyDiscount0_293: ctc12,
    Api_buyTicket0_293: ctc12,
    Api_buyTimeReduction0_293: ctc12,
    Api_getParticipantStats0_293: ctc12
    });
  const ctc14 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1364 = ctc.selfAddress();
  const v1366 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:393:10:application call to [unknown function] (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyDiscount0_293" (defined at: ./index.rsh:391:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1367 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1364), null);
  const v1368 = stdlib.fromSome(v1367, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
  const v1369 = stdlib.lt(v1368, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  stdlib.assert(v1369, {
    at: './index.rsh:393:19:application',
    fs: ['at ./index.rsh:393:10:application call to [unknown function] (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:393:10:application call to [unknown function] (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyDiscount0_293" (defined at: ./index.rsh:391:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1372 = ['Api_buyDiscount0_293', v1366];
  
  let v1393;
  const v1397 = stdlib.ge(v1368, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  if (v1397) {
    v1393 = stdlib.checkedBigNumberify('./index.rsh:222:14:decimal', stdlib.UInt_max, '249');
    }
  else {
    const v1400 = v1265[v1368];
    v1393 = v1400;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330, v1372],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:394:14:decimal', stdlib.UInt_max, '0'), [[v1393, v1236]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
      
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1466;
          const v1467 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1457), null);
          const v1468 = stdlib.fromSome(v1467, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1469 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          ;
          const v1470 = stdlib.ge(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1470) {
            v1466 = stdlib.checkedBigNumberify('./index.rsh:222:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1473 = v1265[v1468];
            v1466 = v1473;
            }
          ;
          const v1529 = stdlib.add(v1329, v1466);
          const v1533 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1534 = [v1529, v1327, v1533];
          const v1535 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1534);
          sim_r.txns.push({
            amt: v1466,
            kind: 'to',
            tok: v1236
            });
          const v1540 = stdlib.add(v1468, stdlib.checkedBigNumberify('./index.rsh:402:44:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 0, v1457, v1540);
          null;
          const v1544 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1457), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1546 = {
            addr: v1457,
            discountLevel: v1540,
            timeReductionLevel: v1545
            };
          const v1548 = await txn1.getOutput('Api_buyDiscount', 'v1546', ctc14, v1546);
          
          const v3800 = v1286;
          const v3802 = v1288;
          const v3803 = v1289;
          const v3804 = v1290;
          const v3805 = v1291;
          const v3806 = v1292;
          const v3808 = v1535;
          const v3809 = v1300;
          const v3810 = v1535[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v3811 = v3810[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v3812 = v3810[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
          const v3813 = stdlib.sub(v3811, v3812);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
  switch (v1458[0]) {
    case 'Api_buyDiscount0_293': {
      const v1461 = v1458[1];
      undefined /* setApiDetails */;
      let v1466;
      const v1467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
      const v1468 = stdlib.fromSome(v1467, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
      const v1469 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      stdlib.assert(v1469, {
        at: './index.rsh:219:10:application',
        fs: ['at ./index.rsh:394:34:application call to "getDiscountPrice" (defined at: ./index.rsh:217:34:function exp)', 'at ./index.rsh:394:10:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1470 = stdlib.ge(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      if (v1470) {
        v1466 = stdlib.checkedBigNumberify('./index.rsh:222:14:decimal', stdlib.UInt_max, '249');
        }
      else {
        const v1473 = v1265[v1468];
        v1466 = v1473;
        }
      ;
      const v1529 = stdlib.add(v1329, v1466);
      const v1533 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
      const v1534 = [v1529, v1327, v1533];
      const v1535 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1534);
      ;
      const v1540 = stdlib.add(v1468, stdlib.checkedBigNumberify('./index.rsh:402:44:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map0, v1457, v1540);
      null;
      const v1544 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
      const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
      const v1546 = {
        addr: v1457,
        discountLevel: v1540,
        timeReductionLevel: v1545
        };
      const v1548 = await txn1.getOutput('Api_buyDiscount', 'v1546', ctc14, v1546);
      if (v818) {
        stdlib.protect(ctc0, await interact.out(v1461, v1548), {
          at: './index.rsh:392:7:application',
          fs: ['at ./index.rsh:392:7:application call to [unknown function] (defined at: ./index.rsh:392:7:function exp)', 'at ./index.rsh:407:17:application call to "callback" (defined at: ./index.rsh:395:18:function exp)', 'at ./index.rsh:395:18:application call to [unknown function] (defined at: ./index.rsh:395:18:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3800 = v1286;
      const v3802 = v1288;
      const v3803 = v1289;
      const v3804 = v1290;
      const v3805 = v1291;
      const v3806 = v1292;
      const v3808 = v1535;
      const v3809 = v1300;
      const v3810 = v1535[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v3811 = v3810[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v3812 = v3810[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
      const v3813 = stdlib.sub(v3811, v3812);
      return;
      
      break;
      }
    case 'Api_buyTicket0_293': {
      const v1666 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_293': {
      const v1871 = v1458[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_293': {
      const v2076 = v1458[1];
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Api_buyDiscount0_293: ctc12,
    Api_buyTicket0_293: ctc12,
    Api_buyTimeReduction0_293: ctc12,
    Api_getParticipantStats0_293: ctc12
    });
  const ctc14 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1352 = ctc.selfAddress();
  const v1354 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyTicket0_293" (defined at: ./index.rsh:357:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1356 = stdlib.gt(v1220, stdlib.checkedBigNumberify('./index.rsh:360:39:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1356, {
    at: './index.rsh:360:15:application',
    fs: ['at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyTicket0_293" (defined at: ./index.rsh:357:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1359 = stdlib.gt(v1329, v1221);
  stdlib.assert(v1359, {
    at: './index.rsh:361:15:application',
    fs: ['at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyTicket0_293" (defined at: ./index.rsh:357:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1362 = ['Api_buyTicket0_293', v1354];
  
  let v1411;
  const v1412 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1352), null);
  const v1413 = stdlib.fromSome(v1412, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
  const v1414 = stdlib.ge(v1413, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  if (v1414) {
    v1411 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1417 = v1266[v1413];
    v1411 = v1417;
    }
  const v1418 = stdlib.lt(v1411, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v1418, {
    at: './index.rsh:239:10:application',
    fs: ['at ./index.rsh:363:34:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:363:10:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1419 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1411);
  const v1420 = stdlib.mul(v1289, v1419);
  const v1421 = stdlib.div(v1420, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330, v1362],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v1421, [[stdlib.checkedBigNumberify('./index.rsh:363:50:decimal', stdlib.UInt_max, '0'), v1236]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
      
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1686;
          const v1687 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1457), null);
          const v1688 = stdlib.fromSome(v1687, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1689 = stdlib.ge(v1688, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1689) {
            v1686 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1692 = v1266[v1688];
            v1686 = v1692;
            }
          const v1693 = stdlib.lt(v1686, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          ;
          const v1694 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1686);
          const v1695 = stdlib.mul(v1289, v1694);
          const v1696 = stdlib.div(v1695, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1731 = stdlib.add(v1300, v1696);
          sim_r.txns.push({
            amt: v1696,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1738 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1739 = [v1329, v1327, v1738];
          const v1740 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1739);
          ;
          const v1763 = stdlib.gt(v1220, stdlib.checkedBigNumberify('./index.rsh:365:40:decimal', stdlib.UInt_max, '1'));
          ;
          const v1764 = v1740[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '1')];
          const v1765 = v1764[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '0')];
          const v1766 = stdlib.gt(v1765, v1221);
          ;
          let v1767;
          if (v1689) {
            v1767 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1773 = v1266[v1688];
            v1767 = v1773;
            }
          const v1774 = stdlib.lt(v1767, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          ;
          const v1775 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1767);
          const v1776 = stdlib.mul(v1289, v1775);
          const v1777 = stdlib.div(v1776, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1778 = stdlib.div(v1777, v1220);
          const v1779 = stdlib.add(v1289, v1219);
          null;
          const v1783 = stdlib.sub(v1731, v1778);
          sim_r.txns.push({
            amt: v1778,
            kind: 'from',
            to: v1214,
            tok: undefined /* Nothing */
            });
          const v1789 = stdlib.sub(v1765, v1221);
          const v1792 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1')];
          const v1793 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '2')];
          const v1794 = [v1789, v1792, v1793];
          const v1795 = stdlib.Array_set(v1740, stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1'), v1794);
          sim_r.txns.push({
            amt: v1221,
            kind: 'from',
            to: v1457,
            tok: v1236
            });
          let v1796;
          const v1797 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1457), null);
          const v1798 = stdlib.fromSome(v1797, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1799 = stdlib.ge(v1798, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1799) {
            v1796 = stdlib.checkedBigNumberify('./index.rsh:272:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1802 = v1268[v1798];
            v1796 = v1802;
            }
          const v1803 = stdlib.sub(v1218, v1796);
          const v1808 = {
            addr: v1457,
            discountLevel: v1688,
            timeReductionLevel: v1798
            };
          const v1810 = await txn1.getOutput('Api_buyTicket', 'v1808', ctc14, v1808);
          
          const v1818 = stdlib.add(v1290, stdlib.checkedBigNumberify('./index.rsh:383:25:decimal', stdlib.UInt_max, '1'));
          let v1819;
          if (v1689) {
            v1819 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1825 = v1266[v1688];
            v1819 = v1825;
            }
          const v1826 = stdlib.lt(v1819, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          ;
          const v1827 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1819);
          const v1828 = stdlib.mul(v1289, v1827);
          const v1829 = stdlib.div(v1828, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1830 = stdlib.add(v1291, v1829);
          const v1831 = stdlib.add(v1288, v1778);
          const v1832 = stdlib.add(v1286, v1803);
          const v3940 = v1832;
          const v3942 = v1831;
          const v3943 = v1779;
          const v3944 = v1818;
          const v3945 = v1830;
          const v3946 = v1457;
          const v3948 = v1795;
          const v3949 = v1783;
          const v3950 = v1795[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v3951 = v3950[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v3952 = v3950[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
          const v3953 = stdlib.sub(v3951, v3952);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
  switch (v1458[0]) {
    case 'Api_buyDiscount0_293': {
      const v1461 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTicket0_293': {
      const v1666 = v1458[1];
      undefined /* setApiDetails */;
      let v1686;
      const v1687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
      const v1688 = stdlib.fromSome(v1687, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
      const v1689 = stdlib.ge(v1688, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      if (v1689) {
        v1686 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1692 = v1266[v1688];
        v1686 = v1692;
        }
      const v1693 = stdlib.lt(v1686, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1693, {
        at: './index.rsh:239:10:application',
        fs: ['at ./index.rsh:363:34:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:363:10:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1694 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1686);
      const v1695 = stdlib.mul(v1289, v1694);
      const v1696 = stdlib.div(v1695, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
      const v1731 = stdlib.add(v1300, v1696);
      ;
      const v1738 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
      const v1739 = [v1329, v1327, v1738];
      const v1740 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1739);
      ;
      const v1763 = stdlib.gt(v1220, stdlib.checkedBigNumberify('./index.rsh:365:40:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v1763, {
        at: './index.rsh:365:16:application',
        fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1764 = v1740[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '1')];
      const v1765 = v1764[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '0')];
      const v1766 = stdlib.gt(v1765, v1221);
      stdlib.assert(v1766, {
        at: './index.rsh:366:16:application',
        fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1767;
      if (v1689) {
        v1767 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1773 = v1266[v1688];
        v1767 = v1773;
        }
      const v1774 = stdlib.lt(v1767, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1774, {
        at: './index.rsh:239:10:application',
        fs: ['at ./index.rsh:369:55:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1775 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1767);
      const v1776 = stdlib.mul(v1289, v1775);
      const v1777 = stdlib.div(v1776, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
      const v1778 = stdlib.div(v1777, v1220);
      const v1779 = stdlib.add(v1289, v1219);
      null;
      const v1783 = stdlib.sub(v1731, v1778);
      ;
      const v1789 = stdlib.sub(v1765, v1221);
      const v1792 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1')];
      const v1793 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '2')];
      const v1794 = [v1789, v1792, v1793];
      const v1795 = stdlib.Array_set(v1740, stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1'), v1794);
      ;
      let v1796;
      const v1797 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
      const v1798 = stdlib.fromSome(v1797, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
      const v1799 = stdlib.ge(v1798, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      if (v1799) {
        v1796 = stdlib.checkedBigNumberify('./index.rsh:272:14:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1802 = v1268[v1798];
        v1796 = v1802;
        }
      const v1803 = stdlib.sub(v1218, v1796);
      const v1808 = {
        addr: v1457,
        discountLevel: v1688,
        timeReductionLevel: v1798
        };
      const v1810 = await txn1.getOutput('Api_buyTicket', 'v1808', ctc14, v1808);
      if (v818) {
        stdlib.protect(ctc0, await interact.out(v1666, v1810), {
          at: './index.rsh:358:7:application',
          fs: ['at ./index.rsh:358:7:application call to [unknown function] (defined at: ./index.rsh:358:7:function exp)', 'at ./index.rsh:379:17:application call to "callback" (defined at: ./index.rsh:364:18:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1818 = stdlib.add(v1290, stdlib.checkedBigNumberify('./index.rsh:383:25:decimal', stdlib.UInt_max, '1'));
      let v1819;
      if (v1689) {
        v1819 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1825 = v1266[v1688];
        v1819 = v1825;
        }
      const v1826 = stdlib.lt(v1819, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1826, {
        at: './index.rsh:239:10:application',
        fs: ['at ./index.rsh:384:45:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1827 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1819);
      const v1828 = stdlib.mul(v1289, v1827);
      const v1829 = stdlib.div(v1828, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
      const v1830 = stdlib.add(v1291, v1829);
      const v1831 = stdlib.add(v1288, v1778);
      const v1832 = stdlib.add(v1286, v1803);
      const v3940 = v1832;
      const v3942 = v1831;
      const v3943 = v1779;
      const v3944 = v1818;
      const v3945 = v1830;
      const v3946 = v1457;
      const v3948 = v1795;
      const v3949 = v1783;
      const v3950 = v1795[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v3951 = v3950[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v3952 = v3950[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
      const v3953 = stdlib.sub(v3951, v3952);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_293': {
      const v1871 = v1458[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_293': {
      const v2076 = v1458[1];
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Api_buyDiscount0_293: ctc12,
    Api_buyTicket0_293: ctc12,
    Api_buyTimeReduction0_293: ctc12,
    Api_getParticipantStats0_293: ctc12
    });
  const ctc14 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1374 = ctc.selfAddress();
  const v1376 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:421:10:application call to [unknown function] (defined at: ./index.rsh:421:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyTimeReduction0_293" (defined at: ./index.rsh:419:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1377 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1374), null);
  const v1378 = stdlib.fromSome(v1377, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
  const v1379 = stdlib.lt(v1378, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
  stdlib.assert(v1379, {
    at: './index.rsh:421:19:application',
    fs: ['at ./index.rsh:421:10:application call to [unknown function] (defined at: ./index.rsh:421:10:function exp)', 'at ./index.rsh:421:10:application call to [unknown function] (defined at: ./index.rsh:421:10:function exp)', 'at ./index.rsh:306:21:application call to "runApi_buyTimeReduction0_293" (defined at: ./index.rsh:419:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1382 = ['Api_buyTimeReduction0_293', v1376];
  
  let v1432;
  const v1436 = stdlib.ge(v1378, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
  if (v1436) {
    v1432 = stdlib.checkedBigNumberify('./index.rsh:263:14:decimal', stdlib.UInt_max, '249');
    }
  else {
    const v1439 = v1267[v1378];
    v1432 = v1439;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330, v1382],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:422:14:decimal', stdlib.UInt_max, '0'), [[v1432, v1236]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
      
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1909;
          const v1910 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1457), null);
          const v1911 = stdlib.fromSome(v1910, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1912 = stdlib.lt(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          ;
          const v1913 = stdlib.ge(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1913) {
            v1909 = stdlib.checkedBigNumberify('./index.rsh:263:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1916 = v1267[v1911];
            v1909 = v1916;
            }
          ;
          const v1939 = stdlib.add(v1329, v1909);
          const v1943 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1944 = [v1939, v1327, v1943];
          const v1945 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1944);
          sim_r.txns.push({
            amt: v1909,
            kind: 'to',
            tok: v1236
            });
          const v2043 = stdlib.add(v1911, stdlib.checkedBigNumberify('./index.rsh:430:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v1457, v2043);
          null;
          const v2045 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1457), null);
          const v2046 = stdlib.fromSome(v2045, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2049 = {
            addr: v1457,
            discountLevel: v2046,
            timeReductionLevel: v2043
            };
          const v2051 = await txn1.getOutput('Api_buyTimeReduction', 'v2049', ctc14, v2049);
          
          const v4080 = v1286;
          const v4082 = v1288;
          const v4083 = v1289;
          const v4084 = v1290;
          const v4085 = v1291;
          const v4086 = v1292;
          const v4088 = v1945;
          const v4089 = v1300;
          const v4090 = v1945[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v4091 = v4090[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v4092 = v4090[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
          const v4093 = stdlib.sub(v4091, v4092);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
  switch (v1458[0]) {
    case 'Api_buyDiscount0_293': {
      const v1461 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTicket0_293': {
      const v1666 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_293': {
      const v1871 = v1458[1];
      undefined /* setApiDetails */;
      let v1909;
      const v1910 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
      const v1911 = stdlib.fromSome(v1910, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
      const v1912 = stdlib.lt(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      stdlib.assert(v1912, {
        at: './index.rsh:260:10:application',
        fs: ['at ./index.rsh:422:39:application call to "getTimeReductionPrice" (defined at: ./index.rsh:258:39:function exp)', 'at ./index.rsh:422:10:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1913 = stdlib.ge(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      if (v1913) {
        v1909 = stdlib.checkedBigNumberify('./index.rsh:263:14:decimal', stdlib.UInt_max, '249');
        }
      else {
        const v1916 = v1267[v1911];
        v1909 = v1916;
        }
      ;
      const v1939 = stdlib.add(v1329, v1909);
      const v1943 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
      const v1944 = [v1939, v1327, v1943];
      const v1945 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1944);
      ;
      const v2043 = stdlib.add(v1911, stdlib.checkedBigNumberify('./index.rsh:430:54:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v1457, v2043);
      null;
      const v2045 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
      const v2046 = stdlib.fromSome(v2045, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
      const v2049 = {
        addr: v1457,
        discountLevel: v2046,
        timeReductionLevel: v2043
        };
      const v2051 = await txn1.getOutput('Api_buyTimeReduction', 'v2049', ctc14, v2049);
      if (v818) {
        stdlib.protect(ctc0, await interact.out(v1871, v2051), {
          at: './index.rsh:420:7:application',
          fs: ['at ./index.rsh:420:7:application call to [unknown function] (defined at: ./index.rsh:420:7:function exp)', 'at ./index.rsh:435:17:application call to "callback" (defined at: ./index.rsh:423:18:function exp)', 'at ./index.rsh:423:18:application call to [unknown function] (defined at: ./index.rsh:423:18:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v4080 = v1286;
      const v4082 = v1288;
      const v4083 = v1289;
      const v4084 = v1290;
      const v4085 = v1291;
      const v4086 = v1292;
      const v4088 = v1945;
      const v4089 = v1300;
      const v4090 = v1945[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v4091 = v4090[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v4092 = v4090[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
      const v4093 = stdlib.sub(v4091, v4092);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_293': {
      const v2076 = v1458[1];
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
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Api_buyDiscount0_293: ctc12,
    Api_buyTicket0_293: ctc12,
    Api_buyTimeReduction0_293: ctc12,
    Api_getParticipantStats0_293: ctc12
    });
  const ctc14 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc3]]);
  
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
  
  
  const [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1386 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:447:9:application call to [unknown function] (defined at: ./index.rsh:447:9:function exp)', 'at ./index.rsh:306:21:application call to "runApi_getParticipantStats0_293" (defined at: ./index.rsh:447:9:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1390 = ['Api_getParticipantStats0_293', v1386];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330, v1390],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:447:9:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:356:14:decimal', stdlib.UInt_max, '0'), v1236]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
      
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2148 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v2149 = [v1329, v1327, v2148];
          const v2150 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v2149);
          ;
          const v2266 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1457), null);
          const v2267 = stdlib.fromSome(v2266, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2268 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1457), null);
          const v2269 = stdlib.fromSome(v2268, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v2270 = {
            addr: v1457,
            discountLevel: v2267,
            timeReductionLevel: v2269
            };
          const v2272 = await txn1.getOutput('Api_getParticipantStats', 'v2270', ctc14, v2270);
          
          const v4220 = v1286;
          const v4222 = v1288;
          const v4223 = v1289;
          const v4224 = v1290;
          const v4225 = v1291;
          const v4226 = v1292;
          const v4228 = v2150;
          const v4229 = v1300;
          const v4230 = v2150[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v4231 = v4230[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
          const v4232 = v4230[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
          const v4233 = stdlib.sub(v4231, v4232);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn1;
  switch (v1458[0]) {
    case 'Api_buyDiscount0_293': {
      const v1461 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTicket0_293': {
      const v1666 = v1458[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_293': {
      const v1871 = v1458[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_293': {
      const v2076 = v1458[1];
      undefined /* setApiDetails */;
      ;
      const v2148 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
      const v2149 = [v1329, v1327, v2148];
      const v2150 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v2149);
      ;
      const v2266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
      const v2267 = stdlib.fromSome(v2266, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
      const v2268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
      const v2269 = stdlib.fromSome(v2268, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
      const v2270 = {
        addr: v1457,
        discountLevel: v2267,
        timeReductionLevel: v2269
        };
      const v2272 = await txn1.getOutput('Api_getParticipantStats', 'v2270', ctc14, v2270);
      if (v818) {
        stdlib.protect(ctc0, await interact.out(v2076, v2272), {
          at: './index.rsh:447:10:application',
          fs: ['at ./index.rsh:447:10:application call to [unknown function] (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:449:15:application call to "callback" (defined at: ./index.rsh:447:46:function exp)', 'at ./index.rsh:447:46:application call to [unknown function] (defined at: ./index.rsh:447:46:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4220 = v1286;
      const v4222 = v1288;
      const v4223 = v1289;
      const v4224 = v1290;
      const v4225 = v1291;
      const v4226 = v1292;
      const v4228 = v2150;
      const v4229 = v1300;
      const v4230 = v2150[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v4231 = v4230[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
      const v4232 = v4230[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
      const v4233 = stdlib.sub(v4231, v4232);
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
    Api_buyDiscount0_293: ctc4,
    Api_buyTicket0_293: ctc4,
    Api_buyTimeReduction0_293: ctc4,
    Api_getParticipantStats0_293: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1186 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1187 = [v1186, v1186];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1215, v1216, v1217, v1218, v1219, v1220, v1221], secs: v1223, time: v1222, didSend: v60, from: v1214 } = txn1;
  const v1224 = v1187[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0')];
  const v1226 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '1')];
  const v1227 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '2')];
  const v1228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1226, v1227];
  const v1229 = stdlib.Array_set(v1187, stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0'), v1228);
  ;
  ;
  const v1231 = 'Metafomo                        ';
  const v1232 = 'METAFOMO';
  const v1233 = 'https://metalabs.technology                                                                     ';
  const v1234 = '                                ';
  const v1235 = undefined /* TokenNew */;
  const v1236 = await txn1.getOutput('internal', 'v1235', ctc3, v1235);
  const v1237 = [v1216];
  const v2355 = v1237[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v2359 = stdlib.tokenEq(v1236, v2355);
  const v1245 = v2359 ? false : true;
  stdlib.assert(v1245, {
    at: './index.rsh:196:30:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1246 = v1229[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1248 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1249 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
  const v1250 = [stdlib.UInt_max, v1248, v1249];
  const v1251 = stdlib.Array_set(v1229, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1250);
  const v1253 = v1251[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1254 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
  const v1256 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
  const v1257 = [v1254, stdlib.UInt_max, v1256];
  const v1258 = stdlib.Array_set(v1251, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1257);
  const v1259 = v1258[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
  const v1261 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1263 = [v1260, v1261, false];
  const v1264 = stdlib.Array_set(v1258, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1263);
  const v1265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
  const v1266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
  const v1267 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v1268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1271, time: v1270, didSend: v177, from: v1269 } = txn2;
  ;
  const v1272 = v1264[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
  const v1273 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
  const v1274 = stdlib.add(v1273, stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '1'));
  const v1277 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '1')];
  const v1278 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '2')];
  const v1279 = [v1274, v1277, v1278];
  const v1280 = stdlib.Array_set(v1264, stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0'), v1279);
  ;
  const v1281 = stdlib.addressEq(v1214, v1269);
  stdlib.assert(v1281, {
    at: './index.rsh:290:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1285 = stdlib.add(v1223, v1217);
  let v1286 = v1285;
  let v1287 = true;
  let v1288 = stdlib.checkedBigNumberify('./index.rsh:312:5:decimal', stdlib.UInt_max, '0');
  let v1289 = v1215;
  let v1290 = stdlib.checkedBigNumberify('./index.rsh:309:5:decimal', stdlib.UInt_max, '0');
  let v1291 = stdlib.checkedBigNumberify('./index.rsh:310:5:decimal', stdlib.UInt_max, '0');
  let v1292 = v1214;
  let v1293 = v1270;
  let v1299 = v1280;
  let v1300 = stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v1287;})()) {
    const v1326 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
    const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
    const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
    const v1330 = stdlib.sub(v1327, v1329);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1286],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1293,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:462:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2283, time: v2282, didSend: v982, from: v2281 } = txn4;
          
          ;
          const cv1286 = v1286;
          const cv1287 = false;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v2282;
          const cv1299 = v1299;
          const cv1300 = v1300;
          
          await (async () => {
            const v1286 = cv1286;
            const v1287 = cv1287;
            const v1288 = cv1288;
            const v1289 = cv1289;
            const v1290 = cv1290;
            const v1291 = cv1291;
            const v1292 = cv1292;
            const v1293 = cv1293;
            const v1299 = cv1299;
            const v1300 = cv1300;
            
            if (await (async () => {
              
              return v1287;})()) {
              const v1326 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
              const v1330 = stdlib.sub(v1327, v1329);
              sim_r.isHalt = false;
              }
            else {
              const v2286 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v2287 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v2289 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
              const v2290 = stdlib.sub(v2287, v2289);
              sim_r.txns.push({
                amt: v1300,
                kind: 'from',
                to: v1292,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:475:25:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v1292,
                tok: v1216
                });
              null;
              
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc10, ctc11, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc14, ctc1, ctc13, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2283, time: v2282, didSend: v982, from: v2281 } = txn4;
      ;
      const cv1286 = v1286;
      const cv1287 = false;
      const cv1288 = v1288;
      const cv1289 = v1289;
      const cv1290 = v1290;
      const cv1291 = v1291;
      const cv1292 = v1292;
      const cv1293 = v2282;
      const cv1299 = v1299;
      const cv1300 = v1300;
      
      v1286 = cv1286;
      v1287 = cv1287;
      v1288 = cv1288;
      v1289 = cv1289;
      v1290 = cv1290;
      v1291 = cv1291;
      v1292 = cv1292;
      v1293 = cv1293;
      v1299 = cv1299;
      v1300 = cv1300;
      
      continue;
      }
    else {
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn3;
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          undefined /* setApiDetails */;
          let v1466;
          const v1467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v1468 = stdlib.fromSome(v1467, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1469 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          stdlib.assert(v1469, {
            at: './index.rsh:219:10:application',
            fs: ['at ./index.rsh:394:34:application call to "getDiscountPrice" (defined at: ./index.rsh:217:34:function exp)', 'at ./index.rsh:394:10:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1470 = stdlib.ge(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1470) {
            v1466 = stdlib.checkedBigNumberify('./index.rsh:222:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1473 = v1265[v1468];
            v1466 = v1473;
            }
          ;
          const v1529 = stdlib.add(v1329, v1466);
          const v1533 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1534 = [v1529, v1327, v1533];
          const v1535 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1534);
          ;
          const v1540 = stdlib.add(v1468, stdlib.checkedBigNumberify('./index.rsh:402:44:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map0, v1457, v1540);
          null;
          const v1544 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1546 = {
            addr: v1457,
            discountLevel: v1540,
            timeReductionLevel: v1545
            };
          await txn3.getOutput('Api_buyDiscount', 'v1546', ctc7, v1546);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v1535;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          undefined /* setApiDetails */;
          let v1686;
          const v1687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v1688 = stdlib.fromSome(v1687, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1689 = stdlib.ge(v1688, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1689) {
            v1686 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1692 = v1266[v1688];
            v1686 = v1692;
            }
          const v1693 = stdlib.lt(v1686, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1693, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:363:34:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:363:10:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1694 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1686);
          const v1695 = stdlib.mul(v1289, v1694);
          const v1696 = stdlib.div(v1695, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1731 = stdlib.add(v1300, v1696);
          ;
          const v1738 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1739 = [v1329, v1327, v1738];
          const v1740 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1739);
          ;
          const v1763 = stdlib.gt(v1220, stdlib.checkedBigNumberify('./index.rsh:365:40:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1763, {
            at: './index.rsh:365:16:application',
            fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1764 = v1740[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '1')];
          const v1765 = v1764[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '0')];
          const v1766 = stdlib.gt(v1765, v1221);
          stdlib.assert(v1766, {
            at: './index.rsh:366:16:application',
            fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1767;
          if (v1689) {
            v1767 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1773 = v1266[v1688];
            v1767 = v1773;
            }
          const v1774 = stdlib.lt(v1767, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1774, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:369:55:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1775 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1767);
          const v1776 = stdlib.mul(v1289, v1775);
          const v1777 = stdlib.div(v1776, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1778 = stdlib.div(v1777, v1220);
          const v1779 = stdlib.add(v1289, v1219);
          null;
          const v1783 = stdlib.sub(v1731, v1778);
          ;
          const v1789 = stdlib.sub(v1765, v1221);
          const v1792 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1')];
          const v1793 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '2')];
          const v1794 = [v1789, v1792, v1793];
          const v1795 = stdlib.Array_set(v1740, stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1'), v1794);
          ;
          let v1796;
          const v1797 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1798 = stdlib.fromSome(v1797, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1799 = stdlib.ge(v1798, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1799) {
            v1796 = stdlib.checkedBigNumberify('./index.rsh:272:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1802 = v1268[v1798];
            v1796 = v1802;
            }
          const v1803 = stdlib.sub(v1218, v1796);
          const v1808 = {
            addr: v1457,
            discountLevel: v1688,
            timeReductionLevel: v1798
            };
          await txn3.getOutput('Api_buyTicket', 'v1808', ctc7, v1808);
          const v1818 = stdlib.add(v1290, stdlib.checkedBigNumberify('./index.rsh:383:25:decimal', stdlib.UInt_max, '1'));
          let v1819;
          if (v1689) {
            v1819 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1825 = v1266[v1688];
            v1819 = v1825;
            }
          const v1826 = stdlib.lt(v1819, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1826, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:384:45:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1827 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1819);
          const v1828 = stdlib.mul(v1289, v1827);
          const v1829 = stdlib.div(v1828, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1830 = stdlib.add(v1291, v1829);
          const v1831 = stdlib.add(v1288, v1778);
          const v1832 = stdlib.add(v1286, v1803);
          const cv1286 = v1832;
          const cv1287 = true;
          const cv1288 = v1831;
          const cv1289 = v1779;
          const cv1290 = v1818;
          const cv1291 = v1830;
          const cv1292 = v1457;
          const cv1293 = v1459;
          const cv1299 = v1795;
          const cv1300 = v1783;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          undefined /* setApiDetails */;
          let v1909;
          const v1910 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1911 = stdlib.fromSome(v1910, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1912 = stdlib.lt(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          stdlib.assert(v1912, {
            at: './index.rsh:260:10:application',
            fs: ['at ./index.rsh:422:39:application call to "getTimeReductionPrice" (defined at: ./index.rsh:258:39:function exp)', 'at ./index.rsh:422:10:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1913 = stdlib.ge(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1913) {
            v1909 = stdlib.checkedBigNumberify('./index.rsh:263:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1916 = v1267[v1911];
            v1909 = v1916;
            }
          ;
          const v1939 = stdlib.add(v1329, v1909);
          const v1943 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1944 = [v1939, v1327, v1943];
          const v1945 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1944);
          ;
          const v2043 = stdlib.add(v1911, stdlib.checkedBigNumberify('./index.rsh:430:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v1457, v2043);
          null;
          const v2045 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v2046 = stdlib.fromSome(v2045, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2049 = {
            addr: v1457,
            discountLevel: v2046,
            timeReductionLevel: v2043
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v2049', ctc7, v2049);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v1945;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          undefined /* setApiDetails */;
          ;
          const v2148 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v2149 = [v1329, v1327, v2148];
          const v2150 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v2149);
          ;
          const v2266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v2267 = stdlib.fromSome(v2266, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v2269 = stdlib.fromSome(v2268, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v2270 = {
            addr: v1457,
            discountLevel: v2267,
            timeReductionLevel: v2269
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2270', ctc7, v2270);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v2150;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        }}
    
    }
  const v2286 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
  const v2287 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
  const v2289 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
  const v2290 = stdlib.sub(v2287, v2289);
  ;
  ;
  null;
  stdlib.protect(ctc0, await interact.showOutcome(v1292, v1290, v1291, v1289, v1288), {
    at: './index.rsh:478:25:application',
    fs: ['at ./index.rsh:477:13:application call to [unknown function] (defined at: ./index.rsh:477:17:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1293,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:483:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2329, time: v2328, didSend: v1027, from: v2327 } = txn3;
      
      ;
      const v2330 = v2328;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1216
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
    tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc10, ctc11, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2329, time: v2328, didSend: v1027, from: v2327 } = txn3;
  ;
  let v2330 = v2328;
  
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
    const {data: [], secs: v2342, time: v2341, didSend: v1036, from: v2340 } = txn4;
    ;
    const v2343 = stdlib.addressEq(v1214, v2340);
    stdlib.assert(v2343, {
      at: './index.rsh:488:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2330 = v2341;
    
    v2330 = cv2330;
    
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
    Api_buyDiscount0_293: ctc5,
    Api_buyTicket0_293: ctc5,
    Api_buyTimeReduction0_293: ctc5,
    Api_getParticipantStats0_293: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['discountLevel', ctc1], ['timeReductionLevel', ctc1], ['addr', ctc7]]);
  const ctc9 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc11 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc12 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc13]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  
  const v1186 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1187 = [v1186, v1186];
  const v1198 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:176:38:application',
    fs: ['at ./index.rsh:167:14:application call to [unknown function] (defined at: ./index.rsh:167:18:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1199 = v1198.deadline;
  const v1200 = v1198.deltaDeadline;
  const v1201 = v1198.nftPrize;
  const v1202 = v1198.ticketFeeDenominator;
  const v1203 = v1198.ticketPrice;
  const v1204 = v1198.tokensGivenPerTicket;
  const v1205 = v1198.unitPrice;
  const v1213 = stdlib.gt(v1202, stdlib.checkedBigNumberify('./index.rsh:177:34:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1213, {
    at: './index.rsh:177:10:application',
    fs: ['at ./index.rsh:167:14:application call to [unknown function] (defined at: ./index.rsh:167:18:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1203, v1201, v1199, v1200, v1205, v1202, v1204],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:179:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1215, v1216, v1217, v1218, v1219, v1220, v1221], secs: v1223, time: v1222, didSend: v60, from: v1214 } = txn1;
      
      const v1224 = v1187[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0')];
      const v1226 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '1')];
      const v1227 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '2')];
      const v1228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1226, v1227];
      const v1229 = stdlib.Array_set(v1187, stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0'), v1228);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1216
        });
      ;
      const v1231 = 'Metafomo                        ';
      const v1232 = 'METAFOMO';
      const v1233 = 'https://metalabs.technology                                                                     ';
      const v1234 = '                                ';
      const v1235 = stdlib.simTokenNew(sim_r, v1231, v1232, v1233, v1234, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1236 = await txn1.getOutput('internal', 'v1235', ctc3, v1235);
      const v1237 = [v1216];
      const v2355 = v1237[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
      const v2359 = stdlib.tokenEq(v1236, v2355);
      const v1245 = v2359 ? false : true;
      ;
      const v1246 = v1229[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
      const v1248 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
      const v1249 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
      const v1250 = [stdlib.UInt_max, v1248, v1249];
      const v1251 = stdlib.Array_set(v1229, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1250);
      const v1253 = v1251[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
      const v1254 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
      const v1256 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
      const v1257 = [v1254, stdlib.UInt_max, v1256];
      const v1258 = stdlib.Array_set(v1251, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1257);
      const v1259 = v1258[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
      const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
      const v1261 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
      const v1263 = [v1260, v1261, false];
      const v1264 = stdlib.Array_set(v1258, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1263);
      const v1265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
      const v1266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
      const v1267 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
      const v1268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1215, v1216, v1217, v1218, v1219, v1220, v1221], secs: v1223, time: v1222, didSend: v60, from: v1214 } = txn1;
  const v1224 = v1187[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0')];
  const v1226 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '1')];
  const v1227 = v1224[stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '2')];
  const v1228 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1226, v1227];
  const v1229 = stdlib.Array_set(v1187, stdlib.checkedBigNumberify('./index.rsh:179:10:dot', stdlib.UInt_max, '0'), v1228);
  ;
  ;
  const v1231 = 'Metafomo                        ';
  const v1232 = 'METAFOMO';
  const v1233 = 'https://metalabs.technology                                                                     ';
  const v1234 = '                                ';
  const v1235 = undefined /* TokenNew */;
  const v1236 = await txn1.getOutput('internal', 'v1235', ctc3, v1235);
  const v1237 = [v1216];
  const v2355 = v1237[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v2359 = stdlib.tokenEq(v1236, v2355);
  const v1245 = v2359 ? false : true;
  stdlib.assert(v1245, {
    at: './index.rsh:196:30:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1246 = v1229[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1248 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1249 = v1246[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
  const v1250 = [stdlib.UInt_max, v1248, v1249];
  const v1251 = stdlib.Array_set(v1229, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1250);
  const v1253 = v1251[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1254 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
  const v1256 = v1253[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '2')];
  const v1257 = [v1254, stdlib.UInt_max, v1256];
  const v1258 = stdlib.Array_set(v1251, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1257);
  const v1259 = v1258[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '0')];
  const v1261 = v1259[stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1')];
  const v1263 = [v1260, v1261, false];
  const v1264 = stdlib.Array_set(v1258, stdlib.checkedBigNumberify('./index.rsh:196:30:application', stdlib.UInt_max, '1'), v1263);
  const v1265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
  const v1266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
  const v1267 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v1268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
  const txn2 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1223, v1236, v1264, v1265, v1266, v1267, v1268],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1222,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '1'), v1216]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1271, time: v1270, didSend: v177, from: v1269 } = txn2;
      
      ;
      const v1272 = v1264[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
      const v1273 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
      const v1274 = stdlib.add(v1273, stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '1'));
      const v1277 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '1')];
      const v1278 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '2')];
      const v1279 = [v1274, v1277, v1278];
      const v1280 = stdlib.Array_set(v1264, stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0'), v1279);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v1216
        });
      const v1281 = stdlib.addressEq(v1214, v1269);
      ;
      
      const v1285 = stdlib.add(v1223, v1217);
      const v1286 = v1285;
      const v1287 = true;
      const v1288 = stdlib.checkedBigNumberify('./index.rsh:312:5:decimal', stdlib.UInt_max, '0');
      const v1289 = v1215;
      const v1290 = stdlib.checkedBigNumberify('./index.rsh:309:5:decimal', stdlib.UInt_max, '0');
      const v1291 = stdlib.checkedBigNumberify('./index.rsh:310:5:decimal', stdlib.UInt_max, '0');
      const v1292 = v1214;
      const v1293 = v1270;
      const v1299 = v1280;
      const v1300 = stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v1287;})()) {
        const v1326 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
        const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
        const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
        const v1330 = stdlib.sub(v1327, v1329);
        sim_r.isHalt = false;
        }
      else {
        const v2286 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
        const v2287 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
        const v2289 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
        const v2290 = stdlib.sub(v2287, v2289);
        sim_r.txns.push({
          amt: v1300,
          kind: 'from',
          to: v1292,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:475:25:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v1292,
          tok: v1216
          });
        null;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc15, ctc9, ctc10, ctc11, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1271, time: v1270, didSend: v177, from: v1269 } = txn2;
  ;
  const v1272 = v1264[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
  const v1273 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0')];
  const v1274 = stdlib.add(v1273, stdlib.checkedBigNumberify('./index.rsh:290:16:decimal', stdlib.UInt_max, '1'));
  const v1277 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '1')];
  const v1278 = v1272[stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '2')];
  const v1279 = [v1274, v1277, v1278];
  const v1280 = stdlib.Array_set(v1264, stdlib.checkedBigNumberify('./index.rsh:290:10:dot', stdlib.UInt_max, '0'), v1279);
  ;
  const v1281 = stdlib.addressEq(v1214, v1269);
  stdlib.assert(v1281, {
    at: './index.rsh:290:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:294:22:application',
    fs: ['at ./index.rsh:293:7:application call to [unknown function] (defined at: ./index.rsh:293:21:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1285 = stdlib.add(v1223, v1217);
  let v1286 = v1285;
  let v1287 = true;
  let v1288 = stdlib.checkedBigNumberify('./index.rsh:312:5:decimal', stdlib.UInt_max, '0');
  let v1289 = v1215;
  let v1290 = stdlib.checkedBigNumberify('./index.rsh:309:5:decimal', stdlib.UInt_max, '0');
  let v1291 = stdlib.checkedBigNumberify('./index.rsh:310:5:decimal', stdlib.UInt_max, '0');
  let v1292 = v1214;
  let v1293 = v1270;
  let v1299 = v1280;
  let v1300 = stdlib.checkedBigNumberify('./index.rsh:164:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v1287;})()) {
    const v1326 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
    const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
    const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
    const v1330 = stdlib.sub(v1327, v1329);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1286],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1290, v1291, v1292, v1299, v1300, v1326, v1327, v1329, v1330],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1293,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:462:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2283, time: v2282, didSend: v982, from: v2281 } = txn4;
          
          ;
          const cv1286 = v1286;
          const cv1287 = false;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v2282;
          const cv1299 = v1299;
          const cv1300 = v1300;
          
          await (async () => {
            const v1286 = cv1286;
            const v1287 = cv1287;
            const v1288 = cv1288;
            const v1289 = cv1289;
            const v1290 = cv1290;
            const v1291 = cv1291;
            const v1292 = cv1292;
            const v1293 = cv1293;
            const v1299 = cv1299;
            const v1300 = cv1300;
            
            if (await (async () => {
              
              return v1287;})()) {
              const v1326 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v1327 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v1329 = v1326[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
              const v1330 = stdlib.sub(v1327, v1329);
              sim_r.isHalt = false;
              }
            else {
              const v2286 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v2287 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
              const v2289 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
              const v2290 = stdlib.sub(v2287, v2289);
              sim_r.txns.push({
                amt: v1300,
                kind: 'from',
                to: v1292,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:475:25:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v1292,
                tok: v1216
                });
              null;
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc11, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7, ctc15, ctc1, ctc14, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2283, time: v2282, didSend: v982, from: v2281 } = txn4;
      ;
      const cv1286 = v1286;
      const cv1287 = false;
      const cv1288 = v1288;
      const cv1289 = v1289;
      const cv1290 = v1290;
      const cv1291 = v1291;
      const cv1292 = v1292;
      const cv1293 = v2282;
      const cv1299 = v1299;
      const cv1300 = v1300;
      
      v1286 = cv1286;
      v1287 = cv1287;
      v1288 = cv1288;
      v1289 = cv1289;
      v1290 = cv1290;
      v1291 = cv1291;
      v1292 = cv1292;
      v1293 = cv1293;
      v1299 = cv1299;
      v1300 = cv1300;
      
      continue;
      }
    else {
      const {data: [v1458], secs: v1460, time: v1459, didSend: v818, from: v1457 } = txn3;
      switch (v1458[0]) {
        case 'Api_buyDiscount0_293': {
          const v1461 = v1458[1];
          undefined /* setApiDetails */;
          let v1466;
          const v1467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v1468 = stdlib.fromSome(v1467, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1469 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          stdlib.assert(v1469, {
            at: './index.rsh:219:10:application',
            fs: ['at ./index.rsh:394:34:application call to "getDiscountPrice" (defined at: ./index.rsh:217:34:function exp)', 'at ./index.rsh:394:10:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1470 = stdlib.ge(v1468, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1470) {
            v1466 = stdlib.checkedBigNumberify('./index.rsh:222:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1473 = v1265[v1468];
            v1466 = v1473;
            }
          ;
          const v1529 = stdlib.add(v1329, v1466);
          const v1533 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1534 = [v1529, v1327, v1533];
          const v1535 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1534);
          ;
          const v1540 = stdlib.add(v1468, stdlib.checkedBigNumberify('./index.rsh:402:44:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map0, v1457, v1540);
          null;
          const v1544 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1545 = stdlib.fromSome(v1544, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1546 = {
            addr: v1457,
            discountLevel: v1540,
            timeReductionLevel: v1545
            };
          await txn3.getOutput('Api_buyDiscount', 'v1546', ctc8, v1546);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v1535;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_293': {
          const v1666 = v1458[1];
          undefined /* setApiDetails */;
          let v1686;
          const v1687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v1688 = stdlib.fromSome(v1687, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v1689 = stdlib.ge(v1688, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1689) {
            v1686 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1692 = v1266[v1688];
            v1686 = v1692;
            }
          const v1693 = stdlib.lt(v1686, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1693, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:363:34:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:363:10:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:363:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1694 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1686);
          const v1695 = stdlib.mul(v1289, v1694);
          const v1696 = stdlib.div(v1695, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1731 = stdlib.add(v1300, v1696);
          ;
          const v1738 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1739 = [v1329, v1327, v1738];
          const v1740 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1739);
          ;
          const v1763 = stdlib.gt(v1220, stdlib.checkedBigNumberify('./index.rsh:365:40:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1763, {
            at: './index.rsh:365:16:application',
            fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1764 = v1740[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '1')];
          const v1765 = v1764[stdlib.checkedBigNumberify('./index.rsh:366:24:application', stdlib.UInt_max, '0')];
          const v1766 = stdlib.gt(v1765, v1221);
          stdlib.assert(v1766, {
            at: './index.rsh:366:16:application',
            fs: ['at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1767;
          if (v1689) {
            v1767 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1773 = v1266[v1688];
            v1767 = v1773;
            }
          const v1774 = stdlib.lt(v1767, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1774, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:369:55:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1775 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1767);
          const v1776 = stdlib.mul(v1289, v1775);
          const v1777 = stdlib.div(v1776, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1778 = stdlib.div(v1777, v1220);
          const v1779 = stdlib.add(v1289, v1219);
          null;
          const v1783 = stdlib.sub(v1731, v1778);
          ;
          const v1789 = stdlib.sub(v1765, v1221);
          const v1792 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1')];
          const v1793 = v1764[stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '2')];
          const v1794 = [v1789, v1792, v1793];
          const v1795 = stdlib.Array_set(v1740, stdlib.checkedBigNumberify('./index.rsh:374:57:application', stdlib.UInt_max, '1'), v1794);
          ;
          let v1796;
          const v1797 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1798 = stdlib.fromSome(v1797, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1799 = stdlib.ge(v1798, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1799) {
            v1796 = stdlib.checkedBigNumberify('./index.rsh:272:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1802 = v1268[v1798];
            v1796 = v1802;
            }
          const v1803 = stdlib.sub(v1218, v1796);
          const v1808 = {
            addr: v1457,
            discountLevel: v1688,
            timeReductionLevel: v1798
            };
          await txn3.getOutput('Api_buyTicket', 'v1808', ctc8, v1808);
          const v1818 = stdlib.add(v1290, stdlib.checkedBigNumberify('./index.rsh:383:25:decimal', stdlib.UInt_max, '1'));
          let v1819;
          if (v1689) {
            v1819 = stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1825 = v1266[v1688];
            v1819 = v1825;
            }
          const v1826 = stdlib.lt(v1819, stdlib.checkedBigNumberify('./index.rsh:239:15:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1826, {
            at: './index.rsh:239:10:application',
            fs: ['at ./index.rsh:384:45:application call to "getPriceWithDiscount" (defined at: ./index.rsh:237:45:function exp)', 'at ./index.rsh:364:18:application call to [unknown function] (defined at: ./index.rsh:364:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1827 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:240:22:decimal', stdlib.UInt_max, '100'), v1819);
          const v1828 = stdlib.mul(v1289, v1827);
          const v1829 = stdlib.div(v1828, stdlib.checkedBigNumberify('./index.rsh:240:34:decimal', stdlib.UInt_max, '100'));
          const v1830 = stdlib.add(v1291, v1829);
          const v1831 = stdlib.add(v1288, v1778);
          const v1832 = stdlib.add(v1286, v1803);
          const cv1286 = v1832;
          const cv1287 = true;
          const cv1288 = v1831;
          const cv1289 = v1779;
          const cv1290 = v1818;
          const cv1291 = v1830;
          const cv1292 = v1457;
          const cv1293 = v1459;
          const cv1299 = v1795;
          const cv1300 = v1783;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_293': {
          const v1871 = v1458[1];
          undefined /* setApiDetails */;
          let v1909;
          const v1910 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v1911 = stdlib.fromSome(v1910, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v1912 = stdlib.lt(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          stdlib.assert(v1912, {
            at: './index.rsh:260:10:application',
            fs: ['at ./index.rsh:422:39:application call to "getTimeReductionPrice" (defined at: ./index.rsh:258:39:function exp)', 'at ./index.rsh:422:10:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:422:10:function exp)', 'at ./index.rsh:306:21:application call to [unknown function] (defined at: ./index.rsh:306:21:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1913 = stdlib.ge(v1911, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1913) {
            v1909 = stdlib.checkedBigNumberify('./index.rsh:263:14:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1916 = v1267[v1911];
            v1909 = v1916;
            }
          ;
          const v1939 = stdlib.add(v1329, v1909);
          const v1943 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v1944 = [v1939, v1327, v1943];
          const v1945 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v1944);
          ;
          const v2043 = stdlib.add(v1911, stdlib.checkedBigNumberify('./index.rsh:430:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v1457, v2043);
          null;
          const v2045 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v2046 = stdlib.fromSome(v2045, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2049 = {
            addr: v1457,
            discountLevel: v2046,
            timeReductionLevel: v2043
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v2049', ctc8, v2049);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v1945;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_293': {
          const v2076 = v1458[1];
          undefined /* setApiDetails */;
          ;
          const v2148 = v1326[stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '2')];
          const v2149 = [v1329, v1327, v2148];
          const v2150 = stdlib.Array_set(v1299, stdlib.checkedBigNumberify('./index.rsh:306:21:dot', stdlib.UInt_max, '1'), v2149);
          ;
          const v2266 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1457), null);
          const v2267 = stdlib.fromSome(v2266, stdlib.checkedBigNumberify('./index.rsh:215:62:decimal', stdlib.UInt_max, '0'));
          const v2268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1457), null);
          const v2269 = stdlib.fromSome(v2268, stdlib.checkedBigNumberify('./index.rsh:256:72:decimal', stdlib.UInt_max, '0'));
          const v2270 = {
            addr: v1457,
            discountLevel: v2267,
            timeReductionLevel: v2269
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2270', ctc8, v2270);
          const cv1286 = v1286;
          const cv1287 = true;
          const cv1288 = v1288;
          const cv1289 = v1289;
          const cv1290 = v1290;
          const cv1291 = v1291;
          const cv1292 = v1292;
          const cv1293 = v1459;
          const cv1299 = v2150;
          const cv1300 = v1300;
          
          v1286 = cv1286;
          v1287 = cv1287;
          v1288 = cv1288;
          v1289 = cv1289;
          v1290 = cv1290;
          v1291 = cv1291;
          v1292 = cv1292;
          v1293 = cv1293;
          v1299 = cv1299;
          v1300 = cv1300;
          
          continue;
          break;
          }
        }}
    
    }
  const v2286 = v1299[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
  const v2287 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:46:application', stdlib.UInt_max, '1')];
  const v2289 = v2286[stdlib.checkedBigNumberify('./index.rsh:327:58:application', stdlib.UInt_max, '0')];
  const v2290 = stdlib.sub(v2287, v2289);
  ;
  ;
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1293,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:483:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2329, time: v2328, didSend: v1027, from: v2327 } = txn3;
      
      ;
      const v2330 = v2328;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1216
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
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc11, ctc12, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2329, time: v2328, didSend: v1027, from: v2327 } = txn3;
  ;
  let v2330 = v2328;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1214, v1215, v1216, v1217, v1218, v1219, v1220, v1221, v1236, v1265, v1266, v1267, v1268, v1286, v1288, v1289, v1291, v1292, v2290],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2330,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:488:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2342, time: v2341, didSend: v1036, from: v2340 } = txn4;
        
        ;
        const v2343 = stdlib.addressEq(v1214, v2340);
        ;
        const cv2330 = v2341;
        
        await (async () => {
          const v2330 = cv2330;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1216
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
      tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc11, ctc12, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2342, time: v2341, didSend: v1036, from: v2340 } = txn4;
    ;
    const v2343 = stdlib.addressEq(v1214, v2340);
    stdlib.assert(v2343, {
      at: './index.rsh:488:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2330 = v2341;
    
    v2330 = cv2330;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[7],uint64[8],uint64[4],uint64[5])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_participantInfo(address)(uint64,uint64,address)`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[7],uint64[8],uint64[4],uint64[5])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_participantInfo(address)(uint64,uint64,address)`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAmAAEIByBAA2QGsALAAqgCoAIoBLgCMDhIUFjgAsgCoI0GEoWf7bsJhZKk2QyDo/jPDdTz3fELi7iLgQKTub7UBK2Em2MF6AIiigMR+QEmBgEAAQEBAgEDAAj//////////yI1ADEYQRDQJwRkSSJbNQEkWzUCMRkjEkEACjEAKCEYr2ZCEJw2GgAXSUEDqiI1BCM1BkkhGQxAAVxJIRoMQAEwSSEbDEAAbCEbEkQ0AUkhCAxAAEFJJQxAACAlEkQoZClkUCpkUCtkUDUDNhoBFzQDIQVbCRY1B0IQVUgoZClkUCpkUDUDNhoBFzQDIQVbCRY1B0IQOiEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCRY1B0IQHCEaEkQ0AUkhCAxAAHZJJQxAADklEkQ2GgE1/yI0/4gQDFcACUk1/iNbNP4iVU0WIjT/iA/4VwkJSTX+I1s0/iJVTRZQNP9QNQdCD9BINhoBNf8iNP+ID9VXAAlJNf4jWzT+IlVNFiI0/4gPwVcJCUk1/iNbNP4iVU0WUDT/UDUHQg+ZIQYSRDYaATX/IjT/iA+bVwAJSTX+I1s0/iJVTRYiNP+ID4dXCQlJNf4jWzT+IlVNFlA0/1A1B0IPX0khHAxAAA8hHBJEJwQ1/ys0/1BCAxUhGRJEJwQ1/yo0/1BCAwZJIR0MQACCSSEeDEAAbCEeEkQ0AUkhCAxAAEFJJQxAACAlEkQoZClkUCpkUCtkUDUDNhoBFzQDIQVbCBY1B0IO+UgoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IO3iEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IOwCEdEkQnBDX/KTT/UEICfUkhHwxAAA8hHxJEJwQ1/yg0/1BCAmeB6oDUOxJENAFJIQgMQAEOSSUMQACHJRJEKGQpZFAqZFArZFBJNQNXMAg0A1c4CFA0A1cgCFA0A1coCFA0A1dACFA0A1dICFA0A1dQCFA0A4GzAyRYUDQDV1gIUDQDIQkkWFA0AyEKJFhQNAMhFiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQg3+SChkKWRQKmRQSTUDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhFSRYUDQDV1gIUDQDIQkkWFA0AyEPJFhQNAMhCiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQg19IQYSRChkKWRQKmRQSTUDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhFSRYUDQDV1gIUDQDIQkkWFA0AyEPJFhQNAMhCiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQgz5NhoCFzUENhoDNhoBF0khIAxABk9JIQgMQAW2SSUMQACjJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDIQxbNf+ABOIbs6mwMgc0/w9ENANXACA0AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0/yI0AyELWzQDIQlbNAMhD1s0AyEKWzQDIRYhBFgyBjQDISEhIlg0AyEjW0IJ6UglNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJSkpKSkpKSkpKSkpXACA1/yEEWzX+IQ1bNf0hEFs1/CERWzX7IQVbNfohEls1+SETWzX4IRRbNfdXYDg19leYQDX1V9ggNfRX+Cg18yEMWzXyIQtbNfEhCVs18CEPWzXvIQpbNe4hFiEEWDXtISEhIlg17CEjWzXrgZIDISRYNeqBowNbNemBqwNbNehJNQU154AEkE9kSTTnULAyBzTyDEQ05yJVSYECDEABoEkhBgxAAKshBhJEgAgAAAAAAAAI3iIxAIgLX1cACUk15iNbNOYiVU0WIjEAiAtLVwkJSTXmI1s05iJVTRZQMQBQULAiMQCICzFXAAlJNeYjWzTmIlVNFiIxAIgLHVcJCUk15iNbNOYiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08iM08TTwNO807jTtMgY07FcAETToFjTpFlA06lcQAVBQNOtCCGtIIjEAiArBVwkJSTXkI1s05CJVTUk15SEODEQ05SEOD0EAByElNeZCAAs09CQ05QskWBc15jTmNPeICrM05SMINeQxACgxAIgKfik05BZQNeNXAAk041BmgATppO5BMQBQNOQWULCACAAAAAAAAAgBIjEAiApSVwAJSTXjI1s04yJVTRY05BZQMQBQULAiMQCICjVXAAlJNeMjWzTjIlVNFjTkFlAxAFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPIjNPE08DTvNO407TIGNOxXABE06DTmCBY06RZQNOpXEAFQUDTrQgd9SSMMQAGuSCIxAIgJzVcACUk15CNbNOQiVU1JNeUlD0k15EEABiI15kIACzT1JDTlCyRYFzXmNOYhBwxENPAhBzTmCQshBwo14zTjiAmbNOxXABE06BY06RZQNOpXEAFQUDXiNPkjDUQ04lcREUk14SJbSTXgNPgNRDTkQQAGIjXfQgALNPUkNOULJFgXNd803yEHDEQ08CEHNN8JCyEHCkk13jT5CjXdNPA0+gg13IAERcnsxDEAUDTeFlA03BZQsLEisgE03bIII7IQNP+yB7OxIrIBNPiyEiEOshAxALIUNPeyEbMiMQCICO5XCQlJNdkjWzTZIlVNSTXaIQ4PQQAGIjXbQgALNPMkNNoLJFgXNduACAAAAAAAAAcQNOUWNNoWUDEAUFCwNOUWNNoWUDEAUDUHNORBAAYiNdlCAAs09SQ05QskWBc12TTZIQcMRDT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI0+zTbCQgjNPE03Qg03DTvIwg07jTwIQc02QkLIQcKCDEAMgY04lcAETTgNPgJFjThVwgIUDThVxABUFA06zTjCDTdCUIFyUgiMQCICB9XAAlJNeQjWzTkIlVNSTXlJQxENOUlD0EAByElNeZCAAs09iQ05QskWBc15jTmNPeICBM05SMINeQxACgxAIgH3ik05BZQNeNXCQk040xQZoAEVo+HTDEAUDTkFlCwgAgAAAAAAAAGCjTkFiIxAIgHrlcJCUk14yNbNOMiVU0WUDEAUFCwNOQWIjEAiAeRVwkJSTXjI1s04yJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyIzTxNPA07zTuNO0yBjTsVwARNOg05ggWNOkWUDTqVxABUFA060IE3EghCDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABMyZklywNP8xABJENP80AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0AyEMWzQDIQtbNAMhCVs0AyEPWzQDIQohBFg0AyEVWzIGQgXASSMMQAFRSSEGDEAAjCEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0AyEMWzQDIQtbNAMhCVs0AyEPWzQDIQohBFg0AyEVWzIGQgUnIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf8hBFs1/iENWzX9IRBbNfxXaCI1+4AEmouRdLA0+1cAETX6IzT9iAXnNP8xABJENP80/jT9NPw0AyERWzQDIQVbNAMhEls0AyETWzQDgWBbNANXijg0A1fCQDQDgYICIQRYNAOBogIhDVg0AyEUWzT8CCMiNP4iIjT/MgY0+iJbIwgWNPpXCAhQNPpXEAFQNPtXERFQIkIC80giNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf8kWzX+gRBbNf2BGFs1/CEEWzX7IQ1bNfohEFs1+YAE/iY4njT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlCwIReIBP4hJK9JNfhJUEk191cAETX2JK809lcICFA09lcQAVA091cREVA19SEXiATTsSKyASKyEiEOshAyCrIUNP6yEbMhF4gEurEisgEhBrIQgf///////////wGyIiEIsiOACE1FVEFGT01PsiWAIE1ldGFmb21vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiaAYGh0dHBzOi8vbWV0YWxhYnMudGVjaG5vbG9neQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALInMgOyKDIKsimztDw19IAIAAAAAAAABNM09BZQsDT0STXzNP4WIlsTRDT1VxERNfI09VcAEScFNPJXCAhQNPJXEAFQUEk18VcRETXwNPFXABE08FcACCcFUDTwVxABUFBJNe9XERE17jTvVwARNO5XAAg07lcICFAoUFA17YA4AAAAAAAAAAgAAAAAAAAADgAAAAAAAAAUAAAAAAAAABoAAAAAAAAAIAAAAAAAAAAmAAAAAAAAACw17IBAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAUAAAAAAAAAB4AAAAAAAAAKAAAAAAAAAAyAAAAAAAAADwAAAAAAAAARjXrgCAAAAAAAAAACgAAAAAAAAAZAAAAAAAAACgAAAAAAAAAPDXqgCgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQNekxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlAyBxZQNPMWUDTtUDTsUDTrUDTqUDTpUChLAVcAf2cpSwFXf39nKksBV/5MZ0gjNQEyBjUCQgIfNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNe017DXrNeo16TT3QQCeNP5XERFJNegkWzXnNOgiWzXmNOc05gk15TTpNOoWUDTrFlA07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08lA081A09FA09VA09hZQNPgWUDT5FlA0+hZQNPsWUDT8UDT+UDT/FlA06FA05xZQNOYWUDTlFlAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwGB/QKBPlhnSCU1ATIGNQJCAU40/lcREUk16CRbNOgiWwk157EisgE0/7III7IQNPyyB7OxIrIBI7ISIQ6yEDT8shQ067IRs4AE7JthtzT8ULA06TTqFlA06xZQNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPJQNPNQNPRQNPVQNPYWUDT4FlA0+RZQNPsWUDT8UDTnFlAoSwFXAH9nKUsBV39/ZypLAVf+amdIIQY1ATIGNQJCAKk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417Uk17DTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPVQNPZQNPdQNPhQNPkWUDT6FlA0+xZQNPwWUDT9UDT+FlAoSwFXAH9nKUsBV39/ZypLAVf+amdIIQg1ATIGNQJCABwxGSEgEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8JJMRhhQAAFSCEYr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEOEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 4,
  stateSize: 443,
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
                "name": "v1215",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1216",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1219",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1221",
                "type": "uint256"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v1215",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1216",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1219",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1221",
                "type": "uint256"
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
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T22",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T22",
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
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T22",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_293",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1458",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
        "internalType": "struct T22",
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
    "name": "_reach_oe_v1235",
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
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1546",
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
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1808",
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
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2049",
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
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2270",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
            "internalType": "uint256[7]",
            "name": "discountPrices",
            "type": "uint256[7]"
          },
          {
            "internalType": "uint256[8]",
            "name": "discountPercents",
            "type": "uint256[8]"
          },
          {
            "internalType": "uint256[4]",
            "name": "timeReductionPrices",
            "type": "uint256[4]"
          },
          {
            "internalType": "uint256[5]",
            "name": "timeReductionSecs",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct T5",
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
        "name": "v4251",
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
        "name": "v4255",
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
        "internalType": "struct T11",
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
        "name": "v4259",
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
        "internalType": "struct T22",
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
        "internalType": "struct T22",
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
        "internalType": "struct T22",
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
                    "internalType": "enum _enum_T26",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_293",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_293",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1458",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
        "internalType": "struct T22",
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
  Bytecode: `0x608060405260405162006a9e38038062006a9e833981016040819052620000269162000ac5565b600080554360035562000038620006ac565b7fb565db450412cbf0c4daf87eb8287af1a17995e7ea4009f07846fc04759861513383604051620000d592919060006101208201905060018060a01b0380851683528351602084015260208401518051604085015281602082015116606085015260408101516080850152606081015160a0850152608081015160c085015260a081015160e085015260c081015161010085015250509392505050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001429290620005ff565b6060820152620001553415600b62000682565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026f906200084e565b620002809695949392919062000bda565b604051809103906000f0801580156200029d573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f9a9af3dedd3fbd815e28832a005b22dd9147e9aa311e219d515ffee496771e359060200160405180910390a16020828101510151610140820180516001600160a01b039283169052515161012083015162000331929081169116146200032657600162000329565b60005b600c62000682565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003759190600190620005ff565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003be9190600190620005ff565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620004059190600190620005ff565b610200820152610220810180516008908190528151600e6020918201528251601460409182018190528451601a606091820152855160809081018590528651602660a0918201529651602c60c091820152610240890180516000908190528151600a90890181905282518801969096528151601e9086015281516028908501819052825160329b019a909a528151603c93018390529051604660e0909101526102608a018051959095528451601990880152845186019890985292518201929092526102808701805196909652855160049401939093528451909101929092528251600c91015290516010910152620004fd6200085c565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526102808401516101c08401526001600081905543905551620005cf9183910162000d1f565b60405160208183030381529060405260029080519060200190620005f5929190620008d3565b5050505062000e93565b6200060962000962565b60005b60028110156200065f578481600281106200062b576200062b62000b74565b602002015182826002811062000645576200064562000b74565b602002015280620006568162000e2c565b9150506200060c565b508181846002811062000676576200067662000b74565b60200201529392505050565b81620006a85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051610300810190915260006102a082018181526102c083018290526102e0830191909152815260208101620006e362000962565b815260408051606081018252600080825260208281018290529282015291019081526020016200071262000962565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e00162000780620009af565b81526040805160608101825260008082526020828101829052928201529101908152602001620007af62000962565b81526040805160608101825260008082526020828101829052928201529101908152602001620007de62000962565b815260408051606081018252600080825260208281018290529282015291019081526020016200080d62000962565b81526020016200081c620009cd565b81526020016200082b620009eb565b81526020016200083a62000a0a565b81526020016200084962000a28565b905290565b6110878062005a1783390190565b604051806101e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016200080d62000962565b828054620008e19062000e56565b90600052602060002090601f01602090048101928262000905576000855562000950565b82601f106200092057805160ff191683800117855562000950565b8280016001018555821562000950579182015b828111156200095057825182559160200191906001019062000933565b506200095e92915062000a46565b5090565b60405180604001604052806002905b62000998604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009715790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060e001604052806007906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b5b808211156200095e576000815560010162000a47565b604080519081016001600160401b038111828210171562000a8e57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b038111828210171562000a8e57634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000ada57600080fd5b62000ae462000a5d565b8351815260e0601f198301121562000afb57600080fd5b62000b0562000a94565b6020850151815260408501519092506001600160a01b038116811462000b2a57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000bb25760208185018101518683018201520162000b94565b8181111562000bc5576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000bef60c083018962000b8a565b828103602084015262000c03818962000b8a565b9050828103604084015262000c19818862000b8a565b9050828103606084015262000c2f818762000b8a565b6080840195909552505060a00152949350505050565b8060005b600281101562000c8557815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000c49565b50505050565b8060005b600781101562000c8557815184526020938401939091019060010162000c8f565b8060005b600881101562000c8557815184526020938401939091019060010162000cb4565b8060005b600481101562000c8557815184526020938401939091019060010162000cd9565b8060005b600581101562000c8557815184526020938401939091019060010162000cfe565b81516001600160a01b03168152610500810160208301516020830152604083015162000d5660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000db1828501826001600160a01b03169052565b50506101408084015162000dc88285018262000c45565b505061016083015162000de061020084018262000c8b565b5061018083015162000df76102e084018262000cb0565b506101a083015162000e0e6103e084018262000cd5565b506101c083015162000e2561046084018262000cfa565b5092915050565b600060001982141562000e4f57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000e6b57607f821691505b6020821081141562000e8d57634e487b7160e01b600052602260045260246000fd5b50919050565b614b748062000ea36000396000f3fe6080604052600436106101015760003560e01c80637a3678dd1161008f578063ab53f2c611610061578063ab53f2c614610243578063bf2c5b2414610266578063cadc2e7a14610279578063e73216b514610299578063eef5632c146102a157005b80637a3678dd146101d957806383230757146101fb5780638e31476914610210578063a55605961461022357005b80633bc5b7bf116100d35780633bc5b7bf146101765780636579ece6146101a35780636cd6de3a146101b65780636cdcb9df146101be57806373b4522c146101c657005b80631e93b0f11461010a5780632b10758a1461012e5780632c10a1591461014357806330a94db41461015657005b3661010857005b005b34801561011657600080fd5b506003545b6040519081526020015b60405180910390f35b6101366102c1565b6040516101259190613b8a565b610108610151366004613bb4565b610311565b34801561016257600080fd5b5061011b610171366004613bcc565b610335565b34801561018257600080fd5b50610196610191366004613bfd565b61058c565b6040516101259190613c30565b6101086101b1366004613c67565b6105b8565b6101366105d8565b61013661062b565b6101086101d4366004613bb4565b610681565b3480156101e557600080fd5b506101ee6106a1565b6040516101259190613d05565b34801561020757600080fd5b5060015461011b565b61010861021e366004613bb4565b610b1b565b34801561022f57600080fd5b5061011b61023e366004613bcc565b610b3b565b34801561024f57600080fd5b50610258610d86565b604051610125929190613e4c565b610108610274366004613bb4565b610e23565b34801561028557600080fd5b50610196610294366004613bfd565b610e43565b610136610e69565b3480156102ad57600080fd5b506101366102bc366004613bfd565b610ebc565b6102c96133f4565b6102d161341e565b6102d961345d565b6102e1613477565b6000602082810182905290825260408051808301909152828152908301526103098284611198565b505051919050565b61031961341e565b61033161032b36849003840184613f7f565b82612247565b5050565b6000600160005414156103f25760006002805461035190613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90613fd4565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b50505050508060200190518101906103e29190614244565b90506103f06000600a612550565b505b600360005414156104b65760006002805461040c90613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461043890613fd4565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b505050505080602001905181019061049d919061433f565b90508060a00151836104af919061447f565b9392505050565b600660005414156104d05760006002805461040c90613fd4565b6007600054141561057b576000600280546104ea90613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461051690613fd4565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061049d9190614496565b6105876000600a612550565b919050565b60408051606081018252600080825260208201819052918101919091526105b282612576565b92915050565b6105c061341e565b6103316105d23684900384018461461a565b82611198565b6105e06133f4565b6105e861341e565b6105f061345d565b6105f8613477565b6000606082015260028152604080516020808201909252828152908301526106208284611198565b505060400151919050565b6106336133f4565b61063b61341e565b61064361345d565b61064b613477565b6000604082015260018181905250604080516020808201909252828152908301526106768284611198565b505060200151919050565b61068961341e565b61033161069b36849003840184613f7f565b82612648565b6106a96134a7565b60016000541415610764576000600280546106c390613fd4565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef90613fd4565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b50505050508060200190518101906107549190614244565b905061076260006007612550565b505b6003600054141561092d5760006002805461077e90613fd4565b80601f01602080910402602001604051908101604052809291908181526020018280546107aa90613fd4565b80156107f75780601f106107cc576101008083540402835291602001916107f7565b820191906000526020600020905b8154815290600101906020018083116107da57829003601f168201915b505050505080602001905181019061080f919061433f565b905061081961355f565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526102408401518351909101526101008084015183519083169101526101e080840151835161012090810191909152610200808601518551610140908101919091526102208088015187519616610160968701526101c0808901518851610180908101919091526101a0808b01518a519091015294890151885190910152908701518651909401939093529285015184519093019290925292015181519092019190915251919050565b600660005414156109475760006002805461077e90613fd4565b60076000541415610b0c5760006002805461096190613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461098d90613fd4565b80156109da5780601f106109af576101008083540402835291602001916109da565b820191906000526020600020905b8154815290600101906020018083116109bd57829003601f168201915b50505050508060200190518101906109f29190614496565b90506109fc61355f565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526103008401518351909101526101008084015183519083169101526101e0808401518351610120908101919091526102208086015185516101409081019190915261024087015186519516610160958601526101c0808801518751610180908101919091526101a0808a015189519091015293880151875190910152860151855190930192909252918401518351610200015292015181519092019190915251919050565b610b1860006007612550565b90565b610b2361341e565b610331610b3536849003840184613f7f565b8261286f565b600060016000541415610bf857600060028054610b5790613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8390613fd4565b8015610bd05780601f10610ba557610100808354040283529160200191610bd0565b820191906000526020600020905b815481529060010190602001808311610bb357829003601f168201915b5050505050806020019051810190610be89190614244565b9050610bf660006008612550565b505b60036000541415610cb557600060028054610c1290613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3e90613fd4565b8015610c8b5780601f10610c6057610100808354040283529160200191610c8b565b820191906000526020600020905b815481529060010190602001808311610c6e57829003601f168201915b5050505050806020019051810190610ca3919061433f565b90508060a00151836104af91906146ce565b60066000541415610ccf57600060028054610c1290613fd4565b60076000541415610d7a57600060028054610ce990613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1590613fd4565b8015610d625780601f10610d3757610100808354040283529160200191610d62565b820191906000526020600020905b815481529060010190602001808311610d4557829003601f168201915b5050505050806020019051810190610ca39190614496565b61058760006008612550565b600060606000546002808054610d9b90613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc790613fd4565b8015610e145780601f10610de957610100808354040283529160200191610e14565b820191906000526020600020905b815481529060010190602001808311610df757829003601f168201915b50505050509050915091509091565b610e2b61341e565b610331610e3d36849003840184613f7f565b8261299c565b60408051606081018252600080825260208201819052918101919091526105b282612c03565b610e716133f4565b610e7961341e565b610e8161345d565b610e89613477565b600060808201526003815260408051602080820190925282815290830152610eb18284611198565b505060600151919050565b610ec46133f4565b60016000541415610f7f57600060028054610ede90613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0a90613fd4565b8015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b5050505050806020019051810190610f6f9190614244565b9050610f7d60006009612550565b505b600360005414156110c757600060028054610f9990613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc590613fd4565b80156110125780601f10610fe757610100808354040283529160200191611012565b820191906000526020600020905b815481529060010190602001808311610ff557829003601f168201915b505050505080602001905181019061102a919061433f565b9050611034613572565b600161103f85612576565b51600181111561105157611051613c1a565b1461105d57600061106b565b61106684612576565b604001515b815152600161107985612c03565b51600181111561108b5761108b613c1a565b146110975760006110a5565b6110a084612c03565b604001515b81516020015280516001600160a01b0390941660409094019390935250505190565b600660005414156110e157600060028054610f9990613fd4565b6007600054141561118c576000600280546110fb90613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461112790613fd4565b80156111745780601f1061114957610100808354040283529160200191611174565b820191906000526020600020905b81548152906001019060200180831161115757829003601f168201915b505050505080602001905181019061102a9190614496565b61058760006009612550565b6111a86007600054146028612550565b81516111c39015806111bc57508251600154145b6029612550565b6000808055600280546111d590613fd4565b80601f016020809104026020016040519081016040528092919081815260200182805461120190613fd4565b801561124e5780601f106112235761010080835404028352916020019161124e565b820191906000526020600020905b81548152906001019060200180831161123157829003601f168201915b50505050508060200190518101906112669190614496565b9050611270613585565b611282826101a001514210602a612550565b7f242d0f7e3a9a68aa11fe32a200230b9d2a696711bf4e9a0f7175678e9b0325b833856040516112b39291906146e6565b60405180910390a160006020850151515160038111156112d5576112d5613c1a565b14156116235760016112e633612576565b5160018111156112f8576112f8613c1a565b14611304576000611312565b61130d33612576565b604001515b60208201819052611327906007116019612550565b600781602001511061133c5760f9815261135f565b81610120015181602001516007811061135757611357614758565b602002015181525b61136b3415601a612550565b80516102e083015161137d91906146ce565b60408083018051929092526102c08401518251602001526102a0840151810151915191151591015261010082015181516113c4916113bd91339190612c90565b601b612550565b600181602001516113d591906146ce565b6060820190815233600081815260046020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527f049bed53fc19127a68e64c896e243a07b2c555296c04f396e70a2b7556edee6e910160405180910390a16060810151608082015152600161144f33612c03565b51600181111561146157611461613c1a565b1461146d57600061147b565b61147633612c03565b604001515b60808201805160200191909152805133604091820152905190517f97e01dc40a5f8578006f12430e3d689d20439ef2ee7e04e823179912417f8d41916114c091613b8a565b60405180910390a1608081015183526114d761370a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c015181518801526101e08c01518151909601959095526102008b01518551909401939093526102208a0151845190920191909152610240890151835196169501949094525143930192909252610260850151918401516115f9929190612ca6565b60208201805161010001919091526102808401519051610120015261161d81612d1a565b50612241565b600160208501515151600381111561163d5761163d613c1a565b1415611c7357600161164e33612576565b51600181111561166057611660613c1a565b1461166c57600061167a565b61167533612576565b604001515b60c08201819052600711801560e083015261169b57600060a08201526116c1565b8161014001518160c00151600881106116b6576116b6614758565b602002015160a08201525b6116d360648260a0015110601c612550565b60648160a0015160646116e6919061447f565b836101e001516116f6919061476e565b611700919061478d565b6101008201819052611715903414601d612550565b6102e082015161012082018051919091526102c08301518151602001526102a08301516040908101518251901515910152610260830151905161175b9190600190612ca6565b81610140018190525061177f611778338461010001516000612c90565b601e612550565b61179160018360c0015111601f612550565b60e0820151610140820151602090810151516117ae921090612550565b8060e00151156117c55760006101608201526117ec565b8161014001518160c00151600881106117e0576117e0614758565b60200201516101608201525b6117ff6064826101600151106021612550565b60648161016001516064611813919061447f565b836101e00151611823919061476e565b61182d919061478d565b610180820181905260c08301516118439161478d565b6101a082015260a08201516101e083015161185e91906146ce565b6101c082018190526101808201516040805133815260208101929092528101919091527f3698508a0af4c7883b38082eb105938584bdb53436931b82abc2c338128794d09060600160405180910390a181516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156118ec573d6000803e3d6000fd5b5060e08201516101408201516020015151611907919061447f565b6101e0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015261010082015160e0830151611950919033906130b5565b600161195b33612c03565b51600181111561196d5761196d613c1a565b14611979576000611987565b61198233612c03565b604001515b61022082018190526004116119a35760006102008201526119cb565b816101800151816102200151600581106119bf576119bf614758565b60200201516102008201525b60c08101516102408201805191909152610220820151815160200152805133604091820152905190517f838870a2cb3d51c011ee93851dfe218958d21a860b7e86889858fbca0d8e5b0991611a1f91613b8a565b60405180910390a1610240810151602084015260e081015115611a49576000610260820152611a70565b8161014001518160c0015160088110611a6457611a64614758565b60200201516102608201525b611a836064826102600151106022612550565b611a8b61370a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e0808601518451909101526101008086015184519316920191909152610120808501518351909101526101408085015183519091015261016080850151835190910152610180808501518351909101526102008301519051611b4d919061447f565b836101a00151611b5d91906146ce565b6020808301805192909252905160019101526101a08201516101c0840151611b8591906146ce565b602082018051604001919091526101c0830151905160600152610200830151611bb0906001906146ce565b602082015160800152610260820151606490611bcc908261447f565b846101e00151611bdc919061476e565b611be6919061478d565b836102200151611bf691906146ce565b60208201805160a0019190915280513360c090910152514360e0909101526101408201516101e0830151611c2d9190600190612ca6565b81602001516101000181905250816101a00151826101000151846102800151611c5691906146ce565b611c60919061447f565b6020820151610120015261161d81612d1a565b6002602085015151516003811115611c8d57611c8d613c1a565b1415611fcc576001611c9e33612c03565b516001811115611cb057611cb0613c1a565b14611cbc576000611cca565b611cc533612c03565b604001515b6102a08201819052611ce0906004116023612550565b6004816102a0015110611cfa5760f9610280820152611d22565b816101600151816102a0015160048110611d1657611d16614758565b60200201516102808201525b611d2e34156024612550565b806102800151826102e00151611d4491906146ce565b6102c08083018051929092528301518151602001526102a08301516040908101519151911515910152610100820151610280820151611d9091611d8991339190612c90565b6025612550565b6001816102a00151611da291906146ce565b6102e0820190815233600081815260056020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527fa713e261ccde52235a352fbddb3afe2103de7321502fbf5721c5b46e2e903b85910160405180910390a16001611e1233612576565b516001811115611e2457611e24613c1a565b14611e30576000611e3e565b611e3933612576565b604001515b61030082018051919091526102e0820151815160200152805133604091820152905190517f9e543f2de2a711cd0459fecd1300d845969c0e4064e0780002724e0046bd999591611e8d91613b8a565b60405180910390a16103008101516040840152611ea861370a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c01518151909701969096526101e08b01518651909501949094526102008a01518551909301929092526102208901518451909101526102408801518351951694019390935251439201919091526102608401516102c08401516115f99290612ca6565b6003602085015151516003811115611fe657611fe6613c1a565b141561224157611ff834156026612550565b6102e082015161032082018051919091526102c08301518151602001526102a08301516040908101519151911515910152610100820151612047906120409033906000612c90565b6027612550565b600161205233612576565b51600181111561206457612064613c1a565b1461207057600061207e565b61207933612576565b604001515b61034082015152600161209033612c03565b5160018111156120a2576120a2613c1a565b146120ae5760006120bc565b6120b733612c03565b604001515b6103408201805160200191909152805133604091820152905190517f6c41b6ed9a40887f04bd2c5be3a90e701be2addc87102f29f65f209d3e8eccdb9161210291613b8a565b60405180910390a1610340810151606084015261211d61370a565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c01518151909701969096526101e08b01518651909501949094526102008a01518551909301929092526102208901518451909101526102408801518351951694019390935251439201919091526102608401516103208401516115f99290612ca6565b50505050565b6122576001600054146010612550565b815161227290158061226b57508251600154145b6011612550565b60008080556002805461228490613fd4565b80601f01602080910402602001604051908101604052809291908181526020018280546122b090613fd4565b80156122fd5780601f106122d2576101008083540402835291602001916122fd565b820191906000526020600020905b8154815290600101906020018083116122e057829003601f168201915b50505050508060200190518101906123159190614244565b905061233e60408051608081018252600060208201818152928201819052606082015290815290565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405161236f9291906147af565b60405180910390a16123833415600d612550565b6101408201515151612397906001906146ce565b815152610140820180515160209081015183519091015251516040908101518251901515908201528201516123da906123d39033906001612c90565b600e612550565b81516123f2906001600160a01b03163314600f612550565b6123fa61370a565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e0808601518451909101526101208086015184519316610100938401526101608087015185519092019190915261018080870151855161014001526101a08701518551909201919091526101c086015184519091015251908401516124bf91906146ce565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052815160a001819052845182516001600160a01b0390911660c09091015290514360e09091015261014084015183516125289290612ca6565b60208201805161010001919091525160006101209091015261254981612d1a565b5050505050565b816103315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156125c2576125c2613c1a565b1415612639576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561260357612603613c1a565b600181111561261457612614613c1a565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6126586003600054146013612550565b815161267390158061266c57508251600154145b6014612550565b60008080556002805461268590613fd4565b80601f01602080910402602001604051908101604052809291908181526020018280546126b190613fd4565b80156126fe5780601f106126d3576101008083540402835291602001916126fe565b820191906000526020600020905b8154815290600101906020018083116126e157829003601f168201915b5050505050806020019051810190612716919061433f565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633846040516127499291906147af565b60405180910390a161275d34156012612550565b61276561372a565b815181516001600160a01b0391821690526020808401518351820152604080850151845190841691015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e080850151845190910152610100808501518451908416910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a0808501518451909101526101c0808501518451909101526101e08085015184519091015261020080850151845190910152610220808501518451931692019190915261024080840151835190910152810151439052612241816130ce565b61287f6006600054146017612550565b815161289a90158061289357508251600154145b6018612550565b6000808055600280546128ac90613fd4565b80601f01602080910402602001604051908101604052809291908181526020018280546128d890613fd4565b80156129255780601f106128fa57610100808354040283529160200191612925565b820191906000526020600020905b81548152906001019060200180831161290857829003601f168201915b505050505080602001905181019061293d919061433f565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33846040516129709291906147af565b60405180910390a161298434156015612550565b805161275d906001600160a01b031633146016612550565b6129ac600760005414602c612550565b81516129c79015806129c057508251600154145b602d612550565b6000808055600280546129d990613fd4565b80601f0160208091040260200160405190810160405280929190818152602001828054612a0590613fd4565b8015612a525780601f10612a2757610100808354040283529160200191612a52565b820191906000526020600020905b815481529060010190602001808311612a3557829003601f168201915b5050505050806020019051810190612a6a9190614496565b9050612a7f816101a00151421015602e612550565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051612ab09291906147af565b60405180910390a1612ac43415602b612550565b612acc61370a565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a01518951820152610100808b01518a51908a1690820152610120808c01518b51820152610140808d01518c5190910152610160808d01518c5190910152610180808d01518c51909101526101a08c0151898c01805191909152805160009a01999099526101c08c01518951909801979097526101e08b01518851909601959095526102008a01518751909401939093526102208901518651909201919091526102408801518551961695019490945282514394019390935261026085015182519093019290925261028084015190519091015261224181612d1a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612c4f57612c4f613c1a565b1415612639576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561260357612603613c1a565b6000612c9e8385308561320e565b949350505050565b612cae613758565b60005b6002811015612cfa57848160028110612ccc57612ccc614758565b6020020151828260028110612ce357612ce3614758565b602002015280612cf2816147d7565b915050612cb1565b5081818460028110612d0e57612d0e614758565b60200201529392505050565b604080518082019091526000808252602082015281602001516020015115612eda5760208281015161010001518101518051910151612d59919061447f565b8152612d636137a3565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015181890152895160e090810151908901528951610100908101518816818a01528a5161012090810151818b01528b5161014090810151908b01528b5161016090810151908b01528b5161018090810151908b0152878c018051516101a08c015280518801516101c08c01528051909601516101e08b01528551909401516102008a01528451909201516102208901528351015190951661024087015281518501516102608701528151015161028086015280518401518301516102a086015280518401518301518301516102c08601525190920151810151516102e084015283516103008401526007600055436001559051612eb691839101614836565b604051602081830303815290604052600290805190602001906122419291906138c5565b60208281015161010001518101518051910151612ef7919061447f565b60208083019190915282015160c0810151610120909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612f45573d6000803e3d6000fd5b50612f62826000015160400151836020015160c0015160016130b5565b60208083015160c001516040516001600160a01b0390911681527f10712c47b269c9df1f602c16156b1d6404c0b81b5bbebfe8e2d13e08bda50b68910160405180910390a1612faf613949565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190860152865160a09081015181870152875160c09081015181880152885160e09081015190880152885161010090810151871690880152885161012090810151908801528851610140908101519088015288516101609081015190880152885161018090810151908801528489018051516101a089015280518501516101c08901528051909301516101e088015282519091015161020087015290510151909216610220840152838101516102408401526003600055436001559051612eb6918391016149d5565b6130c08383836132e8565b6130c957600080fd5b505050565b6130d6613949565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101518416908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519085015284516101c0908101519085015284516101e0908101519085015284516102009081015190850152845161022090810151909316928401929092528351610240908101519084015260066000554360015590516131ea918391016149d5565b604051602081830303815290604052600290805190602001906130c99291906138c5565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161327591614b05565b60006040518083038185875af1925050503d80600081146132b2576040519150601f19603f3d011682016040523d82523d6000602084013e6132b7565b606091505b50915091506132c8828260016133b9565b50808060200190518101906132dd9190614b21565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161334791614b05565b60006040518083038185875af1925050503d8060008114613384576040519150601f19603f3d011682016040523d82523d6000602084013e613389565b606091505b509150915061339a828260026133b9565b50808060200190518101906133af9190614b21565b9695505050505050565b606083156133c85750816104af565b8251156133d85782518084602001fd5b60405163100960cb60e01b81526004810183905260240161256d565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b60405180608001604052806134316133f4565b815260200161343e6133f4565b815260200161344b6133f4565b81526020016134586133f4565b905290565b604051806040016040528060008152602001613458613a17565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b60405180610240016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001613538613a2a565b8152602001613545613a48565b8152602001613552613a67565b8152602001613458613a85565b60405180602001604052806134586134a7565b60405180602001604052806134586133f4565b60405180610360016040528060008152602001600081526020016135c5604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016135d96133f4565b8152602001600081526020016000815260200160001515815260200160008152602001613622604051806060016040528060008152602001600081526020016000151581525090565b815260200161362f613758565b815260200160008152602001600081526020016000815260200160008152602001613676604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600081526020016136916133f4565b81526020016000815260200160008152602001600081526020016136d1604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016136e56133f4565b815260408051606081018252600080825260208281018290529282015291019061344b565b604051806040016040528061371d613aa3565b8152602001613458613b11565b604051806040016040528061373d613949565b81526020016134586040518060200160405280600081525090565b60405180604001604052806002905b61378d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816137675790505090565b60405180610320016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613811613a2a565b815260200161381e613a48565b815260200161382b613a67565b8152602001613838613a85565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613878613758565b8152602001600081526020016138aa604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b8280546138d190613fd4565b90600052602060002090601f0160209004810192826138f35760008555613939565b82601f1061390c57805160ff1916838001178555613939565b82800160010185558215613939579182015b8281111561393957825182559160200191906001019061391e565b50613945929150613b75565b5090565b60405180610260016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016139b7613a2a565b81526020016139c4613a48565b81526020016139d1613a67565b81526020016139de613a85565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280613458613477565b6040518060e001604052806007906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b604051806101a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613538613a2a565b604051806101400160405280600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001613b68613758565b8152602001600081525090565b5b808211156139455760008155600101613b76565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b600060408284031215613bc657600080fd5b50919050565b600060208284031215613bde57600080fd5b5035919050565b6001600160a01b0381168114613bfa57600080fd5b50565b600060208284031215613c0f57600080fd5b81356104af81613be5565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110613c4757613c47613c1a565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215613bc657600080fd5b8060005b6007811015612241578151845260209384019390910190600101613c7d565b8060005b6008811015612241578151845260209384019390910190600101613ca0565b8060005b6004811015612241578151845260209384019390910190600101613cc3565b8060005b6005811015612241578151845260209384019390910190600101613ce6565b60006104c0820190508251825260208301516020830152604083015160408301526060830151613d4060608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151613d84828501826001600160a01b03169052565b505061012083810151908301526101408084015190830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c080840151613dd982850182613c79565b50506101e0830151613def6102a0840182613c9c565b50610200830151613e046103a0840182613cbf565b50610220830151613e19610420840182613ce2565b5092915050565b60005b83811015613e3b578181015183820152602001613e23565b838111156122415750506000910152565b8281526040602082015260008251806040840152613e71816060850160208701613e20565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101e081016001600160401b0381118282101715613ebf57613ebf613e86565b60405290565b60405161026081016001600160401b0381118282101715613ebf57613ebf613e86565b60405161032081016001600160401b0381118282101715613ebf57613ebf613e86565b604080519081016001600160401b0381118282101715613ebf57613ebf613e86565b604051602081016001600160401b0381118282101715613ebf57613ebf613e86565b60405160a081016001600160401b0381118282101715613ebf57613ebf613e86565b8015158114613bfa57600080fd5b600060408284031215613f9157600080fd5b604051604081018181106001600160401b0382111715613fb357613fb3613e86565b604052823581526020830135613fc881613f71565b60208201529392505050565b600181811c90821680613fe857607f821691505b60208210811415613bc657634e487b7160e01b600052602260045260246000fd5b805161058781613be5565b60006060828403121561402657600080fd5b604051606081018181106001600160401b038211171561404857614048613e86565b80604052508091508251815260208301516020820152604083015161406c81613f71565b6040919091015292915050565b600082601f83011261408a57600080fd5b604051604081018181106001600160401b03821117156140ac576140ac613e86565b6040528060c08401858111156140c157600080fd5b845b818110156140e5576140d58782614014565b83526020909201916060016140c3565b509195945050505050565b600082601f83011261410157600080fd5b60405160e081018181106001600160401b038211171561412357614123613e86565b6040528060e084018581111561413857600080fd5b845b818110156140e557805183526020928301920161413a565b600082601f83011261416357600080fd5b6040516101008082018281106001600160401b038211171561418757614187613e86565b6040528301818582111561419a57600080fd5b845b828110156140e557805182526020918201910161419c565b600082601f8301126141c557600080fd5b604051608081018181106001600160401b03821117156141e7576141e7613e86565b60405280608084018581111561413857600080fd5b600082601f83011261420d57600080fd5b60405160a081018181106001600160401b038211171561422f5761422f613e86565b6040528060a084018581111561413857600080fd5b6000610500828403121561425757600080fd5b61425f613e9c565b61426883614009565b81526020830151602082015261428060408401614009565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206142d1818501614009565b908201526101406142e485858301614079565b908201526142f68461020085016140f0565b61016082015261430a846102e08501614152565b61018082015261431e846103e085016141b4565b6101a08201526143328461046085016141fc565b6101c08201529392505050565b60006104e0828403121561435257600080fd5b61435a613ec5565b61436383614009565b81526020830151602082015261437b60408401614009565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006143c0818501614009565b908201526101206143d3858583016140f0565b908201526102006143e685858301614152565b6101408301526143fa8561030086016141b4565b61016083015261440e8561038086016141fc565b6101808301526104208401516101a08301526104408401516101c08301526104608401516101e08301526104808401519082015261444f6104a08401614009565b6102208201526104c0929092015161024083015250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561449157614491614469565b500390565b600061068082840312156144a957600080fd5b6144b1613ee8565b6144ba83614009565b8152602083015160208201526144d260408401614009565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100614517818501614009565b9082015261012061452a858583016140f0565b9082015261020061453d85858301614152565b610140830152610300614552868287016141b4565b6101608401526145668661038087016141fc565b6101808401526104208501516101a08401526104408501516101c08401526104608501516101e0840152610480850151828401526104a08501516102208401526145b36104c08601614009565b6102408401526145c7866104e08701614079565b6102608401526105a08501516102808401526145e7866105c08701614014565b6102a08401526106208501516102c08401526106408501516102e084015261066090940151938201939093529392505050565b600081830360c081121561462d57600080fd5b614635613f0b565b8335815260a0601f198301121561464b57600080fd5b614653613f2d565b915061465d613f4f565b60208501356004811061466f57600080fd5b8152604085013561467f81613f71565b6020820152606085013561469281613f71565b604082015260808501356146a581613f71565b606082015260a08501356146b881613f71565b6080820152825260208101919091529392505050565b600082198211156146e1576146e1614469565b500190565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061471957614719613c1a565b806040850152506020810151151560608401526040810151151560808401526060810151151560a08401526080810151151560c0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561478857614788614469565b500290565b6000826147aa57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006000198214156147eb576147eb614469565b5060010190565b8060005b60028110156122415761482084835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016147f6565b81516001600160a01b03168152610680810160208301516020830152604083015161486c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516148ba828501826001600160a01b03169052565b5050610120808401516148cf82850182613c79565b50506101408301516102006148e681850183613c9c565b61016085015191506103006148fd81860184613cbf565b6101808601519250614913610380860184613ce2565b6101a08601516104208601526101c08601516104408601526101e0860151610460860152818601516104808601526102208601516104a08601526102408601516001600160a01b03166104c086015261026086015192506149786104e08601846147f2565b6102808601516105a08601526102a086015180516105c087015260208101516105e08701526040015115156106008601526102c08601516106208601526102e0860151610640860152909401516106609093019290925292915050565b81516001600160a01b031681526104e08101602083015160208301526040830151614a0b60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614a59828501826001600160a01b03169052565b505061012080840151614a6e82850182613c79565b5050610140830151610200614a8581850183613c9c565b6101608501519150614a9b610300850183613cbf565b6101808501519150614ab1610380850183613ce2565b6101a08501516104208501526101c08501516104408501526101e0850151610460850152840151610480840152506102208301516001600160a01b03166104a0830152610240909201516104c09091015290565b60008251614b17818460208701613e20565b9190910192915050565b600060208284031215614b3357600080fd5b81516104af81613f7156fea26469706673582212205099e1c7d66f55d9542aa31ea20a87d2f87bdb928d4c9653cdc429c9b4c26a1364736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212209756d02baa2f7a15d7adbddcf47f7a39555a40c884c0289d44f4956dc8b0cacb64736f6c634300080c0033`,
  BytecodeLen: 27294,
  Which: `oD`,
  version: 7,
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
    at: './index.rsh:288:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:480:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:491:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:487:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:306:21:after expr stmt semicolon',
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

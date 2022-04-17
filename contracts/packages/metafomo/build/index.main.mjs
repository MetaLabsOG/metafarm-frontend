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
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1197, v1210, v1238, v1239, v1240, v1241, v1242] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async () => {
                
                const v2221 = {
                  currentPrice: v1263,
                  currentTotal: v1265,
                  currentWinner: v1266,
                  deadline: v1191,
                  deltaDeadline: v1192,
                  discountPercents: v1240,
                  discountPrices: v1239,
                  endTimestamp: v1260,
                  initialPrice: v1189,
                  nftPrize: v1190,
                  paidToFunder: v1262,
                  priceStep: v1193,
                  ticketFeeDenominator: v1194,
                  timeReductionPrices: v1241,
                  timeReductionSecs: v1242,
                  token: v1210,
                  tokenOwnedByUsers: v2216,
                  tokensGivenPerTicket: v1195
                  };
                
                return v2221;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async () => {
                
                const v2221 = {
                  currentPrice: v1263,
                  currentTotal: v1265,
                  currentWinner: v1266,
                  deadline: v1191,
                  deltaDeadline: v1192,
                  discountPercents: v1240,
                  discountPrices: v1239,
                  endTimestamp: v1260,
                  initialPrice: v1189,
                  nftPrize: v1190,
                  paidToFunder: v1262,
                  priceStep: v1193,
                  ticketFeeDenominator: v1194,
                  timeReductionPrices: v1241,
                  timeReductionSecs: v1242,
                  token: v1210,
                  tokenOwnedByUsers: v2216,
                  tokensGivenPerTicket: v1195
                  };
                
                return v2221;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = svs;
              return (await ((async () => {
                
                const v1309 = {
                  currentPrice: v1263,
                  currentTotal: v1265,
                  currentWinner: v1266,
                  deadline: v1191,
                  deltaDeadline: v1192,
                  discountPercents: v1240,
                  discountPrices: v1239,
                  endTimestamp: v1260,
                  initialPrice: v1189,
                  nftPrize: v1190,
                  paidToFunder: v1262,
                  priceStep: v1193,
                  ticketFeeDenominator: v1194,
                  timeReductionPrices: v1241,
                  timeReductionSecs: v1242,
                  token: v1210,
                  tokenOwnedByUsers: v1304,
                  tokensGivenPerTicket: v1195
                  };
                
                return v1309;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc10
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1197, v1210, v1238, v1239, v1240, v1241, v1242] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2230 ) => {
                  const v2230 = stdlib.protect(ctc1, _v2230, null);
                
                const v2231 = stdlib.add(v2230, v1193);
                
                return v2231;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2230 ) => {
                  const v2230 = stdlib.protect(ctc1, _v2230, null);
                
                const v2231 = stdlib.add(v2230, v1193);
                
                return v2231;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = svs;
              return (await ((async (_v1318 ) => {
                  const v1318 = stdlib.protect(ctc1, _v1318, null);
                
                const v1319 = stdlib.add(v1318, v1193);
                
                return v1319;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        participantInfo: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1197, v1210, v1238, v1239, v1240, v1241, v1242] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2222 ) => {
                  const v2222 = stdlib.protect(ctc0, _v2222, null);
                
                const v2223 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2222), null);
                const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
                const v2225 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2222), null);
                const v2226 = stdlib.fromSome(v2225, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
                const v2227 = {
                  addr: v2222,
                  discountLevel: v2224,
                  timeReductionLevel: v2226
                  };
                
                return v2227;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2222 ) => {
                  const v2222 = stdlib.protect(ctc0, _v2222, null);
                
                const v2223 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2222), null);
                const v2224 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
                const v2225 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2222), null);
                const v2226 = stdlib.fromSome(v2225, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
                const v2227 = {
                  addr: v2222,
                  discountLevel: v2224,
                  timeReductionLevel: v2226
                  };
                
                return v2227;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = svs;
              return (await ((async (_v1310 ) => {
                  const v1310 = stdlib.protect(ctc0, _v1310, null);
                
                const v1311 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1310), null);
                const v1312 = stdlib.fromSome(v1311, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
                const v1313 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1310), null);
                const v1314 = stdlib.fromSome(v1313, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
                const v1315 = {
                  addr: v1310,
                  discountLevel: v1312,
                  timeReductionLevel: v1314
                  };
                
                return v1315;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc11
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1197, v1210, v1238, v1239, v1240, v1241, v1242] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2232 ) => {
                  const v2232 = stdlib.protect(ctc1, _v2232, null);
                
                const v2233 = stdlib.sub(v2232, v1193);
                
                return v2233;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216] = svs;
              return (await ((async (_v2232 ) => {
                  const v2232 = stdlib.protect(ctc1, _v2232, null);
                
                const v2233 = stdlib.sub(v2232, v1193);
                
                return v2233;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = svs;
              return (await ((async (_v1320 ) => {
                  const v1320 = stdlib.protect(ctc1, _v1320, null);
                
                const v1321 = stdlib.sub(v1320, v1193);
                
                return v1321;}))(...args));
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
    Api_buyDiscount0_286: ctc12,
    Api_buyTicket0_286: ctc12,
    Api_buyTimeReduction0_286: ctc12,
    Api_getParticipantStats0_286: ctc12
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
  
  
  const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1338 = ctc.selfAddress();
  const v1340 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyDiscount0_286" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1341 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1338), null);
  const v1342 = stdlib.fromSome(v1341, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
  const v1343 = stdlib.lt(v1342, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  stdlib.assert(v1343, {
    at: './index.rsh:358:23:application',
    fs: ['at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:358:14:application call to [unknown function] (defined at: ./index.rsh:358:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyDiscount0_286" (defined at: ./index.rsh:356:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1346 = ['Api_buyDiscount0_286', v1340];
  
  let v1367;
  const v1371 = stdlib.ge(v1342, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  if (v1371) {
    v1367 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, '249');
    }
  else {
    const v1374 = v1239[v1342];
    v1367 = v1374;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304, v1346],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:359:18:decimal', stdlib.UInt_max, '0'), [[v1367, v1210]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
      
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1440;
          const v1441 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1431), null);
          const v1442 = stdlib.fromSome(v1441, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1443 = stdlib.lt(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          ;
          const v1444 = stdlib.ge(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1444) {
            v1440 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1447 = v1239[v1442];
            v1440 = v1447;
            }
          ;
          const v1503 = stdlib.add(v1303, v1440);
          const v1507 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1508 = [v1503, v1301, v1507];
          const v1509 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1508);
          sim_r.txns.push({
            amt: v1440,
            kind: 'to',
            tok: v1210
            });
          const v1514 = stdlib.add(v1442, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 0, v1431, v1514);
          null;
          const v1518 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1431), null);
          const v1519 = stdlib.fromSome(v1518, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1520 = {
            addr: v1431,
            discountLevel: v1514,
            timeReductionLevel: v1519
            };
          const v1522 = await txn1.getOutput('Api_buyDiscount', 'v1520', ctc14, v1520);
          
          const v3726 = v1260;
          const v3728 = v1262;
          const v3729 = v1263;
          const v3730 = v1264;
          const v3731 = v1265;
          const v3732 = v1266;
          const v3734 = v1509;
          const v3735 = v1274;
          const v3736 = v1509[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v3737 = v3736[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v3738 = v3736[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v3739 = stdlib.sub(v3737, v3738);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          
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
  const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
  switch (v1432[0]) {
    case 'Api_buyDiscount0_286': {
      const v1435 = v1432[1];
      undefined /* setApiDetails */;
      let v1440;
      const v1441 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
      const v1442 = stdlib.fromSome(v1441, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
      const v1443 = stdlib.lt(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      stdlib.assert(v1443, {
        at: './index.rsh:200:12:application',
        fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1444 = stdlib.ge(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      if (v1444) {
        v1440 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, '249');
        }
      else {
        const v1447 = v1239[v1442];
        v1440 = v1447;
        }
      ;
      const v1503 = stdlib.add(v1303, v1440);
      const v1507 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
      const v1508 = [v1503, v1301, v1507];
      const v1509 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1508);
      ;
      const v1514 = stdlib.add(v1442, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map0, v1431, v1514);
      null;
      const v1518 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
      const v1519 = stdlib.fromSome(v1518, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
      const v1520 = {
        addr: v1431,
        discountLevel: v1514,
        timeReductionLevel: v1519
        };
      const v1522 = await txn1.getOutput('Api_buyDiscount', 'v1520', ctc14, v1520);
      if (v811) {
        stdlib.protect(ctc0, await interact.out(v1435, v1522), {
          at: './index.rsh:357:11:application',
          fs: ['at ./index.rsh:357:11:application call to [unknown function] (defined at: ./index.rsh:357:11:function exp)', 'at ./index.rsh:372:21:application call to "callback" (defined at: ./index.rsh:360:22:function exp)', 'at ./index.rsh:360:22:application call to [unknown function] (defined at: ./index.rsh:360:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3726 = v1260;
      const v3728 = v1262;
      const v3729 = v1263;
      const v3730 = v1264;
      const v3731 = v1265;
      const v3732 = v1266;
      const v3734 = v1509;
      const v3735 = v1274;
      const v3736 = v1509[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v3737 = v3736[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v3738 = v3736[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v3739 = stdlib.sub(v3737, v3738);
      return;
      
      break;
      }
    case 'Api_buyTicket0_286': {
      const v1628 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_286': {
      const v1821 = v1432[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_286': {
      const v2014 = v1432[1];
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
    Api_buyDiscount0_286: ctc12,
    Api_buyTicket0_286: ctc12,
    Api_buyTimeReduction0_286: ctc12,
    Api_getParticipantStats0_286: ctc12
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
  
  
  const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1326 = ctc.selfAddress();
  const v1328 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_286" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1330 = stdlib.gt(v1194, stdlib.checkedBigNumberify('./index.rsh:326:43:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1330, {
    at: './index.rsh:326:19:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_286" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1333 = stdlib.gt(v1303, v1195);
  stdlib.assert(v1333, {
    at: './index.rsh:327:19:application',
    fs: ['at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:325:14:application call to [unknown function] (defined at: ./index.rsh:325:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTicket0_286" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1336 = ['Api_buyTicket0_286', v1328];
  
  let v1385;
  const v1386 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1326), null);
  const v1387 = stdlib.fromSome(v1386, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
  const v1388 = stdlib.ge(v1387, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
  if (v1388) {
    v1385 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1391 = v1240[v1387];
    v1385 = v1391;
    }
  const v1392 = stdlib.lt(v1385, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v1392, {
    at: './index.rsh:220:12:application',
    fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1393 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1385);
  const v1394 = stdlib.mul(v1263, v1393);
  const v1395 = stdlib.div(v1394, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304, v1336],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v1395, [[stdlib.checkedBigNumberify('./index.rsh:329:54:decimal', stdlib.UInt_max, '0'), v1210]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
      
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1648;
          const v1649 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1431), null);
          const v1650 = stdlib.fromSome(v1649, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1651 = stdlib.ge(v1650, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1651) {
            v1648 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1654 = v1240[v1650];
            v1648 = v1654;
            }
          const v1655 = stdlib.lt(v1648, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          ;
          const v1656 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1648);
          const v1657 = stdlib.mul(v1263, v1656);
          const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1693 = stdlib.add(v1274, v1658);
          sim_r.txns.push({
            amt: v1658,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1700 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1701 = [v1303, v1301, v1700];
          const v1702 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1701);
          ;
          const v1722 = stdlib.gt(v1194, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, '1'));
          ;
          const v1723 = v1702[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '1')];
          const v1724 = v1723[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '0')];
          const v1725 = stdlib.gt(v1724, v1195);
          ;
          let v1726;
          if (v1651) {
            v1726 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1732 = v1240[v1650];
            v1726 = v1732;
            }
          const v1733 = stdlib.lt(v1726, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          ;
          const v1734 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1726);
          const v1735 = stdlib.mul(v1263, v1734);
          const v1736 = stdlib.div(v1735, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1737 = stdlib.div(v1736, v1194);
          const v1738 = stdlib.add(v1263, v1193);
          null;
          const v1742 = stdlib.sub(v1693, v1737);
          sim_r.txns.push({
            amt: v1737,
            kind: 'from',
            to: v1188,
            tok: undefined /* Nothing */
            });
          const v1748 = stdlib.sub(v1724, v1195);
          const v1751 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1')];
          const v1752 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '2')];
          const v1753 = [v1748, v1751, v1752];
          const v1754 = stdlib.Array_set(v1702, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1'), v1753);
          sim_r.txns.push({
            amt: v1195,
            kind: 'from',
            to: v1431,
            tok: v1210
            });
          let v1755;
          const v1756 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1431), null);
          const v1757 = stdlib.fromSome(v1756, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1758 = stdlib.ge(v1757, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1758) {
            v1755 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1761 = v1242[v1757];
            v1755 = v1761;
            }
          const v1762 = stdlib.sub(v1192, v1755);
          const v1767 = {
            addr: v1431,
            discountLevel: v1650,
            timeReductionLevel: v1757
            };
          const v1769 = await txn1.getOutput('Api_buyTicket', 'v1767', ctc14, v1767);
          
          const v1774 = stdlib.add(v1264, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, '1'));
          let v1775;
          if (v1651) {
            v1775 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1781 = v1240[v1650];
            v1775 = v1781;
            }
          const v1782 = stdlib.lt(v1775, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          ;
          const v1783 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1775);
          const v1784 = stdlib.mul(v1263, v1783);
          const v1785 = stdlib.div(v1784, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1786 = stdlib.add(v1265, v1785);
          const v1787 = stdlib.add(v1262, v1737);
          const v1788 = stdlib.add(v1260, v1762);
          const v3866 = v1788;
          const v3868 = v1787;
          const v3869 = v1738;
          const v3870 = v1774;
          const v3871 = v1786;
          const v3872 = v1431;
          const v3874 = v1754;
          const v3875 = v1742;
          const v3876 = v1754[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v3877 = v3876[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v3878 = v3876[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v3879 = stdlib.sub(v3877, v3878);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          
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
  const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
  switch (v1432[0]) {
    case 'Api_buyDiscount0_286': {
      const v1435 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTicket0_286': {
      const v1628 = v1432[1];
      undefined /* setApiDetails */;
      let v1648;
      const v1649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
      const v1650 = stdlib.fromSome(v1649, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
      const v1651 = stdlib.ge(v1650, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
      if (v1651) {
        v1648 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1654 = v1240[v1650];
        v1648 = v1654;
        }
      const v1655 = stdlib.lt(v1648, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1655, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1656 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1648);
      const v1657 = stdlib.mul(v1263, v1656);
      const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
      const v1693 = stdlib.add(v1274, v1658);
      ;
      const v1700 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
      const v1701 = [v1303, v1301, v1700];
      const v1702 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1701);
      ;
      const v1722 = stdlib.gt(v1194, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v1722, {
        at: './index.rsh:331:20:application',
        fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1723 = v1702[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '1')];
      const v1724 = v1723[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '0')];
      const v1725 = stdlib.gt(v1724, v1195);
      stdlib.assert(v1725, {
        at: './index.rsh:332:20:application',
        fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1726;
      if (v1651) {
        v1726 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1732 = v1240[v1650];
        v1726 = v1732;
        }
      const v1733 = stdlib.lt(v1726, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1733, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1734 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1726);
      const v1735 = stdlib.mul(v1263, v1734);
      const v1736 = stdlib.div(v1735, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
      const v1737 = stdlib.div(v1736, v1194);
      const v1738 = stdlib.add(v1263, v1193);
      null;
      const v1742 = stdlib.sub(v1693, v1737);
      ;
      const v1748 = stdlib.sub(v1724, v1195);
      const v1751 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1')];
      const v1752 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '2')];
      const v1753 = [v1748, v1751, v1752];
      const v1754 = stdlib.Array_set(v1702, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1'), v1753);
      ;
      let v1755;
      const v1756 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
      const v1757 = stdlib.fromSome(v1756, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
      const v1758 = stdlib.ge(v1757, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      if (v1758) {
        v1755 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1761 = v1242[v1757];
        v1755 = v1761;
        }
      const v1762 = stdlib.sub(v1192, v1755);
      const v1767 = {
        addr: v1431,
        discountLevel: v1650,
        timeReductionLevel: v1757
        };
      const v1769 = await txn1.getOutput('Api_buyTicket', 'v1767', ctc14, v1767);
      if (v811) {
        stdlib.protect(ctc0, await interact.out(v1628, v1769), {
          at: './index.rsh:324:11:application',
          fs: ['at ./index.rsh:324:11:application call to [unknown function] (defined at: ./index.rsh:324:11:function exp)', 'at ./index.rsh:345:21:application call to "callback" (defined at: ./index.rsh:330:22:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1774 = stdlib.add(v1264, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, '1'));
      let v1775;
      if (v1651) {
        v1775 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1781 = v1240[v1650];
        v1775 = v1781;
        }
      const v1782 = stdlib.lt(v1775, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
      stdlib.assert(v1782, {
        at: './index.rsh:220:12:application',
        fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1783 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1775);
      const v1784 = stdlib.mul(v1263, v1783);
      const v1785 = stdlib.div(v1784, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
      const v1786 = stdlib.add(v1265, v1785);
      const v1787 = stdlib.add(v1262, v1737);
      const v1788 = stdlib.add(v1260, v1762);
      const v3866 = v1788;
      const v3868 = v1787;
      const v3869 = v1738;
      const v3870 = v1774;
      const v3871 = v1786;
      const v3872 = v1431;
      const v3874 = v1754;
      const v3875 = v1742;
      const v3876 = v1754[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v3877 = v3876[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v3878 = v3876[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v3879 = stdlib.sub(v3877, v3878);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_286': {
      const v1821 = v1432[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_286': {
      const v2014 = v1432[1];
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
    Api_buyDiscount0_286: ctc12,
    Api_buyTicket0_286: ctc12,
    Api_buyTimeReduction0_286: ctc12,
    Api_getParticipantStats0_286: ctc12
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
  
  
  const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1348 = ctc.selfAddress();
  const v1350 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTimeReduction0_286" (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1351 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1348), null);
  const v1352 = stdlib.fromSome(v1351, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
  const v1353 = stdlib.lt(v1352, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
  stdlib.assert(v1353, {
    at: './index.rsh:378:23:application',
    fs: ['at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:378:14:application call to [unknown function] (defined at: ./index.rsh:378:14:function exp)', 'at ./index.rsh:286:23:application call to "runApi_buyTimeReduction0_286" (defined at: ./index.rsh:376:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1356 = ['Api_buyTimeReduction0_286', v1350];
  
  let v1406;
  const v1410 = stdlib.ge(v1352, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
  if (v1410) {
    v1406 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, '249');
    }
  else {
    const v1413 = v1241[v1352];
    v1406 = v1413;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304, v1356],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:18:decimal', stdlib.UInt_max, '0'), [[v1406, v1210]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
      
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1859;
          const v1860 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1431), null);
          const v1861 = stdlib.fromSome(v1860, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1862 = stdlib.lt(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          ;
          const v1863 = stdlib.ge(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1863) {
            v1859 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1866 = v1241[v1861];
            v1859 = v1866;
            }
          ;
          const v1889 = stdlib.add(v1303, v1859);
          const v1893 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1894 = [v1889, v1301, v1893];
          const v1895 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1894);
          sim_r.txns.push({
            amt: v1859,
            kind: 'to',
            tok: v1210
            });
          const v1987 = stdlib.add(v1861, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v1431, v1987);
          null;
          const v1989 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1431), null);
          const v1990 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1993 = {
            addr: v1431,
            discountLevel: v1990,
            timeReductionLevel: v1987
            };
          const v1995 = await txn1.getOutput('Api_buyTimeReduction', 'v1993', ctc14, v1993);
          
          const v4006 = v1260;
          const v4008 = v1262;
          const v4009 = v1263;
          const v4010 = v1264;
          const v4011 = v1265;
          const v4012 = v1266;
          const v4014 = v1895;
          const v4015 = v1274;
          const v4016 = v1895[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v4017 = v4016[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v4018 = v4016[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v4019 = stdlib.sub(v4017, v4018);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          
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
  const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
  switch (v1432[0]) {
    case 'Api_buyDiscount0_286': {
      const v1435 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTicket0_286': {
      const v1628 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_286': {
      const v1821 = v1432[1];
      undefined /* setApiDetails */;
      let v1859;
      const v1860 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
      const v1861 = stdlib.fromSome(v1860, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
      const v1862 = stdlib.lt(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      stdlib.assert(v1862, {
        at: './index.rsh:241:12:application',
        fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1863 = stdlib.ge(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
      if (v1863) {
        v1859 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, '249');
        }
      else {
        const v1866 = v1241[v1861];
        v1859 = v1866;
        }
      ;
      const v1889 = stdlib.add(v1303, v1859);
      const v1893 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
      const v1894 = [v1889, v1301, v1893];
      const v1895 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1894);
      ;
      const v1987 = stdlib.add(v1861, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v1431, v1987);
      null;
      const v1989 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
      const v1990 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
      const v1993 = {
        addr: v1431,
        discountLevel: v1990,
        timeReductionLevel: v1987
        };
      const v1995 = await txn1.getOutput('Api_buyTimeReduction', 'v1993', ctc14, v1993);
      if (v811) {
        stdlib.protect(ctc0, await interact.out(v1821, v1995), {
          at: './index.rsh:377:11:application',
          fs: ['at ./index.rsh:377:11:application call to [unknown function] (defined at: ./index.rsh:377:11:function exp)', 'at ./index.rsh:392:21:application call to "callback" (defined at: ./index.rsh:380:22:function exp)', 'at ./index.rsh:380:22:application call to [unknown function] (defined at: ./index.rsh:380:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v4006 = v1260;
      const v4008 = v1262;
      const v4009 = v1263;
      const v4010 = v1264;
      const v4011 = v1265;
      const v4012 = v1266;
      const v4014 = v1895;
      const v4015 = v1274;
      const v4016 = v1895[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v4017 = v4016[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v4018 = v4016[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v4019 = stdlib.sub(v4017, v4018);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_286': {
      const v2014 = v1432[1];
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
    Api_buyDiscount0_286: ctc12,
    Api_buyTicket0_286: ctc12,
    Api_buyTimeReduction0_286: ctc12,
    Api_getParticipantStats0_286: ctc12
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
  
  
  const [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc7, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc11, ctc1, ctc10, ctc1, ctc1, ctc1]);
  const v1360 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:286:23:application call to "runApi_getParticipantStats0_286" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1364 = ['Api_getParticipantStats0_286', v1360];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304, v1364],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:396:13:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:322:18:decimal', stdlib.UInt_max, '0'), v1210]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
      
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2086 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v2087 = [v1303, v1301, v2086];
          const v2088 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v2087);
          ;
          const v2195 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1431), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v2197 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1431), null);
          const v2198 = stdlib.fromSome(v2197, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v2199 = {
            addr: v1431,
            discountLevel: v2196,
            timeReductionLevel: v2198
            };
          const v2201 = await txn1.getOutput('Api_getParticipantStats', 'v2199', ctc14, v2199);
          
          const v4146 = v1260;
          const v4148 = v1262;
          const v4149 = v1263;
          const v4150 = v1264;
          const v4151 = v1265;
          const v4152 = v1266;
          const v4154 = v2088;
          const v4155 = v1274;
          const v4156 = v2088[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v4157 = v4156[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
          const v4158 = v4156[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
          const v4159 = stdlib.sub(v4157, v4158);
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
  const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn1;
  switch (v1432[0]) {
    case 'Api_buyDiscount0_286': {
      const v1435 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTicket0_286': {
      const v1628 = v1432[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_286': {
      const v1821 = v1432[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_286': {
      const v2014 = v1432[1];
      undefined /* setApiDetails */;
      ;
      const v2086 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
      const v2087 = [v1303, v1301, v2086];
      const v2088 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v2087);
      ;
      const v2195 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
      const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
      const v2197 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
      const v2198 = stdlib.fromSome(v2197, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
      const v2199 = {
        addr: v1431,
        discountLevel: v2196,
        timeReductionLevel: v2198
        };
      const v2201 = await txn1.getOutput('Api_getParticipantStats', 'v2199', ctc14, v2199);
      if (v811) {
        stdlib.protect(ctc0, await interact.out(v2014, v2201), {
          at: './index.rsh:397:11:application',
          fs: ['at ./index.rsh:397:11:application call to [unknown function] (defined at: ./index.rsh:397:11:function exp)', 'at ./index.rsh:400:21:application call to "callback" (defined at: ./index.rsh:398:22:function exp)', 'at ./index.rsh:398:22:application call to [unknown function] (defined at: ./index.rsh:398:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4146 = v1260;
      const v4148 = v1262;
      const v4149 = v1263;
      const v4150 = v1264;
      const v4151 = v1265;
      const v4152 = v1266;
      const v4154 = v2088;
      const v4155 = v1274;
      const v4156 = v2088[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v4157 = v4156[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
      const v4158 = v4156[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
      const v4159 = stdlib.sub(v4157, v4158);
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
    Api_buyDiscount0_286: ctc4,
    Api_buyTicket0_286: ctc4,
    Api_buyTimeReduction0_286: ctc4,
    Api_getParticipantStats0_286: ctc4
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
  
  
  const v1167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1168 = [v1167, v1167];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1189, v1190, v1191, v1192, v1193, v1194, v1195], secs: v1197, time: v1196, didSend: v53, from: v1188 } = txn1;
  const v1198 = v1168[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0')];
  const v1200 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '1')];
  const v1201 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '2')];
  const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1200, v1201];
  const v1203 = stdlib.Array_set(v1168, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0'), v1202);
  ;
  ;
  const v1205 = 'Metafomo                        ';
  const v1206 = 'METAFOMO';
  const v1207 = 'https://metalabs.technology                                                                     ';
  const v1208 = '                                ';
  const v1209 = undefined /* TokenNew */;
  const v1210 = await txn1.getOutput('internal', 'v1209', ctc3, v1209);
  const v1211 = [v1190];
  const v2281 = v1211[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v2285 = stdlib.tokenEq(v1210, v2281);
  const v1219 = v2285 ? false : true;
  stdlib.assert(v1219, {
    at: './index.rsh:177:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1220 = v1203[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1222 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1223 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
  const v1224 = [stdlib.UInt_max, v1222, v1223];
  const v1225 = stdlib.Array_set(v1203, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1224);
  const v1227 = v1225[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
  const v1230 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
  const v1231 = [v1228, stdlib.UInt_max, v1230];
  const v1232 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1231);
  const v1233 = v1232[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1234 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
  const v1235 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1237 = [v1234, v1235, false];
  const v1238 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1237);
  const v1239 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
  const v1241 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v1242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1245, time: v1244, didSend: v170, from: v1243 } = txn2;
  ;
  const v1246 = v1238[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
  const v1247 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
  const v1248 = stdlib.add(v1247, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '1'));
  const v1251 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '1')];
  const v1252 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '2')];
  const v1253 = [v1248, v1251, v1252];
  const v1254 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0'), v1253);
  ;
  const v1255 = stdlib.addressEq(v1188, v1243);
  stdlib.assert(v1255, {
    at: './index.rsh:270:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v1259 = stdlib.add(v1197, v1191);
  let v1260 = v1259;
  let v1261 = true;
  let v1262 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, '0');
  let v1263 = v1189;
  let v1264 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, '0');
  let v1265 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, '0');
  let v1266 = v1188;
  let v1267 = v1244;
  let v1273 = v1254;
  let v1274 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v1261;})()) {
    const v1300 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
    const v1301 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
    const v1303 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
    const v1304 = stdlib.sub(v1301, v1303);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1260],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1267,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:406:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2209, time: v2208, didSend: v963, from: v2207 } = txn4;
          
          ;
          const cv1260 = v1260;
          const cv1261 = false;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v2208;
          const cv1273 = v1273;
          const cv1274 = v1274;
          
          await (async () => {
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1262 = cv1262;
            const v1263 = cv1263;
            const v1264 = cv1264;
            const v1265 = cv1265;
            const v1266 = cv1266;
            const v1267 = cv1267;
            const v1273 = cv1273;
            const v1274 = cv1274;
            
            if (await (async () => {
              
              return v1261;})()) {
              const v1300 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v1301 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v1303 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
              const v1304 = stdlib.sub(v1301, v1303);
              sim_r.isHalt = false;
              }
            else {
              const v2212 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v2213 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v2215 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
              const v2216 = stdlib.sub(v2213, v2215);
              sim_r.txns.push({
                amt: v1274,
                kind: 'from',
                to: v1266,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v1266,
                tok: v1190
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
      const {data: [], secs: v2209, time: v2208, didSend: v963, from: v2207 } = txn4;
      ;
      const cv1260 = v1260;
      const cv1261 = false;
      const cv1262 = v1262;
      const cv1263 = v1263;
      const cv1264 = v1264;
      const cv1265 = v1265;
      const cv1266 = v1266;
      const cv1267 = v2208;
      const cv1273 = v1273;
      const cv1274 = v1274;
      
      v1260 = cv1260;
      v1261 = cv1261;
      v1262 = cv1262;
      v1263 = cv1263;
      v1264 = cv1264;
      v1265 = cv1265;
      v1266 = cv1266;
      v1267 = cv1267;
      v1273 = cv1273;
      v1274 = cv1274;
      
      continue;
      }
    else {
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn3;
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          undefined /* setApiDetails */;
          let v1440;
          const v1441 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1442 = stdlib.fromSome(v1441, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1443 = stdlib.lt(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          stdlib.assert(v1443, {
            at: './index.rsh:200:12:application',
            fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1444 = stdlib.ge(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1444) {
            v1440 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1447 = v1239[v1442];
            v1440 = v1447;
            }
          ;
          const v1503 = stdlib.add(v1303, v1440);
          const v1507 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1508 = [v1503, v1301, v1507];
          const v1509 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1508);
          ;
          const v1514 = stdlib.add(v1442, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map0, v1431, v1514);
          null;
          const v1518 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1519 = stdlib.fromSome(v1518, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1520 = {
            addr: v1431,
            discountLevel: v1514,
            timeReductionLevel: v1519
            };
          await txn3.getOutput('Api_buyDiscount', 'v1520', ctc7, v1520);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v1509;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          undefined /* setApiDetails */;
          let v1648;
          const v1649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1650 = stdlib.fromSome(v1649, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1651 = stdlib.ge(v1650, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1651) {
            v1648 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1654 = v1240[v1650];
            v1648 = v1654;
            }
          const v1655 = stdlib.lt(v1648, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1655, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1656 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1648);
          const v1657 = stdlib.mul(v1263, v1656);
          const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1693 = stdlib.add(v1274, v1658);
          ;
          const v1700 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1701 = [v1303, v1301, v1700];
          const v1702 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1701);
          ;
          const v1722 = stdlib.gt(v1194, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1722, {
            at: './index.rsh:331:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1723 = v1702[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '1')];
          const v1724 = v1723[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '0')];
          const v1725 = stdlib.gt(v1724, v1195);
          stdlib.assert(v1725, {
            at: './index.rsh:332:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1726;
          if (v1651) {
            v1726 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1732 = v1240[v1650];
            v1726 = v1732;
            }
          const v1733 = stdlib.lt(v1726, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1733, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1734 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1726);
          const v1735 = stdlib.mul(v1263, v1734);
          const v1736 = stdlib.div(v1735, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1737 = stdlib.div(v1736, v1194);
          const v1738 = stdlib.add(v1263, v1193);
          null;
          const v1742 = stdlib.sub(v1693, v1737);
          ;
          const v1748 = stdlib.sub(v1724, v1195);
          const v1751 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1')];
          const v1752 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '2')];
          const v1753 = [v1748, v1751, v1752];
          const v1754 = stdlib.Array_set(v1702, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1'), v1753);
          ;
          let v1755;
          const v1756 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1757 = stdlib.fromSome(v1756, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1758 = stdlib.ge(v1757, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1758) {
            v1755 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1761 = v1242[v1757];
            v1755 = v1761;
            }
          const v1762 = stdlib.sub(v1192, v1755);
          const v1767 = {
            addr: v1431,
            discountLevel: v1650,
            timeReductionLevel: v1757
            };
          await txn3.getOutput('Api_buyTicket', 'v1767', ctc7, v1767);
          const v1774 = stdlib.add(v1264, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, '1'));
          let v1775;
          if (v1651) {
            v1775 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1781 = v1240[v1650];
            v1775 = v1781;
            }
          const v1782 = stdlib.lt(v1775, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1782, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1783 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1775);
          const v1784 = stdlib.mul(v1263, v1783);
          const v1785 = stdlib.div(v1784, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1786 = stdlib.add(v1265, v1785);
          const v1787 = stdlib.add(v1262, v1737);
          const v1788 = stdlib.add(v1260, v1762);
          const cv1260 = v1788;
          const cv1261 = true;
          const cv1262 = v1787;
          const cv1263 = v1738;
          const cv1264 = v1774;
          const cv1265 = v1786;
          const cv1266 = v1431;
          const cv1267 = v1433;
          const cv1273 = v1754;
          const cv1274 = v1742;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          undefined /* setApiDetails */;
          let v1859;
          const v1860 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1861 = stdlib.fromSome(v1860, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1862 = stdlib.lt(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          stdlib.assert(v1862, {
            at: './index.rsh:241:12:application',
            fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1863 = stdlib.ge(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1863) {
            v1859 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1866 = v1241[v1861];
            v1859 = v1866;
            }
          ;
          const v1889 = stdlib.add(v1303, v1859);
          const v1893 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1894 = [v1889, v1301, v1893];
          const v1895 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1894);
          ;
          const v1987 = stdlib.add(v1861, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v1431, v1987);
          null;
          const v1989 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1990 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1993 = {
            addr: v1431,
            discountLevel: v1990,
            timeReductionLevel: v1987
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1993', ctc7, v1993);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v1895;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          undefined /* setApiDetails */;
          ;
          const v2086 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v2087 = [v1303, v1301, v2086];
          const v2088 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v2087);
          ;
          const v2195 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v2197 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v2198 = stdlib.fromSome(v2197, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v2199 = {
            addr: v1431,
            discountLevel: v2196,
            timeReductionLevel: v2198
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2199', ctc7, v2199);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v2088;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        }}
    
    }
  const v2212 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
  const v2213 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
  const v2215 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
  const v2216 = stdlib.sub(v2213, v2215);
  ;
  ;
  null;
  stdlib.protect(ctc0, await interact.showOutcome(v1266, v1264, v1265, v1263, v1262), {
    at: './index.rsh:414:27:application',
    fs: ['at ./index.rsh:413:15:application call to [unknown function] (defined at: ./index.rsh:413:19:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1267,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:425:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2255, time: v2254, didSend: v1008, from: v2253 } = txn3;
      
      ;
      const v2256 = v2254;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1190
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
  const {data: [], secs: v2255, time: v2254, didSend: v1008, from: v2253 } = txn3;
  ;
  let v2256 = v2254;
  
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
    const {data: [], secs: v2268, time: v2267, didSend: v1017, from: v2266 } = txn4;
    ;
    const v2269 = stdlib.addressEq(v1188, v2266);
    stdlib.assert(v2269, {
      at: './index.rsh:428:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2256 = v2267;
    
    v2256 = cv2256;
    
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
    Api_buyDiscount0_286: ctc5,
    Api_buyTicket0_286: ctc5,
    Api_buyTimeReduction0_286: ctc5,
    Api_getParticipantStats0_286: ctc5
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
  
  
  const v1167 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1168 = [v1167, v1167];
  const v1179 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:165:38:application',
    fs: ['at ./index.rsh:163:16:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1180 = v1179.ticketPrice;
  const v1181 = v1179.nftPrize;
  const v1182 = v1179.deadline;
  const v1183 = v1179.deltaDeadline;
  const v1184 = v1179.unitPrice;
  const v1185 = v1179.ticketFeeDenominator;
  const v1186 = v1179.tokensGivenPerTicket;
  const v1187 = stdlib.gt(v1185, stdlib.checkedBigNumberify('./index.rsh:166:36:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1187, {
    at: './index.rsh:166:12:application',
    fs: ['at ./index.rsh:163:16:application call to [unknown function] (defined at: ./index.rsh:163:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1180, v1181, v1182, v1183, v1184, v1185, v1186],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1189, v1190, v1191, v1192, v1193, v1194, v1195], secs: v1197, time: v1196, didSend: v53, from: v1188 } = txn1;
      
      const v1198 = v1168[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0')];
      const v1200 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '1')];
      const v1201 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '2')];
      const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1200, v1201];
      const v1203 = stdlib.Array_set(v1168, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0'), v1202);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1190
        });
      ;
      const v1205 = 'Metafomo                        ';
      const v1206 = 'METAFOMO';
      const v1207 = 'https://metalabs.technology                                                                     ';
      const v1208 = '                                ';
      const v1209 = stdlib.simTokenNew(sim_r, v1205, v1206, v1207, v1208, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1210 = await txn1.getOutput('internal', 'v1209', ctc3, v1209);
      const v1211 = [v1190];
      const v2281 = v1211[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
      const v2285 = stdlib.tokenEq(v1210, v2281);
      const v1219 = v2285 ? false : true;
      ;
      const v1220 = v1203[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
      const v1222 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
      const v1223 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
      const v1224 = [stdlib.UInt_max, v1222, v1223];
      const v1225 = stdlib.Array_set(v1203, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1224);
      const v1227 = v1225[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
      const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
      const v1230 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
      const v1231 = [v1228, stdlib.UInt_max, v1230];
      const v1232 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1231);
      const v1233 = v1232[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
      const v1234 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
      const v1235 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
      const v1237 = [v1234, v1235, false];
      const v1238 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1237);
      const v1239 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
      const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
      const v1241 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
      const v1242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1189, v1190, v1191, v1192, v1193, v1194, v1195], secs: v1197, time: v1196, didSend: v53, from: v1188 } = txn1;
  const v1198 = v1168[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0')];
  const v1200 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '1')];
  const v1201 = v1198[stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '2')];
  const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1200, v1201];
  const v1203 = stdlib.Array_set(v1168, stdlib.checkedBigNumberify('./index.rsh:168:12:dot', stdlib.UInt_max, '0'), v1202);
  ;
  ;
  const v1205 = 'Metafomo                        ';
  const v1206 = 'METAFOMO';
  const v1207 = 'https://metalabs.technology                                                                     ';
  const v1208 = '                                ';
  const v1209 = undefined /* TokenNew */;
  const v1210 = await txn1.getOutput('internal', 'v1209', ctc3, v1209);
  const v1211 = [v1190];
  const v2281 = v1211[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v2285 = stdlib.tokenEq(v1210, v2281);
  const v1219 = v2285 ? false : true;
  stdlib.assert(v1219, {
    at: './index.rsh:177:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1220 = v1203[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1222 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1223 = v1220[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
  const v1224 = [stdlib.UInt_max, v1222, v1223];
  const v1225 = stdlib.Array_set(v1203, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1224);
  const v1227 = v1225[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1228 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
  const v1230 = v1227[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '2')];
  const v1231 = [v1228, stdlib.UInt_max, v1230];
  const v1232 = stdlib.Array_set(v1225, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1231);
  const v1233 = v1232[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1234 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '0')];
  const v1235 = v1233[stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1')];
  const v1237 = [v1234, v1235, false];
  const v1238 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./index.rsh:177:32:application', stdlib.UInt_max, '1'), v1237);
  const v1239 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '26'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '38'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '44')];
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '70')];
  const v1241 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '40'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '60')];
  const v1242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')];
  const txn2 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1197, v1210, v1238, v1239, v1240, v1241, v1242],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1196,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '1'), v1190]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1245, time: v1244, didSend: v170, from: v1243 } = txn2;
      
      ;
      const v1246 = v1238[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
      const v1247 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
      const v1248 = stdlib.add(v1247, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '1'));
      const v1251 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '1')];
      const v1252 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '2')];
      const v1253 = [v1248, v1251, v1252];
      const v1254 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0'), v1253);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v1190
        });
      const v1255 = stdlib.addressEq(v1188, v1243);
      ;
      
      const v1259 = stdlib.add(v1197, v1191);
      const v1260 = v1259;
      const v1261 = true;
      const v1262 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, '0');
      const v1263 = v1189;
      const v1264 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, '0');
      const v1265 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, '0');
      const v1266 = v1188;
      const v1267 = v1244;
      const v1273 = v1254;
      const v1274 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v1261;})()) {
        const v1300 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
        const v1301 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
        const v1303 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
        const v1304 = stdlib.sub(v1301, v1303);
        sim_r.isHalt = false;
        }
      else {
        const v2212 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
        const v2213 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
        const v2215 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
        const v2216 = stdlib.sub(v2213, v2215);
        sim_r.txns.push({
          amt: v1274,
          kind: 'from',
          to: v1266,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v1266,
          tok: v1190
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
  const {data: [], secs: v1245, time: v1244, didSend: v170, from: v1243 } = txn2;
  ;
  const v1246 = v1238[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
  const v1247 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0')];
  const v1248 = stdlib.add(v1247, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '1'));
  const v1251 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '1')];
  const v1252 = v1246[stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '2')];
  const v1253 = [v1248, v1251, v1252];
  const v1254 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:270:12:dot', stdlib.UInt_max, '0'), v1253);
  ;
  const v1255 = stdlib.addressEq(v1188, v1243);
  stdlib.assert(v1255, {
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
  
  const v1259 = stdlib.add(v1197, v1191);
  let v1260 = v1259;
  let v1261 = true;
  let v1262 = stdlib.checkedBigNumberify('./index.rsh:286:59:decimal', stdlib.UInt_max, '0');
  let v1263 = v1189;
  let v1264 = stdlib.checkedBigNumberify('./index.rsh:286:40:decimal', stdlib.UInt_max, '0');
  let v1265 = stdlib.checkedBigNumberify('./index.rsh:286:43:decimal', stdlib.UInt_max, '0');
  let v1266 = v1188;
  let v1267 = v1244;
  let v1273 = v1254;
  let v1274 = stdlib.checkedBigNumberify('./index.rsh:160:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v1261;})()) {
    const v1300 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
    const v1301 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
    const v1303 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
    const v1304 = stdlib.sub(v1301, v1303);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1260],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1264, v1265, v1266, v1273, v1274, v1300, v1301, v1303, v1304],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1267,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:406:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2209, time: v2208, didSend: v963, from: v2207 } = txn4;
          
          ;
          const cv1260 = v1260;
          const cv1261 = false;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v2208;
          const cv1273 = v1273;
          const cv1274 = v1274;
          
          await (async () => {
            const v1260 = cv1260;
            const v1261 = cv1261;
            const v1262 = cv1262;
            const v1263 = cv1263;
            const v1264 = cv1264;
            const v1265 = cv1265;
            const v1266 = cv1266;
            const v1267 = cv1267;
            const v1273 = cv1273;
            const v1274 = cv1274;
            
            if (await (async () => {
              
              return v1261;})()) {
              const v1300 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v1301 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v1303 = v1300[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
              const v1304 = stdlib.sub(v1301, v1303);
              sim_r.isHalt = false;
              }
            else {
              const v2212 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v2213 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
              const v2215 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
              const v2216 = stdlib.sub(v2213, v2215);
              sim_r.txns.push({
                amt: v1274,
                kind: 'from',
                to: v1266,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:411:27:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v1266,
                tok: v1190
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
      const {data: [], secs: v2209, time: v2208, didSend: v963, from: v2207 } = txn4;
      ;
      const cv1260 = v1260;
      const cv1261 = false;
      const cv1262 = v1262;
      const cv1263 = v1263;
      const cv1264 = v1264;
      const cv1265 = v1265;
      const cv1266 = v1266;
      const cv1267 = v2208;
      const cv1273 = v1273;
      const cv1274 = v1274;
      
      v1260 = cv1260;
      v1261 = cv1261;
      v1262 = cv1262;
      v1263 = cv1263;
      v1264 = cv1264;
      v1265 = cv1265;
      v1266 = cv1266;
      v1267 = cv1267;
      v1273 = cv1273;
      v1274 = cv1274;
      
      continue;
      }
    else {
      const {data: [v1432], secs: v1434, time: v1433, didSend: v811, from: v1431 } = txn3;
      switch (v1432[0]) {
        case 'Api_buyDiscount0_286': {
          const v1435 = v1432[1];
          undefined /* setApiDetails */;
          let v1440;
          const v1441 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1442 = stdlib.fromSome(v1441, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1443 = stdlib.lt(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          stdlib.assert(v1443, {
            at: './index.rsh:200:12:application',
            fs: ['at ./index.rsh:359:38:application call to "getDiscountPrice" (defined at: ./index.rsh:198:36:function exp)', 'at ./index.rsh:359:14:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:359:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1444 = stdlib.ge(v1442, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1444) {
            v1440 = stdlib.checkedBigNumberify('./index.rsh:203:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1447 = v1239[v1442];
            v1440 = v1447;
            }
          ;
          const v1503 = stdlib.add(v1303, v1440);
          const v1507 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1508 = [v1503, v1301, v1507];
          const v1509 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1508);
          ;
          const v1514 = stdlib.add(v1442, stdlib.checkedBigNumberify('./index.rsh:367:48:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map0, v1431, v1514);
          null;
          const v1518 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1519 = stdlib.fromSome(v1518, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1520 = {
            addr: v1431,
            discountLevel: v1514,
            timeReductionLevel: v1519
            };
          await txn3.getOutput('Api_buyDiscount', 'v1520', ctc8, v1520);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v1509;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_286': {
          const v1628 = v1432[1];
          undefined /* setApiDetails */;
          let v1648;
          const v1649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1650 = stdlib.fromSome(v1649, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1651 = stdlib.ge(v1650, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, '7'));
          if (v1651) {
            v1648 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1654 = v1240[v1650];
            v1648 = v1654;
            }
          const v1655 = stdlib.lt(v1648, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1655, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:329:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:329:14:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:329:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1656 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1648);
          const v1657 = stdlib.mul(v1263, v1656);
          const v1658 = stdlib.div(v1657, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1693 = stdlib.add(v1274, v1658);
          ;
          const v1700 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1701 = [v1303, v1301, v1700];
          const v1702 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1701);
          ;
          const v1722 = stdlib.gt(v1194, stdlib.checkedBigNumberify('./index.rsh:331:44:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1722, {
            at: './index.rsh:331:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1723 = v1702[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '1')];
          const v1724 = v1723[stdlib.checkedBigNumberify('./index.rsh:332:28:application', stdlib.UInt_max, '0')];
          const v1725 = stdlib.gt(v1724, v1195);
          stdlib.assert(v1725, {
            at: './index.rsh:332:20:application',
            fs: ['at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1726;
          if (v1651) {
            v1726 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1732 = v1240[v1650];
            v1726 = v1732;
            }
          const v1733 = stdlib.lt(v1726, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1733, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:335:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1734 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1726);
          const v1735 = stdlib.mul(v1263, v1734);
          const v1736 = stdlib.div(v1735, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1737 = stdlib.div(v1736, v1194);
          const v1738 = stdlib.add(v1263, v1193);
          null;
          const v1742 = stdlib.sub(v1693, v1737);
          ;
          const v1748 = stdlib.sub(v1724, v1195);
          const v1751 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1')];
          const v1752 = v1723[stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '2')];
          const v1753 = [v1748, v1751, v1752];
          const v1754 = stdlib.Array_set(v1702, stdlib.checkedBigNumberify('./index.rsh:340:61:application', stdlib.UInt_max, '1'), v1753);
          ;
          let v1755;
          const v1756 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1757 = stdlib.fromSome(v1756, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1758 = stdlib.ge(v1757, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1758) {
            v1755 = stdlib.checkedBigNumberify('./index.rsh:253:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1761 = v1242[v1757];
            v1755 = v1761;
            }
          const v1762 = stdlib.sub(v1192, v1755);
          const v1767 = {
            addr: v1431,
            discountLevel: v1650,
            timeReductionLevel: v1757
            };
          await txn3.getOutput('Api_buyTicket', 'v1767', ctc8, v1767);
          const v1774 = stdlib.add(v1264, stdlib.checkedBigNumberify('./index.rsh:348:29:decimal', stdlib.UInt_max, '1'));
          let v1775;
          if (v1651) {
            v1775 = stdlib.checkedBigNumberify('./index.rsh:212:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1781 = v1240[v1650];
            v1775 = v1781;
            }
          const v1782 = stdlib.lt(v1775, stdlib.checkedBigNumberify('./index.rsh:220:17:decimal', stdlib.UInt_max, '100'));
          stdlib.assert(v1782, {
            at: './index.rsh:220:12:application',
            fs: ['at ./index.rsh:349:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:218:47:function exp)', 'at ./index.rsh:330:22:application call to [unknown function] (defined at: ./index.rsh:330:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1783 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:221:23:decimal', stdlib.UInt_max, '100'), v1775);
          const v1784 = stdlib.mul(v1263, v1783);
          const v1785 = stdlib.div(v1784, stdlib.checkedBigNumberify('./index.rsh:221:32:decimal', stdlib.UInt_max, '100'));
          const v1786 = stdlib.add(v1265, v1785);
          const v1787 = stdlib.add(v1262, v1737);
          const v1788 = stdlib.add(v1260, v1762);
          const cv1260 = v1788;
          const cv1261 = true;
          const cv1262 = v1787;
          const cv1263 = v1738;
          const cv1264 = v1774;
          const cv1265 = v1786;
          const cv1266 = v1431;
          const cv1267 = v1433;
          const cv1273 = v1754;
          const cv1274 = v1742;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_286': {
          const v1821 = v1432[1];
          undefined /* setApiDetails */;
          let v1859;
          const v1860 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v1861 = stdlib.fromSome(v1860, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v1862 = stdlib.lt(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          stdlib.assert(v1862, {
            at: './index.rsh:241:12:application',
            fs: ['at ./index.rsh:379:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:239:41:function exp)', 'at ./index.rsh:379:14:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:379:14:function exp)', 'at ./index.rsh:286:23:application call to [unknown function] (defined at: ./index.rsh:286:23:function exp)', 'at ./index.rsh:322:18:application call to [unknown function] (defined at: ./index.rsh:322:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1863 = stdlib.ge(v1861, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, '4'));
          if (v1863) {
            v1859 = stdlib.checkedBigNumberify('./index.rsh:244:16:decimal', stdlib.UInt_max, '249');
            }
          else {
            const v1866 = v1241[v1861];
            v1859 = v1866;
            }
          ;
          const v1889 = stdlib.add(v1303, v1859);
          const v1893 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v1894 = [v1889, v1301, v1893];
          const v1895 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v1894);
          ;
          const v1987 = stdlib.add(v1861, stdlib.checkedBigNumberify('./index.rsh:387:58:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v1431, v1987);
          null;
          const v1989 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v1990 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v1993 = {
            addr: v1431,
            discountLevel: v1990,
            timeReductionLevel: v1987
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1993', ctc8, v1993);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v1895;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_286': {
          const v2014 = v1432[1];
          undefined /* setApiDetails */;
          ;
          const v2086 = v1300[stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '2')];
          const v2087 = [v1303, v1301, v2086];
          const v2088 = stdlib.Array_set(v1273, stdlib.checkedBigNumberify('./index.rsh:286:23:dot', stdlib.UInt_max, '1'), v2087);
          ;
          const v2195 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1431), null);
          const v2196 = stdlib.fromSome(v2195, stdlib.checkedBigNumberify('./index.rsh:196:64:decimal', stdlib.UInt_max, '0'));
          const v2197 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1431), null);
          const v2198 = stdlib.fromSome(v2197, stdlib.checkedBigNumberify('./index.rsh:237:74:decimal', stdlib.UInt_max, '0'));
          const v2199 = {
            addr: v1431,
            discountLevel: v2196,
            timeReductionLevel: v2198
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2199', ctc8, v2199);
          const cv1260 = v1260;
          const cv1261 = true;
          const cv1262 = v1262;
          const cv1263 = v1263;
          const cv1264 = v1264;
          const cv1265 = v1265;
          const cv1266 = v1266;
          const cv1267 = v1433;
          const cv1273 = v2088;
          const cv1274 = v1274;
          
          v1260 = cv1260;
          v1261 = cv1261;
          v1262 = cv1262;
          v1263 = cv1263;
          v1264 = cv1264;
          v1265 = cv1265;
          v1266 = cv1266;
          v1267 = cv1267;
          v1273 = cv1273;
          v1274 = cv1274;
          
          continue;
          break;
          }
        }}
    
    }
  const v2212 = v1273[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
  const v2213 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:48:application', stdlib.UInt_max, '1')];
  const v2215 = v2212[stdlib.checkedBigNumberify('./index.rsh:298:60:application', stdlib.UInt_max, '0')];
  const v2216 = stdlib.sub(v2213, v2215);
  ;
  ;
  null;
  const txn3 = await (ctc.sendrecv({
    args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1267,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:425:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2255, time: v2254, didSend: v1008, from: v2253 } = txn3;
      
      ;
      const v2256 = v2254;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1190
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
  const {data: [], secs: v2255, time: v2254, didSend: v1008, from: v2253 } = txn3;
  ;
  let v2256 = v2254;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1188, v1189, v1190, v1191, v1192, v1193, v1194, v1195, v1210, v1239, v1240, v1241, v1242, v1260, v1262, v1263, v1265, v1266, v2216],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2256,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:428:39:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2268, time: v2267, didSend: v1017, from: v2266 } = txn4;
        
        ;
        const v2269 = stdlib.addressEq(v1188, v2266);
        ;
        const cv2256 = v2267;
        
        await (async () => {
          const v2256 = cv2256;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1190
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
    const {data: [], secs: v2268, time: v2267, didSend: v1017, from: v2266 } = txn4;
    ;
    const v2269 = stdlib.addressEq(v1188, v2266);
    stdlib.assert(v2269, {
      at: './index.rsh:428:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2256 = v2267;
    
    v2256 = cv2256;
    
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
  appApproval: `BiAmAAEIByBAA2QGsALAAqgCoAIoBLgCMDhIUFjgAsgCoI0GEoWf7bsJhZKk2QyDo/jPDdTz3fELi7iLgQKTub7UBK2Em2MF6AIiigMR+QEmBgEAAQEBAgEDAAj//////////yI1ADEYQRDQJwRkSSJbNQEkWzUCMRkjEkEACjEAKCEYr2ZCEJw2GgAXSUEDqiI1BCM1BkkhGQxAAVxJIRoMQAEwSSEbDEAAbCEbEkQ0AUkhCAxAAEFJJQxAACAlEkQoZClkUCpkUCtkUDUDNhoBFzQDIQVbCRY1B0IQVUgoZClkUCpkUDUDNhoBFzQDIQVbCRY1B0IQOiEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCRY1B0IQHCEaEkQ0AUkhCAxAAHZJJQxAADklEkQ2GgE1/yI0/4gQDFcACUk1/iNbNP4iVU0WIjT/iA/4VwkJSTX+I1s0/iJVTRZQNP9QNQdCD9BINhoBNf8iNP+ID9VXAAlJNf4jWzT+IlVNFiI0/4gPwVcJCUk1/iNbNP4iVU0WUDT/UDUHQg+ZIQYSRDYaATX/IjT/iA+bVwAJSTX+I1s0/iJVTRYiNP+ID4dXCQlJNf4jWzT+IlVNFlA0/1A1B0IPX0khHAxAAA8hHBJEJwQ1/ys0/1BCAxUhGRJEJwQ1/yo0/1BCAwZJIR0MQACCSSEeDEAAbCEeEkQ0AUkhCAxAAEFJJQxAACAlEkQoZClkUCpkUCtkUDUDNhoBFzQDIQVbCBY1B0IO+UgoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IO3iEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IOwCEdEkQnBDX/KTT/UEICfUkhHwxAAA8hHxJEJwQ1/yg0/1BCAmeB6oDUOxJENAFJIQgMQAEOSSUMQACHJRJEKGQpZFAqZFArZFBJNQNXMAg0A1c4CFA0A1cgCFA0A1coCFA0A1dACFA0A1dICFA0A1dQCFA0A4GzAyRYUDQDV1gIUDQDIQkkWFA0AyEKJFhQNAMhFiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQg3+SChkKWRQKmRQSTUDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhFSRYUDQDV1gIUDQDIQkkWFA0AyEPJFhQNAMhCiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQg19IQYSRChkKWRQKmRQSTUDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhFSRYUDQDV1gIUDQDIQkkWFA0AyEPJFhQNAMhCiEEWFA0AyELJFhQNAMhDCRYUDQDV2A4UDQDV5hAUDQDV9ggUDQDV/goUDUHQgz5NhoCFzUENhoDNhoBF0khIAxABk9JIQgMQAW2SSUMQACjJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDIQxbNf+ABOIbs6mwMgc0/w9ENANXACA0AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0/yI0AyELWzQDIQlbNAMhD1s0AyEKWzQDIRYhBFgyBjQDISEhIlg0AyEjW0IJ6UglNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJSkpKSkpKSkpKSkpXACA1/yEEWzX+IQ1bNf0hEFs1/CERWzX7IQVbNfohEls1+SETWzX4IRRbNfdXYDg19leYQDX1V9ggNfRX+Cg18yEMWzXyIQtbNfEhCVs18CEPWzXvIQpbNe4hFiEEWDXtISEhIlg17CEjWzXrgZIDISRYNeqBowNbNemBqwNbNehJNQU154AEkE9kSTTnULAyBzTyDEQ05yJVSYECDEABoEkhBgxAAKshBhJEgAgAAAAAAAAIlyIxAIgLX1cACUk15iNbNOYiVU0WIjEAiAtLVwkJSTXmI1s05iJVTRZQMQBQULAiMQCICzFXAAlJNeYjWzTmIlVNFiIxAIgLHVcJCUk15iNbNOYiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08iM08TTwNO807jTtMgY07FcAETToFjTpFlA06lcQAVBQNOtCCGtIIjEAiArBVwkJSTXkI1s05CJVTUk15SEODEQ05SEOD0EAByElNeZCAAs09CQ05QskWBc15jTmNPeICrM05SMINeQxACgxAIgKfik05BZQNeNXAAk041BmgATppO5BMQBQNOQWULCACAAAAAAAAAfJIjEAiApSVwAJSTXjI1s04yJVTRY05BZQMQBQULAiMQCICjVXAAlJNeMjWzTjIlVNFjTkFlAxAFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPIjNPE08DTvNO407TIGNOxXABE06DTmCBY06RZQNOpXEAFQUDTrQgd9SSMMQAGuSCIxAIgJzVcACUk15CNbNOQiVU1JNeUlD0k15EEABiI15kIACzT1JDTlCyRYFzXmNOYhBwxENPAhBzTmCQshBwo14zTjiAmbNOxXABE06BY06RZQNOpXEAFQUDXiNPkjDUQ04lcREUk14SJbSTXgNPgNRDTkQQAGIjXfQgALNPUkNOULJFgXNd803yEHDEQ08CEHNN8JCyEHCkk13jT5CjXdNPA0+gg13IAERcnsxDEAUDTeFlA03BZQsLEisgE03bIII7IQNP+yB7OxIrIBNPiyEiEOshAxALIUNPeyEbMiMQCICO5XCQlJNdkjWzTZIlVNSTXaIQ4PQQAGIjXbQgALNPMkNNoLJFgXNduACAAAAAAAAAbnNOUWNNoWUDEAUFCwNOUWNNoWUDEAUDUHNORBAAYiNdlCAAs09SQ05QskWBc12TTZIQcMRDT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI0+zTbCQgjNPE03Qg03DTvIwg07jTwIQc02QkLIQcKCDEAMgY04lcAETTgNPgJFjThVwgIUDThVxABUFA06zTjCDTdCUIFyUgiMQCICB9XAAlJNeQjWzTkIlVNSTXlJQxENOUlD0EAByElNeZCAAs09iQ05QskWBc15jTmNPeICBM05SMINeQxACgxAIgH3ik05BZQNeNXCQk040xQZoAEVo+HTDEAUDTkFlCwgAgAAAAAAAAF8DTkFiIxAIgHrlcJCUk14yNbNOMiVU0WUDEAUFCwNOQWIjEAiAeRVwkJSTXjI1s04yJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyIzTxNPA07zTuNO0yBjTsVwARNOg05ggWNOkWUDTqVxABUFA060IE3EghCDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABMyZklywNP8xABJENP80AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0AyEMWzQDIQtbNAMhCVs0AyEPWzQDIQohBFg0AyEVWzIGQgXASSMMQAFRSSEGDEAAjCEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEEWzQDIQ1bNAMhEFs0AyERWzQDIQVbNAMhEls0AyETWzQDIRRbNANXYDg0A1eYQDQDV9ggNANX+Cg0AyEMWzQDIQtbNAMhCVs0AyEPWzQDIQohBFg0AyEVWzIGQgUnIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf8hBFs1/iENWzX9IRBbNfxXaCI1+4AEmouRdLA0+1cAETX6IzT9iAXnNP8xABJENP80/jT9NPw0AyERWzQDIQVbNAMhEls0AyETWzQDgWBbNANXijg0A1fCQDQDgYICIQRYNAOBogIhDVg0AyEUWzT8CCMiNP4iIjT/MgY0+iJbIwgWNPpXCAhQNPpXEAFQNPtXERFQIkIC80giNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf8kWzX+gRBbNf2BGFs1/CEEWzX7IQ1bNfohEFs1+YAE/iY4njT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlCwIReIBP4hJK9JNfhJUEk191cAETX2JK809lcICFA09lcQAVA091cREVA19SEXiATTsSKyASKyEiEOshAyCrIUNP6yEbMhF4gEurEisgEhBrIQgf///////////wGyIiEIsiOACE1FVEFGT01PsiWAIE1ldGFmb21vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiaAYGh0dHBzOi8vbWV0YWxhYnMudGVjaG5vbG9neQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALInMgOyKDIKsimztDw19IAIAAAAAAAABLk09BZQsDT0STXzNP4WIlsTRDT1VxERNfI09VcAEScFNPJXCAhQNPJXEAFQUEk18VcRETXwNPFXABE08FcACCcFUDTwVxABUFBJNe9XERE17jTvVwARNO5XAAg07lcICFAoUFA17YA4AAAAAAAAAAgAAAAAAAAADgAAAAAAAAAUAAAAAAAAABoAAAAAAAAAIAAAAAAAAAAmAAAAAAAAACw17IBAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAUAAAAAAAAAB4AAAAAAAAAKAAAAAAAAAAyAAAAAAAAADwAAAAAAAAARjXrgCAAAAAAAAAACgAAAAAAAAAZAAAAAAAAACgAAAAAAAAAPDXqgCgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQNekxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlAyBxZQNPMWUDTtUDTsUDTrUDTqUDTpUChLAVcAf2cpSwFXf39nKksBV/5MZ0gjNQEyBjUCQgIfNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNe017DXrNeo16TT3QQCeNP5XERFJNegkWzXnNOgiWzXmNOc05gk15TTpNOoWUDTrFlA07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08lA081A09FA09VA09hZQNPgWUDT5FlA0+hZQNPsWUDT8UDT+UDT/FlA06FA05xZQNOYWUDTlFlAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwGB/QKBPlhnSCU1ATIGNQJCAU40/lcREUk16CRbNOgiWwk157EisgE0/7III7IQNPyyB7OxIrIBI7ISIQ6yEDT8shQ067IRs4AE7JthtzT8ULA06TTqFlA06xZQNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPJQNPNQNPRQNPVQNPYWUDT4FlA0+RZQNPsWUDT8UDTnFlAoSwFXAH9nKUsBV39/ZypLAVf+amdIIQY1ATIGNQJCAKk1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417Uk17DTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPVQNPZQNPdQNPhQNPkWUDT6FlA0+xZQNPwWUDT9UDT+FlAoSwFXAH9nKUsBV39/ZypLAVf+amdIIQg1ATIGNQJCABwxGSEgEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8JJMRhhQAAFSCEYr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEOEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v1189",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1190",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1195",
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
                "name": "v1189",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1190",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1195",
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
                    "name": "_Api_buyDiscount0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_286",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1432",
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
    "name": "_reach_oe_v1209",
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
    "name": "_reach_oe_v1520",
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
    "name": "_reach_oe_v1767",
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
    "name": "_reach_oe_v1993",
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
    "name": "_reach_oe_v2199",
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
        "name": "v4177",
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
        "name": "v4181",
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
        "name": "v4185",
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
                    "name": "_Api_buyDiscount0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_286",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_getParticipantStats0_286",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T26",
                "name": "v1432",
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
  Bytecode: `0x608060405260405162006a6e38038062006a6e833981016040819052620000269162000ab7565b6000805543600355620000386200069e565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005f1565b6060820152620001473415600b62000674565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e086015151602084015291016040516020818303038152906040526000196012604051620002619062000840565b620002729695949392919062000bcc565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f72e9ad9e10922f2cdeed3ec94ea504c2214cb161d5ecd9e80d64cb8972f947b99060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600c62000674565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005f1565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005f1565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005f1565b610200820152610220810180516008908190528151600e6020918201528251601460409182018190528451601a606091820152855160809081018590528651602660a0918201529651602c60c091820152610240890180516000908190528151600a90890181905282518801969096528151601e9086015281516028908501819052825160329b019a909a528151603c93018390529051604660e0909101526102608a018051959095528451601990880152845186019890985292518201929092526102808701805196909652855160049401939093528451909101929092528251600c91015290516010910152620004ef6200084e565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526102808401516101c08401526001600081905543905551620005c19183910162000d11565b60405160208183030381529060405260029080519060200190620005e7929190620008c5565b5050505062000e85565b620005fb62000954565b60005b600281101562000651578481600281106200061d576200061d62000b66565b602002015182826002811062000637576200063762000b66565b602002015280620006488162000e1e565b915050620005fe565b508181846002811062000668576200066862000b66565b60200201529392505050565b816200069a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051610300810190915260006102a082018181526102c083018290526102e0830191909152815260208101620006d562000954565b815260408051606081018252600080825260208281018290529282015291019081526020016200070462000954565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e00162000772620009a1565b81526040805160608101825260008082526020828101829052928201529101908152602001620007a162000954565b81526040805160608101825260008082526020828101829052928201529101908152602001620007d062000954565b81526040805160608101825260008082526020828101829052928201529101908152602001620007ff62000954565b81526020016200080e620009bf565b81526020016200081d620009dd565b81526020016200082c620009fc565b81526020016200083b62000a1a565b905290565b61108780620059e783390190565b604051806101e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620007ff62000954565b828054620008d39062000e48565b90600052602060002090601f016020900481019282620008f7576000855562000942565b82601f106200091257805160ff191683800117855562000942565b8280016001018555821562000942579182015b828111156200094257825182559160200191906001019062000925565b506200095092915062000a38565b5090565b60405180604001604052806002905b6200098a604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009635790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060e001604052806007906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b5b8082111562000950576000815560010162000a39565b604080519081016001600160401b038111828210171562000a8057634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b038111828210171562000a8057634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000acc57600080fd5b62000ad662000a4f565b8351815260e0601f198301121562000aed57600080fd5b62000af762000a86565b6020850151815260408501519092506001600160a01b038116811462000b1c57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000ba45760208185018101518683018201520162000b86565b8181111562000bb7576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000be160c083018962000b7c565b828103602084015262000bf5818962000b7c565b9050828103604084015262000c0b818862000b7c565b9050828103606084015262000c21818762000b7c565b6080840195909552505060a00152949350505050565b8060005b600281101562000c7757815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000c3b565b50505050565b8060005b600781101562000c7757815184526020938401939091019060010162000c81565b8060005b600881101562000c7757815184526020938401939091019060010162000ca6565b8060005b600481101562000c7757815184526020938401939091019060010162000ccb565b8060005b600581101562000c7757815184526020938401939091019060010162000cf0565b81516001600160a01b03168152610500810160208301516020830152604083015162000d4860408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000da3828501826001600160a01b03169052565b50506101408084015162000dba8285018262000c37565b505061016083015162000dd261020084018262000c7d565b5061018083015162000de96102e084018262000ca2565b506101a083015162000e006103e084018262000cc7565b506101c083015162000e1761046084018262000cec565b5092915050565b600060001982141562000e4157634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000e5d57607f821691505b6020821081141562000e7f57634e487b7160e01b600052602260045260246000fd5b50919050565b614b528062000e956000396000f3fe6080604052600436106101015760003560e01c80637a3678dd1161008f578063ab53f2c611610061578063ab53f2c614610243578063bf2c5b2414610266578063cadc2e7a14610279578063e73216b514610299578063eef5632c146102a157005b80637a3678dd146101d957806383230757146101fb5780638e31476914610210578063a55605961461022357005b80633bc5b7bf116100d35780633bc5b7bf146101765780636579ece6146101a35780636cd6de3a146101b65780636cdcb9df146101be57806373b4522c146101c657005b80631e93b0f11461010a5780632b10758a1461012e5780632c10a1591461014357806330a94db41461015657005b3661010857005b005b34801561011657600080fd5b506003545b6040519081526020015b60405180910390f35b6101366102c1565b6040516101259190613ba2565b610108610151366004613bcc565b610311565b34801561016257600080fd5b5061011b610171366004613be4565b610335565b34801561018257600080fd5b50610196610191366004613c15565b61058c565b6040516101259190613c48565b6101086101b1366004613c7f565b6105b8565b6101366105d8565b61013661062b565b6101086101d4366004613bcc565b610681565b3480156101e557600080fd5b506101ee6106a1565b6040516101259190613d1d565b34801561020757600080fd5b5060015461011b565b61010861021e366004613bcc565b610b1b565b34801561022f57600080fd5b5061011b61023e366004613be4565b610b3b565b34801561024f57600080fd5b50610258610d86565b604051610125929190613e64565b610108610274366004613bcc565b610e23565b34801561028557600080fd5b50610196610294366004613c15565b610e43565b610136610e69565b3480156102ad57600080fd5b506101366102bc366004613c15565b610ebc565b6102c961340c565b6102d1613436565b6102d9613475565b6102e161348f565b6000602082810182905290825260408051808301909152828152908301526103098284611198565b505051919050565b610319613436565b61033161032b36849003840184613f97565b82612245565b5050565b6000600160005414156103f25760006002805461035190613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90613fec565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b50505050508060200190518101906103e2919061425c565b90506103f06000600a612554565b505b600360005414156104b65760006002805461040c90613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461043890613fec565b80156104855780601f1061045a57610100808354040283529160200191610485565b820191906000526020600020905b81548152906001019060200180831161046857829003601f168201915b505050505080602001905181019061049d9190614357565b90508060a00151836104af9190614497565b9392505050565b600660005414156104d05760006002805461040c90613fec565b6007600054141561057b576000600280546104ea90613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461051690613fec565b80156105635780601f1061053857610100808354040283529160200191610563565b820191906000526020600020905b81548152906001019060200180831161054657829003601f168201915b505050505080602001905181019061049d91906144ae565b6105876000600a612554565b919050565b60408051606081018252600080825260208201819052918101919091526105b28261257a565b92915050565b6105c0613436565b6103316105d236849003840184614632565b82611198565b6105e061340c565b6105e8613436565b6105f0613475565b6105f861348f565b6000606082015260028152604080516020808201909252828152908301526106208284611198565b505060400151919050565b61063361340c565b61063b613436565b610643613475565b61064b61348f565b6000604082015260018181905250604080516020808201909252828152908301526106768284611198565b505060200151919050565b610689613436565b61033161069b36849003840184613f97565b8261264c565b6106a96134bf565b60016000541415610764576000600280546106c390613fec565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef90613fec565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b5050505050806020019051810190610754919061425c565b905061076260006007612554565b505b6003600054141561092d5760006002805461077e90613fec565b80601f01602080910402602001604051908101604052809291908181526020018280546107aa90613fec565b80156107f75780601f106107cc576101008083540402835291602001916107f7565b820191906000526020600020905b8154815290600101906020018083116107da57829003601f168201915b505050505080602001905181019061080f9190614357565b9050610819613577565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526102408401518351909101526101008084015183519083169101526101e080840151835161012090810191909152610200808601518551610140908101919091526102208088015187519616610160968701526101c0808901518851610180908101919091526101a0808b01518a519091015294890151885190910152908701518651909401939093529285015184519093019290925292015181519092019190915251919050565b600660005414156109475760006002805461077e90613fec565b60076000541415610b0c5760006002805461096190613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461098d90613fec565b80156109da5780601f106109af576101008083540402835291602001916109da565b820191906000526020600020905b8154815290600101906020018083116109bd57829003601f168201915b50505050508060200190518101906109f291906144ae565b90506109fc613577565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526103008401518351909101526101008084015183519083169101526101e0808401518351610120908101919091526102208086015185516101409081019190915261024087015186519516610160958601526101c0808801518751610180908101919091526101a0808a015189519091015293880151875190910152860151855190930192909252918401518351610200015292015181519092019190915251919050565b610b1860006007612554565b90565b610b23613436565b610331610b3536849003840184613f97565b8261287a565b600060016000541415610bf857600060028054610b5790613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8390613fec565b8015610bd05780601f10610ba557610100808354040283529160200191610bd0565b820191906000526020600020905b815481529060010190602001808311610bb357829003601f168201915b5050505050806020019051810190610be8919061425c565b9050610bf660006008612554565b505b60036000541415610cb557600060028054610c1290613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3e90613fec565b8015610c8b5780601f10610c6057610100808354040283529160200191610c8b565b820191906000526020600020905b815481529060010190602001808311610c6e57829003601f168201915b5050505050806020019051810190610ca39190614357565b90508060a00151836104af91906146e6565b60066000541415610ccf57600060028054610c1290613fec565b60076000541415610d7a57600060028054610ce990613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1590613fec565b8015610d625780601f10610d3757610100808354040283529160200191610d62565b820191906000526020600020905b815481529060010190602001808311610d4557829003601f168201915b5050505050806020019051810190610ca391906144ae565b61058760006008612554565b600060606000546002808054610d9b90613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc790613fec565b8015610e145780601f10610de957610100808354040283529160200191610e14565b820191906000526020600020905b815481529060010190602001808311610df757829003601f168201915b50505050509050915091509091565b610e2b613436565b610331610e3d36849003840184613f97565b826129ae565b60408051606081018252600080825260208201819052918101919091526105b282612c1b565b610e7161340c565b610e79613436565b610e81613475565b610e8961348f565b600060808201526003815260408051602080820190925282815290830152610eb18284611198565b505060600151919050565b610ec461340c565b60016000541415610f7f57600060028054610ede90613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0a90613fec565b8015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b5050505050806020019051810190610f6f919061425c565b9050610f7d60006009612554565b505b600360005414156110c757600060028054610f9990613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc590613fec565b80156110125780601f10610fe757610100808354040283529160200191611012565b820191906000526020600020905b815481529060010190602001808311610ff557829003601f168201915b505050505080602001905181019061102a9190614357565b905061103461358a565b600161103f8561257a565b51600181111561105157611051613c32565b1461105d57600061106b565b6110668461257a565b604001515b815152600161107985612c1b565b51600181111561108b5761108b613c32565b146110975760006110a5565b6110a084612c1b565b604001515b81516020015280516001600160a01b0390941660409094019390935250505190565b600660005414156110e157600060028054610f9990613fec565b6007600054141561118c576000600280546110fb90613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461112790613fec565b80156111745780601f1061114957610100808354040283529160200191611174565b820191906000526020600020905b81548152906001019060200180831161115757829003601f168201915b505050505080602001905181019061102a91906144ae565b61058760006009612554565b6111a86007600054146028612554565b81516111c39015806111bc57508251600154145b6029612554565b6000808055600280546111d590613fec565b80601f016020809104026020016040519081016040528092919081815260200182805461120190613fec565b801561124e5780601f106112235761010080835404028352916020019161124e565b820191906000526020600020905b81548152906001019060200180831161123157829003601f168201915b505050505080602001905181019061126691906144ae565b905061127061359d565b611282826101a001514210602a612554565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e1846040516112b191906146fe565b60405180910390a160006020850151515160038111156112d3576112d3613c32565b14156116215760016112e43361257a565b5160018111156112f6576112f6613c32565b14611302576000611310565b61130b3361257a565b604001515b60208201819052611325906007116019612554565b600781602001511061133a5760f9815261135d565b8161012001518160200151600781106113555761135561475e565b602002015181525b6113693415601a612554565b80516102e083015161137b91906146e6565b60408083018051929092526102c08401518251602001526102a0840151810151915191151591015261010082015181516113c2916113bb91339190612ca8565b601b612554565b600181602001516113d391906146e6565b6060820190815233600081815260046020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527f049bed53fc19127a68e64c896e243a07b2c555296c04f396e70a2b7556edee6e910160405180910390a16060810151608082015152600161144d33612c1b565b51600181111561145f5761145f613c32565b1461146b576000611479565b61147433612c1b565b604001515b60808201805160200191909152805133604091820152905190517fd6ca81ba860c91daab43df302beffab04bac944480463169bb40502bcd3223f5916114be91613ba2565b60405180910390a1608081015183526114d5613722565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c015181518801526101e08c01518151909601959095526102008b01518551909401939093526102208a0151845190920191909152610240890151835196169501949094525143930192909252610260850151918401516115f7929190612cbe565b60208201805161010001919091526102808401519051610120015261161b81612d32565b5061223f565b600160208501515151600381111561163b5761163b613c32565b1415611c7157600161164c3361257a565b51600181111561165e5761165e613c32565b1461166a576000611678565b6116733361257a565b604001515b60c08201819052600711801560e083015261169957600060a08201526116bf565b8161014001518160c00151600881106116b4576116b461475e565b602002015160a08201525b6116d160648260a0015110601c612554565b60648160a0015160646116e49190614497565b836101e001516116f49190614774565b6116fe9190614793565b6101008201819052611713903414601d612554565b6102e082015161012082018051919091526102c08301518151602001526102a0830151604090810151825190151591015261026083015190516117599190600190612cbe565b81610140018190525061177d611776338461010001516000612ca8565b601e612554565b61178f60018360c0015111601f612554565b60e0820151610140820151602090810151516117ac921090612554565b8060e00151156117c35760006101608201526117ea565b8161014001518160c00151600881106117de576117de61475e565b60200201516101608201525b6117fd6064826101600151106021612554565b606481610160015160646118119190614497565b836101e001516118219190614774565b61182b9190614793565b610180820181905260c083015161184191614793565b6101a082015260a08201516101e083015161185c91906146e6565b6101c082018190526101808201516040805133815260208101929092528101919091527f3698508a0af4c7883b38082eb105938584bdb53436931b82abc2c338128794d09060600160405180910390a181516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156118ea573d6000803e3d6000fd5b5060e082015161014082015160200151516119059190614497565b6101e0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015261010082015160e083015161194e919033906130cd565b600161195933612c1b565b51600181111561196b5761196b613c32565b14611977576000611985565b61198033612c1b565b604001515b61022082018190526004116119a15760006102008201526119c9565b816101800151816102200151600581106119bd576119bd61475e565b60200201516102008201525b60c08101516102408201805191909152610220820151815160200152805133604091820152905190517f5b7d83533fc4f5ae84372fdb245dfb3828faabcc770cb7bd76c42c890d03516f91611a1d91613ba2565b60405180910390a1610240810151602084015260e081015115611a47576000610260820152611a6e565b8161014001518160c0015160088110611a6257611a6261475e565b60200201516102608201525b611a816064826102600151106022612554565b611a89613722565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e0808601518451909101526101008086015184519316920191909152610120808501518351909101526101408085015183519091015261016080850151835190910152610180808501518351909101526102008301519051611b4b9190614497565b836101a00151611b5b91906146e6565b6020808301805192909252905160019101526101a08201516101c0840151611b8391906146e6565b602082018051604001919091526101c0830151905160600152610200830151611bae906001906146e6565b602082015160800152610260820151606490611bca9082614497565b846101e00151611bda9190614774565b611be49190614793565b836102200151611bf491906146e6565b60208201805160a0019190915280513360c090910152514360e0909101526101408201516101e0830151611c2b9190600190612cbe565b81602001516101000181905250816101a00151826101000151846102800151611c5491906146e6565b611c5e9190614497565b6020820151610120015261161b81612d32565b6002602085015151516003811115611c8b57611c8b613c32565b1415611fca576001611c9c33612c1b565b516001811115611cae57611cae613c32565b14611cba576000611cc8565b611cc333612c1b565b604001515b6102a08201819052611cde906004116023612554565b6004816102a0015110611cf85760f9610280820152611d20565b816101600151816102a0015160048110611d1457611d1461475e565b60200201516102808201525b611d2c34156024612554565b806102800151826102e00151611d4291906146e6565b6102c08083018051929092528301518151602001526102a08301516040908101519151911515910152610100820151610280820151611d8e91611d8791339190612ca8565b6025612554565b6001816102a00151611da091906146e6565b6102e0820190815233600081815260056020908152604091829020805460ff1916600190811782559451940184905581519283528201929092527fa713e261ccde52235a352fbddb3afe2103de7321502fbf5721c5b46e2e903b85910160405180910390a16001611e103361257a565b516001811115611e2257611e22613c32565b14611e2e576000611e3c565b611e373361257a565b604001515b61030082018051919091526102e0820151815160200152805133604091820152905190517f422dc1dc6a30c5941f3194d93cbbc1eb3afdb861ae5df8d291ecc37be1ea249991611e8b91613ba2565b60405180910390a16103008101516040840152611ea6613722565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c01518151909701969096526101e08b01518651909501949094526102008a01518551909301929092526102208901518451909101526102408801518351951694019390935251439201919091526102608401516102c08401516115f79290612cbe565b6003602085015151516003811115611fe457611fe4613c32565b141561223f57611ff634156026612554565b6102e082015161032082018051919091526102c08301518151602001526102a083015160409081015191519115159101526101008201516120459061203e9033906000612ca8565b6027612554565b60016120503361257a565b51600181111561206257612062613c32565b1461206e57600061207c565b6120773361257a565b604001515b61034082015152600161208e33612c1b565b5160018111156120a0576120a0613c32565b146120ac5760006120ba565b6120b533612c1b565b604001515b6103408201805160200191909152805133604091820152905190517f0e82a10de7b02c7543307d86c6e2da14edf1bcf83816dc781cc56b8c4e26bb629161210091613ba2565b60405180910390a1610340810151606084015261211b613722565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951820152610100808c01518a51908a16910152610120808c01518a5190910152610140808c01518a5190910152610160808c01518a5190910152610180808c01518a51909101526101a08b0151878a018051919091528051600198018890526101c08c01518151909701969096526101e08b01518651909501949094526102008a01518551909301929092526102208901518451909101526102408801518351951694019390935251439201919091526102608401516103208401516115f79290612cbe565b50505050565b6122556001600054146010612554565b815161227090158061226957508251600154145b6011612554565b60008080556002805461228290613fec565b80601f01602080910402602001604051908101604052809291908181526020018280546122ae90613fec565b80156122fb5780601f106122d0576101008083540402835291602001916122fb565b820191906000526020600020905b8154815290600101906020018083116122de57829003601f168201915b5050505050806020019051810190612313919061425c565b905061233c60408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16123873415600d612554565b610140820151515161239b906001906146e6565b815152610140820180515160209081015183519091015251516040908101518251901515908201528201516123de906123d79033906001612ca8565b600e612554565b81516123f6906001600160a01b03163314600f612554565b6123fe613722565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e0808601518451909101526101208086015184519316610100938401526101608087015185519092019190915261018080870151855161014001526101a08701518551909201919091526101c086015184519091015251908401516124c391906146e6565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052815160a001819052845182516001600160a01b0390911660c09091015290514360e090910152610140840151835161252c9290612cbe565b60208201805161010001919091525160006101209091015261254d81612d32565b5050505050565b816103315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156125c6576125c6613c32565b141561263d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561260757612607613c32565b600181111561261857612618613c32565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b61265c6003600054146013612554565b815161267790158061267057508251600154145b6014612554565b60008080556002805461268990613fec565b80601f01602080910402602001604051908101604052809291908181526020018280546126b590613fec565b80156127025780601f106126d757610100808354040283529160200191612702565b820191906000526020600020905b8154815290600101906020018083116126e557829003601f168201915b505050505080602001905181019061271a9190614357565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a161276834156012612554565b612770613742565b815181516001600160a01b0391821690526020808401518351820152604080850151845190841691015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e080850151845190910152610100808501518451908416910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a0808501518451909101526101c0808501518451909101526101e0808501518451909101526102008085015184519091015261022080850151845193169201919091526102408084015183519091015281015143905261223f816130e6565b61288a6006600054146017612554565b81516128a590158061289e57508251600154145b6018612554565b6000808055600280546128b790613fec565b80601f01602080910402602001604051908101604052809291908181526020018280546128e390613fec565b80156129305780601f1061290557610100808354040283529160200191612930565b820191906000526020600020905b81548152906001019060200180831161291357829003601f168201915b50505050508060200190518101906129489190614357565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a161299634156015612554565b8051612768906001600160a01b031633146016612554565b6129be600760005414602c612554565b81516129d99015806129d257508251600154145b602d612554565b6000808055600280546129eb90613fec565b80601f0160208091040260200160405190810160405280929190818152602001828054612a1790613fec565b8015612a645780601f10612a3957610100808354040283529160200191612a64565b820191906000526020600020905b815481529060010190602001808311612a4757829003601f168201915b5050505050806020019051810190612a7c91906144ae565b9050612a91816101a00151421015602e612554565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a1612adc3415602b612554565b612ae4613722565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a01518951820152610100808b01518a51908a1690820152610120808c01518b51820152610140808d01518c5190910152610160808d01518c5190910152610180808d01518c51909101526101a08c0151898c01805191909152805160009a01999099526101c08c01518951909801979097526101e08b01518851909601959095526102008a01518751909401939093526102208901518651909201919091526102408801518551961695019490945282514394019390935261026085015182519093019290925261028084015190519091015261223f81612d32565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115612c6757612c67613c32565b141561263d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561260757612607613c32565b6000612cb683853085613226565b949350505050565b612cc6613770565b60005b6002811015612d1257848160028110612ce457612ce461475e565b6020020151828260028110612cfb57612cfb61475e565b602002015280612d0a816147b5565b915050612cc9565b5081818460028110612d2657612d2661475e565b60200201529392505050565b604080518082019091526000808252602082015281602001516020015115612ef25760208281015161010001518101518051910151612d719190614497565b8152612d7b6137bb565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015181890152895160e090810151908901528951610100908101518816818a01528a5161012090810151818b01528b5161014090810151908b01528b5161016090810151908b01528b5161018090810151908b0152878c018051516101a08c015280518801516101c08c01528051909601516101e08b01528551909401516102008a01528451909201516102208901528351015190951661024087015281518501516102608701528151015161028086015280518401518301516102a086015280518401518301518301516102c08601525190920151810151516102e084015283516103008401526007600055436001559051612ece91839101614814565b6040516020818303038152906040526002908051906020019061223f9291906138dd565b60208281015161010001518101518051910151612f0f9190614497565b60208083019190915282015160c0810151610120909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612f5d573d6000803e3d6000fd5b50612f7a826000015160400151836020015160c0015160016130cd565b60208083015160c001516040516001600160a01b0390911681527f10712c47b269c9df1f602c16156b1d6404c0b81b5bbebfe8e2d13e08bda50b68910160405180910390a1612fc7613961565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190860152865160a09081015181870152875160c09081015181880152885160e09081015190880152885161010090810151871690880152885161012090810151908801528851610140908101519088015288516101609081015190880152885161018090810151908801528489018051516101a089015280518501516101c08901528051909301516101e088015282519091015161020087015290510151909216610220840152838101516102408401526003600055436001559051612ece918391016149b3565b6130d8838383613300565b6130e157600080fd5b505050565b6130ee613961565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101518416908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519085015284516101c0908101519085015284516101e090810151908501528451610200908101519085015284516102209081015190931692840192909252835161024090810151908401526006600055436001559051613202918391016149b3565b604051602081830303815290604052600290805190602001906130e19291906138dd565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161328d91614ae3565b60006040518083038185875af1925050503d80600081146132ca576040519150601f19603f3d011682016040523d82523d6000602084013e6132cf565b606091505b50915091506132e0828260016133d1565b50808060200190518101906132f59190614aff565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161335f91614ae3565b60006040518083038185875af1925050503d806000811461339c576040519150601f19603f3d011682016040523d82523d6000602084013e6133a1565b606091505b50915091506133b2828260026133d1565b50808060200190518101906133c79190614aff565b9695505050505050565b606083156133e05750816104af565b8251156133f05782518084602001fd5b60405163100960cb60e01b815260048101839052602401612571565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b604051806080016040528061344961340c565b815260200161345661340c565b815260200161346361340c565b815260200161347061340c565b905290565b604051806040016040528060008152602001613470613a2f565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b60405180610240016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001613550613a42565b815260200161355d613a60565b815260200161356a613a7f565b8152602001613470613a9d565b60405180602001604052806134706134bf565b604051806020016040528061347061340c565b60405180610360016040528060008152602001600081526020016135dd604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016135f161340c565b815260200160008152602001600081526020016000151581526020016000815260200161363a604051806060016040528060008152602001600081526020016000151581525090565b8152602001613647613770565b81526020016000815260200160008152602001600081526020016000815260200161368e604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600081526020016136a961340c565b81526020016000815260200160008152602001600081526020016136e9604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016136fd61340c565b8152604080516060810182526000808252602082810182905292820152910190613463565b6040518060400160405280613735613abb565b8152602001613470613b29565b6040518060400160405280613755613961565b81526020016134706040518060200160405280600081525090565b60405180604001604052806002905b6137a5604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161377f5790505090565b60405180610320016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613829613a42565b8152602001613836613a60565b8152602001613843613a7f565b8152602001613850613a9d565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613890613770565b8152602001600081526020016138c2604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b8280546138e990613fec565b90600052602060002090601f01602090048101928261390b5760008555613951565b82601f1061392457805160ff1916838001178555613951565b82800160010185558215613951579182015b82811115613951578251825591602001919060010190613936565b5061395d929150613b8d565b5090565b60405180610260016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016139cf613a42565b81526020016139dc613a60565b81526020016139e9613a7f565b81526020016139f6613a9d565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b604051806020016040528061347061348f565b6040518060e001604052806007906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b604051806101a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613550613a42565b604051806101400160405280600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001613b80613770565b8152602001600081525090565b5b8082111561395d5760008155600101613b8e565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b600060408284031215613bde57600080fd5b50919050565b600060208284031215613bf657600080fd5b5035919050565b6001600160a01b0381168114613c1257600080fd5b50565b600060208284031215613c2757600080fd5b81356104af81613bfd565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110613c5f57613c5f613c32565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215613bde57600080fd5b8060005b600781101561223f578151845260209384019390910190600101613c95565b8060005b600881101561223f578151845260209384019390910190600101613cb8565b8060005b600481101561223f578151845260209384019390910190600101613cdb565b8060005b600581101561223f578151845260209384019390910190600101613cfe565b60006104c0820190508251825260208301516020830152604083015160408301526060830151613d5860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151613d9c828501826001600160a01b03169052565b505061012083810151908301526101408084015190830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c080840151613df182850182613c91565b50506101e0830151613e076102a0840182613cb4565b50610200830151613e1c6103a0840182613cd7565b50610220830151613e31610420840182613cfa565b5092915050565b60005b83811015613e53578181015183820152602001613e3b565b8381111561223f5750506000910152565b8281526040602082015260008251806040840152613e89816060850160208701613e38565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101e081016001600160401b0381118282101715613ed757613ed7613e9e565b60405290565b60405161026081016001600160401b0381118282101715613ed757613ed7613e9e565b60405161032081016001600160401b0381118282101715613ed757613ed7613e9e565b604080519081016001600160401b0381118282101715613ed757613ed7613e9e565b604051602081016001600160401b0381118282101715613ed757613ed7613e9e565b60405160a081016001600160401b0381118282101715613ed757613ed7613e9e565b8015158114613c1257600080fd5b600060408284031215613fa957600080fd5b604051604081018181106001600160401b0382111715613fcb57613fcb613e9e565b604052823581526020830135613fe081613f89565b60208201529392505050565b600181811c9082168061400057607f821691505b60208210811415613bde57634e487b7160e01b600052602260045260246000fd5b805161058781613bfd565b60006060828403121561403e57600080fd5b604051606081018181106001600160401b038211171561406057614060613e9e565b80604052508091508251815260208301516020820152604083015161408481613f89565b6040919091015292915050565b600082601f8301126140a257600080fd5b604051604081018181106001600160401b03821117156140c4576140c4613e9e565b6040528060c08401858111156140d957600080fd5b845b818110156140fd576140ed878261402c565b83526020909201916060016140db565b509195945050505050565b600082601f83011261411957600080fd5b60405160e081018181106001600160401b038211171561413b5761413b613e9e565b6040528060e084018581111561415057600080fd5b845b818110156140fd578051835260209283019201614152565b600082601f83011261417b57600080fd5b6040516101008082018281106001600160401b038211171561419f5761419f613e9e565b604052830181858211156141b257600080fd5b845b828110156140fd5780518252602091820191016141b4565b600082601f8301126141dd57600080fd5b604051608081018181106001600160401b03821117156141ff576141ff613e9e565b60405280608084018581111561415057600080fd5b600082601f83011261422557600080fd5b60405160a081018181106001600160401b038211171561424757614247613e9e565b6040528060a084018581111561415057600080fd5b6000610500828403121561426f57600080fd5b614277613eb4565b61428083614021565b81526020830151602082015261429860408401614021565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206142e9818501614021565b908201526101406142fc85858301614091565b9082015261430e846102008501614108565b610160820152614322846102e0850161416a565b610180820152614336846103e085016141cc565b6101a082015261434a846104608501614214565b6101c08201529392505050565b60006104e0828403121561436a57600080fd5b614372613edd565b61437b83614021565b81526020830151602082015261439360408401614021565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006143d8818501614021565b908201526101206143eb85858301614108565b908201526102006143fe8585830161416a565b6101408301526144128561030086016141cc565b610160830152614426856103808601614214565b6101808301526104208401516101a08301526104408401516101c08301526104608401516101e0830152610480840151908201526144676104a08401614021565b6102208201526104c0929092015161024083015250919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156144a9576144a9614481565b500390565b600061068082840312156144c157600080fd5b6144c9613f00565b6144d283614021565b8152602083015160208201526144ea60408401614021565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010061452f818501614021565b9082015261012061454285858301614108565b908201526102006145558585830161416a565b61014083015261030061456a868287016141cc565b61016084015261457e866103808701614214565b6101808401526104208501516101a08401526104408501516101c08401526104608501516101e0840152610480850151828401526104a08501516102208401526145cb6104c08601614021565b6102408401526145df866104e08701614091565b6102608401526105a08501516102808401526145ff866105c0870161402c565b6102a08401526106208501516102c08401526106408501516102e084015261066090940151938201939093529392505050565b600081830360c081121561464557600080fd5b61464d613f23565b8335815260a0601f198301121561466357600080fd5b61466b613f45565b9150614675613f67565b60208501356004811061468757600080fd5b8152604085013561469781613f89565b602082015260608501356146aa81613f89565b604082015260808501356146bd81613f89565b606082015260a08501356146d081613f89565b6080820152825260208101919091529392505050565b600082198211156146f9576146f9614481565b500190565b81518152602082015151805160c0830191906004811061472057614720613c32565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561478e5761478e614481565b500290565b6000826147b057634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156147c9576147c9614481565b5060010190565b8060005b600281101561223f576147fe84835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016147d4565b81516001600160a01b03168152610680810160208301516020830152604083015161484a60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614898828501826001600160a01b03169052565b5050610120808401516148ad82850182613c91565b50506101408301516102006148c481850183613cb4565b61016085015191506103006148db81860184613cd7565b61018086015192506148f1610380860184613cfa565b6101a08601516104208601526101c08601516104408601526101e0860151610460860152818601516104808601526102208601516104a08601526102408601516001600160a01b03166104c086015261026086015192506149566104e08601846147d0565b6102808601516105a08601526102a086015180516105c087015260208101516105e08701526040015115156106008601526102c08601516106208601526102e0860151610640860152909401516106609093019290925292915050565b81516001600160a01b031681526104e081016020830151602083015260408301516149e960408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614a37828501826001600160a01b03169052565b505061012080840151614a4c82850182613c91565b5050610140830151610200614a6381850183613cb4565b6101608501519150614a79610300850183613cd7565b6101808501519150614a8f610380850183613cfa565b6101a08501516104208501526101c08501516104408501526101e0850151610460850152840151610480840152506102208301516001600160a01b03166104a0830152610240909201516104c09091015290565b60008251614af5818460208701613e38565b9190910192915050565b600060208284031215614b1157600080fd5b81516104af81613f8956fea264697066735822122004eb60a90b4ae93970a20bb2675bcf633b2b02869a6fb283fbc909043c5e6f7364736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212201694f684b12532df0924bcd0dd6f7b475097ccf44c07df8b323257a619ae7ab364736f6c634300080c0033`,
  BytecodeLen: 27246,
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

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
  const ctc8 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['initialPrice', ctc1], ['nftPrize', ctc2], ['priceStep', ctc1], ['ticketFeeDenominator', ctc1], ['tokensGivenPerTicket', ctc1], ['tokenOwnedByUsers', ctc1], ['token', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1], ['discountPrices', ctc6], ['discountPercents', ctc7], ['timeReductionPrices', ctc6], ['timeReductionSecs', ctc7]]);
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
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1160, v1173, v1201, v1202, v1203, v1205] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async () => {
                
                const v2198 = {
                  currentPrice: v1228,
                  currentTotal: v1230,
                  currentWinner: v1231,
                  deadline: v1154,
                  deltaDeadline: v1155,
                  discountPercents: v1203,
                  discountPrices: v1202,
                  endTimestamp: v1225,
                  initialPrice: v1152,
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  priceStep: v1156,
                  ticketFeeDenominator: v1157,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v2193,
                  tokensGivenPerTicket: v1158
                  };
                
                return v2198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async () => {
                
                const v2198 = {
                  currentPrice: v1228,
                  currentTotal: v1230,
                  currentWinner: v1231,
                  deadline: v1154,
                  deltaDeadline: v1155,
                  discountPercents: v1203,
                  discountPrices: v1202,
                  endTimestamp: v1225,
                  initialPrice: v1152,
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  priceStep: v1156,
                  ticketFeeDenominator: v1157,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v2193,
                  tokensGivenPerTicket: v1158
                  };
                
                return v2198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
              return (await ((async () => {
                
                const v1274 = {
                  currentPrice: v1228,
                  currentTotal: v1230,
                  currentWinner: v1231,
                  deadline: v1154,
                  deltaDeadline: v1155,
                  discountPercents: v1203,
                  discountPrices: v1202,
                  endTimestamp: v1225,
                  initialPrice: v1152,
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  priceStep: v1156,
                  ticketFeeDenominator: v1157,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v1269,
                  tokensGivenPerTicket: v1158
                  };
                
                return v1274;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc8
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1160, v1173, v1201, v1202, v1203, v1205] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2199 ) => {
                  const v2199 = stdlib.protect(ctc1, _v2199, null);
                
                const v2200 = stdlib.add(v2199, v1156);
                
                return v2200;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2199 ) => {
                  const v2199 = stdlib.protect(ctc1, _v2199, null);
                
                const v2200 = stdlib.add(v2199, v1156);
                
                return v2200;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
              return (await ((async (_v1275 ) => {
                  const v1275 = stdlib.protect(ctc1, _v1275, null);
                
                const v1276 = stdlib.add(v1275, v1156);
                
                return v1276;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1160, v1173, v1201, v1202, v1203, v1205] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2201 ) => {
                  const v2201 = stdlib.protect(ctc1, _v2201, null);
                
                const v2202 = stdlib.sub(v2201, v1156);
                
                return v2202;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2201 ) => {
                  const v2201 = stdlib.protect(ctc1, _v2201, null);
                
                const v2202 = stdlib.sub(v2201, v1156);
                
                return v2202;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
              return (await ((async (_v1277 ) => {
                  const v1277 = stdlib.protect(ctc1, _v1277, null);
                
                const v1278 = stdlib.sub(v1277, v1156);
                
                return v1278;}))(...args));
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
  
  
  const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1295 = ctc.selfAddress();
  const v1297 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:331:14:application call to [unknown function] (defined at: ./index.rsh:331:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:329:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1298 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1295), null);
  const v1299 = stdlib.fromSome(v1298, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
  const v1300 = stdlib.lt(v1299, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1300, {
    at: './index.rsh:331:23:application',
    fs: ['at ./index.rsh:331:14:application call to [unknown function] (defined at: ./index.rsh:331:14:function exp)', 'at ./index.rsh:331:14:application call to [unknown function] (defined at: ./index.rsh:331:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:329:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1303 = ['Api_buyDiscount0_248', v1297];
  
  let v1324;
  const v1328 = stdlib.ge(v1299, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1328) {
    v1324 = stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1331 = v1202[v1299];
    v1324 = v1331;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1303],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:332:18:decimal', stdlib.UInt_max, 0), [[v1324, v1173]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
      
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyDiscount"
            });
          let v1397;
          const v1398 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1465);
          sim_r.txns.push({
            amt: v1397,
            kind: 'to',
            tok: v1173
            });
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:340:48:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1388, v1471);
          const v1477 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1479 = {
            addr: v1388,
            discountLevel: v1471,
            timeReductionLevel: v1478
            };
          const v1481 = await txn1.getOutput('Api_buyDiscount', 'v1479', ctc12, v1479);
          
          const v3673 = v1225;
          const v3675 = v1227;
          const v3676 = v1228;
          const v3677 = v1230;
          const v3678 = v1231;
          const v3680 = v1466;
          const v3681 = v1239;
          const v3682 = v1466[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3683 = v3682[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3684 = v3682[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
          const v3685 = stdlib.sub(v3683, v3684);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          
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
  const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
  switch (v1389[0]) {
    case 'Api_buyDiscount0_248': {
      const v1392 = v1389[1];
      undefined /* setApiDetails */;
      let v1397;
      const v1398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
      const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1400, {
        at: './index.rsh:175:12:application',
        fs: ['at ./index.rsh:332:38:application call to "getDiscountPrice" (defined at: ./index.rsh:173:36:function exp)', 'at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1401) {
        v1397 = stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1404 = v1202[v1399];
        v1397 = v1404;
        }
      ;
      const v1460 = stdlib.add(v1268, v1397);
      const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
      const v1465 = [v1460, v1266, v1464];
      const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1465);
      ;
      const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:340:48:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1388, v1471);
      const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
      const v1479 = {
        addr: v1388,
        discountLevel: v1471,
        timeReductionLevel: v1478
        };
      const v1481 = await txn1.getOutput('Api_buyDiscount', 'v1479', ctc12, v1479);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1392, v1481), {
          at: './index.rsh:330:11:application',
          fs: ['at ./index.rsh:330:11:application call to [unknown function] (defined at: ./index.rsh:330:11:function exp)', 'at ./index.rsh:349:21:application call to "callback" (defined at: ./index.rsh:333:22:function exp)', 'at ./index.rsh:333:22:application call to [unknown function] (defined at: ./index.rsh:333:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v3673 = v1225;
      const v3675 = v1227;
      const v3676 = v1228;
      const v3677 = v1230;
      const v3678 = v1231;
      const v3680 = v1466;
      const v3681 = v1239;
      const v3682 = v1466[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3683 = v3682[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3684 = v3682[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
      const v3685 = stdlib.sub(v3683, v3684);
      return;
      
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1590 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1788 = v1389[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1986 = v1389[1];
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
  
  
  const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1283 = ctc.selfAddress();
  const v1285 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:298:14:application call to [unknown function] (defined at: ./index.rsh:298:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1287 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:299:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1287, {
    at: './index.rsh:299:19:application',
    fs: ['at ./index.rsh:298:14:application call to [unknown function] (defined at: ./index.rsh:298:14:function exp)', 'at ./index.rsh:298:14:application call to [unknown function] (defined at: ./index.rsh:298:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1290 = stdlib.gt(v1268, v1158);
  stdlib.assert(v1290, {
    at: './index.rsh:300:19:application',
    fs: ['at ./index.rsh:298:14:application call to [unknown function] (defined at: ./index.rsh:298:14:function exp)', 'at ./index.rsh:298:14:application call to [unknown function] (defined at: ./index.rsh:298:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:296:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1293 = ['Api_buyTicket0_248', v1285];
  
  let v1342;
  const v1343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1283), null);
  const v1344 = stdlib.fromSome(v1343, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
  const v1345 = stdlib.ge(v1344, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1345) {
    v1342 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1348 = v1203[v1344];
    v1342 = v1348;
    }
  const v1349 = stdlib.lt(v1342, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1349, {
    at: './index.rsh:195:12:application',
    fs: ['at ./index.rsh:302:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:302:14:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1350 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1342);
  const v1351 = stdlib.mul(v1228, v1350);
  const v1352 = stdlib.div(v1351, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1293],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1352, [[stdlib.checkedBigNumberify('./index.rsh:302:54:decimal', stdlib.UInt_max, 0), v1173]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
      
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTicket"
            });
          let v1610;
          const v1611 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          sim_r.txns.push({
            amt: v1620,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:304:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          ;
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1701 = stdlib.div(v1700, v1157);
          const v1702 = stdlib.add(v1228, v1156);
          const v1707 = stdlib.sub(v1655, v1701);
          sim_r.txns.push({
            amt: v1701,
            kind: 'from',
            to: v1151,
            tok: undefined /* Nothing */
            });
          const v1713 = stdlib.sub(v1688, v1158);
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1), v1718);
          sim_r.txns.push({
            amt: v1158,
            kind: 'from',
            to: v1388,
            tok: v1173
            });
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:228:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1726 = v1205[v1722];
            v1720 = v1726;
            }
          const v1727 = stdlib.sub(v1155, v1720);
          const v1732 = {
            addr: v1388,
            discountLevel: v1612,
            timeReductionLevel: v1722
            };
          const v1734 = await txn1.getOutput('Api_buyTicket', 'v1732', ctc12, v1732);
          
          let v1740;
          if (v1613) {
            v1740 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1751 = stdlib.add(v1230, v1750);
          const v1752 = stdlib.add(v1227, v1701);
          const v1753 = stdlib.add(v1225, v1727);
          const v3808 = v1753;
          const v3810 = v1752;
          const v3811 = v1702;
          const v3812 = v1751;
          const v3813 = v1388;
          const v3815 = v1719;
          const v3816 = v1707;
          const v3817 = v1719[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3818 = v3817[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3819 = v3817[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
          const v3820 = stdlib.sub(v3818, v3819);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          
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
  const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
  switch (v1389[0]) {
    case 'Api_buyDiscount0_248': {
      const v1392 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1590 = v1389[1];
      undefined /* setApiDetails */;
      let v1610;
      const v1611 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
      const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1613) {
        v1610 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1616 = v1203[v1612];
        v1610 = v1616;
        }
      const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1617, {
        at: './index.rsh:195:12:application',
        fs: ['at ./index.rsh:302:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:302:14:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1610);
      const v1619 = stdlib.mul(v1228, v1618);
      const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
      const v1655 = stdlib.add(v1239, v1620);
      ;
      const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
      const v1663 = [v1268, v1266, v1662];
      const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1663);
      ;
      const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:304:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1686, {
        at: './index.rsh:304:20:application',
        fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 1)];
      const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 0)];
      const v1689 = stdlib.gt(v1688, v1158);
      stdlib.assert(v1689, {
        at: './index.rsh:305:20:application',
        fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1690;
      if (v1613) {
        v1690 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1696 = v1203[v1612];
        v1690 = v1696;
        }
      const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1697, {
        at: './index.rsh:195:12:application',
        fs: ['at ./index.rsh:308:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1690);
      const v1699 = stdlib.mul(v1228, v1698);
      const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
      const v1701 = stdlib.div(v1700, v1157);
      const v1702 = stdlib.add(v1228, v1156);
      const v1707 = stdlib.sub(v1655, v1701);
      ;
      const v1713 = stdlib.sub(v1688, v1158);
      const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1)];
      const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 2)];
      const v1718 = [v1713, v1716, v1717];
      const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1), v1718);
      ;
      let v1720;
      const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
      const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1723) {
        v1720 = stdlib.checkedBigNumberify('./index.rsh:228:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1726 = v1205[v1722];
        v1720 = v1726;
        }
      const v1727 = stdlib.sub(v1155, v1720);
      const v1732 = {
        addr: v1388,
        discountLevel: v1612,
        timeReductionLevel: v1722
        };
      const v1734 = await txn1.getOutput('Api_buyTicket', 'v1732', ctc12, v1732);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1590, v1734), {
          at: './index.rsh:297:11:application',
          fs: ['at ./index.rsh:297:11:application call to [unknown function] (defined at: ./index.rsh:297:11:function exp)', 'at ./index.rsh:318:21:application call to "callback" (defined at: ./index.rsh:303:22:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      let v1740;
      if (v1613) {
        v1740 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1746 = v1203[v1612];
        v1740 = v1746;
        }
      const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1747, {
        at: './index.rsh:195:12:application',
        fs: ['at ./index.rsh:322:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1740);
      const v1749 = stdlib.mul(v1228, v1748);
      const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
      const v1751 = stdlib.add(v1230, v1750);
      const v1752 = stdlib.add(v1227, v1701);
      const v1753 = stdlib.add(v1225, v1727);
      const v3808 = v1753;
      const v3810 = v1752;
      const v3811 = v1702;
      const v3812 = v1751;
      const v3813 = v1388;
      const v3815 = v1719;
      const v3816 = v1707;
      const v3817 = v1719[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3818 = v3817[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3819 = v3817[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
      const v3820 = stdlib.sub(v3818, v3819);
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1788 = v1389[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1986 = v1389[1];
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
  
  
  const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1305 = ctc.selfAddress();
  const v1307 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:355:14:application call to [unknown function] (defined at: ./index.rsh:355:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:353:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1308 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1305), null);
  const v1309 = stdlib.fromSome(v1308, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
  const v1310 = stdlib.lt(v1309, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1310, {
    at: './index.rsh:355:23:application',
    fs: ['at ./index.rsh:355:14:application call to [unknown function] (defined at: ./index.rsh:355:14:function exp)', 'at ./index.rsh:355:14:application call to [unknown function] (defined at: ./index.rsh:355:14:function exp)', 'at ./index.rsh:261:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:353:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1313 = ['Api_buyTimeReduction0_248', v1307];
  
  let v1363;
  const v1367 = stdlib.ge(v1309, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1367) {
    v1363 = stdlib.checkedBigNumberify('./index.rsh:219:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1370 = v1202[v1309];
    v1363 = v1370;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1313],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:18:decimal', stdlib.UInt_max, 0), [[v1363, v1173]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
      
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_buyTimeReduction"
            });
          let v1826;
          const v1827 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:219:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1861);
          sim_r.txns.push({
            amt: v1826,
            kind: 'to',
            tok: v1173
            });
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:364:58:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1388, v1957);
          const v1961 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1965 = {
            addr: v1388,
            discountLevel: v1962,
            timeReductionLevel: v1957
            };
          const v1967 = await txn1.getOutput('Api_buyTimeReduction', 'v1965', ctc12, v1965);
          
          const v3943 = v1225;
          const v3945 = v1227;
          const v3946 = v1228;
          const v3947 = v1230;
          const v3948 = v1231;
          const v3950 = v1862;
          const v3951 = v1239;
          const v3952 = v1862[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3953 = v3952[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v3954 = v3952[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
          const v3955 = stdlib.sub(v3953, v3954);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          
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
  const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
  switch (v1389[0]) {
    case 'Api_buyDiscount0_248': {
      const v1392 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1590 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1788 = v1389[1];
      undefined /* setApiDetails */;
      let v1826;
      const v1827 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
      const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1829, {
        at: './index.rsh:216:12:application',
        fs: ['at ./index.rsh:356:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:214:41:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1830) {
        v1826 = stdlib.checkedBigNumberify('./index.rsh:219:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1833 = v1202[v1828];
        v1826 = v1833;
        }
      ;
      const v1856 = stdlib.add(v1268, v1826);
      const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
      const v1861 = [v1856, v1266, v1860];
      const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1861);
      ;
      const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:364:58:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1388, v1957);
      const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
      const v1965 = {
        addr: v1388,
        discountLevel: v1962,
        timeReductionLevel: v1957
        };
      const v1967 = await txn1.getOutput('Api_buyTimeReduction', 'v1965', ctc12, v1965);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1788, v1967), {
          at: './index.rsh:354:11:application',
          fs: ['at ./index.rsh:354:11:application call to [unknown function] (defined at: ./index.rsh:354:11:function exp)', 'at ./index.rsh:374:21:application call to "callback" (defined at: ./index.rsh:357:22:function exp)', 'at ./index.rsh:357:22:application call to [unknown function] (defined at: ./index.rsh:357:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v3943 = v1225;
      const v3945 = v1227;
      const v3946 = v1228;
      const v3947 = v1230;
      const v3948 = v1231;
      const v3950 = v1862;
      const v3951 = v1239;
      const v3952 = v1862[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3953 = v3952[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v3954 = v3952[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
      const v3955 = stdlib.sub(v3953, v3954);
      return;
      
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1986 = v1389[1];
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
  
  
  const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1317 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:261:23:application call to "runApi_getParticipantStats0_248" (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1321 = ['Api_getParticipantStats0_248', v1317];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1321],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:378:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:295:18:decimal', stdlib.UInt_max, 0), v1173]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
      
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Api_getParticipantStats"
            });
          ;
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v2176 = {
            addr: v1388,
            discountLevel: v2173,
            timeReductionLevel: v2175
            };
          const v2178 = await txn1.getOutput('Api_getParticipantStats', 'v2176', ctc12, v2176);
          
          const v4078 = v1225;
          const v4080 = v1227;
          const v4081 = v1228;
          const v4082 = v1230;
          const v4083 = v1231;
          const v4085 = v2060;
          const v4086 = v1239;
          const v4087 = v2060[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v4088 = v4087[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
          const v4089 = v4087[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
          const v4090 = stdlib.sub(v4088, v4089);
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
  const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
  switch (v1389[0]) {
    case 'Api_buyDiscount0_248': {
      const v1392 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTicket0_248': {
      const v1590 = v1389[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_248': {
      const v1788 = v1389[1];
      return;
      break;
      }
    case 'Api_getParticipantStats0_248': {
      const v1986 = v1389[1];
      undefined /* setApiDetails */;
      ;
      const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
      const v2059 = [v1268, v1266, v2058];
      const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v2059);
      ;
      const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
      const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
      const v2176 = {
        addr: v1388,
        discountLevel: v2173,
        timeReductionLevel: v2175
        };
      const v2178 = await txn1.getOutput('Api_getParticipantStats', 'v2176', ctc12, v2176);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1986, v2178), {
          at: './index.rsh:379:11:application',
          fs: ['at ./index.rsh:379:11:application call to [unknown function] (defined at: ./index.rsh:379:11:function exp)', 'at ./index.rsh:382:21:application call to "callback" (defined at: ./index.rsh:380:22:function exp)', 'at ./index.rsh:380:22:application call to [unknown function] (defined at: ./index.rsh:380:22:function exp)'],
          msg: 'out',
          who: 'Api_getParticipantStats'
          });
        }
      else {
        }
      
      const v4078 = v1225;
      const v4080 = v1227;
      const v4081 = v1228;
      const v4082 = v1230;
      const v4083 = v1231;
      const v4085 = v2060;
      const v4086 = v1239;
      const v4087 = v2060[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v4088 = v4087[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
      const v4089 = v4087[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
      const v4090 = stdlib.sub(v4088, v4089);
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
  
  
  const v1130 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1131 = [v1130, v1130];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1152, v1153, v1154, v1155, v1156, v1157, v1158], secs: v1160, time: v1159, didSend: v52, from: v1151 } = txn1;
  const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0)];
  const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 1)];
  const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 2)];
  const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
  const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0), v1165);
  ;
  ;
  const v1168 = 'Metafomo                        ';
  const v1169 = 'METAFOMO';
  const v1170 = 'https://metalabs.technology                                                                     ';
  const v1171 = '                                ';
  const v1172 = undefined /* TokenNew */;
  const v1173 = await txn1.getOutput('internal', 'v1172', ctc3, v1172);
  const v1174 = [v1153];
  const v2252 = v1174[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2256 = stdlib.tokenEq(v1173, v2252);
  const v1182 = v2256 ? false : true;
  stdlib.assert(v1182, {
    at: './index.rsh:152:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
  const v1187 = [stdlib.UInt_max, v1185, v1186];
  const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1187);
  const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
  const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
  const v1194 = [v1191, stdlib.UInt_max, v1193];
  const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1194);
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
  const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1200 = [v1197, v1198, false];
  const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1200);
  const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1203 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1208, time: v1207, didSend: v165, from: v1206 } = txn2;
  ;
  const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
  const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
  const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:245:18:decimal', stdlib.UInt_max, 1));
  const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 1)];
  const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 2)];
  const v1216 = [v1211, v1214, v1215];
  const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0), v1216);
  ;
  const v1218 = stdlib.addressEq(v1151, v1206);
  stdlib.assert(v1218, {
    at: './index.rsh:245:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:249:24:application',
    fs: ['at ./index.rsh:248:9:application call to [unknown function] (defined at: ./index.rsh:248:30:function exp)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const v1224 = stdlib.add(v1160, v1154);
  let v1225 = v1224;
  let v1226 = true;
  let v1227 = stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, 0);
  let v1228 = v1152;
  let v1230 = stdlib.checkedBigNumberify('./index.rsh:261:43:decimal', stdlib.UInt_max, 0);
  let v1231 = v1151;
  let v1232 = v1207;
  let v1238 = v1217;
  let v1239 = stdlib.checkedBigNumberify('./index.rsh:135:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1226;})()) {
    const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
    const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
    const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
    const v1269 = stdlib.sub(v1266, v1268);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v1225],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:388:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2186, time: v2185, didSend: v934, from: v2184 } = txn4;
          
          ;
          const cv1225 = v1225;
          const cv1226 = false;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v2185;
          const cv1238 = v1238;
          const cv1239 = v1239;
          
          await (async () => {
            const v1225 = cv1225;
            const v1226 = cv1226;
            const v1227 = cv1227;
            const v1228 = cv1228;
            const v1230 = cv1230;
            const v1231 = cv1231;
            const v1232 = cv1232;
            const v1238 = cv1238;
            const v1239 = cv1239;
            
            if (await (async () => {
              
              return v1226;})()) {
              const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
              const v1269 = stdlib.sub(v1266, v1268);
              sim_r.isHalt = false;
              }
            else {
              const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
              const v2193 = stdlib.sub(v2190, v2192);
              sim_r.txns.push({
                amt: v1239,
                kind: 'from',
                to: v1231,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:393:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1231,
                tok: v1153
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2186, time: v2185, didSend: v934, from: v2184 } = txn4;
      ;
      const cv1225 = v1225;
      const cv1226 = false;
      const cv1227 = v1227;
      const cv1228 = v1228;
      const cv1230 = v1230;
      const cv1231 = v1231;
      const cv1232 = v2185;
      const cv1238 = v1238;
      const cv1239 = v1239;
      
      v1225 = cv1225;
      v1226 = cv1226;
      v1227 = cv1227;
      v1228 = cv1228;
      v1230 = cv1230;
      v1231 = cv1231;
      v1232 = cv1232;
      v1238 = cv1238;
      v1239 = cv1239;
      
      continue;
      }
    else {
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn3;
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          undefined /* setApiDetails */;
          let v1397;
          const v1398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1400, {
            at: './index.rsh:175:12:application',
            fs: ['at ./index.rsh:332:38:application call to "getDiscountPrice" (defined at: ./index.rsh:173:36:function exp)', 'at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1465);
          ;
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:340:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1388, v1471);
          stdlib.protect(ctc0, await interact.updateDiscountLevel(v1388, v1471), {
            at: './index.rsh:344:45:application',
            fs: ['at ./index.rsh:342:23:application call to [unknown function] (defined at: ./index.rsh:342:27:function exp)', 'at ./index.rsh:333:22:application call to [unknown function] (defined at: ./index.rsh:333:22:function exp)'],
            msg: 'updateDiscountLevel',
            who: 'Buyer'
            });
          
          const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1479 = {
            addr: v1388,
            discountLevel: v1471,
            timeReductionLevel: v1478
            };
          await txn3.getOutput('Api_buyDiscount', 'v1479', ctc7, v1479);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v1466;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          undefined /* setApiDetails */;
          let v1610;
          const v1611 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1617, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:302:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:302:14:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          ;
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:304:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1686, {
            at: './index.rsh:304:20:application',
            fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          stdlib.assert(v1689, {
            at: './index.rsh:305:20:application',
            fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1697, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:308:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1701 = stdlib.div(v1700, v1157);
          const v1702 = stdlib.add(v1228, v1156);
          stdlib.protect(ctc0, await interact.showPurchase(v1388, v1700, v1702), {
            at: './index.rsh:311:51:application',
            fs: ['at ./index.rsh:311:23:application call to [unknown function] (defined at: ./index.rsh:311:27:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1707 = stdlib.sub(v1655, v1701);
          ;
          const v1713 = stdlib.sub(v1688, v1158);
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1), v1718);
          ;
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:228:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1726 = v1205[v1722];
            v1720 = v1726;
            }
          const v1727 = stdlib.sub(v1155, v1720);
          const v1732 = {
            addr: v1388,
            discountLevel: v1612,
            timeReductionLevel: v1722
            };
          await txn3.getOutput('Api_buyTicket', 'v1732', ctc7, v1732);
          let v1740;
          if (v1613) {
            v1740 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1747, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:322:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1751 = stdlib.add(v1230, v1750);
          const v1752 = stdlib.add(v1227, v1701);
          const v1753 = stdlib.add(v1225, v1727);
          const cv1225 = v1753;
          const cv1226 = true;
          const cv1227 = v1752;
          const cv1228 = v1702;
          const cv1230 = v1751;
          const cv1231 = v1388;
          const cv1232 = v1390;
          const cv1238 = v1719;
          const cv1239 = v1707;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          undefined /* setApiDetails */;
          let v1826;
          const v1827 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1829, {
            at: './index.rsh:216:12:application',
            fs: ['at ./index.rsh:356:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:214:41:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:219:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1861);
          ;
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:364:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1388, v1957);
          stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1388, v1957), {
            at: './index.rsh:369:50:application',
            fs: ['at ./index.rsh:366:23:application call to [unknown function] (defined at: ./index.rsh:366:27:function exp)', 'at ./index.rsh:357:22:application call to [unknown function] (defined at: ./index.rsh:357:22:function exp)'],
            msg: 'updateTimeReductionLevel',
            who: 'Buyer'
            });
          
          const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1965 = {
            addr: v1388,
            discountLevel: v1962,
            timeReductionLevel: v1957
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1965', ctc7, v1965);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v1862;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          undefined /* setApiDetails */;
          ;
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v2176 = {
            addr: v1388,
            discountLevel: v2173,
            timeReductionLevel: v2175
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2176', ctc7, v2176);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v2060;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        }}
    
    }
  const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
  const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
  const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
  const v2193 = stdlib.sub(v2190, v2192);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1231), {
    at: './index.rsh:115:29:application',
    fs: ['at ./index.rsh:114:11:application call to [unknown function] (defined at: ./index.rsh:114:32:function exp)', 'at ./index.rsh:395:16:application call to "showOutcome" (defined at: ./index.rsh:113:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1232,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:398:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2226, time: v2225, didSend: v971, from: v2224 } = txn3;
      
      ;
      const v2227 = v2225;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1153
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
  const {data: [], secs: v2226, time: v2225, didSend: v971, from: v2224 } = txn3;
  ;
  let v2227 = v2225;
  
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
    const {data: [], secs: v2239, time: v2238, didSend: v980, from: v2237 } = txn4;
    ;
    const v2240 = stdlib.addressEq(v1151, v2237);
    stdlib.assert(v2240, {
      at: './index.rsh:401:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv2227 = v2238;
    
    v2227 = cv2227;
    
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
  
  
  const v1130 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1131 = [v1130, v1130];
  const v1142 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:140:38:application',
    fs: ['at ./index.rsh:138:16:application call to [unknown function] (defined at: ./index.rsh:138:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v1143 = v1142.ticketPrice;
  const v1144 = v1142.nftPrize;
  const v1145 = v1142.deadline;
  const v1146 = v1142.deltaDeadline;
  const v1147 = v1142.unitPrice;
  const v1148 = v1142.ticketFeeDenominator;
  const v1149 = v1142.tokensGivenPerTicket;
  const v1150 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:141:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1150, {
    at: './index.rsh:141:12:application',
    fs: ['at ./index.rsh:138:16:application call to [unknown function] (defined at: ./index.rsh:138:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1143, v1144, v1145, v1146, v1147, v1148, v1149],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:143:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1152, v1153, v1154, v1155, v1156, v1157, v1158], secs: v1160, time: v1159, didSend: v52, from: v1151 } = txn1;
      
      const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0)];
      const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 1)];
      const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 2)];
      const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
      const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0), v1165);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1153
        });
      ;
      const v1168 = 'Metafomo                        ';
      const v1169 = 'METAFOMO';
      const v1170 = 'https://metalabs.technology                                                                     ';
      const v1171 = '                                ';
      const v1172 = stdlib.simTokenNew(sim_r, v1168, v1169, v1170, v1171, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v1173 = await txn1.getOutput('internal', 'v1172', ctc3, v1172);
      const v1174 = [v1153];
      const v2252 = v1174[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
      const v2256 = stdlib.tokenEq(v1173, v2252);
      const v1182 = v2256 ? false : true;
      ;
      const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
      const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
      const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
      const v1187 = [stdlib.UInt_max, v1185, v1186];
      const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1187);
      const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
      const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
      const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
      const v1194 = [v1191, stdlib.UInt_max, v1193];
      const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1194);
      const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
      const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
      const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
      const v1200 = [v1197, v1198, false];
      const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1200);
      const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
      const v1203 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
      const v1205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1152, v1153, v1154, v1155, v1156, v1157, v1158], secs: v1160, time: v1159, didSend: v52, from: v1151 } = txn1;
  const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0)];
  const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 1)];
  const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 2)];
  const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
  const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:143:12:dot', stdlib.UInt_max, 0), v1165);
  ;
  ;
  const v1168 = 'Metafomo                        ';
  const v1169 = 'METAFOMO';
  const v1170 = 'https://metalabs.technology                                                                     ';
  const v1171 = '                                ';
  const v1172 = undefined /* TokenNew */;
  const v1173 = await txn1.getOutput('internal', 'v1172', ctc3, v1172);
  const v1174 = [v1153];
  const v2252 = v1174[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, 0)];
  const v2256 = stdlib.tokenEq(v1173, v2252);
  const v1182 = v2256 ? false : true;
  stdlib.assert(v1182, {
    at: './index.rsh:152:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
  const v1187 = [stdlib.UInt_max, v1185, v1186];
  const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1187);
  const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
  const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 2)];
  const v1194 = [v1191, stdlib.UInt_max, v1193];
  const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1194);
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 0)];
  const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1)];
  const v1200 = [v1197, v1198, false];
  const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:152:32:application', stdlib.UInt_max, 1), v1200);
  const v1202 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
  const v1203 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
  const v1205 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
  const txn2 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1160, v1173, v1201, v1202, v1203, v1205],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1159,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:245:18:decimal', stdlib.UInt_max, 1), v1153]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1208, time: v1207, didSend: v165, from: v1206 } = txn2;
      
      ;
      const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
      const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
      const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:245:18:decimal', stdlib.UInt_max, 1));
      const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 1)];
      const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 2)];
      const v1216 = [v1211, v1214, v1215];
      const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0), v1216);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:245:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1153
        });
      const v1218 = stdlib.addressEq(v1151, v1206);
      ;
      
      const v1224 = stdlib.add(v1160, v1154);
      const v1225 = v1224;
      const v1226 = true;
      const v1227 = stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, 0);
      const v1228 = v1152;
      const v1230 = stdlib.checkedBigNumberify('./index.rsh:261:43:decimal', stdlib.UInt_max, 0);
      const v1231 = v1151;
      const v1232 = v1207;
      const v1238 = v1217;
      const v1239 = stdlib.checkedBigNumberify('./index.rsh:135:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1226;})()) {
        const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
        const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
        const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
        const v1269 = stdlib.sub(v1266, v1268);
        sim_r.isHalt = false;
        }
      else {
        const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
        const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
        const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
        const v2193 = stdlib.sub(v2190, v2192);
        sim_r.txns.push({
          amt: v1239,
          kind: 'from',
          to: v1231,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:393:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v1231,
          tok: v1153
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
  const {data: [], secs: v1208, time: v1207, didSend: v165, from: v1206 } = txn2;
  ;
  const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
  const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0)];
  const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:245:18:decimal', stdlib.UInt_max, 1));
  const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 1)];
  const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 2)];
  const v1216 = [v1211, v1214, v1215];
  const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:245:12:dot', stdlib.UInt_max, 0), v1216);
  ;
  const v1218 = stdlib.addressEq(v1151, v1206);
  stdlib.assert(v1218, {
    at: './index.rsh:245:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:249:24:application',
    fs: ['at ./index.rsh:248:9:application call to [unknown function] (defined at: ./index.rsh:248:30:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1224 = stdlib.add(v1160, v1154);
  let v1225 = v1224;
  let v1226 = true;
  let v1227 = stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, 0);
  let v1228 = v1152;
  let v1230 = stdlib.checkedBigNumberify('./index.rsh:261:43:decimal', stdlib.UInt_max, 0);
  let v1231 = v1151;
  let v1232 = v1207;
  let v1238 = v1217;
  let v1239 = stdlib.checkedBigNumberify('./index.rsh:135:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1226;})()) {
    const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
    const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
    const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
    const v1269 = stdlib.sub(v1266, v1268);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v1225],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:388:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v2186, time: v2185, didSend: v934, from: v2184 } = txn4;
          
          ;
          const cv1225 = v1225;
          const cv1226 = false;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v2185;
          const cv1238 = v1238;
          const cv1239 = v1239;
          
          await (async () => {
            const v1225 = cv1225;
            const v1226 = cv1226;
            const v1227 = cv1227;
            const v1228 = cv1228;
            const v1230 = cv1230;
            const v1231 = cv1231;
            const v1232 = cv1232;
            const v1238 = cv1238;
            const v1239 = cv1239;
            
            if (await (async () => {
              
              return v1226;})()) {
              const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
              const v1269 = stdlib.sub(v1266, v1268);
              sim_r.isHalt = false;
              }
            else {
              const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
              const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
              const v2193 = stdlib.sub(v2190, v2192);
              sim_r.txns.push({
                amt: v1239,
                kind: 'from',
                to: v1231,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:393:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v1231,
                tok: v1153
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2186, time: v2185, didSend: v934, from: v2184 } = txn4;
      ;
      const cv1225 = v1225;
      const cv1226 = false;
      const cv1227 = v1227;
      const cv1228 = v1228;
      const cv1230 = v1230;
      const cv1231 = v1231;
      const cv1232 = v2185;
      const cv1238 = v1238;
      const cv1239 = v1239;
      
      v1225 = cv1225;
      v1226 = cv1226;
      v1227 = cv1227;
      v1228 = cv1228;
      v1230 = cv1230;
      v1231 = cv1231;
      v1232 = cv1232;
      v1238 = cv1238;
      v1239 = cv1239;
      
      continue;
      }
    else {
      const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn3;
      switch (v1389[0]) {
        case 'Api_buyDiscount0_248': {
          const v1392 = v1389[1];
          undefined /* setApiDetails */;
          let v1397;
          const v1398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1400, {
            at: './index.rsh:175:12:application',
            fs: ['at ./index.rsh:332:38:application call to "getDiscountPrice" (defined at: ./index.rsh:173:36:function exp)', 'at ./index.rsh:332:14:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:332:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1465);
          ;
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:340:48:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1388, v1471);
          const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1479 = {
            addr: v1388,
            discountLevel: v1471,
            timeReductionLevel: v1478
            };
          await txn3.getOutput('Api_buyDiscount', 'v1479', ctc8, v1479);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v1466;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_248': {
          const v1590 = v1389[1];
          undefined /* setApiDetails */;
          let v1610;
          const v1611 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1617, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:302:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:302:14:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:302:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          ;
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:304:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1686, {
            at: './index.rsh:304:20:application',
            fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:305:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          stdlib.assert(v1689, {
            at: './index.rsh:305:20:application',
            fs: ['at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1697, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:308:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1701 = stdlib.div(v1700, v1157);
          const v1702 = stdlib.add(v1228, v1156);
          const v1707 = stdlib.sub(v1655, v1701);
          ;
          const v1713 = stdlib.sub(v1688, v1158);
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:313:61:application', stdlib.UInt_max, 1), v1718);
          ;
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:228:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1726 = v1205[v1722];
            v1720 = v1726;
            }
          const v1727 = stdlib.sub(v1155, v1720);
          const v1732 = {
            addr: v1388,
            discountLevel: v1612,
            timeReductionLevel: v1722
            };
          await txn3.getOutput('Api_buyTicket', 'v1732', ctc8, v1732);
          let v1740;
          if (v1613) {
            v1740 = stdlib.checkedBigNumberify('./index.rsh:187:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:195:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1747, {
            at: './index.rsh:195:12:application',
            fs: ['at ./index.rsh:322:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:303:22:application call to [unknown function] (defined at: ./index.rsh:303:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:196:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:196:32:decimal', stdlib.UInt_max, 100));
          const v1751 = stdlib.add(v1230, v1750);
          const v1752 = stdlib.add(v1227, v1701);
          const v1753 = stdlib.add(v1225, v1727);
          const cv1225 = v1753;
          const cv1226 = true;
          const cv1227 = v1752;
          const cv1228 = v1702;
          const cv1230 = v1751;
          const cv1231 = v1388;
          const cv1232 = v1390;
          const cv1238 = v1719;
          const cv1239 = v1707;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_248': {
          const v1788 = v1389[1];
          undefined /* setApiDetails */;
          let v1826;
          const v1827 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1829, {
            at: './index.rsh:216:12:application',
            fs: ['at ./index.rsh:356:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:214:41:function exp)', 'at ./index.rsh:356:14:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:356:14:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:295:18:application call to [unknown function] (defined at: ./index.rsh:295:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:219:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v1861);
          ;
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:364:58:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1388, v1957);
          const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v1965 = {
            addr: v1388,
            discountLevel: v1962,
            timeReductionLevel: v1957
            };
          await txn3.getOutput('Api_buyTimeReduction', 'v1965', ctc8, v1965);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v1862;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        case 'Api_getParticipantStats0_248': {
          const v1986 = v1389[1];
          undefined /* setApiDetails */;
          ;
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:261:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:171:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:212:74:decimal', stdlib.UInt_max, 0));
          const v2176 = {
            addr: v1388,
            discountLevel: v2173,
            timeReductionLevel: v2175
            };
          await txn3.getOutput('Api_getParticipantStats', 'v2176', ctc8, v2176);
          const cv1225 = v1225;
          const cv1226 = true;
          const cv1227 = v1227;
          const cv1228 = v1228;
          const cv1230 = v1230;
          const cv1231 = v1231;
          const cv1232 = v1390;
          const cv1238 = v2060;
          const cv1239 = v1239;
          
          v1225 = cv1225;
          v1226 = cv1226;
          v1227 = cv1227;
          v1228 = cv1228;
          v1230 = cv1230;
          v1231 = cv1231;
          v1232 = cv1232;
          v1238 = cv1238;
          v1239 = cv1239;
          
          continue;
          break;
          }
        }}
    
    }
  const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
  const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:48:application', stdlib.UInt_max, 1)];
  const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:273:60:application', stdlib.UInt_max, 0)];
  const v2193 = stdlib.sub(v2190, v2192);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1231), {
    at: './index.rsh:115:29:application',
    fs: ['at ./index.rsh:114:11:application call to [unknown function] (defined at: ./index.rsh:114:32:function exp)', 'at ./index.rsh:395:16:application call to "showOutcome" (defined at: ./index.rsh:113:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1232,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:398:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2226, time: v2225, didSend: v971, from: v2224 } = txn3;
      
      ;
      const v2227 = v2225;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1153
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
  const {data: [], secs: v2226, time: v2225, didSend: v971, from: v2224 } = txn3;
  ;
  let v2227 = v2225;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2227,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:401:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v2239, time: v2238, didSend: v980, from: v2237 } = txn4;
        
        ;
        const v2240 = stdlib.addressEq(v1151, v2237);
        ;
        const cv2227 = v2238;
        
        await (async () => {
          const v2227 = cv2227;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1153
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
    const {data: [], secs: v2239, time: v2238, didSend: v980, from: v2237 } = txn4;
    ;
    const v2240 = stdlib.addressEq(v1151, v2237);
    stdlib.assert(v2240, {
      at: './index.rsh:401:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv2227 = v2238;
    
    v2227 = cv2227;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAkAAEIIAdAA2QFBoACiAKoAigwBDhIUFjoAfAB+AGgjQYShZ/tuwnh+7HLDIOj+M8N1PPd8QuLuIuBApO5vtQEIsoCEQL5ASYFAQABAQECAAj//////////yI1ADEYQQ8fK2RJIls1ASRbNQIxGSMSQQAKMQAoIRivZkIO9DYaABdJQQLYIjUEIzUGSSEZDEACM0khGgxAAgdJIRsMQABrIRsSRDQBSSEJDEAAQEkhBAxAAB4hBBJEKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCDpVIKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCDnohBhJEKGQpZFAqZFA1AzYaARc0AyEFWwkWNQdCDlwhGhJENAFJIQkMQAEHSSEEDEAAgiEEEkQoZClkUCpkUEk1A1dgKDX/NANXMAg0A1c4CFA0A1cgCFA0A1coCFA0A1dACFA0A1dICFA0A1dQCFA0A4HzAiRYUDQDV1gIUDQDV/gIUDQDIQokWFA0AyELJVhQNANX8AhQNANX6AhQNP9QNANXiDBQNP9QNANXuDBQNQdCDcZIKGQpZFAqZFBJNQNXYCg1/zQDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhDCRYUDQDV1gIUDQDV/gIUDQDIQokWFA0AyELJVhQNANX8AhQNANX6AhQNP9QNANXiDBQNP9QNANXuDBQNQdCDUghBhJEKGQpZFAqZFBJNQNXYCg1/zQDVzAINANXOAhQNANXIAhQNANXKAhQNANXQAhQNANXSAhQNANXUAhQNAMhDCRYUDQDV1gIUDQDV/gIUDQDIQokWFA0AyELJVhQNANX8AhQNANX6AhQNP9QNANXiDBQNP9QNANXuDBQNQdCDMdJIRwMQAAQIRwSRCs1/4ABAzT/UEIBXyEZEkQrNf8qNP9QQgFRSSEdDEAAgEkhHgxAAGshHhJENAFJIQkMQABASSEEDEAAHiEEEkQoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IMYkgoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IMRyEGEkQoZClkUCpkUDUDNhoBFzQDIQVbCBY1B0IMKSEdEkQrNf8pNP9QQgDKga2Em2MSRCs1/yg0/1BCALk2GgIXNQQ2GgM2GgEXSSEPDEAF8UkhCQxABVdJIQQMQACWIQQSRCEENAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQMhFFs1/4AE4huzqbAyBzT/D0Q0A1cAIDQDJVs0AyENWzQDIQ5bNAMhEFs0AyEFWzQDIRFbNAMhEls0AyETWzQDV2AoNANXiDA0A1e4MDT/IjQDIRVbNAMhFls0AyEKWzQDIQslWDIGNAMhDCEfWDQDISBbQglGSCEENAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNJSkpKSkpKSkpKSlcAIDX/JVs1/iENWzX9IQ5bNfwhEFs1+yEFWzX6IRFbNfkhEls1+CETWzX3V2AoNfZXiDA19Ve4MDX0IRRbNfMhFVs18iEWWzXxIQpbNfAhCyVYNe8hDCEfWDXuISBbNe2B0gIhIVg17IHjAls164HrAls16kk1BTXpgASQT2RJNOlQsDIHNPMMRDTpIlVJISIMQAGKSSEGDEAApyEGEkSACAAAAAAAAAiAIjEAiAqhVwAJSTXoI1s06CJVTRYiMQCICo1XCQlJNegjWzToIlVNFlAxAFBQsCIxAIgKc1cACUk16CNbNOgiVU0WIjEAiApfVwkJSTXoI1s06CJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08yM08jTxNPA07zIGNO5XABE06hY06xZQNOxXEAFQUDTtQgfbSCIxAIgKB1cJCUk15iNbNOYiVU1JNechCAxENOchCA9BAAchIzXoQgALNPYkNOcLJFgXNeg06DT3iAn5NOcjCDXmMQAoMQCICcQpNOYWUDXlVwAJNOVQZoAIAAAAAAAAB60iMQCICaZXAAlJNeUjWzTlIlVNFjTmFlAxAFBQsCIxAIgJiVcACUk15SNbNOUiVU0WNOYWUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPMjNPI08TTwNO8yBjTuVwARNOo06AgWNOsWUDTsVxABUFA07UIG/0kjDEABkEgiMQCICSVXAAlJNeYjWzTmIlVNSTXnIQgPSTXmQQAGIjXoQgALNPUkNOcLJFgXNeg06CEHDEQ08SEHNOgJCyEHCjXlNOWICPI07lcAETTqFjTrFlA07FcQAVBQNeQ0+SMNRDTkVxERSTXjIltJNeI0+A1ENOZBAAYiNeFCAAs09SQ05wskWBc14TThIQcMRDTxIQc04QkLIQcKNPkKNeCxIrIBNOCyCCOyEDT/sgezsSKyATT4shIhD7IQMQCyFDT3shGzIjEAiAhhVwkJSTXdI1s03SJVTUk13iEID0EABiI130IACzT0JDTeCyRYFzXfgAgAAAAAAAAGxDTnFjTeFlAxAFBQsDTnFjTeFlAxAFA1BzTmQQAGIjXdQgALNPUkNOcLJFgXNd003SEHDEQ0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zT7NN8JCCM08jTgCDTxNPoINPA08SEHNN0JCyEHCggxADIGNORXABE04jT4CRY041cICFA041cQAVBQNO005Qg04AlCBWlIIjEAiAeVVwAJSTXmI1s05iJVTUk15yEIDEQ05yEID0EAByEjNehCAAs09iQ05wskWBc16DToNPeIB4c05yMINeYxACgxAIgHUik05hZQNeVXCQk05UxQZoAIAAAAAAAABcc05hYiMQCIBzBXCQlJNeUjWzTlIlVNFlAxAFBQsDTmFiIxAIgHE1cJCUk15SNbNOUiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPMjNPI08TTwNO8yBjTuVwARNOo06AgWNOsWUDTsVxABUFA07UIEjEkhCAxAAItIIQk0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A1cAIDX/gATMmZJcsDT/MQASRDT/NAMlWzQDIQ1bNAMhDls0AyEQWzQDIQVbNAMhEVs0AyESWzQDIRNbNANXYCg0A1eIMDQDV7gwNAMhFFs0AyEVWzQDIRZbNAMhCls0AyELJVg0AyEMWzIGQgVPSEkhIgxAAIpJIQYMQACCSCEGNAESRDQESSISTDQCEhFEKGQpZFAqZFA1A4AEp2XEtLA0A1cAIDQDJVs0AyENWzQDIQ5bNAMhEFs0AyEFWzQDIRFbNAMhEls0AyETWzQDV2AoNANXiDA0A1e4MDQDIRRbNAMhFVs0AyEWWzQDIQpbNAMhCyVYNAMhDFsyBkIEvkhJIwxAAK9IIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf8lWzX+IQ1bNf0hDls1/FdoIjX7gASai5F0sDT7VwARNfojNP2IBXE0/zEAEkQ0/zT+NP00/DQDIRBbNAMhBVs0AyERWzQDIRJbNAOBYFs0A1eKKDQDV7IwNANX4jA0AyETWzT8CCMiNP4iNP8yBjT6IlsjCBY0+lcICFA0+lcQAVA0+1cREVAiQgKzSCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yRbNf6BEFs1/YEYWzX8JVs1+yENWzX6IQ5bNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsCEXiASVISGvSTX4SVBJNfdXABE19iSvNPZXCAhQNPZXEAFQNPdXERFQNfUhF4gEarEisgEishIhD7IQMgqyFDT+shGzIReIBFGxIrIBIQayEIH///////////8BsiIhCbIjgAhNRVRBRk9NT7IlgCBNZXRhZm9tbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGBodHRwczovL21ldGFsYWJzLnRlY2hub2xvZ3kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfSACAAAAAAAAASUNPQWULA09Ek18zT+FiJbE0Q09VcRETXyNPVXABEnBDTyVwgIUDTyVxABUFBJNfFXERE18DTxVwARNPBXAAgnBFA08FcQAVBQSTXvVxERNe4071cAETTuVwAINO5XCAhQKFBQNe2AKAAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKAAAAAAAAABQAAAAAAAAAKA17IAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAKAAAAAAAAAA8AAAAAAAAAFAAAAAAAAAAZNeuAMAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABTXqMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDTzFlA07VA07FA061A06lAoSwFXAH9nKUsBV39/ZypLAVf+FGdIIzUBMgY1AkIB+TX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zT4QQCONP5XERFJNeokWzXpNOoiWzXoNOk06Ak15zTrNOwWUDTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09FA09VA09lA09xZQNPkWUDT6FlA0+xZQNPxQNP5QNP8WUDTqUDTpFlA06BZQNOcWUChLAVcAf2cpSwFXf39nKksBV/59Z0ghBDUBMgY1AkIBPDT+VxERSTXqJFs06iJbCTXpsSKyATT/sggjshA0/LIHs7EisgEjshIhD7IQNPyyFDTtshGzNOs07BZQNO0WUDTuFlA07xZQNPAWUDTxFlA08hZQNPMWUDT0UDT1UDT2UDT3FlA0+RZQNPoWUDT7FlA0/FA06RZQKEsBVwB/ZylLAVd/f2cqSwFX/jJnSCEGNQEyBjUCQgCkNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuSTXtNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09lA091A0+FA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghCTUBMgY1AkIAHDEZIQgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghGK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhDxJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
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
                "name": "v1152",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1153",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1156",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1158",
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
                "name": "v1152",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1153",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1156",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1157",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1158",
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
                "name": "v1389",
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
    "name": "_reach_oe_v1172",
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
    "name": "_reach_oe_v1479",
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
    "name": "_reach_oe_v1732",
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
    "name": "_reach_oe_v1965",
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
    "name": "_reach_oe_v2176",
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
        "name": "v4108",
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
        "name": "v4112",
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
                "name": "v1389",
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
  Bytecode: `0x60806040526040516200626c3803806200626c833981016040819052620000269162000a1f565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600a62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007e5565b620002729695949392919062000b34565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f86dd63d8ba7946b7ba28a290cfb218324dd1ed82838f3d1a7b34fa96a5b9eacd9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007f3565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c2f565b604051602081830303815290604052600290805190602001906200059b9291906200086a565b5050505062000d8c565b620005af620008f9565b60005b60028110156200060557848160028110620005d157620005d162000ace565b6020020151828260028110620005eb57620005eb62000ace565b602002015280620005fc8162000d25565b915050620005b2565b50818184600281106200061c576200061c62000ace565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516102e08101909152600061028082018181526102a083018290526102c083019190915281526020810162000689620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620006b8620008f9565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251606080820185528382528183018490528185018490528501528251908101909252808252608083019190915260a0820181905260c082015260e0016200072662000946565b8152604080516060810182526000808252602082810182905292820152910190815260200162000755620008f9565b8152604080516060810182526000808252602082810182905292820152910190815260200162000784620008f9565b81526040805160608101825260008082526020828101829052928201529101908152602001620007b3620008f9565b8152602001620007c262000964565b8152602001620007d162000982565b8152602001620007e062000982565b905290565b61108780620051e583390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620007b3620008f9565b828054620008789062000d4f565b90600052602060002090601f0160209004810192826200089c5760008555620008e7565b82601f10620008b757805160ff1916838001178555620008e7565b82800160010185558215620008e7579182015b82811115620008e7578251825591602001919060010190620008ca565b50620008f5929150620009a0565b5090565b60405180604001604052806002905b6200092f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009085790505090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008f55760008155600101620009a1565b604080519081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009e857634e487b7160e01b600052604160045260246000fd5b600081830361010081121562000a3457600080fd5b62000a3e620009b7565b8351815260e0601f198301121562000a5557600080fd5b62000a5f620009ee565b6020850151815260408501519092506001600160a01b038116811462000a8457600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b0c5760208185018101518683018201520162000aee565b8181111562000b1f576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b4960c083018962000ae4565b828103602084015262000b5d818962000ae4565b9050828103604084015262000b73818862000ae4565b9050828103606084015262000b89818762000ae4565b6080840195909552505060a00152949350505050565b8060005b600281101562000bdf57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000ba3565b50505050565b8060005b600581101562000bdf57815184526020938401939091019060010162000be9565b8060005b600681101562000bdf57815184526020938401939091019060010162000c0e565b81516001600160a01b03168152610420810160208301516020830152604083015162000c6660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000cc1828501826001600160a01b03169052565b50506101408084015162000cd88285018262000b9f565b505061016083015162000cf061020084018262000be5565b5061018083015162000d076102a084018262000c0a565b506101a083015162000d1e61036084018262000c0a565b5092915050565b600060001982141562000d4857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d6457607f821691505b6020821081141562000d8657634e487b7160e01b600052602260045260246000fd5b50919050565b6144498062000d9c6000396000f3fe6080604052600436106100f65760003560e01c806373b4522c1161008f578063a556059611610061578063a556059614610218578063ab53f2c614610238578063bf2c5b241461025b578063cadc2e7a1461026e578063e73216b51461028e57005b806373b4522c146101bb5780637a3678dd146101ce57806383230757146101f05780638e3147691461020557005b80633bc5b7bf116100c85780633bc5b7bf1461016b5780636579ece6146101985780636cd6de3a146101ab5780636cdcb9df146101b357005b80631e93b0f1146100ff5780632b10758a146101235780632c10a1591461013857806330a94db41461014b57005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b61012b610296565b60405161011a9190613605565b6100fd61014636600461362f565b6102e6565b34801561015757600080fd5b50610110610166366004613647565b61030a565b34801561017757600080fd5b5061018b610186366004613678565b610561565b60405161011a91906136ab565b6100fd6101a63660046136e2565b61058d565b61012b6105ad565b61012b610600565b6100fd6101c936600461362f565b610656565b3480156101da57600080fd5b506101e3610676565b60405161011a919061373a565b3480156101fc57600080fd5b50600154610110565b6100fd61021336600461362f565b610ae5565b34801561022457600080fd5b50610110610233366004613647565b610b05565b34801561024457600080fd5b5061024d610d50565b60405161011a929190613881565b6100fd61026936600461362f565b610ded565b34801561027a57600080fd5b5061018b610289366004613678565b610e0d565b61012b610e33565b61029e612ee8565b6102a6612f12565b6102ae612f51565b6102b6612f6b565b6000602082810182905290825260408051808301909152828152908301526102de8284610e86565b505051919050565b6102ee612f12565b610306610300368490038401846139ba565b82611dda565b5050565b6000600160005414156103c75760006002805461032690613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461035290613a10565b801561039f5780601f106103745761010080835404028352916020019161039f565b820191906000526020600020905b81548152906001019060200180831161038257829003601f168201915b50505050508060200190518101906103b79190613bda565b90506103c5600060096120d0565b505b6003600054141561048b576000600280546103e190613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461040d90613a10565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b50505050508060200190518101906104729190613cc1565b90508060a00151836104849190613ded565b9392505050565b600660005414156104a5576000600280546103e190613a10565b60076000541415610550576000600280546104bf90613a10565b80601f01602080910402602001604051908101604052809291908181526020018280546104eb90613a10565b80156105385780601f1061050d57610100808354040283529160200191610538565b820191906000526020600020905b81548152906001019060200180831161051b57829003601f168201915b50505050508060200190518101906104729190613e04565b61055c600060096120d0565b919050565b6040805160608101825260008082526020820181905291810191909152610587826120f6565b92915050565b610595612f12565b6103066105a736849003840184613f65565b82610e86565b6105b5612ee8565b6105bd612f12565b6105c5612f51565b6105cd612f6b565b6000606082015260028152604080516020808201909252828152908301526105f58284610e86565b505060400151919050565b610608612ee8565b610610612f12565b610618612f51565b610620612f6b565b60006040820152600181819052506040805160208082019092528281529083015261064b8284610e86565b505060200151919050565b61065e612f12565b610306610670368490038401846139ba565b826121c8565b61067e612f9b565b600160005414156107395760006002805461069890613a10565b80601f01602080910402602001604051908101604052809291908181526020018280546106c490613a10565b80156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b50505050508060200190518101906107299190613bda565b9050610737600060076120d0565b505b600360005414156108fd5760006002805461075390613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461077f90613a10565b80156107cc5780601f106107a1576101008083540402835291602001916107cc565b820191906000526020600020905b8154815290600101906020018083116107af57829003601f168201915b50505050508060200190518101906107e49190613cc1565b90506107ee613053565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e080850151845190920191909152610220808501518451909201919091526101008085015184519084169101526101c0808501518451610120908101919091526101e0808701518651610140908101919091526102008089015188519716610160978801526101a0808a01518951610180908101919091528a01518951909101529288018051885190950194909452870151865190910152905184519091015292015181519092019190915251919050565b600660005414156109175760006002805461075390613a10565b60076000541415610ad65760006002805461093190613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461095d90613a10565b80156109aa5780601f1061097f576101008083540402835291602001916109aa565b820191906000526020600020905b81548152906001019060200180831161098d57829003601f168201915b50505050508060200190518101906109c29190613e04565b90506109cc613053565b6060808301518251526080808401518351602090810191909152840151835160409081019190915284015183516001600160a01b0391821693019290925260a08085015184519092019190915260c08085015184519092019190915260e0808501518451909201919091526102c08401518351909101526101008084015183519083169101526101c0808401518351610120908101919091526101e0808601518551610140908101919091526102008088015187519616610160968701526101a08089015188516101809081019190915289015188519091015292870180518751909501949094528601518551909101529051835190910152909101518151610220015251919050565b610ae2600060076120d0565b90565b610aed612f12565b610306610aff368490038401846139ba565b826123e9565b600060016000541415610bc257600060028054610b2190613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4d90613a10565b8015610b9a5780601f10610b6f57610100808354040283529160200191610b9a565b820191906000526020600020905b815481529060010190602001808311610b7d57829003601f168201915b5050505050806020019051810190610bb29190613bda565b9050610bc0600060086120d0565b505b60036000541415610c7f57600060028054610bdc90613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0890613a10565b8015610c555780601f10610c2a57610100808354040283529160200191610c55565b820191906000526020600020905b815481529060010190602001808311610c3857829003601f168201915b5050505050806020019051810190610c6d9190613cc1565b90508060a00151836104849190614019565b60066000541415610c9957600060028054610bdc90613a10565b60076000541415610d4457600060028054610cb390613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054610cdf90613a10565b8015610d2c5780601f10610d0157610100808354040283529160200191610d2c565b820191906000526020600020905b815481529060010190602001808311610d0f57829003601f168201915b5050505050806020019051810190610c6d9190613e04565b61055c600060086120d0565b600060606000546002808054610d6590613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9190613a10565b8015610dde5780601f10610db357610100808354040283529160200191610dde565b820191906000526020600020905b815481529060010190602001808311610dc157829003601f168201915b50505050509050915091509091565b610df5612f12565b610306610e07368490038401846139ba565b8261251d565b60408051606081018252600080825260208201819052918101919091526105878261276f565b610e3b612ee8565b610e43612f12565b610e4b612f51565b610e53612f6b565b600060808201526003815260408051602080820190925282815290830152610e7b8284610e86565b505060600151919050565b610e9660076000541460276120d0565b8151610eb1901580610eaa57508251600154145b60286120d0565b600080805560028054610ec390613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054610eef90613a10565b8015610f3c5780601f10610f1157610100808354040283529160200191610f3c565b820191906000526020600020905b815481529060010190602001808311610f1f57829003601f168201915b5050505050806020019051810190610f549190613e04565b9050610f5e613066565b610f70826101800151421060296120d0565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e184604051610f9f9190614031565b60405180910390a16000602085015151516003811115610fc157610fc1613695565b14156112b3576001610fd2336120f6565b516001811115610fe457610fe4613695565b14610ff0576000610ffe565b610ff9336120f6565b604001515b602082018190526110139060051160186120d0565b60058160200151106110285760f9815261104b565b81610120015181602001516005811061104357611043614091565b602002015181525b611057341560196120d0565b80516102a08301516110699190614019565b6040808301805192909252610280840151825160200152610260840151810151915191151591015261010082015181516110b0916110a9913391906127fc565b601a6120d0565b600181602001516110c19190614019565b60608201908152336000818152600460205260409020805460ff19166001908117825592519083018190556080840151526110fb9061276f565b51600181111561110d5761110d613695565b14611119576000611127565b6111223361276f565b604001515b60808201805160200191909152805133604091820152905190517f7d4b0de4bc3fc5ca26bcc81eeefb485df89b79cca9efa4fb19f219ed66d71dfa9161116c91613605565b60405180910390a1608081015183526111836131dd565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b015181518701526101c08b01518151909501949094526101e08a01518451909301929092526102008901518351961695019490945251439301929092526102208501519184015161128a929190612812565b60208201805160e00191909152610240840151905161010001526112ad81612886565b50611dd4565b60016020850151515160038111156112cd576112cd613695565b14156118735760016112de336120f6565b5160018111156112f0576112f0613695565b146112fc57600061130a565b611305336120f6565b604001515b60c08201819052600511801560e083015261132b57600060a0820152611351565b8161014001518160c001516006811061134657611346614091565b602002015160a08201525b61136360648260a0015110601b6120d0565b60648160a0015160646113769190613ded565b836101c0015161138691906140a7565b61139091906140c6565b61010082018190526113a5903414601c6120d0565b6102a08201516101208201805191909152610280830151815160200152610260830151604090810151825190151591015261022083015190516113eb9190600190612812565b81610140018190525061140f6114083384610100015160006127fc565b601d6120d0565b61142160018360c0015111601e6120d0565b60e0820151610140820151602001515161143d9110601f6120d0565b8060e001511561145457600061016082015261147b565b8161014001518160c001516006811061146f5761146f614091565b60200201516101608201525b61148e60648261016001511060206120d0565b8160c00151606482610160015160646114a79190613ded565b846101c001516114b791906140a7565b6114c191906140c6565b6114cb91906140c6565b610180820181905282516040516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561150a573d6000803e3d6000fd5b5060e082015161014082015160200151516115259190613ded565b6101a0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015261010082015160e083015161156e91903390612bb6565b60016115793361276f565b51600181111561158b5761158b613695565b146115975760006115a5565b6115a03361276f565b604001515b6101e082018190526005116115c15760006101c08201526115e9565b816101600151816101e00151600681106115dd576115dd614091565b60200201516101c08201525b60c081015161020082018051919091526101e0820151815160200152805133604091820152905190517f8d6aa48eeca97ddf96ab5d7eb5f0977e02477b44e0f9e93a12b4f5a2363ce1f09161163d91613605565b60405180910390a1610200810151602084015260e08101511561166757600061022082015261168e565b8161014001518160c001516006811061168257611682614091565b60200201516102208201525b6116a160648261022001511060216120d0565b6116a96131dd565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351909101526080808501805184519092019190915260a08086015184519091015260c08086015184519091015260e08086015184519091015261010080860151845193169201919091526101208085015183519091015261014080850151835190910152610160808501518351909101526101c0830151905161175e9190613ded565b83610180015161176e9190614019565b6020808301805192909252905160019101526101808201516101a08401516117969190614019565b60208201516040015260a08301516101c08401516117b49190614019565b6020820151606001526102208201516064906117d09082613ded565b846101c001516117e091906140a7565b6117ea91906140c6565b836101e001516117fa9190614019565b6020820180516080019190915280513360a090910152514360c0909101526101408201516101a08301516118319190600190612812565b602082015160e001526101808201516101008301516102408501516118569190614019565b6118609190613ded565b602082015161010001526112ad81612886565b600260208501515151600381111561188d5761188d613695565b1415611b7757600161189e3361276f565b5160018111156118b0576118b0613695565b146118bc5760006118ca565b6118c53361276f565b604001515b61026082018190526118e09060051160226120d0565b6005816102600151106118fa5760f9610240820152611922565b8161012001518161026001516005811061191657611916614091565b60200201516102408201525b61192e341560236120d0565b806102400151826102a001516119449190614019565b610280808301805192909252830151815160200152610260830151604090810151915191151591015261010082015161024082015161199091611989913391906127fc565b60246120d0565b60018161026001516119a29190614019565b6102a08201908152336000818152600560205260409020805460ff1916600190811782559251908301556119d5906120f6565b5160018111156119e7576119e7613695565b146119f3576000611a01565b6119fc336120f6565b604001515b6102c082018051919091526102a0820151815160200152805133604091820152905190517feebb223aa3b773f78473357473a7d3809502444e5f895b03d51fd5b3d070aac891611a5091613605565b60405180910390a16102c08101516040840152611a6b6131dd565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b01518151909601959095526101c08a01518551909401939093526101e089015184519092019190915261020088015183519516940193909352514392019190915261022084015161028084015161128a9290612812565b6003602085015151516003811115611b9157611b91613695565b1415611dd457611ba3341560256120d0565b6102a08201516102e082018051919091526102808301518151602001526102608301516040908101519151911515910152610100820151611bf290611beb90339060006127fc565b60266120d0565b6001611bfd336120f6565b516001811115611c0f57611c0f613695565b14611c1b576000611c29565b611c24336120f6565b604001515b610300820151526001611c3b3361276f565b516001811115611c4d57611c4d613695565b14611c59576000611c67565b611c623361276f565b604001515b6103008201805160200191909152805133604091820152905190517fc034739074cb637e09021bfd2b194a0feb39c23a1fe656680f652c857d45452491611cad91613605565b60405180910390a16103008101516060840152611cc86131dd565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b0151895190910152610100808b01518951908916910152610120808b0151895190910152610140808b0151895190910152610160808b01518951909101526101808a01518689018051919091528051600197018790526101a08b01518151909601959095526101c08a01518551909401939093526101e08901518451909201919091526102008801518351951694019390935251439201919091526102208401516102e084015161128a9290612812565b50505050565b611dea600160005414600f6120d0565b8151611e05901580611dfe57508251600154145b60106120d0565b600080805560028054611e1790613a10565b80601f0160208091040260200160405190810160405280929190818152602001828054611e4390613a10565b8015611e905780601f10611e6557610100808354040283529160200191611e90565b820191906000526020600020905b815481529060010190602001808311611e7357829003601f168201915b5050505050806020019051810190611ea89190613bda565b9050611ed160408051608081018252600060208201818152928201819052606082015290815290565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611f1c3415600c6120d0565b6101408201515151611f3090600190614019565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611f7390611f6c90339060016127fc565b600d6120d0565b8151611f8b906001600160a01b03163314600e6120d0565b611f936131dd565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e08086015184519091015261012080860151845193166101009384015261016080870151855190920191909152610180860151845161014001526101a086015184519091015251908401516120489190614019565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c09091015261014084015183516120a99290612812565b60208201805160e00191909152516000610100909101526120c981612886565b5050505050565b816103065760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561214257612142613695565b14156121b9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561218357612183613695565b600181111561219457612194613695565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6121d860036000541460126120d0565b81516121f39015806121ec57508251600154145b60136120d0565b60008080556002805461220590613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461223190613a10565b801561227e5780601f106122535761010080835404028352916020019161227e565b820191906000526020600020905b81548152906001019060200180831161226157829003601f168201915b50505050508060200190518101906122969190613cc1565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a16122e4341560116120d0565b6122ec6131fd565b815181516001600160a01b0391821690526020808401518351820152604080850151845190841691015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e080850151845190910152610100808501518451908416910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a0808501518451909101526101c0808501518451909101526101e080850151845190910152610200808501518451931692019190915261022080840151835190910152810151439052611dd481612bcf565b6123f960066000541460166120d0565b815161241490158061240d57508251600154145b60176120d0565b60008080556002805461242690613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461245290613a10565b801561249f5780601f106124745761010080835404028352916020019161249f565b820191906000526020600020905b81548152906001019060200180831161248257829003601f168201915b50505050508060200190518101906124b79190613cc1565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a1612505341560146120d0565b80516122e4906001600160a01b0316331460156120d0565b61252d600760005414602b6120d0565b815161254890158061254157508251600154145b602c6120d0565b60008080556002805461255a90613a10565b80601f016020809104026020016040519081016040528092919081815260200182805461258690613a10565b80156125d35780601f106125a8576101008083540402835291602001916125d3565b820191906000526020600020905b8154815290600101906020018083116125b657829003601f168201915b50505050508060200190518101906125eb9190613e04565b9050612600816101800151421015602d6120d0565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a161264b3415602a6120d0565b6126536131dd565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a01518951820152610100808b01518a51908a1690820152610120808c01518b5190910152610140808c01518b5190910152610160808c01518b51909101526101808b0151888b01805191909152805160009901989098526101a08b01518851909701969096526101c08a01518751909501949094526101e089015186519093019290925261020088015185519616950194909452825143940193909352610220850151825190930192909252610240840151905190910152611dd481612886565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156127bb576127bb613695565b14156121b9576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561218357612183613695565b600061280a83853085612d02565b949350505050565b61281a61322b565b60005b60028110156128665784816002811061283857612838614091565b602002015182826002811061284f5761284f614091565b60200201528061285e816140e8565b91505061281d565b508181846002811061287a5761287a614091565b60200201529392505050565b604080518082019091526000808252602082015281602001516020015115612a2e5760208281015160e0015181015180519101516128c49190613ded565b81526128ce613276565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151818901528951610100908101518816818a01528a5161012090810151908a01528a5161014090810151908a01528a5161016090810151908a0152868b018051516101808b015280518701516101a08b01528051909501516101c08a01528451909301516101e0890152835190910151909516610200870152815185015161022087015281510151610240860152805184015183015161026086015280518401518301518301516102808601525190920151810151516102a084015283516102c08401526007600055436001559051612a0a91839101614147565b60405160208183030381529060405260029080519060200190611dd4929190613384565b60208281015160e001518101518051910151612a4a9190613ded565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612a98573d6000803e3d6000fd5b50612ab5826000015160400151836020015160a001516001612bb6565b612abd613408565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e0908101519088015288516101009081015187169088015288516101209081015190880152885161014090810151908801528851610160908101519088015284890180515161018089015280518501516101a08901528051909301516101c08801528251909101516101e087015290510151909216610200840152838101516102208401526003600055436001559051612a0a918391016142c0565b612bc1838383612ddc565b612bca57600080fd5b505050565b612bd7613408565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101518416908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519085015284516101c0908101519085015284516101e0908101519085015284516102009081015190931692840192909252835161022090810151908401526006600055436001559051612cde918391016142c0565b60405160208183030381529060405260029080519060200190612bca929190613384565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612d69916143da565b60006040518083038185875af1925050503d8060008114612da6576040519150601f19603f3d011682016040523d82523d6000602084013e612dab565b606091505b5091509150612dbc82826001612ead565b5080806020019051810190612dd191906143f6565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612e3b916143da565b60006040518083038185875af1925050503d8060008114612e78576040519150601f19603f3d011682016040523d82523d6000602084013e612e7d565b606091505b5091509150612e8e82826002612ead565b5080806020019051810190612ea391906143f6565b9695505050505050565b60608315612ebc575081610484565b825115612ecc5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120ed565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b6040518060800160405280612f25612ee8565b8152602001612f32612ee8565b8152602001612f3f612ee8565b8152602001612f4c612ee8565b905290565b604051806040016040528060008152602001612f4c6134c9565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b60405180610240016040528060008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200161302c6134dc565b81526020016130396134fa565b81526020016130466134dc565b8152602001612f4c6134fa565b6040518060200160405280612f4c612f9b565b60405180610320016040528060008152602001600081526020016130a6604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016130ba612ee8565b8152602001600081526020016000815260200160001515815260200160008152602001613103604051806060016040528060008152602001600081526020016000151581525090565b815260200161311061322b565b81526020016000815260200160008152602001613149604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001613164612ee8565b81526020016000815260200160008152602001600081526020016131a4604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016131b8612ee8565b8152604080516060810182526000808252602082810182905292820152910190612f3f565b60405180604001604052806131f0613518565b8152602001612f4c613593565b6040518060400160405280613210613408565b8152602001612f4c6040518060200160405280600081525090565b60405180604001604052806002905b613260604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161323a5790505090565b604051806102e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016132e46134dc565b81526020016132f16134fa565b81526020016132fe6134fa565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200161333761322b565b815260200160008152602001613369604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b82805461339090613a10565b90600052602060002090601f0160209004810192826133b257600085556133f8565b82601f106133cb57805160ff19168380011785556133f8565b828001600101855582156133f8579182015b828111156133f85782518255916020019190600101906133dd565b506134049291506135f0565b5090565b60405180610240016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016134766134dc565b81526020016134836134fa565b81526020016134906134fa565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280612f4c612f6b565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016135866134dc565b81526020016130466134fa565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016135e361322b565b8152602001600081525090565b5b8082111561340457600081556001016135f1565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b60006040828403121561364157600080fd5b50919050565b60006020828403121561365957600080fd5b5035919050565b6001600160a01b038116811461367557600080fd5b50565b60006020828403121561368a57600080fd5b813561048481613660565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106136c2576136c2613695565b808352506020830151151560208301526040830151604083015292915050565b600060c0828403121561364157600080fd5b8060005b6005811015611dd45781518452602093840193909101906001016136f8565b8060005b6006811015611dd457815184526020938401939091019060010161371b565b600061048082019050825182526020830151602083015260408301516040830152606083015161377560608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516137b9828501826001600160a01b03169052565b505061012083810151908301526101408084015190830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c08084015161380e828501826136f4565b50506101e0830151613824610260840182613717565b506102008301516138396103208401826136f4565b5061022083015161384e6103c0840182613717565b5092915050565b60005b83811015613870578181015183820152602001613858565b83811115611dd45750506000910152565b82815260406020820152600082518060408401526138a6816060850160208701613855565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff811182821017156138f5576138f56138bb565b60405290565b604051610240810167ffffffffffffffff811182821017156138f5576138f56138bb565b6040516102e0810167ffffffffffffffff811182821017156138f5576138f56138bb565b6040805190810167ffffffffffffffff811182821017156138f5576138f56138bb565b6040516020810167ffffffffffffffff811182821017156138f5576138f56138bb565b60405160a0810167ffffffffffffffff811182821017156138f5576138f56138bb565b801515811461367557600080fd5b6000604082840312156139cc57600080fd5b6040516040810181811067ffffffffffffffff821117156139ef576139ef6138bb565b604052823581526020830135613a04816139ac565b60208201529392505050565b600181811c90821680613a2457607f821691505b6020821081141561364157634e487b7160e01b600052602260045260246000fd5b805161055c81613660565b600060608284031215613a6257600080fd5b6040516060810181811067ffffffffffffffff82111715613a8557613a856138bb565b806040525080915082518152602083015160208201526040830151613aa9816139ac565b6040919091015292915050565b600082601f830112613ac757600080fd5b6040516040810181811067ffffffffffffffff82111715613aea57613aea6138bb565b6040528060c0840185811115613aff57600080fd5b845b81811015613b2357613b138782613a50565b8352602090920191606001613b01565b509195945050505050565b600082601f830112613b3f57600080fd5b60405160a0810181811067ffffffffffffffff82111715613b6257613b626138bb565b6040528060a0840185811115613b7757600080fd5b845b81811015613b23578051835260209283019201613b79565b600082601f830112613ba257600080fd5b60405160c0810181811067ffffffffffffffff82111715613bc557613bc56138bb565b6040528060c0840185811115613b7757600080fd5b60006104208284031215613bed57600080fd5b613bf56138d1565b613bfe83613a45565b815260208301516020820152613c1660408401613a45565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120613c67818501613a45565b90820152610140613c7a85858301613ab6565b90820152613c8c846102008501613b2e565b610160820152613ca0846102a08501613b91565b610180820152613cb4846103608501613b91565b6101a08201529392505050565b60006104008284031215613cd457600080fd5b613cdc6138fb565b613ce583613a45565b815260208301516020820152613cfd60408401613a45565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100613d42818501613a45565b90820152610120613d5585858301613b2e565b908201526101c0613d6885858301613b91565b610140830152613d7c856102808601613b91565b6101608301526103408401516101808301526103608401516101a0830152610380840151908201526103a08301516101e0820152613dbd6103c08401613a45565b6102008201526103e0929092015161022083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613dff57613dff613dd7565b500390565b60006105808284031215613e1757600080fd5b613e1f61391f565b613e2883613a45565b815260208301516020820152613e4060408401613a45565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100613e85818501613a45565b90820152610120613e9885858301613b2e565b908201526101c0613eab85858301613b91565b610140830152610280613ec086828701613b91565b6101608401526103408501516101808401526103608501516101a0840152610380850151828401526103a08501516101e0840152613f016103c08601613a45565b610200840152613f15866103e08701613ab6565b6102208401526104a0850151610240840152613f35866104c08701613a50565b61026084015261052085015190830152506105408301516102a0820152610560909201516102c083015250919050565b600081830360c0811215613f7857600080fd5b613f80613943565b8335815260a0601f1983011215613f9657600080fd5b613f9e613966565b9150613fa8613989565b602085013560048110613fba57600080fd5b81526040850135613fca816139ac565b60208201526060850135613fdd816139ac565b60408201526080850135613ff0816139ac565b606082015260a0850135614003816139ac565b6080820152825260208101919091529392505050565b6000821982111561402c5761402c613dd7565b500190565b81518152602082015151805160c0830191906004811061405357614053613695565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156140c1576140c1613dd7565b500290565b6000826140e357634e487b7160e01b600052601260045260246000fd5b500490565b60006000198214156140fc576140fc613dd7565b5060010190565b8060005b6002811015611dd45761413184835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101614107565b81516001600160a01b03168152610580810160208301516020830152604083015161417d60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516141cb828501826001600160a01b03169052565b5050610120808401516141e0828501826136f4565b50506101408301516101c06141f781850183613717565b610160850151915061028061420e81860184613717565b6101808601516103408601526101a0860151610360860152818601516103808601526101e08601516103a08601526102008601516001600160a01b03166103c086015261022086015192506142676103e0860184614103565b6102408601516104a086015261026086015180516104c087015260208101516104e087015260400151151561050086015285015161052085015250506102a08301516105408301526102c0909201516105609091015290565b81516001600160a01b0316815261040081016020830151602083015260408301516142f660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151614344828501826001600160a01b03169052565b505061012080840151614359828501826136f4565b50506101408301516101c061437081850183613717565b6101608501519150614386610280850183613717565b6101808501516103408501526101a0850151610360850152840151610380840152506101e08301516103a08301526102008301516001600160a01b03166103c0830152610220909201516103e09091015290565b600082516143ec818460208701613855565b9190910192915050565b60006020828403121561440857600080fd5b8151610484816139ac56fea26469706673582212208e6f4d99c0ecb9100856aa297cb511d4fedad75a959f306dfa8c5f78389fa65564736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220cc97f1397fb46de8302456f9e91a7d96090095bba92a07b9bb50944f6af99f2a64736f6c634300080c0033`,
  BytecodeLen: 25196,
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
    at: './index.rsh:243:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:394:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:403:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:401:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:261:23:after expr stmt semicolon',
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

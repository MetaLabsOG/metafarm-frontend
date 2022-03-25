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
              const [v1151, v1152, v1153, v1154, v1155, v1156, v1157, v1158, v1160, v1173, v1201, v1202, v1203, v1205] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
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
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v2193
                  };
                
                return v2198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
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
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v2193
                  };
                
                return v2198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
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
                  nftPrize: v1153,
                  paidToFunder: v1227,
                  timeReductionPrices: v1202,
                  timeReductionSecs: v1205,
                  token: v1173,
                  tokenOwnedByUsers: v1269
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
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2199 ) => {
                  const v2199 = stdlib.protect(ctc1, _v2199, null);
                
                const v2200 = stdlib.add(v2199, v1156);
                
                return v2200;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2199 ) => {
                  const v2199 = stdlib.protect(ctc1, _v2199, null);
                
                const v2200 = stdlib.add(v2199, v1156);
                
                return v2200;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
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
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2201 ) => {
                  const v2201 = stdlib.protect(ctc1, _v2201, null);
                
                const v2202 = stdlib.sub(v2201, v1156);
                
                return v2202;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193] = svs;
              return (await ((async (_v2201 ) => {
                  const v2201 = stdlib.protect(ctc1, _v2201, null);
                
                const v2202 = stdlib.sub(v2201, v1156);
                
                return v2202;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = svs;
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
  
  
  const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1295 = ctc.selfAddress();
  const v1297 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:321:14:application call to [unknown function] (defined at: ./index.rsh:321:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:319:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v1298 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1295), null);
  const v1299 = stdlib.fromSome(v1298, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
  const v1300 = stdlib.lt(v1299, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1300, {
    at: './index.rsh:321:23:application',
    fs: ['at ./index.rsh:321:14:application call to [unknown function] (defined at: ./index.rsh:321:14:function exp)', 'at ./index.rsh:321:14:application call to [unknown function] (defined at: ./index.rsh:321:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyDiscount0_248" (defined at: ./index.rsh:319:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v1303 = ['Api_buyDiscount0_248', v1297];
  
  let v1324;
  const v1328 = stdlib.ge(v1299, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1328) {
    v1324 = stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1331 = v1202[v1299];
    v1324 = v1331;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1303],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:322:18:decimal', stdlib.UInt_max, 0), [[v1324, v1173]]],
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
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          ;
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1465);
          sim_r.txns.push({
            amt: v1397,
            kind: 'to',
            tok: v1173
            });
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:329:47:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v1388, v1471);
          const v1477 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
          const v3682 = v1466[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3683 = v3682[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3684 = v3682[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1389], secs: v1391, time: v1390, didSend: v773, from: v1388 } = txn1;
  switch (v1389[0]) {
    case 'Api_buyDiscount0_248': {
      const v1392 = v1389[1];
      undefined /* setApiDetails */;
      let v1397;
      const v1398 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
      const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1400, {
        at: './index.rsh:170:12:application',
        fs: ['at ./index.rsh:322:38:application call to "getDiscountPrice" (defined at: ./index.rsh:168:36:function exp)', 'at ./index.rsh:322:14:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1401) {
        v1397 = stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1404 = v1202[v1399];
        v1397 = v1404;
        }
      ;
      const v1460 = stdlib.add(v1268, v1397);
      const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
      const v1465 = [v1460, v1266, v1464];
      const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1465);
      ;
      const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:329:47:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v1388, v1471);
      const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
      const v1479 = {
        addr: v1388,
        discountLevel: v1471,
        timeReductionLevel: v1478
        };
      const v1481 = await txn1.getOutput('Api_buyDiscount', 'v1479', ctc12, v1479);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1392, v1481), {
          at: './index.rsh:320:11:application',
          fs: ['at ./index.rsh:320:11:application call to [unknown function] (defined at: ./index.rsh:320:11:function exp)', 'at ./index.rsh:338:21:application call to "callback" (defined at: ./index.rsh:323:22:function exp)', 'at ./index.rsh:323:22:application call to [unknown function] (defined at: ./index.rsh:323:22:function exp)'],
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
      const v3682 = v1466[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3683 = v3682[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3684 = v3682[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
  
  
  const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1283 = ctc.selfAddress();
  const v1285 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:288:14:application call to [unknown function] (defined at: ./index.rsh:288:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:286:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v1287 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:289:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1287, {
    at: './index.rsh:289:19:application',
    fs: ['at ./index.rsh:288:14:application call to [unknown function] (defined at: ./index.rsh:288:14:function exp)', 'at ./index.rsh:288:14:application call to [unknown function] (defined at: ./index.rsh:288:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:286:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1290 = stdlib.gt(v1268, v1158);
  stdlib.assert(v1290, {
    at: './index.rsh:290:19:application',
    fs: ['at ./index.rsh:288:14:application call to [unknown function] (defined at: ./index.rsh:288:14:function exp)', 'at ./index.rsh:288:14:application call to [unknown function] (defined at: ./index.rsh:288:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyTicket0_248" (defined at: ./index.rsh:286:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1293 = ['Api_buyTicket0_248', v1285];
  
  let v1342;
  const v1343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1283), null);
  const v1344 = stdlib.fromSome(v1343, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
  const v1345 = stdlib.ge(v1344, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
  if (v1345) {
    v1342 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1348 = v1203[v1344];
    v1342 = v1348;
    }
  const v1349 = stdlib.lt(v1342, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v1349, {
    at: './index.rsh:190:12:application',
    fs: ['at ./index.rsh:292:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:292:14:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v1350 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1342);
  const v1351 = stdlib.mul(v1228, v1350);
  const v1352 = stdlib.div(v1351, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1293],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v1352, [[stdlib.checkedBigNumberify('./index.rsh:292:54:decimal', stdlib.UInt_max, 0), v1173]]],
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
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          sim_r.txns.push({
            amt: v1620,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:294:44:decimal', stdlib.UInt_max, 1));
          ;
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          ;
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
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
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1), v1718);
          sim_r.txns.push({
            amt: v1158,
            kind: 'from',
            to: v1388,
            tok: v1173
            });
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:223:16:decimal', stdlib.UInt_max, 0);
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
            v1740 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          ;
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
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
          const v3817 = v1719[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3818 = v3817[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3819 = v3817[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
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
      const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
      const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
      if (v1613) {
        v1610 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1616 = v1203[v1612];
        v1610 = v1616;
        }
      const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1617, {
        at: './index.rsh:190:12:application',
        fs: ['at ./index.rsh:292:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:292:14:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1610);
      const v1619 = stdlib.mul(v1228, v1618);
      const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
      const v1655 = stdlib.add(v1239, v1620);
      ;
      const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
      const v1663 = [v1268, v1266, v1662];
      const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1663);
      ;
      const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:294:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v1686, {
        at: './index.rsh:294:20:application',
        fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 1)];
      const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 0)];
      const v1689 = stdlib.gt(v1688, v1158);
      stdlib.assert(v1689, {
        at: './index.rsh:295:20:application',
        fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      let v1690;
      if (v1613) {
        v1690 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1696 = v1203[v1612];
        v1690 = v1696;
        }
      const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1697, {
        at: './index.rsh:190:12:application',
        fs: ['at ./index.rsh:298:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1690);
      const v1699 = stdlib.mul(v1228, v1698);
      const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
      const v1701 = stdlib.div(v1700, v1157);
      const v1702 = stdlib.add(v1228, v1156);
      const v1707 = stdlib.sub(v1655, v1701);
      ;
      const v1713 = stdlib.sub(v1688, v1158);
      const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1)];
      const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 2)];
      const v1718 = [v1713, v1716, v1717];
      const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1), v1718);
      ;
      let v1720;
      const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
      const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1723) {
        v1720 = stdlib.checkedBigNumberify('./index.rsh:223:16:decimal', stdlib.UInt_max, 0);
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
          at: './index.rsh:287:11:application',
          fs: ['at ./index.rsh:287:11:application call to [unknown function] (defined at: ./index.rsh:287:11:function exp)', 'at ./index.rsh:308:21:application call to "callback" (defined at: ./index.rsh:293:22:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      let v1740;
      if (v1613) {
        v1740 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1746 = v1203[v1612];
        v1740 = v1746;
        }
      const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1747, {
        at: './index.rsh:190:12:application',
        fs: ['at ./index.rsh:312:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1740);
      const v1749 = stdlib.mul(v1228, v1748);
      const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
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
      const v3817 = v1719[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3818 = v3817[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3819 = v3817[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
  
  
  const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1305 = ctc.selfAddress();
  const v1307 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:344:14:application call to [unknown function] (defined at: ./index.rsh:344:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:342:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v1308 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1305), null);
  const v1309 = stdlib.fromSome(v1308, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
  const v1310 = stdlib.lt(v1309, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v1310, {
    at: './index.rsh:344:23:application',
    fs: ['at ./index.rsh:344:14:application call to [unknown function] (defined at: ./index.rsh:344:14:function exp)', 'at ./index.rsh:344:14:application call to [unknown function] (defined at: ./index.rsh:344:14:function exp)', 'at ./index.rsh:256:23:application call to "runApi_buyTimeReduction0_248" (defined at: ./index.rsh:342:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v1313 = ['Api_buyTimeReduction0_248', v1307];
  
  let v1363;
  const v1367 = stdlib.ge(v1309, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
  if (v1367) {
    v1363 = stdlib.checkedBigNumberify('./index.rsh:214:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v1370 = v1202[v1309];
    v1363 = v1370;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1313],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:345:18:decimal', stdlib.UInt_max, 0), [[v1363, v1173]]],
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
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          ;
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:214:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1861);
          sim_r.txns.push({
            amt: v1826,
            kind: 'to',
            tok: v1173
            });
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:352:57:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v1388, v1957);
          const v1961 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
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
          const v3952 = v1862[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3953 = v3952[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v3954 = v3952[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1, ctc11],
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
      const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
      const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1829, {
        at: './index.rsh:211:12:application',
        fs: ['at ./index.rsh:345:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:209:41:function exp)', 'at ./index.rsh:345:14:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
      if (v1830) {
        v1826 = stdlib.checkedBigNumberify('./index.rsh:214:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1833 = v1202[v1828];
        v1826 = v1833;
        }
      ;
      const v1856 = stdlib.add(v1268, v1826);
      const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
      const v1861 = [v1856, v1266, v1860];
      const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1861);
      ;
      const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:352:57:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v1388, v1957);
      const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
      const v1965 = {
        addr: v1388,
        discountLevel: v1962,
        timeReductionLevel: v1957
        };
      const v1967 = await txn1.getOutput('Api_buyTimeReduction', 'v1965', ctc12, v1965);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1788, v1967), {
          at: './index.rsh:343:11:application',
          fs: ['at ./index.rsh:343:11:application call to [unknown function] (defined at: ./index.rsh:343:11:function exp)', 'at ./index.rsh:362:21:application call to "callback" (defined at: ./index.rsh:346:22:function exp)', 'at ./index.rsh:346:22:application call to [unknown function] (defined at: ./index.rsh:346:22:function exp)'],
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
      const v3952 = v1862[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3953 = v3952[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v3954 = v3952[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
  
  
  const [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc1, ctc8, ctc1, ctc1, ctc1]);
  const v1317 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:366:13:application call to [unknown function] (defined at: ./index.rsh:366:13:function exp)', 'at ./index.rsh:256:23:application call to "runApi_getParticipantStats0_248" (defined at: ./index.rsh:366:13:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)'],
    msg: 'in',
    who: 'Api_getParticipantStats'
    });
  const v1321 = ['Api_getParticipantStats0_248', v1317];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269, v1321],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:366:13:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:285:18:decimal', stdlib.UInt_max, 0), v1173]]],
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
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
          const v4087 = v2060[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v4088 = v4087[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
          const v4089 = v4087[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
          const v4090 = stdlib.sub(v4088, v4089);
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
      const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
      const v2059 = [v1268, v1266, v2058];
      const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v2059);
      ;
      const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
      const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
      const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
      const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
      const v2176 = {
        addr: v1388,
        discountLevel: v2173,
        timeReductionLevel: v2175
        };
      const v2178 = await txn1.getOutput('Api_getParticipantStats', 'v2176', ctc12, v2176);
      if (v773) {
        stdlib.protect(ctc0, await interact.out(v1986, v2178), {
          at: './index.rsh:367:11:application',
          fs: ['at ./index.rsh:367:11:application call to [unknown function] (defined at: ./index.rsh:367:11:function exp)', 'at ./index.rsh:370:21:application call to "callback" (defined at: ./index.rsh:368:22:function exp)', 'at ./index.rsh:368:22:application call to [unknown function] (defined at: ./index.rsh:368:22:function exp)'],
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
      const v4087 = v2060[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v4088 = v4087[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
      const v4089 = v4087[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
  const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0)];
  const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 1)];
  const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 2)];
  const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
  const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0), v1165);
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
    at: './index.rsh:147:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Buyer'
    });
  const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
  const v1187 = [stdlib.UInt_max, v1185, v1186];
  const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1187);
  const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
  const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
  const v1194 = [v1191, stdlib.UInt_max, v1193];
  const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1194);
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
  const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1200 = [v1197, v1198, false];
  const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1200);
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
  const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
  const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
  const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:240:18:decimal', stdlib.UInt_max, 1));
  const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 1)];
  const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 2)];
  const v1216 = [v1211, v1214, v1215];
  const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0), v1216);
  ;
  const v1218 = stdlib.addressEq(v1151, v1206);
  stdlib.assert(v1218, {
    at: './index.rsh:240:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:244:24:application',
    fs: ['at ./index.rsh:243:9:application call to [unknown function] (defined at: ./index.rsh:243:30:function exp)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const v1224 = stdlib.add(v1160, v1154);
  let v1225 = v1224;
  let v1226 = true;
  let v1227 = stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 0);
  let v1228 = v1152;
  let v1230 = stdlib.checkedBigNumberify('./index.rsh:256:43:decimal', stdlib.UInt_max, 0);
  let v1231 = v1151;
  let v1232 = v1207;
  let v1238 = v1217;
  let v1239 = stdlib.checkedBigNumberify('./index.rsh:130:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1226;})()) {
    const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
    const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
    const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
        args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:376:19:decimal', stdlib.UInt_max, 0), []],
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
              const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
              const v1269 = stdlib.sub(v1266, v1268);
              sim_r.isHalt = false;
              }
            else {
              const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
              const v2193 = stdlib.sub(v2190, v2192);
              sim_r.txns.push({
                amt: v1239,
                kind: 'from',
                to: v1231,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:381:27:decimal', stdlib.UInt_max, 1),
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
        tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc12, ctc1, ctc11, ctc1, ctc1, ctc1],
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
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1400, {
            at: './index.rsh:170:12:application',
            fs: ['at ./index.rsh:322:38:application call to "getDiscountPrice" (defined at: ./index.rsh:168:36:function exp)', 'at ./index.rsh:322:14:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1465);
          ;
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:329:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1388, v1471);
          const v1472 = ctc.selfAddress();
          stdlib.protect(ctc0, await interact.updateDiscountLevel(v1472, v1471), {
            at: './index.rsh:333:45:application',
            fs: ['at ./index.rsh:331:23:application call to [unknown function] (defined at: ./index.rsh:331:27:function exp)', 'at ./index.rsh:323:22:application call to [unknown function] (defined at: ./index.rsh:323:22:function exp)'],
            msg: 'updateDiscountLevel',
            who: 'Buyer'
            });
          
          const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1617, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:292:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:292:14:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          ;
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:294:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1686, {
            at: './index.rsh:294:20:application',
            fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          stdlib.assert(v1689, {
            at: './index.rsh:295:20:application',
            fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1697, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:298:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
          const v1701 = stdlib.div(v1700, v1157);
          const v1702 = stdlib.add(v1228, v1156);
          stdlib.protect(ctc0, await interact.showPurchase(v1388, v1700, v1702), {
            at: './index.rsh:301:51:application',
            fs: ['at ./index.rsh:301:23:application call to [unknown function] (defined at: ./index.rsh:301:27:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1707 = stdlib.sub(v1655, v1701);
          ;
          const v1713 = stdlib.sub(v1688, v1158);
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1), v1718);
          ;
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:223:16:decimal', stdlib.UInt_max, 0);
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
            v1740 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1747, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:312:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
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
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1829, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:345:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:209:41:function exp)', 'at ./index.rsh:345:14:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:214:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1861);
          ;
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:352:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1388, v1957);
          const v1958 = ctc.selfAddress();
          stdlib.protect(ctc0, await interact.updateTimeReductionLevel(v1958, v1957), {
            at: './index.rsh:357:50:application',
            fs: ['at ./index.rsh:354:23:application call to [unknown function] (defined at: ./index.rsh:354:27:function exp)', 'at ./index.rsh:346:22:application call to [unknown function] (defined at: ./index.rsh:346:22:function exp)'],
            msg: 'updateTimeReductionLevel',
            who: 'Buyer'
            });
          
          const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
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
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
  const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
  const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
  const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
  const v2193 = stdlib.sub(v2190, v2192);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1231), {
    at: './index.rsh:110:29:application',
    fs: ['at ./index.rsh:109:11:application call to [unknown function] (defined at: ./index.rsh:109:32:function exp)', 'at ./index.rsh:383:16:application call to "showOutcome" (defined at: ./index.rsh:108:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1232,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:386:13:decimal', stdlib.UInt_max, 0), []],
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
    tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc3, ctc8, ctc9, ctc9, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1],
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
      at: './index.rsh:389:39:dot',
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
    at: './index.rsh:135:38:application',
    fs: ['at ./index.rsh:133:16:application call to [unknown function] (defined at: ./index.rsh:133:20:function exp)'],
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
  const v1150 = stdlib.gt(v1148, stdlib.checkedBigNumberify('./index.rsh:136:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v1150, {
    at: './index.rsh:136:12:application',
    fs: ['at ./index.rsh:133:16:application call to [unknown function] (defined at: ./index.rsh:133:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1143, v1144, v1145, v1146, v1147, v1148, v1149],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:138:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1152, v1153, v1154, v1155, v1156, v1157, v1158], secs: v1160, time: v1159, didSend: v52, from: v1151 } = txn1;
      
      const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0)];
      const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 1)];
      const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 2)];
      const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
      const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0), v1165);
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
      const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
      const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
      const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
      const v1187 = [stdlib.UInt_max, v1185, v1186];
      const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1187);
      const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
      const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
      const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
      const v1194 = [v1191, stdlib.UInt_max, v1193];
      const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1194);
      const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
      const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
      const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
      const v1200 = [v1197, v1198, false];
      const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1200);
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
  const v1161 = v1131[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0)];
  const v1163 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 1)];
  const v1164 = v1161[stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 2)];
  const v1165 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1163, v1164];
  const v1166 = stdlib.Array_set(v1131, stdlib.checkedBigNumberify('./index.rsh:138:12:dot', stdlib.UInt_max, 0), v1165);
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
    at: './index.rsh:147:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Funder'
    });
  const v1183 = v1166[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1185 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1186 = v1183[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
  const v1187 = [stdlib.UInt_max, v1185, v1186];
  const v1188 = stdlib.Array_set(v1166, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1187);
  const v1190 = v1188[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1191 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
  const v1193 = v1190[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 2)];
  const v1194 = [v1191, stdlib.UInt_max, v1193];
  const v1195 = stdlib.Array_set(v1188, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1194);
  const v1196 = v1195[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1197 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 0)];
  const v1198 = v1196[stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1)];
  const v1200 = [v1197, v1198, false];
  const v1201 = stdlib.Array_set(v1195, stdlib.checkedBigNumberify('./index.rsh:147:32:application', stdlib.UInt_max, 1), v1200);
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:240:18:decimal', stdlib.UInt_max, 1), v1153]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1208, time: v1207, didSend: v165, from: v1206 } = txn2;
      
      ;
      const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
      const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
      const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:240:18:decimal', stdlib.UInt_max, 1));
      const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 1)];
      const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 2)];
      const v1216 = [v1211, v1214, v1215];
      const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0), v1216);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:240:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v1153
        });
      const v1218 = stdlib.addressEq(v1151, v1206);
      ;
      
      const v1224 = stdlib.add(v1160, v1154);
      const v1225 = v1224;
      const v1226 = true;
      const v1227 = stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 0);
      const v1228 = v1152;
      const v1230 = stdlib.checkedBigNumberify('./index.rsh:256:43:decimal', stdlib.UInt_max, 0);
      const v1231 = v1151;
      const v1232 = v1207;
      const v1238 = v1217;
      const v1239 = stdlib.checkedBigNumberify('./index.rsh:130:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v1226;})()) {
        const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
        const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
        const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
        const v1269 = stdlib.sub(v1266, v1268);
        sim_r.isHalt = false;
        }
      else {
        const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
        const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
        const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
        const v2193 = stdlib.sub(v2190, v2192);
        sim_r.txns.push({
          amt: v1239,
          kind: 'from',
          to: v1231,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:381:27:decimal', stdlib.UInt_max, 1),
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
  const v1209 = v1201[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
  const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0)];
  const v1211 = stdlib.add(v1210, stdlib.checkedBigNumberify('./index.rsh:240:18:decimal', stdlib.UInt_max, 1));
  const v1214 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 1)];
  const v1215 = v1209[stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 2)];
  const v1216 = [v1211, v1214, v1215];
  const v1217 = stdlib.Array_set(v1201, stdlib.checkedBigNumberify('./index.rsh:240:12:dot', stdlib.UInt_max, 0), v1216);
  ;
  const v1218 = stdlib.addressEq(v1151, v1206);
  stdlib.assert(v1218, {
    at: './index.rsh:240:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:244:24:application',
    fs: ['at ./index.rsh:243:9:application call to [unknown function] (defined at: ./index.rsh:243:30:function exp)'],
    msg: 'deployed',
    who: 'Funder'
    });
  
  const v1224 = stdlib.add(v1160, v1154);
  let v1225 = v1224;
  let v1226 = true;
  let v1227 = stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 0);
  let v1228 = v1152;
  let v1230 = stdlib.checkedBigNumberify('./index.rsh:256:43:decimal', stdlib.UInt_max, 0);
  let v1231 = v1151;
  let v1232 = v1207;
  let v1238 = v1217;
  let v1239 = stdlib.checkedBigNumberify('./index.rsh:130:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v1226;})()) {
    const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
    const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
    const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
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
        args: [v1151, v1153, v1154, v1155, v1156, v1157, v1158, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v1238, v1239, v1265, v1266, v1268, v1269],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1232,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:376:19:decimal', stdlib.UInt_max, 0), []],
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
              const v1265 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v1268 = v1265[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
              const v1269 = stdlib.sub(v1266, v1268);
              sim_r.isHalt = false;
              }
            else {
              const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
              const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
              const v2193 = stdlib.sub(v2190, v2192);
              sim_r.txns.push({
                amt: v1239,
                kind: 'from',
                to: v1231,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:381:27:decimal', stdlib.UInt_max, 1),
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
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc13, ctc1, ctc12, ctc1, ctc1, ctc1],
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
          const v1399 = stdlib.fromSome(v1398, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1400 = stdlib.lt(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1400, {
            at: './index.rsh:170:12:application',
            fs: ['at ./index.rsh:322:38:application call to "getDiscountPrice" (defined at: ./index.rsh:168:36:function exp)', 'at ./index.rsh:322:14:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:322:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1401 = stdlib.ge(v1399, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1401) {
            v1397 = stdlib.checkedBigNumberify('./index.rsh:173:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1404 = v1202[v1399];
            v1397 = v1404;
            }
          ;
          const v1460 = stdlib.add(v1268, v1397);
          const v1464 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1465 = [v1460, v1266, v1464];
          const v1466 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1465);
          ;
          const v1471 = stdlib.add(v1399, stdlib.checkedBigNumberify('./index.rsh:329:47:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v1388, v1471);
          const v1477 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1478 = stdlib.fromSome(v1477, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
          const v1612 = stdlib.fromSome(v1611, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v1613 = stdlib.ge(v1612, stdlib.checkedBigNumberify('./index.rsh:7:26:decimal', stdlib.UInt_max, 5));
          if (v1613) {
            v1610 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1616 = v1203[v1612];
            v1610 = v1616;
            }
          const v1617 = stdlib.lt(v1610, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1617, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:292:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:292:14:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:292:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1618 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1610);
          const v1619 = stdlib.mul(v1228, v1618);
          const v1620 = stdlib.div(v1619, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
          const v1655 = stdlib.add(v1239, v1620);
          ;
          const v1662 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1663 = [v1268, v1266, v1662];
          const v1664 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1663);
          ;
          const v1686 = stdlib.gt(v1157, stdlib.checkedBigNumberify('./index.rsh:294:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1686, {
            at: './index.rsh:294:20:application',
            fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1687 = v1664[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 1)];
          const v1688 = v1687[stdlib.checkedBigNumberify('./index.rsh:295:28:application', stdlib.UInt_max, 0)];
          const v1689 = stdlib.gt(v1688, v1158);
          stdlib.assert(v1689, {
            at: './index.rsh:295:20:application',
            fs: ['at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          let v1690;
          if (v1613) {
            v1690 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1696 = v1203[v1612];
            v1690 = v1696;
            }
          const v1697 = stdlib.lt(v1690, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1697, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:298:59:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1698 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1690);
          const v1699 = stdlib.mul(v1228, v1698);
          const v1700 = stdlib.div(v1699, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
          const v1701 = stdlib.div(v1700, v1157);
          const v1702 = stdlib.add(v1228, v1156);
          const v1707 = stdlib.sub(v1655, v1701);
          ;
          const v1713 = stdlib.sub(v1688, v1158);
          const v1716 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1)];
          const v1717 = v1687[stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 2)];
          const v1718 = [v1713, v1716, v1717];
          const v1719 = stdlib.Array_set(v1664, stdlib.checkedBigNumberify('./index.rsh:303:61:application', stdlib.UInt_max, 1), v1718);
          ;
          let v1720;
          const v1721 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v1722 = stdlib.fromSome(v1721, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1723 = stdlib.ge(v1722, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1723) {
            v1720 = stdlib.checkedBigNumberify('./index.rsh:223:16:decimal', stdlib.UInt_max, 0);
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
            v1740 = stdlib.checkedBigNumberify('./index.rsh:182:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1746 = v1203[v1612];
            v1740 = v1746;
            }
          const v1747 = stdlib.lt(v1740, stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1747, {
            at: './index.rsh:190:12:application',
            fs: ['at ./index.rsh:312:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:188:47:function exp)', 'at ./index.rsh:293:22:application call to [unknown function] (defined at: ./index.rsh:293:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1748 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:191:23:decimal', stdlib.UInt_max, 100), v1740);
          const v1749 = stdlib.mul(v1228, v1748);
          const v1750 = stdlib.div(v1749, stdlib.checkedBigNumberify('./index.rsh:191:32:decimal', stdlib.UInt_max, 100));
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
          const v1828 = stdlib.fromSome(v1827, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
          const v1829 = stdlib.lt(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1829, {
            at: './index.rsh:211:12:application',
            fs: ['at ./index.rsh:345:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:209:41:function exp)', 'at ./index.rsh:345:14:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:345:14:function exp)', 'at ./index.rsh:256:23:application call to [unknown function] (defined at: ./index.rsh:256:23:function exp)', 'at ./index.rsh:285:18:application call to [unknown function] (defined at: ./index.rsh:285:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1830 = stdlib.ge(v1828, stdlib.checkedBigNumberify('./index.rsh:8:31:decimal', stdlib.UInt_max, 5));
          if (v1830) {
            v1826 = stdlib.checkedBigNumberify('./index.rsh:214:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1833 = v1202[v1828];
            v1826 = v1833;
            }
          ;
          const v1856 = stdlib.add(v1268, v1826);
          const v1860 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v1861 = [v1856, v1266, v1860];
          const v1862 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v1861);
          ;
          const v1957 = stdlib.add(v1828, stdlib.checkedBigNumberify('./index.rsh:352:57:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v1388, v1957);
          const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
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
          const v2058 = v1265[stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 2)];
          const v2059 = [v1268, v1266, v2058];
          const v2060 = stdlib.Array_set(v1238, stdlib.checkedBigNumberify('./index.rsh:256:23:dot', stdlib.UInt_max, 1), v2059);
          ;
          const v2172 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1388), null);
          const v2173 = stdlib.fromSome(v2172, stdlib.checkedBigNumberify('./index.rsh:166:64:decimal', stdlib.UInt_max, 0));
          const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1388), null);
          const v2175 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:207:74:decimal', stdlib.UInt_max, 0));
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
  const v2189 = v1238[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
  const v2190 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:48:application', stdlib.UInt_max, 1)];
  const v2192 = v2189[stdlib.checkedBigNumberify('./index.rsh:263:60:application', stdlib.UInt_max, 0)];
  const v2193 = stdlib.sub(v2190, v2192);
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v1231), {
    at: './index.rsh:110:29:application',
    fs: ['at ./index.rsh:109:11:application call to [unknown function] (defined at: ./index.rsh:109:32:function exp)', 'at ./index.rsh:383:16:application call to "showOutcome" (defined at: ./index.rsh:108:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1232,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:386:13:decimal', stdlib.UInt_max, 0), []],
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
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2226, time: v2225, didSend: v971, from: v2224 } = txn3;
  ;
  let v2227 = v2225;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v1151, v1153, v1154, v1155, v1156, v1173, v1202, v1203, v1205, v1225, v1227, v1228, v1230, v1231, v2193],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2227,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:389:39:decimal', stdlib.UInt_max, 0), []],
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
      tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc3, ctc9, ctc10, ctc10, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2239, time: v2238, didSend: v980, from: v2237 } = txn4;
    ;
    const v2240 = stdlib.addressEq(v1151, v2237);
    stdlib.assert(v2240, {
      at: './index.rsh:389:39:dot',
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
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()(uint64,uint64,address)`, `Api_buyTicket()(uint64,uint64,address)`, `Api_buyTimeReduction()(uint64,uint64,address)`, `Api_getParticipantStats()(uint64,uint64,address)`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64,uint64[5],uint64[6],uint64[5],uint64[6])`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BiAmAAEIBzgDIGQFBigwBECQAuAB6AGAAkhQoI0GEpO5vtQE1PPd8QuDo/jPDYWf7bsJi7iLgQKgpJi0BPAB+AGgAiLCAhEC+QHQAdgBJgUBAAEBAQIACP//////////IjUAMRhBDnUrZEkiWzUBJFs1AjEZIxJBAAoxACghFa9mQg5KNhoAF0lBAoYiNQQjNQZJIRYMQAEFSSEXDEAAgEkhGAxAAGkhGBJENAFJIQkMQAA+SSUMQAAdJRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDe1IKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDdIhBRJEKGQpZFAqZFA1AzYaARc0AyEEWwkWNQdCDbQhFxJEKzX/gAEDNP9QQgKlSSEZDEAADiEZEkQrNf8qNP9QQgKQIRYSRDQBSSEJDEAAPkklDEAAHSUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg1fSChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg1EIQUSRChkKWRQKmRQNQM2GgEXNAMhBFsIFjUHQg0mSSEaDEABXEkhGwxAAUchGxJENAFJIQkMQADTSSUMQABpJRJEKGQpZFAqZFBJNQNXWCg1/zQDVygINANXMAhQNANXIAhQNAOB6wIkWFA0A1dQCFA0A1fwCFA0A1f4CFA0AyERIQZYUDQDV+gIUDQDV+AIUDT/UDQDV4AwUDT/UDQDV7AwUDUHQgycSChkKWRQKmRQSTUDV0goNf80A1coCDQDVzAIUDQDVyAIUDQDIQ4kWFA0A1dACFA0A1fgCFA0A1foCFA0A1fwIFA0A1fYCFA0A1fQCFA0/1A0A1dwMFA0/1A0A1egMFA1B0IMOCEFEkQoZClkUCpkUEk1A1dIKDX/NANXKAg0A1cwCFA0A1cgCFA0AyEOJFhQNANXQAhQNANX4AhQNANX6AhQNANX8CBQNANX2AhQNANX0AhQNP9QNANXcDBQNP9QNANXoDBQNQdCC9EhGhJEKzX/KTT/UEIAxIGthJtjEkQrNf8oNP9QQgCzNhoCFzUENhoDNhoBF0khDAxABdBJIQkMQAVFSSUMQACRJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDIQ9bNf+ABOIbs6mwMgc0/w9ENANXACA0AyEGWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhEls0AyETWzQDV1goNANXgDA0A1ewMDT/IjQDIRBbNAMhHFs0AyEdWzQDIREhBlgyBjQDIR4hH1g0AyEgW0IJGUglNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNJSkpKSkpKSkpKSVcAIDX/IQZbNf4hCls1/SELWzX8IQRbNfshDVs1+iESWzX5IRNbNfhXWCg191eAMDX2V7AwNfUhD1s19CEQWzXzIRxbNfIhHVs18SERIQZYNfAhHiEfWDXvISBbNe6BygIhIVg17YHbAls17IHjAls160k1BTXqgASQT2RJNOpQsDIHNPQMRDTqIlVJISIMQAGGSSEFDEAApSEFEkSACAAAAAAAAAiAIjEAiApTVwAJSTXpI1s06SJVTRYiMQCICj9XCQlJNekjWzTpIlVNFlAxAFBQsCIxAIgKJVcACUk16SNbNOkiVU0WIjEAiAoRVwkJSTXpI1s06SJVTRZQMQBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQjNPM08jTxNPAyBjTvVwARNOsWNOwWUDTtVxABUFA07kIHtEgiMQCICbtXCQlJNecjWzTnIlVNSTXoIQgMRDToIQgPQQAHISM16UIACzT3JDToCyRYFzXpNOk0+IgJrTToIwg15zEAKDEAiAl4KTTnFlA15lcACTTmUGaACAAAAAAAAAetIjEAiAlaVwAJSTXmI1s05iJVTRY05xZQMQBQULAiMQCICT1XAAlJNeYjWzTmIlVNFjTnFlAxAFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09CM08zTyNPE08DIGNO9XABE06zTpCBY07BZQNO1XEAFQUDTuQgbaSSMMQAGOSCIxAIgI21cACUk15yNbNOciVU1JNeghCA9JNedBAAYiNelCAAs09iQ06AskWBc16TTpIQcMRDTyIQc06QkLIQcKNeY05ogIqDTvVwARNOsWNOwWUDTtVxABUFA15TT6Iw1ENOVXERFJNeQiW0k14zT5DUQ050EABiI14kIACzT2JDToCyRYFzXiNOIhBwxENPIhBzTiCQshBwo0+go14bEisgE04bIII7IQNP+yB7OxIrIBNPmyEiEMshAxALIUNPiyEbMiMQCICBdXCQlJNd4jWzTeIlVNSTXfIQgPQQAGIjXgQgALNPUkNN8LJFgXNeCACAAAAAAAAAbENOgWNN8WUDEAUFCwNOgWNN8WUDEAUDUHNOdBAAYiNd5CAAs09iQ06AskWBc13jTeIQcMRDT/NP40/TT8NPs0+jT5NPg09zT2NPU09DT8NOAJCCM08zThCDTyNPsINPE08iEHNN4JCyEHCggxADIGNOVXABE04zT5CRY05FcICFA05FcQAVBQNO405gg04QlCBUZIIjEAiAdNVwAJSTXnI1s05yJVTUk16CEIDEQ06CEID0EAByEjNelCAAs09yQ06AskWBc16TTpNPiIBz806CMINecxACgxAIgHCik05xZQNeZXCQk05kxQZoAIAAAAAAAABcc05xYiMQCIBuhXCQlJNeYjWzTmIlVNFlAxAFBQsDTnFiIxAIgGy1cJCUk15iNbNOYiVU0WUDEAUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IzTzNPI08TTwMgY071cAETTrNOkIFjTsFlA07VcQAVBQNO5CBGtJIQgMQAB8SCEJNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQNXACA1/4AEzJmSXLA0/zEAEkQ0/zQDIQZbNAMhCls0AyELWzQDIQRbNAMhDVs0A1dIKDQDV3AwNANXoDA0AyEkWzQDISVbNAMhD1s0AyEQWzQDV/AgNAMhDlsyBkIFKkhJISIMQAB7SSEFDEAAc0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABKdlxLSwNANXACA0AyEGWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNANXSCg0A1dwMDQDV6AwNAMhJFs0AyElWzQDIQ9bNAMhEFs0A1fwIDQDIQ5bMgZCBKhISSMMQACrSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKVwAgNf8hCls1/iELWzX9V2giNfyABJqLkXSwNPxXABE1+yM0/ogFTjT/MQASRDT/NP40/TQDIQRbNAMhDVs0AyESWzQDIRNbNAOBYFs0A1eKKDQDV7IwNANX4jA0A4FYWzT9CCMiNAMhBlsiNP8yBjT7IlsjCBY0+1cICFA0+1cQAVA0/FcREVAiQgK0SCI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yRbNf6BEFs1/YEYWzX8IQZbNfshCls1+iELWzX5gAT+JjieNP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWULAhFIgEcCEhr0k1+ElQSTX3VwARNfYkrzT2VwgIUDT2VxABUDT3VxERUDX1IRSIBEWxIrIBIrISIQyyEDIKshQ0/rIRsyEUiAQssSKyASEFshCB////////////AbIiIQmyI4AITUVUQUZPTU+yJYAgTWV0YWZvbW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJoBgaHR0cHM6Ly9tZXRhbGFicy50ZWNobm9sb2d5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsicyA7IoMgqyKbO0PDX0gAgAAAAAAAAElDT0FlCwNPRJNfM0/hYiWxNENPVXERE18jT1VwARJwQ08lcICFA08lcQAVBQSTXxVxERNfA08VcAETTwVwAIJwRQNPBXEAFQUEk171cRETXuNO9XABE07lcACDTuVwgIUChQUDXtgCgAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgNeyAMAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAACgAAAAAAAAAPAAAAAAAAABQAAAAAAAAAGTXrgDAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAIAAAAAAAAAAwAAAAAAAAAEAAAAAAAAAAU16jEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDIHFlA08xZQNO1QNOxQNOtQNOpQKEsBVwB/ZylLAVd/f2cqSwFX/hRnSCM1ATIGNQJCAdQ1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TXsNPhBAIk0/lcREUk16yRbNeo06yJbNek06jTpCTXoNOw07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPRQNPVQNPZQNPcWUDT5FlA0+hZQNPsWUDT8UDT+UDT/FlA061A06hZQNOkWUDToFlAoSwFXAH9nKUsBV39/ZypLAVf+dWdIJTUBMgY1AkIBHjT+VxERSTXrJFs06yJbCTXqsSKyATT/sggjshA0/LIHs7EisgEjshIhDLIQNPyyFDTtshGzNOw07RZQNO4WUDTvFlA08BZQNPMWUDT0UDT1UDT2UDT3FlA0+RZQNPoWUDT7FlA0/FA06hZQKEsBVwB/ZylLAVd/f2cqSwFX/hpnSCEFNQEyBjUCQgCSNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxSTXwNPEWUDTyFlA08xZQNPQWUDT1FlA09lA091A0+FA0+RZQNPoWUDT7FlA0/BZQNP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4aZ0ghCTUBMgY1AkIAHDEZIQgSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LSTEYYUAABUghFa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhDBJEOBFPAhJEOBISRIk=`,
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
  Bytecode: `0x608060405260405162005eb238038062005eb28339810160408190526200002691620009e9565b60008055436003556200003862000652565b7f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf282604051620000c791906000610100820190508251825260208301518051602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260c081015160e08401525092915050565b60405180910390a18051600090819052815160209081018290528251604090810183905283518285018051919091528451815184015281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001349290620005a5565b6060820152620001473415600a62000628565b608081018051674d657461666f6d6f60c01b905260a0820151674d455441464f4d4f60c01b905260c0820180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f6779000000000090528051600060209182018190529151604090810183905260e0850151929092529151518151928301520160408051601f198184030181529082905260a0830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260c0850151805160208083015192850151908601919091529284015260608301919091529060800160408051601f1981840301815282825260e0860151516020840152910160405160208183030381529060405260001960126040516200026190620007a9565b620002729695949392919062000b0b565b604051809103906000f0801580156200028f573d6000803e3d6000fd5b506001600160a01b0316610100820181905261012082018190526040519081527f86dd63d8ba7946b7ba28a290cfb218324dd1ed82838f3d1a7b34fa96a5b9eacd9060200160405180910390a16020828101510151610140820180516001600160a01b03928316905251516101208301516200032392908116911614620003185760016200031b565b60005b600b62000628565b6101608101805160001990526060820180516020908101518101518351820152815101516040908101518351901515910152519051620003679190600190620005a5565b6101808201818152602091820151516101a084018051919091528051600019908401528151909201516040908101518351901515910152519051620003b09190600190620005a5565b6101c08201818152602091820151516101e08401805191909152815183015183015181519093019290925281516000604090910152519051620003f79190600190620005a5565b61020082015261022081018051600a908190528151601460209182018190528351602860409182015284516050606091820152945160a06080918201819052610240880180516000908190528151600590880181905282518601989098528151600f908a0152815184019590955251601990820152610260880180519490945283516001950194909452825160029201919091528151600395019490945280516004940193909352915190910152620004af620007b7565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a0808701919091528351015160c08087019190915292519092015160e08501524261010085015261012080860151909116908401526102008401516101408401526102208401516101608401526102408401516101808401526102608401516101a08401526001600081905543905551620005759183910162000c06565b604051602081830303815290604052600290805190602001906200059b9291906200082e565b5050505062000d59565b620005af620008bd565b60005b60028110156200060557848160028110620005d157620005d162000aa5565b6020020151828260028110620005eb57620005eb62000aa5565b602002015280620005fc8162000cf2565b915050620005b2565b50818184600281106200061c576200061c62000aa5565b60200201529392505050565b816200064e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60405180610280016040528062000668620008ed565b815260200162000677620008bd565b815260200162000686620008ed565b815260200162000695620008bd565b8152602001620006b060408051602081019091526000815290565b815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291019081526020016200070060408051602081019091526000815290565b815260006020820181905260408201526060016200071d62000910565b81526020016200072c620008ed565b81526020016200073b620008bd565b81526020016200074a620008ed565b815260200162000759620008bd565b815260200162000768620008ed565b815260200162000777620008bd565b8152602001620007866200092e565b8152602001620007956200094c565b8152602001620007a46200094c565b905290565b6110298062004e8983390190565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200162000777620008bd565b8280546200083c9062000d1c565b90600052602060002090601f016020900481019282620008605760008555620008ab565b82601f106200087b57805160ff1916838001178555620008ab565b82800160010185558215620008ab579182015b82811115620008ab5782518255916020019190600101906200088e565b50620008b99291506200096a565b5090565b60405180604001604052806002905b620008d6620008ed565b815260200190600190039081620008cc5790505090565b604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115620008b957600081556001016200096b565b604080519081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620009b257634e487b7160e01b600052604160045260246000fd5b6000818303610100811215620009fe57600080fd5b62000a0862000981565b8351815260e0601f198301121562000a1f57600080fd5b62000a29620009b8565b6020850151815260408501519092506001600160a01b038116811462000a4e57600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6001600160a01b03169052565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000ae35760208185018101518683018201520162000ac5565b8181111562000af6576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b2060c083018962000abb565b828103602084015262000b34818962000abb565b9050828103604084015262000b4a818862000abb565b9050828103606084015262000b60818762000abb565b6080840195909552505060a00152949350505050565b8060005b600281101562000bb657815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000b7a565b50505050565b8060005b600581101562000bb657815184526020938401939091019060010162000bc0565b8060005b600681101562000bb657815184526020938401939091019060010162000be5565b60006104208201905062000c1c82845162000a98565b60208301516020830152604083015162000c3a604084018262000a98565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000c8e8285018262000a98565b50506101408084015162000ca58285018262000b76565b505061016083015162000cbd61020084018262000bbc565b5061018083015162000cd46102a084018262000be1565b506101a083015162000ceb61036084018262000be1565b5092915050565b600060001982141562000d1557634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000d3157607f821691505b6020821081141562000d5357634e487b7160e01b600052602260045260246000fd5b50919050565b6141208062000d696000396000f3fe6080604052600436106100cf5760003560e01c80631e93b0f1146100d85780632b10758a146100fc5780632c10a1591461011157806330a94db4146101245780633bc5b7bf146101445780636579ece6146101715780636cd6de3a146101845780636cdcb9df1461018c57806373b4522c146101945780637a3678dd146101a757806383230757146101c95780638e314769146101de578063a5560596146101f1578063ab53f2c614610211578063bf2c5b2414610234578063cadc2e7a14610247578063e73216b51461026757005b366100d657005b005b3480156100e457600080fd5b506003545b6040519081526020015b60405180910390f35b61010461026f565b6040516100f3919061338a565b6100d661011f3660046133b4565b6102bf565b34801561013057600080fd5b506100e961013f3660046133cc565b6102e3565b34801561015057600080fd5b5061016461015f3660046133fd565b61053a565b6040516100f39190613430565b6100d661017f366004613467565b610551565b610104610571565b6101046105c4565b6100d66101a23660046133b4565b61061a565b3480156101b357600080fd5b506101bc61063a565b6040516100f391906134bf565b3480156101d557600080fd5b506001546100e9565b6100d66101ec3660046133b4565b610a3e565b3480156101fd57600080fd5b506100e961020c3660046133cc565b610a5e565b34801561021d57600080fd5b50610226610ca9565b6040516100f39291906135c9565b6100d66102423660046133b4565b610d46565b34801561025357600080fd5b506101646102623660046133fd565b610d66565b610104610d77565b610277612d13565b61027f612d3d565b610287612d7c565b61028f612d96565b6000602082810182905290825260408051808301909152828152908301526102b78284610dca565b505051919050565b6102c7612d3d565b6102df6102d9368490038401846136fc565b82611ce8565b5050565b6000600160005414156103a0576000600280546102ff90613751565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90613751565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b50505050508060200190518101906103909190613917565b905061039e60006009611fc0565b505b60036000541415610464576000600280546103ba90613751565b80601f01602080910402602001604051908101604052809291908181526020018280546103e690613751565b80156104335780601f1061040857610100808354040283529160200191610433565b820191906000526020600020905b81548152906001019060200180831161041657829003601f168201915b505050505080602001905181019061044b91906139fe565b905080608001518361045d9190613b09565b9392505050565b6006600054141561047e576000600280546103ba90613751565b600760005414156105295760006002805461049890613751565b80601f01602080910402602001604051908101604052809291908181526020018280546104c490613751565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b505050505080602001905181019061044b9190613b20565b61053560006009611fc0565b919050565b610542612dc6565b61054b82611fe6565b92915050565b610559612d3d565b6102df61056b36849003840184613c76565b82610dca565b610579612d13565b610581612d3d565b610589612d7c565b610591612d96565b6000606082015260028152604080516020808201909252828152908301526105b98284610dca565b505060400151919050565b6105cc612d13565b6105d4612d3d565b6105dc612d7c565b6105e4612d96565b60006040820152600181819052506040805160208082019092528281529083015261060f8284610dca565b505060200151919050565b610622612d3d565b6102df610634368490038401846136fc565b826120a3565b610642612de8565b600160005414156106fd5760006002805461065c90613751565b80601f016020809104026020016040519081016040528092919081815260200182805461068890613751565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed9190613917565b90506106fb60006007611fc0565b505b600360005414156108875760006002805461071790613751565b80601f016020809104026020016040519081016040528092919081815260200182805461074390613751565b80156107905780601f1061076557610100808354040283529160200191610790565b820191906000526020600020905b81548152906001019060200180831161077357829003601f168201915b50505050508060200190518101906107a891906139fe565b90506107b2612e84565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526101c084015183519091015260a08084015183519083166080909101526101608085015184519092019190915261018080850151845160c0908101919091526101a0808701518651951660e09586015261014080880151875161010090810191909152610120808a0151895190910152928801805188519092019190915294870151865190940193909352925184519091015292015181519092019190915251919050565b600660005414156108a15760006002805461071790613751565b60076000541415610a2f576000600280546108bb90613751565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790613751565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b505050505080602001905181019061094c9190613b20565b9050610956612e84565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526102a084015183519091015260e08084015183519083166080909101526101a080850151845160a001526101c0850151845160c001526101e08501518451931692909101919091526101808084015183516101009081019190915261016080860151855161012090810191909152918601805186516101409081019190915292870151865190920191909152518451909201919091529092015181519092019190915251919050565b610a3b60006007611fc0565b90565b610a46612d3d565b6102df610a58368490038401846136fc565b82612296565b600060016000541415610b1b57600060028054610a7a90613751565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa690613751565b8015610af35780601f10610ac857610100808354040283529160200191610af3565b820191906000526020600020905b815481529060010190602001808311610ad657829003601f168201915b5050505050806020019051810190610b0b9190613917565b9050610b1960006008611fc0565b505b60036000541415610bd857600060028054610b3590613751565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6190613751565b8015610bae5780601f10610b8357610100808354040283529160200191610bae565b820191906000526020600020905b815481529060010190602001808311610b9157829003601f168201915b5050505050806020019051810190610bc691906139fe565b905080608001518361045d9190613d2a565b60066000541415610bf257600060028054610b3590613751565b60076000541415610c9d57600060028054610c0c90613751565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3890613751565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050505050806020019051810190610bc69190613b20565b61053560006008611fc0565b600060606000546002808054610cbe90613751565b80601f0160208091040260200160405190810160405280929190818152602001828054610cea90613751565b8015610d375780601f10610d0c57610100808354040283529160200191610d37565b820191906000526020600020905b815481529060010190602001808311610d1a57829003601f168201915b50505050509050915091509091565b610d4e612d3d565b6102df610d60368490038401846136fc565b826123c1565b610d6e612dc6565b61054b826125fe565b610d7f612d13565b610d87612d3d565b610d8f612d7c565b610d97612d96565b600060808201526003815260408051602080820190925282815290830152610dbf8284610dca565b505060600151919050565b610dda6007600054146027611fc0565b8151610df5901580610dee57508251600154145b6028611fc0565b600080805560028054610e0790613751565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3390613751565b8015610e805780601f10610e5557610100808354040283529160200191610e80565b820191906000526020600020905b815481529060010190602001808311610e6357829003601f168201915b5050505050806020019051810190610e989190613b20565b9050610ea2612e97565b610eb482610160015142106029611fc0565b7fa08a834d402d7149d9de676de7d98dd730ead5deb833d6b899d038b39ca0a8e184604051610ee39190613d42565b60405180910390a16000602085015151516003811115610f0557610f0561341a565b14156111e9576001610f1633611fe6565b516001811115610f2857610f2861341a565b14610f34576000610f42565b610f3d33611fe6565b604001515b60208201819052610f57906005116018611fc0565b6005816020015110610f6c5760f98152610f8f565b816101000151816020015160058110610f8757610f87613da2565b602002015181525b610f9b34156019611fc0565b8051610280830151610fad9190613d2a565b6040808301805192909252610260840151825160200152610240840151810151915191151591015260e08201518151610ff391610fec91339190612676565b601a611fc0565b600181602001516110049190613d2a565b60608201908152336000818152600460205260409020805460ff191660019081178255925190830181905560808401515261103e906125fe565b5160018111156110505761105061341a565b1461105c57600061106a565b611065336125fe565b604001515b60808201805160200191909152805133604091820152905190517f7d4b0de4bc3fc5ca26bcc81eeefb485df89b79cca9efa4fb19f219ed66d71dfa916110af9161338a565b60405180910390a1608081015183526110c6612f7e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b015181518701526101a08b01518151909501949094526101c08a01518451909301929092526101e0890151835196169501949094525143930192909252610200850151918401516111c092919061268c565b60208201805160e00191909152610220840151905161010001526111e381612700565b50611ce2565b60016020850151515160038111156112035761120361341a565b141561179957600161121433611fe6565b5160018111156112265761122661341a565b14611232576000611240565b61123b33611fe6565b604001515b60c08201819052600511801560e083015261126157600060a0820152611287565b8161012001518160c001516006811061127c5761127c613da2565b602002015160a08201525b61129960648260a0015110601b611fc0565b60648160a0015160646112ac9190613b09565b836101a001516112bc9190613db8565b6112c69190613dd7565b61010082018190526112db903414601c611fc0565b610280820151610120820180519190915261026083015181516020015261024083015160409081015182519015159101526102008301519051611321919060019061268c565b81610140018190525061134461133d338460e001516000612676565b601d611fc0565b61135660018360a0015111601e611fc0565b60c082015161014082015160200151516113729110601f611fc0565b8060e00151156113895760006101608201526113b0565b8161012001518160c00151600681106113a4576113a4613da2565b60200201516101608201525b6113c36064826101600151106020611fc0565b8160a00151606482610160015160646113dc9190613b09565b846101a001516113ec9190613db8565b6113f69190613dd7565b6114009190613dd7565b610180820181905282516040516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561143f573d6000803e3d6000fd5b5060c0820151610140820151602001515161145a9190613b09565b6101a0820180519190915261014082018051602090810151810151835182015290510151604090810151915191151591015260e082015160c08301516114a291903390612a08565b60016114ad336125fe565b5160018111156114bf576114bf61341a565b146114cb5760006114d9565b6114d4336125fe565b604001515b6101e082018190526005116114f55760006101c082015261151d565b816101400151816101e001516006811061151157611511613da2565b60200201516101c08201525b60c081015161020082018051919091526101e0820151815160200152805133604091820152905190517f8d6aa48eeca97ddf96ab5d7eb5f0977e02477b44e0f9e93a12b4f5a2363ce1f0916115719161338a565b60405180910390a1610200810151602084015260e08101511561159b5760006102208201526115c2565b8161012001518160c00151600681106115b6576115b6613da2565b60200201516102208201525b6115d56064826102200151106021611fc0565b6115dd612f7e565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e080860151845193169201919091526101008085015183519091015261012080850151835190910152610140808501518351909101526101c083015190516116859190613b09565b8361016001516116959190613d2a565b60208083018051929092529051600191015261018080830151908401516116bc9190613d2a565b60208201516040015260808301516101a08401516116da9190613d2a565b6020820151606001526102208201516064906116f69082613b09565b846101a001516117069190613db8565b6117109190613dd7565b836101c001516117209190613d2a565b6020820180516080019190915280513360a090910152514360c0909101526101408201516101a0830151611757919060019061268c565b602082015160e0015261018082015161010083015161022085015161177c9190613d2a565b6117869190613b09565b602082015161010001526111e381612700565b60026020850151515160038111156117b3576117b361341a565b1415611a935760016117c4336125fe565b5160018111156117d6576117d661341a565b146117e25760006117f0565b6117eb336125fe565b604001515b6102608201819052611806906005116022611fc0565b6005816102600151106118205760f9610240820152611848565b8161010001518161026001516005811061183c5761183c613da2565b60200201516102408201525b61185434156023611fc0565b80610240015182610280015161186a9190613d2a565b610280820180519190915261026083015181516020015261024080840151604090810151925192151592019190915260e0830151908201516118b9916118b291339190612676565b6024611fc0565b60018161026001516118cb9190613d2a565b6102a08201908152336000818152600560205260409020805460ff1916600190811782559251908301556118fe90611fe6565b5160018111156119105761191061341a565b1461191c57600061192a565b61192533611fe6565b604001515b6102c082018051919091526102a0820151815160200152805133604091820152905190517feebb223aa3b773f78473357473a7d3809502444e5f895b03d51fd5b3d070aac8916119799161338a565b60405180910390a16102c08101516040840152611994612f7e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102808401516111c0929061268c565b6003602085015151516003811115611aad57611aad61341a565b1415611ce257611abf34156025611fc0565b6102808201516102e08201805191909152610260830151815160200152610240830151604090810151915191151591015260e0820151611b0d90611b069033906000612676565b6026611fc0565b6001611b1833611fe6565b516001811115611b2a57611b2a61341a565b14611b36576000611b44565b611b3f33611fe6565b604001515b610300820151526001611b56336125fe565b516001811115611b6857611b6861341a565b14611b74576000611b82565b611b7d336125fe565b604001515b6103008201805160200191909152805133604091820152905190517fc034739074cb637e09021bfd2b194a0feb39c23a1fe656680f652c857d45452491611bc89161338a565b60405180910390a16103008101516060840152611be3612f7e565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916910152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197018790526101808b01518151909601959095526101a08a01518551909401939093526101c08901518451909201919091526101e08801518351951694019390935251439201919091526102008401516102e08401516111c0929061268c565b50505050565b611cf8600160005414600f611fc0565b8151611d13901580611d0c57508251600154145b6010611fc0565b600080805560028054611d2590613751565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5190613751565b8015611d9e5780601f10611d7357610100808354040283529160200191611d9e565b820191906000526020600020905b815481529060010190602001808311611d8157829003601f168201915b5050505050806020019051810190611db69190613917565b9050611dc0612f9e565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d184604051611def9190613df9565b60405180910390a1611e033415600c611fc0565b6101408201515151611e1790600190613d2a565b81515261014082018051516020908101518351909101525151604090810151825190151590820152820151611e5a90611e539033906001612676565b600d611fc0565b8151611e72906001600160a01b03163314600e611fc0565b611e7a612f7e565b825181516001600160a01b03918216905260408085015183519083166020909101526060808601805185519093019290925260808087015185519092019190915260a08087015185519092019190915260c08087015185519092019190915260e080870151855190920191909152610120808701518551941693909101929092526101608501518351610100908101919091526101808601518451909301929092526101a0850151835161014001525190840151611f389190613d2a565b60208083018051929092528151600190820152815160006040909101819052908501518251606001528151608001819052845182516001600160a01b0390911660a09091015290514360c0909101526101408401518351611f99929061268c565b60208201805160e0019190915251600061010090910152611fb981612700565b5050505050565b816102df5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b611fee612dc6565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561201d5761201d61341a565b1415612094576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561205e5761205e61341a565b600181111561206f5761206f61341a565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6120b36003600054146012611fc0565b81516120ce9015806120c757508251600154145b6013611fc0565b6000808055600280546120e090613751565b80601f016020809104026020016040519081016040528092919081815260200182805461210c90613751565b80156121595780601f1061212e57610100808354040283529160200191612159565b820191906000526020600020905b81548152906001019060200180831161213c57829003601f168201915b505050505080602001905181019061217191906139fe565b90507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09836040516121a29190613df9565b60405180910390a16121b634156011611fc0565b6121be612fb1565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a080850151845190841691015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451909101526101408085015184519091015261016080850151845190910152610180808501518451909101526101a080850151845193169201919091526101c080840151835190910152810151439052611ce281612a21565b6122a66006600054146016611fc0565b81516122c19015806122ba57508251600154145b6017611fc0565b6000808055600280546122d390613751565b80601f01602080910402602001604051908101604052809291908181526020018280546122ff90613751565b801561234c5780601f106123215761010080835404028352916020019161234c565b820191906000526020600020905b81548152906001019060200180831161232f57829003601f168201915b505050505080602001905181019061236491906139fe565b90507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8836040516123959190613df9565b60405180910390a16123a934156014611fc0565b80516121b6906001600160a01b031633146015611fc0565b6123d1600760005414602b611fc0565b81516123ec9015806123e557508251600154145b602c611fc0565b6000808055600280546123fe90613751565b80601f016020809104026020016040519081016040528092919081815260200182805461242a90613751565b80156124775780601f1061244c57610100808354040283529160200191612477565b820191906000526020600020905b81548152906001019060200180831161245a57829003601f168201915b505050505080602001905181019061248f9190613b20565b90506124a4816101600151421015602d611fc0565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0836040516124d39190613df9565b60405180910390a16124e73415602a611fc0565b6124ef612f7e565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b01518a51820152610120808c01518b5190910152610140808c01518b51909101526101608b0151888b01805191909152805160009901989098526101808b01518851909701969096526101a08a01518751909501949094526101c08901518651909301929092526101e088015185519616950194909452825143940193909352610200850151825190930192909252610220840151905190910152611ce281612700565b612606612dc6565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156126355761263561341a565b1415612094576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561205e5761205e61341a565b600061268483853085612b2d565b949350505050565b612694612fdf565b60005b60028110156126e0578481600281106126b2576126b2613da2565b60200201518282600281106126c9576126c9613da2565b6020020152806126d881613e12565b915050612697565b50818184600281106126f4576126f4613da2565b60200201529392505050565b60408051808201909152600080825260208201528160200151602001511561289b5760208281015160e00151810151805191015161273e9190613b09565b815261274861300c565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e090810151871681890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015280518701516101808b01528051909501516101a08a01528451909301516101c08901528351909101519095166101e08701528151850151610200870152815101516102208601528051840151830151610240860152805184015183015183015161026086015251909201518101515161028084015283516102a0840152600760005543600155905161287791839101613e76565b60405160208183030381529060405260029080519060200190611ce29291906130f5565b60208281015160e0015181015180519101516128b79190613b09565b60208083019190915282015160a0810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612905573d6000803e3d6000fd5b50612922826000015160200151836020015160a001516001612a08565b61292a613179565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152875160e090810151861660a08089019190915289516101009081015160c08a01528a5161012090810151938a01939093528a5161014090810151918a0191909152868b01805151938a01939093528251860151908901528151909301516101608801528051909101516101808701525101519092166101a0840152838101516101c0840152600360005543600155905161287791839101613fc7565b612a13838383612c07565b612a1c57600080fd5b505050565b612a29613179565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a090810151841690850152845160c09081015190850152845160e09081015190850152845161010090810151908501528451610120908101519085015284516101409081015190850152845161016090810151908501528451610180908101519085015284516101a0908101519093169284019290925283516101c090810151908401526006600055436001559051612b0991839101613fc7565b60405160208183030381529060405260029080519060200190612a1c9291906130f5565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612b94916140b1565b60006040518083038185875af1925050503d8060008114612bd1576040519150601f19603f3d011682016040523d82523d6000602084013e612bd6565b606091505b5091509150612be782826001612cd8565b5080806020019051810190612bfc91906140cd565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612c66916140b1565b60006040518083038185875af1925050503d8060008114612ca3576040519150601f19603f3d011682016040523d82523d6000602084013e612ca8565b606091505b5091509150612cb982826002612cd8565b5080806020019051810190612cce91906140cd565b9695505050505050565b60608315612ce757508161045d565b825115612cf75782518084602001fd5b60405163100960cb60e01b815260048101839052602401611fdd565b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b6040518060800160405280612d50612d13565b8152602001612d5d612d13565b8152602001612d6a612d13565b8152602001612d77612d13565b905290565b604051806040016040528060008152602001612d77613225565b6040805160a081019091528060008152600060208201819052604082018190526060820181905260809091015290565b6040805160608101909152806000815260006020820181905260409091015290565b604051806101c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001612e5d613238565b8152602001612e6a613256565b8152602001612e77613238565b8152602001612d77613256565b6040518060200160405280612d77612de8565b6040518061032001604052806000815260200160008152602001612eb9613274565b815260200160008152602001612ecd612d13565b8152602001600081526020016000815260200160001515815260200160008152602001612ef8613274565b8152602001612f05612fdf565b81526020016000815260200160008152602001612f20613274565b81526020016000815260200160008152602001612f3b612d13565b8152602001600081526020016000815260200160008152602001612f5d613274565b815260200160008152602001612f71612d13565b8152602001612d6a613274565b6040518060400160405280612f91613297565b8152602001612d7761330b565b6040518060200160405280612d77613274565b6040518060400160405280612fc4613179565b8152602001612d776040518060200160405280600081525090565b60405180604001604052806002905b612ff6613274565b815260200190600190039081612fee5790505090565b604051806102c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001613073613238565b8152602001613080613256565b815260200161308d613256565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016130c6612fdf565b8152602001600081526020016130da613274565b81526020016000815260200160008152602001600081525090565b82805461310190613751565b90600052602060002090601f0160209004810192826131235760008555613169565b82601f1061313c57805160ff1916838001178555613169565b82800160010185558215613169579182015b8281111561316957825182559160200191906001019061314e565b50613175929150613368565b5090565b604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016131d2613238565b81526020016131df613256565b81526020016131ec613256565b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060200160405280612d77612d96565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b604051806060016040528060008152602001600081526020016000151581525090565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016132fe613238565b8152602001612e77613256565b6040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200161335b612fdf565b8152602001600081525090565b5b808211156131755760008155600101613369565b6001600160a01b03169052565b81518152602080830151908201526040918201516001600160a01b03169181019190915260600190565b6000604082840312156133c657600080fd5b50919050565b6000602082840312156133de57600080fd5b5035919050565b6001600160a01b03811681146133fa57600080fd5b50565b60006020828403121561340f57600080fd5b813561045d816133e5565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106134475761344761341a565b808352506020830151151560208301526040830151604083015292915050565b600060c082840312156133c657600080fd5b8060005b6005811015611ce257815184526020938401939091019060010161347d565b8060005b6006811015611ce25781518452602093840193909101906001016134a0565b600061040082019050825182526020830151602083015260408301516134e8604084018261337d565b50606083015160608301526080830151613505608084018261337d565b5060a083015160a083015260c083015160c083015260e083015161352c60e084018261337d565b50610100838101519083015261012080840151908301526101408084015161355682850182613479565b505061016083015161356c6101e084018261349c565b506101808301516135816102a0840182613479565b506101a083015161359661034084018261349c565b5092915050565b60005b838110156135b85781810151838201526020016135a0565b83811115611ce25750506000910152565b82815260406020820152600082518060408401526135ee81606085016020870161359d565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c081016001600160401b038111828210171561363c5761363c613603565b60405290565b6040516101e081016001600160401b038111828210171561363c5761363c613603565b6040516102c081016001600160401b038111828210171561363c5761363c613603565b604080519081016001600160401b038111828210171561363c5761363c613603565b604051602081016001600160401b038111828210171561363c5761363c613603565b60405160a081016001600160401b038111828210171561363c5761363c613603565b80151581146133fa57600080fd5b60006040828403121561370e57600080fd5b604080519081016001600160401b038111828210171561373057613730613603565b604052823581526020830135613745816136ee565b60208201529392505050565b600181811c9082168061376557607f821691505b602082108114156133c657634e487b7160e01b600052602260045260246000fd5b8051610535816133e5565b6000606082840312156137a357600080fd5b604051606081016001600160401b03811182821017156137c5576137c5613603565b8060405250809150825181526020830151602082015260408301516137e9816136ee565b6040919091015292915050565b600082601f83011261380757600080fd5b604080519081016001600160401b038111828210171561382957613829613603565b6040528060c084018581111561383e57600080fd5b845b81811015613862576138528782613791565b8352602090920191606001613840565b509195945050505050565b600082601f83011261387e57600080fd5b60405160a081016001600160401b03811182821017156138a0576138a0613603565b6040528060a08401858111156138b557600080fd5b845b818110156138625780518352602092830192016138b7565b600082601f8301126138e057600080fd5b60405160c081016001600160401b038111828210171561390257613902613603565b6040528060c08401858111156138b557600080fd5b6000610420828403121561392a57600080fd5b613932613619565b61393b83613786565b81526020830151602082015261395360408401613786565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206139a4818501613786565b908201526101406139b7858583016137f6565b908201526139c984610200850161386d565b6101608201526139dd846102a085016138cf565b6101808201526139f18461036085016138cf565b6101a08201529392505050565b60006103a08284031215613a1157600080fd5b613a19613642565b613a2283613786565b8152613a3060208401613786565b6020820152604083015160408201526060830151606082015260808301516080820152613a5f60a08401613786565b60a0820152613a718460c0850161386d565b60c0820152610160613a85858286016138cf565b60e0830152613a988561022086016138cf565b6101008301526102e084015161012083015261030084015161014083015261032084015190820152610340830151610180820152613ad96103608401613786565b6101a082015261038092909201516101c083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015613b1b57613b1b613af3565b500390565b60006105608284031215613b3357600080fd5b613b3b613665565b613b4483613786565b8152613b5260208401613786565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152613b9560e08401613786565b60e0820152610100613ba98582860161386d565b908201526101a0613bbc858583016138cf565b610120830152610260613bd1868287016138cf565b610140840152610320850151610160840152610340850151610180840152610360850151828401526103808501516101c0840152613c126103a08601613786565b6101e0840152613c26866103c087016137f6565b610200840152610480850151610220840152613c46866104a08701613791565b6102408401526105008501519083015250610520830151610280820152610540909201516102a083015250919050565b600081830360c0811215613c8957600080fd5b613c91613688565b8335815260a0601f1983011215613ca757600080fd5b613caf6136aa565b9150613cb96136cc565b602085013560048110613ccb57600080fd5b81526040850135613cdb816136ee565b60208201526060850135613cee816136ee565b60408201526080850135613d01816136ee565b606082015260a0850135613d14816136ee565b6080820152825260208101919091529392505050565b60008219821115613d3d57613d3d613af3565b500190565b81518152602082015151805160c08301919060048110613d6457613d6461341a565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a08401525092915050565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615613dd257613dd2613af3565b500290565b600082613df457634e487b7160e01b600052601260045260246000fd5b500490565b8151815260209182015115159181019190915260400190565b6000600019821415613e2657613e26613af3565b5060010190565b80518252602080820151908301526040908101511515910152565b8060005b6002811015611ce257613e60848351613e2d565b6060939093019260209190910190600101613e4c565b600061056082019050613e8a82845161337d565b6020830151613e9c602084018261337d565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151613ee160e084018261337d565b5061010080840151613ef582850182613479565b50506101208301516101a0613f0c8185018361349c565b6101408501519150610260613f238186018461349c565b610160860151610320860152610180860151610340860152818601516103608601526101c08601516103808601526101e08601519250613f676103a086018461337d565b6102008601519250613f7d6103c0860184613e48565b6102208601516104808601526102408601519250613f9f6104a0860184613e2d565b85015161050085015250506102808301516105208301526102a0909201516105409091015290565b60006103a082019050613fdb82845161337d565b6020830151613fed602084018261337d565b5060408301516040830152606083015160608301526080830151608083015260a083015161401e60a084018261337d565b5060c083015161403160c0840182613479565b5060e08301516101606140468185018361349c565b610100850151915061405c61022085018361349c565b6101208501516102e0850152610140850151610300850152840151610320840152506101808301516103408301526101a083015161409e61036084018261337d565b506101c083015161038083015292915050565b600082516140c381846020870161359d565b9190910192915050565b6000602082840312156140df57600080fd5b815161045d816136ee56fea264697066735822122014d366eaff6422b4a87df9c2838f15f78324eb5177be1e348a639e2555b65d8964736f6c634300080c003360806040523480156200001157600080fd5b506040516200102938038062001029833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610ba980620004806000396000f3fe608060405234801561001057600080fd5b50600436106100c55760003560e01c806306fdde03146100ca578063095ea7b3146100e857806318160ddd1461010b57806323b872dd1461011d578063313ce56714610130578063392f37e914610145578063395093511461014d57806342966c68146101605780635600f04f1461017357806370a082311461017b57806383197ef0146101a457806395d89b41146101ae578063a457c2d7146101b6578063a9059cbb146101c9578063dd62ed3e146101dc575b600080fd5b6100d26101ef565b6040516100df9190610965565b60405180910390f35b6100fb6100f63660046109d6565b610281565b60405190151581526020016100df565b6002545b6040519081526020016100df565b6100fb61012b366004610a00565b610299565b60085460405160ff90911681526020016100df565b6100d26102bd565b6100fb61015b3660046109d6565b6102cc565b6100fb61016e366004610a3c565b61030b565b6100d2610368565b61010f610189366004610a55565b6001600160a01b031660009081526020819052604090205490565b6101ac610377565b005b6100d26103fc565b6100fb6101c43660046109d6565b61040b565b6100fb6101d73660046109d6565b61049d565b61010f6101ea366004610a77565b6104ab565b6060600380546101fe90610aaa565b80601f016020809104026020016040519081016040528092919081815260200182805461022a90610aaa565b80156102775780601f1061024c57610100808354040283529160200191610277565b820191906000526020600020905b81548152906001019060200180831161025a57829003601f168201915b5050505050905090565b60003361028f8185856104d6565b5060019392505050565b6000336102a78582856105fb565b6102b2858585610675565b506001949350505050565b6060600780546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028f9082908690610306908790610afb565b6104d6565b6005546000906001600160a01b0316336001600160a01b03161461034a5760405162461bcd60e51b815260040161034190610b13565b60405180910390fd5b600554610360906001600160a01b031683610831565b506001919050565b6060600680546101fe90610aaa565b6005546001600160a01b0316336001600160a01b0316146103aa5760405162461bcd60e51b815260040161034190610b13565b600254156103ee5760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b6044820152606401610341565b6005546001600160a01b0316ff5b6060600480546101fe90610aaa565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104905760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610341565b6102b282868684036104d6565b60003361028f818585610675565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105385760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610341565b6001600160a01b0382166105995760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610341565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061060784846104ab565b9050600019811461066f57818110156106625760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610341565b61066f84848484036104d6565b50505050565b6001600160a01b0383166106d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610341565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610341565b6001600160a01b038316600090815260208190526040902054818110156107b35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610341565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ea908490610afb565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610b548339815191528460405161082491815260200190565b60405180910390a361066f565b6001600160a01b0382166108915760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610341565b6001600160a01b038216600090815260208190526040902054818110156109055760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610341565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610934908490610b3c565b90915550506040518281526000906001600160a01b03851690600080516020610b54833981519152906020016105ee565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b60008060408385031215610a8a57600080fd5b610a93836109ba565b9150610aa1602084016109ba565b90509250929050565b600181811c90821680610abe57607f821691505b60208210811415610adf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b0e57610b0e610ae5565b500190565b6020808252600f908201526e36bab9ba1031329031b932b0ba37b960891b604082015260600190565b600082821015610b4e57610b4e610ae5565b50039056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122008f4b1921c1292df953058e47b31395f0bc9e693582ab2744c556c7bdd78ec3864736f6c634300080c0033`,
  BytecodeLen: 24242,
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
    at: './index.rsh:238:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:382:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:391:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:389:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:256:23:after expr stmt semicolon',
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

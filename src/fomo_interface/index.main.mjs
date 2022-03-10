// Automatically generated with Reach 0.1.8 (85500c11)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (85500c11)';
export const _backendVersion = 10;

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
  const ctc3 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['nftPrize', ctc2], ['tokenOwnedByUsers', ctc1], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1]]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc1
    });
  const map0_ctc = ctc5;
  
  const map1_ctc = ctc5;
  
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v722, v723, v724, v725, v726, v727, v728, v729, v731, v738] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async () => {
                
                const v1291 = {
                  currentPrice: v752,
                  currentTotal: v754,
                  currentWinner: v755,
                  deadline: v725,
                  deltaDeadline: v726,
                  endTimestamp: v749,
                  nftPrize: v724,
                  paidToFunder: v751,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v1291;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async () => {
                
                const v1291 = {
                  currentPrice: v752,
                  currentTotal: v754,
                  currentWinner: v755,
                  deadline: v725,
                  deltaDeadline: v726,
                  endTimestamp: v749,
                  nftPrize: v724,
                  paidToFunder: v751,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v1291;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = svs;
              return (await ((async () => {
                
                const v779 = {
                  currentPrice: v752,
                  currentTotal: v754,
                  currentWinner: v755,
                  deadline: v725,
                  deltaDeadline: v726,
                  endTimestamp: v749,
                  nftPrize: v724,
                  paidToFunder: v751,
                  tokenOwnedByUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                  };
                
                return v779;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v722, v723, v724, v725, v726, v727, v728, v729, v731, v738] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async (_v1292 ) => {
                  const v1292 = stdlib.protect(ctc1, _v1292, null);
                
                const v1293 = stdlib.add(v1292, v727);
                
                return v1293;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async (_v1292 ) => {
                  const v1292 = stdlib.protect(ctc1, _v1292, null);
                
                const v1293 = stdlib.add(v1292, v727);
                
                return v1293;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = svs;
              return (await ((async (_v780 ) => {
                  const v780 = stdlib.protect(ctc1, _v780, null);
                
                const v781 = stdlib.add(v780, v727);
                
                return v781;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v722, v723, v724, v725, v726, v727, v728, v729, v731, v738] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async (_v1294 ) => {
                  const v1294 = stdlib.protect(ctc1, _v1294, null);
                
                const v1295 = stdlib.sub(v1294, v727);
                
                return v1295;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755] = svs;
              return (await ((async (_v1294 ) => {
                  const v1294 = stdlib.protect(ctc1, _v1294, null);
                
                const v1295 = stdlib.sub(v1294, v727);
                
                return v1295;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = svs;
              return (await ((async (_v782 ) => {
                  const v782 = stdlib.protect(ctc1, _v782, null);
                
                const v783 = stdlib.sub(v782, v727);
                
                return v783;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
      3: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0],
      6: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0],
      7: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1]
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
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Api_buyDiscount0_126: ctc5,
    Api_buyTicket0_126: ctc5,
    Api_buyTimeReduction0_126: ctc5
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
  
  
  const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1]);
  const v798 = ctc.selfAddress();
  const v800 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:290:14:application call to [unknown function] (defined at: ./index.rsh:290:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyDiscount0_126" (defined at: ./index.rsh:288:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: 'in',
    who: 'Api_buyDiscount'
    });
  const v801 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v798), null);
  const v802 = stdlib.fromSome(v801, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
  const v803 = stdlib.lt(v802, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v803, {
    at: './index.rsh:290:23:application',
    fs: ['at ./index.rsh:290:14:application call to [unknown function] (defined at: ./index.rsh:290:14:function exp)', 'at ./index.rsh:290:14:application call to [unknown function] (defined at: ./index.rsh:290:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyDiscount0_126" (defined at: ./index.rsh:288:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: null,
    who: 'Api_buyDiscount'
    });
  const v805 = ['Api_buyDiscount0_126', v800];
  
  let v817;
  const v821 = stdlib.ge(v802, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
  if (v821) {
    v817 = stdlib.checkedBigNumberify('./index.rsh:146:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v822 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v824 = v822[v802];
    v817 = v824;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764, v805],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, 0), [[v817, v738]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
      
      switch (v874[0]) {
        case 'Api_buyDiscount0_126': {
          const v877 = v874[1];
          let v882;
          const v883 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v873), null);
          const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v885 = stdlib.lt(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v885, {
            at: './index.rsh:143:12:application',
            fs: ['at ./index.rsh:291:38:application call to "getDiscountPrice" (defined at: ./index.rsh:141:36:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Api_buyDiscount'
            });
          const v886 = stdlib.ge(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v886) {
            v882 = stdlib.checkedBigNumberify('./index.rsh:146:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v887 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v889 = v887[v884];
            v882 = v889;
            }
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v939 = stdlib.add(v764, v882);
          sim_r.txns.push({
            amt: v882,
            kind: 'to',
            tok: v738
            });
          undefined;
          const v944 = null;
          const v945 = await txn1.getOutput('Api_buyDiscount', 'v944', ctc0, v944);
          
          const v952 = stdlib.add(v884, stdlib.checkedBigNumberify('./index.rsh:300:56:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 0, v873, v952);
          const v2243 = v749;
          const v2245 = v751;
          const v2246 = v752;
          const v2247 = v754;
          const v2248 = v755;
          const v2250 = v762;
          const v2251 = v939;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTicket0_126': {
          const v1013 = v874[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_126': {
          const v1149 = v874[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
  switch (v874[0]) {
    case 'Api_buyDiscount0_126': {
      const v877 = v874[1];
      let v882;
      const v883 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
      const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
      const v885 = stdlib.lt(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v885, {
        at: './index.rsh:143:12:application',
        fs: ['at ./index.rsh:291:38:application call to "getDiscountPrice" (defined at: ./index.rsh:141:36:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
        msg: null,
        who: 'Api_buyDiscount'
        });
      const v886 = stdlib.ge(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
      if (v886) {
        v882 = stdlib.checkedBigNumberify('./index.rsh:146:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v887 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v889 = v887[v884];
        v882 = v889;
        }
      ;
      const v939 = stdlib.add(v764, v882);
      ;
      undefined;
      const v944 = null;
      const v945 = await txn1.getOutput('Api_buyDiscount', 'v944', ctc0, v944);
      if (v527) {
        stdlib.protect(ctc0, await interact.out(v877, v945), {
          at: './index.rsh:289:11:application',
          fs: ['at ./index.rsh:289:11:application call to [unknown function] (defined at: ./index.rsh:289:11:function exp)', 'at ./index.rsh:296:21:application call to "callback" (defined at: ./index.rsh:292:22:function exp)', 'at ./index.rsh:292:22:application call to [unknown function] (defined at: ./index.rsh:292:22:function exp)'],
          msg: 'out',
          who: 'Api_buyDiscount'
          });
        }
      else {
        }
      
      const v952 = stdlib.add(v884, stdlib.checkedBigNumberify('./index.rsh:300:56:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map0, v873, v952);
      const v2243 = v749;
      const v2245 = v751;
      const v2246 = v752;
      const v2247 = v754;
      const v2248 = v755;
      const v2250 = v762;
      const v2251 = v939;
      return;
      
      break;
      }
    case 'Api_buyTicket0_126': {
      const v1013 = v874[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_126': {
      const v1149 = v874[1];
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
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Api_buyDiscount0_126: ctc5,
    Api_buyTicket0_126: ctc5,
    Api_buyTimeReduction0_126: ctc5
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
  
  
  const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1]);
  const v788 = ctc.selfAddress();
  const v790 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:259:14:application call to [unknown function] (defined at: ./index.rsh:259:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyTicket0_126" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v792 = stdlib.gt(v728, stdlib.checkedBigNumberify('./index.rsh:260:43:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v792, {
    at: './index.rsh:260:19:application',
    fs: ['at ./index.rsh:259:14:application call to [unknown function] (defined at: ./index.rsh:259:14:function exp)', 'at ./index.rsh:259:14:application call to [unknown function] (defined at: ./index.rsh:259:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyTicket0_126" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v794 = stdlib.gt(v764, v729);
  stdlib.assert(v794, {
    at: './index.rsh:261:19:application',
    fs: ['at ./index.rsh:259:14:application call to [unknown function] (defined at: ./index.rsh:259:14:function exp)', 'at ./index.rsh:259:14:application call to [unknown function] (defined at: ./index.rsh:259:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyTicket0_126" (defined at: ./index.rsh:257:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v796 = ['Api_buyTicket0_126', v790];
  
  let v835;
  const v836 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v788), null);
  const v837 = stdlib.fromSome(v836, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
  const v838 = stdlib.ge(v837, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
  if (v838) {
    v835 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v839 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
    const v841 = v839[v837];
    v835 = v841;
    }
  const v842 = stdlib.lt(v835, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v842, {
    at: './index.rsh:163:12:application',
    fs: ['at ./index.rsh:263:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:263:14:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  const v843 = stdlib.div(v835, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
  const v844 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v843);
  const v845 = stdlib.mul(v752, v844);
  
  const txn1 = await (ctc.sendrecv({
    args: [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764, v796],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v845, [[stdlib.checkedBigNumberify('./index.rsh:263:54:decimal', stdlib.UInt_max, 0), v738]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
      
      switch (v874[0]) {
        case 'Api_buyDiscount0_126': {
          const v877 = v874[1];
          
          break;
          }
        case 'Api_buyTicket0_126': {
          const v1013 = v874[1];
          let v1033;
          const v1034 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v873), null);
          const v1035 = stdlib.fromSome(v1034, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v1036 = stdlib.ge(v1035, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v1036) {
            v1033 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1037 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1039 = v1037[v1035];
            v1033 = v1039;
            }
          const v1040 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1040, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:263:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:263:14:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Api_buyTicket'
            });
          const v1041 = stdlib.div(v1033, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1042 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1041);
          const v1043 = stdlib.mul(v752, v1042);
          const v1073 = stdlib.add(v762, v1043);
          sim_r.txns.push({
            amt: v1043,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v738
            });
          undefined;
          const v1094 = null;
          const v1095 = await txn1.getOutput('Api_buyTicket', 'v1094', ctc0, v1094);
          
          const v1100 = stdlib.div(v752, v728);
          const v1101 = stdlib.add(v752, v727);
          const v1106 = stdlib.sub(v1073, v1100);
          sim_r.txns.push({
            amt: v1100,
            kind: 'from',
            to: v722,
            tok: undefined
            });
          const v1110 = stdlib.sub(v764, v729);
          sim_r.txns.push({
            amt: v729,
            kind: 'from',
            to: v873,
            tok: v738
            });
          let v1111;
          const v1112 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v873), null);
          const v1113 = stdlib.fromSome(v1112, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1114 = stdlib.ge(v1113, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1114) {
            v1111 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1115 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1117 = v1115[v1113];
            v1111 = v1117;
            }
          const v1118 = stdlib.sub(v726, v1111);
          let v1120;
          if (v1036) {
            v1120 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1124 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1126 = v1124[v1035];
            v1120 = v1126;
            }
          const v1127 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1127, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:281:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Api_buyTicket'
            });
          const v1128 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1129 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1128);
          const v1130 = stdlib.mul(v752, v1129);
          const v1131 = stdlib.add(v754, v1130);
          const v1132 = stdlib.add(v751, v1100);
          const v1133 = stdlib.add(v749, v1118);
          const v2319 = v1133;
          const v2321 = v1132;
          const v2322 = v1101;
          const v2323 = v1131;
          const v2324 = v873;
          const v2326 = v1106;
          const v2327 = v1110;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Api_buyTimeReduction0_126': {
          const v1149 = v874[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
  switch (v874[0]) {
    case 'Api_buyDiscount0_126': {
      const v877 = v874[1];
      return;
      break;
      }
    case 'Api_buyTicket0_126': {
      const v1013 = v874[1];
      let v1033;
      const v1034 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
      const v1035 = stdlib.fromSome(v1034, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
      const v1036 = stdlib.ge(v1035, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
      if (v1036) {
        v1033 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1037 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1039 = v1037[v1035];
        v1033 = v1039;
        }
      const v1040 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1040, {
        at: './index.rsh:163:12:application',
        fs: ['at ./index.rsh:263:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:263:14:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1041 = stdlib.div(v1033, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
      const v1042 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1041);
      const v1043 = stdlib.mul(v752, v1042);
      const v1073 = stdlib.add(v762, v1043);
      ;
      ;
      undefined;
      const v1094 = null;
      const v1095 = await txn1.getOutput('Api_buyTicket', 'v1094', ctc0, v1094);
      if (v527) {
        stdlib.protect(ctc0, await interact.out(v1013, v1095), {
          at: './index.rsh:258:11:application',
          fs: ['at ./index.rsh:258:11:application call to [unknown function] (defined at: ./index.rsh:258:11:function exp)', 'at ./index.rsh:267:21:application call to "callback" (defined at: ./index.rsh:264:22:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTicket'
          });
        }
      else {
        }
      
      const v1100 = stdlib.div(v752, v728);
      const v1101 = stdlib.add(v752, v727);
      const v1106 = stdlib.sub(v1073, v1100);
      ;
      const v1110 = stdlib.sub(v764, v729);
      ;
      let v1111;
      const v1112 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
      const v1113 = stdlib.fromSome(v1112, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
      const v1114 = stdlib.ge(v1113, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
      if (v1114) {
        v1111 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1115 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
        const v1117 = v1115[v1113];
        v1111 = v1117;
        }
      const v1118 = stdlib.sub(v726, v1111);
      let v1120;
      if (v1036) {
        v1120 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1124 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
        const v1126 = v1124[v1035];
        v1120 = v1126;
        }
      const v1127 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v1127, {
        at: './index.rsh:163:12:application',
        fs: ['at ./index.rsh:281:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
        msg: null,
        who: 'Api_buyTicket'
        });
      const v1128 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
      const v1129 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1128);
      const v1130 = stdlib.mul(v752, v1129);
      const v1131 = stdlib.add(v754, v1130);
      const v1132 = stdlib.add(v751, v1100);
      const v1133 = stdlib.add(v749, v1118);
      const v2319 = v1133;
      const v2321 = v1132;
      const v2322 = v1101;
      const v2323 = v1131;
      const v2324 = v873;
      const v2326 = v1106;
      const v2327 = v1110;
      return;
      
      break;
      }
    case 'Api_buyTimeReduction0_126': {
      const v1149 = v874[1];
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
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Api_buyDiscount0_126: ctc5,
    Api_buyTicket0_126: ctc5,
    Api_buyTimeReduction0_126: ctc5
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
  
  
  const [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7), [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1]);
  const v807 = ctc.selfAddress();
  const v809 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:307:14:application call to [unknown function] (defined at: ./index.rsh:307:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyTimeReduction0_126" (defined at: ./index.rsh:305:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: 'in',
    who: 'Api_buyTimeReduction'
    });
  const v810 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v807), null);
  const v811 = stdlib.fromSome(v810, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
  const v812 = stdlib.lt(v811, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
  stdlib.assert(v812, {
    at: './index.rsh:307:23:application',
    fs: ['at ./index.rsh:307:14:application call to [unknown function] (defined at: ./index.rsh:307:14:function exp)', 'at ./index.rsh:307:14:application call to [unknown function] (defined at: ./index.rsh:307:14:function exp)', 'at ./index.rsh:219:23:application call to "runApi_buyTimeReduction0_126" (defined at: ./index.rsh:305:13:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)'],
    msg: null,
    who: 'Api_buyTimeReduction'
    });
  const v814 = ['Api_buyTimeReduction0_126', v809];
  
  let v856;
  const v860 = stdlib.ge(v811, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
  if (v860) {
    v856 = stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, 249);
    }
  else {
    const v861 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
    const v863 = v861[v811];
    v856 = v863;
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764, v814],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:308:18:decimal', stdlib.UInt_max, 0), [[v856, v738]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
      
      switch (v874[0]) {
        case 'Api_buyDiscount0_126': {
          const v877 = v874[1];
          
          break;
          }
        case 'Api_buyTicket0_126': {
          const v1013 = v874[1];
          
          break;
          }
        case 'Api_buyTimeReduction0_126': {
          const v1149 = v874[1];
          let v1187;
          const v1188 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v873), null);
          const v1189 = stdlib.fromSome(v1188, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1190 = stdlib.lt(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1190, {
            at: './index.rsh:182:12:application',
            fs: ['at ./index.rsh:308:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:180:41:function exp)', 'at ./index.rsh:308:14:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Api_buyTimeReduction'
            });
          const v1191 = stdlib.ge(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1191) {
            v1187 = stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1194 = v1192[v1189];
            v1187 = v1194;
            }
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v1211 = stdlib.add(v764, v1187);
          sim_r.txns.push({
            amt: v1187,
            kind: 'to',
            tok: v738
            });
          undefined;
          const v1275 = null;
          const v1276 = await txn1.getOutput('Api_buyTimeReduction', 'v1275', ctc0, v1275);
          
          const v1283 = stdlib.add(v1189, stdlib.checkedBigNumberify('./index.rsh:315:66:decimal', stdlib.UInt_max, 1));
          await stdlib.simMapSet(sim_r, 1, v873, v1283);
          const v2395 = v749;
          const v2397 = v751;
          const v2398 = v752;
          const v2399 = v754;
          const v2400 = v755;
          const v2402 = v762;
          const v2403 = v1211;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn1;
  switch (v874[0]) {
    case 'Api_buyDiscount0_126': {
      const v877 = v874[1];
      return;
      break;
      }
    case 'Api_buyTicket0_126': {
      const v1013 = v874[1];
      return;
      break;
      }
    case 'Api_buyTimeReduction0_126': {
      const v1149 = v874[1];
      let v1187;
      const v1188 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
      const v1189 = stdlib.fromSome(v1188, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
      const v1190 = stdlib.lt(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
      stdlib.assert(v1190, {
        at: './index.rsh:182:12:application',
        fs: ['at ./index.rsh:308:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:180:41:function exp)', 'at ./index.rsh:308:14:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
        msg: null,
        who: 'Api_buyTimeReduction'
        });
      const v1191 = stdlib.ge(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
      if (v1191) {
        v1187 = stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, 249);
        }
      else {
        const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
        const v1194 = v1192[v1189];
        v1187 = v1194;
        }
      ;
      const v1211 = stdlib.add(v764, v1187);
      ;
      undefined;
      const v1275 = null;
      const v1276 = await txn1.getOutput('Api_buyTimeReduction', 'v1275', ctc0, v1275);
      if (v527) {
        stdlib.protect(ctc0, await interact.out(v1149, v1276), {
          at: './index.rsh:306:11:application',
          fs: ['at ./index.rsh:306:11:application call to [unknown function] (defined at: ./index.rsh:306:11:function exp)', 'at ./index.rsh:311:21:application call to "callback" (defined at: ./index.rsh:309:22:function exp)', 'at ./index.rsh:309:22:application call to [unknown function] (defined at: ./index.rsh:309:22:function exp)'],
          msg: 'out',
          who: 'Api_buyTimeReduction'
          });
        }
      else {
        }
      
      const v1283 = stdlib.add(v1189, stdlib.checkedBigNumberify('./index.rsh:315:66:decimal', stdlib.UInt_max, 1));
      await stdlib.mapSet(map1, v873, v1283);
      const v2395 = v749;
      const v2397 = v751;
      const v2398 = v752;
      const v2399 = v754;
      const v2400 = v755;
      const v2402 = v762;
      const v2403 = v1211;
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
    Api_buyDiscount0_126: ctc4,
    Api_buyTicket0_126: ctc4,
    Api_buyTimeReduction0_126: ctc4
    });
  const ctc6 = stdlib.T_Address;
  
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v723, v724, v725, v726, v727, v728, v729], secs: v731, time: v730, didSend: v53, from: v722 } = txn1;
  ;
  ;
  const v733 = 'Metafomo                        ';
  const v734 = 'METAFOMO';
  const v735 = 'https://metalabs.technology                                                                     ';
  const v736 = '                                ';
  const v737 = undefined;
  const v738 = await txn1.getOutput('internal', 'v737', ctc3, v737);
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:206:28:application call to "liftedInteract" (defined at: ./index.rsh:206:28:application)'],
    msg: 'deployed',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v742, time: v741, didSend: v71, from: v740 } = txn2;
  ;
  ;
  const v746 = stdlib.addressEq(v722, v740);
  stdlib.assert(v746, {
    at: './index.rsh:208:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v748 = stdlib.add(v731, v725);
  let v749 = v748;
  let v750 = true;
  let v751 = stdlib.checkedBigNumberify('./index.rsh:219:59:decimal', stdlib.UInt_max, 0);
  let v752 = v723;
  let v754 = stdlib.checkedBigNumberify('./index.rsh:219:43:decimal', stdlib.UInt_max, 0);
  let v755 = v722;
  let v756 = v741;
  let v762 = stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v764 = stdlib.UInt_max;
  
  while (await (async () => {
    
    return v750;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['secs', v749],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764],
        evt_cnt: 0,
        funcNum: 7,
        lct: v756,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1287, time: v1286, didSend: v632, from: v1285 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv749 = v749;
          const cv750 = false;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v1286;
          const cv762 = v762;
          const cv764 = v764;
          
          await (async () => {
            const v749 = cv749;
            const v750 = cv750;
            const v751 = cv751;
            const v752 = cv752;
            const v754 = cv754;
            const v755 = cv755;
            const v756 = cv756;
            const v762 = cv762;
            const v764 = cv764;
            
            if (await (async () => {
              
              return v750;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v762,
                kind: 'from',
                to: v755,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:326:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v755,
                tok: v724
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1287, time: v1286, didSend: v632, from: v1285 } = txn4;
      ;
      const cv749 = v749;
      const cv750 = false;
      const cv751 = v751;
      const cv752 = v752;
      const cv754 = v754;
      const cv755 = v755;
      const cv756 = v1286;
      const cv762 = v762;
      const cv764 = v764;
      
      v749 = cv749;
      v750 = cv750;
      v751 = cv751;
      v752 = cv752;
      v754 = cv754;
      v755 = cv755;
      v756 = cv756;
      v762 = cv762;
      v764 = cv764;
      
      continue;
      }
    else {
      const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn3;
      switch (v874[0]) {
        case 'Api_buyDiscount0_126': {
          const v877 = v874[1];
          let v882;
          const v883 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
          const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v885 = stdlib.lt(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v885, {
            at: './index.rsh:143:12:application',
            fs: ['at ./index.rsh:291:38:application call to "getDiscountPrice" (defined at: ./index.rsh:141:36:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v886 = stdlib.ge(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v886) {
            v882 = stdlib.checkedBigNumberify('./index.rsh:146:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v887 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v889 = v887[v884];
            v882 = v889;
            }
          ;
          const v939 = stdlib.add(v764, v882);
          ;
          undefined;
          const v944 = null;
          await txn3.getOutput('Api_buyDiscount', 'v944', ctc0, v944);
          const v952 = stdlib.add(v884, stdlib.checkedBigNumberify('./index.rsh:300:56:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v873, v952);
          const cv749 = v749;
          const cv750 = true;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v875;
          const cv762 = v762;
          const cv764 = v939;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_126': {
          const v1013 = v874[1];
          let v1033;
          const v1034 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
          const v1035 = stdlib.fromSome(v1034, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v1036 = stdlib.ge(v1035, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v1036) {
            v1033 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1037 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1039 = v1037[v1035];
            v1033 = v1039;
            }
          const v1040 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1040, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:263:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:263:14:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1041 = stdlib.div(v1033, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1042 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1041);
          const v1043 = stdlib.mul(v752, v1042);
          const v1073 = stdlib.add(v762, v1043);
          ;
          ;
          undefined;
          const v1091 = stdlib.gt(v728, stdlib.checkedBigNumberify('./index.rsh:265:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1091, {
            at: './index.rsh:265:20:application',
            fs: ['at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1093 = stdlib.gt(v764, v729);
          stdlib.assert(v1093, {
            at: './index.rsh:266:20:application',
            fs: ['at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1094 = null;
          await txn3.getOutput('Api_buyTicket', 'v1094', ctc0, v1094);
          const v1100 = stdlib.div(v752, v728);
          const v1101 = stdlib.add(v752, v727);
          stdlib.protect(ctc0, await interact.showPurchase(v873, v752, v1101), {
            at: './index.rsh:272:51:application',
            fs: ['at ./index.rsh:272:23:application call to [unknown function] (defined at: ./index.rsh:272:27:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v1106 = stdlib.sub(v1073, v1100);
          ;
          const v1110 = stdlib.sub(v764, v729);
          ;
          let v1111;
          const v1112 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
          const v1113 = stdlib.fromSome(v1112, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1114 = stdlib.ge(v1113, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1114) {
            v1111 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1115 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1117 = v1115[v1113];
            v1111 = v1117;
            }
          const v1118 = stdlib.sub(v726, v1111);
          let v1120;
          if (v1036) {
            v1120 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1124 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1126 = v1124[v1035];
            v1120 = v1126;
            }
          const v1127 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1127, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:281:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1128 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1129 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1128);
          const v1130 = stdlib.mul(v752, v1129);
          const v1131 = stdlib.add(v754, v1130);
          const v1132 = stdlib.add(v751, v1100);
          const v1133 = stdlib.add(v749, v1118);
          const cv749 = v1133;
          const cv750 = true;
          const cv751 = v1132;
          const cv752 = v1101;
          const cv754 = v1131;
          const cv755 = v873;
          const cv756 = v875;
          const cv762 = v1106;
          const cv764 = v1110;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_126': {
          const v1149 = v874[1];
          let v1187;
          const v1188 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
          const v1189 = stdlib.fromSome(v1188, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1190 = stdlib.lt(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1190, {
            at: './index.rsh:182:12:application',
            fs: ['at ./index.rsh:308:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:180:41:function exp)', 'at ./index.rsh:308:14:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Buyer'
            });
          const v1191 = stdlib.ge(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1191) {
            v1187 = stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1194 = v1192[v1189];
            v1187 = v1194;
            }
          ;
          const v1211 = stdlib.add(v764, v1187);
          ;
          undefined;
          const v1275 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1275', ctc0, v1275);
          const v1283 = stdlib.add(v1189, stdlib.checkedBigNumberify('./index.rsh:315:66:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v873, v1283);
          const cv749 = v749;
          const cv750 = true;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v875;
          const cv762 = v762;
          const cv764 = v1211;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v755), {
    at: './index.rsh:90:29:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)', 'at ./index.rsh:328:16:application call to "showOutcome" (defined at: ./index.rsh:88:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755],
    evt_cnt: 0,
    funcNum: 3,
    lct: v756,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:331:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1311, time: v1310, didSend: v663, from: v1309 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:331:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1313 = v1310;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v724
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc6, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1311, time: v1310, didSend: v663, from: v1309 } = txn3;
  ;
  let v1313 = v1310;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1328, time: v1327, didSend: v673, from: v1326 } = txn4;
    ;
    const v1330 = stdlib.addressEq(v722, v1326);
    stdlib.assert(v1330, {
      at: './index.rsh:334:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const cv1313 = v1327;
    
    v1313 = cv1313;
    
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
    Api_buyDiscount0_126: ctc5,
    Api_buyTicket0_126: ctc5,
    Api_buyTimeReduction0_126: ctc5
    });
  const ctc7 = stdlib.T_Address;
  
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
  
  
  const v713 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:110:38:application',
    fs: ['at ./index.rsh:108:16:application call to [unknown function] (defined at: ./index.rsh:108:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v714 = v713.ticketPrice;
  const v715 = v713.nftPrize;
  const v716 = v713.deadline;
  const v717 = v713.deltaDeadline;
  const v718 = v713.unitPrice;
  const v719 = v713.ticketFeeDenominator;
  const v720 = v713.tokensGivenPerTicket;
  const v721 = stdlib.gt(v719, stdlib.checkedBigNumberify('./index.rsh:111:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v721, {
    at: './index.rsh:111:12:application',
    fs: ['at ./index.rsh:108:16:application call to [unknown function] (defined at: ./index.rsh:108:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v714, v715, v716, v717, v718, v719, v720],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:113:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:113:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v723, v724, v725, v726, v727, v728, v729], secs: v731, time: v730, didSend: v53, from: v722 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v724
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:113:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v733 = 'Metafomo                        ';
      const v734 = 'METAFOMO';
      const v735 = 'https://metalabs.technology                                                                     ';
      const v736 = '                                ';
      const v737 = stdlib.simTokenNew(sim_r, v733, v734, v735, v736, stdlib.UInt_max, undefined);
      const v738 = await txn1.getOutput('internal', 'v737', ctc3, v737);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v723, v724, v725, v726, v727, v728, v729], secs: v731, time: v730, didSend: v53, from: v722 } = txn1;
  ;
  ;
  const v733 = 'Metafomo                        ';
  const v734 = 'METAFOMO';
  const v735 = 'https://metalabs.technology                                                                     ';
  const v736 = '                                ';
  const v737 = undefined;
  const v738 = await txn1.getOutput('internal', 'v737', ctc3, v737);
  const txn2 = await (ctc.sendrecv({
    args: [v722, v723, v724, v725, v726, v727, v728, v729, v731, v738],
    evt_cnt: 0,
    funcNum: 1,
    lct: v730,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:208:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:208:18:decimal', stdlib.UInt_max, 1), v724]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v742, time: v741, didSend: v71, from: v740 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:208:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:208:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v724
        });
      const v746 = stdlib.addressEq(v722, v740);
      stdlib.assert(v746, {
        at: './index.rsh:208:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v748 = stdlib.add(v731, v725);
      const v749 = v748;
      const v750 = true;
      const v751 = stdlib.checkedBigNumberify('./index.rsh:219:59:decimal', stdlib.UInt_max, 0);
      const v752 = v723;
      const v754 = stdlib.checkedBigNumberify('./index.rsh:219:43:decimal', stdlib.UInt_max, 0);
      const v755 = v722;
      const v756 = v741;
      const v762 = stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      const v764 = stdlib.UInt_max;
      
      if (await (async () => {
        
        return v750;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v762,
          kind: 'from',
          to: v755,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:326:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v755,
          tok: v724
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc7, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v742, time: v741, didSend: v71, from: v740 } = txn2;
  ;
  ;
  const v746 = stdlib.addressEq(v722, v740);
  stdlib.assert(v746, {
    at: './index.rsh:208:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v748 = stdlib.add(v731, v725);
  let v749 = v748;
  let v750 = true;
  let v751 = stdlib.checkedBigNumberify('./index.rsh:219:59:decimal', stdlib.UInt_max, 0);
  let v752 = v723;
  let v754 = stdlib.checkedBigNumberify('./index.rsh:219:43:decimal', stdlib.UInt_max, 0);
  let v755 = v722;
  let v756 = v741;
  let v762 = stdlib.checkedBigNumberify('./index.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  let v764 = stdlib.UInt_max;
  
  while (await (async () => {
    
    return v750;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc6],
      timeoutAt: ['secs', v749],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v722, v724, v725, v726, v727, v728, v729, v738, v749, v751, v752, v754, v755, v762, v764],
        evt_cnt: 0,
        funcNum: 7,
        lct: v756,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v1287, time: v1286, didSend: v632, from: v1285 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv749 = v749;
          const cv750 = false;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v1286;
          const cv762 = v762;
          const cv764 = v764;
          
          await (async () => {
            const v749 = cv749;
            const v750 = cv750;
            const v751 = cv751;
            const v752 = cv752;
            const v754 = cv754;
            const v755 = cv755;
            const v756 = cv756;
            const v762 = cv762;
            const v764 = cv764;
            
            if (await (async () => {
              
              return v750;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v762,
                kind: 'from',
                to: v755,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:326:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v755,
                tok: v724
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc7, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1287, time: v1286, didSend: v632, from: v1285 } = txn4;
      ;
      const cv749 = v749;
      const cv750 = false;
      const cv751 = v751;
      const cv752 = v752;
      const cv754 = v754;
      const cv755 = v755;
      const cv756 = v1286;
      const cv762 = v762;
      const cv764 = v764;
      
      v749 = cv749;
      v750 = cv750;
      v751 = cv751;
      v752 = cv752;
      v754 = cv754;
      v755 = cv755;
      v756 = cv756;
      v762 = cv762;
      v764 = cv764;
      
      continue;
      }
    else {
      const {data: [v874], secs: v876, time: v875, didSend: v527, from: v873 } = txn3;
      switch (v874[0]) {
        case 'Api_buyDiscount0_126': {
          const v877 = v874[1];
          let v882;
          const v883 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
          const v884 = stdlib.fromSome(v883, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v885 = stdlib.lt(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v885, {
            at: './index.rsh:143:12:application',
            fs: ['at ./index.rsh:291:38:application call to "getDiscountPrice" (defined at: ./index.rsh:141:36:function exp)', 'at ./index.rsh:291:14:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:291:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v886 = stdlib.ge(v884, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v886) {
            v882 = stdlib.checkedBigNumberify('./index.rsh:146:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v887 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v889 = v887[v884];
            v882 = v889;
            }
          ;
          const v939 = stdlib.add(v764, v882);
          ;
          undefined;
          const v944 = null;
          await txn3.getOutput('Api_buyDiscount', 'v944', ctc0, v944);
          const v952 = stdlib.add(v884, stdlib.checkedBigNumberify('./index.rsh:300:56:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map0, v873, v952);
          const cv749 = v749;
          const cv750 = true;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v875;
          const cv762 = v762;
          const cv764 = v939;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        case 'Api_buyTicket0_126': {
          const v1013 = v874[1];
          let v1033;
          const v1034 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v873), null);
          const v1035 = stdlib.fromSome(v1034, stdlib.checkedBigNumberify('./index.rsh:139:64:decimal', stdlib.UInt_max, 0));
          const v1036 = stdlib.ge(v1035, stdlib.checkedBigNumberify('./index.rsh:132:30:decimal', stdlib.UInt_max, 5));
          if (v1036) {
            v1033 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1037 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1039 = v1037[v1035];
            v1033 = v1039;
            }
          const v1040 = stdlib.lt(v1033, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1040, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:263:38:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:263:14:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:263:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1041 = stdlib.div(v1033, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1042 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1041);
          const v1043 = stdlib.mul(v752, v1042);
          const v1073 = stdlib.add(v762, v1043);
          ;
          ;
          undefined;
          const v1091 = stdlib.gt(v728, stdlib.checkedBigNumberify('./index.rsh:265:44:decimal', stdlib.UInt_max, 1));
          stdlib.assert(v1091, {
            at: './index.rsh:265:20:application',
            fs: ['at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1093 = stdlib.gt(v764, v729);
          stdlib.assert(v1093, {
            at: './index.rsh:266:20:application',
            fs: ['at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1094 = null;
          await txn3.getOutput('Api_buyTicket', 'v1094', ctc0, v1094);
          const v1100 = stdlib.div(v752, v728);
          const v1101 = stdlib.add(v752, v727);
          const v1106 = stdlib.sub(v1073, v1100);
          ;
          const v1110 = stdlib.sub(v764, v729);
          ;
          let v1111;
          const v1112 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
          const v1113 = stdlib.fromSome(v1112, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1114 = stdlib.ge(v1113, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1114) {
            v1111 = stdlib.checkedBigNumberify('./index.rsh:194:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1115 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5)];
            const v1117 = v1115[v1113];
            v1111 = v1117;
            }
          const v1118 = stdlib.sub(v726, v1111);
          let v1120;
          if (v1036) {
            v1120 = stdlib.checkedBigNumberify('./index.rsh:155:16:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1124 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 15), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 25)];
            const v1126 = v1124[v1035];
            v1120 = v1126;
            }
          const v1127 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:163:17:decimal', stdlib.UInt_max, 100));
          stdlib.assert(v1127, {
            at: './index.rsh:163:12:application',
            fs: ['at ./index.rsh:281:49:application call to "getPriceWithDiscount" (defined at: ./index.rsh:161:47:function exp)', 'at ./index.rsh:264:22:application call to [unknown function] (defined at: ./index.rsh:264:22:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1128 = stdlib.div(v1120, stdlib.checkedBigNumberify('./index.rsh:164:27:decimal', stdlib.UInt_max, 100));
          const v1129 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:164:23:decimal', stdlib.UInt_max, 1), v1128);
          const v1130 = stdlib.mul(v752, v1129);
          const v1131 = stdlib.add(v754, v1130);
          const v1132 = stdlib.add(v751, v1100);
          const v1133 = stdlib.add(v749, v1118);
          const cv749 = v1133;
          const cv750 = true;
          const cv751 = v1132;
          const cv752 = v1101;
          const cv754 = v1131;
          const cv755 = v873;
          const cv756 = v875;
          const cv762 = v1106;
          const cv764 = v1110;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        case 'Api_buyTimeReduction0_126': {
          const v1149 = v874[1];
          let v1187;
          const v1188 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v873), null);
          const v1189 = stdlib.fromSome(v1188, stdlib.checkedBigNumberify('./index.rsh:178:74:decimal', stdlib.UInt_max, 0));
          const v1190 = stdlib.lt(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          stdlib.assert(v1190, {
            at: './index.rsh:182:12:application',
            fs: ['at ./index.rsh:308:43:application call to "getTimeReductionPrice" (defined at: ./index.rsh:180:41:function exp)', 'at ./index.rsh:308:14:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:308:14:function exp)', 'at ./index.rsh:219:23:application call to [unknown function] (defined at: ./index.rsh:219:23:function exp)', 'at ./index.rsh:242:18:application call to [unknown function] (defined at: ./index.rsh:242:18:function exp)'],
            msg: null,
            who: 'Funder'
            });
          const v1191 = stdlib.ge(v1189, stdlib.checkedBigNumberify('./index.rsh:172:35:decimal', stdlib.UInt_max, 5));
          if (v1191) {
            v1187 = stdlib.checkedBigNumberify('./index.rsh:185:16:decimal', stdlib.UInt_max, 249);
            }
          else {
            const v1192 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 40), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 80), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 160)];
            const v1194 = v1192[v1189];
            v1187 = v1194;
            }
          ;
          const v1211 = stdlib.add(v764, v1187);
          ;
          undefined;
          const v1275 = null;
          await txn3.getOutput('Api_buyTimeReduction', 'v1275', ctc0, v1275);
          const v1283 = stdlib.add(v1189, stdlib.checkedBigNumberify('./index.rsh:315:66:decimal', stdlib.UInt_max, 1));
          await stdlib.mapSet(map1, v873, v1283);
          const cv749 = v749;
          const cv750 = true;
          const cv751 = v751;
          const cv752 = v752;
          const cv754 = v754;
          const cv755 = v755;
          const cv756 = v875;
          const cv762 = v762;
          const cv764 = v1211;
          
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v754 = cv754;
          v755 = cv755;
          v756 = cv756;
          v762 = cv762;
          v764 = cv764;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v755), {
    at: './index.rsh:90:29:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:32:function exp)', 'at ./index.rsh:328:16:application call to "showOutcome" (defined at: ./index.rsh:88:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755],
    evt_cnt: 0,
    funcNum: 3,
    lct: v756,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:331:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1311, time: v1310, didSend: v663, from: v1309 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:331:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1313 = v1310;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v724
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1311, time: v1310, didSend: v663, from: v1309 } = txn3;
  ;
  let v1313 = v1310;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v722, v724, v725, v726, v727, v749, v751, v752, v754, v755],
      evt_cnt: 0,
      funcNum: 5,
      lct: v1313,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:334:39:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v1328, time: v1327, didSend: v673, from: v1326 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:334:39:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v1330 = stdlib.addressEq(v722, v1326);
        stdlib.assert(v1330, {
          at: './index.rsh:334:39:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Funder'
          });
        const cv1313 = v1327;
        
        await (async () => {
          const v1313 = cv1313;
          
          if (await (async () => {
            
            return true;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v724
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1328, time: v1327, didSend: v673, from: v1326 } = txn4;
    ;
    const v1330 = stdlib.addressEq(v722, v1326);
    stdlib.assert(v1330, {
      at: './index.rsh:334:39:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Funder'
      });
    const cv1313 = v1327;
    
    v1313 = cv1313;
    
    continue;
    
    }
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyDiscount()byte[0]`, `Api_buyTicket()byte[0]`, `Api_buyTimeReduction()byte[0]`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BSAfAAEIBzgGAwQFICgwWEBIUGRgAqCNBp3RyqsGzN6axQ2Do/jPDZHm0r4Dk7m+1ARocJgBoAH5Af///////////wEmBwEAAQEAEgAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAACgAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgAAAAAAAAAUAAAAAAAAACgMAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAACgAAAAAAAAAPAAAAAAAAABQAAAAAAAAAGSI1ADEYQQsqKmRJIls1ASRbNQIxGSMSQQAJMQArKExmQgsANhoAF0lBAfEiNQQjNQZJIRQMQACQSSEVDEAAd0khFgxAAGAhFhJENAFJIQUMQAA4SSUMQAAaJRJEKGQpZFA1AzYaARc0AyEEWwkWNQdCCqZIKGQpZFA1AzYaARc0AyEEWwkWNQdCCo4hBhJEKGQpZFA1AzYaARc0AyEEWwkWNQdCCnMhFRJEKjX/KTT/UDUFQgIFIRQSRCo1/4ABAjT/UDUFQgHzSSEXDEAAd0khGAxAAGAhGBJENAFJIQUMQAA4SSUMQAAaJRJEKGQpZFA1AzYaARc0AyEEWwgWNQdCChZIKGQpZFA1AzYaARc0AyEEWwgWNQdCCf4hBhJEKGQpZFA1AzYaARc0AyEEWwgWNQdCCeMhFxJEKjX/KDT/UDUFQgF1gZn03/kBEkQ0AUkhBQxAAIRJJQxAAEAlEkQoZClkUEk1A1coCDQDVzAIUDQDVyAIUCcEUDQDV2gIUDQDV3AIUDQDV3ggUDQDV2AIUDQDV1gIUDUHQgl8SChkKWRQSTUDVygINANXMAhQNANXIAhQJwRQNANXUAhQNANXWAhQNANXYCBQNANXSAhQNANXQAhQNQdCCT4hBhJEKGQpZFBJNQNXKAg0A1cwCFA0A1cgCFAnBFA0A1dQCFA0A1dYCFA0A1dgIFA0A1dICFA0A1dACFA1B0II/TYaARc2GgIXNQQ2GgM1BUkhBwxABK1JIQUMQAQ+SSUMQAB7JRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQxbNf+ABOIbs6mwMgc0/w9ENANXACA0AyEJWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhDls0AyEPWzT/IjQDIRFbNAMhGVs0AyEaWzQDV3ggMgY0AyEbWzQDIRxbQgcMSCU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhCVs1/jQDIQpbNf00AyELWzX8NAMhBFs1+zQDIQ1bNfo0AyEOWzX5NAMhD1s1+DQDIQxbNfc0AyERWzX2NAMhGVs19TQDIRpbNfQ0A1d4IDXzNAMhG1s18jQDIRxbNfE0BTXwgASQT2RJNPBQsDIHNPcMRDTwIlVJIwxAAldJIRIMQADLIRISRCIxAEkxGGFAAAVIK0IAAihiVwkJSTXtI1s07SJVTUk17iEIDEQ07iEID0EAByEdNe9CAAsnBSQ07gskWBc17zTvSUEAJjQASSMINQBMSwE4EhJENPhLATgREkQhB0sBOBASRDIKSwE4FBJESIAIAAAAAAAABPuwKjUHMQBJSTEYYUAABUgrQgACKGIpNO4jCBZQNe1JVwAJNO1QTEgoTGY0/zT+NP00/DT7NPo0+TT4NPcjNPY09TT0NPMyBjTyNPE07whCBZxIIjEASTEYYUAABUgrQgACKGJXAAlJNe0jWzTtIlVNSTXuIQgPSTXtQQAGIjXvQgALJwYkNO4LJFgXNe807yEQDEQ09SM07yEQCgkLNew07ElBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0+iMNRDTxNPkNRIAIAAAAAAAABEawKjUHNPU0+go16zTrSUEADLGyCCOyEDT/sgezIkg0+UlBABGxshIhB7IQMQCyFDT4shGzIkgiMQBJMRhhQAAFSCtCAAIoYlcJCUk16CNbNOgiVU1JNekhCA9BAAYiNepCADuAMAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAgAAAAAAAAADAAAAAAAAAAQAAAAAAAAABSQ06QskWBc16jTtQQAGIjXoQgALJwYkNO4LJFgXNeg06CEQDEQ0/zT+NP00/DT7NPo0+TT4NPc0/DTqCQgjNPY06wg09TT7CDT0NPUjNOghEAoJCwgxADIGNPI07Ag06wk08TT5CUIEF0giMQBJMRhhQAAFSCtCAAIoYlcACUk17SNbNO0iVU1JNe4hCAxENO4hCA9BAAchHTXvQgALJwUkNO4LJFgXNe8070lBACY0AEkjCDUATEsBOBISRDT4SwE4ERJEIQdLATgQEkQyCksBOBQSREiACAAAAAAAAAOwsCo1BzEASUkxGGFAAAVIK0IAAihiKTTuIwgWUDXtSUg07UxXCQlQKExmNP80/jT9NPw0+zT6NPk0+DT3IzT2NPU09DTzMgY08jTxNO8IQgNPSSEIDEAAYEghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABMyZklywNP8xABJENP80AyEJWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhDls0AyEPWzQDIQxbNANXYCAyBkID1EhJIRIMQABfSSEGDEAAV0ghBjQBEkQ0BEkiEkw0AhIRRChkKWRQNQOABKdlxLSwNANXACA0AyEJWzQDIQpbNAMhC1s0AyEEWzQDIQ1bNAMhDls0AyEPWzQDIQxbNANXYCAyBkIDbkhJIwxAAJtIIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEKWzX+NAMhC1s1/YAEmouRdLAjSUEAJjQASSMINQBMSwE4EhJENP5LATgREkQhB0sBOBASRDIKSwE4FBJESDT/MQASRDT/NP40/TQDIQRbNAMhDVs0AyEOWzQDIQ9bNAMhEVs0AyEMWzT9CCMiNAMhCVsiNP8yBiIhHkIB4EgiNAESRDQESSISTDQCEhFENAUiWzX/NAUkWzX+NAWBEFs1/TQFgRhbNfw0BSEJWzX7NAUhCls1+jQFIQtbNfmABP4mOJ40/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQsCETSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESCETSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESCKxshIhB7IQMgqyFDT+shGzIkghE0lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREixIQayECEesiIhBbIjgAhNRVRBRk9NT7IlgCBNZXRhZm9tbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALImgGBodHRwczovL21ldGFsYWJzLnRlY2hub2xvZ3kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyJzIDsigyCrIps7Q8NfiACAAAAAAAAALhNPgWULA0+DX3MQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgcWUDT3FlAoSwFXAGhnSCM1ATIGNQIxGSISREIBRTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe80+EEAVzTvNPAWUDTxFlA08hZQNPMWUDT0FlA09RZQNPYWUDT3FlA0+RZQNPoWUDT7FlA0/FA0/hZQNP8WUChLAVcAf2cpSwFXfylnSCU1ATIGNQIxGSISREIAxzT+SUEADLGyCCOyEDT8sgezIkgjSUEAEbGyEiEHshA0/LIUNPCyEbMiSDTvNPAWUDTxFlA08hZQNPMWUDT3FlA0+RZQNPoWUDT7FlA0/FAoSwFXAH9nKUsBV38BZ0ghBjUBMgY1AjEZIhJEQgBZNf81/jX9Nfw1+zX6Nfk1+DX3NfZJNfU09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDT+UChLAVcAf2cpSwFXfwFnSCEFNQEyBjUCMRkiEkRCAAAqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 9,
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
                "name": "v723",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v724",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v725",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v726",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v727",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v728",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v729",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                "name": "v723",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v724",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v725",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v726",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v727",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v728",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v729",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_126",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_126",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_126",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v874",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
        "internalType": "struct T14",
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
    "name": "_reach_oe_v1094",
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
    "name": "_reach_oe_v1275",
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
    "name": "_reach_oe_v737",
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
    "name": "_reach_oe_v944",
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
        "name": "v2436",
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
        "name": "v2440",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyDiscount0_126",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTicket0_126",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Api_buyTimeReduction0_126",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v874",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
        "internalType": "struct T14",
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
  Bytecode: `0x6080604052604051620049ea380380620049ea83398101604081905262000026916200051d565b6000808055436003556040805160e0808201835260c0808301858152835283516020808201865286825280850191909152845160608082018752878252818301889052818701889052858701919091528551808301875287815281860152608080860188905260a08087019890985286518951815289840151805182860152938401516001600160a01b03168189015283880151818401529183015182820152820151818801529581015186830152015190840152905190917f73d12ff56631f9786d6754dd1abe862b134453b8896a68f1b36aa9412ed97bf291908190036101000190a1620001193415600a620003d7565b8051674d657461666f6d6f60c01b9052602080820151674d455441464f4d4f60c01b9052604080830180517f68747470733a2f2f6d6574616c6162732e746563686e6f6c6f67790000000000905280516000908401819052905182018190526060840151528251518151928301520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252606086015151602084015291016040516020818303038152906040526000196012604051620002289062000401565b62000239969594939291906200061c565b604051809103906000f08015801562000256573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527f0913c579303a5e1bccda658b689c923ee0cca8dceb7f54fb86505e562fa0f9169060200160405180910390a16200031360405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151606080870191909152835101516080808701919091528351015160a080870191909152835181015160c08088019190915293519093015160e08601524261010086015291850151166101208401526001600081905543905551620003a79183910162000687565b60405160208183030381529060405260029080519060200190620003cd9291906200040f565b505050506200075e565b81620003fd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610f758062003a7583390190565b8280546200041d9062000721565b90600052602060002090601f0160209004810192826200044157600085556200048c565b82601f106200045c57805160ff19168380011785556200048c565b828001600101855582156200048c579182015b828111156200048c5782518255916020019190600101906200046f565b506200049a9291506200049e565b5090565b5b808211156200049a57600081556001016200049f565b604080519081016001600160401b0381118282101715620004e657634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620004e657634e487b7160e01b600052604160045260246000fd5b60008183036101008112156200053257600080fd5b6200053c620004b5565b8351815260e0601f19830112156200055357600080fd5b6200055d620004ec565b6020850151815260408501519092506001600160a01b03811681146200058257600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b6000815180845260005b81811015620005f457602081850181015186830182015201620005d6565b8181111562000607576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200063160c0830189620005cc565b8281036020840152620006458189620005cc565b905082810360408401526200065b8188620005cc565b90508281036060840152620006718187620005cc565b6080840195909552505060a00152949350505050565b81516001600160a01b031681526101408101602083015160208301526040830151620006be60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015162000719828501826001600160a01b03169052565b505092915050565b600181811c908216806200073657607f821691505b602082108114156200075857634e487b7160e01b600052602260045260246000fd5b50919050565b613307806200076e6000396000f3fe6080604052600436106100ea5760003560e01c806373b4522c11610084578063a556059611610056578063a55605961461027d578063ab53f2c61461029d578063bf2c5b24146102c0578063cadc2e7a146102d357005b806373b4522c146101b25780637a3678dd146101c557806383230757146102555780638e3147691461026a57005b806330a94db4116100bd57806330a94db4146101555780633bc5b7bf146101755780636cd6de3a146101a25780636cdcb9df146101aa57005b806236c367146100f35780631e93b0f1146101065780632b10758a1461012a5780632c10a1591461014257005b366100f157005b005b6100f1610101366004612ac5565b6102f3565b34801561011257600080fd5b506003545b6040519081526020015b60405180910390f35b61013261032c565b6040519015158152602001610121565b6100f1610150366004612add565b610398565b34801561016157600080fd5b50610117610170366004612aef565b6103cd565b34801561018157600080fd5b50610195610190366004612b1d565b610624565b6040516101219190612b50565b610132610650565b6101326106c0565b6100f16101c0366004612add565b610730565b3480156101d157600080fd5b506101da610765565b60405161012191906000610120820190508251825260208301516020830152604083015160018060a01b038082166040850152606085015160608501526080850151608085015260a085015160a08501528060c08601511660c0850152505060e083015160e083015261010080840151818401525092915050565b34801561026157600080fd5b50600154610117565b6100f1610278366004612add565b610ac1565b34801561028957600080fd5b50610117610298366004612aef565b610af6565b3480156102a957600080fd5b506102b2610d41565b604051610121929190612bb3565b6100f16102ce366004612add565b610dde565b3480156102df57600080fd5b506101956102ee366004612b1d565b610e13565b604080516060810182526000808252602082018190529181019190915261032861032236849003840184612cf8565b82610e39565b5050565b60408051606081018252600080825260208201819052918101829052610350612757565b6040805160808101825260008082526020808301829052828401829052606083019190915282518082019093528183528301919091526103908284610e39565b505051919050565b60408051606081018252600080825260208201819052918101919091526103286103c736849003840184612d99565b82611912565b60006001600054141561048a576000600280546103e990612dfd565b80601f016020809104026020016040519081016040528092919081815260200182805461041590612dfd565b80156104625780601f1061043757610100808354040283529160200191610462565b820191906000526020600020905b81548152906001019060200180831161044557829003601f168201915b505050505080602001905181019061047a9190612e3d565b905061048860006009611b60565b505b6003600054141561054e576000600280546104a490612dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546104d090612dfd565b801561051d5780601f106104f25761010080835404028352916020019161051d565b820191906000526020600020905b81548152906001019060200180831161050057829003601f168201915b50505050508060200190518101906105359190612ed5565b90508060800151836105479190612f78565b9392505050565b60066000541415610568576000600280546104a490612dfd565b600760005414156106135760006002805461058290612dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546105ae90612dfd565b80156105fb5780601f106105d0576101008083540402835291602001916105fb565b820191906000526020600020905b8154815290600101906020018083116105de57829003601f168201915b50505050508060200190518101906105359190612f8f565b61061f60006009611b60565b919050565b604080516060810182526000808252602082018190529181019190915261064a82611b86565b92915050565b60408051606081018252600080825260208201819052918101829052610674612757565b604080516080810182526000602080830182905282840182905260608301919091526002825282518082019093528183528301919091526106b58284610e39565b505060400151919050565b604080516060810182526000808252602082018190529181018290526106e4612757565b604080516080810182526000602080830182905282840182905260608301919091526001825282518082019093528183528301919091526107258284610e39565b505060200151919050565b604080516060810182526000808252602082018190529181019190915261032861075f36849003840184612d99565b82611c58565b61076d61279c565b600160005414156108285760006002805461078790612dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546107b390612dfd565b80156108005780601f106107d557610100808354040283529160200191610800565b820191906000526020600020905b8154815290600101906020018083116107e357829003601f168201915b50505050508060200190518101906108189190612e3d565b905061082660006007611b60565b505b600360005414156109615760006002805461084290612dfd565b80601f016020809104026020016040519081016040528092919081815260200182805461086e90612dfd565b80156108bb5780601f10610890576101008083540402835291602001916108bb565b820191906000526020600020905b81548152906001019060200180831161089e57829003601f168201915b50505050508060200190518101906108d39190612ed5565b90506108dd6127fa565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092528251600091015260e08084015183516080015261010080850151845160a0908101919091526101208601518551941660c0948501529285015184519092019190915292015181519092019190915251919050565b6006600054141561097b5760006002805461084290612dfd565b60076000541415610ab25760006002805461099590612dfd565b80601f01602080910402602001604051908101604052809291908181526020018280546109c190612dfd565b8015610a0e5780601f106109e357610100808354040283529160200191610a0e565b820191906000526020600020905b8154815290600101906020018083116109f157829003601f168201915b5050505050806020019051810190610a269190612f8f565b9050610a306127fa565b604080830151825152606080840151835160209081019190915284015183516001600160a01b0391821693019290925282516000910152610140830151825160800152610160830151825160a001526101808301518251911660c09190910152610120820151815160e001526101009182015181519092019190915251919050565b610abe60006007611b60565b90565b6040805160608101825260008082526020820181905291810191909152610328610af036849003840184612d99565b82611e11565b600060016000541415610bb357600060028054610b1290612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3e90612dfd565b8015610b8b5780601f10610b6057610100808354040283529160200191610b8b565b820191906000526020600020905b815481529060010190602001808311610b6e57829003601f168201915b5050505050806020019051810190610ba39190612e3d565b9050610bb160006008611b60565b505b60036000541415610c7057600060028054610bcd90612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf990612dfd565b8015610c465780601f10610c1b57610100808354040283529160200191610c46565b820191906000526020600020905b815481529060010190602001808311610c2957829003601f168201915b5050505050806020019051810190610c5e9190612ed5565b90508060800151836105479190613066565b60066000541415610c8a57600060028054610bcd90612dfd565b60076000541415610d3557600060028054610ca490612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd090612dfd565b8015610d1d5780601f10610cf257610100808354040283529160200191610d1d565b820191906000526020600020905b815481529060010190602001808311610d0057829003601f168201915b5050505050806020019051810190610c5e9190612f8f565b61061f60006008611b60565b600060606000546002808054610d5690612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8290612dfd565b8015610dcf5780601f10610da457610100808354040283529160200191610dcf565b820191906000526020600020905b815481529060010190602001808311610db257829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610328610e0d36849003840184612d99565b82611f45565b604080516060810182526000808252602082018190529181019190915261064a82612165565b610e496007600054146023611b60565b8151610e64901580610e5d57508251600154145b6024611b60565b600080805560028054610e7690612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea290612dfd565b8015610eef5780601f10610ec457610100808354040283529160200191610eef565b820191906000526020600020905b815481529060010190602001808311610ed257829003601f168201915b5050505050806020019051810190610f079190612f8f565b9050610f1161280d565b610f2382610100015142106025611b60565b7f65ba3c52e9aacb57f14951ed6b2e6d6482045474161df5f26ea357744bd0e7cd84604051610f52919061307e565b60405180910390a16000602085015151516002811115610f7457610f74612b3a565b14156111cf576001610f8533611b86565b516001811115610f9757610f97612b3a565b14610fa3576000610fb1565b610fac33611b86565b604001515b60208201819052610fc6906005116017611b60565b6005816020015110610fdb5760f9815261102b565b60408181018051600a9052805160146020918201528151602893019290925280516050606090910152805160a0608090910152519082015160058110611023576110236130d2565b602002015181525b61103734156018611b60565b61105461104d338460e0015184600001516121f2565b6019611b60565b604051600081527f4cc519333d604511941e358f2e80623400643c2002c48956bf41341837d03e9e9060200160405180910390a16000808452338152600460209081526040909120805460ff19166001908117909155908201516110b89190613066565b336000908152600460205260409020600101556110d36128ab565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916908201526101008b0151878a01805191909152805160019801979097526101208b01518751909601959095526101408a0151865190940193909352610160890151855190920191909152610180880151845195169401939093528151439301929092526101a085015190519091015281516101c08401516111b69190613066565b602082015161010001526111c981612208565b5061190c565b60016020850151515160028111156111e9576111e9612b3a565b141561169e5760016111fa33611b86565b51600181111561120c5761120c612b3a565b14611218576000611226565b61122133611b86565b604001515b60808201819052600511801560a083015261124757600060608201526112a5565b60c08101805160009052805160056020909101528051600a6040909101528051600f606090910152805160146080918201528151601960a091909101529051908201516006811061129a5761129a6130d2565b602002015160608201525b6112b76064826060015110601a611b60565b606481606001516112c891906130e8565b6112d3906001612f78565b8261014001516112e3919061310a565b60e082018190526112f7903414601b611b60565b61131161130a338460e0015160006121f2565b601c611b60565b61132360018360a0015111601d611b60565b6113398260c00151836101c0015111601e611b60565b604051600081527ff910c4baf35cc7aff398eef490c107e2a3db0dbd3b5fc087d3bf4ee4db32caa49060200160405180910390a16000602084015260a082015161014083015161138991906130e8565b610100820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156113c8573d6000803e3d6000fd5b506113dc8260e00151338460c001516124b8565b60016113e733612165565b5160018111156113f9576113f9612b3a565b14611405576000611413565b61140e33612165565b604001515b610140820181905260051161142f57600061012082015261148f565b6101608101805160009052805160016020909101528051600260409091015280516003606090910152805160046080909101528051600560a0909101525161014082015160068110611483576114836130d2565b60200201516101208201525b8060a00151156114a6576000610180820152611505565b6101a08101805160009052805160056020909101528051600a6040909101528051600f606090910152805160146080918201528151601960a090910152905190820151600681106114f9576114f96130d2565b60200201516101808201525b611518606482610180015110601f611b60565b6115206128ab565b825181516001600160a01b03918216905260208085015183519083169101526040808501518351909101526060808501805184519092019190915260808086015184519091015260a08086015184519091015260c08086015184519091015260e0808601518451931692019190915261012083015190516115a19190612f78565b8361010001516115b19190613066565b6020808301805192909252905160019101526101008201516101208401516115d99190613066565b60208201516040015260808301516101408401516115f79190613066565b602082015160600152610180820151611612906064906130e8565b61161d906001612f78565b83610140015161162d919061310a565b83610160015161163d9190613066565b6020820180516080019190915280513360a090910152514360c09091015261010082015160e08301516101a08501516116769190613066565b6116809190612f78565b602082015160e0015260c08301516101c08401516111b69190612f78565b60026020850151515160028111156116b8576116b8612b3a565b141561190c5760016116c933612165565b5160018111156116db576116db612b3a565b146116e75760006116f5565b6116f033612165565b604001515b6101e0820181905261170b906005116020611b60565b6005816101e00151106117255760f96101c082015261177b565b61020081018051600a9052805160146020909101528051602860409091015280516050606090910152805160a0608090910152516101e08201516005811061176f5761176f6130d2565b60200201516101c08201525b61178734156021611b60565b6117a561179e338460e00151846101c001516121f2565b6022611b60565b604051600081527f2b544fb01b5c82d9429464e59cda4607d4ed8520c6f2a7cadf1d32f4745eb3819060200160405180910390a16000604084810182905233825260056020529020805460ff191660019081179091556101e082015161180b9190613066565b336000908152600560205260409020600101556118266128ab565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865182015260a080890151875182015260c0808a0151885182015260e0808b01518951908916908201526101008b0151878a01805191909152805160019801979097526101208b01518751909601959095526101408a0151865190940193909352610160890151855190920191909152610180880151845195169401939093528151439301929092526101a08501519051909101526101c080830151908401516111b69190613066565b50505050565b611922600160005414600e611b60565b815161193d90158061193657508251600154145b600f611b60565b60008080556002805461194f90612dfd565b80601f016020809104026020016040519081016040528092919081815260200182805461197b90612dfd565b80156119c85780601f1061199d576101008083540402835291602001916119c8565b820191906000526020600020905b8154815290600101906020018083116119ab57829003601f168201915b50505050508060200190518101906119e09190612e3d565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1611a2e3415600b611b60565b611a48611a4133836040015160016121f2565b600c611b60565b8051611a60906001600160a01b03163314600d611b60565b611a686128ab565b815181516001600160a01b03918216905260408084015183519083166020909101526060808501805185519093019290925260808086015185519092019190915260a08086015185519092019190915260c08086015185519092019190915260e0808601518551909201919091526101208501518451931692019190915251610100830151611af79190613066565b60208083018051929092528151600190820152815160006040909101819052908401518251606001528151608001819052835182516001600160a01b0390911660a09091015281514360c090910152815160e00152516000196101009091015261190c81612208565b816103285760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611bd257611bd2612b3a565b1415611c49576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611c1357611c13612b3a565b6001811115611c2457611c24612b3a565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b611c686003600054146011611b60565b8151611c83901580611c7c57508251600154145b6012611b60565b600080805560028054611c9590612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc190612dfd565b8015611d0e5780601f10611ce357610100808354040283529160200191611d0e565b820191906000526020600020905b815481529060010190602001808311611cf157829003601f168201915b5050505050806020019051810190611d269190612ed5565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1611d7434156010611b60565b611d7c612954565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519091015260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e08085015184519091015261010080850151845190910152610120808501518451931692019190915281015143905261190c816124cc565b611e216006600054146015611b60565b8151611e3c901580611e3557508251600154145b6016611b60565b600080805560028054611e4e90612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054611e7a90612dfd565b8015611ec75780601f10611e9c57610100808354040283529160200191611ec7565b820191906000526020600020905b815481529060010190602001808311611eaa57829003601f168201915b5050505050806020019051810190611edf9190612ed5565b60408051855181526020808701511515908201529192507f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8910160405180910390a1611f2d34156013611b60565b8051611d74906001600160a01b031633146014611b60565b611f556007600054146027611b60565b8151611f70901580611f6957508251600154145b6028611b60565b600080805560028054611f8290612dfd565b80601f0160208091040260200160405190810160405280929190818152602001828054611fae90612dfd565b8015611ffb5780601f10611fd057610100808354040283529160200191611ffb565b820191906000526020600020905b815481529060010190602001808311611fde57829003601f168201915b50505050508060200190518101906120139190612f8f565b90506120288161010001514210156029611b60565b60408051845181526020808601511515908201527fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e0910160405180910390a161207334156026611b60565b61207b6128ab565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c080890151885182015260e0808a0151895190891690820152610100808b0151888b01805191909152805160009901989098526101208b01518851909701969096526101408a0151875190950194909452610160890151865190930192909252610180880151855196169501949094528251439401939093526101a08501518251909301929092526101c084015190519091015261190c81612208565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156121b1576121b1612b3a565b1415611c49576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611c1357611c13612b3a565b600061220083853085612571565b949350505050565b806020015160200151156123b5576122b3604051806101e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015181860152855160809081015181870152865160a09081015181880152875160c09081015190880152875160e090810151871681890152858901805151610100808b019190915281518701516101208b01528151909501516101408a01528051909301516101608901528251909101519095166101808701528051909401516101a08601529251909201516101c0840152600760005543600155905161238c91839101613129565b604051602081830303815290604052600290805190602001906123b0929190612982565b505050565b602081015160a081015160e0909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156123fb573d6000803e3d6000fd5b50612418816000015160200151826020015160a0015160016124b8565b612420612a06565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518185015284516060908101518186015285516080908101518187015283870180515160a080890191909152815185015160c089015281519093015160e0880152805190910151610100870152510151909216610120840152600360005543600155905161238c91839101613200565b50565b6124c383838361264b565b6123b057600080fd5b6124d4612a06565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190850152845160809081015190850152845160a09081015190850152845160c09081015190850152845160e090810151908501528451610100908101519085015284516101209081015190931692840192909252600660005543600155905161238c91839101613200565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916125d891613298565b60006040518083038185875af1925050503d8060008114612615576040519150601f19603f3d011682016040523d82523d6000602084013e61261a565b606091505b509150915061262b8282600161271c565b508080602001905181019061264091906132b4565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916126aa91613298565b60006040518083038185875af1925050503d80600081146126e7576040519150601f19603f3d011682016040523d82523d6000602084013e6126ec565b606091505b50915091506126fd8282600261271c565b508080602001905181019061271291906132b4565b9695505050505050565b6060831561272b575081610547565b82511561273b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611b7d565b6040518060400160405280600081526020016127976040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b604051806101200160405280600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b604051806020016040528061279761279c565b604051806102200160405280600081526020016000815260200161282f612a74565b81526020016000815260200160008152602001600015158152602001612853612a92565b81526020016000815260200160008152602001600081526020016000815260200161287c612a92565b815260200160008152602001612890612a92565b81526020016000815260200160008152602001612797612a74565b60408051610140810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e08201839052610100820183905261012082019290925290819081526020016127976040518061012001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060400160405280612967612a06565b81526020016127976040518060200160405280600081525090565b82805461298e90612dfd565b90600052602060002090601f0160209004810192826129b057600085556129f6565b82601f106129c957805160ff19168380011785556129f6565b828001600101855582156129f6579182015b828111156129f65782518255916020019190600101906129db565b50612a02929150612ab0565b5090565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b6040518060a001604052806005906020820280368337509192915050565b6040518060c001604052806006906020820280368337509192915050565b5b80821115612a025760008155600101612ab1565b600060a08284031215612ad757600080fd5b50919050565b600060408284031215612ad757600080fd5b600060208284031215612b0157600080fd5b5035919050565b6001600160a01b03811681146124b557600080fd5b600060208284031215612b2f57600080fd5b813561054781612b08565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612b6757612b67612b3a565b808352506020830151151560208301526040830151604083015292915050565b60005b83811015612ba2578181015183820152602001612b8a565b8381111561190c5750506000910152565b8281526040602082015260008251806040840152612bd8816060850160208701612b87565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715612c1e57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715612c1e57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715612c1e57634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612c1e57634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff81118282101715612c1e57634e487b7160e01b600052604160045260246000fd5b80151581146124b557600080fd5b600081830360a0811215612d0b57600080fd5b612d13612bed565b833581526080601f1983011215612d2957600080fd5b612d31612c24565b9150612d3b612c55565b602085013560038110612d4d57600080fd5b81526040850135612d5d81612cea565b60208201526060850135612d7081612cea565b60408201526080850135612d8381612cea565b6060820152825260208101919091529392505050565b600060408284031215612dab57600080fd5b6040516040810181811067ffffffffffffffff82111715612ddc57634e487b7160e01b600052604160045260246000fd5b604052823581526020830135612df181612cea565b60208201529392505050565b600181811c90821680612e1157607f821691505b60208210811415612ad757634e487b7160e01b600052602260045260246000fd5b805161061f81612b08565b60006101408284031215612e5057600080fd5b612e58612c86565b612e6183612e32565b815260208301516020820152612e7960408401612e32565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612eca818501612e32565b908201529392505050565b60006101408284031215612ee857600080fd5b612ef0612c86565b612ef983612e32565b8152612f0760208401612e32565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120612eca818501612e32565b634e487b7160e01b600052601160045260246000fd5b600082821015612f8a57612f8a612f62565b500390565b60006101e08284031215612fa257600080fd5b612faa612cb8565b612fb383612e32565b8152612fc160208401612e32565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261300460e08401612e32565b60e08201526101008381015190820152610120808401519082015261014080840151908201526101608084015190820152610180613043818501612e32565b908201526101a083810151908201526101c0928301519281019290925250919050565b6000821982111561307957613079612f62565b500190565b81518152602082015151805160a083019190600381106130a0576130a0612b3a565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401525092915050565b634e487b7160e01b600052603260045260246000fd5b60008261310557634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561312457613124612f62565b500290565b81516001600160a01b031681526101e08101602083015161315560208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e08301516131a260e08401826001600160a01b03169052565b506101008381015190830152610120808401519083015261014080840151908301526101608084015190830152610180808401516001600160a01b0316908301526101a080840151908301526101c092830151929091019190915290565b81516001600160a01b031681526101408101602083015161322c60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613290828501826001600160a01b03169052565b505092915050565b600082516132aa818460208701612b87565b9190910192915050565b6000602082840312156132c657600080fd5b815161054781612cea56fea26469706673582212204a3dc28f4ed816c4bb19f148aee6180d31611b6fe146642ff95bb70feb3f26a164736f6c6343000809003360806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220f0add4e02075d4a0ea175338b4908cd261bdbd6c63e6e136cdff0dc86c597e8364736f6c63430008090033`,
  BytecodeLen: 18922,
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

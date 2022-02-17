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
  const ctc3 = stdlib.T_Data({
    Left: ctc1,
    Right: ctc1
    });
  const ctc4 = stdlib.T_Struct([['deadline', ctc1], ['nftPrize', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['startSecs', ctc3], ['deadlineSecs', ctc3]]);
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v326, v327, v328, v329, v330, v331, v333] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418] = svs;
              return (await ((async () => {
                
                const v407 = {
                  currentPrice: v345,
                  currentTotal: v347,
                  currentWinner: v348,
                  deadline: v329,
                  deadlineSecs: v404,
                  nftPrize: v328,
                  paidToFunder: v344,
                  startSecs: v396
                  };
                
                return v407;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v326, v327, v328, v329, v330, v331, v333] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418] = svs;
              return (await ((async (_v408 ) => {
                  const v408 = stdlib.protect(ctc1, _v408, null);
                
                const v409 = stdlib.add(v408, v330);
                
                return v409;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v326, v327, v328, v329, v330, v331, v333] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418] = svs;
              return (await ((async (_v410 ) => {
                  const v410 = stdlib.protect(ctc1, _v410, null);
                
                const v411 = stdlib.sub(v410, v330);
                
                return v411;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1, ctc3, ctc3, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Api_buyTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Api_buyTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Api_buyTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Data({
    Left: ctc2,
    Right: ctc2
    });
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Null;
  
  
  const [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc3, ctc3, ctc2]);
  const v422 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:159:14:application call to [unknown function] (defined at: ./index.rsh:159:14:function exp)', 'at ./index.rsh:159:14:application call to [unknown function] (defined at: ./index.rsh:159:14:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v423 = stdlib.gt(v331, stdlib.checkedBigNumberify('./index.rsh:159:47:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v423, {
    at: './index.rsh:159:23:application',
    fs: ['at ./index.rsh:159:14:application call to [unknown function] (defined at: ./index.rsh:159:14:function exp)', 'at ./index.rsh:159:14:application call to [unknown function] (defined at: ./index.rsh:159:14:function exp)', 'at ./index.rsh:159:14:application call to [unknown function] (defined at: ./index.rsh:159:14:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418, v422],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v345, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v426], secs: v428, time: v427, didSend: v206, from: v425 } = txn1;
      
      const v431 = stdlib.add(v355, v345);
      sim_r.txns.push({
        amt: v345,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v433 = null;
      const v434 = await txn1.getOutput('Api_buyTicket', 'v433', ctc5, v433);
      
      const v439 = stdlib.div(v345, v331);
      const v440 = stdlib.add(v345, v330);
      const v445 = stdlib.sub(v431, v439);
      sim_r.txns.push({
        amt: v439,
        kind: 'from',
        to: v326,
        tok: undefined
        });
      const v447 = stdlib.add(v347, v345);
      const v448 = stdlib.add(v344, v439);
      const v705 = v448;
      const v706 = v440;
      const v707 = v447;
      const v708 = v425;
      const v712 = v445;
      const v713 = ['Right', v418];
      const v714 = stdlib.add(v418, v329);
      const v715 = ['Right', v714];
      const v716 = stdlib.add(v428, v329);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc3, ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v426], secs: v428, time: v427, didSend: v206, from: v425 } = txn1;
  const v431 = stdlib.add(v355, v345);
  ;
  undefined;
  const v433 = null;
  const v434 = await txn1.getOutput('Api_buyTicket', 'v433', ctc5, v433);
  if (v206) {
    stdlib.protect(ctc5, await interact.out(v426, v434), {
      at: './index.rsh:158:11:application',
      fs: ['at ./index.rsh:158:11:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)', 'at ./index.rsh:163:21:application call to "callback" (defined at: ./index.rsh:161:22:function exp)', 'at ./index.rsh:161:22:application call to [unknown function] (defined at: ./index.rsh:161:22:function exp)'],
      msg: 'out',
      who: 'Api_buyTicket'
      });
    }
  else {
    }
  
  const v439 = stdlib.div(v345, v331);
  const v440 = stdlib.add(v345, v330);
  const v445 = stdlib.sub(v431, v439);
  ;
  const v447 = stdlib.add(v347, v345);
  const v448 = stdlib.add(v344, v439);
  const v705 = v448;
  const v706 = v440;
  const v707 = v447;
  const v708 = v425;
  const v712 = v445;
  const v713 = ['Right', v418];
  const v714 = stdlib.add(v418, v329);
  const v715 = ['Right', v714];
  const v716 = stdlib.add(v428, v329);
  return;
  
  
  
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Data({
    Left: ctc0,
    Right: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v327, v328, v329, v330, v331], secs: v333, time: v332, didSend: v50, from: v326 } = txn1;
  ;
  ;
  stdlib.protect(ctc2, await interact.deployed(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:116:28:application call to "liftedInteract" (defined at: ./index.rsh:116:28:application)'],
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
  const {data: [], secs: v338, time: v337, didSend: v62, from: v336 } = txn2;
  ;
  ;
  const v342 = stdlib.addressEq(v326, v336);
  stdlib.assert(v342, {
    at: './index.rsh:117:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  let v343 = true;
  let v344 = stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
  let v345 = v327;
  let v347 = stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, 0);
  let v348 = v326;
  let v349 = v337;
  let v352 = v338;
  let v354 = v333;
  let v355 = stdlib.checkedBigNumberify('./index.rsh:102:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v343;})()) {
    const v396 = ['Right', v354];
    const v403 = stdlib.add(v354, v329);
    const v404 = ['Right', v403];
    const v418 = stdlib.add(v352, v329);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['secs', v418],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418],
        evt_cnt: 0,
        funcNum: 4,
        lct: v349,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v452, time: v451, didSend: v247, from: v450 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv343 = false;
          const cv344 = v344;
          const cv345 = v345;
          const cv347 = v347;
          const cv348 = v348;
          const cv349 = v451;
          const cv352 = v452;
          const cv354 = v418;
          const cv355 = v355;
          
          await (async () => {
            const v343 = cv343;
            const v344 = cv344;
            const v345 = cv345;
            const v347 = cv347;
            const v348 = cv348;
            const v349 = cv349;
            const v352 = cv352;
            const v354 = cv354;
            const v355 = cv355;
            
            if (await (async () => {
              
              return v343;})()) {
              const v396 = ['Right', v354];
              const v403 = stdlib.add(v354, v329);
              const v404 = ['Right', v403];
              const v418 = stdlib.add(v352, v329);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v355,
                kind: 'from',
                to: v348,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:179:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v348,
                tok: v328
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v328
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0, ctc5, ctc5, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v452, time: v451, didSend: v247, from: v450 } = txn4;
      ;
      const cv343 = false;
      const cv344 = v344;
      const cv345 = v345;
      const cv347 = v347;
      const cv348 = v348;
      const cv349 = v451;
      const cv352 = v452;
      const cv354 = v418;
      const cv355 = v355;
      
      v343 = cv343;
      v344 = cv344;
      v345 = cv345;
      v347 = cv347;
      v348 = cv348;
      v349 = cv349;
      v352 = cv352;
      v354 = cv354;
      v355 = cv355;
      
      continue;
      }
    else {
      const {data: [v426], secs: v428, time: v427, didSend: v206, from: v425 } = txn3;
      const v431 = stdlib.add(v355, v345);
      ;
      undefined;
      const v432 = stdlib.gt(v331, stdlib.checkedBigNumberify('./index.rsh:162:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v432, {
        at: './index.rsh:162:20:application',
        fs: ['at ./index.rsh:161:22:application call to [unknown function] (defined at: ./index.rsh:161:22:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const v433 = null;
      await txn3.getOutput('Api_buyTicket', 'v433', ctc2, v433);
      const v439 = stdlib.div(v345, v331);
      const v440 = stdlib.add(v345, v330);
      stdlib.protect(ctc2, await interact.showPurchase(v425, v345, v440), {
        at: './index.rsh:168:51:application',
        fs: ['at ./index.rsh:168:23:application call to [unknown function] (defined at: ./index.rsh:168:27:function exp)', 'at ./index.rsh:161:22:application call to [unknown function] (defined at: ./index.rsh:161:22:function exp)'],
        msg: 'showPurchase',
        who: 'Buyer'
        });
      
      const v445 = stdlib.sub(v431, v439);
      ;
      const v447 = stdlib.add(v347, v345);
      const v448 = stdlib.add(v344, v439);
      const cv343 = true;
      const cv344 = v448;
      const cv345 = v440;
      const cv347 = v447;
      const cv348 = v425;
      const cv349 = v427;
      const cv352 = v428;
      const cv354 = v418;
      const cv355 = v445;
      
      v343 = cv343;
      v344 = cv344;
      v345 = cv345;
      v347 = cv347;
      v348 = cv348;
      v349 = cv349;
      v352 = cv352;
      v354 = cv354;
      v355 = cv355;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v348), {
    at: './index.rsh:87:29:application',
    fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:32:function exp)', 'at ./index.rsh:181:16:application call to "showOutcome" (defined at: ./index.rsh:85:31:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  return;
  
  
  
  
  };
export async function Funder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Funder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Funder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    deadline: ctc0,
    nftPrize: ctc1,
    ticketFeeDenominator: ctc0,
    ticketPrice: ctc0,
    unitPrice: ctc0
    });
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Data({
    Left: ctc0,
    Right: ctc0
    });
  
  
  const v319 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:107:38:application',
    fs: ['at ./index.rsh:105:16:application call to [unknown function] (defined at: ./index.rsh:105:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v320 = v319.ticketPrice;
  const v321 = v319.nftPrize;
  const v322 = v319.deadline;
  const v323 = v319.unitPrice;
  const v324 = v319.ticketFeeDenominator;
  const v325 = stdlib.gt(v324, stdlib.checkedBigNumberify('./index.rsh:108:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v325, {
    at: './index.rsh:108:12:application',
    fs: ['at ./index.rsh:105:16:application call to [unknown function] (defined at: ./index.rsh:105:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v320, v321, v322, v323, v324],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:110:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v327, v328, v329, v330, v331], secs: v333, time: v332, didSend: v50, from: v326 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v328
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v327, v328, v329, v330, v331], secs: v333, time: v332, didSend: v50, from: v326 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v326, v327, v328, v329, v330, v331, v333],
    evt_cnt: 0,
    funcNum: 1,
    lct: v332,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:117:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:117:18:decimal', stdlib.UInt_max, 1), v328]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v338, time: v337, didSend: v62, from: v336 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:117:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:117:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v328
        });
      const v342 = stdlib.addressEq(v326, v336);
      stdlib.assert(v342, {
        at: './index.rsh:117:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v343 = true;
      const v344 = stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
      const v345 = v327;
      const v347 = stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, 0);
      const v348 = v326;
      const v349 = v337;
      const v352 = v338;
      const v354 = v333;
      const v355 = stdlib.checkedBigNumberify('./index.rsh:102:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v343;})()) {
        const v396 = ['Right', v354];
        const v403 = stdlib.add(v354, v329);
        const v404 = ['Right', v403];
        const v418 = stdlib.add(v352, v329);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v355,
          kind: 'from',
          to: v348,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:179:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v348,
          tok: v328
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v328
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v338, time: v337, didSend: v62, from: v336 } = txn2;
  ;
  ;
  const v342 = stdlib.addressEq(v326, v336);
  stdlib.assert(v342, {
    at: './index.rsh:117:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  let v343 = true;
  let v344 = stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
  let v345 = v327;
  let v347 = stdlib.checkedBigNumberify('./index.rsh:121:41:decimal', stdlib.UInt_max, 0);
  let v348 = v326;
  let v349 = v337;
  let v352 = v338;
  let v354 = v333;
  let v355 = stdlib.checkedBigNumberify('./index.rsh:102:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v343;})()) {
    const v396 = ['Right', v354];
    const v403 = stdlib.add(v354, v329);
    const v404 = ['Right', v403];
    const v418 = stdlib.add(v352, v329);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['secs', v418],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v326, v328, v329, v330, v331, v344, v345, v347, v348, v355, v396, v404, v418],
        evt_cnt: 0,
        funcNum: 4,
        lct: v349,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v452, time: v451, didSend: v247, from: v450 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:174:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv343 = false;
          const cv344 = v344;
          const cv345 = v345;
          const cv347 = v347;
          const cv348 = v348;
          const cv349 = v451;
          const cv352 = v452;
          const cv354 = v418;
          const cv355 = v355;
          
          await (async () => {
            const v343 = cv343;
            const v344 = cv344;
            const v345 = cv345;
            const v347 = cv347;
            const v348 = cv348;
            const v349 = cv349;
            const v352 = cv352;
            const v354 = cv354;
            const v355 = cv355;
            
            if (await (async () => {
              
              return v343;})()) {
              const v396 = ['Right', v354];
              const v403 = stdlib.add(v354, v329);
              const v404 = ['Right', v403];
              const v418 = stdlib.add(v352, v329);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v355,
                kind: 'from',
                to: v348,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:179:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v348,
                tok: v328
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v328
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc5, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc5, ctc0, ctc6, ctc6, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v452, time: v451, didSend: v247, from: v450 } = txn4;
      ;
      const cv343 = false;
      const cv344 = v344;
      const cv345 = v345;
      const cv347 = v347;
      const cv348 = v348;
      const cv349 = v451;
      const cv352 = v452;
      const cv354 = v418;
      const cv355 = v355;
      
      v343 = cv343;
      v344 = cv344;
      v345 = cv345;
      v347 = cv347;
      v348 = cv348;
      v349 = cv349;
      v352 = cv352;
      v354 = cv354;
      v355 = cv355;
      
      continue;
      }
    else {
      const {data: [v426], secs: v428, time: v427, didSend: v206, from: v425 } = txn3;
      const v431 = stdlib.add(v355, v345);
      ;
      undefined;
      const v432 = stdlib.gt(v331, stdlib.checkedBigNumberify('./index.rsh:162:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v432, {
        at: './index.rsh:162:20:application',
        fs: ['at ./index.rsh:161:22:application call to [unknown function] (defined at: ./index.rsh:161:22:function exp)'],
        msg: null,
        who: 'Funder'
        });
      const v433 = null;
      await txn3.getOutput('Api_buyTicket', 'v433', ctc4, v433);
      const v439 = stdlib.div(v345, v331);
      const v440 = stdlib.add(v345, v330);
      const v445 = stdlib.sub(v431, v439);
      ;
      const v447 = stdlib.add(v347, v345);
      const v448 = stdlib.add(v344, v439);
      const cv343 = true;
      const cv344 = v448;
      const cv345 = v440;
      const cv347 = v447;
      const cv348 = v425;
      const cv349 = v427;
      const cv352 = v428;
      const cv354 = v418;
      const cv355 = v445;
      
      v343 = cv343;
      v344 = cv344;
      v345 = cv345;
      v347 = cv347;
      v348 = cv348;
      v349 = cv349;
      v352 = cv352;
      v354 = cv354;
      v355 = cv355;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v348), {
    at: './index.rsh:87:29:application',
    fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:32:function exp)', 'at ./index.rsh:181:16:application call to "showOutcome" (defined at: ./index.rsh:85:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyTicket()byte[0]`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,address,uint64,(byte,byte[8]),(byte,byte[8]))`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyTicket()byte[0]`, `Fomo_info()(uint64,uint64,uint64,uint64,address,uint64,(byte,byte[8]),(byte,byte[8]))`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BSARAAEEMCAoOEBICMzemsUNg6P4zw2Pj4zvBZIBUHigjQYmAwEAAQEAIjUAMRhBBI0qZEkiWzUBIQlbNQI2GgAXSUEAqiI1BCM1BkkhCgxAADBJIQsMQAAfIQsSRDQBJBJEKGQpZFA1AzYaARc0AyVbCRY1B0IELSEKEkQqNQVCAPlJIQwMQABDIQwSRDQBJBJEKGQpZFBJNQNXKAg0A1cgCFA0A1dICFA0A1dQCFA0A1dYIFA0A1dACFA0A1eACVA0A1eJCVA1B0ID2YGTub7UBBJENAEkEkQoZClkUDUDNhoBFzQDJVsIFjUHQgO2NhoBFzYaAhc1BDYaAzUFSYECDEABUEmBAwxAAUhJJAxAAGgkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQMhDVs1/4AEkSc087AyBzT/D0Q0A1cAIDQDIQRbNAMhBVs0AyVbNAMhBlsiNAMhB1s0AyEIWzQDIQ5bNANXWCAyBjIHNP80AyEPW0ICPUgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/zQDJVs1/jQDIQZbNf00AyEIWzX8NAMhDVs1+zQFNfqABMiaD7s0+lCwMgc0+wxENPxJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP0jDUSACAAAAAAAAAGxsCo1BzT8NP0KNfk0+UlBAAyxsggjshA0/7IHsyJINP80AyEEWzQDIQVbNP40/SM0AyEHWzT5CDT8NP4INAMhDls0/AgxADIGMgc0+zQDIQ9bNPwINPkJQgFjSEkjDEAAg0gjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQVbNf6ABJqLkXSwI0lBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT/MQASRDT/NP40AyVbNAMhBls0AyEHWyMiNAMhBFsiNP8yBjIHNAMhCFsiQgDZSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BSEJWzX+NAWBEFs1/TQFgRhbNfw0BSEEWzX7gARNfgcnNP8WUDT+FlA0/RZQNPwWUDT7FlCwIRBJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIRBJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIrGyEiSyEDIKshQ0/rIRsyJIMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDIHFlAoSwFXAFBnSCM1ATIGNQIxGSISREIA4DX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI090EAZSk0/hZQNfEpNP409AgWUDXwNP009Ag17zTyNPMWUDT0FlA09RZQNPYWUDT4FlA0+RZQNPoWUDT7UDT/FlA08VA08FA07xZQKEsBVwB/ZylLAVd/G2dIJDUBMgY1AjEZIhJEQgBaNP9JQQAMsbIII7IQNPuyB7MiSCNJQQAQsbISJLIQNPuyFDTzshGzIkgisbISJLIQMgmyFTIKshQ087IRsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgAAKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 154,
  unsupported: [],
  version: 9,
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v328",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v328",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v329",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T10",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v426",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
    "name": "_reach_oe_v433",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "internalType": "address payable",
            "name": "nftPrize",
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
            "components": [
              {
                "internalType": "enum _enum_T0",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "_Left",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Right",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "startSecs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "enum _enum_T0",
                "name": "which",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "_Left",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Right",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "deadlineSecs",
            "type": "tuple"
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
        "name": "v729",
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
        "name": "v731",
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
        "internalType": "struct T10",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v426",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620020883803806200208883398101604081905262000026916200030b565b60008055436003556040805182518152602080840151805182840152908101516001600160a01b03168284015280830151606080840191909152810151608080840191909152015160a082015290517f9c9324d7149bcf6a6ca3ab97ab893e42f140b3a4679fb02d63f058d4f43ce5689181900360c00190a1620000ad3415600a620001d3565b620001006040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815281518301516001600160a01b03908116604080880191825284518101516060808a0191825286518101516080808c01918252975188015160a0808d019182524260c0808f019182526001600081905543905587519c8d019d909d529851958b01959095529451909516908801525194860194909452905192840192909252905192820192909252905160e08201526101000160405160208183030381529060405260029080519060200190620001ca929190620001fd565b505050620003e2565b81620001f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200020b90620003a5565b90600052602060002090601f0160209004810192826200022f57600085556200027a565b82601f106200024a57805160ff19168380011785556200027a565b828001600101855582156200027a579182015b828111156200027a5782518255916020019190600101906200025d565b50620002889291506200028c565b5090565b5b808211156200028857600081556001016200028d565b604080519081016001600160401b0381118282101715620002d457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620002d457634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200031f57600080fd5b62000329620002a3565b8351815260a0601f19830112156200034057600080fd5b6200034a620002da565b6020850151815260408501519092506001600160a01b03811681146200036f57600080fd5b80602084015250606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600181811c90821680620003ba57607f821691505b60208210811415620003dc57634e487b7160e01b600052602260045260246000fd5b50919050565b611c9680620003f26000396000f3fe60806040526004361061008f5760003560e01c806383230757116100565780638323075714610129578063a55605961461013e578063a7661d541461015e578063ab53f2c614610171578063e2186a081461019457005b80631e93b0f1146100985780632c10a159146100bc57806330a94db4146100cf5780636cdcb9df146100ef5780637a3678dd1461010757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611644565b6101a7565b3480156100db57600080fd5b506100a96100ea366004611660565b6101d2565b6100f7610364565b60405190151581526020016100b3565b34801561011357600080fd5b5061011c6103a2565b6040516100b391906116b0565b34801561013557600080fd5b506001546100a9565b34801561014a57600080fd5b506100a9610159366004611660565b6105ab565b61009661016c366004611644565b610731565b34801561017d57600080fd5b50610186610758565b6040516100b3929190611756565b6100966101a2366004611644565b6107f5565b6040805160208101909152600081526101ce6101c836849003840184611807565b8261081c565b5050565b60006001600054141561028f576000600280546101ee9061183f565b80601f016020809104026020016040519081016040528092919081815260200182805461021a9061183f565b80156102675780601f1061023c57610100808354040283529160200191610267565b820191906000526020600020905b81548152906001019060200180831161024a57829003601f168201915b505050505080602001905181019061027f919061188b565b905061028d60006009610a19565b505b60046000541415610353576000600280546102a99061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546102d59061183f565b80156103225780601f106102f757610100808354040283529160200191610322565b820191906000526020600020905b81548152906001019060200180831161030557829003601f168201915b505050505080602001905181019061033a91906119a2565b905080606001518361034c9190611a83565b9392505050565b61035f60006009610a19565b919050565b604080516020810190915260008082529061037d61130e565b604080516020808201909252600081529082015261039b8183610a3f565b5051919050565b6103aa61133d565b60016000541415610465576000600280546103c49061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546103f09061183f565b801561043d5780601f106104125761010080835404028352916020019161043d565b820191906000526020600020905b81548152906001019060200180831161042057829003601f168201915b5050505050806020019051810190610455919061188b565b905061046360006007610a19565b505b6004600054141561059c5760006002805461047f9061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab9061183f565b80156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b505050505080602001905181019061051091906119a2565b905061051a6113cd565b60408083015182515260208084015183516001600160a01b0391821692019190915260c08085015184519093019290925260e080850151845160600152610100850151845192166080929092019190915260a0808501518451909101526101408401518351909201919091526101609092015181519092019190915251919050565b6105a860006007610a19565b90565b600060016000541415610668576000600280546105c79061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546105f39061183f565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b5050505050806020019051810190610658919061188b565b905061066660006008610a19565b505b60046000541415610725576000600280546106829061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546106ae9061183f565b80156106fb5780601f106106d0576101008083540402835291602001916106fb565b820191906000526020600020905b8154815290600101906020018083116106de57829003601f168201915b505050505080602001905181019061071391906119a2565b905080606001518361034c9190611a9a565b61035f60006008610a19565b6040805160208101909152600081526101ce61075236849003840184611807565b82610d31565b60006060600054600280805461076d9061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546107999061183f565b80156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b50505050509050915091509091565b6040805160208101909152600081526101ce61081636849003840184611ab2565b82610a3f565b61082c600160005414600e610a19565b815161084790158061084057508251600154145b600f610a19565b6000808055600280546108599061183f565b80601f01602080910402602001604051908101604052809291908181526020018280546108859061183f565b80156108d25780601f106108a7576101008083540402835291602001916108d2565b820191906000526020600020905b8154815290600101906020018083116108b557829003601f168201915b50505050508060200190518101906108ea919061188b565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16109383415600b610a19565b61095261094b3383604001516001610f22565b600c610a19565b805161096a906001600160a01b03163314600d610a19565b6109726113e0565b815181516001600160a01b03918216905260408084015183519083166020918201526060808601518551840152608080870151865183015260a08088015187518301528387018051600190528051600090860181905294890151815190960195909552845190920183905286518451951694019390935281514393019290925280514260c091820152840151815160e00152516101000152610a1381610f38565b50505050565b816101ce5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610a4f6004600054146012610a19565b8151610a6a901580610a6357508251600154145b6013610a19565b600080805560028054610a7c9061183f565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa89061183f565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b5050505050806020019051810190610b0d91906119a2565b9050610b256040518060200160405280600081525090565b610b3782610180015142106014610a19565b6040805185518152602080870151511515908201527f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a1610b888260c0015134146010610a19565b610b9a60018360800151116011610a19565b604051600081527fcb4edd38142e1e6e4730f357c7361668b135331fcb9d2d20c8e83f03d0e7935e9060200160405180910390a160008352608082015160c0830151610be69190611b38565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610c20573d6000803e3d6000fd5b50610c296113e0565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015281015160019052815160a0840151610c879190611a9a565b6020808301510152606083015160c0840151610ca39190611a9a565b60208201516040015260c083015160e0840151610cc09190611a9a565b6020820180516060019190915280513360809091015280514360a09091015280514260c091820152610180850151915160e00191909152825190840151610120850151610d0d9190611a9a565b610d179190611a83565b60208201516101000152610d2a81610f38565b5050505050565b610d416004600054146016610a19565b8151610d5c901580610d5557508251600154145b6017610a19565b600080805560028054610d6e9061183f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9a9061183f565b8015610de75780601f10610dbc57610100808354040283529160200191610de7565b820191906000526020600020905b815481529060010190602001808311610dca57829003601f168201915b5050505050806020019051810190610dff91906119a2565b9050610e148161018001514210156018610a19565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1610e5f34156015610a19565b610e676113e0565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015283860180516000905260a08089015182519096019590955260c08089015182519095019490945260e0808901518251909401939093526101008089015182519716969092019590955284514394019390935283514292019190915261018085015183519091015261012084015191510152610a1381610f38565b6000610f308385308561110f565b949350505050565b610f40611471565b602082015151156110955780516001908190525060208281015160e0015182516040015281015160019081905250815160400151602083015160e00151610f879190611a9a565b81602001516040018181525050816000015160400151826020015160c00151610fb09190611a9a565b6040820152610fbd6114c4565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152838801805185015160a0880152805184015160c088015280519092015160e0870152815101519093166101008086019190915292519092015161012084015283516101408401528381015161016084015283820151610180840152600460005543600155905161107191839101611b5a565b60405160208183030381529060405260029080519060200190610a13929190611556565b60208201516080810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156110dc573d6000803e3d6000fd5b506110f982600001516020015183602001516080015160016111e9565b600080805560018190556101ce906002906115da565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161117691611c27565b60006040518083038185875af1925050503d80600081146111b3576040519150601f19603f3d011682016040523d82523d6000602084013e6111b8565b606091505b50915091506111c982826001611202565b50808060200190518101906111de9190611c43565b979650505050505050565b6111f483838361123d565b6111fd57600080fd5b505050565b6060831561121157508161034c565b8251156112215782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a36565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161129c91611c27565b60006040518083038185875af1925050503d80600081146112d9576040519150601f19603f3d011682016040523d82523d6000602084013e6112de565b606091505b50915091506112ef82826002611202565b50808060200190518101906113049190611c43565b9695505050505050565b60405180604001604052806000815260200161133860405180602001604052806000151581525090565b905290565b6040518061010001604052806000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016113aa6040805160608101909152806000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b604051806020016040528061133861133d565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190815260200161133860405180610120016040528060001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a083019190915281905b81526040805160608101825260008082526020828101829052928201529101908152602001600081525090565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016114976040805160608101909152806000815260200160008152602001600081525090565b8280546115629061183f565b90600052602060002090601f01602090048101928261158457600085556115ca565b82601f1061159d57805160ff19168380011785556115ca565b828001600101855582156115ca579182015b828111156115ca5782518255916020019190600101906115af565b506115d6929150611617565b5090565b5080546115e69061183f565b6000825580601f106115f6575050565b601f0160209004906000526020600020908101906116149190611617565b50565b5b808211156115d65760008155600101611618565b60006040828403121561163e57600080fd5b50919050565b60006040828403121561165657600080fd5b61034c838361162c565b60006020828403121561167257600080fd5b5035919050565b80516002811061169957634e487b7160e01b600052602160045260246000fd5b825260208181015190830152604090810151910152565b60006101808201905082518252602083015160018060a01b0380821660208501526040850151604085015260608501516060850152806080860151166080850152505060a083015160a083015260c083015161170f60c0840182611679565b5060e0830151611723610120840182611679565b5092915050565b60005b8381101561174557818101518382015260200161172d565b83811115610a135750506000910152565b828152604060208201526000825180604084015261177b81606085016020870161172a565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff811182821017156117c157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff811182821017156117c157634e487b7160e01b600052604160045260246000fd5b801515811461161457600080fd5b60006040828403121561181957600080fd5b611821611790565b823581526020830135611833816117f9565b60208201529392505050565b600181811c9082168061185357607f821691505b6020821081141561163e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461035f57600080fd5b600060e0828403121561189d57600080fd5b60405160e0810181811067ffffffffffffffff821117156118ce57634e487b7160e01b600052604160045260246000fd5b6040526118da83611874565b8152602083015160208201526118f260408401611874565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006060828403121561193b57600080fd5b6040516060810181811067ffffffffffffffff8211171561196c57634e487b7160e01b600052604160045260246000fd5b806040525080915082516002811061198357600080fd5b8082525060208301516020820152604083015160408201525092915050565b600061022082840312156119b557600080fd5b6119bd6117c7565b6119c683611874565b81526119d460208401611874565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100611a23818501611874565b908201526101208381015190820152610140611a4185828601611929565b90820152611a53846101a08501611929565b610160820152610200929092015161018083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a9557611a95611a6d565b500390565b60008219821115611aad57611aad611a6d565b500190565b60008183036040811215611ac557600080fd5b611acd611790565b833581526020601f1983011215611ae357600080fd5b60405191506020820182811067ffffffffffffffff82111715611b1657634e487b7160e01b600052604160045260246000fd5b6040526020840135611b27816117f9565b825260208101919091529392505050565b600082611b5557634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b0316815261022081016020830151611b8660208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151611bde828501826001600160a01b03169052565b5050610120838101519083015261014080840151611bfe82850182611679565b5050610160830151611c146101a0840182611679565b5061018083015161020083015292915050565b60008251611c3981846020870161172a565b9190910192915050565b600060208284031215611c5557600080fd5b815161034c816117f956fea2646970667358221220fd4ea48db9c57a0cc91701239159a71172c3069e5341d2577d554c112970308664736f6c63430008090033`,
  BytecodeLen: 8328,
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
  "Api_buyTicket": Api_buyTicket,
  "Buyer": Buyer,
  "Funder": Funder
  };
export const _APIs = {
  Api: {
    buyTicket: Api_buyTicket
    }
  };

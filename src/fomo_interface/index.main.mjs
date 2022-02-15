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
              const [v322, v323, v324, v325, v326, v327, v329] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413] = svs;
              return (await ((async () => {
                
                const v402 = {
                  currentPrice: v340,
                  currentTotal: v342,
                  currentWinner: v343,
                  deadline: v325,
                  deadlineSecs: v399,
                  nftPrize: v324,
                  paidToFunder: v339,
                  startSecs: v391
                  };
                
                return v402;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v322, v323, v324, v325, v326, v327, v329] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413] = svs;
              return (await ((async (_v403 ) => {
                  const v403 = stdlib.protect(ctc1, _v403, null);
                
                const v404 = stdlib.add(v403, v326);
                
                return v404;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v322, v323, v324, v325, v326, v327, v329] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413] = svs;
              return (await ((async (_v405 ) => {
                  const v405 = stdlib.protect(ctc1, _v405, null);
                
                const v406 = stdlib.add(v405, v326);
                
                return v406;}))(...args));
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
  
  
  const [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc3, ctc3, ctc2]);
  const v417 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:155:14:application call to [unknown function] (defined at: ./index.rsh:155:14:function exp)', 'at ./index.rsh:155:14:application call to [unknown function] (defined at: ./index.rsh:155:14:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v418 = stdlib.gt(v327, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v418, {
    at: './index.rsh:155:23:application',
    fs: ['at ./index.rsh:155:14:application call to [unknown function] (defined at: ./index.rsh:155:14:function exp)', 'at ./index.rsh:155:14:application call to [unknown function] (defined at: ./index.rsh:155:14:function exp)', 'at ./index.rsh:155:14:application call to [unknown function] (defined at: ./index.rsh:155:14:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413, v417],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v340, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v421], secs: v423, time: v422, didSend: v202, from: v420 } = txn1;
      
      const v426 = stdlib.add(v350, v340);
      sim_r.txns.push({
        amt: v340,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v428 = null;
      const v429 = await txn1.getOutput('Api_buyTicket', 'v428', ctc5, v428);
      
      const v434 = stdlib.div(v340, v327);
      const v435 = stdlib.add(v340, v326);
      const v440 = stdlib.sub(v426, v434);
      sim_r.txns.push({
        amt: v434,
        kind: 'from',
        to: v322,
        tok: undefined
        });
      const v442 = stdlib.add(v342, v340);
      const v443 = stdlib.add(v339, v434);
      const v700 = v443;
      const v701 = v435;
      const v702 = v442;
      const v703 = v420;
      const v707 = v440;
      const v708 = ['Right', v413];
      const v709 = stdlib.add(v413, v325);
      const v710 = ['Right', v709];
      const v711 = stdlib.add(v423, v325);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc3, ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v421], secs: v423, time: v422, didSend: v202, from: v420 } = txn1;
  const v426 = stdlib.add(v350, v340);
  ;
  undefined;
  const v428 = null;
  const v429 = await txn1.getOutput('Api_buyTicket', 'v428', ctc5, v428);
  if (v202) {
    stdlib.protect(ctc5, await interact.out(v421, v429), {
      at: './index.rsh:154:11:application',
      fs: ['at ./index.rsh:154:11:application call to [unknown function] (defined at: ./index.rsh:154:11:function exp)', 'at ./index.rsh:159:21:application call to "callback" (defined at: ./index.rsh:157:22:function exp)', 'at ./index.rsh:157:22:application call to [unknown function] (defined at: ./index.rsh:157:22:function exp)'],
      msg: 'out',
      who: 'Api_buyTicket'
      });
    }
  else {
    }
  
  const v434 = stdlib.div(v340, v327);
  const v435 = stdlib.add(v340, v326);
  const v440 = stdlib.sub(v426, v434);
  ;
  const v442 = stdlib.add(v342, v340);
  const v443 = stdlib.add(v339, v434);
  const v700 = v443;
  const v701 = v435;
  const v702 = v442;
  const v703 = v420;
  const v707 = v440;
  const v708 = ['Right', v413];
  const v709 = stdlib.add(v413, v325);
  const v710 = ['Right', v709];
  const v711 = stdlib.add(v423, v325);
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
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
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
  const {data: [v323, v324, v325, v326, v327], secs: v329, time: v328, didSend: v50, from: v322 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v333, time: v332, didSend: v58, from: v331 } = txn2;
  ;
  ;
  const v337 = stdlib.addressEq(v322, v331);
  stdlib.assert(v337, {
    at: './index.rsh:113:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  let v338 = true;
  let v339 = stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
  let v340 = v323;
  let v342 = stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, 0);
  let v343 = v322;
  let v344 = v332;
  let v347 = v333;
  let v349 = v329;
  let v350 = stdlib.checkedBigNumberify('./index.rsh:100:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v338;})()) {
    const v391 = ['Right', v349];
    const v398 = stdlib.add(v349, v325);
    const v399 = ['Right', v398];
    const v413 = stdlib.add(v347, v325);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['secs', v413],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413],
        evt_cnt: 0,
        funcNum: 4,
        lct: v344,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:170:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v447, time: v446, didSend: v243, from: v445 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:170:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv338 = false;
          const cv339 = v339;
          const cv340 = v340;
          const cv342 = v342;
          const cv343 = v343;
          const cv344 = v446;
          const cv347 = v447;
          const cv349 = v413;
          const cv350 = v350;
          
          await (async () => {
            const v338 = cv338;
            const v339 = cv339;
            const v340 = cv340;
            const v342 = cv342;
            const v343 = cv343;
            const v344 = cv344;
            const v347 = cv347;
            const v349 = cv349;
            const v350 = cv350;
            
            if (await (async () => {
              
              return v338;})()) {
              const v391 = ['Right', v349];
              const v398 = stdlib.add(v349, v325);
              const v399 = ['Right', v398];
              const v413 = stdlib.add(v347, v325);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v350,
                kind: 'from',
                to: v343,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:175:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v343,
                tok: v324
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v324
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
      const {data: [], secs: v447, time: v446, didSend: v243, from: v445 } = txn4;
      ;
      const cv338 = false;
      const cv339 = v339;
      const cv340 = v340;
      const cv342 = v342;
      const cv343 = v343;
      const cv344 = v446;
      const cv347 = v447;
      const cv349 = v413;
      const cv350 = v350;
      
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      v342 = cv342;
      v343 = cv343;
      v344 = cv344;
      v347 = cv347;
      v349 = cv349;
      v350 = cv350;
      
      continue;
      }
    else {
      const {data: [v421], secs: v423, time: v422, didSend: v202, from: v420 } = txn3;
      const v426 = stdlib.add(v350, v340);
      ;
      undefined;
      const v427 = stdlib.gt(v327, stdlib.checkedBigNumberify('./index.rsh:158:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v427, {
        at: './index.rsh:158:20:application',
        fs: ['at ./index.rsh:157:22:application call to [unknown function] (defined at: ./index.rsh:157:22:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const v428 = null;
      await txn3.getOutput('Api_buyTicket', 'v428', ctc3, v428);
      const v434 = stdlib.div(v340, v327);
      const v435 = stdlib.add(v340, v326);
      stdlib.protect(ctc3, await interact.showPurchase(v420, v340, v435), {
        at: './index.rsh:164:51:application',
        fs: ['at ./index.rsh:164:23:application call to [unknown function] (defined at: ./index.rsh:164:27:function exp)', 'at ./index.rsh:157:22:application call to [unknown function] (defined at: ./index.rsh:157:22:function exp)'],
        msg: 'showPurchase',
        who: 'Buyer'
        });
      
      const v440 = stdlib.sub(v426, v434);
      ;
      const v442 = stdlib.add(v342, v340);
      const v443 = stdlib.add(v339, v434);
      const cv338 = true;
      const cv339 = v443;
      const cv340 = v435;
      const cv342 = v442;
      const cv343 = v420;
      const cv344 = v422;
      const cv347 = v423;
      const cv349 = v413;
      const cv350 = v440;
      
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      v342 = cv342;
      v343 = cv343;
      v344 = cv344;
      v347 = cv347;
      v349 = cv349;
      v350 = cv350;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v343), {
    at: './index.rsh:85:29:application',
    fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:32:function exp)', 'at ./index.rsh:177:16:application call to "showOutcome" (defined at: ./index.rsh:83:31:function exp)'],
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
  
  
  const v315 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:105:38:application',
    fs: ['at ./index.rsh:103:16:application call to [unknown function] (defined at: ./index.rsh:103:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v316 = v315.ticketPrice;
  const v317 = v315.nftPrize;
  const v318 = v315.deadline;
  const v319 = v315.unitPrice;
  const v320 = v315.ticketFeeDenominator;
  const v321 = stdlib.gt(v320, stdlib.checkedBigNumberify('./index.rsh:106:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v321, {
    at: './index.rsh:106:12:application',
    fs: ['at ./index.rsh:103:16:application call to [unknown function] (defined at: ./index.rsh:103:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v316, v317, v318, v319, v320],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:108:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v323, v324, v325, v326, v327], secs: v329, time: v328, didSend: v50, from: v322 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v324
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, 0),
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
  const {data: [v323, v324, v325, v326, v327], secs: v329, time: v328, didSend: v50, from: v322 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v322, v323, v324, v325, v326, v327, v329],
    evt_cnt: 0,
    funcNum: 1,
    lct: v328,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:113:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:113:18:decimal', stdlib.UInt_max, 1), v324]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v333, time: v332, didSend: v58, from: v331 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:113:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:113:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v324
        });
      const v337 = stdlib.addressEq(v322, v331);
      stdlib.assert(v337, {
        at: './index.rsh:113:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v338 = true;
      const v339 = stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
      const v340 = v323;
      const v342 = stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, 0);
      const v343 = v322;
      const v344 = v332;
      const v347 = v333;
      const v349 = v329;
      const v350 = stdlib.checkedBigNumberify('./index.rsh:100:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v338;})()) {
        const v391 = ['Right', v349];
        const v398 = stdlib.add(v349, v325);
        const v399 = ['Right', v398];
        const v413 = stdlib.add(v347, v325);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v350,
          kind: 'from',
          to: v343,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:175:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v343,
          tok: v324
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v324
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
  const {data: [], secs: v333, time: v332, didSend: v58, from: v331 } = txn2;
  ;
  ;
  const v337 = stdlib.addressEq(v322, v331);
  stdlib.assert(v337, {
    at: './index.rsh:113:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  let v338 = true;
  let v339 = stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
  let v340 = v323;
  let v342 = stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, 0);
  let v343 = v322;
  let v344 = v332;
  let v347 = v333;
  let v349 = v329;
  let v350 = stdlib.checkedBigNumberify('./index.rsh:100:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v338;})()) {
    const v391 = ['Right', v349];
    const v398 = stdlib.add(v349, v325);
    const v399 = ['Right', v398];
    const v413 = stdlib.add(v347, v325);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['secs', v413],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v322, v324, v325, v326, v327, v339, v340, v342, v343, v350, v391, v399, v413],
        evt_cnt: 0,
        funcNum: 4,
        lct: v344,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:170:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v447, time: v446, didSend: v243, from: v445 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:170:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv338 = false;
          const cv339 = v339;
          const cv340 = v340;
          const cv342 = v342;
          const cv343 = v343;
          const cv344 = v446;
          const cv347 = v447;
          const cv349 = v413;
          const cv350 = v350;
          
          await (async () => {
            const v338 = cv338;
            const v339 = cv339;
            const v340 = cv340;
            const v342 = cv342;
            const v343 = cv343;
            const v344 = cv344;
            const v347 = cv347;
            const v349 = cv349;
            const v350 = cv350;
            
            if (await (async () => {
              
              return v338;})()) {
              const v391 = ['Right', v349];
              const v398 = stdlib.add(v349, v325);
              const v399 = ['Right', v398];
              const v413 = stdlib.add(v347, v325);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v350,
                kind: 'from',
                to: v343,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:175:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v343,
                tok: v324
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v324
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
      const {data: [], secs: v447, time: v446, didSend: v243, from: v445 } = txn4;
      ;
      const cv338 = false;
      const cv339 = v339;
      const cv340 = v340;
      const cv342 = v342;
      const cv343 = v343;
      const cv344 = v446;
      const cv347 = v447;
      const cv349 = v413;
      const cv350 = v350;
      
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      v342 = cv342;
      v343 = cv343;
      v344 = cv344;
      v347 = cv347;
      v349 = cv349;
      v350 = cv350;
      
      continue;
      }
    else {
      const {data: [v421], secs: v423, time: v422, didSend: v202, from: v420 } = txn3;
      const v426 = stdlib.add(v350, v340);
      ;
      undefined;
      const v427 = stdlib.gt(v327, stdlib.checkedBigNumberify('./index.rsh:158:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v427, {
        at: './index.rsh:158:20:application',
        fs: ['at ./index.rsh:157:22:application call to [unknown function] (defined at: ./index.rsh:157:22:function exp)'],
        msg: null,
        who: 'Funder'
        });
      const v428 = null;
      await txn3.getOutput('Api_buyTicket', 'v428', ctc4, v428);
      const v434 = stdlib.div(v340, v327);
      const v435 = stdlib.add(v340, v326);
      const v440 = stdlib.sub(v426, v434);
      ;
      const v442 = stdlib.add(v342, v340);
      const v443 = stdlib.add(v339, v434);
      const cv338 = true;
      const cv339 = v443;
      const cv340 = v435;
      const cv342 = v442;
      const cv343 = v420;
      const cv344 = v422;
      const cv347 = v423;
      const cv349 = v413;
      const cv350 = v440;
      
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      v342 = cv342;
      v343 = cv343;
      v344 = cv344;
      v347 = cv347;
      v349 = cv349;
      v350 = cv350;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v343), {
    at: './index.rsh:85:29:application',
    fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:32:function exp)', 'at ./index.rsh:177:16:application call to "showOutcome" (defined at: ./index.rsh:83:31:function exp)'],
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
  appApproval: `BSARAAEEMCAoOEBICMzemsUNg6P4zw2Pj4zvBZIBUHigjQYmAwEAAQEAIjUAMRhBBI0qZEkiWzUBIQlbNQI2GgAXSUEAqiI1BCM1BkkhCgxAADBJIQsMQAAfIQsSRDQBJBJEKGQpZFA1AzYaARc0AyVbCBY1B0IELSEKEkQqNQVCAPlJIQwMQABDIQwSRDQBJBJEKGQpZFBJNQNXKAg0A1cgCFA0A1dICFA0A1dQCFA0A1dYIFA0A1dACFA0A1eACVA0A1eJCVA1B0ID2YGTub7UBBJENAEkEkQoZClkUDUDNhoBFzQDJVsIFjUHQgO2NhoBFzYaAhc1BDYaAzUFSYECDEABUEmBAwxAAUhJJAxAAGgkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQMhDVs1/4AEkSc087AyBzT/D0Q0A1cAIDQDIQRbNAMhBVs0AyVbNAMhBlsiNAMhB1s0AyEIWzQDIQ5bNANXWCAyBjIHNP80AyEPW0ICPUgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/zQDJVs1/jQDIQZbNf00AyEIWzX8NAMhDVs1+zQFNfqABMiaD7s0+lCwMgc0+wxENPxJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP0jDUSACAAAAAAAAAGssCo1BzT8NP0KNfk0+UlBAAyxsggjshA0/7IHsyJINP80AyEEWzQDIQVbNP40/SM0AyEHWzT5CDT8NP4INAMhDls0/AgxADIGMgc0+zQDIQ9bNPwINPkJQgFjSEkjDEAAg0gjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQVbNf6ABJqLkXSwI0lBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT/MQASRDT/NP40AyVbNAMhBls0AyEHWyMiNAMhBFsiNP8yBjIHNAMhCFsiQgDZSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BSEJWzX+NAWBEFs1/TQFgRhbNfw0BSEEWzX7gARNfgcnNP8WUDT+FlA0/RZQNPwWUDT7FlCwIRBJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIRBJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIrGyEiSyEDIKshQ0/rIRsyJIMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDIHFlAoSwFXAFBnSCM1ATIGNQIxGSISREIA4DX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI090EAZSk0/hZQNfEpNP409AgWUDXwNP009Ag17zTyNPMWUDT0FlA09RZQNPYWUDT4FlA0+RZQNPoWUDT7UDT/FlA08VA08FA07xZQKEsBVwB/ZylLAVd/G2dIJDUBMgY1AjEZIhJEQgBaNP9JQQAMsbIII7IQNPuyB7MiSCNJQQAQsbISJLIQNPuyFDTzshGzIkgisbISJLIQMgmyFTIKshQ087IRsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgAAKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
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
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v324",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v324",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v421",
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
    "name": "_reach_oe_v428",
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
        "name": "v724",
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
        "name": "v726",
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
                "name": "v421",
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
  Bytecode: `0x608060405260405162001fe538038062001fe583398101604081905262000026916200030b565b60008055436003556040805182518152602080840151805182840152908101516001600160a01b03168284015280830151606080840191909152810151608080840191909152015160a082015290517f9c9324d7149bcf6a6ca3ab97ab893e42f140b3a4679fb02d63f058d4f43ce5689181900360c00190a1620000ad3415600a620001d3565b620001006040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815281518301516001600160a01b03908116604080880191825284518101516060808a0191825286518101516080808c01918252975188015160a0808d019182524260c0808f019182526001600081905543905587519c8d019d909d529851958b01959095529451909516908801525194860194909452905192840192909252905192820192909252905160e08201526101000160405160208183030381529060405260029080519060200190620001ca929190620001fd565b505050620003e2565b81620001f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200020b90620003a5565b90600052602060002090601f0160209004810192826200022f57600085556200027a565b82601f106200024a57805160ff19168380011785556200027a565b828001600101855582156200027a579182015b828111156200027a5782518255916020019190600101906200025d565b50620002889291506200028c565b5090565b5b808211156200028857600081556001016200028d565b604080519081016001600160401b0381118282101715620002d457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620002d457634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200031f57600080fd5b62000329620002a3565b8351815260a0601f19830112156200034057600080fd5b6200034a620002da565b6020850151815260408501519092506001600160a01b03811681146200036f57600080fd5b80602084015250606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600181811c90821680620003ba57607f821691505b60208210811415620003dc57634e487b7160e01b600052602260045260246000fd5b50919050565b611bf380620003f26000396000f3fe60806040526004361061008f5760003560e01c806383230757116100565780638323075714610129578063a55605961461013e578063a7661d541461015e578063ab53f2c614610171578063e2186a081461019457005b80631e93b0f1146100985780632c10a159146100bc57806330a94db4146100cf5780636cdcb9df146100ef5780637a3678dd1461010757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046115a1565b6101a7565b3480156100db57600080fd5b506100a96100ea3660046115bd565b6101d2565b6100f7610364565b60405190151581526020016100b3565b34801561011357600080fd5b5061011c6103a2565b6040516100b3919061160d565b34801561013557600080fd5b506001546100a9565b34801561014a57600080fd5b506100a96101593660046115bd565b6105ab565b61009661016c3660046115a1565b61068e565b34801561017d57600080fd5b506101866106b5565b6040516100b39291906116b3565b6100966101a23660046115a1565b610752565b6040805160208101909152600081526101ce6101c836849003840184611764565b82610779565b5050565b60006001600054141561028f576000600280546101ee9061179c565b80601f016020809104026020016040519081016040528092919081815260200182805461021a9061179c565b80156102675780601f1061023c57610100808354040283529160200191610267565b820191906000526020600020905b81548152906001019060200180831161024a57829003601f168201915b505050505080602001905181019061027f91906117e8565b905061028d60006009610976565b505b60046000541415610353576000600280546102a99061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546102d59061179c565b80156103225780601f106102f757610100808354040283529160200191610322565b820191906000526020600020905b81548152906001019060200180831161030557829003601f168201915b505050505080602001905181019061033a91906118ff565b905080606001518361034c91906119e0565b9392505050565b61035f60006009610976565b919050565b604080516020810190915260008082529061037d61126b565b604080516020808201909252600081529082015261039b818361099c565b5051919050565b6103aa61129a565b60016000541415610465576000600280546103c49061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546103f09061179c565b801561043d5780601f106104125761010080835404028352916020019161043d565b820191906000526020600020905b81548152906001019060200180831161042057829003601f168201915b505050505080602001905181019061045591906117e8565b905061046360006007610976565b505b6004600054141561059c5760006002805461047f9061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab9061179c565b80156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b505050505080602001905181019061051091906118ff565b905061051a61132a565b60408083015182515260208084015183516001600160a01b0391821692019190915260c08085015184519093019290925260e080850151845160600152610100850151845192166080929092019190915260a0808501518451909101526101408401518351909201919091526101609092015181519092019190915251919050565b6105a860006007610976565b90565b600060016000541415610668576000600280546105c79061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546105f39061179c565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117e8565b905061066660006008610976565b505b60046000541415610682576000600280546102a99061179c565b61035f60006008610976565b6040805160208101909152600081526101ce6106af36849003840184611764565b82610c8e565b6000606060005460028080546106ca9061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546106f69061179c565b80156107435780601f1061071857610100808354040283529160200191610743565b820191906000526020600020905b81548152906001019060200180831161072657829003601f168201915b50505050509050915091509091565b6040805160208101909152600081526101ce610773368490038401846119f8565b8261099c565b610789600160005414600e610976565b81516107a490158061079d57508251600154145b600f610976565b6000808055600280546107b69061179c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e29061179c565b801561082f5780601f106108045761010080835404028352916020019161082f565b820191906000526020600020905b81548152906001019060200180831161081257829003601f168201915b505050505080602001905181019061084791906117e8565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16108953415600b610976565b6108af6108a83383604001516001610e7f565b600c610976565b80516108c7906001600160a01b03163314600d610976565b6108cf61133d565b815181516001600160a01b03918216905260408084015183519083166020918201526060808601518551840152608080870151865183015260a08088015187518301528387018051600190528051600090860181905294890151815190960195909552845190920183905286518451951694019390935281514393019290925280514260c091820152840151815160e0015251610100015261097081610e95565b50505050565b816101ce5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6109ac6004600054146012610976565b81516109c79015806109c057508251600154145b6013610976565b6000808055600280546109d99061179c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a059061179c565b8015610a525780601f10610a2757610100808354040283529160200191610a52565b820191906000526020600020905b815481529060010190602001808311610a3557829003601f168201915b5050505050806020019051810190610a6a91906118ff565b9050610a826040518060200160405280600081525090565b610a9482610180015142106014610976565b6040805185518152602080870151511515908201527f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a1610ae58260c0015134146010610976565b610af760018360800151116011610976565b604051600081527f054404e293f2bfeda4043624564fb74f520a968642ea8283d727e9a3f978390d9060200160405180910390a160008352608082015160c0830151610b439190611a7e565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610b7d573d6000803e3d6000fd5b50610b8661133d565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608085015183519091015260808085015183519091015281015160019052815160a0840151610be491906119e0565b6020808301510152606083015160c0840151610c0091906119e0565b60208201516040015260c083015160e0840151610c1d91906119e0565b6020820180516060019190915280513360809091015280514360a09091015280514260c091820152610180850151915160e00191909152825190840151610120850151610c6a91906119e0565b610c749190611aa0565b60208201516101000152610c8781610e95565b5050505050565b610c9e6004600054146016610976565b8151610cb9901580610cb257508251600154145b6017610976565b600080805560028054610ccb9061179c565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf79061179c565b8015610d445780601f10610d1957610100808354040283529160200191610d44565b820191906000526020600020905b815481529060010190602001808311610d2757829003601f168201915b5050505050806020019051810190610d5c91906118ff565b9050610d718161018001514210156018610976565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1610dbc34156015610976565b610dc461133d565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015283860180516000905260a08089015182519096019590955260c08089015182519095019490945260e080890151825190940193909352610100808901518251971696909201959095528451439401939093528351429201919091526101808501518351909101526101208401519151015261097081610e95565b6000610e8d8385308561106c565b949350505050565b610e9d6113ce565b60208201515115610ff25780516001908190525060208281015160e0015182516040015281015160019081905250815160400151602083015160e00151610ee491906119e0565b81602001516040018181525050816000015160400151826020015160c00151610f0d91906119e0565b6040820152610f1a611421565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015181870152838801805185015160a0880152805184015160c088015280519092015160e08701528151015190931661010080860191909152925190920151610120840152835161014084015283810151610160840152838201516101808401526004600055436001559051610fce91839101611ab7565b604051602081830303815290604052600290805190602001906109709291906114b3565b60208201516080810151610100909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611039573d6000803e3d6000fd5b506110568260000151602001518360200151608001516001611146565b600080805560018190556101ce90600290611537565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916110d391611b84565b60006040518083038185875af1925050503d8060008114611110576040519150601f19603f3d011682016040523d82523d6000602084013e611115565b606091505b50915091506111268282600161115f565b508080602001905181019061113b9190611ba0565b979650505050505050565b61115183838361119a565b61115a57600080fd5b505050565b6060831561116e57508161034c565b82511561117e5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610993565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916111f991611b84565b60006040518083038185875af1925050503d8060008114611236576040519150601f19603f3d011682016040523d82523d6000602084013e61123b565b606091505b509150915061124c8282600261115f565b50808060200190518101906112619190611ba0565b9695505050505050565b60405180604001604052806000815260200161129560405180602001604052806000151581525090565b905290565b6040518061010001604052806000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016113076040805160608101909152806000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b604051806020016040528061129561129a565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190815260200161129560405180610120016040528060001515815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040805160c081019091526000606082018181526080830182905260a083019190915281905b81526040805160608101825260008082526020828101829052928201529101908152602001600081525090565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016113f46040805160608101909152806000815260200160008152602001600081525090565b8280546114bf9061179c565b90600052602060002090601f0160209004810192826114e15760008555611527565b82601f106114fa57805160ff1916838001178555611527565b82800160010185558215611527579182015b8281111561152757825182559160200191906001019061150c565b50611533929150611574565b5090565b5080546115439061179c565b6000825580601f10611553575050565b601f0160209004906000526020600020908101906115719190611574565b50565b5b808211156115335760008155600101611575565b60006040828403121561159b57600080fd5b50919050565b6000604082840312156115b357600080fd5b61034c8383611589565b6000602082840312156115cf57600080fd5b5035919050565b8051600281106115f657634e487b7160e01b600052602160045260246000fd5b825260208181015190830152604090810151910152565b60006101808201905082518252602083015160018060a01b0380821660208501526040850151604085015260608501516060850152806080860151166080850152505060a083015160a083015260c083015161166c60c08401826115d6565b5060e08301516116806101208401826115d6565b5092915050565b60005b838110156116a257818101518382015260200161168a565b838111156109705750506000910152565b82815260406020820152600082518060408401526116d8816060850160208701611687565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff8111828210171561171e57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff8111828210171561171e57634e487b7160e01b600052604160045260246000fd5b801515811461157157600080fd5b60006040828403121561177657600080fd5b61177e6116ed565b82358152602083013561179081611756565b60208201529392505050565b600181811c908216806117b057607f821691505b6020821081141561159b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461035f57600080fd5b600060e082840312156117fa57600080fd5b60405160e0810181811067ffffffffffffffff8211171561182b57634e487b7160e01b600052604160045260246000fd5b604052611837836117d1565b81526020830151602082015261184f604084016117d1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006060828403121561189857600080fd5b6040516060810181811067ffffffffffffffff821117156118c957634e487b7160e01b600052604160045260246000fd5b80604052508091508251600281106118e057600080fd5b8082525060208301516020820152604083015160408201525092915050565b6000610220828403121561191257600080fd5b61191a611724565b611923836117d1565b8152611931602084016117d1565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006119808185016117d1565b90820152610120838101519082015261014061199e85828601611886565b908201526119b0846101a08501611886565b610160820152610200929092015161018083015250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119f3576119f36119ca565b500190565b60008183036040811215611a0b57600080fd5b611a136116ed565b833581526020601f1983011215611a2957600080fd5b60405191506020820182811067ffffffffffffffff82111715611a5c57634e487b7160e01b600052604160045260246000fd5b6040526020840135611a6d81611756565b825260208101919091529392505050565b600082611a9b57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611ab257611ab26119ca565b500390565b81516001600160a01b0316815261022081016020830151611ae360208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151611b3b828501826001600160a01b03169052565b5050610120838101519083015261014080840151611b5b828501826115d6565b5050610160830151611b716101a08401826115d6565b5061018083015161020083015292915050565b60008251611b96818460208701611687565b9190910192915050565b600060208284031215611bb257600080fd5b815161034c8161175656fea2646970667358221220f5bf02ea4573bb2aadedfc5ed2f4cfde48b14ba72b0f497cca1abaec75e2e33f64736f6c63430008090033`,
  BytecodeLen: 8165,
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

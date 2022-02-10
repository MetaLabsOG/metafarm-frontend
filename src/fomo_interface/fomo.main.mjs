// Automatically generated with Reach 0.1.8 (4bfdf20d)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (4bfdf20d)';
export const _backendVersion = 9;

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
  
  return {
    infos: {
      Fomo: {
        currentPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v172, v173, v174, v175, v176, v177] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = svs;
              return (await ((async () => {
                
                
                return v190;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        currentTotal: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v172, v173, v174, v175, v176, v177] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = svs;
              return (await ((async () => {
                
                
                return v192;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        currentWinner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v172, v173, v174, v175, v176, v177] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = svs;
              return (await ((async () => {
                
                
                return v193;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        deadline: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v172, v173, v174, v175, v176, v177] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = svs;
              return (await ((async () => {
                
                
                return v175;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        nftPrize: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v172, v173, v174, v175, v176, v177] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = svs;
              return (await ((async () => {
                
                
                return v174;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1],
      4: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2]);
  const v218 = stdlib.protect(ctc3, await interact.in(), {
    at: './fomo.rsh:1:23:application',
    fs: ['at ./fomo.rsh:117:14:application call to [unknown function] (defined at: ./fomo.rsh:117:14:function exp)', 'at ./fomo.rsh:117:14:application call to [unknown function] (defined at: ./fomo.rsh:117:14:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v219 = stdlib.gt(v177, stdlib.checkedBigNumberify('./fomo.rsh:117:47:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v219, {
    at: './fomo.rsh:117:23:application',
    fs: ['at ./fomo.rsh:117:14:application call to [unknown function] (defined at: ./fomo.rsh:117:14:function exp)', 'at ./fomo.rsh:117:14:application call to [unknown function] (defined at: ./fomo.rsh:117:14:function exp)', 'at ./fomo.rsh:117:14:application call to [unknown function] (defined at: ./fomo.rsh:117:14:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214, v218],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v190, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v222], secs: v224, time: v223, didSend: v91, from: v221 } = txn1;
      
      const v227 = stdlib.add(v200, v190);
      sim_r.txns.push({
        amt: v190,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v229 = null;
      const v230 = await txn1.getOutput('Api_buyTicket', 'v229', ctc4, v229);
      
      const v235 = stdlib.div(v190, v177);
      const v240 = stdlib.sub(v227, v235);
      sim_r.txns.push({
        amt: v235,
        kind: 'from',
        to: v172,
        tok: undefined
        });
      const v242 = stdlib.add(v192, v190);
      const v243 = stdlib.add(v190, v176);
      const v504 = v243;
      const v505 = v242;
      const v506 = v221;
      const v508 = v240;
      const v509 = stdlib.add(v223, v175);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v222], secs: v224, time: v223, didSend: v91, from: v221 } = txn1;
  const v227 = stdlib.add(v200, v190);
  ;
  undefined;
  const v229 = null;
  const v230 = await txn1.getOutput('Api_buyTicket', 'v229', ctc4, v229);
  if (v91) {
    stdlib.protect(ctc4, await interact.out(v222, v230), {
      at: './fomo.rsh:116:11:application',
      fs: ['at ./fomo.rsh:116:11:application call to [unknown function] (defined at: ./fomo.rsh:116:11:function exp)', 'at ./fomo.rsh:121:21:application call to "callback" (defined at: ./fomo.rsh:119:22:function exp)', 'at ./fomo.rsh:119:22:application call to [unknown function] (defined at: ./fomo.rsh:119:22:function exp)'],
      msg: 'out',
      who: 'Api_buyTicket'
      });
    }
  else {
    }
  
  const v235 = stdlib.div(v190, v177);
  const v240 = stdlib.sub(v227, v235);
  ;
  const v242 = stdlib.add(v192, v190);
  const v243 = stdlib.add(v190, v176);
  const v504 = v243;
  const v505 = v242;
  const v506 = v221;
  const v508 = v240;
  const v509 = stdlib.add(v223, v175);
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v173, v174, v175, v176, v177], secs: v179, time: v178, didSend: v38, from: v172 } = txn1;
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
  const {data: [], secs: v183, time: v182, didSend: v46, from: v181 } = txn2;
  ;
  ;
  const v187 = stdlib.addressEq(v172, v181);
  stdlib.assert(v187, {
    at: './fomo.rsh:84:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  let v188 = true;
  let v190 = v173;
  let v192 = stdlib.checkedBigNumberify('./fomo.rsh:88:41:decimal', stdlib.UInt_max, 0);
  let v193 = v172;
  let v194 = v182;
  let v200 = stdlib.checkedBigNumberify('./fomo.rsh:71:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v188;})()) {
    const v214 = stdlib.add(v194, v175);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v214],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214],
        evt_cnt: 0,
        funcNum: 4,
        lct: v194,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./fomo.rsh:131:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v248, time: v247, didSend: v131, from: v246 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./fomo.rsh:131:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv188 = false;
          const cv190 = v190;
          const cv192 = v192;
          const cv193 = v193;
          const cv194 = v247;
          const cv200 = v200;
          
          await (async () => {
            const v188 = cv188;
            const v190 = cv190;
            const v192 = cv192;
            const v193 = cv193;
            const v194 = cv194;
            const v200 = cv200;
            
            if (await (async () => {
              
              return v188;})()) {
              const v214 = stdlib.add(v194, v175);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v200,
                kind: 'from',
                to: v193,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./fomo.rsh:136:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v193,
                tok: v174
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v174
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
        tys: [ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v248, time: v247, didSend: v131, from: v246 } = txn4;
      ;
      const cv188 = false;
      const cv190 = v190;
      const cv192 = v192;
      const cv193 = v193;
      const cv194 = v247;
      const cv200 = v200;
      
      v188 = cv188;
      v190 = cv190;
      v192 = cv192;
      v193 = cv193;
      v194 = cv194;
      v200 = cv200;
      
      continue;
      }
    else {
      const {data: [v222], secs: v224, time: v223, didSend: v91, from: v221 } = txn3;
      const v227 = stdlib.add(v200, v190);
      ;
      undefined;
      const v228 = stdlib.gt(v177, stdlib.checkedBigNumberify('./fomo.rsh:120:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v228, {
        at: './fomo.rsh:120:20:application',
        fs: ['at ./fomo.rsh:119:22:application call to [unknown function] (defined at: ./fomo.rsh:119:22:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const v229 = null;
      await txn3.getOutput('Api_buyTicket', 'v229', ctc3, v229);
      const v235 = stdlib.div(v190, v177);
      stdlib.protect(ctc3, await interact.showPurchase(v221, v190), {
        at: './fomo.rsh:125:51:application',
        fs: ['at ./fomo.rsh:125:23:application call to [unknown function] (defined at: ./fomo.rsh:125:27:function exp)', 'at ./fomo.rsh:119:22:application call to [unknown function] (defined at: ./fomo.rsh:119:22:function exp)'],
        msg: 'showPurchase',
        who: 'Buyer'
        });
      
      const v240 = stdlib.sub(v227, v235);
      ;
      const v242 = stdlib.add(v192, v190);
      const v243 = stdlib.add(v190, v176);
      const cv188 = true;
      const cv190 = v243;
      const cv192 = v242;
      const cv193 = v221;
      const cv194 = v223;
      const cv200 = v240;
      
      v188 = cv188;
      v190 = cv190;
      v192 = cv192;
      v193 = cv193;
      v194 = cv194;
      v200 = cv200;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v193), {
    at: './fomo.rsh:66:29:application',
    fs: ['at ./fomo.rsh:65:11:application call to [unknown function] (defined at: ./fomo.rsh:65:32:function exp)', 'at ./fomo.rsh:138:16:application call to "showOutcome" (defined at: ./fomo.rsh:64:31:function exp)'],
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
  
  
  const v165 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './fomo.rsh:76:38:application',
    fs: ['at ./fomo.rsh:74:16:application call to [unknown function] (defined at: ./fomo.rsh:74:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v166 = v165.ticketPrice;
  const v167 = v165.nftPrize;
  const v168 = v165.deadline;
  const v169 = v165.unitPrice;
  const v170 = v165.ticketFeeDenominator;
  const v171 = stdlib.gt(v170, stdlib.checkedBigNumberify('./fomo.rsh:77:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v171, {
    at: './fomo.rsh:77:12:application',
    fs: ['at ./fomo.rsh:74:16:application call to [unknown function] (defined at: ./fomo.rsh:74:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v166, v167, v168, v169, v170],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./fomo.rsh:79:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./fomo.rsh:79:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v173, v174, v175, v176, v177], secs: v179, time: v178, didSend: v38, from: v172 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v174
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./fomo.rsh:79:12:decimal', stdlib.UInt_max, 0),
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
  const {data: [v173, v174, v175, v176, v177], secs: v179, time: v178, didSend: v38, from: v172 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v172, v173, v174, v175, v176, v177],
    evt_cnt: 0,
    funcNum: 1,
    lct: v178,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./fomo.rsh:84:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./fomo.rsh:84:18:decimal', stdlib.UInt_max, 1), v174]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v183, time: v182, didSend: v46, from: v181 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./fomo.rsh:84:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./fomo.rsh:84:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v174
        });
      const v187 = stdlib.addressEq(v172, v181);
      stdlib.assert(v187, {
        at: './fomo.rsh:84:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v188 = true;
      const v190 = v173;
      const v192 = stdlib.checkedBigNumberify('./fomo.rsh:88:41:decimal', stdlib.UInt_max, 0);
      const v193 = v172;
      const v194 = v182;
      const v200 = stdlib.checkedBigNumberify('./fomo.rsh:71:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v188;})()) {
        const v214 = stdlib.add(v194, v175);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v200,
          kind: 'from',
          to: v193,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./fomo.rsh:136:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v193,
          tok: v174
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v174
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
    tys: [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v183, time: v182, didSend: v46, from: v181 } = txn2;
  ;
  ;
  const v187 = stdlib.addressEq(v172, v181);
  stdlib.assert(v187, {
    at: './fomo.rsh:84:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  let v188 = true;
  let v190 = v173;
  let v192 = stdlib.checkedBigNumberify('./fomo.rsh:88:41:decimal', stdlib.UInt_max, 0);
  let v193 = v172;
  let v194 = v182;
  let v200 = stdlib.checkedBigNumberify('./fomo.rsh:71:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v188;})()) {
    const v214 = stdlib.add(v194, v175);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v214],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v172, v174, v175, v176, v177, v190, v192, v193, v200, v214],
        evt_cnt: 0,
        funcNum: 4,
        lct: v194,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./fomo.rsh:131:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v248, time: v247, didSend: v131, from: v246 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./fomo.rsh:131:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv188 = false;
          const cv190 = v190;
          const cv192 = v192;
          const cv193 = v193;
          const cv194 = v247;
          const cv200 = v200;
          
          await (async () => {
            const v188 = cv188;
            const v190 = cv190;
            const v192 = cv192;
            const v193 = cv193;
            const v194 = cv194;
            const v200 = cv200;
            
            if (await (async () => {
              
              return v188;})()) {
              const v214 = stdlib.add(v194, v175);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v200,
                kind: 'from',
                to: v193,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./fomo.rsh:136:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v193,
                tok: v174
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v174
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
        tys: [ctc5, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v248, time: v247, didSend: v131, from: v246 } = txn4;
      ;
      const cv188 = false;
      const cv190 = v190;
      const cv192 = v192;
      const cv193 = v193;
      const cv194 = v247;
      const cv200 = v200;
      
      v188 = cv188;
      v190 = cv190;
      v192 = cv192;
      v193 = cv193;
      v194 = cv194;
      v200 = cv200;
      
      continue;
      }
    else {
      const {data: [v222], secs: v224, time: v223, didSend: v91, from: v221 } = txn3;
      const v227 = stdlib.add(v200, v190);
      ;
      undefined;
      const v228 = stdlib.gt(v177, stdlib.checkedBigNumberify('./fomo.rsh:120:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v228, {
        at: './fomo.rsh:120:20:application',
        fs: ['at ./fomo.rsh:119:22:application call to [unknown function] (defined at: ./fomo.rsh:119:22:function exp)'],
        msg: null,
        who: 'Funder'
        });
      const v229 = null;
      await txn3.getOutput('Api_buyTicket', 'v229', ctc4, v229);
      const v235 = stdlib.div(v190, v177);
      const v240 = stdlib.sub(v227, v235);
      ;
      const v242 = stdlib.add(v192, v190);
      const v243 = stdlib.add(v190, v176);
      const cv188 = true;
      const cv190 = v243;
      const cv192 = v242;
      const cv193 = v221;
      const cv194 = v223;
      const cv200 = v240;
      
      v188 = cv188;
      v190 = cv190;
      v192 = cv192;
      v193 = cv193;
      v194 = cv194;
      v200 = cv200;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v193), {
    at: './fomo.rsh:66:29:application',
    fs: ['at ./fomo.rsh:65:11:application call to [unknown function] (defined at: ./fomo.rsh:65:32:function exp)', 'at ./fomo.rsh:138:16:application call to "showOutcome" (defined at: ./fomo.rsh:64:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    sigs: [`Api_buyTicket()byte[0]`]
    },
  appApproval: `BSANAAEEICgwOEAISHB4oI0GJgMAAQABASI1ADEYQQQFKGRJIls1ASEIWzUCNhoAF0lBABQiNQMjNQWBzN6axQ0SRCg1BEIApTYaARc2GgIXNQM2GgM1BEmBAgxAAXJJgQMMQAFqSSQMQACBJBJEJDQBEkQ0A0kiEkw0AhIRRClkKmRQSVcAIDX/SSVbNf5JIQRbNf1JIQVbNfxJIQZbNftJIQdbNfpJIQlbNflJV1AgNfhJIQpbNfdJIQtbNfZINARJFSISREiABJEnNPOwMgY09g9ENP80/jT9NPw0+yI0+jT5NPgyBjT3QgJRSCQ0ARJENANJIhJMNAISEUQpZCpkUElXACA1/0klWzX+SSEEWzX9SSEFWzX8SSEGWzX7SSEHWzX6SSEJWzX5SVdQIDX4SSEKWzX3SSELWzX2SDQESRUiEkRJNfVIgATImg+7NPVQsDIGNPYMRDT6SUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT7Iw1EgAgAAAAAAAAA5bAoSTUGNPo0+wo19DT0SUEADLGyCCOyEDT/sgezIkg0/zT+NP00/DT7IzT6NPwINPk0+ggxADIGNPc0+gg09AlCAW5ISSMMQACNSCM0ARJENANJIhJMNAISEUQpZElXACA1/0klWzX+SSEEWzX9SSEFWzX8SSEGWzX7SSEHWzX6SDQESRUiEkRIgASai5F0sCNJQQAlNABJIwg1AExLATgSEkQ0/UsBOBESRCRLATgQEkQyCksBOBQSREg0/zEAEkQ0/zT9NPw0+zT6IzT+IjT/MgYiQgDaSCI0ARJENANJIhJMNAISEUQoSDQESRUhBBJESSJbNf9JIQhbNf5JgRBbNf1JgRhbNfxJJVs1+0iABE1+Byc0/xZQNP4WUDT9FlA0/BZQNPsWULAhDElBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREghDElBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgisbISJLIQMgqyFDT+shGzIkgxADT/FlA0/hZQNP0WUDT8FlA0+xZQKUsBVwBIZ0gjNQEyBjUCMRkiEkRCAL81/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPpBAEo0/jT3CDX0NPU09hZQNPcWUDT4FlA0+RZQNPsWUDT8FlA0/VA0/xZQNPQWUClLAVcAf2cqSwFXfwFnSCQ1ATIGNQIxGSISREIAWjT/SUEADLGyCCOyEDT9sgezIkgjSUEAELGyEiSyEDT9shQ09rIRsyJIIrGyEiSyEDIJshUyCrIUNPayEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAACg0ARY0AhZQZzQFQQAKgAQVH3x1NAZQsDQASSMIMgQSRDEWEkQjQyJDMRkiEkQiNQEiNQJC/8k=`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v174",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v174",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "internalType": "struct T8",
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
                "name": "v222",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
        "internalType": "struct T8",
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
    "name": "_reach_oe_v229",
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
    "name": "Fomo_currentPrice",
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
    "name": "Fomo_currentTotal",
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
    "name": "Fomo_currentWinner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Fomo_deadline",
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
    "name": "Fomo_nftPrize",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
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
        "internalType": "struct T8",
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
                "name": "v222",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "struct T8",
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
  Bytecode: `0x608060405260405162001f1838038062001f188339810160408190526200002691620002eb565b60008055436003556040805182518152602080840151805182840152908101516001600160a01b03168284015280830151606080840191909152810151608080840191909152015160a082015290517f9c9324d7149bcf6a6ca3ab97ab893e42f140b3a4679fb02d63f058d4f43ce5689181900360c00190a1620000ad3415600c620001b3565b620000f96040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815281518301516001600160a01b03908116604080880191825284518101516060808a0191825286518101516080808c01918252975188015160a0808d01918252600160008190554390558551808c019c909c5297518b86015294519095169089015251948701949094529051918501919091525160c0808501919091528151808503909101815260e090930190528151620001aa926002920190620001dd565b505050620003c2565b81620001d95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001eb9062000385565b90600052602060002090601f0160209004810192826200020f57600085556200025a565b82601f106200022a57805160ff19168380011785556200025a565b828001600101855582156200025a579182015b828111156200025a5782518255916020019190600101906200023d565b50620002689291506200026c565b5090565b5b808211156200026857600081556001016200026d565b604080519081016001600160401b0381118282101715620002b457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620002b457634e487b7160e01b600052604160045260246000fd5b600081830360c0811215620002ff57600080fd5b6200030962000283565b8351815260a0601f19830112156200032057600080fd5b6200032a620002ba565b6020850151815260408501519092506001600160a01b03811681146200034f57600080fd5b80602084015250606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600181811c908216806200039a57607f821691505b60208210811415620003bc57634e487b7160e01b600052602260045260246000fd5b50919050565b611b4680620003d26000396000f3fe6080604052600436106100a55760003560e01c806393703f691161006157806393703f6914610154578063a7661d5414610169578063ab53f2c61461017c578063b5d2e7db1461019f578063d5c90921146101b4578063e2186a08146101c957005b80631509a94a146100ae5780631e93b0f1146100e057806329f9e2ba146100ff5780632c10a159146101145780636cdcb9df14610127578063832307571461013f57005b366100ac57005b005b3480156100ba57600080fd5b506100c36101dc565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100ec57600080fd5b506003545b6040519081526020016100d7565b34801561010b57600080fd5b506100c361035d565b6100ac6101223660046116a4565b6104db565b61012f610506565b60405190151581526020016100d7565b34801561014b57600080fd5b506001546100f1565b34801561016057600080fd5b506100f1610544565b6100ac6101773660046116a4565b6106c2565b34801561018857600080fd5b506101916106e9565b6040516100d79291906116ec565b3480156101ab57600080fd5b506100f1610786565b3480156101c057600080fd5b506100f1610904565b6100ac6101d73660046116a4565b610a82565b600060016000541415610299576000600280546101f890611726565b80601f016020809104026020016040519081016040528092919081815260200182805461022490611726565b80156102715780601f1061024657610100808354040283529160200191610271565b820191906000526020600020905b81548152906001019060200180831161025457829003601f168201915b505050505080602001905181019061028991906117e0565b90506102976000600b610aa9565b505b6004600054141561034e576000600280546102b390611726565b80601f01602080910402602001604051908101604052809291908181526020018280546102df90611726565b801561032c5780601f106103015761010080835404028352916020019161032c565b820191906000526020600020905b81548152906001019060200180831161030f57829003601f168201915b50505050508060200190518101906103449190611874565b6020015192915050565b61035a6000600b610aa9565b90565b60006001600054141561041a5760006002805461037990611726565b80601f01602080910402602001604051908101604052809291908181526020018280546103a590611726565b80156103f25780601f106103c7576101008083540402835291602001916103f2565b820191906000526020600020905b8154815290600101906020018083116103d557829003601f168201915b505050505080602001905181019061040a91906117e0565b905061041860006009610aa9565b505b600460005414156104cf5760006002805461043490611726565b80601f016020809104026020016040519081016040528092919081815260200182805461046090611726565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190611874565b60e0015192915050565b61035a60006009610aa9565b6040805160208101909152600081526105026104fc3684900384018461191b565b82610acf565b5050565b604080516020810190915260008082529061051f61150c565b604080516020808201909252600081529082015261053d8183610cb2565b5051919050565b6000600160005414156106015760006002805461056090611726565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90611726565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505050508060200190518101906105f191906117e0565b90506105ff6000600a610aa9565b505b600460005414156106b65760006002805461061b90611726565b80601f016020809104026020016040519081016040528092919081815260200182805461064790611726565b80156106945780601f1061066957610100808354040283529160200191610694565b820191906000526020600020905b81548152906001019060200180831161067757829003601f168201915b50505050508060200190518101906106ac9190611874565b6040015192915050565b61035a6000600a610aa9565b6040805160208101909152600081526105026106e33684900384018461191b565b82610f72565b6000606060005460028080546106fe90611726565b80601f016020809104026020016040519081016040528092919081815260200182805461072a90611726565b80156107775780601f1061074c57610100808354040283529160200191610777565b820191906000526020600020905b81548152906001019060200180831161075a57829003601f168201915b50505050509050915091509091565b600060016000541415610843576000600280546107a290611726565b80601f01602080910402602001604051908101604052809291908181526020018280546107ce90611726565b801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b505050505080602001905181019061083391906117e0565b905061084160006007610aa9565b505b600460005414156108f85760006002805461085d90611726565b80601f016020809104026020016040519081016040528092919081815260200182805461088990611726565b80156108d65780601f106108ab576101008083540402835291602001916108d6565b820191906000526020600020905b8154815290600101906020018083116108b957829003601f168201915b50505050508060200190518101906108ee9190611874565b60a0015192915050565b61035a60006007610aa9565b6000600160005414156109c15760006002805461092090611726565b80601f016020809104026020016040519081016040528092919081815260200182805461094c90611726565b80156109995780601f1061096e57610100808354040283529160200191610999565b820191906000526020600020905b81548152906001019060200180831161097c57829003601f168201915b50505050508060200190518101906109b191906117e0565b90506109bf60006008610aa9565b505b60046000541415610a76576000600280546109db90611726565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0790611726565b8015610a545780601f10610a2957610100808354040283529160200191610a54565b820191906000526020600020905b815481529060010190602001808311610a3757829003601f168201915b5050505050806020019051810190610a6c9190611874565b60c0015192915050565b61035a60006008610aa9565b604080516020810190915260008152610502610aa336849003840184611953565b82610cb2565b816105025760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610adf6001600054146010610aa9565b8151610afa901580610af357508251600154145b6011610aa9565b600080805560028054610b0c90611726565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3890611726565b8015610b855780601f10610b5a57610100808354040283529160200191610b85565b820191906000526020600020905b815481529060010190602001808311610b6857829003601f168201915b5050505050806020019051810190610b9d91906117e0565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1610beb3415600d610aa9565b610c05610bfe338360400151600161113c565b600e610aa9565b8051610c1d906001600160a01b03163314600f610aa9565b610c2561153b565b815181516001600160a01b03918216905260408084015183519083166020918201526060808601518551840152608080870151865183015260a08088015187518301528387018051600190528489015181519095019490945283516000950185905287518451961695909201949094528151439401939093525190910152610cac81611154565b50505050565b610cc26004600054146014610aa9565b8151610cdd901580610cd657508251600154145b6015610aa9565b600080805560028054610cef90611726565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1b90611726565b8015610d685780601f10610d3d57610100808354040283529160200191610d68565b820191906000526020600020905b815481529060010190602001808311610d4b57829003601f168201915b5050505050806020019051810190610d809190611874565b9050610d986040518060200160405280600081525090565b610daa82610120015143106016610aa9565b6040805185518152602080870151511515908201527f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a1610dfb8260a0015134146012610aa9565b610e0d60018360800151116013610aa9565b604051600081527f668eada883e31488442a8e95be817f6f3df9ec7e959dc9adc256de5b492761b69060200160405180910390a160008352608082015160a0830151610e5991906119ef565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610e93573d6000803e3d6000fd5b50610e9c61153b565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351909101526060808501805184519092019190915260808086015184519091015290820151600190525160a0840151610efe9190611a11565b602080830151015260a083015160c0840151610f1a9190611a11565b602082018051604001919091528051336060909101525143608090910152815160a0840151610100850151610f4f9190611a11565b610f599190611a29565b602082015160a00152610f6b81611154565b5050505050565b610f826004600054146018610aa9565b8151610f9d901580610f9657508251600154145b6019610aa9565b600080805560028054610faf90611726565b80601f0160208091040260200160405190810160405280929190818152602001828054610fdb90611726565b80156110285780601f10610ffd57610100808354040283529160200191611028565b820191906000526020600020905b81548152906001019060200180831161100b57829003601f168201915b50505050508060200190518101906110409190611874565b9050611055816101200151431015601a610aa9565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a16110a034156017610aa9565b6110a861153b565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015283860180516000905260a08089015182519096019590955260c088015181519094019390935260e087015183519516949091019390935280514393019290925261010084015191510152610cac81611154565b600061114a8385308561130d565b90505b9392505050565b60408051602081019091526000815260208201515115611294578151604001516020830151608001516111879190611a11565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091528251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015190860152828701805184015160a080880191909152815184015160c088015281519092015190941660e08601529251909201516101008401528351610120840152600460005543600155905161127091839101611a40565b60405160208183030381529060405260029080519060200190610cac9291906115b6565b6020820151606081015160a0909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156112da573d6000803e3d6000fd5b506112f782600001516020015183602001516060015160016113e7565b600080805560018190556105029060029061163a565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161137491611ad7565b60006040518083038185875af1925050503d80600081146113b1576040519150601f19603f3d011682016040523d82523d6000602084013e6113b6565b606091505b50915091506113c782826001611400565b50808060200190518101906113dc9190611af3565b979650505050505050565b6113f283838361143b565b6113fb57600080fd5b505050565b6060831561140f57508161114d565b82511561141f5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ac6565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161149a91611ad7565b60006040518083038185875af1925050503d80600081146114d7576040519150601f19603f3d011682016040523d82523d6000602084013e6114dc565b606091505b50915091506114ed82826002611400565b50808060200190518101906115029190611af3565b9695505050505050565b60405180604001604052806000815260200161153660405180602001604052806000151581525090565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526020016115366040518060c00160405280600015158152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8280546115c290611726565b90600052602060002090601f0160209004810192826115e4576000855561162a565b82601f106115fd57805160ff191683800117855561162a565b8280016001018555821561162a579182015b8281111561162a57825182559160200191906001019061160f565b50611636929150611677565b5090565b50805461164690611726565b6000825580601f10611656575050565b601f0160209004906000526020600020908101906116749190611677565b50565b5b808211156116365760008155600101611678565b60006040828403121561169e57600080fd5b50919050565b6000604082840312156116b657600080fd5b61114d838361168c565b60005b838110156116db5781810151838201526020016116c3565b83811115610cac5750506000910152565b82815260406020820152600082518060408401526117118160608501602087016116c0565b601f01601f1916919091016060019392505050565b600181811c9082168061173a57607f821691505b6020821081141561169e57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561178d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561178d57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146117db57600080fd5b919050565b600060c082840312156117f257600080fd5b60405160c0810181811067ffffffffffffffff8211171561182357634e487b7160e01b600052604160045260246000fd5b60405261182f836117c4565b815260208301516020820152611847604084016117c4565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561188757600080fd5b61188f61175b565b611898836117c4565b81526118a6602084016117c4565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526118e960e084016117c4565b60e08201526101008381015190820152610120928301519281019290925250919050565b801515811461167457600080fd5b60006040828403121561192d57600080fd5b611935611793565b8235815260208301356119478161190d565b60208201529392505050565b6000818303604081121561196657600080fd5b61196e611793565b833581526020601f198301121561198457600080fd5b60405191506020820182811067ffffffffffffffff821117156119b757634e487b7160e01b600052604160045260246000fd5b60405260208401356119c88161190d565b825260208101919091529392505050565b634e487b7160e01b600052601160045260246000fd5b600082611a0c57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611a2457611a246119d9565b500190565b600082821015611a3b57611a3b6119d9565b500390565b81516001600160a01b0316815261014081016020830151611a6c60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611ab960e08401826001600160a01b03169052565b50610100838101519083015261012092830151929091019190915290565b60008251611ae98184602087016116c0565b9190910192915050565b600060208284031215611b0557600080fd5b815161114d8161190d56fea26469706673582212200dd6861b5924b31c9860f94fc40dfdf9d03167ee41750ec10f6f6318c9bf669164736f6c63430008090033`,
  BytecodeLen: 7960,
  Which: `oD`,
  version: 6,
  views: {
    Fomo: {
      currentPrice: `Fomo_currentPrice`,
      currentTotal: `Fomo_currentTotal`,
      currentWinner: `Fomo_currentWinner`,
      deadline: `Fomo_deadline`,
      nftPrize: `Fomo_nftPrize`
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

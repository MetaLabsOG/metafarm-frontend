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
  const ctc3 = stdlib.T_Struct([['deadline', ctc1], ['deltaDeadline', ctc1], ['nftPrize', ctc2], ['currentPrice', ctc1], ['currentTotal', ctc1], ['currentWinner', ctc0], ['paidToFunder', ctc1], ['endTimestamp', ctc1]]);
  
  return {
    infos: {
      Fomo: {
        info: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v231, v232, v233, v234, v235, v236, v237, v239] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263] = svs;
              return (await ((async () => {
                
                const v271 = {
                  currentPrice: v253,
                  currentTotal: v255,
                  currentWinner: v256,
                  deadline: v234,
                  deltaDeadline: v235,
                  endTimestamp: v250,
                  nftPrize: v233,
                  paidToFunder: v252
                  };
                
                return v271;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        nextPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v231, v232, v233, v234, v235, v236, v237, v239] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263] = svs;
              return (await ((async (_v272 ) => {
                  const v272 = stdlib.protect(ctc1, _v272, null);
                
                const v273 = stdlib.add(v272, v236);
                
                return v273;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        prevPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v231, v232, v233, v234, v235, v236, v237, v239] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263] = svs;
              return (await ((async (_v274 ) => {
                  const v274 = stdlib.protect(ctc1, _v274, null);
                
                const v275 = stdlib.sub(v274, v236);
                
                return v275;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1]
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
  
  
  const [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2]);
  const v282 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:158:14:application call to [unknown function] (defined at: ./index.rsh:158:14:function exp)', 'at ./index.rsh:158:14:application call to [unknown function] (defined at: ./index.rsh:158:14:function exp)'],
    msg: 'in',
    who: 'Api_buyTicket'
    });
  const v283 = stdlib.gt(v237, stdlib.checkedBigNumberify('./index.rsh:158:47:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v283, {
    at: './index.rsh:158:23:application',
    fs: ['at ./index.rsh:158:14:application call to [unknown function] (defined at: ./index.rsh:158:14:function exp)', 'at ./index.rsh:158:14:application call to [unknown function] (defined at: ./index.rsh:158:14:function exp)', 'at ./index.rsh:158:14:application call to [unknown function] (defined at: ./index.rsh:158:14:function exp)'],
    msg: null,
    who: 'Api_buyTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263, v282],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v253, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v286], secs: v288, time: v287, didSend: v135, from: v285 } = txn1;
      
      const v291 = stdlib.add(v263, v253);
      sim_r.txns.push({
        amt: v253,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v293 = null;
      const v294 = await txn1.getOutput('Api_buyTicket', 'v293', ctc4, v293);
      
      const v299 = stdlib.div(v253, v237);
      const v300 = stdlib.add(v253, v236);
      const v305 = stdlib.sub(v291, v299);
      sim_r.txns.push({
        amt: v299,
        kind: 'from',
        to: v231,
        tok: undefined
        });
      const v307 = stdlib.add(v255, v253);
      const v308 = stdlib.add(v252, v299);
      const v309 = stdlib.add(v250, v235);
      const v555 = v309;
      const v557 = v308;
      const v558 = v300;
      const v559 = v307;
      const v560 = v285;
      const v562 = v305;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v286], secs: v288, time: v287, didSend: v135, from: v285 } = txn1;
  const v291 = stdlib.add(v263, v253);
  ;
  undefined;
  const v293 = null;
  const v294 = await txn1.getOutput('Api_buyTicket', 'v293', ctc4, v293);
  if (v135) {
    stdlib.protect(ctc4, await interact.out(v286, v294), {
      at: './index.rsh:157:11:application',
      fs: ['at ./index.rsh:157:11:application call to [unknown function] (defined at: ./index.rsh:157:11:function exp)', 'at ./index.rsh:162:21:application call to "callback" (defined at: ./index.rsh:160:22:function exp)', 'at ./index.rsh:160:22:application call to [unknown function] (defined at: ./index.rsh:160:22:function exp)'],
      msg: 'out',
      who: 'Api_buyTicket'
      });
    }
  else {
    }
  
  const v299 = stdlib.div(v253, v237);
  const v300 = stdlib.add(v253, v236);
  const v305 = stdlib.sub(v291, v299);
  ;
  const v307 = stdlib.add(v255, v253);
  const v308 = stdlib.add(v252, v299);
  const v309 = stdlib.add(v250, v235);
  const v555 = v309;
  const v557 = v308;
  const v558 = v300;
  const v559 = v307;
  const v560 = v285;
  const v562 = v305;
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
    evt_cnt: 6,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v232, v233, v234, v235, v236, v237], secs: v239, time: v238, didSend: v52, from: v231 } = txn1;
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
  const {data: [], secs: v243, time: v242, didSend: v60, from: v241 } = txn2;
  ;
  ;
  const v247 = stdlib.addressEq(v231, v241);
  stdlib.assert(v247, {
    at: './index.rsh:116:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v249 = stdlib.add(v239, v234);
  let v250 = v249;
  let v251 = true;
  let v252 = stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
  let v253 = v232;
  let v255 = stdlib.checkedBigNumberify('./index.rsh:120:41:decimal', stdlib.UInt_max, 0);
  let v256 = v231;
  let v257 = v242;
  let v263 = stdlib.checkedBigNumberify('./index.rsh:103:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v251;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['secs', v250],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263],
        evt_cnt: 0,
        funcNum: 4,
        lct: v257,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:173:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v313, time: v312, didSend: v175, from: v311 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:173:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv250 = v250;
          const cv251 = false;
          const cv252 = v252;
          const cv253 = v253;
          const cv255 = v255;
          const cv256 = v256;
          const cv257 = v312;
          const cv263 = v263;
          
          await (async () => {
            const v250 = cv250;
            const v251 = cv251;
            const v252 = cv252;
            const v253 = cv253;
            const v255 = cv255;
            const v256 = cv256;
            const v257 = cv257;
            const v263 = cv263;
            
            if (await (async () => {
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v263,
                kind: 'from',
                to: v256,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:178:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v256,
                tok: v233
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v233
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
        tys: [ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v313, time: v312, didSend: v175, from: v311 } = txn4;
      ;
      const cv250 = v250;
      const cv251 = false;
      const cv252 = v252;
      const cv253 = v253;
      const cv255 = v255;
      const cv256 = v256;
      const cv257 = v312;
      const cv263 = v263;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v255 = cv255;
      v256 = cv256;
      v257 = cv257;
      v263 = cv263;
      
      continue;
      }
    else {
      const {data: [v286], secs: v288, time: v287, didSend: v135, from: v285 } = txn3;
      const v291 = stdlib.add(v263, v253);
      ;
      undefined;
      const v292 = stdlib.gt(v237, stdlib.checkedBigNumberify('./index.rsh:161:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v292, {
        at: './index.rsh:161:20:application',
        fs: ['at ./index.rsh:160:22:application call to [unknown function] (defined at: ./index.rsh:160:22:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      const v293 = null;
      await txn3.getOutput('Api_buyTicket', 'v293', ctc3, v293);
      const v299 = stdlib.div(v253, v237);
      const v300 = stdlib.add(v253, v236);
      stdlib.protect(ctc3, await interact.showPurchase(v285, v253, v300), {
        at: './index.rsh:167:51:application',
        fs: ['at ./index.rsh:167:23:application call to [unknown function] (defined at: ./index.rsh:167:27:function exp)', 'at ./index.rsh:160:22:application call to [unknown function] (defined at: ./index.rsh:160:22:function exp)'],
        msg: 'showPurchase',
        who: 'Buyer'
        });
      
      const v305 = stdlib.sub(v291, v299);
      ;
      const v307 = stdlib.add(v255, v253);
      const v308 = stdlib.add(v252, v299);
      const v309 = stdlib.add(v250, v235);
      const cv250 = v309;
      const cv251 = true;
      const cv252 = v308;
      const cv253 = v300;
      const cv255 = v307;
      const cv256 = v285;
      const cv257 = v287;
      const cv263 = v305;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v255 = cv255;
      v256 = cv256;
      v257 = cv257;
      v263 = cv263;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v256), {
    at: './index.rsh:88:29:application',
    fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:32:function exp)', 'at ./index.rsh:180:16:application call to "showOutcome" (defined at: ./index.rsh:86:31:function exp)'],
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
    deltaDeadline: ctc0,
    nftPrize: ctc1,
    ticketFeeDenominator: ctc0,
    ticketPrice: ctc0,
    unitPrice: ctc0
    });
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v223 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:108:38:application',
    fs: ['at ./index.rsh:106:16:application call to [unknown function] (defined at: ./index.rsh:106:20:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v224 = v223.ticketPrice;
  const v225 = v223.nftPrize;
  const v226 = v223.deadline;
  const v227 = v223.deltaDeadline;
  const v228 = v223.unitPrice;
  const v229 = v223.ticketFeeDenominator;
  const v230 = stdlib.gt(v229, stdlib.checkedBigNumberify('./index.rsh:109:36:decimal', stdlib.UInt_max, 1));
  stdlib.assert(v230, {
    at: './index.rsh:109:12:application',
    fs: ['at ./index.rsh:106:16:application call to [unknown function] (defined at: ./index.rsh:106:20:function exp)'],
    msg: null,
    who: 'Funder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v224, v225, v226, v227, v228, v229],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:111:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:111:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v232, v233, v234, v235, v236, v237], secs: v239, time: v238, didSend: v52, from: v231 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v233
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:111:12:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v232, v233, v234, v235, v236, v237], secs: v239, time: v238, didSend: v52, from: v231 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v231, v232, v233, v234, v235, v236, v237, v239],
    evt_cnt: 0,
    funcNum: 1,
    lct: v238,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:116:18:decimal', stdlib.UInt_max, 1), v233]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v243, time: v242, didSend: v60, from: v241 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:116:12:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:116:18:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v233
        });
      const v247 = stdlib.addressEq(v231, v241);
      stdlib.assert(v247, {
        at: './index.rsh:116:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Funder'
        });
      const v249 = stdlib.add(v239, v234);
      const v250 = v249;
      const v251 = true;
      const v252 = stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
      const v253 = v232;
      const v255 = stdlib.checkedBigNumberify('./index.rsh:120:41:decimal', stdlib.UInt_max, 0);
      const v256 = v231;
      const v257 = v242;
      const v263 = stdlib.checkedBigNumberify('./index.rsh:103:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v251;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v263,
          kind: 'from',
          to: v256,
          tok: undefined
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:178:27:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v256,
          tok: v233
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v233
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
    tys: [ctc5, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v243, time: v242, didSend: v60, from: v241 } = txn2;
  ;
  ;
  const v247 = stdlib.addressEq(v231, v241);
  stdlib.assert(v247, {
    at: './index.rsh:116:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Funder'
    });
  const v249 = stdlib.add(v239, v234);
  let v250 = v249;
  let v251 = true;
  let v252 = stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
  let v253 = v232;
  let v255 = stdlib.checkedBigNumberify('./index.rsh:120:41:decimal', stdlib.UInt_max, 0);
  let v256 = v231;
  let v257 = v242;
  let v263 = stdlib.checkedBigNumberify('./index.rsh:103:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v251;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['secs', v250],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v231, v233, v234, v235, v236, v237, v250, v252, v253, v255, v256, v263],
        evt_cnt: 0,
        funcNum: 4,
        lct: v257,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:173:19:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v313, time: v312, didSend: v175, from: v311 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:173:19:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv250 = v250;
          const cv251 = false;
          const cv252 = v252;
          const cv253 = v253;
          const cv255 = v255;
          const cv256 = v256;
          const cv257 = v312;
          const cv263 = v263;
          
          await (async () => {
            const v250 = cv250;
            const v251 = cv251;
            const v252 = cv252;
            const v253 = cv253;
            const v255 = cv255;
            const v256 = cv256;
            const v257 = cv257;
            const v263 = cv263;
            
            if (await (async () => {
              
              return v251;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v263,
                kind: 'from',
                to: v256,
                tok: undefined
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:178:27:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v256,
                tok: v233
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v233
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
        tys: [ctc5, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc5, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v313, time: v312, didSend: v175, from: v311 } = txn4;
      ;
      const cv250 = v250;
      const cv251 = false;
      const cv252 = v252;
      const cv253 = v253;
      const cv255 = v255;
      const cv256 = v256;
      const cv257 = v312;
      const cv263 = v263;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v255 = cv255;
      v256 = cv256;
      v257 = cv257;
      v263 = cv263;
      
      continue;
      }
    else {
      const {data: [v286], secs: v288, time: v287, didSend: v135, from: v285 } = txn3;
      const v291 = stdlib.add(v263, v253);
      ;
      undefined;
      const v292 = stdlib.gt(v237, stdlib.checkedBigNumberify('./index.rsh:161:44:decimal', stdlib.UInt_max, 1));
      stdlib.assert(v292, {
        at: './index.rsh:161:20:application',
        fs: ['at ./index.rsh:160:22:application call to [unknown function] (defined at: ./index.rsh:160:22:function exp)'],
        msg: null,
        who: 'Funder'
        });
      const v293 = null;
      await txn3.getOutput('Api_buyTicket', 'v293', ctc4, v293);
      const v299 = stdlib.div(v253, v237);
      const v300 = stdlib.add(v253, v236);
      const v305 = stdlib.sub(v291, v299);
      ;
      const v307 = stdlib.add(v255, v253);
      const v308 = stdlib.add(v252, v299);
      const v309 = stdlib.add(v250, v235);
      const cv250 = v309;
      const cv251 = true;
      const cv252 = v308;
      const cv253 = v300;
      const cv255 = v307;
      const cv256 = v285;
      const cv257 = v287;
      const cv263 = v305;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v255 = cv255;
      v256 = cv256;
      v257 = cv257;
      v263 = cv263;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v256), {
    at: './index.rsh:88:29:application',
    fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:32:function exp)', 'at ./index.rsh:180:16:application call to "showOutcome" (defined at: ./index.rsh:86:31:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Api_buyTicket()byte[0]`],
    pure: [`Fomo_info()(uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`],
    sigs: [`Api_buyTicket()byte[0]`, `Fomo_info()(uint64,uint64,uint64,uint64,uint64,address,uint64,uint64)`, `Fomo_nextPrice(uint64)uint64`, `Fomo_prevPrice(uint64)uint64`]
    },
  appApproval: `BSASAAEEOCAoSDBAUAjM3prFDYOj+M8Nkp/OiA1YYIgBoI0GJgMBAAEBACI1ADEYQQSZKmRJIls1ASEKWzUCNhoAF0lBAKoiNQQjNQZJIQsMQAAwSSEMDEAAHyEMEkQ0ASQSRChkKWRQNQM2GgEXNAMlWwkWNQdCBDkhCxJEKjUFQgD8SSENDEAAQyENEkQ0ASQSRChkKWRQSTUDVygINANXMAhQNANXIAhQNANXWAhQNANXYAhQNANXaCBQNANXUAhQNANXSAhQNQdCA+WBk7m+1AQSRDQBJBJEKGQpZFA1AzYaARc0AyVbCBY1B0IDwjYaARc2GgIXNQQ2GgM1BUmBAgxAAV1JgQMMQAFVSSQMQABrJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQZbNf+ABJEnNPOwMgc0/w9ENANXACA0AyEEWzQDIQVbNAMhB1s0AyVbNAMhCFs0/yI0AyEJWzQDIQ5bNAMhD1s0A1doIDIGNAMhEFtCAmBIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf80AyEHWzX+NAMlWzX9NAMhCFs1/DQDIQZbNfs0AyEOWzX6NAU1+YAEyJoPuzT5ULAyBzT7DEQ0+klBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0/CMNRIAIAAAAAAAAASWwKjUHNPo0/Ao1+DT4SUEADLGyCCOyEDT/sgezIkg0/zQDIQRbNAMhBVs0/jT9NPw0+zT+CCM0AyEJWzT4CDT6NP0INAMhD1s0+ggxADIGNAMhEFs0+gg0+AlCAXxISSMMQACNSCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMhBVs1/jQDIQdbNf2ABJqLkXSwI0lBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT/MQASRDT/NP40/TQDJVs0AyEIWzQDIQZbNAMhCVs0/QgjIjQDIQRbIjT/MgYiQgDoSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BSEKWzX+NAWBEFs1/TQFgRhbNfw0BSEEWzX7NAUhBVs1+oAEisGMiDT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWULAhEUlBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREghEUlBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgisbISJLIQMgqyFDT+shGzIkgxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPoWUDIHFlAoSwFXAFhnSCM1ATIGNQIxGSISREIAxjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0+UEASzTyNPMWUDT0FlA09RZQNPYWUDT3FlA0+BZQNPoWUDT7FlA0/BZQNP1QNP8WUChLAVcAf2cpSwFXfxFnSCQ1ATIGNQIxGSISREIAWjT/SUEADLGyCCOyEDT9sgezIkgjSUEAELGyEiSyEDT9shQ087IRsyJIIrGyEiSyEDIJshUyCrIUNPOyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAACo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
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
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v233",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v236",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v233",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v234",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v235",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v236",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
        "internalType": "struct T9",
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
                "name": "v286",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T9",
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
    "name": "_reach_oe_v293",
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
        "internalType": "struct T0",
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
        "name": "v572",
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
        "name": "v574",
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
        "internalType": "struct T9",
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
                "name": "v286",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
        "internalType": "struct T9",
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
  Bytecode: `0x608060405260405162001f0338038062001f03833981016040819052620000269162000352565b60008055436003556040805182518152602080840151805182840152908101516001600160a01b0316828401528083015160608084019190915281015160808084019190915281015160a080840191909152015160c082015290517f1c0c65922e7dd6ee82b2e42174eb157e341e10bb7825843c68fae3cad93b44e89181900360e00190a1620000b93415600a6200021a565b6200011460405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b33815260208083018051518284015280518201516001600160a01b03166040808501919091528151810151606080860191909152825101516080808601919091528251015160a08086019190915291519091015160c08401524260e08401526001600081905543905551620001eb9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906200021192919062000244565b50505062000433565b81620002405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200025290620003f6565b90600052602060002090601f016020900481019282620002765760008555620002c1565b82601f106200029157805160ff1916838001178555620002c1565b82800160010185558215620002c1579182015b82811115620002c1578251825591602001919060010190620002a4565b50620002cf929150620002d3565b5090565b5b80821115620002cf5760008155600101620002d4565b604080519081016001600160401b03811182821017156200031b57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200031b57634e487b7160e01b600052604160045260246000fd5b600081830360e08112156200036657600080fd5b62000370620002ea565b8351815260c0601f19830112156200038757600080fd5b6200039162000321565b6020850151815260408501519092506001600160a01b0381168114620003b657600080fd5b80602084015250606084015160408301526080840151606083015260a0840151608083015260c084015160a0830152816020820152809250505092915050565b600181811c908216806200040b57607f821691505b602082108114156200042d57634e487b7160e01b600052602260045260246000fd5b50919050565b611ac080620004436000396000f3fe60806040526004361061008f5760003560e01c80638323075711610056578063832307571461018b578063a5560596146101a0578063a7661d54146101c0578063ab53f2c6146101d3578063e2186a08146101f657005b80631e93b0f1146100985780632c10a159146100bc57806330a94db4146100cf5780636cdcb9df146100ef5780637a3678dd1461010757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046115c4565b610209565b3480156100db57600080fd5b506100a96100ea3660046115e0565b610234565b6100f76103c6565b60405190151581526020016100b3565b34801561011357600080fd5b5061011c610404565b6040516100b391906000610100820190508251825260208301516020830152604083015160018060a01b03808216604085015260608501516060850152608085015160808501528060a08601511660a0850152505060c083015160c083015260e083015160e083015292915050565b34801561019757600080fd5b506001546100a9565b3480156101ac57600080fd5b506100a96101bb3660046115e0565b610608565b6100966101ce3660046115c4565b61078e565b3480156101df57600080fd5b506101e86107b5565b6040516100b3929190611625565b6100966102043660046115c4565b610852565b60408051602081019091526000815261023061022a368490038401846116d6565b82610879565b5050565b6000600160005414156102f1576000600280546102509061170e565b80601f016020809104026020016040519081016040528092919081815260200182805461027c9061170e565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b50505050508060200190518101906102e1919061175a565b90506102ef60006009610aa0565b505b600460005414156103b55760006002805461030b9061170e565b80601f01602080910402602001604051908101604052809291908181526020018280546103379061170e565b80156103845780601f1061035957610100808354040283529160200191610384565b820191906000526020600020905b81548152906001019060200180831161036757829003601f168201915b505050505080602001905181019061039c9190611806565b90508060800151836103ae91906118cd565b9392505050565b6103c160006009610aa0565b919050565b60408051602081019091526000808252906103df6113b2565b60408051602080820190925260008152908201526103fd8183610ac6565b5051919050565b61040c6113e1565b600160005414156104c7576000600280546104269061170e565b80601f01602080910402602001604051908101604052809291908181526020018280546104529061170e565b801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b50505050508060200190518101906104b7919061175a565b90506104c560006007610aa0565b505b600460005414156105f9576000600280546104e19061170e565b80601f016020809104026020016040519081016040528092919081815260200182805461050d9061170e565b801561055a5780601f1061052f5761010080835404028352916020019161055a565b820191906000526020600020905b81548152906001019060200180831161053d57829003601f168201915b50505050508060200190518101906105729190611806565b905061057c611438565b604080830151825152606080840151835160209081019190915284015183516001600160a01b039182169301929092526101008401518351909101526101208301518251608001526101408301518251911660a0919091015260e080830151825160c0908101919091529092015181519092019190915251919050565b61060560006007610aa0565b90565b6000600160005414156106c5576000600280546106249061170e565b80601f01602080910402602001604051908101604052809291908181526020018280546106509061170e565b801561069d5780601f106106725761010080835404028352916020019161069d565b820191906000526020600020905b81548152906001019060200180831161068057829003601f168201915b50505050508060200190518101906106b5919061175a565b90506106c360006008610aa0565b505b60046000541415610782576000600280546106df9061170e565b80601f016020809104026020016040519081016040528092919081815260200182805461070b9061170e565b80156107585780601f1061072d57610100808354040283529160200191610758565b820191906000526020600020905b81548152906001019060200180831161073b57829003601f168201915b50505050508060200190518101906107709190611806565b90508060800151836103ae91906118e4565b6103c160006008610aa0565b6040805160208101909152600081526102306107af368490038401846116d6565b82610dcc565b6000606060005460028080546107ca9061170e565b80601f01602080910402602001604051908101604052809291908181526020018280546107f69061170e565b80156108435780601f1061081857610100808354040283529160200191610843565b820191906000526020600020905b81548152906001019060200180831161082657829003601f168201915b50505050509050915091509091565b604080516020810190915260008152610230610873368490038401846118fc565b82610ac6565b610889600160005414600e610aa0565b81516108a490158061089d57508251600154145b600f610aa0565b6000808055600280546108b69061170e565b80601f01602080910402602001604051908101604052809291908181526020018280546108e29061170e565b801561092f5780601f106109045761010080835404028352916020019161092f565b820191906000526020600020905b81548152906001019060200180831161091257829003601f168201915b5050505050806020019051810190610947919061175a565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16109953415600b610aa0565b6109af6109a83383604001516001610fc1565b600c610aa0565b80516109c7906001600160a01b03163314600d610aa0565b6109cf61144b565b815181516001600160a01b039182169052604080840151835192166020909201919091526060808401805184519093019290925260808085015184519092019190915260a08085015184519092019190915260c08401518351909101525160e0830151610a3c91906118e4565b60208083018051929092528151600190820152815160006040909101819052908401518251606001528151608001819052835182516001600160a01b0390911660a09091015281514360c090910152905160e00152610a9a81610fd7565b50505050565b816102305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610ad66004600054146012610aa0565b8151610af1901580610aea57508251600154145b6013610aa0565b600080805560028054610b039061170e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2f9061170e565b8015610b7c5780601f10610b5157610100808354040283529160200191610b7c565b820191906000526020600020905b815481529060010190602001808311610b5f57829003601f168201915b5050505050806020019051810190610b949190611806565b9050610bac6040518060200160405280600081525090565b610bbd8260c0015142106014610aa0565b6040805185518152602080870151511515908201527f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a1610c0f82610100015134146010610aa0565b610c2160018360a00151116011610aa0565b604051600081527fc5fe40f855267cce9256c318e4073c395fabaa850d52784f70a770190590508a9060200160405180910390a16000835260a0820151610100830151610c6e9190611982565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610ca8573d6000803e3d6000fd5b50610cb161144b565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401805183519092019190915260808085015183519091015260a0808501518351909101525160c0840151610d1391906118e4565b602080830180519290925290516001910152815160e0840151610d3691906118e4565b6020820151604001526080830151610100840151610d5491906118e4565b602082015160600152610100830151610120840151610d7391906118e4565b6020820180516080019190915280513360a090910152514360c0909101528151610100840151610160850151610da991906118e4565b610db391906118cd565b602082015160e00152610dc581610fd7565b5050505050565b610ddc6004600054146016610aa0565b8151610df7901580610df057508251600154145b6017610aa0565b600080805560028054610e099061170e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e359061170e565b8015610e825780601f10610e5757610100808354040283529160200191610e82565b820191906000526020600020905b815481529060010190602001808311610e6557829003601f168201915b5050505050806020019051810190610e9a9190611806565b9050610eae8160c001514210156018610aa0565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a1610ef934156015610aa0565b610f0161144b565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152608080870151865182015260a080880151875182015260c0808901518689018051919091528051600097019690965260e0808a015187519096019590955261010089015186519094019390935261012088015185519092019190915261014087015184519516940193909352815143930192909252610160840151905190910152610a9a81610fd7565b6000610fcf838530856111b8565b949350505050565b8060200151602001511561113c5761106460405180610180016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015181860152855160809081015181870152865160a0908101518188015284880180515160c0890152805185015160e0808a0191909152815190940151610100890152805190920151610120880152815101519094166101408601529251909201516101608401526004600055436001559051611113918391016119a4565b604051602081830303815290604052600290805190602001906111379291906114dd565b505050565b602081015160a081015160e0909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611182573d6000803e3d6000fd5b5061119f816000015160200151826020015160a001516001611292565b600080805560018190556111b590600290611561565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161121f91611a51565b60006040518083038185875af1925050503d806000811461125c576040519150601f19603f3d011682016040523d82523d6000602084013e611261565b606091505b5091509150611272828260016112a6565b50808060200190518101906112879190611a6d565b979650505050505050565b61129d8383836112e1565b61113757600080fd5b606083156112b55750816103ae565b8251156112c55782518084602001fd5b60405163100960cb60e01b815260048101839052602401610abd565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161134091611a51565b60006040518083038185875af1925050503d806000811461137d576040519150601f19603f3d011682016040523d82523d6000602084013e611382565b606091505b5091509150611393828260026112a6565b50808060200190518101906113a89190611a6d565b9695505050505050565b6040518060400160405280600081526020016113dc60405180602001604052806000151581525090565b905290565b604051806101000160405280600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180602001604052806113dc6113e1565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016113dc6040518061010001604052806000815260200160001515815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8280546114e99061170e565b90600052602060002090601f01602090048101928261150b5760008555611551565b82601f1061152457805160ff1916838001178555611551565b82800160010185558215611551579182015b82811115611551578251825591602001919060010190611536565b5061155d929150611597565b5090565b50805461156d9061170e565b6000825580601f1061157d575050565b601f0160209004906000526020600020908101906111b591905b5b8082111561155d5760008155600101611598565b6000604082840312156115be57600080fd5b50919050565b6000604082840312156115d657600080fd5b6103ae83836115ac565b6000602082840312156115f257600080fd5b5035919050565b60005b838110156116145781810151838201526020016115fc565b83811115610a9a5750506000910152565b828152604060208201526000825180604084015261164a8160608501602087016115f9565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff8111828210171561169057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610180810167ffffffffffffffff8111828210171561169057634e487b7160e01b600052604160045260246000fd5b80151581146111b557600080fd5b6000604082840312156116e857600080fd5b6116f061165f565b823581526020830135611702816116c8565b60208201529392505050565b600181811c9082168061172257607f821691505b602082108114156115be57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146103c157600080fd5b600061010080838503121561176e57600080fd5b6040519081019067ffffffffffffffff8211818310171561179f57634e487b7160e01b600052604160045260246000fd5b816040526117ac84611743565b8152602084015160208201526117c460408501611743565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6000610180828403121561181957600080fd5b611821611696565b61182a83611743565b815261183860208401611743565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012080840151818301525061014061189f818501611743565b90820152610160928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156118df576118df6118b7565b500390565b600082198211156118f7576118f76118b7565b500190565b6000818303604081121561190f57600080fd5b61191761165f565b833581526020601f198301121561192d57600080fd5b60405191506020820182811067ffffffffffffffff8211171561196057634e487b7160e01b600052604160045260246000fd5b6040526020840135611971816116c8565b825260208101919091529392505050565b60008261199f57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b03168152610180810160208301516119d060208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151611a40828501826001600160a01b03169052565b505061016092830151919092015290565b60008251611a638184602087016115f9565b9190910192915050565b600060208284031215611a7f57600080fd5b81516103ae816116c856fea26469706673582212207f27f61ba136fe3899647c08753e99cdd3f84fda94fbe25058400ae07ac2ae5c64736f6c63430008090033`,
  BytecodeLen: 7939,
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

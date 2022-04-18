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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc5],
      3: [ctc0, ctc1, ctc1, ctc5, ctc2],
      5: [ctc0, ctc1, ctc1, ctc5, ctc2]
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
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
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
    rewardToken: ctc3,
    stakeToken: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    claim0_79: ctc5,
    stake0_79: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v464 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v465 = [v464, v464];
  const v471 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:24:70:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v472 = v471.stakeToken;
  const v473 = v471.rewardToken;
  const v474 = stdlib.tokenEq(v472, v473);
  const v475 = v474 ? false : true;
  stdlib.assert(v475, {
    at: './index.rsh:25:11:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v472, v473],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v477, v478], secs: v480, time: v479, didSend: v35, from: v476 } = txn1;
      
      const v481 = stdlib.tokenEq(v477, v478);
      const v482 = v481 ? false : true;
      ;
      const v483 = v465[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0')];
      const v485 = v483[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
      const v486 = v483[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '2')];
      const v487 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v485, v486];
      const v488 = stdlib.Array_set(v465, stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0'), v487);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v477
        });
      const v490 = v488[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
      const v492 = v490[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
      const v493 = v490[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '2')];
      const v494 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v492, v493];
      const v495 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1'), v494);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v478
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v477, v478], secs: v480, time: v479, didSend: v35, from: v476 } = txn1;
  const v481 = stdlib.tokenEq(v477, v478);
  const v482 = v481 ? false : true;
  stdlib.assert(v482, {
    at: './index.rsh:28:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v483 = v465[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0')];
  const v485 = v483[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
  const v486 = v483[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '2')];
  const v487 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v485, v486];
  const v488 = stdlib.Array_set(v465, stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0'), v487);
  ;
  const v490 = v488[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
  const v492 = v490[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1')];
  const v493 = v490[stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '2')];
  const v494 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v492, v493];
  const v495 = stdlib.Array_set(v488, stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '1'), v494);
  ;
  ;
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:30:28:application',
    fs: ['at ./index.rsh:30:28:application call to [unknown function] (defined at: ./index.rsh:30:28:function exp)', 'at ./index.rsh:30:28:application call to "liftedInteract" (defined at: ./index.rsh:30:28:application)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v476, v477, v478, v495],
    evt_cnt: 0,
    funcNum: 1,
    lct: v479,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:32:17:decimal', stdlib.UInt_max, '100'), v478], [stdlib.checkedBigNumberify('./index.rsh:32:37:decimal', stdlib.UInt_max, '1000'), v477]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v509, time: v508, didSend: v72, from: v507 } = txn2;
      
      ;
      const v519 = v495[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
      const v520 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
      const v521 = stdlib.add(v520, stdlib.checkedBigNumberify('./index.rsh:32:17:decimal', stdlib.UInt_max, '100'));
      const v524 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
      const v525 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '2')];
      const v526 = [v521, v524, v525];
      const v527 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1'), v526);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:32:17:decimal', stdlib.UInt_max, '100'),
        kind: 'to',
        tok: v478
        });
      const v528 = v527[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
      const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
      const v530 = stdlib.add(v529, stdlib.checkedBigNumberify('./index.rsh:32:37:decimal', stdlib.UInt_max, '1000'));
      const v533 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
      const v534 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '2')];
      const v535 = [v530, v533, v534];
      const v536 = stdlib.Array_set(v527, stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0'), v535);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:32:37:decimal', stdlib.UInt_max, '1000'),
        kind: 'to',
        tok: v477
        });
      const v537 = stdlib.addressEq(v476, v507);
      ;
      const v539 = v508;
      const v545 = v536;
      const v546 = stdlib.checkedBigNumberify('./index.rsh:21:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v509, time: v508, didSend: v72, from: v507 } = txn2;
  ;
  const v519 = v495[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
  const v520 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
  const v521 = stdlib.add(v520, stdlib.checkedBigNumberify('./index.rsh:32:17:decimal', stdlib.UInt_max, '100'));
  const v524 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
  const v525 = v519[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '2')];
  const v526 = [v521, v524, v525];
  const v527 = stdlib.Array_set(v495, stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1'), v526);
  ;
  const v528 = v527[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
  const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0')];
  const v530 = stdlib.add(v529, stdlib.checkedBigNumberify('./index.rsh:32:37:decimal', stdlib.UInt_max, '1000'));
  const v533 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '1')];
  const v534 = v528[stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '2')];
  const v535 = [v530, v533, v534];
  const v536 = stdlib.Array_set(v527, stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0'), v535);
  ;
  const v537 = stdlib.addressEq(v476, v507);
  stdlib.assert(v537, {
    at: './index.rsh:32:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v539 = v508;
  let v545 = v536;
  let v546 = stdlib.checkedBigNumberify('./index.rsh:21:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v611], secs: v613, time: v612, didSend: v283, from: v610 } = txn3;
    switch (v611[0]) {
      case 'claim0_79': {
        const v614 = v611[1];
        undefined /* setApiDetails */;
        ;
        const v659 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v664 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v665 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
        const v666 = [v660, v664, v665];
        const v667 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v666);
        ;
        const v668 = v667[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v669 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v673 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v674 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
        const v675 = [v669, v673, v674];
        const v676 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v675);
        ;
        const v678 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v610), null);
        const v679 = stdlib.fromSome(v678, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
        await txn3.getOutput('claim', 'v679', ctc1, v679);
        const v685 = v676[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '1')];
        const v686 = v685[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '0')];
        const v687 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:55:13:decimal', stdlib.UInt_max, '1'), v686);
        if (v687) {
          const v693 = stdlib.sub(v686, stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '1'));
          const v696 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1')];
          const v697 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '2')];
          const v698 = [v693, v696, v697];
          const v699 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1'), v698);
          ;
          const cv539 = v612;
          const cv545 = v699;
          const cv546 = v546;
          
          v539 = cv539;
          v545 = cv545;
          v546 = cv546;
          
          continue;}
        else {
          const cv539 = v612;
          const cv545 = v676;
          const cv546 = v546;
          
          v539 = cv539;
          v545 = cv545;
          v546 = cv546;
          
          continue;}
        break;
        }
      case 'stake0_79': {
        const v716 = v611[1];
        undefined /* setApiDetails */;
        const v728 = v716[stdlib.checkedBigNumberify('./index.rsh:41:9:spread', stdlib.UInt_max, '0')];
        ;
        const v761 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v762 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v763 = stdlib.add(v762, v728);
        const v766 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v767 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
        const v768 = [v763, v766, v767];
        const v769 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v768);
        ;
        const v770 = v769[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v771 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
        const v775 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
        const v776 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
        const v777 = [v771, v775, v776];
        const v778 = stdlib.Array_set(v769, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v777);
        ;
        const v806 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v610), null);
        const v807 = stdlib.fromSome(v806, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
        const v808 = stdlib.add(v807, v728);
        await stdlib.mapSet(map0, v610, v808);
        const v810 = v808;
        await txn3.getOutput('stake', 'v810', ctc1, v810);
        const cv539 = v612;
        const cv545 = v778;
        const cv546 = v546;
        
        v539 = cv539;
        v545 = cv545;
        v546 = cv546;
        
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v476, v477, v478, v545, v546],
    evt_cnt: 0,
    funcNum: 3,
    lct: v539,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v820, time: v819, didSend: v324, from: v818 } = txn3;
      
      ;
      const v821 = stdlib.addressEq(v476, v818);
      ;
      const v823 = v545[stdlib.checkedBigNumberify('./index.rsh:64:32:application', stdlib.UInt_max, '1')];
      const v824 = v823[stdlib.checkedBigNumberify('./index.rsh:64:32:application', stdlib.UInt_max, '0')];
      const v825 = v545[stdlib.checkedBigNumberify('./index.rsh:64:69:application', stdlib.UInt_max, '0')];
      const v826 = v825[stdlib.checkedBigNumberify('./index.rsh:64:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v546,
        kind: 'from',
        to: v476,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v824,
        kind: 'from',
        to: v476,
        tok: v478
        });
      sim_r.txns.push({
        amt: v826,
        kind: 'from',
        to: v476,
        tok: v477
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v478
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v477
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc3, ctc11, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v820, time: v819, didSend: v324, from: v818 } = txn3;
  ;
  const v821 = stdlib.addressEq(v476, v818);
  stdlib.assert(v821, {
    at: './index.rsh:63:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v823 = v545[stdlib.checkedBigNumberify('./index.rsh:64:32:application', stdlib.UInt_max, '1')];
  const v824 = v823[stdlib.checkedBigNumberify('./index.rsh:64:32:application', stdlib.UInt_max, '0')];
  const v825 = v545[stdlib.checkedBigNumberify('./index.rsh:64:69:application', stdlib.UInt_max, '0')];
  const v826 = v825[stdlib.checkedBigNumberify('./index.rsh:64:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_79: ctc8,
    stake0_79: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v476, v477, v478, v545, v546] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc7, ctc1]);
  const v558 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:9:application call to [unknown function] (defined at: ./index.rsh:51:9:function exp)', 'at ./index.rsh:37:38:application call to "runclaim0_79" (defined at: ./index.rsh:51:9:function exp)', 'at ./index.rsh:37:38:application call to [unknown function] (defined at: ./index.rsh:37:38:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v562 = ['claim0_79', v558];
  
  const txn1 = await (ctc.sendrecv({
    args: [v476, v477, v478, v545, v546, v562],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:9:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:40:14:decimal', stdlib.UInt_max, '0'), v477], [stdlib.checkedBigNumberify('./index.rsh:40:14:decimal', stdlib.UInt_max, '0'), v478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v611], secs: v613, time: v612, didSend: v283, from: v610 } = txn1;
      
      switch (v611[0]) {
        case 'claim0_79': {
          const v614 = v611[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v659 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v664 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v665 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
          const v666 = [v660, v664, v665];
          const v667 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v666);
          ;
          const v668 = v667[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v669 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v673 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v674 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
          const v675 = [v669, v673, v674];
          const v676 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v675);
          ;
          const v678 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v610), null);
          const v679 = stdlib.fromSome(v678, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
          const v680 = await txn1.getOutput('claim', 'v679', ctc1, v679);
          
          const v685 = v676[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '1')];
          const v686 = v685[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '0')];
          const v687 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:55:13:decimal', stdlib.UInt_max, '1'), v686);
          if (v687) {
            const v693 = stdlib.sub(v686, stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '1'));
            const v696 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1')];
            const v697 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '2')];
            const v698 = [v693, v696, v697];
            const v699 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1'), v698);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '1'),
              kind: 'from',
              to: v610,
              tok: v478
              });
            const v1113 = v699;
            const v1114 = v546;
            sim_r.isHalt = false;
            }
          else {
            const v1125 = v676;
            const v1126 = v546;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'stake0_79': {
          const v716 = v611[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v611], secs: v613, time: v612, didSend: v283, from: v610 } = txn1;
  switch (v611[0]) {
    case 'claim0_79': {
      const v614 = v611[1];
      undefined /* setApiDetails */;
      ;
      const v659 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v660 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v664 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v665 = v659[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
      const v666 = [v660, v664, v665];
      const v667 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v666);
      ;
      const v668 = v667[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v669 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v673 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v674 = v668[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
      const v675 = [v669, v673, v674];
      const v676 = stdlib.Array_set(v667, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v675);
      ;
      const v678 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v610), null);
      const v679 = stdlib.fromSome(v678, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
      const v680 = await txn1.getOutput('claim', 'v679', ctc1, v679);
      if (v283) {
        stdlib.protect(ctc0, await interact.out(v614, v680), {
          at: './index.rsh:52:7:application',
          fs: ['at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:54:17:application call to "callback" (defined at: ./index.rsh:53:18:function exp)', 'at ./index.rsh:53:18:application call to [unknown function] (defined at: ./index.rsh:53:18:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v685 = v676[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '1')];
      const v686 = v685[stdlib.checkedBigNumberify('./index.rsh:55:25:application', stdlib.UInt_max, '0')];
      const v687 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:55:13:decimal', stdlib.UInt_max, '1'), v686);
      if (v687) {
        const v693 = stdlib.sub(v686, stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '1'));
        const v696 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1')];
        const v697 = v685[stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '2')];
        const v698 = [v693, v696, v697];
        const v699 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./index.rsh:56:42:application', stdlib.UInt_max, '1'), v698);
        ;
        const v1113 = v699;
        const v1114 = v546;
        return;
        }
      else {
        const v1125 = v676;
        const v1126 = v546;
        return;
        }
      break;
      }
    case 'stake0_79': {
      const v716 = v611[1];
      return;
      break;
      }
    }
  
  
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    claim0_79: ctc9,
    stake0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v476, v477, v478, v545, v546] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc4, ctc7, ctc1]);
  const v549 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:11:function exp)', 'at ./index.rsh:37:38:application call to "runstake0_79" (defined at: ./index.rsh:41:9:function exp)', 'at ./index.rsh:37:38:application call to [unknown function] (defined at: ./index.rsh:37:38:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v550 = v549[stdlib.checkedBigNumberify('./index.rsh:41:9:spread', stdlib.UInt_max, '0')];
  const v554 = ['stake0_79', v549];
  
  const txn1 = await (ctc.sendrecv({
    args: [v476, v477, v478, v545, v546, v554],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:21:decimal', stdlib.UInt_max, '0'), [[v550, v477], [stdlib.checkedBigNumberify('./index.rsh:44:48:decimal', stdlib.UInt_max, '0'), v478]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v611], secs: v613, time: v612, didSend: v283, from: v610 } = txn1;
      
      switch (v611[0]) {
        case 'claim0_79': {
          const v614 = v611[1];
          
          break;
          }
        case 'stake0_79': {
          const v716 = v611[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v728 = v716[stdlib.checkedBigNumberify('./index.rsh:41:9:spread', stdlib.UInt_max, '0')];
          ;
          const v761 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v762 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v763 = stdlib.add(v762, v728);
          const v766 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v767 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
          const v768 = [v763, v766, v767];
          const v769 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v768);
          sim_r.txns.push({
            amt: v728,
            kind: 'to',
            tok: v477
            });
          const v770 = v769[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v771 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
          const v775 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
          const v776 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
          const v777 = [v771, v775, v776];
          const v778 = stdlib.Array_set(v769, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v777);
          ;
          const v806 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v610), null);
          const v807 = stdlib.fromSome(v806, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
          const v808 = stdlib.add(v807, v728);
          await stdlib.simMapSet(sim_r, 0, v610, v808);
          const v810 = v808;
          const v811 = await txn1.getOutput('stake', 'v810', ctc1, v810);
          
          const v1173 = v778;
          const v1174 = v546;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v611], secs: v613, time: v612, didSend: v283, from: v610 } = txn1;
  switch (v611[0]) {
    case 'claim0_79': {
      const v614 = v611[1];
      return;
      break;
      }
    case 'stake0_79': {
      const v716 = v611[1];
      undefined /* setApiDetails */;
      const v728 = v716[stdlib.checkedBigNumberify('./index.rsh:41:9:spread', stdlib.UInt_max, '0')];
      ;
      const v761 = v545[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v762 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v763 = stdlib.add(v762, v728);
      const v766 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v767 = v761[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
      const v768 = [v763, v766, v767];
      const v769 = stdlib.Array_set(v545, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0'), v768);
      ;
      const v770 = v769[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v771 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '0')];
      const v775 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1')];
      const v776 = v770[stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '2')];
      const v777 = [v771, v775, v776];
      const v778 = stdlib.Array_set(v769, stdlib.checkedBigNumberify('./index.rsh:37:38:dot', stdlib.UInt_max, '1'), v777);
      ;
      const v806 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v610), null);
      const v807 = stdlib.fromSome(v806, stdlib.checkedBigNumberify('./index.rsh:35:44:decimal', stdlib.UInt_max, '0'));
      const v808 = stdlib.add(v807, v728);
      await stdlib.mapSet(map0, v610, v808);
      const v810 = v808;
      const v811 = await txn1.getOutput('stake', 'v810', ctc1, v810);
      if (v283) {
        stdlib.protect(ctc0, await interact.out(v716, v811), {
          at: './index.rsh:42:7:application',
          fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:7:function exp)', 'at ./index.rsh:47:17:application call to "callback" (defined at: ./index.rsh:45:27:function exp)', 'at ./index.rsh:45:27:application call to [unknown function] (defined at: ./index.rsh:45:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v1173 = v778;
      const v1174 = v546;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`claim()uint64`, `stake(uint64)uint64`],
    pure: [],
    sigs: [`claim()uint64`, `stake(uint64)uint64`]
    },
  appApproval: `BiAOAAEECAUgKKCNBgmZ14rkDANSZOgHJgMBAAABASI1ADEYQQStKWRJIls1ASVbNQIxGSMSQQAKMQAoIQivZkIEejYaABdJQQAyIjUEIzUGSSEJDEAAESEJEkQpNf8oNP9QJa9QQgAxgeeLpq0JEkQ2GgE1/yo0/1BCAB02GgIXNQQ2GgM2GgEXSSEKDEACW0kkDEABpSQSRCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQZbNf1XMCI1/CELWzX7STUFNfqABNWOHas0+lCwNPoiVUAAyDT8VwARSTX5VwAINPlXCAhQNPlXEAFQNPxXERFQNfg0+FcRETX3NPhXABE091cACDT3VwgIUDT3VxABUFA19oAIAAAAAAAAAqciMQCIA6xJNfUjWzT1IlVNFlCwIjEAiAOZSTX1I1s09SJVTRY1BzT2VxERSTX1Ils19CM09A5BADexIrIBI7ISJLIQMQCyFDT9shGzNP80/jT9MgY09lcAETT0IwkWNPVXCAhQNPVXEAFQUDT7QgK6NP80/jT9MgY09jT7QgKrNPpXAQg1+TT5FzX4NPxXABFJNfciWzT4CBY091cICFA091cQAVA0/FcREVA19jT4NP6IAyU09lcRETX1IjEAiALxSTXzI1s08yJVTTT4CDX0MQAoKjT0FlBmgAgAAAAAAAADKjT0FlCwNPQWNQc0/zT+NP0yBjT2VwARNPVXAAg09VcICFA09VcQAVBQNPtCAhlIIQo0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9VzAiNfyABKdlxLSwNP8xABJEsSKyATQDIQtbsggjshA0/7IHs7EisgE0/FcRESJbshIkshA0/7IUNP2yEbOxIrIBNPxXABEiW7ISJLIQNP+yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IBmEkjDEAAmSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9VzAiNfyABJqLkXSwNPxXERE1+zT8VwARNPsiWyEMCBY0+1cICFA0+1cQAVBQNfohDDT9iAGzNPpXABE1+SENNP6IAaU0/zEAEkQ0/zT+NP0yBjT5IlshDQgWNPlXCAhQNPlXEAFQNPpXERFQIkIAykgiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwIQeIATCBEa9JNf1JUDX8NP80/hNENPxXABE1+yWvNPtXCAhQNPtXEAFQNPxXERFQNfohB4gA/rEisgEishIkshAyCrIUNP+yEbM0+lcRETX5NPpXABElrzT5VwgIUDT5VxABUFA1+CEHiADJsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0+FAoSwFXAFJnSCM1ATIGNQJCAEs1/zX+Nf01/DX7STX6NPsWUDT8FlA0/lA0/xZQKEsBVwBaZ0ghBDUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghCK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 90,
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
                "internalType": "address payable",
                "name": "v477",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v478",
                "type": "address"
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
                "internalType": "address payable",
                "name": "v477",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v478",
                "type": "address"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_79",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_stake0_79",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v611",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v679",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v810",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claim0_79",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_stake0_79",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v611",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
    "inputs": [],
    "name": "claim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "stake",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620021c0380380620021c08339810160408190526200002691620004c5565b600080554360035562000038620002bb565b604080518351815260208085015180516001600160a01b0390811683850152910151168183015290517f4016f23a910c3dc75be8566c3d72036bf3fd9b5ad6a5086ecc12e0d6b9b997999181900360600190a180516000908190528151602090810182905282516040019190915281518183018051919091528251905182015282810151908101519051620000ed916001600160a01b03918216911614620000e2576001620000e5565b60005b60076200020e565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200012f929062000238565b6060820190815260808201805160009052815160209081015181015182518201528251015160409081015182519015159101529051905162000175919060019062000238565b60a082015262000188341560086200020e565b6200019262000353565b33815260208084018051516001600160a01b039081168385015290518201511660408084019190915260a084015160608401526001600081905543905551620001de9183910162000550565b60405160208183030381529060405260029080519060200190620002049291906200037e565b5050505062000633565b81620002345760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002426200040d565b60005b600281101562000298578481600281106200026457620002646200053a565b60200201518282600281106200027e576200027e6200053a565b6020020152806200028f81620005cc565b91505062000245565b5081818460028110620002af57620002af6200053a565b60200201529392505050565b604080516101208101909152600060c0820181815260e08301829052610100830191909152815260208101620002f06200040d565b815260408051606081018252600080825260208281018290529282015291019081526020016200031f6200040d565b815260408051606081018252600080825260208281018290529282015291019081526020016200034e6200040d565b905290565b6040805160808101825260008082526020820181905291810191909152606081016200034e6200040d565b8280546200038c90620005f6565b90600052602060002090601f016020900481019282620003b05760008555620003fb565b82601f10620003cb57805160ff1916838001178555620003fb565b82800160010185558215620003fb579182015b82811115620003fb578251825591602001919060010190620003de565b50620004099291506200045a565b5090565b60405180604001604052806002905b62000443604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200041c5790505090565b5b808211156200040957600081556001016200045b565b604080519081016001600160401b0381118282101715620004a257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004c057600080fd5b919050565b60008183036060811215620004d957600080fd5b620004e362000471565b835181526040601f1983011215620004fa57600080fd5b6200050462000471565b91506200051460208501620004a8565b82526200052460408501620004a8565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501516101208501939192919083860160005b6002811015620005c057825180518352858101518684015284015115158483015291840191908501906001016200058e565b50505050505092915050565b6000600019821415620005ef57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200060b57607f821691505b602082108114156200062d57634e487b7160e01b600052602260045260246000fd5b50919050565b611b7d80620006436000396000f3fe6080604052600436106100845760003560e01c806373b4522c1161005657806373b4522c146100f9578063832307571461010c578063a64dbee714610121578063a694fc3a14610134578063ab53f2c61461014757005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c45780634e71d92d146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf36600461154d565b61016a565b3480156100d057600080fd5b506100e46100df36600461157a565b61019a565b6040516100a891906115cb565b61009e6101c6565b61008b61010736600461154d565b610249565b34801561011857600080fd5b5060015461009e565b61008b61012f3660046115fb565b610275565b61009e61014236600461160d565b6102a1565b34801561015357600080fd5b5061015c610331565b6040516100a8929190611652565b60408051808201909152600080825260208201526101966101903684900384018461171f565b826103ce565b5050565b60408051606081018252600080825260208201819052918101919091526101c082610652565b92915050565b60006101e5604051806040016040528060008152602001600081525090565b6101ed611223565b610219604080516060810182526000808252602080830182905283519081018452908152909182015290565b6000602082810182905290825260408051808301909152828152908301526102418284610724565b505051919050565b604080518082019091526000808252602082015261019661026f3684900384018461171f565b82610d2b565b604080518082019091526000808252602082015261019661029b36849003840184611757565b82610724565b60006102c0604051806040016040528060008152602001600081525090565b6102c8611223565b6102f4604080516060810182526000808252602080830182905283519081018452908152909182015290565b6040805160208082018352878252838301919091526001835281518082019092528282528301526103258284610724565b50506020015192915050565b600060606000546002808054610346906117ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610372906117ff565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b50505050509050915091509091565b6103de600160005414600d610ef1565b81516103f99015806103f257508251600154145b600e610ef1565b60008080556002805461040b906117ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610437906117ff565b80156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b505050505080602001905181019061049c91906118bd565b90506104a661126d565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a16104f134156009610ef1565b606082015160200151516105079060649061196e565b81515260608201805160209081015181015183518201528151015160409081015183519015159101525181516105409190600190610f17565b816020018190525061056261055b3384604001516064610f8b565b600a610ef1565b60208101515151610576906103e89061196e565b6040828101805192909252602080840180515182015184518301525151820151925192151592909101919091528201516105bf906105b89033906103e8610f8b565b600b610ef1565b81516105d7906001600160a01b03163314600c610ef1565b6105df6112c1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252808301514390528301519083015161062b9190600090610f17565b602080830180519091019190915251600060409091015261064b81610fa3565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561069e5761069e611597565b1415610715576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156106df576106df611597565b60018111156106f0576106f0611597565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6107346005600054146019610ef1565b815161074f90158061074857508251600154145b601a610ef1565b600080805560028054610761906117ff565b80601f016020809104026020016040519081016040528092919081815260200182805461078d906117ff565b80156107da5780601f106107af576101008083540402835291602001916107da565b820191906000526020600020905b8154815290600101906020018083116107bd57829003601f168201915b50505050508060200190518101906107f29190611986565b90506107fc6112f1565b7f76c855287860b97fc19dc1d5774be744633c98112e9441f8ed533af8d587d9248460405161082b9190611a17565b60405180910390a1600060208501515151600181111561084d5761084d611597565b1415610b115761085f34156013610ef1565b6060820180515151825152805151602090810151835190910152805151604090810151835190151591015251815161089a9190600090610f17565b81602001819052506108bc6108b53384602001516000610f8b565b6014610ef1565b602081810180518201515160408085018051929092528251840151840151825185015282519093015183015181519015159301929092525190516109039190600190610f17565b816060018190525061092561091e3384604001516000610f8b565b6015610ef1565b7f141c3ab5762c018eaf85f18d893d029c777f9dcd666c8dc48ae2c5f81f139f2d600161095133610652565b51600181111561096357610963611597565b1461096f57600061097d565b61097833610652565b604001515b60405190815260200160405180910390a1600161099933610652565b5160018111156109ab576109ab611597565b146109b75760006109c5565b6109c033610652565b604001515b835260608101516020015151600111610aae57606081015160200151516109ee90600190611a57565b60808201805191909152606082018051602090810151810151835182015290510151604090810151915191151591810191909152820151610a3190336001611029565b610a396112c1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692019190915281015143905260608201516080830151610a869190600190610f17565b60208083018051909101919091526080840151905160400152610aa881610fa3565b50610d25565b610ab66112c1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252808301805143905260608501518151909201919091526080850151905190910152610aa881610fa3565b6001602085015151516001811115610b2b57610b2b611597565b1415610d25576020840151516040015160a0820152610b4c34156016610ef1565b60a08101515160608301515151610b63919061196e565b60c08201805191909152606083018051516020908101518351909101528051516040908101518351901515910152519051610ba19190600090610f17565b60e0820152602082015160a082015151610bc891610bc191339190610f8b565b6017610ef1565b60e0810180516020908101515161010084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151610c1e90610c179033906000610f8b565b6018610ef1565b60a0810151516001610c2f33610652565b516001811115610c4157610c41611597565b14610c4d576000610c5b565b610c5633610652565b604001515b610c65919061196e565b610120820190815233600090815260046020908152604091829020805460ff1916600190811782559351930183905590519182527f52e7c1c8bd5009d57074df128873c4593ec54d4cc022093ac6c66180d4e76b41910160405180910390a16101208101516020840152610cd76112c1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692019190915281015143905260e0820151610100830151610a869190600190610f17565b50505050565b610d3b6003600054146011610ef1565b8151610d56901580610d4f57508251600154145b6012610ef1565b600080805560028054610d68906117ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610d94906117ff565b8015610de15780601f10610db657610100808354040283529160200191610de1565b820191906000526020600020905b815481529060010190602001808311610dc457829003601f168201915b5050505050806020019051810190610df99190611986565b60408051855181526020808701511515908201529192507f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09910160405180910390a1610e473415600f610ef1565b8051610e5f906001600160a01b031633146010610ef1565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e9c573d6000803e3d6000fd5b50604081015181516060830151610ebd92919060015b602002015151611029565b602081015181516060830151610ed69291906000610eb2565b60008080556001819055610eec906002906113e9565b505050565b816101965760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610f1f611426565b60005b6002811015610f6b57848160028110610f3d57610f3d611942565b6020020151828260028110610f5457610f54611942565b602002015280610f6381611a6e565b915050610f22565b5081818460028110610f7f57610f7f611942565b60200201529392505050565b6000610f998385308561103d565b90505b9392505050565b610fab611471565b8151516001600160a01b039081168252825160209081015182168184015283516040908101519092168284015280840180518201516060850152518201516080840152600560005543600155905161100591839101611a89565b60405160208183030381529060405260029080519060200190610eec92919061149a565b611034838383611117565b610eec57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916110a491611b0e565b60006040518083038185875af1925050503d80600081146110e1576040519150601f19603f3d011682016040523d82523d6000602084013e6110e6565b606091505b50915091506110f7828260016111e8565b508080602001905181019061110c9190611b2a565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161117691611b0e565b60006040518083038185875af1925050503d80600081146111b3576040519150601f19603f3d011682016040523d82523d6000602084013e6111b8565b606091505b50915091506111c9828260026111e8565b50808060200190518101906111de9190611b2a565b9695505050505050565b606083156111f7575081610f9c565b8251156112075782518084602001fd5b60405163100960cb60e01b815260048101839052602401610f0e565b60405180604001604052806000815260200161126860408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b6040805160c081019091526000606082018181526080830182905260a083019190915281526020810161129e611426565b815260408051606081018252600080825260208281018290529282015291015290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161126861151e565b604080516101a08101909152600061014082018181526101608301829052610180830191909152815260208101611326611426565b81526040805160608101825260008082526020828101829052928201529101908152602001611353611426565b8152604080516060810182526000808252602082810182905292820152910190815260200161138e6040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016113bb611426565b81526040805160608101825260008082526020828101829052928201529101905b8152602001600081525090565b5080546113f5906117ff565b6000825580601f10611405575050565b601f0160209004906000526020600020908101906114239190611538565b50565b60405180604001604052806002905b61145b604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816114355790505090565b6040805160a08101825260008082526020820181905291810191909152606081016113dc611426565b8280546114a6906117ff565b90600052602060002090601f0160209004810192826114c8576000855561150e565b82601f106114e157805160ff191683800117855561150e565b8280016001018555821561150e579182015b8281111561150e5782518255916020019190600101906114f3565b5061151a929150611538565b5090565b6040518060600160405280600081526020016113dc611426565b5b8082111561151a5760008155600101611539565b60006040828403121561155f57600080fd5b50919050565b6001600160a01b038116811461142357600080fd5b60006020828403121561158c57600080fd5b8135610f9c81611565565b634e487b7160e01b600052602160045260246000fd5b6002811061142357634e487b7160e01b600052602160045260246000fd5b815160608201906115db816115ad565b808352506020830151151560208301526040830151604083015292915050565b60006080828403121561155f57600080fd5b60006020828403121561161f57600080fd5b5035919050565b60005b83811015611641578181015183820152602001611629565b83811115610d255750506000910152565b8281526040602082015260008251806040840152611677816060850160208701611626565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156116c5576116c561168c565b60405290565b6040516020810167ffffffffffffffff811182821017156116c5576116c561168c565b6040516060810167ffffffffffffffff811182821017156116c5576116c561168c565b801515811461142357600080fd5b60006040828403121561173157600080fd5b6117396116a2565b82358152602083013561174b81611711565b60208201529392505050565b6000818303608081121561176a57600080fd5b6117726116a2565b833581526060601f198301121561178857600080fd5b6117906116cb565b6117986116ee565b6020860135600281106117aa57600080fd5b815260408601356117ba81611711565b806020830152506020605f19850112156117d357600080fd5b6117db6116cb565b60609690960135865260408101959095529384526020810193909352509092915050565b600181811c9082168061181357607f821691505b6020821081141561155f57634e487b7160e01b600052602260045260246000fd5b600082601f83011261184557600080fd5b61184d6116a2565b8060c084018581111561185f57600080fd5b845b818110156118b2576060818803121561187a5760008081fd5b6118826116ee565b815181526020808301518183015260408084015161189f81611711565b9083015290855290930192606001611861565b509095945050505050565b600061012082840312156118d057600080fd5b6040516080810181811067ffffffffffffffff821117156118f3576118f361168c565b604052825161190181611565565b8152602083015161191181611565565b6020820152604083015161192481611565565b60408201526119368460608501611834565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561198157611981611958565b500190565b6000610140828403121561199957600080fd5b60405160a0810181811067ffffffffffffffff821117156119bc576119bc61168c565b60405282516119ca81611565565b815260208301516119da81611565565b602082015260408301516119ed81611565565b60408201526119ff8460608501611834565b60608201526101209290920151608083015250919050565b815181526020820151518051608083019190611a32816115ad565b8060208501525060208101511515604084015260408101515160608401525092915050565b600082821015611a6957611a69611958565b500390565b6000600019821415611a8257611a82611958565b5060010190565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501516101408501939192919083860160005b6002811015611af75782518051835285810151868401528401511515848301529184019190850190600101611ac7565b505050505050608083015161012083015292915050565b60008251611b20818460208701611626565b9190910192915050565b600060208284031215611b3c57600080fd5b8151610f9c8161171156fea26469706673582212204d858c8a61e6d40bd9042d85c823b196f28a5623a7f074e3b86dca01f497d83f64736f6c634300080c0033`,
  BytecodeLen: 8640,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:37:38:after expr stmt semicolon',
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
  "Creator": Creator,
  "claim": claim,
  "stake": stake
  };
export const _APIs = {
  claim: claim,
  stake: stake
  };

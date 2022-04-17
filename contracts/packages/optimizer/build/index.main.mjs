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
    staked: [ctc0, ctc1],
    unstaked: [ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Struct([['lastUpdateBlock', ctc3]]);
  const ctc8 = stdlib.T_Struct([['stakeToken', ctc1], ['rewardToken', ctc1], ['underlyingFarmId', ctc2], ['creatorFee', ctc3]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc3]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc3
    });
  const map0_ctc = ctc11;
  
  
  return {
    infos: {
      global: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async () => {
              
              const v791 = {
                lastUpdateBlock: v475
                };
              
              return v791;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async () => {
              
              const v489 = {
                lastUpdateBlock: v475
                };
              
              return v489;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async () => {
              
              const v469 = {
                creatorFee: v446,
                rewardToken: v444,
                stakeToken: v443,
                underlyingFarmId: v445
                };
              
              return v469;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async () => {
              
              const v469 = {
                creatorFee: v446,
                rewardToken: v444,
                stakeToken: v443,
                underlyingFarmId: v445
                };
              
              return v469;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async (_v470 ) => {
                const v470 = stdlib.protect(ctc0, _v470, null);
              
              const v471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v470), null);
              const v472 = stdlib.fromSome(v471, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
              const v473 = {
                staked: v472
                };
              
              return v473;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v442, v443, v444, v445, v446, v475, v479, v480] = svs;
            return (await ((async (_v470 ) => {
                const v470 = stdlib.protect(ctc0, _v470, null);
              
              const v471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v470), null);
              const v472 = stdlib.fromSome(v471, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
              const v473 = {
                staked: v472
                };
              
              return v473;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      2: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3],
      4: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3]
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
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Object({
    creatorFee: ctc1,
    rewardToken: ctc3,
    stakeToken: ctc3,
    underlyingFarmId: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    stake0_81: ctc6,
    unstake0_81: ctc6
    });
  const ctc8 = stdlib.T_Struct([['staked', ctc1]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc9]);
  const ctc11 = stdlib.T_Address;
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
  
  
  const v428 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v429 = [v428, v428];
  const v435 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './index.rsh:98:38:application',
    fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v436 = v435.stakeToken;
  const v437 = v435.rewardToken;
  const v438 = v435.underlyingFarmId;
  const v439 = v435.creatorFee;
  const v440 = stdlib.tokenEq(v436, v437);
  const v441 = v440 ? false : true;
  stdlib.assert(v441, {
    at: './index.rsh:100:11:application',
    fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v436, v437, v438, v439],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v40, from: v442 } = txn1;
      
      const v449 = stdlib.tokenEq(v443, v444);
      const v450 = v449 ? false : true;
      ;
      const v451 = v429[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0')];
      const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
      const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
      const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
      const v456 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0'), v455);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v443
        });
      const v458 = v456[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
      const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
      const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
      const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
      const v463 = stdlib.Array_set(v456, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1'), v462);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v444
        });
      ;
      
      const v475 = stdlib.checkedBigNumberify('./index.rsh:155:5:decimal', stdlib.UInt_max, '0');
      const v477 = v447;
      const v479 = v463;
      const v480 = stdlib.checkedBigNumberify('./index.rsh:89:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
    tys: [ctc3, ctc3, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v40, from: v442 } = txn1;
  const v449 = stdlib.tokenEq(v443, v444);
  const v450 = v449 ? false : true;
  stdlib.assert(v450, {
    at: './index.rsh:104:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v451 = v429[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0')];
  const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
  const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
  const v456 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0'), v455);
  ;
  const v458 = v456[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
  const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
  const v463 = stdlib.Array_set(v456, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1'), v462);
  ;
  ;
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:119:22:application',
    fs: ['at ./index.rsh:118:7:application call to [unknown function] (defined at: ./index.rsh:118:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  let v475 = stdlib.checkedBigNumberify('./index.rsh:155:5:decimal', stdlib.UInt_max, '0');
  let v477 = v447;
  let v479 = v463;
  let v480 = stdlib.checkedBigNumberify('./index.rsh:89:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn2;
    switch (v562[0]) {
      case 'stake0_81': {
        const v565 = v562[1];
        undefined /* setApiDetails */;
        const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
        ;
        const v614 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v616 = stdlib.add(v615, v570);
        const v619 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v620 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v621 = [v616, v619, v620];
        const v622 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v621);
        ;
        const v623 = v622[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v628 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v629 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v630 = [v624, v628, v629];
        const v631 = stdlib.Array_set(v622, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v630);
        ;
        const v634 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
        const v635 = stdlib.fromSome(v634, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
        const v636 = {
          staked: v635
          };
        await txn2.getOutput('stake', 'v636', ctc8, v636);
        const v645 = stdlib.add(v635, v570);
        await stdlib.mapSet(map0, v561, v645);
        null;
        const v647 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:191:29:decimal', stdlib.UInt_max, '1'));
        const cv475 = v647;
        const cv477 = v563;
        const cv479 = v631;
        const cv480 = v480;
        
        v475 = cv475;
        v477 = cv477;
        v479 = cv479;
        v480 = cv480;
        
        continue;
        break;
        }
      case 'unstake0_81': {
        const v678 = v562[1];
        undefined /* setApiDetails */;
        ;
        const v727 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v728 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v732 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v734 = [v728, v732, v733];
        const v735 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v734);
        ;
        const v736 = v735[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v737 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v741 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v742 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v743 = [v737, v741, v742];
        const v744 = stdlib.Array_set(v735, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v743);
        ;
        const v763 = v678[stdlib.checkedBigNumberify('./index.rsh:195:9:spread', stdlib.UInt_max, '0')];
        const v764 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
        const v765 = stdlib.fromSome(v764, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
        const v766 = {
          staked: v765
          };
        await txn2.getOutput('unstake', 'v766', ctc8, v766);
        const v775 = stdlib.le(v763, v765);
        stdlib.assert(v775, {
          at: './index.rsh:204:14:application',
          fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v778 = undefined /* Remote */;
        const v779 = await txn2.getOutput('internal', 'v778', ctc10, v778);
        const v781 = v779[stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0')];
        const v784 = stdlib.add(v480, v781);
        const v785 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'), v781);
        stdlib.assert(v785, {
          at: './index.rsh:206:64:application',
          fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: 'remote bill check',
          who: 'Creator'
          });
        const v787 = stdlib.sub(v765, v763);
        await stdlib.mapSet(map0, v561, v787);
        null;
        const v789 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:217:29:decimal', stdlib.UInt_max, '1'));
        const cv475 = v789;
        const cv477 = v563;
        const cv479 = v744;
        const cv480 = v784;
        
        v475 = cv475;
        v477 = cv477;
        v479 = cv479;
        v480 = cv480;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.sendrecv({
    args: [v442, v443, v444, v445, v446, v475, v479, v480],
    evt_cnt: 0,
    funcNum: 2,
    lct: v477,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:224:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v794, time: v793, didSend: v324, from: v792 } = txn2;
      
      ;
      const v796 = v479[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
      const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
      const v798 = v479[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v480,
        kind: 'from',
        to: v442,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v797,
        kind: 'from',
        to: v442,
        tok: v444
        });
      sim_r.txns.push({
        amt: v799,
        kind: 'from',
        to: v442,
        tok: v443
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v444
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v443
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc3, ctc3, ctc4, ctc1, ctc1, ctc14, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v794, time: v793, didSend: v324, from: v792 } = txn2;
  ;
  const v796 = v479[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
  const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
  const v798 = v479[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
  const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  return;
  
  
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Data({
    stake0_81: ctc5,
    unstake0_81: ctc5
    });
  const ctc7 = stdlib.T_Struct([['staked', ctc1]]);
  const ctc8 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v428 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v429 = [v428, v428];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc3, ctc3, ctc4, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v443, v444, v445, v446], secs: v448, time: v447, didSend: v40, from: v442 } = txn1;
  const v449 = stdlib.tokenEq(v443, v444);
  const v450 = v449 ? false : true;
  stdlib.assert(v450, {
    at: './index.rsh:104:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v451 = v429[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0')];
  const v453 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v454 = v451[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
  const v455 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v453, v454];
  const v456 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '0'), v455);
  ;
  const v458 = v456[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v460 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1')];
  const v461 = v458[stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '2')];
  const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v460, v461];
  const v463 = stdlib.Array_set(v456, stdlib.checkedBigNumberify('./index.rsh:104:11:dot', stdlib.UInt_max, '1'), v462);
  ;
  ;
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:119:22:application',
    fs: ['at ./index.rsh:118:7:application call to [unknown function] (defined at: ./index.rsh:118:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  let v475 = stdlib.checkedBigNumberify('./index.rsh:155:5:decimal', stdlib.UInt_max, '0');
  let v477 = v447;
  let v479 = v463;
  let v480 = stdlib.checkedBigNumberify('./index.rsh:89:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn2;
    switch (v562[0]) {
      case 'stake0_81': {
        const v565 = v562[1];
        undefined /* setApiDetails */;
        const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
        ;
        const v614 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v616 = stdlib.add(v615, v570);
        const v619 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v620 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v621 = [v616, v619, v620];
        const v622 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v621);
        ;
        const v623 = v622[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v628 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v629 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v630 = [v624, v628, v629];
        const v631 = stdlib.Array_set(v622, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v630);
        ;
        const v634 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
        const v635 = stdlib.fromSome(v634, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
        const v636 = {
          staked: v635
          };
        await txn2.getOutput('stake', 'v636', ctc7, v636);
        const v645 = stdlib.add(v635, v570);
        await stdlib.mapSet(map0, v561, v645);
        null;
        const v647 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:191:29:decimal', stdlib.UInt_max, '1'));
        const cv475 = v647;
        const cv477 = v563;
        const cv479 = v631;
        const cv480 = v480;
        
        v475 = cv475;
        v477 = cv477;
        v479 = cv479;
        v480 = cv480;
        
        continue;
        break;
        }
      case 'unstake0_81': {
        const v678 = v562[1];
        undefined /* setApiDetails */;
        ;
        const v727 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v728 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v732 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v734 = [v728, v732, v733];
        const v735 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v734);
        ;
        const v736 = v735[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v737 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
        const v741 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
        const v742 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
        const v743 = [v737, v741, v742];
        const v744 = stdlib.Array_set(v735, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v743);
        ;
        const v763 = v678[stdlib.checkedBigNumberify('./index.rsh:195:9:spread', stdlib.UInt_max, '0')];
        const v764 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
        const v765 = stdlib.fromSome(v764, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
        const v766 = {
          staked: v765
          };
        await txn2.getOutput('unstake', 'v766', ctc7, v766);
        const v775 = stdlib.le(v763, v765);
        stdlib.assert(v775, {
          at: './index.rsh:204:14:application',
          fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: null,
          who: 'User'
          });
        const v778 = undefined /* Remote */;
        const v779 = await txn2.getOutput('internal', 'v778', ctc9, v778);
        const v781 = v779[stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0')];
        const v782 = v779[stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '1')];
        const v784 = stdlib.add(v480, v781);
        const v785 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'), v781);
        stdlib.assert(v785, {
          at: './index.rsh:206:64:application',
          fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: 'remote bill check',
          who: 'User'
          });
        stdlib.protect(ctc0, await interact.log(v782), {
          at: './index.rsh:208:26:application',
          fs: ['at ./index.rsh:208:26:application call to [unknown function] (defined at: ./index.rsh:208:26:function exp)', 'at ./index.rsh:208:26:application call to "liftedInteract" (defined at: ./index.rsh:208:26:application)', 'at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: 'log',
          who: 'User'
          });
        
        const v787 = stdlib.sub(v765, v763);
        await stdlib.mapSet(map0, v561, v787);
        null;
        const v789 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:217:29:decimal', stdlib.UInt_max, '1'));
        const cv475 = v789;
        const cv477 = v563;
        const cv479 = v744;
        const cv480 = v784;
        
        v475 = cv475;
        v477 = cv477;
        v479 = cv479;
        v480 = cv480;
        
        continue;
        break;
        }
      }
    
    }
  const txn2 = await (ctc.sendrecv({
    args: [v442, v443, v444, v445, v446, v475, v479, v480],
    evt_cnt: 0,
    funcNum: 2,
    lct: v477,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:224:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v794, time: v793, didSend: v324, from: v792 } = txn2;
      
      ;
      const v796 = v479[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
      const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
      const v798 = v479[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
      const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v480,
        kind: 'from',
        to: v442,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v797,
        kind: 'from',
        to: v442,
        tok: v444
        });
      sim_r.txns.push({
        amt: v799,
        kind: 'from',
        to: v442,
        tok: v443
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v444
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v443
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc3, ctc3, ctc4, ctc1, ctc1, ctc13, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v794, time: v793, didSend: v324, from: v792 } = txn2;
  ;
  const v796 = v479[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '1')];
  const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:225:32:application', stdlib.UInt_max, '0')];
  const v798 = v479[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
  const v799 = v798[stdlib.checkedBigNumberify('./index.rsh:225:69:application', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  return;
  
  
  
  
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
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    stake0_81: ctc9,
    unstake0_81: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v442, v443, v444, v445, v446, v475, v479, v480] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc4, ctc5, ctc1, ctc1, ctc8, ctc1]);
  const v492 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:153:21:application call to "runstake0_81" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:153:21:application call to [unknown function] (defined at: ./index.rsh:153:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v493 = v492[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
  const v497 = ['stake0_81', v492];
  
  const txn1 = await (ctc.sendrecv({
    args: [v442, v443, v444, v445, v446, v475, v479, v480, v497],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:176:21:decimal', stdlib.UInt_max, '0'), [[v493, v443], [stdlib.checkedBigNumberify('./index.rsh:176:48:decimal', stdlib.UInt_max, '0'), v444]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn1;
      
      switch (v562[0]) {
        case 'stake0_81': {
          const v565 = v562[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
          ;
          const v614 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v616 = stdlib.add(v615, v570);
          const v619 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v620 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
          const v621 = [v616, v619, v620];
          const v622 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v621);
          sim_r.txns.push({
            amt: v570,
            kind: 'to',
            tok: v443
            });
          const v623 = v622[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v628 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v629 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
          const v630 = [v624, v628, v629];
          const v631 = stdlib.Array_set(v622, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v630);
          ;
          const v634 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v561), null);
          const v635 = stdlib.fromSome(v634, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
          const v636 = {
            staked: v635
            };
          const v638 = await txn1.getOutput('stake', 'v636', ctc11, v636);
          
          const v645 = stdlib.add(v635, v570);
          await stdlib.simMapSet(sim_r, 0, v561, v645);
          null;
          const v647 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:191:29:decimal', stdlib.UInt_max, '1'));
          const v1265 = v647;
          const v1267 = v631;
          const v1268 = v480;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_81': {
          const v678 = v562[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc1, ctc1, ctc8, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn1;
  switch (v562[0]) {
    case 'stake0_81': {
      const v565 = v562[1];
      undefined /* setApiDetails */;
      const v570 = v565[stdlib.checkedBigNumberify('./index.rsh:171:9:spread', stdlib.UInt_max, '0')];
      ;
      const v614 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v615 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v616 = stdlib.add(v615, v570);
      const v619 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v620 = v614[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
      const v621 = [v616, v619, v620];
      const v622 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v621);
      ;
      const v623 = v622[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v624 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v628 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v629 = v623[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
      const v630 = [v624, v628, v629];
      const v631 = stdlib.Array_set(v622, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v630);
      ;
      const v634 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
      const v635 = stdlib.fromSome(v634, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
      const v636 = {
        staked: v635
        };
      const v638 = await txn1.getOutput('stake', 'v636', ctc11, v636);
      if (v261) {
        stdlib.protect(ctc0, await interact.out(v565, v638), {
          at: './index.rsh:172:7:application',
          fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)', 'at ./index.rsh:178:17:application call to "callback" (defined at: ./index.rsh:177:27:function exp)', 'at ./index.rsh:177:27:application call to [unknown function] (defined at: ./index.rsh:177:27:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      const v645 = stdlib.add(v635, v570);
      await stdlib.mapSet(map0, v561, v645);
      null;
      const v647 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:191:29:decimal', stdlib.UInt_max, '1'));
      const v1265 = v647;
      const v1267 = v631;
      const v1268 = v480;
      return;
      
      break;
      }
    case 'unstake0_81': {
      const v678 = v562[1];
      return;
      break;
      }
    }
  
  
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    stake0_81: ctc9,
    unstake0_81: ctc9
    });
  const ctc11 = stdlib.T_Struct([['staked', ctc1]]);
  const ctc12 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1]]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v442, v443, v444, v445, v446, v475, v479, v480] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc4, ctc5, ctc1, ctc1, ctc8, ctc1]);
  const v499 = ctc.selfAddress();
  const v501 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:197:19:application call to [unknown function] (defined at: ./index.rsh:197:19:function exp)', 'at ./index.rsh:153:21:application call to "rununstake0_81" (defined at: ./index.rsh:195:9:function exp)', 'at ./index.rsh:153:21:application call to [unknown function] (defined at: ./index.rsh:153:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v502 = v501[stdlib.checkedBigNumberify('./index.rsh:195:9:spread', stdlib.UInt_max, '0')];
  const v504 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v499), null);
  const v505 = stdlib.fromSome(v504, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
  const v506 = stdlib.le(v502, v505);
  stdlib.assert(v506, {
    at: './index.rsh:198:15:application',
    fs: ['at ./index.rsh:197:19:application call to [unknown function] (defined at: ./index.rsh:197:19:function exp)', 'at ./index.rsh:197:19:application call to [unknown function] (defined at: ./index.rsh:197:19:function exp)', 'at ./index.rsh:153:21:application call to "rununstake0_81" (defined at: ./index.rsh:195:9:function exp)', 'at ./index.rsh:153:21:application call to [unknown function] (defined at: ./index.rsh:153:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v509 = ['unstake0_81', v501];
  
  const txn1 = await (ctc.sendrecv({
    args: [v442, v443, v444, v445, v446, v475, v479, v480, v509],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:200:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:200:19:decimal', stdlib.UInt_max, '0'), v443], [stdlib.checkedBigNumberify('./index.rsh:200:36:decimal', stdlib.UInt_max, '0'), v444]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn1;
      
      switch (v562[0]) {
        case 'stake0_81': {
          const v565 = v562[1];
          
          break;
          }
        case 'unstake0_81': {
          const v678 = v562[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          ;
          const v727 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v728 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v732 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
          const v734 = [v728, v732, v733];
          const v735 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v734);
          ;
          const v736 = v735[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v737 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
          const v741 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
          const v742 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
          const v743 = [v737, v741, v742];
          const v744 = stdlib.Array_set(v735, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v743);
          ;
          const v763 = v678[stdlib.checkedBigNumberify('./index.rsh:195:9:spread', stdlib.UInt_max, '0')];
          const v764 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v561), null);
          const v765 = stdlib.fromSome(v764, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
          const v766 = {
            staked: v765
            };
          const v768 = await txn1.getOutput('unstake', 'v766', ctc11, v766);
          
          const v775 = stdlib.le(v763, v765);
          ;
          const v778 = [stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'), (sim_r.txns.push({
            accs: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'),
            kind: 'remote',
            obj: v445,
            pays: stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'),
            toks: []
            })), undefined];
          const v779 = await txn1.getOutput('internal', 'v778', ctc13, v778);
          const v781 = v779[stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0')];
          const v784 = stdlib.add(v480, v781);
          const v785 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'), v781);
          ;
          const v787 = stdlib.sub(v765, v763);
          await stdlib.simMapSet(sim_r, 0, v561, v787);
          null;
          const v789 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:217:29:decimal', stdlib.UInt_max, '1'));
          const v1301 = v789;
          const v1303 = v744;
          const v1304 = v784;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc4, ctc5, ctc1, ctc1, ctc8, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v562], secs: v564, time: v563, didSend: v261, from: v561 } = txn1;
  switch (v562[0]) {
    case 'stake0_81': {
      const v565 = v562[1];
      return;
      break;
      }
    case 'unstake0_81': {
      const v678 = v562[1];
      undefined /* setApiDetails */;
      ;
      const v727 = v479[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v728 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v732 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v733 = v727[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
      const v734 = [v728, v732, v733];
      const v735 = stdlib.Array_set(v479, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0'), v734);
      ;
      const v736 = v735[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v737 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '0')];
      const v741 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1')];
      const v742 = v736[stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '2')];
      const v743 = [v737, v741, v742];
      const v744 = stdlib.Array_set(v735, stdlib.checkedBigNumberify('./index.rsh:153:21:dot', stdlib.UInt_max, '1'), v743);
      ;
      const v763 = v678[stdlib.checkedBigNumberify('./index.rsh:195:9:spread', stdlib.UInt_max, '0')];
      const v764 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v561), null);
      const v765 = stdlib.fromSome(v764, stdlib.checkedBigNumberify('./index.rsh:111:77:decimal', stdlib.UInt_max, '0'));
      const v766 = {
        staked: v765
        };
      const v768 = await txn1.getOutput('unstake', 'v766', ctc11, v766);
      if (v261) {
        stdlib.protect(ctc0, await interact.out(v678, v768), {
          at: './index.rsh:196:7:application',
          fs: ['at ./index.rsh:196:7:application call to [unknown function] (defined at: ./index.rsh:196:7:function exp)', 'at ./index.rsh:202:17:application call to "callback" (defined at: ./index.rsh:201:29:function exp)', 'at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
          msg: 'out',
          who: 'unstake'
          });
        }
      else {
        }
      
      const v775 = stdlib.le(v763, v765);
      stdlib.assert(v775, {
        at: './index.rsh:204:14:application',
        fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v778 = undefined /* Remote */;
      const v779 = await txn1.getOutput('internal', 'v778', ctc13, v778);
      const v781 = v779[stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0')];
      const v784 = stdlib.add(v480, v781);
      const v785 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:206:64:application', stdlib.UInt_max, '0'), v781);
      stdlib.assert(v785, {
        at: './index.rsh:206:64:application',
        fs: ['at ./index.rsh:201:29:application call to [unknown function] (defined at: ./index.rsh:201:29:function exp)'],
        msg: 'remote bill check',
        who: 'unstake'
        });
      const v787 = stdlib.sub(v765, v763);
      await stdlib.mapSet(map0, v561, v787);
      null;
      const v789 = stdlib.add(v475, stdlib.checkedBigNumberify('./index.rsh:217:29:decimal', stdlib.UInt_max, '1'));
      const v1301 = v789;
      const v1303 = v744;
      const v1304 = v784;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`stake(uint64)(uint64)`, `unstake(uint64)(uint64)`],
    pure: [`global()(uint64)`, `initial()(uint64,uint64,uint64,uint64)`, `local(address)(uint64)`],
    sigs: [`global()(uint64)`, `initial()(uint64,uint64,uint64,uint64)`, `local(address)(uint64)`, `stake(uint64)(uint64)`, `unstake(uint64)(uint64)`]
    },
  appApproval: `BiAPAAEEAgigjQYJoLfQowiKrs6xCYfhkeALvpOuzgcDIChqJgMBAAEBACI1ADEYQQVZKmRJIls1ASEEWzUCMRkjEkEACjEAKCEGr2ZCBSU2GgAXSUEBAiI1BCM1BkkhBwxAAH5JIQgMQABnSSEJDEAAUCEJEkQ0AUkkDEAAIiQSRChkSTUDVyAINANXKAhQNANXMAhQNANXOAhQNQdCBOMlEkQoZEk1A1cgCDQDVygIUDQDVzAIUDQDVzgIUDUHQgTBIQgSRDYaATX/KDT/UEIApSEHEkQ2GgE1/yk0/1BCAJVJIQoMQAAsIQoSRDQBSSQMQAAQJBJEKGRJNQNXQAg1B0IEfiUSRChkSTUDV0AINQdCBG6BuIih7gESRDQBSSQMQAAaJBJEIjYaAYgEZUk1/yNbNP8iVU0WNQdCBEQlEkQiNhoBiARLSTX/I1s0/yJVTRY1B0IEKjYaAhc1BDYaAzYaARdJJQxAAr1JIQsMQAINIQsSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yEMWzX+IQ1bNf2BMFs1/IE4WzX7gUBbNfpXSCI1+SEOWzX4STUFNfeABJHxp5o091CwNPciVUAAqDT3VwEINfY09hc19TT5VwARSTX0Ils09QgWNPRXCAhQNPRXEAFQNPlXERFQNfM09TT+iAO4NPNXERE18iIxAIgDhEk18CNbNPAiVU018YAIAAAAAAAAAnw08RZQsDTxFjUHMQAoKTTxNPUIFlBmgAQxj6UOMQBQNPUWULA0/zT+NP00/DT7NPojCDIGNPNXABE08lcACDTyVwgIUDTyVxABUFA0+EIChTT3VwEINfY0+VcAEUk19VcACDT1VwgIUDT1VxABUDT5VxERUDX0NPRXERE18zT2FzXyIjEAiALmSTXwI1s08CJVTTXxgAgAAAAAAAAC/jTxFlCwNPEWNQc08jTxDkSABWFwcElENPwWUAM17zIKYDIKeAkWNe6xIrIBgQayEDT8shiABEqC/T2yGjTxFrIaszIKYDIKeAk07hcJFrcAPlcEAFA18IAIAAAAAAAAAwo08FCwNPBJNe8iWzXuIjTuEkQxACgpNPE08gkWUGaABNFpcykxAFA08hZQsDT/NP40/TT8NPs0+iMIMgY09FcAETTzVwAINPNXCAhQNPNXEAFQUDT4NO4IQgF7SCU0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hDFs1/iENWzX9V0giNfyABEGxQE2wsSKyATQDIQ5bsggjshA0/7IHs7EisgE0/FcRESJbshIkshA0/7IUNP2yEbOxIrIBNPxXABEiW7ISJLIQNP+yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IBEiISRCI0ARJENARJIhJMNAISEURJNQVJSiJbNf8hBFs1/oEQWzX9gRhbNfyABPbtq9I0/xZQNP4WUDT9FlA0/BZQsCEFiAEzgRGvSTX7SVA1+jT/NP4TRDT6VwARNfkhBK80+VcICFA0+VcQAVA0+lcREVA1+CEFiAEAsSKyASKyEiSyEDIKshQ0/7IRszT4VxERNfchBYgA4bEisgEishIkshAyCrIUNP6yEbMxADT/NP40/TT8IjIGNPhXABEhBK8091cICFA091cQAVBQIkIAADX/Nf41/TX8Nfs1+jX5NfhJNfc0+BZQNPkWUDT6FlA0+xZQNPwWUDT+UDT/FlAoSwFXAHJnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAAVIIQaviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 114,
  unsupported: [],
  version: 10,
  warnings: [`Step 3 calls a remote object at /app/index.rsh:206:64:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v443",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v444",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v445",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
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
                "name": "v443",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v444",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v445",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_stake0_81",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_unstake0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v562",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
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
            "name": "staked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v636",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v766",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "staked",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v778",
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
    "name": "staked",
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
    "name": "unstaked",
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_stake0_81",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_unstake0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v562",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
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
    "inputs": [],
    "name": "global",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "lastUpdateBlock",
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
    "inputs": [],
    "name": "initial",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "stakeToken",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "rewardToken",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "underlyingFarmId",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "creatorFee",
            "type": "uint256"
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
        "internalType": "address payable",
        "name": "v1317",
        "type": "address"
      }
    ],
    "name": "local",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T6",
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
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "stake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T6",
        "name": "",
        "type": "tuple"
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
    "name": "unstake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "staked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T6",
        "name": "",
        "type": "tuple"
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
  Bytecode: `0x60806040526040516200299b3803806200299b83398101604081905262000026916200063a565b60008055436003556200003862000394565b604080518351815260208085015180516001600160a01b03908116838501529181015182168385015292830151166060808301919091529091015160808201527f83ab52c4a969b3d9907d164bc5b5848f3a86395a74f59167fd9843f5e3ea93e29060a00160405180910390a18051600090819052815160209081018290528251604001919091528151818301805191909152825190518201528281015190810151905162000107916001600160a01b03918216911614620000fc576001620000ff565b60005b600a62000233565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200014992906200025d565b60608201908152608082018051600090528151602090810151810151825182015291519091015160409081015191519115159101526200018c3415600b62000233565b620001966200041f565b8051339052602080840180515183516001600160a01b0391821690840152815183015184519082166040918201528251015184519116606091820152905181015183516080908101919091528284018051600090525143930192909252830151908301516200020991906001906200025d565b602082018051604001919091525160006060909101526200022a81620002e0565b50505062000814565b81620002595760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002676200045f565b60005b6002811015620002bd57848160028110620002895762000289620006f2565b6020020151828260028110620002a357620002a3620006f2565b602002015280620002b48162000708565b9150506200026a565b5081818460028110620002d457620002d4620006f2565b60200201529392505050565b620002ea620004ac565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015284516060908101519093168385015284516080908101519085015281850180515160a0860152805182015160c0860152519092015160e08401526004600055436001559051620003699183910162000732565b604051602081830303815290604052600290805190602001906200038f9291906200051d565b505050565b604080516101008101909152600060a0820181815260c0830182905260e0830191909152815260208101620003c86200045f565b81526040805160608101825260008082526020828101829052928201529101908152602001620003f76200045f565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016200041a620005ac565b60405180604001604052806002905b62000495604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200046e5790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620005106200045f565b8152602001600081525090565b8280546200052b90620007d7565b90600052602060002090601f0160209004810192826200054f57600085556200059a565b82601f106200056a57805160ff19168380011785556200059a565b828001600101855582156200059a579182015b828111156200059a5782518255916020019190600101906200057d565b50620005a8929150620005cf565b5090565b60405180608001604052806000815260200160008152602001620005106200045f565b5b80821115620005a85760008155600101620005d0565b604051608081016001600160401b03811182821017156200061757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200063557600080fd5b919050565b600081830360a08112156200064e57600080fd5b604080519081016001600160401b03811182821017156200067f57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200069957600080fd5b620006a3620005e6565b9150620006b3602085016200061d565b8252620006c3604085016200061d565b6020830152620006d6606085016200061d565b6040830152608093909301516060820152602083015250919050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200072b57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060838188015116818701526080870151608087015260a087015160a087015260c0870151935060c0860160005b6002811015620007c057855180518352858101518684015284015115158483015294840194908201906001016200078e565b50505050505060e083015161018083015292915050565b600181811c90821680620007ec57607f821691505b602082108114156200080e57634e487b7160e01b600052602260045260246000fd5b50919050565b61217780620008246000396000f3fe60806040526004361061009a5760003560e01c80637eea518c116100615780637eea518c14610149578063832307571461015c578063a05f990614610171578063a694fc3a14610186578063ab53f2c614610199578063bb806dc9146101bc57005b80630ff1680e146100a35780631e93b0f1146100d75780632e17de78146100f65780633bc5b7bf146101095780636009475e1461013657005b366100a157005b005b3480156100af57600080fd5b506100c36100be366004611b0a565b610211565b604051905181526020015b60405180910390f35b3480156100e357600080fd5b506003545b6040519081526020016100ce565b6100c3610104366004611b27565b610355565b34801561011557600080fd5b50610129610124366004611b0a565b6103b9565b6040516100ce9190611b74565b6100a1610144366004611ba4565b6103e5565b6100a1610157366004611bbc565b610409565b34801561016857600080fd5b506001546100e8565b34801561017d57600080fd5b506100c3610429565b6100c3610194366004611b27565b610538565b3480156101a557600080fd5b506101ae610599565b6040516100ce929190611bfa565b3480156101c857600080fd5b506101d1610636565b6040805182516001600160a01b039081168252602080850151821690830152838301511691810191909152606091820151918101919091526080016100ce565b6040805160208101909152600081526002600054141561032a5760006002805461023a90611c34565b80601f016020809104026020016040519081016040528092919081815260200182805461026690611c34565b80156102b35780601f10610288576101008083540402835291602001916102b3565b820191906000526020600020905b81548152906001019060200180831161029657829003601f168201915b50505050508060200190518101906102cb9190611d90565b90506102e860408051808201909152600060208201908152815290565b60016102f3856107a3565b51600181111561030557610305611b40565b1461031157600061031f565b61031a846107a3565b604001515b815152519392505050565b600460005414156103445760006002805461023a90611c34565b61035060006009610875565b919050565b60408051602081019091526000815261036c611701565b610374611732565b61037c61174c565b6040805160208082018352878252838301919091526001835281518082019092528282528301526103ad828461089b565b50506020015192915050565b60408051606081018252600080825260208201819052918101919091526103df826107a3565b92915050565b6103ed611701565b6104056103ff36849003840184611e83565b8261089b565b5050565b610411611701565b61040561042336849003840184611f2d565b82611153565b6040805160208101909152600081526002600054141561050f5760006002805461045290611c34565b80601f016020809104026020016040519081016040528092919081815260200182805461047e90611c34565b80156104cb5780601f106104a0576101008083540402835291602001916104cb565b820191906000526020600020905b8154815290600101906020018083116104ae57829003601f168201915b50505050508060200190518101906104e39190611d90565b905061050060408051808201909152600060208201908152815290565b60a09091015181515251919050565b600460005414156105295760006002805461045290611c34565b61053560006007610875565b90565b60408051602081019091526000815261054f611701565b610557611732565b61055f61174c565b604080516020808201835287825283810191909152600083528151808201909252828252830152610590828461089b565b50505192915050565b6000606060005460028080546105ae90611c34565b80601f01602080910402602001604051908101604052809291908181526020018280546105da90611c34565b80156106275780601f106105fc57610100808354040283529160200191610627565b820191906000526020600020905b81548152906001019060200180831161060a57829003601f168201915b50505050509050915091509091565b604080516080810182526000808252602082018190529181018290526060810182905290546002141561077d5760006002805461067290611c34565b80601f016020809104026020016040519081016040528092919081815260200182805461069e90611c34565b80156106eb5780601f106106c0576101008083540402835291602001916106eb565b820191906000526020600020905b8154815290600101906020018083116106ce57829003601f168201915b50505050508060200190518101906107039190611d90565b90506107336040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b60208083015182516001600160a01b039182169052604080850151845190831693019290925260608085015184519216919092015260809092015181519092019190915251919050565b600460005414156107975760006002805461067290611c34565b61053560006008610875565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156107ef576107ef611b40565b1415610866576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561083057610830611b40565b600181111561084157610841611b40565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b816104055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6108ab600460005414601a610875565b81516108c69015806108bf57508251600154145b601b610875565b6000808055600280546108d890611c34565b80601f016020809104026020016040519081016040528092919081815260200182805461090490611c34565b80156109515780601f1061092657610100808354040283529160200191610951565b820191906000526020600020905b81548152906001019060200180831161093457829003601f168201915b50505050508060200190518101906109699190611d90565b9050610973611775565b7f2206f5c60f94d7fd6e082564e09cd08bafceb58e2319db26c381bd230fffbdcd846040516109a29190611f65565b60405180910390a160006020850151515160018111156109c4576109c4611b40565b1415610c5a5760208085015151015181526109e13415600f610875565b80515160c083015151516109f59190611fd0565b602082810180519290925260c084018051518201518351909201919091528051516040908101518351901515910152519051610a349190600090611301565b60408201526020820151815151610a5891610a5191339190611375565b6010610875565b6040818101805160209081015151606085018051919091528251820151820151815183015291510151820151905190151590820152820151610aa890610aa19033906000611375565b6011610875565b6001610ab3336107a3565b516001811115610ac557610ac5611b40565b14610ad1576000610adf565b610ada336107a3565b604001515b6080820181905260a0820180519190915251604051905181527fd5652ec672a68a76a6eed798cef08f5b6d76e323e06495a657833ca8cdbabe329060200160405180910390a160a08101518352336000908152600460205260409020805460ff191660011790558051516080820151610b589190611fd0565b33600081815260046020908152604091829020600101939093558351518151928352928201929092527f8f169816223f856d6f6a5945e3f7c520efe6c139d4152b6bb65e454babb2f2cb910160405180910390a1610bb46118c4565b825181516001600160a01b039182169052602080850151835190831691015260408085015183519083169101526060808501518351921691015260808084015182519091015260a0830151610c0b90600190611fd0565b602080830180519290925290514391015260408201516060830151610c339190600190611301565b6020820180516040019190915260e0840151905160600152610c548161138d565b5061114d565b6001602085015151516001811115610c7457610c74611b40565b141561114d576020840151516040015160c0820152610c9534156012610875565b60c082018051515160e08301805191909152815151602090810151825190910152815151604090810151825190151591015290519051610cd89190600090611301565b816101000181905250610cfb610cf43384602001516000611375565b6013610875565b610100810180516020908101515161012084018051919091528251820151820151815183015291510151604090810151915191151591810191909152820151610d5290610d4b9033906000611375565b6014610875565b6001610d5d336107a3565b516001811115610d6f57610d6f611b40565b14610d7b576000610d89565b610d84336107a3565b604001515b6101408201819052610160820180519190915251604051905181527f408798b78fdf98117d6a081f7ddca6d8975ba4ffce277c1ea6b1fdf7ae9c1bb89060200160405180910390a1610160810151602084015261014081015160c082015151610df59110156015610875565b6000610e05836020015130611436565b610e0f9190611fe8565b6101e08201526040820151600090610e279030611436565b610e319190611fe8565b610220820152610e42600047611fe8565b6101c0820152610140810151604080516024808201939093528151808203909301835260440181526020820180516001600160e01b03166305c2fbcf60e31b1790526060840151905160009182916001600160a01b03909116908290610ea9908690611fff565b60006040518083038185875af1925050503d8060008114610ee6576040519150601f19603f3d011682016040523d82523d6000602084013e610eeb565b606091505b5091509150610efc82826018611502565b50836101e00151610f11866020015130611436565b610f1b9190611fe8565b6102008501819052610f2f90156016610875565b836102200151610f43866040015130611436565b610f4d9190611fe8565b6102408501819052610f6190156017610875565b6101c0840151610f719047611fe8565b610180850151528051610f8d908201602090810190830161201b565b6101808501805160200191909152516101a085018190526040517fadfc93a85066ba89f38242a54198290d4097f55b5383688964c7549abda078e191610fec918151815260209182015180518383015290910151604082015260600190565b60405180910390a16101a08401515161100790156019610875565b336000908152600460205260409020805460ff1916600117905560c0840151516101408501516110379190611fe8565b336000818152600460209081526040918290206001019390935560c0870151518151928352928201929092527fc99009ef3dfc0489efa43797eee17157bc922e1ccfdddd9807414c7ca7b10f7c910160405180910390a16110966118c4565b855181516001600160a01b039182169052602080880151835190831691015260408088015183519083169101526060808801518351921691015260808087015182519091015260a08601516110ed90600190611fd0565b60208083018051929092529051439101526101008501516101208601516111179190600190611301565b6020820151604001526101a08501515160e08701516111369190611fd0565b6020820151606001526111488161138d565b505050505b50505050565b611163600260005414600d610875565b815161117e90158061117757508251600154145b600e610875565b60008080556002805461119090611c34565b80601f01602080910402602001604051908101604052809291908181526020018280546111bc90611c34565b80156112095780601f106111de57610100808354040283529160200191611209565b820191906000526020600020905b8154815290600101906020018083116111ec57829003601f168201915b50505050508060200190518101906112219190611d90565b60408051855181526020808701511515908201529192507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1910160405180910390a161126f3415600c610875565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156112ac573d6000803e3d6000fd5b506040810151815160c08301516112cd92919060015b60200201515161153d565b6020810151815160c08301516112e692919060006112c2565b600080805560018190556112fc90600290611902565b505050565b61130961193f565b60005b60028110156113555784816002811061132757611327611fa4565b602002015182826002811061133e5761133e611fa4565b60200201528061134d8161204d565b91505061130c565b508181846002811061136957611369611fa4565b60200201529392505050565b600061138383853085611551565b90505b9392505050565b61139561198a565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015284516060908101519093168385015284516080908101519085015281850180515160a0860152805182015160c0860152519092015160e0840152600460005543600155905161141291839101612068565b604051602081830303815290604052600290805190602001906112fc9291906119f9565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161149191611fff565b60006040518083038185875af1925050503d80600081146114ce576040519150601f19603f3d011682016040523d82523d6000602084013e6114d3565b606091505b50915091506114e482826006611502565b50808060200190518101906114f9919061210b565b95945050505050565b60608315611511575081611386565b8251156115215782518084602001fd5b60405163100960cb60e01b815260048101839052602401610892565b61154883838361162b565b6112fc57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916115b891611fff565b60006040518083038185875af1925050503d80600081146115f5576040519150601f19603f3d011682016040523d82523d6000602084013e6115fa565b606091505b509150915061160b82826001611502565b50808060200190518101906116209190612124565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161168a91611fff565b60006040518083038185875af1925050503d80600081146116c7576040519150601f19603f3d011682016040523d82523d6000602084013e6116cc565b606091505b50915091506116dd82826002611502565b50808060200190518101906116f29190612124565b9695505050505050565b905290565b6040805160608101825260009181019182529081905b81526020016116fc6040518060200160405280600081525090565b6040518060400160405280600081526020016116fc611a7d565b604080516060810190915280600081526020016117176040518060200160405280600081525090565b60408051610280810182526000610260820181815282528251606081018452818152602080820183905281850192909252908201529081016117b561193f565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016117f76040518060200160405280600081525090565b81526020016118126040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161183f61193f565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016118816040518060200160405280600081525090565b815260200161188e611a90565b815260200161189b611a90565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016116fc611abf565b50805461190e90611c34565b6000825580601f1061191e575050565b601f01602090049060005260206000209081019061193c9190611ae0565b50565b60405180604001604052806002905b611974604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161194e5790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016119ec61193f565b8152602001600081525090565b828054611a0590611c34565b90600052602060002090601f016020900481019282611a275760008555611a6d565b82601f10611a4057805160ff1916838001178555611a6d565b82800160010185558215611a6d579182015b82811115611a6d578251825591602001919060010190611a52565b50611a79929150611ae0565b5090565b60405180602001604052806116fc61174c565b6040518060400160405280600081526020016116fc604051806040016040528060008152602001600081525090565b604051806080016040528060008152602001600081526020016119ec61193f565b5b80821115611a795760008155600101611ae1565b6001600160a01b038116811461193c57600080fd5b600060208284031215611b1c57600080fd5b813561138681611af5565b600060208284031215611b3957600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6002811061193c57634e487b7160e01b600052602160045260246000fd5b81516060820190611b8481611b56565b808352506020830151151560208301526040830151604083015292915050565b600060808284031215611bb657600080fd5b50919050565b600060408284031215611bb657600080fd5b60005b83811015611be9578181015183820152602001611bd1565b8381111561114d5750506000910152565b8281526040602082015260008251806040840152611c1f816060850160208701611bce565b601f01601f1916919091016060019392505050565b600181811c90821680611c4857607f821691505b60208210811415611bb657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611ca257611ca2611c69565b60405290565b6040516060810167ffffffffffffffff81118282101715611ca257611ca2611c69565b6040516020810167ffffffffffffffff81118282101715611ca257611ca2611c69565b805161035081611af5565b801515811461193c57600080fd5b600082601f830112611d1857600080fd5b611d20611c7f565b8060c0840185811115611d3257600080fd5b845b81811015611d855760608188031215611d4d5760008081fd5b611d55611ca8565b8151815260208083015181830152604080840151611d7281611cf9565b9083015290855290930192606001611d34565b509095945050505050565b60006101a08284031215611da357600080fd5b604051610100810181811067ffffffffffffffff82111715611dc757611dc7611c69565b604052611dd383611cee565b8152611de160208401611cee565b6020820152611df260408401611cee565b6040820152611e0360608401611cee565b60608201526080830151608082015260a083015160a0820152611e298460c08501611d07565b60c0820152610180929092015160e083015250919050565b600060208284031215611e5357600080fd5b6040516020810181811067ffffffffffffffff82111715611e7657611e76611c69565b6040529135825250919050565b60008183036080811215611e9657600080fd5b6040516040810181811067ffffffffffffffff82111715611eb957611eb9611c69565b604052833581526060601f1983011215611ed257600080fd5b611eda611ccb565b9150611ee4611ca8565b602085013560028110611ef657600080fd5b8152611f058660408701611e41565b6020820152611f178660608701611e41565b6040820152825260208101919091529392505050565b600060408284031215611f3f57600080fd5b611f47611c7f565b823581526020830135611f5981611cf9565b60208201529392505050565b815181526020820151518051608083019190611f8081611b56565b80602085015250602081015151604084015260408101515160608401525092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611fe357611fe3611fba565b500190565b600082821015611ffa57611ffa611fba565b500390565b60008251612011818460208701611bce565b9190910192915050565b60006040828403121561202d57600080fd5b612035611c7f565b82518152602083015160208201528091505092915050565b600060001982141561206157612061611fba565b5060010190565b60006101a08201905060018060a01b038084511683526020818186015116818501526040828187015116818601526060838188015116818701526080870151608087015260a087015160a087015260c0870151935060c0860160005b60028110156120f457855180518352858101518684015284015115158483015294840194908201906001016120c4565b50505050505060e083015161018083015292915050565b60006020828403121561211d57600080fd5b5051919050565b60006020828403121561213657600080fd5b815161138681611cf956fea2646970667358221220885a07140def7555fdeba778624bd6ecbb0486da3a843e361f2f8de1845c1fc464736f6c634300080c0033`,
  BytecodeLen: 10651,
  Which: `oD`,
  version: 6,
  views: {
    global: `global`,
    initial: `initial`,
    local: `local`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:222:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:226:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:153:21:after expr stmt semicolon',
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
  "User": User,
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  stake: stake,
  unstake: unstake
  };

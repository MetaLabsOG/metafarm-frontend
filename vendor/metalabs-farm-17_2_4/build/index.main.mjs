// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc1], ['lastUpdateBlock', ctc1], ['rewardPerTokenStored', ctc6]]);
  const ctc8 = stdlib.T_Struct([['beneficiary', ctc0], ['creationFee', ctc1], ['flatAlgoCreationFee', ctc1], ['stakeToken', ctc2], ['rewardToken', ctc2], ['beginBlock', ctc1], ['endBlock', ctc1], ['rewardPerBlock', ctc1], ['extraAlgoRewardPerBlock', ctc1], ['lockLengthBlocks', ctc1]]);
  const ctc9 = stdlib.T_Struct([['staked', ctc1], ['reward', ctc1], ['lockTimestamp', ctc1], ['rewardPerTokenPaid', ctc6]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc1
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  const map2_ctc = ctc11;
  
  const map3_ctc = ctc12;
  
  
  return {
    infos: {
      global: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2775, v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2802, v2845, v2847, v2849, v2851] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = svs;
            return (await ((async () => {
              
              const v2958 = {
                lastUpdateBlock: v2891,
                rewardPerTokenStored: v2892,
                totalStaked: v2894
                };
              
              return v2958;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2775, v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2802, v2845, v2847, v2849, v2851] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = svs;
            return (await ((async () => {
              
              const v2877 = {
                beginBlock: v2781,
                beneficiary: v2776,
                creationFee: v2777,
                endBlock: v2782,
                extraAlgoRewardPerBlock: v2784,
                flatAlgoCreationFee: v2778,
                lockLengthBlocks: v2785,
                rewardPerBlock: v2783,
                rewardToken: v2780,
                stakeToken: v2779
                };
              
              return v2877;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2775, v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2802, v2845, v2847, v2849, v2851] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = svs;
            return (await ((async (_v2878 ) => {
                const v2878 = stdlib.protect(ctc0, _v2878, null);
              
              const v2879 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2878), null);
              const v2880 = stdlib.fromSome(v2879, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
              const v2881 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2878), null);
              const v2882 = stdlib.fromSome(v2881, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
              const v2883 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2878), null);
              const v2884 = stdlib.fromSome(v2883, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
              const v2885 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2878), null);
              const v2886 = stdlib.fromSome(v2885, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2887 = {
                lockTimestamp: v2884,
                reward: v2882,
                rewardPerTokenPaid: v2886,
                staked: v2880
                };
              
              return v2887;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc5, ctc1]
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
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc4]);
  return {
    mapDataTy: ctc5
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
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    beginBlock: ctc1,
    beneficiary: ctc5,
    creationFee: ctc1,
    endBlock: ctc1,
    extraAlgoRewardPerBlock: ctc1,
    flatAlgoCreationFee: ctc1,
    lockLengthBlocks: ctc1,
    rewardPerBlock: ctc1,
    rewardToken: ctc6,
    stakeToken: ctc6
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_631: ctc8,
    claimFees0_631: ctc8,
    stake0_631: ctc9,
    unstake0_631: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc11]]);
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2707 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2708 = [v2707, v2707];
  const v2714 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './index.rsh:190:38:application',
    fs: ['at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2715 = v2714.beginBlock;
  const v2716 = v2714.beneficiary;
  const v2717 = v2714.creationFee;
  const v2718 = v2714.endBlock;
  const v2719 = v2714.extraAlgoRewardPerBlock;
  const v2720 = v2714.flatAlgoCreationFee;
  const v2721 = v2714.lockLengthBlocks;
  const v2722 = v2714.rewardPerBlock;
  const v2723 = v2714.rewardToken;
  const v2724 = v2714.stakeToken;
  const v2736 = stdlib.tokenEq(v2724, v2723);
  const v2737 = v2736 ? false : true;
  stdlib.assert(v2737, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:139:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: 'Reach requires all tokens to be different. Consider using distribution contract instead.',
    who: 'Creator'
    });
  const v2739 = stdlib.mul(v2717, stdlib.checkedBigNumberify('./index.rsh:144:25:decimal', stdlib.UInt_max, '5'));
  const v2740 = stdlib.le(v2739, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2740, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2742 = stdlib.le(v2720, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2742, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2744 = stdlib.lt(v2715, v2718);
  stdlib.assert(v2744, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2746 = stdlib.sub(v2718, v2715);
  const v2747 = stdlib.lt(v2746, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2747, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2749 = stdlib.lt(v2721, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2749, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:154:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2752 = stdlib.le(v2721, v2746);
  stdlib.assert(v2752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:156:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2754 = stdlib.gt(v2722, stdlib.checkedBigNumberify('./index.rsh:160:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2754, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2756 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2757 = stdlib.lt(v2722, v2756);
  stdlib.assert(v2757, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2760 = stdlib.lt(v2719, v2756);
  stdlib.assert(v2760, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2765 = stdlib.mul(v2746, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2766 = stdlib.div(stdlib.UInt_max, v2765);
  const v2767 = stdlib.lt(v2722, v2766);
  stdlib.assert(v2767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2769 = stdlib.add(v2719, v2720);
  const v2773 = stdlib.lt(v2769, v2766);
  stdlib.assert(v2773, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:18:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)', 'at ./index.rsh:178:15:application call to [unknown function] (defined at: ./index.rsh:178:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2716, v2717, v2720, v2724, v2723, v2715, v2718, v2722, v2719, v2721],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785], secs: v2787, time: v2786, didSend: v286, from: v2775 } = txn1;
      
      const v2790 = v2708[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0')];
      const v2792 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
      const v2793 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
      const v2794 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2792, v2793];
      const v2795 = stdlib.Array_set(v2708, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0'), v2794);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2779
        });
      const v2797 = v2795[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
      const v2799 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
      const v2800 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
      const v2801 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2799, v2800];
      const v2802 = stdlib.Array_set(v2795, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1'), v2801);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2780
        });
      ;
      const v2815 = stdlib.sub(v2782, v2781);
      const v2845 = stdlib.mul(v2815, v2783);
      const v2847 = stdlib.mul(v2815, v2784);
      const v2848 = stdlib.mul(v2845, v2777);
      const v2849 = stdlib.div(v2848, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      const v2850 = stdlib.mul(v2847, v2777);
      const v2851 = stdlib.div(v2850, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785], secs: v2787, time: v2786, didSend: v286, from: v2775 } = txn1;
  const v2788 = stdlib.tokenEq(v2779, v2780);
  const v2789 = v2788 ? false : true;
  stdlib.assert(v2789, {
    at: './index.rsh:205:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  const v2790 = v2708[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0')];
  const v2792 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2793 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
  const v2794 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2792, v2793];
  const v2795 = stdlib.Array_set(v2708, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0'), v2794);
  ;
  const v2797 = v2795[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2799 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2800 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
  const v2801 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2799, v2800];
  const v2802 = stdlib.Array_set(v2795, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1'), v2801);
  ;
  ;
  const v2808 = stdlib.mul(v2777, stdlib.checkedBigNumberify('./index.rsh:144:25:decimal', stdlib.UInt_max, '5'));
  const v2809 = stdlib.le(v2808, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2811 = stdlib.le(v2778, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2813 = stdlib.lt(v2781, v2782);
  stdlib.assert(v2813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2815 = stdlib.sub(v2782, v2781);
  const v2816 = stdlib.lt(v2815, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2816, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2818 = stdlib.lt(v2785, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2818, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:154:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2821 = stdlib.le(v2785, v2815);
  stdlib.assert(v2821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:156:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2823 = stdlib.gt(v2783, stdlib.checkedBigNumberify('./index.rsh:160:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2825 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2826 = stdlib.lt(v2783, v2825);
  stdlib.assert(v2826, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2829 = stdlib.lt(v2784, v2825);
  stdlib.assert(v2829, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2834 = stdlib.mul(v2815, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2835 = stdlib.div(stdlib.UInt_max, v2834);
  const v2836 = stdlib.lt(v2783, v2835);
  stdlib.assert(v2836, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2838 = stdlib.add(v2784, v2778);
  const v2842 = stdlib.lt(v2838, v2835);
  stdlib.assert(v2842, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2845 = stdlib.mul(v2815, v2783);
  const v2847 = stdlib.mul(v2815, v2784);
  const v2848 = stdlib.mul(v2845, v2777);
  const v2849 = stdlib.div(v2848, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2850 = stdlib.mul(v2847, v2777);
  const v2851 = stdlib.div(v2850, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2852 = stdlib.add(v2847, v2851);
  const v2853 = stdlib.add(v2852, v2778);
  const v2854 = stdlib.add(v2845, v2849);
  
  const txn2 = await (ctc.sendrecv({
    args: [v2775, v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2802, v2845, v2847, v2849, v2851],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2786,
    onlyIf: true,
    out_tys: [],
    pay: [v2853, [[v2854, v2780]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2857, time: v2856, didSend: v532, from: v2855 } = txn2;
      
      const v2858 = stdlib.add(v2847, v2851);
      const v2859 = stdlib.add(v2858, v2778);
      const v2860 = stdlib.add(v2845, v2849);
      sim_r.txns.push({
        amt: v2859,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2863 = v2802[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
      const v2864 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '0')];
      const v2865 = stdlib.add(v2864, v2860);
      const v2868 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
      const v2869 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '2')];
      const v2870 = [v2865, v2868, v2869];
      const v2871 = stdlib.Array_set(v2802, stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1'), v2870);
      sim_r.txns.push({
        amt: v2860,
        kind: 'to',
        tok: v2780
        });
      await stdlib.simMapSet(sim_r, 0, v2775, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
      
      const v2889 = stdlib.add(v2851, v2778);
      const v2890 = v2889;
      const v2891 = v2781;
      const v2892 = stdlib.checkedBigNumberify('./index.rsh:304:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2893 = v2849;
      const v2894 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
      const v2895 = v2856;
      const v2901 = v2871;
      const v2902 = v2859;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2780
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2779
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2857, time: v2856, didSend: v532, from: v2855 } = txn2;
  const v2858 = stdlib.add(v2847, v2851);
  const v2859 = stdlib.add(v2858, v2778);
  const v2860 = stdlib.add(v2845, v2849);
  ;
  const v2863 = v2802[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
  const v2864 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '0')];
  const v2865 = stdlib.add(v2864, v2860);
  const v2868 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
  const v2869 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '2')];
  const v2870 = [v2865, v2868, v2869];
  const v2871 = stdlib.Array_set(v2802, stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1'), v2870);
  ;
  const v2872 = stdlib.addressEq(v2775, v2855);
  stdlib.assert(v2872, {
    at: './index.rsh:238:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  await stdlib.mapSet(map0, v2775, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:258:22:application',
    fs: ['at ./index.rsh:257:7:application call to [unknown function] (defined at: ./index.rsh:257:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v2889 = stdlib.add(v2851, v2778);
  let v2890 = v2889;
  let v2891 = v2781;
  let v2892 = stdlib.checkedBigNumberify('./index.rsh:304:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2893 = v2849;
  let v2894 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
  let v2895 = v2856;
  let v2901 = v2871;
  let v2902 = v2859;
  
  while (await (async () => {
    const v2948 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
    const v2949 = v2948[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
    const v2950 = stdlib.le(v2893, v2949);
    stdlib.assert(v2950, {
      at: './index.rsh:309:16:application',
      fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
      msg: null,
      who: 'Creator'
      });
    const v2952 = stdlib.le(v2890, v2902);
    stdlib.assert(v2952, {
      at: './index.rsh:310:16:application',
      fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
      msg: null,
      who: 'Creator'
      });
    
    return true;})()) {
    const v2953 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
    const v2954 = v2953[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
    const v2955 = stdlib.le(v2893, v2954);
    stdlib.assert(v2955, {
      at: './index.rsh:309:16:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v2957 = stdlib.le(v2890, v2902);
    stdlib.assert(v2957, {
      at: './index.rsh:310:16:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn3;
    switch (v3138[0]) {
      case 'claim0_631': {
        const v3141 = v3138[1];
        undefined /* setApiDetails */;
        ;
        const v3230 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3235 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3236 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3237 = [v3231, v3235, v3236];
        const v3238 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3237);
        ;
        const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3240 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3244 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3245 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3246 = [v3240, v3244, v3245];
        const v3247 = stdlib.Array_set(v3238, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3246);
        ;
        const v3250 = stdlib.gt(v3139, v2891);
        const v3251 = v3250 ? v3139 : v2891;
        const v3252 = stdlib.lt(v3251, v2782);
        const v3253 = v3252 ? v3251 : v2782;
        const v3254 = stdlib.sub(v3253, v2891);
        const v3255 = stdlib.cast("UInt", "UInt256", v3254, false);
        const v3256 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v3257 = stdlib.mul256(v3256, v3255);
        const v3258 = stdlib.mul256(v3257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3259 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v3260 = stdlib.div256(v3258, v3259);
        const v3261 = stdlib.add256(v2892, v3260);
        const v3262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v3263 = stdlib.fromSome(v3262, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v3264 = stdlib.cast("UInt", "UInt256", v3263, false);
        const v3265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v3266 = stdlib.fromSome(v3265, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3267 = stdlib.sub256(v3261, v3266);
        const v3268 = stdlib.mul256(v3264, v3267);
        const v3269 = stdlib.div256(v3268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3270 = stdlib.cast("UInt256", "UInt", v3269, false);
        const v3271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v3272 = stdlib.fromSome(v3271, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v3273 = stdlib.add(v3270, v3272);
        await stdlib.mapSet(map1, v3137, v3273);
        await stdlib.mapSet(map3, v3137, v3261);
        const v3277 = stdlib.gt(v3251, v2782);
        const v3278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v3279 = stdlib.fromSome(v3278, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v3280 = stdlib.add(v3279, v2785);
        const v3281 = stdlib.le(v3280, v3251);
        const v3282 = v3277 ? true : v3281;
        if (v3282) {
          const v3285 = stdlib.muldiv(v3273, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v3286 = v3247[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v3287 = v3286[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v3288 = stdlib.le(v3273, v3287);
          const v3290 = stdlib.le(v3285, v2902);
          const v3291 = v3288 ? v3290 : false;
          stdlib.assert(v3291, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:462:68:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:457:22:application call to [unknown function] (defined at: ./index.rsh:457:22:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v3295 = stdlib.sub(v2902, v3285);
          ;
          const v3301 = stdlib.sub(v3287, v3273);
          const v3304 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v3305 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v3306 = [v3301, v3304, v3305];
          const v3307 = stdlib.Array_set(v3247, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v3306);
          ;
          const v3308 = [v3273, v3285];
          await stdlib.mapSet(map2, v3137, v3253);
          const v3319 = {
            now: v3251,
            result: v3308
            };
          await txn3.getOutput('claim', 'v3319', ctc12, v3319);
          const cv2890 = v2890;
          const cv2891 = v3253;
          const cv2892 = v3261;
          const cv2893 = v2893;
          const cv2894 = v2894;
          const cv2895 = v3139;
          const cv2901 = v3307;
          const cv2902 = v3295;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          const v3340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3341 = {
            now: v3251,
            result: v3340
            };
          await txn3.getOutput('claim', 'v3341', ctc12, v3341);
          const cv2890 = v2890;
          const cv2891 = v3253;
          const cv2892 = v3261;
          const cv2893 = v2893;
          const cv2894 = v2894;
          const cv2895 = v3139;
          const cv2901 = v3247;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      case 'claimFees0_631': {
        const v3723 = v3138[1];
        undefined /* setApiDetails */;
        const v3738 = stdlib.addressEq(v3137, v2776);
        stdlib.assert(v3738, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:31:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'Creator'
          });
        ;
        const v3812 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3813 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3817 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3818 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3819 = [v3813, v3817, v3818];
        const v3820 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3819);
        ;
        const v3821 = v3820[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3822 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3826 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3827 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3828 = [v3822, v3826, v3827];
        const v3829 = stdlib.Array_set(v3820, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3828);
        ;
        const v3947 = stdlib.sub(v2902, v2890);
        ;
        const v3948 = v3829[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
        const v3949 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '0')];
        const v3953 = stdlib.sub(v3949, v2893);
        const v3956 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
        const v3957 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '2')];
        const v3958 = [v3953, v3956, v3957];
        const v3959 = stdlib.Array_set(v3829, stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1'), v3958);
        ;
        const v3961 = stdlib.gt(v3139, v2891);
        const v3962 = v3961 ? v3139 : v2891;
        const v3963 = [v2893, v2890];
        const v3964 = {
          now: v3962,
          result: v3963
          };
        await txn3.getOutput('claimFees', 'v3964', ctc12, v3964);
        const cv2890 = stdlib.checkedBigNumberify('./index.rsh:489:76:decimal', stdlib.UInt_max, '0');
        const cv2891 = v2891;
        const cv2892 = v2892;
        const cv2893 = stdlib.checkedBigNumberify('./index.rsh:489:73:decimal', stdlib.UInt_max, '0');
        const cv2894 = v2894;
        const cv2895 = v3139;
        const cv2901 = v3959;
        const cv2902 = v3947;
        
        v2890 = cv2890;
        v2891 = cv2891;
        v2892 = cv2892;
        v2893 = cv2893;
        v2894 = cv2894;
        v2895 = cv2895;
        v2901 = cv2901;
        v2902 = cv2902;
        
        continue;
        break;
        }
      case 'stake0_631': {
        const v4305 = v3138[1];
        undefined /* setApiDetails */;
        const v4332 = v4305[stdlib.checkedBigNumberify('./index.rsh:391:12:spread', stdlib.UInt_max, '0')];
        const v4333 = stdlib.add(v2894, v4332);
        const v4334 = stdlib.lt(v4333, stdlib.UInt_max);
        stdlib.assert(v4334, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:392:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:391:34:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'Creator'
          });
        ;
        const v4394 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4395 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4396 = stdlib.add(v4395, v4332);
        const v4399 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4400 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4401 = [v4396, v4399, v4400];
        const v4402 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4401);
        ;
        const v4403 = v4402[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4404 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4408 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4409 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4410 = [v4404, v4408, v4409];
        const v4411 = stdlib.Array_set(v4402, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4410);
        ;
        const v4566 = stdlib.gt(v3139, v2891);
        const v4567 = v4566 ? v3139 : v2891;
        const v4568 = stdlib.lt(v4567, v2782);
        const v4569 = v4568 ? v4567 : v2782;
        const v4570 = stdlib.sub(v4569, v2891);
        const v4571 = stdlib.cast("UInt", "UInt256", v4570, false);
        const v4572 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v4573 = stdlib.mul256(v4572, v4571);
        const v4574 = stdlib.mul256(v4573, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4575 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v4576 = stdlib.div256(v4574, v4575);
        const v4577 = stdlib.add256(v2892, v4576);
        const v4578 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v4579 = stdlib.fromSome(v4578, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v4580 = stdlib.cast("UInt", "UInt256", v4579, false);
        const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4583 = stdlib.sub256(v4577, v4582);
        const v4584 = stdlib.mul256(v4580, v4583);
        const v4585 = stdlib.div256(v4584, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4586 = stdlib.cast("UInt256", "UInt", v4585, false);
        const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v4589 = stdlib.add(v4586, v4588);
        await stdlib.mapSet(map1, v3137, v4589);
        await stdlib.mapSet(map3, v3137, v4577);
        const v4593 = stdlib.gt(v4567, v2782);
        const v4594 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v4595 = stdlib.fromSome(v4594, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v4596 = stdlib.add(v4595, v2785);
        const v4597 = stdlib.le(v4596, v4567);
        const v4598 = v4593 ? true : v4597;
        if (v4598) {
          const v4601 = stdlib.muldiv(v4589, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v4602 = v4411[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v4603 = v4602[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v4604 = stdlib.le(v4589, v4603);
          const v4606 = stdlib.le(v4601, v2902);
          const v4607 = v4604 ? v4606 : false;
          stdlib.assert(v4607, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:400:32:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:396:22:application call to [unknown function] (defined at: ./index.rsh:396:22:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v4611 = stdlib.sub(v2902, v4601);
          ;
          const v4617 = stdlib.sub(v4603, v4589);
          const v4620 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v4621 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v4622 = [v4617, v4620, v4621];
          const v4623 = stdlib.Array_set(v4411, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v4622);
          ;
          const v4627 = stdlib.add(v4579, v4332);
          await stdlib.mapSet(map0, v3137, v4627);
          await stdlib.mapSet(map2, v3137, v4569);
          const v4637 = {
            now: v4567,
            result: v4332
            };
          await txn3.getOutput('stake', 'v4637', ctc13, v4637);
          const cv2890 = v2890;
          const cv2891 = v4569;
          const cv2892 = v4577;
          const cv2893 = v2893;
          const cv2894 = v4333;
          const cv2895 = v3139;
          const cv2901 = v4623;
          const cv2902 = v4611;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          const v4656 = stdlib.add(v4579, v4332);
          await stdlib.mapSet(map0, v3137, v4656);
          await stdlib.mapSet(map2, v3137, v4569);
          const v4666 = {
            now: v4567,
            result: v4332
            };
          await txn3.getOutput('stake', 'v4666', ctc13, v4666);
          const cv2890 = v2890;
          const cv2891 = v4569;
          const cv2892 = v4577;
          const cv2893 = v2893;
          const cv2894 = v4333;
          const cv2895 = v3139;
          const cv2901 = v4411;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      case 'unstake0_631': {
        const v4887 = v3138[1];
        undefined /* setApiDetails */;
        const v4928 = v4887[stdlib.checkedBigNumberify('./index.rsh:417:12:spread', stdlib.UInt_max, '0')];
        const v4929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v4930 = stdlib.fromSome(v4929, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v4931 = v2901[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v4932 = v4931[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v4933 = stdlib.le(v4930, v4932);
        stdlib.assert(v4933, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v4935 = stdlib.lt(v4928, stdlib.UInt_max);
        stdlib.assert(v4935, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'Creator'
          });
        const v4937 = stdlib.addressEq(v3137, v2776);
        const v4938 = v4937 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:421:63:decimal', stdlib.UInt_max, '0');
        const v4939 = stdlib.add(v4928, v4938);
        const v4942 = stdlib.le(v4939, v4930);
        stdlib.assert(v4942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        ;
        const v4981 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4982 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4983 = [v4932, v4981, v4982];
        const v4984 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4983);
        ;
        const v4985 = v4984[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4986 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4990 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4991 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4992 = [v4986, v4990, v4991];
        const v4993 = stdlib.Array_set(v4984, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4992);
        ;
        const v5269 = v4993[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v5270 = v5269[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v5271 = stdlib.le(v4930, v5270);
        stdlib.assert(v5271, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v5284 = stdlib.gt(v3139, v2891);
        const v5285 = v5284 ? v3139 : v2891;
        const v5286 = stdlib.lt(v5285, v2782);
        const v5287 = v5286 ? v5285 : v2782;
        const v5288 = stdlib.sub(v5287, v2891);
        const v5289 = stdlib.cast("UInt", "UInt256", v5288, false);
        const v5290 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v5291 = stdlib.mul256(v5290, v5289);
        const v5292 = stdlib.mul256(v5291, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v5293 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v5294 = stdlib.div256(v5292, v5293);
        const v5295 = stdlib.add256(v2892, v5294);
        const v5298 = stdlib.cast("UInt", "UInt256", v4930, false);
        const v5299 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v5300 = stdlib.fromSome(v5299, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5301 = stdlib.sub256(v5295, v5300);
        const v5302 = stdlib.mul256(v5298, v5301);
        const v5303 = stdlib.div256(v5302, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v5304 = stdlib.cast("UInt256", "UInt", v5303, false);
        const v5305 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v5306 = stdlib.fromSome(v5305, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v5307 = stdlib.add(v5304, v5306);
        await stdlib.mapSet(map1, v3137, v5307);
        await stdlib.mapSet(map3, v3137, v5295);
        const v5311 = stdlib.gt(v5285, v2782);
        const v5312 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v5313 = stdlib.fromSome(v5312, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v5314 = stdlib.add(v5313, v2785);
        const v5315 = stdlib.le(v5314, v5285);
        const v5316 = v5311 ? true : v5315;
        const v5319 = v5316 ? stdlib.checkedBigNumberify('./index.rsh:429:51:decimal', stdlib.UInt_max, '0') : v5307;
        const v5320 = stdlib.muldiv(v5319, v2847, v2845);
        if (v5316) {
          const v5402 = stdlib.muldiv(v5307, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v5403 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v5404 = v5403[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v5405 = stdlib.le(v5307, v5404);
          const v5407 = stdlib.le(v5402, v2902);
          const v5408 = v5405 ? v5407 : false;
          stdlib.assert(v5408, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5412 = stdlib.sub(v2902, v5402);
          ;
          const v5418 = stdlib.sub(v5404, v5307);
          const v5421 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v5422 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v5423 = [v5418, v5421, v5422];
          const v5424 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5423);
          ;
          const v5428 = stdlib.sub(v4930, v4928);
          await stdlib.mapSet(map0, v3137, v5428);
          const v5429 = v5424[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5430 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5434 = stdlib.sub(v5430, v4928);
          const v5437 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
          const v5438 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
          const v5439 = [v5434, v5437, v5438];
          const v5440 = stdlib.Array_set(v5424, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5439);
          ;
          await stdlib.mapSet(map2, v3137, v5287);
          const v5450 = {
            now: v5285,
            result: v4928
            };
          await txn3.getOutput('unstake', 'v5450', ctc13, v5450);
          const v5460 = stdlib.sub(v2894, v4928);
          const v5466 = stdlib.add(v2893, v5319);
          const v5467 = stdlib.add(v2890, v5320);
          const cv2890 = v5467;
          const cv2891 = v5287;
          const cv2892 = v5295;
          const cv2893 = v5466;
          const cv2894 = v5460;
          const cv2895 = v3139;
          const cv2901 = v5440;
          const cv2902 = v5412;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v5334 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v5335 = v5334[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v5336 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'), v5335);
          const v5338 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:285:38:application', stdlib.UInt_max, '0'), v2902);
          const v5339 = v5336 ? v5338 : false;
          stdlib.assert(v5339, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v5352 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v5353 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v5354 = [v5335, v5352, v5353];
          const v5355 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5354);
          const v5359 = stdlib.sub(v4930, v4928);
          await stdlib.mapSet(map0, v3137, v5359);
          const v5360 = v5355[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5361 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5365 = stdlib.sub(v5361, v4928);
          const v5368 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
          const v5369 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
          const v5370 = [v5365, v5368, v5369];
          const v5371 = stdlib.Array_set(v5355, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5370);
          ;
          await stdlib.mapSet(map2, v3137, v5287);
          const v5381 = {
            now: v5285,
            result: v4928
            };
          await txn3.getOutput('unstake', 'v5381', ctc13, v5381);
          const v5391 = stdlib.sub(v2894, v4928);
          const v5397 = stdlib.add(v2893, v5319);
          const v5398 = stdlib.add(v2890, v5320);
          const cv2890 = v5398;
          const cv2891 = v5287;
          const cv2892 = v5295;
          const cv2893 = v5397;
          const cv2894 = v5391;
          const cv2895 = v3139;
          const cv2901 = v5371;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      }
    
    }
  const v5469 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
  const v5470 = v5469[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
  const v5471 = stdlib.le(v2893, v5470);
  stdlib.assert(v5471, {
    at: './index.rsh:309:16:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v5473 = stdlib.le(v2890, v2902);
  stdlib.assert(v5473, {
    at: './index.rsh:310:16:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
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
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    claim0_631: ctc7,
    claimFees0_631: ctc7,
    stake0_631: ctc8,
    unstake0_631: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Struct([['now', ctc1], ['result', ctc10]]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  
  const v2707 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2708 = [v2707, v2707];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 10,
    funcNum: 0,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785], secs: v2787, time: v2786, didSend: v286, from: v2775 } = txn1;
  const v2788 = stdlib.tokenEq(v2779, v2780);
  const v2789 = v2788 ? false : true;
  stdlib.assert(v2789, {
    at: './index.rsh:205:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'User'
    });
  const v2790 = v2708[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0')];
  const v2792 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2793 = v2790[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
  const v2794 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2792, v2793];
  const v2795 = stdlib.Array_set(v2708, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '0'), v2794);
  ;
  const v2797 = v2795[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2799 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1')];
  const v2800 = v2797[stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '2')];
  const v2801 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2799, v2800];
  const v2802 = stdlib.Array_set(v2795, stdlib.checkedBigNumberify('./index.rsh:205:11:dot', stdlib.UInt_max, '1'), v2801);
  ;
  ;
  const v2808 = stdlib.mul(v2777, stdlib.checkedBigNumberify('./index.rsh:144:25:decimal', stdlib.UInt_max, '5'));
  const v2809 = stdlib.le(v2808, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'User'
    });
  const v2811 = stdlib.le(v2778, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'User'
    });
  const v2813 = stdlib.lt(v2781, v2782);
  stdlib.assert(v2813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2815 = stdlib.sub(v2782, v2781);
  const v2816 = stdlib.lt(v2815, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2816, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:153:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2818 = stdlib.lt(v2785, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2818, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:154:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2821 = stdlib.le(v2785, v2815);
  stdlib.assert(v2821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:156:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2823 = stdlib.gt(v2783, stdlib.checkedBigNumberify('./index.rsh:160:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2825 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  const v2826 = stdlib.lt(v2783, v2825);
  stdlib.assert(v2826, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2829 = stdlib.lt(v2784, v2825);
  stdlib.assert(v2829, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2834 = stdlib.mul(v2815, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2835 = stdlib.div(stdlib.UInt_max, v2834);
  const v2836 = stdlib.lt(v2783, v2835);
  stdlib.assert(v2836, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2838 = stdlib.add(v2784, v2778);
  const v2842 = stdlib.lt(v2838, v2835);
  stdlib.assert(v2842, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:16:application call to "initialChecks" (defined at: ./index.rsh:138:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2845 = stdlib.mul(v2815, v2783);
  const v2847 = stdlib.mul(v2815, v2784);
  const v2848 = stdlib.mul(v2845, v2777);
  const v2849 = stdlib.div(v2848, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2850 = stdlib.mul(v2847, v2777);
  const v2851 = stdlib.div(v2850, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2857, time: v2856, didSend: v532, from: v2855 } = txn2;
  const v2858 = stdlib.add(v2847, v2851);
  const v2859 = stdlib.add(v2858, v2778);
  const v2860 = stdlib.add(v2845, v2849);
  ;
  const v2863 = v2802[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
  const v2864 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '0')];
  const v2865 = stdlib.add(v2864, v2860);
  const v2868 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1')];
  const v2869 = v2863[stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '2')];
  const v2870 = [v2865, v2868, v2869];
  const v2871 = stdlib.Array_set(v2802, stdlib.checkedBigNumberify('./index.rsh:238:11:dot', stdlib.UInt_max, '1'), v2870);
  ;
  const v2872 = stdlib.addressEq(v2775, v2855);
  stdlib.assert(v2872, {
    at: './index.rsh:238:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  await stdlib.mapSet(map0, v2775, stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:258:22:application',
    fs: ['at ./index.rsh:257:7:application call to [unknown function] (defined at: ./index.rsh:257:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v2889 = stdlib.add(v2851, v2778);
  let v2890 = v2889;
  let v2891 = v2781;
  let v2892 = stdlib.checkedBigNumberify('./index.rsh:304:15:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2893 = v2849;
  let v2894 = stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1');
  let v2895 = v2856;
  let v2901 = v2871;
  let v2902 = v2859;
  
  while (await (async () => {
    const v2948 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
    const v2949 = v2948[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
    const v2950 = stdlib.le(v2893, v2949);
    stdlib.assert(v2950, {
      at: './index.rsh:309:16:application',
      fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
      msg: null,
      who: 'User'
      });
    const v2952 = stdlib.le(v2890, v2902);
    stdlib.assert(v2952, {
      at: './index.rsh:310:16:application',
      fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
      msg: null,
      who: 'User'
      });
    
    return true;})()) {
    const v2953 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
    const v2954 = v2953[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
    const v2955 = stdlib.le(v2893, v2954);
    stdlib.assert(v2955, {
      at: './index.rsh:309:16:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const v2957 = stdlib.le(v2890, v2902);
    stdlib.assert(v2957, {
      at: './index.rsh:310:16:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn3;
    switch (v3138[0]) {
      case 'claim0_631': {
        const v3141 = v3138[1];
        undefined /* setApiDetails */;
        ;
        const v3230 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3235 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3236 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3237 = [v3231, v3235, v3236];
        const v3238 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3237);
        ;
        const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3240 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3244 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3245 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3246 = [v3240, v3244, v3245];
        const v3247 = stdlib.Array_set(v3238, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3246);
        ;
        const v3250 = stdlib.gt(v3139, v2891);
        const v3251 = v3250 ? v3139 : v2891;
        const v3252 = stdlib.lt(v3251, v2782);
        const v3253 = v3252 ? v3251 : v2782;
        const v3254 = stdlib.sub(v3253, v2891);
        const v3255 = stdlib.cast("UInt", "UInt256", v3254, false);
        const v3256 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v3257 = stdlib.mul256(v3256, v3255);
        const v3258 = stdlib.mul256(v3257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3259 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v3260 = stdlib.div256(v3258, v3259);
        const v3261 = stdlib.add256(v2892, v3260);
        const v3262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v3263 = stdlib.fromSome(v3262, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v3264 = stdlib.cast("UInt", "UInt256", v3263, false);
        const v3265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v3266 = stdlib.fromSome(v3265, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3267 = stdlib.sub256(v3261, v3266);
        const v3268 = stdlib.mul256(v3264, v3267);
        const v3269 = stdlib.div256(v3268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3270 = stdlib.cast("UInt256", "UInt", v3269, false);
        const v3271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v3272 = stdlib.fromSome(v3271, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v3273 = stdlib.add(v3270, v3272);
        await stdlib.mapSet(map1, v3137, v3273);
        await stdlib.mapSet(map3, v3137, v3261);
        const v3277 = stdlib.gt(v3251, v2782);
        const v3278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v3279 = stdlib.fromSome(v3278, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v3280 = stdlib.add(v3279, v2785);
        const v3281 = stdlib.le(v3280, v3251);
        const v3282 = v3277 ? true : v3281;
        if (v3282) {
          const v3285 = stdlib.muldiv(v3273, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v3286 = v3247[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v3287 = v3286[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v3288 = stdlib.le(v3273, v3287);
          const v3290 = stdlib.le(v3285, v2902);
          const v3291 = v3288 ? v3290 : false;
          stdlib.assert(v3291, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:462:68:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:457:22:application call to [unknown function] (defined at: ./index.rsh:457:22:function exp)'],
            msg: null,
            who: 'User'
            });
          const v3295 = stdlib.sub(v2902, v3285);
          ;
          const v3301 = stdlib.sub(v3287, v3273);
          const v3304 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v3305 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v3306 = [v3301, v3304, v3305];
          const v3307 = stdlib.Array_set(v3247, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v3306);
          ;
          const v3308 = [v3273, v3285];
          await stdlib.mapSet(map2, v3137, v3253);
          const v3319 = {
            now: v3251,
            result: v3308
            };
          await txn3.getOutput('claim', 'v3319', ctc11, v3319);
          const cv2890 = v2890;
          const cv2891 = v3253;
          const cv2892 = v3261;
          const cv2893 = v2893;
          const cv2894 = v2894;
          const cv2895 = v3139;
          const cv2901 = v3307;
          const cv2902 = v3295;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          const v3340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v3341 = {
            now: v3251,
            result: v3340
            };
          await txn3.getOutput('claim', 'v3341', ctc11, v3341);
          const cv2890 = v2890;
          const cv2891 = v3253;
          const cv2892 = v3261;
          const cv2893 = v2893;
          const cv2894 = v2894;
          const cv2895 = v3139;
          const cv2901 = v3247;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      case 'claimFees0_631': {
        const v3723 = v3138[1];
        undefined /* setApiDetails */;
        const v3738 = stdlib.addressEq(v3137, v2776);
        stdlib.assert(v3738, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:31:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'User'
          });
        ;
        const v3812 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3813 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3817 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3818 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3819 = [v3813, v3817, v3818];
        const v3820 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3819);
        ;
        const v3821 = v3820[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3822 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v3826 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v3827 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v3828 = [v3822, v3826, v3827];
        const v3829 = stdlib.Array_set(v3820, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3828);
        ;
        const v3947 = stdlib.sub(v2902, v2890);
        ;
        const v3948 = v3829[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
        const v3949 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '0')];
        const v3953 = stdlib.sub(v3949, v2893);
        const v3956 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
        const v3957 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '2')];
        const v3958 = [v3953, v3956, v3957];
        const v3959 = stdlib.Array_set(v3829, stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1'), v3958);
        ;
        const v3961 = stdlib.gt(v3139, v2891);
        const v3962 = v3961 ? v3139 : v2891;
        const v3963 = [v2893, v2890];
        const v3964 = {
          now: v3962,
          result: v3963
          };
        await txn3.getOutput('claimFees', 'v3964', ctc11, v3964);
        const cv2890 = stdlib.checkedBigNumberify('./index.rsh:489:76:decimal', stdlib.UInt_max, '0');
        const cv2891 = v2891;
        const cv2892 = v2892;
        const cv2893 = stdlib.checkedBigNumberify('./index.rsh:489:73:decimal', stdlib.UInt_max, '0');
        const cv2894 = v2894;
        const cv2895 = v3139;
        const cv2901 = v3959;
        const cv2902 = v3947;
        
        v2890 = cv2890;
        v2891 = cv2891;
        v2892 = cv2892;
        v2893 = cv2893;
        v2894 = cv2894;
        v2895 = cv2895;
        v2901 = cv2901;
        v2902 = cv2902;
        
        continue;
        break;
        }
      case 'stake0_631': {
        const v4305 = v3138[1];
        undefined /* setApiDetails */;
        const v4332 = v4305[stdlib.checkedBigNumberify('./index.rsh:391:12:spread', stdlib.UInt_max, '0')];
        const v4333 = stdlib.add(v2894, v4332);
        const v4334 = stdlib.lt(v4333, stdlib.UInt_max);
        stdlib.assert(v4334, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:392:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:391:34:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'User'
          });
        ;
        const v4394 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4395 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4396 = stdlib.add(v4395, v4332);
        const v4399 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4400 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4401 = [v4396, v4399, v4400];
        const v4402 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4401);
        ;
        const v4403 = v4402[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4404 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4408 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4409 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4410 = [v4404, v4408, v4409];
        const v4411 = stdlib.Array_set(v4402, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4410);
        ;
        const v4566 = stdlib.gt(v3139, v2891);
        const v4567 = v4566 ? v3139 : v2891;
        const v4568 = stdlib.lt(v4567, v2782);
        const v4569 = v4568 ? v4567 : v2782;
        const v4570 = stdlib.sub(v4569, v2891);
        const v4571 = stdlib.cast("UInt", "UInt256", v4570, false);
        const v4572 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v4573 = stdlib.mul256(v4572, v4571);
        const v4574 = stdlib.mul256(v4573, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4575 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v4576 = stdlib.div256(v4574, v4575);
        const v4577 = stdlib.add256(v2892, v4576);
        const v4578 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v4579 = stdlib.fromSome(v4578, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v4580 = stdlib.cast("UInt", "UInt256", v4579, false);
        const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4583 = stdlib.sub256(v4577, v4582);
        const v4584 = stdlib.mul256(v4580, v4583);
        const v4585 = stdlib.div256(v4584, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4586 = stdlib.cast("UInt256", "UInt", v4585, false);
        const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v4589 = stdlib.add(v4586, v4588);
        await stdlib.mapSet(map1, v3137, v4589);
        await stdlib.mapSet(map3, v3137, v4577);
        const v4593 = stdlib.gt(v4567, v2782);
        const v4594 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v4595 = stdlib.fromSome(v4594, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v4596 = stdlib.add(v4595, v2785);
        const v4597 = stdlib.le(v4596, v4567);
        const v4598 = v4593 ? true : v4597;
        if (v4598) {
          const v4601 = stdlib.muldiv(v4589, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v4602 = v4411[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v4603 = v4602[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v4604 = stdlib.le(v4589, v4603);
          const v4606 = stdlib.le(v4601, v2902);
          const v4607 = v4604 ? v4606 : false;
          stdlib.assert(v4607, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:400:32:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:396:22:application call to [unknown function] (defined at: ./index.rsh:396:22:function exp)'],
            msg: null,
            who: 'User'
            });
          const v4611 = stdlib.sub(v2902, v4601);
          ;
          const v4617 = stdlib.sub(v4603, v4589);
          const v4620 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v4621 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v4622 = [v4617, v4620, v4621];
          const v4623 = stdlib.Array_set(v4411, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v4622);
          ;
          const v4627 = stdlib.add(v4579, v4332);
          await stdlib.mapSet(map0, v3137, v4627);
          await stdlib.mapSet(map2, v3137, v4569);
          const v4637 = {
            now: v4567,
            result: v4332
            };
          await txn3.getOutput('stake', 'v4637', ctc12, v4637);
          const cv2890 = v2890;
          const cv2891 = v4569;
          const cv2892 = v4577;
          const cv2893 = v2893;
          const cv2894 = v4333;
          const cv2895 = v3139;
          const cv2901 = v4623;
          const cv2902 = v4611;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          const v4656 = stdlib.add(v4579, v4332);
          await stdlib.mapSet(map0, v3137, v4656);
          await stdlib.mapSet(map2, v3137, v4569);
          const v4666 = {
            now: v4567,
            result: v4332
            };
          await txn3.getOutput('stake', 'v4666', ctc12, v4666);
          const cv2890 = v2890;
          const cv2891 = v4569;
          const cv2892 = v4577;
          const cv2893 = v2893;
          const cv2894 = v4333;
          const cv2895 = v3139;
          const cv2901 = v4411;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      case 'unstake0_631': {
        const v4887 = v3138[1];
        undefined /* setApiDetails */;
        const v4928 = v4887[stdlib.checkedBigNumberify('./index.rsh:417:12:spread', stdlib.UInt_max, '0')];
        const v4929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
        const v4930 = stdlib.fromSome(v4929, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
        const v4931 = v2901[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v4932 = v4931[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v4933 = stdlib.le(v4930, v4932);
        stdlib.assert(v4933, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: null,
          who: 'User'
          });
        const v4935 = stdlib.lt(v4928, stdlib.UInt_max);
        stdlib.assert(v4935, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'User'
          });
        const v4937 = stdlib.addressEq(v3137, v2776);
        const v4938 = v4937 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:421:63:decimal', stdlib.UInt_max, '0');
        const v4939 = stdlib.add(v4928, v4938);
        const v4942 = stdlib.le(v4939, v4930);
        stdlib.assert(v4942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        ;
        const v4981 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4982 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4983 = [v4932, v4981, v4982];
        const v4984 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4983);
        ;
        const v4985 = v4984[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4986 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
        const v4990 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
        const v4991 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
        const v4992 = [v4986, v4990, v4991];
        const v4993 = stdlib.Array_set(v4984, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4992);
        ;
        const v5269 = v4993[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v5270 = v5269[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
        const v5271 = stdlib.le(v4930, v5270);
        stdlib.assert(v5271, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
          msg: null,
          who: 'User'
          });
        const v5284 = stdlib.gt(v3139, v2891);
        const v5285 = v5284 ? v3139 : v2891;
        const v5286 = stdlib.lt(v5285, v2782);
        const v5287 = v5286 ? v5285 : v2782;
        const v5288 = stdlib.sub(v5287, v2891);
        const v5289 = stdlib.cast("UInt", "UInt256", v5288, false);
        const v5290 = stdlib.cast("UInt", "UInt256", v2783, false);
        const v5291 = stdlib.mul256(v5290, v5289);
        const v5292 = stdlib.mul256(v5291, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v5293 = stdlib.cast("UInt", "UInt256", v2894, false);
        const v5294 = stdlib.div256(v5292, v5293);
        const v5295 = stdlib.add256(v2892, v5294);
        const v5298 = stdlib.cast("UInt", "UInt256", v4930, false);
        const v5299 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
        const v5300 = stdlib.fromSome(v5299, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5301 = stdlib.sub256(v5295, v5300);
        const v5302 = stdlib.mul256(v5298, v5301);
        const v5303 = stdlib.div256(v5302, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v5304 = stdlib.cast("UInt256", "UInt", v5303, false);
        const v5305 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
        const v5306 = stdlib.fromSome(v5305, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
        const v5307 = stdlib.add(v5304, v5306);
        await stdlib.mapSet(map1, v3137, v5307);
        await stdlib.mapSet(map3, v3137, v5295);
        const v5311 = stdlib.gt(v5285, v2782);
        const v5312 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
        const v5313 = stdlib.fromSome(v5312, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
        const v5314 = stdlib.add(v5313, v2785);
        const v5315 = stdlib.le(v5314, v5285);
        const v5316 = v5311 ? true : v5315;
        const v5319 = v5316 ? stdlib.checkedBigNumberify('./index.rsh:429:51:decimal', stdlib.UInt_max, '0') : v5307;
        const v5320 = stdlib.muldiv(v5319, v2847, v2845);
        if (v5316) {
          const v5402 = stdlib.muldiv(v5307, v2847, v2845);
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v5403 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v5404 = v5403[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v5405 = stdlib.le(v5307, v5404);
          const v5407 = stdlib.le(v5402, v2902);
          const v5408 = v5405 ? v5407 : false;
          stdlib.assert(v5408, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: null,
            who: 'User'
            });
          const v5412 = stdlib.sub(v2902, v5402);
          ;
          const v5418 = stdlib.sub(v5404, v5307);
          const v5421 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v5422 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v5423 = [v5418, v5421, v5422];
          const v5424 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5423);
          ;
          const v5428 = stdlib.sub(v4930, v4928);
          await stdlib.mapSet(map0, v3137, v5428);
          const v5429 = v5424[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5430 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5434 = stdlib.sub(v5430, v4928);
          const v5437 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
          const v5438 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
          const v5439 = [v5434, v5437, v5438];
          const v5440 = stdlib.Array_set(v5424, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5439);
          ;
          await stdlib.mapSet(map2, v3137, v5287);
          const v5450 = {
            now: v5285,
            result: v4928
            };
          await txn3.getOutput('unstake', 'v5450', ctc12, v5450);
          const v5460 = stdlib.sub(v2894, v4928);
          const v5466 = stdlib.add(v2893, v5319);
          const v5467 = stdlib.add(v2890, v5320);
          const cv2890 = v5467;
          const cv2891 = v5287;
          const cv2892 = v5295;
          const cv2893 = v5466;
          const cv2894 = v5460;
          const cv2895 = v3139;
          const cv2901 = v5440;
          const cv2902 = v5412;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
          const v5334 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
          const v5335 = v5334[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
          const v5336 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'), v5335);
          const v5338 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:285:38:application', stdlib.UInt_max, '0'), v2902);
          const v5339 = v5336 ? v5338 : false;
          stdlib.assert(v5339, {
            at: './index.rsh:294:12:application',
            fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: null,
            who: 'User'
            });
          const v5352 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
          const v5353 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
          const v5354 = [v5335, v5352, v5353];
          const v5355 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5354);
          const v5359 = stdlib.sub(v4930, v4928);
          await stdlib.mapSet(map0, v3137, v5359);
          const v5360 = v5355[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5361 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
          const v5365 = stdlib.sub(v5361, v4928);
          const v5368 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
          const v5369 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
          const v5370 = [v5365, v5368, v5369];
          const v5371 = stdlib.Array_set(v5355, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5370);
          ;
          await stdlib.mapSet(map2, v3137, v5287);
          const v5381 = {
            now: v5285,
            result: v4928
            };
          await txn3.getOutput('unstake', 'v5381', ctc12, v5381);
          const v5391 = stdlib.sub(v2894, v4928);
          const v5397 = stdlib.add(v2893, v5319);
          const v5398 = stdlib.add(v2890, v5320);
          const cv2890 = v5398;
          const cv2891 = v5287;
          const cv2892 = v5295;
          const cv2893 = v5397;
          const cv2894 = v5391;
          const cv2895 = v3139;
          const cv2901 = v5371;
          const cv2902 = v2902;
          
          v2890 = cv2890;
          v2891 = cv2891;
          v2892 = cv2892;
          v2893 = cv2893;
          v2894 = cv2894;
          v2895 = cv2895;
          v2901 = cv2901;
          v2902 = cv2902;
          
          continue;}
        break;
        }
      }
    
    }
  const v5469 = v2901[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
  const v5470 = v5469[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
  const v5471 = stdlib.le(v2893, v5470);
  stdlib.assert(v5471, {
    at: './index.rsh:309:16:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const v5473 = stdlib.le(v2890, v2902);
  stdlib.assert(v5473, {
    at: './index.rsh:310:16:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  return;
  
  
  
  
  };
export async function _claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_631: ctc10,
    claimFees0_631: ctc10,
    stake0_631: ctc11,
    unstake0_631: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v3003 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:454:27:application call to [unknown function] (defined at: ./index.rsh:454:27:function exp)', 'at ./index.rsh:301:19:application call to "runclaim0_631" (defined at: ./index.rsh:454:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v3007 = ['claim0_631', v3003];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902, v3007],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:456:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:456:16:decimal', stdlib.UInt_max, '0'), v2779], [stdlib.checkedBigNumberify('./index.rsh:456:33:decimal', stdlib.UInt_max, '0'), v2780]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
      
      switch (v3138[0]) {
        case 'claim0_631': {
          const v3141 = v3138[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v3230 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3235 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3236 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v3237 = [v3231, v3235, v3236];
          const v3238 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3237);
          ;
          const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3240 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3244 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3245 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v3246 = [v3240, v3244, v3245];
          const v3247 = stdlib.Array_set(v3238, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3246);
          ;
          const v3250 = stdlib.gt(v3139, v2891);
          const v3251 = v3250 ? v3139 : v2891;
          const v3252 = stdlib.lt(v3251, v2782);
          const v3253 = v3252 ? v3251 : v2782;
          const v3254 = stdlib.sub(v3253, v2891);
          const v3255 = stdlib.cast("UInt", "UInt256", v3254, false);
          const v3256 = stdlib.cast("UInt", "UInt256", v2783, false);
          const v3257 = stdlib.mul256(v3256, v3255);
          const v3258 = stdlib.mul256(v3257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3259 = stdlib.cast("UInt", "UInt256", v2894, false);
          const v3260 = stdlib.div256(v3258, v3259);
          const v3261 = stdlib.add256(v2892, v3260);
          const v3262 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3137), null);
          const v3263 = stdlib.fromSome(v3262, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
          const v3264 = stdlib.cast("UInt", "UInt256", v3263, false);
          const v3265 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3137), null);
          const v3266 = stdlib.fromSome(v3265, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3267 = stdlib.sub256(v3261, v3266);
          const v3268 = stdlib.mul256(v3264, v3267);
          const v3269 = stdlib.div256(v3268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3270 = stdlib.cast("UInt256", "UInt", v3269, false);
          const v3271 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v3137), null);
          const v3272 = stdlib.fromSome(v3271, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
          const v3273 = stdlib.add(v3270, v3272);
          await stdlib.simMapSet(sim_r, 1, v3137, v3273);
          await stdlib.simMapSet(sim_r, 3, v3137, v3261);
          const v3277 = stdlib.gt(v3251, v2782);
          const v3278 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3137), null);
          const v3279 = stdlib.fromSome(v3278, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
          const v3280 = stdlib.add(v3279, v2785);
          const v3281 = stdlib.le(v3280, v3251);
          const v3282 = v3277 ? true : v3281;
          if (v3282) {
            const v3285 = stdlib.muldiv(v3273, v2847, v2845);
            await stdlib.simMapSet(sim_r, 1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
            const v3286 = v3247[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
            const v3287 = v3286[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
            const v3295 = stdlib.sub(v2902, v3285);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: undefined /* Nothing */
              });
            const v3301 = stdlib.sub(v3287, v3273);
            const v3304 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
            const v3305 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
            const v3306 = [v3301, v3304, v3305];
            const v3307 = stdlib.Array_set(v3247, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v3306);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: v2780
              });
            const v3308 = [v3273, v3285];
            await stdlib.simMapSet(sim_r, 2, v3137, v3253);
            const v3319 = {
              now: v3251,
              result: v3308
              };
            const v3322 = await txn1.getOutput('claim', 'v3319', ctc14, v3319);
            
            const v10561 = v2890;
            const v10562 = v3253;
            const v10563 = v3261;
            const v10564 = v2893;
            const v10565 = v2894;
            const v10567 = v3307;
            const v10568 = v3295;
            sim_r.isHalt = false;
            }
          else {
            const v3340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v3341 = {
              now: v3251,
              result: v3340
              };
            const v3344 = await txn1.getOutput('claim', 'v3341', ctc14, v3341);
            
            const v10581 = v2890;
            const v10582 = v3253;
            const v10583 = v3261;
            const v10584 = v2893;
            const v10585 = v2894;
            const v10587 = v3247;
            const v10588 = v2902;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'claimFees0_631': {
          const v3723 = v3138[1];
          
          break;
          }
        case 'stake0_631': {
          const v4305 = v3138[1];
          
          break;
          }
        case 'unstake0_631': {
          const v4887 = v3138[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
  switch (v3138[0]) {
    case 'claim0_631': {
      const v3141 = v3138[1];
      undefined /* setApiDetails */;
      ;
      const v3230 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3231 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3235 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3236 = v3230[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v3237 = [v3231, v3235, v3236];
      const v3238 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3237);
      ;
      const v3239 = v3238[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3240 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3244 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3245 = v3239[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v3246 = [v3240, v3244, v3245];
      const v3247 = stdlib.Array_set(v3238, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3246);
      ;
      const v3250 = stdlib.gt(v3139, v2891);
      const v3251 = v3250 ? v3139 : v2891;
      const v3252 = stdlib.lt(v3251, v2782);
      const v3253 = v3252 ? v3251 : v2782;
      const v3254 = stdlib.sub(v3253, v2891);
      const v3255 = stdlib.cast("UInt", "UInt256", v3254, false);
      const v3256 = stdlib.cast("UInt", "UInt256", v2783, false);
      const v3257 = stdlib.mul256(v3256, v3255);
      const v3258 = stdlib.mul256(v3257, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3259 = stdlib.cast("UInt", "UInt256", v2894, false);
      const v3260 = stdlib.div256(v3258, v3259);
      const v3261 = stdlib.add256(v2892, v3260);
      const v3262 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
      const v3263 = stdlib.fromSome(v3262, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
      const v3264 = stdlib.cast("UInt", "UInt256", v3263, false);
      const v3265 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
      const v3266 = stdlib.fromSome(v3265, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3267 = stdlib.sub256(v3261, v3266);
      const v3268 = stdlib.mul256(v3264, v3267);
      const v3269 = stdlib.div256(v3268, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3270 = stdlib.cast("UInt256", "UInt", v3269, false);
      const v3271 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
      const v3272 = stdlib.fromSome(v3271, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
      const v3273 = stdlib.add(v3270, v3272);
      await stdlib.mapSet(map1, v3137, v3273);
      await stdlib.mapSet(map3, v3137, v3261);
      const v3277 = stdlib.gt(v3251, v2782);
      const v3278 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
      const v3279 = stdlib.fromSome(v3278, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
      const v3280 = stdlib.add(v3279, v2785);
      const v3281 = stdlib.le(v3280, v3251);
      const v3282 = v3277 ? true : v3281;
      if (v3282) {
        const v3285 = stdlib.muldiv(v3273, v2847, v2845);
        await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
        const v3286 = v3247[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v3287 = v3286[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v3288 = stdlib.le(v3273, v3287);
        const v3290 = stdlib.le(v3285, v2902);
        const v3291 = v3288 ? v3290 : false;
        stdlib.assert(v3291, {
          at: './index.rsh:294:12:application',
          fs: ['at ./index.rsh:462:68:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:457:22:application call to [unknown function] (defined at: ./index.rsh:457:22:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v3295 = stdlib.sub(v2902, v3285);
        ;
        const v3301 = stdlib.sub(v3287, v3273);
        const v3304 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
        const v3305 = v3286[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
        const v3306 = [v3301, v3304, v3305];
        const v3307 = stdlib.Array_set(v3247, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v3306);
        ;
        const v3308 = [v3273, v3285];
        await stdlib.mapSet(map2, v3137, v3253);
        const v3319 = {
          now: v3251,
          result: v3308
          };
        const v3322 = await txn1.getOutput('claim', 'v3319', ctc14, v3319);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v3141, v3322), {
            at: './index.rsh:454:13:application',
            fs: ['at ./index.rsh:454:13:application call to [unknown function] (defined at: ./index.rsh:454:13:function exp)', 'at ./index.rsh:464:23:application call to "callback" (defined at: ./index.rsh:457:22:function exp)', 'at ./index.rsh:457:22:application call to [unknown function] (defined at: ./index.rsh:457:22:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v10561 = v2890;
        const v10562 = v3253;
        const v10563 = v3261;
        const v10564 = v2893;
        const v10565 = v2894;
        const v10567 = v3307;
        const v10568 = v3295;
        const v10569 = v3307[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v10570 = v10569[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v10571 = stdlib.le(v2893, v10570);
        stdlib.assert(v10571, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v10572 = stdlib.le(v2890, v3295);
        stdlib.assert(v10572, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      else {
        const v3340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v3341 = {
          now: v3251,
          result: v3340
          };
        const v3344 = await txn1.getOutput('claim', 'v3341', ctc14, v3341);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v3141, v3344), {
            at: './index.rsh:454:13:application',
            fs: ['at ./index.rsh:454:13:application call to [unknown function] (defined at: ./index.rsh:454:13:function exp)', 'at ./index.rsh:468:23:application call to "callback" (defined at: ./index.rsh:457:22:function exp)', 'at ./index.rsh:457:22:application call to [unknown function] (defined at: ./index.rsh:457:22:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v10581 = v2890;
        const v10582 = v3253;
        const v10583 = v3261;
        const v10584 = v2893;
        const v10585 = v2894;
        const v10587 = v3247;
        const v10588 = v2902;
        const v10589 = v3247[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v10590 = v10589[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v10591 = stdlib.le(v2893, v10590);
        stdlib.assert(v10591, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v10592 = stdlib.le(v2890, v2902);
        stdlib.assert(v10592, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      break;
      }
    case 'claimFees0_631': {
      const v3723 = v3138[1];
      return;
      break;
      }
    case 'stake0_631': {
      const v4305 = v3138[1];
      return;
      break;
      }
    case 'unstake0_631': {
      const v4887 = v3138[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimFees4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimFees4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_631: ctc10,
    claimFees0_631: ctc10,
    stake0_631: ctc11,
    unstake0_631: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Struct([['now', ctc1], ['result', ctc13]]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v3009 = ctc.selfAddress();
  const v3011 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:481:31:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to "runclaimFees0_631" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'in',
    who: 'claimFees'
    });
  const v3012 = stdlib.addressEq(v3009, v2776);
  stdlib.assert(v3012, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:31:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to "runclaimFees0_631" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'only beneficiary can claim creation fees',
    who: 'claimFees'
    });
  const v3017 = ['claimFees0_631', v3011];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902, v3017],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:485:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:485:16:decimal', stdlib.UInt_max, '0'), v2779], [stdlib.checkedBigNumberify('./index.rsh:485:33:decimal', stdlib.UInt_max, '0'), v2780]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
      
      switch (v3138[0]) {
        case 'claim0_631': {
          const v3141 = v3138[1];
          
          break;
          }
        case 'claimFees0_631': {
          const v3723 = v3138[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimFees"
            });
          ;
          const v3812 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3813 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3817 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3818 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v3819 = [v3813, v3817, v3818];
          const v3820 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3819);
          ;
          const v3821 = v3820[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3822 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v3826 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v3827 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v3828 = [v3822, v3826, v3827];
          const v3829 = stdlib.Array_set(v3820, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3828);
          ;
          const v3947 = stdlib.sub(v2902, v2890);
          sim_r.txns.push({
            kind: 'from',
            to: v2776,
            tok: undefined /* Nothing */
            });
          const v3948 = v3829[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
          const v3949 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '0')];
          const v3953 = stdlib.sub(v3949, v2893);
          const v3956 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
          const v3957 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '2')];
          const v3958 = [v3953, v3956, v3957];
          const v3959 = stdlib.Array_set(v3829, stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1'), v3958);
          sim_r.txns.push({
            kind: 'from',
            to: v2776,
            tok: v2780
            });
          const v3961 = stdlib.gt(v3139, v2891);
          const v3962 = v3961 ? v3139 : v2891;
          const v3963 = [v2893, v2890];
          const v3964 = {
            now: v3962,
            result: v3963
            };
          const v3967 = await txn1.getOutput('claimFees', 'v3964', ctc14, v3964);
          
          const v10741 = stdlib.checkedBigNumberify('./index.rsh:489:76:decimal', stdlib.UInt_max, '0');
          const v10742 = v2891;
          const v10743 = v2892;
          const v10744 = stdlib.checkedBigNumberify('./index.rsh:489:73:decimal', stdlib.UInt_max, '0');
          const v10745 = v2894;
          const v10747 = v3959;
          const v10748 = v3947;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_631': {
          const v4305 = v3138[1];
          
          break;
          }
        case 'unstake0_631': {
          const v4887 = v3138[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
  switch (v3138[0]) {
    case 'claim0_631': {
      const v3141 = v3138[1];
      return;
      break;
      }
    case 'claimFees0_631': {
      const v3723 = v3138[1];
      undefined /* setApiDetails */;
      const v3738 = stdlib.addressEq(v3137, v2776);
      stdlib.assert(v3738, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:31:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:481:31:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
        msg: 'only beneficiary can claim creation fees',
        who: 'claimFees'
        });
      ;
      const v3812 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3813 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3817 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3818 = v3812[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v3819 = [v3813, v3817, v3818];
      const v3820 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v3819);
      ;
      const v3821 = v3820[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3822 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v3826 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v3827 = v3821[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v3828 = [v3822, v3826, v3827];
      const v3829 = stdlib.Array_set(v3820, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v3828);
      ;
      const v3947 = stdlib.sub(v2902, v2890);
      ;
      const v3948 = v3829[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
      const v3949 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '0')];
      const v3953 = stdlib.sub(v3949, v2893);
      const v3956 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1')];
      const v3957 = v3948[stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '2')];
      const v3958 = [v3953, v3956, v3957];
      const v3959 = stdlib.Array_set(v3829, stdlib.checkedBigNumberify('./index.rsh:487:68:application', stdlib.UInt_max, '1'), v3958);
      ;
      const v3961 = stdlib.gt(v3139, v2891);
      const v3962 = v3961 ? v3139 : v2891;
      const v3963 = [v2893, v2890];
      const v3964 = {
        now: v3962,
        result: v3963
        };
      const v3967 = await txn1.getOutput('claimFees', 'v3964', ctc14, v3964);
      if (v1865) {
        stdlib.protect(ctc0, await interact.out(v3723, v3967), {
          at: './index.rsh:481:13:application',
          fs: ['at ./index.rsh:481:13:application call to [unknown function] (defined at: ./index.rsh:481:13:function exp)', 'at ./index.rsh:488:21:application call to "callback" (defined at: ./index.rsh:486:22:function exp)', 'at ./index.rsh:486:22:application call to [unknown function] (defined at: ./index.rsh:486:22:function exp)'],
          msg: 'out',
          who: 'claimFees'
          });
        }
      else {
        }
      
      const v10741 = stdlib.checkedBigNumberify('./index.rsh:489:76:decimal', stdlib.UInt_max, '0');
      const v10742 = v2891;
      const v10743 = v2892;
      const v10744 = stdlib.checkedBigNumberify('./index.rsh:489:73:decimal', stdlib.UInt_max, '0');
      const v10745 = v2894;
      const v10747 = v3959;
      const v10748 = v3947;
      const v10749 = v3959[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
      const v10750 = v10749[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
      const v10751 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:489:73:decimal', stdlib.UInt_max, '0'), v10750);
      stdlib.assert(v10751, {
        at: './index.rsh:309:16:application',
        fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      const v10752 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:489:76:decimal', stdlib.UInt_max, '0'), v3947);
      stdlib.assert(v10752, {
        at: './index.rsh:310:16:application',
        fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      return;
      
      break;
      }
    case 'stake0_631': {
      const v4305 = v3138[1];
      return;
      break;
      }
    case 'unstake0_631': {
      const v4887 = v3138[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_631: ctc11,
    claimFees0_631: ctc11,
    stake0_631: ctc10,
    unstake0_631: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2961 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:391:34:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to "runstake0_631" (defined at: ./index.rsh:391:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v2962 = v2961[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2964 = stdlib.add(v2894, v2962);
  const v2965 = stdlib.lt(v2964, stdlib.UInt_max);
  stdlib.assert(v2965, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:392:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:391:34:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to "runstake0_631" (defined at: ./index.rsh:391:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'maximum stakes has been reached',
    who: 'stake'
    });
  const v2972 = ['stake0_631', v2961];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902, v2972],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:395:12:decimal', stdlib.UInt_max, '0'), [[v2962, v2779], [stdlib.checkedBigNumberify('./index.rsh:395:39:decimal', stdlib.UInt_max, '0'), v2780]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
      
      switch (v3138[0]) {
        case 'claim0_631': {
          const v3141 = v3138[1];
          
          break;
          }
        case 'claimFees0_631': {
          const v3723 = v3138[1];
          
          break;
          }
        case 'stake0_631': {
          const v4305 = v3138[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v4332 = v4305[stdlib.checkedBigNumberify('./index.rsh:391:12:spread', stdlib.UInt_max, '0')];
          const v4333 = stdlib.add(v2894, v4332);
          ;
          const v4394 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v4395 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v4396 = stdlib.add(v4395, v4332);
          const v4399 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4400 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v4401 = [v4396, v4399, v4400];
          const v4402 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4401);
          sim_r.txns.push({
            amt: v4332,
            kind: 'to',
            tok: v2779
            });
          const v4403 = v4402[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4404 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v4408 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4409 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v4410 = [v4404, v4408, v4409];
          const v4411 = stdlib.Array_set(v4402, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4410);
          ;
          const v4566 = stdlib.gt(v3139, v2891);
          const v4567 = v4566 ? v3139 : v2891;
          const v4568 = stdlib.lt(v4567, v2782);
          const v4569 = v4568 ? v4567 : v2782;
          const v4570 = stdlib.sub(v4569, v2891);
          const v4571 = stdlib.cast("UInt", "UInt256", v4570, false);
          const v4572 = stdlib.cast("UInt", "UInt256", v2783, false);
          const v4573 = stdlib.mul256(v4572, v4571);
          const v4574 = stdlib.mul256(v4573, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4575 = stdlib.cast("UInt", "UInt256", v2894, false);
          const v4576 = stdlib.div256(v4574, v4575);
          const v4577 = stdlib.add256(v2892, v4576);
          const v4578 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3137), null);
          const v4579 = stdlib.fromSome(v4578, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
          const v4580 = stdlib.cast("UInt", "UInt256", v4579, false);
          const v4581 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3137), null);
          const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4583 = stdlib.sub256(v4577, v4582);
          const v4584 = stdlib.mul256(v4580, v4583);
          const v4585 = stdlib.div256(v4584, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4586 = stdlib.cast("UInt256", "UInt", v4585, false);
          const v4587 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v3137), null);
          const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
          const v4589 = stdlib.add(v4586, v4588);
          await stdlib.simMapSet(sim_r, 1, v3137, v4589);
          await stdlib.simMapSet(sim_r, 3, v3137, v4577);
          const v4593 = stdlib.gt(v4567, v2782);
          const v4594 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3137), null);
          const v4595 = stdlib.fromSome(v4594, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
          const v4596 = stdlib.add(v4595, v2785);
          const v4597 = stdlib.le(v4596, v4567);
          const v4598 = v4593 ? true : v4597;
          if (v4598) {
            const v4601 = stdlib.muldiv(v4589, v2847, v2845);
            await stdlib.simMapSet(sim_r, 1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
            const v4602 = v4411[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
            const v4603 = v4602[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
            const v4611 = stdlib.sub(v2902, v4601);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: undefined /* Nothing */
              });
            const v4617 = stdlib.sub(v4603, v4589);
            const v4620 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
            const v4621 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
            const v4622 = [v4617, v4620, v4621];
            const v4623 = stdlib.Array_set(v4411, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v4622);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: v2780
              });
            const v4627 = stdlib.add(v4579, v4332);
            await stdlib.simMapSet(sim_r, 0, v3137, v4627);
            await stdlib.simMapSet(sim_r, 2, v3137, v4569);
            const v4637 = {
              now: v4567,
              result: v4332
              };
            const v4639 = await txn1.getOutput('stake', 'v4637', ctc13, v4637);
            
            const v10901 = v2890;
            const v10902 = v4569;
            const v10903 = v4577;
            const v10904 = v2893;
            const v10905 = v4333;
            const v10907 = v4623;
            const v10908 = v4611;
            sim_r.isHalt = false;
            }
          else {
            const v4656 = stdlib.add(v4579, v4332);
            await stdlib.simMapSet(sim_r, 0, v3137, v4656);
            await stdlib.simMapSet(sim_r, 2, v3137, v4569);
            const v4666 = {
              now: v4567,
              result: v4332
              };
            const v4668 = await txn1.getOutput('stake', 'v4666', ctc13, v4666);
            
            const v10921 = v2890;
            const v10922 = v4569;
            const v10923 = v4577;
            const v10924 = v2893;
            const v10925 = v4333;
            const v10927 = v4411;
            const v10928 = v2902;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'unstake0_631': {
          const v4887 = v3138[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
  switch (v3138[0]) {
    case 'claim0_631': {
      const v3141 = v3138[1];
      return;
      break;
      }
    case 'claimFees0_631': {
      const v3723 = v3138[1];
      return;
      break;
      }
    case 'stake0_631': {
      const v4305 = v3138[1];
      undefined /* setApiDetails */;
      const v4332 = v4305[stdlib.checkedBigNumberify('./index.rsh:391:12:spread', stdlib.UInt_max, '0')];
      const v4333 = stdlib.add(v2894, v4332);
      const v4334 = stdlib.lt(v4333, stdlib.UInt_max);
      stdlib.assert(v4334, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:392:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:391:34:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:391:34:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
        msg: 'maximum stakes has been reached',
        who: 'stake'
        });
      ;
      const v4394 = v2901[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v4395 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v4396 = stdlib.add(v4395, v4332);
      const v4399 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4400 = v4394[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v4401 = [v4396, v4399, v4400];
      const v4402 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4401);
      ;
      const v4403 = v4402[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4404 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v4408 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4409 = v4403[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v4410 = [v4404, v4408, v4409];
      const v4411 = stdlib.Array_set(v4402, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4410);
      ;
      const v4566 = stdlib.gt(v3139, v2891);
      const v4567 = v4566 ? v3139 : v2891;
      const v4568 = stdlib.lt(v4567, v2782);
      const v4569 = v4568 ? v4567 : v2782;
      const v4570 = stdlib.sub(v4569, v2891);
      const v4571 = stdlib.cast("UInt", "UInt256", v4570, false);
      const v4572 = stdlib.cast("UInt", "UInt256", v2783, false);
      const v4573 = stdlib.mul256(v4572, v4571);
      const v4574 = stdlib.mul256(v4573, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4575 = stdlib.cast("UInt", "UInt256", v2894, false);
      const v4576 = stdlib.div256(v4574, v4575);
      const v4577 = stdlib.add256(v2892, v4576);
      const v4578 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
      const v4579 = stdlib.fromSome(v4578, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
      const v4580 = stdlib.cast("UInt", "UInt256", v4579, false);
      const v4581 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
      const v4582 = stdlib.fromSome(v4581, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4583 = stdlib.sub256(v4577, v4582);
      const v4584 = stdlib.mul256(v4580, v4583);
      const v4585 = stdlib.div256(v4584, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4586 = stdlib.cast("UInt256", "UInt", v4585, false);
      const v4587 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
      const v4588 = stdlib.fromSome(v4587, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
      const v4589 = stdlib.add(v4586, v4588);
      await stdlib.mapSet(map1, v3137, v4589);
      await stdlib.mapSet(map3, v3137, v4577);
      const v4593 = stdlib.gt(v4567, v2782);
      const v4594 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
      const v4595 = stdlib.fromSome(v4594, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
      const v4596 = stdlib.add(v4595, v2785);
      const v4597 = stdlib.le(v4596, v4567);
      const v4598 = v4593 ? true : v4597;
      if (v4598) {
        const v4601 = stdlib.muldiv(v4589, v2847, v2845);
        await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
        const v4602 = v4411[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v4603 = v4602[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v4604 = stdlib.le(v4589, v4603);
        const v4606 = stdlib.le(v4601, v2902);
        const v4607 = v4604 ? v4606 : false;
        stdlib.assert(v4607, {
          at: './index.rsh:294:12:application',
          fs: ['at ./index.rsh:400:32:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:396:22:application call to [unknown function] (defined at: ./index.rsh:396:22:function exp)'],
          msg: null,
          who: 'stake'
          });
        const v4611 = stdlib.sub(v2902, v4601);
        ;
        const v4617 = stdlib.sub(v4603, v4589);
        const v4620 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
        const v4621 = v4602[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
        const v4622 = [v4617, v4620, v4621];
        const v4623 = stdlib.Array_set(v4411, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v4622);
        ;
        const v4627 = stdlib.add(v4579, v4332);
        await stdlib.mapSet(map0, v3137, v4627);
        await stdlib.mapSet(map2, v3137, v4569);
        const v4637 = {
          now: v4567,
          result: v4332
          };
        const v4639 = await txn1.getOutput('stake', 'v4637', ctc13, v4637);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v4305, v4639), {
            at: './index.rsh:391:13:application',
            fs: ['at ./index.rsh:391:13:application call to [unknown function] (defined at: ./index.rsh:391:13:function exp)', 'at ./index.rsh:406:21:application call to "callback" (defined at: ./index.rsh:396:22:function exp)', 'at ./index.rsh:396:22:application call to [unknown function] (defined at: ./index.rsh:396:22:function exp)'],
            msg: 'out',
            who: 'stake'
            });
          }
        else {
          }
        
        const v10901 = v2890;
        const v10902 = v4569;
        const v10903 = v4577;
        const v10904 = v2893;
        const v10905 = v4333;
        const v10907 = v4623;
        const v10908 = v4611;
        const v10909 = v4623[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v10910 = v10909[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v10911 = stdlib.le(v2893, v10910);
        stdlib.assert(v10911, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'stake'
          });
        const v10912 = stdlib.le(v2890, v4611);
        stdlib.assert(v10912, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'stake'
          });
        return;
        }
      else {
        const v4656 = stdlib.add(v4579, v4332);
        await stdlib.mapSet(map0, v3137, v4656);
        await stdlib.mapSet(map2, v3137, v4569);
        const v4666 = {
          now: v4567,
          result: v4332
          };
        const v4668 = await txn1.getOutput('stake', 'v4666', ctc13, v4666);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v4305, v4668), {
            at: './index.rsh:391:13:application',
            fs: ['at ./index.rsh:391:13:application call to [unknown function] (defined at: ./index.rsh:391:13:function exp)', 'at ./index.rsh:406:21:application call to "callback" (defined at: ./index.rsh:396:22:function exp)', 'at ./index.rsh:396:22:application call to [unknown function] (defined at: ./index.rsh:396:22:function exp)'],
            msg: 'out',
            who: 'stake'
            });
          }
        else {
          }
        
        const v10921 = v2890;
        const v10922 = v4569;
        const v10923 = v4577;
        const v10924 = v2893;
        const v10925 = v4333;
        const v10927 = v4411;
        const v10928 = v2902;
        const v10929 = v4411[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v10930 = v10929[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v10931 = stdlib.le(v2893, v10930);
        stdlib.assert(v10931, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'stake'
          });
        const v10932 = stdlib.le(v2890, v2902);
        stdlib.assert(v10932, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'stake'
          });
        return;
        }
      break;
      }
    case 'unstake0_631': {
      const v4887 = v3138[1];
      return;
      break;
      }
    }
  
  
  };
export async function _unstake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _unstake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_631: ctc11,
    claimFees0_631: ctc11,
    stake0_631: ctc10,
    unstake0_631: ctc10
    });
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc4;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  
  const [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1]);
  const v2974 = ctc.selfAddress();
  const v2976 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to "rununstake0_631" (defined at: ./index.rsh:417:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v2977 = v2976[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2979 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2974), null);
  const v2980 = stdlib.fromSome(v2979, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
  const v2981 = v2901[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
  const v2982 = v2981[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
  const v2983 = stdlib.le(v2980, v2982);
  stdlib.assert(v2983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to "rununstake0_631" (defined at: ./index.rsh:417:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v2985 = stdlib.lt(v2977, stdlib.UInt_max);
  stdlib.assert(v2985, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to "rununstake0_631" (defined at: ./index.rsh:417:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'tried to unstake too much really',
    who: 'unstake'
    });
  const v2987 = stdlib.addressEq(v2974, v2776);
  const v2988 = v2987 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:421:63:decimal', stdlib.UInt_max, '0');
  const v2989 = stdlib.add(v2977, v2988);
  const v2992 = stdlib.le(v2989, v2980);
  stdlib.assert(v2992, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to "rununstake0_631" (defined at: ./index.rsh:417:12:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v2999 = ['unstake0_631', v2976];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2776, v2777, v2778, v2779, v2780, v2781, v2782, v2783, v2784, v2785, v2845, v2847, v2890, v2891, v2892, v2893, v2894, v2901, v2902, v2999],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:426:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:426:16:decimal', stdlib.UInt_max, '0'), v2779], [stdlib.checkedBigNumberify('./index.rsh:426:33:decimal', stdlib.UInt_max, '0'), v2780]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
      
      switch (v3138[0]) {
        case 'claim0_631': {
          const v3141 = v3138[1];
          
          break;
          }
        case 'claimFees0_631': {
          const v3723 = v3138[1];
          
          break;
          }
        case 'stake0_631': {
          const v4305 = v3138[1];
          
          break;
          }
        case 'unstake0_631': {
          const v4887 = v3138[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          const v4928 = v4887[stdlib.checkedBigNumberify('./index.rsh:417:12:spread', stdlib.UInt_max, '0')];
          const v4929 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3137), null);
          const v4930 = stdlib.fromSome(v4929, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
          const v4931 = v2901[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
          const v4932 = v4931[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
          ;
          const v4981 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4982 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v4983 = [v4932, v4981, v4982];
          const v4984 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4983);
          ;
          const v4985 = v4984[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4986 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
          const v4990 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
          const v4991 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
          const v4992 = [v4986, v4990, v4991];
          const v4993 = stdlib.Array_set(v4984, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4992);
          ;
          const v5284 = stdlib.gt(v3139, v2891);
          const v5285 = v5284 ? v3139 : v2891;
          const v5286 = stdlib.lt(v5285, v2782);
          const v5287 = v5286 ? v5285 : v2782;
          const v5288 = stdlib.sub(v5287, v2891);
          const v5289 = stdlib.cast("UInt", "UInt256", v5288, false);
          const v5290 = stdlib.cast("UInt", "UInt256", v2783, false);
          const v5291 = stdlib.mul256(v5290, v5289);
          const v5292 = stdlib.mul256(v5291, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v5293 = stdlib.cast("UInt", "UInt256", v2894, false);
          const v5294 = stdlib.div256(v5292, v5293);
          const v5295 = stdlib.add256(v2892, v5294);
          const v5298 = stdlib.cast("UInt", "UInt256", v4930, false);
          const v5299 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v3137), null);
          const v5300 = stdlib.fromSome(v5299, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5301 = stdlib.sub256(v5295, v5300);
          const v5302 = stdlib.mul256(v5298, v5301);
          const v5303 = stdlib.div256(v5302, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v5304 = stdlib.cast("UInt256", "UInt", v5303, false);
          const v5305 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v3137), null);
          const v5306 = stdlib.fromSome(v5305, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
          const v5307 = stdlib.add(v5304, v5306);
          await stdlib.simMapSet(sim_r, 1, v3137, v5307);
          await stdlib.simMapSet(sim_r, 3, v3137, v5295);
          const v5311 = stdlib.gt(v5285, v2782);
          const v5312 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v3137), null);
          const v5313 = stdlib.fromSome(v5312, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
          const v5314 = stdlib.add(v5313, v2785);
          const v5315 = stdlib.le(v5314, v5285);
          const v5316 = v5311 ? true : v5315;
          const v5319 = v5316 ? stdlib.checkedBigNumberify('./index.rsh:429:51:decimal', stdlib.UInt_max, '0') : v5307;
          const v5320 = stdlib.muldiv(v5319, v2847, v2845);
          if (v5316) {
            const v5402 = stdlib.muldiv(v5307, v2847, v2845);
            await stdlib.simMapSet(sim_r, 1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
            const v5403 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
            const v5404 = v5403[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
            const v5412 = stdlib.sub(v2902, v5402);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: undefined /* Nothing */
              });
            const v5418 = stdlib.sub(v5404, v5307);
            const v5421 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
            const v5422 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
            const v5423 = [v5418, v5421, v5422];
            const v5424 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5423);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: v2780
              });
            const v5428 = stdlib.sub(v4930, v4928);
            await stdlib.simMapSet(sim_r, 0, v3137, v5428);
            const v5429 = v5424[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
            const v5430 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
            const v5434 = stdlib.sub(v5430, v4928);
            const v5437 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
            const v5438 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
            const v5439 = [v5434, v5437, v5438];
            const v5440 = stdlib.Array_set(v5424, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5439);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: v2779
              });
            await stdlib.simMapSet(sim_r, 2, v3137, v5287);
            const v5450 = {
              now: v5285,
              result: v4928
              };
            const v5452 = await txn1.getOutput('unstake', 'v5450', ctc13, v5450);
            
            const v5460 = stdlib.sub(v2894, v4928);
            const v5466 = stdlib.add(v2893, v5319);
            const v5467 = stdlib.add(v2890, v5320);
            const v11081 = v5467;
            const v11082 = v5287;
            const v11083 = v5295;
            const v11084 = v5466;
            const v11085 = v5460;
            const v11087 = v5440;
            const v11088 = v5412;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v3137, stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'));
            await stdlib.simMapSet(sim_r, 1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
            const v5334 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
            const v5335 = v5334[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
            const v5352 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
            const v5353 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
            const v5354 = [v5335, v5352, v5353];
            const v5355 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5354);
            const v5359 = stdlib.sub(v4930, v4928);
            await stdlib.simMapSet(sim_r, 0, v3137, v5359);
            const v5360 = v5355[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
            const v5361 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
            const v5365 = stdlib.sub(v5361, v4928);
            const v5368 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
            const v5369 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
            const v5370 = [v5365, v5368, v5369];
            const v5371 = stdlib.Array_set(v5355, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5370);
            sim_r.txns.push({
              kind: 'from',
              to: v3137,
              tok: v2779
              });
            await stdlib.simMapSet(sim_r, 2, v3137, v5287);
            const v5381 = {
              now: v5285,
              result: v4928
              };
            const v5383 = await txn1.getOutput('unstake', 'v5381', ctc13, v5381);
            
            const v5391 = stdlib.sub(v2894, v4928);
            const v5397 = stdlib.add(v2893, v5319);
            const v5398 = stdlib.add(v2890, v5320);
            const v11101 = v5398;
            const v11102 = v5287;
            const v11103 = v5295;
            const v11104 = v5397;
            const v11105 = v5391;
            const v11107 = v5371;
            const v11108 = v2902;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc9, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v3138], secs: v3140, time: v3139, didSend: v1865, from: v3137 } = txn1;
  switch (v3138[0]) {
    case 'claim0_631': {
      const v3141 = v3138[1];
      return;
      break;
      }
    case 'claimFees0_631': {
      const v3723 = v3138[1];
      return;
      break;
      }
    case 'stake0_631': {
      const v4305 = v3138[1];
      return;
      break;
      }
    case 'unstake0_631': {
      const v4887 = v3138[1];
      undefined /* setApiDetails */;
      const v4928 = v4887[stdlib.checkedBigNumberify('./index.rsh:417:12:spread', stdlib.UInt_max, '0')];
      const v4929 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3137), null);
      const v4930 = stdlib.fromSome(v4929, stdlib.checkedBigNumberify('./index.rsh:245:46:decimal', stdlib.UInt_max, '0'));
      const v4931 = v2901[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
      const v4932 = v4931[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
      const v4933 = stdlib.le(v4930, v4932);
      stdlib.assert(v4933, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v4935 = stdlib.lt(v4928, stdlib.UInt_max);
      stdlib.assert(v4935, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
        msg: 'tried to unstake too much really',
        who: 'unstake'
        });
      const v4937 = stdlib.addressEq(v3137, v2776);
      const v4938 = v4937 ? stdlib.checkedBigNumberify('./index.rsh:16:23:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:421:63:decimal', stdlib.UInt_max, '0');
      const v4939 = stdlib.add(v4928, v4938);
      const v4942 = stdlib.le(v4939, v4930);
      stdlib.assert(v4942, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:417:38:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:417:38:function exp)', 'at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)', 'at ./index.rsh:390:16:application call to [unknown function] (defined at: ./index.rsh:390:16:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      ;
      const v4981 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4982 = v4931[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v4983 = [v4932, v4981, v4982];
      const v4984 = stdlib.Array_set(v2901, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0'), v4983);
      ;
      const v4985 = v4984[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4986 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '0')];
      const v4990 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1')];
      const v4991 = v4985[stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '2')];
      const v4992 = [v4986, v4990, v4991];
      const v4993 = stdlib.Array_set(v4984, stdlib.checkedBigNumberify('./index.rsh:301:19:dot', stdlib.UInt_max, '1'), v4992);
      ;
      const v5269 = v4993[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
      const v5270 = v5269[stdlib.checkedBigNumberify('./index.rsh:418:38:application', stdlib.UInt_max, '0')];
      const v5271 = stdlib.le(v4930, v5270);
      stdlib.assert(v5271, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:418:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v5284 = stdlib.gt(v3139, v2891);
      const v5285 = v5284 ? v3139 : v2891;
      const v5286 = stdlib.lt(v5285, v2782);
      const v5287 = v5286 ? v5285 : v2782;
      const v5288 = stdlib.sub(v5287, v2891);
      const v5289 = stdlib.cast("UInt", "UInt256", v5288, false);
      const v5290 = stdlib.cast("UInt", "UInt256", v2783, false);
      const v5291 = stdlib.mul256(v5290, v5289);
      const v5292 = stdlib.mul256(v5291, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v5293 = stdlib.cast("UInt", "UInt256", v2894, false);
      const v5294 = stdlib.div256(v5292, v5293);
      const v5295 = stdlib.add256(v2892, v5294);
      const v5298 = stdlib.cast("UInt", "UInt256", v4930, false);
      const v5299 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v3137), null);
      const v5300 = stdlib.fromSome(v5299, stdlib.checkedBigNumberify('./index.rsh:255:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5301 = stdlib.sub256(v5295, v5300);
      const v5302 = stdlib.mul256(v5298, v5301);
      const v5303 = stdlib.div256(v5302, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v5304 = stdlib.cast("UInt256", "UInt", v5303, false);
      const v5305 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v3137), null);
      const v5306 = stdlib.fromSome(v5305, stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0'));
      const v5307 = stdlib.add(v5304, v5306);
      await stdlib.mapSet(map1, v3137, v5307);
      await stdlib.mapSet(map3, v3137, v5295);
      const v5311 = stdlib.gt(v5285, v2782);
      const v5312 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v3137), null);
      const v5313 = stdlib.fromSome(v5312, stdlib.checkedBigNumberify('./index.rsh:252:60:decimal', stdlib.UInt_max, '0'));
      const v5314 = stdlib.add(v5313, v2785);
      const v5315 = stdlib.le(v5314, v5285);
      const v5316 = v5311 ? true : v5315;
      const v5319 = v5316 ? stdlib.checkedBigNumberify('./index.rsh:429:51:decimal', stdlib.UInt_max, '0') : v5307;
      const v5320 = stdlib.muldiv(v5319, v2847, v2845);
      if (v5316) {
        const v5402 = stdlib.muldiv(v5307, v2847, v2845);
        await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
        const v5403 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v5404 = v5403[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v5405 = stdlib.le(v5307, v5404);
        const v5407 = stdlib.le(v5402, v2902);
        const v5408 = v5405 ? v5407 : false;
        stdlib.assert(v5408, {
          at: './index.rsh:294:12:application',
          fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v5412 = stdlib.sub(v2902, v5402);
        ;
        const v5418 = stdlib.sub(v5404, v5307);
        const v5421 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
        const v5422 = v5403[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
        const v5423 = [v5418, v5421, v5422];
        const v5424 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5423);
        ;
        const v5428 = stdlib.sub(v4930, v4928);
        await stdlib.mapSet(map0, v3137, v5428);
        const v5429 = v5424[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
        const v5430 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
        const v5434 = stdlib.sub(v5430, v4928);
        const v5437 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
        const v5438 = v5429[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
        const v5439 = [v5434, v5437, v5438];
        const v5440 = stdlib.Array_set(v5424, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5439);
        ;
        await stdlib.mapSet(map2, v3137, v5287);
        const v5450 = {
          now: v5285,
          result: v4928
          };
        const v5452 = await txn1.getOutput('unstake', 'v5450', ctc13, v5450);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v4887, v5452), {
            at: './index.rsh:417:13:application',
            fs: ['at ./index.rsh:417:13:application call to [unknown function] (defined at: ./index.rsh:417:13:function exp)', 'at ./index.rsh:443:21:application call to "callback" (defined at: ./index.rsh:427:22:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v5460 = stdlib.sub(v2894, v4928);
        const v5466 = stdlib.add(v2893, v5319);
        const v5467 = stdlib.add(v2890, v5320);
        const v11081 = v5467;
        const v11082 = v5287;
        const v11083 = v5295;
        const v11084 = v5466;
        const v11085 = v5460;
        const v11087 = v5440;
        const v11088 = v5412;
        const v11089 = v5440[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v11090 = v11089[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v11091 = stdlib.le(v5466, v11090);
        stdlib.assert(v11091, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v11092 = stdlib.le(v5467, v5412);
        stdlib.assert(v11092, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      else {
        await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'));
        await stdlib.mapSet(map1, v3137, stdlib.checkedBigNumberify('./index.rsh:291:18:decimal', stdlib.UInt_max, '0'));
        const v5334 = v4993[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '1')];
        const v5335 = v5334[stdlib.checkedBigNumberify('./index.rsh:294:37:application', stdlib.UInt_max, '0')];
        const v5336 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:434:31:decimal', stdlib.UInt_max, '0'), v5335);
        const v5338 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:285:38:application', stdlib.UInt_max, '0'), v2902);
        const v5339 = v5336 ? v5338 : false;
        stdlib.assert(v5339, {
          at: './index.rsh:294:12:application',
          fs: ['at ./index.rsh:436:30:application call to "claimRewards" (defined at: ./index.rsh:287:28:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v5352 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1')];
        const v5353 = v5334[stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '2')];
        const v5354 = [v5335, v5352, v5353];
        const v5355 = stdlib.Array_set(v4993, stdlib.checkedBigNumberify('./index.rsh:295:65:application', stdlib.UInt_max, '1'), v5354);
        const v5359 = stdlib.sub(v4930, v4928);
        await stdlib.mapSet(map0, v3137, v5359);
        const v5360 = v5355[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
        const v5361 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0')];
        const v5365 = stdlib.sub(v5361, v4928);
        const v5368 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '1')];
        const v5369 = v5360[stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '2')];
        const v5370 = [v5365, v5368, v5369];
        const v5371 = stdlib.Array_set(v5355, stdlib.checkedBigNumberify('./index.rsh:440:51:application', stdlib.UInt_max, '0'), v5370);
        ;
        await stdlib.mapSet(map2, v3137, v5287);
        const v5381 = {
          now: v5285,
          result: v4928
          };
        const v5383 = await txn1.getOutput('unstake', 'v5381', ctc13, v5381);
        if (v1865) {
          stdlib.protect(ctc0, await interact.out(v4887, v5383), {
            at: './index.rsh:417:13:application',
            fs: ['at ./index.rsh:417:13:application call to [unknown function] (defined at: ./index.rsh:417:13:function exp)', 'at ./index.rsh:443:21:application call to "callback" (defined at: ./index.rsh:427:22:function exp)', 'at ./index.rsh:427:22:application call to [unknown function] (defined at: ./index.rsh:427:22:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v5391 = stdlib.sub(v2894, v4928);
        const v5397 = stdlib.add(v2893, v5319);
        const v5398 = stdlib.add(v2890, v5320);
        const v11101 = v5398;
        const v11102 = v5287;
        const v11103 = v5295;
        const v11104 = v5397;
        const v11105 = v5391;
        const v11107 = v5371;
        const v11108 = v2902;
        const v11109 = v5371[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '1')];
        const v11110 = v11109[stdlib.checkedBigNumberify('./index.rsh:309:43:application', stdlib.UInt_max, '0')];
        const v11111 = stdlib.le(v5397, v11110);
        stdlib.assert(v11111, {
          at: './index.rsh:309:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v11112 = stdlib.le(v5398, v2902);
        stdlib.assert(v11112, {
          at: './index.rsh:310:16:application',
          fs: ['at ./index.rsh:301:19:application call to [unknown function] (defined at: ./index.rsh:301:19:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      break;
      }
    }
  
  
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimFees(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimFees expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimFees expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimFees4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _stake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _unstake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`],
    pure: [`global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAiAAEYBAgQAwb///////////8BkE4gQEhQWGAFPL36i9QErYjlhgvx3ZD8DKHR5LsH+rKstQPXpergAygwOGhweIABoI0GgJTr3AOAreIEJgUBAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gtrOnZAAACQEAAAAAAAAAAAAiNQAxGEEQUCcEZEkiWzUBSSEEWzUCIQVbNQgxGSMSQQAKMQAoIRGvZkIQFTYaABdJQQFYIjUEIzUGSSESDEAAnEkhEwxAAGlJIRQMQABPIRQSRDQBJRJEKGQpZFBJNQNXACA0A1cgCFA0A1coCFA0A1cwCFA0A1c4CFA0A1dACFA0A1dICFA0A1dQCFA0A1dYCFA0A1dgCFA1B0IPsiETEkQnBDX/KTT/UCEEr1BCAPlJIRUMQAATIRUSRCcENf8oNP9QIQSvUEIA3yESEkQ2GgE1/4ABAzT/UEIAzUkhFgxAAJNJIRcMQABnIRcSRDQBJRJENhoBNf8iNP+ID3pXAAlJNf4jWzT+IlVNFiI0/4gPZlcJCUk1/iNbNP4iVU0WUCI0/4gPUVcSCUk1/iNbNP4iVU0WUDIDNP+IDztXGyFJNf5XASA0/iJVTVA1B0IO/iEWEkQ0ASUSRChkKWRQSTUDV7AINANXgAhQNANXiCBQNQdCDtmBzcj6HhJENhoBNf+AAQI0/1BCAB42GgIXNQQ2GgM2GgEXSSMMQAvJSSEGDEAKySEGEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSkpKSkpJVwAgNf8hCls1/iEYWzX9IRlbNfwhGls1+yELWzX6IQxbNfkhDVs1+CEOWzX3IQ9bNfYhG1s19SEcWzX0IR1bNfMhHls18leIIDXxgagBWzXwgbABWzXvV7giNe6B2gFbNe1JNQU17IAEkfGnmjTsULA07CJVSYECDEAGyEkhBgxAA+MhBhJENOxXAQg167EisgEhB7IQNAiyGLM06xc16iIxAIgOB1cACUk16CNbNOgiVU016TTuVwARSTXoIls15zTpNOcORDTqIQgMRDTqIiMxADT/Ek0INOkORDTnFjToVwgIUDToVxABUDTuVxERUDXmNOZXERE15TTmVwARNOVXAAg05VcICFA05VcQAVBQNeQ06TTkVwARIlsORDTyMgYyBjTyDU014zT5NONJNPkMTTXiNPEkrzT4FlAkrzTiNPIJFlCjiA2pKqOIDaQkrzTvFlCiiA2aoIgNljXhJK806RZQNOEyAzEAiA0/VxshSTXfVwEgNN8iVU2hiA1zo4gNbyqiiA1qSUohBVsiEkQhBFsiEkQiWyISRCRbIjEAiA0JVwkJSTXfI1s03yJVTQg14DEAKDEAiAzxKTTgFlA130lXAAk031BMVxIqUGYxACgxAIgM1Sk04VA131cAGzTfUGY04zT5DSIxAIgMvVcSCUk13iNbNN4iVU009gg04w4RNd804CI0301JNd409B009Zc13TTfQQE0NOA09B009Zc13DEAKDEAiAx/KzXbSVcACTTbUExXEipQZjTkVxERSTXbIls12jTgNNoONNw07Q4QRLEisgE03LIII7IQMQCyB7M05FcAETTaNOAJFjTbVwgIUDTbVxABUFA12bEisgE04LISJbIQMQCyFDT7shGzMQAoMQCIDBEpNOk06gkWUDXYVwkzNNhMUGY02VcAETXYsSKyATTqshIlshAxALIUNPyyEbMxACgxAIgL3Ck04hZQNddJVwASNNdQTFcbIVBmgAgAAAAAAAAVSjTjFjTqFlBQsDTjFjTqFlA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNN0INOI04TTwNN4INO806gkyBjTYIls06gkWNNhXCAhQNNhXEAFQNNlXERFQNO003AlCCjwxACgxAIgLVSs13ElXAAk03FBMVxIqUGYxACgxAIgLPSs13ElXAAk03FBMVxIqUGY05FcREUk13CJbNdsiNNsOIjTtDhBENORXABE02xY03FcICFA03FcQAVBQNdoxACgxAIgK+Ck06TTqCRZQNdlXCTM02UxQZjTaVwARNdmxIrIBNOqyEiWyEDEAshQ0/LIRszEAKDEAiArDKTTiFlA12ElXABI02FBMVxshUGaACAAAAAAAABUFNOMWNOoWUFCwNOMWNOoWUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM03Qg04jThNPA03gg07zTqCTIGNNkiWzTqCRY02VcICFA02VcQAVA02lcREVA07UIJJkg07FcBCDXrsSKyASEHshA0CLIYszTrFzXqNO806ghJNekhCAxENO5XABFJNegiWzTqCBY06FcICFA06FcQAVA07lcREVA15zTqNPyICh8051cRETXmNOdXABE05lcACDTmVwgIUDTmVxABUFA15TTyMgYyBjTyDU015DT5NORJNPkMTTXjNPEkrzT4FlAkrzTjNPIJFlCjiAnyKqOICe0krzTvFlCiiAnjoIgJ3zXiIjEAiAmRVwAJSTXgI1s04CJVTTXhJK804RZQNOIyAzEAiAlzVxshSTXfVwEgNN8iVU2hiAmno4gJoyqiiAmeSUohBVsiEkQhBFsiEkQiWyISRCRbIjEAiAk9VwkJSTXfI1s03yJVTQg14DEAKDEAiAklKTTgFlA130lXAAk031BMVxIqUGYxACgxAIgJCSk04lA131cAGzTfUGY05DT5DSIxAIgI8VcSCUk13yNbNN8iVU009gg05A4RQQD0NOA09B009Zc13zEAKDEAiAjIKzXeSVcACTTeUExXEipQZjTlVxERSTXeIls13TTgNN0ONN807Q4QRLEisgE037III7IQMQCyB7OxIrIBNOCyEiWyEDEAshQ0+7IRszEAKDEAiAh0KTThNOoIFlA13FcJMzTcTFBmMQAoMQCICFopNOMWUDXcSVcAEjTcUExXGyFQZoAIAAAAAAAAEh005BY06hZQULA05BY06hZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTjNOI08DTpMgY05VcAETTdNOAJFjTeVwgIUDTeVxABUFA07TTfCUIGxTEAKDEAiAfeKTThNOoIFlA131cJMzTfTFBmMQAoMQCIB8QpNOMWUDXfSVcAEjTfUExXGyFQZoAIAAAAAAAAEjo05BY06hZQULA05BY06hZQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTjNOI08DTpMgY05TTtQgZISSMMQADpSDEANP8SRDTuVwARSTXrVwAINOtXCAhQNOtXEAFQNO5XERFQNeo06lcRETXpNOpXABE06VcACDTpVwgIUDTpVxABUFA16LEisgE087III7IQNP+yB7M06FcRETXnsSKyATTwshIlshA0/7IUNPuyEbOACAAAAAAAAA98NPIyBjIGNPINTRY08BY08xZQUFCwNPIyBjIGNPINTRY08BY08xZQUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IjTyNPEiNO8yBjToVwARNOciWzTwCRY051cICFA051cQAVBQNO008wlCBVlIsSKyASEHshA0CLIYszTuVwARSTXrVwAINOtXCAhQNOtXEAFQNO5XERFQNeo06lcRETXpNOpXABE06VcACDTpVwgIUDTpVxABUFA16DTyMgYyBjTyDU015zT5NOdJNPkMTTXmNPEkrzT4FlAkrzTmNPIJFlCjiAZHKqOIBkIkrzTvFlCiiAY4oIgGNDXlJK8iMQCIBeRXAAlJNeMjWzTjIlVNFlA05TIDMQCIBcxXGyFJNeNXASA04yJVTaGIBgCjiAX8KqKIBfdJSiEFWyISRCEEWyISRCJbIhJEJFsiMQCIBZZXCQlJNeMjWzTjIlVNCDXkMQAoMQCIBX4pNOQWUDXjSVcACTTjUExXEipQZjEAKDEAiAViKTTlUDXjVwAbNONQZjTnNPkNIjEAiAVKVxIJSTXjI1s04yJVTTT2CDTnDhFBAOI05DT0HTT1lzXjMQAoMQCIBSErNeJJVwAJNOJQTFcSKlBmNOhXERFJNeIiWzXhNOQ04Q404zTtDhBEsSKyATTjsggjshAxALIHs7EisgE05LISJbIQMQCyFDT7shGzMQAoMQCIBM0pNOYWUDXgSVcAEjTgUExXGyFQZoAIAAAAAAAADPc05xY05BY04xZQUFCwNOcWNOQWNOMWUFA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNOY05TTwNO8yBjToVwARNOE05AkWNOJXCAhQNOJXEAFQUDTtNOMJQgMwgAgAAAAAAAANDTTnFiEFr1BQsDTnFiEFr1A1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNOY05TTwNO8yBjToNO1CAukjEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQxbNf4hDls1/SEPWzX8V4giNfuBqgFbNfqBsgFbNfmBugFbNfiBwgFbNfeABJqLkXSwNPk09wg0/gg19jT6NPgINfU09ogDqzT7VxERNfQ09TT9iAO1NP8xABJENP8oNP+IA4CACQEAAAAAAAAAATXzVwkzNPNMUGY0A1cgIDQDIQtbNP40AyENWzT9NPw0AyEbWzQDIRxbNAMhHVs0AyEeWzT6NPk09zT+CDT8MgM0+CMyBjT7VwARNPQiWzT1CBY09FcICFA09FcQAVBQNPZCAfBIgcCaDIgDGLEisgEhB7IQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSkpXACA1/yEKWzX+IRhbNf0hGVs1/CEaWzX7IQtbNfohDFs1+SENWzX4IQ5bNfchD1s19oAEKjaAwzT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWULCBEa9JNfVJUDX0NPw0+xNENPRXABE18yEErzTzVwgIUDTzVxABUDT0VxERUDXyIR+IAk6xIrIBIrISJbIQMgqyFDT8shGzNPJXERE18TTyVwARIQSvNPFXCAhQNPFXEAFQUDXwIR+IAhixIrIBIrISJbIQMgqyFDT7shGzNP4hEAshCQ5ENP0hIA5ENPo0+QxENPk0+glJNe8hIQxENPYhIQxENPY07w5ENPgiDUQhCCEgCTXuNPg07gxENPc07gxEIQg07yEJCwo17TT4NO0MRDT3NP0INO0MRDTvNPgLNew07zT3CzXrNOw0/gshCQo16jTrNP4LIQkKNekxADT/UDT+FlA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWUDTwUDTsFlA06xZQNOoWUDTpFlAoSwFXAH9nKUsBV39LZ0gjNQEyBjUCQgDHNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNe017DT7NP5XEREiWw5ENPg0/w5ENOw07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPpQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/Y2dIJTUBMgY1AkIALTEZIRASRLEisgEhB7IQNAiyGCEQshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQjMTcSRCI1ASI1AiI1CEL/pkkxGGFAAAVIIRGviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIlJFSEKTAmvTFCJ`,
  appClear: `Bg==`,
  companionInfo: {
    api_claim: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 2,
  stateSize: 226,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:236:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:494:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:301:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "User": User,
  "claim": claim,
  "claimFees": claimFees,
  "stake": stake,
  "unstake": unstake
  };
export const _APIs = {
  claim: claim,
  claimFees: claimFees,
  stake: stake,
  unstake: unstake
  };

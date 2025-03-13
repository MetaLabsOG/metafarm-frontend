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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Struct([['totalStaked', ctc1], ['lastUpdateBlock', ctc1], ['rewardPerTokenStored', ctc6]]);
  const ctc8 = stdlib.T_Struct([['beneficiary', ctc0], ['creationFee', ctc1], ['flatAlgoCreationFee', ctc1], ['token', ctc2], ['beginBlock', ctc1], ['endBlock', ctc1], ['totalRewardAmount', ctc1], ['totalAlgoRewardAmount', ctc1], ['lockLengthBlocks', ctc1]]);
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
            const [v2231, v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2248, v2274, v2276, v2278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = svs;
            return (await ((async () => {
              
              const v2370 = {
                lastUpdateBlock: v2318,
                rewardPerTokenStored: v2321,
                totalStaked: v2323
                };
              
              return v2370;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      initial: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2231, v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2248, v2274, v2276, v2278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = svs;
            return (await ((async () => {
              
              const v2304 = {
                beginBlock: v2236,
                beneficiary: v2232,
                creationFee: v2233,
                endBlock: v2237,
                flatAlgoCreationFee: v2234,
                lockLengthBlocks: v2240,
                token: v2235,
                totalAlgoRewardAmount: v2239,
                totalRewardAmount: v2238
                };
              
              return v2304;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      local: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v2231, v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2248, v2274, v2276, v2278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = svs;
            return (await ((async (_v2305 ) => {
                const v2305 = stdlib.protect(ctc0, _v2305, null);
              
              const v2306 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2305), null);
              const v2307 = stdlib.fromSome(v2306, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
              const v2308 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v2305), null);
              const v2309 = stdlib.fromSome(v2308, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
              const v2310 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v2305), null);
              const v2311 = stdlib.fromSome(v2310, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
              const v2312 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, v2305), null);
              const v2313 = stdlib.fromSome(v2312, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
              const v2314 = {
                lockTimestamp: v2311,
                reward: v2309,
                rewardPerTokenPaid: v2313,
                staked: v2307
                };
              
              return v2314;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc5, ctc6, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc6, ctc6, ctc1, ctc1, ctc5, ctc1, ctc4, ctc1]
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
    flatAlgoCreationFee: ctc1,
    lockLengthBlocks: ctc1,
    token: ctc6,
    totalAlgoRewardAmount: ctc1,
    totalRewardAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    claim0_428: ctc8,
    claimFees0_428: ctc8,
    stake0_428: ctc9,
    unstake0_428: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc12 = stdlib.T_Struct([['now', ctc1], ['result', ctc11]]);
  const ctc13 = stdlib.T_Struct([['now', ctc1], ['result', ctc1]]);
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
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
  
  
  const v2185 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2186 = [v2185];
  const v2192 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './index.rsh:174:38:application',
    fs: ['at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v2193 = v2192.beginBlock;
  const v2194 = v2192.beneficiary;
  const v2195 = v2192.creationFee;
  const v2196 = v2192.endBlock;
  const v2197 = v2192.flatAlgoCreationFee;
  const v2198 = v2192.lockLengthBlocks;
  const v2199 = v2192.token;
  const v2200 = v2192.totalAlgoRewardAmount;
  const v2201 = v2192.totalRewardAmount;
  const v2212 = stdlib.mul(v2195, stdlib.checkedBigNumberify('./index.rsh:128:25:decimal', stdlib.UInt_max, '5'));
  const v2213 = stdlib.le(v2212, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2213, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:128:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2215 = stdlib.le(v2197, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2215, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2217 = stdlib.lt(v2193, v2196);
  stdlib.assert(v2217, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2219 = stdlib.sub(v2196, v2193);
  const v2220 = stdlib.lt(v2219, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2220, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2222 = stdlib.lt(v2198, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2222, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2225 = stdlib.le(v2198, v2219);
  stdlib.assert(v2225, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2227 = stdlib.gt(v2201, stdlib.checkedBigNumberify('./index.rsh:145:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2227, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:18:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)', 'at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2194, v2195, v2197, v2199, v2193, v2196, v2201, v2200, v2198],
    evt_cnt: 9,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:186:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240], secs: v2242, time: v2241, didSend: v190, from: v2231 } = txn1;
      
      const v2243 = v2186[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0')];
      const v2245 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '1')];
      const v2246 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '2')];
      const v2247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2245, v2246];
      const v2248 = stdlib.Array_set(v2186, stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0'), v2247);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2235
        });
      ;
      const v2258 = stdlib.sub(v2237, v2236);
      const v2270 = stdlib.cast("UInt", "UInt256", v2238, false);
      const v2271 = stdlib.mul256(v2270, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2273 = stdlib.cast("UInt", "UInt256", v2258, false);
      const v2274 = stdlib.div256(v2271, v2273);
      const v2275 = stdlib.mul(v2238, v2233);
      const v2276 = stdlib.div(v2275, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      const v2277 = stdlib.mul(v2239, v2233);
      const v2278 = stdlib.div(v2277, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240], secs: v2242, time: v2241, didSend: v190, from: v2231 } = txn1;
  const v2243 = v2186[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0')];
  const v2245 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '1')];
  const v2246 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '2')];
  const v2247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2245, v2246];
  const v2248 = stdlib.Array_set(v2186, stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0'), v2247);
  ;
  ;
  const v2251 = stdlib.mul(v2233, stdlib.checkedBigNumberify('./index.rsh:128:25:decimal', stdlib.UInt_max, '5'));
  const v2252 = stdlib.le(v2251, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2252, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:128:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'Creator'
    });
  const v2254 = stdlib.le(v2234, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2254, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'Creator'
    });
  const v2256 = stdlib.lt(v2236, v2237);
  stdlib.assert(v2256, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2258 = stdlib.sub(v2237, v2236);
  const v2259 = stdlib.lt(v2258, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2259, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2261 = stdlib.lt(v2240, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2264 = stdlib.le(v2240, v2258);
  stdlib.assert(v2264, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2266 = stdlib.gt(v2238, stdlib.checkedBigNumberify('./index.rsh:145:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2266, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'Creator'
    });
  const v2270 = stdlib.cast("UInt", "UInt256", v2238, false);
  const v2271 = stdlib.mul256(v2270, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2273 = stdlib.cast("UInt", "UInt256", v2258, false);
  const v2274 = stdlib.div256(v2271, v2273);
  const v2275 = stdlib.mul(v2238, v2233);
  const v2276 = stdlib.div(v2275, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2277 = stdlib.mul(v2239, v2233);
  const v2278 = stdlib.div(v2277, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2279 = stdlib.add(v2239, v2278);
  const v2280 = stdlib.add(v2279, v2234);
  const v2281 = stdlib.add(v2238, v2276);
  
  const txn2 = await (ctc.sendrecv({
    args: [v2231, v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2248, v2274, v2276, v2278],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2241,
    onlyIf: true,
    out_tys: [],
    pay: [v2280, [[v2281, v2235]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [], secs: v2284, time: v2283, didSend: v346, from: v2282 } = txn2;
      
      const v2285 = stdlib.add(v2239, v2278);
      const v2286 = stdlib.add(v2285, v2234);
      const v2287 = stdlib.add(v2238, v2276);
      sim_r.txns.push({
        amt: v2286,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2290 = v2248[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
      const v2291 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
      const v2292 = stdlib.add(v2291, v2287);
      const v2295 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '1')];
      const v2296 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '2')];
      const v2297 = [v2292, v2295, v2296];
      const v2298 = stdlib.Array_set(v2248, stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0'), v2297);
      sim_r.txns.push({
        amt: v2287,
        kind: 'to',
        tok: v2235
        });
      
      const v2316 = stdlib.add(v2278, v2234);
      const v2317 = v2316;
      const v2318 = v2236;
      const v2319 = v2236;
      const v2320 = stdlib.checkedBigNumberify('./index.rsh:292:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2321 = stdlib.checkedBigNumberify('./index.rsh:290:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      const v2322 = v2276;
      const v2323 = stdlib.checkedBigNumberify('./index.rsh:288:5:decimal', stdlib.UInt_max, '0');
      const v2324 = v2283;
      const v2330 = v2298;
      const v2331 = v2286;
      
      if (await (async () => {
        
        return true;})()) {
        const v2365 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v2366 = v2365[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2235
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
    tys: [ctc5, ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc16, ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2284, time: v2283, didSend: v346, from: v2282 } = txn2;
  const v2285 = stdlib.add(v2239, v2278);
  const v2286 = stdlib.add(v2285, v2234);
  const v2287 = stdlib.add(v2238, v2276);
  ;
  const v2290 = v2248[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
  const v2291 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
  const v2292 = stdlib.add(v2291, v2287);
  const v2295 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '1')];
  const v2296 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '2')];
  const v2297 = [v2292, v2295, v2296];
  const v2298 = stdlib.Array_set(v2248, stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0'), v2297);
  ;
  const v2299 = stdlib.addressEq(v2231, v2282);
  stdlib.assert(v2299, {
    at: './index.rsh:216:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:236:22:application',
    fs: ['at ./index.rsh:235:7:application call to [unknown function] (defined at: ./index.rsh:235:28:function exp)'],
    msg: 'deployed',
    who: 'Creator'
    });
  
  const v2316 = stdlib.add(v2278, v2234);
  let v2317 = v2316;
  let v2318 = v2236;
  let v2319 = v2236;
  let v2320 = stdlib.checkedBigNumberify('./index.rsh:292:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2321 = stdlib.checkedBigNumberify('./index.rsh:290:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2322 = v2276;
  let v2323 = stdlib.checkedBigNumberify('./index.rsh:288:5:decimal', stdlib.UInt_max, '0');
  let v2324 = v2283;
  let v2330 = v2298;
  let v2331 = v2286;
  
  while (await (async () => {
    const v2360 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2361 = v2360[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2362 = stdlib.le(v2322, v2361);
    stdlib.assert(v2362, {
      at: './index.rsh:297:14:application',
      fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
      msg: null,
      who: 'Creator'
      });
    const v2364 = stdlib.le(v2317, v2331);
    stdlib.assert(v2364, {
      at: './index.rsh:298:14:application',
      fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
      msg: null,
      who: 'Creator'
      });
    
    return true;})()) {
    const v2365 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2366 = v2365[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2367 = stdlib.le(v2322, v2366);
    stdlib.assert(v2367, {
      at: './index.rsh:297:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v2369 = stdlib.le(v2317, v2331);
    stdlib.assert(v2369, {
      at: './index.rsh:298:14:application',
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
    const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn3;
    switch (v2488[0]) {
      case 'claim0_428': {
        const v2491 = v2488[1];
        undefined /* setApiDetails */;
        ;
        const v2556 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v2557 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v2558 = [v2366, v2556, v2557];
        const v2559 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v2558);
        ;
        let v2561;
        const v2562 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v2562) {
          const v2564 = stdlib.gt(v2489, v2318);
          const v2565 = v2564 ? v2489 : v2318;
          const v2566 = stdlib.lt(v2565, v2237);
          const v2567 = v2566 ? v2565 : v2237;
          const v2568 = stdlib.sub(v2567, v2318);
          const v2569 = stdlib.cast("UInt", "UInt256", v2568, false);
          const v2570 = stdlib.mul256(v2274, v2569);
          const v2571 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v2572 = stdlib.div256(v2570, v2571);
          const v2573 = stdlib.add256(v2321, v2572);
          v2561 = v2573;
          }
        else {
          v2561 = v2321;
          }
        const v2574 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v2575 = stdlib.fromSome(v2574, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v2576 = stdlib.cast("UInt", "UInt256", v2575, false);
        const v2577 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v2578 = stdlib.fromSome(v2577, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2579 = stdlib.sub256(v2561, v2578);
        const v2580 = stdlib.mul256(v2576, v2579);
        const v2581 = stdlib.div256(v2580, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2582 = stdlib.cast("UInt256", "UInt", v2581, false);
        const v2583 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v2584 = stdlib.fromSome(v2583, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v2585 = stdlib.add(v2582, v2584);
        await stdlib.mapSet(map1, v2487, v2585);
        await stdlib.mapSet(map3, v2487, v2561);
        const v2587 = stdlib.gt(v2489, v2318);
        const v2588 = v2587 ? v2489 : v2318;
        const v2589 = stdlib.gt(v2588, v2237);
        const v2590 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
        const v2591 = stdlib.fromSome(v2590, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
        const v2592 = stdlib.add(v2591, v2240);
        const v2593 = stdlib.le(v2592, v2588);
        const v2594 = v2589 ? true : v2593;
        if (v2594) {
          const v2597 = stdlib.muldiv(v2585, v2239, v2238);
          await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '0'));
          const v2598 = v2559[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
          const v2599 = v2598[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
          const v2600 = stdlib.le(v2585, v2599);
          const v2602 = stdlib.le(v2597, v2331);
          const v2603 = v2600 ? v2602 : false;
          stdlib.assert(v2603, {
            at: './index.rsh:273:12:application',
            fs: ['at ./index.rsh:445:66:application call to "claimRewards" (defined at: ./index.rsh:266:28:function exp)', 'at ./index.rsh:440:20:application call to [unknown function] (defined at: ./index.rsh:440:20:function exp)'],
            msg: null,
            who: 'Creator'
            });
          const v2607 = stdlib.sub(v2331, v2597);
          ;
          const v2613 = stdlib.sub(v2599, v2585);
          const v2616 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '1')];
          const v2617 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '2')];
          const v2618 = [v2613, v2616, v2617];
          const v2619 = stdlib.Array_set(v2559, stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '0'), v2618);
          ;
          const v2620 = [v2585, v2597];
          const v2624 = stdlib.lt(v2588, v2237);
          const v2625 = v2624 ? v2588 : v2237;
          await stdlib.mapSet(map2, v2487, v2625);
          const v2631 = {
            now: v2588,
            result: v2620
            };
          await txn3.getOutput('claim', 'v2631', ctc12, v2631);
          const cv2317 = v2317;
          const cv2318 = v2625;
          const cv2319 = v2319;
          const cv2320 = v2320;
          const cv2321 = v2561;
          const cv2322 = v2322;
          const cv2323 = v2323;
          const cv2324 = v2489;
          const cv2330 = v2619;
          const cv2331 = v2607;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        else {
          const v2652 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2653 = {
            now: v2588,
            result: v2652
            };
          await txn3.getOutput('claim', 'v2653', ctc12, v2653);
          const v2668 = stdlib.lt(v2588, v2237);
          const v2669 = v2668 ? v2588 : v2237;
          const cv2317 = v2317;
          const cv2318 = v2669;
          const cv2319 = v2319;
          const cv2320 = v2320;
          const cv2321 = v2561;
          const cv2322 = v2322;
          const cv2323 = v2323;
          const cv2324 = v2489;
          const cv2330 = v2559;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        break;
        }
      case 'claimFees0_428': {
        const v2970 = v2488[1];
        undefined /* setApiDetails */;
        const v2982 = stdlib.addressEq(v2487, v2232);
        stdlib.assert(v2982, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:466:29:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'Creator'
          });
        ;
        const v3035 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3036 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3037 = [v2366, v3035, v3036];
        const v3038 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3037);
        ;
        let v3153;
        const v3155 = stdlib.gt(v2489, v2318);
        const v3156 = v3155 ? v2489 : v2318;
        const v3157 = stdlib.lt(v3156, v2237);
        const v3158 = v3157 ? v3156 : v2237;
        const v3159 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
        const v3160 = stdlib.lt(v2319, v3158);
        const v3161 = v3159 ? v3160 : false;
        if (v3161) {
          const v3162 = stdlib.sub(v3158, v2319);
          const v3163 = stdlib.cast("UInt", "UInt256", v3162, false);
          const v3164 = stdlib.mul256(v2274, v3163);
          v3153 = v3164;
          }
        else {
          v3153 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3165 = stdlib.add256(v2320, v3153);
        const v3166 = stdlib.div256(v3165, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3167 = stdlib.cast("UInt256", "UInt", v3166, false);
        const v3168 = stdlib.muldiv(v3167, v2239, v2238);
        const v3169 = stdlib.add(v2322, v3167);
        const v3170 = v3038[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
        const v3171 = v3170[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
        const v3172 = stdlib.lt(v3169, v3171);
        const v3173 = v3172 ? v3169 : v3171;
        const v3174 = stdlib.add(v3168, v2317);
        const v3176 = stdlib.lt(v3174, v2331);
        const v3177 = v3176 ? v3174 : v2331;
        const v3181 = stdlib.sub(v2331, v3177);
        ;
        const v3187 = stdlib.sub(v3171, v3173);
        const v3190 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '1')];
        const v3191 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '2')];
        const v3192 = [v3187, v3190, v3191];
        const v3193 = stdlib.Array_set(v3038, stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '0'), v3192);
        ;
        const v3197 = [v3173, v3177];
        const v3198 = {
          now: v3156,
          result: v3197
          };
        await txn3.getOutput('claimFees', 'v3198', ctc12, v3198);
        const v3213 = stdlib.cast("UInt", "UInt256", v3167, false);
        const v3214 = stdlib.mul256(v3213, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3215 = stdlib.sub256(v3165, v3214);
        const cv2317 = stdlib.checkedBigNumberify('./index.rsh:489:13:decimal', stdlib.UInt_max, '0');
        const cv2318 = v2318;
        const cv2319 = v3156;
        const cv2320 = v3215;
        const cv2321 = v2321;
        const cv2322 = stdlib.checkedBigNumberify('./index.rsh:488:13:decimal', stdlib.UInt_max, '0');
        const cv2323 = v2323;
        const cv2324 = v2489;
        const cv2330 = v3193;
        const cv2331 = v3181;
        
        v2317 = cv2317;
        v2318 = cv2318;
        v2319 = cv2319;
        v2320 = cv2320;
        v2321 = cv2321;
        v2322 = cv2322;
        v2323 = cv2323;
        v2324 = cv2324;
        v2330 = cv2330;
        v2331 = cv2331;
        
        continue;
        break;
        }
      case 'stake0_428': {
        const v3449 = v2488[1];
        undefined /* setApiDetails */;
        const v3470 = v3449[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
        const v3471 = stdlib.add(v2323, v3470);
        const v3472 = stdlib.lt(v3471, stdlib.UInt_max);
        stdlib.assert(v3472, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:377:32:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'Creator'
          });
        ;
        const v3511 = stdlib.add(v2366, v3470);
        const v3514 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3515 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3516 = [v3511, v3514, v3515];
        const v3517 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3516);
        ;
        let v3702;
        const v3703 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v3703) {
          const v3705 = stdlib.gt(v2489, v2318);
          const v3706 = v3705 ? v2489 : v2318;
          const v3707 = stdlib.lt(v3706, v2237);
          const v3708 = v3707 ? v3706 : v2237;
          const v3709 = stdlib.sub(v3708, v2318);
          const v3710 = stdlib.cast("UInt", "UInt256", v3709, false);
          const v3711 = stdlib.mul256(v2274, v3710);
          const v3712 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v3713 = stdlib.div256(v3711, v3712);
          const v3714 = stdlib.add256(v2321, v3713);
          v3702 = v3714;
          }
        else {
          v3702 = v2321;
          }
        const v3715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v3716 = stdlib.fromSome(v3715, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v3717 = stdlib.cast("UInt", "UInt256", v3716, false);
        const v3718 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v3719 = stdlib.fromSome(v3718, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3720 = stdlib.sub256(v3702, v3719);
        const v3721 = stdlib.mul256(v3717, v3720);
        const v3722 = stdlib.div256(v3721, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3723 = stdlib.cast("UInt256", "UInt", v3722, false);
        const v3724 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v3726 = stdlib.add(v3723, v3725);
        await stdlib.mapSet(map1, v2487, v3726);
        await stdlib.mapSet(map3, v2487, v3702);
        const v3729 = stdlib.add(v3716, v3470);
        await stdlib.mapSet(map0, v2487, v3729);
        const v3731 = stdlib.gt(v2489, v2318);
        const v3732 = v3731 ? v2489 : v2318;
        const v3733 = stdlib.lt(v3732, v2237);
        const v3734 = v3733 ? v3732 : v2237;
        await stdlib.mapSet(map2, v2487, v3734);
        const v3739 = {
          now: v3732,
          result: v3470
          };
        await txn3.getOutput('stake', 'v3739', ctc13, v3739);
        let v3755;
        const v3761 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
        const v3762 = stdlib.lt(v2319, v3734);
        const v3763 = v3761 ? v3762 : false;
        if (v3763) {
          const v3764 = stdlib.sub(v3734, v2319);
          const v3765 = stdlib.cast("UInt", "UInt256", v3764, false);
          const v3766 = stdlib.mul256(v2274, v3765);
          v3755 = v3766;
          }
        else {
          v3755 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3767 = stdlib.add256(v2320, v3755);
        const cv2317 = v2317;
        const cv2318 = v3734;
        const cv2319 = v2319;
        const cv2320 = v3767;
        const cv2321 = v3702;
        const cv2322 = v2322;
        const cv2323 = v3471;
        const cv2324 = v2489;
        const cv2330 = v3517;
        const cv2331 = v2331;
        
        v2317 = cv2317;
        v2318 = cv2318;
        v2319 = cv2319;
        v2320 = cv2320;
        v2321 = cv2321;
        v2322 = cv2322;
        v2323 = cv2323;
        v2324 = cv2324;
        v2330 = cv2330;
        v2331 = cv2331;
        
        continue;
        break;
        }
      case 'unstake0_428': {
        const v3928 = v2488[1];
        undefined /* setApiDetails */;
        const v3960 = v3928[stdlib.checkedBigNumberify('./index.rsh:401:10:spread', stdlib.UInt_max, '0')];
        const v3961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v3962 = stdlib.fromSome(v3961, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v3965 = stdlib.le(v3962, v2366);
        stdlib.assert(v3965, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v3967 = stdlib.lt(v3960, stdlib.UInt_max);
        stdlib.assert(v3967, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'Creator'
          });
        const v3971 = stdlib.le(v3960, v3962);
        stdlib.assert(v3971, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:404:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'Creator'
          });
        ;
        const v3993 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3994 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3995 = [v2366, v3993, v3994];
        const v3996 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3995);
        ;
        const v4252 = v3996[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
        const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
        const v4254 = stdlib.le(v3962, v4253);
        stdlib.assert(v4254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:408:20:application call to [unknown function] (defined at: ./index.rsh:408:20:function exp)'],
          msg: null,
          who: 'Creator'
          });
        let v4263;
        const v4264 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v4264) {
          const v4266 = stdlib.gt(v2489, v2318);
          const v4267 = v4266 ? v2489 : v2318;
          const v4268 = stdlib.lt(v4267, v2237);
          const v4269 = v4268 ? v4267 : v2237;
          const v4270 = stdlib.sub(v4269, v2318);
          const v4271 = stdlib.cast("UInt", "UInt256", v4270, false);
          const v4272 = stdlib.mul256(v2274, v4271);
          const v4273 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v4274 = stdlib.div256(v4272, v4273);
          const v4275 = stdlib.add256(v2321, v4274);
          v4263 = v4275;
          }
        else {
          v4263 = v2321;
          }
        const v4278 = stdlib.cast("UInt", "UInt256", v3962, false);
        const v4279 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v4280 = stdlib.fromSome(v4279, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4281 = stdlib.sub256(v4263, v4280);
        const v4282 = stdlib.mul256(v4278, v4281);
        const v4283 = stdlib.div256(v4282, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4284 = stdlib.cast("UInt256", "UInt", v4283, false);
        const v4285 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v4286 = stdlib.fromSome(v4285, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v4287 = stdlib.add(v4284, v4286);
        await stdlib.mapSet(map1, v2487, v4287);
        await stdlib.mapSet(map3, v2487, v4263);
        const v4289 = stdlib.gt(v2489, v2318);
        const v4290 = v4289 ? v2489 : v2318;
        const v4291 = stdlib.gt(v4290, v2237);
        const v4292 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
        const v4293 = stdlib.fromSome(v4292, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
        const v4294 = stdlib.add(v4293, v2240);
        const v4295 = stdlib.le(v4294, v4290);
        const v4296 = v4291 ? true : v4295;
        const v4299 = v4296 ? stdlib.checkedBigNumberify('./index.rsh:410:49:decimal', stdlib.UInt_max, '0') : v4287;
        const v4300 = stdlib.muldiv(v4299, v2239, v2238);
        if (v4296) {
          const v4361 = stdlib.sub(v3962, v3960);
          await stdlib.mapSet(map0, v2487, v4361);
          const v4367 = stdlib.sub(v4253, v3960);
          const v4370 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
          const v4371 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
          const v4372 = [v4367, v4370, v4371];
          const v4373 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4372);
          ;
          const v4374 = stdlib.sub(v2323, v3960);
          const v4378 = stdlib.lt(v4290, v2237);
          const v4379 = v4378 ? v4290 : v2237;
          await stdlib.mapSet(map2, v2487, v4379);
          const v4384 = {
            now: v4290,
            result: v3960
            };
          await txn3.getOutput('unstake', 'v4384', ctc13, v4384);
          const v4399 = stdlib.gt(v4374, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
          const v4403 = v4399 ? v2319 : v4290;
          const v4404 = stdlib.add(v2322, v4299);
          const v4405 = stdlib.add(v2317, v4300);
          const cv2317 = v4405;
          const cv2318 = v4379;
          const cv2319 = v4403;
          const cv2320 = v2320;
          const cv2321 = v4263;
          const cv2322 = v4404;
          const cv2323 = v4374;
          const cv2324 = v2489;
          const cv2330 = v4373;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:415:29:decimal', stdlib.UInt_max, '0'));
          const v4313 = stdlib.sub(v3962, v3960);
          await stdlib.mapSet(map0, v2487, v4313);
          const v4319 = stdlib.sub(v4253, v3960);
          const v4322 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
          const v4323 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
          const v4324 = [v4319, v4322, v4323];
          const v4325 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4324);
          ;
          const v4326 = stdlib.sub(v2323, v3960);
          const v4330 = stdlib.lt(v4290, v2237);
          const v4331 = v4330 ? v4290 : v2237;
          await stdlib.mapSet(map2, v2487, v4331);
          const v4336 = {
            now: v4290,
            result: v3960
            };
          await txn3.getOutput('unstake', 'v4336', ctc13, v4336);
          const v4351 = stdlib.gt(v4326, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
          const v4355 = v4351 ? v2319 : v4290;
          const v4356 = stdlib.add(v2322, v4299);
          const v4357 = stdlib.add(v2317, v4300);
          const cv2317 = v4357;
          const cv2318 = v4331;
          const cv2319 = v4355;
          const cv2320 = v2320;
          const cv2321 = v4263;
          const cv2322 = v4356;
          const cv2323 = v4326;
          const cv2324 = v2489;
          const cv2330 = v4325;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        break;
        }
      }
    
    }
  const v4407 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
  const v4408 = v4407[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
  const v4409 = stdlib.le(v2322, v4408);
  stdlib.assert(v4409, {
    at: './index.rsh:297:14:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v4411 = stdlib.le(v2317, v2331);
  stdlib.assert(v4411, {
    at: './index.rsh:298:14:application',
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
    claim0_428: ctc7,
    claimFees0_428: ctc7,
    stake0_428: ctc8,
    unstake0_428: ctc8
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
  
  
  const v2185 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2186 = [v2185];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 9,
    funcNum: 0,
    out_tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240], secs: v2242, time: v2241, didSend: v190, from: v2231 } = txn1;
  const v2243 = v2186[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0')];
  const v2245 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '1')];
  const v2246 = v2243[stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '2')];
  const v2247 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2245, v2246];
  const v2248 = stdlib.Array_set(v2186, stdlib.checkedBigNumberify('./index.rsh:186:11:dot', stdlib.UInt_max, '0'), v2247);
  ;
  ;
  const v2251 = stdlib.mul(v2233, stdlib.checkedBigNumberify('./index.rsh:128:25:decimal', stdlib.UInt_max, '5'));
  const v2252 = stdlib.le(v2251, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2252, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:128:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: 'Maximum possible creation fee is 20%',
    who: 'User'
    });
  const v2254 = stdlib.le(v2234, stdlib.checkedBigNumberify('./index.rsh:8:36:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v2254, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: 'Flat ALGO creation fee cannot be more than 1000 ALGO',
    who: 'User'
    });
  const v2256 = stdlib.lt(v2236, v2237);
  stdlib.assert(v2256, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2258 = stdlib.sub(v2237, v2236);
  const v2259 = stdlib.lt(v2258, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2259, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2261 = stdlib.lt(v2240, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '10000000'));
  stdlib.assert(v2261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2264 = stdlib.le(v2240, v2258);
  stdlib.assert(v2264, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2266 = stdlib.gt(v2238, stdlib.checkedBigNumberify('./index.rsh:145:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2266, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:198:16:application call to "initialChecks" (defined at: ./index.rsh:127:5:function exp)'],
    msg: null,
    who: 'User'
    });
  const v2270 = stdlib.cast("UInt", "UInt256", v2238, false);
  const v2271 = stdlib.mul256(v2270, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
  const v2273 = stdlib.cast("UInt", "UInt256", v2258, false);
  const v2274 = stdlib.div256(v2271, v2273);
  const v2275 = stdlib.mul(v2238, v2233);
  const v2276 = stdlib.div(v2275, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const v2277 = stdlib.mul(v2239, v2233);
  const v2278 = stdlib.div(v2277, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, '10000'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2284, time: v2283, didSend: v346, from: v2282 } = txn2;
  const v2285 = stdlib.add(v2239, v2278);
  const v2286 = stdlib.add(v2285, v2234);
  const v2287 = stdlib.add(v2238, v2276);
  ;
  const v2290 = v2248[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
  const v2291 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0')];
  const v2292 = stdlib.add(v2291, v2287);
  const v2295 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '1')];
  const v2296 = v2290[stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '2')];
  const v2297 = [v2292, v2295, v2296];
  const v2298 = stdlib.Array_set(v2248, stdlib.checkedBigNumberify('./index.rsh:216:11:dot', stdlib.UInt_max, '0'), v2297);
  ;
  const v2299 = stdlib.addressEq(v2231, v2282);
  stdlib.assert(v2299, {
    at: './index.rsh:216:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:236:22:application',
    fs: ['at ./index.rsh:235:7:application call to [unknown function] (defined at: ./index.rsh:235:28:function exp)'],
    msg: 'deployed',
    who: 'User'
    });
  
  const v2316 = stdlib.add(v2278, v2234);
  let v2317 = v2316;
  let v2318 = v2236;
  let v2319 = v2236;
  let v2320 = stdlib.checkedBigNumberify('./index.rsh:292:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2321 = stdlib.checkedBigNumberify('./index.rsh:290:13:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
  let v2322 = v2276;
  let v2323 = stdlib.checkedBigNumberify('./index.rsh:288:5:decimal', stdlib.UInt_max, '0');
  let v2324 = v2283;
  let v2330 = v2298;
  let v2331 = v2286;
  
  while (await (async () => {
    const v2360 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2361 = v2360[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2362 = stdlib.le(v2322, v2361);
    stdlib.assert(v2362, {
      at: './index.rsh:297:14:application',
      fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
      msg: null,
      who: 'User'
      });
    const v2364 = stdlib.le(v2317, v2331);
    stdlib.assert(v2364, {
      at: './index.rsh:298:14:application',
      fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
      msg: null,
      who: 'User'
      });
    
    return true;})()) {
    const v2365 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2366 = v2365[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
    const v2367 = stdlib.le(v2322, v2366);
    stdlib.assert(v2367, {
      at: './index.rsh:297:14:application',
      fs: [],
      msg: null,
      who: 'User'
      });
    const v2369 = stdlib.le(v2317, v2331);
    stdlib.assert(v2369, {
      at: './index.rsh:298:14:application',
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
    const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn3;
    switch (v2488[0]) {
      case 'claim0_428': {
        const v2491 = v2488[1];
        undefined /* setApiDetails */;
        ;
        const v2556 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v2557 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v2558 = [v2366, v2556, v2557];
        const v2559 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v2558);
        ;
        let v2561;
        const v2562 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v2562) {
          const v2564 = stdlib.gt(v2489, v2318);
          const v2565 = v2564 ? v2489 : v2318;
          const v2566 = stdlib.lt(v2565, v2237);
          const v2567 = v2566 ? v2565 : v2237;
          const v2568 = stdlib.sub(v2567, v2318);
          const v2569 = stdlib.cast("UInt", "UInt256", v2568, false);
          const v2570 = stdlib.mul256(v2274, v2569);
          const v2571 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v2572 = stdlib.div256(v2570, v2571);
          const v2573 = stdlib.add256(v2321, v2572);
          v2561 = v2573;
          }
        else {
          v2561 = v2321;
          }
        const v2574 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v2575 = stdlib.fromSome(v2574, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v2576 = stdlib.cast("UInt", "UInt256", v2575, false);
        const v2577 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v2578 = stdlib.fromSome(v2577, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2579 = stdlib.sub256(v2561, v2578);
        const v2580 = stdlib.mul256(v2576, v2579);
        const v2581 = stdlib.div256(v2580, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v2582 = stdlib.cast("UInt256", "UInt", v2581, false);
        const v2583 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v2584 = stdlib.fromSome(v2583, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v2585 = stdlib.add(v2582, v2584);
        await stdlib.mapSet(map1, v2487, v2585);
        await stdlib.mapSet(map3, v2487, v2561);
        const v2587 = stdlib.gt(v2489, v2318);
        const v2588 = v2587 ? v2489 : v2318;
        const v2589 = stdlib.gt(v2588, v2237);
        const v2590 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
        const v2591 = stdlib.fromSome(v2590, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
        const v2592 = stdlib.add(v2591, v2240);
        const v2593 = stdlib.le(v2592, v2588);
        const v2594 = v2589 ? true : v2593;
        if (v2594) {
          const v2597 = stdlib.muldiv(v2585, v2239, v2238);
          await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '0'));
          const v2598 = v2559[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
          const v2599 = v2598[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
          const v2600 = stdlib.le(v2585, v2599);
          const v2602 = stdlib.le(v2597, v2331);
          const v2603 = v2600 ? v2602 : false;
          stdlib.assert(v2603, {
            at: './index.rsh:273:12:application',
            fs: ['at ./index.rsh:445:66:application call to "claimRewards" (defined at: ./index.rsh:266:28:function exp)', 'at ./index.rsh:440:20:application call to [unknown function] (defined at: ./index.rsh:440:20:function exp)'],
            msg: null,
            who: 'User'
            });
          const v2607 = stdlib.sub(v2331, v2597);
          ;
          const v2613 = stdlib.sub(v2599, v2585);
          const v2616 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '1')];
          const v2617 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '2')];
          const v2618 = [v2613, v2616, v2617];
          const v2619 = stdlib.Array_set(v2559, stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '0'), v2618);
          ;
          const v2620 = [v2585, v2597];
          const v2624 = stdlib.lt(v2588, v2237);
          const v2625 = v2624 ? v2588 : v2237;
          await stdlib.mapSet(map2, v2487, v2625);
          const v2631 = {
            now: v2588,
            result: v2620
            };
          await txn3.getOutput('claim', 'v2631', ctc11, v2631);
          const cv2317 = v2317;
          const cv2318 = v2625;
          const cv2319 = v2319;
          const cv2320 = v2320;
          const cv2321 = v2561;
          const cv2322 = v2322;
          const cv2323 = v2323;
          const cv2324 = v2489;
          const cv2330 = v2619;
          const cv2331 = v2607;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        else {
          const v2652 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v2653 = {
            now: v2588,
            result: v2652
            };
          await txn3.getOutput('claim', 'v2653', ctc11, v2653);
          const v2668 = stdlib.lt(v2588, v2237);
          const v2669 = v2668 ? v2588 : v2237;
          const cv2317 = v2317;
          const cv2318 = v2669;
          const cv2319 = v2319;
          const cv2320 = v2320;
          const cv2321 = v2561;
          const cv2322 = v2322;
          const cv2323 = v2323;
          const cv2324 = v2489;
          const cv2330 = v2559;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        break;
        }
      case 'claimFees0_428': {
        const v2970 = v2488[1];
        undefined /* setApiDetails */;
        const v2982 = stdlib.addressEq(v2487, v2232);
        stdlib.assert(v2982, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:466:29:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'only beneficiary can claim creation fees',
          who: 'User'
          });
        ;
        const v3035 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3036 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3037 = [v2366, v3035, v3036];
        const v3038 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3037);
        ;
        let v3153;
        const v3155 = stdlib.gt(v2489, v2318);
        const v3156 = v3155 ? v2489 : v2318;
        const v3157 = stdlib.lt(v3156, v2237);
        const v3158 = v3157 ? v3156 : v2237;
        const v3159 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
        const v3160 = stdlib.lt(v2319, v3158);
        const v3161 = v3159 ? v3160 : false;
        if (v3161) {
          const v3162 = stdlib.sub(v3158, v2319);
          const v3163 = stdlib.cast("UInt", "UInt256", v3162, false);
          const v3164 = stdlib.mul256(v2274, v3163);
          v3153 = v3164;
          }
        else {
          v3153 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3165 = stdlib.add256(v2320, v3153);
        const v3166 = stdlib.div256(v3165, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3167 = stdlib.cast("UInt256", "UInt", v3166, false);
        const v3168 = stdlib.muldiv(v3167, v2239, v2238);
        const v3169 = stdlib.add(v2322, v3167);
        const v3170 = v3038[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
        const v3171 = v3170[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
        const v3172 = stdlib.lt(v3169, v3171);
        const v3173 = v3172 ? v3169 : v3171;
        const v3174 = stdlib.add(v3168, v2317);
        const v3176 = stdlib.lt(v3174, v2331);
        const v3177 = v3176 ? v3174 : v2331;
        const v3181 = stdlib.sub(v2331, v3177);
        ;
        const v3187 = stdlib.sub(v3171, v3173);
        const v3190 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '1')];
        const v3191 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '2')];
        const v3192 = [v3187, v3190, v3191];
        const v3193 = stdlib.Array_set(v3038, stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '0'), v3192);
        ;
        const v3197 = [v3173, v3177];
        const v3198 = {
          now: v3156,
          result: v3197
          };
        await txn3.getOutput('claimFees', 'v3198', ctc11, v3198);
        const v3213 = stdlib.cast("UInt", "UInt256", v3167, false);
        const v3214 = stdlib.mul256(v3213, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3215 = stdlib.sub256(v3165, v3214);
        const cv2317 = stdlib.checkedBigNumberify('./index.rsh:489:13:decimal', stdlib.UInt_max, '0');
        const cv2318 = v2318;
        const cv2319 = v3156;
        const cv2320 = v3215;
        const cv2321 = v2321;
        const cv2322 = stdlib.checkedBigNumberify('./index.rsh:488:13:decimal', stdlib.UInt_max, '0');
        const cv2323 = v2323;
        const cv2324 = v2489;
        const cv2330 = v3193;
        const cv2331 = v3181;
        
        v2317 = cv2317;
        v2318 = cv2318;
        v2319 = cv2319;
        v2320 = cv2320;
        v2321 = cv2321;
        v2322 = cv2322;
        v2323 = cv2323;
        v2324 = cv2324;
        v2330 = cv2330;
        v2331 = cv2331;
        
        continue;
        break;
        }
      case 'stake0_428': {
        const v3449 = v2488[1];
        undefined /* setApiDetails */;
        const v3470 = v3449[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
        const v3471 = stdlib.add(v2323, v3470);
        const v3472 = stdlib.lt(v3471, stdlib.UInt_max);
        stdlib.assert(v3472, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:377:32:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'maximum stakes has been reached',
          who: 'User'
          });
        ;
        const v3511 = stdlib.add(v2366, v3470);
        const v3514 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3515 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3516 = [v3511, v3514, v3515];
        const v3517 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3516);
        ;
        let v3702;
        const v3703 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v3703) {
          const v3705 = stdlib.gt(v2489, v2318);
          const v3706 = v3705 ? v2489 : v2318;
          const v3707 = stdlib.lt(v3706, v2237);
          const v3708 = v3707 ? v3706 : v2237;
          const v3709 = stdlib.sub(v3708, v2318);
          const v3710 = stdlib.cast("UInt", "UInt256", v3709, false);
          const v3711 = stdlib.mul256(v2274, v3710);
          const v3712 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v3713 = stdlib.div256(v3711, v3712);
          const v3714 = stdlib.add256(v2321, v3713);
          v3702 = v3714;
          }
        else {
          v3702 = v2321;
          }
        const v3715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v3716 = stdlib.fromSome(v3715, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v3717 = stdlib.cast("UInt", "UInt256", v3716, false);
        const v3718 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v3719 = stdlib.fromSome(v3718, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3720 = stdlib.sub256(v3702, v3719);
        const v3721 = stdlib.mul256(v3717, v3720);
        const v3722 = stdlib.div256(v3721, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v3723 = stdlib.cast("UInt256", "UInt", v3722, false);
        const v3724 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v3726 = stdlib.add(v3723, v3725);
        await stdlib.mapSet(map1, v2487, v3726);
        await stdlib.mapSet(map3, v2487, v3702);
        const v3729 = stdlib.add(v3716, v3470);
        await stdlib.mapSet(map0, v2487, v3729);
        const v3731 = stdlib.gt(v2489, v2318);
        const v3732 = v3731 ? v2489 : v2318;
        const v3733 = stdlib.lt(v3732, v2237);
        const v3734 = v3733 ? v3732 : v2237;
        await stdlib.mapSet(map2, v2487, v3734);
        const v3739 = {
          now: v3732,
          result: v3470
          };
        await txn3.getOutput('stake', 'v3739', ctc12, v3739);
        let v3755;
        const v3761 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
        const v3762 = stdlib.lt(v2319, v3734);
        const v3763 = v3761 ? v3762 : false;
        if (v3763) {
          const v3764 = stdlib.sub(v3734, v2319);
          const v3765 = stdlib.cast("UInt", "UInt256", v3764, false);
          const v3766 = stdlib.mul256(v2274, v3765);
          v3755 = v3766;
          }
        else {
          v3755 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          }
        const v3767 = stdlib.add256(v2320, v3755);
        const cv2317 = v2317;
        const cv2318 = v3734;
        const cv2319 = v2319;
        const cv2320 = v3767;
        const cv2321 = v3702;
        const cv2322 = v2322;
        const cv2323 = v3471;
        const cv2324 = v2489;
        const cv2330 = v3517;
        const cv2331 = v2331;
        
        v2317 = cv2317;
        v2318 = cv2318;
        v2319 = cv2319;
        v2320 = cv2320;
        v2321 = cv2321;
        v2322 = cv2322;
        v2323 = cv2323;
        v2324 = cv2324;
        v2330 = cv2330;
        v2331 = cv2331;
        
        continue;
        break;
        }
      case 'unstake0_428': {
        const v3928 = v2488[1];
        undefined /* setApiDetails */;
        const v3960 = v3928[stdlib.checkedBigNumberify('./index.rsh:401:10:spread', stdlib.UInt_max, '0')];
        const v3961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
        const v3962 = stdlib.fromSome(v3961, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
        const v3965 = stdlib.le(v3962, v2366);
        stdlib.assert(v3965, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: null,
          who: 'User'
          });
        const v3967 = stdlib.lt(v3960, stdlib.UInt_max);
        stdlib.assert(v3967, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'tried to unstake too much really',
          who: 'User'
          });
        const v3971 = stdlib.le(v3960, v3962);
        stdlib.assert(v3971, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:404:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
          msg: 'tried to unstake more than staked on record',
          who: 'User'
          });
        ;
        const v3993 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
        const v3994 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
        const v3995 = [v2366, v3993, v3994];
        const v3996 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3995);
        ;
        const v4252 = v3996[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
        const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
        const v4254 = stdlib.le(v3962, v4253);
        stdlib.assert(v4254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:408:20:application call to [unknown function] (defined at: ./index.rsh:408:20:function exp)'],
          msg: null,
          who: 'User'
          });
        let v4263;
        const v4264 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
        if (v4264) {
          const v4266 = stdlib.gt(v2489, v2318);
          const v4267 = v4266 ? v2489 : v2318;
          const v4268 = stdlib.lt(v4267, v2237);
          const v4269 = v4268 ? v4267 : v2237;
          const v4270 = stdlib.sub(v4269, v2318);
          const v4271 = stdlib.cast("UInt", "UInt256", v4270, false);
          const v4272 = stdlib.mul256(v2274, v4271);
          const v4273 = stdlib.cast("UInt", "UInt256", v2323, false);
          const v4274 = stdlib.div256(v4272, v4273);
          const v4275 = stdlib.add256(v2321, v4274);
          v4263 = v4275;
          }
        else {
          v4263 = v2321;
          }
        const v4278 = stdlib.cast("UInt", "UInt256", v3962, false);
        const v4279 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
        const v4280 = stdlib.fromSome(v4279, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4281 = stdlib.sub256(v4263, v4280);
        const v4282 = stdlib.mul256(v4278, v4281);
        const v4283 = stdlib.div256(v4282, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
        const v4284 = stdlib.cast("UInt256", "UInt", v4283, false);
        const v4285 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
        const v4286 = stdlib.fromSome(v4285, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
        const v4287 = stdlib.add(v4284, v4286);
        await stdlib.mapSet(map1, v2487, v4287);
        await stdlib.mapSet(map3, v2487, v4263);
        const v4289 = stdlib.gt(v2489, v2318);
        const v4290 = v4289 ? v2489 : v2318;
        const v4291 = stdlib.gt(v4290, v2237);
        const v4292 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
        const v4293 = stdlib.fromSome(v4292, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
        const v4294 = stdlib.add(v4293, v2240);
        const v4295 = stdlib.le(v4294, v4290);
        const v4296 = v4291 ? true : v4295;
        const v4299 = v4296 ? stdlib.checkedBigNumberify('./index.rsh:410:49:decimal', stdlib.UInt_max, '0') : v4287;
        const v4300 = stdlib.muldiv(v4299, v2239, v2238);
        if (v4296) {
          const v4361 = stdlib.sub(v3962, v3960);
          await stdlib.mapSet(map0, v2487, v4361);
          const v4367 = stdlib.sub(v4253, v3960);
          const v4370 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
          const v4371 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
          const v4372 = [v4367, v4370, v4371];
          const v4373 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4372);
          ;
          const v4374 = stdlib.sub(v2323, v3960);
          const v4378 = stdlib.lt(v4290, v2237);
          const v4379 = v4378 ? v4290 : v2237;
          await stdlib.mapSet(map2, v2487, v4379);
          const v4384 = {
            now: v4290,
            result: v3960
            };
          await txn3.getOutput('unstake', 'v4384', ctc12, v4384);
          const v4399 = stdlib.gt(v4374, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
          const v4403 = v4399 ? v2319 : v4290;
          const v4404 = stdlib.add(v2322, v4299);
          const v4405 = stdlib.add(v2317, v4300);
          const cv2317 = v4405;
          const cv2318 = v4379;
          const cv2319 = v4403;
          const cv2320 = v2320;
          const cv2321 = v4263;
          const cv2322 = v4404;
          const cv2323 = v4374;
          const cv2324 = v2489;
          const cv2330 = v4373;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:415:29:decimal', stdlib.UInt_max, '0'));
          const v4313 = stdlib.sub(v3962, v3960);
          await stdlib.mapSet(map0, v2487, v4313);
          const v4319 = stdlib.sub(v4253, v3960);
          const v4322 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
          const v4323 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
          const v4324 = [v4319, v4322, v4323];
          const v4325 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4324);
          ;
          const v4326 = stdlib.sub(v2323, v3960);
          const v4330 = stdlib.lt(v4290, v2237);
          const v4331 = v4330 ? v4290 : v2237;
          await stdlib.mapSet(map2, v2487, v4331);
          const v4336 = {
            now: v4290,
            result: v3960
            };
          await txn3.getOutput('unstake', 'v4336', ctc12, v4336);
          const v4351 = stdlib.gt(v4326, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
          const v4355 = v4351 ? v2319 : v4290;
          const v4356 = stdlib.add(v2322, v4299);
          const v4357 = stdlib.add(v2317, v4300);
          const cv2317 = v4357;
          const cv2318 = v4331;
          const cv2319 = v4355;
          const cv2320 = v2320;
          const cv2321 = v4263;
          const cv2322 = v4356;
          const cv2323 = v4326;
          const cv2324 = v2489;
          const cv2330 = v4325;
          const cv2331 = v2331;
          
          v2317 = cv2317;
          v2318 = cv2318;
          v2319 = cv2319;
          v2320 = cv2320;
          v2321 = cv2321;
          v2322 = cv2322;
          v2323 = cv2323;
          v2324 = cv2324;
          v2330 = cv2330;
          v2331 = cv2331;
          
          continue;}
        break;
        }
      }
    
    }
  const v4407 = v2330[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
  const v4408 = v4407[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
  const v4409 = stdlib.le(v2322, v4408);
  stdlib.assert(v4409, {
    at: './index.rsh:297:14:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const v4411 = stdlib.le(v2317, v2331);
  stdlib.assert(v4411, {
    at: './index.rsh:298:14:application',
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_428: ctc10,
    claimFees0_428: ctc10,
    stake0_428: ctc11,
    unstake0_428: ctc11
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
  
  
  const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2412 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:437:25:application call to [unknown function] (defined at: ./index.rsh:437:25:function exp)', 'at ./index.rsh:287:21:application call to "runclaim0_428" (defined at: ./index.rsh:437:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v2416 = ['claim0_428', v2412];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366, v2416],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:439:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:439:14:decimal', stdlib.UInt_max, '0'), v2235]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
      
      switch (v2488[0]) {
        case 'claim0_428': {
          const v2491 = v2488[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          ;
          const v2556 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
          const v2557 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
          const v2558 = [v2366, v2556, v2557];
          const v2559 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v2558);
          ;
          let v2561;
          const v2562 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
          if (v2562) {
            const v2564 = stdlib.gt(v2489, v2318);
            const v2565 = v2564 ? v2489 : v2318;
            const v2566 = stdlib.lt(v2565, v2237);
            const v2567 = v2566 ? v2565 : v2237;
            const v2568 = stdlib.sub(v2567, v2318);
            const v2569 = stdlib.cast("UInt", "UInt256", v2568, false);
            const v2570 = stdlib.mul256(v2274, v2569);
            const v2571 = stdlib.cast("UInt", "UInt256", v2323, false);
            const v2572 = stdlib.div256(v2570, v2571);
            const v2573 = stdlib.add256(v2321, v2572);
            v2561 = v2573;
            }
          else {
            v2561 = v2321;
            }
          const v2574 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2487), null);
          const v2575 = stdlib.fromSome(v2574, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
          const v2576 = stdlib.cast("UInt", "UInt256", v2575, false);
          const v2577 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2487), null);
          const v2578 = stdlib.fromSome(v2577, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2579 = stdlib.sub256(v2561, v2578);
          const v2580 = stdlib.mul256(v2576, v2579);
          const v2581 = stdlib.div256(v2580, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v2582 = stdlib.cast("UInt256", "UInt", v2581, false);
          const v2583 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2487), null);
          const v2584 = stdlib.fromSome(v2583, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
          const v2585 = stdlib.add(v2582, v2584);
          await stdlib.simMapSet(sim_r, 1, v2487, v2585);
          await stdlib.simMapSet(sim_r, 3, v2487, v2561);
          const v2587 = stdlib.gt(v2489, v2318);
          const v2588 = v2587 ? v2489 : v2318;
          const v2589 = stdlib.gt(v2588, v2237);
          const v2590 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2487), null);
          const v2591 = stdlib.fromSome(v2590, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
          const v2592 = stdlib.add(v2591, v2240);
          const v2593 = stdlib.le(v2592, v2588);
          const v2594 = v2589 ? true : v2593;
          if (v2594) {
            const v2597 = stdlib.muldiv(v2585, v2239, v2238);
            await stdlib.simMapSet(sim_r, 1, v2487, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '0'));
            const v2598 = v2559[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
            const v2599 = v2598[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
            const v2607 = stdlib.sub(v2331, v2597);
            sim_r.txns.push({
              kind: 'from',
              to: v2487,
              tok: undefined /* Nothing */
              });
            const v2613 = stdlib.sub(v2599, v2585);
            const v2616 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '1')];
            const v2617 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '2')];
            const v2618 = [v2613, v2616, v2617];
            const v2619 = stdlib.Array_set(v2559, stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '0'), v2618);
            sim_r.txns.push({
              kind: 'from',
              to: v2487,
              tok: v2235
              });
            const v2620 = [v2585, v2597];
            const v2624 = stdlib.lt(v2588, v2237);
            const v2625 = v2624 ? v2588 : v2237;
            await stdlib.simMapSet(sim_r, 2, v2487, v2625);
            const v2631 = {
              now: v2588,
              result: v2620
              };
            const v2634 = await txn1.getOutput('claim', 'v2631', ctc14, v2631);
            
            const v7102 = v2317;
            const v7103 = v2625;
            const v7104 = v2319;
            const v7105 = v2320;
            const v7106 = v2561;
            const v7107 = v2322;
            const v7108 = v2323;
            const v7110 = v2619;
            const v7111 = v2607;
            sim_r.isHalt = false;
            }
          else {
            const v2652 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v2653 = {
              now: v2588,
              result: v2652
              };
            const v2656 = await txn1.getOutput('claim', 'v2653', ctc14, v2653);
            
            const v2668 = stdlib.lt(v2588, v2237);
            const v2669 = v2668 ? v2588 : v2237;
            const v7124 = v2317;
            const v7125 = v2669;
            const v7126 = v2319;
            const v7127 = v2320;
            const v7128 = v2561;
            const v7129 = v2322;
            const v7130 = v2323;
            const v7132 = v2559;
            const v7133 = v2331;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'claimFees0_428': {
          const v2970 = v2488[1];
          
          break;
          }
        case 'stake0_428': {
          const v3449 = v2488[1];
          
          break;
          }
        case 'unstake0_428': {
          const v3928 = v2488[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
  switch (v2488[0]) {
    case 'claim0_428': {
      const v2491 = v2488[1];
      undefined /* setApiDetails */;
      ;
      const v2556 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
      const v2557 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
      const v2558 = [v2366, v2556, v2557];
      const v2559 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v2558);
      ;
      let v2561;
      const v2562 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
      if (v2562) {
        const v2564 = stdlib.gt(v2489, v2318);
        const v2565 = v2564 ? v2489 : v2318;
        const v2566 = stdlib.lt(v2565, v2237);
        const v2567 = v2566 ? v2565 : v2237;
        const v2568 = stdlib.sub(v2567, v2318);
        const v2569 = stdlib.cast("UInt", "UInt256", v2568, false);
        const v2570 = stdlib.mul256(v2274, v2569);
        const v2571 = stdlib.cast("UInt", "UInt256", v2323, false);
        const v2572 = stdlib.div256(v2570, v2571);
        const v2573 = stdlib.add256(v2321, v2572);
        v2561 = v2573;
        }
      else {
        v2561 = v2321;
        }
      const v2574 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
      const v2575 = stdlib.fromSome(v2574, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
      const v2576 = stdlib.cast("UInt", "UInt256", v2575, false);
      const v2577 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
      const v2578 = stdlib.fromSome(v2577, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2579 = stdlib.sub256(v2561, v2578);
      const v2580 = stdlib.mul256(v2576, v2579);
      const v2581 = stdlib.div256(v2580, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v2582 = stdlib.cast("UInt256", "UInt", v2581, false);
      const v2583 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
      const v2584 = stdlib.fromSome(v2583, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
      const v2585 = stdlib.add(v2582, v2584);
      await stdlib.mapSet(map1, v2487, v2585);
      await stdlib.mapSet(map3, v2487, v2561);
      const v2587 = stdlib.gt(v2489, v2318);
      const v2588 = v2587 ? v2489 : v2318;
      const v2589 = stdlib.gt(v2588, v2237);
      const v2590 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
      const v2591 = stdlib.fromSome(v2590, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
      const v2592 = stdlib.add(v2591, v2240);
      const v2593 = stdlib.le(v2592, v2588);
      const v2594 = v2589 ? true : v2593;
      if (v2594) {
        const v2597 = stdlib.muldiv(v2585, v2239, v2238);
        await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:270:18:decimal', stdlib.UInt_max, '0'));
        const v2598 = v2559[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
        const v2599 = v2598[stdlib.checkedBigNumberify('./index.rsh:273:37:application', stdlib.UInt_max, '0')];
        const v2600 = stdlib.le(v2585, v2599);
        const v2602 = stdlib.le(v2597, v2331);
        const v2603 = v2600 ? v2602 : false;
        stdlib.assert(v2603, {
          at: './index.rsh:273:12:application',
          fs: ['at ./index.rsh:445:66:application call to "claimRewards" (defined at: ./index.rsh:266:28:function exp)', 'at ./index.rsh:440:20:application call to [unknown function] (defined at: ./index.rsh:440:20:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v2607 = stdlib.sub(v2331, v2597);
        ;
        const v2613 = stdlib.sub(v2599, v2585);
        const v2616 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '1')];
        const v2617 = v2598[stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '2')];
        const v2618 = [v2613, v2616, v2617];
        const v2619 = stdlib.Array_set(v2559, stdlib.checkedBigNumberify('./index.rsh:274:59:application', stdlib.UInt_max, '0'), v2618);
        ;
        const v2620 = [v2585, v2597];
        const v2624 = stdlib.lt(v2588, v2237);
        const v2625 = v2624 ? v2588 : v2237;
        await stdlib.mapSet(map2, v2487, v2625);
        const v2631 = {
          now: v2588,
          result: v2620
          };
        const v2634 = await txn1.getOutput('claim', 'v2631', ctc14, v2631);
        if (v1491) {
          stdlib.protect(ctc0, await interact.out(v2491, v2634), {
            at: './index.rsh:437:11:application',
            fs: ['at ./index.rsh:437:11:application call to [unknown function] (defined at: ./index.rsh:437:11:function exp)', 'at ./index.rsh:447:21:application call to "callback" (defined at: ./index.rsh:440:20:function exp)', 'at ./index.rsh:440:20:application call to [unknown function] (defined at: ./index.rsh:440:20:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v7102 = v2317;
        const v7103 = v2625;
        const v7104 = v2319;
        const v7105 = v2320;
        const v7106 = v2561;
        const v7107 = v2322;
        const v7108 = v2323;
        const v7110 = v2619;
        const v7111 = v2607;
        const v7112 = v2619[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7113 = v7112[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7114 = stdlib.le(v2322, v7113);
        stdlib.assert(v7114, {
          at: './index.rsh:297:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v7115 = stdlib.le(v2317, v2607);
        stdlib.assert(v7115, {
          at: './index.rsh:298:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      else {
        const v2652 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2653 = {
          now: v2588,
          result: v2652
          };
        const v2656 = await txn1.getOutput('claim', 'v2653', ctc14, v2653);
        if (v1491) {
          stdlib.protect(ctc0, await interact.out(v2491, v2656), {
            at: './index.rsh:437:11:application',
            fs: ['at ./index.rsh:437:11:application call to [unknown function] (defined at: ./index.rsh:437:11:function exp)', 'at ./index.rsh:451:21:application call to "callback" (defined at: ./index.rsh:440:20:function exp)', 'at ./index.rsh:440:20:application call to [unknown function] (defined at: ./index.rsh:440:20:function exp)'],
            msg: 'out',
            who: 'claim'
            });
          }
        else {
          }
        
        const v2668 = stdlib.lt(v2588, v2237);
        const v2669 = v2668 ? v2588 : v2237;
        const v7124 = v2317;
        const v7125 = v2669;
        const v7126 = v2319;
        const v7127 = v2320;
        const v7128 = v2561;
        const v7129 = v2322;
        const v7130 = v2323;
        const v7132 = v2559;
        const v7133 = v2331;
        const v7134 = v2559[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7135 = v7134[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7136 = stdlib.le(v2322, v7135);
        stdlib.assert(v7136, {
          at: './index.rsh:297:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        const v7137 = stdlib.le(v2317, v2331);
        stdlib.assert(v7137, {
          at: './index.rsh:298:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'claim'
          });
        return;
        }
      break;
      }
    case 'claimFees0_428': {
      const v2970 = v2488[1];
      return;
      break;
      }
    case 'stake0_428': {
      const v3449 = v2488[1];
      return;
      break;
      }
    case 'unstake0_428': {
      const v3928 = v2488[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    claim0_428: ctc10,
    claimFees0_428: ctc10,
    stake0_428: ctc11,
    unstake0_428: ctc11
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
  
  
  const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2418 = ctc.selfAddress();
  const v2420 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:466:29:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to "runclaimFees0_428" (defined at: ./index.rsh:466:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'in',
    who: 'claimFees'
    });
  const v2421 = stdlib.addressEq(v2418, v2232);
  stdlib.assert(v2421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:467:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:466:29:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to "runclaimFees0_428" (defined at: ./index.rsh:466:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'only beneficiary can claim creation fees',
    who: 'claimFees'
    });
  const v2426 = ['claimFees0_428', v2420];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366, v2426],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:470:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:470:14:decimal', stdlib.UInt_max, '0'), v2235]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
      
      switch (v2488[0]) {
        case 'claim0_428': {
          const v2491 = v2488[1];
          
          break;
          }
        case 'claimFees0_428': {
          const v2970 = v2488[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimFees"
            });
          ;
          const v3035 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
          const v3036 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
          const v3037 = [v2366, v3035, v3036];
          const v3038 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3037);
          ;
          let v3153;
          const v3155 = stdlib.gt(v2489, v2318);
          const v3156 = v3155 ? v2489 : v2318;
          const v3157 = stdlib.lt(v3156, v2237);
          const v3158 = v3157 ? v3156 : v2237;
          const v3159 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
          const v3160 = stdlib.lt(v2319, v3158);
          const v3161 = v3159 ? v3160 : false;
          if (v3161) {
            const v3162 = stdlib.sub(v3158, v2319);
            const v3163 = stdlib.cast("UInt", "UInt256", v3162, false);
            const v3164 = stdlib.mul256(v2274, v3163);
            v3153 = v3164;
            }
          else {
            v3153 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v3165 = stdlib.add256(v2320, v3153);
          const v3166 = stdlib.div256(v3165, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3167 = stdlib.cast("UInt256", "UInt", v3166, false);
          const v3168 = stdlib.muldiv(v3167, v2239, v2238);
          const v3169 = stdlib.add(v2322, v3167);
          const v3170 = v3038[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
          const v3171 = v3170[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
          const v3172 = stdlib.lt(v3169, v3171);
          const v3173 = v3172 ? v3169 : v3171;
          const v3174 = stdlib.add(v3168, v2317);
          const v3176 = stdlib.lt(v3174, v2331);
          const v3177 = v3176 ? v3174 : v2331;
          const v3181 = stdlib.sub(v2331, v3177);
          sim_r.txns.push({
            kind: 'from',
            to: v2232,
            tok: undefined /* Nothing */
            });
          const v3187 = stdlib.sub(v3171, v3173);
          const v3190 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '1')];
          const v3191 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '2')];
          const v3192 = [v3187, v3190, v3191];
          const v3193 = stdlib.Array_set(v3038, stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '0'), v3192);
          sim_r.txns.push({
            kind: 'from',
            to: v2232,
            tok: v2235
            });
          const v3197 = [v3173, v3177];
          const v3198 = {
            now: v3156,
            result: v3197
            };
          const v3201 = await txn1.getOutput('claimFees', 'v3198', ctc14, v3198);
          
          const v3213 = stdlib.cast("UInt", "UInt256", v3167, false);
          const v3214 = stdlib.mul256(v3213, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3215 = stdlib.sub256(v3165, v3214);
          const v7278 = stdlib.checkedBigNumberify('./index.rsh:489:13:decimal', stdlib.UInt_max, '0');
          const v7279 = v2318;
          const v7280 = v3156;
          const v7281 = v3215;
          const v7282 = v2321;
          const v7283 = stdlib.checkedBigNumberify('./index.rsh:488:13:decimal', stdlib.UInt_max, '0');
          const v7284 = v2323;
          const v7286 = v3193;
          const v7287 = v3181;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stake0_428': {
          const v3449 = v2488[1];
          
          break;
          }
        case 'unstake0_428': {
          const v3928 = v2488[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
  switch (v2488[0]) {
    case 'claim0_428': {
      const v2491 = v2488[1];
      return;
      break;
      }
    case 'claimFees0_428': {
      const v2970 = v2488[1];
      undefined /* setApiDetails */;
      const v2982 = stdlib.addressEq(v2487, v2232);
      stdlib.assert(v2982, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:467:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:466:29:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:466:29:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
        msg: 'only beneficiary can claim creation fees',
        who: 'claimFees'
        });
      ;
      const v3035 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
      const v3036 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
      const v3037 = [v2366, v3035, v3036];
      const v3038 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3037);
      ;
      let v3153;
      const v3155 = stdlib.gt(v2489, v2318);
      const v3156 = v3155 ? v2489 : v2318;
      const v3157 = stdlib.lt(v3156, v2237);
      const v3158 = v3157 ? v3156 : v2237;
      const v3159 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
      const v3160 = stdlib.lt(v2319, v3158);
      const v3161 = v3159 ? v3160 : false;
      if (v3161) {
        const v3162 = stdlib.sub(v3158, v2319);
        const v3163 = stdlib.cast("UInt", "UInt256", v3162, false);
        const v3164 = stdlib.mul256(v2274, v3163);
        v3153 = v3164;
        }
      else {
        v3153 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v3165 = stdlib.add256(v2320, v3153);
      const v3166 = stdlib.div256(v3165, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3167 = stdlib.cast("UInt256", "UInt", v3166, false);
      const v3168 = stdlib.muldiv(v3167, v2239, v2238);
      const v3169 = stdlib.add(v2322, v3167);
      const v3170 = v3038[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
      const v3171 = v3170[stdlib.checkedBigNumberify('./index.rsh:477:69:application', stdlib.UInt_max, '0')];
      const v3172 = stdlib.lt(v3169, v3171);
      const v3173 = v3172 ? v3169 : v3171;
      const v3174 = stdlib.add(v3168, v2317);
      const v3176 = stdlib.lt(v3174, v2331);
      const v3177 = v3176 ? v3174 : v2331;
      const v3181 = stdlib.sub(v2331, v3177);
      ;
      const v3187 = stdlib.sub(v3171, v3173);
      const v3190 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '1')];
      const v3191 = v3170[stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '2')];
      const v3192 = [v3187, v3190, v3191];
      const v3193 = stdlib.Array_set(v3038, stdlib.checkedBigNumberify('./index.rsh:480:60:application', stdlib.UInt_max, '0'), v3192);
      ;
      const v3197 = [v3173, v3177];
      const v3198 = {
        now: v3156,
        result: v3197
        };
      const v3201 = await txn1.getOutput('claimFees', 'v3198', ctc14, v3198);
      if (v1491) {
        stdlib.protect(ctc0, await interact.out(v2970, v3201), {
          at: './index.rsh:466:11:application',
          fs: ['at ./index.rsh:466:11:application call to [unknown function] (defined at: ./index.rsh:466:11:function exp)', 'at ./index.rsh:481:19:application call to "callback" (defined at: ./index.rsh:471:20:function exp)', 'at ./index.rsh:471:20:application call to [unknown function] (defined at: ./index.rsh:471:20:function exp)'],
          msg: 'out',
          who: 'claimFees'
          });
        }
      else {
        }
      
      const v3213 = stdlib.cast("UInt", "UInt256", v3167, false);
      const v3214 = stdlib.mul256(v3213, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3215 = stdlib.sub256(v3165, v3214);
      const v7278 = stdlib.checkedBigNumberify('./index.rsh:489:13:decimal', stdlib.UInt_max, '0');
      const v7279 = v2318;
      const v7280 = v3156;
      const v7281 = v3215;
      const v7282 = v2321;
      const v7283 = stdlib.checkedBigNumberify('./index.rsh:488:13:decimal', stdlib.UInt_max, '0');
      const v7284 = v2323;
      const v7286 = v3193;
      const v7287 = v3181;
      const v7288 = v3193[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
      const v7289 = v7288[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
      const v7290 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:488:13:decimal', stdlib.UInt_max, '0'), v7289);
      stdlib.assert(v7290, {
        at: './index.rsh:297:14:application',
        fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      const v7291 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:489:13:decimal', stdlib.UInt_max, '0'), v3181);
      stdlib.assert(v7291, {
        at: './index.rsh:298:14:application',
        fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
        msg: null,
        who: 'claimFees'
        });
      return;
      
      break;
      }
    case 'stake0_428': {
      const v3449 = v2488[1];
      return;
      break;
      }
    case 'unstake0_428': {
      const v3928 = v2488[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_428: ctc11,
    claimFees0_428: ctc11,
    stake0_428: ctc10,
    unstake0_428: ctc10
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
  
  
  const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2373 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:377:32:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to "runstake0_428" (defined at: ./index.rsh:377:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'in',
    who: 'stake'
    });
  const v2374 = v2373[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2376 = stdlib.add(v2323, v2374);
  const v2377 = stdlib.lt(v2376, stdlib.UInt_max);
  stdlib.assert(v2377, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:377:32:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to "runstake0_428" (defined at: ./index.rsh:377:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'maximum stakes has been reached',
    who: 'stake'
    });
  const v2384 = ['stake0_428', v2373];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366, v2384],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:381:10:decimal', stdlib.UInt_max, '0'), [[v2374, v2235]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
      
      switch (v2488[0]) {
        case 'claim0_428': {
          const v2491 = v2488[1];
          
          break;
          }
        case 'claimFees0_428': {
          const v2970 = v2488[1];
          
          break;
          }
        case 'stake0_428': {
          const v3449 = v2488[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stake"
            });
          const v3470 = v3449[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
          const v3471 = stdlib.add(v2323, v3470);
          ;
          const v3511 = stdlib.add(v2366, v3470);
          const v3514 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
          const v3515 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
          const v3516 = [v3511, v3514, v3515];
          const v3517 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3516);
          sim_r.txns.push({
            amt: v3470,
            kind: 'to',
            tok: v2235
            });
          let v3702;
          const v3703 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
          if (v3703) {
            const v3705 = stdlib.gt(v2489, v2318);
            const v3706 = v3705 ? v2489 : v2318;
            const v3707 = stdlib.lt(v3706, v2237);
            const v3708 = v3707 ? v3706 : v2237;
            const v3709 = stdlib.sub(v3708, v2318);
            const v3710 = stdlib.cast("UInt", "UInt256", v3709, false);
            const v3711 = stdlib.mul256(v2274, v3710);
            const v3712 = stdlib.cast("UInt", "UInt256", v2323, false);
            const v3713 = stdlib.div256(v3711, v3712);
            const v3714 = stdlib.add256(v2321, v3713);
            v3702 = v3714;
            }
          else {
            v3702 = v2321;
            }
          const v3715 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2487), null);
          const v3716 = stdlib.fromSome(v3715, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
          const v3717 = stdlib.cast("UInt", "UInt256", v3716, false);
          const v3718 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2487), null);
          const v3719 = stdlib.fromSome(v3718, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3720 = stdlib.sub256(v3702, v3719);
          const v3721 = stdlib.mul256(v3717, v3720);
          const v3722 = stdlib.div256(v3721, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v3723 = stdlib.cast("UInt256", "UInt", v3722, false);
          const v3724 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2487), null);
          const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
          const v3726 = stdlib.add(v3723, v3725);
          await stdlib.simMapSet(sim_r, 1, v2487, v3726);
          await stdlib.simMapSet(sim_r, 3, v2487, v3702);
          const v3729 = stdlib.add(v3716, v3470);
          await stdlib.simMapSet(sim_r, 0, v2487, v3729);
          const v3731 = stdlib.gt(v2489, v2318);
          const v3732 = v3731 ? v2489 : v2318;
          const v3733 = stdlib.lt(v3732, v2237);
          const v3734 = v3733 ? v3732 : v2237;
          await stdlib.simMapSet(sim_r, 2, v2487, v3734);
          const v3739 = {
            now: v3732,
            result: v3470
            };
          const v3741 = await txn1.getOutput('stake', 'v3739', ctc13, v3739);
          
          let v3755;
          const v3761 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
          const v3762 = stdlib.lt(v2319, v3734);
          const v3763 = v3761 ? v3762 : false;
          if (v3763) {
            const v3764 = stdlib.sub(v3734, v2319);
            const v3765 = stdlib.cast("UInt", "UInt256", v3764, false);
            const v3766 = stdlib.mul256(v2274, v3765);
            v3755 = v3766;
            }
          else {
            v3755 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            }
          const v3767 = stdlib.add256(v2320, v3755);
          const v7432 = v2317;
          const v7433 = v3734;
          const v7434 = v2319;
          const v7435 = v3767;
          const v7436 = v3702;
          const v7437 = v2322;
          const v7438 = v3471;
          const v7440 = v3517;
          const v7441 = v2331;
          sim_r.isHalt = false;
          
          break;
          }
        case 'unstake0_428': {
          const v3928 = v2488[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
  switch (v2488[0]) {
    case 'claim0_428': {
      const v2491 = v2488[1];
      return;
      break;
      }
    case 'claimFees0_428': {
      const v2970 = v2488[1];
      return;
      break;
      }
    case 'stake0_428': {
      const v3449 = v2488[1];
      undefined /* setApiDetails */;
      const v3470 = v3449[stdlib.checkedBigNumberify('./index.rsh:377:10:spread', stdlib.UInt_max, '0')];
      const v3471 = stdlib.add(v2323, v3470);
      const v3472 = stdlib.lt(v3471, stdlib.UInt_max);
      stdlib.assert(v3472, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:377:32:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:377:32:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
        msg: 'maximum stakes has been reached',
        who: 'stake'
        });
      ;
      const v3511 = stdlib.add(v2366, v3470);
      const v3514 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
      const v3515 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
      const v3516 = [v3511, v3514, v3515];
      const v3517 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3516);
      ;
      let v3702;
      const v3703 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
      if (v3703) {
        const v3705 = stdlib.gt(v2489, v2318);
        const v3706 = v3705 ? v2489 : v2318;
        const v3707 = stdlib.lt(v3706, v2237);
        const v3708 = v3707 ? v3706 : v2237;
        const v3709 = stdlib.sub(v3708, v2318);
        const v3710 = stdlib.cast("UInt", "UInt256", v3709, false);
        const v3711 = stdlib.mul256(v2274, v3710);
        const v3712 = stdlib.cast("UInt", "UInt256", v2323, false);
        const v3713 = stdlib.div256(v3711, v3712);
        const v3714 = stdlib.add256(v2321, v3713);
        v3702 = v3714;
        }
      else {
        v3702 = v2321;
        }
      const v3715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
      const v3716 = stdlib.fromSome(v3715, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
      const v3717 = stdlib.cast("UInt", "UInt256", v3716, false);
      const v3718 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
      const v3719 = stdlib.fromSome(v3718, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3720 = stdlib.sub256(v3702, v3719);
      const v3721 = stdlib.mul256(v3717, v3720);
      const v3722 = stdlib.div256(v3721, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v3723 = stdlib.cast("UInt256", "UInt", v3722, false);
      const v3724 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
      const v3725 = stdlib.fromSome(v3724, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
      const v3726 = stdlib.add(v3723, v3725);
      await stdlib.mapSet(map1, v2487, v3726);
      await stdlib.mapSet(map3, v2487, v3702);
      const v3729 = stdlib.add(v3716, v3470);
      await stdlib.mapSet(map0, v2487, v3729);
      const v3731 = stdlib.gt(v2489, v2318);
      const v3732 = v3731 ? v2489 : v2318;
      const v3733 = stdlib.lt(v3732, v2237);
      const v3734 = v3733 ? v3732 : v2237;
      await stdlib.mapSet(map2, v2487, v3734);
      const v3739 = {
        now: v3732,
        result: v3470
        };
      const v3741 = await txn1.getOutput('stake', 'v3739', ctc13, v3739);
      if (v1491) {
        stdlib.protect(ctc0, await interact.out(v3449, v3741), {
          at: './index.rsh:377:11:application',
          fs: ['at ./index.rsh:377:11:application call to [unknown function] (defined at: ./index.rsh:377:11:function exp)', 'at ./index.rsh:388:19:application call to "callback" (defined at: ./index.rsh:382:20:function exp)', 'at ./index.rsh:382:20:application call to [unknown function] (defined at: ./index.rsh:382:20:function exp)'],
          msg: 'out',
          who: 'stake'
          });
        }
      else {
        }
      
      let v3755;
      const v3761 = stdlib.eq(v2323, stdlib.checkedBigNumberify('./index.rsh:323:29:decimal', stdlib.UInt_max, '0'));
      const v3762 = stdlib.lt(v2319, v3734);
      const v3763 = v3761 ? v3762 : false;
      if (v3763) {
        const v3764 = stdlib.sub(v3734, v2319);
        const v3765 = stdlib.cast("UInt", "UInt256", v3764, false);
        const v3766 = stdlib.mul256(v2274, v3765);
        v3755 = v3766;
        }
      else {
        v3755 = stdlib.checkedBigNumberify('./index.rsh:327:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
        }
      const v3767 = stdlib.add256(v2320, v3755);
      const v7432 = v2317;
      const v7433 = v3734;
      const v7434 = v2319;
      const v7435 = v3767;
      const v7436 = v3702;
      const v7437 = v2322;
      const v7438 = v3471;
      const v7440 = v3517;
      const v7441 = v2331;
      const v7442 = v3517[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
      const v7443 = v7442[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
      const v7444 = stdlib.le(v2322, v7443);
      stdlib.assert(v7444, {
        at: './index.rsh:297:14:application',
        fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
        msg: null,
        who: 'stake'
        });
      const v7445 = stdlib.le(v2317, v2331);
      stdlib.assert(v7445, {
        at: './index.rsh:298:14:application',
        fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
        msg: null,
        who: 'stake'
        });
      return;
      
      break;
      }
    case 'unstake0_428': {
      const v3928 = v2488[1];
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
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    claim0_428: ctc11,
    claimFees0_428: ctc11,
    stake0_428: ctc10,
    unstake0_428: ctc10
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
  
  
  const [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1]);
  const v2386 = ctc.selfAddress();
  const v2388 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to "rununstake0_428" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'in',
    who: 'unstake'
    });
  const v2389 = v2388[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2386), null);
  const v2392 = stdlib.fromSome(v2391, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
  const v2395 = stdlib.le(v2392, v2366);
  stdlib.assert(v2395, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to "rununstake0_428" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: null,
    who: 'unstake'
    });
  const v2397 = stdlib.lt(v2389, stdlib.UInt_max);
  stdlib.assert(v2397, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to "rununstake0_428" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'tried to unstake too much really',
    who: 'unstake'
    });
  const v2401 = stdlib.le(v2389, v2392);
  stdlib.assert(v2401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:404:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to "rununstake0_428" (defined at: ./index.rsh:401:10:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
    msg: 'tried to unstake more than staked on record',
    who: 'unstake'
    });
  const v2408 = ['unstake0_428', v2388];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2232, v2233, v2234, v2235, v2236, v2237, v2238, v2239, v2240, v2274, v2317, v2318, v2319, v2320, v2321, v2322, v2323, v2330, v2331, v2365, v2366, v2408],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:407:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:407:14:decimal', stdlib.UInt_max, '0'), v2235]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
      
      switch (v2488[0]) {
        case 'claim0_428': {
          const v2491 = v2488[1];
          
          break;
          }
        case 'claimFees0_428': {
          const v2970 = v2488[1];
          
          break;
          }
        case 'stake0_428': {
          const v3449 = v2488[1];
          
          break;
          }
        case 'unstake0_428': {
          const v3928 = v2488[1];
          sim_r.txns.push({
            kind: 'api',
            who: "unstake"
            });
          const v3960 = v3928[stdlib.checkedBigNumberify('./index.rsh:401:10:spread', stdlib.UInt_max, '0')];
          const v3961 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2487), null);
          const v3962 = stdlib.fromSome(v3961, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
          ;
          const v3993 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
          const v3994 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
          const v3995 = [v2366, v3993, v3994];
          const v3996 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3995);
          ;
          const v4252 = v3996[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
          const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
          let v4263;
          const v4264 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
          if (v4264) {
            const v4266 = stdlib.gt(v2489, v2318);
            const v4267 = v4266 ? v2489 : v2318;
            const v4268 = stdlib.lt(v4267, v2237);
            const v4269 = v4268 ? v4267 : v2237;
            const v4270 = stdlib.sub(v4269, v2318);
            const v4271 = stdlib.cast("UInt", "UInt256", v4270, false);
            const v4272 = stdlib.mul256(v2274, v4271);
            const v4273 = stdlib.cast("UInt", "UInt256", v2323, false);
            const v4274 = stdlib.div256(v4272, v4273);
            const v4275 = stdlib.add256(v2321, v4274);
            v4263 = v4275;
            }
          else {
            v4263 = v2321;
            }
          const v4278 = stdlib.cast("UInt", "UInt256", v3962, false);
          const v4279 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v2487), null);
          const v4280 = stdlib.fromSome(v4279, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4281 = stdlib.sub256(v4263, v4280);
          const v4282 = stdlib.mul256(v4278, v4281);
          const v4283 = stdlib.div256(v4282, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
          const v4284 = stdlib.cast("UInt256", "UInt", v4283, false);
          const v4285 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v2487), null);
          const v4286 = stdlib.fromSome(v4285, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
          const v4287 = stdlib.add(v4284, v4286);
          await stdlib.simMapSet(sim_r, 1, v2487, v4287);
          await stdlib.simMapSet(sim_r, 3, v2487, v4263);
          const v4289 = stdlib.gt(v2489, v2318);
          const v4290 = v4289 ? v2489 : v2318;
          const v4291 = stdlib.gt(v4290, v2237);
          const v4292 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v2487), null);
          const v4293 = stdlib.fromSome(v4292, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
          const v4294 = stdlib.add(v4293, v2240);
          const v4295 = stdlib.le(v4294, v4290);
          const v4296 = v4291 ? true : v4295;
          const v4299 = v4296 ? stdlib.checkedBigNumberify('./index.rsh:410:49:decimal', stdlib.UInt_max, '0') : v4287;
          const v4300 = stdlib.muldiv(v4299, v2239, v2238);
          if (v4296) {
            const v4361 = stdlib.sub(v3962, v3960);
            await stdlib.simMapSet(sim_r, 0, v2487, v4361);
            const v4367 = stdlib.sub(v4253, v3960);
            const v4370 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
            const v4371 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
            const v4372 = [v4367, v4370, v4371];
            const v4373 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4372);
            sim_r.txns.push({
              kind: 'from',
              to: v2487,
              tok: v2235
              });
            const v4374 = stdlib.sub(v2323, v3960);
            const v4378 = stdlib.lt(v4290, v2237);
            const v4379 = v4378 ? v4290 : v2237;
            await stdlib.simMapSet(sim_r, 2, v2487, v4379);
            const v4384 = {
              now: v4290,
              result: v3960
              };
            const v4386 = await txn1.getOutput('unstake', 'v4384', ctc13, v4384);
            
            const v4399 = stdlib.gt(v4374, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
            const v4403 = v4399 ? v2319 : v4290;
            const v4404 = stdlib.add(v2322, v4299);
            const v4405 = stdlib.add(v2317, v4300);
            const v7586 = v4405;
            const v7587 = v4379;
            const v7588 = v4403;
            const v7589 = v2320;
            const v7590 = v4263;
            const v7591 = v4404;
            const v7592 = v4374;
            const v7594 = v4373;
            const v7595 = v2331;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v2487, stdlib.checkedBigNumberify('./index.rsh:415:29:decimal', stdlib.UInt_max, '0'));
            const v4313 = stdlib.sub(v3962, v3960);
            await stdlib.simMapSet(sim_r, 0, v2487, v4313);
            const v4319 = stdlib.sub(v4253, v3960);
            const v4322 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
            const v4323 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
            const v4324 = [v4319, v4322, v4323];
            const v4325 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4324);
            sim_r.txns.push({
              kind: 'from',
              to: v2487,
              tok: v2235
              });
            const v4326 = stdlib.sub(v2323, v3960);
            const v4330 = stdlib.lt(v4290, v2237);
            const v4331 = v4330 ? v4290 : v2237;
            await stdlib.simMapSet(sim_r, 2, v2487, v4331);
            const v4336 = {
              now: v4290,
              result: v3960
              };
            const v4338 = await txn1.getOutput('unstake', 'v4336', ctc13, v4336);
            
            const v4351 = stdlib.gt(v4326, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
            const v4355 = v4351 ? v2319 : v4290;
            const v4356 = stdlib.add(v2322, v4299);
            const v4357 = stdlib.add(v2317, v4300);
            const v7608 = v4357;
            const v7609 = v4331;
            const v7610 = v4355;
            const v7611 = v2320;
            const v7612 = v4263;
            const v7613 = v4356;
            const v7614 = v4326;
            const v7616 = v4325;
            const v7617 = v2331;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc3, ctc3, ctc1, ctc1, ctc9, ctc1, ctc8, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2488], secs: v2490, time: v2489, didSend: v1491, from: v2487 } = txn1;
  switch (v2488[0]) {
    case 'claim0_428': {
      const v2491 = v2488[1];
      return;
      break;
      }
    case 'claimFees0_428': {
      const v2970 = v2488[1];
      return;
      break;
      }
    case 'stake0_428': {
      const v3449 = v2488[1];
      return;
      break;
      }
    case 'unstake0_428': {
      const v3928 = v2488[1];
      undefined /* setApiDetails */;
      const v3960 = v3928[stdlib.checkedBigNumberify('./index.rsh:401:10:spread', stdlib.UInt_max, '0')];
      const v3961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2487), null);
      const v3962 = stdlib.fromSome(v3961, stdlib.checkedBigNumberify('./index.rsh:223:46:decimal', stdlib.UInt_max, '0'));
      const v3965 = stdlib.le(v3962, v2366);
      stdlib.assert(v3965, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
        msg: null,
        who: 'unstake'
        });
      const v3967 = stdlib.lt(v3960, stdlib.UInt_max);
      stdlib.assert(v3967, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:403:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
        msg: 'tried to unstake too much really',
        who: 'unstake'
        });
      const v3971 = stdlib.le(v3960, v3962);
      stdlib.assert(v3971, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:404:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:401:36:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:401:36:function exp)', 'at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)', 'at ./index.rsh:376:14:application call to [unknown function] (defined at: ./index.rsh:376:14:function exp)'],
        msg: 'tried to unstake more than staked on record',
        who: 'unstake'
        });
      ;
      const v3993 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '1')];
      const v3994 = v2365[stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '2')];
      const v3995 = [v2366, v3993, v3994];
      const v3996 = stdlib.Array_set(v2330, stdlib.checkedBigNumberify('./index.rsh:287:21:dot', stdlib.UInt_max, '0'), v3995);
      ;
      const v4252 = v3996[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
      const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:402:36:application', stdlib.UInt_max, '0')];
      const v4254 = stdlib.le(v3962, v4253);
      stdlib.assert(v4254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:408:20:application call to [unknown function] (defined at: ./index.rsh:408:20:function exp)'],
        msg: null,
        who: 'unstake'
        });
      let v4263;
      const v4264 = stdlib.gt(v2323, stdlib.checkedBigNumberify('./index.rsh:332:27:decimal', stdlib.UInt_max, '0'));
      if (v4264) {
        const v4266 = stdlib.gt(v2489, v2318);
        const v4267 = v4266 ? v2489 : v2318;
        const v4268 = stdlib.lt(v4267, v2237);
        const v4269 = v4268 ? v4267 : v2237;
        const v4270 = stdlib.sub(v4269, v2318);
        const v4271 = stdlib.cast("UInt", "UInt256", v4270, false);
        const v4272 = stdlib.mul256(v2274, v4271);
        const v4273 = stdlib.cast("UInt", "UInt256", v2323, false);
        const v4274 = stdlib.div256(v4272, v4273);
        const v4275 = stdlib.add256(v2321, v4274);
        v4263 = v4275;
        }
      else {
        v4263 = v2321;
        }
      const v4278 = stdlib.cast("UInt", "UInt256", v3962, false);
      const v4279 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v2487), null);
      const v4280 = stdlib.fromSome(v4279, stdlib.checkedBigNumberify('./index.rsh:233:78:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4281 = stdlib.sub256(v4263, v4280);
      const v4282 = stdlib.mul256(v4278, v4281);
      const v4283 = stdlib.div256(v4282, stdlib.checkedBigNumberify('./index.rsh:5:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1000000000000000000'));
      const v4284 = stdlib.cast("UInt256", "UInt", v4283, false);
      const v4285 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v2487), null);
      const v4286 = stdlib.fromSome(v4285, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', stdlib.UInt_max, '0'));
      const v4287 = stdlib.add(v4284, v4286);
      await stdlib.mapSet(map1, v2487, v4287);
      await stdlib.mapSet(map3, v2487, v4263);
      const v4289 = stdlib.gt(v2489, v2318);
      const v4290 = v4289 ? v2489 : v2318;
      const v4291 = stdlib.gt(v4290, v2237);
      const v4292 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v2487), null);
      const v4293 = stdlib.fromSome(v4292, stdlib.checkedBigNumberify('./index.rsh:230:60:decimal', stdlib.UInt_max, '0'));
      const v4294 = stdlib.add(v4293, v2240);
      const v4295 = stdlib.le(v4294, v4290);
      const v4296 = v4291 ? true : v4295;
      const v4299 = v4296 ? stdlib.checkedBigNumberify('./index.rsh:410:49:decimal', stdlib.UInt_max, '0') : v4287;
      const v4300 = stdlib.muldiv(v4299, v2239, v2238);
      if (v4296) {
        const v4361 = stdlib.sub(v3962, v3960);
        await stdlib.mapSet(map0, v2487, v4361);
        const v4367 = stdlib.sub(v4253, v3960);
        const v4370 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
        const v4371 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
        const v4372 = [v4367, v4370, v4371];
        const v4373 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4372);
        ;
        const v4374 = stdlib.sub(v2323, v3960);
        const v4378 = stdlib.lt(v4290, v2237);
        const v4379 = v4378 ? v4290 : v2237;
        await stdlib.mapSet(map2, v2487, v4379);
        const v4384 = {
          now: v4290,
          result: v3960
          };
        const v4386 = await txn1.getOutput('unstake', 'v4384', ctc13, v4384);
        if (v1491) {
          stdlib.protect(ctc0, await interact.out(v3928, v4386), {
            at: './index.rsh:401:11:application',
            fs: ['at ./index.rsh:401:11:application call to [unknown function] (defined at: ./index.rsh:401:11:function exp)', 'at ./index.rsh:424:19:application call to "callback" (defined at: ./index.rsh:408:20:function exp)', 'at ./index.rsh:408:20:application call to [unknown function] (defined at: ./index.rsh:408:20:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4399 = stdlib.gt(v4374, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
        const v4403 = v4399 ? v2319 : v4290;
        const v4404 = stdlib.add(v2322, v4299);
        const v4405 = stdlib.add(v2317, v4300);
        const v7586 = v4405;
        const v7587 = v4379;
        const v7588 = v4403;
        const v7589 = v2320;
        const v7590 = v4263;
        const v7591 = v4404;
        const v7592 = v4374;
        const v7594 = v4373;
        const v7595 = v2331;
        const v7596 = v4373[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7597 = v7596[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7598 = stdlib.le(v4404, v7597);
        stdlib.assert(v7598, {
          at: './index.rsh:297:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v7599 = stdlib.le(v4405, v2331);
        stdlib.assert(v7599, {
          at: './index.rsh:298:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        return;
        }
      else {
        await stdlib.mapSet(map1, v2487, stdlib.checkedBigNumberify('./index.rsh:415:29:decimal', stdlib.UInt_max, '0'));
        const v4313 = stdlib.sub(v3962, v3960);
        await stdlib.mapSet(map0, v2487, v4313);
        const v4319 = stdlib.sub(v4253, v3960);
        const v4322 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '1')];
        const v4323 = v4252[stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '2')];
        const v4324 = [v4319, v4322, v4323];
        const v4325 = stdlib.Array_set(v3996, stdlib.checkedBigNumberify('./index.rsh:420:44:application', stdlib.UInt_max, '0'), v4324);
        ;
        const v4326 = stdlib.sub(v2323, v3960);
        const v4330 = stdlib.lt(v4290, v2237);
        const v4331 = v4330 ? v4290 : v2237;
        await stdlib.mapSet(map2, v2487, v4331);
        const v4336 = {
          now: v4290,
          result: v3960
          };
        const v4338 = await txn1.getOutput('unstake', 'v4336', ctc13, v4336);
        if (v1491) {
          stdlib.protect(ctc0, await interact.out(v3928, v4338), {
            at: './index.rsh:401:11:application',
            fs: ['at ./index.rsh:401:11:application call to [unknown function] (defined at: ./index.rsh:401:11:function exp)', 'at ./index.rsh:424:19:application call to "callback" (defined at: ./index.rsh:408:20:function exp)', 'at ./index.rsh:408:20:application call to [unknown function] (defined at: ./index.rsh:408:20:function exp)'],
            msg: 'out',
            who: 'unstake'
            });
          }
        else {
          }
        
        const v4351 = stdlib.gt(v4326, stdlib.checkedBigNumberify('./index.rsh:429:30:decimal', stdlib.UInt_max, '0'));
        const v4355 = v4351 ? v2319 : v4290;
        const v4356 = stdlib.add(v2322, v4299);
        const v4357 = stdlib.add(v2317, v4300);
        const v7608 = v4357;
        const v7609 = v4331;
        const v7610 = v4355;
        const v7611 = v2320;
        const v7612 = v4263;
        const v7613 = v4356;
        const v7614 = v4326;
        const v7616 = v4325;
        const v7617 = v2331;
        const v7618 = v4325[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7619 = v7618[stdlib.checkedBigNumberify('./index.rsh:297:41:application', stdlib.UInt_max, '0')];
        const v7620 = stdlib.le(v4356, v7619);
        stdlib.assert(v7620, {
          at: './index.rsh:297:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
          msg: null,
          who: 'unstake'
          });
        const v7621 = stdlib.le(v4357, v2331);
        stdlib.assert(v7621, {
          at: './index.rsh:298:14:application',
          fs: ['at ./index.rsh:287:21:application call to [unknown function] (defined at: ./index.rsh:287:21:function exp)'],
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
    pure: [`global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`],
    sigs: [`claim()(uint64,(uint64,uint64))`, `claimFees()(uint64,(uint64,uint64))`, `global()(uint64,uint64,uint256)`, `initial()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `local(address)(uint64,uint64,uint64,uint256)`, `stake(uint64)(uint64,uint64)`, `unstake(uint64)(uint64,uint64)`]
    },
  appApproval: `BiAcAAEYBAgQBgMgQEhQWAWQTjy9+ovUBK2I5YYLvPO4hwuh0eS7B/qyrLUD16Xq4AMoMDgR////////////AYCt4gQmBgEAAQEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeC2s6dkAAABAgAJAQAAAAAAAAAAIjUAMRhBDjInBGRJIls1AUkhBFs1AiEFWzUIMRkjEkEACjEAKCEPr2ZCDfc2GgAXSUEBViI1BCM1BkkhEAxAAJlJIREMQABmSSESDEAATCESEkQ0ASUSRChkKWRQK2RQSTUDVwAgNANXIAhQNANXKAhQNANXMAhQNANXOAhQNANXQAhQNANXSAhQNANXUAhQNANXWAhQNQdCDZchERJEJwQ1/yk0/1AhBK9QQgD6SSETDEAAEyETEkQnBDX/KDT/UCEEr1BCAOAhEBJENhoBNf+AAQM0/1BCAM5JIRQMQACWSSEVDEAAZyEVEkQ0ASUSRDYaATX/IjT/iA1eVwAJSTX+I1s0/iJVTRYiNP+IDUpXCQlJNf4jWzT+IlVNFlAiNP+IDTVXEglJNf4jWzT+IlVNFlAyAzT/iA0fVxshSTX+VwEgNP4iVU1QNQdCDOMhFBJENAElEkQoZClkUCtkUEk1A1fgCDQDV4gIUDQDV7ggUDUHQgy7gc3I+h4SRDYaATX/KzT/UEIAHjYaAhc1BDYaAzYaARdJIwxAChFJIQcMQAlAIQcSRCU0ARJENARJIhJMNAISEUQoZClkUCtkUEk1A0lKSkpKSkpKSkpJVwAgNf8hCFs1/iEWWzX9IRdbNfwhGFs1+yEJWzX6IQpbNfkhC1s1+CEMWzX3V2AgNfaBgAFbNfWBiAFbNfSBkAFbNfNXmCA18le4IDXxgdgBWzXwgeABWzXvV+gRNe6B+QFbNe2BgQIhGVg17IGSAls160k1BTXqgASR8aeaNOpQsDTqIlVJgQIMQATlSSEHDEADCSEHEkQ06lcBCDXpsSKyASEGshA0CLIYszTpFzXoIjEAiAvVVwAJSTXmI1s05iJVTUk15zTrDkQ06CEaDEQ06DTnDkQ06xY07FcICFA07FcQAVA15jTmVwARSTXlIls15DTnNOQORDTvIg1BADc09DIGMgY09A1NNeI08TT2JK80+jTiSTT6DE009AkWUKOIC60krzTvFlCiiAujoIgLnzXjQgAENPE14ySvNOcWUDTjMgMxAIgLQVcbIUk14VcBIDThIlVNoYgLdaOIC3EqoogLbElKIQVbIhJEIQRbIhJEIlsiEkQkWyIxAIgLC1cJCUk14SNbNOEiVU0INeIxACgxAIgK8yk04hZQNeFJVwAJNOFQTFcSKlBmMQAoMQCICtcpNONQNeFXABs04VBmNPQyBjIGNPQNTUk14TT6DSIxAIgKtFcSCUk13yNbNN8iVU009wg04Q4RNeA04iI04E1JNd80+B00+Zc13jTgQQDAMQAoMQCICoApNOc06AkWUDXdVwkzNN1MUGaxIrIBNOiyEiWyEDEAshQ0/LIRszTvNOgJNd00+jThSTT6DE013DEAKDEAiApAKTTcFlA120lXABI021BMVxshUGaACAAAAAAAABEgNOEWNOgWUFCwNOEWNOgWUDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TTeCDTcNOE08zTdIg1NNPI04zTwNN8INN0yBjTkNOgJFjTlVwgIUDTlVxABUDTtQgiVMQAoMQCICcAnBTXdSVcACTTdUExXEipQZjEAKDEAiAmnKTTnNOgJFlA13VcJMzTdTFBmsSKyATToshIlshAxALIUNPyyEbM07zToCTXdNPo04Uk0+gxNNdwxACgxAIgJZyk03BZQNdtJVwASNNtQTFcbIVBmgAgAAAAAAAAQ8DThFjToFlBQsDThFjToFlA1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU03gg03DThNPM03SINTTTyNOM08DTfCDTdMgY05DToCRY05VcICFA05VcQAVA07UIHvEg06lcBCDXpsSKyASEGshA0CLIYszTpFzXoNO806AhJNechGgxENOg0/IgI6TTvIg1BADc09DIGMgY09A1NNeU08TT2JK80+jTlSTT6DE009AkWUKOICN0krzTvFlCiiAjToIgIzzXmQgAENPE15iIxAIgIelcACUk15CNbNOQiVU015TEAKDEAiAhjKSSvNOUWUDTmMgMxAIgIU1cbIUk15FcBIDTkIlVNoYgIh6OICIMqoogIfklKIQVbIhJEIQRbIhJEIlsiEkQkWyIxAIgIHVcJCUk15CNbNOQiVU0IFlA15ElXAAk05FBMVxIqUGYxACgxAIgH9ik05lA15FcAGzTkUGYxACgxAIgH4Sk05TToCBZQNeRXCTM05ExQZjT0MgYyBjT0DU015DT6NORJNPoMTTXjMQAoMQCIB7ApNOMWUDXiSVcAEjTiUExXGyFQZoAIAAAAAAAADps05BY06BZQULA05BY06BZQNQc07yISNPM04wwQQQAUNPYkrzTjNPMJFlCjiAeqNeJCAAQyAzXiNP80/jT9NPw0+zT6NPk0+DT3NPY09TTjNPM08jTioIgHfzTmNPA05zIGNOs06AgWNOxXCAhQNOxXEAFQNO1CBedJIwxAAUNIMQA0/xJENOsWNOxXCAhQNOxXEAFQNek09DIGMgY09A1NNec0+jTnSTT6DE015jTvIhI08zTmDBBBABQ09iSvNOY08wkWUKOIBw816EIABDIDNeg08jTooIgG/kk15SqiiAb2SUohBVsiEkQhBFsiEkQiWyISRCRbNeQ08DTkCDXjNOlXABFJNeIiW0k14TTjSTThDE014DTkNPgdNPmXNPUINd807TTfSTTtDE013rEisgE03rIII7IQNP+yB7OxIrIBNOCyEiWyEDT/shQ0/LIRs4AIAAAAAAAADH405xY04BY03hZQUFCwNOcWNOAWNN4WUFA1BzT/NP40/TT8NPs0+jT5NPg09zT2IjT0NOc05SSvNOQWUCqjiAY8oYgGODTxIjTvMgY04TTgCRY04lcICFA04lcQAVA07TTeCUIEnkixIrIBIQayEDQIshizNOsWNOxXCAhQNOxXEAFQNek07yINQQA3NPQyBjIGNPQNTTXnNPE09iSvNPo050k0+gxNNPQJFlCjiAXNJK807xZQoogFw6CIBb816EIABDTxNegkryIxAIgFaFcACUk15iNbNOYiVU0WUDToMgMxAIgFUFcbIUk15lcBIDTmIlVNoYgFhKOIBYAqoogFe0lKIQVbIhJEIQRbIhJEIlsiEkQkWyIxAIgFGlcJCUk15iNbNOYiVU0INecxACgxAIgFAik05xZQNeZJVwAJNOZQTFcSKlBmMQAoMQCIBOYpNOhQNeZXABs05lBmNPQyBjIGNPQNTUk15jT6DSIxAIgEw1cSCUk15SNbNOUiVU009wg05g4RQQDoNOc0+B00+Zc15TEAKDEAiASaJwU15ElXAAk05FBMVxIqUGY06VcAEUk15CJbNeM05zTjDjTlNO0OEESxIrIBNOWyCCOyEDEAsgezsSKyATTnshIlshAxALIUNPyyEbM0+jTmSTT6DE014jEAKDEAiAQ6KTTiFlA14UlXABI04VBMVxshUGaACAAAAAAAAApHNOYWNOcWNOUWUFBQsDTmFjTnFjTlFlBQNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NOI08zTyNOg08DTvMgY04zTnCRY05FcICFA05FcQAVA07TTlCUICkYAIAAAAAAAACl005hYhBa9QULA05hYhBa9QNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPo05kk0+gxNNPM08jToNPA07zIGNOk07UICQyMSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkohCls1/yELWzX+IQxbNf2BaFs1/IFwWzX7V4ARNfqBsQFbNfmBuQFbNfiABJqLkXSwNPs0+Ag0/wg19zT8NPkINfY094gDHzT6VwARNfU09jT+iAMpNANXACAxABJENANXICA0AyEJWzT/NP40/TQDgWBbNPw0+zQDgXhbNANXkSA0+DT/CDT9STIDMgM0+SIyBjT1Ils09ggWNPVXCAhQNPVXEAFQNPdCAXlIgcCaDIgCs7EisgEhBrIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSklXACA1/yEIWzX+IRZbNf0hF1s1/CEYWzX7IQlbNfohCls1+SELWzX4IQxbNfeABKgtM8k0/1A0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWULAhGa9JNfZXABE19SEErzT1VwgIUDT1VxABUDX0gaCNBogCArEisgEishIlshAyCrIUNPyyEbM0/iENCyEODkQ0/YGAlOvcAw5ENPs0+gxENPo0+wlJNfMhGwxENPchGwxENPc08w5ENPkiDUQkrzT5FlAqo4gB5SSvNPMWUKKIAds18jT5NP4LIQ4KNfE0+DT+CyEOCjXwMQA0/1A0/hZQNP0WUDT8FlA0+xZQNPoWUDT5FlA0+BZQNPcWUDT0UDTyUDTxFlA08BZQKEsBVwB/ZylLAVd/QmdIIzUBMgY1AkIA2jX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew0/lcAEUk16yJbNeo0+zTqDkQ09jT/DkQ07DTtFlA07hZQNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPVQNPYWUDT3FlA0+BZQNPlQNPpQNPsWUDT8FlA0/lA0/xZQNOtQNOoWUChLAVcAf2cpSwFXf39nK0sBV/4cZ0glNQEyBjUCQgAtMRkhDRJEsSKyASEGshA0CLIYIQ2yGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBDQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIzE3EkQiNQEiNQIiNQhC/6dJMRhhQAAFSCEPr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJSRUhCEwJr0xQiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    api_claim: 1,
    api_stake: 1,
    api_unstake: 1
    },
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 60,
  stateKeys: 3,
  stateSize: 282,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:214:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:495:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:287:21:after expr stmt semicolon',
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

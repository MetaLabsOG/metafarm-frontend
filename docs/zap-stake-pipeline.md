# Zap + Stake Pipeline

In-app LP creation and auto-staking for Cometa farms. Replaces the current "redirect to DEX" flow with a seamless mint-and-stake experience.

## Current State

| DEX | "Get LP Tokens" | Programmatic Mint | Single-asset Zap |
|-----|-----------------|-------------------|------------------|
| Tinyman v1.1 (T2) | In-app Zap modal | `prepareMintTransactions` — 5 txn | swap half + mint — 9 txn |
| Tinyman v2 (T3) | **External redirect** | Code ready, not wired in UI | Code ready, not wired |
| Pact (PT) | **External redirect** (TODO in code) | `pactsdk.Pool.prepareAddLiquidity` | Pact SDK `Zap` class |
| Humble (H2) | External redirect | Not implemented | Not implemented |

Current user flow (best case, T2 pool):
1. Click "Get LP Tokens" → Zap modal → enter amounts → **sign 1** (mint LP)
2. See LP balance in Stake field → enter amount → click Stake → **sign 2** (stake via Reach)

**Result: 2 signatures, 3-4 manual steps, context switching between Zap and Stake.**

## Architecture

### Key Components

| Component | File | Role |
|-----------|------|------|
| Zap modal | `src/Zap/Zap.tsx` | LP creation UI (mint / single-asset zap) |
| Pool actions | `src/Farm/PoolList/Pool/PoolActions.tsx` | Farm modal — hosts Zap modal + stake/withdraw |
| Stake input | `src/Components/TokenInputWithButton/TokenInputWithButton.tsx` | Stake/withdraw with Reach effect |
| DEX adapters | `src/dexes/tinyman/`, `tinyman2/`, `pact.ts` | Pool fetching, swap/mint/zap operations |
| Tx signing | `src/common/lib.ts` `signAndPostTxnGroups` | Batch sign + post + wait |
| Swap router | `src/Swap/FolksSwap.ts` | Folks Router aggregator (swap only) |

### Transaction Flow

```
Zap.tsx: ZapButtonOnClick
  → runTransactions(account, zapOp)        // Swap.tsx
    → operation.prepareTxs(address)         // builds WalletTransactionGroup[]
    → signAndPostTxnGroups(txns)            // one wallet prompt
      → auto opt-in (apps + assets)
      → window.algorand.signTxns(allTxns)   // USER SIGNS
      → postTxns → waitForConfirmation
    → returns txIds
```

### Reach Blocker

Staking uses `ctc.apis.stake([microAmount])` via Reach stdlib — a separate ARC-11 signing flow incompatible with `signAndPostTxnGroups`. Cannot combine mint + stake into one atomic group without leaving Reach.

**Implication**: minimum 2 wallet prompts until contract migration to Algorand Python.

## Implementation Phases

### Phase 1: Enable In-App Zap for T3 and PT Pools

**Effort**: ~2h | **Risk**: Low | **Signatures**: 2

Both T3 (`Tinyman2Pool.getMint/getZap`) and PT (`PactPool.getMint`) have working programmatic mint code, but `getLPTokenAction()` redirects externally for both.

**Changes:**
1. `PoolActionsDesktop.tsx:getLPTokenAction` — change T3 and PT cases to `return openModal`
2. Smoke-test T3 mint with a live Tinyman v2 pool on mainnet

**Note**: Humble (H2) stays external — no SDK support for add liquidity.

---

### Phase 2: Auto-Stake After LP Mint

**Effort**: ~1 day | **Risk**: Low | **Signatures**: 2 (but 0 manual intermediate steps)

After successful LP mint, automatically trigger stake without user re-entering the LP amount.

**Changes:**

1. **Zap component** (`src/Zap/Zap.tsx`):
   - New prop: `onAutoStake?: (lpTokenId: number, mintedAmount: bigint) => Promise<void>`
   - New UI: "Auto-stake into farm" toggle (visible when `onAutoStake` is provided, default ON)
   - In `ZapButtonOnClick` after successful `runTransactions`:
     - Query fresh LP balance via `algod.accountInformation(address)`
     - Calculate `mintedAmount = newBalance - oldBalance`
     - If auto-stake enabled: call `onAutoStake(lpTokenId, mintedAmount)`
     - Handle stake failure gracefully (LP tokens are safe in wallet)

2. **PoolActions** (`src/Farm/PoolList/Pool/PoolActions.tsx`):
   - Create `handleAutoStake` callback wrapping `ctc.apis.stake`
   - Pass to `<Zap onAutoStake={handleAutoStake} />`

**Error handling:**
- Mint fails → standard error notification, no stake attempted
- Mint succeeds, stake fails → notify "LP tokens minted successfully. Auto-stake failed — you can stake manually."
- Mint succeeds, stake succeeds → confetti + success notification

**LP amount detection:**
```typescript
// Before mint
const balanceBefore = balances[zapData.pool_lp_id] ?? BigInt(0);

// After mint (runTransactions already waits for confirmation)
const accountInfo = await algod.accountInformation(address).do();
const lpAsset = accountInfo.assets?.find(a => a['asset-id'] === zapData.pool_lp_id);
const balanceAfter = BigInt(lpAsset?.amount ?? 0);
const mintedAmount = balanceAfter - balanceBefore;
```

---

### Phase 3a: Single-Asset Zap for ALGO Pairs

**Effort**: ~3-5 days | **Risk**: Medium | **Signatures**: 2

Most Cometa farms are ALGO/X pairs. Tinyman v2 supports native single-asset add liquidity (`withSingleAsset`) — the protocol handles the implicit internal swap in one AppCall.

**Approach**: Add `withSingleAsset` mode to our custom Tinyman v2 adapter.

**Transaction count**: 2 (AssetTransfer + AppCall) vs 5 for proportional mint.

**Changes:**
1. `src/dexes/tinyman2/internal.ts` — add `prepareSingleAssetMintTransactions()`
2. `src/dexes/tinyman2/index.ts` — new `getSingleAssetMint()` method on `Tinyman2Pool`
3. Zap UI — new mode: "Single token → LP" with simplified input (one token field)
4. Info panel shows: input amount, expected LP, fee breakdown, price impact

**Alternative**: Adopt `@tinymanorg/tinyman-js-sdk` v5.1.4 instead of extending custom adapter. Trade-off: external dependency vs maintained SDK with full `withSingleAsset` support.

### Phase 3b: Single-Asset Zap for Non-ALGO Pairs

**Effort**: ~2-3 days (after 3a) | **Risk**: Medium-High | **Signatures**: 2

For non-ALGO pairs (e.g., USDC/TOKEN): swap ALGO → one pair asset via Folks Router, then use `withSingleAsset`.

**Pipeline**: Folks Router swap (ALGO → tokenA, ~4 txns) + Tinyman `withSingleAsset` (tokenA → LP, 2 txns) = ~6 txns. Fits in 16-txn atomic group limit.

**Dependency**: Phase 3a + Folks Router integration in Zap pipeline.

---

### Phase 4: One-Signature Pipeline (Post-Migration)

**Effort**: TBD | **Risk**: Low (after migration) | **Signatures**: 1

After farm contract migration to Algorand Python, `stake` becomes a regular `makeApplicationCallTxnFromObject`. All operations can be composed into one atomic group:

```
Atomic group (3-6 txns, 1 signature):
[0]    AssetTransfer: token → Tinyman pool
[1]    AppCall: add_liquidity (withSingleAsset or flexible)
         → inner txn: LP tokens → user
[2]    AssetTransfer: LP tokens → Farm contract
[3]    AppCall: Farm.stake(amount)
```

**No wrapper contract needed** — just client-side group assembly via `algosdk.assignGroupID()`.

## Risks and Mitigations

| Risk | Phase | Impact | Mitigation |
|------|-------|--------|------------|
| T3 adapter bitrot | 1 | Zap fails for T3 pools | Smoke-test before deploy |
| Mint succeeds, stake fails | 2 | LP in wallet, not staked | Graceful error + manual stake UI still available |
| Slippage on single-asset | 3a | Less LP than expected | Show price impact, block if >5% |
| Stale pool reserves | 3a | Bad quote | Fetch pool state right before tx, no caching |
| Atomic group >16 txns | 3b | Tx rejected | Count txns before assembly, fallback to 2 groups |
| Reach ABI changes | 2 | Stake call breaks | Use existing `ctc.apis.stake` — Reach handles ABI |

## SDK Landscape

| SDK | Package | Add Liquidity | Single-Sided | Composability |
|-----|---------|---------------|--------------|---------------|
| Tinyman v2 | `@tinymanorg/tinyman-js-sdk` v5.1.4 | `flexible` + `withSingleAsset` | Native (protocol-level) | Excellent |
| Pact | `@pactfi/pactsdk` v0.8.1 | `prepareAddLiquidity()` | Client-side Zap class | Good |
| Humble | HumbleSDK (Reach) | `addLiquidity()` | No | Limited |
| Folks Router | `@folks-router/js-sdk` v0.5.1 | Swaps only | N/A | Designed for composability |

Tinyman v2 `withSingleAsset` is the optimal choice: fewest transactions (2), native protocol support (no client-side swap-then-add), and explicit composability design.

# Cometa Frontend — Task Board

> Last updated: 2026-03-09

## Conventions

- **ID format**: `MF-NNN` (sequential, never reuse)
- **Statuses**: `todo` | `in_progress` | `blocked` | `done`
- **Priorities**: `critical` | `high` | `medium` | `low`
- **Tags**: `observability` | `safety` | `performance` | `ux` | `quality` | `devops` | `effector`
- Next available ID: **MF-052**

---

## Pre-Launch Sprint (March 17 Comeback)

> Full context: `~/dev/cometa/cometa-strategy/research/pre-launch-final-plan.md`
> Cross-project sync: `~/dev/cometa/CLAUDE.md` → "Pre-Launch Coordination" section

### Phase 1 — Independent (no cross-project deps)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-041 | Fix TestNet fallback | todo | critical | safety | `src/AppContext.ts:21` — change `\|\| TESTNET` to `\|\| MAINNET`. One line. DoD: app without ALGO_NETWORK env var connects to mainnet |
| MF-042 | Fix MyAlgo dead wallet migration | todo | critical | safety | `src/wallet/cacheMigration.ts` — add migration to clear `connectedWalletType='MyAlgo'` from localStorage. `src/wallet/customWalletFallback.ts:20` — remove `'MyAlgo'` from `WalletType`. DoD: returning MyAlgo users see clean disconnect state, not stuck |
| MF-043 | Replace dead AlgoExplorer with live alternatives | todo | critical | safety | `src/providers/algoExplorerProvider.ts` — replace `algoexplorerapi.io` with `algonode.cloud`. `src/common/lib.ts` — replace explorer links with `allo.info` or `explorer.perawallet.app`. DoD: all on-chain links open valid pages |
| MF-044 | UI cleanup: copyright, Slise, Folks promo | todo | high | ux | `src/Menu/Footer.tsx:17` — 2024 → 2026. `src/Farm/Farm.tsx:38-53` — delete Slise placeholder (90px empty block) and Folks Finance governance promo (dead link). DoD: footer says 2026, no empty ad blocks |
| MF-045 | Fix infinite loading spinner when farm list empty | todo | critical | ux | `src/Farm/Farm.tsx:73` — `isLoading = !state \|\| state.length === 0` treats empty array as loading. Add separate `isLoaded` boolean, set true after first successful fetch. Also handle `currentBlock === 0` (algod not synced yet) — show "Syncing..." message. DoD: empty farm list shows "No active farms" within 5s |
| MF-046 | Hide disabled features: NFT tab, cost chart, MetaDAO | todo | critical | ux | **Coordinate with CB-055** (backend returns `[]`). Hide NFT tab in wallet dashboard. Hide portfolio cost chart component. Hide `/meta-dao` route or add redirect to `/`. DoD: no fake NFTs, no 2022 prices, no broken MetaDAO visible |
| MF-047 | Dead code cleanup | todo | high | quality | Delete from `apiProvider.ts`: `getPoolInfo()`, `getSwapCost()`, `tokensaleWhitelist()`. Delete from `flexApiProvider.ts`: unused exported wrappers. Remove `console.log` from `AppContext.ts:22,57,63`, `ConnectWallet.tsx:63`, `apiProvider.ts:203`. Delete `/price-test` route from `index.tsx`. DoD: no debug logs in browser console, no dead functions |

### Phase 2 — Coordinated (after backend Phase 1)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-048 | Handle disabled lottery + add axios timeout | todo | high | safety | **Depends on CB-056 deployed.** Add `timeout: 30000` to axios instance in `apiProvider.ts`. Handle 503 `{"disabled": true}` gracefully — show "feature temporarily unavailable" toast, not error. Verify expBackoff handles 429 from rate limits. DoD: 503 → maintenance message, 429 → retry, 30s timeout → clean error |
| MF-049 | Fix Sentry: reduce trace rate + wire ErrorBoundary | todo | high | observability | `src/index.tsx:64` — `tracesSampleRate: 1` → `0.1`. `src/ErrorBoundary.tsx:19-21` — add `Sentry.captureException(error)` in `componentDidCatch`. DoD: Sentry receives crash reports, traces at 10% |
| MF-050 | Add 404 catch-all route | todo | medium | ux | `src/index.tsx:299-312` — add `<Route path="*" element={<Navigate to="/" replace />} />` as last route. DoD: `/typo` redirects to home |
| MF-051 | Fix wallet reconnect failure UX | todo | high | ux | `src/wallet/ConnectWallet.tsx:132-137` — on reconnect failure, call `clearWalletData()` to remove stale localStorage, show toast "Wallet disconnected — please reconnect". DoD: expired session shows toast and clean state |

---

## Active

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-025 | Enriched endpoint: include on-chain state in `/contracts/farm/enriched` response | todo | critical | performance | Backend: add global/initial state to enriched response, eliminate client-side view calls |
| MF-035 | Eliminate Tinyman API calls on page load (Phase 3 crash fix) | done | critical | performance | Removed assetAvailable→getLPTokenInfoFx chain. LP info from enriched only. 2026-03-08 |
| MF-026 | Server-side pagination: `GET /contracts?page=1&limit=50&sort=tvl` + `useInfiniteQuery` | todo | critical | performance | Currently loads all 700 pools at once. Need backend endpoint + frontend infinite scroll |
| MF-027 | Evaluate self-hosted Algorand node vs paid API provider | in_progress | high | devops | Docker Compose already has Conduit. Research: algod resource requirements, throughput gains |
| MF-037 | Recover 802.6 ALGO from NFT sale contract App 509206311 | blocked | critical | safety | Step 6 closeTo confirmed, payment simulated. Blocked: AVM v5 ref limit (need 9, max 8). See `memory/nft-sale-recovery.md` |
| MF-038 | Identify buyer O5XYX4J3...AMMKA from NFT sale records | todo | high | safety | Buyer's cooperation needed to sign recovery txn. Check internal records, NFD, on-chain history |
| MF-039 | Recover NFTs from raffle contracts (974xxx, 832xxx) | todo | medium | safety | 8 MetaPunks NFTs in 6 expired raffle contracts. Need deployer LT5ZQINW4... mnemonic |
| MF-028 | Meteors: pause animations on `document.hidden`, consolidate resize listeners | todo | high | performance | 3 resize listeners without coordination, no visibilitychange handler. See MF-018 |
| MF-029 | CSP headers for WalletConnect: add frame-src verify.walletconnect.org to nginx | todo | high | devops | CSP violation blocks WC verify iframe. Add to nginx.conf on deploy |
| MF-030 | WebSocket for real-time pool price updates (replace polling) | todo | medium | performance | Polling 700 pools every 15s is unsustainable at 7000. Backend WS + delta updates |
| MF-031 | Web Worker for pool sorting/filtering (offload main thread) | todo | medium | performance | Sorting 7000+ objects causes jank. Move to worker |
| MF-032 | IndexedDB + stale-while-revalidate for instant startup | todo | low | performance | Show cached pools immediately, update in background |

## Backlog

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-001 | Source maps: hidden-source-map + @sentry/webpack-plugin upload + delete from build | todo | critical | observability | Stack traces unreadable without source maps. Use CRACO + sentryWebpackPlugin. See `docs/research-cometa-frontend-observability.md` |
| MF-002 | Price sanity bounds: reject price = 0 or > 50% deviation from cached, log + warn | todo | critical | safety | Moonwell-class risk ($1.78M). Add validation in `src/common/store/prices.ts` and `src/providers/tinymanPriceProvider.ts` |
| MF-003 | Upgrade Sentry from v7.8.0 to v8: Session Replay, structured logs, reactComponentAnnotation | todo | high | observability | v8 adds `replayIntegration`, `enableLogs`. Extract init to `src/sentry.ts` |
| MF-004 | Transaction logger: Sentry breadcrumbs for blockchain tx lifecycle (signing/pending/confirmed/failed) | todo | high | observability | Create `src/utils/transactionLogger.ts`. Filter user rejections (code 4001) from Sentry Issues |
| MF-005 | nginx: add /health endpoint + no-cache for index.html + immutable cache for hashed assets | todo | high | devops | Current nginx.conf missing health check and proper cache headers. See research doc |
| MF-006 | Replace all useStore/useEvent with useUnit across codebase | todo | high | effector | Deprecated in effector-react 22+. grep for `useStore\|useEvent` in src/ |
| MF-007 | Audit three.js and chart.js imports: replace wildcard with named imports | todo | high | performance | Expected saving: 200-400 KB bundle. Check `import * as THREE` and `chart.js/auto` patterns |
| MF-008 | Add tsc --noEmit check to CI/pre-commit (non-blocking initially, track error count) | todo | high | quality | TSC_COMPILE_ON_ERROR=true hides TS errors. Add visibility without blocking pipeline |
| MF-009 | Staleness indicators on price displays: dim at 30s, warning icon at 2min | todo | high | ux | Prices shown without freshness context. Add timestamp tracking to price cache |
| MF-010 | TransactionToast: 4-stage component (Signing → Pending → Confirming → Result) | todo | high | ux | 67% users leave dApps due to unclear tx states. Replace simple toasts with lifecycle feedback |
| MF-011 | Min balance check before opt-in: validate user has 0.1 ALGO + 0.1 per ASA before opt-in | todo | high | safety | Transaction rejection without clear error. Add check in wallet/ before ASA operations |
| MF-012 | Opt-out warning: explicit UI warning when opting out with non-zero balance (irreversible loss) | todo | high | safety | Silent token loss possible. Add confirmation modal in wallet flow |
| MF-013 | Web Vitals monitoring: send LCP/INP/CLS/FCP to Sentry breadcrumbs | todo | medium | observability | Use `web-vitals` library (already in deps). Target: LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| MF-014 | Bundle analyzer: add cra-bundle-analyzer to dev scripts | todo | medium | performance | `yarn add -D cra-bundle-analyzer`, add `"analyze": "npx cra-bundle-analyzer"` to scripts |
| MF-015 | Audit .watch() for business logic: convert to sample() with target | todo | medium | effector | .watch() should only be used for side effects (logging, analytics), not data flow |
| MF-016 | Effector fork() test patterns: write example tests for core stores | todo | medium | quality | Start with `src/common/store/assets.ts` and `src/Farm/store.ts`. Template in CLAUDE.md |
| MF-017 | algosdk mock setup: create shared mock in test utils | todo | medium | quality | No network calls in unit tests. Create `src/tests/mocks/algosdk.ts` |
| MF-018 | Pause MeteorsBackground and three.js on document.hidden | todo | medium | performance | Superseded by MF-028 |
| MF-019 | Skeleton screens: replace spinner-only loading with skeleton layouts for pool list | todo | medium | ux | Reduces perceived load time and CLS. Replace `<div>Loading...</div>` in Suspense fallback |
| MF-020 | formatCryptoValue utility: abbreviations ($1.2M), subscript notation ($0.0₅8), staleness | todo | medium | ux | Standardize number formatting across UI. Consider `@coingecko/cryptoformat` as base |
| MF-021 | Effector logger in development: attach effector-logger for Redux DevTools + console | todo | low | quality | `if (NODE_ENV === 'development') attachLogger()`. Helps debug store updates |
| MF-022 | Audit styled-components: $prefix for transient props, no dynamic interpolation in hot paths | todo | low | quality | Prevents DOM attribute leakage. grep for `styled.*<{` without `$` prefix |
| MF-023 | Evaluate Reach stdlib alternatives: analyze bundle contribution and explore lighter options | todo | low | performance | ~1.7 MB in bundle. Long-term strategic decision, needs backend alignment |

## Done

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-024 | Rate limit all algod requests: shared concurrency queue (max 8 parallel) | done | critical | performance | Created `algodQueue.ts`, wrapped `updateContractStateFx` + `fetchAssetFx`. Was 700+ parallel → max 8. 2026-03-08 |
| MF-024a | Fix pool creation: remove unsafeFromBigint, pass bigint directly to Reach | done | critical | safety | `AddFarm.tsx` — BigInt truncation caused Reach assertion fail between txn1/txn2. 2026-03-08 |
| MF-024b | Fix WalletConnect: add sign timeout + fix txn index alignment | done | high | safety | `deflyWalletV2.ts` — 120s timeout. `customWalletFallback.ts` — shift→index fix. 2026-03-08 |
| MF-024c | Fix mobile GPU crash: remove perspective/preserve-3d/backdrop-filter from mobile | done | critical | performance | `Balance/styled.ts` — removed 3D CSS from mobile breakpoint. 2026-03-08 |
| MF-024d | Fix destructive CSS overrides: replace global * selectors with scoped | done | high | performance | `mobileOptimizations.ts` — was `* { transform: none !important }`, now scoped. 2026-03-08 |
| MF-024e | Fix API error handling: add response.ok check to getPactPools | done | medium | safety | `apiProvider.ts` — handle 429, null-safe results. 2026-03-08 |
| MF-024f | Improve expBackoff: 3x longer delay + jitter on rate limit errors | done | medium | performance | `utils.ts` — detect 429 in error message, apply longer backoff. 2026-03-08 |
| MF-024g | Fix Tinyman API cascade: remove assetAvailable→getLPTokenInfoFx, use enriched only | done | critical | performance | `Farm/store.ts` — removed sample chain causing 100s of parallel Tinyman requests. 2026-03-08 |
| MF-024h | Fix price denomination: use ALGO-denominated Vestige API for getAssetPriceInAlgo | done | critical | safety | `coinPriceProvider.ts` + `tinymanPriceProvider.ts` — was using USDt denomination. 2026-03-08 |
| MF-024i | Fix farm creation BigInt serialization crash | done | critical | safety | `AddFarm.tsx` — JSON.stringify(contractParameters) crashed on BigInt values. 2026-03-08 |
| MF-033 | Fix staking pool TVL: prices inflated by millions | done | critical | safety | Enriched duplicate price filter + backend fix. 2026-03-08 |
| MF-034 | Fix wallet connect delay: 5s lag before QR code | done | high | ux | Pre-warm PeraWalletConnect/DeflyWalletV2 via requestIdleCallback. 2026-03-08 |
| MF-036 | Batch Vestige/LP requests + circuit breakers | done | critical | performance | coinPriceProvider: batch queue 250ms flush. apiProvider: batch LP endpoint. Circuit breakers for both. 2026-03-08 |
| MF-040 | Fix lock-pool stake confirmation hidden behind pool modal | done | critical | ux | `TokenInputWithButton.tsx` now renders the lock warning in a higher body portal, restoring stake/withdraw actions for locked pools like app 3470288517. 2026-03-09 |

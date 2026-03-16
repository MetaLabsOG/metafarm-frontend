# Cometa Frontend — Task Board

> Last updated: 2026-03-16

## Conventions

- **ID format**: `MF-NNN` (sequential, never reuse)
- **Statuses**: `todo` | `in_progress` | `blocked` | `done`
- **Priorities**: `critical` | `high` | `medium` | `low`
- **Tags**: `observability` | `safety` | `performance` | `ux` | `quality` | `devops` | `effector`
- Next available ID: **MF-087**

---

## Pre-Launch Sprint (March 17 Comeback)

> Full context: `~/dev/cometa/cometa-strategy/research/pre-launch-final-plan.md`
> Cross-project sync: `~/dev/cometa/CLAUDE.md` → "Pre-Launch Coordination" section

### Phase 1 — Independent (no cross-project deps)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-041 | Fix TestNet fallback | done | critical | safety | `AppContext.ts:21` — fallback `TESTNET` → `MAINNET`. 2026-03-12 |
| MF-042 | Fix MyAlgo dead wallet migration | done | critical | safety | `cacheMigration.ts` — clear MyAlgo data on boot. `customWalletFallback.ts` — removed MyAlgo from WalletType + dead code. 2026-03-12 |
| MF-043 | Replace dead AlgoExplorer with live alternatives | done | critical | safety | Deleted `algoExplorerProvider.ts` (dead, never imported). Explorer links in `lib.ts` already use `allo.info`. 2026-03-12 |
| MF-044 | UI cleanup: copyright, Slise, Folks promo | done | high | ux | Footer: 2024→2026. Farm.tsx + Stake.tsx: deleted Slise placeholder + Folks promo. 2026-03-12 |
| MF-045 | Fix infinite loading spinner when farm list empty | done | critical | ux | Farm.tsx + Stake.tsx: `isLoading = !state` (null=loading). Empty array → "No active farms/stake pools" message. 2026-03-12 |
| MF-046 | Hide disabled features: NFT tab, cost chart, MetaDAO | done | critical | ux | Removed `/meta-dao` and `/price-test` routes. Backend returns `[]` for NFTs/cost. 2026-03-12 |
| MF-047 | Dead code cleanup | done | high | quality | Removed dead functions (getPoolInfo, getSwapCost, tokensaleWhitelist, multiBatchOptIn), deleted algoExplorerProvider.ts, purged 30+ console.log from critical paths. 2026-03-12 |

### Phase 2 — Coordinated (after backend Phase 1)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-048 | Handle disabled lottery + add axios timeout | done | high | safety | Axios instance: `timeout: 30000`, response interceptor for 503 `{"disabled": true}` → `DisabledFeatureError`. Lottery endpoints return `null` on disabled. expBackoff already handles 429. 2026-03-12 |
| MF-049 | Fix Sentry: reduce trace rate + wire ErrorBoundary | done | high | observability | `tracesSampleRate: 0.1`. `Sentry.captureException(error)` in `componentDidCatch` with component stack. 2026-03-12 |
| MF-050 | Add 404 catch-all route | done | medium | ux | `<Route path="*" element={<Navigate to="/" replace />} />` as last route. 2026-03-12 |
| MF-051 | Fix wallet reconnect failure UX | done | high | ux | `connectWallet` now accepts `isAutoReconnect` flag. On auto-reconnect failure: `clearWalletData()` + warning toast. 2026-03-12 |

### Phase 3 — Audit Fixes (from pre-launch code review)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-052 | Add ErrorBoundary around each feature route | done | high | safety | Each lazy route wrapped in `<ErrorBoundary>`. Crash in one module doesn't kill the app. 2026-03-12 |
| MF-053 | Filter wallet user rejections (4001) from error analytics | done | high | quality | Check error.code 4001 + rejection message patterns before logging to Amplitude/Airtable. 2026-03-12 |
| MF-054 | Fix Notification.tsx .watch() subscription leak | done | high | effector | `api.finally.watch()` now returns unsub as useEffect cleanup. Fixed `==` to `===`. 2026-03-12 |
| MF-055 | Add timeout to checkOptIn fetch | done | medium | safety | AbortController with 5s timeout. Also deleted dead `multiBatchOptIn`. 2026-03-12 |

### Milestones

> **M1: Critical safety** — MF-041, MF-042, MF-043
> **M2: UI + disabled features** — MF-044, MF-045, MF-046
> **M3: Dead code purge** — MF-047 (expanded: all console.log, dead functions, dead files)
> **M4: Robustness** — MF-052, MF-053, MF-054, MF-055, partial MF-006 (useStore→useUnit)

---

## UI Quality (Impeccable Analysis Follow-up)

> Source: `docs/impeccable-analysis.md` audit. Phases 1-3 done, Phase 4 + audit fixes pending.

### Audit Fixes (P1 — from Phase 1-3 review)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-056 | SelectContainer keyboard accessibility | todo | high | ux | `SelectContainer` is `styled.div` with onClick but no tabIndex, role="button", onKeyDown. Primary token select control in Swap/Farm. `src/Components/Select/Select.tsx:185` |
| MF-057 | Fix transition:all on MenuContainer and ExchangeRate | done | high | performance | MenuContainer → `background, box-shadow`. ExchangeRate → `color, text-shadow` |
| MF-058 | Replace mobileOptimizations.ts JS checks with CSS media queries | todo | high | performance | `isMobileDevice()` called at styled-component creation time — value freezes on first render, ignores resize. Should be `@media (max-width: 768px)` in CSS. `src/utils/mobileOptimizations.ts` |
| MF-059 | MeteorToggle ARIA attributes | todo | medium | ux | No `role="switch"`, `aria-checked`, `tabIndex` on toggle. Invisible to screen readers, no keyboard access. `src/Components/ui/MeteorToggle.tsx` |
| MF-060 | Fix logo alt text | done | low | ux | `alt="logo"` → `alt="Algorand"`, `alt="Cometa"` etc. `src/Menu/Menu.tsx:70,76,127` |

### Audit Fixes (P2 — lower priority)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-061 | Remaining transition:all in medium-traffic components | done | medium | performance | Fixed in SwitchSelect, GradientStakeButton, MobileFilter*, AddFarmButton, Swap, wallet.css, StakeButtonMobile |
| MF-062 | Hardcoded hex colors → CSS vars | todo | low | quality | `#90ee90`→`var(--lightGreen)`, `#1e1e1e`→`var(--darkGray)`, `#121212`→`var(--background)` in ~10 files. See audit for full list |
| MF-063 | theme.ts → CSS vars migration (46 usages) | todo | low | quality | 46 places use `theme.XYZ` in styled-components when CSS vars exist. Two sources of truth. Not broken but inconsistent |

### Phase 4 — Polish

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-064 | Unified easing + Pool component consolidation | todo | medium | ux | Replace mixed `ease` with consistent cubic-bezier (ease-out-quart). Consolidate desktop/mobile Pool components |

---

## Design Polish (March 2026 Audit)

> Source: `docs/design-audit-2026-03-16.md` — code audit (35 findings), visual critique (4 screens), DeFi trends research (13 sources).
> Strategy: quick wins first (M5), then polish sprint (M6), then systemic (M7).

### M5 — Visual Quick Wins (5-15 min each, batch commit)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-065 | Remove `maximum-scale=1.0` from index.html | done | critical | ux | WCAG 1.4.4 violation — blocks pinch-to-zoom. One line in `public/index.html:6` |
| MF-066 | Fix `translate: z-0` → `transform: translateZ(0)` | done | high | quality | Removed invalid CSS property from `src/Farm/PoolList/Pool/styled.ts` |
| MF-067 | Fix `#121212` hardcode → `var(--background)` in MeteorsBackground | done | medium | quality | `src/Components/ui/MeteorsBackground.tsx:17` |
| MF-068 | Footer social icons: 24px, opacity 0.55→1 on hover | done | high | ux | Icons 17px→24px, opacity 0.6→0.55 base with hover→1 |
| MF-069 | Pool row hover state: subtle bg tint + border-radius | done | high | ux | Hover → `background: rgba(255,255,255,0.03)`, subtle white border |
| MF-070 | APR column emphasis: weight 700, green tint for high APR | done | high | ux | APR >20% gets green accent color + text-shadow on desktop and mobile |
| MF-071 | Claim/Compound button hierarchy: Compound primary, Claim secondary | done | medium | ux | Compound = green filled button, Claim = outline. Desktop + mobile |

### M6 — Polish Sprint (30 min – 2 hr each, one commit per task)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-072 | Skeleton shimmer animation | done | critical | ux | CSS shimmer gradient replaces flat pulse. Absorbs MF-019 |
| MF-073 | Footer redesign: single-line, brand-first layout | done | high | ux | Copyright+Terms first, socials center, "Algorand Mainnet · Algonode.io" demoted to small text |
| MF-074 | Soften green accent: CTA `#00E676`, keep `#05FF00` for profit/delta only | done | high | ux | `--green` and `theme.green` changed from `#05FF00` to `#00E676` |
| MF-075 | Stake modal: visual divider between Stake and Withdraw sections | done | medium | ux | Added ModalDivider between Stake and Withdraw sections |
| MF-076 | Balance formatting: comma separators, 2 decimals, full precision on hover | done | medium | ux | TokenInputWithButton balance now formatted with commas, 2 decimals, full precision in title |
| MF-077 | Filter pill groups: `|` divider + micro-labels "Status" / "View" | todo | medium | ux | Two independent filter dimensions with no visual separator — confusing for new users |
| MF-078 | Info cards polish: subtle border, hover state, green accent line | done | medium | ux | Green accent line on left, subtle border, improved hover |
| MF-079 | Fix `<a>` used as button: SwitchersContainer and layout containers | done | high | quality | `SwitchersContainer`, `SwitchersAndSearchContainer`, `TopTwoButtonsMobileContainer`: `styled.a` → `styled.div` |

### M7 — Systemic Improvements (2-4 hr each)

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| MF-080 | Merge `--white`/`--newWhite` tokens: 4 white variants → 2 | todo | medium | quality | `--white: #E0E0E0`, `--newWhite: #E2E2E2` (2 units diff), `white` literal, `pureWhite: #FFF`. Consolidate |
| MF-081 | Breakpoint unification: 20+ magic px values → 5 tokens from theme.ts | todo | high | quality | 979px vs 970px gap (menu hidden, burger not shown). 390/400/430/450/490/640/700/768/820+ chaos |
| MF-082 | FarmContainer responsive: `width: 1114px` → `max-width: 1114px; width: 100%` | todo | high | ux | Fixed width causes horizontal scroll on viewport < 1114px |
| MF-083 | Select dropdown: arrow key navigation + `role="option"` on items | todo | medium | ux | Token select is core flow — currently mouse-only after opening |
| MF-084 | Trust signals: Algorand Mainnet badge in footer, contract links on pool cards | todo | medium | ux | No trust indicators in current UI. DeFi standard: audit badge, network, explorer links |
| MF-085 | Flash animation on number updates (APY, price, balance) | todo | low | ux | Brief background highlight when data refreshes — helps users notice changes |
| MF-086 | Font-family fallback: unify to `'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif` | todo | low | quality | 25+ components have `font-family: 'Montserrat'` without fallback. One has `serif` fallback (wrong) |

### Milestones

> **M5: Quick wins** — MF-060, MF-065–071 (batch commit, ~1.5 hr total)
> **M6: Polish sprint** — MF-072–079 + MF-057 + MF-061 (~8 hr total)
> **M7: Systemic** — MF-080–086 + MF-062 + MF-063 + MF-064 + MF-028 (~20 hr total)
> **Expected result after M5+M6**: design rating 5.5 → ~7.0

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

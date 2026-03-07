# Cometa Frontend — Task Board

> Last updated: 2026-03-08

## Conventions

- **ID format**: `MF-NNN` (sequential, never reuse)
- **Statuses**: `todo` | `in_progress` | `blocked` | `done`
- **Priorities**: `critical` | `high` | `medium` | `low`
- **Tags**: `observability` | `safety` | `performance` | `ux` | `quality` | `devops` | `effector`
- Next available ID: **MF-024**

---

## Active

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| | | | | | |

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
| MF-018 | Pause MeteorsBackground and three.js on document.hidden | todo | medium | performance | Saves battery/CPU when tab not visible. Use `visibilitychange` event |
| MF-019 | Skeleton screens: replace spinner-only loading with skeleton layouts for pool list | todo | medium | ux | Reduces perceived load time and CLS. Replace `<div>Loading...</div>` in Suspense fallback |
| MF-020 | formatCryptoValue utility: abbreviations ($1.2M), subscript notation ($0.0₅8), staleness | todo | medium | ux | Standardize number formatting across UI. Consider `@coingecko/cryptoformat` as base |
| MF-021 | Effector logger in development: attach effector-logger for Redux DevTools + console | todo | low | quality | `if (NODE_ENV === 'development') attachLogger()`. Helps debug store updates |
| MF-022 | Audit styled-components: $prefix for transient props, no dynamic interpolation in hot paths | todo | low | quality | Prevents DOM attribute leakage. grep for `styled.*<{` without `$` prefix |
| MF-023 | Evaluate Reach stdlib alternatives: analyze bundle contribution and explore lighter options | todo | low | performance | ~1.7 MB in bundle. Long-term strategic decision, needs backend alignment |

## Done

| ID | Task | Status | Priority | Tag | Notes |
|----|------|--------|----------|-----|-------|
| | | | | | |

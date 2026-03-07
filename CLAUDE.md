# Cometa Frontend (Metafarm)

React-based DeFi frontend for Cometa — a yield farm and intelligent yield optimizer for the Algorand blockchain. Features farming pools, staking, swapping, zapping, and LaaS (Liquidity as a Service).

**IMPORTANT**: This is a financial application. Bugs in transaction construction, amount calculations, or price handling can cause irreversible loss of user funds. Every change touching blockchain logic must be reviewed with extreme care.

## Toolchain Leniency Warning

The build pipeline is intentionally lenient: `TSC_COMPILE_ON_ERROR=true` means TypeScript errors do not block builds, and many ESLint rules are set to "warn". **Claude must enforce stricter standards than the toolchain does.** Write code that would pass `tsc --noEmit` with zero errors. Treat ESLint warnings as errors.

## Linked Projects

### Backend: cometa-backend

- **Path**: `~/metapunks/cometa-backend`
- **Repo**: `MetaLabsOG/cometa-backend`
- **Stack**: Python 3.12, FastAPI, MongoDB, Redis, Algorand SDK
- **Connection**: `REACT_APP_COMETA_API_URL` -> backend (prod: `https://api.cometa.farm/`)

Both projects are developed in parallel. **Any API change in the frontend must be verified against the backend and vice versa.** Backend API routes are in `app.py` + `flex/api.py`.

### API Integration Layer

Frontend API providers in `src/providers/`:

| Provider | Backend Route | Purpose |
|----------|--------------|---------|
| `apiProvider.ts` | `GET /contracts` | Pool/contract list |
| `apiProvider.ts` | `GET /wallet/{addr}/assets` | Wallet assets |
| `apiProvider.ts` | `GET /wallet/{addr}/nfts` | Wallet NFTs |
| `apiProvider.ts` | `GET /contracts/user/{addr}` | User pool states |
| `apiProvider.ts` | `GET /humble/pools/all` | Humble DEX pools |
| `apiProvider.ts` | `POST /contract/register` | Deploy new pool |
| `apiProvider.ts` | `GET /contracts/farm/enriched` | Enriched farm data (assets + prices + LP states) |
| `apiProvider.ts` | `POST /lp/state/priced` | LP token pricing |
| `flexApiProvider.ts` | `POST /asset`, `/assets` | Asset info |
| `flexApiProvider.ts` | `POST /asset/price`, `/assets/price` | Asset prices |

External APIs (not our backend):
- `api.vestigelabs.org` — token prices (via `coinPriceProvider.ts`)
- `api.nf.domains` — NFD wallet names (via `nfdProvider.ts`)
- Algorand node/indexer — direct SDK calls via `AppContext.ts`

### Cross-Project Workflow

- **New backend endpoint**: add provider function in `src/providers/` -> wire into effector store or react-query -> use in component
- **Changed response shape**: update types in `src/common/store/types.ts` -> update store/provider
- **Price data flow**: backend `flex/data/` -> `flexApiProvider.ts` -> `src/common/store/prices.ts` -> UI components

## Key Commands

```bash
yarn install          # Install dependencies (includes vendored packages setup)
yarn start            # Start development server (port 3000)
yarn build            # Build for production
yarn prod             # Build with .env.prod
yarn dev              # Build with .env.dev
yarn test             # Run tests (Jest)
yarn lint             # Lint code with XO
yarn lint-summary     # Get linting summary
```

### Environment Variables
- `DISABLE_ESLINT_PLUGIN=true` — disabled for build performance
- `TSC_COMPILE_ON_ERROR=true` — allows building with TypeScript errors (see warning above)
- `GENERATE_SOURCEMAP=false` — disabled for production builds
- `CI=false` — bypasses CI-specific checks during builds

## Architecture

### Project Structure
```
src/
├── common/           # Shared utilities, stores, global styles
│   ├── store/        # Effector stores (account, assets, contracts, prices, time)
│   ├── lib.ts        # Reach/algosdk helpers, BigNumber conversions
│   ├── priceCache.ts # Price caching with TTL
│   └── styled.ts     # Shared styled components
├── Components/       # Reusable UI components
├── Farm/             # Farming functionality + store.ts
├── Stake/            # Staking functionality + store.ts
├── LaaS/             # Liquidity as a Service + store.ts
├── Swap/             # Token swapping
├── Zap/              # Zapping (single-sided liquidity provision)
├── dexes/            # DEX integrations (Tinyman v1/v2, Pact, Humble)
├── providers/        # API and data providers
├── wallet/           # Wallet connection (Pera, Defly, WalletConnect v2)
├── hooks/            # Custom React hooks
├── utils/            # Performance cache, mobile optimizations
└── vendor/           # Vendored internal packages (metalabs-farm, metalabs-common)
```

### Core Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI | React | 18.3.1 |
| Language | TypeScript | 4.7 (strict) |
| State | Effector + patronum | 22.3 + 1.9 |
| Server state | React Query | 3.39 |
| Styling | Styled Components + Tailwind (sparingly) | 5.3 |
| Routing | React Router | 6.3 |
| Blockchain | algosdk + Reach stdlib | 2.7 + 0.1.11 |
| Build | Webpack (CRA-based, not ejected) | 5.91 |
| Linting | XO + ESLint + Prettier | 0.51 |
| Testing | Jest + jsdom | 28 |
| Monitoring | Sentry | 7.8 |

## Effector Conventions

### Naming (mandatory)

- **Stores**: `$` prefix — `$account`, `$farmPools`, `$isLoading`
- **Effects**: `Fx` suffix — `fetchAssetFx`, `updateContractStateFx`
- **Events**: camelCase, past tense for state changes, imperative for intentions — `accountConnected`, `setPoolInfos`, `triggerStateUpdate`

### Hooks (mandatory)

```typescript
// CORRECT — always use useUnit (effector-react 22+)
const { account, pools } = useUnit({ account: $account, pools: $farmPools });
const handleClick = useUnit(sortPools);

// WRONG — deprecated, never use
const account = useStore($account);     // NO
const handler = useEvent(sortPools);    // NO
```

### Store Creation

- Create stores, events, and effects at **module level only** — never inside React components or functions (breaks SIDs)
- Use `createStore` for state, `createEvent` for synchronous signals, `createEffect` for async operations
- Keep stores atomic (one logical domain per store), derive with `combine()` or `.map()`

### Data Flow

```typescript
// CORRECT — declarative data flow via sample()
sample({
  clock: assetAvailable,
  source: { pools: $farmPools, price: $algoUsdPrice },
  filter: ({ pools }, asset) => pools.some(p => p.state?.initial.stakeToken === asset.id),
  fn: ({ pools, price }, asset) => ({ lpTokenAsset: asset, algoPrice: price, ... }),
  target: getLPTokenInfoFx,
});

// WRONG — imperative calls inside effects
const badEffect = createEffect(async () => {
  const val = $store.getState();  // NO — bypasses reactive graph
  someEvent(val);                 // NO — imperative event call inside effect
});
```

### Anti-Patterns (never do)

| Anti-Pattern | Correct Approach |
|---|---|
| `$store.getState()` in logic | `sample({ source: $store })` |
| `.watch()` for business logic | `sample()` with `target` |
| `effect.use(handler)` after creation | `createEffect(handler)` directly |
| Event call inside another effect | Declarative `sample()` chain |
| Monolithic store `{ a, b, c, d }` | Atomic stores + `combine()` |
| `createStore()` inside component | Module-level declaration |

### React Query vs Effector

| Data Type | Tool | Example |
|-----------|------|---------|
| API responses (server state) | React Query | `useQuery(['contracts'], getContracts)` |
| Wallet / account state | Effector | `$account`, `$balances` |
| UI state (modals, tabs, filters, sort) | Effector | `$sortOrder`, `sortPools` |
| Derived from API + client state | Effector `combine` | `$farmPoolDollarInfos` |

**Rule**: never copy React Query data into an Effector store — two sources of truth cause desync. Wire React Query results through events: `setPoolInfos(queryData)`.

## Blockchain Safety Rules

### Transaction Construction

- All Asset ID and Application ID — only from `AppContext.ts` or config, **never hardcode**
- `algod.getTransactionParams().do()` — fresh params for every transaction, never cache > 10 seconds
- After submission: `waitForConfirmation(algodClient, txId, 4)` is **mandatory** before updating UI
- `algosdk.assignGroupID([...txns])` before signing atomic groups
- Fee pooling: inner txns with `fee=0`, outer txn covers total

### Amount Handling

```typescript
// CORRECT — BigInt for all on-chain amounts
const amount = BigInt(Math.round(userInput * 10 ** token.decimals));
const display = fromSmallestUnits(asset, rawAmount); // from common/lib.ts

// WRONG — Number for financial math (silent overflow > 2^53)
const amount = parseFloat(balance) * 1e6; // NO
```

- Every ASA has its own `decimals` (0-19) — read from asset info, never assume 6
- Suffix convention: `_raw` / `_micros` for smallest units, `_display` for human-readable
- Round DOWN when calculating minimum output (user's favor): `BigInt(Math.floor(...))`
- Use `fromSmallestUnits()` from `src/common/lib.ts` for display conversions

### Algorand-Specific Rules

- **Minimum balance**: base 0.1 ALGO + 0.1 per ASA opt-in. Check before opt-in operations
- **Opt-in check**: ASA transfer to non-opted-in account = on-chain rejection. Always verify first
- **Opt-out with non-zero balance** = irreversible token loss. UI must warn explicitly
- **Network config** is centralized in `AppContext.ts` — TestNet vs MainNet IDs differ for everything

### Price Safety

- Never use DEX spot price as sole oracle — it's manipulable via flash loans
- Price sanity bounds: price cannot be 0, cannot deviate > 50% from cached value without warning
- Stale price data (> 30s): dim display. Over 2 min: show warning icon
- Cache prices with TTL via `src/common/priceCache.ts`

### Wallet Integration

- `PeraWalletConnect` — singleton outside React components (one instance per app)
- `reconnectSession()` in `useEffect` on mount
- `connect()` always in try-catch — closed modal = promise rejection (not a bug)
- User rejection (`code === 4001`) is expected flow, not an error — don't send to Sentry

### DEX Integration Pattern

When adding a new DEX in `src/dexes/`:
1. Create `src/dexes/<name>.ts` implementing the `Dex` abstract class from `common.ts`
2. Implement `getPool()`, `getPoolByAssets()`, `getPoolByAddress()`
3. Add provider code (`'XX'`) to `DexProvider` type and `makeDex()` factory
4. Add to `DEX_TRY_ORDER` in `src/dexes/index.ts`
5. Never modify vendored contracts in `vendor/` without explicit approval

## Component Guidelines

### File Structure

Each feature module follows this pattern:
```
Feature/
├── Feature.tsx       # Main component (lazy-loaded from index.tsx)
├── store.ts          # Effector stores, events, effects
├── styled.ts         # Styled Components
├── utils.ts          # Pure utility functions
├── index.ts          # Re-exports
└── SubComponent/     # Sub-components if needed
```

### Styled Components Rules

- Declare styled components at **module level only** — never inside render functions
- Use `$` prefix for transient props (prevents DOM leakage):
  ```typescript
  const Card = styled.div<{ $isActive: boolean }>`
    background: ${({ $isActive }) => $isActive ? '#1a1' : 'transparent'};
  `;
  ```
- For frequently changing values (scroll, animation frame): use CSS custom properties instead of prop interpolation
- Global styles in `src/common/globalStyles.ts` — minimize additions

### Lazy Loading

All route-level components use `React.lazy()` with `Suspense` (see `src/index.tsx`). New routes must follow the same pattern:
```typescript
const NewFeature = lazy(() => import('./NewFeature').then(m => ({ default: m.NewFeature })));
```

### Error Boundaries

`ErrorBoundary` is the only allowed class component. Wrap feature modules that make blockchain calls. Log to Sentry in `componentDidCatch`.

## Performance Rules

### Bundle Size Awareness

- **three.js**: only named imports — `import { WebGLRenderer } from 'three'`; never `import * as THREE`
- **chart.js**: register only needed components; never `import ChartJS from 'chart.js/auto'`
- **ramda**: named imports — `import { sort, zipWith } from 'ramda'`
- Before adding a dependency > 50 KB gzipped: justify explicitly

### React Performance

- **Memoization discipline**: use `useMemo`/`useCallback` only when:
  - Value is a dependency of another hook AND is non-primitive
  - Computation involves sorting/filtering arrays with 500+ elements
  - Function is passed to a `React.memo`-wrapped child
- **React.memo**: only for components that render frequently with same props and ALL props are stable
- **Never optimize without profiling** in React DevTools Profiler first

### Effector Performance

- Subscribe to granular stores — never subscribe to a large combined store for one field
- `useUnit` batches multiple store reads into one subscription — prefer it over multiple `useUnit` calls
- Use `.map()` on stores for derived data instead of `combine` when only one source is needed

### Virtualization

- Virtualize any list > 50 items (pool lists use `react-window`)
- Wrap each row component in `React.memo`
- Row components in `src/Farm/PoolList/` follow this pattern

### Animation Budget

- Animate only `transform` and `opacity` (GPU-composited). Never animate `width`, `height`, `top`, `left`
- `MeteorsBackground` and three.js scenes: pause when `document.hidden === true`
- On mobile (via `performanceCache`): disable heavy visual effects

## Testing Conventions

### Effector Store Tests

Always use `fork()` for isolation — global stores persist between tests otherwise:
```typescript
import { fork, allSettled } from 'effector';

const scope = fork({
  values: [[$account, mockAccount]],
  handlers: [[fetchAssetFx, async () => mockAsset]],
});

await allSettled(registerAsset, { scope, params: 12345 });
expect(scope.getState($assets).has(12345)).toBe(true);
```

### Blockchain Code Tests

Mock algosdk at module level — no network calls in unit tests:
```typescript
jest.mock('algosdk', () => ({
  makePaymentTxnWithSuggestedParamsFromObject: jest.fn(() => ({
    txID: () => 'MOCK_TX_ID',
    toByte: () => new Uint8Array([1, 2, 3]),
  })),
  ALGORAND_MIN_TX_FEE: 1000,
}));
```

### Financial Math Tests

- Use exact integer assertions, never `toBeCloseTo` for on-chain amounts
- Test edge cases: zero input, zero reserve, maximum uint64 values
- Test slippage calculation with actual token decimals

## Code Style

### Import Order (enforced by XO)

1. Node built-ins (`path`, `assert`)
2. External packages (`react`, `effector`, `algosdk`)
3. Internal absolute (`../../common/store`, `../../AppContext`)
4. Relative (`./styled`, `./utils`)
5. Styles and assets

Use `import type { ... }` for type-only imports.

### TypeScript Rules

- Always explicit return types on exported functions
- Prefer `unknown` over `any` — use type guards for narrowing
- New code must pass `tsc --noEmit` even though build doesn't enforce it
- Use existing type helpers: `AllDefined<T>`, `Priced<T>`, `AllBignums<T>` from `src/common/store/types.ts`

## Deployment

- **Docker**: multi-stage build (`node:18-alpine` -> `nginx:alpine`)
- **Host**: Hostinger VPS (`hostinger` SSH alias)
- **Static serving**: nginx with SPA routing (`try_files $uri /index.html`)
- **Build args**: `REACT_APP_COMETA_API_URL` set at Docker build time

## Error Tracking

- **Sentry** initialized in `src/index.tsx` with `BrowserTracing`
- Do NOT send user wallet rejections (code 4001) as errors — they are expected flow
- Add Sentry breadcrumbs for blockchain transactions: action, txHash, status
- Use `Sentry.captureException` only for genuine errors, not expected states

## Vendored Dependencies

Do not modify files in `vendor/` or `src/vendor/` without explicit approval. These are pinned versions of internal MetaLabs packages:
- `@metalabsog/farm@17.2.4` and `@17.2.5` — farm contract backends
- `@metalabsog/common@17.0.0` — shared utilities
- `js-conflux-sdk@1.6.0` — Reach stdlib dependency

When upgrading: diff all exports, verify contract ABI compatibility.

## Commit Discipline

- Always commit after completing a task or logical unit of work
- Use lowercase verb, concise English: `add`, `fix`, `update`, `remove`, `refactor`
- Push after committing unless explicitly told not to
- Update task board status before committing the related work
- Verify `yarn build` succeeds before committing

## Pre-Commit Checklist (DeFi-specific)

- [ ] All Asset/App IDs from config, not hardcoded
- [ ] All financial calculations use BigInt, not Number
- [ ] Decimals read from asset info, not assumed
- [ ] `useUnit` everywhere — no `useStore`/`useEvent`
- [ ] Effects have `.fail` handler or are caught
- [ ] `waitForConfirmation()` before UI update in transaction flows
- [ ] Styled Components props use `$` prefix for transient props
- [ ] New stores/events/effects declared at module level

## Task Board

Tasks in `BOARD.md`. Format: pantheon.

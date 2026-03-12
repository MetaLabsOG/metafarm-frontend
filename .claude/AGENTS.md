# Frontend Agent Briefing — Pre-Launch Sprint

Read this at session start before touching any code.

## Context

Cometa is relaunching after 8 months of shutdown. Comeback tweet: March 17, 2026. Your task board: `BOARD.md` → "Pre-Launch Sprint" section (MF-041 to MF-051).

## Phase 1 (do first — no backend dependencies)

Order matters — safety first, then UX:
1. **MF-041** — TestNet fallback (1 line, 2 min)
2. **MF-042** — MyAlgo dead wallet migration
3. **MF-043** — AlgoExplorer replacement
4. **MF-044** — Copyright + dead promo cleanup
5. **MF-045** — Infinite spinner fix
6. **MF-046** — Hide NFT tab, cost chart, MetaDAO
7. **MF-047** — Dead code + console.log cleanup

## Phase 2 (after developer confirms backend Phase 1 done)

- **MF-048**: Handle 503 from disabled lottery + axios timeout. Don't start until CB-056 deployed.
- **MF-049**: Sentry fixes
- **MF-050**: 404 route
- **MF-051**: Wallet reconnect UX

## Cross-project awareness

- CORS errors may appear until backend deploys CB-052. Not your bug.
- Backend will return `[]` from `/wallet/{addr}/nfts` and `/wallet/{addr}/total_cost/` (CB-055). Your MF-046 hides these tabs.
- Backend will return 503 on `/lottery/*` (CB-056). Your MF-048 handles this gracefully.
- If Deflex SDK is dead (check browser console on Swap page), create a new task to hide the Swap tab.

## Do NOT touch

- Reach stdlib / `cometa-laas-tmp/` — out of scope
- `AddFarm.tsx` contract deployment logic
- Effector store architecture (`.watch()` → `sample()` migration is post-launch)
- Any performance optimization from backlog (MF-025, MF-026, etc.)

## When done

Update task status in `BOARD.md`. For Phase 2 tasks, also update the Cross-Project Task Sync table in `~/dev/cometa/CLAUDE.md`.

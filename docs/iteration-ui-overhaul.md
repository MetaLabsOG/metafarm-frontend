# UI Overhaul — Iteration Plan

> Started: 2026-03-17
> Scope: Bug Fixes + Phase A (Visual Polish)

## Overview

Based on 4-agent parallel analysis (UX Explorer, DeFi Researcher, UX Architect, Visual Designer).
Full task backlog covers Phases A–D (21 tasks). This iteration takes **Bug Fixes + Phase A** only.

---

## This Iteration: Bug Fixes + Phase A

### Milestone 1 — Fix text rendering defaults

**Commit**: `fix body text defaults: font, color, minimum readable sizes`

| ID | Task | Status |
|----|------|--------|
| MF-087 | Body color `var(--text-primary)` #5cfc3c → `var(--white)` in globalStyles | done |
| MF-087 | Body font `'Korona One'` → `var(--font-body)` in globalStyles | done |
| MF-087 | PoolSubtitle: 8/7/6px → 11px min across all breakpoints, use Montserrat | done |
| MF-087 | PoolTitle mobile: 9px → 11px minimum | done |

### Milestone 2 — Fix navigation & breakpoint bugs

**Commit**: `fix search input breakpoint gap and Get Token navigation`

| ID | Task | Status |
|----|------|--------|
| MF-088 | "Get Token" external `<a href>` → React Router `<Link to="/swap">` | done |
| MF-089 | PoolSearchInput: remove `display: none` at 700-820px breakpoint | done |

### Milestone 3 — Visual depth + performance polish

**Commit**: `improve visual depth: surface contrast, modal blur, gradient borders, meteor optimization`

| ID | Task | Status |
|----|------|--------|
| MF-090 | Surface layer contrast: widen gaps between --background/--backgroundCard/--backgroundModal | done |
| MF-091 | Modal overlay: opacity 0.86 → 0.72 + backdrop-filter blur(4px) | done |
| MF-092 | Meteor threshold raise (768→960px) | done |
| MF-093 | Pool card green hover border | done |

### Milestone 4 — Pool loading fix

**Commit**: `fix LP token names and cache contracts for instant repeat loads`

| ID | Task | Status |
|----|------|--------|
| MF-095 | LP name fallback: `formatRawLPTokenName` extracts pair name from raw asset name | done |
| MF-095 | Contracts cached in localStorage (stale-while-revalidate, 30min TTL) | done |
| MF-095 | Root cause: backend `lp_states` empty in enriched endpoint | blocked (backend) |

### Milestone 5 — Progressive pool loading

**Commit**: `remove enriched gate: show pool skeletons in ~0.5s instead of blocking 20s`

| ID | Task | Status |
|----|------|--------|
| MF-095 | Remove `enrichedLoaded` gate — pools render from contracts (~0.5s) while enriched loads in background (~21s) | done |
| MF-095 | Pool skeletons show immediately, fill in progressively as asset/price data arrives | done |

---

## Remaining Phases (not this iteration)

### Phase B — UX Foundation
- F1: Unified "Earn" page (Farm+Stake merged)
- F2: Swap Modal (replace external link with portal modal)
- F3: URL-based filter persistence
- F4: Sticky column headers + click-to-sort

### Phase C — Key Features
- K1: Persistent Swap Drawer (desktop sidebar / mobile bottom sheet)
- K2: Sticky Portfolio Bar (Total + Rewards + Claim All)
- K3: "Get Tokens" on pool cards with drawer pre-fill

### Phase D — Polish & Advanced
- P1: Pool cards with inline actions
- P2: "My Positions" tab in Earn
- P3: Mobile bottom navigation
- P4: Button hierarchy redesign
- P5: Swap → Deposit suggestion flow

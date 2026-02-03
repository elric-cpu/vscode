# Agent instructions (scope: this directory and subdirectories)

## Scope and layout
- **This AGENTS.md applies to:** `./` and below.
- **Key directories:**
  - `base_code/` (read-only reference implementation)
  - `feature_enhanced/` (active development with added features)

## Modules / subprojects

| Module | Type | Path | What it owns | How to run | Tests | Docs | AGENTS |
|--------|------|------|--------------|------------|-------|------|--------|
| base_code | vite-react | `base_code/` | Known working website (read-only) | N/A (do not run/edit) | N/A | N/A | N/A |
| feature_enhanced | vite-react | `feature_enhanced/` | Feature work and enhancements | `npm run dev` | `npm run test` | N/A | `feature_enhanced/AGENTS.md` |

## Cross-domain workflows
- `feature_enhanced/` may import from `base_code/` for reference, but `base_code/` must never be edited.
- If a change seems needed in `base_code/`, re-implement it in `feature_enhanced/` or ask for guidance before proceeding.

## Verification (preferred commands)
- Run module-specific commands from that module directory (see each module’s `AGENTS.md`).
- Run quiet first; re-run narrowed failures with verbose logs only when debugging.

## Global conventions
- Keep instructions concise and scoped; place tech-specific commands in module `AGENTS.md`.
- Treat `base_code/` as read-only at all times.

## Links to module instructions
- `feature_enhanced/AGENTS.md`

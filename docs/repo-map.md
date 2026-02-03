**Repository Overview**
- Scope: `base_code/` (read-only reference) and `feature_enhanced/` (active development), plus QA and Lighthouse configs.
- Analysis: static scan only; excluded `.github/`, `node_modules/`, and common build artifacts.

**Directory Tree**
```text
.
+-- AGENTS.md
+-- base_code/
|   +-- .nvmrc
|   +-- eslint.config.mjs
|   +-- index.html
|   +-- package.json
|   +-- plugins/
|   +-- src/
|   +-- tools/
|   `-- vite.config.js
+-- feature_enhanced/
|   +-- .env
|   +-- .env.example
|   +-- .nvmrc
|   +-- AGENTS.md
|   +-- docs/
|   +-- e2e/
|   +-- k6/
|   +-- mocks/
|   +-- package.json
|   +-- playwright.config.ts
|   +-- plugins/
|   +-- public/
|   |   +-- images/
|   |   |   `-- album/ (collapsed: large media set)
|   |   +-- landing/
|   |   `-- resources/
|   +-- src/
|   +-- supabase/
|   +-- tests/
|   +-- tools/
|   +-- workers/
|   `-- vite.config.js
+-- lighthouse/
|   `-- lighthouserc.json
+-- qa/
|   +-- README.md
|   +-- sanity.sh
|   `-- security-baseline.sh
+-- docs/
|   +-- repo-map.md
|   +-- dependency-graph.mmd
|   +-- coverage-gaps.md
|   +-- open-questions.md
|   `-- module-summaries/
|       +-- base_code.md
|       +-- feature_enhanced.md
|       +-- feature_enhanced-workers.md
|       +-- feature_enhanced-supabase.md
|       +-- qa.md
|       `-- lighthouse.md
`-- repo-index.json
```

**Tech Stack and Versions**
- Node: `20.19.1` (from `.nvmrc`).
- React: `18.3.1`.
- React Router: `7.1.1`.
- Vite: base_code `4.4.5`, feature_enhanced `7.3.1`.
- @vitejs/plugin-react: base_code `4.3.4`, feature_enhanced `5.1.3`.
- Tailwind CSS: `3.4.17`.
- Supabase JS: `2.45.4` (feature_enhanced only).
- Playwright: `1.58.1`.
- Vitest: `4.0.18`.
- Lighthouse: `13.0.1`.
- LHCI: `0.15.1`.

**Module Inventory**
| Name | Path | Language | Purpose | Entry points | Deps (internal/external) | Tests | LOC |
| --- | --- | --- | --- | --- | --- | --- | --- |
| base_code | `base_code/` | JavaScript, CSS, HTML | Read-only reference website | `index.html -> src/main.jsx` | 0/36 | none | 20542 |
| feature_enhanced | `feature_enhanced/` | JavaScript, TypeScript, CSS | Active web app | `index.html -> src/main.jsx` | 2/54 | unit, integration, e2e, smoke, regression, a11y, visual | 39786 |
| feature_enhanced-workers | `feature_enhanced/workers/` | JavaScript | Edge worker APIs | `workers/src/index.js` | 0/0 | none | 253 |
| feature_enhanced-supabase | `feature_enhanced/supabase/` | SQL | DB schema and RLS | `supabase/migrations/*.sql` | 0/0 | none | 255 |
| qa | `qa/` | Markdown, Shell | QA docs and scripts | `qa/sanity.sh` | 0/0 | n/a | 234 |
| lighthouse | `lighthouse/` | JSON | Lighthouse config | `lighthouserc.json` | 0/0 | n/a | 31 |

**Key Entry Points**
- `base_code`: `npm run dev` (Vite dev server on port 3000).
- `feature_enhanced`: `npm run dev`, `npm run build`, `npm run preview`.
- Tests: `npm run test:unit`, `npm run test:integration`, `npm run test:e2e`, `npm run test:a11y`, `npm run test:perf`, `npm run test:load`, `npm run test:security`.
- Worker: deploy via Wrangler using `feature_enhanced/workers/wrangler.toml` (command not defined in scripts).
- Supabase: apply migrations in `feature_enhanced/supabase/migrations/` (CLI workflow not defined in scripts).

**Infra and CI Summary**
- No Docker, Kubernetes, Helm, or Terraform files detected in scanned paths.
- CI configuration likely in `.github/` (excluded from this scan).
- Lighthouse CI config present in `lighthouse/` and `feature_enhanced/lighthouserc.json`.

**Risk Hotspots**
- Large UI files: `feature_enhanced/src/pages/Home.jsx`, `feature_enhanced/src/pages/Resources.jsx`, `feature_enhanced/src/pages/BlogPost.jsx`.
- Large feature components: `feature_enhanced/src/components/residential-maintenance/ResidentialMaintenanceFunnel.jsx`.
- Custom Vite plugins: `feature_enhanced/plugins/visual-editor/` and `feature_enhanced/plugins/selection-mode/`.
- Large media directory: `feature_enhanced/public/images/album/` (many assets).
- Repo artifacts: `feature_enhanced/dist.zip` and test output dirs appear committed.
- TODO/FIXME: none detected in scanned files.

**How to Navigate**
- Start with `feature_enhanced/AGENTS.md` for module conventions and feature map.
- Routes live in `feature_enhanced/src/App.jsx`; bootstrap in `feature_enhanced/src/main.jsx`.
- UI components in `feature_enhanced/src/components/`; utilities in `feature_enhanced/src/lib/`.
- Worker code in `feature_enhanced/workers/`; Supabase schema in `feature_enhanced/supabase/`.
- Reference implementation in `base_code/` (read-only).

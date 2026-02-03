# base_code

**Purpose**
- Read-only reference Vite React website used as a baseline for feature work.

**Public API Surface**
- Client-side routes defined in `base_code/src/App.jsx`.
- Page components under `base_code/src/pages/`.
- Reusable UI components under `base_code/src/components/`.

**Key Components**
- `base_code/src/main.jsx` bootstraps the React app.
- `base_code/src/App.jsx` defines routes and layout.
- `base_code/src/components/SEO.jsx` manages metadata.
- `base_code/src/contexts/SupabaseAuthContext.jsx` provides auth state.

**Inputs and Outputs**
- Inputs: browser navigation, route params, and form interactions.
- Outputs: rendered SPA pages and static content.
- Side effects: Vite dev overlay and injected scripts from `base_code/vite.config.js`.

**Dependencies**
- Internal: none.
- External: React, React Router, Radix UI, Framer Motion, Tailwind CSS, Vite.

**Config and Env**
- `NODE_ENV`, `TEMPLATE_BANNER_SCRIPT_URL`, `TEMPLATE_REDIRECT_URL` in `base_code/vite.config.js`.
- Vite alias `@` maps to `base_code/src`.

**Risks**
- No tests detected in this module.
- Large page components such as `base_code/src/pages/Home.jsx` and `base_code/src/pages/Resources.jsx`.
- Custom Vite plugins under `base_code/plugins/` are untested.

**Suggested Next Steps**
- Add smoke tests for routing and critical pages.
- Document custom Vite plugins and injected scripts.

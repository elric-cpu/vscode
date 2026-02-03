# feature_enhanced

**Purpose**
- Primary Vite React application with client and subcontractor portals, maintenance estimators, and commercial agreements.

**Public API Surface**
- Client-side routes defined in `feature_enhanced/src/App.jsx`.
- Feature pages under `feature_enhanced/src/pages/`.
- Reusable components under `feature_enhanced/src/components/`.
- Service utilities under `feature_enhanced/src/lib/`.

**Key Components**
- `feature_enhanced/src/main.jsx` bootstraps the app.
- `feature_enhanced/src/components/estimator/EstimatorWizard.jsx` handles estimator flow.
- `feature_enhanced/src/components/commercial-agreements/CommercialAgreementFunnel.jsx` handles commercial lead flow.
- `feature_enhanced/src/components/maintenance-planner/ResidentialMaintenancePlannerModule.jsx` renders maintenance planning UI.
- `feature_enhanced/src/lib/edgeClient.js` calls the worker API.
- `feature_enhanced/src/lib/customSupabaseClient.js` configures Supabase client.

**Inputs and Outputs**
- Inputs: user navigation, form submissions, auth tokens.
- Outputs: rendered SPA content and API calls to lead endpoints.
- Side effects: network requests to worker endpoints, Supabase, and lead APIs.

**Dependencies**
- Internal: `feature_enhanced-workers`, `feature_enhanced-supabase` (runtime integration).
- External: React, React Router, Supabase JS, Radix UI, Framer Motion, Tailwind CSS.

**Config and Env**
- Vite/Runtime: `VITE_WORKER_BASE_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
- Lead endpoints: `VITE_ESTIMATOR_LEAD_ENDPOINT`, `VITE_COMMERCIAL_AGREEMENT_LEAD_ENDPOINT`, `VITE_RESIDENTIAL_MAINTENANCE_LEAD_ENDPOINT`.
- Analytics and site: `VITE_GA_MEASUREMENT_ID`, `VITE_GTM_ID`, `VITE_PLAUSIBLE_DOMAIN`, `VITE_SITE_URL`.

**Patterns**
- Vite alias `@` maps to `feature_enhanced/src`.
- Custom Vite plugins in `feature_enhanced/plugins/` for edit and selection modes.
- Test suites cover unit, integration, e2e, smoke, regression, a11y, and visual flows.

**Risks**
- Large page components such as `feature_enhanced/src/pages/Home.jsx` and `feature_enhanced/src/pages/Resources.jsx`.
- Custom Vite plugins are untested.
- Runtime integrations depend on environment configuration.

**Suggested Next Steps**
- Add contract tests for worker and Supabase integration paths.
- Add tests around large content-heavy pages.
- Consider splitting very large pages into smaller components.

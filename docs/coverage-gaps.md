**Signals**
- Test tooling detected: Vitest, Playwright, LHCI, k6, zap-baseline.
- Test suites present under `feature_enhanced/tests/` and `feature_enhanced/e2e/`.

**base_code**
- No test files detected.
- Risk: regressions in routing and large page components are untested.

**feature_enhanced**
- Coverage present: unit, integration, e2e, smoke, regression, a11y, visual.
- Gaps: custom Vite plugins under `feature_enhanced/plugins/` have no tests.
- Gaps: worker integration paths in `feature_enhanced/src/lib/edgeClient.js` lack contract tests.
- Gaps: Supabase SQL functions and RLS policies are not tested.
- Gaps: very large content pages have limited automated coverage.

**feature_enhanced-workers**
- No tests detected.
- Recommendation: add request validation and integration tests for Stripe and Resend flows.

**feature_enhanced-supabase**
- No migration or policy tests detected.
- Recommendation: add SQL tests for RLS and portal bundle functions.

**qa**
- Scripts and checklists only; no automated tests.

**lighthouse**
- Configuration only; no tests.

# Test Plan

## Scope
- In scope: public pages, primary navigation, contact form, calculators, blog, resources, service pages, site performance, accessibility, security baseline, cross-browser/responsive.
- Out of scope: payment processing, authenticated dashboards (unless added), third-party admin portals.

## Environments
- Staging: <STAGING_URL> (mirrors production configuration; no real PII).
- Local: http://127.0.0.1:3000 for dev smoke.

## Entry Criteria
- Staging deployed with production-like config.
- Test data seeded (mock credentials, no PII).
- Build passes and deploy pipeline green.

## Exit Criteria
- Smoke tests pass on staging.
- Regression tests pass or have approved waivers.
- Lighthouse budgets within thresholds.
- A11y checks have no critical violations.
- Security baseline clean or triaged with mitigations.

## Roles
- QA lead: owns test plan, release gates, reporting.
- Developers: fix defects, update test coverage.
- Product/Design: approve UX changes and a11y remediation.

## Schedule
- PR: smoke + a11y + lint/build.
- Nightly: full regression + lighthouse + security baseline.
- Release: full suite + manual exploratory.

## Selector Strategy
- Prefer `getByRole` and visible text for stability.
- Add `data-testid` for dynamic content or duplicated labels.

## Risks
| Risk | Impact | Likelihood | Mitigation |
| --- | --- | --- | --- |
| Third-party outages | High | Medium | Mock/stub in tests; add fallback UI checks. |
| Flaky UI selectors | Medium | Medium | Use role-based selectors + testId strategy. |
| Performance regressions | High | Medium | Lighthouse budgets, pre-merge perf check. |
| A11y regressions | High | Medium | Axe checks + manual keyboard review. |
| Browser-specific bugs | Medium | Medium | Cross-browser matrix in CI. |

## Coverage Map
| Area | Manual | Automated |
| --- | --- | --- |
| Navigation & routing | Yes | Smoke |
| Contact form | Yes | Smoke |
| Calculators/estimators | Yes | Regression |
| Blog/resources | Yes | Regression |
| Accessibility | Yes | A11y + manual |
| Performance | Yes | Lighthouse |
| Security | Yes | ZAP baseline |
| Visual regression | Optional | Visual snapshots |

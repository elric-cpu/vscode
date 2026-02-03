# QA README

## Prereqs
- Node 20.x
- Docker (for ZAP baseline)
- Browsers installed via Playwright

## Install
- `npm install` from `feature_enhanced/`
- `npx playwright install --with-deps chromium firefox webkit`

## Run Locally
- Smoke (from `feature_enhanced/`): `npx playwright test tests/smoke`
- A11y (from `feature_enhanced/`): `npx playwright test tests/a11y`
- Regression (from `feature_enhanced/`): `npx playwright test tests/regression`
- Visual (from `feature_enhanced/`): `npx playwright test tests/visual --update-snapshots`
- Lighthouse (from `feature_enhanced/`): `npx lhci autorun --config=../lighthouse/lighthouserc.json`
- Security baseline (from repo root): `STAGING_URL=<STAGING_URL> ./qa/security-baseline.sh`

## Run Against Staging
- `BASE_URL=<STAGING_URL> npx playwright test tests/smoke`

## CI Expectations
- PR: smoke + a11y + lint/build.
- Nightly: regression + lighthouse + security baseline.
- Visual and security jobs are non-blocking by default.
- Set GitHub Actions variable `STAGING_URL` (or use a secret).

## Flaky Tests
- Tag flaky tests with `@flaky` and quarantine to non-blocking job.
- Add a follow-up ticket and remove the tag after fix.

## Test Data
- Use `.env.example` for mock credentials.
- Do not use real PII on staging.

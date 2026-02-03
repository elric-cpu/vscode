# Security Baseline

## Scope
- Public endpoints on staging.
- No authenticated or PII flows.

## Triage Policy
- Critical/High: block release unless accepted risk documented.
- Medium: fix within 1 sprint or document compensating control.
- Low/Info: backlog with owner.

## ZAP Baseline
- Script: `qa/security-baseline.sh`.
- Requires Docker and `STAGING_URL` env var.
- Output: `qa/security-reports/zap-baseline.html`.

## Dependency Hygiene
- Run `npm audit` in CI (non-blocking) and triage criticals.

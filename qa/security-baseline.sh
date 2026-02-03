#!/usr/bin/env bash
set -euo pipefail

STAGING_URL="${STAGING_URL:-}"
if [[ -z "$STAGING_URL" ]]; then
  echo "STAGING_URL is required" >&2
  exit 1
fi

REPORT_DIR="qa/security-reports"
mkdir -p "$REPORT_DIR"

docker run --rm -t \
  -u root \
  -v "${PWD}:/zap/wrk" \
  owasp/zap2docker-stable \
  zap-baseline.py \
  -t "$STAGING_URL" \
  -r "${REPORT_DIR}/zap-baseline.html" \
  -J "${REPORT_DIR}/zap-baseline.json" \
  -z "-config api.disablekey=true"

echo "ZAP baseline report generated at ${REPORT_DIR}/zap-baseline.html"

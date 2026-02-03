#!/usr/bin/env bash
set -euo pipefail

STAGING_URL="${STAGING_URL:-}"
if [[ -z "$STAGING_URL" ]]; then
  echo "STAGING_URL is required" >&2
  exit 1
fi

ROUTES=("/" "/services" "/contact" "/resources" "/sitemap")
TMP_FILE="/tmp/qa-sanity.html"

for route in "${ROUTES[@]}"; do
  url="${STAGING_URL%/}${route}"
  status=$(curl -s -o "$TMP_FILE" -w "%{http_code}" "$url")
  if [[ "$status" != "200" ]]; then
    echo "FAIL: $url returned $status" >&2
    exit 1
  fi
  echo "OK: $url ($status)"

done

if [[ -n "${BUILD_HASH:-}" ]]; then
  if ! grep -q "$BUILD_HASH" "$TMP_FILE"; then
    echo "WARN: BUILD_HASH not found in HTML." >&2
    exit 1
  fi
  echo "OK: BUILD_HASH found"
fi

rm -f "$TMP_FILE"

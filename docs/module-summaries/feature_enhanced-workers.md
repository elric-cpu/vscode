# feature_enhanced-workers

**Purpose**
- Cloudflare Worker handling Stripe checkout and email notifications.

**Public API Surface**
- HTTP endpoints: `POST /api/stripe/checkout`, `POST /api/email/welcome`, `POST /api/email/notification`.

**Key Components**
- `feature_enhanced/workers/src/index.js` fetch handler.
- Helper functions: `getSupabaseUser`, `encodeForm`, `requireEnv`.

**Inputs and Outputs**
- Inputs: HTTP requests with bearer auth token and JSON payloads.
- Outputs: JSON responses with checkout URLs or email status.
- Side effects: calls Supabase Auth API, Stripe API, and Resend API.

**Dependencies**
- Internal: none.
- External services: Supabase Auth, Stripe, Resend.

**Config and Env**
- `SUPABASE_URL`, `SUPABASE_ANON_KEY`.
- `STRIPE_SECRET_KEY`.
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`.

**Risks**
- No tests detected for worker endpoints.
- CORS is wide open (`Access-Control-Allow-Origin: *`).
- Limited request validation and rate limiting.

**Suggested Next Steps**
- Add schema validation and contract tests.
- Tighten CORS and add rate limiting where possible.

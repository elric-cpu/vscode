# Benson Enterprises - Feature Enhanced

## Local Development

### 1) Install dependencies
```
npm install
```

### 2) Configure environment
Copy `.env.example` to `.env` and fill in required values:
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `ORCHESTRATOR_URL`, `ORCHESTRATOR_SHARED_SECRET`
- `PRICING_API_URL`, `PRICING_API_KEY` (optional for external pricing)

### 3) Supabase local setup
```
cd supabase
supabase start
supabase db reset
```
This applies migrations and seeds demo staff/org/project data for estimating.

### 4) Run Edge Functions (local)
```
supabase functions serve estimate-upload-init
supabase functions serve estimate-upload-complete
supabase functions serve estimate-status
supabase functions serve estimate-get
supabase functions serve estimate-questions
supabase functions serve estimate-recompute
```

### 5) Run ai-orchestrator
```
cd ai-orchestrator
npm install
cp .env.example .env
npm run dev
```

### 6) Run the Vite app
```
npm run dev
```

## Estimating Workflow (Staff)
- Login at `/staff-portal-login` with a staff account (`role=staff`).
- Create/select a project.
- Upload a PDF inspection report.
- Review extracted tasks, provide missing fields, and finalize estimate.

## Tests
- Unit tests: `npm run test:unit`
- Integration tests: `npm run test:integration`

## Labor Rate Import
Provide CSV or JSON files and run:
```
node scripts/seed/import-labor-rates.js --rates path/to/production_rates.csv --cards path/to/labor_rate_cards.csv
```

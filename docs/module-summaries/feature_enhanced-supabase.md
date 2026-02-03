# feature_enhanced-supabase

**Purpose**
- Database schema, RLS policies, and seed data for client and subcontractor portals.

**Public API Surface**
- Tables: `client_profiles`, `client_projects`, `client_documents`, `client_invoices`, `subcontractors`, `subcontractor_work_orders`, `subcontractor_performance`.
- Functions: `set_updated_at`, `get_client_portal_bundle`, `get_subcontractor_portal_bundle`.

**Key Components**
- `feature_enhanced/supabase/migrations/20260203090000_init.sql`.
- `feature_enhanced/supabase/seed.sql`.

**Inputs and Outputs**
- Inputs: SQL migrations and seed data.
- Outputs: Postgres schema, RLS policies, and portal bundle functions.
- Side effects: triggers that update `updated_at` columns.

**Dependencies**
- Internal: none.
- External: Supabase Postgres and auth schema.

**Config and Env**
- Supabase environment and service keys (not defined in repo).

**Risks**
- No automated tests for migrations or RLS policies.

**Suggested Next Steps**
- Add SQL tests for RLS policies and bundle functions.
- Document migration and seed workflows.

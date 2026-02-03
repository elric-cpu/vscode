# qa

**Purpose**
- QA and security checklists plus basic scripts.

**Public API Surface**
- Scripts: `qa/sanity.sh`, `qa/security-baseline.sh`.
- Docs: `qa/QA_CHECKLIST.md`, `qa/SECURITY.md`, `qa/TEST_PLAN.md`.

**Key Components**
- `qa/README.md` as entry reference.

**Inputs and Outputs**
- Inputs: manual execution and local environment state.
- Outputs: console logs and checklist results.
- Side effects: depends on target URLs specified in scripts.

**Dependencies**
- Internal: none.
- External: shell tools and security scanners if installed.

**Risks**
- Not wired into CI by default.

**Suggested Next Steps**
- Clarify when and how these scripts should run in CI.

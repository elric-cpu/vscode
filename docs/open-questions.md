1. Should `feature_enhanced/workers` be deployed as a separate Cloudflare Worker, and where is the deployment workflow defined?
2. Is the committed `feature_enhanced/.env` intentional, or should secrets be removed from the repo?
3. Are `feature_enhanced/playwright-report/` and `feature_enhanced/test-results/` meant to be checked in, or should they be ignored artifacts?
4. Is `feature_enhanced/dist.zip` a required deliverable or an accidental build artifact?
5. What is the intended CI system and pipeline definitions (not scanned due to excluded `.github/`)?
6. Should `feature_enhanced/public/images/album/` and `_analysis/` be managed as large assets (LFS/CDN) instead of repo files?
7. Are the Supabase SQL functions (`get_client_portal_bundle`, `get_subcontractor_portal_bundle`) expected to be versioned with tests?
8. Is the worker expected to enforce stricter CORS or authentication beyond bearer token validation?
9. Are there planned additional services or packages not captured by manifests in this repo?
10. Should QA scripts in `qa/` be invoked by CI, and if so how?
11. Is the `tools/generate-llms.js` output intended to be committed or build-only?
12. Are the marketing landing pages under `feature_enhanced/public/landing/` the primary source of truth or generated from another system?

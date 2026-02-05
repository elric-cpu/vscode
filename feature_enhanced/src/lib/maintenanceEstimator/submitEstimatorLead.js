/**
 * Submits estimator leads.
 *
 * Default behavior:
 * - If VITE_ESTIMATOR_LEAD_ENDPOINT is set, POST JSON to that URL.
 * - Otherwise, log to console (keeps the UI functional on static deployments).
 */

import { assertSafeEndpoint, sanitizeLeadPayload } from "@/lib/leadUtils";

export async function submitEstimatorLead(payload) {
  const endpoint = import.meta?.env?.VITE_ESTIMATOR_LEAD_ENDPOINT;

  if (!endpoint) {
    const sanitizedPayload = sanitizeLeadPayload(payload);
    console.log("[estimator] lead captured (no endpoint configured):", sanitizedPayload);
    return { ok: true, mode: "console" };
  }

  const safeEndpoint = assertSafeEndpoint(endpoint);
  const sanitizedPayload = sanitizeLeadPayload(payload);

  const res = await fetch(safeEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sanitizedPayload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Lead submit failed (${res.status}): ${text || res.statusText}`,
    );
  }

  return { ok: true, mode: "endpoint" };
}

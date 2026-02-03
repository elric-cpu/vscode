/**
 * Lead capture for the estimator.
 *
 * Configuration (optional):
 * - VITE_MAINTENANCE_ESTIMATOR_ENDPOINT
 *   If set, the wizard POSTs JSON to that URL.
 *   If not set, the wizard stores the submission in localStorage and proceeds.
 */

import { assertSafeEndpoint, sanitizeLeadPayload } from "@/lib/leadUtils";

export async function submitEstimatorLead(payload) {
  const endpoint = import.meta.env.VITE_MAINTENANCE_ESTIMATOR_ENDPOINT;

  // Fallback: no backend configured yet
  if (!endpoint) {
    try {
      const key = "bhs:maintenance_estimator_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const sanitizedPayload = sanitizeLeadPayload(payload);
      existing.push({ ...sanitizedPayload, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      // ignore localStorage errors (private mode, etc.)
    }
    return { ok: true };
  }

  const safeEndpoint = assertSafeEndpoint(endpoint);
  const sanitizedPayload = sanitizeLeadPayload(payload);

  const res = await fetch(safeEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sanitizedPayload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Submission failed");
  }

  return { ok: true };
}

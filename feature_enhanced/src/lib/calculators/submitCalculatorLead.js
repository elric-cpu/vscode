/**
 * Submits calculator leads.
 *
 * Default behavior:
 * - If VITE_CALCULATOR_LEAD_ENDPOINT is set, POST JSON to that URL.
 * - Otherwise, fallback to VITE_ESTIMATOR_LEAD_ENDPOINT.
 * - If neither is set, log to console (keeps the UI functional on static deployments).
 */

import { assertSafeEndpoint, sanitizeLeadPayload } from "@/lib/leadUtils";

export async function submitCalculatorLead(payload) {
  const calculatorEndpoint = import.meta?.env?.VITE_CALCULATOR_LEAD_ENDPOINT;
  const fallbackEndpoint = import.meta?.env?.VITE_ESTIMATOR_LEAD_ENDPOINT;
  const endpoint = calculatorEndpoint || fallbackEndpoint;

  if (!endpoint) {
    console.log("[calculator] lead captured (no endpoint configured):", payload);
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

  return {
    ok: true,
    mode: calculatorEndpoint ? "calculator-endpoint" : "fallback-endpoint",
  };
}

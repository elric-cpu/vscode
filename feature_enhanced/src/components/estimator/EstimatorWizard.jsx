import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  HOME_SIZE_OPTIONS,
  ESTIMATOR_RESULTS,
} from "./maintenanceEstimatorConfig";
import { submitEstimatorLead } from "./submitEstimatorLead";

const isValidEmail = (value) => {
  const v = String(value || "").trim();
  // Simple, pragmatic check for lead forms (avoid overly strict regexes)
  return v.includes("@") && v.includes(".");
};

const isValidZip = (value) => {
  const v = String(value || "").trim();
  return /^\d{5}(-\d{4})?$/.test(v);
};

export default function EstimatorWizard() {
  const [step, setStep] = useState(1);
  const [sizeId, setSizeId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [lead, setLead] = useState({
    name: "",
    email: "",
    zip: "",
    phone: "",
    // Honeypot to deter bots
    company: "",
  });

  const canContinue = Boolean(sizeId);

  const canSubmit = useMemo(() => {
    return (
      Boolean(sizeId) &&
      lead.name.trim().length > 1 &&
      isValidEmail(lead.email) &&
      isValidZip(lead.zip) &&
      !submitting
    );
  }, [lead, sizeId, submitting]);

  const result = sizeId ? ESTIMATOR_RESULTS[sizeId] : null;

  async function onSubmit() {
    setError(null);

    // If the honeypot was filled, silently fail to results (bot behavior)
    if (lead.company.trim()) {
      setStep(3);
      return;
    }

    setSubmitting(true);
    try {
      await submitEstimatorLead({
        sizeId,
        name: lead.name.trim(),
        email: lead.email.trim(),
        zip: lead.zip.trim(),
        phone: lead.phone.trim() || undefined,
        source: "resources_estimator",
      });
      setStep(3);
    } catch (e) {
      setError(e?.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Estimator</p>
          <h2 className="text-2xl md:text-3xl font-bold text-contractor-black m-0">
            Get Your Estimate in 3 Steps
          </h2>
        </div>
        <div className="text-sm text-gray-500">{step} of 3</div>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-xl font-bold text-contractor-black mb-2">
            What is the size of your home?
          </h3>
          <p className="text-gray-700 mb-6">
            Choose the approximate size of your home.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {HOME_SIZE_OPTIONS.map((opt) => {
              const checked = sizeId === opt.id;
              return (
                <label
                  key={opt.id}
                  className={
                    "flex items-center gap-4 p-5 rounded-lg border cursor-pointer transition-colors " +
                    (checked
                      ? "border-maroon bg-cream/40"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50")
                  }
                >
                  <input
                    type="radio"
                    name="homeSize"
                    value={opt.id}
                    checked={checked}
                    onChange={() => setSizeId(opt.id)}
                    className="h-5 w-5 accent-[color:var(--maroon)]"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-contractor-black">
                      {opt.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      Quarterly service plan sizing
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3 mt-8">
            <Button
              onClick={() => setStep(2)}
              disabled={!canContinue}
              className="bg-maroon hover:bg-red-700"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold text-contractor-black mb-2">
            Almost There! See Your Results Instantly
          </h3>
          <p className="text-gray-700 mb-6">
            Enter your contact details so we can confirm service availability in
            your ZIP and email you a copy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="est_name">Name *</Label>
              <Input
                id="est_name"
                value={lead.name}
                onChange={(e) =>
                  setLead((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est_email">Email *</Label>
              <Input
                id="est_email"
                value={lead.email}
                onChange={(e) =>
                  setLead((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="name@example.com"
                inputMode="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est_zip">ZIP *</Label>
              <Input
                id="est_zip"
                value={lead.zip}
                onChange={(e) =>
                  setLead((p) => ({ ...p, zip: e.target.value }))
                }
                placeholder="ZIP code"
                inputMode="numeric"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est_phone">Phone (optional)</Label>
              <Input
                id="est_phone"
                value={lead.phone}
                onChange={(e) =>
                  setLead((p) => ({ ...p, phone: e.target.value }))
                }
                placeholder="(541) 321-5115"
                inputMode="tel"
              />
            </div>

            {/* Honeypot (hidden) */}
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="est_company">Company</Label>
              <Input
                id="est_company"
                value={lead.company}
                onChange={(e) =>
                  setLead((p) => ({ ...p, company: e.target.value }))
                }
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 rounded border border-red-200 bg-red-50 text-red-800 text-sm">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              disabled={submitting}
            >
              Back
            </Button>
            <Button
              onClick={onSubmit}
              disabled={!canSubmit}
              className="bg-maroon hover:bg-red-700"
            >
              {submitting ? "Submitting…" : "See Your Estimate"}
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-bold text-contractor-black mb-2">
            Your Estimate
          </h3>

          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <div className="text-sm text-gray-600 mb-1">Selected home size</div>
            <div className="font-semibold text-contractor-black mb-4">
              {HOME_SIZE_OPTIONS.find((o) => o.id === sizeId)?.label || "—"}
            </div>

            <div className="text-xs uppercase tracking-wide text-gray-500">
              {result?.headline || "Estimated starting range (monthly)"}
            </div>
            <div className="text-3xl font-bold text-maroon mt-2">
              {result?.range || "Call for pricing"}
            </div>
            <p className="text-gray-700 mt-3 mb-0">
              {result?.estimateText ||
                "Thank you. We will follow up with details."}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:5413215115" className="flex-1">
              <Button className="w-full bg-maroon hover:bg-red-700">
                Call (541) 321-5115
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => {
                setStep(1);
                setSizeId("");
                setLead({
                  name: "",
                  email: "",
                  zip: "",
                  phone: "",
                  company: "",
                });
              }}
              className="flex-1"
            >
              Start Over
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

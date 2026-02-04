import React, { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { submitResidentialMaintenanceLead } from "@/lib/residentialMaintenance/submitResidentialMaintenanceLead";

const STEP_TITLES = ["Home", "Plan", "Services", "Submit"];

function required(value) {
  return String(value || "").trim().length > 0;
}

function normalizeChoice(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

const PLAN_META = {
  basic: {
    label: "Basic",
    tagline: "Core seasonal protection + documentation.",
    priceNote: "Lowest monthly cost",
    highlights: [
      "Annual home baseline + photo log",
      "Gutter & drainage check",
      "Smoke/CO detector test",
      "Priority scheduling window",
    ],
  },
  plus: {
    label: "Plus",
    tagline: "More visits + more small repairs included.",
    priceNote: "Most popular",
    highlights: [
      "Everything in Basic",
      "Caulking & sealing touch-ups",
      "HVAC filter program",
      "Minor drywall/paint repairs (allowance)",
    ],
  },
  priority: {
    label: "Priority",
    tagline: "Fast response + highest peace-of-mind coverage.",
    priceNote: "Fastest response",
    highlights: [
      "Everything in Plus",
      "Priority response slots",
      "After-hours availability (by rules)",
      "Discounted rates on larger projects",
    ],
  },
};

export default function ResidentialMaintenanceFunnel() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    homeownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    serviceArea: "mid-valley",
    homeType: "single-family",
    approxSqFt: "",
    yearBuilt: "",
    preferredStart: "",
    plan: "plus",
    services: {
      guttersDrainage: true,
      caulkingSealing: false,
      smokeCo: true,
      hvacFilters: false,
      minorDrywallPaint: false,
    },
    notes: "",
  });

  const progressPct = useMemo(
    () => Math.round(((step + 1) / STEP_TITLES.length) * 100),
    [step],
  );

  const canContinue = useMemo(() => {
    if (step === 0) {
      return (
        required(form.homeownerName) &&
        required(form.email) &&
        required(form.address)
      );
    }
    if (step === 1) {
      return required(form.plan);
    }
    if (step === 2) {
      return Object.values(form.services).some(Boolean);
    }
    return true;
  }, [form, step]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function updateService(key, value) {
    setForm((prev) => ({
      ...prev,
      services: { ...prev.services, [key]: value },
    }));
  }

  function next() {
    if (!canContinue) return;
    setStep((s) => Math.min(s + 1, STEP_TITLES.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setIsSubmitting(true);
    try {
      const payload = {
        leadType: "residential_maintenance_membership",
        capturedAt: new Date().toISOString(),
        ...form,
        plan: normalizeChoice(form.plan),
      };

      await submitResidentialMaintenanceLead(payload);
      toast({
        title: "Membership request received",
        description:
          "We will confirm your plan, service area, and scheduling window.",
      });
      setStep(STEP_TITLES.length - 1);
    } catch (e) {
      toast({
        title: "Submission failed",
        description: e?.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const planMeta = PLAN_META[normalizeChoice(form.plan)] || PLAN_META.plus;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-restoration-gray">Subscription funnel</p>
          <h3 className="text-xl font-bold text-contractor-black">
            Residential Maintenance Plans
          </h3>
        </div>
        <div className="text-sm text-restoration-gray">
          Step {step + 1} of {STEP_TITLES.length}
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 bg-gray-100 rounded">
          <div
            className="h-2 bg-maroon rounded"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="mt-2 flex gap-2 flex-wrap">
          {STEP_TITLES.map((t, i) => (
            <div
              key={t}
              className={`px-3 py-1 rounded-full text-xs border ${i === step ? "border-maroon text-maroon" : "border-gray-200 text-restoration-gray"}`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="homeownerName">Homeowner Name *</Label>
            <Input
              id="homeownerName"
              value={form.homeownerName}
              onChange={(e) => updateField("homeownerName", e.target.value)}
              placeholder="Full name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="(541) 000-0000"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="name@email.com"
            />
          </div>
          <div>
            <Label htmlFor="preferredStart">Preferred Start</Label>
            <Input
              id="preferredStart"
              value={form.preferredStart}
              onChange={(e) => updateField("preferredStart", e.target.value)}
              placeholder="This month / next month"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="address">Property Address *</Label>
            <Input
              id="address"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="Street address"
            />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
              placeholder="City"
            />
          </div>

          <div>
            <Label htmlFor="serviceArea">Service Area</Label>
            <select
              id="serviceArea"
              className="mt-2 w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
              value={form.serviceArea}
              onChange={(e) => updateField("serviceArea", e.target.value)}
            >
              <option value="harney-county">Harney County</option>
              <option value="mid-valley">
                Mid-Valley (Sweet Home / Lebanon / Albany / Corvallis)
              </option>
            </select>
          </div>

          <div>
            <Label htmlFor="homeType">Home Type</Label>
            <select
              id="homeType"
              className="mt-2 w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
              value={form.homeType}
              onChange={(e) => updateField("homeType", e.target.value)}
            >
              <option value="single-family">Single-family</option>
              <option value="manufactured">Manufactured</option>
              <option value="multi-family">Duplex / Triplex</option>
            </select>
          </div>

          <div>
            <Label htmlFor="approxSqFt">Approx. Sq Ft</Label>
            <Input
              id="approxSqFt"
              value={form.approxSqFt}
              onChange={(e) => updateField("approxSqFt", e.target.value)}
              placeholder="e.g., 1800"
            />
          </div>

          <div>
            <Label htmlFor="yearBuilt">Year Built</Label>
            <Input
              id="yearBuilt"
              value={form.yearBuilt}
              onChange={(e) => updateField("yearBuilt", e.target.value)}
              placeholder="e.g., 1998"
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(PLAN_META).map(([key, meta]) => (
              <button
                key={key}
                type="button"
                onClick={() => updateField("plan", key)}
                className={`text-left border rounded-lg p-5 transition-shadow hover:shadow-md ${
                  normalizeChoice(form.plan) === key
                    ? "border-maroon bg-cream"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-restoration-gray">
                      {meta.priceNote}
                    </p>
                    <p className="text-lg font-bold text-contractor-black">
                      {meta.label}
                    </p>
                  </div>
                  <Home
                    className={`w-6 h-6 ${normalizeChoice(form.plan) === key ? "text-maroon" : "text-gray-400"}`}
                  />
                </div>
                <p className="text-sm text-restoration-gray mt-3">
                  {meta.tagline}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {meta.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-maroon flex-shrink-0" />
                      <span className="text-contractor-black">{h}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          <div className="border border-gray-200 rounded-lg p-5 bg-white">
            <p className="font-semibold text-contractor-black">
              Selected: {planMeta.label}
            </p>
            <p className="text-sm text-restoration-gray mt-1">
              {planMeta.tagline}
            </p>
            <p className="text-sm text-restoration-gray mt-3">
              Pricing is confirmed after we verify access, home size, and
              seasonal conditions. You will receive a simple scope summary and a
              documentation workflow.
            </p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8 space-y-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <p className="font-semibold text-contractor-black">
              Choose Your Included Services *
            </p>
            <p className="text-sm text-restoration-gray mt-1">
              Start with water-shedding + safety checks, then add sealing and
              small repairs as needed.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.services.guttersDrainage}
                  onChange={(e) =>
                    updateService("guttersDrainage", e.target.checked)
                  }
                />
                <span>
                  <span className="font-medium text-contractor-black">
                    Gutter & drainage maintenance
                  </span>
                  <span className="block text-sm text-restoration-gray">
                    Downspouts, splash blocks, and water-shedding checks.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.services.caulkingSealing}
                  onChange={(e) =>
                    updateService("caulkingSealing", e.target.checked)
                  }
                />
                <span>
                  <span className="font-medium text-contractor-black">
                    Caulking & sealing
                  </span>
                  <span className="block text-sm text-restoration-gray">
                    Targeted touch-ups at common leak points.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.services.smokeCo}
                  onChange={(e) => updateService("smokeCo", e.target.checked)}
                />
                <span>
                  <span className="font-medium text-contractor-black">
                    Smoke/CO detector service
                  </span>
                  <span className="block text-sm text-restoration-gray">
                    Test, replace batteries, note model/date status.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.services.hvacFilters}
                  onChange={(e) =>
                    updateService("hvacFilters", e.target.checked)
                  }
                />
                <span>
                  <span className="font-medium text-contractor-black">
                    HVAC filter program
                  </span>
                  <span className="block text-sm text-restoration-gray">
                    Scheduled replacements and filter-size tracking.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.services.minorDrywallPaint}
                  onChange={(e) =>
                    updateService("minorDrywallPaint", e.target.checked)
                  }
                />
                <span>
                  <span className="font-medium text-contractor-black">
                    Minor drywall & paint repairs
                  </span>
                  <span className="block text-sm text-restoration-gray">
                    Small patches and touch-up painting (allowance by plan).
                  </span>
                </span>
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notes / Priorities</Label>
            <textarea
              id="notes"
              className="mt-2 w-full min-h-[110px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Known leaks, access rules, pets, specific pain points, or must-do items."
            />
          </div>

          <p className="text-xs text-gray-500">
            Documentation: each visit includes a photo log and a home record
            update. You can also request a downloadable recordbook PDF.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="mt-10 text-center">
          <div className="inline-flex items-start gap-3 bg-cream border border-gray-200 rounded-lg p-5">
            <CheckCircle className="w-6 h-6 text-maroon flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="font-semibold text-contractor-black">
                Next step: we confirm scope and propose a simple monthly plan.
              </p>
              <p className="text-sm text-restoration-gray">
                We will follow up to confirm cadence, allowances, and seasonal
                priorities. Most memberships start with a baseline walk-through.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              className="border-maroon text-maroon hover:bg-maroon hover:text-white"
              onClick={() => setStep(0)}
            >
              Start Another Request
            </Button>
            <a
              href="/resources/home-maintenance-estimator"
              className="inline-flex"
            >
              <Button className="bg-maroon hover:bg-opacity-90 text-white">
                Use the Estimator
              </Button>
            </a>
          </div>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={back}
          disabled={step === 0 || isSubmitting}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {step < 2 && (
          <Button
            onClick={next}
            disabled={!canContinue || isSubmitting}
            className="bg-maroon hover:bg-opacity-90 text-white"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}

        {step === 2 && (
          <Button
            onClick={submit}
            disabled={!canContinue || isSubmitting}
            className="bg-maroon hover:bg-opacity-90 text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}

        {step === 3 && <div />}
      </div>

      {!canContinue && step !== 3 && (
        <p className="mt-3 text-sm text-red-600">
          Please complete the required fields (*) to continue.
        </p>
      )}
    </div>
  );
}

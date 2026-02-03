// Home Maintenance Estimator pricing configuration.
//
// NOTE:
// - Update the `estimateText` fields with your real pricing/outputs when ready.
// - If you want numeric pricing, add fields like `monthlyPrice` / `quarterlyPrice`
//   and render them in the results step.

export const HOME_SIZE_OPTIONS = [
  { id: "0_1500", label: "0–1500 sq/ft" },
  { id: "1501_2500", label: "1501–2500 sq/ft" },
  { id: "2501_3500", label: "2501–3500 sq/ft" },
];

export const ESTIMATOR_RESULTS = {
  "0_1500": {
    headline: "Estimated starting range (monthly)",
    range: "$189–$249",
    estimateText:
      "Includes quarterly maintenance visits and priority scheduling. Final pricing can vary based on home age, access, and service-area coverage.",
  },
  "1501_2500": {
    headline: "Estimated starting range (monthly)",
    range: "$239–$329",
    estimateText:
      "Includes quarterly maintenance visits and priority scheduling. Final pricing can vary based on home age, access, and service-area coverage.",
  },
  "2501_3500": {
    headline: "Estimated starting range (monthly)",
    range: "$299–$399",
    estimateText:
      "Includes quarterly maintenance visits and priority scheduling. Final pricing can vary based on home age, access, and service-area coverage.",
  },
};

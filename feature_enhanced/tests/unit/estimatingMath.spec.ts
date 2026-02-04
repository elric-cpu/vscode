import { describe, expect, it } from "vitest";
import { calculateLineItemTotal, calculateEstimateTotals, calculateLaborHours } from "../../src/lib/estimating/math";

describe("estimating math", () => {
  it("calculates line item total with markup and allowances", () => {
    const total = calculateLineItemTotal({
      materialCost: 100,
      laborCost: 50,
      allowances: { equipment: 10, disposal: 5 },
      markupPercent: 0.2,
    });
    expect(total).toBe(198);
  });

  it("calculates labor hours with modifiers", () => {
    const hours = calculateLaborHours({
      quantity: 4,
      unitsPerHour: 2,
      modifiers: { access: 1.1, finish: 1.2 },
    });
    expect(hours).toBe(2.64);
  });

  it("calculates estimate totals and margin", () => {
    const totals = calculateEstimateTotals([
      { material_cost: 100, labor_cost: 50, total: 180 },
      { material_cost: 40, labor_cost: 20, total: 90 },
    ]);
    expect(totals.total_price).toBe(270);
    expect(totals.total_cost).toBe(210);
    expect(totals.profit).toBe(60);
  });
});

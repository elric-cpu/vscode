export const calculateLineItemTotal = ({
  materialCost = 0,
  laborCost = 0,
  allowances = {},
  markupPercent = 0,
}) => {
  const equipment = Number(allowances.equipment || 0);
  const disposal = Number(allowances.disposal || 0);
  const base = Number(materialCost) + Number(laborCost) + equipment + disposal;
  return Number((base * (1 + Number(markupPercent))).toFixed(2));
};

export const calculateLaborHours = ({ quantity, unitsPerHour, modifiers = {} }) => {
  const baseHours = Number(quantity || 0) / Number(unitsPerHour || 1);
  const multiplier = Object.values(modifiers).reduce((acc, value) => acc * Number(value || 1), 1);
  return Number((baseHours * multiplier).toFixed(2));
};

export const calculateEstimateTotals = (lineItems) => {
  const totals = lineItems.reduce(
    (acc, item) => {
      acc.material_cost += Number(item.material_cost || 0);
      acc.labor_cost += Number(item.labor_cost || 0);
      acc.total_price += Number(item.total || 0);
      return acc;
    },
    { material_cost: 0, labor_cost: 0, total_price: 0 },
  );

  const totalCost = totals.material_cost + totals.labor_cost;
  const profit = totals.total_price - totalCost;
  const margin = totals.total_price ? profit / totals.total_price : 0;

  return {
    ...totals,
    total_cost: Number(totalCost.toFixed(2)),
    profit: Number(profit.toFixed(2)),
    margin: Number(margin.toFixed(4)),
  };
};

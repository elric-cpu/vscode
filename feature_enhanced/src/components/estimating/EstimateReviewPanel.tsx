import React from "react";
import type { EstimateLineItem, EstimateTask } from "@/lib/estimating/types";

const formatCurrency = (value: number | null | undefined) =>
  value ? `$${value.toFixed(2)}` : "—";

type Props = {
  tasks: EstimateTask[];
  lineItems: EstimateLineItem[];
};

const groupByTrade = (tasks: EstimateTask[], lineItems: EstimateLineItem[]) => {
  const taskMap = new Map(tasks.map((task) => [task.id, task]));
  return lineItems.reduce<Record<string, EstimateLineItem[]>>((acc, item) => {
    const task = taskMap.get(item.estimate_task_id);
    const trade = task?.trade || "General";
    if (!acc[trade]) acc[trade] = [];
    acc[trade].push(item);
    return acc;
  }, {});
};

const EstimateReviewPanel = ({ tasks, lineItems }: Props) => {
  const grouped = groupByTrade(tasks, lineItems);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">Estimate review</h3>
      <p className="text-sm text-gray-600 mt-1">
        Line items grouped by trade with citations back to the inspection report.
      </p>
      <div className="mt-4 space-y-6">
        {Object.entries(grouped).map(([trade, items]) => (
          <div key={trade} className="space-y-3">
            <h4 className="text-md font-semibold text-gray-800">{trade}</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-left text-gray-500">
                  <tr>
                    <th className="py-2 pr-4">Line item</th>
                    <th className="py-2 pr-4">Qty</th>
                    <th className="py-2 pr-4">Material</th>
                    <th className="py-2 pr-4">Labor</th>
                    <th className="py-2 pr-4">Total</th>
                    <th className="py-2">Citation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-gray-100">
                      <td className="py-2 pr-4">
                        <div className="font-medium">{item.description || item.item_key}</div>
                      </td>
                      <td className="py-2 pr-4">
                        {item.quantity ? `${item.quantity} ${item.unit || ""}` : "—"}
                      </td>
                      <td className="py-2 pr-4">
                        {formatCurrency(
                          item.quantity && item.material_unit_price
                            ? item.quantity * item.material_unit_price
                            : null,
                        )}
                      </td>
                      <td className="py-2 pr-4">
                        {formatCurrency(
                          item.labor_hours && item.labor_rate
                            ? item.labor_hours * item.labor_rate
                            : null,
                        )}
                      </td>
                      <td className="py-2 pr-4">
                        {formatCurrency(item.total_cost)}
                      </td>
                      <td className="py-2 text-xs text-gray-500">
                        {item.source_ref?.page ? (
                          <div>
                            Page {item.source_ref.page}: {item.source_ref.excerpt}
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstimateReviewPanel;

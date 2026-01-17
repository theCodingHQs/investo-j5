"use client";

import { useState } from "react";
import { Configuration } from "@/api/types/project";
import { getPriceString } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const COLLAPSED_ROWS = 2;

const InfoTable = ({ data = [] }: { data?: Configuration[] }) => {
  const [expanded, setExpanded] = useState(false);

  const tableData = data.flatMap((item: Configuration) =>
    item?.floor_plan?.map((plan) => ({
      unit: `${item.bhk} BHK`,
      size: `${plan.built_area} Sq.Ft.`,
      price: plan.price,
    }))
  );

  const visibleRows = expanded ? tableData : tableData.slice(0, COLLAPSED_ROWS);

  const canToggle = tableData.length > COLLAPSED_ROWS;

  if (!tableData.length) return null;

  return (
    <div
      className="relative rounded-xl border border-gray-200 cursor-default bg-white  overflow-hidden"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              Unit
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              Size
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              Price
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {visibleRows.map((row, index) => (
            <tr key={index} className="transition-colors hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-800">{row?.unit}</td>
              <td className="px-4 py-3 text-gray-700">{row?.size}</td>
              <td className="px-4 py-3 font-medium text-gray-900">
                {getPriceString(row?.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer / Expand control */}
      {canToggle && (
        <div className="flex justify-end border-t border-gray-100 bg-gray-50 px-4 ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((p) => !p);
            }}
            className="
              text-sm font-medium text-blue-600 cursor-pointer
              hover:text-blue-700
              transition-colors
            "
          >
            {expanded ? <ChevronUp /> : <ChevronUp />}
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoTable;

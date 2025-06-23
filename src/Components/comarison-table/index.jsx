import React from "react";

const features = [
  "Cart templates",
  "Automation Email",
  "Email Template",
  "Announcement",
  "Rewards",
  "Upsells",
  "Coupon Code",
  "Shipping Protection",
  "Gift Wrapping",
  "Sticky Cart",
];

const data = {
  "Speed Cart": ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
  Opus: ["✕", "✕", "✕", "✓", "✓", "✓", "✓", "✓", "✕", "✓"],
  Upcart: ["✕", "✕", "✕", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
  Cartly: ["✕", "✕", "✕", "✓", "✓", "✓", "✓", "✓", "✕", "✓"],
};

const ComparisonTable = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-[700px] md:min-w-full w-full text-left border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="px-3 py-2 md:px-4 md:py-3 font-semibold text-gray-700 text-sm md:text-base">
                {" "}
              </th>
              {Object.keys(data).map((brand) => (
                <th
                  key={brand}
                  className="px-3 py-2 md:px-4 md:py-3 font-semibold text-center text-sm md:text-base"
                >
                  {brand === "Speed Cart" ? (
                    <img
                      src="/images/header-logo.svg"
                      alt="Speed Cart"
                      className="h-8 mx-auto"
                    />
                  ) : (
                    <span className="text-gray-600 font-medium">{brand}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {features.map((feature, idx) => (
              <tr
                key={feature}
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:to-gray-200"
              >
                <td className="px-3 py-3 md:px-4 md:py-4 text-gray-700 text-sm md:text-[20px] font-[400] whitespace-nowrap">
                  {feature}
                </td>
                {Object.entries(data).map(([brand, brandData], i) => (
                  <td key={i} className="px-3 py-3 md:px-4 md:py-4 text-center">
                    <img
                      src={
                        brandData[idx] === "✓"
                          ? brand === "Speed Cart"
                            ? "/images/check-mark-red.svg"
                            : "/images/check-mark-gray.svg"
                          : "/images/cross-small.svg"
                      }
                      alt={brandData[idx] === "✓" ? "Yes" : "No"}
                      className="inline-block w-4 md:w-5 h-4 md:h-5"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;

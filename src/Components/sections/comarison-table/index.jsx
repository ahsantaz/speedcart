import React from "react";
import "./shade.css"; // Includes gradient-column class

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
    <div className="max-w-[1286px] mx-auto lg:px-[26px] px-[18px] py-6 lg:py-[32px]">
      <div className="overflow-x-auto">
        <div className="relative gradient-column min-w-[700px]">
          <table className="table-fixed w-full text-left border-separate border-spacing-x-4 border-spacing-y-0 border-gray-200 rounded-lg overflow-hidden relative z-10">
            <thead>
              <tr>
                <th className="w-[40%] lg:py-5 p-3 font-semibold text-gray-700 text-sm md:text-base sticky left-0 bg-white z-20">
                  {" "}
                </th>
                {Object.keys(data).map((brand) => (
                  <th
                    key={brand}
                    className="w-[15%] lg:py-5 p-3 font-semibold text-center text-sm md:text-base relative z-10"
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

            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature}
                  className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:to-gray-200"
                >
                  <td className="w-[40%] py-4 text-gray-700 text-sm md:text-[20px] font-[400] whitespace-nowrap sticky left-0 bg-white z-10">
                    {feature}
                  </td>
                  {Object.entries(data).map(([brand, brandData], i) => (
                    <td
                      key={i}
                      className="w-[15%] mx-4 py-4 text-center relative z-10"
                    >
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
    </div>
  );
};

export default ComparisonTable;

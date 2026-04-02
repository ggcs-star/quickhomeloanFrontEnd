import React, { useState } from "react";

const InterestRatesSection = ({ data }) => {
  const [highlightType, setHighlightType] = useState(null);

  if (!data) return null;

  const handleHighlight = (type) => setHighlightType(type);
  const clearHighlights = () => setHighlightType(null);

  // Get "best lender" dynamically
  const findBest = (type) => {
    if (!type) return null;
    const key = type === "rate" ? "rate" : type === "fee" ? "fee" : "emi";
    const bestValue = Math.min(...data.lenders.map((l) => l[key]));
    return data.lenders.find((l) => l[key] === bestValue)?.name;
  };

  const bestLender = findBest(highlightType);

  return (
    <section id="interest-rates" className="">
      <div className="max-w-6xl mx-auto">

        {/* Entire Section Card */}
        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
            <p className="text-neutral-600 text-sm mt-1">
              {data.description}
            </p>
          </div>

          {/* Highlight Controls */}
          <div className="p-6 border-b border-neutral-300 bg-neutral-50">
            <div className="flex flex-wrap gap-3 items-center">

              <span className="text-neutral-800 font-semibold text-sm tracking-wide">
                Highlight Best:
              </span>

              {/* Buttons */}
              <button
                onClick={() => handleHighlight("rate")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  highlightType === "rate"
                    ? "border-black text-black bg-white"
                    : "border-neutral-300 text-neutral-700 hover:border-black"
                }`}
              >
                Lowest Interest Rate
              </button>

              <button
                onClick={() => handleHighlight("fee")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  highlightType === "fee"
                    ? "border-black text-black bg-white"
                    : "border-neutral-300 text-neutral-700 hover:border-black"
                }`}
              >
                Lowest Processing Fee
              </button>

              <button
                onClick={() => handleHighlight("emi")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  highlightType === "emi"
                    ? "border-black text-black bg-white"
                    : "border-neutral-300 text-neutral-700 hover:border-black"
                }`}
              >
                Lowest EMI
              </button>

              {highlightType && (
                <button
                  onClick={clearHighlights}
                  className="ml-auto text-sm text-neutral-600 underline hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Rates Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-neutral-100 border-b border-neutral-300">
                <tr>
                  {["Bank / Lender", "Interest Rate (p.a.)", "Processing Fee", "Max Tenure", "Est. EMI"]
                    .map((head, i) => (
                      <th
                        key={i}
                        className="p-5 text-xs md:text-sm font-semibold text-neutral-800 uppercase tracking-wide"
                      >
                        {head}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {data.lenders.map((lender, i) => {
                  const isBest = lender.name === bestLender;

                  return (
                    <tr
                      key={i}
                      className={`border-b border-neutral-200 transition ${
                        isBest ? "bg-yellow-50" : "hover:bg-neutral-50"
                      }`}
                    >
                      {/* Name + Tag */}
                      <td className="p-5 align-top">
                        <div className="text-lg font-semibold text-neutral-900">
                          {lender.name}
                        </div>
                        {isBest && (
                          <span className="inline-block mt-1 bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                            Best Offer
                          </span>
                        )}
                      </td>

                      {/* Interest Rate */}
                      <td className="p-5 text-neutral-800 font-medium">
                        {lender.rateRange}
                      </td>

                      {/* Processing Fee */}
                      <td className="p-5 text-neutral-700 font-medium hidden sm:table-cell">
                        {lender.fee}%
                      </td>

                      {/* Tenure */}
                      <td className="p-5 text-neutral-700">
                        {lender.tenure}
                      </td>

                      {/* EMI */}
                      <td className="p-5 font-bold text-neutral-900">
                        ₹{lender.emi.toLocaleString("en-IN")}
                        <div className="text-[10px] text-neutral-500 mt-1">
                          (₹20L, Max Tenure)
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Note */}
          {data.note && (
            <div className="p-5 border-t border-neutral-300 bg-neutral-50">
              <p className="text-xs text-neutral-600">{data.note}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default InterestRatesSection;

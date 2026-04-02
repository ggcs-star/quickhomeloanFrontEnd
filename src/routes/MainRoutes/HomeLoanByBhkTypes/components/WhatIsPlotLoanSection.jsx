import React, { useState } from "react";

const WhatIsPlotLoanSection = ({ data }) => {
  const [progress, setProgress] = useState(50);

  if (!data) return null;

  // Unified Black Track Slider BG
  const getSliderBg = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, black ${percent}%, #E5E7EB ${percent}%)`;
  };

  return (
    <>
      {/* Global Black Slider Thumb */}
      <style>{`
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: black;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-thumb {
          background: black;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-track {
          background: #E5E7EB;
          height: 8px;
          border-radius: 6px;
        }

        .custom-slider::-moz-range-progress {
          background: black !important;
          height: 8px;
          border-radius: 6px;
        }
      `}</style>

      <section className="">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">

          {/* LEFT CARD — TEXT CONTENT */}
          <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">
            <div className="p-6 border-b border-neutral-300">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
                {data.title}
              </h2>
            </div>

            <div className="p-6 space-y-4 text-neutral-700 leading-relaxed">
              <p>{data.description}</p>

              <ul className="list-disc pl-6 space-y-2 marker:text-black">
                {data.points.map((point, index) => (
                  <li key={index}>
                    <strong className="text-neutral-900">{point.heading}:</strong>{" "}
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CARD — COMPARISON SECTION */}
          <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-neutral-300 text-center">
              <h3 className="text-xl font-bold text-neutral-900">
                {data.comparison.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-8">

              {/* Slider */}
              <div>
                <label className="block font-medium text-neutral-700 mb-2">
                  Example Slider Value:{" "}
                  <span className="font-bold text-neutral-900">{progress}</span>
                </label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
                  style={{
                    background: getSliderBg(progress, 0, 100),
                  }}
                />
              </div>

              {/* Comparison List */}
              <div className="space-y-4">
                {data.comparison.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between pb-3 ${
                      index !== data.comparison.items.length - 1
                        ? "border-b border-neutral-300"
                        : "text-neutral-500"
                    }`}
                  >
                    <span className="text-neutral-700">{item.label}</span>
                    <span className="font-semibold text-neutral-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatIsPlotLoanSection;

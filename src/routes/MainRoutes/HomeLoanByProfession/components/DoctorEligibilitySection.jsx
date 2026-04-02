import React from "react";

const DoctorEligibilitySection = ({ data }) => {
  if (!data) return null;

  // DB columns value (1–12)
  const colCount = data.columns || 3;

  // Map allowed values → Tailwind classes (must exist in source!)
  const colClasses = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  };

  const gridCols = colClasses[colCount] || "lg:grid-cols-3";

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white mb-4">
          {data.title}
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          {data.description}
        </p>

        {/* Grid with dynamic (safe) columns */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 ${gridCols} gap-6`}>
          {data.professionals.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-neutral-300 rounded-md p-6 flex flex-col items-center text-white"
            >
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 mb-4 text-gray-300"
                aria-hidden="true"
              >
                {item.icon.paths?.map((p, i) => <path key={i} d={p} />)}
                {item.icon.lines?.map((l, i) => (
                  <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
                ))}
                {item.icon.circles?.map((c, i) => (
                  <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
                ))}
                {item.icon.rects?.map((r, i) => (
                  <rect key={i} x={r.x} y={r.y} width={r.width} height={r.height} rx={r.rx} />
                ))}
              </svg>

              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-gray-400 text-xs mt-2 font-medium">
                {item.degree}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorEligibilitySection;

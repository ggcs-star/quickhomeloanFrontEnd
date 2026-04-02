import React from "react";

const DocumentsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="documents" className="my-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto ">

        <div className="bg-white rounded-md border border-neutral-300 overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-neutral-300">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
              {data.title}
            </h2>
          </div>

          {/* Sections */}
          <div className="p-0">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className="border-b border-neutral-200 p-6 last:border-b-0"
              >
                <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                  {card.title}
                </h3>

                <ul className="space-y-1 text-neutral-700 pl-5 list-disc">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Tip INSIDE the main card (Matches Pro Tip UI style) */}
            {data.tip && (
              <div className="p-6 bg-neutral-100 border-t border-neutral-300">
                <p className="text-neutral-800">
                  <span className="font-bold">Tip:</span>{" "}
                  {data.tip}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentsSection;

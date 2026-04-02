import React from "react";

export default function WhatThisCalculatorDoes() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <InfoCard
          title="Appreciating Assets"
          description="Assets like real estate that increase in value over time. Loans for these assets can be considered investments."
        />

        <InfoCard
          title="Depreciating Liabilities"
          description="Items like cars or vacations that lose value over time. These are consumption expenses, not investments."
        />

        <InfoCard
          title="FD / MF (Lumpsum)"
          description="Shows what happens if you invest the loan amount as a one-time investment for the duration of the loan term."
        />

        <InfoCard
          title="SIP Investment"
          description="Shows what happens if you invest the EMI amount monthly over the duration of the loan term."
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------
   REUSABLE INFO CARD
--------------------------------------------- */
function InfoCard({ title, description }) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:shadow-sm transition">
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

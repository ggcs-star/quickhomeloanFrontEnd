import React from "react";

export default function WhatThisCalculatorDoes() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        What This Calculator Does
      </h2>

      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          This calculator helps you estimate the total upfront legal and
          registration costs involved when purchasing a property.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Estimates one-time legal costs such as <strong>stamp duty</strong>,
            <strong> registration fees</strong>, and other applicable charges
            based on property value.
          </li>

          <li>
            Calculates <strong>stamp duty</strong> using the selected percentage
            or slab-based rules (if applicable).
          </li>

          <li>
            Applies <strong>registration fees</strong> either as a flat amount or
            as a percentage of the property value.
          </li>

          <li>
            Includes optional charges like <strong>transfer fees</strong>,
            <strong> cess</strong>, or other government levies.
          </li>

          <li>
            Computes the <strong>total upfront cost</strong> payable at the time
            of property registration.
          </li>

          <li>
            Splits the net payable amount between buyers in case of a
            <strong> joint property purchase</strong>.
          </li>

          <li>
            Generates a clear cost breakdown suitable for
            <strong> download, printing, or documentation</strong>.
          </li>
        </ul>
      </div>
    </section>
  );
}

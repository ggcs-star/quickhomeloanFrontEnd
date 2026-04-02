import React, { useState, useMemo } from "react";

export default function TaxVsInvestmentCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(150000);
  const [years, setYears] = useState(10);
  const [taxSavingReturn, setTaxSavingReturn] = useState(12);
  const [regularReturn, setRegularReturn] = useState(14);
  const [taxSlab, setTaxSlab] = useState(30);
  const [capitalGainsTax, setCapitalGainsTax] = useState(10);

  const results = useMemo(() => {
    const taxSaved = investmentAmount * (taxSlab / 100);

    const taxSavingFV =
      investmentAmount * Math.pow(1 + taxSavingReturn / 100, years);

    const regularFV =
      investmentAmount * Math.pow(1 + regularReturn / 100, years);

    const regularGains = regularFV - investmentAmount;
    const capitalTaxPaid = regularGains * (capitalGainsTax / 100);

    const taxSavingNet = taxSavingFV - investmentAmount;
    const regularNet = regularFV - investmentAmount - capitalTaxPaid;

    const taxSavingFinal = taxSavingNet + taxSaved;
    const regularFinal = regularNet;

    return {
      taxSaved,
      taxSavingFV,
      regularFV,
      capitalTaxPaid,
      taxSavingNet,
      regularNet,
      taxSavingFinal,
      regularFinal,
      better:
        regularFinal > taxSavingFinal
          ? "Regular Investment"
          : "Tax-Saving Investment",
      advantage: Math.abs(regularFinal - taxSavingFinal),
    };
  }, [
    investmentAmount,
    years,
    taxSavingReturn,
    regularReturn,
    taxSlab,
    capitalGainsTax,
  ]);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-8">

      {/* LEFT INPUTS */}
      <div className="lg:col-span-2">
        <div className="sticky top-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-6 md:p-8 bg-white rounded-xl shadow-lg space-y-6 border"
          >
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Calculator Inputs
            </h2>

            <Field
              label="Total Investment Amount (₹)"
              value={investmentAmount}
              onChange={setInvestmentAmount}
              min={1000}
              max={1000000}
              step={1000}
            />

            <SliderField
              label="Investment Duration (Years)"
              value={years}
              onChange={setYears}
              min={1}
              max={30}
              step={1}
            />

            <Section title="Tax-Saving Investment">
              <SliderField
                label="Expected Annual Return (%)"
                value={taxSavingReturn}
                onChange={setTaxSavingReturn}
                min={0}
                max={25}
                step={0.5}
              />
            </Section>

            <Section title="Regular Investment">
              <SliderField
                label="Expected Annual Return (%)"
                value={regularReturn}
                onChange={setRegularReturn}
                min={0}
                max={25}
                step={0.5}
              />
            </Section>

            <Section title="Tax Details">
              <SliderField
                label="Your Income Tax Slab (%)"
                value={taxSlab}
                onChange={setTaxSlab}
                min={0}
                max={40}
                step={5}
              />
              <SliderField
                label="Capital Gains Tax Rate (%)"
                value={capitalGainsTax}
                onChange={setCapitalGainsTax}
                min={0}
                max={30}
                step={1}
              />
            </Section>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-lg text-lg"
            >
              Calculate
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT RESULTS */}
      <div className="lg:col-span-3">
        <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg space-y-8 border">

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Results & Analysis
            </h2>

            <div className="p-4 rounded-lg bg-gray-100">
              <p className="text-lg font-semibold text-gray-900">
                The {results.better} option is better.
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                Net Advantage: ₹{results.advantage.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Metric</th>
                  <th className="px-6 py-3 text-center">Tax-Saving</th>
                  <th className="px-6 py-3 text-center">Regular</th>
                </tr>
              </thead>
              <tbody>
                <Row label="Upfront Tax Saved"
                  tax={`₹${results.taxSaved.toLocaleString()}`}
                  regular="₹0"
                />
                <Row label="Future Value (Pre-Tax)"
                  tax={`₹${results.taxSavingFV.toLocaleString()}`}
                  regular={`₹${results.regularFV.toLocaleString()}`}
                  shaded
                />
                <Row label="Capital Gains Tax Paid"
                  tax="₹0"
                  regular={`₹${results.capitalTaxPaid.toLocaleString()}`}
                />
                <Row label="Net Profit"
                  tax={`₹${results.taxSavingNet.toLocaleString()}`}
                  regular={`₹${results.regularNet.toLocaleString()}`}
                  shaded
                />
                <tr className="bg-gray-100 font-bold">
                  <td className="px-6 py-4 text-lg text-gray-900">
                    Total Final Benefit
                  </td>
                  <td className="px-6 py-4 text-center text-lg">
                    ₹{results.taxSavingFinal.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-lg">
                    ₹{results.regularFinal.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
  );
}

/* ---------- HELPERS ---------- */

function Field({ label, value, onChange, min, max, step }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(+e.target.value)}
        className="w-32 text-center border rounded-md p-2 text-gray-900"
      />
    </div>
  );
}

function SliderField({ label, value, onChange, min, max, step }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(+e.target.value)}
          className="w-24 text-center border rounded-md p-2 text-gray-900"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(+e.target.value)}
          className="w-full accent-gray-900"
        />
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-t pt-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, tax, regular, shaded }) {
  return (
    <tr className={`${shaded ? "bg-gray-50" : ""} border-b`}>
      <td className="px-6 py-4 font-medium text-gray-900">{label}</td>
      <td className="px-6 py-4 text-center">{tax}</td>
      <td className="px-6 py-4 text-center">{regular}</td>
    </tr>
  );
}

import React, { useState, useMemo } from "react";

export default function RealReturnsCalculatorSection() {
  const [form, setForm] = useState({
    investment: 50000,
    annualReturn: 12,
    inflationRate: 6,
    taxRate: 15,
    duration: 5,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const results = useMemo(() => {
    const P = form.investment;
    const r = form.annualReturn / 100;
    const tax = form.taxRate / 100;
    const inflation = form.inflationRate / 100;
    const n = form.duration;

    const afterTaxRate = r * (1 - tax);
    const futureValueAfterTax = P * Math.pow(1 + afterTaxRate, n);
    const realRate =
      (1 + afterTaxRate) / (1 + inflation) - 1;
    const realFutureValue =
      futureValueAfterTax / Math.pow(1 + inflation, n);

    return {
      futureValueAfterTax,
      realFutureValue,
      realRate,
      afterTaxRate,
    };
  }, [form]);

  const inr = (v) =>
    `₹${v.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">

      {/* INPUTS */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Enter Investment Details
        </h2>

        <div className="space-y-4">
          <Input label="Investment Amount" prefix="₹" name="investment" value={form.investment} onChange={handleChange} />
          <Input label="Annual Return Rate" suffix="%" name="annualReturn" value={form.annualReturn} onChange={handleChange} />
          <Input label="Annual Inflation Rate" suffix="%" name="inflationRate" value={form.inflationRate} onChange={handleChange} />
          <Input label="Tax Rate on Returns" suffix="%" name="taxRate" value={form.taxRate} onChange={handleChange} />
          <Input label="Investment Duration" suffix="Years" name="duration" value={form.duration} onChange={handleChange} />
        </div>
      </div>

      {/* RESULTS */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Calculation Results
        </h2>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-600">
            Real Future Value (Inflation Adjusted)
          </p>
          <p className="text-4xl font-extrabold text-gray-900 mt-1">
            {inr(results.realFutureValue)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            True purchasing power in today’s rupees
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Future Value (After Tax)
          </p>
          <p className="text-2xl font-bold text-gray-800">
            {inr(results.futureValueAfterTax)}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-gray-200 pt-6">
          <Metric
            label="Real Rate of Return"
            value={`${(results.realRate * 100).toFixed(2)}%`}
          />
          <Metric
            label="After-tax Nominal Rate"
            value={`${(results.afterTaxRate * 100).toFixed(2)}%`}
          />
          <Metric
            label="Compounded for"
            value={`${form.duration} years`}
            full
          />
        </dl>
      </div>
    </section>
  );
}

/* ---------- UI PARTS ---------- */

function Input({ label, prefix, suffix, name, value, onChange }) {
  return (
    <div className="space-y-1.5 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {prefix}
          </span>
        )}
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-md border-gray-300 bg-white py-2 shadow-sm focus:border-gray-800 focus:ring-2 focus:ring-gray-800/20 ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-16" : ""}`}
        />
        {suffix && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value, full }) {
  return (
    <div className={`flex flex-col ${full ? "col-span-2 sm:col-span-1" : ""}`}>
      <dt className="text-xs text-gray-500">{label}</dt>
      <dd className="text-lg font-semibold text-gray-800">{value}</dd>
    </div>
  );
}

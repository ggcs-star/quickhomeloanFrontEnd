import React from "react";

/* ---------------- HELPERS ---------------- */
const formatINR = (v) =>
  `₹${Math.round(v).toLocaleString("en-IN")}`;

const calculateEMI = (P, rate, years) => {
  const r = rate / 12 / 100;
  const n = years * 12;
  if (r === 0) return P / n;
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

export default function LeftSideCalculator({ inputs, setInputs, onCalculate }) {
  const update = (key, value) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const loanAmount =
    inputs.price - (inputs.price * inputs.downPct) / 100;

  const emi = calculateEMI(
    loanAmount,
    inputs.interest,
    inputs.tenure
  );

  return (
    <div className="space-y-6">
      <Section title="Buying Details">
        <Slider
          label="Property Price"
          desc="The full market value of the home you are considering buying."
          value={inputs.price}
          display={formatINR(inputs.price)}
          min={1000000}
          max={50000000}
          step={100000}
          onChange={(v) => update("price", v)}
        />

        <Slider
          label="Down Payment"
          desc="The percentage of the property price you pay upfront."
          value={inputs.downPct}
          display={`${inputs.downPct}%`}
          min={10}
          max={50}
          step={1}
          onChange={(v) => update("downPct", v)}
        />

        <Slider
          label="Loan Interest Rate"
          desc="Annual home loan interest rate."
          value={inputs.interest}
          display={`${inputs.interest}%`}
          min={6}
          max={12}
          step={0.1}
          onChange={(v) => update("interest", v)}
        />

        <Slider
          label="Loan Tenure"
          desc="Loan duration in years."
          value={inputs.tenure}
          display={`${inputs.tenure} yrs`}
          min={5}
          max={30}
          onChange={(v) => update("tenure", v)}
        />

        <div className="p-4 bg-blue-50 rounded-lg text-center border">
          <p className="text-sm text-gray-600">Projected Monthly EMI</p>
          <p className="text-2xl font-bold text-blue-600">
            {formatINR(emi)}
          </p>
        </div>
      </Section>

      <Section title="Renting Details">
        <Slider
          label="Current Monthly Rent"
          desc="Monthly rent for a similar property."
          value={inputs.rent}
          display={formatINR(inputs.rent)}
          min={5000}
          max={100000}
          step={1000}
          onChange={(v) => update("rent", v)}
        />
      </Section>

      <Section title="Economic Factors">
        <Slider
          label="Property Appreciation"
          value={inputs.propertyGrowth}
          display={`${inputs.propertyGrowth}%`}
          min={0}
          max={15}
          step={0.5}
          onChange={(v) => update("propertyGrowth", v)}
        />

        <Slider
          label="Investment Return"
          value={inputs.investmentReturn}
          display={`${inputs.investmentReturn}%`}
          min={5}
          max={20}
          step={0.5}
          onChange={(v) => update("investmentReturn", v)}
        />
      </Section>

      <Section title="Time Frame">
        <Slider
          label="Analysis Period"
          value={inputs.years}
          display={`${inputs.years} yrs`}
          min={5}
          max={30}
          onChange={(v) => update("years", v)}
        />
      </Section>

      <button
        onClick={() => onCalculate(inputs)}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-lg"
      >
        Calculate Financial Future
      </button>
    </div>
  );
}

/* ---------------- UI HELPERS ---------------- */

function Section({ title, children }) {
  return (
    <div className="bg-white p-5 rounded-xl border">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Slider({
  label,
  desc,
  value,
  display,
  min,
  max,
  step = 1,
  onChange,
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium">{label}</p>
          {desc && <p className="text-xs text-gray-500">{desc}</p>}
        </div>
        <span className="text-sm font-semibold">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

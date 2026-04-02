import React, { useState } from "react";
import CompareBanks from "../../CompareBanks";
import { Container } from "../../../../../../components/Layout";
import LoanInterestSWPGuide from "./LoanInterestSWPGuide";

function LoanInterestSWP() {
  const [form, setForm] = useState({
    principal: 1000000,
    tenure_years: 10,
    loan_rate_percent: 10,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [activeTab, setActiveTab] = useState("calculator");

  const calculateLoanVsSwp = () => {
    const defaults = {
      principal: 1000000,
      tenure_years: 10,
      loan_rate_percent: 10.0,
    };

    const P = parseFloat(form.principal || defaults.principal);
    const years = parseInt(form.tenure_years || defaults.tenure_years);
    const loanRate = parseFloat(form.loan_rate_percent || defaults.loan_rate_percent);

    if (P <= 0 || loanRate <= 0 || years <= 0) {
      setResult({
        status: "error",
        message: "Principal, Loan Rate, and Tenure must be greater than 0",
        data: null,
      });
      return;
    }

    // ---------- EMI Calculation ----------
    const n = years * 12;
    const rLoanMonthly = loanRate / 12 / 100;
    let emi_raw = 0;

    if (rLoanMonthly === 0) {
      emi_raw = P / n;
    } else {
      const pow = Math.pow(1 + rLoanMonthly, n);
      emi_raw = (P * rLoanMonthly * pow) / (pow - 1);
    }

    const emi_display = parseFloat(emi_raw.toFixed(2));

    // ---------- Required SWP Return Calculation ----------
    const finalBalance = (Rannual) => {
      let bal = P;
      for (let y = 0; y < years; y++) {
        let interestSum = 0.0;
        for (let m = 0; m < 12; m++) {
          bal -= emi_raw;
          interestSum += bal * (Rannual / 12);
        }
        bal += interestSum;
      }
      return bal;
    };

    // ✅ Bracketing for Bisection Method
    let low = 0.0;
    let high = 1.0;
    let fLow = finalBalance(low);
    let fHigh = finalBalance(high);
    let expandIterations = 0;

    while (fLow * fHigh > 0 && expandIterations < 60) {
      high *= 2.0;
      fHigh = finalBalance(high);
      expandIterations++;
    }

    // ✅ If root not bracketed, fallback
    if (fLow * fHigh > 0) {
      const requiredAnnualPercent = parseFloat((rLoanMonthly * 12 * 100).toFixed(4));
      setResult({
        status: "success",
        message: "Could not bracket root; returned loan annual rate as fallback.",
        data: {
          inputs: { principal: P, tenure_years: years, emi: emi_display },
          results: { required_rate_percent_per_year: requiredAnnualPercent },
          rates_used: { loan_rate_percent: loanRate },
        },
      });
      return;
    }

    // ✅ Bisection Method
    const tol = 1e-12;
    let rMid = 0.0;
    for (let i = 0; i < 200; i++) {
      rMid = (low + high) / 2.0;
      const fMid = finalBalance(rMid);
      if (Math.abs(fMid) < 1e-9) break;
      if (fLow * fMid <= 0) {
        high = rMid;
        fHigh = fMid;
      } else {
        low = rMid;
        fLow = fMid;
      }
      if (high - low < tol) break;
    }

    const requiredAnnualPercent = parseFloat((rMid * 100).toFixed(4));

    setResult({
      status: "success",
      message: "Loan vs SWP calculation completed successfully",
      data: {
        inputs: { principal: P, tenure_years: years, emi: emi_display },
        results: { required_rate_percent_per_year: requiredAnnualPercent },
        rates_used: { loan_rate_percent: loanRate },
      },
    });
  };

  return (
    <Container>
      <div className="mx-auto mt-10 rounded-2xl">
        <div className="flex justify-center mb-8 relative">
          <div className="flex items-center gap-2 bg-gray-100 px-1 py-1 rounded-full shadow-sm backdrop-blur-md">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "calculator"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
                }`}
            >
              🧮 Calculator
            </button>
            <button
              onClick={() => setActiveTab("compare")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "compare"
                ? "bg-white text-black shadow"
                : "bg-transparent text-gray-600"
                }`}
            >
              🏦 Compare Banks
            </button>
          </div>
        </div>




        {activeTab === "calculator" && (
          <>
            {/* Input Section */}
            <div className="space-y-3">
              {[
                { label: "Principal Amount (₹)", name: "principal", type: "number" },
                { label: "Tenure (Years)", name: "tenure_years", type: "number" },
                { label: "Loan Rate (%)", name: "loan_rate_percent", type: "number" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              ))}

              <button
                onClick={calculateLoanVsSwp}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-3"
              >
                Calculate
              </button>

              {/* Results Section */}
              {result && (
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
                  {result.status === "error" ? (
                    <p className="text-red-600 font-medium">{result.message}</p>
                  ) : (
                    <>
                      <h3 className="font-semibold mb-2">📊 Results</h3>
                      <p className="text-sm mb-1">
                        <strong>Principal:</strong> ₹ {result.data.inputs.principal.toLocaleString()}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Tenure:</strong> {result.data.inputs.tenure_years} years
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Loan EMI:</strong> ₹ {result.data.inputs.emi.toLocaleString()}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Required SWP Annual Return:</strong>{" "}
                        {result.data.results.required_rate_percent_per_year}% per year
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        (To cover EMI fully, your SWP must earn at least this rate annually)
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>



            <LoanInterestSWPGuide />
          </>
        )}




        {activeTab === "compare" && (
          <div className="text-center text-gray-600 py-10">
            <CompareBanks />
          </div>
        )}
      </div>
    </Container>
  );
}

export default LoanInterestSWP;

import { useState, useMemo } from "react"

const formatINR = (value) =>
  value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(18_500_000)
  const [rate, setRate] = useState(15)
  const [tenure, setTenure] = useState(1)

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100
    const months = tenure * 12

    if (monthlyRate === 0) {
      const emi = principal / months
      return {
        emi,
        totalInterest: 0,
        totalPayment: principal,
      }
    }

    const emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)

    const totalPayment = emi * months
    const totalInterest = totalPayment - principal

    return { emi, totalInterest, totalPayment }
  }, [principal, rate, tenure])

  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        EMI Calculator
      </h2>

      <div className="bg-light-card dark:bg-dark-card/50">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT CONTROLS */}
          <div className="space-y-6">

            {/* LOAN AMOUNT */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>

              <input
                readOnly
                value={formatINR(principal)}
                className="w-full p-2 text-right font-bold text-lg bg-gray-100 dark:bg-dark-card rounded-md border border-gray-300 dark:border-gray-600 mb-2"
              />

              <input
                type="range"
                min={100000}
                max={20000000}
                step={100000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
              />
            </div>

            {/* INTEREST RATE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Interest Rate (% p.a.)
              </label>

              <input
                type="number"
                step="0.05"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-2 text-right font-bold text-lg bg-gray-100 dark:bg-dark-card rounded-md border border-gray-300 dark:border-gray-600 mb-2"
              />

              <input
                type="range"
                min={6}
                max={15}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
              />
            </div>

            {/* TENURE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Loan Tenure (Years)
              </label>

              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full p-2 text-right font-bold text-lg bg-gray-100 dark:bg-dark-card rounded-md border border-gray-300 dark:border-gray-600 mb-2"
              />

              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
              />
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-card/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">

            {/* ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              Your Monthly EMI
            </h3>

            <p
              className="text-4xl font-extrabold text-gray-900 mb-6"
              aria-live="polite"
            >
              {formatINR(Math.round(emi))}
            </p>

            <div className="w-full space-y-3 text-center">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 ">
                  Total Interest Payable
                </span>
                <span className="font-semibold text-gray-700 ">
                  {formatINR(Math.round(totalInterest))}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500 ">
                  Total Payment
                </span>
                <span className="font-semibold text-gray-700 ">
                  {formatINR(Math.round(totalPayment))}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

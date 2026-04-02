export default function InterestRateTypes() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        Types of Interest Rates
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* FIXED INTEREST RATE */}
        <div className="bg-gray-200  rounded-lg  p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Fixed Interest Rate
          </h3>

          <p className="mb-4 text-gray-600 ">
            The interest rate remains unchanged for the entire loan tenure,
            offering predictable EMI payments.
          </p>

          <h4 className="font-semibold text-gray-700  mb-2">
            Pros:
          </h4>

          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon />
              <span>EMI is constant, making budgeting easier.</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span>Protection from rising interest rates.</span>
            </li>
          </ul>

          <h4 className="font-semibold text-gray-700  mt-4 mb-2">
            Cons:
          </h4>

          <ul className="space-y-2 text-gray-600 ">
            <li className="flex items-center">
              <CrossIcon />
              <span>Usually 1–2.5% higher than floating rates.</span>
            </li>
            <li className="flex items-center">
              <CrossIcon />
              <span>You don't benefit if market rates fall.</span>
            </li>
          </ul>
        </div>

        {/* FLOATING INTEREST RATE */}
        <div className="bg-gray-200  rounded-lg  p-6">
          <h3 className="text-xl font-bold text-gray-900  mb-2">
            Floating Interest Rate
          </h3>

          <p className="mb-4 text-gray-600 ">
            The interest rate is linked to a benchmark rate (like RBI&apos;s repo
            rate) and fluctuates with market conditions.
          </p>

          <h4 className="font-semibold text-gray-700  mb-2">
            Pros:
          </h4>

          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon />
              <span>Generally lower than fixed rates initially.</span>
            </li>
            <li className="flex items-center">
              <CheckIcon />
              <span>You benefit from any decrease in market rates.</span>
            </li>
          </ul>

          <h4 className="font-semibold text-gray-700  mt-4 mb-2">
            Cons:
          </h4>

          <ul className="space-y-2 text-gray-600 ">
            <li className="flex items-center">
              <CrossIcon />
              <span>
                EMIs are not fixed and can increase, affecting your budget.
              </span>
            </li>
            <li className="flex items-center">
              <CrossIcon />
              <span>Vulnerable to market volatility and rate hikes.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

/* ---------------- ICONS ---------------- */

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500 mr-2 flex-shrink-0 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <span className="text-gray-500 mr-2 flex-shrink-0 mt-1 text-lg">
      ✕
    </span>
  )
}

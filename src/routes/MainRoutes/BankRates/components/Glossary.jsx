export default function Glossary() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        Glossary of Terms
      </h2>

      <div className="space-y-4">

        <GlossaryItem
          title="EMI (Equated Monthly Instalment)"
          description="A fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full."
        />

        <GlossaryItem
          title="LTV (Loan-to-Value) Ratio"
          description="The ratio of the loan amount to the market value of the property. A lower LTV ratio (meaning a higher down payment) often results in a better interest rate."
        />

        <GlossaryItem
          title="MCLR (Marginal Cost of Funds based Lending Rate)"
          description="An internal benchmark rate for banks in India. It's the minimum interest rate at which a bank can lend. Many older floating-rate loans are linked to MCLR."
        />

        <GlossaryItem
          title="Repo Rate"
          description="The rate at which the Reserve Bank of India (RBI) lends money to commercial banks. It's a key tool of monetary policy and directly influences the interest rates banks offer on loans."
        />

        <GlossaryItem
          title="Prepayment"
          description="Making a part or full payment of your loan principal before the scheduled tenure. This helps in reducing the outstanding principal, thereby lowering the total interest paid."
        />

      </div>
    </section>
  )
}

/* ---------------- SUB COMPONENT ---------------- */

function GlossaryItem({ title, description }) {
  return (
    <div className="bg-gray-100 p-3">
      <h3 className="font-bold text-lg text-gray-800">
        {title}
      </h3>
      <p className="mt-1 text-gray-600">
        {description}
      </p>
    </div>
  )
}

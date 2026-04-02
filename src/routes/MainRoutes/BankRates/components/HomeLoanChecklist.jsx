export default function HomeLoanChecklist() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b-2 border-gray-800/50 pb-2 mb-6">
        Home Loan Checklist
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* DOCUMENTS REQUIRED */}
        <ChecklistCard title="Documents Required">
          <ChecklistItem text="PAN Card" />
          <ChecklistItem text="Aadhaar Card" />
          <ChecklistItem text="Proof of Address (Utility Bill, Passport)" />
          <ChecklistItem text="Salary Slips (last 3 months)" />
          <ChecklistItem text="Bank Statements (last 6 months)" />
          <ChecklistItem text="Form 16 / ITR (last 2–3 years)" />
          <ChecklistItem text="Property Documents (Sale Agreement, Title Deed)" />
        </ChecklistCard>

        {/* ELIGIBILITY CRITERIA */}
        <ChecklistCard title="Eligibility Criteria">
          <ChecklistItem text="Age: 21–65 years" />
          <ChecklistItem text="Stable source of income (salaried or self-employed)" />
          <ChecklistItem text="Good Credit Score (typically 750+)" />
          <ChecklistItem text="Minimum income as per lender’s policy" />
          <ChecklistItem text="Indian resident or NRI" />
        </ChecklistCard>

        {/* WHAT TO NEGOTIATE */}
        <ChecklistCard title="What to Negotiate">
          <ChecklistItem text="Interest Rate: Even a small reduction saves a lot." />
          <ChecklistItem text="Processing Fee: Often negotiable or can be waived." />
          <ChecklistItem text="Prepayment Charges: Nil for floating rate loans, but check for fixed-rate loans." />
          <ChecklistItem text="Loan Tenure: Balance EMI affordability with total interest cost." />
        </ChecklistCard>

      </div>
    </section>
  )
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

function ChecklistCard({ title, children }) {
  return (
    <div className=" rounded-md bg-gray-100 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-3 text-gray-600">
        {children}
      </ul>
    </div>
  )
}

function ChecklistItem({ text }) {
  return (
    <li className="flex items-start">
      <CheckIcon />
      <span className="text-gray-600">
        {text}
      </span>
    </li>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent mr-2 flex-shrink-0 mt-1"
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

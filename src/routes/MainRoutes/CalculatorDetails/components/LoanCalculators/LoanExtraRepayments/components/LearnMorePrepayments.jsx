import React from "react"

export default function LearnMorePrepayments() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Learn More About Prepayments
      </h2>

      <div className="space-y-8">

        {/* WHAT THIS CALCULATOR DOES */}
        <Section title="What This Calculator Does">
          <p>
            This Prepayment Calculator tells you exactly how your home loan
            changes when you prepay a part of the outstanding principal.
          </p>

          <p className="font-semibold mt-2">✔ It clearly shows:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>How much interest you save</li>
            <li>How many months you reduce (if you keep EMI same)</li>
            <li>How much your EMI reduces (if you keep tenure same)</li>
            <li>New interest payable</li>
            <li>New EMI or new tenure</li>
            <li>Total savings over entire loan</li>
            <li>Updated repayment schedule</li>
          </ul>

          <p className="mt-2">
            The calculation is based on core amortization principles used by
            Indian banks.
          </p>

          <p className="font-semibold mt-2">✔ Calculator supports:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Home Loan prepayment</li>
            <li>Loan balance transfer planning</li>
            <li>Part payment vs full payment analysis</li>
            <li>Short-term vs long-term interest saving comparison</li>
          </ul>
        </Section>

        {/* WHEN TO USE */}
        <Section title="When to Use This Calculator">
          <p>Use this calculator when:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>You received a bonus, inheritance, incentive, or profit:</strong> Want to reduce loan burden.</li>
            <li><strong>You want to become debt-free faster:</strong> See tenure reduction.</li>
            <li><strong>You want to lower your EMI:</strong> Useful when monthly budget is tight.</li>
            <li><strong>You are comparing multiple prepayment amounts:</strong> ₹1L vs ₹2L vs ₹5L.</li>
            <li><strong>You want to compare EMI vs tenure reduction:</strong> Calculator highlights the better choice.</li>
            <li><strong>You want to compare balance transfer vs prepayment:</strong> Interest saved helps decide.</li>
            <li><strong>You want to see early vs late prepayment impact:</strong> Early saves more.</li>
          </ul>
        </Section>

        {/* HOW TO USE */}
        <Section title="How to Use – Step by Step">
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Enter loan details:</strong> Amount, EMI, rate, tenure.</li>
            <li><strong>Enter prepayment amount:</strong> Example ₹2,00,000.</li>
            <li><strong>Select prepayment type:</strong> Reduce EMI or Reduce Tenure.</li>
            <li><strong>Click “Calculate Prepayment Impact”.</strong></li>
            <li><strong>View report:</strong> New EMI/tenure, interest saved, timeline.</li>
          </ol>

          <p className="mt-2 text-sm italic">
            Tooltip example: “Choosing tenure reduction gives maximum interest saving.”
          </p>
        </Section>

        {/* EXAMPLES */}
        <Section title="Example Calculations (FULL & DETAILED)">
          <p>Below are detailed examples calculated exactly like banks do.</p>

          <ExampleBox title="🔵 EXAMPLE A">
            <ul className="list-none space-y-1">
              <li><strong>Outstanding:</strong> ₹35,00,000</li>
              <li><strong>Interest Rate:</strong> 8.50%</li>
              <li><strong>EMI:</strong> ₹30,000</li>
              <li><strong>Tenure:</strong> 240 months</li>
              <li><strong>Prepayment:</strong> ₹2,00,000</li>
            </ul>
          </ExampleBox>

          <p><strong>Before Prepayment:</strong> Interest ≈ ₹36,04,000</p>
          <p><strong>After Prepayment:</strong> New principal = ₹33,00,000</p>

          <h4 className="font-semibold mt-4">🎯 OPTION 1 — Reduce Tenure</h4>
          <CodeBlock>
            n = log(EMI / (EMI − P×r)) / log(1+r)
          </CodeBlock>

          <p><strong>New Tenure:</strong> 223 months (17 months reduced)</p>
          <p><strong>Interest Saved:</strong> ₹6,23,000</p>

          <h4 className="font-semibold mt-4">🎯 OPTION 2 — Reduce EMI</h4>
          <CodeBlock>
            EMI = P × r × (1+r)^n / ((1+r)^n − 1)
          </CodeBlock>

          <p><strong>New EMI:</strong> ₹28,350</p>
          <p><strong>Interest Saved:</strong> ₹2,81,000</p>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">✔ SUMMARY</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">Feature</th>
                    <th className="border p-2 text-left">Tenure Reduction</th>
                    <th className="border p-2 text-left">EMI Reduction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2 font-semibold">EMI</td><td className="border p-2">₹30,000</td><td className="border p-2">₹28,350</td></tr>
                  <tr><td className="border p-2 font-semibold">Tenure</td><td className="border p-2">↓ 17 months</td><td className="border p-2">Same</td></tr>
                  <tr><td className="border p-2 font-semibold">Interest Saved</td><td className="border p-2">₹6.23L</td><td className="border p-2">₹2.81L</td></tr>
                </tbody>
              </table>
            </div>

            <p className="mt-2 bg-gray-100 border-l-4 border-gray-800 p-2 text-sm font-semibold">
              📌 Recommendation: TENURE REDUCTION saves maximum interest.
            </p>
          </div>
        </Section>

        {/* PRO TIPS */}
        <Section title="Pro Tips">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Tenure reduction saves ~2x more interest</strong>.</li>
            <li><strong>Prepay early</strong> for maximum benefit.</li>
            <li>Even ₹50,000 early can save lakhs.</li>
            <li>Avoid prepayment near loan end.</li>
            <li>Combine annual part-payments.</li>
            <li>Always check bank terms.</li>
          </ul>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions">
          <dl className="space-y-3">
            <FAQ q="What is a home loan prepayment?" a="A lump-sum payment towards principal." />
            <FAQ q="Which option saves more?" a="Tenure reduction saves more interest." />
            <FAQ q="Can I prepay anytime?" a="Yes, for floating-rate loans." />
            <FAQ q="Are there prepayment charges?" a="No for floating rate loans." />
            <FAQ q="Is my data saved?" a="No, calculations run in your browser only." />
          </dl>
        </Section>

      </div>
    </div>
  )
}

/* ---------------- HELPER COMPONENTS ---------------- */

const Section = ({ title, children }) => (
  <div className="pt-6 border-t border-gray-200 first:pt-0 first:border-t-0">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-700 prose prose-sm max-w-none">
      {children}
    </div>
  </div>
)

const ExampleBox = ({ title, children }) => (
  <div className="bg-gray-100 p-3 rounded-md my-2 text-sm">
    <strong className="block mb-2 text-base text-gray-800">{title}</strong>
    {children}
  </div>
)

const CodeBlock = ({ children }) => (
  <code className="block bg-gray-200 p-2 rounded text-xs my-2 font-mono">
    {children}
  </code>
)

const FAQ = ({ q, a }) => (
  <>
    <dt className="font-semibold">{q}</dt>
    <dd className="pl-2 mb-4">{a}</dd>
  </>
)

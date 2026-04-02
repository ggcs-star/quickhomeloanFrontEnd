import { motion } from "framer-motion";
import { useState } from "react";

export default function TransferHomeLoanComponent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will reach out to you soon.");
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen text-black pt-20">
      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Home Loan Balance Transfer
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Move your existing home loan to a better lender and enjoy lower EMIs,
          attractive interest rates, and flexible repayment options — all with
          an effortless switching experience.
        </p>
      </motion.section>

      {/* ================= BENEFITS ================= */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 mb-16">
        {[
          {
            title: "Lower Interest Rates",
            desc: "Reduce your EMI and total loan cost by switching smartly.",
          },
          {
            title: "Flexible Tenure",
            desc: "Choose a term that suits your monthly budget and comfort.",
          },
          {
            title: "Top-up Facility",
            desc: "Get additional funds for renovation or personal needs.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-md border border-gray-300 hover:shadow-lg transition p-6 text-center bg-white"
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Compare Your Current Loan vs Partner Banks
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="py-3 px-4 text-left">Lender</th>
                <th className="py-3 px-4 text-left">Interest Rate</th>
                <th className="py-3 px-4 text-left">Processing Fee</th>
                <th className="py-3 px-4 text-left">Max Tenure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4">Your Current Bank</td>
                <td className="py-3 px-4">9.25%</td>
                <td className="py-3 px-4">₹5,000</td>
                <td className="py-3 px-4">15 Years</td>
              </tr>
              <tr className="border-t bg-gray-100">
                <td className="py-3 px-4 font-semibold text-black">
                  Partner Bank
                </td>
                <td className="py-3 px-4 font-semibold">8.25%</td>
                <td className="py-3 px-4 font-semibold">₹2,000</td>
                <td className="py-3 px-4 font-semibold">20 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          How Balance Transfer Works
        </h2>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Evaluate your outstanding balance & current EMI.</li>
          <li>Compare new offers with lower rates and better terms.</li>
          <li>Submit documents and receive sanction approval.</li>
          <li>The new lender closes your old loan and issues a fresh one.</li>
          <li>Start paying lower EMIs with improved flexibility.</li>
        </ol>
      </section>

      {/* ================= ELIGIBILITY / DOCUMENTS ================= */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-black mb-4">
          Eligibility & Documents Required
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Eligibility */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Eligibility</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Age 23–60 years</li>
              <li>Good credit score (700+ recommended)</li>
              <li>Minimum 12 EMIs paid with existing lender</li>
              <li>Stable income (salaried/self-employed)</li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Documents</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>PAN, Aadhaar, Passport (ID proof)</li>
              <li>Address proof – Utility bill / rent agreement</li>
              <li>Salary slips, ITR, bank statements</li>
              <li>Existing loan statement & sanction letter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA FORM ================= */}
      <section className="bg-black text-white py-12 px-6 text-center rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Switch Smartly & Save More</h2>

        <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-300">
          Submit your details to compare the best balance transfer offers and
          reduce your EMI instantly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid md:grid-cols-3 gap-4"
        >
          <div className="flex flex-col">
            <label className="text-left text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left text-sm mb-1 text-gray-300">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded border border-gray-600 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg border border-gray-900 hover:bg-gray-200 transition"
            >
              Get Free Quote
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

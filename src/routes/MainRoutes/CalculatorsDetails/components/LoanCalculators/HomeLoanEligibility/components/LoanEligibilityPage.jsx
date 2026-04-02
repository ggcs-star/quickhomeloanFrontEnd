import React, { useState } from "react";
import LoanEligibilityLeft from "./LoanEligibilityLeft";
import LoanEligibilityFAQ from "./LoanEligibilityFAQ";
import LoanEligibilityProTip from "./LoanEligibilityProTip.JSX";

/* ---------------- FAQ DATA ---------------- */
const faqs = [
  {
    q: "How much loan can I get on my salary?",
    a: "Banks usually allow EMIs up to 40–60% of income.",
  },
  {
    q: "What is FOIR?",
    a: "FOIR is the percentage of income allowed for EMIs.",
  },
];

/* ---------------- PAGE ---------------- */
export default function LoanEligibilityPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-12">

      {/* ✅ LEFT SECTION (IMPORTED) */}
      <LoanEligibilityLeft />

      {/* ================= RIGHT SIDEBAR ================= */}
      <aside className="space-y-8">

        <LoanEligibilityFAQ />
        <LoanEligibilityProTip />
      </aside>
    </div>
  );
}

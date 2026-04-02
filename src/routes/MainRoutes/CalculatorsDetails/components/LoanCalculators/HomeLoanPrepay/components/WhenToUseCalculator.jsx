export default function WhenToUseCalculator() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md my-8 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
        When to Use This Calculator
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-gray-600 leading-relaxed">
        <li>
          When you receive a bonus, inheritance, incentive, or profit and want
          to use extra funds to reduce your loan burden
        </li>
        <li>
          When your goal is to become debt-free faster and you want to see how
          many years or months you can reduce
        </li>
        <li>
          When you want to lower your EMI due to a tight monthly budget
        </li>
        <li>
          When comparing multiple prepayment amounts (for example: ₹1 lakh vs
          ₹2 lakh vs ₹5 lakh)
        </li>
        <li>
          When comparing EMI reduction vs tenure reduction to understand which
          option gives better benefits
        </li>
        <li>
          When deciding whether balance transfer or prepayment is the better
          choice based on interest saved
        </li>
        <li>
          When you want to see the impact of early prepayment versus later
          prepayment (earlier prepayment results in higher savings)
        </li>
      </ul>
    </section>
  );
}

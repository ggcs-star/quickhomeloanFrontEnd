import React from "react";
import { homeLoanData } from "../../../../db/homeLoanData"; // Adjust the import path accordingly

// Loan Card Component
const LoanCard = ({ card }) => {
  return (
    <div className="loan-card bg-white border p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Bank Icon */}
        <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
          <i className="fas fa-building"></i> {/* Replace with your bank icon */}
        </div>
        <div>
          <h4 className="text-xl font-semibold">{card.title}</h4>
        </div>
      </div>

      <div className="flex-grow ml-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Interest Rate</p>
            <p className="font-semibold">{card.interestRateRange}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Loan Amount</p>
            <p className="font-semibold">{card.loanAmountRange}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">EMI Per Lakh</p>
            <p className="font-semibold">{card.emiDetails}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Processing Fees</p>
            <p className="font-semibold">{card.processingFee}</p>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500">
          <p>
            <span className="font-semibold">Pre-Payment Charges:</span> {card.prePaymentCharges}
            <span className="text-blue-500 cursor-pointer ml-2">...more</span>
          </p>
        </div>
      </div>

      <div>
        <a href={card.applyLink} className="text-blue-500 font-semibold hover:underline">
          Apply Now
        </a>
      </div>
    </div>
  );
};

const HomeLoanList = () => {
  return (
    <div className="loan-list space-y-8">
      {homeLoanData.map((loan) => {
        // Ensure loan.cards is an object and exists
        const cards = loan.cards ? Object.values(loan.cards) : [];

        return (
          <div key={loan.id} className="loan bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{loan.title}</h3>
            {/* 🏠 Loan Cards (Iterate through all available cards) */}
            <div className="cards-container space-y-6">
              {cards.length > 0 &&
                cards.map((card) => (
                  <LoanCard key={card.title} card={card} /> // Use card.title or card.id as the key
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeLoanList;

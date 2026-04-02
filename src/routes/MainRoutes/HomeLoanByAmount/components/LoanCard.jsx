import React from "react";
import { Container } from "../../../../components/Layout";

const LoanCard = ({ card }) => {
    return (
        <Container>
            <div className="loan-card bg-white border-1 border-gray-300 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex justify-between items-center space-x-4 mb-4 md:mb-0">
                    {/* Bank Icon and Title */}
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                            <i className="fas fa-building"></i> {/* Bank Icon */}
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">{card.title}</h4>
                            <p className="text-gray-600 text-sm">{card.description}</p>
                        </div>
                    </div>

                    {/* Apply Now button aligned to the right */}
                    <a
                        href={card.applyLink}
                        className="block" // Makes the anchor fill the button area
                    >
                        <button className="border-1 cursor-pointer border-primary p-4 rounded-lg hover:bg-blue-500 text-blue-500 hover:text-white w-full">
                            <span className="font-medium">Apply Now</span>
                        </button>
                    </a>

                </div>


                <div className="flex-grow grid grid-cols-4 gap-4 mt-4 md:ml-6">
                    <div>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="font-medium">{card.interestRateRange}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Loan Amount</p>
                        <p className="font-medium">{card.loanAmountRange}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">EMI Per Lakh</p>
                        <p className="font-medium">{card.emiDetails}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Processing Fees</p>
                        <p className="font-medium">{card.processingFee}</p>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default LoanCard;

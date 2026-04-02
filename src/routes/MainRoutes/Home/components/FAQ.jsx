import React, { useState } from 'react';
import faq from "../../../../assets/faq/faq.jpg";
import { Container } from '../../../../components/Layout';
import { motion, AnimatePresence } from "framer-motion";
import { text } from '@fortawesome/fontawesome-svg-core';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What are the key features and benefits of home loans?",
            answer: (
                <div>
                    <p>Here are some of the important features and benefits of home loan:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                            <strong>Flexibility to choose a tenure:</strong> Most banks give you the flexibility to choose your home loan tenure, which generally ranges from 15 - 30 years. The tenure you choose directly impacts the EMI you pay every month.
                        </li>
                        <li>
                            <strong>Comparatively cheaper than personal loans:</strong> The rate of interest on home loans is generally lower in comparison to personal loans. This is because home loans are secured loans whereas personal loans are unsecured.
                        </li>
                        <li>
                            <strong>Tax benefits:</strong> You get tax benefits on both the interest amount and principal amount you pay. The interest paid can be claimed for a deduction of up to Rs 2 lakhs every year, whereas the principal amount paid can be claimed for a deduction of up to Rs 1.5 lakhs per year.
                        </li>
                        <li>
                            <strong>Home loan balance transfer:</strong> This facility allows you to transfer your outstanding loan amount from one lender to another for the purpose of taking advantage of lower interest rates.
                        </li>
                    </ul>
                </div>
            )
        },
        {
            question: "What are the different types of home loans available?",
            answer: (
                <div>
                    <p>Check out some of the most common types of home loans available from banks and financial institutions:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Home loan for purchase:</strong> For buying a residential property (resale, ready-to-move, or under construction).</li>
                        <li><strong>Home loan for construction:</strong> For those who own land and wish to build a house.</li>
                        <li><strong>Home loan for renovation:</strong> For making renovations or improvements to an existing home.</li>
                        <li><strong>Bridge home loan:</strong> Helps in upgrading to a bigger/better home by covering the gap between selling an old home and buying a new one.</li>
                        <li><strong>Step up home loan:</strong> Designed for young professionals. EMIs are lower initially and increase as income grows.</li>
                        <li><strong>Balance transfer home loan:</strong> Lets you transfer an existing home loan to another lender at a better rate.</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What are the factors you should know before applying for a home loan?",
            answer: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Maintain a good credit score – higher the score, better your chances.</li>
                    <li>Ensure you can afford EMIs with your current income.</li>
                    <li>Research all available loan options before finalizing.</li>
                    <li>Choose a repayment tenure that balances EMI and affordability.</li>
                    <li>Know prepayment terms and applicable charges.</li>
                    <li>Check for hidden fees and charges.</li>
                    <li>Read all loan documents carefully before signing.</li>
                </ul>
            )
        },
        {
            question: "What are the different types of home loan fees and charges?",
            answer: (
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Processing fee:</strong> 0.5%–1% of the loan amount; some banks offer zero processing fee schemes.</li>
                    <li><strong>Prepayment charges:</strong> No penalty on floating rate loans. Fixed rate loans may attract up to 2% penalty.</li>
                    <li><strong>Loan conversion charges:</strong> Charged when switching between fixed and floating rate; usually ~2% of outstanding amount.</li>
                    <li><strong>Legal & technical charges:</strong> ₹5,000–₹10,000 for property/document verification.</li>
                    <li><strong>MODT charges:</strong> 0.1%–0.5% of the loan amount for submitting property documents with the bank.</li>
                </ul>
            )
        },
        {
            question: "How does Credit score impact your interest rate?",
            answer: (
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Below 600:</strong> High risk, difficult to get approval. Improve score before applying.</li>
                    <li><strong>600–749:</strong> Average score. Approval possible depending on income and employment.</li>
                    <li><strong>750 and above:</strong> Strong score. Easier approval and access to lower interest rates.</li>
                </ul>
            )
        },
        {
            question: "What's the benefit of having a female co-applicant?",
            answer: (
                <p>
                    If you apply with a woman as a co-applicant, you can enjoy concessional interest rates — typically 0.05% lower than standard rates.
                    To avail this benefit, the woman co-applicant must be the sole or joint owner of the property.
                </p>
            )
        },
        {
            question: "How can I improve my Credit score?",
            answer: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Pay dues (EMIs, credit card bills) on time.</li>
                    <li>Check your credit report for errors and correct them.</li>
                    <li>Choose longer tenures to keep EMIs affordable.</li>
                    <li>Maintain a healthy mix of secured and unsecured loans.</li>
                    <li>Avoid applying for too many loans at once.</li>
                </ul>
            )
        },
        {
            question: "What is pre-EMI interest?",
            answer: (
                <div>
                    <p>
                        Pre-EMI lets a borrower pay only the interest on the disbursed loan amount until property construction is complete. Once the property is ready, full EMIs (interest + principal) begin.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong> If you take a 30-year loan and construction takes 5 years, you’ll pay pre-EMIs (interest only) during those 5 years. After possession, full EMIs for 30 years start.
                    </p>
                    <p className="mt-2">
                        <strong>Who should opt?</strong> Those already paying rent can use pre-EMI to avoid paying both rent and full EMIs until property possession.
                    </p>
                </div>
            )
        },
        {
            question: "What is the meaning of the Moratorium Period in Home Loans?",
            answer: (
                <div>
                    <p>
                        The moratorium period is when no EMI payments are required. This helps borrowers manage finances during the initial loan phase or construction period.
                    </p>
                    <p className="mt-2">
                        <strong>Example:</strong> If you get a 3-month moratorium, EMIs begin only after 3 months.
                    </p>
                </div>
            )
        },
        {
            question: "What is Pradhan Mantri Awas Yojana?",
            answer: (
                <div>
                    <p>
                        Launched in 2015, PMAY is a Government of India initiative to provide affordable housing. The scheme targeted the construction of 20 million houses by March 2022.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Promote affordable housing for weaker sections.</li>
                        <li>Construct houses in partnership with public and private sectors.</li>
                        <li>Rehabilitate slums via private developers.</li>
                        <li>Provide subsidies for individual house construction.</li>
                    </ul>
                </div>
            )
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-8 my-8">
                {/* Left Section */}
                <div className="md:w-[30%] w-full">
                    <h1 className="text-lg lg:text-3xl font-bold text-start my-6">Home Loan FAQs</h1>
                    <img src={faq} alt="FAQ" className="" />
                </div>

                {/* Right Section */}
                <div className="md:w-[70%] w-full">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`py-3 ${index !== faqs.length - 1 ? 'border-b' : ''}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`cursor-pointer hover:text-primary w-full text-left text-md lg:text-lg font-semibold flex justify-between items-center transition-colors ${activeIndex === index ? 'text-primary' : 'text-gray-800'
                                    }`}
                            >
                                {item.question}
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ fontSize: '24px'}}
                                >
                                    {activeIndex === index ? '−' : '+'}
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-2 text-gray-800 text-sm lg:text-lg">{item.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                </div>
            </div>
        </Container>
    );
};

export default FAQ;

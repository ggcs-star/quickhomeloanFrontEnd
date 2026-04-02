import React, { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  CirclePlay,
  Headphones,
  Play,
  Volume2,
  ShieldCheck,
  Film,
  Info,
  Pause,
  Square,
  ChevronLeft,
  ChevronRight,
  Lock,
  ChevronDown,
  HelpCircle,
  ChevronUp,
} from "lucide-react";
import axios from "axios";

// ==================== AUDIO LIBRARY DATA WITH CATEGORIES ====================
const audioLibraryData = [
  // ========== MODULE 1: BASICS OF HOME LOANS ==========
  { id: 50, title: "What is a Home Loan", duration: "16:24", category: "1. Basics", subcategory: "Basics", file: "/audio/what-is-a-home-loan.m4a", desc: "Home loan basics explained" },
  { id: 51, title: "What is EMI", duration: "11:31", category: "1. Basics", subcategory: "Basics", file: "/audio/what-is-emi.m4a", desc: "Understanding EMI" },
  { id: 52, title: "What is Home Loan Interest Rate", duration: "10:39", category: "1. Basics", subcategory: "Basics", file: "/audio/what-is-home-loan-interest-rate.m4a", desc: "Interest rates explained" },
  { id: 70, title: "How EMI is calculated", duration: "11:45", category: "1. Basics", subcategory: "Basics", file: "/audio/how-emi-is-calculated.m4a", desc: "EMI calculation formula" },
  { id: 72, title: "How loan tenure works", duration: "17:47", category: "1. Basics", subcategory: "Basics", file: "/audio/how-loan-tenure-works.m4a", desc: "Understanding loan tenure" },
  { id: 91, title: "Principal vs interest explained", duration: "11:48", category: "1. Basics", subcategory: "Basics", file: "/audio/principal-vs-interest-explained.m4a", desc: "Understanding principal and interest" },
  { id: 68, title: "How banks give home loans", duration: "17:41", category: "1. Basics", subcategory: "Basics", file: "/audio/how-banks-give-home-loans.m4a", desc: "Bank lending process explained" },
  { id: 32, title: "How banks calculate EMI capacity", duration: "11:10", category: "1. Basics", subcategory: "Basics", file: "/audio/how-banks-calculate-emi-capacity.m4a", desc: "Understanding EMI calculation" },
  { id: 25, title: "FOIR explained simply", duration: "07:30", category: "1. Basics", subcategory: "Basics", file: "/audio/foir-explained-simply.m4a", desc: "FOIR calculation explained" },
  { id: 53, title: "What is LTV (Loan to Value) ratio", duration: "16:01", category: "1. Basics", subcategory: "Basics", file: "/audio/what-is-ltv-ratio.m4a", desc: "LTV ratio explained" },
  { id: 93, title: "Repo rate explained", duration: "10:50", category: "1. Basics", subcategory: "Basics", file: "/audio/repo-rate-explained.m4a", desc: "Understanding repo rate" },
  { id: 98, title: "Stamp duty", duration: "12:29", category: "1. Basics", subcategory: "Basics", file: "/audio/stamp-duty.m4a", desc: "Understanding stamp duty" },

  // ========== MODULE 2: ELIGIBILITY & CREDIT SCORE ==========
  { id: 49, title: "What is a good CIBIL score", duration: "10:43", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/what-is-a-good-cibil-score.m4a", desc: "Understanding good CIBIL scores" },
  { id: 69, title: "How CIBIL score is calculated", duration: "10:41", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/how-cibil-score-is-calculated.m4a", desc: "CIBIL calculation methodology" },
  { id: 67, title: "Why CIBIL drops suddenly", duration: "10:55", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/why-cibil-drops-suddenly.m4a", desc: "Reasons for CIBIL drop" },
  { id: 78, title: "How to improve CIBIL score", duration: "10:56", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/how-to-improve-cibil-score.m4a", desc: "CIBIL improvement tips" },
  { id: 26, title: "Hard enquiry vs soft enquiry", duration: "06:45", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/hard-enquiry-vs-soft-enquiry.m4a", desc: "Difference between hard and soft enquiries" },
  { id: 71, title: "How income affects eligibility", duration: "11:13", category: "2. Eligibility & Credit Score", subcategory: "Eligibility", file: "/audio/how-income-affects-eligibility.m4a", desc: "Income impact on loan amount" },
  { id: 1, title: "Age Factor in Home Loan Approval", duration: "12:45", category: "2. Eligibility & Credit Score", subcategory: "Eligibility", file: "/audio/age-factor-in-home-loan-approval.m4a", desc: "How age affects your home loan eligibility" },
  { id: 74, title: "How Much Home Loan Can I Get on My Salary", duration: "16:22", category: "2. Eligibility & Credit Score", subcategory: "Eligibility", file: "/audio/how-much-home-loan-can-i-get-on-salary.m4a", desc: "Salary-based loan calculation" },
  { id: 76, title: "How settlement affects credit score", duration: "17:35", category: "2. Eligibility & Credit Score", subcategory: "Credit Score", file: "/audio/how-settlement-affects-credit-score.m4a", desc: "Settlement impact on CIBIL" },

  // ========== MODULE 3: INTEREST RATES & EMI CONCEPTS ==========
  { id: 24, title: "Fixed vs floating interest rate", duration: "13:40", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/fixed-vs-floating-interest-rate.m4a", desc: "Compare fixed and floating rates" },
  { id: 35, title: "Why interest rate changes", duration: "10:55", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/why-interest-rate-changes.m4a", desc: "Factors affecting interest rates" },
  { id: 36, title: "Why two people get different rates", duration: "11:14", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/why-two-people-get-different-rates.m4a", desc: "Individual factors in rate determination" },
  { id: 33, title: "Why different banks give different rates", duration: "11:07", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/why-different-banks-give-different-rates.m4a", desc: "Reasons for rate variations" },
  { id: 60, title: "When floating rate is better", duration: "11:22", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/when-floating-rate-is-better.m4a", desc: "When to choose floating rates" },
  { id: 31, title: "How 0.1% impacts total cost", duration: "08:30", category: "3. Interest Rates & EMI Concepts", subcategory: "Interest Rates", file: "/audio/how-01-percent-impacts-total-cost.m4a", desc: "Small rate changes, big impact" },
  { id: 34, title: "Why initial EMIs are mostly interest", duration: "11:49", category: "3. Interest Rates & EMI Concepts", subcategory: "Repayment", file: "/audio/why-initial-emis-are-mostly-interest.m4a", desc: "Understanding interest front-loading" },

  // ========== MODULE 4: LOAN APPLICATION & APPROVAL PROCESS ==========
  { id: 28, title: "Home loan application process", duration: "12:50", category: "4. Loan Application & Approval Process", subcategory: "Process", file: "/audio/home-loan-application-process.m4a", desc: "Step-by-step application process" },
  { id: 13, title: "Documents required for loan", duration: "13:15", category: "4. Loan Application & Approval Process", subcategory: "Documentation", file: "/audio/documents-required-for-loan.m4a", desc: "Complete document checklist" },
  { id: 92, title: "Reasons why banks reject loans", duration: "10:34", category: "4. Loan Application & Approval Process", subcategory: "Eligibility", file: "/audio/reasons-why-banks-reject-loans.m4a", desc: "Common rejection reasons" },

  // ========== MODULE 5: CHARGES & FEES ==========
  { id: 56, title: "What is processing fee", duration: "12:42", category: "5. Charges & Fees", subcategory: "Fees & Charges", file: "/audio/what-is-processing-fee.m4a", desc: "Processing fee details" },
  { id: 87, title: "MOD charges explained", duration: "12:27", category: "5. Charges & Fees", subcategory: "Fees & Charges", file: "/audio/mod-charges-explained.m4a", desc: "MOD charges explained" },
  { id: 7, title: "Charges banks don't explain", duration: "18:30", category: "5. Charges & Fees", subcategory: "Fees & Charges", file: "/audio/charges-banks-dont-explain.m4a", desc: "Hidden charges in home loans revealed" },

  // ========== MODULE 6: DISBURSEMENT & PROPERTY PURCHASE ==========
  { id: 12, title: "Disbursement explained", duration: "09:40", category: "6. Disbursement & Property Purchase", subcategory: "Process", file: "/audio/disbursement-explained.m4a", desc: "Home loan disbursement process" },
  { id: 55, title: "What is Pre-EMI (during construction property)", duration: "16:07", category: "6. Disbursement & Property Purchase", subcategory: "Repayment", file: "/audio/what-is-pre-emi.m4a", desc: "Pre-EMI explained" },
  { id: 4, title: "Buying resale property with home loan", duration: "10:30", category: "6. Disbursement & Property Purchase", subcategory: "Property", file: "/audio/buying-resale-property-with-home-loan.m4a", desc: "Process of buying resale property with loan" },
  { id: 6, title: "Can you get home loan for old property", duration: "09:15", category: "6. Disbursement & Property Purchase", subcategory: "Property", file: "/audio/can-you-get-home-loan-for-old-property.m4a", desc: "Eligibility for old property loans" },
  { id: 89, title: "Plot loan vs home loan", duration: "17:03", category: "6. Disbursement & Property Purchase", subcategory: "Types of Loans", file: "/audio/plot-loan-vs-home-loan.m4a", desc: "Compare plot and home loans" },

  // ========== MODULE 7: MANAGING A HOME LOAN ==========
  { id: 86, title: "Managing EMIs smartly", duration: "17:38", category: "7. Managing a Home Loan", subcategory: "Tips", file: "/audio/managing-emis-smartly.m4a", desc: "Smart EMI management" },
  { id: 79, title: "How to reduce EMI legally", duration: "11:50", category: "7. Managing a Home Loan", subcategory: "Repayment", file: "/audio/how-to-reduce-emi-legally.m4a", desc: "Legal ways to reduce EMI" },
  { id: 75, title: "How part-payment works", duration: "11:57", category: "7. Managing a Home Loan", subcategory: "Repayment", file: "/audio/how-part-payment-works.m4a", desc: "Part payment explained" },
  { id: 62, title: "When prepayment is good", duration: "12:00", category: "7. Managing a Home Loan", subcategory: "Repayment", file: "/audio/when-prepayment-is-good.m4a", desc: "When to prepay" },
  { id: 61, title: "When prepayment is bad", duration: "11:53", category: "7. Managing a Home Loan", subcategory: "Repayment", file: "/audio/when-prepayment-is-bad.m4a", desc: "When not to prepay" },
  { id: 37, title: "Taking high EMI – risks", duration: "18:32", category: "7. Managing a Home Loan", subcategory: "Risks", file: "/audio/taking-high-emi-risks.m4a", desc: "Risks of taking high EMI" },

  // ========== MODULE 8: LOAN TRANSFERS & TOP UPS ==========
  { id: 2, title: "Balance transfer explained", duration: "08:20", category: "8. Loan Transfers & Top Ups", subcategory: "Loan Management", file: "/audio/balance-transfer-explained.m4a", desc: "Understanding home loan balance transfer" },
  { id: 63, title: "When to switch bank", duration: "17:54", category: "8. Loan Transfers & Top Ups", subcategory: "Loan Management", file: "/audio/when-to-switch-bank.m4a", desc: "When to consider switching" },
  { id: 85, title: "Loan top-up explained", duration: "17:59", category: "8. Loan Transfers & Top Ups", subcategory: "Loan Management", file: "/audio/loan-top-up-explained.m4a", desc: "Top-up loan details" },

  // ========== MODULE 9: RISKS & REAL-LIFE SITUATIONS ==========
  { id: 17, title: "EMI missed – what happens", duration: "07:55", category: "9. Risks & Real-Life Situations", subcategory: "Risks", file: "/audio/emi-missed-what-happens.m4a", desc: "Consequences of missing EMI" },
  { id: 48, title: "What happens to loan if borrower dies", duration: "17:48", category: "9. Risks & Real-Life Situations", subcategory: "Legal", file: "/audio/what-happens-to-loan-if-borrower-dies.m4a", desc: "Loan closure in case of death" },
  { id: 47, title: "What happens if you lose your job during loan", duration: "13:35", category: "9. Risks & Real-Life Situations", subcategory: "Risks", file: "/audio/what-happens-if-you-lose-job-during-loan.m4a", desc: "Job loss and loan implications" },
  { id: 8, title: "Co-borrower liability explained", duration: "11:20", category: "9. Risks & Real-Life Situations", subcategory: "Legal", file: "/audio/co-borrower-liability-explained.m4a", desc: "Understanding co-borrower responsibilities" },

  // ========== MODULE 10: FINANCIAL PLANNING ==========
  { id: 96, title: "Should you close loan early or invest", duration: "13:24", category: "10. Financial Planning", subcategory: "Decision Making", file: "/audio/should-you-close-loan-early-or-invest.m4a", desc: "Early closure vs investment" },
  { id: 30, title: "Home loan vs renting", duration: "15:30", category: "10. Financial Planning", subcategory: "Decision Making", file: "/audio/home-loan-vs-renting.m4a", desc: "Should you buy or rent" },
  { id: 59, title: "When a Home Loan Becomes an Asset or a Burden", duration: "12:38", category: "10. Financial Planning", subcategory: "Psychology", file: "/audio/when-home-loan-becomes-asset-or-burden.m4a", desc: "Asset vs burden perspective" },
  { id: 65, title: "Who should take a home loan", duration: "17:16", category: "10. Financial Planning", subcategory: "Decision Making", file: "/audio/who-should-take-a-home-loan.m4a", desc: "Is home loan right for you" },
  { id: 97, title: "Single income vs joint loan", duration: "18:37", category: "10. Financial Planning", subcategory: "Eligibility", file: "/audio/single-income-vs-joint-loan.m4a", desc: "Compare single vs joint loans" },

  // ========== MODULE 11: TAX BENEFITS ==========
  { id: 38, title: "Tax benefit u/s 24b", duration: "14:06", category: "11. Tax Benefits", subcategory: "Tax", file: "/audio/tax-benefit-sec-24b.m4a", desc: "Section 24b tax benefits explained" },
  { id: 39, title: "Tax benefit for joint home loan", duration: "14:04", category: "11. Tax Benefits", subcategory: "Tax", file: "/audio/tax-benefit-for-joint-home-loan.m4a", desc: "Tax benefits for joint loans" },
  { id: 40, title: "Tax benefit on second home loan", duration: "14:19", category: "11. Tax Benefits", subcategory: "Tax", file: "/audio/tax-benefit-on-second-home-loan.m4a", desc: "Tax benefits for second home" },

  // ========== MODULE 12: LOAN CLOSURE ==========
  { id: 77, title: "How to close home loan", duration: "18:05", category: "12. Loan Closure", subcategory: "Loan Closure", file: "/audio/how-to-close-home-loan.m4a", desc: "Step-by-step closure process" },
  { id: 54, title: "What is NOC", duration: "18:14", category: "12. Loan Closure", subcategory: "Documentation", file: "/audio/what-is-noc.m4a", desc: "Understanding No Objection Certificate" },

  // ========== MODULE 13: LEGAL DOCUMENTATION ==========
  { id: 80, title: "INDEX2 VERY IMPORTANT DOCUMENT", duration: "18:55", category: "13. Legal Documentation", subcategory: "Documentation", file: "/audio/index2-very-important-document.m4a", desc: "Understanding INDEX2 document" },
  { id: 41, title: "TDS 1% deduction above 50 LAC", duration: "18:15", category: "13. Legal Documentation", subcategory: "Tax", file: "/audio/tds-1-percent-deduction-above-50-lac.m4a", desc: "TDS on high-value properties" },

  // ========== MODULE 14: INSURANCE & PROTECTION ==========
  { id: 29, title: "Home Loan Insurance – Mandatory or Optional", duration: "09:50", category: "14. Insurance & Protection", subcategory: "Insurance", file: "/audio/home-loan-insurance.m4a", desc: "Understanding home loan insurance" },
  { id: 44, title: "Term insurance vs home loan insurance", duration: "17:42", category: "14. Insurance & Protection", subcategory: "Insurance", file: "/audio/term-insurance-vs-home-loan-insurance.m4a", desc: "Compare insurance options" },

  // ========== MODULE 15: FIRST TIME BUYER GUIDANCE ==========
  { id: 23, title: "First-time buyer mistakes", duration: "16:20", category: "15. First Time Buyer Guidance", subcategory: "Tips", file: "/audio/first-time-buyer-mistakes.m4a", desc: "Common mistakes first-time buyers make" },
  { id: 58, title: "What to Ask Before Signing", duration: "10:35", category: "15. First Time Buyer Guidance", subcategory: "Tips", file: "/audio/what-to-ask-before-signing.m4a", desc: "Questions to ask before signing" },
  { id: 88, title: "Negotiation with banks", duration: "10:24", category: "15. First Time Buyer Guidance", subcategory: "Tips", file: "/audio/negotiation-with-banks.m4a", desc: "Bank negotiation strategies" },
];

// ==================== FAQ DATA MAPPED TO AUDIO TITLES ====================
const audioFaqMap = {
  "What is a Home Loan": [
    { question: "Is a home loan the same as a personal loan?", answer: "No, it is a specific loan used only for buying or building property, usually at lower interest rates than personal loans." },
    { question: "Does the bank pay me the money?", answer: "No, the bank pays the property seller directly." },
    { question: "Does the loan cover the full price of the house?", answer: "Generally no. Banks provide 80-90% of the value. You must cover the rest plus registration and taxes." },
    { question: "Is a home loan just a debt?", answer: "While it is a liability, it's also a smart tool to acquire an asset that appreciates over time." }
  ],
  "What is EMI": [
    { question: "What does EMI stand for?", answer: "It stands for Equated Monthly Installment." },
    { question: "Why is my loan balance not decreasing fast in the first few years?", answer: "During the initial years of a home loan, a larger portion of the EMI is allocated toward interest rather than the principal amount." },
    { question: "What is a prepayment?", answer: "It is an extra amount paid over and above your regular EMI, which helps reduce the principal balance directly." },
    { question: "How does prepayment help?", answer: "It reduces the total interest you pay over the life of the loan and can shorten your loan tenure." }
  ],
  "What is Home Loan Interest Rate": [
    { question: "What exactly is a home loan interest rate?", answer: "It is the cost charged by the bank for lending you money, calculated as a percentage of the outstanding loan amount." },
    { question: "Is the lowest advertised rate always the best?", answer: "Not necessarily. You must account for processing fees, hidden charges, and whether the rate is fixed or floating." },
    { question: "How does my credit score affect my interest rate?", answer: "A high credit score gives you leverage to negotiate lower interest rates and better terms, potentially saving you lakhs over the loan tenure." },
    { question: "What is the difference between fixed and floating rates?", answer: "Fixed rates stay the same, while floating rates change based on market fluctuations, which could increase your costs later." }
  ],
  "How EMI is calculated": [
    { question: "What factors affect my Home Loan EMI?", answer: "Your EMI depends on the Principal amount, the Interest Rate, and the Loan Tenure." },
    { question: "Is a lower EMI always better?", answer: "No. A lower EMI usually means a longer tenure, which leads to paying significantly more in total interest over time." },
    { question: "How can I save money on my home loan?", answer: "By choosing the shortest tenure you can afford, you reduce the total interest paid to the bank." }
  ],
  "How loan tenure works": [
    { question: "Does a longer tenure always mean I pay more?", answer: "Yes, a longer tenure increases the time the bank charges interest on your principal, significantly raising the total cost." },
    { question: "Can I change my tenure after taking the loan?", answer: "Yes, by making pre-payments or requesting a tenure restructuring from your bank, usually when interest rates change." },
    { question: "What is the ideal tenure for a home loan?", answer: "It depends on your cash flow, but generally, the shortest tenure you can comfortably afford is the best to minimize interest." },
    { question: "How do pre-payments help?", answer: "Pre-payments go directly towards reducing the principal amount, which automatically reduces the remaining tenure and interest." }
  ],
  "Principal vs interest explained": [
    { question: "What is the difference between Principal and Interest?", answer: "Principal is the actual amount you borrowed from the bank, while Interest is the additional cost or fee you pay for the privilege of borrowing that money." },
    { question: "Why does my loan balance not decrease much in the first few years?", answer: "In the initial stage of a home loan, the EMI is structured such that a larger portion goes toward paying off the interest. As the tenure progresses, more of your EMI starts going toward the principal." },
    { question: "When is the best time to make a prepayment?", answer: "The most effective time to prepay is during the early years of the loan. Since interest is calculated on the outstanding principal, reducing the principal early significantly lowers the total interest burden." }
  ],
  "How banks give home loans": [
    { question: "What is the most important factor for home loan approval?", answer: "The bank's primary focus is risk assessment, which includes your credit score, income stability, and employment type." },
    { question: "Does a high salary ensure my loan will be approved?", answer: "Not necessarily. If you have high existing debts or credit card bills, your Debt-to-Income (DTI) ratio might be too high, leading to rejection." },
    { question: "Why do banks ask for ITR and bank statements if I have salary slips?", answer: "Banks cross-reference these documents to get a complete picture of your financial health and the balance between your earnings and expenses." },
    { question: "What should I look for besides the interest rate?", answer: "You must consider the loan tenure, processing fees, and any other hidden charges that affect the total cost of the loan." }
  ],
  "How banks calculate EMI capacity": [
    { question: "What does FOIR stand for?", answer: "FOIR stands for Fixed Obligation to Income Ratio, which banks use to determine your loan eligibility based on your existing debts." },
    { question: "Why is my loan amount lower than my eligibility calculator showed?", answer: "Most calculators don't account for your existing EMIs. Banks subtract current debts from your 50% income capacity." },
    { question: "Can I get a loan if my EMIs are 60% of my income?", answer: "Generally, no. Most banks strictly adhere to the 40-50% FOIR limit to ensure you can afford your lifestyle." }
  ],
  "FOIR explained simply": [
    { question: "What does FOIR stand for?", answer: "It stands for Fixed Obligation to Income Ratio." },
    { question: "Why do banks care about FOIR?", answer: "It helps them assess your capacity to repay a new loan without financial distress." },
    { question: "Does rent count in FOIR?", answer: "Yes, many lenders include rent in FOIR calculations, which distinguishes it from DTI." },
    { question: "What is a good FOIR for home loan approval?", answer: "Generally, a ratio between 40% and 55% is considered acceptable, but lower is always better." },
    { question: "How can I improve my FOIR?", answer: "You can improve it by closing small existing loans, paying off credit card balances, or increasing your co-applicant's income contribution." }
  ],
  "What is LTV (Loan to Value) ratio": [
    { question: "What does LTV mean in home loans?", answer: "LTV stands for Loan-to-Value ratio, which is the percentage of the property value the bank will finance." },
    { question: "Are registration fees included in the loan?", answer: "No, banks exclude stamp duty and registration fees when calculating the LTV." },
    { question: "What is the maximum LTV allowed by RBI?", answer: "Depending on the loan size, it generally ranges between 75% and 90%." },
    { question: "How can I get a lower interest rate?", answer: "By making a larger down payment and choosing a lower LTV ratio, banks often offer more competitive interest rates." }
  ],
  "Repo rate explained": [
    { question: "What is the Repo Rate?", answer: "It is the interest rate at which the RBI lends money to commercial banks for short-term needs." },
    { question: "Why did my EMI increase when the RBI raised the Repo Rate?", answer: "When banks pay more to borrow from the RBI, they increase the interest rates for their home loan customers." },
    { question: "Does a Repo Rate cut mean my EMI drops the next day?", answer: "No, the adjustment depends on your loan's reset period and benchmark (like RLLR), which can take weeks or months." },
    { question: "Can I save money when Repo Rates fall?", answer: "Yes, by refinancing your loan or opting for a balance transfer to a lower-interest lender." }
  ],
  "What is a good CIBIL score": [
    { question: "What is a good CIBIL score for a home loan?", answer: "A score of 750 or above is considered excellent and helps in getting better interest rates." },
    { question: "Why is my score different on different platforms?", answer: "It is normal; different bureaus use different calculation methods and update their data at different times." },
    { question: "What is the difference between 'Settled' and 'Closed' in a credit report?", answer: "'Settled' means you paid only a part of the debt, which hurts your score. 'Closed' means the loan was paid in full, which keeps your history clean." },
    { question: "How can I improve my credit score?", answer: "Pay EMIs on time and keep your credit utilization below 30%." }
  ],
  "How CIBIL score is calculated": [
    { question: "What is the ideal CIBIL score for a home loan?", answer: "A score of 750 or above is considered the 'gold standard' by lenders." },
    { question: "Does checking my own score reduce it?", answer: "No, that is a 'soft inquiry' and has no impact on your score." },
    { question: "Why did my score drop after applying to multiple banks?", answer: "Each application triggers a 'hard inquiry.' Multiple hard inquiries in a short time suggest credit-seeking behavior and can lower your score." },
    { question: "Is having no credit history (NA/NH) better than a low score?", answer: "Not necessarily. While it's not a reason for automatic rejection, it makes it harder for banks to assess your financial discipline due to lack of data." }
  ],
  "How to improve CIBIL score": [
    { question: "Why is my CIBIL score different on different apps?", answer: "While there are multiple credit bureaus in India, banks primarily use the CIBIL bureau for home loan assessments." },
    { question: "How long does it take for a payment to reflect in my score?", answer: "It usually takes 30 to 45 days for banks to report data and for CIBIL to update your profile." },
    { question: "Can I get a home loan if I have never taken a loan before?", answer: "Yes. RBI guidelines prevent banks from rejecting you solely for a lack of credit history. Lenders may look at utility bills or alternative data." },
    { question: "What is the ideal credit card usage?", answer: "It is recommended to keep your credit card utilization below 30% of your total limit." }
  ],
  "Hard enquiry vs soft enquiry": [
    { question: "Does checking my own credit score lower it?", answer: "No, self-checking is a 'Soft Inquiry' and has no negative impact on your score." },
    { question: "What is a Hard Inquiry?", answer: "A Hard Inquiry occurs when a lender checks your credit report to make a lending decision. This can lower your score by 5-10 points." },
    { question: "Why is applying to multiple banks bad?", answer: "This is known as 'Credit Hunger.' It makes you look desperate for funds, which can lower your score by up to 25 points." }
  ],
  "How income affects eligibility": [
    { question: "Does the bank look at my salary after tax?", answer: "No, banks generally look at your Gross Income (before tax), which can help you qualify for a higher loan amount." },
    { question: "I got a huge bonus this year; will my loan amount increase?", answer: "Not necessarily. Banks usually average your bonus and commissions over the last two years to ensure the income is stable." },
    { question: "How is income calculated for business owners?", answer: "For self-employed individuals, banks look at the Net Profit as declared in the last two years of ITR." },
    { question: "What happens if my income decreased last year?", answer: "If your income shows a downward trend, lenders will typically use the lower income figure as the basis for your loan eligibility." }
  ],
  "Age Factor in Home Loan Approval": [
    { question: "Does being 50 years old mean I can't get a home loan?", answer: "No, you can still get a loan, but your tenure will typically be limited to the years remaining until your retirement." },
    { question: "How does a longer tenure help me?", answer: "A longer tenure spreads the principal across more months, which significantly reduces your monthly EMI." },
    { question: "Can I increase my loan tenure if I am older?", answer: "Yes, by adding a younger earning co-applicant, banks may extend the tenure based on the younger person's retirement age." },
    { question: "Is age the only factor banks consider?", answer: "No; while age is crucial for tenure, repayment capacity and income stability are the primary factors for approval." }
  ],
  "How Much Home Loan Can I Get on My Salary": [
    { question: "How do banks calculate my home loan limit?", answer: "Banks primarily use a multiplier method, usually offering 4-5 times your annual income." },
    { question: "Does my credit score affect the loan amount?", answer: "Yes; along with salary, banks check your credit score, age, and job stability." },
    { question: "Can I get a higher loan if my salary is low?", answer: "Yes, adding an earning family member as a co-applicant can increase your eligibility." },
    { question: "What if I have an existing car loan?", answer: "Existing EMIs reduce your repayment capacity, which may lower the home loan amount you are eligible for." }
  ],
  "Fixed vs floating interest rate": [
    { question: "What is the main benefit of a Fixed Interest Rate?", answer: "It provides predictability and security, as your EMI remains unchanged regardless of market fluctuations." },
    { question: "Can a Floating Rate EMI decrease?", answer: "Yes, if market benchmark rates drop, your EMI or loan tenure may decrease." },
    { question: "Why do first-time buyers prefer Fixed Rates?", answer: "During market uncertainty, Fixed Rates allow borrowers to stay sure of their monthly budget." },
    { question: "Is a Floating Rate always cheaper than a Fixed Rate?", answer: "No, this is a common misconception; if interest rates rise, Floating Rates can eventually exceed Fixed Rates." }
  ],
  "Why two people get different rates": [
    { question: "Why is my home loan interest rate higher than my friend's at the same bank?", answer: "Banks personalize rates based on your specific CIBIL score, job stability, and the amount of down payment you provide." },
    { question: "What is a good CIBIL score for a home loan?", answer: "A score of 750 or above is considered excellent and helps in securing the lowest interest rates." },
    { question: "How does down payment affect my interest rate?", answer: "A higher down payment reduces the 'Loan-to-Value' (LTV) ratio, which lowers the bank's risk; they often reward this with a lower interest rate." }
  ],
  "Why different banks give different rates": [
    { question: "Why does my friend have a lower rate with the same salary?", answer: "Salary is only one factor; your CIBIL score, the bank's cost of funds, and their specific profit margins (spread) also play a role." },
    { question: "What is 'Cost of Funds'?", answer: "It is the expense incurred by a bank to acquire the money they lend out." },
    { question: "Does a high CIBIL score really lower my interest rate?", answer: "Yes, a higher score reduces the perceived risk for the bank, often resulting in better rate offers." },
    { question: "Is the Repo Rate the only thing that matters?", answer: "No, the repo rate is the base; banks add their own 'spread' on top of it." }
  ],
  "When floating rate is better": [
    { question: "What exactly is a floating interest rate?", answer: "It is a home loan interest rate that is not fixed and changes based on RBI policy shifts and market conditions." },
    { question: "How does the RBI affect my loan?", answer: "When the RBI changes the repo rate, banks typically adjust their floating interest rates, which directly impacts your loan cost." },
    { question: "Will my EMI increase if interest rates go up?", answer: "It depends on your bank; they may either increase your monthly EMI amount or extend the total tenure of your loan." },
    { question: "Is a floating rate better than a fixed rate?", answer: "Floating rates are beneficial when market interest rates are falling, but they carry more risk if rates rise." }
  ],
  "How 0.1% impacts total cost": [
    { question: "Is a 0.1% difference really significant for a home loan?", answer: "Yes, on a 150 Lakh loan over 20 years, a 0.1% difference can save you approximately ₹1,65,000 in total interest." },
    { question: "Why should I look at the total cost instead of just the EMI?", answer: "EMI differences might look small (₹400-500), but the total cost reveals the massive cumulative impact over several decades." },
    { question: "How can I lower my interest rate?", answer: "Maintain a high credit score and use comparison tools to negotiate with different lenders." }
  ],
  "Why initial EMIs are mostly interest": [
    { question: "What is the Reducing Balance Method?", answer: "It is a system where interest is calculated on the remaining loan amount at the end of every period, rather than the initial loan amount." },
    { question: "Why is my loan principal reducing so slowly at first?", answer: "Because the outstanding balance is high at the start, the interest component consumes most of your EMI." },
    { question: "When is the best time to prepay a home loan?", answer: "As early as possible; prepaying in the first 5 years saves significantly more interest than prepaying in the last 5 years." }
  ],
  "Home loan application process": [
    { question: "How long does the home loan process take?", answer: "It typically takes 10 to 15 working days from document submission to the final sanction, depending on the bank and property verification." },
    { question: "What is the most critical stage of the process?", answer: "The Sanction stage is vital as it confirms the bank's willingness to lend, but Disbursement is equally critical as it involves the actual transfer of funds." },
    { question: "Can I change my loan amount after sanction?", answer: "Yes, but it may require a re-evaluation of your eligibility and might involve additional processing time." },
    { question: "Do I need to visit the bank personally?", answer: "While many stages are now digital, a physical visit is often required for the final signing of the loan agreement." }
  ],
  "Reasons why banks reject loans": [
    { question: "Can my loan be rejected even with a high salary?", answer: "Yes; high existing debts (DTI ratio), a poor credit score, or issues with the property's legal titles can lead to rejection." },
    { question: "How does a low credit score affect my application?", answer: "It can either lead to an outright rejection or result in the bank offering a much higher interest rate." },
    { question: "What should I do if my loan is rejected?", answer: "Identify the specific reason (like FOIR or credit score), work on rectifying it, and wait at least 6 months before applying again." },
    { question: "Does my employer's reputation matter?", answer: "Yes; banks prefer applicants from stable, well-known companies as it reduces the perceived risk of income instability." }
  ],
  "What is processing fee": [
    { question: "Is the processing fee refundable?", answer: "Generally, no. Most banks retain the fee even if the loan is not sanctioned or if you choose not to take the loan." },
    { question: "Can I negotiate the processing fee?", answer: "Yes, especially during festive seasons or if you have a strong credit profile and a high loan amount." },
    { question: "Is the fee a fixed amount or a percentage?", answer: "It is usually a percentage (0.25% to 1%) of the loan amount, though some banks may have a capped maximum or a flat fee." },
    { question: "Do I have to pay the fee upfront?", answer: "Yes, most lenders require the processing fee at the time of submitting your application." }
  ],
  "MOD charges explained": [
    { question: "What does MOD stand for?", answer: "Memorandum of Deposit of Title Deeds. It is the formal registration of the bank's right over your property." },
    { question: "Is the MOD charge the same in every state?", answer: "No; it varies significantly as it is a state-level stamp duty." },
    { question: "Do I have to pay MOD charges every year?", answer: "No, it is a one-time charge paid at the time of loan disbursement." },
    { question: "Is MOD mandatory for all home loans?", answer: "Yes, it is the legal process that creates the mortgage and secures the bank's interest." }
  ],
  "Disbursement explained": [
    { question: "When does EMI start for an under-construction property?", answer: "EMI does not necessarily start after possession. Interest (Pre-EMI) typically begins from the day the first portion of the loan is disbursed to the builder." },
    { question: "Does the bank give the full loan amount at once?", answer: "Not always. For under-construction properties, banks release funds in 'tranches' or stages based on the progress of construction." },
    { question: "What is a partial disbursement?", answer: "It is the release of a portion of the total sanctioned loan amount, common in projects where the builder is paid as they complete specific floors or milestones." }
  ],
  "What is Pre-EMI (during construction property)": [
    { question: "What is Pre-EMI?", answer: "It is the interest payable on the loan amount disbursed by the bank to the builder during the construction phase." },
    { question: "Does Pre-EMI reduce my loan amount?", answer: "No, Pre-EMI only covers the interest. Your principal amount remains the same until full EMIs begin." },
    { question: "Who should choose Pre-EMI?", answer: "It is ideal for individuals currently paying rent who cannot afford a full EMI until they move into their new home." },
    { question: "When does the actual loan tenure start?", answer: "The actual tenure and principal repayment usually start after the property possession when full EMIs begin." }
  ],
  "Buying resale property with home loan": [
    { question: "Will the bank give me a loan based on the price I agreed with the seller?", answer: "No. Banks conduct their own independent valuation. If the bank's valuation is lower than your agreement price, they will only lend a percentage of their own lower valuation." },
    { question: "What is a 'document chain'?", answer: "It is the sequence of all previous Sale Deeds for the property. For a resale loan, you must provide every original agreement from the first owner to the current seller." },
    { question: "Is an NOC from the housing society mandatory?", answer: "Yes. Lenders require an NOC from the society to ensure there are no outstanding dues and the transfer of ownership is permitted." }
  ],
  "Can you get home loan for old property": [
    { question: "Is there an age limit for the property to get a loan?", answer: "Yes. Banks evaluate the structural health and remaining life of the building. If a building is extremely old or in poor condition, the loan may be rejected regardless of your income." },
    { question: "Are interest rates higher for old properties?", answer: "Generally, the interest rates are the same as for new homes. However, the loan amount (LTV) might be lower, requiring a larger down payment." },
    { question: "Does the seller's price matter for the loan amount?", answer: "No. The loan is calculated based on the bank's technical valuation of the property's current market worth." }
  ],
  "Plot loan vs home loan": [
    { question: "Can I get tax benefits on a plot loan?", answer: "No. Tax benefits are only available for 'house property'. You can only claim deductions once you start construction on the plot." },
    { question: "How is the money paid out in a plot loan?", answer: "For just the land, it is usually a lump sum to the seller. If the loan includes construction, the construction part is paid in stages as the building progresses." },
    { question: "Can I use a plot loan to buy a ready-made flat?", answer: "No. A plot loan is strictly for purchasing a piece of land. For a flat, you must apply for a standard Home Loan." }
  ],
  "Managing EMIs smartly": [
    { question: "How can I save money on my home loan without a large lump sum?", answer: "You can save significantly by paying just one extra EMI per year, which can reduce a 20-year loan by approximately 4 years." },
    { question: "Should I increase my EMI if my salary increases?", answer: "Yes, voluntarily increasing your EMI by 5-10% after an annual appraisal is a smart way to close the loan faster." },
    { question: "How often should I do a 'Loan Health Check'?", answer: "It is recommended to evaluate your loan every 3 years to compare your current rate with market offers for potential refinancing." }
  ],
  "How to reduce EMI legally": [
    { question: "Why is most of my early EMI going toward interest?", answer: "This is due to the Reducing Balance Method, where interest is calculated on the high outstanding principal at the start of the loan." },
    { question: "How can I 'kill' future interest costs?", answer: "Making early prepayments (especially in the first 3-5 years) directly reduces the principal, which slashes the base for future interest calculations." },
    { question: "Is there a penalty for prepaying a floating-rate loan?", answer: "Usually, there is zero penalty for prepaying floating-rate home loans." }
  ],
  "How part-payment works": [
    { question: "Does part-payment automatically reduce my loan principal?", answer: "No. You must explicitly instruct your bank that the lump sum is a 'Part Pre-payment towards the Principal'." },
    { question: "Which is better: EMI reduction or Tenure reduction?", answer: "Tenure reduction is generally recommended because it results in the highest overall interest savings." },
    { question: "When is the best time to make a part-payment?", answer: "Making these moves in the early years of your loan cycle provides the biggest financial impact." }
  ],
  "When prepayment is good": [
    { question: "Does prepayment reduce my future interest?", answer: "Yes, because it directly lowers the principal amount upon which future interest is calculated." },
    { question: "Do I need a large amount to start prepaying?", answer: "No, even paying one additional EMI amount per year can make a massive difference in your loan tenure." },
    { question: "What happens to my loan balance after a prepayment?", answer: "Your outstanding principal decreases, and you can choose to either lower your monthly EMI or shorten the remaining tenure." }
  ],
  "When prepayment is bad": [
    { question: "When is it a mistake to prepay a home loan?", answer: "If you can earn a higher return (e.g., 12-14%) by investing the money elsewhere than the interest you save (e.g., 8.5%), prepayment may be a loss." },
    { question: "Does prepaying affect my tax benefits?", answer: "Yes, reducing your interest payments through prepayment may decrease the tax deductions you can claim under Section 24B." },
    { question: "Should I prepay my home loan if I have credit card debt?", answer: "No. You should prioritize clearing high-interest debt like credit cards (often 25%+) before prepaying a lower-interest home loan." }
  ],
  "Taking high EMI – risks": [
    { question: "What is a safe EMI limit?", answer: "A stress-free EMI is ideally less than 40% of your net monthly income." },
    { question: "What are the risks of a very high EMI?", answer: "It can lead to a tight monthly budget, constant financial stress, stalled savings/investments, and potential reliance on high-interest debt for emergencies." },
    { question: "Should I have an emergency fund before increasing my EMI?", answer: "Yes, you should ensure you have a 6-month emergency fund before committing to a higher EMI." }
  ],
  "Balance transfer explained": [
    { question: "What is a Home Loan Balance Transfer?", answer: "It is the process of moving your existing home loan from one bank to another to benefit from a lower interest rate." },
    { question: "Will it really save me money?", answer: "Yes, even a small reduction in interest rates can save you lakhs of rupees over the remaining tenure of your loan." },
    { question: "What costs should I look out for?", answer: "Always consider processing fees, legal charges, and any hidden costs before switching." }
  ],
  "When to switch bank": [
    { question: "Is it always profitable to switch banks for a lower interest rate?", answer: "Not always. You must calculate the total cost of the transfer to ensure the interest savings outweigh these expenses." },
    { question: "How much of a rate difference justifies a balance transfer?", answer: "Generally, a difference of at least 0.5% is recommended to make the switch financially viable." },
    { question: "Can I switch my loan if I have only 2 years of tenure left?", answer: "It is usually not recommended. Balance transfers are most effective when you have a significant remaining tenure to recover the transfer costs." }
  ],
  "Loan top-up explained": [
    { question: "Is a top-up loan only for home renovation?", answer: "No, it is a multi-purpose loan. You can use the funds for education, business expansion, or even medical emergencies." },
    { question: "How is the top-up loan amount calculated?", answer: "It is typically based on the difference between the current market value of your property and your outstanding loan balance." },
    { question: "Are top-up loans cheaper than personal loans?", answer: "Yes, because they are secured against your property, the interest rates are significantly lower than unsecured personal loans." }
  ],
  "EMI missed – what happens": [
    { question: "What happens if I miss an EMI payment?", answer: "Missing an EMI leads to late payment charges, negative impact on credit score, and potential legal action if defaults continue." },
    { question: "What is the 90-day rule?", answer: "A loan is categorized as a Non-Performing Asset (NPA) only after 90 consecutive days of non-payment." },
    { question: "How can I avoid a bounce if I'm short on funds?", answer: "Always maintain an EMI buffer of at least 2 months and communicate with your bank before the bounce happens to explore restructuring options." }
  ],
  "What happens to loan if borrower dies": [
    { question: "Does a home loan disappear after the owner's death?", answer: "No, the loan liability transfers to the legal heirs who inherit the property." },
    { question: "Will the bank take my house immediately?", answer: "Not if you communicate with them. Heirs are protected and can usually transfer the loan to their own name." },
    { question: "Should I wait for the 'Probate' or 'Will' before paying the next EMI?", answer: "Absolutely not. Continue paying EMIs during legal processing to avoid penalties and loan default." }
  ],
  "What happens if you lose your job during loan": [
    { question: "When is a home loan considered a default?", answer: "A loan is categorized as a Non-Performing Asset (NPA) only after 90 consecutive days of non-payment." },
    { question: "Can I skip EMIs if I lose my job?", answer: "You can request a 'moratorium' or EMI holiday from your bank, but it's subject to their approval and terms." },
    { question: "Will the bank take my house immediately?", answer: "No, seizure is the last resort. Banks prefer to recover the money through restructuring the loan." }
  ],
  "Co-borrower liability explained": [
    { question: "Is the co-applicant only responsible if the main borrower dies?", answer: "No. It is a shared liability. Both parties are equally responsible for every EMI from day one." },
    { question: "Does an EMI bounce affect the co-applicant's CIBIL score?", answer: "Yes, a single missed payment negatively impacts the credit scores of both the primary borrower and the co-applicant." },
    { question: "Can any friend be a co-applicant?", answer: "No, banks generally only allow immediate family members (spouse, parents, children) to be co-applicants in a home loan." }
  ],
  "Should you close loan early or invest": [
    { question: "What is the math behind loan vs investment?", answer: "If your home loan interest rate is lower than your potential investment returns (e.g., 12-14% from long-term equity SIPs), mathematically it makes more sense to invest the extra cash." },
    { question: "What is the 'Hybrid Approach'?", answer: "A strategy where you split extra funds 50/50—using half to prepay the loan for peace of mind and the other half to invest in SIPs for long-term wealth." },
    { question: "Is there a danger to having zero liquidity?", answer: "Yes. Putting all your extra cash into a house means you cannot easily access it for medical or other emergencies." }
  ],
  "Home loan vs renting": [
    { question: "Are you building your asset or your landlord's?", answer: "Rent is a 100% expense that builds no wealth for you, whereas a home loan EMI builds your ownership in a property over time." },
    { question: "What are the trade-offs between renting and buying?", answer: "Renting offers flexibility to change jobs or cities easily, while buying provides long-term stability, asset appreciation, and significant tax benefits." },
    { question: "How do I decide which is right for me?", answer: "It depends on your career stability, whether you have saved for a down payment, and if tax deductions will significantly lower your tax liability." }
  ],
  "Who should take a home loan": [
    { question: "Who is a home loan truly meant for?", answer: "It is for individuals with a stable income who are ready for a long-term (15-20 year) financial commitment to build a permanent asset." },
    { question: "What is the '30-40% Rule'?", answer: "A simple way to ensure your EMI is manageable is to keep it within 30-40% of your net monthly pay so it doesn't swallow your entire savings." },
    { question: "Should I take the 'Max Limit' offered by the bank?", answer: "No. Just because a bank offers a high limit doesn't mean you should take it. You must evaluate your own affordability and future life goals first." }
  ],
  "Single income vs joint loan": [
    { question: "What is the biggest advantage of a joint home loan?", answer: "It significantly boosts your loan eligibility because the bank considers the combined income of both applicants." },
    { question: "Do joint loans have lower interest rates?", answer: "Not necessarily. Rates still depend on credit scores, but your chances of approval are much higher with a joint application." },
    { question: "Can both co-applicants claim tax benefits?", answer: "Yes. If both are co-owners and co-applicants, both can claim deductions, effectively doubling the household's tax savings." }
  ],
  "Tax benefit u/s 24b": [
    { question: "What is the difference between Section 80C and Section 24b?", answer: "Section 80C covers the Principal part of your EMI (up to ₹1.5 Lakh), while Section 24b covers the Interest part (up to ₹2 Lakh for self-occupied homes)." },
    { question: "Can I claim tax benefits while the house is under construction?", answer: "No. You can only start claiming these deductions after you receive the Possession Certificate." },
    { question: "What is the '5-Year Rule' for Section 80C?", answer: "If you sell the house within 5 years of getting possession, all previous 80C deductions claimed will be added back to your income and taxed in the year of sale." }
  ],
  "Tax benefit for joint home loan": [
    { question: "Can both co-applicants claim the full tax deduction?", answer: "Yes. Each co-owner/co-applicant can individually claim up to ₹1.5 Lakh under Section 80C and ₹2 Lakh under Section 24b." },
    { question: "Is being a co-borrower enough to claim tax benefits?", answer: "No. To legally claim deductions, you must be both a co-borrower and a legal co-owner of the property." },
    { question: "How should we pay the EMI to ensure tax compliance?", answer: "It is best practice to use a Joint Bank Account for repayments to provide clear proof of contribution for both parties." }
  ],
  "Tax benefit on second home loan": [
    { question: "Can I claim two houses as 'Self-Occupied'?", answer: "Yes, under Budget 2025 rules, you can claim 'Nil' annual value for two self-occupied properties." },
    { question: "Does having two loans double my Section 80C limit?", answer: "No. The Section 80C limit for principal repayment remains capped at ₹1.5 Lakh total." },
    { question: "Which tax regime is better for a second home?", answer: "Generally, the Old Tax Regime is better as the New Tax Regime does not allow deductions for home loan interest on self-occupied properties." }
  ],
  "How to close home loan": [
    { question: "Is my loan officially closed once I pay the last EMI?", answer: "No. Paying the money is just the first step. You must retrieve your original deeds and ensure the bank's 'lien' is removed from government records." },
    { question: "What is a 'Lien'?", answer: "A lien is the bank's legal claim on your property. You must visit the Registrar's office to formally remove this charge." },
    { question: "How long should I wait to check my CIBIL after closing the loan?", answer: "Wait about 30-45 days for the bank to report the closure to the credit bureaus." }
  ],
  "What is NOC": [
    { question: "What does the NOC from a bank confirm?", answer: "The No Objection Certificate (NOC) is a legal document confirming you have paid the full loan amount and the bank no longer has any rights over your property." },
    { question: "Can I sell my house without an NOC?", answer: "No. A buyer's bank will require a clear title, and without an NOC, the property is still legally 'mortgaged'." },
    { question: "What if the bank loses my original documents?", answer: "You should immediately demand a digitally signed copy and have the bank initiate the process of getting 'Certified True Copies' at their own cost." }
  ],
  "INDEX2 VERY IMPORTANT DOCUMENT": [
    { question: "Is Index 2 the same as a Title Deed?", answer: "No. While it is a crucial official summary used by banks to verify ownership, it is a secondary record. You must always keep your primary Title Deed safe." },
    { question: "What details are included in the Index 2 document?", answer: "It contains the property size, location, buyer and seller names, and details of the loan amount or mortgage." },
    { question: "How can I get a copy of Index 2?", answer: "You can usually download a certified copy from your state's official land records portal." }
  ],
  "TDS 1% deduction above 50 LAC": [
    { question: "Does the bank handle the 1% TDS for me?", answer: "No. It is the buyer's legal duty to deduct the amount and pay it to the government." },
    { question: "What charges are included in the TDS calculation?", answer: "You must calculate 1% on the total consideration, which includes the base price, parking, and clubhouse fees, but excludes GST." },
    { question: "What happens if I forget to deduct TDS?", answer: "Failure to deduct or deposit TDS can lead to heavy penalties from the Income Tax Department." }
  ],
  "Home Loan Insurance – Mandatory or Optional": [
    { question: "Is it legally mandatory to buy Home Loan Insurance to get a loan?", answer: "No. According to RBI guidelines, home loan insurance is NOT compulsory. It is an optional choice for financial security." },
    { question: "Can the bank force me to buy insurance from them?", answer: "No. You have the right to buy insurance from any provider you choose." },
    { question: "Does my existing life insurance count?", answer: "Yes, if you already have a term plan with sufficient sum assured to cover your debts, you may not need additional home loan insurance." }
  ],
  "Term insurance vs home loan insurance": [
    { question: "What is the main difference between Term Insurance and Home Loan Insurance?", answer: "Home Loan Insurance covers only the outstanding loan amount (decreasing cover), whereas Term Insurance provides a fixed life cover that remains the same regardless of your loan balance." },
    { question: "Who gets the money if something happens to the borrower?", answer: "With Home Loan Insurance, the payout goes directly to the bank to clear the debt. With Term Insurance, the money goes to the family." },
    { question: "What happens to the insurance if I transfer my loan to another bank?", answer: "Term Insurance stays with you, but Home Loan Insurance is often tied to the specific lender and may not be portable." }
  ],
  "First-time buyer mistakes": [
    { question: "When should I check my CIBIL score?", answer: "Check it before you start property hunting. Waiting until the last moment can lead to rejection if there are errors or if your score is below 750." },
    { question: "How much extra should I budget beyond the property price?", answer: "You should budget an additional 15-20% for 'hidden' costs like stamp duty, registration, processing fees, brokerage, and interiors." },
    { question: "Should I just pick the bank with the lowest interest rate?", answer: "No. You must look at the Total Cost of Credit, which includes the interest rate plus processing fees, legal charges, and insurance costs." }
  ],
  "What to Ask Before Signing": [
    { question: "What is the most important question to ask about a floating rate?", answer: "Ask which benchmark the rate is linked to (e.g., Repo Rate) and how often the rate is reset." },
    { question: "Should I worry about the 'Fine Print' regarding penalties?", answer: "Absolutely. Specifically ask about Late Payment Penalties and whether there are any charges for making prepayments or closing the loan early." },
    { question: "Why does the interest rate type matter for the long term?", answer: "Because a home loan is a 20-year commitment; choosing between Fixed and Floating will determine how much your monthly budget might fluctuate in the future." }
  ],
  "Negotiation with banks": [
    { question: "Can I really negotiate the interest rate with a bank?", answer: "Yes, especially if you have a CIBIL score of 750+. Banks are often willing to lower rates or waive fees to acquire a 'low-risk' borrower." },
    { question: "What charges are most flexible for negotiation?", answer: "Processing fees and legal/technical charges are the easiest to get waived or reduced." },
    { question: "How can I increase my bargaining power?", answer: "Show up with competitive quotes from at least 2-3 other lenders. Banks often match or beat competitor offers to keep a good customer." }
  ]
};

// Helper function to get FAQs for an audio
const getFaqsForAudio = (audioTitle) => {
  return audioFaqMap[audioTitle] || [];
};

// Video Library Data
const videoLibraryData = [
  { id: 1, title: "MCLR vs EBLR Explained", duration: "15:30", category: "3. Interest Rates & EMI Concepts", thumbnail: "/thumbnails/mclr-vs-eblr.jpg", desc: "Understanding the difference between MCLR and EBLR" },
  { id: 2, title: "Foreclosure Negotiations", duration: "18:45", category: "12. Loan Closure", thumbnail: "/thumbnails/foreclosure.jpg", desc: "How to negotiate foreclosure terms with your bank" },
  { id: 3, title: "10% Prepayment Formula", duration: "12:20", category: "7. Managing a Home Loan", thumbnail: "/thumbnails/prepayment.jpg", desc: "Smart prepayment strategies to save interest" },
  { id: 4, title: "Debt Trap Recovery", duration: "22:10", category: "9. Risks & Real-Life Situations", thumbnail: "/thumbnails/debt-trap.jpg", desc: "How to recover from a debt trap situation" },
  { id: 5, title: "CIBIL Score Improvement", duration: "14:35", category: "2. Eligibility & Credit Score", thumbnail: "/thumbnails/cibil.jpg", desc: "Practical tips to improve your credit score" },
  { id: 6, title: "Tax Benefits Maximization", duration: "16:40", category: "11. Tax Benefits", thumbnail: "/thumbnails/tax-benefits.jpg", desc: "Maximize your tax benefits under section 24b" },
  { id: 7, title: "Balance Transfer Process", duration: "13:25", category: "8. Loan Transfers & Top Ups", thumbnail: "/thumbnails/balance-transfer.jpg", desc: "Step-by-step guide to home loan balance transfer" },
  { id: 8, title: "Property Legal Verification", duration: "19:50", category: "13. Legal Documentation", thumbnail: "/thumbnails/legal-verification.jpg", desc: "Ensure your property has clear legal title" },
];

// ==================== MAIN COMPONENT ====================
const EducationCenter = () => {
  // State Management
  const [activeTab, setActiveTab] = useState("audio");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isProUser, setIsProUser] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [currentAudioFaqs, setCurrentAudioFaqs] = useState([]);
  const [openCategories, setOpenCategories] = useState({});
  
  // Refs
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const faqContainerRef = useRef(null);
  
  // Get unique categories
  const categories = [...new Set(audioLibraryData.map(item => item.category))];
  const sortedCategories = categories.sort((a, b) => {
    const numA = parseInt(a.split('.')[0]);
    const numB = parseInt(b.split('.')[0]);
    return numA - numB;
  });
  
  // Pagination Constants
  const categoriesPerPage = 8;
  const totalCategoryPages = Math.ceil(sortedCategories.length / categoriesPerPage);
  const startCategoryIndex = (currentPage - 1) * categoriesPerPage;
  const endCategoryIndex = startCategoryIndex + categoriesPerPage;
  const currentCategories = sortedCategories.slice(startCategoryIndex, endCategoryIndex);
  
  const videosPerPage = 8;
  const totalVideoPages = Math.ceil(videoLibraryData.length / videosPerPage);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const videoStartIndex = (currentVideoPage - 1) * videosPerPage;
  const videoEndIndex = videoStartIndex + videosPerPage;
  const currentVideos = videoLibraryData.slice(videoStartIndex, videoEndIndex);

  // Initialize all categories as open by default
  useEffect(() => {
    const initialOpenState = {};
    sortedCategories.forEach(category => {
      initialOpenState[category] = true;
    });
    setOpenCategories(initialOpenState);
  }, []);

  // Update FAQs when current audio changes
  useEffect(() => {
    if (currentAudio) {
      const faqs = getFaqsForAudio(currentAudio.title);
      setCurrentAudioFaqs(faqs);
      setOpenFaqId(null);
    } else {
      setCurrentAudioFaqs([]);
    }
  }, [currentAudio]);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Pro Access Check
  useEffect(() => {
    checkProAccess();
    
    const handleSubscriptionUpdate = (event) => {
      if (event.detail?.isPro === true) {
        checkProAccess();
      }
    };
    
    window.addEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    
    return () => {
      window.removeEventListener("subscriptionUpdated", handleSubscriptionUpdate);
    };
  }, []);

  const checkProAccess = async () => {
    setIsCheckingAccess(true);
    try {
      const token = localStorage.getItem("token");
      
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      if (isProLocal) {
        setIsProUser(true);
        setIsCheckingAccess(false);
        return;
      }
      
      if (!token) {
        setIsProUser(false);
        setIsCheckingAccess(false);
        return;
      }
      
      const response = await axios.get(
        "https://backend.quickhomeloan.in/public/api/check-access",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.data && response.data.access === true) {
        setIsProUser(true);
        localStorage.setItem("is_pro_user", "true");
      } else {
        setIsProUser(false);
        localStorage.setItem("is_pro_user", "false");
      }
    } catch (error) {
      console.error("Error checking pro access:", error);
      const isProLocal = localStorage.getItem("is_pro_user") === "true";
      setIsProUser(isProLocal);
    } finally {
      setIsCheckingAccess(false);
    }
  };

  // Audio Player Controls
  const handlePlayPause = (audio) => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    
    if (currentAudio?.id === audio.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentAudio(audio);
      setCurrentTime(0);
      setDuration(0);
      setTimeout(() => {
        audioRef.current.load();
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }, 100);
    }
  };

  const handleStop = () => {
    if (!isProUser && !isCheckingAccess) return;
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (!isProUser && !isCheckingAccess) return;
    
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToVideoPage = (page) => {
    setCurrentVideoPage(page);
  };

  // Video Controls
  const handleWatchVideo = (video) => {
    if (!isProUser && !isCheckingAccess) {
      alert("This feature requires a Pro subscription. Please upgrade to continue.");
      return;
    }
    setSelectedVideo(video);
    setIsVideoPlaying(true);
  };

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsVideoPlaying(false);
  };

  // Get category display name
  const getCategoryDisplayName = (category) => {
    if (category === "all") return "All Categories";
    const parts = category.split('. ');
    return parts.length > 1 ? parts[1] : category;
  };

  const getAudioItemsForCategory = (category) => {
    return audioLibraryData.filter(item => item.category === category);
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Upgrade Banner Component
  const UpgradeBanner = () => (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-6">
      <div className="flex items-center gap-3 mb-3">
        <Lock size={24} className="text-indigo-600" />
        <h4 className="text-[16px] font-bold text-indigo-900">Unlock Full Education Center</h4>
      </div>
      <p className="text-[13px] text-indigo-800 mb-4">
        Get access to all {audioLibraryData.length}+ audio lessons, video masterclasses, and complete educational content.
      </p>
      <button 
        className="w-full bg-indigo-600 text-white py-2.5 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition"
        onClick={() => {
          window.dispatchEvent(new CustomEvent("openProModal"));
        }}
      >
        Upgrade to Pro
      </button>
    </div>
  );

  // Update audio element when current audio changes
  useEffect(() => {
    if (currentAudio && audioRef.current) {
      audioRef.current.load();
    }
  }, [currentAudio]);

  return (
    <main className="flex-1 py-6 overflow-x-hidden bg-white text-black">
      <audio
        ref={audioRef}
        src={currentAudio?.file}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="max-w-7xl mx-auto space-y-8 pb-20 font-sans">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-[20px] font-semibold text-neutral-900">
              Education Center
            </h2>
            <p className="text-[14px] text-neutral-600 mt-1">
              Complete home loan education - from basics to advanced concepts
            </p>
          </div>

          <div className={`border px-5 py-3 rounded-md flex items-center gap-3 shadow-sm ${
            isProUser 
              ? "bg-green-50 border-green-200" 
              : "bg-white border-neutral-300"
          }`}>
            <GraduationCap size={20} className={isProUser ? "text-green-700" : "text-neutral-700"} />
            <span className={`text-[12px] font-semibold uppercase tracking-widest ${
              isProUser ? "text-green-700" : "text-neutral-700"
            }`}>
              {isCheckingAccess ? "Checking Access..." : (isProUser ? "Pro Plan Active" : "Pro Plan Required")}
            </span>
          </div>
        </div>

        {/* Tab Toggle */}
        {/* <div className="flex gap-2 p-1 bg-white rounded-lg border border-neutral-300 w-fit">
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-[14px] font-bold transition-all ${
              activeTab === "audio"
                ? "bg-black text-white shadow-md"
                : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <BookOpen size={18} />
            Audio Book Library
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-[14px] font-bold transition-all ${
              activeTab === "video"
                ? "bg-black text-white shadow-md"
                : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <CirclePlay size={18} />
            Video Masterclass
          </button>
        </div> */}

        {/* Upgrade Banner */}
        {!isProUser && !isCheckingAccess && <UpgradeBanner />}

        {/* ==================== AUDIO TAB ==================== */}
        {activeTab === "audio" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Audio Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured Section */}
              <div className={`border rounded-lg p-8 shadow-sm relative ${
                isProUser ? "bg-white border-neutral-300" : "bg-neutral-50 border-neutral-200"
              }`}>
                <div className="absolute right-6 top-6 opacity-10">
                  <Headphones size={96} />
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-700">
                      Start Your Journey
                    </span>
                    <h3 className="text-[22px] font-semibold mt-1 text-neutral-900">
                      Complete Home Loan Education
                    </h3>
                    <p className="text-[14px] text-neutral-600 max-w-md mt-2 leading-relaxed">
                      Follow the structured learning path from basics to advanced topics
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <button 
                      onClick={() => handlePlayPause(audioLibraryData[0])}
                      disabled={!isProUser || isCheckingAccess}
                      className={`px-8 py-3 rounded-md font-bold flex items-center gap-3 shadow-md ${
                        isProUser && !isCheckingAccess
                          ? "bg-black hover:bg-neutral-800 text-white"
                          : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                      }`}
                    >
                      {!isProUser && !isCheckingAccess ? (
                        <>
                          <Lock size={18} />
                          Upgrade to Play
                        </>
                      ) : isPlaying && currentAudio?.id === audioLibraryData[0]?.id ? (
                        <>
                          <Pause size={18} />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play size={18} />
                          Start Learning
                        </>
                      )}
                    </button>

                    {currentAudio && isProUser && (
                      <button
                        onClick={handleStop}
                        className="bg-neutral-100 hover:bg-neutral-200 text-black px-4 py-3 rounded-md font-bold flex items-center gap-2"
                      >
                        <Square size={18} />
                        Stop
                      </button>
                    )}

                    <div className="flex items-center gap-2 text-neutral-500 text-[12px]">
                      <Volume2 size={14} />
                      24kHz HD Audio
                    </div>
                  </div>

                  {currentAudio && isProUser && (
                    <div className="text-[12px] text-neutral-600">
                      Now playing: <span className="font-medium">{currentAudio.title}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Audio Categories with Pagination */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
                    Learning Modules
                  </h4>
                  {totalCategoryPages > 1 && (
                    <span className="text-[12px] text-neutral-500">
                      Page {currentPage} of {totalCategoryPages}
                    </span>
                  )}
                </div>

                {currentCategories.map((category) => {
                  const audioItems = getAudioItemsForCategory(category);
                  const isCurrentAudio = currentAudio && audioItems.some(item => item.id === currentAudio.id);
                  const progressPercent = isCurrentAudio && duration > 0 
                    ? (currentTime / duration) * 100 
                    : 0;
                  const isCategoryOpen = openCategories[category];

                  return (
                    <div key={category} className="border rounded-lg overflow-hidden shadow-sm">
                      {/* Category Header - Clickable to toggle */}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full bg-neutral-50 px-5 py-3 border-b border-neutral-200 hover:bg-neutral-100 transition-colors flex justify-between items-center group"
                      >
                        <div className="text-left">
                          <h3 className="text-[16px] font-semibold text-neutral-900">
                            {getCategoryDisplayName(category)}
                          </h3>
                          <p className="text-[12px] text-neutral-500 mt-0.5">
                            {audioItems.length} lessons • Total: {audioItems.reduce((total, item) => {
                              const [mins] = item.duration.split(':').map(Number);
                              return total + mins;
                            }, 0)} min
                          </p>
                        </div>
                        <div className="text-neutral-400 group-hover:text-neutral-600 transition-colors">
                          {isCategoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {/* Audio Items List - Collapsible */}
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isCategoryOpen ? "max-h-[2000px]" : "max-h-0"
                      }`}>
                        <div className="divide-y divide-neutral-100">
                          {audioItems.map((item) => {
                            const isItemCurrent = currentAudio?.id === item.id;
                            const isItemPlaying = isItemCurrent && isPlaying;

                            return (
                              <div key={item.id} className="p-4 hover:bg-neutral-50 transition">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="flex gap-1">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handlePlayPause(item);
                                        }}
                                        disabled={!isProUser || isCheckingAccess}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                          isProUser && !isCheckingAccess
                                            ? "bg-black text-white hover:bg-neutral-800"
                                            : "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                                        }`}
                                      >
                                        {!isProUser && !isCheckingAccess ? (
                                          <Lock size={12} />
                                        ) : isItemPlaying ? (
                                          <Pause size={14} />
                                        ) : (
                                          <Play size={14} className="ml-0.5" />
                                        )}
                                      </button>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className={`text-[14px] font-medium truncate ${isProUser ? "text-neutral-900" : "text-neutral-500"}`}>
                                        {item.title}
                                      </h5>
                                      <p className={`text-[11px] truncate ${isProUser ? "text-neutral-500" : "text-neutral-400"}`}>
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-right ml-3 flex-shrink-0">
                                    <span className={`text-[12px] font-mono ${isProUser ? "text-neutral-600" : "text-neutral-400"}`}>
                                      {item.duration}
                                    </span>
                                  </div>
                                </div>

                                {/* Progress Bar for currently playing item */}
                                {isItemCurrent && isProUser && (
                                  <div className="mt-2 ml-9">
                                    <div className="flex justify-between text-[9px] text-neutral-400 mb-0.5">
                                      <span>{formatTime(currentTime)}</span>
                                      <span>{formatTime(duration)}</span>
                                    </div>
                                    <input
                                      type="range"
                                      min="0"
                                      max={duration || 0}
                                      value={currentTime}
                                      onChange={(e) => {
                                        e.stopPropagation();
                                        handleSeek(e);
                                      }}
                                      className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                                      style={{
                                        background: `linear-gradient(to right, black 0%, black ${progressPercent}%, #e5e7eb ${progressPercent}%, #e5e7eb 100%)`
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Category Pagination Controls */}
                {totalCategoryPages > 1 && (
                  <div className="flex justify-center items-center gap-2 pt-4">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-md border border-neutral-300 ${
                        currentPage === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-black"
                      }`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    {[...Array(totalCategoryPages)].map((_, idx) => {
                      const pageNum = idx + 1;
                      if (
                        pageNum === 1 ||
                        pageNum === totalCategoryPages ||
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={idx}
                            onClick={() => goToPage(pageNum)}
                            className={`w-8 h-8 rounded-md text-[14px] ${
                              currentPage === pageNum
                                ? "bg-black text-white"
                                : "border border-neutral-300 hover:border-black"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                        return <span key={idx} className="text-neutral-400">...</span>;
                      }
                      return null;
                    })}
                    
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalCategoryPages}
                      className={`p-2 rounded-md border border-neutral-300 ${
                        currentPage === totalCategoryPages
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-black"
                      }`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - FULLY STICKY FAQ Section */}
            <div className="lg:block">
              <div className="sticky top-24 h-[50vh]">
                <div className="bg-white p-6 rounded-lg border border-neutral-300 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                  <div className="flex items-center gap-2 mb-4 sticky top-0 bg-white pb-2 z-10">
                    <HelpCircle size={20} className="text-black" />
                    <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
                      {currentAudio ? "Related FAQs" : "Popular FAQs"}
                    </h4>
                  </div>

                  {currentAudio ? (
                    <>
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-100">
                        <div className="w-1 h-6 bg-black rounded-full"></div>
                        <p className="text-[13px] text-neutral-600">
                          Questions about <span className="font-semibold text-black">"{currentAudio.title}"</span>
                        </p>
                      </div>

                      {currentAudioFaqs.length > 0 ? (
                        <div className="space-y-1">
                          {currentAudioFaqs.map((faq, index) => (
                            <div key={index} className="border-b border-neutral-100 last:border-0">
                              <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between py-3 text-left font-medium transition-all hover:text-neutral-900 group"
                              >
                                <span className="text-[13px] text-neutral-700 pr-4 leading-relaxed group-hover:text-neutral-900">
                                  {faq.question}
                                </span>
                                <ChevronDown 
                                  size={16} 
                                  className={`shrink-0 transition-all duration-300 text-neutral-400 ${
                                    openFaqId === index ? "rotate-180 text-black" : "group-hover:text-neutral-600"
                                  }`} 
                                />
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                  openFaqId === index ? "max-h-96 pb-3" : "max-h-0"
                                }`}
                              >
                                <p className="text-[12px] text-neutral-500 leading-relaxed pl-1 border-l-2 border-neutral-200 ml-1 pl-3">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 bg-neutral-50 rounded-lg">
                          <HelpCircle size={32} className="text-neutral-400 mx-auto mb-2" />
                          <p className="text-[13px] text-neutral-500">No specific FAQs available for this topic yet.</p>
                          <p className="text-[11px] text-neutral-400 mt-1">Please check back later or explore other modules.</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-[13px] text-neutral-600 mb-4 leading-relaxed">
                        Select and play any audio lesson to see related frequently asked questions.
                      </p>
                      <div className="text-center py-10 bg-neutral-50 rounded-lg">
                        <Headphones size={36} className="text-neutral-400 mx-auto mb-2" />
                        <p className="text-[13px] text-neutral-500">No audio selected</p>
                        <p className="text-[11px] text-neutral-400 mt-1">Click play on any lesson to get started</p>
                      </div>
                      
                      {/* Show popular topic suggestions */}
                      <div className="mt-4">
                        <p className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider mb-3">Popular Topics</p>
                        <div className="space-y-2">
                          {Object.entries(audioFaqMap).slice(0, 4).map(([title, faqs], idx) => (
                            <div 
                              key={idx} 
                              className="text-[12px] text-neutral-500 hover:text-neutral-700 cursor-pointer transition p-2 rounded hover:bg-neutral-50"
                              onClick={() => {
                                const audio = audioLibraryData.find(a => a.title === title);
                                if (audio && isProUser) {
                                  handlePlayPause(audio);
                                } else if (!isProUser) {
                                  alert("Please upgrade to Pro to access this lesson.");
                                }
                              }}
                            >
                              • {title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-5 pt-4 border-t border-neutral-200">
                    <p className="text-[11px] text-neutral-400 text-center">
                      Need more help? Contact our support team for personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO TAB ==================== */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Video Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured Video */}
              <div className={`border rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row ${
                isProUser ? "bg-white border-neutral-300" : "bg-neutral-50 border-neutral-200"
              }`}>
                <div className="md:w-1/2 aspect-video bg-neutral-200 flex items-center justify-center">
                  {!isProUser && !isCheckingAccess ? (
                    <Lock size={48} className="text-neutral-500" />
                  ) : (
                    <Play size={48} className="text-neutral-700" />
                  )}
                </div>

                <div className="md:w-1/2 p-8 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-700">
                    Recommended
                  </span>
                  <h3 className="text-[20px] font-semibold text-neutral-900">
                    Complete Video Course
                  </h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    Visual explanations of key home loan concepts, from interest calculations to legal documentation.
                  </p>

                  <button 
                    onClick={() => handleWatchVideo(videoLibraryData[0])}
                    disabled={!isProUser || isCheckingAccess}
                    className={`px-8 py-3 rounded-md font-bold flex items-center gap-3 shadow-md ${
                      isProUser && !isCheckingAccess
                        ? "bg-black hover:bg-neutral-800 text-white"
                        : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                    }`}
                  >
                    {!isProUser && !isCheckingAccess ? (
                      <>
                        <Lock size={18} />
                        Upgrade to Watch
                      </>
                    ) : (
                      <>
                        <Play size={18} />
                        Watch Masterclass
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Video Library Grid */}
              <div className="space-y-4">
                <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700 flex items-center gap-2">
                  <Film size={16} />
                  Video Library
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentVideos.map((video) => (
                    <div
                      key={video.id}
                      className={`border rounded-md overflow-hidden transition shadow-sm ${
                        isProUser 
                          ? "bg-white border-neutral-300 hover:border-black"
                          : "bg-neutral-50 border-neutral-200"
                      }`}
                    >
                      <div className="aspect-video bg-neutral-100 flex items-center justify-center relative">
                        {!isProUser && !isCheckingAccess ? (
                          <Lock size={32} className="text-neutral-500" />
                        ) : (
                          <Play size={32} className="text-neutral-700" />
                        )}
                        {!isProUser && !isCheckingAccess && (
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <span className="bg-white/90 text-neutral-700 text-[10px] font-bold px-2 py-1 rounded-full">Pro</span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-2">
                        <h5 className={`text-[14px] font-medium line-clamp-1 ${isProUser ? "text-neutral-900" : "text-neutral-500"}`}>
                          {video.title}
                        </h5>
                        <p className="text-[11px] text-neutral-400">{getCategoryDisplayName(video.category)}</p>
                        <button
                          onClick={() => handleWatchVideo(video)}
                          disabled={!isProUser || isCheckingAccess}
                          className={`text-[12px] font-bold ${
                            isProUser && !isCheckingAccess
                              ? "text-black hover:underline"
                              : "text-neutral-400 cursor-not-allowed"
                          }`}
                        >
                          {!isProUser && !isCheckingAccess ? "Pro Feature" : "Watch Now"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Pagination */}
                {totalVideoPages > 1 && (
                  <div className="flex justify-center items-center gap-2 pt-4">
                    <button
                      onClick={() => goToVideoPage(currentVideoPage - 1)}
                      disabled={currentVideoPage === 1}
                      className={`p-2 rounded-md border border-neutral-300 ${
                        currentVideoPage === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-black"
                      }`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    {[...Array(totalVideoPages)].map((_, idx) => {
                      const pageNum = idx + 1;
                      return (
                        <button
                          key={idx}
                          onClick={() => goToVideoPage(pageNum)}
                          className={`w-8 h-8 rounded-md text-[14px] ${
                            currentVideoPage === pageNum
                              ? "bg-black text-white"
                              : "border border-neutral-300 hover:border-black"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => goToVideoPage(currentVideoPage + 1)}
                      disabled={currentVideoPage === totalVideoPages}
                      className={`p-2 rounded-md border border-neutral-300 ${
                        currentVideoPage === totalVideoPages
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-black"
                      }`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - FULLY STICKY FAQ Section for Video Tab */}
            <div className="lg:block">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg border border-neutral-300 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                  <div className="flex items-center gap-2 mb-4 sticky top-0 bg-white pb-2 z-10">
                    <HelpCircle size={20} className="text-black" />
                    <h4 className="text-[12px] font-semibold uppercase tracking-widest text-neutral-700">
                      Popular FAQs
                    </h4>
                  </div>

                  <p className="text-[13px] text-neutral-600 mb-4 leading-relaxed">
                    Quick answers to common questions about home loans, eligibility, and the application process.
                  </p>

                  <div className="space-y-1">
                    {Object.values(audioFaqMap).flat().slice(0, 8).map((faq, idx) => (
                      <div key={idx} className="border-b border-neutral-100 last:border-0">
                        <button
                          onClick={() => toggleFaq(`video-${idx}`)}
                          className="w-full flex items-center justify-between py-3 text-left font-medium transition-all hover:text-neutral-900 group"
                        >
                          <span className="text-[13px] text-neutral-700 pr-4 leading-relaxed group-hover:text-neutral-900">
                            {faq.question}
                          </span>
                          <ChevronDown 
                            size={16} 
                            className={`shrink-0 transition-all duration-300 text-neutral-400 ${
                              openFaqId === `video-${idx}` ? "rotate-180 text-black" : "group-hover:text-neutral-600"
                            }`} 
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openFaqId === `video-${idx}` ? "max-h-96 pb-3" : "max-h-0"
                          }`}
                        >
                          <p className="text-[12px] text-neutral-500 leading-relaxed pl-1 border-l-2 border-neutral-200 ml-1 pl-3">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-200">
                    <p className="text-[11px] text-neutral-400 text-center">
                      Need more help? Contact our support team for personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
              <button onClick={closeVideoModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-center text-white">
                <Play size={48} className="mx-auto mb-4" />
                <p>Video player would appear here</p>
                <p className="text-sm text-gray-400 mt-2">Duration: {selectedVideo.duration}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{selectedVideo.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </main>
  );
};

export default EducationCenter;
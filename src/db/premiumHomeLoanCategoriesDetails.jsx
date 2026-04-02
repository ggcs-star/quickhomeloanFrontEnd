export const premiumHomeLoanCategoriesDetails = [
  // =====================================================
  // 1. Private Sector Employees
  // =====================================================
  {
    id: 1,
    slug: "private-sector-employees",
    title: "Home Loan for Private Sector Employees",
    description:
      "Tailored home loan solutions for professionals working in private companies, MNCs, and startups. Compare 30+ lenders, reduce your EMI, and get end-to-end support until disbursal.",
    interestRate: "8.40% - 10.75% p.a.",
    loanTenure: "Up to 30 years",
    processingFee: "Varies by lender",
    heroSection: {
      title: "Home Loan for Private Sector Employees",
      brand: "QuickHomeLoan",
      description:
        "Tailored home loan solutions for professionals working in private companies, MNCs, and startups. Compare 30+ lenders, reduce your EMI, and get end-to-end support until disbursal.",
      ctas: [
        { label: "Apply Now", href: "#apply", type: "primary" },
        { label: "Compare Rates", href: "#compare", type: "outline" },
        { label: "Try Calculators", href: "#calculators", type: "text" },
      ],
      offerSubtitle: "Pre-approved offers",
      offerTitle: "For reputed private firms",
      details: [
        { label: "Tenure", value: "5–30 years" },
        { label: "CIBIL", value: "700+ preferred" },
      ],
    },
    featureSection: {
      features: [
        { title: "Personalized Interest Rates", description: "Customized offers based on salary, company category, and credit profile." },
        { title: "Faster Processing", description: "Partner banks prioritize salaried customers for quick approvals." },
        { title: "Flexible Repayment", description: "Tenures between 5 and 30 years so you choose comfort over burden." },
        { title: "Balance Transfer", description: "Save on EMIs by switching to a lower interest rate lender." },
        { title: "Top-up Loans", description: "Additional funds for renovation or personal needs." },
        { title: "Tax Savings", description: "Benefits under Sections 80C and 24(b)." },
      ],
    },
    eligibilityDocumentsSection: {
      eligibility: {
        title: "Eligibility Criteria",
        criteria: [
          { label: "Age", value: "21 to 60 years (up to 65 years at loan maturity)" },
          { label: "Minimum Income", value: "₹25,000 – ₹35,000/month (varies by city & lender)" },
          { label: "Work Experience", value: "Minimum 2 years (1 year in current job)" },
          { label: "Credit Score", value: "700+ preferred for better offers" },
          { label: "Employment Type", value: "Full-time salaried employee in registered private firm or MNC" },
        ],
        tip: "Salary through reputed banks and company tie-ups often unlock better pre-approved offers.",
      },
      documents: {
        title: "Documents Required",
        items: [
          "Identity Proof (Aadhaar, PAN, Passport)",
          "Address Proof (Driving Licence, Utility Bill)",
          "Salary Slips (last 3 months)",
          "Form 16 / Latest ITR",
          "Offer Letter / HR Certificate",
          "6 months Bank Statements",
          "Property Papers (Sale Deed / Builder Agreement)",
        ],
      },
    },
    topBanksSection: {
      banks: [
        { name: "HDFC Bank", features: "Flexible eligibility, digital docs, quick disbursal" },
        { name: "ICICI Bank", features: "Instant approval for salaried customers with salary account" },
        { name: "Axis Bank", features: "Low processing fee, doorstep service" },
        { name: "SBI Home Loan", features: "Attractive rates and balance transfer options" },
        { name: "Kotak Mahindra Bank", features: "High LTV and online application" },
        { name: "IDFC First Bank", features: "EMI holiday & prepayment benefits" },
      ],
    },
    loanProgramsTaxSection: {
      programs: {
        title: "Special Loan Programs",
        items: [
          { name: "HDFC Smart EMI", description: "Ideal for IT & corporate employees with structured salary." },
          { name: "SBI Realty Loan", description: "Finance for construction or under-construction property." },
          { name: "ICICI Extra Home Loan", description: "Extended tenure options up to 67 years of age." },
          { name: "Axis Fast Forward", description: "EMI-free months after consistent repayment." },
        ],
      },
      taxBenefits: {
        title: "Tax Benefits Snapshot",
        items: [
          { section: "Section 80C", description: "Deduction on principal repayment — up to ₹1.5 lakh" },
          { section: "Section 24(b)", description: "Deduction on interest paid — up to ₹2 lakh" },
          { section: "80EE / 80EEA", description: "Additional benefits for eligible first-time buyers" },
        ],
        tip: "Combine with a joint loan to maximize tax savings.",
      },
    },
    calculatorCaseStudySection: {
      calculators: {
        title: "Plan Smart with QuickHomeLoan Calculators",
        description: "Estimate EMI, check eligibility and compare balance transfer savings before applying.",
        buttons: [
          { label: "EMI Calculator", variant: "primary" },
          { label: "Eligibility Calculator", variant: "outline" },
          { label: "Balance Transfer Calculator", variant: "light" },
        ],
      },
      caseStudy: {
        title: "Example Case Study",
        name: "Riya Sharma",
        age: 29,
        profession: "Software Engineer",
        salary: 85000,
        loanAmount: 5000000,
        tenure: 25,
        interestRate: 8.45,
        emi: 40643,
        savings: 180000,
      },
    },
    eligibilityTipsFAQSection: {
      tips: {
        title: "Tips to Improve Eligibility",
        items: [
          "Maintain CIBIL score above 700.",
          "Avoid multiple simultaneous loan applications.",
          "Opt for joint application with spouse/family member to boost eligibility.",
          "Keep FOIR below 40%.",
          "Choose longer tenure to reduce EMI burden if needed.",
        ],
      },
      faqs: {
        title: "Frequently Asked Questions",
        items: [
          { question: "Can private sector employees get home loans easily?", answer: "Yes. Most banks offer flexible home loan products with minimal paperwork for salaried employees in reputed private firms." },
          { question: "Is job stability important for approval?", answer: "Banks prefer at least 2 years of stable employment to assess repayment capacity." },
          { question: "Are there penalties for prepayment?", answer: "No penalties for prepayment on floating-rate home loans as per RBI guidelines." },
        ],
      },
    },
  },

  // =====================================================
  // 2. Doctors
  // =====================================================
  {
    id: 2,
    slug: "doctors",
    title: "Home Loan for Doctors",
    description:
      "Exclusive home loan offers designed for medical professionals, with high loan amounts, low EMIs, and flexible tenure options to build your dream home or clinic.",
    interestRate: "8.25% - 10.25% p.a.",
    loanTenure: "Up to 30 years",
    processingFee: "0.25% - 0.5% of loan amount",
    heroSection: {
      title: "Home Loan for Doctors",
      brand: "QuickHomeLoan",
      description:
        "Specialized loan options for medical professionals to own property or expand practice. Get faster approvals and customized repayment plans.",
      ctas: [
        { label: "Apply Now", href: "#apply", type: "primary" },
        { label: "Check Eligibility", href: "#eligibility", type: "outline" },
      ],
      offerSubtitle: "Exclusive offers",
      offerTitle: "For MBBS, MD, and specialist doctors",
      details: [
        { label: "Tenure", value: "Up to 30 years" },
        { label: "Loan Amount", value: "Up to ₹2 crore" },
      ],
    },
    featureSection: {
      features: [
        { title: "Higher Loan Limits", description: "Special consideration for self-employed and salaried doctors." },
        { title: "Quick Disbursal", description: "Fast-track approval and document verification for registered practitioners." },
        { title: "Balance Transfer", description: "Reduce your EMI with easy loan transfer from existing lender." },
        { title: "Top-Up Loans", description: "Extra funds for clinic expansion or home renovation." },
        { title: "Tax Benefits", description: "Get deductions on both principal and interest repayment." },
      ],
    },
    eligibilityDocumentsSection: {
      eligibility: {
        title: "Eligibility Criteria",
        criteria: [
          { label: "Age", value: "25 to 65 years" },
          { label: "Experience", value: "Minimum 2 years of practice or service" },
          { label: "Credit Score", value: "700+ preferred" },
          { label: "Income", value: "₹50,000+ monthly income required" },
        ],
        tip: "Submit your medical registration certificate for quicker processing.",
      },
      documents: {
        title: "Documents Required",
        items: [
          "Medical Registration Certificate",
          "Identity & Address Proof",
          "Last 6 months Bank Statements",
          "Latest ITR or Form 16",
          "Property Papers",
        ],
      },
    },
    topBanksSection: {
      banks: [
        { name: "HDFC Bank", features: "Special doctor loan program with high approval rate" },
        { name: "SBI Doctor Loan", features: "Tailored for healthcare professionals with flexible EMIs" },
        { name: "ICICI Bank", features: "Low processing fees and pre-approved offers for doctors" },
      ],
    },
    loanProgramsTaxSection: {
      programs: {
        title: "Special Doctor Programs",
        items: [
          { name: "HDFC Doctor Plus", description: "Higher loan eligibility for medical professionals" },
          { name: "SBI Healthcare Loan", description: "Low-rate home and clinic combo financing" },
        ],
      },
      taxBenefits: {
        title: "Tax Benefits",
        items: [
          { section: "80C", description: "Principal repayment deduction up to ₹1.5 lakh" },
          { section: "24(b)", description: "Interest deduction up to ₹2 lakh" },
        ],
      },
    },
    calculatorCaseStudySection: {
      calculators: {
        title: "Plan with Calculators",
        description: "Estimate EMI and affordability instantly before applying.",
        buttons: [
          { label: "EMI Calculator", variant: "primary" },
          { label: "Eligibility Checker", variant: "outline" },
        ],
      },
      caseStudy: {
        title: "Example Case Study",
        name: "Dr. Mehul Patel",
        age: 35,
        profession: "Dentist",
        salary: 120000,
        loanAmount: 7500000,
        tenure: 20,
        interestRate: 8.5,
        emi: 65321,
        savings: 250000,
      },
    },
    eligibilityTipsFAQSection: {
      tips: {
        title: "Tips to Improve Eligibility",
        items: [
          "Maintain a strong credit history.",
          "Provide your medical license for preferential processing.",
          "Opt for longer tenures to manage EMIs efficiently.",
        ],
      },
      faqs: {
        title: "FAQs for Doctors",
        items: [
          { question: "Can self-employed doctors apply?", answer: "Yes, both salaried and self-employed doctors are eligible." },
          { question: "Are tax deductions available?", answer: "Yes, under Section 80C and 24(b)." },
        ],
      },
    },
  },

// =====================================================
// 3. Government Employees
// =====================================================
{
  id: 3,
  slug: "government-employees",
  title: "Home Loan for Government Employees",
  description:
    "Exclusive home loans with subsidized interest rates and longer tenures for central, state, and PSU employees. Get fast approvals and zero hidden charges.",
  interestRate: "8.15% - 9.60% p.a.",
  loanTenure: "Up to 30 years",
  processingFee: "0.25% - 0.5% of loan amount",
  heroSection: {
    title: "Home Loan for Government Employees",
    brand: "QuickHomeLoan",
    description:
      "Enjoy lower interest rates and easy repayment plans with government tie-ups and salary-based benefits. Get pre-approved home loans instantly.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Check Benefits", href: "#benefits", type: "outline" },
    ],
    offerSubtitle: "Special Subsidy Programs",
    offerTitle: "For Government & PSU Employees",
    details: [
      { label: "Tenure", value: "Up to 30 years" },
      { label: "CIBIL", value: "650+ preferred" },
    ],
  },
  featureSection: {
    features: [
      { title: "Subsidized Interest Rates", description: "Enjoy exclusive rates for government and PSU employees." },
      { title: "Extended Tenures", description: "Repayment options up to retirement age or beyond." },
      { title: "Quick Approvals", description: "Priority processing for salaried accounts with govt institutions." },
      { title: "Balance Transfer", description: "Switch your loan at reduced rates easily." },
      { title: "Top-Up Loans", description: "Get additional funds for renovation or personal use." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "21 to 60 years" },
        { label: "Employment Type", value: "Central, State, PSU employees" },
        { label: "Income", value: "₹20,000+ per month" },
        { label: "Credit Score", value: "650+ minimum" },
      ],
      tip: "Salary account with a partner bank improves chances of pre-approved offers.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "Employee ID Proof",
        "Last 3 months Salary Slips",
        "6 months Bank Statement",
        "Form 16 / ITR",
        "PAN & Aadhaar Card",
        "Property Papers",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "SBI Home Loan", features: "Exclusive PSU tie-ups & subsidy benefits" },
      { name: "HDFC Ltd", features: "Special rates for government employees" },
      { name: "Punjab National Bank", features: "Longer tenure options up to retirement" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Government Employee Programs",
      items: [
        { name: "SBI Privilege Home Loan", description: "Special scheme for government staff with 0% prepayment." },
        { name: "LIC Housing Loan", description: "Subsidized rates under PMAY for eligible employees." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "Section 80C", description: "Principal repayment deduction up to ₹1.5 lakh" },
        { section: "Section 24(b)", description: "Interest deduction up to ₹2 lakh" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Estimate Your EMI Easily",
      description: "Calculate monthly payments and tenure options instantly.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Tenure Planner", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Case Study",
      name: "Anjali Verma",
      age: 40,
      profession: "Government Officer",
      salary: 70000,
      loanAmount: 4000000,
      tenure: 20,
      interestRate: 8.25,
      emi: 34000,
      savings: 95000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips to Improve Eligibility",
      items: [
        "Maintain a clean credit record.",
        "Provide salary continuity certificate if nearing retirement.",
        "Opt for spouse as co-applicant to enhance tenure.",
      ],
    },
    faqs: {
      title: "FAQs",
      items: [
        { question: "Can PSU employees apply?", answer: "Yes, both central and PSU employees are eligible." },
        { question: "Is collateral required?", answer: "Only the purchased property acts as security." },
      ],
    },
  },
},

// =====================================================
// 4. Business Owners
// =====================================================
{
  id: 4,
  slug: "business-owners",
  title: "Home Loan for Business Owners",
  description:
    "Flexible home loan solutions for entrepreneurs and self-employed individuals. High loan amounts, flexible EMI plans, and minimal documentation.",
  interestRate: "8.75% - 11.00% p.a.",
  loanTenure: "Up to 25 years",
  processingFee: "Up to 1% of loan amount",
  heroSection: {
    title: "Home Loan for Business Owners",
    brand: "QuickHomeLoan",
    description:
      "Empowering business owners with simplified home financing options. Get approval based on turnover and income proof.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Know Eligibility", href: "#eligibility", type: "outline" },
    ],
    offerSubtitle: "For MSME and Self-Employed",
    offerTitle: "Flexible EMI options",
    details: [
      { label: "Tenure", value: "Up to 25 years" },
      { label: "Documents", value: "ITR, Balance Sheet, Business Proof" },
    ],
  },
  featureSection: {
    features: [
      { title: "High Loan Eligibility", description: "Based on business turnover and profits." },
      { title: "No Salary Proof Needed", description: "Income assessed from audited statements." },
      { title: "Quick Processing", description: "Faster approvals for established firms." },
      { title: "Balance Transfer", description: "Lower interest rates on existing loans." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "25 to 65 years" },
        { label: "Business Vintage", value: "Minimum 3 years" },
        { label: "Annual Turnover", value: "₹10 lakh and above" },
        { label: "Credit Score", value: "700+ preferred" },
      ],
      tip: "Audited financials and consistent cash flow improve eligibility.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "Business Registration Proof",
        "GST Certificate",
        "Last 2 years ITR and Balance Sheets",
        "Bank Statements (12 months)",
        "PAN & Aadhaar",
        "Property Papers",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "HDFC Bank", features: "Customized rates for entrepreneurs" },
      { name: "Axis Bank", features: "Digital approval and low processing fee" },
      { name: "ICICI Bank", features: "Self-employed professional support" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Entrepreneur-Focused Programs",
      items: [
        { name: "ICICI Self-Employed Home Loan", description: "Tailored for business owners with flexible income proof." },
        { name: "Axis Advantage Loan", description: "Benefit from extended repayment options." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "Section 80C", description: "Deduction on principal up to ₹1.5 lakh" },
        { section: "24(b)", description: "Deduction on interest up to ₹2 lakh" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Estimate Your Eligibility",
      description: "Calculate your maximum loan amount based on income and turnover.",
      buttons: [
        { label: "Business Loan Calculator", variant: "primary" },
        { label: "Balance Transfer Tool", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Case Study",
      name: "Rajesh Mehta",
      age: 38,
      profession: "Entrepreneur",
      salary: 150000,
      loanAmount: 9000000,
      tenure: 20,
      interestRate: 8.85,
      emi: 79921,
      savings: 200000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips to Get Approved",
      items: [
        "Ensure audited financials for the last 2 years.",
        "Maintain good cash flow and low existing EMIs.",
        "Avoid cheque bounces to retain high creditworthiness.",
      ],
    },
    faqs: {
      title: "FAQs for Business Owners",
      items: [
        { question: "Can a new entrepreneur apply?", answer: "Yes, if business operations exceed 2 years." },
        { question: "Do banks accept GST as income proof?", answer: "Yes, it supports turnover verification." },
      ],
    },
  },
},
// =====================================================
// 5. Social Media Influencers
// =====================================================
{
  id: 5,
  slug: "social-media-influencers",
  title: "Home Loan for Social Media Influencers",
  description:
    "Customized home loans for content creators, YouTubers, and digital influencers with flexible documentation and income evaluation from multiple sources.",
  interestRate: "8.85% - 11.25% p.a.",
  loanTenure: "Up to 25 years",
  processingFee: "1% of loan amount",
  heroSection: {
    title: "Home Loan for Social Media Influencers",
    brand: "QuickHomeLoan",
    description:
      "Transform your online success into property ownership. We offer flexible home loans based on verified digital income streams.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Know More", href: "#details", type: "outline" },
    ],
    offerSubtitle: "New-age home finance",
    offerTitle: "For Creators & Digital Influencers",
    details: [
      { label: "Tenure", value: "Up to 25 years" },
      { label: "Income Proof", value: "Digital or Freelance Income" },
    ],
  },
  featureSection: {
    features: [
      { title: "Digital Income Verification", description: "We accept YouTube, Instagram, and brand income statements." },
      { title: "Flexible Eligibility", description: "Low entry barriers for self-employed creators." },
      { title: "Quick Disbursal", description: "Pre-approved offers based on consistent income flow." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "22 to 50 years" },
        { label: "Experience", value: "Minimum 1 year as creator/influencer" },
        { label: "Minimum Income", value: "₹40,000+ verified digital income" },
      ],
      tip: "Submit income proofs from Google AdSense, brand payments, or invoices.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "PAN, Aadhaar Card",
        "Last 12 months Bank Statements",
        "Income Proof (AdSense, Sponsorship Payments)",
        "Property Documents",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "HDFC Bank", features: "Special creative professional support" },
      { name: "ICICI Bank", features: "Self-employed & influencer loan support" },
      { name: "IDFC First Bank", features: "Low-doc income verification" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Influencer Programs",
      items: [
        { name: "HDFC Creator Loan", description: "Loans for digital entrepreneurs with verified earnings." },
        { name: "ICICI InstaLoan", description: "Quick approval based on online income deposits." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "80C", description: "Deduction up to ₹1.5 lakh on principal repayment." },
        { section: "24(b)", description: "Interest deduction up to ₹2 lakh." },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Estimate & Apply Smartly",
      description: "Calculate EMI and eligibility before you finalize.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Balance Transfer Tool", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Rohan Gupta",
      age: 28,
      profession: "YouTuber",
      salary: 100000,
      loanAmount: 4000000,
      tenure: 20,
      interestRate: 8.9,
      emi: 35829,
      savings: 85000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips to Get Approved",
      items: [
        "Provide steady monthly digital income reports.",
        "Submit 12 months’ transaction data.",
        "Maintain an active and verified creator account.",
      ],
    },
    faqs: {
      title: "FAQs for Influencers",
      items: [
        { question: "Do banks accept AdSense income?", answer: "Yes, verified digital income is accepted." },
        { question: "Do I need a registered business?", answer: "Not mandatory; invoices and statements are accepted." },
      ],
    },
  },
},

// =====================================================
// 6. IT Professionals
// =====================================================
{
  id: 6,
  slug: "it-professionals",
  title: "Home Loan for IT Professionals",
  description:
    "Get exclusive home loan offers tailored for IT professionals with top credit scores and reputed employers. Enjoy quick disbursals and low EMIs.",
  interestRate: "8.20% - 9.85% p.a.",
  loanTenure: "Up to 30 years",
  processingFee: "0.35% of loan amount",
  heroSection: {
    title: "Home Loan for IT Professionals",
    brand: "QuickHomeLoan",
    description:
      "Specially designed for software engineers and tech employees with salary-based pre-approved offers.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Compare Offers", href: "#offers", type: "outline" },
    ],
    offerSubtitle: "Exclusive Offers",
    offerTitle: "For IT Employees in Top Firms",
    details: [
      { label: "Tenure", value: "5–30 years" },
      { label: "Minimum Salary", value: "₹40,000/month" },
    ],
  },
  featureSection: {
    features: [
      { title: "Corporate Tie-Ups", description: "Preferred rates for employees from top IT firms." },
      { title: "Quick Processing", description: "Fast-tracked verification for salaried professionals." },
      { title: "Online Documentation", description: "Paperless process with digital KYC." },
      { title: "Flexible EMI", description: "Option to start with low EMIs in first few years." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "22 to 60 years" },
        { label: "Employment", value: "Full-time in IT company (min. 1 year)" },
        { label: "CIBIL", value: "700+ preferred" },
      ],
      tip: "Employees with salary accounts in partner banks get faster disbursals.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "PAN & Aadhaar",
        "Salary Slips (last 3 months)",
        "6 months Bank Statements",
        "Offer Letter / ID Card",
        "Property Papers",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "HDFC Bank", features: "Preferred rates for tech professionals" },
      { name: "ICICI Bank", features: "Instant digital approval for IT employees" },
      { name: "SBI", features: "Flexible tenure and minimal processing" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Special Programs",
      items: [
        { name: "HDFC Smart EMI", description: "Discounts for MNC employees with auto-debit setup." },
        { name: "ICICI InstaLoan", description: "Instant approval for high-salary professionals." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits Snapshot",
      items: [
        { section: "80C", description: "Deduction up to ₹1.5 lakh on principal repayment" },
        { section: "24(b)", description: "Interest deduction up to ₹2 lakh" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Plan Smart with Calculators",
      description: "Estimate EMI, eligibility, and loan comparison before applying.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Eligibility Checker", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Suresh Iyer",
      age: 31,
      profession: "Software Developer",
      salary: 95000,
      loanAmount: 6000000,
      tenure: 20,
      interestRate: 8.35,
      emi: 51942,
      savings: 145000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for Approval",
      items: [
        "Maintain a stable job profile.",
        "Opt for salary auto-debit for smoother repayment.",
        "Avoid multiple loan inquiries within short time spans.",
      ],
    },
    faqs: {
      title: "FAQs for IT Professionals",
      items: [
        { question: "Are stock options considered income?", answer: "No, only fixed income is considered." },
        { question: "Do I get better rates for MNC employment?", answer: "Yes, reputed firms attract better offers." },
      ],
    },
  },
},
{
  id: 7,
  slug: "teachers-and-professors",
  title: "Home Loan for Teachers & Professors",
  description:
    "Affordable home loans for educators with stable incomes. Get low-interest EMIs, flexible tenure options, and zero prepayment charges.",
  interestRate: "8.25% - 9.75% p.a.",
  loanTenure: "Up to 30 years",
  processingFee: "0.35% of loan amount",
  heroSection: {
    title: "Home Loan for Teachers & Professors",
    brand: "QuickHomeLoan",
    description:
      "Empowering educators to own their dream homes with minimal documentation and easy eligibility.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Check Eligibility", href: "#eligibility", type: "outline" },
    ],
    offerSubtitle: "Low-interest options",
    offerTitle: "Special offers for teachers and academicians",
    details: [
      { label: "Tenure", value: "Up to 30 years" },
      { label: "CIBIL", value: "700+ preferred" },
    ],
  },
  featureSection: {
    features: [
      { title: "Special Rates for Educators", description: "Enjoy discounted rates for teaching professionals." },
      { title: "Flexible Repayment", description: "Choose tenure up to 30 years." },
      { title: "Balance Transfer", description: "Switch easily to lower interest rates." },
      { title: "Top-up Loans", description: "Get additional funds for renovation or family needs." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "23 to 60 years" },
        { label: "Employment", value: "Full-time teacher or professor" },
        { label: "Income", value: "₹25,000+ per month" },
      ],
      tip: "Government and aided school employees get faster approvals.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "PAN & Aadhaar Card",
        "Salary Slips (last 3 months)",
        "6 months Bank Statements",
        "Employment Proof / ID Card",
        "Property Documents",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "SBI", features: "Special rate offers for educators" },
      { name: "HDFC Bank", features: "Zero processing for top-rated institutions" },
      { name: "Axis Bank", features: "Flexible EMI options" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Exclusive Programs for Teachers",
      items: [
        { name: "SBI Scholar Loan", description: "Special for educators with government service." },
        { name: "HDFC Educator Plan", description: "Discounted EMI for university professors." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits Snapshot",
      items: [
        { section: "80C", description: "Up to ₹1.5 lakh deduction on principal" },
        { section: "24(b)", description: "Up to ₹2 lakh deduction on interest" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Smart EMI Estimation",
      description: "Calculate EMI instantly and compare tenure options.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Tenure Optimizer", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Neha Sharma",
      age: 34,
      profession: "Professor",
      salary: 60000,
      loanAmount: 3500000,
      tenure: 20,
      interestRate: 8.5,
      emi: 30417,
      savings: 90000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for Faster Approval",
      items: [
        "Provide verified employment letter.",
        "Ensure updated Form 16s are attached.",
        "Apply jointly with spouse for higher eligibility.",
      ],
    },
    faqs: {
      title: "FAQs for Teachers",
      items: [
        { question: "Are private school teachers eligible?", answer: "Yes, with a verified employment record." },
        { question: "Is income proof mandatory?", answer: "Yes, via salary slips or ITRs." },
      ],
    },
  },
},

// =====================================================
// 8. NRIs
// =====================================================
{
  id: 8,
  slug: "nris",
  title: "Home Loan for NRIs",
  description:
    "Simplified home loan process for NRIs looking to invest in Indian real estate. Enjoy quick documentation and competitive rates.",
  interestRate: "8.35% - 9.85% p.a.",
  loanTenure: "Up to 20 years",
  processingFee: "Up to 1% of loan amount",
  heroSection: {
    title: "Home Loan for Non-Resident Indians (NRIs)",
    brand: "QuickHomeLoan",
    description:
      "Finance your dream home in India with minimal hassle and global account access.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Know More", href: "#details", type: "outline" },
    ],
    offerSubtitle: "Global convenience",
    offerTitle: "Easy loans for Indians abroad",
    details: [
      { label: "Tenure", value: "Up to 20 years" },
      { label: "Eligible Countries", value: "USA, UK, UAE, Canada, etc." },
    ],
  },
  featureSection: {
    features: [
      { title: "Online Application", description: "Apply from anywhere in the world." },
      { title: "Competitive Rates", description: "Attractive fixed and floating rate options." },
      { title: "Power of Attorney Facility", description: "Simplified documentation for NRI applicants." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "25 to 60 years" },
        { label: "Employment", value: "Confirmed overseas employment" },
        { label: "Minimum Income", value: "USD 2000 per month" },
      ],
      tip: "Maintain NRE/NRO account in India for transactions.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "Passport & Visa Copy",
        "Employment Contract / Salary Certificate",
        "Overseas Bank Statement (6 months)",
        "Indian Address Proof",
        "Property Papers",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "HDFC Bank", features: "Dedicated NRI home loan support" },
      { name: "ICICI Bank", features: "Online NRI loan processing" },
      { name: "Axis Bank", features: "Attractive foreign income evaluation" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "NRI Home Loan Programs",
      items: [
        { name: "HDFC NRI Smart Loan", description: "Special repayment options for overseas professionals." },
        { name: "SBI Global Home Loan", description: "Tailored for NRIs with simplified documentation." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "80C", description: "Available if taxable income in India." },
        { section: "24(b)", description: "Interest deduction on home property income." },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Plan Smart with Global Access",
      description: "Check EMIs in INR and foreign currency equivalents.",
      buttons: [
        { label: "NRI EMI Calculator", variant: "primary" },
        { label: "Currency Converter", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Amit Desai",
      age: 40,
      profession: "IT Consultant (Dubai)",
      salary: 300000,
      loanAmount: 9000000,
      tenure: 15,
      interestRate: 8.4,
      emi: 88724,
      savings: 250000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for NRIs",
      items: [
        "Appoint a trusted local Power of Attorney.",
        "Maintain NRE/NRO account for transactions.",
        "Choose reputed developers for quick approval.",
      ],
    },
    faqs: {
      title: "FAQs for NRIs",
      items: [
        { question: "Can NRIs buy property jointly?", answer: "Yes, with another NRI or Indian citizen." },
        { question: "Do I need to visit India?", answer: "No, most processes can be done online." },
      ],
    },
  },
},

// =====================================================
// 9. Women Professionals
// =====================================================
{
  id: 9,
  slug: "women-professionals",
  title: "Home Loan for Women Professionals",
  description:
    "Empowering women with lower interest rates, reduced processing fees, and flexible repayment options.",
  interestRate: "8.10% - 9.65% p.a.",
  loanTenure: "Up to 30 years",
  processingFee: "Discounted up to 0.25%",
  heroSection: {
    title: "Home Loan for Women Professionals",
    brand: "QuickHomeLoan",
    description:
      "Exclusive benefits and lower rates for salaried and self-employed women borrowers.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Compare Offers", href: "#offers", type: "outline" },
    ],
    offerSubtitle: "Empowering Ownership",
    offerTitle: "Special Schemes for Women",
    details: [
      { label: "Interest Discount", value: "Up to 0.25%" },
      { label: "Tenure", value: "Up to 30 years" },
    ],
  },
  featureSection: {
    features: [
      { title: "Lower Interest Rates", description: "Special concessions for women borrowers." },
      { title: "Flexible EMIs", description: "Choose comfort over burden with extended tenures." },
      { title: "Tax Benefits", description: "Joint ownership offers dual deductions." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "21 to 60 years" },
        { label: "Employment", value: "Salaried or self-employed" },
        { label: "Credit Score", value: "700+ preferred" },
      ],
      tip: "Joint applications with female co-owner attract discounts.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "PAN & Aadhaar",
        "Salary Slips / ITR",
        "Bank Statements",
        "Property Documents",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "SBI", features: "Her Ghar Loan Scheme" },
      { name: "HDFC", features: "Discounted interest for women" },
      { name: "Bajaj Finserv", features: "No prepayment charges" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Women-Centric Programs",
      items: [
        { name: "SBI Her Ghar", description: "Special home loans with interest concessions for women." },
        { name: "HDFC Women Power Loan", description: "Low processing fee & quick approval." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "80C", description: "Up to ₹1.5 lakh on principal repayment" },
        { section: "24(b)", description: "Up to ₹2 lakh interest deduction" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Plan Smart",
      description: "Compare and save with women-exclusive loan calculators.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Tax Benefit Estimator", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Pooja Mehta",
      age: 32,
      profession: "Bank Manager",
      salary: 85000,
      loanAmount: 5000000,
      tenure: 25,
      interestRate: 8.25,
      emi: 39200,
      savings: 120000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for Women Borrowers",
      items: [
        "Apply jointly with spouse for better eligibility.",
        "Check special state subsidies for female homeowners.",
      ],
    },
    faqs: {
      title: "FAQs for Women",
      items: [
        { question: "Can homemakers apply?", answer: "Yes, with a co-applicant having income proof." },
        { question: "Is insurance mandatory?", answer: "Optional but recommended." },
      ],
    },
  },
},

// =====================================================
// 10. Defense Personnel
// =====================================================
{
  id: 10,
  slug: "defense-personnel",
  title: "Home Loan for Defense Personnel",
  description:
    "Dedicated home loan solutions for armed forces, paramilitary, and defense employees with minimal documentation.",
  interestRate: "8.10% - 9.50% p.a.",
  loanTenure: "Up to 30 years",
  processingFee: "0.25% or ₹10,000 max",
  heroSection: {
    title: "Home Loan for Defense Personnel",
    brand: "QuickHomeLoan",
    description:
      "Affordable loans for serving and retired defense officers with government-backed benefits.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Check Benefits", href: "#benefits", type: "outline" },
    ],
    offerSubtitle: "Exclusive for Armed Forces",
    offerTitle: "Low rates and quick disbursal",
    details: [
      { label: "Tenure", value: "Up to 30 years" },
      { label: "Service Type", value: "Serving / Retired" },
    ],
  },
  featureSection: {
    features: [
      { title: "Special Concessions", description: "Subsidized rates for Army, Navy, and Air Force personnel." },
      { title: "Zero Prepayment", description: "No charges on early repayment." },
      { title: "Extended Tenure", description: "Available even after retirement." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "21 to 65 years" },
        { label: "Service", value: "Defense / Paramilitary Personnel" },
      ],
      tip: "Provide service certificate for quicker approval.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "Service ID / Retirement Proof",
        "PAN & Aadhaar",
        "Salary Slip / Pension Proof",
        "Property Papers",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "SBI", features: "Defense Salary Package with special home loans" },
      { name: "PNB", features: "Zero processing for armed forces" },
      { name: "HDFC Bank", features: "Defense privilege loan" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Defense Programs",
      items: [
        { name: "SBI Shaurya Home Loan", description: "Lower rates for defense staff." },
        { name: "HDFC Forces Plan", description: "No hidden charges and quick disbursal." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "80C", description: "Deduction up to ₹1.5 lakh" },
        { section: "24(b)", description: "Interest deduction up to ₹2 lakh" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Defense Loan Estimator",
      description: "Plan your EMI with flexible repayment calculators.",
      buttons: [
        { label: "EMI Calculator", variant: "primary" },
        { label: "Subsidy Checker", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Captain Rahul Singh",
      age: 37,
      profession: "Army Officer",
      salary: 95000,
      loanAmount: 6000000,
      tenure: 25,
      interestRate: 8.2,
      emi: 47200,
      savings: 150000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for Armed Forces",
      items: [
        "Submit service certificate for eligibility proof.",
        "Choose defense salary package banks for best offers.",
      ],
    },
    faqs: {
      title: "FAQs for Defense Personnel",
      items: [
        { question: "Are paramilitary eligible?", answer: "Yes, under the same scheme." },
        { question: "Is insurance covered?", answer: "Yes, under group housing insurance." },
      ],
    },
  },
},// =====================================================
// 11. Retired Individuals
// =====================================================
{
  id: 11,
  slug: "retired-individuals",
  title: "Home Loan for Retired Individuals",
  description:
    "Tailored home loan solutions for pensioners and retirees with regular pension income or rental earnings. Enjoy steady EMIs and peace of mind post-retirement.",
  interestRate: "8.75% - 10.25% p.a.",
  loanTenure: "Up to 15 years",
  processingFee: "Up to 0.5% of loan amount",
  heroSection: {
    title: "Home Loan for Retired Individuals",
    brand: "QuickHomeLoan",
    description:
      "Get a second chance to own your dream home even after retirement. We make loans accessible for pensioners with minimal documentation.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Check EMI Options", href: "#emi", type: "outline" },
    ],
    offerSubtitle: "Post-retirement security",
    offerTitle: "Loans designed for senior citizens",
    details: [
      { label: "Tenure", value: "Up to 15 years" },
      { label: "Maximum Age", value: "Up to 75 years at maturity" },
    ],
  },
  featureSection: {
    features: [
      { title: "Pension-Based Eligibility", description: "Loan sanctioned based on regular pension or income." },
      { title: "Joint Application Option", description: "Apply with spouse or children for higher eligibility." },
      { title: "Reverse Mortgage Option", description: "Convert property into income stream post-retirement." },
      { title: "Flexible EMI", description: "Choose repayment based on pension inflow." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "60 to 75 years" },
        { label: "Income Source", value: "Pension, rental, or fixed deposit interest" },
        { label: "Credit Score", value: "650+ preferred" },
      ],
      tip: "Adding a co-applicant below 55 can extend tenure and increase eligibility.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "Pension Proof / PPO",
        "Last 6 months Bank Statement",
        "PAN & Aadhaar Card",
        "Property Title Deed",
        "Recent Photograph",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "SBI Reverse Mortgage Loan", features: "Special for senior citizens" },
      { name: "HDFC Pensioner Loan", features: "Low processing & dedicated plans" },
      { name: "Bank of Baroda", features: "Flexible repayment options for retirees" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Senior Citizen Programs",
      items: [
        { name: "SBI Reverse Mortgage", description: "Earn monthly income through home equity." },
        { name: "HDFC Pensioner Plan", description: "Loan against pension income." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits",
      items: [
        { section: "80C", description: "Deduction on principal up to ₹1.5 lakh" },
        { section: "24(b)", description: "Deduction on interest paid up to ₹2 lakh" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Plan Smartly for Retirement",
      description: "Estimate EMIs or monthly payouts under reverse mortgage.",
      buttons: [
        { label: "Pension EMI Calculator", variant: "primary" },
        { label: "Reverse Mortgage Estimator", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Mahesh Patel",
      age: 66,
      profession: "Retired Government Officer",
      salary: 45000,
      loanAmount: 2500000,
      tenure: 10,
      interestRate: 8.95,
      emi: 31542,
      savings: 65000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Tips for Retired Borrowers",
      items: [
        "Add a co-applicant to improve eligibility.",
        "Opt for reverse mortgage to reduce EMI stress.",
        "Maintain pension account with lending bank.",
      ],
    },
    faqs: {
      title: "FAQs for Retired Individuals",
      items: [
        { question: "Can pensioners get a home loan?", answer: "Yes, based on steady pension or income proof." },
        { question: "Is a co-applicant mandatory?", answer: "Not mandatory, but improves eligibility." },
        { question: "Is reverse mortgage safe?", answer: "Yes, it’s RBI-regulated and offers lifelong payments." },
      ],
    },
  },
},

// =====================================================
// 12. Real Estate Investors
// =====================================================
{
  id: 12,
  slug: "realestate-investors",
  title: "Home Loan for Real Estate Investors",
  description:
    "High-value loans for property investors to expand their real estate portfolio with attractive interest rates and flexible tenure options.",
  interestRate: "8.60% - 10.50% p.a.",
  loanTenure: "Up to 25 years",
  processingFee: "0.5% - 1% of loan amount",
  heroSection: {
    title: "Home Loan for Real Estate Investors",
    brand: "QuickHomeLoan",
    description:
      "Finance your next investment property smartly. Enjoy seamless loan approvals and maximize rental yield returns.",
    ctas: [
      { label: "Apply Now", href: "#apply", type: "primary" },
      { label: "Investment Calculator", href: "#calculator", type: "outline" },
    ],
    offerSubtitle: "Investor-focused programs",
    offerTitle: "Expand your real estate portfolio",
    details: [
      { label: "Tenure", value: "Up to 25 years" },
      { label: "Max Loan", value: "₹5 crore (varies by lender)" },
    ],
  },
  featureSection: {
    features: [
      { title: "High Loan-to-Value", description: "Get up to 75% of property value financed." },
      { title: "Flexible Repayment", description: "Pay EMIs as per rental income flow." },
      { title: "Multiple Property Loans", description: "Eligible for more than one loan based on CIBIL." },
      { title: "Balance Transfer Benefits", description: "Lower your interest rate by refinancing." },
    ],
  },
  eligibilityDocumentsSection: {
    eligibility: {
      title: "Eligibility Criteria",
      criteria: [
        { label: "Age", value: "25 to 60 years" },
        { label: "Income", value: "₹75,000+ per month" },
        { label: "Credit Score", value: "700+ preferred" },
        { label: "Investment Type", value: "Residential or Commercial" },
      ],
      tip: "Show rental receipts or property income for higher eligibility.",
    },
    documents: {
      title: "Documents Required",
      items: [
        "PAN & Aadhaar Card",
        "Income Tax Returns (2 years)",
        "Property Valuation Report",
        "Sale Deed / Purchase Agreement",
        "Bank Statements (6 months)",
      ],
    },
  },
  topBanksSection: {
    banks: [
      { name: "HDFC Bank", features: "Investor-friendly high-value home loans" },
      { name: "Axis Bank", features: "Flexible EMI linked to rental income" },
      { name: "ICICI Bank", features: "Special property investment schemes" },
    ],
  },
  loanProgramsTaxSection: {
    programs: {
      title: "Investment-Oriented Loan Programs",
      items: [
        { name: "HDFC Investor Plus", description: "For buyers owning multiple properties." },
        { name: "ICICI Wealth Home Loan", description: "High loan amount with minimal documents." },
      ],
    },
    taxBenefits: {
      title: "Tax Benefits for Investors",
      items: [
        { section: "24(b)", description: "Interest deduction up to ₹2 lakh for self-occupied property" },
        { section: "Rental Income Deduction", description: "30% standard deduction on let-out property" },
      ],
    },
  },
  calculatorCaseStudySection: {
    calculators: {
      title: "Investment Planning Tools",
      description: "Calculate ROI, rental yield, and EMI for multiple properties.",
      buttons: [
        { label: "ROI Calculator", variant: "primary" },
        { label: "Rental Yield Estimator", variant: "outline" },
      ],
    },
    caseStudy: {
      title: "Example Case Study",
      name: "Rajat Kapoor",
      age: 42,
      profession: "Real Estate Investor",
      salary: 200000,
      loanAmount: 12000000,
      tenure: 20,
      interestRate: 8.75,
      emi: 106000,
      savings: 320000,
    },
  },
  eligibilityTipsFAQSection: {
    tips: {
      title: "Investment Tips",
      items: [
        "Maintain a strong credit score for high-value approvals.",
        "Keep property titles clear and updated.",
        "Opt for balance transfer to improve returns.",
      ],
    },
    faqs: {
      title: "FAQs for Investors",
      items: [
        { question: "Can I take multiple home loans?", answer: "Yes, based on repayment capacity and CIBIL." },
        { question: "Are commercial properties eligible?", answer: "Yes, under specific investment programs." },
        { question: "Is rental income considered?", answer: "Yes, verified rental income boosts eligibility." },
      ],
    },
  },
},

];

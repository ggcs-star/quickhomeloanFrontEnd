export const homeLoanByAmount = [
  {
    id: 1,
    slug: "50-lakh-emi",
    title: "₹50 Lakh Home Loan: Complete Guide",
    description: "Your complete guide to securing a ₹50 Lakh home loan with EMI calculations, eligibility, bank comparisons, and document requirements.",
    interestRate: "8.40% - 11.00% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

heroSection: {
  title: "₹50 Lakh Home Loan: The Only Guide You'll Need",
  description:
    "This is your complete, start-to-finish guide to securing a ₹50 Lakh home loan. We've covered every detail—from your exact EMI and eligibility to comparing all banks and listing every document required. Bookmark this page; you won't need to look elsewhere.",

  highlights: [
    "Detailed EMI breakdown for 5-30 years tenure",
    "Complete eligibility criteria explained",
    "Comparison of top 10+ banks & NBFCs",
    "Document checklist for salaried & self-employed",
    "Tax benefits and cost-saving strategies"
  ],

buttons: [
  {
    label: "Apply Instantly",
    href: "/apply-loan?category=Home Loan By Amount&subcategory=50 Lakh Home Loan EMI",
    variant: "primary",
  },
  {
    label: "Compare Banks",
    href: "/compare/50-lakh-home-loan",
    variant: "secondary",
  }
]

},

    emiSection: {
      title: "PART 1: THE EMI - What Will I Pay Monthly?",
      baseLoanAmount: 5000000,
      defaultInterestRate: 8.5,
      emiTable: [
        { tenure: 5, emi: 102601, totalInterest: 1156060, totalPayment: 6156060, minSalary: 205202 },
        { tenure: 10, emi: 61902, totalInterest: 2428240, totalPayment: 7428240, minSalary: 123804 },
        { tenure: 15, emi: 49198, totalInterest: 3855640, totalPayment: 8855640, minSalary: 98396 },
        { tenure: 20, emi: 43391, totalInterest: 5413840, totalPayment: 10413840, minSalary: 86782 },
        { tenure: 25, emi: 40215, totalInterest: 7064500, totalPayment: 12064500, minSalary: 80430 },
        { tenure: 30, emi: 38433, totalInterest: 8835880, totalPayment: 13835880, minSalary: 76866 }
      ],
      emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
      excelFormula: "=PMT(Rate/12, Tenure*12, -5000000)"
    },

    eligibilitySection: {
      title: "PART 2: ELIGIBILITY - Will I Get the Loan?",
      pillars: [
        {
          title: "Credit Score",
          description: "Minimum 650+, ideal 750+. Shows your repayment history and creditworthiness.",
          importance: "High"
        },
        {
          title: "Income",
          description: "Your stable income is the primary guarantee for the bank. See minimum salary requirements in EMI table.",
          importance: "High"
        },
        {
          title: "Age",
          description: "Typically 23 to 62 years (for salaried). Affects the maximum tenure you can choose.",
          importance: "Medium"
        },
        {
          title: "Employment Stability",
          description: "Salaried: 1-2 years in current job. Self-Employed: 3+ years in business.",
          importance: "High"
        }
      ],
      comparison: {
        salaried: [
          "Consistent salary slips for last 3 months",
          "Bank statements for last 6 months",
          "Form 16 for last 2 years",
          "Employment proof (appointment letter)"
        ],
        selfEmployed: [
          "ITR for last 2-3 years",
          "Profit & Loss statement",
          "Balance sheet",
          "Business proof (GST, shop license)"
        ]
      }
    },

    banksComparison: {
      title: "PART 3: BANKS & NBFCs - Who Should I Borrow From?",
      lenders: [
        {
          name: "SBI",
          interestRate: "8.40% - 10.15%",
          processingFee: "0.40% (Min. ₹10,000)",
          feature: "Lowest rates; best for existing customers",
          bestFor: "Customers looking for lowest interest rates"
        },
        {
          name: "HDFC",
          interestRate: "8.50% - 10.25%",
          processingFee: "0.50% or ₹3,000",
          feature: "Quick processing; good customer service",
          bestFor: "Fast processing and reliable service"
        },
        {
          name: "LIC HFL",
          interestRate: "8.45% - 10.05%",
          processingFee: "0.50% (Max. ₹15,000)",
          feature: "Competitive rates for government employees",
          bestFor: "Government and public sector employees"
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% - 10.25%",
          processingFee: "0.50% (Min. ₹1,100)",
          feature: "Tech-friendly; easy online tracking",
          bestFor: "Tech-savvy borrowers"
        },
        {
          name: "Axis Bank",
          interestRate: "8.50% - 10.35%",
          processingFee: "1% of loan amount",
          feature: "Wide range of property approval",
          bestFor: "Various property types"
        },
        {
          name: "Bajaj Finserv",
          interestRate: "8.60% - 11.00%",
          processingFee: "Up to 0.80% (Max. ₹10,000)",
          feature: "Fastest disbursal for pre-approved projects",
          bestFor: "Quick disbursal needs"
        }
      ]
    },

    documentsSection: {
      title: "PART 4: DOCUMENTS - What Papers Do I Need?",
      commonDocuments: [
        "PAN Card",
        "Aadhaar Card",
        "Passport-sized photographs"
      ],
      salariedDocuments: {
        identity: ["Passport", "Driver's License", "Voter ID"],
        income: ["Last 3 months' salary slips", "Last 6 months' bank statements"],
        employment: ["Form 16 (last 2 years)", "Appointment Letter"]
      },
      selfEmployedDocuments: {
        identity: ["Passport", "Driver's License", "Voter ID"],
        income: ["ITR for last 2-3 years", "Profit & Loss Statement", "Balance Sheet"],
        business: ["GST Registration", "Shop Act License", "Business Address Proof"]
      },
      propertyDocuments: [
        "Agreement to Sell",
        "Allotment Letter (if from a builder)",
        "Approved Building Plan",
        "NOC from Society/Builder"
      ]
    },

    proTipsSection: {
      title: "PART 5: PRO TIPS & STRATEGIES",
      reduceEmiTips: [
        {
          tip: "Improve Your Credit Score",
          description: "Pay all existing EMIs and credit card bills on time to improve your credit score."
        },
        {
          tip: "Increase Down Payment",
          description: "A higher down payment means a lower loan amount and EMI."
        },
        {
          tip: "Choose a Longer Tenure",
          description: "But be aware of the higher total interest over the loan period."
        },
        {
          tip: "Opt for a Joint Loan",
          description: "Combining income with a spouse or parent can increase eligibility and reduce individual burden."
        }
      ],
      costAnalysis: {
        example: "20-year ₹50 Lakh loan at 8.5%",
        interestPaid: "₹54.13 Lakh",
        totalRepayment: "₹1.04 Crore",
        note: "A longer tenure reduces EMI but dramatically increases total interest."
      }
    },

    faqSection: {
      title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
      faqs: [
        {
          question: "What is the EMI for 50 Lakhs for 10 years?",
          answer: "Approximately ₹61,902 per month at 8.5% interest."
        },
        {
          question: "What is the minimum salary for a ₹50 Lakh home loan?",
          answer: "For a 20-year loan, you need a minimum monthly salary of approximately ₹87,000."
        },
        {
          question: "Which bank is best for a ₹50 Lakh home loan?",
          answer: "SBI often has the lowest interest rates, while HDFC and ICICI are known for quick service. The 'best' bank depends on your specific profile and needs."
        },
        {
          question: "What if my ITR is less than my actual income?",
          answer: "Banks will always consider your ITR income. If it's lower, your loan eligibility will be reduced. It's crucial to have your ITR reflect your actual earnings."
        },
        {
          question: "Can I get a loan with a CIBIL score of 680?",
          answer: "Yes, but it will be challenging. You may face a higher interest rate or require a co-applicant with a strong credit history."
        },
        {
          question: "What are the tax benefits?",
          answer: "Principal Repayment: Deduction up to ₹1.5 Lakh under Section 80C. Interest Payment: Deduction up to ₹2 Lakh under Section 24(b)."
        }
      ]
    },

    actionPlan: {
      title: "YOUR ACTION PLAN",
      steps: [
        "Check Your Eligibility & Get Instant Approval",
        "Download The Complete Document Checklist",
        "Compare Customized Offers From 10+ Banks"
      ],
      conclusion: "You are now fully equipped to make an informed decision on your ₹50 Lakh home loan. This guide is designed to save you hours of research and give you the confidence to move forward with your home-buying dream."
    },

    // Additional sections for component compatibility
    features: {
      title: "Key Features of ₹50 Lakh Home Loan",
      points: [
        "Flexible tenure options from 5 to 30 years",
        "Competitive interest rates from 8.40% onwards",
        "Online application and tracking",
        "Balance transfer facility",
        "Top-up loan options",
        "Pre-payment facilities"
      ]
    },

    eligibility: {
      title: "Eligibility Criteria",
      points: [
        "Age: 21-65 years",
        "Indian residents only",
        "Minimum income: As per EMI affordability",
        "Credit score: 650+ preferred",
        "Employment stability: 1+ years for salaried"
      ]
    },

    documentsRequired: {
      title: "Documents Required",
      descriptions: [
        "KYC Documents (PAN, Aadhaar, Photos)",
        "Income Proof (Salary slips/ITR)",
        "Address Proof",
        "Property Documents",
        "Bank Statements"
      ]
    },

    largeFaq: [
      {
        question: "Is a Home Loan A Tax Saving Deduction?",
        answer: "Yes, under Section 80C and Section 24 of the Income Tax Act, you can claim deductions on principal and interest paid on home loans as per applicable limits."
      },
      {
        question: "What is The Minimum Salary For A Home Loan?",
        answer: "The minimum salary requirement depends on the lender, your location, and other financial criteria. Generally, salaried individuals with a stable income are eligible."
      }
    ]
  },
  {
    id: 2,
    slug: "20-lakh-emi",
    title: "₹20 Lakh Home Loan: Complete Guide",
    description:
      "Your ultimate guide to understanding a ₹20 Lakh home loan — EMI breakdowns, eligibility, top banks, and required documents to help you plan smartly.",
    interestRate: "8.40% - 11.00% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

 heroSection: {
  title: "₹20 Lakh Home Loan: Complete Guide & EMI Breakdown",
  description:
    "This comprehensive guide covers everything you need to know before taking a ₹20 Lakh home loan. From EMI calculations across different tenures to eligibility rules, required documents, and top bank comparisons — this page serves as your complete decision-making toolkit.",

  highlights: [
    "EMI chart across 5, 10, 15, 20, 25, and 30-year tenures",
    "Clear explanation of income, age, and credit score eligibility",
    "Side-by-side comparison of leading banks & NBFCs",
    "Document checklist for salaried and self-employed applicants",
    "Expert strategies to reduce EMI and total interest outgo"
  ],

  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By Amount&subcategory=20 Lakh Home Loan EMI",
      variant: "primary",
    },
    {
      label: "Compare Banks",
      href: "/compare/20-lakh-home-loan",
      variant: "secondary",
    }
  ]
},

    emiSection: {
      title: "PART 1: EMI – Your Monthly Payment Explained",
      baseLoanAmount: 2000000,
      defaultInterestRate: 8.5,
      emiTable: [
        { tenure: 5, emi: 41040, totalInterest: 462420, totalPayment: 2462420, minSalary: 82080 },
        { tenure: 10, emi: 24761, totalInterest: 971280, totalPayment: 2971280, minSalary: 49522 },
        { tenure: 15, emi: 19679, totalInterest: 1542250, totalPayment: 3542250, minSalary: 39358 },
        { tenure: 20, emi: 17356, totalInterest: 2165520, totalPayment: 4165520, minSalary: 34712 },
        { tenure: 25, emi: 16086, totalInterest: 2825800, totalPayment: 4825800, minSalary: 32172 },
        { tenure: 30, emi: 15373, totalInterest: 3534350, totalPayment: 5534350, minSalary: 30746 }
      ],
      emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
      excelFormula: "=PMT(Rate/12, Tenure*12, -2000000)"
    },

    eligibilitySection: {
      title: "PART 2: ELIGIBILITY – Can You Get a ₹20 Lakh Loan?",
      pillars: [
        {
          title: "Credit Score",
          description: "A score of 650+ is required; 750+ is ideal for better interest rates.",
          importance: "High"
        },
        {
          title: "Income",
          description: "Your income should comfortably support your EMI obligations — check the EMI table for salary guidance.",
          importance: "High"
        },
        {
          title: "Age",
          description: "Applicants aged 23 to 62 years (salaried) are typically eligible.",
          importance: "Medium"
        },
        {
          title: "Employment Stability",
          description: "At least 1 year in current job (salaried) or 3+ years in business (self-employed).",
          importance: "High"
        }
      ],
      comparison: {
        salaried: [
          "Salary slips for last 3 months",
          "Bank statements for last 6 months",
          "Form 16 (2 years)",
          "Employment proof (offer/appointment letter)"
        ],
        selfEmployed: [
          "ITR for last 2-3 years",
          "Profit & Loss statement",
          "Balance sheet",
          "Business registration proof"
        ]
      }
    },

    banksComparison: {
      title: "PART 3: BEST BANKS & NBFCs FOR ₹20 LAKH HOME LOAN",
      lenders: [
        {
          name: "SBI",
          interestRate: "8.40% - 10.15%",
          processingFee: "0.40% (Min ₹10,000)",
          feature: "Lowest interest rates for eligible borrowers",
          bestFor: "Those seeking stability and trust"
        },
        {
          name: "HDFC",
          interestRate: "8.50% - 10.25%",
          processingFee: "0.50% or ₹3,000",
          feature: "Quick approval process with digital options",
          bestFor: "Tech-friendly and quick service seekers"
        },
        {
          name: "LIC HFL",
          interestRate: "8.45% - 10.05%",
          processingFee: "0.50% (Max ₹15,000)",
          feature: "Good for government employees",
          bestFor: "Stable income applicants"
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% - 10.25%",
          processingFee: "0.50% (Min ₹1,100)",
          feature: "App-based tracking & flexible options",
          bestFor: "Modern, digital-savvy users"
        }
      ]
    },

    documentsSection: {
      title: "PART 4: DOCUMENTS REQUIRED FOR ₹20 LAKH LOAN",
      commonDocuments: ["PAN Card", "Aadhaar Card", "Passport Photos"],
      salariedDocuments: {
        identity: ["Voter ID", "Driving License"],
        income: ["Last 3 months’ salary slips", "Last 6 months’ bank statements"],
        employment: ["Form 16 (2 years)", "Employment Certificate"]
      },
      selfEmployedDocuments: {
        identity: ["Voter ID", "Driving License"],
        income: ["ITR (2-3 years)", "Profit & Loss Statement"],
        business: ["GST Certificate", "Business Registration Proof"]
      },
      propertyDocuments: [
        "Agreement to Sell",
        "Builder NOC (if applicable)",
        "Approved Construction Plan"
      ]
    },

    proTipsSection: {
      title: "PART 5: SMART TIPS TO SAVE MONEY",
      reduceEmiTips: [
        {
          tip: "Boost Your Credit Score",
          description: "Pay off existing dues and maintain timely payments for better rates."
        },
        {
          tip: "Make a Higher Down Payment",
          description: "A smaller loan principal reduces your EMI and total interest outgo."
        },
        {
          tip: "Consider Joint Applications",
          description: "Adding a co-applicant can boost eligibility and improve rates."
        }
      ],
      costAnalysis: {
        example: "20-year ₹20 Lakh loan at 8.5%",
        interestPaid: "₹21.65 Lakh",
        totalRepayment: "₹41.65 Lakh",
        note: "Lower tenure = higher EMI but less total interest."
      }
    },

    faqSection: {
      title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
      faqs: [
        {
          question: "What is the EMI for ₹20 Lakh for 20 years?",
          answer: "Approximately ₹17,356 per month at 8.5% interest."
        },
        {
          question: "What is the minimum salary required for a ₹20 Lakh loan?",
          answer: "For a 20-year loan, a minimum salary of around ₹35,000 per month is recommended."
        },
        {
          question: "Which bank offers the best ₹20 Lakh home loan?",
          answer: "SBI and HDFC are top choices, offering competitive rates and reliable service."
        },
        {
          question: "Can I prepay or foreclose the loan early?",
          answer: "Yes, most banks allow part-prepayment or full foreclosure with minimal charges."
        },
        {
          question: "Are there tax benefits for a ₹20 Lakh home loan?",
          answer: "Yes, under Sections 80C and 24(b) for both principal and interest repayment."
        }
      ]
    },

    actionPlan: {
      title: "YOUR ACTION PLAN",
      steps: [
        "Check your eligibility instantly",
        "Compare EMI options for different banks",
        "Submit documents digitally for faster approval"
      ],
      conclusion:
        "Now that you understand the ₹20 Lakh home loan process, you can make smarter financial choices with full confidence and clarity."
    },

    features: {
      title: "Key Features of ₹20 Lakh Home Loan",
      points: [
        "Flexible tenure options from 5 to 30 years",
        "Interest rates starting at 8.40%",
        "Minimal documentation and fast approvals",
        "Balance transfer and top-up facilities",
        "Online EMI calculator and application tracking"
      ]
    },

    eligibility: {
      title: "Eligibility Criteria",
      points: [
        "Age: 23-62 years (for salaried applicants)",
        "Resident Indians only",
        "Credit score: 650+ preferred",
        "Stable employment or business history",
        "Minimum income: ₹30,000+ depending on city"
      ]
    },

    documentsRequired: {
      title: "Documents Required",
      descriptions: [
        "KYC Documents (PAN, Aadhaar, Passport-size Photos)",
        "Income Proof (Salary Slips or ITR)",
        "Property Documents and Agreement",
        "Bank Statements (last 6 months)"
      ]
    },

    largeFaq: [
      {
        question: "What is the interest rate for ₹20 Lakh home loan?",
        answer: "Interest rates start from 8.40% and vary by lender and borrower profile."
      },
      {
        question: "Can I apply for ₹20 Lakh home loan jointly?",
        answer: "Yes, applying with a co-applicant can increase your eligibility and reduce the burden."
      }
    ]
  },
  {
    id: 3,
    slug: "25-lakh-emi",
    title: "₹25 Lakh Home Loan: Complete Guide",
    description:
      "A complete guide to understanding a ₹25 Lakh home loan — detailed EMI breakdowns, eligibility criteria, top banks, required documents, and expert financial tips.",
    interestRate: "8.40% - 11.00% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

   heroSection: {
  title: "₹25 Lakh Home Loan: Your Complete Guide & EMI Breakdown",
  description:
    "This all-in-one guide covers every detail you need before applying for a ₹25 Lakh home loan. From EMI charts and eligibility criteria to comparing leading lenders and preparing documents — this page helps you make an informed decision effortlessly.",

  highlights: [
    "EMI chart for 5, 10, 15, 20, 25, and 30-year options",
    "Clear breakdown of eligibility and minimum salary needed",
    "Side-by-side comparison of top banks and NBFCs",
    "Document checklist for salaried and self-employed applicants",
    "Expert tips to reduce EMI and overall borrowing cost"
  ],

  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By Amount&subcategory=25 Lakh Home Loan EMI",
      variant: "primary",
    },
    {
      label: "Compare Banks",
      href: "/compare/25-lakh-home-loan",
      variant: "secondary",
    }
  ]
},

    emiSection: {
      title: "PART 1: THE EMI – What Will I Pay Monthly?",
      baseLoanAmount: 2500000,
      defaultInterestRate: 8.5,
      emiTable: [
        { tenure: 5, emi: 51299, totalInterest: 578020, totalPayment: 3078020, minSalary: 102598 },
        { tenure: 10, emi: 30952, totalInterest: 1214100, totalPayment: 3714100, minSalary: 61904 },
        { tenure: 15, emi: 24599, totalInterest: 1928100, totalPayment: 4428100, minSalary: 49198 },
        { tenure: 20, emi: 21695, totalInterest: 2706900, totalPayment: 5206900, minSalary: 43390 },
        { tenure: 25, emi: 20107, totalInterest: 3532300, totalPayment: 6032300, minSalary: 40214 },
        { tenure: 30, emi: 19216, totalInterest: 4417900, totalPayment: 6917900, minSalary: 38432 }
      ],
      emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
      excelFormula: "=PMT(Rate/12, Tenure*12, -2500000)"
    },

    eligibilitySection: {
      title: "PART 2: ELIGIBILITY – Can You Get a ₹25 Lakh Loan?",
      pillars: [
        {
          title: "Credit Score",
          description: "A credit score of 650+ is the minimum, while 750+ helps secure better interest rates.",
          importance: "High"
        },
        {
          title: "Income",
          description: "Ensure your income comfortably covers EMI obligations. Refer to the EMI table for approximate salary requirements.",
          importance: "High"
        },
        {
          title: "Age",
          description: "Ideal age: 23–62 years (salaried) or 25–65 years (self-employed).",
          importance: "Medium"
        },
        {
          title: "Employment Stability",
          description: "Minimum 1 year in current job (salaried) or 3+ years in business (self-employed).",
          importance: "High"
        }
      ],
      comparison: {
        salaried: [
          "Salary slips for last 3 months",
          "Bank statements for last 6 months",
          "Form 16 for last 2 years",
          "Employment proof (offer/appointment letter)"
        ],
        selfEmployed: [
          "ITR for last 2–3 years",
          "Profit & Loss statement",
          "Balance Sheet",
          "Business proof (GST, registration)"
        ]
      }
    },

    banksComparison: {
      title: "PART 3: BEST BANKS & NBFCs FOR ₹25 LAKH HOME LOAN",
      lenders: [
        {
          name: "SBI",
          interestRate: "8.40% - 10.15%",
          processingFee: "0.40% (Min ₹10,000)",
          feature: "Reliable rates and strong customer service",
          bestFor: "Borrowers looking for stability"
        },
        {
          name: "HDFC",
          interestRate: "8.50% - 10.25%",
          processingFee: "0.50% or ₹3,000",
          feature: "Excellent digital loan management platform",
          bestFor: "Quick digital approvals"
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% - 10.25%",
          processingFee: "0.50% (Min ₹1,100)",
          feature: "App-based tracking & flexible repayment options",
          bestFor: "Tech-savvy borrowers"
        },
        {
          name: "LIC HFL",
          interestRate: "8.45% - 10.05%",
          processingFee: "0.50% (Max ₹15,000)",
          feature: "Ideal for government and PSU employees",
          bestFor: "Public sector workers"
        }
      ]
    },

    documentsSection: {
      title: "PART 4: DOCUMENTS REQUIRED FOR ₹25 LAKH LOAN",
      commonDocuments: ["PAN Card", "Aadhaar Card", "2 Passport-sized Photos"],
      salariedDocuments: {
        identity: ["Voter ID", "Driving License"],
        income: ["Last 3 months' salary slips", "Last 6 months' bank statements"],
        employment: ["Form 16 (2 years)", "Employment Proof (Offer Letter)"]
      },
      selfEmployedDocuments: {
        identity: ["Voter ID", "Driving License"],
        income: ["ITR for 2–3 years", "Profit & Loss Statement"],
        business: ["GST Registration", "Business License"]
      },
      propertyDocuments: [
        "Sale Agreement",
        "Builder NOC (if applicable)",
        "Approved Layout/Building Plan"
      ]
    },

    proTipsSection: {
      title: "PART 5: PRO TIPS TO MANAGE YOUR HOME LOAN SMARTLY",
      reduceEmiTips: [
        {
          tip: "Maintain a Healthy Credit Score",
          description: "Timely payments help you qualify for lower interest rates."
        },
        {
          tip: "Choose a Longer Tenure Initially",
          description: "Gives flexibility to manage EMIs; prepay later to save on total interest."
        },
        {
          tip: "Opt for Balance Transfer",
          description: "Switch to another lender when rates drop for significant savings."
        }
      ],
      costAnalysis: {
        example: "20-year ₹25 Lakh loan at 8.5%",
        interestPaid: "₹27.06 Lakh",
        totalRepayment: "₹52.06 Lakh",
        note: "Longer tenure reduces EMI but increases total interest paid."
      }
    },

    faqSection: {
      title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
      faqs: [
        {
          question: "What is the EMI for ₹25 Lakh for 20 years?",
          answer: "Approximately ₹21,695 per month at 8.5% interest rate."
        },
        {
          question: "What salary is required for a ₹25 Lakh home loan?",
          answer: "For a 20-year tenure, you’ll need a minimum monthly salary of around ₹43,000–₹45,000."
        },
        {
          question: "Which bank offers the best ₹25 Lakh loan rate?",
          answer: "SBI, HDFC, and ICICI offer competitive rates; compare all before applying."
        },
        {
          question: "Can I foreclose my ₹25 Lakh home loan early?",
          answer: "Yes. Most banks allow early foreclosure or partial prepayment with minimal charges."
        },
        {
          question: "What tax benefits do I get?",
          answer: "Deductions available under Section 80C (₹1.5 Lakh) and Section 24(b) (₹2 Lakh) annually."
        }
      ]
    },

    actionPlan: {
      title: "YOUR ACTION PLAN",
      steps: [
        "Use an EMI calculator to plan your repayment",
        "Compare offers from top banks & NBFCs",
        "Prepare documents and apply online"
      ],
      conclusion:
        "You’re now well-prepared to make an informed decision about your ₹25 Lakh home loan. Compare wisely and proceed with confidence."
    },

    features: {
      title: "Key Features of ₹25 Lakh Home Loan",
      points: [
        "Flexible tenure up to 30 years",
        "Attractive rates starting at 8.40%",
        "Quick online application process",
        "Prepayment and balance transfer available",
        "Minimal documentation requirements"
      ]
    },

    eligibility: {
      title: "Eligibility Criteria",
      points: [
        "Age: 23–62 years for salaried individuals",
        "Indian residents only",
        "Credit score: Minimum 650",
        "Stable income with minimum ₹35,000 per month",
        "Consistent job or business history"
      ]
    },

    documentsRequired: {
      title: "Documents Required",
      descriptions: [
        "KYC (PAN, Aadhaar, Photos)",
        "Income Proof (Salary slips or ITR)",
        "Property Documents (Sale Agreement, NOC)",
        "Bank Statements (6 months)"
      ]
    },

    largeFaq: [
      {
        question: "Is ₹25 Lakh enough for a home loan in tier-2 cities?",
        answer: "Yes, ₹25 Lakh can fund mid-range homes in many tier-2 and tier-3 cities."
      },
      {
        question: "What is the minimum EMI for ₹25 Lakh?",
        answer: "Around ₹19,200 per month for a 30-year tenure at 8.5% interest."
      }
    ]
  },

  {
    id: 4,
    slug: "30-lakh-emi",
    title: "₹30 Lakh Home Loan: Complete Guide",
    description:
      "A comprehensive guide to ₹30 Lakh home loans — including EMI calculations, eligibility criteria, top bank comparisons, required documents, and expert saving strategies.",
    interestRate: "8.40% - 11.00% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

heroSection: {
  title: "₹30 Lakh Home Loan: Complete Guide & EMI Breakdown",
  description:
    "Planning a ₹30 Lakh home loan? This in-depth guide walks you through everything — from EMI calculations and eligibility criteria to lender comparisons and required documentation. Use this resource to make confident, well-informed decisions.",

  highlights: [
    "EMI table for 5, 10, 15, 20, 25, and 30-year tenures",
    "Clear and structured eligibility criteria",
    "Comparison of leading banks and NBFCs",
    "Complete document checklist for all applicant types",
    "Expert strategies to reduce EMI and total interest cost"
  ],

  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By Amount&subcategory=30 Lakh Home Loan EMI",
      variant: "primary"
    },
    {
      label: "Compare Banks",
      href: "/compare/30-lakh-home-loan",
      variant: "secondary"
    }
  ]
},

    emiSection: {
      title: "PART 1: THE EMI – What Will Be My Monthly Payment?",
      baseLoanAmount: 3000000,
      defaultInterestRate: 8.5,
      emiTable: [
        { tenure: 5, emi: 61559, totalInterest: 693630, totalPayment: 3693630, minSalary: 123118 },
        { tenure: 10, emi: 37142, totalInterest: 1456920, totalPayment: 4456920, minSalary: 74284 },
        { tenure: 15, emi: 29518, totalInterest: 2313720, totalPayment: 5313720, minSalary: 59036 },
        { tenure: 20, emi: 26034, totalInterest: 3248280, totalPayment: 6248280, minSalary: 52068 },
        { tenure: 25, emi: 24129, totalInterest: 4238760, totalPayment: 7238760, minSalary: 48258 },
        { tenure: 30, emi: 23059, totalInterest: 5301750, totalPayment: 8301750, minSalary: 46118 }
      ],
      emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
      excelFormula: "=PMT(Rate/12, Tenure*12, -3000000)"
    },

    eligibilitySection: {
      title: "PART 2: ELIGIBILITY – Who Can Get a ₹30 Lakh Home Loan?",
      pillars: [
        {
          title: "Credit Score",
          description: "A minimum score of 650+ is required. Scores above 750 improve approval chances and rates.",
          importance: "High"
        },
        {
          title: "Income",
          description: "Ensure your income comfortably supports the EMI. Refer to the EMI table for approximate salary requirements.",
          importance: "High"
        },
        {
          title: "Age",
          description: "Salaried: 23–62 years; Self-employed: up to 65 years.",
          importance: "Medium"
        },
        {
          title: "Employment Stability",
          description: "At least 1 year with current employer or 3 years of stable business operation.",
          importance: "High"
        }
      ],
      comparison: {
        salaried: [
          "Salary slips (last 3 months)",
          "Bank statements (6 months)",
          "Form 16 (2 years)",
          "Employment proof (offer/appointment letter)"
        ],
        selfEmployed: [
          "ITR (2–3 years)",
          "Profit & Loss statement",
          "Balance Sheet",
          "Business proof (GST, registration certificate)"
        ]
      }
    },

    banksComparison: {
      title: "PART 3: TOP BANKS FOR ₹30 LAKH HOME LOAN",
      lenders: [
        {
          name: "SBI",
          interestRate: "8.40% - 10.15%",
          processingFee: "0.40% (Min ₹10,000)",
          feature: "Low interest & strong support network",
          bestFor: "Borrowers seeking trust and stability"
        },
        {
          name: "HDFC",
          interestRate: "8.50% - 10.25%",
          processingFee: "0.50% or ₹3,000",
          feature: "Quick digital approvals with flexible repayment",
          bestFor: "Quick processing and reliability"
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% - 10.25%",
          processingFee: "0.50% (Min ₹1,100)",
          feature: "Modern, app-based loan tracking system",
          bestFor: "Tech-savvy customers"
        },
        {
          name: "Axis Bank",
          interestRate: "8.50% - 10.35%",
          processingFee: "1% of loan amount",
          feature: "Wide property approval network",
          bestFor: "Diverse property types"
        }
      ]
    },

    documentsSection: {
      title: "PART 4: DOCUMENTS REQUIRED FOR ₹30 LAKH HOME LOAN",
      commonDocuments: ["PAN Card", "Aadhaar Card", "Passport-sized Photos"],
      salariedDocuments: {
        identity: ["Voter ID", "Driver’s License"],
        income: ["Salary slips (last 3 months)", "Bank statements (6 months)"],
        employment: ["Form 16 (2 years)", "Employment letter"]
      },
      selfEmployedDocuments: {
        identity: ["Voter ID", "Driver’s License"],
        income: ["ITR for 2–3 years", "Profit & Loss Statement"],
        business: ["GST Registration", "Business License"]
      },
      propertyDocuments: [
        "Agreement to Sell",
        "Builder NOC (if applicable)",
        "Approved Layout Plan"
      ]
    },

    proTipsSection: {
      title: "PART 5: PRO TIPS – Save Interest & Manage EMIs Better",
      reduceEmiTips: [
        {
          tip: "Maintain a Strong Credit Profile",
          description: "Ensure consistent EMI payments and avoid high credit utilization."
        },
        {
          tip: "Make Partial Prepayments",
          description: "Paying a lump sum periodically can reduce your outstanding balance and total interest."
        },
        {
          tip: "Choose a Longer Tenure Initially",
          description: "It reduces EMI pressure and allows flexibility to prepay later."
        }
      ],
      costAnalysis: {
        example: "20-year ₹30 Lakh loan at 8.5%",
        interestPaid: "₹32.48 Lakh",
        totalRepayment: "₹62.48 Lakh",
        note: "Extending tenure lowers EMI but raises total cost; prepay when possible."
      }
    },

    faqSection: {
      title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
      faqs: [
        {
          question: "What is the EMI for ₹30 Lakh for 20 years?",
          answer: "Approximately ₹26,034 per month at 8.5% interest rate."
        },
        {
          question: "What salary is required for a ₹30 Lakh loan?",
          answer: "For a 20-year tenure, a salary of ₹50,000–₹55,000 per month is recommended."
        },
        {
          question: "Which bank is best for a ₹30 Lakh home loan?",
          answer: "SBI and HDFC offer competitive rates; ICICI and Axis provide quick approvals."
        },
        {
          question: "Can I close my ₹30 Lakh loan early?",
          answer: "Yes. Banks allow early closure or partial prepayment after a lock-in period."
        },
        {
          question: "Are there tax benefits on ₹30 Lakh home loans?",
          answer: "Yes. Deductions under Section 80C (₹1.5 Lakh) and 24(b) (₹2 Lakh) are available."
        }
      ]
    },

    actionPlan: {
      title: "YOUR ACTION PLAN",
      steps: [
        "Check your EMI using our calculator",
        "Compare bank offers side-by-side",
        "Apply online with required documents"
      ],
      conclusion:
        "With this guide, you’re now fully equipped to apply for a ₹30 Lakh home loan confidently and smartly."
    },

    features: {
      title: "Key Features of ₹30 Lakh Home Loan",
      points: [
        "Flexible tenure of up to 30 years",
        "Attractive interest rates from 8.40%",
        "Minimal documentation and fast approvals",
        "Top-up and balance transfer options",
        "Tax-saving benefits under Indian laws"
      ]
    },

    eligibility: {
      title: "Eligibility Criteria",
      points: [
        "Age: 23–62 years for salaried, up to 65 for self-employed",
        "Resident Indians only",
        "Credit score: 650+ preferred",
        "Stable job or business history",
        "Minimum income: ₹45,000 per month"
      ]
    },

    documentsRequired: {
      title: "Documents Required",
      descriptions: [
        "KYC (PAN, Aadhaar, Photos)",
        "Income Proof (Salary Slips or ITR)",
        "Bank Statements (last 6 months)",
        "Property Agreement and NOC"
      ]
    },

    largeFaq: [
      {
        question: "What is the EMI for ₹30 Lakh for 30 years?",
        answer: "Approximately ₹23,059 per month at 8.5% interest rate."
      },
      {
        question: "Can I apply for ₹30 Lakh jointly with a family member?",
        answer: "Yes, co-applicants can increase your eligibility and help secure better loan terms."
      }
    ]
  },
  {
  id: 5,
  slug: "40-lakh-emi",
  title: "₹40 Lakh Home Loan: Complete Guide",
  description:
    "Your ultimate guide to understanding a ₹40 Lakh home loan — including EMI breakdowns, eligibility criteria, best banks, document checklist, and money-saving tips.",
  interestRate: "8.40% - 11.00% p.a.",
  processingFee: "Varies by lender",
  loanTenure: "Up to 30 years",

heroSection: {
  title: "₹40 Lakh Home Loan: Complete Guide & EMI Breakdown",
  description:
    "This comprehensive guide covers everything you need to know about a ₹40 Lakh home loan — including EMI calculations, eligibility criteria, lender comparisons, documentation requirements, and expert strategies to save on interest. Ideal for first-time buyers as well as existing homeowners planning a refinance.",

  highlights: [
    "EMI table for 5, 10, 15, 20, 25, and 30-year tenures",
    "Clear eligibility and income-based criteria",
    "Comparison of leading banks & NBFCs",
    "Document checklist for all applicant types",
    "Smart strategies to reduce EMI and total interest outgo"
  ],

  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By Amount&subcategory=40 Lakh Home Loan EMI",
      variant: "primary",
    },
    {
      label: "Compare Banks",
      href: "/compare/40-lakh-home-loan",
      variant: "secondary",
    }
  ]
},

  emiSection: {
    title: "PART 1: THE EMI – Monthly Payment Calculation",
    baseLoanAmount: 4000000,
    defaultInterestRate: 8.5,
    emiTable: [
      { tenure: 5, emi: 82078, totalInterest: 924830, totalPayment: 4924830, minSalary: 164156 },
      { tenure: 10, emi: 49522, totalInterest: 1942560, totalPayment: 5942560, minSalary: 99044 },
      { tenure: 15, emi: 39358, totalInterest: 3084900, totalPayment: 7084900, minSalary: 78716 },
      { tenure: 20, emi: 34712, totalInterest: 4331040, totalPayment: 8331040, minSalary: 69424 },
      { tenure: 25, emi: 32172, totalInterest: 5650600, totalPayment: 9650600, minSalary: 64344 },
      { tenure: 30, emi: 30746, totalInterest: 7068900, totalPayment: 11068900, minSalary: 61492 }
    ],
    emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
    excelFormula: "=PMT(Rate/12, Tenure*12, -4000000)"
  },

  eligibilitySection: {
    title: "PART 2: ELIGIBILITY – Can You Qualify for ₹40 Lakh Loan?",
    pillars: [
      {
        title: "Credit Score",
        description: "Minimum 650 required. A score of 750+ gives better loan terms and faster approval.",
        importance: "High"
      },
      {
        title: "Income",
        description: "Income must sufficiently cover the EMI burden. Refer to the EMI table for expected salary levels.",
        importance: "High"
      },
      {
        title: "Age",
        description: "Applicants aged 23–62 years (salaried) or 25–65 years (self-employed) are eligible.",
        importance: "Medium"
      },
      {
        title: "Employment Stability",
        description: "1+ year in current employment (salaried) or 3+ years in business (self-employed).",
        importance: "High"
      }
    ],
    comparison: {
      salaried: [
        "Salary slips (3 months)",
        "Bank statements (6 months)",
        "Form 16 (2 years)",
        "Employment letter"
      ],
      selfEmployed: [
        "ITR (2–3 years)",
        "Profit & Loss statement",
        "Balance Sheet",
        "Business registration proof"
      ]
    }
  },

  banksComparison: {
    title: "PART 3: TOP BANKS & NBFCs OFFERING ₹40 LAKH HOME LOAN",
    lenders: [
      {
        name: "SBI",
        interestRate: "8.40% - 10.15%",
        processingFee: "0.40% (Min ₹10,000)",
        feature: "Trusted lender with competitive rates",
        bestFor: "Borrowers seeking lowest interest rates"
      },
      {
        name: "HDFC",
        interestRate: "8.50% - 10.25%",
        processingFee: "0.50% or ₹3,000",
        feature: "Fast processing with strong customer support",
        bestFor: "Quick and easy digital process"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.55% - 10.25%",
        processingFee: "0.50% (Min ₹1,100)",
        feature: "Digital tracking and flexible repayment",
        bestFor: "Tech-savvy borrowers"
      },
      {
        name: "Axis Bank",
        interestRate: "8.50% - 10.35%",
        processingFee: "1% of loan amount",
        feature: "Good for multiple property types",
        bestFor: "Diverse property buyers"
      }
    ]
  },

  documentsSection: {
    title: "PART 4: DOCUMENTS REQUIRED FOR ₹40 LAKH HOME LOAN",
    commonDocuments: ["PAN Card", "Aadhaar Card", "Passport-size Photos"],
    salariedDocuments: {
      identity: ["Voter ID", "Driver’s License"],
      income: ["Salary slips (3 months)", "Bank statements (6 months)"],
      employment: ["Form 16 (2 years)", "Employment Proof"]
    },
    selfEmployedDocuments: {
      identity: ["Voter ID", "Driver’s License"],
      income: ["ITR (2–3 years)", "Profit & Loss Statement"],
      business: ["GST Registration", "Business License"]
    },
    propertyDocuments: [
      "Sale Agreement",
      "Builder NOC (if applicable)",
      "Approved Building Plan"
    ]
  },

  proTipsSection: {
    title: "PART 5: PRO TIPS TO SAVE MONEY ON YOUR ₹40 LAKH LOAN",
    reduceEmiTips: [
      {
        tip: "Make Prepayments Early",
        description: "Early prepayments reduce the principal and overall interest paid."
      },
      {
        tip: "Compare Offers Before Applying",
        description: "Each bank has different rates and fees — always compare before finalizing."
      },
      {
        tip: "Maintain a High Credit Score",
        description: "Scores above 750 unlock the lowest possible interest rates."
      }
    ],
    costAnalysis: {
      example: "20-year ₹40 Lakh loan at 8.5%",
      interestPaid: "₹43.31 Lakh",
      totalRepayment: "₹83.31 Lakh",
      note: "A higher down payment can reduce EMI and total interest significantly."
    }
  },

  faqSection: {
    title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
    faqs: [
      {
        question: "What is the EMI for ₹40 Lakh for 20 years?",
        answer: "Approximately ₹34,712 per month at 8.5% interest."
      },
      {
        question: "What salary is required for a ₹40 Lakh home loan?",
        answer: "For a 20-year loan, you’ll need a minimum monthly income of ₹70,000–₹75,000."
      },
      {
        question: "Which bank offers the lowest rate for ₹40 Lakh loan?",
        answer: "SBI and HDFC generally offer the most competitive rates."
      },
      {
        question: "Can I prepay or close the ₹40 Lakh loan early?",
        answer: "Yes, banks allow part-prepayment or full closure with minimal or zero charges for floating-rate loans."
      },
      {
        question: "Are there tax benefits for ₹40 Lakh loan?",
        answer: "Yes, deductions up to ₹1.5 Lakh under Section 80C and ₹2 Lakh under Section 24(b)."
      }
    ]
  },

  actionPlan: {
    title: "YOUR ACTION PLAN",
    steps: [
      "Check your eligibility and EMI affordability",
      "Compare loan offers from top lenders",
      "Gather required documents and apply online"
    ],
    conclusion:
      "You’re now fully equipped to apply for your ₹40 Lakh home loan with clarity, confidence, and smart financial planning."
  },

  features: {
    title: "Key Features of ₹40 Lakh Home Loan",
    points: [
      "Tenure options up to 30 years",
      "Interest rates starting at 8.40%",
      "Minimal documentation process",
      "Balance transfer and top-up options",
      "Prepayment and foreclosure allowed"
    ]
  },

  eligibility: {
    title: "Eligibility Criteria",
    points: [
      "Age: 23–62 years (salaried) / up to 65 years (self-employed)",
      "Indian residents only",
      "Credit score: 650+ preferred",
      "Stable job or business history",
      "Minimum monthly income: ₹60,000+"
    ]
  },

  documentsRequired: {
    title: "Documents Required",
    descriptions: [
      "KYC Documents (PAN, Aadhaar, Photos)",
      "Income Proof (Salary Slips / ITR)",
      "Bank Statements (6 months)",
      "Property Documents (Sale Agreement, NOC)"
    ]
  },

  largeFaq: [
    {
      question: "What is the EMI for ₹40 Lakh for 30 years?",
      answer: "Around ₹30,746 per month at 8.5% interest."
    },
    {
      question: "Can a co-applicant increase my ₹40 Lakh loan eligibility?",
      answer: "Yes, adding a co-applicant’s income can significantly boost your eligibility and loan amount."
    }
  ]
},
{
  id: 6,
  slug: "1-crore-emi",
  title: "₹1 Crore Home Loan: Complete Guide",
  description:
    "The ultimate guide to your ₹1 Crore home loan — EMI breakdown, eligibility criteria, top banks comparison, document checklist, and strategies to save lakhs in interest.",
  interestRate: "8.40% - 11.00% p.a.",
  processingFee: "Varies by lender",
  loanTenure: "Up to 30 years",

heroSection: {
  title: "₹1 Crore Home Loan: Your Complete Financial Roadmap",
  description:
    "Planning for a ₹1 Crore home loan? This comprehensive guide covers everything you need — from EMI charts and eligibility rules to bank comparisons, documents required, and smart repayment strategies. Designed for high-value borrowers who want clarity and confidence before applying.",

  highlights: [
    "EMI breakdown for tenures from 5 to 30 years",
    "Clear eligibility and income requirements",
    "Comparison of top banks & NBFCs for large home loans",
    "Document checklist for salaried and self-employed applicants",
    "Expert tips to reduce EMI, interest, and overall loan burden"
  ],

  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By Amount&subcategory=1 Crore Home Loan EMI",
      variant: "primary",
    },
    {
      label: "Compare Banks",
      href: "/compare/1-crore-home-loan",
      variant: "secondary",
    }
  ]
},

  emiSection: {
    title: "PART 1: THE EMI – Calculate Your Monthly Repayment",
    baseLoanAmount: 10000000,
    defaultInterestRate: 8.5,
    emiTable: [
      { tenure: 5, emi: 205195, totalInterest: 2312140, totalPayment: 12312140, minSalary: 410390 },
      { tenure: 10, emi: 123802, totalInterest: 4856480, totalPayment: 14856480, minSalary: 247604 },
      { tenure: 15, emi: 98396, totalInterest: 7709260, totalPayment: 17709260, minSalary: 196792 },
      { tenure: 20, emi: 86782, totalInterest: 10827680, totalPayment: 20827680, minSalary: 173564 },
      { tenure: 25, emi: 80430, totalInterest: 14126000, totalPayment: 24126000, minSalary: 160860 },
      { tenure: 30, emi: 76866, totalInterest: 17671760, totalPayment: 27671760, minSalary: 153732 }
    ],
    emiFormula: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1]",
    excelFormula: "=PMT(Rate/12, Tenure*12, -10000000)"
  },

  eligibilitySection: {
    title: "PART 2: ELIGIBILITY – Who Can Get a ₹1 Crore Home Loan?",
    pillars: [
      {
        title: "Credit Score",
        description: "A strong score of 750+ is typically required for a ₹1 Crore loan to secure the best rates.",
        importance: "High"
      },
      {
        title: "Income",
        description: "Expected monthly income of ₹1.7L–₹2L for 20-year tenure. This varies by bank and tenure.",
        importance: "High"
      },
      {
        title: "Age",
        description: "Salaried: 23–60 years; Self-employed: up to 65 years at loan maturity.",
        importance: "Medium"
      },
      {
        title: "Employment Stability",
        description: "1–2 years of stable employment or 3+ years in business is preferred.",
        importance: "High"
      }
    ],
    comparison: {
      salaried: [
        "Salary slips (3 months)",
        "Bank statements (6 months)",
        "Form 16 (2 years)",
        "Employment verification"
      ],
      selfEmployed: [
        "ITR (2–3 years)",
        "Profit & Loss statement",
        "Balance Sheet",
        "Business proof and GST Registration"
      ]
    }
  },

  banksComparison: {
    title: "PART 3: TOP BANKS OFFERING ₹1 CRORE HOME LOANS",
    lenders: [
      {
        name: "SBI",
        interestRate: "8.40% - 10.15%",
        processingFee: "0.35% (Min ₹10,000)",
        feature: "Low interest and strong reliability",
        bestFor: "Established salaried borrowers"
      },
      {
        name: "HDFC",
        interestRate: "8.50% - 10.25%",
        processingFee: "0.50% or ₹3,000",
        feature: "Quick digital approval & flexible repayment",
        bestFor: "Digital and salaried applicants"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.55% - 10.25%",
        processingFee: "0.50% (Min ₹1,100)",
        feature: "Flexible top-up and balance transfer options",
        bestFor: "Urban professionals and entrepreneurs"
      },
      {
        name: "Axis Bank",
        interestRate: "8.50% - 10.35%",
        processingFee: "1% of loan amount",
        feature: "High-value loan approvals with minimal paperwork",
        bestFor: "High-net-worth individuals"
      }
    ]
  },

  documentsSection: {
    title: "PART 4: DOCUMENTS REQUIRED FOR ₹1 CRORE HOME LOAN",
    commonDocuments: ["PAN Card", "Aadhaar Card", "Passport-sized Photos"],
    salariedDocuments: {
      identity: ["Passport", "Voter ID", "Driver’s License"],
      income: ["Salary Slips (3 months)", "Bank Statements (6 months)"],
      employment: ["Form 16 (2 years)", "Employment Proof"]
    },
    selfEmployedDocuments: {
      identity: ["Voter ID", "Driver’s License"],
      income: ["ITR (3 years)", "Balance Sheet & P&L Statement"],
      business: ["GST Registration", "Business License"]
    },
    propertyDocuments: [
      "Registered Sale Agreement",
      "Builder NOC (if applicable)",
      "Approved Layout / Building Plan"
    ]
  },

  proTipsSection: {
    title: "PART 5: EXPERT TIPS TO SAVE INTEREST ON ₹1 CRORE LOAN",
    reduceEmiTips: [
      {
        tip: "Negotiate Your Interest Rate",
        description: "Use your strong credit profile to negotiate a lower interest rate."
      },
      {
        tip: "Make Large Prepayments Annually",
        description: "Pay bonuses or extra savings annually to reduce outstanding principal faster."
      },
      {
        tip: "Opt for Balance Transfer If Needed",
        description: "Switch to a lender offering lower rates if your CIBIL improves."
      }
    ],
    costAnalysis: {
      example: "20-year ₹1 Crore loan at 8.5%",
      interestPaid: "₹108.27 Lakh",
      totalRepayment: "₹208.27 Lakh",
      note: "A shorter tenure significantly reduces interest burden — consider 15 years if affordable."
    }
  },

  faqSection: {
    title: "PART 6: FREQUENTLY ASKED QUESTIONS (FAQs)",
    faqs: [
      {
        question: "What is the EMI for ₹1 Crore for 20 years?",
        answer: "Approximately ₹86,782 per month at 8.5% interest rate."
      },
      {
        question: "What salary is required for a ₹1 Crore loan?",
        answer: "Typically, ₹1.7–₹2 Lakh monthly income is required for 20-year tenure eligibility."
      },
      {
        question: "Can I take a ₹1 Crore loan jointly?",
        answer: "Yes. A joint loan with a co-applicant boosts eligibility and helps share EMI responsibility."
      },
      {
        question: "Which bank is best for ₹1 Crore home loans?",
        answer: "SBI and HDFC usually offer the lowest effective interest rates and longest tenure options."
      },
      {
        question: "Are there tax benefits on ₹1 Crore home loan?",
        answer: "Yes — ₹1.5 Lakh under Section 80C and ₹2 Lakh under Section 24(b) annually."
      }
    ]
  },

  actionPlan: {
    title: "YOUR ACTION PLAN",
    steps: [
      "Calculate your EMI and assess affordability",
      "Compare offers from 10+ banks and NBFCs",
      "Prepare your documentation and apply digitally"
    ],
    conclusion:
      "You’re now ready to make an informed, confident decision about your ₹1 Crore home loan. Use the insights here to secure the lowest EMI and most flexible loan terms."
  },

  features: {
    title: "Key Features of ₹1 Crore Home Loan",
    points: [
      "Loan tenure up to 30 years",
      "Competitive interest rates from 8.40%",
      "Tax benefits under Section 80C and 24(b)",
      "Online approval and EMI tracking",
      "Prepayment and balance transfer flexibility"
    ]
  },

  eligibility: {
    title: "Eligibility Criteria",
    points: [
      "Age: 23–60 years (salaried) / up to 65 years (self-employed)",
      "Indian residents and select NRIs",
      "Credit score: 750+ preferred",
      "Stable income and employment record",
      "Minimum monthly income: ₹1.7L+"
    ]
  },

  documentsRequired: {
    title: "Documents Required",
    descriptions: [
      "KYC (PAN, Aadhaar, Photos)",
      "Income Proof (Salary Slips / ITR)",
      "Property Papers & Sale Agreement",
      "6 Months Bank Statements"
    ]
  },

  largeFaq: [
    {
      question: "What is the EMI for ₹1 Crore for 30 years?",
      answer: "Around ₹76,866 per month at 8.5% interest rate."
    },
    {
      question: "Can NRIs apply for a ₹1 Crore home loan?",
      answer: "Yes, most leading banks like HDFC, ICICI, and SBI offer home loans to NRIs with specific documentation."
    }
  ]
}




];
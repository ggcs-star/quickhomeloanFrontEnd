export const homeLoanByBhkTypes = [
  // ======================================================
  // 🏡 PLOT LOAN
  // ======================================================
  {
    id: 1,
    slug: "plot",
heroSection: {
  title: "Plot Loan / Land Loan – Interest Rates, Eligibility & Benefits (2025)",
  description:
    "Finance your dream land today and build your home tomorrow with India’s trusted loan partners.",
  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By BHK Types&subcategory=Home Loan for Plot",
    },
    {
      label: "Calculate EMI",
      href: "#emi-calculator",
    },
  ],
},

    introSection: {
      title: "What is a Plot Loan?",
      subtitle:
        "A plot loan helps you purchase residential land today so you can build your dream home later.",
      highlightedTerm: "Plot Loan",
      altTerm: "Land Loan",
      paragraphs: [
        {
          text:
            "A Plot Loan (or Land Loan) is a specific financial product offered by banks and NBFCs designed to help you purchase a piece of residential land for future construction. Unlike a standard home loan used for ready-to-move properties, a plot loan is exclusively for acquiring the land itself.",
          highlight: false,
        },
        {
          text:
            "Most lenders in India offer funding up to 75–80% of the plot's market value, provided the land is within municipal limits or approved development zones. If you plan to build immediately, you might also consider a Composite Loan, which covers both land purchase and construction costs.",
          highlight: false,
        },
      ],
      note:
        "Ready to take the first step? Check your plot loan eligibility and compare interest rates from top banks — all in one place at QuickHomeLoan.in.",
    },
    interestRatesSection: {
      title: "Current Plot Loan Interest Rates (2025)",
      description:
        "Compare the best plot loan offers currently available. Use the filters below to find the lender that best suits your priority.",
      note:
        "* Rates are indicative and may vary based on applicant profile, location, and lender policy. The EMI in the table is an estimate for a ₹20 Lakh loan taken for the maximum tenure offered by that specific lender at their lowest rate.",
      lenders: [
        {
          name: "SBI Plot Loan",
          rateRange: "8.50% – 9.10%",
          rate: 8.5,
          fee: 0.35,
          tenure: "15 years",
          emi: 19760,
        },
        {
          name: "HDFC Ltd",
          rateRange: "8.60% – 9.20%",
          rate: 8.6,
          fee: 0.5,
          tenure: "20 years",
          emi: 17356,
        },
        {
          name: "Axis Bank",
          rateRange: "8.65% – 9.40%",
          rate: 8.65,
          fee: 0.4,
          tenure: "20 years",
          emi: 17480,
        },
        {
          name: "ICICI Bank",
          rateRange: "8.75% – 9.50%",
          rate: 8.75,
          fee: 0.5,
          tenure: "20 years",
          emi: 17700,
        },
        {
          name: "PNB Housing",
          rateRange: "8.80% – 9.60%",
          rate: 8.8,
          fee: 1.0,
          tenure: "15 years",
          emi: 19300,
        },
      ],
    },
    emiCalculatorSection: {
      title: "Plot Loan EMI Calculator",
      defaults: {
        loanAmount: 2500000,
        interestRate: 8.75,
        loanTenure: 15,
      },
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Loan Tenure",
        emi: "Your Monthly EMI",
        principal: "Principal Amount",
        totalInterest: "Total Interest Payable",
        totalAmount: "Total Amount Payable",
      },
      ranges: {
        loanAmount: { min: 100000, max: 10000000, step: 50000 },
        interestRate: { min: 6, max: 15, step: 0.05 },
        loanTenure: { min: 1, max: 30, step: 1 },
      },
    },
    eligibilityCalculatorSection: {
      title: "Check Your Loan Eligibility",
      note: "*Estimated using a standard 60% FOIR (Fixed Obligation to Income Ratio). Actual eligibility may vary based on credit score and bank policy.",
      ctaLabel: "Check Official Offer",
      defaults: {
        monthlyIncome: 100000,
        existingEmis: 0,
        loanTenure: 20,
        interestRate: 8.75,
      },
      ranges: {
        monthlyIncome: { min: 20000, max: 1000000, step: 5000 },
        existingEmis: { min: 0, max: 500000, step: 1000 },
        loanTenure: { min: 1, max: 30, step: 1 },
        interestRate: { min: 6, max: 15, step: 0.05 },
      },
    },
    whatIsPlotLoanSection: {
      title: "What Exactly is a Plot Loan?",
      description:
        "A plot loan is a secured loan used to buy a piece of residential land. It is distinct because lenders see raw land as a higher risk than a built-up property.",
      points: [
        {
          heading: "LTV Ratio",
          text: "Lenders typically finance only up to 75–80% of the plot's registered market value. You must arrange the remaining down payment.",
        },
        {
          heading: "Location Matters",
          text: "The land must usually be within municipal or corporate limits. Rural or agricultural land is generally not eligible for standard plot loans.",
        },
        {
          heading: "Construction Clause",
          text: "Some banks may require you to begin construction within a set period (e.g., 2 to 5 years) after taking the loan.",
        },
      ],
      comparison: {
        title: "Quick Comparison",
        items: [
          { label: "Plot Loan", value: "Buy approved residential plot" },
          { label: "Composite Loan", value: "Buy plot + build house" },
          { label: "Raw Land Loan", value: "Agricultural (Hard to get)" },
        ],
      },
    },
    typesAndBenefitsSection: {
      types: {
        title: "Types of Plot & Land Loans",
        items: [
          {
            title: "Residential Plot Loan",
            description:
              "The most common type, used for purchasing a plot in city limits or a developed area. The plot must be approved by local development authorities like CMDA, DTCP, etc.",
          },
          {
            title: "Composite Plot + Construction Loan",
            description:
              "This loan combines funds for both purchasing the land and constructing a house on it. Disbursement happens in stages, and construction typically must start within a fixed timeframe (e.g., 2 years).",
          },
          {
            title: "Commercial Plot Loan",
            description:
              "Specifically for self-employed individuals or businesses looking to buy a piece of land for constructing an office, workshop, or other commercial property. Eligibility norms are stricter.",
          },
          {
            title: "Agricultural Land Loan (Limited)",
            description:
              "Offered to farmers and agriculturalists for buying land for farming purposes. These loans have specific usage restrictions and are not offered by all mainstream banks or HFCs.",
          },
        ],
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            title: "Ownership of Land",
            description:
              "Secure your preferred location early and build your dream home when you are financially ready.",
          },
          {
            title: "Flexible Usage",
            description:
              "Choose to construct a home, hold it as a long-term investment, or sell it later for potential profits.",
          },
          {
            title: "Easy Upgrade to Construction",
            description:
              "Many lenders offer seamless options to convert your plot loan into a composite loan for construction later.",
          },
          {
            title: "Property Value Appreciation",
            description:
              "Land is a finite resource, and its value often appreciates faster than constructed properties over time.",
          },
          {
            title: "Transparent Process",
            description:
              "The documentation and verification process is well-defined and similar to that of a standard home loan.",
          },
          {
            title: "Credit Growth",
            description:
              "Timely repayment of your plot loan EMIs helps build a strong credit history for future financial needs.",
          },
        ],
        cta: {
          label: "Compare Lenders Now",
          link: "#apply-now",
        },
      },
    },
    eligibilitySection: {
      title: "Eligibility Criteria",
      columns: ["Salaried Individuals", "Self-Employed"],
      rows: [
        {
          criteria: "Age Limit",
          salaried: "21 – 60 years",
          selfEmployed: "25 – 65 years",
        },
        {
          criteria: "Min. Income",
          salaried: "₹25,000 / month",
          selfEmployed: "₹3 Lakhs p.a.",
        },
        {
          criteria: "Credit Score",
          salaried: "700+ preferred",
          selfEmployed: "700+ preferred",
        },
        {
          criteria: "Work Experience",
          salaried: "Min 1–2 years",
          selfEmployed: "Min 3 years business continuity",
        },
      ],
    },
    documentsSection: {
      title: "Documents Required Checklist",
      cards: [
        {
          title: "Common Documents",
          iconStyle: "bg-gray-200",
          border: false,
          iconPath:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          items: [
            "Completed Application Form with photos",
            "KYC (PAN Card, Aadhaar, Passport)",
            "Address Proof (Utility bill/Rent Agreement)",
            "Property papers (Allotment letter, past title deeds)",
            "Processing fee cheque",
          ],
        },
        {
          title: "For Salaried",
          iconStyle: "bg-gray-200",
          border: false,
          iconPath:
            "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          items: [
            "Salary slips (Last 3 months)",
            "Form 16 (Last 2 years)",
            "Bank Statements (Last 6 months) showing salary credit",
          ],
        },
        {
          title: "For Self-Employed",
          iconStyle: "bg-gray-200",
          border: true,
          iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          items: [
            "Business Proof (GST Registration/Trade License)",
            "ITR with computation (Last 3 years)",
            "CA Audited Balance Sheet & P&L",
            "Bank Statements (Last 12 months)",
          ],
        },
      ],
      tip: "Tip: Ensure the land has a clear title and is free from legal disputes before applying.",
    },
    comparisonSection: {
      title: "Difference Between Plot Loan & Home Loan",
      columns: ["Plot Loan", "Home Loan"],
      rows: [
        {
          feature: "Purpose",
          plotLoan: "Purchase of residential land only",
          homeLoan: "Purchase of ready/under-construction house",
        },
        {
          feature: "Loan-to-Value (LTV)",
          plotLoan: "Max 75–80%",
          homeLoan: "Up to 90%",
        },
        {
          feature: "Max Tenure",
          plotLoan: "Usually 15–20 years",
          homeLoan: "Up to 30 years",
        },
        {
          feature: "Tax Benefits",
          plotLoan: "None (until construction starts)",
          plotLoanBold: true,
          homeLoan: "Available on Principal & Interest",
          homeLoanBold: true,
        },
        {
          feature: "Interest Rate",
          plotLoan: "Slightly Higher",
          homeLoan: "Lower",
        },
      ],
    },
    taxBenefitsSection: {
      title: "Understanding Tax Benefits on Plot Loans",
      description: {
        before: "This is the most common misconception.",
        highlight:
          "There are no immediate tax benefits on a standard plot loan.",
        after: "You cannot claim deductions under Section 80C (principal) or Section 24(b) (interest) just for buying land.",
      },
      card: {
        title: "When do benefits start?",
        text: "Tax benefits only kick in once you complete construction of a house on that plot. Once construction is finished, you can claim deductions for the combined loan (plot + construction) amount.",
      },
    },
    applyNowSection: {
      title: "Ready to Secure Your Land?",
      description:
        "Apply online today at QuickHomeLoan.in. We compare offers from India's top lenders to get you the lowest interest rates with minimal paperwork.",
      steps: ["Enter Details", "Compare Offers", "Instant Approval"],
      buttonLabel: "Apply Online Now",
      footerNote: "100% Digital Process • No Hidden Charges",
    },
    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Mumbai Main Branch, Fort, Mumbai, Maharashtra 400001",
      },
      phone: {
        title: "Phone",
        number: "98765 43210",
      },
      hours: {
        title: "Business Hours",
        details: "Mon-Fri: 10am - 4pm",
      },
      buttons: {
        talkToOfficer: "Talk to a Loan Officer",
        bookCallback: "Book a Callback",
      },
    },
    customerTestimonials: {
      title: "What Our Customers Say",
      testimonials: [
        {
          rating: 5,
          title: "Got ₹45 lakh approved within 2 days!",
          feedback:
            "The process was incredibly smooth and the interest rate was the best I could find. QuickHomeLoan handled everything with SBI. Highly recommended!",
          author: "Amit S.",
          location: "Pune",
        },
        {
          rating: 5,
          title: "Transferred my old loan and saved ₹3,000 per month.",
          feedback:
            "I was paying a high EMI with my previous bank. Transferring to SBI was seamless and the savings are significant. The team was very helpful.",
          author: "Sneha R.",
          location: "Delhi",
        },
      ],
    },
    faqsSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can I use a plot loan to buy agricultural land?",
          answer:
            "No, standard plot loans from banks are typically only for residential plots located within Municipal or local development authority limits. Agricultural land requires different types of financing which are harder to secure.",
        },
        {
          question: "How much down payment do I need for a plot loan?",
          answer:
            "Lenders usually finance 70% to 80% of the plot's registered value. You will need to arrange the remaining 20–30% as a down payment from your own sources.",
        },
        {
          question: "Is it mandatory to construct a house on the plot?",
          answer:
            "It depends on the lender. Some banks include a clause requiring construction to begin within 2–5 years of loan disbursement, especially if you want to avail of future composite loan benefits.",
        },
        {
          question: "Can NRIs apply for a plot loan in India?",
          answer:
            "Yes, many major Indian banks offer plot loans to NRIs, provided the plot is for residential purposes and located within approved government limits.",
        },
      ],
    },
  },

  // ======================================================
  // 🧱 CONSTRUCTION LOAN
  // ======================================================
  {
    id: 2,
    slug: "construction",
heroSection: {
  title: "Commercial Property Loan – Interest Rates, Eligibility & Benefits (2025)",
  description:
    "Finance the purchase, expansion, or construction of commercial real estate with flexible loan plans tailored for business growth.",
  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By BHK Types&subcategory=Commercial Property Loan",
    },
    {
      label: "Calculate EMI",
      href: "#emi-calculator",
    },
  ],
},



 introSection: {
  title: "What is a Construction Loan?",
  subtitle:
    "A construction loan helps you fund the building of your house in a structured, stage-wise manner.",
  highlightedTerm: "Construction Loan",
  altTerm: "Home Construction Finance",

  paragraphs: [
    {
      text:
        "A Construction Loan (or Home Construction Finance) is a specialized type of home loan designed to help you build a house on a plot you already own or are purchasing. Unlike a regular home loan, the loan amount is disbursed in stages based on construction progress and approved project milestones.",
      highlight: false,
    },
    {
      text:
        "A construction loan is typically released as your project moves from one phase to another — such as foundation, plinth, slab, brickwork, roofing, and finishing. This ensures proper utilization while reducing unnecessary interest, as you pay interest only on the disbursed amount.",
      highlight: false,
    },
    {
      text:
        "Lenders require a sanctioned building plan and a detailed construction cost estimate from a licensed architect or engineer before approving the loan.",
      highlight: false,
    },
  ],

  note:
    "Start your home construction journey confidently — check eligibility, compare top lenders, and get pre-approved with QuickHomeLoan.in.",
},


    interestRatesSection: {
      title: "Current Home Construction Loan Interest Rates (2025)",
      description:
        "Compare the best home construction loan offers available from leading banks and housing finance companies in India.",
      note:
        "* Rates are indicative and may vary based on applicant profile, location, and project approval status.",
      lenders: [
        {
          name: "SBI Construction Loan",
          rateRange: "8.60% – 9.20%",
          rate: 8.6,
          fee: 0.35,
          tenure: "30 years",
          emi: 16780,
        },
        {
          name: "HDFC Ltd",
          rateRange: "8.70% – 9.25%",
          rate: 8.7,
          fee: 0.5,
          tenure: "30 years",
          emi: 16890,
        },
        {
          name: "ICICI Bank",
          rateRange: "8.75% – 9.50%",
          rate: 8.75,
          fee: 0.5,
          tenure: "25 years",
          emi: 17720,
        },
        {
          name: "Axis Bank",
          rateRange: "8.65% – 9.40%",
          rate: 8.65,
          fee: 0.4,
          tenure: "30 years",
          emi: 16950,
        },
        {
          name: "LIC Housing Finance",
          rateRange: "8.80% – 9.50%",
          rate: 8.8,
          fee: 1.0,
          tenure: "25 years",
          emi: 18040,
        },
      ],
    },

    emiCalculatorSection: {
      title: "Home Construction Loan EMI Calculator",
      defaults: {
        loanAmount: 3000000,
        interestRate: 8.75,
        loanTenure: 20,
      },
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Loan Tenure",
        emi: "Your Monthly EMI",
        principal: "Principal Amount",
        totalInterest: "Total Interest Payable",
        totalAmount: "Total Amount Payable",
      },
      ranges: {
        loanAmount: { min: 100000, max: 10000000, step: 50000 },
        interestRate: { min: 6, max: 15, step: 0.05 },
        loanTenure: { min: 1, max: 30, step: 1 },
      },
    },

    eligibilityCalculatorSection: {
      title: "Check Your Construction Loan Eligibility",
      note: "*Eligibility depends on your income, repayment capacity, and project cost. Actual values may vary by lender.",
      ctaLabel: "Check Official Offer",
      defaults: {
        monthlyIncome: 120000,
        existingEmis: 0,
        loanTenure: 25,
        interestRate: 8.75,
      },
      ranges: {
        monthlyIncome: { min: 20000, max: 1000000, step: 5000 },
        existingEmis: { min: 0, max: 500000, step: 1000 },
        loanTenure: { min: 1, max: 30, step: 1 },
        interestRate: { min: 6, max: 15, step: 0.05 },
      },
    },

    whatIsPlotLoanSection: {
      title: "What is a Home Construction Loan?",
      description:
        "A home construction loan helps you finance the cost of building your house from scratch. It differs from a home purchase loan as the funds are released in stages, based on the progress of construction.",
      points: [
        {
          heading: "Stage-wise Disbursal",
          text: "Loan amounts are released in installments after each stage of construction completion, verified by the lender.",
        },
        {
          heading: "Flexible Tenure",
          text: "Repayment periods typically range from 10 to 30 years, depending on your repayment capacity and project cost.",
        },
        {
          heading: "Property Ownership",
          text: "The borrower must either own the plot or have a registered agreement to construct on it.",
        },
      ],
      comparison: {
        title: "Quick Comparison",
        items: [
          { label: "Construction Loan", value: "Finance for building a new home" },
          { label: "Home Improvement Loan", value: "For renovation/extension work" },
          { label: "Composite Loan", value: "Covers plot + construction together" },
        ],
      },
    },

    typesAndBenefitsSection: {
      types: {
        title: "Types of Construction Loans",
        items: [
          {
            title: "Self-Construction Loan",
            description:
              "For individuals constructing a home on a self-owned plot. Disbursed in stages based on progress.",
          },
          {
            title: "Builder Construction Loan",
            description:
              "For builders or developers constructing residential projects. Disbursed against project milestones.",
          },
          {
            title: "Extension / Renovation Loan",
            description:
              "For expanding or upgrading existing property — adding floors, rooms, or major renovations.",
          },
          {
            title: "Composite Construction Loan",
            description:
              "Combines financing for both purchasing the plot and constructing the house on it.",
          },
        ],
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            title: "Tailored Disbursement",
            description:
              "Funds are released as construction progresses, helping manage costs efficiently.",
          },
          {
            title: "Lower Interest During Construction",
            description:
              "Interest is charged only on the disbursed amount until full loan release.",
          },
          {
            title: "Tax Benefits Post Completion",
            description:
              "Eligible for Section 80C and 24(b) deductions once construction is completed.",
          },
          {
            title: "Flexible Repayment Options",
            description:
              "Switch to full EMI payments after project completion for easier budgeting.",
          },
          {
            title: "Boosts Property Value",
            description:
              "Constructing a home significantly increases the land’s market value.",
          },
        ],
        cta: {
          label: "Compare Construction Loans",
          link: "#apply-now",
        },
      },
    },

    eligibilitySection: {
      title: "Eligibility Criteria",
      columns: ["Salaried Individuals", "Self-Employed"],
      rows: [
        {
          criteria: "Age Limit",
          salaried: "21 – 60 years",
          selfEmployed: "25 – 65 years",
        },
        {
          criteria: "Min. Income",
          salaried: "₹30,000 / month",
          selfEmployed: "₹4 Lakhs p.a.",
        },
        {
          criteria: "Credit Score",
          salaried: "700+ preferred",
          selfEmployed: "700+ preferred",
        },
        {
          criteria: "Property Ownership",
          salaried: "Must own or co-own the plot",
          selfEmployed: "Registered ownership required",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required for Construction Loan",
      cards: [
        {
          title: "Common Documents",
          iconStyle: "bg-black",
          border: false,
          iconPath:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          items: [
            "Completed Loan Application Form",
            "KYC Documents (PAN, Aadhaar, Passport)",
            "Property Ownership Proof / Sale Deed",
            "Approved Building Plan",
            "Construction Cost Estimate from Architect/Engineer",
          ],
        },
        {
          title: "For Salaried Applicants",
          iconStyle: "bg-gray-200",
          border: false,
          iconPath:
            "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          items: [
            "Salary Slips (Last 3 months)",
            "Form 16 (Last 2 years)",
            "Bank Statements (6 months)",
          ],
        },
        {
          title: "For Self-Employed",
          iconStyle: "bg-white",
          border: true,
          iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          items: [
            "Business Proof (GST / Registration Certificate)",
            "Last 3 Years ITR with Computation",
            "CA-Certified Balance Sheet & Profit-Loss",
            "Bank Statements (12 months)",
          ],
        },
      ],
      tip: "Tip: Ensure the building plan is sanctioned by the local authority before applying.",
    },

    comparisonSection: {
      title: "Difference Between Construction Loan & Home Loan",
      columns: ["Construction Loan", "Home Loan"],
      rows: [
        {
          feature: "Purpose",
          plotLoan: "To finance the construction of a house on owned land",
          homeLoan: "To buy an existing or under-construction home",
        },
        {
          feature: "Fund Disbursal",
          plotLoan: "Released in stages based on construction progress",
          homeLoan: "Disbursed in full at once",
        },
        {
          feature: "Interest Charged",
          plotLoan: "Only on disbursed amount until full release",
          homeLoan: "On the entire loan amount from the start",
        },
        {
          feature: "Documentation",
          plotLoan: "Requires approved building plan and estimate",
          homeLoan: "Sale agreement and property documents",
        },
        {
          feature: "Tax Benefits",
          plotLoan: "Available post-construction completion",
          homeLoan: "Available immediately on EMIs",
        },
      ],
    },

    taxBenefitsSection: {
      title: "Understanding Tax Benefits on Construction Loans",
      description: {
        before: "Construction loans offer tax benefits only after the project is completed.",
        highlight: "Deductions under Sections 80C and 24(b)",
        after: "apply to the principal and interest components once the home is ready for possession.",
      },
      card: {
        title: "When can you claim benefits?",
        text: "Tax deductions can be claimed only after construction is completed and a completion certificate is obtained from the relevant authority.",
      },
    },

    applyNowSection: {
      title: "Ready to Build Your Dream Home?",
      description:
        "Apply for a construction loan today with QuickHomeLoan.in — compare top lenders, low EMIs, and fast disbursals in one place.",
      steps: ["Check Eligibility", "Upload Documents", "Get Instant Approval"],
      buttonLabel: "Apply for Construction Loan",
      footerNote: "100% Online Application • Hassle-Free Process",
    },
    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Mumbai Main Branch, Fort, Mumbai, Maharashtra 400001",
      },
      phone: {
        title: "Phone",
        number: "98765 43210",
      },
      hours: {
        title: "Business Hours",
        details: "Mon-Fri: 10am - 4pm",
      },
      buttons: {
        talkToOfficer: "Talk to a Loan Officer",
        bookCallback: "Book a Callback",
      },
    },
    customerTestimonials: {
      title: "What Our Customers Say",
      testimonials: [
        {
          rating: 5,
          title: "Got ₹45 lakh approved within 2 days!",
          feedback:
            "The process was incredibly smooth and the interest rate was the best I could find. QuickHomeLoan handled everything with SBI. Highly recommended!",
          author: "Amit S.",
          location: "Pune",
        },
        {
          rating: 5,
          title: "Transferred my old loan and saved ₹3,000 per month.",
          feedback:
            "I was paying a high EMI with my previous bank. Transferring to SBI was seamless and the savings are significant. The team was very helpful.",
          author: "Sneha R.",
          location: "Delhi",
        },
      ],
    },

    faqsSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can I get a construction loan for a plot I already own?",
          answer:
            "Yes, you can apply for a construction loan if you own the land and have a sanctioned building plan from the local authority.",
        },
        {
          question: "Do lenders release the entire loan amount at once?",
          answer:
            "No, construction loans are disbursed in stages, based on the progress verified by the lender.",
        },
        {
          question: "Are there tax benefits on construction loans?",
          answer:
            "Yes, under Sections 80C and 24(b), but only after construction completion and possession.",
        },
        {
          question: "Can NRIs apply for construction loans?",
          answer:
            "Yes, most major Indian banks allow NRIs to apply, provided the property is within approved limits and construction is for residential use.",
        },
      ],
    },
  },


  // ======================================================
  // 🏢 COMMERCIAL PROPERTY LOAN
  // ======================================================
  {
    id: 3,
    slug: "commercial",
heroSection: {
  title: "Commercial Property Loan – Interest Rates, Eligibility & Benefits (2025)",
  description:
    "Empower your business expansion with tailored commercial property loans. Get the best interest rates for office, retail, or industrial space financing.",
  buttons: [
    { 
      label: "Apply Instantly", 
      href: "/apply-loan?category=Home Loan By BHK Types&subcategory=Commercial Property Loan",
    },
    { label: "Calculate EMI", href: "#emi-calculator" }
  ]
},

  introSection: {
  title: "What is a Commercial Property Loan?",
  subtitle:
    "A commercial property loan helps individuals and businesses purchase or construct property meant for business use such as offices, shops, showrooms, or warehouses.",

  highlightedTerm: "Commercial Property Loan",
  altTerm: "Business Mortgage Loan",

  paragraphs: [
    {
      text:
        "A Commercial Property Loan (also known as a Business Mortgage Loan) is a secured loan that enables individuals, professionals, and companies to purchase or construct property for business use. It is commonly used for offices, retail shops, showrooms, warehouses, and other income-generating commercial spaces.",
      highlight: false,
    },
    {
      text:
        "These loans typically offer high loan amounts—often up to 70% of the property’s market value—based on business turnover, financial strength, and property valuation. Repayment tenures generally range from 10 to 20 years.",
      highlight: false,
    },
    {
      text:
        "Commercial loans also allow tax benefits, as interest paid can be treated as a business expense under applicable sections of the Income Tax Act, making them highly beneficial for growing businesses.",
      highlight: false,
    },
  ],

  note:
    "Compare top banks and NBFCs to find the best commercial loan offers with flexible repayment and tax-deductible benefits for your business.",
},


    interestRatesSection: {
      title: "Current Commercial Property Loan Interest Rates (2025)",
      description:
        "Compare competitive interest rates and offers from leading banks and financial institutions for commercial property loans in India.",
      note:
        "* Rates may vary based on business profile, loan amount, location, and nature of property (self-occupied or rented).",
      lenders: [
        {
          name: "HDFC Bank",
          rateRange: "9.25% – 10.50%",
          rate: 9.25,
          fee: 0.75,
          tenure: "15 years",
          emi: 20980,
        },
        {
          name: "ICICI Bank",
          rateRange: "9.50% – 10.75%",
          rate: 9.5,
          fee: 1.0,
          tenure: "15 years",
          emi: 21300,
        },
        {
          name: "Axis Bank",
          rateRange: "9.35% – 10.60%",
          rate: 9.35,
          fee: 0.8,
          tenure: "15 years",
          emi: 21110,
        },
        {
          name: "PNB Housing",
          rateRange: "9.70% – 11.00%",
          rate: 9.7,
          fee: 1.0,
          tenure: "12 years",
          emi: 22380,
        },
        {
          name: "SBI SME Loan",
          rateRange: "9.25% – 10.00%",
          rate: 9.25,
          fee: 0.5,
          tenure: "15 years",
          emi: 20960,
        },
      ],
    },

    emiCalculatorSection: {
      title: "Commercial Property Loan EMI Calculator",
      defaults: {
        loanAmount: 5000000,
        interestRate: 9.5,
        loanTenure: 15,
      },
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Loan Tenure",
        emi: "Your Monthly EMI",
        principal: "Principal Amount",
        totalInterest: "Total Interest Payable",
        totalAmount: "Total Amount Payable",
      },
      ranges: {
        loanAmount: { min: 500000, max: 50000000, step: 50000 },
        interestRate: { min: 8, max: 14, step: 0.05 },
        loanTenure: { min: 1, max: 20, step: 1 },
      },
    },

    eligibilityCalculatorSection: {
      title: "Check Your Commercial Loan Eligibility",
      note: "*Eligibility is based on business income, turnover, and property valuation. Actual approval may vary by lender.",
      ctaLabel: "Check Eligibility Now",
      defaults: {
        monthlyIncome: 200000,
        existingEmis: 20000,
        loanTenure: 15,
        interestRate: 9.5,
      },
      ranges: {
        monthlyIncome: { min: 50000, max: 2000000, step: 10000 },
        existingEmis: { min: 0, max: 1000000, step: 5000 },
        loanTenure: { min: 1, max: 20, step: 1 },
        interestRate: { min: 8, max: 14, step: 0.05 },
      },
    },

    whatIsPlotLoanSection: {
      title: "What is a Commercial Property Loan?",
      description:
        "A commercial property loan is a secured loan provided for purchasing, constructing, or renovating business-related property. These loans are offered to self-employed individuals, business owners, and organizations looking to expand or acquire premises.",
      points: [
        {
          heading: "Purpose-Based Financing",
          text: "Loans can be availed for office spaces, retail shops, warehouses, or industrial property.",
        },
        {
          heading: "Higher Loan Amounts",
          text: "Loan amounts can range up to ₹10 crores depending on business turnover and property valuation.",
        },
        {
          heading: "Tax Benefits",
          text: "Interest paid on commercial loans may be claimed as a business expense under the Income Tax Act.",
        },
      ],
      comparison: {
        title: "Quick Comparison",
        items: [
          { label: "Commercial Property Loan", value: "Buy/construct property for business use" },
          { label: "Lease Rental Discounting", value: "Loan against rent receivables" },
          { label: "Working Capital Loan", value: "Short-term business funding" },
        ],
      },
    },

    typesAndBenefitsSection: {
      types: {
        title: "Types of Commercial Loans",
        items: [
          {
            title: "Purchase Loan",
            description:
              "Used to buy ready commercial spaces like offices, showrooms, or shops within approved complexes.",
          },
          {
            title: "Construction Loan",
            description:
              "Funds for constructing new commercial buildings or expanding existing business premises.",
          },
          {
            title: "Lease Rental Discounting (LRD)",
            description:
              "Loan against rental income from leased commercial property — ideal for investors with existing tenants.",
          },
          {
            title: "Refinance Loan",
            description:
              "Transfer existing commercial property loans to another bank for lower interest or better tenure.",
          },
        ],
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            title: "Expand Business Ownership",
            description: "Acquire or build commercial spaces to grow your business assets.",
          },
          {
            title: "Flexible Repayment Options",
            description: "Choose between structured EMIs or customized repayment schedules.",
          },
          {
            title: "High Loan Amounts",
            description: "Funding up to 70% of the property’s market value.",
          },
          {
            title: "Tax Deductible Interest",
            description: "Interest payments can be treated as business expenses under tax laws.",
          },
          {
            title: "Long Tenure Options",
            description: "Repayment tenure up to 15–20 years for improved affordability.",
          },
        ],
        cta: {
          label: "Compare Commercial Loan Offers",
          link: "#apply-now",
        },
      },
    },

    eligibilitySection: {
      title: "Eligibility Criteria",
      columns: ["Salaried Professionals", "Self-Employed / Businesses"],
      rows: [
        {
          criteria: "Age Limit",
          salaried: "25 – 60 years",
          selfEmployed: "25 – 65 years",
        },
        {
          criteria: "Min. Income / Turnover",
          salaried: "₹50,000 / month",
          selfEmployed: "₹10 Lakhs annual turnover",
        },
        {
          criteria: "Credit Score",
          salaried: "700+ preferred",
          selfEmployed: "700+ preferred",
        },
        {
          criteria: "Property Type",
          salaried: "Commercial space (office/shop) within approved limits",
          selfEmployed: "Owned or leased business property",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required for Commercial Property Loan",
      cards: [
        {
          title: "Common Documents",
          iconStyle: "bg-black",
          border: false,
          iconPath:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          items: [
            "Loan Application Form",
            "KYC Documents (PAN, Aadhaar, Passport)",
            "Property Documents / Title Deeds",
            "Approved Layout Plan",
            "Business Financials / Balance Sheet",
          ],
        },
        {
          title: "For Salaried Professionals",
          iconStyle: "bg-gray-200",
          border: false,
          iconPath:
            "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          items: [
            "Salary Slips (Last 3 months)",
            "Form 16 (Last 2 years)",
            "Employment Proof & ID Card",
            "Bank Statements (6 months)",
          ],
        },
        {
          title: "For Businesses / Self-Employed",
          iconStyle: "bg-white",
          border: true,
          iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          items: [
            "Business Registration Certificate / GST",
            "Last 3 Years ITR",
            "Audited Financial Statements",
            "Business Bank Statements (12 months)",
          ],
        },
      ],
      tip: "Tip: The property should be commercially approved and not under residential zoning.",
    },

    comparisonSection: {
      title: "Difference Between Commercial Loan & Home Loan",
      columns: ["Commercial Loan", "Home Loan"],
      rows: [
        {
          feature: "Purpose",
          plotLoan: "For business or income-generating property",
          homeLoan: "For residential property purchase or construction",
        },
        {
          feature: "Interest Rate",
          plotLoan: "Higher (due to business risk)",
          homeLoan: "Lower (secured by residential property)",
        },
        {
          feature: "Tenure",
          plotLoan: "Up to 15–20 years",
          homeLoan: "Up to 30 years",
        },
        {
          feature: "Tax Benefits",
          plotLoan: "Interest is deductible as business expense",
          homeLoan: "Eligible under Section 80C and 24(b)",
        },
        {
          feature: "Property Type",
          plotLoan: "Commercial, shop, office, or warehouse",
          homeLoan: "Residential flat or house",
        },
      ],
    },

    taxBenefitsSection: {
      title: "Understanding Tax Benefits on Commercial Property Loans",
      description: {
        before:
          "Commercial property loans offer indirect tax advantages through business expense deductions.",
        highlight: "Interest paid is tax-deductible",
        after:
          "under Section 37(1) of the Income Tax Act if the property is used for business purposes.",
      },
      card: {
        title: "Important Note",
        text: "Tax benefits apply only if the commercial property is used for business operations. Properties purchased for investment or rental income have different tax rules.",
      },
    },

    applyNowSection: {
      title: "Ready to Expand Your Business?",
      description:
        "Apply for a commercial property loan today and take your business to the next level with QuickHomeLoan.in.",
      steps: ["Share Your Business Details", "Compare Bank Offers", "Get Quick Sanction"],
      buttonLabel: "Apply for Commercial Loan",
      footerNote: "Fast Processing • Transparent Terms • Trusted Lenders",
    },
    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Mumbai Main Branch, Fort, Mumbai, Maharashtra 400001",
      },
      phone: {
        title: "Phone",
        number: "98765 43210",
      },
      hours: {
        title: "Business Hours",
        details: "Mon-Fri: 10am - 4pm",
      },
      buttons: {
        talkToOfficer: "Talk to a Loan Officer",
        bookCallback: "Book a Callback",
      },
    },
    customerTestimonials: {
      title: "What Our Customers Say",
      testimonials: [
        {
          rating: 5,
          title: "Got ₹45 lakh approved within 2 days!",
          feedback:
            "The process was incredibly smooth and the interest rate was the best I could find. QuickHomeLoan handled everything with SBI. Highly recommended!",
          author: "Amit S.",
          location: "Pune",
        },
        {
          rating: 5,
          title: "Transferred my old loan and saved ₹3,000 per month.",
          feedback:
            "I was paying a high EMI with my previous bank. Transferring to SBI was seamless and the savings are significant. The team was very helpful.",
          author: "Sneha R.",
          location: "Delhi",
        },
      ],
    },

    faqsSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Can I apply for a commercial loan as an individual?",
          answer:
            "Yes, salaried professionals, self-employed individuals, and businesses can apply if the property is used for commercial or office purposes.",
        },
        {
          question: "How much funding can I get under a commercial loan?",
          answer:
            "Banks typically finance up to 65–70% of the property's market value depending on income and valuation.",
        },
        {
          question: "Can I claim tax benefits on a commercial property loan?",
          answer:
            "Yes, interest paid can be claimed as a business expense under Section 37(1), reducing taxable income.",
        },
        {
          question: "Do I need to mortgage the property?",
          answer:
            "Yes, the commercial property being purchased or constructed serves as collateral security for the loan.",
        },
      ],
    },
  },

  // ======================================================
  // 🛠️ RENOVATION LOAN
  // ======================================================
  {
    id: 4,
    slug: "renovation",
heroSection: {
  title: "Home Renovation Loan – Interest Rates, Eligibility & Benefits (2025)",
  description:
    "Upgrade, repair, or remodel your home easily with India’s leading renovation loan providers offering flexible EMIs and quick approvals.",
  buttons: [
    {
      label: "Apply Instantly",
      href: "/apply-loan?category=Home Loan By BHK Types&subcategory=Home Loan for Renovation",
    },
    {
      label: "Calculate EMI",
      href: "#emi-calculator",
    },
  ],
},


    introSection: {
  title: "What is a Home Renovation Loan?",
  subtitle:
    "A home renovation loan helps you upgrade, repair, or remodel your existing home without dipping into your savings.",

  highlightedTerm: "Home Renovation Loan",
  altTerm: "Home Improvement Loan",

  paragraphs: [
    {
      text:
        "A Home Renovation Loan (or Home Improvement Loan) is designed to help homeowners fund repairs, remodeling, upgrades, and extensions. It covers common expenses like painting, plumbing, tiling, kitchen remodeling, electrical rewiring, waterproofing, and adding new rooms or floors.",
      highlight: false,
    },
    {
      text:
        "These loans are ideal when you want to enhance the comfort, safety, or aesthetics of your home while spreading the cost over flexible EMIs. Depending on the lender, renovation loans may be offered as secured loans against property or as smaller unsecured personal home improvement loans.",
      highlight: false,
    },
    {
      text:
        "Renovation loans come with simple documentation, quick disbursal, and lower interest rates compared to regular personal loans, making them a popular choice for home upgrades.",
      highlight: false,
    },
  ],

  note:
    "Compare home renovation loan rates, check eligibility instantly, and get pre-approved offers online at QuickHomeLoan.in.",
},


    interestRatesSection: {
      title: "Current Home Renovation Loan Interest Rates (2025)",
      description:
        "Compare the latest interest rates offered by top Indian banks and housing finance companies for home renovation and improvement loans.",
      note:
        "* Interest rates depend on applicant profile, property type, and project cost. Rates shown below are indicative for salaried applicants.",
      lenders: [
        {
          name: "HDFC Home Improvement Loan",
          rateRange: "8.80% – 9.40%",
          rate: 8.8,
          fee: 0.5,
          tenure: "15 years",
          emi: 19900,
        },
        {
          name: "ICICI Bank",
          rateRange: "9.00% – 9.60%",
          rate: 9.0,
          fee: 0.75,
          tenure: "15 years",
          emi: 20300,
        },
        {
          name: "SBI Home Renovation",
          rateRange: "8.75% – 9.25%",
          rate: 8.75,
          fee: 0.35,
          tenure: "15 years",
          emi: 19780,
        },
        {
          name: "Axis Bank",
          rateRange: "8.95% – 9.50%",
          rate: 8.95,
          fee: 0.5,
          tenure: "15 years",
          emi: 20160,
        },
        {
          name: "PNB Housing",
          rateRange: "9.10% – 9.80%",
          rate: 9.1,
          fee: 1.0,
          tenure: "10 years",
          emi: 24700,
        },
      ],
    },

    emiCalculatorSection: {
      title: "Home Renovation Loan EMI Calculator",
      defaults: {
        loanAmount: 1000000,
        interestRate: 8.9,
        loanTenure: 10,
      },
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Loan Tenure",
        emi: "Your Monthly EMI",
        principal: "Principal Amount",
        totalInterest: "Total Interest Payable",
        totalAmount: "Total Amount Payable",
      },
      ranges: {
        loanAmount: { min: 50000, max: 2500000, step: 10000 },
        interestRate: { min: 6, max: 14, step: 0.05 },
        loanTenure: { min: 1, max: 15, step: 1 },
      },
    },

    eligibilityCalculatorSection: {
      title: "Check Your Renovation Loan Eligibility",
      note: "*Eligibility is based on income, repayment history, and estimated renovation cost. Terms vary by lender.",
      ctaLabel: "Check Eligibility Now",
      defaults: {
        monthlyIncome: 80000,
        existingEmis: 0,
        loanTenure: 10,
        interestRate: 8.9,
      },
      ranges: {
        monthlyIncome: { min: 20000, max: 1000000, step: 5000 },
        existingEmis: { min: 0, max: 500000, step: 1000 },
        loanTenure: { min: 1, max: 15, step: 1 },
        interestRate: { min: 6, max: 14, step: 0.05 },
      },
    },

    whatIsPlotLoanSection: {
      title: "What is a Home Renovation Loan?",
      description:
        "A home renovation or improvement loan is designed to fund repairs, upgrades, or extensions in your existing home. It allows you to enhance comfort, safety, and aesthetics without exhausting savings.",
      points: [
        {
          heading: "Purpose-Based Financing",
          text: "Covers painting, plumbing, tiling, structural changes, flooring, and modular kitchen upgrades.",
        },
        {
          heading: "Collateral-Based or Unsecured",
          text: "Can be secured against property or offered as a personal home improvement loan.",
        },
        {
          heading: "Flexible Repayment",
          text: "Tenure typically ranges from 1 to 15 years with fixed or floating interest options.",
        },
      ],
      comparison: {
        title: "Quick Comparison",
        items: [
          { label: "Renovation Loan", value: "Upgrade existing home" },
          { label: "Construction Loan", value: "Build new home from scratch" },
          { label: "Top-Up Loan", value: "Extra loan on existing home loan" },
        ],
      },
    },

    typesAndBenefitsSection: {
      types: {
        title: "Types of Home Renovation Loans",
        items: [
          {
            title: "Home Improvement Loan",
            description:
              "For interior and exterior works like flooring, tiling, painting, or rewiring.",
          },
          {
            title: "Home Extension Loan",
            description:
              "For adding new rooms, floors, or expanding existing space.",
          },
          {
            title: "Top-Up Loan on Existing Home Loan",
            description:
              "Available to existing home loan customers needing extra funds for renovation.",
          },
          {
            title: "Personal Renovation Loan",
            description:
              "Unsecured loan option for smaller renovation projects without property mortgage.",
          },
        ],
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            title: "Low Interest Rates",
            description:
              "Interest rates are much lower compared to personal loans for home upgrades.",
          },
          {
            title: "Quick Disbursal",
            description:
              "Simple documentation with fast approval and digital processing.",
          },
          {
            title: "Enhances Property Value",
            description:
              "Renovation boosts your home’s resale value and comfort quotient.",
          },
          {
            title: "Flexible Repayment Options",
            description:
              "Choose convenient EMI plans based on your financial capacity.",
          },
          {
            title: "Tax Benefits (if linked to home loan)",
            description:
              "Interest component eligible for deduction under Section 24(b) if taken as part of home loan.",
          },
        ],
        cta: {
          label: "Compare Home Renovation Offers",
          link: "#apply-now",
        },
      },
    },

    eligibilitySection: {
      title: "Eligibility Criteria",
      columns: ["Salaried Applicants", "Self-Employed Applicants"],
      rows: [
        {
          criteria: "Age Limit",
          salaried: "21 – 60 years",
          selfEmployed: "25 – 65 years",
        },
        {
          criteria: "Min. Income",
          salaried: "₹25,000 / month",
          selfEmployed: "₹3 Lakhs p.a.",
        },
        {
          criteria: "Credit Score",
          salaried: "700+ preferred",
          selfEmployed: "700+ preferred",
        },
        {
          criteria: "Property Ownership",
          salaried: "Owned or co-owned residential property required",
          selfEmployed: "Proof of property ownership required",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required for Home Renovation Loan",
      cards: [
        {
          title: "Common Documents",
          iconStyle: "bg-black",
          border: false,
          iconPath:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          items: [
            "Completed loan application form",
            "KYC (PAN, Aadhaar, Passport)",
            "Property ownership proof",
            "Renovation cost estimate from contractor/architect",
            "Latest property tax receipt",
          ],
        },
        {
          title: "For Salaried",
          iconStyle: "bg-gray-200",
          border: false,
          iconPath:
            "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          items: [
            "Salary slips (Last 3 months)",
            "Form 16 (Last 2 years)",
            "Bank statements (6 months)",
          ],
        },
        {
          title: "For Self-Employed",
          iconStyle: "bg-white",
          border: true,
          iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          items: [
            "Business registration / GST certificate",
            "Last 3 years ITR with computation",
            "CA-certified balance sheet & P&L statement",
            "Bank statements (12 months)",
          ],
        },
      ],
      tip: "Tip: Keep renovation invoices and estimates handy to justify project cost to the lender.",
    },

    comparisonSection: {
      title: "Difference Between Renovation Loan & Home Loan",
      columns: ["Renovation Loan", "Home Loan"],
      rows: [
        {
          feature: "Purpose",
          plotLoan: "For home repair, remodeling, or extension",
          homeLoan: "For purchasing a new or under-construction house",
        },
        {
          feature: "Loan Amount",
          plotLoan: "Up to ₹25 Lakhs",
          homeLoan: "Up to ₹10 Crores",
        },
        {
          feature: "Tenure",
          plotLoan: "Up to 15 years",
          homeLoan: "Up to 30 years",
        },
        {
          feature: "Tax Benefits",
          plotLoan: "Available if linked with existing home loan (Section 24b)",
          homeLoan: "Available on both principal and interest",
        },
        {
          feature: "Interest Rate",
          plotLoan: "Slightly higher than home loan",
          homeLoan: "Lower, as it’s long-term financing",
        },
      ],
    },

    taxBenefitsSection: {
      title: "Understanding Tax Benefits on Renovation Loans",
      description: {
        before: "You can avail limited tax deductions on renovation loans only if it’s taken as part of an existing home loan.",
        highlight: "Section 24(b) of the Income Tax Act",
        after: "allows deduction on interest paid (up to ₹30,000 annually) for home improvement purposes.",
      },
      card: {
        title: "Eligibility for Tax Deduction",
        text: "Tax benefit applies only to interest payments on renovation loans if the property is self-occupied or used for rental income.",
      },
    },

    applyNowSection: {
      title: "Ready to Give Your Home a Makeover?",
      description:
        "Apply now for a home renovation loan and enjoy quick approvals, minimal paperwork, and flexible EMIs — all online.",
      steps: ["Enter Loan Details", "Compare Offers", "Get Quick Approval"],
      buttonLabel: "Apply for Renovation Loan",
      footerNote: "Fast Processing • Affordable EMIs • Trusted Lenders",
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Mumbai Main Branch, Fort, Mumbai, Maharashtra 400001",
      },
      phone: {
        title: "Phone",
        number: "98765 43210",
      },
      hours: {
        title: "Business Hours",
        details: "Mon-Fri: 10am - 4pm",
      },
      buttons: {
        talkToOfficer: "Talk to a Loan Officer",
        bookCallback: "Book a Callback",
      },
    },
    customerTestimonials: {
      title: "What Our Customers Say",
      testimonials: [
        {
          rating: 5,
          title: "Got ₹45 lakh approved within 2 days!",
          feedback:
            "The process was incredibly smooth and the interest rate was the best I could find. QuickHomeLoan handled everything with SBI. Highly recommended!",
          author: "Amit S.",
          location: "Pune",
        },
        {
          rating: 5,
          title: "Transferred my old loan and saved ₹3,000 per month.",
          feedback:
            "I was paying a high EMI with my previous bank. Transferring to SBI was seamless and the savings are significant. The team was very helpful.",
          author: "Sneha R.",
          location: "Delhi",
        },
      ],
    },

    faqsSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What can I use a home renovation loan for?",
          answer:
            "It can be used for repairs, painting, flooring, plumbing, tiling, electrical work, or adding extensions to your home.",
        },
        {
          question: "Is collateral required for a renovation loan?",
          answer:
            "If taken as a top-up on an existing home loan, your property remains as collateral. Some banks offer unsecured renovation loans for smaller amounts.",
        },
        {
          question: "Are there tax benefits on renovation loans?",
          answer:
            "Yes, under Section 24(b), you can claim up to ₹30,000 in interest deduction per year for home improvement.",
        },
        {
          question: "What is the maximum loan amount I can get?",
          answer:
            "You can get up to 80–90% of the estimated renovation cost or up to ₹25 lakhs, depending on lender policy.",
        },
      ],
    },
  }

];

export const homeLoanByProfession = [
  // 🩺 DOCTOR
  {
    id: 1,
    slug: "doctor",
    title: "Home Loan for Doctors - QuickHomeLoan",
    description:
      "Specialised home loans for doctors with high eligibility, fast approvals, and flexible tenure. Perfect for medical professionals looking to buy, build, or refinance a home.",
    interestRate: "8.40% - 10.25% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",
    heroSection: {
      tag: {
        icon: {
          name: "stethoscope",
          svgPath: [
            "M11 2v2",
            "M5 2v2",
            "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
            "M8 15a6 6 0 0 0 12 0v-3",
          ],
          circle: { cx: 20, cy: 10, r: 2 },
        },
        text: "Exclusive for Medical Professionals",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },
      title: {
        line1: "Fulfil Your Dream of",
        line2: "Owning a Home.",
        colorLine2: "text-gray-500",
      },
      description:
        "Designed exclusively for Doctors, Surgeons, and Dentists. Enjoy minimal documentation, lower interest rates starting at 8.25%, and faster approvals.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Doctors",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],


    },

    doctorBenefitsSection: {
      title: "What Is a Doctor Home Loan?",
      description:
        "A tailor-made financial product for qualified medical professionals. Because doctors are low-risk borrowers with stable income potential, banks provide exclusive privileges like lower rates, higher eligibility limits, and special top-up options.",
      subtitle: "Top Benefits",
      subtext: "Why This Loan is Different",
      benefits: [
        {
          title: "Attractive Interest Rates",
          description: "Special low rates starting at 8.25% p.a., lower than regular borrowers.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "High Loan Sanction",
          description: "Borrow up to ₹5 Crore depending on income and property valuation.",
          icon: {
            paths: [
              "M16 7h6v6",
              "m22 7-8.5 8.5-5-5L2 17",
            ],
          },
        },
        {
          title: "Quick Processing",
          description: "Pre-approved offers and minimal documentation for faster sanction.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible Tenure",
          description: "Repay over a period of 10 to 30 years, with easy EMI options.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "No Hidden Fees",
          description: "100% transparent charges and zero prepayment penalty on floating loans.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Special Offers",
          description: "Additional rate discounts often available for women medical professionals.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },
    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 6,   // ← NEW FIELD

      description:
        "We serve a wide range of medical professionals, both salaried in hospitals and self-employed practitioners.",
      professionals: [
        {
          title: "Allopathic Doctors",
          degree: "MBBS, MD, MS",
          icon: {
            paths: [
              "M11 2v2",
              "M5 2v2",
              "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
              "M8 15a6 6 0 0 0 12 0v-3",
            ],
            circles: [{ cx: 20, cy: 10, r: 2 }],
          },
        },
        {
          title: "Dentists",
          degree: "BDS, MDS",
          icon: {
            paths: [
              "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
            ],
          },
        },
        {
          title: "Ayurvedic/Homeopathic",
          degree: "BAMS, BHMS",
          icon: {
            paths: [
              "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
            ],
          },
        },
        {
          title: "Physiotherapists",
          degree: "BPT, MPT",
          icon: {
            paths: [
              "m16 11 2 2 4-4",
              "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            ],
            circles: [{ cx: 9, cy: 7, r: 4 }],
          },
        },
        {
          title: "Veterinary Doctors",
          degree: "BVSc, MVSc",
          icon: {
            paths: [
              "M12 11v4",
              "M14 13h-4",
              "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
              "M18 6v14",
              "M6 6v14",
            ],
            rects: [{ width: 20, height: 14, x: 2, y: 6, rx: 2 }],
          },
        },
        {
          title: "Specialists/Consultants",
          degree: "Radiologists, Surgeons, etc.",
          icon: {
            paths: [
              "M12 11v4",
              "M14 13h-4",
              "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
              "M18 6v14",
              "M6 6v14",
            ],
            rects: [{ width: 20, height: 14, x: 2, y: 6, rx: 2 }],
          },
        },
      ],
    },
    doctorComparisonSection: {
      title: "Doctor Loan vs Regular Loan",
      subtitle: "See the distinct advantages for medical professionals.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "Doctor Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.25% onwards)",
          regularLoan: "Higher (8.50% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹5 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "Priority / 1–2 days",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "Medical Qualification",
          regularLoan: "Income only",
        },
      ],
    },
    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates vary based on applicant profile, location, and lender policies.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "SBI",
          interestRate: "8.25% – 9.05%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Lower rates for senior professionals",
        },
        {
          name: "HDFC Bank",
          interestRate: "8.35% – 9.10%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Discount for women borrowers",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.40% – 9.20%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "EMI moratorium during clinic setup",
        },
        {
          name: "Axis Bank",
          interestRate: "8.30% – 9.00%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "High loan amount for reputed doctors",
        },
        {
          name: "Bajaj Housing",
          interestRate: "8.35% – 9.25%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Instant online sanction",
        },
        {
          name: "PNB Housing",
          interestRate: "8.50% – 9.40%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Special top-up for clinic renovation",
        },
      ],
    },
    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Estimate your monthly commitment before applying.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 7500000,
        interestRate: 8.25,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 1000000, max: 50000000, step: 100000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },
    doctorTaxBenefitsSection: {
      title: "Tax Benefits for Doctors",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Up to ₹1.5 lakh deduction on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Up to ₹2 lakh deduction on home loan interest payment.",
        },
        {
          icon: "users",
          title: "Joint Loan Benefits",
          description:
            "Double deductions if both spouses are doctors and co-owners.",
        },
      ],
    },
    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "A seamless 100% digital journey.",
      steps: [
        {
          icon: "click",
          title: "Check Eligibility",
          description: "Online eligibility checker.",
        },
        {
          icon: "search",
          title: "Compare Offers",
          description: "From 30+ banks & NBFCs.",
        },
        {
          icon: "upload",
          title: "Upload Documents",
          description: "Submit KYC & income proof.",
        },
        {
          icon: "zap",
          title: "Instant Approval",
          description: "Sanction in 24–48 hours.",
        },
        {
          icon: "banknote",
          title: "Disbursement",
          description: "Funds credited to seller.",
        },
        {
          icon: "key",
          title: "Home Ownership",
          description: "Move into your dream home.",
        },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 25 years, Max 65 years at loan maturity" },
        {
          label: "Qualification",
          value: "Valid medical degree recognized by MCI/DCI/AYUSH",
        },
        { label: "Employment Type", value: "Salaried or Self-Employed" },
        { label: "Experience", value: "Minimum 1 year post-qualification" },
        {
          label: "Minimum Income",
          value: "₹50,000 per month (varies by lender & city)",
        },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI Doctor" },
      ],
      documents: [
        "KYC documents (Aadhaar, PAN, Passport, etc.)",
        "Medical registration certificate (MCI/DCI/AYUSH)",
        "Income proof (salary slips / ITR for 2 years)",
        "Property documents and sale agreement",
        "Bank statements (last 6 months)",
        "Passport-size photographs",
      ],
      tips: [
        "Maintain a credit score above 700 for best rates.",
        "Keep income proofs and bank statements updated before applying.",
        "Apply with a co-applicant to boost eligibility if needed.",
        "Choose a longer tenure to lower EMI burden initially.",
      ],
    },
    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        {
          icon: "award",
          title: "Specialized Experts",
          description: "Advisors who understand your professional needs.",
        },
        {
          icon: "handshake",
          title: "30+ Lenders",
          description: "Partnerships with top banks for best offers.",
        },
        {
          icon: "zap",
          title: "Fastest Approvals",
          description: "Sanctioned within 24–48 hours.",
        },
        {
          icon: "globe",
          title: "Nationwide Service",
          description: "For both urban and rural professionals.",
        },
      ],
    },
    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do doctors get special home loan benefits?",
          answer:
            "Yes, many banks offer exclusive home loan schemes for doctors with lower interest rates, higher eligibility limits, and faster processing.",
        },
        {
          question: "What is the maximum loan amount available?",
          answer:
            "Depending on income, property value, and lender policy, doctors can get home loans up to ₹5 Crore or even higher in select cities.",
        },
        {
          question: "Can new doctors or interns apply?",
          answer:
            "Yes, newly qualified doctors or medical interns may apply, provided they can show offer letters, proof of practice, or potential income projections.",
        },
        {
          question: "Can NRIs in the medical profession apply?",
          answer:
            "Yes, several banks provide doctor home loans to NRIs who meet the eligibility criteria and have valid Indian property documents.",
        },
        {
          question: "Is prepayment or foreclosure allowed?",
          answer:
            "Yes, prepayment and foreclosure are allowed, often with zero charges for floating-rate home loans.",
        },
        {
          question: "Can I use this to buy a clinic/commercial space?",
          answer:
            "Some lenders offer special doctor loans that can be used to buy or renovate clinics, diagnostic centers, or office spaces for professional use.",
        },
      ],
    },
    doctorApplySection: {
      title: "Empowering Doctors to Own Their Dream Home",
      description:
        "We value your dedication. Let us handle the complexities of financing while you focus on your patients.",
      button: {
        label: "Apply Now",
        href: "#eligibility",
      },
    },








  },

  // 💼 CHARTERED ACCOUNTANT
  {
    id: 2,
    slug: "chartered-accountants",
    title: "Home Loan for Chartered Accountants - QuickHomeLoan",
    description:
      "Specialised home loans for Chartered Accountants with high eligibility, fast approvals, and flexible repayment options. Designed for finance professionals looking to buy, build, or refinance a home or office space.",
    interestRate: "8.45% - 10.35% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",

    heroSection: {
      tag: {
        icon: {
          name: "briefcase",
          svgPath: [
            "M12 11v4",
            "M14 13h-4",
            "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
            "M18 6v14",
            "M6 6v14",
          ],
          rects: [{ width: 20, height: 14, x: 2, y: 6, rx: 2 }],
        },
        text: "Exclusive for Chartered Accountants",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },

      title: {
        line1: "Empower Your Financial Journey",
        line2: "Own a Home with Ease.",
        colorLine2: "text-gray-500",
      },

      description:
        "Designed exclusively for Chartered Accountants, Auditors, and Finance Professionals. Enjoy simplified documentation, attractive interest rates starting at 8.45%, and quick approvals.",

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Chartered Accountants (CA)",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],
    },

    doctorBenefitsSection: {
      title: "What Is a Chartered Accountant Home Loan?",
      description:
        "A tailor-made financial product for practicing Chartered Accountants and finance professionals. Banks offer enhanced eligibility, lower interest rates, and faster loan processing for professionals with stable income.",
      subtitle: "Top Benefits",
      subtext: "Why This Loan is Different",
      benefits: [
        {
          title: "Competitive Interest Rates",
          description:
            "Attractive rates starting at 8.45% p.a., lower than standard borrowers.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "High Loan Eligibility",
          description:
            "Borrow up to ₹4 Crore based on your income and firm’s financial performance.",
          icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] },
        },
        {
          title: "Quick Processing",
          description:
            "Fast-track approvals with minimal documentation and ICAI credential checks.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible Tenure",
          description: "Repay comfortably over 10–30 years with flexible EMIs.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "Transparent Fees",
          description: "No hidden charges or prepayment penalties on floating loans.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Office Space Financing",
          description:
            "Use your CA home loan to buy, build, or upgrade your professional office.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },

    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 4,   // ← NEW FIELD

      description:
        "Home loans are available for qualified Chartered Accountants and finance professionals with proven income or business stability.",
      professionals: [
        {
          title: "Practicing Chartered Accountants",
          degree: "Valid ICAI Membership Certificate",
          icon: {
            paths: [
              "M12 11v4",
              "M14 13h-4",
              "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
              "M18 6v14",
              "M6 6v14",
            ],
            rects: [{ width: 20, height: 14, x: 2, y: 6, rx: 2 }],
          },
        },
        {
          title: "Auditors & Tax Consultants",
          degree: "Registered professionals under ICAI or similar body",
          icon: { paths: ["M9 18V5l12-2v13", "M9 9h12", "M13 12h8", "M9 22l12-3"] },
        },
        {
          title: "Finance Managers & Advisors",
          degree: "MBA (Finance), CMA, or CPA",
          icon: {
            paths: [
              "M12 2l4 4H8l4-4z",
              "M12 22v-8M8 18h8",
              "M4 10h16v10H4z",
            ],
          },
        },
        {
          title: "CA Firm Partners",
          degree: "Minimum 2 years of stable income and firm association",
          icon: { paths: ["M22 12h-5l-2 3h-6l-2-3H2", "M6 9l6-6 6 6"] },
        },
      ],
    },

    doctorComparisonSection: {
      title: "CA Loan vs Regular Loan",
      subtitle: "Discover the benefits designed for finance professionals.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "CA Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.45% onwards)",
          regularLoan: "Higher (8.70% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹4 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "Priority / 1–2 days",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "Professional Qualification + Income",
          regularLoan: "Income only",
        },
      ],
    },

    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates vary depending on applicant profile, city, and lender policy.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "HDFC Bank",
          interestRate: "8.45% – 9.25%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Special programs for ICAI members",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.50% – 9.30%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Fast-track approvals for CAs",
        },
        {
          name: "Axis Bank",
          interestRate: "8.55% – 9.40%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "Higher loan-to-income ratio for professionals",
        },
        {
          name: "SBI",
          interestRate: "8.50% – 9.35%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Preferential rate for women CAs",
        },
        {
          name: "PNB Housing",
          interestRate: "8.60% – 9.45%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Top-up loans for office space purchase",
        },
      ],
    },

    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Estimate your monthly commitment before applying.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 7500000,
        interestRate: 8.45,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 1000000, max: 50000000, step: 100000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },

    doctorTaxBenefitsSection: {
      title: "Tax Benefits for Chartered Accountants",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Deduction up to ₹1.5 lakh on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Up to ₹2 lakh deduction on home loan interest.",
        },
        {
          icon: "users",
          title: "Joint Loan Advantage",
          description:
            "Joint applicants (spouse/partner) can claim double deductions.",
        },
      ],
    },

    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "A seamless 100% digital process for CAs.",
      steps: [
        {
          icon: "click",
          title: "Check Eligibility",
          description: "Use our quick online eligibility tool.",
        },
        {
          icon: "search",
          title: "Compare Offers",
          description: "Access rates from 30+ lenders instantly.",
        },
        {
          icon: "upload",
          title: "Upload Documents",
          description: "Submit ICAI certificate and KYC details online.",
        },
        {
          icon: "zap",
          title: "Instant Approval",
          description: "Get loan sanction within 24–48 hours.",
        },
        {
          icon: "banknote",
          title: "Disbursement",
          description: "Funds transferred directly to seller/builder.",
        },
        {
          icon: "key",
          title: "Own Your Home/Office",
          description: "Move into your dream property effortlessly.",
        },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 25 years, Max 65 years at loan maturity" },
        {
          label: "Qualification",
          value: "Valid Chartered Accountant Certificate (ICAI)",
        },
        { label: "Employment Type", value: "Self-Employed or Partner in Firm" },
        { label: "Experience", value: "Minimum 2 years post-qualification" },
        {
          label: "Minimum Income",
          value: "₹60,000 per month (varies by city/lender)",
        },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI CA" },
      ],
      documents: [
        "KYC documents (PAN, Aadhaar, Passport, etc.)",
        "ICAI Membership Certificate",
        "Income Proof (ITR / Balance Sheet / Profit & Loss for 2 years)",
        "Property Sale Agreement and Title Documents",
        "Bank Statements (last 6 months)",
        "Passport-size Photographs",
      ],
      tips: [
        "Maintain a CIBIL score above 700 for quick approval.",
        "Ensure your firm’s financials are audited before applying.",
        "Add a co-applicant to improve eligibility.",
        "Opt for a longer tenure to lower initial EMIs.",
      ],
    },

    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        {
          icon: "award",
          title: "CA-Focused Experts",
          description: "Advisors who understand your professional finances.",
        },
        {
          icon: "handshake",
          title: "Trusted Lender Network",
          description: "Partnered with 30+ leading banks and NBFCs.",
        },
        {
          icon: "zap",
          title: "Fast Approvals",
          description: "Loan sanctioned within 48 hours for verified CAs.",
        },
        {
          icon: "globe",
          title: "Nationwide Coverage",
          description: "Available in all major Indian cities and towns.",
        },
      ],
    },

    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do CAs get special home loan benefits?",
          answer:
            "Yes, banks offer exclusive CA loan schemes with lower interest rates, higher eligibility, and flexible repayment options.",
        },
        {
          question: "What is the maximum loan amount available?",
          answer:
            "You can get loans up to ₹4 Crore, depending on your income and property value.",
        },
        {
          question: "Can newly qualified CAs apply?",
          answer:
            "Yes, new CAs with proof of practice or firm association can apply.",
        },
        {
          question: "Are loans available for NRIs who are CAs?",
          answer:
            "Yes, some lenders offer home loans to NRIs with valid ICAI membership and Indian property documents.",
        },
        {
          question: "Is prepayment or foreclosure allowed?",
          answer:
            "Yes, and most lenders do not charge any prepayment fees for floating-rate loans.",
        },
        {
          question: "Can I use this loan to buy office property?",
          answer:
            "Yes, CAs can use these loans to purchase or renovate office spaces for professional use.",
        },
      ],
    },

    doctorApplySection: {
      title: "Empowering Chartered Accountants to Own Their Dream Home",
      description:
        "Leverage your financial expertise and let QuickHomeLoan handle the rest — from application to approval.",
      button: {
        label: "Apply Now",
        href: "#eligibility",
      },
    },
  },

  // 🧑‍💻 ENGINEER
  {
    id: 3,
    slug: "engineer",
    title: "Home Loan for Engineers - QuickHomeLoan",
    description:
      "Exclusive home loans for Engineers with high eligibility, low interest rates, and faster approvals. Ideal for civil, mechanical, software, and electrical engineers looking to buy, build, or renovate a home.",
    interestRate: "8.50% - 10.40% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",

    heroSection: {
      tag: {
        icon: {
          name: "settings",
          svgPath: [
            "M12 8v4l3 3",
            "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 2 13.6V12a2 2 0 0 1 0-4v-.09a1.65 1.65 0 0 0 1-1.51 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H8a1.65 1.65 0 0 0 1-1.51V2a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V8a1.65 1.65 0 0 0 1.51 1h.09a2 2 0 0 1 0 4v.09a1.65 1.65 0 0 0-1.51 1z",
          ],
        },
        text: "Exclusive for Engineering Professionals",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },

      title: {
        line1: "Build Your Dream Home",
        line2: "With Engineer Advantage.",
        colorLine2: "text-gray-500",
      },

      description:
        "Tailored home loan solutions for Engineers — Civil, Mechanical, Electrical, and Software — with lower interest rates, higher eligibility, and minimal documentation.",

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Engineers",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],
    },

    doctorBenefitsSection: {
      title: "What Is an Engineer Home Loan?",
      description:
        "A specialised financial product designed for Engineers with stable incomes and strong professional credibility. Banks offer exclusive rates and high eligibility based on your professional degree and experience.",
      subtitle: "Top Benefits",
      subtext: "Why Choose an Engineer Home Loan",
      benefits: [
        {
          title: "Attractive Interest Rates",
          description:
            "Special lower rates starting at 8.50% p.a. for engineers from reputed institutions.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "Higher Loan Eligibility",
          description:
            "Borrow up to ₹4.5 Crore depending on your income and employment type.",
          icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] },
        },
        {
          title: "Fast Digital Processing",
          description:
            "Quick approval with digital KYC and minimal documentation.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible Repayment Options",
          description:
            "Repay your loan over 10–30 years with custom EMI flexibility.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "Zero Prepayment Fees",
          description:
            "Enjoy no penalties on prepayment or foreclosure of floating-rate loans.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Special Offers",
          description:
            "Exclusive rate discounts for engineers employed in government or PSUs.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },

    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 5,   // ← NEW FIELD

      description:
        "This home loan caters to engineers across specializations — salaried, self-employed, or contractors — with a steady income source.",
      professionals: [
        {
          title: "Civil Engineers",
          degree: "BE / B.Tech / M.Tech (Civil)",
          icon: {
            paths: [
              "M12 11v4",
              "M14 13h-4",
              "M6 6h12v14H6z",
              "M8 10h8v2H8z",
            ],
          },
        },
        {
          title: "Mechanical Engineers",
          degree: "BE / B.Tech / Diploma (Mechanical)",
          icon: {
            paths: [
              "M9 2l1 4h4l1-4M3 10h18v4H3zM12 14v8",
            ],
          },
        },
        {
          title: "Electrical Engineers",
          degree: "BE / B.Tech (Electrical)",
          icon: {
            paths: [
              "M12 2v20M8 6h8M8 18h8",
            ],
          },
        },
        {
          title: "Software / IT Engineers",
          degree: "BE / B.Tech / MCA / M.Sc (CS/IT)",
          icon: {
            paths: [
              "M2 6h20v12H2z",
              "M8 10h8v4H8z",
            ],
          },
        },
        {
          title: "Contract Engineers / Self-Employed",
          degree: "Minimum 2 years of work experience",
          icon: {
            paths: [
              "M4 6h16v14H4z",
              "M2 10h20M2 14h20",
            ],
          },
        },
      ],
    },

    doctorComparisonSection: {
      title: "Engineer Loan vs Regular Loan",
      subtitle: "Engineers enjoy exclusive benefits over standard borrowers.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "Engineer Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.50% onwards)",
          regularLoan: "Higher (8.75% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹4.5 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "1–2 days (priority)",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "Engineering Qualification + Income",
          regularLoan: "Income only",
        },
      ],
    },

    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates depend on employment type, credit score, and lender policies.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "HDFC Bank",
          interestRate: "8.50% – 9.20%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Preferred rates for IIT/NIT graduates",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% – 9.25%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Fast processing for PSU engineers",
        },
        {
          name: "Axis Bank",
          interestRate: "8.60% – 9.30%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "Higher eligibility for tech professionals",
        },
        {
          name: "SBI",
          interestRate: "8.45% – 9.15%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Lower rates for government-employed engineers",
        },
        {
          name: "PNB Housing",
          interestRate: "8.65% – 9.45%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Top-up loans for home renovation",
        },
      ],
    },

    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Estimate your monthly commitment before applying.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 7500000,
        interestRate: 8.50,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 1000000, max: 50000000, step: 100000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },

    doctorTaxBenefitsSection: {
      title: "Tax Benefits for Engineers",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Deduction up to ₹1.5 lakh on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Up to ₹2 lakh deduction on home loan interest.",
        },
        {
          icon: "users",
          title: "Joint Loan Benefits",
          description: "Double deductions when applying with co-borrower.",
        },
      ],
    },

    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "Simple, transparent, and 100% online for engineers.",
      steps: [
        { icon: "click", title: "Check Eligibility", description: "Quick online eligibility check." },
        { icon: "search", title: "Compare Offers", description: "Choose from 30+ trusted lenders." },
        { icon: "upload", title: "Upload Documents", description: "Submit KYC and income proof digitally." },
        { icon: "zap", title: "Instant Approval", description: "Get loan sanction in 24–48 hours." },
        { icon: "banknote", title: "Disbursement", description: "Funds credited directly to the seller." },
        { icon: "key", title: "Home Ownership", description: "Move into your dream home." },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 23 years, Max 65 years at loan maturity" },
        { label: "Qualification", value: "Engineering Degree (AICTE/UGC approved)" },
        { label: "Employment Type", value: "Salaried, PSU, or Self-Employed Engineer" },
        { label: "Experience", value: "Minimum 1 year post-qualification" },
        { label: "Minimum Income", value: "₹50,000 per month (varies by city)" },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI Engineer" },
      ],
      documents: [
        "KYC documents (PAN, Aadhaar, Passport, etc.)",
        "Degree or Professional Certificate",
        "Salary slips / ITR / Form 16",
        "Property documents and sale agreement",
        "Bank statements (last 6 months)",
        "Passport-size photographs",
      ],
      tips: [
        "Maintain a CIBIL score above 700 for better offers.",
        "Submit income proofs and KYC documents upfront.",
        "Apply jointly with a co-applicant to increase loan eligibility.",
        "Opt for longer tenure to reduce EMI pressure.",
      ],
    },

    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        { icon: "award", title: "Engineering-Focused Experts", description: "Tailored solutions for engineers across sectors." },
        { icon: "handshake", title: "30+ Lender Network", description: "Access to top national banks and NBFCs." },
        { icon: "zap", title: "Fast Approvals", description: "Loan sanctioned in just 48 hours." },
        { icon: "globe", title: "Pan-India Coverage", description: "Available across all cities and rural areas." },
      ],
    },

    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do engineers get special home loan benefits?",
          answer:
            "Yes, engineers receive preferential rates, higher eligibility, and quicker processing from select banks.",
        },
        {
          question: "What is the maximum loan amount available?",
          answer:
            "Up to ₹4.5 Crore, based on income and property valuation.",
        },
        {
          question: "Are software engineers eligible?",
          answer:
            "Yes, IT professionals with stable income are eligible for engineer home loans.",
        },
        {
          question: "Can self-employed engineers apply?",
          answer:
            "Yes, self-employed engineers with consistent business income can apply.",
        },
        {
          question: "Is there a prepayment penalty?",
          answer:
            "No prepayment or foreclosure charges apply for floating-rate loans.",
        },
        {
          question: "Can the loan be used for renovation?",
          answer:
            "Yes, top-up or renovation loans are available for engineers.",
        },
      ],
    },

    doctorApplySection: {
      title: "Empowering Engineers to Build Their Dream Home",
      description:
        "We value your expertise in building the world — now let us help you build your dream home with ease.",
      button: { label: "Apply Now", href: "#eligibility" },
    },
  },

  // 👩‍🏫 TEACHER
  {
    id: 4,
    slug: "teacher",
    title: "Home Loan for Teachers - QuickHomeLoan",
    description:
      "Exclusive home loans for Teachers, Professors, and Educators with lower rates, flexible EMIs, and fast approvals. Ideal for educators looking to buy, build, or renovate a home.",
    interestRate: "8.40% - 10.10% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",

    heroSection: {
      tag: {
        icon: {
          name: "book-open",
          svgPath: [
            "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
            "M20 2H6.5A2.5 2.5 0 0 0 4 4.5v15",
            "M20 22V2",
          ],
        },
        text: "Exclusive for Educators and Academicians",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },

      title: {
        line1: "Empowering Teachers",
        line2: "To Own Their Dream Home.",
        colorLine2: "text-gray-500",
      },

      description:
        "Specially curated home loans for Teachers, Professors, and Academic Professionals with minimal documentation, lower interest rates, and faster disbursal.",

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Teachers",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],
    },

    doctorBenefitsSection: {
      title: "What Is a Teacher Home Loan?",
      description:
        "A financial solution designed for educators and academic professionals. Teachers enjoy lower interest rates, minimal paperwork, and flexible repayment options with priority approvals.",
      subtitle: "Top Benefits",
      subtext: "Why Teachers Prefer This Loan",
      benefits: [
        {
          title: "Special Interest Rates",
          description: "Attractive rates starting at 8.40% p.a. for educators.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "High Loan Eligibility",
          description:
            "Borrow up to ₹3 Crore based on salary and employment stability.",
          icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] },
        },
        {
          title: "Simplified Documentation",
          description: "Submit basic ID, salary, and employment proof only.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible Repayment Options",
          description:
            "Choose between fixed or flexible EMIs to suit your budget.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "No Hidden Charges",
          description:
            "100% transparency and zero prepayment charges on floating loans.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Priority for Women Teachers",
          description:
            "Exclusive discounts and rate benefits for female educators.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },

    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 4,   // ← NEW FIELD

      description:
        "Open for all teaching professionals including school teachers, professors, tutors, and principals from recognized institutions.",
      professionals: [
        {
          title: "School Teachers",
          degree: "B.Ed / M.Ed / Teaching Certification",
          icon: {
            paths: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M20 2H6.5V17"],
          },
        },
        {
          title: "College Professors",
          degree: "Ph.D / NET / University Approved Qualification",
          icon: {
            paths: ["M12 2l4 4H8l4-4z", "M4 10h16v10H4z"],
          },
        },
        {
          title: "Private Tutors",
          degree: "Any recognized academic certification",
          icon: {
            paths: ["M2 6h20v12H2z", "M8 10h8v4H8z"],
          },
        },
        {
          title: "Principals / Headmasters",
          degree: "Minimum 5 years of teaching experience",
          icon: {
            paths: [
              "M6 6h12v12H6z",
              "M8 8h8v2H8z",
              "M8 12h8v2H8z",
            ],
          },
        },
      ],
    },

    doctorComparisonSection: {
      title: "Teacher Loan vs Regular Loan",
      subtitle: "Discover why teacher loans offer extra advantages.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "Teacher Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.40% onwards)",
          regularLoan: "Higher (8.75% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹3 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "1–2 days (priority)",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "Profession + Income",
          regularLoan: "Income only",
        },
      ],
    },

    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates depend on employment type, city, and lender criteria.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "SBI",
          interestRate: "8.40% – 9.00%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Preferred rates for government teachers",
        },
        {
          name: "HDFC Bank",
          interestRate: "8.45% – 9.10%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Extra 0.1% discount for women educators",
        },
        {
          name: "Axis Bank",
          interestRate: "8.50% – 9.25%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "High eligibility for senior professors",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.55% – 9.30%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Fast approval for salaried educators",
        },
        {
          name: "PNB Housing",
          interestRate: "8.60% – 9.35%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Top-up loans for home renovation",
        },
      ],
    },

    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Plan your EMIs before you apply.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 6000000,
        interestRate: 8.40,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 500000, max: 30000000, step: 50000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },

    doctorTaxBenefitsSection: {
      title: "Tax Benefits for Teachers",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Claim up to ₹1.5 lakh on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Get up to ₹2 lakh deduction on interest paid.",
        },
        {
          icon: "users",
          title: "Joint Loan Benefits",
          description: "Co-applicants can claim combined tax deductions.",
        },
      ],
    },

    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "Simple and transparent digital process.",
      steps: [
        { icon: "click", title: "Check Eligibility", description: "Use our eligibility calculator." },
        { icon: "search", title: "Compare Offers", description: "Choose from 30+ trusted lenders." },
        { icon: "upload", title: "Upload Documents", description: "Submit KYC and salary slips online." },
        { icon: "zap", title: "Instant Approval", description: "Get loan sanction within 24–48 hours." },
        { icon: "banknote", title: "Disbursement", description: "Funds credited directly to your account." },
        { icon: "key", title: "Move In", description: "Own your dream home with ease." },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 23 years, Max 65 years at loan maturity" },
        { label: "Qualification", value: "Recognized Teaching / Educational Degree" },
        { label: "Employment Type", value: "Salaried in Government or Private Institution" },
        { label: "Experience", value: "Minimum 1 year of teaching experience" },
        { label: "Minimum Income", value: "₹40,000 per month (varies by city)" },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI Educator" },
      ],
      documents: [
        "KYC documents (PAN, Aadhaar, Passport)",
        "Employment ID / Appointment Letter",
        "Salary slips / ITR for 2 years",
        "Property documents and sale agreement",
        "Bank statements (last 6 months)",
      ],
      tips: [
        "Maintain a healthy credit score to enjoy lower rates.",
        "Apply with your spouse to increase eligibility.",
        "Use EMI calculators before applying.",
        "Keep salary records and proof of employment ready.",
      ],
    },

    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        { icon: "award", title: "Tailored for Teachers", description: "Exclusive loan schemes designed for educators." },
        { icon: "handshake", title: "Trusted Partners", description: "30+ leading lenders across India." },
        { icon: "zap", title: "Quick Sanctions", description: "Faster loan approvals within 48 hours." },
        { icon: "globe", title: "Nationwide Service", description: "Available for teachers across India." },
      ],
    },

    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do teachers get special home loan benefits?",
          answer:
            "Yes, teachers receive preferential interest rates, minimal paperwork, and high eligibility from select banks.",
        },
        {
          question: "What is the maximum loan amount?",
          answer: "Up to ₹3 Crore depending on income and city of employment.",
        },
        {
          question: "Are private school teachers eligible?",
          answer:
            "Yes, teachers employed in recognized private institutions can apply.",
        },
        {
          question: "Can retired teachers apply?",
          answer:
            "Yes, retired teachers with a regular pension are eligible under certain conditions.",
        },
        {
          question: "Is there a prepayment penalty?",
          answer:
            "No, floating-rate home loans come with zero prepayment charges.",
        },
        {
          question: "Can this loan be used for renovation?",
          answer:
            "Yes, teachers can avail home improvement or top-up loans under this scheme.",
        },
      ],
    },

    doctorApplySection: {
      title: "Empowering Teachers to Own Their Dream Home",
      description:
        "Your dedication shapes the nation — let QuickHomeLoan reward it with affordable and flexible home loans.",
      button: { label: "Apply Now", href: "#eligibility" },
    },
  },

  // ⚖️ LAWYER
  {
    id: 5,
    slug: "lawyer",
    title: "Home Loan for Lawyers - QuickHomeLoan",
    description:
      "Tailored home loans for Advocates, Legal Consultants, and Lawyers with exclusive benefits, lower rates, and higher eligibility. Ideal for professionals in legal practice or corporate law.",
    interestRate: "8.45% - 10.20% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",

    heroSection: {
      tag: {
        icon: {
          name: "scale",
          svgPath: ["M12 2v20M3 7h18M6 10l3 6H3l3-6zM15 10l3 6h-6l3-6z"],
        },
        text: "Exclusive for Legal Professionals",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },

      title: {
        line1: "Justice Served.",
        line2: "Now Own the Home You Deserve.",
        colorLine2: "text-gray-500",
      },

      description:
        "Designed specifically for Lawyers, Advocates, and Legal Advisors. Benefit from low-interest rates, quick sanctions, and higher eligibility based on professional stability.",

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Lawyers",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],
    },

    doctorBenefitsSection: {
      title: "What Is a Lawyer Home Loan?",
      description:
        "A specialised home loan crafted for legal professionals, advocates, and law firm partners. These loans offer exclusive rates, higher limits, and faster approvals recognizing the stability and reputation of your profession.",
      subtitle: "Top Benefits",
      subtext: "Why Lawyers Prefer This Loan",
      benefits: [
        {
          title: "Preferential Interest Rates",
          description: "Lower rates starting at 8.45% p.a. for practicing lawyers.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "High Loan Eligibility",
          description:
            "Borrow up to ₹5 Crore based on your income, experience, and firm size.",
          icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] },
        },
        {
          title: "Simplified Documentation",
          description:
            "Quick digital processing with minimal KYC and Bar Council proof.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible EMI Options",
          description:
            "Select from step-up or standard EMIs depending on your income flow.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "Zero Hidden Charges",
          description:
            "Full transparency with no hidden costs or foreclosure penalties.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Office Space Financing",
          description:
            "Use your lawyer home loan to buy or renovate an office or chamber.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },

    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 4,   // ← NEW FIELD

      description:
        "Available for practicing advocates, corporate lawyers, and legal consultants with stable income or firm association.",
      professionals: [
        {
          title: "Advocates & Legal Practitioners",
          degree: "LL.B / LL.M with valid Bar Council Registration",
          icon: {
            paths: ["M6 6h12v12H6z", "M12 2v20", "M8 10h8v2H8z"],
          },
        },
        {
          title: "Corporate Lawyers",
          degree: "In-house legal professionals or consultants",
          icon: {
            paths: ["M2 6h20v12H2z", "M8 10h8v4H8z"],
          },
        },
        {
          title: "Law Firm Partners",
          degree: "Minimum 2 years of firm association",
          icon: {
            paths: ["M12 2l4 4H8l4-4z", "M4 10h16v10H4z"],
          },
        },
        {
          title: "Independent Legal Consultants",
          degree: "Freelance professionals with ITR proof",
          icon: {
            paths: ["M9 18V5l12-2v13", "M9 9h12"],
          },
        },
      ],
    },

    doctorComparisonSection: {
      title: "Lawyer Loan vs Regular Loan",
      subtitle: "Understand how legal professionals benefit more.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "Lawyer Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.45% onwards)",
          regularLoan: "Higher (8.75% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹5 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "1–2 days (priority)",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "Professional Qualification + Income",
          regularLoan: "Income only",
        },
      ],
    },

    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates may vary based on experience, city, and lender criteria.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "HDFC Bank",
          interestRate: "8.45% – 9.20%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Preferred rates for senior lawyers",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.50% – 9.25%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Fast approvals for independent advocates",
        },
        {
          name: "Axis Bank",
          interestRate: "8.55% – 9.30%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "Special top-up for office purchase",
        },
        {
          name: "SBI",
          interestRate: "8.40% – 9.15%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Discounted rates for government lawyers",
        },
        {
          name: "PNB Housing",
          interestRate: "8.60% – 9.35%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Top-up for chamber renovation",
        },
      ],
    },

    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Estimate your monthly EMI before you apply.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 8000000,
        interestRate: 8.45,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 1000000, max: 50000000, step: 100000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },

    doctorTaxBenefitsSection: {
      title: "Tax Benefits for Lawyers",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Deduction up to ₹1.5 lakh on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Up to ₹2 lakh deduction on interest paid annually.",
        },
        {
          icon: "users",
          title: "Joint Loan Benefit",
          description:
            "Co-borrowers can enjoy double tax deductions on repayment.",
        },
      ],
    },

    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "Fast, digital, and lawyer-friendly process.",
      steps: [
        { icon: "click", title: "Check Eligibility", description: "Instant online eligibility check." },
        { icon: "search", title: "Compare Offers", description: "Get rates from 30+ top lenders." },
        { icon: "upload", title: "Upload Documents", description: "Submit KYC and Bar Council certificate." },
        { icon: "zap", title: "Instant Approval", description: "Sanction in just 24–48 hours." },
        { icon: "banknote", title: "Disbursement", description: "Funds credited directly to your account." },
        { icon: "key", title: "Home Ownership", description: "Own your home or office with ease." },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 25 years, Max 65 years at loan maturity" },
        {
          label: "Qualification",
          value: "LL.B / LL.M degree with valid Bar Council registration",
        },
        { label: "Employment Type", value: "Self-Employed or Firm Partner" },
        { label: "Experience", value: "Minimum 2 years of practice" },
        {
          label: "Minimum Income",
          value: "₹60,000 per month (varies by lender)",
        },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI Lawyer" },
      ],
      documents: [
        "KYC documents (Aadhaar, PAN, Passport, etc.)",
        "Bar Council Registration Certificate",
        "Income Proof (ITR for 2 years)",
        "Property Sale Agreement / Ownership Proof",
        "Bank Statements (last 6 months)",
      ],
      tips: [
        "Maintain good credit history for better interest rates.",
        "Provide consistent ITRs to increase eligibility.",
        "Include co-applicant for enhanced loan amount.",
        "Apply online for faster approvals and documentation.",
      ],
    },

    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        { icon: "award", title: "Tailored for Lawyers", description: "Specialised schemes for legal professionals." },
        { icon: "handshake", title: "Trusted Lenders", description: "Network of 30+ top national lenders." },
        { icon: "zap", title: "Fast Approvals", description: "Loan sanctioned within 48 hours." },
        { icon: "globe", title: "Pan-India Coverage", description: "Available across all major cities." },
      ],
    },

    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do lawyers get special home loan benefits?",
          answer:
            "Yes, select banks provide exclusive home loans for lawyers with lower rates and higher eligibility.",
        },
        {
          question: "What is the maximum loan amount available?",
          answer:
            "Lawyers can avail up to ₹5 Crore depending on income and firm size.",
        },
        {
          question: "Can new lawyers apply?",
          answer:
            "Yes, lawyers with at least 1 year of professional experience can apply.",
        },
        {
          question: "Is a Bar Council certificate mandatory?",
          answer:
            "Yes, for practicing lawyers, a valid Bar Council registration is required.",
        },
        {
          question: "Can I use this loan for office purchase?",
          answer:
            "Yes, you can use it to buy or renovate chambers or offices.",
        },
        {
          question: "Is there a prepayment penalty?",
          answer:
            "No, there are no penalties on floating-rate home loans.",
        },
      ],
    },

    doctorApplySection: {
      title: "Empowering Lawyers to Own Their Dream Home",
      description:
        "Your commitment to justice deserves financial ease. QuickHomeLoan ensures your home loan journey is fair, fast, and flexible.",
      button: { label: "Apply Now", href: "#eligibility" },
    },
  },

  // 💻 IT PROFESSIONALS
  {
    id: 6,
    slug: "it-professionals",
    title: "Home Loan for IT Professionals - QuickHomeLoan",
    description:
      "Exclusive home loans for Software Engineers, Developers, and IT Professionals. Enjoy lower rates, faster approvals, and flexible EMI options tailored for tech professionals.",
    interestRate: "8.30% - 10.00% p.a.",
    processingFee: "Up to 1% of loan amount (varies by lender)",
    loanTenure: "Up to 30 years",

    heroSection: {
      tag: {
        icon: {
          name: "cpu",
          svgPath: [
            "M4 4h16v16H4z",
            "M9 9h6v6H9z",
            "M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2",
          ],
        },
        text: "Exclusive for IT and Tech Professionals",
        style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
      },

      title: {
        line1: "Empowering IT Experts",
        line2: "To Own Smart Homes.",
        colorLine2: "text-gray-500",
      },

      description:
        "Specialised home loan offers for IT professionals with steady income, excellent credit profiles, and digital-first lifestyles. Get best-in-class rates and paperless processing.",

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for IT Professionals",
        },
        {
          label: "View Rates",
          href: "#rates",
        },
      ],
    },



    doctorBenefitsSection: {
      title: "What Is an IT Professional Home Loan?",
      description:
        "A tailor-made financial solution for tech employees and self-employed IT experts. Get faster approvals, flexible EMIs, and attractive interest rates that reward financial stability.",
      subtitle: "Top Benefits",
      subtext: "Why IT Professionals Prefer This Loan",
      benefits: [
        {
          title: "Special Interest Rates",
          description: "Rates start as low as 8.30% p.a. for salaried IT professionals.",
          icon: {
            lines: [{ x1: 19, y1: 5, x2: 5, y2: 19 }],
            circles: [
              { cx: 6.5, cy: 6.5, r: 2.5 },
              { cx: 17.5, cy: 17.5, r: 2.5 },
            ],
          },
        },
        {
          title: "High Loan Sanction",
          description: "Borrow up to ₹5 Crore based on salary and credit history.",
          icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] },
        },
        {
          title: "Completely Digital Process",
          description: "End-to-end online approval, documentation, and e-signing.",
          icon: {
            paths: [
              "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            ],
          },
        },
        {
          title: "Flexible EMI Options",
          description: "Step-up, step-down, or fixed EMIs to suit your career growth.",
          icon: {
            circles: [{ cx: 12, cy: 12, r: 10 }],
            polylines: [{ points: "12 6 12 12 16 14" }],
          },
        },
        {
          title: "Zero Prepayment Fees",
          description: "No penalty for prepayment or foreclosure on floating rates.",
          icon: {
            paths: [
              "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              "m9 12 2 2 4-4",
            ],
          },
        },
        {
          title: "Special Offers",
          description: "Additional benefits for top IT firms like Infosys, TCS, Wipro, etc.",
          icon: {
            paths: [
              "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            ],
            circles: [{ cx: 12, cy: 8, r: 6 }],
          },
        },
      ],
    },

    doctorEligibilitySection: {
      title: "Who is Eligible?",
      columns: 4,   // ← NEW FIELD

      description:
        "This loan is open for salaried and self-employed IT professionals, software engineers, and tech consultants with stable income.",
      professionals: [
        {
          title: "Software Engineers",
          degree: "BE / B.Tech / MCA / M.Sc (CS or IT)",
          icon: {
            paths: ["M2 6h20v12H2z", "M8 10h8v4H8z"],
          },
        },
        {
          title: "Data Scientists & Analysts",
          degree: "B.Sc / M.Sc / PG in Data Analytics or AI",
          icon: {
            paths: ["M4 6h16v14H4z", "M8 10h8v2H8z"],
          },
        },
        {
          title: "IT Consultants",
          degree: "Any recognized technical qualification",
          icon: {
            paths: ["M9 18V5l12-2v13", "M9 9h12"],
          },
        },
        {
          title: "Startup Founders / CTOs",
          degree: "Minimum 2 years of IT business income",
          icon: {
            paths: ["M12 2l4 4H8l4-4z", "M4 10h16v10H4z"],
          },
        },
      ],
    },

    doctorComparisonSection: {
      title: "IT Professional Loan vs Regular Loan",
      subtitle: "Why IT professionals enjoy better loan offers.",
      headers: {
        parameter: "Parameter",
        doctorLoan: "IT Professional Home Loan",
        regularLoan: "Standard Home Loan",
      },
      rows: [
        {
          parameter: "Interest Rate",
          doctorLoan: "Lower (8.30% onwards)",
          regularLoan: "Higher (8.70% onwards)",
        },
        {
          parameter: "Loan Amount",
          doctorLoan: "Up to ₹5 Cr",
          regularLoan: "Up to ₹2 Cr",
        },
        {
          parameter: "Processing Time",
          doctorLoan: "1–2 days (digital priority)",
          regularLoan: "3–5 days",
        },
        {
          parameter: "Eligibility Basis",
          doctorLoan: "IT Employment / Salary Profile",
          regularLoan: "Income only",
        },
      ],
    },

    doctorRatesSection: {
      title: "Latest Interest Rates (2025)",
      subtitle:
        "Interest rates vary based on salary, employer category, and city.",
      headers: [
        { label: "Lender" },
        { label: "Interest Rate (p.a.)", highlight: true },
        { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
        { label: "Tenure", hidden: "hidden md:table-cell" },
        { label: "Special Benefits" },
      ],
      lenders: [
        {
          name: "HDFC Bank",
          interestRate: "8.30% – 9.00%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Preferred rates for TCS/Infosys employees",
        },
        {
          name: "ICICI Bank",
          interestRate: "8.40% – 9.10%",
          processingFee: "0.50%",
          tenure: "30 yrs",
          benefit: "Faster approval for IT park employees",
        },
        {
          name: "Axis Bank",
          interestRate: "8.35% – 9.15%",
          processingFee: "0.40%",
          tenure: "30 yrs",
          benefit: "Discount for women IT professionals",
        },
        {
          name: "SBI",
          interestRate: "8.30% – 9.05%",
          processingFee: "0.35%",
          tenure: "30 yrs",
          benefit: "Special salary-linked offers",
        },
        {
          name: "PNB Housing",
          interestRate: "8.50% – 9.30%",
          processingFee: "0.50%",
          tenure: "25 yrs",
          benefit: "Top-up loans for home automation or renovation",
        },
      ],
    },

    doctorEmiCalculatorSection: {
      title: "EMI Calculator",
      subtitle: "Estimate your EMI and plan smartly.",
      labels: {
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (p.a.)",
        loanTenure: "Tenure (Years)",
        emi: "Monthly EMI",
        principal: "Principal",
        totalInterest: "Interest Payable",
        totalAmount: "Total Payable",
      },
      defaults: {
        loanAmount: 8500000,
        interestRate: 8.30,
        loanTenure: 25,
      },
      ranges: {
        loanAmount: { min: 500000, max: 50000000, step: 100000 },
        interestRate: { min: 7, max: 15, step: 0.05 },
        loanTenure: { min: 5, max: 30, step: 1 },
      },
    },

    doctorTaxBenefitsSection: {
      title: "Tax Benefits for IT Professionals",
      cards: [
        {
          icon: "shield",
          title: "Section 80C",
          description: "Up to ₹1.5 lakh deduction on principal repayment.",
        },
        {
          icon: "percent",
          title: "Section 24(b)",
          description: "Claim up to ₹2 lakh deduction on interest paid annually.",
        },
        {
          icon: "users",
          title: "Joint Loan Benefits",
          description: "Increase eligibility and tax benefits with co-borrowers.",
        },
      ],
    },

    doctorApplicationProcessSection: {
      title: "Step-by-Step Application Process",
      subtitle: "Smart, paperless, and lightning-fast process.",
      steps: [
        { icon: "click", title: "Check Eligibility", description: "Instant online eligibility check." },
        { icon: "search", title: "Compare Offers", description: "From 30+ top lenders instantly." },
        { icon: "upload", title: "Upload Documents", description: "Digital KYC and income proofs." },
        { icon: "zap", title: "Instant Approval", description: "Get approval within 24–48 hours." },
        { icon: "banknote", title: "Disbursement", description: "Funds transferred directly to seller." },
        { icon: "key", title: "Move In", description: "Welcome to your new smart home." },
      ],
    },

    doctorEligibilitytwoSection: {
      title: "Eligibility & Documentation",
      criteria: [
        { label: "Age", value: "Min 23 years, Max 65 years at loan maturity" },
        { label: "Qualification", value: "Graduate in IT, CS, or related field" },
        { label: "Employment Type", value: "Salaried or Self-employed in IT industry" },
        { label: "Experience", value: "Minimum 1 year with current employer" },
        { label: "Minimum Income", value: "₹60,000 per month (varies by city)" },
        { label: "Credit Score", value: "700 and above preferred" },
        { label: "Nationality", value: "Indian Resident or NRI IT Professional" },
      ],
      documents: [
        "KYC documents (PAN, Aadhaar, Passport)",
        "Employment ID / Offer Letter",
        "Salary slips / ITR for 2 years",
        "Bank statements (last 6 months)",
        "Property documents and sale deed",
      ],
      tips: [
        "Maintain a high credit score to get the best rate.",
        "Apply online for faster processing and approval.",
        "Opt for auto-debit EMIs for smoother repayment.",
        "Choose a longer tenure for affordable EMIs.",
      ],
    },

    doctorWhyChooseSection: {
      title: "Why Choose QuickHomeLoan?",
      reasons: [
        { icon: "award", title: "Tailored for IT Pros", description: "Exclusive schemes for salaried IT employees." },
        { icon: "handshake", title: "30+ Lenders", description: "Compare and choose the best offer instantly." },
        { icon: "zap", title: "Superfast Approval", description: "Loan sanctioned in just 48 hours." },
        { icon: "globe", title: "Pan-India Coverage", description: "Available across all metro and IT hubs." },
      ],
    },

    doctorFaqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do IT professionals get special home loan benefits?",
          answer:
            "Yes, IT professionals are offered exclusive rates, faster approvals, and digital processing by most top banks.",
        },
        {
          question: "What is the maximum loan amount available?",
          answer: "Up to ₹5 Crore depending on income and credit profile.",
        },
        {
          question: "Can remote employees or freelancers apply?",
          answer:
            "Yes, freelancers with consistent ITRs and contracts can apply.",
        },
        {
          question: "Are NRI IT professionals eligible?",
          answer:
            "Yes, NRI software professionals working abroad can avail special NRI home loans.",
        },
        {
          question: "Is prepayment allowed?",
          answer:
            "Yes, prepayment and foreclosure are allowed without penalty on floating-rate loans.",
        },
        {
          question: "Can I get top-up for renovation?",
          answer:
            "Yes, top-up and home improvement loans are available for IT professionals.",
        },
      ],
    },

    doctorApplySection: {
      title: "Empowering IT Professionals to Own Smart Homes",
      description:
        "Whether you're a coder or a cloud architect, QuickHomeLoan helps you secure your dream home faster, smarter, and simpler.",
      button: { label: "Apply Now", href: "#eligibility" },
    },
  },

  {
  id: 7,
  slug: "influencers",
  title: "Home Loan for Influencers & Content Creators - QuickHomeLoan",
  description:
    "Specialised home loans for Influencers, YouTubers, Bloggers, and Digital Creators with high eligibility, flexible income assessment, and fast approvals. Designed for modern professionals with digital income streams.",
  interestRate: "8.60% - 10.75% p.a.",
  processingFee: "Up to 1% of loan amount (varies by lender)",
  loanTenure: "Up to 30 years",

  heroSection: {
    tag: {
      icon: {
        name: "camera",
        svgPath: [
          "M23 7h-3l-2-3H6L4 7H1v13h22z",
          "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        ]
      },
      text: "Exclusive for Influencers & Creators",
      
    },

    title: {
      line1: "Turn Your Digital Success Into",
      line2: "A Home You Truly Own.",
    },

    description:
      "Designed for Influencers, YouTubers, Bloggers, and Digital Entrepreneurs. Enjoy flexible income evaluation, attractive interest rates, and quick digital approvals.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Influencers"
      },
      {
        label: "Check Eligibility",
        href: "#eligibility"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is an Influencer Home Loan?",
    description:
      "A customised home loan solution for individuals earning through digital platforms such as YouTube, Instagram, brand collaborations, ads, and online businesses. Lenders assess income holistically rather than traditional salary slips.",
    subtitle: "Key Benefits",
    subtext: "Designed for the Creator Economy",
    benefits: [
      {
        title: "Flexible Income Assessment",
        description:
          "Multiple income sources like ads, sponsorships, and affiliate earnings considered.",
        icon: { paths: ["M12 1v22", "M5 6h14", "M7 12h10", "M9 18h6"] }
      },
      {
        title: "High Loan Eligibility",
        description:
          "Loan amount based on average monthly digital income and account stability.",
        icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] }
      },
      {
        title: "Quick Digital Processing",
        description:
          "Paperless application with online income verification.",
        icon: { paths: ["M4 14l8-8 8 8", "M12 6v12"] }
      },
      {
        title: "Flexible Repayment Tenure",
        description:
          "Choose a repayment period of up to 30 years for manageable EMIs.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "No Salary Slip Required",
        description:
          "Loans approved without traditional payslips or employer proof.",
        icon: { paths: ["M6 18L18 6", "M6 6h12v12H6z"] }
      },
      {
        title: "Home + Studio Financing",
        description:
          "Option to fund home setups, recording studios, or workspaces.",
        icon: { paths: ["M3 3h18v18H3z", "M8 8h8v8H8z"] }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "Home loans are available for digital professionals with stable online income and verified platforms.",
    professionals: [
      {
        title: "Social Media Influencers",
        degree: "Instagram, Facebook, or LinkedIn creators",
        icon: { paths: ["M12 2a10 10 0 1 0 10 10"] }
      },
      {
        title: "YouTubers & Streamers",
        degree: "YouTube monetisation or streaming income proof",
        icon: { paths: ["M10 8l6 4-6 4z", "M2 6h20v12H2z"] }
      },
      {
        title: "Bloggers & Content Writers",
        degree: "AdSense / affiliate earnings",
        icon: { paths: ["M4 4h16v16H4z", "M8 8h8"] }
      },
      {
        title: "Digital Entrepreneurs",
        degree: "Online course creators & solopreneurs",
        icon: { paths: ["M12 2l4 4H8l4-4z", "M4 10h16v10H4z"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "Influencer Loan vs Regular Loan",
    subtitle: "Why creators get an edge.",
    headers: {
      parameter: "Parameter",
      doctorLoan: "Influencer Home Loan",
      regularLoan: "Standard Home Loan"
    },
    rows: [
      {
        parameter: "Income Proof",
        doctorLoan: "Digital earnings & bank statements",
        regularLoan: "Salary slips required"
      },
      {
        parameter: "Eligibility",
        doctorLoan: "High (multiple income streams)",
        regularLoan: "Moderate"
      },
      {
        parameter: "Processing",
        doctorLoan: "Fast-track",
        regularLoan: "Standard"
      },
      {
        parameter: "Flexibility",
        doctorLoan: "High",
        regularLoan: "Limited"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest Interest Rates (2025)",
    subtitle:
      "Rates depend on income stability, follower base, and platform diversification.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
      { label: "Tenure", hidden: "hidden md:table-cell" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "HDFC Bank",
        interestRate: "8.60% – 9.50%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Digital income programs"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.70% – 9.60%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Fast approvals for self-employed"
      },
      {
        name: "Axis Bank",
        interestRate: "8.75% – 9.80%",
        processingFee: "0.40%",
        tenure: "30 yrs",
        benefit: "Flexible income averaging"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Plan your EMIs with confidence.",
    labels: {
      loanAmount: "Loan Amount",
      interestRate: "Interest Rate (p.a.)",
      loanTenure: "Tenure (Years)",
      emi: "Monthly EMI",
      principal: "Principal",
      totalInterest: "Interest Payable",
      totalAmount: "Total Payable"
    },
    defaults: {
      loanAmount: 5000000,
      interestRate: 8.75,
      loanTenure: 25
    },
    ranges: {
      loanAmount: { min: 1000000, max: 30000000, step: 100000 },
      interestRate: { min: 7.5, max: 15, step: 0.05 },
      loanTenure: { min: 5, max: 30, step: 1 }
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can influencers get home loans without salary slips?",
        answer:
          "Yes. Digital income, bank statements, and platform analytics are considered."
      },
      {
        question: "Is minimum follower count required?",
        answer:
          "No fixed number, but stable income history and engagement matter."
      },
      {
        question: "Can new influencers apply?",
        answer:
          "Yes, with at least 1–2 years of consistent income proof."
      },
      {
        question: "Is this available across India?",
        answer:
          "Yes, in all major cities and towns."
      }
    ]
  },

  doctorApplySection: {
    title: "Turn Your Digital Influence Into a Dream Home",
    description:
      "Let your online success open the doors to homeownership with QuickHomeLoan.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
},
{
  id: 8,
  slug: "nris",
  title: "Home Loan for NRIs - QuickHomeLoan",
  description:
    "Specialised home loans for Non-Resident Indians (NRIs) with attractive interest rates, high eligibility, and simplified documentation. Designed for overseas Indians looking to buy, build, or invest in property in India.",
  interestRate: "8.50% - 10.50% p.a.",
  processingFee: "Up to 1% of loan amount (varies by lender)",
  loanTenure: "Up to 30 years",

  heroSection: {
    tag: {
      icon: {
        name: "globe",
        svgPath: [
          "M12 2a10 10 0 1 0 10 10",
          "M2 12h20",
          "M12 2c2.5 3 2.5 17 0 20"
        ]
      },
      text: "Exclusive for NRIs",
    style: {
          bg: "bg-gray-100",
          text: "text-gray-900",
          border: "border-gray-200",
        },
    },

    title: {
      line1: "Own a Home in India",
      line2: "Even While Living Abroad"
    },

    description:
      "Designed for NRIs and PIOs working overseas. Get flexible repayment options, foreign income consideration, and seamless digital processing from anywhere in the world.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for NRIs"
      },
      {
        label: "Check Eligibility",
        href: "#eligibility"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is an NRI Home Loan?",
    description:
      "An NRI home loan enables Non-Resident Indians to purchase, construct, or invest in residential property in India using foreign income while residing abroad.",
    subtitle: "Key Benefits",
    subtext: "Designed for Global Indians",
    benefits: [
      {
        title: "Foreign Income Considered",
        description:
          "Salary earned abroad is considered for loan eligibility.",
        icon: { paths: ["M12 1v22", "M4 8h16", "M6 16h12"] }
      },
      {
        title: "High Loan Eligibility",
        description:
          "Higher eligibility based on stable overseas employment.",
        icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] }
      },
      {
        title: "Long Repayment Tenure",
        description:
          "Choose a repayment period of up to 30 years.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "Online Processing",
        description:
          "Apply and track your loan digitally from abroad.",
        icon: { paths: ["M4 14l8-8 8 8", "M12 6v12"] }
      },
      {
        title: "Tax Benefits in India",
        description:
          "Avail tax deductions under Indian income tax laws.",
        icon: { paths: ["M6 6h12v12H6z", "M9 9h6v6H9z"] }
      },
      {
        title: "Joint Loan with Resident Indian",
        description:
          "Apply jointly with a resident Indian family member.",
        icon: { paths: ["M8 8a4 4 0 1 0 0-8", "M16 16a4 4 0 1 0 0-8"] }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "NRI home loans are available for Indians working abroad with stable income and valid residency status.",
    professionals: [
      {
        title: "Salaried NRIs",
        degree: "Working in MNCs, government or private firms abroad",
        icon: { paths: ["M4 6h16v12H4z", "M8 18h8"] }
      },
      {
        title: "Self-Employed NRIs",
        degree: "Business owners or consultants overseas",
        icon: { paths: ["M3 3h18v18H3z"] }
      },
      {
        title: "PIOs & OCIs",
        degree: "Persons of Indian Origin with valid documents",
        icon: { paths: ["M12 2a10 10 0 1 0 10 10"] }
      },
      {
        title: "Joint Applicants",
        degree: "Co-applicant resident in India",
        icon: { paths: ["M8 8a4 4 0 1 0 0-8", "M16 16a4 4 0 1 0 0-8"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "NRI Home Loan vs Regular Home Loan",
    subtitle: "Key differences you should know",
    headers: {
      parameter: "Parameter",
      doctorLoan: "NRI Home Loan",
      regularLoan: "Resident Home Loan"
    },
    rows: [
      {
        parameter: "Income Source",
        doctorLoan: "Foreign income",
        regularLoan: "Indian income"
      },
      {
        parameter: "Documentation",
        doctorLoan: "Passport, visa, overseas salary proof",
        regularLoan: "Salary slips & Form 16"
      },
      {
        parameter: "Processing",
        doctorLoan: "Mostly digital",
        regularLoan: "Standard"
      },
      {
        parameter: "Eligibility",
        doctorLoan: "High (foreign income based)",
        regularLoan: "Moderate"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest NRI Home Loan Interest Rates (2025)",
    subtitle:
      "Rates vary based on country of residence, income, and credit profile.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee" },
      { label: "Tenure" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "HDFC Bank",
        interestRate: "8.50% – 9.60%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Strong NRI programs"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.60% – 9.80%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Global NRI presence"
      },
      {
        name: "Axis Bank",
        interestRate: "8.70% – 10.00%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Fast overseas processing"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Estimate your EMIs before you apply",
    defaults: {
      loanAmount: 7500000,
      interestRate: 8.75,
      loanTenure: 25
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can NRIs apply for home loans from abroad?",
        answer:
          "Yes. Most banks allow complete digital processing from overseas."
      },
      {
        question: "Is joint application mandatory?",
        answer:
          "Not mandatory, but some lenders may require a resident Indian co-applicant."
      },
      {
        question: "Is rental income considered?",
        answer:
          "Yes, rental income from Indian property can be considered."
      },
      {
        question: "Is this available across India?",
        answer:
          "Yes, for properties located in approved cities and projects."
      }
    ]
  },

  doctorApplySection: {
    title: "Buy Your Dream Home in India from Anywhere",
    description:
      "Let distance not stop you from owning a home in India with QuickHomeLoan.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
},
{
  id: 9,
  slug: "business-owners",
  title: "Home Loan for Business Owners & Entrepreneurs - QuickHomeLoan",
  description:
    "Tailored home loans for Business Owners, Entrepreneurs, and Self-Employed Professionals with high eligibility, flexible income assessment, and fast approvals. Ideal for individuals running profitable businesses.",
  interestRate: "8.50% - 10.50% p.a.",
  processingFee: "Up to 1% of loan amount (varies by lender)",
  loanTenure: "Up to 30 years",

  heroSection: {
    tag: {
      icon: {
        name: "store",
        svgPath: [
          "M3 9l1-5h16l1 5",
          "M5 22V9",
          "M19 22V9",
          "M9 22V14h6v8"
        ]
      },
      text: "Exclusive for Business Owners",
      style: {
      }
    },

    title: {
      line1: "Build Wealth Through Business.",
      line2: "Own Your Dream Home.",
    },

    description:
      "Designed for business owners, MSMEs, and entrepreneurs. Get higher loan eligibility, customised repayment options, and seamless approvals based on business cash flows.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Business Owners"
      },
      {
        label: "View Rates",
        href: "#rates"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is a Business Owner Home Loan?",
    description:
      "A specialised home loan for self-employed individuals and entrepreneurs where lenders assess income based on business turnover, profit, and cash flow instead of fixed salaries.",
    subtitle: "Key Benefits",
    subtext: "Built for Entrepreneurs",
    benefits: [
      {
        title: "Higher Loan Eligibility",
        description:
          "Loan amount based on business turnover and net profit.",
        icon: { paths: ["M3 12h18", "M12 3v18"] }
      },
      {
        title: "Flexible Income Assessment",
        description:
          "ITR, GST returns, and bank statements considered.",
        icon: { paths: ["M4 4h16v16H4z", "M8 12h8"] }
      },
      {
        title: "Faster Approvals",
        description:
          "Priority processing for established businesses.",
        icon: {
          paths: [
            "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2",
            "M13 10h7"
          ]
        }
      },
      {
        title: "Flexible Tenure",
        description:
          "Repay comfortably over 10–30 years.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "No Salary Slip Required",
        description:
          "Business income replaces traditional payslips.",
        icon: { paths: ["M6 18L18 6", "M6 6h12v12H6z"] }
      },
      {
        title: "Home + Office Funding",
        description:
          "Option to buy residential or mixed-use property.",
        icon: {
          paths: ["M3 3h18v18H3z", "M9 9h6v6H9z"]
        }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "Home loans are available for business owners with stable income and compliant financial records.",
    professionals: [
      {
        title: "Sole Proprietors",
        degree: "Business registration & ITR proof",
        icon: { paths: ["M12 2l10 6v12l-10 6-10-6V8z"] }
      },
      {
        title: "Partnership Firms",
        degree: "Partnership deed & financials",
        icon: { paths: ["M16 11V7", "M8 11V7", "M4 21h16"] }
      },
      {
        title: "Company Directors",
        degree: "Private Ltd / LLP ownership proof",
        icon: {
          paths: ["M3 3h18v6H3z", "M7 9v12", "M17 9v12"]
        }
      },
      {
        title: "MSME Owners",
        degree: "GST registration & turnover proof",
        icon: { paths: ["M2 12h20", "M6 6h12v12H6z"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "Business Loan vs Regular Loan",
    subtitle: "Why entrepreneurs get better flexibility.",
    headers: {
      parameter: "Parameter",
      doctorLoan: "Business Owner Home Loan",
      regularLoan: "Standard Home Loan"
    },
    rows: [
      {
        parameter: "Income Proof",
        doctorLoan: "ITR, GST, Cash Flow",
        regularLoan: "Salary slips"
      },
      {
        parameter: "Eligibility",
        doctorLoan: "Higher (Turnover based)",
        regularLoan: "Limited"
      },
      {
        parameter: "Processing",
        doctorLoan: "Priority",
        regularLoan: "Standard"
      },
      {
        parameter: "Flexibility",
        doctorLoan: "High",
        regularLoan: "Low"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest Interest Rates (2025)",
    subtitle:
      "Rates depend on business stability, turnover, and credit profile.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee", hidden: "hidden sm:table-cell" },
      { label: "Tenure", hidden: "hidden md:table-cell" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "HDFC Bank",
        interestRate: "8.50% – 9.40%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Higher eligibility for MSMEs"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.60% – 9.60%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Flexible income averaging"
      },
      {
        name: "Axis Bank",
        interestRate: "8.65% – 9.70%",
        processingFee: "0.40%",
        tenure: "30 yrs",
        benefit: "Fast approvals for profitable firms"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Estimate EMIs based on your business income.",
    labels: {
      loanAmount: "Loan Amount",
      interestRate: "Interest Rate (p.a.)",
      loanTenure: "Tenure (Years)",
      emi: "Monthly EMI",
      principal: "Principal",
      totalInterest: "Interest Payable",
      totalAmount: "Total Payable"
    },
    defaults: {
      loanAmount: 6000000,
      interestRate: 8.6,
      loanTenure: 25
    },
    ranges: {
      loanAmount: { min: 1000000, max: 50000000, step: 100000 },
      interestRate: { min: 7.5, max: 15, step: 0.05 },
      loanTenure: { min: 5, max: 30, step: 1 }
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can business owners get home loans without salary slips?",
        answer:
          "Yes. Loans are approved based on ITR, GST returns, and bank statements."
      },
      {
        question: "Is GST mandatory?",
        answer:
          "Not always, but GST registration improves eligibility."
      },
      {
        question: "How much loan can I get?",
        answer:
          "Up to ₹5 Crore, depending on turnover and profitability."
      },
      {
        question: "Can startups apply?",
        answer:
          "Yes, with at least 2 years of stable business operations."
      }
    ]
  },

  doctorApplySection: {
    title: "Helping Business Owners Move Into Their Dream Home",
    description:
      "Your business success deserves a home that reflects it. Let QuickHomeLoan simplify the journey.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
},
{
  id: 10,
  slug: "defense-personnel",
  title: "Home Loan for Defense Personnel - QuickHomeLoan",
  description:
    "Special home loans for Indian Defense Personnel including Army, Navy, Air Force, and Paramilitary forces. Enjoy lower interest rates, high eligibility, priority processing, and flexible repayment options.",
  interestRate: "8.25% - 9.90% p.a.",
  processingFee: "Nil to 0.50% (varies by lender)",
  loanTenure: "Up to 30 years",

  heroSection: {
    tag: {
      icon: {
        name: "shield",
        svgPath: [
          "M12 2l8 4v6c0 5-3.5 9.5-8 12-4.5-2.5-8-7-8-12V6l8-4z"
        ]
      },
      text: "Exclusive for Defense Personnel",
      style: {
  
      }
    },

    title: {
      line1: "Secure Your Family’s Future",
      line2: "With a Home You Can Call Your Own"
    },

    description:
      "Tailored home loan solutions for serving and retired defense personnel with special concessions, faster approvals, and minimal documentation.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Defense Personnel"
      },
      {
        label: "Check Eligibility",
        href: "#eligibility"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is a Defense Personnel Home Loan?",
    description:
      "A specially designed home loan for individuals serving or retired from the Indian Armed Forces and Paramilitary services, offering preferential terms and benefits.",
    subtitle: "Key Benefits",
    subtext: "Honouring Those Who Serve",
    benefits: [
      {
        title: "Lower Interest Rates",
        description:
          "Special interest rate concessions for defense personnel.",
        icon: { paths: ["M12 1v22", "M6 8h12", "M6 16h12"] }
      },
      {
        title: "High Loan Eligibility",
        description:
          "Loan eligibility based on rank, salary, and pension income.",
        icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] }
      },
      {
        title: "Priority Processing",
        description:
          "Fast-track loan approvals and disbursals.",
        icon: { paths: ["M4 14l8-8 8 8", "M12 6v12"] }
      },
      {
        title: "Flexible Repayment Options",
        description:
          "Long repayment tenure of up to 30 years.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "Pension Income Accepted",
        description:
          "Retired defense personnel can apply using pension income.",
        icon: { paths: ["M6 6h12v12H6z", "M9 9h6v6H9z"] }
      },
      {
        title: "Minimal Documentation",
        description:
          "Simplified paperwork with service ID and income proof.",
        icon: { paths: ["M3 3h18v18H3z", "M8 8h8v8H8z"] }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "Home loans are available for both serving and retired defense personnel across India.",
    professionals: [
      {
        title: "Indian Army",
        degree: "Serving & retired army personnel",
        icon: { paths: ["M12 2l8 4v6"] }
      },
      {
        title: "Indian Navy",
        degree: "Serving & retired navy personnel",
        icon: { paths: ["M2 12h20", "M12 2v20"] }
      },
      {
        title: "Indian Air Force",
        degree: "Serving & retired air force personnel",
        icon: { paths: ["M2 12h20", "M12 6l4 6-4 6-4-6z"] }
      },
      {
        title: "Paramilitary Forces",
        degree: "BSF, CRPF, CISF, ITBP, Coast Guard",
        icon: { paths: ["M12 2a10 10 0 1 0 10 10"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "Defense Home Loan vs Regular Home Loan",
    subtitle: "Why defense personnel get special benefits",
    headers: {
      parameter: "Parameter",
      doctorLoan: "Defense Home Loan",
      regularLoan: "Standard Home Loan"
    },
    rows: [
      {
        parameter: "Interest Rate",
        doctorLoan: "Lower (special concession)",
        regularLoan: "Standard rates"
      },
      {
        parameter: "Processing Fee",
        doctorLoan: "Nil / Minimal",
        regularLoan: "Up to 1%"
      },
      {
        parameter: "Processing Speed",
        doctorLoan: "Priority",
        regularLoan: "Standard"
      },
      {
        parameter: "Income Considered",
        doctorLoan: "Salary + Pension",
        regularLoan: "Salary only"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest Defense Home Loan Interest Rates (2025)",
    subtitle:
      "Rates depend on rank, income stability, and lender-specific defense schemes.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee" },
      { label: "Tenure" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "SBI",
        interestRate: "8.25% – 9.30%",
        processingFee: "Nil",
        tenure: "30 yrs",
        benefit: "Special defense schemes"
      },
      {
        name: "PNB",
        interestRate: "8.35% – 9.50%",
        processingFee: "0.25%",
        tenure: "30 yrs",
        benefit: "Lower EMIs"
      },
      {
        name: "HDFC Bank",
        interestRate: "8.50% – 9.80%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Fast approvals"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Plan your home loan with confidence",
    defaults: {
      loanAmount: 6000000,
      interestRate: 8.50,
      loanTenure: 25
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can retired defense personnel apply for home loans?",
        answer:
          "Yes. Retired personnel can apply using pension income."
      },
      {
        question: "Is posting location a problem?",
        answer:
          "No. Loans are available regardless of current posting."
      },
      {
        question: "Are processing fees waived?",
        answer:
          "Many lenders offer zero or discounted processing fees."
      },
      {
        question: "Is this available across India?",
        answer:
          "Yes, for properties across approved cities and towns."
      }
    ]
  },

  doctorApplySection: {
    title: "A Home Loan That Salutes Your Service",
    description:
      "Secure a home for your family with exclusive benefits for defense personnel.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
},
{
  id: 11,
  slug: "private-sector",
  title: "Home Loan for Private Sector Employees - QuickHomeLoan",
  description:
    "Specialised home loans for Private Sector employees working in corporates, MNCs, startups, and private organisations. Enjoy high eligibility, attractive interest rates, and fast digital approvals.",
  interestRate: "8.45% - 10.50% p.a.",
  processingFee: "Up to 1% of loan amount (varies by lender)",
  loanTenure: "Up to 30 years",

  heroSection: {
    tag: {
      icon: {
        name: "briefcase",
        svgPath: [
          "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
          "M4 6h16v14H4z"
        ]
      },
      text: "Exclusive for Private Sector Employees",
      style: {
     
      }
    },

    title: {
      line1: "Turn Your Corporate Career Into",
      line2: "A Place You Call Home"
    },

    description:
      "Designed for salaried professionals working in private companies, MNCs, and startups. Get higher loan eligibility, flexible repayment options, and quick approvals.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Private Sector"
      },
      {
        label: "Check Eligibility",
        href: "#eligibility"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is a Private Sector Home Loan?",
    description:
      "A home loan tailored for salaried professionals employed in private sector organisations, with income-based eligibility and competitive interest rates.",
    subtitle: "Key Benefits",
    subtext: "Built for Corporate Professionals",
    benefits: [
      {
        title: "High Loan Eligibility",
        description:
          "Eligibility based on stable monthly salary and employer profile.",
        icon: { paths: ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"] }
      },
      {
        title: "Attractive Interest Rates",
        description:
          "Lower interest rates for employees of reputed private firms.",
        icon: { paths: ["M12 1v22", "M6 8h12", "M6 16h12"] }
      },
      {
        title: "Quick Loan Approvals",
        description:
          "Fast-track processing with minimal documentation.",
        icon: { paths: ["M4 14l8-8 8 8", "M12 6v12"] }
      },
      {
        title: "Long Repayment Tenure",
        description:
          "Repayment tenure of up to 30 years for lower EMIs.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "Employer-Based Benefits",
        description:
          "Special benefits for employees of approved corporate employers.",
        icon: { paths: ["M4 4h16v16H4z", "M8 8h8"] }
      },
      {
        title: "Top-Up & Balance Transfer",
        description:
          "Option to transfer loans and avail top-up facilities.",
        icon: { paths: ["M3 3h18v18H3z", "M8 8h8v8H8z"] }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "Home loans are available for salaried professionals working in private sector organisations across India.",
    professionals: [
      {
        title: "Corporate Employees",
        degree: "Working in private limited companies",
        icon: { paths: ["M4 6h16v12H4z"] }
      },
      {
        title: "MNC Professionals",
        degree: "Employees of multinational corporations",
        icon: { paths: ["M12 2a10 10 0 1 0 10 10"] }
      },
      {
        title: "Startup Employees",
        degree: "Professionals working in funded startups",
        icon: { paths: ["M12 2l4 4H8l4-4z", "M4 10h16v10H4z"] }
      },
      {
        title: "IT & Tech Professionals",
        degree: "Software, IT, and tech sector employees",
        icon: { paths: ["M3 3h18v18H3z"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "Private Sector Loan vs Regular Loan",
    subtitle: "Why salaried professionals get better terms",
    headers: {
      parameter: "Parameter",
      doctorLoan: "Private Sector Home Loan",
      regularLoan: "Standard Home Loan"
    },
    rows: [
      {
        parameter: "Income Proof",
        doctorLoan: "Salary slips & bank statements",
        regularLoan: "Salary slips only"
      },
      {
        parameter: "Eligibility",
        doctorLoan: "High (stable salary)",
        regularLoan: "Moderate"
      },
      {
        parameter: "Processing Speed",
        doctorLoan: "Fast",
        regularLoan: "Standard"
      },
      {
        parameter: "Flexibility",
        doctorLoan: "High",
        regularLoan: "Limited"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest Private Sector Home Loan Interest Rates (2025)",
    subtitle:
      "Rates depend on employer profile, income, and credit score.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee" },
      { label: "Tenure" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "HDFC Bank",
        interestRate: "8.45% – 9.50%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Corporate salary programs"
      },
      {
        name: "ICICI Bank",
        interestRate: "8.55% – 9.65%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Fast-track approvals"
      },
      {
        name: "Axis Bank",
        interestRate: "8.60% – 9.80%",
        processingFee: "0.50%",
        tenure: "30 yrs",
        benefit: "Employer-based discounts"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Estimate your monthly EMIs easily",
    defaults: {
      loanAmount: 6500000,
      interestRate: 8.60,
      loanTenure: 25
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can private sector employees get high home loan eligibility?",
        answer:
          "Yes. Stable salary and employer profile significantly increase eligibility."
      },
      {
        question: "Is Form 16 mandatory?",
        answer:
          "Usually yes, along with salary slips and bank statements."
      },
      {
        question: "Are interest rates lower for MNC employees?",
        answer:
          "Many lenders offer preferential rates for employees of reputed firms."
      },
      {
        question: "Is this available across India?",
        answer:
          "Yes, across all major cities and approved locations."
      }
    ]
  },

  doctorApplySection: {
    title: "Make Your Corporate Career Count",
    description:
      "Turn your stable income into homeownership with QuickHomeLoan.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
},
{
  id: 12,
  slug: "retired",
  title: "Home Loan for Retired Individuals - QuickHomeLoan",
  description:
    "Specialised home loans for retired individuals and senior citizens using pension income, rental income, or co-applicant support. Designed to help retirees own, upgrade, or transfer a home with flexible terms.",
  interestRate: "8.75% - 11.00% p.a.",
  processingFee: "Up to 1% of loan amount (varies by lender)",
  loanTenure: "Up to 20 years (subject to age norms)",

  heroSection: {
    tag: {
      icon: {
        name: "home-heart",
        svgPath: [
          "M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4",
          "M9 22V12h6v10"
        ]
      },
      text: "Exclusive for Retired Individuals",
      style: {
       
      }
    },

    title: {
      line1: "Because Retirement Deserves",
      line2: "A Home Full of Comfort & Security"
    },

    description:
      "Tailored home loan solutions for pensioners and senior citizens with simplified documentation, flexible repayment structures, and co-applicant options.",

    buttons: [
      {
        label: "Apply Instantly",
        href: "/apply-loan?category=Home Loan By Professions&subcategory=Home Loan for Retired Individuals"
      },
      {
        label: "Check Eligibility",
        href: "#eligibility"
      }
    ]
  },

  doctorBenefitsSection: {
    title: "What Is a Retired Person Home Loan?",
    description:
      "A home loan designed for retired individuals where pension income, rental income, or a co-applicant’s income is considered for eligibility.",
    subtitle: "Key Benefits",
    subtext: "Designed for Peaceful Retirement",
    benefits: [
      {
        title: "Pension Income Accepted",
        description:
          "Monthly pension is considered as stable income.",
        icon: { paths: ["M12 1v22", "M6 8h12", "M6 16h12"] }
      },
      {
        title: "Joint Loan Option",
        description:
          "Apply with a working spouse or earning family member.",
        icon: { paths: ["M8 8a4 4 0 1 0 0-8", "M16 16a4 4 0 1 0 0-8"] }
      },
      {
        title: "Flexible Repayment Structure",
        description:
          "Lower EMIs with customised tenure options.",
        icon: {
          circles: [{ cx: 12, cy: 12, r: 10 }],
          polylines: [{ points: "12 6 12 12 16 14" }]
        }
      },
      {
        title: "Rental Income Considered",
        description:
          "Income from rented properties can boost eligibility.",
        icon: { paths: ["M3 3h18v18H3z", "M8 8h8v8H8z"] }
      },
      {
        title: "Property Transfer & Upgrade",
        description:
          "Loans for resale property or home upgrades.",
        icon: { paths: ["M4 14l8-8 8 8", "M12 6v12"] }
      },
      {
        title: "Minimal Documentation",
        description:
          "Simplified paperwork for senior citizens.",
        icon: { paths: ["M6 6h12v12H6z"] }
      }
    ]
  },

  doctorEligibilitySection: {
    title: "Who Is Eligible?",
    columns: 4,
    description:
      "Home loans are available for retired individuals with stable pension or alternative income sources.",
    professionals: [
      {
        title: "Government Pensioners",
        degree: "Central & state government retirees",
        icon: { paths: ["M4 6h16v12H4z"] }
      },
      {
        title: "PSU Retirees",
        degree: "Retired PSU & public sector employees",
        icon: { paths: ["M12 2a10 10 0 1 0 10 10"] }
      },
      {
        title: "Defense Pensioners",
        degree: "Retired Army, Navy & Air Force personnel",
        icon: { paths: ["M12 2l8 4v6"] }
      },
      {
        title: "Senior Citizens",
        degree: "Age 60+ with pension or rental income",
        icon: { paths: ["M8 2v20", "M16 2v20"] }
      }
    ]
  },

  doctorComparisonSection: {
    title: "Retired Home Loan vs Regular Home Loan",
    subtitle: "Key differences explained",
    headers: {
      parameter: "Parameter",
      doctorLoan: "Retired Home Loan",
      regularLoan: "Standard Home Loan"
    },
    rows: [
      {
        parameter: "Income Source",
        doctorLoan: "Pension / rental / co-applicant",
        regularLoan: "Salary or business income"
      },
      {
        parameter: "Tenure",
        doctorLoan: "Shorter (age-based)",
        regularLoan: "Up to 30 years"
      },
      {
        parameter: "Eligibility",
        doctorLoan: "Moderate",
        regularLoan: "High"
      },
      {
        parameter: "Flexibility",
        doctorLoan: "High with co-applicant",
        regularLoan: "Standard"
      }
    ]
  },

  doctorRatesSection: {
    title: "Latest Home Loan Interest Rates for Retired Individuals (2025)",
    subtitle:
      "Rates depend on age, pension amount, co-applicant, and property profile.",
    headers: [
      { label: "Lender" },
      { label: "Interest Rate (p.a.)", highlight: true },
      { label: "Proc. Fee" },
      { label: "Tenure" },
      { label: "Special Benefits" }
    ],
    lenders: [
      {
        name: "SBI",
        interestRate: "8.75% – 9.90%",
        processingFee: "Nil",
        tenure: "20 yrs",
        benefit: "Strong pensioner schemes"
      },
      {
        name: "PNB",
        interestRate: "8.85% – 10.10%",
        processingFee: "0.25%",
        tenure: "20 yrs",
        benefit: "Lower pension-linked EMIs"
      },
      {
        name: "HDFC Bank",
        interestRate: "9.00% – 10.50%",
        processingFee: "0.50%",
        tenure: "20 yrs",
        benefit: "Joint loan flexibility"
      }
    ]
  },

  doctorEmiCalculatorSection: {
    title: "EMI Calculator",
    subtitle: "Plan your retirement finances wisely",
    defaults: {
      loanAmount: 4000000,
      interestRate: 9.00,
      loanTenure: 15
    }
  },

  doctorFaqSection: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can retired individuals get a home loan?",
        answer:
          "Yes. Pension income, rental income, or a co-applicant’s income can be considered."
      },
      {
        question: "Is there an age limit?",
        answer:
          "Most banks require loan closure before 75–80 years of age."
      },
      {
        question: "Is co-applicant mandatory?",
        answer:
          "Not mandatory, but it significantly improves eligibility."
      },
      {
        question: "Is this available across India?",
        answer:
          "Yes, subject to lender and property approval."
      }
    ]
  },

  doctorApplySection: {
    title: "A Peaceful Retirement Begins With a Secure Home",
    description:
      "Make your retirement years comfortable with a home loan designed just for you.",
    button: {
      label: "Apply Now",
      href: "#eligibility"
    }
  }
}







];

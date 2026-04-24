export const homeLoanBySalary = [
  {
    id: 1,
    slug: "50000-salary",
    title: "Home Loan on ₹50,000 Salary – Eligibility, EMI & Bank Comparison",
    description: "Dreaming of owning your home while earning ₹50,000 a month? Learn how much you can borrow, calculate your EMI, and compare the best bank offers.",
    interestRate: "8.40% - 9.30% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",
    heroSection: {
      title: "Home Loan on ₹50,000 Salary – Complete Guide 2025",
      description:
        "Dreaming of owning your home while earning ₹50,000 a month? At Quick Home Loan, we help you understand how much you can borrow, what your EMI will be, and which bank offers the best deal — all on one easy-to-use page.",
      salary: 50000,
      halfSalary: 25000,
      salaryInK: "50K",
      eligibleRange: "₹25 - ₹35 Lakh",
      emiRange: "₹21,000 - ₹28,000",
      tenure: "Up to 30 Years",
      cta: "Start your home ownership journey today!",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 50000",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-50000-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      emiExample: {
        title: "At 8.5% for 20 Years",
        background: "bg-green-50",
        textColor: "text-green-800",
        cardItems: [
          { loanAmount: "₹25L Loan", emi: "₹21,695 EMI" },
          { loanAmount: "₹30L Loan", emi: "₹26,034 EMI" },
        ],
      },
    },
    summaryStats: {
      title: "Home Loan Summary for ₹50,000 Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹22L–₹30L",
        },
        {
          label: "Typical Interest Rate",
          value: "8.4%–10.5% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Figures are illustrative and subject to each lender’s policy.",
    },
    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹50,000 Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years",
        },
        {
          label: "Employment",
          value: "Salaried or self-employed with stable income",
        },
        {
          label: "Credit Score",
          value: "700+ preferred",
        },
        {
          label: "DTI",
          value: "Aim ≤ 40–50%",
        },
        {
          label: "Co-applicant",
          value: "Can boost eligibility",
        },
        {
          label: "Residency",
          value: "Indian citizen/NRI as per lender rules",
        },
      ],
      note: "Figures are illustrative and subject to each lender’s policy.",
    },
    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Offers",
      defaultValues: {
        loanAmount: 2500000,
        interestRate: 8.5,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.5% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹50.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.7% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹45.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.75% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹48.00 Lakh",
          tenure: "25 Years",
        },
        {
          short: "KOTAK",
          name: "Kotak Mahindra Bank",
          interestRate: "8.85% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹42.00 Lakh",
          tenure: "20 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.6% p.a.",
          processingFee: "Zero Fee Offer",
          maxLoan: "₹46.00 Lakh",
          tenure: "30 Years",
        },
      ],
    },
    documentsSection: {
      title: "Documents Required",
      note: "Documents vary by lender. Keep originals ready for verification.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN", "Aadhaar", "Passport", "DL"],
        },
        {
          title: "Address Proof",
          items: ["Utility bill", "Voter ID", "Property tax receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Salary slips", "Form 16", "ITR"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["P&L", "Balance sheet", "ITR", "GST"],
        },
        {
          title: "Property Proof",
          items: ["Title deeds", "Allotment letter", "Valuation report"],
        },
        {
          title: "Other",
          items: ["Bank statements (6–12 months)"],
        },
      ],
    },
    tipsSection: {
      title: "Tips to Improve Approval Chances",
      subtitle: "Strengthen your profile before you apply.",
      tips: [
        "Maintain a 700+ credit score",
        "Reduce existing EMIs to lower DTI",
        "Declare all income sources",
        "Make a higher down payment",
        "Choose longer tenure for lower EMI",
        "Add a co-applicant",
      ],
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
    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the maximum loan on ₹50,000 salary?",
          answer:
            "Typically ₹22–₹30 lakh depending on tenure, credit score, and obligations.",
        },
        {
          question: "Will a longer tenure increase my eligibility?",
          answer:
            "Yes, it lowers EMI, improving affordability—but increases total interest.",
        },
        {
          question: "What credit score do I need?",
          answer:
            "700+ is preferred; below that, lenders may tighten terms.",
        },
        {
          question: "Can I add a co-applicant?",
          answer:
            "Yes—co-applicant income can significantly increase eligibility.",
        },
        {
          question: "Are there tax benefits?",
          answer:
            "You may claim deductions under Sections 24(b) (interest) and 80C (principal). Consult a tax advisor.",
        },
        {
          question: "Do government subsidies apply?",
          answer:
            "First-time buyers may qualify under schemes where available; check eligibility.",
        },
      ],
    },
    ctaSection: {
      title: "Ready to check your eligibility?",
      subtitle: "It takes under 2 minutes. No hard enquiry without consent.",
      buttonText: "Get Started",
      link: "/apply-loan", // 👈 optional route (you can change it)
    },


  },
  {
    id: 2,
    slug: "80000-salary",
    title: "Home Loan on ₹80,000 Salary – Eligibility, EMI & Bank Comparison",
    description:
      "Earning ₹80,000 a month? Discover how much home loan you can get, calculate your EMI, and compare top bank offers for the best deals in 2025.",
    interestRate: "8.30% - 9.20% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

    heroSection: {
      title: "Home Loan on ₹80,000 Salary – Complete Guide 2025",
      description:
        "Looking to buy your dream home while earning ₹80,000 a month? Quick Home Loan helps you estimate your eligibility, calculate EMIs, and explore top bank offers — all in one place.",
      salary: 80000,
      halfSalary: 40000,
      salaryInK: "80K",
      eligibleRange: "₹40 - ₹55 Lakh",
      emiRange: "₹34,000 - ₹39,000",
      tenure: "Up to 30 Years",
      cta: "Find your best home loan offer today!",
      emiExample: {
        title: "At 8.5% for 20 Years",
        background: "bg-blue-50",
        textColor: "text-blue-800",
        cardItems: [
          { loanAmount: "₹40L Loan", emi: "₹34,712 EMI" },
          { loanAmount: "₹50L Loan", emi: "₹43,390 EMI" },
        ],
      },

      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 80000",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-80000-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
    },

    summaryStats: {
      title: "Home Loan Summary for ₹80,000 Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹38L–₹55L",
        },
        {
          label: "Typical Interest Rate",
          value: "8.3%–9.5% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Figures are indicative and depend on your lender, credit score, and existing liabilities.",
    },

    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹80,000 Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years",
        },
        {
          label: "Employment",
          value: "Salaried or self-employed with stable income",
        },
        {
          label: "Credit Score",
          value: "700+ preferred",
        },
        {
          label: "DTI",
          value: "Should be ≤ 40–50%",
        },
        {
          label: "Co-applicant",
          value: "Can further increase eligibility",
        },
        {
          label: "Residency",
          value: "Indian citizen/NRI as per bank norms",
        },
      ],
      note: "Each lender applies its own eligibility and income norms.",
    },

    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Offers",
      defaultValues: {
        loanAmount: 4500000,
        interestRate: 8.5,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.4% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹65.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.6% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹60.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.7% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹62.00 Lakh",
          tenure: "25 Years",
        },
        {
          short: "KOTAK",
          name: "Kotak Mahindra Bank",
          interestRate: "8.8% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹55.00 Lakh",
          tenure: "25 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.5% p.a.",
          processingFee: "Zero Fee Offer",
          maxLoan: "₹58.00 Lakh",
          tenure: "30 Years",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required",
      note: "Ensure all documents are valid and updated. Originals required for verification.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN", "Aadhaar", "Passport", "Driving License"],
        },
        {
          title: "Address Proof",
          items: ["Utility bill", "Voter ID", "Property tax receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Latest 3 months’ salary slips", "Form 16", "ITR (last 2 years)"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["P&L statement", "Balance sheet", "ITR (2 years)", "GST returns"],
        },
        {
          title: "Property Proof",
          items: ["Title deed", "Sale agreement", "Valuation certificate"],
        },
        {
          title: "Other",
          items: ["Bank statements (6–12 months)"],
        },
      ],
    },

    tipsSection: {
      title: "Tips to Maximize Loan Eligibility",
      subtitle: "Smart ways to get a higher sanction and lower rate.",
      tips: [
        "Keep your credit score above 750",
        "Clear short-term debts before applying",
        "Opt for joint home loans with spouse/family",
        "Choose a longer tenure for higher eligibility",
        "Maintain steady employment for 2+ years",
        "Compare offers across top lenders before finalizing",
      ],
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

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much home loan can I get on ₹80,000 salary?",
          answer:
            "You can typically get between ₹38–₹55 lakh depending on your credit score, tenure, and existing EMIs.",
        },
        {
          question: "Which bank offers the best rate for ₹80,000 salary?",
          answer:
            "Public sector banks like SBI and Bank of Baroda generally offer lower rates and flexible terms.",
        },
        {
          question: "Does adding a co-applicant increase my eligibility?",
          answer:
            "Yes, combining incomes can significantly increase your approved loan amount.",
        },
        {
          question: "Is there a maximum tenure available?",
          answer:
            "Yes, most banks allow up to 30 years for salaried applicants.",
        },
        {
          question: "Are there any tax benefits?",
          answer:
            "Yes, you can claim tax deductions under Sections 24(b) and 80C for interest and principal repayment.",
        },
        {
          question: "Do I need to pay full processing fees upfront?",
          answer:
            "Usually, yes. However, some lenders deduct it from the disbursed amount or offer limited-time waivers.",
        },
      ],
    },

    ctaSection: {
      title: "Check Your Eligibility Instantly",
      subtitle:
        "Takes less than 2 minutes — no hard credit check until you consent.",
      buttonText: "Check Now",
      link: "/apply-loan",
    },
  },
  {
    id: 3,
    slug: "110000-salary",
    title: "Home Loan on ₹1,10,000 Salary – Eligibility, EMI & Bank Comparison",
    description:
      "Earning ₹1,10,000 per month? Discover your home loan eligibility, calculate EMI, and compare offers from India’s top banks for 2025.",
    interestRate: "8.30% - 9.10% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

    heroSection: {
      title: "Home Loan on ₹1,10,000 Salary – Complete Guide 2025",
      description:
        "Planning to buy your dream home with a monthly income of ₹1,10,000? Quick Home Loan helps you estimate how much you can borrow, what your EMI will be, and which bank offers the best deal — all in one place.",
      salary: 110000,
      halfSalary: 55000,
      salaryInK: "110K",
      eligibleRange: "₹65 - ₹80 Lakh",
      emiRange: "₹52,000 - ₹58,000",
      tenure: "Up to 30 Years",
      cta: "Check your best home loan offer today!",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 110000",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-110000-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      emiExample: {
        title: "At 8.5% for 20 Years",
        background: "bg-indigo-50",
        textColor: "text-indigo-800",
        cardItems: [
          { loanAmount: "₹65L Loan", emi: "₹56,142 EMI" },
          { loanAmount: "₹75L Loan", emi: "₹64,747 EMI" },
        ],
      },
    },

    summaryStats: {
      title: "Home Loan Summary for ₹1,10,000 Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹60L–₹80L",
        },
        {
          label: "Typical Interest Rate",
          value: "8.3%–9.3% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Actual eligibility depends on credit score, liabilities, and lender-specific policy.",
    },

    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹1,10,000 Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years",
        },
        {
          label: "Employment",
          value: "Salaried or self-employed with consistent income records",
        },
        {
          label: "Credit Score",
          value: "700+ preferred for best offers",
        },
        {
          label: "DTI",
          value: "Maintain ≤ 40–50% for easy approval",
        },
        {
          label: "Co-applicant",
          value: "Helps improve total eligibility significantly",
        },
        {
          label: "Residency",
          value: "Indian citizen/NRI as per bank policy",
        },
      ],
      note: "Eligibility may vary slightly across different banks.",
    },

    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Offers",
      defaultValues: {
        loanAmount: 7000000,
        interestRate: 8.5,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.35% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹80.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.5% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹78.00 Lakh",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.65% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹75.00 Lakh",
          tenure: "25 Years",
        },
        {
          short: "KOTAK",
          name: "Kotak Mahindra Bank",
          interestRate: "8.8% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹72.00 Lakh",
          tenure: "25 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.4% p.a.",
          processingFee: "Zero Fee Offer",
          maxLoan: "₹80.00 Lakh",
          tenure: "30 Years",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required",
      note: "Keep both photocopies and originals ready during verification.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN", "Aadhaar", "Passport", "Driving License"],
        },
        {
          title: "Address Proof",
          items: ["Electricity Bill", "Voter ID", "Rent Agreement", "Property Tax Receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Last 3–6 months salary slips", "Form 16", "ITR (2 years)"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["Balance Sheet", "Profit & Loss Statement", "ITR (2–3 years)", "GST Returns"],
        },
        {
          title: "Property Proof",
          items: ["Title Deeds", "Sale Agreement", "Allotment Letter", "Valuation Report"],
        },
        {
          title: "Other",
          items: ["6–12 Months Bank Statement"],
        },
      ],
    },

    tipsSection: {
      title: "Tips to Improve Loan Approval & Rates",
      subtitle: "Increase your home loan eligibility with smart planning.",
      tips: [
        "Maintain a credit score of 750+",
        "Limit EMI obligations below 40% of income",
        "Add a co-applicant with stable income",
        "Make at least 20% down payment to lower EMI",
        "Compare interest rates across 3–4 lenders",
        "Opt for auto-debit EMI mode to avoid defaults",
      ],
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

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much home loan can I get on ₹1,10,000 salary?",
          answer:
            "You can generally get ₹65–₹80 lakh depending on tenure, credit score, and bank’s lending norms.",
        },
        {
          question: "Which bank gives the best interest rate for this salary?",
          answer:
            "Banks like SBI and Bank of Baroda offer competitive rates starting at 8.35% p.a.",
        },
        {
          question: "Can I increase my loan amount?",
          answer:
            "Yes, by adding a co-applicant or extending tenure, you can improve eligibility.",
        },
        {
          question: "Are there government schemes available?",
          answer:
            "Yes, if you’re a first-time homebuyer, you may be eligible under PMAY or state-specific subsidy schemes.",
        },
        {
          question: "What tenure should I choose?",
          answer:
            "A 20–25 year tenure balances EMI affordability and total interest cost well.",
        },
        {
          question: "Do I get tax benefits on my home loan?",
          answer:
            "Yes, under Sections 24(b) (interest) and 80C (principal repayment) of the Income Tax Act.",
        },
      ],
    },

    ctaSection: {
      title: "Ready to Apply for Your Dream Home?",
      subtitle: "Check eligibility and get personalized offers in minutes — no hard credit check.",
      buttonText: "Apply Now",
      link: "/apply-loan",
    },
  },
  {
    id: 4,
    slug: "150000-salary",
    title: "Home Loan on ₹1,50,000 Salary – Eligibility, EMI & Bank Comparison",
    description:
      "Earning ₹1.5 lakh per month? Discover your home loan eligibility, estimate EMI, and compare the best bank offers in India for 2025 — all in one place.",
    interestRate: "8.25% - 9.00% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

    heroSection: {
      title: "Home Loan on ₹1,50,000 Salary – Complete Guide 2025",
      description:
        "With a salary of ₹1.5 lakh per month, you can qualify for a home loan up to ₹1.2 crore depending on your credit score, tenure, and existing EMIs. Quick Home Loan helps you estimate eligibility, calculate EMI, and find top bank offers instantly.",
      salary: 150000,
      halfSalary: 75000,
      salaryInK: "150K",
      eligibleRange: "₹90 Lakh - ₹1.20 Crore",
      emiRange: "₹70,000 - ₹85,000",
      tenure: "Up to 30 Years",
      cta: "Find the best home loan offers now!",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 150000",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-150000-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      emiExample: {
        title: "At 8.5% for 20 Years",
        background: "bg-yellow-50",
        textColor: "text-yellow-800",
        cardItems: [
          { loanAmount: "₹90L Loan", emi: "₹77,518 EMI" },
          { loanAmount: "₹1.1Cr Loan", emi: "₹94,771 EMI" },
        ],
      },
    },

    summaryStats: {
      title: "Home Loan Summary for ₹1,50,000 Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹85L–₹1.2Cr",
        },
        {
          label: "Typical Interest Rate",
          value: "8.25%–9.00% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Final approval depends on lender policy, credit score, and repayment capacity.",
    },

    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹1,50,000 Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years",
        },
        {
          label: "Employment",
          value: "Salaried or self-employed with consistent income history",
        },
        {
          label: "Credit Score",
          value: "750+ preferred for best loan rates",
        },
        {
          label: "DTI",
          value: "Ideally ≤ 40–50%",
        },
        {
          label: "Co-applicant",
          value: "Strongly boosts eligibility — ideal for higher-value properties",
        },
        {
          label: "Residency",
          value: "Indian citizen/NRI (subject to lender norms)",
        },
      ],
      note: "Eligibility is subject to income stability, credit profile, and property valuation.",
    },

    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Offers",
      defaultValues: {
        loanAmount: 10000000,
        interestRate: 8.4,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.25% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹1.20 Crore",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.4% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹1.15 Crore",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.55% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹1.10 Crore",
          tenure: "25 Years",
        },
        {
          short: "AXIS",
          name: "Axis Bank",
          interestRate: "8.65% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹1.00 Crore",
          tenure: "25 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.3% p.a.",
          processingFee: "Zero Fee Offer",
          maxLoan: "₹1.15 Crore",
          tenure: "30 Years",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required",
      note: "Submit original documents for verification along with self-attested copies.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN Card", "Aadhaar Card", "Passport", "Driving License"],
        },
        {
          title: "Address Proof",
          items: ["Electricity Bill", "Voter ID", "Registered Rent Agreement", "Property Tax Receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Salary slips (3–6 months)", "Form 16", "ITR (2 years)"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["Balance Sheet", "P&L Statement", "ITR (3 years)", "GST Returns"],
        },
        {
          title: "Property Proof",
          items: ["Title Deed", "Sale Agreement", "Allotment Letter", "Encumbrance Certificate"],
        },
        {
          title: "Other",
          items: ["Bank Statement (6–12 months)"],
        },
      ],
    },

    tipsSection: {
      title: "Tips to Maximize Loan Eligibility",
      subtitle: "Enhance your profile and secure the best possible rate.",
      tips: [
        "Maintain a CIBIL score above 750 for premium rates",
        "Reduce or close personal loans and credit card debt",
        "Add spouse or family member as co-applicant",
        "Opt for longer tenure to reduce EMI burden",
        "Provide accurate income documentation for faster approval",
        "Compare multiple banks for customized offers",
      ],
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

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much home loan can I get on ₹1,50,000 salary?",
          answer:
            "Most banks offer between ₹90 lakh and ₹1.2 crore, based on your credit profile and tenure.",
        },
        {
          question: "Which bank gives the best rate for ₹1.5 lakh salary?",
          answer:
            "SBI and Bank of Baroda currently offer some of the most competitive rates, starting at 8.25% p.a.",
        },
        {
          question: "Can I take a joint home loan to increase eligibility?",
          answer:
            "Yes, adding a co-applicant can significantly raise your loan limit and improve approval odds.",
        },
        {
          question: "What’s the ideal tenure for a large home loan?",
          answer:
            "A 20–25 year tenure provides a good balance between EMI comfort and total interest payout.",
        },
        {
          question: "Are there special schemes for professionals or NRIs?",
          answer:
            "Yes, many lenders offer special home loan plans for doctors, CAs, and NRIs with attractive rates.",
        },
        {
          question: "Do I get tax benefits?",
          answer:
            "Yes, under Section 80C (principal) and Section 24(b) (interest), subject to limits and property type.",
        },
      ],
    },

    ctaSection: {
      title: "Get Your Personalized Loan Quote Now",
      subtitle:
        "Check your eligibility and compare offers instantly — no hard credit check until you choose a lender.",
      buttonText: "Check Eligibility",
      link: "/apply-loan",
    },
  },
  {
    id: 5,
    slug: "200000-salary",
    title: "Home Loan on ₹2,00,000 Salary – Eligibility, EMI & Bank Comparison",
    description:
      "Earning ₹2 lakh per month? Discover how much home loan you can get, your EMI, and compare top Indian banks to find the best interest rates and offers in 2025.",
    interestRate: "8.20% - 8.90% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

    heroSection: {
      title: "Home Loan on ₹2,00,000 Salary – Complete Guide 2025",
      description:
        "With a monthly income of ₹2 lakh, you can qualify for a home loan up to ₹1.6 crore depending on your credit score, existing liabilities, and property value. Quick Home Loan simplifies your search with instant eligibility checks, EMI estimation, and bank comparisons.",
      salary: 200000,
      halfSalary: 100000,
      salaryInK: "200K",
      eligibleRange: "₹1.30 Crore - ₹1.60 Crore",
      emiRange: "₹1,05,000 - ₹1,20,000",
      tenure: "Up to 30 Years",
      cta: "Check your home loan eligibility instantly!",
       buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 200000",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-200000-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      emiExample: {
        title: "At 8.4% for 20 Years",
        background: "bg-purple-50",
        textColor: "text-purple-800",
        cardItems: [
          { loanAmount: "₹1.3Cr Loan", emi: "₹1,12,573 EMI" },
          { loanAmount: "₹1.5Cr Loan", emi: "₹1,29,754 EMI" },
        ],
      },
    },

    summaryStats: {
      title: "Home Loan Summary for ₹2,00,000 Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹1.3Cr–₹1.6Cr",
        },
        {
          label: "Typical Interest Rate",
          value: "8.2%–8.9% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Figures are indicative and vary by lender, credit score, and applicant profile.",
    },

    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹2,00,000 Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years (up to 65 for self-employed)",
        },
        {
          label: "Employment",
          value: "Salaried, self-employed, or NRI with stable monthly income",
        },
        {
          label: "Credit Score",
          value: "750+ ideal for premium rates",
        },
        {
          label: "DTI (Debt-to-Income)",
          value: "Should be ≤ 40–45% for higher approval chances",
        },
        {
          label: "Co-applicant",
          value: "Recommended for luxury properties; boosts eligibility",
        },
        {
          label: "Residency",
          value: "Indian resident or NRI as per bank norms",
        },
      ],
      note: "Eligibility may vary based on property type, location, and repayment history.",
    },

    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Bank Offers",
      defaultValues: {
        loanAmount: 15000000,
        interestRate: 8.4,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.25% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹1.60 Crore",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.35% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹1.55 Crore",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.5% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹1.50 Crore",
          tenure: "25 Years",
        },
        {
          short: "AXIS",
          name: "Axis Bank",
          interestRate: "8.65% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹1.40 Crore",
          tenure: "25 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.3% p.a.",
          processingFee: "Zero Processing Fee Offer",
          maxLoan: "₹1.60 Crore",
          tenure: "30 Years",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required for Home Loan",
      note: "Ensure all documents are updated and valid; originals needed for verification.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN", "Aadhaar", "Passport", "Driving License"],
        },
        {
          title: "Address Proof",
          items: ["Electricity Bill", "Voter ID", "Registered Rent Agreement", "Property Tax Receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Salary slips (last 6 months)", "Form 16", "ITR (2 years)"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["P&L Statement", "Balance Sheet", "ITR (3 years)", "GST Returns"],
        },
        {
          title: "Property Proof",
          items: ["Title Deed", "Sale Agreement", "Allotment Letter", "Valuation Report"],
        },
        {
          title: "Other",
          items: ["Bank Statement (6–12 months)"],
        },
      ],
    },

    tipsSection: {
      title: "Tips to Boost Home Loan Approval & Get Better Rates",
      subtitle: "Smart strategies to make the most of your high-income profile.",
      tips: [
        "Maintain a credit score above 750 for premium offers",
        "Avoid multiple loan inquiries before applying",
        "Add co-applicant for larger home value loans",
        "Choose longer tenure (20–30 years) for EMI flexibility",
        "Keep EMIs under 40% of income for better eligibility",
        "Compare at least 3–5 lenders for customized rates",
      ],
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

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much home loan can I get on ₹2,00,000 salary?",
          answer:
            "Typically ₹1.3–₹1.6 crore, depending on tenure, liabilities, and your credit profile.",
        },
        {
          question: "Which bank is best for high-value home loans?",
          answer:
            "SBI and HDFC offer excellent large-ticket home loan programs with competitive interest rates and flexible repayment.",
        },
        {
          question: "Can I apply jointly for a home loan?",
          answer:
            "Yes, joint home loans with spouse or family can increase your loan limit and improve eligibility.",
        },
        {
          question: "Do I get tax benefits on such high-value loans?",
          answer:
            "Yes, under Section 24(b) for interest (up to ₹2 lakh/year) and Section 80C for principal (up to ₹1.5 lakh/year).",
        },
        {
          question: "Are NRIs eligible for loans on ₹2L equivalent income?",
          answer:
            "Yes, NRIs with verifiable overseas income can avail similar or higher loan limits depending on lender norms.",
        },
        {
          question: "What is the maximum tenure available?",
          answer:
            "Up to 30 years for salaried and 25 years for self-employed applicants.",
        },
      ],
    },

    ctaSection: {
      title: "Check Your Eligibility for ₹2 Lakh Salary Home Loan",
      subtitle:
        "Takes under 2 minutes — compare offers, calculate EMI, and choose your preferred lender with no credit impact.",
      buttonText: "Check Eligibility Now",
      link: "/apply-loan",
    },
  },
  {
    id: 6,
    slug: "210000-plus-salary",
    title: "Home Loan on ₹2,10,000+ Salary – Eligibility, EMI & Bank Comparison",
    description:
      "Earning ₹2.1 lakh or more per month? Explore your home loan eligibility, EMI estimates, and premium offers from top Indian banks for high-income borrowers in 2025.",
    interestRate: "8.10% - 8.80% p.a.",
    processingFee: "Varies by lender",
    loanTenure: "Up to 30 years",

    heroSection: {
      title: "Home Loan on ₹2,10,000+ Salary – Complete Guide 2025",
      description:
        "With a monthly salary above ₹2.1 lakh, you’re eligible for high-value home loans exceeding ₹1.8 crore. Quick Home Loan helps you calculate your EMI, assess your eligibility, and compare special high-income loan offers from India’s top lenders.",
      salary: 210000,
      halfSalary: 105000,
      salaryInK: "210K+",
      eligibleRange: "₹1.50 Crore - ₹1.85 Crore",
      emiRange: "₹1,15,000 - ₹1,35,000",
      tenure: "Up to 30 Years",
      cta: "Unlock premium home loan offers now!",
       buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Salary&subcategory=Salary 210000%2B",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/salary-210000+-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      emiExample: {
        title: "At 8.3% for 20 Years",
        background: "bg-amber-50",
        textColor: "text-amber-800",
        cardItems: [
          { loanAmount: "₹1.5Cr Loan", emi: "₹1,28,922 EMI" },
          { loanAmount: "₹1.8Cr Loan", emi: "₹1,55,016 EMI" },
        ],
      },
    },

    summaryStats: {
      title: "Home Loan Summary for ₹2,10,000+ Salary",
      stats: [
        {
          label: "Indicative Loan Amount",
          value: "₹1.5Cr–₹1.85Cr",
        },
        {
          label: "Typical Interest Rate",
          value: "8.1%–8.8% p.a.",
        },
        {
          label: "Max Tenure",
          value: "30 years",
        },
      ],
      note: "Actual approval amount depends on income proof, existing liabilities, and property valuation.",
    },

    eligibilityCriteriaSection: {
      title: "Eligibility Criteria on ₹2,10,000+ Salary",
      criteria: [
        {
          label: "Age",
          value: "21–60 years (up to 65 for self-employed)",
        },
        {
          label: "Employment Type",
          value: "Salaried, Self-employed, or NRI professionals with stable income records",
        },
        {
          label: "Credit Score",
          value: "750+ for top-tier rates and maximum eligibility",
        },
        {
          label: "DTI (Debt-to-Income Ratio)",
          value: "Preferably ≤ 40% for smoother approval",
        },
        {
          label: "Co-applicant",
          value: "Optional, but can enhance sanction limits",
        },
        {
          label: "Residency",
          value: "Indian or NRI as per lender guidelines",
        },
      ],
      note: "Eligibility varies across banks; premium salaried applicants may receive customized offers.",
    },

    emiAndOffersSection: {
      title: "Estimate Your EMI & Compare Offers",
      defaultValues: {
        loanAmount: 16000000,
        interestRate: 8.3,
        tenure: 20,
      },
      banks: [
        {
          short: "SBI",
          name: "State Bank of India",
          interestRate: "8.10% p.a.",
          processingFee: "0.35% + GST",
          maxLoan: "₹1.85 Crore",
          tenure: "30 Years",
        },
        {
          short: "HDFC",
          name: "HDFC Bank",
          interestRate: "8.25% p.a.",
          processingFee: "0.50% + GST",
          maxLoan: "₹1.80 Crore",
          tenure: "30 Years",
        },
        {
          short: "ICICI",
          name: "ICICI Bank",
          interestRate: "8.40% p.a.",
          processingFee: "0.50% - 1.0%",
          maxLoan: "₹1.75 Crore",
          tenure: "25 Years",
        },
        {
          short: "AXIS",
          name: "Axis Bank",
          interestRate: "8.55% p.a.",
          processingFee: "Up to 1.0%",
          maxLoan: "₹1.70 Crore",
          tenure: "25 Years",
        },
        {
          short: "BOB",
          name: "Bank of Baroda",
          interestRate: "8.20% p.a.",
          processingFee: "Zero Processing Fee Offer",
          maxLoan: "₹1.85 Crore",
          tenure: "30 Years",
        },
      ],
    },

    documentsSection: {
      title: "Documents Required for Home Loan Application",
      note: "Ensure that all documents are up-to-date and originals are available for verification.",
      categories: [
        {
          title: "Identity Proof",
          items: ["PAN", "Aadhaar", "Passport", "Driving License"],
        },
        {
          title: "Address Proof",
          items: ["Utility Bill", "Voter ID", "Registered Rent Agreement", "Property Tax Receipt"],
        },
        {
          title: "Income Proof (Salaried)",
          items: ["Last 6 months’ salary slips", "Form 16", "ITR (2 years)"],
        },
        {
          title: "Income Proof (Self-employed)",
          items: ["Audited Balance Sheet", "P&L Statement", "ITR (3 years)", "GST Returns"],
        },
        {
          title: "Property Proof",
          items: ["Title Deed", "Sale Agreement", "Allotment Letter", "Valuation Report"],
        },
        {
          title: "Other Documents",
          items: ["6–12 Months Bank Statement", "Passport-size Photographs"],
        },
      ],
    },

    tipsSection: {
      title: "Tips to Get the Best Home Loan on ₹2.1L+ Salary",
      subtitle: "High-income borrowers can save lakhs with smart loan planning.",
      tips: [
        "Maintain a credit score above 760 for the best interest rates",
        "Avoid short-term personal loans before applying",
        "Choose floating interest for long tenures",
        "Negotiate processing fees — premium borrowers often get discounts",
        "Provide accurate income documentation and employer details",
        "Consider prepayment options to reduce total interest outgo",
      ],
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

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "How much home loan can I get on ₹2,10,000+ salary?",
          answer:
            "You can generally get between ₹1.5 crore and ₹1.85 crore, depending on your repayment capacity, credit score, and lender policy.",
        },
        {
          question: "Which banks offer premium home loan programs?",
          answer:
            "SBI Privilege, HDFC Optima, and ICICI Elite Home Loan programs are popular for high-income earners.",
        },
        {
          question: "Can I get a top-up or balance transfer offer?",
          answer:
            "Yes, most lenders provide top-up loans or lower interest rates for balance transfers on existing home loans.",
        },
        {
          question: "Is it better to opt for a fixed or floating rate?",
          answer:
            "For long tenures, floating rates are advisable as they start lower and adjust with market trends.",
        },
        {
          question: "Are NRIs eligible for this income bracket loan?",
          answer:
            "Yes, NRIs can avail up to ₹2 crore home loans with specific documentation and property restrictions.",
        },
        {
          question: "Do tax benefits apply to large home loans?",
          answer:
            "Yes, under Sections 24(b) and 80C — though deductions are capped, the benefits still apply proportionally.",
        },
      ],
    },

    ctaSection: {
      title: "Apply for a Premium Home Loan Today",
      subtitle:
        "Compare exclusive high-income borrower offers and check your eligibility — fast, free, and secure.",
      buttonText: "Get Premium Offers",
      link: "/apply-loan",
    },
  }
];
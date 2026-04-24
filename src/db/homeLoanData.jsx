export const homeLoanData = [
  {
    id: 1,
    slug: "sbi",
    title: "SBI Home Loan",
    description:
      "SBI offers home loans with affordable EMIs, attractive interest rates, and flexible tenure options. Designed for salaried and self-employed applicants looking to buy, build, or renovate their home.",
    interestRate: "8.40% p.a. onwards",
    processingFee: "0.35% of loan amount + GST",
    loanTenure: "Up to 30 years",
    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png",
        alt: "State Bank of India Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1955" },
        { icon: "shield-check", text: "India's #1 PSU Lender" },
        { icon: "star", text: "<strong>4.7</strong>/5 by 12,540 customers" },
      ],
      title: "State Bank of India Trusted Home Loans for Your Dream Home",
      description:
        "Flexible EMI options tailored to your needs. With you, right through.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=SBI Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/sbi-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],

      loanTypes: [
        "Regular Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "NRI Home Loan",
      ],
    },

    highlightsSection: {
      items: [
        {
          icon: "percent",
          label: "Interest Rate",
          value: "8.50% p.a.",
        },
        {
          icon: "calendar-clock",
          label: "Max Tenure",
          value: "30 Years",
        },
        {
          icon: "indian-rupee",
          label: "Max Loan Amount",
          value: "₹5.00 Crore",
        },
        {
          icon: "file-text",
          label: "Processing Fee",
          value: "0.35% of loan amount",
        },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 5000000,
      defaultTenure: 15,
      defaultInterestRate: 5.50,
      loanRange: { min: 100000, max: 100000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 8.50, step: 0.05 },
    },
    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 30,
      defaultIncome: 75000,
      defaultExistingEmi: 10000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
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
          question: "What is the current home loan interest rate for SBI?",
          answer:
            "The current home loan interest rates start from 8.35% p.a. The final rate depends on your loan amount, CIBIL score, and other eligibility factors.",
        },
        {
          question: "What is the maximum loan tenure offered by SBI?",
          answer:
            "SBI offers a flexible loan tenure of up to 30 years, allowing you to choose an EMI that fits your budget.",
        },
        {
          question: "Are there any prepayment charges?",
          answer:
            "For floating rate home loans extended to individual borrowers, there are no prepayment penalties. You can prepay a part or the full amount of your loan without any extra charges.",
        },
        {
          question: "What is the minimum CIBIL score required?",
          answer:
            "A CIBIL score of 750 or above is generally preferred for securing the best interest rates and a smooth approval process.",
        },
      ],
    },
    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "For salaried & self-employed buyers",
          rateRange: "8.35–9.45%",
          idealFor: "First-time buyers",
        },
        {
          name: "Balance Transfer",
          description: "Switch your existing home loan to SBI for lower rates",
          rateRange: "From 8.35%",
          idealFor: "High EMI payers",
        },
        {
          name: "Top-Up Loan",
          description: "Get extra funds on your existing home loan",
          rateRange: "From 8.60%",
          idealFor: "Renovation, education",
        },
        {
          name: "NRI Home Loan",
          description: "For Indian citizens residing abroad",
          rateRange: "From 8.75%",
          idealFor: "NRI professionals",
        },
      ],
    },
    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "Rates have remained steady, tracking the RBI's repo rate. This chart shows the historical trend of the starting interest rate.",
      trendData: [
        { month: "Aug 23", rate: 8.35 },
        { month: "Sep 23", rate: 8.35 },
        { month: "Oct 23", rate: 8.40 },
        { month: "Nov 23", rate: 8.43 },
        { month: "Dec 23", rate: 8.43 },
        { month: "Jan 24", rate: 8.43 },
        { month: "Feb 24", rate: 8.50 },
        { month: "Mar 24", rate: 8.50 },
        { month: "Apr 24", rate: 8.50 },
        { month: "May 24", rate: 8.43 },
        { month: "Jun 24", rate: 8.50 },
        { month: "Jul 24", rate: 8.50 },
      ],
    },
    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Submit Application",
          description:
            "Fill our simple online form with your basic details in just 3 minutes.",
        },
        {
          icon: "UserCheck",
          title: "Get Pre-Approved",
          description:
            "Our system provides a quick eligibility check and pre-approval based on your profile.",
        },
        {
          icon: "Banknote",
          title: "Loan Disbursal",
          description:
            "Complete documentation and get the loan amount disbursed directly to your account.",
        },
      ],
    },
    requiredDocuments: {
      title: "Required Documents",
      note: "*This is an indicative list. Additional documents may be required based on your profile.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Latest 3 Months' Salary Slips",
            "Form 16 / ITR",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Registration Proof",
            "ITR for last 2 years",
            "6 Months' Business Bank Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Valid Passport and Visa Copy",
            "Overseas Employment Proof",
            "NRE/NRO Bank Account Statement (6 months)",
            "Indian Address Proof",
            "Salary Slips or Contract Letter",
          ],
        },
      ],
    },
    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "0.35% of loan amount",
          subtext: "Min ₹2,000, Max ₹10,000 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Up to 2% on fixed rate",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate loans to individuals",
          subtext: null,
          industryAverage: "Often same as prepayment",
        },
        {
          type: "Late Payment Fee",
          charge: "2% per month on the overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "At actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },
    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Empower your home buying journey with our expert guides and articles.",
      articles: [
        {
          title: "How SBI Home Loans Compare to HDFC in 2024",
          link: "#",
        },
        {
          title: "Top 5 Tips to Increase Your Home Loan Eligibility",
          link: "#",
        },
        {
          title: "Understanding Repo-Linked Lending Rate (RLLR)",
          link: "#",
        },
        {
          title: "A Guide to Home Loan Balance Transfers",
          link: "#",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "hdfc-ltd",
    title: "HDFC Ltd Home Loan",
    description:
      "HDFC Ltd offers customized home loan solutions with competitive interest rates, flexible repayment options, and quick processing. Perfect for salaried and self-employed individuals aiming to buy, build, or renovate their dream home.",
    interestRate: "8.50% p.a. onwards",
    processingFee: "Up to 0.50% of loan amount + GST",
    loanTenure: "Up to 30 years",

    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/64/HDFC_Bank_Logo.svg",
        alt: "HDFC Ltd Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1977" },
        { icon: "shield-check", text: "Trusted by 3M+ Families" },
        { icon: "star", text: "<strong>4.8</strong>/5 by 18,200 customers" },
      ],
      title: "HDFC Ltd – Turning Your Home Dreams into Reality",
      description:
        "Attractive interest rates and minimal documentation. Your trusted home loan partner for over four decades.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=HDFC Ltd Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/hdfc-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      loanTypes: [
        "Regular Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "Plot Purchase Loan",
        "Home Improvement Loan",
      ],
    },

    highlightsSection: {
      items: [
        { icon: "percent", label: "Interest Rate", value: "8.50% p.a." },
        { icon: "calendar-clock", label: "Max Tenure", value: "30 Years" },
        { icon: "indian-rupee", label: "Max Loan Amount", value: "₹10.00 Crore" },
        { icon: "file-text", label: "Processing Fee", value: "Up to 0.50% + GST" },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 50000000,
      defaultTenure: 30,
      defaultInterestRate: 5.5,
      loanRange: { min: 100000, max: 100000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 8.75, step: 0.05 },
    },

    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 30,
      defaultIncome: 80000,
      defaultExistingEmi: 15000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "HDFC House, Ramon House, H T Parekh Marg, Churchgate, Mumbai 400020",
      },
      phone: { title: "Phone", number: "98765 43210" },
      hours: { title: "Business Hours", details: "Mon-Fri: 10am - 6pm" },
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
          title: "Easy and transparent process!",
          feedback:
            "I applied online and got approval within 24 hours. The documentation was minimal, and customer service was top-notch.",
          author: "Neha M.",
          location: "Mumbai",
        },
        {
          rating: 5,
          title: "Best decision to choose HDFC",
          feedback:
            "Switched from another bank via balance transfer and saved big on EMIs. The team made the transition seamless.",
          author: "Rajesh K.",
          location: "Bangalore",
        },
      ],
    },

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the current home loan interest rate for HDFC Ltd?",
          answer:
            "The current home loan interest rate starts from 8.50% p.a. The rate depends on your credit score, income, and loan type.",
        },
        {
          question: "What is the maximum tenure available?",
          answer: "You can opt for a loan tenure of up to 30 years, subject to your profile and age.",
        },
        {
          question: "Are there any prepayment penalties?",
          answer:
            "There are no prepayment charges on floating rate home loans sanctioned to individuals.",
        },
        {
          question: "What CIBIL score is required for an HDFC home loan?",
          answer:
            "A minimum CIBIL score of 750 is preferred to avail attractive rates and smooth approval.",
        },
      ],
    },

    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "For purchase or construction of a new house",
          rateRange: "8.50–9.60%",
          idealFor: "Salaried & self-employed",
        },
        {
          name: "Balance Transfer Loan",
          description: "Transfer your existing loan and save on EMIs",
          rateRange: "From 8.50%",
          idealFor: "Borrowers with high EMI burden",
        },
        {
          name: "Top-Up Loan",
          description: "Get extra funds over your existing loan",
          rateRange: "From 8.75%",
          idealFor: "Home renovation or personal needs",
        },
        {
          name: "Plot Purchase Loan",
          description: "Buy residential plots for self-construction",
          rateRange: "From 8.90%",
          idealFor: "Plot buyers",
        },
        {
          name: "NRI Home Loan",
          description: "Tailored loans for Indians working abroad",
          rateRange: "From 8.85%",
          idealFor: "NRI professionals",
        },
      ],
    },

    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "HDFC’s rates have remained stable, closely following repo rate adjustments. The chart reflects average lending rates.",
      trendData: [
        { month: "Aug 23", rate: 8.45 },
        { month: "Sep 23", rate: 8.50 },
        { month: "Oct 23", rate: 8.50 },
        { month: "Nov 23", rate: 8.55 },
        { month: "Dec 23", rate: 8.55 },
        { month: "Jan 24", rate: 8.60 },
        { month: "Feb 24", rate: 8.60 },
        { month: "Mar 24", rate: 8.65 },
        { month: "Apr 24", rate: 8.60 },
        { month: "May 24", rate: 8.60 },
        { month: "Jun 24", rate: 8.55 },
        { month: "Jul 24", rate: 8.55 },
      ],
    },

    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Fill the Application Form",
          description:
            "Enter your details online and upload necessary documents in a few easy steps.",
        },
        {
          icon: "UserCheck",
          title: "Verification & Approval",
          description:
            "Get your eligibility and documents verified for instant approval.",
        },
        {
          icon: "Banknote",
          title: "Disbursal",
          description:
            "Once approved, the loan amount is quickly disbursed to your account or builder.",
        },
      ],
    },

    requiredDocuments: {
      title: "Required Documents",
      note: "*This list is indicative and may vary as per applicant type and loan scheme.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "3 Months' Salary Slips",
            "Form 16 / ITR",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Proof / GST Registration",
            "ITR for last 2 years",
            "6 Months' Current Account Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Passport & Visa Copy",
            "Employment Contract or Salary Slip",
            "Overseas Bank Statement (6 months)",
            "Indian Address Proof",
            "Power of Attorney (if applicable)",
          ],
        },
      ],
    },

    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "Up to 0.50% of loan amount",
          subtext: "Min ₹3,000 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Up to 2% on fixed rate",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate loans to individuals",
          subtext: null,
          industryAverage: "Often same as prepayment",
        },
        {
          type: "Late Payment Fee",
          charge: "Up to 2% per month on overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "As per actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },

    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Learn everything you need to make informed home loan decisions with HDFC’s expert resources.",
      articles: [
        {
          title: "HDFC Home Loan vs SBI – Which One Should You Choose?",
          link: "#",
        },
        {
          title: "Top 7 Factors That Affect Home Loan Eligibility",
          link: "#",
        },
        {
          title: "What Is the Repo Rate and How Does It Affect You?",
          link: "#",
        },
        {
          title: "Guide to Top-Up and Balance Transfer Loans",
          link: "#",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "lic",
    title: "LIC Housing Finance Home Loan",
    description:
      "LIC Housing Finance (LIC HFL) offers affordable home loans with flexible EMIs, low interest rates, and quick approvals. Backed by the trust of Life Insurance Corporation of India, it's designed to help you own your dream home with ease.",
    interestRate: "8.45% p.a. onwards",
    processingFee: "0.25% - 0.50% of loan amount + GST",
    loanTenure: "Up to 30 years",

    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/en/5/5e/LIC_Housing_Finance_Limited_Logo.png",
        alt: "LIC Housing Finance Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1989" },
        { icon: "shield-check", text: "Trusted by 30+ Lakh Customers" },
        { icon: "star", text: "<strong>4.6</strong>/5 by 9,870 customers" },
      ],
      title: "LIC Housing Finance – Trusted Home Loans for Every Indian Dream",
      description:
        "Competitive interest rates, minimal paperwork, and flexible repayment options backed by LIC’s legacy of trust.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=LIC Housing Finance Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/lic-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      loanTypes: [
        "Regular Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "Plot Loan",
        "NRI Home Loan",
      ],
    },

    highlightsSection: {
      items: [
        { icon: "percent", label: "Interest Rate", value: "8.50% p.a." },
        { icon: "calendar-clock", label: "Max Tenure", value: "30 Years" },
        { icon: "indian-rupee", label: "Max Loan Amount", value: "₹15.00 Crore" },
        { icon: "file-text", label: "Processing Fee", value: "0.25% - 0.50% + GST" },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 4000000,
      defaultTenure: 20,
      defaultInterestRate: 5.50,
      loanRange: { min: 100000, max: 150000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 8.50, step: 0.05 },
    },

    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 28,
      defaultIncome: 60000,
      defaultExistingEmi: 5000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "LIC Housing Finance Ltd, Maker Tower ‘F’, Cuffe Parade, Mumbai 400005",
      },
      phone: { title: "Phone", number: "98765 43210" },
      hours: { title: "Business Hours", details: "Mon-Fri: 10am - 5pm" },
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
          title: "Smooth process with great service!",
          feedback:
            "The application process was simple and transparent. I got my sanction letter within 48 hours and the staff was very helpful.",
          author: "Manisha T.",
          location: "Nagpur",
        },
        {
          rating: 4,
          title: "LIC HFL made my home dream come true",
          feedback:
            "Affordable interest rate and easy EMI options. Their staff explained everything clearly and guided me throughout.",
          author: "Vivek R.",
          location: "Kolkata",
        },
      ],
    },

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the current home loan interest rate for LIC HFL?",
          answer:
            "The current home loan interest rates start from 8.45% p.a. The final rate may vary based on your CIBIL score and profile.",
        },
        {
          question: "What is the maximum tenure available for LIC home loans?",
          answer: "LIC Housing Finance offers home loans for up to 30 years, depending on the borrower’s age and income.",
        },
        {
          question: "Can I prepay my LIC home loan?",
          answer:
            "Yes, LIC HFL allows prepayment or foreclosure without charges for floating rate loans taken by individuals.",
        },
        {
          question: "What is the minimum income requirement?",
          answer:
            "A minimum monthly income of ₹25,000 is generally required for salaried applicants to qualify for a home loan.",
        },
      ],
    },

    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "For purchase or construction of a new house or flat",
          rateRange: "8.45–9.55%",
          idealFor: "Salaried & self-employed applicants",
        },
        {
          name: "Balance Transfer Loan",
          description: "Transfer your existing home loan and save on interest",
          rateRange: "From 8.45%",
          idealFor: "High EMI borrowers",
        },
        {
          name: "Top-Up Loan",
          description: "Additional funding over existing home loan",
          rateRange: "From 8.65%",
          idealFor: "Renovation or extension",
        },
        {
          name: "Plot Loan",
          description: "Finance for purchase of residential plots",
          rateRange: "From 8.80%",
          idealFor: "Buyers planning to build later",
        },
        {
          name: "NRI Home Loan",
          description: "Home loan solutions for Indians living abroad",
          rateRange: "From 8.90%",
          idealFor: "NRI professionals",
        },
      ],
    },

    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "LIC HFL home loan rates have shown gradual adjustments aligned with repo rate movements. Below is the 1-year trend.",
      trendData: [
        { month: "Aug 23", rate: 8.40 },
        { month: "Sep 23", rate: 8.40 },
        { month: "Oct 23", rate: 8.45 },
        { month: "Nov 23", rate: 8.45 },
        { month: "Dec 23", rate: 8.50 },
        { month: "Jan 24", rate: 8.50 },
        { month: "Feb 24", rate: 8.55 },
        { month: "Mar 24", rate: 8.55 },
        { month: "Apr 24", rate: 8.50 },
        { month: "May 24", rate: 8.50 },
        { month: "Jun 24", rate: 8.45 },
        { month: "Jul 24", rate: 8.45 },
      ],
    },

    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Online Application",
          description:
            "Submit your application online with basic details and upload essential documents.",
        },
        {
          icon: "UserCheck",
          title: "Verification & Approval",
          description:
            "LIC HFL reviews your application, verifies your documents, and provides a sanction letter.",
        },
        {
          icon: "Banknote",
          title: "Loan Disbursal",
          description:
            "After property verification, the approved amount is disbursed directly to your account or builder.",
        },
      ],
    },

    requiredDocuments: {
      title: "Required Documents",
      note: "*The following list is indicative and may vary based on applicant profile.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "3 Months' Salary Slips",
            "Form 16 or IT Returns",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Registration Proof",
            "ITR for last 2 years",
            "6 Months' Current Account Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Valid Passport & Visa",
            "Employment Contract / Salary Certificate",
            "Overseas Bank Statement (6 months)",
            "Indian Address Proof",
            "Power of Attorney (if applicable)",
          ],
        },
      ],
    },

    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "0.25% - 0.50% of loan amount",
          subtext: "Min ₹3,000 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans to individuals",
          subtext: null,
          industryAverage: "Up to 2% on fixed rate loans",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Similar to prepayment charges",
        },
        {
          type: "Late Payment Fee",
          charge: "2% per month on overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "At actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },

    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Gain insights and expert advice to make your home loan journey smooth and informed with LIC Housing Finance.",
      articles: [
        {
          title: "LIC HFL vs HDFC: Which Home Loan Suits You Best?",
          link: "#",
        },
        {
          title: "How to Improve Your CIBIL Score Before Applying for a Loan",
          link: "#",
        },
        {
          title: "Fixed vs Floating Rate: What’s Right for You?",
          link: "#",
        },
        {
          title: "Top Mistakes to Avoid During Home Loan Application",
          link: "#",
        },
      ],
    },
  },
  {
    id: 4,
    slug: "bob",
    title: "Bank of Baroda Home Loan",
    description:
      "Bank of Baroda offers affordable and flexible home loan options with competitive interest rates, easy documentation, and quick approvals. Perfect for salaried, self-employed, and NRI applicants looking to buy, build, or renovate their dream home.",
    interestRate: "8.40% p.a. onwards",
    processingFee: "0.25% of loan amount + GST",
    loanTenure: "Up to 30 years",

    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Bank_of_Baroda_logo.svg",
        alt: "Bank of Baroda Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1908" },
        { icon: "shield-check", text: "India’s International Bank" },
        { icon: "star", text: "<strong>4.7</strong>/5 by 10,240 customers" },
      ],
      title: "Bank of Baroda – Home Loans with Low EMI and Maximum Trust",
      description:
"Attractive interest rates with flexible EMIs. Simplified process and transparent terms.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=Bank of Baroda Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/bob-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      loanTypes: [
        "Regular Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "Home Improvement Loan",
        "NRI Home Loan",
      ],
    },

    highlightsSection: {
      items: [
        { icon: "percent", label: "Interest Rate", value: "7.1% p.a." },
        { icon: "calendar-clock", label: "Max Tenure", value: "30 Years" },
        { icon: "indian-rupee", label: "Max Loan Amount", value: "₹20.00 Crore" },
        { icon: "file-text", label: "Processing Fee", value: "0.25% of loan amount + GST" },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 4000000,
      defaultTenure: 20,
      defaultInterestRate: 5.5,
      loanRange: { min: 100000, max: 200000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 7.1, step: 0.05 },
    },

    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 30,
      defaultIncome: 70000,
      defaultExistingEmi: 10000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Bank of Baroda, Mandvi Branch, Vadodara, Gujarat 390001",
      },
      phone: { title: "Phone", number: "98765 43210" },
      hours: { title: "Business Hours", details: "Mon-Fri: 10am - 5pm" },
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
          title: "Quick approval and great support!",
          feedback:
            "I received my sanction letter within 48 hours. The staff at Bank of Baroda made everything easy and transparent.",
          author: "Rakesh P.",
          location: "Ahmedabad",
        },
        {
          rating: 4,
          title: "Good rates and helpful service",
          feedback:
            "Got my balance transfer done smoothly with lower EMIs. The BoB team was professional and responsive.",
          author: "Divya S.",
          location: "Jaipur",
        },
      ],
    },

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the current home loan interest rate for Bank of Baroda?",
          answer:
            "The current home loan interest rates start from 8.40% p.a. depending on your credit score, loan amount, and profile.",
        },
        {
          question: "What is the maximum tenure available?",
          answer:
            "You can avail a home loan for up to 30 years, subject to the borrower's age and repayment capacity.",
        },
        {
          question: "Can I prepay or foreclose my BoB home loan?",
          answer:
            "Yes, you can prepay your home loan without any additional charges for floating rate loans taken by individuals.",
        },
        {
          question: "What is the minimum CIBIL score required?",
          answer:
            "A CIBIL score of 750 or above is ideal to qualify for lower interest rates and faster approval.",
        },
      ],
    },

    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "For purchase or construction of a house or flat",
          rateRange: "8.40–9.60%",
          idealFor: "Salaried and self-employed applicants",
        },
        {
          name: "Balance Transfer",
          description: "Switch your existing home loan to BoB at lower rates",
          rateRange: "From 8.40%",
          idealFor: "High EMI borrowers",
        },
        {
          name: "Top-Up Loan",
          description: "Get additional funds over your existing home loan",
          rateRange: "From 8.60%",
          idealFor: "Renovation, education, or medical expenses",
        },
        {
          name: "Home Improvement Loan",
          description: "Upgrade or renovate your existing home",
          rateRange: "From 8.55%",
          idealFor: "Existing homeowners",
        },
        {
          name: "NRI Home Loan",
          description: "For Indian citizens residing abroad",
          rateRange: "From 8.70%",
          idealFor: "NRI professionals",
        },
      ],
    },

    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "Bank of Baroda’s interest rates have remained stable, following repo rate changes and market trends. Here's the recent trend overview.",
      trendData: [
        { month: "Aug 23", rate: 8.35 },
        { month: "Sep 23", rate: 8.35 },
        { month: "Oct 23", rate: 8.40 },
        { month: "Nov 23", rate: 8.40 },
        { month: "Dec 23", rate: 8.45 },
        { month: "Jan 24", rate: 8.45 },
        { month: "Feb 24", rate: 8.50 },
        { month: "Mar 24", rate: 8.50 },
        { month: "Apr 24", rate: 8.45 },
        { month: "May 24", rate: 8.45 },
        { month: "Jun 24", rate: 8.40 },
        { month: "Jul 24", rate: 8.40 },
      ],
    },

    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Submit Application",
          description:
            "Complete the online home loan application with your personal and financial details.",
        },
        {
          icon: "UserCheck",
          title: "Get Pre-Approval",
          description:
            "Receive instant pre-approval based on your eligibility and documentation.",
        },
        {
          icon: "Banknote",
          title: "Loan Disbursal",
          description:
            "After verification, your loan amount is disbursed quickly to your account or builder.",
        },
      ],
    },

    requiredDocuments: {
      title: "Required Documents",
      note: "*Documents may vary depending on applicant type and income source.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "3 Months' Salary Slips",
            "Form 16 or ITR",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Proof (GST/Registration)",
            "ITR for last 2 years",
            "6 Months' Current Account Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Passport & Visa Copy",
            "Employment Contract / Salary Slip",
            "Overseas Bank Statement (6 months)",
            "Indian Address Proof",
            "Power of Attorney (if applicable)",
          ],
        },
      ],
    },

    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "0.25% of loan amount",
          subtext: "Min ₹2,500 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Up to 2% on fixed rate loans",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate loans to individuals",
          subtext: null,
          industryAverage: "Similar to prepayment charges",
        },
        {
          type: "Late Payment Fee",
          charge: "2% per month on overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "At actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },

    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Make smarter home loan decisions with Bank of Baroda’s educational articles and expert insights.",
      articles: [
        {
          title: "Why Choose Bank of Baroda Over Private Lenders?",
          link: "#",
        },
        {
          title: "Top 5 Benefits of Balance Transfer Loans",
          link: "#",
        },
        {
          title: "Understanding Home Loan EMIs and Interest Breakups",
          link: "#",
        },
        {
          title: "Tips to Improve Your Home Loan Eligibility",
          link: "#",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "axis",
    title: "Axis Bank Home Loan",
    description:
      "Axis Bank offers customized home loan solutions with competitive rates, quick processing, and flexible repayment options. Ideal for salaried, self-employed, and NRI applicants seeking to buy, construct, or renovate their dream home.",
    interestRate: "8.50% p.a. onwards",
    processingFee: "Up to 1% of loan amount + GST",
    loanTenure: "Up to 30 years",

    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Axis_Bank_logo.svg",
        alt: "Axis Bank Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1993" },
        { icon: "shield-check", text: "Trusted by 2.5M+ Homeowners" },
        { icon: "star", text: "<strong>4.8</strong>/5 by 15,430 customers" },
      ],
      title: "Axis Bank – Home Loans Made Easy with Flexible EMIs",
      description:
        "Get home loans starting at with zero prepayment charges on floating rate loans. Quick approval and transparent process guaranteed.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=Axis Bank Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/axis-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      loanTypes: [
        "Regular Home Loan",
        "Fast Forward Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "NRI Home Loan",
      ],
    },
    highlightsSection: {
      items: [
        { icon: "percent", label: "Interest Rate", value: "7.75% p.a." },
        { icon: "calendar-clock", label: "Max Tenure", value: "30 Years" },
        { icon: "indian-rupee", label: "Max Loan Amount", value: "₹5.00 Crore" },
        { icon: "file-text", label: "Processing Fee", value: "Up to 1% + GST" },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 5000000,
      defaultTenure: 20,
      defaultInterestRate: 4.5,
      loanRange: { min: 100000, max: 50000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 7.75, step: 0.05 },
    },

    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 30,
      defaultIncome: 75000,
      defaultExistingEmi: 10000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "Axis Bank, Corporate Office, Worli, Mumbai 400025",
      },
      phone: { title: "Phone", number: "98765 43210" },
      hours: { title: "Business Hours", details: "Mon-Sat: 9am - 6pm" },
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
          title: "Got my loan approved in 24 hours!",
          feedback:
            "The process was super fast and smooth. The staff guided me throughout and made the documentation effortless.",
          author: "Anjali K.",
          location: "Pune",
        },
        {
          rating: 4,
          title: "Best top-up loan experience",
          feedback:
            "I opted for a top-up on my existing Axis home loan, and it was disbursed within 48 hours. Transparent and professional team.",
          author: "Vikas S.",
          location: "Hyderabad",
        },
      ],
    },

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the current home loan interest rate for Axis Bank?",
          answer:
            "The current home loan interest rates start from 8.50% p.a. and vary based on credit score, profile, and loan type.",
        },
        {
          question: "What is the maximum loan tenure offered?",
          answer:
            "Axis Bank offers a flexible tenure of up to 30 years, depending on your eligibility and repayment capacity.",
        },
        {
          question: "Are there prepayment or foreclosure charges?",
          answer:
            "No, there are no prepayment or foreclosure charges for floating rate loans sanctioned to individuals.",
        },
        {
          question: "What CIBIL score is required to get an Axis Bank home loan?",
          answer:
            "A CIBIL score of 750 or above is recommended to get better interest rates and faster approvals.",
        },
      ],
    },

    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "For purchase or construction of a new home",
          rateRange: "8.50–9.60%",
          idealFor: "Salaried and self-employed individuals",
        },
        {
          name: "Fast Forward Home Loan",
          description: "Loan with EMI waiver after timely payments for 10/15 years",
          rateRange: "8.75–9.65%",
          idealFor: "Long-term borrowers",
        },
        {
          name: "Balance Transfer Loan",
          description: "Transfer your existing loan to Axis for lower EMIs",
          rateRange: "From 8.50%",
          idealFor: "Existing loan holders",
        },
        {
          name: "Top-Up Loan",
          description: "Get extra funds over your ongoing Axis home loan",
          rateRange: "From 8.75%",
          idealFor: "Renovation or education expenses",
        },
        {
          name: "NRI Home Loan",
          description: "Tailored for NRIs looking to buy or build property in India",
          rateRange: "From 8.85%",
          idealFor: "NRI professionals",
        },
      ],
    },

    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "Axis Bank home loan interest rates have remained competitive and stable over the past year, tracking repo rate changes.",
      trendData: [
        { month: "Aug 23", rate: 8.45 },
        { month: "Sep 23", rate: 8.45 },
        { month: "Oct 23", rate: 8.50 },
        { month: "Nov 23", rate: 8.55 },
        { month: "Dec 23", rate: 8.55 },
        { month: "Jan 24", rate: 8.60 },
        { month: "Feb 24", rate: 8.60 },
        { month: "Mar 24", rate: 8.65 },
        { month: "Apr 24", rate: 8.60 },
        { month: "May 24", rate: 8.60 },
        { month: "Jun 24", rate: 8.55 },
        { month: "Jul 24", rate: 8.55 },
      ],
    },

    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Apply Online",
          description:
            "Fill in the online form with personal, financial, and property details for instant eligibility check.",
        },
        {
          icon: "UserCheck",
          title: "Document Verification",
          description:
            "Upload KYC and income documents for quick approval and sanction.",
        },
        {
          icon: "Banknote",
          title: "Loan Disbursal",
          description:
            "On verification, your loan amount is disbursed directly to your account or builder.",
        },
      ],
    },

    requiredDocuments: {
      title: "Required Documents",
      note: "*Documents listed below are indicative and may vary as per your loan type and profile.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "3 Months' Salary Slips",
            "Form 16 / ITR",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Registration / GST Proof",
            "ITR for last 2 years",
            "6 Months' Business Account Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Passport & Visa Copy",
            "Overseas Employment Proof / Salary Slip",
            "NRE/NRO Bank Statement (6 months)",
            "Indian Address Proof",
            "Power of Attorney (if applicable)",
          ],
        },
      ],
    },

    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "Up to 1% of loan amount",
          subtext: "Min ₹10,000 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Up to 2% for fixed rate loans",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Same as prepayment for fixed loans",
        },
        {
          type: "Late Payment Fee",
          charge: "2% per month on overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "At actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },

    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Empower yourself with Axis Bank’s expert home loan guides and tips to make informed financial decisions.",
      articles: [
        {
          title: "Axis Bank vs HDFC: Which Home Loan Should You Choose?",
          link: "#",
        },
        {
          title: "Top 5 Ways to Increase Your Home Loan Eligibility",
          link: "#",
        },
        {
          title: "Benefits of Fast Forward Home Loan",
          link: "#",
        },
        {
          title: "Fixed vs Floating Interest: Which One is Better?",
          link: "#",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "hdfc",
    title: "HDFC Bank Home Loan",
    description:
      "HDFC Bank Home Loans offer affordable EMIs, low interest rates, and easy processing with flexible repayment options. Designed for salaried, self-employed, and NRI customers looking to buy, construct, or renovate their home with the trust of India’s leading private bank.",
    interestRate: "8.50% p.a. onwards",
    processingFee: "Up to 0.50% of loan amount + GST",
    loanTenure: "Up to 30 years",

    heroSection: {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/en/8/87/HDFC_Bank_Logo.svg",
        alt: "HDFC Bank Logo",
      },
      badges: [
        { icon: "shield-check", text: "RBI Registered" },
        { icon: "shield-check", text: "Founded 1994" },
        { icon: "shield-check", text: "Trusted by 4 Million+ Customers" },
        { icon: "star", text: "<strong>4.9</strong>/5 by 20,120 customers" },
      ],
      title: "HDFC Bank – Smart Home Loans with Quick Approval",
      description:
        "Enjoy lower EMIs, doorstep documentation, and flexible tenures with India’s most trusted private lender.",
      buttons: [
        {
          label: "Apply Instantly",
          href: "/apply-loan?category=Home Loan By Banks&subcategory=HDFC Home Loan",
          style: {
            text: "text-white",
            bg: "bg-primary",
            hover: "hover:bg-primary-dark",
            border: "",
          },
        },
        {
          label: "Compare Loans",
          href: "/compare/hdfc-home-loan",
          style: {
            text: "text-primary",
            bg: "bg-white",
            hover: "hover:bg-blue-50",
            border: "border border-primary",
          },
        },
      ],
      loanTypes: [
        "Regular Home Loan",
        "Balance Transfer",
        "Top-Up Loan",
        "Home Improvement Loan",
        "NRI Home Loan",
      ],
    },

    highlightsSection: {
      items: [
        { icon: "percent", label: "Interest Rate", value: "8.75% p.a." },
        { icon: "calendar-clock", label: "Max Tenure", value: "30 Years" },
        { icon: "indian-rupee", label: "Max Loan Amount", value: "₹10.00 Crore" },
        { icon: "file-text", label: "Processing Fee", value: "Up to 0.50% + GST" },
      ],
    },

    emiCalculator: {
      title: "Home Loan EMI Calculator",
      defaultLoanAmount: 100000000,
      defaultTenure: 20,
      defaultInterestRate: 4.5,
      loanRange: { min: 100000, max: 200000000, step: 100000 },
      tenureRange: { min: 1, max: 30, step: 1 },
      interestRange: { min: 1, max: 7.1, step: 0.05 },
    },

    eligibilityCalculator: {
      title: "Eligibility Calculator",
      defaultEmploymentType: "Salaried",
      employmentTypes: ["Salaried", "Self-Employed", "NRI"],
      defaultAge: 30,
      defaultIncome: 80000,
      defaultExistingEmi: 10000,
      ageRange: { min: 18, max: 75 },
      incomeRange: { min: 25000, max: 500000, step: 5000 },
      existingEmiRange: { min: 0, max: 200000, step: 1000 },
    },

    contactSupport: {
      title: "Contact & Support",
      branch: {
        title: "Nearest Branch",
        address: "HDFC Bank, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
      },
      phone: { title: "Phone", number: "98765 43210" },
      hours: { title: "Business Hours", details: "Mon-Sat: 9:30am - 6pm" },
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
          title: "Fastest home loan approval ever!",
          feedback:
            "I got my approval in less than 24 hours. The team guided me step by step and explained every charge clearly.",
          author: "Sakshi R.",
          location: "Delhi",
        },
        {
          rating: 4,
          title: "Smooth balance transfer process",
          feedback:
            "Transferred my home loan from another bank and saved ₹2,500 on monthly EMI. Totally worth it!",
          author: "Arjun M.",
          location: "Pune",
        },
      ],
    },

    faqSection: {
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is the current home loan rate for HDFC Bank?",
          answer:
            "The current home loan interest rate starts from 8.50% p.a. and depends on your CIBIL score, income, and profile.",
        },
        {
          question: "What is the maximum tenure for HDFC Bank home loans?",
          answer:
            "You can choose a repayment tenure of up to 30 years, based on your age and eligibility.",
        },
        {
          question: "Does HDFC Bank charge prepayment penalties?",
          answer:
            "No, there are no prepayment or foreclosure charges for floating rate home loans sanctioned to individuals.",
        },
        {
          question: "What is the minimum credit score required?",
          answer:
            "A credit score of 750 or higher is generally preferred to get competitive rates and smoother approval.",
        },
      ],
    },

    homeLoanProducts: {
      title: "Home Loan Products Offered",
      products: [
        {
          name: "Regular Home Loan",
          description: "Buy or construct your dream home with low EMIs",
          rateRange: "8.50–9.60%",
          idealFor: "Salaried & self-employed individuals",
        },
        {
          name: "Balance Transfer",
          description: "Transfer your existing home loan to HDFC Bank for better rates",
          rateRange: "From 8.50%",
          idealFor: "Existing home loan holders",
        },
        {
          name: "Top-Up Loan",
          description: "Get additional funds on your existing home loan",
          rateRange: "From 8.75%",
          idealFor: "Renovation, education, or personal use",
        },
        {
          name: "Home Improvement Loan",
          description: "Finance your home renovation or extension",
          rateRange: "From 8.70%",
          idealFor: "Homeowners upgrading their property",
        },
        {
          name: "NRI Home Loan",
          description: "Special loans for Indians working abroad",
          rateRange: "From 8.80%",
          idealFor: "NRI professionals",
        },
      ],
    },

    interestRateTrend: {
      title: "12-Month Interest Rate Trend",
      description:
        "HDFC Bank home loan rates have remained competitive and stable, aligning with repo rate movements.",
      trendData: [
        { month: "Aug 23", rate: 8.45 },
        { month: "Sep 23", rate: 8.45 },
        { month: "Oct 23", rate: 8.50 },
        { month: "Nov 23", rate: 8.55 },
        { month: "Dec 23", rate: 8.55 },
        { month: "Jan 24", rate: 8.60 },
        { month: "Feb 24", rate: 8.60 },
        { month: "Mar 24", rate: 8.65 },
        { month: "Apr 24", rate: 8.60 },
        { month: "May 24", rate: 8.55 },
        { month: "Jun 24", rate: 8.55 },
        { month: "Jul 24", rate: 8.55 },
      ],
    },

    howToApply: {
      title: "How to Apply",
      steps: [
        {
          icon: "ClipboardList",
          title: "Fill Online Form",
          description:
            "Enter your personal, employment, and financial details to get pre-qualified instantly.",
        },
        {
          icon: "UserCheck",
          title: "Verify Documents",
          description:
            "Upload or submit your KYC and income proofs for verification and approval.",
        },
        {
          icon: "Banknote",
          title: "Get Disbursal",
          description:
            "Once approved, the loan amount is disbursed directly to your builder or account.",
        },
      ],
    },

    requiredDocuments: {
      title: "Required Documents",
      note: "*This is a general list. Additional documents may be requested based on your loan profile.",
      tabs: [
        {
          key: "salaried",
          label: "Salaried",
          icon: "Briefcase",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "3 Months' Salary Slips",
            "Form 16 / ITR",
            "6 Months' Bank Statement",
          ],
        },
        {
          key: "selfEmployed",
          label: "Self-Employed",
          icon: "User",
          documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Proof (GST / Registration)",
            "ITR for last 2 years",
            "6 Months' Current Account Statement",
          ],
        },
        {
          key: "nri",
          label: "NRI",
          icon: "Globe",
          documents: [
            "Passport & Visa Copy",
            "Overseas Employment Proof / Salary Certificate",
            "NRE/NRO Bank Statement (6 months)",
            "Indian Address Proof",
            "Power of Attorney (if applicable)",
          ],
        },
      ],
    },

    feesAndCharges: {
      title: "Fees & Charges",
      fees: [
        {
          type: "Processing Fee",
          charge: "Up to 0.50% of loan amount",
          subtext: "Min ₹3,000 + GST",
          industryAverage: "0.5% - 1.0%",
        },
        {
          type: "Prepayment Charges",
          charge: "Nil for floating rate loans",
          subtext: null,
          industryAverage: "Up to 2% for fixed rate loans",
        },
        {
          type: "Foreclosure Charges",
          charge: "Nil for floating rate home loans",
          subtext: null,
          industryAverage: "Same as prepayment charges",
        },
        {
          type: "Late Payment Fee",
          charge: "2% per month on overdue EMI",
          subtext: null,
          industryAverage: "2% - 3% per month",
        },
        {
          type: "Legal & Technical Fee",
          charge: "As per actuals",
          subtext: null,
          industryAverage: "₹5,000 - ₹15,000",
        },
      ],
    },

    knowledgeCenter: {
      title: "Knowledge & Advisory Center",
      description:
        "Get expert financial guidance and insights to make informed home loan decisions with HDFC Bank.",
      articles: [
        {
          title: "Difference Between HDFC Ltd and HDFC Bank Home Loans",
          link: "#",
        },
        {
          title: "How to Reduce Your Home Loan Interest Burden",
          link: "#",
        },
        {
          title: "Top 10 Tips for First-Time Home Buyers",
          link: "#",
        },
        {
          title: "Understanding Floating vs Fixed Interest Rates",
          link: "#",
        },
      ],
    },
  }



];

export const homeLoanByProperty = [
    {
        id: 1,
        slug: "apartment",
        title: "SBI Apartment Home Loan",
        description:
            "SBI offers affordable and flexible home loans tailored for apartment buyers — whether you’re purchasing a ready-to-move flat, an under-construction property, or investing in a new project. Designed for both salaried and self-employed individuals.",
        interestRate: "8.40% p.a. onwards",
        processingFee: "0.35% of loan amount + GST",
        loanTenure: "Up to 30 years",

        heroSection: {
  title: "Own Your Dream Apartment with Ease",
  description:
    "QuickHomeLoan helps you finance your ideal apartment effortlessly with top banks and NBFCs. Whether it’s your first home or a smart investment, we simplify your loan journey with the best offers and digital convenience.",

  buttons: [
    {
      label: "Apply Instantly",
      link: "/apply-loan?category=Home Loan By Property&subcategory=Home Loan for Apartment / Flat",
      variant: "primary",
    },
    {
      label: "Calculate EMI",
      link: "#emi-calculator",
      variant: "secondary",
    },
  ],
},

        aboutSection: {
            title: "What Is a Home Loan for Apartments?",
            subtitle:
                "Apartments have become the most popular housing choice in urban and semi-urban India, offering convenience, security, and modern amenities at varying budget ranges.",
            paragraphs: [
                {
                    text: "A Home Loan for Apartments is a financing solution designed to help individuals purchase ready-to-move, under-construction, or resale flats. These loans are offered by banks and NBFCs at competitive rates with flexible repayment options.",
                    highlight: false,
                },
                {
                    text: "QuickHomeLoan partners with India’s leading lenders to help you compare, apply, and get approved for apartment home loans quickly — all from the comfort of your home.",
                    highlight: true,
                },
            ],
        },

        featuresSection: {
            title: "Features & Benefits",
            subtitle: "Smart financing for modern homebuyers.",
            features: [
                {
                    icon: "Building2",
                    title: "Loan for All Apartment Types",
                    description:
                        "Finance ready-to-move, resale, or under-construction flats with ease.",
                },
                {
                    icon: "Percent",
                    title: "Attractive Interest Rates",
                    description:
                        "Enjoy interest rates starting at just 8.40% p.a. with flexible EMI options.",
                },
                {
                    icon: "Calendar",
                    title: "Long Tenure Options",
                    description:
                        "Repay comfortably over a tenure of up to 30 years.",
                },
                {
                    icon: "SwapHorizontal",
                    title: "Balance Transfer Facility",
                    description:
                        "Reduce your EMI burden by transferring your existing loan to a lower rate.",
                },
                {
                    icon: "Laptop",
                    title: "100% Digital Application",
                    description:
                        "Experience a paperless, fully online process with quick approvals.",
                },
                {
                    icon: "UserCheck",
                    title: "Trusted Assistance",
                    description:
                        "Get expert help for builder verification, property evaluation, and loan disbursal.",
                },
            ],
        },

        eligibilitySection: {
            eligibility: {
                title: "Eligibility Criteria for Apartment Home Loan",
                categories: [
                    {
                        title: "Salaried Individuals",
                        points: [
                            "Minimum monthly income: ₹25,000 or more",
                            "Age: 21 to 60 years",
                            "Stable job history with a reputed employer",
                            "Good credit score (CIBIL 700+ preferred)",
                        ],
                    },
                    {
                        title: "Self-employed Professionals",
                        points: [
                            "Minimum 3 years of continuous business",
                            "Positive financials and ITRs for the last 3 years",
                            "Business proof and GST registration (if applicable)",
                            "Healthy repayment track record",
                        ],
                    },
                    {
                        title: "Other Applicants",
                        points: [
                            "<b>NRIs:</b> Eligible for apartment loans with NRE/NRO account income proof.",
                            "<b>Joint Applicants:</b> Add co-applicants (spouse/parents) to enhance loan eligibility.",
                        ],
                    },
                ],
                proTip:
                    "Including a co-applicant can increase your loan eligibility and unlock higher tax savings under Sections 80C and 24(b).",
            },

            documents: {
                title: "Documents Required",
                sections: [
                    {
                        title: "Identity & Address Proof (KYC)",
                        items: [
                            "Aadhaar Card, PAN Card, Passport, or Driving License",
                            "Recent Utility Bill or Rent Agreement",
                        ],
                    },
                    {
                        title: "Income Proof",
                        items: [
                            "Salary Slips (last 3 months) and Form 16 (Salaried)",
                            "ITR for last 3 years and Business Proof (Self-employed)",
                        ],
                    },
                    {
                        title: "Property Documents",
                        items: [
                            "Sale Agreement or Allotment Letter",
                            "Builder NOC and approved project plan",
                            "Chain of title documents (for resale flats)",
                        ],
                    },
                    {
                        title: "Other Documents",
                        items: [
                            "Bank Statements for last 6 months",
                            "Passport-size photographs",
                        ],
                    },
                ],
            },
        },

        interestRatesSection: {
            title: "Home Loan Interest Rates for Apartments",
            subtitle: "Compare rates from India’s top lenders before you apply.",
            tableHeaders: [
                "Lender Type",
                "Example Banks",
                "Interest Rate (p.a.)",
                "Processing Fee",
                "Max Tenure",
            ],
            rows: [
                {
                    lenderType: "Public Sector Banks",
                    exampleBanks: "SBI, PNB, Bank of India",
                    interestRate: "8.40% – 9.20%",
                    processingFee: "0.35% – 0.50%",
                    maxTenure: "Up to 30 years",
                },
                {
                    lenderType: "Private Banks",
                    exampleBanks: "HDFC, ICICI, Axis",
                    interestRate: "8.50% – 9.45%",
                    processingFee: "0.50% – 1.00%",
                    maxTenure: "Up to 25 years",
                },
                {
                    lenderType: "NBFCs & Housing Finance",
                    exampleBanks: "Bajaj Finserv, Tata Capital, PNB Housing",
                    interestRate: "9.50% – 10.25%",
                    processingFee: "1.00% – 2.00%",
                    maxTenure: "Up to 20 years",
                },
            ],
            note: "*Rates are indicative and may vary based on credit score, income, and property type.",
        },

        eligibilityCalculator: {
            title: "Check Your Apartment Loan Eligibility",
            resultLabel: "Approximate Eligible Loan Amount",
            disclaimer:
                "*This calculation is based on standard norms and may differ depending on your lender’s policies.",
        },

        emiCalculator: {
            title: "Plan Your Apartment EMI",
            buttonText: "Calculate EMI",
            resultLabel: "Estimated Monthly EMI",
            disclaimer:
                "*Results are approximate and subject to change as per lender terms.",
        },

        taxBenefitsSection: {
            title: "Enjoy Tax Benefits on Apartment Loans",
            subtitle:
                "Buying an apartment not only provides a home but also helps you save through tax deductions.",
            benefits: [
                {
                    heading: "Principal Repayment",
                    section: "Under Section 80C",
                    amount: "Up to ₹1.5 Lakh",
                    description:
                        "You can claim deductions on the principal component of your home loan EMI.",
                },
                {
                    heading: "Interest Payment",
                    section: "Under Section 24(b)",
                    amount: "Up to ₹2 Lakh",
                    description:
                        "Deductions available for interest paid on your home loan every financial year.",
                },
            ],
            jointLoan: {
                heading: "Extra Benefits on Joint Loans",
                description:
                    "When co-owners jointly apply, both can claim these deductions separately for maximum tax advantage.",
            },
        },

        whyChooseSection: {
            whyChoose: {
                title: "Why Choose QuickHomeLoan?",
                subtitle: "Your reliable partner in apartment financing.",
                points: [
                    "Fully online application and quick approvals",
                    "Tie-ups with 30+ major banks & NBFCs",
                    "Best-in-market interest rates and offers",
                    "Dedicated relationship manager support",
                    "Transparent processing fees and no hidden charges",
                    "Eligibility check in just 2 minutes",
                ],
                image: {
                    src: "https://placehold.co/600x400/2a9d8f/ffffff?text=Modern+Apartment+Living",
                    alt: "Happy family in new apartment",
                    fallback:
                        "https://placehold.co/600x400/6c757d/ffffff?text=Apartment+View",
                },
            },
            steps: {
                title: "Simple 5-Step Loan Process",
                subtitle:
                    "We make your apartment home loan journey effortless and transparent.",
                list: [
                    {
                        title: "Check Your Eligibility",
                        description:
                            "Use our quick online tool to know how much you can borrow.",
                    },
                    {
                        title: "Compare Offers",
                        description:
                            "View loan options from multiple lenders and pick your best match.",
                    },
                    {
                        title: "Submit Documents",
                        description:
                            "Upload scanned documents securely through our portal.",
                    },
                    {
                        title: "Get Pre-Approved",
                        description:
                            "Receive a pre-approval letter to book your dream apartment confidently.",
                    },
                    {
                        title: "Loan Disbursement",
                        description:
                            "Post-verification, funds are disbursed directly to the builder or seller.",
                    },
                ],
            },
        },

        applySection: {
            title: "Apply for Your Apartment Home Loan",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "e.g., Priya Sharma",
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "e.g., 9876543210",
                },
                email: {
                    label: "Email Address",
                    placeholder: "you@example.com",
                },
                employmentType: {
                    label: "Employment Type",
                    options: ["Salaried", "Self-Employed", "NRI"],
                },
                income: {
                    label: "Net Monthly Income (₹)",
                    placeholder: "e.g., 60000",
                },
            },
            terms: {
                text: "I agree to the",
                linkText: "Terms and Conditions",
                link: "#",
            },
            buttonText: "Check My Eligibility",
        },

        loanTipsSection: {
            title: "Tips for Easy Apartment Loan Approval",
            subtitle:
                "Improve your loan eligibility and approval chances with these expert suggestions.",
            tips: [
                {
                    icon: "Gauge",
                    title: "Maintain a Strong Credit Score",
                    description:
                        "Keep your CIBIL score above 700 for faster approvals and better interest rates.",
                },
                {
                    icon: "Wallet",
                    title: "Pay Off Existing Debts",
                    description:
                        "Clear personal or credit card loans before applying for a new home loan.",
                },
                {
                    icon: "Users",
                    title: "Add a Co-applicant",
                    description:
                        "A joint application increases your borrowing capacity and strengthens approval chances.",
                },
                {
                    icon: "Building",
                    title: "Choose RERA-Approved Builders",
                    description:
                        "Loans for registered projects get approved faster and with less documentation.",
                },
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
            subtitle: "Everything you need to know about apartment home loans.",
            faqs: [
                {
                    question: "Can I get a loan for an under-construction apartment?",
                    answer:
                        "Yes, most banks and NBFCs offer home loans for under-construction flats, subject to builder approval and project verification.",
                },
                {
                    question: "What is the minimum down payment required for an apartment loan?",
                    answer:
                        "Typically, lenders finance up to 80-90% of the property value, so you’ll need to pay 10-20% as a down payment.",
                },
                {
                    question: "Can I transfer my existing home loan to SBI?",
                    answer:
                        "Yes, you can opt for a balance transfer to SBI or any other lender to enjoy lower EMIs and better interest rates.",
                },
                {
                    question: "Are prepayment charges applicable?",
                    answer:
                        "For floating-rate home loans to individuals, RBI guidelines ensure zero prepayment charges. Fixed-rate loans may have nominal charges.",
                },
                {
                    question: "How soon can I get my loan sanctioned?",
                    answer:
                        "If all documents are in order, pre-approval can be granted within 24–48 hours. Full sanction may take 5–10 working days post-verification.",
                },
            ],
        },
    },
    {
        id: 2,
        slug: "independent-house",
        title: "SBI Independent House Home Loan",
        description:
            "SBI offers exclusive home loans for independent houses and villas with affordable EMIs, low interest rates, and flexible tenure options. Ideal for individuals looking to buy or build their dream home on a plot of land.",
        interestRate: "8.40% p.a. onwards",
        processingFee: "0.35% of loan amount + GST",
        loanTenure: "Up to 30 years",

    heroSection: {
  title: "Build or Buy Your Dream Independent House with Ease",
  description:
    "QuickHomeLoan helps you finance your dream independent home or villa through top banks and NBFCs. Whether constructing on your plot or buying a ready home, we bring you the best loan offers at competitive rates.",

  buttons: [
    {
      label: "Apply Instantly",
      link: "/apply-loan?category=Home Loan By Property&subcategory=Home Loan for Independent House / Villa",
      variant: "primary",
    },
    {
      label: "Calculate EMI",
      link: "#emi-calculator",
      variant: "secondary",
    },
  ],
},

        aboutSection: {
            title: "What Is a Home Loan for Independent Houses?",
            subtitle:
                "An Independent House Home Loan helps individuals purchase, build, or renovate a standalone residential property — like a bungalow, villa, or row house — on their own plot or in a gated community.",
            paragraphs: [
                {
                    text: "Unlike apartment loans, loans for independent houses often cover both land and construction value, offering flexible disbursement schedules based on project stages. This makes them ideal for self-owned or custom-built homes.",
                    highlight: false,
                },
                {
                    text: "QuickHomeLoan partners with major lenders who specialize in property construction and individual housing finance, ensuring quick approval and personalized service for your dream home.",
                    highlight: true,
                },
            ],
        },

        featuresSection: {
            title: "Features & Benefits",
            subtitle: "Tailored solutions for independent homeowners.",
            features: [
                {
                    icon: "Home",
                    title: "Loan for Purchase or Construction",
                    description:
                        "Finance the purchase of a ready independent house or construct one on your owned land.",
                },
                {
                    icon: "Percent",
                    title: "Attractive Interest Rates",
                    description:
                        "Get interest rates starting at just 8.40% p.a., with flexible EMI options.",
                },
                {
                    icon: "CalendarClock",
                    title: "Flexible Tenure",
                    description:
                        "Choose a comfortable repayment period of up to 30 years to manage EMIs easily.",
                },
                {
                    icon: "Wrench",
                    title: "Top-up & Renovation Loans",
                    description:
                        "Get additional funds for home renovation or extension at low rates.",
                },
                {
                    icon: "Laptop",
                    title: "Paperless Process",
                    description:
                        "Apply online with minimal documentation and instant eligibility check.",
                },
                {
                    icon: "UserCheck",
                    title: "Expert Guidance",
                    description:
                        "Dedicated relationship managers to guide you from application to disbursement.",
                },
            ],
        },

        eligibilitySection: {
            eligibility: {
                title: "Eligibility Criteria for Independent House Home Loan",
                categories: [
                    {
                        title: "Salaried Individuals",
                        points: [
                            "Minimum monthly income: ₹35,000 or more",
                            "Age: 21 to 60 years",
                            "Stable job with a reputed company or government organization",
                            "Good credit history (CIBIL score 700+ preferred)",
                        ],
                    },
                    {
                        title: "Self-employed Professionals",
                        points: [
                            "Minimum 3 years of continuous business",
                            "Valid ITRs and profit & loss statements for last 3 years",
                            "Healthy turnover and repayment capacity",
                            "Registered business proof",
                        ],
                    },
                    {
                        title: "Other Applicants",
                        points: [
                            "<b>NRIs:</b> Eligible under RBI guidelines, subject to valid income proof and NRE/NRO account.",
                            "<b>Joint Applicants:</b> Add co-owners or family members to increase eligibility.",
                        ],
                    },
                ],
                proTip:
                    "For construction loans, funds are released in stages based on project progress — ensure timely completion to avoid delays.",
            },

            documents: {
                title: "Documents Required",
                sections: [
                    {
                        title: "Identity & Address Proof (KYC)",
                        items: [
                            "Aadhaar Card, PAN Card, Passport, or Driving License",
                            "Utility Bill or Rent Agreement as address proof",
                        ],
                    },
                    {
                        title: "Income Proof",
                        items: [
                            "Salary Slips (last 3 months) and Form 16 (Salaried)",
                            "ITR for last 3 years and business proof (Self-employed)",
                        ],
                    },
                    {
                        title: "Property Documents",
                        items: [
                            "Sale Deed or Title Deed of land",
                            "Approved Building Plan & Construction Estimate",
                            "NOC from local authorities or housing society (if applicable)",
                        ],
                    },
                    {
                        title: "Other Documents",
                        items: [
                            "Bank Statements (last 6 months)",
                            "Passport-size photographs of applicants",
                        ],
                    },
                ],
            },
        },

        interestRatesSection: {
            title: "Home Loan Interest Rates for Independent Houses",
            subtitle: "Compare competitive rates from India’s leading lenders.",
            tableHeaders: [
                "Lender Type",
                "Example Banks",
                "Interest Rate (p.a.)",
                "Processing Fee",
                "Max Tenure",
            ],
            rows: [
                {
                    lenderType: "Public Sector Banks",
                    exampleBanks: "SBI, PNB, Bank of Baroda",
                    interestRate: "8.40% – 9.25%",
                    processingFee: "0.35% – 0.50%",
                    maxTenure: "Up to 30 years",
                },
                {
                    lenderType: "Private Banks",
                    exampleBanks: "HDFC, ICICI, Axis",
                    interestRate: "8.55% – 9.45%",
                    processingFee: "0.50% – 1.00%",
                    maxTenure: "Up to 25 years",
                },
                {
                    lenderType: "NBFCs",
                    exampleBanks: "Bajaj Finserv, Tata Capital, LIC Housing",
                    interestRate: "9.75% – 10.50%",
                    processingFee: "1.00% – 2.00%",
                    maxTenure: "Up to 20 years",
                },
            ],
            note: "*Rates are indicative and subject to the applicant’s credit score and lender policies.",
        },

        eligibilityCalculator: {
            title: "Estimate Your Eligibility for Independent House Loan",
            resultLabel: "Your Estimated Loan Amount",
            disclaimer:
                "*Figures are approximate and depend on your income, liabilities, and lender norms.",
        },

        emiCalculator: {
            title: "Plan Your Home Loan EMIs",
            buttonText: "Calculate EMI",
            resultLabel: "Estimated Monthly EMI",
            disclaimer:
                "*Results are indicative and may vary based on lender terms.",
        },

        taxBenefitsSection: {
            title: "Tax Benefits on Independent House Loans",
            subtitle:
                "Owning your dream home comes with significant tax advantages.",
            benefits: [
                {
                    heading: "On Principal Amount",
                    section: "Under Section 80C",
                    amount: "Up to ₹1.5 Lakh",
                    description:
                        "Claim deductions on the principal component of your home loan repayment.",
                },
                {
                    heading: "On Interest Payment",
                    section: "Under Section 24(b)",
                    amount: "Up to ₹2 Lakh",
                    description:
                        "Reduce your taxable income with deductions on interest payments.",
                },
            ],
            jointLoan: {
                heading: "Joint Applicant Benefits",
                description:
                    "Both co-owners can claim tax benefits individually, doubling total deductions available under the Income Tax Act.",
            },
        },

        whyChooseSection: {
            whyChoose: {
                title: "Why Choose QuickHomeLoan?",
                subtitle: "Your trusted partner for independent house financing.",
                points: [
                    "Digital loan application and instant eligibility check",
                    "30+ bank & NBFC partnerships for better choice",
                    "Lowest processing fees and attractive interest rates",
                    "Special assistance for construction-linked disbursements",
                    "Quick approval and personalized customer support",
                    "Dedicated relationship managers for every applicant",
                ],
                image: {
                    src: "https://placehold.co/600x400/0077b6/ffffff?text=Independent+House+Finance",
                    alt: "Family outside new independent house",
                    fallback:
                        "https://placehold.co/600x400/6c757d/ffffff?text=Independent+House",
                },
            },
            steps: {
                title: "Easy 5-Step Loan Process",
                subtitle:
                    "Simple and transparent steps from eligibility check to disbursement.",
                list: [
                    {
                        title: "Check Your Eligibility",
                        description:
                            "Use our tool to know your borrowing capacity instantly.",
                    },
                    {
                        title: "Compare Loan Offers",
                        description:
                            "View offers from top lenders side by side and choose the best one.",
                    },
                    {
                        title: "Submit Documents",
                        description:
                            "Upload scanned copies securely through our online platform.",
                    },
                    {
                        title: "Get Pre-Approved",
                        description:
                            "Receive conditional approval quickly and start your property purchase.",
                    },
                    {
                        title: "Final Disbursement",
                        description:
                            "Funds are released in full or in stages (for construction loans).",
                    },
                ],
            },
        },

        applySection: {
            title: "Apply for Your Independent House Loan",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "e.g., Rajesh Sharma",
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "e.g., 9876543210",
                },
                email: {
                    label: "Email Address",
                    placeholder: "you@example.com",
                },
                employmentType: {
                    label: "Employment Type",
                    options: ["Salaried", "Self-Employed", "NRI"],
                },
                income: {
                    label: "Net Monthly Income (₹)",
                    placeholder: "e.g., 80000",
                },
            },
            terms: {
                text: "I agree to the",
                linkText: "Terms and Conditions",
                link: "#",
            },
            buttonText: "Check My Eligibility",
        },

        loanTipsSection: {
            title: "Expert Tips for Faster Independent House Loan Approval",
            subtitle:
                "Follow these simple strategies to improve your chances of approval and better terms.",
            tips: [
                {
                    icon: "Gauge",
                    title: "Maintain a High CIBIL Score",
                    description:
                        "A score of 750+ ensures quicker approval and better interest rates.",
                },
                {
                    icon: "Home",
                    title: "Ensure Property Has Clear Title",
                    description:
                        "Lenders prefer properties with clean, dispute-free ownership and valid approvals.",
                },
                {
                    icon: "Users",
                    title: "Opt for a Co-Applicant",
                    description:
                        "Adding a co-applicant boosts your eligibility and repayment capacity.",
                },
                {
                    icon: "FileCheck",
                    title: "Keep Documents Ready",
                    description:
                        "Having all required KYC and property papers ready speeds up processing.",
                },
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
            subtitle: "Get clarity on your independent house loan queries.",
            faqs: [
                {
                    question: "Can I get a loan for building a house on my own plot?",
                    answer:
                        "Yes, most banks and NBFCs offer construction loans where funds are disbursed in stages based on construction progress.",
                },
                {
                    question: "What is the LTV (Loan-to-Value) ratio for independent house loans?",
                    answer:
                        "Typically, lenders finance up to 80-85% of the property cost, depending on your income, credit score, and location.",
                },
                {
                    question: "Can NRIs apply for independent house loans?",
                    answer:
                        "Yes, NRIs can apply, provided they meet RBI guidelines and income verification requirements.",
                },
                {
                    question: "How is the disbursement done for construction loans?",
                    answer:
                        "Disbursement happens in multiple tranches — foundation, structure, finishing — after verifying progress through site visits.",
                },
                {
                    question: "Is it mandatory to have property insurance?",
                    answer:
                        "Many lenders recommend property insurance to protect against unforeseen damages. It’s optional but advisable.",
                },
            ],
        },
    },
    {
        id: 3,
        slug: "plot",
        title: "SBI Plot Purchase Loan",
        description:
            "SBI offers plot purchase loans to help you buy residential land for your dream home. Benefit from affordable interest rates, flexible repayment options, and the trust of India’s leading bank.",
        interestRate: "8.50% p.a. onwards",
        processingFee: "0.35% of loan amount + GST",
        loanTenure: "Up to 15 years",

      heroSection: {
  title: "Buy Your Perfect Plot with Ease and Confidence",
  description:
    "QuickHomeLoan helps you secure financing to purchase residential plots or land in approved areas. Choose from top banks and NBFCs offering the best rates and simple documentation for your future home investment.",

  buttons: [
    {
      label: "Apply Instantly",
      link: "/apply-loan?category=Home Loan By Property&subcategory=Home Loan for Plot / Land Purchase",
      variant: "primary",
    },
    {
      label: "Calculate EMI",
      link: "#emi-calculator",
      variant: "secondary",
    },
  ],
},

        aboutSection: {
            title: "What Is a Plot Purchase Loan?",
            subtitle:
                "A Plot Loan, also known as a Land Loan, helps you buy a residential plot in approved localities where construction is permitted within a stipulated time.",
            paragraphs: [
                {
                    text: "Unlike a standard home loan, a plot purchase loan is specifically designed for buying a piece of residential land. You can later opt for a composite loan if you plan to construct a house on it within a few years.",
                    highlight: false,
                },
                {
                    text: "QuickHomeLoan partners with leading lenders offering plot purchase and construction-linked loans with minimal paperwork, quick approval, and flexible repayment options.",
                    highlight: true,
                },
            ],
        },

        featuresSection: {
            title: "Features & Benefits",
            subtitle: "Finance your dream land investment smartly.",
            features: [
                {
                    icon: "MapPin",
                    title: "Loan for Plot Purchase",
                    description:
                        "Finance the purchase of a residential plot from government or private developers in approved areas.",
                },
                {
                    icon: "Percent",
                    title: "Attractive Interest Rates",
                    description:
                        "Get competitive interest rates starting from just 8.50% p.a. with easy EMIs.",
                },
                {
                    icon: "CalendarClock",
                    title: "Flexible Repayment Tenure",
                    description:
                        "Repay comfortably over a tenure of up to 15 years, depending on lender policy.",
                },
                {
                    icon: "RefreshCw",
                    title: "Plot + Construction Combo Option",
                    description:
                        "Option to convert your plot loan into a home construction loan later.",
                },
                {
                    icon: "Laptop",
                    title: "Digital Application Journey",
                    description:
                        "Apply online, upload documents, and track application status in real-time.",
                },
                {
                    icon: "UserCheck",
                    title: "Trusted Assistance",
                    description:
                        "Get help from our experts for plot verification, valuation, and approval.",
                },
            ],
        },

        eligibilitySection: {
            eligibility: {
                title: "Eligibility Criteria for Plot Loan",
                categories: [
                    {
                        title: "Salaried Individuals",
                        points: [
                            "Minimum monthly income: ₹40,000 or more",
                            "Age: 21 to 60 years",
                            "Stable employment record (minimum 2 years)",
                            "CIBIL score of 700+ preferred",
                        ],
                    },
                    {
                        title: "Self-employed Professionals",
                        points: [
                            "Minimum 3 years of continuous business or professional practice",
                            "Consistent ITRs for last 3 years",
                            "Positive business turnover and cash flow",
                            "Valid business registration proof",
                        ],
                    },
                    {
                        title: "Other Applicants",
                        points: [
                            "<b>NRIs:</b> Eligible under RBI rules for purchasing residential plots in India.",
                            "<b>Joint Applicants:</b> Adding a co-borrower can increase eligibility and approval amount.",
                        ],
                    },
                ],
                proTip:
                    "Lenders generally require construction to begin within 2–3 years of plot purchase for continued loan eligibility.",
            },

            documents: {
                title: "Documents Required",
                sections: [
                    {
                        title: "Identity & Address Proof (KYC)",
                        items: [
                            "Aadhaar Card, PAN Card, Passport, or Driving License",
                            "Utility Bill or Rent Agreement for address verification",
                        ],
                    },
                    {
                        title: "Income Proof",
                        items: [
                            "Latest 3 months' salary slips and Form 16 (Salaried)",
                            "ITR for last 3 years and financial statements (Self-employed)",
                        ],
                    },
                    {
                        title: "Property Documents",
                        items: [
                            "Registered Sale Agreement or Title Deed",
                            "Encumbrance Certificate (EC)",
                            "Approved Layout Plan and NOC from authority",
                        ],
                    },
                    {
                        title: "Other Documents",
                        items: [
                            "Bank Statements for last 6 months",
                            "Passport-size photos of applicant(s)",
                        ],
                    },
                ],
            },
        },

        interestRatesSection: {
            title: "Interest Rates for Plot Purchase Loans",
            subtitle: "Compare plot loan interest rates from leading banks and NBFCs.",
            tableHeaders: [
                "Lender Type",
                "Example Banks",
                "Interest Rate (p.a.)",
                "Processing Fee",
                "Max Tenure",
            ],
            rows: [
                {
                    lenderType: "Public Sector Banks",
                    exampleBanks: "SBI, PNB, Bank of Baroda",
                    interestRate: "8.50% – 9.30%",
                    processingFee: "0.35% – 0.50%",
                    maxTenure: "Up to 15 years",
                },
                {
                    lenderType: "Private Banks",
                    exampleBanks: "HDFC, ICICI, Axis",
                    interestRate: "8.75% – 9.75%",
                    processingFee: "0.50% – 1.00%",
                    maxTenure: "Up to 15 years",
                },
                {
                    lenderType: "NBFCs",
                    exampleBanks: "Bajaj Finserv, Tata Capital, LIC Housing",
                    interestRate: "9.90% – 10.75%",
                    processingFee: "1.00% – 2.00%",
                    maxTenure: "Up to 10 years",
                },
            ],
            note: "*Rates are indicative and depend on your credit profile, property type, and location.",
        },

        eligibilityCalculator: {
            title: "Check Your Plot Loan Eligibility",
            resultLabel: "Estimated Eligible Loan Amount",
            disclaimer:
                "*Eligibility is indicative and may vary based on lender norms, FOIR, and income stability.",
        },

        emiCalculator: {
            title: "Plan Your Plot Loan EMI",
            buttonText: "Calculate EMI",
            resultLabel: "Approximate Monthly EMI",
            disclaimer:
                "*Actual EMI amount may vary as per bank’s final sanction and interest rate.",
        },

        taxBenefitsSection: {
            title: "Tax Benefits on Plot Purchase Loans",
            subtitle:
                "Tax benefits apply only when the plot loan is converted into a home construction loan.",
            benefits: [
                {
                    heading: "On Construction Loan",
                    section: "Under Section 24(b)",
                    amount: "Up to ₹2 Lakh",
                    description:
                        "Interest deduction is applicable only after construction is completed.",
                },
                {
                    heading: "On Principal Repayment",
                    section: "Under Section 80C",
                    amount: "Up to ₹1.5 Lakh",
                    description:
                        "Principal repayment benefits are available only post-construction.",
                },
            ],
            jointLoan: {
                heading: "Joint Loan Advantage",
                description:
                    "Once converted to a home construction loan, both co-owners can claim individual tax deductions under Sections 80C and 24(b).",
            },
        },

        whyChooseSection: {
            whyChoose: {
                title: "Why Choose QuickHomeLoan?",
                subtitle: "Simplifying your journey to owning land in India.",
                points: [
                    "End-to-end digital loan process",
                    "Tie-ups with 30+ leading banks & NBFCs",
                    "Fast approval with minimal documentation",
                    "Best rates for plot and construction combo loans",
                    "Personalized loan offers for salaried and self-employed buyers",
                    "Transparent process with no hidden charges",
                ],
                image: {
                    src: "https://placehold.co/600x400/4361ee/ffffff?text=Plot+Loan+Financing",
                    alt: "Man checking plot site with loan documents",
                    fallback:
                        "https://placehold.co/600x400/6c757d/ffffff?text=Land+Purchase+Loan",
                },
            },
            steps: {
                title: "5 Simple Steps to Get a Plot Loan",
                subtitle:
                    "Buying land made simple — from checking eligibility to disbursement.",
                list: [
                    {
                        title: "Check Eligibility",
                        description:
                            "Enter income details and check your eligible loan amount instantly.",
                    },
                    {
                        title: "Compare Loan Offers",
                        description:
                            "View offers from multiple lenders and choose the one that suits you best.",
                    },
                    {
                        title: "Submit Documents",
                        description:
                            "Upload KYC and property papers securely for verification.",
                    },
                    {
                        title: "Get Pre-Approval",
                        description:
                            "Receive a pre-approval letter to confirm your buying capacity.",
                    },
                    {
                        title: "Disbursement",
                        description:
                            "Loan is disbursed directly to the seller post title and property verification.",
                    },
                ],
            },
        },

        applySection: {
            title: "Apply for a Plot Purchase Loan",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "e.g., Neha Patel",
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "e.g., 9876543210",
                },
                email: {
                    label: "Email Address",
                    placeholder: "you@example.com",
                },
                employmentType: {
                    label: "Employment Type",
                    options: ["Salaried", "Self-Employed", "NRI"],
                },
                income: {
                    label: "Net Monthly Income (₹)",
                    placeholder: "e.g., 70000",
                },
            },
            terms: {
                text: "I agree to the",
                linkText: "Terms and Conditions",
                link: "#",
            },
            buttonText: "Check My Eligibility",
        },

        loanTipsSection: {
            title: "Expert Tips for Plot Loan Approval",
            subtitle:
                "Follow these suggestions to improve approval chances and secure better rates.",
            tips: [
                {
                    icon: "Gauge",
                    title: "Keep a Strong Credit Profile",
                    description:
                        "Maintain a CIBIL score above 700 to qualify for better interest rates.",
                },
                {
                    icon: "Map",
                    title: "Buy in Approved Layouts Only",
                    description:
                        "Ensure your plot is within a government-approved or RERA-registered layout.",
                },
                {
                    icon: "Users",
                    title: "Apply Jointly with a Co-borrower",
                    description:
                        "Joint applications increase your loan amount eligibility.",
                },
                {
                    icon: "FileCheck",
                    title: "Verify Title Documents",
                    description:
                        "Ensure clear ownership and no legal encumbrances before applying for the loan.",
                },
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
            subtitle: "Your common queries about plot purchase loans — answered.",
            faqs: [
                {
                    question: "Can I get a loan to buy an agricultural plot?",
                    answer:
                        "No, plot loans are granted only for residential plots in approved layouts or areas.",
                },
                {
                    question: "Is construction mandatory after plot purchase?",
                    answer:
                        "In most cases, lenders require you to start construction within 2–3 years of purchase. Otherwise, you may need to convert it into a construction loan.",
                },
                {
                    question: "Can NRIs apply for a plot loan in India?",
                    answer:
                        "Yes, NRIs can apply for residential plot loans as per RBI guidelines, provided the property is not agricultural land.",
                },
                {
                    question: "What is the maximum loan-to-value (LTV) ratio for plot loans?",
                    answer:
                        "Lenders usually finance up to 70–75% of the plot’s value. You’ll need to pay the remaining amount as a down payment.",
                },
                {
                    question: "Are there tax benefits on standalone plot loans?",
                    answer:
                        "Tax benefits apply only after construction begins or is completed, not for land purchase alone.",
                },
            ],
        },
    },
    {
        id: 4,
        slug: "under-construction",
        title: "SBI Under-Construction Home Loan",
        description:
            "SBI offers home loans tailored for under-construction properties, enabling buyers to finance their dream home while it’s being built. Enjoy flexible disbursement, affordable EMIs, and secure financing with trusted developers.",
        interestRate: "8.40% p.a. onwards",
        processingFee: "0.35% of loan amount + GST",
        loanTenure: "Up to 30 years",

      heroSection: {
  title: "Turn Your Under-Construction Property into Reality",
  description:
    "QuickHomeLoan connects you with top banks and NBFCs offering specialized home loans for under-construction properties. Get easy stage-wise disbursement, competitive rates, and digital processing — all under one roof.",

  buttons: [
    {
      label: "Apply Instantly",
      link: "/apply-loan?category=Home Loan By Property&subcategory=Home Loan for Under-Construction Property",
      variant: "primary",
    },
    {
      label: "Calculate EMI",
      link: "#emi-calculator",
      variant: "secondary",
    },
  ],
},

        aboutSection: {
            title: "What Is an Under-Construction Home Loan?",
            subtitle:
                "An Under-Construction Home Loan is designed for individuals buying a property still being built by a developer or builder.",
            paragraphs: [
                {
                    text: "These loans are disbursed in stages based on construction progress, ensuring that you only pay interest (Pre-EMI) on the disbursed amount until the property is ready for possession.",
                    highlight: false,
                },
                {
                    text: "QuickHomeLoan partners with India’s leading lenders to provide safe and transparent financing for RERA-approved projects, helping you invest confidently in your dream home.",
                    highlight: true,
                },
            ],
        },

        featuresSection: {
            title: "Features & Benefits",
            subtitle: "Smart financing for your dream under-construction property.",
            features: [
                {
                    icon: "Building",
                    title: "Stage-Wise Disbursement",
                    description:
                        "Loan amount is released in parts as the construction progresses, reducing interest burden.",
                },
                {
                    icon: "Percent",
                    title: "Attractive Interest Rates",
                    description:
                        "Enjoy interest rates starting at 8.40% p.a., among the lowest in the market.",
                },
                {
                    icon: "Clock",
                    title: "Long Tenure Options",
                    description:
                        "Repay comfortably with loan tenures up to 30 years.",
                },
                {
                    icon: "FileCheck",
                    title: "RERA-Approved Builder Financing",
                    description:
                        "Loans available only for verified and approved under-construction projects.",
                },
                {
                    icon: "Laptop",
                    title: "Completely Digital Process",
                    description:
                        "Apply online, upload documents, and track your loan progress digitally.",
                },
                {
                    icon: "UserCheck",
                    title: "Safe & Transparent",
                    description:
                        "We ensure your builder and project are verified to safeguard your investment.",
                },
            ],
        },

        eligibilitySection: {
            eligibility: {
                title: "Eligibility Criteria for Under-Construction Home Loan",
                categories: [
                    {
                        title: "Salaried Individuals",
                        points: [
                            "Minimum monthly income: ₹30,000 or more",
                            "Age: 21 to 60 years",
                            "Minimum 2 years of stable employment",
                            "Good credit score (CIBIL 700+ preferred)",
                        ],
                    },
                    {
                        title: "Self-employed Professionals",
                        points: [
                            "Minimum 3 years of business continuity",
                            "Regular ITRs and financial statements",
                            "Valid business proof and GST registration",
                            "Sound repayment history and credit score",
                        ],
                    },
                    {
                        title: "Other Applicants",
                        points: [
                            "<b>NRIs:</b> Eligible under RBI guidelines with valid income proof and NRE/NRO account.",
                            "<b>Joint Applicants:</b> Add a co-borrower to improve eligibility and loan amount.",
                        ],
                    },
                ],
                proTip:
                    "You can claim tax benefits on both principal and interest once the property construction is complete and possession is taken.",
            },

            documents: {
                title: "Documents Required",
                sections: [
                    {
                        title: "Identity & Address Proof (KYC)",
                        items: [
                            "Aadhaar Card, PAN Card, Passport, or Driving License",
                            "Utility Bill, Rent Agreement, or Passport for address proof",
                        ],
                    },
                    {
                        title: "Income Proof",
                        items: [
                            "Salary Slips (last 3 months) and Form 16 (Salaried)",
                            "ITR and audited financials for 3 years (Self-employed)",
                        ],
                    },
                    {
                        title: "Property Documents",
                        items: [
                            "Builder’s Allotment Letter / Agreement for Sale",
                            "Construction schedule and payment plan",
                            "RERA registration and approved building plan",
                        ],
                    },
                    {
                        title: "Other Documents",
                        items: [
                            "Bank statements for last 6 months",
                            "Passport-size photographs of applicant(s)",
                        ],
                    },
                ],
            },
        },

        interestRatesSection: {
            title: "Interest Rates for Under-Construction Home Loans",
            subtitle:
                "Compare competitive interest rates and choose the best offer for your under-construction property.",
            tableHeaders: [
                "Lender Type",
                "Example Banks",
                "Interest Rate (p.a.)",
                "Processing Fee",
                "Max Tenure",
            ],
            rows: [
                {
                    lenderType: "Public Sector Banks",
                    exampleBanks: "SBI, Bank of Baroda, PNB",
                    interestRate: "8.40% – 9.25%",
                    processingFee: "0.35% – 0.50%",
                    maxTenure: "Up to 30 years",
                },
                {
                    lenderType: "Private Banks",
                    exampleBanks: "HDFC, ICICI, Axis Bank",
                    interestRate: "8.55% – 9.50%",
                    processingFee: "0.50% – 1.00%",
                    maxTenure: "Up to 25 years",
                },
                {
                    lenderType: "NBFCs",
                    exampleBanks: "Bajaj Finserv, Tata Capital, LIC Housing",
                    interestRate: "9.75% – 10.75%",
                    processingFee: "1.00% – 2.00%",
                    maxTenure: "Up to 20 years",
                },
            ],
            note: "*Rates are subject to change based on lender policy, applicant profile, and construction progress.",
        },

        eligibilityCalculator: {
            title: "Check Your Under-Construction Loan Eligibility",
            resultLabel: "Approximate Eligible Loan Amount",
            disclaimer:
                "*Eligibility estimate is based on your income and liabilities. Actual amount may vary as per lender norms.",
        },

        emiCalculator: {
            title: "Plan Your EMI During Construction",
            buttonText: "Calculate EMI",
            resultLabel: "Your Approximate Monthly EMI",
            disclaimer:
                "*You pay only Pre-EMIs (interest on disbursed amount) during the construction phase. Full EMIs start post-possession.",
        },

        taxBenefitsSection: {
            title: "Tax Benefits on Under-Construction Home Loans",
            subtitle:
                "Tax benefits are available only after possession of the property, but pre-construction interest can also be claimed in parts.",
            benefits: [
                {
                    heading: "Pre-construction Interest Benefit",
                    section: "Under Section 24(b)",
                    amount: "Up to ₹2 Lakh (in 5 equal installments)",
                    description:
                        "You can claim interest paid during the construction phase in 5 equal installments after possession.",
                },
                {
                    heading: "Principal Repayment",
                    section: "Under Section 80C",
                    amount: "Up to ₹1.5 Lakh",
                    description:
                        "Once possession is received, deductions on principal repayments are applicable under Section 80C.",
                },
            ],
            jointLoan: {
                heading: "Joint Loan Benefits",
                description:
                    "Both co-owners can claim these deductions individually once the property is ready for possession.",
            },
        },

        whyChooseSection: {
            whyChoose: {
                title: "Why Choose QuickHomeLoan?",
                subtitle:
                    "Simplifying the home loan process for under-construction properties.",
                points: [
                    "Instant eligibility check and quick pre-approval",
                    "Loans available for 1000+ RERA-approved projects",
                    "30+ banking and NBFC partners for best rate comparison",
                    "Flexible disbursement linked to construction progress",
                    "End-to-end digital application and document upload",
                    "Dedicated relationship manager for personalized guidance",
                ],
                image: {
                    src: "https://placehold.co/600x400/3b82f6/ffffff?text=Under+Construction+Loan",
                    alt: "Family viewing under-construction home",
                    fallback:
                        "https://placehold.co/600x400/6c757d/ffffff?text=Home+Under+Construction",
                },
            },
            steps: {
                title: "How the Process Works",
                subtitle: "Simple 5-step path to financing your under-construction home.",
                list: [
                    {
                        title: "Check Eligibility",
                        description:
                            "Enter your income and property details to instantly know your eligibility.",
                    },
                    {
                        title: "Compare Offers",
                        description:
                            "Get personalized offers from banks based on your property and profile.",
                    },
                    {
                        title: "Submit Documents",
                        description:
                            "Upload your documents and builder’s details for verification.",
                    },
                    {
                        title: "Get Pre-Approval",
                        description:
                            "Receive your pre-approval letter and builder tie-up confirmation.",
                    },
                    {
                        title: "Stage-Wise Disbursement",
                        description:
                            "Funds are disbursed directly to the builder as per the construction milestones.",
                    },
                ],
            },
        },

        applySection: {
            title: "Apply for Your Under-Construction Home Loan",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "e.g., Rahul Mehta",
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "e.g., 9876543210",
                },
                email: {
                    label: "Email Address",
                    placeholder: "you@example.com",
                },
                employmentType: {
                    label: "Employment Type",
                    options: ["Salaried", "Self-Employed", "NRI"],
                },
                income: {
                    label: "Net Monthly Income (₹)",
                    placeholder: "e.g., 90000",
                },
            },
            terms: {
                text: "I agree to the",
                linkText: "Terms and Conditions",
                link: "#",
            },
            buttonText: "Check My Eligibility",
        },

        loanTipsSection: {
            title: "Tips for Smooth Under-Construction Loan Approval",
            subtitle:
                "Follow these expert tips to ensure hassle-free loan approval and disbursement.",
            tips: [
                {
                    icon: "Building",
                    title: "Choose RERA-Registered Builders",
                    description:
                        "Loans are easily approved for verified and RERA-registered projects.",
                },
                {
                    icon: "Gauge",
                    title: "Maintain a Good Credit Score",
                    description:
                        "A score of 750+ improves approval chances and offers better rates.",
                },
                {
                    icon: "Calendar",
                    title: "Plan for Pre-EMIs",
                    description:
                        "During construction, you’ll pay interest only on disbursed amounts — plan your cash flow accordingly.",
                },
                {
                    icon: "Users",
                    title: "Apply Jointly if Possible",
                    description:
                        "A co-applicant increases eligibility and enhances repayment capacity.",
                },
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
            subtitle: "Your common queries about under-construction home loans — answered.",
            faqs: [
                {
                    question: "What is a Pre-EMI?",
                    answer:
                        "Pre-EMI is the interest you pay only on the amount disbursed during construction. Full EMIs begin after final disbursement or possession.",
                },
                {
                    question: "Can I get a loan for an under-construction property from any builder?",
                    answer:
                        "Banks finance only RERA-approved or pre-verified projects to ensure safety and transparency.",
                },
                {
                    question: "Can I switch to another lender during construction?",
                    answer:
                        "Yes, you can transfer your loan to another lender through a balance transfer facility, subject to approval.",
                },
                {
                    question: "Do I get tax benefits before construction is completed?",
                    answer:
                        "Tax benefits apply only after completion. However, pre-construction interest can be claimed post-possession in 5 installments.",
                },
                {
                    question: "How long does it take to get approval?",
                    answer:
                        "Typically, pre-approval takes 24–48 hours, while final sanction may take 7–10 days after document verification.",
                },
            ],
        },
    }




]

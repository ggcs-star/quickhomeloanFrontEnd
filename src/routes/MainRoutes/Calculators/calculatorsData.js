import * as Icons from "lucide-react";

/**
 * MASTER CALCULATOR REGISTRY
 * Single source of truth for all calculator routes
 */

export const ALL_CALCULATORS = [

  {
    slug: "loan-basic",
    category: "Loan",
    title: "EMI Calculator",
    description: "Calculate EMI based on loan amount, interest rate, and tenure.",
    icon: Icons.Calculator,
  },
  {
    slug: "home-loan-eligibility",
    category: "Loan",
    title: "Home Loan Eligibility Calculator",
    description:
      "Check your maximum eligible home loan based on income and FOIR.",
    icon: Icons.Home,
  },
    {
    slug: "emi-interest-rate-finder",
    category: "Loan",
    title: "Interest Rate Finder",
    description: "Calculate the effective interest rate from EMI.",
    icon: Icons.Percent,
  },
    {
    slug: "loan-tenure",
    category: "Loan",
    title: "Loan Tenure Calculator",
    description: "Adjust loan tenure to fit your EMI budget.",
    icon: Icons.CalendarClock,
  },
    {
    slug: "home-loan-prepay",
    category: "Loan",
    title: "Home Loan Prepayment Calculator",
    description:
      "Calculate savings in interest and tenure by prepaying your loan.",
    icon: Icons.Activity,
  },
    {
    slug: "rent-vs-buy",
    category: "Housing",
    title: "Rent vs Buy",
    description:
      "Long-term comparison of renting a house versus buying one.",
    icon: Icons.Home,
  },
    {
    slug: "property-investment",
    category: "Property",
    title: "Property Investment vs EMI",
    description:
      "Compare property investment returns with EMI outflows.",
    icon: Icons.BarChart,
  },
    {
    slug: "under-construction",
    category: "Housing",
    title: "Under Construction vs Ready To Move",
    description:
      "Compare cost, risk, and returns of UC vs RTM properties.",
    icon: Icons.Home,
  },
    {
    slug: "stamp-duty",
    category: "Property",
    title: "Stamp Duty Calculator",
    description:
      "Estimate stamp duty and registration charges on property purchase.",
    icon: Icons.Stamp,
  },
  /* ---------------- STRATEGY ---------------- */
  // {
  //   slug: "loan-vs-fd",
  //   category: "Strategy",
  //   title: "Loan vs FD",
  //   description: "Compare the return on fixed deposit with the cost of a loan.",
  //   icon: Icons.Calculator,
  // },
  // {
  //   slug: "loan-interest-vs-fd-interest",
  //   category: "Strategy",
  //   title: "Loan Interest vs FD Interest",
  //   description: "Evaluate whether taking a loan or breaking an FD is smarter.",
  //   icon: Icons.Banknote,
  // },
  // {
  //   slug: "loan-interest-vs-swp-interest",
  //   category: "Strategy",
  //   title: "Loan Interest vs SWP Interest",
  //   description:
  //     "Calculate the required FD interest rate to pay loan EMIs through SWP without breaking your FD.",
  //   icon: Icons.LineChart,
  // },
  // {
  //   slug: "emi-prepayment-vs-invest",
  //   category: "Strategy",
  //   title: "EMI Prepayment vs Invest (FD/MF)",
  //   description: "Should you prepay your loan or invest the money instead?",
  //   icon: Icons.BarChart,
  // },
  // {
  //   slug: "loan-vs-fd-mf-sip",
  //   category: "Strategy",
  //   title: "Loan vs FD / MF / SIP (Advanced)",
  //   description:
  //     "Advanced comparison of loan cost with FD, Mutual Funds, and SIPs.",
  //   icon: Icons.PieChart,
  // },
  // {
  //   slug: "mutual-fund-loan-vs-swp",
  //   category: "Strategy",
  //   title: "Mutual Fund Loan vs SWP",
  //   description:
  //     "Compare loan against mutual funds versus systematic withdrawals.",
  //   icon: Icons.LineChart,
  // },

  /* ---------------- LOAN ---------------- */

  // {
  //   slug: "loan-amount",
  //   category: "Loan",
  //   title: "Loan Amount Calculator",
  //   description: "Find how much loan you can take based on EMI.",
  //   icon: Icons.Wallet,
  // },


  // {
  //   slug: "loan-extra-repayments",
  //   category: "Loan",
  //   title: "Loan with Extra Repayments",
  //   description:
  //     "See how extra repayments reduce interest and loan tenure.",
  //   icon: Icons.TrendingDown,
  // },


  // {
  //   slug: "loan-balance-transfer",
  //   category: "Loan",
  //   title: "Loan Balance Transfer Calculator",
  //   description:
  //     "Evaluate savings by transferring your loan to a lower interest rate.",
  //   icon: Icons.Scale,
  // },

  /* ---------------- HOUSING ---------------- */
  // {
  //   slug: "emi-vs-rent",
  //   category: "Housing",
  //   title: "EMI vs Rent",
  //   description: "Compare renting versus buying a house using EMI.",
  //   icon: Icons.Home,
  // },



  /* ---------------- INVESTMENT ---------------- */
  // {
  //   slug: "real-returns-after-tax",
  //   category: "Investment",
  //   title: "Real Returns After Tax",
  //   description: "Calculate inflation-adjusted post-tax returns.",
  //   icon: Icons.TrendingUp,
  // },
  // {
  //   slug: "sip-systematic-investment-plan",
  //   category: "Investment",
  //   title: "SIP Calculator",
  //   description: "Estimate future value of monthly SIP investments.",
  //   icon: Icons.Calculator,
  // },
  // {
  //   slug: "swp-systematic-withdrawal-plan",
  //   category: "Investment",
  //   title: "SWP Calculator",
  //   description: "Estimate systematic withdrawals from investments.",
  //   icon: Icons.Calculator,
  // },

  /* ---------------- PROPERTY ---------------- */



  /* ---------------- TAX ---------------- */
  // {
  //   slug: "tax-savings-vs-investment-returns",
  //   category: "Tax",
  //   title: "Tax Savings vs Investment Returns",
  //   description:
  //     "Compare tax-saving investments with market-linked investments.",
  //   icon: Icons.FileText,
  // },

  /* ---------------- DEBT ---------------- */
  // {
  //   slug: "debt-avalanche-vs-snowball",
  //   category: "Debt",
  //   title: "Debt Avalanche vs Snowball",
  //   description:
  //     "Compare two popular debt repayment strategies.",
  //   icon: Icons.TrendingDown,
  // },
];

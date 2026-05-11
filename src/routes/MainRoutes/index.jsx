import React from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./Home";
import Calculators from "./Calculators";
import CalculatorDetails from "./CalculatorDetails";
import HomeLoanDetail from "./HomeLoanDetail";
import ApplyNow from "./ApplyNow";
import BankRates from "./BankRates";
import CalculatorsDetails from "./CalculatorsDetails";
import HomeLoanByAmount from "./HomeLoanByAmount";
import HomeLoanByCibil from "./HomeLoanByCibil";
import HomeLoanBySalary from "./HomeLoanBySalary";
import TopUpHomeLoan from "./TopUpHomeLoan";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import TransferHomeLoan from "./TransferHomeLoan";
import HomeLoanByProfession from "./HomeLoanByProfession";
import PremiumHomeLoanCategoriesDetails from "./PremiumHomeLoanCategoriesDetails";
import HomeLoanByBhkTypes from "./HomeLoanByBhkTypes";
import HomeLoanByProperty from "./HomeLoanByProperty";

import RegisterPage from "./Register/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import Dashboard from "./Dashboard";
import DuplicateStepper from "./DuplicateStepper";
import ProfilePage from "./ProfilePage";
import SubscriptionControlCenter from "./SubscriptionControlCenter";
import CommunicationCenter from "./CommunicationCenter";
import TermsConditions from "./Terms&Conditions";
import DisclaimerPage from "./Disclaimer/components/DisclaimerPage";
import PrivacyPolicyPage from "./PrivacyPolicy/components/PrivacyPolicyPage";
import NotFound from "../../components/NotFound";

/* ✅ SEO Config */
const SEO_DATA = {
 

  "/about-us": {
    title: "About Us - Quick Home Loan",
    description:
      "Learn about Quick Home Loan, your trusted partner for home loan solutions.",
    keywords: "about quick home loan, home loan company india",
  },

  "/contact-us": {
    title: "Contact Us - Quick Home Loan",
    description:
      "Get in touch with Quick Home Loan for queries and support.",
    keywords: "contact quick home loan, home loan support",
  },

  "/apply-loan": {
    title: "Apply for Home Loan Online - Quick Home Loan",
    description:
      "Apply for a home loan online with quick approval and best rates.",
    keywords:
      "apply home loan online, quick home loan application, home loan india",
  },

  "/bank-rates": {
    title:
      "Bank Interest Rates for Home Loans in India (2026) | Compare Latest Bank Rates",

    description:
      "Compare the latest home loan interest rates from top banks in India. Check updated bank-wise home loan rates, EMI insights, and choose the best lender for your property loan in 2026.",

    keywords:
      "home loan bank rates, bank interest rates for home loan, latest home loan interest rates India, compare home loan rates, bank wise home loan rates, home loan EMI rates, best home loan interest rate 2026",
  },

  "/calculators": {
    title: "Home Loan EMI Calculator - Quick Home Loan",
    description:
      "Calculate your home loan EMI instantly with our advanced EMI calculator.",
    keywords:
      "home loan emi calculator, emi calculator india, loan calculator",
  },

  "/terms-and-conditions": {
    title: "Terms & Conditions - Quick Home Loan",
    description:
      "Read the terms and conditions of Quick Home Loan services.",
    keywords: "terms and conditions, quick home loan policies",
  },

  "/privacy-policy": {
    title: "Privacy Policy - Quick Home Loan",
    description:
      "Learn how Quick Home Loan collects and protects your data.",
    keywords: "privacy policy, user data protection",
  },

  "/disclaimer": {
    title: "Disclaimer - Quick Home Loan",
    description:
      "Understand the disclaimer and limitations of Quick Home Loan services.",
    keywords: "disclaimer, quick home loan legal",
  },
};

/* ✅ SEO Component */
function SEO() {
  const location = useLocation();

  const seo = SEO_DATA[location.pathname] || {
    title: "Quick Home Loan",
    description:
      "Quick Home Loan - Best loan facilitation platform in India.",
    keywords: "home loan, quick home loan, loan services india",
  };

  const url = `https://www.quickhomeloan.in${location.pathname}`;

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />

      <meta name="keywords" content={seo.keywords} />

      <link rel="canonical" href={url} />

      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:url" content={url} />

      <meta property="og:title" content={seo.title} />

      <meta property="og:description" content={seo.description} />

      <meta property="og:site_name" content="Quick Home Loan" />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={seo.title} />

      <meta
        name="twitter:description"
        content={seo.description}
      />
    </Helmet>
  );
}

export default function MainRoutes(props) {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  const routes = useRoutes([
    { path: "", element: <Home {...props} /> },

    { path: "/about-us", element: <AboutUs {...props} /> },

    { path: "/contact-us", element: <ContactUs {...props} /> },

    { path: "/faq", element: <Faq {...props} /> },

    { path: "/apply-loan", element: <ApplyNow {...props} /> },

    { path: "/bank-rates", element: <BankRates {...props} /> },

    { path: "/top-up-home-loan", element: <TopUpHomeLoan {...props} /> },

    {
      path: "/transfer-home-loan",
      element: <TransferHomeLoan {...props} />,
    },

    { path: "/calculators", element: <Calculators {...props} /> },

    {
      path: "/calculators/:slug",
      element: <CalculatorsDetails {...props} />,
    },

    {
      path: "/premium-home-loan-categories/:slug",
      element: <PremiumHomeLoanCategoriesDetails {...props} />,
    },

    // { path: "/dashboard", element: <Dashboard {...props} /> },

    // { path: "/profile", element: <ProfilePage {...props} /> },

    // { path: "/subscription", element: <SubscriptionControlCenter {...props} /> },

    {
      path: "/communications",
      element: <CommunicationCenter {...props} />,
    },

    {
      path: "/home-loan/details/:slug",
      element: <HomeLoanDetail />,
    },

    {
      path: "/home-loan/property/:slug",
      element: <HomeLoanByProperty />,
    },

    {
      path: "/home-loan/amount/:slug",
      element: <HomeLoanByAmount />,
    },

    {
      path: "/home-loan/cibil/:slug",
      element: <HomeLoanByCibil />,
    },

    {
      path: "/home-loan/salary/:slug",
      element: <HomeLoanBySalary />,
    },

    {
      path: "/home-loan/profession/:slug",
      element: <HomeLoanByProfession />,
    },

    {
      path: "/home-loan/bhktype/:slug",
      element: <HomeLoanByBhkTypes />,
    },

    {
      path: "/terms-and-conditions",
      element: <TermsConditions {...props} />,
    },

    {
      path: "/disclaimer",
      element: <DisclaimerPage {...props} />,
    },

    {
      path: "/privacy-policy",
      element: <PrivacyPolicyPage {...props} />,
    },

    // {
    //   path: "/login",
    //   element: isAuth ? (
    //     <Navigate to="/dashboard" replace />
    //   ) : (
    //     <LoginPage {...props} />
    //   ),
    // },

    // {
    //   path: "/signup",
    //   element: isAuth ? (
    //     <Navigate to="/dashboard" replace />
    //   ) : (
    //     <RegisterPage {...props} />
    //   ),
    // },

    { path: "*", element: <NotFound /> },
  ]);

  return (
    <HelmetProvider>
      <SEO />
      <div>{routes}</div>
    </HelmetProvider>
  );
}
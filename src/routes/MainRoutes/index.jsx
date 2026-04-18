import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

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
    { path: "/transfer-home-loan", element: <TransferHomeLoan {...props} /> },
    { path: "/calculators", element: <Calculators {...props} /> },
    { path: "/calculators/:slug", element: <CalculatorsDetails {...props} /> },
    { path: "/premium-home-loan-categories/:slug", element: <PremiumHomeLoanCategoriesDetails {...props} /> },
    // { path: "/dashboard", element: <Dashboard {...props} /> },
    // { path: "/profile", element: <ProfilePage {...props} /> },
    // { path: "/subscription", element: <SubscriptionControlCenter {...props} /> },
    { path: "/communications", element: <CommunicationCenter {...props} /> },

    { path: "/home-loan/details/:slug", element: <HomeLoanDetail /> },
    { path: "/home-loan/property/:slug", element: <HomeLoanByProperty /> },
    { path: "/home-loan/amount/:slug", element: <HomeLoanByAmount /> },
    { path: "/home-loan/cibil/:slug", element: <HomeLoanByCibil /> },
    { path: "/home-loan/salary/:slug", element: <HomeLoanBySalary /> },
    { path: "/home-loan/profession/:slug", element: <HomeLoanByProfession /> },
    { path: "/home-loan/bhktype/:slug", element: <HomeLoanByBhkTypes /> },


    // {
    //   path: "/login",
    //   element: isAuth ? <Navigate to="/dashboard" replace /> : <LoginPage {...props} />,
    // },
    // {
    //   path: "/signup",
    //   element: isAuth ? <Navigate to="/dashboard" replace /> : <RegisterPage {...props} />,
    // },
  ]);

  return <div>{routes}</div>;
}

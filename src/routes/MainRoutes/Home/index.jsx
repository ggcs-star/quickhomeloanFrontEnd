import React, { useEffect, useState } from "react";
// import Solutions from "./components/Solutions";
// import Companies from "./components/Companies";
// import Largest from "./components/Largest";
// import Transformation from "./components/Transformation";
// import Customers from "./components/Customers";
// import Collaboration from "./components/Collaboration";
// import WhyChoose from "./components/WhyChoose"
// import BestSuitable from './components/BestSuitable'
import EmiCalculator from "./components/EmiCalculator";
import Compare from "./components/Compare";
import Tools from "./components/Tools";
import FAQ from "./components/FAQ";
import HeroSection2 from "./components/HeroSection2";
import Blogs from "./components/Blogs";
import StatsRow from "./components/StatsRow";
import AppPromoSection from "./components/AppPromoSection";
import TrendingLoans from "./components/TrendingLoans";
import FinancialCalculators from "./components/FinancialCalculators";
import CreditCardSection from "./components/CreditCardSection";
import LoanSteps from "./components/LoanSteps";
import FeaturedBlogs from "./components/FeaturedBlogs";
import LoanCalculators from "./components/LoanCalculators";
import HeroSection from "./components/HeroSection";
import QuickHomeLoan from "./components/QuickHomeLoan";
import HowItWorks from "./components/HowItWorks";
import TrustedPartners from "./components/TrustedPartners";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CallToActionSection from "./components/CallToActionSection";
import HomeLoanCategories from "./components/HomeLoanCategories";
import HomeLoanCalculators from "./components/HomeLoanCalculators";
import HomeLoanCards from "./components/HomeLoanCards";
import HeroSection3 from "./components/Herosection3";
import CategoriesSection from "./components/CategoriesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import LoanProcessSection from "./components/LoanProcessSection";
import ContactSection from "./components/ContactSection";
import RealEstatePosts from "./components/RealEstatePosts";
import HeroSection4 from "./components/HeroSection4";

export default function Home(props) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getStrokeDashoffset = () => {
    const circleLength = 2 * Math.PI * 24;
    return circleLength - (circleLength * scrollPercentage) / 100;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getStrokeColor = () => {
    return scrollPercentage > 0 ? "#22d1b6" : "gray";
  };

  return (
    <div className="font-proximaNova">
      <HeroSection4 {...props} />
      <TrustedPartners />
      <CategoriesSection />
      <WhyChooseUs />
      {/* <StatsRow/> */}
      {/* <HomeLoanCards/> */}
      {/* <HomeLoanCategories/> */}
      <HomeLoanCalculators />
      <LoanProcessSection />
      <RealEstatePosts/>
      <ContactSection />

      {/* <QuickHomeLoan />
      <EmiCalculator />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection/> */}

      {/* <AppPromoSection/>
      <TrendingLoans/>
      <LoanCalculators/> */}
      {/* <FinancialCalculators/> */}
      {/* <CreditCardSection/>
      <LoanSteps/>
      <FeaturedBlogs/> */}
      {/* <LoanVsFd/> */}

      {/* <Compare />
      <Tools />
      <LoanVsFd/> */}
      {/* <Blogs/>
      <FAQ/> */}
      {/* <Solutions />
      <Companies />
      <Largest />
      <Transformation />
      <Customers />
      <WhyChoose/>
      <BestSuitable />
      <Collaboration /> */}

      {/* {scrollPercentage > 0 && (
        <div
          className="back-to-top right-aligned primary-color scroll-position-style active"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span
            className="icon-arrow-up text-primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "20px",
              // color: primary,
            }}
          >
            ↑
          </span>

          <svg height="50" width="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="23"
              style={{
                fill: "none",
                stroke: getStrokeColor(),
                strokeWidth: "2",
                strokeDasharray: `${2 * Math.PI * 24}`,
                strokeDashoffset: getStrokeDashoffset(),
                transition: "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />

            <circle
              cx="25"
              cy="25"
              r="22"
              style={{
                fill: "rgba(0, 0, 0, 0.5)",
                strokeWidth: "2",
              }}
            />
          </svg>
        </div>
      )} */}

    </div>
  );
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { premiumHomeLoanCategoriesDetails } from "../../../db/premiumHomeLoanCategoriesDetails";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import EligibilityDocumentsSection from "./components/EligibilityDocumentsSection";
import TopBanksSection from "./components/TopBanksSection";
import LoanProgramsTaxSection from "./components/LoanProgramsTaxSection";
import CalculatorCaseStudySection from "./components/CalculatorCaseStudySection";
import EligibilityTipsFAQSection from "./components/EligibilityTipsFAQSection";
import { Container } from "../../../components/Layout";

const PremiumHomeLoanCategoriesDetails = () => {
  const { slug } = useParams();

  // ✅ Scroll to top whenever the slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const data = premiumHomeLoanCategoriesDetails.find(
    (item) => item.slug === slug
  );

  if (!data) {
    return (
      <Container className="py-28 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
        </h2>
      </Container>
    );
  }

  return (
    <Container className="py-28">
      <HeroSection data={data.heroSection} />
      <FeatureSection features={data.featureSection.features} />
      <EligibilityDocumentsSection {...data.eligibilityDocumentsSection} />
      <TopBanksSection banks={data.topBanksSection.banks} />
      <LoanProgramsTaxSection {...data.loanProgramsTaxSection} />
      <CalculatorCaseStudySection {...data.calculatorCaseStudySection} />
      <EligibilityTipsFAQSection {...data.eligibilityTipsFAQSection} />
    </Container>
  );
};

export default PremiumHomeLoanCategoriesDetails;

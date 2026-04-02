import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homeLoanByProfession } from "../../../db/homeLoanByProfession";

// Component imports
import HeroSection from "./components/HeroSection";
import DoctorBenefitsSection from "./components/DoctorBenefitsSection.JSX";
import DoctorEligibilitySection from "./components/DoctorEligibilitySection";
import DoctorComparisonSection from "./components/DoctorComparisonSection";
import DoctorRatesSection from "./components/DoctorRatesSection";
import DoctorEmiCalculatorSection from "./components/DoctorEmiCalculatorSection";
import DoctorTaxBenefitsSection from "./components/DoctorTaxBenefitsSection";
import DoctorApplicationProcessSection from "./components/DoctorApplicationProcessSection";
import DoctorEligibilitytwoSection from "./components/DoctorEligibilitytwoSection";
import DoctorFaqSection from "./components/DoctorFaqSection";
import DoctorApplySection from "./components/DoctorApplySection";
import DoctorWhyChooseSection from "./components/DoctorWhyChooseSection";

const HomeLoanByProfession = () => {
  const { slug } = useParams(); // Get slug from URL (e.g., doctor)
  const navigate = useNavigate();
  const [professionData, setProfessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // ✅ Since homeLoanByProfession is an ARRAY, find by slug
    const data = homeLoanByProfession.find((item) => item.slug === slug);

    if (!data) {
      navigate("/404", { replace: true }); // Redirect if not found
    } else {
      setProfessionData(data);
    }

    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!professionData) {
    return (
      <div className="text-center py-10 text-red-500">
        Profession not found. Please check the URL or go back.
      </div>
    );
  }

  return (
    <div className="text-gray-900">
      {/* 🏠 Hero Section */}
      {professionData.heroSection && (
        <HeroSection data={professionData.heroSection} />
      )}

      {professionData.doctorBenefitsSection && (
        <DoctorBenefitsSection data={professionData.doctorBenefitsSection} />
      )}

      {professionData.doctorEligibilitySection && (
        <DoctorEligibilitySection data={professionData.doctorEligibilitySection} />
      )}

      {professionData.doctorComparisonSection && (
        <DoctorComparisonSection data={professionData.doctorComparisonSection} />
      )}

      {professionData.doctorEmiCalculatorSection && (
        <DoctorEmiCalculatorSection data={professionData.doctorEmiCalculatorSection} />
      )}

      {professionData.doctorTaxBenefitsSection && (
        <DoctorTaxBenefitsSection data={professionData.doctorTaxBenefitsSection} />
      )}

      {professionData.doctorApplicationProcessSection && (
        <DoctorApplicationProcessSection
          data={professionData.doctorApplicationProcessSection}
        />
      )}

      {professionData.doctorEligibilitytwoSection && (
        <DoctorEligibilitytwoSection data={professionData.doctorEligibilitytwoSection} />
      )}
      {professionData.doctorWhyChooseSection && (
        <DoctorWhyChooseSection data={professionData.doctorWhyChooseSection} />
      )}
      {professionData.doctorFaqSection && (
        <DoctorFaqSection data={professionData.doctorFaqSection} />
      )}
      {professionData.doctorApplySection && (
        <DoctorApplySection data={professionData.doctorApplySection} />
      )}










    </div>
  );
};

export default HomeLoanByProfession;

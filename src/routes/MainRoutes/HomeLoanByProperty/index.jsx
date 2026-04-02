import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homeLoanByProperty } from "../../../db/homeLoanByProperty";

import { Container } from "../../../components/Layout";

// Component imports
import SixBHKHeroSection from "./components/SixBHKHeroSection";
import AboutSixBHKSection from "./components/AboutSixBHKSection";
import SixBHKFeaturesSection from "./components/SixBHKFeaturesSection";
import SixBHKEligibilitySection from "./components/SixBHkEligibilitySection";
import SixBHKInterestRatesSection from "./components/SixBHKInterestRatesSection";
import SixBHKEligibilityCalculator from "./components/SixBHKEligibilityCalculator";
import SixBHKEMICalculator from "./components/SixBHKEMICalculator";
import SixBHKTaxBenefitsSection from "./components/SixBHKTaxBenefitsSection";
import SixBHKWhyChooseSection from "./components/SixBHKWhyChooseSection";
import SixBHKApplySection from "./components/SixBHKApplySection";
import SixBHKLoanTipsSection from "./components/SixBHKLoanTipsSection";
import SixBHKFAQSection from "./components/SixBHKFAQSection";
import CustomerTestimonials from "../HomeLoanDetail/components/CustomerTestimonials";
import ContactSupport from "./components/ContactSupport";

const HomeLoanByProperty = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [propertyData, setpropertyData] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch data based on slug
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        const data = homeLoanByProperty.find((property) => property.slug === slug);

        if (!data) {
            navigate("/404", { replace: true });
        } else {
            setpropertyData(data);
        }

        setLoading(false);
    }, [slug, navigate]);

    // 🕐 Loading state
    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    // ❌ Not Found state
    if (!propertyData) {
        return (
            <div className="text-center py-10 text-red-500">
                Loan details not found. Please check the URL or go back.
            </div>
        );
    }

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen font-proximaNova text-gray-900">
                {/* 🏦 Hero Section */}
                {propertyData.heroSection && <SixBHKHeroSection data={propertyData.heroSection} />}
                <section className="my-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                        {/* 🧾 Left Column — EMI Calculator + Home Loan Products */}
                        <div className="w-full space-y-6">
                            {propertyData.aboutSection && <AboutSixBHKSection data={propertyData.aboutSection} />}
                            {propertyData.featuresSection && (<SixBHKFeaturesSection data={propertyData.featuresSection} />)}
                            {propertyData.eligibilityCalculator && (<SixBHKEligibilityCalculator data={propertyData.eligibilityCalculator} />)}
                            {propertyData.emiCalculator && (<SixBHKEMICalculator data={propertyData.emiCalculator} />)}

                            {propertyData.eligibilitySection && (
                                <SixBHKEligibilitySection data={propertyData.eligibilitySection} />
                            )}


                            {propertyData.interestRatesSection && (
                                <SixBHKInterestRatesSection data={propertyData.interestRatesSection} />
                            )}

                            {propertyData.taxBenefitsSection && (
                                <SixBHKTaxBenefitsSection data={propertyData.taxBenefitsSection} />
                            )}
                            {propertyData.whyChooseSection && (
                                <SixBHKWhyChooseSection data={propertyData.whyChooseSection} />
                            )}

                            {propertyData.applySection && (
                                <SixBHKApplySection data={propertyData.applySection} />
                            )}
                            {propertyData.loanTipsSection && (
                                <SixBHKLoanTipsSection data={propertyData.loanTipsSection} />
                            )}


                        </div>

                        <div className="w-full lg:sticky lg:top-34 self-start space-y-6">

                            {propertyData.contactSupport && (
                                <ContactSupport data={propertyData.contactSupport} />
                            )}

                            {propertyData.customerTestimonials && (
                                <CustomerTestimonials data={propertyData.customerTestimonials} />
                            )}
                            {propertyData.faqSection && (
                                <SixBHKFAQSection data={propertyData.faqSection} />
                            )}
                        </div>
                    </div>
                </section>
            </div>









        </div >
    );
};

export default HomeLoanByProperty;

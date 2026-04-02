import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeLoanByBhkTypes } from "../../../db/homeLoanByBhkTypes";
import HeroSection from "./components/HeroSection";
import { Container } from "../../../components/Layout";
import IntroSection from "./components/IntroSection";
import InterestRatesSection from "./components/InterestRatesSection";
import EmiCalculatorSection from "./components/EmiCalculatorSection";
import EligibilityCalculatorSection from "./components/EligibilityCalculatorSection";
import WhatIsPlotLoanSection from "./components/WhatIsPlotLoanSection";
import TypesAndBenefitsSection from "./components/TypesAndBenefitsSection";
import EligibilitySection from "./components/EligibilitySection";
import DocumentsSection from "./components/DocumentsSection";
import ComparisonSection from "./components/ComparisonSection";
import TaxBenefitsSection from "./components/TaxBenefitsSection";
import ApplyNowSection from "./components/ApplyNowSection";
import FaqsSection from "./components/FaqsSection";
import ContactSupport from "./components/ContactSupport";
import CustomerTestimonials from "./components/CustomerTestimonials";

const HomeLoanByBhkTypes = () => {
    const { slug } = useParams();
    const bhkLoan = homeLoanByBhkTypes.find((item) => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!bhkLoan) {
        return (
            <Container>
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Loan details not found.
                    </h2>
                </div>
            </Container>
        );
    }

    return (
        <div className="min-h-screen font-proximaNova">
            <Container>
                {/* Hero Section */}
                {bhkLoan.heroSection && <HeroSection data={bhkLoan.heroSection} />}
                <section className="my-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                        <div className="w-full space-y-6">


                            {bhkLoan.introSection && <IntroSection data={bhkLoan.introSection} />}
                            {bhkLoan.interestRatesSection && <InterestRatesSection data={bhkLoan.interestRatesSection} />}
                            {bhkLoan.emiCalculatorSection && <EmiCalculatorSection data={bhkLoan.emiCalculatorSection} />}
                            {bhkLoan.eligibilityCalculatorSection && <EligibilityCalculatorSection data={bhkLoan.eligibilityCalculatorSection} />}
                            {bhkLoan.whatIsPlotLoanSection && <WhatIsPlotLoanSection data={bhkLoan.whatIsPlotLoanSection} />}
                            {bhkLoan.typesAndBenefitsSection && <TypesAndBenefitsSection data={bhkLoan.typesAndBenefitsSection} />}
                            {bhkLoan.eligibilitySection && <EligibilitySection data={bhkLoan.eligibilitySection} />}
                            {bhkLoan.documentsSection && <DocumentsSection data={bhkLoan.documentsSection} />}
                            {bhkLoan.comparisonSection && <ComparisonSection data={bhkLoan.comparisonSection} />}
                            {bhkLoan.taxBenefitsSection && <TaxBenefitsSection data={bhkLoan.taxBenefitsSection} />}
                            {bhkLoan.applyNowSection && <ApplyNowSection data={bhkLoan.applyNowSection} />}
                        </div>

                        <div className="w-full lg:sticky lg:top-34 self-start space-y-6">
                            {bhkLoan.contactSupport && (
                                <ContactSupport data={bhkLoan.contactSupport} />
                            )}

                            {bhkLoan.customerTestimonials && (
                                <CustomerTestimonials data={bhkLoan.customerTestimonials} />
                            )}

                            {bhkLoan.faqsSection && <FaqsSection data={bhkLoan.faqsSection} />}
                        </div>
                    </div>
                </section>





            </Container>
        </div>
    );
};

export default HomeLoanByBhkTypes;

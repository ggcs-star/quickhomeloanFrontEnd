import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeLoanBySalary } from "../../../db/homeLoanBySalary";
import SalaryHeroSection from "./components/SalaryHeroSection";

import { Container } from "../../../components/Layout";
import SalaryQuickStats from "./components/SalaryQuickStats";
import SalaryEligibilityCriteria from "./components/SalaryEligibilityCriteria";
import SalaryEmiAndOffers from "./components/SalaryEmiAndOffers.JSX";
import SalaryDocumentsSection from "./components/SalaryDocumentsSection";
import SalaryTipsSection from "./components/SalaryTipsSection";
import SalaryFAQSection from "./components/SalaryFAQSection";
import SalaryCTASection from "./components/SalaryCTASection";
import ContactSupport from "./components/ContactSupport";
import CustomerTestimonials from "./components/CustomerTestimonials";

export default function HomeLoanBySalary() {
    const { slug } = useParams();
    const loan = homeLoanBySalary.find((l) => l.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!loan) {
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
        <div className="min-h-screen bg-gray-50 font-proximaNova">

            {/* Hero Section */}
            {loan.heroSection && <SalaryHeroSection data={loan.heroSection} />}
            {loan.summaryStats && <SalaryQuickStats data={loan.summaryStats} />}

            <section className="py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                    <div className="w-full space-y-6">
                        {loan.eligibilityCriteriaSection && <SalaryEligibilityCriteria data={loan.eligibilityCriteriaSection} />}
                        {loan.emiAndOffersSection && <SalaryEmiAndOffers data={loan.emiAndOffersSection} />}
                        {loan.documentsSection && <SalaryDocumentsSection data={loan.documentsSection} />}
                        {loan.tipsSection && <SalaryTipsSection data={loan.tipsSection} />}
                        {loan.ctaSection && <SalaryCTASection data={loan.ctaSection} />}
                    </div>

                    <div className="w-full lg:sticky lg:top-34 self-start space-y-6">

                        {loan.contactSupport && (
                            <ContactSupport data={loan.contactSupport} />
                        )}

                        {loan.customerTestimonials && (
                            <CustomerTestimonials data={loan.customerTestimonials} />
                        )}
                        {loan.faqSection && <SalaryFAQSection data={loan.faqSection} />}
                    </div>

                </div>
            </section>







        </div>
    );
}
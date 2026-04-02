import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homeLoanData } from "../../../db/homeLoanData";
import { Container } from "../../../components/Layout";

// Component imports
import SBIHeroSection from "./components/SBIHeroSection";
import SBIHighlightsSection from "./components/SBIHighlightsSection";
import EMICalculator from "./components/EMICalculator";
import EligibilityCalculator from "./components/EligibilityCalculator";
import ContactSupport from "./components/ContactSupport";
import CustomerTestimonials from "./components/CustomerTestimonials";
import FAQSection from "./components/FAQSection";
import HomeLoanProducts from "./components/HomeLoanProducts";
import InterestRateTrend from "./components/InterestRateTrend";
import HowToApply from "./components/HowToApply";
import RequiredDocuments from "./components/RequiredDocuments";
import FeesAndCharges from "./components/FeesAndCharges";
import KnowledgeCenter from "./components/KnowledgeCenter";

const HomeLoanDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loanData, setLoanData] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch data based on slug
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        const data = homeLoanData.find((loan) => loan.slug === slug);

        if (!data) {
            navigate("/404", { replace: true });
        } else {
            setLoanData(data);
        }

        setLoading(false);
    }, [slug, navigate]);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!loanData) {
        return (
            <div className="text-center py-10 text-red-500">
                Loan details not found. Please check the URL or go back.
            </div>
        );
    }

    return (
        <div className="">
                <div className="min-h-screen lg:pt-28 font-proximaNova text-gray-900">
                    {/* 🏦 Hero Section */}
                    {loanData.heroSection && <SBIHeroSection data={loanData.heroSection} />}

                    {/* 🌟 Highlights */}
                    {loanData.highlightsSection && (
                        <SBIHighlightsSection data={loanData.highlightsSection} />
                    )}

                    {/* 🧮 EMI + Eligibility Section */}
                    <section className="my-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start">
                            {/* 🧾 Left Column — EMI Calculator + Home Loan Products */}
                            <div className="w-full space-y-6">
                                {loanData.emiCalculator && (
                                    <EMICalculator data={loanData.emiCalculator} />
                                )}

                                {loanData.homeLoanProducts && (
                                    <HomeLoanProducts data={loanData.homeLoanProducts} />
                                )}

                                {loanData.interestRateTrend && (
                                    <InterestRateTrend data={loanData.interestRateTrend} />
                                )}
                                {loanData.howToApply && <HowToApply data={loanData.howToApply} />}
                                {loanData.requiredDocuments && (
                                    <RequiredDocuments data={loanData.requiredDocuments} />
                                )}
                                {loanData.feesAndCharges && (
                                    <FeesAndCharges data={loanData.feesAndCharges} />
                                )}
                                {loanData.knowledgeCenter && (
                                    <KnowledgeCenter data={loanData.knowledgeCenter} />
                                )}
                            </div>

                            {/* 👤 Right Column — Sticky Sidebar */}
                            {loanData.eligibilityCalculator && (
                                <div className="w-full lg:sticky lg:top-34 self-start space-y-6">
                                    <EligibilityCalculator data={loanData.eligibilityCalculator} />

                                    {loanData.contactSupport && (
                                        <ContactSupport data={loanData.contactSupport} />
                                    )}

                                    {loanData.customerTestimonials && (
                                        <CustomerTestimonials data={loanData.customerTestimonials} />
                                    )}

                                    {loanData.faqSection && (
                                        <FAQSection data={loanData.faqSection} />
                                    )}
                                </div>
                            )}
                        </div>
                    </section>

                </div>
        </div>
    );
};

export default HomeLoanDetail;

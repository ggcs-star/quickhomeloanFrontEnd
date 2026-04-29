import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homeLoanData } from "../../../db/homeLoanData";
import { Container } from "../../../components/Layout";
import { BASE_URL } from "../../../api";

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

        const fetchDynamicData = async () => {
            const data = homeLoanData.find((loan) => loan.slug === slug);

            if (!data) {
                navigate("/404", { replace: true });
                return;
            }

            // Clone data to allow overriding the calculator's defaultInterestRate safely
            let updatedData = { ...data };
            if (updatedData.emiCalculator) {
                updatedData.emiCalculator = { ...updatedData.emiCalculator };
                if (updatedData.emiCalculator.interestRange) {
                    updatedData.emiCalculator.interestRange = { ...updatedData.emiCalculator.interestRange };
                }
            }

            try {
                const bankKey = updatedData.title.toLowerCase().replace("home loan", "").trim();
                const res = await fetch(`${BASE_URL}/lenders`);
                const json = await res.json();

                if (json?.status && json?.data) {
                    const lender = json.data.find((item) => {
                        const apiName = item.name.toLowerCase();
                        return apiName.includes(bankKey) || bankKey.includes(apiName.split(" ")[0]);
                    });

                    const finalLender = lender || json.data.find((item) => item.name.toLowerCase().includes("state bank of india"));

                    if (finalLender && finalLender.rate && updatedData.emiCalculator) {
                        const numericRate = parseFloat(finalLender.rate);
                        if (!isNaN(numericRate)) {
                            updatedData.emiCalculator.defaultInterestRate = numericRate;
                            
                            // Automatically adjust the slider's max range if dynamic rate exceeds it
                            if (updatedData.emiCalculator.interestRange && numericRate > updatedData.emiCalculator.interestRange.max) {
                                updatedData.emiCalculator.interestRange.max = Math.ceil(numericRate + 5);
                            }
                        }
                    }
                }
            } catch (error) {
                console.error("API error while fetching rate for EMI Calculator:", error);
            }

        // Allow users to explore interest rates up to 100%
        if (updatedData.emiCalculator && updatedData.emiCalculator.interestRange) {
            updatedData.emiCalculator.interestRange.max = 100;
        }

            setLoanData(updatedData);
            setLoading(false);
        };

        fetchDynamicData();
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
                    <SBIHighlightsSection slug={slug} />

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

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeLoanByAmount } from "../../../db/homeLoanByAmount";
import HeroSection from "./components/HeroSection";
import EMISection from "./components/EMISection";
import EligibilitySection from "./components/EligibilitySection";
import BanksComparison from "./components/BanksComparison";
import DocumentsSection from "./components/DocumentsSection";
import ProTipsSection from "./components/ProTipsSection";
import FAQSection from "./components/FAQSection";
import ActionPlan from "./components/ActionPlan";
import { Container } from "../../../components/Layout";

export default function HomeLoanByAmount() {
    const { slug } = useParams();
    const loan = homeLoanByAmount.find((l) => l.slug === slug);

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
        <div className="min-h-screen bg-gray-50 !font-proximaNova">
            {/* Hero Section */}
            {loan.heroSection && <HeroSection data={loan.heroSection} />}

            {/* EMI Section */}
            {loan.emiSection && <EMISection data={loan.emiSection} />}

            {/* Eligibility Section */}
            {loan.eligibilitySection && <EligibilitySection data={loan.eligibilitySection} />}

            {/* Banks Comparison */}
            {loan.banksComparison && <BanksComparison data={loan.banksComparison} />}

            {/* Documents Section */}
            {loan.documentsSection && <DocumentsSection data={loan.documentsSection} />}

            {/* Pro Tips Section */}
            {loan.proTipsSection && <ProTipsSection data={loan.proTipsSection} />}

            {/* FAQ Section */}
            {loan.faqSection && <FAQSection data={loan.faqSection} />}

            {/* Action Plan */}
            {loan.actionPlan && <ActionPlan data={loan.actionPlan} />}
        </div>
    );
}
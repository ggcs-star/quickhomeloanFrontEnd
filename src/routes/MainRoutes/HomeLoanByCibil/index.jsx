import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeLoanByCibil } from "../../../db/homeLoanByCibil";
// import HeroSection from "./components/HeroSection";
import CibilAssessment from "./components/CibilAssessment";
import CibilEMICalculator from "./components/CibilEMICalculator";
import ApplicationSteps from "./components/ApplicationSteps";
// import LendersComparison from "./components/LendersComparison";
import AdditionalFactors from "./components/AdditionalFactors";
import ScoreImprovement from "./components/ScoreImprovement";
import ApprovalTips from "./components/ApprovalTips";
// import FAQSection from "./components/FAQSection";
// import ActionPlan from "./components/ActionPlan";
import { Container } from "../../../components/Layout";

export default function HomeLoanByCibil() {
    const { slug } = useParams();
    const loan = homeLoanByCibil.find((l) => l.slug === slug);

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
        <div className="bg-gray-50 min-h-screen font-proximaNova">
            <Container>
                {/* Hero Section */}
                {/* {loan.heroSection && <HeroSection data={loan.heroSection} />} */}

                {/* CIBIL Assessment */}
                {loan.cibilAssessment && <CibilAssessment data={loan.cibilAssessment} />}

                {/* EMI Calculator */}
                {loan.emiSection && <CibilEMICalculator data={loan.emiSection} />}

                {/* Application Steps */}
                {loan.applicationSteps && <ApplicationSteps data={loan.applicationSteps} />}

                {/* Lenders Comparison */}
                {/* {loan.lendersComparison && <LendersComparison data={loan.lendersComparison} />} */}

                {/* Additional Factors */}
                {loan.additionalFactors && <AdditionalFactors data={loan.additionalFactors} />}

                {/* Score Improvement */}
                {loan.scoreImprovement && <ScoreImprovement data={loan.scoreImprovement} />}

                {/* Approval Tips */}
                {loan.approvalTips && <ApprovalTips data={loan.approvalTips} />}

                {/* FAQ Section */}
                {/* {loan.faqSection && <FAQSection data={loan.faqSection} />} */}

                {/* Action Plan */}
                {/* {loan.actionPlan && <ActionPlan data={loan.actionPlan} />} */}
            </Container>
        </div>
    );
}
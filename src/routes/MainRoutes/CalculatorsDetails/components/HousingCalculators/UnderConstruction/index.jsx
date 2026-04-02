import React from 'react'
import UnderConstructionVsReadyCalculatorIntro from './components/UnderConstructionVsReadyCalculatorIntro'
import FinancialComparisonCalculator from './components/FinancialComparisonCalculator'
import CalculatorCapabilities from './components/CalculatorCapabilities'
import WhenToUseCalculator from './components/WhenToUseCalculator'
import { Container } from '../../../../../../components/Layout'
import HowToUseCalculator from './components/HowToUseCalculator'
import ExampleScenarios from './components/ExampleScenarios'
import UnderstandingResults from './components/UnderstandingResults'
import CalculatorTechnicalBreakdown from './components/CalculatorTechnicalBreakdown'
import PracticalApplications from './components/PracticalApplications'
import CalculatorFAQs from './components/CalculatorFAQs.JSX'
import ProTipsAndRecommendations from './components/ProTipsAndRecommendations'
import CalculatorConclusion from './components/CalculatorConclusion'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const UnderConstruction = () => {
    return (
        <div>
            <CalculatorHeader
            className='mt-40'
                title="Under Construction vs Ready-To-Move Calculator"
                subtitle="A professional-grade financial calculator to determine the true cost of ownership for under-construction versus ready-to-move properties."
                description="Compare pricing, payment schedules, risk factors, tax benefits, and opportunity costs to make a well-informed property purchase decision."
            />
            <Container>
                <FinancialComparisonCalculator />
                <CalculatorCapabilities />
                <WhenToUseCalculator />
                <HowToUseCalculator />
                <ExampleScenarios />
                <UnderstandingResults />
                <CalculatorTechnicalBreakdown />
                <PracticalApplications />
                <CalculatorFAQs />
                <ProTipsAndRecommendations />
                <CalculatorConclusion />
            </Container>
        </div>
    )
}

export default UnderConstruction
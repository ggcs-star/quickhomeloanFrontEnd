import React from 'react'
import RealReturnsHeader from './components/RealReturnsHeader'
import RealReturnsCalculatorSection from './components/RealReturnsCalculatorSection'
import WhatThisCalculatorDoes from './components/WhatThisCalculatorDoes'
import HowToUseStepByStep from './components/HowToUseStepByStep.JSX'
import WhenToUseCalculator from './components/WhenToUseCalculator'
import ExampleScenarioExplained from './components/ExampleScenarioExplained'
import UnderstandingTheResults from './components/UnderstandingTheResults'
import HowThisCalculatorWorksMath from './components/HowThisCalculatorWorksMath'
import PracticalApplications from './components/PracticalApplications'
import FAQSection from './components/FAQSection.JSX'
import ProTipSection from './components/ProTipSection'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const RealReturns = () => {
    return (
        <div>
            <CalculatorHeader
            className='mt-40'
                title="Real Returns After Tax Calculator"
                subtitle="Calculate the true value of your investments after accounting for taxes and inflation to understand their real purchasing power."
                description="Evaluate after-tax returns, inflation-adjusted future value, and real rate of return to see how much your investments are truly worth in today’s terms."
            />
            <Container>
                <RealReturnsCalculatorSection />
                <WhatThisCalculatorDoes />
                <WhenToUseCalculator />
                <HowToUseStepByStep />
                <ExampleScenarioExplained />
                <UnderstandingTheResults />
                <HowThisCalculatorWorksMath />
                <PracticalApplications />
                <FAQSection />
                <ProTipSection />
            </Container>
        </div>
    )
}

export default RealReturns
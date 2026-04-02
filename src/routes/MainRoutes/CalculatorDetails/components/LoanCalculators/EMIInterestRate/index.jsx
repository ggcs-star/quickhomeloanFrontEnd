import React from 'react'
import TrueInterestRateHeader from './components/TrueInterestRateHeader'
import InterestRateCalculatorCard from './components/InterestRateCalculatorCard'
import WhatThisCalculatorDoes from './components/WhatThisCalculatorDoes'
import WhenToUseCalculator from './components/WhenToUseCalculator'
import HowToUseStepByStep from './components/HowToUseStepByStep'
import ExampleScenarios from './components/ExampleScenarios'
import UnderstandingTheResults from './components/UnderstandingTheResults'
import HowThisCalculatorWorks from './components/HowThisCalculatorWorks'
import PracticalApplications from './components/PracticalApplications'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions'
import ProTip from './components/ProTip'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const EMIInterestRate = () => {
    return (
        <div>
            <CalculatorHeader
                className='mt-40'
                title="True Interest Rate Calculator"
                subtitle="Uncover the exact interest rate on any loan using a reverse EMI calculator with bank-accurate results."
                description="Reverse-calculate the effective interest rate from EMI, tenure, and loan amount to verify lender quotations and hidden costs."
            />
            <Container>
                <InterestRateCalculatorCard />
                <WhatThisCalculatorDoes />
                <WhenToUseCalculator />
                <HowToUseStepByStep />
                <ExampleScenarios />
                <UnderstandingTheResults />
                <HowThisCalculatorWorks />
                <PracticalApplications />
                <FrequentlyAskedQuestions />
                <ProTip />
            </Container>
        </div>
    )
}

export default EMIInterestRate
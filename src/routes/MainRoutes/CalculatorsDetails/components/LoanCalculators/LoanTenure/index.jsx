import React from 'react'
import LoanTenureCalculatorHeader from './components/LoanTenureCalculatorHeader'
import LoanTenureCalculatorCard from './components/LoanTenureCalculatorCard'
import { Container } from '../../../../../../components/Layout'
import WhatThisCalculatorDoes from './components/WhatThisCalculatorDoes'
import WhenToUseThisCalculator from './components/WhenToUseThisCalculator'
import HowToUseStepByStep from './components/HowToUseStepByStep'
import ExampleScenariosWithCalculations from './components/ExampleScenariosWithCalculations'
import UnderstandingTheResults from './components/UnderstandingTheResults'
import HowThisCalculatorWorks from './components/HowThisCalculatorWorks'
import PracticalApplications from './components/PracticalApplications'
import ProTips from './components/ProTips'
import LoanTenureFAQ from './components/LoanTenureFAQ'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const LoanTenure = () => {
    return (
        <div>
<CalculatorHeader
className='mt-40'
  title="Loan Tenure Calculator"
  subtitle="Calculate the exact loan duration based on your EMI, interest rate, and loan amount using bank-accurate formulas."
  description="Understand how changes in EMI or interest rate affect your total loan tenure and long-term interest outflow."
/>
            <Container>
                <LoanTenureCalculatorCard />
                <HowToUseStepByStep />
                <WhatThisCalculatorDoes />
                <WhenToUseThisCalculator />
                <ExampleScenariosWithCalculations/>
                <UnderstandingTheResults/>
                <HowThisCalculatorWorks/>
                <PracticalApplications/>
                <LoanTenureFAQ/>
                <ProTips/>
            </Container>
        </div>
    )
}

export default LoanTenure
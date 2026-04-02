import React from 'react'
import PrepaymentVsInvestmentCalculator from './components/PrepaymentVsInvestmentCalculator'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'
import WhatThisCalculatorDoes from './components/WhatThisCalculatorDoes'
import WhenToUseCalculator from './components/WhenToUseCalculator'
import HowToUseCalculator from './components/HowToUseCalculator'
import UnderstandingTheResults from './components/UnderstandingTheResults'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions'
import ProTips from './components/ProTips'
import ExampleScenariosWithCalculations from './components/ExampleScenariosWithCalculations'

const HomeLoanPrepay = () => {
  return (
    <div className='mt-40'>
      <CalculatorHeader
        title="Home Loan Prepayment Calculator"
        subtitle="Reduce EMI or Tenure & Save Lakhs on Interest!"
        description="Compare guaranteed interest savings from prepayment against potential post-tax investment returns to make a rational, risk-adjusted decision."
      />
      <Container>
        <PrepaymentVsInvestmentCalculator />
        <WhatThisCalculatorDoes/>
        <WhenToUseCalculator/>
        <HowToUseCalculator/>  
        <ExampleScenariosWithCalculations/> 
        <UnderstandingTheResults/>
        <FrequentlyAskedQuestions/>
        <ProTips/>
      </Container>
    </div>
  )
}

export default HomeLoanPrepay
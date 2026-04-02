import React from 'react'
import LoanInterestVsSWPCalculator from './components/LoanInterestVsSWPCalculator'
import LoanInterestVsSWPInfo from './components/LoanInterestVsSWPInfo'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'
import LoanVsSWPComparisonTable from './components/LoanVsSWPComparisonTable'

const LoanInterestVsSWPInterestorg = () => {
  return (
    <>
      <CalculatorHeader
      className='mt-40'
        title="Loan Interest vs. SWP Interest Calculator"
        subtitle="Evaluate whether servicing your loan EMIs through a Systematic Withdrawal Plan (SWP) from your Fixed Deposit is financially viable."
        description="This calculator determines the FD interest rate required to sustain monthly withdrawals equal to your loan EMI without prematurely exhausting your deposit."
      />

      <Container>
        <LoanInterestVsSWPCalculator />
        <LoanInterestVsSWPInfo />
        <LoanVsSWPComparisonTable/>
      </Container>
    </>
  )
}

export default LoanInterestVsSWPInterestorg
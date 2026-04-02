import React from 'react'
import FDBreakVsLoanHeader from './components/FDBreakVsLoanHeader'
import FDBreakVsLoanCalculatorInputs from './components/FDBreakVsLoanCalculatorInputs'
import HowToUseFDBreakVsLoan from './components/HowToUseFDBreakVsLoan.JSX'
import WhenToUseFDBreakVsLoan from './components/WhenToUseFDBreakVsLoan'
import FDBreakVsLoanDetailedExample from './components/FDBreakVsLoanDetailedExample'
import FDBreakVsLoanConclusion from './components/FDBreakVsLoanConclusion'
import FDBreakVsLoanUnderstandingResults from './components/FDBreakVsLoanUnderstandingResults'
import FDBreakVsLoanProTips from './components/FDBreakVsLoanProTips.JSX'
import FDBreakVsLoanFAQ from './components/FDBreakVsLoanFAQ'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const LoanInterestVsFdInterest = () => {
    return (
        <div>
            <CalculatorHeader
                className='mt-40'
                title="FD Break vs Loan Calculator"
                subtitle="Should you break your Fixed Deposit or take a loan? Compare the total cost of borrowing versus the opportunity cost of breaking your FD to get a clear recommendation."
                description="Evaluate loan interest outflow against lost fixed deposit returns to determine the more financially efficient choice."
            />
            <Container>
                <FDBreakVsLoanCalculatorInputs />
                {/* <FDBreakVsLoanIntro /> */}
                <HowToUseFDBreakVsLoan />
                <WhenToUseFDBreakVsLoan />
                <FDBreakVsLoanDetailedExample />
                <FDBreakVsLoanConclusion />
                <FDBreakVsLoanUnderstandingResults />
                <FDBreakVsLoanFAQ />
                <FDBreakVsLoanProTips />

            </Container>
        </div>
    )
}

export default LoanInterestVsFdInterest
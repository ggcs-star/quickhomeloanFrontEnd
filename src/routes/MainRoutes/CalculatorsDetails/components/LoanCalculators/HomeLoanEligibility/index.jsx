import React from 'react'
import LoanEligibilityHeader from './components/LoanEligibilityHeader'
import LoanEligibilityPage from './components/LoanEligibilityPage'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const HomeLoanEligibility = () => {
    return (
        <div>
<CalculatorHeader
className='mt-40'
  title="Loan Eligibility Calculator"
  subtitle="Find the maximum loan amount you qualify for based on your income and financial profile."
  description="Estimate your home, car, or personal loan eligibility by factoring in income, existing EMIs, and ongoing financial commitments."
/>
            <Container className='my-20'>
                <LoanEligibilityPage />
            </Container>
        </div>
    )
}

export default HomeLoanEligibility
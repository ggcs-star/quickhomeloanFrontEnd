import React from 'react'
import PropertyInvestmentCalculator from './components/PropertyInvestmentCalculator'
import { Container } from '../../../../../../components/Layout'
import CalculatorExplanationSection from './components/CalculatorExplanationSection'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const PropertyInvestments = () => {
  return (
    <>
    <CalculatorHeader
    className='mt-40'
  title="Property Investment vs EMI Calculator"
  subtitle="Compare property investment returns with ongoing EMI outflows to evaluate long-term financial impact."
  description="Analyze rental income, property appreciation, and loan repayment costs to determine whether investing in property or servicing EMIs delivers better financial outcomes."
/>

    <Container className='mt-28'>
        <PropertyInvestmentCalculator/>
        <CalculatorExplanationSection/>
    </Container>
    </>
  )
}

export default PropertyInvestments
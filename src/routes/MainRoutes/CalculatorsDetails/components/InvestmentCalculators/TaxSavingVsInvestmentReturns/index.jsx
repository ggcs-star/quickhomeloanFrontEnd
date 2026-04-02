import React from 'react'
import TaxVsInvestmentCalculator from './components/TaxVsInvestmentCalculator.JSX'
import { Container } from '../../../../../../components/Layout'
import TaxCalculatorGuide from './components/TaxCalculatorGuide'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const TaxSavingVsInvestmentReturns = () => {
    return (
        <div>
<CalculatorHeader
className='mt-40'
  title="Tax Savings vs Investment Returns Calculator"
  subtitle="Compare tax-saving benefits with real investment returns to make smarter, data-driven financial decisions."
  description="Evaluate effective post-tax returns against tax deductions to determine whether saving taxes or investing surplus funds delivers better financial outcomes."
/>
            <Container>
                <TaxVsInvestmentCalculator />
                <TaxCalculatorGuide/>
            </Container>
        </div>
    )
}

export default TaxSavingVsInvestmentReturns
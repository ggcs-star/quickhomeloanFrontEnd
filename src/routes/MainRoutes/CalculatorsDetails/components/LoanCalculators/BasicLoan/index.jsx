import React from 'react'
import EmiCalculatorHeader from './components/EmiCalculatorHeader'
import EmiCalculator from './components/EmiCalculator'
import EmiCalculatorContent from './components/EmiCalculatorContent'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'

const BasicLoan = () => {
    return (
        <div>
            <CalculatorHeader
            className='mt-40'
                title="EMI Calculator"
                subtitle="Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans in seconds. Our easy-to-use calculator helps you plan your loan repayments with precision."
                description="Enter the loan amount, interest rate, and tenure to instantly find out your monthly EMI, total interest payable, and the total repayment amount."
            />
            <Container className='my-8'>
                <EmiCalculator />
                <EmiCalculatorContent />
            </Container>
        </div>
    )
}

export default BasicLoan
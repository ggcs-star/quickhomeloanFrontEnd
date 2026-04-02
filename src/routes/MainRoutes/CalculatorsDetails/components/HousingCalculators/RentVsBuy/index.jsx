import React from 'react'
import RentVsBuyHeader from './components/RentVsBuyHeader'
import RentVsBuyCalculatorLayout from './components/RentVsBuyCalculatorLayout'
import { Container } from '../../../../../../components/Layout'
import CalculatorHeader from '../../../../../../components/CalculatorHeader'
import RentVsBuyCalculator from './components/RentVsBuyCalculator'
import HowToUseRentVsBuy from './components/HowToUseRentVsBuy.JSX'
import WhyRentVsBuy from './components/WhyRentVsBuy'
import RentVsBuyFAQ from './components/RentVsBuyFAQ'
import RentVsBuyProTips from './components/RentVsBuyProTips'
import RentVsBuyExplanation from './components/RentVsBuyExplanation'
import RentVsBuyDeepDive from './components/RentVsBuyDeepDive'

const RentVsBuy = () => {
  return (
    <Container className='my-20'>
      <CalculatorHeader
        className='mt-40'
        title="Rent vs Buy Calculator"
        subtitle="Make a data-driven decision between renting a home and buying one using a comprehensive financial simulation."
        description="Compare long-term costs, investment returns, and lifestyle factors to determine whether renting or buying aligns better with your financial goals."
      />
      <RentVsBuyCalculator />
      <HowToUseRentVsBuy />
      <WhyRentVsBuy />
      <RentVsBuyExplanation/>
      <RentVsBuyDeepDive/>
      <RentVsBuyFAQ />
      <RentVsBuyProTips />
      {/* <RentVsBuyCalculatorLayout /> */}
    </Container>
  )
}

export default RentVsBuy
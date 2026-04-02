import React from 'react'
import BankRatesTable from './components/BankRatesTable'
import { Container } from '../../../components/Layout'
import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import WhyInterestRatesMatter from './components/WhyInterestRatesMatter'
import InterestRatesSnapshot from './components/InterestRatesSnapshot'
import EmiCalculator from './components/EmiCalculator'
import InterestRateTypes from './components/InterestRateTypes'
import HistoricalInterestRates from './components/HistoricalInterestRates'
import Glossary from './components/Glossary'
import HomeLoanChecklist from './components/HomeLoanChecklist'
import FAQ from './components/FAQ'

const BankRates = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className='font-proximaNova'>
      <HeroSection/>
      <WhyInterestRatesMatter/>
      <InterestRatesSnapshot/>
      <EmiCalculator/>
      <InterestRateTypes/>
      <HistoricalInterestRates/>
      <Glossary/>
      <HomeLoanChecklist/>
      <FAQ/>
      {/* <BankRatesTable /> */}
    </Container>
  )
}

export default BankRates
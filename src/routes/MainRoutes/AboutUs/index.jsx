import React from 'react'
import AboutUsPage from './components/AboutUsPage'
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='font-proximaNova'>
      <AboutUsPage />
    </div>
  )
}

export default AboutUs
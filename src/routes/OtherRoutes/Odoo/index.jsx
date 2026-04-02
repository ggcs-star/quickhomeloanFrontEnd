import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import Features from './components/Features'
import Level from './components/Level'
import Optimize from './components/Optimize'
import AllTheTech from './components/AllTheTech'
import Enterprise from './components/Enterprise'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'

const Odoo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='font-axiforma'>
      {/* <Navbar/>
      <HeroSection/>
      <Features/>
      <Level/> */}


      {/* <AllTheTech/>
      <Enterprise/>
      <Testimonial/>
      <CallToAction/> */}
    </div>
  )
}

export default Odoo
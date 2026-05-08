import React from 'react'
import TopUpHomeLoanComponent from './components/TopUpHomeLoanComponent'
import { useEffect } from 'react';

const TopUpHomeLoan = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // use "auto" if you want instant
    });
  }, []);


  return (
    <div className="font-proximaNova">
      <TopUpHomeLoanComponent />
    </div>
  )
}

export default TopUpHomeLoan
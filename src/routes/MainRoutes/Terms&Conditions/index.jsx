import React from 'react'
import TermsAndConditions from './components/TermsAndConditions'
import { useEffect } from 'react';

const TermsConditions = () => {

   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // use "auto" if you want instant
      });
    }, []);

  return (
    <div>
        <TermsAndConditions/>
    </div>
  )
}

export default TermsConditions
import React from 'react'
import DisclaimerPage from './components/DisclaimerPage'
import { useEffect } from 'react';

const Disclaimer = () => {

   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // use "auto" if you want instant
      });
    }, []);

  return (
    <div>
        <DisclaimerPage/>
    </div>
  )
}

export default Disclaimer
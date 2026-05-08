import React from 'react'
import TransferHomeLoanComponent from './components/TransferHomeLoanComponent'
import { useEffect } from 'react';

const TransferHomeLoan = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // use "auto" if you want instant
        });
      }, []);

  return (
    <div>
        <TransferHomeLoanComponent />
    </div>
  )
}

export default TransferHomeLoan
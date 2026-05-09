import React from 'react'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <PrivacyPolicyPage/>
    </div>
  )
}

export default PrivacyPolicy
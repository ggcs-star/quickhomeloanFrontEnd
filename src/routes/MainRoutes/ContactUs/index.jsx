import React from 'react'
import ContactUsPage from './components/ContactUsPage'
import { useEffect } from 'react';

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-proximaNova">
      <ContactUsPage />
    </div>
  )
}

export default ContactUs
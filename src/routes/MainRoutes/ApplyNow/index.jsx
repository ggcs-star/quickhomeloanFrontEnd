import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';

const ApplyNow = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="font-proximaNova my-20">
      <HeroSection />
    </div>
  );
};

export default ApplyNow;

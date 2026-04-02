import React from 'react';
import cibil from '../../../../assets/miscellaneous/cibil.svg';
import backgroundImage from '../../../../assets/miscellaneous/bg-cibil-image.webp';
import backgroundImageMobile from '../../../../assets/miscellaneous/mobilebackcibil.jpeg';
import { PrimaryBtn } from '../../../../components/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";


const AppPromoSection = () => {
  return (
    <div className="bg-white lg:h-full">
      <div className="relative z-10">
        <div className="hidden lg:flex justify-center items-center text-center bg-transparent">
          <div
            className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 rounded-3xl lg:w-[950px] xl:w-[1280px] lg:h-[150px] bg-contain bg-no-repeat bg-center overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Image Block */}
            <div className="order-2 lg:order-1 w-full lg:w-auto flex justify-center lg:justify-start z-10 h-full max-h-[150px] overflow-hidden">
              <img
                src={cibil}
                alt="CIBIL Score"
                className="h-24 object-contain"
              />
            </div>

            {/* Text Block */}
            <div className="order-1 lg:order-2 flex flex-col items-start justify-start text-white py-4 px-4 z-10 text-start">
              <div className="text-base lg:text-2xl font-medium leading-snug">
                Get your CIBIL Credit Report{" "}
                <span className="line-through text-yellow-400 font-semibold">
                  worth ₹500
                </span>{" "}
                <span className="text-yellow-400 font-semibold">for FREE</span>
              </div>
              <div className="mt-2 text-xl text-gray-200">
                5 Lac+ people have already checked their Credit Scores for FREE!
              </div>
            </div>

            {/* CTA Button */}
            <div className="order-3 mt-4 lg:mt-0 z-10">
              <PrimaryBtn
                className="bg-white !text-black flex items-center"
                onClick={() => navigate('/more-info')}
              >
                Check Your <span className="mx-1 text-red-500 font-semibold">FREE</span> Credit Score
                <FaArrowRightLong className="ml-2" />
              </PrimaryBtn>
            </div>
          </div>
        </div>


        <div className="block lg:hidden relative flex justify-center items-center px-4 py-4 text-center">
          <div
            className="w-full max-w-xl flex flex-col items-center justify-between !rounded-xl bg-cover overflow-hidden px-4 py-6"
            style={{ backgroundImage: `url(${backgroundImageMobile})` }}
          >
            

            {/* Text Block */}
            <div className="text-white text-start">
              <div className="text-lg font-medium leading-snug">
                Get your CIBIL Credit Report{" "}
                <span className="line-through text-yellow-400 font-semibold">
                  worth ₹500
                </span>{" "}
                <span className="text-yellow-400 font-semibold">for FREE</span>
              </div>
            </div>

            {/* CTA Button */}
          <div className="w-full flex justify-center items-center gap-8 mt-6">
  {/* Button */}
  <PrimaryBtn
    className="bg-white !text-primary font-light flex items-center"
    onClick={() => navigate('/more-info')}
  >
    Check Your Credit Score
    <IoIosArrowRoundForward className="ml-2" />
  </PrimaryBtn>

  {/* Image */}
  <img
    src={cibil}
    alt="CIBIL Credit Score"
    className="h-20 object-contain"
  />
</div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AppPromoSection;

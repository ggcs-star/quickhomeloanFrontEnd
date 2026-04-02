import React from 'react';
import { Container } from "../../../../components/Layout";
import { H2, H3 } from "../../../../components/Typography";
import { whyChoose } from '../../../../db';
import { PrimaryBtn } from '../../../../components/Button';
import { Link } from 'react-router-dom';


const WhyChoose = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-8 mb-20 w-full font-helvetica tracking-wide">
        {/* Heading */}
        <div className="text-center mb-8">
          <H2 className="">
            Why Choose GG LocalPulse?
          </H2>
          {/* <H3 className="">
            Pharmarack Badhiya Hai!
          </H3> */}
        </div>

        <div className="w-full max-w-[1400px] mx-auto relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose?.map((item,index) => (
            <div
              key={index}
              className="relative h-40 mx-4 py-4 flex flex-col justify-center items-center text-center transition-all duration-200 rounded-xl hover:scale-105 bg-blue-800 overflow-visible"
            >
              <H3 className="py-4 px-4 text-white">{item?.description}</H3>
            </div>

          ))}
        </div>

      </div>
    </Container>
  );
};

export default WhyChoose;

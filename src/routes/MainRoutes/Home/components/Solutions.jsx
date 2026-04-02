import React from 'react';
import { solutions } from '../../../../db';
import { Container } from "../../../../components/Layout";
import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../../../../components/Button';

const Solutions = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 py-8 font-helvetica tracking-wide">
        {solutions.map((solution, index) => (
          <div key={index} className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className='relative overflow-hidden'>
              <a href={solution.link} target="_blank" rel="noopener noreferrer">
                <img
                  decoding="async"
                  src={solution.image}
                  alt={solution.title}
                  className="h-64 object-cover w-full rounded-t-lg transition-transform duration-300 transform hover:scale-105"
                />
              </a>
            </div>

            <div className="flex flex-col items-center text-center px-4 py-6">
              <img decoding="async" src={solution.logo} alt="logo" className="h-8 w-56 mx-auto object-contain" />
              <p className="text-gray-600 mt-4 flex-grow leading-8">{solution.description}</p>

              <div className="mt-6 hover:scale-105">
                <PrimaryBtn>
                <Link to={solution.link} className="">
                  Know More
                </Link>
                </PrimaryBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Solutions;

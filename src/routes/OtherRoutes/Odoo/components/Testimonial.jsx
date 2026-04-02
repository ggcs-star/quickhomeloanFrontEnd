import { Container } from '../../../../components/Layout';
import React from 'react';

const Testimonial = () => {
  return (
    <Container>
    <section className="py-8 ">
      <div className="container mx-auto px-4">
        {/* Decorative arrow (hidden on mobile) */}
        <img 
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg" 
          width="150" 
          className="hidden md:block -rotate-10 -mt-5 mr-6 mb-5 ml-auto" 
          alt="" 
          loading="lazy" 
        />

        {/* Testimonial card */}
        <div className=" mt-14 flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-xl p-4 md:p-6 relative">
          {/* Quote icon (hidden on mobile) */}
          <img 
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg" 
            height="50" 
            className="hidden md:inline absolute top-0 left-6 transform -translate-y-1/2" 
            alt="" 
            loading="lazy" 
          />

          {/* Testimonial text */}
          <div className="w-full lg:w-8/12 pb-3 lg:pb-0 flex items-center h-full">
  <blockquote className="border-0 p-0 not-italic">
    <p className="font-bold text-xl md:text-2xl mb-0">
      The processing time for accounting documents has been noticeably reduced, 
      in certain cases even from 2 days to only 5 hours. As a result we can now 
      focus on what matters: reporting and advising the client.
    </p>
  </blockquote>
</div>


          {/* Author info */}
          <div className="w-full lg:w-4/12 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end">
            {/* Avatar (hidden on mobile) */}
            <img 
              height="90" 
              className="hidden sm:block rounded-full lg:-mt-14 lg:mb-3 mr-3 lg:mr-0" 
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/van_donink.webp" 
              alt="Harry Van Donink" 
              loading="lazy" 
            />

            {/* Name and title */}
            <div className="flex-grow text-center sm:text-left lg:text-right">
              <b>Harry Van Donink</b><br />
              <small>CEO KPMG Belgium</small>
            </div>

            {/* Company logo */}
            <div className='bg-white p-2 m-2 rounded-md shadow-md'>
            <img 
              width="100" 
              className="w-28 h-8 rounded mt-3 sm:mt-0 lg:mt-3 border border-gray-300" 
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/logo/kpmg_logo.svg" 
              alt="KPMG Logo" 
              loading="lazy" 
            />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
};

export default Testimonial;
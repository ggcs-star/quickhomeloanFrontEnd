import React from 'react';
import { Container } from "../../../../components/Layout";
import { H2, H3 } from "../../../../components/Typography";


const Customers = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-8 mb-20 w-full font-helvetica tracking-wide">
        {/* Heading */}
        <div className="text-center mb-8">
          <H2 className="">
            Hear from our valued customers
          </H2>
          {/* <H3 className="">
            Pharmarack Badhiya Hai!
          </H3> */}
        </div>

        <div className="w-full max-w-[1400px] mx-auto rounded-2xl lg:rounded-3xl xl:rounded-4xl overflow-hidden relative">
          <iframe
            src="https://player.vimeo.com/video/1001035156"
            width="1200"
            height="600"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
            className="w-full h-[300px] lg:h-[800px] block rounded-2xl lg:rounded-3xl xl:rounded-4xl"
            style={{
              WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)",
              maskImage: "radial-gradient(circle, rgba(0,0,0,1) 98%, rgba(0,0,0,0) 100%)",
              borderRadius: "16px",
            }}
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Customers;

import React, { useEffect } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";

import { Container } from "../../../components/Layout";
import { RadientBtn } from "../../../components/Button";
// import BackNavigate from "../../../components/UI/BackNavigate";
import { H1Animate, H4, P } from "../../../components/Typography";

export default function OtherServices({ data, data1, samePage }) {
    let navigate = useNavigate();
    const serviceData = data || data1;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="!bg-[#E4E3FF]">
            {/* {samePage ? <BackNavigate backLabel={serviceData?.heading} /> : null} */}
            <div className={`py-20 sm:py-32 border-b border-green-200`}>
                <Container>
                    <H1Animate className="text-center">
                        {serviceData?.heading}
                    </H1Animate>
                </Container>
            </div>
            <section className="py-10 bg-gray-100 opacity-100">
                <Container>
                    <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
                        {serviceData?.list?.map((item, i) => {
                            return (
                                <div className="w-full card" key={i}>
                                    <div
                                        className={`relative flex flex-col items-center justify-center text-center text-black bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-100 h-full w-full border-2 rounded-[45px] p-10 bg-box${
                                            i + 1
                                        }`}
                                    >
                                        <figure className="w-24 h-20 mb-8 overflow-hidden rounded-xl">
                                            <img
                                                src={item?.icon}
                                                className="object-cover w-full h-full"
                                            />
                                        </figure>
                                        <H4 className="mt-5 [letter-spacing:-0.02em] pb-2">
                                            {item?.subHeading}
                                        </H4>
                                        <P className="text-gray-600">
                                            {item?.description}
                                        </P>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>

                <div className="flex justify-center !py-4">
                    <RadientBtn
                        className="!px-10"
                        onClick={() => navigate("/hire-us")}
                    >
                        Hire Us
                    </RadientBtn>
                </div>
            </section>
        </div>
    );
}

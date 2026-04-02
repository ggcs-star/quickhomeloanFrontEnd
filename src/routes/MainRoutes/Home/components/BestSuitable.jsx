import React, { useEffect } from "react";

import { bestSuitable } from "../../../../db";
import { Container } from "../../../../components/Layout";
// import {  H1, H2, H5 } from "../../../../components/Typography";
import { H2, H3 } from "../../../../components/Typography";
import { H1Animate } from "../../../../components/Typography";


export default function BestSuitable() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12 bg-gray-100 md:py-20 mb-20">
            <Container className=''>
                <H2 className='font-helvetica text-center'>{bestSuitable?.title}</H2>
                {/* <Desc></Desc> */}
                <div className="grid grid-cols-1 pt-10 gap-14 md:gap-10 md:pt-20 font-helvetica">
                    {bestSuitable?.desc?.map((item, i) => (
                        <div
                            key={item?.id}
                            className={`grid md:grid-cols-[1fr_0.8fr] grid-cols-1 items-center sm:gap-5 mb-0 md:my-5`}
                            dir={item?.id % 2 ? "ltr" : "rtl"}
                        >
                            <div className="!text-center md:p-5 mb-2 py-5">
                                {/* <H2>{item?.label}</H2> */}
                                <H3 className="max-md:text-lg text-gray-500 ">
                                    {item?.desc}
                                </H3>
                            </div>
                            <figure className="relative">
                                <img
                                    src={item?.image}
                                    className={`relative aspect-video object-cover rounded-3xl border-gray-200 z-10`}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

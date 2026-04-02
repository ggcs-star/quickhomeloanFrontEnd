import React, { useRef, useState, useEffect } from 'react'
import green_circle from '../../../../assets/detail/green_circle.svg'
import redHighlight from '../../../../assets/detail/red_highlight.svg'
import greenHighlight from '../../../../assets/detail/green_highlight.svg'
import blueUnderline from '../../../../assets/detail/blue_underline.svg'
import EnterpriseRows from './EnterpriseRows'
import { productDetailPages } from '../../../../db/assets'
import { useLocation } from 'react-router-dom'

const Enterprise = () => {
    const location = useLocation()
    const pathParts = location.pathname.split('/')
    const currentSlug = pathParts.includes('details') ? pathParts[pathParts.length - 1] : 'localpulse'
    const product = productDetailPages[currentSlug]
    const headingParts =
        product?.enterpriseSection?.heading ||
        product?.hero?.enterpriseSection?.heading ||
        [];

    return (
        <div className="flex flex-col bg-white min-h-fit">
            <div className="flex justify-end flex-col">
                <div
                    className="bg-gray-400 w-full relative overflow-hidden 
             lg:rounded-tl-[10%] lg:rounded-br-[10%] 
             bg-cover bg-center bg-no-repeat"
                >

                    <div className="absolute inset-0 bg-white/80"></div>
                    <div className="text-left relative z-10">
                        <h1 className="text-4xl lg:text-7xl font-bold pl-0 lg:pl-36 mt-20 relative lg:max-w-6xl font-caveatRegular ml-4 lg:ml-0 text-left lg:text-left">
                            {headingParts.map((part, idx) => {
                                if (part.highlight === 'green') {
                                    return (
                                        <span key={idx} className="relative inline-block mr-4">
                                            {part.text}
                                            <span
                                                className="absolute top-1/2 -translate-y-1/2 lg:top-[0.5px] lg:translate-y-0 left-0 h-20 w-full -z-10 transform -rotate-1"
                                                style={{
                                                    backgroundImage: `url(${green_circle})`,
                                                    backgroundSize: '100% 100%',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                }}
                                            ></span>
                                        </span>
                                    )
                                }
                                if (part.highlight === 'blue') {
                                    return (
                                        <span key={idx} className="ml-2 inline-block">
                                            <span className="relative inline-block">
                                                {part.text}
                                                <span
                                                    className="absolute top-[40px] -translate-y-1/2 lg:top-[11.5px] lg:translate-y-0 left-0 h-20 w-full -z-10 transform -rotate-1"
                                                    style={{
                                                        backgroundImage: `url(${blueUnderline})`,
                                                        backgroundSize: '100% 100%',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                    }}
                                                ></span>
                                            </span>
                                        </span>
                                    )
                                }
                                // Default (no highlight)
                                return (
                                    <span key={idx} className="relative inline-block mr-4">
                                        {part.text}
                                    </span>
                                )
                            })}
                            <br />
                        </h1>

                        <EnterpriseRows />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Enterprise
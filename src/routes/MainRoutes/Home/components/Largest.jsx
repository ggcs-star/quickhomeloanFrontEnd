import React, { useState, useEffect } from 'react';
import { Container } from "../../../../components/Layout";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { H2, H3 } from "../../../../components/Typography";




const Largest = () => {

    const stateCount = useMotionValue(0);
    const cityCount = useMotionValue(0);
    const distributorsCount = useMotionValue(0);
    const skuCount = useMotionValue(0);
    const chemistCount = useMotionValue(0);
    const roundedState = useTransform(stateCount, Math.round);
    const roundedCity = useTransform(cityCount, Math.round);
    const roundedDistributors = useTransform(distributorsCount, Math.round);
    const roundedSku = useTransform(skuCount, Math.round);
    const roundedChemist = useTransform(chemistCount, Math.round);
    const [stateValue, setStateValue] = useState(0);
    const [cityValue, setCityValue] = useState(0);
    const [distributorsValue, setDistributorsValue] = useState(0);
    const [skuValue, setSkuValue] = useState(0);
    const [chemistValue, setChemistValue] = useState(0);

    useEffect(() => {
        const stateAnimation = animate(stateCount, 21, { duration: 2 });
        const cityAnimation = animate(cityCount, 110, { duration: 2 });
        const distributorsAnimation = animate(distributorsCount, 16, { duration: 2 });
        const skuAnimation = animate(skuCount, 3, { duration: 2 });
        const chemistAnimation = animate(chemistCount, 2, { duration: 2 });

        const unsubscribeState = roundedState.on("change", (latestValue) => {
            setStateValue(latestValue);
        });

        const unsubscribeCity = roundedCity.on("change", (latestValue) => {
            setCityValue(latestValue);
        });

        const unsubscribeDistributors = roundedDistributors.on("change", (latestValue) => {
            setDistributorsValue(latestValue);
        });

        const unsubscribeSku = roundedSku.on("change", (latestValue) => {
            setSkuValue(latestValue);
        });

        const unsubscribeChemist = roundedChemist.on("change", (latestValue) => {
            setChemistValue(latestValue);
        });

        return () => {
            stateAnimation.stop();
            cityAnimation.stop();
            distributorsAnimation.stop();
            skuAnimation.stop();
            chemistAnimation.stop();

            unsubscribeState();
            unsubscribeCity();
            unsubscribeDistributors();
            unsubscribeSku();
            unsubscribeChemist();
        };
    }, [stateCount, cityCount, distributorsCount, skuCount, chemistCount, roundedState, roundedCity]);

    return (
        <Container className='bg-white'>
            <div className="flex justify-center items-center font-helvetica tracking-wide">
                <div className="bg-white lg:px-24 lg:bg-gray-100 lg:rounded-lg lg:shadow-lg text-center 2xs:py-8 lg:py-28 my-8">
                    <H2 className="leading-8 md:leading-16 text-black">
                    GG LocalPulse is India’s first 360 solution provider for Individual Reporters and Content Creators
                    </H2>
                    {/* <H3>
                        *As per GMV and Order Count.
                    </H3> */}

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 text-center lg:text-center items-center text-primary font-bold text-xl">
                        <motion.div className="font-bold text-xl py-4 2xs:py-4 lg:pt-8 text-black">
                            <div className="text-3xl lg:text-5xl text-primary">{stateValue}+</div> States
                        </motion.div>
                        <motion.div className="font-bold text-xl py-4 2xs:py-4 lg:pt-8 text-black">
                            <div className="text-3xl lg:text-5xl text-primary">{cityValue}+</div> Cities
                        </motion.div>
                        <motion.div className="font-bold text-xl py-4 2xs:py-4 lg:pt-8 text-black">
                            <div className="text-3xl lg:text-5xl text-primary">{distributorsValue} K+</div> Distributors
                        </motion.div>
                        <motion.div className="font-bold text-xl py-4 2xs:py-4 lg:pt-8 text-black">
                            <div className="text-3xl lg:text-5xl text-primary">{skuValue} L+</div> SKU's
                        </motion.div>
                        <motion.div className="font-bold text-xl py-4 2xs:py-4 lg:pt-8 text-black">
                            <div className="text-3xl lg:text-5xl text-primary">{chemistValue} L+</div> Chemists
                        </motion.div>
                    </div>


                </div>
            </div>



        </Container>

    );
};

export default Largest;

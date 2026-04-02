import React from "react";

import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";
import { servicesData } from "../../db/index";

import OtherServices from "./OtherServices";

export default function OtherRoutes(props) {
    let location = useLocation();
    let slug = location?.state
        ? location?.state?.slug
        : location?.pathname?.replace("/service/", "");

    let serviceData = servicesData?.find((item) => item?.slug === slug);
    // let serviceData1 = servicesData1?.find((item) => item?.slug === slug);

    const routes = useRoutes([
        {
            path: "/service/*",
            element: (
                <OtherServices
                    data={serviceData}
                    samePage={location?.state}
                    {...props}
                />
            )
        },

    ]);
    return <div>{routes}</div>;
}

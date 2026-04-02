import React from "react";

import SocialMedias from "./SocialMedias";
import PackageContainer from "./PackageContainer";

export default function StatusBar(props) {
    return (
        <div className="hidden sm:block">
            <div className="px-0 pt-3 pb-2 sm:px-4">
                <div className="flex items-center justify-between max-w-full">
                    <SocialMedias />
                    {/* <PackageContainer /> */}
                </div>
            </div>
        </div>
    );
}

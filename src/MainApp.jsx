import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./container/Navbar";
import Navbar from "./container/Navbar/index";
import Routes from "./routes";
import Footer from "./container/Footer/index";

const MainApp = (props) => {

    return (
        <>
            <Router>
                <div className="relative min-h-[100vh] flex flex-col">
                    <div className="z-1000">
                        <Navbar {...props} className='z-1000'/>
                    </div>
                    <div className="flex-1">
                        <Routes {...props} />
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default MainApp;
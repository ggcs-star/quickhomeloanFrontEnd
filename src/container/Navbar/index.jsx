import React from "react";
import NavbarContent from "./NavbarContent";
import NavbarContent1 from "./NavbarContent1";

const Navbar = (props) => {
    return (
        <header className="bg-transparent z-1000">
            <NavbarContent1 {...props} />
        </header>
    );
};

export default Navbar;

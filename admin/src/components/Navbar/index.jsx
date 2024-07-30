import "./index.css";
import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={assets.logo} alt="logo" className="logo" />
            <img src={assets.profile_image} className="profile" alt="" />
        </div>
    )
}

export default Navbar

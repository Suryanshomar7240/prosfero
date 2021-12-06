// import React, { useState } from "react";
import "./Nav.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineAccountCircle} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";
// import React from "react";
// import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Nav = () => {
  return (
    <div className="navigation">
      <nav>
        <div className="nav_org_logo"><img src={logo} alt="logo"/></div>
        <ul className="nav-bar">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="www.google.com">Explore</a></li>
          <li className="nav-item"><a href="www.google.com">Create<small> Donation</small></a></li>
          <li className="nav-item"><a href="www.google.com">Login/Signup <MdOutlineAccountCircle /></a></li>
        </ul>
        <div className="hamburger-menu"><GiHamburgerMenu /></div>
      </nav>
    </div>
  );
};

export default Nav;
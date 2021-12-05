import React, { useState } from "react";
import "./Nav.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineAccountCircle} from "react-icons/md";
// import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav_org_logo">Prosfero</div>
        <ul className="nav-bar">
          <li className="nav-item"><a href="https://www.google.com">Home</a></li>
          <li className="nav-item"><a href="https://www.google.com">Explore</a></li>
          <li className="nav-item"><a href="https://www.google.com">Create<small> Donation</small></a></li>
          <li className="nav-item"><a href="https://www.google.com">Login/Signup <MdOutlineAccountCircle /></a></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
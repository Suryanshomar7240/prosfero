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
import React,{ useEffect } from "react";
// import React from "react";
// import { NavLink } from "react-router-dom";

const Nav = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    if(window.innerWidth > 768){
      document.querySelector(".hamburger-menu").classList.add("display_none");
    }
    else
    {
      document.querySelector(".nav-bar").classList.add("display_none");
      // console.log(document.querySelector(".nav-bar"));
    }
  },[]);
  return (
    <>
      <nav>
        <div className="nav_org_logo">Prosfero</div>
        <ul className="nav-bar">
          <li className="nav-item"><a href="www.google.com">Home</a></li>
          <li className="nav-item"><a href="www.google.com">Explore</a></li>
          <li className="nav-item"><a href="www.google.com">Create<small> Donation</small></a></li>
          <li className="nav-item"><a href="www.google.com">Login/Signup <MdOutlineAccountCircle /></a></li>
        </ul>
        <div className="hamburger-menu"><GiHamburgerMenu /></div>
      </nav>
    </>
  );
};

export default Nav;
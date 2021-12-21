import "./Nav.css";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { ImCross } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineAccountCircle,
  MdTravelExplore,
  MdOutlineCreateNewFolder,
  MdOutlineContactPage,
} from "react-icons/md";

const Nav = () => {
  const [ScrollDown, setIsScrollDown] = useState(false);
  const handleScrollDown = () => {
    if (window.scrollY >= 60) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
    if (ScrollDown) {
      document.querySelector(".navigation").classList.add("nav_scroll");
    } else {
      document.querySelector(".navigation").classList.remove("nav_scroll");
    }
  };
  window.addEventListener("scroll", handleScrollDown);

  useEffect(() => {
    // return () => {
      const nav=document.querySelector("nav");
      const hamburger = document.querySelector(".hamburger-menu");
      hamburger.addEventListener("click", () => {
        hamburger.children[0].classList.toggle("display_none");
        hamburger.children[1].classList.toggle("display_none");
        nav.classList.toggle("nav_active");
      });
    // };
  }, []);
  return (
    <div className="navigation" id="nav_link">
      <nav>
        <div className="nav_org_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-bar">
          <li className="nav-item">
            <a href="/">
              <AiOutlineHome style={{ paddingBottom: "2px" }} />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/explore">
              <MdTravelExplore />
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a href="/donate">
              <MdOutlineCreateNewFolder />
              Create Donation
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact">
              <MdOutlineContactPage style={{ paddingBottom: "2px" }} />
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/user/overview">
              Login/Signup <MdOutlineAccountCircle />
            </a>
          </li>
        </ul>
        <div className="hamburger-menu">
          <GiHamburgerMenu className="hamburger" />
          <ImCross className="crossbar display_none" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

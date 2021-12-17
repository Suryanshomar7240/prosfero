import './Nav.css';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState} from 'react';
import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom'


const Nav = () => {
  const [ScrollDown, setIsScrollDown] = useState(false);
  const handleScrollDown = () => {
    if (window.scrollY >= 60) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
    if(ScrollDown){
      document.querySelector(".navigation").classList.add("nav_scroll");
    }
    else
    {
      document.querySelector(".navigation").classList.remove("nav_scroll");
    }
  };
  window.addEventListener("scroll", handleScrollDown);

  return (
    <div className='navigation' id="nav_link">
      <nav>
        <div className='nav_org_logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='nav-bar'>
          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/explore'>Explore</a>
          </li>
          <li className='nav-item'>
            <a href='/explore'>Create Donation</a>
          </li>
          <li className='nav-item'>
            <a href='/contact'>Contact Us</a>
          </li>
          <li className='nav-item'>
            <a href='www.google.com'>
              Login/Signup <MdOutlineAccountCircle />
            </a>
          </li>
        </ul>
        <div className='hamburger-menu'>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

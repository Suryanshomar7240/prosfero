import './Nav.css';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState} from 'react';
import logo from '../../assets/logo.png';
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
    <div className='navigation'>
      <nav>
        <div className='nav_org_logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='nav-bar'>
          <li className='nav-item'>
            <a href='#home'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='www.google.com'>Explore</a>
          </li>
          <li className='nav-item'>
            <a href='www.google.com'>Create Donation</a>
          </li>
          <li className='nav-item'>
            <a href='www.google.com'>Contact Us</a>
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

import './Nav.css';
import React, { useState} from 'react';
import logo from '../../assets/logo.png';
import {AiOutlineHome} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineAccountCircle,MdTravelExplore,MdOutlineCreateNewFolder,MdOutlineContactPage} from 'react-icons/md';


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
            <a href='/'><AiOutlineHome style={{paddingBottom:'2px'}}/>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/explore'><MdTravelExplore />Explore</a>
          </li>
          <li className='nav-item'>
            <a href='/explore'><MdOutlineCreateNewFolder />Create Donation</a>
          </li>
          <li className='nav-item'>
            <a href='/contact'><MdOutlineContactPage style={{paddingBottom:'2px'}}/>Contact Us</a>
          </li>
          <li className='nav-item'>
            <a href='/user/overview'>
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

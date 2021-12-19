import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {MdOutlineContactPage} from 'react-icons/md'; 
import "./footer.css"; 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <div className="footer-left-text">Any Suggestion ?? <br /><Link to="/contact"><MdOutlineContactPage style={{paddingBottom:'2px'}}/> Contact Us </Link></div>
        </div>
        <div className="footer-right">
          <div className="about_us">About us</div>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            eveniet eius culpa voluptates laboriosam, sit corrupti reprehenderit
            in optio quis fugiat minus nesciunt cum expedita consequuntur nobis
            vel voluptat Quis
            repudiandae ab deserunt placeat perferendis doloremque?"
          </p>
        </div>
      </div>
      <div className="footer-bottom">
          &copy; ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;

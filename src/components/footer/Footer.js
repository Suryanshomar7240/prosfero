import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css"; 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <div className="footer-left-text">Any Suggestion ?? <br /><Link to="/contact"> Contact Us </Link></div>
        </div>
        <div className="footer-right">
          <h1>About us</h1>
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

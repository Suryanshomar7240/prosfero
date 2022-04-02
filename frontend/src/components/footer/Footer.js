import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdOutlineContactPage } from 'react-icons/md';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerWrapper'>
        <div className='footer-left'>
          <img src={logo} alt='logo' />
          <div className='footer-left-text'>
            For more queries{' '}
            <Link to='/contact'>
              <MdOutlineContactPage style={{ paddingBottom: '2px' }} /> Contact
              Us{' '}
            </Link>{' '}
          </div>
        </div>
        <div className='footer-right'>
          <div className='about_us'>About us</div>
          <p>Prosfero</p>
          <p>Prosfero is an open source cloud funding platform developed by two college students with a dream to help people with monetary issues and ensure that money doesn't get in the way of people trying to make a change</p>
        </div>
      </div>
      <div className='footer-bottom'>&copy; ALL RIGHTS RESERVED</div>
    </div>
  );
};

export default Footer;

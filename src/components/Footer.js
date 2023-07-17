import React from 'react';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-inner">
            <h3>Leave us a message</h3>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" />
              <input type="submit" />
            </form>
          </div>
          <div className="footer-inner">
            <h3>Contact us</h3>
            <p>Email: info@neurog.ai</p>
            <h3>Follow us</h3>
            <div className="footer-socials">
              <BiLogoFacebook />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

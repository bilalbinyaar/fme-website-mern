import axios from 'axios';
import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  let submitHandler = async (e) => {
    e.preventDefault();
    try {
      alert('Submitted');
      await axios.post('http://localhost:8000/', {
        name,
        email,
        message,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-inner">
            <h3>Leave us a message</h3>
            <form className="contact-form" action="POST">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="text"
                placeholder="Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

              <input type="submit" value="submit" onClick={submitHandler} />
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

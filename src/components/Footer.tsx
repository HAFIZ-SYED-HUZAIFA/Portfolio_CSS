import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        {/* Left Section */}
        <span className="footer-text">
          © Syed Huzaifa - All Rights Reserved
        </span>
        {/* Right Section */}
        <div className="social-icons">
          <span className="social-icon">
            <TiSocialFacebook className="icon" />
          </span>
          <span className="social-icon">
            <IoLogoInstagram className="icon" />
          </span>
          <span className="social-icon">
            <FaTwitter className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

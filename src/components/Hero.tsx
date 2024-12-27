import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* main container */}
      <div className="hero-container">
        {/* left section */}
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-intro">Hi</p>
            <p className="hero-name">
              Im<span className="hero-highlight">Huzaifa</span>
            </p>
            <h2 className="hero-role">A Frontend Developer</h2>
          </div>
          <p className="hero-description">
            I specialize in crafting responsive and user-focused web designs using modern
            technologies like HTML, CSS, JavaScript, React, and Next.js. My goal is to deliver
            seamless digital experiences that combine creativity with functionality.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hero-button-black">Hire Me</button>
            <button className="hero-button hero-button-orange">Services</button>
          </div>
        </div>
        {/* right section */}
        <div className="hero-image-container">
          <Image
            src="/profile.png"
            alt="profile pic"
            width={600}
            height={600}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

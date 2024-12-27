import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-section">
      {/* main container */}
      <div className="about-container">
        {/* left section */}
        <div className="about-image-container">
          <Image
            src="/profile.png"
            alt="profile pic"
            width={1000}
            height={1000}
            className="about-image"
          />
        </div>
        {/* right section */}
        <div className="about-content">
          <h2 className="about-heading">
            About<span className="about-highlight">Me</span>
          </h2>
          <h2 className="about-heading">
            Frontend<span className="about-highlight">Developer</span>
          </h2>
          <p className="about-description">
            Hi there! Im a passionate Frontend Developer dedicated to crafting seamless and
            visually appealing user experiences. With expertise in modern web technologies like
            HTML, CSS, JavaScript, and frameworks such as React and Next.js, I bring ideas to life
            with precision and creativity. My focus is on creating responsive, user-friendly
            designs that leave a lasting impact. Lets build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


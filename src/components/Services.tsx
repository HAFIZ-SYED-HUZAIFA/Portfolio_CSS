import React from 'react';
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { PiCodeSimpleBold } from "react-icons/pi";
import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

const Services = () => {
  const services = [
    {
      title: "HTML",
      paragraph: "Building the foundation of websites with clean and semantic markup for better structure and SEO.",
      icon: <RiHtml5Line />
    },
    {
      title: "CSS",
      paragraph: "Styling websites with precision to create visually appealing, responsive, and modern designs.",
      icon: <IoLogoCss3 />
    },
    {
      title: "JavaScript",
      paragraph: "Bringing interactivity to life with dynamic and user-friendly features powered by JavaScript.",
      icon: <IoLogoJavascript />
    },
    {
      title: "TypeScript",
      paragraph: "Enhancing JavaScript with TypeScript for robust, scalable, and error-free applications.",
      icon: <SiTypescript />
    },
    {
      title: "Next.js",
      paragraph: "Developing fast, server-rendered, and modern web applications using the power of Next.js.",
      icon: <RiNextjsLine />
    },
    {
      title: "UX/UI Designer",
      paragraph: "Designing intuitive and user-centric interfaces that offer seamless and engaging experiences.",
      icon: <PiCodeSimpleBold />
    },
  ];

  return (
    <div className="services-section">
      <h2 className="services-heading">
        Our<span className="services-highlight">Services</span>
      </h2>
      {/* Main Container */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <h2 className="service-title">{item.title}</h2>
              <span className="service-icon">{item.icon}</span>
              <p className="service-description">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      {/* Main Container */}
      <div className="contact-container">
        <h2 className="contact-heading">
          Contact<span className="contact-highlight">Me</span>
        </h2>

        {/* Input Fields */}
        <input
          type="text"
          className="contact-input"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="contact-input"
          placeholder="Email"
        />
        <input
          type="text"
          className="contact-input"
          placeholder="Phone Number"
        />
        <input
          type="text"
          className="contact-input"
          placeholder="Subject"
        />
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
        ></textarea>

        {/* Submit Button */}
        <div className="contact-button-container">
          <button className="contact-button">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;


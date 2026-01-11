// src/ContactPage.js
import React from "react";
import "./ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Reach out via Instagram, email, or visit us
        in Hyderabad.
      </p>

      <div className="contact-links">
        <a
          href="https://www.instagram.com/vjbharathbooks/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="mailto:vjbookseries@gmail.com" className="contact-icon">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>

      {/* ✅ Hyderabad Map Embed */}
      <div className="map-container">
        <iframe
          title="Hyderabad Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34240941235!2d78.24289122001925!3d17.41228073511455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1768149258128!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }} // ✅ fixed
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

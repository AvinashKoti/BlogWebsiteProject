// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://www.instagram.com/vjbharathbooks/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:vjbookseries@gmail.com" className="footer-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className="footer-text">
        © 2026 VJ Bharath Books. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

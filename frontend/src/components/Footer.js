import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TOP CONTENT */}
        <div className="footer-grid">
          {/* LEFT */}
          <div className="footer-column">
            <h3 className="footer-title">MLS Publications</h3>
            <div className="footer-underline"></div>
            <p className="footer-text">
              Fostering legal scholarship and critical insights into the evolving
              legal landscape.
            </p>
          </div>

          {/* CENTER */}
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-underline"></div>
            <p className="footer-text">123 Legal Avenue, Law City, 11001</p>
            <p className="footer-text">info.jilr@gmail.com</p>
            <p className="footer-text">+91 7989879735</p>
          </div>

          {/* RIGHT */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-underline"></div>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/submission-guidelines">Submission Guidelines</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="footer-divider" />

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 MLS Publications. All Rights Reserved.</p>
          <span>Designed with precision for legal excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

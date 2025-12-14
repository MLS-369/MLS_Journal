import React, { useState } from "react";
import { ChevronDown, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const openMenu = (name) => setOpenDropdown(name);
  const closeMenu = () => setOpenDropdown(null);

  return (
    <header className="header">
      <div className="headerContent">
        {/* LOGO */}
        <Link to="/" className="logo">
          <span className="logoShield">MLS</span>
          <span className="logoText">Publications</span>
        </Link>

        {/* NAV */}
        <nav className="desktopNav">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/about" className="navLink">About</Link>

          {/* Publications */}
          <div
            className="dropdownContainer"
            onMouseEnter={() => openMenu("publications")}
            onMouseLeave={closeMenu}
          >
            <button className="navLink">
              Publications <ChevronDown size={16} />
            </button>

            {openDropdown === "publications" && (
              <div className="dropdown">
                <Link to="/current-issue" className="dropdownLink">
                  Current Issue
                </Link>
                <Link to="/archive" className="dropdownLink">
                  Volume Archive
                </Link>
              </div>
            )}
          </div>

          <Link to="/submission-guidelines" className="navLink">
            Submission Guidelines
          </Link>

          {/* Information Process */}
          <div
            className="dropdownContainer"
            onMouseEnter={() => openMenu("info")}
            onMouseLeave={closeMenu}
          >
            <button className="navLink">
              Information Process <ChevronDown size={16} />
            </button>

            {openDropdown === "info" && (
              <div className="dropdown">
                <Link to="/editorial-board" className="dropdownLink">
                  Editorial Board
                </Link>
                <Link to="/publication-process" className="dropdownLink">
                  Publication Process
                </Link>
                <Link to="/peer-review-process" className="dropdownLink">
                  Peer Review Process
                </Link>
                <Link to="/print-policy" className="dropdownLink">
                  Publication Print Policy
                </Link>
              </div>
            )}
          </div>

          {/* Journal Policies */}
          <div
            className="dropdownContainer"
            onMouseEnter={() => openMenu("policies")}
            onMouseLeave={closeMenu}
          >
            <button className="navLink">
              Journal Policies <ChevronDown size={16} />
            </button>

            {openDropdown === "policies" && (
              <div className="dropdown">
                <Link to="/open-access" className="dropdownLink">
                  Open Access Policy
                </Link>
                <Link to="/publication-policy" className="dropdownLink">
                  Publication & Print Policy
                </Link>
                <Link to="/ethics" className="dropdownLink">
                  Ethics Statement
                </Link>
              </div>
            )}
          </div>

          <Link to="/submit" className="navLink submit">
            Submit Manuscript
          </Link>

          <Link to="/contact" className="navLink">
            Contact Us
          </Link>
        </nav>

        {/* RIGHT ICON */}
        <div className="rightSection">
          <button className="themeToggle">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

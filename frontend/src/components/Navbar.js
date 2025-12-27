import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const openMenu = (name) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const closeMenu = () => {
    // Add a small delay before closing to allow cursor movement to dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 100); // 200ms delay
  };

  const cancelClose = () => {
    // Cancel the close if user hovers over dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

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
              <div 
                className="dropdown"
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
              >
                <Link
                  to="/current-issue"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Current Issue
                </Link>
                <Link
                  to="/archive"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
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
              <div 
                className="dropdown"
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
              >
                <Link
                  to="/editorial-board"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Editorial Board
                </Link>
                <Link
                  to="/publication-process"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Publication Process
                </Link>
                <Link
                  to="/peer-review-process"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/print-policy"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
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
              <div 
                className="dropdown"
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
              >
                <Link
                  to="/open-access"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Open Access Policy
                </Link>
                <Link
                  to="/publication-policy"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
                  Publication & Print Policy
                </Link>
                <Link
                  to="/ethics"
                  className="dropdownLink"
                  onClick={closeMenu}
                >
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
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

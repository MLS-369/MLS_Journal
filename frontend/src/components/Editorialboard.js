import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import  '../styles/Editorialboard.css'; // Assuming this import path is correct

const OurPeople = () => {
    const isDarkTheme = false; 
    const Link = ({ to, children }) => <a href={to}>{children}</a>; // Placeholder Link

    return (
        // FIX 1: Correctly use template literals (backticks) inside {} for dynamic class names
        <section 
            className={`our-people ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} 
            id="people"
        >
            {/* FIX 2: Removed unnecessary fragment <> around the content. */}
            <h2 className="our-people-heading">Our Editorial Board</h2>
            
            <div className="our-people-images">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Chief Editor"
                    className="partner-image" 
                />
            </div>
            {/* FIX 2: Removed unnecessary fragment <> around the content. */}
            <h2 className="our-people-heading">Our Editorial Board</h2>
        </section>
    );
};

export default OurPeople;
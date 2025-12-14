import React from 'react';
import '../styles/About.css';

function AboutPage() {
  // Define the structure of the journal's metadata for the right column
  const journalDetails = [
    { label: 'Subject Area', value: 'Law and Related Disciplines' },
    { label: 'Plagiarism Limit', value: 'Upto 15 Percent' },
    { label: 'Plagiarism Software', value: 'Turnitin and Plagiarism X' },
    { label: 'Publication Frequency', value: 'Quarterly-Publication' },
    { label: 'Accessibility', value: 'Open Access' },
    { label: 'Review Process', value: 'Double Blind Peer Review' },
  ];

  return (
    <div className="aboutPage">
      <h2 className="aboutTitle">About IJLLR</h2>
      
      {/* This section represents the top part of the image with the main content 
        on the left and the journal details box on the right.
      */}
      <div className="aboutContent">
        
        {/* Left Column: Introductory Text */}
        <div className="aboutText">
          <p>
            MLS Publications is an advocate-supervised, early-career practitioners and student-edited legal publication dedicated to advancing high-quality, accessible, and practice-oriented legal scholarship in India and beyond. The platform publishes original academic work through a hybrid, double-anonymous peer review system supported by AI-assisted screening, ensuring rigorous evaluation, integrity, and timely publication.
            As a publication initiative of MLS Law Firm, Tadepalli (Andhra Pradesh), MLS Publications aims to bridge the gap between legal research, policy formulation, and practice-driven solutions. The editorial board operates with complete editorial independence, guided by internationally recognized standards including the Committee on Publication Ethics (COPE) framework.
          </p>
        </div>
        
        {/* Right Column: Journal Details Box */}
        <div className="journalDetailsBox">
          <h3 className="journalDetailsTitle">
            INDIAN JOURNAL OF LAW AND LEGAL RESEARCH
          </h3>
          
          {/* Details List */}
          {journalDetails.map((item, index) => (
            <div key={index} className="journalDetailItem">
              <span className="journalDetailLabel">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Horizontal Line for separation --- */}
      <hr className="aboutDivider" />

      {/* This section represents the bottom part of the image with three columns. */}
      <div className="aboutColumns">
        
        {/* Column 1: Mission - JUSTIFIED */}
        <div className="aboutColumn">
          <h3 className="aboutColumnTitle">🎯 Mission </h3>
          <p className="aboutColumnText">
            The mission of MLS Publications is to cultivate a transparent, ethical, and intellectually vibrant forum for legal scholarship that strengthens the connection between legal theory and real-world practice. We are committed to publishing original research that enriches public understanding of law, supports evidence-based policy development, and empowers emerging scholars to contribute meaningfully to the legal profession. By maintaining a fair, hybrid peer-review process and providing open-access publication, we strive to make high-quality legal knowledge accessible to students, practitioners, institutions, and society at large.
          </p>
        </div>
        
        {/* Column 2: Our Vision - JUSTIFIED */}
        <div className="aboutColumn">
          <h3 className="aboutColumnTitle">🌟 Our Vision</h3>
          <p className="aboutColumnText">
            To emerge as a leading open-access legal research publication from India, recognized for its rigor, accessibility, and real-world impact, fostering a dynamic intellectual ecosystem where legal scholarship shapes policy reform, jurisprudential development, and justice delivery.
            We envision a publication space where:

            📚 Scholars and practitioners collaborate to address evolving legal challenges

            🌐 Legal knowledge remains accessible to all, beyond institutional and economic barriers

            🧠 Research is innovative, interdisciplinary, and responsive to technological and socio-economic change
            
            ⚖ Legal discourse strengthens the foundations of the rule of law, constitutional values, and democratic governance
            
            Our long-term vision includes developing:
            ✨ A respected position in global indexing platforms (UGC CARE, Scopus, Web of Science)
            ✨ A digital repository of open legal knowledge serving students, courts, and policymakers
            ✨ Partnerships with universities, law firms, think tanks, and international research bodies
          </p>
        </div>
        
        {/* Column 3: Objectives - LIST ITEMS JUSTIFIED */}
        <div className="aboutColumn">
          <h3 className="aboutColumnTitle">Our Objectives</h3>
          <ul className="aboutList">
            <li className="aboutListItem">
              Promote High-Quality Legal Research
To encourage and publish original, well-reasoned, and practice-oriented legal scholarship that contributes to contemporary jurisprudence and legal reform.
            </li>
            <li className="aboutListItem">
              Bridge Academic Research and Legal Practice
To serve as a platform where academicians, practitioners, judges, researchers, and students can exchange perspectives that enhance both theory and real-world legal application.
            </li>
            <li className="aboutListItem">
               Support Early-Career Legal Authors
To provide structured opportunities, mentorship, and editorial guidance to law students, young advocates, and researchers in developing strong research and writing competencies.
            </li>
            <li className="aboutListItem">
              Maintain Ethical and Transparent Publishing Standards
To uphold strict ethical standards aligned with COPE publishing principles, promoting integrity, originality, and responsible academic authorship.
            </li>
            <li className="aboutListItem">
              Facilitate Open and Accessible Legal Knowledge
To maintain an open-access digital journal, ensuring free and equitable access to legal research for scholars, institutions, professionals, and the public.
            </li>
            <li className="aboutListItem">
              Encourage Interdisciplinary Legal Research
To foster research that engages with technology, economics, public policy, international relations, social sciences, and emerging regulatory domains impacting law.
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default AboutPage;
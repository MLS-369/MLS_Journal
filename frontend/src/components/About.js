import React from 'react';
// import PlaceholderPage from './PlaceholderPage'; // Remove the import if not needed

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
    // Change PlaceholderPage to a standard div to ensure content is visible
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>About IJLLR</h2>
      
      {/* This section represents the top part of the image with the main content 
        on the left and the journal details box on the right.
      */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        
        {/* Left Column: Introductory Text */}
        <div style={{ flex: 2 }}>
          {/* First Paragraph (short) - JUSTIFIED */}
          <p style={{ textAlign: 'justify' }}>
            MLS Publications is an advocate-supervised, early-career practitioners and student-edited legal publication dedicated to advancing high-quality, accessible, and practice-oriented legal scholarship in India and beyond. The platform publishes original academic work through a hybrid, double-anonymous peer review system supported by AI-assisted screening, ensuring rigorous evaluation, integrity, and timely publication.
            As a publication initiative of MLS Law Firm, Tadepalli (Andhra Pradesh), MLS Publications aims to bridge the gap between legal research, policy formulation, and practice-driven solutions. The editorial board operates with complete editorial independence, guided by internationally recognized standards including the Committee on Publication Ethics (COPE) framework.
          </p>
        </div>
        
        {/* Right Column: Journal Details Box */}
        <div 
          style={{ 
            flex: 1, 
            border: '1px solid #ccc', // Simulating the border
            padding: '15px', 
            backgroundColor: '#f9f9f9' // Light background for the box
          }}
        >
          <h3 
            style={{ 
              marginTop: 0, 
              fontSize: '1em', 
              fontWeight: 'bold', 
              borderBottom: '1px solid #ccc', 
              paddingBottom: '5px',
              marginBottom: '10px'
            }}
          >
            INDIAN JOURNAL OF LAW AND LEGAL RESEARCH
          </h3>
          
          {/* Details List */}
          {journalDetails.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', lineHeight: '1.8' }}>
              <span style={{ fontWeight: 'bold' }}>{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Horizontal Line for separation --- */}
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '40px 0' }} />

      {/* This section represents the bottom part of the image with three columns. */}
      <div style={{ display: 'flex', gap: '30px' }}>
        
        {/* Column 1: Mission - JUSTIFIED */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>🎯 Mission </h3>
          <p style={{ fontSize: '0.9em', textAlign: 'justify' }}>
            The mission of MLS Publications is to cultivate a transparent, ethical, and intellectually vibrant forum for legal scholarship that strengthens the connection between legal theory and real-world practice. We are committed to publishing original research that enriches public understanding of law, supports evidence-based policy development, and empowers emerging scholars to contribute meaningfully to the legal profession. By maintaining a fair, hybrid peer-review process and providing open-access publication, we strive to make high-quality legal knowledge accessible to students, practitioners, institutions, and society at large.
          </p>
        </div>
        
        {/* Column 2: Our Vision - JUSTIFIED */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>🌟 Our Vision</h3>
          <p style={{ fontSize: '0.9em', textAlign: 'justify' }}>
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
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Our Objectives</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9em' }}>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
              Promote High-Quality Legal Research
To encourage and publish original, well-reasoned, and practice-oriented legal scholarship that contributes to contemporary jurisprudence and legal reform.
            </li>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
              Bridge Academic Research and Legal Practice
To serve as a platform where academicians, practitioners, judges, researchers, and students can exchange perspectives that enhance both theory and real-world legal application.
            </li>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
               Support Early-Career Legal Authors
To provide structured opportunities, mentorship, and editorial guidance to law students, young advocates, and researchers in developing strong research and writing competencies.
            </li>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
              Maintain Ethical and Transparent Publishing Standards
To uphold strict ethical standards aligned with COPE publishing principles, promoting integrity, originality, and responsible academic authorship.
            </li>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
              Facilitate Open and Accessible Legal Knowledge
To maintain an open-access digital journal, ensuring free and equitable access to legal research for scholars, institutions, professionals, and the public.
            </li>
            <li style={{ marginBottom: '10px', textAlign: 'justify' }}>
              Encourage Interdisciplinary Legal Research
To foster research that engages with technology, economics, public policy, international relations, social sciences, and emerging regulatory domains impacting law.
            </li>
          </ul>
        </div>
      </div>
      
    </div> // End of div wrapper
  );
}

export default AboutPage;
import React from 'react';

function OpenAccessPolicyPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Policy Title */}
      <h2 style={{ 
        fontSize: '2.5em', 
        fontWeight: 'normal', 
        borderBottom: '2px solid #000', 
        paddingBottom: '10px', 
        marginBottom: '30px' 
      }}>
        Open Access Policy
      </h2>

      {/* First Paragraph: Main Policy Statement */}
      <p style={{ lineHeight: '1.8', fontSize: '1.05em', marginBottom: '25px', textAlign: 'justify' }}>
        This Journal follows a full and immediate open access model, based on the principle that **unrestricted access to scholarly research** enables a wider global exchange of knowledge and fosters academic advancement.

        All published articles are **freely accessible online** to every user upon publication, without any registration requirements or embargo periods. Readers are not charged for accessing, reading, downloading, or sharing content.

        For the purposes of this policy, “open access” means that research articles are made available on the public internet, allowing any user to read, download, copy, distribute, print, search, link to the full text, crawl the content for indexing, use the data for text or data mining, or employ the material for any other lawful purpose, without financial, legal, or technical barriers—other than those intrinsic to accessing the internet. The only limitations on reproduction and distribution are those necessary to ensure authors retain control over the integrity of their work and receive appropriate acknowledgment and citation.
      </p>

      {/* Second Paragraph: Benefits of Open Access (Modified to be a List) */}
      <p style={{ lineHeight: '1.8', fontSize: '1.05em', marginBottom: '15px', fontWeight: 'bold' }}>
        Benefits of Open Access include:
      </p>
      
      {/* NEW: Unordered List for Benefits */}
      <ul style={{ 
          listStyleType: 'disc', 
          paddingLeft: '25px', 
          fontSize: '1.05em', 
          marginBottom: '50px' 
      }}>
          <li style={{ marginBottom: '10px' }}>Increased visibility, readership, and citation potential</li>
          <li style={{ marginBottom: '10px' }}>Rapid and wider dissemination of research</li>
          <li style={{ marginBottom: '10px' }}>Faster impact and collaboration opportunities through permissive licensing</li>
          <li style={{ marginBottom: '10px' }}>Authors retain copyright while allowing broader reuse of their work</li>
      </ul>

      {/* Creative Commons License Logo (Using a placeholder image URL for the logo) */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        {/* Replace this placeholder URL with the actual image path to the CC BY icon */}
        <img 
          src="https://i.imgur.com/gK2o8d3.png" 
          alt="Creative Commons Attribution 4.0 International License" 
          style={{ width: '150px' }} 
        />
      </div>

      {/* Licensing Text */}
      <p style={{ textAlign: 'center', fontSize: '1em', color: '#555' }}>
        Indian Journal of law and Legal Research is licensed under CC BY 4.0 <span style={{ fontFamily: 'sans-serif' }}>&#x24d2;</span>
      </p>

    </div>
  );
}

export default OpenAccessPolicyPage;
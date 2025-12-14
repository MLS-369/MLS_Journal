import React from "react";
import "../styles/Submissionguidline.css"; // ✅ normal CSS import

const mockPartnerLogos = [
  { name: "HeinOnline", src: "https://via.placeholder.com/100x50?text=HEINONLINE" },
  { name: "ROAD", src: "https://via.placeholder.com/100x50?text=ROAD" },
  { name: "Manupatra", src: "https://via.placeholder.com/100x50?text=MANUPATRA" },
  { name: "Google Scholar", src: "https://via.placeholder.com/100x50?text=GOOGLE+SCHOLAR" },
  { name: "Harvard University", src: "https://via.placeholder.com/100x50?text=HARVARD" },
  { name: "UC San Francisco", src: "https://via.placeholder.com/100x50?text=UCSF" },
  { name: "Stanford Libraries", src: "https://via.placeholder.com/100x50?text=STANFORD" },
];

const timelineData = [
  { stage: "Desk triage", timeframe: "48 hours" },
  { stage: "Reviewer assignment", timeframe: "Within 24 hours post-triage" },
  { stage: "Review turnaround", timeframe: "5 days" },
  { stage: "AE synthesis & recommendation", timeframe: "3 days" },
  { stage: "Author revision", timeframe: "24–48 hours" },
  { stage: "Final checks & publication", timeframe: "2–3 days" },
];

function SubmissionGuidelinesPage() {
  return (
    <div className="submissionGuidelines">
      <div className="mainLayout">

        {/* LEFT CONTENT */}
        <div className="contentColumn">
          <h2>MLS PUBLICATIONS — Submission Guidelines and Policies</h2>

          <h3 className="sectionHeader">About the Journal</h3>
          <div className="policyBlock">
            <p>
              MLS Publications is an advocate-supervised, peer-reviewed journal
              committed to rigorous, ethical, and accessible legal scholarship.
            </p>
          </div>

          <h3 className="sectionHeader">Editorial Timeline</h3>
          <table className="timelineTable">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeframe</th>
              </tr>
            </thead>
            <tbody>
              {timelineData.map((row, index) => (
                <tr key={index}>
                  <td>{row.stage}</td>
                  <td>{row.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar">
          <button className="actionButton">SUBMIT MANUSCRIPT</button>
          <button className="actionButton">CURRENT ISSUE</button>
          <button className="actionButton">CALL FOR PAPERS</button>
          <button className="actionButton">VERIFY ISSN</button>
          <button className="actionButton">OLD WEBSITE</button>

          <div className="indexingPartners">
            <h4>Indexing Partners</h4>
            <div className="partnerLogos">
              {mockPartnerLogos.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.name}
                  className="partnerLogo"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SubmissionGuidelinesPage;

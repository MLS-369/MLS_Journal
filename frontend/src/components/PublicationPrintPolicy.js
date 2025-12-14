import React from "react";
import "../styles/PublicationPrintPolicy.css";

function PublicationPrintPolicy() {
  const contributionTiers = [
    { authorType: "Single Author", amount: "₹1500" },
    { authorType: "Co-Authored (Two Authors)", amount: "₹1700" },
  ];

  const coverageItems = [
    "The author’s complimentary hard copy of the published volume",
    "Postage and dispatch costs",
    "Administrative processing for the print edition",
  ];

  return (
    <div className="printPolicy">
      {/* HEADER */}
      <div className="pp-header">
        <h2 className="pp-title">📘 Publication & Print Policy</h2>
        <p className="pp-subtitle">
          Details regarding free open-access digital publication and the optional
          contribution for hardbound volumes.
        </p>
      </div>

      {/* DIGITAL POLICY */}
      <section className="pp-section">
        <h3>🔓 Digital Publication Policy (Open Access)</h3>
        <div className="pp-content">
          <p>
            Publication in the <strong>MLS Law Journal</strong> is entirely free.
            <strong> No processing, review, or evaluation fees</strong> are charged
            at any stage of submission.
          </p>
          <p>
            The digital publication (open-access e-journal) remains freely
            accessible worldwide, supporting equitable dissemination of legal
            scholarship.
          </p>
        </div>
      </section>

      {/* PRINT POLICY */}
      <section className="pp-section">
        <h3>📦 Optional Hardbound Print Policy</h3>
        <div className="pp-content">
          <p>
            Authors may optionally contribute toward the printing and dispatch
            cost of a hardbound volume <strong>after final acceptance</strong>.
            This contribution applies only to authors requesting a physical copy.
          </p>
        </div>

        <h4 className="pp-subHeading">💰 Contribution Breakdown</h4>

        <div className="pp-cards">
          <div className="pp-card">
            <h4>Contribution Amount</h4>
            <ul>
              {contributionTiers.map((item, index) => (
                <li key={index}>
                  <span>{item.authorType}</span>
                  <strong>{item.amount}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="pp-card">
            <h4>Coverage Includes</h4>
            <ul className="pp-list">
              {coverageItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pp-note">
          Payment instructions will be shared only after final acceptance,
          along with the official acceptance letter.
        </p>
      </section>

      {/* ETHICS NOTE */}
      <div className="pp-ethics">
        <p>
          ⚠️ <strong>Ethics Notice:</strong> Payment does <strong>not</strong>{" "}
          influence editorial review or acceptance. All manuscripts are evaluated
          solely on academic merit under a double-anonymous review system.
        </p>
      </div>
    </div>
  );
}

export default PublicationPrintPolicy;
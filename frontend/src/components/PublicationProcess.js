import React from "react";
import "../styles/PublicationProcess.css";

function PublicationProcessPage() {
  const processSteps = [
    {
      number: 1,
      title: "Manuscript Submission",
      description:
        "Authors submit their manuscripts through our online portal. The submission must adhere to formatting and ethical guidelines. An initial editorial check ensures completeness and suitability.",
    },
    {
      number: 2,
      title: "Editorial Assessment",
      description:
        "The editor evaluates whether the manuscript aligns with the journal’s scope and quality standards. Submissions outside scope may be desk rejected.",
    },
    {
      number: 3,
      title: "Peer Review",
      description:
        "Manuscripts are reviewed by independent experts under a blind peer-review system to assess originality, rigor, and contribution.",
    },
    {
      number: 4,
      title: "Decision & Revision",
      description:
        "Based on reviewer feedback, authors may be asked to make minor or major revisions before final consideration.",
    },
    {
      number: 5,
      title: "Final Acceptance & Publication",
      description:
        "Accepted manuscripts undergo copyediting, typesetting, and proofreading before being published online.",
    },
  ];

  return (
    <div className="publicationProcess">
      {/* HEADER */}
      <div className="pp-header">
        <h2 className="pp-title">Publication Process</h2>
        <p className="pp-subtitle">
          A transparent and rigorous workflow ensuring high-quality scholarly
          publication.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="pp-timeline">
        {processSteps.map((step, index) => (
          <div key={step.number} className="pp-timelineItem">
            {index < processSteps.length - 1 && (
              <div className="pp-connector"></div>
            )}

            <div className="pp-stepBadge">{step.number}</div>

            <div className="pp-stepContent">
              <h3 className="pp-stepTitle">{step.title}</h3>
              <p className="pp-stepDescription">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* INFO CARDS */}
      <div className="pp-infoSection">
        <div className="pp-infoCard">
          <div className="pp-infoIcon">⏱️</div>
          <h4>Average Timeline</h4>
          <p>Decisions are typically made within 8–12 weeks.</p>
        </div>

        <div className="pp-infoCard">
          <div className="pp-infoIcon">👥</div>
          <h4>Expert Reviewers</h4>
          <p>Reviewed by experienced scholars and legal professionals.</p>
        </div>

        <div className="pp-infoCard">
          <div className="pp-infoIcon">✅</div>
          <h4>Quality Assurance</h4>
          <p>Each article undergoes thorough editing and proofreading.</p>
        </div>
      </div>
    </div>
  );
}

export default PublicationProcessPage;

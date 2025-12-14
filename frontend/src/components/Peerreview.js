import React from "react";
import "../styles/Peerreview.css";

const roles = [
  {
    title: "Managing Editor",
    desc: "Triages submissions, assigns editors/reviewers, oversees timelines.",
  },
  {
    title: "Associate Editor",
    desc: "Subject specialist who manages peer review and synthesizes reports.",
  },
  {
    title: "Peer Reviewer",
    desc: "Independent expert providing detailed assessment and feedback.",
  },
  {
    title: "Community Validator Panel",
    desc: "Early-career researchers performing practical replication checks.",
  },
  {
    title: "Copyeditor & Production",
    desc: "Handles language, formatting, metadata, and legal checks.",
  },
  {
    title: "Ethics / Oversight Officer",
    desc: "Manages conflicts, appeals, and plagiarism or ethics cases.",
  },
];

const workflow = [
  { step: 1, title: "Submission", description: "Author submits manuscript via online portal." },
  { step: 2, title: "Automated Screening", description: "AI-assisted screening for format, plagiarism, and language." },
  { step: 3, title: "Managing Editor Review", description: "Scope and suitability assessment." },
  { step: 4, title: "Reviewer Assignment", description: "2–3 reviewers assigned anonymously." },
  { step: 5, title: "Peer Review", description: "Structured evaluation using scoring rubrics." },
  { step: 6, title: "Editor Synthesis", description: "Reviews compiled and decision recommended." },
  { step: 7, title: "Author Revision", description: "Revisions submitted with response letter." },
  { step: 8, title: "Final Acceptance", description: "Manuscript approved for publication." },
  { step: 9, title: "Copyediting & QA", description: "Language, citation, and formatting checks." },
  { step: 10, title: "Publication", description: "Article published with DOI and metadata." },
  { step: 11, title: 'Post-Publication', description: 'Open peer commentary enabled for readers.' },
  { step: 12, title: 'Quality Review', description: 'Quarterly audits and annual feedback surveys.' },
];

const bestPractices = [
  {
    icon: "⚖️",
    title: "Fairness & Transparency",
    desc: "Double-anonymous review ensures impartial evaluation",
  },
  {
    icon: "⚙️",
    title: "Efficiency",
    desc: "AI-assisted screening reduces review times",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "Scoring rubrics ensure consistent evaluation",
  },
  {
    icon: "🎓",
    title: "Community Validation",
    desc: "Early-career researchers verify practical relevance",
  },
];

export default function PeerReviewProcessPage() {
  return (
    <div className="peerReviewPage">

      {/* LEFT COLUMN */}
      <div className="leftColumn">
        <h2 className="pageTitle">Peer Review Process</h2>
        <p className="pageSubtitle">
          A hybrid review system combining double-anonymous peer review,
          open commentary, and community validation.
        </p>

        <h3 className="sectionHeading">Roles & Responsibilities</h3>

        <div className="rolesList">
          {roles.map((r, i) => (
            <div key={i} className="roleCard">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER COLUMN */}
      <div className="centerColumn">
        <h3 className="sectionHeading centerTitle">
          Submission to Publication Workflow
        </h3>

        <div className="timeline">
          {workflow.map((item) => (
            <div key={item.step} className="timelineItem">
              <div className="timelineCircle">{item.step}</div>

              <div className="timelineCard">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="rightColumn">
        <h3 className="sectionHeading">Best Practices</h3>

        <div className="bestPractices">
          {bestPractices.map((b, i) => (
            <div key={i} className="practiceCard">
              <div className="practiceIcon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

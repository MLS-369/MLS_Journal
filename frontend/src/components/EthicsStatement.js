import React from "react";
import "../styles/EthicsStatement.css";

const ethicsCommitments = [
  {
    title: "1. Originality and Integrity",
    content:
      "Submissions must be original and unpublished work. Plagiarism, self-plagiarism, fabrication of data, manipulation of authorities, or any form of academic dishonesty is strictly prohibited. All manuscripts are screened for similarity through plagiarism detection tools and editorial checks.",
  },
  {
    title: "2. Exclusive Submission",
    content:
      "Manuscripts must be submitted exclusively to MLS Publications and may not be under review elsewhere. Authors must not submit their work to any other publication until a formal rejection is communicated by MLS Publications.",
  },
  {
    title: "3. Authorship and Contribution",
    content:
      "Authorship must reflect substantial scholarly contribution from each listed author. Honorary, guest, or ghost authorship is not permitted. All contributors and funding sources must be properly acknowledged.",
  },
  {
    title: "4. Transparency and Disclosure",
    content:
      "Authors, editors, and reviewers are required to disclose any conflicts of interest, whether financial, professional, or personal, that may influence editorial judgment or research outcomes.",
  },
  {
    title: "5. Fair and Independent Review",
    content:
      "MLS Publications follows a hybrid double-anonymous review system. Manuscripts are evaluated solely on academic merit, originality, reasoning quality, and relevance to contemporary legal discourse, without bias based on identity, affiliation, ideology, gender, or background.",
  },
  {
    title: "6. Confidentiality",
    content:
      "All submissions, reviewer identities, and editorial communications are treated as confidential. Information obtained during the review process may not be used for personal or professional advantage.",
  },
  {
    title: "7. Corrections, Retractions, and Ethical Concerns",
    content:
      "Where credible concerns arise regarding the integrity of a published work, MLS Publications may issue corrections, clarifications, expressions of concern, or retractions, as appropriate. Authors are obligated to cooperate with investigations into ethical concerns.",
  },
  {
    title: "8. Responsible Use of AI Tools",
    content:
      "Authors must disclose any use of Artificial Intelligence tools for drafting, research assistance, translation, or editing. AI tools may not be used to fabricate sources, citations, or data.",
  },
];

function EthicsStatement() {
  return (
    <div className="ethicsPage">
      {/* HEADER */}
      <div className="ethicsHeader">
        <h1 className="ethicsTitle">🏛 Ethics Statement</h1>
        <p className="ethicsSubtitle">
          MLS Publications is committed to the highest standards of academic
          integrity, ethical publishing, and professional responsibility. Our
          policies are guided by principles inspired by the{" "}
          <strong>Committee on Publication Ethics (COPE)</strong> and best
          practices in legal scholarship.
        </p>
        <p className="ethicsIntro">
          All authors, reviewers, editors, and contributors are expected to
          uphold the following ethical commitments:
        </p>
      </div>

      {/* COMMITMENTS */}
      <ul className="ethicsList">
        {ethicsCommitments.map((item, index) => (
          <li key={index} className="ethicsItem">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>

      {/* FINAL NOTE */}
      <div className="ethicsFinal">
        <p>
          By submitting a manuscript, authors affirm that they have read,
          understood, and agree to comply with this{" "}
          <strong>Ethics Statement</strong>, and accept full responsibility for
          the integrity and legality of their work.
        </p>
      </div>
    </div>
  );
}

export default EthicsStatement;

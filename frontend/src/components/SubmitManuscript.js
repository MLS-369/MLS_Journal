import React, { useState } from "react";
import "../styles/SubmitManuscript.css";

function SubmitManuscript() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    title: "",
    abstract: "",
    keywords: "",
    manuscript: null,
    authorInfo: null,
    declaration: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("institution", formData.institution);
  data.append("title", formData.title);
  data.append("abstract", formData.abstract);
  data.append("keywords", formData.keywords);

  data.append("manuscript", formData.manuscript);
  data.append("authorInfo", formData.authorInfo);
  data.append("declaration", formData.declaration);

  try {
    const res = await fetch("http://localhost:5000/api/submit-manuscript", {
      method: "POST",
      body: data, // IMPORTANT: no headers here
    });

    const result = await res.json();
    alert(result.message);
  } catch (err) {
    console.error(err);
    alert("Submission failed");
  }
};

  // ✅ FIXED: Download PDF from backend API
  const downloadDeclaration = () => {
    window.open("http://localhost:5000/api/pdf/declaration", "_blank");
  };

  const reviewSteps = [
    { step: 1, title: "Initial Screening", description: "Formatting and plagiarism compliance check." },
    { step: 2, title: "Editorial Evaluation", description: "Relevance and research quality assessment." },
    { step: 3, title: "Peer Review", description: "Double-anonymous expert review." },
    { step: 4, title: "Review Synthesis", description: "Consolidated editorial decision." },
    { step: 5, title: "Author Revision", description: "Revisions with point-by-point response." },
    { step: 6, title: "Final Review", description: "Final editorial approval." },
    { step: 7, title: "Publication", description: "Formatting, DOI allocation, and publication." },
  ];

  return (
    <div className="submitContainer">
      {/* INTRO */}
      <div className="submitIntro">
        <h2 className="submitTitle">Submit Your Manuscript</h2>
        <p className="submitText">
          <strong>MLS Law Journal</strong> invites original, unpublished manuscripts
          from academicians, researchers, lawyers, and law students.
        </p>
      </div>

      {/* FORM */}
      <div className="formSection">
        <h3 className="formTitle">Manuscript Submission Form</h3>

        <form onSubmit={handleSubmit} className="submissionForm">
          {/* AUTHOR INFO */}
          <fieldset className="fieldset">
            <legend className="legend">Author Information</legend>

            <label>Full Name</label>
            <input name="fullName" required placeholder="Enter your full name" onChange={handleInputChange} />

            <label>Email Address</label>
            <input type="email" name="email" required placeholder="your email@example.com" onChange={handleInputChange} />

            <label>Institution / Organization</label>
            <input name="institution" onChange={handleInputChange} placeholder="Your university or organization"/>
          </fieldset>

          {/* MANUSCRIPT DETAILS */}
          <fieldset className="fieldset">
            <legend className="legend">Manuscript Details</legend>

            <label>Manuscript Title</label>
            <input name="title" required onChange={handleInputChange} placeholder="Enter manuscript title"/>

            <label>Abstract</label>
            <textarea name="abstract" required onChange={handleInputChange} placeholder="Enter abstract (150-250 words)"/>

            <label>Keywords</label>
            <input name="keywords" required onChange={handleInputChange} placeholder="eg Constitutional Law, Rights, Junsprudence"/>
          </fieldset>

          {/* FILE UPLOADS */}
          <fieldset className="fieldset">
            <legend className="legend">Upload Files</legend>

            <label>Manuscript File (.docx or .pdf)</label>
            <input type="file" accept=".docx,.pdf" required onChange={(e) => handleFileChange(e, "manuscript")} />

            <label>Author Information Form</label>
            <input type="file" accept=".docx,.pdf" required onChange={(e) => handleFileChange(e, "authorInfo")} />

            <label>Declaration / Consent Form</label>

            <button type="button" onClick={downloadDeclaration} className="submitBtn">
              ⬇️ Download Declaration
            </button>

            <input type="file" accept=".docx,.pdf" required onChange={(e) => handleFileChange(e, "declaration")} />
          </fieldset>

          <button className="submitBtn">Submit</button>
        </form>
      </div>

      {/* REVIEW PROCESS */}
      <div className="reviewSection">
        <h3 className="sectionTitle">Review & Decision Process</h3>

        <div className="steps">
          {reviewSteps.map((s) => (
            <div key={s.step} className="step">
              <span className="stepCircle">{s.step}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="contactSection">
        <h3>Need Help?</h3>
        <p>Email us at</p>
        <a href="mailto:info.ijllr@gmail.com">info.ijllr@gmail.com</a>
      </div>
    </div>
  );
}

export default SubmitManuscript;
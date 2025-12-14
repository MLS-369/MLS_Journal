import {
  BookOpen,
  Zap,
  Unlock,
  Target,
  Award
} from "lucide-react";
import "../styles/WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose MLS Publications?</h2>
      <p className="subtitle">
        Excellence in legal scholarship with global reach and impact
      </p>

      <div className="cards">
        <div className="card">
          <BookOpen className="icon" />
          <h3>Rigorous Peer Review</h3>
          <p>
            Double-anonymous peer review process with expert legal scholars
            ensuring publication quality
          </p>
        </div>

        <div className="card">
          <Zap className="icon" />
          <h3>Peer Reviewed Publication</h3>
          <p>
            40 day peer review process with swift decision-making without
            compromising on quality
          </p>
        </div>

        <div className="card">
          <Unlock className="icon" />
          <h3>Open Access</h3>
          <p>
            All publications are freely accessible to promote knowledge
            dissemination and academic growth
          </p>
        </div>

        <div className="card">
          <Target className="icon" />
          <h3>Author Support</h3>
          <p>
            Comprehensive support from submission to publication with free DOI
            links and certificates
          </p>
        </div>

        <div className="card center-card">
          <Award className="icon" />
          <h3>Recognition</h3>
          <p>
            Certificate of Publication, Certificate of Excellence, and internship
            opportunities for contributors
          </p>
        </div>
      </div>
    </section>
  );
}

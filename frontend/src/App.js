import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import About from "./components/About";
import CurrentIssue from "./components/CurrentIssue";
import Submissionguidline from "./components/Submissionguidline";
import Editorialboard from "./components/Editorialboard";
import PeerReviewProcessPage from "./components/Peerreview";
import PublicationProcessPage from "./components/PublicationProcess";
import OpenAccessPolicyPage from "./components/OpenAccessPolicyPage";
import PublicationPrintPolicy from "./components/PublicationPrintPolicy";
import EthicsStatement from "./components/EthicsStatement";
import SubmitManuscript from "./components/SubmitManuscript";

function App() {
  return (
    <ThemeProvider>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChoose />
              <Cta />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
        <Route path="/current-issue" element={<CurrentIssue />} />
        <Route path="/submission-guidelines" element={<Submissionguidline />} />
        <Route path="/editorial-board" element={<Editorialboard />} />
        <Route path="/peer-review-process" element={<PeerReviewProcessPage />} />
        <Route path="/publication-process" element={<PublicationProcessPage />} />
        <Route path="/open-access" element={<OpenAccessPolicyPage />} />
        <Route path="/publication-policy" element={<PublicationPrintPolicy />} />
        <Route path="/ethics" element={<EthicsStatement />} />
        <Route path="/submit" element={<SubmitManuscript />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;

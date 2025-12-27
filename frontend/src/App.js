import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PageTransition from "./components/PageTransition";
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
            <PageTransition>
              <Hero />
              <WhyChoose />
              <Cta />
            </PageTransition>
          }
        />

        {/* ABOUT PAGE */}
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/current-issue" 
          element={
            <PageTransition>
              <CurrentIssue />
            </PageTransition>
          } 
        />
        <Route 
          path="/submission-guidelines" 
          element={
            <PageTransition>
              <Submissionguidline />
            </PageTransition>
          } 
        />
        <Route 
          path="/editorial-board" 
          element={
            <PageTransition>
              <Editorialboard />
            </PageTransition>
          } 
        />
        <Route 
          path="/peer-review-process" 
          element={
            <PageTransition>
              <PeerReviewProcessPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/publication-process" 
          element={
            <PageTransition>
              <PublicationProcessPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/open-access" 
          element={
            <PageTransition>
              <OpenAccessPolicyPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/publication-policy" 
          element={
            <PageTransition>
              <PublicationPrintPolicy />
            </PageTransition>
          } 
        />
        <Route 
          path="/ethics" 
          element={
            <PageTransition>
              <EthicsStatement />
            </PageTransition>
          } 
        />
        <Route 
          path="/submit" 
          element={
            <PageTransition>
              <SubmitManuscript />
            </PageTransition>
          } 
        />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;

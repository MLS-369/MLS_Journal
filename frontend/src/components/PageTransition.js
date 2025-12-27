import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PageTransition.css";

export default function PageTransition({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  );
}


import React, { useState, useEffect } from "react";
import { ArrowUpward } from "@mui/icons-material";
import "./styles/ScrollButton.css"; // ✅ Make sure the CSS file exists

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // ✅ Show button when scrolling down
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top
  };

  return (
    <button
      className={`scroll-button ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpward />
    </button>
  );
};

export default ScrollButton;

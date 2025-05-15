import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.scrollTopButton}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="greenGradient"
            x1="32"
            y1="2"
            x2="32"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0B6623" /> {/* Dark green */}
            <stop offset="50%" stopColor="#32CD32" /> {/* Lime green */}
            <stop offset="100%" stopColor="#7CFC00" /> {/* Light green */}
          </linearGradient>
        </defs>

        <path
          fill="url(#greenGradient)"
          d="M32 2
        L28 18
        L18 14
        L24 26
        L14 26
        L22 34
        L12 38
        L24 38
        L20 50
        L32 42
        L44 50
        L40 38
        L52 38
        L42 34
        L50 26
        L40 26
        L46 14
        L36 18
        Z"
        />

        {/* White veins */}
        <path d="M32 2 L32 62" stroke="white" />
        <path d="M28 18 L28 38" stroke="white" />
        <path d="M36 18 L36 38" stroke="white" />
        <path d="M24 26 L24 38" stroke="white" />
        <path d="M40 26 L40 38" stroke="white" />
        <path d="M22 34 L22 38" stroke="white" />
        <path d="M42 34 L42 38" stroke="white" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

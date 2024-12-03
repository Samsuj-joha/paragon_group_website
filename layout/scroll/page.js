"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";  // Upward arrow icon from react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} /> 
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

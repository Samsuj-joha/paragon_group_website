
'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const slides = [
    "/assets/images/landing-carosel/landing-page1.jpeg", // Image 1
    "/assets/images/landing-carosel/landing-page2.jpeg", // Image 2
    "/assets/images/landing-carosel/landing-page3.jpg",
    "/assets/images/landing-carosel/landing-page4.jpg",
    "/assets/images/landing-carosel/landing-page5.jpg",
    "/assets/images/landing-carosel/landing-page6.png",
    "/assets/images/landing-carosel/landing-page7.png",
    "/assets/images/landing-carosel/landing-page8.jpg",
    "/assets/images/landing-carosel/landing-page9.jpg" // Image 9
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNextSlide = () => {
    setFadeAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFadeAnimation(false);
    }, 300); // Animation duration
  };

  const handlePreviousSlide = () => {
    setFadeAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setFadeAnimation(false);
    }, 500); // Animation duration
  };

  return (
    <header className="relative w-full h-screen z-10">
      {/* Carousel */}
      <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${fadeAnimation ? "opacity-0" : "opacity-100"}`}>
        <Image
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Fixed Header Content */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-70 bg-[#263e7a] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/paragongroup-logo.png"
                alt="Paragon Group"
                height={100}
                width={100}
                quality={100}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navbar Section */}
          <div>
            <Navbar />
          </div>

          {/* Search Section */}
          <div>
            <SearchMenu />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePreviousSlide}
          className="bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNextSlide}
          className="bg-[#faa91d] text-white p-3 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import PoultryHeader from "@/layout/poultry-header/page";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-6 w-[90%] max-w-[600px] rounded-lg shadow-lg transform transition-all duration-500">
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          X
        </button>
        <video controls className="w-full rounded-lg shadow-md">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const PoultryFarming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <PoultryHeader />

      {/* First Section with Animation */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="w-full sm:w-1/2 relative transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src="/assets/images/poultry-images/poultry-image-2.jpg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover rounded-lg shadow-lg"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer animate-pulse"
                onClick={openModal}
              >
                <span className="text-6xl">▶</span> {/* Video Icon */}
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-600">Poultry Farming</h2>
              <p className="text-lg mb-4 text-gray-700 transition duration-300 hover:text-blue-600">
                Established in 1993, Paragon Poultry is one of the top three poultry
                farmers in Bangladesh. Our farms are strategically located across
                the country in remote areas, away from biological hazards, and
                pollution to facilitate the best environment for high-quality day-old poultry.
              </p>
              <p className="text-lg text-gray-700">
                Furthermore, we also produce commercial layers and broilers for
                direct consumers to ensure safe, sustainable poultry meat and eggs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Second Section with Animated Buttons */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-600">Our Focus Areas</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {/* Header buttons */}
            <button
              onClick={() => handleSectionClick(1)}
              className={`transition-all duration-300 text-xl px-6 py-2 rounded-md transform ${
                activeSection === 1
                  ? "bg-blue-500 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-black hover:bg-blue-500 hover:text-white"
              }`}
            >
              Business Operations
            </button>
            <button
              onClick={() => handleSectionClick(2)}
              className={`transition-all duration-300 text-xl px-6 py-2 rounded-md transform ${
                activeSection === 2
                  ? "bg-blue-500 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-black hover:bg-blue-500 hover:text-white"
              }`}
            >
              Product Category
            </button>
            <button
              onClick={() => handleSectionClick(3)}
              className={`transition-all duration-300 text-xl px-6 py-2 rounded-md transform ${
                activeSection === 3
                  ? "bg-blue-500 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-black hover:bg-blue-500 hover:text-white"
              }`}
            >
              Business Units
            </button>
          </div>
        </div>

        {/* Conditional Content Rendering with Smooth Transitions */}
        <div className="container mx-auto flex flex-col sm:flex-row gap-10 transition-all duration-500 ease-in-out">
          {/* Left side with image */}
          <div className="w-full sm:w-1/2 relative">
            {activeSection === 1 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-3.jpg"
                alt="Business Operations"
                width={1600}
                height={900}
                className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-4.jpg"
                alt="Product Category"
                width={1600}
                height={900}
                className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-5.jpg"
                alt="Business Units"
                width={1600}
                height={900}
                className="object-cover w-full h-[300px] rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105"
              />
            )}
          </div>

          {/* Right side with content */}
          <div className="w-full sm:w-1/2">
            {activeSection === 1 && (
              <>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">Business Operations</h3>
                <p className="text-lg text-gray-700">
                  Paragon Poultry operates state-of-the-art poultry farms with
                  strict biosecurity measures to ensure the health and quality of
                  our poultry. Our facilities are equipped with the latest technology
                  to manage feeding, monitoring, and care.
                </p>
              </>
            )}
            {activeSection === 2 && (
              <>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">Product Category</h3>
                <p className="text-lg text-gray-700">
                  We provide a variety of poultry products, including day-old
                  layers, broilers, and colored birds. We also offer poultry meat
                  and eggs for direct consumers, ensuring high quality and sustainability.
                </p>
              </>
            )}
            {activeSection === 3 && (
              <>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">Business Units</h3>
                <p className="text-lg text-gray-700">
                  Our business units cover a wide range of services, including
                  breeding, hatching, processing, and distribution, ensuring a
                  streamlined operation from farm to table.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PoultryFarming;

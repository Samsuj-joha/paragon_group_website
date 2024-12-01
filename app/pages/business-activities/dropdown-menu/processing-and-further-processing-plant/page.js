"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import ProcessingHeader from "@/layout/processing-header/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Modal Component for Video
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-4 w-[80%] max-w-[600px] relative">
        <button
          className="absolute top-2 right-2 text-xl text-black"
          onClick={onClose}
        >
          X
        </button>
        <video controls className="w-full">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const ProcessingPlant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1); // State to track which section is active

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle section click to change active section
  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <ProcessingHeader />
      {/* first section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex gap-10">
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/images/poultry-images/poultry-image-2.jpg"
                alt="Poultry Farming"
                layout="responsive"
                width={1600}
                height={900}
                className="object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={openModal}
              >
                <span className="text-6xl">▶</span> {/* Video Icon */}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Poultry Farming</h2>
              <p className="text-lg mb-4">
                Established in 1993, Paragon Poultry is one of the top three
                poultry farmers in Bangladesh. Our farms are strategically
                located across the country in remote areas, away from biological
                hazards, and pollution to facilitate the best environment for
                high-quality day-old poultry.
              </p>
              <p className="text-lg">
                Furthermore, we also produce commercial layers and broilers for
                direct consumers to ensure safe, sustainable poultry meat and
                eggs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Video */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* second section */}
      <section className="py-16">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Focus Areas</h2>
          <div className="flex justify-center gap-10">
            {/* Header buttons */}
            <button
              onClick={() => handleSectionClick(1)}
              className={`text-xl px-6 py-2 rounded-md ${
                activeSection === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Business Operations
            </button>
            <button
              onClick={() => handleSectionClick(2)}
              className={`text-xl px-6 py-2 rounded-md ${
                activeSection === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Product Category
            </button>
            <button
              onClick={() => handleSectionClick(3)}
              className={`text-xl px-6 py-2 rounded-md ${
                activeSection === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Business Units
            </button>
          </div>
        </div>

        {/* Conditional Content Rendering based on Active Section */}
        <div className="container mx-auto flex gap-10">
          {/* Left side with image */}
          <div className="w-full md:w-1/2 relative">
            {activeSection === 1 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-3.jpg"
                alt="Business Operations"
                width={1600} // Fixed width
                height={900} // Fixed height
                className="object-cover w-full h-[300px]" // Set consistent height
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-4.jpg"
                alt="Product Category"
                width={1600} // Fixed width
                height={900} // Fixed height
                className="object-cover w-full h-[300px]" // Set consistent height
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/poultry-images/poultry-image-5.jpg"
                alt="Business Units"
                width={1600} // Fixed width
                height={900} // Fixed height
                className="object-cover w-full h-[300px]" // Set consistent height
              />
            )}
          </div>

          {/* Right side with content */}
          <div className="w-full md:w-1/2">
            {activeSection === 1 && (
              <>
                <h3 className="text-2xl font-semibold mb-4">
                  Business Operations
                </h3>
                <p className="text-lg">
                  Paragon Poultry operates state-of-the-art poultry farms with
                  strict biosecurity measures to ensure the health and quality
                  of our poultry. Our facilities are equipped with the latest
                  technology to manage feeding, monitoring, and care.
                </p>
              </>
            )}
            {activeSection === 2 && (
              <>
                <h3 className="text-2xl font-semibold mb-4">
                  Product Category
                </h3>
                <p className="text-lg">
                  We provide a variety of poultry products, including day-old
                  layers, broilers, and colored birds. We also offer poultry
                  meat and eggs for direct consumers, ensuring high quality and
                  sustainability.
                </p>
              </>
            )}
            {activeSection === 3 && (
              <>
                <h3 className="text-2xl font-semibold mb-4">Business Units</h3>
                <p className="text-lg">
                  Our business units cover a wide range of services, including
                  breeding, hatching, processing, and distribution, ensuring a
                  streamlined operation from farm to table.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      {/* New Section: Our Certifications */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Certifications</h2>
          <Slider {...sliderSettings}>
            <div className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/processing-image/processing-carosel1.jpg"
                  alt="Certification 1"
                  width={500}
                  height={300}
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium">Certification Title 1</h3>
                  <p className="text-gray-600">
                    Description for Certification 1
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/processing-image/processing-carosel2.jpg"
                  alt="Certification 2"
                  width={500}
                  height={300}
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium">Certification Title 2</h3>
                  <p className="text-gray-600">
                    Description for Certification 2
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/processing-image/processing-carosel3.jpg"
                  alt="Certification 3"
                  width={500}
                  height={300}
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium">Certification Title 3</h3>
                  <p className="text-gray-600">
                    Description for Certification 3
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ProcessingPlant;
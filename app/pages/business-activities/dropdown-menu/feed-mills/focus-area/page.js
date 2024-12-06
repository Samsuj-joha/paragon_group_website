"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFeed = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Focus Areas
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {/* Header buttons */}
          <motion.button
            onClick={() => handleSectionClick(1)}
            className={`text-xl px-6 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Business Operations
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(2)}
            className={`text-xl px-6 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Product Category
          </motion.button>
          <motion.button
            onClick={() => handleSectionClick(3)}
            className={`text-xl px-6 py-2 rounded-md transition-colors duration-300 w-full sm:w-auto ${
              activeSection === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Business Units
          </motion.button>
        </div>
      </div>

      {/* Conditional Content Rendering based on Active Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            {activeSection === 1 && (
              <Image
                src="/assets/images/feedmil-images/image2.png"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/feedmil-images/image3.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/feedmil-images/image4.png"
                alt="Business Units"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
          </motion.div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2">
          {activeSection === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Business Operations
              </h3>
              <p className="text-md text-gray-500 pb-5">
                In total, Paragon Group runs 16 lines in 6 locations under its
                concerns. Those are-
              </p>

              <li className="text-sm text-gray-500">
                {" "}
                Paragon Poultry Limited (Feed division), Gazipur.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Denm Poultry Limited (Feed division), Kapasia.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Paragon Feed Limited, (Unit-2), Savar.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Jessore Feed Limited, Jessore.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Chittagong Feed Limited, Chattogram.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Rangpur Poultry Limited (Feed division), Rangpur.
              </li>
              <p className="text-md text-gray-500 pt-5">
                The company’s operations are spread throughout the country, with
                plans to expand more operational units in the future.
              </p>
            </motion.div>
          )}
          {activeSection === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Product Category
              </h3>
              <p className="text-md text-gray-600 text-justify">
                Paragon is producing wide range of feed in Poultry, Fish and
                Cattle industry.
              </p>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong>Poultry Feed –</strong> Boiler feed, Layer feed & Sonali
                feed.
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong> Fish Feed– </strong>Flouting fish feed & Sinking fish
                feed.
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong>Shrimp Feed.</strong>
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong>Cattle Feed–</strong> Lactating feed & Fattening feed.
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong>Duck Feed.</strong>
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                <strong>Quail Feed.</strong>
              </li>
            </motion.div>
          )}
          {activeSection === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Business Units
              </h3>
              <p className="text-md text-gray-500 pb-5">
                In total, Paragon Group runs 16 lines in 6 locations under its
                concerns. Those are-
              </p>

              <li className="text-sm text-gray-500">
                {" "}
                Paragon Poultry Limited (Feed division), Gazipur.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Denm Poultry Limited (Feed division), Kapasia.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Paragon Feed Limited, (Unit-2), Savar.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Jessore Feed Limited, Jessore.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Chittagong Feed Limited, Chattogram.
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Rangpur Poultry Limited (Feed division), Rangpur.
              </li>
              <p className="text-md text-gray-500 pt-5">
                The company’s operations are spread throughout the country, with
                plans to expand more operational units in the future.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasFeed;

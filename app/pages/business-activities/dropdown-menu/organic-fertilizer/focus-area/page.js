"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasOrganic = () => {
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
            Farming application
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
           Comparison
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
            Our Location
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
                src="/assets/images/organic-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/organic-images/image3.jpg"
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
              Farming application
              </h3>
              <p className="text-md text-gray-500 pb-8">
              In organic farming, a compromise between the use of artificial and organic fertilizers is common, often using inorganic fertilizers supplemented with the application of organics that are readily available such as the return of crop residues or the application of manure.
              </p>
              <p className="text-md text-gray-500 pb-8">
              Cover crops are also grown to enrich soil as a green manure through nitrogen fixation from the atmosphere; as well as phosphorus (through nutrient mobilization) content of soils.
              </p>
              <p className="text-md text-gray-500 pb-8">
              Fertilizer trees aid organic farming by bringing nutrients from the depths of the soil, and by assisting in the regulation of water usage.
              </p>
              <p className="text-md text-gray-500 pb-8">
              Leguminous cover crops or fertilizer trees are also grown to enrich soil as a green manure through nitrogen fixation from the atmosphere; as well as phosphorus (through nutrient mobilization) content of soils.
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
              Comparison
              </h3>
              <p className="text-md text-gray-600 text-justify  pt-5">
              In general, the nutrients in organic fertilizer are both more diluted and also much less readily available to plants. This may be however desired as a form of slow-release fertilizer containing insoluble nitrogen. By their nature, organic fertilizers increase physical and biological nutrient storage mechanisms in soils, mitigating risks of over-fertilization. Organic fertilizer nutrient content, solubility, and nutrient release rates are typically much lower than mineral (inorganic) fertilizers. A University of North Carolina study found that potential mineralizable nitrogen (PMN) in the soil was 182–285% higher in organic mulched systems than in the synthetics control.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              There do exist 'fast-release' organic fertilizers with a risk of fertilizer burn. These include uncomposted animal manures, fish emulsion, blood meal, and urine. Composting converts nitrogen in these sources into more stable forms (with some loss).
              Soil biology
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Organic fertilizers have been known to improve biodiversity (soil life) and long-term productivity of soil, and may prove a large depository for excess carbon dioxide.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Organic nutrients increase the abundance of soil organisms by providing organic matter and micronutrients for organismal relationships such as fungal mycorrhiza, (which aid plants in absorbing nutrients), and can drastically reduce external inputs of pesticides, energy and fertilizer, at the cost of decreased yield.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Organic fertilizers from composts and other sources can be quite variable from one batch to the next. Without batch testing, amounts of applied nutrient cannot be precisely known. Nevertheless, one or more studies have shown they are at least as effective as chemical fertilizers over longer periods of use.
              </p>
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

export default FocusAreasOrganic;

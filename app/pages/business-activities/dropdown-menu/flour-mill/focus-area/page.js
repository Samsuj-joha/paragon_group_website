"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFlour = () => {
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
                src="/assets/images/flour-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/flour-images/image3.jpg"
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
              <p className="text-md text-gray-500 pb-8">
                Flour milling is a stable and mature industry that is less
                volatile than many other sectors, making it an attractive option
                for investors looking for stable returns. Flour is the main
                ingredient in many food in our daily life, with the increasing
                of the global population, flour demand will increase too.
              </p>
              <p className="text-md text-gray-500 pb-8">
                Milling technology is an evolving technology that produces
                higher quality flour that is more in line with modern eating
                habits.
              </p>
              <p className="text-md text-gray-500 pb-8">
                Investing in the flour industry also provides exposure to
                different global markets and currencies, providing investors
                with further diversification of their portfolios.
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
                Product Catagory
              </h3>
              <p className="text-md text-gray-600 text-justify  pt-5">
                This is a kind of wheat flour that is most widely used around
                the world. It is grinded from the wheat kernel (endosperm) that
                is separated from bran and germ in the wheat milling process. As
                this kind of wheat flour is manufactured from the mixture of
                hard wheat and soft wheat, therefore it is called “all purpose”.
                It is usually used to make cakes, yeast breads, cookies,
                pastries, many types of Chinese food, etc.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
                In China, all-purpose wheat flour is also classified into Grade
                1, Grade 2, Standard and Plain Wheat Flour.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
                All purpose flour contains a lot of nutrient elements, such as
                iron, Vitamin B1, Vitamin B2, Vitamin B (folic acid) and niacin.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
                Cake flour is specialized for making cakes. It meets the
                following requirements: moisture content does not exceed 14%,
                wet gluten content between 22% and 24%, can go through CB42
                sieve, etc. In fact, cake flour also belongs to low gluten flour
                (gluten content &lt; 28%), since in the concocting of cake
                batter, protein will absorb the moisture in flour and form
                gluten; as a result, the forming degree of gluten determines the
                quality of cakes.
              </p>

              <p className="text-md text-gray-600 text-justify  pt-5">
                If the forming degree of gluten is insufficient, it may cause
                low strength of cake frame, and the low strength is not enough
                to stand the starch, sugar, etc. in raw material; as a result,
                cake structure will be dense, not in loose structure, and the
                volume is small. If the gluten forming degree is too high, the
                gluten will capture the water in eggs, and the cake structure
                will be rigid and not soft.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
                The flour for making cookie requires low elasticity, tenacity
                and extensibility of gluten, but plasticity must be good.
                Therefore low gluten wheat flour and plain flour are good
                choices for making cookies.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
                This kind of wheat flour is milled from the whole kernel of
                wheat, which means before flour milling, the endosperm is not
                separated from bran (different from all-purpose wheat flour).
                Because of the existence of bran and no additives like gluten
                fortifier or brightener, whole wheat flour is much healthier
                than all-purpose wheat flour.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
                The self-rising flour is a kind of all-purpose flour that has
                been added certain amount of additive which can produce gas
                (usually yeast powder or other raising agents). It is much more
                convenient to use at home or field working.
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

export default FocusAreasFlour;

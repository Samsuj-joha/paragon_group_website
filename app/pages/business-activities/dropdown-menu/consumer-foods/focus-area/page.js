"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFood = () => {
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
                src="/assets/images/consumer-food-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/consumer-food-images/image3.jpg"
                alt="Product Category"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 3 && (
              <Image
                src="/assets/images/consumer-food-images/image4.png"
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
              <p className="text-md text-gray-500 pb-5 font-semibold">
                Paragon has three different plant for process, further process &
                dry food unit. All units located in Ashulia, Savar. Paragon has
                its own delivery chain through which it is delivering its
                products to consumers end.
              </p>
              <p className="text-md text-gray-500 pb-5 font-semibold">
                Currently processing
              </p>

              <li className="text-sm text-gray-500">
                {" "}
                Process Chicken production capacity: 1000 pcs birds dressed per
                hour
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Further process production capacity: 5000 kg per day with
                different product categories
              </li>
              <li className="text-sm text-gray-500">
                {" "}
                Dry food production capacity : 5000 kg per day with different
                product categories
              </li>
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
              <p className="text-md text-gray-600 text-justify py-2">
                In Paragon Agro’s process, further process, Dry food unit,
                varieties of product are being processed in different form. Like
              </p>
              <p className="text-md text-gray-600 text-justify py-2">
                <strong> Processing unit:</strong> Whole chicken (with and
                without skin), Chicken breast boneless, Chicken leg boneless,
                Chicken drumstick, Chicken thigh, Chicken wings etc.
              </p>

              <p className="text-md text-gray-600 text-justify py-2">
                <strong> Further process unit:</strong> In its portfolio, the
                company produces Chicken Nugget, Chicken Sausage, Beef Sausage,
                Chicken Burger Patty, Shami Kabab, Chicken Meatball, Chicken
                Ball, Chicken Strip, Chicken Hot & Spicy Wings, Chicken Popcorn,
                Chicken Lollipop, Chicken Spring Roll, Red Wheat Ruti, Paratha,
                Dalpuri, Chicken Samusa, Crispy chicken , Spicy chicken and
                different types of Momo.
              </p>

              <p className="text-md text-gray-600 text-justify py-2">
                <strong> Dry food unit:</strong> In its portfolio, the company
                produces Plain Cake , Muffin Cake, Cup Cake, different flavored
                Cookies, Toast biscuits , Chanachur, Motor Bhaja, Dal Bhaja,
                Sweets, Pastry Cake and different types of special cookies.
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

              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                Process Plant
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                Further Process Plant
              </li>
              <li className="text-sm text-gray-500 list-decimal">
                {" "}
                Dry Food unit
              </li>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasFood;

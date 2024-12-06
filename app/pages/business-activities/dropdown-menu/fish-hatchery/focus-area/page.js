"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FocusAreasFish = () => {
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
                src="/assets/images/fish-hatchary-images/image2.jpg"
                alt="Business Operations"
                width={1600}
                height={400}
                className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
              />
            )}
            {activeSection === 2 && (
              <Image
                src="/assets/images/fish-hatchary-images/image3.jpg"
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
              Hatcheries produce larval and juvenile fish and shellfish for transferral to aquaculture facilities where they are ‘on-grown’ to reach harvest size. Hatchery production confers three main benefits to the industry:
              </p>
              <p className="text-md text-gray-500 pb-8">
              1. Out of season production: Consistent supply of fish from aquaculture facilities is an important market requirement. Broodstock conditioning can extend the natural spawning season and thus the supply of juveniles to farms. Supply can be further guaranteed by sourcing from hatcheries in the opposite hemisphere i.e. with opposite seasons.
              </p>
              <p className="text-md text-gray-500 pb-8">
              2. Genetic improvement: Genetic modification is conducted in some hatcheries to improve the quality and yield of farmed species. Artificial fertilisation facilitates selective breeding programs which aim to improve production characteristics such as growth rate, disease resistance, survival, colour, increased fecundity and/or lower age of maturation. Genetic improvement can be mediated by selective breeding, via hybridization, or other genetic manipulation techniques.
              </p>
              <p className="text-md text-gray-500 pb-8">
              3. Reduce dependence on wild-caught juveniles: In 2008 aquaculture accounted for 46% of total food fish supply, around 115 million tonnes. Although wild caught juveniles are still utilised in the industry, concerns over sustainability of extracting juveniles, and the variable timing and magnitude of natural spawning events, make hatchery production an attractive alternative to support the growing demands of aquaculture.
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
              Production Steps
              </h3>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Broodstock conditioning is the process of bringing adults into spawning condition by promoting the development of gonads. Broodstock conditioning can also extend spawning beyond natural spawning periods, or for production of species reared outside their natural geographic range with different environmental conditions. Some hatcheries collect wild adults and then bring them in for conditioning whilst others maintain a permanent breeding stock. Conditioning is achieved by holding broodstock in flow-through tanks at optimal conditions for light, temperature, salinity, flow rate and food availability (optimal levels are species specific). Another important aspect of broodstock conditioning is ensuring the production of high quality eggs to improve growth and survival of larvae by optimising the health and welfare of broodstock individuals. Egg quality is often determined by the nutritional condition of the mother. High levels of lipid reserves in particular are required to improve larval survival rates.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Natural spawning can occur in hatcheries during the regular spawning season however where more control over spawning time is required spawning of mature animals can be induced by a variety of methods.[5] Some of the more common methods are:
              Manual stripping: For shellfish, gonads are generally removed and gametes are extracted or washed free. Fish can be manually stripped of eggs and sperm by stroking the anaesthetised fish under the pectoral fins towards the anus causing gametes to freely flow out.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Environmental manipulation: Thermal shock, where cool water is alternated with warmer water in flow-through tanks can induce spawning. Alternatively, if environmental cues that stimulate natural spawning are known, these can be mimicked in the tank e.g. changing salinity to simulate migratory behaviour. Many individuals can be induced to spawn this way, however this increases the likelihood of uncontrolled fertilisation occurring.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Chemical injection: A number of chemicals can be used to induce spawning with various hormones being the most commonly used.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Prior to fertilisation, eggs can be gently washed to remove wastes and bacteria that may contaminate cultures. Promoting cross-fertilisation between a large number of individuals is necessary to retain genetic diversity in hatchery produced stock. Batches of eggs are kept separate, fertilised with sperm obtained from several males and allowed to stand for an hour or two before samples are analyzed under a microscope to ensure high rates of fertilisation and to estimate numbers to be transferred to larval rearing tanks.
              </p>
              <p className="text-md text-gray-600 text-justify  pt-5">
              Rearing larvae through the early life stages is conducted in nurseries which are generally closely associated with hatcheries for fish culture whilst it is common for shellfish nurseries to exist separately. Nursery culture of larvae to rear juveniles of a size suitable for transferral to on-growing facilities can be performed in a variety of different systems which may be entirely land-based, or larvae may be later transferred to sea-based rearing systems which reduce the need to supply feed. Juvenile survival is dependent on very high quality water conditions. Feeding is an important component of the rearing process. Although many species are able to grow on maternal reserves alone (lecithotrophy), most commercially produced species require feeding to optimise survival, growth, yield and juvenile quality. Nutritional requirements are species specific and also vary with larval stage. Carnivorous fish are commonly fed with live prey; rotifers are usually offered to early larvae due to their small size, progressing to larger Artemia nauplii or zooplankton. The production of live feed on-site or buying-in is one of the biggest costs for hatchery facilities as it is a labour-intensive process. The development of artificial feeds is targeted to reduce the costs involved in live feed production and increase the consistency of nutrition, however decreased growth and survival has been found with these alternatives.
              </p>
              <p className="text-md text-gray-600 text-justify pt-5">
              The hatchery production of shellfish also involves a crucial settling phase where free-swimming larvae settle out of the water onto a substrate and undergo metamorphosis if suitable conditions are found. Once metamorphosis has taken place the juveniles are generally known as spat, it is this phase which is then transported to on-growing facilities. Settlement behaviour is governed by a range of cues including substrate type, water flow, temperature, and the presence of chemical cues indicating the presence of adults, or a food source etc. Hatchery facilities therefore need to understand these cues to induce settlement and also be able to substitute artificial substrates to allow for easy handling and transportation with minimal mortality.
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

export default FocusAreasFish;

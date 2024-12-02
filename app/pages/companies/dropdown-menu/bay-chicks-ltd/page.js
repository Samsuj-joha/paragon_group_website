"use client";

import React from "react";
import Image from "next/image";
import AquaHeader from "@/company-layout/aqua-header/page";

const AquaBreedersLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/bay-chicks.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[295px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Bay Chicks Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Bay Chicks Limited is a dynamic and innovative company committed to providing high-quality broiler chicks to customers worldwide. Operating modern hatcheries in Bangladesh, the company uses advanced technologies and sustainable practices to produce healthy and sustainable products. With a focus on quality and customer satisfaction, Bay Chicks Limited is a trusted supplier of broiler chicks to both domestic and international markets. The company places a high value on environmental sustainability and uses renewable energy sources to reduce its carbon footprint. With a team of experienced professionals, Bay Chicks Limited is dedicated to providing reliable and efficient service to its customers. As a subsidiary of the Paragon Group, Bay Chicks Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Bay Chicks Limited is poised for continued success in the global poultry industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AquaBreedersLtd;

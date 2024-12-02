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
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/bay-grand.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={900}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Bay Grand Parents Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Bay Grand Parents Limited is a leading supplier of high-quality breeding stock 
              for the poultry industry worldwide. Operating modern hatcheries in Bangladesh, 
              the company uses advanced technologies and sustainable practices to produce healthy and
              genetically superior parent stock. With a focus on quality and customer satisfaction, Bay Grand Parents Limited is committed to providing its customers with high-performance breeding stock that meets international standards. The company places a high value on environmental sustainability, utilizing renewable energy sources to reduce its carbon footprint. With a team of experienced professionals, Bay Grand Parents Limited is dedicated to providing reliable and efficient service to its customers worldwide. As a subsidiary of the Paragon Group, Bay Grand Parents Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, 
              Bay Grand Parents Limited is poised for continued success in the global poultry industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AquaBreedersLtd;

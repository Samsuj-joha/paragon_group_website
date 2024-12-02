"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const MoynamotiHatchary = () => {
  return (
    <>
      <DenmHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/moynamoti.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[255px] border-[4px] border-[#f99d19] rounded-[100px] top-[10px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Moynamoti Hatchery Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Moynamoti Hatchery Limited, a subsidiary of the Paragon Group, is a modern hatchery producing high-quality poultry products. The company is committed to providing safe, healthy, and nutritious products that meet international standards. With a team of experienced professionals, Moynamoti Hatchery offers reliable and efficient service to customers worldwide. As part of the Paragon Group, the hatchery has access to the resources and expertise of a diversified conglomerate. Through a commitment to animal welfare, sustainability, and innovation, Moynamoti Hatchery is poised for continued growth and success in the global poultry industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoynamotiHatchary;

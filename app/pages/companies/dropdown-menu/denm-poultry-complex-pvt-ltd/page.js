"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const DenmPoultry = () => {
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
                  src="/assets/images/company-images/denm-image.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Denm Poultry Complex (Pvt.) Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Denm Poultry Complex (Pvt.) Limited, a subsidiary of the Paragon Group, is a leading poultry farming company in Bangladesh. The company operates a modern poultry complex in Gazipur, utilizing advanced technologies and sustainable practices to produce high-quality poultry products. Committed to providing safe, healthy, and delicious poultry products that meet international standards, Denm Poultry Complex places a high value on animal welfare, implementing best practices in biosecurity and disease prevention. With a team of experienced professionals, the company is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Denm Poultry Complex has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Denm Poultry Complex is positioned for continued growth and success in the global poultry industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DenmPoultry;

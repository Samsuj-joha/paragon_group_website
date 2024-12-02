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
                  src="/assets/images/company-images/jessor.png"
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
              <h2 className="text-3xl font-semibold mb-4">Jessore Feed Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Jessore Feed Ltd., a subsidiary of the Paragon Group, is a leading animal feed producer in Bangladesh. The company operates a modern feed mill in Jessore, utilizing advanced technologies and sustainable practices to produce high-quality and nutritious animal feed. Jessore Feed Ltd. is committed to providing its customers with safe and healthy animal feed that meets international standards. With a team of skilled professionals, the company is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Jessore Feed Ltd. has access to the resources and expertise of a diversified conglomerate. Through a commitment to quality, sustainability, and innovation, Jessore Feed Ltd. is positioned for continued growth and success in the global animal feed industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DenmPoultry;

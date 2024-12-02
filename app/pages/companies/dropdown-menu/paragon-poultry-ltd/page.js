"use client";

import React from "react";
import Image from "next/image";
import ParagonPoultryHeader from "@/company-layout/paragon-poultry-header/page";


const ParagonPoultryLtd = () => {
  return (
    <>
      <ParagonPoultryHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/paragon-poultry2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[10px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Paragon Poultry Ltd</h2>
              <p className="text-md text-justify mb-4">
              Paragon Poultry Limited is a leading provider of high-quality poultry products in Bangladesh. We are committed to ensuring the health and wellbeing of our birds, and we use the latest technology and best practices to ensure their comfort and safety. Our state-of-the-art facilities and experienced staff enable us to produce and deliver fresh, delicious, and healthy chicken meat to our customers across the country. We are also dedicated to sustainable and ethical poultry farming practices, minimizing our environmental impact and promoting animal welfare. With our commitment to quality and customer satisfaction, we are proud to be one of the top poultry companies in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPoultryLtd;

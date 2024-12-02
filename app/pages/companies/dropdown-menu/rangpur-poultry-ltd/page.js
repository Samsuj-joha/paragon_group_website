"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const RangpurPoultryLtd = () => {
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
                  src="/assets/images/company-images/rangpur-poultry-1.png"
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
              <h2 className="text-3xl font-semibold mb-4">Rangpur Poultry Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Rangpur Poultry Limited is a leading poultry company under the Paragon Group, committed to providing high-quality and nutritious poultry products to its customers. With advanced production facilities and state-of-the-art technology, Rangpur Poultry Limited ensures the highest standard of animal welfare and food safety. The company is dedicated to serving the needs of its customers while maintaining sustainable and eco-friendly practices. Rangpur Poultry Limited is driven by its core values of integrity, innovation, and excellence, and its team of experienced professionals is committed to delivering the best possible products and services. The company's focus on continuous improvement and customer satisfaction has made it a trusted name in the poultry industry both domestically and globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RangpurPoultryLtd;

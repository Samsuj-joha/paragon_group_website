"use client";

import React from "react";
import Image from "next/image";
import ParagonPlasticHeader from "@/company-layout/paragon-plastic-header/page";


const ParagonPlastic = () => {
  return (
    <>
      <ParagonPlasticHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/paragon-plastic2.jpg"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[295px] border-[4px] border-[#f99d19] rounded-[100px] top-[10px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Paragon Plastics Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Paragon Plastics Limited is a leading manufacturer of high-quality plastic products in Bangladesh, committed to producing eco-friendly and sustainable solutions. With advanced technology and experienced professionals, we provide customized products tailored to meet the unique needs of our clients. Our products range from household goods to industrial items and packaging solutions, ensuring the highest standards of quality and safety. We are dedicated to driving innovation and excellence in the plastic manufacturing industry, contributing to the country's economic growth and development. Our team is passionate about sustainability and uses eco-friendly materials and processes in all our operations. At Paragon Plastics Limited, we believe in providing exceptional customer service and building long-term partnerships with our clients. Choose us for your plastic manufacturing needs and experience the Paragon difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPlastic;

"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const ShalbahanFarmsLtd = () => {
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
                  src="/assets/images/company-images/shalbahan.png"
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
              <h2 className="text-3xl font-semibold mb-4">Shalbahan Farms Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Shalbahan Farms Limited is a subsidiary of the Paragon Group, committed to providing high-quality and sustainable food products. We take pride in our state-of-the-art farming practices and the quality of our products. Our focus is on producing safe and healthy food through innovative and environmentally friendly methods. We employ a team of skilled professionals and use modern technology to ensure that our products meet the highest standards of quality. At Shalbahan Farms, we believe in responsible and ethical farming practices, which are reflected in our product offerings. Our products include eggs, broiler chickens, and other poultry products that are both healthy and delicious. We are committed to providing our customers with the best products possible and promoting sustainable agriculture for a healthier world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShalbahanFarmsLtd;

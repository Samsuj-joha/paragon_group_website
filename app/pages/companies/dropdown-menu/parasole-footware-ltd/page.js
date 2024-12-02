"use client";

import React from "react";
import Image from "next/image";
import ParasoleFootwareLtd from "@/company-layout/parasole-footware-header/page";




const ParasoleFootware = () => {
  return (
    <>
      <ParasoleFootwareLtd/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/parasole-footware2.png"
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
              <h2 className="text-3xl font-semibold mb-4">ParasoleFootware</h2>
              <p className="text-md text-justify mb-4">
              ParaSole Footwear Limited is a subsidiary of Paragon Group, specializing in the production of high-quality footwear. With a commitment to innovation and sustainable production, ParaSole Footwear Limited has become a leading supplier of footwear in Bangladesh and beyond. Our team of experienced designers and skilled artisans work tirelessly to create comfortable, durable, and fashionable shoes for men, women, and children. We use only the finest materials to ensure our products meet the highest standards. Our mission is to provide our customers with exceptional footwear that meets their unique needs and exceeds their expectations. Join us in walking towards a better future with ParaSole Footwear Limited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParasoleFootware;

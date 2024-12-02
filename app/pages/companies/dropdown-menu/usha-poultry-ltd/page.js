"use client";

import React from "react";
import Image from "next/image";
import UshaPoultryHeader from "@/company-layout/usha-header/page";


const UshaPoultryLtd = () => {
  return (
    <>
      <UshaPoultryHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/usha2.png"
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
              <h2 className="text-3xl font-semibold mb-4">Usha Poultry Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Usha Poultry Ltd. is a company under the Paragon Group that specializes in producing and supplying high-quality poultry products. With a commitment to excellence and sustainability, we have established ourselves as a leading player in the poultry industry. Our state-of-the-art facilities, cutting-edge technology, and highly skilled team enable us to deliver products of exceptional quality, taste, and nutritional value. We are dedicated to upholding the highest standards of animal welfare, hygiene, and food safety throughout our operations. Our products include a wide range of fresh and frozen chicken, eggs, and other poultry items, catering to both domestic and international markets. At Usha Poultry, we are passionate about providing healthy and delicious food options that meet the evolving needs and preferences of consumers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UshaPoultryLtd;

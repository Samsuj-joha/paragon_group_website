"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const FatehBaghTea = () => {
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
                  src="/assets/images/company-images/fatehbagh.png"
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
              <h2 className="text-3xl font-semibold mb-4">Fatehbagh Tea Company Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Fatehbagh Tea Company Limited is a subsidiary of the Paragon Group, and one of the leading tea producers in Bangladesh. Our tea gardens are located in the scenic hills of Srimangal, where the climate and soil are ideal for growing high-quality tea leaves. We take great care in every step of the tea production process, from planting and nurturing the tea bushes to carefully selecting and processing the leaves. Our commitment to quality has earned us a reputation for producing some of the finest teas in the region. We offer a wide range of teas, including black, green, and white teas, as well as flavored and specialty teas. Our products are sold in both domestic and international markets, and are enjoyed by tea lovers around the world. We take pride in our tea, and we are dedicated to bringing the best of Bangladesh to the world through our products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FatehBaghTea;

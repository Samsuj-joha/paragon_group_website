"use client";

import React from "react";
import Image from "next/image";
import AquaHeader from "@/company-layout/aqua-header/page";

const AquaBreedersLtd = () => {
  return (
    <>
      <AquaHeader />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/aqua2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={1600}
                  height={900}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[275px] border-[4px] border-[#f99d19] rounded-[100px] top-[45px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Aqua Breeders Ltd.</h2>
              <p className="text-md text-justify mb-4">
                Aqua Breeders Limited is a subsidiary of the Paragon Group,
                specializing in high-quality fish and shrimp breeding for
                commercial purposes. It operates modern aquaculture facilities
                in Bangladesh, using advanced technologies and sustainable
                practices. The company produces a range of species including
                tilapia, pangasius, catfish, and shrimp, supplying both domestic
                and international markets. Aqua Breeders Limited is known for
                its commitment to quality and sustainability, constantly
                innovating to improve efficiency and reduce its carbon
                footprint. The company's eco-friendly practices include using
                renewable energy sources and implementing waste management and
                water treatment best practices. Aqua Breeders Limited is a
                market leader in the Bangladesh aquaculture industry and
                continues to grow and succeed due to its innovation and
                sustainable approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AquaBreedersLtd;

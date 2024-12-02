"use client";

import React from "react";
import Image from "next/image";
import AquaHeader from "@/company-layout/aqua-header/page";
import ChittagonhFeedHeader from "@/company-layout/chittagong-feed-header/page";

const ChittagongFeed = () => {
  return (
    <>
      <ChittagonhFeedHeader/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/chittagong-feed2.png"
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
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Chittagong Feed Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Chittagong Feed Limited, a subsidiary of the Paragon Group, is a leading supplier of high-quality animal feed in Bangladesh. The company operates a modern feed mill in Chittagong, using advanced technologies and sustainable practices to produce nutritious and affordable feed for the poultry, fish, and livestock industries. With a commitment to quality and customer satisfaction, Chittagong Feed Limited offers products that meet international standards and provide exceptional performance. The company places a high value on environmental sustainability, utilizing renewable energy sources, and implementing best practices in waste management and water treatment. With a team of experienced professionals, Chittagong Feed Limited is dedicated to providing reliable and efficient service to its customers worldwide. As part of the Paragon Group, Chittagong Feed Limited has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and excellence, Chittagong Feed Limited is positioned for continued growth and success in the global animal feed market.


              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChittagongFeed;

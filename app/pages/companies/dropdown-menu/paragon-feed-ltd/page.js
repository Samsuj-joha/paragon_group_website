"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";
import ParagonFeedHeader from "@/company-layout/paragon-feed-header/page";


const ParagonFeedLtd = () => {
  return (
    <>
      <ParagonFeedHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/paragon-feed2.png"
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
              <h2 className="text-3xl font-semibold mb-4">Paragon Feed Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Paragon Feed Limited is a leading producer of high-quality animal feed, committed to supporting the growth and development of the livestock industry in Bangladesh. With advanced technology and production techniques, the company offers customized feed solutions tailored to the unique needs of its clients. Paragon Feed Limited ensures that its feed meets the highest standards of quality and safety, providing nutritious and affordable options for farmers. With a team of experienced professionals, the company is dedicated to driving the sustainability of the livestock industry in Bangladesh, contributing to the country's economic development, and supporting the livelihoods of thousands of farmers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonFeedLtd;

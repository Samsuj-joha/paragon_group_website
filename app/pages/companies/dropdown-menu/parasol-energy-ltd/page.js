"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const ParasoleEnergy = () => {
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
                  src="/assets/images/company-images/parasole-energy.jpg"
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
              <h2 className="text-3xl font-semibold mb-4">Parasol Energy Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Parasol Energy Limited, a subsidiary of the Paragon Group, is a leading developer of renewable energy projects in Bangladesh. The company specializes in solar power generation, offering innovative and sustainable solutions to meet the energy needs of its clients. Parasol Energy is committed to promoting environmental sustainability and reducing dependence on fossil fuels. With a team of experienced professionals, the company delivers reliable and efficient service to its clients. As part of the Paragon Group, Parasol Energy has access to a wide range of resources and expertise, enabling it to drive growth and innovation in the renewable energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParasoleEnergy;

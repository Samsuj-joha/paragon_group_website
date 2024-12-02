"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const SymaSolarPower = () => {
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
                  src="/assets/images/company-images/syma-solar.png"
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
              <h2 className="text-3xl font-semibold mb-4">Sympa Solar Power Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Sympa Solar Power Limited is a renewable energy company committed to providing clean and sustainable energy solutions. Our focus is on harnessing the power of the sun to create cost-effective and eco-friendly energy options for our customers. We specialize in designing, building, and operating solar power plants across the country. Our team of experts works closely with clients to provide customized solutions that meet their energy needs while reducing their carbon footprint. We are dedicated to creating a greener tomorrow by promoting the use of renewable energy sources. At Sympa Solar Power Limited, we believe in creating a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SymaSolarPower;

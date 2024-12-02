"use client";

import React from "react";
import Image from "next/image";
import DenmHeader from "@/company-layout/denm-header/page";


const ParagonAgro = () => {
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
                  src="/assets/images/company-images/paragon-agro.jpg"
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
              <h2 className="text-3xl font-semibold mb-4">Paragon Agro Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Paragon Agro Limited, a subsidiary of the Paragon Group, produces and distributes high-quality animal feed. Utilizing modern technologies and sustainable practices, the company is committed to providing safe, healthy, and nutritious feed that meets international standards. With a skilled team of professionals, Paragon Agro offers reliable and efficient service to its customers worldwide. As part of the Paragon Group, the company has access to the resources and expertise of a diversified conglomerate. Through a commitment to innovation, sustainability, and animal welfare, Paragon Agro is positioned for continued growth and success in the global agribusiness industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonAgro;

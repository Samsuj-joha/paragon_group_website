"use client";

import React from "react";
import Image from "next/image";
import ParagonPlastFiber from "@/company-layout/paragon-plast-fiber-ltd/page";


const ParagonPlastFiberLtd = () => {
  return (
    <>
      <ParagonPlastFiber/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/plast-fiber2.png"
                  alt="Poultry Farming"
                  layout="responsive"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg"
                />
                {/* Decorative Border */}
                <div
                  className="absolute h-[295px] border-[4px] border-[#f99d19] rounded-[100px] top-[10px] right-[-20px]  md:block"
                ></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-semibold mb-4">Paragon Plast Fiber Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Paragon Plast Fiber Limited is a leading manufacturer of high-quality plastic products that cater to various industries. Our advanced technology and state-of-the-art machinery allow us to produce a wide range of plastic products including woven sacks, leno bags, jumbo bags, and more. Our team of experienced professionals is committed to providing top-notch services that meet the needs of our clients. We prioritize quality control and use only the best raw materials to ensure the durability and strength of our products. Our production processes are environmentally friendly and adhere to industry standards. At Paragon Plast Fiber Limited, we strive to exceed our client's expectations and deliver products that are reliable, efficient, and cost-effective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPlastFiberLtd;

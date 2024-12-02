"use client";

import React from "react";
import Image from "next/image";
import ParagonPressHeader from "@/company-layout/paragon-press-header/page";



const ParagonPress = () => {
  return (
    <>
      <ParagonPressHeader/>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="flex gap-10 relative">
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative">
                <Image
                  src="/assets/images/company-images/press2.jpg"
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
              <h2 className="text-3xl font-semibold mb-4">Paragon Press Ltd.</h2>
              <p className="text-md text-justify mb-4">
              Paragon Press Limited is a leading printing and packaging company that specializes in producing high-quality paper products for various industries. With over three decades of experience, our skilled team of professionals delivers exceptional services that meet the needs of our clients. Our advanced technology and modern infrastructure enable us to handle large-scale production with precision and efficiency. We offer a wide range of services including printing, binding, lamination, UV coating, and more. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses of all sizes. At Paragon Press Limited, we strive to exceed our client's expectations and deliver top-notch products that meet industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParagonPress;

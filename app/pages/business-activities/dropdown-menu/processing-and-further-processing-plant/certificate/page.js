"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificateSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-10 ">
        <h2 className="text-2xl font-semibold mb-8 text-[#2772b8]">
          Our Certifications
        </h2>
        <Slider {...sliderSettings}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="px-1"> {/* Reduced padding */}
              <div className="rounded-lg overflow-hidden transition-all transform hover:scale-105">
                <Image
                  src={`/assets/images/processing-image/processing-carosel${item}.jpg`}
                  alt={`Certification ${item}`}
                  width={150}
                  height={220}
                  className="w-96 h-96 object-contain rounded-t-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default CertificateSection;





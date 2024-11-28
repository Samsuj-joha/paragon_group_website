import AboutHeader from "@/layout/about-header/page";
import React from "react";
import Image from "next/image"; // Importing Image for images

const AboutUs = () => {
  return (
    <>
      <AboutHeader />

      {/* Section 1 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold text-[#123f8e] mb-6 text-center">
            𝗔𝗯𝗼𝘂𝘁 𝗢𝘂𝗿 𝗖𝗼𝗺𝗽𝗮𝗻𝘆
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With humble beginnings, Paragon started its journey in the heart of
            Dhaka city in 1952 with a printing press founded by the late
            Mizanur Rahman. In 1993 under the leadership of Mr. Moshiur Rahman
            and Mrs. Yasmin Rahman, the business diversified to the agricultural
            sector, becoming one of the pioneers in Bangladesh. With a great
            vision, it grew and flourished into ten different business sectors,
            represented now as Paragon Group.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Paragon envisions a green and developing future. Throughout all the
            projects under the group, a significant contribution to renewable
            energy and zero waste management is always executed as it is
            critical for maintaining preservation and sustainability.
          </p>
        </div>
      </section>

      {/* Section 2: Board of Directors */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <h2 className="text-3xl font-bold text-[#123f8e] mb-12 text-center">
            Board Of Directors
          </h2>

          {/* Director 1 */}
          <div className="flex flex-col md:flex-row items-start mb-12 border-b pb-6">
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/images/aboutHeaderimage2.jpeg"
                alt="Moshiur Rahman"
                height={300}
                width={300}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Right Content */}
            <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#123f8e]">MOSHIUR RAHMAN</h3>
              <p className="text-lg font-medium text-gray-700">
                <strong>Managing Director</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I started my journey as an entrepreneur in the heart of a
                printing factory in 1979 with my father, Mizanur Rahman. As new
                industries began to evolve throughout Bangladesh, I pivoted
                towards the poultry industry in 1992 as an opportunity, capital,
                and vision amalgamated with what is Paragon today.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I want to reflect on our journey and share our values and
                mission...
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>
                  <span className="font-bold">Innovation:</span> Using technology
                  and creativity to solve problems and create value for our
                  customers.
                </li>
                <li>
                  <span className="font-bold">Integrity:</span> Upholding the
                  highest standards of honesty and ethics.
                </li>
                <li>
                  <span className="font-bold">Sustainability:</span> Promoting
                  sustainable practices in all our projects.
                </li>
              </ul>
            </div>
          </div>

          {/* Director 2 */}
          <div className="flex flex-col md:flex-row-reverse items-start mb-12 border-b pb-6">
            {/* Right Image */}
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/images/aboutHeaderimage3.jpg"
                alt="Yasmin Rahman"
                height={300}
                width={300}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Left Content */}
            <div className="w-full md:w-2/3 md:pr-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#123f8e]">YASMIN RAHMAN</h3>
              <p className="text-lg font-medium text-gray-700">
                <strong>Director</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                My husband and I started this company with a flock of 100-layer
                birds in my father's backyard. After 25 years of commitment to
                this industry, Paragon is now one of the largest poultry and
                animal feed industries in Bangladesh.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Throughout our journey, we believed sustainable practices are
                critical for our environment and business growth...
              </p>
            </div>
          </div>

          {/* Director 3 */}
          <div className="flex flex-col md:flex-row items-start mb-12 border-b pb-6">
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/images/aboutHeaderimage4.jpeg"
                alt="Mehran Rahman"
                height={300}
                width={300}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Right Content */}
            <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#123f8e]">MEHRAN RAHMAN</h3>
              <p className="text-lg font-medium text-gray-700">
                <strong>Director</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Paragon proudly serves our customers with high-quality
                agricultural products, industrial-grade packaging, and consumer
                foods and services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                As an industrialist, my mission is to deliver sustainable
                solutions that ensure food security for our nation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

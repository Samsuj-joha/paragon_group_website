import CsrHeader from "@/layout/csr-header/page";
import Footer from "@/layout/footer/page";
import Header from "@/layout/header/page";
import React from "react";
import Image from "next/image";

const Csr = () => {
  return (
    <>
      <CsrHeader />

      {/* Section 1: CSR Header */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl font-bold text-[#123f8e] mb-4">
            CORPORATE SOCIAL RESPONSIBILITIES
          </h1>

          {/* Border */}
          <div className="w-24 h-1 bg-[#fab803] mx-auto mb-6"></div>

          {/* CSR Image and Content */}
          <div className="flex flex-col md:flex-row  justify-between gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/assets/images/csrImages/csrImage2.jpeg"
                alt="CSR Image"
                height={300}
                width={400}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 text-left mt-6 md:mt-0">
              <p className="text-lg text-gray-700 leading-relaxed">
                In response to the call of responsibility, Paragon feels for
                civic duty for the welfare of society and the environment for
                maintaining a balance between economic growth and ecosystems.
                Paragon developed a CSR framework for needy meritorious students
                through HOPES, oral & dental health support for rural school
                children partnering with JICA & a Japanese Dental institute,
                providing school feeding for village schools, contributing to
                Special Olympics movement for physical & intellectual challenged
                children & adults, constructing schools and religious centers,
                etc.
              </p>
              <h3 className="text-3xl font-bold text-[#123f8e] mb-6 text-center">
                SOME OF OUR ACTIVITIES
              </h3>

              {/* List of Activities */}
              <ol className="list-decimal pl-6 space-y-1 text-md text-gray-700">
                <li>
                  Boiled Egg, Banana, and Snacks are distributed among the
                  students and teachers of 17 Primary Schools and 2 Hafizia
                  Madrashas. The distribution frequency is twice a week on a
                  regular basis.
                </li>
                <li>
                  We arrange Dental Camps for dental treatment and distribute
                  toothbrushes and toothpaste. Every 4 months, we arrange this
                  Dental Camp.
                </li>
                <li>
                  A permanent dental clinic has been established to ensure
                  dental treatment for students and people living nearby.
                </li>
                <li>
                  We are ensuring pure drinking water and sanitation systems in
                  various schools and local areas.
                </li>
                <li>
                  We are arranging the monthly salary for a few teachers of
                  local schools to maintain a balanced teacher-student ratio.
                </li>
                <li>Chicken meat is distributed to various orphanages.</li>
                <li>We ensure electricity by providing our own generators.</li>
                <li>
                  We conduct regular maintenance of orphanages, schools, roads,
                  and prayer locations.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Some of Our Activities */}
    </>
  );
};

export default Csr;

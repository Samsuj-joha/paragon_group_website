import MilestonesHeader from "@/layout/milestones-header/page";
import React from "react";
import Image from "next/image";
const Milestones = () => {
  return (
    <>
      <MilestonesHeader />
      <section className="">
        <div className="">
          {/* First Child Div */}
          <div className="flex bg-[#333333] ">
            {/* Image Section */}
            <div className="flex justify-center items-center gap-x-20">
              <div className="">
                <Image
                  height={300}
                  width={850}
                  src="/assets/images/milestones/1680753879_printingpress.jpeg" // Replace with your actual image path
                  alt="Printing Press"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className=" flex gap-x-20 ">
               <div>
               <h3 className="text-4xl font-bold text-[#123f8e]">1989</h3>
                <h4 className="text-2xl font-medium text-[#f3a019]">
                  PRINTING PRESS
                </h4>
               </div>
         <div>
         <p className="text-lg text-white leading-relaxed ">
                  Paragon started its journey with a printing press in 1989. It
                  was founded by the late Mizanur Rahman, who started the
                  business back in 1952 under the name Udayon Press.
                </p>
         </div>
              </div>
            </div>

            <div className=" h-auto w-[235px] bg-[#424040]">
              <div className="flex flex-col items-center justify-center  rounded-lg shadow-lg p-6">
                {/* Year at the Top */}
                <h3 className="text-4xl font-bold text-[#ffffff]">1989</h3>

                {/* Border Bottom */}
                <div className="w-full border-b-2 border-gray-300 my-4"></div>

                {/* Dashed Line */}
                <div className="h-12 border-l-2 border-dashed border-gray-300"></div>

                {/* Border Top */}
                <div className="w-full border-t-2 border-gray-300 my-4"></div>

                {/* Year at the Bottom */}
                <h3 className="text-4xl font-bold text-[#ffffff]">2020</h3>
              </div>
            </div>
          </div>

          {/* Second Child Div */}
        </div>
      </section>
    </>
  );
};

export default Milestones;

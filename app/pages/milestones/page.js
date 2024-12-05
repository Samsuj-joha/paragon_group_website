
// import MilestonesHeader from "@/layout/milestones-header/page";
// import React from "react";
// import Image from "next/image";

// const Milestones = () => {
//   return (
//     <>
//       <MilestonesHeader />
//       <section className="bg-[#333333] py-10 relative">
//         <div className="container mx-auto px-4">
//           {/* Parent Wrapper */}
//           <div className="flex flex-col lg:flex-row gap-10">
//             {/* Left Section */}
//             <div className="flex-1 space-y-10">
//               {/* Single Milestone Item */}
//               {[1, 2, 3].map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up"
//                 >
//                   {/* Image Section */}
//                   <div className="relative w-full md:w-5/5 h-52 overflow-hidden">
//                     <Image
//                       height={300}
//                       width={450}
//                       src="/assets/images/milestones/1680753879_printingpress.jpeg" // Replace with your actual image path
//                       alt="Printing Press"
//                       className="absolute inset-0 w-full h-full object-cover bg-center transition-transform duration-700 hover:scale-105"
//                     />
//                     {/* Skewed Overlay */}
//                     <div className="absolute top-0 right-0 bottom-0 w-full h-full bg-[#333333] transform skew-y-[110deg] origin-top-right"></div>
//                   </div>
//                   {/* Content Section */}
//                   <div className="text-center md:text-left space-y-3">
//                     <h3 className="text-2xl font-bold text-[#f3a019]">1989</h3>
//                     <h4 className="text-xl font-medium text-[#f3a019]">
//                       PRINTING PRESS
//                     </h4>
//                     <p className="text-lg text-white leading-relaxed text-justify">
//                       Paragon started its journey with a printing press in 1989.
//                       It was founded by the late Mizanur Rahman, who started the
//                       business back in 1952 under the name Udayon Press.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Sticky Right-Side Content */}
//             <div className="h-auto w-full lg:w-[235px] bg-[#424040] rounded-lg shadow-lg sticky top-10 self-start">
//               <div className="flex flex-col items-center justify-center p-6 space-y-6">
//                 {/* Year at the Top */}
//                 <h3 className="text-4xl font-bold text-[#ffffff] animate-bounce">
//                   1989
//                 </h3>

//                 {/* Border Bottom */}
//                 <div className="w-full border-b-2 border-gray-300 my-4"></div>

//                 {/* Dashed Line */}
//                 <div className="h-48 border-l-2 border-dashed border-gray-300"></div>

//                 {/* Border Top */}
//                 <div className="w-full border-t-2 border-gray-300 my-4"></div>

//                 {/* Year at the Bottom */}
//                 <h3 className="text-4xl font-bold text-[#ffffff]">2020</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default Milestones;



import MilestonesHeader from "@/layout/milestones-header/page";
import React from "react";
import Image from "next/image";

const milestonesData = [
  {
    year: "1989",
    title: "PRINTING PRESS",
    content:
      "Paragon started its journey with a printing press in 1989. It was founded by the late Mizanur Rahman, who started the business back in 1952 under the name Udayon Press.",
    image: "/assets/images/milestones/printing-press.jpeg",
  },
  {
    year: "1993",
    title: "POULTRY FARMING",
    content:
      "A poultry farm of 25,000 parent stock with a vision to diversify and become one of the largest and revolutionized poultry farmers in Bangladesh.",
    image: "/assets/images/milestones/poultry.jpg",
  },
  {
    year: "2000",
    title: "INTERNATIONAL OPERATIONS",
    content:
      "Paragon went global in 2000, establishing offices in major cities worldwide.",
    image: "/assets/images/milestones/2000_international.jpeg",
  },
  // Add more milestones here
];

const Milestones = () => {
  return (
    <>
      <MilestonesHeader />
      <section className="bg-[#333333] py-10">
        <div className="container mx-auto px-4">
          {/* Parent Wrapper */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="flex-1 space-y-10">
              {milestonesData.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up"
                >
                  {/* Image Section with Skewed Overlay */}
                  <div className="relative w-full md:w-[50%] sm:w-full h-64 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      height={300}
                      width={450}
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Skewed Overlay */}
                    <div className="absolute inset-0 bg-[#333333] transform skew-y-[110deg] origin-top-right opacity-100"></div>
                  </div>
                  {/* Content Section */}
                  <div className="text-center md:text-left space-y-3 md:w-[50%]">
                    <h3 className="text-2xl font-bold text-[#f3a019]">
                      {milestone.year}
                    </h3>
                    <h4 className="text-xl font-medium text-[#f3a019]">
                      {milestone.title}
                    </h4>
                    <p className="text-lg text-white leading-relaxed text-justify">
                      {milestone.content}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            {/* Sticky Right-Side Content */}
            <div className="h-auto w-full lg:w-[235px] bg-[#424040] rounded-lg shadow-lg sticky top-10 self-start">
              <div className="flex flex-col items-center justify-center p-6 space-y-6">
                {/* Year at the Top */}
                <h3 className="text-4xl font-bold text-[#ffffff] animate-bounce">
                  1989
                </h3>

                {/* Border Bottom */}
                <div className="w-full border-b-2 border-gray-300 my-4"></div>

                {/* Dashed Line */}
                <div className="h-48 border-l-2 border-dashed border-gray-300"></div>

                {/* Border Top */}
                <div className="w-full border-t-2 border-gray-300 my-4"></div>

                {/* Year at the Bottom */}
                <h3 className="text-4xl font-bold text-[#ffffff]">2020</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;


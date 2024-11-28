// import React from "react";
// import Image from "next/image";

// const Home = () => {
//   return (
//     <div className="bg-[#e6e6ea] w-full py-16 relative">
//       {/* Full-width wrapper */}
//       <div className="container mx-auto">
//         {/* section 1 by home page */}
//         <section>
//         <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-12">
//           {/* Text Section */}
//           <div className="space-y-6">
//             <h3 className="text-4xl font-bold">
//               {" "}
//               <span className="text-[#fab803]">Paragon</span>{" "}
//               <span className="text-[#123f8e]">Group</span>
//             </h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The foundation of what would grow to become the Paragon Group was
//               laid in 1952 by Mr. Mizanur Rahman with a family business
//               initiative – he established a modern printing and packaging
//               company in Dhaka. A visionary entrepreneur transferred his
//               knowledge of precision printing craftsmanship to his children. Mr.
//               Moshiur Rahman, inspired by his father, pivoted toward the poultry
//               industry in 1993. He established the first fully integrated modern
//               poultry farming with his wife, Mrs. Yasmin Rahman. The company
//               diversified into other business sectors by maintaining sustainable
//               business practices, creating job opportunities, and positively
//               impacting our economy.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="relative">
//             <Image
//               src="/home-image-1.png"
//               height={500}
//               width={530}
//               alt="Paragon Group Image"
//               className="absolute  transform hover:scale-110 transition-transform duration-300"
//             />
//           </div>
//         </div>
//         </section>
//         <section>
//           <div>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis natus ad quae ducimus reiciendis unde doloribus possimus modi eligendi?</p>
//           </div>
//         </section>
//         <section>
//           <div>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias explicabo quis beatae nemo in natus non illo tempora iste ullam!</p>
//           </div>
//         </section>
//         <section>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus aliquam quos illum rerum facilis sunt quisquam iure provident? Illo!</p>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import image2 from "/public/assets/images/home-image-2.jpg";
import image3 from "/public/assets/images/home-image-3.png";
import SectionThree from "./section3/page";
import SectionFour from "./section 4/page";

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to toggle the modal
  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };
  return (
    <div className="">
      {/* Section 1 */}
      <section className="bg-[#e6e6ea] w-full py-4 relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-12">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">
              <span className="text-[#fab803]">Paragon</span>{" "}
              <span className="text-[#123f8e]">Group</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The foundation of what would grow to become the Paragon Group was
              laid in 1952 by Mr. Mizanur Rahman with a family business
              initiative – he established a modern printing and packaging
              company in Dhaka. A visionary entrepreneur transferred his
              knowledge of precision printing craftsmanship to his children. Mr.
              Moshiur Rahman, inspired by his father, pivoted toward the poultry
              industry in 1993. He established the first fully integrated modern
              poultry farming with his wife, Mrs. Yasmin Rahman. The company
              diversified into other business sectors by maintaining sustainable
              business practices, creating job opportunities, and positively
              impacting our economy.
            </p>
          </div>

          {/* Placeholder for Image Section */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/home-image-1.png"
              alt="Paragon Group Image"
              fill
              className="absolute top-0 right-0 object-contain transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#ffffff] w-full py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Image with Video Icon */}
          <div className="relative flex justify-center col-span-1 md:col-span-1">
            <Image
              src={image2}
              height={100}
              width={600} // Increased width here
              alt="Home image 2"
              className="rounded-lg"
            />
            <button
              onClick={toggleVideoModal}
              className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <PlayCircle className="h-10 w-10 text-blue-600" />
            </button>
          </div>

          {/* Column 2: Statistics */}
          <div className="flex flex-col items-center md:items-center space-y-6 justify-center">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue-600 text-5xl font-bold">19</span>
              <span className="text-xl font-medium text-gray-700">
                Companies
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue-600 text-5xl font-bold">65</span>
              <span className="text-xl font-medium text-gray-700">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue-600 text-5xl font-bold">30</span>
              <span className="text-xl font-medium text-gray-700">
                Locations
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue-600 text-5xl font-bold">7700</span>
              <span className="text-xl font-medium text-gray-700">
                Employees
              </span>
            </div>
          </div>

          {/* Column 3: Static Image */}
          <div className="flex justify-center col-span-1 md:col-span-1">
            <Image
              src={image3}
              height={400}
              width={700} // Increased width here
              alt="Home image 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={toggleVideoModal}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200"
              >
                ✕
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 3 */}
      {/* <section className="bg-[#dbeafe] w-full py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            explicabo quis beatae nemo in natus non illo tempora iste ullam!
          </p>
        </div>
      </section> */}
      <SectionThree/>

      {/* Section 4 */}
      {/* <section className="bg-[#e2e8f0] w-full py-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            temporibus aliquam quos illum rerum facilis sunt quisquam iure
            provident? Illo!
          </p>
        </div>
      </section> */}

      <SectionFour/>
    </div>
  );
};

export default Home;

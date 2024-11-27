import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[#e6e6ea] w-full py-16 relative">
      {/* Full-width wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-12">
        {/* Text Section */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-[#153f8a]">Paragon Group</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The foundation of what would grow to become the Paragon Group was
            laid in 1952 by Mr. Mizanur Rahman with a family business initiative – 
            he established a modern printing and packaging company in Dhaka. 
            A visionary entrepreneur transferred his knowledge of precision printing 
            craftsmanship to his children. Mr. Moshiur Rahman, inspired by his father, 
            pivoted toward the poultry industry in 1993. He established the first fully 
            integrated modern poultry farming with his wife, Mrs. Yasmin Rahman. 
            The company diversified into other business sectors by maintaining 
            sustainable business practices, creating job opportunities, and positively 
            impacting our economy.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/home-image-1.png"
            height={500}
            width={500}
            alt="Paragon Group Image"
            className="absolute top-0 right-0 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Background Design */}
      {/* <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#153f8a] opacity-10 rounded-full pointer-events-none"></div> */}
    </div>
  );
};

export default Home;

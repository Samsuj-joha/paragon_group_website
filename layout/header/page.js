// import React from "react";
// import Image from "next/image";
// import Navbar from "../navbar/page";
// import SearchMenu from "../search/page";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-[#153f8a] w-full h-20  shadow-md flex justify-between items-center ">
//       <div className="container mx-auto flex justify-between items-center ">
//         {/* Logo Section */}
//         <div>
//           <Link href="/">
//             <Image
//               src="/paragongroup-logo.png"
//               alt="Paragon Group"
//               height={100}
//               width={100}
//               className="object-contain"
//             />
//           </Link>
//         </div>

//         {/* Navbar Section */}
//         <div>
//           <Navbar />
//         </div>

//         {/* Search Section */}
//         <div>
//           <SearchMenu />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "/carosel1.jpg", // Image 1
    "/carosel2.jpg", // Image 2
    "/carosel1.jpg", // Image 3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <header className="relative w-full h-screen z-10">
      {/* Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slides[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Fixed Header Content */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-70 bg-[#153f8a] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/paragongroup-logo.png"
                alt="Paragon Group"
                height={100}
                width={100}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navbar Section */}
          <div>
            <Navbar />
          </div>

          {/* Search Section */}
          <div>
            <SearchMenu />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)} className="bg-black text-white p-3 rounded-full">
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)} className="bg-black text-white p-3 rounded-full">
          &gt;
        </button>
      </div>
    </header>
  );
};

export default Header;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Navbar from "../navbar/page";
// import SearchMenu from "../search/page";
// import { Menu } from "lucide-react"; // Importing Menu icon from Lucide React

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu toggle

//   // Toggle mobile menu visibility
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-[#153f8a] w-full shadow-md">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:flex">
//         {/* Logo Section */}
//         <div >
//           <Image
//             src="/paragongroup-logo.png"
//             alt="Paragon Group"
//             height={100}
//             width={100}
//             className="object-contain"
//           />
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMobileMenu} className="text-white">
//             <Menu className="h-12 w-20" />
//           </button>
//         </div>

//         {/* Navbar and Search on Medium and Large Screens */}
//         <div className="lg:flex justify-between ">
//           <Navbar />
//           <SearchMenu />
//         </div>
//       </div>

//       {/* Mobile Menu: Navbar and Search below logo when hamburger is clicked */}
//       {isMobileMenuOpen && (
//         <div className="bg-[#153f8a] md:hidden py-4 w-full">
//           <div className="container mx-auto flex flex-col items-center">
//             <Navbar />
//             <div className="mt-4">
//               <SearchMenu />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Image from "next/image";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#153f8a] w-full h-20  shadow-md flex justify-between items-center ">
      <div className="container mx-auto flex justify-between items-center ">
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

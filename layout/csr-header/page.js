"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";

const CsrHeader = () => {
  return (
    <header className="relative w-full h-screen"> {/* Full height for the header */}
      {/* Fixed Header Content */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-opacity-70 bg-[#263e7a] p-4">
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

      {/* Image Section (Full-width and full-height) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <Image
          src="/assets/images/csrImages/csrImage1.jpg"
          alt="Background"
          layout="fill" // Ensures the image covers the full section
          objectFit="cover" // Ensures the image covers the space properly
          className="object-cover w-full h-full" // Covering full width and height
        />
      </div>
    </header>
  );
};

export default CsrHeader;

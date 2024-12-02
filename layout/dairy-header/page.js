"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import SearchMenu from "../search/page";

const DairyHeader = () => {
  return (
    <header className="relative w-full">
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

      {/* Image Section (Below Header) */}
      <div className="relative mt-20 pt-2"> {/* Adjust margin-top to accommodate header */}
        <Image
          src="/assets/images/dairy/header.jpg"
          alt="Background"
          layout="responsive" // Use responsive layout to control image aspect ratio
          width={1600} // Set a standard width
          height={600} // Adjust height for desired aspect ratio
          className="object-cover"
        />
      </div>
    </header>
  );
};

export default DairyHeader;

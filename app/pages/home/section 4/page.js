"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // For page navigation
import Link from "next/link";

const SectionFour = () => {
  const router = useRouter(); // Initialize the Next.js router

  // Function to handle button click
  const handleClick = () => {
    router.push("/contributions"); // Navigate to /contributions page
  };

  return (
    <section className="flex justify-center items-center h-[50vh] bg-[#fbfbfb]">
      <div className="container mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
        {/* Title with animation */}
        <h2 className="text-4xl font-semibold text-[#0e376c] mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          CONTRIBUTIONS
        </h2>

        {/* View Button with animation */}
        <Link href="/">
          <Button
            className="border hover:bg-[#263e7a] hover:text-white px-6 py-3 rounded-md text-lg transform transition-all duration-300 ease-in-out scale-100 hover:scale-110"
            onClick={handleClick} // Navigate to another page when clicked
          >
            View
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SectionFour;

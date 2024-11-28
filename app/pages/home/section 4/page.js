"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'; // For page navigation

const SectionFour = () => {
  const router = useRouter(); // Initialize the Next.js router

  // Function to handle button click
  const handleClick = () => {
    router.push('/contributions'); // Navigate to /contributions page
  };

  return (
    <section className="flex justify-center items-center h-[50vh] bg-[#fbfbfb]">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">CONTRIBUTIONS</h2>
        
        {/* View Button */}
        <Button
          className="border hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md text-lg"
          onClick={handleClick} // Navigate to another page when clicked
        >
          View
        </Button>
      </div>
    </section>
  );
};

export default SectionFour;

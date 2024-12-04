
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import SectionThree from "./section3/page";
import SectionFour from "./section 4/page";
import Header from "@/layout/header/page";
import SectionTwo from "./section2/page";
import SectionOne from "./section1/page";

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to toggle the modal
  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };
  return (
    <>
      <Header />
      <div className="">
        {/* Section 1 */}
        <SectionOne />
        {/* Section 2 */}
        <SectionTwo />
        {/* Section 3 */}
        <SectionThree />
        {/* Section 4 */}
        <SectionFour />
      </div>
    </>
  );
};

export default Home;

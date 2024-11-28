import React from 'react'
import cardimage1 from '/public/assets/images/cardImage1.jpg'
import Image from "next/image";

const SectionThree = () => {
  return (
    <section className="bg-[#dbeafe] w-full py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <p className="text-3xl font-bold text-gray-800 mb-8 text-center">
          BUSINESS ACTIVITIES
        </p>

        {/* Card with 4x4 Grid */}
        <div className="rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 1"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 1</span>
                <p className="mt-2">Description of activity 1.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 2"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 2</span>
                <p className="mt-2">Description of activity 2.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 3"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 3</span>
                <p className="mt-2">Description of activity 3.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 4"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 4</span>
                <p className="mt-2">Description of activity 4.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 5"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 5</span>
                <p className="mt-2">Description of activity 5.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 6"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 6</span>
                <p className="mt-2">Description of activity 6.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 7"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 7</span>
                <p className="mt-2">Description of activity 7.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 8"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 8</span>
                <p className="mt-2">Description of activity 8.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 9"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 9</span>
                <p className="mt-2">Description of activity 9.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 10"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 10</span>
                <p className="mt-2">Description of activity 10.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 11"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 11</span>
                <p className="mt-2">Description of activity 11.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-tl-lg rounded-tr-lg">
                <Image
                  src={cardimage1}
                  alt="Activity 12"
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="bg-[#263e7a] text-white p-4 w-full text-center rounded-b-lg">
                <span className="text-xl font-semibold">Activity 12</span>
                <p className="mt-2">Description of activity 12.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree

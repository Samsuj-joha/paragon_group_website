"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Import useState hook

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown after clicking on a menu item
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="p-4">
      <ul className="flex space-x-5 text-white">
        <li>
          <Link
            href="/pages/home"
            className={`flex items-center space-x-1 ${
              isActive("/pages/home") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            Home
          </Link>
        </li>

        {/* About Dropdown Menu */}
        <li className="relative">
          <button
            onClick={toggleDropdown} // Toggle the dropdown visibility
            className={`flex items-center space-x-1 ${
              isActive("/pages/about") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>About</span>
            <ChevronDown size={16} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 bg-[#e47316] text-white shadow-md rounded-lg mt-2 w-48 z-50">
              <ul className="space-y-2 py-2">
                <li>
                  <Link
                    href="/pages/about"
                    className="block px-4 py-2 text-white  hover:text-white rounded border-b border-white"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/about/csr"
                    className="block px-4 py-2 text-white hover:text-white rounded"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Other Nav Items */}
        <li>
          <Link
            href="/pages/milestones"
            className={`flex items-center space-x-1 ${
              isActive("/pages/milestones") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>Milestones</span>
          </Link>
        </li>
        <li>
          <Link
            href="/pages/business-activities"
            className={`flex items-center space-x-1 ${
              isActive("/pages/business-activities") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>Business Activities</span>
          </Link>
        </li>
        <li>
          <Link
            href="/pages/companies"
            className={`flex items-center space-x-1 ${
              isActive("/pages/companies") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>Companies</span>
          </Link>
        </li>
        <li>
          <Link
            href="/pages/media"
            className={`flex items-center space-x-1 ${
              isActive("/pages/media") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>Media</span>
          </Link>
        </li>
        <li>
          <Link
            href="/pages/contact-us"
            className={`flex items-center space-x-1 ${
              isActive("/pages/contact-us") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

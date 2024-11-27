"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

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
        <li>
          <Link
            href="/pages/about"
            className={`flex items-center space-x-1 ${
              isActive("/pages/about") ? "text-[#f3a019]" : "hover:text-[#f3a019]"
            }`}
          >
            <span>About</span>
            <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="/pages/about"
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
              isActive("/pages/business-activities")
                ? "text-[#f3a019]"
                : "hover:text-[#f3a019]"
            }`}
          >
            <span>Business Activities</span>
            <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="/pages/companies"
            className={`flex items-center space-x-1 ${
              isActive("/pages/companies")
                ? "text-[#f3a019]"
                : "hover:text-[#f3a019]"
            }`}
          >
            <span>Companies</span>
            <ChevronDown size={16} />
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
            <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link
            href="/pages/contact-us"
            className={`flex items-center space-x-1 ${
              isActive("/pages/contact-us")
                ? "text-[#f3a019]"
                : "hover:text-[#f3a019]"
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

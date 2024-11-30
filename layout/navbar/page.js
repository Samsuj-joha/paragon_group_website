
"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false); // New state for company dropdown
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false); // New state for media dropdown
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === "about") {
      setIsDropdownOpen(!isDropdownOpen);
      setIsBusinessDropdownOpen(false);
      setIsCompanyDropdownOpen(false);
      setIsMediaDropdownOpen(false); // Close media dropdown when toggling others
    } else if (dropdownType === "business") {
      setIsBusinessDropdownOpen(!isBusinessDropdownOpen);
      setIsDropdownOpen(false);
      setIsCompanyDropdownOpen(false);
      setIsMediaDropdownOpen(false); // Close media dropdown when toggling others
    } else if (dropdownType === "company") {
      setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
      setIsDropdownOpen(false);
      setIsBusinessDropdownOpen(false);
      setIsMediaDropdownOpen(false); // Close media dropdown when toggling others
    } else if (dropdownType === "media") {
      setIsMediaDropdownOpen(!isMediaDropdownOpen);
      setIsDropdownOpen(false);
      setIsBusinessDropdownOpen(false);
      setIsCompanyDropdownOpen(false); // Close other dropdowns when media is toggled
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsMediaDropdownOpen(false); // Close all dropdowns
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-4">
      <ul className="flex space-x-5 text-white">
        <li>
          <Link
            href="/pages/home"
            className={`flex items-center space-x-1 ${isActive("/pages/home") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
          >
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("about")}
            className={`flex items-center space-x-1 ${isActive("/pages/about") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
          >
            <span>About</span>
            <ChevronDown size={16} />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 bg-[#e47316] text-white shadow-md rounded-lg mt-2 w-48 z-50" ref={dropdownRef}>
              <ul className="space-y-2 py-2">
                <li>
                  <Link href="/pages/about" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pages/about/csr" className="block px-4 py-2 hover:text-white" onClick={closeDropdown}>
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Business Activities Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("business")}
            className={`flex items-center space-x-1 ${isActive("/pages/business-activities") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
          >
            <span>Business Activities</span>
            <ChevronDown size={16} />
          </button>
          {isBusinessDropdownOpen && (
            <div className="absolute left-0 bg-[#e47316] text-white shadow-md rounded-lg mt-2 w-72 z-50" ref={dropdownRef}>
              <ul className="space-y-2 py-2 h-72 overflow-y-scroll scrollbar-hidden">
                <li><Link href="/pages/business-activities/poultry-farming" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Poultry Farming</Link></li>
                <li><Link href="/pages/business-activities/processing-and-further-processing-plant" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Processing and Further Processing Plant</Link></li>
                <li><Link href="/pages/business-activities/plastic-woven-bags-fibc" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Plastic Woven Bags & FIBC</Link></li>
                <li><Link href="/pages/business-activities/tea-estates-horticulture" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Tea Estates & Horticulture</Link></li>
                <li><Link href="/pages/business-activities/bistro-cafe-retail-shop" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Bistro Café & Retail Shop</Link></li>
                <li><Link href="/pages/business-activities/renewable-energy" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Renewable Energy</Link></li>
                <li><Link href="/pages/business-activities/feed-mills" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Feed Mills</Link></li>
                <li><Link href="/pages/business-activities/consumer-foods" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Consumer Foods</Link></li>
                <li><Link href="/pages/business-activities/fish-hatchery" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Fish Hatchery</Link></li>
                <li><Link href="/pages/business-activities/organic-fertilizer" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Organic Fertilizer</Link></li>
                <li><Link href="/pages/business-activities/flour-mill" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Flour Mill</Link></li>
                <li><Link href="/pages/business-activities/footwear-manufacturing" className="block px-4 py-2 hover:text-white border-b border-white" onClick={closeDropdown}>Footwear Manufacturing</Link></li>
                <li><Link href="/pages/business-activities/dairy-project" className="block px-4 py-2 hover:text-white" onClick={closeDropdown}>Dairy Project</Link></li>
              </ul>
            </div>
          )}
        </li>

        {/* Companies Dropdown */}
     {/* Companies Dropdown */}
<li className="relative">
  <button
    onClick={() => toggleDropdown("company")}
    className={`flex items-center space-x-1 ${isActive("/pages/companies") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
  >
    <span>Companies</span>
    <ChevronDown size={16} />
  </button>
  {isCompanyDropdownOpen && (
    <div className="absolute left-0 bg-[#e47316] text-white shadow-md rounded-lg mt-2 w-72 z-50" ref={dropdownRef}>
      <ul className="space-y-2 py-2 h-72 overflow-y-scroll scrollbar-hidden">
        <li><Link href="/pages/companies/aqua-breeders-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/aqua-breeders-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Aqua Breeders Ltd</Link></li>
        <li><Link href="/pages/companies/bay-chicks-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/bay-chicks-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Bay Chicks Ltd</Link></li>
        <li><Link href="/pages/companies/bay-grand-parents-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/bay-grand-parents-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Bay Grand Parents Ltd</Link></li>
        <li><Link href="/pages/companies/chittagong-chicks-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/chittagong-chicks-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Chittagong Chicks Ltd</Link></li>
        <li><Link href="/pages/companies/chittagong-feed-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/chittagong-feed-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Chittagong Feed Ltd</Link></li>
        <li><Link href="/pages/companies/denm-poultry-complex-pvt-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/denm-poultry-complex-pvt-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Denm Poultry Complex Pvt Ltd</Link></li>
        <li><Link href="/pages/companies/jessore-feed-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/jessore-feed-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Jessore Feed Ltd</Link></li>
        <li><Link href="/pages/companies/moynamoti-hatchery-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/moynamoti-hatchery-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Moynamoti Hatchery Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-agro-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-agro-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Agro Ltd</Link></li>
        <li><Link href="/pages/companies/parasol-energy-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/parasol-energy-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Parasol Energy Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-feed-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-feed-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Feed Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-plastic-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-plastic-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Plastic Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-plast-fiber-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-plast-fiber-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Plast Fiber Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-poultry-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-poultry-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Poultry Ltd</Link></li>
        <li><Link href="/pages/companies/paragon-press-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/paragon-press-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Paragon Press Ltd</Link></li>
        <li><Link href="/pages/companies/parasole-footware-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/parasole-footware-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Parasole Footware Ltd</Link></li>
        <li><Link href="/pages/companies/rangpur-poultry-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/rangpur-poultry-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Rangpur Poultry Ltd</Link></li>
        <li><Link href="/pages/companies/shalbahan-farms-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/shalbahan-farms-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Shalbahan Farms Ltd</Link></li>
        <li><Link href="/pages/companies/sympa-solar-power-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/sympa-solar-power-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Sympa Solar Power Ltd</Link></li>
        <li><Link href="/pages/companies/usha-poultry-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/usha-poultry-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Usha Poultry Ltd</Link></li>
        <li><Link href="/pages/companies/fatehbagh-tea-company-ltd" className={`block px-4 py-2 ${isActive('/pages/companies/fatehbagh-tea-company-ltd') ? 'text-[#f3a019]' : 'hover:text-white'} border-b border-white`} onClick={closeDropdown}>Fatehbagh Tea Company Ltd</Link></li>
      </ul>
    </div>
  )}
</li>


        {/* Media Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("media")}
            className={`flex items-center space-x-1 ${isActive("/pages/media") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
          >
            <span>Media</span>
            <ChevronDown size={16} />
          </button>
          {isMediaDropdownOpen && (
            <div className="absolute left-0 bg-[#e47316] text-white shadow-md rounded-lg mt-2 w-72 z-50" ref={dropdownRef}>
              <ul className="space-y-2 py-2">
                <li><Link href="/pages/media/video-gallery" className="block px-4 py-2 hover:text-white" onClick={closeDropdown}>Video Gallery</Link></li>
              </ul>
            </div>
          )}
        </li>

        {/* Contact Us */}
        <li>
          <Link
            href="/pages/contact-us"
            className={`flex items-center space-x-1 ${isActive("/pages/contact-us") ? "text-[#f3a019]" : "hover:text-[#f3a019]"}`}
          >
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;





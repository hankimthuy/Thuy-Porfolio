'use client';

import { X } from "@mui/icons-material";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-[#A6B1E1]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-[#424874] flex items-center gap-2">
          Thuy.io
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md font-medium text-[#424874]">
          {['Home', 'About me', 'Portfolio', 'Reviews', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-[#A6B1E1] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6B1E1] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:flex items-center gap-2 bg-[#424874] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-[#A6B1E1]/50 hover:shadow-xl hover:bg-[#424874]/90 hover:-translate-y-0.5 transition-all">
          Contact <FiArrowRight size={16} />
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#424874]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X fontSize="large" /> : <LuMenu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#A6B1E1]/30 p-6 flex flex-col space-y-4 shadow-2xl absolute w-full left-0 top-20">
          {['Home', 'About me', 'Portfolio', 'Reviews', 'FAQ'].map((item) => (
            <a key={item} href="#" className="text-[#424874] font-semibold text-lg hover:text-[#A6B1E1]">
              {item}
            </a>
          ))}
          <button className="flex items-center justify-center gap-2 bg-[#424874] text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-[#A6B1E1]/40">
            Contact <FiArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
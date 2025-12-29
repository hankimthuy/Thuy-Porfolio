'use client';

import { X } from "@mui/icons-material";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Map menu items to section IDs
  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Skill Sets', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-[#A6B1E1]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold tracking-tight text-[#424874] flex items-center gap-2 cursor-pointer hover:text-[#A6B1E1] transition-colors"
        >
          Thuy.io
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-md font-medium text-[#424874]">
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="hover:text-[#A6B1E1] transition-colors relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6B1E1] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button 
          onClick={(e) => handleNavClick(e, 'footer')}
          className="hidden md:flex items-center gap-2 bg-[#424874] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-[#A6B1E1]/50 hover:shadow-xl hover:bg-[#424874]/90 hover:-translate-y-0.5 transition-all"
        >
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
          {menuItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-[#424874] font-semibold text-lg hover:text-[#A6B1E1] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, 'footer')}
            className="flex items-center justify-center gap-2 bg-[#424874] text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-[#A6B1E1]/40"
          >
            Contact <FiArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
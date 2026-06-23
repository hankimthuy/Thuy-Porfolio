'use client';

import { X } from "@mui/icons-material";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Link from 'next/link';
import { PERSON } from '@/lib/seo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Map menu items to section IDs
  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skill Sets', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Milestones', id: 'professional-milestones' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'footer' },
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-[#A6B1E1]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
    <Link
      href="/"
      onClick={handleLogoClick}
      className="flex items-center font-mono text-xl font-bold text-slate-400 transition-colors hover:text-slate-600"
    >
  <span>{PERSON.brandName}</span><span className="animate-pulse text-[#424874] ml-0.5">_</span>
   </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 lg:space-x-8 text-sm lg:text-md font-medium text-[#424874]">
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

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden text-[#424874]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X fontSize="large" /> : <LuMenu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#A6B1E1]/30 p-6 flex flex-col space-y-4 shadow-2xl absolute w-full left-0 top-20">
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
        </div>
      )}
    </nav>
  );
};

export default Header;

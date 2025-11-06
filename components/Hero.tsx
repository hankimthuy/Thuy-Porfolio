'use client';

import Image from 'next/image';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px]">
      {/* Decorative Lines Background - Center lines with decorative circle */}
      {/* Temporarily commented out to avoid covering content */}
      {/*
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <svg className="absolute top-1/2 left-0 right-0 w-full" style={{ transform: 'translateY(-50%)', zIndex: 1 }}>
          <line 
            x1="0" 
            y1="0" 
            x2="100%" 
            y2="0" 
            stroke="#D3D5D6" 
            strokeWidth="2" 
            strokeDasharray="5,10" 
            opacity="0.6"
          />
        </svg>
        
        <svg className="absolute left-1/2 top-0 bottom-0 h-full" style={{ transform: 'translateX(-50%)', zIndex: 1 }}>
          <line 
            x1="0" 
            y1="0" 
            x2="0" 
            y2="100%" 
            stroke="#D3D5D6" 
            strokeWidth="2" 
            strokeDasharray="5,10" 
            opacity="0.6"
          />
        </svg>
        
        <div 
          className="absolute top-1/2 left-1/2 w-[22px] h-[22px] rounded-full bg-[#EFF2F7] border border-[#D3D5D6] flex items-center justify-center"
          style={{ transform: 'translate(-50%, -50%)', zIndex: 2 }}
        >
          <div className="w-[4px] h-[4px] rounded-full bg-[#D3D5D6]" />
        </div>
      </div>
      */}

      {/* Blur Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 2 }}>
        <div 
          className="absolute w-[524px] h-[496px] rounded-full blur-[400px] opacity-60"
          style={{
            background: 'radial-gradient(circle at -50% -250%, rgba(155, 255, 165, 1) 29%, rgba(174, 211, 255, 1) 47%, rgba(201, 212, 239, 1) 55%, rgba(215, 152, 225, 1) 66%, rgba(202, 207, 250, 1) 82%)',
          }}
        />
      </div>

      <div className="max-w-[1728px] mx-auto px-[284px] relative" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-[60px]">
          {/* Left Content */}
          <div className="flex-1 max-w-[768px]">
            <h1 className="text-[56px] leading-[1.1] text-[#242A41] mb-[40px]">
              <span className="block font-bold" style={{ textTransform: 'none' }}>Hi! I'm Thuy,</span>
              <span className="block text-[42px] font-normal">A Product-Focused Engineer.</span>
            </h1>
            <p className="text-[18px] font-normal leading-[1.5] text-[#43495B] opacity-87 mb-[30px] max-w-[440px]">
              Bridging the gap between business goals and technical solutions. Building holistic, value-driven user experiences.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-[25px] mb-[30px]">
              <div 
                className="w-[70px] h-[70px] rounded-full border-2 border-[#1D2130] flex items-center justify-center hover:bg-[#1D2130] transition-colors group cursor-pointer shadow-sm"
                title="Angular"
              >
                <CodeIcon 
                  className="text-[#DD0031] group-hover:text-white transition-colors" 
                  sx={{ fontSize: 32 }}
                />
              </div>
              <div 
                className="w-[70px] h-[70px] rounded-full border-2 border-[#1D2130] flex items-center justify-center hover:bg-[#1D2130] transition-colors group cursor-pointer shadow-sm"
                title="Figma"
              >
                <PaletteIcon 
                  className="text-[#F24E1E] group-hover:text-white transition-colors" 
                  sx={{ fontSize: 32 }}
                />
              </div>
              <div 
                className="w-[70px] h-[70px] rounded-full border-2 border-[#1D2130] flex items-center justify-center hover:bg-[#1D2130] transition-colors group cursor-pointer shadow-sm"
                title="Gemini AI"
              >
                <PsychologyIcon 
                  className="text-[#4285F4] group-hover:text-white transition-colors" 
                  sx={{ fontSize: 32 }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-[25px]">
              <button className="bg-[#583FBC] text-white px-[38px] py-[19px] rounded-[15px] text-[18px] font-bold flex items-center gap-[5px] hover:bg-[#4a35a0] transition-colors">
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="border border-[#1D2130] text-[#1D2130] px-[38px] py-[19px] rounded-[15px] text-[18px] font-bold hover:bg-[#1D2130] hover:text-white transition-colors">
                See My Work
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Circle Background */}
              <div className="absolute top-[97px] left-[12px] w-[667px] h-[658px] bg-[#DFE1FA] rounded-full blur-[100px] opacity-50" />
              
              {/* Main Image */}
              <div className="relative w-[633px] h-[770px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/hero-image.png"
                  alt="Han Kim Thuy - Product-Focused Engineer"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

const Hero = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-6 pt-24 lg:pt-[9rem] pb-12 lg:pb-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white">

      {/* LEFT COLUMN: Text Content - Reduced spacing for cleaner look */}
      <div className="flex-1 space-y-4 lg:space-y-6 z-10 text-center lg:text-left relative">
        {/* Subtle background decoration */}
        <div className="absolute -top-20 -left-20 w-32 h-32 lg:w-64 lg:h-64 bg-[#F4EEFF] rounded-full blur-3xl opacity-80 pointer-events-none"></div>

        <div className="space-y-2 lg:space-y-3 relative">
          <h1 className="text-3xl lg:text-6xl font-semibold leading-[1.15] text-[#424874] tracking-tight">
            Hi! I'm Thuy,<br />
            <span className="text-2xl lg:text-5xl text-[#424874]">
              UX Engineer
            </span>
          </h1>
        </div>

        <p className="text-[#424874] text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-normal font-normal opacity-80">
          Bridging <strong className="font-bold">technical logic</strong> with <strong className="font-bold">human empathy</strong>. I build scalable solutions by asking <strong className="font-bold">'Why'</strong> before <strong className="font-bold">'How'</strong>, ensuring every line of code creates real-world value.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 relative z-10">
          <a
            href="http://www.linkedin.com/in/thuyhankim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-[#424874] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-[#424874] hover:bg-[#F4EEFF] hover:border-[#A6B1E1]"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/hankimthuy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-[#424874] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-[#424874] hover:bg-[#F4EEFF] hover:border-[#A6B1E1]"
            aria-label="GitHub Profile"
          >
            <FiGithub size={20} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:thuyhankim@gmail.com"
            onClick={(e) => {
              window.location.href = 'mailto:thuyhankim@gmail.com';
            }}
            className="w-12 h-12 border border-[#424874] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-[#424874] hover:bg-[#F4EEFF] hover:border-[#A6B1E1] cursor-pointer"
            aria-label="Send Email"
          >
            <LuMail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Image & Shapes */}
      <div className="flex-1 relative w-full flex justify-center items-center py-6 lg:py-10">

        {/* Background Decorative Blob/Circle */}
        <div className="absolute w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] bg-[#DCD6F7] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-[#A6B1E1] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-0 left-4 lg:left-16 w-8 h-8 lg:w-12 lg:h-12 bg-[#424874] rounded-full transform -rotate-12 shadow-xl shadow-[#A6B1E1]/40 z-20 animate-[bounce_4s_infinite]"></div>
        <div className="absolute bottom-24 right-2 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-[#A6B1E1] rounded-full transform rotate-45 shadow-lg shadow-[#A6B1E1]/40 z-20 animate-[bounce_5s_infinite]"></div>

        {/* Tiny dots */}
        <div className="absolute top-1/4 right-10 w-2 h-2 lg:w-3 lg:h-3 bg-[#424874] rounded-full z-0 animate-ping"></div>

        {/* Dashed Grid Lines - Hidden on mobile */}
        <svg className="hidden lg:block absolute w-[120%] h-[120%] pointer-events-none opacity-20 top-[-10%] left-[-10%] z-0" viewBox="0 0 600 600">
          <path d="M 50 50 L 50 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 550 50 L 550 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 50 50 L 550 50" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 50 550 L 550 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <circle cx="300" cy="300" r="200" stroke="#424874" strokeWidth="0.5" strokeDasharray="4,4" fill="none" opacity="0.3" />
        </svg>

        {/* Main Image Container - KEEPING OLD SHAPE */}
        <div className="relative z-10 w-[240px] lg:w-[380px] group transition-transform duration-500 hover:scale-[1.01]">
          {/* Background Shape behind image */}
          <div className="absolute inset-0 bg-[#A6B1E1] rounded-t-[12rem] rounded-b-[4rem] transform translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 lg:group-hover:translate-x-5 lg:group-hover:translate-y-5 opacity-60"></div>

          <img
            src="/images/IMG_1485.JPG"
            alt="Portrait"
            className="w-full h-auto object-cover rounded-t-[12rem] rounded-b-[4rem] shadow-2xl border-[3px] lg:border-[4px] border-white"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white/95 backdrop-blur-sm p-3 lg:p-4 rounded-xl shadow-xl shadow-[#424874]/10 flex items-center gap-2 lg:gap-3 animate-badge-pulse border border-[#F4EEFF] max-w-[140px] lg:max-w-[180px]">
            <div className="flex flex-col">
              <div className="text-[8px] lg:text-[10px] text-[#A6B1E1] font-bold uppercase tracking-wider">Expert in</div>
              <div className="text-xs lg:text-sm font-semibold text-[#424874] leading-tight">Web Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

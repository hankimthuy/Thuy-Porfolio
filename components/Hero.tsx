'use client';

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

const Hero = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto px-6 pt-[8rem] pb-16 flex flex-col md:flex-row items-center gap-8 lg:gap-16 bg-white">

      {/* LEFT COLUMN: Text Content - Reduced spacing for cleaner look */}
      <div className="flex-1 space-y-6 z-10 text-center md:text-left relative">
        {/* Subtle background decoration */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F4EEFF] rounded-full blur-3xl opacity-80 pointer-events-none"></div>

        <div className="space-y-3 relative">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.15] text-[#424874] tracking-tight">
            Hi! I’m Thuy,<br />
            <span className="text-4xl lg:text-5xl text-[#424874]">
              Product-focused Engineer
            </span>
          </h1>
        </div>

        <p className="text-[#424874] text-lg max-w-lg mx-auto md:mx-0 leading-normal font-normal opacity-80">
          Transforming complex ideas into scalable solutions. Blending engineering expertise with product thinking to deliver accessible, user-centric web applications.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          {[
            { icon: FiLinkedin },
            { icon: FiGithub },
            { icon: LuMail }
          ].map((Item, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 border border-[#424874] rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-[#424874] hover:bg-[#F4EEFF] hover:border-[#A6B1E1]"
            >
              <Item.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Stats Row */}
        <div className="pt-6 flex items-center justify-center md:justify-start gap-12 border-t border-[#A6B1E1]/30 mt-6">
          <div>
            <div className="text-3xl font-semibold text-[#424874]">3<span className="text-[#A6B1E1]">+</span></div>
            <div className="text-xs text-[#424874] font-medium uppercase tracking-wider mt-1 opacity-70">Years Exp.</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-[#424874]">7<span className="text-[#A6B1E1]">+</span></div>
            <div className="text-xs text-[#424874] font-medium uppercase tracking-wider mt-1 opacity-70">Projects</div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Image & Shapes */}
      <div className="flex-1 relative w-full flex justify-center items-center py-10 md:py-0">

        {/* Background Decorative Blob/Circle */}
        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#DCD6F7] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#A6B1E1] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-0 left-8 md:left-16 w-12 h-12 bg-[#424874] rounded-full transform -rotate-12 shadow-xl shadow-[#A6B1E1]/40 z-20 animate-[bounce_4s_infinite]"></div>
        <div className="absolute bottom-24 right-2 md:-right-4 w-8 h-8 bg-[#A6B1E1] rounded-full transform rotate-45 shadow-lg shadow-[#A6B1E1]/40 z-20 animate-[bounce_5s_infinite]"></div>

        {/* Tiny dots */}
        <div className="absolute top-1/4 right-10 w-3 h-3 bg-[#424874] rounded-full z-0 animate-ping"></div>

        {/* Dashed Grid Lines */}
        <svg className="absolute w-[120%] h-[120%] pointer-events-none opacity-20 top-[-10%] left-[-10%] z-0" viewBox="0 0 600 600">
          <path d="M 50 50 L 50 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 550 50 L 550 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 50 50 L 550 50" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <path d="M 50 550 L 550 550" stroke="#424874" strokeWidth="0.5" strokeDasharray="8,8" fill="none" />
          <circle cx="300" cy="300" r="200" stroke="#424874" strokeWidth="0.5" strokeDasharray="4,4" fill="none" opacity="0.3" />
        </svg>

        {/* Main Image Container - KEEPING OLD SHAPE */}
        <div className="relative z-10 w-[280px] md:w-[380px] group transition-transform duration-500 hover:scale-[1.01]">
          {/* Background Shape behind image */}
          <div className="absolute inset-0 bg-[#A6B1E1] rounded-t-[12rem] rounded-b-[4rem] transform translate-x-3 translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5 opacity-60"></div>

          <img
            src="/images/IMG_1485.JPG"
            alt="Portrait"
            className="w-full h-auto object-cover rounded-t-[12rem] rounded-b-[4rem] shadow-2xl border-[4px] border-white"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl shadow-[#424874]/10 flex items-center gap-3 animate-[pulse_6s_infinite] border border-[#F4EEFF] max-w-[180px]">
            <div className="flex flex-col">
              <div className="text-[10px] text-[#A6B1E1] font-bold uppercase tracking-wider">Expert in</div>
              <div className="text-sm font-semibold text-[#424874] leading-tight">Web Development</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
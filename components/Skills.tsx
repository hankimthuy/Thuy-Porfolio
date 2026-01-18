'use client';

import { useMemo, useState, useEffect } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { FaAngular } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";

interface SkillCardProps {
  number: string;
  title: string;
  description: string;
  rotation?: number;
}

function SkillCard({ number, title, description, rotation = 0 }: SkillCardProps) {
  return (
    <div
      className="bg-[#EDF0F9] border-2 border-[#585F6F] rounded-[8px] p-4 lg:p-[20px] relative overflow-hidden transition-transform hover:scale-[1.02]"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
    >
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden lg:block absolute top-[-6px] right-[512px] w-[181px] h-[258px] bg-[#D9DFF2] rounded-tl-[253.5px] rounded-tr-[26px] opacity-50" />
      <div className="hidden lg:block absolute top-[166px] left-[-18px] w-[145px] h-[145px] rounded-full bg-[rgba(217,223,242,0.5)]" />
      <div className="hidden lg:block absolute top-[200px] right-[86px] w-[89px] h-[89px] rounded-full bg-[rgba(217,223,242,0.5)]" />
      <div className="hidden lg:block absolute top-[-9px] left-[-31px] w-[69px] h-[69px] rounded-full bg-[#D9DFF2]" />

      <div className="relative z-10">
        <h3 className="text-xl lg:text-[31px] font-bold leading-[1.24] text-[#242A41] mb-3 lg:mb-[20px]">
          {title}
        </h3>
        <p className="text-sm lg:text-[16px] font-normal leading-[1.5] text-[#585F6F]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const skills = [
    {
      number: '1',
      title: 'UX-Oriented Mindset',
      description: 'Certified by Google in UX Design, I combine technical engineering with user-centric principles to build applications that are both functional and intuitive.',
    },
    {
      number: '2',
      title: 'Full-Stack Development',
      description: 'Proficient in React, Angular, and Spring Boot (Java). I specialize in architecting scalable, data-driven web applications, ensuring seamless integration between complex backend logic and intuitive frontend experiences.',
    },
    {
      number: '3',
      title: 'Agile & Product Mindset',
      description: 'As an active member in a Scrum environment, I focus on process improvement, fostering team collaboration, and viewing products holistically from concept to launch.',
    },
  ];

  // Tech icons configuration - Updated with Brand Colors (bgColor)
  const techIconsConfig = useMemo(() => [
    { name: 'Angular', bgColor: '#DD0031', angle: 0 },
    { name: 'React', bgColor: '#61DAFB', angle: 72 },
    { name: 'Figma', bgColor: '#1E1E1E', angle: 144 },
    { name: 'Spring Boot', bgColor: '#6DB33F', angle: 216 },
    { name: 'AI', bgColor: '#000000', angle: 288 },
  ], []);

  // Adjust radius for orbit positions - responsive
  const radius = isLaptop ? 170 : 105;


  // SVG components - Updated to use White Fill for colored backgrounds
  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Angular':
        return (
          <FaAngular style={{ width: '100%', height: '100%' }} color="white" />

        );
      case 'React':
        return (
          <FaReact style={{ width: '100%', height: '100%' }} color="white" />
        );
      case 'Figma':
        return (
          <svg width="100%" height="100%" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 28.5 19 38 9.5 38C0 38 0 28.5 0 28.5C0 19 9.5 19 9.5 19H19V28.5Z" fill="#0ACF83" />
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            <path d="M19 19V38C24.2467 38 28.5 33.7467 28.5 28.5C28.5 23.2533 24.2467 19 19 19Z" fill="#1ABCFE" />
          </svg>
        );
      case 'Spring Boot':
        return (
          <SiSpring style={{ width: '100%', height: '100%' }} color="white" />

        );
      case 'AI':
        return (
           // White Icon
          <LuBrain style={{ width: '100%', height: '100%' }} color="white" />
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-8 lg:py-[50px] bg-white">
      <h2 className="text-3xl lg:text-[56px] font-semibold leading-[1.1] text-[#242A41] text-center mb-8 lg:mb-[80px]">
        Skill Sets
      </h2>
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[40px]">
          {/* Left - Circular Tech Icons */}
          <div className="relative flex items-center justify-center flex-shrink-0 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]">
            
            {/* NEW: Orbits (Replaced the old <line> SVGs with concentric rings) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Ring 1 - Tilted */}
               <div className="w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] border border-slate-200 rounded-full absolute transform rotate-[25deg] scale-y-90"></div>
                {/* Ring 2 - Tilted opposite */}
               <div className="w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] border border-slate-200 rounded-full absolute transform -rotate-[25deg] scale-y-90"></div>
                {/* Ring 3 - Wider and thinner */}
               <div className="w-[270px] h-[270px] lg:w-[450px] lg:h-[450px] border border-slate-100 rounded-full absolute opacity-50"></div>
            </div>

            {/* Center Circle - Main Focus */}
            <div className="absolute top-1/2 left-1/2 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full bg-slate-900 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl">
              <CodeIcon sx={{ fontSize: isLaptop ? 40 : 24, color: 'white' }} />
            </div>

            {/* Tech Icons around circle */}
            {techIconsConfig.map((tech, index) => {
              const iconSize = isLaptop ? 80 : 50;
              const svgSize = tech.name === 'Angular'
                ? (isLaptop ? '52px' : '36px')
                : (isLaptop ? '40px' : '28px');
              return (
                <div
                  key={index}
                  className="absolute rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all hover:scale-110 z-20"
                  style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${tech.angle}deg) translate(${radius}px) rotate(${-tech.angle}deg)`,
                    backgroundColor: tech.bgColor,
                    border: tech.name === 'Angular' ? '3px solid #DD0031' : '3px solid white',
                  }}
                  title={tech.name}
                >
                  <div style={{ width: svgSize, height: svgSize }}>
                    {getTechIcon(tech.name)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Skills Cards */}
          <div className="flex-1 min-w-0 w-full lg:w-auto" style={{ maxWidth: '800px' }}>
            <div className="flex flex-col gap-4 lg:gap-[20px]">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  {...skill}
                  rotation={index === 0 ? 1.5 : index === 1 ? -1 : 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
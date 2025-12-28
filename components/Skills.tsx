'use client';

import { useMemo } from 'react';
import CodeIcon from '@mui/icons-material/Code';

interface SkillCardProps {
  number: string;
  title: string;
  description: string;
  rotation?: number;
}

function SkillCard({ number, title, description, rotation = 0 }: SkillCardProps) {
  return (
    <div
      className="bg-[#EDF0F9] border-2 border-[#585F6F] rounded-[8px] p-[20px] relative overflow-hidden transition-transform hover:scale-[1.02]"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-[-6px] right-[512px] w-[181px] h-[258px] bg-[#D9DFF2] rounded-tl-[253.5px] rounded-tr-[26px] opacity-50" />
      <div className="absolute top-[166px] left-[-18px] w-[145px] h-[145px] rounded-full bg-[rgba(217,223,242,0.5)]" />
      <div className="absolute top-[200px] right-[86px] w-[89px] h-[89px] rounded-full bg-[rgba(217,223,242,0.5)]" />
      <div className="absolute top-[-9px] left-[-31px] w-[69px] h-[69px] rounded-full bg-[#D9DFF2]" />

      <div className="relative z-10">
        <h3 className="text-[31px] font-bold leading-[1.24] text-[#242A41] mb-[20px]">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[1.5] text-[#585F6F]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    {
      number: '1',
      title: 'UX-Oriented Mindset',
      description: 'Certified by Google in UX Design, I combine technical engineering with user-centric principles to build applications that are both functional and intuitive.',
    },
    {
      number: '2',
      title: 'Full-Stack Development',
      description: 'Proficient in React & Angular (Frontend) and Spring Boot (Java) (Backend). I am also actively exploring AI-driven workflows (e.g., n8n, text-to-speech) to enhance products.',
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
    { name: 'Copilot', bgColor: '#000000', angle: 288 },
  ], []);

  // Reduced size for circular icons section
  const circularSectionSize = 500;
  const centerX = circularSectionSize / 2;
  const centerY = circularSectionSize / 2;

  // Adjust radius for orbit positions
  const adjustedIconPositions = useMemo(() =>
    techIconsConfig.map(tech => ({
      ...tech,
      radius: 170, // Slightly wider to sit on the orbits
      x: centerX + Math.cos((tech.angle * Math.PI) / 180) * 170,
      y: centerY + Math.sin((tech.angle * Math.PI) / 180) * 170,
    })),
    [techIconsConfig, centerX, centerY]
  );


  // SVG components - Updated to use White Fill for colored backgrounds
  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Angular':
        return (
          // White Icon
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3705 17.5137L12 13.5795L13.6295 17.5137H10.3705ZM12 0L1.75114 3.65684L3.33716 18.5723L12 24L20.6628 18.5723L22.2489 3.65684L12 0ZM18.7997 19.3444L12 22.25L5.20034 19.3444L3.92966 4.77443L12 2.5L20.0703 4.77443L18.7997 19.3444Z" fill="white" />
            <path d="M12 5.61365L6.96591 17.5136H9.27273L10.3705 14.8614H13.6295L14.7273 17.5136H17.0341L12 5.61365Z" fill="white" />
          </svg>
        );
      case 'React':
        return (
          // White Icon
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="white" />
            <g stroke="white" strokeWidth="1.5">
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            </g>
          </svg>
        );
      case 'Figma':
        return (
          // Original Colors (Figma logo needs colors)
          <svg width="32" height="32" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          // White Icon
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0833 13.9213C22.2592 13.5654 22.352 13.1678 22.352 12.7523C22.352 11.2335 21.2269 9.97235 19.7619 9.77093C19.7619 9.77093 19.6644 4.38139 14.2882 2.30237C11.595 1.25878 7.37526 2.5029 7.37526 2.5029C5.38883 3.32179 3.51866 5.86016 3.51866 5.86016C1.94424 7.64411 1.70116 10.3444 2.82236 12.3853C3.01692 12.7402 3.28723 13.048 3.6067 13.2929L3.58529 13.3364C3.58529 13.3364 9.07096 22.6588 17.0654 21.4641C17.0654 21.4641 20.3204 20.7255 21.6112 17.5873C21.8485 17.0135 21.9897 16.386 21.9897 15.7262C21.9897 15.0877 21.8596 14.4815 21.6335 13.9274L22.0833 13.9213ZM10.5746 15.8276C10.5746 15.8276 10.9995 14.7214 11.4116 13.6335L15.4267 15.6587L10.5746 15.8276ZM13.8837 8.0121C13.8837 8.0121 16.6346 12.3392 17.6534 14.591L13.7912 12.6366L13.8837 8.0121Z" fill="white" />
          </svg>
        );
      case 'Copilot':
        return (
           // White Icon
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white" />
            <circle cx="8" cy="11" r="1.5" fill="black" />
            <circle cx="16" cy="11" r="1.5" fill="black" />
            <path d="M17 14c-1.5 2-3 3-5 3s-3.5-1-5-3" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-[50px] bg-white">
      <h2 className="text-[56px] font-semibold leading-[1.1] text-[#242A41] text-center mb-[80px]">
        Skill Sets
      </h2>
      <div className="max-w-[1728px] mx-auto px-[200px]">
        <div className="flex items-center gap-[40px]">
          {/* Left - Circular Tech Icons */}
          <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: `${circularSectionSize}px`, height: `${circularSectionSize}px` }}>
            
            {/* NEW: Orbits (Replaced the old <line> SVGs with concentric rings) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Ring 1 - Tilted */}
               <div className="w-[380px] h-[380px] border border-slate-200 rounded-full absolute transform rotate-[25deg] scale-y-90"></div>
                {/* Ring 2 - Tilted opposite */}
               <div className="w-[380px] h-[380px] border border-slate-200 rounded-full absolute transform -rotate-[25deg] scale-y-90"></div>
                {/* Ring 3 - Wider and thinner */}
               <div className="w-[450px] h-[450px] border border-slate-100 rounded-full absolute opacity-50"></div>
            </div>

            {/* Center Circle - Main Focus */}
            <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full bg-slate-900 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl">
              <CodeIcon sx={{ fontSize: 40, color: 'white' }} />
            </div>

            {/* Tech Icons around circle */}
            {adjustedIconPositions.map((tech, index) => (
              <div
                key={index}
                className="absolute w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all hover:scale-110 z-20"
                style={{
                  left: `${tech.x - 40}px`, // -40 because width/2 is 40
                  top: `${tech.y - 40}px`,
                  backgroundColor: tech.bgColor, // Use specific bg color
                  border: '4px solid white', // Add white border to separate from orbit lines
                }}
                title={tech.name}
              >
                <div style={{ width: '32px', height: '32px' }}>
                  {getTechIcon(tech.name)}
                </div>
              </div>
            ))}
          </div>

          {/* Right Skills Cards */}
          <div className="flex-1 min-w-0" style={{ maxWidth: '800px' }}>
            <div className="flex flex-col gap-[20px]">
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
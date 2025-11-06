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
      className="bg-[#EDF0F9] border-2 border-[#585F6F] rounded-[8px] p-[38px] relative overflow-hidden transition-transform hover:scale-[1.02]"
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
        <div className="text-[25.6px] font-bold text-[#585F6F] mb-[30px]">
          {number}
        </div>
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
      title: 'UX-Oriented Development',
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

  // Tech icons configuration - memoized to prevent hydration issues
  const techIconsConfig = useMemo(() => [
    { name: 'Angular', color: '#DD0031', angle: 0, radius: 200 },
    { name: 'React', color: '#61DAFB', angle: 72, radius: 200 },
    { name: 'Figma', color: '#F24E1E', angle: 144, radius: 200 },
    { name: 'Spring Boot', color: '#6DB33F', angle: 216, radius: 200 },
    { name: 'Copilot', color: '#4285F4', angle: 288, radius: 200 },
  ], []);

  // Reduced size for circular icons section to give more space to skill cards
  const circularSectionSize = 500;
  const centerX = circularSectionSize / 2;
  const centerY = circularSectionSize / 2;
  
  // Adjust radius for smaller circle
  const adjustedIconPositions = useMemo(() => 
    techIconsConfig.map(tech => ({
      ...tech,
      radius: 150, // Reduced from 200
      x: centerX + Math.cos((tech.angle * Math.PI) / 180) * 150,
      y: centerY + Math.sin((tech.angle * Math.PI) / 180) * 150,
    })), 
    [techIconsConfig, centerX, centerY]
  );


  // SVG components for each tech - smaller size for compact layout
  const getTechIcon = (name: string, color: string) => {
    switch (name) {
      case 'Angular':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.96 19.69L12 13.93L14.03 19.69H9.96ZM11.99 0L1.5 3.99L2.79 19.36L11.99 24L21.19 19.36L22.5 3.99L11.99 0ZM18.23 17.31L11.99 20.31L5.75 17.31L4.73 6.69L11.99 3.69L19.25 6.69L18.23 17.31Z" fill={color}/>
          </svg>
        );
      case 'React':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill={color}/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke={color} strokeWidth="1"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke={color} strokeWidth="1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke={color} strokeWidth="1" transform="rotate(-60 12 12)"/>
          </svg>
        );
      case 'Figma':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 4.73h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588v6.038zm0 1.27H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784-2.509 8.26-2.509h3.588v4.509h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49H12.264v4.509c0 2.503-2.047 4.49-4.49 4.49S3.284 22.503 3.284 20s2.047-4.49 4.49-4.49h4.49zm-4.004-1.27c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.02 3.019 3.02h3.588V4.73H8.26zm4.004 5.509H8.26c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h4.49c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z" fill={color}/>
          </svg>
        );
      case 'Spring Boot':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill={color}/>
            <path d="M8 7h8v2H8V7zm0 3h8v2H8v-2zm0 3h6v2H8v-2z" fill={color}/>
          </svg>
        );
      case 'Copilot':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill={color}/>
            <path d="M8 9h8v1.5H8V9zm0 2.5h8v1.5H8v-1.5zm0 2.5h6v1.5H8V14z" fill={color}/>
            <circle cx="7" cy="7.5" r="1" fill={color}/>
            <circle cx="17" cy="7.5" r="1" fill={color}/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-[100px] bg-white">
      <div className="max-w-[1728px] mx-auto px-[284px]">
        <div className="flex items-start gap-[40px]">
          {/* Left - Circular Tech Icons - Reduced size */}
          <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: `${circularSectionSize}px`, height: `${circularSectionSize}px` }}>
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {adjustedIconPositions.map((tech, index) => (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={tech.x}
                  y2={tech.y}
                  stroke="#EBECF0"
                  strokeWidth="1"
                  opacity="0.5"
                />
              ))}
            </svg>

            {/* Center Circle - Main Focus */}
            <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full bg-[#4353FF] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg">
              <CodeIcon sx={{ fontSize: 40, color: 'white' }} />
            </div>

            {/* Tech Icons around circle */}
            {adjustedIconPositions.map((tech, index) => (
              <div
                key={index}
                className="absolute w-[100px] h-[100px] rounded-full bg-white border-2 border-[#EBECF0] flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110 z-10"
                style={{
                  left: `${tech.x - 50}px`,
                  top: `${tech.y - 50}px`,
                }}
                title={tech.name}
              >
                <div style={{ width: '40px', height: '40px' }}>
                  {getTechIcon(tech.name, tech.color)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Skills Cards - Expanded width */}
          <div className="flex-1 min-w-0" style={{ maxWidth: '800px' }}>
            <h2 className="text-[42px] font-semibold leading-[1.37] text-[#242A41] mb-[60px]">
              I specialize in
            </h2>
            
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


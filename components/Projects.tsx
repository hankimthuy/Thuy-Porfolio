'use client';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageBg?: string;
  caseStudyLink?: string;
}

function ProjectCard({ title, tags, description, imageBg, caseStudyLink }: ProjectCardProps) {
  return (
    <div className="relative rounded-[20px] overflow-hidden h-[540px]">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: imageBg || 'linear-gradient(135deg, #DEFCFF 0%, #C7EBE4 100%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-[70px] h-full flex flex-col justify-between">
        <div>
          <h3 className="text-[40px] font-semibold leading-[1.1] text-[#242F65] mb-[25px]">
            {title}
          </h3>
          
          <div className="flex gap-[12px] mb-[25px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[#6878AC] px-[17px] py-[11px] rounded-[10px] text-[18px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-[20px] font-medium leading-[1.28] text-[#585F6F] max-w-[442px]">
            {description}
          </p>
        </div>
        
        <a 
          href={caseStudyLink || '#'}
          className="bg-[#583FBC] text-white px-[38px] py-[19px] rounded-[15px] text-[18px] font-bold flex items-center gap-[5px] w-fit hover:bg-[#4a35a0] transition-colors"
        >
          Read Case Study
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Centralized Manufacturing Lifecycle Platform',
      tags: ['Angular', 'Spring Boot', 'Figma', 'Restful API'],
      description: 'Our team digitalized a complex manufacturing lifecycle, replacing siloed Excel files with a centralized web platform. This system manages key business processes, from product data and approvals to core logic calculations. We transformed complex data into an intuitive dashboard, creating a single source of truth that significantly improved data accuracy and operational efficiency.',
      imageBg: 'linear-gradient(135deg, #DEFCFF 0%, #C7EBE4 100%)',
      caseStudyLink: '#',
    },
    {
      title: 'Reflectly (Personal Project)',
      tags: ['React', 'Spring Boot', 'UX Design'],
      description: 'A personal side-project aimed at helping users build consistent self-awareness habits. The app focuses on a core user loop: mood logging and clear pattern visualization to encourage reflection. This allows users to track and understand their emotional trends over time, identifying factors that influence their well-being. I am developing the full-stack solution, including a React frontend for the UI and a Spring Boot (Java) backend to handle all business logic.',
      imageBg: 'linear-gradient(135deg, #E1DAFE 0%, #CBC1F6 100%)',
      caseStudyLink: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-[100px] bg-white">
      <div className="max-w-[1728px] mx-auto px-[284px]">
        <h2 className="text-[56px] font-semibold leading-[1.1] text-[#242A41] text-center mb-[80px]">
          Portfolio
        </h2>
        
        <div className="flex flex-col gap-[60px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}


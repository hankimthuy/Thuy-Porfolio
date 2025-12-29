'use client';

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageBg?: string;
  image?: string; // Path to project image
  caseStudyLink?: string;
}

function ProjectCard({ title, tags, description, imageBg, image, caseStudyLink }: ProjectCardProps) {
  return (
    <div className="relative rounded-[12px] lg:rounded-[20px] overflow-hidden h-auto lg:h-[540px] min-h-[400px] lg:min-h-[540px]">
      <div 
        className="absolute inset-0"
        style={{
          background: imageBg || 'linear-gradient(135deg, #F4EEFF 0%, #DCD6F7 100%)',
        }}
      />
      
      <div className="relative z-10 p-6 lg:p-[40px] h-full flex flex-col lg:flex-row items-center gap-6 lg:gap-[30px]">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center w-full lg:w-auto">
          <h3 className="text-2xl lg:text-[40px] font-semibold leading-[1.1] text-[#424874] mb-4 lg:mb-[25px]">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 lg:gap-[12px] mb-4 lg:mb-[25px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[#424874] px-3 py-1.5 lg:px-[17px] lg:py-[11px] rounded-[8px] lg:rounded-[10px] text-sm lg:text-[18px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-base lg:text-[20px] font-medium leading-[1.28] text-[#424874] max-w-full lg:max-w-[442px] opacity-90">
            {description}
          </p>
        </div>

        {/* Image Section */}
        {image && (
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-full lg:max-w-[500px] h-[250px] lg:h-[400px] rounded-[12px] lg:rounded-[16px] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Centralized Manufacturing Lifecycle Platform',
      tags: ['Angular', 'Python', 'Figma', 'Restful API'],
      description: 'Digitalized a complex manufacturing lifecycle by consolidating disparate operational processes into a unified web platform. The system manages the critical end-to-end workflow—spanning inventory and BOM management to financial invoicing and compliance audits. This integration eliminates data silos, establishing a single source of truth that guarantees operational precision and real-time visibility across departments.',
      imageBg: 'linear-gradient(135deg, #F4EEFF 0%, #DCD6F7 100%)',
      image: '/images/1.jpg', 
      caseStudyLink: '#',
    },
    {
      title: 'Reflectly (Side Project)',
      tags: ['React', 'Spring Boot', 'UX Design'], 
      description: 'An interpersonal development platform designed to build consistent self-awareness habits. The core value lies in helping users visualize emotional patterns and understand their own behavioral triggers. To achieve this without the friction of manual journaling, the app leverages AI as a supportive tool: utilizing a "Voice-to-Insight" workflow to capture spoken thoughts and an "Insight Crystallizer" to help users distill raw experiences into clear, actionable life principles.',
      imageBg: 'linear-gradient(135deg, #DCD6F7 0%, #A6B1E1 100%)',
      image: '/images/IMG_2304.JPG',
      caseStudyLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-8 lg:py-[50px] bg-white">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[200px]">
        <h2 className="text-3xl lg:text-[56px] font-semibold leading-[1.1] text-[#424874] text-center mb-8 lg:mb-[80px]">
          Projects
        </h2>
        
        <div className="flex flex-col gap-8 lg:gap-[60px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
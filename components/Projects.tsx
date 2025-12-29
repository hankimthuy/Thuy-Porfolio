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
    <div className="relative rounded-[20px] overflow-hidden h-[540px]">
      <div 
        className="absolute inset-0"
        style={{
          background: imageBg || 'linear-gradient(135deg, #F4EEFF 0%, #DCD6F7 100%)',
        }}
      />
      
      <div className="relative z-10 p-[40px] h-full flex items-center gap-[30px]">
        {/* Left side: Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-[40px] font-semibold leading-[1.1] text-[#424874] mb-[25px]">
            {title}
          </h3>
          
          <div className="flex gap-[12px] mb-[25px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[#424874] px-[17px] py-[11px] rounded-[10px] text-[18px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-[20px] font-medium leading-[1.28] text-[#424874] max-w-[442px] opacity-90">
            {description}
          </p>
        </div>

        {/* Right side: Image */}
        {image && (
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[400px] rounded-[16px] overflow-hidden">
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
    <section id="projects" className="py-[50px] bg-white">
      <div className="max-w-[1728px] mx-auto px-[200px]">
        <h2 className="text-[56px] font-semibold leading-[1.1] text-[#424874] text-center mb-[80px]">
          Projects
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
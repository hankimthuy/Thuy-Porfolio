'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

function TestimonialCard({ name, role, text, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[25px] p-6 lg:p-[44px] w-full max-w-[360px] lg:w-[360px] h-auto lg:h-[289px] min-h-[250px] lg:min-h-[289px] flex flex-col justify-between relative">
      <div className="flex flex-col gap-4 lg:gap-[20px] pt-12 lg:pt-0">
        <p className="text-sm lg:text-[16px] font-normal leading-[1.75] text-[#232E35] text-center">
          {text}
        </p>
        <div className="flex flex-col items-center gap-2 lg:gap-[10px]">
          <p className="text-xs lg:text-[14px] font-medium text-[#232E35]">{name}</p>
          <span className="bg-[#FBFBFB] text-[#656D72] px-2 lg:px-[8px] py-1 lg:py-[4px] rounded-[4px] text-[10px] lg:text-[12px] font-medium">
            {role}
          </span>
        </div>
      </div>
      
      {/* Avatar */}
      <div className="absolute top-[-50px] lg:top-[-68px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] rounded-full border-[4px] lg:border-[5px] border-white overflow-hidden">
        <Image
          src="/images/testimonial-avatar.png"
          alt={name}
          width={130}
          height={130}
          className="object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna Writens',
      role: 'Designer',
      text: 'To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following',
    },
    {
      name: 'Anna Writens',
      role: 'Designer',
      text: 'To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following',
    },
    {
      name: 'Anna Writens',
      role: 'Designer',
      text: 'To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following',
    },
  ];

  return (
    <section id="reviews" className="py-8 lg:py-[50px] bg-[#F6F7FC]">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[200px]">
        <h2 className="text-2xl lg:text-[46px] font-semibold leading-[1.37] text-[#242A41] text-center mb-8 lg:mb-[80px]">
          Customers reviews
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[48px] pt-16 lg:pt-[80px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-2 lg:gap-[10px] mt-8 lg:mt-[80px]">
          <button className="w-10 h-10 lg:w-[41px] lg:h-[41px] rounded-full border border-[rgba(41,45,52,0.25)] flex items-center justify-center hover:bg-white transition-colors">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5L15 5M1 5L5 1M1 5L5 9" stroke="#292D34" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-10 h-10 lg:w-[41px] lg:h-[41px] rounded-full border border-[rgba(41,45,52,0.25)] flex items-center justify-center hover:bg-white transition-colors">
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
              <path d="M14 5L0 5M14 5L10 1M14 5L10 9" stroke="#292D34" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


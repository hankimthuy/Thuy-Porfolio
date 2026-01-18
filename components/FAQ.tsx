'use client';

import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-[#EDF0F9] rounded-[8px] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 lg:p-[32px] flex items-center justify-between text-left"
      >
        <p className="text-base lg:text-[18px] font-bold leading-[1.28] text-[#242A41] flex-1 pr-2">
          {question}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M8 12L16 20L24 12"
            stroke="#242A41"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 lg:px-[32px] pb-4 lg:pb-[32px]">
          <p className="text-sm lg:text-[17px] font-normal leading-[1.41] text-[#585F6F]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What drives you to build products?',
      answer: "I'm driven by empathy. For me, a product is simply a solution to a real human problem. My motivation comes from seeing something I've built actually reduce someone's frustration, save them time, or (like in my 'Reflectly' project) help them understand themselves better.",
    },
    {
      question: 'Why do you focus on UX-Oriented Development?',
      answer: "As a Frontend Engineer, I'm the closest person to the end-user. Focusing on UX is a natural extension of that role. I believe a 'feature' isn't 'done' when the code is merged; it's 'done' when the user can achieve their goal effortlessly. This mindset is the foundation of my transition toward a product-focused role.",
    },
    {
      question: 'How do you handle ambiguity and changing requirements?',
      answer: "I embrace them—change is a core part of the Agile/Scrum process. When requirements change, I don't see it as a problem; I see it as 'new information.' My first step is to ask 'why' to understand the new business goal or user insight. Then, I collaborate with the team (PO, BA, Designers) to assess the impact, break down the new task, and re-prioritize.",
    },
  ];

  return (
    <section id="faq" className="py-8 lg:py-[50px] bg-white">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[60px]">
          {/* Left Text */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="mb-6 lg:mb-[48px]">
              <h2 className="text-3xl lg:text-[47px] font-bold leading-[1.23] text-[#242A41] mb-4 lg:mb-[30px]">
                FAQ
              </h2>
              
              <p className="text-sm lg:text-[16px] font-normal leading-[1.5] text-[#1D2130] mb-4 lg:mb-[20px]">
                If you have any other questions, you can contact me by email
              </p>
              <a
                href="mailto:thuyhankim@gmail.com"
                className="flex text-sm lg:text-[15px] font-normal text-[#242A41] hover:underline gap-2 lg:gap-[10px] items-center"
              >
                <LuMail/> thuyhankim@gmail.com
              </a>
            </div>
          </div>

          {/* Right FAQ List */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col gap-4 lg:gap-[20px]">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


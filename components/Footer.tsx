'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#7DE0EA] py-[100px]">
      <div className="max-w-[1728px] mx-auto px-[284px]">
        {/* Info Block */}
        <div className="flex items-start gap-[60px] mb-[80px]">
          <div className="flex-1">
            <div className="relative w-[64px] h-[64px] rounded-full mb-[40px] overflow-hidden">
              <Image
                src="/images/avatar-56586a.png"
                alt="Avatar"
                width={64}
                height={64}
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-[39px] font-bold leading-[1.23] text-[#242A41] mb-[40px]">
              Let's connect
            </h3>
            <div className="flex gap-[18px]">
              <a 
                href="http://www.linkedin.com/in/thuyhankim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1D2130] text-white px-[35px] py-[17px] rounded-[12.8px] text-[15px] font-semibold flex items-center gap-[18px] hover:bg-[#2a3142] transition-colors"
              >
                My Linkedin
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 12L16 20L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="#"
                className="bg-[#1D2130] text-white px-[34px] py-[17px] rounded-[12.8px] text-[16px] font-semibold flex items-center gap-[16px] hover:bg-[#2a3142] transition-colors"
              >
                Download my resume
                <svg width="32" height="21" viewBox="0 0 32 21" fill="none">
                  <path d="M8 8L16 16L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Block */}
          <div className="flex-1 bg-[#583FBC] rounded-[32px] p-[42px] relative overflow-hidden">
            <div className="absolute -top-[11px] -left-[4px] w-[588px] h-[276px] bg-[#7DE0EA] rounded-[32px] opacity-20" />
            <div className="relative z-10">
              <h3 className="text-[32px] font-bold leading-[1.2] text-white mb-[10px]">
                Ready to build something great?
              </h3>
              <p className="text-[16px] font-normal leading-[1.5] text-white mb-[40px]">
                Let's build something great together
              </p>
              <a 
                href="#contact"
                className="bg-[#7DE0EA] text-white px-[24px] py-[17px] rounded-[12.8px] text-[18px] font-semibold flex items-center gap-[5px] hover:bg-[#6dd0d9] transition-colors w-fit"
              >
                Get in Touch
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M6 4L10 8.5L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#583FBC] rounded-[32px] p-[137px] text-center mb-[80px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            {/* Decorative lines pattern */}
          </div>
          <div className="relative z-10">
            <h3 className="text-[48px] font-bold leading-[1.2] text-white mb-[20px]">
              Try me out, risk free!
            </h3>
            <p className="text-[20px] font-normal leading-[1.5] text-white mb-[40px] max-w-[589px] mx-auto">
              If you're not happy with the design after the first draft, I'll refund your deposit, no questions asked
            </p>
            <button className="bg-[#7DE0EA] text-white px-[24px] py-[17px] rounded-[12.8px] text-[18px] font-semibold flex items-center gap-[5px] mx-auto hover:bg-[#6dd0d9] transition-colors">
              Contact
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M6 4L10 8.5L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dashed border-[#26252B] pt-[32px] flex items-center justify-between">
          <p className="text-[16px] font-normal text-[#1D2130]">
            Built by Thuy.io
          </p>
          <div className="flex items-center gap-[20px]">
            <p className="text-[16px] font-normal text-[#1D2130]">
              Got a question?
            </p>
            <a
              href="mailto:thuyhankim@gmail.com"
              className="text-[15px] font-semibold text-[#583FBC] hover:underline"
            >
              thuyhankim@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


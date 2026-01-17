'use client';


export default function Footer() {
  return (
    <footer id="footer" className="bg-[#D9DFF2] py-8 lg:py-[50px]">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[200px]">
        {/* Info Block */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px] mb-8 lg:mb-[80px]">
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-full mb-6 lg:mb-[40px] overflow-hidden">
            </div>
            <h3 className="text-2xl lg:text-[39px] font-bold leading-[1.23] text-[#242A41] mb-0">
              Let's connect
            </h3>
          </div>

          {/* CTA Block */}
          <div className="flex-1 w-full lg:w-auto bg-[#583FBC] rounded-[20px] lg:rounded-[32px] p-6 lg:p-[42px] relative overflow-hidden">
            <div className="absolute -top-[11px] -left-[4px] w-full lg:w-[588px] h-[200px] lg:h-[276px] bg-[#7DE0EA] rounded-[20px] lg:rounded-[32px] opacity-20" />
            <div className="relative z-10">
              <h3 className="text-xl lg:text-[32px] font-bold leading-[1.2] text-white mb-2 lg:mb-[10px]">
                Ready to build something great?
              </h3>
              <a 
                href="#contact"
                className="bg-[#A6B1E1] text-white px-5 lg:px-[24px] py-3 lg:py-[17px] rounded-[10px] lg:rounded-[12.8px] text-sm lg:text-[18px] font-semibold flex items-center gap-2 lg:gap-[5px] hover:bg-[#6dd0d9] transition-colors w-fit"
              >
                Get in Touch
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M6 4L10 8.5L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dashed border-[#26252B] pt-6 lg:pt-[32px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm lg:text-[16px] font-normal text-[#1D2130]">
            Built by Thuy_
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-[20px]">
            <p className="text-sm lg:text-[16px] font-normal text-[#1D2130]">
              Got a question?
            </p>
            <a
              href="mailto:thuyhankim@gmail.com"
              className="text-sm lg:text-[15px] font-semibold text-[#583FBC] hover:underline"
            >
              thuyhankim@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


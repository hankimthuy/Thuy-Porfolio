'use client';

export default function Header() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1728px] mx-auto px-[284px] py-[11px]">
        <div className="flex items-center justify-between">
          <div className="text-[24px] font-semibold text-[#242A41]">
            Thuy.io
          </div>
          
          <nav className="flex items-center gap-[88px]">
            <div className="flex items-center gap-[88px]">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[17px] font-normal text-[#1D2130] hover:text-[#583FBC] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button className="bg-[#7DE0EA] text-white px-[24px] py-[15px] rounded-[12.8px] text-[18px] font-semibold flex items-center gap-[5px] hover:bg-[#6dd0d9] transition-colors">
              Get in Touch
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M6 4L10 8.5L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}


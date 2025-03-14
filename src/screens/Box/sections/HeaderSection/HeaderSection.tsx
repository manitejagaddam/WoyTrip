import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "About Us", href: "#" },
  ];

  return (
    <header className="w-full py-5 bg-[#7DD2FF]/45">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <div className="relative w-[198.36px] h-[70.42px]">
          <div className="absolute w-[196px] h-[51px] top-0 left-0">
            <div className="absolute w-[49px] h-[38px] top-1 left-0 bg-[url(public/group.png)] bg-[100%_100%]" />
            <div className="absolute w-[25px] h-7 top-3.5 left-[51px] bg-[url(public/exclude.svg)] bg-[100%_100%]" />
            <div className="absolute w-[54px] h-[51px] top-0 left-[78px]">
              <div className="absolute w-7 h-[37px] top-3.5 left-0 bg-[url(public/group-1.png)] bg-[100%_100%]" />
              <div className="absolute w-7 h-[42px] top-0 left-[26px] bg-[url(public/group-2.png)] bg-[100%_100%]" />
            </div>
            <div className="absolute w-5 h-7 top-3.5 left-[134px] bg-[url(public/group-3.png)] bg-[100%_100%]" />
            <div className="absolute w-2.5 h-[38px] top-[3px] left-[156px]">
              <div className="h-[38px]">
                <div className="w-2.5 h-[38px]">
                  <div className="relative h-[38px]">
                    <img
                      className="absolute w-2.5 h-[38px] top-px left-0"
                      alt="Vector"
                      src="public/vector-36.svg"
                    />
                    <img
                      className="absolute w-2.5 h-2.5 top-0 left-0"
                      alt="Mask group"
                      src="public/mask-group.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[27px] h-[37px] top-3.5 left-[169px] bg-[url(public/group-4.png)] bg-[100%_100%]" />
          </div>
          <div className="absolute top-[51px] left-0.5 [font-family:'Crimson_Text',Helvetica] font-semibold text-[#1893f8] text-[15.1px] tracking-[2.42px] leading-[18.8px] whitespace-nowrap">
            We Organise Your Trip
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-20">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Lato',Helvetica] font-normal text-[#333333] text-base leading-[22.4px] hover:text-[#42a7c3] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button className="bg-[#42a7c3] hover:bg-[#3a96af] text-gray-50 font-bold px-8 py-3 rounded-lg">
          Make Trip
        </Button>
      </div>
    </header>
  );
};

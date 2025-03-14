import React from "react";
import { Button } from "../../../../components/ui/button";

export const Navbar = (): JSX.Element => {
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
        <img src="public/images/logo.png" alt="" />

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

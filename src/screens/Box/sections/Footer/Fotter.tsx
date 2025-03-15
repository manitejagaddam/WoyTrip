import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const Footer = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Mobile", href: "#" },
  ];

  // Contact links data
  const contactLinks = [
    { title: "Help/FAQ", href: "#" },
    { title: "Press", href: "#" },
    { title: "Affilates", href: "#" },
  ];

  // More links data
  const moreLinks = [
    { title: "Airlinefees", href: "#" },
    { title: "Airline", href: "#" },  
    { title: "Low fare tips", href: "#" },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon size={36} />, href: "#" },
    { icon: <TwitterIcon size={36} />, href: "#" },
    { icon: <InstagramIcon size={36} />, href: "#" },
  ];

  return (
    <footer className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Logo section */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="relative h-[257px]">
            <div className="w-[189px] h-[135px] mx-auto md:mx-0">
              {/* Logo image */}
              <img
                className=""
                alt="WayTrav Logo"
                src="public/images/footer_logo.png"
              />
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="w-full md:w-2/4 flex flex-wrap justify-between mb-8 md:mb-0">
          {/* Company links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              Contact
            </h3>
            <ul className="space-y-4">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              More
            </h3>
            <ul className="space-y-4">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media section */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <div className="flex items-center gap-9">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-[72px] h-[72px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

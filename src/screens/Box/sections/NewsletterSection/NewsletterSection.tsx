import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const NewsletterSection = (): JSX.Element => {
  // Newsletter data
  const newsletterData = {
    title: "Travel your way, not theirs.",
    subtitle: "Custom trips designed just for you.",
    inputPlaceholder: "Your email",
    buttonText: "Subscribe",
  };

  return (
    <section className="w-full py-16 px-4">
      <Card className="w-full max-w-5xl mx-auto relative overflow-visible">
        <CardContent className="p-0">
          <div className="relative w-full">
            {/* Background shape with gradient */}
            <div className="w-full h-[407px] bg-[#3ca7ff75] rounded-[20px_129px_20px_129px] rotate-180 opacity-20 absolute -z-10" />

            {/* Content container */}
            <div className="flex flex-col items-center justify-center py-16 px-4 relative z-10">
              {/* Heading */}
              <h2 className="font-['Poppins',Helvetica] font-semibold text-text-clr text-[33px] text-center tracking-[0] leading-[54px] mb-12">
                {newsletterData.title} <br />
                {newsletterData.subtitle}
              </h2>

              {/* Form */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
                <div className="relative flex-grow">
                  <Input
                    className="h-[68px] pl-14 text-text-color font-['Montserrat',Helvetica] rounded-[10px]"
                    placeholder={newsletterData.inputPlaceholder}
                  />
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    <MailIcon className="w-5 h-5 text-[#39425d]" />
                  </div>
                </div>

                <Button className="h-[68px] bg-[#008cff] hover:bg-[#0070cc] text-white font-['Open_Sans',Helvetica] text-[17px] rounded-[10px] min-w-[180px]">
                  {newsletterData.buttonText}
                </Button>
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden md:block absolute -top-8 -right-8 w-[103px] h-[103px] rounded-[51.5px] [background:linear-gradient(180deg,rgb(217.81,238.23,255)_0%,rgb(0,140,255)_100%)]">
              <div className="relative w-[83px] h-[42px] top-[31px] left-[9px] rotate-[-28.33deg]">
                <div className="relative w-[78px] h-[59px] top-[-5px] left-0.5">
                  <img
                    className="absolute w-2 h-1.5 top-[34px] left-[33px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-27.svg"
                  />
                  <img
                    className="absolute w-1.5 h-1 top-5 left-[43px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-27.svg"
                  />
                  <img
                    className="absolute w-5 h-[15px] top-3.5 left-[35px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-71.svg"
                  />
                  <img
                    className="absolute w-[70px] h-[29px] top-[15px] left-[5px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-61.svg"
                  />
                  <img
                    className="absolute w-[46px] h-[25px] top-6 left-2.5 rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-57.svg"
                  />
                  <img
                    className="absolute w-4 h-3.5 top-1.5 left-[3px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-38.svg"
                  />
                  <img
                    className="absolute w-[13px] h-[7px] top-[18px] left-px rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-33.svg"
                  />
                  <img
                    className="absolute w-[7px] h-1 top-8 left-[67px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-34.svg"
                  />
                  <img
                    className="absolute w-[5px] h-1.5 top-[31px] left-[59px] rotate-[28.33deg]"
                    alt="Vector"
                    src="public/vector-35.svg"
                  />
                  <img
                    className="absolute w-[35px] h-[31px] top-[13px] left-6 rotate-[28.33deg]"
                    alt="Group"
                    src="public/group-55.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

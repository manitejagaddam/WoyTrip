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
    <section className="w-full py-16 px-4 border-none ">
      <Card className="w-full max-w-5xl mx-auto relative overflow-visible border-none">
      <img src="public/images/choosen_us_areoplane.png" className="absolute -top-6 right-0" alt="" />
        <CardContent className="p-0 border-none">
          <div className="relative w-full border-none">
            {/* Background shape with gradient */}
            <div className="w-full h-[407px] bg-[#3ca7ff75] rounded-[20px_129px_20px_129px] rotate-180 opacity-20 absolute -z-10 border-none" />

            {/* Content container */}
            <div className="flex bg-transparent border-none  rounded-[20px_129px_20px_129px] w-full h-[407px] flex-col items-center justify-center py-16 px-4 relative z-10">
              {/* Heading */}
              <h2 className="font-['Poppins',Helvetica] font-semibold text-text-clr text-[33px] text-center tracking-[0] leading-[54px] mb-12">
                {newsletterData.title} <br />
                {newsletterData.subtitle}
              </h2>

              {/* Form */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl rounded-[20px_129px_20px_129px] w-full h-[407px]">
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
            
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

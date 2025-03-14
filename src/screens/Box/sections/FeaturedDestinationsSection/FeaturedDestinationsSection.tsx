import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedDestinationsSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "24/7 Doctor Support",
      description: "Instant medical help for minor health issues.",
      icon: "public/twemoji-hospital.svg",
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Trip Video",
      description: "Capture memories with a short trip highlight video.",
      isHighlighted: true,
      iconGroup: true,
    },
    {
      id: 3,
      title: "Best Stay Options",
      description: "Handpicked stays for easy exploration.",
      isHighlighted: false,
      iconType: "stay",
    },
    {
      id: 4,
      title: "Affordable Prices",
      description: "Premium trips at budget-friendly rates.",
      isHighlighted: false,
      icon: "public/group-53.png",
    },
  ];

  return (
    <section className="w-full max-w-[619px] py-4">
      <div className="w-full flex justify-between">
        <img src="public/images/why_choosen.png" alt="" />

        <div>
          <div className="mb-14 relative">
            <h2 className="font-display-md-bold text-gray-900-default text-[length:var(--display-md-bold-font-size)] tracking-[var(--display-md-bold-letter-spacing)] leading-[var(--display-md-bold-line-height)]">
              Why Choose Us
            </h2>

            {/* Decorative element */}
            

            <p className="mt-14 font-text-xl-regular text-gray-900-default text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] max-w-[639px]">
              Enjoy different experiences in every place you visit and discover
              new and affordable adventures of course.
            </p>
          </div>

          <div className="flex flex-col gap-[30px] w-full max-w-[586px]">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`flex items-center gap-4 px-6 py-2 rounded-[10px] overflow-hidden border-none ${
                  feature.isHighlighted
                    ? "bg-white shadow-2 py-4 h-28"
                    : "bg-transparent h-20"
                }`}
              >
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="flex w-16 h-16 items-center justify-center gap-2.5 p-4 bg-white rounded-2xl overflow-hidden">
                    {feature.id === 1 && (
                      <img
                        className="relative w-[39px] h-[39px] mt-[-3.50px] mb-[-3.50px] ml-[-3.50px] mr-[-3.50px]"
                        alt="Hospital icon"
                        src="public/twemoji-hospital.svg"
                      />
                    )}

                    {feature.id === 2 && (
                      <div className="relative w-[33.33px] h-[33.33px] mt-[-0.67px] mb-[-0.67px] ml-[-0.67px] mr-[-0.67px]">
                        <div className="relative w-[33px] h-[33px]">
                          <img
                            className="absolute w-[13px] h-[13px] top-[19px] left-px"
                            alt="Group"
                            src="public/group-48.png"
                          />
                          <img
                            className="absolute w-1.5 h-[5px] top-5 left-1"
                            alt="Vector"
                            src="public/vector-67.svg"
                          />
                          <img
                            className="absolute w-[22px] h-[22px] top-1 left-[7px]"
                            alt="Group"
                            src="public/group-49.png"
                          />
                          <img
                            className="absolute w-[22px] h-3 top-1 left-0"
                            alt="Vector"
                            src="public/vector-13.svg"
                          />
                          <img
                            className="absolute w-2.5 h-[7px] top-2 left-3"
                            alt="Vector"
                            src="public/vector-18.svg"
                          />
                          <img
                            className="absolute w-3 h-[22px] top-[11px] left-[18px]"
                            alt="Vector"
                            src="public/vector-19.svg"
                          />
                          <img
                            className="absolute w-7 h-7 top-0 left-[5px]"
                            alt="Vector"
                            src="public/vector-22.svg"
                          />
                          <img
                            className="absolute w-7 h-7 top-0 left-[5px]"
                            alt="Vector"
                            src="public/vector-23.svg"
                          />
                          <img
                            className="absolute w-1 h-1 top-[3px] left-[26px]"
                            alt="Vector"
                            src="public/vector-58.svg"
                          />
                          <img
                            className="absolute w-[5px] h-[5px] top-[22px] left-1.5"
                            alt="Vector"
                            src="public/vector-20.svg"
                          />
                        </div>
                      </div>
                    )}

                    {feature.id === 3 && (
                      <div className="relative w-10 h-10 mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] mr-[-4.00px] overflow-hidden">
                        <div className="absolute w-10 h-8 top-2 left-0">
                          <img
                            className="absolute w-10 h-[27px] top-[5px] left-0"
                            alt="Group"
                            src="public/group-50.png"
                          />
                          <img
                            className="absolute w-10 h-0.5 top-[3px] left-0"
                            alt="Vector"
                            src="public/vector-26.svg"
                          />
                          <img
                            className="absolute w-[22px] h-[31px] top-0 left-[9px]"
                            alt="Vector"
                            src="public/vector-14.svg"
                          />
                          <img
                            className="absolute w-[35px] h-[22px] top-[7px] left-0.5"
                            alt="Group"
                            src="public/group-51.png"
                          />
                          <img
                            className="absolute w-1 h-1 top-3.5 left-[11px]"
                            alt="Vector"
                            src="public/vector-14.svg"
                          />
                          <img
                            className="absolute w-[9px] h-2.5 top-[21px] left-4"
                            alt="Vector"
                            src="public/vector-14.svg"
                          />
                          <img
                            className="absolute w-10 h-0.5 top-[30px] left-0"
                            alt="Vector"
                            src="public/vector-14.svg"
                          />
                          <img
                            className="absolute w-[17px] h-4 top-[3px] left-[11px]"
                            alt="Group"
                            src="public/group-52.png"
                          />
                        </div>
                        <img
                          className="absolute w-[27px] h-0.5 top-[7px] left-[7px]"
                          alt="Vector"
                          src="public/vector-43.svg"
                        />
                      </div>
                    )}

                    {feature.id === 4 && (
                      <img
                        className="relative w-9 h-9 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px]"
                        alt="Group"
                        src="public/group-53.png"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-1">
                    <h3 className="font-text-xl-bold text-gray-900-default text-[length:var(--text-xl-bold-font-size)] tracking-[var(--text-xl-bold-letter-spacing)] leading-[var(--text-xl-bold-line-height)] w-[200px]">
                      {feature.title}
                    </h3>
                    <p
                      className={`font-text-md-regular text-gray-600 text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] ${
                        feature.id === 2 || feature.id === 4
                          ? "w-[413px]"
                          : "w-fit whitespace-nowrap"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

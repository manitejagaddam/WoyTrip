import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="relative w-full max-w-[1225px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-['Lato',Helvetica] font-bold text-[#333333] text-[67.6px] tracking-[-0.68px] leading-[94.7px]">
            Our Destinations
          </h2>
          <p className="mt-2 opacity-80 font-['Lato',Helvetica] font-normal text-[#333333] text-[30.4px] tracking-[0.95px] leading-[42.5px]">
            We Organise Your Trip
          </p>
        </div>

        {/* Left airplane decoration */}
        <div className="absolute w-[146px] h-[75px] top-14 left-[7px] rotate-[-170.00deg]">
          <div className="relative w-[134px] h-[70px] top-[3px] left-[5px]">
            <div className="absolute w-32 h-[55px] top-0 left-1.5">
              <img
                className="absolute w-3.5 h-[7px] top-3 left-[51px] rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-2.svg"
              />
              <img
                className="absolute w-2.5 h-[5px] top-[41px] left-[69px] rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-2.svg"
              />
              <img
                className="absolute w-[33px] h-[18px] top-[35px] left-[55px] rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-6.svg"
              />
              <img
                className="absolute w-[127px] h-[18px] top-[21px] left-px rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-21.svg"
              />
              <img
                className="absolute w-[81px] h-[22px] top-[7px] left-[11px] rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-55.svg"
              />
              <img
                className="absolute w-[11px] h-[5px] top-[19px] left-28 rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-39.svg"
              />
              <img
                className="absolute w-[7px] h-2.5 top-4 left-[99px] rotate-[170.00deg]"
                alt="Vector"
                src="public/vector-25.svg"
              />
              <img
                className="absolute w-[70px] h-8 top-[15px] left-[30px] rotate-[170.00deg]"
                alt="Group"
                src="public/group-20.png"
              />
            </div>
            <img
              className="absolute w-[25px] h-[18px] top-[50px] left-1.5 rotate-[170.00deg]"
              alt="Vector"
              src="public/vector-8.svg"
            />
            <img
              className="absolute w-[23px] h-1.5 top-[42px] left-0 rotate-[170.00deg]"
              alt="Vector"
              src="public/vector-9.svg"
            />
          </div>
        </div>

        {/* Right airplane decoration */}
        <div className="absolute w-[146px] h-[75px] top-14 right-[7px] rotate-[-10.00deg]">
          <div className="relative w-[134px] h-[70px] top-[3px] left-[5px]">
            <div className="absolute w-32 h-[55px] top-[15px] left-1.5">
              <img
                className="absolute w-3.5 h-[7px] top-9 left-[51px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-4.svg"
              />
              <img
                className="absolute w-2.5 h-[5px] top-[9px] left-[69px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-4.svg"
              />
              <img
                className="absolute w-[33px] h-[18px] top-[3px] left-[55px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-7.svg"
              />
              <img
                className="absolute w-[127px] h-[18px] top-[17px] left-px rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-51.svg"
              />
              <img
                className="absolute w-[81px] h-[22px] top-[26px] left-[11px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-12.svg"
              />
              <img
                className="absolute w-[11px] h-[5px] top-[31px] left-28 rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-41.svg"
              />
              <img
                className="absolute w-[7px] h-2.5 top-[29px] left-[99px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-5.svg"
              />
              <img
                className="absolute w-[70px] h-8 top-2 left-[30px] rotate-[10.00deg]"
                alt="Group"
                src="public/group-19.png"
              />
            </div>
            <img
              className="absolute w-[25px] h-[18px] top-0.5 left-1.5 rotate-[10.00deg]"
              alt="Vector"
              src="public/vector-10.svg"
            />
            <img
              className="absolute w-[23px] h-1.5 top-[23px] left-0 rotate-[10.00deg]"
              alt="Vector"
              src="public/vector-30.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

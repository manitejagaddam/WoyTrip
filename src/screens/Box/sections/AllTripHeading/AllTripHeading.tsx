import React from "react";

export const AllTripHeading = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="relative w-full max-w-[1225px] mx-auto flex">
        <img src="public/images/left_Areoplane.png" alt="" />
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-['Lato',Helvetica] font-bold text-[#333333] text-[67.6px] tracking-[-0.68px] leading-[94.7px]">
            Our Destinations
          </h2>
          <p className="mt-2 opacity-80 font-['Lato',Helvetica] font-normal text-[#333333] text-[30.4px] tracking-[0.95px] leading-[42.5px]">
            We Organise Your Trip
          </p>
        </div>

        {/* Left airplane decoration */}
        <img src="public\images\right_areoplane.png" alt="" />
        
      </div>
    </section>
  );
};

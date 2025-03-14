// import React from "react";
// import { Button } from "../../../../components/ui/button";

// export const HeroSection = (): JSX.Element => {
//   return (
//     <section className="relative w-full min-h-[857px] bg-gradient-to-b from-[rgba(125.91,226.98,255,0.45)] to-transparent">
//       <div className="container mx-auto flex justify-between">
//         <div className="relative pt-[216px] max-w-[615px]">
//           <p className="font-bold text-[#00c7ff] text-[19.3px] font-['Poppins',Helvetica]">
//             BEST DESTINATIONS AROUND THE WORLD
//           </p>

//           <div className="relative mt-12">
//             <h1 className="font-bold text-x-1st text-[81.2px] tracking-[-3.25px] leading-[86px] font-['Volkhov',Helvetica]">
//               Travel, enjoy
//               <br />
//               and live a new
//               <br />
//               and full life
//             </h1>

//             {/* <div className="relative">
//               <img
//                 className="absolute w-[372px] h-3 top-[67px] right-[-235px]"
//                 alt="Decore"
//                 src="public/decore.png"
//               />
//               <img
//                 className="absolute w-[372px] h-3 top-[67px] right-[-235px]"
//                 alt="Decore"
//                 src="public/decore-1.png"
//               />
//             </div> */}
//           </div>

//           <p className="mt-[59px] font-medium text-[#5e6282] text-[15.5px] leading-[29px] max-w-[461px] font-['Poppins',Helvetica]">
//             Built Wicket longer admire do barton vanity itself do in it.
//             Preferred to sportsmen it engrossed listening. Park gate sell they
//             west hard for the.
//           </p>

//           <Button className="mt-[60px] w-[436px] h-[58px] bg-[#38d4ff] rounded-[9.66px] shadow-[0px_19.33px_33.82px_#f1a50126] hover:bg-[#38d4ff]/90">
//             <span className="font-medium text-[17.4px] text-white font-['Google_Sans-Medium',Helvetica]">
//               Find out more
//             </span>
//           </Button>
//         </div>
//         <div>
//           <img src="public\images\1.png" alt="main img" />
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#7DD2FF]/45 to-transparent">
      {/* Hero Content Wrapper */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20">
        
        {/* Left Content */}
        <div className="text-center lg:text-left pt-16 lg:pt-36 max-w-2xl">
          {/* Subheading */}
          <p className="font-bold text-[#00c7ff] text-lg lg:text-xl font-['Poppins',Helvetica] uppercase">
            Best Destinations Around the World
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica]">
            Travel, enjoy
            <br /> and live a new
            <br /> and full life
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Button */}
          <Button className="mt-6 md:mt-10 px-8 py-3 md:w-[436px] md:h-[58px] bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
            <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
              Find out more
            </span>
          </Button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-[300px] md:w-[400px] lg:w-[500px] object-cover"
            src="public/images/1.png"
            alt="Main travel illustration"
          />
        </div>
      </div>
    </section>
  );
};

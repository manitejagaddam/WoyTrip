// import { MapPinIcon } from "lucide-react";
// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Separator } from "../../../../components/ui/separator";

// export const DestinationCardsSection = (): JSX.Element => {
//   // Data for destination cards
//   const destinationCards = Array(8).fill({
//     title: "Kerala Tour",
//     location: "Munnar | Houseboat",
//     backgroundImage: "public/images/benTower.png",
//     features: [
//       { name: "Video", icon: "public/images/vedio_icon.png" },
//       { name: "Meals", icon: "public/images/game-icons-meal.svg" },
//       { name: "Stay", icon: "public/images/stay.png" },
//       { name: "Sightseeing", icon: "public/images/sighseeing.png" },
//     ],
//   });

//   return (
    
//     <section className="flex flex-wrap justify-center gap-8 py-12 w-full">
//       <section className="w-full py-8">
//       <div className="relative w-full max-w-[1225px] mx-auto flex">
//         {/* <img src="public/images/left_Areoplane.png" alt="" /> */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <h2 className="font-['Lato',Helvetica] font-bold text-[#333333] text-[67.6px] tracking-[-0.68px] leading-[94.7px]">
//             Our Destinations
//           </h2>
//           <p className="mt-2 opacity-80 font-['Lato',Helvetica] font-normal text-[#333333] text-[30.4px] tracking-[0.95px] leading-[42.5px]">
//             We Organise Your Trip
//           </p>
//         </div>

//         {/* Left airplane decoration */}
//         {/* <img src="public\images\right_areoplane.png" alt="" /> */}
        
//       </div>
//     </section>
//       {destinationCards.map((card, index) => (
//         <div key={index} className="w-full sm:w-[394px]">
//           <div className="relative overflow-hidden rounded-lg">
//             {/* Background image container */}
//             <div
//               className="relative w-full h-[580px] bg-cover bg-center"
//               style={{ backgroundImage: `url(${card.backgroundImage})` }}
//             >
//               {/* Card overlay at bottom */}
//               <Card className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[395px] rounded-2xl overflow-hidden bg-white  rounded-t-3xl rounded-b-none">
//                 <CardContent className="p-0">
//                   {/* Card header */}
//                   <div className="p-3 flex items-start">
//                     <div className="ml-[77px]">
//                       <h3 className="font-medium text-[22.8px] leading-[28.4px] text-black font-['Poppins',Helvetica]">
//                         {card.title}
//                       </h3>
//                       <div className="flex items-center mt-1">
//                         <div className="w-[25px] h-[27px] relative">
//                           <MapPinIcon className="w-[21px] h-[22px] absolute top-0.5 left-0.5 text-text-clr" />
//                         </div>
//                         <span className="ml-2 font-medium text-[20.3px] leading-[25.2px] text-text-clr font-['Poppins',Helvetica]">
//                           {card.location}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <Separator className="w-full" />

//                   {/* Features */}
//                   <div className="p-4 flex flex-col items-center">
//                     <div className="flex justify-center gap-[30px] mb-8">
//                       {card.features.map((feature, featureIndex) => (
//                         <div
//                           key={featureIndex}
//                           className="flex flex-col items-center w-[39px]"
//                         >
//                           <div className="relative w-[39.09px] h-[39.09px]">
//                             <img
//                               src={feature.icon}
//                               alt={feature.name}
//                               className={
//                                 featureIndex === 1
//                                   ? "w-full h-full"
//                                   : "absolute w-[80%] h-[80%] top-[10%] left-[10%]"
//                               }
//                             />
//                           </div>
//                           <span className="text-[9.3px] leading-[11.6px] font-medium text-black text-center font-['Poppins',Helvetica] mt-1">
//                             {feature.name}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Action buttons */}
//                     <div className="flex justify-center gap-7">
//                       <Button
//                         variant="outline"
//                         className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] border-[#008cff] text-[#008cff] font-medium text-[13.3px] font-['Poppins',Helvetica]"
//                       >
//                         Call Expert
//                       </Button>
//                       <Button className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] bg-[#008cff] text-white font-medium text-[13.3px] font-['Poppins',Helvetica]">
//                         Get Quote
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };




import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export const DestinationCardsSection = (): JSX.Element => {
  // Data for destination cards
  const destinationCards = Array(8).fill({
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    backgroundImage: "public/images/benTower.png",
    features: [
      { name: "Video", icon: "public/images/vedio_icon.png" },
      { name: "Meals", icon: "public/images/game-icons-meal.svg" },
      { name: "Stay", icon: "public/images/stay.png" },
      { name: "Sightseeing", icon: "public/images/sighseeing.png" },
    ],
  });

  return (
    <section className="py-12 w-full bg-gray-50">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-bold text-[#333333] text-[50px] sm:text-[67.6px] leading-tight">
          Our Destinations
        </h2>
        <p className="mt-2 opacity-80 text-[#333333] text-[24px] sm:text-[30.4px]">
          We Organize Your Trip
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
              className="flex flex-wrap justify-center gap-8 px-6 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
              }}
            >
              {destinationCards.map((card, index) => (
                <motion.div key={index} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                  <div className="relative rounded-lg shadow-lg items-center overflow-hidden w-[320px]">
                    {/* Background Image */}
                    <div
                      className="w-full h-[450px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.backgroundImage})` }}
                    >
                      {/* Card Overlay */}
                      <Card className="absolute bottom-0 w-full rounded-t-3xl bg-white shadow-lg">
                        <CardContent className="p-4">
                          {/* Card Title */}
                          <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                          <div className="flex items-center mt-1 text-gray-600">
                            <MapPinIcon className="w-5 h-5 text-blue-600" />
                            <span className="ml-2 text-lg">{card.location}</span>
                          </div>
      
                          <Separator className="my-4" />
      
                          {/* Features */}
                          <div className="flex justify-center gap-6">
                            {card.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex flex-col items-center">
                                <img src={feature.icon} alt={feature.name} className="w-10 h-10" />
                                <span className="text-xs font-medium mt-1">{feature.name}</span>
                              </div>
                            ))}
                          </div>
      
                          {/* Action Buttons */}
                          <div className="flex justify-between mt-6">
                            <Button variant="outline" className="w-full text-blue-600 border-blue-600">
                              Call Expert
                            </Button>
                            <Button className="w-full bg-blue-600 text-white ml-3">Get Quote</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
    </section>
  );
};

// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Separator } from "../../../../components/ui/separator";

// // Destination data for mapping
// const destinations = [
//   {
//     id: 1,
//     image: "public/rectangle-14-1.png",
//     title: "Kerala Tour",
//     location: "Munnar | Houseboat",
//     navigationIcon: "public/navigation-1.png",
//   },
//   {
//     id: 2,
//     image: "public/rectangle-14-1.png",
//     title: "Kerala Tour",
//     location: "Munnar | Houseboat",
//     navigationIcon: "public/navigation-2.png",
//   },
//   {
//     id: 3,
//     image: "public/rectangle-14-12.png",
//     title: "Kerala Tour",
//     location: "Munnar | Houseboat",
//     navigationIcon: "public/navigation-3.png",
//   },
//   {
//     id: 4,
//     image: "public/rectangle-14-12.png",
//     title: "Kerala Tour",
//     location: "Munnar | Houseboat",
//     navigationIcon: "public/navigation-4.png",
//   },
// ];

// // Feature icons data
// const featureIcons = [
//   { id: 1, name: "Video", iconIndex: 7 },
//   { id: 2, name: "Meals", icon: "public/game-icons-meal.svg" },
//   { id: 3, name: "Stay", iconIndex: 11 },
//   { id: 4, name: "Sightseeing", iconIndex: 15 },
// ];

// export const FooterSection = (): JSX.Element => {
//   return (
//     <section className="w-full py-8">
//       <div className="container mx-auto">
//         {/* Section Header */}
//         <div className="flex flex-col mb-8 relative">
//           <div className="flex items-center justify-between">
//             <h2 className="font-['Lato',Helvetica] font-bold text-[#333333] text-[49.7px] tracking-[-0.50px] leading-[69.6px]">
//               Popular Destinations
//             </h2>
//             <img
//               className="w-[136px] h-[69px]"
//               alt="Vector"
//               src="public/vector-101.svg"
//             />
//           </div>
//           <p className="opacity-80 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#333333] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]">
//             Vacations to make your experience enjoyable in Indonesia!
//           </p>
//         </div>

//         {/* Decorative Element */}
//         <div className="relative w-[102px] h-[52px] -mt-16 ml-auto rotate-[-10.00deg]">
//           <div className="relative w-[94px] h-[49px] top-0.5 left-1">
//             <div className="absolute w-[89px] h-[39px] top-2.5 left-[5px]">
//               <img
//                 className="absolute w-2.5 h-[5px] top-[25px] left-[35px] rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-4.svg"
//               />
//               <img
//                 className="absolute w-[7px] h-1 top-[7px] left-12 rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-4.svg"
//               />
//               <img
//                 className="absolute w-[23px] h-3 top-0.5 left-[38px] rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-54.svg"
//               />
//               <img
//                 className="absolute w-[88px] h-3 top-3 left-0 rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-51.svg"
//               />
//               <img
//                 className="absolute w-[57px] h-[15px] top-[18px] left-2 rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-12.svg"
//               />
//               <img
//                 className="absolute w-2 h-[3px] top-[22px] left-[78px] rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-63.svg"
//               />
//               <img
//                 className="absolute w-[5px] h-[7px] top-5 left-[69px] rotate-[10.00deg]"
//                 alt="Vector"
//                 src="public/vector-5.svg"
//               />
//               <img
//                 className="absolute w-[49px] h-5 top-[7px] left-[21px] rotate-[10.00deg]"
//                 alt="Group"
//                 src="public/group-6.png"
//               />
//             </div>
//             <img
//               className="absolute w-[18px] h-[13px] top-px left-1 rotate-[10.00deg]"
//               alt="Vector"
//               src="public/vector-29.svg"
//             />
//             <img
//               className="absolute w-4 h-1 top-4 left-0 rotate-[10.00deg]"
//               alt="Vector"
//               src="public/vector-49.svg"
//             />
//           </div>
//         </div>

//         {/* Destination Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {destinations.map((destination: any) => (
        
//         <div key={destination.id} className="relative flex flex-col items-center background" >
//           {/* Card Content */}
//           {/* <img
//             className="w-full h-[250px] mt-4 rounded-[15px] object-cover"
//             src={destination.image}
//             alt={destination.title}
//           /> */}
//           <Card className="w-[296px] h-[177px] rounded-[22.63px] overflow-hidden">
//             <CardContent className="p-0">
//               <div className="p-[9px] pl-[57px]">
//                 <div className="relative">
//                   <div className="font-['Poppins',Helvetica] font-medium text-[#000000] text-[17px] leading-[21.1px] ml-10">
//                     {destination.title}
//                   </div>
//                   <div className="flex items-center mt-[2px]">
//                     <img
//                       className="w-[15px] h-4"
//                       alt="Navigation"
//                       src={destination.navigationIcon}
//                     />
//                     <div className="ml-[6px] font-['Poppins',Helvetica] font-medium text-text-clr text-[15.1px] leading-[18.8px]">
//                       {destination.location}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <Separator className="w-full h-px my-0" />

//               <div className="p-3 flex flex-col items-center">
//                 <div className="flex justify-center space-x-6 mb-5">
//                   {featureIcons.map((icon: any) => (
//                     <div key={icon.id} className="flex flex-col items-center w-[29px]">
//                       <img
//                         className="w-[29.11px] h-[29.11px]"
//                         alt={icon.name}
//                         src={icon.icon}
//                       />
//                       <div className="text-[6.9px] leading-[8.6px] font-['Poppins',Helvetica] font-medium text-[#000000] text-center">
//                         {icon.name}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex space-x-4">
//                   <Button
//                     variant="outline"
//                     className="h-6 w-[85px] rounded-[7px] border-[1.5px] border-[#008cff] p-0"
//                   >
//                     <span className="font-['Poppins',Helvetica] font-medium text-[#008cff] text-[9.9px] text-center leading-[12.3px]">
//                       Call Expert
//                     </span>
//                   </Button>
//                   <Button className="h-6 w-[85px] rounded-[7px] bg-[#008cff] border-[1.5px] p-0">
//                     <span className="font-['Poppins',Helvetica] font-medium text-[#ffffff] text-[9.9px] text-center leading-[12.3px]">
//                       Get Quote
//                     </span>
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Image Below the Text */}
          
//         </div>
//       ))}
//     </div>
//       </div>
//     </section>
//   );
// };



import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { MapPinIcon } from "lucide-react";

// Destination data for mapping
const destinations = [
  {
    id: 1,
    image: "public/rectangle-14-1.png",
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    navigationIcon: "public/navigation-1.png",
    features: [
      { name: "Video", icon: "public/group-21.png" },
      { name: "Meals", icon: "public/game-icons-meal.svg" },
      { name: "Stay", icon: "public/group-22.png" },
      { name: "Sightseeing", icon: "public/group-23.png" },
    ],
  },
  {
    id: 2,
    image: "public/rectangle-14-1.png",
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    navigationIcon: "public/navigation-2.png",
    features: [
      { name: "Video", icon: "public/group-21.png" },
      { name: "Meals", icon: "public/game-icons-meal.svg" },
      { name: "Stay", icon: "public/group-22.png" },
      { name: "Sightseeing", icon: "public/group-23.png" },
    ],
  },
  {
    id: 3,
    image: "public/rectangle-14-12.png",
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    navigationIcon: "public/navigation-3.png",
    features: [
      { name: "Video", icon: "public/group-21.png" },
      { name: "Meals", icon: "public/game-icons-meal.svg" },
      { name: "Stay", icon: "public/group-22.png" },
      { name: "Sightseeing", icon: "public/group-23.png" },
    ],
  },
  // {
  //   id: 4,
  //   image: "public/rectangle-14-12.png",
  //   title: "Kerala Tour",
  //   location: "Munnar | Houseboat",
  //   navigationIcon: "public/navigation-4.png",
  //   features: [
  //     { name: "Video", icon: "public/group-21.png" },
  //     { name: "Meals", icon: "public/game-icons-meal.svg" },
  //     { name: "Stay", icon: "public/group-22.png" },
  //     { name: "Sightseeing", icon: "public/group-23.png" },
  //   ],
  // },
];

// Feature icons data
const featureIcons = [
  { id: 1, name: "Video", iconIndex: 7 },
  { id: 2, name: "Meals", icon: "public/game-icons-meal.svg" },
  { id: 3, name: "Stay", iconIndex: 11 },
  { id: 4, name: "Sightseeing", iconIndex: 15 },
];

export const PopularDestination = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-8 relative">
          <div className="flex items-center justify-between">
            <h2 className="font-['Lato',Helvetica] font-bold text-[#333333] text-[49.7px] tracking-[-0.50px] leading-[69.6px]">
              Popular Destinations
            </h2>
            <img
              className="w-[136px] h-[69px]"
              alt="Vector"
              src="public/vector-101.svg"
            />
          </div>
          <p className="opacity-80 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#333333] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]">
            Vacations to make your experience enjoyable in Indonesia!
          </p>
        </div>

        {/* Decorative Element */}
        {/* <div className="relative w-[102px] h-[52px] -mt-16 ml-auto rotate-[-10.00deg]">
          <div className="relative w-[94px] h-[49px] top-0.5 left-1">
            <div className="absolute w-[89px] h-[39px] top-2.5 left-[5px]">
              <img
                className="absolute w-2.5 h-[5px] top-[25px] left-[35px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-4.svg"
              />
              <img
                className="absolute w-[7px] h-1 top-[7px] left-12 rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-4.svg"
              />
              <img
                className="absolute w-[23px] h-3 top-0.5 left-[38px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-54.svg"
              />
              <img
                className="absolute w-[88px] h-3 top-3 left-0 rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-51.svg"
              />
              <img
                className="absolute w-[57px] h-[15px] top-[18px] left-2 rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-12.svg"
              />
              <img
                className="absolute w-2 h-[3px] top-[22px] left-[78px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-63.svg"
              />
              <img
                className="absolute w-[5px] h-[7px] top-5 left-[69px] rotate-[10.00deg]"
                alt="Vector"
                src="public/vector-5.svg"
              />
              <img
                className="absolute w-[49px] h-5 top-[7px] left-[21px] rotate-[10.00deg]"
                alt="Group"
                src="public/group-6.png"
              />
            </div>
            <img
              className="absolute w-[18px] h-[13px] top-px left-1 rotate-[10.00deg]"
              alt="Vector"
              src="public/vector-29.svg"
            />
            <img
              className="absolute w-4 h-1 top-4 left-0 rotate-[10.00deg]"
              alt="Vector"
              src="public/vector-49.svg"
            />
          </div>
        </div> */}

        {/* Destination Cards */}
        <div className="flex flex-wrap justify-center gap-8 py-12 w-full">
      {destinations.map((card, index) => (
        <div key={index} className="w-full sm:w-[394px]">
          <div className="relative overflow-hidden rounded-lg">
            {/* Background image container */}
            <div
              className="relative w-full h-[580px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Card overlay at bottom */}
              <Card className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[395px] rounded-2xl overflow-hidden bg-white  rounded-t-3xl rounded-b-none">
                <CardContent className="p-0">
                  {/* Card header */}
                  <div className="p-3 flex items-start">
                    <div className="ml-[77px]">
                      <h3 className="font-medium text-[22.8px] leading-[28.4px] text-black font-['Poppins',Helvetica]">
                        {card.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-[25px] h-[27px] relative">
                          <MapPinIcon className="w-[21px] h-[22px] absolute top-0.5 left-0.5 text-text-clr" />
                        </div>
                        <span className="ml-2 font-medium text-[20.3px] leading-[25.2px] text-text-clr font-['Poppins',Helvetica]">
                          {card.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator className="w-full" />

                  {/* Features */}
                  <div className="p-4 flex flex-col items-center">
                    <div className="flex justify-center gap-[30px] mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex flex-col items-center w-[39px]"
                        >
                          <div className="relative w-[39.09px] h-[39.09px]">
                            <img
                              src={feature.icon}
                              alt={feature.name}
                              className={
                                featureIndex === 1
                                  ? "w-full h-full"
                                  : "absolute w-[80%] h-[80%] top-[10%] left-[10%]"
                              }
                            />
                          </div>
                          <span className="text-[9.3px] leading-[11.6px] font-medium text-black text-center font-['Poppins',Helvetica] mt-1">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-center gap-7">
                      <Button
                        variant="outline"
                        className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] border-[#008cff] text-[#008cff] font-medium text-[13.3px] font-['Poppins',Helvetica]"
                      >
                        Call Expert
                      </Button>
                      <Button className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] bg-[#008cff] text-white font-medium text-[13.3px] font-['Poppins',Helvetica]">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

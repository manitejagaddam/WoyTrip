



// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const WhyChooseUs = (): JSX.Element => {
//   // Feature data for mapping
//   const features = [
//     {
//       id: 1,
//       title: "24/7 Doctor Support",
//       description: "Instant medical help for minor health issues.",
//       icon: "public/twemoji-hospital.svg",
//       isHighlighted: false,
//     },
//     {
//       id: 2,
//       title: "Trip Video",
//       description: "Capture memories with a short trip highlight video.",
//       isHighlighted: true,
//       icon: "public/group-48.png",
//     },
//     {
//       id: 3,
//       title: "Best Stay Options",
//       description: "Handpicked stays for easy exploration.",
//       isHighlighted: false,
//       icon: "public/group-50.png",
//     },
//     {
//       id: 4,
//       title: "Affordable Prices",
//       description: "Premium trips at budget-friendly rates.",
//       isHighlighted: false,
//       icon: "public/group-53.png",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[619px] py-4 ">
//       <div className="w-full flex justify-around gap-96 items-center">
        
          
//         <img src="public/images/why_choosen.png" alt="Why Choose Us" />
        

//         <div className="w-full">
//           <div className="mb-14 relative">
//             <h2 className="font-display-md-bold text-gray-900 tracking-wide leading-tight">
//               Why Choose Us
//             </h2>

//             <p className="mt-4 text-gray-900 text-lg max-w-[639px]">
//               Enjoy different experiences in every place you visit and discover
//               new and affordable adventures.
//             </p>
//           </div>

//           <div className="flex flex-col gap-6 w-full max-w-[586px]">
//             {features.map((feature) => (
//               <Card
//                 key={feature.id}
//                 className={`flex items-center gap-4 px-6 py-4 rounded-xl overflow-hidden border-none ${
//                   feature.isHighlighted ? "bg-white shadow-md h-28" : "bg-transparent h-20"
//                 }`}
//               >
//                 <CardContent className="p-0 flex items-center gap-4">
//                   <div className="w-16 h-16 flex items-center justify-center p-4 bg-white rounded-2xl">
//                     <img
//                       className="w-10 h-10"
//                       alt={feature.title}
//                       src={feature.icon}
//                     />
//                   </div>

//                   <div className="flex flex-col items-start gap-1">
//                     <h3 className="text-xl font-bold text-gray-900 w-[200px]">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 text-md w-fit">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUs = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "24/7 Doctor Support",
      description: "Instant medical help for minor health issues.",
      icon: "public/images/twemoji-hospital.svg",
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Trip Video",
      description: "Capture memories with a short trip highlight video.",
      isHighlighted: true,
      icon: "public/images/areoplane.png",
    },
    {
      id: 3,
      title: "Best Stay Options",
      description: "Handpicked stays for easy exploration.",
      isHighlighted: false,
      icon: "public/images/hotel.png",
    },
    {
      id: 4,
      title: "Affordable Prices",
      description: "Premium trips at budget-friendly rates.",
      isHighlighted: false,
      icon: "public/images/luggage.png",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="">
          <img src="public/images/why_choosen.png" alt="Why Choose Us" className="w-full" />
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-lg">
              Enjoy different experiences in every place you visit and discover
              new and affordable adventures.
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`flex items-center gap-6 p-4 rounded-xl transition-all duration-300 ${
                  feature.isHighlighted
                    ? "bg-white shadow-lg border border-gray-200"
                    : "bg-gray-100"
                }`}
              >
                <CardContent className="p-0 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md">
                    <img className="w-10 h-10" alt={feature.title} src={feature.icon} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-md">{feature.description}</p>
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

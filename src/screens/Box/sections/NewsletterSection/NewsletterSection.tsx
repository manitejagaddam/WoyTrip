// import { MailIcon } from "lucide-react";
// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Input } from "../../../../components/ui/input";

// export const NewsletterSection = (): JSX.Element => {
//   // Newsletter data
//   const newsletterData = {
//     title: "Travel your way, not theirs.",
//     subtitle: "Custom trips designed just for you.",
//     inputPlaceholder: "Your email",
//     buttonText: "Subscribe",
//   };

//   return (
//     <section className="w-full py-16 px-4 border-none ">
//       <Card className="w-full max-w-5xl mx-auto relative overflow-visible border-none">
//       <img src="public/images/choosen_us_areoplane.png" className="absolute -top-6 right-0" alt="" />
//         <CardContent className="p-0 border-none">
//           <div className="relative w-full border-none">
//             {/* Background shape with gradient */}
//             <div className="w-full h-[407px] bg-[#3ca7ff75] rounded-[20px_129px_20px_129px] rotate-180 opacity-20 absolute -z-10 border-none" />

//             {/* Content container */}
//             <div className="flex bg-transparent border-none  rounded-[20px_129px_20px_129px] w-full h-[407px] flex-col items-center justify-center py-16 px-4 relative z-10">
//               {/* Heading */}
//               <h2 className="font-['Poppins',Helvetica] font-semibold text-text-clr text-[33px] text-center tracking-[0] leading-[54px] mb-12">
//                 {newsletterData.title} <br />
//                 {newsletterData.subtitle}
//               </h2>

//               {/* Form */}
//               <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl rounded-[20px_129px_20px_129px] w-full h-[407px]">
//                 <div className="relative flex-grow">
//                   <Input
//                     className="h-[68px] pl-14 text-text-color font-['Montserrat',Helvetica] rounded-[10px]"
//                     placeholder={newsletterData.inputPlaceholder}
//                   />
//                   <div className="absolute left-5 top-1/2 -translate-y-1/2">
//                     <MailIcon className="w-5 h-5 text-[#39425d]" />
//                   </div>
//                 </div>

//                 <Button className="h-[68px] bg-[#008cff] hover:bg-[#0070cc] text-white font-['Open_Sans',Helvetica] text-[17px] rounded-[10px] min-w-[180px]">
//                   {newsletterData.buttonText}
//                 </Button>
//               </div>
//             </div>

//             {/* Decorative element */}
            
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   );
// };




import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { motion } from "framer-motion"; 
import areoplane from "../../../../assets/images/choosen_us_areoplane.png"

export const NewsletterSection = (): JSX.Element => {
  // Newsletter data
  const newsletterData = {
    title: "Travel your way, not theirs.",
    subtitle: "Custom trips designed just for you.",
    inputPlaceholder: "Your email",
    buttonText: "Subscribe",
  };

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-5xl mx-auto relative overflow-visible border-none shadow-lg">
        {/* Decorative Airplane Image */}
        <motion.img
          src={areoplane}
          className="absolute -top-6 right-0 w-16 sm:w-20 md:w-24"
          alt="Airplane"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        />

        <CardContent className="p-0 border-none">
          <div className="relative w-full border-none">
            {/* Background Shape */}
            <div className="w-full h-[400px] bg-[#3ca7ff75] rounded-[20px_129px_20px_129px] opacity-20 absolute -z-10" />

            {/* Content Container */}
            <div className="flex flex-col items-center justify-center py-12 px-6 relative z-10">
              {/* Heading */}
              <motion.h2
                className="font-semibold text-gray-800 text-[28px] sm:text-[33px] text-center leading-snug"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {newsletterData.title} <br />
                {newsletterData.subtitle}
              </motion.h2>

              {/* Form */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative flex-grow">
                  <Input
                    className="h-[60px] pl-14 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                    placeholder={newsletterData.inputPlaceholder}
                  />
                  <MailIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>

                <Button className="h-[60px] bg-blue-600 hover:bg-blue-700 text-white text-[16px] rounded-lg min-w-[160px] transition-all duration-300 ease-in-out">
                  {newsletterData.buttonText}
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

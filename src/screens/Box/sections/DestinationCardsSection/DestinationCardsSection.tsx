
import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { motion } from "framer-motion"; // Import Framer Motion for animations

import destinationImage from "public/images/benTower.png";



export const DestinationCardsSection = (): JSX.Element => {
  // Data for destination cards
  const destinationCards = Array(8).fill({
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    backgroundImage: {destinationImage},
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

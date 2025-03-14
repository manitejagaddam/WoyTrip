import React from "react";

import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PopularDestination } from "./sections/PopularDestination/PopularDestination";
import { WhyChooseUs } from "./sections/WhyChoosenUs";
import { AllTripHeading } from "./sections/AllTripHeading/AllTripHeading";
import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { Footer } from "./sections/Footer/Fotter";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="relative w-full">

        <Navbar />

        <div className="flex flex-row w-full">
          <HeroSection />

        </div>
        <PopularDestination />


        <div className="w-full relative">
          <div className="w-full flex justify-between">
            
            <WhyChooseUs />
          </div>
          
        </div>
        <div className="w-full relative">
          <AllTripHeading />
          <DestinationCardsSection />
        </div>
        <NewsletterSection />

        <Footer />
        {/* Main Content Section */}
      </div>
    </div>
  );
};

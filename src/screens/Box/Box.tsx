import React from "react";
import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";
import { FeaturedDestinationsSection, WhyChooseUs } from "./sections/WhyChoosenUs";
// import { FooterSection } from "./sections/PopularDestination";
import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ImageOverlaySection } from "./sections/ImageOverlaySection";
import { Footer, MainContentSection } from "./sections/Footer/Fotter";
import { NewsletterSection } from "./sections/NewsletterSection";
import { AllTripHeading, WhyChooseUsSection } from "./sections/AllTripHeading/AllTripHeading";
import { PopularDestination } from "./sections/PopularDestination/PopularDestination";

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

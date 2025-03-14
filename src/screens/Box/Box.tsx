import React from "react";
import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";
import { FeaturedDestinationsSection } from "./sections/FeaturedDestinationsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ImageOverlaySection } from "./sections/ImageOverlaySection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Header Section */}
        <HeaderSection />

        {/* Hero and Image Overlay Section */}
        <div className="flex flex-row w-full">
          <HeroSection />
          {/* <ImageOverlaySection /> */}
        </div>

        {/* Footer Section */}
        <FooterSection />

        {/* Featured Destinations Section with circular images */}

        {/* Why Choose Us Section */}

        {/* Destination Cards Section */}

        {/* Newsletter Section */}
        <div className="w-full relative">
          <WhyChooseUsSection />
          <img className="absolute" alt="Vector" src="public/vector-107.svg" />
          <img className="absolute" alt="Vector" src="public/vector-105.svg" />
        </div>
        <div className="w-full relative">
          <div className="w-full flex justify-between">
            
            <FeaturedDestinationsSection />
          </div>
          
        </div>
        <DestinationCardsSection />
        <NewsletterSection />

        <MainContentSection />
        {/* Main Content Section */}
      </div>
    </div>
  );
};

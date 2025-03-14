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
        <DestinationCardsSection />
        <NewsletterSection />
        <div className="w-full relative">
          <div className="flex">
            <div className="relative">
              {/* Circular image container */}
              <div className="relative">
                <div className="bg-primary-50 rounded-full shadow-[0px_20px_32px_#b7e9f6a3,0px_2px_8px_#b7e9f6]"></div>
                <img
                  className="absolute"
                  alt="Mask group"
                  src="public/mask-group-1.png"
                />
                <img
                  className="absolute"
                  alt="Mask group"
                  src="public/mask-group-2.png"
                />
                <img
                  className="absolute"
                  alt="Mask group"
                  src="public/mask-group-3.png"
                />
              </div>
            </div>
            <FeaturedDestinationsSection />
          </div>
          <img className="absolute" alt="Vector" src="public/vector-103.svg" />
          <img className="absolute" alt="Vector" src="public/vector-104.svg" />
          <img className="absolute" alt="Vector" src="public/vector-102.svg" />
        </div>

        <MainContentSection />
        {/* Main Content Section */}
      </div>
    </div>
  );
};

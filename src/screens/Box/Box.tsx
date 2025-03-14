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
      <Navbar />

      <HeroSection />

      <PopularDestination />

      <WhyChooseUs />

      <AllTripHeading />
      <DestinationCardsSection />

      <NewsletterSection />

      <Footer />
    </div>
  );
};

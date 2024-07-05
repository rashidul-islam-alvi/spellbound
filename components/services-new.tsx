import React from "react";
import MaxWidthWrapper from "./ui/max-width-screen";
import HeaderGaramond from "./ui/header-garamond";
import ServicesCarousel from "./services-carousel";

const Services = () => {
  return (
    <div className="bg-black relative">
      <MaxWidthWrapper className="flex flex-col gap-20 max-w-screen-2xl">
        <div className="mt-28 flex flex-col items-center gap-10">
          <HeaderGaramond
            label="YOU DESERVE TO LOOK YOUR BEST"
            className="text-7xl text-[#FFF2E7]"
          />
          <HeaderGaramond
            label="ITS MORE THAN A HAIRCUT"
            className="text-5xl text-[#FFCB9B]"
          />
        </div>

        <div className="mb-28">
          <ServicesCarousel />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Services;

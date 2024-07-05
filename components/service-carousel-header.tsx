import React from "react";
import HeaderSyncopate from "./ui/header-syncopate";
import ImageComponent from "./ui/custom-image-component";
import HeaderGaramond from "./ui/header-garamond";

const ServiceCarouselHeader = ({ header }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <HeaderSyncopate
          label={header.title}
          className="text-[64px] font-bold text-stroke"
        />
        <ImageComponent
          src="/arrow.webp"
          alt="service_carousel_arrow"
          className="w-[160px]"
        />
      </div>
      <div className="flex gap-5 items-end">
        <HeaderSyncopate
          label="starts from"
          className="italic text-lg uppercase"
        />
        <HeaderSyncopate
          label={header.price}
          className="italic text-4xl text-[#ffcb9b] uppercase"
        />
      </div>
    </div>
  );
};

export default ServiceCarouselHeader;

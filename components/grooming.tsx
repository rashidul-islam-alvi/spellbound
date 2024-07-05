import React from "react";
import MaxWidthWrapper from "./ui/max-width-screen";
import ImageComponent from "./ui/custom-image-component";
import Hero from "./hero";
import Navbar from "./navbar";
import { Cormorant_Garamond, Cormorant_Upright } from "next/font/google";
import { cn } from "@/lib/utils";
import HeaderGaramond from "./ui/header-garamond";
import HeaderUpright from "./ui/header-upright";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});
const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const Grooming = () => {
  return (
    <MaxWidthWrapper className="max-w-[1920px] bg-black md:px-0  h-screen overflow-hidden relative">
      {/* <div className="h-full">
        <ImageComponent
          src="/file.png"
          alt="grooming_hero_image"
          className=" w-[900px] h-[900px]"
        />bg-[url('/hero_5.jpg')]
      </div> */}
      <div className="h-screen  px-14 py-10 relative flex justify-between">
        <div className="absolute w-1/2 top-0 h-full right-0">
          <ImageComponent
            src="/time_1.jpg"
            alt="grooming_hero_image"
            className=" w-full h-full"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 z-20" />
        <div className="w-full relative z-40">
          <Navbar />
        </div>

        <div className="absolute bottom-10 z-40 left-[35%]">
          <HeaderGaramond
            label="Grooming"
            className="text-9xl text-white uppercase font-light"
          />
          <div className="flex gap-10">
            <HeaderUpright
              label="for"
              className="text-9xl normal-case text-[#FFCC99]"
            />
            <HeaderGaramond
              label="Men"
              className="text-9xl text-white uppercase font-light"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Grooming;

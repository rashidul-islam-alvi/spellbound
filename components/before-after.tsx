import React from "react";
import ImageComponent from "./ui/custom-image-component";
import { Syncopate } from "next/font/google";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./ui/max-width-screen";

const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const BeforeAfter = () => {
  return (
    <div className="flex text-white bg-black relative w-full pt-20">
      <MaxWidthWrapper className="max-w-[1920px] flex">
        <div className="w-1/2 flex relative justify-end items-end">
          <div className="absolute z-10 top-10 left-14">
            <h2 className={cn("text-8xl text-orange-300", syncopate.className)}>
              Before
            </h2>
          </div>
          <ImageComponent
            src="/before_1.jpg"
            alt="before_image_1"
            className="w-3/4 h-[90vh]"
          />
        </div>
        <div className="w-1/2 flex relative  items-end">
          <div className="absolute z-10 top-10 right-14">
            <h2 className={cn("text-8xl text-orange-300", syncopate.className)}>
              After
            </h2>
          </div>
          <ImageComponent
            src="/after_1.jpg"
            alt="after_image_1"
            className="w-3/4 h-[90vh]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BeforeAfter;

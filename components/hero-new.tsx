import React from "react";
import MaxWidthWrapper from "./ui/max-width-screen";
import ImageComponent from "./ui/custom-image-component";
import HeaderMegrim from "./ui/header-megrim";
import HeaderArapey from "./ui/header-arapey";

const Hero = () => {
  return (
    <MaxWidthWrapper className="max-w-[1920px]  h-screen overflow-hidden sticky top-0">
      <div className="h-full flex flex-col justify-between relative">
        <div className="flex w-full h-1/5 lg:h-fit justify-center lg:justify-start items-center gap-5">
          <div>
            <ImageComponent
              src="/logo.png"
              alt="hero_nav_logo"
              className="size-[110px] md:size-[150px] xl:size-[180px]"
            />
          </div>
          <div>
            <HeaderMegrim
              label="let your hair do the talking"
              className="uppercase  w-[230px] md:w-[270px] lg:w-[380px] xl:w-[435px]"
            />
          </div>
        </div>

        <div className="block h-4/5  lg:h-fit lg:hidden">
          <ImageComponent
            src="/hero_main.jpg"
            alt="hero_main_image"
            className="h-full w-full border-2"
          />
        </div>

        <div className="relative h-1/5  lg:h-fit flex justify-center items-center lg:-bottom-[85px] xl:-bottom-[100px] 2xl:-bottom-[135px] z-10">
          <HeaderArapey
            label="sharp looks"
            className="uppercase text-[50px] xs:text-[68px] md:text-[110px] lg:text-[190px] xl:text-[220px] 2xl:text-[300px] "
          />
        </div>
        <div className="lg:block hidden absolute 2xl:right-[150px] right-10 xl:right-[50px] z-0">
          <ImageComponent
            src="/hero_main.jpg"
            alt="hero_main_image"
            className="2xl:h-[850px] h-[800px] w-[500px] 2xl:w-[600px]"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;

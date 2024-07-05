import { cn } from "@/lib/utils";
import {
  Cormorant_Garamond,
  Cormorant_Upright,
  Syncopate,
} from "next/font/google";
import React from "react";
import ImageComponent from "./ui/custom-image-component";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const Time = () => {
  return (
    <div className="h-screen px-14 flex">
      <div className="w-1/2 relative   h-full flex items-center">
        <div className="absolute right-0 z-10">
          <ImageComponent
            src="/time_1.jpg"
            alt="time_hero_image_1"
            className="w-[400px] h-[70vh] "
          />
        </div>
        <h2
          className={cn(
            "text-9xl text-[#fff2e7] uppercase font-light relative z-20 text-center",
            cormorant_garamond.className
          )}
        >
          A team
          <br />
          <span
            className={cn(
              "normal-case text-[#FFCC99] mr-10",
              cormorant_upright.className
            )}
          >
            of
          </span>
          experts
        </h2>
      </div>

      <div className="w-1/2 h-full  flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <h2
              className={cn(
                "text-6xl text-[#fff2e7] font-light relative z-20 text-center",
                cormorant_garamond.className
              )}
            >
              Openning Time
            </h2>
            <p
              className={cn(
                "text-3xl text-[#FFCC99] mt-5 font-light relative z-20 text-center",
                cormorant_upright.className
              )}
            >
              Let your hair do the talking
            </p>
          </div>

          <div className="text-white border-[1px] w-3/4 flex mt-10 flex-col gap-5 p-5 border-[#FFCC99]">
            <div className="flex items-center justify-between">
              <h2 className={cn("text-xl uppercase", syncopate.className)}>
                Monday - Saturday
              </h2>

              <p className={cn("text-xl", syncopate.className)}>
                9AM - 2PM | 5PM - 11PM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className={cn("text-xl uppercase", syncopate.className)}>
                Sunday
              </h2>

              <p className={cn("text-xl", syncopate.className)}>
                9AM - 2PM |{" "}
                <span className="uppercase text-orange-300">closed</span>
              </p>
            </div>
            <div>
              <p
                className={cn(
                  "text-xl text-center uppercase",
                  syncopate.className
                )}
              >
                478 No. House Fakir Bari Goli, Manikdi Bazar Dhaka Cantonment
                Dhaka - 1206
              </p>
            </div>

            <div>
              <p className={cn("text-xl uppercase", syncopate.className)}>
                call for serial :
                <span className="text-orange-300 m-5 ">01760709684</span>
                Before 10PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;

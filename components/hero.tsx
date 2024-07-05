import React from "react";
import { Cormorant_Garamond, Cormorant_Upright } from "next/font/google";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});
const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const Hero = () => {
  return (
    <div className="h-screen  px-14 py-10 relative flex justify-between bg-[url('/hero_5.jpg')] bg-no-repeat bg-cover">
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 z-20" />

      <div className="w-full relative z-40">
        <Navbar />
      </div>

      <div className="absolute bottom-10 z-40 left-[50%]">
        <h2
          className={cn(
            "text-9xl text-white uppercase font-light",
            cormorant_garamond.className
          )}
        >
          Grooming <br />
          <span
            className={cn(
              "normal-case text-[#FFCC99]",
              cormorant_upright.className
            )}
          >
            for
          </span>{" "}
          men
        </h2>
      </div>
    </div>
  );
};

export default Hero;

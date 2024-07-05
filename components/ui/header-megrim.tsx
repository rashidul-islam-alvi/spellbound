import { cn } from "@/lib/utils";
import { Megrim } from "next/font/google";
import React from "react";

interface HeaderMegrimProps {
  label: string;
  className?: string;
}

const megrim = Megrim({
  subsets: ["latin"],
  weight: ["400"],
});

const HeaderMegrim = ({ label, className }: HeaderMegrimProps) => {
  return (
    <h2
      className={cn(
        "text-3xl lg:text-5xl xl:text-6xl",
        className,
        megrim.className
      )}
    >
      {label}
    </h2>
  );
};

export default HeaderMegrim;

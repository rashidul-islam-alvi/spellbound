import { cn } from "@/lib/utils";
import { Cormorant_Upright } from "next/font/google";
import React from "react";

interface HeaderUprightProps {
  label: string;
  className?: string;
}

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const HeaderUpright = ({ label, className }: HeaderUprightProps) => {
  return (
    <h2 className={cn("text-6xl", className, cormorant_upright.className)}>
      {label}
    </h2>
  );
};

export default HeaderUpright;

import { cn } from "@/lib/utils";
import { Cormorant_Garamond } from "next/font/google";
import React from "react";

interface HeaderGaramondProps {
  label: string;
  className?: string;
}

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});

const HeaderGaramond = ({ label, className }: HeaderGaramondProps) => {
  return (
    <h2 className={cn("text-6xl", className, cormorant_garamond.className)}>
      {label}
    </h2>
  );
};

export default HeaderGaramond;

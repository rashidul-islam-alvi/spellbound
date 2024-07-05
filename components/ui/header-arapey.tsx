import { cn } from "@/lib/utils";
import { Arapey } from "next/font/google";
import React from "react";

interface HeaderArapeyProps {
  label: string;
  className?: string;
}

const arapey = Arapey({
  subsets: ["latin"],
  weight: ["400"],
});

const HeaderArapey = ({ label, className }: HeaderArapeyProps) => {
  return (
    <h2 className={cn("text-6xl", className, arapey.className)}>{label}</h2>
  );
};

export default HeaderArapey;

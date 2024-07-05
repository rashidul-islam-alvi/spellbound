import { cn } from "@/lib/utils";
import { Syncopate } from "next/font/google";
import React from "react";

interface HeaderSyncopateProps {
  label: string;
  className?: string;
}

const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const HeaderSyncopate = ({ label, className }: HeaderSyncopateProps) => {
  return (
    <h2 className={cn("text-6xl", className, syncopate.className)}>{label}</h2>
  );
};

export default HeaderSyncopate;

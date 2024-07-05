import { cn } from "@/lib/utils";
import { Syncopate } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import HeaderGaramond from "./ui/header-garamond";
import HeaderSyncopate from "./ui/header-syncopate";
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const menuList = [
  {
    id: 2,
    label: "Services",
    href: "/services",
    subMenu: [
      "Haircut",
      "Beard Trim",
      "Beard Sculpting",
      "Haircut & Beard Trim",
      "Permanent Color",
      "Cameo Treatment Grey Toner",
      "Manicure",
    ],
  },
  { id: 3, label: "Gallery", href: "/gallery" },
  { id: 4, label: "Menu", href: "/menu" },
  { id: 5, label: "Location", href: "/location" },
  { id: 6, label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const menus = menuList.map((menu) => (
    <Link href="/" key={menu.id}>
      <li className="text-2xl font-bold text-[#fff2e7] uppercase">
        {menu.label}
      </li>
      <div className={`${menu.subMenu ? "my-5" : ""}`}>
        <ul className="flex flex-col gap-2">
          {menu.subMenu?.map((subMenu) => (
            <HeaderGaramond
              label={subMenu}
              key={subMenu}
              className="text-xl tracking-wider uppercase font-semibold text-[#FFCC99]"
            />
          ))}
        </ul>
      </div>
    </Link>
  ));

  return (
    <div className="flex  flex-col justify-between h-full">
      <div className="flex justify-between">
        <div>
          <Button variant={"ghost"} className="flex flex-col gap-2">
            <HeaderSyncopate
              label="Schedule"
              className="text-xl font-semibold text-[#FFCC99] uppercase font-serif"
            />
            <HeaderSyncopate
              label="an appointment"
              className="text-xl font-semibold text-[#FFCC99] uppercase font-serif"
            />
          </Button>
        </div>
      </div>

      <div>
        <ul className={cn("flex gap-5 flex-col", syncopate.className)}>
          {menus}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

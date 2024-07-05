import { cn } from "@/lib/utils";
import { Syncopate } from "next/font/google";
import React from "react";
import ImageComponent from "./ui/custom-image-component";
import { Button } from "./ui/button";

const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const servicesData = [
  { id: 0, name: "", price: "Starts From" },
  { id: 1, name: "Haircut", price: "150tk" },
  { id: 2, name: "Beard Cut", price: "30tk" },
  { id: 3, name: "Shave", price: "50tk" },
  { id: 4, name: "Facial", price: "100tk" },
  { id: 5, name: "Hair Color", price: "200tk" },
  { id: 6, name: "Manicure", price: "60tk" },
];

const Services = () => {
  const services = servicesData.map((service) => (
    <div className="flex justify-between  items-center" key={service.id}>
      <div className="w-1/5">
        <h2 className={cn("text-3xl text-orange-300", syncopate.className)}>
          {service.name}
        </h2>
      </div>
      {service.id === 0 ? (
        ""
      ) : (
        <div className="border-[1px] border-dotted border-orange-300 w-3/5 h-[1px]" />
      )}
      <div className="w-1/5 flex  justify-end">
        <h2 className={cn("text-3xl text-orange-300", syncopate.className)}>
          {service.price}
        </h2>
      </div>
    </div>
  ));

  return (
    <div
      className={cn(
        "flex h-screen flex-col justify-center items-center px-14  pt-10",
        syncopate.className
      )}
    >
      <div>
        <h2 className={cn("text-6xl", syncopate.className)}>Services</h2>
      </div>

      <div className="w-[80%]  flex flex-col gap-10 my-10">{services}</div>

      <div className="flex gap-5">
        <Button variant={"outline"} className="text-3xl">
          Full Menu
        </Button>
        <Button className="text-3xl">Call for book</Button>
      </div>
    </div>
  );
};

export default Services;

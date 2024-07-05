import React from "react";
import ServiceCarouselHeader from "./service-carousel-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import ImageComponent from "./ui/custom-image-component";

const haircutImages = [
  {
    id: 1,
    imageSrc: "/H1.jpg",
    imageAlt: "carousel_image_1",
  },
  {
    id: 2,
    imageSrc: "/H2.jpg",
    imageAlt: "carousel_image_2",
  },
  {
    id: 3,
    imageSrc: "/H3.jpg",
    imageAlt: "carousel_image_3",
  },
  {
    id: 4,
    imageSrc: "/H4.jpeg",
    imageAlt: "carousel_image_4",
  },
  {
    id: 5,
    imageSrc: "/H5.jpg",
    imageAlt: "carousel_image_5",
  },
  {
    id: 6,
    imageSrc: "/H6.jpg",
    imageAlt: "carousel_image_6",
  },
];

const SerivcesCarouselItem = ({ images }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 ">
              <ImageComponent
                src={image.imageSrc}
                alt={image.imageAlt}
                className="w-full h-[600px] rounded-md overflow-hidden"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SerivcesCarouselItem;

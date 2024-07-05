import React from "react";
import SerivcesCarouselItem from "./serivces-carousel-item";
import ServiceCarouselHeader from "./service-carousel-header";

const servicesCarouselData = [
  {
    header: { id: 1, title: "haircut", price: "150tk" },
    images: [
      {
        id: "H1",
        imageSrc: "/H1.jpg",
        imageAlt: "image_carousel_haircut_1",
      },

      {
        id: "H2",
        imageSrc: "/H2.jpg",
        imageAlt: "image_carousel_haircut_2",
      },
      {
        id: "H3",
        imageSrc: "/H3.jpg",
        imageAlt: "image_carousel_haircut_3",
      },
      {
        id: "H4",
        imageSrc: "/H4.jpeg",
        imageAlt: "image_carousel_haircut_4",
      },
      {
        id: "H5",
        imageSrc: "/H5.jpg",
        imageAlt: "image_carousel_haircut_5",
      },
      {
        id: "H6",
        imageSrc: "/H6.jpg",
        imageAlt: "image_carousel_haircut_6",
      },
    ],
  },

  {
    header: { id: 2, title: "beard", price: "80tk" },
    images: [
      {
        id: "B1",
        imageSrc: "/B4.jpg",
        imageAlt: "image_carousel_haircut_1",
      },
      {
        id: "B2",
        imageSrc: "/B2.png",
        imageAlt: "image_carousel_haircut_1",
      },
      {
        id: "B3",
        imageSrc: "/B3.jpg",
        imageAlt: "image_carousel_haircut_2",
      },
      {
        id: "B4",
        imageSrc: "/B1.jpg",
        imageAlt: "image_carousel_haircut_3",
      },
    ],
  },

  {
    header: { id: 3, title: "facial", price: "350tk" },
    images: [
      {
        id: "F1",
        imageSrc: "/F1.jpg",
        imageAlt: "image_carousel_haircut_1",
      },
      {
        id: "F2",
        imageSrc: "/F2.jpg",
        imageAlt: "image_carousel_haircut_1",
      },
      {
        id: "F3",
        imageSrc: "/F3.jpg",
        imageAlt: "image_carousel_haircut_2",
      },
    ],
  },
];

const ServicesCarousel = () => {
  return (
    <div className="flex flex-col gap-20">
      {servicesCarouselData.map((service) => (
        <div className="flex flex-col gap-10">
          <ServiceCarouselHeader header={service.header} />
          <SerivcesCarouselItem images={service.images} />
        </div>
      ))}
    </div>
  );
};

export default ServicesCarousel;

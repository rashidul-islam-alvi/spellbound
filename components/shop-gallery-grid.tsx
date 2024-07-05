import React from "react";
import MaxWidthWrapper from "./ui/max-width-screen";
import ImageComponent from "./ui/custom-image-component";

// bg-[url('/grid/G1.jpg')] bg-no-repeat bg-contain

const GalleryGrid = () => {
  return (
    <div className="bg-black flex justify-center items-center relative ">
      <MaxWidthWrapper className="w-full max-w-screen-2xl">
        <div className="parent ">
          <div className="div1">
            <ImageComponent
              src="/grid/G2.jpg"
              alt="1"
              className="w-full h-full"
            />
          </div>
          <div className="div2">
            <ImageComponent
              src="/grid/G4.jpg"
              alt="1"
              className="w-full h-full"
            />
          </div>
          <div className="div3">
            <ImageComponent
              src="/grid/G6.jpg"
              alt="1"
              className="w-full h-full"
            />
          </div>
          <div className="div4">
            <ImageComponent
              src="/grid/G12.jpg"
              alt="1"
              className="w-full h-full"
            />
          </div>
          <div className="div5">
            <ImageComponent
              src="/grid/G10.jpg"
              alt="1"
              className="w-full h-full"
            />
          </div>
          <div className="div6">
            {" "}
            <ImageComponent
              src="/grid/G1.jpg"
              alt="1"
              className="w-full h-full "
            />
          </div>
          <div className="div7">
            <ImageComponent
              src="/grid/G7.jpg"
              alt="1"
              className="w-full h-full"
            />{" "}
          </div>
          <div className="div8">
            <ImageComponent
              src="/grid/bg_grid.jpg"
              alt="1"
              className="w-full h-full"
            />{" "}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default GalleryGrid;

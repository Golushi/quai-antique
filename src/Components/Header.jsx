import React from "react";
import "tw-elements";
import img1 from "../Assets/Gallery/gallery-img-1.jpg";
import img2 from "../Assets/Gallery/gallery-img-2.jpg";
import img3 from "../Assets/Gallery/gallery-img-3.jpg";
import name from "../Assets/Name/Name.png";

export default function Header() {
  return (
    <header>
      <div
        id="carouselExampleSlidesOnly"
        className="w-full h-screen"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative top-0 w-full h-screen overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative top-0 float-left -mr-[100%] w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src={img1}
              className="block top-0 object-cover w-full h-screen"
              alt="raclette"
            />
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
          </div>
          <div
            className="relative top-0 float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={img2}
              className="block top-0 object-cover w-full h-screen"
              alt="table"
            />
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
          </div>
          <div
            className="relative top-0 float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={img3}
              className="block top-0 object-cover w-full h-screen"
              alt="service à raclette"
            />
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
          </div>
        </div>
        <div className="absolute top-1/3 flex flex-col">
          <img src={name} className="z-8" alt="Name" />
        </div>
      </div>
    </header>
  );
}

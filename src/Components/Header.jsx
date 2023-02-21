import React from "react";
import "tw-elements";
//import name from '../Assets/Name/Name.png'

export default function Header() {
  return (
    <div
  id="carouselExampleSlidesOnly"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="block w-full"
        alt="Wild Landscape" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="block w-full"
        alt="Camera" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="block w-full"
        alt="Exotic Fruits" />
    </div>
  </div>
</div>
  
    
    
    
    
    //<div>
    //   <img src={name} className="z-10" alt="Name" />
    //</div>
  )
}

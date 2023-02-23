import React from "react";
import "../App.css";
import "tw-elements";
import g2img1 from "../Assets/Gallery2/gallery2-img-1.jpg";
import g2img2 from "../Assets/Gallery2/gallery2-img-2.jpg";
import g2img3 from "../Assets/Gallery2/gallery2-img-3.jpg";
import g2img4 from "../Assets/Gallery2/gallery2-img-4.jpg";
import g2img5 from "../Assets/Gallery2/gallery2-img-5.jpg";


export default function About() {
  return (
    <section id="about" className="p-5 m-5 ">
      <div className="p-5">
        <h1 className="p-2 m-2 font-bold text-4xl drop-shadow-2xl flex justify-center text-center">
          Bienvenue dans notre restaurant
        </h1>
        <p className="p-5 m-5 italic text-myyellow flex justify-center text-center">
          Spécialités Savoyardes, fondues, raclettes, tartiflettes, pierrades...
        </p>
      </div>
      <div className="max-w-[1200px] m-5 justify-items-center justify-center overflow-hidden m-auto grid lg:grid-cols-2 gap-4">
        <div className="flex lg:p-5 text-lg max-w-lg flex-col h-full text-center">
          <p className="p-5 text-align-justify">
            Dans un cadre chaleureux en plein coeur de Chambéry, ce coquet
            restaurant attire tous les amoureux d'une authentique gastronomie
            savoyarde élaborée avec de vrais produits du terroir.
          </p>
          <p className="p-5 m-2 text-align-justify">
            Vous y dégusterez les spécialités incontournables, copieuses et
            raffinées ainsi que nos créations maisons.
          </p>
          <p className="p-5 text-align-justify">
            Laissez vous surprendre par notre accueil et une convivialité digne
            de la tradition de nos montagnes.
          </p>
        </div>
        <div
          id="carouselExampleCrossfade"
          className="relative z-5 overflow-hidden md:w-[500px] sm:w-[400px] w-[300px]"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div
            className="absolute justify-center inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide-to="3"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCrossfade"
              data-te-slide-to="4"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="relative md:w-[500px] sm:w-[400px] w-[300px] overflow-hidden after:clear-both after:block after:content-['']">
            <div
              className="relative float-left -mr-[100%] md:w-[500px] sm:w-[400px] w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active
            >
              <img
                src={g2img1}
                className="block md:w-[500px] sm:w-[400px] w-[300px]"
                alt="interieur restaurant"
              />
            </div>
            <div
              className="relative float-left -mr-[100%] hidden md:w-[500px] sm:w-[400px] w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <img
                src={g2img2}
                className="block md:w-[500px] sm:w-[400px] w-[300px]"
                alt="preparation raclette"
              />
            </div>
            <div
              className="relative float-left -mr-[100%] hidden md:w-[500px] sm:w-[400px] w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <img
                src={g2img3}
                className="block md:w-[500px] sm:w-[400px] w-[300px]"
                alt="fromages"
              />
            </div>
            <div
              className="relative float-left -mr-[100%] hidden md:w-[500px] sm:w-[400px] w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <img
                src={g2img4}
                className="block md:w-[500px] sm:w-[400px] w-[300px]"
                alt="raclette"
              />
            </div>
            <div
              className="relative float-left -mr-[100%] hidden md:w-[500px] sm:w-[400px] w-[300px] !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <img
                src={g2img5}
                className="block md:w-[500px] sm:w-[400px] w-[300px]"
                alt="fromage coulant"
              />
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-myyellow hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCrossfade"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-myyellow hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCrossfade"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

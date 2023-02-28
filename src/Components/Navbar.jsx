import React from "react";
import "../App.css";
import "tw-elements";
import { useState } from "react";
import useReadingProgress from "../hooks/useReadingProgress";
import logo from "../Assets/Logo/blason_savoie.png";
import { Spin as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Modal from "./modal";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setNavbar(!navbar);
  const completion = useReadingProgress();
  

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 900) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <nav
      id={color ? "nav-bg" : "nav"}
      className="w-full opacity-90 p-2 z-30 shadow-xl fixed top-0"
    >
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href={"#App"}>
              <img src={logo} className="h-12 mr-3 sm:h-14" alt="Logo" />
            </a>
            <div className="md:hidden">
              <button
                id={color ? "button-bg" : "button"}
                className="animate-pulse"
                onClick={() => setNavbar(!navbar)}
              >
                <Hamburger
                  toggled={navbar}
                  toggle={setNavbar}
                  direction="right"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              id={color ? "text-burger-bg" : "text-burger"}
              className="items-center font-lf justify-center space-y-8 md:flex md:space-x-8 md:space-y-0"
            >
              <li
                className="hover:text-myyellow hover:underline"
                onClick={toggle}
              >
                <a href="#about">A propos</a>
              </li>
              <li
                className="hover:text-myyellow hover:underline"
                onClick={toggle}
              >
                <NavLink
                  to="/Carte"
                  target={"_blank"}
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Carte
                </NavLink>
              </li>
              <li
                className="hover:text-myyellow hover:underline"
                onClick={toggle}
              >
                <a href="#Menus">Menus</a>
              </li>
              <li
                className=" hover:text-myyellow hover:underline"
                onClick={toggle}
              >
                <a href="#horaires">Horaires</a>
              </li>
              <li
                className="hover:text-myyellow hover:underline"
                onClick={toggle}
              >
                <a href="#contact">Nous trouver</a>
              </li>
              <li className="hover:text-myyellow hover:underline">
                <Modal />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-myblue h-1 w-full bottom-0 m-auto"
      />
    </nav>
  );
}

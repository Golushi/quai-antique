import React from "react";
import "../App.css";
import 'tw-elements';
import { useState } from "react"; 
import logo from "../Assets/Logo/blason_savoie.png";
import { Spin as Hamburger } from 'hamburger-react'


export default function Navbar() {
      const [navbar, setNavbar] = useState(false);

      return (
          <nav className="w-full bg-black opacity-75 p-2 z-10 shadow-xl sticky top-0"
           >
              <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
                  <div>
                      <div className="flex items-center justify-between py-3 md:py-5 md:block">
                          <a href={"/"}>
                          <img src={logo} className="h-12 mr-3 sm:h-14" alt="Logo" />
                          </a>
                          <div className="md:hidden">
                              <button
                                  className="p-2 text-white animate-pulse"
                                  onClick={() => setNavbar(!navbar)}
                              >
                                  <Hamburger direction="right" />
                              </button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div
                          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                              navbar ? "block" : "hidden"
                          }`}
                      >
                          <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="/">Accueil</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="about">A propos</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="Carte">Carte</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="menus">Menus</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="horaires">Horaires</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="contact">Nous trouver</a>
                              </li>
                              <li className="text-mywhite hover:text-myyellow">
                                  <a href="login">Se connecter</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
    )
}

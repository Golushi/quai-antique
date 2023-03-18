import React, { useCallback, useContext, useEffect, useState } from "react";
import "../App.css";
import "tw-elements";
import { Spin as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import UserProfil from "./UserProfil";
import AuthContext from "../store/authContext";
import { onRefresh } from "./UI/utils";
import logo from "../Assets/Logo/blason_savoie.png";
import useReadingProgress from "../hooks/useReadingProgress";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setNavbar(!navbar);
  const completion = useReadingProgress();

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [data, setData] = useState([]);

  // Requete acces ressources proteger
  const url = `http://localhost:4000/api/fiche_user/fiche/?userId=${authCtx.userId}`;

  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token} `,
        },
      });

      const dataResponse = await response.json();

      if (response.ok) {
        // Reformatage donnée
        const transformedData = () => {
          return {
            arachide: dataResponse.results[0].fiche_user_arachide,
            autre: dataResponse.results[0].fiche_user_autre,
            couverts: dataResponse.results[0].fiche_user_couverts,
            fruitsCoques: dataResponse.results[0].fiche_user_fruitsCoques,
            lait: dataResponse.results[0].fiche_user_lait,
            nom: dataResponse.results[0].fiche_user_nom,
            oeuf: dataResponse.results[0].fiche_user_oeuf,
            userId: dataResponse.results[0].fiche_user_userId,
            idFiche: dataResponse.results[0].id_fiche_user,
          };
        };

        setData(transformedData);
      } else {
        throw new Error(dataResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  }, [authCtx.token, url]);
  // Pour executer la fonction au montage du composant
  useEffect(() => {
    if (isLoggedIn) {
      fetchHandler();
    }
  }, [fetchHandler, isLoggedIn]);

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

  const refreshData = async () => {
    await fetchHandler();
    onRefresh();
  };

  return (
    <nav
      id={color ? "nav-bg" : "nav"}
      className="w-full opacity-90 p-2 z-30 shadow-xl fixed top-0"
    >
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href={"#App"}>
              <img
                src={logo}
                className="h-12 mr-3 sm:h-14 transform duration-500 hover:scale-125"
                alt="Logo"
              />
            </a>
            <div className="md:hidden flex items-center">
              {isLoggedIn && (
                <button
                  onClick={authCtx.logout}
                  id={color ? "logoutWhite" : "logout"}
                  className="inline-block animate-pulse mx-2"
                  alt="Logout"
                ></button>
              )}
              <button
                id={color ? "button-bg" : "button"}
                className="animate-pulse inline-block mx-2"
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
                className="hover:text-myyellow flex justify-center transform duration-500 hover:scale-125 hover:underline"
                onClick={toggle}
              >
                <a href="#about">A propos</a>
              </li>
              <li
                className="hover:text-myyellow flex justify-center transform duration-500 hover:scale-125 hover:underline"
                onClick={toggle}
              >
                <NavLink
                  to="/Carte"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Carte
                </NavLink>
              </li>
              <li
                className="hover:text-myyellow flex justify-center transform duration-500 hover:scale-125 hover:underline"
                onClick={toggle}
              >
                <a href="#Menus">Menus</a>
              </li>
              <li
                className=" hover:text-myyellow flex justify-center transform duration-500 hover:scale-125 hover:underline"
                onClick={toggle}
              >
                <a href="#horaires">Horaires</a>
              </li>
              <li
                className="hover:text-myyellow flex justify-center transform duration-500 hover:scale-125 hover:underline"
                onClick={toggle}
              >
                <a href="#contact">Nous trouver</a>
              </li>
              <li className="hover:text-myyellow hover:underline flex justify-center">
                {!isLoggedIn ? (
                  <Login />
                ) : (
                  <UserProfil data={data} onRefresh={onRefresh} />
                )}
              </li>
              <li>
                {isLoggedIn && (
                  <button
                    id={color ? "logoutWhite" : "logout"}
                    onClick={authCtx.logout}
                    className="hidden animate-pulse md:block"
                    alt="Logout"
                  ></button>
                )}
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

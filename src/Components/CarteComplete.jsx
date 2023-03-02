import React from "react";
import { NavLink } from "react-router-dom";

export default function Carte() {
  return (
    <div className="w-screen h-screen bg-mywhite">
      <div className="flex justify-center items-center py-3 shadow">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <button
            className="text-mywhite bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Retour
          </button>
        </NavLink>
      </div>
      <section id="entrees">
        <div className="flex justify-center items-center my-3">
          <h3 className="text-myblack font-cabin text-4xl">Entrées</h3>
        </div>
        <div className="flex justify-center items-center py-3">
          <p className="text-myyellow text-center font-oswald text-md italic">
            Carte des entrées 11,50€ la petite, 18,00€ la grande
          </p>
        </div>
        <div className="font-lf font-bold grid md:grid-cols-3 text-center justify-items-center gap-3 my-3">
          <div className="">
            <p className="py-3">Jambon cru de Savoie</p>
            <p className="py-3">Salade savoyarde</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, jambon cru de Savoie, Abondance, noix
            </p>
            <p className="py-3">Salade du chalet</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, lardons fumés, myrtilles, croustillant de Reblochon
            </p>
            <p className="py-3">Salade des alpages au saumon</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, fromage fondu, pomme de terre, saumon fumé
            </p>
            <p className="py-3">Salade des alpages au grison</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, fromage fondu, pomme de terre, viande de grison
            </p>
          </div>
          <div>
            <p className="py-3">La croûte savoyarde</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, toast au jambon blanc et raclette au lait cru
            </p>
          </div>
          <div>
            <p className="py-3">Salade de chèvre chaud</p>
            <p className="font-normal italic text-myblue text-xs">
              Salade, tomates, myrtilles, toast de chèvre
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

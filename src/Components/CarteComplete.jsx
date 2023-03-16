import React from "react";
import { NavLink } from "react-router-dom";
import jambon from "../Assets/Carte/jambon-cru.jpg";
import tartiflette from "../Assets/Carte/tartiflette.jpg";
import raclette from "../Assets/Carte/raclette.jpg";

export default function Carte() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex justify-center items-center py-3 shadow-lg">
        <NavLink
          to="/quai-antique"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <button
            className="text-mywhite bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Retour
          </button>
        </NavLink>
      </div>
      <section id="entrees" className="shadow-lg">
        <div className="flex justify-center items-center my-3">
          <h3 className="text-myblack font-cabin text-4xl">Entrées</h3>
        </div>
        <div className="flex justify-center items-center py-3">
          <p className="text-myyellow text-center font-oswald text-md italic">
            Carte des entrées 11,50€ la petite, 18,00€ la grande
          </p>
        </div>
        <img
          src={jambon}
          className="md:w-[1000px] m-auto p-3"
          alt="Jambon cru"
        />
        <div className="font-lf font-bold grid md:grid-cols-3 text-center justify-items-center gap-3 my-3">
          <div className="">
            <p className="py-3">Jambon cru de Savoie</p>
            <p className="py-3">Salade savoyarde</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, jambon cru de Savoie, Abondance, noix
            </p>
            <p className="py-3">Salade du chalet</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, lardons fumés, myrtilles, croustillant de
              Reblochon
            </p>
            <p className="py-3">Salade des alpages au saumon</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, fromage fondu, pommes de terre, saumon fumé
            </p>
            <p className="py-3">Salade des alpages au grison</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, fromage fondu, pommes de terre, viande de grison
            </p>
          </div>
          <div>
            <p className="py-3">La croûte savoyarde</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, toast au jambon blanc et raclette au lait cru
            </p>
            <p className="py-3">La croûte au morbier</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, toast au jambon blanc et Morbier
            </p>
            <p className="py-3">Salade de Saint-Marcellin</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, Saint-Marcellin chaud, jambon cru de Savoie,
              pommes de terre, endives, noisettes
            </p>
            <p className="py-3">Salade bleuette</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, pommes de terre, endives, bleu fondu, viande de
              grison, noix
            </p>
          </div>
          <div>
            <p className="py-3">Salade de chèvre chaud</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, tomates, myrtilles, toast de chèvre
            </p>
            <p className="py-3">Tarte au Reblochon</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Viande de grison, Reblochon, oignons
            </p>
            <p className="py-3">Salade de gésiers</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Salade, gésiers confits, magret de canard fumé, croûtons
            </p>
            <p className="py-3">Salade verte</p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              5,00€ la petite / 8,00€ la grande
            </p>
          </div>
        </div>
        <br />
        <p className="italic text-xs font-normal py-2 max-w-md flex m-auto text-center">
          *Accompagnés au choix de gratin de crozets de Savoie ou gratin
          d'endives à la Savoyarde (endives, jambon de Savoie, fromage) ou
          gratin de pommes de terre ou salade verte ou frites ou haricots verts.
        </p>
      </section>
      <br />
      <section id="plats" className="shadow-lg">
        <div className="flex justify-center items-center my-3">
          <h3 className="text-myblack font-cabin text-4xl">Plats</h3>
        </div>
        <div className="flex justify-center items-center py-3">
          <p className="text-myyellow text-center font-oswald text-md italic">
            Carte des plats savoyards
          </p>
        </div>
        <img
          src={tartiflette}
          className="md:w-[800px] m-auto p-3"
          alt="tartiflette"
        />
        <div className="font-lf font-bold grid md:grid-cols-3 text-center justify-items-center gap-3 my-3">
          <div className="">
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette nature{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                17,00€
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, oignons, reblochon,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette au bleu{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                17,50€
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, oignons, bleu,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette lardons{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                18,00€
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, oignons, reblochon, lardons,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette à la viande de grison{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                19,50€
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, oignons, reblochon, viande de grison,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette au saumon fumé{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                20,00€
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, oignons, reblochon, saumon fumé,
              <br /> accompagnée de salade verte
            </p>
          </div>
          <div>
            <p className="py-3 mx-3 grid grid-cols-2">
              Tartiflette aux cèpes{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                21€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, reblochon, cèpes,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Croziflette lardons{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                18€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Pommes de terre, crème, reblochon, cèpes,
              <br /> accompagnée de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Gratiné au brezain{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                20€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Crêpes de sarrasin, pommes de terre, crème, oignons, viande de
              grison, raclette fumée,
              <br /> accompagné de salade verte
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Diots au vin blanc*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                20€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Saucisses de Savoie fumées cuites au vin blanc et crème
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Escalope savoyarde*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                20€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Filet de poulet, jambon cru de Savoie, oignons, crème, reblochon
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Pavé de coeur de rumsteck, sauce reblochon*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                21€00
              </span>
            </p>
          </div>
          <div>
            <p className="py-3 mx-3 grid grid-cols-2">
              Carpaccio à l'abondance*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                20€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              2 assiettes (carpaccio mariné à l'huile d'olives et basilic),
              Abondance
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Planche mix grill{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                27€00
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Boeuf, poulet, lard, diots de Savoie servie avec salade verte,
              frites, sauce au reblochon
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Noix de saint-jacques gratinées à la tomme de Savoie*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                29€00
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Pavé de saumon gratiné au reblochon*{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                25€00
              </span>
            </p>
          </div>
        </div>
        <br />
        <p className="italic text-xs font-normal py-2 max-w-md flex m-auto text-center">
          *Accompagnés au choix de gratin de crozets de Savoie ou gratin
          d'endives à la Savoyarde (endives, jambon de Savoie, fromage) ou
          gratin de pommes de terre ou salade verte ou frites ou haricots verts.
        </p>
      </section>
      <br />
      <section id="specialites" className="shadow-lg">
        <div className="flex justify-center items-center my-3">
          <h3 className="text-myblack font-cabin text-4xl">Spécialités</h3>
        </div>
        <div className="flex justify-center items-center py-3">
          <p className="text-myyellow text-center font-oswald mx-2 text-md italic">
            les spécialités savoyardes (minimum 2 personnes, prix par personne)
            Fromages et pommes de terre à volonté, accompagnés de charcuterie
            (saumon fumé, suppl. +4,00€ par pers.)
            <br />A consommer sur place.
          </p>
        </div>
        <img
          src={raclette}
          className="md:w-[800px] m-auto p-3"
          alt="raclette"
        />
        <div className="font-lf font-bold grid md:grid-cols-3 text-center justify-items-center gap-3 my-3">
          <div className="">
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette au lait cru{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                28,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette au Morbier{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                28,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette frotté au vin blanc{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                28,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette au bleu{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                28,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette à la tomme de chèvre{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                30,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette à la tomme de montagne{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                29,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette d'abondance{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                29,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette fumée{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                29,00€/pers
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Raclette à la truffe{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                40,00€/pers
              </span>
            </p>
          </div>
          <div>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de cochonnaille{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                13€00
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de jambon de Savoie{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                11€50
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de jambon blanc{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                11€00
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de jambon blanc à la truffe{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                17€00
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de rosette{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                10€50
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de viande de grison{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                11€50
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de filets de poulet{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                10€50
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Assiette de saumon fumé{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                15€00
              </span>
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Fondue bourguignonne{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                25€00/pers
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Servie pour 1 personne
              <br />
              Accompagnée de frites, salade et sauces
            </p>
          </div>
          <div>
            <p className="py-3 mx-3 grid grid-cols-2">
              Pierrade{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                25€00/pers
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              (Viandes de boeuf à cuire sur pierre chaude servie avec frites,
              légumes frais, salade, sauces)
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Pierrade aux trois viandes{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                29€00/pers
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              (Viandes de boeuf, de poulet, magret de canard à cuire sur pierre
              chaude servie avec frites, légumes frais, salade, sauces)
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Potence{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                28€00/pers
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              (Viandes de boeuf rôtie empalée et flambée sur la potence avec
              légumes frais, servie avec gratin de pomme de terre et salade)
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Mont d'or (selon saison){" "}
              <span className="text-sm self-center font-bold text-myyellow">
                25€50/pers
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Servi pour 1 personne (accompagné de charcuterie, pommes de terre,
              salade verte)
            </p>
            <p className="py-3 mx-3 grid grid-cols-2">
              Berthoud de Haute-Savoie{" "}
              <span className="text-sm self-center font-bold text-myyellow">
                24€50
              </span>
            </p>
            <p className="font-normal italic text-myblue mx-3 text-xs">
              Servi pour 1 personne Madère, Abondance fondu (accompagné de
              charcuterie, pommes de terre, salade verte)
            </p>
          </div>
        </div>
        <br />
      </section>
      <br />
    </div>
  );
}

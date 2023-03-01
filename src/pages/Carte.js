import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Carte() {
  return (
    <div>
      Carte
      <NavLink exact to="/quai-antique">
        <button>Retour</button>
      </NavLink>
    </div>
  );
}

import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Carte() {
  return (
    <div>
      Carte
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button>Retour</button>
      </NavLink>
    </div>
  );
}

import React from "react";

export default function FicheUserDisplay({ data }) {
  return (
    <>
      <div>
        <p>bienvenue {data.nom}</p>
      </div>
    </>
  );
}

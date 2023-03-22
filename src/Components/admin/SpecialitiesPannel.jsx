import React from "react";

export default function SpecialitiesPannel() {
  const special = [
    {
      prix: "28,00€",
      description: ``,
      nom: "Raclette au lait cru",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Spécialitées</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Noms</th>
            <th className="py-2 border-2">Description</th>
            <th className="py-2 border-2">Prix</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {special.map((hour, index) => (
            <tr key={index}>
              <td className="py-2">{hour.nom}</td>
              <td className="py-2">{hour.description}</td>
              <td className="py-2 flex justify-center">{hour.prix}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  // onClick={() => deleteUser(user.heure)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

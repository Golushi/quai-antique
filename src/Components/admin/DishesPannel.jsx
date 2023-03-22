import React from "react";

export default function DishesPannel() {
  const dishes = [
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
    accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
    {
      prix: "17,00€",
      description: `Pommes de terre, crème, oignons, reblochon,
      accompagnée de salade verte`,
      nom: "Tartiflette nature",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">plats</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Noms</th>
            <th className="py-2 border-2">Descriptions</th>
            <th className="py-2 border-2">Prix</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dishe, index) => (
            <tr key={index}>
              <td className="py-2">{dishe.nom}</td>
              <td className="py-2 flex justify-center">{dishe.description}</td>
              <td className="py-2">{dishe.prix}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  // onClick={() => deleteUser(user.description)}
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

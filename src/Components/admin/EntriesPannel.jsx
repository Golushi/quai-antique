import React from "react";

export default function EntriesPannel() {
  const entries = [
    {
      description: "Salade, tomates, jambon cru de Savoie, Abondance, noix",
      name: "Salade savoyarde",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Entrées</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Nom</th>
            <th className="py-2 border-2">Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entrie, index) => (
            <tr key={index}>
              <td className="py-2">{entrie.name}</td>
              <td className="py-2 flex justify-center">{entrie.description}</td>
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

import React from "react";

export default function HoursPannel() {
  const hours = [
    {
      jour: "Lundi",
      heure: `Midi 12:00-14:30
    Soir 19:00-23:00`,
    },
    {
      jour: "Mardi",
      heure: `Midi 12:00-14:30
    Soir 19:00-23:00`,
    },
    {
      heure: `Midi 12:00-14:30
    Soir 19:00-23:00`,
      jour: "Mercredi",
    },
    {
      jour: "Jeudi",
      heure: `Midi 12:00-14:30
    Soir 19:00-23:00`,
    },
    {
      jour: "Vendredi",
      heure: `Midi 12:00-14:30
    Soir 19:00-23:00`,
    },
    {
      jour: "Samedi",
      heure: `Midi 12:00-15:00
    Soir 19:00-00:00`,
    },
    {
      jour: "Dimanche",
      heure: `Midi 12:00-15:00
    Soir 19:00-00:00`,
    },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Horaires</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Jours</th>
            <th className="py-2 border-2">Heures</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className="py-2">{hour.jour}</td>
              <td className="py-2 flex justify-center">{hour.heure}</td>
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

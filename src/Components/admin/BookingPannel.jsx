import React from "react";

export default function BookingPannel() {
  const bookings = [
    {
      nom: "jean",
      couverts: "4",
      date: "2023-03-22",
      heure: `	
  12:15:00`,
    },
  ];
  return (
    <>
      <h2 className="text-lg font-medium mb-4">Réservations</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Noms</th>
            <th className="py-2 border-2">Couverts</th>
            <th className="py-2 border-2">Dates</th>
            <th className="py-2 border-2">Heures</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="py-2">{booking.nom}</td>
              <td className="py-2 flex justify-center">{booking.couverts}</td>
              <td className="py-2 ">{booking.date}</td>
              <td className="py-2 flex justify-center">{booking.heure}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  // onClick={() => deleteUser(user.heure)}
                >
                  Archiver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

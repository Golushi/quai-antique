import React, { useEffect, useState } from "react";

export default function BookingPannel() {
  const [bookings, setBookings] = useState([]);
  const [filteredDate, setFilteredDate] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/booking/acces`)
      .then((response) => response.json())
      .then((data) => setBookings(data.results))
      .catch((error) => console.log(error));
  }, []);

  // Tableau des noms de colonnes que vous souhaitez afficher
  const columns = [
    "nom",
    "couverts",
    "dateReservation",
    "heureReservation",
    "fruitsCoques",
    "arachide",
    "oeuf",
    "lait",
    "autre",
  ];

  // Parcours de chaque réservation pour ajouter des colonnes manquantes
  const updatedBookings = bookings
    .filter((booking) => {
      // Si la date filtrée est définie, on vérifie que la réservation correspond
      if (filteredDate) {
        return booking.dateReservation.slice(0, 10) === filteredDate;
      }
      return true;
    })
    .map((booking) => {
      const updatedBooking = { ...booking };
      columns.forEach((column) => {
        if (!updatedBooking[column]) {
          updatedBooking[column] = "";
        }
      });
      // Enlever les 3 derniers chiffres de l'heure
      updatedBooking.heureReservation = updatedBooking.heureReservation.slice(
        0,
        -3
      );
      return updatedBooking;
    });

  return (
    <>
      <h2 className="text-lg font-medium mb-4">Réservations</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2 border-black">Noms</th>
            <th className="py-2 border-2 border-black">Couverts</th>
            {/* <th className="py-2 border-2 border-black">Dates</th> */}
            <th className="py-2 border-2 border-black">
              Dates{" "}
              <span className="ml-2">
                <i className="fa fa-filter" aria-hidden="true"></i>
              </span>
              <div className="relative mt-1">
                <input
                  type="date"
                  value={filteredDate}
                  onChange={(e) => setFilteredDate(e.target.value)}
                  className="border rounded-md p-1 pl-3 pr-8"
                  placeholder="Filter by date"
                />
                <div className="relative top-0 right-0 px-2 py-1">
                  <button
                    className="bg-myblue hover:bg-myyellow text-white font-bold py-1 px-2 rounded"
                    onClick={() => setFilteredDate("")}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </th>
            <th className="py-2 border-2 border-black">Heures</th>
            <th className="py-2 border-2 border-black">Fruits de mer</th>
            <th className="py-2 border-2 border-black">Arachides</th>
            <th className="py-2 border-2 border-black">Œufs</th>
            <th className="py-2 border-2 border-black">Lait</th>
            <th className="py-2 border-2 border-black">Autres</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {updatedBookings.map(
            (booking, index) =>
              (!filteredDate ||
                booking.dateReservation.slice(0, 10) === filteredDate) && (
                <tr key={index}>
                  <td className="py-2 text-center border-2">{booking.nom}</td>
                  <td className="py-2 text-center border-2">
                    {booking.couverts}
                  </td>
                  <td className="py-2 text-center border-2">
                    {booking.dateReservation
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                  </td>
                  <td className="py-2 text-center border-2">
                    {booking.heureReservation.slice(0, -3)}
                  </td>
                  <td className="py-2 text-center border-2">
                    {booking.fruitsCoques}
                  </td>
                  <td className="py-2 text-center border-2">
                    {booking.arachide}
                  </td>
                  <td className="py-2 text-center border-2">{booking.oeuf}</td>
                  <td className="py-2 text-center border-2">{booking.lait}</td>
                  <td className="py-2 text-center border-2">{booking.autre}</td>
                  <td>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      // onClick={() => deleteUser(user.heure)}
                    >
                      Archiver
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </>
  );
}

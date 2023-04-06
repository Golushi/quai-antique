import React, { useEffect, useState } from "react";

export default function HoursPanel() {
  const [hours, setHours] = useState([
    {
      jour: "Monday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "14:30" },
        { plage: "soir", debut: "19:00", fin: "23:00" },
      ],
    },
    {
      jour: "Tuesday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "14:30" },
        { plage: "soir", debut: "19:00", fin: "23:00" },
      ],
    },
    {
      jour: "Wednesday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "14:30" },
        { plage: "soir", debut: "19:00", fin: "23:00" },
      ],
    },
    {
      jour: "Thursday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "14:30" },
        { plage: "soir", debut: "19:00", fin: "23:00" },
      ],
    },
    {
      jour: "Friday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "14:30" },
        { plage: "soir", debut: "19:00", fin: "00:00" },
      ],
    },
    {
      jour: "Saturday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "15:00" },
        { plage: "soir", debut: "19:00", fin: "00:00" },
      ],
    },
    {
      jour: "Sunday",
      heures: [
        { plage: "midi", debut: "12:00", fin: "15:00" },
        { plage: "soir", debut: "19:00", fin: "00:00" },
      ],
    },
  ]);

  useEffect(() => {
    const fetchHours = async () => {
      // add async keyword
      try {
        const response = await fetch(
          // add await keyword
          `${process.env.REACT_APP_API_URL}/api/admin/opening_hours/?day=Monday`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json(); // add await here
        setHours(data.results); // update state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };
    fetchHours();
  }, []); // run once on mount

  useEffect(() => {
    const updatedHours = JSON.parse(localStorage.getItem("hours"));
    if (updatedHours) {
      setHours(updatedHours);
    }
    //console.log(updatedHours[0].heures[0].debut);
  }, []);

  const handleHoursChange = (dayIndex, timeIndex, field, value) => {
    setHours((prevHours) => {
      const newHours = [...prevHours];
      newHours[dayIndex].heures[timeIndex][field] = value;
      localStorage.setItem("hours", JSON.stringify(newHours));
      return newHours;
    });
  };

  const handleUpdate = async (dayIndex) => {
    const updatedDay = hours[dayIndex];

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        day: updatedDay.jour,
        lunch_start: updatedDay.heures[0].debut + ":00",
        lunch_end: updatedDay.heures[0].fin + ":00",
        dinner_start: updatedDay.heures[1].debut + ":00",
        dinner_end: updatedDay.heures[1].fin + ":00",
      }),
    };

    setHours((prevHours) => {
      const newHours = [...prevHours];
      newHours[dayIndex] = updatedDay;
      localStorage.setItem("hours", JSON.stringify(newHours));
      return newHours;
    });

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/admin/opening_hours`,
      requestOptions
    );

    if (!response.ok) {
      console.log(
        "Erreur lors de la mise à jour des horaires pour " + updatedDay.jour
      );
      return;
    }

    console.log("Horaires mis à jour pour " + updatedDay.jour);
    console.log(requestOptions.body);
  };

  return (
    <>
      <h2 className="text-lg font-medium mb-4">Horaires</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 border-2">Jours</th>
            <th className="py-2 border-2">Heures</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td className="py-2 border-2">{day.jour}</td>
              <td className="py-2 border-2">
                <table className="w-full">
                  <tbody>
                    {day.heures.map((time, timeIndex) => (
                      <tr key={timeIndex}>
                        <td className="py-2 border-2">{time.plage}</td>
                        <td className="py-2 border-2">
                          <input
                            type="time"
                            value={time.debut}
                            onChange={(e) =>
                              handleHoursChange(
                                dayIndex,
                                timeIndex,
                                "debut",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="py-2 border-2">
                          <input
                            type="time"
                            value={time.fin}
                            onChange={(e) =>
                              handleHoursChange(
                                dayIndex,
                                timeIndex,
                                "fin",
                                e.target.value
                              )
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type={"submit"}
                  className="bg-myblue text-white rounded-lg px-4 py-2 mt-4"
                  onClick={() => handleUpdate(dayIndex)}
                >
                  Mettre à jour
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

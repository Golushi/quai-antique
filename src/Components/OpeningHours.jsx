import React, { useEffect, useState } from "react";
import Map from "./Map";
export default function OpeningHours() {
  const [mondayLunchStart, setMondayLunchStart] = useState();
  const [MondayLunchEnd, setMondayLunchEnd] = useState();
  const [mondayDinnerStart, setMondayDinnerStart] = useState();
  const [MondayDinnerEnd, setMondayDinnerEnd] = useState();
  const [tuesdayLunchStart, setTuesdayLunchStart] = useState();
  const [tuesdayLunchEnd, setTuesdayLunchEnd] = useState();
  const [tuesdayDinnerStart, setTuesdayDinnerStart] = useState();
  const [tuesdayDinnerEnd, setTuesdayDinnerEnd] = useState();

  useEffect(() => {
    const fetchHours = async (day) => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://server-production-4d7c.up.railway.app/api/admin/opening_hours/?day=${day}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          switch (day) {
            case "Monday":
              setMondayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setMondayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setMondayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setMondayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            case "Tuesday":
              setTuesdayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setTuesdayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setTuesdayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setTuesdayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            // Ajoutez les cas pour chaque jour de la semaine ici
            default:
              break;
          }
        })
        .catch((error) => console.log("error", error));
    };

    fetchHours("Monday");
    fetchHours("Tuesday");
    // Appeler fetchHours pour chaque jour de la semaine ici
  }, []);

  return (
    <section id="horaires">
      <div className="grid xl:grid-cols-2 justify-items-center items-center">
        <div className="w-2/3 min-w-[260px] md:w-[500px] h-auto flex-container m-auto px-5">
          <div className=" grid my-10">
            <h3 className="text-3xl font-cabin text-myblack justify-self-center">
              Horaires
            </h3>
          </div>
          <div className="grid font-oswald grid-cols-2">
            <div className="grid justify-items-start my-2">
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Lundi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Mardi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Mercredi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Jeudi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Vendredi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Samedi
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Dimanche
              </p>
            </div>

            <div className="grid justify-items-end text-sm my-2">
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {mondayLunchStart}-{MondayLunchEnd}
                <br />
                Soir {mondayDinnerStart}-{MondayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {tuesdayLunchStart}-{tuesdayLunchEnd}
                <br />
                Soir {tuesdayDinnerStart}-{tuesdayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi 12:00-14:30
                <br />
                Soir 19:00-23:00
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi 12:00-14:30
                <br />
                Soir 19:00-23:00
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi 12:00-14:30
                <br />
                Soir 19:00-00:00
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi 12:00-15:00
                <br />
                Soir 19:00-00:00
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi 12:00-15:00
                <br />
                Soir 19:00-00:00
              </p>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
}

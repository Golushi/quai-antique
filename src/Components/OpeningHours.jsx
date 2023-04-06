import React, { useEffect, useState } from "react";
import Map from "./Map";
export default function OpeningHours() {
  const [mondayLunchStart, setMondayLunchStart] = useState();
  const [mondayLunchEnd, setMondayLunchEnd] = useState();
  const [mondayDinnerStart, setMondayDinnerStart] = useState();
  const [mondayDinnerEnd, setMondayDinnerEnd] = useState();

  const [tuesdayLunchStart, setTuesdayLunchStart] = useState();
  const [tuesdayLunchEnd, setTuesdayLunchEnd] = useState();
  const [tuesdayDinnerStart, setTuesdayDinnerStart] = useState();
  const [tuesdayDinnerEnd, setTuesdayDinnerEnd] = useState();

  const [wednesdayLunchStart, setWednesdayLunchStart] = useState();
  const [wednesdayLunchEnd, setWednesdayLunchEnd] = useState();
  const [wednesdayDinnerStart, setWednesdayDinnerStart] = useState();
  const [wednesdayDinnerEnd, setWednesdayDinnerEnd] = useState();

  const [thursdayLunchStart, setThursdayLunchStart] = useState();
  const [thursdayLunchEnd, setThursdayLunchEnd] = useState();
  const [thursdayDinnerStart, setThursdayDinnerStart] = useState();
  const [thursdayDinnerEnd, setThursdayDinnerEnd] = useState();

  const [fridayLunchStart, setFridayLunchStart] = useState();
  const [fridayLunchEnd, setFridayLunchEnd] = useState();
  const [fridayDinnerStart, setFridayDinnerStart] = useState();
  const [fridayDinnerEnd, setFridayDinnerEnd] = useState();

  const [saturdayLunchStart, setSaturdayLunchStart] = useState();
  const [saturdayLunchEnd, setSaturdayLunchEnd] = useState();
  const [saturdayDinnerStart, setSaturdayDinnerStart] = useState();
  const [saturdayDinnerEnd, setSaturdayDinnerEnd] = useState();

  const [sundayLunchStart, setSundayLunchStart] = useState();
  const [sundayLunchEnd, setSundayLunchEnd] = useState();
  const [sundayDinnerStart, setSundayDinnerStart] = useState();
  const [sundayDinnerEnd, setSundayDinnerEnd] = useState();

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
            case "Wednesday":
              setWednesdayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setWednesdayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setWednesdayDinnerStart(
                data.results[0].dinner_start.slice(0, -3)
              );
              setWednesdayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            case "Thursday":
              setThursdayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setThursdayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setThursdayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setThursdayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            case "Friday":
              setFridayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setFridayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setFridayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setFridayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            case "Saturday":
              setSaturdayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setSaturdayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setSaturdayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setSaturdayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            case "Sunday":
              setSundayLunchStart(data.results[0].lunch_start.slice(0, -3));
              setSundayLunchEnd(data.results[0].lunch_end.slice(0, -3));
              setSundayDinnerStart(data.results[0].dinner_start.slice(0, -3));
              setSundayDinnerEnd(data.results[0].dinner_end.slice(0, -3));
              break;
            default:
              break;
          }
        })
        .catch((error) => console.log("error", error));
    };

    fetchHours("Monday");
    fetchHours("Tuesday");
    fetchHours("Wednesday");
    fetchHours("Thursday");
    fetchHours("Friday");
    fetchHours("Saturday");
    fetchHours("Sunday");
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
                Midi {mondayLunchStart}-{mondayLunchEnd}
                <br />
                Soir {mondayDinnerStart}-{mondayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {tuesdayLunchStart}-{tuesdayLunchEnd}
                <br />
                Soir {tuesdayDinnerStart}-{tuesdayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {wednesdayLunchStart}-{wednesdayLunchEnd}
                <br />
                Soir {wednesdayDinnerStart}-{wednesdayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {thursdayLunchStart}-{thursdayLunchEnd}
                <br />
                Soir {thursdayDinnerStart}-{thursdayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {fridayLunchStart}-{fridayLunchEnd}
                <br />
                Soir {fridayDinnerStart}-{fridayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {saturdayLunchStart}-{saturdayLunchEnd}
                <br />
                Soir {saturdayDinnerStart}-{saturdayDinnerEnd}
              </p>
              <p className="text-myyellow h-20 items-center transform duration-500 hover:scale-125 flex my-2">
                Midi {sundayLunchStart}-{sundayLunchEnd}
                <br />
                Soir {sundayDinnerStart}-{sundayDinnerEnd}
              </p>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
}

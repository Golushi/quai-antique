import React, { useContext, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ReservationTimePicker from "../hooks/ReservationTimepicker";

import AuthContext from "../store/authContext";
import { onRefresh } from "./UI/utils";

export default function BookingModal() {
  const [showForm, setShowForm] = useState(false);

  const nom = sessionStorage.getItem("nom");
  const couverts = sessionStorage.getItem("couverts");

  const openForm = () => {
    setShowForm(true);
  };

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <>
      <div className="fixed z-20 top-[130px] pl-4 flex flex-col items-start">
        <button
          type="button"
          onClick={openForm}
          className="rounded-lg font-cabin py-1 px-2 bg-myred lg:text-xl lg:w-40 lg:h-16 transform duration-500 hover:scale-125 text-mywhite"
        >
          Réserver
        </button>
      </div>

      {showForm && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto h-auto max-w-md md:h-auto">
            <div className="relative bg-[#171717] border-2 border-myyellow rounded-sm shadow">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-cabin text-myyellow">
                  Reservation <br />
                  {isLoggedIn ? nom : "Visiteur"}
                </h3>
                <form className="space-y-6" action="#">
                  {!isLoggedIn && (
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm text-mywhite"
                      >
                        Nom
                      </label>
                      <input
                        type=""
                        name=""
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-mywhite"
                    >
                      Nbr couverts
                    </label>
                    <input
                      id="couverts2"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Entre 1 et 20"
                      defaultValue={isLoggedIn ? couverts : ""}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-mywhite"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="field1"
                      id="field1"
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reservation-time"
                      className="block mb-2 text-sm text-mywhite"
                    >
                      Heures
                    </label>
                    <ReservationTimePicker />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm text-mywhite"
                    >
                      Allergies
                    </label>
                    <input
                      type=""
                      name=""
                      id="allergies"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    className="text-white bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type={"submit"}
                    //  onClick={() => {}}
                  >
                    Valider
                  </button>
                </form>
                <br />
                <div className="text-sm mt-3">
                  <div className="text-mywhite hover:underline">
                    {!isLoggedIn && <Signup />}
                  </div>
                  <br />
                  <div className="text-mywhite hover:underline">
                    {!isLoggedIn && <Login />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

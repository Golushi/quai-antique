import React, { useRef, useState, useEffect } from "react";
import ErrorModal from "./UI/ErrorModal";
import Signup from "./Signup";
import Spinner from "./UI/Spinner";

export default function UserProfil() {
  const [showModal, setShowModal] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();
  if (error) {
  } else {
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Restriction case vide
    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return;
    }

    // Spinner loading
    setIsLoading(true);

    // Se connecter, recup userId et token
    const url = "http://localhost:4000/api/fiche_user/";

    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dataResponse = await response.json();
        // loading terminé
        setIsLoading(false);

        if (response.ok) {
          setData(dataResponse);
        } else {
          setError({
            title: "Authentification Echec",
            message: dataResponse.error,
          });
          const errorMessage = "authentification echec";
          throw new Error(errorMessage);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHandler();

    // Vider les imputs
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };
  const errorhandler = () => {
    setError(null);
  };

  console.log(data);

  // const backdropClickHandler = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <button
        type="button"
        className="transform duration-500 hover:scale-125 hover:underline"
        onClick={() => {
          setShowModal(true);
        }}
      >
        User Name
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto h-auto max-w-md md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => setShowModal(false)}
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
                <div className="px-6 py-6 shadow-2xl border-myyellow border rounded-lg lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Paramètres
                  </h3>
                  {error && (
                    <ErrorModal
                      title={error.title}
                      message={error.message}
                      onConfirm={errorhandler}
                    />
                  )}
                  <form
                    onSubmit={submitHandler}
                    className="space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nom d'utilisateur
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="couverts"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nombre de couverts par défaut :
                      </label>
                      <input
                        type="number"
                        id="couverts"
                        placeholder="min:1 max:20"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="couverts"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Allergies :
                      </label>
                      <div>
                        <input type="checkbox" id="fruitsCoques" />
                        <label htmlFor="fruitsCoques">Fruits à coque</label>
                      </div>
                      <div>
                        <input type="checkbox" id="arachide" />
                        <label htmlFor="arachide">Arachide</label>
                      </div>
                      <div>
                        <input type="checkbox" id="oeuf" />
                        <label htmlFor="oeuf">Oeuf</label>
                      </div>
                      <div>
                        <input type="checkbox" id="lait" />
                        <label htmlFor="lait">Lait</label>
                      </div>
                      <div>
                        <input type="checkbox" id="autre" />
                        <label htmlFor="autre">Autre :</label>
                        <input type="text" id="autreAllergie" />
                      </div>
                    </div>

                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </button>
                    {!isLoading && (
                      <button
                        className="text-white bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type={"submit"}
                        // onClick={() => setShowModal(false)}
                      >
                        Enregistrer
                      </button>
                    )}
                    {isLoading && <Spinner />}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

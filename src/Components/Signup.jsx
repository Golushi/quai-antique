import React, { useRef, useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import Spinner from "./UI/Spinner";

export default function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const couvertsInputRef = useRef();

  const [data, setData] = useState();
  console.log(data);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();
  if (error) {
  } else {
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCouverts = couvertsInputRef.current.value;

    sessionStorage.setItem("name", enteredName);
    sessionStorage.setItem("couverts", enteredCouverts);

    // Restriction case vide
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredCouverts.trim().length === 0
    ) {
      return;
    }

    // Restriction email

    const regExEmail = (value) => {
      // eslint-disable-next-line
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(enteredEmail)) {
      setError({
        title: "Email invalide",
        message: "Une erreur sur le format de l'email (il manque le .com/.fr)",
      });
      return;
    }

    // Spinner loading
    setIsLoading(true);

    // Se connecter, recup userId et token
    const url = `${process.env.REACT_APP_API_URL}/api/authentification/signup`;

    const fetchHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            nom: enteredName,
            email: enteredEmail,
            password: enteredPassword,
            couverts: enteredCouverts,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dataResponse = await response.json();
        // loading terminé
        setIsLoading(false);
        setShowModal(false);
        if (response.ok) {
          setData(dataResponse);
          alert("Le compte a été créé avec succès!");
        } else {
          setError({
            title: "Authentification Echec",
            message: dataResponse.error,
          });
          const errorMessage = "authentification echec";
          throw new Error(errorMessage);
        }

        // Gerer l'erreur compte existant

        if (dataResponse && dataResponse.error) {
          setError({
            title: "Il y a un problème",
            message: dataResponse.error.sqlMessage,
          });
        }
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

  return (
    <>
      <button
        type="button"
        className="transform duration-500 hover:scale-125 hover:underline"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Creer un compte
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
                    Creer un compte
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
                        htmlFor="nom"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nom
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Nom"
                        id="input1"
                        ref={nameInputRef}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Addresse email
                      </label>
                      <input
                        type="email"
                        name="emailSignup"
                        id="emailSignup"
                        ref={emailInputRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="nom@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="password2"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mot de passe{" "}
                        </label>
                        <span
                          className="cursor-pointer animate-bounce text-myblue"
                          onClick={() =>
                            alert(
                              "Le mot de passe doit comporter au moins 8 caractères, une majuscule et un chiffre."
                            )
                          }
                        >
                          ?
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="passwordSignup"
                          id="passwordSignup"
                          ref={passwordInputRef}
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500 focus:outline-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "Masquer" : "Afficher"}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="couvert"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nbr couverts (par défaut)
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Entre 1 et 20"
                        id="input2"
                        ref={couvertsInputRef}
                        required
                      />
                    </div>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      retour
                    </button>
                    {!isLoading && (
                      <button
                        className="text-white bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type={"submit"}
                        // onClick={() => setShowModal(false)}
                      >
                        S'inscrire
                      </button>
                    )}
                  </form>
                  {isLoading && <Spinner />}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

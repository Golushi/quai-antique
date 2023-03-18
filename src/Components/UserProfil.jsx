import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../store/authContext";
import ErrorModal from "./UI/ErrorModal";
import Spinner from "./UI/Spinner";
import { onRefresh } from "./UI/utils";

export default function UserProfil({ data }) {
  const [showModal, setShowModal] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(data);

  const [dataUpdate, setDataUpdate] = useState(data);
  console.log("dataUpdateeeeeeeeeeeeeeeeeeeeee");
  console.log(dataUpdate);

  const [modification, setModification] = useState(false);
  const authCtx = useContext(AuthContext);

  const nomInputRef = useRef();
  const couvertsInputRef = useRef();
  const arachideInputRef = useRef();
  const autreInputRef = useRef();
  const fruitsCoquesInputRef = useRef();
  const laitInputRef = useRef();
  const oeufInputRef = useRef();

  // Mettre a jour dataUpdates
  useEffect(() => {
    setDataUpdate(data);
  }, [data]);

  const nom = dataUpdate.nom;
  const couverts = dataUpdate.couverts;
  const arachide = dataUpdate.arachide;
  const autre = dataUpdate.autre;
  const fruitsCoques = dataUpdate.fruitsCoques;
  const lait = dataUpdate.lait;
  const oeuf = dataUpdate.oeuf;

  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
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
          setDatas(dataResponse);
        } else {
          setError({
            title: "Authentification Echec",
            message: dataResponse.error,
          });
          const errorMessage = "authentification echec";
          throw new Error(errorMessage);
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

  // Modif données
  const modificationHandler = () => {
    setModification((modification) => !modification);
    console.log(modification);
  };

  // Pour survveiller les modifs
  const changeHandler = () => {
    const enteredNom = nomInputRef.current.value;
    const enteredCouverts = couvertsInputRef.current.value;
    const enteredArachide = arachideInputRef.current.checked ? 1 : 0;
    const enteredAutre = autreInputRef.current.value;
    const enteredFruitsCoques = fruitsCoquesInputRef.current.checked ? 1 : 0;
    const enteredLait = laitInputRef.current.checked ? 1 : 0;
    const enteredOeuf = oeufInputRef.current.checked ? 1 : 0;

    // Mettre a jour le state
    setDataUpdate({
      ...dataUpdate,
      nom: enteredNom,
      couverts: enteredCouverts,
      arachide: enteredArachide,
      autre: enteredAutre,
      fruitsCoques: enteredFruitsCoques,
      lait: enteredLait,
      oeuf: enteredOeuf,
    });

    // Creation objet avec les proprietées à envoyer
    const dataUpdateSend = {
      nom: enteredNom,
      couverts: enteredCouverts,
      arachide: enteredArachide,
      autre: enteredAutre,
      fruitsCoques: enteredFruitsCoques,
      lait: enteredLait,
      oeuf: enteredOeuf,
    };

    // Envoyer les nouvelles données vers le serveur
    // const sendData = new SendData();
    // sendData.append = dataUpdate;
    const url = `http://localhost:4000/api/fiche_user/23?userId=${authCtx.userId}`;
    const sendData = dataUpdateSend;

    const fetchUploadHandler = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authCtx.token}`,
          },
          body: JSON.stringify(sendData),
          // JSON.stringify({
          //   nom: enteredNom,
          //   couverts: enteredCouverts,
          //   arachide: enteredArachide,
          //   autre: enteredAutre,
          //   fruitsCoques: enteredFruitsCoques,
          //   lait: enteredLait,
          //   oeuf: enteredOeuf,
          // }),
        });
        const dataResponse = await response.json();

        if (response.ok) {
          console.log("*********** RESPONSE.OK ************");
          console.log(response);
          console.log(dataResponse);
        } else {
          console.log("*********** RESPONSE.PAS OK ************");
          console.log(response);
          console.log(dataResponse);
          throw new Error(dataResponse.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUploadHandler();
  };

  // Requete GET

  useEffect(() => {
    onRefresh();
  }, [modification]);

  sessionStorage.setItem("nom", nom);
  sessionStorage.setItem("couverts", couverts);
  sessionStorage.setItem("arachide", arachide);
  sessionStorage.setItem("autre", autre);
  sessionStorage.setItem("fruitsCoques", fruitsCoques);
  sessionStorage.setItem("lait", lait);
  sessionStorage.setItem("oeuf", oeuf);
  sessionStorage.setItem("userId", data.userId);
  sessionStorage.setItem("idFiche", data.idFiche);

  console.log("TTTTTTTTTTTTTTTTTTTTTTTTT");
  console.log(data.idFiche);
  console.log(data.userId);

  return (
    <>
      <button
        type="button"
        className="transform duration-500 hover:scale-125 hover:underline"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <p>{nom}</p>
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
                    // onSubmit={submitHandler}
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
                      {!modification && (
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                          {nom}
                        </p>
                      )}
                      {modification && (
                        <input
                          onChange={changeHandler}
                          ref={nomInputRef}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          defaultValue={nom}
                        />
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="couverts"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nombre de couverts par défaut :
                      </label>
                      {!modification && (
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                          {couverts}
                        </p>
                      )}
                      {modification && (
                        <select
                          onChange={changeHandler}
                          ref={couvertsInputRef}
                          id="couverts"
                          defaultValue={couverts}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        >
                          {Array.from(Array(20).keys()).map((value) => (
                            <option key={value} value={value + 1}>
                              {value + 1}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="text-black">
                      <label
                        htmlFor="couverts"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Allergies :
                      </label>
                      <div>
                        {!modification && (
                          <input
                            checked={fruitsCoques === 1}
                            type="checkbox"
                            id="fruitsCoques"
                            disabled
                          />
                        )}
                        {modification && (
                          <input
                            onChange={changeHandler}
                            ref={fruitsCoquesInputRef}
                            checked={fruitsCoques === 1}
                            type="checkbox"
                            id="fruitsCoques"
                          />
                        )}
                        <label htmlFor="fruitsCoques">Fruits à coque</label>
                      </div>
                      <div>
                        {!modification && (
                          <input
                            checked={arachide === 1}
                            type="checkbox"
                            id="arachide"
                            disabled
                          />
                        )}
                        {modification && (
                          <input
                            onChange={changeHandler}
                            ref={arachideInputRef}
                            checked={arachide === 1}
                            type="checkbox"
                            id="arachide"
                          />
                        )}
                        <label htmlFor="arachide">Arachide</label>
                      </div>
                      <div>
                        {!modification && (
                          <input
                            checked={oeuf === 1}
                            type="checkbox"
                            id="oeuf"
                            disabled
                          />
                        )}
                        {modification && (
                          <input
                            onChange={changeHandler}
                            ref={oeufInputRef}
                            checked={oeuf === 1}
                            type="checkbox"
                            id="oeuf"
                          />
                        )}
                        <label htmlFor="oeuf">Oeuf</label>
                      </div>
                      <div>
                        {!modification && (
                          <input
                            checked={lait === 1}
                            type="checkbox"
                            id="lait"
                            disabled
                          />
                        )}
                        {modification && (
                          <input
                            onChange={changeHandler}
                            ref={laitInputRef}
                            checked={lait === 1}
                            type="checkbox"
                            id="lait"
                          />
                        )}

                        <label htmlFor="lait">Lait</label>
                      </div>
                      <div className="m-2">
                        <label htmlFor="autre">Autre :</label>
                        {!modification && <p>{autre}</p>}
                        {modification && (
                          <input
                            onChange={changeHandler}
                            ref={autreInputRef}
                            className="mx-2"
                            type="text"
                            id="autreAllergie"
                            defaultValue={autre}
                          />
                        )}
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
                        onClick={modificationHandler}
                      >
                        {!modification ? "Modifier" : "Envoyer"}
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

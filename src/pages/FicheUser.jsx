import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/authContext";

export default function FicheUser() {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState([]);

  const isLoggedIn = authCtx.isLoggedIn;

  // Requete acces ressources proteger
  const url = `http://localhost:4000/api/fiche_user/fiche/?userId=${authCtx.userId}`;

  const fetchHandler = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token} `,
        },
      });

      const dataResponse = await response.json();

      if (response.ok) {
        setData(dataResponse);
      } else {
        throw new Error(dataResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Pour executer la fonction au montage du composant
  useEffect(() => {
    if (isLoggedIn) {
      fetchHandler();
    }
  }, [isLoggedIn]);

  console.log("SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTT");
  console.log(data.results && data.results[0]);

  sessionStorage.setItem(
    "nomUtilisateur",
    data.results && data.results[0].fiche_user_nom
  );
  sessionStorage.setItem(
    "couverts",
    data.results && data.results[0].fiche_user_couverts
  );

  return (
    <>
      {isLoggedIn && <p>Connected</p>}
      {!isLoggedIn && <p>Vous n'etes pas connecté</p>}
      {isLoggedIn && (
        <p>Bonjour {data.results && data.results[0].fiche_user_nom} </p>
      )}
      {isLoggedIn && <p>Votre token : {authCtx.token}</p>}
      {isLoggedIn && <p>Votre userID :{authCtx.userId} </p>}
    </>
  );
}

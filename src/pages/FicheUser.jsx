import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../store/authContext";

export default function FicheUser() {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState([]);

  const isLoggedIn = authCtx.isLoggedIn;

  // Requete acces ressources proteger
  const url = `http://localhost:4000/api/fiche_user/fiche/?userId=${authCtx.userId}`;

  const fetchHandler = useCallback(async () => {
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
        // Reformatage donnée
        const transformedData = () => {
          return {
            arachide: dataResponse.results[0].fiche_user_arachide,
            autre: dataResponse.results[0].fiche_user_autre,
            couverts: dataResponse.results[0].fiche_user_couverts,
            fruitsCoques: dataResponse.results[0].fiche_user_fruitsCoques,
            lait: dataResponse.results[0].fiche_user_lait,
            nomUtilisateur: dataResponse.results[0].fiche_user_nom,
            oeuf: dataResponse.results[0].fiche_user_oeuf,
            userId: dataResponse.results[0].fiche_user_userId,
            idFiche: dataResponse.results[0].id_fiche_user,
          };
        };

        setData(transformedData);
      } else {
        throw new Error(dataResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  }, [authCtx.token, url]);
  // Pour executer la fonction au montage du composant
  useEffect(() => {
    if (isLoggedIn) {
      fetchHandler();
    }
  }, [fetchHandler, isLoggedIn]);

  data.autre = data.autre === null ? "" : data.autre;

  sessionStorage.setItem("nomUtilisateur", data.nomUtilisateur);
  sessionStorage.setItem("couverts", data.couverts);
  sessionStorage.setItem("arachide", data.arachide);
  sessionStorage.setItem("autre", data.autre);
  sessionStorage.setItem("fruitsCoques", data.fruitsCoques);
  sessionStorage.setItem("lait", data.lait);
  sessionStorage.setItem("oeuf", data.oeuf);
  sessionStorage.setItem("userId", data.userId);
  sessionStorage.setItem("idFiche", data.idFiche);

  return (
    <>
      {isLoggedIn && <p>Connected</p>}
      {!isLoggedIn && <p>Vous n'etes pas connecté</p>}
      {isLoggedIn && <p>Votre token : {authCtx.token}</p>}
      {isLoggedIn && <p>Votre userID :{authCtx.userId} </p>}
    </>
  );
}

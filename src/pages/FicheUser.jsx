import { useCallback, useContext, useEffect, useState } from "react";
import UserProfil from "../Components/UserProfil";
import AuthContext from "../store/authContext";

export default function FicheUser({ data }) {
  const authCtx = useContext(AuthContext);
  const [datas, setDatas] = useState([]);

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

      const controlArrayNotEmpty =
        Array.isArray(dataResponse.results) && dataResponse.results.length;

      if (controlArrayNotEmpty) {
        console.log("Tableau rempli");
      } else {
        console.log("Tableau vide");
      }

      if (response.ok) {
        // si tableau pas vide
        if (controlArrayNotEmpty) {
          // Reformatage donnée
          const transformedData = () => {
            return {
              arachide: dataResponse.results[0].fiche_user_arachide,
              autre: dataResponse.results[0].fiche_user_autre,
              couverts: dataResponse.results[0].fiche_user_couverts,
              fruitsCoques: dataResponse.results[0].fiche_user_fruitsCoques,
              lait: dataResponse.results[0].fiche_user_lait,
              nom: dataResponse.results[0].fiche_user_nom,
              oeuf: dataResponse.results[0].fiche_user_oeuf,
              userId: dataResponse.results[0].fiche_user_userId,
              idFiche: dataResponse.results[0].id_fiche_user,
            };
          };
          // envoi dans le state
          setDatas(transformedData);
        } else {
          console.log("fiche n'existe pas");
          console.log(setDatas);
          //
          const url2 = `http://localhost:4000/api/fiche_user/?userId=${authCtx.userId}`;
          const fetchFicheUserCreateHandler = async () => {
            try {
              const fiche_user = {
                userId: authCtx.userId,
                nom: "a modif",
                couverts: 1,
                fruitsCoques: 0,
                arachide: 0,
                oeuf: 0,
                lait: 0,
                autre: null,
              };
              const response2 = await fetch(url2, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authCtx.token} `,
                },
                body: JSON.stringify({ fiche_user }),
              });

              const dataResponse2 = await response2.json();

              if (response2.ok) {
                console.log("-------- response2 ok");
                console.log(response2);
                console.log(dataResponse2);
              } else {
                console.log("---------response2 pas ok");

                console.log(response2);
                console.log(dataResponse2);
                throw new Error(dataResponse2.error);
              }
            } catch (error) {
              console.log("dans le catch");
              console.log(url2);
              console.log(error);
            }
          };
          fetchFicheUserCreateHandler();
        }
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

  const onRefresh = () => {
    fetchHandler();
  };

  datas.autre = datas.autre === null ? "" : datas.autre;

  return (
    <>
      <UserProfil data={datas} onRefresh={onRefresh} />
    </>
  );
}

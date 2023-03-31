import { useCallback, useContext, useEffect, useState } from "react";
import UserProfil from "../Components/UserProfil";
import AuthContext from "../store/authContext";

export default function FicheUser({ data }) {
  const authCtx = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [isCreateFiche, setIsCreateFiche] = useState(false);
  const [nom, setNom] = useState("");
  const [couverts, setCouverts] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setNom(sessionStorage.getItem("name") || "");
    setCouverts(sessionStorage.getItem("couverts") || "");
  }, []);

  const isLoggedIn = authCtx.isLoggedIn;

  const fetchHandler = useCallback(async () => {
    // Requete acces ressources proteger
    const url = `${process.env.REACT_APP_API_URL}/api/fiche_user/fiche/?userId=${authCtx.userId}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token} `,
        },
      });

      const dataResponse = await response.json();

      // controle tableau plein
      const controlArrayNotEmpty =
        Array.isArray(dataResponse.results) && dataResponse.results.length;
      // Si tableau es plein
      if (controlArrayNotEmpty) {
        console.log("Tableau rempli");
        if (response.ok) {
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
          if (datas.length === 0) {
            setDatas(transformedData);
            console.log(datas.length);
            setIsCreateFiche(true);
          }
        }
      } else {
        console.log("Tableau vide");
        console.log("fiche n'existe pas");
        const url2 = `${process.env.REACT_APP_API_URL}/api/fiche_user/?userId=${authCtx.userId}`;
        try {
          const fiche_user = {
            userId: authCtx.userId,
            nom: nom,
            couverts: couverts,
            fruitsCoques: 0,
            arachide: 0,
            oeuf: 0,
            lait: 0,
            autre: "",
          };
          await fetch(url2, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authCtx.token} `,
            },
            body: JSON.stringify({ fiche_user }),
          });
        } catch (error) {
          console.log(error);
        }
        setRefresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [authCtx.token, authCtx.userId, couverts, datas.length, nom]);
  // Pour executer la fonction au montage du composant
  useEffect(() => {
    if (isLoggedIn) {
      fetchHandler();
    }
  }, [fetchHandler, isLoggedIn, refresh]);

  const onRefresh = () => {
    fetchHandler();
    setRefresh(false);
  };

  return (
    <>
      {isLoggedIn && isCreateFiche && (
        <UserProfil data={datas} onRefresh={onRefresh} />
      )}
    </>
  );
}

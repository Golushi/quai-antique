import { useContext } from "react";
import AuthContext from "../store/authContext";

export default function Test() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  // Requete acces ressources proteger
  const url = "http://localhost:4000/api/fiche_user/";

  const fetchHandler = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        // body: JSON.stringify({
        //   userId: authCtx.userId,
        // }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token} `,
        },
      });

      const dataResponse = await response.json();

      if (response.ok) {
        console.log(dataResponse);
      } else {
        throw new Error(dataResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoggedIn) {
    fetchHandler();
  }

  return (
    <>
      {isLoggedIn && <p>Connected</p>}
      {!isLoggedIn && <p>Vous n'etes pas connecté</p>}
      {isLoggedIn && <p>Nom : </p>}
      {isLoggedIn && <p>Votre token : {authCtx.token}</p>}
      {isLoggedIn && <p>Votre userID :{authCtx.userId} </p>}
    </>
  );
}

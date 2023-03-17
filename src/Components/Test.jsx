import { useContext } from "react";
import AuthContext from "../store/authContext";

export default function Test() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

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

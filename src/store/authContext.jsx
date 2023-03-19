import { createContext, useState } from "react";

// Creation context pour auth
// Stocker données : token, userId etc
const defaultValue = {
  token: "",
  userId: null,
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(defaultValue);

// Controle presence token dans local storage
const tokenLocalStorage = localStorage.getItem("token");
const userIdLocalStorage = localStorage.getItem("userId");
// const ficheIdLocalStorage = localStorage.getItem("id_fiche_user");

// Context provider
export const AuthContextProvider = (props) => {
  // Stockage token
  const [token, setToken] = useState(tokenLocalStorage);
  const [userId, setUserId] = useState(userIdLocalStorage);
  // const [ficheId, setFicheId] = useState(ficheIdLocalStorage);

  // Mettre a jour token
  const loginHandler = (token, userId, ficheId) => {
    setToken(token);
    setUserId(userId);
    // setFicheId(ficheId);

    // Mettre la donnée dans le local storage
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    // localStorage.setItem("id_fiche_user", ficheId);
  };

  // Logout token a null
  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    // Suppr donnée locale storage
    localStorage.clear();
  };

  // Si token = logge + convertir token en boolean
  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);

  // Context value
  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
  console.log(defaultValue);

  return (
    <AuthContext.Provider value={contextValue}>
      {[props.children]}
    </AuthContext.Provider>
  );
};

export default AuthContext;

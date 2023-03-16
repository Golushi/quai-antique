import { createContext, useState } from "react";

// Creation context pour auth
// Stocker données : token, userId etc
const defaultValue = {
  token: "",
  userId: null,
  login: () => {},
};

const AuthContext = createContext(defaultValue);

// Context provider
export const AuthContextProvider = (props) => {
  // Stockage token
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // Mettre a jour token
  const loginHandler = (token, userId) => {
    setToken(token);
    setUserId(userId);
  };

  // Context value
  const contextValue = {
    token: token,
    userId: userId,
    login: loginHandler,
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

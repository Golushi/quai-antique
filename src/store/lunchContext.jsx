import { createContext, useState } from "react";

const LunchContext = createContext();

export const LunchProvider = ({ children }) => {
  const [lunchStart, setLunchStart] = useState(null);

  return (
    <LunchContext.Provider value={{ lunchStart, setLunchStart }}>
      {children}
    </LunchContext.Provider>
  );
};

export default LunchContext;

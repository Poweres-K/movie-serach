import React, { useState, useContext } from "react";
import useFetch from "./useFetch";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("sup");
  const { dataReturn: movies, errorMessage } = useFetch(`&s=${searchTerm}`);

  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{ movies, searchTerm, errorMessage, handleChangeSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

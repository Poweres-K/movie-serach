import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { handleChangeSearch, searchTerm, errorMessage } = useGlobalContext();
  return (
    <form className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={searchTerm}
        onChange={handleChangeSearch}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

export default SearchForm;

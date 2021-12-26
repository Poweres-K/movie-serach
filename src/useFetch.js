import { useEffect, useState, useCallback } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const useFetch = (urlParam) => {
  const [dataReturn, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const url = `${API_ENDPOINT}${urlParam}`;
      const response = await fetch(url);
      let data = await response.json();

      if (data.Response === "False") {
        const customError = {
          message: data.Error,
          name: "Search Error",
        };
        throw customError;
      }

      setData(data.Search || data);
      setErrorMessage("");
      setLoading(false);
    } catch (e) {
      if (e.name === "Search Error") {
        setErrorMessage(e.message);
      } else {
        console.log(e);
      }

      setLoading(false);
    }
  }, [urlParam]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { dataReturn, errorMessage, loading };
};

export default useFetch;

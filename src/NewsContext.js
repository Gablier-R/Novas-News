import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "321af769b04c4a0d81334c2f2c2490f5";

   useEffect( async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=br&category=technology&from=${Date.now}&sortBy=publishedAt&apiKey=${apiKey}&language=pt`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

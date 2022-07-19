import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [userLogin, setUserLogin] = useState(false);
  const [userFavorite, setFavorite] = useState(false);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        login: { userLogin, setUserLogin },
        favorite: { userFavorite, setFavorite },
        albums: { albums, setAlbums },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalProvider };

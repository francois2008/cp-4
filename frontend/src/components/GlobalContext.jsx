// import React, { useState, createContext, useEffect } from "react";
// import axios from "axios";

// const GlobalContext = createContext();

// function GlobalProvider({ children }) {
//   const [albums, setAlbums] = useState("");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000`)
//       .then((response) => {
//         setAlbums(response.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);
//   return (
//     <GlobalContext.Provider
//       value={{
//         albums: { albums, setAlbums },
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// }
// export { GlobalContext, GlobalProvider };

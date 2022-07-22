import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/MainLayout";
import CardVinyl from "../components/commons/CardVinyl";
import "../styles/playlist.css";

function PlayList() {
  const [vinyls, setVinyls] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/favourite").then((res) => {
      setVinyls(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="playlist-card">
        {vinyls.map((vinyl) => (
          <CardVinyl key={vinyl.id} vinyl={vinyl} />
        ))}
      </div>
    </MainLayout>
  );
}

export default PlayList;

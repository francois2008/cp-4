import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../components/layouts/MainLayout";
import CardVinyl from "../components/commons/CardVinyl";

function PlayList() {
  const [vinyls, setVinyls] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/albums").then((res) => {
      setVinyls(res.data);
    });
  }, []);
  return (
    <MainLayout>
      <div>
        {vinyls.map((vinyl) => (
          <CardVinyl vinyl={vinyl} />
        ))}
      </div>
    </MainLayout>
  );
}

export default PlayList;

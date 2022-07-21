import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";
import SearchBar from "../components/commons/SearchBar";
import CardVinyl from "../components/commons/CardVinyl";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  const [vinyls, setVinyls] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/albums").then((res) => {
      setVinyls(res.data);
    });
  }, []);

  return (
    <MainLayout>
      <SearchBar />
      <div className="home-card">
        {vinyls.map((vinyl) => (
          <CardVinyl key={vinyl.id} vinyl={vinyl} />
        ))}
      </div>
    </MainLayout>
  );
}

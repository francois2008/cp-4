import React, { useState } from "react";
import axios from "axios";
import Yellowstar from "../../assets/yellowstar.jpg";
import Whitestar from "../../assets/whitestar.jpg";
import "../../styles/cardvinyl.css";

function CardVinyl({ vinyl }) {
  const [fav, setFav] = useState(true);
  const URLBDD = `${import.meta.env.VITE_BACKEND_URL}/favourite`;

  const handleClickFavourite = () => {
    if (!fav) {
      axios
        .post(URLBDD, {
          vinyl,
        })
        .then(() => {
          setFav(!fav);
        });
    } else if (fav) {
      axios
        .delete(URLBDD, {
          vinyl,
        })
        .then(() => {
          setFav(!fav);
        });
    }
  };

  return (
    <div className="card-vinyl">
      <div className="data-up">
        <h2>{vinyl.title}</h2>
        <h2>{vinyl.released}</h2>
      </div>
      <img className="photo-vinyl" src={vinyl.image} alt="photovinyl" />
      <div className="data-down">
        {fav && (
          <button
            name="star"
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img className="star" src={Yellowstar} alt="favourite-star-full" />
          </button>
        )}
        {!fav && (
          <button
            name="star"
            type="button"
            className="fav-button"
            onClick={handleClickFavourite}
          >
            {" "}
            <img className="star" src={Whitestar} alt="empty-star" />
          </button>
        )}
        <h2>{vinyl.artist}</h2>
        <h2>{vinyl.category}</h2>
      </div>
    </div>
  );
}

export default CardVinyl;

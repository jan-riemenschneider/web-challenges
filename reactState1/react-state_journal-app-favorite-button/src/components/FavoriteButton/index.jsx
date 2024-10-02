import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  /* const isFavorite = false; */
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setisFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

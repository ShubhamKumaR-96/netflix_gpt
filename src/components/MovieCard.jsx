import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-40 pr-2">
      <img  src={IMG_CDN_URL + posterpath} alt="poster" />
    </div>
  );
};

export default MovieCard;

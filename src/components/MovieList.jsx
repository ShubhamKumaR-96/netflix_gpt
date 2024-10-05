import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
         <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
       
        <div className="flex">
          {/* Correcting the map function and fallback structure */}
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))
          ) : (
            <div>No Movies</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

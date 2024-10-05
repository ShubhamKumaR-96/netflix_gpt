import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-20 relative pl-12 z-50">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>

      {/* 
      MovieList - Popular
      Movie card * n
      MovieList -Now playing
      MovieList - Trending
      MovieList - Horoor

       */}
    </div>
  );
};

export default SecondaryContainer;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-96 relative z-20">
        {movies && (
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
        )}
        {movies && (
          <MovieList title={"Popular"} movies={movies?.popularMovie} />
        )}
        {movies && (
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        )}
        {movies && (
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;

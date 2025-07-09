import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        {movies && (
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
        )}
        {movies && (
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovie} />
        )}
        {movies && (
          <MovieList title={"Latest"} movies={movies?.nowPlayingMovie} />
        )}
        {movies && (
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovie} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;

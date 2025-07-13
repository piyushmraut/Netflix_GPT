import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

// Let's try to reduce the api calls

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const movietrail = useSelector((store)=> store.movies.movieTrailer);
  
  // Let's try to fetch the video
  async function movieTrailer() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const moviesData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = moviesData ? moviesData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  }

  useEffect(() => {
    !movietrail && movieTrailer();
  }, []);
}

export default useMovieTrailer;

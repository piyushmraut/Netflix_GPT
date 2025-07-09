import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
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
    movieTrailer();
  }, []);
}

export default useMovieTrailer;

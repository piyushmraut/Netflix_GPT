import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addOnPlayingMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  async function getPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnPlayingMovie(json.results));
  }

  useEffect(() => {
    getPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;

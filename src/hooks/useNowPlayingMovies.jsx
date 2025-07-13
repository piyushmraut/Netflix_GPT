import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOnPlayingMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store)=> store.movies.nowPlayingMovie);
  async function getPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnPlayingMovie(json.results));
  }

  useEffect(() => {
    !nowPlayingMovie && getPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;

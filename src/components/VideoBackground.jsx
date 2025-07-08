import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

function VideoBackground({ movieId }) {
  const dispatch = useDispatch();
  const movieTrailerkey = useSelector(
    (store) => store.movies?.movieTrailer?.key
  );
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
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/b9Rr9ygb-ac"
        title="From the World of John Wick: Ballerina (2025) Final Trailer – Ana de Armas, Keanu Reeves"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;

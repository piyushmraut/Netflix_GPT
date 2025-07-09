import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const movieTrailerkey = useSelector(
    (store) => store.movies?.movieTrailer?.key
  );

  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movieTrailerkey+"?&autoplay=1&mute=1"}
        title="From the World of John Wick: Ballerina (2025) Final Trailer – Ana de Armas, Keanu Reeves"
        allow="autoplay "
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
}

export default VideoBackground;

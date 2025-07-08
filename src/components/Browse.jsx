import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;

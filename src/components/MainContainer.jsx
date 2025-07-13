import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function MainContainer() {
  // Subscribing to the store
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!movies) {
    return;
  }
  // const mainMovie = movies[0];
  const mainMovie = movies[Math.floor(Math.random()*19)+1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId = {id} />
    </div>
  );
}

export default MainContainer;

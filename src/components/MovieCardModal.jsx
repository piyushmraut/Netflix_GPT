/* eslint-disable no-unused-vars */
import React from "react";
import { IMG_CDN } from "../utils/constants";

function MovieCardModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>
        <div className="flex gap-6">
          <img
            src={`${IMG_CDN}${movie.poster_path}`}
            alt={movie.title}
            className="w-64 rounded"
          />
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="mb-2">{movie.overview}</p>
            <p className="text-gray-300">Rating: {movie.vote_average}/10</p>
            <p className="text-gray-300">Release Date: {movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardModal;

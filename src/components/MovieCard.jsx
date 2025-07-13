import React, { useState } from 'react'
import { IMG_CDN } from '../utils/constants'
import MovieCardModal from './movieCardModal';

const MovieCard = ({movie}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if(!movie.poster_path){
    return null;
  }

  
  return (
    <>
      <div className='w-36 md:w-48 p-2 cursor-pointer' onClick={()=> setIsModalOpen(true)} >
      <img src={IMG_CDN+movie.poster_path} alt="Movie Image"  />
      </div>

      {
        isModalOpen && <MovieCardModal
        movie = {movie}
        onClose = {()=> setIsModalOpen(false)}
        />
      }
    </>
  )
}

export default MovieCard

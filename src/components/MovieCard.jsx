import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 p-2'>
      <img src={IMG_CDN+poster_path} alt="Movie Image"  />
    </div>
  )
}

export default MovieCard

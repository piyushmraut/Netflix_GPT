import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  return (
    <div className='px-4 pl-8 md:px-14 md:pl-24 pt-12 md:pt-0'>
        <h1 className='text-lg md:text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex '>
                {movies && movies?.map((movie)=> <MovieCard key={movie?.id} movie={movie} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
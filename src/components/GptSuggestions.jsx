import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function GptSuggestions() {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt);
  return (
    <div className='p-4 m-4 bg-black/80 text-white'>
      {movieNames && movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptSuggestions
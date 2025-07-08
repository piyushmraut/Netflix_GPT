import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addOnPlayingMovie } from '../utils/moviesSlice';

function Browse() {
  const dispatch = useDispatch();
  async function getPlayingMovies(){
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addOnPlayingMovie(json.results));
  }

  useEffect(()=>{
    getPlayingMovies();
  },[])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
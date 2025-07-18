import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovie = useSelector((store)=> store.movies.popularMovie);
    async function getPopularMovie(){
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovie(json.results));
    }

    useEffect(()=>{
        !popularMovie && getPopularMovie();
    },[])
}

export default usePopularMovies;
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    async function getUpcomingMovies(){
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
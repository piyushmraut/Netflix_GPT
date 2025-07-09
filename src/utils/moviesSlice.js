import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovie: null,
        popularMovie:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieTrailer: null
    },
    reducers: {
        addOnPlayingMovie:(state,action)=>{
            state.nowPlayingMovie = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        }
        ,
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        }
    }
})

export const {addOnPlayingMovie, addMovieTrailer, addPopularMovie, addTopRatedMovies, addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovie: null,
        movieTrailer: null
    },
    reducers: {
        addOnPlayingMovie:(state,action)=>{
            state.nowPlayingMovie = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        }
    }
})

export const {addOnPlayingMovie, addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;
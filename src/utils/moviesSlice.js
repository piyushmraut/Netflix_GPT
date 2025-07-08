import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovie: null
    },
    reducers: {
        addOnPlayingMovie: (state,action)=>{
            state.nowPlayingMovie = action.payload;
        }
    }
})

export const {addOnPlayingMovie} = moviesSlice.actions;
export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;

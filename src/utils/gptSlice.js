import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovieResult: null,
        gptMovieNames: null,
        userApiKey: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.gptMovieResult = movieResults;
            state.gptMovieNames = movieNames;
        },
        setUserApiKey: (state, action) => {
            state.userApiKey = action.payload;
        }
    }
})

export const { toggleGptSearchView, addGptMovieResult, setUserApiKey } = gptSlice.actions;
export default gptSlice.reducer;
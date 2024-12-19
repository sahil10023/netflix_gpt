import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        traillerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTraillerVideo: (state, action) => {
            state.traillerVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTraillerVideo } = movieSlice.actions;
export default movieSlice.reducer;
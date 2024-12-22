import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        traillerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        airingTodayMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTraillerVideo: (state, action) => {
            state.traillerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addAiringTodayMovies: (state, action) => {
            state.airingTodayMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTraillerVideo, addPopularMovies, addTopRatedMovies, addAiringTodayMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
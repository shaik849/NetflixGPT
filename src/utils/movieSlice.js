import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        tailorVideo : null,
        trendingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
    addTailerVideo : (state, action) =>{
        state.tailorVideo = action.payload;
    },
    addTrendingMovies : (state, action) =>{
        state.trendingMovies = action.payload;
    }
    }
})

export const { addNowPlayingMovies, addTailerVideo, addTrendingMovies } = movieSlice.actions 

export default movieSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        tailorVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
    addTailerVideo : (state, action) =>{
        state.tailorVideo = action.payload;
    }
    }
})

export const { addNowPlayingMovies, addTailerVideo } = movieSlice.actions 

export default movieSlice.reducer
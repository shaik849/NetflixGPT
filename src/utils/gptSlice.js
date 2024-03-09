import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'GPT',
    initialState : {
        showGptSearch : false,
        movieResults : null,
        movieNames : null,
    },
    reducers : {
        toggleGptSearchView : (state, action) =>{
          state.showGptSearch = !state.showGptSearch
        },
        addGptMovies : (state, action) =>{
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView, addGptMovies} = gptSlice.actions

export default gptSlice.reducer
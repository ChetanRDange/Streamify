import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieslice"
import tvReducer from "./reducers/tvSlice.jsx";
import personReducer from "./reducers/personSlice";
import React from 'react';

export const store = configureStore({
    reducer :{
        movie:movieReducer,
        tv:tvReducer,
        person:personReducer,
    }
})

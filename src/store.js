import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './components/Slice'


export default configureStore({
    reducer:{
        color: colorReducer,
    },
})

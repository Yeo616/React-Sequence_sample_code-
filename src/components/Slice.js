import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
    name:"color",
    initialState:{
        backgroundColor:"black"
    },
    reducers:{
        success:(state) =>{
            state.backgroundColor = "green"
        },
        issue : (state) =>{
            state.backgroundColor = "orange"
        },
        error:(state)=>{
            state.backgroundColor = "red"
        },
    },
})

// Action creators are generated for each case reducer function
export const {success,issue,error} = colorSlice.actions

export default colorSlice.reducer
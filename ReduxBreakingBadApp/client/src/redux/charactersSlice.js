import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const char_limit=10;
export const fetchCharacters=createAsyncThunk('characters/getCharacters',async(page)=>{
    const res= await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?_page=${page}&_limit=${char_limit}`);
    return res.data
})

export const charactersSlice=createSlice({
    name:"characters",
    initialState:{
        items:[],
        status:'idle',
        page:0,
        hasNextPage:true
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCharacters.pending,(state,action)=>{
            state.status="loading"
        })
        builder.addCase(fetchCharacters.fulfilled,(state,action)=>{
            state.items=[...state.items, ...action.payload];
            state.status="succeeded"
            state.page+=1;
            if(action.payload.length<char_limit){
                state.hasNextPage=false
            }
        })
        builder.addCase(fetchCharacters.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message
        })
    }
})

export default charactersSlice.reducer;
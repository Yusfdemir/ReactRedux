import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText=createAsyncThunk("/textApp/fetchText",async(data)=>{
    console.log(data)
    const res=await axios(`https://baconipsum.com/api/?type=all-meat&paras=${data.number}&format=${data.type}`)
    return res.data
})

export const textAppSlice=createSlice({
    name:"textApp",
    initialState:{
        text:[],
        status:"idle",
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchText.pending,(state,action)=>{
            state.status="loading"
        })

        builder.addCase(fetchText.fulfilled,(state,action)=>{
            state.text=action.payload
            console.log('state.text', state.text)
            state.status="succeeded"
        })

        builder.addCase(fetchText.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})

export default textAppSlice.reducer;
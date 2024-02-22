import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTotalData= createAsyncThunk("/covid/gettotalData",async(country)=>{
    const res=await axios.get(`https://covid-api.com/api/reports/total`,{params:{
        ...(country && {iso:country} )
    }})
    return res.data?.data
})

export const getCountriesData= createAsyncThunk("/covid/getCountriesData",async()=>{
    const res=await axios.get(`https://covid-api.com/api/regions`,{params:{
        order:"name",
        sort:"asc"
    }})
    return res.data?.data
})

export const covidSlice=createSlice({
    name:"covid",
    initialState:{
        totalData:[],
        countriesData:[],
        stateOfTotatData:"idle",
        stateOfCountriesData:"idle",
        selectedCountry:"",
        errorOfTotal:null,
        errorOfCountries:null,
    },
    reducers:{
        setSelectedCountry:(state,action)=>{
            state.selectedCountry=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getTotalData.pending,(state,action)=>{
            state.stateOfTotatData="loading"
        })
        builder.addCase(getTotalData.fulfilled,(state,action)=>{
            state.totalData=action.payload
            state.stateOfTotatData="succeeded"
            console.log('state.totalData', state.totalData)
        })
        builder.addCase(getTotalData.rejected,(state,action)=>{
            state.stateOfTotatData="failed"
            state.errorOfTotal=action.error.message
        })
        builder.addCase(getCountriesData.pending,(state,action)=>{
            state.stateOfCountriesData="loading"
        })
        builder.addCase(getCountriesData.fulfilled,(state,action)=>{
            state.countriesData=action.payload
            state.stateOfCountriesData="succeeded"
        })
        builder.addCase(getCountriesData.rejected,(state,action)=>{
            state.stateOfCountriesData="failed"
            state.errorOfCountries=action.error.message
        })
    }
})
export const {setSelectedCountry}= covidSlice.actions
export default covidSlice.reducer;
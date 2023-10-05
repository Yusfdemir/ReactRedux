import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getProducts=createAsyncThunk("products/getProducts",async()=>{
    const res=await axios("http://localhost:3001/products")
    return res.data;
})
export const productsSlice=createSlice({
    name:"products",
    initialState:{
        items:[],
        orders:[],
        status:'idle',
        wealth:100000000000
    },
    reducers:{
        buyWealth:(state,action)=>{
            state.wealth-=action.payload.data.price
            let addedProduct=state.orders.find(order=>order.data.name===action.payload.data.name)
            if(addedProduct){
                addedProduct.amount=action.payload.amount
            }
            else{
                state.orders=[...state.orders,action.payload]
            }
        },
        sellWealth:(state,action)=>{
            state.wealth+=action.payload.data.price
            let addedProduct=state.orders.find(order=>order.data.name === action.payload.data.name)
            if(addedProduct){
                addedProduct.amount=action.payload.amount
                if(addedProduct.amount == 0){
                    state.orders=state.orders.filter(order=>order.data.name !== action.payload.data.name)
                }
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status="loading"
        })

        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.status="succeeded"
        })

        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message
        })
    }
})
export const numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

export const wealthSelector=state=>state.products.wealth
export const statusSelector=state=>state.products.status
export const productsSelector=state=>state.products.items
export const errorSelector=state=>state.products.error
export const ordersSelector=state=>state.products.orders
export const {buyWealth,sellWealth}=productsSlice.actions;

export default productsSlice.reducer;
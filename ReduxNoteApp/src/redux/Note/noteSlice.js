import {createSlice}from '@reduxjs/toolkit'
import {nanoid} from "nanoid"

export const noteSlice=createSlice({
    name:'noteApp',
    initialState:{
        notes:[
            {note:"note1",color:"primary",id:nanoid()},
            {note:"note2",color:"danger",id:nanoid()},
            {note:"note3",color:"success",id:nanoid()},
            {note:"note4",color:"warning",id:nanoid()},
            {note:"note5",color:"secondary",id:nanoid()},
        ],
        color:"primary"
    },
    reducers:{
        selectColor:(state,action)=>{
           state.color=action.payload
        },
        addNote:{
            reducer:(state,action)=>{
                state.notes.push(action.payload)
            },
            prepare:({note})=>{
                
                return{
                    payload:{
                        id:nanoid(),
                        //color:state.color,
                        note
                    }
                }
            }
        }
    }
})

export const {selectColor,addNote}=noteSlice.actions
export default noteSlice.reducer
import {createSlice}from '@reduxjs/toolkit'
import {nanoid} from "nanoid"

export const noteSlice=createSlice({
    name:'noteApp',
    initialState:{
        notes:[
            {note:"aaaa",color:"primary",id:nanoid()},
            {note:"bbbb",color:"danger",id:nanoid()},
            {note:"cccc",color:"success",id:nanoid()},
            {note:"note1",color:"warning",id:nanoid()},
            {note:"note2",color:"secondary",id:nanoid()},
        ],   
    },
    reducers:{
        addNote:{
            reducer:(state,action)=>{
                state.notes.push(action.payload)
            },
            prepare:({note,selectedColor})=>{
                return{
                    payload:{
                        id:nanoid(),
                        color:selectedColor,
                        note
                    }
                }
            }
        },
        deleteNote:(state,action)=>{
            const id=action.payload;
            const filtered=state.notes.filter(note=>note.id !== id)
            state.notes=filtered
        }
    }
})

export const {addNote,deleteNote}=noteSlice.actions
export default noteSlice.reducer
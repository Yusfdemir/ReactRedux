import {configureStore} from '@reduxjs/toolkit'
import noteSlice from './Note/noteSlice'

export const store = configureStore({
    reducer:{
        noteApp:noteSlice,
    }
})

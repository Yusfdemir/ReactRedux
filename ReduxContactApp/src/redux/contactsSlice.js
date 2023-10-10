import {createSlice,createEntityAdapter} from '@reduxjs/toolkit'

export const contactAdaptor=createEntityAdapter();
const initialState=contactAdaptor.getInitialState();

export const contactSelectors=contactAdaptor.getSelectors((state)=>state.contacts)

const contactsSlice=createSlice({
    name:'contacts',
    //initialState:contactAdaptor.getInitialState(),
    initialState,
    reducers:{
        addContact:contactAdaptor.addOne,
        addContacts:contactAdaptor.addMany,
        deleteContact:contactAdaptor.removeOne,
        removeAllContacs:contactAdaptor.removeAll,
        updateContact:contactAdaptor.updateOne,
    }
})

export const {addContact,addContacts,deleteContact,removeAllContacs,updateContact}=contactsSlice.actions;

export default contactsSlice.reducer;
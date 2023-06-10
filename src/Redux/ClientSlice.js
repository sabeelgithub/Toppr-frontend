import { createSlice } from "@reduxjs/toolkit";

const ClientSlice = createSlice({
    name:'client',
    initialState:{
        token:null,
        client:null
    },
    reducers:{
        ClientLogin:(state,action)=>{
            state.token = action.payload.token
            state.client= action.payload.client
        },
        ClientLogout:((state,action)=>{
            state.token = null
            state.client= null
           

        })

    }
})
export const {ClientLogin,ClientLogout} = ClientSlice.actions
export default  ClientSlice.reducer


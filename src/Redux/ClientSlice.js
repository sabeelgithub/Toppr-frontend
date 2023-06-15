import { createSlice } from "@reduxjs/toolkit";

const ClientSlice = createSlice({
    name:'client',
    initialState:{
        refreshToken:null,
        accessToken:null,
        client:null,
        purchased_domains:null
    },
    reducers:{
        ClientLogin:(state,action)=>{
            state.refreshToken = action.payload.refreshToken
            state.accessToken = action.payload.accessToken
            state.client= action.payload.client
            state.purchased_domains = action.payload.purchased_domains
        },
        DomainAdd:(state,action)=>{
           if (state.purchased_domains ){
            state.purchased_domains.push(action.payload.purchased_domains)
           }
           else{
            state.purchased_domains=[action.payload.purchased_domains]
           }
           
        },
        ClientLogout:(state,action)=>{
            state.refreshToken =  null
            state.accessToken = null
            state.client= null
            state.purchased_domains=null
           
        }

    }
})
export const {ClientLogin,ClientLogout,DomainAdd} = ClientSlice.actions
export default  ClientSlice.reducer


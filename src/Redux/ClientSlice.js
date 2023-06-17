import { createSlice } from "@reduxjs/toolkit";

const ClientSlice = createSlice({
    name:'client',
    initialState:{
        refreshToken:null,
        accessToken:null,
        client:null,
        purchased_domains:null,
        subscription:null
    },
    reducers:{
        ClientLogin:(state,action)=>{
            state.refreshToken = action.payload.refreshToken
            state.accessToken = action.payload.accessToken
            state.client= action.payload.client
            state.purchased_domains = action.payload.purchased_domains
            state.subscription = action.payload.subscription
        },
        DomainAdd:(state,action)=>{
           if (state.purchased_domains ){
            state.purchased_domains.push(action.payload.purchased_domains)
           }
           else{
            state.purchased_domains=[action.payload.purchased_domains]
           }
           
        },
        SubscribeAdd:(state,action)=>{
            if (state.subscription){
             state.subscription.push(action.payload.subscription)
            }
            else{
             state.subscription=[action.payload.subscription]
            }
            
         },
        ClientLogout:(state,action)=>{
            state.refreshToken =  null
            state.accessToken = null
            state.client= null
            state.purchased_domains=null
            state.subscription = null
           
        }

    }
})
export const {ClientLogin,ClientLogout,DomainAdd,SubscribeAdd} = ClientSlice.actions
export default  ClientSlice.reducer


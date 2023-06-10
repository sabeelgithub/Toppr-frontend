import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import ClientReducer from './ClientSlice'
import ExpertReducer from './ExpertSlice'
import AdminReducer from './AdminSlice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const PersistConfig = {key:'root',storage,version:1}

const reducer = combineReducers({

    ClientReducer,
    ExpertReducer,
    AdminReducer

})

const PersistReducer = persistReducer(PersistConfig,reducer)

export const store = configureStore({
    reducer:PersistReducer
})

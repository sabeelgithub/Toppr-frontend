import { createSlice } from "@reduxjs/toolkit";


const ExpertSlice = createSlice({
    name: 'expert',
    initialState: {
        // token: null,
        refreshToken:null,
        accessToken:null,
        expert: null
    },
    reducers: {
        ExpertLogin: (state, action) => {
            state.refreshToken = action.payload.refreshToken
            state.accessToken = action.payload.accessToken
            state.expert = action.payload.expert
        },
        ExpertLogout: (state, action) => {
            state.refreshToken = null
            state.accessToken = null
            state.expert = null
        }

    }

})
export const { ExpertLogin, ExpertLogout } = ExpertSlice.actions
export default ExpertSlice.reducer
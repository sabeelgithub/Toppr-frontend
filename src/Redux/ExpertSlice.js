import { createSlice } from "@reduxjs/toolkit";


const ExpertSlice = createSlice({
    name: 'expert',
    initialState: {
        token: null,
        expert: null
    },
    reducers: {
        ExpertLogin: (state, action) => {
            state.token = action.payload.token
            state.expert = action.payload.expert
        },
        ExpertLogout: (state, action) => {
            state.token = null;
            state.expert = null
        }

    }

})
export const { ExpertLogin, ExpertLogout } = ExpertSlice.actions
export default ExpertSlice.reducer
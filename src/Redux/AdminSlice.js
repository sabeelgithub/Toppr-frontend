import { createSlice } from "@reduxjs/toolkit";


const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
        token: null,
        admin: null
    },
    reducers: {
        AdminLogin: (state, action) => {
            state.token = action.payload.token;
            state.admin = action.payload.admin
        },
        AdminLogout: (state, action) => {
            state.admin = null;
            state.token = null

        }

    }
})
export const { AdminLogin, AdminLogout } = AdminSlice.actions
export default AdminSlice.reducer
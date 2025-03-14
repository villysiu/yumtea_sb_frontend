import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLink} from "../../app/global";
import {fetchCurrentUser, loginUser, logoutUser} from "../user/userSlice";



export const fetchCurrentAdmin=createAsyncThunk(
    'user/fetchCurrentAdmin',
    async (_, {rejectWithValue}) => {
        console.log("fetching current admin ")

        try {
            const response=await fetch(`${apiLink}/resource/admin`, {
                method: "GET",
                credentials: 'include'
            })

            if(!response.ok) {
                return rejectWithValue(response.status);
            }
            return await response.json()


        }
        catch(error){
            console.log(error)
            // localStorage.clear()
            return rejectWithValue(error.message);
        }
    }
)
export const loginAdmin=createAsyncThunk(

    'admin/loginAdmin',
    async (userInfo, { rejectWithValue} ) =>{

        console.log(userInfo)
        // {
        // 	"email": "springuser@gg.com",
        // 	"password": "password"
        // }

        try {
            const response=await fetch(`${apiLink}/auth/adminLogin`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',

                },
                'body': JSON.stringify(userInfo),
                credentials: 'include'

            })

            if(!response.ok) {
                return rejectWithValue(response.status);
            }
            return await response.json()

        }
        catch( error){
            console.log(error)
            return rejectWithValue(error);
        }
    }
)
export const logoutAdmin=createAsyncThunk(
    'user/logoutAdmin',
    async (_, {rejectWithValue}) =>{
        console.log("in lougout redux")
        try {
            const response=await fetch(`${apiLink}/auth/logout`, {
                'method': "POST",
                credentials: 'include',


            })

            if(!response.ok) {
                return rejectWithValue(response.status);
            }

            return null

        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
const adminSlice=createSlice({
    name: 'admin',
    initialState: {

        currentAdmin: null,
        fetchAdminStatus: 'idle',
        loginStatus: 'idle',
        logoutStatus: 'idle',
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCurrentAdmin.pending, (state, action) => {
                state.fetchAdminStatus = 'loading'
            })
            .addCase(fetchCurrentAdmin.fulfilled, (state, action) => {
                console.log(action.payload)

                state.currentAdmin= action.payload
                state.fetchAdminStatus = 'succeeded'
                state.loginStatus = 'succeeded'
                state.logoutStatus = 'idle'
            })
            .addCase(fetchCurrentAdmin.rejected, (state, action) => {
                // DO NOTHING WHEN NO CURRENT USER
                state.currentAdmin = null;
                state.fetchAdminStatus = 'failed';
                state.loginStatus = 'idle';
                state.logoutStatus = 'idle';

            })

            .addCase(loginAdmin.pending, (state, action) => {
                state.loginStatus = 'loading'
                state.logoutStatus = 'idle'
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                console.log(action.payload)
                state.currentAdmin = action.payload
                state.fetchAdminStatus = 'succeeded'
                state.loginStatus = 'succeeded'


            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loginStatus = 'failed'
            })

            .addCase(logoutAdmin.pending, (state, action) => {
                state.logoutStatus = 'loading'
            })
            .addCase(logoutAdmin.fulfilled, (state, action) => {
                state.currentAdmin = null;
                // state.fetchUserStatus = 'idle';
                state.loginStatus = 'idle';
                state.logoutStatus = 'succeeded';
            })
            .addCase(logoutAdmin.rejected, (state, action) => {
                state.logoutStatus = 'failed'

            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.currentAdmin = null
                state.fetchAdminStatus = null
                state.loginStatus = 'idle'


            })
    }
})
// export const {  } = userSlice.actions
export default adminSlice.reducer

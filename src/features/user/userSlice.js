import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
export const fetchCurrentUser=createAsyncThunk(
    'user/fetchCurrentUser',
    async () => {
        console.log("in fetching???")
        
        try {
            const response=await fetch(`${apiLink}/resource/user`, {
                method: "GET",
                credentials: 'include'
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            
            return data
        } 
        catch(error){
            console.log(error)
            // localStorage.clear()
            return Promise.reject(error);
        }
    }
)
export const loginUser=createAsyncThunk(
    'user/loginUser',
    async (userInfo, thunkAPI ) =>{
        
        console.log(userInfo)
        // {
        // 	"email": "springuser@gg.com",
        // 	"password": "password"
        // }

        try {
            const response=await fetch(`${apiLink}/auth/login`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',

                },
                'body': JSON.stringify(userInfo),
                credentials: 'include'

            })

            if(!response.ok) {
                console.log(response.status, " ", response.statusText)
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const data=await response.json()
            console.log(data)

            return data

        }
        catch(error){
            // return Promise.reject(error.message)
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async () =>{
        console.log("in lougout redux")
        try {
            const response=await fetch(`${apiLink}/auth/logout`, {
                'method': "POST",
                // 'headers': {
                //     'content-type': 'application/json',
                //     // "Authorization": `Token ${localStorage.getItem("token")}`,
                // },
                credentials: 'include',
            
   
            })
            
            if(!response.ok) 
                throw new Error(`${response.status} ${response.statusText}`)
            console.log(response)

            return null
            
        } 
        catch(error){
            return Promise.reject(error.message)
        }
    }
)
const userSlice=createSlice({
    name: 'user',
    initialState: {
        // current_user: {
        //     email: null,
        //     nickname: null,
        // },
        current_user: null,
        fetch_user_status: 'idle',
        login_status: 'idle',
        logout_status: 'idle',
        signup_status:'idle'
    },
    reducers: {
        // logout: (state) => {
        //     state.current_user = null
        //     state.logout_status = 'succeeded'
        //     state.currUser.error = null
        //   },
        // resetUserStatus: (state) => {
        //
        //     state.current_user.status = 'idle'
        // }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUser.pending, (state, action) => {
            state.fetch_user_status = 'loading'
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            // console.log(action.payload)
            
            state.current_user = action.payload
            state.fetch_user_status = 'succeeded'
            state.login_status = 'succeeded'
            state.logout_status = 'idle'
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
            // DO NOTHING WHEN NO CURRENT USER
            state.fetch_user_status = 'failed'
        })

        .addCase(loginUser.pending, (state, action) => {
            state.login_status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.login_status = 'succeeded'
            state.fetch_user_status = 'succeeded'
            state.current_user=action.payload
            state.logout_status = 'idle'

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.login_status = 'failed'
        })

        .addCase(logoutUser.pending, (state, action) => {
            state.logout_status = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.logout_status = 'succeeded';
            state.login_status = 'idle';
            state.fetch_user_status = 'idle'
            state.current_user=null;
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.logout_status = 'failed'
            
        })
    }
})
export const { resetUserStatus } = userSlice.actions
export default userSlice.reducer
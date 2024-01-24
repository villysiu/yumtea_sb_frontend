import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
export const fetchCurrentUser=createAsyncThunk(
    'user/fetchCurrentUser',
    async () => {
        console.log("in fetching???")
        
        try {
            const response=await fetch(`${apiLink}/auth/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                },
            })

            if(!response.ok) {
                console.log(response)
                // remove incorrect token from localstorage
                localStorage.clear()
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            
            // timeOutUser2(data.curr_user.login, thunkAPI)
            return data
        } 
        catch(error){
            console.log(error)
            localStorage.clear()
            return Promise.reject(error);
        }
    }
)
export const loginUser=createAsyncThunk(
    'user/loginUser',
    async (userInfo, thunkAPI ) =>{
        
        console.log(userInfo)
        // { 'username': 'danielle', 'password': 'mpassword3@!' }

        try {
            const response=await fetch(`${apiLink}/auth/token/login/`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    
                },
                'body': JSON.stringify(userInfo)
   
            })
            
            if(!response.ok) 
                throw new Error(`${response.status} ${response.statusText}`)
            
            const data=await response.json()
            console.log(data)

            localStorage.setItem('token', data.auth_token)
            thunkAPI.dispatch(fetchCurrentUser())
            
            return data.auth_token
            
        } 
        catch(error){
            return Promise.reject(error.message)
        }
    }
)
export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async () =>{
        console.log("in lougout redux")
        try {
            const response=await fetch(`${apiLink}/auth/token/logout/`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                },
            
   
            })
            
            if(!response.ok) 
                throw new Error(`${response.status} ${response.statusText}`)
            console.log(response)
            
            console.log("clear storgae")
            localStorage.clear()
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

        current_user: {
            username: null,
            email: null,
            id: null,
            status: 'idle',
            
        },
        token: {
            status: 'idle',
            
        }

       
        
    },
    reducers: {
        // logout: (state) => {
        //     state.currUser.currUser = null
        //     state.currUser.status = 'idle'
        //     state.currUser.error = null   
        //   },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUser.pending, (state, action) => {
            state.current_user.status = 'loading'
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            // console.log(action.payload)
            
            state.current_user = action.payload
            state.current_user.status = 'succeeded'
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
            // DO NOTHING WHEN NO CURRENT USER
            state.current_user.status = 'failed'
        })
        .addCase(loginUser.pending, (state, action) => {
            state.token.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.token.status = 'succcess'


        })
        .addCase(loginUser.rejected, (state, action) => {
            state.token.status = 'failed'
            
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.token.status = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.token.status = 'idle'
            state.current_user={
                username: null,
                status: 'idle',
                error: null,    
            }
            

        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.token.status = 'failed'
            
        })
    }
})
// export const { logout } = usersSlice.actions
export default userSlice.reducer
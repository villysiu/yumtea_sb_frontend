import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
export const fetchCurrentUser=createAsyncThunk(
    'user/fetchCurrentUser',
    async () => {
        console.log("fetching current login user")
        
        try {
            const response=await fetch(`${apiLink}/resource/user`, {
                method: "GET",
                credentials: 'include'
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            console.log("user is herer not expored?")
            return await response.json()
            

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
    async (userInfo, { rejectWithValue} ) =>{
        
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
            return rejectWithValue(error.message);
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
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userInfo) => {
        console.log(userInfo)
        try{
            const response = await fetch(`${apiLink}/auth/signup`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',

                },
                'body': JSON.stringify(userInfo),
                credentials: 'include'
            })
            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            // const data=await response.json()
            // console.log(data)
            console.log(`${response.status} ${response.statusText}`)

            return null
        } catch(error){
            return Promise.reject(error.message)
        }
    }
)
const userSlice=createSlice({
    name: 'user',
    initialState: {

        currentUser: null,
        fetchUserStatus: 'idle',
        loginStatus: 'idle',
        logoutStatus: 'idle',
        registerStatus:'idle',
        expires: null

    },
    reducers: {
        // logout: (state) => {
        //     state.current_user = null
        //     state.logout_status = 'succeeded'
        //     state.currUser.error = null
        //   },
        removeUser: (state) => {
             console.log('removing??')
            state.currentUser = null
            state.fetchUserStatus = 'idle'
            state.loginStatus = 'idle'

        }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUser.pending, (state, action) => {
            state.fetchUserStatus = 'loading'
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            // console.log(action.payload)

            state.currentUser= {
                nickname: action.payload.nickname,
                email: action.payload.email
            }
            state.expires = action.payload.expires;
            state.fetchUserStatus = 'succeeded'
            state.loginStatus = 'succeeded'
            state.logoutStatus = 'idle'
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
            // DO NOTHING WHEN NO CURRENT USER
            state.fetchUserStatus = 'failed'
            state.currentUser = null
            state.expires = null
            state.loginStatus = 'idle'
            state.logoutStatus = 'idle'
        })

        .addCase(loginUser.pending, (state, action) => {
            state.loginStatus = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loginStatus = 'succeeded'
            // state.fetchUserStatus = 'succeeded'
            // state.currentUser= {
            //     nickname: action.payload.nickname,
            //     email: action.payload.email
            // }
            // state.expires = action.payload.expires;
            state.logoutStatus = 'idle'

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loginStatus = 'failed'
        })

        .addCase(logoutUser.pending, (state, action) => {
            state.logoutStatus = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.logoutStatus = 'succeeded';
            state.loginStatus = 'idle';
            state.fetchUserStatus = 'idle'
            state.currentUser=null;
            state.expires = null
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.logoutStatus = 'failed'
            
        })
          .addCase(registerUser.pending, (state, action) => {
              state.registerStatus = 'loading'
          })
          .addCase(registerUser.fulfilled, (state, action) => {
              state.registerStatus = 'succeeded';
              // state.loginStatus = 'idle';
              // state.fetchUserStatus = 'idle'
              // state.currentUser=null;
          })
          .addCase(registerUser.rejected, (state, action) => {
              state.registerStatus = 'failed'

          })
    }
})
export const { removeUser } = userSlice.actions
export default userSlice.reducer
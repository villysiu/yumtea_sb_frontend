import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCurrentUser=createAsyncThunk(
    'user/fetchCurrentUser',
    async (token, thunkAPI) => {
        console.log("in fetching???")
        console.log(`Token ${token}`)
        try {
            const response=await fetch("http://127.0.0.1:8000/auth/users/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Token ${localStorage.getItem("token")}`,
                    "Authorization": `Token ${token}`,
                    // "Authorization": 'Token 9fa98cb2924d5888174b744360d06f14f6be724c'
                },
                // mode: "no-cors",
                
    
            })

            if(!response.ok) {
                console.log(response)
                // remove incorrect token from localstorage
                localStorage.clear()
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            console.log(data)
            // timeOutUser2(data.curr_user.login, thunkAPI)
            return { 
                ...data
            }
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
            const response=await fetch('http://127.0.0.1:8000/auth/token/login/', {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                'body': JSON.stringify(userInfo)
   
            })
            
            if(!response.ok) 
                throw new Error(`${response.status} ${response.statusText}`)
            
            const data=await response.json()
            console.log(data)

            localStorage.setItem('token', data.auth_token)
            thunkAPI.dispatch(fetchCurrentUser(data.auth_token))
            return data.auth_token
            
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
            status: 'idle',
            error: null,    
        },
        token: {
            status: 'idle',
            
        }
        // user: {
        //     error: null,
        //     user: null,
        //     status: 'idle',
        // },
        // email: {
        //     error: null,
        //     existed: 0,
        //     status: 'idle',
        // }, 
       
        
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
            console.log(action.payload)
            state.current_user.status = 'succeeded'
            state.current_user.username = action.payload.username
            // state.current_user.id = action.payload.id
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
            //reset status to idle so it can fetch current user in useEffect
            state.token.status = 'succcess'
            state.token.error = null

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.token.status = 'failed'
            state.token.error = action.error.message
        })
    }
})
// export const { logout } = usersSlice.actions
export default userSlice.reducer
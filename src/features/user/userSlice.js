import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {fetchCurrentUserOrders} from "../order/orderSlice";
import {addItemToCart, fetchCart, removeItemFromCart, updateItemInCart} from "../cart/cartSlice";
export const fetchCurrentUser=createAsyncThunk(
    'user/fetchCurrentUser',
    async (_, {rejectWithValue}) => {
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
            return rejectWithValue(error.message);
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

            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return await response.json()

        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async (_, {rejectWithValue}) =>{
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
            return rejectWithValue(error.message);
        }
    }
)
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userInfo, {rejectWithValue}) => {
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

            return null;

        } catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const updateUser = createAsyncThunk(
    'user/update',
    async(userInfo, {rejectWithValue}) =>{
        try{
            console.log("ipfate?")
            const response = await fetch(`${apiLink}/resource/user`, {
                'method': "PATCH",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json'

                },
                'body': JSON.stringify(userInfo),
                credentials: 'include'
            })
            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return await response.json();

        } catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const updatePassword = createAsyncThunk(
    'user/updatePassword',
    async(userPassword, {rejectWithValue}) =>{
        try{
            console.log("updatePassword?")
            const response = await fetch(`${apiLink}/resource/updatePassword`, {
                'method': "PATCH",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json'

                },
                'body': JSON.stringify(userPassword),
                credentials: 'include'
            })
            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            // return await response.json();

        } catch(error){
            return rejectWithValue(error.message);
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
        updateStatus: 'idle'
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
            console.log(action.payload)

            state.currentUser= action.payload
            state.fetchUserStatus = 'succeeded'
            state.loginStatus = 'succeeded'
            state.logoutStatus = 'idle'
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
            // DO NOTHING WHEN NO CURRENT USER
            state.currentUser = null;
            state.fetchUserStatus = 'failed';
            state.loginStatus = 'idle';
            state.logoutStatus = 'idle';
            state.registerStatus = 'idle';
            state.updateStatus = 'idle';
        })

        .addCase(loginUser.pending, (state, action) => {
            state.loginStatus = 'loading'
            state.registerStatus = 'idle'
            state.logoutStatus = 'idle'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload
            state.fetchUserStatus = 'succeeded'
            state.loginStatus = 'succeeded'


        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loginStatus = 'failed'
        })

        .addCase(logoutUser.pending, (state, action) => {
            state.logoutStatus = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.currentUser = null;
            state.fetchUserStatus = 'idle';
            state.loginStatus = 'idle';
            state.logoutStatus = 'succeeded';
            state.registerStatus = 'idle';
            state.updateStatus = 'idle';
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.logoutStatus = 'failed'
            
        })
          .addCase(registerUser.pending, (state, action) => {
              state.registerStatus = 'loading'
          })
          .addCase(registerUser.fulfilled, (state, action) => {
              state.registerStatus = 'succeeded';
          })
          .addCase(registerUser.rejected, (state, action) => {
              state.registerStatus = 'failed'

          })


          .addCase(updateUser.pending, (state, action) => {
              state.updateStatus = 'loading'
          })
          .addCase(updateUser.fulfilled, (state, action) => {
              console.log(action.payload)
              state.updateStatus = 'succeeded';
              state.currentUser = action.payload;

          })
          .addCase(updateUser.rejected, (state, action) => {
              state.updateStatus = 'failed'

          })

          .addCase(updatePassword.pending, (state, action) => {
              state.updateStatus = 'loading'
          })
          .addCase(updatePassword.fulfilled, (state, action) => {
              state.updateStatus = 'succeeded';
              // state.currentUser = action.payload;

          })
          .addCase(updatePassword.rejected, (state, action) => {
              state.updateStatus = 'failed'

          })
        .addCase(addItemToCart.rejected, (state, action) => {
            console.log(action.payload)
            if(action.payload === 401){

                state.currentUser = null;
                state.fetchUserStatus = 'idle';
                state.loginStatus = 'idle';
            }

            // state.currentUser = null;
            // state.fetchUserStatus = 'idle';
            // state.loginStatus = 'idle';
            // state.logoutStatus = 'idle';
            // state.registerStatus = 'idle';
            // state.updateStatus = 'idle';
        })


    }
})
export const { removeUser } = userSlice.actions
export default userSlice.reducer


// .addCase(fetchCurrentUserOrders.rejected, (state, action) => {
//     state.currentUser = null;
//     state.fetchUserStatus = 'idle';
//     state.loginStatus = 'idle';
//     state.logoutStatus = 'idle';
//     state.registerStatus = 'idle';
//     state.updateStatus = 'idle';
// })
// .addCase(fetchCart.rejected, (state, action) => {
//     state.currentUser = null;
//     state.fetchUserStatus = 'idle';
//     state.loginStatus = 'idle';
//     state.logoutStatus = 'idle';
//     state.registerStatus = 'idle';
//     state.updateStatus = 'idle';
// })
//
// .addCase(addItemToCart.rejected, (state, action) => {
//     state.currentUser = null;
//     state.fetchUserStatus = 'idle';
//     state.loginStatus = 'idle';
//     state.logoutStatus = 'idle';
//     state.registerStatus = 'idle';
//     state.updateStatus = 'idle';
// })
//
// .addCase(removeItemFromCart.rejected, (state, action) => {
//     state.currentUser = null;
//     state.fetchUserStatus = 'idle';
//     state.loginStatus = 'idle';
//     state.logoutStatus = 'idle';
//     state.registerStatus = 'idle';
//     state.updateStatus = 'idle';
// })
//
// .addCase(updateItemInCart.rejected, (state, action) => {
//     state.currentUser = null;
//     state.fetchUserStatus = 'idle';
//     state.loginStatus = 'idle';
//     state.logoutStatus = 'idle';
//     state.registerStatus = 'idle';
//     state.updateStatus = 'idle';
// })
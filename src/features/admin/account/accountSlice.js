import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink} from "../../../app/global";

export const fetchAccounts=createAsyncThunk(
    'account/fetchAccounts',
    async (_, {rejectWithValue}) => {
        console.log("fetching accounts")

        try {
            const response=await fetch(`${apiLink}/`, {
                method: "GET",
                credentials: 'include'
            })

            if(!response.ok) {
                return response;
            }

            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)

// export const deleteAccount=createAsyncThunk(
//     'account/deleteAccount',
//     async (_, {rejectWithValue}) =>{
//         console.log("in lougout redux")
//         try {
//             const response=await fetch(`${apiLink}/auth/logout`, {
//                 'method': "POST",
//                 // 'headers': {
//                 //     'content-type': 'application/json',
//                 //     // "Authorization": `Token ${localStorage.getItem("token")}`,
//                 // },
//                 credentials: 'include',
//
//
//             })
//
//             if(!response.ok)
//                 throw new Error(`${response.status} ${response.statusText}`)
//             console.log(response)
//
//             return null
//
//         }
//         catch(error){
//             return rejectWithValue(error.message);
//         }
//     }
// )
export const updateAccount = createAsyncThunk(
    'account/updateAccount',
    async(userInfo, {rejectWithValue}) => {
        console.log(userInfo)
        try{
            const response = await fetch(`${apiLink}/auth/signup`, {
                'method': "PATCH",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',

                },
                'body': JSON.stringify(userInfo),
                credentials: 'include'
            })
            if(!response.ok)
                return response

            return null;

        } catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const accountSlice=createSlice({
    name: 'account',
    initialState: {

        accounts: [],
        fetchAccountsStatus: 'idle',
        updateStatus: 'idle',
        deleteStatus: 'idle',
    },
    reducers: {


    },
    extraReducers(builder) {
        builder
            .addCase(fetchAccounts.pending, (state, action) => {
                state.fetchAccountsStatus = 'loading'
            })
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.accounts= action.payload
                state.fetchAccountsStatus = 'succeeded'
            })
            .addCase(fetchAccounts.rejected, (state, action) => {
                // DO NOTHING WHEN NO CURRENT USER
                state.accounts = [];
                state.fetchAccountsStatus = 'failed';

            })

            .addCase(updateAccount.pending, (state, action) => {
                state.updateStatus = 'loading'

            })
            .addCase(updateAccount.fulfilled, (state, action) => {
                state.updateStatus = 'succeeded'
                state.fetchAccountsStatus = 'idle'


            })
            .addCase(updateAccount.rejected, (state, action) => {
                state.updateStatus = 'failed'
            })

            // .addCase(deleteAccount.pending, (state, action) => {
            //     state.deleteStatus = 'loading'
            // })
            // .addCase(deleteAccount.fulfilled, (state, action) => {
            //     state.deleteStatus = 'idle';
            //     state.fetchAccountsStatus = 'idle'
            // })
            // .addCase(deleteAccount.rejected, (state, action) => {
            //     state.deleteStatus = 'failed'
            //
            // })




    }
})
export const {  } = accountSlice.actions
export default accountSlice.reducer

const selectAccounts = state => state.account.accounts;
const selectId = (state, id) => id;
const selectText = (state, text) => text

export const getAccountById =createSelector(
    [selectAccounts, selectId],
    (accounts, id) => {
        return accounts.find(a=>a.id === id)
    }
)
export const searchAccount = createSelector(
    [selectAccounts, selectText],
    (accounts, text) => {
        if(text === "")
            return accounts

        const regex = new RegExp(text, "i");
        return accounts.filter(account=>regex.test(account.email.toLowerCase()) || account.id===parseInt(text))
    }
)


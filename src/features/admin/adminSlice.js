import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLink} from "../../app/global";
import {fetchCurrentUser, loginUser, logoutUser} from "../user/userSlice";

export const addMenuitem = createAsyncThunk(
    'admin/addMenuitem',
    async (newMenuitem,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(newMenuitem),
                credentials: 'include'
            })

            if(!response.ok) {
                console.log(response)
                return response
            }
            return await response.json();


        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)



const adminSlice=createSlice({
    name: 'admin',
    initialState: {
        addMenuitemStatus: 'idle'

    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(addMenuitem.pending, (state, action) => {
                state.addMenuitemStatus = 'loading'
            })
            .addCase(addMenuitem.fulfilled, (state, action) => {
                console.log(action.payload)
                state.addMenuitemStatus = 'succeeded'
            })
            .addCase(addMenuitem.rejected, (state, action) => {
                state.addMenuitemStatus = 'failed';
            })


    }
})
// export const {  } = userSlice.actions
export default adminSlice.reducer

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
export const deleteMenuitem = createAsyncThunk(
    'admin/deleteMenuitem',
    async (id,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${id}`, {
                method: "DELETE",
                credentials: 'include'
            })

            if(!response.ok) {
                console.log(response)
                return response
            }
            return null


        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)
export const updateMenuitem = createAsyncThunk(
    'admin/updateMenuitem',
    async (editMenuitem,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${editMenuitem.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(editMenuitem),
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
// json content-type cant have a file appended to it. For APIs its better to separately do a file upload, then use the path to the file (or the disk and file name) for relating the resource to the file
export const uploadImage = createAsyncThunk(
    'admin/uploadImage',
    async (formData,{rejectWithValue}) => {
        console.log(formData)
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        try {
            const response=await fetch(`${apiLink}/menuitem/img/${formData.get('id')}`, {
                method: "POST",
                // headers: {
        //             // "Content-Type": "application/json",
        //             // 'accept': 'application/json',
        //             'enctype':"multipart/form-data"
        //
        // },
                body: formData,
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error uploading image:", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();

        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)

export const deleteImage = createAsyncThunk(
    'admin/deleteImage',
    async (id,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/img/${id}`, {
                method: "DELETE",
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error deleting image:", errorText);
                return rejectWithValue(errorText);
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
        addMenuitemStatus: 'idle',
        deleteMenuitemStatus: 'idle',
        updateMenuitemStatus: 'idle',
        updateImgStatus: 'idle'

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

            .addCase(deleteMenuitem.pending, (state, action) => {
                state.deleteMenuitemStatus = 'loading'
            })
            .addCase(deleteMenuitem.fulfilled, (state, action) => {

                state.deleteMenuitemStatus = 'succeeded'
            })
            .addCase(deleteMenuitem.rejected, (state, action) => {
                state.deleteMenuitemStatus = 'failed';
            })

            .addCase(updateMenuitem.pending, (state, action) => {
            state.updateMenuitemStatus = 'loading'
        })
            .addCase(updateMenuitem.fulfilled, (state, action) => {
                console.log(action.payload)
                state.updateMenuitemStatus = 'succeeded'
            })
            .addCase(updateMenuitem.rejected, (state, action) => {
                state.updateMenuitemStatus = 'failed';
            })

            .addCase(uploadImage.pending, (state, action) => {
                state.updateImgStatus = 'loading'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {

                state.updateImgStatus = 'succeeded'
                // "blob:http://127.0.0.1:8001/be663c6a-d6d2-42be-a5cf-a1b30f6bb585"
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.updateImgStatus = 'failed';
            })

            .addCase(deleteImage.pending, (state, action) => {
                state.updateImgStatus = 'loading'
            })
            .addCase(deleteImage.fulfilled, (state, action) => {

                state.updateImgStatus = 'succeeded'
                // "blob:http://127.0.0.1:8001/be663c6a-d6d2-42be-a5cf-a1b30f6bb585"
            })
            .addCase(deleteImage.rejected, (state, action) => {
                state.updateImgStatus = 'failed';
            })

    }
})
// export const {  } = userSlice.actions
export default adminSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
export const fetchCategories=createAsyncThunk(
    'wine/fetchCategories',
    async () => {
        try {
            const response=await fetch(`${apiLink}/categories`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            // console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}
            
            return data
            
        } 
        catch(error){
            // console.log('error')
            return Promise.reject("category grab err");
        }
    }
)
export const fetchWines=createAsyncThunk(
    'wine/fetchWines',
    async () => {
        try {
            const response=await fetch(`${apiLink}/menuitems`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            
            return data
        } 
        catch(error){
            // console.log('error')
            return Promise.reject("category grab err");
        }
    }
)
const wineSlice=createSlice({
    name: 'wine',
    initialState: {
        category: {
            category_arr: [],
            status: 'idle',
             
        },
        wines: {
            wine_arr: [],
            status: 'idle',
        }, 
    },
    reducers: {

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCategories.pending, (state, action) => {
            state.category.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.category.status = 'succeeded'
            state.category.category_arr = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.category.status = 'failed'
        })

        .addCase(fetchWines.pending, (state, action) => {
            state.wines.status = 'loading'
        })
        .addCase(fetchWines.fulfilled, (state, action) => {
           
            state.wines.status = 'succeeded'
            state.wines.wine_arr = action.payload
            // state.current_user.id = action.payload.id
        })
        .addCase(fetchWines.rejected, (state, action) => {
            
            state.wines.status = 'failed'
        })
       
    }
})

export default wineSlice.reducer
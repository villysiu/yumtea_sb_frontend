import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const fetchCategories=createAsyncThunk(
    'menuitem/fetchCategories',
    async () => {
        try {
            const response=await fetch(`${apiLink}/api/categories`, {
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
            return Promise.reject(error);
        }
    }
)
export const fetchMenuitems=createAsyncThunk(
    'menuitem/fetchMenuitems',
    async () => {
        console.log("feting menuitems")
        try {
            const response=await fetch(`${apiLink}/api/menuitems`, {
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
            console.log("i m in error fetching menu items")
            return Promise.reject(error);
        }
    }
)
export const fetchMilks=createAsyncThunk(
    'menuitem/fetchMilks',
    async () => {
        try {
            const response=await fetch(`${apiLink}/api/milks`, {
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
            return Promise.reject(error);
        }
    }
)
const menuitemSlice=createSlice({
    name: 'menuitem',
    initialState: {
        category: {
            array: [],
            status: 'idle',
             
        },
        milk: {
            array: [],
            status: 'idle',
             
        },
        menuitems: {
            array: [],
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
            state.category.array = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.category.status = 'failed'
        })

        .addCase(fetchMenuitems.pending, (state, action) => {
            state.menuitems.status = 'loading'
        })
        .addCase(fetchMenuitems.fulfilled, (state, action) => {
           
            state.menuitems.status = 'succeeded'
            state.menuitems.array = action.payload
        })
        .addCase(fetchMenuitems.rejected, (state, action) => {
            
            state.menuitems.status = 'failed'
        })

        .addCase(fetchMilks.pending, (state, action) => {
            state.milk.status = 'loading'
        })
        .addCase(fetchMilks.fulfilled, (state, action) => {
            state.milk.status = 'succeeded'
            state.milk.array = action.payload
        })
        .addCase(fetchMilks.rejected, (state, action) => {
            state.milk.status = 'failed'
        })
       
    }
})

export default menuitemSlice.reducer

export const getMenuitemById = (state, id) =>{
    return state.menuitem.menuitems.array.find(menuitem => menuitem.pk === id)
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLink} from "../../app/global";



export const fetchSalesByMenuitem=createAsyncThunk(
    'admin/fetchSalesByMenuitem',
    async (count, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/query/allSales`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                },
                credentials: "include"
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchMilkBySales=createAsyncThunk(
    'admin/fetchMilkBySales',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/query/milk`, {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                //     'accept': 'application/json'
                // }
                credentials: "include"
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const adminSlice=createSlice({
    name: 'admin',
    initialState: {
        salesByMenuitem: [],
        fetchSalesByMenuitemStatus: 'idle',

        milkBySales: [],
        fetchMilkBySalesStatus: 'idle',
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchSalesByMenuitem.pending, (state, action) => {
                state.fetchSalesByMenuitemStatus = 'loading'
            })
            .addCase(fetchSalesByMenuitem.fulfilled, (state, action) => {
                state.fetchSalesByMenuitemStatus = 'succeeded'
                state.salesByMenuitem = action.payload
            })
            .addCase(fetchSalesByMenuitem.rejected, (state, action) => {
                state.fetchSalesByMenuitemStatus = 'failed'
                // state.orders = []
            })
            .addCase(fetchMilkBySales.pending, (state, action) => {
                state.fetchMilkBySalesStatus = 'loading'
            })
            .addCase(fetchMilkBySales.fulfilled, (state, action) => {
                state.fetchMilkBySalesStatus = 'succeeded'
                state.milkBySales = action.payload
            })
            .addCase(fetchMilkBySales.rejected, (state, action) => {
                state.fetchMilkBySalesStatus = 'failed'
                // state.orders = []
            })



    }
})
// export const {  } = userSlice.actions
export default adminSlice.reducer

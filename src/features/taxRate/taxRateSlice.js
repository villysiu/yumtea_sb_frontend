import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiLink} from "../../app/global";
import {useSelector} from "react-redux";
import {getSubtotal} from "../cart/cartSlice";

export const fetchTaxRate = createAsyncThunk(
    'order/fetchTaxRate',
    async(zip, {rejectWithValue}) => {
        try{
            const response = await fetch(`${apiLink}/taxes/${zip}`, {
                method: "GET",
                // credential: "include"
            })
            if(!response.ok)
                throw new Error(`Server error: ${response.status} ${response.statusText}`);

            const data = await response.json();
            console.log(data)
            return data
        }
        catch(error){
            rejectWithValue(error.message);
        }
    }
)
const taxRateSlice=createSlice({
    name: 'taxRate',
    initialState: {
        taxRate: 0.0,
        fetchTaxRateStatus: 'idle'
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTaxRate.pending, (state, action) => {
                state.fetchTaxRateStatus = 'loading'
            })
            .addCase(fetchTaxRate.fulfilled, (state, action) => {

                console.log(action.payload)
                state.fetchTaxRateStatus = 'succeeded'
                state.taxRate = action.payload;
            })
            .addCase(fetchTaxRate.rejected, (state, action) => {
                state.fetchTaxRateStatus = 'failed'
            })


    }
})
// export const {  } = taxRateSlice.actions
export default taxRateSlice.reducer

export const calculateTax = (state, subtotal) =>{
    return subtotal * state.taxRate.taxRate / 100;
}
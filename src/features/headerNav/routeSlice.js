import { CheckoutCart } from "../order/orderSlice";
import { createSlice } from "@reduxjs/toolkit";

const routeSlice=createSlice({
    name: 'route',
    initialState: {
        
        from: 'No where',
       
    },
    reducers: {
        clickatat(state, action) {
            console.log(action.payload)
            state.from = action.payload
        },
    
    },
    extraReducers(builder) {
        builder
        .addCase(CheckoutCart.fulfilled, (state, action) => {
            state.from = "Checkout2"
        })
    }
})
export const { clickatat } = routeSlice.actions
export default routeSlice.reducer
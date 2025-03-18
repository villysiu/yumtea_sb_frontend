import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import { format } from 'date-fns';
import {logoutUser} from "../user/userSlice";



export const fetchCurrentUserOrders=createAsyncThunk(
    'order/fetchCurrentUserOrders',
    async (_, {rejectWithValue}) => {
        console.log("fetching orders")
        try {
            const response=await fetch(`${apiLink}/purchases`, {
                method: "GET",
                credentials: "include"
            })

            if(!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            return await response.json()
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const PlaceOrder=createAsyncThunk(
    'order/PlaceOrder',
    async (order, {rejectWithValue}) => {
        console.log("CheckoutCart orders")
        try {
            const response=await fetch(`${apiLink}/purchase`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                },
                body: JSON.stringify(order),
                credentials: "include"
                
            })


            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const orderSlice=createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: 'idle',
        // newestOrder: null,
        checkoutStatus: 'idle',
    },
    reducers: {
        // clearorder(state, action){
        //     state.checkoutStatus="idle"
        // }
        //
        // clearNewestOrder(state){
        //     state.newestOrder = null;
        //     state.checkoutStatus = 'idle';
        // }
        resetOrderStatus(state){
            state.checkoutStatus = 'idle'
        }


    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserOrders.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchCurrentUserOrders.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.orders = action.payload.reverse()
        })
        .addCase(fetchCurrentUserOrders.rejected, (state, action) => {
            state.status = 'failed'
            // state.orders = []
        })
        .addCase(PlaceOrder.pending, (state, action) => {
            state.checkoutStatus = 'loading'
        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {
            state.checkoutStatus = 'succeeded'
            state.orders = [action.payload, ...state.orders]
        })
        .addCase(PlaceOrder.rejected, (state, action) => {
            state.checkoutStatus = 'failed'
        })
          .addCase(logoutUser.fulfilled, (state, action) => {
              state.orders = []
              state.status ='idle'
              state.checkoutStatus = 'idle'
          })
    }
})
export const { resetOrderStatus } = orderSlice.actions
export default orderSlice.reducer

const selectOrders = (state) => state.order.orders;
const selectDays = (state, days) => days

export const getOrders = createSelector(
    [selectOrders, selectDays],
    (orders, days) => {
        const current = new Date();
        current.setDate(current.getDate() - days +1);
        current.setHours(0, 0, 0, 0);
        const formattedDate = format(current, 'yyyy-MM-dd')
        console.log(formattedDate);

    console.log(orders)
        return orders.filter(o => o.purchaseDate > formattedDate)
        // return orders
    }
)


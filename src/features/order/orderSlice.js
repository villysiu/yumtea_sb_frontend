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


            return await response.json();
        }
        catch(error){
            rejectWithValue(error.message);
        }
    }
)
export const fetchAllOrders=createAsyncThunk(
    'order/fetchAllOrders',
    async (_, {rejectWithValue}) => {
        console.log("fetching orders")
        try {
            const response=await fetch(`${apiLink}/purchases/all`, {
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
export const deleteOrder=createAsyncThunk(
    'order/deleteOrder',
    async (id, {rejectWithValue}) => {
        console.log("delete orders" + id)
        try {
            const response=await fetch(`${apiLink}/purchase/${id}`, {
                method: "DELETE",
                credentials: "include"
            })

            if(!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            return id
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
        fetchOrdersStatus: 'idle',
        allOrders: [],
        fetchAllOrdersStatus: 'idle',
        checkoutStatus: 'idle',
        deleteOrderStatus: 'idle',


        taxRate: 0.0,
        fetchTaxRateStatus: 'idle'
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
            state.fetchOrdersStatus = 'loading'
        })
        .addCase(fetchCurrentUserOrders.fulfilled, (state, action) => {
            state.fetchOrdersStatus = 'succeeded'
            state.orders = action.payload.reverse()
        })
        .addCase(fetchCurrentUserOrders.rejected, (state, action) => {
            state.fetchOrdersStatus = 'failed'
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
              state.fetchOrdersStatus ='idle'
              state.checkoutStatus = 'idle'
          })

          .addCase(fetchTaxRate.pending, (state, action) => {
              state.fetchTaxRateStatus = 'loading'
          })
          .addCase(fetchTaxRate.fulfilled, (state, action) => {
              state.fetchTaxRateStatus = 'succeeded'
              state.taxRate = action.payload;
          })
          .addCase(fetchTaxRate.rejected, (state, action) => {
              state.fetchTaxRateStatus = 'failed'
          })
          .addCase(fetchAllOrders.pending, (state, action) => {
              state.fetchAllOrdersStatus = 'loading'
          })
          .addCase(fetchAllOrders.fulfilled, (state, action) => {
              state.fetchAllOrdersStatus = 'succeeded'
              state.allOrders = action.payload.reverse()
          })
          .addCase(fetchAllOrders.rejected, (state, action) => {
              state.fetchAllOrdersStatus = 'failed'
              // state.orders = []
          })
          .addCase(deleteOrder.pending, (state, action) => {
              state.deleteOrderStatus = 'loading'
          })
          .addCase(deleteOrder.fulfilled, (state, action) => {
              state.deleteOrderStatus = 'succeeded'
              state.allOrders = state.allOrders.filter(o=>o.id!==action.payload)
          })
          .addCase(deleteOrder.rejected, (state, action) => {
              state.deleteOrderStatus = 'failed'
              // state.orders = []
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
export const calculateTax = (state, subtotal) =>{
    return subtotal * state.taxRate.taxRate / 100;
}

const selectAllOrders = state => state.order.allOrders;
const selectText = (state, text) => text

export const searchAllOrders = createSelector(
    [selectAllOrders, selectText],
    (allOrders, text) => {
        // if(text === "")
            return allOrders

        // const regex = new RegExp(text, "i");
        // return allOrders.filter(a=>regex.test(regex.test(a.id)))
    }
)

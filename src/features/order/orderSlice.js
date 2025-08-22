import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import { format } from 'date-fns';
import {loginUser, logout, logoutUser} from "../user/userSlice";
import {clearCart} from "../cart/cartSlice";




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
export const PlaceOrder=createAsyncThunk(
    'order/PlaceOrder',
    async (order, {rejectWithValue, dispatch}) => {
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


            if(!response.ok) { // 400 - 499
                if(response.status === 401){
                    dispatch(logout())
                    dispatch(clearCart())
                    dispatch(clearOrder())
     
                }
                const errorMessage = await response.text(); // errorText:"Please log in to access this resource."
                return rejectWithValue(errorMessage)
            }
            return await response.json();
        }
        catch(error){
            //network error, server down etc 500-599
            console.error("Request failed:", error.message);
            return rejectWithValue(
                "Network or unexpected error"
            );
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
            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();
        }
        catch(error){
            rejectWithValue(error.message);
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
                const errorText = await response.text();
                console.log("Error :", errorText);

                return rejectWithValue(errorText);
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

        checkoutStatus: 'idle',
        newOrder: null,

        taxRate: 0.0,
        fetchTaxRateStatus: 'idle',

        deleteOrderStatus: 'idle',

    },
    reducers: {
        clearOrder(state){
            state.orders = []
            state.fetchOrdersStatus = 'idle'
          
            state.checkoutStatus = 'idle'
            state.newOrder = null;
           

        },
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
         
      
        
          .addCase(logoutUser.fulfilled, (state, action) => {
                state.orders = []
                state.fetchOrdersStatus ='idle'
                state.checkoutStatus = 'idle'
                state.newOrder = null;
          })

          .addCase(loginUser.fulfilled, (state, action) => {
              state.checkoutStatus = 'idle'


          })


    }
})
export const { resetOrderStatus, clearOrder } = orderSlice.actions
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
    return subtotal * state.order.taxRate / 100;
}


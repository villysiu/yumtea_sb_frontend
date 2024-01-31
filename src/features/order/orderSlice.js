import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";



export const fetchCurrentUserOrders=createAsyncThunk(
    'order/fetchCurrentUserOrders',
    async () => {
        console.log("fetching orders")
        try {
            const response=await fetch(`${apiLink}/api/orders`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}
            
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const CheckoutCart=createAsyncThunk(
    'order/CheckoutCart',
    async () => {
        console.log("CheckoutCart orders")
        try {
            const response=await fetch(`${apiLink}/api/orders`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}
            
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
const orderSlice=createSlice({
    name: 'order',
    initialState: {
        order: {

            orders_arr: [],
            status: 'idle',
        },
        checkout:{
            status: 'idle',

        }
       
    },
    reducers: {
        
        //   emptyTempCart(state,action){
        //     state.cart.temp_cart_arr = []
        //   },

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserOrders.pending, (state, action) => {
            state.order.status = 'loading'
        })
        .addCase(fetchCurrentUserOrders.fulfilled, (state, action) => {
            
            console.log(action.payload)
            state.order.status = 'succeeded'
            state.order.orders_arr = action.payload.reverse()
        })
        .addCase(fetchCurrentUserOrders.rejected, (state, action) => {
            state.order.status = 'failed'
        })
        .addCase(CheckoutCart.pending, (state, action) => {
            state.checkout.status = 'loading'
        })
        .addCase(CheckoutCart.fulfilled, (state, action) => {
            
            console.log(action.payload)
            state.checkout.status = 'succeeded'
            state.order.orders_arr = [...state.order.orders_arr, action.payload]
        })
        .addCase(CheckoutCart.rejected, (state, action) => {
            state.checkout.status = 'failed'
        })
        
    }
})
// export const {  } = orderSlice.actions
export default orderSlice.reducer
export const lastthirtydaysOrders = (state) => {
    const current = new Date()
    current.setDate(current.getDate()-7)
    return {
        'orders_arr': state.order.order.orders_arr.filter(order=>new Date(order.date) > current), 
        'status': 'succeeded'
    }
     
}
export const currentyearOrders = (state) =>{
    const current_year = new Date().getFullYear()
    const regex = /(\d{4})/g;
    return {
        'orders_arr': 
            state.order.order.orders_arr.filter(order=>parseInt(order.date.match(regex)[0]) === current_year), 
        'status': 'succeeded'
    }
}
export const lastyearOrders = (state) =>{
    const last_year = new Date().getFullYear()-1
    const regex = /(\d{4})/g;
    return {
        'orders_arr': 
            state.order.order.orders_arr.filter(order=>parseInt(order.date.match(regex)[0]) === last_year), 
        'status': 'succeeded'
    }
}

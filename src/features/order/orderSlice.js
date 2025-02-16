import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {fetchCart} from "../cart/cartSlice";



export const fetchCurrentUserOrders=createAsyncThunk(
    'order/fetchCurrentUserOrders',
    async () => {
        console.log("fetching orders")
        try {
            const response=await fetch(`${apiLink}/api/orders`, {
                method: "GET",

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
export const PlaceOrder=createAsyncThunk(
    'order/PlaceOrder',
    async (tip) => {
        console.log("CheckoutCart orders")
        try {
            const response=await fetch(`${apiLink}/purchase`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                },
                body: JSON.stringify({'tip': tip}),
                credentials: "include"
                
            })
            if(response.ok) {
               return await response.json();
            }

            // if(!response.ok) {
            //     throw new Error(`${response.status} ${response.statusText}`)
            // }
            // const data=await response.json()
            // console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}
            
            // return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
const orderSlice=createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: 'idle',
        newestOrder: null,
        checkout_status: 'idle',

        
       
    },
    reducers: {
        clearorder(state, action){
            state.checkout_status="idle"
        }
        //   emptyTempCart(state,action){
        //     state.cart.temp_cart_arr = []
        //   },

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserOrders.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchCurrentUserOrders.fulfilled, (state, action) => {
            
            console.log(action.payload)
            state.status = 'succeeded'
            state.orders = action.payload.reverse()
        })
        .addCase(fetchCurrentUserOrders.rejected, (state, action) => {
            state.status = 'failed'
        })
        .addCase(PlaceOrder.pending, (state, action) => {
            state.checkout_status = 'loading'
        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {
            
            // console.log(action.payload)
            state.checkout_status = 'succeeded'
            state.newestOrder = action.payload;
            // state.orders = [ action.payload, ...state.orders]
        })
        .addCase(PlaceOrder.rejected, (state, action) => {
            state.checkout_status = 'failed'
        })
        
    }
})
export const { clearorder } = orderSlice.actions
export default orderSlice.reducer

export const lastthirtydaysOrders = (orders, days) => {
    const current = new Date()
    current.setDate(current.getDate()-days)
    return orders.filter(order=>new Date(order.date) > current)
        
     
}
// export const currentyearOrders = (orders) =>{
//     const current_year = new Date().getFullYear()
//     const regex = /(\d{4})/g;
//     return {
//         'orders_arr': 
//             orders.filter(order=>parseInt(order.date.match(regex)[0]) === current_year), 
//         'status': 'succeeded'
//     }
// }
// export const lastyearOrders = (orders) =>{
//     const last_year = new Date().getFullYear()-1
//     const regex = /(\d{4})/g;
//     return {
//         'orders_arr': 
//             orders.filter(order=>parseInt(order.date.match(regex)[0]) === last_year), 
//         'status': 'succeeded'
//     }
// }
export const getSubtotal = (orderitems) => {
    let sum = 0
    for(let lineitem of orderitems){
        sum+=(lineitem.quantity * lineitem.price)
    }
    return sum
}
export const formatTimestamp = (timestamp) =>{
    const date = new Date(timestamp); // Convert the timestamp to a Date object

    // Extract the month, day,  year, hour, min, sec
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');


    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}
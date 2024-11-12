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
export const PlaceOrder=createAsyncThunk(
    'order/PlaceOrder',
    async (tip) => {
        console.log("CheckoutCart orders")
        try {
            const response=await fetch(`${apiLink}/api/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    
                },
                body: JSON.stringify({'tip': tip})
                
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
        orders: [],
        status: 'idle',
        
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
            
            console.log(action.payload)
            state.checkout_status = 'succeeded'
            state.orders = [ action.payload, ...state.orders]
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
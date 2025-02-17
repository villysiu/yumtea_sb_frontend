import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {fetchCart} from "../cart/cartSlice";
import {useSelector} from "react-redux";



export const fetchCurrentUserOrders=createAsyncThunk(
    'order/fetchCurrentUserOrders',
    async () => {
        console.log("fetching orders")
        try {
            const response=await fetch(`${apiLink}/purchases`, {
                method: "GET",
                credentials: "include"
            })

            if(!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);

            }
            const data=await response.json()
            console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}

            return data
        } 
        catch(error){
            return error.message;
        }
    }
)
export const PlaceOrder=createAsyncThunk(
    'order/PlaceOrder',
    async (order) => {
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
        checkoutStatus: 'idle',
    },
    reducers: {
        // clearorder(state, action){
        //     state.checkoutStatus="idle"
        // }

        clearNewestOrder(state){
            console.log("clea djafhsj")
            state.newestOrder = null;
            state.checkoutStatus = 'idle';
        }

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
            state.checkoutStatus = 'loading'
        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {

            state.checkoutStatus = 'succeeded'
            state.newestOrder = action.payload;
            // rest orders status to fetch  updated orders list from api
            state.status = "idle";
        })
        .addCase(PlaceOrder.rejected, (state, action) => {
            state.checkoutStatus = 'failed'
        })
    }
})
export const { clearNewestOrder } = orderSlice.actions
export default orderSlice.reducer

const selectOrders = (state) => state.order.orders;
const selectDays = (state, days) => days

export const getOrders = createSelector(
    [selectOrders, selectDays],
    (orders, days) => {
        const current = new Date();
        current.setDate(current.getDate() - days);
        current.setHours(0, 0, 0, 0);
        console.log(current)

        return orders.filter(o => o.purchaseDate > current)
    }
)


export const convertTimestampToDatetime = (state) =>{
    if(state.order.newestOrder === null)
        return null

    const timestamp = state.order.newestOrder.purchaseDate;
    const date = new Date(timestamp); // Convert the timestamp to a Date object

    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');


    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}
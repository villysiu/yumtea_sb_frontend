import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import { format } from 'date-fns';
import {loginUser, logout, logoutUser} from "../user/userSlice";
import {addItemToCart, clearCart, removeItemFromCart, updateItemInCart} from "../cart/cartSlice";
import {clearAccount} from "../admin/account/accountSlice";



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
                    dispatch(clearAccount())
                }
                const errorMessage = await response.text(); // errorText:"Please log in to access this resource."
                return rejectWithValue(errorMessage)
            }
            return null;
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

const orderSlice=createSlice({
    name: 'order',
    initialState: {
        orders: [],
        fetchOrdersStatus: 'idle',
        checkoutStatus: 'idle',
        taxRate: 0.0,
        fetchTaxRateStatus: 'idle',

        // ROLE_ADMIN only
        allOrders: [],
        fetchAllOrdersStatus: 'idle',

        salesByMenuitem: [],
        fetchSalesByMenuitemStatus: 'idle',
        milkBySales: [],
        fetchMilkBySalesStatus: 'idle',

        deleteOrderStatus: 'idle',

    },
    reducers: {
        clearOrder(state){
            state.orders = []
            state.fetchOrdersStatus = 'idle'
            state.allOrders = []
            state.fetchAllOrdersStatus = 'idle'

            state.checkoutStatus = 'idle'
            state.salesByMenuitem = []
            state.fetchSalesByMenuitemStatus = 'idle'
            state.milkBySales = []
            state.fetchMilkBySalesStatus ='idle'
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

          .addCase(logoutUser.fulfilled, (state, action) => {
              state.orders = []
              state.fetchOrdersStatus ='idle'
              state.fetchAllOrdersStatus = 'idle'
              state.allOrders = []
              state.checkoutStatus = 'idle'
              state.salesByMenuitem = []
              state.fetchSalesByMenuitemStatus ='idle'
              state.milkBySales = []
              state.fetchMilkBySalesStatus = 'idle'
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

const selectAllOrders = state => state.order.allOrders;
const selectText = (state, text) => text

export const searchAllOrders = createSelector(
    [selectAllOrders, selectText],
    (allOrders, text) => {
        console.log(text)
        console.log(typeof text)
        if(text === "")
            return allOrders

        const regex = new RegExp(text, "i");
        return allOrders.filter(o=>
                regex.test(o.id) //serach by id
                ||  regex.test(o.account.email)  //search by email
                || regex.test(o.purchaseDate)
                || o.purchaseLineitemList.some(pl => regex.test(pl.menuitem.title)) //search by menutitem


        )
    }
)

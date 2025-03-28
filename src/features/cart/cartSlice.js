import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {loginUser, logout, logoutUser} from "../user/userSlice";
import {clearOrder, PlaceOrder} from "../order/orderSlice";
import { v4 as uuidv4 } from 'uuid';
import {clearCartMessage} from "../message/messageSlice";
import {clearAccount} from "../admin/account/accountSlice";


export const fetchCart=createAsyncThunk(
    'cart/fetchCart',
    async (_, {thunkAPI, rejectWithValue}) => {
        console.log("fetching cart")
        try {
            const response=await fetch(`${apiLink}/carts`, {
                method: "GET",
                // headers: {
                //     "Authorization": `Token ${localStorage.getItem("token")}`,
                // }
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();


        } 
        catch(error){
            throw rejectWithValue(error.message);
        }
    }
)
export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async (customizedItem,{thunkAPI, rejectWithValue}) => {
        console.log(customizedItem);
        try {
            const response=await fetch(`${apiLink}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(customizedItem),
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                console.log(response.status)
                return rejectWithValue( {
                    "httpStatus": response.status,
                    "newItem": customizedItem
                })
            }
            return await response.json();


        }
        catch(error){
      console.log("in other error")
            throw rejectWithValue( {
                "error": error.message,
                "newItem": customizedItem
            })
        }

    }
)


export const updateItemInCart = createAsyncThunk(
    'cart/updateItemInCart',
    async (updatedItem, {dispatch, rejectWithValue}) => {
        console.log(updatedItem)
// {pk: 9, menuitem_pk: 11, milk_pk:8, price: 6, quantity: 1, temperature: 'H', size: 16, sweetness: 0}


        try {
            const response=await fetch(`${apiLink}/cart/${updatedItem.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(updatedItem),
                credentials: 'include'
            })

            // console.log(response.status)
            // console.log(response.ok)
            if(!response.ok) { // 400 - 499
                if(response.status === 401){
                    dispatch(logout())
                    dispatch(clearCart())
                    dispatch(clearOrder())
                    dispatch(clearAccount())
                }
                const errorMessage = await response.text(); // errorText:"{\"message\": \"Please log in to access this resource.\"}"
                return rejectWithValue({
                    "updateItem": updatedItem,
                    "httpStatus": response.status,
                    "message": errorMessage // message sent from backend
                })

            }

            return await response.json();

        } 
        catch(error){
            //network error, server down etc 500-599
            console.error("Request failed:", error.message);
            return rejectWithValue({
                "message": "Network or unexpected error",
                "httpStatus": error.status
            });
        }
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async (cartitemId, {dispatch, rejectWithValue}) => {
        console.log(cartitemId)
        try {
            const response=await fetch(`${apiLink}/cart/${cartitemId}`, {
                method: "DELETE",
                credentials: 'include'
            })

            if(!response.ok) { // 400 - 499
                if(response.status === 401){
                    dispatch(logout())
                    dispatch(clearCart())
                    dispatch(clearOrder())
                    dispatch(clearAccount())
                }
                const errorMessage = await response.text(); // errorText:"{\"message\": \"Please log in to access this resource.\"}"
                return rejectWithValue({
                    "deleteId": cartitemId,
                    "httpStatus": response.status,
                    "message": errorMessage // message sent from backend
                })
            }
            return null;
        }
        catch(error){
            //network error, server down etc 500-599
            console.error("Request failed:", error.message);
            return rejectWithValue({
                "message": "Network or unexpected error",
                "httpStatus": error.status
            });
        }
    }
)

const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        tempCart: null,
        fetchCartStatus: 'idle',

        cart: {
            status: 'idle',
            action: null
        }
    },
    reducers: {
        clearCart(state, action){
            state.carts = []
            state.fetchCartStatus = 'idle'
        },
        resetCartBanner(state, action){
            // state.addToCartStatus = 'idle'
            // state.removeStatus = 'idle'
            // state.updateStatus = 'idle'
            state.cart = {
                status: 'idle',
                action: null
            }
        },


    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.fetchCartStatus = 'loading'
            state.cart={
                status: 'idle',
                action: null
            }
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            console.log('CART FETCHED FROM API')
            console.log(action.payload)
            state.fetchCartStatus = 'succeeded'
            state.carts = action.payload
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.fetchCartStatus = 'failed'
        })

        .addCase(addItemToCart.pending, (state, action) => {
            // state.addToCartStatus = 'loading'
            // state.removeStatus = 'idle'
            // state.updateStatus = 'idle'
            state.cart={
                status: 'loading',
                action: 'add'
            }

        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            // state.addToCartStatus = 'succeeded'
            state.tempCart = null;
            state.fetchCartStatus = "idle"
            state.cart={
                status: 'succeeded',
                action: 'add'
            }
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            // state.addToCartStatus = "failed";
            console.log(action.payload)
            state.tempCart = action.payload.newItem;
            state.cart={
                status: 'failed',
                action: 'add'
            }
        })

        .addCase(removeItemFromCart.pending, (state, action) => {
            state.cart={
                status: 'loading',
                action: 'remove'
            }
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.carts = state.carts.filter(c=>c.id !== action.payload)
            state.cart={
                status: 'succeeded',
                action: 'remove'
            }
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
            // state.removeStatus = 'failed'
            console.log(action.payload)
            if(action.payload.httpStatus === 401) {
                state.cart = {
                    status: 'failed',
                    action: 'remove'
                }
                state.tempCart = action.payload.deleteId
            }
            else { // 403
                state.tempCart = null
                state.cart={
                    status: 'idle',
                    action: null
                }
            }
        })

        .addCase(updateItemInCart.pending, (state, action) => {
            state.cart={
                status: 'loading',
                action: 'update'
            }

        })
        .addCase(updateItemInCart.fulfilled, (state, action) => {
            // state.updateStatus = 'succeeded'
            state.fetchCartStatus = "idle"
            state.cart={
                status: 'succeeded',
                action: 'update'
            }


        })
        .addCase(updateItemInCart.rejected, (state, action) => {
            console.log(action.payload)
            if(action.payload.httpStatus === 401) {
                state.cart = {
                    status: 'failed',
                    action: 'update'
                }
                state.tempCart = action.payload.updateItem
            }
            else { // 403 (400-499, 500-599)
                state.tempCart = null
                state.cart={
                    status: 'idle',
                    action: null
                }
            }

        })

        .addCase(logoutUser.fulfilled, (state, action) => {
            state.carts = []
            state.fetchCartStatus = 'idle'

        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {
            state.carts = [];
            state.fetchCartStatus = 'idle'
            state.cart={
                status: 'idle',
                action: null
            }
            
        })


        
    }
})
export const { resetCartBanner, addItemToTempCart, clearCart} = cartSlice.actions
export default cartSlice.reducer

const selectCarts = state => state.cart.carts;

export const getSubtotal = createSelector(
    [selectCarts],
    (carts) => {
        let subtotal = 0;
        let quantity = 0;
        // tax = 0
        for(let item of carts){
            subtotal += item.price * item.quantity;
            quantity += item.quantity;
        }
        return {
            'subtotal': subtotal,
            'count': quantity
        }
    }
)


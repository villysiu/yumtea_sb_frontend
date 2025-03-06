import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {loginUser, logoutUser} from "../user/userSlice";
import { PlaceOrder } from "../order/orderSlice";
import { v4 as uuidv4 } from 'uuid';
import {clearCartMessage} from "../message/messageSlice";


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

            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

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

            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return await response.json();


        }
        catch(error){
            throw rejectWithValue(error.message);
        }
    }
)


export const updateItemInCart = createAsyncThunk(
    'cart/updateItemInCart',
    async (updatedItem, {thunkAPI, rejectWithValue}) => {
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

            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return await response.json();

        } 
        catch(error){
            throw rejectWithValue(error.message);
        }
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async (cartitemId, {thunkAPI, rejectWithValue}) => {
        console.log(cartitemId)
        try {
            const response=await fetch(`${apiLink}/cart/${cartitemId}`, {
                method: "DELETE",
                credentials: 'include'
            })
            if(!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return null;

        } 
        catch(error){
            throw rejectWithValue(error.message);
        }
    }
)

const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        tempCart: null,
        fetchCartStatus: 'idle',
        addToCartStatus: 'idle',
        removeStatus: 'idle',
        updateStatus: 'idle',

    },
    reducers: {
        addItemToTempCart(state, action){
            console.log(action.payload);
            state.tempCart = action.payload;
        },
        resetCartBanner(state, action){
            state.addToCartStatus = 'idle'
            state.removeStatus = 'idle'
            state.updateStatus = 'idle'
        },
        clearCart(state){
            state.carts = []
            state.fetchCartStatus = 'idle'
        }



    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.fetchCartStatus = 'loading'
            state.addToCartStatus ='idle'
            state.removeStatus = 'idle'
            state.updateStatus = 'idle'
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
            state.addToCartStatus = 'loading'
            state.removeStatus = 'idle'
            state.updateStatus = 'idle'

        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.addToCartStatus = 'succeeded'
            state.tempCart = null;
            state.fetchCartStatus = "idle"
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.addToCartStatus = "failed";
        })

        .addCase(removeItemFromCart.pending, (state, action) => {
            state.removeStatus = 'loading'
            state.addToCartStatus = 'idle'
            state.updateStatus = 'idle'
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.removeStatus = 'succeeded'
            state.fetchCartStatus = "idle"
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
            state.removeStatus = 'failed'
        })

        .addCase(updateItemInCart.pending, (state, action) => {
            state.updateStatus = 'loading'
            state.removeStatus = 'idle'
            state.addToCartStatus = 'idle'

        })
        .addCase(updateItemInCart.fulfilled, (state, action) => {
            // {'updated': data, 'initId': item.cartitemId}
            // (updated: {pk: 12, user_id: 1, menuitem_id: 1, milk_id: 8, quantity: 3, …}, initId: 14 )

            state.updateStatus = 'succeeded'
            state.fetchCartStatus = "idle"


        })
        .addCase(updateItemInCart.rejected, (state, action) => {
            state.updateStatus = 'failed'
        })

        .addCase(logoutUser.fulfilled, (state, action) => {
            state.carts = []
            state.tempCart = null;
            state.fetchCartStatus = 'idle'
            state.updateStatus = 'idle'
            state.removeStatus = 'idle'
            state.addToCartStatus = 'idle'
        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {
            state.carts = [];
            state.fetchCartStatus = 'succeeded'
            state.updateStatus = 'idle'
            state.removeStatus = 'idle'
            state.addToCartStatus = 'idle'
            
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


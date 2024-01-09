import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { apiLink } from "../../app/global";


export const fetchCart=createAsyncThunk(
    'cart/fetchCart',
    async () => {
        try {
            const response=await fetch(`${apiLink}/api/cart`, {
                method: "GET",
                headers: {
                    // "Content-Type": "application/json",
                    // 'accept': 'application/json'
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
export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async (itemId) => {
        const formData = {'menuitem_id': itemId}
        try {
            const response=await fetch(`${apiLink}/api/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            console.log(data)
            // {
            // 	"pk": 34,
            // 	"user_id": 2,
            // 	"menuitem": "2019 Chester-Kidder",
            // 	"quantity": 2,
            // 	"linetotal": "130.00",
            // 	"unit_price": "65.00"
            // }
            
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        cart: {
            cart_arr: [
                {pk: 1, title: "test-wine-1", quantity: 1, price: 33},
                {pk: 2, title: "test-wine-2", quantity: 2, price: 50}
            
            ],
            status: 'idle',
             
        },
       
    },
    reducers: {
        increment(state, action) {
            let menuitem = state.cart.cart_arr.filter(item=> item.pk === action.payload)
            menuitem[0].quantity++
          },
          decrement(state, action) {
            let menuitem = state.cart.cart_arr.filter(item=> item.pk === action.payload)
            if(menuitem[0].quantity > 1)
                menuitem[0].quantity--
          },
          incrementByAmount(state, action) {
            console.log("change by text box?")
            console.log(action.payload)
            let menuitem = state.cart.cart_arr.filter(item=> item.pk === action.payload.itemId)
            menuitem[0].quantity = action.payload.newVal
          },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'
            state.cart.cart_arr = action.payload
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(addItemToCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'
            state.cart.cart_arr.push(action.payload)
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })

       
       
    }
})
export const { increment, decrement, incrementByAmount } = cartSlice.actions
export default cartSlice.reducer
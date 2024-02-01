import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import { logoutUser } from "../user/userSlice";
import { CheckoutCart } from "../order/orderSlice";
export const batchAddItems=createAsyncThunk(
    'cart/batchAddItems',
    async (_, thunkAPI) => {
       
        const temp_cart_arr = thunkAPI.getState().cart.cart.temp_cart_arr
        // {
        //     "menuitem_id": action.payload.singleMenuitem.pk, 
        //     // "title": action.payload.singleMenuitem.title,
        //     "quantity": 1,
        //     "linetotal": action.payload.singleMenuitem.price,
        //     "unit_price": action.payload.singleMenuitem.price,
        //     "milk_id": action.payload.milkId,
        // }
        try {
            for (let item of temp_cart_arr){
                await thunkAPI.dispatch(addItemToCart({'menuitem_pk': item.menuitem_id, 'milk_pk': item.milk_id, 'quantity': item.quantity}) )
            }
            return null
        }
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const fetchCart=createAsyncThunk(
    'cart/fetchCart',
    async (_, thunkAPI) => {
        console.log("fetching cart")
        try {
            const response=await fetch(`${apiLink}/api/cart`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            // console.log(data)
            // {
            //     linetotal: 5,
            //     menuitem_id: 6, 
            //     milk_id: 3,
            //     pk: 12,
            //     quantity: 1,
            //     unit_price: 5, 
            //     user_id: 2
            // }
            
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async (item, thunkAPI) => {
        console.log(item)
        // {menuitem_pk: 1, milk_pk: 7}
        // {menuitem_pk: 1, milk_pk: 7, quantity: 1}
        try {
            const response=await fetch(`${apiLink}/api/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    
                },
                body: JSON.stringify(item)
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            // 	{
	// 	"pk": 20,
	// 	"user_id": 2,
	// 	"menuitem_id": 7,
	// 	"quantity": 2,
	// 	"linetotal": 10.0,
	// 	"unit_price": 5.0,
	// 	"milk_id": 2
	// },
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const updateCartItem = createAsyncThunk(
    'cart/updateSingleCartQuantity',
    async (item, thunkAPI) => {
        console.log(item)
        // {cartitemId: 33, formData: {'quantity': item.quantity}}
        try {
            const response=await fetch(`${apiLink}/api/cart/${item.cartitemId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    
                },
                body: JSON.stringify(item.formData)
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()

            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async (formData) => {

        try {
            const response=await fetch(`${apiLink}/api/cart/${formData.cartitemId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                },
            })
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            return formData
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

            cart_arr: [],
            temp_cart_arr:[],
            status: 'idle',
        },
       
    },
    reducers: {
        increment(state, action) {
            console.log(action.payload)
// {'singleMenuitem':singleMenuitem, 'milkId': milkId }
            let cartitem = state.cart.temp_cart_arr
            .find(item=> item.menuitem_id === action.payload.singleMenuitem.menuitem_id 
                        && item.milk_id === action.payload.milkId)
            
            if(cartitem === undefined){
                // console.log("item not in cart")
                state.cart.temp_cart_arr.push(
                    {
                        "menuitem_id": action.payload.singleMenuitem.pk, 
                        "quantity": 1,
                        "linetotal": action.payload.singleMenuitem.price,
                        "unit_price": action.payload.singleMenuitem.price,
                        "milk_id": action.payload.milkId,
                    }
                )
            }
            else{
                // console.log("item in cart")
                cartitem.quantity++
                cartitem.linetotal += cartitem.unit_price
            }
            state.cart.cart_arr = state.cart.temp_cart_arr

            },
            decrement(state, action) {
                console.log(action.payload)
                // {'menuitemId':cartitem.menuitem_id, 'milkId': cartitem.milk_id }
                // let cartitem = state.cart.temp_cart_arr.find(item=> item.menuitem_id === action.payload.menuitemId 
                //     && item.milk_id === action.payload.milkId)
                let cartitem = state.cart.temp_cart_arr[action.payload]
                // cartitem existed since it is from shopping cart 
                cartitem.quantity--
                cartitem.linetotal -= cartitem.unit_price

                state.cart.cart_arr = state.cart.temp_cart_arr
            },

            removeItem(state, action){
                console.log(action.payload)
                // {menuitemId: 2, milkId: 2}
                // state.cart.temp_cart_arr = state.cart.temp_cart_arr
                //     .filter(item=> !(item.menuitem_id === action.payload.menuitemId 
                //         && item.milk_id === action.payload.milkId))
                state.cart.temp_cart_arr.splice(action.payload, 1)
                state.cart.cart_arr = state.cart.temp_cart_arr
            },
            emptyTempCart(state,action){
                state.cart.temp_cart_arr = []
            },
            updateCustomization(state, action){
                // {'menuitemId':cartitem.menuitem_id, 'prevMilkId': cartitem.milk_id, 'updatedMilkId': milk }
                // let cartitem = state.cart.temp_cart_arr.find(item=> item.menuitem_id === action.payload.menuitemId 
                //     && item.milk_id === action.payload.prevMilkId)
                let cartitem = state.cart.temp_cart_arr[action.payload.cartId]
                cartitem.milk_id = action.payload.updatedMilkId
                state.cart.cart_arr = state.cart.temp_cart_arr

            }


    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            console.log('CART FETCHED FROM API')
            console.log(action.payload)
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
            console.log('ITEM ADDED TO API')
            console.log(action.payload)
            let cartitem = state.cart.cart_arr.find(cartitem=>cartitem.pk === action.payload.pk)
            
            if(cartitem === undefined){
                console.log("item not in cart")
                state.cart.cart_arr.push(action.payload)
            }
            else{
                console.log("item in cart")
                cartitem.quantity++
                cartitem.linetotal += cartitem.unit_price
            }
            
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(removeItemFromCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'
            console.log(action.payload)
            state.cart.cart_arr = state.cart.cart_arr.filter(cartitem=>cartitem.pk !== action.payload.cartitemId)
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(updateCartItem.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'
            // state.cart.message = 
             let cartitem = state.cart.cart_arr.find(cartitem =>cartitem.pk === action.payload.pk)
             cartitem.quantity = action.payload.quantity
             cartitem.linetotal = cartitem.unit_price * action.payload.quantity
             cartitem.milk_id = action.payload.milk_id

        })
        .addCase(updateCartItem.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(batchAddItems.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(batchAddItems.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'

        })
        .addCase(batchAddItems.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.cart.cart_arr = []
            state.cart.temp_cart_arr = []
            state.cart.status = 'idle'
        })
        .addCase(CheckoutCart.fulfilled, (state, action) => {
            state.cart.cart_arr = []
            state.cart.temp_cart_arr = []
            state.cart.status = 'idle'
        })
    }
})
export const { increment, decrement, removeItem, emptyTempCart, updateCustomization } = cartSlice.actions
export default cartSlice.reducer
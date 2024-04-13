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
        //     "quantity": 1,
        //     "unit_price": action.payload.singleMenuitem.price,
        //     "milk_id": action.payload.milkId,
        // }
        try {
            for (let item of temp_cart_arr){
                console.log(item)
                await thunkAPI.dispatch(addItemToCart(
                    {
                        'menuitem_pk': item.menuitem_id, 
                        'milk_pk': item.milk_id, 
                        'quantity': item.quantity, 
                        'temperature': item.temperature,
                        'sweetness': item.sweetness
                    }
                ))
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
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async (item) => {
        console.log(item)
        // api :{menuitem_pk: 6, milk_pk: {…}, temperature: 'I', sweetness: '100'} 
        // no user: {menuitem_pk: 2, milk_pk: 2, quantity: 1, temperature: 'I', sweetness: '100'}
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

            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)

export const updateCartItemQty = createAsyncThunk(
    'cart/updateCartItemQty',
    async (item) => {
        // console.log(item)
        //{'cartitemId': cartItem.pk, 'quantity': cartItem.quantity+1}
        try {
            const response=await fetch(`${apiLink}/api/cart/${item.cartitemId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                    "Authorization": `Token ${localStorage.getItem("token")}`,
                    
                },
                
                body: JSON.stringify({'quantity': item.quantity})
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
export const updateCartItemOptions = createAsyncThunk(
    'cart/updateCartItemOptions',
    async (item) => {
        console.log(item)
        // {cartitemId: 33, formData: {'milk_pk': milk}}
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
            // console.log(data)

            return {'updated': data, 'initId': item.cartitemId }
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
            // menuitem_id: 2, milk: 2, temp: 'I', sweetness: '100', unit_price: 5
            
            let cartitem = state.cart.temp_cart_arr
                .find(item=> item.menuitem_id === action.payload.menuitem_id
                    && item.milk_id === action.payload.milk
                    && item.temperature === action.payload.temp 
                    && item.sweetness === action.payload.sweetness)

            
            if(cartitem === undefined){
                state.cart.temp_cart_arr.push(
                    {
                        "menuitem_id": action.payload.menuitem_id, 
                        "quantity": 1,
                        
                        "unit_price": action.payload.unit_price,
                        // "tax": action.payload.unit_price * 0.1,
                        "milk_id": action.payload.milk,
                        "sweetness": action.payload.sweetness,
                        "temperature": action.payload.temp,
                        "pk": state.cart.temp_cart_arr.length+1
                    }
                )
            }
            else{
                console.log("item in cart")
                console.log(cartitem)
                cartitem.quantity++
                // cartitem.linetotal += action.payload.unit_price
     
            }
            state.cart.cart_arr = state.cart.temp_cart_arr

        },
        
        updateQty(state, action) {
            console.log(action.payload)
            // cartitem existed since it is from shopping cart 
            let cartitem = state.cart.temp_cart_arr.find(item=>item.pk === action.payload.cartitem_id)
            cartitem.quantity += action.payload.unit_price>0 ? 1 : -1

            state.cart.cart_arr = state.cart.temp_cart_arr
        },
        removeItem(state, action){
            console.log(action.payload) 
        
            state.cart.temp_cart_arr = state.cart.temp_cart_arr.filter(item=>item.pk !== action.payload)
            state.cart.cart_arr = state.cart.temp_cart_arr
        },
        emptyTempCart(state,_){
            state.cart.temp_cart_arr = []
        },
        updateCustomization(state, action){
            console.log(action.payload)
            // {'cartitem_id': cartItem.pk, 'menuitem_id':cartItem.menuitem_id, 'milk_id': milk_id, 'temperature': temp, 'sweetness': sweetness
            // unit_price: 7}
            let existed_item = state.cart.temp_cart_arr.find(item=> 
                item.menuitem_id === action.payload.menuitem_id 
                && item.milk_id === action.payload.milk_id
                && item.temperature === action.payload.temperature 
                && item.sweetness === action.payload.sweetness
            )
            console.log(existed_item)
            
            let cartitem = state.cart.temp_cart_arr.find(item=>item.pk===action.payload.cartitem_id)
            console.log(cartitem)

            if(existed_item === undefined){
                cartitem.milk_id = action.payload.milk_id
                cartitem.temperature = action.payload.temperature 
                cartitem.sweetness = action.payload.sweetness
                cartitem.unit_price = action.payload.unit_price
            }
            else{

                existed_item.quantity += cartitem.quantity
                state.cart.temp_cart_arr = state.cart.temp_cart_arr.filter(item=>item.pk!==action.payload.cartitem_id)

            }
            
            

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
                cartitem.quantity = action.payload.quantity
                // cartitem.linetotal = action.payload.linetotal
            }
            
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(removeItemFromCart.pending, (state, action) => {
            
            let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            item.status = 'loading'
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.cart.cart_arr = state.cart.cart_arr.filter(cartitem=>cartitem.pk !== action.payload.cartitemId)
            
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(updateCartItemQty.pending, (state, action) => {
            // console.log(action)
            // state.cart.status = 'loading'
            let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            item.status = 'loading'
        })
        .addCase(updateCartItemQty.fulfilled, (state, action) => {
            
            console.log(action.payload)
            
            // item must exist since updating qty from cart
            let item = state.cart.cart_arr.find(item=>item.pk === action.payload.pk)
            item.quantity = action.payload.quantity
            // item.linetotal = item.quantity * item.unit_price
            // item.tax = action.payload.tax
          
            delete item.status
        })
        .addCase(updateCartItemQty.rejected, (state, action) => {
            let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            delete item.status
        })
        .addCase(updateCartItemOptions.pending, (state, action) => {
            console.log(action)
            let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            item.status = 'loading'
        })
        .addCase(updateCartItemOptions.fulfilled, (state, action) => {
            // [
            //     {
            //         "pk": 62,
            //         "user_id": 2,
            //         "menuitem_id": 2,
            //         "quantity": 5,
            //         "linetotal": 25.0,
            //         "unit_price": 5.0,
            //         "tax": 2.5,
            //         "milk_id": 3
            //     }
            // ]
            // {'updated': data, 'initId': item.cartitemId}
            console.log(action.payload)
            state.cart.status = 'succeeded'

            // if returned updated item id is different than init Id, it means the item already existed and is merged. 
            // so we deleted the init id from the cart
            if(action.payload.updated.pk !== action.payload.initId){
                state.cart.cart_arr = state.cart.cart_arr.filter(item=>item.pk !== action.payload.initId)
            }
            //then we updated the exisiting item, whether updated id eq or not eq init id
            let cartitem = state.cart.cart_arr.find(item=>item.pk === action.payload.updated.pk)
            cartitem.unit_price = action.payload.updated.unit_price
            cartitem.quantity = action.payload.updated.quantity
            cartitem.milk_id = action.payload.updated.milk_id
            cartitem.temperature = action.payload.updated.temperature
            cartitem.sweetness = action.payload.updated.sweetness
            
            delete cartitem.status
        })
        .addCase(updateCartItemOptions.rejected, (state, action) => {
            let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            delete item.status
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
export const { increment, decrement, updateQty, removeItem, emptyTempCart, updateCustomization } = cartSlice.actions
export default cartSlice.reducer

export const getSubtotalAndTax = (cart_arr) =>{
    let subtotal = 0, tax = 0
    for(let cart_item of cart_arr){
        subtotal += cart_item.unit_price * cart_item.quantity
        
    }
    return [subtotal, subtotal*0.1]
}
export const getItemCount = (cart_arr) =>{
    let count = 0
    for(let cart_item of cart_arr){
        count += cart_item.quantity
    }
    return count
}
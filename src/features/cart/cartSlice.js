import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import { logoutUser } from "../user/userSlice";
import { PlaceOrder } from "../order/orderSlice";
import { v4 as uuidv4 } from 'uuid';

export const batchAddItems=createAsyncThunk(
    'cart/batchAddItems',
    async (temp_cart, thunkAPI) => {
        console.log(temp_cart)
       

        try {
            for (let item of temp_cart){
                console.log(item)
                // {menuitem_pk: 4, milk_pk: 8...}
                await thunkAPI.dispatch(addItemToCart(item
          
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
        
// {menuitem_pk: 12, milk_pk: 8, price: 6, quantity: 1, size: 12, 
//     sweetness: 0, temperature: "H"}


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
            console.log(data)
            // {pk: 11, user_id: 1, menuitem_id: 12, milk_id: 8, quantity: 1, 
//     price: 6, size: 12, sweetness: 0, temperature: "H"}
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)


export const updateItemInCart = createAsyncThunk(
    'cart/updateItemInCart',
    async (item) => {
        console.log(item)
// {pk: 9, menuitem_pk: 11, milk_pk:8, price: 6, quantity: 1, temperature: 'H', size: 16, sweetness: 0}


        try {
            const response=await fetch(`${apiLink}/api/cart/${item.pk}`, {
                method: "PATCH",
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
            // console.log(data)

            return {'updated': data, 'initId': item.pk }
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async (cartitemId) => {
        console.log(cartitemId)
        try {
            const response=await fetch(`${apiLink}/api/cart/${cartitemId}`, {
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
            return cartitemId
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
            // temp_cart_arr:[],
            status: 'idle',
        },
        temp_cart: [],
        batchAddStatus: 'idle',
        addToCartStatus: 'idle',
        removeStatus: 'idle',
        updateStatus: 'idle',
        cartBannerMessage: "",
       
       
    },
    reducers: {
        
        increment(state, action) {
            console.log(action.payload)
            // {
            //     'menuitem_pk': item.menuitem_id, 
            //     'milk_pk': item.milk_id, 
            //     'price': item.price,
            //     'quantity': item.quantity, 
            //     'size': item.size,
            //     'sweetness': item.sweetness,
            //     'temperature': item.temperature
            // }
            let dupItem = state.temp_cart.find(item=> 
                    item.menuitem_pk === action.payload.menuitem_pk
                    && item.milk_pk === action.payload.milk_pk
                    && item.temperature === action.payload.temperature 
                    && item.size === action.payload.size 
                    && item.sweetness === action.payload.sweetness 
            )

            if(dupItem === undefined){
                action.payload.pk = uuidv4(); 
                // action.payload.menuitem_id = action.payload.menuitem_pk
                // action.payload.milk_id = action.payload.milk_pk
                state.temp_cart.push(action.payload)

                // copy item and update keys sync with result returned from API
                const copy = { ...action.payload,
                    menuitem_id: action.payload.menuitem_pk,
                    milk_id: action.payload.milk_pk
                 };
                delete copy.menuitem_pk
                delete copy.milk_pk
                state.cart.cart_arr.push(copy)
            }
            else{
                console.log("item in cart, update quantity in local and api")
                dupItem.quantity+= action.payload.quantity

                const dupItemInAPI = state.cart.cart_arr.find(item=>item.pk === dupItem.pk)
                dupItemInAPI.quantity += action.payload.quantity
            }
            // state.cart.cart_arr = state.temp_cart
            state.addToCartStatus = 'succeeded'
            state.cartBannerMessage = "Item added."
        },
        
        
        updateItem(state, action){
            console.log(action.payload)
            // {'pk': 'b68b4acf-1610-4b3f-b2ec-ca83f6325d85',
            // 'menuitem_pk':7,
            // 'milk_pk': 8,
            // 'quantity': 2, 
            // 'temperature': 'H'', 
            // 'size': 16, 
            // 'sweetness': 0,
            // 'price': 6}
            
            let dupItem = state.temp_cart.find(item=>{ 
                return(
                    item.menuitem_pk === action.payload.menuitem_pk
                    && item.milk_pk === action.payload.milk_pk 
                    && item.temperature === action.payload.temperature 
                    && item.size === action.payload.size 
                    && item.sweetness === action.payload.sweetness 
                )}
            )
            console.log(dupItem)
            if(dupItem === undefined){
                state.temp_cart = state.temp_cart.map(item=>{
                    if(item.pk === action.payload.pk)
                        return action.payload
                    return item
                })

                state.cart.cart_arr = state.cart.cart_arr.map(item=>{
                    if(item.pk === action.payload.pk){
                        const copy = { ...action.payload,
                            menuitem_id: action.payload.menuitem_pk,
                            milk_id: action.payload.milk_pk
                         };
                        delete copy.menuitem_pk
                        delete copy.milk_pk
                        return copy
                    }  
                    return item
                })
            } 
            else {
                dupItem.quantity += action.payload.quantity
                state.temp_cart = state.temp_cart.filter(item=>item.pk !== action.payload.pk)

                state.cart.cart_arr = state.cart.cart_arr.map(item=>{
                    // if(item.pk === action.payload.pk)
                    //     return null
                    if(item.pk === dupItem.pk)
                        item.quantity += action.payload.quantity
                    return item
                    
                })
                state.cart.cart_arr = state.cart.cart_arr.filter(item=>item.pk !== action.payload.pk)

            }

           
            state.updateStatus = 'succeeded'
            state.cartBannerMessage = "Item updated."

        },
        removeItem(state, action){
            // state.temp_cart.splice(action.payload, 1 )
            state.temp_cart = state.temp_cart.filter(item=>item.pk !== action.payload)
            state.cart.cart_arr = state.cart.cart_arr.filter(item=>item.pk !== action.payload)
            state.removeStatus = 'succeeded'
            state.cartBannerMessage = "Item removed."
        },
        resetCartBanner(state, action){
            state.cartBannerMessage = ''
            state.addToCartStatus = 'idle'
            state.removeStatus = 'idle'
            state.updateStatus = 'idle'
        },
        emptyTempCart(state,_){
            state.cart.temp_cart_arr = []
        },
       



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
            // state.cartBannerMessage = "Cart combined."

        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
        .addCase(addItemToCart.pending, (state, action) => {
            state.addToCartStatus = 'loading'
           
        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.addToCartStatus = 'succeeded'
            state.cartBannerMessage = "Item added."
            // state.cart.status = 'succeeded'
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
            state.cartBannerMessage = "Item added."
            
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.addToCartStatus = 'failed'
        })

        .addCase(removeItemFromCart.pending, (state, action) => {
            
            // let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            // item.status = 'loading'

            state.removeStatus = 'loading'
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            state.removeStatus = 'succeeded'
            state.cart.cart_arr = state.cart.cart_arr.filter(cartitem=>cartitem.pk !== action.payload)
            state.cartBannerMessage = "Item removed."
        })
        .addCase(removeItemFromCart.rejected, (state, action) => {
            state.removeStatus = 'failed'
        })
       
        .addCase(updateItemInCart.pending, (state, action) => {
            // console.log(action)
            // let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            // item.status = 'loading'
            state.updateStatus = 'loading'
        })
        .addCase(updateItemInCart.fulfilled, (state, action) => {
            console.log(action.payload)
            // {'updated': data, 'initId': item.cartitemId}
            // (updated: {pk: 12, user_id: 1, menuitem_id: 1, milk_id: 8, quantity: 3, …}, initId: 14 )


            state.updateStatus = 'succeeded'
            state.cartBannerMessage = 'Item updated.'
            // if returned updated item id is different than init Id, it means the item already existed and is merged. 
            // so we deleted the init id from the cart
            if(action.payload.updated.pk !== action.payload.initId){
                state.cart.cart_arr = state.cart.cart_arr.filter(item=>item.pk !== action.payload.initId)
                // update the quantity in cart state
                const cartitem = state.cart.cart_arr.find(item=>item.pk === action.payload.updated.pk)
                cartitem.quantity = action.payload.updated.quantity
            }
            else{
                console.log('update item')
                //returned item_id === initId,  ----> no dup item
                //  updated the item
                let cartitem = state.cart.cart_arr.find(item=>item.pk === action.payload.updated.pk)
               
                cartitem.price = action.payload.updated.price
                cartitem.quantity = action.payload.updated.quantity
                cartitem.milk_id = action.payload.updated.milk_id
                cartitem.temperature = action.payload.updated.temperature
                cartitem.sweetness = action.payload.updated.sweetness
                cartitem.size = action.payload.updated.size

            }
            
            
        })
        .addCase(updateItemInCart.rejected, (state, action) => {
            // let item = state.cart.cart_arr.find(item=>item.pk === action.meta.arg.cartitemId)
            // delete item.status
            state.updateStatus = 'failed'
        })


        .addCase(batchAddItems.pending, (state, action) => {
            state.batchAddStatus = 'loading'
        })
        .addCase(batchAddItems.fulfilled, (state, action) => {
            state.batchAddStatus = 'succeeded'
            state.temp_cart = []
            state.cart.cart_arr = []
        })
        .addCase(batchAddItems.rejected, (state, action) => {
            state.batchAddStatus = 'failed'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.cart.cart_arr = []
            state.cart.temp_cart = []
            state.cart.status = 'idle'
        })
        .addCase(PlaceOrder.fulfilled, (state, action) => {
            state.cart.cart_arr = []
            state.temp_cart = []
            // state.cart.status = 'idle'
            
        })

        
    }
})
export const { batchAddItemsTeset, resetCartBanner,resetAddToCart, increment, updateItem, updateQty, removeItem, emptyTempCart } = cartSlice.actions
export default cartSlice.reducer

export const getSubtotal = (state) =>{
    let subtotal = 0
    // tax = 0
    for(let cart_item of state.cart.cart.cart_arr){
        subtotal += cart_item.price * cart_item.quantity
        
    }
    return subtotal
}
export const getItemsCountInCart = (state) =>{
    let count = 0
    for(let item of state.cart.cart.cart_arr){
        count += item.quantity
    }
    return count
}
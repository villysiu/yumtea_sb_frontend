import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
const addTempCartToAPI = (thunkAPI) =>{
    
    const temp_cart_arr = thunkAPI.getState().cart.cart.temp_cart_arr
    console.log(temp_cart_arr)
    for(let item of temp_cart_arr){
        console.log(item)
        thunkAPI.dispatch(addItemToCart({'menuitem': item.menuitem_id, 'quantity': item.quantity}) )
    }
    thunkAPI.dispatch(emptyTempCart())

}
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
            console.log(data)
            // {"pk": 1, "title": "Red Wine", "slug": "red"}
            addTempCartToAPI(thunkAPI)
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

            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const updateSingleCartQuantity = createAsyncThunk(
    'cart/updateSingleCartQuantity',
    async (item, thunkAPI) => {
        console.log(item)
        // {cartitemId: 33, quantity: 3}
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
            console.log(data)
        //     // {
        //     // 	"pk": 34,
        //     // 	"user_id": 2,
        //     // 	"menuitem": "2019 Chester-Kidder",
        //     // 	"quantity": 2,
        //     // 	"linetotal": "130.00",
        //     // 	"unit_price": "65.00"
        //     // }
            // thunkAPI.dispatch(fetchCart())
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

            cart_arr: [],
            temp_cart_arr:[],
            status: 'idle',
            message: "",
             
        },
       
    },
    reducers: {
        increment(state, action) {
            console.log(action.payload)
            let cartitem = state.cart.temp_cart_arr.find(item=>item.menuitem_id === action.payload.menuitemId)
            
            if(cartitem === undefined){
                console.log("item not in cart")
                state.cart.temp_cart_arr.push(
                    {
                        "menuitem_id": action.payload.menuitemId,
                        "quantity": 1,
                        "linetotal": action.payload.price,
                        "unit_price": action.payload.price
                    }
                )
            }
            else{
                console.log("item in cart")
                cartitem.quantity++
                cartitem.linetotal += cartitem.unit_price
            }
            state.cart.cart_arr = state.cart.temp_cart_arr

          },
          decrement(state, action) {
            console.log(action.payload)
            let cartitem = state.cart.temp_cart_arr.find(cartitem=> cartitem.pk === action.payload)
            // cartitem existed since it is coming from shopping cart 
            cartitem.quantity--
            cartitem.linetotal -= cartitem.unit_price

            state.cart.cart_arr = state.cart.temp_cart_arr
          },

          removeItem(state, action){
            state.cart.temp_cart_arr = state.cart.temp_cart_arr.filter(item=> item.pk !== action.payload)
          },
          emptyTempCart(state,action){
            state.cart.temp_cart_arr = []
          },

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            console.log('WHO COMES FIRST?')
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
            console.log(action.payload)
            let cartitem = state.cart.cart_arr.find(cartitem=>cartitem.menuitem_id === action.payload.menuitem_id)
            
            if(cartitem === undefined){
                console.log("item not in cart")
                state.cart.cart_arr.push(action.payload
                    // {
                    //     "menuitem_id": action.payload.menuitem_id,
                    //     "quantity": 1,
                    //     "linetotal": action.payload.price,
                    //     "unit_price": action.payload.price
                    // }
                )
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
        .addCase(updateSingleCartQuantity.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(updateSingleCartQuantity.fulfilled, (state, action) => {
            state.cart.status = 'succeeded'
            // state.cart.message = 
             let cartitem = state.cart.cart_arr.find(cartitem =>cartitem.pk === action.payload.pk)
             cartitem.quantity = action.payload.quantity
             cartitem.linetotal = cartitem.unit_price * action.payload.quantity

        })
        .addCase(updateSingleCartQuantity.rejected, (state, action) => {
            state.cart.status = 'failed'
        })
    }
})
export const { increment, decrement, removeItem, emptyTempCart } = cartSlice.actions
export default cartSlice.reducer
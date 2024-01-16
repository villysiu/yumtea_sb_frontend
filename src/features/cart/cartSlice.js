import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";


export const fetchCart=createAsyncThunk(
    'cart/fetchCart',
    async () => {
        console.log("fetching cart")
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
            status: 'idle',
            message: "",
             
        },
       
    },
    reducers: {
        increment(state, action) {
            console.log(action.payload)
            let cartitem = state.cart.cart_arr.filter(item=>item.menuitem_id === action.payload.menuitemId)
            
            if(cartitem.length===0){
                console.log("item not in cart")
                state.cart.cart_arr.push(
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
                cartitem[0].quantity++
                cartitem[0].linetotal += cartitem[0].unit_price
            }
            

          },
          decrement(state, action) {
            let menuitem = state.cart.cart_arr.filter(item=> item.pk === action.payload)
            
            menuitem[0].quantity--
            menuitem[0].linetotal -= menuitem[0].unit_price
          },

          removeItem(state, action){
            state.cart.cart_arr = state.cart.cart_arr.filter(item=> item.pk !== action.payload)
          },

    },
    extraReducers(builder) {
      builder
        .addCase(fetchCart.pending, (state, action) => {
            state.cart.status = 'loading'
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
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
            // state.cart.message = 
            // state.cart.cart_arr.push(action.payload)
        })
        .addCase(addItemToCart.rejected, (state, action) => {
            state.cart.status = 'failed'
        })

       
       
    }
})
export const { increment, decrement, removeItem } = cartSlice.actions
export default cartSlice.reducer
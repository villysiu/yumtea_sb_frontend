import { createSlice } from '@reduxjs/toolkit'
// import { fetchCategories, fetchMenuitems, fetchMenuitemsByCategory } from '../menuitem/menuitemSlice'
// import { batchAddItems, removeItemFromCart, updateCartItemQty,updateCartItemOptions, addItemToCart } from '../cart/cartSlice'
import {loginUser, logoutUser,} from '../user/userSlice'
// import { deleteReservation } from '../reservation/reservationSlice'
// import { increment } from '../cart/cartSlice'
const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message_arr: [],
        // cart_message: "",


    },
    reducers: {
      removeMessage: (state)=>{
        state.message_arr = []
      },
      // removeCartMessage: (state) =>{
      //   state.cart_message = null
      // }

    },
    extraReducers(builder) {
        builder

        // .addCase(fetchCategories.rejected, (state, action) => {
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "danger",
        //             content: `${action.error.name}: ${action.error.message} categories from API.`
        //         }
        //     )

        // })
        // .addCase(fetchMenuitems.rejected, (state, action) => {
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "danger",
        //             content: `${action.error.name}: ${action.error.message} from API.`
        //         }
        //     )
        // })
            .addCase(loginUser.rejected, (state, action) => {
                state.message_arr.push(
                    {
                        status: true,
                        type: "danger",
                        content: "Either username or password is incorrect. Please try again."
                    }
                )
            })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: "Good bye"
                }
            )
            

        })
       

    }
})
export default messageSlice.reducer
export const { removeMessage, removeCartMessage } = messageSlice.actions
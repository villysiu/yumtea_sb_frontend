import { createSlice } from '@reduxjs/toolkit'
// import { fetchCategories, fetchMenuitems, fetchMenuitemsByCategory } from '../menuitem/menuitemSlice'
// import { batchAddItems, removeItemFromCart, updateCartItemQty,updateCartItemOptions, addItemToCart } from '../cart/cartSlice'
import {loginUser, logoutUser, registerUser,} from '../user/userSlice'
import {addItemToCart, removeItemFromCart, updateItemInCart} from "../cart/cartSlice";
// import { deleteReservation } from '../reservation/reservationSlice'


// import { increment } from '../cart/cartSlice'
const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [],
        cartMessage: null


    },
    reducers: {
      removeMessage: (state)=>{
        state.messages = state.messages.slice(1)
      },
        clearCartMessage: (state) =>{
            state.cartMessage = null
      }
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
        .addCase(loginUser.fulfilled, (state, action) => {
            state.messages.push(
                {
                    type: "success",
                    content: "Welcome back."
                }
            )
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.messages.push(
                {
                    type: "danger",
                    content: "Either username or password is incorrect. Please try again."
                }
            )
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.messages.push(
                {
                    type: "success",
                    content: "Good bye"
                }
            )
        })
            .addCase(logoutUser.rejected, (state, action) => {
                state.messages.push(
                    {
                        type: "danger",
                        content: "Logout failed. Please try again."
                    }
                )
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.messages.push(
                    {
                        type: "danger",
                        content: "Email already used. Please try again."
                    }
                )

            })

            .addCase(addItemToCart.fulfilled, (state, action) => {
                state.cartMessage = "Item added."
            })

            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                state.cartMessage = "Item removed."
            })

            .addCase(updateItemInCart.fulfilled, (state, action) => {
                state.cartMessage = 'Item updated.'
            })

    }
})
export default messageSlice.reducer
export const { removeMessage, clearCartMessage } = messageSlice.actions

// export const showMessage = (message, messageType, timeout = 3000) => (dispatch) => {
//     // dispatch(setMessage({ message, messageType }));
//
//     // Clear the message after the timeout
//     setTimeout(() => {
//         dispatch(clearMessage());
//     }, timeout);
// };
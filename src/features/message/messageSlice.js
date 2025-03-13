import { createSlice } from '@reduxjs/toolkit'
// import { fetchCategories, fetchMenuitems, fetchMenuitemsByCategory } from '../menuitem/menuitemSlice'
// import { batchAddItems, removeItemFromCart, updateCartItemQty,updateCartItemOptions, addItemToCart } from '../cart/cartSlice'
import {loginUser, logoutUser, registerUser, updatePassword, updateUser,} from '../user/userSlice'
import {addItemToCart, removeItemFromCart, updateItemInCart} from "../cart/cartSlice";
import {loginAdmin, logoutAdmin} from "../admin/adminSlice";
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
            .addCase(registerUser.fulfilled, (state, action) => {
                state.messages.push(
                    {
                        type: "success",
                        content: "New user registered. Please login with credentials"
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

            .addCase(updateUser.fulfilled, (state, action) => {
                state.messages.push(
                    {
                        type: "success",
                        content: "User updated."
                    }
                )
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.messages.push(
                    {
                        type: "danger",
                        content: "Update failed. Please try again."
                    }
                )

            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                console.log("update Password succeeded")
                state.messages.push(
                    {
                        type: "success",
                        content: "User password updated."
                    }
                )

            })
            .addCase(updatePassword.rejected, (state, action) => {
                console.log(action.payload)
                state.messages.push(
                    {
                        type: "danger",
                        content: "Update password failed. Please try again."
                    }
                )

            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.messages.push(
                    {
                        type: "success",
                        content: "Welcome Admin"
                    }
                )
            })

            .addCase(loginAdmin.rejected, (state, action) => {
                console.log(action.payload)
                state.messages.push(
                    {
                        type: "danger",
                        content: action.payload===401 ? "Bad Credential" : "Not an admin"
            }
                )
            })
            .addCase(logoutAdmin.fulfilled, (state, action) => {
                state.messages.push(
                    {
                        type: "success",
                        content: "Good bye Admin"
                    }
                )
            })
            .addCase(logoutAdmin.rejected, (state, action) => {
                state.messages.push(
                    {
                        type: "danger",
                        content: "Logout failed. Please try again."
                    }
                )
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
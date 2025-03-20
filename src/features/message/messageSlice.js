import { createSlice } from '@reduxjs/toolkit'
import {loginUser, logoutUser, registerUser, updatePassword, updateUser,} from '../user/userSlice'
import {addItemToCart, removeItemFromCart, updateItemInCart} from "../cart/cartSlice";
import {
    addMenuitem,
    deleteImage,
    deleteMenuitem,
    loginAdmin,
    logoutAdmin,
    updateMenuitem,
    uploadImage
} from "../admin/adminSlice";
import {PlaceOrder} from "../order/orderSlice";


const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [],
        cartMessage: null


    },
    reducers: {
        setMessage: (state, action) => {
            state.messages.push(action.payload); // Add the message to the messages array
        },
      removeMessage: (state)=>{
        state.messages = state.messages.slice(1)
      },
        clearCartMessage: (state) =>{
            state.cartMessage = null
      }
    },
    extraReducers(builder) {
        builder


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
                state.messages.push(
                    {
                        type: "danger",
                        content: "Update password failed. Please try again."
                    }
                )

            })
            .addCase(addMenuitem.fulfilled, (state, action) => {
                state.messages.push({
                    type: "success",
                    content: "Added new item."

                })
            })
            .addCase(deleteMenuitem.fulfilled, (state, action) => {
                state.messages.push(
                    {
                        type: "success",
                        content: "Item removed."
                    }
                )
            })
            .addCase(updateMenuitem.fulfilled, (state, action) => {
                state.messages.push({
                    type: "success",
                    content: "Updated item."

                })
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.messages.push({
                    type: "success",
                    content: "Updated image."

                })
            })
            .addCase(deleteImage.fulfilled, (state, action) => {
                state.messages.push({
                    type: "success",
                    content: "Deleted image."

                })
            })
            .addCase(PlaceOrder.rejected, (state, action) => {
                    state.messages.push({
                        type: "danger",
                        content: action.payload
                    })
            })
    //

    }
})
export default messageSlice.reducer
export const { setMessage, removeMessage, clearCartMessage } = messageSlice.actions

// export const showMessage = (message, messageType, timeout = 3000) => (dispatch) => {
//     // dispatch(setMessage({ message, messageType }));
//
//     // Clear the message after the timeout
//     setTimeout(() => {
//         dispatch(clearMessage());
//     }, timeout);
// };
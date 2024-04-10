import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchMenuitems, fetchMenuitemsByCategory } from '../menuitem/menuitemSlice'
import { batchAddItems, removeItemFromCart, updateCartItemQty,updateCartItemOptions, addItemToCart } from '../cart/cartSlice'
import { logoutUser,  } from '../user/userSlice'
import { deleteReservation } from '../reservation/reservationSlice'
const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message_arr: []    
    },
    reducers: {
      removeMessage: (state)=>{
        state.message_arr = []
      },

    },
    extraReducers(builder) {
        builder
        .addCase(fetchCategories.rejected, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "danger",
                    content: `${action.error.name}: ${action.error.message} categories from API.`
                }
            )

        })
        .addCase(fetchMenuitems.rejected, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "danger",
                    content: `${action.error.name}: ${action.error.message} from API.`
                }
            )
        })
        .addCase(fetchMenuitemsByCategory.rejected, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "danger",
                    // content: `${action.error.name}: ${action.error.message} from API.`
                    content: "Category not existed. Redirecting to Main Meun."
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
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
            console.log(action.payload)
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: `Item removed from shopping cart.`
                }
            )
        })
        .addCase(batchAddItems.fulfilled, (state, action) => {
            console.log('Batch items added to CART')
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: "Shopping cart has been updated."
                }
            )

        })
        .addCase(updateCartItemQty.fulfilled, (state, action) => {
            console.log(action)
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: `Item quantity updated to ${action.payload.quantity}.`
                }
            )
        })
        .addCase(updateCartItemOptions.fulfilled, (state, action) => {
            console.log(action)
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: `Item's options updated.`
                }
            )
        })
        .addCase(addItemToCart.fulfilled, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: `Item added to shopping cart.`
                }
            )
        })
        .addCase(deleteReservation.fulfilled, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "success",
                    content: `Reservation cancelled .`
                }
            )
        })

    }
})
export default messageSlice.reducer
export const { removeMessage } = messageSlice.actions
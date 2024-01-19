import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchWines } from '../wine/wineSlice'
import { batchAddItems } from '../cart/cartSlice'
import { logoutUser,  } from '../user/userSlice'
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
        .addCase(fetchWines.rejected, (state, action) => {
            state.message_arr.push(
                {
                    status: true,
                    type: "danger",
                    content: `${action.error.name}: ${action.error.message} wines from API.`
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
        // .addCase(addItemToCart.fulfilled, (state, action) => {
        //     console.log('IN MESSAGE AFTER ITEM ADDED')
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "success",
        //             content: "Item updated."
        //         }
        //     )
        // })
        // .addCase(fetchCart.fulfilled, (state, action) => {
        //     console.log('IN MESSAGE AFTER CART FETCHED FROM API')
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "success",
        //             content: "Shopping cart has been updated."
        //         }
        //     )
        // })
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

    }
})
export default messageSlice.reducer
export const { removeMessage } = messageSlice.actions
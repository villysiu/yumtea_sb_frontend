import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchWines } from '../wine/wineSlice'
import { addItemToCart } from '../cart/cartSlice'
const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message_arr: []    
    },
    reducers: {
      removeMessage: (state)=>{
        state.message_arr = []
      },
    //   logoutMessage: (state)=>{
    //     state.status= true
    //     state.type="success"
    //     state.content="Session timed out."
    //   }
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
        // .addCase(addItemToCart.succeeded, (state, action) => {
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "success",
        //             content: `Item added to cart.`
        //         }
        //     )
        // })
        // .addCase(fetchWines.rejected, (state, action) => {
        //     state.message_arr.push(
        //         {
        //             status: true,
        //             type: "danger",
        //             content: `Item failed adding to cart.`
        //         }
        //     )
        // })
    }
})
export default messageSlice.reducer
export const { removeMessage } = messageSlice.actions
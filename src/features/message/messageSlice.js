import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchWines } from '../wine/wineSlice'

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
    }
})
export default messageSlice.reducer
export const { removeMessage } = messageSlice.actions
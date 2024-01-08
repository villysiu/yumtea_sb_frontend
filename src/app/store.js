
import { configureStore } from '@reduxjs/toolkit'
import messageSlice from '../features/message/messageSlice'
import userReducer from '../features/user/userSlice'
import wineSlice from '../features/wine/wineSlice' 
export default configureStore({
  reducer: {
    user: userReducer,
    wine: wineSlice,
    message: messageSlice,
  },
})
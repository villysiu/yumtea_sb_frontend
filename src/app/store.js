
import { configureStore } from '@reduxjs/toolkit'
import messageSlice from '../features/message/messageSlice'
import userReducer from '../features/user/userSlice'
import wineSlice from '../features/wine/wineSlice' 
import cartSlice from '../features/cart/cartSlice'
import orderSlice from '../features/order/orderSlice'
import reservationSlice from '../features/reservation/reservationSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    wine: wineSlice,
    message: messageSlice,
    cart: cartSlice,
    order: orderSlice,
    reservation: reservationSlice,

  },
})
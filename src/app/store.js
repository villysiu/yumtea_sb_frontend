
import { configureStore } from '@reduxjs/toolkit'
import messageSlice from '../features/message/messageSlice'
import userReducer from '../features/user/userSlice'
import menuitemSlice from '../features/menuitem/menuitemSlice' 
import cartSlice from '../features/cart/cartSlice'
import orderSlice from '../features/order/orderSlice'
import reservationSlice from '../features/reservation/reservationSlice'
import taxRateSlice from "../features/taxRate/taxRateSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    menuitem: menuitemSlice,
    message: messageSlice,
    cart: cartSlice,
    order: orderSlice,
    reservation: reservationSlice,
    taxRate: taxRateSlice
  },
})
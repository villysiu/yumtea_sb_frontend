
import { configureStore } from '@reduxjs/toolkit'
import messageSlice from '../features/message/messageSlice'
import userSlice from '../features/user/userSlice'
import menuitemSlice from '../features/menuitem/menuitemSlice' 
import cartSlice from '../features/cart/cartSlice'
import orderSlice from '../features/order/orderSlice'
// import reservationSlice from '../features/reservation/reservationSlice'
// import taxRateSlice from "../features/taxRate/taxRateSlice";
import adminSlice from "../features/admin/adminSlice";
import accountSlice from "../features/admin/account/accountSlice";


export default configureStore({
  reducer: {
    user: userSlice,
    menuitem: menuitemSlice,
    message: messageSlice,
    cart: cartSlice,
    order: orderSlice,
    // reservation: reservationSlice,
    // taxRate: taxRateSlice,
    admin: adminSlice,
    account: accountSlice
  },
})
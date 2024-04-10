import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearorder } from "../order/orderSlice"
import { Outlet, useLocation } from "react-router-dom"
import { clear_reservation_status } from "../reservation/reservationSlice"
const ResetApp =() =>{
    const location = useLocation()

    const order_status = useSelector(state=>state.order.checkout_status)
    const reservation_status = useSelector(state=>state.reservation.create_or_update_status)
    const dispatch = useDispatch()
    
   
    const regex = /\/secure\/reservations\/\d+\/update/
    
    useEffect(()=>{
        // Reset order link from and order status
       
        // console.log(reservation_status)
        console.log(location.pathname)
        console.log(regex.test(location.pathname))
        if( location.pathname !== '/secure/reservations/success' &&
            !regex.test(location.pathname)){
            if(reservation_status !== 'idle')
                dispatch(clear_reservation_status())
        }
        if(location.pathname !== "/secure/checkout" && 
            location.pathname !== "/secure/ordersuccess"
        ){
        
            if(order_status !== 'idle')
                dispatch(clearorder())
        }
    },[order_status, location.pathname])
    return(
        <Outlet />
    )
}
export default ResetApp
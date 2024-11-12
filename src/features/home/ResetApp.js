import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearorder } from "../order/orderSlice"
import { Outlet, useLocation } from "react-router-dom"
import { clear_reservation_status, clear_delete_status } from "../reservation/reservationSlice"

const ResetApp =() =>{
    const location = useLocation()
    const order_status = useSelector(state=>state.order.checkout_status)
    const dispatch = useDispatch()
    
    useEffect(()=>{

        // Reset order status
        if(location.pathname !== "/secure/checkout" && 
            location.pathname !== "/secure/ordersuccess"
        ){
        
            if(order_status !== 'idle')
                dispatch(clearorder())
        }
        
    }, [order_status, location.pathname, dispatch])

    return null
    
}
export default ResetApp
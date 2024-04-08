import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clickatat } from "../headerNav/routeSlice"
import { clearorder } from "../order/orderSlice"
import { Outlet } from "react-router-dom"
const ResetApp =() =>{
    const from = useSelector(state=>state.route.from)
    const order_status = useSelector(state=>state.order.checkout.status)
    const dispatch = useDispatch()
    useEffect(()=>{
        // Reset order link from and order status
        console.log(from)
        if(from )
            dispatch(clickatat(''))
        if(order_status !== 'idle')
            dispatch(clearorder())
    },[from, order_status])
    return(
        <Outlet />
    )
}
export default ResetApp
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUserOrders } from "./orderSlice"
import { USDollar } from "../../app/global"

const OrderHistory = () =>{
    const dispatch = useDispatch()
    const {status, orders_arr} = useSelector(state => state.order.order) 
    useEffect(()=>{
        if(status === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [])
    return (
        <>
            <h2>Order History</h2>
            
            <div className="orderhistory_wrapper">
            <div style={{width: '100%', textAlign: 'right'}}>Order Date filter dropbox goes here</div>
            {
                orders_arr.map(order => {
                    return (
                        <div className='orderhistory_order'>
                            <div className='orderhistory_order_details_l'>
                                <div className='orderhistory_order_col'>{order.date}</div>
                                <div className='orderhistory_order_col'>Order #{order.pk}</div>
                            </div>
                            <div className='orderhistory_order_details_c'>
                                <div className='orderhistory_order_col'>{USDollar.format(order.total)}</div>
                                <div className='orderhistory_order_col'>{order.order_status}</div>
                            </div>
                            <div className='orderhistory_order_details_r'>
                                +
                            </div>
                        </div>

                    )
                })
            }
            </div>
        </>

    )
}
export default OrderHistory
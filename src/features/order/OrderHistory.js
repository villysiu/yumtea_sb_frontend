import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUserOrders } from "./orderSlice"
import SingleOrder from "./SingleOrder"
import OrderFilter from "./OrderFilter"
import { lastthirtydaysOrders, currentyearOrders, lastyearOrders } from "./orderSlice"
import {Spinner} from 'react-bootstrap'

const OrderHistory = () =>{

    const dispatch = useDispatch()
    const [show, setShow] = useState(null)
    const [filter, setFilter] =useState(7)

    const ordersStatus = useSelector(state=>state.order.status)
    const orders = useSelector(state =>lastthirtydaysOrders(state.order.orders, filter)) 
   
    useEffect(()=>{
        if(ordersStatus === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [ordersStatus, dispatch])

    useEffect(()=>{
        // close order details when filter option changed
        setShow(null)
    }, [filter])
   
    if(ordersStatus === 'loading' || ordersStatus === 'idle')
        return <Spinner />
    
    if(orders.length === 0)
        return <div>No order</div> 

    return (
        <div className='order_history_wrapper'>
            <h2 >Order History</h2>
            
            <div className="order_history">
                <div className="order_filter">
                    <OrderFilter filter={filter} setFilter={setFilter} />
                </div>
                {
                    orders.map(order => {
                        return (
                            <SingleOrder key={order.pk} order={order} show={show} setShow={setShow}/>
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default OrderHistory
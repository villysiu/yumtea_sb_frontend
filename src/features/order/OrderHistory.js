import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchCurrentUserOrders, getOrders} from "./orderSlice"
import SingleOrder from "./SingleOrder"
import OrderFilter from "./OrderFilter"
import { lastthirtydaysOrders, currentyearOrders, lastyearOrders } from "./orderSlice"
import {Spinner} from 'react-bootstrap'

const OrderHistory = () =>{

    const dispatch = useDispatch()
    const [show, setShow] = useState(null)
    const [days, setDays] =useState(3)

    const ordersStatus = useSelector(state=>state.order.status)
    const orders = useSelector(state =>getOrders(state, days))
   
    useEffect(()=>{
        if(ordersStatus === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [ordersStatus, dispatch])

    useEffect(()=>{
        // close order details when filter option changed
        setShow(null)
    }, [days])
   
    if(ordersStatus === 'loading' || ordersStatus === 'idle')
        return <Spinner />
    


    return (
        <div className='order_history_wrapper'>
            <h2 >Order History</h2>
            
            <div className="order_history">
                <div className="order_filter">
                    <OrderFilter filter={days} setFilter={setDays} />
                </div>

                {
                    orders.length === 0 ?

                        <h3>You don't have any recent orders.</h3>
                    :
                        orders.map(order => {
                            return (
                                <SingleOrder key={order.id} order={order} show={show} setShow={setShow} />
                            )
                        })
                } 
            </div>
        </div>
    )
}

export default OrderHistory
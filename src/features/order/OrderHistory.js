import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUserOrders } from "./orderSlice"
import SingleOrder from "./SingleOrder"
import OrderFilter from "./OrderFilter"
import { lastthirtydaysOrders, currentyearOrders, lastyearOrders } from "./orderSlice"
import FullSpinner from "../headerNav/FullSpinner"

const OrderHistory = () =>{

    const dispatch = useDispatch()
    const [show, setShow] = useState(null)
    const [filter, setFilter] =useState(0)

    const order = useSelector(state =>{
        if(filter === '1')
            return lastthirtydaysOrders(state)
        if(filter === '2')
            return currentyearOrders(state)
        if(filter === '3'){
            return lastyearOrders(state)}
        return state.order.order
    } ) 
   
    useEffect(()=>{
        if(order.status === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [order.status, dispatch])

    useEffect(()=>{
        // close order details when filter option changed
        setShow(null)
    }, [filter])
   
    if(order.status === 'loading' )
        return <FullSpinner />
    if(order.orders_arr.length === 0)
        return <div>No order</div>

    return (
        <div className='app_width'>
            <h2 style={{textAlign: 'center'}}>Order History</h2>
            
            <div className="orderhistory_wrapper">
                <div style={{width: '100%', textAlign: 'right'}}>
                    <OrderFilter filter={filter} setFilter={setFilter} />
                </div>
                {
                    order.orders_arr.map(order => {
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
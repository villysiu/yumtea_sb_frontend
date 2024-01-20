import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUserOrders } from "./orderSlice"
import SingleOrder from "./SingleOrder"

const OrderHistory = () =>{

    const dispatch = useDispatch()
    const {status, orders_arr} = useSelector(state => state.order.order) 

    const [show, setShow] = useState(null)
    
    

    useEffect(()=>{
        if(status === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [])
    return (
        <div className='app_width'>
            <h2 style={{textAlign: 'center'}}>Order History</h2>
            
            <div className="orderhistory_wrapper">
            <div style={{width: '100%', textAlign: 'right'}}>Order Date filter dropbox goes here</div>
            {
                orders_arr.map(order => {
                    return (
                        <SingleOrder order={order} show={show} setShow={setShow}/>

                    )
                })
            }
            </div>
        </div>

    )
}
export default OrderHistory
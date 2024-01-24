import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUserOrders } from "./orderSlice"
import SingleOrder from "./SingleOrder"
import OrderFilter from "./OrderFilter"

const OrderHistory = () =>{

    const dispatch = useDispatch()
    const {status, orders_arr} = useSelector(state => state.order.order) 

    const [show, setShow] = useState(null)
    const [selected, setSelected] =useState(0)
    

    useEffect(()=>{
        if(status === 'idle')
            dispatch(fetchCurrentUserOrders())
    }, [])

    useEffect(()=>{
        setShow(null)
    }, [selected])
    const DateFilterHelper = (date) =>{
        
        if(selected===1){
            const current = new Date()
            current.setDate(current.getDate()-30)
    
            return new Date(date) > current
        
        }
        if(selected === 2){
            const current = new Date().getFullYear()
            const regex = /(\d{4})/g;
            const found = date.match(regex);
            
            return parseInt(found[0]) === current
        }
        if(selected === 3){
            const last = new Date().getFullYear() -1
            const regex = /(\d{4})/g;
            const found = date.match(regex);
            
            return parseInt(found[0]) === last
        }
        return true
    }
    return (
        <div className='app_width'>
            <h2 style={{textAlign: 'center'}}>Order History</h2>
            
            <div className="orderhistory_wrapper">
                <div style={{width: '100%', textAlign: 'right'}}>
                    <OrderFilter selected={selected} setSelected={setSelected} />
                </div>
                {
                    orders_arr
                    .filter(order=>{
                        return (
                            DateFilterHelper(order.date)
                        )
                    })
                    .map(order => {
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
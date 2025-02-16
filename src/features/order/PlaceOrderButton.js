import './order.css'
import { Button, Spinner } from "react-bootstrap"
import {PlaceOrder} from './orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useEffect } from 'react'
const PlaceOrderButton = ({tip}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    // const cart_status = useSelector(state=>state.cart.cart.status)
    const checkout_status = useSelector(state=>state.order.checkout_status)


    useEffect(()=>{
        if(checkout_status === 'succeeded'){
            navigate('/secure/ordersuccess')  
        }
        
        // restrict access from URL
        // else if(checkout_status === 'failed'
        //     //  || cart_status==='idle'
        //     ){
        //     navigate(`/cart` ) //dont have a cart page!!!
        // }
        
    },[checkout_status, navigate])
    
    const handleClick = () =>{
        dispatch(PlaceOrder({
            "tip": tip,
            "state": "WA"
        }))
    }
    if(checkout_status === 'loading'){
        return(
            <div className="place_order_wrapper"> 
                <Button className='place_order_button' disabled>
                    
                    <Spinner />
                </Button>
            </div>
            
        )
    }
        
    return (
        <div className="place_order_wrapper"> 
            <Button className='place_order_button' onClick={handleClick}>
                
                Place Order
            </Button>
        </div>
    )
}
export default PlaceOrderButton
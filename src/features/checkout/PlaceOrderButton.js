import '../order/order.css'
import { Button, Spinner } from "react-bootstrap"
import {PlaceOrder} from '../order/orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate, useNavigate} from 'react-router-dom'
import {useEffect } from 'react'
const PlaceOrderButton = ({tip, tax}) =>{
    const dispatch = useDispatch()

    const {checkoutStatus} = useSelector(state=>state.order)

    
    const handleClick = () =>{
        dispatch(PlaceOrder({
            "tip": tip,
            "tax": tax
        }))
    }

    if(checkoutStatus === 'loading'){
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
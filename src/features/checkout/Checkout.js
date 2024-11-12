import './checkout.css'

import { useLocation, Navigate } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotal, getItemsCountInCart } from "../cart/cartSlice"
import CartSummary from './CartSummary'

import { useEffect, useState } from "react"
import Tip from "./Tip"
import PlaceOrderButton from '../order/PlaceOrderButton'

const Checkout = () => {
    console.log("in checkout page")
    const location = useLocation()
    console.log(location)

    const [tip, setTip] = useState(0);
    const [cartSummary, showCartSummary] = useState(false);

    const cart_status = useSelector(state=>state.cart.cart.status)
    const subtotal = useSelector(state => getSubtotal(state))
    const count = useSelector(state => getItemsCountInCart(state))
   
    if(!location.state || location.state.clicked !== 'checkout_button'){
        return (
            <Navigate to="../../collection" />
        )
    }

    return(
        <div className='checkout'>
            <div className='checkout_order_summary '>
                <div onClick={()=>showCartSummary(c=>!c)}>Order Summary</div> {" "}({count} items)
            </div>
            {
                cartSummary && <CartSummary />
                
            }
            
            
            <div className="checkout_summary_line checkout_subtotal">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            
            <div className="checkout_summary_line checkout_tax">
                <div>Estimated Tax</div>
                <div>{USDollar.format(subtotal * 0.1)}</div>
            </div>
   
            {
                <div className='checkout_tip'>
                    <div className="checkout_summary_line">
                        <div>Tip </div>
                        <div>{USDollar.format(tip)}</div>

                    </div>
                    <Tip tip={tip} setTip={setTip} subtotal={subtotal} />
                
                 </div>
            }
    
            <div className="checkout_summary_line checkout_total">
                <div>Total</div>
                <div>{USDollar.format(subtotal + subtotal * 0.1 + tip)}</div>
            </div>
            
            <PlaceOrderButton tip={tip}/>
            
        </div>
    )
}
export default Checkout
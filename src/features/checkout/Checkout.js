import './checkout.css'
// import { Button } from "react-bootstrap"
// import { useNavigate } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotal, getItemsCountInCart } from "../cart/cartSlice"
import CartSummary from '../cart/CartSummary'
// import { useDispatch } from "react-redux"
// import { CheckoutCart } from "./orderSlice"
import { useEffect, useState } from "react"
import Tip from "./Tip"

const Checkout = () => {
    console.log("chchhchchchchhc")


    const [tip, setTip] = useState(0);
    const [cartSummary, showCartSummary] = useState(false);


    const cart_status = useSelector(state=>state.cart.cart.status)
    const subtotal = useSelector(state => getSubtotal(state))
    const count = useSelector(state => getItemsCountInCart(state))
   


    return(
        <div className='checkout'>
            <div className='checkout_order_summary '>
                <div onClick={()=>showCartSummary(c=>!c)}>Order Summary</div> {" "}({count} items)
            </div>
            {
                cartSummary && 
                <CartSummary />
                
            }
            
            
            <div className="checkout_summary_line checkout_subtotal">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
                {/* <div>{USDollar.format(subtotal)}</div> */}
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
            
            
            {/* <div className="cart_summary_checkout mt-5"> */}
                {/* <Button className='gold_button full' onClick={handleClick}>Pay Now</Button> */}
            {/* </div> */}
        </div>
    )
}
export default Checkout
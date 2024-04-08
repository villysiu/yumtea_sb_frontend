import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotalAndTax } from "../cart/cartSlice"
import { useDispatch } from "react-redux"
import { CheckoutCart } from "./orderSlice"
import { useEffect, useState } from "react"
import Tip from "./Tip"

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tip, setTip] = useState(0);
    const [subtotal, tax] = useSelector(state=>getSubtotalAndTax(state.cart.cart.cart_arr))
    const [total, setTotal] = useState(0)
    const from = useSelector(state=>state.route.from)
    const checkout_status = useSelector(state=>state.order.checkout.status)
    useEffect(()=>{
        setTotal(tip+subtotal+tax)
    }, [tip, subtotal, tax])

    useEffect(()=>{
        if(checkout_status === 'succeeded' && from === 'Checkout2'){
            navigate(`/secure/ordersuccess` )
        }
        // Check if it is coming from Cart Summary, if not, go back to cart
        //restrict access from URL
        else if(from !== "CartSummary" || checkout_status === 'failed'){
            navigate(`/cart` )
           
        }
        //  if(checkout_status === 'loading'  {
        //    spinner?
        //     
        // }
    },[checkout_status, from])
    
    const handleClick = () =>{
        dispatch(CheckoutCart(tip))
    }

    return(
        <div className='checkout'>
            <div className='mb-3 solid_link'>
                Order Summary
            </div>
            
            
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            
            <div className="cart_summary_line">
                <div>Tax</div>
                <div>{USDollar.format(tax)}</div>
            </div>
            {
                <>
                <div className="cart_summary_line">
                    <div>Tip </div>
                    <div>{USDollar.format(tip)}</div>
                </div>
                <Tip setTip={setTip} subtotal={subtotal} />
                </>
            }
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Total </div>
                <div>{USDollar.format(total)}</div>
            </div>
            
            
            <div className="cart_summary_checkout mt-5">
                <Button className='gold_button full' onClick={handleClick}>Pay Now</Button>
            </div>
        </div>
    )
}
export default Checkout
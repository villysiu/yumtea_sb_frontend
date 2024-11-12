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
    console.log("chchhchchchchhc")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tip, setTip] = useState(0);
    const [subtotal, tax] =[0,0]
    // const [subtotal, tax] = useSelector(state=>getSubtotalAndTax(state.cart.cart.cart_arr))
    const [total, setTotal] = useState(0)
    const cart_status = useSelector(state=>state.cart.cart.status)
    const checkout_status = useSelector(state=>state.order.checkout_status)
    
    useEffect(()=>{
        setTotal(tip+subtotal+tax)
    }, [tip, subtotal, tax])

    useEffect(()=>{
        if(checkout_status === 'succeeded'){
            navigate(`/secure/ordersuccess` )
        }
        
        //restrict access from URL
        else if(checkout_status === 'failed' || cart_status==='idle'){
            navigate(`/cart` )
        }
        //  if(checkout_status === 'loading'  {
        //    spinner?
        //     
        // }
    },[checkout_status, cart_status, navigate])
    
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
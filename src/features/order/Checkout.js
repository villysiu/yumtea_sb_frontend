import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotalAndTax } from "../cart/cartSlice"
import { useDispatch } from "react-redux"
import { CheckoutCart } from "./orderSlice"
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react"
import Tip from "./Tip"
const Checkout = () => {
    let { state } = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tip, setTip] = useState(0);
    console.log(state)
    const [subtotal, tax] = useSelector(state=>getSubtotalAndTax(state.cart.cart.cart_arr))

    // prohibited direct access this page
    if(!state ){
        return <Navigate to="../../cart" replace={true} />}
       
    const handleClick = () =>{
        dispatch(CheckoutCart())
        .unwrap()
        .then((originalPromiseResult) => {
            console.log(originalPromiseResult)
            navigate("../ordersuccess", { state: { from: "order_summary", order_pk: originalPromiseResult.pk, order_date: originalPromiseResult.date } });
        })
        .catch((rejectedValueOrSerializedError) => {
        // handle error here
        })
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
                {/* // tip>0 && */}
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
                <div>{USDollar.format(subtotal+tax)}</div>
            </div>
            
            
            <div className="cart_summary_checkout mt-5">
                <Button className='gold_button' onClick={handleClick}>Pay Now</Button>
            </div>
        </div>
    )
}
export default Checkout
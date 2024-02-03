import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CartSummaryDetails from "../cart/CartSummaryDetails"
import { useDispatch } from "react-redux"
import { CheckoutCart } from "./orderSlice"
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react"
import Tip from "./Tip"
const Checkout = () => {
    let { state } = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tip, setTip] = useState(6);
    console.log(state)
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
            <Tip tip={tip} setTip={setTip} />
            <CartSummaryDetails  tip={tip}/>
            
            <div className="cart_summary_checkout mt-5">
                <Button className='gold_button' onClick={handleClick}>Pay Now</Button>
            </div>
        </div>
    )
}
export default Checkout
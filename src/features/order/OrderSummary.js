import { Button } from "react-bootstrap"
import { homeLink, USDollar } from "../../app/global"
import { Link, useNavigate } from "react-router-dom"
import CartSummaryDetails from "../cart/CartSummaryDetails"
import { useDispatch } from "react-redux"
import { CheckoutCart } from "./orderSlice"

const OrderSummary = ({subtotal, tax}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        <div className='cart_summary'>
            <CartSummaryDetails subtotal={subtotal} tax={tax} />
            
            <div className="cart_summary_checkout mt-5">
                <Button className='gold_button' onClick={handleClick}>Pay Now</Button>
            </div>
        </div>
    )
}
export default OrderSummary
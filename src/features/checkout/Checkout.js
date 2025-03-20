import './checkout.css'

import {Navigate, useLocation, useNavigate} from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotal } from "../cart/cartSlice"


import { useEffect, useState } from "react"
import Tip from "./Tip"
import PlaceOrderButton from './PlaceOrderButton'
import CartSummaryLineItem from "./CartSummaryLineItem";
import {calculateTax} from "../order/orderSlice";
import BackToMenuButton from "./BackToMenuButton";

const Checkout = () => {
    console.log("in checkout page")
    const location = useLocation()

    const {carts} = useSelector(state => state.cart)

    const {subtotal, count} = useSelector(state => getSubtotal(state))
    const tax = useSelector(state => calculateTax(state, subtotal))
    const [tip, setTip] = useState("0");
    const {checkoutStatus} = useSelector(state=>state.order)

    if(checkoutStatus === 'failed') {
        return <Navigate to="/secure/checkout" />
    }
    if(checkoutStatus === "succeeded")
        return <Navigate to="/secure/ordersuccess" />

    if(carts.length === 0)
        return(
            <div className='checkout'>
                <div><b>Shopping Cart is empty</b></div>
                <BackToMenuButton />
            </div>
        )


    return (
        <div className='checkout'>
            <div className='checkout_order_summary '>
                <div><b>Shopping Cart </b></div> ({`${count} ${count === 1 ? 'item' : 'items'}`})
            </div>
            <div className='cart_summary'>
                {
                    carts.map(cartItem => <CartSummaryLineItem key={cartItem.id} cartItem={cartItem} />)
                }
            </div>


            <div className="checkout_summary_line checkout_subtotal">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>

            <div className="checkout_summary_line checkout_tax">
                <div>Estimated Tax</div>
                <div>{USDollar.format(tax)}</div>
            </div>

            <Tip tip={tip} setTip={setTip} subtotal={subtotal}/>


            <div className="checkout_summary_line checkout_total">
                <div>Total</div>
                <div>{USDollar.format(subtotal + tip + tax)}</div>
            </div>

            <PlaceOrderButton tip={tip} tax={tax} />

        </div>
    )
}
export default Checkout
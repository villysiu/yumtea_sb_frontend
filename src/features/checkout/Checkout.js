import './checkout.css'

import { useLocation, Navigate } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotal } from "../cart/cartSlice"


import { useEffect, useState } from "react"
import Tip from "./Tip"
import PlaceOrderButton from '../order/PlaceOrderButton'
import CartSummaryLineItem from "./CartSummaryLineItem";
import {calculateTax} from "../taxRate/taxRateSlice";

const Checkout = () => {
    console.log("in checkout page")
    const location = useLocation()
    console.log(location)

    const {carts} = useSelector(state => state.cart)
    // const {taxRate} = useSelector(state=>state.taxRate)
    const {subtotal, count} = useSelector(state => getSubtotal(state))
    const tax = useSelector(state => calculateTax(state, subtotal))
    const [tip, setTip] = useState("0");
    // if(!location.state || location.state.clicked !== 'checkout_button'){
    //     return (
    //         <Navigate to="../../collection" />
    //     )
    // }



    return(
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
                <div>{USDollar.format(subtotal  + (tip===""? 0.0 : parseFloat(tip)) + tax)}</div>
            </div>

            <PlaceOrderButton tip={parseFloat(tip)}/>

        </div>
    )
}
export default Checkout
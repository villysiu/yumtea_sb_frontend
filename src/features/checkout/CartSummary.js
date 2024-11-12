// import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryLineItem from "./CartSummaryLineItem"
import { useSelector } from "react-redux"

const CartSummary = () =>{
    const cart_arr = useSelector(state => state.cart.cart.cart_arr)
    console.log(cart_arr)
                
    return(
        <div className='cart_summary'>
            {
                cart_arr.map(cartItem=>{
                    return (
                        <CartSummaryLineItem cartItem={cartItem} />
                    )
                })
            }
        </div>
    )
}
export default CartSummary
// import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryLineItem from "./CartSummaryLineItem"
import { useSelector } from "react-redux"

const CartSummary = () =>{
    const {carts} = useSelector(state => state.cart)
    console.log(carts)

    return(
        <div className='cart_summary'>
            {
                carts.map(cartItem=>{
                    return (
                        <CartSummaryLineItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
        </div>
    )
}
export default CartSummary
import { Button } from "react-bootstrap"
import { homeLink, USDollar } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryDetails from "./CartSummaryDetails"
const CartSummary = ({subtotal, tax}) =>{
    
    return(
        <div className='cart_summary'>
            <CartSummaryDetails subtotal={subtotal} tax={tax} />
            
            <div className="cart_summary_checkout mt-5">
                <Link to={`${homeLink}/secure/checkout`} state={{ 'subtotal': subtotal, 'tax': tax}}>
                    <Button className='gold_button'>Checkout</Button>
                </Link>
            </div>
        </div>
    )
}
export default CartSummary
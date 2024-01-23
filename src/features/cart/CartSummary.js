import { Button } from "react-bootstrap"
import { homeLink, USDollar } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryDetails from "./CartSummaryDetails"
const CartSummary = ({subtotal}) =>{
    
    return(
        <div className='cart_summary'>
            <CartSummaryDetails subtotal={subtotal} />
            
            <div className="cart_summary_checkout mt-5">
                <Link to={`${homeLink}/secure/checkout`} state={{ 'btn':'ccc', 'subtotal': subtotal}}>
                    <Button className='gold_button'>Checkout</Button>
                </Link>
            </div>
        </div>
    )
}
export default CartSummary
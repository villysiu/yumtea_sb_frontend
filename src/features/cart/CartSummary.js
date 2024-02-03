import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryDetails from "./CartSummaryDetails"

const CartSummary = () =>{
    
    return(
        <div className='cart_summary'>
            <CartSummaryDetails/>
            
            <div className="cart_summary_checkout mt-5">
                <Link to={`${homeLink}/secure/checkout`} state={{ 'from': 'cart_summary'}}>
                    <Button className='gold_button'>Checkout</Button>
                </Link>
            </div>
        </div>
    )
}
export default CartSummary
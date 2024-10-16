import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryDetails from "./CartSummaryDetails"
import { useSelector } from "react-redux"
import SmokySpinner from "../headerNav/SmokySpinner"

const CartSummary = () =>{
    const cart = useSelector(state => state.cart.cart)

                
    return(
        <div className='cart_summary'>
            <div style={{ 'position': "relative"}}>
                { cart.status === 'loading' && <SmokySpinner /> }
                <CartSummaryDetails/>
                
                <div className="cart_summary_checkout">
                
                    <Link to={`${homeLink}/secure/checkout`}
                        // onClick={handleClick}
                    >
                        <Button className='gold_button full'>Checkout</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CartSummary
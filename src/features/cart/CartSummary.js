import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartSummaryDetails from "./CartSummaryDetails"
import { useSelector } from "react-redux"
import SmokySpinner from "../headerNav/SmokySpinner"
import { clickatat } from "../headerNav/routeSlice"
import { useDispatch } from "react-redux"
const CartSummary = () =>{
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const handleClick =() =>{
        dispatch(clickatat("CartSummary"))
    }
                
    return(
        <div className='cart_summary'>
            <div style={{ 'position': "relative"}}>
                { cart.status === 'loading' && <SmokySpinner /> }
                <CartSummaryDetails/>
                
                <div className="cart_summary_checkout">
                
                    <Link to={`${homeLink}/secure/checkout`}
                        onClick={handleClick}
                    >
                        <Button className='gold_button full'>Checkout</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CartSummary
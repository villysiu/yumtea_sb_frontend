import { Button } from "react-bootstrap"
import { homeLink, USDollar } from "../../app/global"
import { Link } from "react-router-dom"
const CartSummary = ({subtotal}) =>{
    const shipping = 10
    const tax = subtotal *0.1
    const total = subtotal + tax + shipping
    return(
        <div className='cart_summary'>
            <div className='mb-3 solid_link'>Order Summary</div>
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            <div className="cart_summary_line">
                <div>Estimated Shipping </div>
                <div>{USDollar.format(shipping)}</div>
            </div>
            <div className="cart_summary_line">
                <div>Estimated Tax </div>
                <div>{USDollar.format(tax)}</div>
                </div>
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Estimated Total </div>
                <div>{USDollar.format(total)}</div>
            </div>
            
            <div className="cart_summary_checkout mt-5">
                <Link to={`${homeLink}/secure/checkout`} state={{ 'btn':'ccc', 'subtotal': subtotal, 'shipping':shipping, 'tax':tax }}>
                    <Button className='gold_button'>Checkout</Button>
                </Link>
            </div>
        </div>
    )
}
export default CartSummary
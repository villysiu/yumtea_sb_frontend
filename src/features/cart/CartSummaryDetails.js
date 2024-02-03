import { homeLink, USDollar } from "../../app/global"
import { useSelector } from "react-redux"

const CartSummaryDetails = ({tip}) =>{
    const cart = useSelector(state=>state.cart.cart)
    return (
        <>
            <div className='mb-3 solid_link'>
                Order Summary
            </div>
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(cart.subtotal)}</div>
            </div>
            {
                tip>0 &&
                <div className="cart_summary_line">
                    <div>Tip </div>
                    <div>{USDollar.format(tip)}</div>
                </div>
            }
            <div className="cart_summary_line">
                <div>Tax</div>
                <div>{USDollar.format(cart.tax)}</div>
                </div>
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Total </div>
                <div>{USDollar.format(cart.subtotal+cart.tax)}</div>
            </div>
        </>
    )
}
export default CartSummaryDetails
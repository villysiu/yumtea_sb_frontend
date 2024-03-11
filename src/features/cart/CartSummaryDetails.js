import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getSubtotalAndTax } from "./cartSlice"
const CartSummaryDetails = () =>{
    // const cart = useSelector(state=>state.cart.cart)
    const [subtotal, tax] = useSelector(state=>getSubtotalAndTax(state.cart.cart.cart_arr))
    return (
        <>
            <div className='mb-3 solid_link'>
                Order Summary
            </div>
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            {/* {
               
                <div className="cart_summary_line">
                    <div>Tip </div>
                    <div>{USDollar.format(tip)}</div>
                </div>
            } */}
            <div className="cart_summary_line">
                <div>Tax</div>
                <div>{USDollar.format(tax)}</div>
                </div>
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Total </div>
                <div>{USDollar.format(subtotal+tax)}</div>
            </div>
        </>
    )
}
export default CartSummaryDetails
import { homeLink, USDollar } from "../../app/global"

const CartSummaryDetails = ({subtotal}) =>{
    const shipping = 10
    const tax = subtotal *0.1
    const total = subtotal + tax + shipping
    return (
        <>
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
        </>
    )
}
export default CartSummaryDetails
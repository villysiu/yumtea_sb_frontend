import { homeLink, USDollar } from "../../app/global"

const CartSummaryDetails = ({subtotal}) =>{
    const gratuity = subtotal * 0.15
    const tax = subtotal *0.1
    const total = subtotal + tax + gratuity
    return (
        <>
        <div className='mb-3 solid_link'>Order Summary</div>
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            <div className="cart_summary_line">
                <div>Gratuity </div>
                <div>{USDollar.format(gratuity)}</div>
            </div>
            <div className="cart_summary_line">
                <div>Tax</div>
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
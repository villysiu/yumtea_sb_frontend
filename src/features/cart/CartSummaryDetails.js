import { homeLink, USDollar } from "../../app/global"

const CartSummaryDetails = ({subtotal, tax}) =>{
    
   
    const total = subtotal + tax 
    return (
        <>
        <div className='mb-3 solid_link'>Order Summary</div>
            <div className="cart_summary_line">
                <div>Subtotal</div>
                <div>{USDollar.format(subtotal)}</div>
            </div>
            {/* <div className="cart_summary_line">
                <div>Gratuity </div>
                <div>{USDollar.format(gratuity)}</div>
            </div> */}
            <div className="cart_summary_line">
                <div>Tax</div>
                <div>{USDollar.format(tax)}</div>
                </div>
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Total </div>
                <div>{USDollar.format(total)}</div>
            </div>
        </>
    )
}
export default CartSummaryDetails
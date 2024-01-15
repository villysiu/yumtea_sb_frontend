import { Button } from "react-bootstrap"
const CartSummary = () =>{
    return(
        <div className='cart_summary'>
            <div className='mb-3 solid_link'>Order Summary</div>
            <div className="cart_summary_line">
                <div>Subtotal</div><div>$11.88</div>
            </div>
            <div className="cart_summary_line">
                <div>Estimated Shipping </div><div>$11.88</div>
            </div>
            <div className="cart_summary_line">
                <div>Estimated Tax </div><div>$11.88</div>
                </div>
            <hr/>
            <div className="cart_summary_line solid_link">
                <div >Estimated Total </div><div>$11.88</div>
            </div>
            
            <div className="cart_summary_checkout mt-5">
                <Button className='checkout_btn'>Checkout</Button>
            </div>
        </div>
    )
}
export default CartSummary
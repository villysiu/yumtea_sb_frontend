import CartSummary from "../cart/CartSummary";
import { Navigate, useLocation } from "react-router-dom";
const Checkout = () => {
    let { state } = useLocation();
console.log(state)
if(!state.btn )
    <Navigate to="../cart" replace={true} />
    return (
        <div>check out

            <CartSummary subtotal={state.subtotal} />
        </div>
    )
}
export default Checkout
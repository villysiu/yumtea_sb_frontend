import OrderSummary from "./OrderSummary";
import { Navigate, useLocation } from "react-router-dom";
const Checkout = () => {
    let { state } = useLocation();
    console.log(state)
    // prohibited direct access this page
    if(!state ){
        return <Navigate to="../../cart" replace={true} />}
    return (
        <div>
            <div>
                Shipping address

            </div>

            <OrderSummary subtotal={state.subtotal} />
        </div>
    )
}
export default Checkout
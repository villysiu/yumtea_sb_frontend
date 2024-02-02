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
            <OrderSummary subtotal={state.subtotal} tax={state.tax} />
        </div>
    )
}
export default Checkout
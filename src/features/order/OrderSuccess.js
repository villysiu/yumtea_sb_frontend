import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const OrderSuccess = () =>{
    // let { state } = useLocation();
    const from = useSelector(state=>state.cart.from)

    // prohibited direct access this page
    if(from !== "Checkout2"){
        return <Navigate to={`/`}  />
    }

    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            {/* <div>order number: {state.order_pk}</div>
            <div>order date: {state.order_date}</div> */}
            <div className='mt-3'>
            <Link to={`${homeLink}/menuitems`} >
                <Button className='gold_button full'>Continue Shopping</Button>
            </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
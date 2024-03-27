import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
const OrderSuccess = () =>{
    let { state } = useLocation();
    console.log(state)
    // prohibited direct access this page
    if(!state ){
        return <Navigate to="../../" replace={true} />}
    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {state.order_pk}</div>
            <div>order date: {state.order_date}</div>
            <div className='mt-3'>
            <Link to={`${homeLink}/menuitems`} >
                <Button className='gold_button full'>Continue Shopping</Button>
            </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
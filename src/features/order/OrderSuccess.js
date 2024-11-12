import { Navigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import { useSelector } from "react-redux";


const OrderSuccess = () =>{
    const location = useLocation()
    console.log(location)
    const checkout_status = useSelector(state=>state.order.checkout_status)
    const order = useSelector(state=>state.order.orders[0])
    
    // prohibited direct access this page
    // if(from !== "Checkout2"){
    if(checkout_status !== "succeeded"){
        return <Navigate to={`/`}  />
    }

    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {order.pk}</div>
            <div>order date: {order.date}</div>
            <div className='mt-5'>
                <Link to={`${homeLink}/collection`}  >
                    <Button className='continue_button'>Continue Shopping</Button>
                </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
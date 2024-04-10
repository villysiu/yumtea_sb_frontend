import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import { useSelector } from "react-redux";


const OrderSuccess = () =>{

    // const from = useSelector(state=>state.route.from)
    const order_status = useSelector(state=>state.order.checkout_status)
    const order = useSelector(state=>state.order.order.orders_arr[0])
    
    // prohibited direct access this page
    // if(from !== "Checkout2"){
    if(order_status !== "succeeded"){
        return <Navigate to={`/`}  />
    }

    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {order.pk}</div>
            <div>order date: {order.date}</div>
            <div className='mt-3'>
            <Link to={`${homeLink}/menuitems`}  >
                <Button className='gold_button full'>Continue Shopping</Button>
            </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
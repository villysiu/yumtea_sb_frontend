import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clickatat } from "../headerNav/routeSlice";
import { clearorder } from "./orderSlice";

const OrderSuccess = () =>{
    // let { state } = useLocation();
    let dispatch = useDispatch()
    const from = useSelector(state=>state.route.from)
    const order = useSelector(state=>state.order.order.orders_arr[0])
    const handleClick = () =>{
        dispatch(clickatat(''))
        dispatch(clearorder())
    }
    // prohibited direct access this page
    if(from !== "Checkout2"){
        console.log("are you in order success")
        return <Navigate to={`/`}  />
    }

    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {order.pk}</div>
            <div>order date: {order.date}</div>
            <div className='mt-3'>
            <Link to={`${homeLink}/menuitems`} onClick={handleClick} >
                <Button className='gold_button full'>Continue Shopping</Button>
            </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
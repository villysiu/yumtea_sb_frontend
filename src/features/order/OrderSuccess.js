import {Navigate, useLocation, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import {useDispatch, useSelector} from "react-redux";
import {convertTimestampToDatetime, clearNewestOrder} from "./orderSlice";
import {useEffect} from "react";


const OrderSuccess = () =>{

    const location = useLocation();
    const {newestOrder} = useSelector(state=>state.order)
    const orderDate = useSelector(state => convertTimestampToDatetime(state))


    // prohibited direct access this page
    if(newestOrder === null) {
        return <Navigate to={`../../collection`} />
    }


    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {newestOrder.id}</div>
            <div>order date: {orderDate}</div>
            <div className='mt-5'>
                <Link to={`../../collection`} state={location.pathname}>
                    <Button className='continue_button'>Continue Shopping</Button>
                </Link>
            </div>
        </div>
    )
}
export default OrderSuccess
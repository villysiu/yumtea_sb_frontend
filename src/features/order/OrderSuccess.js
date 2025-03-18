import {Navigate, useLocation, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {resetOrderStatus} from "./orderSlice"


const OrderSuccess = () =>{

    const location = useLocation();
    const {checkoutStatus, orders} = useSelector(state=>state.order)
    const dispatch = useDispatch()
    const [seconds, setSeconds] = useState(10);

    const handleClick = () =>{
        dispatch(resetOrderStatus())
    }


    useEffect(() => {
        if(seconds === 0)
            dispatch(resetOrderStatus())
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
        // console.log("let see if display after countdown?")
    }, [seconds]);


    // prohibited direct access this page
    if(checkoutStatus === 'succeeded') {


        return (
            <div className='order_success'>
                <div><b>Thank you for your purchase.</b></div>
                <div>order number: {orders[0].id}</div>
                <div>order date: {orders[0].purchaseDate.slice(0, 10)}</div>
                <div className='mt-5'>
                    <Link to={`/collection`} state={location.pathname}>
                        <Button className='continue_button' onClick={handleClick}>Continue Shopping</Button>
                    </Link>
                </div>
                <div>
                    <p>Redirecting in {seconds} seconds</p>
                </div>

            </div>
        )
    }

    return <Navigate to={`/collection`} />

}
export default OrderSuccess
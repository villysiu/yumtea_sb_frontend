import {Navigate, useLocation, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {clearNewestOrder} from "./orderSlice"


const OrderSuccess = () =>{

    const location = useLocation();
    const {newestOrder} = useSelector(state=>state.order)
    // const orderDate = useSelector(state => convertTimestampToDatetime(state))
    const dispatch = useDispatch()
    const [seconds, setSeconds] = useState(10);

    const handleClick = () =>{
        dispatch(clearNewestOrder())
    }
    useEffect(()=>{
        if(newestOrder !== null){
            const timer = setTimeout(()=>{
                    dispatch(clearNewestOrder())
                }, 10000

            )
            return () => clearTimeout(timer);
        }
    }, [newestOrder, dispatch])
    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
        // console.log("let see if display after countdown?")
    }, [seconds]);


    // prohibited direct access this page
    if(newestOrder === null) {
        return <Navigate to={`../../collection`} />
    }

    return (
        <div className='order_success'>
            <div><b>Thank you for your purchase.</b></div>
            <div>order number: {newestOrder.id}</div>
            <div>order date: {newestOrder.purchaseDate.slice(0, 10)}</div>
            <div className='mt-5'>
                <Link to={`../../collection`} state={location.pathname} >
                    <Button className='continue_button' onClick={handleClick} >Continue Shopping</Button>
                </Link>
            </div>
            <div>
                <p>Redirecting in {seconds} seconds</p>
            </div>

        </div>
    )
}
export default OrderSuccess
import {Button, Modal} from "react-bootstrap";
import React, {use, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetOrderStatus} from "./orderSlice";

const OrderSuccessDetails = ({closeOrderSuccessModal}) =>{
    console.log("in OrderSuccessDetails ")
    const {orders} = useSelector(state=>state.order)
    const [seconds, setSeconds] = useState(10);



    useEffect(() => {
        console.log(seconds)
        // if(checkoutStatus === 'succeeded') {
            if (seconds === 0)
                closeOrderSuccessModal();
            if (seconds > 0) {
                const timer = setInterval(() => {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }, 1000);

                return () => clearInterval(timer);
            }
        // }
        // console.log("let see if display after countdown?")
    }, [seconds]);

    return (
        <>
            <Modal.Header  closeButton>
                <Modal.Title>Thank you for your order </Modal.Title>
            </Modal.Header>
            <Modal.Body className='order_success'>
                <div>order number: {orders[0].id}</div>
                <div>order date: {new Date(orders[0].purchaseDate).toLocaleDateString()}

                </div>
                <div className='mt-5'>
                    <Button className='continue_button' onClick={closeOrderSuccessModal}>Closing in {seconds} secs</Button>
                </div>
            </Modal.Body>

        </>
    )
}
export default OrderSuccessDetails
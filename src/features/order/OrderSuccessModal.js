import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrderStatus } from "./orderSlice";

const OrderSuccessModal = () => {
    console.log("OrderSuccessModal rendered");
    const [show, setShow] = useState(false);
    const [seconds, setSeconds] = useState(10);

    const { checkoutStatus, orders } = useSelector(state => state.order);
    const dispatch = useDispatch();

    const closeOrderSuccessModal = () => {
        dispatch(resetOrderStatus());
        setShow(false);
        setSeconds(10); // Reset for next time
    };

    // Show modal when checkout succeeded
    useEffect(() => {
        if (checkoutStatus === 'succeeded') {
            setShow(true);
            setSeconds(10); // Start countdown
        }
    }, [checkoutStatus]);

    // Countdown logic
    useEffect(() => {
        if (!show) return;

        const timer = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    closeOrderSuccessModal();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [show]);

    return (
        <>
            {
                show &&
                <Modal show={show} onHide={closeOrderSuccessModal} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you for your order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='order_success'>
                        <div>order number: {orders[0]?.id}</div>
                        <div>order date: {new Date(orders[0]?.purchaseDate).toLocaleDateString()}</div>
                        <div className='mt-5'>
                            <Button className='continue_button' onClick={closeOrderSuccessModal}>
                                Closing in {seconds} secs
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </>
    );
};

export default OrderSuccessModal;

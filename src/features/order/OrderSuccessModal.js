import {Modal} from "react-bootstrap";
import OrderSuccessDetails from "./OrderSuccessDetails";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetOrderStatus} from "./orderSlice";


const OrderSuccessModal = () =>{
    const [show, setShow] = useState(false)
    const {checkoutStatus} = useSelector(state=>state.order)
    const dispatch = useDispatch()
    const closeOrderSuccessModal = () =>{
        dispatch(resetOrderStatus())
        setShow(false)
    }
    useEffect(()=>{
        setShow(checkoutStatus === 'succeeded')
    }, [checkoutStatus])
    return(
        <>
        {
            show &&
            <Modal show={show} onHide={closeOrderSuccessModal} size="md"  >
                <OrderSuccessDetails closeOrderSuccessModal={closeOrderSuccessModal}/>
            </Modal>
        }
        </>
    )



}
export default OrderSuccessModal
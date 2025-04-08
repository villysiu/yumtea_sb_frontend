import {Modal} from "react-bootstrap";
import CustomizeDetails from "./CustomizeDetails";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {triggerCustomizeModal} from "../menuitem/menuitemSlice";

const CustomizeModal = () =>{
    const [show, setShow] = useState(false);

    const {itemToCustomize} = useSelector(state=>state.menuitem)

    const dispatch = useDispatch()


    useEffect(()=>{
        // if()
            setShow(itemToCustomize !== null)

    }, [itemToCustomize])



    const handleHide = () =>{
        setShow(false)
        dispatch(triggerCustomizeModal(null))
    }
    return(
        <>
        {
            show &&
            <Modal show={show} onHide={handleHide} size="lg"  >
                <CustomizeDetails handleHide={handleHide} />
            </Modal>
        }
        </>
    )
}
export default CustomizeModal
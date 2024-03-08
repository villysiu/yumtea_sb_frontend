import { Link } from "react-router-dom"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CustomizeList from "../menuitem/CustomizeList"
import { getMenuitemById } from "../menuitem/menuitemSlice"
import { updateCustomization } from "./cartSlice"
import { updateCartItemOptions } from "./cartSlice"
import { getMilkById } from "../menuitem/menuitemSlice"

const EditButton = ({cartId, cartItem, prevMilk}) =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const menuitem = useSelector(state=>getMenuitemById(state, cartItem.menuitem_id))
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const [milk, setMilk] = useState(cartItem.milk_id)
    const updatedMilk = useSelector(state=>getMilkById(state, milk))
    const handleClick = () =>{
        
        if(current_user.username === null){
            // dispatch(updateCustomization({'menuitemId':cartItem.menuitem_id, 
            //                     'prevMilkId': cartItem.milk_id, 'updatedMilkId': milk }))
            dispatch(updateCustomization({'cartId': cartId, 'menuitemId':cartItem.menuitem_id, 'prevMilk': prevMilk, 'updatedMilk': updatedMilk} ))
            setShow(false)
        }
        else {
            
            dispatch(updateCartItemOptions(
                {cartitemId: cartItem.pk, formData: {'milk_pk': milk}}
            ))
            setShow(false)
        }

        
    }
    return (
        <>
            {
                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Customize {menuitem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CustomizeList menuitem={menuitem} milk={milk} setMilk={setMilk} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                            Cancel
                        </Button>
                        <Button className='gold_button short' onClick={handleClick}>Update</Button>
                    </Modal.Footer>
                </Modal>
            }
            <Link onClick={()=>setShow(true)}>Edit</Link>
        </>
        
    )
}
export default EditButton
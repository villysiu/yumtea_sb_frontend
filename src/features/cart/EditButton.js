import { Link } from "react-router-dom"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CustomizeList from "../menuitem/CustomizeList"
import { getMenuitemById } from "../menuitem/menuitemSlice"
import { updateCustomization } from "./cartSlice"
import { updateCartItem } from "./cartSlice"
const EditButton = ({cartitem}) =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const menuitem = useSelector(state=>getMenuitemById(state, cartitem.menuitem_id))
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const [milk, setMilk] = useState(cartitem.milk_id)

    const handleClick = () =>{
        
        if(current_user.username === null){
            dispatch(updateCustomization({'menuitemId':cartitem.menuitem_id, 
                                'prevMilkId': cartitem.milk_id, 'updatedMilkId': milk }))
            setShow(false)
        }
        else {
            // {cartitemId: 33, formData: {'quantity': item.quantity}}
            dispatch(updateCartItem(
                {cartitemId: cartitem.pk, formData: {'milk_pk': milk}}
            ))
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
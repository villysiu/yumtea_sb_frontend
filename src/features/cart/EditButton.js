import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CustomizeList from "../menuitem/CustomizeList"
import { getMenuitemById } from "../menuitem/menuitemSlice"
import { updateCustomization } from "./cartSlice"
import { updateCartItemOptions } from "./cartSlice"


import { getUnitprice } from "../menuitem/menuitemSlice"

const EditButton = ({cartItem}) =>{

    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const menuitem = useSelector(state=>getMenuitemById(state, cartItem.menuitem_id))
    const current_user = useSelector(state => state.user.current_user)

    const [temp, setTemp] = useState(cartItem.temperature)
    const [milk_id, setMilkID] = useState(cartItem.milk_id)
    const [sweetness, setSweetness] = useState(cartItem.sweetness)

    const unit_price = useSelector(state=>getUnitprice(state, cartItem.menuitem_id, milk_id))

    // useEffect(()=>{
    //     console.log(temp)
    //     console.log(cartItem.temperature)
    //     setTemp(cartItem.temperature)
    // }, [cartItem.temperature])
    const handleClick = () =>{
        
        if(current_user.username === null){
            
            dispatch(updateCustomization({'cartitem_id': cartItem.pk, 'menuitem_id':cartItem.menuitem_id,
                'milk_id': milk_id, 'temperature': temp, 'sweetness': sweetness,
                'unit_price': unit_price
            
            } ))
            setShow(false)
        }
        else {
            
            dispatch(updateCartItemOptions(
                {cartitemId: cartItem.pk, formData: {'milk_pk': milk_id, 'temperature': temp, 'sweetness': sweetness}}
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
                    
                    <CustomizeList 
                        milk_id={milk_id} setMilkID={setMilkID}
                        temp={temp} setTemp={setTemp}
                        sweetness={sweetness} setSweetness={setSweetness}

                    />
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
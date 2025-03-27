import {PencilSquare} from "react-bootstrap-icons";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

import {useDispatch} from "react-redux";
import {updateMenuitem} from "../../menuitem/menuitemSlice";
import MenuitemForm from "./MenuitemForm";

const EditMenuitemButton = ({menuitem}) =>{
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }

    const [editMenuitem, setEditMenuitem] = useState(
        {
            "id": menuitem.id,
            "title": menuitem.title,
            "categoryId": menuitem.category.id,
            "milkId": menuitem.milk.id,
            "temperature": menuitem.temperature,
            "sugar": menuitem.sugar,
            "price": menuitem.price,
            // "description": menuitem.description,
            // "imageUrl": menuitem.imageUrl
        }
    )

    const handleSubmit = () =>{
        console.log(editMenuitem)

        dispatch(updateMenuitem(editMenuitem))

        setShow(false)
    }


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Menuitem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MenuitemForm menuitem = {editMenuitem} setMenuitem={setEditMenuitem}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <PencilSquare className="update_btn mx-2" onClick={()=>setShow(true)}/>
        </>
    )
}
export default EditMenuitemButton
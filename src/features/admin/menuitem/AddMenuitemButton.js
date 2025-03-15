import {Plus} from "react-bootstrap-icons";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import CategoryDropdown from "../category/CategoryDropdown";
import MilkDropdown from "../milk/MilkDropdown";
import SugarDropdown from "../sugar/SugarDropdown";
import TempDropdown from "../temperature/TempDropdown";
import {useDispatch} from "react-redux";
import {addMenuitem} from "../adminSlice";
import MenuitemForm from "./MenuitemForm";
import menuitemForm from "./MenuitemForm";
import {useLocation, useNavigate} from "react-router-dom";

const AddMenuitemButton = () =>{
    const dispatch = useDispatch();

    // const navigate = useNavigate()
    const [create, showCreate] = useState(false)
    const handleClose = () => {
        showCreate(false)
    }

    const [newMenuitem, setNewMenuitem] = useState(
        {
            "title": "",
            "categoryId": null,
            "milkId": null,
            "temperature": null,
            "sugar": null,
            "price": 0,
            "description":"",
            "imageUrl": ""
        }
    )

    const handleSubmit = () =>{
        console.log(newMenuitem)

        dispatch(addMenuitem(newMenuitem))
        // navigate('/admin/hub', { state: "Menuitem" });
        showCreate(false)

    }
    const handleChange = e => {
        setNewMenuitem(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>

            <Modal show={create} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Menuitem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MenuitemForm menuitem={newMenuitem} setMenuitem={setNewMenuitem} />
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
            <Button className="add_new mb-3" onClick={() => showCreate(true)}>
                <Plus size={25}/>
                Add
            </Button>
        </>
    )
}
export default AddMenuitemButton
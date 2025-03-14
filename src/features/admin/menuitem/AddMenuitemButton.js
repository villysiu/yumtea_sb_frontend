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

const AddMenuitemButton = () =>{
    const dispatch = useDispatch();
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
                    <Form>
                        <Row className="mb-3">
                            <Col xs={2}>Title</Col>
                            <Col>
                                <Form.Control type="text" placeholder="Enter name" id="title" onChange={handleChange}/>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={2}>Price</Col>
                            <Col xs={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" max={100} id="price" placeholder="Enter Price" />

                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={2}>Category</Col>
                            <Col>
                                <CategoryDropdown newMenuitem={newMenuitem} setNewMenuitem={setNewMenuitem} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={2}>Milk</Col>
                            <Col>
                                <MilkDropdown newMenuitem={newMenuitem} setNewMenuitem={setNewMenuitem} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={2}>Sugar</Col>
                            <Col>
                                <SugarDropdown newMenuitem={newMenuitem} setNewMenuitem={setNewMenuitem} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>Temperature</Col>
                            <Col>
                                <TempDropdown newMenuitem={newMenuitem} setNewMenuitem={setNewMenuitem} />
                            </Col>
                        </Row>
                    </Form>
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
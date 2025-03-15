import {Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CategoryDropdown from "../category/CategoryDropdown";
import MilkDropdown from "../milk/MilkDropdown";
import SugarDropdown from "../sugar/SugarDropdown";
import TempDropdown from "../temperature/TempDropdown";

const MenuitemForm = ({menuitem, setMenuitem}) =>{
    const handleChange = e => {
        setMenuitem(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <Form>
            <Row className="mb-3">
                <Col xs={2}>Title</Col>
                <Col>
                    <Form.Control type="text" placeholder="Enter name" value={menuitem.title} id="title" onChange={handleChange}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={2}>Price</Col>
                <Col xs={4}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="number" max={100} value={menuitem.price} id="price" placeholder="Enter Price" onChange={handleChange} />

                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={2}>Category</Col>
                <Col>
                    <CategoryDropdown menuitem={menuitem} setMenuitem={setMenuitem} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={2}>Milk</Col>
                <Col>
                    <MilkDropdown menuitem={menuitem} setMenuitem={setMenuitem} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={2}>Sugar</Col>
                <Col>
                    <SugarDropdown menuitem={menuitem} setMenuitem={setMenuitem} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={3}>Temperature</Col>
                <Col>
                    <TempDropdown menuitem={menuitem} setMenuitem={setMenuitem} />
                </Col>
            </Row>
        </Form>
    )
}
export default MenuitemForm
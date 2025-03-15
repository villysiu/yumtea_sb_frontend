import {useState} from "react";
import { useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import {Button, Col, Modal, Row} from "react-bootstrap";
import AddMenuitemButton from "./AddMenuitemButton";

import EditMenuitemButton from "./EditMenuitemButton";
import DeleteMenuitemButton from "./DeleteMenuitemButton";

const ManageMenuitem = ({setChoice}) =>{
    const {array, status} = useSelector(state=>state.menuitem.menuitems)

    const sugarAbbr = new Map([
        ["NA", "NA"],
        ["ZERO", "0%"],
        ["TWENTY_FIVE", "25%"],
        ["FIFTY", "50%"],
        ["SEVENTY_FIVE", "75%"],
        ["HUNDRED", "100%"]
    ]);
    return(
        <>


        <h2 className="manage_title">Menuitem</h2>
        {/*<Form.Label>Search</Form.Label>*/}
        {/*<Form.Control type="text" placeholder="Search menuitem" />*/}
        <Form className="my-4">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                <Col sm={6}>
                    <Form.Control type="text" placeholder="Search menuitem"/>
                </Col>
                <Col sm={2}>
                    <Button>
                        Search
                    </Button>
                </Col>
            </Form.Group>

        </Form>

        <AddMenuitemButton />

        <div className="manage_list">
            <Row className="manage_list_title">
                <Col xs={1}>Id</Col>
                <Col xs={4}>Name</Col>
                <Col xs={1}>Price</Col>
                <Col xs={2}>Category</Col>
                <Col xs={1}>Milk</Col>
                <Col xs={1}>Sugar</Col>
                <Col xs={1}>Temperature</Col>
                <Col xs={1}></Col>

            </Row>

            {
                array.map(menuitem => {
                    return (
                        <Row className="manage_list_row" key={menuitem.id} >
                            <Col xs={1}>{menuitem.id}</Col>
                            <Col xs={4}>{menuitem.title}</Col>
                            <Col xs={1}>{menuitem.price}</Col>
                            <Col xs={2}>{menuitem.category.title}</Col>
                            <Col xs={1}>{menuitem.milk.title}</Col>
                            <Col xs={1}>{sugarAbbr.get(menuitem.sugar)}</Col>
                            <Col xs={1}>{menuitem.temperature}</Col>
                            <Col xs={1} >
                                <EditMenuitemButton menuitem={menuitem} />
                                <DeleteMenuitemButton menuitem={menuitem}  />
                            </Col>
                        </Row>
                    )
                })
            }


        </div>
        </>
    )
}
export default ManageMenuitem
import {useState} from "react";
import {useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import {Button, Col, Modal, Row} from "react-bootstrap";
import {PencilSquare, Plus, Trash3Fill} from "react-bootstrap-icons";
import AddMenuitemButton from "./AddMenuitemButton";

const ManageMenuitem = () =>{
    const {array, status} = useSelector(state=>state.menuitem.menuitems)


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
                <Col xs={1}>

                </Col>

            </Row>

            {
                array.map(menuitem => {
                    return (
                        <Row className="manage_list_row">
                            <Col xs={1}>{menuitem.id}</Col>
                            <Col xs={4}>{menuitem.title}</Col>
                            <Col xs={1}>{menuitem.price}</Col>
                            <Col xs={2}>{menuitem.category.title}</Col>
                            <Col xs={1}>{menuitem.milk.title}</Col>
                            <Col xs={1}>{menuitem.sugar}</Col>
                            <Col xs={1}>{menuitem.temperature}</Col>
                            <Col xs={1} className="text-end">
                                <PencilSquare className="mx-2"/>
                                <Trash3Fill className="mx-2"/>
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
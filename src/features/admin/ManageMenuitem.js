import {useState} from "react";
import {useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import {Plus} from "react-bootstrap-icons";

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
                        <Form.Control type="text" placeholder="Search menuitem" />
                    </Col>
                    <Col sm={2}>
                        <Button >
                            Search
                        </Button>
                    </Col>
                </Form.Group>

            </Form>

            <div>
                <Button className="add_new">
                    <Plus size={25}/>
                    Add
                </Button>
            </div>
            <div className="manage_list">
            {
                array.map(menuitem => {
                    return (
                        <div>{menuitem.title}</div>
                    )
                })
            }
            </div>
        </>
    )
}
export default ManageMenuitem
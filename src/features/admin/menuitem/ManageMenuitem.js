import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import {Button, Col, Modal, Row} from "react-bootstrap";
import AddMenuitemButton from "./AddMenuitemButton";

import EditMenuitemButton from "./EditMenuitemButton";
import DeleteMenuitemButton from "./DeleteMenuitemButton";
import SearchMenuitem from "./SearchMenuitem";
import ActiveCheckbox from "./ActiveCheckbox";

const ManageMenuitem = ({setChoice}) =>{
    // const {array, status} = useSelector(state=>state.menuitem.menuitems)
    const [menuitems, setMenuitems] = useState([])
    const sugarAbbr = new Map([
        ["NA", "NA"],
        ["ZERO", "0%"],
        ["TWENTY_FIVE", "25%"],
        ["FIFTY", "50%"],
        ["SEVENTY_FIVE", "75%"],
        ["HUNDRED", "100%"]
    ]);

    // useEffect(() => {
    //     setMenuitems(array)
    // }, [array]);

    return(
        <>


        <h2 className="manage_title">Menuitem</h2>

        <SearchMenuitem setMenuitems={setMenuitems}/>

        <AddMenuitemButton />

        <div className="manage_list">
            <Row className="manage_list_title">
                <Col xs={1}>Active</Col>
                <Col xs={1}>Id</Col>
                <Col xs={3}>Name</Col>
                <Col xs={1}>Price</Col>
                <Col xs={2}>Category</Col>
                <Col xs={1}>Milk</Col>
                <Col xs={1}>Sugar</Col>
                <Col xs={1}>Temperature</Col>
                <Col xs={1}></Col>

            </Row>

            {
                menuitems.map(menuitem => {
                    return (
                        <Row className="manage_list_row" key={menuitem.id} >
                            <Col xs={1}>
                                <ActiveCheckbox menuitem={menuitem} />
                            </Col>
                            <Col xs={1}>{menuitem.id}</Col>
                            <Col xs={3}>{menuitem.title}</Col>
                            <Col xs={1}>{menuitem.price}</Col>
                            <Col xs={2}>{menuitem.category.title}</Col>
                            <Col xs={1}>{menuitem.milk.title}</Col>
                            <Col xs={1}>{sugarAbbr.get(menuitem.sugar)}</Col>
                            <Col xs={1}>{menuitem.temperature}</Col>
                            <Col xs={1} >
                                <EditMenuitemButton menuitem={menuitem} />

                                {/*<DeleteMenuitemButton menuitem={menuitem}  />*/}
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
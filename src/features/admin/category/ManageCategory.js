import SearchMenuitem from "../menuitem/SearchMenuitem";
import AddMenuitemButton from "../menuitem/AddMenuitemButton";
import {Col, Row} from "react-bootstrap";

const ManageCategory = () =>{
    return (
        <>


            <h2 className="manage_title">Category</h2>

            {/*<SearchMenuitem setMenuitems={setMenuitems}/>*/}

            {/*<AddMenuitemButton />*/}

            <div className="manage_list">
                <Row className="manage_list_title">
                    <Col xs={1}>Id</Col>

                    <Col xs={2}>Category</Col>

                </Row>
            </div>
        </>
    )}
export default ManageCategory

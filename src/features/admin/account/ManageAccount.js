import SearchMenuitem from "../menuitem/SearchMenuitem";
import AddMenuitemButton from "../menuitem/AddMenuitemButton";
import {Col, Row} from "react-bootstrap";
import EditMenuitemButton from "../menuitem/EditMenuitemButton";
import DeleteMenuitemButton from "../menuitem/DeleteMenuitemButton";
import {useState} from "react";
import SearchAccount from "./SearchAccount";

const ManageAccount = () =>{
    const [accounts, setAccounts] = useState([])
    return(
        <>


            <h2 className="manage_title">Account</h2>

            <SearchAccount setAccounts={setAccounts}/>

            {/*<AddMenuitemButton />*/}

            <div className="manage_list">
                <Row className="manage_list_title">
                    <Col xs={1}>Id</Col>
                    <Col xs={4}>Email</Col>
                    <Col xs={4}>Nickname</Col>
                    <Col xs={2}></Col>

                </Row>

                {
                    accounts.map(account => {
                        return (
                            <Row className="manage_list_row" key={account.id} >
                                <Col xs={1}>{account.id}</Col>
                                <Col xs={4}>{account.title}</Col>
                                <Col xs={1}>{account.price}</Col>

                                <Col xs={2} >
                                    <EditMenuitemButton account={account} />
                                    <DeleteMenuitemButton account={account}  />
                                </Col>
                            </Row>
                        )
                    })
                }


            </div>
        </>

    )
}
export default ManageAccount
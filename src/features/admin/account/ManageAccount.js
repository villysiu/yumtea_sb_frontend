import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import SearchAccount from "./SearchAccount";
import {useDispatch, useSelector} from "react-redux";
import {fetchAccounts} from "./accountSlice";
import Spinner from "react-bootstrap/Spinner";
import UpdateAccountCheckbox from "./UpdateAccountCheckbox";
import DeleteAccountButton from "./DeleteAccountButton";

const ManageAccount = () =>{
    const dispatch = useDispatch()
    const [accounts, setAccounts] = useState([])
    const {fetchAccountsStatus} = useSelector(state=>state.account)
    const {currentUser} = useSelector(state=> state.user)
    useEffect(() => {
        if(fetchAccountsStatus === "idle")
            dispatch(fetchAccounts())
    }, [fetchAccountsStatus, dispatch]);

    if(fetchAccountsStatus === "loading")
        return <Spinner />
    return(
        <>
            <h2 className="manage_title">Account</h2>

            <SearchAccount setAccounts={setAccounts}/>

            {/*<AddMenuitemButton />*/}

            <div className="manage_list">
                <Row className="manage_list_title" key="title">
                    <Col xs={1}>Id</Col>
                    <Col xs={4}>Email</Col>
                    <Col xs={4}>Nickname</Col>
                    <Col xs={2}>Admin</Col>
                    <Col xs={1} ></Col>

                </Row>

                {
                    accounts.map(account => {
      
                        return (
                            account.id === currentUser.id ?

                                <Row className="manage_list_row" key={account.id}>
                                    <Col xs={1}>{account.id}</Col>
                                    <Col xs={4}>{account.email}</Col>
                                    <Col xs={4}>{account.nickname}</Col>
                                </Row>

                                :

                                <Row className="manage_list_row" key={account.id}>
                                        <Col xs={1}>{account.id}</Col>
                                        <Col xs={4}>{account.email}</Col>
                                        <Col xs={4}>{account.nickname}</Col>
                                        <Col xs={2}>
                                            <UpdateAccountCheckbox account={account}/>
                                        </Col>

                                        <Col xs={1} className="text-end">
                                            <DeleteAccountButton account={account}/>
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
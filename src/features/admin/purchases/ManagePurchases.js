import SearchAccount from "../account/SearchAccount";
import {Col, Row} from "react-bootstrap";
import UpdateAccountCheckbox from "../account/UpdateAccountCheckbox";
import DeleteAccountButton from "../account/DeleteAccountButton";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchAccounts} from "../account/accountSlice";
import Spinner from "react-bootstrap/Spinner";
import {fetchAllOrders} from "../../order/orderSlice";
import SearchPurchase from "./SearchPurchase";
import EditPurchaseButton from "./EditPurchaseButton";
import DeletePurchaseButton from "./DeletePurchaseButton";
import ManagePurchaseLineitems from "./ManagePurchaseLineitems";
import {USDollar} from "../../../app/global";

const ManagePurchases = () =>{
    const dispatch = useDispatch()
    const [purchases, setPurchases] = useState([])
    const [dropdown, showDropdown] = useState(null)
    const {fetchAllOrdersStatus} = useSelector(state=>state.order)

    useEffect(() => {
        if(fetchAllOrdersStatus === "idle")
            dispatch(fetchAllOrders())
    }, [fetchAllOrdersStatus]);

    if(fetchAllOrdersStatus === "loading")
        return <Spinner />
    return (
        <>
            <h2 className="manage_title">Purchases</h2>

            <SearchPurchase setPurchases={setPurchases}/>

            {/*<AddMenuitemButton />*/}

            <div key="title" className="manage_list">
                <Row className="manage_list_title" key="title">
                    <Col xs={1}>Id</Col>
                    <Col xs={3}>Date</Col>
                    <Col>Email</Col>
                    <Col xs={2}>Total</Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>

                </Row>

                {
                    purchases.map(p => {

                        return (

<>
                                <Row className="manage_list_row mx-0" key={p.id} onClick={()=>showDropdown(p.id)}>
                                    <Col xs={1}>{p.id}</Col>
                                    <Col xs={3}>{p.purchaseDate.slice(0,10)}</Col>
                                    <Col >{p.account.email}</Col>
                                    <Col xs={2}>{USDollar.format(p.total)}</Col>


                                    <Col xs={1} className="text-end">
                                        {/*<EditPurchaseButton purchase={p}/>*/}
                                    </Col>
                                        <Col xs={1} className="text-end">
                                        <DeletePurchaseButton purchase={p}/>
                                    </Col>
                                </Row>
                                {
                                    dropdown && dropdown===p.id &&
                                    <div className="manage_list_dropdown">
                                        <ManagePurchaseLineitems purchaseLineitems={p.purchaseLineitemList} />

                                        <Row className="py-1 mx-0 border-top">
                                            <Col xs={11} className="text-end"><b>Tip:</b></Col>
                                            <Col xs={1} className="text-end"><b>{USDollar.format(p.tip)}</b></Col>
                                        </Row>
                                        <Row className="py-1  mx-0">
                                            <Col xs={11} className="text-end"><b>Tax: </b></Col>
                                            <Col xs={1} className="text-end"><b>{USDollar.format(p.tax)}</b></Col>
                                        </Row>
                                    <Row className="py-1 mx-0">
                                        <Col xs={11} className="text-end"><b>Total: </b></Col>
                                        <Col xs={1} className="text-end"><b>{USDollar.format(p.total)}</b></Col>
                                    </Row>
                                    </div>
                                }


</>
                        )
                    })
                }


            </div>
        </>
    )
}
export default ManagePurchases
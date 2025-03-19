import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {searchAccount} from "../account/accountSlice";
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {searchAllOrders} from "../../order/orderSlice";

const SearchPurchase = ({setPurchases}) => {
    const [search, setSearch] = useState("")
    const res = useSelector(state=>searchAllOrders(state, search))

    useEffect(() => {
        setPurchases(res)
    }, [res]);

    return(
        <Form className="my-4">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                <Col sm={6}>
                    <Form.Control type="text" placeholder="Search by "
                                  // value={search} onChange={e=>setSearch(e.target.value)}
                    />
                </Col>
                <Col sm={2}>
                    <Button className="oblong_button search_btn">
                        Search
                    </Button>
                </Col>
            </Form.Group>

        </Form>
    )
}
export default SearchPurchase
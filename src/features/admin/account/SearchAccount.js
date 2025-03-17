import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {searchAccount} from "./accountSlice";

const SearchAccount = ({setAccounts}) =>{
    const [search, setSearch] = useState("")
    const res = useSelector(state=>searchAccount(state, search))

    useEffect(() => {
        setAccounts(res)
    }, [res]);

    return(
        <Form className="my-4">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                <Col sm={6}>
                    <Form.Control type="text" placeholder="Search by email or id or name"
                                  value={search} onChange={e=>setSearch(e.target.value)}/>
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
export default  SearchAccount
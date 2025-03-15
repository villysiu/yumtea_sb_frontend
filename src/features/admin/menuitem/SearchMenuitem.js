import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {searchMenuitem} from "../../menuitem/menuitemSlice";

const SearchMenuitem = ({setMenuitems}) =>{
    const [search, setSearch] = useState("")
    const filterRes = useSelector(state=>searchMenuitem(state, search))
    console.log(filterRes)
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     // console.log(e.target.searchItem.value)
    //     setSearch(e.target.searchItem.value)
    //
    // }
    useEffect(() => {
        console.log(search)

            setMenuitems(filterRes)
    }, [filterRes]);
    // useEffect(() => {
    //     if(search === "")
    // }, [search]);
    return (
        <Form className="my-4">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                <Col sm={6}>
                    <Form.Control type="text" placeholder="Search menuitem"
                                  value={search} onChange={e=>setSearch(e.target.value)}/>
                </Col>
                <Col sm={2}>
                    <Button>
                        Search
                    </Button>
                </Col>
            </Form.Group>

        </Form>
    )
}
export default SearchMenuitem
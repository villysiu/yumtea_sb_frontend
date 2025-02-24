import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {Col, Row} from "react-bootstrap";
const DescBox = ({desc, setDesc, descError, setDescError}) =>{
    const handleChange = e =>{
        setDesc(e.target.value);
        if(descError)
            validateDesc(e.target.value);

    }
    const validateDesc = desc => {
        if(!desc)
            setDescError("Description cannot be empty")
        else
            setDescError("")
    }
    return (
        <Row className='mb-3'>
            <Col xs={12} md={2}>Description</Col>
            <Col xs={12} md={10}>
                <Form.Control as="textarea" rows={5} value={desc}
                              className={descError ? "error_border" : ""}
                              onChange={handleChange}
                              onBlur={e=>validateDesc(e.target.value)}
                              // onFocus={e=>setDescError("")}
                />
                {descError && <div className='error'>{descError}</div>}
            </Col>
        </Row>

    )
}
export default DescBox
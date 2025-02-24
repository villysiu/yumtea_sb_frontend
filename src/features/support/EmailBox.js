import {Col, Row, Form} from "react-bootstrap";
import {validate} from "uuid";

const EmailBox = ({email, setEmail, emailError, setEmailError}) =>{
    const handleChange =e =>{
        setEmail(e.target.value);
        if(emailError !== "")
            validateEmail(e.target.value)
    }
    const validateEmail = (email) =>{
        const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        if(email === "")
            setEmailError("Email is required")
        else if(!re.test(email))
            setEmailError("Email format is invalid")
        else
            setEmailError("")
    }
    return(
        <Row className='mb-3'>
            <Col xs={12} md={2}>Email</Col>
            <Col xs={12} md={10}>
                <Form.Control type="email" placeholder="name@example.com"
                              className={emailError ? "error_border" : ""}
                              onChange={handleChange}
                              onBlur={e=>validateEmail(e.target.value)}
                              // onFocus={e=>setEmailError("")}
                />
                {emailError && <div className='error'>{emailError}</div>}
            </Col>
        </Row>
    )
}
export default EmailBox
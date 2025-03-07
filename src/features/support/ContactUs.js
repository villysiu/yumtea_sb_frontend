import EmailInputBox from "../user/EmailInputBox";
import {useState} from "react";
import Form from "react-bootstrap/Form";

import DescBox from "./DescBox";
import EmailBox from "./EmailBox";
import "./support.css";

import {Button, Modal} from "react-bootstrap";

const ContactUs =() => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [desc, setDesc] =useState("")
    const [descError, setDescError] = useState("")

    const [show, setShow] = useState(false)

    const handleSubmit = () => {
        console.log("message sent")
        setShow(true)
        setEmail("");
        setDesc("")
    }
    return(
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>Message sent. You should receive a reply shortly. Thank you.</Modal.Body>

            </Modal>
        <div className="contactus_wrapper">
            <div className="support_title mb-3">Contact Us</div>

            <Form className='contactus_form'
                // onSubmit={handleSubmit}
                // action="mailto:someone@example.com" method="post" enctype="text/plain"
            >
                <EmailBox email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError}/>

                {/*<SubjectBox />*/}
                <DescBox desc={desc} setDesc={setDesc} descError={descError} setDescError={setDescError}/>
                <div className="submit_button_wrapper">
                    <Button className='submit_button' onClick={handleSubmit}
                        // type="submit"
                            disabled={emailError !== "" || descError !== "" || email === "" || desc === ""}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
        </>
    )
}
export default ContactUs
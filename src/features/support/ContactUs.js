import EmailInputBox from "../user/EmailInputBox";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import PasswordInputBox from "../user/PasswordInputBox";
import LoginButton from "../user/LoginButton";
import DescBox from "./DescBox";
import EmailBox from "./EmailBox";
import "./support.css";
import SubmitButton from "./SubmitButton";

const ContactUs =() => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [desc, setDesc] =useState("")
    const [descError, setDescError] = useState("")
    const handleSubmit = () => {

    }
    return(
        <div className="contactus_wrapper">
            <div className="support_title mb-3">Contact Us</div>

            <Form className='contactus_form'
                  onSubmit={handleSubmit}
            >
                <EmailBox email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />

                {/*<SubjectBox />*/}
                <DescBox desc={desc} setDesc={setDesc} descError={descError} setDescError={setDescError} />
                <SubmitButton emailError={emailError} descError={descError} email={email} desc={desc} />
            </Form>
        </div>
    )
}
export default ContactUs
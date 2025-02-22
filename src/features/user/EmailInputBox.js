import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const EmailInputBox = ({email, setEmail}) => {
    const [emailError, setEmailError] = useState("")
    const validateEmail = () =>{
        console.log("validate email")
        const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        if(!re.test(email)) {
            setEmailError("Enter a valid email")

        }
    }
    const resetEmailInputBox = () =>{
        setEmailError("");
        setEmail("");
    }
    return (
        <>
            <FloatingLabel controlId="floatingInput" label="Email" className={emailError? "" : "mb-3"}
            >
                <Form.Control type="email" placeholder="Email" value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={resetEmailInputBox}
                      onBlur={validateEmail}
                />
            </FloatingLabel>
        {emailError && <p className="inpurbox_error">{emailError}.</p>}
        </>

)
}
export default EmailInputBox
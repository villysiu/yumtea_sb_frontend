import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const EmailInputBox = ({email, setEmail, emailError, setEmailError}) => {


    const handleChange = e =>{
        setEmail(e.target.value)
        if(emailError)
            validateEmail(e.target.value)
    }
    const validateEmail = (email) =>{
        console.log("validate email: " + email +" hah")

        const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

        if(email === "")
            setEmailError("Email is required")
        else if(!re.test(email))
            setEmailError("Email format is invalid")

        else
            setEmailError("")


    }
    // const resetEmailInputBox = () =>{
        // setEmailError("");
        // setEmail("");
    // }
    return (
        <>
            <FloatingLabel controlId="floatingEmailInput" label="Email" className={emailError? "" : "mb-3"}
            >
                <Form.Control type="email"
                              placeholder="Email"
                              value={email}
                      onChange={handleChange}
                      // onFocus={resetEmailInputBox}
                      onBlur={e=>validateEmail(e.target.value)}
                />
            </FloatingLabel>
        {emailError && <p className="inpurbox_error">{emailError}.</p>}
        </>

)
}
export default EmailInputBox
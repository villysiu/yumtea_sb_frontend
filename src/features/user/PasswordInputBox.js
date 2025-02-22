import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import InputGroup from "react-bootstrap/esm/InputGroup";
import {Eye, EyeSlash} from "react-bootstrap-icons";

const PasswordInputBox = ({password, setPassword, passwordError, setPasswordError}) => {

    const [showPassword, toggleShowPassword] = useState(false)

    const handleChange = (e) => {
        setPassword(e.target.value)
        if(passwordError)
            validatePassword(e.target.value)
    }
    const validatePassword = (pa) =>{
        console.log("validate password")
        const re = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}/
        if(pa === "")
            setPasswordError("Password is required")
        else if(!re.test(pa)) {
            setPasswordError("Password must be 8-20 characters long, include at least one letter and one number")
        }
        else
            setPasswordError("")

    }
    return (
        <>
            <FloatingLabel controlId="floatingPasswordInput" label="Password"
                className={passwordError? "password_eye_box" : "password_eye_box mb-3"}

            >

                <Form.Control type={showPassword ? "text" : "password"} className="password_input"
                              placeholder="Password"
                              value={password}
                              onChange={handleChange}
                              onBlur={e=>validatePassword(e.target.value)}
                />
                <InputGroup.Text onClick={()=>toggleShowPassword(!showPassword)} className="password_eye">
                    {showPassword ? <EyeSlash /> : <Eye />}
                </InputGroup.Text>
            </FloatingLabel>
            {passwordError && <p className="inpurbox_error">{passwordError}.</p>}
        </>

    )
}
export default PasswordInputBox
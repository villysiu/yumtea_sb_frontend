import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const NameInputBox = ({nickname, setNickname, nicknameError, setNicknameError}) =>{

    const handleChange = e =>{
        setNickname(e.target.value)
        if(nicknameError)
            validateNickname(e.target.value)
    }
    const validateNickname = (nickname) =>{
        // console.log("validateing nick "+ nickname)
        const re = /^[a-zA-Z.-]{2,20}$/

        if(nickname === "")
            setNicknameError("Nickname is required")
        else if(!re.test(nickname))
            setNicknameError("Nickname may not exceed 20 letters and  must contain only alphabetic characters and -.")
        else
            setNicknameError("")
    }
    return(
        <>
        <FloatingLabel controlId="floatingNickname" label="Nickname" className="mb-3">
            <Form.Control type="text" placeholder="Nickname" value={nickname}
                          onChange={handleChange}
                          onBlur={e=>validateNickname(e.target.value)}
                // onClick={handleClick}
            />
        </FloatingLabel>
    {nicknameError && <p className="inpurbox_error">{nicknameError}.</p>}
    </>


)
}
export default NameInputBox
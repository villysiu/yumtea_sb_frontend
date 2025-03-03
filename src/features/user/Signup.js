import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "./userSlice";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import LoginButton from "./LoginButton";
import {Link, useNavigate} from "react-router-dom";
import {homeLink} from "../../app/global";
import {Button} from "react-bootstrap";
import SignupButton from "./SignupButton";
import EmailInputBox from "./EmailInputBox";
import PasswordInputBox from "./PasswordInputBox";
import NameInputBox from "./NameInputBox";

const Signup = () =>{
    console.log("SIGNUP PAGE")
    const [nickname, setNickname] = useState("");
    const [nicknameError, setNicknameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const dispatch=useDispatch();
    const {registerStatus} = useSelector(state=>state.user)
    const navigate = useNavigate();

    useEffect(()=>{
        if(registerStatus === 'succeeded')
            navigate('/user/signin' )
        else if(registerStatus === "failed"){
            setNickname("")
            setEmail("");
            setPassword("");
        }
    }, [registerStatus])

    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(registerUser({'nickname': nickname, 'email': email, 'password': password}))

    }


    return(
        <div className='login_wrapper'>

            <h3 className="mb-4">Sign up a new account</h3>
            <Form className='signup_form' onSubmit={handleSubmit}>
                <NameInputBox nickname={nickname} setNickname={setNickname} nicknameError={nicknameError} setNicknameError={setNicknameError}/>
                <EmailInputBox email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />
                <PasswordInputBox password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} placeHolder="Password"/>
                <SignupButton nickname={nickname} email={email} password={password}
                              nicknameError={nicknameError} emailError={emailError} passwordError={passwordError}  />

            </Form>

            <span>Have an account? <Link to={`${homeLink}/user/signin`}> login here</Link></span>

        </div>



    )

}
export default Signup
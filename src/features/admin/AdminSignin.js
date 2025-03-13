import Form from "react-bootstrap/Form";
import EmailInputBox from "../user/EmailInputBox";
import PasswordInputBox from "../user/PasswordInputBox";
import LoginButton from "../user/LoginButton";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../user/userSlice";
import {loginAdmin} from "./adminSlice";
import {useNavigate} from "react-router-dom";


const AdminSignin = () =>{
    const dispatch=useDispatch();

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [error, setError] = useState({})


    const navigate = useNavigate()
    const {loginStatus} = useSelector(state=>state.user)
    //
    console.log(loginStatus)
    useEffect(()=>{
    //     if(loginStatus === "failed"){
    //         setEmail("");
    //         setPassword("");
    //     }
        if(loginStatus === 'succeeded'){
           navigate("/admin/hub")
        }
    }, [loginStatus])


    const handleSubmit=e=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        dispatch(loginAdmin(
            {
                email: email,
                password: password
            }
        ))

    }
    return(
        <div className='login_wrapper'>

            <h3 className="mb-4">Admin Service</h3>
            <Form className='login_form'
                  onSubmit={handleSubmit}
            >

                <EmailInputBox email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />
                <PasswordInputBox password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} placeHolder="Password" />
                <LoginButton email={email} password={password} emailError={emailError} passwordError={passwordError}/>

            </Form>
        </div>


    )
}
export default AdminSignin
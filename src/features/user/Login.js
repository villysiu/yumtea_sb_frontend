import { Button, Spinner } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { homeLink } from '../../app/global';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from "./userSlice"
import { loginUser } from './userSlice';
import LoginButton from './LoginButton'
import EmailInputBox from "./EmailInputBox";
import PasswordInputBox from "./PasswordInputBox";
const Login = () =>{
console.log("LOGIN PAGE")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const dispatch=useDispatch();

    const {loginStatus} = useSelector(state=>state.user)

    useEffect(()=>{
       if(loginStatus === "failed"){
            setEmail("");
            setPassword("");
        }
        if(loginStatus === 'succeeded'){
            console.log("user session expired in 10 min 5 secs");
            setTimeout(() => {
                console.log("expired ");
                dispatch(removeUser());
                // dispatch()
            }, 105000);
        }
    }, [loginStatus])


    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(loginUser({'email': email, 'password': password}))
        
    }


    return(
       <div className='login_wrapper'>

            <h3 className="mb-4">Sign in to your account</h3>
           <Form className='login_form' onSubmit={handleSubmit}>

               <EmailInputBox email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />
               <PasswordInputBox password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} />
               <LoginButton email={email} password={password} emailError={emailError} passwordError={passwordError}/>

           </Form>
           <div>Forgot your password?</div>
           <Link to={`${homeLink}/user/signup`}>

               Create an account

           </Link>
       </div>


    )
}
export default Login
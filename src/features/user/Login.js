import { Button, Spinner } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { homeLink } from '../../app/global';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {resetUserStatus} from './userSlice'
import { loginUser } from './userSlice';
import LoginButton from './LoginButton'
const Login = () =>{
console.log("LOGIN PAGE")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();

    const {loginStatus} = useSelector(state=>state.user)

    useEffect(()=>{
       if(loginStatus === "failed"){
            setEmail("");
            setPassword("");
        }
    }, [loginStatus])


    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(loginUser({'email': email, 'password': password}))
        
    }

    return(
       <div className='login_wrapper'>

            <h4 className="mb-4">Sign in to your account</h4>
            <Form className='login_form' onSubmit={handleSubmit}>

                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                    <Form.Control type="text" placeholder="Email" value={email}
                        onChange={e=>setEmail(e.target.value)}
                                  // onClick={handleClick}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} 
                        onChange={e=>setPassword(e.target.value)}
                                  // onClick={handleClick}
                    />
                </FloatingLabel>
                <LoginButton email={email} password={password}/>
                          
            </Form>
            <div>Forgot your password?</div>
            <Link to={`${homeLink}/user/signup`}>

                    Create an account

            </Link>
    </div>

    

    )
}
export default Login
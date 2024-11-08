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
    const token_status = useSelector(state=>state.user.token.status)
    const current_user_status = useSelector(state=>state.user.current_user.status)
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const dispatch=useDispatch();
    // console.log(state)

    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(loginUser({'username': username, 'password': password}))
        
    }
    const handleClick=()=>{
        setError('')
    }
    useEffect(()=>{
        if(token_status === 'failed' || current_user_status === 'failed'){
            setError("Eitehr username or password is incorrect. Please try again.")
            setUsername('')
            setPassword('')
            dispatch(resetUserStatus())
        }

    }, [token_status, current_user_status, setError])

    return(
       <div className='login_wrapper'>
        <div className='login'>
            <h1 className="mb-5">Sign in to your account</h1>
            <Form className='login_form' onSubmit={handleSubmit}>
                {/* <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel> */}

                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" value={username} 
                        onChange={e=>setUsername(e.target.value)} onClick={handleClick} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} 
                        onChange={e=>setPassword(e.target.value)} onClick={handleClick} />
                </FloatingLabel>
                {error && <div className='login_error'>{error} </div>}
                <LoginButton username={username} password={password}/>
                          
            </Form>
            <div>Forgot your password?</div>
            <Link to={`${homeLink}/user/signup`}>
                <Button className='signup_button'>Create an account</Button>
            </Link>

            

    

    </div>
    </div>
    

    )
}
export default Login
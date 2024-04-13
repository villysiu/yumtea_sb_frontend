import { Button, Spinner } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { homeLink } from '../../app/global';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './userSlice';

const Login = () =>{
    const location = useLocation()
    console.log(location.pathname)
    const token_status = useSelector(state=>state.user.token.status)
    const current_user_status = useSelector(state=>state.user.current_user.status)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();
    // console.log(state)
    const handleSubmit=e=>{
        e.preventDefault()
        dispatch(loginUser({'username': username, 'password': password}))
        
    }
    return(
       
        <div className='login_form'>
            <h1 className="mb-5">Sign in to your account</h1>
            <Form onSubmit={handleSubmit}>
                {/* <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel> */}

                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" value={username} 
                        onChange={e=>setUsername(e.target.value)} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} 
                        onChange={e=>setPassword(e.target.value)} />
                </FloatingLabel>
                {
                    token_status === 'loading' || current_user_status === 'loading' ? 
                    <Button className='gold_button mb-3' style={{'width': '81px'}}><Spinner size="sm" /></Button>

                    :
                    <Button type="submit" className='gold_button mb-3' disabled={ !username || !password }>
                        Sign In
                    </Button>
                }              
            </Form>
            <div>Forgot your password?</div>
            <Link to={`${homeLink}/user/signup`}>
                <Button className='gold_button mt-5' >Create an account</Button>
            </Link>

    </div>
    

    )
}
export default Login
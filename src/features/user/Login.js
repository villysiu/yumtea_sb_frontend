import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { homeLink } from '../../app/global';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch=useDispatch();

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        // const formData=new FormData()
        // formData.append("email", email)
        // formData.append("password", password)
        // dispatch(loginUser({user: Object.fromEntries(formData)}))
        // .catch((error) => {
        //     console.log(error)
        // })
        
        // e.target.reset() 
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
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Username" value={email} 
                onChange={e=>setEmail(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} 
                onChange={e=>setPassword(e.target.value)} />
                </FloatingLabel>
                <Button type="submit" className='gold_button mb-3' 
                    disabled={ !email || !password }>Sign In</Button>
            </Form>
            <div>Forgot your password?</div>
            <Link to={`${homeLink}/signup`}>
                <Button className='gold_button mt-5' >Create an account</Button>
            </Link>

    </div>
    

    )
}
export default Login
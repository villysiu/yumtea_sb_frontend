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

const Signup = () =>{
    console.log("SIGNUP PAGE")
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const {registerStatus} = useSelector(state=>state.user)
    const navigate = useNavigate();

    useEffect(()=>{
        if(registerStatus === 'succeeded')
            navigate('../user/login' )
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

            <h4 className="mb-4">Sign up a new account</h4>
            <Form className='signup_form' onSubmit={handleSubmit}>

                <FloatingLabel controlId="floatingNickname" label="Nickname" className="mb-3">
                    <Form.Control type="text" placeholder="Nickname" value={nickname}
                                  onChange={e=>setNickname(e.target.value)}
                        // onClick={handleClick}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
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
                <SignupButton nickname={nickname} email={email} password={password}/>

            </Form>

            <span>Have an accunt? <Link to={`${homeLink}/user/signin`}> login here</Link></span>

        </div>



    )

}
export default Signup
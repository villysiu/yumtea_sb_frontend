import { useState } from "react"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { Link } from 'react-router-dom';
import { PersonCircle, PersonFill } from "react-bootstrap-icons";
import UserDropdown from "./UserDropdown";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./userSlice";
import { Spinner } from "react-bootstrap";

const UserButton = () =>{
    const dispatch=useDispatch();
    const current_user = useSelector(state => state.user.current_user )
    const [show, setShow] = useState(false)
    
    useEffect(()=>{
        console.log("user login I am in APP.ks")
        if(localStorage.getItem('token') && current_user.username===null){
            dispatch(fetchCurrentUser())
        }
    }, [dispatch, current_user.username])

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.tagName.toLowerCase() === 'a')
                setShow(false)
        };
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    
    const UserButtonHelper = () =>{
        return (
            <div className="hello_user" 
                onMouseEnter={()=>setShow(true)}
                onMouseLeave={()=>setShow(false)}
            >
                <div className="d-none d-sm-block pe-2">Hello {current_user.username}</div>
                <PersonFill className='header_icon' />
                {
                    show && <UserDropdown />
                }
            </div>
        )
    }
    if(current_user.status === 'loading')
        return <Spinner />

    return (
        <>
            {
                current_user.username===null ? 
                    <Link to={`${homeLink}/user/signin`}>
                        <PersonCircle className="header_icon"/> 
                    </Link>
                    :
                    <UserButtonHelper />       
            }
        </>
    )
}
export default UserButton

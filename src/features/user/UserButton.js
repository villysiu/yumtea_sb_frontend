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
const UserButton = ({showMDFullscrenn, setShowMDFullscrenn}) =>{
    const dispatch=useDispatch();
    const current_user = useSelector(state => state.user.current_user )
    const [show, setShow] = useState(false)
    
    useEffect(()=>{
      console.log("user login I am in APP.ks")
      if(localStorage.getItem('token') && current_user.username===null){
          dispatch(fetchCurrentUser())
      }
  }, [dispatch, current_user.username])

    const handleMouseenter = e =>{
        setShow(true)
    }
    const handleMouseleave = e =>{
        setShow(false)
    }
    const UserButtonHelper = () =>{
        
        return (
            <>
                {
                    !showMDFullscrenn && 
                    <div className="hello_user" 
                        onMouseEnter={handleMouseenter}
                        onMouseLeave={handleMouseleave}
                    >
                        Hello {current_user.username}
                        <PersonFill className='circle_button' />
                        {
                            show && <UserDropdown />
                        }
                    </div>
                }
            </>
        )
      
    }
    if(current_user.status === 'loading')
        return <Spinner />

    return (
        <>
            {
                current_user.username===null ? 
                    <Link to={`${homeLink}/user/signin`}>
                        <PersonCircle className="circle_button"/> 
                    </Link>
                    :
                    <UserButtonHelper />       
            }
        </>
        )

}
export default UserButton

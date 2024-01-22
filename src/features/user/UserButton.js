import { useState } from "react"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { Link } from 'react-router-dom';
import { PersonCircle } from "react-bootstrap-icons";
import UserDropdown from "./UserDropdown";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./userSlice";
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
                {/* max-width: 992px */}
                <div className='d-lg-none '>
                    <Link to={`${homeLink}/secure/account`} className="solid_link" 
                    onClick={()=>setShowMDFullscrenn(false)}>
                        My Account
                    </Link>
                </div>
                {/* min-width: 992px */}
                <div className='d-none d-lg-block'>
                    <div className="hello_user" 
                        onMouseEnter={handleMouseenter}
                        onMouseLeave={handleMouseleave}
                    >
                        Hello {current_user.username}
                        {
                            show && <UserDropdown />
                        }
                
                    </div>
                </div>
            </>
        )
      
    }
    if(current_user.status === 'loading')
        return <div>Loading</div>

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

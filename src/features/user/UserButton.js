import { useState } from "react"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { Link } from 'react-router-dom';
import { PersonCircle } from "react-bootstrap-icons";
import UserDropdown from "./UserDropdown";
const UserButton = ({closeMDDropdown}) =>{
    const current_user = useSelector(state => state.user.current_user )
    const [show, setShow] = useState(false)
    const handleMouseenter = e =>{
        setShow(true)
    }
    const handleMouseleave = e =>{
        setShow(false)
    }
    
    return (
        <>
        
            {
                current_user.username===null ? 
                    <Link to={`${homeLink}/user/signin`} 
                        onClick={closeMDDropdown} >
                        <PersonCircle className="circle_button"/> 
                    </Link>
                    :
                    
                    <div className="hello_user" 
                        onMouseEnter={handleMouseenter}
                        onMouseLeave={handleMouseleave}
                    >
                            Hello {current_user.username}
                        {
                            show && <UserDropdown />
                        }
                    
                    </div>
                    
            }
                
  
            </>
        )

}
export default UserButton

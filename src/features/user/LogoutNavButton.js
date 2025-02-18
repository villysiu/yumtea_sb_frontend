import { logoutUser } from "./userSlice"
import {useDispatch, useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import { homeLink } from "../../app/global"
import NavDropdown from 'react-bootstrap/NavDropdown';

const LogoutNavButton = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user)
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
        if(!currentUser)
            navigate("http://127.0.0.1:8001/");
    }
    return(

        <NavDropdown.Item className="nav-dropdown-item" onClick={handleClick} >
            Sign out
        </NavDropdown.Item >
       
    )
}
export default LogoutNavButtonre
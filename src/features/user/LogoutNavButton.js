import { logoutUser } from "./userSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import NavDropdown from 'react-bootstrap/NavDropdown';

const LogoutNavButton = () =>{
    const dispatch = useDispatch()
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())

    }
    return(

        <NavDropdown.Item className="nav-dropdown-item" onClick={handleClick} href="logout">
            Sign out
        </NavDropdown.Item >
       
    )
}
export default LogoutNavButton
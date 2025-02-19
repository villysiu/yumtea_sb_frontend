import { logoutUser } from "./userSlice"
import {useDispatch, useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import { homeLink } from "../../app/global"
import NavDropdown from 'react-bootstrap/NavDropdown';

const LogoutNavButton = ({setShow}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user)
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
        setShow(false);
        if(!currentUser)
            navigate("http://127.0.0.1:8001/");
    }
    return(

        <div className="user_modal_item bottom" onClick={handleClick} >
            Sign out
        </div >

       
    )
}
export default LogoutNavButton
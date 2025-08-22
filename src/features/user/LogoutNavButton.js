import { logoutUser } from "./userSlice"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const LogoutNavButton = ({setShow}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user)
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
        setShow(false);
        if(!currentUser)
            navigate("/");
    }
    return(

        <div className="user_modal_item bottom" onClick={handleClick} >
            Sign out
        </div >

       
    )
}
export default LogoutNavButton
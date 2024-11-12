import { logoutUser } from "./userSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
const Logout = ({setShow}) =>{
    const dispatch = useDispatch()
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
        setShow(show=>!show)
    }
    return(
        // <Link to={`${homeLink}`} className='header_user_link' onClick={handleClick} >
        <div className='header_user_link' onClick={handleClick} >
                <div className='header_user_box bottom'> 
                    Sign out
                </div> 
            </div>
       
    )
}
export default Logout
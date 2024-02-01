import { logoutUser } from "./userSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
const Logout = () =>{
    const dispatch = useDispatch()
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
    }
    return(
        <Link to={`${homeLink}`} className="solid_link pb-3" onClick={handleClick}>Sign out</Link>
        // <div className="solid_link  mb-3" style={{'cursor': 'pointer'}} onClick={handleClick}>Sign out</div>
    )
}
export default Logout